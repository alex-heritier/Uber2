
app.controller("riderCtrl", function($scope, $http, userService) {
    $scope.onLoad = function() {
        var user = userService.getUser();

        // check if user is an object
        if (user == null) {
            // if no user then go to landing page
            //document.location.href="#/";
        }
        console.log(user);
    };

    $scope.setDestination = function() {
	var address = $scope.address;
	}

    $scope.$on('$routeChangeSuccess', function () {
        $scope.onLoad();
    });

    $scope.initMap = function(map) {
        $scope.map = map;
        console.log($scope.map);
    };
	$scope.getETA = function(map){

	var origin1 = map.getCenter();
	if($scope.address) var destinationA = $scope.address;
	else destinationA = '200 E Santa Clara St San Jose CA';
	
	var service = new google.maps.DistanceMatrixService();
	service.getDistanceMatrix(
 	 {
  	 	 origins: [origin1],
  		 destinations: [destinationA],
   		 travelMode: 'DRIVING',
   		 unitSystem: google.maps.UnitSystem.IMPERIAL,
  	}, callback);
	}

	function callback(response, status) {
	if (status == 'OK') {
    		var origins = response.originAddresses;
    		var destinations = response.destinationAddresses;

    		for (var i = 0; i < origins.length; i++) {
      			var results = response.rows[i].elements;
      			for (var j = 0; j < results.length; j++) {
        			var element = results[j];
        			document.getElementById("distance").innerHTML = 					element.distance.text;
        			document.getElementById("duration").innerHTML = 					element.duration.text;
				var cost = element.distance.value*0.002;
				cost =parseFloat(Math.round(cost * 100) / 100).toFixed(2);
				document.getElementById("cost").innerHTML = cost;
        			var from = origins[i];
        			var to = destinations[j];
      				}
    			}
  		}
	}


	
});
