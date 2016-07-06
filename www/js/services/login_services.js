(function () {
    'use strict';
angular.module('medicalbox.services', [])

.service('AuthService', AuthService);

AuthService.$inject = ['$http', '$q', 'constants']

function AuthService($http, $q,constants) {

  var data = {"token": "123"};

  url= constants.login.getToken();
  return {
    token: function() {
      if (data.token)
        return data.token;
      return false;
    }
  }
}
})()