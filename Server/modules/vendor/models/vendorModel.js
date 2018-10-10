const  mongoose  =require('mongoose');

const schema  = mongoose.Schema({

    username : {
        type : String,
        unique : true,
        require :  true,
        trim :  true
    },


    password : {
        type : String,
        require :  true
    },

    changePassword : {
        type :  Boolean,
        default : false
    },

    status : {
        type  :  Number,
        require :  true
    },

    cities  : [{
        cityId : {
            type :  Number
        } 
    }],

    services : [{
        serviceId : {
            type : Number
        }
    }],

    

    loginDevices : [{
        deviceId : {
            type : Number
        },
        deviceInfo : {
            type : Object
        },
        loginTym : {
            type :  Date
        }
    }],

    members : [{
        phone : {
            type : number  
        },

        name  : {
            type :  String
        },

       status : {
           type : Number
       } 
    }]

});

const model  = mongoose.model('vendorlogin',schema);
module.exports =model;