<?php

include("./model/part1/Student.php");
include("./model/part1/PartTimeStudent.php");
include("./model/part1/Time.php");
include("./model/part1/Programmer.php");
include("./model/part1/AmateurProgrammer.php");
include("./model/part1/Image.php");
include("./model/part1/PhotoProfile.php");


echo Student::$grades[2] . "<br/>";
echo Student::motto() . "<br/>";

PartTimeStudent::$grades[] = "Alumni";
echo implode(", ", Student::$grades);

echo "<br/>" . Time::DAY . "<br/>";
$clock = new Time;
echo $clock->tomorrow();

echo "<br/>Programmer: <br/>";
echo Programmer::makeSystem() . "<br/>";
echo "Amateur Programmer: <br/>";
echo AmateurProgrammer::makeSystem() . "<br/>";
echo Image::geometry() . "<br/>";
echo PhotoProfile::geometry() . "<br/>";
Image::$resizeStatus = false;
echo PhotoProfile::geometry() . "<br/>";
