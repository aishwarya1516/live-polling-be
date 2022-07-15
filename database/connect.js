const mongoose = require('mongoose');

const connector = () => {
	try {
		mongoose.connect(
			process.env.MONGO_CONNECTION_STRING, 
			(err) => {
				if (err) {
					console.log('Error in connecting Mongo', err);
					throw err;
				}
				console.log('Successfully connected to Mongo');
			},
		);
	} catch (err) {
		console.error('Error in connecting Mongo', err);
	}
};

module.exports = {
	connector,
};

