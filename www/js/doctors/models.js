/*******************************************
 *   Created by: @pdonaire1                *
 *   Ing. Pablo Alejandro Gonzalez Donaire *
 *******************************************/
(function () {
    'use strict';
angular.module('medicalbox.Models')

.service('Doctors', function() {
    function Doctors() {
    	this.phone_number = null;
    	this.name = null;
    	this.email = null;
    	this.first_name = null;
    	this.last_name = null;
    }

    Doctors.prototype.getAll = function() {
    	// REST
        return "Result";
    };

    Doctors.prototype.findOne = function() {
    	// REST
    	// this.phone_number = null;
    	// this.name = null;
    	// this.email = null;
    	// this.first_name = null;
    	// this.last_name = null;
    };

    Doctors.prototype.findBy = function() {
    	// REST
    	// this.phone_number = obj;
    	// this.name = null;
    	// this.email = null;
    	// this.first_name = null;
    	// this.last_name = null;
    };

    Doctors.prototype.getSort = function(obj) {
    	// REST
        return "return ordered objects";
    };


})
