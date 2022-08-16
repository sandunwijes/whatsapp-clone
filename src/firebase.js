import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyAsmSrX78VM0yBKLqUu9gwHRA2A6jM3u_U",
  authDomain: "whatsapp-clone-3655e.firebaseapp.com",
  projectId: "whatsapp-clone-3655e",
  storageBucket: "whatsapp-clone-3655e.appspot.com",
  messagingSenderId: "848619740500",
  appId: "1:848619740500:web:22a3bfc2c3609eef44bcc1",
  measurementId: "G-NQSE0VFVHP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
