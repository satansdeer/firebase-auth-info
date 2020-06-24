import firebase from 'firebase'
import 'firebase/auth'

export const app = firebase.initializeApp({
  "projectId": "frb-auth-info",
  "appId": "1:540233948868:web:15e2ce0a56cf8c089db391",
  "databaseURL": "https://frb-auth-info.firebaseio.com",
  "storageBucket": "frb-auth-info.appspot.com",
  "apiKey": "AIzaSyBW2WlsjaOBcQPq6yJtRDEytxFsiPCTsh0",
  "authDomain": "frb-auth-info.firebaseapp.com",
  "messagingSenderId": "540233948868"
});

