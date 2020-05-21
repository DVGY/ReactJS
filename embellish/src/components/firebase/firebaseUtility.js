import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
  apiKey: 'AIzaSyBN8Sx7a9qCTPMbPWtjRqlq_JcHIGf3t7c',
  authDomain: 'embellish-48fa6.firebaseapp.com',
  databaseURL: 'https://embellish-48fa6.firebaseio.com',
  projectId: 'embellish-48fa6',
  storageBucket: 'embellish-48fa6.appspot.com',
  messagingSenderId: '571570228350',
  appId: '1:571570228350:web:bf9c77a7d6e4bc5f0f5c2f',
  measurementId: 'G-J25F10S8JM',
};
// Initialize Firebase
firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
