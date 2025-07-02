// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeCVgxYUcKOHgxjtLg5ugGj-wWv9Wnaf0",
  authDomain: "panelext.firebaseapp.com",
  projectId: "panelext",
  storageBucket: "panelext.firebasestorage.app",
  messagingSenderId: "697213525130",
  appId: "1:697213525130:web:34df421af59b59b54a6173"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };