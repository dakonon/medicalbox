(function () {
    'use strict';
angular.module('medicalbox.Services')

.service('RegisterService', RegisterService);

RegisterService.$inject = ['$http', '$q','constants']

function RegisterService($http,$q,constants) {

    this.onRegister = onRegister;
  
    function onRegister(email, password, first_name, last_name, phone_number, address, user_type){
      var deferred = $q.defer();
      var promise = deferred.promise;
      
      var params = {"email":email,"password":password,"first_name":first_name,
		"last_name":last_name,"phone_number":phone_number,"address":address};
      if(user_type=='Patient')
      {
      	      var url = constants.register.patients();
	      $http.post(url, params).then(function(response){
		if (response.data)
		  deferred.resolve(response.data);
		else
		  deferred.reject(response.data);
	      }, 
	      function(error){
		deferred.reject(error);
	      })
     }
     else if (user_type=="Doctor")
     {
      	      var url = constants.register.doctors();
	      $http.post(url, params).then(function(response){
		if (response.data)
		  deferred.resolve(response.data);
		else
		  deferred.reject(response.data);
	      }, 
	      function(error){
		deferred.reject(error);
	      })
     }
      
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
