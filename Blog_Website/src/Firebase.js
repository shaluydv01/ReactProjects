// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGC7TuN6B888VPO92-99_er3NPxzvuUTM",
  authDomain: "react-blog-website-89aa4.firebaseapp.com",
  projectId: "react-blog-website-89aa4",
  storageBucket: "react-blog-website-89aa4.firebasestorage.app",
  messagingSenderId: "702165665230",
  appId: "1:702165665230:web:09600016b78e3c55c0979f",
  measurementId: "G-NRBKT044GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);