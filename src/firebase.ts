import admin from 'firebase-admin'
import {cert} from 'firebase-admin/app';

const initFirebase = () => {
  if (admin.apps.length === 0) {
   admin.initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });}
};

const PREFIX = process.env.NODE_ENV == 'production' ? '' : 'dev-';
const COLLECTION_NAMES = {
  CONTACT_REQUESTS: PREFIX + 'contact-requests',
  SINUP_REQUESTS: PREFIX + 'newsletter-signup-requests',
  NEWSLETTER_CONTACTS: PREFIX + 'newsletter-contacts',
  MAIL: PREFIX + 'mail',
};

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
  const mailRef = admin
    .firestore()
    .collection(COLLECTION_NAMES.MAIL)
    .doc();
    
  batch.set(contactRequestRef, {
    name,
    email,
    message,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    emailSent: true,
    emailId: mailRef.id,
  });

  batch.set(mailRef, {
    to: process.env.CONTACT_REQUEST_EMAIL,
    message: {
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Neue Nachricht von ${name} (${email ?? "KEINE-EMAIL"})\n\n-------\n\n${message}`,
    },
  });

  await batch.commit();
};
