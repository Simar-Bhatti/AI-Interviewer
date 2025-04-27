import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";  
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD5ImbpWMSfllc33SNa7b0CE1muRQe8ZBg",
  authDomain: "prepgrid-3c96d.firebaseapp.com",
  projectId: "prepgrid-3c96d",
  storageBucket: "prepgrid-3c96d.firebasestorage.app",
  messagingSenderId: "781727156383",
  appId: "1:781727156383:web:553e76409c683a01873aaa",
  measurementId: "G-S3EEJP0MM7"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);