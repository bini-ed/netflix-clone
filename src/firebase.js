// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBA6daNBt02otWOIFAmhyjXbL2RUWRg3xI",
  authDomain: "netflix-clone-74e96.firebaseapp.com",
  projectId: "netflix-clone-74e96",
  storageBucket: "netflix-clone-74e96.appspot.com",
  messagingSenderId: "230426684921",
  appId: "1:230426684921:web:8a64d0f81ca14d2821a128",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
