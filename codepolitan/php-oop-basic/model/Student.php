<?php

class Student
{
    public static $grades = ["SD", "SMP", "SMA"];
    private static $totalStudents = 0;

    public static function motto()
    {
        return "Learn PHP OOP";
    }

    public static function count()
    {
        return self::$totalStudents;
    }

    public static function addStudent()
    {
        return self::$totalStudents++;
    }
}
