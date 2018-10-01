const sharedEnums  = require('../../common/sharedEnums'),
ServiceHandler = require('../handler/serviceHandler'),
ErrorHandler = require('../../common/handler/errorHandler'),
ResponseHandler = require('../../common/handler/responseHandler');


class  ServiceController  {

    AddNewService(req,res){

           // Validating input 
            ServiceHandler.validate(req.body)
            // If Validated success
            .then((model)=>{
                  // Creating Model
                   return ServiceHandler.CreateService(model)
            
            }).then((responseOuput)=>{
                ResponseHandler.sendResponse(res,sharedEnums.responseCode.CREATED,responseOuput);
            }) //  if  Validation Fail
            .catch((err)=>{   
                ErrorHandler.sendResponse(res,sharedEnums.responseCode.BADREQUEST,{errorCode :  err,message : err});
            })
    }

    GetAllService(req,res){

            ServiceHandler.GetAllService().then((response)=>{
                ResponseHandler.sendResponse(res,sharedEnums.responseCode.SUCCESS,response);
            }) .catch((err)=>{   
                ErrorHandler.sendResponse(res,sharedEnums.responseCode.BADREQUEST,{errorCode :  err});
            })
    }

    AlterService(req,res){
        ErrorHandler.sendResponse(res,sharedEnums.responseCode.SERVERERROR,{message: "Not implmented"})
    }

}

module.exports  = ServiceController;