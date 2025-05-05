import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5Kv8Uznp9x4DpZuWxKrGDE6zfwY3EbTo",
  authDomain: "chillbill-2dc58.firebaseapp.com",
  projectId: "chillbill-2dc58",
  storageBucket: "chillbill-2dc58.firebasestorage.app",
  messagingSenderId: "556529154176",
  appId: "1:556529154176:web:c5ae110bceb75edfc10e65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
