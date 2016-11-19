(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('dashboadCtrl', dashboadCtrl);

    // dashboadCtrl.$inject = ['$scope','$q', '$state', '$ionicLoading', 'localStorageService']

    function dashboadCtrl($scope, $q, AuthService, $state, $ionicLoading, localStorageService) {
    	$scope.userData = localStorageService.get('user_data');

      
      
	}
})()
