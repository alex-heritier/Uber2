'use strict';

app.controller("landingCtrl", function($scope, $location, userService) {
    $scope.email = null;
    $scope.password = null;

    $scope.onLoad = function() {
        $scope.user = userService.getUser();

        console.log($scope.user);
        // check if user is an object
        if($scope.user != null){
            if($scope.user.driver == 1){ 
                document.location.href="#/driver";
            } else {
                document.location.href="#/rider";
            }
        }
    };

    $scope.$on('$routeChangeSuccess', function () {
        $scope.onLoad();
    });

    $scope.login = function() {
        var user = {
            email: $scope.email,
            password: $scope.password
        };

        // check if user exists
        $.post(window.root + "app/server/login.php",
            user,
            function(data) {

            console.log(data);
            if (data != "false") {
                // set current user
                userService.setUser(JSON.parse(data));
                console.log(userService.getUser());

                // go to rider page
                $location.path("/rider");
                $scope.$apply();
            } else {
                $("#login-alert").show(500);
                setTimeout(function() {
                    $("#login-alert").hide(500);
                }, 5000);
            }
        });
    };
});
