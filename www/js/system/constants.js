angular.module('medicalbox.services', [])
// .provider('constants', function () {})
.service('constants', constantsService);

function constantsService() {
    var self = this;
    var URL_BASE='http://localhost:8000/api/';
    self.providers = {};
  
    /* URL to Providers */

    self.providers.getToken = function (p, rpp, f) {
        var url = baseUrl + 'api-token-auth/';
        return url;
    };
    
};
