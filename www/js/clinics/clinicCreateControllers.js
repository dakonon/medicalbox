(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('ClinicCreateCrtl', ClinicCreateCrtl);
  
    function ClinicCreateCrtl($scope, clinicService, $state, $ionicLoading, localStorageService,$ionicPopup) {
    	var access_token = localStorageService.get('access_token');
    	$scope.userData = localStorageService.get('user_data');
    	$scope.onCreate = onCreate;
		$scope.data = {};

		function onCreate(){

			clinicService.onCreateClinic($scope.data.name,$scope.data.country_id,$scope.data.city_id,$scope.data.address,access_token)
			.success(function(data) {		
			$ionicPopup.alert({
			  title: 'Ok!',
			  template: 'Clinica creada con exito'
			});
			}).error(function(data) {			
			$ionicPopup.alert({
			  title: 'Error al registrarse!',
			  template: data
			});
			})			
		}
      
      
	}
})()
