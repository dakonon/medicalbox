
'use strict';

function dashboadCtrl($scope, $q, AuthService, 
                      $state, $ionicLoading, localStorageService) {
	$scope.userData = localStorageService.get('user_data');      
}

module.exports = ['$scope', '$q', 'AuthService', 
                  '$state', '$ionicLoading', 'localStorageService',
                  dashboadCtrl];
