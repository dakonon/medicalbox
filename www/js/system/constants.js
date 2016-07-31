(function () {
    'use strict';
angular.module('medicalbox.Services')
.service('constants', constantsService);

function constantsService() {
    var self = this;
    var URL_BASE='https://sandbox-medicalbox-api.herokuapp.com/api/';
    self.login = {};
  
    /* URL to Providers */

    self.login.getToken = function () {
        var url = URL_BASE + 'api-token-auth/';
        return url;
    };
    
}

})()
