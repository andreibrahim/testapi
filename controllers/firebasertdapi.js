const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyCAItQ-vCyHGv_8g3zZ98poKnTvcZfcq1U",
    authDomain: "apitest-6b31f.firebaseapp.com",
    databaseURL: "https://apitest-6b31f-default-rtdb.firebaseio.com",
    projectId: "apitest-6b31f",
    storageBucket: "apitest-6b31f.appspot.com",
    messagingSenderId: "84739417470",
    appId: "1:84739417470:web:8dfa61361a86d2d86cbf2f",
    measurementId: "G-SCV7KEC3H2"
  }

  firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const ref = database.ref("datas");

exports.getApiFirebase = async (req, res, next) => {
    try {
        var postsRef = ref.child("users");
        postsRef.push().set({
            name: req.body.name,
            email: req.body.email,
            address : req.body.address
          });

        return res.status(200).json({
            success: true,
            count: 0,
            data: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: 'server error'
        });
    }
}

exports.getDeleteFirebase = async (req, res, next) => {
    try {
        const userRef = ref.child('users/' + req.params.id);
        userRef.remove()
          
        return res.status(200).json({
            success: true,
            count: 0,
            data: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: 'server error'
        });
    }
}

exports.updateApiFirebase = async (req, res, next) => {
    try {
        var postsRef = ref.child("users/" + req.params.id);
        postsRef.update({
            name: req.body.name,
            email: req.body.email,
            address : req.body.address
          });

        return res.status(200).json({
            success: true,
            count: 0,
            data: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: 'server error'
        });
    }
}