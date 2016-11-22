'use strict';
/**
  *ClinicCreateCrtl Controlador para crear centros de salud
  *@author nombre autor (nickname at Dakonon)
  *@email nombre@dominio.com
  *@copyright <a href='http://www.gnu.org/licenses/gpl-2.0.html'>GNU Public License versión 2 (GPLv2)</a>
  *@date dd/mm/aaaa
  *@version 1.0.0
*/
function ClinicCreateCrtl($scope, $q, AuthService, 
                          $state, $ionicLoading, localStorageService) {
    	$scope.userData = localStorageService.get('user_data');
	}

module.exports = ['$scope', '$q', 'AuthService', 
                  '$state', '$ionicLoading', 'localStorageService',
                   ClinicCreateCrtl];