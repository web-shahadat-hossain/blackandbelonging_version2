// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU-flUlQ7lWTEFeDsig1QP9r4g5D6_WiQ",
  authDomain: "blackandbelonging-dd6d1.firebaseapp.com",
  projectId: "blackandbelonging-dd6d1",
  storageBucket: "blackandbelonging-dd6d1.appspot.com",
  messagingSenderId: "638812605772",
  appId: "1:638812605772:web:05200f675a4f547b3b93e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
