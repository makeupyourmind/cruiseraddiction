<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PaymentHistoryFile extends Model
{
    protected $table = "payment_history_files";

    protected $fillable = ['id', 'originalFileName','extension', 'unique_hash', 'user_id', 'guest_id'];

    public $timestemps = true;

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function guest(){
        return $this->belongsTo('App\Model\Guest');
    }
}
