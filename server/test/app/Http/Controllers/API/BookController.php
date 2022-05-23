<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tb_book;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
   public function store(Request $request)
	{
		// $file_name = "";
		$validator = Validator::make($request->all(),[
			's_name' => 'required|max:100',
			's_price' => 'required',
			's_nsx' =>'required',
			'author_id' => 'required',
			'category_id' => 'required',
			's_amount' => 'required',
			's_status' => 'required',
			's_discount' => 'max:100',
		]);

		if($validator->fails())
		{

		return response()->json([
			'validate_err' => $validator->errors(),
		]);
		}
		else{
		
		// $sach = tb_book::create([
		// 	's_name' => $request->s_name
		// ])
		$sach = new tb_book();
		$sach->s_name = $request->input('s_name');
		$sach->s_description = $request->input('s_description');
		$sach->s_price = $request->input('s_price');
		$sach->s_nsx = $request->input('s_nsx');
		$sach->s_image = $request->input('s_image');
		$sach->s_status = $request->input('s_status');
		$sach->s_discount = $request->input('s_discount');
		$sach->author_id = $request->input('author_id');
		$sach->category_id = $request->input('category_id');
		$sach->s_amount = $request->input('s_amount');
		if($request->has('file_upload'))
		{
			$file = $request->file_upload;
			$ext = $request->file_upload->extension();
			$file_name = time().'-'.'book'.'.'.$ext;
			
			$file->move(public_path('uploads/book'),$file_name);
			$sach->s_image = $file_name;
		}
		$sach->save();

		return response()->json([
			'status'=> 200,
			'message' => 'add successful',
		]);

		}}


	public function show()
	{
		$sach = tb_book::all();

		return response()->json([
			'status' => 200,
			'books' => $sach,
		]);
	}

	public function findBookById($id)
	{
		$sach = tb_book::find($id);

		return response()->json([
			'status' => 200,
			'book' => $sach,
		]);
	}

	public function updateBook(Request $request)
	{
		$id = (int)$request -> input('id');
		$validator = Validator::make($request->all(),[
			's_name' => 'required|max:100',
			's_price' => 'required',
			's_nsx' =>'required',
			'author_id' => 'required',
			'category_id' => 'required',
			's_amount' => 'required',
			's_status' => 'required',
			's_discount' => 'max:100',
		]);

		if($validator->fails())
		{

		return response()->json([
			'validate_err' => $validator->errors(),
		]);
		}
		else{

			$sach = tb_book::find($id);
			$sach->s_name = $request->input('s_name');
			$sach->s_description = $request->input('s_description');
			$sach->s_price = $request->input('s_price');
			$sach->s_nsx = $request->input('s_nsx');
			$sach->s_status = $request->input('s_status');
			$sach->s_discount = $request->input('s_discount');
			$sach->author_id = $request->input('author_id');
			$sach->category_id = $request->input('category_id');
			$sach->s_amount = $request->input('s_amount');
			if($request->has('file_upload'))
			{
				$des = public_path('uploads/book/'.$sach->s_image);
					if(File::exists($des))
					{
						File::delete($des);
					}
					$file = $request->file_upload;
					$ext = $request->file_upload->extension();
					$file_name = time().'-'.'user'.'.'.$ext;

					$file->move(public_path('uploads/book'),$file_name);
				$file = $request->file_upload;
				$ext = $request->file_upload->extension();
				$file_name = time().'-'.'book'.'.'.$ext;

				$file->move(public_path('uploads/book'),$file_name);
				$sach->s_image = $file_name;
			}
			$sach->update();

		return response()->json([
			'status'=> 200,
			'message' => 'update successful',
		]);
		}
	}

	public function deleteById($id)
	{
		$sach = tb_book::find($id);
		$sach->delete();

		return response()->json([
			'status' => 200,
			'message' => 'delete successful',
		]);
	}
}
