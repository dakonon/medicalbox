(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('findClinicCrtl', findClinicCrtl);    

    function findClinicCrtl($scope, clinicService, $state, $ionicLoading, localStorageService) {
    	var access_token = localStorageService.get('access_token');
    	
		$scope.data = {};		

			clinicService.onFindClinic()
			.success(function(data) {		
				console.log(data)

			}).error(function(data) {
			console.log(data);
			$ionicPopup.alert({
			  title: 'Error al registrarse!',
			  template: data
			});
			})			
		
      
      
	}
})()
