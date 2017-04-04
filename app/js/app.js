var app = angular.module("uber2", ["ngRoute"]);

// ROUTES
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: 'landingCtrl',
        templateUrl : "/app/pages/landing.html"
    })
    .when("/register", {
        controller: 'registerCtrl',
        templateUrl : "/app/pages/register.html"
    })
    .when("/rider", {
        controller: 'riderCtrl',
        templateUrl : "/app/pages/rider.html"
    })
    .when("/driver", {
        controller: 'driverCtrl',
        templateUrl : "/app/pages/driver.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});
