// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ0an_tkdsw9-7vcK6PaAyFc4MPktZcj8",
  authDomain: "agrismart-cd927.firebaseapp.com",
  projectId: "agrismart-cd927",
  storageBucket: "agrismart-cd927.appspot.com",
  messagingSenderId: "771621287115",
  appId: "1:771621287115:web:d64844ea0866fd3586174e",
  measurementId: "G-KJDERBF3K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
