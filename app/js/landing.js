'use strict';

app.controller("landingCtrl", function($scope, $location, userService) {
    $scope.onLoad = function() {
        var user = userService.getUser();

        console.log(user);
        // check if user is an object
        if (!user.testData) {
            $location.path("/rider");
            $scope.apply();
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
            if (data == "true") {
                // set current user
                userService.setUser(user);

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
