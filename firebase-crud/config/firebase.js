import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCcvGNa4rtZoAe8SZcH-lJTZasbwDKwsMI",
  authDomain: "fir-crud-3078c.firebaseapp.com",
  projectId: "fir-crud-3078c",
  storageBucket: "fir-crud-3078c.appspot.com",
  messagingSenderId: "790316573649",
  appId: "1:790316573649:web:0440c69eb0b35ae567b6f0",
  measurementId: "G-YQ10MXV1B8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()