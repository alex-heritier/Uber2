<?php

$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : NULL;

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

// get requests
$sql = "SELECT * FROM requests req, users rider WHERE req.user_id = rider.user_id";
if ($user_id != NULL)
    $sql .= " AND req.user_id = '$user_id'";

$result = $conn->query($sql);
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $arr[] = $row;
}
echo json_encode($arr);

?>
