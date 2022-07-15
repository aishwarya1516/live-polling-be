const { pollingCount, aggregatePolling } = require('../services/polling');
const Constants = require('../constants/constants');

exports.pollingCount = async() => {
    try {
        const totalCount = await pollingCount();
        const pollingAggregate = await aggregatePolling();
        return {total: totalCount, data: pollingAggregate};
    } catch(err) {
        console.log('error', err);
        return err;
    }
}