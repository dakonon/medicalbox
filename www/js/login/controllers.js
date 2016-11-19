/*******************************************
  *   Created by: @pdonaire1                *
  *   Ing. Pablo Alejandro Gonzalez Donaire *
  *******************************************/
(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('LoginCtrl', LoginCtrl);

    // LoginCtrl.$inject = ['$scope','$q','AuthService', '$state', '$ionicLoading', 'localStorageService']

    function LoginCtrl($scope, $q, AuthService, $state, $ionicLoading, localStorageService) {
    	$scope.onLogin = onLogin;
      $scope.invalidUser = false;
      $scope.invalidForm = false;
      $scope.login = {
        username:"",
        password: ""
      }
      $scope.cleanErrors = function (){
        console.log("cleanErrors");
        $scope.invalidUser = false;
        $scope.invalidForm = false;
      }
    	
      function onLogin(){
        
        if (!$scope.login.username || !$scope.login.password){
          $scope.invalidForm = true; 
          return false;
        }
        $ionicLoading.show({});
        AuthService.onLogin($scope.login.username, $scope.login.password)
        .success(function(data) {
          $ionicLoading.hide();
          if(data.token)
          {
            console.log(data);
            localStorageService.set('access_token', data.token);
            localStorageService.set('user_data', data);
            $state.go('dashboad');
          }
          else{
            $ionicLoading.hide();
            $scope.invalidUser = true;
          }
          }).error(function(data) {
            $ionicLoading.hide();
            $scope.invalidUser = true;
          });
      }
	}
})()
