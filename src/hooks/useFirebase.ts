import {Firestore, getFirestore} from 'firebase/firestore/lite';
import {ReCaptchaV3Provider, initializeAppCheck} from 'firebase/app-check';
import {useEffect, useState} from 'react';

import {initializeApp} from 'firebase/app';

interface LoadingFirestore {
  loaded: false;
  firestore: null;
}

interface LoadedFirestore {
  loaded: true;
  firestore: Firestore;
}
export const useFirestore = (
  delay: number = 2500,
): LoadingFirestore | LoadedFirestore => {
  const [db, setFireStoreDb] = useState<Firestore | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const app = initializeApp({
        apiKey: 'AIzaSyBOJJXAEm6EkNHO36Ae1QTUxu3RY2X6qkc',
        authDomain: 'jso-crescendo-dev.firebaseapp.com',
        projectId: 'jso-crescendo-dev',
        storageBucket: 'jso-crescendo-dev.appspot.com',
        messagingSenderId: '742818647671',
        appId: '1:742818647671:web:c974570a1d8041a7c38072',
      });
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(
          '6LfGHRUgAAAAABq9CQuo7b4I-MvuugL2ZTckiJTm',
        ),
        isTokenAutoRefreshEnabled: true,
      });
      setFireStoreDb(getFirestore(app));
    }, delay);
  }, [delay]);

  if (db) {
    return {
      loaded: true,
      firestore: db,
    };
  }
  return {loaded: false, firestore: null};
};
