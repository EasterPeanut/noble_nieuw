<?php include 'connection.php';
$id_from = $_GET["id"];
$lat = $_GET["lat"];
$lon = $_GET["lon"];
$date = date('Y-m-d H:i:s');
$message = $_GET["message"];
$id_to = $_GET["id_to"];
echo "INSERT INTO message (id_to, location_lon, location_lat, message, date, id_from)
VALUES ($id_to, $lon, $lat, '".$message."', '".$date."',$id_from)";
/* postmessage.php?id=1&lat=51.451990&lon=5.480222&message=Pien%20laat%20eens%20een%20keer%20je%20voeten%20zien&id_to=2*/
	 mysqli_query($con,"INSERT INTO message (id_to, location_lon, location_lat, message, date, id_from)
VALUES ($id_to, $lon, $lat, '".$message."', '".$date."',$id_from)");
	 mysqli_close($con);

?>