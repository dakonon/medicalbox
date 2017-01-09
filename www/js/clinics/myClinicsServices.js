/*******************************************
    *   Created by: @pdonaire1                *
    *   Ing. Pablo Alejandro Gonzalez Donaire *
    *******************************************/
(function () {
    'use strict';
angular.module('medicalbox.Services')

.service('myClinicServices', myClinicServices);

myClinicServices.$inject = ['$http', '$q', 'constants']

function myClinicServices($http, $q,constants) {  
  
  this.onFindAllMyClinic = onFindAllMyClinic;
  this.onFindMyClinicDetail = onFindMyClinicDetail;
    
  function onFindAllMyClinic(token,limit,offset){
    var deferred = $q.defer();
    var promise = deferred.promise;
    var url = constants.clinic.allMyClinic(limit,offset);
    var req = {
      method: 'GET',
      url: url,
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': 'Token {0}'.replace('{0}', token)
      }
    }    
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

  function onFindMyClinicDetail(token,id){
    var deferred = $q.defer();
    var promise = deferred.promise;
    var url = constants.clinic.myClinicDetail(id);
    var req = {
      method: 'GET',
      url: url,
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': 'Token {0}'.replace('{0}', token)
      }
    }    
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

}
})()