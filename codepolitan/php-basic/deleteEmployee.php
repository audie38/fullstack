<?php

include("./src/config/connection.php");

$id = $_GET["id"];

$query = "DELETE FROM EMPLOYEES WHERE EMPLOYEE_ID = $id";

$deleteQuery = mysqli_query($conn, $query);
if($deleteQuery){
    header('Location: index.php');
}else{
    echo "<script>alert('Failed to Delete Employee!')</script>";
}

?>