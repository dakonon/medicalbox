(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope','$q','AuthService', '$state','$ionicLoading','$ionicPopup']

    function LoginCtrl($scope, $q, AuthService, $state,$ionicLoading,$ionicPopup) {
      console.log("prueba");
    	$scope.login = onLogin;

    	function onLogin(){
      
        AuthService.Login($scope.login.username, $scope.login.password)

        .success(function(data) {
          if(data.token)
          {
            // localStorageService.set('access_token', data.token);
            $state.go('index');
          }
          else{
            var alertPopup = $ionicPopup.alert({
              title: 'Error al entrar!',
              template: 'Por favor verifica tus credenciales!'
            });
          }
          }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
              title: 'Error al entrar!',
              template: 'Error en el servidor, intente mas tarde!'
            });
          });
      }
	}
})()
