<?php

include("./model/part2/Student.php");
include("./model/part2/Elementary.php");
include("./model/part2/Junior.php");
include("./model/part2/Senior.php");
include("./model/part2/Product.php");

$elementary = new Elementary;
echo "Elementary: {$elementary->total} <br/>";
$junior = new Junior;
echo "Junior: {$junior->total} <br/>";
$senior = new Senior;
echo "Senior: {$senior->total} <br/>";

echo "Instance Count: " . Student::$instanceCount . "<br/>";

$shirt = new Product("T-Shirt", "Blue");
echo json_encode($shirt);
