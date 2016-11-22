(function () {
    'use strict';
angular.module('medicalbox.Services')
.service('constants', constantsService);

function constantsService() {
    var self = this;
    // var URL_BASE='https://sandbox-medicalbox-api.herokuapp.com/api/';
    var URL_BASE='http://localhost:8002/api/';
    self.login = {};
    self.register = {};
  
    /* URL to Providers */

    self.login.getToken = function () {
        var url = URL_BASE + 'api-token-auth/';
        return url;
    };

    /* URL to Patient */

    self.register.patients = function () {
        var url = URL_BASE + 'patients/';
        return url;
    };

    /* URL to doctor */

    self.register.doctors = function () {
        var url = URL_BASE + 'doctors/';
        return url;
    };
    
}

})()
