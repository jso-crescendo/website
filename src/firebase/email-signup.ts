import 'server-only';
import {COLLECTION_NAMES, initFirebase} from './internal';
import admin from 'firebase-admin';
import {calculateHash} from '../utils/hash';
import {isEmail} from '../utils/isEmail';
import {srid} from '../utils/srid';

interface SignupRequest {
  name: string;
  email: string;
}
export const createSignupRequest = async ({name, email}: SignupRequest) => {
  if (!isEmail(email)) {
    throw new Error('invalid email');
  }

  initFirebase();

  if (await emailExists(email)) {
    console.info('user with email already exists');
  } else {
    const user = {
      name,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    const confirmationCode = calculateHash({name, email, salt: srid()});

    const batch = admin.firestore().batch();

    const mailRef = admin.firestore().collection(COLLECTION_NAMES.MAIL).doc();
    batch.set(mailRef, {
      to: email,
      replyTo: 'newsletter@jso-crescendo.ch',
      message: {
        subject: 'JSO Crescendo Newsletter',
        text: `
        Liebe/r ${name}\n
        Vielen Dank für dein Interesse am Newsletter vom JSO Crescendo.
        Bitte bestätige deine Email indem du auf folgenden Link klickst:
        https://jso-crescendo.ch/newsletter/confirm?code=${confirmationCode}\n
        Musikalische Grüsse
        JSO Crescendo\n\n
        Wenn du dich nicht für den JSO Crescendo Newsletter angemeldet hast, ignoriere diese Email.
      `,
      },
    });

    batch.set(
      admin.firestore().collection(COLLECTION_NAMES.NEWSLETTER_CONTACTS).doc(),
      {
        name: user.name,
        email: user.email,
        signup: {
          version: 'v2.0.0',
          date: admin.firestore.FieldValue.serverTimestamp(),
        },
        confirmationEmail: {
          emailSent: true,
          emailSentAt: admin.firestore.FieldValue.serverTimestamp(),
          emailId: mailRef.id,
          confirmationCode,
        },
        confirmation: {
          isConfirmed: false,
        },
      },
    );

    await batch.commit();
  }
};

export const confirmCode = async (code: string) => {
  initFirebase();
  const userWithCode = await admin
    .firestore()
    .collection(COLLECTION_NAMES.NEWSLETTER_CONTACTS)
    .where('confirmationEmail.confirmationCode', '==', code)
    .where('confirmation.isConfirmed', '!=', true)
    .limit(1)
    .get();

  if (userWithCode.empty) {
    console.info('no user with that code could be found', {code});
    return false;
  }

  await admin
    .firestore()
    .collection(COLLECTION_NAMES.NEWSLETTER_CONTACTS)
    .doc(userWithCode.docs[0].id)
    .update({
      confirmation: {
        isConfirmed: true,
        confirmedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
    });

  console.info('email confirmed successfully', {code});
  return true;
};

const emailExists = async (email: string) => {
  const existingUsers = await admin
    .firestore()
    .collection(COLLECTION_NAMES.NEWSLETTER_CONTACTS)
    .where('email', '==', email)
    .count()
    .get();

  return existingUsers.data().count > 0;
};
