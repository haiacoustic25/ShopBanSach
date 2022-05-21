<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\tb_author;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
	public function store(Request $request)
	{
		$validator = Validator::make($request->all(),[
			'tg_name' => 'required|max:100',
		]);

		if($validator->fails())
		{

		return response()->json([
			'validate_err' => $validator->errors(),
		]);
		}
		else{
		$tacgia = new tb_author();
		$tacgia->tg_name = $request->input('tg_name');
		$tacgia->tg_description = $request->input('tg_description');
		$tacgia->tg_dob = $request->input('tg_dob');
		if($request->has('file_upload'))
		{
			$file = $request->file_upload;
			$ext = $request->file_upload->extension();
			$file_name = time().'-'.'author'.'.'.$ext;

			$file->move(public_path('uploads/author'),$file_name);
			$tacgia->tg_image = $file_name;
		}
		$tacgia->save();

		return response()->json([
			'status'=> 200,
			'message' => 'add successful',
		]);

		}}


	public function show()
	{
		$tacgia = tb_author::all();

		return response()->json([
			'status' => 200,
			'authors' => $tacgia,
		]);
	}

	public function findAuthorById($id)
	{
		$tacgia = tb_author::find($id);

		return response()->json([
			'status' => 200,
			'author' => $tacgia,
		]);
	}

	public function updateAuthor(Request $request)
	{
		$id = (int)$request -> input('id');
		$validator = Validator::make($request->all(),[
			'tg_name' => 'required|max:100',
		]);

		if($validator->fails())
		{

		return response()->json([
			'validate_err' => $validator->errors(),
		]);
		}
		else{

			$tacgia = tb_author::find($id);
			$tacgia->tg_name = $request->input('tg_name');
			$tacgia->tg_description = $request->input('tg_description');
			$tacgia->tg_dob = $request->input('tg_dob');
			if($request->has('file_upload'))
			{
				$des = public_path('uploads/author/'.$tacgia->tg_image);
				// if(File::exists($des))
				// {
				// 	File::delete($des);
				// }
				// $file = $request->file_upload;
				// $ext = $request->file_upload->extension();
				// $file_name = time().'-'.'user'.'.'.$ext;
				// $file->move(public_path('uploads/user'),$file_name);

				$file = $request->file_upload;
				$ext = $request->file_upload->extension();
				$file_name = time().'-'.'author'.'.'.$ext;

				$file->move(public_path('uploads/author'),$file_name);
				$tacgia->tg_image = $file_name;
			}
			$tacgia->update();

		return response()->json([
			'status'=> 200,
			'message' => 'update successful',
		]);

		}
	}

	public function deleteById($id)
	{
		$tacgia = tb_author::find($id);
		$tacgia->delete();

		return response()->json([
			'status' => 200,
			'message' => 'delete successful',
		]);
	}
}
