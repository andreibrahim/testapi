const firebase = require('firebase')
const config = {
    apiKey: "AIzaSyCAItQ-vCyHGv_8g3zZ98poKnTvcZfcq1U",
    authDomain: "apitest-6b31f.firebaseapp.com",
    projectId: "apitest-6b31f",
    storageBucket: "apitest-6b31f.appspot.com",
    messagingSenderId: "84739417470",
    appId: "1:84739417470:web:09ea3034a293c35f6cbf2f",
    measurementId: "G-3JFZVHE67K"
};
const fire = firebase.initializeApp(config);

module.exports = fire