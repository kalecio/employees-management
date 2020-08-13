<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $guarded = [];

    function employees()
    {
        return $this->hasMany(Employee::class);
    }
}
