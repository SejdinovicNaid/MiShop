// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGrQp1-IE8Ui1Ke7s8vxddqbgW6i3onv8",
  authDomain: "mishop-598cd.firebaseapp.com",
  projectId: "mishop-598cd",
  storageBucket: "mishop-598cd.appspot.com",
  messagingSenderId: "973584356999",
  appId: "1:973584356999:web:8999c95bc0c64480a48a22",
  measurementId: "G-HN046RHTSG"
};


// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app)
  