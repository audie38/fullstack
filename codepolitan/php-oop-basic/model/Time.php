<?php

class Time
{
    public const DAY = 60 * 60 * 24;
    public function tomorrow()
    {
        return time() + self::DAY;
    }
}
