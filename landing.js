var app = angular.module("uber2-landing", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/landing.html"
    })
    .when("/about", {
        templateUrl : "/about.html"
    });
});
