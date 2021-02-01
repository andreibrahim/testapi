const express =  require('express');
const router =  express.Router();
const { getApitest, addApitest, editApitest, deleteApitest } = require('../controllers/apitest');

router.route('/').get(getApitest).post(addApitest);
router.route('/edit/:id').patch(editApitest);
router.route('/delete/:id').delete(deleteApitest);

module.exports = router;