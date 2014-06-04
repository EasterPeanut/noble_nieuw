<?php include 'connection.php';
$id = $_GET["id"];
$lat = $_GET["lat"];
$lon = $_GET["lon"];
$date = date('Y-m-d H:i:s');
/*http://localhost/save/noble/updateuser.php?id=1&lat=51.451990&lon=5.480222*/

	 mysqli_query($con,"UPDATE user SET location_lat=$lat, location_lon=$lon, date='".$date."'
WHERE userid=$id");
	 mysqli_close($con);

?>