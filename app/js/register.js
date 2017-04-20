'use strict';

app.controller("registerCtrl", function($scope, $location, userService) {
    $scope.onLoad = function() {
        var user = userService.getUser();

        // check if user is an object
        if (user != null) {
            $location.path("/rider");
            $scope.$apply();
        }
        console.log(user);
    };

    $scope.$on('$routeChangeSuccess', function () {
        $scope.onLoad();
    });

    $scope.register = function() {
        var user = {
            email: $scope.email,
            password: $scope.password,
            driverStatus: $scope.driverStatus || false
        };

        // check if user exists
        $.post(window.root + "app/server/register.php",
            user,
            function(data) {

            console.log(data);
            if (data == "true") {
                // set current user
                userService.setUser(user);

                // go to rider page
                $location.path("/rider");
                $scope.$apply();
            } else {
                $("#register-alert").show(500);
                setTimeout(function() {
                    $("#register-alert").hide(500);
                }, 5000);
            }
        });
    };
});
