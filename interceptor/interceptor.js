const Constants = require('../constants/constants');
exports.interceptor = (req,res,next) => {
    if(!req.headers.authorization) {
        res.status(Constants.STATUS_CODE.UNAUTHORIZED).send({error: Constants.STATUS_MESSAGE.UNAUTHORIZED});
    } else if(req.headers.authorization){
        next();
    }
}