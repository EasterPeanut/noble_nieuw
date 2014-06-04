<?php include 'connection.php';
$id = $_GET["lat"];
$lat = $_GET["lat"];
$lon = $_GET["lon"];

if(!$id && !$lat && !$lon) {
	$result = mysqli_query($con,"SELECT * FROM projecten");
}
