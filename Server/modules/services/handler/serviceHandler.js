const  ServiceModel  = require('../models/serviceModel');
const  SharedEnum =require('../../common/sharedEnums');


module.exports =  {
 validate : function(model){
     if(!model.name ||  model.name.length < 2)
          return   Promise.reject(SharedEnum.errorMesaageCode["EService01"]);
     var model  =  new ServiceModel({
            name :  model.name
     });

     return   Promise.resolve(model);
 },

 CreateService  : function(model) {
    return  new Promise((resolve,reject)=>{
        model.save().then((response)=>{
            resolve(response);
        }).catch((err)=>{

            if(err.name === SharedEnum.errorType.VALIDATION){
                for(var  item in err.errors){
                    var error  = err.errors[item];
                    if(error["kind"] === "unique"){
                            switch(error["path"]){
                                case  "name" : 
                                reject(SharedEnum.errorMesaageCode["EService02"]);
                                break;

                            }

                    }
                }
            }
            reject(err);
        });
     
    });
 },

 GetAllService  : function(){
        
    return new  Promise((resolve,reject)=>{
        ServiceModel.find({ status  :  true}).then((response)=>{
                resolve(response);
        }).catch((err)=>{
                reject(SharedEnum.errorMesaageCode["EServiveGET"]);
        });
    });  

}

}
/*
class ServiceHandler {

    static validate(model){
            console.log(model);
        return  new Promise((resolve,reject)=>{
                    if(!model.name ||  model.name.length < 2)
                       reject(SharedEnum.errorMesaageCode["EService01"]);
                    
                    var model  =  new ServiceModel({
                        name :  model.name
                    });

                    resolve(model);
            });

    } 

  static  CreateService(model){
    this.model =  model;   
            return  new Promise((resolve,reject)=>{
                    model.save().then((Response)=>{
                        resolve(resolve);
                    }).catch((err)=>{
                        reject(err);
                    });
                 
            });
    }

    static GetAllService(){
        
        return new  Promise((resolve,reject)=>{
            ServiceModel.find({ status  :  true}).then((response)=>{
                    resolve(response);
            }).catch((err)=>{
                    reject(SharedEnum.errorMesaageCode["EServiveGET"]);
            });
        });  

    }

}


module.exports = ServiceHandler;

*/