// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbOlTMxOONaRDGKleJIe206U0qXjD6aQY",
  authDomain: "almenu-4fd57.firebaseapp.com",
  projectId: "almenu-4fd57",
  storageBucket: "almenu-4fd57.firebasestorage.app",
  messagingSenderId: "966424348525",
  appId: "1:966424348525:web:342ad3c02e678e7fa9fc64",
  measurementId: "G-SM1CNNY6PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };