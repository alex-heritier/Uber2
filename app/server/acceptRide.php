<?php

$user_id = $_POST['user'];
$request_id = $_POST['request'];
$driver_id = $_POST['driver'];

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

// Update driver to busy
$sql = "UPDATE requests SET status='in_progress', driver=$driver_id WHERE user_id=$user_id AND req_id=$request_id";

if ($conn->query($sql) === TRUE) {
    echo "Record update success";
} else {
    echo $user_id;
    echo $request_id;
    echo "Error updating record: " . $conn->error;
}

mysql_close($conn);

?>