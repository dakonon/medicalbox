/*******************************************
  *   Created by: @pdonaire1                *
  *   Ing. Pablo Alejandro Gonzalez Donaire *
  *   Created at: 2016-12-15                *
  *   Updated at:                           *
  *******************************************/
(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('ClinicCreateCrtl', ClinicCreateCrtl);

  // ClinicCreateCrtl.$inject = ['$scope','$q', '$state', '$ionicLoading', 'localStorageService', 'ClinicServices']

  function ClinicCreateCrtl($scope, $q, $state, $ionicLoading, localStorageService, ClinicServices, $stateParams, $ionicPopup, $filter) {
    if ($stateParams.id)
      $scope.createForm = {
        id: data.id,
        created_by: JSON.parse(data.created_by),
        name: data.name,
        zip_code: data.zip_code,
        address: data.address,
        latitude: data.latitude,
        longitude: data.longitude,
        phone_one: data.phone_one,
        phone_two: data.phone_two,
        country: JSON.parse(data.country),
        city: JSON.parse(data.city),
        doctors: JSON.parse(data.doctors)
      }
    else
      $scope.createForm = {
        id: "",
        name: "",
        country_id: "",
        city_id: "",
        address: "",
        zip_code: "",
        latitude: "",
        longitude: "",
        phone_one: "",
        phone_two: "",
        country: "",
        city: "",
        doctors: ""
      }

    $scope.userData = localStorageService.get('user_data');
    $scope.error = "";
    $scope.onCreate = onCreate;

    function showSuccessAlert() {
      var title = $filter('translate')('LAYOUTS.GREAT');
      var template = $filter('translate')('CLINIC.SUCCESSFULLY_CREATED');
      var accept = $filter('translate')('LAYOUTS.ACCEPT');
      var alertPopup = $ionicPopup.alert({
        scope: $scope,
        title: title,
        template: template,
        buttons: [{
          text: accept,
          type: 'button-balanced',
        }]
      });
      alertPopup.then(function(res) {
        // console.log('Thank you for not eating my delicious ice cream cone');
      });
    };

    function showErrorAlert(){
      var title = $filter('translate')('LAYOUTS.ERROR');
      var accept = $filter('translate')('LAYOUTS.ACCEPT');
      var alertPopup = $ionicPopup.alert({
        title: title, 
        template: $scope.error,
        buttons: [{
          text: accept,
          type: 'button-energized',
        }]
      });
      alertPopup.then(function(res) {
        // console.log('Thank you for not eating my delicious ice cream cone');
      });
    }

    function onCreate(){
      $ionicLoading.show({});
      ClinicServices.onCreate($scope.createForm)
        .success(function(data) {
          $ionicLoading.hide();
          showSuccessAlert();
          if (data.status == 201){
            var clinic = data.data;
            var params = {
              id: clinic.id,
              created_by: JSON.stringify(clinic.created_by),
              name: clinic.name,
              zip_code: clinic.zip_code,
              address: clinic.address,
              latitude: clinic.latitude,
              longitude: clinic.longitude,
              phone_one: clinic.phone_one,
              phone_two: clinic.phone_two,
              country: JSON.stringify(clinic.country),
              city: JSON.stringify(clinic.city),
              doctors: JSON.stringify(clinic.doctors)
            }
            $state.go('tabDoctor.doctor-clinics-edit', params);
          }
          else {
            $scope.error = data.data;
            showErrorAlert();
          }
        }).error((error) => {
          $ionicLoading.hide();
          $scope.error = error.data.error;
          showErrorAlert();
          console.log("Error", error);
        })
    }
  

  }
})()
