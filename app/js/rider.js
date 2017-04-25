'use strict';

app.controller("riderCtrl", function($scope, $location, userService) {
    $scope.init = function() {
        $scope.map = undefined;
        $scope.canSubmit = false;
        $scope.active = "rider";

        $scope.user = userService.getUser();

        // check if user is an object
        if ($scope.user == null) {
            // if no user then go to landing page
           document.location.href="#/";
        }
        console.log($scope.user);
        
        $scope.updateRideStatus();
        setInterval($scope.updateRideStatus, 1000 * 5);    // update ride status every 10s
    };

    $scope.setDestination = function() {
        var address = $scope.address;
    };

    $scope.$on('$routeChangeSuccess', function () {
        $scope.init();
    });

    $scope.initMap = function(map) {
        $scope.map = map;
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        let handleLocationError = function(browserHasGeolocation,
                infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
        };

        console.log("navigator.geolocation", navigator.geolocation);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
        }
    };

    $scope.getETA = function() {
        let map = $scope.map;
        let origin1, destinationA;
        var check = 0;

        if ($scope.location){
            check =1;
            origin1 = $scope.location;
        } else {
            check = 0;
            origin1 = map.getCenter();
        }

        if ($scope.destination){
            destinationA = $scope.destination;
            $scope.canSubmit = true;
        } else {
            $scope.canSubmit = false;
            destinationA = '1 Washington Square San Jose';
        }

        let geocoder = new google.maps.Geocoder();
        
        if (check ==1){
            geocoder.geocode({'address': origin1}, function(results, status) {
                if (status == 'OK') {
                    origin1 = results[0].geometry.location;
                } else {
                    console.log('Geocode was not successful for the following reason: ' + status);
                    return;
                }
            });
        }
    

        geocoder.geocode({'address': destinationA}, function(results, status) {
            if (status == 'OK') {
                destinationA = results[0].geometry.location;
                geocodingCallback();
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
                return;
            }
        });

    
        console.log("origin1: ", origin1);
        console.log("destinationA: ", destinationA);
        //$scope.canSubmit = true;

        function geocodingCallback() {
            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
                 origins: [origin1],
                 destinations: [destinationA],
                 travelMode: 'DRIVING',
                 unitSystem: google.maps.UnitSystem.IMPERIAL,
            }, distanceMatrixCallback);

            var directionsDisplay;
            var directionsService = new google.maps.DirectionsService();
            var request = {
                origin: origin1,
                destination: destinationA,
                travelMode: 'DRIVING'
            };

            directionsDisplay = new google.maps.DirectionsRenderer();
            var mapOptions = {
                zoom: 7,
                center: origin1
            };
            map = new google.maps.Map($('#map').get(0), mapOptions);
            directionsDisplay.setMap(map);
            var trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);

            directionsService.route(request, function(result, status) {
                if (status == 'OK') {
                    directionsDisplay.setDirections(result);
                }
            });
        }

        function distanceMatrixCallback(response, status) {
            if (status == 'OK') {
                var origins = response.originAddresses;
                var destinations = response.destinationAddresses;

                for (var i = 0; i < origins.length; i++) {
                    var results = response.rows[i].elements;
                    for (var j = 0; j < results.length; j++) {
                        var element = results[j];
                        $scope.distance = element.distance.text;
                        $scope.duration = element.duration.text;
                        var cost = element.distance.value * 0.002;
                        cost = parseFloat(Math.round(cost * 100) / 100).toFixed(2);
                        $scope.cost = cost;
                        var from = origins[i];
                        var to = destinations[j];
                    }
                }
            }
        }
    };

    $scope.requestRide = function() {
        let geocoder = new google.maps.Geocoder();
        var check = 0;
        if($scope.location){
                var location = $scope.location;
            check = 1;
        } else {
            location = $scope.map.getCenter();
            check = 0;
        }

        if (!$scope.canSubmit) { alert("Invalid location"); return; }

        console.log(location);
        if(check ==1){
            geocoder.geocode({'address': location}, function(results, status) {
                if (status == 'OK') {
                    location = results[0].geometry.location;
                    console.log(location);
                     
                } else {
                    console.log('Geocode was not successful for the following reason: ' + status);
                    return;
                }
            });
        }
        $.post(window.root + "app/server/request.php",
            {email: $scope.user.email, lat: location.lat, lng: location.lng},
            function(data) {
                console.log(data);
            }
        );
    };

    $scope.logout = function() {
        userService.setUser(null);
        $location.path("/");
    };
    
    $scope.updateRideStatus = function() {
        $.get(window.root + "app/server/get_requests.php?user_id=" + $scope.user.user_id,
              function(data) {
                  console.log(data);
                  try {
                      var rideData = JSON.parse(data)[0]; 
                      $scope.rideStatus = rideData["status"];
                  } catch (e) {
                      console.log("EXCEPTION: ", e);
                      $scope.rideStatus = "none";
                  }
                  console.log("RIDE REQUEST STATUS: ", $scope.rideStatus);
                  $scope.$apply();
              }
        );
    };
});
