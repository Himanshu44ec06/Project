const sharedEnums  = require('../../common/sharedEnums'),
VendorModel  = require('../models/vendorModel');

module.exports = {
    findUser : function(model){
        
     if(!model.username ||  model.username.length < 2)
        return   Promise.reject(SharedEnum.errorMesaageCode["ELoginUserNotFound"]);
    
        VendorModel.findOne({username : model.username})
            .then((response)=>{
                if(!response)
                    return   Promise.reject(SharedEnum.errorMesaageCode["ELoginUserNotFound"]);
                
                return Promise.resolve(response);
            })
            .catch((err)=>{
                return   Promise.reject(SharedEnum.errorMesaageCode["ELoginUserNotFound"]);
            })

    },

    checkPassoword : function(model) {
        if(!model.Id)
            return   Promise.reject(SharedEnum.errorMesaageCode["ELoginUserNotFound"]);
        
        VendorModel.findById(model.Id)
        .then((response)=>{
            if(!response)
                return   Promise.reject(SharedEnum.errorMesaageCode["ELoginUserNotFound"]);
            
            if(response.password != model.password)
                return   Promise.reject(SharedEnum.errorMesaageCode["ELoginPasswordNotMatch"]);    
            
            response.password = '***********';
            return  Promise.resolve(response);
        })
        .catch((err)=>{
            return   Promise.reject(SharedEnum.errorMesaageCode["ELoginPasswordNotMatch"]);
        });
       
    },

    createNew : function(model){
        VendorModel.find({username : model.username}).then((user)=>{
            if(user.length > 0)
                return Promise.resolve(user);
            
            var model  = new VendorModel({
                username = model.username,
                status  =  sharedEnums.vendorStatus.REGISTEREDBUTOTPNOTVERIFIED
            });

            model.save().then((response)=>{
                    return   Promise.resolve(response);
            }).catch((err)=>{
                return   Promise.reject(SharedEnum.errorMesaageCode["EUserCreatedFailed"]);
            })

        }).catch((err)=>{});
    }
}