// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA_xgfukFdsz0n7Oi7Y5t6NFtZwf21pGIU",
  authDomain: "testproject-tsrecburgerbuilder.firebaseapp.com",
  databaseURL: "https://testproject-tsrecburgerbuilder-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testproject-tsrecburgerbuilder",
  storageBucket: "testproject-tsrecburgerbuilder.appspot.com",
  messagingSenderId: "772929239656",
  appId: "1:772929239656:web:4b56bbab4725d0e0c759dd",
  measurementId: "G-SZQ8HK01E0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);