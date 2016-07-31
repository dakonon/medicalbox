(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$q','AuthService']

    function LoginCtrl($q,AuthService) {
    	 var vm = this;

    	 vm.login = onLogin;

		  function onLogin(){
		    console.log("data: ", AuthService.token());
		  }
	}
})()
