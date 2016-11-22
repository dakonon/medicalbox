(function () {
       'use strict'
	angular.module('medicalbox.Controllers').controller('RegisterCtrl', RegisterCtrl);
	function RegisterCtrl($scope,$ionicPopup,RegisterService)
	{
		$scope.data = {};

		$scope.send = function(){
			console.log($scope.data.user_type);
			var parameter = {"email":$scope.data.email,"password":$scope.data.password,"first_name":$scope.data.first_name,
			"last_name":$scope.data.last_name,"phone_number":$scope.data.phone_number,"address":$scope.data.address};
			RegisterService.onRegister($scope.data.email,$scope.data.password,$scope.data.first_name,
			$scope.data.last_name,$scope.data.phone_number,$scope.data.address,$scope.data.user_type)
			.success(function(data) {
			console.log(data);
			$ionicPopup.alert({
			  title: 'Exito al registrarse!',
			  template: 'Se registró con éxito'
			});
			}).error(function(data) {
			console.log(data);
			$ionicPopup.alert({
			  title: 'Error al registrarse!',
			  template: data
			});
			})			
		}
	}

})()
