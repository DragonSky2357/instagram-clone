import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQUNkFchi6MRXrl7PgrjMUKvtMVPOFfFs",
  authDomain: "instagram-clone-652b1.firebaseapp.com",
  projectId: "instagram-clone-652b1",
  storageBucket: "instagram-clone-652b1.appspot.com",
  messagingSenderId: "468898141191",
  appId: "1:468898141191:web:9a934a81d35925f2a946a2",
  measurementId: "G-QW4H3T7NF5",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
