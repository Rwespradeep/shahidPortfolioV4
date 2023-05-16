// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGgZyAqbG7kOLIqqOAvi-jvbX8bEo9OBI",
    authDomain: "shahidportfolio-4ea08.firebaseapp.com",
    projectId: "shahidportfolio-4ea08",
    storageBucket: "shahidportfolio-4ea08.appspot.com",
    messagingSenderId: "831218593253",
    appId: "1:831218593253:web:556432b5ba4ec54f13930c"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
const firestorage = getStorage(fireapp);

export { fireapp, firestorage };