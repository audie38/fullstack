<?php

class Person
{
    var $first_name;
    var $last_name;
    var $student = false;
    var $country = 'None';

    function sayHello()
    {
        return "Hello World!";
    }

    function getFullName()
    {
        return $this->first_name . " " . $this->last_name;
    }
}
