(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function AppMain($ionicPlatform) {
    $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      //StatusBar.styleDefault();
    }
  });
}
module.exports = ['$ionicPlatform', AppMain];
},{}],2:[function(require,module,exports){
'use strict';
var URL_BASE='http://192.168.12.121:8002/api/';
var URL_SRC = 'js/data/';

require('../modules/doctors/doctors');
require('../modules/login/login');
require('../modules/register/register');

  
module.exports = angular.module('medicalbox', ['ionic', 'doctors', 
                                'login', 'register', 'pascalprecht.translate',
                                'LocalStorageModule'])
  .config(require('./router'))
  .run(require('./app-main'))
  
  //Constantes Servicios web 
  .constant('ApiLogin', {
    url: URL_BASE + 'api-token-auth/'
  });
},{"../modules/doctors/doctors":5,"../modules/login/login":9,"../modules/register/register":11,"./app-main":1,"./router":3}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
'use strict';
/**
  *ClinicCreateCrtl Controlador para crear centros de salud
  *@author nombre autor (nickname at Dakonon)
  *@email nombre@dominio.com
  *@copyright <a href='http://www.gnu.org/licenses/gpl-2.0.html'>GNU Public License versión 2 (GPLv2)</a>
  *@date dd/mm/aaaa
  *@version 1.0.0
*/
function ClinicCreateCrtl($scope, $q, AuthService, 
                          $state, $ionicLoading, localStorageService) {
    	$scope.userData = localStorageService.get('user_data');
	}

module.exports = ['$scope', '$q', 'AuthService', 
                  '$state', '$ionicLoading', 'localStorageService',
                   ClinicCreateCrtl];
},{}],5:[function(require,module,exports){
/*******************************************
 *   Created by: @lhernandez               *
 *   Ing. Leonel Paolo Hernanadez M.       *
 *******************************************/
'use strict';

module.exports = angular.module('doctors', [])

    // Servicios para el modulo de medicos
    .service('Doctors', require('./models/models'))

    // Controller para crear la clinica
    .controller('ClinicCreateCrtl', require('./controllers/clinicCreateControllers'));

},{"./controllers/clinicCreateControllers":4,"./models/models":6}],6:[function(require,module,exports){
/**
  *Doctors Servicios  para el modelo de doctor 
  *@author nombre autor (nickname at Dakonon)
  *@email nombre@dominio.com
  *@copyright <a href='http://www.gnu.org/licenses/gpl-2.0.html'>GNU Public License versión 2 (GPLv2)</a>
  *@date dd/mm/aaaa
  *@version 1.0.0
*/
function Doctors() {
        this.phone_number = null;
        this.name = null;
        this.email = null;
        this.first_name = null;
        this.last_name = null;
    }

    Doctors.prototype.getAll = function() {
        // REST
        return "Result";
    };

    Doctors.prototype.findOne = function() {
        // REST
        // this.phone_number = null;
        // this.name = null;
        // this.email = null;
        // this.first_name = null;
        // this.last_name = null;
    };

    Doctors.prototype.findBy = function() {
        // REST
        // this.phone_number = obj;
        // this.name = null;
        // this.email = null;
        // this.first_name = null;
        // this.last_name = null;
    };

    Doctors.prototype.getSort = function(obj) {
        // REST
        return "return ordered objects";
    };

module.exports = [Doctors];
},{}],7:[function(require,module,exports){
/**
  *LoginCtrl Controlador para el logeo en la plataforma
  *@author nombre autor (nickname at Dakonon)
  *@email nombre@dominio.com
  *@copyright <a href='http://www.gnu.org/licenses/gpl-2.0.html'>GNU Public License versión 2 (GPLv2)</a>
  *@date dd/mm/aaaa
  *@version 1.0.0
*/
'use strict';

function LoginCtrl($scope, $q, AuthService,
                   $state, $ionicLoading, localStorageService) {
  	$scope.onLogin = onLogin;
    $scope.invalidUser = false;
    $scope.invalidForm = false;
    $scope.login = {
      username:"",
      password: ""
    };

    // Funcion anonima limpia las validaciones 
    $scope.cleanErrors = function (){
      console.log("cleanErrors"); // ELIMINAR LOS CONSOLE.LOG Y LAS PRUEBAS ANTES DE QUE SEAN SUBIDAS AL REPO
      $scope.invalidUser = false;
      $scope.invalidForm = false;
    };
  	
    // Funcion anonima que ejecuta el login para el usuario 
    function onLogin(){

      if (!$scope.login.username || !$scope.login.password){
        $scope.invalidForm = true; 
        return false;
      }
      $ionicLoading.show({});
      AuthService.onLogin($scope.login.username, $scope.login.password)
      .success(function(data) {
        $ionicLoading.hide();
        if(data.token)
        {
          console.log(data); // ELIMINAR LOS CONSOLE.LOG Y LAS PRUEBAS ANTES DE QUE SEAN SUBIDAS AL REPO
          localStorageService.set('access_token', data.token);
          localStorageService.set('user_data', data);
          $state.go('dashboad');
        }
        else{
          $ionicLoading.hide();
          $scope.invalidUser = true;
        }
        }).error(function(data) {
          $ionicLoading.hide();
          $scope.invalidUser = true;
        });
    }
}

module.exports = ['$scope', '$q', 'AuthService', 
                  '$state', '$ionicLoading', 'localStorageService',
                  LoginCtrl];
},{}],8:[function(require,module,exports){

'use strict';

function dashboadCtrl($scope, $q, AuthService, 
                      $state, $ionicLoading, localStorageService) {
	$scope.userData = localStorageService.get('user_data');      
}

module.exports = ['$scope', '$q', 'AuthService', 
                  '$state', '$ionicLoading', 'localStorageService',
                  dashboadCtrl];

},{}],9:[function(require,module,exports){
/*******************************************
 *   Created by: @lhernandez               *
 *   Ing. Leonel Paolo Hernanadez M.       *
 *******************************************/
'use strict';

module.exports = angular.module('login', [])

    // Servicios para el modulo de logeo
    .service('AuthService', require('./services/loginServices'))

    .controller('dashboadCtrl', require('./controllers/dashboadController.js'))
    .controller('LoginCtrl', require('./controllers/controllers'));
},{"./controllers/controllers":7,"./controllers/dashboadController.js":8,"./services/loginServices":10}],10:[function(require,module,exports){
/**
  *AuthService servicio que consulta el servicio rest de la plataforma
  *@author nombre autor (nickname at Dakonon)
  *@email nombre@dominio.com
  *@copyright <a href='http://www.gnu.org/licenses/gpl-2.0.html'>GNU Public License versión 2 (GPLv2)</a>
  *@date dd/mm/aaaa
  *@version 1.0.0
*/
'use strict';

function AuthService($http, $q, ApiLogin) {

	var self = this;
	self.onLogin = onLogin;
    
    /**
        *onLogin funcion que consulta el servicio web para el login
        *@param username credencial del usuario 
        *@param password credencial para acceder por parte del usuario
        *@return promise respuesta diferida para el controlador
    */
    function onLogin(username, password){
        console.log("prueba"); // ELIMINAR LOS CONSOLE.LOG Y LAS PRUEBAS ANTES DE QUE SEAN SUBIDAS AL REPO
      var parametros = JSON.stringify({
        username: username,
        password: password
      });
      var deferred = $q.defer();
      var promise = deferred.promise;
      var url = ApiLogin.url;
      
      var params = {username: username, password: password};
      $http.post(url, params).then(function(response){
        if (response.data.token)
          deferred.resolve(response.data);
        else
          deferred.reject(response.data);
      }, 
      function(error){
        deferred.reject(error);
      });
      
      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      };
      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      };
     return promise;
    }
  
}

module.exports = ['$http', '$q', 'ApiLogin', AuthService];
},{}],11:[function(require,module,exports){
/*******************************************
 *   Created by: @lhernandez               *
 *   Ing. Leonel Paolo Hernanadez M.       *
 *******************************************/
'use strict';

module.exports = angular.module('register', []);

    // Servicios 
    
    // Controllers
    
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3d3cvanMvY29uZmlnL2FwcC1tYWluLmpzIiwid3d3L2pzL2NvbmZpZy9hcHAuanMiLCJ3d3cvanMvY29uZmlnL3JvdXRlci5qcyIsInd3dy9qcy9tb2R1bGVzL2RvY3RvcnMvY29udHJvbGxlcnMvY2xpbmljQ3JlYXRlQ29udHJvbGxlcnMuanMiLCJ3d3cvanMvbW9kdWxlcy9kb2N0b3JzL2RvY3RvcnMuanMiLCJ3d3cvanMvbW9kdWxlcy9kb2N0b3JzL21vZGVscy9tb2RlbHMuanMiLCJ3d3cvanMvbW9kdWxlcy9sb2dpbi9jb250cm9sbGVycy9jb250cm9sbGVycy5qcyIsInd3dy9qcy9tb2R1bGVzL2xvZ2luL2NvbnRyb2xsZXJzL2Rhc2hib2FkQ29udHJvbGxlci5qcyIsInd3dy9qcy9tb2R1bGVzL2xvZ2luL2xvZ2luLmpzIiwid3d3L2pzL21vZHVsZXMvbG9naW4vc2VydmljZXMvbG9naW5TZXJ2aWNlcy5qcyIsInd3dy9qcy9tb2R1bGVzL3JlZ2lzdGVyL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBBcHBNYWluKCRpb25pY1BsYXRmb3JtKSB7XG4gICAgJGlvbmljUGxhdGZvcm0ucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgIC8vIGZvciBmb3JtIGlucHV0cylcbiAgICBpZiAod2luZG93LmNvcmRvdmEgJiYgd2luZG93LmNvcmRvdmEucGx1Z2lucyAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkKSB7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyKHRydWUpO1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmRpc2FibGVTY3JvbGwodHJ1ZSk7XG5cbiAgICB9XG4gICAgaWYgKHdpbmRvdy5TdGF0dXNCYXIpIHtcbiAgICAgIC8vIG9yZy5hcGFjaGUuY29yZG92YS5zdGF0dXNiYXIgcmVxdWlyZWRcbiAgICAgIC8vU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IFsnJGlvbmljUGxhdGZvcm0nLCBBcHBNYWluXTsiLCIndXNlIHN0cmljdCc7XG52YXIgVVJMX0JBU0U9J2h0dHA6Ly8xOTIuMTY4LjEyLjEyMTo4MDAyL2FwaS8nO1xudmFyIFVSTF9TUkMgPSAnanMvZGF0YS8nO1xuXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2RvY3RvcnMvZG9jdG9ycycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9sb2dpbi9sb2dpbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9yZWdpc3Rlci9yZWdpc3RlcicpO1xuXG4gIFxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbWVkaWNhbGJveCcsIFsnaW9uaWMnLCAnZG9jdG9ycycsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbG9naW4nLCAncmVnaXN0ZXInLCAncGFzY2FscHJlY2h0LnRyYW5zbGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMb2NhbFN0b3JhZ2VNb2R1bGUnXSlcbiAgLmNvbmZpZyhyZXF1aXJlKCcuL3JvdXRlcicpKVxuICAucnVuKHJlcXVpcmUoJy4vYXBwLW1haW4nKSlcbiAgXG4gIC8vQ29uc3RhbnRlcyBTZXJ2aWNpb3Mgd2ViIFxuICAuY29uc3RhbnQoJ0FwaUxvZ2luJywge1xuICAgIHVybDogVVJMX0JBU0UgKyAnYXBpLXRva2VuLWF1dGgvJ1xuICB9KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJHRyYW5zbGF0ZVByb3ZpZGVyJywgXG5mdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkdHJhbnNsYXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcblxuICAgICAgICAuc3RhdGUoJ3RhYicsIHtcbiAgICAgICAgICB1cmw6ICcvdGFiJyxcbiAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy90YWJzLmh0bWwnXG4gICAgICAgIH0pXG5cbiAgICAgICAgLnN0YXRlKCdpbmRleCcsIHtcbiAgICAgICAgICB1cmw6ICcvaW5kZXgnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2luZGV4Lmh0bWwnICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ3JlZ2lzdGVyJywge1xuICAgICAgICAgIHVybDogJy9yZWdpc3RlcicsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdqcy9tb2R1bGVzL3JlZ2lzdGVyL3RlbXBsYXRlcy9yZWdpc3Rlci5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsJyBcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKCdkYXNoYm9hZCcsIHtcbiAgICAgICAgICB1cmw6ICcvZGFzaGJvYWQnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnanMvbW9kdWxlcy9sb2dpbi90ZW1wbGF0ZXMvZGFzaGJvYWQuaHRtbCcsXG4gICAgICAgIH0pXG4gICAgICAgIC8qIERPQ1RPUlMgVVJMUyAqL1xuICAgICAgICAuc3RhdGUoJ2RvY3RvcicsIHtcbiAgICAgICAgICB1cmw6ICcvZG9jdG9yJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2pzL21vZHVsZXMvZG9jdG9ycy90ZW1wbGF0ZXMvaW5kZXguaHRtbCdcbiAgICAgICAgICAvLyB2aWV3czoge1xuICAgICAgICAgIC8vICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKCdkb2N0b3ItY2xpbmljcycsIHtcbiAgICAgICAgICB1cmw6ICcvZG9jdG9yL215LWNsaW5pY3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnanMvbW9kdWxlcy9kb2N0b3JzL3RlbXBsYXRlcy9teS1jbGluaWNzLmh0bWwnXG4gICAgICAgICAgLy8gdmlld3M6IHtcbiAgICAgICAgICAvLyAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyB9XG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnZG9jdG9yLWNsaW5pY3MtY3JlYXRlJywge1xuICAgICAgICAgIHVybDogJy9kb2N0b3IvbXktY2xpbmljcy9jcmVhdGUnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnanMvbW9kdWxlcy9kb2N0b3JzL3RlbXBsYXRlcy9teS1jbGluaWNzLWNyZWF0ZS5odG1sJ1xuICAgICAgICAgIC8vIHZpZXdzOiB7XG4gICAgICAgICAgLy8gICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9KTtcbiAgICAgICAgLyogRU5EIERPQ1RPUlMgVVJMUyovXG5cbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2luZGV4Jyk7XG5cbiAgICAgICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVN0YXRpY0ZpbGVzTG9hZGVyKHtcbiAgICAgICAgICAgIHByZWZpeDogJ2pzL2xvY2FsZXMvbG9jYWxlLScsXG4gICAgICAgICAgICBzdWZmaXg6ICcuanNvbidcbiAgICAgICAgfSk7XG4gICAgICAgICR0cmFuc2xhdGVQcm92aWRlci5wcmVmZXJyZWRMYW5ndWFnZSgnZXMnKTtcbiAgLy8gJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVNhbml0aXplVmFsdWVTdHJhdGVneSgnZXNjYXBlJyk7XG4gICAgfVxuXTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAgKkNsaW5pY0NyZWF0ZUNydGwgQ29udHJvbGFkb3IgcGFyYSBjcmVhciBjZW50cm9zIGRlIHNhbHVkXG4gICpAYXV0aG9yIG5vbWJyZSBhdXRvciAobmlja25hbWUgYXQgRGFrb25vbilcbiAgKkBlbWFpbCBub21icmVAZG9taW5pby5jb21cbiAgKkBjb3B5cmlnaHQgPGEgaHJlZj0naHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbCc+R05VIFB1YmxpYyBMaWNlbnNlIHZlcnNpw7NuIDIgKEdQTHYyKTwvYT5cbiAgKkBkYXRlIGRkL21tL2FhYWFcbiAgKkB2ZXJzaW9uIDEuMC4wXG4qL1xuZnVuY3Rpb24gQ2xpbmljQ3JlYXRlQ3J0bCgkc2NvcGUsICRxLCBBdXRoU2VydmljZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZSwgJGlvbmljTG9hZGluZywgbG9jYWxTdG9yYWdlU2VydmljZSkge1xuICAgIFx0JHNjb3BlLnVzZXJEYXRhID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ3VzZXJfZGF0YScpO1xuXHR9XG5cbm1vZHVsZS5leHBvcnRzID0gWyckc2NvcGUnLCAnJHEnLCAnQXV0aFNlcnZpY2UnLCBcbiAgICAgICAgICAgICAgICAgICckc3RhdGUnLCAnJGlvbmljTG9hZGluZycsICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgICAgICBDbGluaWNDcmVhdGVDcnRsXTsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogICBDcmVhdGVkIGJ5OiBAbGhlcm5hbmRleiAgICAgICAgICAgICAgICpcbiAqICAgSW5nLiBMZW9uZWwgUGFvbG8gSGVybmFuYWRleiBNLiAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnZG9jdG9ycycsIFtdKVxuXG4gICAgLy8gU2VydmljaW9zIHBhcmEgZWwgbW9kdWxvIGRlIG1lZGljb3NcbiAgICAuc2VydmljZSgnRG9jdG9ycycsIHJlcXVpcmUoJy4vbW9kZWxzL21vZGVscycpKVxuXG4gICAgLy8gQ29udHJvbGxlciBwYXJhIGNyZWFyIGxhIGNsaW5pY2FcbiAgICAuY29udHJvbGxlcignQ2xpbmljQ3JlYXRlQ3J0bCcsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvY2xpbmljQ3JlYXRlQ29udHJvbGxlcnMnKSk7XG4iLCIvKipcbiAgKkRvY3RvcnMgU2VydmljaW9zICBwYXJhIGVsIG1vZGVsbyBkZSBkb2N0b3IgXG4gICpAYXV0aG9yIG5vbWJyZSBhdXRvciAobmlja25hbWUgYXQgRGFrb25vbilcbiAgKkBlbWFpbCBub21icmVAZG9taW5pby5jb21cbiAgKkBjb3B5cmlnaHQgPGEgaHJlZj0naHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbCc+R05VIFB1YmxpYyBMaWNlbnNlIHZlcnNpw7NuIDIgKEdQTHYyKTwvYT5cbiAgKkBkYXRlIGRkL21tL2FhYWFcbiAgKkB2ZXJzaW9uIDEuMC4wXG4qL1xuZnVuY3Rpb24gRG9jdG9ycygpIHtcbiAgICAgICAgdGhpcy5waG9uZV9udW1iZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLmVtYWlsID0gbnVsbDtcbiAgICAgICAgdGhpcy5maXJzdF9uYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0X25hbWUgPSBudWxsO1xuICAgIH1cblxuICAgIERvY3RvcnMucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBSRVNUXG4gICAgICAgIHJldHVybiBcIlJlc3VsdFwiO1xuICAgIH07XG5cbiAgICBEb2N0b3JzLnByb3RvdHlwZS5maW5kT25lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFJFU1RcbiAgICAgICAgLy8gdGhpcy5waG9uZV9udW1iZXIgPSBudWxsO1xuICAgICAgICAvLyB0aGlzLm5hbWUgPSBudWxsO1xuICAgICAgICAvLyB0aGlzLmVtYWlsID0gbnVsbDtcbiAgICAgICAgLy8gdGhpcy5maXJzdF9uYW1lID0gbnVsbDtcbiAgICAgICAgLy8gdGhpcy5sYXN0X25hbWUgPSBudWxsO1xuICAgIH07XG5cbiAgICBEb2N0b3JzLnByb3RvdHlwZS5maW5kQnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gUkVTVFxuICAgICAgICAvLyB0aGlzLnBob25lX251bWJlciA9IG9iajtcbiAgICAgICAgLy8gdGhpcy5uYW1lID0gbnVsbDtcbiAgICAgICAgLy8gdGhpcy5lbWFpbCA9IG51bGw7XG4gICAgICAgIC8vIHRoaXMuZmlyc3RfbmFtZSA9IG51bGw7XG4gICAgICAgIC8vIHRoaXMubGFzdF9uYW1lID0gbnVsbDtcbiAgICB9O1xuXG4gICAgRG9jdG9ycy5wcm90b3R5cGUuZ2V0U29ydCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAvLyBSRVNUXG4gICAgICAgIHJldHVybiBcInJldHVybiBvcmRlcmVkIG9iamVjdHNcIjtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtEb2N0b3JzXTsiLCIvKipcbiAgKkxvZ2luQ3RybCBDb250cm9sYWRvciBwYXJhIGVsIGxvZ2VvIGVuIGxhIHBsYXRhZm9ybWFcbiAgKkBhdXRob3Igbm9tYnJlIGF1dG9yIChuaWNrbmFtZSBhdCBEYWtvbm9uKVxuICAqQGVtYWlsIG5vbWJyZUBkb21pbmlvLmNvbVxuICAqQGNvcHlyaWdodCA8YSBocmVmPSdodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTIuMC5odG1sJz5HTlUgUHVibGljIExpY2Vuc2UgdmVyc2nDs24gMiAoR1BMdjIpPC9hPlxuICAqQGRhdGUgZGQvbW0vYWFhYVxuICAqQHZlcnNpb24gMS4wLjBcbiovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIExvZ2luQ3RybCgkc2NvcGUsICRxLCBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAkc3RhdGUsICRpb25pY0xvYWRpbmcsIGxvY2FsU3RvcmFnZVNlcnZpY2UpIHtcbiAgXHQkc2NvcGUub25Mb2dpbiA9IG9uTG9naW47XG4gICAgJHNjb3BlLmludmFsaWRVc2VyID0gZmFsc2U7XG4gICAgJHNjb3BlLmludmFsaWRGb3JtID0gZmFsc2U7XG4gICAgJHNjb3BlLmxvZ2luID0ge1xuICAgICAgdXNlcm5hbWU6XCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgfTtcblxuICAgIC8vIEZ1bmNpb24gYW5vbmltYSBsaW1waWEgbGFzIHZhbGlkYWNpb25lcyBcbiAgICAkc2NvcGUuY2xlYW5FcnJvcnMgPSBmdW5jdGlvbiAoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xlYW5FcnJvcnNcIik7IC8vIEVMSU1JTkFSIExPUyBDT05TT0xFLkxPRyBZIExBUyBQUlVFQkFTIEFOVEVTIERFIFFVRSBTRUFOIFNVQklEQVMgQUwgUkVQT1xuICAgICAgJHNjb3BlLmludmFsaWRVc2VyID0gZmFsc2U7XG4gICAgICAkc2NvcGUuaW52YWxpZEZvcm0gPSBmYWxzZTtcbiAgICB9O1xuICBcdFxuICAgIC8vIEZ1bmNpb24gYW5vbmltYSBxdWUgZWplY3V0YSBlbCBsb2dpbiBwYXJhIGVsIHVzdWFyaW8gXG4gICAgZnVuY3Rpb24gb25Mb2dpbigpe1xuXG4gICAgICBpZiAoISRzY29wZS5sb2dpbi51c2VybmFtZSB8fCAhJHNjb3BlLmxvZ2luLnBhc3N3b3JkKXtcbiAgICAgICAgJHNjb3BlLmludmFsaWRGb3JtID0gdHJ1ZTsgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgICRpb25pY0xvYWRpbmcuc2hvdyh7fSk7XG4gICAgICBBdXRoU2VydmljZS5vbkxvZ2luKCRzY29wZS5sb2dpbi51c2VybmFtZSwgJHNjb3BlLmxvZ2luLnBhc3N3b3JkKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgaWYoZGF0YS50b2tlbilcbiAgICAgICAge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpOyAvLyBFTElNSU5BUiBMT1MgQ09OU09MRS5MT0cgWSBMQVMgUFJVRUJBUyBBTlRFUyBERSBRVUUgU0VBTiBTVUJJREFTIEFMIFJFUE9cbiAgICAgICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnYWNjZXNzX3Rva2VuJywgZGF0YS50b2tlbik7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3VzZXJfZGF0YScsIGRhdGEpO1xuICAgICAgICAgICRzdGF0ZS5nbygnZGFzaGJvYWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpO1xuICAgICAgICAgICRzY29wZS5pbnZhbGlkVXNlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpO1xuICAgICAgICAgICRzY29wZS5pbnZhbGlkVXNlciA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBbJyRzY29wZScsICckcScsICdBdXRoU2VydmljZScsIFxuICAgICAgICAgICAgICAgICAgJyRzdGF0ZScsICckaW9uaWNMb2FkaW5nJywgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICAgTG9naW5DdHJsXTsiLCJcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZGFzaGJvYWRDdHJsKCRzY29wZSwgJHEsIEF1dGhTZXJ2aWNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAkc3RhdGUsICRpb25pY0xvYWRpbmcsIGxvY2FsU3RvcmFnZVNlcnZpY2UpIHtcblx0JHNjb3BlLnVzZXJEYXRhID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ3VzZXJfZGF0YScpOyAgICAgIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFsnJHNjb3BlJywgJyRxJywgJ0F1dGhTZXJ2aWNlJywgXG4gICAgICAgICAgICAgICAgICAnJHN0YXRlJywgJyRpb25pY0xvYWRpbmcnLCAnbG9jYWxTdG9yYWdlU2VydmljZScsXG4gICAgICAgICAgICAgICAgICBkYXNoYm9hZEN0cmxdO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgQ3JlYXRlZCBieTogQGxoZXJuYW5kZXogICAgICAgICAgICAgICAqXG4gKiAgIEluZy4gTGVvbmVsIFBhb2xvIEhlcm5hbmFkZXogTS4gICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2luJywgW10pXG5cbiAgICAvLyBTZXJ2aWNpb3MgcGFyYSBlbCBtb2R1bG8gZGUgbG9nZW9cbiAgICAuc2VydmljZSgnQXV0aFNlcnZpY2UnLCByZXF1aXJlKCcuL3NlcnZpY2VzL2xvZ2luU2VydmljZXMnKSlcblxuICAgIC5jb250cm9sbGVyKCdkYXNoYm9hZEN0cmwnLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2Rhc2hib2FkQ29udHJvbGxlci5qcycpKVxuICAgIC5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzJykpOyIsIi8qKlxuICAqQXV0aFNlcnZpY2Ugc2VydmljaW8gcXVlIGNvbnN1bHRhIGVsIHNlcnZpY2lvIHJlc3QgZGUgbGEgcGxhdGFmb3JtYVxuICAqQGF1dGhvciBub21icmUgYXV0b3IgKG5pY2tuYW1lIGF0IERha29ub24pXG4gICpAZW1haWwgbm9tYnJlQGRvbWluaW8uY29tXG4gICpAY29weXJpZ2h0IDxhIGhyZWY9J2h0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWwnPkdOVSBQdWJsaWMgTGljZW5zZSB2ZXJzacOzbiAyIChHUEx2Mik8L2E+XG4gICpAZGF0ZSBkZC9tbS9hYWFhXG4gICpAdmVyc2lvbiAxLjAuMFxuKi9cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gQXV0aFNlcnZpY2UoJGh0dHAsICRxLCBBcGlMb2dpbikge1xuXG5cdHZhciBzZWxmID0gdGhpcztcblx0c2VsZi5vbkxvZ2luID0gb25Mb2dpbjtcbiAgICBcbiAgICAvKipcbiAgICAgICAgKm9uTG9naW4gZnVuY2lvbiBxdWUgY29uc3VsdGEgZWwgc2VydmljaW8gd2ViIHBhcmEgZWwgbG9naW5cbiAgICAgICAgKkBwYXJhbSB1c2VybmFtZSBjcmVkZW5jaWFsIGRlbCB1c3VhcmlvIFxuICAgICAgICAqQHBhcmFtIHBhc3N3b3JkIGNyZWRlbmNpYWwgcGFyYSBhY2NlZGVyIHBvciBwYXJ0ZSBkZWwgdXN1YXJpb1xuICAgICAgICAqQHJldHVybiBwcm9taXNlIHJlc3B1ZXN0YSBkaWZlcmlkYSBwYXJhIGVsIGNvbnRyb2xhZG9yXG4gICAgKi9cbiAgICBmdW5jdGlvbiBvbkxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJ1ZWJhXCIpOyAvLyBFTElNSU5BUiBMT1MgQ09OU09MRS5MT0cgWSBMQVMgUFJVRUJBUyBBTlRFUyBERSBRVUUgU0VBTiBTVUJJREFTIEFMIFJFUE9cbiAgICAgIHZhciBwYXJhbWV0cm9zID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgfSk7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgdmFyIHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgdmFyIHVybCA9IEFwaUxvZ2luLnVybDtcbiAgICAgIFxuICAgICAgdmFyIHBhcmFtcyA9IHt1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZH07XG4gICAgICAkaHR0cC5wb3N0KHVybCwgcGFyYW1zKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEudG9rZW4pXG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0sIFxuICAgICAgZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHByb21pc2Uuc3VjY2VzcyA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHByb21pc2UudGhlbihmbik7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfTtcbiAgICAgIHByb21pc2UuZXJyb3IgPSBmdW5jdGlvbihmbikge1xuICAgICAgICBwcm9taXNlLnRoZW4obnVsbCwgZm4pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH07XG4gICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gWyckaHR0cCcsICckcScsICdBcGlMb2dpbicsIEF1dGhTZXJ2aWNlXTsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogICBDcmVhdGVkIGJ5OiBAbGhlcm5hbmRleiAgICAgICAgICAgICAgICpcbiAqICAgSW5nLiBMZW9uZWwgUGFvbG8gSGVybmFuYWRleiBNLiAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgncmVnaXN0ZXInLCBbXSk7XG5cbiAgICAvLyBTZXJ2aWNpb3MgXG4gICAgXG4gICAgLy8gQ29udHJvbGxlcnNcbiAgICAiXX0=
