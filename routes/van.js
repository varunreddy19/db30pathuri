var express = require('express');
const van_controlers= require('../controllers/van'); 
var router = express.Router();

// A little function to check if we have an authorized user and continue on  
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', van_controlers.van_view_all_Page);

/* GET detail van page */ 
router.get('/detail', van_controlers.van_view_one_Page); 

/* GET create van page */ 
router.get('/create',secured, van_controlers.van_create_Page); 
/* GET create update page */ 
router.get('/update',secured, van_controlers.van_update_Page); 

/* GET create costume page */ 
router.get('/delete',secured, van_controlers.van_delete_Page); 

module.exports = router;