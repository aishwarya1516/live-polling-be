const express = require('express');
const router = express.Router();
const interceptor = require('../../interceptor/interceptor').interceptor;
router.route('/polling').post(require('./polling').polling);
router.route('/polling').get(interceptor,require('./pollingCount').pollingCount);

module.exports = router;