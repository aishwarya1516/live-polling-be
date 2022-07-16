const { polling } = require('../app/vote/polling');
const { pollingCount } = require('./socketPolling');
const socketConnection = async(io) => {
    io.on('connection', async(client) => {
        client.on('vote', async(data) => {
            try {
                const returnValue = await polling(data);
                if(returnValue) {
                    const pollingData = await pollingCount();
                io.emit('voteData', pollingData);
                }
                
            } catch(err) {
                console.log('error',err);
            }
        })
    })
}

module.exports = {
    socketConnection
}