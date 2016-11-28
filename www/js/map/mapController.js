
(function () {
    'use strict'
angular.module('medicalbox.Controllers').controller('mapaCtrl', mapaCtrl);

    mapaCtrl.$inject = ['$scope','$ionicLoading','$cordovaGeolocation','$ionicPopup']
        
    function mapaCtrl($scope,$ionicLoading,$cordovaGeolocation,$ionicPopup) {
      $scope.map = {};
      $scope.datos = {};
       var zocalo = {
            lat: parseFloat(19.4318818),
            lng: parseFloat(-99.13343450000002)
        }
      var miUbicacion = {};


       var addMarker = function(ubicacion){
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: ubicacion,
                
            })
      }
      

      var initMap = function(){
        var mapDiv = document.getElementById('map');

        var mapOptions={
          center: zocalo,
          zoom: 14
        }

        $scope.map = new google.maps.Map(mapDiv, mapOptions)
        $scope.locateme();
        searchPlace();
        
      } 

       var searchPlace = function (){
            var search = document.getElementById('search');
            var searchBox = new google.maps.places.SearchBox(search);
            $scope.map.controls[google.maps.ControlPosition.TOP_LEFT].push(search);

            searchBox.addListener('places_changed', function(){
                var places = searchBox.getPlaces();

                places.forEach(function(place){
                    var ubicacion  = place.geometry.location;
                    addMarker(ubicacion);
                    $scope.map.setCenter(ubicacion);
                })
            })

        }

            // extract country short name (e.g. GB for Great Britain) from google geocode API result
      
      $scope.locateme = function(){
          $ionicLoading.show({});
           var positionOptions = {timeout: 10000, enableHighAccuracy: true};
          $cordovaGeolocation.getCurrentPosition(positionOptions).then(function (pos) {

            miUbicacion.lat = pos.coords.latitude;
            miUbicacion.lng = pos.coords.longitude;

            $scope.map.setCenter(miUbicacion);
            //var key = "AIzaSyB9jBmY8pNwixFojEoiXDHG__nWGVI6AVw";

            addMarker(miUbicacion);   
            $ionicLoading.hide();         
        }), function(error) {
            $ionicLoading.hide();
            $ionicPopup.alert({
                title: 'Error de localización',
                template: error.message,
                okType: 'button-assertive'
            });
        }


      }    
      if(document.readyState === "complete"){  
        initMap()
      } else {
         google.maps.event.addDomListener(window, 'load', initMap())
      }
    }
})()

