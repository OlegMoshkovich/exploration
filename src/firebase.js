import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyAY7tFN9wjElOAaJ306t6EmsKZ0gfADEqM",
    authDomain: "mapexperiment-d2b95.firebaseapp.com",
    databaseURL: "https://mapexperiment-d2b95.firebaseio.com",
    projectId: "mapexperiment-d2b95",
    storageBucket: "mapexperiment-d2b95.appspot.com",
    messagingSenderId: "1042514919749",
    appId: "1:1042514919749:web:3cb7976a32236c6d433e2c",
    measurementId: "G-9GMB0RSS5H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

export default firebase;
