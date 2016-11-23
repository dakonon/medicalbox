'use strict';
var URL_BASE='http://192.168.12.121:8002/api/';
var URL_SRC = 'js/data/';

require('../modules/doctors/doctors');
require('../modules/login/login');
require('../modules/register/register');

  
module.exports = angular.module('medicalbox', ['ionic', 'doctors', 
                                'login', 'register', 'pascalprecht.translate',
                                'LocalStorageModule'])
  .config(require('./router'))
  .run(require('./app-main'))
  
  //Constantes Servicios web 
  .constant('ApiLogin', {
    url: URL_BASE + 'api-token-auth/'
  });