<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\tb_bill;
use App\Models\tb_book;
use App\Models\tb_detail_bill;
use App\Models\tb_cart;
use App\Models\User;
use App\Models\tb_detail_cart;

class BillController extends Controller
{
    public function store($id)
    {
        $cart = tb_cart::find($id);
        $user = User::where('username','=',$cart->username)->first();
        $gh = tb_detail_cart::where('cart_id','=',$id)->get();
        
        $bill = new tb_bill();
        $bill->cart_id = $id;
        $bill->bill_address = $user->address;
        $bill->bill_email = $user->email;
        $bill->bill_phone = $user->phone;

        $bill->save();
    // 'bill_id',
	// 'book_id',
	// 'book_quantity',
    // 'book_price',
	// 'book_total',

        foreach($gh as $item)
		{
            $spHoaDon = new tb_detail_bill();
			$spHoaDon->bill_id = $bill->id;
            $spHoaDon->book_id = $item->book_id;
            $spHoaDon->book_quantity = $item->gh_amount;
            $sach = tb_book::find($item->book_id);
            $price = $sach->s_price - $sach->s_price*$sach->s_discount/100;
            $spHoaDon->book_price = $price;
            $spHoaDon->book_total = $price*$item->gh_amount;

            $spHoaDon->save();
        }

        $detail = tb_detail_bill::where('bill_id','=',$bill->id)->get();

        foreach($gh as $item)
		{
            $ghDelete = tb_detail_cart::where([['cart_id','=',$id],
                ['book_id','=',$item->book_id]])->first();
                if($ghDelete != null)
                {
                    $ghDelete->delete();
                }
        }

            return response()->json([
                'status'=> 200,
                'bill' => $bill,
                'detail' => $detail,
            ]);
        
    }
}
