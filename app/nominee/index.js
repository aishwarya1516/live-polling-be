const express = require('express');
const router = express.Router();

router.route('/nominee').get(require('./nominee').getNominee);

module.exports = router;