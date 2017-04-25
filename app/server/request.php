<?php

$email = $_POST['email'];
$lat = $_POST['lat'];
$lng = $_POST['lng'];

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
// first get user_id
$sql = "SELECT user_id FROM users WHERE email='$email'";
$result = $conn->query($sql);
if ($result->num_rows == 0) {
    echo $sql;
    echo "false";
    return;
}
$user_id = $result->fetch_array(MYSQLI_NUM)[0];

// check if user already has active request
$sql = "SELECT * FROM requests WHERE user_id='$user_id'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo $sql;
    echo "false";
    return;
}

// insert new request
$sql = "INSERT INTO requests (user_id, lat, lng, status) "
    . "VALUE ('$user_id', '$lat', '$lng', 'pending')";
if ($result = $conn->query($sql)) {
    echo "true";
} else {
    echo $sql;
    echo "false";
}

mysql_close($conn);

?>
