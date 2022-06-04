<?php

$array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


$filterEven = function ($item) {
    return ($item % 2 == 0);
};


$filterOdd = function ($item) {
    return ($item % 2 == 1);
};

$even = array_filter($array, $filterEven);
$odd = array_filter($array, $filterOdd);

print_r($even);
print_r($odd);
