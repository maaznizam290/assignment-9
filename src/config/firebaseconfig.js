import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9lg0qKbS1RcCAnKPVnqwtRLTjeq8i_RA",
  authDomain: "student-lms-6c34c.firebaseapp.com",
  databaseURL: "https://student-lms-6c34c-default-rtdb.firebaseio.com",
  projectId: "student-lms-6c34c",
  storageBucket: "student-lms-6c34c.appspot.com",
  messagingSenderId: "81280373721",
  appId: "1:81280373721:web:3f9d0bdfe125f0cea3ffc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app