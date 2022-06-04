<?php

class IsPositiveInt
{
    public function __invoke($value)
    {
        return ((int)$value == $value && $value > 0);
    }
}

$invoke = new IsPositiveInt();

var_dump($invoke(1));
var_dump($invoke("5"));
var_dump($invoke(4.0));
var_dump($invoke(-2));
var_dump($invoke(3.1));
