
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR7e1OC3I-69I6dIPjmM_nN-5X_z7h1PY",
  authDomain: "chatter-e387b.firebaseapp.com",
  projectId: "chatter-e387b",
  storageBucket: "chatter-e387b.appspot.com",
  messagingSenderId: "389286258892",
  appId: "1:389286258892:web:31f48a1f7b81aef714fa69"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()