<?php include 'connection.php';
$id = $_GET["id"];
$lat = $_GET["lat"];
$lon = $_GET["lon"];

if(!$id && !$lat && !$lon) {
	 mysqli_query($con,"UPDATE user SET location_lat=$lat AND location_lon=$lon
WHERE userid='".$id."'");
	 mysqli_close($con);
}
?>