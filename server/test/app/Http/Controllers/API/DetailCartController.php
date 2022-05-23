<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\tb_detail_cart;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class DetailCartController extends Controller
{
   public function store(Request $request)
	{
		$validator = Validator::make($request->all(),[
			'cart_id' => 'required',
			'book_id' => 'required',
			'gh_amount' => 'required',
	
		]);

		if($validator->fails())
		{

		return response()->json([
			'validate_err' => $validator->errors(),
		]);
		}
		else{
			$gh = tb_detail_cart::where([['cart_id','=',$request->input('cart_id')],
			['book_id','=',$request->input('book_id')]
		])->first();
			
			if($gh != null)
			{
				$amount = $gh->gh_amount + $request->input('gh_amount');
				$gh->gh_amount = $amount;

				$gh->update();

				return response()->json([
					'status' => 200,
					'message' => 'add successfull',
				]);
			}else{
				$giohang = new tb_detail_cart();
				$giohang->cart_id = $request->input('cart_id');
				$giohang->book_id = $request->input('book_id');
				$giohang->gh_amount = $request->input('gh_amount');
				$giohang->save();

				return response()->json([
					'status'=> 200,
					'message' => 'add successful',
				]);
			}

		}}


	public function showByUserId($cart_id)
		{
			$gh = tb_detail_cart::where('cart_id','=',$cart_id)->get();

			return response()->json([
				'status' => 200,
				'gh' => $gh,
                'test' => $cart_id,
			]);
		}
		public function deleteDetailCartByProduct(Request $request)
		{
			$gh = tb_detail_cart::where([['cart_id','=',$request->input('cart_id')],
			['book_id','=',$request->input('book_id')]])->first();
			if($gh != null)
			{
				$gh->delete();
			}

			return response()->json([
				'status' => 200,
				'mes' => "Delete produc successful.",
			]);
		}

}
