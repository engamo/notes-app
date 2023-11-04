
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAo2HspepoDFAVxy-AGs_rDaV9rBsBHTVs",
  authDomain: "react-notes-app-347c4.firebaseapp.com",
  projectId: "react-notes-app-347c4",
  storageBucket: "react-notes-app-347c4.appspot.com",
  messagingSenderId: "472773702387",
  appId: "1:472773702387:web:46bea5ed8a3705746f3d86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");


