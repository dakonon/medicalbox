'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', '$translateProvider', 
function($stateProvider, $urlRouterProvider, $translateProvider) {
  $stateProvider

        .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
        })

        .state('index', {
          url: '/index',
          templateUrl: 'templates/index.html'          
        })
        .state('register', {
          url: '/register',
          templateUrl: 'js/modules/register/templates/register.html',
          controller: 'LoginCtrl' 
        })
        .state('dashboad', {
          url: '/dashboad',
          templateUrl: 'js/modules/login/templates/dashboad.html',
        })
        /* DOCTORS URLS */
        .state('doctor', {
          url: '/doctor',
          templateUrl: 'js/modules/doctors/templates/index.html'
          // views: {
          //   'menuContent': {
          //   }
          // }
        })
        .state('doctor-clinics', {
          url: '/doctor/my-clinics',
          templateUrl: 'js/modules/doctors/templates/my-clinics.html'
          // views: {
          //   'menuContent': {
          //   }
          // }
        })
        .state('doctor-clinics-create', {
          url: '/doctor/my-clinics/create',
          templateUrl: 'js/modules/doctors/templates/my-clinics-create.html'
          // views: {
          //   'menuContent': {
          //   }
          // }
        });
        /* END DOCTORS URLS*/

        $urlRouterProvider.otherwise('/index');

        $translateProvider.useStaticFilesLoader({
            prefix: 'js/locales/locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('es');
  // $translateProvider.useSanitizeValueStrategy('escape');
    }
];