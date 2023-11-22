import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAzKk8eVDABEzUgoz50rvtVCsL1h1TiHAM",
  authDomain: "email-link-6472f.firebaseapp.com",
  projectId: "email-link-6472f",
  storageBucket: "email-link-6472f.appspot.com",
  messagingSenderId: "957863661293",
  appId: "1:957863661293:web:371ea755c1d62ca06006e4",
  measurementId: "G-QHQCH2VPEB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
