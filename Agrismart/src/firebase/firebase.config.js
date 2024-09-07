// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMtJn-kfBMtacEZ9sE4HyLmF2i_Qw-y90",
  authDomain: "agrismart-97b7c.firebaseapp.com",
  projectId: "agrismart-97b7c",
  storageBucket: "agrismart-97b7c.appspot.com",
  messagingSenderId: "248499823078",
  appId: "1:248499823078:web:68ce71cfaccb7872bcb627",
  measurementId: "G-DKVDJQJH7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
