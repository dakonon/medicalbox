(function () {
    'use strict'
    var dependencies = [
        'ui.router'
        , 'medicalbox.Controllers'
        , 'medicalbox.Services'
        , 'medicalbox.Directives'
        , 'pascalprecht.translate'
        ,'ionic'
   ]

    angular.module('medicalbox', dependencies);
    angular.module('medicalbox.Controllers', []);
    angular.module('medicalbox.Services', []);
    angular.module('medicalbox.Directives', []);


})()