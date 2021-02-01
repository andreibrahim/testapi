const express =  require('express');
const router =  express.Router();
const { getApiFirebase, deleteApiFirebase, updateApiFirebase } = require('../controllers/firebaseapi');

router.route('/').post(getApiFirebase);
router.route('/edit/:id').patch(updateApiFirebase);
router.route('/delete/:id').delete(deleteApiFirebase);

module.exports = router;