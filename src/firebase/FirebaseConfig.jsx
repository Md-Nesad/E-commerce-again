import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTK0514gtDTcavD-7N2ORN4jU-Ogixv8I",
  authDomain: "e-commerce-again.firebaseapp.com",
  projectId: "e-commerce-again",
  storageBucket: "e-commerce-again.appspot.com",
  messagingSenderId: "934257116458",
  appId: "1:934257116458:web:b7e03384ae9a10b9910a53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
