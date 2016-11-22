/*******************************************
 *   Created by: @lhernandez               *
 *   Ing. Leonel Paolo Hernanadez M.       *
 *******************************************/
'use strict';

module.exports = angular.module('login', [])

    // Servicios para el modulo de logeo
    .service('AuthService', require('./services/loginServices'))

    .controller('dashboadCtrl', require('./controllers/dashboadController.js'))
    .controller('LoginCtrl', require('./controllers/controllers'));