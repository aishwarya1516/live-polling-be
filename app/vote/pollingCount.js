const { pollingCount, aggregatePolling } = require('../../services/polling');
const Constants = require('../../constants/constants');

exports.pollingCount = async(req,res) => {
    try {
        const totalCount = await pollingCount();
        const pollingAggregate = await aggregatePolling();
        res.status(Constants.STATUS_CODE.OK).send({total: totalCount, data: pollingAggregate});
    } catch(err) {
        console.log('error', err);
        res.status(Constants.STATUS_CODE.INTERNAL_ERROR).send(Constants.STATUS_MESSAGE.INTERNAL_SERVER_ERROR);
    }
}