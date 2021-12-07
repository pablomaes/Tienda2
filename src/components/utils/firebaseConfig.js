// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwPT0Ls6xqc1ot4sc7QuSo72NBoWE48Io",
  authDomain: "encuentro-infusiones.firebaseapp.com",
  projectId: "encuentro-infusiones",
  storageBucket: "encuentro-infusiones.appspot.com",
  messagingSenderId: "123702577697",
  appId: "1:123702577697:web:028050ce6858137e4e7160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;