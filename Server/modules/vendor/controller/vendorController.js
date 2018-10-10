const sharedEnums  = require('../../common/sharedEnums'),
ErrorHandler = require('../../common/handler/errorHandler'),
ResponseHandler = require('../../common/handler/responseHandler');


module.exports = {
    
    VendorRegistrationStep : function(req,res){
        ResponseHandler.sendResponse(res,sharedEnums.responseCode.SUCCESS,sharedEnums.vendorStepCreationStep);
    },
    
    CreateVendor :  function(req,res){

    }
}
