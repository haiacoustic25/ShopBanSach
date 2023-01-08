<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tb_author extends Model
{
	use HasFactory;
	public function books()
	{
		return $this->hasMany(tb_book::class);
	}
	protected $table = 'tb_authors';
	protected $fillable = [
		'tg_name',
		'tg_description',
		'tg_dob',
		'tg_image',
	];
}
