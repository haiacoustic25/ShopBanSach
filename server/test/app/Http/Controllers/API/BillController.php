<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\bill_view;
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
        // $bill->bill_total = $request->input('status');

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
        // $bill->bill_total = $request->input('status');
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

    public function edit(Request $request)
    {

        $bill = tb_bill::find($request->input('bill_id'));

        $bill->bill_address =$request->input('bill_address');
        $bill->bill_email = $request->input('bill_email');
        $bill->bill_phone = $request->input('bill_phone');
        $bill->bill_total = $request->input('bill_total');
        // $bill->bill_total = $request->input('status');

        $bill->update();
        return response()->json([
            'status'=> 200,
            'bill' => $bill,
        ]);
    }

    public function showAll()
    {

        $bill = tb_bill::all();

        return response()->json([
            'status'=> 200,
            'bills' => $bill,
        ]);
    }
    public function showById($id)
    {

        $bill = tb_bill::find($id);

        $detail = tb_detail_bill::where('bill_id','=',$bill->id)->get();

        $sach = array();
			$i = 0;

			foreach($detail as $item)
			{
				$sach[$i] = tb_book::where('id', '=', $item->book_id)->first();
				$sach[$i] -> s_amount = $item->book_quantity;
				$i++;
			}

        return response()->json([
            'status'=> 200,
            'bill' => $bill,
            'book' => $sach,
        ]);
    }

    public function BillViewAdminAPI()
    {

        $bills = tb_bill::all();
        $view = array();
        $index = 0;
        foreach($bills as $bill)
        {

            $detail = tb_detail_bill::where('bill_id','=',$bill->id)->get();

            $user = User::find($bill->cart_id);


            $sach = array();
                $i = 0;

                foreach($detail as $item)
                {
                    $sach[$i] = tb_book::where('id', '=', $item->book_id)->first();
                    $sach[$i] -> s_amount = $item->book_quantity;
                    $i++;
                }

            $view_item = new bill_view($user,$bill, $sach,$detail);
            $view[$index] = $view_item;
            $index++;
        }

        return response()->json([
            'status'=> 200,
            'bill_view' => $view,
        ]);
    }
    public function updateBill(Request $request)
	{
		$id = (int)$request -> input('id');

        $bill = tb_bill::find($id);
		$bill->bill_address =$request->input('bill_address');
        $bill->status = $request->input('status');
        $bill->bill_phone = $request->input('bill_phone');

        $bill->update();
        
		return response()->json([
			'status'=> 200,
			'message' => 'update successful',
		]);
	}
	
}