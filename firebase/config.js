// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqKuKk-sP1dAVZ5Qebsoji9nMIMyAIg8w",
  authDomain: "firebase-app-393319.firebaseapp.com",
  projectId: "firebase-app-393319",
  storageBucket: "firebase-app-393319.appspot.com",
  messagingSenderId: "107189785944",
  appId: "1:107189785944:android:0d4a3a63b5a011802ec12d",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);