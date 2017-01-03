(function () {
    'use strict';
angular.module('medicalbox.Services')
.service('constants', constantsService);

function constantsService() {
    var self = this;
    var URL_BASE='https://sandbox-medicalbox-api.herokuapp.com/{0}/api/';
    self.login = {};
    self.register = {};    
    self.clinic = {};

  
    /* URL to Providers */

    self.login.getToken = function () {
        var url = URL_BASE.replace("{0}","") + 'api-token-auth/';
        return url;
    };

    /* URL to Patient */

    self.register.patients = function () {
        var url = URL_BASE.replace("{0}","es") + 'patients/';
        return url;
    };

    /* URL to doctor */

    self.register.doctors = function () {
        var url = URL_BASE.replace("{0}","es") + 'doctors/';
        return url;
    };

    self.clinic.create = function () {
        var url = URL_BASE.replace("{0}","es") + 'clinics/';
        return url;
    };

    self.clinic.find = function (limit,offset) {
        var url = URL_BASE.replace("{0}","es") + 'clinics/';

        if (limit) {
            url += "?limit={0}".replace("{0}", limit)
        }
        if (offset) {
            url += "&offset={0}".replace("{0}", offset)
        }
        return url;
    };
    
}

})()
