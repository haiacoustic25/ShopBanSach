<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tb_detail_bill extends Model
{
    use HasFactory;
	protected $table = 'tb_detail_bills';
	public function tb_book()
	{
		return $this->belongsTo('App\Models\tb_books.php');
	}

	public function tb_bill()
	{
		return $this->belongsTo('App\Models\tb_bills.php');
	}
	protected $fillable = [
	'bill_id',
	'book_id',
	'book_quantity',
    'book_price',
	];
	protected $primaryKey = ['bill_id','book_id'];
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
