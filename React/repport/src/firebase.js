import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqwwF3CWSalDZrmTDSh0JFaox005PAtyM",
    authDomain: "repport-7a7a6.firebaseapp.com",
    databaseURL: "https://repport-7a7a6-default-rtdb.firebaseio.com",
    projectId: "repport-7a7a6",
    storageBucket: "repport-7a7a6.appspot.com",
    messagingSenderId: "732297309681",
    appId: "1:732297309681:web:01cd7a7cee5014d7e26850",
    measurementId: "G-T4BE9M3QSC"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };