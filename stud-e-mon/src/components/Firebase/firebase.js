import app from 'firebase';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyA8Fjr8ThdIVX7NGrdgA_hjXDJRiV09DVY",
    authDomain: "stud-e-mon-98d09.firebaseapp.com",
    databaseURL: "https://stud-e-mon-98d09.firebaseio.com",
    projectId: "stud-e-mon-98d09",
    storageBucket: "stud-e-mon-98d09.appspot.com",
    messagingSenderId: "152402338061",
    appId: "1:152402338061:web:7dd9340db20dc6b6535044"
  };

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();