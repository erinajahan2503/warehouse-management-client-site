// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFMZV6XMbaxGgHycPBl5M6xm9qu7ymhZo",
    authDomain: "car-haunter.firebaseapp.com",
    projectId: "car-haunter",
    storageBucket: "car-haunter.appspot.com",
    messagingSenderId: "917282276723",
    appId: "1:917282276723:web:b969ebb98deec0b4723106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
