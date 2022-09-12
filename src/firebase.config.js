import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBB_TxlGpgpU3sXo8ntgkwCiKVeFarTh70",
    authDomain: "real-estate-website-75c62.firebaseapp.com",
    projectId: "real-estate-website-75c62",
    storageBucket: "real-estate-website-75c62.appspot.com",
    messagingSenderId: "943205581701",
    appId: "1:943205581701:web:e51ae052031a908c707aec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()