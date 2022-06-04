<?php

include("User.php");

// Inheritance
class Customer extends User
{
    // Extend
    var $city;
    var $country;

    function getLocation()
    {
        return $this->city . ", " . $this->country;
    }

    // Override
    function getFullName()
    {
        return $this->firstName . " " . $this->lastName . " (customer)";
    }

    // Visibility - Encapsultaion
    public function sayParent()
    {
        return $this->sayProtect();
    }
}
