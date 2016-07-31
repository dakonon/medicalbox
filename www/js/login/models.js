(function () {
    'use strict'
angular.module('medicalbox.Models').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['AuthService', '$ionicLoading', '$ionicPopup', '$state', 'localStorageService']

    function LoginCtrl(AuthService, $ionicPopup, $state, localStorageService) {
    	$scope.login = onLogin;

    	function onLogin(){
        $ionicLoading.show({});
        AuthService.onLogin($scope.login.username, $scope.login.password)
        .success(function(data) {
          if(data.token)
          {
            $ionicLoading.hide();
            localStorageService.set('access_token', data.token);
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
