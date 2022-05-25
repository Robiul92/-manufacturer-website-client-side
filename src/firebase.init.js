// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH6FTdSlCDvwqDME808oFnsMjb3_0aquE",
  authDomain: "electric-saw.firebaseapp.com",
  projectId: "electric-saw",
  storageBucket: "electric-saw.appspot.com",
  messagingSenderId: "166020856456",
  appId: "1:166020856456:web:bdfe987e9ae5a42ec73d3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;