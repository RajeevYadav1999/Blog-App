// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-77e26.firebaseapp.com",
  projectId: "mern-blog-77e26",
  storageBucket: "mern-blog-77e26.appspot.com",
  messagingSenderId: "710396804572",
  appId: "1:710396804572:web:180aab8932ffb4f06ea319"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);