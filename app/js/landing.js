
app.controller("landingCtrl", function($scope, userService) {
    $scope.login = function() {
        var user = {
            email: $scope.email,
            password: $scope.password
        };
        // set current user
        userService.setUser(user);

        // go to rider page
        document.location.href="#/rider";
    };
});
