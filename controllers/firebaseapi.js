const admin = require('firebase-admin');
const serviceAccount = require('../path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

exports.getApiFirebase = async (req, res, next) => {
    try {
        const docRef = await db.collection('apitest').add({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
          });

        console.log(docRef);
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

exports.deleteApiFirebase = async (req, res, next) => {
    try {
        await db.collection('apitest').doc(req.params.id).delete(); 
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
        await db.collection('apitest').doc(req.params.id).update({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
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