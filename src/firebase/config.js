import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFWq9S7s67WUvcgaKUZwtaxvXQ489ZsHI",
  authDomain: "satisfyingyou-esjrr.firebaseapp.com",
  projectId: "satisfyingyou-esjrr",
  storageBucket: "satisfyingyou-esjrr.appspot.com",
  messagingSenderId: "1013713027016",
  appId: "1:1013713027016:web:42e0a57c998ccd1a408afd"
};


const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app)

export { auth_mod }