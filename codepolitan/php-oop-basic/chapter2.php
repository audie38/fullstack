<?php

include("./model/Customer.php");

// Object Instance
$cust = new Customer;
$cust->firstName = "Audie";
$cust->lastName = "Milson";
$cust->userName = "audie.milson";
$cust->city = "Jakarta";
$cust->country = "Indonesia";

echo $cust->getFullName();
echo "<br/>";
echo $cust->getLocation();
