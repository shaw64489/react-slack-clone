import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBWYdPrUO7UW7PRwgMOZ8pdHl9z9mYOE_E",
    authDomain: "react-slack-clone-eb17f.firebaseapp.com",
    databaseURL: "https://react-slack-clone-eb17f.firebaseio.com",
    projectId: "react-slack-clone-eb17f",
    storageBucket: "react-slack-clone-eb17f.appspot.com",
    messagingSenderId: "158290664216"
  };
  firebase.initializeApp(config);

  export default firebase;