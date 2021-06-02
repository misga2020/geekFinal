// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZXQLwClQs9JVkj9EwIKbQ-dV7eXX0Xe4",
  authDomain: "geekfinalp.firebaseapp.com",
  projectId: "geekfinalp",
  storageBucket: "geekfinalp.appspot.com",
  messagingSenderId: "357232088638",
  appId: "1:357232088638:web:cfbe63a94dabbebc9b236f",
  measurementId: "G-2QSY06SLJD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
