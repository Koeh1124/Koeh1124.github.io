// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {auth} from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtUiTO2bxhgo87ZR8ekGbRE1UY6s_pRoc",
  authDomain: "casino-a9558.firebaseapp.com",
  projectId: "casino-a9558",
  storageBucket: "casino-a9558.appspot.com",
  messagingSenderId: "1085036550701",
  appId: "1:1085036550701:web:113df917295e613006b6a4",
  measurementId: "G-S9KRX52EPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth