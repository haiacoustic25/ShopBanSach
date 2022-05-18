<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\tb_category;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
   public function store(Request $request)
	{
		$validator = Validator::make($request->all(),[
			'tl_name' => 'required|max:100',
		]);

		if($validator->fails())
		{

		return response()->json([
			'validate_err' => $validator->errors(),
		]);
		}
		else{
		$theloai = new tb_category();
		$theloai->tl_name = $request->input('tl_name');
		$theloai->save();

		return response()->json([
			'status'=> 200,
			'message' => 'add successful',
		]);

		}}


	public function show()
	{
		$theloai = tb_category::all();

		return response()->json([
			'status' => 200,
			'categories' => $theloai,
		]);
	}

	public function findCategoryById($id)
	{
		$theloai = tb_category::find($id);

		return response()->json([
			'status' => 200,
			'category' => $theloai,
		]);
	}

	public function updateCategory(Request $request, $id)
	{
		$validator = Validator::make($request->all(),[
			'tl_name' => 'required|max:100',
		]);

		if($validator->fails())
		{

		return response()->json([
			'validate_err' => $validator->errors(),
		]);
		}
		else{

			$theloai = tb_category::find($id);
			$theloai->tl_name = $request->input('tl_name');
			$theloai->update();

		return response()->json([
			'status'=> 200,
			'message' => 'update successful',
		]);

		}
	}

	public function deleteById($id)
	{
		$theloai = tb_category::find($id);
		$theloai->delete();

		return response()->json([
			'status' => 200,
			'message' => 'delete successful',
		]);
	}
}
