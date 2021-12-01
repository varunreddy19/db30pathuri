var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var van_controller = require('../controllers/van');

/// API ROUTE ///
// GET s base.
router.get('/', api_controller.api);

/// van ROUTES ///

// POST request for creating a van.
router.post('/vans', van_controller.van_create_post);

// DELETE request to delete van.
router.delete('/vans/:id', van_controller.van_delete);

// PUT request to update van.
router.put('/vans/:id',
van_controller.van_update_put);

// GET request for one van.
router.get('/vans/:id', van_controller.van_detail);

// GET request for list of all van items.
router.get('/vans', van_controller.van_view_all_Page);

module.exports = router;
