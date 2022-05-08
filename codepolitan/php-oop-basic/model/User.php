<?php

class User
{
    var $firstName;
    var $lastName;
    var $userName;

    // Method
    function getFullName()
    {
        return $this->firstName . " " . $this->lastName;
    }
}
