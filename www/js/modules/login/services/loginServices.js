/**
  *AuthService servicio que consulta el servicio rest de la plataforma
  *@author nombre autor (nickname at Dakonon)
  *@email nombre@dominio.com
  *@copyright <a href='http://www.gnu.org/licenses/gpl-2.0.html'>GNU Public License versión 2 (GPLv2)</a>
  *@date dd/mm/aaaa
  *@version 1.0.0
*/
'use strict';

function AuthService($http, $q, ApiLogin) {

	var self = this;
	self.onLogin = onLogin;
    
    /**
        *onLogin funcion que consulta el servicio web para el login
        *@param username credencial del usuario 
        *@param password credencial para acceder por parte del usuario
        *@return promise respuesta diferida para el controlador
    */
    function onLogin(username, password){
        console.log("prueba"); // ELIMINAR LOS CONSOLE.LOG Y LAS PRUEBAS ANTES DE QUE SEAN SUBIDAS AL REPO
      var parametros = JSON.stringify({
        username: username,
        password: password
      });
      var deferred = $q.defer();
      var promise = deferred.promise;
      var url = ApiLogin.getToken();
      
      var params = {username: username, password: password};
      $http.post(url, params).then(function(response){
        if (response.data.token)
          deferred.resolve(response.data);
        else
          deferred.reject(response.data);
      }, 
      function(error){
        deferred.reject(error);
      });
      
      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      };
      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      };
     return promise;
    }
  
}

module.exports = ['$http', '$q', 'ApiLogin', AuthService];