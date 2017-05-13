<?php

$user_id = $_POST['rider']
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
$sql = "DELETE FROM requests WHERE user_id=$user_id AND req_id=$request_id";

if ($conn->query($sql) === TRUE) {
    echo "Record delete success";
} else {
    echo $user_id;
    echo $request_id;
    echo "Error deleting record: " . $conn->error;
}


?>