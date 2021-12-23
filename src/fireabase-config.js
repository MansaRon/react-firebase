import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB6hDZoxOEMvwxacRyCU8OrFuIwP_NGlYI",
    authDomain: "react-firebase-8dc9f.firebaseapp.com",
    projectId: "react-firebase-8dc9f",
    storageBucket: "react-firebase-8dc9f.appspot.com",
    messagingSenderId: "51834575840",
    appId: "1:51834575840:web:1e481ef759581597c5a985",
    measurementId: "G-5M2YG6DSBQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
