import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBgZeCbrHS85YPFQwDbRigVlpMhLa0IVrw",
  authDomain: "sim-ta-kp.firebaseapp.com",
  projectId: "sim-ta-kp",
  storageBucket: "sim-ta-kp.appspot.com",
  messagingSenderId: "197978860813",
  appId: "1:197978860813:web:2ef16b6c847b2ad29c1444",
  measurementId: "G-61RVM6CX4E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);