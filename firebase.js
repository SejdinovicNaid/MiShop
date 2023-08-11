

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBipjXfanAYHxJYkjXZPvoSUG7GHdWXT9A",
  authDomain: "mishop-bf3de.firebaseapp.com",
  projectId: "mishop-bf3de",
  storageBucket: "mishop-bf3de.appspot.com",
  messagingSenderId: "946904670062",
  appId: "1:946904670062:web:5c707a3c35f2aefe6aeb7f",
  measurementId: "G-S8LWEDK04R",
  databaseURL: "https://mishop-bf3de-default-rtdb.europe-west1.firebasedatabase.app "

 
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);




export {app, db};
