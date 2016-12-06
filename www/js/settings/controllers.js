(function () {
       'use strict'
	angular.module('medicalbox.Controllers').controller('settingsController', settingsController);
	function settingsController($scope,$ionicPopup,$ionicActionSheet,$state)
	{

		$scope.show = function() {

           // Show the action sheet
           var hideSheet = $ionicActionSheet.show({
             buttons: [
               { text: '<h3 class="otherColor">Perfil</h3>'},
               { text: '<h3 class="otherColor">Compartir App</h3>' },
               { text: '<h3 class="otherColor">Contacta</h3>' },
               { text: '<h3 class="closeColor">Cerrar sesión</h3>' }
             ],           
             buttonClicked: function(index) {
                if(index === 0) {
                    $state.go('tab.profile'); 
                }
                if(index === 1) {
                    $state.go('tab.profile'); 
                }
                if(index === 2) {
                    $state.go('tab.contact'); 
                }
                if(index === 3) {
                    var myPopup = $ionicPopup.show({
                      template: '¿Seguro que desea desloguearse?',                                    
                      scope: $scope,
                      buttons: [
                        { text: 'No',
                          type: 'button-positive' },
                        {
                          text: 'Si',
                          type: 'button-positive',
                          onTap: function(e) {
                            //localStorageService.set('logueado', false);
                            //localStorageService.set('access_token', false);
                            $state.go('index'); 
                          }
                        }
                      ]
                    });
                }
             }
           });


         };
	}

})()
