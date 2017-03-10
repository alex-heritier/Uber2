var app = angular.module("uber2", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/rider", {
        templateUrl : "/app/rider.html"
    })
    .when("/driver", {
        templateUrl : "/app/driver.html"
    });
});
