(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope','$q','AuthService', '$state']

    function LoginCtrl($scope, $q, AuthService, $state) {
    	$scope.login = onLogin;

    	function onLogin(){
        $ionicLoading.show({});
        AuthService.onLogin($scope.login.username, $scope.login.password)
        .success(function(data) {
          if(data.token)
          {
            $ionicLoading.hide();
            // localStorageService.set('access_token', data.token);
            alert(data.token);
            $state.go('index');
          }
          else{
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Error al entrar!',
              template: 'Por favor verifica tus credenciales!'
            });
          }
          }).error(function(data) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Error al entrar!',
              template: 'Error en el servidor, intente mas tarde!'
            });
          });
      }
	}
})()
