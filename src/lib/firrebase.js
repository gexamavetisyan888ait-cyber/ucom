// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5crFaS3MMS_k_Q2csQpQHtmOzKyEmsYY",
  authDomain: "ucom-8880b.firebaseapp.com",
  databaseURL: "https://ucom-8880b-default-rtdb.firebaseio.com",
  projectId: "ucom-8880b",
  storageBucket: "ucom-8880b.firebasestorage.app",
  messagingSenderId: "226722327595",
  appId: "1:226722327595:web:f52f93628122b72e680e6e",
  measurementId: "G-Y2GCYRQR43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);