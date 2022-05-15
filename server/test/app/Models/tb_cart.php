<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tb_cart extends Model
{
    use HasFactory;
    public function tb_user()
	{
		return $this->belongsTo('App\Models\User.php');
	}


	protected $table = 'tb_carts';
	protected $fillable = [
	'username',
	];
}
