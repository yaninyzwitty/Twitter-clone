// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDXGY0Y5TJHNBYWFDEZNF0MjXT8FeEBdmw",
  authDomain: "twitter-clone-b9173.firebaseapp.com",
  projectId: "twitter-clone-b9173",
  storageBucket: "twitter-clone-b9173.appspot.com",
  messagingSenderId: "383316863031",
  appId: "1:383316863031:web:25eeaea53e5633663477b2",
  measurementId: "G-6EFGTG5HSF"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;