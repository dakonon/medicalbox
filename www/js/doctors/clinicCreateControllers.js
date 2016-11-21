(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('ClinicCreateCrtl', ClinicCreateCrtl);

    // dashboadCtrl.$inject = ['$scope','$q', '$state', '$ionicLoading', 'localStorageService']

    function ClinicCreateCrtl($scope, $q, AuthService, $state, $ionicLoading, localStorageService) {
    	$scope.userData = localStorageService.get('user_data');
    	
      
      
	}
})()
