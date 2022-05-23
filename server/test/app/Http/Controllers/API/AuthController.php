<?php

namespace App\Http\Controllers\API;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\tb_cart;
use App\Models\tb_detail_cart;
use App\Models\tb_book;
use Illuminate\Support\Facades\File; 
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function store(Request $request)
	{
		$file_name = "";
		$validator = Validator::make($request->all(),[
			'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
			'username' => ['required', 'string', 'max:255', 'unique:users'],
			'phone' => ['required', 'string' ,'max:10'],
			'address' => ['required'],
			'isAdmin' =>[],
			'password' => ['required', 'string', 'min:8'],
		]);

		if($validator->fails())
		{

		return response()->json([
			'validate_err' => $validator->errors(),
		]);
		}
		else{
			if($request->input('isAdmin') == null) $isAdmin = 0;
			else $isAdmin = $request->input('isAdmin');
			if($request->has('file_upload'))
			{
				$file = $request->file_upload;
				$ext = $request->file_upload->extension();
				$file_name = time().'-'.'user'.'.'.$ext;

				$file->move(public_path('uploads/user'),$file_name);
			}
			$user = User::create([
				'name' => $request->name,
				'email' => $request->email,
				'address' => $request->address,
				'isAdmin' => $isAdmin,
				'username' => $request->username,
				'password' => bcrypt($request->password),
				'phone' => $request->phone,
				'avatar' => $file_name,
			]);
			$cart = tb_cart::create([
				'username' => $request->username,
			]);
			


			$token = $user->createToken($user->username.'_Token')->plainTextToken;

			return response()->json([
				'status'=> 200,
				'message' => 'add successful',
				'username' => $user->username,
				'token' => $token,
				'user' => $user
			]);

		}}

		public function show()
		{
			$user = User::all();

			return response()->json([
				'status' => 200,
				'users' => $user,
			]);
		}

        public function updateUser(Request $request)
        {
				$id = (int)$request -> input('id');
				$validator = Validator::make($request->all(),[
					'name' => ['required', 'string', 'max:255'],
					'email' => ['required', 'string', 'email', 'max:255'],
					'phone' => ['required', 'string' ,'max:10'],
					'address' => ['required'],
					'isAdmin' => []
				]);
		
				if($validator->fails())
				{
		
				return response()->json([
					'validate_err' => $validator->errors(),
				]);
				}
				else{
					if($request->input('isAdmin') == null) $isAdmin = 0;
					else $isAdmin = $request->input('isAdmin');
					$user = User::find($id);
					$user->name = $request->input('name');
					$user->email = $request->input('email');
					$user->username = $request->input('username');
					$user->phone = $request->input('phone');
					$user->address = $request->input('address');
					$user->isAdmin = $isAdmin;
					if($request->has('file_upload'))
					{
						$des = public_path('uploads/user/'.$user->avatar);
							if(File::exists($des))
							{
								File::delete($des);
							}
							$file = $request->file_upload;
							$ext = $request->file_upload->extension();
							$file_name = time().'-'.'user'.'.'.$ext;

						$file->move(public_path('uploads/user'),$file_name);
						$user->avatar = $file_name;
					}
					$user->update();

					return response()->json([
						'status'=> 200,
						'message' => 'update successful',
					]);
				}
			}
		public function postAuthLogin(Request $request)
		{
			// $arr = [
			// 	"username" => $request->username,
			// 	"password" => Hash::make($request->password),
			// ];
			$validator = Validator::make($request->all(),[
				'username' => 'required|max:100',
				'password' => 'required',
			]);
	
			if($validator->fails())
			{
	
			return response()->json([
				'validate_err' => $validator->errors(),
			]);
			}
			else{
				$user = User::where('username',$request->username)->first();

				if($user->username != $request->username || !Hash::check($request->password, $user->password))
				{
					return response()->json([
						'status'=> 200,
						'error' => 0,
						'message' => 'login unsuccessful',
						'username' => $request->username,
					]);
				}else{
					return response()->json([
						'status'=> 200,
						'error' => 1,
						'message' => 'login successful',
						'user' => $user
					]);
				}
			}
		}

		public function showCart($username)
		{
			$cart = tb_cart::where('username', $username)->first();

			$gh = tb_detail_cart::where('cart_id',$cart->id)->get();

			$sach = array();
			$i = 0;

			foreach($gh as $item)
			{
				$sach[$i] = tb_book::where('id', '=', $item->book_id)->first();
				$sach[$i] -> s_amount = $item->gh_amount;
				$i++;
			}

			return response()->json([
				'status'=> 200,
				'username' => $cart->username != null ? $cart->username : 'khong tim thay',
				'gh' => $gh,
				'books' => $sach,
			]);
		}
}
