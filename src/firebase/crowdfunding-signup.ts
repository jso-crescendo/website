import 'server-only';
import {COLLECTION_NAMES, initFirebase} from './internal';
import admin from 'firebase-admin';

interface GoennerSignupRequest {
  fullname: string;
  email: string;
}

export const signupCrowdfunding = async ({
  fullname,
  email,
}: GoennerSignupRequest) => {
  initFirebase();
  const batch = admin.firestore().batch();

  const signupRef = admin
    .firestore()
    .collection(COLLECTION_NAMES.CROWDFUNDING_SIGNUPS)
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
    email: email.toLowerCase(),
    fullname,
    emails: [
      {
        type: 'INTERNAL_NOTIFICATION',
        emailId: internalMailRef.id,
      },
    ],
  });

  batch.set(internalMailRef, {
    to: 'simon.kurath@jso-crescendo.ch',
    bcc: 'florian.rohrer@jso-crescendo.ch',
    message: {
      subject: `Intresse an Crowdfunding via Website`,
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
    <p>Folgende Person möchte darüber informiert werden, wenn das Crowdfunding verfügbar ist:</p>
    <table>
      <tbody>
        <tr>
          <td><strong>Name</strong></td>
          <td>${fullname}</td>
        </tr>
        <tr>
          <td><strong>Email</strong></td>
          <td>${email}</td>
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
