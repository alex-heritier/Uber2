'use strict';

app.controller("driverCtrl", function($scope, $rootScope, $location, $http, userService) {
    $scope.onLoad = function() {
        $scope.user = userService.getUser();
        $scope.active = "driver";
        $scope.available = true;
        
        // check if user is an object
        if ($scope.user == null || $scope.user.is_driver != "1") {
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
});
