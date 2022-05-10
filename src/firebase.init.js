// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhM0nkEj1HpRAIXIhdeTEG9qQfyFKbsiE",
  authDomain: "inventory-management-c6a1e.firebaseapp.com",
  projectId: "inventory-management-c6a1e",
  storageBucket: "inventory-management-c6a1e.appspot.com",
  messagingSenderId: "806391554530",
  appId: "1:806391554530:web:d784dcc5409b461960d9bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;