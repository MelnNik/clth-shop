import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB64RaOWzC_DqeiuWs3EqOrgK5I-F1750o',
  authDomain: 'clth-shop-dbd11.firebaseapp.com',
  databaseURL: 'https://clth-shop-dbd11.firebaseio.com',
  projectId: 'clth-shop-dbd11',
  storageBucket: 'clth-shop-dbd11.appspot.com',
  messagingSenderId: '952942853952',
  appId: '1:952942853952:web:a903af49d080891acc04a5'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
