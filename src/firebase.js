// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBYzIUywlA-iscWl2w5YY1NOzbsb5rWQTo",
  authDomain: "aswin-slack.firebaseapp.com",
  databaseURL: "https://aswin-slack.firebaseio.com",
  projectId: "aswin-slack",
  storageBucket: "aswin-slack.appspot.com",
  messagingSenderId: "779486995854",
  appId: "1:779486995854:web:182224b507c8ecf6e570df",
  measurementId: "G-89B4Q5FTT5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
