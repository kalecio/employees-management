<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $guarded = [];

    function role()
    {
        return $this->belongsTo(Role::class);
    }
}
