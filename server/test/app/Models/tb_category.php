<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tb_category extends Model
{
	use HasFactory;

	public function tb_book()
	{
		return $this->hasMany('App/Models/tb_book.php');
	}

	protected $table = 'tb_categories';
	protected $fillable = [
		'tl_name',
	];
}
