import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import collection from '../pages/collection/collection';

const config={
  apiKey: "AIzaSyCJPoUdFYAZuHrWFg7Ixw-uU2Qc8t-cb1c",
  authDomain: "ecommerce-c4da4.firebaseapp.com",
  projectId: "ecommerce-c4da4",
  storageBucket: "ecommerce-c4da4.appspot.com",
  messagingSenderId: "389836944674",
  appId: "1:389836944674:web:8312be600ae8fe2184a17b",
  measurementId: "G-KST4MKFQS2"
};

export const createUserProfileDocument= async (userAuth, additionalData) =>{
	if(!userAuth) return;
	const userRef= firestore.doc(`users/${userAuth.uid}`);
	const snapShot= await userRef.get();
	if(!snapShot.exists){
		const { displayName, email }= userAuth;
		const createdAt= new Date();
		try{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch( error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
}
firebase.initializeApp(config);
export const convertCollectionsSnapshotToMap=(collections) => {
	const transformedCollection= collections.docs.map( doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id, 
			title,
			items
		}
	})
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()]=collection;
		return accumulator;
	}, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;