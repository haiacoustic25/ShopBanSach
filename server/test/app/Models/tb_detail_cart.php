<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class tb_detail_cart extends Model
{
	use HasFactory;
	protected $table = 'tb_detail_carts';
	public function tb_book()
	{
		return $this->belongsTo('App\Models\tb_books.php');
	}

	public function tb_cart()
	{
		return $this->belongsTo('App\Models\tb_carts.php');
	}
	protected $fillable = [
	'cart_id',
	'book_id',
	'gh_amount',
	];
	protected $primaryKey = ['cart_id','book_id'];
	public $incrementing = false;

	 protected function setKeysForSaveQuery($query){ //edit Builder $query to $query

		foreach ($this->getKeyName() as $key) {
		// UPDATE: Added isset() per devflow's comment.
		if (isset($this->$key)){
			$query->where($key, '=', $this->$key);
		}else
			throw new Exception(__METHOD__ . 'Missing part of the primary key: ' . $key);
		}
		return $query;
	}


	protected function getKeyForSaveQuery($keyName = null)
	{

		if(is_null($keyName)){
			$keyName = $this->getKeyName();
		}

		if (isset($this->original[$keyName])) {
			return $this->original[$keyName];
		}

		return $this->getAttribute($keyName);
	}


	//Execute a query for a single record by ID.
	public static function find($ids, $columns = ['*']){
	$me = new self;
	$query = $me->newQuery();

	foreach ($me->getKeyName() as $key) {
		$query->where($key, '=', $ids[$key]);
	}

	return $query->first($columns);
	}
}
