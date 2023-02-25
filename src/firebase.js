// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA4mcjWpKYgvZvzmA9T_HqgToDKJXOhIA",
  authDomain: "riyachat-96352.firebaseapp.com",
  projectId: "riyachat-96352",
  storageBucket: "riyachat-96352.appspot.com",
  messagingSenderId: "968232064929",
  appId: "1:968232064929:web:36025a71cec581b7a01de0",
  measurementId: "G-3P8JL3ZNVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);