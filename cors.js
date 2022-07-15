const CONSTANTS = require('./constants/constants');

const allowCrossDomain = (req, res, next) => {
	let origin = req.headers.origin;
	if (process.env.allowedDomains.indexOf(origin) > -1) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Credentials', true);
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type, Content-Length, X-Requested-With,Authorization'
	);
	if (req.method == 'OPTIONS') {
		res.status(CONSTANTS.STATUS_CODE.OK).end();
	} else {
		next();
	}
};

module.exports = {
    allowCrossDomain
}