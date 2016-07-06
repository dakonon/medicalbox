(function () {
    'use strict';
angular.module('medicalbox.services', [])
.service('constants', constantsService);

function constantsService() {
    var self = this;
    var URL_BASE='http://localhost:8000/api/';
    self.login = {};
  
    /* URL to Providers */

    self.login.getToken = function () {
        var url = URL_BASE + 'api-token-auth/';
        return url;
    };
    
}

})()