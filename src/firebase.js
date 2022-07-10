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
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user);
      return user;
    })
    .catch((err) => console.log(err));
}

export function loginuser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
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
