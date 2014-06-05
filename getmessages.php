<?php include 'connection.php';

$id = $_GET["id"];

$arr = array();
 //echo "SELECT * FROM message WHERE id_to = $id OR id_from = $id";
$rs = mysqli_query($con,"SELECT * FROM message WHERE id_to = $id OR id_from = $id");
 
while($obj = mysqli_fetch_object($rs)) {
$arr[] = $obj;
}
$arr = array_filter($arr);

if (!empty($arr)) {
	echo '{"messages":'.json_encode($arr).'}';
}


/*
//The json object is :
{"members":[{"id":"1","title":"Mr","firstname":"Peter","surname":"Ventouris"},{"id":"2","title":"Mr","firstname":"David","surname":"Dabel"},{"id":"3","title":"Mr","firstname":"John","surname":"Merkel"},{"id":"4","title":"Mr","firstname":"James","surname":"Eltons"}]}
*/

?>