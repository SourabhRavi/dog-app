import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs9x-D5Ej10uhJugOOpwqIv3_BJtNc9Js",
  authDomain: "dogapp-8573c.firebaseapp.com",
  projectId: "dogapp-8573c",
  storageBucket: "dogapp-8573c.appspot.com",
  messagingSenderId: "252642959231",
  appId: "1:252642959231:web:ea6982d7a8e048ae8f044a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
