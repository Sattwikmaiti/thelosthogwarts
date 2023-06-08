// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmBsyskPllC0phFiZLeDpgb8p_IbABhQY",
    authDomain: "treasuretrove-febc8.firebaseapp.com",
    projectId: "treasuretrove-febc8",
    storageBucket: "treasuretrove-febc8.appspot.com",
    messagingSenderId: "800883334565",
    appId: "1:800883334565:web:0c16b034399ac7b36c5c4c",
    measurementId: "G-940NX6SYX7"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app)
const provider=new GoogleAuthProvider();
    export {auth ,provider}