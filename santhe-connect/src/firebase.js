import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAo1-vgHHan_ZJIXgEsPC5n31xkYYY-jco",
  authDomain: "santhe-connect-58d08.firebaseapp.com",
  projectId: "santhe-connect-58d08",
  storageBucket: "santhe-connect-58d08.firebasestorage.app",
  messagingSenderId: "233820133724",
  appId: "1:233820133724:web:bd0803773f63b0726d0999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database export
export const db = getFirestore(app);