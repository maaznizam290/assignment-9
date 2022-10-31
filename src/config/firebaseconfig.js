// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMhY7nDnwYVR1nRDsO6KCKsZSqhiLn7rw",
  authDomain: "reactadminpanel-1ec6d.firebaseapp.com",
  databaseURL: "https://reactadminpanel-1ec6d-default-rtdb.firebaseio.com",
  projectId: "reactadminpanel-1ec6d",
  storageBucket: "reactadminpanel-1ec6d.appspot.com",
  messagingSenderId: "506427011367",
  appId: "1:506427011367:web:736361007403444fd33902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;