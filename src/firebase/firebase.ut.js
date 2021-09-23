import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config={
  apiKey: "AIzaSyCJPoUdFYAZuHrWFg7Ixw-uU2Qc8t-cb1c",
  authDomain: "ecommerce-c4da4.firebaseapp.com",
  projectId: "ecommerce-c4da4",
  storageBucket: "ecommerce-c4da4.appspot.com",
  messagingSenderId: "389836944674",
  appId: "1:389836944674:web:8312be600ae8fe2184a17b",
  measurementId: "G-KST4MKFQS2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;