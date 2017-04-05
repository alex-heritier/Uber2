
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

    $scope.$on('$routeChangeSuccess', function () {
        $scope.onLoad();
    });

    $scope.initMap = function(map) {
        $scope.map = map;
        console.log($scope.map);
    };

	$scope.add = function(url) {
        $http.get(url).then(function(response) {
            $scope.distance = response.data.row.element.distance.text;
            $scope.time = response.data.row.element.duration.text;
            $scope.messages.push($scope.newMessage);
        });
    };

	ETA_BASE_URL = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial';
	KEY = 'AIzaSyBC7wNk8LezGmsO1FLz2xH8Twz0j5VPEF8';
	var origin = '37.335,-121.881';
	//var destination = $scope.address;
	var destination = '200 E Santa Clara St San Jose CA';
	if (destination) destination.replace(/ /g, "+");
	//var url = ETA_BASE_URL + '&origin='+origin+'&destination='+destination+'&key='+KEY;
	var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=272+E+Santa+Clara+St+San+Jose+CA&destinations=1+Washington+Sq+San+Jose+CA&key=AIzaSyBC7wNk8LezGmsO1FLz2xH8Twz0j5VPEF8';
	$scope.add(url);
});
