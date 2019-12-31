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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
