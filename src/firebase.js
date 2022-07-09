import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYXzQwEFUSY89KYFXk0E6dkSbMieDtAIs",
  authDomain: "yam-shel-meida.firebaseapp.com",
  projectId: "yam-shel-meida",
  storageBucket: "yam-shel-meida.appspot.com",
  messagingSenderId: "742221726308",
  appId: "1:742221726308:web:086c410286c9bf012b1571",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function loginuser() {
  return signInWithEmailAndPassword(auth);
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
