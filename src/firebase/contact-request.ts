import {COLLECTION_NAMES, initFirebase} from './internal';

import admin from 'firebase-admin';

interface ContactRequest {
  name: string;
  email?: string;
  message: string;
}
export const createContactRequest = async ({
  name,
  email,
  message,
}: ContactRequest) => {
  initFirebase();
  const batch = admin.firestore().batch();

  const contactRequestRef = admin
    .firestore()
    .collection(COLLECTION_NAMES.CONTACT_REQUESTS)
    .doc();
  const mailRef = admin.firestore().collection(COLLECTION_NAMES.MAIL).doc();

  batch.set(contactRequestRef, {
    name,
    email: email?.toLowerCase() ?? null,
    message,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    emailSent: true,
    emailId: mailRef.id,
  });

  batch.set(mailRef, {
    to: process.env.CONTACT_REQUEST_EMAIL,
    message: {
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Neue Nachricht von ${name} (${
        email ?? 'KEINE-EMAIL'
      })\n\n-------\n\n${message}`,
    },
  });

  await batch.commit();
};
