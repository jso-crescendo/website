import {initializeApp} from 'firebase/app';
import {ReCaptchaV3Provider, initializeAppCheck} from 'firebase/app-check';
import {Firestore, getFirestore} from 'firebase/firestore/lite';
import {useEffect, useState} from 'react';

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
        apiKey: "AIzaSyAH3_d1pgiUrUcqUFXCVVES0jOC9gRcUuA",
        authDomain: "jso-crescendo.firebaseapp.com",
        projectId: "jso-crescendo",
        storageBucket: "jso-crescendo.appspot.com",
        messagingSenderId: "961926671229",
        appId: "1:961926671229:web:8afb1fac0557968af67a14"
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
