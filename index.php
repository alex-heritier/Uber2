<?php
if ($_SERVER['HTTPS'] != "on") {
    $redirect = "https://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
    header("Location:$redirect");
}
?>

<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>Uber 2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

    <!-- Javascript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>
    <script src="app/js/app.js"></script>
    <script src="app/js/userService.js"></script>
    <script src="app/js/mapService.js"></script>
    <script src="app/js/landing.js"></script>
    <script src="app/js/about.js"></script>
    <script src="app/js/register.js"></script>
    <script src="app/js/rider.js"></script>
    <script src="app/js/driver.js"></script>
</head>
<body ng-app="uber2">
    <div class="container">
        <div id="uber2-view" ng-view>
        </div>
    </div>
</body>
</html>
