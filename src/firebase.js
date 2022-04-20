import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmgi85SWlZQ2uWObaN-yPboQ8pcJqcfKo",
  authDomain: "sneakers-c3750.firebaseapp.com",
  projectId: "sneakers-c3750",
  storageBucket: "sneakers-c3750.appspot.com",
  messagingSenderId: "636996700840",
  appId: "1:636996700840:web:48bc449f065648c230d09d",
  measurementId: "G-TEYGLQFK8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}