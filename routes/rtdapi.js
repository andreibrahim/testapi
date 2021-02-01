const express =  require('express');
const router =  express.Router();
const { getApiFirebase, getDeleteFirebase, updateApiFirebase } = require('../controllers/firebasertdapi');

router.route('/').post(getApiFirebase);
router.route('/edit/:id').patch(updateApiFirebase);
router.route('/delete/:id').delete(getDeleteFirebase);

module.exports = router;