const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const  serviceSchema = mongoose.Schema({
        name  : {
            type: String,
            require :  [true,'service name is  required'],
            trim : true,
            unique : true
        },

        status : {
            type  : Boolean,
            default : true 
        }

});

serviceSchema.plugin(uniqueValidator, { message: '{PATH}' });
const model  = mongoose.model('service',serviceSchema);
module.exports =model;