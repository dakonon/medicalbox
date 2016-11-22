'use strict';
var URL_BASE='http://localhost:8000/api/';
var URL_SRC = 'js/data/';

require('./modules/doctors/doctors');
require('./modules/login/login');
require('./modules/register/register');

  
module.exports = angular.module('medicalbox', ['ionic', 'doctors', 
                                'login', 'register', 'pascalprecht.translate',
                                'LocalStorageModule'])
  .config(require('./router'))
  .run(require('./app-main.js'))
  

  //Constantes Servicios web 
  .constant('ApiLogin', {
    url: URL_BASE + 'api-token-auth/'
  });