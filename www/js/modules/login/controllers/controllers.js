/**
  *LoginCtrl Controlador para el logeo en la plataforma
  *@author nombre autor (nickname at Dakonon)
  *@email nombre@dominio.com
  *@copyright <a href='http://www.gnu.org/licenses/gpl-2.0.html'>GNU Public License versión 2 (GPLv2)</a>
  *@date dd/mm/aaaa
  *@version 1.0.0
*/
'use strict';

function LoginCtrl($scope, $q, AuthService,
                   $state, $ionicLoading, localStorageService) {
  	$scope.onLogin = onLogin;
    $scope.invalidUser = false;
    $scope.invalidForm = false;
    $scope.login = {
      username:"",
      password: ""
    };

    // Funcion anonima limpia las validaciones 
    $scope.cleanErrors = function (){
      console.log("cleanErrors"); // ELIMINAR LOS CONSOLE.LOG Y LAS PRUEBAS ANTES DE QUE SEAN SUBIDAS AL REPO
      $scope.invalidUser = false;
      $scope.invalidForm = false;
    };
  	
    // Funcion anonima que ejecuta el login para el usuario 
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
          console.log(data); // ELIMINAR LOS CONSOLE.LOG Y LAS PRUEBAS ANTES DE QUE SEAN SUBIDAS AL REPO
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

module.exports = ['$scope', '$q', 'AuthService', 
                  '$state', '$ionicLoading', 'localStorageService',
                  LoginCtrl];