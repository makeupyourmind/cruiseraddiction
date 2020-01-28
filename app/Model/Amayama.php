<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Amayama extends Model
{
    protected $table = 'amayamas';

    protected $fillable = ['id', 'name', 'part_number', 'weight', 'description', 'catalog', 
    'discontinued', 'tableData', 'original_replacements', 'non_original_replacements'];

    public $timestamps = true;

    protected $casts = [
        'tableData' => 'array',
        'original_replacements' => 'array',
        'non_original_replacements' => 'array'
    ];
}
