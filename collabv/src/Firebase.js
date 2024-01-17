// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from"firebase/firestore"
import { getAuth } from "firebase/auth";
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBBjBrc9YFb7O6TRFYpwUkyh-T_9Lp3ES0",
  authDomain: "collabvision.firebaseapp.com",
  projectId: "collabvision",
  storageBucket: "collabvision.appspot.com",
  messagingSenderId: "902603813063",
  appId: "1:902603813063:web:335793760245cb53394ee2"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db =getFirestore(app);

// export {db};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)

export {  db, app };