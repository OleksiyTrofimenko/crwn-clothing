import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCrHE-9jUYgoiOB7y9n5VMgkzRREHX3tkc",
  authDomain: "crwn-db-c6d93.firebaseapp.com",
  databaseURL: "https://crwn-db-c6d93.firebaseio.com",
  projectId: "crwn-db-c6d93",
  storageBucket: "crwn-db-c6d93.appspot.com",
  messagingSenderId: "375258060035",
  appId: "1:375258060035:web:cbad7503aaa949e8410536",
  measurementId: "G-HQJZ88QG7C"
};

firebase.initializeApp(config);

// Function that allow us get user from auth object
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Find required data by user id
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Represents the data
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    // Please firebase create new reference with unique ID;
    const newDocRef = collectionRef.doc();

    // If we pass something inside doc, this will be our ID
    // const newDocRef = collectionRef.doc(obj.title);

    batch.set(newDocRef, obj);
  });

  // commit it's a Promise
  await batch.commit();
};

export const convertCollectionsSnapShotToMap = (collection) => {
  const transformedCollection = collection.docs.map(doc => {
    const { title, items } = doc.data();

    // encodeURI handle characters that can't be read by url ^*$ etc...
    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
