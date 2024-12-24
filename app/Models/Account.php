<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        'email', 'mobile', 'mobile_code', 'password', 'device-info', 'cookie', 'session_id', 'is_input', 'is_auth', 'is_withdraw', "csrftoken", "withdraw_balance", "balance", "address", "proxy"
    ];
}
