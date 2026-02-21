import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA5crFaS3MMS_k_Q2csQpQHtmOzKyEmsYY",
  authDomain: "ucom-8880b.firebaseapp.com",
  databaseURL: "https://ucom-8880b-default-rtdb.firebaseio.com",
  projectId: "ucom-8880b",
  storageBucket: "ucom-8880b.firebasestorage.app",
  messagingSenderId: "226722327595",
  appId: "1:226722327595:web:f52f93628122b72e680e6e",
  measurementId: "G-Y2GCYRQR43",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);