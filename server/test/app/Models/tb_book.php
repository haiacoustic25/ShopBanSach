<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tb_book extends Model
{
	use HasFactory;

	public function tb_author()
	{
		return $this->belongsTo('App\Models\tb_author.php');
	}

	public function tb_category()
	{
		return $this->belongsTo('App\Models\tb_category.php');
	}

	protected $table = 'tb_books';
	protected $fillable = [
	's_name',
	's_description',
	's_price',
	's_nsx',
	's_image',
	's_status',
	's_amount',
	's_discount',
	'author_id',
	'category_id',
	];
}
