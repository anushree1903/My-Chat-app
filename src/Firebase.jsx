
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyBJakjwdPsW-5YbjsTZyctuRqlMbmL3FXI",

  authDomain: "chat-react-281ce.firebaseapp.com",

  projectId: "chat-react-281ce",

  storageBucket: "chat-react-281ce.appspot.com",

  messagingSenderId: "990001056411",

  appId: "1:990001056411:web:9d194c1a0225b7665d543e",

  measurementId: "G-YKC6YCLRV9"

};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
