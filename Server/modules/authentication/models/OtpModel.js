const  mongoose  =require('mongoose');


const schema = mongoose.Schema({
    username  : {
        type : String,
        require :  true
    },

    otp  : {
        type :  String,
        require :  true
    },

    status  :  {
        type : Boolean,
        default : true
    },

    logTym  : {
        type: Date,
        default: Date.now()
    }
});

const model  = mongoose.model('otp',schema);
module.exports =model;