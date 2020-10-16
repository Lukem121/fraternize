import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB6WpmfpgrvKh4lZrZFy4tXiEvTmpPU7xw",
    authDomain: "fraternize-cf53a.firebaseapp.com",
    databaseURL: "https://fraternize-cf53a.firebaseio.com",
    projectId: "fraternize-cf53a",
    storageBucket: "fraternize-cf53a.appspot.com",
    messagingSenderId: "1013322012372",
    appId: "1:1013322012372:web:b670c5e57db810dc544d41",
    measurementId: "G-18VZ6YZ4VN"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
