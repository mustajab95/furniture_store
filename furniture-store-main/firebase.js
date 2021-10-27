import firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
// import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBJy_rrcQX3q5iFrQwcW2Fy7fUTCgv3NIA",
    authDomain: "myfurniture-store.firebaseapp.com",
    projectId: "myfurniture-store",
    databaseURL: "https://myfurniture-store-default-rtdb.firebaseio.com",
    storageBucket: "myfurniture-store.appspot.com",
    messagingSenderId: "347659503989",
    appId: "1:347659503989:web:6f01b2d3391c19d720ab3c",
    measurementId: "G-1VS0X1GPC8"
  };

firebase.initializeApp(firebaseConfig);