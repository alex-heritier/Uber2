<?php

// https://phpmyadmin.nearlyfreespeech.net/sql.php?server=1&db=uber2&table=users&pos=0

$user_email = $_POST['email'];
$user_pass = $_POST['password'];

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

$sql = "SELECT * FROM users WHERE email='$user_email' AND pass='$user_pass'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_array(MYSQLI_ASSOC));
} else {
    echo "false";
}

?>
