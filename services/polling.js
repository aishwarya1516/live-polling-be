const pollingSchema = require('../database/models/polling');

const createPolling = (data) => {
    return new Promise((resolve,reject) => {

        const pollingData = new pollingSchema(data);
        pollingData.save((err,value) => {
            if(err){
                reject(err)
            } else {
                resolve(value);
            }
        })
    })
}

const pollingCount = () => {
    return new Promise((resolve,reject) => {
        pollingSchema.countDocuments({})
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

const aggregatePolling = () => {
    return new Promise((resolve,reject) => {
        pollingSchema.aggregate([
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
           
        ])
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}
module.exports = {
    createPolling,
    pollingCount,
    aggregatePolling
}