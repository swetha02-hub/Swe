import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnBfYxT_lSvK7ibcM5i0m6K5rjIklXSJ8",
    authDomain: "swetha-quiz.firebaseapp.com",
    projectId: "swetha-quiz",
    storageBucket: "swetha-quiz.firebasestorage.app",
    messagingSenderId: "1019119482155",
    appId: "1:1019119482155:web:d9b88eab12b94f9fa7016e",
    measurementId: "G-25B90NX2NJ"
  };
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export default app;
