angular.module('medicalbox.services', [])

.service('AuthService', AuthService);

AuthService.$inject = ['$http', '$q', 'constants'];

function AuthService($http, $q) {

  var data = {"token": "123"};

  return {
    token: function() {
      if (data.token)
        return data.token;
      return false;
    }
  };
};
