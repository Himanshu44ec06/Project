module.exports  = {
    status : {
 
    } ,
    errorType : {
        "VALIDATION"  : "ValidationError"

    }
    ,
    responseCode  : {
        "SUCCESS" :  200,
        "CREATED" :  201,
        "BADREQUEST" : 400,
        "SERVERERROR" : 500,
    },
    moduleRoute  : {
        "SERVICES" : 'service' 
    },

    userType  : {
        Vendor : 1
    } ,

    errorMesaageCode  : {
        "EService01" : "EService01", // Service  name is  not correct
        "EService02" : "EService02", // Serice  name is  not unique
        "EService03" : "EService03", // Service Id not  found ,
        "EServiveGET" : "EServiceGET" // Error While Getting  Service  From Database
    }

}