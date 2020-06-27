import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

var config = {
    apiKey: "AIzaSyAFPXFrQwpcBqZBD77Cj3GyktwwCg03h0Q",
    authDomain: "kids-app-buy.firebaseapp.com",
    databaseURL: "https://kids-app-buy.firebaseio.com",
    projectId: "kids-app-buy",
    storageBucket: "kids-app-buy.appspot.com",
    messagingSenderId: "345765304884",
    appId: "1:345765304884:web:a4e6eebe594829988f4861",
    measurementId: "G-DDTNWL461V"
};
// Initialize Firebase
firebase.initializeApp(config);
export const db  = firebase.database();

export const auth = firebase.auth;
// firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;