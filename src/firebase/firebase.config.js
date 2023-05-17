// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA26q9L2a84Gz48XR3kgESjhXwhbC1OkJY",
  authDomain: "robotoysworld.firebaseapp.com",
  projectId: "robotoysworld",
  storageBucket: "robotoysworld.appspot.com",
  messagingSenderId: "261229072699",
  appId: "1:261229072699:web:37d1d0c092b9988e6a671e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;