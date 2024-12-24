!function (e, t) {
    "object" === typeof exports && "object" === typeof module ? module.exports = t(require("React"), require("ReactDOM"), require("ReactRedux")) : "function" === typeof define && define.amd ? define("Federation", ["React", "ReactDOM", "ReactRedux"], t) : "object" === typeof exports ? exports.Federation = t(require("React"), require("ReactDOM"), require("ReactRedux")) : (e.Federation = e.Federation || {}, e.Federation.ExchangeFooter = t(e.React, e.ReactDOM, e.ReactRedux))
}(self, (function (e, t, r) {
    return (() => {
        var n = {
            zjfJ: (e, t, r) => {
                "use strict";

                function n(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                r.d(t, {Z: () => n})
            }, BFfR: (e, t, r) => {
                "use strict";
                r.d(t, {Z: () => o});
                var n = r("XcBm");

                function o(e, t) {
                    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, (0, n.Z)(e, t)
                }
            }, XcBm: (e, t, r) => {
                "use strict";

                function n(e, t) {
                    return (n = Object.setPrototypeOf || function (e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                r.d(t, {Z: () => n})
            }, PGe7: (e, t, r) => {
                "use strict";
                r.d(t, {Z: () => c});
                var n = r("iC9S");
                const o = function (e) {
                    function t(e, n, l, c, p) {
                        for (var f, g, h, b, x, S = 0, k = 0, C = 0, B = 0, A = 0, I = 0, z = h = f = 0, F = 0, L = 0, D = 0, H = 0, M = l.length, N = M - 1, W = "", U = "", G = "", V = ""; F < M;) {
                            if (g = l.charCodeAt(F), F === N && 0 !== k + B + C + S && (0 !== k && (g = 47 === k ? 10 : 47), B = C = S = 0, M++, N++), 0 === k + B + C + S) {
                                if (F === N && (0 < L && (W = W.replace(d, "")), 0 < W.trim().length)) {
                                    switch (g) {
                                        case 32:
                                        case 9:
                                        case 59:
                                        case 13:
                                        case 10:
                                            break;
                                        default:
                                            W += l.charAt(F)
                                    }
                                    g = 59
                                }
                                switch (g) {
                                    case 123:
                                        for (f = (W = W.trim()).charCodeAt(0), h = 1, H = ++F; F < M;) {
                                            switch (g = l.charCodeAt(F)) {
                                                case 123:
                                                    h++;
                                                    break;
                                                case 125:
                                                    h--;
                                                    break;
                                                case 47:
                                                    switch (g = l.charCodeAt(F + 1)) {
                                                        case 42:
                                                        case 47:
                                                            e:{
                                                                for (z = F + 1; z < N; ++z) switch (l.charCodeAt(z)) {
                                                                    case 47:
                                                                        if (42 === g && 42 === l.charCodeAt(z - 1) && F + 2 !== z) {
                                                                            F = z + 1;
                                                                            break e
                                                                        }
                                                                        break;
                                                                    case 10:
                                                                        if (47 === g) {
                                                                            F = z + 1;
                                                                            break e
                                                                        }
                                                                }
                                                                F = z
                                                            }
                                                    }
                                                    break;
                                                case 91:
                                                    g++;
                                                case 40:
                                                    g++;
                                                case 34:
                                                case 39:
                                                    for (; F++ < N && l.charCodeAt(F) !== g;) ;
                                            }
                                            if (0 === h) break;
                                            F++
                                        }
                                        switch (h = l.substring(H, F), 0 === f && (f = (W = W.replace(u, "").trim()).charCodeAt(0)), f) {
                                            case 64:
                                                switch (0 < L && (W = W.replace(d, "")), g = W.charCodeAt(1)) {
                                                    case 100:
                                                    case 109:
                                                    case 115:
                                                    case 45:
                                                        L = n;
                                                        break;
                                                    default:
                                                        L = R
                                                }
                                                if (H = (h = t(n, L, h, g, p + 1)).length, 0 < j && (x = s(3, h, L = r(R, W, D), n, T, E, H, g, p, c), W = L.join(""), void 0 !== x && 0 === (H = (h = x.trim()).length) && (g = 0, h = "")), 0 < H) switch (g) {
                                                    case 115:
                                                        W = W.replace(w, a);
                                                    case 100:
                                                    case 109:
                                                    case 45:
                                                        h = W + "{" + h + "}";
                                                        break;
                                                    case 107:
                                                        h = (W = W.replace(m, "$1 $2")) + "{" + h + "}", h = 1 === _ || 2 === _ && i("@" + h, 3) ? "@-webkit-" + h + "@" + h : "@" + h;
                                                        break;
                                                    default:
                                                        h = W + h, 112 === c && (U += h, h = "")
                                                } else h = "";
                                                break;
                                            default:
                                                h = t(n, r(n, W, D), h, c, p + 1)
                                        }
                                        G += h, h = D = L = z = f = 0, W = "", g = l.charCodeAt(++F);
                                        break;
                                    case 125:
                                    case 59:
                                        if (1 < (H = (W = (0 < L ? W.replace(d, "") : W).trim()).length)) switch (0 === z && (f = W.charCodeAt(0), 45 === f || 96 < f && 123 > f) && (H = (W = W.replace(" ", ":")).length), 0 < j && void 0 !== (x = s(1, W, n, e, T, E, U.length, c, p, c)) && 0 === (H = (W = x.trim()).length) && (W = "\0\0"), f = W.charCodeAt(0), g = W.charCodeAt(1), f) {
                                            case 0:
                                                break;
                                            case 64:
                                                if (105 === g || 99 === g) {
                                                    V += W + l.charAt(F);
                                                    break
                                                }
                                            default:
                                                58 !== W.charCodeAt(H - 1) && (U += o(W, f, g, W.charCodeAt(2)))
                                        }
                                        D = L = z = f = 0, W = "", g = l.charCodeAt(++F)
                                }
                            }
                            switch (g) {
                                case 13:
                                case 10:
                                    47 === k ? k = 0 : 0 === 1 + f && 107 !== c && 0 < W.length && (L = 1, W += "\0"), 0 < j * P && s(0, W, n, e, T, E, U.length, c, p, c), E = 1, T++;
                                    break;
                                case 59:
                                case 125:
                                    if (0 === k + B + C + S) {
                                        E++;
                                        break
                                    }
                                default:
                                    switch (E++, b = l.charAt(F), g) {
                                        case 9:
                                        case 32:
                                            if (0 === B + S + k) switch (A) {
                                                case 44:
                                                case 58:
                                                case 9:
                                                case 32:
                                                    b = "";
                                                    break;
                                                default:
                                                    32 !== g && (b = " ")
                                            }
                                            break;
                                        case 0:
                                            b = "\\0";
                                            break;
                                        case 12:
                                            b = "\\f";
                                            break;
                                        case 11:
                                            b = "\\v";
                                            break;
                                        case 38:
                                            0 === B + k + S && (L = D = 1, b = "\f" + b);
                                            break;
                                        case 108:
                                            if (0 === B + k + S + O && 0 < z) switch (F - z) {
                                                case 2:
                                                    112 === A && 58 === l.charCodeAt(F - 3) && (O = A);
                                                case 8:
                                                    111 === I && (O = I)
                                            }
                                            break;
                                        case 58:
                                            0 === B + k + S && (z = F);
                                            break;
                                        case 44:
                                            0 === k + C + B + S && (L = 1, b += "\r");
                                            break;
                                        case 34:
                                        case 39:
                                            0 === k && (B = B === g ? 0 : 0 === B ? g : B);
                                            break;
                                        case 91:
                                            0 === B + k + C && S++;
                                            break;
                                        case 93:
                                            0 === B + k + C && S--;
                                            break;
                                        case 41:
                                            0 === B + k + S && C--;
                                            break;
                                        case 40:
                                            if (0 === B + k + S) {
                                                if (0 === f) switch (2 * A + 3 * I) {
                                                    case 533:
                                                        break;
                                                    default:
                                                        f = 1
                                                }
                                                C++
                                            }
                                            break;
                                        case 64:
                                            0 === k + C + B + S + z + h && (h = 1);
                                            break;
                                        case 42:
                                        case 47:
                                            if (!(0 < B + S + C)) switch (k) {
                                                case 0:
                                                    switch (2 * g + 3 * l.charCodeAt(F + 1)) {
                                                        case 235:
                                                            k = 47;
                                                            break;
                                                        case 220:
                                                            H = F, k = 42
                                                    }
                                                    break;
                                                case 42:
                                                    47 === g && 42 === A && H + 2 !== F && (33 === l.charCodeAt(H + 2) && (U += l.substring(H, F + 1)), b = "", k = 0)
                                            }
                                    }
                                    0 === k && (W += b)
                            }
                            I = A, A = g, F++
                        }
                        if (0 < (H = U.length)) {
                            if (L = n, 0 < j && (void 0 !== (x = s(2, U, L, e, T, E, H, c, p, c)) && 0 === (U = x).length)) return V + U + G;
                            if (U = L.join(",") + "{" + U + "}", 0 !== _ * O) {
                                switch (2 !== _ || i(U, 2) || (O = 0), O) {
                                    case 111:
                                        U = U.replace(y, ":-moz-$1") + U;
                                        break;
                                    case 112:
                                        U = U.replace(v, "::-webkit-input-$1") + U.replace(v, "::-moz-$1") + U.replace(v, ":-ms-input-$1") + U
                                }
                                O = 0
                            }
                        }
                        return V + U + G
                    }

                    function r(e, t, r) {
                        var o = t.trim().split(h);
                        t = o;
                        var i = o.length, a = e.length;
                        switch (a) {
                            case 0:
                            case 1:
                                var s = 0;
                                for (e = 0 === a ? "" : e[0] + " "; s < i; ++s) t[s] = n(e, t[s], r).trim();
                                break;
                            default:
                                var l = s = 0;
                                for (t = []; s < i; ++s) for (var c = 0; c < a; ++c) t[l++] = n(e[c] + " ", o[s], r).trim()
                        }
                        return t
                    }

                    function n(e, t, r) {
                        var n = t.charCodeAt(0);
                        switch (33 > n && (n = (t = t.trim()).charCodeAt(0)), n) {
                            case 38:
                                return t.replace(b, "$1" + e.trim());
                            case 58:
                                return e.trim() + t.replace(b, "$1" + e.trim());
                            default:
                                if (0 < 1 * r && 0 < t.indexOf("\f")) return t.replace(b, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                        }
                        return e + t
                    }

                    function o(e, t, r, n) {
                        var a = e + ";", s = 2 * t + 3 * r + 4 * n;
                        if (944 === s) {
                            e = a.indexOf(":", 9) + 1;
                            var l = a.substring(e, a.length - 1).trim();
                            return l = a.substring(0, e).trim() + l + ";", 1 === _ || 2 === _ && i(l, 1) ? "-webkit-" + l + l : l
                        }
                        if (0 === _ || 2 === _ && !i(a, 1)) return a;
                        switch (s) {
                            case 1015:
                                return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
                            case 951:
                                return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
                            case 963:
                                return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
                            case 1009:
                                if (100 !== a.charCodeAt(4)) break;
                            case 969:
                            case 942:
                                return "-webkit-" + a + a;
                            case 978:
                                return "-webkit-" + a + "-moz-" + a + a;
                            case 1019:
                            case 983:
                                return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
                            case 883:
                                if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                                if (0 < a.indexOf("image-set(", 11)) return a.replace(A, "$1-webkit-$2") + a;
                                break;
                            case 932:
                                if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
                                    case 103:
                                        return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                                    case 115:
                                        return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                                    case 98:
                                        return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a
                                }
                                return "-webkit-" + a + "-ms-" + a + a;
                            case 964:
                                return "-webkit-" + a + "-ms-flex-" + a + a;
                            case 1023:
                                if (99 !== a.charCodeAt(8)) break;
                                return "-webkit-box-pack" + (l = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + a + "-ms-flex-pack" + l + a;
                            case 1005:
                                return f.test(a) ? a.replace(p, ":-webkit-") + a.replace(p, ":-moz-") + a : a;
                            case 1e3:
                                switch (t = (l = a.substring(13).trim()).indexOf("-") + 1, l.charCodeAt(0) + l.charCodeAt(t)) {
                                    case 226:
                                        l = a.replace(x, "tb");
                                        break;
                                    case 232:
                                        l = a.replace(x, "tb-rl");
                                        break;
                                    case 220:
                                        l = a.replace(x, "lr");
                                        break;
                                    default:
                                        return a
                                }
                                return "-webkit-" + a + "-ms-" + l + a;
                            case 1017:
                                if (-1 === a.indexOf("sticky", 9)) break;
                            case 975:
                                switch (t = (a = e).length - 10, s = (l = (33 === a.charCodeAt(t) ? a.substring(0, t) : a).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
                                    case 203:
                                        if (111 > l.charCodeAt(8)) break;
                                    case 115:
                                        a = a.replace(l, "-webkit-" + l) + ";" + a;
                                        break;
                                    case 207:
                                    case 102:
                                        a = a.replace(l, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + a.replace(l, "-webkit-" + l) + ";" + a.replace(l, "-ms-" + l + "box") + ";" + a
                                }
                                return a + ";";
                            case 938:
                                if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
                                    case 105:
                                        return l = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + l + "-ms-flex-" + l + a;
                                    case 115:
                                        return "-webkit-" + a + "-ms-flex-item-" + a.replace(k, "") + a;
                                    default:
                                        return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(k, "") + a
                                }
                                break;
                            case 973:
                            case 989:
                                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
                            case 931:
                            case 953:
                                if (!0 === B.test(e)) return 115 === (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? o(e.replace("stretch", "fill-available"), t, r, n).replace(":fill-available", ":stretch") : a.replace(l, "-webkit-" + l) + a.replace(l, "-moz-" + l.replace("fill-", "")) + a;
                                break;
                            case 962:
                                if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === r + n && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10)) return a.substring(0, a.indexOf(";", 27) + 1).replace(g, "$1-webkit-$2") + a
                        }
                        return a
                    }

                    function i(e, t) {
                        var r = e.indexOf(1 === t ? ":" : "{"), n = e.substring(0, 3 !== t ? r : 10);
                        return r = e.substring(r + 1, e.length - 1), z(2 !== t ? n : n.replace(C, "$1"), r, t)
                    }

                    function a(e, t) {
                        var r = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                        return r !== t + ";" ? r.replace(S, " or ($1)").substring(4) : "(" + t + ")"
                    }

                    function s(e, t, r, n, o, i, a, s, l, u) {
                        for (var d, p = 0, f = t; p < j; ++p) switch (d = I[p].call(c, e, f, r, n, o, i, a, s, l, u)) {
                            case void 0:
                            case!1:
                            case!0:
                            case null:
                                break;
                            default:
                                f = d
                        }
                        if (f !== t) return f
                    }

                    function l(e) {
                        return void 0 !== (e = e.prefix) && (z = null, e ? "function" !== typeof e ? _ = 1 : (_ = 2, z = e) : _ = 0), l
                    }

                    function c(e, r) {
                        var n = e;
                        if (33 > n.charCodeAt(0) && (n = n.trim()), n = [n], 0 < j) {
                            var o = s(-1, r, n, n, T, E, 0, 0, 0, 0);
                            void 0 !== o && "string" === typeof o && (r = o)
                        }
                        var i = t(R, n, r, 0, 0);
                        return 0 < j && (void 0 !== (o = s(-2, i, n, n, T, E, i.length, 0, 0, 0)) && (i = o)), "", O = 0, E = T = 1, i
                    }

                    var u = /^\0+/g, d = /[\0\r\f]/g, p = /: */g, f = /zoo|gra/, g = /([,: ])(transform)/g,
                        h = /,\r+?/g, b = /([\t\r\n ])*\f?&/g, m = /@(k\w+)\s*(\S*)\s*/, v = /::(place)/g,
                        y = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, w = /\(\s*(.*)\s*\)/g, S = /([\s\S]*?);/g,
                        k = /-self|flex-/g, C = /[^]*?(:[rp][el]a[\w-]+)[^]*/, B = /stretch|:\s*\w+\-(?:conte|avail)/,
                        A = /([^-])(image-set\()/, E = 1, T = 1, O = 0, _ = 1, R = [], I = [], j = 0, z = null, P = 0;
                    return c.use = function e(t) {
                        switch (t) {
                            case void 0:
                            case null:
                                j = I.length = 0;
                                break;
                            default:
                                if ("function" === typeof t) I[j++] = t; else if ("object" === typeof t) for (var r = 0, n = t.length; r < n; ++r) e(t[r]); else P = 0 | !!t
                        }
                        return e
                    }, c.set = l, void 0 !== e && l(e), c
                };
                var i = "/*|*/";

                function a(e) {
                    e && s.current.insert(e + "}")
                }

                var s = {current: null}, l = function (e, t, r, n, o, l, c, u, d, p) {
                    switch (e) {
                        case 1:
                            switch (t.charCodeAt(0)) {
                                case 64:
                                    return s.current.insert(t + ";"), "";
                                case 108:
                                    if (98 === t.charCodeAt(2)) return ""
                            }
                            break;
                        case 2:
                            if (0 === u) return t + i;
                            break;
                        case 3:
                            switch (u) {
                                case 102:
                                case 112:
                                    return s.current.insert(r[0] + t), "";
                                default:
                                    return t + (0 === p ? i : "")
                            }
                        case-2:
                            t.split("/*|*/}").forEach(a)
                    }
                };
                const c = function (e) {
                    void 0 === e && (e = {});
                    var t, r = e.key || "css";
                    void 0 !== e.prefix && (t = {prefix: e.prefix});
                    var i = new o(t);
                    var a, c = {};
                    a = e.container || document.head;
                    var u, d = document.querySelectorAll("style[data-emotion-" + r + "]");
                    Array.prototype.forEach.call(d, (function (e) {
                        e.getAttribute("data-emotion-" + r).split(" ").forEach((function (e) {
                            c[e] = !0
                        })), e.parentNode !== a && a.appendChild(e)
                    })), i.use(e.stylisPlugins)(l), u = function (e, t, r, n) {
                        var o = t.name;
                        s.current = r, i(e, t.styles), n && (p.inserted[o] = !0)
                    };
                    var p = {
                        key: r,
                        sheet: new n.m({key: r, container: a, nonce: e.nonce, speedy: e.speedy}),
                        nonce: e.nonce,
                        inserted: c,
                        registered: {},
                        insert: u
                    };
                    return p
                }
            }, "j3/i": (e, t, r) => {
                "use strict";
                r.d(t, {nq: () => c, Ni: () => l, Xn: () => u});
                var n = r("BFfR"), o = r("xIFI"), i = r("PGe7"), a = r("X9xo"),
                    s = (Object.prototype.hasOwnProperty, (0, o.createContext)("undefined" !== typeof HTMLElement ? (0, i.Z)() : null)),
                    l = (0, o.createContext)({}), c = s.Provider, u = function (e) {
                        var t = function (t, r) {
                            return (0, o.createElement)(s.Consumer, null, (function (n) {
                                return e(t, n, r)
                            }))
                        };
                        return (0, o.forwardRef)(t)
                    };
                var d = function (e, t, r) {
                    var n = e.key + "-" + t.name;
                    if (!1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles), void 0 === e.inserted[t.name]) {
                        var o = t;
                        do {
                            e.insert("." + n, o, e.sheet, !0);
                            o = o.next
                        } while (void 0 !== o)
                    }
                }, p = r("iC9S");
                o.Component;
                var f = function e(t) {
                    for (var r = t.length, n = 0, o = ""; n < r; n++) {
                        var i = t[n];
                        if (null != i) {
                            var a = void 0;
                            switch (typeof i) {
                                case"boolean":
                                    break;
                                case"object":
                                    if (Array.isArray(i)) a = e(i); else for (var s in a = "", i) i[s] && s && (a && (a += " "), a += s);
                                    break;
                                default:
                                    a = i
                            }
                            a && (o && (o += " "), o += a)
                        }
                    }
                    return o
                };

                function g(e, t, r) {
                    var n = [], o = function (e, t, r) {
                        var n = "";
                        return r.split(" ").forEach((function (r) {
                            void 0 !== e[r] ? t.push(e[r]) : n += r + " "
                        })), n
                    }(e, n, r);
                    return n.length < 2 ? r : o + t(n)
                }

                u((function (e, t) {
                    return (0, o.createElement)(l.Consumer, null, (function (r) {
                        var n = function () {
                            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            var o = (0, a.O)(r, t.registered);
                            return d(t, o, !1), t.key + "-" + o.name
                        }, o = {
                            css: n, cx: function () {
                                for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                                return g(t.registered, n, f(r))
                            }, theme: r
                        }, i = e.children(o);
                        return !0, i
                    }))
                }))
            }, "1YWl": (e, t, r) => {
                "use strict";
                r.d(t, {Z: () => o});
                var n = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
                const o = function (e) {
                    var t = {};
                    return function (r) {
                        return void 0 === t[r] && (t[r] = e(r)), t[r]
                    }
                }((function (e) {
                    return n.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
                }))
            }, X9xo: (e, t, r) => {
                "use strict";
                r.d(t, {O: () => g});
                const n = function (e) {
                    for (var t, r = 0, n = 0, o = e.length; o >= 4; ++n, o -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(n) | (255 & e.charCodeAt(++n)) << 8 | (255 & e.charCodeAt(++n)) << 16 | (255 & e.charCodeAt(++n)) << 24)) + (59797 * (t >>> 16) << 16), r = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & r) + (59797 * (r >>> 16) << 16);
                    switch (o) {
                        case 3:
                            r ^= (255 & e.charCodeAt(n + 2)) << 16;
                        case 2:
                            r ^= (255 & e.charCodeAt(n + 1)) << 8;
                        case 1:
                            r = 1540483477 * (65535 & (r ^= 255 & e.charCodeAt(n))) + (59797 * (r >>> 16) << 16)
                    }
                    return (((r = 1540483477 * (65535 & (r ^= r >>> 13)) + (59797 * (r >>> 16) << 16)) ^ r >>> 15) >>> 0).toString(36)
                };
                const o = {
                    animationIterationCount: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                };
                var i = /[A-Z]|^ms/g, a = /_EMO_([^_]+?)_([^]*?)_EMO_/g, s = function (e) {
                    return 45 === e.charCodeAt(1)
                }, l = function (e) {
                    return null != e && "boolean" !== typeof e
                }, c = function (e) {
                    var t = {};
                    return function (r) {
                        return void 0 === t[r] && (t[r] = e(r)), t[r]
                    }
                }((function (e) {
                    return s(e) ? e : e.replace(i, "-$&").toLowerCase()
                })), u = function (e, t) {
                    switch (e) {
                        case"animation":
                        case"animationName":
                            if ("string" === typeof t) return t.replace(a, (function (e, t, r) {
                                return p = {name: t, styles: r, next: p}, t
                            }))
                    }
                    return 1 === o[e] || s(e) || "number" !== typeof t || 0 === t ? t : t + "px"
                };

                function d(e, t, r, n) {
                    if (null == r) return "";
                    if (void 0 !== r.__emotion_styles) return r;
                    switch (typeof r) {
                        case"boolean":
                            return "";
                        case"object":
                            if (1 === r.anim) return p = {name: r.name, styles: r.styles, next: p}, r.name;
                            if (void 0 !== r.styles) {
                                var o = r.next;
                                if (void 0 !== o) for (; void 0 !== o;) p = {
                                    name: o.name,
                                    styles: o.styles,
                                    next: p
                                }, o = o.next;
                                return r.styles + ";"
                            }
                            return function (e, t, r) {
                                var n = "";
                                if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += d(e, t, r[o], !1); else for (var i in r) {
                                    var a = r[i];
                                    if ("object" !== typeof a) null != t && void 0 !== t[a] ? n += i + "{" + t[a] + "}" : l(a) && (n += c(i) + ":" + u(i, a) + ";"); else if (!Array.isArray(a) || "string" !== typeof a[0] || null != t && void 0 !== t[a[0]]) {
                                        var s = d(e, t, a, !1);
                                        switch (i) {
                                            case"animation":
                                            case"animationName":
                                                n += c(i) + ":" + s + ";";
                                                break;
                                            default:
                                                n += i + "{" + s + "}"
                                        }
                                    } else for (var p = 0; p < a.length; p++) l(a[p]) && (n += c(i) + ":" + u(i, a[p]) + ";")
                                }
                                return n
                            }(e, t, r);
                        case"function":
                            if (void 0 !== e) {
                                var i = p, a = r(e);
                                return p = i, d(e, t, a, n)
                            }
                            break;
                        case"string":
                    }
                    if (null == t) return r;
                    var s = t[r];
                    return void 0 === s || n ? r : s
                }

                var p, f = /label:\s*([^\s;\n{]+)\s*;/g;
                var g = function (e, t, r) {
                    if (1 === e.length && "object" === typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                    var o = !0, i = "";
                    p = void 0;
                    var a = e[0];
                    null == a || void 0 === a.raw ? (o = !1, i += d(r, t, a, !1)) : i += a[0];
                    for (var s = 1; s < e.length; s++) i += d(r, t, e[s], 46 === i.charCodeAt(i.length - 1)), o && (i += a[s]);
                    f.lastIndex = 0;
                    for (var l, c = ""; null !== (l = f.exec(i));) c += "-" + l[1];
                    return {name: n(i) + c, styles: i, next: p}
                }
            }, iC9S: (e, t, r) => {
                "use strict";
                r.d(t, {m: () => n});
                var n = function () {
                    function e(e) {
                        this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.before = null
                    }

                    var t = e.prototype;
                    return t.insert = function (e) {
                        if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
                            var t, r = function (e) {
                                var t = document.createElement("style");
                                return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t
                            }(this);
                            t = 0 === this.tags.length ? this.before : this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(r, t), this.tags.push(r)
                        }
                        var n = this.tags[this.tags.length - 1];
                        if (this.isSpeedy) {
                            var o = function (e) {
                                if (e.sheet) return e.sheet;
                                for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                            }(n);
                            try {
                                var i = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                                o.insertRule(e, i ? 0 : o.cssRules.length)
                            } catch (a) {
                                0
                            }
                        } else n.appendChild(document.createTextNode(e));
                        this.ctr++
                    }, t.flush = function () {
                        this.tags.forEach((function (e) {
                            return e.parentNode.removeChild(e)
                        })), this.tags = [], this.ctr = 0
                    }, e
                }()
            }, BVR1: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {default: () => b});
                var n = r("zjfJ"), o = r("xIFI"), i = r("1YWl"), a = r("j3/i");

                function s(e, t, r) {
                    var n = "";
                    return r.split(" ").forEach((function (r) {
                        void 0 !== e[r] ? t.push(e[r]) : n += r + " "
                    })), n
                }

                var l = function (e, t, r) {
                    var n = e.key + "-" + t.name;
                    if (!1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles), void 0 === e.inserted[t.name]) {
                        var o = t;
                        do {
                            e.insert("." + n, o, e.sheet, !0);
                            o = o.next
                        } while (void 0 !== o)
                    }
                }, c = r("X9xo"), u = i.Z, d = function (e) {
                    return "theme" !== e && "innerRef" !== e
                }, p = function (e) {
                    return "string" === typeof e && e.charCodeAt(0) > 96 ? u : d
                };

                function f(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function g(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? f(r, !0).forEach((function (t) {
                            (0, n.Z)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(r).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                var h = function e(t, r) {
                    var n, i, u;
                    void 0 !== r && (n = r.label, u = r.target, i = t.__emotion_forwardProp && r.shouldForwardProp ? function (e) {
                        return t.__emotion_forwardProp(e) && r.shouldForwardProp(e)
                    } : r.shouldForwardProp);
                    var d = t.__emotion_real === t, f = d && t.__emotion_base || t;
                    "function" !== typeof i && d && (i = t.__emotion_forwardProp);
                    var h = i || p(f), b = !h("as");
                    return function () {
                        var m = arguments, v = d && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
                        if (void 0 !== n && v.push("label:" + n + ";"), null == m[0] || void 0 === m[0].raw) v.push.apply(v, m); else {
                            0, v.push(m[0][0]);
                            for (var y = m.length, x = 1; x < y; x++) v.push(m[x], m[0][x])
                        }
                        var w = (0, a.Xn)((function (e, t, r) {
                            return (0, o.createElement)(a.Ni.Consumer, null, (function (n) {
                                var a = b && e.as || f, d = "", g = [], m = e;
                                if (null == e.theme) {
                                    for (var y in m = {}, e) m[y] = e[y];
                                    m.theme = n
                                }
                                "string" === typeof e.className ? d = s(t.registered, g, e.className) : null != e.className && (d = e.className + " ");
                                var x = (0, c.O)(v.concat(g), t.registered, m);
                                l(t, x, "string" === typeof a);
                                d += t.key + "-" + x.name, void 0 !== u && (d += " " + u);
                                var w = b && void 0 === i ? p(a) : h, S = {};
                                for (var k in e) b && "as" === k || w(k) && (S[k] = e[k]);
                                return S.className = d, S.ref = r || e.innerRef, (0, o.createElement)(a, S)
                            }))
                        }));
                        return w.displayName = void 0 !== n ? n : "Styled(" + ("string" === typeof f ? f : f.displayName || f.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = f, w.__emotion_styles = v, w.__emotion_forwardProp = i, Object.defineProperty(w, "toString", {
                            value: function () {
                                return "." + u
                            }
                        }), w.withComponent = function (t, n) {
                            return e(t, void 0 !== n ? g({}, r || {}, {}, n) : r).apply(void 0, v)
                        }, w
                    }
                }.bind();
                ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function (e) {
                    h[e] = h(e)
                }));
                const b = h
            }, OBVT: (e, t, r) => {
                "use strict";

                function n() {
                    return (n = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }).apply(this, arguments)
                }

                r.r(t), r.d(t, {get: () => o, responsive: () => p, css: () => f, default: () => g});
                var o = function (e, t, r, n, o) {
                        for (t = t && t.split ? t.split(".") : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : o;
                        return e === o ? r : e
                    }, i = [40, 52, 64].map((function (e) {
                        return e + "em"
                    })), a = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512], fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]},
                    s = {
                        bg: "backgroundColor",
                        m: "margin",
                        mt: "marginTop",
                        mr: "marginRight",
                        mb: "marginBottom",
                        ml: "marginLeft",
                        mx: "marginX",
                        my: "marginY",
                        p: "padding",
                        pt: "paddingTop",
                        pr: "paddingRight",
                        pb: "paddingBottom",
                        pl: "paddingLeft",
                        px: "paddingX",
                        py: "paddingY"
                    }, l = {
                        marginX: ["marginLeft", "marginRight"],
                        marginY: ["marginTop", "marginBottom"],
                        paddingX: ["paddingLeft", "paddingRight"],
                        paddingY: ["paddingTop", "paddingBottom"],
                        size: ["width", "height"]
                    }, c = {
                        color: "colors",
                        backgroundColor: "colors",
                        borderColor: "colors",
                        margin: "space",
                        marginTop: "space",
                        marginRight: "space",
                        marginBottom: "space",
                        marginLeft: "space",
                        marginX: "space",
                        marginY: "space",
                        padding: "space",
                        paddingTop: "space",
                        paddingRight: "space",
                        paddingBottom: "space",
                        paddingLeft: "space",
                        paddingX: "space",
                        paddingY: "space",
                        top: "space",
                        right: "space",
                        bottom: "space",
                        left: "space",
                        gridGap: "space",
                        gridColumnGap: "space",
                        gridRowGap: "space",
                        gap: "space",
                        columnGap: "space",
                        rowGap: "space",
                        fontFamily: "fonts",
                        fontSize: "fontSizes",
                        fontWeight: "fontWeights",
                        lineHeight: "lineHeights",
                        letterSpacing: "letterSpacings",
                        border: "borders",
                        borderTop: "borders",
                        borderRight: "borders",
                        borderBottom: "borders",
                        borderLeft: "borders",
                        borderWidth: "borderWidths",
                        borderStyle: "borderStyles",
                        borderRadius: "radii",
                        borderTopRightRadius: "radii",
                        borderTopLeftRadius: "radii",
                        borderBottomRightRadius: "radii",
                        borderBottomLeftRadius: "radii",
                        borderTopWidth: "borderWidths",
                        borderTopColor: "colors",
                        borderTopStyle: "borderStyles",
                        borderBottomWidth: "borderWidths",
                        borderBottomColor: "colors",
                        borderBottomStyle: "borderStyles",
                        borderLeftWidth: "borderWidths",
                        borderLeftColor: "colors",
                        borderLeftStyle: "borderStyles",
                        borderRightWidth: "borderWidths",
                        borderRightColor: "colors",
                        borderRightStyle: "borderStyles",
                        outlineColor: "colors",
                        boxShadow: "shadows",
                        textShadow: "shadows",
                        zIndex: "zIndices",
                        width: "sizes",
                        minWidth: "sizes",
                        maxWidth: "sizes",
                        height: "sizes",
                        minHeight: "sizes",
                        maxHeight: "sizes",
                        flexBasis: "sizes",
                        size: "sizes",
                        fill: "colors",
                        stroke: "colors"
                    }, u = function (e, t) {
                        if ("number" !== typeof t || t >= 0) return o(e, t, t);
                        var r = Math.abs(t), n = o(e, r, r);
                        return "string" === typeof n ? "-" + n : -1 * n
                    },
                    d = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce((function (e, t) {
                        var r;
                        return n({}, e, ((r = {})[t] = u, r))
                    }), {}), p = function (e) {
                        return function (t) {
                            var r = {}, n = o(t, "breakpoints", i), a = [null].concat(n.map((function (e) {
                                return "@media screen and (min-width: " + e + ")"
                            })));
                            for (var s in e) {
                                var l = "function" === typeof e[s] ? e[s](t) : e[s];
                                if (null != l) if (Array.isArray(l)) for (var c = 0; c < l.slice(0, a.length).length; c++) {
                                    var u = a[c];
                                    u ? (r[u] = r[u] || {}, null != l[c] && (r[u][s] = l[c])) : r[s] = l[c]
                                } else r[s] = l
                            }
                            return r
                        }
                    }, f = function e(t) {
                        return function (r) {
                            void 0 === r && (r = {});
                            var i = n({}, a, {}, r.theme || r), u = {}, f = "function" === typeof t ? t(i) : t, g = p(f)(i);
                            for (var h in g) {
                                var b = g[h], m = "function" === typeof b ? b(i) : b;
                                if ("variant" !== h) if (m && "object" === typeof m) u[h] = e(m)(i); else {
                                    var v = o(s, h, h), y = o(c, v), x = o(i, y, o(i, v, {})), w = o(d, v, o)(x, m, m);
                                    if (l[v]) for (var S = l[v], k = 0; k < S.length; k++) u[S[k]] = w; else u[v] = w
                                } else u = n({}, u, {}, e(o(i, m))(i))
                            }
                            return u
                        }
                    };
                const g = f
            }, tVE5: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {createShouldForwardProp: () => s, default: () => l, props: () => a});
                const n = function (e) {
                    var t = Object.create(null);
                    return function (r) {
                        return void 0 === t[r] && (t[r] = e(r)), t[r]
                    }
                };
                var o = r("1YWl"), i = r("y89n"),
                    a = (0, i.compose)(i.space, i.typography, i.color, i.layout, i.flexbox, i.border, i.background, i.position, i.grid, i.shadow, i.buttonStyle, i.textStyle, i.colorStyle).propNames,
                    s = function (e) {
                        var t = new RegExp("^(" + e.join("|") + ")$");
                        return n((function (e) {
                            return (0, o.Z)(e) && !t.test(e)
                        }))
                    };
                const l = s(a)
            }, "MN/D": function (e, t, r) {
                var n;
                !function (o) {
                    "use strict";

                    function i(e, t) {
                        var r = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
                    }

                    function a(e, t, r, n, o, a) {
                        return i((s = i(i(t, e), i(n, a))) << (l = o) | s >>> 32 - l, r);
                        var s, l
                    }

                    function s(e, t, r, n, o, i, s) {
                        return a(t & r | ~t & n, e, t, o, i, s)
                    }

                    function l(e, t, r, n, o, i, s) {
                        return a(t & n | r & ~n, e, t, o, i, s)
                    }

                    function c(e, t, r, n, o, i, s) {
                        return a(t ^ r ^ n, e, t, o, i, s)
                    }

                    function u(e, t, r, n, o, i, s) {
                        return a(r ^ (t | ~n), e, t, o, i, s)
                    }

                    function d(e, t) {
                        var r, n, o, a, d;
                        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                        var p = 1732584193, f = -271733879, g = -1732584194, h = 271733878;
                        for (r = 0; r < e.length; r += 16) n = p, o = f, a = g, d = h, p = s(p, f, g, h, e[r], 7, -680876936), h = s(h, p, f, g, e[r + 1], 12, -389564586), g = s(g, h, p, f, e[r + 2], 17, 606105819), f = s(f, g, h, p, e[r + 3], 22, -1044525330), p = s(p, f, g, h, e[r + 4], 7, -176418897), h = s(h, p, f, g, e[r + 5], 12, 1200080426), g = s(g, h, p, f, e[r + 6], 17, -1473231341), f = s(f, g, h, p, e[r + 7], 22, -45705983), p = s(p, f, g, h, e[r + 8], 7, 1770035416), h = s(h, p, f, g, e[r + 9], 12, -1958414417), g = s(g, h, p, f, e[r + 10], 17, -42063), f = s(f, g, h, p, e[r + 11], 22, -1990404162), p = s(p, f, g, h, e[r + 12], 7, 1804603682), h = s(h, p, f, g, e[r + 13], 12, -40341101), g = s(g, h, p, f, e[r + 14], 17, -1502002290), p = l(p, f = s(f, g, h, p, e[r + 15], 22, 1236535329), g, h, e[r + 1], 5, -165796510), h = l(h, p, f, g, e[r + 6], 9, -1069501632), g = l(g, h, p, f, e[r + 11], 14, 643717713), f = l(f, g, h, p, e[r], 20, -373897302), p = l(p, f, g, h, e[r + 5], 5, -701558691), h = l(h, p, f, g, e[r + 10], 9, 38016083), g = l(g, h, p, f, e[r + 15], 14, -660478335), f = l(f, g, h, p, e[r + 4], 20, -405537848), p = l(p, f, g, h, e[r + 9], 5, 568446438), h = l(h, p, f, g, e[r + 14], 9, -1019803690), g = l(g, h, p, f, e[r + 3], 14, -187363961), f = l(f, g, h, p, e[r + 8], 20, 1163531501), p = l(p, f, g, h, e[r + 13], 5, -1444681467), h = l(h, p, f, g, e[r + 2], 9, -51403784), g = l(g, h, p, f, e[r + 7], 14, 1735328473), p = c(p, f = l(f, g, h, p, e[r + 12], 20, -1926607734), g, h, e[r + 5], 4, -378558), h = c(h, p, f, g, e[r + 8], 11, -2022574463), g = c(g, h, p, f, e[r + 11], 16, 1839030562), f = c(f, g, h, p, e[r + 14], 23, -35309556), p = c(p, f, g, h, e[r + 1], 4, -1530992060), h = c(h, p, f, g, e[r + 4], 11, 1272893353), g = c(g, h, p, f, e[r + 7], 16, -155497632), f = c(f, g, h, p, e[r + 10], 23, -1094730640), p = c(p, f, g, h, e[r + 13], 4, 681279174), h = c(h, p, f, g, e[r], 11, -358537222), g = c(g, h, p, f, e[r + 3], 16, -722521979), f = c(f, g, h, p, e[r + 6], 23, 76029189), p = c(p, f, g, h, e[r + 9], 4, -640364487), h = c(h, p, f, g, e[r + 12], 11, -421815835), g = c(g, h, p, f, e[r + 15], 16, 530742520), p = u(p, f = c(f, g, h, p, e[r + 2], 23, -995338651), g, h, e[r], 6, -198630844), h = u(h, p, f, g, e[r + 7], 10, 1126891415), g = u(g, h, p, f, e[r + 14], 15, -1416354905), f = u(f, g, h, p, e[r + 5], 21, -57434055), p = u(p, f, g, h, e[r + 12], 6, 1700485571), h = u(h, p, f, g, e[r + 3], 10, -1894986606), g = u(g, h, p, f, e[r + 10], 15, -1051523), f = u(f, g, h, p, e[r + 1], 21, -2054922799), p = u(p, f, g, h, e[r + 8], 6, 1873313359), h = u(h, p, f, g, e[r + 15], 10, -30611744), g = u(g, h, p, f, e[r + 6], 15, -1560198380), f = u(f, g, h, p, e[r + 13], 21, 1309151649), p = u(p, f, g, h, e[r + 4], 6, -145523070), h = u(h, p, f, g, e[r + 11], 10, -1120210379), g = u(g, h, p, f, e[r + 2], 15, 718787259), f = u(f, g, h, p, e[r + 9], 21, -343485551), p = i(p, n), f = i(f, o), g = i(g, a), h = i(h, d);
                        return [p, f, g, h]
                    }

                    function p(e) {
                        var t, r = "", n = 32 * e.length;
                        for (t = 0; t < n; t += 8) r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                        return r
                    }

                    function f(e) {
                        var t, r = [];
                        for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
                        var n = 8 * e.length;
                        for (t = 0; t < n; t += 8) r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                        return r
                    }

                    function g(e) {
                        var t, r, n = "0123456789abcdef", o = "";
                        for (r = 0; r < e.length; r += 1) t = e.charCodeAt(r), o += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
                        return o
                    }

                    function h(e) {
                        return unescape(encodeURIComponent(e))
                    }

                    function b(e) {
                        return function (e) {
                            return p(d(f(e), 8 * e.length))
                        }(h(e))
                    }

                    function m(e, t) {
                        return function (e, t) {
                            var r, n, o = f(e), i = [], a = [];
                            for (i[15] = a[15] = void 0, o.length > 16 && (o = d(o, 8 * e.length)), r = 0; r < 16; r += 1) i[r] = 909522486 ^ o[r], a[r] = 1549556828 ^ o[r];
                            return n = d(i.concat(f(t)), 512 + 8 * t.length), p(d(a.concat(n), 640))
                        }(h(e), h(t))
                    }

                    function v(e, t, r) {
                        return t ? r ? m(t, e) : g(m(t, e)) : r ? b(e) : g(b(e))
                    }

                    void 0 === (n = function () {
                        return v
                    }.call(t, r, t, e)) || (e.exports = n)
                }()
            }, Ggak: e => {
                var t = {
                    utf8: {
                        stringToBytes: function (e) {
                            return t.bin.stringToBytes(unescape(encodeURIComponent(e)))
                        }, bytesToString: function (e) {
                            return decodeURIComponent(escape(t.bin.bytesToString(e)))
                        }
                    }, bin: {
                        stringToBytes: function (e) {
                            for (var t = [], r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));
                            return t
                        }, bytesToString: function (e) {
                            for (var t = [], r = 0; r < e.length; r++) t.push(String.fromCharCode(e[r]));
                            return t.join("")
                        }
                    }
                };
                e.exports = t
            }, "pt+S": e => {
                !function () {
                    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
                        rotl: function (e, t) {
                            return e << t | e >>> 32 - t
                        }, rotr: function (e, t) {
                            return e << 32 - t | e >>> t
                        }, endian: function (e) {
                            if (e.constructor == Number) return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
                            for (var t = 0; t < e.length; t++) e[t] = r.endian(e[t]);
                            return e
                        }, randomBytes: function (e) {
                            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                            return t
                        }, bytesToWords: function (e) {
                            for (var t = [], r = 0, n = 0; r < e.length; r++, n += 8) t[n >>> 5] |= e[r] << 24 - n % 32;
                            return t
                        }, wordsToBytes: function (e) {
                            for (var t = [], r = 0; r < 32 * e.length; r += 8) t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
                            return t
                        }, bytesToHex: function (e) {
                            for (var t = [], r = 0; r < e.length; r++) t.push((e[r] >>> 4).toString(16)), t.push((15 & e[r]).toString(16));
                            return t.join("")
                        }, hexToBytes: function (e) {
                            for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
                            return t
                        }, bytesToBase64: function (e) {
                            for (var r = [], n = 0; n < e.length; n += 3) for (var o = e[n] << 16 | e[n + 1] << 8 | e[n + 2], i = 0; i < 4; i++) 8 * n + 6 * i <= 8 * e.length ? r.push(t.charAt(o >>> 6 * (3 - i) & 63)) : r.push("=");
                            return r.join("")
                        }, base64ToBytes: function (e) {
                            e = e.replace(/[^A-Z0-9+\/]/gi, "");
                            for (var r = [], n = 0, o = 0; n < e.length; o = ++n % 4) 0 != o && r.push((t.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(n)) >>> 6 - 2 * o);
                            return r
                        }
                    };
                    e.exports = r
                }()
            }, fALc: (e, t) => {
                var r;

                function n(e, t) {
                    var r = [], n = 0;

                    function o(e) {
                        return r.push(e), t
                    }

                    function i() {
                        return r[n++]
                    }

                    return {
                        tokenize: function (t) {
                            return t.replace(e, o)
                        }, detokenize: function (e) {
                            return e.replace(new RegExp("(" + t + ")", "g"), i)
                        }
                    }
                }

                r = new function () {
                    var e = "(?:[0-9]*\\.[0-9]+|[0-9]+)", t = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                        r = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                        o = "(?:[_a-z0-9-]|[^\\u0020-\\u007e]|" + r + ")",
                        i = e + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))*)?",
                        a = "((?:-?" + i + ")|(?:inherit|auto))", s = "(#?" + o + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                        l = "(?:[!#$%&*-~]|[^\\u0020-\\u007e]|" + r + ")*?",
                        c = "(?!(" + o + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                        u = "(?!" + l + "['\"]?\\s*\\))", d = "(?=" + l + "['\"]?\\s*\\))",
                        p = "(\\s*(?:!important\\s*)?[;}])", f = new RegExp("`TMP`", "g"),
                        g = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                        h = new RegExp("(" + t + c + "[^;}]+;?)", "gi"), b = new RegExp("(" + t + "[^\\}]*?})", "gi"),
                        m = new RegExp("(direction\\s*:\\s*)ltr", "gi"),
                        v = new RegExp("(direction\\s*:\\s*)rtl", "gi"),
                        y = new RegExp("(^|[^a-zA-Z])(left)(?![a-zA-Z])" + u + c, "gi"),
                        x = new RegExp("(^|[^a-zA-Z])(right)(?![a-zA-Z])" + u + c, "gi"),
                        w = new RegExp("(^|[^a-zA-Z])(left)" + d, "gi"),
                        S = new RegExp("(^|[^a-zA-Z])(right)" + d, "gi"),
                        k = new RegExp("(^|[^a-zA-Z])(ltr)" + d, "gi"), C = new RegExp("(^|[^a-zA-Z])(rtl)" + d, "gi"),
                        B = new RegExp("(^|[^a-zA-Z])([ns]?)e-resize", "gi"),
                        A = new RegExp("(^|[^a-zA-Z])([ns]?)w-resize", "gi"),
                        E = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + a + "(\\s+)" + a + "(\\s+)" + a + "(\\s+)" + a + p, "gi"),
                        T = new RegExp("((?:-color|border-style)\\s*:\\s*)" + s + "(\\s+)" + s + "(\\s+)" + s + "(\\s+)" + s + p, "gi"),
                        O = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + i + ")", "gi"),
                        _ = new RegExp("(background-position-x\\s*:\\s*)(-?" + e + "%)", "gi"),
                        R = new RegExp("(border-radius\\s*:\\s*)" + a + "(?:(?:\\s+" + a + ")(?:\\s+" + a + ")?(?:\\s+" + a + ")?)?(?:(?:(?:\\s*\\/\\s*)" + a + ")(?:\\s+" + a + ")?(?:\\s+" + a + ")?(?:\\s+" + a + ")?)?" + p, "gi"),
                        I = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + a, "gi"),
                        j = new RegExp("(text-shadow\\s*:\\s*)" + a + "(\\s*)" + s, "gi"),
                        z = new RegExp("(text-shadow\\s*:\\s*)" + s + "(\\s*)" + a, "gi"),
                        P = new RegExp("(text-shadow\\s*:\\s*)" + a, "gi"),
                        F = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + a + "(\\s*\\))", "gi"),
                        L = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + a + "((?:\\s*,\\s*" + a + "){0,2}\\s*\\))", "gi");

                    function D(e, t, r) {
                        var n, o;
                        return "%" === r.slice(-1) && (-1 !== (n = r.indexOf(".")) ? (o = r.length - n - 2, r = (r = 100 - parseFloat(r)).toFixed(o) + "%") : r = 100 - parseFloat(r) + "%"), t + r
                    }

                    function H(e) {
                        switch (e.length) {
                            case 4:
                                e = [e[1], e[0], e[3], e[2]];
                                break;
                            case 3:
                                e = [e[1], e[0], e[1], e[2]];
                                break;
                            case 2:
                                e = [e[1], e[0]];
                                break;
                            case 1:
                                e = [e[0]]
                        }
                        return e.join(" ")
                    }

                    function M(e, t) {
                        var r = [].slice.call(arguments), n = r.slice(2, 6).filter((function (e) {
                            return e
                        })), o = r.slice(6, 10).filter((function (e) {
                            return e
                        })), i = r[10] || "";
                        return t + (o.length ? H(n) + " / " + H(o) : H(n)) + i
                    }

                    function N(e) {
                        return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                    }

                    function W(e, t, r) {
                        return t + N(r)
                    }

                    function U(e, t, r, n, o) {
                        return t + r + N(n) + o
                    }

                    function G(e, t, r, n, o) {
                        return t + r + n + N(o)
                    }

                    return {
                        transform: function (e, t) {
                            var r = new n(h, "`NOFLIP_SINGLE`"), o = new n(b, "`NOFLIP_CLASS`"),
                                i = new n(g, "`COMMENT`");
                            return e = i.tokenize(o.tokenize(r.tokenize(e.replace("`", "%60")))), t.transformDirInUrl && (e = e.replace(k, "$1`TMP`").replace(C, "$1ltr").replace(f, "rtl")), t.transformEdgeInUrl && (e = e.replace(w, "$1`TMP`").replace(S, "$1left").replace(f, "right")), e = e.replace(m, "$1`TMP`").replace(v, "$1ltr").replace(f, "rtl").replace(y, "$1`TMP`").replace(x, "$1left").replace(f, "right").replace(B, "$1$2`TMP`").replace(A, "$1$2e-resize").replace(f, "w-resize").replace(R, M).replace(I, W).replace(j, G).replace(z, G).replace(P, W).replace(F, U).replace(L, U).replace(E, "$1$2$3$8$5$6$7$4$9").replace(T, "$1$2$3$8$5$6$7$4$9").replace(O, D).replace(_, D), e = r.detokenize(o.detokenize(i.detokenize(e)))
                        }
                    }
                }, e.exports ? t.transform = function (e, t, n) {
                    var o;
                    return "object" === typeof t ? o = t : (o = {}, "boolean" === typeof t && (o.transformDirInUrl = t), "boolean" === typeof n && (o.transformEdgeInUrl = n)), r.transform(e, o)
                } : "undefined" !== typeof window && (window.cssjanus = r)
            }, WOT1: function (e, t, r) {
                var n;
                !function (o) {
                    "use strict";

                    function i(e) {
                        var t = e && e.Promise || o.Promise, r = e && e.XMLHttpRequest || o.XMLHttpRequest, n = o;
                        return function () {
                            var e = Object.create(n, {fetch: {value: void 0, writable: !0}});
                            return function (e) {
                                if (!e.fetch) {
                                    var n = "URLSearchParams" in e, o = "Symbol" in e && "iterator" in Symbol,
                                        i = "FileReader" in e && "Blob" in e && function () {
                                            try {
                                                return new Blob, !0
                                            } catch (e) {
                                                return !1
                                            }
                                        }(), a = "FormData" in e, s = "ArrayBuffer" in e;
                                    if (s) var l = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                                        c = function (e) {
                                            return e && DataView.prototype.isPrototypeOf(e)
                                        }, u = ArrayBuffer.isView || function (e) {
                                            return e && l.indexOf(Object.prototype.toString.call(e)) > -1
                                        };
                                    b.prototype.append = function (e, t) {
                                        e = f(e), t = g(t);
                                        var r = this.map[e];
                                        this.map[e] = r ? r + "," + t : t
                                    }, b.prototype.delete = function (e) {
                                        delete this.map[f(e)]
                                    }, b.prototype.get = function (e) {
                                        return e = f(e), this.has(e) ? this.map[e] : null
                                    }, b.prototype.has = function (e) {
                                        return this.map.hasOwnProperty(f(e))
                                    }, b.prototype.set = function (e, t) {
                                        this.map[f(e)] = g(t)
                                    }, b.prototype.forEach = function (e, t) {
                                        for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                                    }, b.prototype.keys = function () {
                                        var e = [];
                                        return this.forEach((function (t, r) {
                                            e.push(r)
                                        })), h(e)
                                    }, b.prototype.values = function () {
                                        var e = [];
                                        return this.forEach((function (t) {
                                            e.push(t)
                                        })), h(e)
                                    }, b.prototype.entries = function () {
                                        var e = [];
                                        return this.forEach((function (t, r) {
                                            e.push([r, t])
                                        })), h(e)
                                    }, o && (b.prototype[Symbol.iterator] = b.prototype.entries);
                                    var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                                    S.prototype.clone = function () {
                                        return new S(this, {body: this._bodyInit})
                                    }, w.call(S.prototype), w.call(B.prototype), B.prototype.clone = function () {
                                        return new B(this._bodyInit, {
                                            status: this.status,
                                            statusText: this.statusText,
                                            headers: new b(this.headers),
                                            url: this.url
                                        })
                                    }, B.error = function () {
                                        var e = new B(null, {status: 0, statusText: ""});
                                        return e.type = "error", e
                                    };
                                    var p = [301, 302, 303, 307, 308];
                                    B.redirect = function (e, t) {
                                        if (-1 === p.indexOf(t)) throw new RangeError("Invalid status code");
                                        return new B(null, {status: t, headers: {location: e}})
                                    }, e.Headers = b, e.Request = S, e.Response = B, e.fetch = function (e, n) {
                                        return new t((function (t, o) {
                                            var a = new S(e, n), s = new r;
                                            s.onload = function () {
                                                var e = {
                                                    status: s.status,
                                                    statusText: s.statusText,
                                                    headers: C(s.getAllResponseHeaders() || "")
                                                };
                                                e.url = "responseURL" in s ? s.responseURL : e.headers.get("X-Request-URL");
                                                var r = "response" in s ? s.response : s.responseText;
                                                t(new B(r, e))
                                            }, s.onerror = function () {
                                                o(new TypeError("Network request failed"))
                                            }, s.ontimeout = function () {
                                                o(new TypeError("Network request failed"))
                                            }, s.open(a.method, a.url, !0), "include" === a.credentials ? s.withCredentials = !0 : "omit" === a.credentials && (s.withCredentials = !1), "responseType" in s && i && (s.responseType = "blob"), a.headers.forEach((function (e, t) {
                                                s.setRequestHeader(t, e)
                                            })), s.send("undefined" === typeof a._bodyInit ? null : a._bodyInit)
                                        }))
                                    }, e.fetch.polyfill = !0
                                }

                                function f(e) {
                                    if ("string" !== typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                                    return e.toLowerCase()
                                }

                                function g(e) {
                                    return "string" !== typeof e && (e = String(e)), e
                                }

                                function h(e) {
                                    var t = {
                                        next: function () {
                                            var t = e.shift();
                                            return {done: void 0 === t, value: t}
                                        }
                                    };
                                    return o && (t[Symbol.iterator] = function () {
                                        return t
                                    }), t
                                }

                                function b(e) {
                                    this.map = {}, e instanceof b ? e.forEach((function (e, t) {
                                        this.append(t, e)
                                    }), this) : Array.isArray(e) ? e.forEach((function (e) {
                                        this.append(e[0], e[1])
                                    }), this) : e && Object.getOwnPropertyNames(e).forEach((function (t) {
                                        this.append(t, e[t])
                                    }), this)
                                }

                                function m(e) {
                                    if (e.bodyUsed) return t.reject(new TypeError("Already read"));
                                    e.bodyUsed = !0
                                }

                                function v(e) {
                                    return new t((function (t, r) {
                                        e.onload = function () {
                                            t(e.result)
                                        }, e.onerror = function () {
                                            r(e.error)
                                        }
                                    }))
                                }

                                function y(e) {
                                    var t = new FileReader, r = v(t);
                                    return t.readAsArrayBuffer(e), r
                                }

                                function x(e) {
                                    if (e.slice) return e.slice(0);
                                    var t = new Uint8Array(e.byteLength);
                                    return t.set(new Uint8Array(e)), t.buffer
                                }

                                function w() {
                                    return this.bodyUsed = !1, this._initBody = function (e) {
                                        if (this._bodyInit = e, e) if ("string" === typeof e) this._bodyText = e; else if (i && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e; else if (a && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e; else if (n && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString(); else if (s && i && c(e)) this._bodyArrayBuffer = x(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else {
                                            if (!s || !ArrayBuffer.prototype.isPrototypeOf(e) && !u(e)) throw new Error("unsupported BodyInit type");
                                            this._bodyArrayBuffer = x(e)
                                        } else this._bodyText = "";
                                        this.headers.get("content-type") || ("string" === typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                                    }, i && (this.blob = function () {
                                        var e = m(this);
                                        if (e) return e;
                                        if (this._bodyBlob) return t.resolve(this._bodyBlob);
                                        if (this._bodyArrayBuffer) return t.resolve(new Blob([this._bodyArrayBuffer]));
                                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                                        return t.resolve(new Blob([this._bodyText]))
                                    }, this.arrayBuffer = function () {
                                        return this._bodyArrayBuffer ? m(this) || t.resolve(this._bodyArrayBuffer) : this.blob().then(y)
                                    }), this.text = function () {
                                        var e = m(this);
                                        if (e) return e;
                                        if (this._bodyBlob) return function (e) {
                                            var t = new FileReader, r = v(t);
                                            return t.readAsText(e), r
                                        }(this._bodyBlob);
                                        if (this._bodyArrayBuffer) return t.resolve(function (e) {
                                            for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
                                            return r.join("")
                                        }(this._bodyArrayBuffer));
                                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                                        return t.resolve(this._bodyText)
                                    }, a && (this.formData = function () {
                                        return this.text().then(k)
                                    }), this.json = function () {
                                        return this.text().then(JSON.parse)
                                    }, this
                                }

                                function S(e, t) {
                                    var r = (t = t || {}).body;
                                    if (e instanceof S) {
                                        if (e.bodyUsed) throw new TypeError("Already read");
                                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new b(e.headers)), this.method = e.method, this.mode = e.mode, r || null == e._bodyInit || (r = e._bodyInit, e.bodyUsed = !0)
                                    } else this.url = String(e);
                                    if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new b(t.headers)), this.method = function (e) {
                                        var t = e.toUpperCase();
                                        return d.indexOf(t) > -1 ? t : e
                                    }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                                    this._initBody(r)
                                }

                                function k(e) {
                                    var t = new FormData;
                                    return e.trim().split("&").forEach((function (e) {
                                        if (e) {
                                            var r = e.split("="), n = r.shift().replace(/\+/g, " "),
                                                o = r.join("=").replace(/\+/g, " ");
                                            t.append(decodeURIComponent(n), decodeURIComponent(o))
                                        }
                                    })), t
                                }

                                function C(e) {
                                    var t = new b;
                                    return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function (e) {
                                        var r = e.split(":"), n = r.shift().trim();
                                        if (n) {
                                            var o = r.join(":").trim();
                                            t.append(n, o)
                                        }
                                    })), t
                                }

                                function B(e, t) {
                                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new b(t.headers), this.url = t.url || "", this._initBody(e)
                                }
                            }("undefined" !== typeof e ? e : this), {
                                fetch: e.fetch,
                                Headers: e.Headers,
                                Request: e.Request,
                                Response: e.Response
                            }
                        }()
                    }

                    void 0 === (n = function () {
                        return i
                    }.call(t, r, t, e)) || (e.exports = n)
                }("undefined" !== typeof self ? self : "undefined" !== typeof r.g ? r.g : this)
            }, "4TZb": function (e, t, r) {
                var n, o;
                !function (i, a, s) {
                    "use strict";
                    "undefined" !== typeof window && r.amdO ? void 0 === (o = "function" === typeof (n = s) ? n.call(t, r, t, e) : n) || (e.exports = o) : e.exports ? e.exports = s() : a.exports ? a.exports = s() : a.Fingerprint2 = s()
                }(0, this, (function () {
                    "use strict";
                    var e = function (e, t) {
                        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                        var r = [0, 0, 0, 0];
                        return r[3] += e[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
                    }, t = function (e, t) {
                        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                        var r = [0, 0, 0, 0];
                        return r[3] += e[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
                    }, r = function (e, t) {
                        return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
                    }, n = function (e, t) {
                        return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
                    }, o = function (e, t) {
                        return [e[0] ^ t[0], e[1] ^ t[1]]
                    }, i = function (e) {
                        return e = o(e, [0, e[0] >>> 1]), e = t(e, [4283543511, 3981806797]), e = o(e, [0, e[0] >>> 1]), e = t(e, [3301882366, 444984403]), e = o(e, [0, e[0] >>> 1])
                    }, a = function (a, s) {
                        s = s || 0;
                        for (var l = (a = a || "").length % 16, c = a.length - l, u = [0, s], d = [0, s], p = [0, 0], f = [0, 0], g = [2277735313, 289559509], h = [1291169091, 658871167], b = 0; b < c; b += 16) p = [255 & a.charCodeAt(b + 4) | (255 & a.charCodeAt(b + 5)) << 8 | (255 & a.charCodeAt(b + 6)) << 16 | (255 & a.charCodeAt(b + 7)) << 24, 255 & a.charCodeAt(b) | (255 & a.charCodeAt(b + 1)) << 8 | (255 & a.charCodeAt(b + 2)) << 16 | (255 & a.charCodeAt(b + 3)) << 24], f = [255 & a.charCodeAt(b + 12) | (255 & a.charCodeAt(b + 13)) << 8 | (255 & a.charCodeAt(b + 14)) << 16 | (255 & a.charCodeAt(b + 15)) << 24, 255 & a.charCodeAt(b + 8) | (255 & a.charCodeAt(b + 9)) << 8 | (255 & a.charCodeAt(b + 10)) << 16 | (255 & a.charCodeAt(b + 11)) << 24], p = t(p, g), p = r(p, 31), p = t(p, h), u = o(u, p), u = r(u, 27), u = e(u, d), u = e(t(u, [0, 5]), [0, 1390208809]), f = t(f, h), f = r(f, 33), f = t(f, g), d = o(d, f), d = r(d, 31), d = e(d, u), d = e(t(d, [0, 5]), [0, 944331445]);
                        switch (p = [0, 0], f = [0, 0], l) {
                            case 15:
                                f = o(f, n([0, a.charCodeAt(b + 14)], 48));
                            case 14:
                                f = o(f, n([0, a.charCodeAt(b + 13)], 40));
                            case 13:
                                f = o(f, n([0, a.charCodeAt(b + 12)], 32));
                            case 12:
                                f = o(f, n([0, a.charCodeAt(b + 11)], 24));
                            case 11:
                                f = o(f, n([0, a.charCodeAt(b + 10)], 16));
                            case 10:
                                f = o(f, n([0, a.charCodeAt(b + 9)], 8));
                            case 9:
                                f = o(f, [0, a.charCodeAt(b + 8)]), f = t(f, h), f = r(f, 33), f = t(f, g), d = o(d, f);
                            case 8:
                                p = o(p, n([0, a.charCodeAt(b + 7)], 56));
                            case 7:
                                p = o(p, n([0, a.charCodeAt(b + 6)], 48));
                            case 6:
                                p = o(p, n([0, a.charCodeAt(b + 5)], 40));
                            case 5:
                                p = o(p, n([0, a.charCodeAt(b + 4)], 32));
                            case 4:
                                p = o(p, n([0, a.charCodeAt(b + 3)], 24));
                            case 3:
                                p = o(p, n([0, a.charCodeAt(b + 2)], 16));
                            case 2:
                                p = o(p, n([0, a.charCodeAt(b + 1)], 8));
                            case 1:
                                p = o(p, [0, a.charCodeAt(b)]), p = t(p, g), p = r(p, 31), p = t(p, h), u = o(u, p)
                        }
                        return u = o(u, [0, a.length]), d = o(d, [0, a.length]), u = e(u, d), d = e(d, u), u = i(u), d = i(d), u = e(u, d), d = e(d, u), ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
                    }, s = {
                        preprocessor: null,
                        audio: {timeout: 1e3, excludeIOS11: !0},
                        fonts: {
                            swfContainerId: "fingerprintjs2",
                            swfPath: "flash/compiled/FontList.swf",
                            userDefinedFonts: [],
                            extendedJsFonts: !1
                        },
                        screen: {detectScreenOrientation: !0},
                        plugins: {sortPluginsFor: [/palemoon/i], excludeIE: !1},
                        extraComponents: [],
                        excludes: {enumerateDevices: !0, pixelRatio: !0, doNotTrack: !0, fontsFlash: !0},
                        NOT_AVAILABLE: "not available",
                        ERROR: "error",
                        EXCLUDED: "excluded"
                    }, l = function (e, t) {
                        if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t); else if (e.length === +e.length) for (var r = 0, n = e.length; r < n; r++) t(e[r], r, e); else for (var o in e) e.hasOwnProperty(o) && t(e[o], o, e)
                    }, c = function (e, t) {
                        var r = [];
                        return null == e ? r : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (l(e, (function (e, n, o) {
                            r.push(t(e, n, o))
                        })), r)
                    }, u = function () {
                        return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
                    }, d = function (e) {
                        var t = [window.screen.width, window.screen.height];
                        return e.screen.detectScreenOrientation && t.sort().reverse(), t
                    }, p = function (e) {
                        if (window.screen.availWidth && window.screen.availHeight) {
                            var t = [window.screen.availHeight, window.screen.availWidth];
                            return e.screen.detectScreenOrientation && t.sort().reverse(), t
                        }
                        return e.NOT_AVAILABLE
                    }, f = function (e) {
                        if (null == navigator.plugins) return e.NOT_AVAILABLE;
                        for (var t = [], r = 0, n = navigator.plugins.length; r < n; r++) navigator.plugins[r] && t.push(navigator.plugins[r]);
                        return h(e) && (t = t.sort((function (e, t) {
                            return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                        }))), c(t, (function (e) {
                            var t = c(e, (function (e) {
                                return [e.type, e.suffixes]
                            }));
                            return [e.name, e.description, t]
                        }))
                    }, g = function (e) {
                        var t = [];
                        if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                            t = c(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function (t) {
                                try {
                                    return new window.ActiveXObject(t), t
                                } catch (r) {
                                    return e.ERROR
                                }
                            }))
                        } else t.push(e.NOT_AVAILABLE);
                        return navigator.plugins && (t = t.concat(f(e))), t
                    }, h = function (e) {
                        for (var t = !1, r = 0, n = e.plugins.sortPluginsFor.length; r < n; r++) {
                            var o = e.plugins.sortPluginsFor[r];
                            if (navigator.userAgent.match(o)) {
                                t = !0;
                                break
                            }
                        }
                        return t
                    }, b = function (e) {
                        try {
                            return !!window.sessionStorage
                        } catch (t) {
                            return e.ERROR
                        }
                    }, m = function (e) {
                        try {
                            return !!window.localStorage
                        } catch (t) {
                            return e.ERROR
                        }
                    }, v = function (e) {
                        try {
                            return !!window.indexedDB
                        } catch (t) {
                            return e.ERROR
                        }
                    }, y = function (e) {
                        return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
                    }, x = function (e) {
                        return navigator.cpuClass || e.NOT_AVAILABLE
                    }, w = function (e) {
                        return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
                    }, S = function (e) {
                        return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
                    }, k = function () {
                        var e, t = 0;
                        "undefined" !== typeof navigator.maxTouchPoints ? t = navigator.maxTouchPoints : "undefined" !== typeof navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
                        try {
                            document.createEvent("TouchEvent"), e = !0
                        } catch (r) {
                            e = !1
                        }
                        return [t, e, "ontouchstart" in window]
                    }, C = function (e) {
                        var t = [], r = document.createElement("canvas");
                        r.width = 2e3, r.height = 200, r.style.display = "inline";
                        var n = r.getContext("2d");
                        return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", e.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), r.toDataURL && t.push("canvas fp:" + r.toDataURL()), t
                    }, B = function () {
                        var e, t = function (t) {
                            return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                        };
                        if (!(e = D())) return null;
                        var r = [], n = e.createBuffer();
                        e.bindBuffer(e.ARRAY_BUFFER, n);
                        var o = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                        e.bufferData(e.ARRAY_BUFFER, o, e.STATIC_DRAW), n.itemSize = 3, n.numItems = 3;
                        var i = e.createProgram(), a = e.createShader(e.VERTEX_SHADER);
                        e.shaderSource(a, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(a);
                        var s = e.createShader(e.FRAGMENT_SHADER);
                        e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(s), e.attachShader(i, a), e.attachShader(i, s), e.linkProgram(i), e.useProgram(i), i.vertexPosAttrib = e.getAttribLocation(i, "attrVertex"), i.offsetUniform = e.getUniformLocation(i, "uniformOffset"), e.enableVertexAttribArray(i.vertexPosArray), e.vertexAttribPointer(i.vertexPosAttrib, n.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(i.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, n.numItems);
                        try {
                            r.push(e.canvas.toDataURL())
                        } catch (u) {
                        }
                        r.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), r.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), r.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), r.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), r.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), r.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), r.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), r.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), r.push("webgl max anisotropy:" + function (e) {
                            var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                            if (t) {
                                var r = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                                return 0 === r && (r = 2), r
                            }
                            return null
                        }(e)), r.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), r.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), r.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), r.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), r.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), r.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), r.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), r.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), r.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), r.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), r.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), r.push("webgl red bits:" + e.getParameter(e.RED_BITS)), r.push("webgl renderer:" + e.getParameter(e.RENDERER)), r.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), r.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), r.push("webgl vendor:" + e.getParameter(e.VENDOR)), r.push("webgl version:" + e.getParameter(e.VERSION));
                        try {
                            var c = e.getExtension("WEBGL_debug_renderer_info");
                            c && (r.push("webgl unmasked vendor:" + e.getParameter(c.UNMASKED_VENDOR_WEBGL)), r.push("webgl unmasked renderer:" + e.getParameter(c.UNMASKED_RENDERER_WEBGL)))
                        } catch (u) {
                        }
                        return e.getShaderPrecisionFormat ? (l(["FLOAT", "INT"], (function (t) {
                            l(["VERTEX", "FRAGMENT"], (function (n) {
                                l(["HIGH", "MEDIUM", "LOW"], (function (o) {
                                    l(["precision", "rangeMin", "rangeMax"], (function (i) {
                                        var a = e.getShaderPrecisionFormat(e[n + "_SHADER"], e[o + "_" + t])[i];
                                        "precision" !== i && (i = "precision " + i);
                                        var s = ["webgl ", n.toLowerCase(), " shader ", o.toLowerCase(), " ", t.toLowerCase(), " ", i, ":", a].join("");
                                        r.push(s)
                                    }))
                                }))
                            }))
                        })), r) : r
                    }, A = function () {
                        try {
                            var e = D(), t = e.getExtension("WEBGL_debug_renderer_info");
                            return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                        } catch (r) {
                            return null
                        }
                    }, E = function () {
                        var e = document.createElement("div");
                        e.innerHTML = "&nbsp;", e.className = "adsbox";
                        var t = !1;
                        try {
                            document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                        } catch (r) {
                            t = !1
                        }
                        return t
                    }, T = function () {
                        if ("undefined" !== typeof navigator.languages) try {
                            if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                        } catch (e) {
                            return !0
                        }
                        return !1
                    }, O = function () {
                        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
                    }, _ = function () {
                        var e, t = navigator.userAgent.toLowerCase(), r = navigator.oscpu,
                            n = navigator.platform.toLowerCase();
                        if (e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 || t.indexOf("cros") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
                        if ("undefined" !== typeof r) {
                            if ((r = r.toLowerCase()).indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
                            if (r.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
                            if (r.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
                            if ((-1 === r.indexOf("win") && -1 === r.indexOf("linux") && -1 === r.indexOf("mac")) !== ("Other" === e)) return !0
                        }
                        return n.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || ((n.indexOf("linux") >= 0 || n.indexOf("android") >= 0 || n.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || ((n.indexOf("mac") >= 0 || n.indexOf("ipad") >= 0 || n.indexOf("ipod") >= 0 || n.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || ((n.indexOf("win") < 0 && n.indexOf("linux") < 0 && n.indexOf("mac") < 0 && n.indexOf("iphone") < 0 && n.indexOf("ipad") < 0) !== ("Other" === e) || "undefined" === typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
                    }, R = function () {
                        var e, t = navigator.userAgent.toLowerCase(), r = navigator.productSub;
                        if (("Chrome" === (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== r) return !0;
                        var n, o = eval.toString().length;
                        if (37 === o && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                        if (39 === o && "Internet Explorer" !== e && "Other" !== e) return !0;
                        if (33 === o && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
                        try {
                            throw"a"
                        } catch (i) {
                            try {
                                i.toSource(), n = !0
                            } catch (a) {
                                n = !1
                            }
                        }
                        return n && "Firefox" !== e && "Other" !== e
                    }, I = function () {
                        var e = document.createElement("canvas");
                        return !(!e.getContext || !e.getContext("2d"))
                    }, j = function () {
                        if (!I()) return !1;
                        var e = D();
                        return !!window.WebGLRenderingContext && !!e
                    }, z = function () {
                        return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                    }, P = function () {
                        return "undefined" !== typeof window.swfobject
                    }, F = function () {
                        return window.swfobject.hasFlashPlayerVersion("9.0.0")
                    }, L = function (e, t) {
                        var r = "___fp_swf_loaded";
                        window[r] = function (t) {
                            e(t)
                        };
                        var n = t.fonts.swfContainerId;
                        !function (e) {
                            var t = document.createElement("div");
                            t.setAttribute("id", e.fonts.swfContainerId), document.body.appendChild(t)
                        }();
                        var o = {onReady: r};
                        window.swfobject.embedSWF(t.fonts.swfPath, n, "1", "1", "9.0.0", !1, o, {
                            allowScriptAccess: "always",
                            menu: "false"
                        }, {})
                    }, D = function () {
                        var e = document.createElement("canvas"), t = null;
                        try {
                            t = e.getContext("webgl") || e.getContext("experimental-webgl")
                        } catch (r) {
                        }
                        return t || (t = null), t
                    }, H = [{
                        key: "userAgent", getData: function (e) {
                            e(navigator.userAgent)
                        }
                    }, {
                        key: "webdriver", getData: function (e, t) {
                            e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
                        }
                    }, {
                        key: "language", getData: function (e, t) {
                            e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "colorDepth", getData: function (e, t) {
                            e(window.screen.colorDepth || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "deviceMemory", getData: function (e, t) {
                            e(navigator.deviceMemory || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "pixelRatio", getData: function (e, t) {
                            e(window.devicePixelRatio || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "hardwareConcurrency", getData: function (e, t) {
                            e(y(t))
                        }
                    }, {
                        key: "screenResolution", getData: function (e, t) {
                            e(d(t))
                        }
                    }, {
                        key: "availableScreenResolution", getData: function (e, t) {
                            e(p(t))
                        }
                    }, {
                        key: "timezoneOffset", getData: function (e) {
                            e((new Date).getTimezoneOffset())
                        }
                    }, {
                        key: "timezone", getData: function (e, t) {
                            window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : e(t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "sessionStorage", getData: function (e, t) {
                            e(b(t))
                        }
                    }, {
                        key: "localStorage", getData: function (e, t) {
                            e(m(t))
                        }
                    }, {
                        key: "indexedDb", getData: function (e, t) {
                            e(v(t))
                        }
                    }, {
                        key: "addBehavior", getData: function (e) {
                            e(!(!document.body || !document.body.addBehavior))
                        }
                    }, {
                        key: "openDatabase", getData: function (e) {
                            e(!!window.openDatabase)
                        }
                    }, {
                        key: "cpuClass", getData: function (e, t) {
                            e(x(t))
                        }
                    }, {
                        key: "platform", getData: function (e, t) {
                            e(w(t))
                        }
                    }, {
                        key: "doNotTrack", getData: function (e, t) {
                            e(S(t))
                        }
                    }, {
                        key: "plugins", getData: function (e, t) {
                            z() ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(g(t)) : e(f(t))
                        }
                    }, {
                        key: "canvas", getData: function (e, t) {
                            I() ? e(C(t)) : e(t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "webgl", getData: function (e, t) {
                            j() ? e(B()) : e(t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "webglVendorAndRenderer", getData: function (e) {
                            j() ? e(A()) : e()
                        }
                    }, {
                        key: "adBlock", getData: function (e) {
                            e(E())
                        }
                    }, {
                        key: "hasLiedLanguages", getData: function (e) {
                            e(T())
                        }
                    }, {
                        key: "hasLiedResolution", getData: function (e) {
                            e(O())
                        }
                    }, {
                        key: "hasLiedOs", getData: function (e) {
                            e(_())
                        }
                    }, {
                        key: "hasLiedBrowser", getData: function (e) {
                            e(R())
                        }
                    }, {
                        key: "touchSupport", getData: function (e) {
                            e(k())
                        }
                    }, {
                        key: "fonts", getData: function (e, t) {
                            var r = ["monospace", "sans-serif", "serif"],
                                n = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                            if (t.fonts.extendedJsFonts) {
                                n = n.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])
                            }
                            n = (n = n.concat(t.fonts.userDefinedFonts)).filter((function (e, t) {
                                return n.indexOf(e) === t
                            }));
                            var o = document.getElementsByTagName("body")[0], i = document.createElement("div"),
                                a = document.createElement("div"), s = {}, l = {}, c = function () {
                                    var e = document.createElement("span");
                                    return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                                }, u = function (e, t) {
                                    var r = c();
                                    return r.style.fontFamily = "'" + e + "'," + t, r
                                }, d = function (e) {
                                    for (var t = !1, n = 0; n < r.length; n++) if (t = e[n].offsetWidth !== s[r[n]] || e[n].offsetHeight !== l[r[n]]) return t;
                                    return t
                                }, p = function () {
                                    for (var e = [], t = 0, n = r.length; t < n; t++) {
                                        var o = c();
                                        o.style.fontFamily = r[t], i.appendChild(o), e.push(o)
                                    }
                                    return e
                                }();
                            o.appendChild(i);
                            for (var f = 0, g = r.length; f < g; f++) s[r[f]] = p[f].offsetWidth, l[r[f]] = p[f].offsetHeight;
                            var h = function () {
                                for (var e = {}, t = 0, o = n.length; t < o; t++) {
                                    for (var i = [], s = 0, l = r.length; s < l; s++) {
                                        var c = u(n[t], r[s]);
                                        a.appendChild(c), i.push(c)
                                    }
                                    e[n[t]] = i
                                }
                                return e
                            }();
                            o.appendChild(a);
                            for (var b = [], m = 0, v = n.length; m < v; m++) d(h[n[m]]) && b.push(n[m]);
                            o.removeChild(a), o.removeChild(i), e(b)
                        }, pauseBefore: !0
                    }, {
                        key: "fontsFlash", getData: function (e, t) {
                            return P() ? F() ? t.fonts.swfPath ? void L((function (t) {
                                e(t)
                            }), t) : e("missing options.fonts.swfPath") : e("flash not installed") : e("swf object not loaded")
                        }, pauseBefore: !0
                    }, {
                        key: "audio", getData: function (e, t) {
                            var r = t.audio;
                            if (r.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(t.EXCLUDED);
                            var n = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                            if (null == n) return e(t.NOT_AVAILABLE);
                            var o = new n(1, 44100, 44100), i = o.createOscillator();
                            i.type = "triangle", i.frequency.setValueAtTime(1e4, o.currentTime);
                            var a = o.createDynamicsCompressor();
                            l([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]], (function (e) {
                                void 0 !== a[e[0]] && "function" === typeof a[e[0]].setValueAtTime && a[e[0]].setValueAtTime(e[1], o.currentTime)
                            })), i.connect(a), a.connect(o.destination), i.start(0), o.startRendering();
                            var s = setTimeout((function () {
                                return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'), o.oncomplete = function () {
                                }, o = null, e("audioTimeout")
                            }), r.timeout);
                            o.oncomplete = function (t) {
                                var r;
                                try {
                                    clearTimeout(s), r = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function (e, t) {
                                        return e + Math.abs(t)
                                    }), 0).toString(), i.disconnect(), a.disconnect()
                                } catch (n) {
                                    return void e(n)
                                }
                                e(r)
                            }
                        }
                    }, {
                        key: "enumerateDevices", getData: function (e, t) {
                            if (!u()) return e(t.NOT_AVAILABLE);
                            navigator.mediaDevices.enumerateDevices().then((function (t) {
                                e(t.map((function (e) {
                                    return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                                })))
                            })).catch((function (t) {
                                e(t)
                            }))
                        }
                    }], M = function (e) {
                        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
                    };
                    return M.get = function (e, t) {
                        t ? e || (e = {}) : (t = e, e = {}), function (e, t) {
                            if (null == t) return e;
                            var r, n;
                            for (n in t) null == (r = t[n]) || Object.prototype.hasOwnProperty.call(e, n) || (e[n] = r)
                        }(e, s), e.components = e.extraComponents.concat(H);
                        var r = {
                            data: [], addPreprocessedComponent: function (t, n) {
                                "function" === typeof e.preprocessor && (n = e.preprocessor(t, n)), r.data.push({
                                    key: t,
                                    value: n
                                })
                            }
                        }, n = -1, o = function (i) {
                            if ((n += 1) >= e.components.length) t(r.data); else {
                                var a = e.components[n];
                                if (e.excludes[a.key]) o(!1); else {
                                    if (!i && a.pauseBefore) return n -= 1, void setTimeout((function () {
                                        o(!0)
                                    }), 1);
                                    try {
                                        a.getData((function (e) {
                                            r.addPreprocessedComponent(a.key, e), o(!1)
                                        }), e)
                                    } catch (s) {
                                        r.addPreprocessedComponent(a.key, String(s)), o(!1)
                                    }
                                }
                            }
                        };
                        o(!1)
                    }, M.getPromise = function (e) {
                        return new Promise((function (t, r) {
                            M.get(e, t)
                        }))
                    }, M.getV18 = function (e, t) {
                        return null == t && (t = e, e = {}), M.get(e, (function (r) {
                            for (var n = [], o = 0; o < r.length; o++) {
                                var i = r[o];
                                if (i.value === (e.NOT_AVAILABLE || "not available")) n.push({
                                    key: i.key,
                                    value: "unknown"
                                }); else if ("plugins" === i.key) n.push({
                                    key: "plugins",
                                    value: c(i.value, (function (e) {
                                        var t = c(e[2], (function (e) {
                                            return e.join ? e.join("~") : e
                                        })).join(",");
                                        return [e[0], e[1], t].join("::")
                                    }))
                                }); else if (-1 !== ["canvas", "webgl"].indexOf(i.key)) n.push({
                                    key: i.key,
                                    value: i.value.join("~")
                                }); else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(i.key)) {
                                    if (!i.value) continue;
                                    n.push({key: i.key, value: 1})
                                } else i.value ? n.push(i.value.join ? {
                                    key: i.key,
                                    value: i.value.join(";")
                                } : i) : n.push({key: i.key, value: i.value})
                            }
                            var s = a(c(n, (function (e) {
                                return e.value
                            })).join("~~~"), 31);
                            t(s, n)
                        }))
                    }, M.x64hash128 = a, M.VERSION = "2.1.0", M
                }))
            }, oXkQ: (e, t, r) => {
                "use strict";
                var n = r("kvVz"), o = {
                        childContextTypes: !0,
                        contextType: !0,
                        contextTypes: !0,
                        defaultProps: !0,
                        displayName: !0,
                        getDefaultProps: !0,
                        getDerivedStateFromError: !0,
                        getDerivedStateFromProps: !0,
                        mixins: !0,
                        propTypes: !0,
                        type: !0
                    }, i = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
                    a = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, s = {};

                function l(e) {
                    return n.isMemo(e) ? a : s[e.$$typeof] || o
                }

                s[n.ForwardRef] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, s[n.Memo] = a;
                var c = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols,
                    p = Object.getOwnPropertyDescriptor, f = Object.getPrototypeOf, g = Object.prototype;
                e.exports = function e(t, r, n) {
                    if ("string" !== typeof r) {
                        if (g) {
                            var o = f(r);
                            o && o !== g && e(t, o, n)
                        }
                        var a = u(r);
                        d && (a = a.concat(d(r)));
                        for (var s = l(t), h = l(r), b = 0; b < a.length; ++b) {
                            var m = a[b];
                            if (!i[m] && (!n || !n[m]) && (!h || !h[m]) && (!s || !s[m])) {
                                var v = p(r, m);
                                try {
                                    c(t, m, v)
                                } catch (y) {
                                }
                            }
                        }
                    }
                    return t
                }
            }, lfu7: e => {
                function t(e) {
                    return !!e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                }

                e.exports = function (e) {
                    return null != e && (t(e) || function (e) {
                        return "function" === typeof e.readFloatLE && "function" === typeof e.slice && t(e.slice(0, 0))
                    }(e) || !!e._isBuffer)
                }
            }, uivU: function (e, t, r) {
                var n, o;
                o = "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof r.g ? r.g : this, e.exports = function (r) {
                    "use strict";
                    var o, i = (r = r || {}).Base64, a = "2.6.4",
                        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = function (e) {
                            for (var t = {}, r = 0, n = e.length; r < n; r++) t[e.charAt(r)] = r;
                            return t
                        }(s), c = String.fromCharCode, u = function (e) {
                            if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? c(192 | t >>> 6) + c(128 | 63 & t) : c(224 | t >>> 12 & 15) + c(128 | t >>> 6 & 63) + c(128 | 63 & t);
                            var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                            return c(240 | t >>> 18 & 7) + c(128 | t >>> 12 & 63) + c(128 | t >>> 6 & 63) + c(128 | 63 & t)
                        }, d = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, p = function (e) {
                            return e.replace(d, u)
                        }, f = function (e) {
                            var t = [0, 2, 1][e.length % 3],
                                r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                            return [s.charAt(r >>> 18), s.charAt(r >>> 12 & 63), t >= 2 ? "=" : s.charAt(r >>> 6 & 63), t >= 1 ? "=" : s.charAt(63 & r)].join("")
                        }, g = r.btoa && "function" == typeof r.btoa ? function (e) {
                            return r.btoa(e)
                        } : function (e) {
                            if (e.match(/[^\x00-\xFF]/)) throw new RangeError("The string contains invalid characters.");
                            return e.replace(/[\s\S]{1,3}/g, f)
                        }, h = function (e) {
                            return g(p(String(e)))
                        }, b = function (e) {
                            return e.replace(/[+\/]/g, (function (e) {
                                return "+" == e ? "-" : "_"
                            })).replace(/=/g, "")
                        }, m = function (e, t) {
                            return t ? b(h(e)) : h(e)
                        }, v = function (e) {
                            return m(e, !0)
                        };
                    r.Uint8Array && (o = function (e, t) {
                        for (var r = "", n = 0, o = e.length; n < o; n += 3) {
                            var i = e[n], a = e[n + 1], l = e[n + 2], c = i << 16 | a << 8 | l;
                            r += s.charAt(c >>> 18) + s.charAt(c >>> 12 & 63) + ("undefined" != typeof a ? s.charAt(c >>> 6 & 63) : "=") + ("undefined" != typeof l ? s.charAt(63 & c) : "=")
                        }
                        return t ? b(r) : r
                    });
                    var y, x = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                        w = function (e) {
                            switch (e.length) {
                                case 4:
                                    var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                                    return c(55296 + (t >>> 10)) + c(56320 + (1023 & t));
                                case 3:
                                    return c((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                                default:
                                    return c((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                            }
                        }, S = function (e) {
                            return e.replace(x, w)
                        }, k = function (e) {
                            var t = e.length, r = t % 4,
                                n = (t > 0 ? l[e.charAt(0)] << 18 : 0) | (t > 1 ? l[e.charAt(1)] << 12 : 0) | (t > 2 ? l[e.charAt(2)] << 6 : 0) | (t > 3 ? l[e.charAt(3)] : 0),
                                o = [c(n >>> 16), c(n >>> 8 & 255), c(255 & n)];
                            return o.length -= [0, 0, 2, 1][r], o.join("")
                        }, C = r.atob && "function" == typeof r.atob ? function (e) {
                            return r.atob(e)
                        } : function (e) {
                            return e.replace(/\S{1,4}/g, k)
                        }, B = function (e) {
                            return C(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""))
                        }, A = function (e) {
                            return S(C(e))
                        }, E = function (e) {
                            return String(e).replace(/[-_]/g, (function (e) {
                                return "-" == e ? "+" : "/"
                            })).replace(/[^A-Za-z0-9\+\/]/g, "")
                        }, T = function (e) {
                            return A(E(e))
                        };
                    r.Uint8Array && (y = function (e) {
                        return Uint8Array.from(B(E(e)), (function (e) {
                            return e.charCodeAt(0)
                        }))
                    });
                    var O = function () {
                        var e = r.Base64;
                        return r.Base64 = i, e
                    };
                    if (r.Base64 = {
                        VERSION: a,
                        atob: B,
                        btoa: g,
                        fromBase64: T,
                        toBase64: m,
                        utob: p,
                        encode: m,
                        encodeURI: v,
                        btou: S,
                        decode: T,
                        noConflict: O,
                        fromUint8Array: o,
                        toUint8Array: y
                    }, "function" === typeof Object.defineProperty) {
                        var _ = function (e) {
                            return {value: e, enumerable: !1, writable: !0, configurable: !0}
                        };
                        r.Base64.extendString = function () {
                            Object.defineProperty(String.prototype, "fromBase64", _((function () {
                                return T(this)
                            }))), Object.defineProperty(String.prototype, "toBase64", _((function (e) {
                                return m(this, e)
                            }))), Object.defineProperty(String.prototype, "toBase64URI", _((function () {
                                return m(this, !0)
                            })))
                        }
                    }
                    return r.Meteor && (Base64 = r.Base64), e.exports ? e.exports.Base64 = r.Base64 : void 0 === (n = function () {
                        return r.Base64
                    }.apply(t, [])) || (e.exports = n), {Base64: r.Base64}
                }(o)
            }, QF3D: (e, t, r) => {
                var n = r("vxC8")(r("IBsm"), "DataView");
                e.exports = n
            }, Tv3l: (e, t, r) => {
                var n = r("2Fbm"), o = r("VPai"), i = r("+fUG"), a = r("QMz8"), s = r("mUsV");

                function l(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                l.prototype.clear = n, l.prototype.delete = o, l.prototype.get = i, l.prototype.has = a, l.prototype.set = s, e.exports = l
            }, deT9: (e, t, r) => {
                var n = r("vGGS"), o = r("obGE");

                function i(e) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                }

                i.prototype = n(o.prototype), i.prototype.constructor = i, e.exports = i
            }, "+ooz": (e, t, r) => {
                var n = r("8Zrg"), o = r("kwr2"), i = r("5VYK"), a = r("Coc+"), s = r("LzM7");

                function l(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                l.prototype.clear = n, l.prototype.delete = o, l.prototype.get = i, l.prototype.has = a, l.prototype.set = s, e.exports = l
            }, "0+c5": (e, t, r) => {
                var n = r("vGGS"), o = r("obGE");

                function i(e, t) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
                }

                i.prototype = n(o.prototype), i.prototype.constructor = i, e.exports = i
            }, qeCs: (e, t, r) => {
                var n = r("vxC8")(r("IBsm"), "Map");
                e.exports = n
            }, hyzI: (e, t, r) => {
                var n = r("m5o6"), o = r("d0UJ"), i = r("eask"), a = r("9SKQ"), s = r("e63W");

                function l(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                l.prototype.clear = n, l.prototype.delete = o, l.prototype.get = i, l.prototype.has = a, l.prototype.set = s, e.exports = l
            }, IS0S: (e, t, r) => {
                var n = r("vxC8")(r("IBsm"), "Promise");
                e.exports = n
            }, OBn4: (e, t, r) => {
                var n = r("vxC8")(r("IBsm"), "Set");
                e.exports = n
            }, "JBn+": (e, t, r) => {
                var n = r("hyzI"), o = r("qjF7"), i = r("cEmw");

                function a(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for (this.__data__ = new n; ++t < r;) this.add(e[t])
                }

                a.prototype.add = a.prototype.push = o, a.prototype.has = i, e.exports = a
            }, HsnV: (e, t, r) => {
                var n = r("+ooz"), o = r("RNlM"), i = r("E4ao"), a = r("BSqe"), s = r("L6um"), l = r("4/ik");

                function c(e) {
                    var t = this.__data__ = new n(e);
                    this.size = t.size
                }

                c.prototype.clear = o, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = s, c.prototype.set = l, e.exports = c
            }, Syyo: (e, t, r) => {
                var n = r("IBsm").Symbol;
                e.exports = n
            }, mGzy: (e, t, r) => {
                var n = r("IBsm").Uint8Array;
                e.exports = n
            }, "4+Vk": (e, t, r) => {
                var n = r("vxC8")(r("IBsm"), "WeakMap");
                e.exports = n
            }, zaNA: e => {
                e.exports = function (e, t, r) {
                    switch (r.length) {
                        case 0:
                            return e.call(t);
                        case 1:
                            return e.call(t, r[0]);
                        case 2:
                            return e.call(t, r[0], r[1]);
                        case 3:
                            return e.call(t, r[0], r[1], r[2])
                    }
                    return e.apply(t, r)
                }
            }, LmOH: e => {
                e.exports = function (e, t) {
                    for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e);) ;
                    return e
                }
            }, W0vE: e => {
                e.exports = function (e, t) {
                    for (var r = -1, n = null == e ? 0 : e.length, o = 0, i = []; ++r < n;) {
                        var a = e[r];
                        t(a, r, e) && (i[o++] = a)
                    }
                    return i
                }
            }, OfKG: (e, t, r) => {
                var n = r("c7Qd");
                e.exports = function (e, t) {
                    return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1
                }
            }, rmhs: (e, t, r) => {
                var n = r("2ZvR"), o = r("bvyN"), i = r("wxYD"), a = r("3ajY"), s = r("pnw1"), l = r("Qd2C"),
                    c = Object.prototype.hasOwnProperty;
                e.exports = function (e, t) {
                    var r = i(e), u = !r && o(e), d = !r && !u && a(e), p = !r && !u && !d && l(e),
                        f = r || u || d || p, g = f ? n(e.length, String) : [], h = g.length;
                    for (var b in e) !t && !c.call(e, b) || f && ("length" == b || d && ("offset" == b || "parent" == b) || p && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || s(b, h)) || g.push(b);
                    return g
                }
            }, H87J: e => {
                e.exports = function (e, t) {
                    for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
                    return o
                }
            }, "y/9h": e => {
                e.exports = function (e, t) {
                    for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
                    return e
                }
            }, cPMt: e => {
                e.exports = function (e, t, r, n) {
                    var o = -1, i = null == e ? 0 : e.length;
                    for (n && i && (r = e[++o]); ++o < i;) r = t(r, e[o], o, e);
                    return r
                }
            }, myUI: e => {
                e.exports = function (e, t) {
                    for (var r = -1, n = null == e ? 0 : e.length; ++r < n;) if (t(e[r], r, e)) return !0;
                    return !1
                }
            }, amiU: (e, t, r) => {
                var n = r("wC3K"), o = r("pPzx");
                e.exports = function (e, t, r) {
                    (void 0 !== r && !o(e[t], r) || void 0 === r && !(t in e)) && n(e, t, r)
                }
            }, c72w: (e, t, r) => {
                var n = r("wC3K"), o = r("pPzx"), i = Object.prototype.hasOwnProperty;
                e.exports = function (e, t, r) {
                    var a = e[t];
                    i.call(e, t) && o(a, r) && (void 0 !== r || t in e) || n(e, t, r)
                }
            }, "6QIk": (e, t, r) => {
                var n = r("pPzx");
                e.exports = function (e, t) {
                    for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
                    return -1
                }
            }, wC3K: (e, t, r) => {
                var n = r("Pz+s");
                e.exports = function (e, t, r) {
                    "__proto__" == t && n ? n(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    }) : e[t] = r
                }
            }, vGGS: (e, t, r) => {
                var n = r("tQYX"), o = Object.create, i = function () {
                    function e() {
                    }

                    return function (t) {
                        if (!n(t)) return {};
                        if (o) return o(t);
                        e.prototype = t;
                        var r = new e;
                        return e.prototype = void 0, r
                    }
                }();
                e.exports = i
            }, Q4oW: (e, t, r) => {
                var n = r("zKkv"), o = r("bz5b")(n);
                e.exports = o
            }, DuXo: e => {
                e.exports = function (e, t, r, n) {
                    for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;) if (t(e[i], i, e)) return i;
                    return -1
                }
            }, YpBQ: (e, t, r) => {
                var n = r("y/9h"), o = r("oCTG");
                e.exports = function e(t, r, i, a, s) {
                    var l = -1, c = t.length;
                    for (i || (i = o), s || (s = []); ++l < c;) {
                        var u = t[l];
                        r > 0 && i(u) ? r > 1 ? e(u, r - 1, i, a, s) : n(s, u) : a || (s[s.length] = u)
                    }
                    return s
                }
            }, UdtX: (e, t, r) => {
                var n = r("RFxK")();
                e.exports = n
            }, zKkv: (e, t, r) => {
                var n = r("UdtX"), o = r("BlJA");
                e.exports = function (e, t) {
                    return e && n(e, t, o)
                }
            }, w2Tz: (e, t, r) => {
                var n = r("xoyU"), o = r("Ypsa");
                e.exports = function (e, t) {
                    for (var r = 0, i = (t = n(t, e)).length; null != e && r < i;) e = e[o(t[r++])];
                    return r && r == i ? e : void 0
                }
            }, pIod: (e, t, r) => {
                var n = r("y/9h"), o = r("wxYD");
                e.exports = function (e, t, r) {
                    var i = t(e);
                    return o(e) ? i : n(i, r(e))
                }
            }, Dhk8: (e, t, r) => {
                var n = r("Syyo"), o = r("KCLV"), i = r("kHoZ"), a = n ? n.toStringTag : void 0;
                e.exports = function (e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : i(e)
                }
            }, JYmt: e => {
                e.exports = function (e, t) {
                    return null != e && t in Object(e)
                }
            }, c7Qd: (e, t, r) => {
                var n = r("DuXo"), o = r("z9Jh"), i = r("n1QJ");
                e.exports = function (e, t, r) {
                    return t === t ? i(e, t, r) : n(e, o, r)
                }
            }, "/30y": (e, t, r) => {
                var n = r("Dhk8"), o = r("tLQN");
                e.exports = function (e) {
                    return o(e) && "[object Arguments]" == n(e)
                }
            }, NYSw: (e, t, r) => {
                var n = r("BqUW"), o = r("tLQN");
                e.exports = function e(t, r, i, a, s) {
                    return t === r || (null == t || null == r || !o(t) && !o(r) ? t !== t && r !== r : n(t, r, i, a, e, s))
                }
            }, BqUW: (e, t, r) => {
                var n = r("HsnV"), o = r("ZZ+W"), i = r("R3gn"), a = r("yZHP"), s = r("kkM+"), l = r("wxYD"),
                    c = r("3ajY"), u = r("Qd2C"), d = "[object Arguments]", p = "[object Array]", f = "[object Object]",
                    g = Object.prototype.hasOwnProperty;
                e.exports = function (e, t, r, h, b, m) {
                    var v = l(e), y = l(t), x = v ? p : s(e), w = y ? p : s(t), S = (x = x == d ? f : x) == f,
                        k = (w = w == d ? f : w) == f, C = x == w;
                    if (C && c(e)) {
                        if (!c(t)) return !1;
                        v = !0, S = !1
                    }
                    if (C && !S) return m || (m = new n), v || u(e) ? o(e, t, r, h, b, m) : i(e, t, x, r, h, b, m);
                    if (!(1 & r)) {
                        var B = S && g.call(e, "__wrapped__"), A = k && g.call(t, "__wrapped__");
                        if (B || A) {
                            var E = B ? e.value() : e, T = A ? t.value() : t;
                            return m || (m = new n), b(E, T, r, h, m)
                        }
                    }
                    return !!C && (m || (m = new n), a(e, t, r, h, b, m))
                }
            }, ZjRn: (e, t, r) => {
                var n = r("HsnV"), o = r("NYSw");
                e.exports = function (e, t, r, i) {
                    var a = r.length, s = a, l = !i;
                    if (null == e) return !s;
                    for (e = Object(e); a--;) {
                        var c = r[a];
                        if (l && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                    }
                    for (; ++a < s;) {
                        var u = (c = r[a])[0], d = e[u], p = c[1];
                        if (l && c[2]) {
                            if (void 0 === d && !(u in e)) return !1
                        } else {
                            var f = new n;
                            if (i) var g = i(d, p, u, e, t, f);
                            if (!(void 0 === g ? o(p, d, 3, i, f) : g)) return !1
                        }
                    }
                    return !0
                }
            }, z9Jh: e => {
                e.exports = function (e) {
                    return e !== e
                }
            }, "5nKN": (e, t, r) => {
                var n = r("2q8g"), o = r("9vbJ"), i = r("tQYX"), a = r("c18h"), s = /^\[object .+?Constructor\]$/,
                    l = Function.prototype, c = Object.prototype, u = l.toString, d = c.hasOwnProperty,
                    p = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                e.exports = function (e) {
                    return !(!i(e) || o(e)) && (n(e) ? p : s).test(a(e))
                }
            }, "7/jS": (e, t, r) => {
                var n = r("Dhk8"), o = r("t0L4"), i = r("tLQN"), a = {};
                a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function (e) {
                    return i(e) && o(e.length) && !!a[n(e)]
                }
            }, S3pA: (e, t, r) => {
                var n = r("7/we"), o = r("KAo/"), i = r("zWgn"), a = r("wxYD"), s = r("1EDM");
                e.exports = function (e) {
                    return "function" == typeof e ? e : null == e ? i : "object" == typeof e ? a(e) ? o(e[0], e[1]) : n(e) : s(e)
                }
            }, "4uJK": (e, t, r) => {
                var n = r("CbIe"), o = r("OtNC"), i = Object.prototype.hasOwnProperty;
                e.exports = function (e) {
                    if (!n(e)) return o(e);
                    var t = [];
                    for (var r in Object(e)) i.call(e, r) && "constructor" != r && t.push(r);
                    return t
                }
            }, p2lg: (e, t, r) => {
                var n = r("tQYX"), o = r("CbIe"), i = r("/UTG"), a = Object.prototype.hasOwnProperty;
                e.exports = function (e) {
                    if (!n(e)) return i(e);
                    var t = o(e), r = [];
                    for (var s in e) ("constructor" != s || !t && a.call(e, s)) && r.push(s);
                    return r
                }
            }, obGE: e => {
                e.exports = function () {
                }
            }, "7/we": (e, t, r) => {
                var n = r("ZjRn"), o = r("hMsr"), i = r("0Ss3");
                e.exports = function (e) {
                    var t = o(e);
                    return 1 == t.length && t[0][2] ? i(t[0][0], t[0][1]) : function (r) {
                        return r === e || n(r, e, t)
                    }
                }
            }, "KAo/": (e, t, r) => {
                var n = r("NYSw"), o = r("2srY"), i = r("NW/2"), a = r("i7nn"), s = r("+tCn"), l = r("0Ss3"),
                    c = r("Ypsa");
                e.exports = function (e, t) {
                    return a(e) && s(t) ? l(c(e), t) : function (r) {
                        var a = o(r, e);
                        return void 0 === a && a === t ? i(r, e) : n(t, a, 3)
                    }
                }
            }, MzY2: (e, t, r) => {
                var n = r("HsnV"), o = r("amiU"), i = r("UdtX"), a = r("cb1R"), s = r("tQYX"), l = r("zH+d"),
                    c = r("LL3N");
                e.exports = function e(t, r, u, d, p) {
                    t !== r && i(r, (function (i, l) {
                        if (p || (p = new n), s(i)) a(t, r, l, u, e, d, p); else {
                            var f = d ? d(c(t, l), i, l + "", t, r, p) : void 0;
                            void 0 === f && (f = i), o(t, l, f)
                        }
                    }), l)
                }
            }, cb1R: (e, t, r) => {
                var n = r("amiU"), o = r("Grae"), i = r("6Rtw"), a = r("QT01"), s = r("sD1O"), l = r("bvyN"),
                    c = r("wxYD"), u = r("Ndl3"), d = r("3ajY"), p = r("2q8g"), f = r("tQYX"), g = r("Kkar"),
                    h = r("Qd2C"), b = r("LL3N"), m = r("4ScB");
                e.exports = function (e, t, r, v, y, x, w) {
                    var S = b(e, r), k = b(t, r), C = w.get(k);
                    if (C) n(e, r, C); else {
                        var B = x ? x(S, k, r + "", e, t, w) : void 0, A = void 0 === B;
                        if (A) {
                            var E = c(k), T = !E && d(k), O = !E && !T && h(k);
                            B = k, E || T || O ? c(S) ? B = S : u(S) ? B = a(S) : T ? (A = !1, B = o(k, !0)) : O ? (A = !1, B = i(k, !0)) : B = [] : g(k) || l(k) ? (B = S, l(S) ? B = m(S) : f(S) && !p(S) || (B = s(k))) : A = !1
                        }
                        A && (w.set(k, B), y(B, k, v, x, w), w.delete(k)), n(e, r, B)
                    }
                }
            }, EI7Z: e => {
                e.exports = function (e) {
                    return function (t) {
                        return null == t ? void 0 : t[e]
                    }
                }
            }, CEyS: (e, t, r) => {
                var n = r("w2Tz");
                e.exports = function (e) {
                    return function (t) {
                        return n(t, e)
                    }
                }
            }, "5q8j": e => {
                e.exports = function (e, t, r, n, o) {
                    return o(e, (function (e, o, i) {
                        r = n ? (n = !1, e) : t(r, e, o, i)
                    })), r
                }
            }, R3TX: (e, t, r) => {
                var n = r("zWgn"), o = r("UAs9"), i = r("7Pat");
                e.exports = function (e, t) {
                    return i(o(e, t, n), e + "")
                }
            }, uA6v: (e, t, r) => {
                var n = r("zWgn"), o = r("BVx2"), i = o ? function (e, t) {
                    return o.set(e, t), e
                } : n;
                e.exports = i
            }, "+7q0": (e, t, r) => {
                var n = r("eN33"), o = r("Pz+s"), i = r("zWgn"), a = o ? function (e, t) {
                    return o(e, "toString", {configurable: !0, enumerable: !1, value: n(t), writable: !0})
                } : i;
                e.exports = a
            }, "2ZvR": e => {
                e.exports = function (e, t) {
                    for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                    return n
                }
            }, vyvt: (e, t, r) => {
                var n = r("H87J");
                e.exports = function (e, t) {
                    return n(t, (function (t) {
                        return [t, e[t]]
                    }))
                }
            }, JcJ6: (e, t, r) => {
                var n = r("Syyo"), o = r("H87J"), i = r("wxYD"), a = r("a88S"), s = n ? n.prototype : void 0,
                    l = s ? s.toString : void 0;
                e.exports = function e(t) {
                    if ("string" == typeof t) return t;
                    if (i(t)) return o(t, e) + "";
                    if (a(t)) return l ? l.call(t) : "";
                    var r = t + "";
                    return "0" == r && 1 / t == -Infinity ? "-0" : r
                }
            }, I1fX: (e, t, r) => {
                var n = r("6XIJ"), o = /^\s+/;
                e.exports = function (e) {
                    return e ? e.slice(0, n(e) + 1).replace(o, "") : e
                }
            }, SU8Q: e => {
                e.exports = function (e) {
                    return function (t) {
                        return e(t)
                    }
                }
            }, S0iI: e => {
                e.exports = function (e, t) {
                    return e.has(t)
                }
            }, xoyU: (e, t, r) => {
                var n = r("wxYD"), o = r("i7nn"), i = r("SoOq"), a = r("dw5g");
                e.exports = function (e, t) {
                    return n(e) ? e : o(e, t) ? [e] : i(a(e))
                }
            }, EAGB: (e, t, r) => {
                var n = r("mGzy");
                e.exports = function (e) {
                    var t = new e.constructor(e.byteLength);
                    return new n(t).set(new n(e)), t
                }
            }, Grae: (e, t, r) => {
                e = r.nmd(e);
                var n = r("IBsm"), o = t && !t.nodeType && t, i = o && e && !e.nodeType && e,
                    a = i && i.exports === o ? n.Buffer : void 0, s = a ? a.allocUnsafe : void 0;
                e.exports = function (e, t) {
                    if (t) return e.slice();
                    var r = e.length, n = s ? s(r) : new e.constructor(r);
                    return e.copy(n), n
                }
            }, "6Rtw": (e, t, r) => {
                var n = r("EAGB");
                e.exports = function (e, t) {
                    var r = t ? n(e.buffer) : e.buffer;
                    return new e.constructor(r, e.byteOffset, e.length)
                }
            }, "6sC/": e => {
                var t = Math.max;
                e.exports = function (e, r, n, o) {
                    for (var i = -1, a = e.length, s = n.length, l = -1, c = r.length, u = t(a - s, 0), d = Array(c + u), p = !o; ++l < c;) d[l] = r[l];
                    for (; ++i < s;) (p || i < a) && (d[n[i]] = e[i]);
                    for (; u--;) d[l++] = e[i++];
                    return d
                }
            }, gGwV: e => {
                var t = Math.max;
                e.exports = function (e, r, n, o) {
                    for (var i = -1, a = e.length, s = -1, l = n.length, c = -1, u = r.length, d = t(a - l, 0), p = Array(d + u), f = !o; ++i < d;) p[i] = e[i];
                    for (var g = i; ++c < u;) p[g + c] = r[c];
                    for (; ++s < l;) (f || i < a) && (p[g + n[s]] = e[i++]);
                    return p
                }
            }, QT01: e => {
                e.exports = function (e, t) {
                    var r = -1, n = e.length;
                    for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
                    return t
                }
            }, LtXa: (e, t, r) => {
                var n = r("c72w"), o = r("wC3K");
                e.exports = function (e, t, r, i) {
                    var a = !r;
                    r || (r = {});
                    for (var s = -1, l = t.length; ++s < l;) {
                        var c = t[s], u = i ? i(r[c], e[c], c, r, e) : void 0;
                        void 0 === u && (u = e[c]), a ? o(r, c, u) : n(r, c, u)
                    }
                    return r
                }
            }, "3KBa": (e, t, r) => {
                var n = r("IBsm")["__core-js_shared__"];
                e.exports = n
            }, "qFO/": e => {
                e.exports = function (e, t) {
                    for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
                    return n
                }
            }, wpQC: (e, t, r) => {
                var n = r("R3TX"), o = r("R5u7");
                e.exports = function (e) {
                    return n((function (t, r) {
                        var n = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, s = i > 2 ? r[2] : void 0;
                        for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, s && o(r[0], r[1], s) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++n < i;) {
                            var l = r[n];
                            l && e(t, l, n, a)
                        }
                        return t
                    }))
                }
            }, bz5b: (e, t, r) => {
                var n = r("9y2L");
                e.exports = function (e, t) {
                    return function (r, o) {
                        if (null == r) return r;
                        if (!n(r)) return e(r, o);
                        for (var i = r.length, a = t ? i : -1, s = Object(r); (t ? a-- : ++a < i) && !1 !== o(s[a], a, s);) ;
                        return r
                    }
                }
            }, RFxK: e => {
                e.exports = function (e) {
                    return function (t, r, n) {
                        for (var o = -1, i = Object(t), a = n(t), s = a.length; s--;) {
                            var l = a[e ? s : ++o];
                            if (!1 === r(i[l], l, i)) break
                        }
                        return t
                    }
                }
            }, HCUT: (e, t, r) => {
                var n = r("iWTG"), o = r("IBsm");
                e.exports = function (e, t, r) {
                    var i = 1 & t, a = n(e);
                    return function t() {
                        var n = this && this !== o && this instanceof t ? a : e;
                        return n.apply(i ? r : this, arguments)
                    }
                }
            }, iWTG: (e, t, r) => {
                var n = r("vGGS"), o = r("tQYX");
                e.exports = function (e) {
                    return function () {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3]);
                            case 5:
                                return new e(t[0], t[1], t[2], t[3], t[4]);
                            case 6:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                            case 7:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                        }
                        var r = n(e.prototype), i = e.apply(r, t);
                        return o(i) ? i : r
                    }
                }
            }, LtMG: (e, t, r) => {
                var n = r("zaNA"), o = r("iWTG"), i = r("JtPM"), a = r("kBvp"), s = r("4mQY"), l = r("AeOa"),
                    c = r("IBsm");
                e.exports = function (e, t, r) {
                    var u = o(e);
                    return function o() {
                        for (var d = arguments.length, p = Array(d), f = d, g = s(o); f--;) p[f] = arguments[f];
                        var h = d < 3 && p[0] !== g && p[d - 1] !== g ? [] : l(p, g);
                        if ((d -= h.length) < r) return a(e, t, i, o.placeholder, void 0, p, h, void 0, void 0, r - d);
                        var b = this && this !== c && this instanceof o ? u : e;
                        return n(b, this, p)
                    }
                }
            }, tUbk: (e, t, r) => {
                var n = r("0+c5"), o = r("cH1A"), i = r("rjis"), a = r("rKb1"), s = r("wxYD"), l = r("/Bkq");
                e.exports = function (e) {
                    return o((function (t) {
                        var r = t.length, o = r, c = n.prototype.thru;
                        for (e && t.reverse(); o--;) {
                            var u = t[o];
                            if ("function" != typeof u) throw new TypeError("Expected a function");
                            if (c && !d && "wrapper" == a(u)) var d = new n([], !0)
                        }
                        for (o = d ? o : r; ++o < r;) {
                            u = t[o];
                            var p = a(u), f = "wrapper" == p ? i(u) : void 0;
                            d = f && l(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? d[a(f[0])].apply(d, f[3]) : 1 == u.length && l(u) ? d[p]() : d.thru(u)
                        }
                        return function () {
                            var e = arguments, n = e[0];
                            if (d && 1 == e.length && s(n)) return d.plant(n).value();
                            for (var o = 0, i = r ? t[o].apply(this, e) : n; ++o < r;) i = t[o].call(this, i);
                            return i
                        }
                    }))
                }
            }, JtPM: (e, t, r) => {
                var n = r("6sC/"), o = r("gGwV"), i = r("qFO/"), a = r("iWTG"), s = r("kBvp"), l = r("4mQY"),
                    c = r("MRwE"), u = r("AeOa"), d = r("IBsm");
                e.exports = function e(t, r, p, f, g, h, b, m, v, y) {
                    var x = 128 & r, w = 1 & r, S = 2 & r, k = 24 & r, C = 512 & r, B = S ? void 0 : a(t);
                    return function A() {
                        for (var E = arguments.length, T = Array(E), O = E; O--;) T[O] = arguments[O];
                        if (k) var _ = l(A), R = i(T, _);
                        if (f && (T = n(T, f, g, k)), h && (T = o(T, h, b, k)), E -= R, k && E < y) {
                            var I = u(T, _);
                            return s(t, r, e, A.placeholder, p, T, I, m, v, y - E)
                        }
                        var j = w ? p : this, z = S ? j[t] : t;
                        return E = T.length, m ? T = c(T, m) : C && E > 1 && T.reverse(), x && v < E && (T.length = v), this && this !== d && this instanceof A && (z = B || a(z)), z.apply(j, T)
                    }
                }
            }, I6tc: (e, t, r) => {
                var n = r("zaNA"), o = r("iWTG"), i = r("IBsm");
                e.exports = function (e, t, r, a) {
                    var s = 1 & t, l = o(e);
                    return function t() {
                        for (var o = -1, c = arguments.length, u = -1, d = a.length, p = Array(d + c), f = this && this !== i && this instanceof t ? l : e; ++u < d;) p[u] = a[u];
                        for (; c--;) p[u++] = arguments[++o];
                        return n(f, s ? r : this, p)
                    }
                }
            }, kBvp: (e, t, r) => {
                var n = r("/Bkq"), o = r("SStt"), i = r("E2v+");
                e.exports = function (e, t, r, a, s, l, c, u, d, p) {
                    var f = 8 & t;
                    t |= f ? 32 : 64, 4 & (t &= ~(f ? 64 : 32)) || (t &= -4);
                    var g = [e, t, s, f ? l : void 0, f ? c : void 0, f ? void 0 : l, f ? void 0 : c, u, d, p],
                        h = r.apply(void 0, g);
                    return n(e) && o(h, g), h.placeholder = a, i(h, e, t)
                }
            }, zWkt: (e, t, r) => {
                var n = r("vyvt"), o = r("kkM+"), i = r("aURW"), a = r("5KBi");
                e.exports = function (e) {
                    return function (t) {
                        var r = o(t);
                        return "[object Map]" == r ? i(t) : "[object Set]" == r ? a(t) : n(t, e(t))
                    }
                }
            }, "P+cI": (e, t, r) => {
                var n = r("uA6v"), o = r("HCUT"), i = r("LtMG"), a = r("JtPM"), s = r("I6tc"), l = r("rjis"),
                    c = r("9Oiy"), u = r("SStt"), d = r("E2v+"), p = r("m2YG"), f = Math.max;
                e.exports = function (e, t, r, g, h, b, m, v) {
                    var y = 2 & t;
                    if (!y && "function" != typeof e) throw new TypeError("Expected a function");
                    var x = g ? g.length : 0;
                    if (x || (t &= -97, g = h = void 0), m = void 0 === m ? m : f(p(m), 0), v = void 0 === v ? v : p(v), x -= h ? h.length : 0, 64 & t) {
                        var w = g, S = h;
                        g = h = void 0
                    }
                    var k = y ? void 0 : l(e), C = [e, t, r, g, h, w, S, b, m, v];
                    if (k && c(C, k), e = C[0], t = C[1], r = C[2], g = C[3], h = C[4], !(v = C[9] = void 0 === C[9] ? y ? 0 : e.length : f(C[9] - x, 0)) && 24 & t && (t &= -25), t && 1 != t) B = 8 == t || 16 == t ? i(e, t, v) : 32 != t && 33 != t || h.length ? a.apply(void 0, C) : s(e, t, r, g); else var B = o(e, t, r);
                    return d((k ? n : u)(B, C), e, t)
                }
            }, "Pz+s": (e, t, r) => {
                var n = r("vxC8"), o = function () {
                    try {
                        var e = n(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (t) {
                    }
                }();
                e.exports = o
            }, "ZZ+W": (e, t, r) => {
                var n = r("JBn+"), o = r("myUI"), i = r("S0iI");
                e.exports = function (e, t, r, a, s, l) {
                    var c = 1 & r, u = e.length, d = t.length;
                    if (u != d && !(c && d > u)) return !1;
                    var p = l.get(e), f = l.get(t);
                    if (p && f) return p == t && f == e;
                    var g = -1, h = !0, b = 2 & r ? new n : void 0;
                    for (l.set(e, t), l.set(t, e); ++g < u;) {
                        var m = e[g], v = t[g];
                        if (a) var y = c ? a(v, m, g, t, e, l) : a(m, v, g, e, t, l);
                        if (void 0 !== y) {
                            if (y) continue;
                            h = !1;
                            break
                        }
                        if (b) {
                            if (!o(t, (function (e, t) {
                                if (!i(b, t) && (m === e || s(m, e, r, a, l))) return b.push(t)
                            }))) {
                                h = !1;
                                break
                            }
                        } else if (m !== v && !s(m, v, r, a, l)) {
                            h = !1;
                            break
                        }
                    }
                    return l.delete(e), l.delete(t), h
                }
            }, R3gn: (e, t, r) => {
                var n = r("Syyo"), o = r("mGzy"), i = r("pPzx"), a = r("ZZ+W"), s = r("aURW"), l = r("XlL0"),
                    c = n ? n.prototype : void 0, u = c ? c.valueOf : void 0;
                e.exports = function (e, t, r, n, c, d, p) {
                    switch (r) {
                        case"[object DataView]":
                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                            e = e.buffer, t = t.buffer;
                        case"[object ArrayBuffer]":
                            return !(e.byteLength != t.byteLength || !d(new o(e), new o(t)));
                        case"[object Boolean]":
                        case"[object Date]":
                        case"[object Number]":
                            return i(+e, +t);
                        case"[object Error]":
                            return e.name == t.name && e.message == t.message;
                        case"[object RegExp]":
                        case"[object String]":
                            return e == t + "";
                        case"[object Map]":
                            var f = s;
                        case"[object Set]":
                            var g = 1 & n;
                            if (f || (f = l), e.size != t.size && !g) return !1;
                            var h = p.get(e);
                            if (h) return h == t;
                            n |= 2, p.set(e, t);
                            var b = a(f(e), f(t), n, c, d, p);
                            return p.delete(e), b;
                        case"[object Symbol]":
                            if (u) return u.call(e) == u.call(t)
                    }
                    return !1
                }
            }, yZHP: (e, t, r) => {
                var n = r("tlBq"), o = Object.prototype.hasOwnProperty;
                e.exports = function (e, t, r, i, a, s) {
                    var l = 1 & r, c = n(e), u = c.length;
                    if (u != n(t).length && !l) return !1;
                    for (var d = u; d--;) {
                        var p = c[d];
                        if (!(l ? p in t : o.call(t, p))) return !1
                    }
                    var f = s.get(e), g = s.get(t);
                    if (f && g) return f == t && g == e;
                    var h = !0;
                    s.set(e, t), s.set(t, e);
                    for (var b = l; ++d < u;) {
                        var m = e[p = c[d]], v = t[p];
                        if (i) var y = l ? i(v, m, p, t, e, s) : i(m, v, p, e, t, s);
                        if (!(void 0 === y ? m === v || a(m, v, r, i, s) : y)) {
                            h = !1;
                            break
                        }
                        b || (b = "constructor" == p)
                    }
                    if (h && !b) {
                        var x = e.constructor, w = t.constructor;
                        x == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof x && x instanceof x && "function" == typeof w && w instanceof w || (h = !1)
                    }
                    return s.delete(e), s.delete(t), h
                }
            }, cH1A: (e, t, r) => {
                var n = r("1xil"), o = r("UAs9"), i = r("7Pat");
                e.exports = function (e) {
                    return i(o(e, void 0, n), e + "")
                }
            }, e93E: (e, t, r) => {
                var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
                e.exports = n
            }, tlBq: (e, t, r) => {
                var n = r("pIod"), o = r("70Le"), i = r("BlJA");
                e.exports = function (e) {
                    return n(e, i, o)
                }
            }, rjis: (e, t, r) => {
                var n = r("BVx2"), o = r("nnm9"), i = n ? function (e) {
                    return n.get(e)
                } : o;
                e.exports = i
            }, rKb1: (e, t, r) => {
                var n = r("QaiR"), o = Object.prototype.hasOwnProperty;
                e.exports = function (e) {
                    for (var t = e.name + "", r = n[t], i = o.call(n, t) ? r.length : 0; i--;) {
                        var a = r[i], s = a.func;
                        if (null == s || s == e) return a.name
                    }
                    return t
                }
            }, "4mQY": e => {
                e.exports = function (e) {
                    return e.placeholder
                }
            }, JNqh: (e, t, r) => {
                var n = r("6UKJ");
                e.exports = function (e, t) {
                    var r = e.__data__;
                    return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
                }
            }, hMsr: (e, t, r) => {
                var n = r("+tCn"), o = r("BlJA");
                e.exports = function (e) {
                    for (var t = o(e), r = t.length; r--;) {
                        var i = t[r], a = e[i];
                        t[r] = [i, a, n(a)]
                    }
                    return t
                }
            }, vxC8: (e, t, r) => {
                var n = r("5nKN"), o = r("4p/L");
                e.exports = function (e, t) {
                    var r = o(e, t);
                    return n(r) ? r : void 0
                }
            }, "/wCD": (e, t, r) => {
                var n = r("TAtK")(Object.getPrototypeOf, Object);
                e.exports = n
            }, KCLV: (e, t, r) => {
                var n = r("Syyo"), o = Object.prototype, i = o.hasOwnProperty, a = o.toString,
                    s = n ? n.toStringTag : void 0;
                e.exports = function (e) {
                    var t = i.call(e, s), r = e[s];
                    try {
                        e[s] = void 0;
                        var n = !0
                    } catch (l) {
                    }
                    var o = a.call(e);
                    return n && (t ? e[s] = r : delete e[s]), o
                }
            }, "70Le": (e, t, r) => {
                var n = r("W0vE"), o = r("X4R2"), i = Object.prototype.propertyIsEnumerable,
                    a = Object.getOwnPropertySymbols, s = a ? function (e) {
                        return null == e ? [] : (e = Object(e), n(a(e), (function (t) {
                            return i.call(e, t)
                        })))
                    } : o;
                e.exports = s
            }, "kkM+": (e, t, r) => {
                var n = r("QF3D"), o = r("qeCs"), i = r("IS0S"), a = r("OBn4"), s = r("4+Vk"), l = r("Dhk8"),
                    c = r("c18h"), u = "[object Map]", d = "[object Promise]", p = "[object Set]",
                    f = "[object WeakMap]", g = "[object DataView]", h = c(n), b = c(o), m = c(i), v = c(a), y = c(s),
                    x = l;
                (n && x(new n(new ArrayBuffer(1))) != g || o && x(new o) != u || i && x(i.resolve()) != d || a && x(new a) != p || s && x(new s) != f) && (x = function (e) {
                    var t = l(e), r = "[object Object]" == t ? e.constructor : void 0, n = r ? c(r) : "";
                    if (n) switch (n) {
                        case h:
                            return g;
                        case b:
                            return u;
                        case m:
                            return d;
                        case v:
                            return p;
                        case y:
                            return f
                    }
                    return t
                }), e.exports = x
            }, "4p/L": e => {
                e.exports = function (e, t) {
                    return null == e ? void 0 : e[t]
                }
            }, wafF: e => {
                var t = /\{\n\/\* \[wrapped with (.+)\] \*/, r = /,? & /;
                e.exports = function (e) {
                    var n = e.match(t);
                    return n ? n[1].split(r) : []
                }
            }, "z+TE": (e, t, r) => {
                var n = r("xoyU"), o = r("bvyN"), i = r("wxYD"), a = r("pnw1"), s = r("t0L4"), l = r("Ypsa");
                e.exports = function (e, t, r) {
                    for (var c = -1, u = (t = n(t, e)).length, d = !1; ++c < u;) {
                        var p = l(t[c]);
                        if (!(d = null != e && r(e, p))) break;
                        e = e[p]
                    }
                    return d || ++c != u ? d : !!(u = null == e ? 0 : e.length) && s(u) && a(p, u) && (i(e) || o(e))
                }
            }, "2Fbm": (e, t, r) => {
                var n = r("5pfJ");
                e.exports = function () {
                    this.__data__ = n ? n(null) : {}, this.size = 0
                }
            }, VPai: e => {
                e.exports = function (e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t
                }
            }, "+fUG": (e, t, r) => {
                var n = r("5pfJ"), o = Object.prototype.hasOwnProperty;
                e.exports = function (e) {
                    var t = this.__data__;
                    if (n) {
                        var r = t[e];
                        return "__lodash_hash_undefined__" === r ? void 0 : r
                    }
                    return o.call(t, e) ? t[e] : void 0
                }
            }, QMz8: (e, t, r) => {
                var n = r("5pfJ"), o = Object.prototype.hasOwnProperty;
                e.exports = function (e) {
                    var t = this.__data__;
                    return n ? void 0 !== t[e] : o.call(t, e)
                }
            }, mUsV: (e, t, r) => {
                var n = r("5pfJ");
                e.exports = function (e, t) {
                    var r = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this
                }
            }, sD1O: (e, t, r) => {
                var n = r("vGGS"), o = r("/wCD"), i = r("CbIe");
                e.exports = function (e) {
                    return "function" != typeof e.constructor || i(e) ? {} : n(o(e))
                }
            }, kEP7: e => {
                var t = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
                e.exports = function (e, r) {
                    var n = r.length;
                    if (!n) return e;
                    var o = n - 1;
                    return r[o] = (n > 1 ? "& " : "") + r[o], r = r.join(n > 2 ? ", " : " "), e.replace(t, "{\n/* [wrapped with " + r + "] */\n")
                }
            }, oCTG: (e, t, r) => {
                var n = r("Syyo"), o = r("bvyN"), i = r("wxYD"), a = n ? n.isConcatSpreadable : void 0;
                e.exports = function (e) {
                    return i(e) || o(e) || !!(a && e && e[a])
                }
            }, pnw1: e => {
                var t = /^(?:0|[1-9]\d*)$/;
                e.exports = function (e, r) {
                    var n = typeof e;
                    return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && t.test(e)) && e > -1 && e % 1 == 0 && e < r
                }
            }, R5u7: (e, t, r) => {
                var n = r("pPzx"), o = r("9y2L"), i = r("pnw1"), a = r("tQYX");
                e.exports = function (e, t, r) {
                    if (!a(r)) return !1;
                    var s = typeof t;
                    return !!("number" == s ? o(r) && i(t, r.length) : "string" == s && t in r) && n(r[t], e)
                }
            }, i7nn: (e, t, r) => {
                var n = r("wxYD"), o = r("a88S"), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
                e.exports = function (e, t) {
                    if (n(e)) return !1;
                    var r = typeof e;
                    return !("number" != r && "symbol" != r && "boolean" != r && null != e && !o(e)) || (a.test(e) || !i.test(e) || null != t && e in Object(t))
                }
            }, "6UKJ": e => {
                e.exports = function (e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }
            }, "/Bkq": (e, t, r) => {
                var n = r("deT9"), o = r("rjis"), i = r("rKb1"), a = r("jm4U");
                e.exports = function (e) {
                    var t = i(e), r = a[t];
                    if ("function" != typeof r || !(t in n.prototype)) return !1;
                    if (e === r) return !0;
                    var s = o(r);
                    return !!s && e === s[0]
                }
            }, "9vbJ": (e, t, r) => {
                var n = r("3KBa"), o = function () {
                    var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }();
                e.exports = function (e) {
                    return !!o && o in e
                }
            }, CbIe: e => {
                var t = Object.prototype;
                e.exports = function (e) {
                    var r = e && e.constructor;
                    return e === ("function" == typeof r && r.prototype || t)
                }
            }, "+tCn": (e, t, r) => {
                var n = r("tQYX");
                e.exports = function (e) {
                    return e === e && !n(e)
                }
            }, "8Zrg": e => {
                e.exports = function () {
                    this.__data__ = [], this.size = 0
                }
            }, kwr2: (e, t, r) => {
                var n = r("6QIk"), o = Array.prototype.splice;
                e.exports = function (e) {
                    var t = this.__data__, r = n(t, e);
                    return !(r < 0) && (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, !0)
                }
            }, "5VYK": (e, t, r) => {
                var n = r("6QIk");
                e.exports = function (e) {
                    var t = this.__data__, r = n(t, e);
                    return r < 0 ? void 0 : t[r][1]
                }
            }, "Coc+": (e, t, r) => {
                var n = r("6QIk");
                e.exports = function (e) {
                    return n(this.__data__, e) > -1
                }
            }, LzM7: (e, t, r) => {
                var n = r("6QIk");
                e.exports = function (e, t) {
                    var r = this.__data__, o = n(r, e);
                    return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this
                }
            }, m5o6: (e, t, r) => {
                var n = r("Tv3l"), o = r("+ooz"), i = r("qeCs");
                e.exports = function () {
                    this.size = 0, this.__data__ = {hash: new n, map: new (i || o), string: new n}
                }
            }, d0UJ: (e, t, r) => {
                var n = r("JNqh");
                e.exports = function (e) {
                    var t = n(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t
                }
            }, eask: (e, t, r) => {
                var n = r("JNqh");
                e.exports = function (e) {
                    return n(this, e).get(e)
                }
            }, "9SKQ": (e, t, r) => {
                var n = r("JNqh");
                e.exports = function (e) {
                    return n(this, e).has(e)
                }
            }, e63W: (e, t, r) => {
                var n = r("JNqh");
                e.exports = function (e, t) {
                    var r = n(this, e), o = r.size;
                    return r.set(e, t), this.size += r.size == o ? 0 : 1, this
                }
            }, aURW: e => {
                e.exports = function (e) {
                    var t = -1, r = Array(e.size);
                    return e.forEach((function (e, n) {
                        r[++t] = [n, e]
                    })), r
                }
            }, "0Ss3": e => {
                e.exports = function (e, t) {
                    return function (r) {
                        return null != r && (r[e] === t && (void 0 !== t || e in Object(r)))
                    }
                }
            }, "0+aC": (e, t, r) => {
                var n = r("pFSi");
                e.exports = function (e) {
                    var t = n(e, (function (e) {
                        return 500 === r.size && r.clear(), e
                    })), r = t.cache;
                    return t
                }
            }, "9Oiy": (e, t, r) => {
                var n = r("6sC/"), o = r("gGwV"), i = r("AeOa"), a = "__lodash_placeholder__", s = 128, l = Math.min;
                e.exports = function (e, t) {
                    var r = e[1], c = t[1], u = r | c, d = u < 131,
                        p = c == s && 8 == r || c == s && 256 == r && e[7].length <= t[8] || 384 == c && t[7].length <= t[8] && 8 == r;
                    if (!d && !p) return e;
                    1 & c && (e[2] = t[2], u |= 1 & r ? 0 : 4);
                    var f = t[3];
                    if (f) {
                        var g = e[3];
                        e[3] = g ? n(g, f, t[4]) : f, e[4] = g ? i(e[3], a) : t[4]
                    }
                    return (f = t[5]) && (g = e[5], e[5] = g ? o(g, f, t[6]) : f, e[6] = g ? i(e[5], a) : t[6]), (f = t[7]) && (e[7] = f), c & s && (e[8] = null == e[8] ? t[8] : l(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = u, e
                }
            }, BVx2: (e, t, r) => {
                var n = r("4+Vk"), o = n && new n;
                e.exports = o
            }, "5pfJ": (e, t, r) => {
                var n = r("vxC8")(Object, "create");
                e.exports = n
            }, OtNC: (e, t, r) => {
                var n = r("TAtK")(Object.keys, Object);
                e.exports = n
            }, "/UTG": e => {
                e.exports = function (e) {
                    var t = [];
                    if (null != e) for (var r in Object(e)) t.push(r);
                    return t
                }
            }, T6vp: (e, t, r) => {
                e = r.nmd(e);
                var n = r("e93E"), o = t && !t.nodeType && t, i = o && e && !e.nodeType && e,
                    a = i && i.exports === o && n.process, s = function () {
                        try {
                            var e = i && i.require && i.require("util").types;
                            return e || a && a.binding && a.binding("util")
                        } catch (t) {
                        }
                    }();
                e.exports = s
            }, kHoZ: e => {
                var t = Object.prototype.toString;
                e.exports = function (e) {
                    return t.call(e)
                }
            }, TAtK: e => {
                e.exports = function (e, t) {
                    return function (r) {
                        return e(t(r))
                    }
                }
            }, UAs9: (e, t, r) => {
                var n = r("zaNA"), o = Math.max;
                e.exports = function (e, t, r) {
                    return t = o(void 0 === t ? e.length - 1 : t, 0), function () {
                        for (var i = arguments, a = -1, s = o(i.length - t, 0), l = Array(s); ++a < s;) l[a] = i[t + a];
                        a = -1;
                        for (var c = Array(t + 1); ++a < t;) c[a] = i[a];
                        return c[t] = r(l), n(e, this, c)
                    }
                }
            }, QaiR: e => {
                e.exports = {}
            }, MRwE: (e, t, r) => {
                var n = r("QT01"), o = r("pnw1"), i = Math.min;
                e.exports = function (e, t) {
                    for (var r = e.length, a = i(t.length, r), s = n(e); a--;) {
                        var l = t[a];
                        e[a] = o(l, r) ? s[l] : void 0
                    }
                    return e
                }
            }, AeOa: e => {
                var t = "__lodash_placeholder__";
                e.exports = function (e, r) {
                    for (var n = -1, o = e.length, i = 0, a = []; ++n < o;) {
                        var s = e[n];
                        s !== r && s !== t || (e[n] = t, a[i++] = n)
                    }
                    return a
                }
            }, IBsm: (e, t, r) => {
                var n = r("e93E"), o = "object" == typeof self && self && self.Object === Object && self,
                    i = n || o || Function("return this")();
                e.exports = i
            }, LL3N: e => {
                e.exports = function (e, t) {
                    if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) return e[t]
                }
            }, qjF7: e => {
                e.exports = function (e) {
                    return this.__data__.set(e, "__lodash_hash_undefined__"), this
                }
            }, cEmw: e => {
                e.exports = function (e) {
                    return this.__data__.has(e)
                }
            }, SStt: (e, t, r) => {
                var n = r("uA6v"), o = r("kG2z")(n);
                e.exports = o
            }, XlL0: e => {
                e.exports = function (e) {
                    var t = -1, r = Array(e.size);
                    return e.forEach((function (e) {
                        r[++t] = e
                    })), r
                }
            }, "5KBi": e => {
                e.exports = function (e) {
                    var t = -1, r = Array(e.size);
                    return e.forEach((function (e) {
                        r[++t] = [e, e]
                    })), r
                }
            }, "7Pat": (e, t, r) => {
                var n = r("+7q0"), o = r("kG2z")(n);
                e.exports = o
            }, "E2v+": (e, t, r) => {
                var n = r("wafF"), o = r("kEP7"), i = r("7Pat"), a = r("p4bK");
                e.exports = function (e, t, r) {
                    var s = t + "";
                    return i(e, o(s, a(n(s), r)))
                }
            }, kG2z: e => {
                var t = Date.now;
                e.exports = function (e) {
                    var r = 0, n = 0;
                    return function () {
                        var o = t(), i = 16 - (o - n);
                        if (n = o, i > 0) {
                            if (++r >= 800) return arguments[0]
                        } else r = 0;
                        return e.apply(void 0, arguments)
                    }
                }
            }, RNlM: (e, t, r) => {
                var n = r("+ooz");
                e.exports = function () {
                    this.__data__ = new n, this.size = 0
                }
            }, E4ao: e => {
                e.exports = function (e) {
                    var t = this.__data__, r = t.delete(e);
                    return this.size = t.size, r
                }
            }, BSqe: e => {
                e.exports = function (e) {
                    return this.__data__.get(e)
                }
            }, L6um: e => {
                e.exports = function (e) {
                    return this.__data__.has(e)
                }
            }, "4/ik": (e, t, r) => {
                var n = r("+ooz"), o = r("qeCs"), i = r("hyzI");
                e.exports = function (e, t) {
                    var r = this.__data__;
                    if (r instanceof n) {
                        var a = r.__data__;
                        if (!o || a.length < 199) return a.push([e, t]), this.size = ++r.size, this;
                        r = this.__data__ = new i(a)
                    }
                    return r.set(e, t), this.size = r.size, this
                }
            }, n1QJ: e => {
                e.exports = function (e, t, r) {
                    for (var n = r - 1, o = e.length; ++n < o;) if (e[n] === t) return n;
                    return -1
                }
            }, SoOq: (e, t, r) => {
                var n = r("0+aC"),
                    o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    i = /\\(\\)?/g, a = n((function (e) {
                        var t = [];
                        return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, (function (e, r, n, o) {
                            t.push(n ? o.replace(i, "$1") : r || e)
                        })), t
                    }));
                e.exports = a
            }, Ypsa: (e, t, r) => {
                var n = r("a88S");
                e.exports = function (e) {
                    if ("string" == typeof e || n(e)) return e;
                    var t = e + "";
                    return "0" == t && 1 / e == -Infinity ? "-0" : t
                }
            }, c18h: e => {
                var t = Function.prototype.toString;
                e.exports = function (e) {
                    if (null != e) {
                        try {
                            return t.call(e)
                        } catch (r) {
                        }
                        try {
                            return e + ""
                        } catch (r) {
                        }
                    }
                    return ""
                }
            }, "6XIJ": e => {
                var t = /\s/;
                e.exports = function (e) {
                    for (var r = e.length; r-- && t.test(e.charAt(r));) ;
                    return r
                }
            }, p4bK: (e, t, r) => {
                var n = r("LmOH"), o = r("OfKG"),
                    i = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]];
                e.exports = function (e, t) {
                    return n(i, (function (r) {
                        var n = "_." + r[0];
                        t & r[1] && !o(e, n) && e.push(n)
                    })), e.sort()
                }
            }, "e+ll": (e, t, r) => {
                var n = r("deT9"), o = r("0+c5"), i = r("QT01");
                e.exports = function (e) {
                    if (e instanceof n) return e.clone();
                    var t = new o(e.__wrapped__, e.__chain__);
                    return t.__actions__ = i(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                }
            }, eN33: e => {
                e.exports = function (e) {
                    return function () {
                        return e
                    }
                }
            }, "3POh": (e, t, r) => {
                var n = r("P+cI");

                function o(e, t, r) {
                    var i = n(e, 16, void 0, void 0, void 0, void 0, void 0, t = r ? void 0 : t);
                    return i.placeholder = o.placeholder, i
                }

                o.placeholder = {}, e.exports = o
            }, pPzx: e => {
                e.exports = function (e, t) {
                    return e === t || e !== e && t !== t
                }
            }, "1xil": (e, t, r) => {
                var n = r("YpBQ");
                e.exports = function (e) {
                    return (null == e ? 0 : e.length) ? n(e, 1) : []
                }
            }, jPI1: (e, t, r) => {
                var n = r("tUbk")();
                e.exports = n
            }, "2srY": (e, t, r) => {
                var n = r("w2Tz");
                e.exports = function (e, t, r) {
                    var o = null == e ? void 0 : n(e, t);
                    return void 0 === o ? r : o
                }
            }, "NW/2": (e, t, r) => {
                var n = r("JYmt"), o = r("z+TE");
                e.exports = function (e, t) {
                    return null != e && o(e, t, n)
                }
            }, zWgn: e => {
                e.exports = function (e) {
                    return e
                }
            }, bvyN: (e, t, r) => {
                var n = r("/30y"), o = r("tLQN"), i = Object.prototype, a = i.hasOwnProperty,
                    s = i.propertyIsEnumerable, l = n(function () {
                        return arguments
                    }()) ? n : function (e) {
                        return o(e) && a.call(e, "callee") && !s.call(e, "callee")
                    };
                e.exports = l
            }, wxYD: e => {
                var t = Array.isArray;
                e.exports = t
            }, "9y2L": (e, t, r) => {
                var n = r("2q8g"), o = r("t0L4");
                e.exports = function (e) {
                    return null != e && o(e.length) && !n(e)
                }
            }, Ndl3: (e, t, r) => {
                var n = r("9y2L"), o = r("tLQN");
                e.exports = function (e) {
                    return o(e) && n(e)
                }
            }, "3ajY": (e, t, r) => {
                e = r.nmd(e);
                var n = r("IBsm"), o = r("DjCF"), i = t && !t.nodeType && t, a = i && e && !e.nodeType && e,
                    s = a && a.exports === i ? n.Buffer : void 0, l = (s ? s.isBuffer : void 0) || o;
                e.exports = l
            }, "2q8g": (e, t, r) => {
                var n = r("Dhk8"), o = r("tQYX");
                e.exports = function (e) {
                    if (!o(e)) return !1;
                    var t = n(e);
                    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
                }
            }, t0L4: e => {
                e.exports = function (e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                }
            }, tQYX: e => {
                e.exports = function (e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }
            }, tLQN: e => {
                e.exports = function (e) {
                    return null != e && "object" == typeof e
                }
            }, Kkar: (e, t, r) => {
                var n = r("Dhk8"), o = r("/wCD"), i = r("tLQN"), a = Function.prototype, s = Object.prototype,
                    l = a.toString, c = s.hasOwnProperty, u = l.call(Object);
                e.exports = function (e) {
                    if (!i(e) || "[object Object]" != n(e)) return !1;
                    var t = o(e);
                    if (null === t) return !0;
                    var r = c.call(t, "constructor") && t.constructor;
                    return "function" == typeof r && r instanceof r && l.call(r) == u
                }
            }, a88S: (e, t, r) => {
                var n = r("Dhk8"), o = r("tLQN");
                e.exports = function (e) {
                    return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e)
                }
            }, Qd2C: (e, t, r) => {
                var n = r("7/jS"), o = r("SU8Q"), i = r("T6vp"), a = i && i.isTypedArray, s = a ? o(a) : n;
                e.exports = s
            }, BlJA: (e, t, r) => {
                var n = r("rmhs"), o = r("4uJK"), i = r("9y2L");
                e.exports = function (e) {
                    return i(e) ? n(e) : o(e)
                }
            }, "zH+d": (e, t, r) => {
                var n = r("rmhs"), o = r("p2lg"), i = r("9y2L");
                e.exports = function (e) {
                    return i(e) ? n(e, !0) : o(e)
                }
            }, pFSi: (e, t, r) => {
                var n = r("hyzI");

                function o(e, t) {
                    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                    var r = function () {
                        var n = arguments, o = t ? t.apply(this, n) : n[0], i = r.cache;
                        if (i.has(o)) return i.get(o);
                        var a = e.apply(this, n);
                        return r.cache = i.set(o, a) || i, a
                    };
                    return r.cache = new (o.Cache || n), r
                }

                o.Cache = n, e.exports = o
            }, H8sf: (e, t, r) => {
                var n = r("MzY2"), o = r("wpQC")((function (e, t, r) {
                    n(e, t, r)
                }));
                e.exports = o
            }, nnm9: e => {
                e.exports = function () {
                }
            }, "1EDM": (e, t, r) => {
                var n = r("EI7Z"), o = r("CEyS"), i = r("i7nn"), a = r("Ypsa");
                e.exports = function (e) {
                    return i(e) ? n(a(e)) : o(e)
                }
            }, veKZ: (e, t, r) => {
                var n = r("cPMt"), o = r("Q4oW"), i = r("S3pA"), a = r("5q8j"), s = r("wxYD");
                e.exports = function (e, t, r) {
                    var l = s(e) ? n : a, c = arguments.length < 3;
                    return l(e, i(t, 4), r, c, o)
                }
            }, X4R2: e => {
                e.exports = function () {
                    return []
                }
            }, DjCF: e => {
                e.exports = function () {
                    return !1
                }
            }, fWyh: (e, t, r) => {
                var n = r("nvU9"), o = 1 / 0;
                e.exports = function (e) {
                    return e ? (e = n(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
                }
            }, m2YG: (e, t, r) => {
                var n = r("fWyh");
                e.exports = function (e) {
                    var t = n(e), r = t % 1;
                    return t === t ? r ? t - r : t : 0
                }
            }, nvU9: (e, t, r) => {
                var n = r("I1fX"), o = r("tQYX"), i = r("a88S"), a = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i,
                    l = /^0o[0-7]+$/i, c = parseInt;
                e.exports = function (e) {
                    if ("number" == typeof e) return e;
                    if (i(e)) return NaN;
                    if (o(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = o(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = n(e);
                    var r = s.test(e);
                    return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
                }
            }, "pL+m": (e, t, r) => {
                var n = r("zWkt")(r("BlJA"));
                e.exports = n
            }, "4ScB": (e, t, r) => {
                var n = r("LtXa"), o = r("zH+d");
                e.exports = function (e) {
                    return n(e, o(e))
                }
            }, dw5g: (e, t, r) => {
                var n = r("JcJ6");
                e.exports = function (e) {
                    return null == e ? "" : n(e)
                }
            }, jm4U: (e, t, r) => {
                var n = r("deT9"), o = r("0+c5"), i = r("obGE"), a = r("wxYD"), s = r("tLQN"), l = r("e+ll"),
                    c = Object.prototype.hasOwnProperty;

                function u(e) {
                    if (s(e) && !a(e) && !(e instanceof n)) {
                        if (e instanceof o) return e;
                        if (c.call(e, "__wrapped__")) return l(e)
                    }
                    return new o(e)
                }

                u.prototype = i.prototype, u.prototype.constructor = u, e.exports = u
            }, Kttv: (e, t, r) => {
                !function () {
                    var t = r("pt+S"), n = r("Ggak").utf8, o = r("lfu7"), i = r("Ggak").bin, a = function (e, r) {
                        e.constructor == String ? e = r && "binary" === r.encoding ? i.stringToBytes(e) : n.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
                        for (var s = t.bytesToWords(e), l = 8 * e.length, c = 1732584193, u = -271733879, d = -1732584194, p = 271733878, f = 0; f < s.length; f++) s[f] = 16711935 & (s[f] << 8 | s[f] >>> 24) | 4278255360 & (s[f] << 24 | s[f] >>> 8);
                        s[l >>> 5] |= 128 << l % 32, s[14 + (l + 64 >>> 9 << 4)] = l;
                        var g = a._ff, h = a._gg, b = a._hh, m = a._ii;
                        for (f = 0; f < s.length; f += 16) {
                            var v = c, y = u, x = d, w = p;
                            c = g(c, u, d, p, s[f + 0], 7, -680876936), p = g(p, c, u, d, s[f + 1], 12, -389564586), d = g(d, p, c, u, s[f + 2], 17, 606105819), u = g(u, d, p, c, s[f + 3], 22, -1044525330), c = g(c, u, d, p, s[f + 4], 7, -176418897), p = g(p, c, u, d, s[f + 5], 12, 1200080426), d = g(d, p, c, u, s[f + 6], 17, -1473231341), u = g(u, d, p, c, s[f + 7], 22, -45705983), c = g(c, u, d, p, s[f + 8], 7, 1770035416), p = g(p, c, u, d, s[f + 9], 12, -1958414417), d = g(d, p, c, u, s[f + 10], 17, -42063), u = g(u, d, p, c, s[f + 11], 22, -1990404162), c = g(c, u, d, p, s[f + 12], 7, 1804603682), p = g(p, c, u, d, s[f + 13], 12, -40341101), d = g(d, p, c, u, s[f + 14], 17, -1502002290), c = h(c, u = g(u, d, p, c, s[f + 15], 22, 1236535329), d, p, s[f + 1], 5, -165796510), p = h(p, c, u, d, s[f + 6], 9, -1069501632), d = h(d, p, c, u, s[f + 11], 14, 643717713), u = h(u, d, p, c, s[f + 0], 20, -373897302), c = h(c, u, d, p, s[f + 5], 5, -701558691), p = h(p, c, u, d, s[f + 10], 9, 38016083), d = h(d, p, c, u, s[f + 15], 14, -660478335), u = h(u, d, p, c, s[f + 4], 20, -405537848), c = h(c, u, d, p, s[f + 9], 5, 568446438), p = h(p, c, u, d, s[f + 14], 9, -1019803690), d = h(d, p, c, u, s[f + 3], 14, -187363961), u = h(u, d, p, c, s[f + 8], 20, 1163531501), c = h(c, u, d, p, s[f + 13], 5, -1444681467), p = h(p, c, u, d, s[f + 2], 9, -51403784), d = h(d, p, c, u, s[f + 7], 14, 1735328473), c = b(c, u = h(u, d, p, c, s[f + 12], 20, -1926607734), d, p, s[f + 5], 4, -378558), p = b(p, c, u, d, s[f + 8], 11, -2022574463), d = b(d, p, c, u, s[f + 11], 16, 1839030562), u = b(u, d, p, c, s[f + 14], 23, -35309556), c = b(c, u, d, p, s[f + 1], 4, -1530992060), p = b(p, c, u, d, s[f + 4], 11, 1272893353), d = b(d, p, c, u, s[f + 7], 16, -155497632), u = b(u, d, p, c, s[f + 10], 23, -1094730640), c = b(c, u, d, p, s[f + 13], 4, 681279174), p = b(p, c, u, d, s[f + 0], 11, -358537222), d = b(d, p, c, u, s[f + 3], 16, -722521979), u = b(u, d, p, c, s[f + 6], 23, 76029189), c = b(c, u, d, p, s[f + 9], 4, -640364487), p = b(p, c, u, d, s[f + 12], 11, -421815835), d = b(d, p, c, u, s[f + 15], 16, 530742520), c = m(c, u = b(u, d, p, c, s[f + 2], 23, -995338651), d, p, s[f + 0], 6, -198630844), p = m(p, c, u, d, s[f + 7], 10, 1126891415), d = m(d, p, c, u, s[f + 14], 15, -1416354905), u = m(u, d, p, c, s[f + 5], 21, -57434055), c = m(c, u, d, p, s[f + 12], 6, 1700485571), p = m(p, c, u, d, s[f + 3], 10, -1894986606), d = m(d, p, c, u, s[f + 10], 15, -1051523), u = m(u, d, p, c, s[f + 1], 21, -2054922799), c = m(c, u, d, p, s[f + 8], 6, 1873313359), p = m(p, c, u, d, s[f + 15], 10, -30611744), d = m(d, p, c, u, s[f + 6], 15, -1560198380), u = m(u, d, p, c, s[f + 13], 21, 1309151649), c = m(c, u, d, p, s[f + 4], 6, -145523070), p = m(p, c, u, d, s[f + 11], 10, -1120210379), d = m(d, p, c, u, s[f + 2], 15, 718787259), u = m(u, d, p, c, s[f + 9], 21, -343485551), c = c + v >>> 0, u = u + y >>> 0, d = d + x >>> 0, p = p + w >>> 0
                        }
                        return t.endian([c, u, d, p])
                    };
                    a._ff = function (e, t, r, n, o, i, a) {
                        var s = e + (t & r | ~t & n) + (o >>> 0) + a;
                        return (s << i | s >>> 32 - i) + t
                    }, a._gg = function (e, t, r, n, o, i, a) {
                        var s = e + (t & n | r & ~n) + (o >>> 0) + a;
                        return (s << i | s >>> 32 - i) + t
                    }, a._hh = function (e, t, r, n, o, i, a) {
                        var s = e + (t ^ r ^ n) + (o >>> 0) + a;
                        return (s << i | s >>> 32 - i) + t
                    }, a._ii = function (e, t, r, n, o, i, a) {
                        var s = e + (r ^ (t | ~n)) + (o >>> 0) + a;
                        return (s << i | s >>> 32 - i) + t
                    }, a._blocksize = 16, a._digestsize = 16, e.exports = function (e, r) {
                        if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
                        var n = t.wordsToBytes(a(e, r));
                        return r && r.asBytes ? n : r && r.asString ? i.bytesToString(n) : t.bytesToHex(n)
                    }
                }()
            }, maj8: e => {
                "use strict";
                var t = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty,
                    n = Object.prototype.propertyIsEnumerable;

                function o(e) {
                    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }

                e.exports = function () {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                            return t[e]
                        })).join("")) return !1;
                        var n = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                            n[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                    } catch (o) {
                        return !1
                    }
                }() ? Object.assign : function (e, i) {
                    for (var a, s, l = o(e), c = 1; c < arguments.length; c++) {
                        for (var u in a = Object(arguments[c])) r.call(a, u) && (l[u] = a[u]);
                        if (t) {
                            s = t(a);
                            for (var d = 0; d < s.length; d++) n.call(a, s[d]) && (l[s[d]] = a[s[d]])
                        }
                    }
                    return l
                }
            }, F63i: e => {
                var t, r, n = e.exports = {};

                function o() {
                    throw new Error("setTimeout has not been defined")
                }

                function i() {
                    throw new Error("clearTimeout has not been defined")
                }

                function a(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (r) {
                        try {
                            return t.call(null, e, 0)
                        } catch (r) {
                            return t.call(this, e, 0)
                        }
                    }
                }

                !function () {
                    try {
                        t = "function" === typeof setTimeout ? setTimeout : o
                    } catch (e) {
                        t = o
                    }
                    try {
                        r = "function" === typeof clearTimeout ? clearTimeout : i
                    } catch (e) {
                        r = i
                    }
                }();
                var s, l = [], c = !1, u = -1;

                function d() {
                    c && s && (c = !1, s.length ? l = s.concat(l) : u = -1, l.length && p())
                }

                function p() {
                    if (!c) {
                        var e = a(d);
                        c = !0;
                        for (var t = l.length; t;) {
                            for (s = l, l = []; ++u < t;) s && s[u].run();
                            u = -1, t = l.length
                        }
                        s = null, c = !1, function (e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                r(e)
                            } catch (t) {
                                try {
                                    return r.call(null, e)
                                } catch (t) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                    }
                }

                function f(e, t) {
                    this.fun = e, this.array = t
                }

                function g() {
                }

                n.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    l.push(new f(e, t)), 1 !== l.length || c || a(p)
                }, f.prototype.run = function () {
                    this.fun.apply(null, this.array)
                }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = g, n.addListener = g, n.once = g, n.off = g, n.removeListener = g, n.removeAllListeners = g, n.emit = g, n.prependListener = g, n.prependOnceListener = g, n.listeners = function (e) {
                    return []
                }, n.binding = function (e) {
                    throw new Error("process.binding is not supported")
                }, n.cwd = function () {
                    return "/"
                }, n.chdir = function (e) {
                    throw new Error("process.chdir is not supported")
                }, n.umask = function () {
                    return 0
                }
            }, hTPx: (e, t) => {
                "use strict";
                var r = "function" === typeof Symbol && Symbol.for, n = r ? Symbol.for("react.element") : 60103,
                    o = r ? Symbol.for("react.portal") : 60106, i = r ? Symbol.for("react.fragment") : 60107,
                    a = r ? Symbol.for("react.strict_mode") : 60108, s = r ? Symbol.for("react.profiler") : 60114,
                    l = r ? Symbol.for("react.provider") : 60109, c = r ? Symbol.for("react.context") : 60110,
                    u = r ? Symbol.for("react.async_mode") : 60111, d = r ? Symbol.for("react.concurrent_mode") : 60111,
                    p = r ? Symbol.for("react.forward_ref") : 60112, f = r ? Symbol.for("react.suspense") : 60113,
                    g = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115,
                    b = r ? Symbol.for("react.lazy") : 60116, m = r ? Symbol.for("react.block") : 60121,
                    v = r ? Symbol.for("react.fundamental") : 60117, y = r ? Symbol.for("react.responder") : 60118,
                    x = r ? Symbol.for("react.scope") : 60119;

                function w(e) {
                    if ("object" === typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case n:
                                switch (e = e.type) {
                                    case u:
                                    case d:
                                    case i:
                                    case s:
                                    case a:
                                    case f:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case c:
                                            case p:
                                            case b:
                                            case h:
                                            case l:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                            case o:
                                return t
                        }
                    }
                }

                function S(e) {
                    return w(e) === d
                }

                t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = p, t.Fragment = i, t.Lazy = b, t.Memo = h, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = f, t.isAsyncMode = function (e) {
                    return S(e) || w(e) === u
                }, t.isConcurrentMode = S, t.isContextConsumer = function (e) {
                    return w(e) === c
                }, t.isContextProvider = function (e) {
                    return w(e) === l
                }, t.isElement = function (e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
                }, t.isForwardRef = function (e) {
                    return w(e) === p
                }, t.isFragment = function (e) {
                    return w(e) === i
                }, t.isLazy = function (e) {
                    return w(e) === b
                }, t.isMemo = function (e) {
                    return w(e) === h
                }, t.isPortal = function (e) {
                    return w(e) === o
                }, t.isProfiler = function (e) {
                    return w(e) === s
                }, t.isStrictMode = function (e) {
                    return w(e) === a
                }, t.isSuspense = function (e) {
                    return w(e) === f
                }, t.isValidElementType = function (e) {
                    return "string" === typeof e || "function" === typeof e || e === i || e === d || e === s || e === a || e === f || e === g || "object" === typeof e && null !== e && (e.$$typeof === b || e.$$typeof === h || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === v || e.$$typeof === y || e.$$typeof === x || e.$$typeof === m)
                }, t.typeOf = w
            }, kvVz: (e, t, r) => {
                "use strict";
                e.exports = r("hTPx")
            }, sZZk: function (e, t, r) {
                !function (t, n) {
                    var o;
                    e.exports = (o = r("xIFI"), function (e) {
                        function t(n) {
                            if (r[n]) return r[n].exports;
                            var o = r[n] = {i: n, l: !1, exports: {}};
                            return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                        }

                        var r = {};
                        return t.m = e, t.c = r, t.d = function (e, r, n) {
                            t.o(e, r) || Object.defineProperty(e, r, {configurable: !1, enumerable: !0, get: n})
                        }, t.n = function (e) {
                            var r = e && e.__esModule ? function () {
                                return e.default
                            } : function () {
                                return e
                            };
                            return t.d(r, "a", r), r
                        }, t.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }, t.p = "", t(t.s = 7)
                    }([function (e, t, r) {
                        "use strict";

                        function n(e, t) {
                            return l(e) || s(e, t) || i(e, t) || o()
                        }

                        function o() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }

                        function i(e, t) {
                            if (e) {
                                if ("string" == typeof e) return a(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0
                            }
                        }

                        function a(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                            return n
                        }

                        function s(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var r = [], n = !0, o = !1, i = void 0;
                                try {
                                    for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0) ;
                                } catch (l) {
                                    o = !0, i = l
                                } finally {
                                    try {
                                        n || null == s.return || s.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return r
                            }
                        }

                        function l(e) {
                            if (Array.isArray(e)) return e
                        }

                        var c = r(1), u = r.n(c), d = r(8), p = r.n(d), f = r(2), g = r(10), h = r.n(g), b = r(3),
                            m = r(6), v = function (e) {
                                return e.query || Object(b.a)(e)
                            }, y = function (e) {
                                if (!e) return null;
                                var t = Object.keys(e);
                                return 0 === t.length ? null : t.reduce((function (t, r) {
                                    return t[Object(f.a)(r)] = e[r], t
                                }), {})
                            }, x = function () {
                                var e = u.a.useRef(!1);
                                return u.a.useEffect((function () {
                                    e.current = !0
                                }), []), e.current
                            }, w = function (e) {
                                var t = u.a.useContext(m.a), r = function () {
                                    return y(e) || y(t)
                                }, o = n(u.a.useState(r), 2), i = o[0], a = o[1];
                                return u.a.useEffect((function () {
                                    var e = r();
                                    h()(i, e) || a(e)
                                }), [e, t]), i
                            }, S = function (e) {
                                var t = function () {
                                    return v(e)
                                }, r = n(u.a.useState(t), 2), o = r[0], i = r[1];
                                return u.a.useEffect((function () {
                                    var e = t();
                                    o !== e && i(e)
                                }), [e]), o
                            }, k = function (e, t) {
                                var r = function () {
                                    return p()(e, t || {}, !!t)
                                }, o = n(u.a.useState(r), 2), i = o[0], a = o[1], s = x();
                                return u.a.useEffect((function () {
                                    return s && a(r()), function () {
                                        i.dispose()
                                    }
                                }), [e, t]), i
                            }, C = function (e) {
                                var t = n(u.a.useState(e.matches), 2), r = t[0], o = t[1];
                                return u.a.useEffect((function () {
                                    var t = function () {
                                        o(e.matches)
                                    };
                                    return e.addListener(t), t(), function () {
                                        e.removeListener(t)
                                    }
                                }), [e]), r
                            }, B = function (e, t, r) {
                                var n = w(t), o = S(e);
                                if (!o) throw new Error("Invalid or missing MediaQuery!");
                                var i = k(o, n), a = C(i), s = x();
                                return u.a.useEffect((function () {
                                    s && r && r(a)
                                }), [a]), a
                            };
                        t.a = B
                    }, function (e, t) {
                        e.exports = o
                    }, function (e, t, r) {
                        "use strict";

                        function n(e) {
                            return "-" + e.toLowerCase()
                        }

                        function o(e) {
                            if (s.hasOwnProperty(e)) return s[e];
                            var t = e.replace(i, n);
                            return s[e] = a.test(t) ? "-" + t : t
                        }

                        var i = /[A-Z]/g, a = /^ms-/, s = {};
                        t.a = o
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(2), o = r(11), i = function (e) {
                            return "not ".concat(e)
                        }, a = function (e, t) {
                            var r = Object(n.a)(e);
                            return "number" == typeof t && (t = "".concat(t, "px")), !0 === t ? r : !1 === t ? i(r) : "(".concat(r, ": ").concat(t, ")")
                        }, s = function (e) {
                            return e.join(" and ")
                        }, l = function (e) {
                            var t = [];
                            return Object.keys(o.a.all).forEach((function (r) {
                                var n = e[r];
                                null != n && t.push(a(r, n))
                            })), s(t)
                        };
                        t.a = l
                    }, function (e, t, r) {
                        "use strict";
                        e.exports = r(13)
                    }, function (e, t, r) {
                        "use strict";
                        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(1), o = r.n(n).a.createContext();
                        t.a = o
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0});
                        var n = r(0), o = r(17), i = r(3), a = r(6);
                        r.d(t, "default", (function () {
                            return o.a
                        })), r.d(t, "useMediaQuery", (function () {
                            return n.a
                        })), r.d(t, "toQuery", (function () {
                            return i.a
                        })), r.d(t, "Context", (function () {
                            return a.a
                        }))
                    }, function (e, t, r) {
                        "use strict";

                        function n(e, t, r) {
                            function n(e) {
                                u && u.addListener(e)
                            }

                            function o(e) {
                                u && u.removeListener(e)
                            }

                            function s(e) {
                                c.matches = e.matches, c.media = e.media
                            }

                            function l() {
                                u && u.removeListener(s)
                            }

                            var c = this;
                            if (a && !r) {
                                var u = a.call(window, e);
                                this.matches = u.matches, this.media = u.media, u.addListener(s)
                            } else this.matches = i(e, t), this.media = e;
                            this.addListener = n, this.removeListener = o, this.dispose = l
                        }

                        function o(e, t, r) {
                            return new n(e, t, r)
                        }

                        var i = r(9).match, a = "undefined" != typeof window ? window.matchMedia : null;
                        e.exports = o
                    }, function (e, t, r) {
                        "use strict";

                        function n(e, t) {
                            return o(e).some((function (e) {
                                var r = e.inverse, n = "all" === e.type || t.type === e.type;
                                if (n && r || !n && !r) return !1;
                                var o = e.expressions.every((function (e) {
                                    var r = e.feature, n = e.modifier, o = e.value, l = t[r];
                                    if (!l) return !1;
                                    switch (r) {
                                        case"orientation":
                                        case"scan":
                                            return l.toLowerCase() === o.toLowerCase();
                                        case"width":
                                        case"height":
                                        case"device-width":
                                        case"device-height":
                                            o = s(o), l = s(l);
                                            break;
                                        case"resolution":
                                            o = a(o), l = a(l);
                                            break;
                                        case"aspect-ratio":
                                        case"device-aspect-ratio":
                                        case"device-pixel-ratio":
                                            o = i(o), l = i(l);
                                            break;
                                        case"grid":
                                        case"color":
                                        case"color-index":
                                        case"monochrome":
                                            o = parseInt(o, 10) || 1, l = parseInt(l, 10) || 0
                                    }
                                    switch (n) {
                                        case"min":
                                            return l >= o;
                                        case"max":
                                            return l <= o;
                                        default:
                                            return l === o
                                    }
                                }));
                                return o && !r || !o && r
                            }))
                        }

                        function o(e) {
                            return e.split(",").map((function (e) {
                                var t = (e = e.trim()).match(l), r = t[1], n = t[2], o = t[3] || "", i = {};
                                return i.inverse = !!r && "not" === r.toLowerCase(), i.type = n ? n.toLowerCase() : "all", o = o.match(/\([^\)]+\)/g) || [], i.expressions = o.map((function (e) {
                                    var t = e.match(c), r = t[1].toLowerCase().match(u);
                                    return {modifier: r[1], feature: r[2], value: t[2]}
                                })), i
                            }))
                        }

                        function i(e) {
                            var t, r = Number(e);
                            return r || (r = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), r
                        }

                        function a(e) {
                            var t = parseFloat(e);
                            switch (String(e).match(p)[1]) {
                                case"dpcm":
                                    return t / 2.54;
                                case"dppx":
                                    return 96 * t;
                                default:
                                    return t
                            }
                        }

                        function s(e) {
                            var t = parseFloat(e);
                            switch (String(e).match(d)[1]) {
                                case"em":
                                case"rem":
                                    return 16 * t;
                                case"cm":
                                    return 96 * t / 2.54;
                                case"mm":
                                    return 96 * t / 2.54 / 10;
                                case"in":
                                    return 96 * t;
                                case"pt":
                                    return 72 * t;
                                case"pc":
                                    return 72 * t / 12;
                                default:
                                    return t
                            }
                        }

                        t.match = n, t.parse = o;
                        var l = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                            c = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, u = /^(?:(min|max)-)?(.+)/,
                            d = /(em|rem|px|cm|mm|in|pt|pc)?$/, p = /(dpi|dpcm|dppx)?$/
                    }, function (e, t, r) {
                        "use strict";

                        function n(e, t) {
                            if (e === t) return !0;
                            if (!e || !t) return !1;
                            var r = Object.keys(e), n = Object.keys(t), o = r.length;
                            if (n.length !== o) return !1;
                            for (var i = 0; i < o; i++) {
                                var a = r[i];
                                if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
                            }
                            return !0
                        }

                        e.exports = n
                    }, function (e, t, r) {
                        "use strict";

                        function n(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function (t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), r.push.apply(r, n)
                            }
                            return r
                        }

                        function o(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? n(Object(r), !0).forEach((function (t) {
                                    i(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }

                        function i(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r, e
                        }

                        var a = r(12), s = r.n(a), l = s.a.oneOfType([s.a.string, s.a.number]), c = {
                            orientation: s.a.oneOf(["portrait", "landscape"]),
                            scan: s.a.oneOf(["progressive", "interlace"]),
                            aspectRatio: s.a.string,
                            deviceAspectRatio: s.a.string,
                            height: l,
                            deviceHeight: l,
                            width: l,
                            deviceWidth: l,
                            color: s.a.bool,
                            colorIndex: s.a.bool,
                            monochrome: s.a.bool,
                            resolution: l
                        }, u = o({
                            minAspectRatio: s.a.string,
                            maxAspectRatio: s.a.string,
                            minDeviceAspectRatio: s.a.string,
                            maxDeviceAspectRatio: s.a.string,
                            minHeight: l,
                            maxHeight: l,
                            minDeviceHeight: l,
                            maxDeviceHeight: l,
                            minWidth: l,
                            maxWidth: l,
                            minDeviceWidth: l,
                            maxDeviceWidth: l,
                            minColor: s.a.number,
                            maxColor: s.a.number,
                            minColorIndex: s.a.number,
                            maxColorIndex: s.a.number,
                            minMonochrome: s.a.number,
                            maxMonochrome: s.a.number,
                            minResolution: l,
                            maxResolution: l
                        }, c), d = {
                            all: s.a.bool,
                            grid: s.a.bool,
                            aural: s.a.bool,
                            braille: s.a.bool,
                            handheld: s.a.bool,
                            print: s.a.bool,
                            projection: s.a.bool,
                            screen: s.a.bool,
                            tty: s.a.bool,
                            tv: s.a.bool,
                            embossed: s.a.bool
                        }, p = o(o({}, d), u);
                        c.type = Object.keys(d), t.a = {all: p, types: d, matchers: c, features: u}
                    }, function (e, t, r) {
                        var n = r(4);
                        e.exports = r(14)(n.isElement, !0)
                    }, function (e, t, r) {
                        "use strict";
                        !function () {
                            function e(e) {
                                return "string" == typeof e || "function" == typeof e || e === y || e === B || e === w || e === x || e === E || e === T || "object" == typeof e && null !== e && (e.$$typeof === _ || e.$$typeof === O || e.$$typeof === S || e.$$typeof === k || e.$$typeof === A || e.$$typeof === I || e.$$typeof === j || e.$$typeof === z || e.$$typeof === R)
                            }

                            function r(e) {
                                if ("object" == typeof e && null !== e) {
                                    var t = e.$$typeof;
                                    switch (t) {
                                        case m:
                                            var r = e.type;
                                            switch (r) {
                                                case C:
                                                case B:
                                                case y:
                                                case w:
                                                case x:
                                                case E:
                                                    return r;
                                                default:
                                                    var n = r && r.$$typeof;
                                                    switch (n) {
                                                        case k:
                                                        case A:
                                                        case _:
                                                        case O:
                                                        case S:
                                                            return n;
                                                        default:
                                                            return t
                                                    }
                                            }
                                        case v:
                                            return t
                                    }
                                }
                            }

                            function n(e) {
                                return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(e) || r(e) === C
                            }

                            function o(e) {
                                return r(e) === B
                            }

                            function i(e) {
                                return r(e) === k
                            }

                            function a(e) {
                                return r(e) === S
                            }

                            function s(e) {
                                return "object" == typeof e && null !== e && e.$$typeof === m
                            }

                            function l(e) {
                                return r(e) === A
                            }

                            function c(e) {
                                return r(e) === y
                            }

                            function u(e) {
                                return r(e) === _
                            }

                            function d(e) {
                                return r(e) === O
                            }

                            function p(e) {
                                return r(e) === v
                            }

                            function f(e) {
                                return r(e) === w
                            }

                            function g(e) {
                                return r(e) === x
                            }

                            function h(e) {
                                return r(e) === E
                            }

                            var b = "function" == typeof Symbol && Symbol.for,
                                m = b ? Symbol.for("react.element") : 60103, v = b ? Symbol.for("react.portal") : 60106,
                                y = b ? Symbol.for("react.fragment") : 60107,
                                x = b ? Symbol.for("react.strict_mode") : 60108,
                                w = b ? Symbol.for("react.profiler") : 60114,
                                S = b ? Symbol.for("react.provider") : 60109,
                                k = b ? Symbol.for("react.context") : 60110,
                                C = b ? Symbol.for("react.async_mode") : 60111,
                                B = b ? Symbol.for("react.concurrent_mode") : 60111,
                                A = b ? Symbol.for("react.forward_ref") : 60112,
                                E = b ? Symbol.for("react.suspense") : 60113,
                                T = b ? Symbol.for("react.suspense_list") : 60120,
                                O = b ? Symbol.for("react.memo") : 60115, _ = b ? Symbol.for("react.lazy") : 60116,
                                R = b ? Symbol.for("react.block") : 60121,
                                I = b ? Symbol.for("react.fundamental") : 60117,
                                j = b ? Symbol.for("react.responder") : 60118,
                                z = b ? Symbol.for("react.scope") : 60119, P = C, F = B, L = k, D = S, H = m, M = A,
                                N = y, W = _, U = O, G = v, V = w, $ = x, X = E, q = !1;
                            t.AsyncMode = P, t.ConcurrentMode = F, t.ContextConsumer = L, t.ContextProvider = D, t.Element = H, t.ForwardRef = M, t.Fragment = N, t.Lazy = W, t.Memo = U, t.Portal = G, t.Profiler = V, t.StrictMode = $, t.Suspense = X, t.isAsyncMode = n, t.isConcurrentMode = o, t.isContextConsumer = i, t.isContextProvider = a, t.isElement = s, t.isForwardRef = l, t.isFragment = c, t.isLazy = u, t.isMemo = d, t.isPortal = p, t.isProfiler = f, t.isStrictMode = g, t.isSuspense = h, t.isValidElementType = e, t.typeOf = r
                        }()
                    }, function (e, t, r) {
                        "use strict";

                        function n() {
                            return null
                        }

                        var o = r(4), i = r(15), a = r(5), s = r(16),
                            l = Function.call.bind(Object.prototype.hasOwnProperty), c = function () {
                            };
                        c = function (e) {
                            var t = "Warning: " + e;
                            "undefined" != typeof console && console.error(t);
                            try {
                                throw new Error(t)
                            } catch (r) {
                            }
                        }, e.exports = function (e, t) {
                            function r(e) {
                                var t = e && (E && e[E] || e[T]);
                                if ("function" == typeof t) return t
                            }

                            function u(e, t) {
                                return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t
                            }

                            function d(e) {
                                this.message = e, this.stack = ""
                            }

                            function p(e) {
                                function r(r, i, s, l, u, p, f) {
                                    if (l = l || O, p = p || s, f !== a) {
                                        if (t) {
                                            var g = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                            throw g.name = "Invariant Violation", g
                                        }
                                        if ("undefined" != typeof console) {
                                            var h = l + ":" + s;
                                            !n[h] && o < 3 && (c("You are manually calling a React.PropTypes validation function for the `" + p + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[h] = !0, o++)
                                        }
                                    }
                                    return null == i[s] ? r ? new d(null === i[s] ? "The " + u + " `" + p + "` is marked as required in `" + l + "`, but its value is `null`." : "The " + u + " `" + p + "` is marked as required in `" + l + "`, but its value is `undefined`.") : null : e(i, s, l, u, p)
                                }

                                var n = {}, o = 0, i = r.bind(null, !1);
                                return i.isRequired = r.bind(null, !0), i
                            }

                            function f(e) {
                                function t(t, r, n, o, i, a) {
                                    var s = t[r];
                                    return k(s) !== e ? new d("Invalid " + o + " `" + i + "` of type `" + C(s) + "` supplied to `" + n + "`, expected `" + e + "`.") : null
                                }

                                return p(t)
                            }

                            function g(e) {
                                function t(t, r, n, o, i) {
                                    if ("function" != typeof e) return new d("Property `" + i + "` of component `" + n + "` has invalid PropType notation inside arrayOf.");
                                    var s = t[r];
                                    if (!Array.isArray(s)) return new d("Invalid " + o + " `" + i + "` of type `" + k(s) + "` supplied to `" + n + "`, expected an array.");
                                    for (var l = 0; l < s.length; l++) {
                                        var c = e(s, l, n, o, i + "[" + l + "]", a);
                                        if (c instanceof Error) return c
                                    }
                                    return null
                                }

                                return p(t)
                            }

                            function h(e) {
                                function t(t, r, n, o, i) {
                                    if (!(t[r] instanceof e)) {
                                        var a = e.name || O;
                                        return new d("Invalid " + o + " `" + i + "` of type `" + A(t[r]) + "` supplied to `" + n + "`, expected instance of `" + a + "`.")
                                    }
                                    return null
                                }

                                return p(t)
                            }

                            function b(e) {
                                function t(t, r, n, o, i) {
                                    for (var a = t[r], s = 0; s < e.length; s++) if (u(a, e[s])) return null;
                                    var l = JSON.stringify(e, (function (e, t) {
                                        return "symbol" === C(t) ? String(t) : t
                                    }));
                                    return new d("Invalid " + o + " `" + i + "` of value `" + String(a) + "` supplied to `" + n + "`, expected one of " + l + ".")
                                }

                                return Array.isArray(e) ? p(t) : (c(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), n)
                            }

                            function m(e) {
                                function t(t, r, n, o, i) {
                                    if ("function" != typeof e) return new d("Property `" + i + "` of component `" + n + "` has invalid PropType notation inside objectOf.");
                                    var s = t[r], c = k(s);
                                    if ("object" !== c) return new d("Invalid " + o + " `" + i + "` of type `" + c + "` supplied to `" + n + "`, expected an object.");
                                    for (var u in s) if (l(s, u)) {
                                        var p = e(s, u, n, o, i + "." + u, a);
                                        if (p instanceof Error) return p
                                    }
                                    return null
                                }

                                return p(t)
                            }

                            function v(e) {
                                function t(t, r, n, o, i) {
                                    for (var s = 0; s < e.length; s++) if (null == (0, e[s])(t, r, n, o, i, a)) return null;
                                    return new d("Invalid " + o + " `" + i + "` supplied to `" + n + "`.")
                                }

                                if (!Array.isArray(e)) return c("Invalid argument supplied to oneOfType, expected an instance of array."), n;
                                for (var r = 0; r < e.length; r++) {
                                    var o = e[r];
                                    if ("function" != typeof o) return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(o) + " at index " + r + "."), n
                                }
                                return p(t)
                            }

                            function y(e) {
                                function t(t, r, n, o, i) {
                                    var s = t[r], l = k(s);
                                    if ("object" !== l) return new d("Invalid " + o + " `" + i + "` of type `" + l + "` supplied to `" + n + "`, expected `object`.");
                                    for (var c in e) {
                                        var u = e[c];
                                        if (u) {
                                            var p = u(s, c, n, o, i + "." + c, a);
                                            if (p) return p
                                        }
                                    }
                                    return null
                                }

                                return p(t)
                            }

                            function x(e) {
                                function t(t, r, n, o, s) {
                                    var l = t[r], c = k(l);
                                    if ("object" !== c) return new d("Invalid " + o + " `" + s + "` of type `" + c + "` supplied to `" + n + "`, expected `object`.");
                                    var u = i({}, t[r], e);
                                    for (var p in u) {
                                        var f = e[p];
                                        if (!f) return new d("Invalid " + o + " `" + s + "` key `" + p + "` supplied to `" + n + "`.\nBad object: " + JSON.stringify(t[r], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                                        var g = f(l, p, n, o, s + "." + p, a);
                                        if (g) return g
                                    }
                                    return null
                                }

                                return p(t)
                            }

                            function w(t) {
                                switch (typeof t) {
                                    case"number":
                                    case"string":
                                    case"undefined":
                                        return !0;
                                    case"boolean":
                                        return !t;
                                    case"object":
                                        if (Array.isArray(t)) return t.every(w);
                                        if (null === t || e(t)) return !0;
                                        var n = r(t);
                                        if (!n) return !1;
                                        var o, i = n.call(t);
                                        if (n !== t.entries) {
                                            for (; !(o = i.next()).done;) if (!w(o.value)) return !1
                                        } else for (; !(o = i.next()).done;) {
                                            var a = o.value;
                                            if (a && !w(a[1])) return !1
                                        }
                                        return !0;
                                    default:
                                        return !1
                                }
                            }

                            function S(e, t) {
                                return "symbol" === e || !!t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
                            }

                            function k(e) {
                                var t = typeof e;
                                return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : S(t, e) ? "symbol" : t
                            }

                            function C(e) {
                                if (void 0 === e || null === e) return "" + e;
                                var t = k(e);
                                if ("object" === t) {
                                    if (e instanceof Date) return "date";
                                    if (e instanceof RegExp) return "regexp"
                                }
                                return t
                            }

                            function B(e) {
                                var t = C(e);
                                switch (t) {
                                    case"array":
                                    case"object":
                                        return "an " + t;
                                    case"boolean":
                                    case"date":
                                    case"regexp":
                                        return "a " + t;
                                    default:
                                        return t
                                }
                            }

                            function A(e) {
                                return e.constructor && e.constructor.name ? e.constructor.name : O
                            }

                            var E = "function" == typeof Symbol && Symbol.iterator, T = "@@iterator",
                                O = "<<anonymous>>", _ = {
                                    array: f("array"),
                                    bool: f("boolean"),
                                    func: f("function"),
                                    number: f("number"),
                                    object: f("object"),
                                    string: f("string"),
                                    symbol: f("symbol"),
                                    any: p(n),
                                    arrayOf: g,
                                    element: function () {
                                        function t(t, r, n, o, i) {
                                            var a = t[r];
                                            return e(a) ? null : new d("Invalid " + o + " `" + i + "` of type `" + k(a) + "` supplied to `" + n + "`, expected a single ReactElement.")
                                        }

                                        return p(t)
                                    }(),
                                    elementType: function () {
                                        function e(e, t, r, n, i) {
                                            var a = e[t];
                                            return o.isValidElementType(a) ? null : new d("Invalid " + n + " `" + i + "` of type `" + k(a) + "` supplied to `" + r + "`, expected a single ReactElement type.")
                                        }

                                        return p(e)
                                    }(),
                                    instanceOf: h,
                                    node: function () {
                                        function e(e, t, r, n, o) {
                                            return w(e[t]) ? null : new d("Invalid " + n + " `" + o + "` supplied to `" + r + "`, expected a ReactNode.")
                                        }

                                        return p(e)
                                    }(),
                                    objectOf: m,
                                    oneOf: b,
                                    oneOfType: v,
                                    shape: y,
                                    exact: x
                                };
                            return d.prototype = Error.prototype, _.checkPropTypes = s, _.resetWarningCache = s.resetWarningCache, _.PropTypes = _, _
                        }
                    }, function (e, t, r) {
                        "use strict";

                        function n(e) {
                            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(e)
                        }

                        var o = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty,
                            a = Object.prototype.propertyIsEnumerable;
                        e.exports = function () {
                            try {
                                if (!Object.assign) return !1;
                                var e = new String("abc");
                                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                                for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                                if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                                    return t[e]
                                })).join("")) return !1;
                                var n = {};
                                return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                                    n[e] = e
                                })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                            } catch (o) {
                                return !1
                            }
                        }() ? Object.assign : function (e, t) {
                            for (var r, s, l = n(e), c = 1; c < arguments.length; c++) {
                                for (var u in r = Object(arguments[c])) i.call(r, u) && (l[u] = r[u]);
                                if (o) {
                                    s = o(r);
                                    for (var d = 0; d < s.length; d++) a.call(r, s[d]) && (l[s[d]] = r[s[d]])
                                }
                            }
                            return l
                        }
                    }, function (e, t, r) {
                        "use strict";

                        function n(e, t, r, n, l) {
                            for (var c in e) if (s(e, c)) {
                                var u;
                                try {
                                    if ("function" != typeof e[c]) {
                                        var d = Error((n || "React class") + ": " + r + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.");
                                        throw d.name = "Invariant Violation", d
                                    }
                                    u = e[c](t, c, n, r, null, i)
                                } catch (f) {
                                    u = f
                                }
                                if (!u || u instanceof Error || o((n || "React class") + ": type specification of " + r + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in a)) {
                                    a[u.message] = !0;
                                    var p = l ? l() : "";
                                    o("Failed " + r + " type: " + u.message + (null != p ? p : ""))
                                }
                            }
                        }

                        var o = function () {
                        }, i = r(5), a = {}, s = Function.call.bind(Object.prototype.hasOwnProperty);
                        o = function (e) {
                            var t = "Warning: " + e;
                            "undefined" != typeof console && console.error(t);
                            try {
                                throw new Error(t)
                            } catch (r) {
                            }
                        }, n.resetWarningCache = function () {
                            a = {}
                        }, e.exports = n
                    }, function (e, t, r) {
                        "use strict";

                        function n(e, t) {
                            if (null == e) return {};
                            var r, n, i = o(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                            }
                            return i
                        }

                        function o(e, t) {
                            if (null == e) return {};
                            var r, n, o = {}, i = Object.keys(e);
                            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }

                        function i(e) {
                            var t = e.children, r = e.device, o = e.onChange,
                                i = n(e, ["children", "device", "onChange"]), s = Object(a.a)(i, r, o);
                            return "function" == typeof t ? t(s) : s ? t : null
                        }

                        t.a = i;
                        var a = r(0)
                    }]))
                }("undefined" != typeof self && self)
            }, vTXz: (e, t, r) => {
                "use strict";
                t.xu = void 0;
                l(r("xIFI"));
                var n = l(r("BVR1")), o = r("y89n"), i = function (e) {
                    if (e && e.__esModule) return e;
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var r = {};
                    if (null != e) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, o, i) : r[o] = e[o]
                        }
                    }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r("OBVT")), a = l(r("tVE5"));

                function s() {
                    if ("function" !== typeof WeakMap) return null;
                    var e = new WeakMap;
                    return s = function () {
                        return e
                    }, e
                }

                function l(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                var c = (0, n.default)("div", {shouldForwardProp: a.default})({
                    boxSizing: "border-box",
                    margin: 0,
                    minWidth: 0
                }, (function (e) {
                    return (0, i.default)(e.__css)(e.theme)
                }), (function (e) {
                    var t = e.theme, r = e.variant, n = e.tx, o = void 0 === n ? "variants" : n;
                    return (0, i.default)((0, i.get)(t, o + "." + r, (0, i.get)(t, r)))(t)
                }), (function (e) {
                    return (0, i.default)(e.sx)(e.theme)
                }), (function (e) {
                    return e.css
                }), (0, o.compose)(o.space, o.layout, o.typography, o.color, o.flexbox));
                t.xu = c, (0, n.default)(c)({display: "flex"})
            }, boyc: (e, t, r) => {
                var n = r("esNf");
                e.exports = n.default || n
            }, esNf: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {default: () => Mi});
                var n = {};
                r.r(n), r.d(n, {fetch: () => Xr, setTitle: () => $r});
                var o = r("xIFI"), i = r.n(o);
                var a = function () {
                    return (a = Object.assign || function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

                function s(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                    }
                    return r
                }

                function l(e, t, r, n) {
                    return new (r || (r = Promise))((function (o, i) {
                        function a(e) {
                            try {
                                l(n.next(e))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(e) {
                            try {
                                l(n.throw(e))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(a, s)
                        }

                        l((n = n.apply(e, t || [])).next())
                    }))
                }

                function c(e, t) {
                    var r, n, o, i, a = {
                        label: 0, sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        }, trys: [], ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" === typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }), i;

                    function s(i) {
                        return function (s) {
                            return function (i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {value: i[1], done: !1};
                                        case 5:
                                            a.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (s) {
                                    i = [6, s], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {value: i[0] ? i[1] : void 0, done: !0}
                            }([i, s])
                        }
                    }
                }

                Object.create;
                Object.create;
                var u = r("vTXz");
                u.xu.displayName = "Box";
                const d = u.xu;
                var p = (0, o.forwardRef)((function (e, t) {
                    return i().createElement(d, a({ref: t}, e, {__css: a({display: "flex"}, e.__css || {})}))
                }));
                p.displayName = "Flex";
                const f = p;
                var g = function (e) {
                    var t = e.size, r = e.sx, n = e.color, o = void 0 === n ? "currentColor" : n,
                        l = s(e, ["size", "sx", "color"]), c = d;
                    return i().createElement(c, a({
                        as: "svg",
                        xmlns: "http://www.w3.org/2000/svg",
                        variant: "icon",
                        sx: a({fill: o}, r),
                        __css: {color: o, width: t, height: t, fontSize: t}
                    }, l))
                };
                g.defaultProps = {size: 24}, g.displayName = "SVG";
                const h = g;
                const b = i().memo((function (e) {
                    var t = e.isReady, r = e.prefix, n = e.name, o = s(e, ["isReady", "prefix", "name"]);
                    return i().createElement(h, a({fill: "currentColor"}, o), t && i().createElement("use", {xlinkHref: "#" + [r, n].filter(Boolean).join("-")}))
                }));
                var m = r("UHkU"), v = function (e) {
                    return e.global || {}
                }, y = function () {
                    return (0, m.useSelector)(v)
                }, x = r("zjfJ"), w = r("j3/i");
                const S = function (e) {
                    var t = new WeakMap;
                    return function (r) {
                        if (t.has(r)) return t.get(r);
                        var n = e(r);
                        return t.set(r, n), n
                    }
                };
                r("oXkQ");

                function k(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                var C = function (e, t) {
                    return "function" === typeof t ? t(e) : function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? k(r, !0).forEach((function (t) {
                                (0, x.Z)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(r).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({}, e, {}, t)
                }, B = S((function (e) {
                    return S((function (t) {
                        return C(e, t)
                    }))
                })), A = function (e) {
                    return (0, o.createElement)(w.Ni.Consumer, null, (function (t) {
                        return e.theme !== t && (t = B(t)(e.theme)), (0, o.createElement)(w.Ni.Provider, {value: t}, e.children)
                    }))
                };
                const E = o.createContext("ltr");
                const T = function (e) {
                    var t = e.children, r = e.dir, n = e.theme;
                    return o.createElement(E.Consumer, null, (function (e) {
                        return o.createElement(E.Provider, {value: r || e}, o.createElement(A, {theme: n}, t))
                    }))
                };
                var O = r("H8sf"), _ = r.n(O);
                var R = {
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    height: "48px",
                    bg: "transparent",
                    "&.bn-input-md": {height: "40px"},
                    "&.bn-input-sm": {height: "32px"},
                    ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {borderColor: "primary"},
                    "&.bn-input-status-focus": {borderColor: "primary"},
                    "&.bn-input-status-disabled": {bg: "line", "> input": {color: "t.disabled"}},
                    "&.bn-input-status-error": {borderColor: "sell"},
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "ls",
                        "&:-webkit-autofill": {transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"}
                    },
                    "& .bn-input-prefix": {flexShrink: "0", fontSize: "14px"},
                    "& .bn-input-suffix": {flexShrink: "0", mx: "minor", fontSize: "sm"}
                }, I = {
                    default: {
                        borderBottom: "1px solid transparent",
                        borderColor: "line",
                        "&.bn-input-status-focus": {borderColor: "primary"},
                        "&.bn-input-status-disabled": {},
                        "&.bn-input-status-error": {borderColor: "t.sell"},
                        "& input": {
                            color: "t.primary",
                            fontSize: "md",
                            "&:-webkit-autofill": {transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"}
                        },
                        "& .bn-input-prefix": {flexShrink: "0", mr: "minor", fontSize: "sm"},
                        "& .bn-input-suffix": {flexShrink: "0", mx: "minor", fontSize: "sm"}
                    },
                    helperText: {
                        default: {height: "16px", lineHeight: "16px", fontSize: "xs"},
                        info: {variant: "textField.helperText.default", color: "t.third"},
                        error: {variant: "textField.helperText.default", color: "t.sell"}
                    },
                    outline: {
                        border: "1px solid transparent",
                        borderColor: "line",
                        borderRadius: "default",
                        "& .bn-input-label": {fontSize: "xs"},
                        ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {borderColor: "primary"},
                        "&.bn-input-status-focus": {borderColor: "primary"},
                        "&.bn-input-status-disabled": {bg: "line", "> input": {color: "t.disabled"}},
                        "&.bn-input-status-error": {borderColor: "t.sell"},
                        "& input": {
                            color: "t.primary",
                            fontSize: "sm",
                            px: "xs",
                            "&:-webkit-autofill": {transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"}
                        },
                        "& .bn-input-prefix": {flexShrink: "0", fontSize: "sm"},
                        "& .bn-input-suffix": {flexShrink: "0", mx: "minor", fontSize: "sm"}
                    },
                    outlineLarge: {variant: "textField.outline", "&  input": {px: "ls"}},
                    inline: {
                        border: "1px solid transparent",
                        borderColor: "line",
                        borderRadius: "default",
                        ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {borderColor: "primary"},
                        "&.bn-input-status-focus": {borderColor: "primary"},
                        "&.bn-input-status-disabled": {bg: "line", "> input": {color: "t.disabled"}},
                        "&.bn-input-status-error": {borderColor: "t.sell"},
                        "& input": {
                            color: "t.primary",
                            fontSize: "sm",
                            px: "minor",
                            textAlign: "right",
                            "&:-webkit-autofill": {transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"}
                        },
                        "& .bn-input-prefix": {
                            flexShrink: "0",
                            ml: "xs",
                            minWidth: "48px",
                            fontSize: "sm",
                            color: "t.secondary"
                        },
                        "& .bn-input-suffix": {flexShrink: "0", mr: "xs", fontSize: "sm", color: "t.third"},
                        "& .bn-input-tooltip": {
                            position: "absolute",
                            bottom: "110%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: "tooltip"
                        },
                        "& .bn-input-tooltip-arrow": {
                            position: "absolute",
                            width: "8px",
                            height: "8px",
                            left: "50%",
                            bottom: "-4px",
                            transform: "translateX(-50%) rotate(45deg)",
                            bg: "#FFFFFF",
                            boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.08)"
                        },
                        "& .bn-input-tooltip-content": {
                            boxShadow: "card",
                            borderRadius: "default",
                            p: "xxs",
                            bg: "#FFFFFF",
                            fontSize: "sm",
                            lineHeight: "18px",
                            color: "t.secondary"
                        }
                    }
                };
                const j = {
                    textField: I,
                    textFieldV2: a(a({}, I), {
                        line: R,
                        filled: {
                            bg: "bg3",
                            height: "48px",
                            borderRadius: "default",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "transparent",
                            "&.bn-input-md": {height: "40px"},
                            "&.bn-input-sm": {height: "32px"},
                            "&.bn-input-status-focus": {
                                bg: "transparent",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderColor: "primary"
                            },
                            "&.bn-input-status-disabled": {bg: "line", opacity: .7, "> input": {color: "t.disabled"}},
                            "&.bn-input-status-error": {borderColor: "t.sell"},
                            "& input": {
                                color: "t.primary",
                                fontSize: "sm",
                                borderRadius: "default",
                                px: "ls",
                                "&:-webkit-autofill": {transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"}
                            },
                            "& .bn-input-prefix": {flexShrink: "0", mr: "minor", fontSize: "sm"},
                            "& .bn-input-suffix": {flexShrink: "0", mx: "minor", fontSize: "sm"}
                        },
                        transparent: {variant: "textField.line", border: "none"}
                    })
                };
                var z = {lg: {height: "48px"}, md: {height: "40px"}}, P = {
                    normal: {
                        height: "32px",
                        ".rc-picker": {fontSize: "sm", ".rc-picker-input > input": {fontSize: "sm"}},
                        ".bn-picker-input-suffix": {width: "18px", height: "18px", fontSize: "minor"}
                    },
                    tiny: {
                        height: "20px",
                        ".rc-picker": {fontSize: "xs", ".rc-picker-input > input": {fontSize: "xs"}},
                        ".bn-picker-input-suffix": {width: "18px", height: "18px", fontSize: "minor"}
                    }
                }, F = function (e) {
                    return Object.keys(P).reduce((function (t, r) {
                        return t[r] = a(a({}, e), P[r]), t
                    }), {})
                }, L = a(a({}, R), {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: "246px",
                    py: "14px",
                    paddingRight: "ls",
                    "&.bn-picker-opened": {borderColor: "primaryHover"},
                    "&.bn-picker-disabled": {
                        backgroundColor: "line",
                        ".rc-picker-input input": {cursor: "not-allowed", color: "t.disabled"},
                        "&:hover": {border: "none"}
                    },
                    ".rc-picker-range-separator": {display: "flex", alignItems: "center"},
                    ".rc-picker-clear": {color: "calendar.disableColor"},
                    ".rc-picker-active-bar": {display: "none"},
                    ".rc-picker-input input": {
                        border: "none",
                        color: "t.primary",
                        lineHeight: "20px",
                        background: "transparent",
                        padding: 0,
                        paddingLeft: "ls",
                        outline: "none",
                        "&::placeholder": {color: "t.disabled"}
                    },
                    ".bn-picker-input-suffix": {color: "t.third", width: "16px", height: "16px", fontSize: "md"},
                    ".bn-picker-input-suffix-wrapper": {width: "16px", height: "16px", fontSize: "md"}
                });
                const D = {
                    rangePicker: {
                        default: {
                            display: "inline-flex",
                            minWidth: "240px",
                            ".rc-picker-range-separator": {display: "flex", alignItems: "center"},
                            ".rc-picker-clear": {cursor: "pointer", color: "calendar.disableColor"},
                            ".rc-picker": {flexGrow: 1},
                            ".bn-picker-input-suffix-wrapper": {padding: "5px", color: "t.third"},
                            ".rc-picker .rc-picker-input > input": {
                                py: "0px",
                                outline: "none",
                                border: "none",
                                color: "t.primary",
                                bg: "inherit",
                                textAlign: "center",
                                "&::placeholder": {color: "t.placeholder"}
                            }
                        },
                        underline: a({}, F({
                            variant: "rangePicker.default",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "line",
                            "&.bn-picker-opened": {borderBottomColor: "primary"},
                            ":hover": {borderColor: "primary"}
                        })),
                        outline: a({}, F({
                            variant: "rangePicker.default",
                            height: "48px",
                            borderRadius: "small",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "line",
                            "&.bn-picker-opened": {borderColor: "primary"},
                            ":hover": {borderColor: "primary"}
                        })),
                        phantom: a({}, F({
                            variant: "rangePicker.default",
                            border: "none",
                            ".rc-picker-range.rc-picker-focused .rc-picker-active-bar": {opacity: "0"},
                            ".rc-picker-range .rc-picker-input:hover": {border: "none", input: {color: "t.yellow"}},
                            "&.bn-picker-opened": {".rc-picker-range.rc-picker-focused .rc-picker-input.rc-picker-input-active input": {color: "t.yellow"}},
                            ":hover": {border: "none"}
                        })),
                        line: a({}, (H = L, Object.keys(z).reduce((function (e, t) {
                            return e[t] = a(a({}, H), z[t]), e
                        }), {})))
                    }
                };
                var H;
                const M = {
                    text: {
                        extraHeadline: {fontWeight: "semibold", fontSize: "xxxxl", lineHeight: "64px"},
                        headline1: {fontWeight: "semibold", fontSize: "xxxl", lineHeight: "56px"},
                        headline2: {fontWeight: "semibold", fontSize: "xxl", lineHeight: "48px"},
                        headline3: {fontWeight: "semibold", fontSize: "xl", lineHeight: "40px"},
                        headline4: {fontWeight: "semibold", fontSize: "lg", lineHeight: "36px"},
                        headline5: {fontWeight: "semibold", fontSize: "xp", lineHeight: "32px"},
                        headline6: {fontWeight: "medium", fontSize: "plus", lineHeight: "28px"},
                        largeBody: {fontWeight: "normal", fontSize: "plus", lineHeight: "28px"},
                        subtitle1: {fontWeight: "medium", fontSize: "md", lineHeight: "24px"},
                        subtitle2: {fontWeight: "medium", fontSize: "sm", lineHeight: "20px"},
                        body1: {fontWeight: "normal", fontSize: "md", lineHeight: "24px"},
                        body2: {fontWeight: "normal", fontSize: "sm", lineHeight: "20px"},
                        captionSub: {fontWeight: "medium", fontSize: "xs", lineHeight: "16px"},
                        caption: {fontWeight: "normal", fontSize: "xs", lineHeight: "16px"},
                        largeLink: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkBody: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        addressLink: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkCaption: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px",
                            textDecoration: "underline"
                        },
                        primaryNum1: {fontWeight: "semibold", fontSize: "xl", lineHeight: "40px"},
                        primaryNum2: {fontWeight: "semibold", fontSize: "lg", lineHeight: "36px"},
                        primaryNum3: {fontWeight: "semibold", fontSize: "xp", lineHeight: "32px"},
                        secondaryNum1: {fontWeight: "medium", fontSize: "plus", lineHeight: "28px"},
                        secondaryNum2: {fontWeight: "medium", fontSize: "md", lineHeight: "24px"},
                        tertiaryNum1: {fontWeight: "medium", fontSize: "sm", lineHeight: "20px"},
                        tertiaryNum2: {fontWeight: "medium", fontSize: "xs", lineHeight: "16px"},
                        tertiaryNum3: {fontWeight: "normal", fontSize: "xs", lineHeight: "16px"},
                        formLabel: {fontWeight: "normal", fontSize: "sm", lineHeight: "16px", color: "t.primary"},
                        formLabelSmall: {fontWeight: "normal", fontSize: "xs", lineHeight: "16px", color: "t.primary"},
                        formLabelDisabled: {variant: "text.formLabel", color: "t.disabled", cursor: "not-allowed"},
                        formLabelSmallDisabled: {
                            variant: "text.formLabelSmall",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        checkbox: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: 1.43,
                            color: "t.primary",
                            cursor: "pointer"
                        },
                        checkboxDisabled: {variant: "text.checkbox", color: "t.disabled", cursor: "not-allowed"},
                        infoHelperText: {height: "24px", lineHeight: "24px", fontSize: "xs", color: "t.third"},
                        errorHelperText: {variant: "text.infoHelperText", color: "t.sell"},
                        dottedUnderline: {
                            variant: "text.formLabel",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "dashed",
                            borderBottomColor: "t.third"
                        },
                        title2: {fontWeight: "semibold", fontSize: "48px", lineHeight: "56px"},
                        title3: {fontWeight: "semibold", fontSize: "40px", lineHeight: "48px"},
                        title4: {fontWeight: "semibold", fontSize: "32px", lineHeight: "40px"},
                        title5: {fontWeight: "semibold", fontSize: "24px", lineHeight: "28px"},
                        largeText: {fontWeight: "normal", fontSize: "24px", lineHeight: "28px"},
                        title6: {fontWeight: "medium", fontSize: "20px", lineHeight: "24px"},
                        heading: {fontFamily: "heading", lineHeight: "heading", fontWeight: "heading"},
                        display: {
                            fontFamily: "heading",
                            fontWeight: "heading",
                            lineHeight: "heading",
                            fontSize: [5, 6, 7]
                        },
                        caps: {textTransform: "uppercase", letterSpacing: "0.1em"},
                        h1: {fontWeight: "semibold", fontSize: [24, 28, 32], lineHeight: ["30px", "32px", "40px"]},
                        h2: {fontWeight: "normal", fontSize: 24, lineHeight: "30px"},
                        h3: {fontWeight: "medium", fontSize: 20, lineHeight: "28px"},
                        h4: {fontWeight: "semibold", fontSize: 16, lineHeight: "22px"},
                        h5: {fontWeight: "semibold", fontSize: 2},
                        h6: {fontWeight: "semibold", fontSize: 1},
                        label1: {fontWeight: "medium", fontSize: 20, lineHeight: "26px"},
                        label2: {fontWeight: "medium", fontSize: [16, 18], lineHeight: ["22px", "24px"]},
                        label3: {fontWeight: ["normal", "medium"], fontSize: 16, lineHeight: "22px"},
                        label4: {fontWeight: "medium", fontSize: 14, lineHeight: "20px"},
                        label5: {fontWeight: "normal", fontSize: 14, lineHeight: "20px"},
                        label6: {fontWeight: "normal", fontSize: 13, lineHeight: "18px"},
                        label7: {fontWeight: "medium", fontSize: 12, lineHeight: "16px"},
                        label8: {fontWeight: "normal", fontSize: 12, lineHeight: "16px"},
                        p1: {fontWeight: "normal", fontSize: 14, lineHeight: "20px"},
                        p2: {fontWeight: "normal", fontSize: 0}
                    }
                };
                var N = M.text, W = N.subtitle1, U = N.caption, G = N.body2, V = N.body1, $ = {
                    variant: "searchDropdown.default",
                    " .bn-sdd-optionGroupLabel": {px: "sm", py: "xxs", height: "28px"},
                    ".bn-sdd-optionGroupText": a({}, U),
                    " .bn-sdd-option": {maxHeight: "40px", px: "sm", fontSize: "sm", lineHeight: "20px"},
                    " .bn-sdd-value": {minHeight: "32px", pl: "ls", pr: "md", py: "ls"},
                    " .bn-sdd-noResults": {p: "ls", fontSize: "sm"},
                    " .bn-sdd-innerInputContainer": {px: "ls", py: "xs", width: "100%"},
                    " .bn-sdd-icon": {cursor: "pointer", verticalAlign: "middle"}
                };
                const X = {
                    searchDropdown: {
                        default: {
                            position: "relative",
                            outline: "none",
                            ".bn-sdd-dropdown": {
                                position: "absolute",
                                zIndex: "dropdown",
                                transition: "height 0.2s ease",
                                bg: "popupBg",
                                boxShadow: "tooltip",
                                borderRadius: "default"
                            },
                            ".bn-sdd-list": {
                                padding: 0,
                                overflowY: "scroll",
                                py: "minor",
                                borderBottomLeftRadius: "default",
                                borderBottomRightRadius: "default"
                            },
                            ".bn-sdd-optionGroupLabel": {color: "t.third"},
                            ".bn-sdd-option": {
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                alignItems: "center"
                            },
                            ".bn-sdd-icon": {cursor: "pointer", verticalAlign: "middle"}
                        },
                        outline: $,
                        filled: $,
                        line: $,
                        clear: $,
                        normal: $,
                        emphasizedGrouping: {
                            variant: "searchDropdown.default",
                            " .bn-sdd-optionGroupLabel": {
                                px: "sm",
                                py: "s",
                                "&.is-active .bn-sdd-optionGroupText": {color: "t.yellow"},
                                "&:hover": {bg: "bg3"},
                                "&:active": {bg: "bg2"},
                                "&.disabled": {" .bn-sdd-optionGroupText": a({color: "t.disabled"}, V)}
                            },
                            " .bn-sdd-optionGroupText": a({color: "t.primary"}, W),
                            " .bn-sdd-option-item": {maxHeight: "40px"},
                            " .bn-sdd-option": a({maxHeight: "40px", px: "sm"}, G),
                            " .bn-sdd-value": {minHeight: "32px", pl: "ls", pr: "md", py: "ls"},
                            " .bn-sdd-noResults": {p: "ls", fontSize: "sm"},
                            " .bn-sdd-innerInputContainer": {px: "ls", py: "xs", width: "100%"},
                            " .bn-sdd-icon": {cursor: "pointer", verticalAlign: "middle"}
                        }
                    }
                };
                var q = {
                    py: "xs",
                    px: ["sm", "md"],
                    fontWeight: "medium",
                    fontSize: ["sm", "md"],
                    lineHeight: ["20px", "24px"],
                    marginRight: ["sm", "md"],
                    userSelect: "none",
                    color: "t.third",
                    borderRadius: "default"
                };
                const Y = {
                    tabs: {
                        default: {
                            tab: {
                                padding: "10px 90px",
                                height: "100%",
                                boxSizing: "border-box",
                                userSelect: "none",
                                "&.active": {
                                    borderBottomWidth: "tiny",
                                    borderBottomStyle: "solid",
                                    borderBottom: "tiny solid",
                                    borderColor: "primary",
                                    color: "primary"
                                }
                            }
                        },
                        standard: {
                            container: {boxShadow: "inset 0px -1px 0px currentColor", color: "line"},
                            normal: {
                                padding: "14px 0px",
                                marginRight: "28px",
                                boxSizing: "border-box",
                                userSelect: "none",
                                lineHeight: "20px",
                                fontSize: "sm",
                                fontWeight: "medium",
                                color: "t.third",
                                "&.active": {boxShadow: "inset 0px -2px 0px #F0B90B", color: "t.primary"},
                                ":hover": {color: "t.primary"}
                            },
                            large: {
                                variant: "tabs.standard.normal",
                                padding: "20px 0px",
                                marginRight: "28px",
                                lineHeight: "24px",
                                fontSize: "md"
                            },
                            small: {variant: "tabs.standard.normal", padding: "8px 0px"}
                        },
                        vertical: {
                            layout: {display: "flex"},
                            container: {color: "line", display: "flex", flexDirection: "column", width: "fit-content"},
                            normal: {
                                padding: "10px 18px",
                                boxSizing: "border-box",
                                userSelect: "none",
                                lineHeight: "20px",
                                fontSize: "sm",
                                fontWeight: "medium",
                                color: "t.third",
                                "&.active": {boxShadow: "inset 2px 0px 0px #F0B90B", color: "t.primary"},
                                ":hover": {color: "t.primary"}
                            },
                            large: {
                                variant: "tabs.vertical.normal",
                                margin: "4px 0",
                                "&.active": {boxShadow: "inset 4px 0px 0px #F0B90B", color: "t.primary"}
                            }
                        },
                        flow: {
                            tab: {
                                fontWeight: "medium",
                                fontSize: ["14px", "16px"],
                                lineHeight: ["20px", "24px"],
                                letterSpacing: [".16px", ".32px"],
                                padding: ["8px 16px", "8px 24px"],
                                marginRight: "16px",
                                userSelect: "none",
                                color: "t.primary",
                                borderRadius: "extraLarger",
                                ":hover": {bg: "bg3"},
                                "&.active": {bg: "tabs.flowBg", color: "tabs.flowText"}
                            }
                        },
                        filled: {
                            tab: {
                                primary: a(a({}, q), {"&.active": {bg: "badgeYellowBg", color: "t.yellow"}}),
                                secondary: a(a({}, q), {"&.active": {bg: "bg3", color: "t.primary"}})
                            }
                        },
                        secondary: {
                            container: {
                                bg: "bg3",
                                borderRadius: "default",
                                height: "24px",
                                width: "fit-content"
                            },
                            tab: {
                                fontSize: "xs",
                                lineHeight: "16px",
                                px: "minor",
                                py: "minor",
                                userSelect: "none",
                                color: "t.primary",
                                borderRadius: "default",
                                minWidth: "82px",
                                textAlign: "center",
                                "&.active": {bg: "primary", color: "bg5", fontWeight: "medium"}
                            }
                        },
                        "trade-next": {
                            tab: {
                                padding: "16px 1px 10px 1px",
                                marginRight: "sm",
                                height: "100%",
                                boxSizing: "border-box",
                                userSelect: "none",
                                fontSize: "sm",
                                color: "t.secondary",
                                "&.active": {
                                    borderBottom: "2px solid",
                                    borderColor: "primary",
                                    color: "t.primary",
                                    fontWeight: "semibold"
                                }
                            }
                        }
                    }
                };
                var J = {
                    borderRadius: "default",
                    boxShadow: "tooltip",
                    bg: "toast.bg",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    maxWidth: ["343px", "360px"],
                    minWidth: "288px",
                    minHeight: "56px"
                };
                const Q = {
                    toast: {
                        default: a(a({}, J), {
                            color: "t.primary",
                            lineHeight: "18px",
                            fontSize: "sm",
                            maxHeight: "178px",
                            p: "sm"
                        }),
                        error: {variant: "toast.default"},
                        warning: {variant: "toast.default"},
                        success: {variant: "toast.default"},
                        info: {variant: "toast.default"},
                        tips: {variant: "toast.default"},
                        reset: a(a({}, J), {
                            ".bn-notification-body-wrapper": {
                                maxHeight: "unset",
                                ".bn-notification-msg-wrapper": {maxHeight: "unset"}
                            }
                        })
                    }
                };
                var Z = {px: "md", bg: "modal.bg", position: "relative", flexDirection: "column"};
                const K = {
                    modal: {
                        default: a(a({}, Z), {borderRadius: "large"}),
                        drawer: a(a({}, Z), {
                            width: "100%",
                            borderTopLeftRadius: "xlarge",
                            borderTopRightRadius: "xlarge"
                        })
                    },
                    modaltitle: {
                        default: {
                            position: "relative",
                            height: "64px",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "space-between"
                        },
                        center: {
                            position: "relative",
                            height: "64px",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "space-between",
                            ".modaltitle": {flex: "1", justifyContent: "center"}
                        }
                    },
                    modalfooter: {
                        default: {
                            mb: "md",
                            width: "100%",
                            justifyContent: "flex-end",
                            ".btn": {"&:first-of-type": {mr: "xs"}, flex: "1"}
                        },
                        column: {
                            flexDirection: "column-reverse",
                            mb: "md",
                            width: "100%",
                            justifyContent: "flex-end",
                            ".btn": {"&:nth-of-type(2n+1)": {mt: "xs"}, flex: "1"}
                        }
                    }
                };
                var ee = {
                    minWidth: "343px",
                    height: "72px",
                    p: "ls",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                }, te = {
                    minWidth: "343px",
                    height: "40px",
                    p: "xxs",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                };
                const re = {
                    uploader: {
                        common: {
                            color: "t.primary",
                            fontSize: "sm",
                            lineHeight: "20px",
                            wordBreak: "keep-all",
                            borderRadius: "default",
                            minHeight: "24px",
                            border: "none",
                            appearance: "none",
                            userSelect: "none",
                            cursor: "pointer",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            boxSizing: "border-box",
                            textAlign: "center",
                            textDecoration: "none",
                            outline: "none",
                            backgroundColor: "bg3",
                            fontFamily: "inherit",
                            "&:hover": {backgroundColor: "line"}
                        },
                        drag: {
                            default: {
                                position: "relative",
                                variant: "uploader.common",
                                minWidth: "164px",
                                maxWidth: "164px",
                                height: "164px",
                                py: "ls",
                                color: "t.secondary"
                            },
                            waiting: {variant: "uploader.drag.default"},
                            success: {variant: "uploader.drag.default"},
                            loading: {variant: "uploader.drag.default"},
                            error: {variant: "uploader.drag.default", color: "t.sell"}
                        },
                        click: {
                            default: {
                                variant: "uploader.common",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            normal: {
                                waiting: a({variant: "uploader.click.default"}, {
                                    py: "s",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: a({variant: "uploader.click.default"}, ee),
                                error: a({variant: "uploader.click.default", color: "t.sell"}, ee),
                                loading: a({variant: "uploader.click.default"}, ee)
                            },
                            small: {
                                waiting: a({variant: "uploader.click.default"}, {
                                    py: "xxs",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: a({variant: "uploader.click.default"}, te),
                                error: a({variant: "uploader.click.default", color: "t.sell"}, te),
                                loading: a({variant: "uploader.click.default"}, te)
                            }
                        }
                    }
                }, ne = a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a({}, re), {
                    alertV2: {
                        default: {
                            color: "dark.text",
                            borderRadius: "default",
                            fontSize: 1
                        },
                        error: {variant: "alertV2.default", color: "alertV2.errorColor", bg: "alertV2.errorBg"},
                        warning: {variant: "alertV2.default", color: "alertV2.warningColor", bg: "alertV2.warningBg"},
                        success: {variant: "alertV2.default", color: "alertV2.successColor", bg: "alertV2.successBg"},
                        info: {variant: "alertV2.default", color: "alertV2.infoColor", bg: "alertV2.infoBg"}
                    }
                }), {
                    alert: {
                        default: {color: "dark.text", borderRadius: "default", lineHeight: "18px", fontSize: 1},
                        error: {variant: "alert.default", color: "error", bg: "alert.errorBg"},
                        warning: {variant: "alert.default", color: "t.yellow", bg: "alert.warningBg"},
                        success: {variant: "alert.default", color: "secondary", bg: "alert.successBg"},
                        info: {variant: "alert.default", color: "t.blue", bg: "alert.infoBg"},
                        tips: {variant: "alert.default", color: "t.yellow", bg: "alert.warningBg"}
                    }
                }), {
                    button: {
                        default: {
                            variant: "text.label4",
                            wordBreak: "keep-all",
                            color: "black.text",
                            borderRadius: "default",
                            minHeight: "24px",
                            border: "none",
                            "&:disabled": {
                                cursor: "not-allowed",
                                backgroundImage: "none",
                                backgroundColor: "button.defaultDisabled",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active)": {boxShadow: "none"},
                            "&.inactive": {opacity: .3, cursor: "not-allowed"}
                        },
                        primary: {
                            variant: "button.default",
                            backgroundImage: "none",
                            backgroundColor: "primaryHover",
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                boxShadow: "none",
                                backgroundImage: "none",
                                backgroundColor: "primaryHover",
                                opacity: .9
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundImage: "none",
                                backgroundColor: "button.primaryPressed"
                            },
                            ":disabled:not(.inactive)": {bg: "line", color: "t.disabled", cursor: "not-allowed"},
                            "&.inactive": {bg: "primaryHover", opacity: .3, color: "bg5", cursor: "not-allowed"}
                        },
                        outline: {
                            variant: "button.default",
                            color: "black.text",
                            bg: "transparent",
                            boxShadow: "inset 0 0 0 1px #EAECEF",
                            "&:hover:not(:disabled):not(:active)": {backgroundColor: "rgba(0,0,0,0.02)"},
                            "&:active:not(:disabled)": {backgroundColor: "rgba(0,0,0,0.02)"}
                        },
                        quiet: {
                            variant: "button.default",
                            color: "black.text",
                            bg: "transparent",
                            ":disabled:not(.inactive)": {bg: "transparent", color: "t.disabled"},
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {color: "primary"},
                            "&:active:not(:disabled):not(.inactive)": {backgroundColor: "badgeYellowBg"},
                            "&.inactive": {opacity: .7, cursor: "not-allowed"}
                        },
                        text: {
                            variant: "button.default",
                            color: "black.text",
                            bg: "transparent",
                            ":disabled:not(.inactive)": {bg: "transparent", color: "t.disabled"},
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {color: "primary"},
                            "&:active:not(:disabled):not(.inactive)": {backgroundColor: "badgeYellowBg"},
                            "&.inactive": {opacity: .7, cursor: "not-allowed"}
                        },
                        round: {
                            variant: "button.default",
                            color: "t.yellow",
                            bg: "bg3",
                            borderRadius: "xlarge",
                            ":disabled:not(.inactive)": {bg: "bg3", color: "t.disabled"},
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {color: "primary", bg: "bg3"},
                            "&:active:not(:disabled):not(.inactive)": {backgroundColor: "line"},
                            "&.inactive": {bg: "bg3", opacity: .3, cursor: "not-allowed"}
                        },
                        graytype: {
                            variant: "button.default",
                            color: "t.white",
                            bg: "button.graytypeBg",
                            ":disabled:not(.inactive)": {bg: "transparent", color: "t.disabled"},
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                bg: "button.graytypeHoverBg",
                                color: "button.graytypeHoverFontColor"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                bg: "button.graytypePressedBg",
                                color: "button.graytypePressedFontColor"
                            },
                            "&.inactive": {bg: "bg4", opacity: .3, cursor: "not-allowed"}
                        },
                        outlineSecond: {
                            variant: "button.outline",
                            color: "button.outlineText",
                            borderColor: "line",
                            "&:hover:not(:disabled):not(:active)": {
                                bg: "button.outlineBgHover",
                                borderColor: "button.outlineBorderHover"
                            },
                            "&:active:not(:disabled)": {
                                bg: "button.outlineBgActive",
                                borderColor: "button.outlineBorderActive"
                            }
                        },
                        outlineThird: {variant: "button.outlineSecond", color: "button.outlinePrimaryText"},
                        socialtradingPrimary: {
                            variant: "button.default",
                            color: "t.white",
                            borderRadius: "xxlarge",
                            boxShadow: "none",
                            "&:disabled": {cursor: "not-allowed", opacity: "0.3"},
                            backgroundImage: function (e) {
                                return e.colors.button.socialtradingPrimaryGradient
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundImage: "none",
                                backgroundColor: "button.socialtradingPrimaryActive"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                backgroundImage: function (e) {
                                    return e.colors.button.socialtradingPrimaryHoverGradient
                                }
                            }
                        },
                        socialtradingSecondary: {
                            variant: "button.default",
                            color: "black.text",
                            backgroundImage: "none",
                            backgroundColor: "t.white",
                            boxShadow: "none",
                            borderRadius: "xxlarge",
                            "&:disabled": {
                                cursor: "not-allowed",
                                color: "t.white",
                                backgroundColor: "button.socialtradingSecondaryDisabled",
                                opacity: "0.3"
                            },
                            "&:active:not(:disabled):not(.inactive)": {color: "button.socialtradingSecondaryActive"},
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {color: "button.socialtradingSecondaryHover"}
                        },
                        socialtradingQuiet: {
                            variant: "button.default",
                            color: "button.socialtradingQuietPrimary",
                            backgroundImage: "none",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            padding: 0,
                            "&:disabled": {
                                cursor: "not-allowed",
                                color: "t.third",
                                backgroundColor: "transparent",
                                opacity: "0.3"
                            },
                            "&:active:not(:disabled):not(.inactive)": {color: "button.socialtradingQuietActive"},
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {color: "button.socialtradingQuietHover"}
                        },
                        socialtradingNegative: {
                            variant: "button.default",
                            color: "t.white",
                            borderRadius: "xxlarge",
                            boxShadow: "none",
                            "&:disabled": {cursor: "not-allowed", opacity: "0.3"},
                            backgroundImage: function (e) {
                                return e.colors.button.socialtradingNegativePrimaryGradient
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundImage: "none",
                                backgroundColor: "button.socialtradingNegativeActive"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                backgroundImage: function (e) {
                                    return e.colors.button.socialtradingNegativePrimaryGradient
                                }
                            }
                        },
                        socialtradingLoading: {
                            variant: "button.default",
                            color: "t.white",
                            backgroundImage: "none",
                            backgroundColor: "button.socialtradingLoadingPrimary",
                            boxShadow: "none",
                            borderRadius: "xxlarge"
                        }
                    }, buttons: {
                        default: {
                            default: {variant: "button.primary"},
                            primary: {variant: "button.primary"},
                            flatprimary: {variant: "button.primary"},
                            flatpure: {
                                variant: "button.primary",
                                backgroundImage: "none",
                                backgroundColor: "line",
                                color: "t.primary",
                                "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                    boxShadow: "none",
                                    backgroundImage: "none",
                                    backgroundColor: "bg3"
                                },
                                "&:active:not(:disabled):not(.inactive)": {backgroundColor: "t.placeholder"},
                                "&.inactive": {backgroundColor: "line", opacity: .3, cursor: "not-allowed"}
                            },
                            secondary: {
                                variant: "button.default",
                                backgroundColor: "button.secondaryBg",
                                color: "t.primary",
                                "&:hover:not(:disabled):not(:active):not(.inactive)": {boxShadow: "none", bg: "bg3"},
                                "&:active:not(:disabled):not(.inactive)": {
                                    boxShadow: "none",
                                    backgroundColor: "button.secondaryPressedBg",
                                    color: "t.primary"
                                },
                                "&:disabled": {cursor: "not-allowed", boxShadow: "none", color: "t.disabled", bg: "bg3"}
                            },
                            buy: {
                                variant: "button.default",
                                bg: "button.buyBg",
                                color: "button.white",
                                "&:hover:not(:disabled):not(:active)": {boxShadow: "none", bg: "button.buyHover"},
                                "&:active:not(:disabled)": {boxShadow: "none", bg: "button.buyActiveBg"}
                            },
                            sell: {
                                variant: "button.default",
                                bg: "button.sellBg",
                                color: "button.white",
                                "&:hover:not(:disabled):not(:active)": {boxShadow: "none", bg: "button.sellHover"},
                                "&:active:not(:disabled)": {boxShadow: "none", bg: "button.sellActiveBg"}
                            },
                            negative: {
                                variant: "button.default",
                                bg: "button.negativeBg",
                                color: "button.white",
                                "&:hover:not(:disabled):not(:active)": {boxShadow: "none", bg: "button.negativeHover"}
                            },
                            destructive: {
                                variant: "button.default",
                                bg: "button.negativeBg",
                                color: "button.white",
                                "&:hover:not(:disabled):not(:active)": {boxShadow: "none", bg: "button.negativeHover"}
                            }
                        },
                        outline: {
                            default: {variant: "button.outline"},
                            primary: {
                                variant: "button.outline",
                                color: "primary",
                                borderColor: "primary",
                                border: "1px solid",
                                boxShadow: "none"
                            },
                            second: {variant: "button.outlineSecond", border: "1px solid", boxShadow: "none"},
                            third: {variant: "button.outlineThird", border: "1px solid", boxShadow: "none"},
                            secondary: {
                                variant: "button.outline",
                                color: "t.muted",
                                borderColor: "lines.light",
                                border: "1px solid",
                                boxShadow: "none"
                            },
                            negative: {
                                variant: "button.outline",
                                color: "negative",
                                borderColor: "negative",
                                border: "1px solid",
                                boxShadow: "none"
                            }
                        },
                        quiet: {
                            primary: {variant: "button.quiet", color: "t.yellow"},
                            secondary: {variant: "button.quiet"},
                            negative: {variant: "button.quiet", color: "negative"}
                        },
                        text: {
                            primary: {variant: "button.quiet", color: "t.yellow"},
                            secondary: {variant: "button.quiet"},
                            negative: {variant: "button.quiet", color: "negative"}
                        },
                        round: {primary: {variant: "button.round"}, default: {variant: "button.round"}},
                        graytype: {primary: {variant: "button.graytype"}, default: {variant: "button.graytype"}},
                        primary: {default: {variant: "button.primary"}},
                        socialtrading: {
                            primary: {variant: "button.socialtradingPrimary"},
                            secondary: {variant: "button.socialtradingSecondary"},
                            quiet: {variant: "button.socialtradingQuiet"},
                            negative: {variant: "button.socialtradingNegative"}
                        }
                    }
                }), {
                    variants: {
                        inputCode: {width: "inputCode", marginRight: "xs"},
                        avatar: {width: "avatar", height: "avatar", borderRadius: "circle"},
                        card: {p: "xs", bg: "background", boxShadow: "card", borderRadius: "default"},
                        standardLink: {fontSize: "sm", color: "t.yellow"},
                        defaultLink: {fontSize: "xs", color: "t.yellow", textDecoration: "none"},
                        secondaryLink: {fontSize: "xs", color: "t.primary"},
                        link: {color: "primary"},
                        nav: {
                            fontSize: "sm",
                            fontWeight: "bold",
                            display: "inline-block",
                            p: "xs",
                            color: "inherit",
                            textDecoration: "none",
                            ":hover,:focus,.active": {color: "primary"}
                        },
                        badge: {
                            fontSize: "xs",
                            color: "#fff",
                            bg: "error",
                            fontWeight: "semibold",
                            borderRadius: "circle"
                        },
                        mask: {bg: "rgba(0, 0, 0, 0.5)", zIndex: "mask"},
                        icon: {fill: "t.primary"},
                        balanceChart: {fill: "bg1"},
                        tooltip: {
                            variant: "text.caption",
                            fontSize: "xs",
                            color: "t.white",
                            backgroundColor: "bg4",
                            borderRadius: "default",
                            py: "xs",
                            px: "ls",
                            filter: "drop-shadow(0px 3px 6px rgba(20,21,26, 0.08)) drop-shadow(0px 7px 14px rgba(71,77,87,0.08)) drop-shadow(0px 0px 1px rgba(20,21,26,0.1))",
                            ".bn-tooltip-arrow::before": {backgroundColor: "bg4"}
                        }
                    }
                }), {
                    dividers: {
                        primary: {bg: "lines.light"},
                        reverse: {bg: "lines.dark"},
                        selected: {bg: "primary"},
                        disabled: {bg: "lines.light"},
                        error: {bg: "error"}
                    }
                }), {
                    forms: {
                        placeholder: {color: "t.secondary", fontSize: "md"},
                        label: {color: "t.secondary", fontSize: "sm"},
                        selectedLabel: {variant: "forms.label", color: "primary"},
                        disabledLabel: {variant: "forms.label", color: "t.muted"},
                        errorLabel: {variant: "forms.label", color: "error"},
                        field: {
                            borderColor: "lightgray",
                            ":focus": {
                                borderColor: "primary", outline: "none", boxShadow: function (e) {
                                    return "0 0 0 2px " + e.colors.primary
                                }
                            }
                        },
                        input: {variant: "forms.field"},
                        select: {variant: "forms.field"},
                        textarea: {variant: "forms.field"},
                        radio: {},
                        slider: {bg: "lightgray"},
                        switch: {
                            "&[aria-checked=true]": {bg: "primary", "& [aria-thumb]": {borderColor: "primary"}},
                            "& [aria-thumb]": {borderColor: "greys.switch"}
                        }
                    }
                }), {
                    textarea: {
                        grayflat: {
                            px: "xs",
                            py: "ls",
                            bg: "bg3",
                            fontSize: "md",
                            lineHeight: "body",
                            borderRadius: "default",
                            border: "none",
                            "&::placeholder": {color: "t.placeholder"},
                            ":focus": {
                                borderColor: "primary", outline: "none", boxShadow: function (e) {
                                    return "0 0 0 1px " + e.colors.primary
                                }
                            },
                            "&.bn-textarea-error": {
                                borderColor: "error", outline: "none", boxShadow: function (e) {
                                    return "0 0 0 1px " + e.colors.error
                                }
                            }
                        }
                    }
                }), {
                    hint: {
                        default: {fontSize: "sm", color: "t.primary", "&::before": {mr: "xs"}},
                        circle: {variant: "hint.default", "&::before": {borderRadius: "circle", mr: "xs"}}
                    }
                }), {
                    inputs: {
                        primary: {
                            bg: "transparent",
                            color: "t.primary",
                            fontSize: "md",
                            "&:disabled": {color: "t.muted", "-webkit-text-fill-color": "currentcolor", opacity: 1},
                            "&:disabled + label": {variant: "forms.disabledLabel"},
                            "&:disabled ~ .bn-input-divider": {variant: "dividers.disabled"},
                            "&:focus + label, &:active + label": {variant: "forms.selectedLabel"},
                            "&:focus ~ .bn-input-divider, &:active ~ .bn-input-divider": {variant: "dividers.selected"}
                        },
                        error: {
                            variant: "inputs.primary",
                            "& + label": {variant: "forms.errorLabel"},
                            "& ~ .bn-input-divider": {variant: "dividers.error"},
                            "&:focus + label": {variant: "forms.errorLabel"},
                            "&:focus ~ .bn-input-divider": {variant: "dividers.error"}
                        }
                    }
                }), j), {
                    listGrid: {
                        default: {borderBottomColor: "line", color: "t.third", fontSize: "sm"},
                        header: {
                            mt: "sm",
                            color: "t.primary",
                            fontSize: "md",
                            fontWeight: "medium",
                            padding: "0 10px 0 16px"
                        },
                        toggleIcon: {color: "t.third", fontSize: "minor", verticalAlign: "middle"},
                        leftHeader: {variant: "text.body2", marginRight: "md"},
                        rightContent: {variant: "text.body2", color: "t.primary", textAlign: "right"},
                        checkbox: {width: "26px", "& svg": {color: "icon", size: "20px", mt: "line"}}
                    }
                }), {
                    pagination: {
                        default: {
                            mx: "minor",
                            p: "0px",
                            bg: "transparent",
                            borderRadius: "default",
                            color: "t.secondary",
                            fontWeight: "normal",
                            "&:hover:not(:disabled)": {bg: "line"},
                            "&:disabled": {cursor: "default"}
                        },
                        current: {variant: "pagination.default", bg: "line", color: "t.primary", fontWeight: "medium"}
                    }
                }), {
                    progress: {
                        outer: {width: "100%", height: 8, borderRadius: "default", bg: "lines.primary"},
                        bar: {
                            borderRadius: "default", background: function (e) {
                                return e.colors.primaryGradient
                            }
                        }
                    }
                }), D), {
                    tag: {
                        default: {
                            borderRadius: "default",
                            px: "xs",
                            fontSize: "sm",
                            bg: "tag.defaultBg",
                            color: "primary"
                        },
                        blue: {variant: "tag.default", bg: "tag.blueBg", color: "tag.blueTxt"},
                        gray: {variant: "tag.default", bg: "tag.grayBg", color: "tag.grayTxt"},
                        green: {variant: "tag.default", bg: "tag.greenBg", color: "tag.greenTxt"},
                        red: {variant: "tag.default", bg: "tag.redBg", color: "tag.redTxt"}
                    }
                }), Y), M), {
                    tabBarItem: {primary: {color: "t.third"}, selected: {color: "primary"}},
                    tabBar: {default: {bg: "background", height: 56}}
                }), Q), {
                    sideMenu: {
                        item: {
                            borderLeftWidth: "4px",
                            borderLeftColor: "primary",
                            cursor: "pointer",
                            alignItems: "center",
                            fontSize: 1,
                            ":hover": {bg: "muted"}
                        },
                        mainItem: {
                            variant: "sideMenu.item",
                            borderLeftStyle: "solid",
                            borderLeftColor: "transparent",
                            height: "48px",
                            fontWeight: "medium",
                            "& > div": {
                                flexGrow: 1,
                                overflow: "hidden",
                                fontWeight: "medium",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            },
                            "& svg:first-of-type": {flexShrink: 0, marginLeft: "xs", marginRight: "xs", color: "icon"}
                        },
                        activeMainItem: {variant: "sideMenu.mainItem", borderLeftColor: "primary", bg: "muted"},
                        activeLeftIcon: {variant: "sideMenu.leftIcon", color: "primary"},
                        rightIcon: {
                            flexShrink: 0,
                            marginLeft: "minor",
                            marginRight: "sm",
                            color: "icon",
                            transition: "all 0.1s"
                        },
                        activeBlock: {paddingLeft: "32px"},
                        subItem: {
                            variant: "sideMenu.item",
                            pt: "xs",
                            pb: "xs",
                            minHeight: "40px",
                            wordBreak: "break-word",
                            fontWeight: "normal",
                            borderLeftStyle: "solid",
                            borderLeftColor: "transparent"
                        },
                        activeSubItem: {
                            variant: "sideMenu.subItem",
                            bg: "muted",
                            fontWeight: "medium",
                            borderLeftColor: "primary"
                        }
                    }
                }), {
                    mobileMenu: {
                        container: {bg: "black.header", p: "sm"},
                        noSubMenuContainer: {variant: "mobileMenu.container", pb: "xs"},
                        tabs: {height: "35px"},
                        tab: {
                            marginRight: "md",
                            alignItems: "center",
                            color: "t.third",
                            "& >svg": {marginRight: "minor"},
                            "& >div": {
                                flexDirection: "column",
                                fontSize: "md",
                                lineHeight: 1.5,
                                position: "relative",
                                "& >div": {
                                    position: "absolute",
                                    bottom: "-2px",
                                    height: 2,
                                    width: "100%",
                                    bg: "primary"
                                }
                            }
                        },
                        activeTab: {
                            variant: "mobileMenu.tab",
                            "& > svg": {color: "primary"},
                            "& > div": {color: "#fff"}
                        },
                        dropdownContainer: {width: "100%", zIndex: 11, whiteSpace: "nowrap", fontSize: 1},
                        dropdownBox: {
                            marginTop: "-1px",
                            bg: "background",
                            width: "100%",
                            borderRadius: "0 0 2px 2px",
                            color: "#212833"
                        },
                        dropdown: {
                            p: "0 xp",
                            lineHeight: "40px",
                            height: "40px",
                            bg: "#fff",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            fontSize: "sm",
                            borderRadius: "small"
                        },
                        selectedDropDown: {variant: "mobileMenu.dropdown", bg: "#F5F5F5", fontWeight: "medium"},
                        dropdownInput: {
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            height: "40px",
                            bg: "#fff",
                            borderRadius: "small",
                            padding: "0 md",
                            color: "#212833",
                            fontWeight: "medium",
                            "& >svg": {marginLeft: "minor", flexShrink: 0, color: "icon"},
                            "& >div": {textOverflow: "ellipsis", overflow: "hidden"}
                        }
                    }
                }), {
                    twoFactor: {
                        pointerText: {
                            cursor: "pointer",
                            textAlign: "center",
                            marginTop: "plus",
                            fontWeight: "normal",
                            fontSize: 1
                        },
                        lable: {fontWeight: "normal", fontSize: 1, lineHeight: "32px", marginBottom: "md"},
                        tabItem: {
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "30px",
                            width: [172, 192]
                        },
                        tabItemSingle: {
                            borderBottom: "2px solid",
                            borderColor: "primary",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "30px",
                            width: [344, 384]
                        },
                        loading: {
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "lg",
                            color: "t.third",
                            fontSize: "2",
                            height: "100%",
                            width: "100%",
                            zIndex: "1",
                            userSelect: "none",
                            backgroundColor: "rgba(255, 255, 255, 0.9)"
                        },
                        error: {color: "accent", fontSize: "0", marginTop: "minor"},
                        googleActive: {transform: ["translate3d(0px, 0px, 0px)"]},
                        smsActive: {transform: ["translate3d(172px, 0px, 0px)", "translate3d(192px, 0px, 0px)"]}
                    },
                    Ensure2FA: {
                        title: {
                            color: "text",
                            fontWeight: "medium",
                            fontSize: 1,
                            width: [296, 336],
                            textAlign: "center",
                            lineHeight: "18px",
                            marginBottom: "xs"
                        },
                        desc: {
                            color: "text",
                            fontWeight: "normal",
                            fontSize: 1,
                            width: [296, 336],
                            textAlign: "center",
                            lineHeight: "18px",
                            marginBottom: "xs"
                        }
                    },
                    Enable2FA: {
                        wrap: {
                            width: [344, 384],
                            height: "342px",
                            position: "relative",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        title: {
                            color: "text",
                            fontWeight: "normal",
                            fontSize: 1,
                            width: "296px",
                            textAlign: "center",
                            lineHeight: "18px"
                        },
                        card: {
                            width: "160px",
                            height: "64px",
                            border: "1px solid #EAECEF",
                            borderRadius: "4px",
                            margin: "minor",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            boxSizing: "content-box",
                            cursor: "pointer",
                            "&:hover": {borderColor: "primary"},
                            "&:active": {backgroundColor: "#FBEAB6", borderColor: "primary"}
                        },
                        risk: {color: "#F0B90A", fontSize: "1", lineHeight: "30px"},
                        skip: {color: "t.third", fontSize: "1", textDecoration: "underline", cursor: "pointer"},
                        cardWrap: {margin: "40px 0"},
                        icon: {width: "42px", height: "42px", marginRight: "sm"},
                        front: {zIndex: "1", visibility: "visible"},
                        back: {zIndex: "0", visibility: "hidden"}
                    },
                    Modal: {wrap: {py: [40], width: [344, 384], height: [342], borderRadius: "default"}}
                }), {
                    inputCode: {
                        default: {
                            width: "100%",
                            justifyContent: "space-between",
                            "& > div:not(:last-child)": {mr: "minor"},
                            ".bn-inputCode-input": {width: ["inputCodeMobile", "inputCode"]},
                            ".bn-inputCode-input input": {
                                textAlign: "center",
                                bottom: "xs",
                                position: "relative",
                                fontSize: "md"
                            }
                        },
                        outlineLarge: {
                            variant: "inputCode.default",
                            ".bn-inputCode-input  input": {bottom: "0px", fontSize: "md"},
                            ".bn-inputCode-input > div": {width: "40px"}
                        }
                    }
                }), {
                    safety: {
                        container: {
                            alignItems: "baseline",
                            "& > div": {transform: "translateY(-2px)"},
                            "& > label": {fontSize: "xs", ml: "minor"}
                        }, level: {width: "8px", height: "3px", borderRadius: "small", mr: "minor", bg: "muted"}
                    }
                }), {
                    styledSlider: {
                        default: {
                            mt: "sm",
                            mb: "sm",
                            paddingLeft: "ls",
                            paddingRight: "ls",
                            width: "100%",
                            ".bn-slider-container": {
                                position: "relative",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "calc(100% - 14px)",
                                ml: "7px",
                                height: "25px",
                                "&:hover > label": {visibility: "visible", opacity: 1}
                            },
                            ".bn-slider-available-bar": {
                                boxSizing: "content-box",
                                position: "absolute",
                                height: "4px",
                                bg: "slider.line",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                backgroundClip: "padding-box"
                            },
                            ".bn-slider-progress-bar": {bg: "slider.progressBar"},
                            ".bn-slider-disabled-bar": {
                                boxSizing: "content-box",
                                position: "absolute",
                                height: "4px",
                                bg: "slider.disabledBar",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                backgroundClip: "padding-box"
                            },
                            ".bn-slider-radio-button": {
                                position: "absolute",
                                width: "16px",
                                height: "16px",
                                transform: "translateX(-50%) rotate(45deg)",
                                bg: "slider.tooltipText",
                                borderRadius: "default",
                                border: "4px solid",
                                borderColor: "slider.progressBar",
                                zIndex: 20,
                                cursor: "grab",
                                transition: "box-shadow 0.2s ease",
                                "&::after": {
                                    content: '""',
                                    display: "block",
                                    width: "16px",
                                    height: "16px",
                                    border: "2px solid",
                                    borderColor: "bg1",
                                    borderRadius: "default",
                                    background: "transparent",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%)"
                                }
                            },
                            ".bn-slider-radio-tooltip": {
                                visibility: "hidden",
                                opacity: 0,
                                position: "absolute",
                                top: 0,
                                marginTop: "-24px",
                                padding: "2px 4px",
                                borderRadius: "small",
                                bg: "slider.progressBar",
                                color: "slider.tooltipText",
                                fontSize: 0,
                                verticalAlign: "top",
                                transform: "translateX(-50%)",
                                zIndex: 10,
                                userSelect: "none",
                                transition: "visibility 0.2s ease, opacity 0.2s ease"
                            },
                            ".bn-slider-stepper": {
                                boxSizing: "content-box",
                                position: "absolute",
                                transform: "translateX(-50%) rotate(45deg)",
                                bg: "bg1",
                                color: "t.third",
                                width: "6px",
                                height: "6px",
                                borderRadius: "small",
                                border: "2px solid",
                                borderColor: "line",
                                zIndex: "10",
                                overflow: "visible",
                                cursor: "pointer",
                                ":hover": {bg: "line", borderColor: "bg1"}
                            },
                            ".bn-slider-progress-stepper": {
                                bg: "slider.progressBar",
                                borderColor: "bg1",
                                ":hover": {bg: "slider.progressBar"}
                            },
                            ".bn-slider-disabled-stepper": {
                                bg: "slider.disabledBar",
                                color: "slider.disabledBar",
                                ":hover": {bg: "slider.disabledBar"}
                            },
                            ".bn-slider-scale": {
                                position: "absolute",
                                left: "20px",
                                top: "15px",
                                transform: "translateX(calc(-50% + 4px)) rotate(-45deg)",
                                fontSize: 1,
                                userSelect: "none"
                            }
                        },
                        primary: {
                            variant: "styledSlider.default",
                            " .bn-slider-progress-bar": {bg: "primary"},
                            " .bn-slider-radio-button": {borderColor: "primary"},
                            " .bn-slider-radio-tooltip": {bg: "primary"},
                            " .bn-slider-progress-stepper": {bg: "primary"}
                        }
                    }
                }), {
                    smartSlider: {
                        wrapper: {mt: "sm", mb: "sm", width: "100%"},
                        container: {
                            position: "relative",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "calc(100% - 14px)",
                            ml: "xxs",
                            height: "25px",
                            "&:hover > label": {display: "block"}
                        },
                        bar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            width: "100%",
                            height: "4px",
                            bg: "#48515D",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        disabledBar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            height: "4px",
                            bg: "#cccccc",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        ratioButton: {
                            position: "absolute",
                            width: "14px",
                            height: "14px",
                            transform: "translateX(-50%)",
                            bg: "#76808F",
                            opacity: "0.2",
                            borderRadius: "circle",
                            border: "2px solid",
                            zIndex: 20,
                            cursor: "grab"
                        },
                        tooltip: {
                            display: "none",
                            position: "absolute",
                            top: 0,
                            marginTop: "-18px",
                            padding: "1px 2px",
                            borderRadius: "small",
                            color: "#FFFFFF",
                            fontSize: 0,
                            verticalAlign: "top",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            userSelect: "none"
                        },
                        stepper: {
                            position: "absolute",
                            transform: "translateX(-50%)",
                            width: "8px",
                            height: "8px",
                            bg: "#656D7B",
                            borderRadius: "circle",
                            zIndex: "10",
                            overflow: "visible"
                        },
                        scale: {
                            position: "absolute",
                            transform: "translateX(calc(-50% + 4px))",
                            mt: "10px",
                            fontSize: 1,
                            userSelect: "none"
                        }
                    }
                }), {
                    tradeSlider: {
                        wrapper: {mt: "sm", mb: "sm", width: "100%"},
                        container: {
                            position: "relative",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "calc(100% - 14px)",
                            ml: "7px",
                            height: "25px",
                            "&:hover > label": {visibility: "visible", opacity: 1},
                            "&:hover > .bn-tradeSlider-ratioButton": {
                                boxShadow: function (e) {
                                    return "0 0 0 1px " + e.colors.slider.ratioButton + ", 0 0 0 4px " + e.colors.lines.primary
                                }
                            }
                        },
                        bar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            width: "100%",
                            height: "4px",
                            bg: "lines.primary",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        ratioButton: {
                            position: "absolute",
                            width: "14px",
                            height: "14px",
                            transform: "translateX(-50%)",
                            bg: "slider.ratioButton",
                            borderRadius: "circle",
                            border: "3px solid",
                            zIndex: 20,
                            cursor: "grab",
                            transition: "box-shadow 0.2s ease"
                        },
                        tooltip: {
                            visibility: "hidden",
                            opacity: 0,
                            position: "absolute",
                            top: 0,
                            marginTop: "20px",
                            padding: "1px 2px",
                            borderRadius: 2,
                            fontSize: 0,
                            verticalAlign: "top",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            userSelect: "none",
                            bg: "transparent",
                            color: "slider.progress",
                            transition: "visibility 0.2s ease, opacity 0.2s ease"
                        },
                        stepper: {
                            position: "absolute",
                            transform: "translateX(-50%)",
                            width: "8px",
                            height: "8px",
                            bg: "lines.primary",
                            borderRadius: "circle",
                            boxShadow: "0 0 0 2px",
                            color: "slider.ratioButton",
                            zIndex: "10",
                            overflow: "visible",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            "&:hover": {width: "14px", height: "14px"}
                        },
                        scale: {
                            position: "absolute",
                            transform: "translateX(calc(-50% + 4px))",
                            mt: "10px",
                            fontSize: 1,
                            userSelect: "none"
                        }
                    }
                }), {
                    select: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: 10,
                            padding: 0,
                            transition: "height 0.2s ease",
                            background: "#FFFFFF",
                            boxShadow: "card"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            "&:hover": {background: "#F5F5F7"}
                        }
                    }
                }), {
                    search: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: "dropdown",
                            padding: 0,
                            transition: "height 0.2s ease",
                            bg: "search.bg",
                            boxShadow: "card"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            bg: "search.bg",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            "&:hover": {backgroundColor: "search.hoverBg"}
                        },
                        icon: {cursor: "pointer", color: "t.third", verticalAlign: "middle"}
                    }
                }), X), {
                    pureSelect: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: "dropdown",
                            padding: 0,
                            transition: "height 0.2s ease",
                            boxShadow: "tooltip",
                            borderRadius: "default",
                            cursor: "pointer",
                            bg: "popupBg"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        },
                        icon: {color: "icon", position: "absolute", right: "10px", top: "50%"}
                    }
                }), {
                    breadcrumb: {
                        container: {
                            alignItems: "center",
                            pl: "plus",
                            pr: "plus",
                            height: "48px",
                            fontSize: 0,
                            color: "t.secondary"
                        }, splitter: {ml: "xs", mr: "xs", lineHeight: 1, color: "line"}
                    }, breadcrumbLink: {default: {textDecoration: "none", fontSize: "sm", lineHeight: 1}}
                }), {
                    radio: {
                        default: {
                            variant: "text.label5",
                            display: "inline-block",
                            cursor: "pointer",
                            "& svg:hover": {color: "primary"},
                            "& svg:active": {color: "primary"}
                        },
                        disabled: {
                            variant: "text.label5",
                            cursor: "not-allowed",
                            color: "t.disabled",
                            "& svg, & label": {cursor: "not-allowed"}
                        }
                    }
                }), {
                    mediaBox: {
                        default: {
                            width: ["100%", "384px"],
                            m: ["0 auto", "40px auto", "40px auto"],
                            px: "md",
                            borderRadius: "default",
                            bg: "#fff"
                        },
                        rwdContentBox: {
                            textAlign: "center",
                            width: ["100%", "100%", "736px"],
                            m: [0, "24px auto", "24px auto"],
                            px: "md",
                            py: "xp",
                            borderRadius: "default",
                            bg: "#fff",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        shadow: {
                            width: ["100%", "750px", "970px"],
                            m: ["0 auto", "40px auto", "40px auto"],
                            p: ["md", "40px", "40px"],
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        shadowSm: {
                            variant: "mediaBox.default",
                            py: "xp",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        topShadowSm: {
                            variant: "mediaBox.default",
                            py: "xp",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"],
                            mt: ["0", "100px", "100px"]
                        },
                        newDSdefault: {
                            width: ["100%", "400px", "432px"],
                            m: ["40px auto", "48px auto", "48px auto"],
                            px: ["sm", "md"],
                            bg: "#fff"
                        }
                    }
                }), {
                    twoFAThreeCode: {
                        default: {
                            width: "484px",
                            position: "relative",
                            maxWidth: "100%",
                            height: "100%",
                            flexDirection: "column",
                            p: "sm",
                            "&.dialog": {width: "436px", p: 0},
                            "&.safeWrap": {
                                width: ["300px", "384px", "384px"],
                                p: 0,
                                ".bn-2fa-title": {fontSize: "plus", mt: "xs"}
                            },
                            ".bn-2fa-title": {textAlign: "center"},
                            ".bn-2fa-info": {
                                textAlign: "center",
                                mt: "ls",
                                mb: "plus",
                                color: "t.third",
                                lineHeight: "16px",
                                height: "auto"
                            },
                            ".bn-2fa-info.bn-2fa-table-info": {mb: "27px"},
                            "&.dialog .bn-2fa-title": {lineHeight: "64px", fontSize: "20px", textAlign: "left"},
                            "&.dialog .bn-2fa-info": {textAlign: "left", mt: 0, mb: 4},
                            ".bn-2fa-link": {
                                color: "t.yellow",
                                fontSize: "14px",
                                lineHeight: "body",
                                textDecoration: "none",
                                textAlign: "left",
                                mb: "md"
                            },
                            ".error .bn-2fa-field": {borderColor: "toast.error"},
                            ".bn-2fa-field": {flex: 1},
                            ".bn-2fa-field .bn-input-label": {whiteSpace: "nowrap", fontSize: "14px"},
                            ".bn-2fa-fieldbutton": {
                                width: "104px",
                                ml: "xs",
                                "&.noCn": {flexDirection: "column", lineHeight: 1.15},
                                "&:disabled": {color: "#D0980B"},
                                "& .sub": {color: "t.third", fontSize: "xs", fontWeight: "normal"}
                            },
                            ".bn-2fa-fieldInfo": {
                                mt: "minor",
                                mb: "20px",
                                lineHeight: "16px",
                                color: "t.third",
                                height: "auto",
                                "& .voiceGet": {color: "t.yellow", cursor: "pointer"}
                            },
                            ".error .bn-2fa-fieldInfo": {color: "toast.error"},
                            ".bn-2fa-submit": {mb: "md"},
                            ".bn-2fa-fullscreenSubmit": {
                                position: "fixed",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.06)",
                                p: "md"
                            },
                            ".bn-2fa-cell": {
                                width: "148px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                lineHeight: "18px",
                                padding: "16px",
                                border: "none",
                                ":hover": {bg: "bg3", cursor: "pointer"}
                            },
                            ".bn-2fa-cell:nth-of-type(n+2)": {ml: ["sm", "md", "md"]},
                            ".bn-2fa-celltext": {mt: "ls", fontWeight: "medium", whiteSpace: "break-spaces"},
                            ".bn-2fa-nextHit": {
                                fontSize: "xs",
                                textDecoration: "none",
                                color: "t.yellow",
                                "&:hover": {color: "t.yellow"},
                                cursor: "pointer",
                                alignSelf: "flex-end",
                                mb: 3
                            },
                            ".bn-2fa-tabGroup": {mb: "md"},
                            ".bn-2fa-switchChoice": {
                                fontSize: "xs",
                                textDecoration: "none",
                                mb: "md",
                                color: "primary",
                                width: "auto",
                                display: "inline-block",
                                "&:hover": {color: "t.yellow"},
                                cursor: "pointer"
                            },
                            ".bn-2fa-cellIconWrap": {
                                position: "relative",
                                width: "48px",
                                height: "48px",
                                lineHeight: "20px"
                            },
                            ".bn-2fa-cellIcon": {position: "absolute"}
                        }
                    }
                }), {
                    kline: {
                        drawPanel: {
                            position: "relative",
                            width: "48px",
                            zIndex: 1,
                            transition: "width 0.2s",
                            "&.hidden": {
                                width: "2px",
                                "& .kline-draw-menu-container, & .kline-draw-panel_down": {visibility: "hidden"},
                                "& .kline-draw-panel_hidden::after": {
                                    transform: "rotate(135deg) translateY(100%)",
                                    transition: "transform .11666667s cubic-bezier(.215,.61,.355,1)"
                                }
                            },
                            "& .kline-draw-panel_hidden:hover": {background: "#F0B90B", color: "#1E2026"}
                        },
                        toolItem: {
                            height: "40px",
                            alignItems: "center",
                            cursor: "pointer",
                            justifyContent: "center",
                            textAlign: "center",
                            color: "kline.annotationToolLineColor",
                            "&:hover": {
                                bg: "kline.annotationToolBorderColor",
                                color: "kline.annotationToolLineActiveColor"
                            },
                            "&:hover path, &:hover rect": {fill: "kline.annotationToolLineActiveColor"},
                            "&:not(:first-of-type)": {
                                width: "40px",
                                borderLeftWidth: "1px",
                                borderLeftStyle: "solid",
                                borderLeftColor: "kline.annotationToolBorderColor"
                            },
                            ".active path": {fill: "kline.annotationToolActiveTextColor"}
                        },
                        toolArrowIcon: {
                            bg: "kline.drawPanelDownIconBg",
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            width: "100%",
                            height: "16px",
                            zIndex: 1,
                            cursor: "pointer",
                            visibility: "visible",
                            transition: "transform .11666667s cubic-bezier(.215,.61,.355,1)",
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                width: "4px",
                                height: "4px",
                                borderWidth: "0 2px 2px 0",
                                borderStyle: "solid",
                                transformOrigin: "center",
                                transform: "rotate(45deg) translateX(-100%)",
                                borderColor: "kline.drawPanelDownIconColor"
                            },
                            "&:hover::after": {borderColor: "#F0B90B"},
                            "&.up": {top: 0, transform: "rotate(180deg)"},
                            "&.up.hidden": {transform: "rotate(180deg) translateY(100%)"},
                            "&.hidden": {transform: "translateY(100%)", visibility: "hidden", display: "none"}
                        },
                        toolHiddenIcon: {
                            position: "absolute",
                            bottom: "65px",
                            left: "100%",
                            width: "12px",
                            height: "32px",
                            borderRadius: "4px",
                            bg: "kline.drawPanelHiddenIconBg",
                            borderColor: "kline.drawPanelHiddenIconBorderColor",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            color: "kline.drawPanelHiddenIconColor",
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                width: "3px",
                                height: "3px",
                                borderWidth: "1px 0 0 1px",
                                borderStyle: "solid",
                                transformOrigin: "center",
                                transform: "rotate(-45deg) translateY(-50%)"
                            }
                        }
                    },
                    colorPicker: {
                        selectItem: {
                            "&::after": {
                                content: '""',
                                display: "inline-block",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderTopWidth: 0,
                                borderRightWidth: 0,
                                width: "10px",
                                height: "4px",
                                WebkitTransform: "rotate(-50deg)",
                                position: "absolute",
                                top: "5px",
                                left: "3px"
                            }
                        }
                    }
                }), {
                    card: {
                        default: {
                            p: "xs",
                            bg: "background",
                            boxShadow: "card",
                            borderRadius: "default"
                        }
                    }
                }), K), {
                    backTop: {
                        default: {
                            borderRadius: "circle",
                            width: "40px",
                            height: "40px",
                            bg: "t.primary",
                            opacity: .5,
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            zIndex: "backTop",
                            "&:hover": {opacity: .7},
                            ".backTop-arrow-icon": {color: "bg1"}
                        }
                    }
                }), {
                    table: {
                        dimhead: {".bn-table th": {backgroundColor: "bg2"}},
                        purehead: {".bn-table th": {backgroundColor: "modalBg"}}
                    }
                }), oe = a({
                    colors: {
                        greys: {switch: "#C1C6CD", risk: "#EAECEF"},
                        black: {header: "#12161C", footer: "#0B0E11", text: "#212833"},
                        header: {text: "white", bg: "#12161C", dropdown: "#1E2126", gray: "#848E9C", black: "#212833"}
                    },
                    fonts: {heading: "inherit", monospace: "Menlo, monospace"},
                    breakpoints: ["767px", "1023px", "1279px"],
                    fontSizes: a(a({}, [12, 14, 16, 20, 24, 28, 32]), {
                        xs: 12,
                        sm: 14,
                        md: 16,
                        minor: 18,
                        plus: 20,
                        xp: 24,
                        lg: 28,
                        xl: 32,
                        xxl: 40,
                        xxxl: 48,
                        xxxxl: 56
                    }),
                    fontWeights: {
                        extraLight: 200,
                        light: 300,
                        normal: 400,
                        regular: 400,
                        medium: 500,
                        semibold: 600,
                        bold: 700
                    },
                    lineHeights: {body: 1.5, heading: 1.25},
                    space: a(a({}, [0, 4, 8, 16, 24, 32, 48, 64, 80]), {
                        line: 1,
                        tiny: 2,
                        minor: 4,
                        xxs: 6,
                        xs: 8,
                        s: 10,
                        ls: 12,
                        sm: 16,
                        md: 24,
                        plus: 32,
                        xp: 40,
                        lg: 48,
                        xl: 64,
                        xxl: 80
                    }),
                    sizes: {avatar: 48, inputCode: 44, inputCodeMobile: 40},
                    radii: {
                        small: 2,
                        default: 4,
                        large: 6,
                        extra: 8,
                        larger: 10,
                        xlarge: 16,
                        extraLarger: 20,
                        xxlarge: 26,
                        circle: 99999
                    },
                    shadows: {
                        card: " 0px 1px 2px rgba(20,21,26,0.04), 0px 3px 6px rgba(71,77,87,0.04), 0px 0px 1px rgba(20,21,26,0.1)",
                        tooltip: " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
                        calendar: " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
                        dialog: "0px 8px 16px rgba(20,21,26,0.16), 0px 16px 32px rgba(71,77,87,0.16), 0px 0px 1px rgba(20,21,26,0.1)",
                        area: "0px 0px 20px rgba(0, 0, 0, 0.08)",
                        dropdown: "0px 8px 16px rgba(24, 26, 32, 0.16)"
                    },
                    zIndices: {
                        mask: 10,
                        menu: 1e3,
                        header: 1001,
                        dropdown: 1100,
                        modal: 1200,
                        backTop: 1225,
                        calendar: 1250,
                        mobileDatePopup: 1275,
                        notification: 1300,
                        alert: 1350,
                        tooltip: 1400,
                        drawer: 9999
                    },
                    styles: {root: {fontWeight: "body", lineHeight: "body"}}
                }, ne);
                var ie = "#FFFFFF", ae = "#FAFAFA", se = "#F5F5F5", le = "#EAECEF", ce = "#D8DCE1", ue = "#B7BDC6",
                    de = "#929AA5", pe = "#848E9C", fe = "#707A8A", ge = "#5E6673", he = "#474D57", be = "#2B3139",
                    me = "#1E2329", ve = "#181A20", ye = "#0B0E11", xe = "#FFFDE6", we = "#FEF6D8", Se = "#FFEF87",
                    ke = "#FCD535", Ce = "#F0B90B", Be = "#C99400", Ae = "#A37200", Ee = "#8D5F02", Te = "#6A4403",
                    Oe = "#3C2601", _e = "#281A00", Re = "#328DFD", Ie = "#F2FFF7", je = "#E6FFF1", ze = "#32D993",
                    Pe = "#0ECB81", Fe = "#03A66D", Le = "#102821", De = "#FEF6F7", He = "#FEF1F2", Me = "#FF707E",
                    Ne = "#F6465D", We = "#CF304A", Ue = "#35141D", Ge = r("veKZ"), Ve = r.n(Ge), $e = r("3POh"),
                    Xe = r.n($e), qe = r("jPI1"), Ye = r.n(qe), Je = r("pL+m"), Qe = r.n(Je), Ze = ["light", "dark"],
                    Ke = Xe()(Ve()), et = function (e) {
                        return Ke({})((function (t, r) {
                            var n;
                            return t[r] = (n = r, Ye()([Qe(), Ke({})((function (e, t) {
                                var r = t[0], o = t[1];
                                return e[r] = o[n], e
                            }))]))(e), t
                        }))(Ze)
                    }, tt = "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)";
                const rt = {
                    primaryGradient: {light: tt, dark: tt},
                    grayGradient: {
                        light: "linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)",
                        dark: "linear-gradient(295.27deg, #FFFFFF 0%, #E6E8EA 84.52%)"
                    }
                };
                var nt = et(rt).dark;
                const ot = a({
                    modalBg: be,
                    popupBg: me,
                    bg1: ve,
                    bg2: ye,
                    bg3: be,
                    bg4: ge,
                    bg5: ve,
                    bg6: ye,
                    line: he,
                    liteBg1: "#20262D",
                    liteBg2: "#191A1F",
                    t: {
                        primary: le,
                        secondary: ue,
                        third: pe,
                        placeholder: ge,
                        disabled: ge,
                        yellow: Ce,
                        buy: Pe,
                        sell: Ne,
                        toast: Ae,
                        white: ie
                    },
                    iconNormal: pe,
                    alertYellowBg: _e,
                    badgeYellowBg: Oe,
                    outlineHover: Te,
                    primaryHover: ke,
                    primary: Ce,
                    toastFailBg: Ue,
                    depthSellBg: Ue,
                    sellHover: Me,
                    sell: Ne,
                    toastSuccessBg: Le,
                    depthBuyBg: Le,
                    buyHover: ze,
                    buy: Pe,
                    invBg: be
                }, nt);
                var it = a(a({}, oe.colors), {
                    tooltipBg: ot.modalBg,
                    t: {blue: "#285C93", muted: "#444", grey: "#D8D8D8", link: ot.t.yellow},
                    errors: ot.t.sell,
                    elevation: {
                        shadow01: "0px 3px 6px rgba(0,0,0,0.04), 0px 1px 2px rgba(0,0,0,0.04), inset 0px 0px 1px rgba(94,102,115,0.8)",
                        shadow02: "0px 7px 14px rgba(0,0,0,.08), 0px 3px 6px rgba(0,0,0,.08), inset 0px 0px 1px rgba(94,102,115,.9)",
                        shadow03: "0px 16px 32px rgba(0,0,0,0.16), 0px 8px 16px rgba(0,0,0,0.16), inset 0px 0px 1px rgba(94,102,115,0.9)"
                    },
                    calendar: {
                        selected: fe,
                        selectedRange: he,
                        disableColor: he,
                        shadow: ye,
                        line: ot.line,
                        buttonDisableBg: ot.bg3,
                        mobileMaskBg: "0, 0, 0"
                    },
                    slider: {
                        disabledBar: ot.line,
                        availableBar: ge,
                        progressBar: se,
                        tooltipText: ot.modalBg,
                        ratioButton: "#1F2124",
                        progress: ie,
                        line: ot.line
                    },
                    switch: {onBg: ot.buy, offBg: ce, buttonBg: ot.t.white},
                    button: {
                        primaryPressed: ot.primary,
                        defaultDisabled: ot.line,
                        secondaryBg: ot.line,
                        secondaryPressedBg: ot.t.placeholder,
                        graytypeBg: ge,
                        graytypeHoverBg: ot.t.primary,
                        graytypePressedBg: ot.t.primary,
                        graytypeHoverFontColor: ot.popupBg,
                        graytypePressedFontColor: ot.popupBg,
                        buyBg: ot.buy,
                        buyHover: ot.buyHover,
                        buyActiveBg: "#159865",
                        white: ot.t.white,
                        primaryHover: ot.primaryHover,
                        sellBg: ot.sell,
                        sellHover: ot.sellHover,
                        sellActiveBg: ot.t.sell,
                        negativeBg: ot.t.sell,
                        negativeHover: ot.sell,
                        outlineBgHover: Te,
                        outlineBorderHover: _e,
                        outlineBgActive: "none",
                        outlineBorderActive: he,
                        outlineText: ie,
                        outlinePrimaryText: ot.t.yellow,
                        primaryHoverGradient: "linear-gradient(180deg, #FFE251 0%, #EDC423 100%)",
                        socialtradingPrimaryGradient: "linear-gradient(89.92deg, #06EBC2 0.07%, #6B8CFF 99.93%)",
                        socialtradingPrimaryActive: "#577EE5",
                        socialtradingPrimaryHoverGradient: "linear-gradient(89.92deg, #06EBC2 0.07%, #6B8CFF 99.93%)",
                        socialtradingSecondaryDisabled: "#3FD9D0",
                        socialtradingSecondaryActive: "#577EE6",
                        socialtradingSecondaryHover: "#3FD9D0",
                        socialtradingQuietPrimary: "#3FD9D0",
                        socialtradingQuietActive: "#577EE6",
                        socialtradingQuietHover: "#3FD9D0",
                        socialtradingNegativeActive: "#577EE5",
                        socialtradingNegativePrimaryGradient: "linear-gradient(89.92deg, #FFBF1C 0.07%, #EB4073 99.93%)",
                        socialtradingLoadingPrimary: "#3FD9D0"
                    },
                    radio: {gray: "#5C5C5C"},
                    checkbox: {
                        gray: "#AEB4BC",
                        hover: ot.primary,
                        bg: ot.primary,
                        indeterminateFill: ot.t.white,
                        disabledBorder: ot.t.placeholder
                    },
                    toast: {
                        info: ot.t.disabled,
                        error: ot.t.sell,
                        warning: ot.primary,
                        success: ot.buy,
                        title: ot.t.primary,
                        content: ot.t.secondary,
                        tips: ot.primary,
                        bg: ot.modalBg,
                        closeColor: ot.t.third
                    },
                    search: {bg: ot.modalBg, hoverBg: ot.bg3},
                    searchDropdown: {clearIconColor: ce},
                    pureSelect: {bg: ot.modalBg, hoverBg: ot.bg3},
                    alert: {errorBg: "#3B182B", warningBg: "#3C351F", successBg: "#17352F", infoBg: "#1C2D40"},
                    alertV2: {
                        errorBg: ot.depthSellBg,
                        warningBg: ot.badgeYellowBg,
                        successBg: ot.depthBuyBg,
                        infoBg: "#1C2D40",
                        successColor: ot.buy,
                        warningColor: ot.primary,
                        errorColor: We,
                        infoColor: Re,
                        errorFontColor: ot.sell,
                        successFontColor: ot.t.primary,
                        warningFontColor: ot.t.primary,
                        infoFontColor: ot.t.primary
                    },
                    tag: {
                        defaultBg: "#F0B90B30",
                        blueBg: "#4A90E230",
                        blueTxt: "#4A90E2",
                        grayBg: "#B3B5B930",
                        grayTxt: "#B3B5B9",
                        greenBg: "#00C08730",
                        greenTxt: "#00C087",
                        redBg: "#E5037030",
                        redTxt: "#E50370"
                    },
                    dialog: {mask: "rgb(0, 0, 0, 0.5)"},
                    tabs: {flowBg: ke, flowText: me},
                    advanced: {downDropBg: "#313336"},
                    transInputBG: ot.bg3,
                    maskBg: ve,
                    secondary: "#2EBD85",
                    background: "#12161C",
                    accent: "#F23051",
                    muted: "#262626",
                    negative: "#F23051",
                    success: "#00C087",
                    error: "#F23051",
                    icon: "#848E9C",
                    bg: "#1B1F25",
                    stress: "#1F2124",
                    lines: {primary: "#272A2E", light: "#272A2E", dark: "#272A2E"},
                    kline: {
                        drawDivider: be,
                        drawIconColor: pe,
                        drawDropDownBg: me,
                        drawDropDownIconBg: "rgb(51, 51, 51)",
                        drawDropDownActiveBg: he,
                        drawDropDownActiveTextColor: le,
                        annotationToolBorderColor: "#2B313A",
                        annotationToolBg: me,
                        annotationToolActiveBg: he,
                        annotationToolLineColor: pe,
                        annotationToolLineActiveColor: le,
                        annotationToolActiveTextColor: Ce,
                        settingPanelBg: "#23282D",
                        drawPanelDownIconBg: "#2B2F36",
                        drawPanelDownIconColor: "#929AA5",
                        drawPanelHiddenIconBg: "#12161C",
                        drawPanelHiddenIconBorderColor: he,
                        drawPanelHiddenIconColor: "#929AA5"
                    },
                    modal: {bg: ot.popupBg}
                });
                const at = a(a({}, oe), {
                    colors: _()(it, ot),
                    shadows: a(a({}, oe.shadows), {
                        elevation1: "0px 3px 6px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.04), inset 0px 0px 1px rgba(94, 102, 115, 0.8)",
                        elevation2: "0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",
                        elevation3: "0px 16px 32px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.16), inset 0px 0px 1px rgba(94, 102, 115, 0.9)"
                    })
                });
                var st = et(rt).light;
                const lt = a({
                    modalBg: ie,
                    popupBg: ie,
                    bg1: ie,
                    bg2: ae,
                    bg3: se,
                    bg4: ge,
                    bg5: ve,
                    bg6: ye,
                    line: le,
                    liteBg1: ie,
                    liteBg2: ae,
                    t: {
                        primary: me,
                        secondary: he,
                        third: fe,
                        placeholder: ue,
                        disabled: ue,
                        yellow: Be,
                        buy: Fe,
                        sell: We,
                        toast: Ee,
                        white: ie
                    },
                    iconNormal: de,
                    alertYellowBg: xe,
                    badgeYellowBg: we,
                    outlineHover: Se,
                    primaryHover: ke,
                    primary: Ce,
                    toastFailBg: De,
                    depthSellBg: He,
                    sellHover: Me,
                    sell: Ne,
                    toastSuccessBg: Ie,
                    depthBuyBg: je,
                    buyHover: ze,
                    buy: Pe,
                    invBg: ae
                }, st);
                var ct = a(a({}, oe.colors), {
                    tooltipBg: lt.modalBg,
                    t: {blue: "#285C93", muted: "#CCCCCC", grey: "#D8D8D8", link: lt.t.yellow},
                    errors: lt.t.sell,
                    elevation: {
                        shadow01: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                        shadow02: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                        shadow03: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                    },
                    calendar: {
                        selected: Ce,
                        selectedRange: ke,
                        disableColor: ce,
                        shadow: le,
                        line: lt.line,
                        buttonDisableBg: lt.bg3,
                        mobileMaskBg: "255, 255, 255"
                    },
                    slider: {
                        disabledBar: lt.line,
                        availableBar: ce,
                        progressBar: be,
                        tooltipText: lt.modalBg,
                        ratioButton: ie,
                        progress: pe,
                        line: lt.line
                    },
                    switch: {onBg: lt.buy, offBg: ce, buttonBg: lt.t.white},
                    button: {
                        primaryPressed: lt.primary,
                        defaultDisabled: lt.line,
                        secondaryBg: lt.line,
                        secondaryPressedBg: lt.t.placeholder,
                        graytypeBg: he,
                        graytypeHoverBg: lt.t.primary,
                        graytypePressedBg: lt.t.primary,
                        graytypeHoverFontColor: lt.popupBg,
                        graytypePressedFontColor: lt.popupBg,
                        buyBg: lt.buy,
                        buyHover: lt.buyHover,
                        buyActiveBg: "#159865",
                        white: lt.t.white,
                        primaryHover: lt.primaryHover,
                        sellBg: lt.sell,
                        sellHover: lt.sellHover,
                        sellActiveBg: lt.t.sell,
                        negativeBg: lt.t.sell,
                        negativeHover: lt.sell,
                        outlineBgHover: "none",
                        outlineBorderHover: Ce,
                        outlineBgActive: "#FFF7D6",
                        outlineBorderActive: Ce,
                        outlineText: me,
                        outlinePrimaryText: lt.t.yellow,
                        primaryHoverGradient: "linear-gradient(180deg, #FFE251 0%, #EDC423 100%)",
                        socialtradingPrimaryGradient: "linear-gradient(89.92deg, #06EBC2 0.07%, #6B8CFF 99.93%)",
                        socialtradingPrimaryActive: "#577EE5",
                        socialtradingPrimaryHoverGradient: "linear-gradient(89.92deg, #06EBC2 0.07%, #6B8CFF 99.93%)",
                        socialtradingSecondaryDisabled: "#3FD9D0",
                        socialtradingSecondaryActive: "#577EE6",
                        socialtradingSecondaryHover: "#3FD9D0",
                        socialtradingQuietPrimary: "#3FD9D0",
                        socialtradingQuietActive: "#577EE6",
                        socialtradingQuietHover: "#3FD9D0",
                        socialtradingNegativeActive: "#577EE5",
                        socialtradingNegativePrimaryGradient: "linear-gradient(89.92deg, #FFBF1C 0.07%, #EB4073 99.93%)",
                        socialtradingLoadingPrimary: "#3FD9D0"
                    },
                    radio: {gray: "#5C5C5C"},
                    checkbox: {
                        gray: "#AEB4BC",
                        hover: lt.primary,
                        bg: lt.primary,
                        indeterminateFill: lt.t.white,
                        disabledBorder: lt.t.placeholder
                    },
                    toast: {
                        info: lt.t.disabled,
                        error: lt.t.sell,
                        warning: lt.primary,
                        success: lt.buy,
                        title: lt.t.primary,
                        content: lt.t.secondary,
                        tips: lt.primary,
                        bg: lt.modalBg,
                        closeColor: lt.t.third
                    },
                    search: {bg: lt.modalBg, hoverBg: lt.bg3},
                    searchDropdown: {clearIconColor: ce},
                    pureSelect: {bg: lt.modalBg, hoverBg: lt.bg3},
                    alert: {errorBg: "#F9D2E0", warningBg: "#F8EED4", successBg: "#D6EFE4", infoBg: "#DAE6F5"},
                    alertV2: {
                        errorBg: lt.depthSellBg,
                        warningBg: lt.badgeYellowBg,
                        successBg: lt.depthBuyBg,
                        infoBg: "#DAE6F5",
                        successColor: lt.buy,
                        warningColor: lt.primary,
                        errorColor: lt.sell,
                        infoColor: Re,
                        errorFontColor: lt.sell,
                        successFontColor: lt.t.primary,
                        warningFontColor: lt.t.primary,
                        infoFontColor: lt.t.primary
                    },
                    tag: {
                        defaultBg: "#F0B90B30",
                        blueBg: "#4A90E230",
                        blueTxt: "#4A90E2",
                        grayBg: "#B3B5B930",
                        grayTxt: "#B3B5B9",
                        greenBg: "#00C08730",
                        greenTxt: "#00C087",
                        redBg: "#E5037030",
                        redTxt: "#E50370"
                    },
                    dialog: {mask: "rgb(0, 0, 0, 0.5)"},
                    tabs: {flowBg: ke, flowText: me},
                    advanced: {downDropBg: ie},
                    transInputBG: lt.bg3,
                    maskBg: ve,
                    secondary: "#2EBD85",
                    background: "#FAFAFA",
                    accent: "#F23051",
                    muted: "#F5F5F5",
                    negative: "#F23051",
                    success: "#00C087",
                    error: "#F23051",
                    icon: "#848E9C",
                    bg: "#EAECEF",
                    stress: "#F2F2F2",
                    lines: {primary: "#EAECEF", light: "#EAECEF", dark: "#272A2E"},
                    kline: {
                        drawDivider: le,
                        drawIconColor: fe,
                        drawDropDownBg: ie,
                        drawDropDownIconBg: "rgb(231, 235, 238)",
                        drawDropDownActiveBg: se,
                        drawDropDownActiveTextColor: me,
                        annotationToolBorderColor: le,
                        annotationToolBg: ie,
                        annotationToolActiveBg: le,
                        annotationToolLineColor: fe,
                        annotationToolLineActiveColor: me,
                        annotationToolActiveTextColor: Ce,
                        settingPanelBg: ie,
                        drawPanelDownIconBg: se,
                        drawPanelDownIconColor: "#76808F",
                        drawPanelHiddenIconBg: ie,
                        drawPanelHiddenIconBorderColor: "#E6E8EA",
                        drawPanelHiddenIconColor: "#76808F"
                    },
                    modal: {bg: lt.popupBg}
                });
                const ut = a(a({}, oe), {
                    colors: _()(ct, lt),
                    shadows: a(a({}, oe.shadows), {
                        elevation1: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                        elevation2: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                        elevation3: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                    })
                }), dt = _()({}, at, {
                    colors: {
                        bg1: "#0E132B",
                        bg2: "#1A1F36",
                        bg3: "#252A3F",
                        bg4: "#6E7180",
                        bg5: "#F3F3F4",
                        bg6: "#CFD0D5",
                        modalBg: "#0E132B",
                        popupBg: "#1A1F36",
                        line: "#3E4255",
                        alertBg: "#0B2032",
                        badgeBg: "#1E6169",
                        outlineHover: "#41D7CE",
                        primaryHover: "#AAEDE9",
                        primary: "#41D7CE",
                        toastFailBg: "#2C1018",
                        depthSellBg: "#2C1018",
                        sellHover: "#FF99A0",
                        toastSuccessBg: "#0B3528",
                        depthBuyBg: "#0B3528",
                        buyHover: "#82E5C6",
                        SecondaryToastbg: "#1F0D26",
                        SecondaryHover: "#A47FB2",
                        t: {
                            white: "#FFFFFF",
                            primary: "#F3F3F4",
                            disabled: "#565A6B",
                            third: "#6E7180",
                            secondary: "#CFD0D5",
                            yellow: "#3AC1B9",
                            mainColor: "#3AC1B9",
                            toast: "#AAEDE9",
                            sell: "#F6465D",
                            buy: "#2AC797"
                        }
                    }, text: {
                        extraHeadline: {fontWeight: "bold", fontSize: "56px", lineHeight: "64px"},
                        headline1: {fontWeight: "bold", fontSize: "48px", lineHeight: "56px"},
                        headline2: {fontWeight: "bold", fontSize: "40px", lineHeight: "48px"},
                        headline3: {fontWeight: "bold", fontSize: "32px", lineHeight: "40px"},
                        headline4: {fontWeight: "bold", fontSize: "28px", lineHeight: "36px"},
                        headline5: {fontWeight: "bold", fontSize: "24px", lineHeight: "32px"},
                        headline6: {fontWeight: "medium", fontSize: "20px", lineHeight: "28px"},
                        largeBody: {fontWeight: "normal", fontSize: "20px", lineHeight: "28px"},
                        subtitle1: {fontWeight: "medium", fontSize: "16px", lineHeight: "24px"},
                        subtitle2: {fontWeight: "medium", fontSize: "14px", lineHeight: "20px"},
                        body1: {fontWeight: "normal", fontSize: "16px", lineHeight: "24px"},
                        body2: {fontWeight: "normal", fontSize: "14px", lineHeight: "20px"},
                        captionSub: {fontWeight: "medium", fontSize: "12px", lineHeight: "16px"},
                        caption: {fontWeight: "normal", fontSize: "12px", lineHeight: "16px"},
                        largeLink: {
                            fontWeight: "bold",
                            fontSize: "20px",
                            lineHeight: "28px",
                            textDecoration: "underline"
                        },
                        linkBody: {
                            fontWeight: "medium",
                            fontSize: "14px",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        addressLink: {
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkCaption: {
                            fontWeight: "medium",
                            fontSize: "12px",
                            lineHeight: "16px",
                            textDecoration: "underline"
                        }
                    }
                }), pt = _()({}, ut, {
                    colors: {
                        bg1: "#fff",
                        bg2: "#F9F9F9",
                        bg3: "#F3F3F3",
                        bg4: "#6E7180",
                        bg5: "#1A1F36",
                        bg6: "#3E4255",
                        modalBg: "#fff",
                        popupBg: "#fff",
                        line: "#E7E7EA",
                        alertBg: "#E3F9F8",
                        badgeBg: "#AAEDE9",
                        outlineHover: "#41D7CE",
                        primaryHover: "#1E6169",
                        primary: "#41D7CE",
                        toastFailBg: "#FEF1F2",
                        depthSellBg: "#FEF1F2",
                        sellHover: "#A81E3A",
                        toastSuccessBg: "#E3F9F2",
                        depthBuyBg: "#E3F9F2",
                        buyHover: "#1C8666",
                        SecondaryToastbg: "#F4EAF8",
                        SecondaryHover: "#3E194C",
                        t: {
                            white: "#FFFFFF",
                            primary: "#1A1F36",
                            disabled: "#B7B8BF",
                            third: "#6E7180",
                            secondary: "#3E4255",
                            yellow: "#2C9191",
                            mainColor: "#2C9191",
                            toast: "#1E6169",
                            sell: "#F6465D",
                            buy: "#2AC797"
                        }
                    }, text: {
                        extraHeadline: {fontWeight: "bold", fontSize: "56px", lineHeight: "64px"},
                        headline1: {fontWeight: "bold", fontSize: "48px", lineHeight: "56px"},
                        headline2: {fontWeight: "bold", fontSize: "40px", lineHeight: "48px"},
                        headline3: {fontWeight: "bold", fontSize: "32px", lineHeight: "40px"},
                        headline4: {fontWeight: "bold", fontSize: "28px", lineHeight: "36px"},
                        headline5: {fontWeight: "bold", fontSize: "24px", lineHeight: "32px"},
                        headline6: {fontWeight: "medium", fontSize: "20px", lineHeight: "28px"},
                        largeBody: {fontWeight: "normal", fontSize: "20px", lineHeight: "28px"},
                        subtitle1: {fontWeight: "medium", fontSize: "16px", lineHeight: "24px"},
                        subtitle2: {fontWeight: "medium", fontSize: "14px", lineHeight: "20px"},
                        body1: {fontWeight: "normal", fontSize: "16px", lineHeight: "24px"},
                        body2: {fontWeight: "normal", fontSize: "14px", lineHeight: "20px"},
                        captionSub: {fontWeight: "medium", fontSize: "12px", lineHeight: "16px"},
                        caption: {fontWeight: "normal", fontSize: "12px", lineHeight: "16px"},
                        largeLink: {
                            fontWeight: "bold",
                            fontSize: "20px",
                            lineHeight: "28px",
                            textDecoration: "underline"
                        },
                        linkBody: {
                            fontWeight: "medium",
                            fontSize: "14px",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        addressLink: {
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkCaption: {
                            fontWeight: "medium",
                            fontSize: "12px",
                            lineHeight: "16px",
                            textDecoration: "underline"
                        }
                    }
                });
                const ft = i().memo((function (e) {
                    var t = e.type, r = void 0 === t ? "inherit" : t, n = e.children, o = y().websiteType;
                    switch ([void 0 === o ? "base" : o, r].join("-")) {
                        case"base-dark":
                            return i().createElement(T, {theme: at, children: n});
                        case"base-light":
                            return i().createElement(T, {theme: ut, children: n});
                        case"sg-dark":
                            return i().createElement(T, {theme: dt, children: n});
                        case"sg-light":
                            return i().createElement(T, {theme: pt, children: n});
                        default:
                            return n
                    }
                }));
                r("sZZk");
                var gt = "undefined" === typeof window, ht = gt && "FEDERATION" === "{}".MODULE_TYPE,
                    bt = !gt && window.__RUN_BY_ELECTRON__,
                    mt = "undefined" !== typeof window ? o.useLayoutEffect : o.useEffect, vt = function () {
                        var e = (0, o.useState)(!1), t = e[0], r = e[1];
                        return mt((function () {
                            r("undefined" !== typeof window)
                        }), []), t
                    };
                !function () {
                    if (gt) return "";
                    var e = window.navigator.userAgent;
                    /android/i.test(e) || /ipad|iphone|ipod/i.test(e)
                }();
                var yt = function () {
                };
                const xt = i().memo((function (e) {
                    return (0, o.useEffect)((function () {
                        var t, r;
                        (t = e.url, r = {async: !0}, "undefined" === typeof window ? Promise.resolve() : new Promise((function (e, n) {
                            var o = document.body.querySelectorAll("script[src]");
                            if ([].slice.call(o).some((function (e) {
                                return e.src === t
                            }))) e(); else {
                                var i = document.createElement("script");
                                i.setAttribute("data-ot-ignore", "true"), i.setAttribute("class", "optanon-category-C0001"), Object.keys(r).forEach((function (e) {
                                    return i.setAttribute(e, r[e])
                                })), i.src = t, i.addEventListener("load", (function () {
                                    return e()
                                })), i.addEventListener("error", (function () {
                                    return n()
                                })), document.body.appendChild(i)
                            }
                        }))).then(e.onLoad || yt).catch(e.onError || yt)
                    }), []), null
                }));
                const wt = i().memo((function (e) {
                    var t = e.staticUrl, r = e.path, n = e.onReady, o = vt(), a = [t, r].join(""), s = function (e, t) {
                        var r = this, n = null;
                        return function () {
                            for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                            null === n && (n = setTimeout((function () {
                                e.apply(r, o), n = null
                            }), t))
                        }
                    }((function () {
                        return n(!0)
                    }), 100 / 6);
                    return o ? i().createElement(xt, {url: a, onLoad: s}) : null
                }));
                var St = function (e, t) {
                    return void 0 === t && (t = ""), e.map((function (e, t) {
                        return (t > 0 ? [e.slice(0, 1).toUpperCase(), e.slice(1)] : [e]).filter(Boolean).join("")
                    })).join(t)
                };
                var kt = (0, o.forwardRef)((function (e, t) {
                    return i().createElement(d, a({ref: t, "data-bn-type": "text", tx: "text"}, e))
                }));
                kt.displayName = "Text";
                const Ct = kt, Bt = {
                    type: "object",
                    title: "logo area configuration",
                    properties: {
                        logoInfo: {
                            type: "object",
                            title: "logo info",
                            properties: {
                                name: {title: "name", type: "string"},
                                width: {title: "width", type: "number"},
                                height: {title: "height", type: "number"},
                                link: {title: "link", type: "string"}
                            }
                        },
                        enabled: {title: "enabled Logo", type: "boolean"},
                        description: {title: "description", type: "string"},
                        contactEmail: {title: "contact email", type: "string"}
                    }
                };
                var At = function (e) {
                    var t = e.flex, r = e.config || {}, n = r.enabled, a = r.description, s = r.contactEmail,
                        l = r.logoInfo, c = void 0 === l ? {} : l, u = c.name, p = c.link, g = c.height, h = c.width,
                        b = Ai(), m = b.locale, v = b.replaceUrl, y = /cn$/i.test(m);
                    u = u || (y ? "h-binancecn" : "h-binanceen"), h = h || (y ? 95 : 180), g = g || 36, p = p || "https://www.%suffixOrigin%/%locale%";
                    var x = null;
                    x = (0, o.isValidElement)(u) ? u : i().createElement(Ei, {
                        name: u,
                        sx: {width: h, height: g},
                        prefix: "icon"
                    });
                    var w = a || s;
                    return n ? i().createElement(d, {
                        __css: {flex: t, pr: "md", fontSize: 1, alignItems: "center"},
                        sx: {py: ["md", "md", "sm"], display: ["block", "flex", "block"]}
                    }, i().createElement(d, {
                        as: "a",
                        sx: {display: "inline-flex", mr: "sm"},
                        href: v(p),
                        children: x
                    }), i().createElement(d, {
                        width: [1, "auto", 3 / 4],
                        sx: {mt: w ? ["xs", 0, "md"] : 0}
                    }, i().createElement(Ct, {
                        sx: {color: "t.third"},
                        children: a
                    }), s ? i().createElement(f, {
                        sx: {
                            alignItems: "center",
                            color: "t.third"
                        }
                    }, i().createElement(Ei, {
                        name: "mail-f",
                        size: 20,
                        sx: {mr: "minor"}
                    }), i().createElement(Ct, {sx: {textDecoration: "underline"}, children: s})) : null)) : null
                };
                At.schema = {type: "object", title: "Footer Logo Area", properties: {config: Bt}};
                const Et = i().memo(At);
                var Tt = i().createContext({}), Ot = i().memo((function (e) {
                    var t, r, n = e || {}, i = n.item, a = n.isLoggedIn, s = n.elType, l = n.isJulia, c = n.userInfo,
                        u = n.locale, d = i ? i.menuItem || i : {}, p = d.langOnly, f = void 0 === p ? "" : p,
                        g = d.needLogin, h = d.needLogout, b = d.validate, m = f ? f.split(",") : [];
                    return !0 === g && !a || !0 === h && !0 === a || b && (r = b, !(t = c) || !t[r]) || u && m.length && -1 === m.indexOf(u) ? null : (0, o.createElement)(s, l ? {config: i} : i)
                })), _t = (i().forwardRef((function (e, t) {
                    var r = e.list, n = e.locale, s = e.elType, l = e.isJulia, c = e.boxProps,
                        u = (0, o.useContext)(Tt), p = u.userInfo, f = (u.userLoginStatus || {}).isLoggedIn;
                    return r && r.length ? i().createElement(d, a({}, c, {ref: t}), r.map((function (e, t) {
                        return i().createElement(Ot, {
                            key: t,
                            item: e,
                            elType: s,
                            locale: n,
                            isJulia: l,
                            isLoggedIn: f,
                            userInfo: p
                        })
                    })), e.suffixNode) : null
                })), i().forwardRef((function (e, t) {
                    var r = e.list, n = e.boxProps, o = s(e, ["list", "boxProps"]);
                    return r && r.length ? i().createElement(d, a({}, n, {ref: t}), r.map((function (e, t) {
                        return i().createElement(Ot, a({key: t, item: e}, o))
                    })), e.suffixNode) : null
                })));
                const Rt = {
                    type: "object",
                    title: "footer menu config",
                    properties: {
                        title: {type: "string", title: "title"},
                        list: {
                            type: "array",
                            title: "menu list configuration",
                            items: {
                                type: "object",
                                properties: {
                                    link: {type: "string", title: "link"},
                                    title: {type: "string", title: "title"},
                                    suffix: {type: "string", title: "suffix"},
                                    needLogin: {type: "boolean", title: "needLogin"},
                                    needLogout: {type: "boolean", title: "needLogout"},
                                    hideElement: {type: "boolean", title: "hideElement"},
                                    langOnly: {type: "string", title: "langOnly ,split"}
                                }
                            }
                        }
                    }
                }, It = {type: "array", title: "menu item", items: Rt};
                var jt = !("undefined" === typeof window || !window.document), zt = function (e) {
                    return -1 === [void 0, null, ""].indexOf(e)
                };

                function Pt(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch (N) {
                        return e
                    }
                }

                var Ft = function (e) {
                    return ((jt ? document : e || {}).cookie || "").split(";").reduce((function (e, t) {
                        var r = (t || "").trim(), n = r.indexOf("=");
                        if (n > 0) {
                            var o = r.slice(0, n).trim(), i = r.slice(++n).trim();
                            e[o] = Pt('"' === i[0] ? i.slice(1, -1) : i)
                        }
                        return e
                    }), {})
                };

                function Lt(e, t, r, n) {
                    if (void 0 === r && (r = 365), void 0 === n && (n = !0), jt && zt(e)) {
                        var o = ["path=/"];
                        n && o.unshift("Domain=" + function () {
                            var e = window.location.hostname, t = e.split(".");
                            return t.length > 2 ? t.slice(-2).join(".") : e
                        }()), Number.isNaN(+r) || o.unshift("Max-Age=" + Math.floor(86400 * r)), o.unshift(e + "=" + encodeURIComponent(t)), document.cookie = o.join("; ")
                    }
                }

                var Dt = {
                    parse: Ft, read: function (e, t) {
                        if (zt(e)) for (var r = (e + "=").trim(), n = ((jt ? document : t || {}).cookie || "").split(";"), o = 0; o < n.length; o++) {
                            var i = (n[o] || "").trim();
                            if (0 === i.indexOf(r)) {
                                var a = i.slice(r.length).trim();
                                return Pt('"' === a[0] ? a.slice(1, -1) : a)
                            }
                        }
                        return null
                    }, readAsList: function (e, t) {
                        var r = [];
                        if (zt(e)) for (var n = (e + "=").trim(), o = ((jt ? document : t || {}).cookie || "").split(";"), i = 0; i < o.length; i++) {
                            var a = (o[i] || "").trim();
                            if (0 === a.indexOf(n)) {
                                var s = a.slice(n.length).trim();
                                r.push(Pt('"' === s[0] ? s.slice(1, -1) : s))
                            }
                        }
                        return r
                    }, matchRead: function (e, t) {
                        var r = Ft(t);
                        return e.reduce((function (e, t) {
                            var n = t.key, o = t.matches;
                            if (zt(n)) {
                                var i = r[n];
                                e[n] = o ? o(i) : i
                            }
                            return e
                        }), {})
                    }, write: Lt, erase: function (e) {
                        return Lt(e, "", -1)
                    }, _update: function () {
                        return !1
                    }, writeCookieWithDomain: Lt, writeCookieWithDomainLevel: Lt
                };
                const Ht = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/,
                    Mt = (e, t, r) => Object.defineProperty(e, t, {value: r}), Nt = e => {
                        if ("string" !== typeof e) throw new TypeError("agent must be a string");
                        const t = e.match(Ht), r = Object.create({isHybrid: !1});
                        if (t) {
                            const e = t[1];
                            Mt(r, "bridgeVersion", e), Mt(r, "clientType", t[2]), Mt(r, "clientVersion", t[3]), Mt(r, "isHybrid", !!e)
                        }
                        return r
                    };
                let Wt, Ut;
                const Gt = () => Ut || ("undefined" !== typeof navigator ? navigator.userAgent : "");

                function Vt(e) {
                    return 0 === arguments.length ? Wt || (Wt = Nt(Gt())) : Nt(e)
                }

                var $t = r("MN/D"), Xt = r.n($t), qt = r("uivU"), Yt = "__BINANCE_USER_DEVICE_ID__", Jt = "unknown",
                    Qt = function (e, t, r, n) {
                        if (void 0 === r && (r = 365), void 0 === n && (n = !0), "undefined" !== typeof document) {
                            var o, i = new Date;
                            r ? (i.setTime(i.getTime() + 24 * r * 60 * 60 * 1e3), o = "; expires=" + i.toGMTString()) : o = "";
                            var a = n ? "; domain=" + function () {
                                var e = window.location.hostname.split(".");
                                return e[0] = "", e.join(".")
                            }() : "";
                            document.cookie = e + "=" + t + o + a + "; path=/; secure=true;"
                        }
                    }, Zt = function (e) {
                        if (!e) return e;
                        try {
                            return JSON.parse(e)
                        } catch (Ao) {
                            return e
                        }
                    }, Kt = "undefined" !== typeof window, er = {}, tr = function () {
                        return "undefined" !== typeof sessionStorage
                    }, rr = function () {
                        return "undefined" !== typeof localStorage
                    }, nr = function (e, t, r) {
                        if (void 0 === r && (r = {}), rr()) return r.ttl ? localStorage.setItem(e, JSON.stringify({
                            value: t,
                            expire: (new Date).getTime() + r.ttl
                        })) : localStorage.setItem(e, t)
                    }, or = function (e) {
                        if (rr()) {
                            var t = localStorage.getItem(e), r = Zt(t) || {};
                            return r.expire ? r.expire && r.expire > (new Date).getTime() ? r.value : null : t
                        }
                    }, ir = function (e) {
                        if (Kt) {
                            var t = Yt, r = JSON.stringify(e);
                            !function (e) {
                                Qt(e, "", -1, !1)
                            }(t), Qt(t, r, 9999), rr() && nr(t, r), tr() && sessionStorage.setItem(t, r), er[Yt] = r
                        }
                    }, ar = function () {
                        if (!Kt) return {};
                        var e = Yt, t = null;
                        t || (t = er[Yt]), document.cookie && (t = function (e, t) {
                            for (var r = (void 0 === t ? {} : t).cookie, n = e + "=", o = ("undefined" === typeof document ? void 0 === r ? "" : r : document.cookie).split(";"), i = 0; i < o.length; i++) {
                                for (var a = o[i]; " " === a.charAt(0);) a = a.substring(1, a.length);
                                if (0 === a.indexOf(n)) return a.substring(n.length, a.length)
                            }
                            return null
                        }(e)), !t && rr() && (t = or(e) || null), !t && tr() && (t = sessionStorage.getItem(e) || null);
                        var r = Zt(t) || {};
                        return t && ir(r), r
                    }, sr = function () {
                        return ar()
                    }, lr = function (e, t) {
                        void 0 === t && (t = {});
                        var r = Object.assign({}, t);
                        if (Kt) {
                            r.device_id = function (e) {
                                if (!e) return "";
                                var t = sr()[Xt()(e)];
                                return t && t.value || ""
                            }(e);
                            var n = Xt()(e || ""), o = sr(), i = Object.keys(o).filter((function (e) {
                                return e !== n
                            }));
                            r.related_device_ids = i.map((function (e) {
                                return o[e].value
                            })).join(",")
                        }
                        return qt.Base64.encode(JSON.stringify(r))
                    }, cr = r("3as9"), ur = r("4TZb"), dr = r.n(ur), pr = {
                        colorDepth: !0,
                        deviceMemory: !0,
                        pixelRatio: !0,
                        hardwareConcurrency: !0,
                        sessionStorage: !0,
                        localStorage: !0,
                        indexedDb: !0,
                        addBehavior: !0,
                        openDatabase: !0,
                        cpuClass: !0,
                        doNotTrack: !0,
                        adBlock: !0,
                        hasLiedLanguages: !0,
                        hasLiedResolution: !0,
                        hasLiedOs: !0,
                        hasLiedBrowser: !0,
                        touchSupport: !0,
                        fonts: !0,
                        fontsFlash: !0,
                        enumerateDevices: !0
                    }, fr = (new cr.UAParser).getResult(), gr = Jt, hr = function () {
                        var e = fr.os;
                        return e && e.name ? e.name + " " + e.version : gr
                    }, br = function () {
                        var e = fr.device;
                        return e && e.model ? [e.type, e.vendor, e.model, ""].join(" ") : gr
                    }, mr = function () {
                        var e = fr.browser, t = fr.os || {};
                        return e && e.name ? e.name + " V" + e.version + " (" + (t.name || "") + ")" : gr
                    }, vr = function () {
                        var e = (new Date).getTimezoneOffset(), t = -Math.floor(e / 60);
                        return t > 0 && (t = "+" + t), "GMT" + t
                    }, yr = function (e) {
                        var t = e[1].replace("canvas fp:data:image/png;base64,", "");
                        try {
                            return function (e) {
                                var t, r, n, o = "";
                                for (t = 0, r = (e += "").length; t < r; t++) o += (n = e.charCodeAt(t).toString(16)).length < 2 ? "0" + n : n;
                                return o
                            }(atob(t).slice(-16, -12))
                        } catch (Ao) {
                            return console.warn("Failed to get canvas code: ", Ao), Jt
                        }
                    }, xr = function (e) {
                        var t = e.plugins || e.regular_plugins || e.ie_plugins;
                        if (!Array.isArray(t)) return Jt;
                        var r = [];
                        return t.forEach((function (e) {
                            r.push(e[0])
                        })), r.length > 500 ? r.slice(0, 500).join(",") : r.join(",")
                    };
                const wr = function () {
                    return l(void 0, void 0, void 0, (function () {
                        var e, t, r, n, o;
                        return c(this, (function (i) {
                            switch (i.label) {
                                case 0:
                                    if (!Kt) return [2, Promise.resolve({})];
                                    if (e = "__BNC_FP_INFO__", t = a({}, pr), r = Zt(or(e))) return [2, r];
                                    n = function () {
                                        return l(void 0, void 0, void 0, (function () {
                                            var r, n, o, i, a, s;
                                            return c(this, (function (l) {
                                                switch (l.label) {
                                                    case 0:
                                                        return [4, dr().getPromise({excludes: t})];
                                                    case 1:
                                                        return r = l.sent(), n = r.reduce((function (e, t) {
                                                            return e[t.key] = t.value, e
                                                        }), {}), o = function (e) {
                                                            var t = {vendor: Jt, renderer: Jt};
                                                            if (!e || !e.length) return t;
                                                            for (var r = e.length, n = 0, o = 0; o < r; o++) {
                                                                var i = e[o] || "";
                                                                if (i.indexOf("webgl unmasked vendor:") > -1 ? (t.vendor = i.split("webgl unmasked vendor:")[1] || Jt, n += 1) : i.indexOf("webgl unmasked renderer:") > -1 && (t.renderer = i.split("webgl unmasked renderer:")[1] || Jt, n += 1), 2 === n) break
                                                            }
                                                            return t
                                                        }(n.webgl), i = function (e) {
                                                            var t = {screenResolution: Jt, avaScreenResolution: Jt};
                                                            return e.screenResolution && Array.isArray(e.availableScreenResolution) && (t.screenResolution = e.screenResolution.join(",")), e.availableScreenResolution && Array.isArray(e.availableScreenResolution) && (t.avaScreenResolution = e.availableScreenResolution.join(",")), t
                                                        }(n), a = {
                                                            screen_resolution: i.screenResolution,
                                                            available_screen_resolution: i.avaScreenResolution,
                                                            system_version: hr(),
                                                            brand_model: br(),
                                                            system_lang: n.language,
                                                            timezone: vr(),
                                                            timezoneOffset: n.timezoneOffset,
                                                            user_agent: n.userAgent,
                                                            list_plugin: xr(n),
                                                            canvas_code: yr(n.canvas),
                                                            webgl_vendor: o.vendor,
                                                            webgl_renderer: o.renderer,
                                                            audio: n.audio,
                                                            platform: n.platform,
                                                            web_timezone: n.timezone,
                                                            device_name: mr()
                                                        }, s = Object.keys(a).sort().map((function (e) {
                                                            return a[e]
                                                        })), a.fingerprint = dr().x64hash128(s.join(""), 32), localStorage.removeItem("__BNC_FP_INFO__0093cf"), nr(e, JSON.stringify(a), {ttl: 864e5}), [2, a]
                                                }
                                            }))
                                        }))
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, n()];
                                case 2:
                                    return [2, i.sent()];
                                case 3:
                                    return o = i.sent(), console.error("Fingerprint error: ", o), [3, 4];
                                case 4:
                                    return [2, Promise.resolve({})]
                            }
                        }))
                    }))
                };
                var Sr = {}, kr = function (e) {
                    return l(void 0, void 0, void 0, (function () {
                        var t;
                        return c(this, (function (r) {
                            switch (r.label) {
                                case 0:
                                    return t = !Object.keys(Sr).length, Kt && t ? [4, wr()] : [3, 2];
                                case 1:
                                    Sr = r.sent(), r.label = 2;
                                case 2:
                                    return [2, lr(e, Sr)]
                            }
                        }))
                    }))
                };
                kr();
                var Cr = "";
                var Br, Ar = r("WOT1"), Er = r.n(Ar), Tr = r("Kttv"), Or = r.n(Tr), _r = new Uint8Array(16);

                function Rr() {
                    if (!Br && !(Br = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return Br(_r)
                }

                const Ir = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
                const jr = function (e) {
                    return "string" === typeof e && Ir.test(e)
                };
                for (var zr = [], Pr = 0; Pr < 256; ++Pr) zr.push((Pr + 256).toString(16).substr(1));
                const Fr = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = (zr[e[t + 0]] + zr[e[t + 1]] + zr[e[t + 2]] + zr[e[t + 3]] + "-" + zr[e[t + 4]] + zr[e[t + 5]] + "-" + zr[e[t + 6]] + zr[e[t + 7]] + "-" + zr[e[t + 8]] + zr[e[t + 9]] + "-" + zr[e[t + 10]] + zr[e[t + 11]] + zr[e[t + 12]] + zr[e[t + 13]] + zr[e[t + 14]] + zr[e[t + 15]]).toLowerCase();
                    if (!jr(r)) throw TypeError("Stringified UUID is invalid");
                    return r
                };
                const Lr = function (e, t, r) {
                    var n = (e = e || {}).random || (e.rng || Rr)();
                    if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
                        r = r || 0;
                        for (var o = 0; o < 16; ++o) t[r + o] = n[o];
                        return t
                    }
                    return Fr(n)
                };
                Er()().fetch, Vt().isHybrid;
                var Dr = "_acc_org", Hr = !1;

                function Mr(e) {
                    return e && +new Date - e < 432e5
                }

                function Nr(e) {
                    e = Gr(e), window._ACCELERATE_ORIGIN = e
                }

                function Wr(e) {
                    var t = {t: +new Date};
                    e && (e = Gr(e), t.o = e);
                    var r = Ur(), n = r.r;
                    Mr(r.t) && n && (t.r = n), window.localStorage.setItem(Dr, JSON.stringify(t))
                }

                function Ur() {
                    return JSON.parse(window.localStorage.getItem(Dr) || "{}")
                }

                function Gr(e) {
                    return e ? /^https?:/.test(e) ? e : "https://" + e : e
                }

                const {fetch: Vr} = Er()(), $r = ({title: e}, t) => {
                    document.title = e, t()
                }, Xr = ({url: e, method: t, body: r, headers: n, credentials: o = "same-origin"}, i) => {
                    const a = {method: t = t.toUpperCase(), headers: n, credentials: o};
                    "GET" !== t && "HEAD" !== t && (a.body = r), Vr(e, a).then((e => {
                        i({response: e})
                    })).catch((e => {
                        i({error: e})
                    }))
                }, qr = e => {
                    if (e) return JSON.parse(e)
                };
                const Yr = (e, t) => void 0 === t ? e() : e(t);

                class Jr {
                    constructor() {
                        this._callbacks = Object.create(null), this._handlers = Object.create(null), this._nonce = function (e, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
                            let r = "";
                            for (let n = 0; n < e; n++) r += t.charAt(Math.floor(Math.random() * t.length));
                            return r
                        }(10), this._uuid = 0, this._setup()
                    }

                    _getCallbackId(e) {
                        const t = `${this._nonce}_${this._uuid++}`;
                        return this._callbacks[t] = e, t
                    }

                    _receiveCallback(e, t) {
                        const r = this._callbacks[e];
                        r && (delete this._callbacks[e], Yr(r, t))
                    }

                    _receiveEvent(e, t) {
                        const r = this._handlers[e];
                        r && Yr(r, t)
                    }

                    invoke(e, t = {}) {
                        return new Promise((r => {
                            const n = this._getCallbackId(r);
                            this._send(e, t, n)
                        }))
                    }

                    handler(e, t) {
                        this._handlers[e] = t
                    }

                    ready() {
                        this._ready()
                    }
                }

                const Qr = e => () => {
                    throw new Error(`[bridge-core] ${e} must be implemented`)
                };
                Object.assign(Jr.prototype, {_setup: Qr("_setup"), _send: Qr("_send"), _ready: Qr("_ready")});

                class Zr {
                    constructor() {
                        this._adapters = [], this._default = null
                    }

                    register({test: e, adapter: t}) {
                        return this._adapters.push({test: e, adapter: t}), this
                    }

                    default(e) {
                        return this._default = e, this
                    }

                    create(e, t) {
                        const r = Vt(t);
                        let n = this._default;
                        this._adapters.some((({test: e, adapter: t}) => !!e(r) && (n = t, !0)));
                        return e(new (n(Jr)), r)
                    }
                }

                function Kr(e) {
                    const t = [], r = {
                        $push(e) {
                            t.push(e)
                        }
                    };
                    return Object.keys(e).forEach((n => {
                        const o = e[n];
                        r[n] = "function" === typeof o ? (...e) => {
                            for (let r = 0; r < t.length; r++) o.apply(t[r], e)
                        } : o
                    })), r
                }

                const en = e => class extends e {
                        _setup() {
                            window.BardApp || (window.BardApp = Kr({
                                callbackFromNative(e, t, r) {
                                    "undefined" !== typeof window && window._BNC_BRIDGE_DEBUG_ && console.log(`[callbackFromNative] ${r} (callbackId: ${e})`), this._receiveCallback(e, qr(r))
                                }, eventFromNative(e, t) {
                                    "undefined" !== typeof window && window._BNC_BRIDGE_DEBUG_ && console.log(`[eventFromNative] eventType:${e} (data: ${t})`), this._receiveEvent(e, qr(t))
                                }
                            })), window.BardApp.$push(this)
                        }

                        _send(e, t, r) {
                            window.BardMagicalJourney.messageSend(e, r, JSON.stringify(t))
                        }

                        _ready() {
                            window.BardMagicalJourney.bridgeReady()
                        }
                    }, tn = "undefined" !== typeof window && window.webkit && window.webkit.messageHandlers || {},
                    rn = (e, t = {}) => {
                        tn[e] && tn[e].postMessage(t)
                    }, nn = e => class extends e {
                        _setup() {
                            window.BNCBridge || (window.BNCBridge = Kr({
                                receive(e) {
                                    const {callbackId: t, eventType: r, data: n} = qr(e);
                                    "undefined" !== typeof window && window._BNC_BRIDGE_DEBUG_ && console.log(`[receive] ${e}`), t ? this._receiveCallback(t, n) : r && this._receiveEvent(r, n)
                                }
                            })), window.BNCBridge.$push(this)
                        }

                        _send(e, t, r) {
                            rn(e, {data: JSON.stringify(t), callbackId: r})
                        }

                        _ready() {
                            rn("bridgeReady")
                        }
                    }, on = e => class extends e {
                        _setup() {
                        }

                        _send() {
                        }

                        _ready() {
                        }
                    };
                const an = class {
                    constructor() {
                        this._methods = Object.create(null)
                    }

                    add(e, t) {
                        return this._methods[e] = t, this
                    }

                    _send(e, t, r) {
                        const n = this._methods[e];
                        if (!n) return console.error(`[bridge-core] bridge.${e} is not defined`);
                        n(t, (e => {
                            this._receiveCallback(r, e)
                        }))
                    }

                    create(e) {
                        const t = this;
                        return r => ({
                            [e]: class extends r {
                                _setup() {
                                    t._bridge || (t._bridge = Kr({
                                        receiveCallback(...e) {
                                            this._receiveCallback(...e)
                                        }, receiveEvent(...e) {
                                            this._receiveEvent(...e)
                                        }
                                    })), t._receiveCallback = t._bridge.receiveCallback, "undefined" !== typeof window && (window.BridgeReceiveEvent = t._bridge.receiveEvent), t._bridge.$push(this)
                                }

                                _send(e, r, n) {
                                    t._send(e, r, n)
                                }

                                _ready() {
                                }
                            }
                        }[e])
                    }
                }, sn = (e, t) => "LT" === function (e, t) {
                    return function (e, t) {
                        if (e.join(".") === t.join(".")) return "EQ";
                        for (let r = 0; r < e.length; r++) {
                            switch (ln(e[r], t[r])) {
                                case"EQ":
                                    continue;
                                case"GT":
                                    return "GT";
                                case"LT":
                                    return "LT"
                            }
                        }
                    }(cn(e), cn(t))
                }(e, t);

                function ln(e, t) {
                    return e === t ? "EQ" : e > t ? "GT" : "LT"
                }

                function cn(e) {
                    return e.replace(/-alpha/g, "").split(".").map(Number)
                }

                const {isHybrid: un, clientType: dn, bridgeVersion: pn} = Vt(), fn = e => {
                    const t = Object.create(null);
                    t.back = (t = 1) => e.invoke("back", {amount: t}), t.setTitle = t => e.invoke("setTitle", {title: t}), t.broadcast = t => e.invoke("broadcast", {data: t}), t.toast = t => e.invoke("toast", {text: t}), t.open = t => {
                        void 0 === t.withNavigationBar && (t.withNavigationBar = !0), e.invoke("open", t)
                    };
                    ["notExistBridge", "stopLoading", "ensureLogged", "isLogged", "getUserInfo", "getDiagnosticInfo", "getAppConfig"].forEach((r => {
                        t[r] = () => e.invoke(r)
                    })), ["alert", "addDebitCard", "verifyDebitCard", "face", "getImage", "jumio", "captchaResult", "kycVender"].forEach((r => {
                        t[r] = t => e.invoke(r, t)
                    }));
                    const r = Object.create(null), n = e => {
                        r[e] = Object.create({listened: !1, events: []})
                    };
                    n("back"), n("broadcast"), n("theme-change");
                    const o = (e, t) => {
                        const r = e.indexOf(t);
                        ~r && ((e, t) => {
                            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                            e.pop()
                        })(e, r)
                    }, i = (t, n, i) => {
                        const a = r[t];
                        if (!a) return;
                        const {events: s} = a;
                        a.listened || (a.listened = !0, e.handler(t, (e => {
                            ((e, t) => {
                                const r = new Array(t);
                                for (let n = 0; n < t; ++n) r[n] = e[n];
                                return r
                            })(s, s.length).forEach((t => t(e)))
                        }))), s.push(i ? ((e, t) => {
                            const r = (...n) => {
                                o(e, r), t(...n)
                            };
                            return r
                        })(s, n) : n)
                    };
                    return t.on = (e, t) => i(e, t), t.once = (e, t) => i(e, t, !0), t.off = function (e, t) {
                        const n = r[e];
                        if (!n) return;
                        const {events: i} = n;
                        1 !== arguments.length ? o(i, t) : i.length = 0
                    }, t.fetch = (t, {
                        method: r = "GET",
                        body: n = "",
                        headers: o = {},
                        credentials: i
                    } = {}) => e.invoke("fetch", {
                        url: t,
                        method: r,
                        body: n,
                        headers: o,
                        credentials: i
                    }).then((({error: e, response: r}) => {
                        if (!un) return e ? Promise.reject(e) : Promise.resolve(r);
                        if (e) {
                            const t = new TypeError("Failed to fetch");
                            switch (typeof e) {
                                case"object":
                                    Object.assign(t, e);
                                    break;
                                case"string":
                                    t.message = e
                            }
                            throw t
                        }
                        const {status: n, headers: o, body: i, statusText: a = ""} = r, s = {};
                        Object.keys(o).forEach((e => {
                            const t = o[e];
                            s[e] = "string" === typeof t ? [t] : t
                        }));
                        const l = (e => e >= 200 && e < 300)(n);
                        return {
                            url: t,
                            ok: l,
                            status: n,
                            statusText: a,
                            json: () => new Promise(((e, t) => {
                                try {
                                    e(JSON.parse(i || "{}"))
                                } catch (r) {
                                    t(r)
                                }
                            })),
                            text: () => Promise.resolve(i),
                            headers: s,
                            clone: () => ({
                                url: t, ok: l, status: n, statusText: a, json: () => new Promise(((e, t) => {
                                    try {
                                        e(JSON.parse(i || "{}"))
                                    } catch (r) {
                                        t(r)
                                    }
                                })), text: () => Promise.resolve(i), headers: s
                            })
                        }
                    })), t.share = t => {
                        const {type: r, image: n} = t;
                        return "iOS" === dn && "IMAGE" === r && "string" === typeof n && 0 === n.indexOf("data:image") && (t.image = n.split(",")[1] || ""), e.invoke("share", t).then((({result: e = "UNKNOWN"}) => {
                            if ("SUCCESS" === e) return Promise.resolve();
                            {
                                const t = new Error(e);
                                return t.code = e, Promise.reject(t)
                            }
                        }))
                    }, t.setButtons = (t, o) => (o = o.map((e => {
                        const t = `button.${e.type}`;
                        return r[t] || n(t), e.onClick && i(t, e.onClick), t
                    })), e.invoke("setButtons", {buttons: o, position: t})), t.openURWebview = ({
                                                                                                    url: t,
                                                                                                    closePath: r = "/app/bnc/urwebv/close"
                                                                                                }) => e.invoke("openURWebview", {
                        url: t,
                        closePath: r
                    }).then((({
                                  result: e,
                                  callbackUrl: t
                              }) => "SUCCESS" === e ? Promise.resolve({callbackUrl: t}) : Promise.reject({code: e}))), t.isSupportDeeplink = t => !un || sn(pn, "1.8.0") ? Promise.resolve(!1) : e.invoke("isSupportDeeplink", {deeplink: t}).then((({supported: e}) => e)), e.ready(), t
                };
                var gn = r("F63i");
                const hn = ((e = on) => (new Zr).register({
                    test: ({clientType: e}) => "iOS" === e || "MacOS" === e,
                    adapter: nn
                }).register({
                    test: ({clientType: e}) => "Android" === e,
                    adapter: en
                }).default(e).create(fn, function () {
                    const e = "undefined" !== typeof window && "undefined" !== typeof window.document,
                        t = "undefined" !== typeof gn && null != gn.versions && null != gn.versions.node;
                    let r = "";
                    e && (r = window.navigator.userAgent);
                    t && (r = `node ${gn.versions.node}`);
                    return r
                }()))((e => {
                    const t = new an;
                    return Object.keys(e).forEach((r => {
                        t.add(r, e[r])
                    })), t.create("BrowserFakeBridge")
                })(a(a({}, n), {})));
                var bn = {
                    track: function () {
                    },
                    debug: !1,
                    responseInterceptor: function (e) {
                        return e
                    },
                    requestInterceptor: function (e, t) {
                        return [e, t]
                    },
                    resultInterceptor: function (e) {
                        return e
                    },
                    baseUrl: "undefined" !== typeof window ? window.location.origin : "",
                    accelerateOrigin: "",
                    checkAccelerable: function () {
                        return !1
                    },
                    accelerate: {defaultOrigin: "", origins: [], enbleSites: null, checkAccelerable: null},
                    enableSentry: !0,
                    logUrl: "https://frontend-m.binance.cloud/monitor/v1/log",
                    ssrHeaders: {}
                };
                var mn = Er()().fetch, vn = [], yn = Vt().isHybrid, xn = 0, wn = function (e, t) {
                    var r = null;
                    return function () {
                        r || (r = setTimeout((function () {
                            clearTimeout(r), r = null, e()
                        }), t))
                    }
                }((function () {
                    Bn(vn), vn = [], xn = 0
                }), 3e3), Sn = "", kn = function (e) {
                    if (!yn) try {
                        if (jt) {
                            var t = (o = Cn(e)).clienttype, r = o.bncuuid, n = s(o, ["clienttype", "bncuuid"]);
                            bn.track("web_http", a(a({}, n), {wh_clientType: t, bnc_uuid: r})), vn.push(o)
                        } else {
                            if (xn >= 90) return;
                            var o;
                            t = (o = Cn(e)).clienttype, r = o.bncuuid, n = s(o, ["clienttype", "bncuuid"]);
                            bn.track("web_http", a(a({}, n), {wh_clientType: t, bnc_uuid: r})), vn.push(o), ++xn, wn()
                        }
                    } catch (i) {
                    }
                };

                function Cn(e) {
                    var t = e.startTime, r = e.status, n = e.url, o = e.page, i = e.error, a = e.uuid, s = e.bncUuid,
                        l = Date.now(), c = {
                            t: "API",
                            s: r,
                            u: n,
                            d: l,
                            ct: l - t,
                            clienttype: jt ? "Browser" : "Node",
                            type: i ? "error" : "success",
                            uuid: a,
                            bncuuid: s
                        };
                    return o && (c.p = o), i && (c.errt = function (e) {
                        return !e.code && "string" === typeof e.message && ~e.message.indexOf("JSON") ? "Invalid-Json" : e.name
                    }(i)), c
                }

                function Bn(e) {
                    var t = function () {
                        var e = bn.logUrl, t = "https://dev-frontend-monitor.devfdg.net/monitor/v1/log",
                            r = "devfdg.net";
                        try {
                            return jt && ~window.location.origin.indexOf(r) ? t : e
                        } catch (n) {
                            return e
                        }
                    }();
                    if (e.length) return jt && navigator.sendBeacon ? navigator.sendBeacon(t, JSON.stringify({"data-list": e})) : mn(t, {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({"data-list": e})
                    }).catch((function () {
                    }))
                }

                jt && !yn && window.addEventListener("beforeunload", (function () {
                    if (vn.length) try {
                        Bn(vn), vn = []
                    } catch (e) {
                    }
                }));
                var An = Vt().isHybrid, En = function (e, t) {
                    return l(void 0, void 0, void 0, (function () {
                        return c(this, (function (r) {
                            return [2, hn.fetch(e, t)]
                        }))
                    }))
                }, Tn = jt ? En.bind(window) : En, On = console.log, _n = console.warn, Rn = function () {
                    if (!jt) return "";
                    var e = Dt.read("bnc-uuid");
                    return e || (e = Lr(), Dt.writeCookieWithDomainLevel("bnc-uuid", e, 1825, !0)), e
                }(), In = function (e) {
                    var t = "";
                    jt && (t = window.location.href);
                    try {
                        var r = Sn;
                        jt || (t = e ? "https://" + e.headers.host + e.url : r)
                    } catch (n) {
                    }
                    return t
                }, jn = function () {
                    if (jt) return "";
                    try {
                        return "{}".CDN_REGION
                    } catch (Ao) {
                        return "en"
                    }
                }(), zn = function (e, t) {
                    return l(void 0, void 0, void 0, (function () {
                        var r, n, o, i, s, u, d, p, f, g, h;
                        return c(this, (function (b) {
                            switch (b.label) {
                                case 0:
                                    return r = t.omitHeader, n = t.lang, o = t.headers, i = t.req, s = t.credentials, u = t.request, [4, l(void 0, void 0, void 0, (function () {
                                        var e, t;
                                        return c(this, (function (r) {
                                            switch (r.label) {
                                                case 0:
                                                    return !jt || An ? [2, {}] : (t = {}, e = "device-info", [4, kr((n || Cr).trim().toLowerCase())]);
                                                case 1:
                                                    return [2, (t[e] = r.sent(), t)]
                                            }
                                            var n
                                        }))
                                    }))];
                                case 1:
                                    return d = b.sent(), p = r ? {} : a({
                                        lang: n || jt && (document.location.pathname.split("/").slice(1)[0] || Dt.read("lang")) || "en",
                                        "X-UI-REQUEST-TRACE": e,
                                        "X-TRACE-ID": e,
                                        "BNC-UUID": Rn,
                                        "Content-Type": "application/json"
                                    }, d), !r && jn && (p = Object.assign(p, {"X-CDN-REGION": jn})), r || An || (p = Object.assign(p, {clienttype: "web"})), jt && !An && (p = Object.assign(p, {"FVIDEO-ID": Dt.read("BNC_FV_KEY")})), f = function (e) {
                                        var t;
                                        if (jt) return {};
                                        var r = (null === (t = null === e || void 0 === e ? void 0 : e.headers) || void 0 === t ? void 0 : t.cookie) || null;
                                        return r ? {cookie: r} : {}
                                    }(i), g = function () {
                                        if (jt) return {};
                                        var e = globalThis.ssrHeaders, t = void 0 === e ? {} : e, r = {};
                                        return Object.keys(t).forEach((function (e) {
                                            (/x-gateway-gray/i.test(e) || /x-gray-env/i.test(e) || "k8scluster" === e) && (r[e] = t[e])
                                        })), r
                                    }(), h = In(u || i), [2, {
                                        opts: {
                                            method: "GET",
                                            mode: "cors",
                                            headers: a(a(a(a({}, p), f), o), g),
                                            credentials: s
                                        }, page: h
                                    }]
                            }
                        }))
                    }))
                }, Pn = function (e) {
                    if ("undefined" === typeof window) return e;
                    var t = Dt.read("cr00");
                    return e.headers = e.headers || {}, e.headers.csrftoken || (e.headers.csrftoken = Or()(t || "")), e
                }, Fn = function (e) {
                    var t, r, n = bn.baseUrl, o = bn.accelerateOrigin, i = bn.checkAccelerable, a = bn.accelerate;
                    if (i = a.checkAccelerable || i, jt) {
                        var s = a.enbleSites;
                        "string" === typeof (o = window._ACCELERATE_ORIGIN || a.defaultOrigin || o) && (o = (r = o) ? /^https?:/.test(r) ? r : "https://" + r : r), s && (t = s, "[object Array]" === Hn.call(t)) && !~s.indexOf(window.location.hostname) && (o = "")
                    }
                    return /^(https?:)?\/\//.test(e) ? e : jt && !An && o && "string" === typeof o && /^(https?:)?\/\//.test(o) && i && i(e) ? "" + o + e : n ? "" + n + e : jt ? "" + window.location.origin + e : e
                }, Ln = function (e, t, r, n, o) {
                    return l(void 0, void 0, void 0, (function () {
                        var i, s, u, d, p, f, g, h, b, m, v, y, x, w, S, k, C, B, A, E, T, O, _;
                        return c(this, (function (R) {
                            switch (R.label) {
                                case 0:
                                    i = bn.debug, s = bn.responseInterceptor, u = bn.requestInterceptor, d = bn.resultInterceptor, p = Date.now(), R.label = 1;
                                case 1:
                                    return R.trys.push([1, 6, , 7]), e = Fn(e), E = u(e, t, o), e = E[0], t = E[1], g = s, [4, Tn(e, t)];
                                case 2:
                                    return [4, g.apply(void 0, [R.sent(), o, t])];
                                case 3:
                                    return f = R.sent(), h = Date.now(), b = h - p, [4, (j = f, l(void 0, void 0, void 0, (function () {
                                        var e, t, r;
                                        return c(this, (function (n) {
                                            switch (n.label) {
                                                case 0:
                                                    if ((o = j.status) >= 200 && o < 300 || 401 === o) return [2, j];
                                                    n.label = 1;
                                                case 1:
                                                    return n.trys.push([1, 3, , 4]), [4, j.json()];
                                                case 2:
                                                    throw e = n.sent(), (t = new Error(j.statusText || j.status)).errorMsg = e, t;
                                                case 3:
                                                    throw(r = n.sent()).code = j.status, jt && (r.name = j.status), r;
                                                case 4:
                                                    return [2]
                                            }
                                            var o
                                        }))
                                    })))];
                                case 4:
                                    return R.sent(), (m = f._bodyBlob) && ["application/vnd.ms-excel", "application/pdf"].includes(m.type) ? [2, f.blob()] : [4, f.json()];
                                case 5:
                                    return v = R.sent(), kn({
                                        startTime: p,
                                        status: f.status,
                                        url: f.url,
                                        page: n,
                                        uuid: null === (T = null === t || void 0 === t ? void 0 : t.headers) || void 0 === T ? void 0 : T["X-TRACE-ID"],
                                        bncUuid: Rn
                                    }), i && On("\n      Request url: " + e + ",\n      params is: " + JSON.stringify(r) + "\n      responseStatus: " + f.status + "\n      duration time is " + b + ",\n      " + (b > 500 ? "more than 500ms, " : "")), I = d, "[object Function]" === Hn.call(I) ? [2, d(v) || v] : [2, v];
                                case 6:
                                    throw y = R.sent(), x = bn.enableSentry, w = y.status || y.code || (null === (O = y.errorMsg) || void 0 === O ? void 0 : O.status), "undefined" !== typeof Sentry && x && 401 !== w && (S = y.message, y.message = (null === y || void 0 === y ? void 0 : y.defaultErrorMessage) || y.message, k = e.split("?"), C = k[0], B = k[1], A = (t || {}).method, Sentry.captureException(y, {
                                        tags: {
                                            component: "api",
                                            path: C,
                                            method: A,
                                            status: w,
                                            isSSR: "undefined" === typeof window
                                        },
                                        fingerprint: [A, e, w],
                                        level: "error",
                                        contexts: {
                                            api: {
                                                req: {path: C, method: A, querystring: B, body: t.body},
                                                res: a(a({}, y.errorMsg), {status: w})
                                            }
                                        }
                                    }), y.message = S), jt && !An && y && "TypeError" === y.name && function () {
                                        if (jt && !Hr) {
                                            Hr = !0;
                                            var e = window.location.origin;
                                            Nr(e), Wr(e)
                                        }
                                    }(), kn({
                                        startTime: p,
                                        status: f && f.status,
                                        url: e,
                                        page: n,
                                        error: y,
                                        uuid: null === (_ = null === t || void 0 === t ? void 0 : t.headers) || void 0 === _ ? void 0 : _["X-TRACE-ID"],
                                        bncUuid: Rn
                                    }), i && On("\n      BAD REQUEST:\n      Request url: {" + e + "},\n      params is: " + JSON.stringify(r) + ",\n      parse ERROR is " + JSON.stringify(y)), _n(y), y;
                                case 7:
                                    return [2]
                            }
                            var I, j
                        }))
                    }))
                }, Dn = function (e, t, r) {
                    return void 0 === r && (r = {}), l(void 0, void 0, void 0, (function () {
                        var n, o, i, a;
                        return c(this, (function (s) {
                            switch (s.label) {
                                case 0:
                                    return n = Lr(), [4, zn(n, Pn(r))];
                                case 1:
                                    return o = s.sent(), i = o.opts, a = o.page, i = Object.assign(i, {
                                        method: "POST",
                                        body: JSON.stringify(t)
                                    }), [2, Ln(e, i, t, a, r)]
                            }
                        }))
                    }))
                }, Hn = Object.prototype.toString;
                const Mn = function (e) {
                    return Dn("/bapi/composite/v1/friendly/common/udf-event-track", e)
                };
                var Nn,
                    Wn = jt && "undefined" !== typeof localStorage ? JSON.parse((null === (Nn = null === localStorage || void 0 === localStorage ? void 0 : localStorage.getItem) || void 0 === Nn ? void 0 : Nn.call(localStorage, "trackError")) || "{}") : {},
                    Un = function (e) {
                        var t;
                        delete Wn[e.localTime], null === (t = null === localStorage || void 0 === localStorage ? void 0 : localStorage.setItem) || void 0 === t || t.call(localStorage, "trackError", JSON.stringify(Wn))
                    }, Gn = Vt().isHybrid, Vn = function (e, t) {
                        return e + " " + t
                    }, $n = jt ? function () {
                        var e = (new cr.UAParser).getResult();
                        return {
                            browser: Vn(e.browser.name, e.browser.version),
                            os: Vn(e.os.name, e.os.version),
                            clientType: /electron/i.test(navigator.userAgent) ? "electron" : Gn ? "Hybrid" : "Web",
                            screenHeight: window.screen.height,
                            screenWidth: window.screen.width,
                            userAgent: navigator.userAgent
                        }
                    }() : {};
                const Xn = function (e, t, r) {
                    void 0 === t && (t = {});
                    var n = a("string" !== typeof e ? a({eventName: "webClick"}, e) : {eventName: e}, t),
                        o = a(a(a({}, $n), {
                            localTime: +new Date,
                            referrerURL: document.referrer,
                            url: window.location.href
                        }), n);
                    return function (e) {
                        var t;
                        Wn[e.localTime] = e, null === (t = null === localStorage || void 0 === localStorage ? void 0 : localStorage.setItem) || void 0 === t || t.call(localStorage, "trackError", JSON.stringify(Wn))
                    }(o), Mn(o).then((function (e) {
                        return Un(o), r && r(!0), e
                    })).catch((function (e) {
                        return Un(o), r && r(!1), e
                    }))
                };
                jt && l(void 0, void 0, void 0, (function () {
                    var e, t;
                    return c(this, (function (r) {
                        switch (r.label) {
                            case 0:
                                e = Object.values(Wn), r.label = 1;
                            case 1:
                                if (!e.length) return [3, 6];
                                t = e.pop(), r.label = 2;
                            case 2:
                                return r.trys.push([2, 4, , 5]), [4, Mn(t)];
                            case 3:
                            case 4:
                                return r.sent(), [3, 5];
                            case 5:
                                return Un(t), [3, 1];
                            case 6:
                                return [2]
                        }
                    }))
                }));
                const qn = Xn;
                var Yn = function (e, t, r) {
                    var n = "undefined" !== typeof e[t] ? e[t] : e[r];
                    if ("undefined" === typeof n) throw new Error(t + " is require");
                    e[t] = n
                }, Jn = function (e) {
                    var t = typeof e;
                    return "number" === t || "string" === t || "boolean" === t
                }, Qn = function (e, t, r) {
                    return qn(e, t, null === r || void 0 === r ? void 0 : r.callback)
                };
                var Zn = function (e, t, r) {
                    var n = null, o = function (e, t, r) {
                            if ("string" === typeof e) return {info: a(a({}, t), {eventName: e}), opt: r};
                            if ("object" === typeof e) return {info: e, opt: t};
                            throw new Error("params is error")
                        }(e, t, r), i = o.info, l = void 0 === i ? {} : i, c = o.opt, u = l.eventName,
                        d = s(l, ["eventName"]);
                    try {
                        Yn(l, "eventName"), Yn(l, "elementID", "elementId"), Yn(l, "pageName", "ScreenName"), function (e) {
                            if ("object" === typeof e) Object.entries(e).forEach((function (e) {
                                if (Array.isArray(e[1])) {
                                    if (e[1].filter((function (e) {
                                        return !Jn(e)
                                    })).length > 0) throw new Error("extraInfo key:" + e[0] + " array data limit string/number/boolean")
                                } else if (!Jn(e[1])) throw new Error("extraInfo key:" + e[0] + " limited string/number/array/boolean")
                            })); else if ("undefined" !== typeof e) throw new Error("extraInfo must be a object")
                        }(null === l || void 0 === l ? void 0 : l.extraInfo)
                    } catch (f) {
                        n = f
                    }
                    var p = Qn(u, d, function (e) {
                        return "function" === typeof e ? {callback: e} : "object" === typeof e ? e : {}
                    }(c));
                    return n ? Promise.reject(n) : p
                };
                var Kn = function (e) {
                    if (jt) {
                        var t = window.location.host;
                        (t.includes("qa1fdg") || t.includes("devfdg") || t.includes("localhost")) && console.info("datalayer", e), window.dataLayer = window.dataLayer || [], "y" === Dt.read("data_opt_out") || window.dataLayer.push(e)
                    }
                }, eo = function (e, t) {
                    void 0 === t && (t = "click"), function (e, t, r) {
                        void 0 === t && (t = "webClick"), void 0 === r && (r = "binance_home");
                        try {
                            "extraInfo" in e && (e.extraInfo["ab-version"] = Dt.read("home-ui-ab") || "A"), Zn(t, a(a({}, e), {pageName: r}))
                        } catch (N) {
                        }
                    }({elementId: ["binance_footer", t].join("_"), extraInfo: e}, "webClick", ""), Kn({
                        event: "click",
                        eventCategory: "bottom_navigation",
                        eventLabel: "bottom::" + (e.menuParent || "") + "_" + (e.title || ""),
                        eventAction: "click",
                        language: e.locale,
                        elementId: "footer_" + e.title
                    })
                }, to = function (e) {
                    var t = e.title, r = e.suffix, n = e.link, o = e.menuParent, s = e.hideElement,
                        l = void 0 !== s && s, c = Ai(), u = c.getI18n, d = c.replaceUrl, p = c.locale, g = c.gapSize,
                        h = [u(t), r].filter(Boolean), b = [t, r].filter(Boolean), m = l ? {display: "none"} : {};
                    return i().createElement(f, {
                        id: "footer_menu_item_" + b.join("-"),
                        as: "a",
                        href: d(n),
                        children: h.join(" "),
                        onClick: function () {
                            return eo({title: t, locale: p, menuParent: o})
                        },
                        __css: {fontSize: 1, mb: ["ls", g || "ls"]},
                        sx: a(a({}, m), {color: "t.third", "&:hover": {color: "t.primary"}})
                    })
                }, ro = function (e) {
                    var t = e.config || {}, r = t.title, n = t.list, s = (0, o.useState)(!1), l = s[0], c = s[1],
                        u = Ai(), p = u.getI18n, g = u.locale, h = u.isLoggedIn, b = (0, o.useCallback)((function () {
                            return c((function (e) {
                                return !e
                            }))
                        }), []);
                    return i().createElement(d, {
                        sx: {flex: 1, color: "t.primary", pr: [0, "sm"]},
                        "data-expand": l
                    }, i().createElement(f, {
                        onClick: b,
                        sx: {pointerEvents: ["auto", "none"], py: ["ls", "sm"]}
                    }, i().createElement(Ct, {
                        sx: {fontWeight: "medium", fontSize: [2, 3], flex: 1},
                        children: p(r)
                    }), i().createElement(Ei, {
                        size: 18,
                        name: l ? "nav-collapse" : "nav-expand",
                        sx: {flex: "none", display: ["block", "none"]}
                    })), i().createElement(_t, {
                        list: n.map((function (e) {
                            return a(a({}, e), {menuParent: r})
                        })),
                        elType: to,
                        locale: g,
                        isLoggedIn: h,
                        boxProps: {
                            sx: {maxHeight: [l ? "40em" : 0, "40em"]},
                            __css: {overflow: "hidden", transition: "0.3s all"}
                        }
                    }))
                };
                ro.schema = {type: "object", title: "Footer Menu", properties: {config: Rt}};
                const no = i().memo((function (e) {
                    return e.config ? i().createElement(ro, a({}, e)) : i().createElement(d, {sx: {flex: 1}})
                }));
                var oo = function (e) {
                    var t = e.flex, r = e.config, n = void 0 === r ? [] : r, o = n.slice(0, 3), s = n.slice(3, 5),
                        l = {isJulia: !0, isLoggedIn: Ai().isLoggedIn, elType: no},
                        c = {flex: [1, o.length], display: ["block", "flex"]},
                        u = {flex: [1, 1, s.length], display: ["block", "block", "flex"]};
                    return i().createElement(f, {
                        sx: {
                            flex: t,
                            flexDirection: ["column", "row"]
                        }
                    }, i().createElement(_t, a({}, l, {
                        list: o,
                        boxProps: {sx: c}
                    })), i().createElement(_t, a({}, l, {list: s, boxProps: {sx: u}})))
                };
                oo.schema = {type: "object", title: "MenuList", properties: {config: It}};
                const io = i().memo(oo);
                var ao = {
                    large: {px: "md", py: "ls", fontSize: "md", lineHeight: "24px", minWidth: "80px"},
                    normal: {px: "sm", py: "s", fontSize: "sm", lineHeight: "20px", minWidth: "60px"},
                    small: {px: "ls", py: "xxs", fontSize: "sm", lineHeight: "20px", minWidth: "52px"},
                    tiny: {px: "xs", py: "minor", fontSize: "xs", lineHeight: "16px", minWidth: "40px"},
                    dwarf: {px: "ls", py: "tiny", fontSize: "sm", lineHeight: "20px", minWidth: "123px"},
                    giant: {px: "md", py: "xs", fontSize: "md", lineHeight: "24px", minWidth: "100%"}
                }, so = {
                    xl: ao.large,
                    l: ao.normal,
                    m: ao.small,
                    s: ao.tiny,
                    xs: {px: 8, py: 4, fontSize: "12px", lineHeight: "12px", minHeight: "auto"}
                };
                const lo = a(a({}, ao), so);
                var co = function (e, t) {
                    return "primary" === e ? "primary.default" : e + "." + function (e, t) {
                        return e || t
                    }(t, "outline" === e ? "default" : "primary")
                }, uo = (0, o.forwardRef)((function (e, t) {
                    var r = e.variant, n = void 0 === r ? "default" : r, o = e.colorStyle, s = e.sz,
                        l = void 0 === s ? "small" : s, c = e.inactive, u = e.className, p = e.onClick,
                        f = function (e, t, r) {
                            var n = [];
                            return e && n.push(e), t && n.push(r), n.join(" ").trim()
                        }(u, !!c, "inactive");
                    return i().createElement(d, a({
                        ref: t,
                        as: "button",
                        tx: "buttons",
                        "data-bn-type": "button"
                    }, e, {
                        variant: co(n, o),
                        className: f,
                        onClick: function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return c ? null : p && p.apply(void 0, e)
                        },
                        __css: a({
                            appearance: "none",
                            userSelect: "none",
                            cursor: "pointer",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxSizing: "border-box",
                            fontSize: "inherit",
                            fontFamily: "inherit",
                            textAlign: "center",
                            textDecoration: "none",
                            outline: "none"
                        }, lo[l] || {})
                    }))
                }));
                uo.displayName = "Button";
                const po = uo;

                function fo() {
                    return (fo = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }).apply(this, arguments)
                }

                var go = r("Sy2L"), ho = r.n(go), bo = ["as"];
                var mo = "undefined" !== typeof window ? i().useLayoutEffect : i().useEffect, vo = function (e, t) {
                    "function" === typeof e ? e(t) : e && (e.current = t)
                };
                const yo = i().forwardRef((function (e, t) {
                    var r = e.children, n = e.container, o = e.disablePortal, a = void 0 !== o && o, s = i().useState(),
                        l = s[0], c = s[1];
                    return mo((function () {
                        a || c(function (e) {
                            return e = "function" === typeof e ? e() : e, ho().findDOMNode(e)
                        }(n) || document.body)
                    }), [n]), mo((function () {
                        if (l && !a) return vo(t, l), function () {
                            vo(t, null)
                        }
                    }), [t, l, a]), a ? i().isValidElement(r) ? i().cloneElement(r, {ref: t}) : r : l ? ho().createPortal(r, l) : null
                }));
                var xo = function (e) {
                    var t = (void 0 === e ? {} : e).multiSources, r = {};

                    function n(e) {
                        r.value = e, r.set && r.set.current && r.set.current(e)
                    }

                    return {
                        Source: function (e) {
                            var n = e.children, o = i().useState(null), a = o[0], s = o[1];
                            return i().useLayoutEffect((function () {
                                var e, n = {current: s};
                                return r.set && (e = r.set, t || r.set.current(null)), r.set = n, s(r.value), function () {
                                    n.current = null, r.set = null, e && e.current && (r.set = e, r.set.current(r.value))
                                }
                            }), []), a ? ho().createPortal(n, a) : null
                        }, Target: function (e) {
                            var t = e.as, r = void 0 === t ? "div" : t, o = function (e, t) {
                                if (null == e) return {};
                                var r, n, o = {}, i = Object.keys(e);
                                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, bo);
                            return i().createElement(r, fo({ref: n}, o))
                        }, useTargetRef: function () {
                            return n
                        }
                    }
                }();
                (0, o.createContext)(xo.Source);
                const wo = yo;
                const So = function (e) {
                    return i().createElement(h, a({
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        fill: "none"
                    }, e), i().createElement("path", {
                        d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
                        fill: "currentColor"
                    }))
                };
                var ko = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 12e3,
                    position: "fixed",
                    alignItems: "center",
                    justifyContent: "center",
                    bg: "rgb(0,0,0,0.25)",
                    "> div": {
                        bg: "popupBg",
                        color: "t.primary",
                        boxShadow: "area",
                        maxWidth: "100vw",
                        maxHeight: "100vh",
                        flexDirection: "column",
                        position: "relative"
                    }
                }, Co = {
                    top: 24,
                    right: 24,
                    cursor: "pointer",
                    position: "absolute",
                    zIndex: 99,
                    color: "t.disabled",
                    "&:hover": {color: "t.third"}
                };
                const Bo = i().memo((function (e) {
                    var t = e.contentProps, r = e.closeSx, n = e.onClose, o = e.children;
                    return i().useEffect((function () {
                        return document.body.style.overflow = "hidden", function () {
                            document.body.style.overflow = "auto"
                        }
                    }), []), i().createElement(wo, null, i().createElement(f, {__css: ko}, i().createElement(f, a({}, t, {
                        __css: {
                            p: "md",
                            borderRadius: 6
                        }
                    }), "function" === typeof n ? i().createElement(d, {
                        sx: r,
                        __css: Co,
                        onClick: n
                    }, i().createElement(So, {size: 24})) : null, o)))
                }));
                var Ao = function (e) {
                        function t() {
                            this.message = e
                        }

                        return t.prototype = new Error, t.prototype.name = "InvalidCharacterError", t.prototype.code = 5, t
                    }, Eo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    To = Ao("The string to be encoded contains characters out of range");
                var Oo = Ao("The string to be decoded is not correctly encoded");

                function _o(e, t) {
                    return [e, (r = t, Object.keys(r).map((function (e) {
                        return r[e] ? e + "=" + encodeURIComponent(r[e]) : ""
                    })).filter((function (e) {
                        return !!e
                    })).join(n || "&"))].filter(Boolean).join(/\?/.test(e) ? "&" : "?");
                    var r, n
                }

                var Ro, Io = function (e) {
                    return void 0 === e && (e = ""), t = _o("/bapi/composite/v1/public/common/config/getLanguageMapByKey", {key: e}), l(void 0, void 0, void 0, (function () {
                        var e, n, o, i;
                        return c(this, (function (a) {
                            switch (a.label) {
                                case 0:
                                    return r = r || {}, e = Lr(), [4, zn(e, Pn(r))];
                                case 1:
                                    return n = a.sent(), o = n.opts, i = n.page, [2, Ln(t, o, {}, i, r)]
                            }
                        }))
                    }));
                    var t, r
                };
                Ro = function () {
                    try {
                        return "localStorage" in window && null !== window.localStorage
                    } catch (e) {
                        return !1
                    }
                }() ? window.localStorage : function () {
                    var e = {};
                    return {
                        setItem: function (t, r) {
                            e[t] = r
                        }, getItem: function (t) {
                            return e[t] || null
                        }
                    }
                }();
                var jo, zo = function (e, t, r) {
                        try {
                            Ro.setItem(e, r ? String(t) : JSON.stringify(t))
                        } catch (n) {
                        }
                    }, Po = zo, Fo = "undefined" === typeof window, Lo = {LANGUAGE: "language", CURRENCY: "currency"},
                    Do = function (e, t) {
                        var r = t || {}, n = r.width, o = void 0 === n ? 1 : n, i = r.type,
                            a = void 0 === i ? "solid" : i, s = r.color, l = void 0 === s ? "lines.light" : s,
                            c = o + "px " + a;
                        return Object.keys(e).reduce((function (t, r) {
                            return e[r] ? (t[St(["border", r])] = c, t[St(["border", r, "color"])] = l, t) : t
                        }), {})
                    }, Ho = function (e) {
                        var t = e.lng, r = e.callback;
                        if (Dt.erase("lang"), Dt.write("lang", "", -1, !1), Dt.write("lang", t.toLowerCase()), Po("chatLang", t), "function" === typeof r) r(t); else if (!Fo) {
                            var n = window.location, o = n.pathname, i = n.search, a = o.split("/").slice(2);
                            window.location.href = function (e, t, r) {
                                if (r || 2 === arguments.length) for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                                return e.concat(n || Array.prototype.slice.call(t))
                            }(["", t], a).join("/") + i
                        }
                    }, Mo = (jo = "preferLang", function (e) {
                        return function (e) {
                            var t = e.configName, r = e.configType;
                            return l(void 0, void 0, void 0, (function () {
                                return c(this, (function (e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, Dn("/bapi/accounts/v1/private/account/user-config/save", {
                                                configName: t,
                                                configType: r
                                            })];
                                        case 1:
                                            return [2, e.sent()]
                                    }
                                }))
                            }))
                        }({configName: e, configType: jo})
                    }), No = {p: 0, pb: "md", width: ["100vw", 840], height: ["100%", "100%", 648], borderRadius: [0, 6]},
                    Wo = {
                        fontSize: 1,
                        display: "flex",
                        height: [48, 40],
                        alignItems: "center",
                        bg: "transparent",
                        color: "t.primary",
                        cursor: "pointer",
                        border: "none",
                        outline: "none",
                        px: [0, "12px"],
                        mt: [0, "12px", "16px"],
                        mr: [0, "12px", "16px"],
                        width: ["100%", "calc(33% - 12px)", "calc(25% - 16px)"],
                        "&:hover": {bg: ["transparent", "bg3"], borderRadius: 4},
                        "&[data-active=true]": {color: "t.yellow"}
                    }, Uo = function () {
                    }, Go = function (e) {
                        var t = e.active, r = e.getI18n, n = e.setActive, a = e.ignoreTheme, s = e.needLng, l = e.locale,
                            c = e.languageInfo, u = e.onLngClick, p = e.needFiat, g = e.fiatCurrency,
                            h = e.fiatCurrencyInfo, m = e.onFiatClick, v = (g || "").split("_")[0],
                            y = (0, o.useMemo)((function () {
                                return s ? Object.keys(c).map((function (e) {
                                    var t = c[e] || "", r = t.charCodeAt(0);
                                    return {key: e, value: t, sortIndex: r, item: e, isActive: e === l}
                                })) : null
                            }), [s, c, l]), x = (0, o.useMemo)((function () {
                                return p ? h.map((function (e) {
                                    var t = e.name, r = [t, e.symbol].join(" - "), n = r.charCodeAt(0);
                                    return {key: t, value: r, sortIndex: n, item: e, isActive: t === v}
                                })) : null
                            }), [p, h, v]), w = [{
                                value: l,
                                list: y,
                                key: Lo.LANGUAGE,
                                onListClick: u || Uo,
                                tab: "ba-languageRegion",
                                subTitle: "ba-chooseLanguageRegion",
                                isActive: t === Lo.LANGUAGE
                            }, {
                                value: v,
                                key: Lo.CURRENCY,
                                list: x,
                                onListClick: m || Uo,
                                tab: "ba-Currency",
                                subTitle: "ba-chooseCurrency",
                                isActive: t === Lo.CURRENCY
                            }].filter((function (e) {
                                return e && e.list
                            })), S = w.map((function (e) {
                                return i().createElement(Ct, {
                                    key: e.tab,
                                    __css: {py: "md", mr: "md", cursor: "pointer", fontWeight: "medium"},
                                    sx: Do({bottom: !0}, {color: e.isActive ? "primary" : "transparent"}),
                                    onClick: function () {
                                        return n(e.key)
                                    },
                                    children: r(e.tab)
                                })
                            })), k = w.map((function (e) {
                                var t = e.tab, n = e.subTitle, o = e.list, a = e.value, s = e.onListClick;
                                return i().createElement(d, {
                                    key: t,
                                    display: e.isActive ? "block" : "none",
                                    sx: {px: "md"}
                                }, i().createElement(Ct, {
                                    sx: {fontSize: 2, pt: "md", fontWeight: "medium"},
                                    children: r(n)
                                }), i().createElement(f, {__css: {flexWrap: "wrap"}}, o.sort((function (e, t) {
                                    return e.key === a ? -1 : t.key === a ? 1 : e.sortIndex - t.sortIndex
                                })).map((function (e) {
                                    var r = e.key, n = e.isActive, o = e.value;
                                    return i().createElement(d, {
                                        key: r, as: "button", sx: Wo, onClick: function () {
                                            return s(e.item)
                                        }, "data-active": n, id: "fiatlngdialog_" + t + "-" + r
                                    }, i().createElement(Ct, {
                                        sx: {flex: 1, textAlign: "left"},
                                        children: o
                                    }), i().createElement(b, {
                                        name: "checkmark-f",
                                        isReady: !0,
                                        size: 24,
                                        sx: {opacity: [n ? 1 : 0, 0]}
                                    }))
                                }))))
                            }));
                        return i().createElement(ft, {type: a ? "light" : "inherit"}, i().createElement(Bo, {
                            contentProps: {sx: No},
                            onClose: function () {
                                return n("")
                            }
                        }, i().createElement(f, {
                            __css: Do({bottom: !0}),
                            sx: {px: "md"},
                            children: S
                        }), i().createElement(f, {sx: {flex: 1, overflowY: "auto"}, children: k})))
                    };
                const Vo = i().memo((function (e) {
                    return e.active ? i().createElement(Go, a({}, e)) : null
                }));
                const $o = i().memo((function (e) {
                    var t = e.isLoggedIn, r = (0, o.useState)(""), n = r[0], a = r[1], s = Ai(), l = s.locale,
                        c = s.getI18n, u = s.languageInfo, d = s.currentTheme, p = s.onLanguageChange,
                        f = u[l] || "English",
                        g = {transition: "all 0.2s linear", transform: n ? "rotate(180deg)" : "none"};
                    return i().createElement(i().Fragment, null, i().createElement(po, {
                        sz: "normal",
                        variant: "outline",
                        onClick: function () {
                            return a(Lo.LANGUAGE)
                        },
                        sx: {color: "t.primary", border: "none", bg: "bg3", minWidth: 180}
                    }, i().createElement(Ct, {
                        sx: {mx: "xs", flex: 1, textAlign: "left"},
                        children: f
                    }), i().createElement(Ei, {
                        name: "icon-h-dropdown-arrow",
                        color: "t.third",
                        size: 18,
                        sx: g
                    })), i().createElement(Vo, {
                        active: n,
                        getI18n: c,
                        setActive: a,
                        ignoreTheme: !d,
                        needLng: !0,
                        locale: l,
                        languageInfo: u,
                        onLngClick: function (e) {
                            t && Mo(e), eo({title: "changeLanguage", lang: e}), p && p(e)
                        }
                    }))
                })), Xo = {
                    type: "object",
                    title: "footer Community props",
                    properties: {
                        title: {type: "string", title: "title"},
                        needLng: {type: "boolean", title: "needLng"},
                        direction: {type: "string", enum: ["vertical", "horizontal"], title: "direction"},
                        communities: {
                            type: "array",
                            title: "communities configuration",
                            items: {
                                type: "object",
                                properties: {
                                    name: {type: "string", title: "name"},
                                    link: {type: "string", title: "link"},
                                    title: {type: "string", title: "title"},
                                    langOnly: {type: "string", title: "langOnly"}
                                }
                            }
                        }
                    }
                };
                var qo = function (e) {
                    var t = e.name, r = e.link, n = Ai().replaceUrl;
                    return i().createElement(d, {
                        as: "a",
                        href: n(r),
                        __css: {display: "inline-flex", mb: "md", mr: "plus"},
                        sx: {color: "t.third", "&:hover": {color: "t.primary"}},
                        children: i().createElement(Ei, {name: t, size: 22, prefix: "icon"})
                    })
                }, Yo = function (e) {
                    var t = e.name, r = e.link, n = e.title, o = Ai(), a = o.replaceUrl, s = o.getI18n, l = o.gapSize;
                    return i().createElement(d, {
                        as: "a",
                        href: a(r),
                        sx: {
                            color: "t.third",
                            alignItems: "center",
                            mb: ["md", "md", l || "ls"],
                            "&:hover": {color: "t.primary"},
                            display: ["inline-flex", "inline-flex", "flex"]
                        }
                    }, i().createElement(Ei, {
                        name: t,
                        size: 22,
                        sx: {mr: ["plus", "plus", "minor"]},
                        prefix: "icon"
                    }), i().createElement(Ct, {sx: {display: ["none", "none", "block"]}, children: s(n)}))
                }, Jo = function (e) {
                    var t = e.flex, r = e.config || {}, n = r.title, o = r.needLng, a = void 0 === o || o,
                        s = r.direction, l = r.communities, c = Ai(), u = c.locale, p = c.getI18n, f = c.isLoggedIn,
                        g = "vertical" === s && !a;
                    return i().createElement(d, {
                        sx: {
                            flex: t,
                            color: "t.primary"
                        }
                    }, i().createElement(Ct, {
                        sx: {py: ["ls", "sm"], fontWeight: "medium", fontSize: [2, 3]},
                        children: p(n)
                    }), i().createElement(_t, {
                        list: l,
                        locale: u,
                        elType: g ? Yo : qo
                    }), a ? i().createElement($o, {isLoggedIn: f}) : null)
                };
                Jo.schema = {type: "object", title: "Community", properties: {config: Xo}};
                const Qo = i().memo(Jo);
                var Zo = (0, o.forwardRef)((function (e, t) {
                    return i().createElement(d, a({ref: t, as: "a", variant: "link", "data-bn-type": "link"}, e))
                }));
                Zo.displayName = "Link";
                const Ko = Zo;
                var ei = function (e) {
                    var t = e.target, r = e.href, n = s(e, ["target", "href"]), o = y().origin,
                        l = r && r.startsWith("/") ? "" + o + r : r;
                    return i().createElement(d, a({}, n, {as: "a", href: l, target: bt ? "_blank" : t}))
                };
                ei.historyPush = function (e) {
                    bt ? window.open(e) : window.location.href = e
                };
                const ti = ei;
                var ri = /(`[\s\S]*?`|\[[\s\S]*?\]\([\s\S]*?\)|\*\*[\s\S]*?\*\*|\+[\s\S]*?\+)/g, ni = /`[\s\S]*?`/,
                    oi = /\*\*[\s\S]*?\*\*/, ii = /\+[\s\S]*?\+/, ai = /\[[\s\S]*?\]\([\s\S]*?\)/,
                    si = /\[([\s\S]*?)\]\(([\s\S]*?)\)/, li = function () {
                    }, ci = {textDecoration: "none", wordBreak: "break-all"}, ui = function (e) {
                        var t = e.value, r = e.onClick, n = void 0 === r ? li : r, o = t.match(si) || [], a = o[1],
                            s = o[2];
                        return i().createElement(Ko, {
                            as: ti, href: s, sx: ci, children: a, onClick: function () {
                                return n({title: a, link: s})
                            }
                        })
                    }, di = function (e) {
                        var t = e.value;
                        return ni.test(t) || oi.test(t) ? i().createElement(Ct, {
                            as: "strong",
                            children: t.replace(/(`|\*\*)/g, "")
                        }) : ii.test(t) ? i().createElement(Ct, {
                            as: "span",
                            sx: {textDecoration: "underline"},
                            children: t.replace(/\+/g, "")
                        }) : t
                    }, pi = function (e) {
                        var t = e.content, r = e.onClick, n = (0, o.useMemo)((function () {
                            var e = (t || "").trim(), r = [];
                            return (e.match(ri) || []).forEach((function (t) {
                                var n = t.length, o = e.indexOf(t), i = e.substring(0, o);
                                r.push.apply(r, [i, t]), e = e.slice(o + n)
                            })), r.concat(e).filter(Boolean)
                        }), [t]);
                        return i().createElement(d, {sx: {minHeight: "1.2em"}}, n.map((function (e, t) {
                            var n = ai.test(e) ? ui : di;
                            return i().createElement(n, {key: t, value: e, onClick: r})
                        })))
                    };
                const fi = i().memo((function (e) {
                    var t = e.content, r = e.linkClick, n = s(e, ["content", "linkClick"]),
                        l = (0, o.useMemo)((function () {
                            return (t || "").split("\\n").map((function (e, t) {
                                return i().createElement(pi, {key: t, content: e, onClick: r})
                            }))
                        }), [t, r]);
                    return i().createElement(d, a({}, n, {children: l}))
                })), gi = {
                    type: "object",
                    title: "copyRight config",
                    properties: {
                        legalRich: {type: "string", title: "legal text"},
                        enterprise: {type: "string", title: "enterprise"}
                    }
                };
                var hi = {
                    fontSize: 1,
                    color: "t.third",
                    lineHeight: "20px",
                    py: ["md", "plus"],
                    mx: ["sm", "md", 0],
                    alignItems: "center",
                    flexDirection: "column"
                }, bi = function (e) {
                    var t = e.config || {}, r = t.legalRich, n = t.enterprise, o = void 0 === n ? "Binance" : n;
                    return i().createElement(f, {
                        __css: Do({top: !0}),
                        sx: hi
                    }, !!r && i().createElement(fi, {
                        content: r,
                        sx: {mb: "sm", maxWidth: 1e3, textAlign: ["left", "center"]}
                    }), i().createElement(Ct, {children: [o, "\xa9", (new Date).getFullYear()].join(" ")}))
                };
                bi.schema = {type: "object", title: "Copyright", properties: {config: gi}};
                const mi = i().memo(bi);
                var vi = {
                        menu: [{
                            title: "ba-aboutUs",
                            list: [{title: "ba-About", link: "https://www.%suffixOrigin%/cn/about"}, {
                                title: "ba-joinUs",
                                link: "https://www.%suffixOrigin%/cn/career"
                            }, {
                                title: "ba-ContactUs",
                                link: "https://www.%suffixOrigin%/cn/about#email"
                            }, {
                                title: "ba-Community",
                                link: "https://www.%suffixOrigin%/cn/community"
                            }, {title: "ba-binanceBlog", link: "https://www.%suffixOrigin%/cn/blog"}, {
                                title: "ba-Terms",
                                link: "https://www.%suffixOrigin%/cn/terms"
                            }, {
                                title: "ba-Privacy",
                                link: "https://www.%suffixOrigin%/cn/privacy"
                            }, {
                                title: "ba-Announcement",
                                link: "https://binance.zendesk.com/hc/zh-cn/categories/115000056351-Announcements"
                            }]
                        }, {
                            title: "ba-Products",
                            list: [{title: "Exchange", link: "https://www.%suffixOrigin%/cn"}, {
                                title: "ba-Academy",
                                link: "https://www.binance.vision"
                            }, {title: "BCF", link: "https://www.binance.charity"}, {
                                title: "Card",
                                link: "https://card.binance.com/cn"
                            }, {title: "Info", link: "https://info.%suffixOrigin%"}, {
                                title: "ba-Labs",
                                link: "https://labs.binance.com"
                            }, {
                                title: "ba-Launchpad",
                                link: "https://launchpad.%suffixOrigin%/(cn|ru|vn|kr|it|en)"
                            }, {title: "ba-Research", link: "https://research.binance.com"}, {
                                title: "ba-TrustWallet",
                                link: "https://trustwallet.com"
                            }]
                        }, {
                            title: "ba-Service",
                            list: [{
                                title: "ba-Download",
                                link: "https://www.%suffixOrigin%/cn/download"
                            }, {
                                title: "ba-creditCard",
                                link: "https://www.%suffixOrigin%/cn/buy-sell-crypto"
                            }, {
                                title: "ba-Fees",
                                link: "https://www.%suffixOrigin%/cn/fee/schedule"
                            }, {
                                title: "ba-referral",
                                link: "https://www.%suffixOrigin%/cn/activity/referral"
                            }, {title: "ba-binanceCoin", link: "https://www.%suffixOrigin%/cn/bnb"}, {
                                title: "ba-busd",
                                link: "https://www.%suffixOrigin%/cn/busd"
                            }, {
                                title: "ba-otctrading",
                                link: "https://www.%suffixOrigin%/cn/OTC-Trading"
                            }, {
                                title: "ba-ListingApplication",
                                link: "https://www.%suffixOrigin%/cn/usercenter/coin-apply"
                            }, {
                                title: "ba-tradeRules",
                                link: "https://www.%suffixOrigin%/cn/trade-rule"
                            }, {
                                title: "ba-gateway",
                                link: "https://docs.google.com/forms/d/e/1FAIpQLSeeaZzHatVVE2TLLQoYIBLkuynbRpnsTK6Hs3IzkPf_0ZP7Aw/viewform?usp=sf_link"
                            }]
                        }, {
                            title: "ba-Support",
                            list: [{
                                title: "ba-FAQ",
                                link: "https://binance.zendesk.com/hc/zh-cn"
                            }, {
                                title: "ba-SupportCenter",
                                link: "https://www.%suffixOrigin%/cn/support-center"
                            }, {
                                title: "ba-SubmitARequest",
                                link: "https://binance.zendesk.com/hc/zh-cn/requests/new",
                                langOnly: ["en", "kr", "ru", "es", "fr", "de", "vn", "tr", "nl", "pt", "it", "pl", "id", "ua"].join(","),
                                needLogin: !0
                            }, {
                                title: "ba-SubmitARequest",
                                link: "/zendesk/login.html?return_to=https://binance.zendesk.com/hc/zh-cn/requests/new",
                                langOnly: ["en", "kr", "ru", "es", "fr", "de", "vn", "tr", "nl", "pt", "it", "pl", "id", "ua"].join(","),
                                needLogout: !0
                            }, {
                                title: "ba-APIDocumentation",
                                link: "https://binance-docs.github.io/apidocs/spot/(cn|en)/"
                            }, {
                                title: "ba-official-verification",
                                link: "https://www.%suffixOrigin%/cn/official-verification"
                            }, {title: "ba-status", link: "http://status.binance.com"}]
                        }, {
                            title: "ba-Learn",
                            list: [{
                                title: "ba-buy",
                                suffix: "Bitcoin",
                                link: "https://www.%suffixOrigin%/cn/buy-Bitcoin"
                            }, {
                                title: "ba-buy",
                                suffix: "Ethereum",
                                link: "https://www.%suffixOrigin%/cn/buy-Ethereum"
                            }, {
                                title: "ba-buy",
                                suffix: "Ripple",
                                link: "https://www.%suffixOrigin%/cn/buy-Ripple"
                            }, {
                                title: "ba-buy",
                                suffix: "Litecoin",
                                link: "https://www.%suffixOrigin%/cn/buy-Litecoin"
                            }, {
                                title: "ba-buy",
                                suffix: "Bitcoin Cash",
                                link: "https://www.%suffixOrigin%/cn/buy-Bitcoin-Cash"
                            }]
                        }],
                        community: {
                            title: "Community",
                            needLng: !0,
                            communities: [{
                                name: "h-telegram",
                                link: "https://www.%suffixOrigin%/cn/community"
                            }, {name: "h-facebook", link: "https://www.facebook.com/binance"}, {
                                name: "h-twitter",
                                link: "https://twitter.com/binance"
                            }, {name: "h-reddit", link: "https://www.reddit.com/r/binanceexchange"}, {
                                name: "h-weibo",
                                link: "https://weibo.com/binance?is_hot=1",
                                langOnly: "cn"
                            }, {name: "h-instagram", link: "https://www.instagram.com/Binance/"}, {
                                name: "h-coinmarketcap",
                                link: "https://coinmarketcap.com/exchanges/binance/"
                            }, {name: "h-vk", link: "https://vk.com/binancerussia"}, {
                                name: "h-youtube",
                                link: "https://www.youtube.com/binanceyoutube"
                            }]
                        }
                    }, yi = i().createContext({}), xi = {}, wi = [],
                    Si = {bg: "bg1", pt: ["md", "lg"], "a,a:active,a:visited": {textDecoration: "none"}}, ki = Math.max,
                    Ci = Math.min, Bi = {normal: "ls", large: "md"}, Ai = function () {
                        return (0, o.useContext)(yi)
                    }, Ei = function (e) {
                        var t = Ai().ready;
                        return i().createElement(b, a({}, e, {isReady: t}))
                    }, Ti = function (e) {
                        var t = e || xi, r = t.i18n, n = void 0 === r ? xi : r, s = t.config, l = void 0 === s ? xi : s,
                            c = t.locale, u = void 0 === c ? "en" : c, p = t.iconPath, g = t.isLoggedIn, h = t.currentTheme,
                            b = t.origin, m = void 0 === b ? "https://www.binance.com" : b, v = t.languageKey,
                            y = void 0 === v ? "" : v, x = t.onLanguageChange, w = i().useRef({}), S = (0, o.useState)(!1),
                            k = S[0], C = S[1], B = function (e) {
                                var t = (0, o.useState)(!1), r = t[0], n = t[1], i = (0, o.useState)({}), a = i[0], s = i[1];
                                return (0, o.useEffect)((function () {
                                    r && Io(e).then((function (e) {
                                        var t = e.data;
                                        return s(t || {})
                                    })).catch((function () {
                                    }))
                                }), [r, e]), {setNeedLng: n, languageInfo: a}
                            }(y), A = B.setNeedLng, E = B.languageInfo, T = e.staticUrl || "https://bin.bnbstatic.com";
                        w.current = {lngChange: x};
                        var O = (0, o.useMemo)((function () {
                            return {
                                onLanguageChange: function (e) {
                                    return Ho({lng: e, callback: w.current.lngChange})
                                }
                            }
                        }), []), _ = (0, o.useMemo)((function () {
                            return {
                                locale: u,
                                origin: m,
                                staticUrl: T,
                                isLoggedIn: g,
                                currentTheme: h,
                                getI18n: function (e) {
                                    return function (e, t) {
                                        return t && t[e] || e
                                    }(e, n)
                                },
                                replaceUrl: function (e, t) {
                                    var r = (m || "").split(".").slice(1).join(".");
                                    return function (e, t) {
                                        return void 0 === t && (t = {}), Object.keys(t).reduce((function (e, r) {
                                            return e.replace("%" + r + "%", t[r])
                                        }), e || "")
                                    }(e, a({locale: u, origin: m, suffixOrigin: r}, t))
                                }
                            }
                        }), [u, m, T, n, T, g, h]), R = (0, o.useMemo)((function () {
                            return {ready: k, languageInfo: E}
                        }), [k, E]), I = (0, o.useMemo)((function () {
                            return {config: l, iconPath: p}
                        }), [l, p]);
                        return (0, o.useMemo)((function () {
                            var e = I.config, t = I.iconPath || "/static/configs/newbase/common-icon.js",
                                r = a(a(a(a({}, O), _), R), {gapSize: "ls"}),
                                n = (null === e || void 0 === e ? void 0 : e.gapType) || "normal";
                            r.gapSize = Bi[n] || Bi.normal;
                            var o = (null === e || void 0 === e ? void 0 : e.community) || xi, s = o.needLng,
                                l = void 0 === s || s, c = o.direction;
                            "undefined" !== typeof window && A(l);
                            var u = (null === e || void 0 === e ? void 0 : e.logo) || xi,
                                p = ((null === e || void 0 === e ? void 0 : e.menu) || wi).length, g = !!u.enabled && p < 5,
                                h = "vertical" === c && !l, b = ki(Ci(+h + 4, p + +h - +g), 3), m = [1, 1, b],
                                v = [0, 0, Ci(4 - b, 2)], y = [1, 1, Ci(5.2 - b, 1.4)];
                            return e ? i().createElement(yi.Provider, {value: r}, i().createElement(ft, {type: _.currentTheme || "dark"}, i().createElement(wt, {
                                staticUrl: _.staticUrl,
                                path: t,
                                onReady: C
                            }), i().createElement(d, {
                                as: "footer",
                                __css: Si
                            }, i().createElement(d, {
                                __css: {
                                    px: [0, 0, "md"],
                                    maxWidth: 1248,
                                    mx: "auto"
                                }
                            }, i().createElement(f, {
                                sx: {
                                    flexDirection: ["column", "column", "row"],
                                    pb: ["md", "sm"],
                                    px: ["sm", "md", 0]
                                }
                            }, i().createElement(Et, {
                                flex: y,
                                config: a(a({}, u), {enabled: g})
                            }), i().createElement(io, {
                                flex: m,
                                config: (null === e || void 0 === e ? void 0 : e.menu) || wi
                            }), !g && i().createElement(d, {sx: {flex: v}}), i().createElement(Qo, {
                                flex: 1,
                                config: e.community || xi
                            })), i().createElement(mi, {config: e.copyRight || xi}))))) : null
                        }), [O, _, R, I])
                    };
                "production" !== "{}".julia_env && (Ti.defaultConfig = {config: vi}, Ti.schema = {
                    type: "object",
                    title: "Footer config",
                    properties: {
                        iconPath: {type: "string", title: "icons path"},
                        config: {
                            type: "object",
                            title: "Footer Layout configuration",
                            properties: {
                                logo: Bt,
                                menu: It,
                                community: Xo,
                                copyRight: gi,
                                gapType: {type: "string", enum: ["normal", "large"], title: "gap type"}
                            }
                        }
                    }
                });
                const Oi = i().memo(Ti);
                var _i = function (e) {
                    return e
                }, Ri = function (e) {
                    var t = e.propsReset, r = s(e, ["propsReset"]), n = (0, o.useMemo)((function () {
                        if (gt) return {};
                        var e = document.querySelector("script#__ExchangeFooter_DATA");
                        return function (e) {
                            try {
                                return JSON.parse(e)
                            } catch (t) {
                                return {}
                            }
                        }(e ? e.innerHTML : "")
                    }), []);
                    return "function" !== typeof t && (t = _i), ht ? "__ExchangeFooter" : i().createElement(Oi, a({}, t(a(a({}, r), n))))
                }, Ii = r("PGe7"), ji = r("6p3b"), zi = (Object.freeze({
                    en: "en-us",
                    cn: "zh-cn",
                    tw: "zh-tw",
                    kr: "ko",
                    ru: "ru",
                    vn: "vi",
                    it: "it",
                    es: "es",
                    de: "de",
                    fr: "fr",
                    ja: "ja"
                }), {
                    a: {
                        a: {o: {"-": !0}},
                        b: {h: {"-": !0}, v: {"-": !0}},
                        c: {m: {"-": !0}, q: {"-": !0}, w: {"-": !0}, x: {"-": !0}, y: {"-": !0}},
                        d: {f: {"-": !0}, s: {"-": !0}},
                        e: {b: {"-": !0}, c: {"-": !0}},
                        f: {b: {"-": !0}},
                        j: {p: {"-": !0}},
                        p: {c: {"-": !0}, d: {"-": !0}},
                        r: {"-": !0, b: {"-": !0}, q: {"-": !0}, s: {"-": !0}, y: {"-": !0}, z: {"-": !0}},
                        u: {z: {"-": !0}},
                        v: {l: {"-": !0}},
                        y: {h: {"-": !0}, l: {"-": !0}, n: {"-": !0}, p: {"-": !0}}
                    },
                    b: {b: {z: {"-": !0}}},
                    d: {v: {"-": !0}},
                    f: {a: {"-": !0}},
                    h: {b: {o: {"-": !0}}, e: {"-": !0}},
                    i: {w: {"-": !0}},
                    j: {i: {"-": !0}, p: {r: {"-": !0}}},
                    m: {e: {n: {"-": !0}}},
                    p: {
                        b: {t: {"-": !0}, u: {"-": !0}},
                        e: {o: {"-": !0}, s: {"-": !0}},
                        g: {a: {"-": !0}},
                        r: {d: {"-": !0}, p: {"-": !0}, s: {"-": !0}},
                        s: {"-": !0, t: {"-": !0}}
                    },
                    s: {a: {m: {"-": !0}}, h: {u: {"-": !0}}, q: {r: {"-": !0}}, s: {h: {"-": !0}}},
                    u: {g: {"-": !0}, r: {"-": !0}},
                    x: {a: {a: {"-": !0}}, m: {n: {"-": !0}}},
                    y: {
                        d: {d: {"-": !0}, s: {"-": !0}},
                        h: {d: {"-": !0}},
                        i: {"-": !0, h: {"-": !0}},
                        u: {d: {"-": !0}}
                    }
                }), Pi = function (e) {
                    if ("string" !== typeof e) return "ltr";
                    e += "-";
                    for (var t = zi, r = 0; r < e.length; r++) {
                        if (!0 === (t = t[e.charAt(r)]) || void 0 === t) break
                    }
                    return !0 === t ? "rtl" : "ltr"
                }, Fi = i().createElement, Li = function (e) {
                    var t = e.cssPrefix, r = e.lng, n = e.children, i = vt(), a = (0, o.useMemo)((function () {
                        var e = i ? t : void 0, n = ["rtl" === Pi(r) ? ji.ZP : void 0];
                        return (0, Ii.Z)({key: e, stylisPlugins: n})
                    }), [r, i, t]);
                    return Fi(w.nq, {value: a, children: n})
                };
                const Di = i().memo(Li);
                var Hi = i().createElement;

                function Mi(e) {
                    return Hi(Di, {lng: e.locale, children: Hi(Ri, e)})
                }
            }, y89n: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {
                    alignContent: () => ve,
                    alignItems: () => me,
                    alignSelf: () => Te,
                    background: () => I,
                    backgroundImage: () => Je,
                    backgroundPosition: () => Ze,
                    backgroundRepeat: () => Ke,
                    backgroundSize: () => Qe,
                    border: () => O,
                    borderBottom: () => Xe,
                    borderColor: () => Ge,
                    borderLeft: () => qe,
                    borderRadius: () => Ye,
                    borderRight: () => $e,
                    borderStyle: () => Ue,
                    borderTop: () => Ve,
                    borderWidth: () => We,
                    borders: () => _,
                    bottom: () => nt,
                    boxShadow: () => V,
                    buttonStyle: () => q,
                    color: () => y,
                    colorStyle: () => J,
                    compose: () => h,
                    createParser: () => u,
                    createStyleFunction: () => f,
                    display: () => ie,
                    flex: () => ke,
                    flexBasis: () => Ae,
                    flexDirection: () => Se,
                    flexGrow: () => Ce,
                    flexShrink: () => Be,
                    flexWrap: () => we,
                    flexbox: () => k,
                    fontFamily: () => de,
                    fontSize: () => ue,
                    fontStyle: () => he,
                    fontWeight: () => pe,
                    get: () => c,
                    grid: () => A,
                    gridArea: () => Ne,
                    gridAutoColumns: () => Fe,
                    gridAutoFlow: () => Pe,
                    gridAutoRows: () => Le,
                    gridColumn: () => je,
                    gridColumnGap: () => Re,
                    gridGap: () => _e,
                    gridRow: () => ze,
                    gridRowGap: () => Ie,
                    gridTemplateAreas: () => Me,
                    gridTemplateColumns: () => De,
                    gridTemplateRows: () => He,
                    height: () => Z,
                    justifyContent: () => xe,
                    justifyItems: () => ye,
                    justifySelf: () => Ee,
                    layout: () => b,
                    left: () => ot,
                    letterSpacing: () => be,
                    lineHeight: () => fe,
                    margin: () => N,
                    maxHeight: () => re,
                    maxWidth: () => te,
                    minHeight: () => ee,
                    minWidth: () => K,
                    opacity: () => ce,
                    order: () => Oe,
                    overflow: () => ae,
                    overflowX: () => se,
                    overflowY: () => le,
                    padding: () => W,
                    position: () => P,
                    right: () => rt,
                    shadow: () => G,
                    size: () => ne,
                    space: () => U,
                    style: () => it,
                    system: () => g,
                    textAlign: () => ge,
                    textShadow: () => V,
                    textStyle: () => Y,
                    top: () => tt,
                    typography: () => w,
                    variant: () => X,
                    verticalAlign: () => oe,
                    width: () => Q,
                    zIndex: () => et
                });
                var n = r("maj8"), o = r.n(n), i = function (e, t) {
                    var r = o()({}, e, t);
                    for (var n in e) {
                        var i;
                        e[n] && "object" === typeof t[n] && o()(r, ((i = {})[n] = o()(e[n], t[n]), i))
                    }
                    return r
                }, a = {
                    breakpoints: [40, 52, 64].map((function (e) {
                        return e + "em"
                    }))
                }, s = function (e) {
                    return "@media screen and (min-width: " + e + ")"
                }, l = function (e, t) {
                    return c(t, e, e)
                }, c = function (e, t, r, n, o) {
                    for (t = t && t.split ? t.split(".") : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : o;
                    return e === o ? r : e
                }, u = function e(t) {
                    var r = {}, n = function (e) {
                        var n = {}, l = !1, u = e.theme && e.theme.disableStyledSystemCache;
                        for (var f in e) if (t[f]) {
                            var g = t[f], h = e[f], b = c(e.theme, g.scale, g.defaults);
                            if ("object" !== typeof h) o()(n, g(h, b, e)); else {
                                if (r.breakpoints = !u && r.breakpoints || c(e.theme, "breakpoints", a.breakpoints), Array.isArray(h)) {
                                    r.media = !u && r.media || [null].concat(r.breakpoints.map(s)), n = i(n, d(r.media, g, b, h, e));
                                    continue
                                }
                                null !== h && (n = i(n, p(r.breakpoints, g, b, h, e)), l = !0)
                            }
                        }
                        return l && (n = function (e) {
                            var t = {};
                            return Object.keys(e).sort((function (e, t) {
                                return e.localeCompare(t, void 0, {numeric: !0, sensitivity: "base"})
                            })).forEach((function (r) {
                                t[r] = e[r]
                            })), t
                        }(n)), n
                    };
                    n.config = t, n.propNames = Object.keys(t), n.cache = r;
                    var l = Object.keys(t).filter((function (e) {
                        return "config" !== e
                    }));
                    return l.length > 1 && l.forEach((function (r) {
                        var o;
                        n[r] = e(((o = {})[r] = t[r], o))
                    })), n
                }, d = function (e, t, r, n, i) {
                    var a = {};
                    return n.slice(0, e.length).forEach((function (n, s) {
                        var l, c = e[s], u = t(n, r, i);
                        c ? o()(a, ((l = {})[c] = o()({}, a[c], u), l)) : o()(a, u)
                    })), a
                }, p = function (e, t, r, n, i) {
                    var a = {};
                    for (var l in n) {
                        var c = e[l], u = t(n[l], r, i);
                        if (c) {
                            var d, p = s(c);
                            o()(a, ((d = {})[p] = o()({}, a[p], u), d))
                        } else o()(a, u)
                    }
                    return a
                }, f = function (e) {
                    var t = e.properties, r = e.property, n = e.scale, o = e.transform, i = void 0 === o ? l : o,
                        a = e.defaultScale;
                    t = t || [r];
                    var s = function (e, r, n) {
                        var o = {}, a = i(e, r, n);
                        if (null !== a) return t.forEach((function (e) {
                            o[e] = a
                        })), o
                    };
                    return s.scale = n, s.defaults = a, s
                }, g = function (e) {
                    void 0 === e && (e = {});
                    var t = {};
                    return Object.keys(e).forEach((function (r) {
                        var n = e[r];
                        t[r] = !0 !== n ? "function" !== typeof n ? f(n) : n : f({property: r, scale: r})
                    })), u(t)
                }, h = function () {
                    for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    r.forEach((function (t) {
                        t && t.config && o()(e, t.config)
                    }));
                    var i = u(e);
                    return i
                }, b = g({
                    width: {
                        property: "width", scale: "sizes", transform: function (e, t) {
                            return c(t, e, !function (e) {
                                return "number" === typeof e && !isNaN(e)
                            }(e) || e > 1 ? e : 100 * e + "%")
                        }
                    },
                    height: {property: "height", scale: "sizes"},
                    minWidth: {property: "minWidth", scale: "sizes"},
                    minHeight: {property: "minHeight", scale: "sizes"},
                    maxWidth: {property: "maxWidth", scale: "sizes"},
                    maxHeight: {property: "maxHeight", scale: "sizes"},
                    size: {properties: ["width", "height"], scale: "sizes"},
                    overflow: !0,
                    overflowX: !0,
                    overflowY: !0,
                    display: !0,
                    verticalAlign: !0
                });
                const m = b;
                var v = {
                    color: {property: "color", scale: "colors"},
                    backgroundColor: {property: "backgroundColor", scale: "colors"},
                    opacity: !0
                };
                v.bg = v.backgroundColor;
                var y = g(v);
                const x = y;
                var w = g({
                    fontFamily: {property: "fontFamily", scale: "fonts"},
                    fontSize: {
                        property: "fontSize",
                        scale: "fontSizes",
                        defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
                    },
                    fontWeight: {property: "fontWeight", scale: "fontWeights"},
                    lineHeight: {property: "lineHeight", scale: "lineHeights"},
                    letterSpacing: {property: "letterSpacing", scale: "letterSpacings"},
                    textAlign: !0,
                    fontStyle: !0
                });
                const S = w;
                var k = g({
                    alignItems: !0,
                    alignContent: !0,
                    justifyItems: !0,
                    justifyContent: !0,
                    flexWrap: !0,
                    flexDirection: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    flexBasis: !0,
                    justifySelf: !0,
                    alignSelf: !0,
                    order: !0
                });
                const C = k;
                var B = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]}, A = g({
                    gridGap: {property: "gridGap", scale: "space", defaultScale: B.space},
                    gridColumnGap: {property: "gridColumnGap", scale: "space", defaultScale: B.space},
                    gridRowGap: {property: "gridRowGap", scale: "space", defaultScale: B.space},
                    gridColumn: !0,
                    gridRow: !0,
                    gridAutoFlow: !0,
                    gridAutoColumns: !0,
                    gridAutoRows: !0,
                    gridTemplateColumns: !0,
                    gridTemplateRows: !0,
                    gridTemplateAreas: !0,
                    gridArea: !0
                });
                const E = A;
                var T = {
                    border: {property: "border", scale: "borders"},
                    borderWidth: {property: "borderWidth", scale: "borderWidths"},
                    borderStyle: {property: "borderStyle", scale: "borderStyles"},
                    borderColor: {property: "borderColor", scale: "colors"},
                    borderRadius: {property: "borderRadius", scale: "radii"},
                    borderTop: {property: "borderTop", scale: "borders"},
                    borderTopLeftRadius: {property: "borderTopLeftRadius", scale: "radii"},
                    borderTopRightRadius: {property: "borderTopRightRadius", scale: "radii"},
                    borderRight: {property: "borderRight", scale: "borders"},
                    borderBottom: {property: "borderBottom", scale: "borders"},
                    borderBottomLeftRadius: {property: "borderBottomLeftRadius", scale: "radii"},
                    borderBottomRightRadius: {property: "borderBottomRightRadius", scale: "radii"},
                    borderLeft: {property: "borderLeft", scale: "borders"},
                    borderX: {properties: ["borderLeft", "borderRight"], scale: "borders"},
                    borderY: {properties: ["borderTop", "borderBottom"], scale: "borders"},
                    borderTopWidth: {property: "borderTopWidth", scale: "borderWidths"},
                    borderTopColor: {property: "borderTopColor", scale: "colors"},
                    borderTopStyle: {property: "borderTopStyle", scale: "borderStyles"}
                };
                T.borderTopLeftRadius = {
                    property: "borderTopLeftRadius",
                    scale: "radii"
                }, T.borderTopRightRadius = {
                    property: "borderTopRightRadius",
                    scale: "radii"
                }, T.borderBottomWidth = {
                    property: "borderBottomWidth",
                    scale: "borderWidths"
                }, T.borderBottomColor = {
                    property: "borderBottomColor",
                    scale: "colors"
                }, T.borderBottomStyle = {
                    property: "borderBottomStyle",
                    scale: "borderStyles"
                }, T.borderBottomLeftRadius = {
                    property: "borderBottomLeftRadius",
                    scale: "radii"
                }, T.borderBottomRightRadius = {
                    property: "borderBottomRightRadius",
                    scale: "radii"
                }, T.borderLeftWidth = {
                    property: "borderLeftWidth",
                    scale: "borderWidths"
                }, T.borderLeftColor = {
                    property: "borderLeftColor",
                    scale: "colors"
                }, T.borderLeftStyle = {
                    property: "borderLeftStyle",
                    scale: "borderStyles"
                }, T.borderRightWidth = {
                    property: "borderRightWidth",
                    scale: "borderWidths"
                }, T.borderRightColor = {
                    property: "borderRightColor",
                    scale: "colors"
                }, T.borderRightStyle = {property: "borderRightStyle", scale: "borderStyles"};
                var O = g(T);
                const _ = O;
                var R = {
                    background: !0,
                    backgroundImage: !0,
                    backgroundSize: !0,
                    backgroundPosition: !0,
                    backgroundRepeat: !0
                };
                R.bgImage = R.backgroundImage, R.bgSize = R.backgroundSize, R.bgPosition = R.backgroundPosition, R.bgRepeat = R.backgroundRepeat;
                var I = g(R);
                const j = I;
                var z = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]}, P = g({
                    position: !0,
                    zIndex: {property: "zIndex", scale: "zIndices"},
                    top: {property: "top", scale: "space", defaultScale: z.space},
                    right: {property: "right", scale: "space", defaultScale: z.space},
                    bottom: {property: "bottom", scale: "space", defaultScale: z.space},
                    left: {property: "left", scale: "space", defaultScale: z.space}
                });
                const F = P;
                var L = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]}, D = function (e) {
                    return "number" === typeof e && !isNaN(e)
                }, H = function (e, t) {
                    if (!D(e)) return c(t, e, e);
                    var r = e < 0, n = Math.abs(e), o = c(t, n, n);
                    return D(o) ? o * (r ? -1 : 1) : r ? "-" + o : o
                }, M = {};
                M.margin = {
                    margin: {property: "margin", scale: "space", transform: H, defaultScale: L.space},
                    marginTop: {property: "marginTop", scale: "space", transform: H, defaultScale: L.space},
                    marginRight: {property: "marginRight", scale: "space", transform: H, defaultScale: L.space},
                    marginBottom: {property: "marginBottom", scale: "space", transform: H, defaultScale: L.space},
                    marginLeft: {property: "marginLeft", scale: "space", transform: H, defaultScale: L.space},
                    marginX: {
                        properties: ["marginLeft", "marginRight"],
                        scale: "space",
                        transform: H,
                        defaultScale: L.space
                    },
                    marginY: {
                        properties: ["marginTop", "marginBottom"],
                        scale: "space",
                        transform: H,
                        defaultScale: L.space
                    }
                }, M.margin.m = M.margin.margin, M.margin.mt = M.margin.marginTop, M.margin.mr = M.margin.marginRight, M.margin.mb = M.margin.marginBottom, M.margin.ml = M.margin.marginLeft, M.margin.mx = M.margin.marginX, M.margin.my = M.margin.marginY, M.padding = {
                    padding: {
                        property: "padding",
                        scale: "space",
                        defaultScale: L.space
                    },
                    paddingTop: {property: "paddingTop", scale: "space", defaultScale: L.space},
                    paddingRight: {property: "paddingRight", scale: "space", defaultScale: L.space},
                    paddingBottom: {property: "paddingBottom", scale: "space", defaultScale: L.space},
                    paddingLeft: {property: "paddingLeft", scale: "space", defaultScale: L.space},
                    paddingX: {properties: ["paddingLeft", "paddingRight"], scale: "space", defaultScale: L.space},
                    paddingY: {properties: ["paddingTop", "paddingBottom"], scale: "space", defaultScale: L.space}
                }, M.padding.p = M.padding.padding, M.padding.pt = M.padding.paddingTop, M.padding.pr = M.padding.paddingRight, M.padding.pb = M.padding.paddingBottom, M.padding.pl = M.padding.paddingLeft, M.padding.px = M.padding.paddingX, M.padding.py = M.padding.paddingY;
                var N = g(M.margin), W = g(M.padding), U = h(N, W);
                var G = g({
                    boxShadow: {property: "boxShadow", scale: "shadows"},
                    textShadow: {property: "textShadow", scale: "shadows"}
                });
                const V = G;
                var $ = r("OBVT"), X = function (e) {
                    var t, r, n = e.scale, o = e.prop, i = void 0 === o ? "variant" : o, a = e.variants,
                        s = void 0 === a ? {} : a, l = e.key;
                    (r = Object.keys(s).length ? function (e, t, r) {
                        return (0, $.default)(c(t, e, null))(r.theme)
                    } : function (e, t) {
                        return c(t, e, null)
                    }).scale = n || l, r.defaults = s;
                    var d = ((t = {})[i] = r, t);
                    return u(d)
                };
                var q = X({key: "buttons"}), Y = X({key: "textStyles", prop: "textStyle"}),
                    J = X({key: "colorStyles", prop: "colors"}), Q = m.width, Z = m.height, K = m.minWidth,
                    ee = m.minHeight, te = m.maxWidth, re = m.maxHeight, ne = m.size, oe = m.verticalAlign,
                    ie = m.display, ae = m.overflow, se = m.overflowX, le = m.overflowY, ce = x.opacity,
                    ue = S.fontSize, de = S.fontFamily, pe = S.fontWeight, fe = S.lineHeight, ge = S.textAlign,
                    he = S.fontStyle, be = S.letterSpacing, me = C.alignItems, ve = C.alignContent, ye = C.justifyItems,
                    xe = C.justifyContent, we = C.flexWrap, Se = C.flexDirection, ke = C.flex, Ce = C.flexGrow,
                    Be = C.flexShrink, Ae = C.flexBasis, Ee = C.justifySelf, Te = C.alignSelf, Oe = C.order,
                    _e = E.gridGap, Re = E.gridColumnGap, Ie = E.gridRowGap, je = E.gridColumn, ze = E.gridRow,
                    Pe = E.gridAutoFlow, Fe = E.gridAutoColumns, Le = E.gridAutoRows, De = E.gridTemplateColumns,
                    He = E.gridTemplateRows, Me = E.gridTemplateAreas, Ne = E.gridArea, We = _.borderWidth,
                    Ue = _.borderStyle, Ge = _.borderColor, Ve = _.borderTop, $e = _.borderRight, Xe = _.borderBottom,
                    qe = _.borderLeft, Ye = _.borderRadius, Je = j.backgroundImage, Qe = j.backgroundSize,
                    Ze = j.backgroundPosition, Ke = j.backgroundRepeat, et = F.zIndex, tt = F.top, rt = F.right,
                    nt = F.bottom, ot = F.left, it = function (e) {
                        var t = e.prop, r = e.cssProperty, n = e.alias, o = e.key, i = e.transformValue, a = e.scale,
                            s = e.properties, l = {};
                        return l[t] = f({
                            properties: s,
                            property: r || t,
                            scale: o,
                            defaultScale: a,
                            transform: i
                        }), n && (l[n] = l[t]), u(l)
                    }
            }, "6p3b": (e, t, r) => {
                "use strict";
                var n, o = r("fALc"), i = (n = o) && n.__esModule ? n : {default: n};
                var a = -1;

                function s(e, t) {
                    if (e === a) return i.default.transform(t)
                }

                t.ZP = s
            }, "3as9": function (e, t, r) {
                var n;
                !function (o, i) {
                    "use strict";
                    var a = "function", s = "undefined", l = "object", c = "string", u = "model", d = "name",
                        p = "type", f = "vendor", g = "version", h = "architecture", b = "console", m = "mobile",
                        v = "tablet", y = "smarttv", x = "wearable", w = "embedded", S = {
                            extend: function (e, t) {
                                var r = {};
                                for (var n in e) t[n] && t[n].length % 2 === 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                                return r
                            }, has: function (e, t) {
                                return typeof e === c && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                            }, lowerize: function (e) {
                                return e.toLowerCase()
                            }, major: function (e) {
                                return typeof e === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : i
                            }, trim: function (e, t) {
                                return e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof t === s ? e : e.substring(0, 255)
                            }
                        }, k = {
                            rgx: function (e, t) {
                                for (var r, n, o, s, c, u, d = 0; d < t.length && !c;) {
                                    var p = t[d], f = t[d + 1];
                                    for (r = n = 0; r < p.length && !c;) if (c = p[r++].exec(e)) for (o = 0; o < f.length; o++) u = c[++n], typeof (s = f[o]) === l && s.length > 0 ? 2 == s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 == s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : i : this[s[0]] = u ? s[1].call(this, u, s[2]) : i : 4 == s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : i) : this[s] = u || i;
                                    d += 2
                                }
                            }, str: function (e, t) {
                                for (var r in t) if (typeof t[r] === l && t[r].length > 0) {
                                    for (var n = 0; n < t[r].length; n++) if (S.has(t[r][n], e)) return "?" === r ? i : r
                                } else if (S.has(t[r], e)) return "?" === r ? i : r;
                                return e
                            }
                        }, C = {
                            browser: {
                                oldSafari: {
                                    version: {
                                        "1.0": "/8",
                                        1.2: "/1",
                                        1.3: "/3",
                                        "2.0": "/412",
                                        "2.0.2": "/416",
                                        "2.0.3": "/417",
                                        "2.0.4": "/419",
                                        "?": "/"
                                    }
                                },
                                oldEdge: {
                                    version: {
                                        .1: "12.",
                                        21: "13.",
                                        31: "14.",
                                        39: "15.",
                                        41: "16.",
                                        42: "17.",
                                        44: "18."
                                    }
                                }
                            },
                            os: {
                                windows: {
                                    version: {
                                        ME: "4.90",
                                        "NT 3.11": "NT3.51",
                                        "NT 4.0": "NT4.0",
                                        2e3: "NT 5.0",
                                        XP: ["NT 5.1", "NT 5.2"],
                                        Vista: "NT 6.0",
                                        7: "NT 6.1",
                                        8: "NT 6.2",
                                        8.1: "NT 6.3",
                                        10: ["NT 6.4", "NT 10.0"],
                                        RT: "ARM"
                                    }
                                }
                            }
                        }, B = {
                            browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [g, [d, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [g, [d, "Edge"]], [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i], [d, g], [/opios[\/\s]+([\w\.]+)/i], [g, [d, "Opera Mini"]], [/\sopr\/([\w\.]+)/i], [g, [d, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i], [d, g], [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [g, [d, "UCBrowser"]], [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i], [g, [d, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [g, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [g, [d, "Konqueror"]], [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i], [g, [d, "IE"]], [/yabrowser\/([\w\.]+)/i], [g, [d, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure Browser"], g], [/focus\/([\w\.]+)/i], [g, [d, "Firefox Focus"]], [/opt\/([\w\.]+)/i], [g, [d, "Opera Touch"]], [/coc_coc_browser\/([\w\.]+)/i], [g, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [g, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [g, [d, "Opera Coast"]], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [g, [d, "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], [g, [d, "Firefox"]], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[d, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 Browser"], g], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], g], [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i], [d, g], [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i], [d], [/;fbav\/([\w\.]+);/i], [g, [d, "Facebook"]], [/FBAN\/FBIOS|FB_IAB\/FB4A/i], [[d, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i], [d, g], [/\bgsa\/([\w\.]+)\s.*safari\//i], [g, [d, "GSA"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [g, [d, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[d, "Chrome WebView"], g], [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i], [g, [d, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [d, g], [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i], [g, [d, "Mobile Safari"]], [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i], [g, d], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [d, [g, k.str, C.browser.oldSafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [d, g], [/(navigator|netscape)\/([\w\.-]+)/i], [[d, "Netscape"], g], [/ile\svr;\srv:([\w\.]+)\).+firefox/i], [g, [d, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [d, g]],
                            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[h, "amd64"]], [/(ia32(?=;))/i], [[h, S.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[h, "ia32"]], [/\b(aarch64|armv?8e?l?)\b/i], [[h, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[h, "armhf"]], [/windows\s(ce|mobile);\sppc;/i], [[h, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[h, /ower/, "", S.lowerize]], [/(sun4\w)[;\)]/i], [[h, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[h, S.lowerize]]],
                            device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i], [u, [f, "Samsung"], [p, v]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i], [u, [f, "Samsung"], [p, m]], [/\((ip(?:hone|od)[\s\w]*);/i], [u, [f, "Apple"], [p, m]], [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [u, [f, "Apple"], [p, v]], [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i], [u, [f, "Huawei"], [p, v]], [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i], [u, [f, "Huawei"], [p, m]], [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i], [[u, /_/g, " "], [f, "Xiaomi"], [p, m]], [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i], [[u, /_/g, " "], [f, "Xiaomi"], [p, v]], [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], [u, [f, "OPPO"], [p, m]], [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i], [u, [f, "Vivo"], [p, m]], [/\s(rmx[12]\d{3})(?:\sbuild|;)/i], [u, [f, "Realme"], [p, m]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i], [u, [f, "Motorola"], [p, m]], [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [u, [f, "Motorola"], [p, v]], [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i], [u, [f, "LG"], [p, v]], [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i], [u, [f, "LG"], [p, m]], [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i], [u, [f, "Lenovo"], [p, v]], [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i], [[u, /_/g, " "], [f, "Nokia"], [p, m]], [/droid.+;\s(pixel\sc)[\s)]/i], [u, [f, "Google"], [p, v]], [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i], [u, [f, "Google"], [p, m]], [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [u, [f, "Sony"], [p, m]], [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i], [[u, "Xperia Tablet"], [f, "Sony"], [p, v]], [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i], [u, [f, "OnePlus"], [p, m]], [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i], [u, [f, "Amazon"], [p, v]], [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i], [[u, "Fire Phone"], [f, "Amazon"], [p, m]], [/\((playbook);[\w\s\),;-]+(rim)/i], [u, f, [p, v]], [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i], [u, [f, "BlackBerry"], [p, m]], [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i], [u, [f, "ASUS"], [p, v]], [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i], [u, [f, "ASUS"], [p, m]], [/(nexus\s9)/i], [u, [f, "HTC"], [p, v]], [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [f, [u, /_/g, " "], [p, m]], [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [u, [f, "Acer"], [p, v]], [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i], [u, [f, "Meizu"], [p, m]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [f, u, [p, m]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i], [f, u, [p, v]], [/\s(surface\sduo)\s/i], [u, [f, "Microsoft"], [p, v]], [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i], [u, [f, "Fairphone"], [p, m]], [/\s(u304aa)\sbuild/i], [u, [f, "AT&T"], [p, m]], [/sie-(\w*)/i], [u, [f, "Siemens"], [p, m]], [/[;\/]\s?(rct\w+)\sbuild/i], [u, [f, "RCA"], [p, v]], [/[;\/\s](venue[\d\s]{2,7})\sbuild/i], [u, [f, "Dell"], [p, v]], [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i], [u, [f, "Verizon"], [p, v]], [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i], [u, [f, "Barnes & Noble"], [p, v]], [/[;\/]\s(tm\d{3}\w+)\sbuild/i], [u, [f, "NuVision"], [p, v]], [/;\s(k88)\sbuild/i], [u, [f, "ZTE"], [p, v]], [/;\s(nx\d{3}j)\sbuild/i], [u, [f, "ZTE"], [p, m]], [/[;\/]\s?(gen\d{3})\sbuild.*49h/i], [u, [f, "Swiss"], [p, m]], [/[;\/]\s?(zur\d{3})\sbuild/i], [u, [f, "Swiss"], [p, v]], [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i], [u, [f, "Zeki"], [p, v]], [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i], [[f, "Dragon Touch"], u, [p, v]], [/[;\/]\s?(ns-?\w{0,9})\sbuild/i], [u, [f, "Insignia"], [p, v]], [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i], [u, [f, "NextBook"], [p, v]], [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i], [[f, "Voice"], u, [p, m]], [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i], [[f, "LvTel"], u, [p, m]], [/;\s(ph-1)\s/i], [u, [f, "Essential"], [p, m]], [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i], [u, [f, "Envizen"], [p, v]], [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i], [u, [f, "MachSpeed"], [p, v]], [/[;\/]\s?tu_(1491)\sbuild/i], [u, [f, "Rotor"], [p, v]], [/(shield[\w\s]+)\sbuild/i], [u, [f, "Nvidia"], [p, v]], [/(sprint)\s(\w+)/i], [f, u, [p, m]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [f, "Microsoft"], [p, m]], [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [u, [f, "Zebra"], [p, v]], [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i], [u, [f, "Zebra"], [p, m]], [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i], [f, u, [p, b]], [/droid.+;\s(shield)\sbuild/i], [u, [f, "Nvidia"], [p, b]], [/(playstation\s[345portablevi]+)/i], [u, [f, "Sony"], [p, b]], [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i], [u, [f, "Microsoft"], [p, b]], [/smart-tv.+(samsung)/i], [f, [p, y]], [/hbbtv.+maple;(\d+)/i], [[u, /^/, "SmartTV"], [f, "Samsung"], [p, y]], [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i], [[f, "LG"], [p, y]], [/(apple)\s?tv/i], [f, [u, "Apple TV"], [p, y]], [/crkey/i], [[u, "Chromecast"], [f, "Google"], [p, y]], [/droid.+aft([\w])(\sbuild\/|\))/i], [u, [f, "Amazon"], [p, y]], [/\(dtv[\);].+(aquos)/i], [u, [f, "Sharp"], [p, y]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[f, S.trim], [u, S.trim], [p, y]], [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i], [[p, y]], [/((pebble))app\/[\d\.]+\s/i], [f, u, [p, x]], [/droid.+;\s(glass)\s\d/i], [u, [f, "Google"], [p, x]], [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i], [u, [f, "Zebra"], [p, x]], [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i], [f, [p, w]], [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i], [u, [p, m]], [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i], [u, [p, v]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[p, S.lowerize]], [/(android[\w\.\s\-]{0,9});.+build/i], [u, [f, "Generic"]], [/(phone)/i], [[p, m]]],
                            engine: [[/windows.+\sedge\/([\w\.]+)/i], [g, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [g, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [d, g], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [g, d]],
                            os: [[/microsoft\s(windows)\s(vista|xp)/i], [d, g], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i], [d, [g, k.str, C.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[d, "Windows"], [g, k.str, C.os.windows.version]], [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i], [[g, /_/g, "."], [d, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i], [[d, "Mac OS"], [g, /_/g, "."]], [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i], [d, g], [/\(bb(10);/i], [g, [d, "BlackBerry"]], [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i], [g, [d, "Symbian"]], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[d, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [g, [d, "webOS"]], [/crkey\/([\d\.]+)/i], [g, [d, "Chromecast"]], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[d, "Chromium OS"], g], [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i], [d, g], [/(sunos)\s?([\w\.\d]*)/i], [[d, "Solaris"], g], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [d, g]]
                        }, A = function (e, t) {
                            if ("object" === typeof e && (t = e, e = i), !(this instanceof A)) return new A(e, t).getResult();
                            var r = e || ("undefined" !== typeof o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                                n = t ? S.extend(B, t) : B;
                            return this.getBrowser = function () {
                                var e = {name: i, version: i};
                                return k.rgx.call(e, r, n.browser), e.major = S.major(e.version), e
                            }, this.getCPU = function () {
                                var e = {architecture: i};
                                return k.rgx.call(e, r, n.cpu), e
                            }, this.getDevice = function () {
                                var e = {vendor: i, model: i, type: i};
                                return k.rgx.call(e, r, n.device), e
                            }, this.getEngine = function () {
                                var e = {name: i, version: i};
                                return k.rgx.call(e, r, n.engine), e
                            }, this.getOS = function () {
                                var e = {name: i, version: i};
                                return k.rgx.call(e, r, n.os), e
                            }, this.getResult = function () {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function () {
                                return r
                            }, this.setUA = function (e) {
                                return r = typeof e === c && e.length > 255 ? S.trim(e, 255) : e, this
                            }, this.setUA(r), this
                        };
                    A.VERSION = "0.7.28", A.BROWSER = {
                        NAME: d,
                        MAJOR: "major",
                        VERSION: g
                    }, A.CPU = {ARCHITECTURE: h}, A.DEVICE = {
                        MODEL: u,
                        VENDOR: f,
                        TYPE: p,
                        CONSOLE: b,
                        MOBILE: m,
                        SMARTTV: y,
                        TABLET: v,
                        WEARABLE: x,
                        EMBEDDED: w
                    }, A.ENGINE = {NAME: d, VERSION: g}, A.OS = {
                        NAME: d,
                        VERSION: g
                    }, typeof t !== s ? (e.exports && (t = e.exports = A), t.UAParser = A) : (n = function () {
                        return A
                    }.call(t, r, t, e)) === i || (e.exports = n);
                    var E = "undefined" !== typeof o && (o.jQuery || o.Zepto);
                    if (E && !E.ua) {
                        var T = new A;
                        E.ua = T.getResult(), E.ua.get = function () {
                            return T.getUA()
                        }, E.ua.set = function (e) {
                            T.setUA(e);
                            var t = T.getResult();
                            for (var r in t) E.ua[r] = t[r]
                        }
                    }
                }("object" === typeof window ? window : this)
            }, xIFI: t => {
                "use strict";
                t.exports = e
            }, Sy2L: e => {
                "use strict";
                e.exports = t
            }, UHkU: e => {
                "use strict";
                e.exports = r
            }
        }, o = {};

        function i(e) {
            var t = o[e];
            if (void 0 !== t) return t.exports;
            var r = o[e] = {id: e, loaded: !1, exports: {}}, a = !0;
            try {
                n[e].call(r.exports, r, r.exports, i), a = !1
            } finally {
                a && delete o[e]
            }
            return r.loaded = !0, r.exports
        }

        return i.amdO = {}, i.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return i.d(t, {a: t}), t
        }, i.d = (e, t) => {
            for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
        }, i.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), i("boyc")
    })()
}));
