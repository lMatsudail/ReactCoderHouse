import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase para FullMordisco
const firebaseConfig = {
  apiKey: "AIzaSyAKeFZhXde2-duhtzn45qb0pi_GVpOLzRc",
  authDomain: "fullmordisco.firebaseapp.com",
  databaseURL: "https://fullmordisco-default-rtdb.firebaseio.com",
  projectId: "fullmordisco",
  storageBucket: "fullmordisco.firebasestorage.app",
  messagingSenderId: "68074051366",
  appId: "1:68074051366:web:3b7da209db563af3b213e7",
  measurementId: "G-NG8KFFRL7G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
