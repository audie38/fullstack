<?php

namespace App;

include "../models/Model.php";

use Model\Table as ModelTable;

class Table
{
    public static function get()
    {
        echo "App.Table.get() <br/>";
    }
}

Table::get();
ModelTable::get();
