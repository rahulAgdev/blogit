// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogit-a7810.firebaseapp.com",
  projectId: "blogit-a7810",
  storageBucket: "blogit-a7810.appspot.com",
  messagingSenderId: "502344523516",
  appId: "1:502344523516:web:55f471d35f19b24a380179"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);