<?php

$user_id = $_POST['user'];
$request_id = $_POST['request'];

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

// Update driver to busy
$sql = "UPDATE requests 
        SET status='in_progress' 
        WHERE user_id='$user_id' AND req_id='$request_id'";
$result = $conn->query($sql);
echo $result;