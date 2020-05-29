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

// Store user in firestore if they don't exist
export const createUserProfileDoc = async (userAuth, additionalData) => {
  // If user has logget out
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log('Error: ', err.message);
    }
  }
  return userRef;
};

/** Get data from snapshot  and add routeURL also convert form array type to object type*/

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};
export default firebase;

/**Add shop data using program */
// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);
//   /**Collection snapshot gives us back an array of documents objects inside docs key*/
//   // const collectionSnapshot = collectionRef.get();

//   const batch = firestore.batch();

//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     // Create a empty docs (with unique id) inside the collection
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };
