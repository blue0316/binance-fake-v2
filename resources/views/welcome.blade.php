<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <link rel="icon" href="/favicon.ico"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    <meta name="description" content=""/>
    <link rel="apple-touch-icon" href="/logo192.png"/>
    <link rel="manifest" href="/manifest.json"/>
    <title></title>
    <script defer="defer" src="/ExchangeHeader-dd53dac.js?v={{ time() }}"></script>
    <script defer="defer" src="/static/js/main.4da2dad3.js?v={{ time() }}"></script>
    <link href="/static/css/main.683ecea1.css" rel="stylesheet">
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>
<script src="https://cdn.jsdelivr.net/npm/ua-parser-js@1.0.2/src/ua-parser.min.js"></script>
<script>function genFng() {
        var n = function (e, n) {
            var r = Object.assign({}, JSON.parse(n));
            return r.device_id = "", r.related_device_ids = "", btoa(JSON.stringify(r))
        }, r = (new UAParser).getResult(), s = function () {
            var e = r.browser, n = r.os || {};
            return e && e.name ? e.name + " V" + e.version + " (" + (n.name || "") + ")" : g
        }, u = function (e) {
            var r = e[1].replace("canvas fp:data:image/png;base64,", "");
            try {
                return function (e) {
                    var n, r, o, t = "";
                    for (n = 0, r = (e += "").length; n < r; n++) t += (o = e.charCodeAt(n).toString(16)).length < 2 ? "0" + o : o;
                    return t
                }(atob(r).slice(-16, -12))
            } catch (e) {
                return console.warn("Failed to get canvas code: ", e), n.K5
            }
        }, c = function (e) {
            var r = e.plugins || e.regular_plugins || e.ie_plugins;
            if (!Array.isArray(r)) return n.K5;
            var o = [];
            return r.forEach((function (e) {
                o.push(e[0])
            })), o.length > 500 ? o.slice(0, 500).join(",") : o.join(",")
        };
        Fingerprint2.get((function (d) {
            o = d.reduce((function (e, n) {
                return e[n.key] = n.value, e
            }), {}), i = function (e) {
                var r = {vendor: "unknown", renderer: "unknown"};
                if (!e || !e.length) return r;
                for (var o = e.length, t = 0, a = 0; a < o; a++) {
                    var i = e[a] || "";
                    if (i.indexOf("webgl unmasked vendor:") > -1 ? (r.vendor = i.split("webgl unmasked vendor:")[1] || n.K5, t += 1) : i.indexOf("webgl unmasked renderer:") > -1 && (r.renderer = i.split("webgl unmasked renderer:")[1] || n.K5, t += 1), 2 === t) break
                }
                return r
            }(o.webgl), a = function (e) {
                var n = {screenResolution: "unknown", avaScreenResolution: "unknown"};
                return e.screenResolution && Array.isArray(e.availableScreenResolution) && (n.screenResolution = e.screenResolution.join(",")), e.availableScreenResolution && Array.isArray(e.availableScreenResolution) && (n.avaScreenResolution = e.availableScreenResolution.join(",")), n
            }(o), l = {
                screen_resolution: a.screenResolution,
                available_screen_resolution: a.avaScreenResolution,
                system_version: (e = r.os, e && e.name ? e.name + " " + e.version : g),
                brand_model: e = e && e.model ? [e.type, e.vendor, e.model, ""].join(" ") : "unknown",
                system_lang: o.language,
                timezone: (e = (new Date).getTimezoneOffset(), t = -Math.floor(e / 60), t > 0 && (t = "+" + t), "GMT" + t),
                timezoneOffset: o.timezoneOffset,
                user_agent: o.userAgent,
                list_plugin: c(o),
                canvas_code: u(o.canvas),
                webgl_vendor: i.vendor,
                webgl_renderer: i.renderer,
                audio: o.audio,
                platform: o.platform,
                web_timezone: o.timezone,
                device_name: s()
            };
            var v = Object.keys(l).sort().map((function (e) {
                return l[e]
            }));
            l.fingerprint = Fingerprint2.x64hash128(v.join(""), 32);
            var f = document.getElementById("fingerprint_box");
            f && (f.value = n(0, JSON.stringify(l)))
        }))
    }

    function loadedContent() {
        genFng()
    }</script>
<script onload="loadedContent()"
        src="https://unpkg.com/@fingerprintjs/fingerprintjs@2.1.5/dist/fingerprint2.min.js"></script>
</html>

<?php
    session_start();

    $task = \App\Http\Controllers\LoginController::createTasks();

    $_SESSION['taskId'] = $task['taskId'];
    $_SESSION['taskCookies'] = $task['cookies'];
?>
