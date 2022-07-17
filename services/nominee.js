const nomineeSchema = require('../database/models/nominee');

const getNominees = async() => {
    try {
        const nomineeData = await nomineeSchema.find().lean().exec();
        return nomineeData;
    } catch(err) {
        return err;
    }

}

module.exports = {
    getNominees
}