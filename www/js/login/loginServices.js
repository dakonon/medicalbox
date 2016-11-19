/*******************************************
    *   Created by: @pdonaire1                *
    *   Ing. Pablo Alejandro Gonzalez Donaire *
    *******************************************/
(function () {
    'use strict';
angular.module('medicalbox.Services')

.service('AuthService', AuthService);

AuthService.$inject = ['$http', '$q', 'constants']

function AuthService($http, $q,constants) {

	var self = this;
	self.onLogin = onLogin;
  
    function onLogin(username, password){
        console.log("prueba");
      var parametros = JSON.stringify({
        username: username,
        password: password
      })
      var deferred = $q.defer();
      var promise = deferred.promise;
      var url = constants.login.getToken();
      
      var params = {username: username, password: password}
      $http.post(url, params).then(function(response){
        if (response.data.token)
          deferred.resolve(response.data);
        else
          deferred.reject(response.data);
      }, 
      function(error){
        deferred.reject(error);
      })
      
      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      }
      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      }
     return promise;
    }
  
}
})()