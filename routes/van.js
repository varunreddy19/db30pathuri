var express = require('express');
const van_controlers= require('../controllers/van'); 
var router = express.Router();

/* GET home page. */
router.get('/', van_controlers.van_view_all_Page);

module.exports = router;