angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, AuthService) {
  $scope.login = function () {
    console.log("data: ", AuthService.token());
  };
});

