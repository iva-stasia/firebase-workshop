import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAyYT-B6Qy5lZxEuTKmWSpEkTOHJ_oPw5Q',
  authDomain: 'auth-firebase-dc315.firebaseapp.com',
  projectId: 'auth-firebase-dc315',
  storageBucket: 'auth-firebase-dc315.appspot.com',
  messagingSenderId: '172229837978',
  appId: '1:172229837978:web:729b4e39252f6b46968b23',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
