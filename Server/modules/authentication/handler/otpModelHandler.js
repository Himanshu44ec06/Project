const sharedEnums  = require('../../common/sharedEnums'), 
Math = require('../../common/utility/Math'),
OtpModel  = require('../models/OtpModel');

module.exports = {
    saveOtp  :  function(username){
        var  otp  = Math.RandomNumber(sharedEnums.configuration.OTPLENGTH);
        var  model  = new OtpModel({
            username  : username,
            otp  = otp,
            status = true
        });

        model.save().then((response)=>{
            return   Promise.resolve(response);
        }).catch((err)=>{
            return   Promise.reject(SharedEnum.errorMesaageCode["EOTPUnableToGenerate"]);
        });

    },

    validateOtp  : function(model){
       OtpModel.find({username : model.username}).then((OtpRes)=>{
           if(!OtpRes)
             return   Promise.reject(SharedEnum.errorMesaageCode["EInValidOtp"]);     
        
         if(OtpRes.otp != model.otp)
            return   Promise.reject(SharedEnum.errorMesaageCode["EInValidOtp"]); 

        return Promise.resolve(true);

       }).catch((err)=>{
           return   Promise.reject(SharedEnum.errorMesaageCode["EInValidOtp"]);
       });  
    }
           
}