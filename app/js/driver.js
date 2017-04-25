'use strict';

app.controller("driverCtrl", function($scope, $rootScope, $location, $http, userService) {
    $scope.onLoad = function() {
        $scope.user = userService.getUser();
        $scope.active = "driver";
        $scope.available = true;
        // check if user is an object
        if ($scope.user == null) {
            document.location.href = "#/"; // go to landing
        }
        console.log($scope.user);
        // check if google maps is loaded (should be)
        /*if (window.google == undefined) {
            document.location.href = "#/"; // go to landing
        }*/
        $scope.setRequests();
    };

    $scope.$on('$routeChangeSuccess', function () {
        $scope.onLoad();
    });

    $scope.setRequests = function() {
        $.get(window.root + "app/server/get_requests.php",
            function(data) {
                $scope.requests = JSON.parse(data);
                $scope.checkBusy();
                $rootScope.$apply();
                console.log($scope.requests);
            });
        
    };

    $scope.acceptRide = function(reqNum, userNum) {
        console.log('Request accepted for request #: ' + reqNum[0]);
        console.log($scope.currentRequest);
        $.post(window.root + "app/server/acceptRide.php",
            {request: reqNum[0], user: reqNum[1], driver: userNum.user_id},
            function(data) {
                console.log(data);
            }
        );
        $scope.setRequests();
    };

    $scope.cancelRide = function(reqNum, userNum) {
        console.log('Request cancelled for request #: ' + reqNum[0]);
        console.log($scope.currentRequest);
        $.post(window.root + "app/server/cancelRide.php",
            {request: reqNum[0], user: reqNum[1], driver: userNum.user_id},
            function(data) {
                console.log(data);
            }
        );
        $scope.setRequests();
    };

    $scope.checkRequest = function(reqNum) {
        if($scope.user.user_id == reqNum[2] && 'in_progress' == reqNum[6]){
            return true;
        } else {
            return false;
        }
    }

    $scope.checkBusy = function() {
        for(var i=0; i<$scope.requests.length; i++){
            var req = $scope.requests[i];
            console.log(req);
            console.log($scope.user.user_id)
            if($scope.user.user_id == req[2] && 'in_progress' == req[6]){
                $scope.available = false;
            }
        }
    };
    
    $scope.logout = function() {
        userService.setUser(null);
        $location.path("/");
    };

    /*
    $scope.initMap = function() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;

        var map = new google.maps.Map($('#map').get(), {
            zoom: 10,
            center: {lat: 37.3351420, lng: -121.8811}
        });
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel($('#right-panel').get(0));

        var control = $('#floating-panel').get(0);
        control.style.display = 'block';
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

        var infoWindow = new google.maps.InfoWindow({map: map});

        var pos;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                map.setCenter(pos);
                map.setZoom(20);

            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            handleLocationError(false, infoWindow, map.getCenter());
        }

        var onChangeHandler = function() {
            displayRoute(directionsService, directionsDisplay, pos);
        };
        $('#click').get(0).addEventListener('click', onChangeHandler);
        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
    }

    $scope.displayRoute = function(directionsService, directionsDisplay, pos) {
        directionsService.route({
            origin: pos,
            destination: {lat: 37.364018, lng: -121.929016},
            travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Direction request failed due to ' + status);
            }
        });
    }
    */
});
