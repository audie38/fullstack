<?php

class User
{
    // Visibility
    public $firstName;
    public $lastName;
    public $userName;

    protected $regId = 1001;
    private $level = "user";

    // Method
    public function getFullName()
    {
        return $this->firstName . " " . $this->lastName;
    }

    protected function sayProtect()
    {
        return "This is Protected Method";
    }

    private function sayPrivate()
    {
        return "This is Private Method";
    }
}
