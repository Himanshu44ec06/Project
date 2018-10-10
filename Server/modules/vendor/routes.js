const express  = require('express'),
SharedEnums = require('../common/sharedEnums'),
Controller  = require('./controller/vendorController'),
ProtectedRoute =  express.Router(),
Route = express.Router();


ProtectedRoute.route('/steps').get(Controller.VendorRegistrationStep);
//ProtectedRoute.route('/').post(controller.AddNewService);
//ProtectedRoute.route('/').get(controller.GetAllService);
//ProtectedRoute.route('/:vendorId').post(controller.AlterService);


module.exports = {
    protected: ProtectedRoute,
    unprotected: Route,
    path : SharedEnums.moduleRoute.VENDOR
};