<?php

include("./model/Student.php");
include("./model/PartTImeStudent.php");


echo Student::$grades[2] . "<br/>";
echo Student::motto() . "<br/>";

PartTimeStudent::$grades[] = "Alumni";
echo implode(", ", Student::$grades);
