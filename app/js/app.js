var app = angular.module("uber2", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/app/pages/landing.html"
    })
    .when("/about", {
        templateUrl : "/app/pages/about.html"
    })
    .when("/rider", {
        templateUrl : "/app/pages/rider.html"
    })
    .when("/driver", {
        templateUrl : "/app/pages/driver.html"
    });
});
