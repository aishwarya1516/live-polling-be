const pollingSchema = require('../database/models/polling');

const createPolling = (data) => {

    try {
        const pollingData = new pollingSchema(data);
        pollingData.save((err,value) => {
                    if(err){
                        return (err);
                    } else {
                        return (value);
                    }
                })
    } catch(err) {
        return err;
    }
}

const pollingCount = () => {

    try {
        const pollingCount =  pollingSchema.countDocuments({}).exec();
        return pollingCount;
    } catch(err) {
        return err;
    }
}

const aggregatePolling = () => {
    try {
        const pollinData =       pollingSchema.aggregate([
                    {
                        "$group":{
                            "_id": "$candidateId",
                            "totalVote": {"$count" : {}}
                        }
                    },
                    {
                        "$lookup": {
                            "from": "nominees",
                            "localField": "_id",
                            "foreignField": "_id",
                            "as": "candidate"
                        }
                    }
                   
                ]).exec();
                return pollinData;
    } catch(err) {
        return err;
    }
}
module.exports = {
    createPolling,
    pollingCount,
    aggregatePolling
}