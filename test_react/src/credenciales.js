// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7ouanRk_-d2hxPtClxlXwGV2GqLCdejE",
  authDomain: "test-login-t-b062c.firebaseapp.com",
  projectId: "test-login-t-b062c",
  storageBucket: "test-login-t-b062c.firebasestorage.app",
  messagingSenderId: "378179517124",
  appId: "1:378179517124:web:0a69c895ab146493112791"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;