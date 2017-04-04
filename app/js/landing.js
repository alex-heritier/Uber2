
app.controller("landingCtrl", function($scope, $location, userService) {
    $scope.login = function() {
        var user = {
            email: $scope.email,
            password: $scope.password
        };
        // set current user
        userService.setUser(user);

        // go to rider page
        $location.path("/rider");
    };
});
