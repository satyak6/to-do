import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCERHpdgwDvfRw_r8X8hyhGLDVXP9Aluuc",
    authDomain: "to-do-443f8.firebaseapp.com",
    projectId: "to-do-443f8",
    storageBucket: "to-do-443f8.firebasestorage.app",
    messagingSenderId: "401087845899",
    appId: "1:401087845899:web:ff454bc4c0290f9c95190e",
    measurementId: "G-19ZJCNTKEB",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;