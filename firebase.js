// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQVTxuE9uujeIelyopGb-cxJYf-7pMeEI",
  authDomain: "gallery-giska.firebaseapp.com",
  projectId: "gallery-giska",
  storageBucket: "gallery-giska.appspot.com",
  messagingSenderId: "367474358023",
  appId: "1:367474358023:web:4e9dfbd6adcda7ed5f37a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
