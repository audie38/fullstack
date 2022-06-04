<?php

class Student
{
    public static $instanceCount = 0;
    public function __construct()
    {
        self::$instanceCount++;
    }
}
