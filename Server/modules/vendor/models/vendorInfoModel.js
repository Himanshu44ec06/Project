const  mongoose  =require('mongoose');

const schema = mongoose.Schema({});

const model  = mongoose.model('vendorinfo',schema);
module.exports =model;