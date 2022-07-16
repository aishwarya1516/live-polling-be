const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const mongo = require('./database/connect');
const mongoSeeder = require('./seeder/seeder');
const CONSTANTS = require('./constants/constants');

mongo.connector();
const app = express();
const Socket = require('./socket/socket');
const server = require('http').createServer(app);
const io = require('socket.io')(server,  {
	cors: {
		origin: process.env.allowedDomains
	}
})
Socket.socketConnection(io)
const { polling } = require('./app/vote/polling');
const { pollingCount } = require('./socket/socketPolling');
const morgan = require('morgan');
const vote = require('./app/vote/index');
const nominee = require('./app/nominee/index');
const cors = require('./cors');
app.use(cors.allowCrossDomain);
app.use(bodyParser.text());
app.use(bodyParser.json({ limit: '10000mb' }));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(morgan('[:date[clf]]  :method :url :status :res[content-length] - :response-time ms'));
mongoSeeder.seeder();
app.use(vote);
app.use(nominee);




server.listen(process.env.PORT,() => {
    console.log('Server is connceted to port ',process.env.PORT);
})

