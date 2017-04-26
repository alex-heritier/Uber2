<?php

$user_email = $_GET['email'];

$server = "localhost";
$username = "root";
$password = "";
$db = "uber2";

// Create connection
$conn = new mysqli($server, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM users WHERE email='$user_email'";

?>