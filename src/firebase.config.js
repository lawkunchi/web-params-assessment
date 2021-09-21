// import firebase from 'firebase/app';
import Firebase from "firebase";
// require('firebase/auth');
// require('firebase/database');

const firebaseConfig = {
  apiKey: "AIzaSyCk60zA0Vvy7Q4YuW5sngqCSZfXQkUn7u0",
  authDomain: "web-params-f623b.firebaseapp.com",
  projectId: "web-params-f623b",
  storageBucket: "web-params-f623b.appspot.com",
  messagingSenderId: "1070943791228",
  appId: "1:1070943791228:web:cbd4702d5da7407e6a41f9"
};

const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

export default db;