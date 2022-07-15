const express = require('express');
const router = express.Router();

router.route('/polling').post(require('./polling').polling);
router.route('/polling').get(require('./pollingCount').pollingCount);

module.exports = router;