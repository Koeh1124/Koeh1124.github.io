//Importing firebase, taken directrly from firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdMLCc3Nwx_Rj3vP4wCteajn3KEpIbc6c",
  authDomain: "foodblog-8d953.firebaseapp.com",
  projectId: "foodblog-8d953",
  storageBucket: "foodblog-8d953.appspot.com",
  messagingSenderId: "140511167625",
  appId: "1:140511167625:web:dd7be49ee0586f39c5f258",
  measurementId: "G-F7GZB21NQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const fireStore = getFirestore(app);