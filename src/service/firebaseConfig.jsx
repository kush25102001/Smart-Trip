// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAipu3ygT7H-5gIobnX5iMb5Qg_d6cqbqk",
  authDomain: "ai-trip-planner-58b0a.firebaseapp.com",
  projectId: "ai-trip-planner-58b0a",
  storageBucket: "ai-trip-planner-58b0a.firebasestorage.app",
  messagingSenderId: "47628632130",
  appId: "1:47628632130:web:590af8e17fcb8113be2ddb",
  measurementId: "G-1RLS33YV8L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);