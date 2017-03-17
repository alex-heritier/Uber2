var app = angular.module("uber2", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: 'landingController',
        templateUrl : "/app/pages/landing.html"
    })
    .when("/register", {
        controller: 'registerController',
        templateUrl : "/app/pages/register.html"
    })
    .when("/rider", {
        controller: 'riderController',
        templateUrl : "/app/pages/rider.html"
    })
    .when("/driver", {
        controller: 'driverController',
        templateUrl : "/app/pages/driver.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});
