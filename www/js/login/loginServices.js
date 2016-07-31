(function () {
    'use strict';
angular.module('medicalbox.Services')

.service('AuthService', AuthService);

AuthService.$inject = ['$http', '$q', 'constants']

function AuthService($http, $q,constants) {
	var self = this;
	self.Login = onLogin;
  //var url= constants.login.getToken();
  
    function onLogin(username, password){
      var deferred = $q.defer();
      var promise = deferred.promise;
      var url = constants.login.getToken();
      $http.get(url+token)
        .success(function(data) {
          if(data) {
            deferred.resolve(data);
          }
          else {
            deferred.reject(data);
          }
        }).error(function(data) {
          deferred.reject(data);
        });
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