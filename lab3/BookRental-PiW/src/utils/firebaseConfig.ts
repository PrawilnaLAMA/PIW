import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtC3H1HclKoFYYFf4bLU0c1jJOXJ4DkwM",
    authDomain: "piwo-a18af.firebaseapp.com",
    projectId: "piwo-a18af",
    storageBucket: "piwo-a18af.firebasestorage.app",
    messagingSenderId: "376667295447",
    appId: "1:376667295447:web:26014ecb9396e161156a92",
    measurementId: "G-859QZQDKJP"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);