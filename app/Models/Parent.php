<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role_Parent extends Model
{
    protected $table = 'parents';
    protected $primaryKey = 'id';
    protected $fillable = ['name','email','password','role'];
    use HasFactory;
}


