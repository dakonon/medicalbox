(function () {
    'use strict';
angular.module('medicalbox.Services')

.service('AuthService', AuthService);

AuthService.$inject = ['$http', '$q', 'constants']

function AuthService($http, $q,constants) {
	var self = this;
	self.token = onToken
  

  //var url= constants.login.getToken();
  
    function onToken(){
    	var data = {"token": "123"};
      if (data.token)
        return data.token;
      return false;
    }
  
}
})()