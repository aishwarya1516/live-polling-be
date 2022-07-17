const pollingSchema = require('../database/models/polling');

const createPolling = async(data) => {

    try {
        const pollingData = new pollingSchema(data);
        await pollingData.save((err,value) => {
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

const pollingCount = async() => {

    try {
        const pollingCount =  await pollingSchema.countDocuments({}).exec();
        return pollingCount;
    } catch(err) {
        return err;
    }
}

const aggregatePolling = async() => {
    try {
        const pollinData =  await pollingSchema.aggregate([
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