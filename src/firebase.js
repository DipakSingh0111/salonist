import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCy9-PUJiHUvLQ8U5w4zfOj30QRPRBxqRM",
    authDomain: "salonist-7d4bd.firebaseapp.com",
    databaseURL: "https://salonist-7d4bd.firebaseio.com",
    projectId: "salonist-7d4bd",
    storageBucket: "salonist-7d4bd.appspot.com",
    messagingSenderId: "114401727175",
    appId: "1:114401727175:web:3ba61b2b46dbdce9c264e2",
    measurementId: "G-968ZW5DTE5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// Initialize Google Auth Provider
const provider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');
appleProvider.addScope('email');
appleProvider.addScope('name');


export { auth, provider, appleProvider };