(function () {
    'use strict'
    var dependencies = [
        'ui.router'
        , 'medicalbox.Models'
        , 'medicalbox.Controllers'
        , 'medicalbox.Services'
        , 'medicalbox.Directives'
        , 'pascalprecht.translate'
        ,'ionic'
        ,'LocalStorageModule'
        , 'ngCordova'    
   ]

    angular.module('medicalbox', dependencies);
     angular.module('medicalbox.Models', []);
    angular.module('medicalbox.Controllers', []);
    angular.module('medicalbox.Models', []);
    angular.module('medicalbox.Services', []);
    angular.module('medicalbox.Directives', []);


})()