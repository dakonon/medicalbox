angular.module('starter.services', [])

.factory('AuthService', function() {
  var data = {"token": "123"};

  return {
    token: function() {
      if (data.token)
        return data.token;
      return false;
    }
  };
});
