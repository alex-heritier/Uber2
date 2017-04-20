<?php

// https://phpmyadmin.nearlyfreespeech.net/sql.php?server=1&db=uber2&table=users&pos=0

$user_email = $_POST['email'];
$user_pass = $_POST['password'];
$user_driver_status = $_POST['driverStatus'] == "false" ? 0 : 1;

$server = "uber2.db";
$username = "aheritier";
$password = "?u--&a%2+@F=2";
$db = "uber2";

// Create connection
$conn = new mysqli($server, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// check for duplicates
$sql = "SELECT * FROM users WHERE email='$user_email'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "false";
    return;
}

// insert new user
$sql = "INSERT INTO users (email, pass, is_driver) "
    . "VALUE ('$user_email', '$user_pass', '$user_driver_status')";
if ($result = $conn->query($sql)) {
    echo "true";
} else {
    echo "false";
}

?>
