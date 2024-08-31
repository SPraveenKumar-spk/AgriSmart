// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRS3frNbUhAC2xCXvZ1amdgMZtYnWNxbk",
  authDomain: "agrismart-d081e.firebaseapp.com",
  projectId: "agrismart-d081e",
  storageBucket: "agrismart-d081e.appspot.com",
  messagingSenderId: "202337455658",
  appId: "1:202337455658:web:4300462d63dfd4e347bd53",
  measurementId: "G-241LJKT1RZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
