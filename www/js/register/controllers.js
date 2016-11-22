(function () {
       'use strict'
	angular.module('medicalbox.Controllers').controller('RegisterCtrl', RegisterCtrl);
	function RegisterCtrl($scope,$ionicPopup,RegisterService)
	{
		$scope.data = {};

		$scope.send = function(){
			RegisterService.onRegister($scope.data.email,$scope.data.password,$scope.data.first_name,
			$scope.data.last_name,$scope.data.phone_number,$scope.data.address,$scope.data.user_type,$scope.data.profession)
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
