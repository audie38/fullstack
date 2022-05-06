<?php 


include("../config/connection.php");

$id = $_POST["id"];

$results = query("SELECT * FROM EMPLOYEES WHERE EMPLOYEE_ID = $id")[0];

echo json_encode($results);

?>