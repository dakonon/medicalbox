/*******************************************
    *   Created by: @pdonaire1                *
    *   Ing. Pablo Alejandro Gonzalez Donaire *
    *******************************************/
(function () {
    'use strict';
angular.module('medicalbox.Services')

.service('ClinicServices', ClinicServices);

ClinicServices.$inject = ['$http', '$q', 'constants', 'localStorageService']

function ClinicServices($http, $q,constants, localStorageService) {
  var userData = localStorageService.get('user_data');
  this.onCreate = onCreate;
  
  function onCreate(params){
    var deferred = $q.defer();
    var promise = deferred.promise;
    var url = constants.clinicUrl.getGeneral();
    var req = {
      method: 'POST',
      url: url,
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': 'Token {0}'.replace('{0}', userData.token)
      },
      data: params
    }
    console.log(req);
    $http(req)
      .then((response) => {
        deferred.resolve(response);
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
  }  // End onCreate

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