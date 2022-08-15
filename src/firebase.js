// import { initializeApp } from "firebase/app";
// import firebase from "firebase";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsmSrX78VM0yBKLqUu9gwHRA2A6jM3u_U",
  authDomain: "whatsapp-clone-3655e.firebaseapp.com",
  projectId: "whatsapp-clone-3655e",
  storageBucket: "whatsapp-clone-3655e.appspot.com",
  messagingSenderId: "848619740500",
  appId: "1:848619740500:web:22a3bfc2c3609eef44bcc1",
  measurementId: "G-NQSE0VFVHP",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp)
// const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();
const auth = firebase.auth();

// export {auth,provider};
//export default db;  

export { auth,provider};
export default db; 