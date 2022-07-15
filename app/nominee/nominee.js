const  {getNominees } = require('../../services/nominee');
const Constants = require('../../constants/constants');
exports.getNominee = async(req,res) => {
    try {
        const nomineeList = await getNominees();
        res.status(Constants.STATUS_CODE.OK).send(nomineeList);
    } catch(err) {
        res.status(Constants.STATUS_CODE.INTERNAL_ERROR).send(Constants.STATUS_MESSAGE.INTERNAL_SERVER_ERROR);
    }
}