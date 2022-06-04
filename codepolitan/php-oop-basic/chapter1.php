<?php

include("./model/part1/Person.php");

// Object Instance
$customer = new Person;
$customer->first_name = "Audie";
$customer->last_name = " Milson";
$customer->student = false;
$customer->country = "Indonesia";

$student = new Person;
$student->first_name = "Ichigo";
$student->last_name = " Kurosaki";
$student->student = true;
$student->country = "Japan";

$listOfPerson = array();
array_push($listOfPerson, $customer, $student);
$getAllPerson = json_encode($listOfPerson);

echo $getAllPerson;
