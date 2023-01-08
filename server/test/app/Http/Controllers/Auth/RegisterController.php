<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\tb_cart;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
			'username' => ['required', 'string', 'max:255', 'unique:users'],

			'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
	{
		$user = new User();
        // if($data['file_upload'] != null)
		// 	{
		// 		$file = $data['file_upload'];
		// 		$ext = $data['file_upload']->getClientOriginalExtension();
		// 		$file_name = time().'-'.'user'.'.'.$ext;

		// 		$file->move(public_path('uploads/user'),$file_name);
		// 	}

         User::create([
            'name' => $data['name'],
			'email' => $data['email'],
			'username' => $data['username'],
            'password' => Hash::make($data['password']),
            // 'avatar' => $file_name,
		 ]);
        // $validator = Validator::make($request->all(),[
		// 	'name' => ['required', 'string', 'max:255'],
        //     'email' => ['required', 'string', 'email', 'max:255'],
		// 	'username' => ['required', 'string', 'max:255', 'unique:users'],

		// 	'password' => ['required', 'string', 'min:8', 'confirmed'],
		// ]);

		// if($validator->fails())
		// {

		// return response()->json([
		// 	'validate_err' => $validator->errors(),
		// ]);
		// }
		// else{
        // $user = new User();
		// $user->name = $request->input('name');
		// $user->email = $request->input('email');
		// $user->username = $request->input('username');
		// $user->password = Hash::make($request->input('password'));
		
		// if($request->has('file_upload'))
		// {
		// 	$file = $request->file_upload;
		// 	$ext = $request->file_upload->extension();
		// 	$file_name = time().'-'.'user'.'.'.$ext;

		// 	$file->move(public_path('uploads'),$file_name);
		// 	$user->avatar = $file_name;
		// }
		// $user->save();

		 $cart = new tb_cart();
		 $cart->username = $data['username'];
    
		 $cart->save();

		 return $user;
    }
    // public function upload(Request $request)
	// {
		
        
    //     if($request->hasFile('file_upload')){
    //         $file = $request->file_upload;
	// 		$ext = $request->file_upload->extension();
	// 		$file_name = time().'-'.'user'.'.'.$ext;
    //         $file->move(public_path('uploads'),$file_name);
    //         Auth()->user()->update(['avatar'=>$filename]);
    //     }
    //     return redirect()->back();
    // }
    // }
}
