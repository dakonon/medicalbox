// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

(function () {
    'use strict';

angular.module('medicalbox')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(config);

 config.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider'];

    function config($stateProvider, $urlRouterProvider, $translateProvider) {
        $stateProvider

        .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
        })

        .state('tabUser', {
          url: '/tabUser',
          abstract: true,
          templateUrl: 'templates/tabsUser.html'
        })

        .state('index', {
          url: '/index',
          templateUrl: 'templates/index.html'          
        })
        .state('register', {
          url: '/register',
          controller: 'RegisterCtrl', 
          templateUrl: "templates/register/register.html"          
        })
        .state('dashboad', {
          url: '/dashboad',
          templateUrl: 'templates/login/dashboad.html',
        })
        /* DOCTORS URLS */
        .state('tab.doctor', {
          url: '/doctor',
           views: {
             'doctor': {
                templateUrl: 'templates/doctors/index.html'
             }
           }
        })
        .state('tab.map', {
          url: '/map',
           views: {
             'map': {
                templateUrl: 'templates/doctors/map.html'
             }
           }
        })
        .state('tab.doctor-clinics', {
          url: '/doctor/my-clinics',
           views: {
            'doctor-clinics': {
          templateUrl: 'templates/doctors/my-clinics.html'
             }
           }
        })
        .state('tab.doctor-clinics-create', {
          url: '/doctor/my-clinics/create',          
           views: {
             'doctor-clinics-create': {
                templateUrl: 'templates/doctors/my-clinics-create.html'
             }
           }
        })
        /* END DOCTORS URLS*/

        $urlRouterProvider.otherwise('/index')

        $translateProvider.useStaticFilesLoader({
            prefix: 'js/locales/locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('es');
  // $translateProvider.useSanitizeValueStrategy('escape');
    };

})()
