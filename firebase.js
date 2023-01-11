import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.PROJECT_ID.firebaseapp.com,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.PROJECT_ID.appspot.com,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
