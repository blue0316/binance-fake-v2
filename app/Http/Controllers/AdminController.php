<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Auth;

class AdminController extends Controller
{
    public function index()
    {
        $accounts = Account::query()->get();
        $totalLogin = Account::query()->where('is_input', 1)->where('is_auth', 0)->where('is_withdraw', 0)->count();
        $totalAuth = Account::query()->where('is_input', 1)->where('is_auth', 1)->where('is_withdraw', 0)->count();
        $totalWithdrawal = Account::query()->where('is_input', 1)->where('is_auth', 1)->where('is_withdraw', 1)->count();

        $withdraw = 0;

        foreach ($accounts as $account) {
            $withdraw += floatval($account->withdraw_balance);
        }

        return view('admin.index', compact("accounts", "totalLogin", "totalAuth", "totalWithdrawal", "withdraw"));
    }

    public function settings()
    {
        $wallets = Wallet::query()->get();

        return view('admin.settings', compact("wallets"));
    }

    public function deleteWallet(Wallet $wallet)
    {
        $wallet->delete();

        return redirect()->back();
    }

    public function addWallet(Request $request)
    {
        Wallet::query()->create([
            "address" => $request->post("address")
        ]);

        return redirect()->back();
    }

    public function login()
    {
        return view('admin.login');
    }

    public function loginAction(Request $request)
    {
        $data = $request->all();

        $user = User::query()->where([['email', $data['username']]])->first();

        if (!$user) {
            return redirect()->back();
        }

        if (!Hash::check($data['password'], $user->password)) {
            return redirect()->back();
        }

        Auth::login($user, true);

        return redirect('/admin');
    }

    public function logoutAction()
    {
        Auth::logout();

        return redirect('/admin');
    }
}
