'use strict';

// set javascript root
switch (document.location.hostname)
{
    case 'www.alexheritier.com':
    case 'alexheritier.com':
        window.root = '/uber2/'; break;
    case 'localhost' :
        window.root = '/'; break;
    default :  // set whatever you want
}

var app = angular.module("uber2", ["ngRoute"]);

// ROUTES
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: 'landingCtrl',
        templateUrl : window.root + "app/pages/landing.html"
    })
    .when("/register", {
        controller: 'registerCtrl',
        templateUrl : window.root + "app/pages/register.html"
    })
    .when("/rider", {
        controller: 'riderCtrl',
        templateUrl : window.root + "app/pages/rider.html"
    })
    .when("/driver", {
        controller: 'driverCtrl',
        templateUrl : window.root + "app/pages/driver.html"
    })
    .when("/about", {
        controller: 'aboutCtrl',
        templateUrl : window.root + "app/pages/about.html"
    })
    .otherwise({
        redirectTo: window.root + "app/"
    });
});
