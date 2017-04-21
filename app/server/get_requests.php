<?php

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

// get requests
$sql = "SELECT * FROM requests";
$result = $conn->query($sql);
while($row = $result->fetch_array(MYSQLI_NUM)) {
    $arr[] = $row;
}
echo json_encode($arr);

?>
