import admin from 'firebase-admin';
import {cert} from 'firebase-admin/app';

export const initFirebase = () => {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }
};

const PREFIX = process.env.NODE_ENV == 'production' ? '' : 'dev-';
export const COLLECTION_NAMES = {
  CONTACT_REQUESTS: PREFIX + 'contact-requests',
  SINUP_REQUESTS: PREFIX + 'newsletter-signup-requests',
  NEWSLETTER_CONTACTS: PREFIX + 'newsletter-contacts',
  MAIL: PREFIX + 'mail',
};
