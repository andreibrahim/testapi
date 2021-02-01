const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }

const fire = firebase.initializeApp(firebaseConfig);
module.exports = fire;