<?php

include("./model/Customer.php");

// Object Instance
$cust = new Customer;
$cust->firstName = "Audie";
$cust->lastName = "Milson";
$cust->userName = "audie.milson";

echo $cust->getFullName();
