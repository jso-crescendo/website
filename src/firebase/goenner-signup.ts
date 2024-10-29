import 'server-only';
import {COLLECTION_NAMES, initFirebase} from './internal';
import admin from 'firebase-admin';

interface GoennerSignupRequest {
  firstname: string;
  lastname: string;
  email?: string;
  street: string;
  zip: string;
  city: string;
  amount: number;
}

export const signupAsGoenner = async ({
  firstname,
  lastname,
  email,
  street,
  zip,
  city,
  amount,
}: GoennerSignupRequest) => {
  initFirebase();
  const batch = admin.firestore().batch();

  const signupRef = admin
    .firestore()
    .collection(COLLECTION_NAMES.GOENNER_SIGNUPS)
    .doc();
  const internalMailRef = admin
    .firestore()
    .collection(COLLECTION_NAMES.MAIL)
    .doc();

  batch.set(signupRef, {
    signup: {
      version: 'v1.0.0',
      date: admin.firestore.FieldValue.serverTimestamp(),
    },
    email: email?.toLowerCase() ?? null,
    firstname,
    lastname,
    address: {
      street,
      zip,
      city,
    },
    amount,
    emails: [
      {
        type: 'INTERNAL_NOTIFICATION',
        emailId: internalMailRef.id,
      },
    ],
  });

  batch.set(internalMailRef, {
    to: 'florian.rohrer+goenner@jso-crescendo.ch',
    message: {
      subject: `Neue Goenner-Anmeldung`,
      html: `
<!doctype html>
<html>
  <head>
    <style>
      table {
        width: 100%;
      }

      td {
        padding: 10px;
        border: 1px solid #000; /* Add borders to each cell */
      }
    </style>
  </head>
  <body>
    <table>
      <tbody>
        <tr>
          <td><strong>Name</strong></td>
          <td>${firstname} ${lastname}</td>
        </tr>
        <tr>
          <td><strong>Email</strong></td>
          <td>${email ?? 'nicht angegeben, wünscht alles auf Papier'}</td>
        </tr>
        <tr>
          <td><strong>Adresse</strong></td>
          <td>${street} <br />${zip}<br />${city}</td>
        </tr>
        <tr>
          <td><strong>Betrag</strong></td>
          <td>${amount}</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
      `,
    },
  });

  await batch.commit();
};
