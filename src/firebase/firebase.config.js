// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnWxzP4fU9v0WBsVDr06ApMdufg0EfVgI",
  authDomain: "course-place-client.firebaseapp.com",
  projectId: "course-place-client",
  storageBucket: "course-place-client.appspot.com",
  messagingSenderId: "609400779308",
  appId: "1:609400779308:web:e59425d8f5bf0594969789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;