<?php

interface TableInterface
{
    public function save(array $data);
}

interface LogInterface
{
    public function log(string $message);
}

class Table implements TableInterface, LogInterface
{
    public function save(array $data)
    {
        return "Save Method From Table Class \n";
    }

    public function log(string $message)
    {
        return $message . "\n";
    }
}

echo (new Table)->save([]);
echo (new Table)->log("Interface from log interface");
