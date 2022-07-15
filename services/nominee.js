const nomineeSchema = require('../database/models/nominee');

const getNominees = () => {
    return new Promise((resolve,reject) => {
        nomineeSchema.find()
        .lean()
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

module.exports = {
    getNominees
}