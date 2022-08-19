import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmhv7cnt5zCynT3iwmeH08kIo93TPW3ZE",
  authDomain: "e-commerce-app-4f69c.firebaseapp.com",
  projectId: "e-commerce-app-4f69c",
  storageBucket: "e-commerce-app-4f69c.appspot.com",
  messagingSenderId: "630737830329",
  appId: "1:630737830329:web:bad11c6722687949a9b668",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
