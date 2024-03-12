import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAxGIpoqDZLe-DF0utCzaEUsQC63kqe_DU",
    authDomain: "shorten-link-a7c5f.firebaseapp.com",
    projectId: "shorten-link-a7c5f",
    storageBucket: "shorten-link-a7c5f.appspot.com",
    messagingSenderId: "825573223977",
    appId: "1:825573223977:web:569bfbcd8d2f49dd737638"
};

// Initialize Firebase
// AIzaSyAxGIpoqDZLe-DF0utCzaEUsQC63kqe_DU
const app = initializeApp(firebaseConfig);

export { app, firebaseConfig }