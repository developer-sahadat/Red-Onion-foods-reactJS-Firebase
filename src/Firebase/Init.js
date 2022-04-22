// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ1SQ8tmOpj6L_kQEhIQV8IE_ONu22g_w",
  authDomain: "red-onion-9a291.firebaseapp.com",
  projectId: "red-onion-9a291",
  storageBucket: "red-onion-9a291.appspot.com",
  messagingSenderId: "789420214724",
  appId: "1:789420214724:web:9ea3d24aac0605ddf4bc91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
