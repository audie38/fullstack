<?php

class AmateurProgrammer extends Programmer
{
    public static function makeSystem()
    {
        echo "Read documentation <br/>";
        parent::makeSystem(); //refer to Parent class' method
        echo "<br/>Clean up mess. <br/>";
    }
}
