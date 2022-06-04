<?php

class Product
{
    public $name;
    public $color;
    public $price;

    public function __construct($args = [])
    {
        $this->name = $args["name"] ?? NULL; //nullable
        $this->color = $args["color"] ?? NULL; //nullable
        $this->price = $args["price"] ?? NULL; //nullable
    }
}
