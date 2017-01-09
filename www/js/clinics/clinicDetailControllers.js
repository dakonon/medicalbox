(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('ClinicDetailCrtl', ClinicDetailCrtl);    

    function ClinicDetailCrtl($scope, $stateParams, myClinicServices, $ionicLoading, localStorageService) {    	
        var access_token = localStorageService.get('access_token');          
        var id = $stateParams.id;
        myClinicServices.onFindMyClinicDetail(access_token,id).success(function(data){                                    
            
            $scope.data = data.data;
            console.log($scope.data)
        }).error(function(data) {
          $ionicLoading.hide();
        });
     	

	}
})()
