<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\tb_bill;
use App\Models\tb_book;
use App\Models\tb_detail_bill;
use App\Models\tb_cart;
use App\Models\User;
use App\Models\tb_detail_cart;
use Illuminate\Http\Request;

class BillController extends Controller
{
    public function store(Request $request)
    {

        $cart = tb_cart::find($request->input('cart_id'));
        $user = User::where('username','=',$cart->username)->first();
        $gh = tb_detail_cart::where('cart_id','=',$request->input('cart_id'))->get();
        
        $bill = new tb_bill();
        $bill->cart_id = $request->input('cart_id');
        $bill->bill_address =$request->input('bill_address');
        $bill->bill_email = $request->input('bill_email');
        $bill->bill_phone = $request->input('bill_phone');
        $bill->bill_total = $request->input('bill_total');

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

            $spHoaDon->save();
        }

        $detail = tb_detail_bill::where('bill_id','=',$bill->id)->get();

        foreach($gh as $item)
		{
            $ghDelete = tb_detail_cart::where([['cart_id','=',$request->input('cart_id')],
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


    public function pay(Request $request)
    {
        $bill = new tb_bill();
        $bill->cart_id = $request->input('cart_id');
        $bill->bill_address = $request->input('bill_address');
        $bill->bill_email = $request->input('bill_email');
        $bill->bill_phone = $request->input('bill_phone');
        $bill->save();
        $spHoaDon = new tb_detail_bill();
		$spHoaDon->bill_id = $bill->id;
        $spHoaDon->book_id = $request->input('book_id');
        $spHoaDon->book_quantity = $request->input('book_quantity');
        $sach = tb_book::find($request->input('book_id'));
        $price = $sach->s_newPrice;
        $spHoaDon->book_price = $price;
        $spHoaDon->book_total = $price*$request->input('book_quantity');
        $spHoaDon->save();

        return response()->json([
            'status'=> 200,
            'bill' => $bill,
            'detail' => $spHoaDon,
        ]);
    }
}
