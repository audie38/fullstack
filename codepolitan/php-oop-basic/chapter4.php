<?php

include("./model/Student.php");
include("./model/PartTImeStudent.php");
include("./model/Time.php");


echo Student::$grades[2] . "<br/>";
echo Student::motto() . "<br/>";

PartTimeStudent::$grades[] = "Alumni";
echo implode(", ", Student::$grades);

echo "<br/>" . Time::DAY . "<br/>";
$clock = new Time;
echo $clock->tomorrow();
