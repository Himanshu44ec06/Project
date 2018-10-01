const express  = require('express'),
SharedEnums = require('../common/sharedEnums'),
Controller  = require('./controller/serviceController'),
ProtectedRoute =  express.Router(),
Route = express.Router();

var controller  = new Controller();

ProtectedRoute.route('/').post(controller.AddNewService);
ProtectedRoute.route('/').get(controller.GetAllService);
ProtectedRoute.route('/:serviceId').post(controller.AlterService);


module.exports = {
    protected: ProtectedRoute,
    unprotected: Route,
    path : SharedEnums.moduleRoute.SERVICES
};