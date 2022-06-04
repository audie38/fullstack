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

$shirt = new Product(["name" => "T-Shirt", "color" => "Blue", "price" => "299"]);
echo json_encode($shirt);
echo "<br/>" . Product::$instanceCount;
unset($shirt);
echo "<br/>" . Product::$instanceCount;
