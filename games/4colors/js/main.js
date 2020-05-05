/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function c(a, b) {
        var c = -1,
            e = a ? a.length : 0;
        if ("number" == typeof e && -1 < e && e <= y)
            for (; ++c < e;) b(a[c], c, a);
        else d(a, b)
    }

    function b(b) {
        b = String(b).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
    }

    function d(a, b) {
        for (var c in a) x.call(a, c) && b(a[c], c, a)
    }

    function f(b) {
        return null == b ? a(b) : z.call(b).slice(8, -1)
    }

    function g(a, b) {
        var c = null != a ? typeof a[b] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(c) &&
            ("object" == c ? !!a[b] : !0)
    }

    function e(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function k(a, b) {
        var e = null;
        c(a, function(c, d) {
            e = b(e, c, d, a)
        });
        return e
    }

    function l(a) {
        function c(c) {
            return k(c, function(c, d) {
                var r = d.pattern || e(d);
                !c && (c = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((c = String(d.label && !RegExp(r, "i").test(d.label) ? d.label : c).split("/"))[1] && !/[\d.]+/.test(c[0]) && (c[0] +=
                    " " + c[1]), d = d.label || d, c = b(c[0].replace(RegExp(r, "i"), d).replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ").replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return c
            })
        }

        function p(b) {
            return k(b, function(b, c) {
                return b || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var n = m,
            t = a && "object" == typeof a && "String" != f(a);
        t && (n = a, a = null);
        var q = n.navigator || {},
            r = q.userAgent || "";
        a || (a = r);
        var J = t ? !!q.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(z.toString()),
            S = t ? "Object" : "ScriptBridgingProxyObject",
            y = t ? "Object" : "Environment",
            x = t && n.java ? "JavaPackage" : f(n.java),
            A = t ? "Object" : "RuntimeObject";
        y = (x = /\bJava/.test(x) && n.java) && f(n.environment) == y;
        var T = x ? "a" : "\u03b1",
            U = x ? "b" : "\u03b2",
            P = n.document || {},
            F = n.operamini || n.opera,
            K = v.test(K = t && F ? F["[[Class]]"] : f(F)) ? K : F = null,
            h, L = a;
        t = [];
        var M = null,
            G = a == r;
        r = G && F && "function" == typeof F.version && F.version();
        var B = function(b) {
                return k(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || e(c)) + "\\b", "i").exec(a) && (c.label ||
                        c)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            u = function(b) {
                return k(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || e(c)) + "\\b", "i").exec(a) && (c.label || c)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                },
                {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"
            ]),
            C = c([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad",
                "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"
            ]),
            E = function(b) {
                return k(b, function(b, c, d) {
                    return b || (c[C] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)] || RegExp("\\b" + e(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) && d
                })
            }({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                }
            }),
            w = function(c) {
                return k(c, function(c, d) {
                    var r = d.pattern || e(d);
                    if (!c && (c = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var k = c,
                            l = d.label || d,
                            g = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            };
                        r && l && /^Win/i.test(k) && !/^Windows Phone /i.test(k) && (g = g[/[\d.]+$/.exec(k)]) && (k = "Windows " + g);
                        k = String(k);
                        r && l && (k = k.replace(RegExp(r, "i"), l));
                        c = k = b(k.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return c
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        B && (B = [B]);
        E && !C && (C = c([E]));
        if (h = /\bGoogle TV\b/.exec(C)) C = h[0];
        /\bSimulator\b/i.test(a) && (C = (C ? C + " " : "") + "Simulator");
        "Opera Mini" == u && /\bOPiOS\b/.test(a) && t.push("running in Turbo/Uncompressed mode");
        "IE" == u && /\blike iPhone OS\b/.test(a) ? (h = l(a.replace(/like iPhone OS/, "")), E = h.manufacturer, C = h.product) : /^iP/.test(C) ? (u || (u = "Safari"), w = "iOS" + ((h = / OS ([\d_]+)/i.exec(a)) ? " " + h[1].replace(/_/g, ".") : "")) : "Konqueror" != u || /buntu/i.test(w) ? E && "Google" != E && (/Chrome/.test(u) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(C)) || /\bAndroid\b/.test(w) && /^Chrome/.test(u) && /\bVersion\//i.test(a) ? (u = "Android Browser", w = /\bAndroid\b/.test(w) ? w : "Android") : "Silk" == u ? (/\bMobi/i.test(a) || (w = "Android", t.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && t.unshift("accelerated")) : "PaleMoon" == u && (h = /\bFirefox\/([\d.]+)\b/.exec(a)) ? t.push("identifying as Firefox " + h[1]) : "Firefox" == u && (h = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (w || (w = "Firefox OS"), C || (C = h[1])) : !u || (h = !/\bMinefield\b/i.test(a) &&
            /\b(?:Firefox|Safari)\b/.exec(u)) ? (u && !C && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(h + "/") + 8)) && (u = null), (h = C || E || w) && (C || E || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(w)) && (u = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(w) ? w : h) + " Browser")) : "Electron" == u && (h = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && t.push("Chromium " + h) : w = "Kubuntu";
        r || (r = p(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", e(u), "(?:Firefox|Minefield|NetFront)"]));
        if (h = "iCab" == B && 3 < parseFloat(r) && "WebKit" || /\bOpera\b/.test(u) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(B) && "WebKit" || !B && /\bMSIE\b/i.test(a) && ("Mac OS" == w ? "Tasman" : "Trident") || "WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront") B = [h];
        "IE" == u && (h = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (u += " Mobile", w = "Windows Phone " + (/\+$/.test(h) ? h : h + ".x"), t.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (u = "IE Mobile", w = "Windows Phone 8.x",
            t.unshift("desktop mode"), r || (r = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != u && "Trident" == B && (h = /\brv:([\d.]+)/.exec(a)) && (u && t.push("identifying as " + u + (r ? " " + r : "")), u = "IE", r = h[1]);
        if (G) {
            if (g(n, "global"))
                if (x && (h = x.lang.System, L = h.getProperty("os.arch"), w = w || h.getProperty("os.name") + " " + h.getProperty("os.version")), y) {
                    try {
                        r = n.require("ringo/engine").version.join("."), u = "RingoJS"
                    } catch (R) {
                        (h = n.system) && h.global.system == n.system && (u = "Narwhal", w || (w = h[0].os || null))
                    }
                    u || (u = "Rhino")
                } else "object" == typeof n.process &&
                    !n.process.browser && (h = n.process) && ("object" == typeof h.versions && ("string" == typeof h.versions.electron ? (t.push("Node " + h.versions.node), u = "Electron", r = h.versions.electron) : "string" == typeof h.versions.nw && (t.push("Chromium " + r, "Node " + h.versions.node), u = "NW.js", r = h.versions.nw)), u || (u = "Node.js", L = h.arch, w = h.platform, r = (r = /[\d.]+/.exec(h.version)) ? r[0] : null));
            else f(h = n.runtime) == S ? (u = "Adobe AIR", w = h.flash.system.Capabilities.os) : f(h = n.phantom) == A ? (u = "PhantomJS", r = (h = h.version || null) && h.major + "." + h.minor +
                "." + h.patch) : "number" == typeof P.documentMode && (h = /\bTrident\/(\d+)/i.exec(a)) ? (r = [r, P.documentMode], (h = +h[1] + 4) != r[1] && (t.push("IE " + r[1] + " mode"), B && (B[1] = ""), r[1] = h), r = "IE" == u ? String(r[1].toFixed(1)) : r[0]) : "number" == typeof P.documentMode && /^(?:Chrome|Firefox)\b/.test(u) && (t.push("masking as " + u + " " + r), u = "IE", r = "11.0", B = ["Trident"], w = "Windows");
            w = w && b(w)
        }
        r && (h = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(r) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (G && q.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (M = /b/i.test(h) ? "beta" : "alpha", r = r.replace(RegExp(h + "\\+?$"), "") + ("beta" == M ? U : T) + (/\d+\+?/.exec(h) || ""));
        if ("Fennec" == u || "Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(w)) u = "Firefox Mobile";
        else if ("Maxthon" == u && r) r = r.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(C)) "Xbox 360" == C && (w = null), "Xbox 360" == C && /\bIEMobile\b/.test(a) && t.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(u) && (!u || C || /Browser|Mobi/.test(u)) || "Windows CE" != w && !/Mobi/i.test(a))
            if ("IE" == u && G) try {
                null === n.external &&
                    t.unshift("platform preview")
            } catch (R) {
                t.unshift("embedded")
            } else(/\bBlackBerry\b/.test(C) || /\bBB10\b/.test(a)) && (h = (RegExp(C.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || r) ? (h = [h, /BB10/.test(a)], w = (h[1] ? (C = null, E = "BlackBerry") : "Device Software") + " " + h[0], r = null) : this != d && "Wii" != C && (G && F || /Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(w) || "IE" == u && (w && !/^Win/.test(w) && 5.5 < r || /\bWindows XP\b/.test(w) && 8 < r || 8 == r && !/\bTrident\b/.test(a))) && !v.test(h =
                l.call(d, a.replace(v, "") + ";")) && h.name && (h = "ing as " + h.name + ((h = h.version) ? " " + h : ""), v.test(u) ? (/\bIE\b/.test(h) && "Mac OS" == w && (w = null), h = "identify" + h) : (h = "mask" + h, u = K ? b(K.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(h) && (w = null), G || (r = null)), B = ["Presto"], t.push(h));
            else u += " Mobile";
        if (h = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            h = [parseFloat(h.replace(/\.(\d)$/, ".0$1")), h];
            if ("Safari" == u && "+" == h[1].slice(-1)) u = "WebKit Nightly", M = "alpha", r = h[1].slice(0, -1);
            else if (r == h[1] || r == (h[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) r = null;
            h[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == h[0] && 537.36 == h[2] && 28 <= parseFloat(h[1]) && "WebKit" == B && (B = ["Blink"]);
            G && (J || h[1]) ? (B && (B[1] = "like Chrome"), h = h[1] || (h = h[0], 530 > h ? 1 : 532 > h ? 2 : 532.05 > h ? 3 : 533 > h ? 4 : 534.03 > h ? 5 : 534.07 > h ? 6 : 534.1 > h ? 7 : 534.13 > h ? 8 : 534.16 > h ? 9 : 534.24 > h ? 10 : 534.3 > h ? 11 : 535.01 > h ? 12 : 535.02 > h ? "13+" : 535.07 > h ? 15 : 535.11 > h ? 16 : 535.19 > h ? 17 : 536.05 > h ? 18 : 536.1 > h ? 19 : 537.01 > h ? 20 : 537.11 > h ? "21+" : 537.13 > h ? 23 : 537.18 > h ? 24 : 537.24 > h ? 25 : 537.36 > h ? 26 : "Blink" !=
                B ? "27" : "28")) : (B && (B[1] = "like Safari"), h = (h = h[0], 400 > h ? 1 : 500 > h ? 2 : 526 > h ? 3 : 533 > h ? 4 : 534 > h ? "4+" : 535 > h ? 5 : 537 > h ? 6 : 538 > h ? 7 : 601 > h ? 8 : "8"));
            B && (B[1] += " " + (h += "number" == typeof h ? ".x" : /[.+]/.test(h) ? "" : "+"));
            "Safari" == u && (!r || 45 < parseInt(r)) && (r = h)
        }
        "Opera" == u && (h = /\bzbov|zvav$/.exec(w)) ? (u += " ", t.unshift("desktop mode"), "zvav" == h ? (u += "Mini", r = null) : u += "Mobile", w = w.replace(RegExp(" *" + h + "$"), "")) : "Safari" == u && /\bChrome\b/.exec(B && B[1]) && (t.unshift("desktop mode"), u = "Chrome Mobile", r = null, /\bOS X\b/.test(w) ? (E =
            "Apple", w = "iOS 4.3+") : w = null);
        r && 0 == r.indexOf(h = /[\d.]+$/.exec(w)) && -1 < a.indexOf("/" + h + "-") && (w = String(w.replace(h, "")).replace(/^ +| +$/g, ""));
        B && !/\b(?:Avant|Nook)\b/.test(u) && (/Browser|Lunascape|Maxthon/.test(u) || "Safari" != u && /^iOS/.test(w) && /\bSafari\b/.test(B[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(u) && B[1]) && (h = B[B.length - 1]) && t.push(h);
        t.length && (t = ["(" + t.join("; ") + ")"]);
        E && C && 0 > C.indexOf(E) && t.push("on " + E);
        C && t.push((/^on /.test(t[t.length -
            1]) ? "" : "on ") + C);
        if (w) {
            var Q = (h = / ([\d.+]+)$/.exec(w)) && "/" == w.charAt(w.length - h[0].length - 1);
            w = {
                architecture: 32,
                family: h && !Q ? w.replace(h[0], "") : w,
                version: h ? h[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !Q ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(h = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(L)) && !/\bi686\b/i.test(L) ? (w && (w.architecture = 64, w.family = w.family.replace(RegExp(" *" + h), "")), u && (/\bWOW64\b/i.test(a) || G && /\w(?:86|32)$/.test(q.cpuClass || q.platform) && !/\bWin64; x64\b/i.test(a)) &&
            t.unshift("32-bit")) : w && /^OS X/.test(w.family) && "Chrome" == u && 39 <= parseFloat(r) && (w.architecture = 64);
        a || (a = null);
        n = {};
        n.description = a;
        n.layout = B && B[0];
        n.manufacturer = E;
        n.name = u;
        n.prerelease = M;
        n.product = C;
        n.ua = a;
        n.version = u && r;
        n.os = w || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        n.parse = l;
        n.toString = function() {
            return this.description || ""
        };
        n.version && t.unshift(r);
        n.name && t.unshift(u);
        w && u && (w != String(w).split(" ")[0] || w != u.split(" ")[0] && !C) && t.push(C ? "(" + w + ")" : "on " +
            w);
        t.length && (n.description = t.join(" "));
        return n
    }
    var p = {
            "function": !0,
            object: !0
        },
        m = p[typeof window] && window || this,
        n = p[typeof exports] && exports;
    p = p[typeof module] && module && !module.nodeType && module;
    var q = n && p && "object" == typeof global && global;
    !q || q.global !== q && q.window !== q && q.self !== q || (m = q);
    var y = Math.pow(2, 53) - 1,
        v = /\bOpera/;
    q = Object.prototype;
    var x = q.hasOwnProperty,
        z = q.toString,
        A = l();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (m.platform = A, define(function() {
            return A
        })) : n &&
        p ? d(A, function(a, b) {
            n[b] = a
        }) : m.platform = A
}).call(this);

function buildIOSMeta() {
    for (var a = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], c = 0; c < a.length; c++) {
        var b = document.createElement("meta");
        b.name = a[c].name;
        b.content = a[c].content;
        var d = window.document.head.querySelector('meta[name="' + b.name + '"]');
        d && d.parentNode.removeChild(d);
        window.document.head.appendChild(b)
    }
}

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
    window.scrollTo(0, 0);
    console.log(window.devicePixelRatio);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
    }
}

function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}

function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function isIOSLessThen13() {
    var a = platform.os,
        c = a.family.toLowerCase();
    a = parseFloat(a.version);
    return "ios" === c && 13 > a ? !0 : !1
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && iosResize()
});
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        c = "undefined" !== typeof module && module.exports,
        b = function() {
            for (var b, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], d = 0, l = c.length, f = {}; d < l; d++)
                if ((b = c[d]) && b[1] in a) {
                    for (d = 0; d < b.length; d++) f[c[0][d]] = b[d];
                    return f
                }
            return !1
        }(),
        d = {
            change: b.fullscreenchange,
            error: b.fullscreenerror
        },
        f = {
            request: function(c) {
                return new Promise(function(d, k) {
                    var e = function() {
                        this.off("change",
                            e);
                        d()
                    }.bind(this);
                    this.on("change", e);
                    c = c || a.documentElement;
                    Promise.resolve(c[b.requestFullscreen]())["catch"](k)
                }.bind(this))
            },
            exit: function() {
                return new Promise(function(c, d) {
                    if (this.isFullscreen) {
                        var e = function() {
                            this.off("change", e);
                            c()
                        }.bind(this);
                        this.on("change", e);
                        Promise.resolve(a[b.exitFullscreen]())["catch"](d)
                    } else c()
                }.bind(this))
            },
            toggle: function(a) {
                return this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(b, c) {
                var e = d[b];
                e && a.addEventListener(e, c, !1)
            },
            off: function(b, c) {
                var e = d[b];
                e && a.removeEventListener(e, c, !1)
            },
            raw: b
        };
    b ? (Object.defineProperties(f, {
        isFullscreen: {
            get: function() {
                return !!a[b.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[b.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return !!a[b.fullscreenEnabled]
            }
        }
    }), c ? module.exports = f : window.screenfull = f) : c ? module.exports = {
        isEnabled: !1
    } : window.screenfull = {
        isEnabled: !1
    }
})();
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent ||
    navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function getSize(a) {
    var c = a.toLowerCase(),
        b = window.document,
        d = b.documentElement;
    if (void 0 === window["inner" + a]) a = d["client" + a];
    else if (window["inner" + a] != d["client" + a]) {
        var f = b.createElement("body");
        f.id = "vpw-test-b";
        f.style.cssText = "overflow:scroll";
        var g = b.createElement("div");
        g.id = "vpw-test-d";
        g.style.cssText = "position:absolute;top:-1000px";
        g.innerHTML = "<style>@media(" + c + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
        f.appendChild(g);
        d.insertBefore(f, b.head);
        a = 7 == g["offset" + a] ? d["client" + a] : window["inner" + a];
        d.removeChild(f)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isMobile() {
    return isIpad() ? !0 : jQuery.browser.mobile
}

function isIpad() {
    var a = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
    return !a && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : a
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var c = getSize("Width");
        _checkOrientation(c, a);
        var b = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH),
            d = Math.round(CANVAS_WIDTH * b);
        b = Math.round(CANVAS_HEIGHT * b);
        if (b < a) {
            var f = a - b;
            b += f;
            d += CANVAS_WIDTH / CANVAS_HEIGHT * f
        } else d < c && (f = c - d, d += f, b += CANVAS_HEIGHT / CANVAS_WIDTH * f);
        f = a / 2 - b / 2;
        var g = c / 2 - d / 2,
            e = CANVAS_WIDTH / d;
        if (g * e < -EDGEBOARD_X || f * e < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT -
            2 * EDGEBOARD_Y), c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = Math.round(CANVAS_WIDTH * b), b = Math.round(CANVAS_HEIGHT * b), f = (a - b) / 2, g = (c - d) / 2, e = CANVAS_WIDTH / d;
        s_iOffsetX = -1 * g * e;
        s_iOffsetY = -1 * f * e;
        0 <= f && (s_iOffsetY = 0);
        0 <= g && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos();
        null !== s_oMenu && s_oMenu.refreshButtonPos();
        null !== s_oSelectPlayers && s_oSelectPlayers.refreshButtonPos();
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * d, s_oStage.canvas.height = 2 * b, canvas.style.width =
            d + "px", canvas.style.height = b + "px", s_oStage.scaleX = s_oStage.scaleY = 2 * Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT)) : s_bMobile || isChrome() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = d, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > f || (f = (a - b) / 2);
        $("#canvas").css("top", f + "px");
        $("#canvas").css("left", g + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, c) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > c ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function playSound(a, c, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(c), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(c)
}

function setMute(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(c)
}

function createBitmap(a, c, b) {
    var d = new createjs.Bitmap(a),
        f = new createjs.Shape;
    c && b ? f.graphics.beginFill("#fff").drawRect(0, 0, c, b) : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    d.hitArea = f;
    return d
}

function createSprite(a, c, b, d, f, g) {
    a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
    c = new createjs.Shape;
    c.graphics.beginFill("#000000").drawRect(-b, -d, f, g);
    a.hitArea = c;
    return a
}

function pad(a, c, b) {
    a += "";
    return a.length >= c ? a : Array(c - a.length + 1).join(b || "0") + a
}

function randomFloatBetween(a, c, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b))
}

function rotateVector2D(a, c) {
    var b = c.getX() * Math.cos(a) + c.getY() * Math.sin(a),
        d = c.getX() * -Math.sin(a) + c.getY() * Math.cos(a);
    c.set(b, d)
}

function tweenVectorsOnX(a, c, b) {
    return a + b * (c - a)
}

function shuffle(a) {
    for (var c = a.length, b, d; 0 !== c;) d = Math.floor(Math.random() * c), --c, b = a[c], a[c] = a[d], a[d] = b;
    return a
}

function bubbleSort(a) {
    do {
        var c = !1;
        for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && (c = a[b], a[b] = a[b + 1], a[b + 1] = c, c = !0)
    } while (c)
}

function compare(a, c) {
    return a.index > c.index ? -1 : a.index < c.index ? 1 : 0
}

function easeLinear(a, c, b, d) {
    return b * a / d + c
}

function easeInQuad(a, c, b, d) {
    return b * (a /= d) * a + c
}

function easeInSine(a, c, b, d) {
    return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
}

function easeInCubic(a, c, b, d) {
    return b * (a /= d) * a * a + c
}

function getTrajectoryPoint(a, c) {
    var b = new createjs.Point,
        d = (1 - a) * (1 - a),
        f = a * a;
    b.x = d * c.start.x + 2 * (1 - a) * a * c.traj.x + f * c.end.x;
    b.y = d * c.start.y + 2 * (1 - a) * a * c.traj.y + f * c.end.y;
    return b
}

function formatTime(a) {
    a /= 1E3;
    var c = Math.floor(a / 60);
    a = parseFloat(a - 60 * c).toFixed(1);
    var b = "";
    b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, c) {
    var b = getBounds(a, .9);
    var d = getBounds(c, .98);
    return calculateIntersection(b, d)
}

function calculateIntersection(a, c) {
    var b, d, f, g;
    var e = a.x + (b = a.width / 2);
    var k = a.y + (d = a.height / 2);
    var l = c.x + (f = c.width / 2);
    var p = c.y + (g = c.height / 2);
    e = Math.abs(e - l) - (b + f);
    k = Math.abs(k - p) - (d + g);
    return 0 > e && 0 > k ? (e = Math.min(Math.min(a.width, c.width), -e), k = Math.min(Math.min(a.height, c.height), -k), {
        x: Math.max(a.x, c.x),
        y: Math.max(a.y, c.y),
        width: e,
        height: k,
        rect1: a,
        rect2: c
    }) : null
}

function getBounds(a, c) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var d = a.children,
            f = d.length,
            g;
        for (g = 0; g < f; g++) {
            var e = getBounds(d[g], 1);
            e.x < b.x && (b.x = e.x);
            e.y < b.y && (b.y = e.y);
            e.x + e.width > b.x2 && (b.x2 = e.x + e.width);
            e.y + e.height > b.y2 && (b.y2 = e.y + e.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            f =
                a.sourceRect || a.image;
            g = f.width * c;
            var k = f.height * c
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                f = a.spriteSheet.getFrame(a.currentFrame);
                g = f.rect.width;
                k = f.rect.height;
                d = f.regX;
                var l = f.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
        else b.x = a.x || 0, b.y = a.y || 0;
        d = d || 0;
        g = g || 0;
        l = l || 0;
        k = k || 0;
        b.regX = d;
        b.regY = l;
        f = a.localToGlobal(0 - d, 0 - l);
        e = a.localToGlobal(g - d, k - l);
        g = a.localToGlobal(g - d, 0 - l);
        d = a.localToGlobal(0 - d, k - l);
        b.x =
            Math.min(Math.min(Math.min(f.x, e.x), g.x), d.x);
        b.y = Math.min(Math.min(Math.min(f.y, e.y), g.y), d.y);
        b.width = Math.max(Math.max(Math.max(f.x, e.x), g.x), d.x) - b.x;
        b.height = Math.max(Math.max(Math.max(f.y, e.y), g.y), d.y) - b.y
    }
    return b
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var c = a.length, b, d; 0 < c;) d = Math.floor(Math.random() * c), c--, b = a[c], a[c] = a[d], a[d] = b;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            a.dispatchEvent(c)
        }
    }
};
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        if (a.type in b) document.body.className = b[a.type];
        else if (document.body.className = this[c] ? "hidden" : "visible", "hidden" === document.body.className) {
            if (s_oMain.stopUpdate(), !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) createjs.Sound.muted = !0
        } else s_oMain.startUpdate(), !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || !0 !== s_bAudioActive || (createjs.Sound.muted = !1)
    }
    var c = "hidden";
    c in document ? document.addEventListener("visibilitychange", a) : (c = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (c = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", a) : (c = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && (s_oMain.startUpdate(), !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && (createjs.Sound.muted = !0)
}

function ctlArcadePause() {
    null !== s_oMain && (s_oMain.stopUpdate(), !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || !0 !== s_bAudioActive || (createjs.Sound.muted = !1))
}

function getParamValue(a) {
    for (var c = window.location.search.substring(1).split("&"), b = 0; b < c.length; b++) {
        var d = c[b].split("=");
        if (d[0] == a) return d[1]
    }
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oSelectPlayers && s_oSelectPlayers.resetFullscreenBut())
}
if (screenfull.isEnabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oSelectPlayers && s_oSelectPlayers.resetFullscreenBut()
});

function CSpriteLibrary() {
    var a = {},
        c, b, d, f, g, e;
    this.init = function(a, l, p) {
        c = {};
        d = b = 0;
        f = a;
        g = l;
        e = p
    };
    this.addSprite = function(d, e) {
        if (!a.hasOwnProperty(d)) {
            var l = new Image;
            a[d] = c[d] = {
                szPath: e,
                oSprite: l,
                bLoaded: !1
            };
            b++
        }
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        b = 0;
        g.call(e)
    };
    this._onSpriteLoaded = function() {
        f.call(e);
        ++d === b && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var a in c) c[a].oSprite.oSpriteLibrary = this, c[a].oSprite.szKey =
            a, c[a].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }, c[a].oSprite.onerror = function(a) {
                var b = a.currentTarget;
                setTimeout(function() {
                    c[b.szKey].oSprite.src = c[b.szKey].szPath
                }, 500)
            }, c[a].oSprite.src = c[a].szPath
    };
    this.setLoaded = function(b) {
        a[b].bLoaded = !0
    };
    this.isLoaded = function(b) {
        return a[b].bLoaded
    };
    this.getNumSprites = function() {
        return b
    }
}
var CANVAS_WIDTH = 1920,
    CANVAS_HEIGHT = 1080,
    EDGEBOARD_X = 256,
    EDGEBOARD_Y = 84,
    PRIMARY_FONT = "comfortaabold",
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    ENABLE_FULLSCREEN = !0,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    STATE_SELECT_PLAYERS = 4,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ON_CARD_DEALED = 6,
    ENABLE_CHECK_ORIENTATION, AD_SHOW_COUNTER, NUM_PLAYERS, STARTING_NUM_CARDS, CARD_WIDTH = 156,
    CARD_HEIGHT = 242,
    SOUNDTRACK_VOLUME_IN_GAME = .4,
    aHandPos = [];
aHandPos.num_player_2 = [{
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2 + 350
}, {
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2 - 350
}];
aHandPos.num_player_3 = [{
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2 + 350
}, {
    x: CANVAS_WIDTH / 2 - 650,
    y: CANVAS_HEIGHT / 2 - 40
}, {
    x: CANVAS_WIDTH / 2 + 650,
    y: CANVAS_HEIGHT / 2
}];
aHandPos.num_player_4 = [{
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2 + 350
}, {
    x: CANVAS_WIDTH / 2 - 650,
    y: CANVAS_HEIGHT / 2 - 40
}, {
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2 - 350
}, {
    x: CANVAS_WIDTH / 2 + 650,
    y: CANVAS_HEIGHT / 2 - 40
}];
TEXT_GAMEOVER = "CONGRATULATION! YOU WON!";
TEXT_LOSE = "SORRY, THE PLAYER ";
TEXT_LOSE2 = " WON THIS GAME";
TEXT_SCORE = "YOUR SCORE";
TEXT_RESTART = "RESTART";
TEXT_MOVES = "MOVES";
TEXT_ARE_SURE = "ARE YOU SURE?";
TEXT_SELECT_PLAYERS = "SELECT THE NUMBER OF PLAYERS!";
TEXT_SELECT_COLOR = "SELECT A COLOR ";
TEXT_TUTORIAL1 = "WELCOME TO FOUR COLORS! MATCH CARDS BY COLOR OR NUMBER AND BE THE FIRST TO GET RID OF THEM!";
TEXT_TUTORIAL2 = "ACTION CARDS WILL MIX THE GAME UP!\n\nDRAW TWO FORCES THE NEXT PLAYER TO PICK TWO CARDS AND FORFEIT THE TURN";
TEXT_TUTORIAL3 = "SKIP CARD STOPS THE NEXT PLAYER";
TEXT_TUTORIAL4 = "REVERSE CARD SWITCHES THE GAME WISE";
TEXT_TUTORIAL5 = "THE WILD CARD CAN BE PLACED ON ANY CARD AT ANY TIME AND ALLOWS YOU TO CHANGE THE COLOR TO PLAY ";
TEXT_TUTORIAL6 = "THE WILD DRAW FOUR IS A SPECIAL WILD THAT ALLOWS YOU TO CHANGE THE COLOR AND FORCES THE NEXT PLAYER TO PICK 4 CARDS. TO USE THIS CARD YOU MUST HAVE NO OTHER ALTERNATIVE CARDS TO PLAY";
TEXT_TUTORIAL7 = "DO NOT FORGET TO PRESS THE 1 BUTTON WHEN YOU'LL HAVE ONLY ONE CARD LEFT OR YOU'LL PICK 2 PENALTY CARDS!";
TEXT_PLAYER_1 = "PLAYER 1";
TEXT_PLAYER_2 = "PLAYER 2";
TEXT_PLAYER_3 = "PLAYER 3";
TEXT_PLAYER_4 = "PLAYER 4";
TEXT_ALERT_1 = "YOU MUST PRESS ' 1 ' BUTTON WHEN YOU HAVE JUST ONE CARD. TWO CARDS PENALITY";
var TEXT_PRELOADER_CONTINUE = "START",
    TEXT_DEVELOPED = "DEVELOPED BY";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, c, b, d, f, g, e, k, l, p;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        p = new createjs.Container;
        s_oStage.addChild(p)
    };
    this.unload = function() {
        p.removeAllChildren();
        l.unload()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p.addChild(m);
        m = s_oSpriteLibrary.getSprite("200x200");
        e = createBitmap(m);
        e.regX = .5 * m.width;
        e.regY = .5 * m.height;
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 - 180;
        p.addChild(e);
        k = new createjs.Shape;
        k.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(e.x - 100, e.y - 100, 200, 200, 10);
        p.addChild(k);
        e.mask = k;
        m = s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(m);
        d.x = CANVAS_WIDTH / 2 - m.width / 2;
        d.y = CANVAS_HEIGHT / 2 + 50;
        p.addChild(d);
        a = m.width;
        c = m.height;
        f = new createjs.Shape;
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, c);
        p.addChild(f);
        d.mask = f;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 + 100;
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        p.addChild(b);
        m = s_oSpriteLibrary.getSprite("but_start");
        l = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT /
            2, m, TEXT_PRELOADER_CONTINUE, "Arial", "#000", "bold 50", p);
        l.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        l.setVisible(!1);
        g = new createjs.Shape;
        g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p.addChild(g);
        createjs.Tween.get(g).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(g);
            p.removeChild(g)
        })
    };
    this._onButStartRelease = function() {
        s_oMain.onRemovePreloader()
    };
    this.refreshLoader = function(e) {
        b.text = e + "%";
        100 === e && (s_oMain.onRemovePreloader(), b.visible = !1, d.visible = !1);
        f.graphics.clear();
        e = Math.floor(e * a / 100);
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, e, c)
    };
    this._init()
}

function CMain(a) {
    var c, b = 0,
        d = 0,
        f = STATE_LOADING,
        g, e;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !0;
        createjs.Touch.enable(s_oStage);
        s_bMobile = isMobile();
        !1 === s_bMobile && (s_oStage.enableMouseOver(FPS), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) &&
            (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        g = new CPreloader
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        c = !0
    };
    this.soundLoaded = function() {
        b++;
        g.refreshLoader(Math.floor(b / d * 100))
    };
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "card_dealing",
            loop: !1,
            volume: 1,
            ingamename: "card_dealing"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "snap",
            loop: !1,
            volume: 1,
            ingamename: "snap"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "card",
            loop: !1,
            volume: 1,
            ingamename: "card"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "special_card",
            loop: !1,
            volume: 1,
            ingamename: "special_card"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "change_color",
            loop: !1,
            volume: 1,
            ingamename: "change_color"
        });
        d += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var a = 0; a < s_aSoundsInfo.length; a++) this.tryToLoadSound(s_aSoundsInfo[a], !1)
    };
    this.tryToLoadSound = function(a, b) {
        setTimeout(function() {
            s_aSounds[a.ingamename] = new Howl({
                src: [a.path + a.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: a.loop,
                volume: a.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(a, b) {
                    for (var c = 0; c < s_aSoundsInfo.length; c++)
                        if (a === s_aSounds[s_aSoundsInfo[c].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[c], !0);
                            break
                        }
                },
                onplayerror: function(a) {
                    for (var b = 0; b < s_aSoundsInfo.length; b++)
                        if (a === s_aSounds[s_aSoundsInfo[b].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[b].ingamename].once("unlock", function() {
                                s_aSounds[s_aSoundsInfo[b].ingamename].play();
                                "soundtrack" === s_aSoundsInfo[b].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, b ? 200 : 0)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play",
            "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("credits_panel", "./sprites/credits_panel.png");
        s_oSpriteLibrary.addSprite("select_color_panel", "./sprites/select_color_panel.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big", "./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("but_exit_big", "./sprites/but_exit_big.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_uno", "./sprites/but_uno.png");
        s_oSpriteLibrary.addSprite("but_p2", "./sprites/but_p2.png");
        s_oSpriteLibrary.addSprite("but_p3", "./sprites/but_p3.png");
        s_oSpriteLibrary.addSprite("but_p4", "./sprites/but_p4.png");
        s_oSpriteLibrary.addSprite("but_red", "./sprites/_oButRed.png");
        s_oSpriteLibrary.addSprite("but_green", "./sprites/_oButGreen.png");
        s_oSpriteLibrary.addSprite("but_blue", "./sprites/_oButBlue.png");
        s_oSpriteLibrary.addSprite("but_yellow", "./sprites/_oButYellow.png");
        s_oSpriteLibrary.addSprite("stop_turn", "./sprites/stop_turn.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_select_players", "./sprites/bg_select_players.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon",
            "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("but_skip", "./sprites/but_skip.png");
        s_oSpriteLibrary.addSprite("line_player", "./sprites/line_players.png");
        s_oSpriteLibrary.addSprite("cards", "./sprites/cards.png");
        s_oSpriteLibrary.addSprite("colors", "./sprites/colors.png");
        s_oSpriteLibrary.addSprite("draw_four_anim", "./sprites/draw_4.png");
        s_oSpriteLibrary.addSprite("draw_two_anim",
            "./sprites/draw_2.png");
        s_oSpriteLibrary.addSprite("stop_turn_anim", "./sprites/stop_turn.png");
        s_oSpriteLibrary.addSprite("clock_wise_anim", "./sprites/change_clockwise.png");
        s_oSpriteLibrary.addSprite("change_color", "./sprites/change_color.png");
        s_oSpriteLibrary.addSprite("cloud_uno", "./sprites/cloud.png");
        s_oSpriteLibrary.addSprite("finger", "./sprites/finger.png");
        s_oSpriteLibrary.addSprite("shuffle_anim", "./sprites/shuffle_anim.png");
        d += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        g.refreshLoader(Math.floor(b / d * 100))
    };
    this._onAllImagesLoaded = function() {};
    this.onRemovePreloader = function() {
        g.unload();
        s_oSoundtrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        f = STATE_MENU
    };
    this.gotoSelectPlayers = function() {
        new CSelectPlayers;
        f = STATE_SELECT_PLAYERS
    };
    this.gotoGame = function(a) {
        s_bFirstGame = !1 === a ? !1 : !0;
        e = new CGame(k);
        f = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        f = STATE_HELP
    };
    this.stopUpdate = function() {
        c = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== c) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps =
                s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            f === STATE_GAME && e.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var k = a;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    ENABLE_FULLSCREEN = a.fullscreen;
    s_bAudioActive = a.audio_enable_on_startup;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_bFullscreen = !1,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundtrack = null,
    s_oCanvas, s_bFirstGame = !1,
    s_aSounds, s_aSoundsInfo;

function CTextButton(a, c, b, d, f, g, e, k) {
    var l, p, m, n, q, y, v, x, z, A, t, D;
    this._init = function(a, b, c, d, e, k, f, g) {
        l = !1;
        n = [];
        q = [];
        D = createBitmap(c);
        p = c.width;
        m = c.height;
        var r = Math.ceil(f / 20);
        A = new createjs.Text(d, f + "px " + e, "#000000");
        var J = A.getBounds();
        A.textAlign = "center";
        A.lineWidth = .9 * p;
        A.textBaseline = "alphabetic";
        A.x = c.width / 2 + r;
        A.y = Math.floor(c.height / 2) + J.height / 3 + r;
        t = new createjs.Text(d, f + "px " + e, k);
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        t.lineWidth = .9 * p;
        t.x = c.width / 2;
        t.y = Math.floor(c.height /
            2) + J.height / 3;
        z = new createjs.Container;
        z.x = a;
        z.y = b;
        z.regX = c.width / 2;
        z.regY = c.height / 2;
        s_bMobile || (z.cursor = "pointer");
        z.addChild(D, A, t);
        !1 !== g && s_oStage.addChild(z);
        this._initListener()
    };
    this.unload = function() {
        z.off("mousedown", v);
        z.off("pressup", x);
        s_oStage.removeChild(z)
    };
    this.setVisible = function(a) {
        z.visible = a
    };
    this.setAlign = function(a) {
        t.textAlign = a;
        A.textAlign = a
    };
    this.enable = function() {
        l = !1;
        D.filters = [];
        D.cache(0, 0, p, m)
    };
    this.disable = function() {
        l = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        D.filters = [new createjs.ColorMatrixFilter(a)];
        D.cache(0, 0, p, m)
    };
    this._initListener = function() {
        v = z.on("mousedown", this.buttonDown);
        x = z.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        n[a] = b;
        q[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        n[a] = b;
        q[a] = c;
        y = d
    };
    this.buttonRelease = function() {
        l || (playSound("click", 1, !1), z.scaleX = 1, z.scaleY = 1, n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(q[ON_MOUSE_UP], y))
    };
    this.buttonDown = function() {
        l || (z.scaleX = .9, z.scaleY = .9, n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        z.x = a;
        z.y = b
    };
    this.changeText = function(a) {
        t.text = a;
        A.text = a
    };
    this.setX = function(a) {
        z.x = a
    };
    this.setY = function(a) {
        z.y = a
    };
    this.getButtonImage = function() {
        return z
    };
    this.getX = function() {
        return z.x
    };
    this.getY = function() {
        return z.y
    };
    this.getSprite = function() {
        return z
    };
    this._init(a, c, b, d, f, g, e, k);
    return this
}

function CToggle(a, c, b, d, f) {
    var g, e, k, l, p, m;
    this._init = function(a, b, c, d, l) {
        e = [];
        k = [];
        var f = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        g = d;
        m = createSprite(f, "state_" + g, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        m.x = a;
        m.y = b;
        m.stop();
        m.cursor = "pointer";
        l.addChild(m);
        this._initListener()
    };
    this.unload = function() {
        m.off("mousedown", l);
        m.off("pressup", p);
        f.removeChild(m)
    };
    this._initListener = function() {
        l =
            m.on("mousedown", this.buttonDown);
        p = m.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        e[a] = b;
        k[a] = c
    };
    this.setActive = function(a) {
        g = a;
        m.gotoAndStop("state_" + g)
    };
    this.buttonRelease = function() {
        m.scaleX = 1;
        m.scaleY = 1;
        playSound("click", 1, !1);
        g = !g;
        m.gotoAndStop("state_" + g);
        e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(k[ON_MOUSE_UP], g)
    };
    this.buttonDown = function() {
        m.scaleX = .9;
        m.scaleY = .9;
        e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        m.x = a;
        m.y = b
    };
    this._init(a,
        c, b, d, f)
}

function CGfxButton(a, c, b, d) {
    var f, g, e, k, l, p, m;
    this._init = function(a, b, c, d) {
        f = !1;
        g = 1;
        e = [];
        k = [];
        m = createBitmap(c);
        m.x = a;
        m.y = b;
        m.scaleX = m.scaleY = g;
        m.regX = c.width / 2;
        m.regY = c.height / 2;
        m.cursor = "pointer";
        d.addChild(m);
        this._initListener()
    };
    this.unload = function() {
        m.off("mousedown", l);
        m.off("pressup", p);
        d.removeChild(m)
    };
    this.setVisible = function(a) {
        m.visible = a
    };
    this.setClickable = function(a) {
        f = !a
    };
    this._initListener = function() {
        l = m.on("mousedown", this.buttonDown);
        p = m.on("pressup", this.buttonRelease)
    };
    this.addEventListener =
        function(a, b, c) {
            e[a] = b;
            k[a] = c
        };
    this.buttonRelease = function() {
        f || (m.scaleX = g, m.scaleY = g, e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(k[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        f || (m.scaleX = .9 * g, m.scaleY = .9 * g, playSound("click", 1, !1), e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN]))
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(m).to({
            scaleX: .9 * g,
            scaleY: .9 * g
        }, 850, createjs.Ease.quadOut).to({
            scaleX: g,
            scaleY: g
        }, 650, createjs.Ease.quadIn).call(function() {
            n.pulseAnimation()
        })
    };
    this.trembleAnimation =
        function() {
            createjs.Tween.get(m).to({
                rotation: 5
            }, 75, createjs.Ease.quadOut).to({
                rotation: -5
            }, 140, createjs.Ease.quadIn).to({
                rotation: 0
            }, 75, createjs.Ease.quadIn).wait(750).call(function() {
                n.trebleAnimation()
            })
        };
    this.setPosition = function(a, b) {
        m.x = a;
        m.y = b
    };
    this.setX = function(a) {
        m.x = a
    };
    this.setY = function(a) {
        m.y = a
    };
    this.getButtonImage = function() {
        return m
    };
    this.getX = function() {
        return m.x
    };
    this.getY = function() {
        return m.y
    };
    var n = this;
    this._init(a, c, b, d);
    return this
}

function CPanelTutorial() {
    var a, c, b, d, f, g, e;
    this.init = function() {
        s_oInterface.setButtonUno(!1);
        e = new createjs.Container;
        g = 0;
        a = new createjs.Container;
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        c = new createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        c.regX = 398;
        c.regY = 258.5;
        c.alpha = .8;
        a.addChild(c);
        s_oStage.addChild(a);
        b = new CGfxButton(a.getBounds().width / 2 - 50, 0, s_oSpriteLibrary.getSprite("but_arrow"), a);
        b.addEventListener(ON_MOUSE_DOWN, this.onButNext, this);
        var k = s_oSpriteLibrary.getSprite("but_arrow");
        d = new CGfxButton(-(a.getBounds().width / 2 - 50), 0, k, a);
        d.addEventListener(ON_MOUSE_DOWN, this.onButBack, this);
        d.getButtonImage().rotation = 180;
        f = new CGfxButton(a.getBounds().width / 2 - 53, a.getBounds().height / 2 - 53, s_oSpriteLibrary.getSprite("but_skip"), a);
        f.addEventListener(ON_MOUSE_DOWN, this.onButSkip, this);
        this.loadPage(g)
    };
    this.loadPage = function(c) {
        switch (c) {
            case 0:
                d.setVisible(!1);
                new CTLText(e, -80, -120, 300, 240, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_TUTORIAL1, !0, !0, !0, !1);
                c = new CCard(-215, 0, e, "card_1_7",
                    0, 0);
                c.setAnimTutorial("tutorial");
                a.addChild(e);
                break;
            case 1:
                d.setVisible(!0);
                new CTLText(e, -80, -120, 300, 240, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_TUTORIAL2, !0, !0, !0, !1);
                c = new CCard(-215, 0, e, "card_0_12", 0, 0);
                c.setAnimTutorial("draw2tutorial");
                break;
            case 2:
                new CTLText(e, -80, -105, 300, 210, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_TUTORIAL3, !0, !0, !0, !1);
                c = new CCard(-215, 0, e, "card_1_7", 0, 0);
                c.setAnimTutorial("stopTurnTutorial");
                break;
            case 3:
                new CTLText(e, -80, -105, 300, 210, 50, "center", "#fff", PRIMARY_FONT,
                    1, 0, 0, TEXT_TUTORIAL4, !0, !0, !0, !1);
                c = new CCard(-215, 0, e, "card_1_7", 0, 0);
                c.setAnimTutorial("changeClockWiseTutorial");
                break;
            case 4:
                new CTLText(e, -80, -120, 300, 240, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_TUTORIAL5, !0, !0, !0, !1);
                c = new CCard(-215, 0, e, "color", 0, 0);
                c.instantShow();
                break;
            case 5:
                b.setVisible(!0);
                new CTLText(e, -80, -120, 300, 240, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_TUTORIAL6, !0, !0, !0, !1);
                c = new CCard(-215, 0, e, "draw_four", 0, 0);
                c.instantShow();
                break;
            case 6:
                b.setVisible(!1), new CTLText(e, -80, -120, 300, 240, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_TUTORIAL7, !0, !0, !0, !1), c = new createBitmap(s_oSpriteLibrary.getSprite("but_uno")), c.regX = 50, c.regY = 50.5, c.x = -215, c.scaleX = 1.5, c.scaleY = 1.5, e.addChild(c)
        }
    };
    this.onButNext = function() {
        g++;
        e.removeAllChildren();
        this.loadPage(g)
    };
    this.onButBack = function() {
        g--;
        e.removeAllChildren();
        this.loadPage(g)
    };
    this.onButSkip = function() {
        s_oStage.removeChild(a);
        s_oInterface.setButtonUno(!0);
        s_oGame.startGame()
    };
    this.init()
}

function CTurnManager() {
    var a, c = 0,
        b = 0;
    this.init = function() {
        a = !0;
        b = 0;
        c = b + 1;
        s_oTurnManager = this
    };
    this.changeClockWise = function() {
        a = !0 === a ? !1 : !0
    };
    this.nextTurn = function() {
        !0 === a ? b === NUM_PLAYERS - 1 ? (b = 0, c = 1) : (b++, c = b === NUM_PLAYERS - 1 ? 0 : b + 1) : 0 === b ? (b = NUM_PLAYERS - 1, c = NUM_PLAYERS - 2) : (b--, c = 0 === b ? NUM_PLAYERS - 1 : b - 1)
    };
    this.checkTurn = function() {
        return b
    };
    this.prevTurn = function() {
        !0 === a ? 0 === b ? (b = NUM_PLAYERS - 1, c = NUM_PLAYERS - 2) : (b--, c = 0 === b ? NUM_PLAYERS - 1 : b - 1) : b === NUM_PLAYERS - 1 ? (b = 0, c = 1) : (b++, c = b === NUM_PLAYERS - 1 ?
            0 : b + 1)
    };
    this.checkPrevTurn = function() {
        return !0 === a ? 0 === b ? NUM_PLAYERS - 1 : b - 1 : b === NUM_PLAYERS - 1 ? 0 : b + 1
    };
    this.checkNextPlayer = function() {
        return c
    };
    this.setTurn = function(d) {
        b = d;
        c = !0 === a ? b === NUM_PLAYERS - 1 ? 0 : b + 1 : 0 === b ? NUM_PLAYERS - 1 : b - 1
    };
    this.getClockWise = function() {
        return a
    };
    this.init()
}
s_oTurnManager = null;

function CListernableObject() {
    var a;
    this._init = function() {
        a = []
    };
    this.addEventListener = function(c, b, d) {
        a[c] = {
            cb: b,
            owner: d
        }
    };
    this.removeEventListener = function(c) {
        a[c] = null
    };
    this.callEvent = function(c, b) {
        a[c] && (b ? a[c].cb.apply(a[c].owner, [b]) : a[c].cb.call(a[c].owner))
    };
    this._init()
}

function CAnimation() {
    var a, c, b, d, f, g, e, k;
    this.init = function() {
        e = !1;
        var l = s_oSpriteLibrary.getSprite("draw_four_anim");
        l = {
            images: [l],
            frames: {
                width: 292,
                height: 290,
                regX: 146,
                regY: 145
            },
            animations: {
                anim: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                    next: "stop",
                    speed: .8
                },
                reverse: {
                    frames: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
                    next: [0],
                    speed: .8
                },
                stop: [13]
            }
        };
        l = new createjs.SpriteSheet(l);
        a = new createjs.Sprite(l, 0);
        l = s_oSpriteLibrary.getSprite("draw_two_anim");
        l = {
            images: [l],
            frames: {
                width: 292,
                height: 322,
                regX: 146,
                regY: 161
            },
            animations: {
                anim: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                    next: "stop",
                    speed: .8
                },
                reverse: {
                    frames: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
                    next: [0],
                    speed: .8
                },
                stop: [13]
            }
        };
        l = new createjs.SpriteSheet(l);
        c = new createjs.Sprite(l, 0);
        l = s_oSpriteLibrary.getSprite("stop_turn_anim");
        b = new createBitmap(l, 292, 300);
        l = s_oSpriteLibrary.getSprite("clock_wise_anim");
        d = new createBitmap(l, 292, 300);
        l = s_oSpriteLibrary.getSprite("change_color");
        l = {
            images: [l],
            frames: {
                width: 328,
                height: 315,
                regX: 164,
                regY: 157.5
            },
            animations: {
                anim: {
                    frames: [0,
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
                    ],
                    next: "anim",
                    speed: .8
                },
                stop: [16],
                color_0: {
                    frames: [0, 1, 2, 3, 4, 5, 6],
                    speed: .8
                },
                color_1: {
                    frames: [0, 1, 2],
                    speed: .8
                },
                color_2: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                    speed: .8
                },
                color_3: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    speed: .8
                }
            }
        };
        l = new createjs.SpriteSheet(l);
        f = new createjs.Sprite(l, 0);
        l = s_oSpriteLibrary.getSprite("shuffle_anim");
        l = {
            images: [l],
            frames: {
                width: 403,
                height: 386,
                regX: 201.5,
                regY: 193
            },
            animations: {
                anim: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                    next: "anim"
                },
                idle: [17]
            }
        };
        l = new createjs.SpriteSheet(l);
        k = new createjs.Sprite(l, "idle")
    };
    this.drawFourAnim = function() {
        a.alpha = 0;
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        a.scaleX = .01;
        a.scaleY = .01;
        s_oStage.addChild(a);
        a.stop();
        playSound("special_card", .5, !1);
        (new createjs.Tween.get(a)).to({
            alpha: 1,
            scaleX: 1.4,
            scaleY: 1.4
        }, 200, createjs.Ease.cubicOut).wait(200).call(function() {
            a.gotoAndPlay("anim")
        }).wait(1E3).call(function() {
            a.gotoAndPlay("reverse")
        }).wait(200).to({
            alpha: 0,
            scaleX: .01,
            scaleY: .01
        }, 200, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(a);
            s_oGame.onEndDrawFour()
        })
    };
    this.drawTwoAnim = function() {
        c.alpha = 0;
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        c.scaleX = .01;
        c.scaleY = .01;
        s_oStage.addChild(c);
        c.stop();
        playSound("special_card", .5, !1);
        (new createjs.Tween.get(c)).to({
            alpha: 1,
            scaleX: 1.4,
            scaleY: 1.4
        }, 200, createjs.Ease.cubicOut).wait(200).call(function() {
            c.gotoAndPlay("anim");
            setVolume("special_card", .2)
        }).wait(1E3).call(function() {
            c.gotoAndPlay("reverse");
            setVolume("special_card", .1)
        }).wait(200).to({
            alpha: 0,
            scaleX: .01,
            scaleY: .01
        }, 200, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(c);
            s_oGame.onEndDrawTwo()
        })
    };
    this.stopTurn = function() {
        b.alpha = 0;
        b.regX = 146;
        b.regY = 150;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        b.scaleX = .01;
        b.scaleY = .01;
        s_oStage.addChild(b);
        playSound("game_over", 1, !1);
        (new createjs.Tween.get(b)).to({
            alpha: 1,
            scaleX: 2,
            scaleY: 2
        }, 200, createjs.Ease.cubicOut).to({
            scaleX: 1.6,
            scaleY: 1.6
        }, 200).to({
            scaleX: 2,
            scaleY: 2
        }, 200).to({
            scaleX: 1.6,
            scaleY: 1.6
        }, 200).to({
            scaleX: 2,
            scaleY: 2
        }, 200).to({
            alpha: 0,
            scaleX: .01,
            scaleY: .01
        }, 200, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(b);
            s_oGame.onNextTurn()
        })
    };
    this.changeClockWise = function(a) {
        d.alpha = 0;
        d.rotation = 0;
        d.regX = 146;
        d.regY = 150;
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2;
        d.scaleX = .01;
        d.scaleY = .01;
        s_oStage.addChild(d);
        playSound("special_card", .5, !1);
        !1 === a ? (new createjs.Tween.get(d)).to({
                alpha: 1,
                scaleX: 2,
                scaleY: 2
            }, 200, createjs.Ease.cubicOut).to({
                rotation: 360
            }, 500).wait(500).to({
                rotation: -360
            }, 500).wait(500).to({
                alpha: 0,
                scaleX: .01,
                scaleY: .01
            }, 200, createjs.Ease.cubicIn).call(function() {
                s_oStage.removeChild(d);
                s_oGame.onNextTurn()
            }) :
            (new createjs.Tween.get(d)).to({
                alpha: 1,
                scaleX: 2,
                scaleY: 2
            }, 200, createjs.Ease.cubicOut).to({
                rotation: -360
            }, 500).wait(500).to({
                rotation: 360
            }, 500).wait(500).to({
                alpha: 0,
                scaleX: .01,
                scaleY: .01
            }, 200, createjs.Ease.cubicIn).call(function() {
                s_oStage.removeChild(d);
                s_oGame.onNextTurn()
            })
    };
    this.changeColor = function(a) {
        g = a;
        f.alpha = 0;
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2;
        f.scaleX = .01;
        f.scaleY = .01;
        s_oStage.addChild(f);
        f.stop();
        playSound("change_color", .5, !1);
        (new createjs.Tween.get(f)).to({
            alpha: 1,
            scaleX: 1.4,
            scaleY: 1.4
        }, 200, createjs.Ease.cubicOut).call(function() {
            f.gotoAndPlay("anim")
        }).wait(1300).call(function() {
            f.gotoAndStop(16);
            f.gotoAndPlay("color_" + a);
            e = !0;
            f.on("animationend", s_oCAnimation.endAnimation)
        })
    };
    this.endAnimation = function() {
        !0 === e && (stopSound("change_color"), playSound("special_card", 1, !1), e = !1, f.off("animationend", s_oCAnimation.endAnimation), f.stop(), (new createjs.Tween.get(f)).to({
            scaleX: 2,
            scaleY: 2
        }, 250).to({
            scaleX: 1.4,
            scaleY: 1.4
        }, 250).to({
            scaleX: 2,
            scaleY: 2
        }, 250).to({
                scaleX: 1.4,
                scaleY: 1.4
            },
            250).to({
            alpha: 0,
            scaleX: .1,
            scaleY: .1
        }, 200, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(f);
            f.gotoAndStop(0);
            s_oInterface.refreshColor(g);
            s_oGame.onNextTurn()
        }))
    };
    this.shuffleAnimation = function(a, b, c, d) {
        k.alpha = 0;
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2;
        k.scaleX = .01;
        k.scaleY = .01;
        s_oStage.addChild(k);
        k.stop();
        (new createjs.Tween.get(k)).to({
            alpha: 1,
            scaleX: 1.6,
            scaleY: 1.6
        }, 400, createjs.Ease.cubicOut).call(function() {
            k.gotoAndPlay("anim");
            playSound("card_dealing", 1, !0)
        }).wait(1700).call(function() {
            k.gotoAndStop("idle");
            stopSound("change_color")
        }).to({
            alpha: 0,
            scaleX: .01,
            scaleY: .01
        }, 300, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(k);
            s_oGame.onEndShuffle(a, b, c, d)
        })
    };
    this.init();
    s_oCAnimation = this
}
s_oCAnimation = null;

function CMenu() {
    var a, c, b, d, f, g, e, k, l, p, m, n, q = null,
        y = null;
    this._init = function() {
        e = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(e);
        var v = s_oSpriteLibrary.getSprite("but_play");
        k = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 200, v, s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        v = s_oSpriteLibrary.getSprite("but_info");
        f = v.width / 2 + 10;
        g = v.height / 2 + 10;
        m = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 240, v, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onCreditsBut,
            this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) v = s_oSpriteLibrary.getSprite("audio_icon"), b = CANVAS_WIDTH - v.height / 2 - 10, d = v.height / 2 + 10, p = new CToggle(b, d, v, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        v = window.document;
        var x = v.documentElement;
        q = x.requestFullscreen || x.mozRequestFullScreen || x.webkitRequestFullScreen || x.msRequestFullscreen;
        y = v.exitFullscreen || v.mozCancelFullScreen || v.webkitExitFullscreen || v.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (q = !1);
        q && screenfull.isEnabled &&
            (v = s_oSpriteLibrary.getSprite("but_fullscreen"), a = f + v.width / 2 + 10, c = g, n = new CToggle(a, c, v, s_bFullscreen, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(l);
        createjs.Tween.get(l).to({
            alpha: 0
        }, 1E3).call(function() {
            l.visible = !1
        });
        null !== s_oSoundtrack && setVolume("soundtrack", 1);
        this.refreshButtonPos()
    };
    this.unload = function() {
        k.unload();
        k = null;
        l.visible = !1;
        m.unload();
        if (!1 === DISABLE_SOUND_MOBILE ||
            !1 === s_bMobile) p.unload(), p = null;
        q && screenfull.isEnabled && n.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this.refreshButtonPos = function() {
        m.setPosition(f + s_iOffsetX, s_iOffsetY + g);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(b - s_iOffsetX, s_iOffsetY + d);
        q && screenfull.isEnabled && n.setPosition(a + s_iOffsetX, c + s_iOffsetY)
    };
    this.resetFullscreenBut = function() {
        q && screenfull.isEnabled && n.setActive(s_bFullscreen)
    };
    this._onFullscreen = function() {
        s_bFullscreen ? y.call(window.document) : q.call(window.document.documentElement);
        sizeHandler()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut = function() {
        new CCreditsPanel
    };
    this._onButPlayRelease = function() {
        this.unload();
        $(s_oMain).trigger("start_session");
        s_oMain.gotoSelectPlayers()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CSelectPlayers() {
    var a, c, b, d, f, g, e, k, l = null,
        p = null,
        m;
    this._init = function() {
        var n = createBitmap(s_oSpriteLibrary.getSprite("bg_select_players"));
        s_oStage.addChild(n);
        n = s_oSpriteLibrary.getSprite("but_p2");
        f = new CGfxButton(CANVAS_WIDTH / 2 - 450, CANVAS_HEIGHT - 500, n, s_oStage);
        f.addEventListener(ON_MOUSE_UP, this._onButP2, this);
        n = s_oSpriteLibrary.getSprite("but_p3");
        g = new CGfxButton(CANVAS_WIDTH / 2 + 10, CANVAS_HEIGHT - 500, n, s_oStage);
        g.addEventListener(ON_MOUSE_UP, this._onButP3, this);
        n = s_oSpriteLibrary.getSprite("but_p4");
        e = new CGfxButton(CANVAS_WIDTH / 2 + 450, CANVAS_HEIGHT - 500, n, s_oStage);
        e.addEventListener(ON_MOUSE_UP, this._onButP4, this);
        new CTLText(s_oStage, CANVAS_WIDTH / 2 - 500, 300, 1E3, 150, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_SELECT_PLAYERS, !0, !0, !0, !1);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) n = s_oSpriteLibrary.getSprite("audio_icon"), b = CANVAS_WIDTH - n.height / 2 - 10, d = n.height / 2 + 10, m = new CToggle(b, d, n, s_bAudioActive, s_oStage), m.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        n = window.document;
        var q = n.documentElement;
        l = q.requestFullscreen || q.mozRequestFullScreen || q.webkitRequestFullScreen || q.msRequestFullscreen;
        p = n.exitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen || n.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (l = !1);
        l && screenfull.isEnabled && (n = s_oSpriteLibrary.getSprite("but_fullscreen"), a = n.width / 4 + 10, c = n.height / 2 + 10, k = new CToggle(a, c, n, s_bFullscreen, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
        this.refreshButtonPos()
    };
    this._onButP2 = function() {
        NUM_PLAYERS = 2;
        this.unload();
        $(s_oMain).trigger("select_players",
            2);
        s_oMain.gotoGame()
    };
    this._onButP3 = function() {
        NUM_PLAYERS = 3;
        this.unload();
        $(s_oMain).trigger("select_players", 3);
        s_oMain.gotoGame()
    };
    this._onButP4 = function() {
        NUM_PLAYERS = 4;
        this.unload();
        $(s_oMain).trigger("select_players", 4);
        s_oMain.gotoGame()
    };
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m.unload(), m = null;
        l && screenfull.isEnabled && k.unload();
        f.unload();
        g.unload();
        e.unload();
        s_oStage.removeAllChildren();
        s_oSelectPlayers = null
    };
    this.refreshButtonPos = function() {
        !1 !== DISABLE_SOUND_MOBILE &&
            !1 !== s_bMobile || m.setPosition(b - s_iOffsetX, s_iOffsetY + d);
        l && screenfull.isEnabled && k.setPosition(a + s_iOffsetX, c + s_iOffsetY)
    };
    this.resetFullscreenBut = function() {
        l && screenfull.isEnabled && k.setActive(s_bFullscreen)
    };
    this._onFullscreen = function() {
        s_bFullscreen ? p.call(window.document) : l.call(window.document.documentElement);
        sizeHandler()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    s_oSelectPlayers = this;
    this._init()
}
var s_oSelectPlayers = null;

function CCard(a, c, b, d, f, g) {
    var e = !1,
        k, l, p, m, n, q, y, v, x, z;
    this._init = function(a, b, c, d, e, f, r) {
        z = c;
        p = d;
        m = e;
        n = f;
        k = !1;
        l = 0 === n || 2 === n ? "red" : "black";
        x = new createjs.Container;
        x.x = a;
        x.y = b;
        z.addChild(x);
        a = {
            images: [s_oSpriteLibrary.getSprite("cards")],
            frames: {
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                regX: CARD_WIDTH / 2,
                regY: CARD_HEIGHT / 2
            },
            animations: {
                card_0_0: [0],
                card_0_1: [1],
                card_0_2: [2],
                card_0_3: [3],
                card_0_4: [4],
                card_0_5: [5],
                card_0_6: [6],
                card_0_7: [7],
                card_0_8: [8],
                card_0_9: [9],
                card_0_10: [10],
                card_0_11: [11],
                card_0_12: [12],
                card_1_0: [13],
                card_1_1: [14],
                card_1_2: [15],
                card_1_3: [16],
                card_1_4: [17],
                card_1_5: [18],
                card_1_6: [19],
                card_1_7: [20],
                card_1_8: [21],
                card_1_9: [22],
                card_1_10: [23],
                card_1_11: [24],
                card_1_12: [25],
                card_2_0: [26],
                card_2_1: [27],
                card_2_2: [28],
                card_2_3: [29],
                card_2_4: [30],
                card_2_5: [31],
                card_2_6: [32],
                card_2_7: [33],
                card_2_8: [34],
                card_2_9: [35],
                card_2_10: [36],
                card_2_11: [37],
                card_2_12: [38],
                card_3_0: [39],
                card_3_1: [40],
                card_3_2: [41],
                card_3_3: [42],
                card_3_4: [43],
                card_3_5: [44],
                card_3_6: [45],
                card_3_7: [46],
                card_3_8: [47],
                card_3_9: [48],
                card_3_10: [49],
                card_3_11: [50],
                card_3_12: [51],
                color: [52],
                draw_four: [53],
                back: [54],
                tutorial: {
                    frames: [20, 5, 47, 31],
                    speed: .1
                },
                draw2tutorial: {
                    frames: [12, 25, 38, 51],
                    speed: .1
                },
                stopTurnTutorial: {
                    frames: [10, 23, 36, 49],
                    speed: .1
                },
                changeClockWiseTutorial: {
                    frames: [11, 24, 37, 50],
                    speed: .1
                }
            }
        };
        a = new createjs.SpriteSheet(a);
        v = createSprite(a, "back", CARD_WIDTH / 2, CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
        v.stop();
        x.addChild(v);
        v.on("mousedown", this._mouseDown);
        q = [];
        y = []
    };
    this.getCardSprite = function() {
        return v
    };
    this.setAnimTutorial =
        function(a) {
            v.gotoAndPlay(a)
        };
    this.unload = function() {
        v.off("mousedown", this._mouseDown);
        z.removeChild(x)
    };
    this.unloadEvent = function() {
        v.off("mousedown", this._mouseDown)
    };
    this.saveInfo = function() {
        return {
            szFotogram: p,
            iRank: m,
            iSuit: n,
            bValue: !0
        }
    };
    this.changeInfo = function(a, b, c) {
        p = a;
        m = b;
        n = c
    };
    this.instantShow = function() {
        v.gotoAndStop(p)
    };
    this.setValue = function(a) {
        v.gotoAndStop(p);
        playSound("card", 1, !1);
        createjs.Tween.get(x).to({
            scaleX: 1
        }, 200).call(function() {})
    };
    this.setActive = function(a) {
        a ? x.addChild(void 0) :
            x.removeChild(void 0)
    };
    this.setVisible = function(a) {
        x.visible = !0 === a ? !0 : !1
    };
    this.onSetTurned = function() {
        k = !0
    };
    this.offSetTurned = function() {
        k = !1
    };
    this.moveCard = function(a, b, c, d) {
        var e = this;
        createjs.Tween.get(x).wait(d).to({
            x: a,
            y: b
        }, c, createjs.Ease.linear).call(function() {
            s_oGame.playedCard(e)
        })
    };
    this.moveCardFirstHand = function(a, b, c, d) {
        var e = this;
        createjs.Tween.get(x).wait(d).to({
            x: a,
            y: b
        }, c, createjs.Ease.cubicOut).call(function() {
            playSound("card_dealing", 1, !1);
            s_oGame.onCardDealed(e)
        })
    };
    this.moveFirstLastCard =
        function(a, b, c, d) {
            var e = this;
            createjs.Tween.get(x).wait(d).to({
                x: a,
                y: b
            }, c, createjs.Ease.linear).call(function() {
                s_oGame.onFirstLastCardDealed(e)
            })
        };
    this.setOnTop = function() {
        z.addChildAt(x, z.numChildren)
    };
    this.moveToSuit = function(a, b, c) {
        createjs.Tween.get(x).wait(c).to({
            x: a,
            y: b
        }, 200, createjs.Ease.cubicOut).call(function() {
            s_oGame.stackInSuit(A)
        })
    };
    this.setPlaced = function() {
        e = !0;
        A.showCard()
    };
    this.stackInPlace = function(a, b, c) {
        createjs.Tween.get(x).to({
            x: a,
            y: b
        }, c, createjs.Ease.cubicOut).call(function() {
            k = !0
        })
    };
    this.stackAndDeactive = function(a, b, c) {
        createjs.Tween.get(x).to({
            x: a,
            y: b
        }, c, createjs.Ease.cubicOut)
    };
    this._mouseDown = function(a) {
        !1 !== k && s_oGame.pickCard(A, a)
    };
    this.getPlaced = function() {
        return e
    };
    this.showCard = function(a, b) {
        var c = this;
        createjs.Tween.get(x).wait(a).to({
            scaleX: .1
        }, 200).call(function() {
            c.setValue(b)
        }).call(function() {
            k = !0
        })
    };
    this.showCardNoInput = function(a, b) {
        var c = this;
        createjs.Tween.get(x).wait(a).to({
            scaleX: .1
        }, 200).call(function() {
            c.setValue(b)
        }).call(function() {
            k = !1
        })
    };
    this.hideCard =
        function() {
            var a = this;
            createjs.Tween.get(x).to({
                scaleX: .1
            }, 200).call(function() {
                a.setBack()
            })
        };
    this.setPos = function(a, b) {
        x.x = a;
        x.y = b
    };
    this.setBack = function() {
        k = !1;
        v.gotoAndStop("back");
        var a = this;
        createjs.Tween.get(x).to({
            scaleX: 1
        }, 200).call(function() {
            a.cardHidden()
        })
    };
    this.cardHidden = function() {
        q[ON_CARD_HIDE] && q[ON_CARD_HIDE].call(y[ON_CARD_HIDE], this)
    };
    this.getRank = function() {
        return m
    };
    this.getSuit = function() {
        return n
    };
    this.getColor = function() {
        return l
    };
    this.getFotogram = function() {
        return p
    };
    this.getPos =
        function() {
            return {
                x: x.x,
                y: x.y
            }
        };
    this.getSprite = function() {
        return x
    };
    this.getLogicRect = function() {
        return new createjs.Rectangle(x.x - CARD_WIDTH / 2, x.y - CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT)
    };
    this.getTurned = function() {
        return k
    };
    var A = this;
    this._init(a, c, b, d, f, g);
    this.getGlobalToLocal = function(a, b) {
        return v.globalToLocal(a / s_oStage.scaleX, b / s_oStage.scaleY)
    }
}

function CDeckDisplayer(a, c, b) {
    var d, f, g, e;
    this._init = function() {
        d = [];
        f = new createjs.Container;
        g = !1;
        f.x = a;
        f.y = c;
        e = b;
        e.addChild(f, e);
        f.on("mousedown", this.onDraw, this)
    };
    this.initializeDeck = function() {
        for (var a, b = 0; 4 > b; b++)
            for (var c = 0; 10 > c; c++) a = c, d.push(new CCard(0, 0, f, "card_" + b + "_" + c, a, b));
        for (b = 0; 4 > b; b++)
            for (c = 0; 9 > c; c++) a = c + 1, d.push(new CCard(0, 0, f, "card_" + b + "_" + a, a, b));
        for (b = 0; 4 > b; b++)
            for (c = 0; 2 > c; c++) d.push(new CCard(0, 0, f, "card_" + b + "_10", 10, b)), d.push(new CCard(0, 0, f, "card_" + b + "_11", 11, b)), d.push(new CCard(0,
                0, f, "card_" + b + "_12", 12, b));
        for (b = 0; 4 > b; b++) d.push(new CCard(0, 0, f, "color", 13, 4)), d.push(new CCard(0, 0, f, "draw_four", 14, 4))
    };
    this.shuffle = function() {
        var a;
        for (a = d.length; a; a--) {
            var b = Math.floor(Math.random() * a);
            var c = d[a - 1];
            d[a - 1] = d[b];
            d[b] = c
        }
    };
    this.moveContainer = function(a, b, c, d) {
        createjs.Tween.get(f).wait(d).to({
            x: a,
            y: b
        }, c, createjs.Ease.linear)
    };
    this.takeFirstLastCard = function() {
        for (; 4 === d[d.length - 1].getSuit();) this.shuffle();
        return d.pop()
    };
    this.takeLastCard = function() {
        return d.pop()
    };
    this.getLastCard =
        function() {
            return d[d.length - 1]
        };
    this.getCardByIndex = function(a) {
        return d[a]
    };
    this.removeCardByIndex = function(a) {
        return d.splice(a, 1)
    };
    this.pushCard = function(a) {
        d.push(a)
    };
    this.getContainer = function() {
        return f
    };
    this.getLength = function() {
        return d.length
    };
    this.onDraw = function() {
        if (!1 === g) s_oGame.onDraw()
    };
    this.disableInputUsedCards = function() {
        d[d.length - 1].offSetTurned()
    };
    this.disableInputDraw = function() {
        g = !0
    };
    this.enableInputDraw = function() {
        g = !1
    };
    this.getIndexChild = function() {
        return s_oStage.getChildIndex(f)
    };
    this.setChildDepth = function(a) {
        s_oStage.addChildAt(f, a)
    };
    this.getGlobalPosition = function() {
        return {
            x: f.x,
            y: f.y
        }
    };
    this.setOnTop = function() {
        e.addChildAt(f, e.numChildren)
    };
    this.addNewCardUnderTheDeck = function(a) {
        for (var b = 0; b < a.length; b++) d.push(a[b])
    };
    this.removeAllCardUnderTheDeck = function() {
        for (var a = [], b = 0; b < d.length - 1; b++) a.push(d.shift());
        return a
    };
    this._init()
}

function CHandDisplayer(a, c, b, d, f, g, e) {
    var k, l, p, m, n, q, y, v, x = !1;
    this.init = function() {
        k = a;
        l = c;
        p = [];
        m = new createjs.Container;
        m.x = b;
        m.y = d;
        v = g;
        v.addChild(m);
        var f = s_oSpriteLibrary.getSprite("line_player");
        f = {
            images: [f],
            frames: {
                width: 524,
                height: 18,
                regX: 262,
                regY: 9
            },
            animations: {
                off: [0],
                on: [1],
                idle: {
                    frames: [0, 1],
                    speed: .1
                }
            }
        };
        f = new createjs.SpriteSheet(f);
        n = new createjs.Sprite(f, "off");
        n.stop();
        q = new createjs.Text(e, " 34px " + PRIMARY_FONT, "#FFFFFF");
        0 !== k ? (n.x = CANVAS_WIDTH / 2, d > CANVAS_HEIGHT / 2 ? (q.x = CANVAS_WIDTH /
            2 + 40, n.y = d - 135, q.y = d - 178) : (q.x = CANVAS_WIDTH / 2 - 195, n.y = d + 135, q.y = d + 140)) : (n.y = CANVAS_HEIGHT / 2, b < CANVAS_WIDTH / 2 ? (n.x = b + 100, n.rotation = 90, q.x = b + 150, q.y = d + 70, q.rotation = 90) : (n.x = b - 100, n.rotation = -90, q.x = b - 150, q.y = d + 6, q.rotation = -90));
        s_oStage.addChild(n);
        s_oStage.addChild(q);
        f = s_oSpriteLibrary.getSprite("cloud_uno");
        f = {
            images: [f],
            frames: {
                width: 261,
                height: 194,
                regX: 130.5,
                regY: 97
            },
            animations: {
                cloud1: [0],
                cloud2: [1]
            }
        };
        f = new createjs.SpriteSheet(f);
        y = new createjs.Sprite(f, "cloud1");
        y.alpha = 0;
        y.scaleX = .1;
        y.scaleY =
            .1
    };
    this.getGlobalPosition = function() {
        for (var a = 0, b = 0, c = 0; c < p.length; c++) 0 !== k ? a += CARD_WIDTH / 2 : b += CARD_HEIGHT / 2;
        return {
            x: m.x + a,
            y: m.y + b
        }
    };
    this.getContainerPos = function() {
        return {
            x: m.x,
            y: m.y
        }
    };
    this.getCardPositionByIndex = function(a) {
        a = p[a].getPos();
        return {
            x: a.x,
            y: a.y
        }
    };
    this.searchIndexCard = function(a) {
        for (var b = 0; b < p.length; b++)
            if (a === p[b]) return b
    };
    this.removeCardByIndex = function(a) {
        return p.splice(a, 1)
    };
    this.getPosNewCard = function() {
        return {
            x: p.length * k,
            y: p.length * l
        }
    };
    this.pushCard = function(a) {
        p.push(a);
        if (0 === l && d > CANVAS_HEIGHT / 2) p[p.length - 1].getCardSprite().on("mouseover", this.onMouseOver)
    };
    this.getContainer = function() {
        return m
    };
    this.getLastCard = function() {
        return p[p.length - 1]
    };
    this.getLength = function() {
        return p.length
    };
    this.centerContainer = function() {
        var a = m.getBounds();
        0 !== k ? createjs.Tween.get(m).to({
            x: CANVAS_WIDTH / 2 - a.width / 2 + CARD_WIDTH / 2
        }, 300, createjs.Ease.linear) : createjs.Tween.get(m).to({
            y: CANVAS_HEIGHT / 2 - a.height / 2 + CARD_HEIGHT / 1.5 - 40
        }, 300, createjs.Ease.linear)
    };
    this.setOnTop = function() {
        v.addChildAt(m,
            v.numChildren)
    };
    this.setChildDepth = function(a) {
        a > m.s_oStage.numChild - 1 && (a = m.s_oStage.numChild - 1);
        s_oStage.addChildAt(a)
    };
    this.getContainerInfo = function() {
        return m.getBounds()
    };
    this.getCardByIndex = function(a) {
        return p[a]
    };
    this.organizeHand = function(a) {
        var b = this;
        if (0 !== k)
            for (var c = 0; c < p.length; c++) a = k * c, createjs.Tween.get(p[c].getSprite()).to({
                x: a
            }, 300, createjs.Ease.linear).call(b.centerContainer);
        else
            for (c = 0; c < p.length; c++) a = l * c, createjs.Tween.get(p[c].getSprite()).to({
                y: a
            }, 300, createjs.Ease.linear).call(function() {
                b.centerContainer()
            })
    };
    this.setOnTurn = function() {
        q.alpha = 1;
        x = !0;
        if (!1 === createjs.Tween.hasActiveTweens(q) && 0 === f) this.onTweenPlayer();
        n.gotoAndStop("on")
    };
    this.onTweenPlayer = function() {
        var a = this;
        !0 === x ? (new createjs.Tween.get(q)).to({
            alpha: .15
        }, 500).to({
            alpha: 1
        }, 500).call(function() {
            a.onTweenPlayer()
        }) : q.alpha = .15
    };
    this.setOffTurn = function() {
        createjs.Tween.removeTweens(q);
        x = !1;
        q.alpha = .15;
        n.gotoAndStop("off")
    };
    this.checkUno = function() {
        1 === p.length && (this.setOnTop(), 0 !== k ? d < CANVAS_HEIGHT / 2 ? (y.gotoAndStop("cloud2"), y.x =
            CANVAS_WIDTH / 2 - 270, y.y = CANVAS_HEIGHT / 2 - 300) : (y.gotoAndStop("cloud1"), y.x = CANVAS_WIDTH / 2 + 300, y.y = CANVAS_HEIGHT / 2 + 100) : b < CANVAS_WIDTH / 2 ? (y.gotoAndStop("cloud1"), y.x = CANVAS_WIDTH / 2 - 350, y.y = CANVAS_HEIGHT / 2 - 30) : (y.gotoAndStop("cloud2"), y.x = CANVAS_WIDTH / 2 + 350, y.y = CANVAS_HEIGHT / 2 - 200), s_oStage.addChild(y), (new createjs.Tween.get(y)).to({
            alpha: 1,
            scaleX: 1,
            scaleY: 1
        }, 300, createjs.Ease.bounceOut).wait(1500).to({
            scaleX: .1,
            scaleY: .1
        }, 300, createjs.Ease.cubicIn).to({
            alpha: 0
        }, 20).call(function() {
            s_oStage.removeChild(y)
        }))
    };
    this.onMouseOver = function(a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.init()
}

function CGame(a) {
    var c, b = 0,
        d, f = null,
        g, e = [],
        k, l, p, m = !1,
        n, q, y, v, x, z, A, t, D, H, I, N, O;
    this._init = function() {
        c = 1E5;
        N = -(STARTING_NUM_CARDS - 1);
        v = z = H = !1;
        l = new CTurnManager;
        I = [];
        I[0] = TEXT_PLAYER_1;
        I[1] = TEXT_PLAYER_2;
        I[2] = TEXT_PLAYER_3;
        I[3] = TEXT_PLAYER_4;
        n = new CAnimation;
        var a = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(a);
        d = new CInterface;
        !0 === s_bFirstGame ? new CPanelTutorial : this.startGame();
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
    };
    this.startGame = function() {
        D = new createjs.Container;
        var a = {
            images: [s_oSpriteLibrary.getSprite("finger")],
            frames: {
                width: 202,
                height: 277,
                regX: 101,
                regY: 138.5
            },
            animations: {
                idle: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    speed: .9
                }
            }
        };
        a = new createjs.SpriteSheet(a);
        y = new createjs.Sprite(a, "idle");
        y.scaleX = .5;
        y.scaleY = .5;
        y.x = CANVAS_WIDTH / 2 - 90;
        y.y = CANVAS_HEIGHT / 2 - 100;
        t = new createjs.Container;
        for (a = 0; a < NUM_PLAYERS; a++) {
            var b = 0,
                c = 0;
            aHandPos["num_player_" + NUM_PLAYERS][a].x === CANVAS_WIDTH / 2 ? b = CARD_WIDTH / 2 : c = CARD_HEIGHT / 4;
            e[a] = new CHandDisplayer(b, c, aHandPos["num_player_" + NUM_PLAYERS][a].x,
                aHandPos["num_player_" + NUM_PLAYERS][a].y, a, t, I[a])
        }
        A = new createjs.Container;
        g = new CDeckDisplayer(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, A);
        k = new CDeckDisplayer(CANVAS_WIDTH / 2 + CARD_WIDTH, CANVAS_HEIGHT / 2, A);
        k.disableInputDraw();
        g.initializeDeck();
        g.shuffle();
        g.getContainer().on("mouseover", this.onMouseOverDeck);
        D.addChild(A);
        D.addChild(t);
        s_oStage.addChild(D);
        this.getFirstHand();
        O = new CTLText(s_oStage, CANVAS_WIDTH / 2 + 280, CANVAS_HEIGHT / 2, 200, 150, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_ALERT_1, !0, !0, !0, !1);
        O.setAlpha(0)
    };
    this.getFirstHand = function() {
        var a = g.takeLastCard(),
            b = l.checkTurn(),
            c = e[b].getContainerPos();
        b = e[b].getPosNewCard();
        var d = g.getGlobalPosition();
        a.setOnTop();
        D.addChildAt(A, D.numChildren);
        g.setOnTop();
        a.moveCardFirstHand(c.x + b.x - d.x, c.y + b.y - d.y, 250)
    };
    this.onCardDealed = function(a) {
        var b = l.checkTurn();
        e[b].pushCard(new CCard(e[b].getPosNewCard().x, e[b].getPosNewCard().y, e[b].getContainer(), a.getFotogram(), a.getRank(), a.getSuit()));
        a.unload();
        a = e[b].getLastCard();
        e[b].centerContainer();
        0 === b && a.showCardNoInput(0, "mute");
        l.nextTurn();
        e[e.length - 1].getLength() < STARTING_NUM_CARDS ? this.getFirstHand() : (D.addChildAt(A, D), g.setOnTop(), a = g.takeFirstLastCard(), a.moveFirstLastCard(CARD_WIDTH, 0, 600), d.setOnTop())
    };
    this.onFirstLastCardDealed = function(a) {
        k.pushCard(new CCard(0, 0, k.getContainer(), a.getFotogram(), a.getRank(), a.getSuit()));
        a.unload();
        a = k.getLastCard();
        a.showCardNoInput();
        g.moveContainer(CANVAS_WIDTH / 2 - CARD_WIDTH / 2, CANVAS_HEIGHT / 2, 400);
        k.moveContainer(CANVAS_WIDTH / 2 + CARD_WIDTH /
            2, CANVAS_HEIGHT / 2, 400);
        p = k.getLastCard().getSuit();
        d.refreshColor(p);
        l.setTurn(Math.floor(Math.random() * NUM_PLAYERS) + 0);
        var b = l.checkTurn();
        e[b].setOnTurn(b);
        k.disableInputUsedCards();
        this.applyEffectOnCard(a, !0)
    };
    this.pickCard = function(a, b) {
        N++;
        var c = k.getLastCard(),
            d = l.checkTurn(),
            f = e[d].getContainerPos(),
            r = k.getGlobalPosition();
        D.addChildAt(t, D.numChildren);
        e[d].setOnTop();
        0 === d && (a.getRank() === c.getRank() && "draw_four" !== a.getFotogram() || a.getSuit() === p || "color" === a.getFotogram() ? (this.offInputPlayer(),
            a.moveCard(r.x - f.x, r.y - f.y, 300), playSound("card", 1, !1), 2 === e[0].getLength() && (m = !0)) : 14 === a.getRank() && !0 === this.checkAvaiableDrawFour() && (this.offInputPlayer(), a.moveCard(r.x - f.x, r.y - f.y, 300), playSound("card", 1, !1), 2 === e[0].getLength() && (m = !0)))
    };
    this.cpuPickCard = function(a) {
        var b = l.checkTurn(),
            c = e[b].getContainerPos(),
            d = k.getGlobalPosition();
        D.addChildAt(t, D.numChildren);
        e[b].setOnTop();
        a.moveCard(d.x - c.x, d.y - c.y, 400, 1E3);
        g.setChildDepth(2);
        k.setChildDepth(2);
        a.showCard(1E3)
    };
    this.playedCard = function(a) {
        var b =
            l.checkTurn(),
            c = e[b].searchIndexCard(a);
        k.pushCard(new CCard(0, 0, k.getContainer(), a.getFotogram(), a.getRank(), a.getSuit()));
        k.disableInputUsedCards();
        k.getLastCard().instantShow();
        e[b].removeCardByIndex(c);
        a.unload();
        0 !== b && e[b].checkUno();
        4 !== k.getLastCard().getSuit() && (p = k.getLastCard().getSuit(), d.refreshColor(p));
        e[b].organizeHand(c);
        this.applyEffectOnCard(a)
    };
    this.applyEffectOnCard = function(a, b) {
        var c = this;
        b || (b = !1);
        if (!0 === b) {
            q = l.checkTurn();
            l.prevTurn();
            var e = l.checkTurn()
        } else e = l.checkTurn(),
            q = l.checkNextPlayer();
        if ("color" === a.getFotogram()) 0 === e ? (!0 === m ? new CSelectColorPanel(a.getFotogram(), !0) : new CSelectColorPanel(a.getFotogram()), l.nextTurn()) : (p = this.onSelectColorCpu(e), l.nextTurn(), n.changeColor(p));
        else if ("draw_four" === a.getFotogram()) 0 === e ? !0 === m ? new CSelectColorPanel(a.getFotogram(), !0) : new CSelectColorPanel(a.getFotogram()) : (p = this.onSelectColorCpu(e), d.refreshColor(p), n.drawFourAnim());
        else if ("color" !== a.getFotogram() && "draw_four" !== a.getFotogram() && a.getSuit() === p || a.getRank() ===
            k.getLastCard().getRank())
            if (10 === a.getRank()) l.nextTurn(), l.nextTurn(), !0 === m ? setTimeout(function() {
                !0 === m && c.drawCards(0, 2, 0, !0);
                setTimeout(function() {
                    n.stopTurn()
                }, 800)
            }, 2E3) : n.stopTurn();
            else if (11 === a.getRank()) 2 < NUM_PLAYERS ? (l.changeClockWise(), !0 !== b ? l.nextTurn() : l.prevTurn()) : (l.changeClockWise(), l.nextTurn(), l.nextTurn()), !0 === m ? setTimeout(function() {
            !0 === m && c.drawCards(0, 2, 0, !0);
            setTimeout(function() {
                n.changeClockWise(l.getClockWise())
            }, 1E3)
        }, 2E3) : n.changeClockWise(l.getClockWise());
        else if (12 ===
            a.getRank()) !0 === m ? setTimeout(function() {
            !0 === m && c.drawCards(0, 2, 0, !0);
            setTimeout(function() {
                n.drawTwoAnim()
            }, 1E3)
        }, 2E3) : n.drawTwoAnim();
        else if (10 > a.getRank())
            if (l.nextTurn(), !0 === m) setTimeout(function() {
                if (!0 === m) c.drawCards(0, 2, 0, !0);
                else c.onNextTurn()
            }, 2E3);
            else this.onNextTurn()
    };
    this.onNextTurn = function() {
        if (!0 !== this.checkGameOver())
            if (0 === g.getLength() && !1 === H) H = !0, n.shuffleAnimation();
            else {
                this.setOffTurn();
                g.enableInputDraw();
                var a = l.checkTurn();
                e[a].setOnTurn(a);
                var b = k.getLastCard();
                if (0 === a) this.onInputPlayer(), !0 === this.onCheckDraw() && this.checkHelpDraw();
                else if (0 !== a) {
                    var c = [];
                    for (var d = 0; d < e[a].getLength(); d++) 4 === e[a].getCardByIndex(d).getSuit() || e[a].getCardByIndex(d).getRank() !== b.getRank() && e[a].getCardByIndex(d).getSuit() !== p ? "color" === e[a].getCardByIndex(d).getFotogram() ? c.push({
                        oCard: e[a].getCardByIndex(d),
                        iValue: 2
                    }) : "draw_four" === e[a].getCardByIndex(d).getFotogram() && c.push({
                        oCard: e[a].getCardByIndex(d),
                        iValue: 1
                    }) : 12 === e[a].getCardByIndex(d).getRank() ? c.push({
                        oCard: e[a].getCardByIndex(d),
                        iValue: 6
                    }) : 10 === e[a].getCardByIndex(d).getRank() ? c.push({
                        oCard: e[a].getCardByIndex(d),
                        iValue: 5
                    }) : 11 === e[a].getCardByIndex(d).getRank() ? c.push({
                        oCard: e[a].getCardByIndex(d),
                        iValue: 4
                    }) : c.push({
                        oCard: e[a].getCardByIndex(d),
                        iValue: 3
                    });
                    0 === c.length ? this.drawCards(a, 1, 1E3) : (c.sort(function(a, b) {
                        return parseFloat(b.iValue) - parseFloat(a.iValue)
                    }), this.cpuPickCard(c[0].oCard))
                }
            }
    };
    this.checkAvaiableDrawFour = function() {
        for (var a = !0, b, c = 0; c < e[0].getLength(); c++)
            if (b = e[0].getCardByIndex(c), b.getRank() === k.getLastCard().getRank() &&
                "draw_four" !== b.getFotogram() || b.getSuit() === p || "color" === b.getFotogram()) a = !1;
        return a
    };
    this.declareUNO = function() {
        !0 === m && (m = !1, e[0].checkUno())
    };
    this.drawCards = function(a, c, d, e) {
        e && (m = !1, (new createjs.Tween.get(O.getText())).to({
            alpha: 1
        }, 400).wait(4E3).to({
            alpha: 0
        }, 400));
        b = c;
        this.drawCardsTween(a, c, d, e)
    };
    this.drawCardsTween = function(a, c, d, f) {
        var m = this,
            r;
        D.addChildAt(A, D.numChildren);
        g.setOnTop();
        if (0 === g.getLength() && !1 === H) H = !0, n.shuffleAnimation(a, c, d);
        else if (1 === c) {
            var t = k.getLastCard();
            r;
            var q = g.takeLastCard();
            q.setOnTop();
            var v = e[a].getContainerPos();
            var x = e[a].getPosNewCard();
            var y = g.getGlobalPosition();
            (new createjs.Tween.get(q.getSprite())).wait(d).to({
                x: v.x + x.x - y.x,
                y: v.y + x.y - y.y
            }, 400, createjs.Ease.cubicOut).call(function() {
                e[a].pushCard(new CCard(e[a].getPosNewCard().x, e[a].getPosNewCard().y, e[a].getContainer(), q.getFotogram(), q.getRank(), q.getSuit()));
                q.unload();
                r = e[a].getLastCard();
                0 === a ? (r.showCard(), r.onSetTurned()) : playSound("card", 1, !1);
                e[a].centerContainer();
                r.getRank() ===
                    t.getRank() || r.getSuit() === p || "color" === r.getFotogram() || "draw_four" === r.getFotogram() ? 0 !== a && (m.onNextTurn(), playSound("card", 1, !1)) : (e[a].centerContainer(), l.nextTurn(), m.onNextTurn())
            })
        } else t = k.getLastCard(), r, q = g.takeLastCard(), q.setOnTop(), v = e[a].getContainerPos(), x = e[a].getPosNewCard(), y = g.getGlobalPosition(), (new createjs.Tween.get(q.getSprite())).wait(d).to({
            x: v.x + x.x - y.x,
            y: v.y + x.y - y.y
        }, 400, createjs.Ease.cubicOut).call(function() {
            e[a].pushCard(new CCard(e[a].getPosNewCard().x, e[a].getPosNewCard().y,
                e[a].getContainer(), q.getFotogram(), q.getRank(), q.getSuit()));
            q.unload();
            r = e[a].getLastCard();
            0 === a ? (r.showCard(), r.onSetTurned()) : playSound("card", 1, !1);
            e[a].centerContainer();
            b--;
            0 < b ? m.drawCardsTween(a, c, d, f) : (f || (l.nextTurn(), l.nextTurn()), m.onNextTurn())
        })
    };
    this.onDraw = function() {
        g.disableInputDraw();
        v = !1;
        s_oStage.removeChild(y);
        var a = !0;
        if (0 !== k.getLength() && 0 === l.checkTurn()) {
            for (var b = 0; b < e[0].getLength(); b++) {
                var c = e[0].getCardByIndex(b);
                if (c.getRank() === k.getLastCard().getRank() || c.getSuit() ===
                    p || "color" === c.getFotogram() || "draw_four" === c.getFotogram()) a = !1
            }!0 === a && (this.drawCards(0, 1), z = !1)
        }
    };
    this.onCheckDraw = function() {
        var a = !0;
        v = !0;
        if (0 !== k.getLength() && 0 === l.checkTurn()) {
            for (var b = 0; b < e[0].getLength(); b++) {
                var c = e[0].getCardByIndex(b);
                if (c.getRank() === k.getLastCard().getRank() || c.getSuit() === p || "color" === c.getFotogram() || "draw_four" === c.getFotogram()) v = a = !1
            }
            z = !0 === v && 0 === l.checkTurn() ? !0 : !1;
            return a
        }
    };
    this.onSelectColor = function(a) {
        p = a;
        d.refreshColor(p)
    };
    this.onInputPlayer = function() {
        for (var a =
                0; a < e[0].getLength(); a++) e[0].getCardByIndex(a).onSetTurned()
    };
    this.offInputPlayer = function() {
        for (var a = 0; a < e[0].getLength(); a++) e[0].getCardByIndex(a).offSetTurned()
    };
    this.onSelectColorCpu = function(a) {
        for (var b, c = [{
                iColor: 0,
                iPoints: 0
            }, {
                iColor: 1,
                iPoints: 0
            }, {
                iColor: 2,
                iPoints: 0
            }, {
                iColor: 3,
                iPoints: 0
            }], d = 0; d < e[a].getLength(); d++) {
            b = e[a].getCardByIndex(d);
            for (var f = 0; f < c.length; f++) b.getSuit() === f && c[f].iPoints++
        }
        c.sort(function(a, b) {
            return parseFloat(b.iPoints) - parseFloat(a.iPoints)
        });
        return c[0].iColor
    };
    this.onEndDrawFour = function() {
        this.drawCards(q, 4, 0)
    };
    this.onEndDrawTwo = function() {
        this.drawCards(q, 2, 0)
    };
    this.getbUNO = function() {
        return m
    };
    this.checkGameOver = function() {
        var a = !1;
        0 === e[0].getLength() && (this.gameOver(0), a = !0);
        0 === e[1].getLength() && (this.gameOver(1), a = !0);
        e[2] && 0 === e[2].getLength() && (this.gameOver(2), a = !0);
        e[3] && 0 === e[3].getLength() && (this.gameOver(3), a = !0);
        return a
    };
    this.setOffTurn = function() {
        for (var a = 0; a < NUM_PLAYERS; a++) e[a].setOffTurn(a)
    };
    this.checkNumOfCards = function() {
        if (0 === g.getLength()) {
            var a =
                k.removeAllCardUnderTheDeck();
            this.shuffle(a);
            for (var b = 0; b < a.length; b++) g.pushCard(new CCard(0, 0, g.getContainer(), a[b].getFotogram(), a[b].getRank(), a[b].getSuit())), a[b].unload();
            H = !1
        }
    };
    this.onEndShuffle = function(a, c, d) {
        this.checkNumOfCards();
        if (0 !== b) this.drawCardsTween(a, c, d);
        else this.onNextTurn()
    };
    this.shuffle = function(a) {
        var b;
        for (b = a.length; b; b--) {
            var c = Math.floor(Math.random() * b);
            var d = a[b - 1];
            a[b - 1] = a[c];
            a[c] = d
        }
    };
    this.unload = function() {
        null !== f && f.unload();
        d.unload();
        v = !1;
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.onExit = function() {
        $(s_oMain).trigger("end_session");
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this.stopFinger = function() {
        !0 === v && (v = !1)
    };
    this.gameOver = function(a) {
        x = new createjs.Shape;
        x.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        x.alpha = 0;
        x.on("mousedown", function() {});
        s_oStage.addChild(x);
        (new createjs.Tween.get(x)).to({
            alpha: .7
        }, 500);
        c = 0 === a ? Math.floor(1 / N * c) : 0;
        f = new CEndPanel(s_oSpriteLibrary.getSprite("credits_panel"));
        f.show(c, a)
    };
    this.checkHelpDraw =
        function() {
            setTimeout(function() {
                !0 === v && s_oStage.addChildAt(y, s_oStage.numChildren)
            }, 5E3)
        };
    this.onMouseOverDeck = function(a) {
        s_bMobile || (a.target.cursor = !0 === z ? "pointer" : "default")
    };
    this.update = function() {};
    s_oGame = this;
    STARTING_NUM_CARDS = a.starting_num_cards;
    this._init()
}
var s_oGame;

function CInterface() {
    var a, c, b, d, f, g, e, k, l, p, m, n, q, y, v = null,
        x = null,
        z, A;
    this._init = function() {
        A = new createjs.Container;
        var t = s_oSpriteLibrary.getSprite("but_exit");
        e = CANVAS_WIDTH - t.height / 2 - 10;
        k = t.height / 2 + 10;
        n = new CGfxButton(e, k, t, A);
        n.addEventListener(ON_MOUSE_UP, this._onExit, this);
        f = CANVAS_WIDTH - t.width / 2 - 100;
        g = t.height / 2 + 10;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t = s_oSpriteLibrary.getSprite("audio_icon"), m = new CToggle(f, g, t, s_bAudioActive, A), m.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
            this);
        t = window.document;
        var D = t.documentElement;
        v = D.requestFullscreen || D.mozRequestFullScreen || D.webkitRequestFullScreen || D.msRequestFullscreen;
        x = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (v = !1);
        v && screenfull.isEnabled && (t = s_oSpriteLibrary.getSprite("but_fullscreen"), b = t.width / 4 + 10, d = t.height / 2 + 10, q = new CToggle(b, d, t, s_bFullscreen, A), q.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
        t = s_oSpriteLibrary.getSprite("but_uno");
        a =
            CANVAS_WIDTH / 2 + 222;
        c = CANVAS_HEIGHT / 2 + 70;
        z = new CGfxButton(a, c, t, s_oStage);
        z.addEventListener(ON_MOUSE_UP, this._onButUno, this);
        t = s_oSpriteLibrary.getSprite("colors");
        t = new createjs.SpriteSheet({
            images: [t],
            frames: {
                width: 103,
                height: 102,
                regX: 51.5,
                regY: 51
            },
            animations: {
                red: [0],
                green: [1],
                blue: [2],
                yellow: [3]
            }
        });
        l = CANVAS_WIDTH / 2 + 220;
        p = CANVAS_HEIGHT / 2 - 60;
        y = new createjs.Sprite(t, 0);
        y.stop();
        y.x = l;
        y.y = p;
        s_oStage.addChild(A);
        this.refreshButtonPos()
    };
    this.setButtonUno = function(a) {
        z.setClickable(a)
    };
    this.refreshColor =
        function(a) {
            y.gotoAndStop(a);
            s_oStage.addChildAt(y, 1)
        };
    this._onButUno = function() {
        s_oGame.declareUNO()
    };
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m.unload(), m = null;
        n.unload();
        v && screenfull.isEnabled && q.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function() {
        n.setPosition(e - s_iOffsetX, s_iOffsetY + k);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || m.setPosition(f - s_iOffsetX, s_iOffsetY + g);
        v && screenfull.isEnabled && q.setPosition(b + s_iOffsetX, d + s_iOffsetY)
    };
    this.setOnTop = function() {
        s_oStage.addChildAt(A,
            s_oStage.numChildren)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        new CAreYouSurePanel(s_oGame.onExit)
    };
    this.resetFullscreenBut = function() {
        v && screenfull.isEnabled && q.setActive(s_bFullscreen)
    };
    this._onFullscreen = function() {
        s_bFullscreen ? x.call(window.document) : v.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CCreditsPanel() {
    var a, c, b, d, f;
    this._init = function() {
        c = new createjs.Shape;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = 0;
        c.on("mousedown", function() {});
        s_oStage.addChild(c);
        (new createjs.Tween.get(c)).to({
            alpha: .7
        }, 500);
        b = new createjs.Container;
        s_oStage.addChild(b);
        var g = s_oSpriteLibrary.getSprite("credits_panel"),
            e = createBitmap(g);
        e.regX = g.width / 2;
        e.regY = g.height / 2;
        b.addChild(e);
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT + g.height / 2;
        a = b.y;
        (new createjs.Tween.get(b)).to({
            y: CANVAS_HEIGHT /
                2 - 40
        }, 500, createjs.Ease.quartIn);
        e = new createjs.Text(TEXT_DEVELOPED, "20px " + PRIMARY_FONT, "#ffffff");
        e.y = -g.height / 2 + 80;
        e.textAlign = "center";
        e.textBaseline = "middle";
        e.lineWidth = 300;
        b.addChild(e);
        g = new createjs.Text("www.codethislab.com", "30px " + PRIMARY_FONT, "#ffffff");
        g.y = 80;
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.lineWidth = 500;
        b.addChild(g);
        g = s_oSpriteLibrary.getSprite("ctl_logo");
        f = createBitmap(g);
        f.on("click", this._onLogoButRelease);
        f.regX = g.width / 2;
        f.regY = g.height / 2;
        b.addChild(f);
        g = s_oSpriteLibrary.getSprite("but_exit");
        d = new CGfxButton(230, -107, g, b);
        d.addEventListener(ON_MOUSE_UP, this.unload, this)
    };
    this.unload = function() {
        d.setClickable(!1);
        (new createjs.Tween.get(c)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(b)).to({
            y: a
        }, 400, createjs.Ease.backIn).call(function() {
            s_oStage.removeChild(c);
            s_oStage.removeChild(b);
            d.unload()
        });
        c.off("mousedown", function() {});
        f.off("mousedown", this._onLogoButRelease)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en")
    };
    this._init()
}

function CSelectColorPanel(a, c) {
    var b, d, f, g, e = this,
        k, l, p, m;
    this._init = function() {
        "color" === a && playSound("special_card", .5, !1);
        e = this;
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        d.on("mousedown", function() {});
        s_oStage.addChild(d);
        (new createjs.Tween.get(d, {
            override: !0
        })).to({
            alpha: .7
        }, 500);
        f = new createjs.Container;
        s_oStage.addChild(f);
        g = new createjs.Container;
        f.addChild(g);
        var c = s_oSpriteLibrary.getSprite("select_color_panel"),
            q = createBitmap(c);
        q.regX = c.width / 2;
        q.regY = c.height / 2;
        f.addChildAt(q, 0);
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT + c.height / 2;
        b = f.y;
        (new createjs.Tween.get(f, {
            override: !0
        })).to({
            y: CANVAS_HEIGHT / 2 - 40
        }, 600, createjs.Ease.backOut);
        new CTLText(f, -250, -c.height / 2 + 10, 500, 110, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_SELECT_COLOR, !0, !0, !0, !1);
        g.y = f.getBounds().height / 5;
        c = s_oSpriteLibrary.getSprite("but_red");
        k = new CGfxButton(-190, -20, c, g);
        k.addEventListener(ON_MOUSE_UP, function() {
            e.onSelectColor(0);
            g
        });
        c = s_oSpriteLibrary.getSprite("but_green");
        l = new CGfxButton(-65, -20, c, g);
        l.addEventListener(ON_MOUSE_UP, function() {
            e.onSelectColor(1);
            g
        });
        c = s_oSpriteLibrary.getSprite("but_blue");
        p = new CGfxButton(65, -20, c, g);
        p.addEventListener(ON_MOUSE_UP, function() {
            e.onSelectColor(2);
            g
        });
        c = s_oSpriteLibrary.getSprite("but_yellow");
        m = new CGfxButton(190, -20, c, g);
        m.addEventListener(ON_MOUSE_UP, function() {
            e.onSelectColor(3);
            g
        })
    };
    this.onSelectColor = function(a) {
        s_oGame.onSelectColor(a);
        e.unload()
    };
    this.unload = function() {
        "color" === a ? ((new createjs.Tween.get(d, {
            override: !0
        })).to({
                alpha: 0
            },
            500), (new createjs.Tween.get(f, {
            override: !0
        })).to({
            y: b
        }, 400, createjs.Ease.backIn).call(function() {
            s_oStage.removeChild(d, {
                override: !0
            });
            s_oStage.removeChild(f, {
                override: !0
            });
            if (c) setTimeout(function() {
                if (!0 === s_oGame.getbUNO()) s_oGame.drawCards(0, 2, 0, c);
                else s_oGame.onNextTurn()
            }, 2E3);
            else s_oGame.onNextTurn()
        })) : ((new createjs.Tween.get(d, {
            override: !0
        })).to({
            alpha: 0
        }, 500), (new createjs.Tween.get(f, {
            override: !0
        })).to({
            y: b
        }, 400, createjs.Ease.backIn).call(function() {
            s_oStage.removeChild(d);
            s_oStage.removeChild(f);
            c ? setTimeout(function() {
                !0 === s_oGame.getbUNO() && s_oGame.drawCards(0, 2, 0, c);
                setTimeout(function() {
                    s_oCAnimation.drawFourAnim()
                }, 1E3)
            }, 2E3) : s_oCAnimation.drawFourAnim()
        }));
        d.off("mousedown", function() {})
    };
    this._init()
}

function CAreYouSurePanel(a) {
    var c, b, d, f, g;
    this._init = function(a) {
        s_oGame.stopFinger();
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        f.on("mousedown", function() {});
        s_oStage.addChild(f);
        (new createjs.Tween.get(f)).to({
            alpha: .7
        }, 500);
        g = new createjs.Container;
        s_oStage.addChildAt(g, s_oStage.numChildren);
        a = s_oSpriteLibrary.getSprite("credits_panel");
        var e = createBitmap(a);
        e.regX = a.width / 2;
        e.regY = a.height / 2;
        g.addChild(e);
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT +
            a.height / 2;
        c = g.y;
        (new createjs.Tween.get(g)).to({
            y: CANVAS_HEIGHT / 2 - 40
        }, 500, createjs.Ease.quartIn).call(function() {
            createjs.Ticker.paused = !0
        });
        (new CTLText(g, -250, -130, 500, 150, 50, "center", "#000000", PRIMARY_FONT, 1, 0, 0, TEXT_ARE_SURE, !0, !0, !0, !1)).setOutline(5);
        new CTLText(g, -250, -130, 500, 150, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_ARE_SURE, !0, !0, !0, !1);
        b = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite("but_yes_big"), g);
        b.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        d = new CGfxButton(-110, 80,
            s_oSpriteLibrary.getSprite("but_exit_big"), g);
        d.addEventListener(ON_MOUSE_UP, this._onButNo, this)
    };
    this._onButYes = function() {
        d.setClickable(!1);
        b.setClickable(!1);
        createjs.Ticker.paused = !1;
        (new createjs.Tween.get(f)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(g)).to({
            y: c
        }, 400, createjs.Ease.backIn).call(function() {
            a();
            e.unload()
        })
    };
    this._onButNo = function() {
        createjs.Ticker.paused = !1;
        d.setClickable(!1);
        b.setClickable(!1);
        (new createjs.Tween.get(f)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(g)).to({
                y: c
            },
            400, createjs.Ease.backIn).call(function() {
            e.unload()
        })
    };
    this.unload = function() {
        d.unload();
        b.unload();
        s_oStage.removeChild(f);
        s_oStage.removeChild(g);
        f.off("mousedown", function() {})
    };
    var e = this;
    this._init(a)
}

function CEndPanel(a) {
    var c, b, d, f, g, e, k;
    this._init = function(a) {
        b = new createjs.Container;
        b.alpha = 0;
        b.visible = !1;
        s_oStage.addChild(b);
        c = createBitmap(a);
        a = c.getBounds();
        c.regX = a.width / 2;
        c.regY = a.height / 2;
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        b.addChild(c);
        d = new CTLText(b, CANVAS_WIDTH / 2 - 250, CANVAS_HEIGHT / 2 - 130, 500, 150, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !0, !1);
        f = new CTLText(b, CANVAS_WIDTH / 2 - 250, CANVAS_HEIGHT / 2 + 30, 500, 50, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !1, !1);
        a = s_oSpriteLibrary.getSprite("but_restart");
        e = new CGfxButton(CANVAS_WIDTH / 2 + 60, CANVAS_HEIGHT / 2 + 180, a, b);
        a = s_oSpriteLibrary.getSprite("but_home");
        k = new CGfxButton(CANVAS_WIDTH / 2 - 60, CANVAS_HEIGHT / 2 + 180, a, b)
    };
    this.unload = function() {};
    this._initListener = function() {
        k.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
        e.addEventListener(ON_MOUSE_DOWN, this._onRestart, this)
    };
    this.show = function(a, c) {
        playSound("game_over", 1, !1);
        g = a;
        var e = c + 1;
        0 === c ? (d.refreshText(TEXT_GAMEOVER), d.y = CANVAS_HEIGHT / 2 - 30) : (g = a = 0, d.refreshText(TEXT_LOSE + e + TEXT_LOSE2));
        f.refreshText(TEXT_SCORE +
            ": " + a);
        b.visible = !0;
        var k = this;
        createjs.Tween.get(b).to({
            alpha: 1
        }, 500).call(function() {
            k._initListener()
        });
        $(s_oMain).trigger("save_score", a);
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session")
    };
    this._onExit = function() {
        $(s_oMain).trigger("share_event", g);
        b.off("mousedown", this._onExit);
        s_oStage.removeChild(b);
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this._onRestart = function() {
        s_oGame.unload();
        s_oMain.gotoGame(!1);
        s_oStage.removeChild(b)
    };
    this._init(a);
    return this
}
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var a = this._iFontSize;
                (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--, this._oText.font = a + "px " + this._szFont, this._oText.lineHeight = Math.round(a * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > a););
            this._iFontSize = a
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var a = this._oText.getBounds().height;
            this._oText.y -=
                (a - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(a) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(a,
            this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
            case "center":
                this._oText.x = this._x + this._iWidth / 2;
                break;
            case "left":
                this._oText.x = this._x + this._iPaddingH;
                break;
            case "right":
                this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(a)
    },
    setVerticalAlign: function(a) {
        this._bVerticalAlign = a
    },
    setOutline: function(a) {
        null !== this._oText && (this._oText.outline = a)
    },
    setShadow: function(a, c, b, d) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, c, b, d))
    },
    setColor: function(a) {
        this._oText.color = a
    },
    setAlpha: function(a) {
        this._oText.alpha = a
    },
    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function() {
        return this._oText
    },
    getY: function() {
        return this._y
    },
    getFontSize: function() {
        return this._iFontSize
    },
    refreshText: function(a) {
        "" === a && (a = " ");
        null === this._oText && this.__createText(a);
        this._oText.text = a;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};

function CTLText(a, c, b, d, f, g, e, k, l, p, m, n, q, y, v, x, z) {
    this._oContainer = a;
    this._x = c;
    this._y = b;
    this._iWidth = d;
    this._iHeight = f;
    this._bMultiline = x;
    this._iFontSize = g;
    this._szAlign = e;
    this._szColor = k;
    this._szFont = l;
    this._iPaddingH = m;
    this._iPaddingV = n;
    this._bVerticalAlign = v;
    this._bFitText = y;
    this._bDebug = z;
    this._oDebugShape = null;
    this._fLineHeightFactor = p;
    this._oText = null;
    q && this.__createText(q)
};