// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const ENV = import.meta.env;
const firebaseConfig = {
    apiKey: ENV.VITE_APP_API_KEY,
    authDomain: ENV.VITE_APP_AUTH_DOMAIN,
    projectId: ENV.VITE_APP_PROJECT_ID,
    storageBucket: ENV.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: ENV.VITE_APP_MESSAGING_SENDER_ID,
    appId: ENV.VITE_APP_APP_ID,
    measurementId: ENV.VITE_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
