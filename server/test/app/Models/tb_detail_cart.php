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

	protected function setKeysForSaveQuery($query)
	{
		$keys = $this->getKeyName();
		if(!is_array($keys)){
			return parent::setKeysForSaveQuery($query);
		}
	
		foreach($keys as $keyName){
			$query->where($keyName, '=', $this->getKeyForSaveQuery($keyName));
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
}
