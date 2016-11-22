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
var URL_BASE='http://localhost:8000/api/';
var URL_SRC = 'js/data/';

require('./modules/doctors/doctors');
require('./modules/login/login');
require('./modules/register/register');

  
module.exports = angular.module('medicalbox', ['ionic', 'doctors', 
                                'login', 'register', 'pascalprecht.translate',
                                'LocalStorageModule'])
  .config(require('./router'))
  .run(require('./app-main.js'))
  

  //Constantes Servicios web 
  .constant('ApiLogin', {
    url: URL_BASE + 'api-token-auth/'
  });
},{"./app-main.js":1,"./modules/doctors/doctors":4,"./modules/login/login":8,"./modules/register/register":10,"./router":11}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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

},{"./controllers/clinicCreateControllers":3,"./models/models":5}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){

'use strict';

function dashboadCtrl($scope, $q, AuthService, 
                      $state, $ionicLoading, localStorageService) {
	$scope.userData = localStorageService.get('user_data');      
}

module.exports = ['$scope', '$q', 'AuthService', 
                  '$state', '$ionicLoading', 'localStorageService',
                  dashboadCtrl];

},{}],8:[function(require,module,exports){
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
},{"./controllers/controllers":6,"./controllers/dashboadController.js":7,"./services/loginServices":9}],9:[function(require,module,exports){
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
      var url = ApiLogin.getToken();
      
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
},{}],10:[function(require,module,exports){
/*******************************************
 *   Created by: @lhernandez               *
 *   Ing. Leonel Paolo Hernanadez M.       *
 *******************************************/
'use strict';

module.exports = angular.module('register', []);

    // Servicios 
    
    // Controllers
    
},{}],11:[function(require,module,exports){
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
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3d3cvanMvYXBwLW1haW4uanMiLCJ3d3cvanMvYXBwLmpzIiwid3d3L2pzL21vZHVsZXMvZG9jdG9ycy9jb250cm9sbGVycy9jbGluaWNDcmVhdGVDb250cm9sbGVycy5qcyIsInd3dy9qcy9tb2R1bGVzL2RvY3RvcnMvZG9jdG9ycy5qcyIsInd3dy9qcy9tb2R1bGVzL2RvY3RvcnMvbW9kZWxzL21vZGVscy5qcyIsInd3dy9qcy9tb2R1bGVzL2xvZ2luL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzLmpzIiwid3d3L2pzL21vZHVsZXMvbG9naW4vY29udHJvbGxlcnMvZGFzaGJvYWRDb250cm9sbGVyLmpzIiwid3d3L2pzL21vZHVsZXMvbG9naW4vbG9naW4uanMiLCJ3d3cvanMvbW9kdWxlcy9sb2dpbi9zZXJ2aWNlcy9sb2dpblNlcnZpY2VzLmpzIiwid3d3L2pzL21vZHVsZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuanMiLCJ3d3cvanMvcm91dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gQXBwTWFpbigkaW9uaWNQbGF0Zm9ybSkge1xuICAgICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcbiAgICAvLyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMgJiYgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhcih0cnVlKTtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5kaXNhYmxlU2Nyb2xsKHRydWUpO1xuXG4gICAgfVxuICAgIGlmICh3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAvLyBvcmcuYXBhY2hlLmNvcmRvdmEuc3RhdHVzYmFyIHJlcXVpcmVkXG4gICAgICAvL1N0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBbJyRpb25pY1BsYXRmb3JtJywgQXBwTWFpbl07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIFVSTF9CQVNFPSdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpLyc7XG52YXIgVVJMX1NSQyA9ICdqcy9kYXRhLyc7XG5cbnJlcXVpcmUoJy4vbW9kdWxlcy9kb2N0b3JzL2RvY3RvcnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9sb2dpbi9sb2dpbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL3JlZ2lzdGVyL3JlZ2lzdGVyJyk7XG5cbiAgXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdtZWRpY2FsYm94JywgWydpb25pYycsICdkb2N0b3JzJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsb2dpbicsICdyZWdpc3RlcicsICdwYXNjYWxwcmVjaHQudHJhbnNsYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xvY2FsU3RvcmFnZU1vZHVsZSddKVxuICAuY29uZmlnKHJlcXVpcmUoJy4vcm91dGVyJykpXG4gIC5ydW4ocmVxdWlyZSgnLi9hcHAtbWFpbi5qcycpKVxuICBcblxuICAvL0NvbnN0YW50ZXMgU2VydmljaW9zIHdlYiBcbiAgLmNvbnN0YW50KCdBcGlMb2dpbicsIHtcbiAgICB1cmw6IFVSTF9CQVNFICsgJ2FwaS10b2tlbi1hdXRoLydcbiAgfSk7IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gICpDbGluaWNDcmVhdGVDcnRsIENvbnRyb2xhZG9yIHBhcmEgY3JlYXIgY2VudHJvcyBkZSBzYWx1ZFxuICAqQGF1dGhvciBub21icmUgYXV0b3IgKG5pY2tuYW1lIGF0IERha29ub24pXG4gICpAZW1haWwgbm9tYnJlQGRvbWluaW8uY29tXG4gICpAY29weXJpZ2h0IDxhIGhyZWY9J2h0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWwnPkdOVSBQdWJsaWMgTGljZW5zZSB2ZXJzacOzbiAyIChHUEx2Mik8L2E+XG4gICpAZGF0ZSBkZC9tbS9hYWFhXG4gICpAdmVyc2lvbiAxLjAuMFxuKi9cbmZ1bmN0aW9uIENsaW5pY0NyZWF0ZUNydGwoJHNjb3BlLCAkcSwgQXV0aFNlcnZpY2UsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkc3RhdGUsICRpb25pY0xvYWRpbmcsIGxvY2FsU3RvcmFnZVNlcnZpY2UpIHtcbiAgICBcdCRzY29wZS51c2VyRGF0YSA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCd1c2VyX2RhdGEnKTtcblx0fVxuXG5tb2R1bGUuZXhwb3J0cyA9IFsnJHNjb3BlJywgJyRxJywgJ0F1dGhTZXJ2aWNlJywgXG4gICAgICAgICAgICAgICAgICAnJHN0YXRlJywgJyRpb25pY0xvYWRpbmcnLCAnbG9jYWxTdG9yYWdlU2VydmljZScsXG4gICAgICAgICAgICAgICAgICAgQ2xpbmljQ3JlYXRlQ3J0bF07IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgQ3JlYXRlZCBieTogQGxoZXJuYW5kZXogICAgICAgICAgICAgICAqXG4gKiAgIEluZy4gTGVvbmVsIFBhb2xvIEhlcm5hbmFkZXogTS4gICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2RvY3RvcnMnLCBbXSlcblxuICAgIC8vIFNlcnZpY2lvcyBwYXJhIGVsIG1vZHVsbyBkZSBtZWRpY29zXG4gICAgLnNlcnZpY2UoJ0RvY3RvcnMnLCByZXF1aXJlKCcuL21vZGVscy9tb2RlbHMnKSlcblxuICAgIC8vIENvbnRyb2xsZXIgcGFyYSBjcmVhciBsYSBjbGluaWNhXG4gICAgLmNvbnRyb2xsZXIoJ0NsaW5pY0NyZWF0ZUNydGwnLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2NsaW5pY0NyZWF0ZUNvbnRyb2xsZXJzJykpO1xuIiwiLyoqXG4gICpEb2N0b3JzIFNlcnZpY2lvcyAgcGFyYSBlbCBtb2RlbG8gZGUgZG9jdG9yIFxuICAqQGF1dGhvciBub21icmUgYXV0b3IgKG5pY2tuYW1lIGF0IERha29ub24pXG4gICpAZW1haWwgbm9tYnJlQGRvbWluaW8uY29tXG4gICpAY29weXJpZ2h0IDxhIGhyZWY9J2h0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWwnPkdOVSBQdWJsaWMgTGljZW5zZSB2ZXJzacOzbiAyIChHUEx2Mik8L2E+XG4gICpAZGF0ZSBkZC9tbS9hYWFhXG4gICpAdmVyc2lvbiAxLjAuMFxuKi9cbmZ1bmN0aW9uIERvY3RvcnMoKSB7XG4gICAgICAgIHRoaXMucGhvbmVfbnVtYmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbWFpbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlyc3RfbmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdF9uYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBEb2N0b3JzLnByb3RvdHlwZS5nZXRBbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gUkVTVFxuICAgICAgICByZXR1cm4gXCJSZXN1bHRcIjtcbiAgICB9O1xuXG4gICAgRG9jdG9ycy5wcm90b3R5cGUuZmluZE9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBSRVNUXG4gICAgICAgIC8vIHRoaXMucGhvbmVfbnVtYmVyID0gbnVsbDtcbiAgICAgICAgLy8gdGhpcy5uYW1lID0gbnVsbDtcbiAgICAgICAgLy8gdGhpcy5lbWFpbCA9IG51bGw7XG4gICAgICAgIC8vIHRoaXMuZmlyc3RfbmFtZSA9IG51bGw7XG4gICAgICAgIC8vIHRoaXMubGFzdF9uYW1lID0gbnVsbDtcbiAgICB9O1xuXG4gICAgRG9jdG9ycy5wcm90b3R5cGUuZmluZEJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFJFU1RcbiAgICAgICAgLy8gdGhpcy5waG9uZV9udW1iZXIgPSBvYmo7XG4gICAgICAgIC8vIHRoaXMubmFtZSA9IG51bGw7XG4gICAgICAgIC8vIHRoaXMuZW1haWwgPSBudWxsO1xuICAgICAgICAvLyB0aGlzLmZpcnN0X25hbWUgPSBudWxsO1xuICAgICAgICAvLyB0aGlzLmxhc3RfbmFtZSA9IG51bGw7XG4gICAgfTtcblxuICAgIERvY3RvcnMucHJvdG90eXBlLmdldFNvcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgLy8gUkVTVFxuICAgICAgICByZXR1cm4gXCJyZXR1cm4gb3JkZXJlZCBvYmplY3RzXCI7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBbRG9jdG9yc107IiwiLyoqXG4gICpMb2dpbkN0cmwgQ29udHJvbGFkb3IgcGFyYSBlbCBsb2dlbyBlbiBsYSBwbGF0YWZvcm1hXG4gICpAYXV0aG9yIG5vbWJyZSBhdXRvciAobmlja25hbWUgYXQgRGFrb25vbilcbiAgKkBlbWFpbCBub21icmVAZG9taW5pby5jb21cbiAgKkBjb3B5cmlnaHQgPGEgaHJlZj0naHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbCc+R05VIFB1YmxpYyBMaWNlbnNlIHZlcnNpw7NuIDIgKEdQTHYyKTwvYT5cbiAgKkBkYXRlIGRkL21tL2FhYWFcbiAgKkB2ZXJzaW9uIDEuMC4wXG4qL1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBMb2dpbkN0cmwoJHNjb3BlLCAkcSwgQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgJHN0YXRlLCAkaW9uaWNMb2FkaW5nLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSB7XG4gIFx0JHNjb3BlLm9uTG9naW4gPSBvbkxvZ2luO1xuICAgICRzY29wZS5pbnZhbGlkVXNlciA9IGZhbHNlO1xuICAgICRzY29wZS5pbnZhbGlkRm9ybSA9IGZhbHNlO1xuICAgICRzY29wZS5sb2dpbiA9IHtcbiAgICAgIHVzZXJuYW1lOlwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIlxuICAgIH07XG5cbiAgICAvLyBGdW5jaW9uIGFub25pbWEgbGltcGlhIGxhcyB2YWxpZGFjaW9uZXMgXG4gICAgJHNjb3BlLmNsZWFuRXJyb3JzID0gZnVuY3Rpb24gKCl7XG4gICAgICBjb25zb2xlLmxvZyhcImNsZWFuRXJyb3JzXCIpOyAvLyBFTElNSU5BUiBMT1MgQ09OU09MRS5MT0cgWSBMQVMgUFJVRUJBUyBBTlRFUyBERSBRVUUgU0VBTiBTVUJJREFTIEFMIFJFUE9cbiAgICAgICRzY29wZS5pbnZhbGlkVXNlciA9IGZhbHNlO1xuICAgICAgJHNjb3BlLmludmFsaWRGb3JtID0gZmFsc2U7XG4gICAgfTtcbiAgXHRcbiAgICAvLyBGdW5jaW9uIGFub25pbWEgcXVlIGVqZWN1dGEgZWwgbG9naW4gcGFyYSBlbCB1c3VhcmlvIFxuICAgIGZ1bmN0aW9uIG9uTG9naW4oKXtcblxuICAgICAgaWYgKCEkc2NvcGUubG9naW4udXNlcm5hbWUgfHwgISRzY29wZS5sb2dpbi5wYXNzd29yZCl7XG4gICAgICAgICRzY29wZS5pbnZhbGlkRm9ybSA9IHRydWU7IFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAkaW9uaWNMb2FkaW5nLnNob3coe30pO1xuICAgICAgQXV0aFNlcnZpY2Uub25Mb2dpbigkc2NvcGUubG9naW4udXNlcm5hbWUsICRzY29wZS5sb2dpbi5wYXNzd29yZClcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGlvbmljTG9hZGluZy5oaWRlKCk7XG4gICAgICAgIGlmKGRhdGEudG9rZW4pXG4gICAgICAgIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTsgLy8gRUxJTUlOQVIgTE9TIENPTlNPTEUuTE9HIFkgTEFTIFBSVUVCQVMgQU5URVMgREUgUVVFIFNFQU4gU1VCSURBUyBBTCBSRVBPXG4gICAgICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2FjY2Vzc190b2tlbicsIGRhdGEudG9rZW4pO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCd1c2VyX2RhdGEnLCBkYXRhKTtcbiAgICAgICAgICAkc3RhdGUuZ28oJ2Rhc2hib2FkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgICAkc2NvcGUuaW52YWxpZFVzZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIH0pLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgICAkc2NvcGUuaW52YWxpZFVzZXIgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWyckc2NvcGUnLCAnJHEnLCAnQXV0aFNlcnZpY2UnLCBcbiAgICAgICAgICAgICAgICAgICckc3RhdGUnLCAnJGlvbmljTG9hZGluZycsICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgICAgIExvZ2luQ3RybF07IiwiXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGRhc2hib2FkQ3RybCgkc2NvcGUsICRxLCBBdXRoU2VydmljZSwgXG4gICAgICAgICAgICAgICAgICAgICAgJHN0YXRlLCAkaW9uaWNMb2FkaW5nLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSB7XG5cdCRzY29wZS51c2VyRGF0YSA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCd1c2VyX2RhdGEnKTsgICAgICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBbJyRzY29wZScsICckcScsICdBdXRoU2VydmljZScsIFxuICAgICAgICAgICAgICAgICAgJyRzdGF0ZScsICckaW9uaWNMb2FkaW5nJywgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICAgZGFzaGJvYWRDdHJsXTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAgIENyZWF0ZWQgYnk6IEBsaGVybmFuZGV6ICAgICAgICAgICAgICAgKlxuICogICBJbmcuIExlb25lbCBQYW9sbyBIZXJuYW5hZGV6IE0uICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2dpbicsIFtdKVxuXG4gICAgLy8gU2VydmljaW9zIHBhcmEgZWwgbW9kdWxvIGRlIGxvZ2VvXG4gICAgLnNlcnZpY2UoJ0F1dGhTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9sb2dpblNlcnZpY2VzJykpXG5cbiAgICAuY29udHJvbGxlcignZGFzaGJvYWRDdHJsJywgcmVxdWlyZSgnLi9jb250cm9sbGVycy9kYXNoYm9hZENvbnRyb2xsZXIuanMnKSlcbiAgICAuY29udHJvbGxlcignTG9naW5DdHJsJywgcmVxdWlyZSgnLi9jb250cm9sbGVycy9jb250cm9sbGVycycpKTsiLCIvKipcbiAgKkF1dGhTZXJ2aWNlIHNlcnZpY2lvIHF1ZSBjb25zdWx0YSBlbCBzZXJ2aWNpbyByZXN0IGRlIGxhIHBsYXRhZm9ybWFcbiAgKkBhdXRob3Igbm9tYnJlIGF1dG9yIChuaWNrbmFtZSBhdCBEYWtvbm9uKVxuICAqQGVtYWlsIG5vbWJyZUBkb21pbmlvLmNvbVxuICAqQGNvcHlyaWdodCA8YSBocmVmPSdodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTIuMC5odG1sJz5HTlUgUHVibGljIExpY2Vuc2UgdmVyc2nDs24gMiAoR1BMdjIpPC9hPlxuICAqQGRhdGUgZGQvbW0vYWFhYVxuICAqQHZlcnNpb24gMS4wLjBcbiovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEF1dGhTZXJ2aWNlKCRodHRwLCAkcSwgQXBpTG9naW4pIHtcblxuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHNlbGYub25Mb2dpbiA9IG9uTG9naW47XG4gICAgXG4gICAgLyoqXG4gICAgICAgICpvbkxvZ2luIGZ1bmNpb24gcXVlIGNvbnN1bHRhIGVsIHNlcnZpY2lvIHdlYiBwYXJhIGVsIGxvZ2luXG4gICAgICAgICpAcGFyYW0gdXNlcm5hbWUgY3JlZGVuY2lhbCBkZWwgdXN1YXJpbyBcbiAgICAgICAgKkBwYXJhbSBwYXNzd29yZCBjcmVkZW5jaWFsIHBhcmEgYWNjZWRlciBwb3IgcGFydGUgZGVsIHVzdWFyaW9cbiAgICAgICAgKkByZXR1cm4gcHJvbWlzZSByZXNwdWVzdGEgZGlmZXJpZGEgcGFyYSBlbCBjb250cm9sYWRvclxuICAgICovXG4gICAgZnVuY3Rpb24gb25Mb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInBydWViYVwiKTsgLy8gRUxJTUlOQVIgTE9TIENPTlNPTEUuTE9HIFkgTEFTIFBSVUVCQVMgQU5URVMgREUgUVVFIFNFQU4gU1VCSURBUyBBTCBSRVBPXG4gICAgICB2YXIgcGFyYW1ldHJvcyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH0pO1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgIHZhciBwcm9taXNlID0gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgIHZhciB1cmwgPSBBcGlMb2dpbi5nZXRUb2tlbigpO1xuICAgICAgXG4gICAgICB2YXIgcGFyYW1zID0ge3VzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcbiAgICAgICRodHRwLnBvc3QodXJsLCBwYXJhbXMpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS50b2tlbilcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSwgXG4gICAgICBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgcHJvbWlzZS5zdWNjZXNzID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKGZuKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9O1xuICAgICAgcHJvbWlzZS5lcnJvciA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHByb21pc2UudGhlbihudWxsLCBmbik7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfTtcbiAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBbJyRodHRwJywgJyRxJywgJ0FwaUxvZ2luJywgQXV0aFNlcnZpY2VdOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAgIENyZWF0ZWQgYnk6IEBsaGVybmFuZGV6ICAgICAgICAgICAgICAgKlxuICogICBJbmcuIExlb25lbCBQYW9sbyBIZXJuYW5hZGV6IE0uICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdyZWdpc3RlcicsIFtdKTtcblxuICAgIC8vIFNlcnZpY2lvcyBcbiAgICBcbiAgICAvLyBDb250cm9sbGVyc1xuICAgICIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckdHJhbnNsYXRlUHJvdmlkZXInLCBcbmZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICR0cmFuc2xhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlclxuXG4gICAgICAgIC5zdGF0ZSgndGFiJywge1xuICAgICAgICAgIHVybDogJy90YWInLFxuICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3RhYnMuaHRtbCdcbiAgICAgICAgfSlcblxuICAgICAgICAuc3RhdGUoJ2luZGV4Jywge1xuICAgICAgICAgIHVybDogJy9pbmRleCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaW5kZXguaHRtbCcgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgncmVnaXN0ZXInLCB7XG4gICAgICAgICAgdXJsOiAnL3JlZ2lzdGVyJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2pzL21vZHVsZXMvcmVnaXN0ZXIvdGVtcGxhdGVzL3JlZ2lzdGVyLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnIFxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2Rhc2hib2FkJywge1xuICAgICAgICAgIHVybDogJy9kYXNoYm9hZCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdqcy9tb2R1bGVzL2xvZ2luL3RlbXBsYXRlcy9kYXNoYm9hZC5odG1sJyxcbiAgICAgICAgfSlcbiAgICAgICAgLyogRE9DVE9SUyBVUkxTICovXG4gICAgICAgIC5zdGF0ZSgnZG9jdG9yJywge1xuICAgICAgICAgIHVybDogJy9kb2N0b3InLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnanMvbW9kdWxlcy9kb2N0b3JzL3RlbXBsYXRlcy9pbmRleC5odG1sJ1xuICAgICAgICAgIC8vIHZpZXdzOiB7XG4gICAgICAgICAgLy8gICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2RvY3Rvci1jbGluaWNzJywge1xuICAgICAgICAgIHVybDogJy9kb2N0b3IvbXktY2xpbmljcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdqcy9tb2R1bGVzL2RvY3RvcnMvdGVtcGxhdGVzL215LWNsaW5pY3MuaHRtbCdcbiAgICAgICAgICAvLyB2aWV3czoge1xuICAgICAgICAgIC8vICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKCdkb2N0b3ItY2xpbmljcy1jcmVhdGUnLCB7XG4gICAgICAgICAgdXJsOiAnL2RvY3Rvci9teS1jbGluaWNzL2NyZWF0ZScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdqcy9tb2R1bGVzL2RvY3RvcnMvdGVtcGxhdGVzL215LWNsaW5pY3MtY3JlYXRlLmh0bWwnXG4gICAgICAgICAgLy8gdmlld3M6IHtcbiAgICAgICAgICAvLyAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuICAgICAgICAvKiBFTkQgRE9DVE9SUyBVUkxTKi9cblxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaW5kZXgnKTtcblxuICAgICAgICAkdHJhbnNsYXRlUHJvdmlkZXIudXNlU3RhdGljRmlsZXNMb2FkZXIoe1xuICAgICAgICAgICAgcHJlZml4OiAnanMvbG9jYWxlcy9sb2NhbGUtJyxcbiAgICAgICAgICAgIHN1ZmZpeDogJy5qc29uJ1xuICAgICAgICB9KTtcbiAgICAgICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnByZWZlcnJlZExhbmd1YWdlKCdlcycpO1xuICAvLyAkdHJhbnNsYXRlUHJvdmlkZXIudXNlU2FuaXRpemVWYWx1ZVN0cmF0ZWd5KCdlc2NhcGUnKTtcbiAgICB9XG5dOyJdfQ==
