/*******************************************
    *   Created by: @pdonaire1                *
    *   Ing. Pablo Alejandro Gonzalez Donaire *
    *******************************************/
(function () {
    'use strict';
angular.module('medicalbox.Services')

.service('clinicService', clinicService);

clinicService.$inject = ['$http', '$q', 'constants']

function clinicService($http, $q,constants) {

	var self = this;
	self.onCreateClinic = onCreateClinic;
  self.onFindClinic = onFindClinic;
  
    function onCreateClinic(name,country_id,city_id,address,phone,access_token){
  
      var deferred = $q.defer();
      var promise = deferred.promise;
      var url = constants.create.clinic();
      
      var params = {name: name,
                    country_id: country_id,
                    city_id: city_id,
                    address: address,
                    phone: phone
                  }
      $http.post(url, params, {headers: {"Authorization": access_token}}).then(function(response){
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

    function onFindClinic(id){
  
      var deferred = $q.defer();
      var promise = deferred.promise;
      var url = constants.clinic.find(id);
      
      $http.get(url).then(function(response){
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