// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCouFdrIWt6ORlRfqTN43BbVwG2BssqLs",
  authDomain: "cityhospital-d2c4c.firebaseapp.com",
  projectId: "cityhospital-d2c4c",
  storageBucket: "cityhospital-d2c4c.appspot.com",
  messagingSenderId: "126548189490",
  appId: "1:126548189490:web:c696b51a72a59227fa772b",
  measurementId: "G-QLRNFBY77C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);