<?php

include("./model/Customer.php");

// Object Instance
$user = new User;
$user->firstName = "Ichigo";
$user->lastName = "Kurosaki";


$cust = new Customer;
$cust->firstName = "Audie";
$cust->lastName = "Milson";
$cust->userName = "audie.milson";
$cust->city = "Jakarta";
$cust->country = "Indonesia";

echo $cust->getFullName();
echo "<br/>";
echo $cust->getLocation();
echo "<br/>";
echo $cust->sayParent();
