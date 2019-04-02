var express = require('express');
var router = express.Router();
var api_controller = require('../controller/api.js');

router.get('/', api_controller.countriesList);

router.get('/country/:code', api_controller.country);

// Export router back to app.js
module.exports = router;