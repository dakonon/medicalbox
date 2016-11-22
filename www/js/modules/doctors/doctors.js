/*******************************************
 *   Created by: @lhernandez               *
 *   Ing. Leonel Paolo Hernanadez M.       *
 *******************************************/
'use strict';

module.exports = angular.module('doctors', [])

    // Servicios para el modulo de medicos
    .service('Doctors', require('./models/models'))

    // Controller para crear la clinica
    .controller('ClinicCreateCrtl', require('./controllers/clinicCreateControllers'));
