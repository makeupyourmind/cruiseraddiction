<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VerificationToken extends Model
{
    //
    protected $table = 'verification_tokens';

    protected $fillable = [
      'user_id',
      'token'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }
}
