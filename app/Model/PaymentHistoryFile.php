<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PaymentHistoryFile extends Model
{
    protected $table = "payment_history_files";

    protected $fillable = ['id', 'originalFileName','extension', 'unique_hash', 'user_id'];

    public $timestemps = true;

    public function user(){
        return $this->belongsTo('App\User');
    }
}
