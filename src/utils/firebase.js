// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOLzJQTOyeEDSinOxyVbr3NwJpjsB9lbw",
  authDomain: "netflixgpt-45498.firebaseapp.com",
  projectId: "netflixgpt-45498",
  storageBucket: "netflixgpt-45498.firebasestorage.app",
  messagingSenderId: "608494813211",
  appId: "1:608494813211:web:56cda84f9fa2750692f8be",
  measurementId: "G-PBDS1NE34G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();