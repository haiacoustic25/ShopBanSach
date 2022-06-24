<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tb_bill extends Model
{
    use HasFactory;
    protected $table = 'tb_bills';
	protected $fillable = [
        'cart_id',
        'bill_address',
        'bill_email',
        'bill_phone',
        'bill_total',
        'status'
	];
}