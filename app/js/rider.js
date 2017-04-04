
app.controller("riderCtrl", function($scope, userService) {
    $scope.onLoad = function() {
        var user = userService.getUser();

        // check if user is an object
        if (user == null) {
            // if no user then go to landing page
            document.location.href="#/";
        }
        console.log(user);
    };

    $scope.$on('$routeChangeSuccess', function () {
        $scope.onLoad();
    });
});
