(function () {
    'use strict';
angular.module('medicalbox.Services')
.service('constants', constantsService);

function constantsService() {
    var self = this;
    var URL_BASE='https://sandbox-medicalbox-api.herokuapp.com/{0}/api/';

    self.login = {};
    self.doctorsUrl = {};
    self.clinicUrl = {};
    self.register = {};
    self.create = {};
    self.clinic = {};

  
    /* URL to Providers */

    self.login.getToken = function () {
        var url = URL_BASE.replace('{0}/', '') + 'api-token-auth/';
        return url;
    };
    /* Clinics' URLS */
    self.clinicUrl.getGeneral = () => URL_BASE.replace('{0}', 'es') + 'clinics/';
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

    self.create.clinic = function () {
        var url = URL_BASE.replace("{0}","es") + 'clinics/';
        return url;
    };

    self.clinic.find = function (id) {
        var url = URL_BASE.replace("{0}","es") + 'clinics/';
        if (id) {
            url += "/{0}".replace("{0}", id)
        }
        return url;
    };
    
}

})()
