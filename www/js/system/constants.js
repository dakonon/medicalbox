(function () {
    'use strict';
angular.module('medicalbox.Services')
.service('constants', constantsService);

function constantsService() {
    var self = this;
    var URL_BASE='http://sandbox-medicalbox-api.herokuapp.com/{0}/api/';
    // var URL_BASE='http://localhost:8002/{0}/api/';
    self.login = {};
    self.doctorsUrl = {};
    self.clinicUrl = {};
    self.register = {};
  
    /* URL to Providers */

    self.login.getToken = function () {
        var url = URL_BASE.replace('{0}/', '') + 'api-token-auth/';
        return url;
    };
    /* Clinics' URLS */
    self.clinicUrl.getGeneral = () => URL_BASE.replace('{0}', 'es') + 'clinics/';
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
