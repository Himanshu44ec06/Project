const sharedEnums  = require('../../common/sharedEnums'),
ErrorHandler = require('../../common/handler/errorHandler'),
ResponseHandler = requvire('../../common/handler/responseHandler');

module.exports = {

    CheckUsername  : (req,res) =>{
        let loginFor =  req.body.userType;
        if(!loginFor)
            ErrorHandler.sendResponse(res,sharedEnums.responseCode.BADREQUEST,{errorCode :  null,message : null});
        

    }
}