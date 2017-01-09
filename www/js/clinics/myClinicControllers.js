(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('myClinicCrtl', myClinicCrtl);    

    function myClinicCrtl($scope, myClinicServices, $ionicLoading, $ionicPopup, localStorageService) {
    	var access_token = localStorageService.get('access_token');   
        console.log(access_token) 	    	
        $scope.data = [];		
		var page = 0;
        var per_page = 5;
        var cont = 0
        $scope.canShowMore = true;                

        myClinicServices.onFindAllMyClinic(access_token,per_page,page).success(function(data){                                    
            cont = Math.ceil(data.data.count/2)+1;  
            data = data.data;
            $scope.data = [].concat($scope.data , data.results)                                    
            $ionicLoading.hide();
            if(page > cont){                    
                $scope.canShowMore = false;
            }
            page+=per_page;                
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }).error(function(data) {
          $ionicLoading.hide();
        });

		$scope.loadMore = function(){  
            $ionicLoading.show({});      

            myClinicServices.onFindAllMyClinic(access_token,per_page,page).success(function(data){                                    
                cont = Math.ceil(data.data.count/2)+1;  
                data = data.data;
                $scope.data = [].concat($scope.data , data.results)                                    
                $ionicLoading.hide();
                if(page > cont){                    
                    $scope.canShowMore = false;
                }
                page+=per_page;                
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }).error(function(data) {
              $ionicLoading.hide();
            });
        };

		$scope.doRefresh = function() {     
            page = 0;
            $scope.data = [];
            $scope.canShowMore = true;
            $scope.loadMore();
             // Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');              
        };		
	
	}
})()
