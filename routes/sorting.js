const express =  require('express');
const router =  express.Router();
const { filterData } = require('../controllers/sorting');

router.route('/').get(filterData);

module.exports = router;