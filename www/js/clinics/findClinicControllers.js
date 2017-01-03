(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('findClinicCrtl', findClinicCrtl);    

    function findClinicCrtl($scope, clinicService, $state, $ionicLoading, localStorageService) {
    	var access_token = localStorageService.get('access_token');    	    	
		$scope.data = [];		
		var page = 1;
        var per_page = 2;
        var cont = 0
        $scope.canShowMore = true;
		
		clinicService.onFindClinic().success(function(data){		
			cont = Math.ceil(data.count/per_page)+1; 								
		}).error(function(data) {			

			$ionicLoading.hide();
			$ionicPopup.alert({
			  title: 'Error al consoltar!',
			  template: data
			});
		})

		$scope.loadMore = function(){
            clinicService.onFindClinic(per_page,page).success(function(data){                    
                
              data = data.data;
                $ionicLoading.hide();
                if(page === cont){
                    $scope.canShowMore = false;
                }
                else{
                    $scope.data = [].concat($scope.data , data)
                    console.log($scope.data)
                    page++;
                }
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }).error(function(data) {
              $ionicLoading.hide();
            });
        };

		$scope.doRefresh = function() {
            page = 1;
            $scope.data = [];
            $scope.canShowMore = true;
            $scope.loadMore();
             // Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');              
        };		

	}
})()
