<?php

class PhotoProfile extends Image
{
    public static function geometry()
    {
        if (self::$resizeStatus) {
            echo "50x50";
        } else {
            parent::geometry();
        }
    }
}
