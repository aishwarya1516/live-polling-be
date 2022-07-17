const { createPolling } = require('../../services/polling');
const constants = require('../../constants/constants');

exports.polling = async(data) => {
    try {
        if(!data || data === {} || !data.candidateId) {
            return constants.STATUS_MESSAGE.BAD_REQUEST;
        }
        let pollingData = data;
        const createdVote = await createPolling(pollingData);
        return createdVote;

    } catch(err) {
        return err;
    }
}