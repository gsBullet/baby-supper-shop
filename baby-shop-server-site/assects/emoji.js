/* emoji-js 2022-06-03 */
"use strict";
! function () {
    function f() {
        var f = this;
        return f.img_set = "apple", f.img_sets = {
            apple: {
                path: "/emoji-data/img-apple-64/",
                sheet: "/emoji-data/sheet_apple_64.png",
                sheet_size: 64,
                mask: 1
            },
            google: {
                path: "/emoji-data/img-google-64/",
                sheet: "/emoji-data/sheet_google_64.png",
                sheet_size: 64,
                mask: 2
            },
            twitter: {
                path: "/emoji-data/img-twitter-64/",
                sheet: "/emoji-data/sheet_twitter_64.png",
                sheet_size: 64,
                mask: 4
            },
            facebook: {
                path: "/emoji-data/img-facebook-64/",
                sheet: "/emoji-data/sheet_facebook_64.png",
                sheet_size: 64,
                mask: 8
            },
            messenger: {
                path: "/emoji-data/img-messenger-64/",
                sheet: "/emoji-data/sheet_messenger_64.png",
                sheet_size: 64,
                mask: 16
            }
        }, f.use_css_imgs = !1, f.colons_mode = !1, f.text_mode = !1, f.include_title = !1, f.include_text = !1, f.allow_native = !0, f.wrap_native = !1, f.use_sheet = !1, f.avoid_ms_emoji = !0, f.allow_caps = !1, f.img_suffix = "", f.inits = {}, f.map = {}, f.init_env(), f
    }
    var e = this,
        d = e.EmojiConvertor;
    f.prototype.noConflict = function () {
        return e.EmojiConvertor = d, f
    }, f.prototype.replace_emoticons = function (f) {
        f = this.replace_emoticons_with_colons(f);
        return this.replace_colons(f)
    }, f.prototype.replace_emoticons_with_colons = function (n) {
        var i = this;
        i.init_emoticons();
        var f, t = 0,
            r = [],
            e = n.replace(i.rx_emoticons, function (f, e, d, a) {
                var c = t;
                t = a + f.length;
                var b = -1 !== d.indexOf("("),
                    o = -1 !== d.indexOf(")");
                if ((b || o) && -1 == r.indexOf(d) && r.push(d), o && !b) {
                    c = n.substring(c, a);
                    if (-1 !== c.indexOf("(") && -1 === c.indexOf(")")) return f
                }
                if ("\n8)" === f) {
                    a = n.substring(0, a);
                    if (/\n?(6\)|7\))/.test(a)) return f
                }
                d = i.data[i.map.emoticons[d]][3][0];
                return d ? e + ":" + d + ":" : f
            });
        return r.length && (f = r.map(i.escape_rx), f = new RegExp("(\\(.+)(" + f.join("|") + ")(.+\\))", "g"), e = e.replace(f, function (f, e, d, a) {
            d = i.data[i.map.emoticons[d]][3][0];
            return d ? e + ":" + d + ":" + a : f
        })), e
    }, f.prototype.replace_colons = function (f) {
        var b = this;
        return b.init_colons(), f.replace(b.rx_colons, function (f) {
            var e = f.substr(1, f.length - 2);
            if (-1 < (e = b.allow_caps ? e.toLowerCase() : e).indexOf("::skin-tone-")) {
                var d, a = "skin-tone-" + e.substr(-1, 1),
                    c = b.map.colons[a],
                    e = e.substr(0, e.length - 13);
                return (d = b.map.colons[e]) ? b.replacement(d, e, ":", {
                    idx: c,
                    actual: a,
                    wrapper: ":"
                }) : ":" + e + ":" + b.replacement(c, a, ":")
            }
            return (d = b.map.colons[e]) ? b.replacement(d, e, ":") : f
        })
    }, f.prototype.replace_unified = function (f) {
        var b = this;
        return b.init_unified(), f.replace(b.rx_unified, function (f, e, d) {
            var a = b.map.unified[e];
            if (a) {
                var c = "🏿" == d ? "1f3ff" : "🏾" == d ? "1f3fe" : "🏽" == d ? "1f3fd" : "🏼" == d ? "1f3fc" : "🏻" == d ? "1f3fb" : null;
                return c ? b.replacement(a, null, null, {
                    idx: c,
                    actual: d,
                    wrapper: ""
                }) : b.replacement(a)
            }
            return (a = b.map.unified_vars[e]) ? b.replacement(a[0], null, null, {
                idx: a[1],
                actual: "",
                wrapper: ""
            }) : f
        })
    }, f.prototype.addAliases = function (f) {
        for (var e in this.init_colons(), f) this.map.colons[e] = f[e]
    }, f.prototype.removeAliases = function (f) {
        for (var e = this, d = 0; d < f.length; d++) {
            var a = f[d];
            delete e.map.colons[a];
            f: for (var c in e.data)
                for (var b = 0; b < e.data[c][3].length; b++)
                    if (a == e.data[c][3][b]) {
                        e.map.colons[a] = c;
                        break f
                    }
        }
    }, f.prototype.replacement = function (f, e, d, a, c) {
        var b = this,
            o = "",
            n = null;
        if ("object" == typeof a && (o = b.replacement(a.idx, a.actual, a.wrapper, void 0, !0), n = a.idx), d = d || "", b.colons_mode) return ":" + b.data[f][3][0] + ":" + o;
        var i = e ? d + e + d : b.data[f][8] || d + b.data[f][3][0] + d;
        if (b.text_mode) return i + o;
        i = b.find_image(f, n);
        if (b.init_env(), "softbank" == b.replace_mode && b.allow_native && b.data[f][1]) return b.format_native(b.data[f][1] + o, !c);
        if ("google" == b.replace_mode && b.allow_native && b.data[f][2]) return b.format_native(b.data[f][2] + o, !c);
        if (i.is_var && (o = ""), "unified" == b.replace_mode && b.allow_native) return b.format_native(i.unified + o, !c);
        n = b.include_title ? ' title="' + (e || b.data[f][3][0]) + '"' : "", c = b.include_text ? d + (e || b.data[f][3][0]) + d : "";
        if (b.data[f][7] && (i.path = b.data[f][7], i.px = null, i.py = null, i.is_var = !1), i.is_var && b.include_text && a && a.actual && a.wrapper && (c += a.wrapper + a.actual + a.wrapper), "css" != b.replace_mode) return '<img src="' + i.path + '" class="emoji" data-codepoints="' + i.full_idx + '" ' + n + "/>" + o;
        if (b.use_sheet && null != i.px && null != i.py) {
            e = 100 * i.px / (b.sheet_size - 1), d = 100 * i.py / (b.sheet_size - 1), a = 100 * b.sheet_size;
            return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="' + ("background: url(" + i.sheet + ");background-position:" + e + "% " + d + "%;background-size:" + a + "% " + a + "%") + '"' + n + ' data-codepoints="' + i.full_idx + '">' + c + "</span></span>" + o
        }
        return b.use_css_imgs ? '<span class="emoji emoji-' + f + '"' + n + ' data-codepoints="' + i.full_idx + '">' + c + "</span>" + o : '<span class="emoji emoji-sizer" style="background-image:url(' + i.path + ')"' + n + ' data-codepoints="' + i.full_idx + '">' + c + "</span>" + o
    }, f.prototype.format_native = function (f, e) {
        return this.wrap_native && e ? '<span class="emoji-native">' + f + "</span>" : f
    }, f.prototype.find_image = function (f, e) {
        var d = this,
            a = {
                path: "",
                sheet: "",
                sheet_size: 0,
                px: d.data[f][4],
                py: d.data[f][5],
                full_idx: f,
                is_var: !1,
                unified: d.data[f][0][0]
            },
            c = d.data[f][6];
        e && d.variations_data[f] && d.variations_data[f][e] && (e = d.variations_data[f][e], a.px = e[1], a.py = e[2], a.full_idx = e[0], a.is_var = !0, a.unified = e[4][0], c = e[3]);
        for (var b = [d.img_set, "apple", "google", "twitter", "facebook", "messenger"], o = 0; o < b.length; o++) {
            if (!d.img_sets[b[o]]) throw Error("Invalid value for img_set");
            if (c & d.img_sets[b[o]].mask) return a.path = d.img_sets[b[o]].path + a.full_idx + ".png" + d.img_suffix, a.sheet = d.img_sets[d.img_set].sheet, a.sheet_size = d.img_sets[d.img_set].sheet_size, a;
            if (d.obsoletes_data[a.full_idx]) {
                var n = d.obsoletes_data[a.full_idx];
                if (n[3] & d.img_sets[b[o]].mask) return a.path = d.img_sets[b[o]].path + n[0] + ".png" + d.img_suffix, a.sheet = d.img_sets[b[o]].sheet, a.sheet_size = d.img_sets[b[o]].sheet_size, a.px = n[1], a.py = n[2], a
            }
        }
        return a
    }, f.prototype.init_emoticons = function () {
        var f = this;
        if (!f.inits.emoticons) {
            f.init_colons(), f.inits.emoticons = 1;
            var e, d = [];
            for (e in f.map.emoticons = {}, f.emoticons_data) {
                var a = e.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
                f.map.colons[f.emoticons_data[e]] && (f.map.emoticons[a] = f.map.colons[f.emoticons_data[e]], d.push(f.escape_rx(a)))
            }
            f.rx_emoticons = new RegExp("(^|\\s)(" + d.join("|") + ")(?=$|[\\s|\\?\\.,!])", "g")
        }
    }, f.prototype.init_colons = function () {
        var f = this;
        if (!f.inits.colons)
            for (var e in f.inits.colons = 1, f.rx_colons = new RegExp(":[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?", "g"), f.map.colons = {}, f.data)
                for (var d = 0; d < f.data[e][3].length; d++) f.map.colons[f.data[e][3][d]] = e
    }, f.prototype.init_unified = function () {
        var f = this;
        if (!f.inits.unified) {
            f.inits.unified = 1;
            var e, d = [];
            for (e in f.map.unified = {}, f.map.unified_vars = {}, f.data)
                for (var a = 0; a < f.data[e][0].length; a++) d.push(f.data[e][0][a].replace("*", "\\*")), f.map.unified[f.data[e][0][a]] = e;
            for (e in f.variations_data)
                if (!f.variations_data[e]["1f3fb"] || f.variations_data[e]["1f3fb"][0] != e + "-1f3fb")
                    for (var c in f.variations_data[e])
                        for (a = 0; a < f.variations_data[e][c][4].length; a++) d.push(f.variations_data[e][c][4][a].replace("*", "\\*")), f.map.unified_vars[f.variations_data[e][c][4][a]] = [e, c];
            d = d.sort(function (f, e) {
                return e.length - f.length
            }), f.rx_unified = new RegExp("(" + d.join("|") + ")(\ud83c[\udffb-\udfff])?", "g")
        }
    }, f.prototype.init_env = function () {
        var f = this;
        if (!f.inits.env) {
            f.inits.env = 1;
            var e = !(f.replace_mode = "img");
            if ("undefined" != typeof navigator) {
                var d = navigator.userAgent;
                if ("undefined" != typeof window && window.getComputedStyle) try {
                    var a = window.getComputedStyle(document.body);
                    (a["background-size"] || a.backgroundSize) && (e = !0)
                } catch (f) {
                    d.match(/Firefox/i) && (e = !0)
                }
                if (navigator.product.match(/ReactNative/i)) return void(f.replace_mode = "unified");
                if (d.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)) {
                    if (d.match(/OS\s+[12345]/i)) return void(f.replace_mode = "softbank");
                    if (d.match(/OS\s+[6789]/i)) return void(f.replace_mode = "unified")
                }
                if (d.match(/Mac OS X (10[._ ](?:[789]|1)|11[._ ]\d)/i)) return void(f.replace_mode = "unified");
                if (!f.avoid_ms_emoji && (d.match(/Windows NT 6.[1-9]/i) || d.match(/Windows NT 10.[0-9]/i)) && !d.match(/Chrome/i) && !d.match(/MSIE 8/i)) return void(f.replace_mode = "unified")
            }
            0, e && (f.replace_mode = "css")
        }
    }, f.prototype.escape_rx = function (f) {
        return f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }, f.prototype.sheet_size = 60, f.prototype.data = {
        "0023-fe0f-20e3": [
            ["#️⃣", "#⃣"], "", "󾠬", ["hash"], 0, 0, 7, 0
        ],
        "002a-fe0f-20e3": [
            ["*️⃣", "*⃣"], "", "", ["keycap_star"], 0, 1, 7, 0
        ],
        "0030-fe0f-20e3": [
            ["0️⃣", "0⃣"], "", "󾠷", ["zero"], 0, 2, 7, 0
        ],
        "0031-fe0f-20e3": [
            ["1️⃣", "1⃣"], "", "󾠮", ["one"], 0, 3, 7, 0
        ],
        "0032-fe0f-20e3": [
            ["2️⃣", "2⃣"], "", "󾠯", ["two"], 0, 4, 7, 0
        ],
        "0033-fe0f-20e3": [
            ["3️⃣", "3⃣"], "", "󾠰", ["three"], 0, 5, 7, 0
        ],
        "0034-fe0f-20e3": [
            ["4️⃣", "4⃣"], "", "󾠱", ["four"], 0, 6, 7, 0
        ],
        "0035-fe0f-20e3": [
            ["5️⃣", "5⃣"], "", "󾠲", ["five"], 0, 7, 7, 0
        ],
        "0036-fe0f-20e3": [
            ["6️⃣", "6⃣"], "", "󾠳", ["six"], 0, 8, 7, 0
        ],
        "0037-fe0f-20e3": [
            ["7️⃣", "7⃣"], "", "󾠴", ["seven"], 0, 9, 7, 0
        ],
        "0038-fe0f-20e3": [
            ["8️⃣", "8⃣"], "", "󾠵", ["eight"], 0, 10, 7, 0
        ],
        "0039-fe0f-20e3": [
            ["9️⃣", "9⃣"], "", "󾠶", ["nine"], 0, 11, 7, 0
        ],
        "00a9-fe0f": [
            ["©️", "©"], "", "󾬩", ["copyright"], 0, 12, 7, 0
        ],
        "00ae-fe0f": [
            ["®️", "®"], "", "󾬭", ["registered"], 0, 13, 7, 0
        ],
        "1f004": [
            ["🀄"], "", "󾠋", ["mahjong"], 0, 14, 15, 0
        ],
        "1f0cf": [
            ["🃏"], "", "󾠒", ["black_joker"], 0, 15, 15, 0
        ],
        "1f170-fe0f": [
            ["🅰️", "🅰"], "", "󾔋", ["a"], 0, 16, 15, 0
        ],
        "1f171-fe0f": [
            ["🅱️", "🅱"], "", "󾔌", ["b"], 0, 17, 15, 0
        ],
        "1f17e-fe0f": [
            ["🅾️", "🅾"], "", "󾔎", ["o2"], 0, 18, 15, 0
        ],
        "1f17f-fe0f": [
            ["🅿️", "🅿"], "", "󾟶", ["parking"], 0, 19, 15, 0
        ],
        "1f18e": [
            ["🆎"], "", "󾔍", ["ab"], 0, 20, 15, 0
        ],
        "1f191": [
            ["🆑"], "", "󾮄", ["cl"], 0, 21, 15, 0
        ],
        "1f192": [
            ["🆒"], "", "󾬸", ["cool"], 0, 22, 15, 0
        ],
        "1f193": [
            ["🆓"], "", "󾬡", ["free"], 0, 23, 15, 0
        ],
        "1f194": [
            ["🆔"], "", "󾮁", ["id"], 0, 24, 15, 0
        ],
        "1f195": [
            ["🆕"], "", "󾬶", ["new"], 0, 25, 15, 0
        ],
        "1f196": [
            ["🆖"], "", "󾬨", ["ng"], 0, 26, 15, 0
        ],
        "1f197": [
            ["🆗"], "", "󾬧", ["ok"], 0, 27, 15, 0
        ],
        "1f198": [
            ["🆘"], "", "󾭏", ["sos"], 0, 28, 15, 0
        ],
        "1f199": [
            ["🆙"], "", "󾬷", ["up"], 0, 29, 15, 0
        ],
        "1f19a": [
            ["🆚"], "", "󾬲", ["vs"], 0, 30, 15, 0
        ],
        "1f1e6-1f1e8": [
            ["🇦🇨"], "", "", ["flag-ac"], 0, 31, 15, 0
        ],
        "1f1e6-1f1e9": [
            ["🇦🇩"], "", "", ["flag-ad"], 0, 32, 15, 0
        ],
        "1f1e6-1f1ea": [
            ["🇦🇪"], "", "", ["flag-ae"], 0, 33, 15, 0
        ],
        "1f1e6-1f1eb": [
            ["🇦🇫"], "", "", ["flag-af"], 0, 34, 15, 0
        ],
        "1f1e6-1f1ec": [
            ["🇦🇬"], "", "", ["flag-ag"], 0, 35, 15, 0
        ],
        "1f1e6-1f1ee": [
            ["🇦🇮"], "", "", ["flag-ai"], 0, 36, 15, 0
        ],
        "1f1e6-1f1f1": [
            ["🇦🇱"], "", "", ["flag-al"], 0, 37, 15, 0
        ],
        "1f1e6-1f1f2": [
            ["🇦🇲"], "", "", ["flag-am"], 0, 38, 15, 0
        ],
        "1f1e6-1f1f4": [
            ["🇦🇴"], "", "", ["flag-ao"], 0, 39, 15, 0
        ],
        "1f1e6-1f1f6": [
            ["🇦🇶"], "", "", ["flag-aq"], 0, 40, 15, 0
        ],
        "1f1e6-1f1f7": [
            ["🇦🇷"], "", "", ["flag-ar"], 0, 41, 15, 0
        ],
        "1f1e6-1f1f8": [
            ["🇦🇸"], "", "", ["flag-as"], 0, 42, 15, 0
        ],
        "1f1e6-1f1f9": [
            ["🇦🇹"], "", "", ["flag-at"], 0, 43, 15, 0
        ],
        "1f1e6-1f1fa": [
            ["🇦🇺"], "", "", ["flag-au"], 0, 44, 15, 0
        ],
        "1f1e6-1f1fc": [
            ["🇦🇼"], "", "", ["flag-aw"], 0, 45, 15, 0
        ],
        "1f1e6-1f1fd": [
            ["🇦🇽"], "", "", ["flag-ax"], 0, 46, 15, 0
        ],
        "1f1e6-1f1ff": [
            ["🇦🇿"], "", "", ["flag-az"], 0, 47, 15, 0
        ],
        "1f1e7-1f1e6": [
            ["🇧🇦"], "", "", ["flag-ba"], 0, 48, 15, 0
        ],
        "1f1e7-1f1e7": [
            ["🇧🇧"], "", "", ["flag-bb"], 0, 49, 15, 0
        ],
        "1f1e7-1f1e9": [
            ["🇧🇩"], "", "", ["flag-bd"], 0, 50, 15, 0
        ],
        "1f1e7-1f1ea": [
            ["🇧🇪"], "", "", ["flag-be"], 0, 51, 15, 0
        ],
        "1f1e7-1f1eb": [
            ["🇧🇫"], "", "", ["flag-bf"], 0, 52, 15, 0
        ],
        "1f1e7-1f1ec": [
            ["🇧🇬"], "", "", ["flag-bg"], 0, 53, 15, 0
        ],
        "1f1e7-1f1ed": [
            ["🇧🇭"], "", "", ["flag-bh"], 0, 54, 15, 0
        ],
        "1f1e7-1f1ee": [
            ["🇧🇮"], "", "", ["flag-bi"], 0, 55, 15, 0
        ],
        "1f1e7-1f1ef": [
            ["🇧🇯"], "", "", ["flag-bj"], 0, 56, 15, 0
        ],
        "1f1e7-1f1f1": [
            ["🇧🇱"], "", "", ["flag-bl"], 0, 57, 15, 0
        ],
        "1f1e7-1f1f2": [
            ["🇧🇲"], "", "", ["flag-bm"], 0, 58, 15, 0
        ],
        "1f1e7-1f1f3": [
            ["🇧🇳"], "", "", ["flag-bn"], 0, 59, 15, 0
        ],
        "1f1e7-1f1f4": [
            ["🇧🇴"], "", "", ["flag-bo"], 1, 0, 15, 0
        ],
        "1f1e7-1f1f6": [
            ["🇧🇶"], "", "", ["flag-bq"], 1, 1, 15, 0
        ],
        "1f1e7-1f1f7": [
            ["🇧🇷"], "", "", ["flag-br"], 1, 2, 15, 0
        ],
        "1f1e7-1f1f8": [
            ["🇧🇸"], "", "", ["flag-bs"], 1, 3, 15, 0
        ],
        "1f1e7-1f1f9": [
            ["🇧🇹"], "", "", ["flag-bt"], 1, 4, 15, 0
        ],
        "1f1e7-1f1fb": [
            ["🇧🇻"], "", "", ["flag-bv"], 1, 5, 15, 0
        ],
        "1f1e7-1f1fc": [
            ["🇧🇼"], "", "", ["flag-bw"], 1, 6, 15, 0
        ],
        "1f1e7-1f1fe": [
            ["🇧🇾"], "", "", ["flag-by"], 1, 7, 15, 0
        ],
        "1f1e7-1f1ff": [
            ["🇧🇿"], "", "", ["flag-bz"], 1, 8, 15, 0
        ],
        "1f1e8-1f1e6": [
            ["🇨🇦"], "", "", ["flag-ca"], 1, 9, 15, 0
        ],
        "1f1e8-1f1e8": [
            ["🇨🇨"], "", "", ["flag-cc"], 1, 10, 15, 0
        ],
        "1f1e8-1f1e9": [
            ["🇨🇩"], "", "", ["flag-cd"], 1, 11, 15, 0
        ],
        "1f1e8-1f1eb": [
            ["🇨🇫"], "", "", ["flag-cf"], 1, 12, 15, 0
        ],
        "1f1e8-1f1ec": [
            ["🇨🇬"], "", "", ["flag-cg"], 1, 13, 15, 0
        ],
        "1f1e8-1f1ed": [
            ["🇨🇭"], "", "", ["flag-ch"], 1, 14, 15, 0
        ],
        "1f1e8-1f1ee": [
            ["🇨🇮"], "", "", ["flag-ci"], 1, 15, 15, 0
        ],
        "1f1e8-1f1f0": [
            ["🇨🇰"], "", "", ["flag-ck"], 1, 16, 15, 0
        ],
        "1f1e8-1f1f1": [
            ["🇨🇱"], "", "", ["flag-cl"], 1, 17, 15, 0
        ],
        "1f1e8-1f1f2": [
            ["🇨🇲"], "", "", ["flag-cm"], 1, 18, 15, 0
        ],
        "1f1e8-1f1f3": [
            ["🇨🇳"], "", "󾓭", ["cn", "flag-cn"], 1, 19, 15, 0
        ],
        "1f1e8-1f1f4": [
            ["🇨🇴"], "", "", ["flag-co"], 1, 20, 15, 0
        ],
        "1f1e8-1f1f5": [
            ["🇨🇵"], "", "", ["flag-cp"], 1, 21, 15, 0
        ],
        "1f1e8-1f1f7": [
            ["🇨🇷"], "", "", ["flag-cr"], 1, 22, 15, 0
        ],
        "1f1e8-1f1fa": [
            ["🇨🇺"], "", "", ["flag-cu"], 1, 23, 15, 0
        ],
        "1f1e8-1f1fb": [
            ["🇨🇻"], "", "", ["flag-cv"], 1, 24, 15, 0
        ],
        "1f1e8-1f1fc": [
            ["🇨🇼"], "", "", ["flag-cw"], 1, 25, 15, 0
        ],
        "1f1e8-1f1fd": [
            ["🇨🇽"], "", "", ["flag-cx"], 1, 26, 15, 0
        ],
        "1f1e8-1f1fe": [
            ["🇨🇾"], "", "", ["flag-cy"], 1, 27, 15, 0
        ],
        "1f1e8-1f1ff": [
            ["🇨🇿"], "", "", ["flag-cz"], 1, 28, 15, 0
        ],
        "1f1e9-1f1ea": [
            ["🇩🇪"], "", "󾓨", ["de", "flag-de"], 1, 29, 15, 0
        ],
        "1f1e9-1f1ec": [
            ["🇩🇬"], "", "", ["flag-dg"], 1, 30, 15, 0
        ],
        "1f1e9-1f1ef": [
            ["🇩🇯"], "", "", ["flag-dj"], 1, 31, 15, 0
        ],
        "1f1e9-1f1f0": [
            ["🇩🇰"], "", "", ["flag-dk"], 1, 32, 15, 0
        ],
        "1f1e9-1f1f2": [
            ["🇩🇲"], "", "", ["flag-dm"], 1, 33, 15, 0
        ],
        "1f1e9-1f1f4": [
            ["🇩🇴"], "", "", ["flag-do"], 1, 34, 15, 0
        ],
        "1f1e9-1f1ff": [
            ["🇩🇿"], "", "", ["flag-dz"], 1, 35, 15, 0
        ],
        "1f1ea-1f1e6": [
            ["🇪🇦"], "", "", ["flag-ea"], 1, 36, 15, 0
        ],
        "1f1ea-1f1e8": [
            ["🇪🇨"], "", "", ["flag-ec"], 1, 37, 15, 0
        ],
        "1f1ea-1f1ea": [
            ["🇪🇪"], "", "", ["flag-ee"], 1, 38, 15, 0
        ],
        "1f1ea-1f1ec": [
            ["🇪🇬"], "", "", ["flag-eg"], 1, 39, 15, 0
        ],
        "1f1ea-1f1ed": [
            ["🇪🇭"], "", "", ["flag-eh"], 1, 40, 15, 0
        ],
        "1f1ea-1f1f7": [
            ["🇪🇷"], "", "", ["flag-er"], 1, 41, 15, 0
        ],
        "1f1ea-1f1f8": [
            ["🇪🇸"], "", "󾓫", ["es", "flag-es"], 1, 42, 15, 0
        ],
        "1f1ea-1f1f9": [
            ["🇪🇹"], "", "", ["flag-et"], 1, 43, 15, 0
        ],
        "1f1ea-1f1fa": [
            ["🇪🇺"], "", "", ["flag-eu"], 1, 44, 15, 0
        ],
        "1f1eb-1f1ee": [
            ["🇫🇮"], "", "", ["flag-fi"], 1, 45, 15, 0
        ],
        "1f1eb-1f1ef": [
            ["🇫🇯"], "", "", ["flag-fj"], 1, 46, 15, 0
        ],
        "1f1eb-1f1f0": [
            ["🇫🇰"], "", "", ["flag-fk"], 1, 47, 15, 0
        ],
        "1f1eb-1f1f2": [
            ["🇫🇲"], "", "", ["flag-fm"], 1, 48, 15, 0
        ],
        "1f1eb-1f1f4": [
            ["🇫🇴"], "", "", ["flag-fo"], 1, 49, 15, 0
        ],
        "1f1eb-1f1f7": [
            ["🇫🇷"], "", "󾓧", ["fr", "flag-fr"], 1, 50, 15, 0
        ],
        "1f1ec-1f1e6": [
            ["🇬🇦"], "", "", ["flag-ga"], 1, 51, 15, 0
        ],
        "1f1ec-1f1e7": [
            ["🇬🇧"], "", "󾓪", ["gb", "uk", "flag-gb"], 1, 52, 15, 0
        ],
        "1f1ec-1f1e9": [
            ["🇬🇩"], "", "", ["flag-gd"], 1, 53, 15, 0
        ],
        "1f1ec-1f1ea": [
            ["🇬🇪"], "", "", ["flag-ge"], 1, 54, 15, 0
        ],
        "1f1ec-1f1eb": [
            ["🇬🇫"], "", "", ["flag-gf"], 1, 55, 15, 0
        ],
        "1f1ec-1f1ec": [
            ["🇬🇬"], "", "", ["flag-gg"], 1, 56, 15, 0
        ],
        "1f1ec-1f1ed": [
            ["🇬🇭"], "", "", ["flag-gh"], 1, 57, 15, 0
        ],
        "1f1ec-1f1ee": [
            ["🇬🇮"], "", "", ["flag-gi"], 1, 58, 15, 0
        ],
        "1f1ec-1f1f1": [
            ["🇬🇱"], "", "", ["flag-gl"], 1, 59, 15, 0
        ],
        "1f1ec-1f1f2": [
            ["🇬🇲"], "", "", ["flag-gm"], 2, 0, 15, 0
        ],
        "1f1ec-1f1f3": [
            ["🇬🇳"], "", "", ["flag-gn"], 2, 1, 15, 0
        ],
        "1f1ec-1f1f5": [
            ["🇬🇵"], "", "", ["flag-gp"], 2, 2, 15, 0
        ],
        "1f1ec-1f1f6": [
            ["🇬🇶"], "", "", ["flag-gq"], 2, 3, 15, 0
        ],
        "1f1ec-1f1f7": [
            ["🇬🇷"], "", "", ["flag-gr"], 2, 4, 15, 0
        ],
        "1f1ec-1f1f8": [
            ["🇬🇸"], "", "", ["flag-gs"], 2, 5, 15, 0
        ],
        "1f1ec-1f1f9": [
            ["🇬🇹"], "", "", ["flag-gt"], 2, 6, 15, 0
        ],
        "1f1ec-1f1fa": [
            ["🇬🇺"], "", "", ["flag-gu"], 2, 7, 15, 0
        ],
        "1f1ec-1f1fc": [
            ["🇬🇼"], "", "", ["flag-gw"], 2, 8, 15, 0
        ],
        "1f1ec-1f1fe": [
            ["🇬🇾"], "", "", ["flag-gy"], 2, 9, 15, 0
        ],
        "1f1ed-1f1f0": [
            ["🇭🇰"], "", "", ["flag-hk"], 2, 10, 15, 0
        ],
        "1f1ed-1f1f2": [
            ["🇭🇲"], "", "", ["flag-hm"], 2, 11, 15, 0
        ],
        "1f1ed-1f1f3": [
            ["🇭🇳"], "", "", ["flag-hn"], 2, 12, 15, 0
        ],
        "1f1ed-1f1f7": [
            ["🇭🇷"], "", "", ["flag-hr"], 2, 13, 15, 0
        ],
        "1f1ed-1f1f9": [
            ["🇭🇹"], "", "", ["flag-ht"], 2, 14, 15, 0
        ],
        "1f1ed-1f1fa": [
            ["🇭🇺"], "", "", ["flag-hu"], 2, 15, 15, 0
        ],
        "1f1ee-1f1e8": [
            ["🇮🇨"], "", "", ["flag-ic"], 2, 16, 15, 0
        ],
        "1f1ee-1f1e9": [
            ["🇮🇩"], "", "", ["flag-id"], 2, 17, 15, 0
        ],
        "1f1ee-1f1ea": [
            ["🇮🇪"], "", "", ["flag-ie"], 2, 18, 15, 0
        ],
        "1f1ee-1f1f1": [
            ["🇮🇱"], "", "", ["flag-il"], 2, 19, 15, 0
        ],
        "1f1ee-1f1f2": [
            ["🇮🇲"], "", "", ["flag-im"], 2, 20, 15, 0
        ],
        "1f1ee-1f1f3": [
            ["🇮🇳"], "", "", ["flag-in"], 2, 21, 15, 0
        ],
        "1f1ee-1f1f4": [
            ["🇮🇴"], "", "", ["flag-io"], 2, 22, 15, 0
        ],
        "1f1ee-1f1f6": [
            ["🇮🇶"], "", "", ["flag-iq"], 2, 23, 15, 0
        ],
        "1f1ee-1f1f7": [
            ["🇮🇷"], "", "", ["flag-ir"], 2, 24, 15, 0
        ],
        "1f1ee-1f1f8": [
            ["🇮🇸"], "", "", ["flag-is"], 2, 25, 15, 0
        ],
        "1f1ee-1f1f9": [
            ["🇮🇹"], "", "󾓩", ["it", "flag-it"], 2, 26, 15, 0
        ],
        "1f1ef-1f1ea": [
            ["🇯🇪"], "", "", ["flag-je"], 2, 27, 15, 0
        ],
        "1f1ef-1f1f2": [
            ["🇯🇲"], "", "", ["flag-jm"], 2, 28, 15, 0
        ],
        "1f1ef-1f1f4": [
            ["🇯🇴"], "", "", ["flag-jo"], 2, 29, 15, 0
        ],
        "1f1ef-1f1f5": [
            ["🇯🇵"], "", "󾓥", ["jp", "flag-jp"], 2, 30, 15, 0
        ],
        "1f1f0-1f1ea": [
            ["🇰🇪"], "", "", ["flag-ke"], 2, 31, 15, 0
        ],
        "1f1f0-1f1ec": [
            ["🇰🇬"], "", "", ["flag-kg"], 2, 32, 15, 0
        ],
        "1f1f0-1f1ed": [
            ["🇰🇭"], "", "", ["flag-kh"], 2, 33, 15, 0
        ],
        "1f1f0-1f1ee": [
            ["🇰🇮"], "", "", ["flag-ki"], 2, 34, 15, 0
        ],
        "1f1f0-1f1f2": [
            ["🇰🇲"], "", "", ["flag-km"], 2, 35, 15, 0
        ],
        "1f1f0-1f1f3": [
            ["🇰🇳"], "", "", ["flag-kn"], 2, 36, 15, 0
        ],
        "1f1f0-1f1f5": [
            ["🇰🇵"], "", "", ["flag-kp"], 2, 37, 15, 0
        ],
        "1f1f0-1f1f7": [
            ["🇰🇷"], "", "󾓮", ["kr", "flag-kr"], 2, 38, 15, 0
        ],
        "1f1f0-1f1fc": [
            ["🇰🇼"], "", "", ["flag-kw"], 2, 39, 15, 0
        ],
        "1f1f0-1f1fe": [
            ["🇰🇾"], "", "", ["flag-ky"], 2, 40, 15, 0
        ],
        "1f1f0-1f1ff": [
            ["🇰🇿"], "", "", ["flag-kz"], 2, 41, 15, 0
        ],
        "1f1f1-1f1e6": [
            ["🇱🇦"], "", "", ["flag-la"], 2, 42, 15, 0
        ],
        "1f1f1-1f1e7": [
            ["🇱🇧"], "", "", ["flag-lb"], 2, 43, 15, 0
        ],
        "1f1f1-1f1e8": [
            ["🇱🇨"], "", "", ["flag-lc"], 2, 44, 15, 0
        ],
        "1f1f1-1f1ee": [
            ["🇱🇮"], "", "", ["flag-li"], 2, 45, 15, 0
        ],
        "1f1f1-1f1f0": [
            ["🇱🇰"], "", "", ["flag-lk"], 2, 46, 15, 0
        ],
        "1f1f1-1f1f7": [
            ["🇱🇷"], "", "", ["flag-lr"], 2, 47, 15, 0
        ],
        "1f1f1-1f1f8": [
            ["🇱🇸"], "", "", ["flag-ls"], 2, 48, 15, 0
        ],
        "1f1f1-1f1f9": [
            ["🇱🇹"], "", "", ["flag-lt"], 2, 49, 15, 0
        ],
        "1f1f1-1f1fa": [
            ["🇱🇺"], "", "", ["flag-lu"], 2, 50, 15, 0
        ],
        "1f1f1-1f1fb": [
            ["🇱🇻"], "", "", ["flag-lv"], 2, 51, 15, 0
        ],
        "1f1f1-1f1fe": [
            ["🇱🇾"], "", "", ["flag-ly"], 2, 52, 15, 0
        ],
        "1f1f2-1f1e6": [
            ["🇲🇦"], "", "", ["flag-ma"], 2, 53, 15, 0
        ],
        "1f1f2-1f1e8": [
            ["🇲🇨"], "", "", ["flag-mc"], 2, 54, 15, 0
        ],
        "1f1f2-1f1e9": [
            ["🇲🇩"], "", "", ["flag-md"], 2, 55, 15, 0
        ],
        "1f1f2-1f1ea": [
            ["🇲🇪"], "", "", ["flag-me"], 2, 56, 15, 0
        ],
        "1f1f2-1f1eb": [
            ["🇲🇫"], "", "", ["flag-mf"], 2, 57, 15, 0
        ],
        "1f1f2-1f1ec": [
            ["🇲🇬"], "", "", ["flag-mg"], 2, 58, 15, 0
        ],
        "1f1f2-1f1ed": [
            ["🇲🇭"], "", "", ["flag-mh"], 2, 59, 15, 0
        ],
        "1f1f2-1f1f0": [
            ["🇲🇰"], "", "", ["flag-mk"], 3, 0, 15, 0
        ],
        "1f1f2-1f1f1": [
            ["🇲🇱"], "", "", ["flag-ml"], 3, 1, 15, 0
        ],
        "1f1f2-1f1f2": [
            ["🇲🇲"], "", "", ["flag-mm"], 3, 2, 15, 0
        ],
        "1f1f2-1f1f3": [
            ["🇲🇳"], "", "", ["flag-mn"], 3, 3, 15, 0
        ],
        "1f1f2-1f1f4": [
            ["🇲🇴"], "", "", ["flag-mo"], 3, 4, 15, 0
        ],
        "1f1f2-1f1f5": [
            ["🇲🇵"], "", "", ["flag-mp"], 3, 5, 15, 0
        ],
        "1f1f2-1f1f6": [
            ["🇲🇶"], "", "", ["flag-mq"], 3, 6, 15, 0
        ],
        "1f1f2-1f1f7": [
            ["🇲🇷"], "", "", ["flag-mr"], 3, 7, 15, 0
        ],
        "1f1f2-1f1f8": [
            ["🇲🇸"], "", "", ["flag-ms"], 3, 8, 15, 0
        ],
        "1f1f2-1f1f9": [
            ["🇲🇹"], "", "", ["flag-mt"], 3, 9, 15, 0
        ],
        "1f1f2-1f1fa": [
            ["🇲🇺"], "", "", ["flag-mu"], 3, 10, 15, 0
        ],
        "1f1f2-1f1fb": [
            ["🇲🇻"], "", "", ["flag-mv"], 3, 11, 15, 0
        ],
        "1f1f2-1f1fc": [
            ["🇲🇼"], "", "", ["flag-mw"], 3, 12, 15, 0
        ],
        "1f1f2-1f1fd": [
            ["🇲🇽"], "", "", ["flag-mx"], 3, 13, 15, 0
        ],
        "1f1f2-1f1fe": [
            ["🇲🇾"], "", "", ["flag-my"], 3, 14, 15, 0
        ],
        "1f1f2-1f1ff": [
            ["🇲🇿"], "", "", ["flag-mz"], 3, 15, 15, 0
        ],
        "1f1f3-1f1e6": [
            ["🇳🇦"], "", "", ["flag-na"], 3, 16, 15, 0
        ],
        "1f1f3-1f1e8": [
            ["🇳🇨"], "", "", ["flag-nc"], 3, 17, 15, 0
        ],
        "1f1f3-1f1ea": [
            ["🇳🇪"], "", "", ["flag-ne"], 3, 18, 15, 0
        ],
        "1f1f3-1f1eb": [
            ["🇳🇫"], "", "", ["flag-nf"], 3, 19, 15, 0
        ],
        "1f1f3-1f1ec": [
            ["🇳🇬"], "", "", ["flag-ng"], 3, 20, 15, 0
        ],
        "1f1f3-1f1ee": [
            ["🇳🇮"], "", "", ["flag-ni"], 3, 21, 15, 0
        ],
        "1f1f3-1f1f1": [
            ["🇳🇱"], "", "", ["flag-nl"], 3, 22, 15, 0
        ],
        "1f1f3-1f1f4": [
            ["🇳🇴"], "", "", ["flag-no"], 3, 23, 15, 0
        ],
        "1f1f3-1f1f5": [
            ["🇳🇵"], "", "", ["flag-np"], 3, 24, 15, 0
        ],
        "1f1f3-1f1f7": [
            ["🇳🇷"], "", "", ["flag-nr"], 3, 25, 15, 0
        ],
        "1f1f3-1f1fa": [
            ["🇳🇺"], "", "", ["flag-nu"], 3, 26, 15, 0
        ],
        "1f1f3-1f1ff": [
            ["🇳🇿"], "", "", ["flag-nz"], 3, 27, 15, 0
        ],
        "1f1f4-1f1f2": [
            ["🇴🇲"], "", "", ["flag-om"], 3, 28, 15, 0
        ],
        "1f1f5-1f1e6": [
            ["🇵🇦"], "", "", ["flag-pa"], 3, 29, 15, 0
        ],
        "1f1f5-1f1ea": [
            ["🇵🇪"], "", "", ["flag-pe"], 3, 30, 15, 0
        ],
        "1f1f5-1f1eb": [
            ["🇵🇫"], "", "", ["flag-pf"], 3, 31, 15, 0
        ],
        "1f1f5-1f1ec": [
            ["🇵🇬"], "", "", ["flag-pg"], 3, 32, 15, 0
        ],
        "1f1f5-1f1ed": [
            ["🇵🇭"], "", "", ["flag-ph"], 3, 33, 15, 0
        ],
        "1f1f5-1f1f0": [
            ["🇵🇰"], "", "", ["flag-pk"], 3, 34, 15, 0
        ],
        "1f1f5-1f1f1": [
            ["🇵🇱"], "", "", ["flag-pl"], 3, 35, 15, 0
        ],
        "1f1f5-1f1f2": [
            ["🇵🇲"], "", "", ["flag-pm"], 3, 36, 15, 0
        ],
        "1f1f5-1f1f3": [
            ["🇵🇳"], "", "", ["flag-pn"], 3, 37, 15, 0
        ],
        "1f1f5-1f1f7": [
            ["🇵🇷"], "", "", ["flag-pr"], 3, 38, 15, 0
        ],
        "1f1f5-1f1f8": [
            ["🇵🇸"], "", "", ["flag-ps"], 3, 39, 15, 0
        ],
        "1f1f5-1f1f9": [
            ["🇵🇹"], "", "", ["flag-pt"], 3, 40, 15, 0
        ],
        "1f1f5-1f1fc": [
            ["🇵🇼"], "", "", ["flag-pw"], 3, 41, 15, 0
        ],
        "1f1f5-1f1fe": [
            ["🇵🇾"], "", "", ["flag-py"], 3, 42, 15, 0
        ],
        "1f1f6-1f1e6": [
            ["🇶🇦"], "", "", ["flag-qa"], 3, 43, 15, 0
        ],
        "1f1f7-1f1ea": [
            ["🇷🇪"], "", "", ["flag-re"], 3, 44, 15, 0
        ],
        "1f1f7-1f1f4": [
            ["🇷🇴"], "", "", ["flag-ro"], 3, 45, 15, 0
        ],
        "1f1f7-1f1f8": [
            ["🇷🇸"], "", "", ["flag-rs"], 3, 46, 15, 0
        ],
        "1f1f7-1f1fa": [
            ["🇷🇺"], "", "󾓬", ["ru", "flag-ru"], 3, 47, 15, 0
        ],
        "1f1f7-1f1fc": [
            ["🇷🇼"], "", "", ["flag-rw"], 3, 48, 15, 0
        ],
        "1f1f8-1f1e6": [
            ["🇸🇦"], "", "", ["flag-sa"], 3, 49, 15, 0
        ],
        "1f1f8-1f1e7": [
            ["🇸🇧"], "", "", ["flag-sb"], 3, 50, 15, 0
        ],
        "1f1f8-1f1e8": [
            ["🇸🇨"], "", "", ["flag-sc"], 3, 51, 15, 0
        ],
        "1f1f8-1f1e9": [
            ["🇸🇩"], "", "", ["flag-sd"], 3, 52, 15, 0
        ],
        "1f1f8-1f1ea": [
            ["🇸🇪"], "", "", ["flag-se"], 3, 53, 15, 0
        ],
        "1f1f8-1f1ec": [
            ["🇸🇬"], "", "", ["flag-sg"], 3, 54, 15, 0
        ],
        "1f1f8-1f1ed": [
            ["🇸🇭"], "", "", ["flag-sh"], 3, 55, 15, 0
        ],
        "1f1f8-1f1ee": [
            ["🇸🇮"], "", "", ["flag-si"], 3, 56, 15, 0
        ],
        "1f1f8-1f1ef": [
            ["🇸🇯"], "", "", ["flag-sj"], 3, 57, 15, 0
        ],
        "1f1f8-1f1f0": [
            ["🇸🇰"], "", "", ["flag-sk"], 3, 58, 15, 0
        ],
        "1f1f8-1f1f1": [
            ["🇸🇱"], "", "", ["flag-sl"], 3, 59, 15, 0
        ],
        "1f1f8-1f1f2": [
            ["🇸🇲"], "", "", ["flag-sm"], 4, 0, 15, 0
        ],
        "1f1f8-1f1f3": [
            ["🇸🇳"], "", "", ["flag-sn"], 4, 1, 15, 0
        ],
        "1f1f8-1f1f4": [
            ["🇸🇴"], "", "", ["flag-so"], 4, 2, 15, 0
        ],
        "1f1f8-1f1f7": [
            ["🇸🇷"], "", "", ["flag-sr"], 4, 3, 15, 0
        ],
        "1f1f8-1f1f8": [
            ["🇸🇸"], "", "", ["flag-ss"], 4, 4, 15, 0
        ],
        "1f1f8-1f1f9": [
            ["🇸🇹"], "", "", ["flag-st"], 4, 5, 15, 0
        ],
        "1f1f8-1f1fb": [
            ["🇸🇻"], "", "", ["flag-sv"], 4, 6, 15, 0
        ],
        "1f1f8-1f1fd": [
            ["🇸🇽"], "", "", ["flag-sx"], 4, 7, 15, 0
        ],
        "1f1f8-1f1fe": [
            ["🇸🇾"], "", "", ["flag-sy"], 4, 8, 15, 0
        ],
        "1f1f8-1f1ff": [
            ["🇸🇿"], "", "", ["flag-sz"], 4, 9, 15, 0
        ],
        "1f1f9-1f1e6": [
            ["🇹🇦"], "", "", ["flag-ta"], 4, 10, 15, 0
        ],
        "1f1f9-1f1e8": [
            ["🇹🇨"], "", "", ["flag-tc"], 4, 11, 15, 0
        ],
        "1f1f9-1f1e9": [
            ["🇹🇩"], "", "", ["flag-td"], 4, 12, 15, 0
        ],
        "1f1f9-1f1eb": [
            ["🇹🇫"], "", "", ["flag-tf"], 4, 13, 15, 0
        ],
        "1f1f9-1f1ec": [
            ["🇹🇬"], "", "", ["flag-tg"], 4, 14, 15, 0
        ],
        "1f1f9-1f1ed": [
            ["🇹🇭"], "", "", ["flag-th"], 4, 15, 15, 0
        ],
        "1f1f9-1f1ef": [
            ["🇹🇯"], "", "", ["flag-tj"], 4, 16, 15, 0
        ],
        "1f1f9-1f1f0": [
            ["🇹🇰"], "", "", ["flag-tk"], 4, 17, 15, 0
        ],
        "1f1f9-1f1f1": [
            ["🇹🇱"], "", "", ["flag-tl"], 4, 18, 15, 0
        ],
        "1f1f9-1f1f2": [
            ["🇹🇲"], "", "", ["flag-tm"], 4, 19, 15, 0
        ],
        "1f1f9-1f1f3": [
            ["🇹🇳"], "", "", ["flag-tn"], 4, 20, 15, 0
        ],
        "1f1f9-1f1f4": [
            ["🇹🇴"], "", "", ["flag-to"], 4, 21, 15, 0
        ],
        "1f1f9-1f1f7": [
            ["🇹🇷"], "", "", ["flag-tr"], 4, 22, 15, 0
        ],
        "1f1f9-1f1f9": [
            ["🇹🇹"], "", "", ["flag-tt"], 4, 23, 15, 0
        ],
        "1f1f9-1f1fb": [
            ["🇹🇻"], "", "", ["flag-tv"], 4, 24, 15, 0
        ],
        "1f1f9-1f1fc": [
            ["🇹🇼"], "", "", ["flag-tw"], 4, 25, 15, 0
        ],
        "1f1f9-1f1ff": [
            ["🇹🇿"], "", "", ["flag-tz"], 4, 26, 15, 0
        ],
        "1f1fa-1f1e6": [
            ["🇺🇦"], "", "", ["flag-ua"], 4, 27, 15, 0
        ],
        "1f1fa-1f1ec": [
            ["🇺🇬"], "", "", ["flag-ug"], 4, 28, 15, 0
        ],
        "1f1fa-1f1f2": [
            ["🇺🇲"], "", "", ["flag-um"], 4, 29, 15, 0
        ],
        "1f1fa-1f1f3": [
            ["🇺🇳"], "", "", ["flag-un"], 4, 30, 15, 0
        ],
        "1f1fa-1f1f8": [
            ["🇺🇸"], "", "󾓦", ["us", "flag-us"], 4, 31, 15, 0
        ],
        "1f1fa-1f1fe": [
            ["🇺🇾"], "", "", ["flag-uy"], 4, 32, 15, 0
        ],
        "1f1fa-1f1ff": [
            ["🇺🇿"], "", "", ["flag-uz"], 4, 33, 15, 0
        ],
        "1f1fb-1f1e6": [
            ["🇻🇦"], "", "", ["flag-va"], 4, 34, 15, 0
        ],
        "1f1fb-1f1e8": [
            ["🇻🇨"], "", "", ["flag-vc"], 4, 35, 15, 0
        ],
        "1f1fb-1f1ea": [
            ["🇻🇪"], "", "", ["flag-ve"], 4, 36, 15, 0
        ],
        "1f1fb-1f1ec": [
            ["🇻🇬"], "", "", ["flag-vg"], 4, 37, 15, 0
        ],
        "1f1fb-1f1ee": [
            ["🇻🇮"], "", "", ["flag-vi"], 4, 38, 15, 0
        ],
        "1f1fb-1f1f3": [
            ["🇻🇳"], "", "", ["flag-vn"], 4, 39, 15, 0
        ],
        "1f1fb-1f1fa": [
            ["🇻🇺"], "", "", ["flag-vu"], 4, 40, 15, 0
        ],
        "1f1fc-1f1eb": [
            ["🇼🇫"], "", "", ["flag-wf"], 4, 41, 15, 0
        ],
        "1f1fc-1f1f8": [
            ["🇼🇸"], "", "", ["flag-ws"], 4, 42, 15, 0
        ],
        "1f1fd-1f1f0": [
            ["🇽🇰"], "", "", ["flag-xk"], 4, 43, 15, 0
        ],
        "1f1fe-1f1ea": [
            ["🇾🇪"], "", "", ["flag-ye"], 4, 44, 15, 0
        ],
        "1f1fe-1f1f9": [
            ["🇾🇹"], "", "", ["flag-yt"], 4, 45, 15, 0
        ],
        "1f1ff-1f1e6": [
            ["🇿🇦"], "", "", ["flag-za"], 4, 46, 15, 0
        ],
        "1f1ff-1f1f2": [
            ["🇿🇲"], "", "", ["flag-zm"], 4, 47, 15, 0
        ],
        "1f1ff-1f1fc": [
            ["🇿🇼"], "", "", ["flag-zw"], 4, 48, 15, 0
        ],
        "1f201": [
            ["🈁"], "", "󾬤", ["koko"], 4, 49, 15, 0
        ],
        "1f202-fe0f": [
            ["🈂️", "🈂"], "", "󾬿", ["sa"], 4, 50, 15, 0
        ],
        "1f21a": [
            ["🈚"], "", "󾬺", ["u7121"], 4, 51, 15, 0
        ],
        "1f22f": [
            ["🈯"], "", "󾭀", ["u6307"], 4, 52, 15, 0
        ],
        "1f232": [
            ["🈲"], "", "󾬮", ["u7981"], 4, 53, 15, 0
        ],
        "1f233": [
            ["🈳"], "", "󾬯", ["u7a7a"], 4, 54, 15, 0
        ],
        "1f234": [
            ["🈴"], "", "󾬰", ["u5408"], 4, 55, 15, 0
        ],
        "1f235": [
            ["🈵"], "", "󾬱", ["u6e80"], 4, 56, 15, 0
        ],
        "1f236": [
            ["🈶"], "", "󾬹", ["u6709"], 4, 57, 15, 0
        ],
        "1f237-fe0f": [
            ["🈷️", "🈷"], "", "󾬻", ["u6708"], 4, 58, 15, 0
        ],
        "1f238": [
            ["🈸"], "", "󾬼", ["u7533"], 4, 59, 15, 0
        ],
        "1f239": [
            ["🈹"], "", "󾬾", ["u5272"], 5, 0, 15, 0
        ],
        "1f23a": [
            ["🈺"], "", "󾭁", ["u55b6"], 5, 1, 15, 0
        ],
        "1f250": [
            ["🉐"], "", "󾬽", ["ideograph_advantage"], 5, 2, 15, 0
        ],
        "1f251": [
            ["🉑"], "", "󾭐", ["accept"], 5, 3, 15, 0
        ],
        "1f300": [
            ["🌀"], "", "󾀅", ["cyclone"], 5, 4, 15, 0
        ],
        "1f301": [
            ["🌁"], "", "󾀆", ["foggy"], 5, 5, 15, 0
        ],
        "1f302": [
            ["🌂"], "", "󾀇", ["closed_umbrella"], 5, 6, 15, 0
        ],
        "1f303": [
            ["🌃"], "", "󾀈", ["night_with_stars"], 5, 7, 15, 0
        ],
        "1f304": [
            ["🌄"], "", "󾀉", ["sunrise_over_mountains"], 5, 8, 15, 0
        ],
        "1f305": [
            ["🌅"], "", "󾀊", ["sunrise"], 5, 9, 15, 0
        ],
        "1f306": [
            ["🌆"], "", "󾀋", ["city_sunset"], 5, 10, 15, 0
        ],
        "1f307": [
            ["🌇"], "", "󾀌", ["city_sunrise"], 5, 11, 15, 0
        ],
        "1f308": [
            ["🌈"], "", "󾀍", ["rainbow"], 5, 12, 15, 0
        ],
        "1f309": [
            ["🌉"], "", "󾀐", ["bridge_at_night"], 5, 13, 15, 0
        ],
        "1f30a": [
            ["🌊"], "", "󾀸", ["ocean"], 5, 14, 15, 0
        ],
        "1f30b": [
            ["🌋"], "", "󾀺", ["volcano"], 5, 15, 15, 0
        ],
        "1f30c": [
            ["🌌"], "", "󾀻", ["milky_way"], 5, 16, 15, 0
        ],
        "1f30d": [
            ["🌍"], "", "", ["earth_africa"], 5, 17, 15, 0
        ],
        "1f30e": [
            ["🌎"], "", "", ["earth_americas"], 5, 18, 15, 0
        ],
        "1f30f": [
            ["🌏"], "", "󾀹", ["earth_asia"], 5, 19, 15, 0
        ],
        "1f310": [
            ["🌐"], "", "", ["globe_with_meridians"], 5, 20, 15, 0
        ],
        "1f311": [
            ["🌑"], "", "󾀑", ["new_moon"], 5, 21, 15, 0
        ],
        "1f312": [
            ["🌒"], "", "", ["waxing_crescent_moon"], 5, 22, 15, 0
        ],
        "1f313": [
            ["🌓"], "", "󾀓", ["first_quarter_moon"], 5, 23, 15, 0
        ],
        "1f314": [
            ["🌔"], "", "󾀒", ["moon", "waxing_gibbous_moon"], 5, 24, 15, 0
        ],
        "1f315": [
            ["🌕"], "", "󾀕", ["full_moon"], 5, 25, 15, 0
        ],
        "1f316": [
            ["🌖"], "", "", ["waning_gibbous_moon"], 5, 26, 15, 0
        ],
        "1f317": [
            ["🌗"], "", "", ["last_quarter_moon"], 5, 27, 15, 0
        ],
        "1f318": [
            ["🌘"], "", "", ["waning_crescent_moon"], 5, 28, 15, 0
        ],
        "1f319": [
            ["🌙"], "", "󾀔", ["crescent_moon"], 5, 29, 15, 0
        ],
        "1f31a": [
            ["🌚"], "", "", ["new_moon_with_face"], 5, 30, 15, 0
        ],
        "1f31b": [
            ["🌛"], "", "󾀖", ["first_quarter_moon_with_face"], 5, 31, 15, 0
        ],
        "1f31c": [
            ["🌜"], "", "", ["last_quarter_moon_with_face"], 5, 32, 15, 0
        ],
        "1f31d": [
            ["🌝"], "", "", ["full_moon_with_face"], 5, 33, 15, 0
        ],
        "1f31e": [
            ["🌞"], "", "", ["sun_with_face"], 5, 34, 15, 0
        ],
        "1f31f": [
            ["🌟"], "", "󾭩", ["star2"], 5, 35, 15, 0
        ],
        "1f320": [
            ["🌠"], "", "󾭪", ["stars"], 5, 36, 15, 0
        ],
        "1f321-fe0f": [
            ["🌡️", "🌡"], "", "", ["thermometer"], 5, 37, 15, 0
        ],
        "1f324-fe0f": [
            ["🌤️", "🌤"], "", "", ["mostly_sunny", "sun_small_cloud"], 5, 38, 15, 0
        ],
        "1f325-fe0f": [
            ["🌥️", "🌥"], "", "", ["barely_sunny", "sun_behind_cloud"], 5, 39, 15, 0
        ],
        "1f326-fe0f": [
            ["🌦️", "🌦"], "", "", ["partly_sunny_rain", "sun_behind_rain_cloud"], 5, 40, 15, 0
        ],
        "1f327-fe0f": [
            ["🌧️", "🌧"], "", "", ["rain_cloud"], 5, 41, 15, 0
        ],
        "1f328-fe0f": [
            ["🌨️", "🌨"], "", "", ["snow_cloud"], 5, 42, 15, 0
        ],
        "1f329-fe0f": [
            ["🌩️", "🌩"], "", "", ["lightning", "lightning_cloud"], 5, 43, 15, 0
        ],
        "1f32a-fe0f": [
            ["🌪️", "🌪"], "", "", ["tornado", "tornado_cloud"], 5, 44, 15, 0
        ],
        "1f32b-fe0f": [
            ["🌫️", "🌫"], "", "", ["fog"], 5, 45, 15, 0
        ],
        "1f32c-fe0f": [
            ["🌬️", "🌬"], "", "", ["wind_blowing_face"], 5, 46, 15, 0
        ],
        "1f32d": [
            ["🌭"], "", "", ["hotdog"], 5, 47, 15, 0
        ],
        "1f32e": [
            ["🌮"], "", "", ["taco"], 5, 48, 15, 0
        ],
        "1f32f": [
            ["🌯"], "", "", ["burrito"], 5, 49, 15, 0
        ],
        "1f330": [
            ["🌰"], "", "󾁌", ["chestnut"], 5, 50, 15, 0
        ],
        "1f331": [
            ["🌱"], "", "󾀾", ["seedling"], 5, 51, 15, 0
        ],
        "1f332": [
            ["🌲"], "", "", ["evergreen_tree"], 5, 52, 15, 0
        ],
        "1f333": [
            ["🌳"], "", "", ["deciduous_tree"], 5, 53, 15, 0
        ],
        "1f334": [
            ["🌴"], "", "󾁇", ["palm_tree"], 5, 54, 15, 0
        ],
        "1f335": [
            ["🌵"], "", "󾁈", ["cactus"], 5, 55, 15, 0
        ],
        "1f336-fe0f": [
            ["🌶️", "🌶"], "", "", ["hot_pepper"], 5, 56, 15, 0
        ],
        "1f337": [
            ["🌷"], "", "󾀽", ["tulip"], 5, 57, 15, 0
        ],
        "1f338": [
            ["🌸"], "", "󾁀", ["cherry_blossom"], 5, 58, 15, 0
        ],
        "1f339": [
            ["🌹"], "", "󾁁", ["rose"], 5, 59, 15, 0
        ],
        "1f33a": [
            ["🌺"], "", "󾁅", ["hibiscus"], 6, 0, 15, 0
        ],
        "1f33b": [
            ["🌻"], "", "󾁆", ["sunflower"], 6, 1, 15, 0
        ],
        "1f33c": [
            ["🌼"], "", "󾁍", ["blossom"], 6, 2, 15, 0
        ],
        "1f33d": [
            ["🌽"], "", "󾁊", ["corn"], 6, 3, 15, 0
        ],
        "1f33e": [
            ["🌾"], "", "󾁉", ["ear_of_rice"], 6, 4, 15, 0
        ],
        "1f33f": [
            ["🌿"], "", "󾁎", ["herb"], 6, 5, 15, 0
        ],
        "1f340": [
            ["🍀"], "", "󾀼", ["four_leaf_clover"], 6, 6, 15, 0
        ],
        "1f341": [
            ["🍁"], "", "󾀿", ["maple_leaf"], 6, 7, 15, 0
        ],
        "1f342": [
            ["🍂"], "", "󾁂", ["fallen_leaf"], 6, 8, 15, 0
        ],
        "1f343": [
            ["🍃"], "", "󾁃", ["leaves"], 6, 9, 15, 0
        ],
        "1f344": [
            ["🍄"], "", "󾁋", ["mushroom"], 6, 10, 15, 0
        ],
        "1f345": [
            ["🍅"], "", "󾁕", ["tomato"], 6, 11, 15, 0
        ],
        "1f346": [
            ["🍆"], "", "󾁖", ["eggplant"], 6, 12, 15, 0
        ],
        "1f347": [
            ["🍇"], "", "󾁙", ["grapes"], 6, 13, 15, 0
        ],
        "1f348": [
            ["🍈"], "", "󾁗", ["melon"], 6, 14, 15, 0
        ],
        "1f349": [
            ["🍉"], "", "󾁔", ["watermelon"], 6, 15, 15, 0
        ],
        "1f34a": [
            ["🍊"], "", "󾁒", ["tangerine"], 6, 16, 15, 0
        ],
        "1f34b": [
            ["🍋"], "", "", ["lemon"], 6, 17, 15, 0
        ],
        "1f34c": [
            ["🍌"], "", "󾁐", ["banana"], 6, 18, 15, 0
        ],
        "1f34d": [
            ["🍍"], "", "󾁘", ["pineapple"], 6, 19, 15, 0
        ],
        "1f34e": [
            ["🍎"], "", "󾁑", ["apple"], 6, 20, 15, 0
        ],
        "1f34f": [
            ["🍏"], "", "󾁛", ["green_apple"], 6, 21, 15, 0
        ],
        "1f350": [
            ["🍐"], "", "", ["pear"], 6, 22, 15, 0
        ],
        "1f351": [
            ["🍑"], "", "󾁚", ["peach"], 6, 23, 15, 0
        ],
        "1f352": [
            ["🍒"], "", "󾁏", ["cherries"], 6, 24, 15, 0
        ],
        "1f353": [
            ["🍓"], "", "󾁓", ["strawberry"], 6, 25, 15, 0
        ],
        "1f354": [
            ["🍔"], "", "󾥠", ["hamburger"], 6, 26, 15, 0
        ],
        "1f355": [
            ["🍕"], "", "󾥵", ["pizza"], 6, 27, 15, 0
        ],
        "1f356": [
            ["🍖"], "", "󾥲", ["meat_on_bone"], 6, 28, 15, 0
        ],
        "1f357": [
            ["🍗"], "", "󾥶", ["poultry_leg"], 6, 29, 15, 0
        ],
        "1f358": [
            ["🍘"], "", "󾥩", ["rice_cracker"], 6, 30, 15, 0
        ],
        "1f359": [
            ["🍙"], "", "󾥡", ["rice_ball"], 6, 31, 15, 0
        ],
        "1f35a": [
            ["🍚"], "", "󾥪", ["rice"], 6, 32, 15, 0
        ],
        "1f35b": [
            ["🍛"], "", "󾥬", ["curry"], 6, 33, 15, 0
        ],
        "1f35c": [
            ["🍜"], "", "󾥣", ["ramen"], 6, 34, 15, 0
        ],
        "1f35d": [
            ["🍝"], "", "󾥫", ["spaghetti"], 6, 35, 15, 0
        ],
        "1f35e": [
            ["🍞"], "", "󾥤", ["bread"], 6, 36, 15, 0
        ],
        "1f35f": [
            ["🍟"], "", "󾥧", ["fries"], 6, 37, 15, 0
        ],
        "1f360": [
            ["🍠"], "", "󾥴", ["sweet_potato"], 6, 38, 15, 0
        ],
        "1f361": [
            ["🍡"], "", "󾥨", ["dango"], 6, 39, 15, 0
        ],
        "1f362": [
            ["🍢"], "", "󾥭", ["oden"], 6, 40, 15, 0
        ],
        "1f363": [
            ["🍣"], "", "󾥮", ["sushi"], 6, 41, 15, 0
        ],
        "1f364": [
            ["🍤"], "", "󾥿", ["fried_shrimp"], 6, 42, 15, 0
        ],
        "1f365": [
            ["🍥"], "", "󾥳", ["fish_cake"], 6, 43, 15, 0
        ],
        "1f366": [
            ["🍦"], "", "󾥦", ["icecream"], 6, 44, 15, 0
        ],
        "1f367": [
            ["🍧"], "", "󾥱", ["shaved_ice"], 6, 45, 15, 0
        ],
        "1f368": [
            ["🍨"], "", "󾥷", ["ice_cream"], 6, 46, 15, 0
        ],
        "1f369": [
            ["🍩"], "", "󾥸", ["doughnut"], 6, 47, 15, 0
        ],
        "1f36a": [
            ["🍪"], "", "󾥹", ["cookie"], 6, 48, 15, 0
        ],
        "1f36b": [
            ["🍫"], "", "󾥺", ["chocolate_bar"], 6, 49, 15, 0
        ],
        "1f36c": [
            ["🍬"], "", "󾥻", ["candy"], 6, 50, 15, 0
        ],
        "1f36d": [
            ["🍭"], "", "󾥼", ["lollipop"], 6, 51, 15, 0
        ],
        "1f36e": [
            ["🍮"], "", "󾥽", ["custard"], 6, 52, 15, 0
        ],
        "1f36f": [
            ["🍯"], "", "󾥾", ["honey_pot"], 6, 53, 15, 0
        ],
        "1f370": [
            ["🍰"], "", "󾥢", ["cake"], 6, 54, 15, 0
        ],
        "1f371": [
            ["🍱"], "", "󾥯", ["bento"], 6, 55, 15, 0
        ],
        "1f372": [
            ["🍲"], "", "󾥰", ["stew"], 6, 56, 15, 0
        ],
        "1f373": [
            ["🍳"], "", "󾥥", ["fried_egg", "cooking"], 6, 57, 15, 0
        ],
        "1f374": [
            ["🍴"], "", "󾦀", ["fork_and_knife"], 6, 58, 15, 0
        ],
        "1f375": [
            ["🍵"], "", "󾦄", ["tea"], 6, 59, 15, 0
        ],
        "1f376": [
            ["🍶"], "", "󾦅", ["sake"], 7, 0, 15, 0
        ],
        "1f377": [
            ["🍷"], "", "󾦆", ["wine_glass"], 7, 1, 15, 0
        ],
        "1f378": [
            ["🍸"], "", "󾦂", ["cocktail"], 7, 2, 15, 0
        ],
        "1f379": [
            ["🍹"], "", "󾦈", ["tropical_drink"], 7, 3, 15, 0
        ],
        "1f37a": [
            ["🍺"], "", "󾦃", ["beer"], 7, 4, 15, 0
        ],
        "1f37b": [
            ["🍻"], "", "󾦇", ["beers"], 7, 5, 15, 0
        ],
        "1f37c": [
            ["🍼"], "", "", ["baby_bottle"], 7, 6, 15, 0
        ],
        "1f37d-fe0f": [
            ["🍽️", "🍽"], "", "", ["knife_fork_plate"], 7, 7, 15, 0
        ],
        "1f37e": [
            ["🍾"], "", "", ["champagne"], 7, 8, 15, 0
        ],
        "1f37f": [
            ["🍿"], "", "", ["popcorn"], 7, 9, 15, 0
        ],
        "1f380": [
            ["🎀"], "", "󾔏", ["ribbon"], 7, 10, 15, 0
        ],
        "1f381": [
            ["🎁"], "", "󾔐", ["gift"], 7, 11, 15, 0
        ],
        "1f382": [
            ["🎂"], "", "󾔑", ["birthday"], 7, 12, 15, 0
        ],
        "1f383": [
            ["🎃"], "", "󾔟", ["jack_o_lantern"], 7, 13, 15, 0
        ],
        "1f384": [
            ["🎄"], "", "󾔒", ["christmas_tree"], 7, 14, 15, 0
        ],
        "1f385": [
            ["🎅"], "", "󾔓", ["santa"], 7, 15, 15, 0
        ],
        "1f386": [
            ["🎆"], "", "󾔕", ["fireworks"], 7, 21, 15, 0
        ],
        "1f387": [
            ["🎇"], "", "󾔝", ["sparkler"], 7, 22, 15, 0
        ],
        "1f388": [
            ["🎈"], "", "󾔖", ["balloon"], 7, 23, 15, 0
        ],
        "1f389": [
            ["🎉"], "", "󾔗", ["tada"], 7, 24, 15, 0
        ],
        "1f38a": [
            ["🎊"], "", "󾔠", ["confetti_ball"], 7, 25, 15, 0
        ],
        "1f38b": [
            ["🎋"], "", "󾔡", ["tanabata_tree"], 7, 26, 15, 0
        ],
        "1f38c": [
            ["🎌"], "", "󾔔", ["crossed_flags"], 7, 27, 15, 0
        ],
        "1f38d": [
            ["🎍"], "", "󾔘", ["bamboo"], 7, 28, 15, 0
        ],
        "1f38e": [
            ["🎎"], "", "󾔙", ["dolls"], 7, 29, 15, 0
        ],
        "1f38f": [
            ["🎏"], "", "󾔜", ["flags"], 7, 30, 15, 0
        ],
        "1f390": [
            ["🎐"], "", "󾔞", ["wind_chime"], 7, 31, 15, 0
        ],
        "1f391": [
            ["🎑"], "", "󾀗", ["rice_scene"], 7, 32, 15, 0
        ],
        "1f392": [
            ["🎒"], "", "󾔛", ["school_satchel"], 7, 33, 15, 0
        ],
        "1f393": [
            ["🎓"], "", "󾔚", ["mortar_board"], 7, 34, 15, 0
        ],
        "1f396-fe0f": [
            ["🎖️", "🎖"], "", "", ["medal"], 7, 35, 15, 0
        ],
        "1f397-fe0f": [
            ["🎗️", "🎗"], "", "", ["reminder_ribbon"], 7, 36, 15, 0
        ],
        "1f399-fe0f": [
            ["🎙️", "🎙"], "", "", ["studio_microphone"], 7, 37, 15, 0
        ],
        "1f39a-fe0f": [
            ["🎚️", "🎚"], "", "", ["level_slider"], 7, 38, 15, 0
        ],
        "1f39b-fe0f": [
            ["🎛️", "🎛"], "", "", ["control_knobs"], 7, 39, 15, 0
        ],
        "1f39e-fe0f": [
            ["🎞️", "🎞"], "", "", ["film_frames"], 7, 40, 15, 0
        ],
        "1f39f-fe0f": [
            ["🎟️", "🎟"], "", "", ["admission_tickets"], 7, 41, 15, 0
        ],
        "1f3a0": [
            ["🎠"], "", "󾟼", ["carousel_horse"], 7, 42, 15, 0
        ],
        "1f3a1": [
            ["🎡"], "", "󾟽", ["ferris_wheel"], 7, 43, 15, 0
        ],
        "1f3a2": [
            ["🎢"], "", "󾟾", ["roller_coaster"], 7, 44, 15, 0
        ],
        "1f3a3": [
            ["🎣"], "", "󾟿", ["fishing_pole_and_fish"], 7, 45, 15, 0
        ],
        "1f3a4": [
            ["🎤"], "", "󾠀", ["microphone"], 7, 46, 15, 0
        ],
        "1f3a5": [
            ["🎥"], "", "󾠁", ["movie_camera"], 7, 47, 15, 0
        ],
        "1f3a6": [
            ["🎦"], "", "󾠂", ["cinema"], 7, 48, 15, 0
        ],
        "1f3a7": [
            ["🎧"], "", "󾠃", ["headphones"], 7, 49, 15, 0
        ],
        "1f3a8": [
            ["🎨"], "", "󾠄", ["art"], 7, 50, 15, 0
        ],
        "1f3a9": [
            ["🎩"], "", "󾠅", ["tophat"], 7, 51, 15, 0
        ],
        "1f3aa": [
            ["🎪"], "", "󾠆", ["circus_tent"], 7, 52, 15, 0
        ],
        "1f3ab": [
            ["🎫"], "", "󾠇", ["ticket"], 7, 53, 15, 0
        ],
        "1f3ac": [
            ["🎬"], "", "󾠈", ["clapper"], 7, 54, 15, 0
        ],
        "1f3ad": [
            ["🎭"], "", "󾠉", ["performing_arts"], 7, 55, 15, 0
        ],
        "1f3ae": [
            ["🎮"], "", "󾠊", ["video_game"], 7, 56, 15, 0
        ],
        "1f3af": [
            ["🎯"], "", "󾠌", ["dart"], 7, 57, 15, 0
        ],
        "1f3b0": [
            ["🎰"], "", "󾠍", ["slot_machine"], 7, 58, 15, 0
        ],
        "1f3b1": [
            ["🎱"], "", "󾠎", ["8ball"], 7, 59, 15, 0
        ],
        "1f3b2": [
            ["🎲"], "", "󾠏", ["game_die"], 8, 0, 15, 0
        ],
        "1f3b3": [
            ["🎳"], "", "󾠐", ["bowling"], 8, 1, 15, 0
        ],
        "1f3b4": [
            ["🎴"], "", "󾠑", ["flower_playing_cards"], 8, 2, 15, 0
        ],
        "1f3b5": [
            ["🎵"], "", "󾠓", ["musical_note"], 8, 3, 15, 0
        ],
        "1f3b6": [
            ["🎶"], "", "󾠔", ["notes"], 8, 4, 15, 0
        ],
        "1f3b7": [
            ["🎷"], "", "󾠕", ["saxophone"], 8, 5, 15, 0
        ],
        "1f3b8": [
            ["🎸"], "", "󾠖", ["guitar"], 8, 6, 15, 0
        ],
        "1f3b9": [
            ["🎹"], "", "󾠗", ["musical_keyboard"], 8, 7, 15, 0
        ],
        "1f3ba": [
            ["🎺"], "", "󾠘", ["trumpet"], 8, 8, 15, 0
        ],
        "1f3bb": [
            ["🎻"], "", "󾠙", ["violin"], 8, 9, 15, 0
        ],
        "1f3bc": [
            ["🎼"], "", "󾠚", ["musical_score"], 8, 10, 15, 0
        ],
        "1f3bd": [
            ["🎽"], "", "󾟐", ["running_shirt_with_sash"], 8, 11, 15, 0
        ],
        "1f3be": [
            ["🎾"], "", "󾟓", ["tennis"], 8, 12, 15, 0
        ],
        "1f3bf": [
            ["🎿"], "", "󾟕", ["ski"], 8, 13, 15, 0
        ],
        "1f3c0": [
            ["🏀"], "", "󾟖", ["basketball"], 8, 14, 15, 0
        ],
        "1f3c1": [
            ["🏁"], "", "󾟗", ["checkered_flag"], 8, 15, 15, 0
        ],
        "1f3c2": [
            ["🏂"], "", "󾟘", ["snowboarder"], 8, 16, 15, 0
        ],
        "1f3c3-200d-2640-fe0f": [
            ["🏃‍♀️", "🏃‍♀"], "", "", ["woman-running"], 8, 22, 15, 0
        ],
        "1f3c3-200d-2642-fe0f": [
            ["🏃‍♂️", "🏃‍♂", "🏃"], "", "", ["man-running", "runner", "running"], 8, 28, 15, 0
        ],
        "1f3c4-200d-2640-fe0f": [
            ["🏄‍♀️", "🏄‍♀"], "", "", ["woman-surfing"], 8, 40, 15, 0
        ],
        "1f3c4-200d-2642-fe0f": [
            ["🏄‍♂️", "🏄‍♂", "🏄"], "", "", ["man-surfing", "surfer"], 8, 46, 15, 0
        ],
        "1f3c5": [
            ["🏅"], "", "", ["sports_medal"], 8, 58, 15, 0
        ],
        "1f3c6": [
            ["🏆"], "", "󾟛", ["trophy"], 8, 59, 15, 0
        ],
        "1f3c7": [
            ["🏇"], "", "", ["horse_racing"], 9, 0, 15, 0
        ],
        "1f3c8": [
            ["🏈"], "", "󾟝", ["football"], 9, 6, 15, 0
        ],
        "1f3c9": [
            ["🏉"], "", "", ["rugby_football"], 9, 7, 15, 0
        ],
        "1f3ca-200d-2640-fe0f": [
            ["🏊‍♀️", "🏊‍♀"], "", "", ["woman-swimming"], 9, 8, 15, 0
        ],
        "1f3ca-200d-2642-fe0f": [
            ["🏊‍♂️", "🏊‍♂", "🏊"], "", "", ["man-swimming", "swimmer"], 9, 14, 15, 0
        ],
        "1f3cb-fe0f-200d-2640-fe0f": [
            ["🏋️‍♀️"], "", "", ["woman-lifting-weights"], 9, 26, 7, 0
        ],
        "1f3cb-fe0f-200d-2642-fe0f": [
            ["🏋️‍♂️", "🏋️", "🏋"], "", "", ["man-lifting-weights", "weight_lifter"], 9, 32, 7, 0
        ],
        "1f3cc-fe0f-200d-2640-fe0f": [
            ["🏌️‍♀️"], "", "", ["woman-golfing"], 9, 44, 7, 0
        ],
        "1f3cc-fe0f-200d-2642-fe0f": [
            ["🏌️‍♂️", "🏌️", "🏌"], "", "", ["man-golfing", "golfer"], 9, 50, 7, 0
        ],
        "1f3cd-fe0f": [
            ["🏍️", "🏍"], "", "", ["racing_motorcycle"], 10, 2, 15, 0
        ],
        "1f3ce-fe0f": [
            ["🏎️", "🏎"], "", "", ["racing_car"], 10, 3, 15, 0
        ],
        "1f3cf": [
            ["🏏"], "", "", ["cricket_bat_and_ball"], 10, 4, 15, 0
        ],
        "1f3d0": [
            ["🏐"], "", "", ["volleyball"], 10, 5, 15, 0
        ],
        "1f3d1": [
            ["🏑"], "", "", ["field_hockey_stick_and_ball"], 10, 6, 15, 0
        ],
        "1f3d2": [
            ["🏒"], "", "", ["ice_hockey_stick_and_puck"], 10, 7, 15, 0
        ],
        "1f3d3": [
            ["🏓"], "", "", ["table_tennis_paddle_and_ball"], 10, 8, 15, 0
        ],
        "1f3d4-fe0f": [
            ["🏔️", "🏔"], "", "", ["snow_capped_mountain"], 10, 9, 15, 0
        ],
        "1f3d5-fe0f": [
            ["🏕️", "🏕"], "", "", ["camping"], 10, 10, 15, 0
        ],
        "1f3d6-fe0f": [
            ["🏖️", "🏖"], "", "", ["beach_with_umbrella"], 10, 11, 15, 0
        ],
        "1f3d7-fe0f": [
            ["🏗️", "🏗"], "", "", ["building_construction"], 10, 12, 15, 0
        ],
        "1f3d8-fe0f": [
            ["🏘️", "🏘"], "", "", ["house_buildings"], 10, 13, 15, 0
        ],
        "1f3d9-fe0f": [
            ["🏙️", "🏙"], "", "", ["cityscape"], 10, 14, 15, 0
        ],
        "1f3da-fe0f": [
            ["🏚️", "🏚"], "", "", ["derelict_house_building"], 10, 15, 15, 0
        ],
        "1f3db-fe0f": [
            ["🏛️", "🏛"], "", "", ["classical_building"], 10, 16, 15, 0
        ],
        "1f3dc-fe0f": [
            ["🏜️", "🏜"], "", "", ["desert"], 10, 17, 15, 0
        ],
        "1f3dd-fe0f": [
            ["🏝️", "🏝"], "", "", ["desert_island"], 10, 18, 15, 0
        ],
        "1f3de-fe0f": [
            ["🏞️", "🏞"], "", "", ["national_park"], 10, 19, 15, 0
        ],
        "1f3df-fe0f": [
            ["🏟️", "🏟"], "", "", ["stadium"], 10, 20, 15, 0
        ],
        "1f3e0": [
            ["🏠"], "", "󾒰", ["house"], 10, 21, 15, 0
        ],
        "1f3e1": [
            ["🏡"], "", "󾒱", ["house_with_garden"], 10, 22, 15, 0
        ],
        "1f3e2": [
            ["🏢"], "", "󾒲", ["office"], 10, 23, 15, 0
        ],
        "1f3e3": [
            ["🏣"], "", "󾒳", ["post_office"], 10, 24, 15, 0
        ],
        "1f3e4": [
            ["🏤"], "", "", ["european_post_office"], 10, 25, 15, 0
        ],
        "1f3e5": [
            ["🏥"], "", "󾒴", ["hospital"], 10, 26, 15, 0
        ],
        "1f3e6": [
            ["🏦"], "", "󾒵", ["bank"], 10, 27, 15, 0
        ],
        "1f3e7": [
            ["🏧"], "", "󾒶", ["atm"], 10, 28, 15, 0
        ],
        "1f3e8": [
            ["🏨"], "", "󾒷", ["hotel"], 10, 29, 15, 0
        ],
        "1f3e9": [
            ["🏩"], "", "󾒸", ["love_hotel"], 10, 30, 15, 0
        ],
        "1f3ea": [
            ["🏪"], "", "󾒹", ["convenience_store"], 10, 31, 15, 0
        ],
        "1f3eb": [
            ["🏫"], "", "󾒺", ["school"], 10, 32, 15, 0
        ],
        "1f3ec": [
            ["🏬"], "", "󾒽", ["department_store"], 10, 33, 15, 0
        ],
        "1f3ed": [
            ["🏭"], "", "󾓀", ["factory"], 10, 34, 15, 0
        ],
        "1f3ee": [
            ["🏮"], "", "󾓂", ["izakaya_lantern", "lantern"], 10, 35, 15, 0
        ],
        "1f3ef": [
            ["🏯"], "", "󾒾", ["japanese_castle"], 10, 36, 15, 0
        ],
        "1f3f0": [
            ["🏰"], "", "󾒿", ["european_castle"], 10, 37, 15, 0
        ],
        "1f3f3-fe0f-200d-1f308": [
            ["🏳️‍🌈", "🏳‍🌈"], "", "", ["rainbow-flag"], 10, 38, 15, 0
        ],
        "1f3f3-fe0f-200d-26a7-fe0f": [
            ["🏳️‍⚧️"], "", "", ["transgender_flag"], 10, 39, 7, 0
        ],
        "1f3f3-fe0f": [
            ["🏳️", "🏳"], "", "", ["waving_white_flag"], 10, 40, 15, 0
        ],
        "1f3f4-200d-2620-fe0f": [
            ["🏴‍☠️", "🏴‍☠"], "", "", ["pirate_flag"], 10, 41, 15, 0
        ],
        "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f": [
            ["🏴󠁧󠁢󠁥󠁮󠁧󠁿"], "", "", ["flag-england"], 10, 42, 15, 0
        ],
        "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f": [
            ["🏴󠁧󠁢󠁳󠁣󠁴󠁿"], "", "", ["flag-scotland"], 10, 43, 15, 0
        ],
        "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f": [
            ["🏴󠁧󠁢󠁷󠁬󠁳󠁿"], "", "", ["flag-wales"], 10, 44, 15, 0
        ],
        "1f3f4": [
            ["🏴"], "", "", ["waving_black_flag"], 10, 45, 15, 0
        ],
        "1f3f5-fe0f": [
            ["🏵️", "🏵"], "", "", ["rosette"], 10, 46, 15, 0
        ],
        "1f3f7-fe0f": [
            ["🏷️", "🏷"], "", "", ["label"], 10, 47, 15, 0
        ],
        "1f3f8": [
            ["🏸"], "", "", ["badminton_racquet_and_shuttlecock"], 10, 48, 15, 0
        ],
        "1f3f9": [
            ["🏹"], "", "", ["bow_and_arrow"], 10, 49, 15, 0
        ],
        "1f3fa": [
            ["🏺"], "", "", ["amphora"], 10, 50, 15, 0
        ],
        "1f3fb": [
            ["🏻"], "", "", ["skin-tone-2"], 10, 51, 15, 0
        ],
        "1f3fc": [
            ["🏼"], "", "", ["skin-tone-3"], 10, 52, 15, 0
        ],
        "1f3fd": [
            ["🏽"], "", "", ["skin-tone-4"], 10, 53, 15, 0
        ],
        "1f3fe": [
            ["🏾"], "", "", ["skin-tone-5"], 10, 54, 15, 0
        ],
        "1f3ff": [
            ["🏿"], "", "", ["skin-tone-6"], 10, 55, 15, 0
        ],
        "1f400": [
            ["🐀"], "", "", ["rat"], 10, 56, 15, 0
        ],
        "1f401": [
            ["🐁"], "", "", ["mouse2"], 10, 57, 15, 0
        ],
        "1f402": [
            ["🐂"], "", "", ["ox"], 10, 58, 15, 0
        ],
        "1f403": [
            ["🐃"], "", "", ["water_buffalo"], 10, 59, 15, 0
        ],
        "1f404": [
            ["🐄"], "", "", ["cow2"], 11, 0, 15, 0
        ],
        "1f405": [
            ["🐅"], "", "", ["tiger2"], 11, 1, 15, 0
        ],
        "1f406": [
            ["🐆"], "", "", ["leopard"], 11, 2, 15, 0
        ],
        "1f407": [
            ["🐇"], "", "", ["rabbit2"], 11, 3, 15, 0
        ],
        "1f408-200d-2b1b": [
            ["🐈‍⬛"], "", "", ["black_cat"], 11, 4, 15, 0
        ],
        "1f408": [
            ["🐈"], "", "", ["cat2"], 11, 5, 15, 0
        ],
        "1f409": [
            ["🐉"], "", "", ["dragon"], 11, 6, 15, 0
        ],
        "1f40a": [
            ["🐊"], "", "", ["crocodile"], 11, 7, 15, 0
        ],
        "1f40b": [
            ["🐋"], "", "", ["whale2"], 11, 8, 15, 0
        ],
        "1f40c": [
            ["🐌"], "", "󾆹", ["snail"], 11, 9, 15, 0
        ],
        "1f40d": [
            ["🐍"], "", "󾇓", ["snake"], 11, 10, 15, 0
        ],
        "1f40e": [
            ["🐎"], "", "󾟜", ["racehorse"], 11, 11, 15, 0
        ],
        "1f40f": [
            ["🐏"], "", "", ["ram"], 11, 12, 15, 0
        ],
        "1f410": [
            ["🐐"], "", "", ["goat"], 11, 13, 15, 0
        ],
        "1f411": [
            ["🐑"], "", "󾇏", ["sheep"], 11, 14, 15, 0
        ],
        "1f412": [
            ["🐒"], "", "󾇎", ["monkey"], 11, 15, 15, 0
        ],
        "1f413": [
            ["🐓"], "", "", ["rooster"], 11, 16, 15, 0
        ],
        "1f414": [
            ["🐔"], "", "󾇔", ["chicken"], 11, 17, 15, 0
        ],
        "1f415-200d-1f9ba": [
            ["🐕‍🦺"], "", "", ["service_dog"], 11, 18, 15, 0
        ],
        "1f415": [
            ["🐕"], "", "", ["dog2"], 11, 19, 15, 0
        ],
        "1f416": [
            ["🐖"], "", "", ["pig2"], 11, 20, 15, 0
        ],
        "1f417": [
            ["🐗"], "", "󾇕", ["boar"], 11, 21, 15, 0
        ],
        "1f418": [
            ["🐘"], "", "󾇌", ["elephant"], 11, 22, 15, 0
        ],
        "1f419": [
            ["🐙"], "", "󾇅", ["octopus"], 11, 23, 15, 0
        ],
        "1f41a": [
            ["🐚"], "", "󾇆", ["shell"], 11, 24, 15, 0
        ],
        "1f41b": [
            ["🐛"], "", "󾇋", ["bug"], 11, 25, 15, 0
        ],
        "1f41c": [
            ["🐜"], "", "󾇚", ["ant"], 11, 26, 15, 0
        ],
        "1f41d": [
            ["🐝"], "", "󾇡", ["bee", "honeybee"], 11, 27, 15, 0
        ],
        "1f41e": [
            ["🐞"], "", "󾇢", ["ladybug", "lady_beetle"], 11, 28, 15, 0
        ],
        "1f41f": [
            ["🐟"], "", "󾆽", ["fish"], 11, 29, 15, 0
        ],
        "1f420": [
            ["🐠"], "", "󾇉", ["tropical_fish"], 11, 30, 15, 0
        ],
        "1f421": [
            ["🐡"], "", "󾇙", ["blowfish"], 11, 31, 15, 0
        ],
        "1f422": [
            ["🐢"], "", "󾇜", ["turtle"], 11, 32, 15, 0
        ],
        "1f423": [
            ["🐣"], "", "󾇝", ["hatching_chick"], 11, 33, 15, 0
        ],
        "1f424": [
            ["🐤"], "", "󾆺", ["baby_chick"], 11, 34, 15, 0
        ],
        "1f425": [
            ["🐥"], "", "󾆻", ["hatched_chick"], 11, 35, 15, 0
        ],
        "1f426": [
            ["🐦"], "", "󾇈", ["bird"], 11, 36, 15, 0
        ],
        "1f427": [
            ["🐧"], "", "󾆼", ["penguin"], 11, 37, 15, 0
        ],
        "1f428": [
            ["🐨"], "", "󾇍", ["koala"], 11, 38, 15, 0
        ],
        "1f429": [
            ["🐩"], "", "󾇘", ["poodle"], 11, 39, 15, 0
        ],
        "1f42a": [
            ["🐪"], "", "", ["dromedary_camel"], 11, 40, 15, 0
        ],
        "1f42b": [
            ["🐫"], "", "󾇖", ["camel"], 11, 41, 15, 0
        ],
        "1f42c": [
            ["🐬"], "", "󾇇", ["dolphin", "flipper"], 11, 42, 15, 0
        ],
        "1f42d": [
            ["🐭"], "", "󾇂", ["mouse"], 11, 43, 15, 0
        ],
        "1f42e": [
            ["🐮"], "", "󾇑", ["cow"], 11, 44, 15, 0
        ],
        "1f42f": [
            ["🐯"], "", "󾇀", ["tiger"], 11, 45, 15, 0
        ],
        "1f430": [
            ["🐰"], "", "󾇒", ["rabbit"], 11, 46, 15, 0
        ],
        "1f431": [
            ["🐱"], "", "󾆸", ["cat"], 11, 47, 15, 0
        ],
        "1f432": [
            ["🐲"], "", "󾇞", ["dragon_face"], 11, 48, 15, 0
        ],
        "1f433": [
            ["🐳"], "", "󾇃", ["whale"], 11, 49, 15, 0
        ],
        "1f434": [
            ["🐴"], "", "󾆾", ["horse"], 11, 50, 15, 0
        ],
        "1f435": [
            ["🐵"], "", "󾇄", ["monkey_face"], 11, 51, 15, 0
        ],
        "1f436": [
            ["🐶"], "", "󾆷", ["dog"], 11, 52, 15, 0
        ],
        "1f437": [
            ["🐷"], "", "󾆿", ["pig"], 11, 53, 15, 0
        ],
        "1f438": [
            ["🐸"], "", "󾇗", ["frog"], 11, 54, 15, 0
        ],
        "1f439": [
            ["🐹"], "", "󾇊", ["hamster"], 11, 55, 15, 0
        ],
        "1f43a": [
            ["🐺"], "", "󾇐", ["wolf"], 11, 56, 15, 0
        ],
        "1f43b-200d-2744-fe0f": [
            ["🐻‍❄️", "🐻‍❄"], "", "", ["polar_bear"], 11, 57, 15, 0
        ],
        "1f43b": [
            ["🐻"], "", "󾇁", ["bear"], 11, 58, 15, 0
        ],
        "1f43c": [
            ["🐼"], "", "󾇟", ["panda_face"], 11, 59, 15, 0
        ],
        "1f43d": [
            ["🐽"], "", "󾇠", ["pig_nose"], 12, 0, 15, 0
        ],
        "1f43e": [
            ["🐾"], "", "󾇛", ["feet", "paw_prints"], 12, 1, 15, 0
        ],
        "1f43f-fe0f": [
            ["🐿️", "🐿"], "", "", ["chipmunk"], 12, 2, 15, 0
        ],
        "1f440": [
            ["👀"], "", "󾆐", ["eyes"], 12, 3, 15, 0
        ],
        "1f441-fe0f-200d-1f5e8-fe0f": [
            ["👁️‍🗨️"], "", "", ["eye-in-speech-bubble"], 12, 4, 7, 0
        ],
        "1f441-fe0f": [
            ["👁️", "👁"], "", "", ["eye"], 12, 5, 15, 0
        ],
        "1f442": [
            ["👂"], "", "󾆑", ["ear"], 12, 6, 15, 0
        ],
        "1f443": [
            ["👃"], "", "󾆒", ["nose"], 12, 12, 15, 0
        ],
        "1f444": [
            ["👄"], "", "󾆓", ["lips"], 12, 18, 15, 0
        ],
        "1f445": [
            ["👅"], "", "󾆔", ["tongue"], 12, 19, 15, 0
        ],
        "1f446": [
            ["👆"], "", "󾮙", ["point_up_2"], 12, 20, 15, 0
        ],
        "1f447": [
            ["👇"], "", "󾮚", ["point_down"], 12, 26, 15, 0
        ],
        "1f448": [
            ["👈"], "", "󾮛", ["point_left"], 12, 32, 15, 0
        ],
        "1f449": [
            ["👉"], "", "󾮜", ["point_right"], 12, 38, 15, 0
        ],
        "1f44a": [
            ["👊"], "", "󾮖", ["facepunch", "punch"], 12, 44, 15, 0
        ],
        "1f44b": [
            ["👋"], "", "󾮝", ["wave"], 12, 50, 15, 0
        ],
        "1f44c": [
            ["👌"], "", "󾮟", ["ok_hand"], 12, 56, 15, 0
        ],
        "1f44d": [
            ["👍"], "", "󾮗", ["+1", "thumbsup"], 13, 2, 15, 0
        ],
        "1f44e": [
            ["👎"], "", "󾮠", ["-1", "thumbsdown"], 13, 8, 15, 0
        ],
        "1f44f": [
            ["👏"], "", "󾮞", ["clap"], 13, 14, 15, 0
        ],
        "1f450": [
            ["👐"], "", "󾮡", ["open_hands"], 13, 20, 15, 0
        ],
        "1f451": [
            ["👑"], "", "󾓑", ["crown"], 13, 26, 15, 0
        ],
        "1f452": [
            ["👒"], "", "󾓔", ["womans_hat"], 13, 27, 15, 0
        ],
        "1f453": [
            ["👓"], "", "󾓎", ["eyeglasses"], 13, 28, 15, 0
        ],
        "1f454": [
            ["👔"], "", "󾓓", ["necktie"], 13, 29, 15, 0
        ],
        "1f455": [
            ["👕"], "", "󾓏", ["shirt", "tshirt"], 13, 30, 15, 0
        ],
        "1f456": [
            ["👖"], "", "󾓐", ["jeans"], 13, 31, 15, 0
        ],
        "1f457": [
            ["👗"], "", "󾓕", ["dress"], 13, 32, 15, 0
        ],
        "1f458": [
            ["👘"], "", "󾓙", ["kimono"], 13, 33, 15, 0
        ],
        "1f459": [
            ["👙"], "", "󾓚", ["bikini"], 13, 34, 15, 0
        ],
        "1f45a": [
            ["👚"], "", "󾓛", ["womans_clothes"], 13, 35, 15, 0
        ],
        "1f45b": [
            ["👛"], "", "󾓜", ["purse"], 13, 36, 15, 0
        ],
        "1f45c": [
            ["👜"], "", "󾓰", ["handbag"], 13, 37, 15, 0
        ],
        "1f45d": [
            ["👝"], "", "󾓱", ["pouch"], 13, 38, 15, 0
        ],
        "1f45e": [
            ["👞"], "", "󾓌", ["mans_shoe", "shoe"], 13, 39, 15, 0
        ],
        "1f45f": [
            ["👟"], "", "󾓍", ["athletic_shoe"], 13, 40, 15, 0
        ],
        "1f460": [
            ["👠"], "", "󾓖", ["high_heel"], 13, 41, 15, 0
        ],
        "1f461": [
            ["👡"], "", "󾓗", ["sandal"], 13, 42, 15, 0
        ],
        "1f462": [
            ["👢"], "", "󾓘", ["boot"], 13, 43, 15, 0
        ],
        "1f463": [
            ["👣"], "", "󾕓", ["footprints"], 13, 44, 15, 0
        ],
        "1f464": [
            ["👤"], "", "󾆚", ["bust_in_silhouette"], 13, 45, 15, 0
        ],
        "1f465": [
            ["👥"], "", "", ["busts_in_silhouette"], 13, 46, 15, 0
        ],
        "1f466": [
            ["👦"], "", "󾆛", ["boy"], 13, 47, 15, 0
        ],
        "1f467": [
            ["👧"], "", "󾆜", ["girl"], 13, 53, 15, 0
        ],
        "1f468-200d-1f33e": [
            ["👨‍🌾"], "", "", ["male-farmer"], 13, 59, 15, 0
        ],
        "1f468-200d-1f373": [
            ["👨‍🍳"], "", "", ["male-cook"], 14, 5, 15, 0
        ],
        "1f468-200d-1f37c": [
            ["👨‍🍼"], "", "", ["man_feeding_baby"], 14, 11, 15, 0
        ],
        "1f468-200d-1f393": [
            ["👨‍🎓"], "", "", ["male-student"], 14, 17, 15, 0
        ],
        "1f468-200d-1f3a4": [
            ["👨‍🎤"], "", "", ["male-singer"], 14, 23, 15, 0
        ],
        "1f468-200d-1f3a8": [
            ["👨‍🎨"], "", "", ["male-artist"], 14, 29, 15, 0
        ],
        "1f468-200d-1f3eb": [
            ["👨‍🏫"], "", "", ["male-teacher"], 14, 35, 15, 0
        ],
        "1f468-200d-1f3ed": [
            ["👨‍🏭"], "", "", ["male-factory-worker"], 14, 41, 15, 0
        ],
        "1f468-200d-1f466-200d-1f466": [
            ["👨‍👦‍👦"], "", "", ["man-boy-boy"], 14, 47, 15, 0
        ],
        "1f468-200d-1f466": [
            ["👨‍👦"], "", "", ["man-boy"], 14, 48, 15, 0
        ],
        "1f468-200d-1f467-200d-1f466": [
            ["👨‍👧‍👦"], "", "", ["man-girl-boy"], 14, 49, 15, 0
        ],
        "1f468-200d-1f467-200d-1f467": [
            ["👨‍👧‍👧"], "", "", ["man-girl-girl"], 14, 50, 15, 0
        ],
        "1f468-200d-1f467": [
            ["👨‍👧"], "", "", ["man-girl"], 14, 51, 15, 0
        ],
        "1f468-200d-1f468-200d-1f466": [
            ["👨‍👨‍👦"], "", "", ["man-man-boy"], 14, 52, 15, 0
        ],
        "1f468-200d-1f468-200d-1f466-200d-1f466": [
            ["👨‍👨‍👦‍👦"], "", "", ["man-man-boy-boy"], 14, 53, 15, 0
        ],
        "1f468-200d-1f468-200d-1f467": [
            ["👨‍👨‍👧"], "", "", ["man-man-girl"], 14, 54, 15, 0
        ],
        "1f468-200d-1f468-200d-1f467-200d-1f466": [
            ["👨‍👨‍👧‍👦"], "", "", ["man-man-girl-boy"], 14, 55, 15, 0
        ],
        "1f468-200d-1f468-200d-1f467-200d-1f467": [
            ["👨‍👨‍👧‍👧"], "", "", ["man-man-girl-girl"], 14, 56, 15, 0
        ],
        "1f468-200d-1f469-200d-1f466": [
            ["👨‍👩‍👦", "👪"], "", "", ["man-woman-boy", "family"], 14, 57, 15, 0
        ],
        "1f468-200d-1f469-200d-1f466-200d-1f466": [
            ["👨‍👩‍👦‍👦"], "", "", ["man-woman-boy-boy"], 14, 58, 15, 0
        ],
        "1f468-200d-1f469-200d-1f467": [
            ["👨‍👩‍👧"], "", "", ["man-woman-girl"], 14, 59, 15, 0
        ],
        "1f468-200d-1f469-200d-1f467-200d-1f466": [
            ["👨‍👩‍👧‍👦"], "", "", ["man-woman-girl-boy"], 15, 0, 15, 0
        ],
        "1f468-200d-1f469-200d-1f467-200d-1f467": [
            ["👨‍👩‍👧‍👧"], "", "", ["man-woman-girl-girl"], 15, 1, 15, 0
        ],
        "1f468-200d-1f4bb": [
            ["👨‍💻"], "", "", ["male-technologist"], 15, 2, 15, 0
        ],
        "1f468-200d-1f4bc": [
            ["👨‍💼"], "", "", ["male-office-worker"], 15, 8, 15, 0
        ],
        "1f468-200d-1f527": [
            ["👨‍🔧"], "", "", ["male-mechanic"], 15, 14, 15, 0
        ],
        "1f468-200d-1f52c": [
            ["👨‍🔬"], "", "", ["male-scientist"], 15, 20, 15, 0
        ],
        "1f468-200d-1f680": [
            ["👨‍🚀"], "", "", ["male-astronaut"], 15, 26, 15, 0
        ],
        "1f468-200d-1f692": [
            ["👨‍🚒"], "", "", ["male-firefighter"], 15, 32, 15, 0
        ],
        "1f468-200d-1f9af": [
            ["👨‍🦯"], "", "", ["man_with_probing_cane"], 15, 38, 15, 0
        ],
        "1f468-200d-1f9b0": [
            ["👨‍🦰"], "", "", ["red_haired_man"], 15, 44, 15, 0
        ],
        "1f468-200d-1f9b1": [
            ["👨‍🦱"], "", "", ["curly_haired_man"], 15, 50, 15, 0
        ],
        "1f468-200d-1f9b2": [
            ["👨‍🦲"], "", "", ["bald_man"], 15, 56, 15, 0
        ],
        "1f468-200d-1f9b3": [
            ["👨‍🦳"], "", "", ["white_haired_man"], 16, 2, 15, 0
        ],
        "1f468-200d-1f9bc": [
            ["👨‍🦼"], "", "", ["man_in_motorized_wheelchair"], 16, 8, 15, 0
        ],
        "1f468-200d-1f9bd": [
            ["👨‍🦽"], "", "", ["man_in_manual_wheelchair"], 16, 14, 15, 0
        ],
        "1f468-200d-2695-fe0f": [
            ["👨‍⚕️", "👨‍⚕"], "", "", ["male-doctor"], 16, 20, 15, 0
        ],
        "1f468-200d-2696-fe0f": [
            ["👨‍⚖️", "👨‍⚖"], "", "", ["male-judge"], 16, 26, 15, 0
        ],
        "1f468-200d-2708-fe0f": [
            ["👨‍✈️", "👨‍✈"], "", "", ["male-pilot"], 16, 32, 15, 0
        ],
        "1f468-200d-2764-fe0f-200d-1f468": [
            ["👨‍❤️‍👨", "👨‍❤‍👨"], "", "", ["man-heart-man"], 16, 38, 15, 0
        ],
        "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": [
            ["👨‍❤️‍💋‍👨", "👨‍❤‍💋‍👨"], "", "", ["man-kiss-man"], 17, 4, 15, 0
        ],
        "1f468": [
            ["👨"], "", "󾆝", ["man"], 17, 30, 15, 0
        ],
        "1f469-200d-1f33e": [
            ["👩‍🌾"], "", "", ["female-farmer"], 17, 36, 15, 0
        ],
        "1f469-200d-1f373": [
            ["👩‍🍳"], "", "", ["female-cook"], 17, 42, 15, 0
        ],
        "1f469-200d-1f37c": [
            ["👩‍🍼"], "", "", ["woman_feeding_baby"], 17, 48, 15, 0
        ],
        "1f469-200d-1f393": [
            ["👩‍🎓"], "", "", ["female-student"], 17, 54, 15, 0
        ],
        "1f469-200d-1f3a4": [
            ["👩‍🎤"], "", "", ["female-singer"], 18, 0, 15, 0
        ],
        "1f469-200d-1f3a8": [
            ["👩‍🎨"], "", "", ["female-artist"], 18, 6, 15, 0
        ],
        "1f469-200d-1f3eb": [
            ["👩‍🏫"], "", "", ["female-teacher"], 18, 12, 15, 0
        ],
        "1f469-200d-1f3ed": [
            ["👩‍🏭"], "", "", ["female-factory-worker"], 18, 18, 15, 0
        ],
        "1f469-200d-1f466-200d-1f466": [
            ["👩‍👦‍👦"], "", "", ["woman-boy-boy"], 18, 24, 15, 0
        ],
        "1f469-200d-1f466": [
            ["👩‍👦"], "", "", ["woman-boy"], 18, 25, 15, 0
        ],
        "1f469-200d-1f467-200d-1f466": [
            ["👩‍👧‍👦"], "", "", ["woman-girl-boy"], 18, 26, 15, 0
        ],
        "1f469-200d-1f467-200d-1f467": [
            ["👩‍👧‍👧"], "", "", ["woman-girl-girl"], 18, 27, 15, 0
        ],
        "1f469-200d-1f467": [
            ["👩‍👧"], "", "", ["woman-girl"], 18, 28, 15, 0
        ],
        "1f469-200d-1f469-200d-1f466": [
            ["👩‍👩‍👦"], "", "", ["woman-woman-boy"], 18, 29, 15, 0
        ],
        "1f469-200d-1f469-200d-1f466-200d-1f466": [
            ["👩‍👩‍👦‍👦"], "", "", ["woman-woman-boy-boy"], 18, 30, 15, 0
        ],
        "1f469-200d-1f469-200d-1f467": [
            ["👩‍👩‍👧"], "", "", ["woman-woman-girl"], 18, 31, 15, 0
        ],
        "1f469-200d-1f469-200d-1f467-200d-1f466": [
            ["👩‍👩‍👧‍👦"], "", "", ["woman-woman-girl-boy"], 18, 32, 15, 0
        ],
        "1f469-200d-1f469-200d-1f467-200d-1f467": [
            ["👩‍👩‍👧‍👧"], "", "", ["woman-woman-girl-girl"], 18, 33, 15, 0
        ],
        "1f469-200d-1f4bb": [
            ["👩‍💻"], "", "", ["female-technologist"], 18, 34, 15, 0
        ],
        "1f469-200d-1f4bc": [
            ["👩‍💼"], "", "", ["female-office-worker"], 18, 40, 15, 0
        ],
        "1f469-200d-1f527": [
            ["👩‍🔧"], "", "", ["female-mechanic"], 18, 46, 15, 0
        ],
        "1f469-200d-1f52c": [
            ["👩‍🔬"], "", "", ["female-scientist"], 18, 52, 15, 0
        ],
        "1f469-200d-1f680": [
            ["👩‍🚀"], "", "", ["female-astronaut"], 18, 58, 15, 0
        ],
        "1f469-200d-1f692": [
            ["👩‍🚒"], "", "", ["female-firefighter"], 19, 4, 15, 0
        ],
        "1f469-200d-1f9af": [
            ["👩‍🦯"], "", "", ["woman_with_probing_cane"], 19, 10, 15, 0
        ],
        "1f469-200d-1f9b0": [
            ["👩‍🦰"], "", "", ["red_haired_woman"], 19, 16, 15, 0
        ],
        "1f469-200d-1f9b1": [
            ["👩‍🦱"], "", "", ["curly_haired_woman"], 19, 22, 15, 0
        ],
        "1f469-200d-1f9b2": [
            ["👩‍🦲"], "", "", ["bald_woman"], 19, 28, 15, 0
        ],
        "1f469-200d-1f9b3": [
            ["👩‍🦳"], "", "", ["white_haired_woman"], 19, 34, 15, 0
        ],
        "1f469-200d-1f9bc": [
            ["👩‍🦼"], "", "", ["woman_in_motorized_wheelchair"], 19, 40, 15, 0
        ],
        "1f469-200d-1f9bd": [
            ["👩‍🦽"], "", "", ["woman_in_manual_wheelchair"], 19, 46, 15, 0
        ],
        "1f469-200d-2695-fe0f": [
            ["👩‍⚕️", "👩‍⚕"], "", "", ["female-doctor"], 19, 52, 15, 0
        ],
        "1f469-200d-2696-fe0f": [
            ["👩‍⚖️", "👩‍⚖"], "", "", ["female-judge"], 19, 58, 15, 0
        ],
        "1f469-200d-2708-fe0f": [
            ["👩‍✈️", "👩‍✈"], "", "", ["female-pilot"], 20, 4, 15, 0
        ],
        "1f469-200d-2764-fe0f-200d-1f468": [
            ["👩‍❤️‍👨", "👩‍❤‍👨"], "", "", ["woman-heart-man"], 20, 10, 15, 0
        ],
        "1f469-200d-2764-fe0f-200d-1f469": [
            ["👩‍❤️‍👩", "👩‍❤‍👩"], "", "", ["woman-heart-woman"], 20, 36, 15, 0
        ],
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": [
            ["👩‍❤️‍💋‍👨", "👩‍❤‍💋‍👨"], "", "", ["woman-kiss-man"], 21, 2, 15, 0
        ],
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": [
            ["👩‍❤️‍💋‍👩", "👩‍❤‍💋‍👩"], "", "", ["woman-kiss-woman"], 21, 28, 15, 0
        ],
        "1f469": [
            ["👩"], "", "󾆞", ["woman"], 21, 54, 15, 0
        ],
        "1f46b": [
            ["👫"], "", "󾆠", ["man_and_woman_holding_hands", "woman_and_man_holding_hands", "couple"], 22, 1, 15, 0
        ],
        "1f46c": [
            ["👬"], "", "", ["two_men_holding_hands", "men_holding_hands"], 22, 27, 15, 0
        ],
        "1f46d": [
            ["👭"], "", "", ["two_women_holding_hands", "women_holding_hands"], 22, 53, 15, 0
        ],
        "1f46e-200d-2640-fe0f": [
            ["👮‍♀️", "👮‍♀"], "", "", ["female-police-officer"], 23, 19, 15, 0
        ],
        "1f46e-200d-2642-fe0f": [
            ["👮‍♂️", "👮‍♂", "👮"], "", "", ["male-police-officer", "cop"], 23, 25, 15, 0
        ],
        "1f46f-200d-2640-fe0f": [
            ["👯‍♀️", "👯‍♀", "👯"], "", "", ["women-with-bunny-ears-partying", "woman-with-bunny-ears-partying", "dancers"], 23, 37, 15, 0
        ],
        "1f46f-200d-2642-fe0f": [
            ["👯‍♂️", "👯‍♂"], "", "", ["men-with-bunny-ears-partying", "man-with-bunny-ears-partying"], 23, 38, 15, 0
        ],
        "1f470-200d-2640-fe0f": [
            ["👰‍♀️", "👰‍♀"], "", "", ["woman_with_veil"], 23, 40, 15, 0
        ],
        "1f470-200d-2642-fe0f": [
            ["👰‍♂️", "👰‍♂"], "", "", ["man_with_veil"], 23, 46, 15, 0
        ],
        "1f470": [
            ["👰"], "", "󾆣", ["bride_with_veil"], 23, 52, 15, 0
        ],
        "1f471-200d-2640-fe0f": [
            ["👱‍♀️", "👱‍♀"], "", "", ["blond-haired-woman"], 23, 58, 15, 0
        ],
        "1f471-200d-2642-fe0f": [
            ["👱‍♂️", "👱‍♂", "👱"], "", "", ["blond-haired-man", "person_with_blond_hair"], 24, 4, 15, 0
        ],
        "1f472": [
            ["👲"], "", "󾆥", ["man_with_gua_pi_mao"], 24, 16, 15, 0
        ],
        "1f473-200d-2640-fe0f": [
            ["👳‍♀️", "👳‍♀"], "", "", ["woman-wearing-turban"], 24, 22, 15, 0
        ],
        "1f473-200d-2642-fe0f": [
            ["👳‍♂️", "👳‍♂", "👳"], "", "", ["man-wearing-turban", "man_with_turban"], 24, 28, 15, 0
        ],
        "1f474": [
            ["👴"], "", "󾆧", ["older_man"], 24, 40, 15, 0
        ],
        "1f475": [
            ["👵"], "", "󾆨", ["older_woman"], 24, 46, 15, 0
        ],
        "1f476": [
            ["👶"], "", "󾆩", ["baby"], 24, 52, 15, 0
        ],
        "1f477-200d-2640-fe0f": [
            ["👷‍♀️", "👷‍♀"], "", "", ["female-construction-worker"], 24, 58, 15, 0
        ],
        "1f477-200d-2642-fe0f": [
            ["👷‍♂️", "👷‍♂", "👷"], "", "", ["male-construction-worker", "construction_worker"], 25, 4, 15, 0
        ],
        "1f478": [
            ["👸"], "", "󾆫", ["princess"], 25, 16, 15, 0
        ],
        "1f479": [
            ["👹"], "", "󾆬", ["japanese_ogre"], 25, 22, 15, 0
        ],
        "1f47a": [
            ["👺"], "", "󾆭", ["japanese_goblin"], 25, 23, 15, 0
        ],
        "1f47b": [
            ["👻"], "", "󾆮", ["ghost"], 25, 24, 15, 0
        ],
        "1f47c": [
            ["👼"], "", "󾆯", ["angel"], 25, 25, 15, 0
        ],
        "1f47d": [
            ["👽"], "", "󾆰", ["alien"], 25, 31, 15, 0
        ],
        "1f47e": [
            ["👾"], "", "󾆱", ["space_invader"], 25, 32, 15, 0
        ],
        "1f47f": [
            ["👿"], "", "󾆲", ["imp"], 25, 33, 15, 0
        ],
        "1f480": [
            ["💀"], "", "󾆳", ["skull"], 25, 34, 15, 0
        ],
        "1f481-200d-2640-fe0f": [
            ["💁‍♀️", "💁‍♀", "💁"], "", "", ["woman-tipping-hand", "information_desk_person"], 25, 35, 15, 0
        ],
        "1f481-200d-2642-fe0f": [
            ["💁‍♂️", "💁‍♂"], "", "", ["man-tipping-hand"], 25, 41, 15, 0
        ],
        "1f482-200d-2640-fe0f": [
            ["💂‍♀️", "💂‍♀"], "", "", ["female-guard"], 25, 53, 15, 0
        ],
        "1f482-200d-2642-fe0f": [
            ["💂‍♂️", "💂‍♂", "💂"], "", "", ["male-guard", "guardsman"], 25, 59, 15, 0
        ],
        "1f483": [
            ["💃"], "", "󾆶", ["dancer"], 26, 11, 15, 0
        ],
        "1f484": [
            ["💄"], "", "󾆕", ["lipstick"], 26, 17, 15, 0
        ],
        "1f485": [
            ["💅"], "", "󾆖", ["nail_care"], 26, 18, 15, 0
        ],
        "1f486-200d-2640-fe0f": [
            ["💆‍♀️", "💆‍♀", "💆"], "", "", ["woman-getting-massage", "massage"], 26, 24, 15, 0
        ],
        "1f486-200d-2642-fe0f": [
            ["💆‍♂️", "💆‍♂"], "", "", ["man-getting-massage"], 26, 30, 15, 0
        ],
        "1f487-200d-2640-fe0f": [
            ["💇‍♀️", "💇‍♀", "💇"], "", "", ["woman-getting-haircut", "haircut"], 26, 42, 15, 0
        ],
        "1f487-200d-2642-fe0f": [
            ["💇‍♂️", "💇‍♂"], "", "", ["man-getting-haircut"], 26, 48, 15, 0
        ],
        "1f488": [
            ["💈"], "", "󾆙", ["barber"], 27, 0, 15, 0
        ],
        "1f489": [
            ["💉"], "", "󾔉", ["syringe"], 27, 1, 15, 0
        ],
        "1f48a": [
            ["💊"], "", "󾔊", ["pill"], 27, 2, 15, 0
        ],
        "1f48b": [
            ["💋"], "", "󾠣", ["kiss"], 27, 3, 15, 0
        ],
        "1f48c": [
            ["💌"], "", "󾠤", ["love_letter"], 27, 4, 15, 0
        ],
        "1f48d": [
            ["💍"], "", "󾠥", ["ring"], 27, 5, 15, 0
        ],
        "1f48e": [
            ["💎"], "", "󾠦", ["gem"], 27, 6, 15, 0
        ],
        "1f48f": [
            ["💏"], "", "󾠧", ["couplekiss"], 27, 7, 15, 0
        ],
        "1f490": [
            ["💐"], "", "󾠨", ["bouquet"], 27, 33, 15, 0
        ],
        "1f491": [
            ["💑"], "", "󾠩", ["couple_with_heart"], 27, 34, 15, 0
        ],
        "1f492": [
            ["💒"], "", "󾠪", ["wedding"], 28, 0, 15, 0
        ],
        "1f493": [
            ["💓"], "", "󾬍", ["heartbeat"], 28, 1, 15, 0
        ],
        "1f494": [
            ["💔"], "", "󾬎", ["broken_heart"], 28, 2, 15, 0, "</3"
        ],
        "1f495": [
            ["💕"], "", "󾬏", ["two_hearts"], 28, 3, 15, 0
        ],
        "1f496": [
            ["💖"], "", "󾬐", ["sparkling_heart"], 28, 4, 15, 0
        ],
        "1f497": [
            ["💗"], "", "󾬑", ["heartpulse"], 28, 5, 15, 0
        ],
        "1f498": [
            ["💘"], "", "󾬒", ["cupid"], 28, 6, 15, 0
        ],
        "1f499": [
            ["💙"], "", "󾬓", ["blue_heart"], 28, 7, 15, 0, "<3"
        ],
        "1f49a": [
            ["💚"], "", "󾬔", ["green_heart"], 28, 8, 15, 0, "<3"
        ],
        "1f49b": [
            ["💛"], "", "󾬕", ["yellow_heart"], 28, 9, 15, 0, "<3"
        ],
        "1f49c": [
            ["💜"], "", "󾬖", ["purple_heart"], 28, 10, 15, 0, "<3"
        ],
        "1f49d": [
            ["💝"], "", "󾬗", ["gift_heart"], 28, 11, 15, 0
        ],
        "1f49e": [
            ["💞"], "", "󾬘", ["revolving_hearts"], 28, 12, 15, 0
        ],
        "1f49f": [
            ["💟"], "", "󾬙", ["heart_decoration"], 28, 13, 15, 0
        ],
        "1f4a0": [
            ["💠"], "", "󾭕", ["diamond_shape_with_a_dot_inside"], 28, 14, 15, 0
        ],
        "1f4a1": [
            ["💡"], "", "󾭖", ["bulb"], 28, 15, 15, 0
        ],
        "1f4a2": [
            ["💢"], "", "󾭗", ["anger"], 28, 16, 15, 0
        ],
        "1f4a3": [
            ["💣"], "", "󾭘", ["bomb"], 28, 17, 15, 0
        ],
        "1f4a4": [
            ["💤"], "", "󾭙", ["zzz"], 28, 18, 15, 0
        ],
        "1f4a5": [
            ["💥"], "", "󾭚", ["boom", "collision"], 28, 19, 15, 0
        ],
        "1f4a6": [
            ["💦"], "", "󾭛", ["sweat_drops"], 28, 20, 15, 0
        ],
        "1f4a7": [
            ["💧"], "", "󾭜", ["droplet"], 28, 21, 15, 0
        ],
        "1f4a8": [
            ["💨"], "", "󾭝", ["dash"], 28, 22, 15, 0
        ],
        "1f4a9": [
            ["💩"], "", "󾓴", ["hankey", "poop", "shit"], 28, 23, 15, 0
        ],
        "1f4aa": [
            ["💪"], "", "󾭞", ["muscle"], 28, 24, 15, 0
        ],
        "1f4ab": [
            ["💫"], "", "󾭟", ["dizzy"], 28, 30, 15, 0
        ],
        "1f4ac": [
            ["💬"], "", "󾔲", ["speech_balloon"], 28, 31, 15, 0
        ],
        "1f4ad": [
            ["💭"], "", "", ["thought_balloon"], 28, 32, 15, 0
        ],
        "1f4ae": [
            ["💮"], "", "󾭺", ["white_flower"], 28, 33, 15, 0
        ],
        "1f4af": [
            ["💯"], "", "󾭻", ["100"], 28, 34, 15, 0
        ],
        "1f4b0": [
            ["💰"], "", "󾓝", ["moneybag"], 28, 35, 15, 0
        ],
        "1f4b1": [
            ["💱"], "", "󾓞", ["currency_exchange"], 28, 36, 15, 0
        ],
        "1f4b2": [
            ["💲"], "", "󾓠", ["heavy_dollar_sign"], 28, 37, 15, 0
        ],
        "1f4b3": [
            ["💳"], "", "󾓡", ["credit_card"], 28, 38, 15, 0
        ],
        "1f4b4": [
            ["💴"], "", "󾓢", ["yen"], 28, 39, 15, 0
        ],
        "1f4b5": [
            ["💵"], "", "󾓣", ["dollar"], 28, 40, 15, 0
        ],
        "1f4b6": [
            ["💶"], "", "", ["euro"], 28, 41, 15, 0
        ],
        "1f4b7": [
            ["💷"], "", "", ["pound"], 28, 42, 15, 0
        ],
        "1f4b8": [
            ["💸"], "", "󾓤", ["money_with_wings"], 28, 43, 15, 0
        ],
        "1f4b9": [
            ["💹"], "", "󾓟", ["chart"], 28, 44, 15, 0
        ],
        "1f4ba": [
            ["💺"], "", "󾔷", ["seat"], 28, 45, 15, 0
        ],
        "1f4bb": [
            ["💻"], "", "󾔸", ["computer"], 28, 46, 15, 0
        ],
        "1f4bc": [
            ["💼"], "", "󾔻", ["briefcase"], 28, 47, 15, 0
        ],
        "1f4bd": [
            ["💽"], "", "󾔼", ["minidisc"], 28, 48, 15, 0
        ],
        "1f4be": [
            ["💾"], "", "󾔽", ["floppy_disk"], 28, 49, 15, 0
        ],
        "1f4bf": [
            ["💿"], "", "󾠝", ["cd"], 28, 50, 15, 0
        ],
        "1f4c0": [
            ["📀"], "", "󾠞", ["dvd"], 28, 51, 15, 0
        ],
        "1f4c1": [
            ["📁"], "", "󾕃", ["file_folder"], 28, 52, 15, 0
        ],
        "1f4c2": [
            ["📂"], "", "󾕄", ["open_file_folder"], 28, 53, 15, 0
        ],
        "1f4c3": [
            ["📃"], "", "󾕀", ["page_with_curl"], 28, 54, 15, 0
        ],
        "1f4c4": [
            ["📄"], "", "󾕁", ["page_facing_up"], 28, 55, 15, 0
        ],
        "1f4c5": [
            ["📅"], "", "󾕂", ["date"], 28, 56, 15, 0
        ],
        "1f4c6": [
            ["📆"], "", "󾕉", ["calendar"], 28, 57, 15, 0
        ],
        "1f4c7": [
            ["📇"], "", "󾕍", ["card_index"], 28, 58, 15, 0
        ],
        "1f4c8": [
            ["📈"], "", "󾕋", ["chart_with_upwards_trend"], 28, 59, 15, 0
        ],
        "1f4c9": [
            ["📉"], "", "󾕌", ["chart_with_downwards_trend"], 29, 0, 15, 0
        ],
        "1f4ca": [
            ["📊"], "", "󾕊", ["bar_chart"], 29, 1, 15, 0
        ],
        "1f4cb": [
            ["📋"], "", "󾕈", ["clipboard"], 29, 2, 15, 0
        ],
        "1f4cc": [
            ["📌"], "", "󾕎", ["pushpin"], 29, 3, 15, 0
        ],
        "1f4cd": [
            ["📍"], "", "󾔿", ["round_pushpin"], 29, 4, 15, 0
        ],
        "1f4ce": [
            ["📎"], "", "󾔺", ["paperclip"], 29, 5, 15, 0
        ],
        "1f4cf": [
            ["📏"], "", "󾕐", ["straight_ruler"], 29, 6, 15, 0
        ],
        "1f4d0": [
            ["📐"], "", "󾕑", ["triangular_ruler"], 29, 7, 15, 0
        ],
        "1f4d1": [
            ["📑"], "", "󾕒", ["bookmark_tabs"], 29, 8, 15, 0
        ],
        "1f4d2": [
            ["📒"], "", "󾕏", ["ledger"], 29, 9, 15, 0
        ],
        "1f4d3": [
            ["📓"], "", "󾕅", ["notebook"], 29, 10, 15, 0
        ],
        "1f4d4": [
            ["📔"], "", "󾕇", ["notebook_with_decorative_cover"], 29, 11, 15, 0
        ],
        "1f4d5": [
            ["📕"], "", "󾔂", ["closed_book"], 29, 12, 15, 0
        ],
        "1f4d6": [
            ["📖"], "", "󾕆", ["book", "open_book"], 29, 13, 15, 0
        ],
        "1f4d7": [
            ["📗"], "", "󾓿", ["green_book"], 29, 14, 15, 0
        ],
        "1f4d8": [
            ["📘"], "", "󾔀", ["blue_book"], 29, 15, 15, 0
        ],
        "1f4d9": [
            ["📙"], "", "󾔁", ["orange_book"], 29, 16, 15, 0
        ],
        "1f4da": [
            ["📚"], "", "󾔃", ["books"], 29, 17, 15, 0
        ],
        "1f4db": [
            ["📛"], "", "󾔄", ["name_badge"], 29, 18, 15, 0
        ],
        "1f4dc": [
            ["📜"], "", "󾓽", ["scroll"], 29, 19, 15, 0
        ],
        "1f4dd": [
            ["📝"], "", "󾔧", ["memo", "pencil"], 29, 20, 15, 0
        ],
        "1f4de": [
            ["📞"], "", "󾔤", ["telephone_receiver"], 29, 21, 15, 0
        ],
        "1f4df": [
            ["📟"], "", "󾔢", ["pager"], 29, 22, 15, 0
        ],
        "1f4e0": [
            ["📠"], "", "󾔨", ["fax"], 29, 23, 15, 0
        ],
        "1f4e1": [
            ["📡"], "", "󾔱", ["satellite_antenna"], 29, 24, 15, 0
        ],
        "1f4e2": [
            ["📢"], "", "󾔯", ["loudspeaker"], 29, 25, 15, 0
        ],
        "1f4e3": [
            ["📣"], "", "󾔰", ["mega"], 29, 26, 15, 0
        ],
        "1f4e4": [
            ["📤"], "", "󾔳", ["outbox_tray"], 29, 27, 15, 0
        ],
        "1f4e5": [
            ["📥"], "", "󾔴", ["inbox_tray"], 29, 28, 15, 0
        ],
        "1f4e6": [
            ["📦"], "", "󾔵", ["package"], 29, 29, 15, 0
        ],
        "1f4e7": [
            ["📧"], "", "󾮒", ["e-mail"], 29, 30, 15, 0
        ],
        "1f4e8": [
            ["📨"], "", "󾔪", ["incoming_envelope"], 29, 31, 15, 0
        ],
        "1f4e9": [
            ["📩"], "", "󾔫", ["envelope_with_arrow"], 29, 32, 15, 0
        ],
        "1f4ea": [
            ["📪"], "", "󾔬", ["mailbox_closed"], 29, 33, 15, 0
        ],
        "1f4eb": [
            ["📫"], "", "󾔭", ["mailbox"], 29, 34, 15, 0
        ],
        "1f4ec": [
            ["📬"], "", "", ["mailbox_with_mail"], 29, 35, 15, 0
        ],
        "1f4ed": [
            ["📭"], "", "", ["mailbox_with_no_mail"], 29, 36, 15, 0
        ],
        "1f4ee": [
            ["📮"], "", "󾔮", ["postbox"], 29, 37, 15, 0
        ],
        "1f4ef": [
            ["📯"], "", "", ["postal_horn"], 29, 38, 15, 0
        ],
        "1f4f0": [
            ["📰"], "", "󾠢", ["newspaper"], 29, 39, 15, 0
        ],
        "1f4f1": [
            ["📱"], "", "󾔥", ["iphone"], 29, 40, 15, 0
        ],
        "1f4f2": [
            ["📲"], "", "󾔦", ["calling"], 29, 41, 15, 0
        ],
        "1f4f3": [
            ["📳"], "", "󾠹", ["vibration_mode"], 29, 42, 15, 0
        ],
        "1f4f4": [
            ["📴"], "", "󾠺", ["mobile_phone_off"], 29, 43, 15, 0
        ],
        "1f4f5": [
            ["📵"], "", "", ["no_mobile_phones"], 29, 44, 15, 0
        ],
        "1f4f6": [
            ["📶"], "", "󾠸", ["signal_strength"], 29, 45, 15, 0
        ],
        "1f4f7": [
            ["📷"], "", "󾓯", ["camera"], 29, 46, 15, 0
        ],
        "1f4f8": [
            ["📸"], "", "", ["camera_with_flash"], 29, 47, 15, 0
        ],
        "1f4f9": [
            ["📹"], "", "󾓹", ["video_camera"], 29, 48, 15, 0
        ],
        "1f4fa": [
            ["📺"], "", "󾠜", ["tv"], 29, 49, 15, 0
        ],
        "1f4fb": [
            ["📻"], "", "󾠟", ["radio"], 29, 50, 15, 0
        ],
        "1f4fc": [
            ["📼"], "", "󾠠", ["vhs"], 29, 51, 15, 0
        ],
        "1f4fd-fe0f": [
            ["📽️", "📽"], "", "", ["film_projector"], 29, 52, 15, 0
        ],
        "1f4ff": [
            ["📿"], "", "", ["prayer_beads"], 29, 53, 15, 0
        ],
        "1f500": [
            ["🔀"], "", "", ["twisted_rightwards_arrows"], 29, 54, 15, 0
        ],
        "1f501": [
            ["🔁"], "", "", ["repeat"], 29, 55, 15, 0
        ],
        "1f502": [
            ["🔂"], "", "", ["repeat_one"], 29, 56, 15, 0
        ],
        "1f503": [
            ["🔃"], "", "󾮑", ["arrows_clockwise"], 29, 57, 15, 0
        ],
        "1f504": [
            ["🔄"], "", "", ["arrows_counterclockwise"], 29, 58, 15, 0
        ],
        "1f505": [
            ["🔅"], "", "", ["low_brightness"], 29, 59, 15, 0
        ],
        "1f506": [
            ["🔆"], "", "", ["high_brightness"], 30, 0, 15, 0
        ],
        "1f507": [
            ["🔇"], "", "", ["mute"], 30, 1, 15, 0
        ],
        "1f508": [
            ["🔈"], "", "", ["speaker"], 30, 2, 15, 0
        ],
        "1f509": [
            ["🔉"], "", "", ["sound"], 30, 3, 15, 0
        ],
        "1f50a": [
            ["🔊"], "", "󾠡", ["loud_sound"], 30, 4, 15, 0
        ],
        "1f50b": [
            ["🔋"], "", "󾓼", ["battery"], 30, 5, 15, 0
        ],
        "1f50c": [
            ["🔌"], "", "󾓾", ["electric_plug"], 30, 6, 15, 0
        ],
        "1f50d": [
            ["🔍"], "", "󾮅", ["mag"], 30, 7, 15, 0
        ],
        "1f50e": [
            ["🔎"], "", "󾮍", ["mag_right"], 30, 8, 15, 0
        ],
        "1f50f": [
            ["🔏"], "", "󾮐", ["lock_with_ink_pen"], 30, 9, 15, 0
        ],
        "1f510": [
            ["🔐"], "", "󾮊", ["closed_lock_with_key"], 30, 10, 15, 0
        ],
        "1f511": [
            ["🔑"], "", "󾮂", ["key"], 30, 11, 15, 0
        ],
        "1f512": [
            ["🔒"], "", "󾮆", ["lock"], 30, 12, 15, 0
        ],
        "1f513": [
            ["🔓"], "", "󾮇", ["unlock"], 30, 13, 15, 0
        ],
        "1f514": [
            ["🔔"], "", "󾓲", ["bell"], 30, 14, 15, 0
        ],
        "1f515": [
            ["🔕"], "", "", ["no_bell"], 30, 15, 15, 0
        ],
        "1f516": [
            ["🔖"], "", "󾮏", ["bookmark"], 30, 16, 15, 0
        ],
        "1f517": [
            ["🔗"], "", "󾭋", ["link"], 30, 17, 15, 0
        ],
        "1f518": [
            ["🔘"], "", "󾮌", ["radio_button"], 30, 18, 15, 0
        ],
        "1f519": [
            ["🔙"], "", "󾮎", ["back"], 30, 19, 15, 0
        ],
        "1f51a": [
            ["🔚"], "", "󾀚", ["end"], 30, 20, 15, 0
        ],
        "1f51b": [
            ["🔛"], "", "󾀙", ["on"], 30, 21, 15, 0
        ],
        "1f51c": [
            ["🔜"], "", "󾀘", ["soon"], 30, 22, 15, 0
        ],
        "1f51d": [
            ["🔝"], "", "󾭂", ["top"], 30, 23, 15, 0
        ],
        "1f51e": [
            ["🔞"], "", "󾬥", ["underage"], 30, 24, 15, 0
        ],
        "1f51f": [
            ["🔟"], "", "󾠻", ["keycap_ten"], 30, 25, 15, 0
        ],
        "1f520": [
            ["🔠"], "", "󾭼", ["capital_abcd"], 30, 26, 15, 0
        ],
        "1f521": [
            ["🔡"], "", "󾭽", ["abcd"], 30, 27, 15, 0
        ],
        "1f522": [
            ["🔢"], "", "󾭾", ["1234"], 30, 28, 15, 0
        ],
        "1f523": [
            ["🔣"], "", "󾭿", ["symbols"], 30, 29, 15, 0
        ],
        "1f524": [
            ["🔤"], "", "󾮀", ["abc"], 30, 30, 15, 0
        ],
        "1f525": [
            ["🔥"], "", "󾓶", ["fire"], 30, 31, 15, 0
        ],
        "1f526": [
            ["🔦"], "", "󾓻", ["flashlight"], 30, 32, 15, 0
        ],
        "1f527": [
            ["🔧"], "", "󾓉", ["wrench"], 30, 33, 15, 0
        ],
        "1f528": [
            ["🔨"], "", "󾓊", ["hammer"], 30, 34, 15, 0
        ],
        "1f529": [
            ["🔩"], "", "󾓋", ["nut_and_bolt"], 30, 35, 15, 0
        ],
        "1f52a": [
            ["🔪"], "", "󾓺", ["hocho", "knife"], 30, 36, 15, 0
        ],
        "1f52b": [
            ["🔫"], "", "󾓵", ["gun"], 30, 37, 15, 0
        ],
        "1f52c": [
            ["🔬"], "", "", ["microscope"], 30, 38, 15, 0
        ],
        "1f52d": [
            ["🔭"], "", "", ["telescope"], 30, 39, 15, 0
        ],
        "1f52e": [
            ["🔮"], "", "󾓷", ["crystal_ball"], 30, 40, 15, 0
        ],
        "1f52f": [
            ["🔯"], "", "󾓸", ["six_pointed_star"], 30, 41, 15, 0
        ],
        "1f530": [
            ["🔰"], "", "󾁄", ["beginner"], 30, 42, 15, 0
        ],
        "1f531": [
            ["🔱"], "", "󾓒", ["trident"], 30, 43, 15, 0
        ],
        "1f532": [
            ["🔲"], "", "󾭤", ["black_square_button"], 30, 44, 15, 0
        ],
        "1f533": [
            ["🔳"], "", "󾭧", ["white_square_button"], 30, 45, 15, 0
        ],
        "1f534": [
            ["🔴"], "", "󾭣", ["red_circle"], 30, 46, 15, 0
        ],
        "1f535": [
            ["🔵"], "", "󾭤", ["large_blue_circle"], 30, 47, 15, 0
        ],
        "1f536": [
            ["🔶"], "", "󾭳", ["large_orange_diamond"], 30, 48, 15, 0
        ],
        "1f537": [
            ["🔷"], "", "󾭴", ["large_blue_diamond"], 30, 49, 15, 0
        ],
        "1f538": [
            ["🔸"], "", "󾭵", ["small_orange_diamond"], 30, 50, 15, 0
        ],
        "1f539": [
            ["🔹"], "", "󾭶", ["small_blue_diamond"], 30, 51, 15, 0
        ],
        "1f53a": [
            ["🔺"], "", "󾭸", ["small_red_triangle"], 30, 52, 15, 0
        ],
        "1f53b": [
            ["🔻"], "", "󾭹", ["small_red_triangle_down"], 30, 53, 15, 0
        ],
        "1f53c": [
            ["🔼"], "", "󾬁", ["arrow_up_small"], 30, 54, 15, 0
        ],
        "1f53d": [
            ["🔽"], "", "󾬀", ["arrow_down_small"], 30, 55, 15, 0
        ],
        "1f549-fe0f": [
            ["🕉️", "🕉"], "", "", ["om_symbol"], 30, 56, 15, 0
        ],
        "1f54a-fe0f": [
            ["🕊️", "🕊"], "", "", ["dove_of_peace"], 30, 57, 15, 0
        ],
        "1f54b": [
            ["🕋"], "", "", ["kaaba"], 30, 58, 15, 0
        ],
        "1f54c": [
            ["🕌"], "", "", ["mosque"], 30, 59, 15, 0
        ],
        "1f54d": [
            ["🕍"], "", "", ["synagogue"], 31, 0, 15, 0
        ],
        "1f54e": [
            ["🕎"], "", "", ["menorah_with_nine_branches"], 31, 1, 15, 0
        ],
        "1f550": [
            ["🕐"], "", "󾀞", ["clock1"], 31, 2, 15, 0
        ],
        "1f551": [
            ["🕑"], "", "󾀟", ["clock2"], 31, 3, 15, 0
        ],
        "1f552": [
            ["🕒"], "", "󾀠", ["clock3"], 31, 4, 15, 0
        ],
        "1f553": [
            ["🕓"], "", "󾀡", ["clock4"], 31, 5, 15, 0
        ],
        "1f554": [
            ["🕔"], "", "󾀢", ["clock5"], 31, 6, 15, 0
        ],
        "1f555": [
            ["🕕"], "", "󾀣", ["clock6"], 31, 7, 15, 0
        ],
        "1f556": [
            ["🕖"], "", "󾀤", ["clock7"], 31, 8, 15, 0
        ],
        "1f557": [
            ["🕗"], "", "󾀥", ["clock8"], 31, 9, 15, 0
        ],
        "1f558": [
            ["🕘"], "", "󾀦", ["clock9"], 31, 10, 15, 0
        ],
        "1f559": [
            ["🕙"], "", "󾀧", ["clock10"], 31, 11, 15, 0
        ],
        "1f55a": [
            ["🕚"], "", "󾀨", ["clock11"], 31, 12, 15, 0
        ],
        "1f55b": [
            ["🕛"], "", "󾀩", ["clock12"], 31, 13, 15, 0
        ],
        "1f55c": [
            ["🕜"], "", "", ["clock130"], 31, 14, 15, 0
        ],
        "1f55d": [
            ["🕝"], "", "", ["clock230"], 31, 15, 15, 0
        ],
        "1f55e": [
            ["🕞"], "", "", ["clock330"], 31, 16, 15, 0
        ],
        "1f55f": [
            ["🕟"], "", "", ["clock430"], 31, 17, 15, 0
        ],
        "1f560": [
            ["🕠"], "", "", ["clock530"], 31, 18, 15, 0
        ],
        "1f561": [
            ["🕡"], "", "", ["clock630"], 31, 19, 15, 0
        ],
        "1f562": [
            ["🕢"], "", "", ["clock730"], 31, 20, 15, 0
        ],
        "1f563": [
            ["🕣"], "", "", ["clock830"], 31, 21, 15, 0
        ],
        "1f564": [
            ["🕤"], "", "", ["clock930"], 31, 22, 15, 0
        ],
        "1f565": [
            ["🕥"], "", "", ["clock1030"], 31, 23, 15, 0
        ],
        "1f566": [
            ["🕦"], "", "", ["clock1130"], 31, 24, 15, 0
        ],
        "1f567": [
            ["🕧"], "", "", ["clock1230"], 31, 25, 15, 0
        ],
        "1f56f-fe0f": [
            ["🕯️", "🕯"], "", "", ["candle"], 31, 26, 15, 0
        ],
        "1f570-fe0f": [
            ["🕰️", "🕰"], "", "", ["mantelpiece_clock"], 31, 27, 15, 0
        ],
        "1f573-fe0f": [
            ["🕳️", "🕳"], "", "", ["hole"], 31, 28, 15, 0
        ],
        "1f574-fe0f": [
            ["🕴️", "🕴"], "", "", ["man_in_business_suit_levitating"], 31, 29, 15, 0
        ],
        "1f575-fe0f-200d-2640-fe0f": [
            ["🕵️‍♀️"], "", "", ["female-detective"], 31, 35, 7, 0
        ],
        "1f575-fe0f-200d-2642-fe0f": [
            ["🕵️‍♂️", "🕵️", "🕵"], "", "", ["male-detective", "sleuth_or_spy"], 31, 41, 7, 0
        ],
        "1f576-fe0f": [
            ["🕶️", "🕶"], "", "", ["dark_sunglasses"], 31, 53, 15, 0
        ],
        "1f577-fe0f": [
            ["🕷️", "🕷"], "", "", ["spider"], 31, 54, 15, 0
        ],
        "1f578-fe0f": [
            ["🕸️", "🕸"], "", "", ["spider_web"], 31, 55, 15, 0
        ],
        "1f579-fe0f": [
            ["🕹️", "🕹"], "", "", ["joystick"], 31, 56, 15, 0
        ],
        "1f57a": [
            ["🕺"], "", "", ["man_dancing"], 31, 57, 15, 0
        ],
        "1f587-fe0f": [
            ["🖇️", "🖇"], "", "", ["linked_paperclips"], 32, 3, 15, 0
        ],
        "1f58a-fe0f": [
            ["🖊️", "🖊"], "", "", ["lower_left_ballpoint_pen"], 32, 4, 15, 0
        ],
        "1f58b-fe0f": [
            ["🖋️", "🖋"], "", "", ["lower_left_fountain_pen"], 32, 5, 15, 0
        ],
        "1f58c-fe0f": [
            ["🖌️", "🖌"], "", "", ["lower_left_paintbrush"], 32, 6, 15, 0
        ],
        "1f58d-fe0f": [
            ["🖍️", "🖍"], "", "", ["lower_left_crayon"], 32, 7, 15, 0
        ],
        "1f590-fe0f": [
            ["🖐️", "🖐"], "", "", ["raised_hand_with_fingers_splayed"], 32, 8, 15, 0
        ],
        "1f595": [
            ["🖕"], "", "", ["middle_finger", "reversed_hand_with_middle_finger_extended"], 32, 14, 15, 0
        ],
        "1f596": [
            ["🖖"], "", "", ["spock-hand"], 32, 20, 15, 0
        ],
        "1f5a4": [
            ["🖤"], "", "", ["black_heart"], 32, 26, 15, 0
        ],
        "1f5a5-fe0f": [
            ["🖥️", "🖥"], "", "", ["desktop_computer"], 32, 27, 15, 0
        ],
        "1f5a8-fe0f": [
            ["🖨️", "🖨"], "", "", ["printer"], 32, 28, 15, 0
        ],
        "1f5b1-fe0f": [
            ["🖱️", "🖱"], "", "", ["three_button_mouse"], 32, 29, 15, 0
        ],
        "1f5b2-fe0f": [
            ["🖲️", "🖲"], "", "", ["trackball"], 32, 30, 15, 0
        ],
        "1f5bc-fe0f": [
            ["🖼️", "🖼"], "", "", ["frame_with_picture"], 32, 31, 15, 0
        ],
        "1f5c2-fe0f": [
            ["🗂️", "🗂"], "", "", ["card_index_dividers"], 32, 32, 15, 0
        ],
        "1f5c3-fe0f": [
            ["🗃️", "🗃"], "", "", ["card_file_box"], 32, 33, 15, 0
        ],
        "1f5c4-fe0f": [
            ["🗄️", "🗄"], "", "", ["file_cabinet"], 32, 34, 15, 0
        ],
        "1f5d1-fe0f": [
            ["🗑️", "🗑"], "", "", ["wastebasket"], 32, 35, 15, 0
        ],
        "1f5d2-fe0f": [
            ["🗒️", "🗒"], "", "", ["spiral_note_pad"], 32, 36, 15, 0
        ],
        "1f5d3-fe0f": [
            ["🗓️", "🗓"], "", "", ["spiral_calendar_pad"], 32, 37, 15, 0
        ],
        "1f5dc-fe0f": [
            ["🗜️", "🗜"], "", "", ["compression"], 32, 38, 15, 0
        ],
        "1f5dd-fe0f": [
            ["🗝️", "🗝"], "", "", ["old_key"], 32, 39, 15, 0
        ],
        "1f5de-fe0f": [
            ["🗞️", "🗞"], "", "", ["rolled_up_newspaper"], 32, 40, 15, 0
        ],
        "1f5e1-fe0f": [
            ["🗡️", "🗡"], "", "", ["dagger_knife"], 32, 41, 15, 0
        ],
        "1f5e3-fe0f": [
            ["🗣️", "🗣"], "", "", ["speaking_head_in_silhouette"], 32, 42, 15, 0
        ],
        "1f5e8-fe0f": [
            ["🗨️", "🗨"], "", "", ["left_speech_bubble"], 32, 43, 15, 0
        ],
        "1f5ef-fe0f": [
            ["🗯️", "🗯"], "", "", ["right_anger_bubble"], 32, 44, 15, 0
        ],
        "1f5f3-fe0f": [
            ["🗳️", "🗳"], "", "", ["ballot_box_with_ballot"], 32, 45, 15, 0
        ],
        "1f5fa-fe0f": [
            ["🗺️", "🗺"], "", "", ["world_map"], 32, 46, 15, 0
        ],
        "1f5fb": [
            ["🗻"], "", "󾓃", ["mount_fuji"], 32, 47, 15, 0
        ],
        "1f5fc": [
            ["🗼"], "", "󾓄", ["tokyo_tower"], 32, 48, 15, 0
        ],
        "1f5fd": [
            ["🗽"], "", "󾓆", ["statue_of_liberty"], 32, 49, 15, 0
        ],
        "1f5fe": [
            ["🗾"], "", "󾓇", ["japan"], 32, 50, 15, 0
        ],
        "1f5ff": [
            ["🗿"], "", "󾓈", ["moyai"], 32, 51, 15, 0
        ],
        "1f600": [
            ["😀"], "", "", ["grinning"], 32, 52, 15, 0, ":D"
        ],
        "1f601": [
            ["😁"], "", "󾌳", ["grin"], 32, 53, 15, 0
        ],
        "1f602": [
            ["😂"], "", "󾌴", ["joy"], 32, 54, 15, 0
        ],
        "1f603": [
            ["😃"], "", "󾌰", ["smiley"], 32, 55, 15, 0, ":)"
        ],
        "1f604": [
            ["😄"], "", "󾌸", ["smile"], 32, 56, 15, 0, ":)"
        ],
        "1f605": [
            ["😅"], "", "󾌱", ["sweat_smile"], 32, 57, 15, 0
        ],
        "1f606": [
            ["😆"], "", "󾌲", ["laughing", "satisfied"], 32, 58, 15, 0
        ],
        "1f607": [
            ["😇"], "", "", ["innocent"], 32, 59, 15, 0
        ],
        "1f608": [
            ["😈"], "", "", ["smiling_imp"], 33, 0, 15, 0
        ],
        "1f609": [
            ["😉"], "", "󾍇", ["wink"], 33, 1, 15, 0, ";)"
        ],
        "1f60a": [
            ["😊"], "", "󾌵", ["blush"], 33, 2, 15, 0, ":)"
        ],
        "1f60b": [
            ["😋"], "", "󾌫", ["yum"], 33, 3, 15, 0
        ],
        "1f60c": [
            ["😌"], "", "󾌾", ["relieved"], 33, 4, 15, 0
        ],
        "1f60d": [
            ["😍"], "", "󾌧", ["heart_eyes"], 33, 5, 15, 0
        ],
        "1f60e": [
            ["😎"], "", "", ["sunglasses"], 33, 6, 15, 0
        ],
        "1f60f": [
            ["😏"], "", "󾍃", ["smirk"], 33, 7, 15, 0
        ],
        "1f610": [
            ["😐"], "", "", ["neutral_face"], 33, 8, 15, 0
        ],
        "1f611": [
            ["😑"], "", "", ["expressionless"], 33, 9, 15, 0
        ],
        "1f612": [
            ["😒"], "", "󾌦", ["unamused"], 33, 10, 15, 0, ":("
        ],
        "1f613": [
            ["😓"], "", "󾍄", ["sweat"], 33, 11, 15, 0
        ],
        "1f614": [
            ["😔"], "", "󾍀", ["pensive"], 33, 12, 15, 0
        ],
        "1f615": [
            ["😕"], "", "", ["confused"], 33, 13, 15, 0
        ],
        "1f616": [
            ["😖"], "", "󾌿", ["confounded"], 33, 14, 15, 0
        ],
        "1f617": [
            ["😗"], "", "", ["kissing"], 33, 15, 15, 0
        ],
        "1f618": [
            ["😘"], "", "󾌬", ["kissing_heart"], 33, 16, 15, 0
        ],
        "1f619": [
            ["😙"], "", "", ["kissing_smiling_eyes"], 33, 17, 15, 0
        ],
        "1f61a": [
            ["😚"], "", "󾌭", ["kissing_closed_eyes"], 33, 18, 15, 0
        ],
        "1f61b": [
            ["😛"], "", "", ["stuck_out_tongue"], 33, 19, 15, 0, ":p"
        ],
        "1f61c": [
            ["😜"], "", "󾌩", ["stuck_out_tongue_winking_eye"], 33, 20, 15, 0, ";p"
        ],
        "1f61d": [
            ["😝"], "", "󾌪", ["stuck_out_tongue_closed_eyes"], 33, 21, 15, 0
        ],
        "1f61e": [
            ["😞"], "", "󾌣", ["disappointed"], 33, 22, 15, 0, ":("
        ],
        "1f61f": [
            ["😟"], "", "", ["worried"], 33, 23, 15, 0
        ],
        "1f620": [
            ["😠"], "", "󾌠", ["angry"], 33, 24, 15, 0
        ],
        "1f621": [
            ["😡"], "", "󾌽", ["rage"], 33, 25, 15, 0
        ],
        "1f622": [
            ["😢"], "", "󾌹", ["cry"], 33, 26, 15, 0, ":'("
        ],
        "1f623": [
            ["😣"], "", "󾌼", ["persevere"], 33, 27, 15, 0
        ],
        "1f624": [
            ["😤"], "", "󾌨", ["triumph"], 33, 28, 15, 0
        ],
        "1f625": [
            ["😥"], "", "󾍅", ["disappointed_relieved"], 33, 29, 15, 0
        ],
        "1f626": [
            ["😦"], "", "", ["frowning"], 33, 30, 15, 0
        ],
        "1f627": [
            ["😧"], "", "", ["anguished"], 33, 31, 15, 0
        ],
        "1f628": [
            ["😨"], "", "󾌻", ["fearful"], 33, 32, 15, 0
        ],
        "1f629": [
            ["😩"], "", "󾌡", ["weary"], 33, 33, 15, 0
        ],
        "1f62a": [
            ["😪"], "", "󾍂", ["sleepy"], 33, 34, 15, 0
        ],
        "1f62b": [
            ["😫"], "", "󾍆", ["tired_face"], 33, 35, 15, 0
        ],
        "1f62c": [
            ["😬"], "", "", ["grimacing"], 33, 36, 15, 0
        ],
        "1f62d": [
            ["😭"], "", "󾌺", ["sob"], 33, 37, 15, 0, ":'("
        ],
        "1f62e-200d-1f4a8": [
            ["😮‍💨"], "", "", ["face_exhaling"], 33, 38, 7, 0
        ],
        "1f62e": [
            ["😮"], "", "", ["open_mouth"], 33, 39, 15, 0
        ],
        "1f62f": [
            ["😯"], "", "", ["hushed"], 33, 40, 15, 0
        ],
        "1f630": [
            ["😰"], "", "󾌥", ["cold_sweat"], 33, 41, 15, 0
        ],
        "1f631": [
            ["😱"], "", "󾍁", ["scream"], 33, 42, 15, 0
        ],
        "1f632": [
            ["😲"], "", "󾌢", ["astonished"], 33, 43, 15, 0
        ],
        "1f633": [
            ["😳"], "", "󾌯", ["flushed"], 33, 44, 15, 0
        ],
        "1f634": [
            ["😴"], "", "", ["sleeping"], 33, 45, 15, 0
        ],
        "1f635-200d-1f4ab": [
            ["😵‍💫"], "", "", ["face_with_spiral_eyes"], 33, 46, 7, 0
        ],
        "1f635": [
            ["😵"], "", "󾌤", ["dizzy_face"], 33, 47, 15, 0
        ],
        "1f636-200d-1f32b-fe0f": [
            ["😶‍🌫️", "😶‍🌫"], "", "", ["face_in_clouds"], 33, 48, 7, 0
        ],
        "1f636": [
            ["😶"], "", "", ["no_mouth"], 33, 49, 15, 0
        ],
        "1f637": [
            ["😷"], "", "󾌮", ["mask"], 33, 50, 15, 0
        ],
        "1f638": [
            ["😸"], "", "󾍉", ["smile_cat"], 33, 51, 15, 0
        ],
        "1f639": [
            ["😹"], "", "󾍊", ["joy_cat"], 33, 52, 15, 0
        ],
        "1f63a": [
            ["😺"], "", "󾍈", ["smiley_cat"], 33, 53, 15, 0
        ],
        "1f63b": [
            ["😻"], "", "󾍌", ["heart_eyes_cat"], 33, 54, 15, 0
        ],
        "1f63c": [
            ["😼"], "", "󾍏", ["smirk_cat"], 33, 55, 15, 0
        ],
        "1f63d": [
            ["😽"], "", "󾍋", ["kissing_cat"], 33, 56, 15, 0
        ],
        "1f63e": [
            ["😾"], "", "󾍎", ["pouting_cat"], 33, 57, 15, 0
        ],
        "1f63f": [
            ["😿"], "", "󾍍", ["crying_cat_face"], 33, 58, 15, 0
        ],
        "1f640": [
            ["🙀"], "", "󾍐", ["scream_cat"], 33, 59, 15, 0
        ],
        "1f641": [
            ["🙁"], "", "", ["slightly_frowning_face"], 34, 0, 15, 0
        ],
        "1f642": [
            ["🙂"], "", "", ["slightly_smiling_face"], 34, 1, 15, 0
        ],
        "1f643": [
            ["🙃"], "", "", ["upside_down_face"], 34, 2, 15, 0
        ],
        "1f644": [
            ["🙄"], "", "", ["face_with_rolling_eyes"], 34, 3, 15, 0
        ],
        "1f645-200d-2640-fe0f": [
            ["🙅‍♀️", "🙅‍♀", "🙅"], "", "", ["woman-gesturing-no", "no_good"], 34, 4, 15, 0
        ],
        "1f645-200d-2642-fe0f": [
            ["🙅‍♂️", "🙅‍♂"], "", "", ["man-gesturing-no"], 34, 10, 15, 0
        ],
        "1f646-200d-2640-fe0f": [
            ["🙆‍♀️", "🙆‍♀", "🙆"], "", "", ["woman-gesturing-ok", "ok_woman"], 34, 22, 15, 0
        ],
        "1f646-200d-2642-fe0f": [
            ["🙆‍♂️", "🙆‍♂"], "", "", ["man-gesturing-ok"], 34, 28, 15, 0
        ],
        "1f647-200d-2640-fe0f": [
            ["🙇‍♀️", "🙇‍♀"], "", "", ["woman-bowing"], 34, 40, 15, 0
        ],
        "1f647-200d-2642-fe0f": [
            ["🙇‍♂️", "🙇‍♂", "🙇"], "", "", ["man-bowing", "bow"], 34, 46, 15, 0
        ],
        "1f648": [
            ["🙈"], "", "󾍔", ["see_no_evil"], 34, 58, 15, 0
        ],
        "1f649": [
            ["🙉"], "", "󾍖", ["hear_no_evil"], 34, 59, 15, 0
        ],
        "1f64a": [
            ["🙊"], "", "󾍕", ["speak_no_evil"], 35, 0, 15, 0
        ],
        "1f64b-200d-2640-fe0f": [
            ["🙋‍♀️", "🙋‍♀", "🙋"], "", "", ["woman-raising-hand", "raising_hand"], 35, 1, 15, 0
        ],
        "1f64b-200d-2642-fe0f": [
            ["🙋‍♂️", "🙋‍♂"], "", "", ["man-raising-hand"], 35, 7, 15, 0
        ],
        "1f64c": [
            ["🙌"], "", "󾍘", ["raised_hands"], 35, 19, 15, 0
        ],
        "1f64d-200d-2640-fe0f": [
            ["🙍‍♀️", "🙍‍♀", "🙍"], "", "", ["woman-frowning", "person_frowning"], 35, 25, 15, 0
        ],
        "1f64d-200d-2642-fe0f": [
            ["🙍‍♂️", "🙍‍♂"], "", "", ["man-frowning"], 35, 31, 15, 0
        ],
        "1f64e-200d-2640-fe0f": [
            ["🙎‍♀️", "🙎‍♀", "🙎"], "", "", ["woman-pouting", "person_with_pouting_face"], 35, 43, 15, 0
        ],
        "1f64e-200d-2642-fe0f": [
            ["🙎‍♂️", "🙎‍♂"], "", "", ["man-pouting"], 35, 49, 15, 0
        ],
        "1f64f": [
            ["🙏"], "", "󾍛", ["pray"], 36, 1, 15, 0
        ],
        "1f680": [
            ["🚀"], "", "󾟭", ["rocket"], 36, 7, 15, 0
        ],
        "1f681": [
            ["🚁"], "", "", ["helicopter"], 36, 8, 15, 0
        ],
        "1f682": [
            ["🚂"], "", "", ["steam_locomotive"], 36, 9, 15, 0
        ],
        "1f683": [
            ["🚃"], "", "󾟟", ["railway_car"], 36, 10, 15, 0
        ],
        "1f684": [
            ["🚄"], "", "󾟢", ["bullettrain_side"], 36, 11, 15, 0
        ],
        "1f685": [
            ["🚅"], "", "󾟣", ["bullettrain_front"], 36, 12, 15, 0
        ],
        "1f686": [
            ["🚆"], "", "", ["train2"], 36, 13, 15, 0
        ],
        "1f687": [
            ["🚇"], "", "󾟠", ["metro"], 36, 14, 15, 0
        ],
        "1f688": [
            ["🚈"], "", "", ["light_rail"], 36, 15, 15, 0
        ],
        "1f689": [
            ["🚉"], "", "󾟬", ["station"], 36, 16, 15, 0
        ],
        "1f68a": [
            ["🚊"], "", "", ["tram"], 36, 17, 15, 0
        ],
        "1f68b": [
            ["🚋"], "", "", ["train"], 36, 18, 15, 0
        ],
        "1f68c": [
            ["🚌"], "", "󾟦", ["bus"], 36, 19, 15, 0
        ],
        "1f68d": [
            ["🚍"], "", "", ["oncoming_bus"], 36, 20, 15, 0
        ],
        "1f68e": [
            ["🚎"], "", "", ["trolleybus"], 36, 21, 15, 0
        ],
        "1f68f": [
            ["🚏"], "", "󾟧", ["busstop"], 36, 22, 15, 0
        ],
        "1f690": [
            ["🚐"], "", "", ["minibus"], 36, 23, 15, 0
        ],
        "1f691": [
            ["🚑"], "", "󾟳", ["ambulance"], 36, 24, 15, 0
        ],
        "1f692": [
            ["🚒"], "", "󾟲", ["fire_engine"], 36, 25, 15, 0
        ],
        "1f693": [
            ["🚓"], "", "󾟴", ["police_car"], 36, 26, 15, 0
        ],
        "1f694": [
            ["🚔"], "", "", ["oncoming_police_car"], 36, 27, 15, 0
        ],
        "1f695": [
            ["🚕"], "", "󾟯", ["taxi"], 36, 28, 15, 0
        ],
        "1f696": [
            ["🚖"], "", "", ["oncoming_taxi"], 36, 29, 15, 0
        ],
        "1f697": [
            ["🚗"], "", "󾟤", ["car", "red_car"], 36, 30, 15, 0
        ],
        "1f698": [
            ["🚘"], "", "", ["oncoming_automobile"], 36, 31, 15, 0
        ],
        "1f699": [
            ["🚙"], "", "󾟥", ["blue_car"], 36, 32, 15, 0
        ],
        "1f69a": [
            ["🚚"], "", "󾟱", ["truck"], 36, 33, 15, 0
        ],
        "1f69b": [
            ["🚛"], "", "", ["articulated_lorry"], 36, 34, 15, 0
        ],
        "1f69c": [
            ["🚜"], "", "", ["tractor"], 36, 35, 15, 0
        ],
        "1f69d": [
            ["🚝"], "", "", ["monorail"], 36, 36, 15, 0
        ],
        "1f69e": [
            ["🚞"], "", "", ["mountain_railway"], 36, 37, 15, 0
        ],
        "1f69f": [
            ["🚟"], "", "", ["suspension_railway"], 36, 38, 15, 0
        ],
        "1f6a0": [
            ["🚠"], "", "", ["mountain_cableway"], 36, 39, 15, 0
        ],
        "1f6a1": [
            ["🚡"], "", "", ["aerial_tramway"], 36, 40, 15, 0
        ],
        "1f6a2": [
            ["🚢"], "", "󾟨", ["ship"], 36, 41, 15, 0
        ],
        "1f6a3-200d-2640-fe0f": [
            ["🚣‍♀️", "🚣‍♀"], "", "", ["woman-rowing-boat"], 36, 42, 15, 0
        ],
        "1f6a3-200d-2642-fe0f": [
            ["🚣‍♂️", "🚣‍♂", "🚣"], "", "", ["man-rowing-boat", "rowboat"], 36, 48, 15, 0
        ],
        "1f6a4": [
            ["🚤"], "", "󾟮", ["speedboat"], 37, 0, 15, 0
        ],
        "1f6a5": [
            ["🚥"], "", "󾟷", ["traffic_light"], 37, 1, 15, 0
        ],
        "1f6a6": [
            ["🚦"], "", "", ["vertical_traffic_light"], 37, 2, 15, 0
        ],
        "1f6a7": [
            ["🚧"], "", "󾟸", ["construction"], 37, 3, 15, 0
        ],
        "1f6a8": [
            ["🚨"], "", "󾟹", ["rotating_light"], 37, 4, 15, 0
        ],
        "1f6a9": [
            ["🚩"], "", "󾬢", ["triangular_flag_on_post"], 37, 5, 15, 0
        ],
        "1f6aa": [
            ["🚪"], "", "󾓳", ["door"], 37, 6, 15, 0
        ],
        "1f6ab": [
            ["🚫"], "", "󾭈", ["no_entry_sign"], 37, 7, 15, 0
        ],
        "1f6ac": [
            ["🚬"], "", "󾬞", ["smoking"], 37, 8, 15, 0
        ],
        "1f6ad": [
            ["🚭"], "", "󾬟", ["no_smoking"], 37, 9, 15, 0
        ],
        "1f6ae": [
            ["🚮"], "", "", ["put_litter_in_its_place"], 37, 10, 15, 0
        ],
        "1f6af": [
            ["🚯"], "", "", ["do_not_litter"], 37, 11, 15, 0
        ],
        "1f6b0": [
            ["🚰"], "", "", ["potable_water"], 37, 12, 15, 0
        ],
        "1f6b1": [
            ["🚱"], "", "", ["non-potable_water"], 37, 13, 15, 0
        ],
        "1f6b2": [
            ["🚲"], "", "󾟫", ["bike"], 37, 14, 15, 0
        ],
        "1f6b3": [
            ["🚳"], "", "", ["no_bicycles"], 37, 15, 15, 0
        ],
        "1f6b4-200d-2640-fe0f": [
            ["🚴‍♀️", "🚴‍♀"], "", "", ["woman-biking"], 37, 16, 15, 0
        ],
        "1f6b4-200d-2642-fe0f": [
            ["🚴‍♂️", "🚴‍♂", "🚴"], "", "", ["man-biking", "bicyclist"], 37, 22, 15, 0
        ],
        "1f6b5-200d-2640-fe0f": [
            ["🚵‍♀️", "🚵‍♀"], "", "", ["woman-mountain-biking"], 37, 34, 15, 0
        ],
        "1f6b5-200d-2642-fe0f": [
            ["🚵‍♂️", "🚵‍♂", "🚵"], "", "", ["man-mountain-biking", "mountain_bicyclist"], 37, 40, 15, 0
        ],
        "1f6b6-200d-2640-fe0f": [
            ["🚶‍♀️", "🚶‍♀"], "", "", ["woman-walking"], 37, 52, 15, 0
        ],
        "1f6b6-200d-2642-fe0f": [
            ["🚶‍♂️", "🚶‍♂", "🚶"], "", "", ["man-walking", "walking"], 37, 58, 15, 0
        ],
        "1f6b7": [
            ["🚷"], "", "", ["no_pedestrians"], 38, 10, 15, 0
        ],
        "1f6b8": [
            ["🚸"], "", "", ["children_crossing"], 38, 11, 15, 0
        ],
        "1f6b9": [
            ["🚹"], "", "󾬳", ["mens"], 38, 12, 15, 0
        ],
        "1f6ba": [
            ["🚺"], "", "󾬴", ["womens"], 38, 13, 15, 0
        ],
        "1f6bb": [
            ["🚻"], "", "󾔆", ["restroom"], 38, 14, 15, 0
        ],
        "1f6bc": [
            ["🚼"], "", "󾬵", ["baby_symbol"], 38, 15, 15, 0
        ],
        "1f6bd": [
            ["🚽"], "", "󾔇", ["toilet"], 38, 16, 15, 0
        ],
        "1f6be": [
            ["🚾"], "", "󾔈", ["wc"], 38, 17, 15, 0
        ],
        "1f6bf": [
            ["🚿"], "", "", ["shower"], 38, 18, 15, 0
        ],
        "1f6c0": [
            ["🛀"], "", "󾔅", ["bath"], 38, 19, 15, 0
        ],
        "1f6c1": [
            ["🛁"], "", "", ["bathtub"], 38, 25, 15, 0
        ],
        "1f6c2": [
            ["🛂"], "", "", ["passport_control"], 38, 26, 15, 0
        ],
        "1f6c3": [
            ["🛃"], "", "", ["customs"], 38, 27, 15, 0
        ],
        "1f6c4": [
            ["🛄"], "", "", ["baggage_claim"], 38, 28, 15, 0
        ],
        "1f6c5": [
            ["🛅"], "", "", ["left_luggage"], 38, 29, 15, 0
        ],
        "1f6cb-fe0f": [
            ["🛋️", "🛋"], "", "", ["couch_and_lamp"], 38, 30, 15, 0
        ],
        "1f6cc": [
            ["🛌"], "", "", ["sleeping_accommodation"], 38, 31, 15, 0
        ],
        "1f6cd-fe0f": [
            ["🛍️", "🛍"], "", "", ["shopping_bags"], 38, 37, 15, 0
        ],
        "1f6ce-fe0f": [
            ["🛎️", "🛎"], "", "", ["bellhop_bell"], 38, 38, 15, 0
        ],
        "1f6cf-fe0f": [
            ["🛏️", "🛏"], "", "", ["bed"], 38, 39, 15, 0
        ],
        "1f6d0": [
            ["🛐"], "", "", ["place_of_worship"], 38, 40, 15, 0
        ],
        "1f6d1": [
            ["🛑"], "", "", ["octagonal_sign"], 38, 41, 15, 0
        ],
        "1f6d2": [
            ["🛒"], "", "", ["shopping_trolley"], 38, 42, 15, 0
        ],
        "1f6d5": [
            ["🛕"], "", "", ["hindu_temple"], 38, 43, 15, 0
        ],
        "1f6d6": [
            ["🛖"], "", "", ["hut"], 38, 44, 15, 0
        ],
        "1f6d7": [
            ["🛗"], "", "", ["elevator"], 38, 45, 15, 0
        ],
        "1f6e0-fe0f": [
            ["🛠️", "🛠"], "", "", ["hammer_and_wrench"], 38, 46, 15, 0
        ],
        "1f6e1-fe0f": [
            ["🛡️", "🛡"], "", "", ["shield"], 38, 47, 15, 0
        ],
        "1f6e2-fe0f": [
            ["🛢️", "🛢"], "", "", ["oil_drum"], 38, 48, 15, 0
        ],
        "1f6e3-fe0f": [
            ["🛣️", "🛣"], "", "", ["motorway"], 38, 49, 15, 0
        ],
        "1f6e4-fe0f": [
            ["🛤️", "🛤"], "", "", ["railway_track"], 38, 50, 15, 0
        ],
        "1f6e5-fe0f": [
            ["🛥️", "🛥"], "", "", ["motor_boat"], 38, 51, 15, 0
        ],
        "1f6e9-fe0f": [
            ["🛩️", "🛩"], "", "", ["small_airplane"], 38, 52, 15, 0
        ],
        "1f6eb": [
            ["🛫"], "", "", ["airplane_departure"], 38, 53, 15, 0
        ],
        "1f6ec": [
            ["🛬"], "", "", ["airplane_arriving"], 38, 54, 15, 0
        ],
        "1f6f0-fe0f": [
            ["🛰️", "🛰"], "", "", ["satellite"], 38, 55, 15, 0
        ],
        "1f6f3-fe0f": [
            ["🛳️", "🛳"], "", "", ["passenger_ship"], 38, 56, 15, 0
        ],
        "1f6f4": [
            ["🛴"], "", "", ["scooter"], 38, 57, 15, 0
        ],
        "1f6f5": [
            ["🛵"], "", "", ["motor_scooter"], 38, 58, 15, 0
        ],
        "1f6f6": [
            ["🛶"], "", "", ["canoe"], 38, 59, 15, 0
        ],
        "1f6f7": [
            ["🛷"], "", "", ["sled"], 39, 0, 15, 0
        ],
        "1f6f8": [
            ["🛸"], "", "", ["flying_saucer"], 39, 1, 15, 0
        ],
        "1f6f9": [
            ["🛹"], "", "", ["skateboard"], 39, 2, 15, 0
        ],
        "1f6fa": [
            ["🛺"], "", "", ["auto_rickshaw"], 39, 3, 15, 0
        ],
        "1f6fb": [
            ["🛻"], "", "", ["pickup_truck"], 39, 4, 15, 0
        ],
        "1f6fc": [
            ["🛼"], "", "", ["roller_skate"], 39, 5, 15, 0
        ],
        "1f7e0": [
            ["🟠"], "", "", ["large_orange_circle"], 39, 6, 15, 0
        ],
        "1f7e1": [
            ["🟡"], "", "", ["large_yellow_circle"], 39, 7, 15, 0
        ],
        "1f7e2": [
            ["🟢"], "", "", ["large_green_circle"], 39, 8, 15, 0
        ],
        "1f7e3": [
            ["🟣"], "", "", ["large_purple_circle"], 39, 9, 15, 0
        ],
        "1f7e4": [
            ["🟤"], "", "", ["large_brown_circle"], 39, 10, 15, 0
        ],
        "1f7e5": [
            ["🟥"], "", "", ["large_red_square"], 39, 11, 15, 0
        ],
        "1f7e6": [
            ["🟦"], "", "", ["large_blue_square"], 39, 12, 15, 0
        ],
        "1f7e7": [
            ["🟧"], "", "", ["large_orange_square"], 39, 13, 15, 0
        ],
        "1f7e8": [
            ["🟨"], "", "", ["large_yellow_square"], 39, 14, 15, 0
        ],
        "1f7e9": [
            ["🟩"], "", "", ["large_green_square"], 39, 15, 15, 0
        ],
        "1f7ea": [
            ["🟪"], "", "", ["large_purple_square"], 39, 16, 15, 0
        ],
        "1f7eb": [
            ["🟫"], "", "", ["large_brown_square"], 39, 17, 15, 0
        ],
        "1f90c": [
            ["🤌"], "", "", ["pinched_fingers"], 39, 18, 15, 0
        ],
        "1f90d": [
            ["🤍"], "", "", ["white_heart"], 39, 24, 15, 0
        ],
        "1f90e": [
            ["🤎"], "", "", ["brown_heart"], 39, 25, 15, 0
        ],
        "1f90f": [
            ["🤏"], "", "", ["pinching_hand"], 39, 26, 15, 0
        ],
        "1f910": [
            ["🤐"], "", "", ["zipper_mouth_face"], 39, 32, 15, 0
        ],
        "1f911": [
            ["🤑"], "", "", ["money_mouth_face"], 39, 33, 15, 0
        ],
        "1f912": [
            ["🤒"], "", "", ["face_with_thermometer"], 39, 34, 15, 0
        ],
        "1f913": [
            ["🤓"], "", "", ["nerd_face"], 39, 35, 15, 0
        ],
        "1f914": [
            ["🤔"], "", "", ["thinking_face"], 39, 36, 15, 0
        ],
        "1f915": [
            ["🤕"], "", "", ["face_with_head_bandage"], 39, 37, 15, 0
        ],
        "1f916": [
            ["🤖"], "", "", ["robot_face"], 39, 38, 15, 0
        ],
        "1f917": [
            ["🤗"], "", "", ["hugging_face"], 39, 39, 15, 0
        ],
        "1f918": [
            ["🤘"], "", "", ["the_horns", "sign_of_the_horns"], 39, 40, 15, 0
        ],
        "1f919": [
            ["🤙"], "", "", ["call_me_hand"], 39, 46, 15, 0
        ],
        "1f91a": [
            ["🤚"], "", "", ["raised_back_of_hand"], 39, 52, 15, 0
        ],
        "1f91b": [
            ["🤛"], "", "", ["left-facing_fist"], 39, 58, 15, 0
        ],
        "1f91c": [
            ["🤜"], "", "", ["right-facing_fist"], 40, 4, 15, 0
        ],
        "1f91d": [
            ["🤝"], "", "", ["handshake"], 40, 10, 15, 0
        ],
        "1f91e": [
            ["🤞"], "", "", ["crossed_fingers", "hand_with_index_and_middle_fingers_crossed"], 40, 11, 15, 0
        ],
        "1f91f": [
            ["🤟"], "", "", ["i_love_you_hand_sign"], 40, 17, 15, 0
        ],
        "1f920": [
            ["🤠"], "", "", ["face_with_cowboy_hat"], 40, 23, 15, 0
        ],
        "1f921": [
            ["🤡"], "", "", ["clown_face"], 40, 24, 15, 0
        ],
        "1f922": [
            ["🤢"], "", "", ["nauseated_face"], 40, 25, 15, 0
        ],
        "1f923": [
            ["🤣"], "", "", ["rolling_on_the_floor_laughing"], 40, 26, 15, 0
        ],
        "1f924": [
            ["🤤"], "", "", ["drooling_face"], 40, 27, 15, 0
        ],
        "1f925": [
            ["🤥"], "", "", ["lying_face"], 40, 28, 15, 0
        ],
        "1f926-200d-2640-fe0f": [
            ["🤦‍♀️", "🤦‍♀"], "", "", ["woman-facepalming"], 40, 29, 15, 0
        ],
        "1f926-200d-2642-fe0f": [
            ["🤦‍♂️", "🤦‍♂"], "", "", ["man-facepalming"], 40, 35, 15, 0
        ],
        "1f926": [
            ["🤦"], "", "", ["face_palm"], 40, 41, 15, 0
        ],
        "1f927": [
            ["🤧"], "", "", ["sneezing_face"], 40, 47, 15, 0
        ],
        "1f928": [
            ["🤨"], "", "", ["face_with_raised_eyebrow", "face_with_one_eyebrow_raised"], 40, 48, 15, 0
        ],
        "1f929": [
            ["🤩"], "", "", ["star-struck", "grinning_face_with_star_eyes"], 40, 49, 15, 0
        ],
        "1f92a": [
            ["🤪"], "", "", ["zany_face", "grinning_face_with_one_large_and_one_small_eye"], 40, 50, 15, 0
        ],
        "1f92b": [
            ["🤫"], "", "", ["shushing_face", "face_with_finger_covering_closed_lips"], 40, 51, 15, 0
        ],
        "1f92c": [
            ["🤬"], "", "", ["face_with_symbols_on_mouth", "serious_face_with_symbols_covering_mouth"], 40, 52, 15, 0
        ],
        "1f92d": [
            ["🤭"], "", "", ["face_with_hand_over_mouth", "smiling_face_with_smiling_eyes_and_hand_covering_mouth"], 40, 53, 15, 0
        ],
        "1f92e": [
            ["🤮"], "", "", ["face_vomiting", "face_with_open_mouth_vomiting"], 40, 54, 15, 0
        ],
        "1f92f": [
            ["🤯"], "", "", ["exploding_head", "shocked_face_with_exploding_head"], 40, 55, 15, 0
        ],
        "1f930": [
            ["🤰"], "", "", ["pregnant_woman"], 40, 56, 15, 0
        ],
        "1f931": [
            ["🤱"], "", "", ["breast-feeding"], 41, 2, 15, 0
        ],
        "1f932": [
            ["🤲"], "", "", ["palms_up_together"], 41, 8, 15, 0
        ],
        "1f933": [
            ["🤳"], "", "", ["selfie"], 41, 14, 15, 0
        ],
        "1f934": [
            ["🤴"], "", "", ["prince"], 41, 20, 15, 0
        ],
        "1f935-200d-2640-fe0f": [
            ["🤵‍♀️", "🤵‍♀"], "", "", ["woman_in_tuxedo"], 41, 26, 15, 0
        ],
        "1f935-200d-2642-fe0f": [
            ["🤵‍♂️", "🤵‍♂"], "", "", ["man_in_tuxedo"], 41, 32, 15, 0
        ],
        "1f935": [
            ["🤵"], "", "", ["person_in_tuxedo"], 41, 38, 15, 0
        ],
        "1f936": [
            ["🤶"], "", "", ["mrs_claus", "mother_christmas"], 41, 44, 15, 0
        ],
        "1f937-200d-2640-fe0f": [
            ["🤷‍♀️", "🤷‍♀"], "", "", ["woman-shrugging"], 41, 50, 15, 0
        ],
        "1f937-200d-2642-fe0f": [
            ["🤷‍♂️", "🤷‍♂"], "", "", ["man-shrugging"], 41, 56, 15, 0
        ],
        "1f937": [
            ["🤷"], "", "", ["shrug"], 42, 2, 15, 0
        ],
        "1f938-200d-2640-fe0f": [
            ["🤸‍♀️", "🤸‍♀"], "", "", ["woman-cartwheeling"], 42, 8, 15, 0
        ],
        "1f938-200d-2642-fe0f": [
            ["🤸‍♂️", "🤸‍♂"], "", "", ["man-cartwheeling"], 42, 14, 15, 0
        ],
        "1f938": [
            ["🤸"], "", "", ["person_doing_cartwheel"], 42, 20, 15, 0
        ],
        "1f939-200d-2640-fe0f": [
            ["🤹‍♀️", "🤹‍♀"], "", "", ["woman-juggling"], 42, 26, 15, 0
        ],
        "1f939-200d-2642-fe0f": [
            ["🤹‍♂️", "🤹‍♂"], "", "", ["man-juggling"], 42, 32, 15, 0
        ],
        "1f939": [
            ["🤹"], "", "", ["juggling"], 42, 38, 15, 0
        ],
        "1f93a": [
            ["🤺"], "", "", ["fencer"], 42, 44, 15, 0
        ],
        "1f93c-200d-2640-fe0f": [
            ["🤼‍♀️", "🤼‍♀"], "", "", ["woman-wrestling"], 42, 45, 15, 0
        ],
        "1f93c-200d-2642-fe0f": [
            ["🤼‍♂️", "🤼‍♂"], "", "", ["man-wrestling"], 42, 46, 15, 0
        ],
        "1f93c": [
            ["🤼"], "", "", ["wrestlers"], 42, 47, 15, 0
        ],
        "1f93d-200d-2640-fe0f": [
            ["🤽‍♀️", "🤽‍♀"], "", "", ["woman-playing-water-polo"], 42, 48, 15, 0
        ],
        "1f93d-200d-2642-fe0f": [
            ["🤽‍♂️", "🤽‍♂"], "", "", ["man-playing-water-polo"], 42, 54, 15, 0
        ],
        "1f93d": [
            ["🤽"], "", "", ["water_polo"], 43, 0, 15, 0
        ],
        "1f93e-200d-2640-fe0f": [
            ["🤾‍♀️", "🤾‍♀"], "", "", ["woman-playing-handball"], 43, 6, 15, 0
        ],
        "1f93e-200d-2642-fe0f": [
            ["🤾‍♂️", "🤾‍♂"], "", "", ["man-playing-handball"], 43, 12, 15, 0
        ],
        "1f93e": [
            ["🤾"], "", "", ["handball"], 43, 18, 15, 0
        ],
        "1f93f": [
            ["🤿"], "", "", ["diving_mask"], 43, 24, 15, 0
        ],
        "1f940": [
            ["🥀"], "", "", ["wilted_flower"], 43, 25, 15, 0
        ],
        "1f941": [
            ["🥁"], "", "", ["drum_with_drumsticks"], 43, 26, 15, 0
        ],
        "1f942": [
            ["🥂"], "", "", ["clinking_glasses"], 43, 27, 15, 0
        ],
        "1f943": [
            ["🥃"], "", "", ["tumbler_glass"], 43, 28, 15, 0
        ],
        "1f944": [
            ["🥄"], "", "", ["spoon"], 43, 29, 15, 0
        ],
        "1f945": [
            ["🥅"], "", "", ["goal_net"], 43, 30, 15, 0
        ],
        "1f947": [
            ["🥇"], "", "", ["first_place_medal"], 43, 31, 15, 0
        ],
        "1f948": [
            ["🥈"], "", "", ["second_place_medal"], 43, 32, 15, 0
        ],
        "1f949": [
            ["🥉"], "", "", ["third_place_medal"], 43, 33, 15, 0
        ],
        "1f94a": [
            ["🥊"], "", "", ["boxing_glove"], 43, 34, 15, 0
        ],
        "1f94b": [
            ["🥋"], "", "", ["martial_arts_uniform"], 43, 35, 15, 0
        ],
        "1f94c": [
            ["🥌"], "", "", ["curling_stone"], 43, 36, 15, 0
        ],
        "1f94d": [
            ["🥍"], "", "", ["lacrosse"], 43, 37, 15, 0
        ],
        "1f94e": [
            ["🥎"], "", "", ["softball"], 43, 38, 15, 0
        ],
        "1f94f": [
            ["🥏"], "", "", ["flying_disc"], 43, 39, 15, 0
        ],
        "1f950": [
            ["🥐"], "", "", ["croissant"], 43, 40, 15, 0
        ],
        "1f951": [
            ["🥑"], "", "", ["avocado"], 43, 41, 15, 0
        ],
        "1f952": [
            ["🥒"], "", "", ["cucumber"], 43, 42, 15, 0
        ],
        "1f953": [
            ["🥓"], "", "", ["bacon"], 43, 43, 15, 0
        ],
        "1f954": [
            ["🥔"], "", "", ["potato"], 43, 44, 15, 0
        ],
        "1f955": [
            ["🥕"], "", "", ["carrot"], 43, 45, 15, 0
        ],
        "1f956": [
            ["🥖"], "", "", ["baguette_bread"], 43, 46, 15, 0
        ],
        "1f957": [
            ["🥗"], "", "", ["green_salad"], 43, 47, 15, 0
        ],
        "1f958": [
            ["🥘"], "", "", ["shallow_pan_of_food"], 43, 48, 15, 0
        ],
        "1f959": [
            ["🥙"], "", "", ["stuffed_flatbread"], 43, 49, 15, 0
        ],
        "1f95a": [
            ["🥚"], "", "", ["egg"], 43, 50, 15, 0
        ],
        "1f95b": [
            ["🥛"], "", "", ["glass_of_milk"], 43, 51, 15, 0
        ],
        "1f95c": [
            ["🥜"], "", "", ["peanuts"], 43, 52, 15, 0
        ],
        "1f95d": [
            ["🥝"], "", "", ["kiwifruit"], 43, 53, 15, 0
        ],
        "1f95e": [
            ["🥞"], "", "", ["pancakes"], 43, 54, 15, 0
        ],
        "1f95f": [
            ["🥟"], "", "", ["dumpling"], 43, 55, 15, 0
        ],
        "1f960": [
            ["🥠"], "", "", ["fortune_cookie"], 43, 56, 15, 0
        ],
        "1f961": [
            ["🥡"], "", "", ["takeout_box"], 43, 57, 15, 0
        ],
        "1f962": [
            ["🥢"], "", "", ["chopsticks"], 43, 58, 15, 0
        ],
        "1f963": [
            ["🥣"], "", "", ["bowl_with_spoon"], 43, 59, 15, 0
        ],
        "1f964": [
            ["🥤"], "", "", ["cup_with_straw"], 44, 0, 15, 0
        ],
        "1f965": [
            ["🥥"], "", "", ["coconut"], 44, 1, 15, 0
        ],
        "1f966": [
            ["🥦"], "", "", ["broccoli"], 44, 2, 15, 0
        ],
        "1f967": [
            ["🥧"], "", "", ["pie"], 44, 3, 15, 0
        ],
        "1f968": [
            ["🥨"], "", "", ["pretzel"], 44, 4, 15, 0
        ],
        "1f969": [
            ["🥩"], "", "", ["cut_of_meat"], 44, 5, 15, 0
        ],
        "1f96a": [
            ["🥪"], "", "", ["sandwich"], 44, 6, 15, 0
        ],
        "1f96b": [
            ["🥫"], "", "", ["canned_food"], 44, 7, 15, 0
        ],
        "1f96c": [
            ["🥬"], "", "", ["leafy_green"], 44, 8, 15, 0
        ],
        "1f96d": [
            ["🥭"], "", "", ["mango"], 44, 9, 15, 0
        ],
        "1f96e": [
            ["🥮"], "", "", ["moon_cake"], 44, 10, 15, 0
        ],
        "1f96f": [
            ["🥯"], "", "", ["bagel"], 44, 11, 15, 0
        ],
        "1f970": [
            ["🥰"], "", "", ["smiling_face_with_3_hearts"], 44, 12, 15, 0
        ],
        "1f971": [
            ["🥱"], "", "", ["yawning_face"], 44, 13, 15, 0
        ],
        "1f972": [
            ["🥲"], "", "", ["smiling_face_with_tear"], 44, 14, 15, 0
        ],
        "1f973": [
            ["🥳"], "", "", ["partying_face"], 44, 15, 15, 0
        ],
        "1f974": [
            ["🥴"], "", "", ["woozy_face"], 44, 16, 15, 0
        ],
        "1f975": [
            ["🥵"], "", "", ["hot_face"], 44, 17, 15, 0
        ],
        "1f976": [
            ["🥶"], "", "", ["cold_face"], 44, 18, 15, 0
        ],
        "1f977": [
            ["🥷"], "", "", ["ninja"], 44, 19, 15, 0
        ],
        "1f978": [
            ["🥸"], "", "", ["disguised_face"], 44, 25, 15, 0
        ],
        "1f97a": [
            ["🥺"], "", "", ["pleading_face"], 44, 26, 15, 0
        ],
        "1f97b": [
            ["🥻"], "", "", ["sari"], 44, 27, 15, 0
        ],
        "1f97c": [
            ["🥼"], "", "", ["lab_coat"], 44, 28, 15, 0
        ],
        "1f97d": [
            ["🥽"], "", "", ["goggles"], 44, 29, 15, 0
        ],
        "1f97e": [
            ["🥾"], "", "", ["hiking_boot"], 44, 30, 15, 0
        ],
        "1f97f": [
            ["🥿"], "", "", ["womans_flat_shoe"], 44, 31, 15, 0
        ],
        "1f980": [
            ["🦀"], "", "", ["crab"], 44, 32, 15, 0
        ],
        "1f981": [
            ["🦁"], "", "", ["lion_face"], 44, 33, 15, 0
        ],
        "1f982": [
            ["🦂"], "", "", ["scorpion"], 44, 34, 15, 0
        ],
        "1f983": [
            ["🦃"], "", "", ["turkey"], 44, 35, 15, 0
        ],
        "1f984": [
            ["🦄"], "", "", ["unicorn_face"], 44, 36, 15, 0
        ],
        "1f985": [
            ["🦅"], "", "", ["eagle"], 44, 37, 15, 0
        ],
        "1f986": [
            ["🦆"], "", "", ["duck"], 44, 38, 15, 0
        ],
        "1f987": [
            ["🦇"], "", "", ["bat"], 44, 39, 15, 0
        ],
        "1f988": [
            ["🦈"], "", "", ["shark"], 44, 40, 15, 0
        ],
        "1f989": [
            ["🦉"], "", "", ["owl"], 44, 41, 15, 0
        ],
        "1f98a": [
            ["🦊"], "", "", ["fox_face"], 44, 42, 15, 0
        ],
        "1f98b": [
            ["🦋"], "", "", ["butterfly"], 44, 43, 15, 0
        ],
        "1f98c": [
            ["🦌"], "", "", ["deer"], 44, 44, 15, 0
        ],
        "1f98d": [
            ["🦍"], "", "", ["gorilla"], 44, 45, 15, 0
        ],
        "1f98e": [
            ["🦎"], "", "", ["lizard"], 44, 46, 15, 0
        ],
        "1f98f": [
            ["🦏"], "", "", ["rhinoceros"], 44, 47, 15, 0
        ],
        "1f990": [
            ["🦐"], "", "", ["shrimp"], 44, 48, 15, 0
        ],
        "1f991": [
            ["🦑"], "", "", ["squid"], 44, 49, 15, 0
        ],
        "1f992": [
            ["🦒"], "", "", ["giraffe_face"], 44, 50, 15, 0
        ],
        "1f993": [
            ["🦓"], "", "", ["zebra_face"], 44, 51, 15, 0
        ],
        "1f994": [
            ["🦔"], "", "", ["hedgehog"], 44, 52, 15, 0
        ],
        "1f995": [
            ["🦕"], "", "", ["sauropod"], 44, 53, 15, 0
        ],
        "1f996": [
            ["🦖"], "", "", ["t-rex"], 44, 54, 15, 0
        ],
        "1f997": [
            ["🦗"], "", "", ["cricket"], 44, 55, 15, 0
        ],
        "1f998": [
            ["🦘"], "", "", ["kangaroo"], 44, 56, 15, 0
        ],
        "1f999": [
            ["🦙"], "", "", ["llama"], 44, 57, 15, 0
        ],
        "1f99a": [
            ["🦚"], "", "", ["peacock"], 44, 58, 15, 0
        ],
        "1f99b": [
            ["🦛"], "", "", ["hippopotamus"], 44, 59, 15, 0
        ],
        "1f99c": [
            ["🦜"], "", "", ["parrot"], 45, 0, 15, 0
        ],
        "1f99d": [
            ["🦝"], "", "", ["raccoon"], 45, 1, 15, 0
        ],
        "1f99e": [
            ["🦞"], "", "", ["lobster"], 45, 2, 15, 0
        ],
        "1f99f": [
            ["🦟"], "", "", ["mosquito"], 45, 3, 15, 0
        ],
        "1f9a0": [
            ["🦠"], "", "", ["microbe"], 45, 4, 15, 0
        ],
        "1f9a1": [
            ["🦡"], "", "", ["badger"], 45, 5, 15, 0
        ],
        "1f9a2": [
            ["🦢"], "", "", ["swan"], 45, 6, 15, 0
        ],
        "1f9a3": [
            ["🦣"], "", "", ["mammoth"], 45, 7, 15, 0
        ],
        "1f9a4": [
            ["🦤"], "", "", ["dodo"], 45, 8, 15, 0
        ],
        "1f9a5": [
            ["🦥"], "", "", ["sloth"], 45, 9, 15, 0
        ],
        "1f9a6": [
            ["🦦"], "", "", ["otter"], 45, 10, 15, 0
        ],
        "1f9a7": [
            ["🦧"], "", "", ["orangutan"], 45, 11, 15, 0
        ],
        "1f9a8": [
            ["🦨"], "", "", ["skunk"], 45, 12, 15, 0
        ],
        "1f9a9": [
            ["🦩"], "", "", ["flamingo"], 45, 13, 15, 0
        ],
        "1f9aa": [
            ["🦪"], "", "", ["oyster"], 45, 14, 15, 0
        ],
        "1f9ab": [
            ["🦫"], "", "", ["beaver"], 45, 15, 15, 0
        ],
        "1f9ac": [
            ["🦬"], "", "", ["bison"], 45, 16, 15, 0
        ],
        "1f9ad": [
            ["🦭"], "", "", ["seal"], 45, 17, 15, 0
        ],
        "1f9ae": [
            ["🦮"], "", "", ["guide_dog"], 45, 18, 15, 0
        ],
        "1f9af": [
            ["🦯"], "", "", ["probing_cane"], 45, 19, 15, 0
        ],
        "1f9b4": [
            ["🦴"], "", "", ["bone"], 45, 20, 15, 0
        ],
        "1f9b5": [
            ["🦵"], "", "", ["leg"], 45, 21, 15, 0
        ],
        "1f9b6": [
            ["🦶"], "", "", ["foot"], 45, 27, 15, 0
        ],
        "1f9b7": [
            ["🦷"], "", "", ["tooth"], 45, 33, 15, 0
        ],
        "1f9b8-200d-2640-fe0f": [
            ["🦸‍♀️", "🦸‍♀"], "", "", ["female_superhero"], 45, 34, 15, 0
        ],
        "1f9b8-200d-2642-fe0f": [
            ["🦸‍♂️", "🦸‍♂"], "", "", ["male_superhero"], 45, 40, 15, 0
        ],
        "1f9b8": [
            ["🦸"], "", "", ["superhero"], 45, 46, 15, 0
        ],
        "1f9b9-200d-2640-fe0f": [
            ["🦹‍♀️", "🦹‍♀"], "", "", ["female_supervillain"], 45, 52, 15, 0
        ],
        "1f9b9-200d-2642-fe0f": [
            ["🦹‍♂️", "🦹‍♂"], "", "", ["male_supervillain"], 45, 58, 15, 0
        ],
        "1f9b9": [
            ["🦹"], "", "", ["supervillain"], 46, 4, 15, 0
        ],
        "1f9ba": [
            ["🦺"], "", "", ["safety_vest"], 46, 10, 15, 0
        ],
        "1f9bb": [
            ["🦻"], "", "", ["ear_with_hearing_aid"], 46, 11, 15, 0
        ],
        "1f9bc": [
            ["🦼"], "", "", ["motorized_wheelchair"], 46, 17, 15, 0
        ],
        "1f9bd": [
            ["🦽"], "", "", ["manual_wheelchair"], 46, 18, 15, 0
        ],
        "1f9be": [
            ["🦾"], "", "", ["mechanical_arm"], 46, 19, 15, 0
        ],
        "1f9bf": [
            ["🦿"], "", "", ["mechanical_leg"], 46, 20, 15, 0
        ],
        "1f9c0": [
            ["🧀"], "", "", ["cheese_wedge"], 46, 21, 15, 0
        ],
        "1f9c1": [
            ["🧁"], "", "", ["cupcake"], 46, 22, 15, 0
        ],
        "1f9c2": [
            ["🧂"], "", "", ["salt"], 46, 23, 15, 0
        ],
        "1f9c3": [
            ["🧃"], "", "", ["beverage_box"], 46, 24, 15, 0
        ],
        "1f9c4": [
            ["🧄"], "", "", ["garlic"], 46, 25, 15, 0
        ],
        "1f9c5": [
            ["🧅"], "", "", ["onion"], 46, 26, 15, 0
        ],
        "1f9c6": [
            ["🧆"], "", "", ["falafel"], 46, 27, 15, 0
        ],
        "1f9c7": [
            ["🧇"], "", "", ["waffle"], 46, 28, 15, 0
        ],
        "1f9c8": [
            ["🧈"], "", "", ["butter"], 46, 29, 15, 0
        ],
        "1f9c9": [
            ["🧉"], "", "", ["mate_drink"], 46, 30, 15, 0
        ],
        "1f9ca": [
            ["🧊"], "", "", ["ice_cube"], 46, 31, 15, 0
        ],
        "1f9cb": [
            ["🧋"], "", "", ["bubble_tea"], 46, 32, 15, 0
        ],
        "1f9cd-200d-2640-fe0f": [
            ["🧍‍♀️", "🧍‍♀"], "", "", ["woman_standing"], 46, 33, 15, 0
        ],
        "1f9cd-200d-2642-fe0f": [
            ["🧍‍♂️", "🧍‍♂"], "", "", ["man_standing"], 46, 39, 15, 0
        ],
        "1f9cd": [
            ["🧍"], "", "", ["standing_person"], 46, 45, 15, 0
        ],
        "1f9ce-200d-2640-fe0f": [
            ["🧎‍♀️", "🧎‍♀"], "", "", ["woman_kneeling"], 46, 51, 15, 0
        ],
        "1f9ce-200d-2642-fe0f": [
            ["🧎‍♂️", "🧎‍♂"], "", "", ["man_kneeling"], 46, 57, 15, 0
        ],
        "1f9ce": [
            ["🧎"], "", "", ["kneeling_person"], 47, 3, 15, 0
        ],
        "1f9cf-200d-2640-fe0f": [
            ["🧏‍♀️", "🧏‍♀"], "", "", ["deaf_woman"], 47, 9, 15, 0
        ],
        "1f9cf-200d-2642-fe0f": [
            ["🧏‍♂️", "🧏‍♂"], "", "", ["deaf_man"], 47, 15, 15, 0
        ],
        "1f9cf": [
            ["🧏"], "", "", ["deaf_person"], 47, 21, 15, 0
        ],
        "1f9d0": [
            ["🧐"], "", "", ["face_with_monocle"], 47, 27, 15, 0
        ],
        "1f9d1-200d-1f33e": [
            ["🧑‍🌾"], "", "", ["farmer"], 47, 28, 15, 0
        ],
        "1f9d1-200d-1f373": [
            ["🧑‍🍳"], "", "", ["cook"], 47, 34, 15, 0
        ],
        "1f9d1-200d-1f37c": [
            ["🧑‍🍼"], "", "", ["person_feeding_baby"], 47, 40, 15, 0
        ],
        "1f9d1-200d-1f384": [
            ["🧑‍🎄"], "", "", ["mx_claus"], 47, 46, 15, 0
        ],
        "1f9d1-200d-1f393": [
            ["🧑‍🎓"], "", "", ["student"], 47, 52, 15, 0
        ],
        "1f9d1-200d-1f3a4": [
            ["🧑‍🎤"], "", "", ["singer"], 47, 58, 15, 0
        ],
        "1f9d1-200d-1f3a8": [
            ["🧑‍🎨"], "", "", ["artist"], 48, 4, 15, 0
        ],
        "1f9d1-200d-1f3eb": [
            ["🧑‍🏫"], "", "", ["teacher"], 48, 10, 15, 0
        ],
        "1f9d1-200d-1f3ed": [
            ["🧑‍🏭"], "", "", ["factory_worker"], 48, 16, 15, 0
        ],
        "1f9d1-200d-1f4bb": [
            ["🧑‍💻"], "", "", ["technologist"], 48, 22, 15, 0
        ],
        "1f9d1-200d-1f4bc": [
            ["🧑‍💼"], "", "", ["office_worker"], 48, 28, 15, 0
        ],
        "1f9d1-200d-1f527": [
            ["🧑‍🔧"], "", "", ["mechanic"], 48, 34, 15, 0
        ],
        "1f9d1-200d-1f52c": [
            ["🧑‍🔬"], "", "", ["scientist"], 48, 40, 15, 0
        ],
        "1f9d1-200d-1f680": [
            ["🧑‍🚀"], "", "", ["astronaut"], 48, 46, 15, 0
        ],
        "1f9d1-200d-1f692": [
            ["🧑‍🚒"], "", "", ["firefighter"], 48, 52, 15, 0
        ],
        "1f9d1-200d-1f91d-200d-1f9d1": [
            ["🧑‍🤝‍🧑"], "", "", ["people_holding_hands"], 48, 58, 15, 0
        ],
        "1f9d1-200d-1f9af": [
            ["🧑‍🦯"], "", "", ["person_with_probing_cane"], 49, 24, 15, 0
        ],
        "1f9d1-200d-1f9b0": [
            ["🧑‍🦰"], "", "", ["red_haired_person"], 49, 30, 15, 0
        ],
        "1f9d1-200d-1f9b1": [
            ["🧑‍🦱"], "", "", ["curly_haired_person"], 49, 36, 15, 0
        ],
        "1f9d1-200d-1f9b2": [
            ["🧑‍🦲"], "", "", ["bald_person"], 49, 42, 7, 0
        ],
        "1f9d1-200d-1f9b3": [
            ["🧑‍🦳"], "", "", ["white_haired_person"], 49, 48, 7, 0
        ],
        "1f9d1-200d-1f9bc": [
            ["🧑‍🦼"], "", "", ["person_in_motorized_wheelchair"], 49, 54, 15, 0
        ],
        "1f9d1-200d-1f9bd": [
            ["🧑‍🦽"], "", "", ["person_in_manual_wheelchair"], 50, 0, 15, 0
        ],
        "1f9d1-200d-2695-fe0f": [
            ["🧑‍⚕️", "🧑‍⚕"], "", "", ["health_worker"], 50, 6, 15, 0
        ],
        "1f9d1-200d-2696-fe0f": [
            ["🧑‍⚖️", "🧑‍⚖"], "", "", ["judge"], 50, 12, 15, 0
        ],
        "1f9d1-200d-2708-fe0f": [
            ["🧑‍✈️", "🧑‍✈"], "", "", ["pilot"], 50, 18, 15, 0
        ],
        "1f9d1": [
            ["🧑"], "", "", ["adult"], 50, 24, 15, 0
        ],
        "1f9d2": [
            ["🧒"], "", "", ["child"], 50, 30, 15, 0
        ],
        "1f9d3": [
            ["🧓"], "", "", ["older_adult"], 50, 36, 15, 0
        ],
        "1f9d4-200d-2640-fe0f": [
            ["🧔‍♀️", "🧔‍♀"], "", "", ["woman_with_beard"], 50, 42, 7, 0
        ],
        "1f9d4-200d-2642-fe0f": [
            ["🧔‍♂️", "🧔‍♂"], "", "", ["man_with_beard"], 50, 48, 7, 0
        ],
        "1f9d4": [
            ["🧔"], "", "", ["bearded_person"], 50, 54, 15, 0
        ],
        "1f9d5": [
            ["🧕"], "", "", ["person_with_headscarf"], 51, 0, 15, 0
        ],
        "1f9d6-200d-2640-fe0f": [
            ["🧖‍♀️", "🧖‍♀"], "", "", ["woman_in_steamy_room"], 51, 6, 15, 0
        ],
        "1f9d6-200d-2642-fe0f": [
            ["🧖‍♂️", "🧖‍♂", "🧖"], "", "", ["man_in_steamy_room", "person_in_steamy_room"], 51, 12, 15, 0
        ],
        "1f9d7-200d-2640-fe0f": [
            ["🧗‍♀️", "🧗‍♀", "🧗"], "", "", ["woman_climbing", "person_climbing"], 51, 24, 15, 0
        ],
        "1f9d7-200d-2642-fe0f": [
            ["🧗‍♂️", "🧗‍♂"], "", "", ["man_climbing"], 51, 30, 15, 0
        ],
        "1f9d8-200d-2640-fe0f": [
            ["🧘‍♀️", "🧘‍♀", "🧘"], "", "", ["woman_in_lotus_position", "person_in_lotus_position"], 51, 42, 15, 0
        ],
        "1f9d8-200d-2642-fe0f": [
            ["🧘‍♂️", "🧘‍♂"], "", "", ["man_in_lotus_position"], 51, 48, 15, 0
        ],
        "1f9d9-200d-2640-fe0f": [
            ["🧙‍♀️", "🧙‍♀", "🧙"], "", "", ["female_mage", "mage"], 52, 0, 15, 0
        ],
        "1f9d9-200d-2642-fe0f": [
            ["🧙‍♂️", "🧙‍♂"], "", "", ["male_mage"], 52, 6, 15, 0
        ],
        "1f9da-200d-2640-fe0f": [
            ["🧚‍♀️", "🧚‍♀", "🧚"], "", "", ["female_fairy", "fairy"], 52, 18, 15, 0
        ],
        "1f9da-200d-2642-fe0f": [
            ["🧚‍♂️", "🧚‍♂"], "", "", ["male_fairy"], 52, 24, 15, 0
        ],
        "1f9db-200d-2640-fe0f": [
            ["🧛‍♀️", "🧛‍♀", "🧛"], "", "", ["female_vampire", "vampire"], 52, 36, 15, 0
        ],
        "1f9db-200d-2642-fe0f": [
            ["🧛‍♂️", "🧛‍♂"], "", "", ["male_vampire"], 52, 42, 15, 0
        ],
        "1f9dc-200d-2640-fe0f": [
            ["🧜‍♀️", "🧜‍♀"], "", "", ["mermaid"], 52, 54, 15, 0
        ],
        "1f9dc-200d-2642-fe0f": [
            ["🧜‍♂️", "🧜‍♂", "🧜"], "", "", ["merman", "merperson"], 53, 0, 15, 0
        ],
        "1f9dd-200d-2640-fe0f": [
            ["🧝‍♀️", "🧝‍♀"], "", "", ["female_elf"], 53, 12, 15, 0
        ],
        "1f9dd-200d-2642-fe0f": [
            ["🧝‍♂️", "🧝‍♂", "🧝"], "", "", ["male_elf", "elf"], 53, 18, 15, 0
        ],
        "1f9de-200d-2640-fe0f": [
            ["🧞‍♀️", "🧞‍♀"], "", "", ["female_genie"], 53, 30, 15, 0
        ],
        "1f9de-200d-2642-fe0f": [
            ["🧞‍♂️", "🧞‍♂", "🧞"], "", "", ["male_genie", "genie"], 53, 31, 15, 0
        ],
        "1f9df-200d-2640-fe0f": [
            ["🧟‍♀️", "🧟‍♀"], "", "", ["female_zombie"], 53, 33, 15, 0
        ],
        "1f9df-200d-2642-fe0f": [
            ["🧟‍♂️", "🧟‍♂", "🧟"], "", "", ["male_zombie", "zombie"], 53, 34, 15, 0
        ],
        "1f9e0": [
            ["🧠"], "", "", ["brain"], 53, 36, 15, 0
        ],
        "1f9e1": [
            ["🧡"], "", "", ["orange_heart"], 53, 37, 15, 0
        ],
        "1f9e2": [
            ["🧢"], "", "", ["billed_cap"], 53, 38, 15, 0
        ],
        "1f9e3": [
            ["🧣"], "", "", ["scarf"], 53, 39, 15, 0
        ],
        "1f9e4": [
            ["🧤"], "", "", ["gloves"], 53, 40, 15, 0
        ],
        "1f9e5": [
            ["🧥"], "", "", ["coat"], 53, 41, 15, 0
        ],
        "1f9e6": [
            ["🧦"], "", "", ["socks"], 53, 42, 15, 0
        ],
        "1f9e7": [
            ["🧧"], "", "", ["red_envelope"], 53, 43, 15, 0
        ],
        "1f9e8": [
            ["🧨"], "", "", ["firecracker"], 53, 44, 15, 0
        ],
        "1f9e9": [
            ["🧩"], "", "", ["jigsaw"], 53, 45, 15, 0
        ],
        "1f9ea": [
            ["🧪"], "", "", ["test_tube"], 53, 46, 15, 0
        ],
        "1f9eb": [
            ["🧫"], "", "", ["petri_dish"], 53, 47, 15, 0
        ],
        "1f9ec": [
            ["🧬"], "", "", ["dna"], 53, 48, 15, 0
        ],
        "1f9ed": [
            ["🧭"], "", "", ["compass"], 53, 49, 15, 0
        ],
        "1f9ee": [
            ["🧮"], "", "", ["abacus"], 53, 50, 15, 0
        ],
        "1f9ef": [
            ["🧯"], "", "", ["fire_extinguisher"], 53, 51, 15, 0
        ],
        "1f9f0": [
            ["🧰"], "", "", ["toolbox"], 53, 52, 15, 0
        ],
        "1f9f1": [
            ["🧱"], "", "", ["bricks"], 53, 53, 15, 0
        ],
        "1f9f2": [
            ["🧲"], "", "", ["magnet"], 53, 54, 15, 0
        ],
        "1f9f3": [
            ["🧳"], "", "", ["luggage"], 53, 55, 15, 0
        ],
        "1f9f4": [
            ["🧴"], "", "", ["lotion_bottle"], 53, 56, 15, 0
        ],
        "1f9f5": [
            ["🧵"], "", "", ["thread"], 53, 57, 15, 0
        ],
        "1f9f6": [
            ["🧶"], "", "", ["yarn"], 53, 58, 15, 0
        ],
        "1f9f7": [
            ["🧷"], "", "", ["safety_pin"], 53, 59, 15, 0
        ],
        "1f9f8": [
            ["🧸"], "", "", ["teddy_bear"], 54, 0, 15, 0
        ],
        "1f9f9": [
            ["🧹"], "", "", ["broom"], 54, 1, 15, 0
        ],
        "1f9fa": [
            ["🧺"], "", "", ["basket"], 54, 2, 15, 0
        ],
        "1f9fb": [
            ["🧻"], "", "", ["roll_of_paper"], 54, 3, 15, 0
        ],
        "1f9fc": [
            ["🧼"], "", "", ["soap"], 54, 4, 15, 0
        ],
        "1f9fd": [
            ["🧽"], "", "", ["sponge"], 54, 5, 15, 0
        ],
        "1f9fe": [
            ["🧾"], "", "", ["receipt"], 54, 6, 15, 0
        ],
        "1f9ff": [
            ["🧿"], "", "", ["nazar_amulet"], 54, 7, 15, 0
        ],
        "1fa70": [
            ["🩰"], "", "", ["ballet_shoes"], 54, 8, 15, 0
        ],
        "1fa71": [
            ["🩱"], "", "", ["one-piece_swimsuit"], 54, 9, 15, 0
        ],
        "1fa72": [
            ["🩲"], "", "", ["briefs"], 54, 10, 15, 0
        ],
        "1fa73": [
            ["🩳"], "", "", ["shorts"], 54, 11, 15, 0
        ],
        "1fa74": [
            ["🩴"], "", "", ["thong_sandal"], 54, 12, 15, 0
        ],
        "1fa78": [
            ["🩸"], "", "", ["drop_of_blood"], 54, 13, 15, 0
        ],
        "1fa79": [
            ["🩹"], "", "", ["adhesive_bandage"], 54, 14, 15, 0
        ],
        "1fa7a": [
            ["🩺"], "", "", ["stethoscope"], 54, 15, 15, 0
        ],
        "1fa80": [
            ["🪀"], "", "", ["yo-yo"], 54, 16, 15, 0
        ],
        "1fa81": [
            ["🪁"], "", "", ["kite"], 54, 17, 15, 0
        ],
        "1fa82": [
            ["🪂"], "", "", ["parachute"], 54, 18, 15, 0
        ],
        "1fa83": [
            ["🪃"], "", "", ["boomerang"], 54, 19, 15, 0
        ],
        "1fa84": [
            ["🪄"], "", "", ["magic_wand"], 54, 20, 15, 0
        ],
        "1fa85": [
            ["🪅"], "", "", ["pinata"], 54, 21, 15, 0
        ],
        "1fa86": [
            ["🪆"], "", "", ["nesting_dolls"], 54, 22, 15, 0
        ],
        "1fa90": [
            ["🪐"], "", "", ["ringed_planet"], 54, 23, 15, 0
        ],
        "1fa91": [
            ["🪑"], "", "", ["chair"], 54, 24, 15, 0
        ],
        "1fa92": [
            ["🪒"], "", "", ["razor"], 54, 25, 15, 0
        ],
        "1fa93": [
            ["🪓"], "", "", ["axe"], 54, 26, 15, 0
        ],
        "1fa94": [
            ["🪔"], "", "", ["diya_lamp"], 54, 27, 15, 0
        ],
        "1fa95": [
            ["🪕"], "", "", ["banjo"], 54, 28, 15, 0
        ],
        "1fa96": [
            ["🪖"], "", "", ["military_helmet"], 54, 29, 15, 0
        ],
        "1fa97": [
            ["🪗"], "", "", ["accordion"], 54, 30, 15, 0
        ],
        "1fa98": [
            ["🪘"], "", "", ["long_drum"], 54, 31, 15, 0
        ],
        "1fa99": [
            ["🪙"], "", "", ["coin"], 54, 32, 15, 0
        ],
        "1fa9a": [
            ["🪚"], "", "", ["carpentry_saw"], 54, 33, 15, 0
        ],
        "1fa9b": [
            ["🪛"], "", "", ["screwdriver"], 54, 34, 15, 0
        ],
        "1fa9c": [
            ["🪜"], "", "", ["ladder"], 54, 35, 15, 0
        ],
        "1fa9d": [
            ["🪝"], "", "", ["hook"], 54, 36, 15, 0
        ],
        "1fa9e": [
            ["🪞"], "", "", ["mirror"], 54, 37, 15, 0
        ],
        "1fa9f": [
            ["🪟"], "", "", ["window"], 54, 38, 15, 0
        ],
        "1faa0": [
            ["🪠"], "", "", ["plunger"], 54, 39, 15, 0
        ],
        "1faa1": [
            ["🪡"], "", "", ["sewing_needle"], 54, 40, 15, 0
        ],
        "1faa2": [
            ["🪢"], "", "", ["knot"], 54, 41, 15, 0
        ],
        "1faa3": [
            ["🪣"], "", "", ["bucket"], 54, 42, 15, 0
        ],
        "1faa4": [
            ["🪤"], "", "", ["mouse_trap"], 54, 43, 15, 0
        ],
        "1faa5": [
            ["🪥"], "", "", ["toothbrush"], 54, 44, 15, 0
        ],
        "1faa6": [
            ["🪦"], "", "", ["headstone"], 54, 45, 15, 0
        ],
        "1faa7": [
            ["🪧"], "", "", ["placard"], 54, 46, 15, 0
        ],
        "1faa8": [
            ["🪨"], "", "", ["rock"], 54, 47, 15, 0
        ],
        "1fab0": [
            ["🪰"], "", "", ["fly"], 54, 48, 15, 0
        ],
        "1fab1": [
            ["🪱"], "", "", ["worm"], 54, 49, 15, 0
        ],
        "1fab2": [
            ["🪲"], "", "", ["beetle"], 54, 50, 15, 0
        ],
        "1fab3": [
            ["🪳"], "", "", ["cockroach"], 54, 51, 15, 0
        ],
        "1fab4": [
            ["🪴"], "", "", ["potted_plant"], 54, 52, 15, 0
        ],
        "1fab5": [
            ["🪵"], "", "", ["wood"], 54, 53, 15, 0
        ],
        "1fab6": [
            ["🪶"], "", "", ["feather"], 54, 54, 15, 0
        ],
        "1fac0": [
            ["🫀"], "", "", ["anatomical_heart"], 54, 55, 15, 0
        ],
        "1fac1": [
            ["🫁"], "", "", ["lungs"], 54, 56, 15, 0
        ],
        "1fac2": [
            ["🫂"], "", "", ["people_hugging"], 54, 57, 15, 0
        ],
        "1fad0": [
            ["🫐"], "", "", ["blueberries"], 54, 58, 15, 0
        ],
        "1fad1": [
            ["🫑"], "", "", ["bell_pepper"], 54, 59, 15, 0
        ],
        "1fad2": [
            ["🫒"], "", "", ["olive"], 55, 0, 15, 0
        ],
        "1fad3": [
            ["🫓"], "", "", ["flatbread"], 55, 1, 15, 0
        ],
        "1fad4": [
            ["🫔"], "", "", ["tamale"], 55, 2, 15, 0
        ],
        "1fad5": [
            ["🫕"], "", "", ["fondue"], 55, 3, 15, 0
        ],
        "1fad6": [
            ["🫖"], "", "", ["teapot"], 55, 4, 15, 0
        ],
        "203c-fe0f": [
            ["‼️", "‼"], "", "󾬆", ["bangbang"], 55, 5, 15, 0
        ],
        "2049-fe0f": [
            ["⁉️", "⁉"], "", "󾬅", ["interrobang"], 55, 6, 15, 0
        ],
        "2122-fe0f": [
            ["™️", "™"], "", "󾬪", ["tm"], 55, 7, 15, 0
        ],
        "2139-fe0f": [
            ["ℹ️", "ℹ"], "", "󾭇", ["information_source"], 55, 8, 15, 0
        ],
        "2194-fe0f": [
            ["↔️", "↔"], "", "󾫶", ["left_right_arrow"], 55, 9, 15, 0
        ],
        "2195-fe0f": [
            ["↕️", "↕"], "", "󾫷", ["arrow_up_down"], 55, 10, 15, 0
        ],
        "2196-fe0f": [
            ["↖️", "↖"], "", "󾫲", ["arrow_upper_left"], 55, 11, 15, 0
        ],
        "2197-fe0f": [
            ["↗️", "↗"], "", "󾫰", ["arrow_upper_right"], 55, 12, 15, 0
        ],
        "2198-fe0f": [
            ["↘️", "↘"], "", "󾫱", ["arrow_lower_right"], 55, 13, 15, 0
        ],
        "2199-fe0f": [
            ["↙️", "↙"], "", "󾫳", ["arrow_lower_left"], 55, 14, 15, 0
        ],
        "21a9-fe0f": [
            ["↩️", "↩"], "", "󾮃", ["leftwards_arrow_with_hook"], 55, 15, 15, 0
        ],
        "21aa-fe0f": [
            ["↪️", "↪"], "", "󾮈", ["arrow_right_hook"], 55, 16, 15, 0
        ],
        "231a": [
            ["⌚"], "", "󾀝", ["watch"], 55, 17, 15, 0
        ],
        "231b": [
            ["⌛"], "", "󾀜", ["hourglass"], 55, 18, 15, 0
        ],
        "2328-fe0f": [
            ["⌨️", "⌨"], "", "", ["keyboard"], 55, 19, 15, 0
        ],
        "23cf-fe0f": [
            ["⏏️", "⏏"], "", "", ["eject"], 55, 20, 15, 0
        ],
        "23e9": [
            ["⏩"], "", "󾫾", ["fast_forward"], 55, 21, 15, 0
        ],
        "23ea": [
            ["⏪"], "", "󾫿", ["rewind"], 55, 22, 15, 0
        ],
        "23eb": [
            ["⏫"], "", "󾬃", ["arrow_double_up"], 55, 23, 15, 0
        ],
        "23ec": [
            ["⏬"], "", "󾬂", ["arrow_double_down"], 55, 24, 15, 0
        ],
        "23ed-fe0f": [
            ["⏭️", "⏭"], "", "", ["black_right_pointing_double_triangle_with_vertical_bar"], 55, 25, 15, 0
        ],
        "23ee-fe0f": [
            ["⏮️", "⏮"], "", "", ["black_left_pointing_double_triangle_with_vertical_bar"], 55, 26, 15, 0
        ],
        "23ef-fe0f": [
            ["⏯️", "⏯"], "", "", ["black_right_pointing_triangle_with_double_vertical_bar"], 55, 27, 15, 0
        ],
        "23f0": [
            ["⏰"], "", "󾀪", ["alarm_clock"], 55, 28, 15, 0
        ],
        "23f1-fe0f": [
            ["⏱️", "⏱"], "", "", ["stopwatch"], 55, 29, 15, 0
        ],
        "23f2-fe0f": [
            ["⏲️", "⏲"], "", "", ["timer_clock"], 55, 30, 15, 0
        ],
        "23f3": [
            ["⏳"], "", "󾀛", ["hourglass_flowing_sand"], 55, 31, 15, 0
        ],
        "23f8-fe0f": [
            ["⏸️", "⏸"], "", "", ["double_vertical_bar"], 55, 32, 15, 0
        ],
        "23f9-fe0f": [
            ["⏹️", "⏹"], "", "", ["black_square_for_stop"], 55, 33, 15, 0
        ],
        "23fa-fe0f": [
            ["⏺️", "⏺"], "", "", ["black_circle_for_record"], 55, 34, 15, 0
        ],
        "24c2-fe0f": [
            ["Ⓜ️", "Ⓜ"], "", "󾟡", ["m"], 55, 35, 15, 0
        ],
        "25aa-fe0f": [
            ["▪️", "▪"], "", "󾭮", ["black_small_square"], 55, 36, 15, 0
        ],
        "25ab-fe0f": [
            ["▫️", "▫"], "", "󾭭", ["white_small_square"], 55, 37, 15, 0
        ],
        "25b6-fe0f": [
            ["▶️", "▶"], "", "󾫼", ["arrow_forward"], 55, 38, 15, 0
        ],
        "25c0-fe0f": [
            ["◀️", "◀"], "", "󾫽", ["arrow_backward"], 55, 39, 15, 0
        ],
        "25fb-fe0f": [
            ["◻️", "◻"], "", "󾭱", ["white_medium_square"], 55, 40, 15, 0
        ],
        "25fc-fe0f": [
            ["◼️", "◼"], "", "󾭲", ["black_medium_square"], 55, 41, 15, 0
        ],
        "25fd": [
            ["◽"], "", "󾭯", ["white_medium_small_square"], 55, 42, 15, 0
        ],
        "25fe": [
            ["◾"], "", "󾭰", ["black_medium_small_square"], 55, 43, 15, 0
        ],
        "2600-fe0f": [
            ["☀️", "☀"], "", "󾀀", ["sunny"], 55, 44, 15, 0
        ],
        "2601-fe0f": [
            ["☁️", "☁"], "", "󾀁", ["cloud"], 55, 45, 15, 0
        ],
        "2602-fe0f": [
            ["☂️", "☂"], "", "", ["umbrella"], 55, 46, 15, 0
        ],
        "2603-fe0f": [
            ["☃️", "☃"], "", "", ["snowman"], 55, 47, 15, 0
        ],
        "2604-fe0f": [
            ["☄️", "☄"], "", "", ["comet"], 55, 48, 15, 0
        ],
        "260e-fe0f": [
            ["☎️", "☎"], "", "󾔣", ["phone", "telephone"], 55, 49, 15, 0
        ],
        "2611-fe0f": [
            ["☑️", "☑"], "", "󾮋", ["ballot_box_with_check"], 55, 50, 15, 0
        ],
        2614: [
            ["☔"], "", "󾀂", ["umbrella_with_rain_drops"], 55, 51, 15, 0
        ],
        2615: [
            ["☕"], "", "󾦁", ["coffee"], 55, 52, 15, 0
        ],
        "2618-fe0f": [
            ["☘️", "☘"], "", "", ["shamrock"], 55, 53, 15, 0
        ],
        "261d-fe0f": [
            ["☝️", "☝"], "", "󾮘", ["point_up"], 55, 54, 15, 0
        ],
        "2620-fe0f": [
            ["☠️", "☠"], "", "", ["skull_and_crossbones"], 56, 0, 15, 0
        ],
        "2622-fe0f": [
            ["☢️", "☢"], "", "", ["radioactive_sign"], 56, 1, 15, 0
        ],
        "2623-fe0f": [
            ["☣️", "☣"], "", "", ["biohazard_sign"], 56, 2, 15, 0
        ],
        "2626-fe0f": [
            ["☦️", "☦"], "", "", ["orthodox_cross"], 56, 3, 15, 0
        ],
        "262a-fe0f": [
            ["☪️", "☪"], "", "", ["star_and_crescent"], 56, 4, 15, 0
        ],
        "262e-fe0f": [
            ["☮️", "☮"], "", "", ["peace_symbol"], 56, 5, 15, 0
        ],
        "262f-fe0f": [
            ["☯️", "☯"], "", "", ["yin_yang"], 56, 6, 15, 0
        ],
        "2638-fe0f": [
            ["☸️", "☸"], "", "", ["wheel_of_dharma"], 56, 7, 15, 0
        ],
        "2639-fe0f": [
            ["☹️", "☹"], "", "", ["white_frowning_face"], 56, 8, 15, 0
        ],
        "263a-fe0f": [
            ["☺️", "☺"], "", "󾌶", ["relaxed"], 56, 9, 15, 0
        ],
        "2640-fe0f": [
            ["♀️", "♀"], "", "", ["female_sign"], 56, 10, 14, 0
        ],
        "2642-fe0f": [
            ["♂️", "♂"], "", "", ["male_sign"], 56, 11, 14, 0
        ],
        2648: [
            ["♈"], "", "󾀫", ["aries"], 56, 12, 15, 0
        ],
        2649: [
            ["♉"], "", "󾀬", ["taurus"], 56, 13, 15, 0
        ],
        "264a": [
            ["♊"], "", "󾀭", ["gemini"], 56, 14, 15, 0
        ],
        "264b": [
            ["♋"], "", "󾀮", ["cancer"], 56, 15, 15, 0
        ],
        "264c": [
            ["♌"], "", "󾀯", ["leo"], 56, 16, 15, 0
        ],
        "264d": [
            ["♍"], "", "󾀰", ["virgo"], 56, 17, 15, 0
        ],
        "264e": [
            ["♎"], "", "󾀱", ["libra"], 56, 18, 15, 0
        ],
        "264f": [
            ["♏"], "", "󾀲", ["scorpius"], 56, 19, 15, 0
        ],
        2650: [
            ["♐"], "", "󾀳", ["sagittarius"], 56, 20, 15, 0
        ],
        2651: [
            ["♑"], "", "󾀴", ["capricorn"], 56, 21, 15, 0
        ],
        2652: [
            ["♒"], "", "󾀵", ["aquarius"], 56, 22, 15, 0
        ],
        2653: [
            ["♓"], "", "󾀶", ["pisces"], 56, 23, 15, 0
        ],
        "265f-fe0f": [
            ["♟️", "♟"], "", "", ["chess_pawn"], 56, 24, 15, 0
        ],
        "2660-fe0f": [
            ["♠️", "♠"], "", "󾬛", ["spades"], 56, 25, 15, 0
        ],
        "2663-fe0f": [
            ["♣️", "♣"], "", "󾬝", ["clubs"], 56, 26, 15, 0
        ],
        "2665-fe0f": [
            ["♥️", "♥"], "", "󾬚", ["hearts"], 56, 27, 15, 0
        ],
        "2666-fe0f": [
            ["♦️", "♦"], "", "󾬜", ["diamonds"], 56, 28, 15, 0
        ],
        "2668-fe0f": [
            ["♨️", "♨"], "", "󾟺", ["hotsprings"], 56, 29, 15, 0
        ],
        "267b-fe0f": [
            ["♻️", "♻"], "", "󾬬", ["recycle"], 56, 30, 15, 0
        ],
        "267e-fe0f": [
            ["♾️", "♾"], "", "", ["infinity"], 56, 31, 15, 0
        ],
        "267f": [
            ["♿"], "", "󾬠", ["wheelchair"], 56, 32, 15, 0
        ],
        "2692-fe0f": [
            ["⚒️", "⚒"], "", "", ["hammer_and_pick"], 56, 33, 15, 0
        ],
        2693: [
            ["⚓"], "", "󾓁", ["anchor"], 56, 34, 15, 0
        ],
        "2694-fe0f": [
            ["⚔️", "⚔"], "", "", ["crossed_swords"], 56, 35, 15, 0
        ],
        "2695-fe0f": [
            ["⚕️", "⚕"], "", "", ["medical_symbol", "staff_of_aesculapius"], 56, 36, 14, 0
        ],
        "2696-fe0f": [
            ["⚖️", "⚖"], "", "", ["scales"], 56, 37, 15, 0
        ],
        "2697-fe0f": [
            ["⚗️", "⚗"], "", "", ["alembic"], 56, 38, 15, 0
        ],
        "2699-fe0f": [
            ["⚙️", "⚙"], "", "", ["gear"], 56, 39, 15, 0
        ],
        "269b-fe0f": [
            ["⚛️", "⚛"], "", "", ["atom_symbol"], 56, 40, 15, 0
        ],
        "269c-fe0f": [
            ["⚜️", "⚜"], "", "", ["fleur_de_lis"], 56, 41, 15, 0
        ],
        "26a0-fe0f": [
            ["⚠️", "⚠"], "", "󾬣", ["warning"], 56, 42, 15, 0
        ],
        "26a1": [
            ["⚡"], "", "󾀄", ["zap"], 56, 43, 15, 0
        ],
        "26a7-fe0f": [
            ["⚧️", "⚧"], "", "", ["transgender_symbol"], 56, 44, 15, 0
        ],
        "26aa": [
            ["⚪"], "", "󾭥", ["white_circle"], 56, 45, 15, 0
        ],
        "26ab": [
            ["⚫"], "", "󾭦", ["black_circle"], 56, 46, 15, 0
        ],
        "26b0-fe0f": [
            ["⚰️", "⚰"], "", "", ["coffin"], 56, 47, 15, 0
        ],
        "26b1-fe0f": [
            ["⚱️", "⚱"], "", "", ["funeral_urn"], 56, 48, 15, 0
        ],
        "26bd": [
            ["⚽"], "", "󾟔", ["soccer"], 56, 49, 15, 0
        ],
        "26be": [
            ["⚾"], "", "󾟑", ["baseball"], 56, 50, 15, 0
        ],
        "26c4": [
            ["⛄"], "", "󾀃", ["snowman_without_snow"], 56, 51, 15, 0
        ],
        "26c5": [
            ["⛅"], "", "󾀏", ["partly_sunny"], 56, 52, 15, 0
        ],
        "26c8-fe0f": [
            ["⛈️", "⛈"], "", "", ["thunder_cloud_and_rain"], 56, 53, 15, 0
        ],
        "26ce": [
            ["⛎"], "", "󾀷", ["ophiuchus"], 56, 54, 15, 0
        ],
        "26cf-fe0f": [
            ["⛏️", "⛏"], "", "", ["pick"], 56, 55, 15, 0
        ],
        "26d1-fe0f": [
            ["⛑️", "⛑"], "", "", ["helmet_with_white_cross"], 56, 56, 15, 0
        ],
        "26d3-fe0f": [
            ["⛓️", "⛓"], "", "", ["chains"], 56, 57, 15, 0
        ],
        "26d4": [
            ["⛔"], "", "󾬦", ["no_entry"], 56, 58, 15, 0
        ],
        "26e9-fe0f": [
            ["⛩️", "⛩"], "", "", ["shinto_shrine"], 56, 59, 15, 0
        ],
        "26ea": [
            ["⛪"], "", "󾒻", ["church"], 57, 0, 15, 0
        ],
        "26f0-fe0f": [
            ["⛰️", "⛰"], "", "", ["mountain"], 57, 1, 15, 0
        ],
        "26f1-fe0f": [
            ["⛱️", "⛱"], "", "", ["umbrella_on_ground"], 57, 2, 15, 0
        ],
        "26f2": [
            ["⛲"], "", "󾒼", ["fountain"], 57, 3, 15, 0
        ],
        "26f3": [
            ["⛳"], "", "󾟒", ["golf"], 57, 4, 15, 0
        ],
        "26f4-fe0f": [
            ["⛴️", "⛴"], "", "", ["ferry"], 57, 5, 15, 0
        ],
        "26f5": [
            ["⛵"], "", "󾟪", ["boat", "sailboat"], 57, 6, 15, 0
        ],
        "26f7-fe0f": [
            ["⛷️", "⛷"], "", "", ["skier"], 57, 7, 15, 0
        ],
        "26f8-fe0f": [
            ["⛸️", "⛸"], "", "", ["ice_skate"], 57, 8, 15, 0
        ],
        "26f9-fe0f-200d-2640-fe0f": [
            ["⛹️‍♀️"], "", "", ["woman-bouncing-ball"], 57, 9, 7, 0
        ],
        "26f9-fe0f-200d-2642-fe0f": [
            ["⛹️‍♂️", "⛹️", "⛹"], "", "", ["man-bouncing-ball", "person_with_ball"], 57, 15, 7, 0
        ],
        "26fa": [
            ["⛺"], "", "󾟻", ["tent"], 57, 27, 15, 0
        ],
        "26fd": [
            ["⛽"], "", "󾟵", ["fuelpump"], 57, 28, 15, 0
        ],
        "2702-fe0f": [
            ["✂️", "✂"], "", "󾔾", ["scissors"], 57, 29, 15, 0
        ],
        2705: [
            ["✅"], "", "󾭊", ["white_check_mark"], 57, 30, 15, 0
        ],
        "2708-fe0f": [
            ["✈️", "✈"], "", "󾟩", ["airplane"], 57, 31, 15, 0
        ],
        "2709-fe0f": [
            ["✉️", "✉"], "", "󾔩", ["email", "envelope"], 57, 32, 15, 0
        ],
        "270a": [
            ["✊"], "", "󾮓", ["fist"], 57, 33, 15, 0
        ],
        "270b": [
            ["✋"], "", "󾮕", ["hand", "raised_hand"], 57, 39, 15, 0
        ],
        "270c-fe0f": [
            ["✌️", "✌"], "", "󾮔", ["v"], 57, 45, 15, 0
        ],
        "270d-fe0f": [
            ["✍️", "✍"], "", "", ["writing_hand"], 57, 51, 15, 0
        ],
        "270f-fe0f": [
            ["✏️", "✏"], "", "󾔹", ["pencil2"], 57, 57, 15, 0
        ],
        "2712-fe0f": [
            ["✒️", "✒"], "", "󾔶", ["black_nib"], 57, 58, 15, 0
        ],
        "2714-fe0f": [
            ["✔️", "✔"], "", "󾭉", ["heavy_check_mark"], 57, 59, 15, 0
        ],
        "2716-fe0f": [
            ["✖️", "✖"], "", "󾭓", ["heavy_multiplication_x"], 58, 0, 15, 0
        ],
        "271d-fe0f": [
            ["✝️", "✝"], "", "", ["latin_cross"], 58, 1, 15, 0
        ],
        "2721-fe0f": [
            ["✡️", "✡"], "", "", ["star_of_david"], 58, 2, 15, 0
        ],
        2728: [
            ["✨"], "", "󾭠", ["sparkles"], 58, 3, 15, 0
        ],
        "2733-fe0f": [
            ["✳️", "✳"], "", "󾭢", ["eight_spoked_asterisk"], 58, 4, 15, 0
        ],
        "2734-fe0f": [
            ["✴️", "✴"], "", "󾭡", ["eight_pointed_black_star"], 58, 5, 15, 0
        ],
        "2744-fe0f": [
            ["❄️", "❄"], "", "󾀎", ["snowflake"], 58, 6, 15, 0
        ],
        "2747-fe0f": [
            ["❇️", "❇"], "", "󾭷", ["sparkle"], 58, 7, 15, 0
        ],
        "274c": [
            ["❌"], "", "󾭅", ["x"], 58, 8, 15, 0
        ],
        "274e": [
            ["❎"], "", "󾭆", ["negative_squared_cross_mark"], 58, 9, 15, 0
        ],
        2753: [
            ["❓"], "", "󾬉", ["question"], 58, 10, 15, 0
        ],
        2754: [
            ["❔"], "", "󾬊", ["grey_question"], 58, 11, 15, 0
        ],
        2755: [
            ["❕"], "", "󾬋", ["grey_exclamation"], 58, 12, 15, 0
        ],
        2757: [
            ["❗"], "", "󾬄", ["exclamation", "heavy_exclamation_mark"], 58, 13, 15, 0
        ],
        "2763-fe0f": [
            ["❣️", "❣"], "", "", ["heavy_heart_exclamation_mark_ornament"], 58, 14, 15, 0
        ],
        "2764-fe0f-200d-1f525": [
            ["❤️‍🔥", "❤‍🔥"], "", "", ["heart_on_fire"], 58, 15, 7, 0
        ],
        "2764-fe0f-200d-1fa79": [
            ["❤️‍🩹", "❤‍🩹"], "", "", ["mending_heart"], 58, 16, 7, 0
        ],
        "2764-fe0f": [
            ["❤️", "❤"], "", "󾬌", ["heart"], 58, 17, 15, 0, "<3"
        ],
        2795: [
            ["➕"], "", "󾭑", ["heavy_plus_sign"], 58, 18, 15, 0
        ],
        2796: [
            ["➖"], "", "󾭒", ["heavy_minus_sign"], 58, 19, 15, 0
        ],
        2797: [
            ["➗"], "", "󾭔", ["heavy_division_sign"], 58, 20, 15, 0
        ],
        "27a1-fe0f": [
            ["➡️", "➡"], "", "󾫺", ["arrow_right"], 58, 21, 15, 0
        ],
        "27b0": [
            ["➰"], "", "󾬈", ["curly_loop"], 58, 22, 15, 0
        ],
        "27bf": [
            ["➿"], "", "󾠫", ["loop"], 58, 23, 15, 0
        ],
        "2934-fe0f": [
            ["⤴️", "⤴"], "", "󾫴", ["arrow_heading_up"], 58, 24, 15, 0
        ],
        "2935-fe0f": [
            ["⤵️", "⤵"], "", "󾫵", ["arrow_heading_down"], 58, 25, 15, 0
        ],
        "2b05-fe0f": [
            ["⬅️", "⬅"], "", "󾫻", ["arrow_left"], 58, 26, 15, 0
        ],
        "2b06-fe0f": [
            ["⬆️", "⬆"], "", "󾫸", ["arrow_up"], 58, 27, 15, 0
        ],
        "2b07-fe0f": [
            ["⬇️", "⬇"], "", "󾫹", ["arrow_down"], 58, 28, 15, 0
        ],
        "2b1b": [
            ["⬛"], "", "󾭬", ["black_large_square"], 58, 29, 15, 0
        ],
        "2b1c": [
            ["⬜"], "", "󾭫", ["white_large_square"], 58, 30, 15, 0
        ],
        "2b50": [
            ["⭐"], "", "󾭨", ["star"], 58, 31, 15, 0
        ],
        "2b55": [
            ["⭕"], "", "󾭄", ["o"], 58, 32, 15, 0
        ],
        "3030-fe0f": [
            ["〰️", "〰"], "", "󾬇", ["wavy_dash"], 58, 33, 15, 0
        ],
        "303d-fe0f": [
            ["〽️", "〽"], "", "󾠛", ["part_alternation_mark"], 58, 34, 15, 0
        ],
        "3297-fe0f": [
            ["㊗️", "㊗"], "", "󾭃", ["congratulations"], 58, 35, 15, 0
        ],
        "3299-fe0f": [
            ["㊙️", "㊙"], "", "󾬫", ["secret"], 58, 36, 15, 0
        ]
    }, f.prototype.emoticons_data = {
        ":o)": "monkey_face",
        "</3": "broken_heart",
        "=)": "smiley",
        "=-)": "smiley",
        "C:": "smile",
        "c:": "smile",
        ":D": "smile",
        ":-D": "smile",
        ":>": "laughing",
        ":->": "laughing",
        ";)": "wink",
        ";-)": "wink",
        "8)": "sunglasses",
        ":|": "neutral_face",
        ":-|": "neutral_face",
        ":\\": "confused",
        ":-\\": "confused",
        ":/": "confused",
        ":-/": "confused",
        ":*": "kissing_heart",
        ":-*": "kissing_heart",
        ":p": "stuck_out_tongue",
        ":-p": "stuck_out_tongue",
        ":P": "stuck_out_tongue",
        ":-P": "stuck_out_tongue",
        ":b": "stuck_out_tongue",
        ":-b": "stuck_out_tongue",
        ";p": "stuck_out_tongue_winking_eye",
        ";-p": "stuck_out_tongue_winking_eye",
        ";b": "stuck_out_tongue_winking_eye",
        ";-b": "stuck_out_tongue_winking_eye",
        ";P": "stuck_out_tongue_winking_eye",
        ";-P": "stuck_out_tongue_winking_eye",
        "):": "disappointed",
        ":(": "disappointed",
        ":-(": "disappointed",
        ">:(": "angry",
        ">:-(": "angry",
        ":'(": "cry",
        "D:": "anguished",
        ":o": "open_mouth",
        ":-o": "open_mouth",
        ":O": "open_mouth",
        ":-O": "open_mouth",
        ":)": "slightly_smiling_face",
        "(:": "slightly_smiling_face",
        ":-)": "slightly_smiling_face",
        "<3": "heart"
    }, f.prototype.variations_data = {
        "1f385": {
            "1f3fb": ["1f385-1f3fb", 7, 16, 15, ["🎅🏻"]],
            "1f3fc": ["1f385-1f3fc", 7, 17, 15, ["🎅🏼"]],
            "1f3fd": ["1f385-1f3fd", 7, 18, 15, ["🎅🏽"]],
            "1f3fe": ["1f385-1f3fe", 7, 19, 15, ["🎅🏾"]],
            "1f3ff": ["1f385-1f3ff", 7, 20, 15, ["🎅🏿"]]
        },
        "1f3c2": {
            "1f3fb": ["1f3c2-1f3fb", 8, 17, 15, ["🏂🏻"]],
            "1f3fc": ["1f3c2-1f3fc", 8, 18, 15, ["🏂🏼"]],
            "1f3fd": ["1f3c2-1f3fd", 8, 19, 15, ["🏂🏽"]],
            "1f3fe": ["1f3c2-1f3fe", 8, 20, 15, ["🏂🏾"]],
            "1f3ff": ["1f3c2-1f3ff", 8, 21, 15, ["🏂🏿"]]
        },
        "1f3c3-200d-2640-fe0f": {
            "1f3fb": ["1f3c3-1f3fb-200d-2640-fe0f", 8, 23, 15, ["🏃🏻‍♀️"]],
            "1f3fc": ["1f3c3-1f3fc-200d-2640-fe0f", 8, 24, 15, ["🏃🏼‍♀️"]],
            "1f3fd": ["1f3c3-1f3fd-200d-2640-fe0f", 8, 25, 15, ["🏃🏽‍♀️"]],
            "1f3fe": ["1f3c3-1f3fe-200d-2640-fe0f", 8, 26, 15, ["🏃🏾‍♀️"]],
            "1f3ff": ["1f3c3-1f3ff-200d-2640-fe0f", 8, 27, 15, ["🏃🏿‍♀️"]]
        },
        "1f3c3-200d-2642-fe0f": {
            "1f3fb": ["1f3c3-1f3fb-200d-2642-fe0f", 8, 29, 15, ["🏃🏻‍♂️", "🏃🏻"]],
            "1f3fc": ["1f3c3-1f3fc-200d-2642-fe0f", 8, 30, 15, ["🏃🏼‍♂️", "🏃🏼"]],
            "1f3fd": ["1f3c3-1f3fd-200d-2642-fe0f", 8, 31, 15, ["🏃🏽‍♂️", "🏃🏽"]],
            "1f3fe": ["1f3c3-1f3fe-200d-2642-fe0f", 8, 32, 15, ["🏃🏾‍♂️", "🏃🏾"]],
            "1f3ff": ["1f3c3-1f3ff-200d-2642-fe0f", 8, 33, 15, ["🏃🏿‍♂️", "🏃🏿"]]
        },
        "1f3c4-200d-2640-fe0f": {
            "1f3fb": ["1f3c4-1f3fb-200d-2640-fe0f", 8, 41, 15, ["🏄🏻‍♀️"]],
            "1f3fc": ["1f3c4-1f3fc-200d-2640-fe0f", 8, 42, 15, ["🏄🏼‍♀️"]],
            "1f3fd": ["1f3c4-1f3fd-200d-2640-fe0f", 8, 43, 15, ["🏄🏽‍♀️"]],
            "1f3fe": ["1f3c4-1f3fe-200d-2640-fe0f", 8, 44, 15, ["🏄🏾‍♀️"]],
            "1f3ff": ["1f3c4-1f3ff-200d-2640-fe0f", 8, 45, 15, ["🏄🏿‍♀️"]]
        },
        "1f3c4-200d-2642-fe0f": {
            "1f3fb": ["1f3c4-1f3fb-200d-2642-fe0f", 8, 47, 15, ["🏄🏻‍♂️", "🏄🏻"]],
            "1f3fc": ["1f3c4-1f3fc-200d-2642-fe0f", 8, 48, 15, ["🏄🏼‍♂️", "🏄🏼"]],
            "1f3fd": ["1f3c4-1f3fd-200d-2642-fe0f", 8, 49, 15, ["🏄🏽‍♂️", "🏄🏽"]],
            "1f3fe": ["1f3c4-1f3fe-200d-2642-fe0f", 8, 50, 15, ["🏄🏾‍♂️", "🏄🏾"]],
            "1f3ff": ["1f3c4-1f3ff-200d-2642-fe0f", 8, 51, 15, ["🏄🏿‍♂️", "🏄🏿"]]
        },
        "1f3c7": {
            "1f3fb": ["1f3c7-1f3fb", 9, 1, 15, ["🏇🏻"]],
            "1f3fc": ["1f3c7-1f3fc", 9, 2, 15, ["🏇🏼"]],
            "1f3fd": ["1f3c7-1f3fd", 9, 3, 15, ["🏇🏽"]],
            "1f3fe": ["1f3c7-1f3fe", 9, 4, 15, ["🏇🏾"]],
            "1f3ff": ["1f3c7-1f3ff", 9, 5, 15, ["🏇🏿"]]
        },
        "1f3ca-200d-2640-fe0f": {
            "1f3fb": ["1f3ca-1f3fb-200d-2640-fe0f", 9, 9, 15, ["🏊🏻‍♀️"]],
            "1f3fc": ["1f3ca-1f3fc-200d-2640-fe0f", 9, 10, 15, ["🏊🏼‍♀️"]],
            "1f3fd": ["1f3ca-1f3fd-200d-2640-fe0f", 9, 11, 15, ["🏊🏽‍♀️"]],
            "1f3fe": ["1f3ca-1f3fe-200d-2640-fe0f", 9, 12, 15, ["🏊🏾‍♀️"]],
            "1f3ff": ["1f3ca-1f3ff-200d-2640-fe0f", 9, 13, 15, ["🏊🏿‍♀️"]]
        },
        "1f3ca-200d-2642-fe0f": {
            "1f3fb": ["1f3ca-1f3fb-200d-2642-fe0f", 9, 15, 15, ["🏊🏻‍♂️", "🏊🏻"]],
            "1f3fc": ["1f3ca-1f3fc-200d-2642-fe0f", 9, 16, 15, ["🏊🏼‍♂️", "🏊🏼"]],
            "1f3fd": ["1f3ca-1f3fd-200d-2642-fe0f", 9, 17, 15, ["🏊🏽‍♂️", "🏊🏽"]],
            "1f3fe": ["1f3ca-1f3fe-200d-2642-fe0f", 9, 18, 15, ["🏊🏾‍♂️", "🏊🏾"]],
            "1f3ff": ["1f3ca-1f3ff-200d-2642-fe0f", 9, 19, 15, ["🏊🏿‍♂️", "🏊🏿"]]
        },
        "1f3cb-fe0f-200d-2640-fe0f": {
            "1f3fb": ["1f3cb-1f3fb-200d-2640-fe0f", 9, 27, 15, ["🏋🏻‍♀️"]],
            "1f3fc": ["1f3cb-1f3fc-200d-2640-fe0f", 9, 28, 15, ["🏋🏼‍♀️"]],
            "1f3fd": ["1f3cb-1f3fd-200d-2640-fe0f", 9, 29, 15, ["🏋🏽‍♀️"]],
            "1f3fe": ["1f3cb-1f3fe-200d-2640-fe0f", 9, 30, 15, ["🏋🏾‍♀️"]],
            "1f3ff": ["1f3cb-1f3ff-200d-2640-fe0f", 9, 31, 15, ["🏋🏿‍♀️"]]
        },
        "1f3cb-fe0f-200d-2642-fe0f": {
            "1f3fb": ["1f3cb-1f3fb-200d-2642-fe0f", 9, 33, 15, ["🏋🏻‍♂️", "🏋🏻"]],
            "1f3fc": ["1f3cb-1f3fc-200d-2642-fe0f", 9, 34, 15, ["🏋🏼‍♂️", "🏋🏼"]],
            "1f3fd": ["1f3cb-1f3fd-200d-2642-fe0f", 9, 35, 15, ["🏋🏽‍♂️", "🏋🏽"]],
            "1f3fe": ["1f3cb-1f3fe-200d-2642-fe0f", 9, 36, 15, ["🏋🏾‍♂️", "🏋🏾"]],
            "1f3ff": ["1f3cb-1f3ff-200d-2642-fe0f", 9, 37, 15, ["🏋🏿‍♂️", "🏋🏿"]]
        },
        "1f3cc-fe0f-200d-2640-fe0f": {
            "1f3fb": ["1f3cc-1f3fb-200d-2640-fe0f", 9, 45, 15, ["🏌🏻‍♀️"]],
            "1f3fc": ["1f3cc-1f3fc-200d-2640-fe0f", 9, 46, 15, ["🏌🏼‍♀️"]],
            "1f3fd": ["1f3cc-1f3fd-200d-2640-fe0f", 9, 47, 15, ["🏌🏽‍♀️"]],
            "1f3fe": ["1f3cc-1f3fe-200d-2640-fe0f", 9, 48, 15, ["🏌🏾‍♀️"]],
            "1f3ff": ["1f3cc-1f3ff-200d-2640-fe0f", 9, 49, 15, ["🏌🏿‍♀️"]]
        },
        "1f3cc-fe0f-200d-2642-fe0f": {
            "1f3fb": ["1f3cc-1f3fb-200d-2642-fe0f", 9, 51, 15, ["🏌🏻‍♂️", "🏌🏻"]],
            "1f3fc": ["1f3cc-1f3fc-200d-2642-fe0f", 9, 52, 15, ["🏌🏼‍♂️", "🏌🏼"]],
            "1f3fd": ["1f3cc-1f3fd-200d-2642-fe0f", 9, 53, 15, ["🏌🏽‍♂️", "🏌🏽"]],
            "1f3fe": ["1f3cc-1f3fe-200d-2642-fe0f", 9, 54, 15, ["🏌🏾‍♂️", "🏌🏾"]],
            "1f3ff": ["1f3cc-1f3ff-200d-2642-fe0f", 9, 55, 15, ["🏌🏿‍♂️", "🏌🏿"]]
        },
        "1f442": {
            "1f3fb": ["1f442-1f3fb", 12, 7, 15, ["👂🏻"]],
            "1f3fc": ["1f442-1f3fc", 12, 8, 15, ["👂🏼"]],
            "1f3fd": ["1f442-1f3fd", 12, 9, 15, ["👂🏽"]],
            "1f3fe": ["1f442-1f3fe", 12, 10, 15, ["👂🏾"]],
            "1f3ff": ["1f442-1f3ff", 12, 11, 15, ["👂🏿"]]
        },
        "1f443": {
            "1f3fb": ["1f443-1f3fb", 12, 13, 15, ["👃🏻"]],
            "1f3fc": ["1f443-1f3fc", 12, 14, 15, ["👃🏼"]],
            "1f3fd": ["1f443-1f3fd", 12, 15, 15, ["👃🏽"]],
            "1f3fe": ["1f443-1f3fe", 12, 16, 15, ["👃🏾"]],
            "1f3ff": ["1f443-1f3ff", 12, 17, 15, ["👃🏿"]]
        },
        "1f446": {
            "1f3fb": ["1f446-1f3fb", 12, 21, 15, ["👆🏻"]],
            "1f3fc": ["1f446-1f3fc", 12, 22, 15, ["👆🏼"]],
            "1f3fd": ["1f446-1f3fd", 12, 23, 15, ["👆🏽"]],
            "1f3fe": ["1f446-1f3fe", 12, 24, 15, ["👆🏾"]],
            "1f3ff": ["1f446-1f3ff", 12, 25, 15, ["👆🏿"]]
        },
        "1f447": {
            "1f3fb": ["1f447-1f3fb", 12, 27, 15, ["👇🏻"]],
            "1f3fc": ["1f447-1f3fc", 12, 28, 15, ["👇🏼"]],
            "1f3fd": ["1f447-1f3fd", 12, 29, 15, ["👇🏽"]],
            "1f3fe": ["1f447-1f3fe", 12, 30, 15, ["👇🏾"]],
            "1f3ff": ["1f447-1f3ff", 12, 31, 15, ["👇🏿"]]
        },
        "1f448": {
            "1f3fb": ["1f448-1f3fb", 12, 33, 15, ["👈🏻"]],
            "1f3fc": ["1f448-1f3fc", 12, 34, 15, ["👈🏼"]],
            "1f3fd": ["1f448-1f3fd", 12, 35, 15, ["👈🏽"]],
            "1f3fe": ["1f448-1f3fe", 12, 36, 15, ["👈🏾"]],
            "1f3ff": ["1f448-1f3ff", 12, 37, 15, ["👈🏿"]]
        },
        "1f449": {
            "1f3fb": ["1f449-1f3fb", 12, 39, 15, ["👉🏻"]],
            "1f3fc": ["1f449-1f3fc", 12, 40, 15, ["👉🏼"]],
            "1f3fd": ["1f449-1f3fd", 12, 41, 15, ["👉🏽"]],
            "1f3fe": ["1f449-1f3fe", 12, 42, 15, ["👉🏾"]],
            "1f3ff": ["1f449-1f3ff", 12, 43, 15, ["👉🏿"]]
        },
        "1f44a": {
            "1f3fb": ["1f44a-1f3fb", 12, 45, 15, ["👊🏻"]],
            "1f3fc": ["1f44a-1f3fc", 12, 46, 15, ["👊🏼"]],
            "1f3fd": ["1f44a-1f3fd", 12, 47, 15, ["👊🏽"]],
            "1f3fe": ["1f44a-1f3fe", 12, 48, 15, ["👊🏾"]],
            "1f3ff": ["1f44a-1f3ff", 12, 49, 15, ["👊🏿"]]
        },
        "1f44b": {
            "1f3fb": ["1f44b-1f3fb", 12, 51, 15, ["👋🏻"]],
            "1f3fc": ["1f44b-1f3fc", 12, 52, 15, ["👋🏼"]],
            "1f3fd": ["1f44b-1f3fd", 12, 53, 15, ["👋🏽"]],
            "1f3fe": ["1f44b-1f3fe", 12, 54, 15, ["👋🏾"]],
            "1f3ff": ["1f44b-1f3ff", 12, 55, 15, ["👋🏿"]]
        },
        "1f44c": {
            "1f3fb": ["1f44c-1f3fb", 12, 57, 15, ["👌🏻"]],
            "1f3fc": ["1f44c-1f3fc", 12, 58, 15, ["👌🏼"]],
            "1f3fd": ["1f44c-1f3fd", 12, 59, 15, ["👌🏽"]],
            "1f3fe": ["1f44c-1f3fe", 13, 0, 15, ["👌🏾"]],
            "1f3ff": ["1f44c-1f3ff", 13, 1, 15, ["👌🏿"]]
        },
        "1f44d": {
            "1f3fb": ["1f44d-1f3fb", 13, 3, 15, ["👍🏻"]],
            "1f3fc": ["1f44d-1f3fc", 13, 4, 15, ["👍🏼"]],
            "1f3fd": ["1f44d-1f3fd", 13, 5, 15, ["👍🏽"]],
            "1f3fe": ["1f44d-1f3fe", 13, 6, 15, ["👍🏾"]],
            "1f3ff": ["1f44d-1f3ff", 13, 7, 15, ["👍🏿"]]
        },
        "1f44e": {
            "1f3fb": ["1f44e-1f3fb", 13, 9, 15, ["👎🏻"]],
            "1f3fc": ["1f44e-1f3fc", 13, 10, 15, ["👎🏼"]],
            "1f3fd": ["1f44e-1f3fd", 13, 11, 15, ["👎🏽"]],
            "1f3fe": ["1f44e-1f3fe", 13, 12, 15, ["👎🏾"]],
            "1f3ff": ["1f44e-1f3ff", 13, 13, 15, ["👎🏿"]]
        },
        "1f44f": {
            "1f3fb": ["1f44f-1f3fb", 13, 15, 15, ["👏🏻"]],
            "1f3fc": ["1f44f-1f3fc", 13, 16, 15, ["👏🏼"]],
            "1f3fd": ["1f44f-1f3fd", 13, 17, 15, ["👏🏽"]],
            "1f3fe": ["1f44f-1f3fe", 13, 18, 15, ["👏🏾"]],
            "1f3ff": ["1f44f-1f3ff", 13, 19, 15, ["👏🏿"]]
        },
        "1f450": {
            "1f3fb": ["1f450-1f3fb", 13, 21, 15, ["👐🏻"]],
            "1f3fc": ["1f450-1f3fc", 13, 22, 15, ["👐🏼"]],
            "1f3fd": ["1f450-1f3fd", 13, 23, 15, ["👐🏽"]],
            "1f3fe": ["1f450-1f3fe", 13, 24, 15, ["👐🏾"]],
            "1f3ff": ["1f450-1f3ff", 13, 25, 15, ["👐🏿"]]
        },
        "1f466": {
            "1f3fb": ["1f466-1f3fb", 13, 48, 15, ["👦🏻"]],
            "1f3fc": ["1f466-1f3fc", 13, 49, 15, ["👦🏼"]],
            "1f3fd": ["1f466-1f3fd", 13, 50, 15, ["👦🏽"]],
            "1f3fe": ["1f466-1f3fe", 13, 51, 15, ["👦🏾"]],
            "1f3ff": ["1f466-1f3ff", 13, 52, 15, ["👦🏿"]]
        },
        "1f467": {
            "1f3fb": ["1f467-1f3fb", 13, 54, 15, ["👧🏻"]],
            "1f3fc": ["1f467-1f3fc", 13, 55, 15, ["👧🏼"]],
            "1f3fd": ["1f467-1f3fd", 13, 56, 15, ["👧🏽"]],
            "1f3fe": ["1f467-1f3fe", 13, 57, 15, ["👧🏾"]],
            "1f3ff": ["1f467-1f3ff", 13, 58, 15, ["👧🏿"]]
        },
        "1f468-200d-1f33e": {
            "1f3fb": ["1f468-1f3fb-200d-1f33e", 14, 0, 15, ["👨🏻‍🌾"]],
            "1f3fc": ["1f468-1f3fc-200d-1f33e", 14, 1, 15, ["👨🏼‍🌾"]],
            "1f3fd": ["1f468-1f3fd-200d-1f33e", 14, 2, 15, ["👨🏽‍🌾"]],
            "1f3fe": ["1f468-1f3fe-200d-1f33e", 14, 3, 15, ["👨🏾‍🌾"]],
            "1f3ff": ["1f468-1f3ff-200d-1f33e", 14, 4, 15, ["👨🏿‍🌾"]]
        },
        "1f468-200d-1f373": {
            "1f3fb": ["1f468-1f3fb-200d-1f373", 14, 6, 15, ["👨🏻‍🍳"]],
            "1f3fc": ["1f468-1f3fc-200d-1f373", 14, 7, 15, ["👨🏼‍🍳"]],
            "1f3fd": ["1f468-1f3fd-200d-1f373", 14, 8, 15, ["👨🏽‍🍳"]],
            "1f3fe": ["1f468-1f3fe-200d-1f373", 14, 9, 15, ["👨🏾‍🍳"]],
            "1f3ff": ["1f468-1f3ff-200d-1f373", 14, 10, 15, ["👨🏿‍🍳"]]
        },
        "1f468-200d-1f37c": {
            "1f3fb": ["1f468-1f3fb-200d-1f37c", 14, 12, 15, ["👨🏻‍🍼"]],
            "1f3fc": ["1f468-1f3fc-200d-1f37c", 14, 13, 15, ["👨🏼‍🍼"]],
            "1f3fd": ["1f468-1f3fd-200d-1f37c", 14, 14, 15, ["👨🏽‍🍼"]],
            "1f3fe": ["1f468-1f3fe-200d-1f37c", 14, 15, 15, ["👨🏾‍🍼"]],
            "1f3ff": ["1f468-1f3ff-200d-1f37c", 14, 16, 15, ["👨🏿‍🍼"]]
        },
        "1f468-200d-1f393": {
            "1f3fb": ["1f468-1f3fb-200d-1f393", 14, 18, 15, ["👨🏻‍🎓"]],
            "1f3fc": ["1f468-1f3fc-200d-1f393", 14, 19, 15, ["👨🏼‍🎓"]],
            "1f3fd": ["1f468-1f3fd-200d-1f393", 14, 20, 15, ["👨🏽‍🎓"]],
            "1f3fe": ["1f468-1f3fe-200d-1f393", 14, 21, 15, ["👨🏾‍🎓"]],
            "1f3ff": ["1f468-1f3ff-200d-1f393", 14, 22, 15, ["👨🏿‍🎓"]]
        },
        "1f468-200d-1f3a4": {
            "1f3fb": ["1f468-1f3fb-200d-1f3a4", 14, 24, 15, ["👨🏻‍🎤"]],
            "1f3fc": ["1f468-1f3fc-200d-1f3a4", 14, 25, 15, ["👨🏼‍🎤"]],
            "1f3fd": ["1f468-1f3fd-200d-1f3a4", 14, 26, 15, ["👨🏽‍🎤"]],
            "1f3fe": ["1f468-1f3fe-200d-1f3a4", 14, 27, 15, ["👨🏾‍🎤"]],
            "1f3ff": ["1f468-1f3ff-200d-1f3a4", 14, 28, 15, ["👨🏿‍🎤"]]
        },
        "1f468-200d-1f3a8": {
            "1f3fb": ["1f468-1f3fb-200d-1f3a8", 14, 30, 15, ["👨🏻‍🎨"]],
            "1f3fc": ["1f468-1f3fc-200d-1f3a8", 14, 31, 15, ["👨🏼‍🎨"]],
            "1f3fd": ["1f468-1f3fd-200d-1f3a8", 14, 32, 15, ["👨🏽‍🎨"]],
            "1f3fe": ["1f468-1f3fe-200d-1f3a8", 14, 33, 15, ["👨🏾‍🎨"]],
            "1f3ff": ["1f468-1f3ff-200d-1f3a8", 14, 34, 15, ["👨🏿‍🎨"]]
        },
        "1f468-200d-1f3eb": {
            "1f3fb": ["1f468-1f3fb-200d-1f3eb", 14, 36, 15, ["👨🏻‍🏫"]],
            "1f3fc": ["1f468-1f3fc-200d-1f3eb", 14, 37, 15, ["👨🏼‍🏫"]],
            "1f3fd": ["1f468-1f3fd-200d-1f3eb", 14, 38, 15, ["👨🏽‍🏫"]],
            "1f3fe": ["1f468-1f3fe-200d-1f3eb", 14, 39, 15, ["👨🏾‍🏫"]],
            "1f3ff": ["1f468-1f3ff-200d-1f3eb", 14, 40, 15, ["👨🏿‍🏫"]]
        },
        "1f468-200d-1f3ed": {
            "1f3fb": ["1f468-1f3fb-200d-1f3ed", 14, 42, 15, ["👨🏻‍🏭"]],
            "1f3fc": ["1f468-1f3fc-200d-1f3ed", 14, 43, 15, ["👨🏼‍🏭"]],
            "1f3fd": ["1f468-1f3fd-200d-1f3ed", 14, 44, 15, ["👨🏽‍🏭"]],
            "1f3fe": ["1f468-1f3fe-200d-1f3ed", 14, 45, 15, ["👨🏾‍🏭"]],
            "1f3ff": ["1f468-1f3ff-200d-1f3ed", 14, 46, 15, ["👨🏿‍🏭"]]
        },
        "1f468-200d-1f4bb": {
            "1f3fb": ["1f468-1f3fb-200d-1f4bb", 15, 3, 15, ["👨🏻‍💻"]],
            "1f3fc": ["1f468-1f3fc-200d-1f4bb", 15, 4, 15, ["👨🏼‍💻"]],
            "1f3fd": ["1f468-1f3fd-200d-1f4bb", 15, 5, 15, ["👨🏽‍💻"]],
            "1f3fe": ["1f468-1f3fe-200d-1f4bb", 15, 6, 15, ["👨🏾‍💻"]],
            "1f3ff": ["1f468-1f3ff-200d-1f4bb", 15, 7, 15, ["👨🏿‍💻"]]
        },
        "1f468-200d-1f4bc": {
            "1f3fb": ["1f468-1f3fb-200d-1f4bc", 15, 9, 15, ["👨🏻‍💼"]],
            "1f3fc": ["1f468-1f3fc-200d-1f4bc", 15, 10, 15, ["👨🏼‍💼"]],
            "1f3fd": ["1f468-1f3fd-200d-1f4bc", 15, 11, 15, ["👨🏽‍💼"]],
            "1f3fe": ["1f468-1f3fe-200d-1f4bc", 15, 12, 15, ["👨🏾‍💼"]],
            "1f3ff": ["1f468-1f3ff-200d-1f4bc", 15, 13, 15, ["👨🏿‍💼"]]
        },
        "1f468-200d-1f527": {
            "1f3fb": ["1f468-1f3fb-200d-1f527", 15, 15, 15, ["👨🏻‍🔧"]],
            "1f3fc": ["1f468-1f3fc-200d-1f527", 15, 16, 15, ["👨🏼‍🔧"]],
            "1f3fd": ["1f468-1f3fd-200d-1f527", 15, 17, 15, ["👨🏽‍🔧"]],
            "1f3fe": ["1f468-1f3fe-200d-1f527", 15, 18, 15, ["👨🏾‍🔧"]],
            "1f3ff": ["1f468-1f3ff-200d-1f527", 15, 19, 15, ["👨🏿‍🔧"]]
        },
        "1f468-200d-1f52c": {
            "1f3fb": ["1f468-1f3fb-200d-1f52c", 15, 21, 15, ["👨🏻‍🔬"]],
            "1f3fc": ["1f468-1f3fc-200d-1f52c", 15, 22, 15, ["👨🏼‍🔬"]],
            "1f3fd": ["1f468-1f3fd-200d-1f52c", 15, 23, 15, ["👨🏽‍🔬"]],
            "1f3fe": ["1f468-1f3fe-200d-1f52c", 15, 24, 15, ["👨🏾‍🔬"]],
            "1f3ff": ["1f468-1f3ff-200d-1f52c", 15, 25, 15, ["👨🏿‍🔬"]]
        },
        "1f468-200d-1f680": {
            "1f3fb": ["1f468-1f3fb-200d-1f680", 15, 27, 15, ["👨🏻‍🚀"]],
            "1f3fc": ["1f468-1f3fc-200d-1f680", 15, 28, 15, ["👨🏼‍🚀"]],
            "1f3fd": ["1f468-1f3fd-200d-1f680", 15, 29, 15, ["👨🏽‍🚀"]],
            "1f3fe": ["1f468-1f3fe-200d-1f680", 15, 30, 15, ["👨🏾‍🚀"]],
            "1f3ff": ["1f468-1f3ff-200d-1f680", 15, 31, 15, ["👨🏿‍🚀"]]
        },
        "1f468-200d-1f692": {
            "1f3fb": ["1f468-1f3fb-200d-1f692", 15, 33, 15, ["👨🏻‍🚒"]],
            "1f3fc": ["1f468-1f3fc-200d-1f692", 15, 34, 15, ["👨🏼‍🚒"]],
            "1f3fd": ["1f468-1f3fd-200d-1f692", 15, 35, 15, ["👨🏽‍🚒"]],
            "1f3fe": ["1f468-1f3fe-200d-1f692", 15, 36, 15, ["👨🏾‍🚒"]],
            "1f3ff": ["1f468-1f3ff-200d-1f692", 15, 37, 15, ["👨🏿‍🚒"]]
        },
        "1f468-200d-1f9af": {
            "1f3fb": ["1f468-1f3fb-200d-1f9af", 15, 39, 15, ["👨🏻‍🦯"]],
            "1f3fc": ["1f468-1f3fc-200d-1f9af", 15, 40, 15, ["👨🏼‍🦯"]],
            "1f3fd": ["1f468-1f3fd-200d-1f9af", 15, 41, 15, ["👨🏽‍🦯"]],
            "1f3fe": ["1f468-1f3fe-200d-1f9af", 15, 42, 15, ["👨🏾‍🦯"]],
            "1f3ff": ["1f468-1f3ff-200d-1f9af", 15, 43, 15, ["👨🏿‍🦯"]]
        },
        "1f468-200d-1f9b0": {
            "1f3fb": ["1f468-1f3fb-200d-1f9b0", 15, 45, 15, ["👨🏻‍🦰"]],
            "1f3fc": ["1f468-1f3fc-200d-1f9b0", 15, 46, 15, ["👨🏼‍🦰"]],
            "1f3fd": ["1f468-1f3fd-200d-1f9b0", 15, 47, 15, ["👨🏽‍🦰"]],
            "1f3fe": ["1f468-1f3fe-200d-1f9b0", 15, 48, 15, ["👨🏾‍🦰"]],
            "1f3ff": ["1f468-1f3ff-200d-1f9b0", 15, 49, 15, ["👨🏿‍🦰"]]
        },
        "1f468-200d-1f9b1": {
            "1f3fb": ["1f468-1f3fb-200d-1f9b1", 15, 51, 15, ["👨🏻‍🦱"]],
            "1f3fc": ["1f468-1f3fc-200d-1f9b1", 15, 52, 15, ["👨🏼‍🦱"]],
            "1f3fd": ["1f468-1f3fd-200d-1f9b1", 15, 53, 15, ["👨🏽‍🦱"]],
            "1f3fe": ["1f468-1f3fe-200d-1f9b1", 15, 54, 15, ["👨🏾‍🦱"]],
            "1f3ff": ["1f468-1f3ff-200d-1f9b1", 15, 55, 15, ["👨🏿‍🦱"]]
        },
        "1f468-200d-1f9b2": {
            "1f3fb": ["1f468-1f3fb-200d-1f9b2", 15, 57, 15, ["👨🏻‍🦲"]],
            "1f3fc": ["1f468-1f3fc-200d-1f9b2", 15, 58, 15, ["👨🏼‍🦲"]],
            "1f3fd": ["1f468-1f3fd-200d-1f9b2", 15, 59, 15, ["👨🏽‍🦲"]],
            "1f3fe": ["1f468-1f3fe-200d-1f9b2", 16, 0, 15, ["👨🏾‍🦲"]],
            "1f3ff": ["1f468-1f3ff-200d-1f9b2", 16, 1, 15, ["👨🏿‍🦲"]]
        },
        "1f468-200d-1f9b3": {
            "1f3fb": ["1f468-1f3fb-200d-1f9b3", 16, 3, 15, ["👨🏻‍🦳"]],
            "1f3fc": ["1f468-1f3fc-200d-1f9b3", 16, 4, 15, ["👨🏼‍🦳"]],
            "1f3fd": ["1f468-1f3fd-200d-1f9b3", 16, 5, 15, ["👨🏽‍🦳"]],
            "1f3fe": ["1f468-1f3fe-200d-1f9b3", 16, 6, 15, ["👨🏾‍🦳"]],
            "1f3ff": ["1f468-1f3ff-200d-1f9b3", 16, 7, 15, ["👨🏿‍🦳"]]
        },
        "1f468-200d-1f9bc": {
            "1f3fb": ["1f468-1f3fb-200d-1f9bc", 16, 9, 15, ["👨🏻‍🦼"]],
            "1f3fc": ["1f468-1f3fc-200d-1f9bc", 16, 10, 15, ["👨🏼‍🦼"]],
            "1f3fd": ["1f468-1f3fd-200d-1f9bc", 16, 11, 15, ["👨🏽‍🦼"]],
            "1f3fe": ["1f468-1f3fe-200d-1f9bc", 16, 12, 15, ["👨🏾‍🦼"]],
            "1f3ff": ["1f468-1f3ff-200d-1f9bc", 16, 13, 15, ["👨🏿‍🦼"]]
        },
        "1f468-200d-1f9bd": {
            "1f3fb": ["1f468-1f3fb-200d-1f9bd", 16, 15, 15, ["👨🏻‍🦽"]],
            "1f3fc": ["1f468-1f3fc-200d-1f9bd", 16, 16, 15, ["👨🏼‍🦽"]],
            "1f3fd": ["1f468-1f3fd-200d-1f9bd", 16, 17, 15, ["👨🏽‍🦽"]],
            "1f3fe": ["1f468-1f3fe-200d-1f9bd", 16, 18, 15, ["👨🏾‍🦽"]],
            "1f3ff": ["1f468-1f3ff-200d-1f9bd", 16, 19, 15, ["👨🏿‍🦽"]]
        },
        "1f468-200d-2695-fe0f": {
            "1f3fb": ["1f468-1f3fb-200d-2695-fe0f", 16, 21, 15, ["👨🏻‍⚕️"]],
            "1f3fc": ["1f468-1f3fc-200d-2695-fe0f", 16, 22, 15, ["👨🏼‍⚕️"]],
            "1f3fd": ["1f468-1f3fd-200d-2695-fe0f", 16, 23, 15, ["👨🏽‍⚕️"]],
            "1f3fe": ["1f468-1f3fe-200d-2695-fe0f", 16, 24, 15, ["👨🏾‍⚕️"]],
            "1f3ff": ["1f468-1f3ff-200d-2695-fe0f", 16, 25, 15, ["👨🏿‍⚕️"]]
        },
        "1f468-200d-2696-fe0f": {
            "1f3fb": ["1f468-1f3fb-200d-2696-fe0f", 16, 27, 15, ["👨🏻‍⚖️"]],
            "1f3fc": ["1f468-1f3fc-200d-2696-fe0f", 16, 28, 15, ["👨🏼‍⚖️"]],
            "1f3fd": ["1f468-1f3fd-200d-2696-fe0f", 16, 29, 15, ["👨🏽‍⚖️"]],
            "1f3fe": ["1f468-1f3fe-200d-2696-fe0f", 16, 30, 15, ["👨🏾‍⚖️"]],
            "1f3ff": ["1f468-1f3ff-200d-2696-fe0f", 16, 31, 15, ["👨🏿‍⚖️"]]
        },
        "1f468-200d-2708-fe0f": {
            "1f3fb": ["1f468-1f3fb-200d-2708-fe0f", 16, 33, 15, ["👨🏻‍✈️"]],
            "1f3fc": ["1f468-1f3fc-200d-2708-fe0f", 16, 34, 15, ["👨🏼‍✈️"]],
            "1f3fd": ["1f468-1f3fd-200d-2708-fe0f", 16, 35, 15, ["👨🏽‍✈️"]],
            "1f3fe": ["1f468-1f3fe-200d-2708-fe0f", 16, 36, 15, ["👨🏾‍✈️"]],
            "1f3ff": ["1f468-1f3ff-200d-2708-fe0f", 16, 37, 15, ["👨🏿‍✈️"]]
        },
        "1f468-200d-2764-fe0f-200d-1f468": {
            "1f3fb-1f3fb": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb", 16, 39, 7, ["👨🏻‍❤️‍👨🏻"]],
            "1f3fb-1f3fc": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc", 16, 40, 7, ["👨🏻‍❤️‍👨🏼"]],
            "1f3fb-1f3fd": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd", 16, 41, 7, ["👨🏻‍❤️‍👨🏽"]],
            "1f3fb-1f3fe": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe", 16, 42, 7, ["👨🏻‍❤️‍👨🏾"]],
            "1f3fb-1f3ff": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff", 16, 43, 7, ["👨🏻‍❤️‍👨🏿"]],
            "1f3fc-1f3fb": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb", 16, 44, 7, ["👨🏼‍❤️‍👨🏻"]],
            "1f3fc-1f3fc": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc", 16, 45, 7, ["👨🏼‍❤️‍👨🏼"]],
            "1f3fc-1f3fd": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd", 16, 46, 7, ["👨🏼‍❤️‍👨🏽"]],
            "1f3fc-1f3fe": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe", 16, 47, 7, ["👨🏼‍❤️‍👨🏾"]],
            "1f3fc-1f3ff": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff", 16, 48, 7, ["👨🏼‍❤️‍👨🏿"]],
            "1f3fd-1f3fb": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb", 16, 49, 7, ["👨🏽‍❤️‍👨🏻"]],
            "1f3fd-1f3fc": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc", 16, 50, 7, ["👨🏽‍❤️‍👨🏼"]],
            "1f3fd-1f3fd": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd", 16, 51, 7, ["👨🏽‍❤️‍👨🏽"]],
            "1f3fd-1f3fe": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe", 16, 52, 7, ["👨🏽‍❤️‍👨🏾"]],
            "1f3fd-1f3ff": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff", 16, 53, 7, ["👨🏽‍❤️‍👨🏿"]],
            "1f3fe-1f3fb": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb", 16, 54, 7, ["👨🏾‍❤️‍👨🏻"]],
            "1f3fe-1f3fc": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc", 16, 55, 7, ["👨🏾‍❤️‍👨🏼"]],
            "1f3fe-1f3fd": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd", 16, 56, 7, ["👨🏾‍❤️‍👨🏽"]],
            "1f3fe-1f3fe": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe", 16, 57, 7, ["👨🏾‍❤️‍👨🏾"]],
            "1f3fe-1f3ff": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff", 16, 58, 7, ["👨🏾‍❤️‍👨🏿"]],
            "1f3ff-1f3fb": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb", 16, 59, 7, ["👨🏿‍❤️‍👨🏻"]],
            "1f3ff-1f3fc": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc", 17, 0, 7, ["👨🏿‍❤️‍👨🏼"]],
            "1f3ff-1f3fd": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd", 17, 1, 7, ["👨🏿‍❤️‍👨🏽"]],
            "1f3ff-1f3fe": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe", 17, 2, 7, ["👨🏿‍❤️‍👨🏾"]],
            "1f3ff-1f3ff": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff", 17, 3, 7, ["👨🏿‍❤️‍👨🏿"]]
        },
        "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": {
            "1f3fb-1f3fb": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 17, 5, 7, ["👨🏻‍❤️‍💋‍👨🏻"]],
            "1f3fb-1f3fc": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 6, 7, ["👨🏻‍❤️‍💋‍👨🏼"]],
            "1f3fb-1f3fd": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 7, 7, ["👨🏻‍❤️‍💋‍👨🏽"]],
            "1f3fb-1f3fe": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 8, 7, ["👨🏻‍❤️‍💋‍👨🏾"]],
            "1f3fb-1f3ff": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 9, 7, ["👨🏻‍❤️‍💋‍👨🏿"]],
            "1f3fc-1f3fb": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 17, 10, 7, ["👨🏼‍❤️‍💋‍👨🏻"]],
            "1f3fc-1f3fc": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 11, 7, ["👨🏼‍❤️‍💋‍👨🏼"]],
            "1f3fc-1f3fd": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 12, 7, ["👨🏼‍❤️‍💋‍👨🏽"]],
            "1f3fc-1f3fe": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 13, 7, ["👨🏼‍❤️‍💋‍👨🏾"]],
            "1f3fc-1f3ff": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 14, 7, ["👨🏼‍❤️‍💋‍👨🏿"]],
            "1f3fd-1f3fb": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 17, 15, 7, ["👨🏽‍❤️‍💋‍👨🏻"]],
            "1f3fd-1f3fc": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 16, 7, ["👨🏽‍❤️‍💋‍👨🏼"]],
            "1f3fd-1f3fd": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 17, 7, ["👨🏽‍❤️‍💋‍👨🏽"]],
            "1f3fd-1f3fe": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 18, 7, ["👨🏽‍❤️‍💋‍👨🏾"]],
            "1f3fd-1f3ff": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 19, 7, ["👨🏽‍❤️‍💋‍👨🏿"]],
            "1f3fe-1f3fb": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 17, 20, 7, ["👨🏾‍❤️‍💋‍👨🏻"]],
            "1f3fe-1f3fc": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 21, 7, ["👨🏾‍❤️‍💋‍👨🏼"]],
            "1f3fe-1f3fd": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 22, 7, ["👨🏾‍❤️‍💋‍👨🏽"]],
            "1f3fe-1f3fe": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 23, 7, ["👨🏾‍❤️‍💋‍👨🏾"]],
            "1f3fe-1f3ff": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 24, 7, ["👨🏾‍❤️‍💋‍👨🏿"]],
            "1f3ff-1f3fb": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 17, 25, 7, ["👨🏿‍❤️‍💋‍👨🏻"]],
            "1f3ff-1f3fc": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 26, 7, ["👨🏿‍❤️‍💋‍👨🏼"]],
            "1f3ff-1f3fd": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 27, 7, ["👨🏿‍❤️‍💋‍👨🏽"]],
            "1f3ff-1f3fe": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 28, 7, ["👨🏿‍❤️‍💋‍👨🏾"]],
            "1f3ff-1f3ff": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 29, 7, ["👨🏿‍❤️‍💋‍👨🏿"]]
        },
        "1f468": {
            "1f3fb": ["1f468-1f3fb", 17, 31, 15, ["👨🏻"]],
            "1f3fc": ["1f468-1f3fc", 17, 32, 15, ["👨🏼"]],
            "1f3fd": ["1f468-1f3fd", 17, 33, 15, ["👨🏽"]],
            "1f3fe": ["1f468-1f3fe", 17, 34, 15, ["👨🏾"]],
            "1f3ff": ["1f468-1f3ff", 17, 35, 15, ["👨🏿"]]
        },
        "1f469-200d-1f33e": {
            "1f3fb": ["1f469-1f3fb-200d-1f33e", 17, 37, 15, ["👩🏻‍🌾"]],
            "1f3fc": ["1f469-1f3fc-200d-1f33e", 17, 38, 15, ["👩🏼‍🌾"]],
            "1f3fd": ["1f469-1f3fd-200d-1f33e", 17, 39, 15, ["👩🏽‍🌾"]],
            "1f3fe": ["1f469-1f3fe-200d-1f33e", 17, 40, 15, ["👩🏾‍🌾"]],
            "1f3ff": ["1f469-1f3ff-200d-1f33e", 17, 41, 15, ["👩🏿‍🌾"]]
        },
        "1f469-200d-1f373": {
            "1f3fb": ["1f469-1f3fb-200d-1f373", 17, 43, 15, ["👩🏻‍🍳"]],
            "1f3fc": ["1f469-1f3fc-200d-1f373", 17, 44, 15, ["👩🏼‍🍳"]],
            "1f3fd": ["1f469-1f3fd-200d-1f373", 17, 45, 15, ["👩🏽‍🍳"]],
            "1f3fe": ["1f469-1f3fe-200d-1f373", 17, 46, 15, ["👩🏾‍🍳"]],
            "1f3ff": ["1f469-1f3ff-200d-1f373", 17, 47, 15, ["👩🏿‍🍳"]]
        },
        "1f469-200d-1f37c": {
            "1f3fb": ["1f469-1f3fb-200d-1f37c", 17, 49, 15, ["👩🏻‍🍼"]],
            "1f3fc": ["1f469-1f3fc-200d-1f37c", 17, 50, 15, ["👩🏼‍🍼"]],
            "1f3fd": ["1f469-1f3fd-200d-1f37c", 17, 51, 15, ["👩🏽‍🍼"]],
            "1f3fe": ["1f469-1f3fe-200d-1f37c", 17, 52, 15, ["👩🏾‍🍼"]],
            "1f3ff": ["1f469-1f3ff-200d-1f37c", 17, 53, 15, ["👩🏿‍🍼"]]
        },
        "1f469-200d-1f393": {
            "1f3fb": ["1f469-1f3fb-200d-1f393", 17, 55, 15, ["👩🏻‍🎓"]],
            "1f3fc": ["1f469-1f3fc-200d-1f393", 17, 56, 15, ["👩🏼‍🎓"]],
            "1f3fd": ["1f469-1f3fd-200d-1f393", 17, 57, 15, ["👩🏽‍🎓"]],
            "1f3fe": ["1f469-1f3fe-200d-1f393", 17, 58, 15, ["👩🏾‍🎓"]],
            "1f3ff": ["1f469-1f3ff-200d-1f393", 17, 59, 15, ["👩🏿‍🎓"]]
        },
        "1f469-200d-1f3a4": {
            "1f3fb": ["1f469-1f3fb-200d-1f3a4", 18, 1, 15, ["👩🏻‍🎤"]],
            "1f3fc": ["1f469-1f3fc-200d-1f3a4", 18, 2, 15, ["👩🏼‍🎤"]],
            "1f3fd": ["1f469-1f3fd-200d-1f3a4", 18, 3, 15, ["👩🏽‍🎤"]],
            "1f3fe": ["1f469-1f3fe-200d-1f3a4", 18, 4, 15, ["👩🏾‍🎤"]],
            "1f3ff": ["1f469-1f3ff-200d-1f3a4", 18, 5, 15, ["👩🏿‍🎤"]]
        },
        "1f469-200d-1f3a8": {
            "1f3fb": ["1f469-1f3fb-200d-1f3a8", 18, 7, 15, ["👩🏻‍🎨"]],
            "1f3fc": ["1f469-1f3fc-200d-1f3a8", 18, 8, 15, ["👩🏼‍🎨"]],
            "1f3fd": ["1f469-1f3fd-200d-1f3a8", 18, 9, 15, ["👩🏽‍🎨"]],
            "1f3fe": ["1f469-1f3fe-200d-1f3a8", 18, 10, 15, ["👩🏾‍🎨"]],
            "1f3ff": ["1f469-1f3ff-200d-1f3a8", 18, 11, 15, ["👩🏿‍🎨"]]
        },
        "1f469-200d-1f3eb": {
            "1f3fb": ["1f469-1f3fb-200d-1f3eb", 18, 13, 15, ["👩🏻‍🏫"]],
            "1f3fc": ["1f469-1f3fc-200d-1f3eb", 18, 14, 15, ["👩🏼‍🏫"]],
            "1f3fd": ["1f469-1f3fd-200d-1f3eb", 18, 15, 15, ["👩🏽‍🏫"]],
            "1f3fe": ["1f469-1f3fe-200d-1f3eb", 18, 16, 15, ["👩🏾‍🏫"]],
            "1f3ff": ["1f469-1f3ff-200d-1f3eb", 18, 17, 15, ["👩🏿‍🏫"]]
        },
        "1f469-200d-1f3ed": {
            "1f3fb": ["1f469-1f3fb-200d-1f3ed", 18, 19, 15, ["👩🏻‍🏭"]],
            "1f3fc": ["1f469-1f3fc-200d-1f3ed", 18, 20, 15, ["👩🏼‍🏭"]],
            "1f3fd": ["1f469-1f3fd-200d-1f3ed", 18, 21, 15, ["👩🏽‍🏭"]],
            "1f3fe": ["1f469-1f3fe-200d-1f3ed", 18, 22, 15, ["👩🏾‍🏭"]],
            "1f3ff": ["1f469-1f3ff-200d-1f3ed", 18, 23, 15, ["👩🏿‍🏭"]]
        },
        "1f469-200d-1f4bb": {
            "1f3fb": ["1f469-1f3fb-200d-1f4bb", 18, 35, 15, ["👩🏻‍💻"]],
            "1f3fc": ["1f469-1f3fc-200d-1f4bb", 18, 36, 15, ["👩🏼‍💻"]],
            "1f3fd": ["1f469-1f3fd-200d-1f4bb", 18, 37, 15, ["👩🏽‍💻"]],
            "1f3fe": ["1f469-1f3fe-200d-1f4bb", 18, 38, 15, ["👩🏾‍💻"]],
            "1f3ff": ["1f469-1f3ff-200d-1f4bb", 18, 39, 15, ["👩🏿‍💻"]]
        },
        "1f469-200d-1f4bc": {
            "1f3fb": ["1f469-1f3fb-200d-1f4bc", 18, 41, 15, ["👩🏻‍💼"]],
            "1f3fc": ["1f469-1f3fc-200d-1f4bc", 18, 42, 15, ["👩🏼‍💼"]],
            "1f3fd": ["1f469-1f3fd-200d-1f4bc", 18, 43, 15, ["👩🏽‍💼"]],
            "1f3fe": ["1f469-1f3fe-200d-1f4bc", 18, 44, 15, ["👩🏾‍💼"]],
            "1f3ff": ["1f469-1f3ff-200d-1f4bc", 18, 45, 15, ["👩🏿‍💼"]]
        },
        "1f469-200d-1f527": {
            "1f3fb": ["1f469-1f3fb-200d-1f527", 18, 47, 15, ["👩🏻‍🔧"]],
            "1f3fc": ["1f469-1f3fc-200d-1f527", 18, 48, 15, ["👩🏼‍🔧"]],
            "1f3fd": ["1f469-1f3fd-200d-1f527", 18, 49, 15, ["👩🏽‍🔧"]],
            "1f3fe": ["1f469-1f3fe-200d-1f527", 18, 50, 15, ["👩🏾‍🔧"]],
            "1f3ff": ["1f469-1f3ff-200d-1f527", 18, 51, 15, ["👩🏿‍🔧"]]
        },
        "1f469-200d-1f52c": {
            "1f3fb": ["1f469-1f3fb-200d-1f52c", 18, 53, 15, ["👩🏻‍🔬"]],
            "1f3fc": ["1f469-1f3fc-200d-1f52c", 18, 54, 15, ["👩🏼‍🔬"]],
            "1f3fd": ["1f469-1f3fd-200d-1f52c", 18, 55, 15, ["👩🏽‍🔬"]],
            "1f3fe": ["1f469-1f3fe-200d-1f52c", 18, 56, 15, ["👩🏾‍🔬"]],
            "1f3ff": ["1f469-1f3ff-200d-1f52c", 18, 57, 15, ["👩🏿‍🔬"]]
        },
        "1f469-200d-1f680": {
            "1f3fb": ["1f469-1f3fb-200d-1f680", 18, 59, 15, ["👩🏻‍🚀"]],
            "1f3fc": ["1f469-1f3fc-200d-1f680", 19, 0, 15, ["👩🏼‍🚀"]],
            "1f3fd": ["1f469-1f3fd-200d-1f680", 19, 1, 15, ["👩🏽‍🚀"]],
            "1f3fe": ["1f469-1f3fe-200d-1f680", 19, 2, 15, ["👩🏾‍🚀"]],
            "1f3ff": ["1f469-1f3ff-200d-1f680", 19, 3, 15, ["👩🏿‍🚀"]]
        },
        "1f469-200d-1f692": {
            "1f3fb": ["1f469-1f3fb-200d-1f692", 19, 5, 15, ["👩🏻‍🚒"]],
            "1f3fc": ["1f469-1f3fc-200d-1f692", 19, 6, 15, ["👩🏼‍🚒"]],
            "1f3fd": ["1f469-1f3fd-200d-1f692", 19, 7, 15, ["👩🏽‍🚒"]],
            "1f3fe": ["1f469-1f3fe-200d-1f692", 19, 8, 15, ["👩🏾‍🚒"]],
            "1f3ff": ["1f469-1f3ff-200d-1f692", 19, 9, 15, ["👩🏿‍🚒"]]
        },
        "1f469-200d-1f9af": {
            "1f3fb": ["1f469-1f3fb-200d-1f9af", 19, 11, 15, ["👩🏻‍🦯"]],
            "1f3fc": ["1f469-1f3fc-200d-1f9af", 19, 12, 15, ["👩🏼‍🦯"]],
            "1f3fd": ["1f469-1f3fd-200d-1f9af", 19, 13, 15, ["👩🏽‍🦯"]],
            "1f3fe": ["1f469-1f3fe-200d-1f9af", 19, 14, 15, ["👩🏾‍🦯"]],
            "1f3ff": ["1f469-1f3ff-200d-1f9af", 19, 15, 15, ["👩🏿‍🦯"]]
        },
        "1f469-200d-1f9b0": {
            "1f3fb": ["1f469-1f3fb-200d-1f9b0", 19, 17, 15, ["👩🏻‍🦰"]],
            "1f3fc": ["1f469-1f3fc-200d-1f9b0", 19, 18, 15, ["👩🏼‍🦰"]],
            "1f3fd": ["1f469-1f3fd-200d-1f9b0", 19, 19, 15, ["👩🏽‍🦰"]],
            "1f3fe": ["1f469-1f3fe-200d-1f9b0", 19, 20, 15, ["👩🏾‍🦰"]],
            "1f3ff": ["1f469-1f3ff-200d-1f9b0", 19, 21, 15, ["👩🏿‍🦰"]]
        },
        "1f469-200d-1f9b1": {
            "1f3fb": ["1f469-1f3fb-200d-1f9b1", 19, 23, 15, ["👩🏻‍🦱"]],
            "1f3fc": ["1f469-1f3fc-200d-1f9b1", 19, 24, 15, ["👩🏼‍🦱"]],
            "1f3fd": ["1f469-1f3fd-200d-1f9b1", 19, 25, 15, ["👩🏽‍🦱"]],
            "1f3fe": ["1f469-1f3fe-200d-1f9b1", 19, 26, 15, ["👩🏾‍🦱"]],
            "1f3ff": ["1f469-1f3ff-200d-1f9b1", 19, 27, 15, ["👩🏿‍🦱"]]
        },
        "1f469-200d-1f9b2": {
            "1f3fb": ["1f469-1f3fb-200d-1f9b2", 19, 29, 15, ["👩🏻‍🦲"]],
            "1f3fc": ["1f469-1f3fc-200d-1f9b2", 19, 30, 15, ["👩🏼‍🦲"]],
            "1f3fd": ["1f469-1f3fd-200d-1f9b2", 19, 31, 15, ["👩🏽‍🦲"]],
            "1f3fe": ["1f469-1f3fe-200d-1f9b2", 19, 32, 15, ["👩🏾‍🦲"]],
            "1f3ff": ["1f469-1f3ff-200d-1f9b2", 19, 33, 15, ["👩🏿‍🦲"]]
        },
        "1f469-200d-1f9b3": {
            "1f3fb": ["1f469-1f3fb-200d-1f9b3", 19, 35, 15, ["👩🏻‍🦳"]],
            "1f3fc": ["1f469-1f3fc-200d-1f9b3", 19, 36, 15, ["👩🏼‍🦳"]],
            "1f3fd": ["1f469-1f3fd-200d-1f9b3", 19, 37, 15, ["👩🏽‍🦳"]],
            "1f3fe": ["1f469-1f3fe-200d-1f9b3", 19, 38, 15, ["👩🏾‍🦳"]],
            "1f3ff": ["1f469-1f3ff-200d-1f9b3", 19, 39, 15, ["👩🏿‍🦳"]]
        },
        "1f469-200d-1f9bc": {
            "1f3fb": ["1f469-1f3fb-200d-1f9bc", 19, 41, 15, ["👩🏻‍🦼"]],
            "1f3fc": ["1f469-1f3fc-200d-1f9bc", 19, 42, 15, ["👩🏼‍🦼"]],
            "1f3fd": ["1f469-1f3fd-200d-1f9bc", 19, 43, 15, ["👩🏽‍🦼"]],
            "1f3fe": ["1f469-1f3fe-200d-1f9bc", 19, 44, 15, ["👩🏾‍🦼"]],
            "1f3ff": ["1f469-1f3ff-200d-1f9bc", 19, 45, 15, ["👩🏿‍🦼"]]
        },
        "1f469-200d-1f9bd": {
            "1f3fb": ["1f469-1f3fb-200d-1f9bd", 19, 47, 15, ["👩🏻‍🦽"]],
            "1f3fc": ["1f469-1f3fc-200d-1f9bd", 19, 48, 15, ["👩🏼‍🦽"]],
            "1f3fd": ["1f469-1f3fd-200d-1f9bd", 19, 49, 15, ["👩🏽‍🦽"]],
            "1f3fe": ["1f469-1f3fe-200d-1f9bd", 19, 50, 15, ["👩🏾‍🦽"]],
            "1f3ff": ["1f469-1f3ff-200d-1f9bd", 19, 51, 15, ["👩🏿‍🦽"]]
        },
        "1f469-200d-2695-fe0f": {
            "1f3fb": ["1f469-1f3fb-200d-2695-fe0f", 19, 53, 15, ["👩🏻‍⚕️"]],
            "1f3fc": ["1f469-1f3fc-200d-2695-fe0f", 19, 54, 15, ["👩🏼‍⚕️"]],
            "1f3fd": ["1f469-1f3fd-200d-2695-fe0f", 19, 55, 15, ["👩🏽‍⚕️"]],
            "1f3fe": ["1f469-1f3fe-200d-2695-fe0f", 19, 56, 15, ["👩🏾‍⚕️"]],
            "1f3ff": ["1f469-1f3ff-200d-2695-fe0f", 19, 57, 15, ["👩🏿‍⚕️"]]
        },
        "1f469-200d-2696-fe0f": {
            "1f3fb": ["1f469-1f3fb-200d-2696-fe0f", 19, 59, 15, ["👩🏻‍⚖️"]],
            "1f3fc": ["1f469-1f3fc-200d-2696-fe0f", 20, 0, 15, ["👩🏼‍⚖️"]],
            "1f3fd": ["1f469-1f3fd-200d-2696-fe0f", 20, 1, 15, ["👩🏽‍⚖️"]],
            "1f3fe": ["1f469-1f3fe-200d-2696-fe0f", 20, 2, 15, ["👩🏾‍⚖️"]],
            "1f3ff": ["1f469-1f3ff-200d-2696-fe0f", 20, 3, 15, ["👩🏿‍⚖️"]]
        },
        "1f469-200d-2708-fe0f": {
            "1f3fb": ["1f469-1f3fb-200d-2708-fe0f", 20, 5, 15, ["👩🏻‍✈️"]],
            "1f3fc": ["1f469-1f3fc-200d-2708-fe0f", 20, 6, 15, ["👩🏼‍✈️"]],
            "1f3fd": ["1f469-1f3fd-200d-2708-fe0f", 20, 7, 15, ["👩🏽‍✈️"]],
            "1f3fe": ["1f469-1f3fe-200d-2708-fe0f", 20, 8, 15, ["👩🏾‍✈️"]],
            "1f3ff": ["1f469-1f3ff-200d-2708-fe0f", 20, 9, 15, ["👩🏿‍✈️"]]
        },
        "1f469-200d-2764-fe0f-200d-1f468": {
            "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb", 20, 11, 7, ["👩🏻‍❤️‍👨🏻"]],
            "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc", 20, 12, 7, ["👩🏻‍❤️‍👨🏼"]],
            "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd", 20, 13, 7, ["👩🏻‍❤️‍👨🏽"]],
            "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe", 20, 14, 7, ["👩🏻‍❤️‍👨🏾"]],
            "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff", 20, 15, 7, ["👩🏻‍❤️‍👨🏿"]],
            "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb", 20, 16, 7, ["👩🏼‍❤️‍👨🏻"]],
            "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc", 20, 17, 7, ["👩🏼‍❤️‍👨🏼"]],
            "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd", 20, 18, 7, ["👩🏼‍❤️‍👨🏽"]],
            "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe", 20, 19, 7, ["👩🏼‍❤️‍👨🏾"]],
            "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff", 20, 20, 7, ["👩🏼‍❤️‍👨🏿"]],
            "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb", 20, 21, 7, ["👩🏽‍❤️‍👨🏻"]],
            "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc", 20, 22, 7, ["👩🏽‍❤️‍👨🏼"]],
            "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd", 20, 23, 7, ["👩🏽‍❤️‍👨🏽"]],
            "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe", 20, 24, 7, ["👩🏽‍❤️‍👨🏾"]],
            "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff", 20, 25, 7, ["👩🏽‍❤️‍👨🏿"]],
            "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb", 20, 26, 7, ["👩🏾‍❤️‍👨🏻"]],
            "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc", 20, 27, 7, ["👩🏾‍❤️‍👨🏼"]],
            "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd", 20, 28, 7, ["👩🏾‍❤️‍👨🏽"]],
            "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe", 20, 29, 7, ["👩🏾‍❤️‍👨🏾"]],
            "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff", 20, 30, 7, ["👩🏾‍❤️‍👨🏿"]],
            "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb", 20, 31, 7, ["👩🏿‍❤️‍👨🏻"]],
            "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc", 20, 32, 7, ["👩🏿‍❤️‍👨🏼"]],
            "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd", 20, 33, 7, ["👩🏿‍❤️‍👨🏽"]],
            "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe", 20, 34, 7, ["👩🏿‍❤️‍👨🏾"]],
            "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff", 20, 35, 7, ["👩🏿‍❤️‍👨🏿"]]
        },
        "1f469-200d-2764-fe0f-200d-1f469": {
            "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb", 20, 37, 7, ["👩🏻‍❤️‍👩🏻"]],
            "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc", 20, 38, 7, ["👩🏻‍❤️‍👩🏼"]],
            "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd", 20, 39, 7, ["👩🏻‍❤️‍👩🏽"]],
            "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe", 20, 40, 7, ["👩🏻‍❤️‍👩🏾"]],
            "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff", 20, 41, 7, ["👩🏻‍❤️‍👩🏿"]],
            "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb", 20, 42, 7, ["👩🏼‍❤️‍👩🏻"]],
            "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc", 20, 43, 7, ["👩🏼‍❤️‍👩🏼"]],
            "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd", 20, 44, 7, ["👩🏼‍❤️‍👩🏽"]],
            "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe", 20, 45, 7, ["👩🏼‍❤️‍👩🏾"]],
            "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff", 20, 46, 7, ["👩🏼‍❤️‍👩🏿"]],
            "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb", 20, 47, 7, ["👩🏽‍❤️‍👩🏻"]],
            "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc", 20, 48, 7, ["👩🏽‍❤️‍👩🏼"]],
            "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd", 20, 49, 7, ["👩🏽‍❤️‍👩🏽"]],
            "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe", 20, 50, 7, ["👩🏽‍❤️‍👩🏾"]],
            "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff", 20, 51, 7, ["👩🏽‍❤️‍👩🏿"]],
            "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb", 20, 52, 7, ["👩🏾‍❤️‍👩🏻"]],
            "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc", 20, 53, 7, ["👩🏾‍❤️‍👩🏼"]],
            "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd", 20, 54, 7, ["👩🏾‍❤️‍👩🏽"]],
            "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe", 20, 55, 7, ["👩🏾‍❤️‍👩🏾"]],
            "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff", 20, 56, 7, ["👩🏾‍❤️‍👩🏿"]],
            "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb", 20, 57, 7, ["👩🏿‍❤️‍👩🏻"]],
            "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc", 20, 58, 7, ["👩🏿‍❤️‍👩🏼"]],
            "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd", 20, 59, 7, ["👩🏿‍❤️‍👩🏽"]],
            "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe", 21, 0, 7, ["👩🏿‍❤️‍👩🏾"]],
            "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff", 21, 1, 7, ["👩🏿‍❤️‍👩🏿"]]
        },
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": {
            "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 21, 3, 7, ["👩🏻‍❤️‍💋‍👨🏻"]],
            "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 21, 4, 7, ["👩🏻‍❤️‍💋‍👨🏼"]],
            "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 21, 5, 7, ["👩🏻‍❤️‍💋‍👨🏽"]],
            "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 21, 6, 7, ["👩🏻‍❤️‍💋‍👨🏾"]],
            "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 21, 7, 7, ["👩🏻‍❤️‍💋‍👨🏿"]],
            "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 21, 8, 7, ["👩🏼‍❤️‍💋‍👨🏻"]],
            "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 21, 9, 7, ["👩🏼‍❤️‍💋‍👨🏼"]],
            "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 21, 10, 7, ["👩🏼‍❤️‍💋‍👨🏽"]],
            "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 21, 11, 7, ["👩🏼‍❤️‍💋‍👨🏾"]],
            "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 21, 12, 7, ["👩🏼‍❤️‍💋‍👨🏿"]],
            "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 21, 13, 7, ["👩🏽‍❤️‍💋‍👨🏻"]],
            "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 21, 14, 7, ["👩🏽‍❤️‍💋‍👨🏼"]],
            "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 21, 15, 7, ["👩🏽‍❤️‍💋‍👨🏽"]],
            "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 21, 16, 7, ["👩🏽‍❤️‍💋‍👨🏾"]],
            "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 21, 17, 7, ["👩🏽‍❤️‍💋‍👨🏿"]],
            "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 21, 18, 7, ["👩🏾‍❤️‍💋‍👨🏻"]],
            "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 21, 19, 7, ["👩🏾‍❤️‍💋‍👨🏼"]],
            "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 21, 20, 7, ["👩🏾‍❤️‍💋‍👨🏽"]],
            "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 21, 21, 7, ["👩🏾‍❤️‍💋‍👨🏾"]],
            "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 21, 22, 7, ["👩🏾‍❤️‍💋‍👨🏿"]],
            "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 21, 23, 7, ["👩🏿‍❤️‍💋‍👨🏻"]],
            "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 21, 24, 7, ["👩🏿‍❤️‍💋‍👨🏼"]],
            "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 21, 25, 7, ["👩🏿‍❤️‍💋‍👨🏽"]],
            "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 21, 26, 7, ["👩🏿‍❤️‍💋‍👨🏾"]],
            "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 21, 27, 7, ["👩🏿‍❤️‍💋‍👨🏿"]]
        },
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": {
            "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 29, 7, ["👩🏻‍❤️‍💋‍👩🏻"]],
            "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 30, 7, ["👩🏻‍❤️‍💋‍👩🏼"]],
            "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 31, 7, ["👩🏻‍❤️‍💋‍👩🏽"]],
            "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 32, 7, ["👩🏻‍❤️‍💋‍👩🏾"]],
            "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 33, 7, ["👩🏻‍❤️‍💋‍👩🏿"]],
            "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 34, 7, ["👩🏼‍❤️‍💋‍👩🏻"]],
            "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 35, 7, ["👩🏼‍❤️‍💋‍👩🏼"]],
            "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 36, 7, ["👩🏼‍❤️‍💋‍👩🏽"]],
            "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 37, 7, ["👩🏼‍❤️‍💋‍👩🏾"]],
            "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 38, 7, ["👩🏼‍❤️‍💋‍👩🏿"]],
            "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 39, 7, ["👩🏽‍❤️‍💋‍👩🏻"]],
            "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 40, 7, ["👩🏽‍❤️‍💋‍👩🏼"]],
            "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 41, 7, ["👩🏽‍❤️‍💋‍👩🏽"]],
            "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 42, 7, ["👩🏽‍❤️‍💋‍👩🏾"]],
            "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 43, 7, ["👩🏽‍❤️‍💋‍👩🏿"]],
            "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 44, 7, ["👩🏾‍❤️‍💋‍👩🏻"]],
            "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 45, 7, ["👩🏾‍❤️‍💋‍👩🏼"]],
            "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 46, 7, ["👩🏾‍❤️‍💋‍👩🏽"]],
            "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 47, 7, ["👩🏾‍❤️‍💋‍👩🏾"]],
            "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 48, 7, ["👩🏾‍❤️‍💋‍👩🏿"]],
            "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 49, 7, ["👩🏿‍❤️‍💋‍👩🏻"]],
            "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 50, 7, ["👩🏿‍❤️‍💋‍👩🏼"]],
            "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 51, 7, ["👩🏿‍❤️‍💋‍👩🏽"]],
            "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 52, 7, ["👩🏿‍❤️‍💋‍👩🏾"]],
            "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 53, 7, ["👩🏿‍❤️‍💋‍👩🏿"]]
        },
        "1f469": {
            "1f3fb": ["1f469-1f3fb", 21, 55, 15, ["👩🏻"]],
            "1f3fc": ["1f469-1f3fc", 21, 56, 15, ["👩🏼"]],
            "1f3fd": ["1f469-1f3fd", 21, 57, 15, ["👩🏽"]],
            "1f3fe": ["1f469-1f3fe", 21, 58, 15, ["👩🏾"]],
            "1f3ff": ["1f469-1f3ff", 21, 59, 15, ["👩🏿"]]
        },
        "1f46b": {
            "1f3fb": ["1f46b-1f3fb", 22, 2, 15, ["👫🏻"]],
            "1f3fc": ["1f46b-1f3fc", 22, 3, 15, ["👫🏼"]],
            "1f3fd": ["1f46b-1f3fd", 22, 4, 15, ["👫🏽"]],
            "1f3fe": ["1f46b-1f3fe", 22, 5, 15, ["👫🏾"]],
            "1f3ff": ["1f46b-1f3ff", 22, 6, 15, ["👫🏿"]],
            "1f3fb-1f3fc": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc", 22, 7, 15, ["👩🏻‍🤝‍👨🏼"]],
            "1f3fb-1f3fd": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd", 22, 8, 15, ["👩🏻‍🤝‍👨🏽"]],
            "1f3fb-1f3fe": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe", 22, 9, 15, ["👩🏻‍🤝‍👨🏾"]],
            "1f3fb-1f3ff": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff", 22, 10, 15, ["👩🏻‍🤝‍👨🏿"]],
            "1f3fc-1f3fb": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb", 22, 11, 15, ["👩🏼‍🤝‍👨🏻"]],
            "1f3fc-1f3fd": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd", 22, 12, 15, ["👩🏼‍🤝‍👨🏽"]],
            "1f3fc-1f3fe": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe", 22, 13, 15, ["👩🏼‍🤝‍👨🏾"]],
            "1f3fc-1f3ff": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff", 22, 14, 15, ["👩🏼‍🤝‍👨🏿"]],
            "1f3fd-1f3fb": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb", 22, 15, 15, ["👩🏽‍🤝‍👨🏻"]],
            "1f3fd-1f3fc": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc", 22, 16, 15, ["👩🏽‍🤝‍👨🏼"]],
            "1f3fd-1f3fe": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe", 22, 17, 15, ["👩🏽‍🤝‍👨🏾"]],
            "1f3fd-1f3ff": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff", 22, 18, 15, ["👩🏽‍🤝‍👨🏿"]],
            "1f3fe-1f3fb": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb", 22, 19, 15, ["👩🏾‍🤝‍👨🏻"]],
            "1f3fe-1f3fc": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc", 22, 20, 15, ["👩🏾‍🤝‍👨🏼"]],
            "1f3fe-1f3fd": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd", 22, 21, 15, ["👩🏾‍🤝‍👨🏽"]],
            "1f3fe-1f3ff": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff", 22, 22, 15, ["👩🏾‍🤝‍👨🏿"]],
            "1f3ff-1f3fb": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb", 22, 23, 15, ["👩🏿‍🤝‍👨🏻"]],
            "1f3ff-1f3fc": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc", 22, 24, 15, ["👩🏿‍🤝‍👨🏼"]],
            "1f3ff-1f3fd": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd", 22, 25, 15, ["👩🏿‍🤝‍👨🏽"]],
            "1f3ff-1f3fe": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe", 22, 26, 15, ["👩🏿‍🤝‍👨🏾"]]
        },
        "1f46c": {
            "1f3fb": ["1f46c-1f3fb", 22, 28, 15, ["👬🏻"]],
            "1f3fc": ["1f46c-1f3fc", 22, 29, 15, ["👬🏼"]],
            "1f3fd": ["1f46c-1f3fd", 22, 30, 15, ["👬🏽"]],
            "1f3fe": ["1f46c-1f3fe", 22, 31, 15, ["👬🏾"]],
            "1f3ff": ["1f46c-1f3ff", 22, 32, 15, ["👬🏿"]],
            "1f3fb-1f3fc": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc", 22, 33, 7, ["👨🏻‍🤝‍👨🏼"]],
            "1f3fb-1f3fd": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd", 22, 34, 7, ["👨🏻‍🤝‍👨🏽"]],
            "1f3fb-1f3fe": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe", 22, 35, 7, ["👨🏻‍🤝‍👨🏾"]],
            "1f3fb-1f3ff": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff", 22, 36, 7, ["👨🏻‍🤝‍👨🏿"]],
            "1f3fc-1f3fb": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb", 22, 37, 15, ["👨🏼‍🤝‍👨🏻"]],
            "1f3fc-1f3fd": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd", 22, 38, 7, ["👨🏼‍🤝‍👨🏽"]],
            "1f3fc-1f3fe": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe", 22, 39, 7, ["👨🏼‍🤝‍👨🏾"]],
            "1f3fc-1f3ff": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff", 22, 40, 7, ["👨🏼‍🤝‍👨🏿"]],
            "1f3fd-1f3fb": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb", 22, 41, 15, ["👨🏽‍🤝‍👨🏻"]],
            "1f3fd-1f3fc": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc", 22, 42, 15, ["👨🏽‍🤝‍👨🏼"]],
            "1f3fd-1f3fe": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe", 22, 43, 7, ["👨🏽‍🤝‍👨🏾"]],
            "1f3fd-1f3ff": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff", 22, 44, 7, ["👨🏽‍🤝‍👨🏿"]],
            "1f3fe-1f3fb": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb", 22, 45, 15, ["👨🏾‍🤝‍👨🏻"]],
            "1f3fe-1f3fc": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc", 22, 46, 15, ["👨🏾‍🤝‍👨🏼"]],
            "1f3fe-1f3fd": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd", 22, 47, 15, ["👨🏾‍🤝‍👨🏽"]],
            "1f3fe-1f3ff": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff", 22, 48, 7, ["👨🏾‍🤝‍👨🏿"]],
            "1f3ff-1f3fb": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb", 22, 49, 15, ["👨🏿‍🤝‍👨🏻"]],
            "1f3ff-1f3fc": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc", 22, 50, 15, ["👨🏿‍🤝‍👨🏼"]],
            "1f3ff-1f3fd": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd", 22, 51, 15, ["👨🏿‍🤝‍👨🏽"]],
            "1f3ff-1f3fe": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe", 22, 52, 15, ["👨🏿‍🤝‍👨🏾"]]
        },
        "1f46d": {
            "1f3fb": ["1f46d-1f3fb", 22, 54, 15, ["👭🏻"]],
            "1f3fc": ["1f46d-1f3fc", 22, 55, 15, ["👭🏼"]],
            "1f3fd": ["1f46d-1f3fd", 22, 56, 15, ["👭🏽"]],
            "1f3fe": ["1f46d-1f3fe", 22, 57, 15, ["👭🏾"]],
            "1f3ff": ["1f46d-1f3ff", 22, 58, 15, ["👭🏿"]],
            "1f3fb-1f3fc": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc", 22, 59, 7, ["👩🏻‍🤝‍👩🏼"]],
            "1f3fb-1f3fd": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd", 23, 0, 7, ["👩🏻‍🤝‍👩🏽"]],
            "1f3fb-1f3fe": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe", 23, 1, 7, ["👩🏻‍🤝‍👩🏾"]],
            "1f3fb-1f3ff": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff", 23, 2, 7, ["👩🏻‍🤝‍👩🏿"]],
            "1f3fc-1f3fb": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb", 23, 3, 15, ["👩🏼‍🤝‍👩🏻"]],
            "1f3fc-1f3fd": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd", 23, 4, 7, ["👩🏼‍🤝‍👩🏽"]],
            "1f3fc-1f3fe": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe", 23, 5, 7, ["👩🏼‍🤝‍👩🏾"]],
            "1f3fc-1f3ff": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff", 23, 6, 7, ["👩🏼‍🤝‍👩🏿"]],
            "1f3fd-1f3fb": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb", 23, 7, 15, ["👩🏽‍🤝‍👩🏻"]],
            "1f3fd-1f3fc": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc", 23, 8, 15, ["👩🏽‍🤝‍👩🏼"]],
            "1f3fd-1f3fe": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe", 23, 9, 7, ["👩🏽‍🤝‍👩🏾"]],
            "1f3fd-1f3ff": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff", 23, 10, 7, ["👩🏽‍🤝‍👩🏿"]],
            "1f3fe-1f3fb": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb", 23, 11, 15, ["👩🏾‍🤝‍👩🏻"]],
            "1f3fe-1f3fc": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc", 23, 12, 15, ["👩🏾‍🤝‍👩🏼"]],
            "1f3fe-1f3fd": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd", 23, 13, 15, ["👩🏾‍🤝‍👩🏽"]],
            "1f3fe-1f3ff": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff", 23, 14, 7, ["👩🏾‍🤝‍👩🏿"]],
            "1f3ff-1f3fb": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb", 23, 15, 15, ["👩🏿‍🤝‍👩🏻"]],
            "1f3ff-1f3fc": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc", 23, 16, 15, ["👩🏿‍🤝‍👩🏼"]],
            "1f3ff-1f3fd": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd", 23, 17, 15, ["👩🏿‍🤝‍👩🏽"]],
            "1f3ff-1f3fe": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe", 23, 18, 15, ["👩🏿‍🤝‍👩🏾"]]
        },
        "1f46e-200d-2640-fe0f": {
            "1f3fb": ["1f46e-1f3fb-200d-2640-fe0f", 23, 20, 15, ["👮🏻‍♀️"]],
            "1f3fc": ["1f46e-1f3fc-200d-2640-fe0f", 23, 21, 15, ["👮🏼‍♀️"]],
            "1f3fd": ["1f46e-1f3fd-200d-2640-fe0f", 23, 22, 15, ["👮🏽‍♀️"]],
            "1f3fe": ["1f46e-1f3fe-200d-2640-fe0f", 23, 23, 15, ["👮🏾‍♀️"]],
            "1f3ff": ["1f46e-1f3ff-200d-2640-fe0f", 23, 24, 15, ["👮🏿‍♀️"]]
        },
        "1f46e-200d-2642-fe0f": {
            "1f3fb": ["1f46e-1f3fb-200d-2642-fe0f", 23, 26, 15, ["👮🏻‍♂️", "👮🏻"]],
            "1f3fc": ["1f46e-1f3fc-200d-2642-fe0f", 23, 27, 15, ["👮🏼‍♂️", "👮🏼"]],
            "1f3fd": ["1f46e-1f3fd-200d-2642-fe0f", 23, 28, 15, ["👮🏽‍♂️", "👮🏽"]],
            "1f3fe": ["1f46e-1f3fe-200d-2642-fe0f", 23, 29, 15, ["👮🏾‍♂️", "👮🏾"]],
            "1f3ff": ["1f46e-1f3ff-200d-2642-fe0f", 23, 30, 15, ["👮🏿‍♂️", "👮🏿"]]
        },
        "1f470-200d-2640-fe0f": {
            "1f3fb": ["1f470-1f3fb-200d-2640-fe0f", 23, 41, 15, ["👰🏻‍♀️"]],
            "1f3fc": ["1f470-1f3fc-200d-2640-fe0f", 23, 42, 15, ["👰🏼‍♀️"]],
            "1f3fd": ["1f470-1f3fd-200d-2640-fe0f", 23, 43, 15, ["👰🏽‍♀️"]],
            "1f3fe": ["1f470-1f3fe-200d-2640-fe0f", 23, 44, 15, ["👰🏾‍♀️"]],
            "1f3ff": ["1f470-1f3ff-200d-2640-fe0f", 23, 45, 15, ["👰🏿‍♀️"]]
        },
        "1f470-200d-2642-fe0f": {
            "1f3fb": ["1f470-1f3fb-200d-2642-fe0f", 23, 47, 15, ["👰🏻‍♂️"]],
            "1f3fc": ["1f470-1f3fc-200d-2642-fe0f", 23, 48, 15, ["👰🏼‍♂️"]],
            "1f3fd": ["1f470-1f3fd-200d-2642-fe0f", 23, 49, 15, ["👰🏽‍♂️"]],
            "1f3fe": ["1f470-1f3fe-200d-2642-fe0f", 23, 50, 15, ["👰🏾‍♂️"]],
            "1f3ff": ["1f470-1f3ff-200d-2642-fe0f", 23, 51, 15, ["👰🏿‍♂️"]]
        },
        "1f470": {
            "1f3fb": ["1f470-1f3fb", 23, 53, 15, ["👰🏻"]],
            "1f3fc": ["1f470-1f3fc", 23, 54, 15, ["👰🏼"]],
            "1f3fd": ["1f470-1f3fd", 23, 55, 15, ["👰🏽"]],
            "1f3fe": ["1f470-1f3fe", 23, 56, 15, ["👰🏾"]],
            "1f3ff": ["1f470-1f3ff", 23, 57, 15, ["👰🏿"]]
        },
        "1f471-200d-2640-fe0f": {
            "1f3fb": ["1f471-1f3fb-200d-2640-fe0f", 23, 59, 15, ["👱🏻‍♀️"]],
            "1f3fc": ["1f471-1f3fc-200d-2640-fe0f", 24, 0, 15, ["👱🏼‍♀️"]],
            "1f3fd": ["1f471-1f3fd-200d-2640-fe0f", 24, 1, 15, ["👱🏽‍♀️"]],
            "1f3fe": ["1f471-1f3fe-200d-2640-fe0f", 24, 2, 15, ["👱🏾‍♀️"]],
            "1f3ff": ["1f471-1f3ff-200d-2640-fe0f", 24, 3, 15, ["👱🏿‍♀️"]]
        },
        "1f471-200d-2642-fe0f": {
            "1f3fb": ["1f471-1f3fb-200d-2642-fe0f", 24, 5, 15, ["👱🏻‍♂️", "👱🏻"]],
            "1f3fc": ["1f471-1f3fc-200d-2642-fe0f", 24, 6, 15, ["👱🏼‍♂️", "👱🏼"]],
            "1f3fd": ["1f471-1f3fd-200d-2642-fe0f", 24, 7, 15, ["👱🏽‍♂️", "👱🏽"]],
            "1f3fe": ["1f471-1f3fe-200d-2642-fe0f", 24, 8, 15, ["👱🏾‍♂️", "👱🏾"]],
            "1f3ff": ["1f471-1f3ff-200d-2642-fe0f", 24, 9, 15, ["👱🏿‍♂️", "👱🏿"]]
        },
        "1f472": {
            "1f3fb": ["1f472-1f3fb", 24, 17, 15, ["👲🏻"]],
            "1f3fc": ["1f472-1f3fc", 24, 18, 15, ["👲🏼"]],
            "1f3fd": ["1f472-1f3fd", 24, 19, 15, ["👲🏽"]],
            "1f3fe": ["1f472-1f3fe", 24, 20, 15, ["👲🏾"]],
            "1f3ff": ["1f472-1f3ff", 24, 21, 15, ["👲🏿"]]
        },
        "1f473-200d-2640-fe0f": {
            "1f3fb": ["1f473-1f3fb-200d-2640-fe0f", 24, 23, 15, ["👳🏻‍♀️"]],
            "1f3fc": ["1f473-1f3fc-200d-2640-fe0f", 24, 24, 15, ["👳🏼‍♀️"]],
            "1f3fd": ["1f473-1f3fd-200d-2640-fe0f", 24, 25, 15, ["👳🏽‍♀️"]],
            "1f3fe": ["1f473-1f3fe-200d-2640-fe0f", 24, 26, 15, ["👳🏾‍♀️"]],
            "1f3ff": ["1f473-1f3ff-200d-2640-fe0f", 24, 27, 15, ["👳🏿‍♀️"]]
        },
        "1f473-200d-2642-fe0f": {
            "1f3fb": ["1f473-1f3fb-200d-2642-fe0f", 24, 29, 15, ["👳🏻‍♂️", "👳🏻"]],
            "1f3fc": ["1f473-1f3fc-200d-2642-fe0f", 24, 30, 15, ["👳🏼‍♂️", "👳🏼"]],
            "1f3fd": ["1f473-1f3fd-200d-2642-fe0f", 24, 31, 15, ["👳🏽‍♂️", "👳🏽"]],
            "1f3fe": ["1f473-1f3fe-200d-2642-fe0f", 24, 32, 15, ["👳🏾‍♂️", "👳🏾"]],
            "1f3ff": ["1f473-1f3ff-200d-2642-fe0f", 24, 33, 15, ["👳🏿‍♂️", "👳🏿"]]
        },
        "1f474": {
            "1f3fb": ["1f474-1f3fb", 24, 41, 15, ["👴🏻"]],
            "1f3fc": ["1f474-1f3fc", 24, 42, 15, ["👴🏼"]],
            "1f3fd": ["1f474-1f3fd", 24, 43, 15, ["👴🏽"]],
            "1f3fe": ["1f474-1f3fe", 24, 44, 15, ["👴🏾"]],
            "1f3ff": ["1f474-1f3ff", 24, 45, 15, ["👴🏿"]]
        },
        "1f475": {
            "1f3fb": ["1f475-1f3fb", 24, 47, 15, ["👵🏻"]],
            "1f3fc": ["1f475-1f3fc", 24, 48, 15, ["👵🏼"]],
            "1f3fd": ["1f475-1f3fd", 24, 49, 15, ["👵🏽"]],
            "1f3fe": ["1f475-1f3fe", 24, 50, 15, ["👵🏾"]],
            "1f3ff": ["1f475-1f3ff", 24, 51, 15, ["👵🏿"]]
        },
        "1f476": {
            "1f3fb": ["1f476-1f3fb", 24, 53, 15, ["👶🏻"]],
            "1f3fc": ["1f476-1f3fc", 24, 54, 15, ["👶🏼"]],
            "1f3fd": ["1f476-1f3fd", 24, 55, 15, ["👶🏽"]],
            "1f3fe": ["1f476-1f3fe", 24, 56, 15, ["👶🏾"]],
            "1f3ff": ["1f476-1f3ff", 24, 57, 15, ["👶🏿"]]
        },
        "1f477-200d-2640-fe0f": {
            "1f3fb": ["1f477-1f3fb-200d-2640-fe0f", 24, 59, 15, ["👷🏻‍♀️"]],
            "1f3fc": ["1f477-1f3fc-200d-2640-fe0f", 25, 0, 15, ["👷🏼‍♀️"]],
            "1f3fd": ["1f477-1f3fd-200d-2640-fe0f", 25, 1, 15, ["👷🏽‍♀️"]],
            "1f3fe": ["1f477-1f3fe-200d-2640-fe0f", 25, 2, 15, ["👷🏾‍♀️"]],
            "1f3ff": ["1f477-1f3ff-200d-2640-fe0f", 25, 3, 15, ["👷🏿‍♀️"]]
        },
        "1f477-200d-2642-fe0f": {
            "1f3fb": ["1f477-1f3fb-200d-2642-fe0f", 25, 5, 15, ["👷🏻‍♂️", "👷🏻"]],
            "1f3fc": ["1f477-1f3fc-200d-2642-fe0f", 25, 6, 15, ["👷🏼‍♂️", "👷🏼"]],
            "1f3fd": ["1f477-1f3fd-200d-2642-fe0f", 25, 7, 15, ["👷🏽‍♂️", "👷🏽"]],
            "1f3fe": ["1f477-1f3fe-200d-2642-fe0f", 25, 8, 15, ["👷🏾‍♂️", "👷🏾"]],
            "1f3ff": ["1f477-1f3ff-200d-2642-fe0f", 25, 9, 15, ["👷🏿‍♂️", "👷🏿"]]
        },
        "1f478": {
            "1f3fb": ["1f478-1f3fb", 25, 17, 15, ["👸🏻"]],
            "1f3fc": ["1f478-1f3fc", 25, 18, 15, ["👸🏼"]],
            "1f3fd": ["1f478-1f3fd", 25, 19, 15, ["👸🏽"]],
            "1f3fe": ["1f478-1f3fe", 25, 20, 15, ["👸🏾"]],
            "1f3ff": ["1f478-1f3ff", 25, 21, 15, ["👸🏿"]]
        },
        "1f47c": {
            "1f3fb": ["1f47c-1f3fb", 25, 26, 15, ["👼🏻"]],
            "1f3fc": ["1f47c-1f3fc", 25, 27, 15, ["👼🏼"]],
            "1f3fd": ["1f47c-1f3fd", 25, 28, 15, ["👼🏽"]],
            "1f3fe": ["1f47c-1f3fe", 25, 29, 15, ["👼🏾"]],
            "1f3ff": ["1f47c-1f3ff", 25, 30, 15, ["👼🏿"]]
        },
        "1f481-200d-2640-fe0f": {
            "1f3fb": ["1f481-1f3fb-200d-2640-fe0f", 25, 36, 15, ["💁🏻‍♀️", "💁🏻"]],
            "1f3fc": ["1f481-1f3fc-200d-2640-fe0f", 25, 37, 15, ["💁🏼‍♀️", "💁🏼"]],
            "1f3fd": ["1f481-1f3fd-200d-2640-fe0f", 25, 38, 15, ["💁🏽‍♀️", "💁🏽"]],
            "1f3fe": ["1f481-1f3fe-200d-2640-fe0f", 25, 39, 15, ["💁🏾‍♀️", "💁🏾"]],
            "1f3ff": ["1f481-1f3ff-200d-2640-fe0f", 25, 40, 15, ["💁🏿‍♀️", "💁🏿"]]
        },
        "1f481-200d-2642-fe0f": {
            "1f3fb": ["1f481-1f3fb-200d-2642-fe0f", 25, 42, 15, ["💁🏻‍♂️"]],
            "1f3fc": ["1f481-1f3fc-200d-2642-fe0f", 25, 43, 15, ["💁🏼‍♂️"]],
            "1f3fd": ["1f481-1f3fd-200d-2642-fe0f", 25, 44, 15, ["💁🏽‍♂️"]],
            "1f3fe": ["1f481-1f3fe-200d-2642-fe0f", 25, 45, 15, ["💁🏾‍♂️"]],
            "1f3ff": ["1f481-1f3ff-200d-2642-fe0f", 25, 46, 15, ["💁🏿‍♂️"]]
        },
        "1f482-200d-2640-fe0f": {
            "1f3fb": ["1f482-1f3fb-200d-2640-fe0f", 25, 54, 15, ["💂🏻‍♀️"]],
            "1f3fc": ["1f482-1f3fc-200d-2640-fe0f", 25, 55, 15, ["💂🏼‍♀️"]],
            "1f3fd": ["1f482-1f3fd-200d-2640-fe0f", 25, 56, 15, ["💂🏽‍♀️"]],
            "1f3fe": ["1f482-1f3fe-200d-2640-fe0f", 25, 57, 15, ["💂🏾‍♀️"]],
            "1f3ff": ["1f482-1f3ff-200d-2640-fe0f", 25, 58, 15, ["💂🏿‍♀️"]]
        },
        "1f482-200d-2642-fe0f": {
            "1f3fb": ["1f482-1f3fb-200d-2642-fe0f", 26, 0, 15, ["💂🏻‍♂️", "💂🏻"]],
            "1f3fc": ["1f482-1f3fc-200d-2642-fe0f", 26, 1, 15, ["💂🏼‍♂️", "💂🏼"]],
            "1f3fd": ["1f482-1f3fd-200d-2642-fe0f", 26, 2, 15, ["💂🏽‍♂️", "💂🏽"]],
            "1f3fe": ["1f482-1f3fe-200d-2642-fe0f", 26, 3, 15, ["💂🏾‍♂️", "💂🏾"]],
            "1f3ff": ["1f482-1f3ff-200d-2642-fe0f", 26, 4, 15, ["💂🏿‍♂️", "💂🏿"]]
        },
        "1f483": {
            "1f3fb": ["1f483-1f3fb", 26, 12, 15, ["💃🏻"]],
            "1f3fc": ["1f483-1f3fc", 26, 13, 15, ["💃🏼"]],
            "1f3fd": ["1f483-1f3fd", 26, 14, 15, ["💃🏽"]],
            "1f3fe": ["1f483-1f3fe", 26, 15, 15, ["💃🏾"]],
            "1f3ff": ["1f483-1f3ff", 26, 16, 15, ["💃🏿"]]
        },
        "1f485": {
            "1f3fb": ["1f485-1f3fb", 26, 19, 15, ["💅🏻"]],
            "1f3fc": ["1f485-1f3fc", 26, 20, 15, ["💅🏼"]],
            "1f3fd": ["1f485-1f3fd", 26, 21, 15, ["💅🏽"]],
            "1f3fe": ["1f485-1f3fe", 26, 22, 15, ["💅🏾"]],
            "1f3ff": ["1f485-1f3ff", 26, 23, 15, ["💅🏿"]]
        },
        "1f486-200d-2640-fe0f": {
            "1f3fb": ["1f486-1f3fb-200d-2640-fe0f", 26, 25, 15, ["💆🏻‍♀️", "💆🏻"]],
            "1f3fc": ["1f486-1f3fc-200d-2640-fe0f", 26, 26, 15, ["💆🏼‍♀️", "💆🏼"]],
            "1f3fd": ["1f486-1f3fd-200d-2640-fe0f", 26, 27, 15, ["💆🏽‍♀️", "💆🏽"]],
            "1f3fe": ["1f486-1f3fe-200d-2640-fe0f", 26, 28, 15, ["💆🏾‍♀️", "💆🏾"]],
            "1f3ff": ["1f486-1f3ff-200d-2640-fe0f", 26, 29, 15, ["💆🏿‍♀️", "💆🏿"]]
        },
        "1f486-200d-2642-fe0f": {
            "1f3fb": ["1f486-1f3fb-200d-2642-fe0f", 26, 31, 15, ["💆🏻‍♂️"]],
            "1f3fc": ["1f486-1f3fc-200d-2642-fe0f", 26, 32, 15, ["💆🏼‍♂️"]],
            "1f3fd": ["1f486-1f3fd-200d-2642-fe0f", 26, 33, 15, ["💆🏽‍♂️"]],
            "1f3fe": ["1f486-1f3fe-200d-2642-fe0f", 26, 34, 15, ["💆🏾‍♂️"]],
            "1f3ff": ["1f486-1f3ff-200d-2642-fe0f", 26, 35, 15, ["💆🏿‍♂️"]]
        },
        "1f487-200d-2640-fe0f": {
            "1f3fb": ["1f487-1f3fb-200d-2640-fe0f", 26, 43, 15, ["💇🏻‍♀️", "💇🏻"]],
            "1f3fc": ["1f487-1f3fc-200d-2640-fe0f", 26, 44, 15, ["💇🏼‍♀️", "💇🏼"]],
            "1f3fd": ["1f487-1f3fd-200d-2640-fe0f", 26, 45, 15, ["💇🏽‍♀️", "💇🏽"]],
            "1f3fe": ["1f487-1f3fe-200d-2640-fe0f", 26, 46, 15, ["💇🏾‍♀️", "💇🏾"]],
            "1f3ff": ["1f487-1f3ff-200d-2640-fe0f", 26, 47, 15, ["💇🏿‍♀️", "💇🏿"]]
        },
        "1f487-200d-2642-fe0f": {
            "1f3fb": ["1f487-1f3fb-200d-2642-fe0f", 26, 49, 15, ["💇🏻‍♂️"]],
            "1f3fc": ["1f487-1f3fc-200d-2642-fe0f", 26, 50, 15, ["💇🏼‍♂️"]],
            "1f3fd": ["1f487-1f3fd-200d-2642-fe0f", 26, 51, 15, ["💇🏽‍♂️"]],
            "1f3fe": ["1f487-1f3fe-200d-2642-fe0f", 26, 52, 15, ["💇🏾‍♂️"]],
            "1f3ff": ["1f487-1f3ff-200d-2642-fe0f", 26, 53, 15, ["💇🏿‍♂️"]]
        },
        "1f48f": {
            "1f3fb": ["1f48f-1f3fb", 27, 8, 15, ["💏🏻"]],
            "1f3fc": ["1f48f-1f3fc", 27, 9, 15, ["💏🏼"]],
            "1f3fd": ["1f48f-1f3fd", 27, 10, 15, ["💏🏽"]],
            "1f3fe": ["1f48f-1f3fe", 27, 11, 15, ["💏🏾"]],
            "1f3ff": ["1f48f-1f3ff", 27, 12, 15, ["💏🏿"]],
            "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 27, 13, 7, ["🧑🏻‍❤️‍💋‍🧑🏼"]],
            "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 27, 14, 7, ["🧑🏻‍❤️‍💋‍🧑🏽"]],
            "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 27, 15, 7, ["🧑🏻‍❤️‍💋‍🧑🏾"]],
            "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 27, 16, 7, ["🧑🏻‍❤️‍💋‍🧑🏿"]],
            "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 27, 17, 7, ["🧑🏼‍❤️‍💋‍🧑🏻"]],
            "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 27, 18, 7, ["🧑🏼‍❤️‍💋‍🧑🏽"]],
            "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 27, 19, 7, ["🧑🏼‍❤️‍💋‍🧑🏾"]],
            "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 27, 20, 7, ["🧑🏼‍❤️‍💋‍🧑🏿"]],
            "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 27, 21, 7, ["🧑🏽‍❤️‍💋‍🧑🏻"]],
            "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 27, 22, 7, ["🧑🏽‍❤️‍💋‍🧑🏼"]],
            "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 27, 23, 7, ["🧑🏽‍❤️‍💋‍🧑🏾"]],
            "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 27, 24, 7, ["🧑🏽‍❤️‍💋‍🧑🏿"]],
            "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 27, 25, 7, ["🧑🏾‍❤️‍💋‍🧑🏻"]],
            "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 27, 26, 7, ["🧑🏾‍❤️‍💋‍🧑🏼"]],
            "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 27, 27, 7, ["🧑🏾‍❤️‍💋‍🧑🏽"]],
            "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 27, 28, 7, ["🧑🏾‍❤️‍💋‍🧑🏿"]],
            "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 27, 29, 7, ["🧑🏿‍❤️‍💋‍🧑🏻"]],
            "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 27, 30, 7, ["🧑🏿‍❤️‍💋‍🧑🏼"]],
            "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 27, 31, 7, ["🧑🏿‍❤️‍💋‍🧑🏽"]],
            "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 27, 32, 7, ["🧑🏿‍❤️‍💋‍🧑🏾"]]
        },
        "1f491": {
            "1f3fb": ["1f491-1f3fb", 27, 35, 15, ["💑🏻"]],
            "1f3fc": ["1f491-1f3fc", 27, 36, 15, ["💑🏼"]],
            "1f3fd": ["1f491-1f3fd", 27, 37, 15, ["💑🏽"]],
            "1f3fe": ["1f491-1f3fe", 27, 38, 15, ["💑🏾"]],
            "1f3ff": ["1f491-1f3ff", 27, 39, 15, ["💑🏿"]],
            "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 40, 7, ["🧑🏻‍❤️‍🧑🏼"]],
            "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 41, 7, ["🧑🏻‍❤️‍🧑🏽"]],
            "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 42, 7, ["🧑🏻‍❤️‍🧑🏾"]],
            "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 43, 7, ["🧑🏻‍❤️‍🧑🏿"]],
            "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 44, 7, ["🧑🏼‍❤️‍🧑🏻"]],
            "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 45, 7, ["🧑🏼‍❤️‍🧑🏽"]],
            "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 46, 7, ["🧑🏼‍❤️‍🧑🏾"]],
            "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 47, 7, ["🧑🏼‍❤️‍🧑🏿"]],
            "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 48, 7, ["🧑🏽‍❤️‍🧑🏻"]],
            "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 49, 7, ["🧑🏽‍❤️‍🧑🏼"]],
            "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 50, 7, ["🧑🏽‍❤️‍🧑🏾"]],
            "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 51, 7, ["🧑🏽‍❤️‍🧑🏿"]],
            "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 52, 7, ["🧑🏾‍❤️‍🧑🏻"]],
            "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 53, 7, ["🧑🏾‍❤️‍🧑🏼"]],
            "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 54, 7, ["🧑🏾‍❤️‍🧑🏽"]],
            "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 55, 7, ["🧑🏾‍❤️‍🧑🏿"]],
            "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 56, 7, ["🧑🏿‍❤️‍🧑🏻"]],
            "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 57, 7, ["🧑🏿‍❤️‍🧑🏼"]],
            "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 58, 7, ["🧑🏿‍❤️‍🧑🏽"]],
            "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 59, 7, ["🧑🏿‍❤️‍🧑🏾"]]
        },
        "1f4aa": {
            "1f3fb": ["1f4aa-1f3fb", 28, 25, 15, ["💪🏻"]],
            "1f3fc": ["1f4aa-1f3fc", 28, 26, 15, ["💪🏼"]],
            "1f3fd": ["1f4aa-1f3fd", 28, 27, 15, ["💪🏽"]],
            "1f3fe": ["1f4aa-1f3fe", 28, 28, 15, ["💪🏾"]],
            "1f3ff": ["1f4aa-1f3ff", 28, 29, 15, ["💪🏿"]]
        },
        "1f574-fe0f": {
            "1f3fb": ["1f574-1f3fb", 31, 30, 15, ["🕴🏻"]],
            "1f3fc": ["1f574-1f3fc", 31, 31, 15, ["🕴🏼"]],
            "1f3fd": ["1f574-1f3fd", 31, 32, 15, ["🕴🏽"]],
            "1f3fe": ["1f574-1f3fe", 31, 33, 15, ["🕴🏾"]],
            "1f3ff": ["1f574-1f3ff", 31, 34, 15, ["🕴🏿"]]
        },
        "1f575-fe0f-200d-2640-fe0f": {
            "1f3fb": ["1f575-1f3fb-200d-2640-fe0f", 31, 36, 15, ["🕵🏻‍♀️"]],
            "1f3fc": ["1f575-1f3fc-200d-2640-fe0f", 31, 37, 15, ["🕵🏼‍♀️"]],
            "1f3fd": ["1f575-1f3fd-200d-2640-fe0f", 31, 38, 15, ["🕵🏽‍♀️"]],
            "1f3fe": ["1f575-1f3fe-200d-2640-fe0f", 31, 39, 15, ["🕵🏾‍♀️"]],
            "1f3ff": ["1f575-1f3ff-200d-2640-fe0f", 31, 40, 15, ["🕵🏿‍♀️"]]
        },
        "1f575-fe0f-200d-2642-fe0f": {
            "1f3fb": ["1f575-1f3fb-200d-2642-fe0f", 31, 42, 15, ["🕵🏻‍♂️", "🕵🏻"]],
            "1f3fc": ["1f575-1f3fc-200d-2642-fe0f", 31, 43, 15, ["🕵🏼‍♂️", "🕵🏼"]],
            "1f3fd": ["1f575-1f3fd-200d-2642-fe0f", 31, 44, 15, ["🕵🏽‍♂️", "🕵🏽"]],
            "1f3fe": ["1f575-1f3fe-200d-2642-fe0f", 31, 45, 15, ["🕵🏾‍♂️", "🕵🏾"]],
            "1f3ff": ["1f575-1f3ff-200d-2642-fe0f", 31, 46, 15, ["🕵🏿‍♂️", "🕵🏿"]]
        },
        "1f57a": {
            "1f3fb": ["1f57a-1f3fb", 31, 58, 15, ["🕺🏻"]],
            "1f3fc": ["1f57a-1f3fc", 31, 59, 15, ["🕺🏼"]],
            "1f3fd": ["1f57a-1f3fd", 32, 0, 15, ["🕺🏽"]],
            "1f3fe": ["1f57a-1f3fe", 32, 1, 15, ["🕺🏾"]],
            "1f3ff": ["1f57a-1f3ff", 32, 2, 15, ["🕺🏿"]]
        },
        "1f590-fe0f": {
            "1f3fb": ["1f590-1f3fb", 32, 9, 15, ["🖐🏻"]],
            "1f3fc": ["1f590-1f3fc", 32, 10, 15, ["🖐🏼"]],
            "1f3fd": ["1f590-1f3fd", 32, 11, 15, ["🖐🏽"]],
            "1f3fe": ["1f590-1f3fe", 32, 12, 15, ["🖐🏾"]],
            "1f3ff": ["1f590-1f3ff", 32, 13, 15, ["🖐🏿"]]
        },
        "1f595": {
            "1f3fb": ["1f595-1f3fb", 32, 15, 15, ["🖕🏻"]],
            "1f3fc": ["1f595-1f3fc", 32, 16, 15, ["🖕🏼"]],
            "1f3fd": ["1f595-1f3fd", 32, 17, 15, ["🖕🏽"]],
            "1f3fe": ["1f595-1f3fe", 32, 18, 15, ["🖕🏾"]],
            "1f3ff": ["1f595-1f3ff", 32, 19, 15, ["🖕🏿"]]
        },
        "1f596": {
            "1f3fb": ["1f596-1f3fb", 32, 21, 15, ["🖖🏻"]],
            "1f3fc": ["1f596-1f3fc", 32, 22, 15, ["🖖🏼"]],
            "1f3fd": ["1f596-1f3fd", 32, 23, 15, ["🖖🏽"]],
            "1f3fe": ["1f596-1f3fe", 32, 24, 15, ["🖖🏾"]],
            "1f3ff": ["1f596-1f3ff", 32, 25, 15, ["🖖🏿"]]
        },
        "1f645-200d-2640-fe0f": {
            "1f3fb": ["1f645-1f3fb-200d-2640-fe0f", 34, 5, 15, ["🙅🏻‍♀️", "🙅🏻"]],
            "1f3fc": ["1f645-1f3fc-200d-2640-fe0f", 34, 6, 15, ["🙅🏼‍♀️", "🙅🏼"]],
            "1f3fd": ["1f645-1f3fd-200d-2640-fe0f", 34, 7, 15, ["🙅🏽‍♀️", "🙅🏽"]],
            "1f3fe": ["1f645-1f3fe-200d-2640-fe0f", 34, 8, 15, ["🙅🏾‍♀️", "🙅🏾"]],
            "1f3ff": ["1f645-1f3ff-200d-2640-fe0f", 34, 9, 15, ["🙅🏿‍♀️", "🙅🏿"]]
        },
        "1f645-200d-2642-fe0f": {
            "1f3fb": ["1f645-1f3fb-200d-2642-fe0f", 34, 11, 15, ["🙅🏻‍♂️"]],
            "1f3fc": ["1f645-1f3fc-200d-2642-fe0f", 34, 12, 15, ["🙅🏼‍♂️"]],
            "1f3fd": ["1f645-1f3fd-200d-2642-fe0f", 34, 13, 15, ["🙅🏽‍♂️"]],
            "1f3fe": ["1f645-1f3fe-200d-2642-fe0f", 34, 14, 15, ["🙅🏾‍♂️"]],
            "1f3ff": ["1f645-1f3ff-200d-2642-fe0f", 34, 15, 15, ["🙅🏿‍♂️"]]
        },
        "1f646-200d-2640-fe0f": {
            "1f3fb": ["1f646-1f3fb-200d-2640-fe0f", 34, 23, 15, ["🙆🏻‍♀️", "🙆🏻"]],
            "1f3fc": ["1f646-1f3fc-200d-2640-fe0f", 34, 24, 15, ["🙆🏼‍♀️", "🙆🏼"]],
            "1f3fd": ["1f646-1f3fd-200d-2640-fe0f", 34, 25, 15, ["🙆🏽‍♀️", "🙆🏽"]],
            "1f3fe": ["1f646-1f3fe-200d-2640-fe0f", 34, 26, 15, ["🙆🏾‍♀️", "🙆🏾"]],
            "1f3ff": ["1f646-1f3ff-200d-2640-fe0f", 34, 27, 15, ["🙆🏿‍♀️", "🙆🏿"]]
        },
        "1f646-200d-2642-fe0f": {
            "1f3fb": ["1f646-1f3fb-200d-2642-fe0f", 34, 29, 15, ["🙆🏻‍♂️"]],
            "1f3fc": ["1f646-1f3fc-200d-2642-fe0f", 34, 30, 15, ["🙆🏼‍♂️"]],
            "1f3fd": ["1f646-1f3fd-200d-2642-fe0f", 34, 31, 15, ["🙆🏽‍♂️"]],
            "1f3fe": ["1f646-1f3fe-200d-2642-fe0f", 34, 32, 15, ["🙆🏾‍♂️"]],
            "1f3ff": ["1f646-1f3ff-200d-2642-fe0f", 34, 33, 15, ["🙆🏿‍♂️"]]
        },
        "1f647-200d-2640-fe0f": {
            "1f3fb": ["1f647-1f3fb-200d-2640-fe0f", 34, 41, 15, ["🙇🏻‍♀️"]],
            "1f3fc": ["1f647-1f3fc-200d-2640-fe0f", 34, 42, 15, ["🙇🏼‍♀️"]],
            "1f3fd": ["1f647-1f3fd-200d-2640-fe0f", 34, 43, 15, ["🙇🏽‍♀️"]],
            "1f3fe": ["1f647-1f3fe-200d-2640-fe0f", 34, 44, 15, ["🙇🏾‍♀️"]],
            "1f3ff": ["1f647-1f3ff-200d-2640-fe0f", 34, 45, 15, ["🙇🏿‍♀️"]]
        },
        "1f647-200d-2642-fe0f": {
            "1f3fb": ["1f647-1f3fb-200d-2642-fe0f", 34, 47, 15, ["🙇🏻‍♂️", "🙇🏻"]],
            "1f3fc": ["1f647-1f3fc-200d-2642-fe0f", 34, 48, 15, ["🙇🏼‍♂️", "🙇🏼"]],
            "1f3fd": ["1f647-1f3fd-200d-2642-fe0f", 34, 49, 15, ["🙇🏽‍♂️", "🙇🏽"]],
            "1f3fe": ["1f647-1f3fe-200d-2642-fe0f", 34, 50, 15, ["🙇🏾‍♂️", "🙇🏾"]],
            "1f3ff": ["1f647-1f3ff-200d-2642-fe0f", 34, 51, 15, ["🙇🏿‍♂️", "🙇🏿"]]
        },
        "1f64b-200d-2640-fe0f": {
            "1f3fb": ["1f64b-1f3fb-200d-2640-fe0f", 35, 2, 15, ["🙋🏻‍♀️", "🙋🏻"]],
            "1f3fc": ["1f64b-1f3fc-200d-2640-fe0f", 35, 3, 15, ["🙋🏼‍♀️", "🙋🏼"]],
            "1f3fd": ["1f64b-1f3fd-200d-2640-fe0f", 35, 4, 15, ["🙋🏽‍♀️", "🙋🏽"]],
            "1f3fe": ["1f64b-1f3fe-200d-2640-fe0f", 35, 5, 15, ["🙋🏾‍♀️", "🙋🏾"]],
            "1f3ff": ["1f64b-1f3ff-200d-2640-fe0f", 35, 6, 15, ["🙋🏿‍♀️", "🙋🏿"]]
        },
        "1f64b-200d-2642-fe0f": {
            "1f3fb": ["1f64b-1f3fb-200d-2642-fe0f", 35, 8, 15, ["🙋🏻‍♂️"]],
            "1f3fc": ["1f64b-1f3fc-200d-2642-fe0f", 35, 9, 15, ["🙋🏼‍♂️"]],
            "1f3fd": ["1f64b-1f3fd-200d-2642-fe0f", 35, 10, 15, ["🙋🏽‍♂️"]],
            "1f3fe": ["1f64b-1f3fe-200d-2642-fe0f", 35, 11, 15, ["🙋🏾‍♂️"]],
            "1f3ff": ["1f64b-1f3ff-200d-2642-fe0f", 35, 12, 15, ["🙋🏿‍♂️"]]
        },
        "1f64c": {
            "1f3fb": ["1f64c-1f3fb", 35, 20, 15, ["🙌🏻"]],
            "1f3fc": ["1f64c-1f3fc", 35, 21, 15, ["🙌🏼"]],
            "1f3fd": ["1f64c-1f3fd", 35, 22, 15, ["🙌🏽"]],
            "1f3fe": ["1f64c-1f3fe", 35, 23, 15, ["🙌🏾"]],
            "1f3ff": ["1f64c-1f3ff", 35, 24, 15, ["🙌🏿"]]
        },
        "1f64d-200d-2640-fe0f": {
            "1f3fb": ["1f64d-1f3fb-200d-2640-fe0f", 35, 26, 15, ["🙍🏻‍♀️", "🙍🏻"]],
            "1f3fc": ["1f64d-1f3fc-200d-2640-fe0f", 35, 27, 15, ["🙍🏼‍♀️", "🙍🏼"]],
            "1f3fd": ["1f64d-1f3fd-200d-2640-fe0f", 35, 28, 15, ["🙍🏽‍♀️", "🙍🏽"]],
            "1f3fe": ["1f64d-1f3fe-200d-2640-fe0f", 35, 29, 15, ["🙍🏾‍♀️", "🙍🏾"]],
            "1f3ff": ["1f64d-1f3ff-200d-2640-fe0f", 35, 30, 15, ["🙍🏿‍♀️", "🙍🏿"]]
        },
        "1f64d-200d-2642-fe0f": {
            "1f3fb": ["1f64d-1f3fb-200d-2642-fe0f", 35, 32, 15, ["🙍🏻‍♂️"]],
            "1f3fc": ["1f64d-1f3fc-200d-2642-fe0f", 35, 33, 15, ["🙍🏼‍♂️"]],
            "1f3fd": ["1f64d-1f3fd-200d-2642-fe0f", 35, 34, 15, ["🙍🏽‍♂️"]],
            "1f3fe": ["1f64d-1f3fe-200d-2642-fe0f", 35, 35, 15, ["🙍🏾‍♂️"]],
            "1f3ff": ["1f64d-1f3ff-200d-2642-fe0f", 35, 36, 15, ["🙍🏿‍♂️"]]
        },
        "1f64e-200d-2640-fe0f": {
            "1f3fb": ["1f64e-1f3fb-200d-2640-fe0f", 35, 44, 15, ["🙎🏻‍♀️", "🙎🏻"]],
            "1f3fc": ["1f64e-1f3fc-200d-2640-fe0f", 35, 45, 15, ["🙎🏼‍♀️", "🙎🏼"]],
            "1f3fd": ["1f64e-1f3fd-200d-2640-fe0f", 35, 46, 15, ["🙎🏽‍♀️", "🙎🏽"]],
            "1f3fe": ["1f64e-1f3fe-200d-2640-fe0f", 35, 47, 15, ["🙎🏾‍♀️", "🙎🏾"]],
            "1f3ff": ["1f64e-1f3ff-200d-2640-fe0f", 35, 48, 15, ["🙎🏿‍♀️", "🙎🏿"]]
        },
        "1f64e-200d-2642-fe0f": {
            "1f3fb": ["1f64e-1f3fb-200d-2642-fe0f", 35, 50, 15, ["🙎🏻‍♂️"]],
            "1f3fc": ["1f64e-1f3fc-200d-2642-fe0f", 35, 51, 15, ["🙎🏼‍♂️"]],
            "1f3fd": ["1f64e-1f3fd-200d-2642-fe0f", 35, 52, 15, ["🙎🏽‍♂️"]],
            "1f3fe": ["1f64e-1f3fe-200d-2642-fe0f", 35, 53, 15, ["🙎🏾‍♂️"]],
            "1f3ff": ["1f64e-1f3ff-200d-2642-fe0f", 35, 54, 15, ["🙎🏿‍♂️"]]
        },
        "1f64f": {
            "1f3fb": ["1f64f-1f3fb", 36, 2, 15, ["🙏🏻"]],
            "1f3fc": ["1f64f-1f3fc", 36, 3, 15, ["🙏🏼"]],
            "1f3fd": ["1f64f-1f3fd", 36, 4, 15, ["🙏🏽"]],
            "1f3fe": ["1f64f-1f3fe", 36, 5, 15, ["🙏🏾"]],
            "1f3ff": ["1f64f-1f3ff", 36, 6, 15, ["🙏🏿"]]
        },
        "1f6a3-200d-2640-fe0f": {
            "1f3fb": ["1f6a3-1f3fb-200d-2640-fe0f", 36, 43, 15, ["🚣🏻‍♀️"]],
            "1f3fc": ["1f6a3-1f3fc-200d-2640-fe0f", 36, 44, 15, ["🚣🏼‍♀️"]],
            "1f3fd": ["1f6a3-1f3fd-200d-2640-fe0f", 36, 45, 15, ["🚣🏽‍♀️"]],
            "1f3fe": ["1f6a3-1f3fe-200d-2640-fe0f", 36, 46, 15, ["🚣🏾‍♀️"]],
            "1f3ff": ["1f6a3-1f3ff-200d-2640-fe0f", 36, 47, 15, ["🚣🏿‍♀️"]]
        },
        "1f6a3-200d-2642-fe0f": {
            "1f3fb": ["1f6a3-1f3fb-200d-2642-fe0f", 36, 49, 15, ["🚣🏻‍♂️", "🚣🏻"]],
            "1f3fc": ["1f6a3-1f3fc-200d-2642-fe0f", 36, 50, 15, ["🚣🏼‍♂️", "🚣🏼"]],
            "1f3fd": ["1f6a3-1f3fd-200d-2642-fe0f", 36, 51, 15, ["🚣🏽‍♂️", "🚣🏽"]],
            "1f3fe": ["1f6a3-1f3fe-200d-2642-fe0f", 36, 52, 15, ["🚣🏾‍♂️", "🚣🏾"]],
            "1f3ff": ["1f6a3-1f3ff-200d-2642-fe0f", 36, 53, 15, ["🚣🏿‍♂️", "🚣🏿"]]
        },
        "1f6b4-200d-2640-fe0f": {
            "1f3fb": ["1f6b4-1f3fb-200d-2640-fe0f", 37, 17, 15, ["🚴🏻‍♀️"]],
            "1f3fc": ["1f6b4-1f3fc-200d-2640-fe0f", 37, 18, 15, ["🚴🏼‍♀️"]],
            "1f3fd": ["1f6b4-1f3fd-200d-2640-fe0f", 37, 19, 15, ["🚴🏽‍♀️"]],
            "1f3fe": ["1f6b4-1f3fe-200d-2640-fe0f", 37, 20, 15, ["🚴🏾‍♀️"]],
            "1f3ff": ["1f6b4-1f3ff-200d-2640-fe0f", 37, 21, 15, ["🚴🏿‍♀️"]]
        },
        "1f6b4-200d-2642-fe0f": {
            "1f3fb": ["1f6b4-1f3fb-200d-2642-fe0f", 37, 23, 15, ["🚴🏻‍♂️", "🚴🏻"]],
            "1f3fc": ["1f6b4-1f3fc-200d-2642-fe0f", 37, 24, 15, ["🚴🏼‍♂️", "🚴🏼"]],
            "1f3fd": ["1f6b4-1f3fd-200d-2642-fe0f", 37, 25, 15, ["🚴🏽‍♂️", "🚴🏽"]],
            "1f3fe": ["1f6b4-1f3fe-200d-2642-fe0f", 37, 26, 15, ["🚴🏾‍♂️", "🚴🏾"]],
            "1f3ff": ["1f6b4-1f3ff-200d-2642-fe0f", 37, 27, 15, ["🚴🏿‍♂️", "🚴🏿"]]
        },
        "1f6b5-200d-2640-fe0f": {
            "1f3fb": ["1f6b5-1f3fb-200d-2640-fe0f", 37, 35, 15, ["🚵🏻‍♀️"]],
            "1f3fc": ["1f6b5-1f3fc-200d-2640-fe0f", 37, 36, 15, ["🚵🏼‍♀️"]],
            "1f3fd": ["1f6b5-1f3fd-200d-2640-fe0f", 37, 37, 15, ["🚵🏽‍♀️"]],
            "1f3fe": ["1f6b5-1f3fe-200d-2640-fe0f", 37, 38, 15, ["🚵🏾‍♀️"]],
            "1f3ff": ["1f6b5-1f3ff-200d-2640-fe0f", 37, 39, 15, ["🚵🏿‍♀️"]]
        },
        "1f6b5-200d-2642-fe0f": {
            "1f3fb": ["1f6b5-1f3fb-200d-2642-fe0f", 37, 41, 15, ["🚵🏻‍♂️", "🚵🏻"]],
            "1f3fc": ["1f6b5-1f3fc-200d-2642-fe0f", 37, 42, 15, ["🚵🏼‍♂️", "🚵🏼"]],
            "1f3fd": ["1f6b5-1f3fd-200d-2642-fe0f", 37, 43, 15, ["🚵🏽‍♂️", "🚵🏽"]],
            "1f3fe": ["1f6b5-1f3fe-200d-2642-fe0f", 37, 44, 15, ["🚵🏾‍♂️", "🚵🏾"]],
            "1f3ff": ["1f6b5-1f3ff-200d-2642-fe0f", 37, 45, 15, ["🚵🏿‍♂️", "🚵🏿"]]
        },
        "1f6b6-200d-2640-fe0f": {
            "1f3fb": ["1f6b6-1f3fb-200d-2640-fe0f", 37, 53, 15, ["🚶🏻‍♀️"]],
            "1f3fc": ["1f6b6-1f3fc-200d-2640-fe0f", 37, 54, 15, ["🚶🏼‍♀️"]],
            "1f3fd": ["1f6b6-1f3fd-200d-2640-fe0f", 37, 55, 15, ["🚶🏽‍♀️"]],
            "1f3fe": ["1f6b6-1f3fe-200d-2640-fe0f", 37, 56, 15, ["🚶🏾‍♀️"]],
            "1f3ff": ["1f6b6-1f3ff-200d-2640-fe0f", 37, 57, 15, ["🚶🏿‍♀️"]]
        },
        "1f6b6-200d-2642-fe0f": {
            "1f3fb": ["1f6b6-1f3fb-200d-2642-fe0f", 37, 59, 15, ["🚶🏻‍♂️", "🚶🏻"]],
            "1f3fc": ["1f6b6-1f3fc-200d-2642-fe0f", 38, 0, 15, ["🚶🏼‍♂️", "🚶🏼"]],
            "1f3fd": ["1f6b6-1f3fd-200d-2642-fe0f", 38, 1, 15, ["🚶🏽‍♂️", "🚶🏽"]],
            "1f3fe": ["1f6b6-1f3fe-200d-2642-fe0f", 38, 2, 15, ["🚶🏾‍♂️", "🚶🏾"]],
            "1f3ff": ["1f6b6-1f3ff-200d-2642-fe0f", 38, 3, 15, ["🚶🏿‍♂️", "🚶🏿"]]
        },
        "1f6c0": {
            "1f3fb": ["1f6c0-1f3fb", 38, 20, 15, ["🛀🏻"]],
            "1f3fc": ["1f6c0-1f3fc", 38, 21, 15, ["🛀🏼"]],
            "1f3fd": ["1f6c0-1f3fd", 38, 22, 15, ["🛀🏽"]],
            "1f3fe": ["1f6c0-1f3fe", 38, 23, 15, ["🛀🏾"]],
            "1f3ff": ["1f6c0-1f3ff", 38, 24, 15, ["🛀🏿"]]
        },
        "1f6cc": {
            "1f3fb": ["1f6cc-1f3fb", 38, 32, 15, ["🛌🏻"]],
            "1f3fc": ["1f6cc-1f3fc", 38, 33, 15, ["🛌🏼"]],
            "1f3fd": ["1f6cc-1f3fd", 38, 34, 15, ["🛌🏽"]],
            "1f3fe": ["1f6cc-1f3fe", 38, 35, 15, ["🛌🏾"]],
            "1f3ff": ["1f6cc-1f3ff", 38, 36, 15, ["🛌🏿"]]
        },
        "1f90c": {
            "1f3fb": ["1f90c-1f3fb", 39, 19, 15, ["🤌🏻"]],
            "1f3fc": ["1f90c-1f3fc", 39, 20, 15, ["🤌🏼"]],
            "1f3fd": ["1f90c-1f3fd", 39, 21, 15, ["🤌🏽"]],
            "1f3fe": ["1f90c-1f3fe", 39, 22, 15, ["🤌🏾"]],
            "1f3ff": ["1f90c-1f3ff", 39, 23, 15, ["🤌🏿"]]
        },
        "1f90f": {
            "1f3fb": ["1f90f-1f3fb", 39, 27, 15, ["🤏🏻"]],
            "1f3fc": ["1f90f-1f3fc", 39, 28, 15, ["🤏🏼"]],
            "1f3fd": ["1f90f-1f3fd", 39, 29, 15, ["🤏🏽"]],
            "1f3fe": ["1f90f-1f3fe", 39, 30, 15, ["🤏🏾"]],
            "1f3ff": ["1f90f-1f3ff", 39, 31, 15, ["🤏🏿"]]
        },
        "1f918": {
            "1f3fb": ["1f918-1f3fb", 39, 41, 15, ["🤘🏻"]],
            "1f3fc": ["1f918-1f3fc", 39, 42, 15, ["🤘🏼"]],
            "1f3fd": ["1f918-1f3fd", 39, 43, 15, ["🤘🏽"]],
            "1f3fe": ["1f918-1f3fe", 39, 44, 15, ["🤘🏾"]],
            "1f3ff": ["1f918-1f3ff", 39, 45, 15, ["🤘🏿"]]
        },
        "1f919": {
            "1f3fb": ["1f919-1f3fb", 39, 47, 15, ["🤙🏻"]],
            "1f3fc": ["1f919-1f3fc", 39, 48, 15, ["🤙🏼"]],
            "1f3fd": ["1f919-1f3fd", 39, 49, 15, ["🤙🏽"]],
            "1f3fe": ["1f919-1f3fe", 39, 50, 15, ["🤙🏾"]],
            "1f3ff": ["1f919-1f3ff", 39, 51, 15, ["🤙🏿"]]
        },
        "1f91a": {
            "1f3fb": ["1f91a-1f3fb", 39, 53, 15, ["🤚🏻"]],
            "1f3fc": ["1f91a-1f3fc", 39, 54, 15, ["🤚🏼"]],
            "1f3fd": ["1f91a-1f3fd", 39, 55, 15, ["🤚🏽"]],
            "1f3fe": ["1f91a-1f3fe", 39, 56, 15, ["🤚🏾"]],
            "1f3ff": ["1f91a-1f3ff", 39, 57, 15, ["🤚🏿"]]
        },
        "1f91b": {
            "1f3fb": ["1f91b-1f3fb", 39, 59, 15, ["🤛🏻"]],
            "1f3fc": ["1f91b-1f3fc", 40, 0, 15, ["🤛🏼"]],
            "1f3fd": ["1f91b-1f3fd", 40, 1, 15, ["🤛🏽"]],
            "1f3fe": ["1f91b-1f3fe", 40, 2, 15, ["🤛🏾"]],
            "1f3ff": ["1f91b-1f3ff", 40, 3, 15, ["🤛🏿"]]
        },
        "1f91c": {
            "1f3fb": ["1f91c-1f3fb", 40, 5, 15, ["🤜🏻"]],
            "1f3fc": ["1f91c-1f3fc", 40, 6, 15, ["🤜🏼"]],
            "1f3fd": ["1f91c-1f3fd", 40, 7, 15, ["🤜🏽"]],
            "1f3fe": ["1f91c-1f3fe", 40, 8, 15, ["🤜🏾"]],
            "1f3ff": ["1f91c-1f3ff", 40, 9, 15, ["🤜🏿"]]
        },
        "1f91e": {
            "1f3fb": ["1f91e-1f3fb", 40, 12, 15, ["🤞🏻"]],
            "1f3fc": ["1f91e-1f3fc", 40, 13, 15, ["🤞🏼"]],
            "1f3fd": ["1f91e-1f3fd", 40, 14, 15, ["🤞🏽"]],
            "1f3fe": ["1f91e-1f3fe", 40, 15, 15, ["🤞🏾"]],
            "1f3ff": ["1f91e-1f3ff", 40, 16, 15, ["🤞🏿"]]
        },
        "1f91f": {
            "1f3fb": ["1f91f-1f3fb", 40, 18, 15, ["🤟🏻"]],
            "1f3fc": ["1f91f-1f3fc", 40, 19, 15, ["🤟🏼"]],
            "1f3fd": ["1f91f-1f3fd", 40, 20, 15, ["🤟🏽"]],
            "1f3fe": ["1f91f-1f3fe", 40, 21, 15, ["🤟🏾"]],
            "1f3ff": ["1f91f-1f3ff", 40, 22, 15, ["🤟🏿"]]
        },
        "1f926-200d-2640-fe0f": {
            "1f3fb": ["1f926-1f3fb-200d-2640-fe0f", 40, 30, 15, ["🤦🏻‍♀️"]],
            "1f3fc": ["1f926-1f3fc-200d-2640-fe0f", 40, 31, 15, ["🤦🏼‍♀️"]],
            "1f3fd": ["1f926-1f3fd-200d-2640-fe0f", 40, 32, 15, ["🤦🏽‍♀️"]],
            "1f3fe": ["1f926-1f3fe-200d-2640-fe0f", 40, 33, 15, ["🤦🏾‍♀️"]],
            "1f3ff": ["1f926-1f3ff-200d-2640-fe0f", 40, 34, 15, ["🤦🏿‍♀️"]]
        },
        "1f926-200d-2642-fe0f": {
            "1f3fb": ["1f926-1f3fb-200d-2642-fe0f", 40, 36, 15, ["🤦🏻‍♂️"]],
            "1f3fc": ["1f926-1f3fc-200d-2642-fe0f", 40, 37, 15, ["🤦🏼‍♂️"]],
            "1f3fd": ["1f926-1f3fd-200d-2642-fe0f", 40, 38, 15, ["🤦🏽‍♂️"]],
            "1f3fe": ["1f926-1f3fe-200d-2642-fe0f", 40, 39, 15, ["🤦🏾‍♂️"]],
            "1f3ff": ["1f926-1f3ff-200d-2642-fe0f", 40, 40, 15, ["🤦🏿‍♂️"]]
        },
        "1f926": {
            "1f3fb": ["1f926-1f3fb", 40, 42, 15, ["🤦🏻"]],
            "1f3fc": ["1f926-1f3fc", 40, 43, 15, ["🤦🏼"]],
            "1f3fd": ["1f926-1f3fd", 40, 44, 15, ["🤦🏽"]],
            "1f3fe": ["1f926-1f3fe", 40, 45, 15, ["🤦🏾"]],
            "1f3ff": ["1f926-1f3ff", 40, 46, 15, ["🤦🏿"]]
        },
        "1f930": {
            "1f3fb": ["1f930-1f3fb", 40, 57, 15, ["🤰🏻"]],
            "1f3fc": ["1f930-1f3fc", 40, 58, 15, ["🤰🏼"]],
            "1f3fd": ["1f930-1f3fd", 40, 59, 15, ["🤰🏽"]],
            "1f3fe": ["1f930-1f3fe", 41, 0, 15, ["🤰🏾"]],
            "1f3ff": ["1f930-1f3ff", 41, 1, 15, ["🤰🏿"]]
        },
        "1f931": {
            "1f3fb": ["1f931-1f3fb", 41, 3, 15, ["🤱🏻"]],
            "1f3fc": ["1f931-1f3fc", 41, 4, 15, ["🤱🏼"]],
            "1f3fd": ["1f931-1f3fd", 41, 5, 15, ["🤱🏽"]],
            "1f3fe": ["1f931-1f3fe", 41, 6, 15, ["🤱🏾"]],
            "1f3ff": ["1f931-1f3ff", 41, 7, 15, ["🤱🏿"]]
        },
        "1f932": {
            "1f3fb": ["1f932-1f3fb", 41, 9, 15, ["🤲🏻"]],
            "1f3fc": ["1f932-1f3fc", 41, 10, 15, ["🤲🏼"]],
            "1f3fd": ["1f932-1f3fd", 41, 11, 15, ["🤲🏽"]],
            "1f3fe": ["1f932-1f3fe", 41, 12, 15, ["🤲🏾"]],
            "1f3ff": ["1f932-1f3ff", 41, 13, 15, ["🤲🏿"]]
        },
        "1f933": {
            "1f3fb": ["1f933-1f3fb", 41, 15, 15, ["🤳🏻"]],
            "1f3fc": ["1f933-1f3fc", 41, 16, 15, ["🤳🏼"]],
            "1f3fd": ["1f933-1f3fd", 41, 17, 15, ["🤳🏽"]],
            "1f3fe": ["1f933-1f3fe", 41, 18, 15, ["🤳🏾"]],
            "1f3ff": ["1f933-1f3ff", 41, 19, 15, ["🤳🏿"]]
        },
        "1f934": {
            "1f3fb": ["1f934-1f3fb", 41, 21, 15, ["🤴🏻"]],
            "1f3fc": ["1f934-1f3fc", 41, 22, 15, ["🤴🏼"]],
            "1f3fd": ["1f934-1f3fd", 41, 23, 15, ["🤴🏽"]],
            "1f3fe": ["1f934-1f3fe", 41, 24, 15, ["🤴🏾"]],
            "1f3ff": ["1f934-1f3ff", 41, 25, 15, ["🤴🏿"]]
        },
        "1f935-200d-2640-fe0f": {
            "1f3fb": ["1f935-1f3fb-200d-2640-fe0f", 41, 27, 15, ["🤵🏻‍♀️"]],
            "1f3fc": ["1f935-1f3fc-200d-2640-fe0f", 41, 28, 15, ["🤵🏼‍♀️"]],
            "1f3fd": ["1f935-1f3fd-200d-2640-fe0f", 41, 29, 15, ["🤵🏽‍♀️"]],
            "1f3fe": ["1f935-1f3fe-200d-2640-fe0f", 41, 30, 15, ["🤵🏾‍♀️"]],
            "1f3ff": ["1f935-1f3ff-200d-2640-fe0f", 41, 31, 15, ["🤵🏿‍♀️"]]
        },
        "1f935-200d-2642-fe0f": {
            "1f3fb": ["1f935-1f3fb-200d-2642-fe0f", 41, 33, 15, ["🤵🏻‍♂️"]],
            "1f3fc": ["1f935-1f3fc-200d-2642-fe0f", 41, 34, 15, ["🤵🏼‍♂️"]],
            "1f3fd": ["1f935-1f3fd-200d-2642-fe0f", 41, 35, 15, ["🤵🏽‍♂️"]],
            "1f3fe": ["1f935-1f3fe-200d-2642-fe0f", 41, 36, 15, ["🤵🏾‍♂️"]],
            "1f3ff": ["1f935-1f3ff-200d-2642-fe0f", 41, 37, 15, ["🤵🏿‍♂️"]]
        },
        "1f935": {
            "1f3fb": ["1f935-1f3fb", 41, 39, 15, ["🤵🏻"]],
            "1f3fc": ["1f935-1f3fc", 41, 40, 15, ["🤵🏼"]],
            "1f3fd": ["1f935-1f3fd", 41, 41, 15, ["🤵🏽"]],
            "1f3fe": ["1f935-1f3fe", 41, 42, 15, ["🤵🏾"]],
            "1f3ff": ["1f935-1f3ff", 41, 43, 15, ["🤵🏿"]]
        },
        "1f936": {
            "1f3fb": ["1f936-1f3fb", 41, 45, 15, ["🤶🏻"]],
            "1f3fc": ["1f936-1f3fc", 41, 46, 15, ["🤶🏼"]],
            "1f3fd": ["1f936-1f3fd", 41, 47, 15, ["🤶🏽"]],
            "1f3fe": ["1f936-1f3fe", 41, 48, 15, ["🤶🏾"]],
            "1f3ff": ["1f936-1f3ff", 41, 49, 15, ["🤶🏿"]]
        },
        "1f937-200d-2640-fe0f": {
            "1f3fb": ["1f937-1f3fb-200d-2640-fe0f", 41, 51, 15, ["🤷🏻‍♀️"]],
            "1f3fc": ["1f937-1f3fc-200d-2640-fe0f", 41, 52, 15, ["🤷🏼‍♀️"]],
            "1f3fd": ["1f937-1f3fd-200d-2640-fe0f", 41, 53, 15, ["🤷🏽‍♀️"]],
            "1f3fe": ["1f937-1f3fe-200d-2640-fe0f", 41, 54, 15, ["🤷🏾‍♀️"]],
            "1f3ff": ["1f937-1f3ff-200d-2640-fe0f", 41, 55, 15, ["🤷🏿‍♀️"]]
        },
        "1f937-200d-2642-fe0f": {
            "1f3fb": ["1f937-1f3fb-200d-2642-fe0f", 41, 57, 15, ["🤷🏻‍♂️"]],
            "1f3fc": ["1f937-1f3fc-200d-2642-fe0f", 41, 58, 15, ["🤷🏼‍♂️"]],
            "1f3fd": ["1f937-1f3fd-200d-2642-fe0f", 41, 59, 15, ["🤷🏽‍♂️"]],
            "1f3fe": ["1f937-1f3fe-200d-2642-fe0f", 42, 0, 15, ["🤷🏾‍♂️"]],
            "1f3ff": ["1f937-1f3ff-200d-2642-fe0f", 42, 1, 15, ["🤷🏿‍♂️"]]
        },
        "1f937": {
            "1f3fb": ["1f937-1f3fb", 42, 3, 15, ["🤷🏻"]],
            "1f3fc": ["1f937-1f3fc", 42, 4, 15, ["🤷🏼"]],
            "1f3fd": ["1f937-1f3fd", 42, 5, 15, ["🤷🏽"]],
            "1f3fe": ["1f937-1f3fe", 42, 6, 15, ["🤷🏾"]],
            "1f3ff": ["1f937-1f3ff", 42, 7, 15, ["🤷🏿"]]
        },
        "1f938-200d-2640-fe0f": {
            "1f3fb": ["1f938-1f3fb-200d-2640-fe0f", 42, 9, 15, ["🤸🏻‍♀️"]],
            "1f3fc": ["1f938-1f3fc-200d-2640-fe0f", 42, 10, 15, ["🤸🏼‍♀️"]],
            "1f3fd": ["1f938-1f3fd-200d-2640-fe0f", 42, 11, 15, ["🤸🏽‍♀️"]],
            "1f3fe": ["1f938-1f3fe-200d-2640-fe0f", 42, 12, 15, ["🤸🏾‍♀️"]],
            "1f3ff": ["1f938-1f3ff-200d-2640-fe0f", 42, 13, 15, ["🤸🏿‍♀️"]]
        },
        "1f938-200d-2642-fe0f": {
            "1f3fb": ["1f938-1f3fb-200d-2642-fe0f", 42, 15, 15, ["🤸🏻‍♂️"]],
            "1f3fc": ["1f938-1f3fc-200d-2642-fe0f", 42, 16, 15, ["🤸🏼‍♂️"]],
            "1f3fd": ["1f938-1f3fd-200d-2642-fe0f", 42, 17, 15, ["🤸🏽‍♂️"]],
            "1f3fe": ["1f938-1f3fe-200d-2642-fe0f", 42, 18, 15, ["🤸🏾‍♂️"]],
            "1f3ff": ["1f938-1f3ff-200d-2642-fe0f", 42, 19, 15, ["🤸🏿‍♂️"]]
        },
        "1f938": {
            "1f3fb": ["1f938-1f3fb", 42, 21, 15, ["🤸🏻"]],
            "1f3fc": ["1f938-1f3fc", 42, 22, 15, ["🤸🏼"]],
            "1f3fd": ["1f938-1f3fd", 42, 23, 15, ["🤸🏽"]],
            "1f3fe": ["1f938-1f3fe", 42, 24, 15, ["🤸🏾"]],
            "1f3ff": ["1f938-1f3ff", 42, 25, 15, ["🤸🏿"]]
        },
        "1f939-200d-2640-fe0f": {
            "1f3fb": ["1f939-1f3fb-200d-2640-fe0f", 42, 27, 15, ["🤹🏻‍♀️"]],
            "1f3fc": ["1f939-1f3fc-200d-2640-fe0f", 42, 28, 15, ["🤹🏼‍♀️"]],
            "1f3fd": ["1f939-1f3fd-200d-2640-fe0f", 42, 29, 15, ["🤹🏽‍♀️"]],
            "1f3fe": ["1f939-1f3fe-200d-2640-fe0f", 42, 30, 15, ["🤹🏾‍♀️"]],
            "1f3ff": ["1f939-1f3ff-200d-2640-fe0f", 42, 31, 15, ["🤹🏿‍♀️"]]
        },
        "1f939-200d-2642-fe0f": {
            "1f3fb": ["1f939-1f3fb-200d-2642-fe0f", 42, 33, 15, ["🤹🏻‍♂️"]],
            "1f3fc": ["1f939-1f3fc-200d-2642-fe0f", 42, 34, 15, ["🤹🏼‍♂️"]],
            "1f3fd": ["1f939-1f3fd-200d-2642-fe0f", 42, 35, 15, ["🤹🏽‍♂️"]],
            "1f3fe": ["1f939-1f3fe-200d-2642-fe0f", 42, 36, 15, ["🤹🏾‍♂️"]],
            "1f3ff": ["1f939-1f3ff-200d-2642-fe0f", 42, 37, 15, ["🤹🏿‍♂️"]]
        },
        "1f939": {
            "1f3fb": ["1f939-1f3fb", 42, 39, 15, ["🤹🏻"]],
            "1f3fc": ["1f939-1f3fc", 42, 40, 15, ["🤹🏼"]],
            "1f3fd": ["1f939-1f3fd", 42, 41, 15, ["🤹🏽"]],
            "1f3fe": ["1f939-1f3fe", 42, 42, 15, ["🤹🏾"]],
            "1f3ff": ["1f939-1f3ff", 42, 43, 15, ["🤹🏿"]]
        },
        "1f93d-200d-2640-fe0f": {
            "1f3fb": ["1f93d-1f3fb-200d-2640-fe0f", 42, 49, 15, ["🤽🏻‍♀️"]],
            "1f3fc": ["1f93d-1f3fc-200d-2640-fe0f", 42, 50, 15, ["🤽🏼‍♀️"]],
            "1f3fd": ["1f93d-1f3fd-200d-2640-fe0f", 42, 51, 15, ["🤽🏽‍♀️"]],
            "1f3fe": ["1f93d-1f3fe-200d-2640-fe0f", 42, 52, 15, ["🤽🏾‍♀️"]],
            "1f3ff": ["1f93d-1f3ff-200d-2640-fe0f", 42, 53, 15, ["🤽🏿‍♀️"]]
        },
        "1f93d-200d-2642-fe0f": {
            "1f3fb": ["1f93d-1f3fb-200d-2642-fe0f", 42, 55, 15, ["🤽🏻‍♂️"]],
            "1f3fc": ["1f93d-1f3fc-200d-2642-fe0f", 42, 56, 15, ["🤽🏼‍♂️"]],
            "1f3fd": ["1f93d-1f3fd-200d-2642-fe0f", 42, 57, 15, ["🤽🏽‍♂️"]],
            "1f3fe": ["1f93d-1f3fe-200d-2642-fe0f", 42, 58, 15, ["🤽🏾‍♂️"]],
            "1f3ff": ["1f93d-1f3ff-200d-2642-fe0f", 42, 59, 15, ["🤽🏿‍♂️"]]
        },
        "1f93d": {
            "1f3fb": ["1f93d-1f3fb", 43, 1, 15, ["🤽🏻"]],
            "1f3fc": ["1f93d-1f3fc", 43, 2, 15, ["🤽🏼"]],
            "1f3fd": ["1f93d-1f3fd", 43, 3, 15, ["🤽🏽"]],
            "1f3fe": ["1f93d-1f3fe", 43, 4, 15, ["🤽🏾"]],
            "1f3ff": ["1f93d-1f3ff", 43, 5, 15, ["🤽🏿"]]
        },
        "1f93e-200d-2640-fe0f": {
            "1f3fb": ["1f93e-1f3fb-200d-2640-fe0f", 43, 7, 15, ["🤾🏻‍♀️"]],
            "1f3fc": ["1f93e-1f3fc-200d-2640-fe0f", 43, 8, 15, ["🤾🏼‍♀️"]],
            "1f3fd": ["1f93e-1f3fd-200d-2640-fe0f", 43, 9, 15, ["🤾🏽‍♀️"]],
            "1f3fe": ["1f93e-1f3fe-200d-2640-fe0f", 43, 10, 15, ["🤾🏾‍♀️"]],
            "1f3ff": ["1f93e-1f3ff-200d-2640-fe0f", 43, 11, 15, ["🤾🏿‍♀️"]]
        },
        "1f93e-200d-2642-fe0f": {
            "1f3fb": ["1f93e-1f3fb-200d-2642-fe0f", 43, 13, 15, ["🤾🏻‍♂️"]],
            "1f3fc": ["1f93e-1f3fc-200d-2642-fe0f", 43, 14, 15, ["🤾🏼‍♂️"]],
            "1f3fd": ["1f93e-1f3fd-200d-2642-fe0f", 43, 15, 15, ["🤾🏽‍♂️"]],
            "1f3fe": ["1f93e-1f3fe-200d-2642-fe0f", 43, 16, 15, ["🤾🏾‍♂️"]],
            "1f3ff": ["1f93e-1f3ff-200d-2642-fe0f", 43, 17, 15, ["🤾🏿‍♂️"]]
        },
        "1f93e": {
            "1f3fb": ["1f93e-1f3fb", 43, 19, 15, ["🤾🏻"]],
            "1f3fc": ["1f93e-1f3fc", 43, 20, 15, ["🤾🏼"]],
            "1f3fd": ["1f93e-1f3fd", 43, 21, 15, ["🤾🏽"]],
            "1f3fe": ["1f93e-1f3fe", 43, 22, 15, ["🤾🏾"]],
            "1f3ff": ["1f93e-1f3ff", 43, 23, 15, ["🤾🏿"]]
        },
        "1f977": {
            "1f3fb": ["1f977-1f3fb", 44, 20, 15, ["🥷🏻"]],
            "1f3fc": ["1f977-1f3fc", 44, 21, 15, ["🥷🏼"]],
            "1f3fd": ["1f977-1f3fd", 44, 22, 15, ["🥷🏽"]],
            "1f3fe": ["1f977-1f3fe", 44, 23, 15, ["🥷🏾"]],
            "1f3ff": ["1f977-1f3ff", 44, 24, 15, ["🥷🏿"]]
        },
        "1f9b5": {
            "1f3fb": ["1f9b5-1f3fb", 45, 22, 15, ["🦵🏻"]],
            "1f3fc": ["1f9b5-1f3fc", 45, 23, 15, ["🦵🏼"]],
            "1f3fd": ["1f9b5-1f3fd", 45, 24, 15, ["🦵🏽"]],
            "1f3fe": ["1f9b5-1f3fe", 45, 25, 15, ["🦵🏾"]],
            "1f3ff": ["1f9b5-1f3ff", 45, 26, 15, ["🦵🏿"]]
        },
        "1f9b6": {
            "1f3fb": ["1f9b6-1f3fb", 45, 28, 15, ["🦶🏻"]],
            "1f3fc": ["1f9b6-1f3fc", 45, 29, 15, ["🦶🏼"]],
            "1f3fd": ["1f9b6-1f3fd", 45, 30, 15, ["🦶🏽"]],
            "1f3fe": ["1f9b6-1f3fe", 45, 31, 15, ["🦶🏾"]],
            "1f3ff": ["1f9b6-1f3ff", 45, 32, 15, ["🦶🏿"]]
        },
        "1f9b8-200d-2640-fe0f": {
            "1f3fb": ["1f9b8-1f3fb-200d-2640-fe0f", 45, 35, 15, ["🦸🏻‍♀️"]],
            "1f3fc": ["1f9b8-1f3fc-200d-2640-fe0f", 45, 36, 15, ["🦸🏼‍♀️"]],
            "1f3fd": ["1f9b8-1f3fd-200d-2640-fe0f", 45, 37, 15, ["🦸🏽‍♀️"]],
            "1f3fe": ["1f9b8-1f3fe-200d-2640-fe0f", 45, 38, 15, ["🦸🏾‍♀️"]],
            "1f3ff": ["1f9b8-1f3ff-200d-2640-fe0f", 45, 39, 15, ["🦸🏿‍♀️"]]
        },
        "1f9b8-200d-2642-fe0f": {
            "1f3fb": ["1f9b8-1f3fb-200d-2642-fe0f", 45, 41, 15, ["🦸🏻‍♂️"]],
            "1f3fc": ["1f9b8-1f3fc-200d-2642-fe0f", 45, 42, 15, ["🦸🏼‍♂️"]],
            "1f3fd": ["1f9b8-1f3fd-200d-2642-fe0f", 45, 43, 15, ["🦸🏽‍♂️"]],
            "1f3fe": ["1f9b8-1f3fe-200d-2642-fe0f", 45, 44, 15, ["🦸🏾‍♂️"]],
            "1f3ff": ["1f9b8-1f3ff-200d-2642-fe0f", 45, 45, 15, ["🦸🏿‍♂️"]]
        },
        "1f9b8": {
            "1f3fb": ["1f9b8-1f3fb", 45, 47, 15, ["🦸🏻"]],
            "1f3fc": ["1f9b8-1f3fc", 45, 48, 15, ["🦸🏼"]],
            "1f3fd": ["1f9b8-1f3fd", 45, 49, 15, ["🦸🏽"]],
            "1f3fe": ["1f9b8-1f3fe", 45, 50, 15, ["🦸🏾"]],
            "1f3ff": ["1f9b8-1f3ff", 45, 51, 15, ["🦸🏿"]]
        },
        "1f9b9-200d-2640-fe0f": {
            "1f3fb": ["1f9b9-1f3fb-200d-2640-fe0f", 45, 53, 15, ["🦹🏻‍♀️"]],
            "1f3fc": ["1f9b9-1f3fc-200d-2640-fe0f", 45, 54, 15, ["🦹🏼‍♀️"]],
            "1f3fd": ["1f9b9-1f3fd-200d-2640-fe0f", 45, 55, 15, ["🦹🏽‍♀️"]],
            "1f3fe": ["1f9b9-1f3fe-200d-2640-fe0f", 45, 56, 15, ["🦹🏾‍♀️"]],
            "1f3ff": ["1f9b9-1f3ff-200d-2640-fe0f", 45, 57, 15, ["🦹🏿‍♀️"]]
        },
        "1f9b9-200d-2642-fe0f": {
            "1f3fb": ["1f9b9-1f3fb-200d-2642-fe0f", 45, 59, 15, ["🦹🏻‍♂️"]],
            "1f3fc": ["1f9b9-1f3fc-200d-2642-fe0f", 46, 0, 15, ["🦹🏼‍♂️"]],
            "1f3fd": ["1f9b9-1f3fd-200d-2642-fe0f", 46, 1, 15, ["🦹🏽‍♂️"]],
            "1f3fe": ["1f9b9-1f3fe-200d-2642-fe0f", 46, 2, 15, ["🦹🏾‍♂️"]],
            "1f3ff": ["1f9b9-1f3ff-200d-2642-fe0f", 46, 3, 15, ["🦹🏿‍♂️"]]
        },
        "1f9b9": {
            "1f3fb": ["1f9b9-1f3fb", 46, 5, 15, ["🦹🏻"]],
            "1f3fc": ["1f9b9-1f3fc", 46, 6, 15, ["🦹🏼"]],
            "1f3fd": ["1f9b9-1f3fd", 46, 7, 15, ["🦹🏽"]],
            "1f3fe": ["1f9b9-1f3fe", 46, 8, 15, ["🦹🏾"]],
            "1f3ff": ["1f9b9-1f3ff", 46, 9, 15, ["🦹🏿"]]
        },
        "1f9bb": {
            "1f3fb": ["1f9bb-1f3fb", 46, 12, 15, ["🦻🏻"]],
            "1f3fc": ["1f9bb-1f3fc", 46, 13, 15, ["🦻🏼"]],
            "1f3fd": ["1f9bb-1f3fd", 46, 14, 15, ["🦻🏽"]],
            "1f3fe": ["1f9bb-1f3fe", 46, 15, 15, ["🦻🏾"]],
            "1f3ff": ["1f9bb-1f3ff", 46, 16, 15, ["🦻🏿"]]
        },
        "1f9cd-200d-2640-fe0f": {
            "1f3fb": ["1f9cd-1f3fb-200d-2640-fe0f", 46, 34, 15, ["🧍🏻‍♀️"]],
            "1f3fc": ["1f9cd-1f3fc-200d-2640-fe0f", 46, 35, 15, ["🧍🏼‍♀️"]],
            "1f3fd": ["1f9cd-1f3fd-200d-2640-fe0f", 46, 36, 15, ["🧍🏽‍♀️"]],
            "1f3fe": ["1f9cd-1f3fe-200d-2640-fe0f", 46, 37, 15, ["🧍🏾‍♀️"]],
            "1f3ff": ["1f9cd-1f3ff-200d-2640-fe0f", 46, 38, 15, ["🧍🏿‍♀️"]]
        },
        "1f9cd-200d-2642-fe0f": {
            "1f3fb": ["1f9cd-1f3fb-200d-2642-fe0f", 46, 40, 15, ["🧍🏻‍♂️"]],
            "1f3fc": ["1f9cd-1f3fc-200d-2642-fe0f", 46, 41, 15, ["🧍🏼‍♂️"]],
            "1f3fd": ["1f9cd-1f3fd-200d-2642-fe0f", 46, 42, 15, ["🧍🏽‍♂️"]],
            "1f3fe": ["1f9cd-1f3fe-200d-2642-fe0f", 46, 43, 15, ["🧍🏾‍♂️"]],
            "1f3ff": ["1f9cd-1f3ff-200d-2642-fe0f", 46, 44, 15, ["🧍🏿‍♂️"]]
        },
        "1f9cd": {
            "1f3fb": ["1f9cd-1f3fb", 46, 46, 15, ["🧍🏻"]],
            "1f3fc": ["1f9cd-1f3fc", 46, 47, 15, ["🧍🏼"]],
            "1f3fd": ["1f9cd-1f3fd", 46, 48, 15, ["🧍🏽"]],
            "1f3fe": ["1f9cd-1f3fe", 46, 49, 15, ["🧍🏾"]],
            "1f3ff": ["1f9cd-1f3ff", 46, 50, 15, ["🧍🏿"]]
        },
        "1f9ce-200d-2640-fe0f": {
            "1f3fb": ["1f9ce-1f3fb-200d-2640-fe0f", 46, 52, 15, ["🧎🏻‍♀️"]],
            "1f3fc": ["1f9ce-1f3fc-200d-2640-fe0f", 46, 53, 15, ["🧎🏼‍♀️"]],
            "1f3fd": ["1f9ce-1f3fd-200d-2640-fe0f", 46, 54, 15, ["🧎🏽‍♀️"]],
            "1f3fe": ["1f9ce-1f3fe-200d-2640-fe0f", 46, 55, 15, ["🧎🏾‍♀️"]],
            "1f3ff": ["1f9ce-1f3ff-200d-2640-fe0f", 46, 56, 15, ["🧎🏿‍♀️"]]
        },
        "1f9ce-200d-2642-fe0f": {
            "1f3fb": ["1f9ce-1f3fb-200d-2642-fe0f", 46, 58, 15, ["🧎🏻‍♂️"]],
            "1f3fc": ["1f9ce-1f3fc-200d-2642-fe0f", 46, 59, 15, ["🧎🏼‍♂️"]],
            "1f3fd": ["1f9ce-1f3fd-200d-2642-fe0f", 47, 0, 15, ["🧎🏽‍♂️"]],
            "1f3fe": ["1f9ce-1f3fe-200d-2642-fe0f", 47, 1, 15, ["🧎🏾‍♂️"]],
            "1f3ff": ["1f9ce-1f3ff-200d-2642-fe0f", 47, 2, 15, ["🧎🏿‍♂️"]]
        },
        "1f9ce": {
            "1f3fb": ["1f9ce-1f3fb", 47, 4, 15, ["🧎🏻"]],
            "1f3fc": ["1f9ce-1f3fc", 47, 5, 15, ["🧎🏼"]],
            "1f3fd": ["1f9ce-1f3fd", 47, 6, 15, ["🧎🏽"]],
            "1f3fe": ["1f9ce-1f3fe", 47, 7, 15, ["🧎🏾"]],
            "1f3ff": ["1f9ce-1f3ff", 47, 8, 15, ["🧎🏿"]]
        },
        "1f9cf-200d-2640-fe0f": {
            "1f3fb": ["1f9cf-1f3fb-200d-2640-fe0f", 47, 10, 15, ["🧏🏻‍♀️"]],
            "1f3fc": ["1f9cf-1f3fc-200d-2640-fe0f", 47, 11, 15, ["🧏🏼‍♀️"]],
            "1f3fd": ["1f9cf-1f3fd-200d-2640-fe0f", 47, 12, 15, ["🧏🏽‍♀️"]],
            "1f3fe": ["1f9cf-1f3fe-200d-2640-fe0f", 47, 13, 15, ["🧏🏾‍♀️"]],
            "1f3ff": ["1f9cf-1f3ff-200d-2640-fe0f", 47, 14, 15, ["🧏🏿‍♀️"]]
        },
        "1f9cf-200d-2642-fe0f": {
            "1f3fb": ["1f9cf-1f3fb-200d-2642-fe0f", 47, 16, 15, ["🧏🏻‍♂️"]],
            "1f3fc": ["1f9cf-1f3fc-200d-2642-fe0f", 47, 17, 15, ["🧏🏼‍♂️"]],
            "1f3fd": ["1f9cf-1f3fd-200d-2642-fe0f", 47, 18, 15, ["🧏🏽‍♂️"]],
            "1f3fe": ["1f9cf-1f3fe-200d-2642-fe0f", 47, 19, 15, ["🧏🏾‍♂️"]],
            "1f3ff": ["1f9cf-1f3ff-200d-2642-fe0f", 47, 20, 15, ["🧏🏿‍♂️"]]
        },
        "1f9cf": {
            "1f3fb": ["1f9cf-1f3fb", 47, 22, 15, ["🧏🏻"]],
            "1f3fc": ["1f9cf-1f3fc", 47, 23, 15, ["🧏🏼"]],
            "1f3fd": ["1f9cf-1f3fd", 47, 24, 15, ["🧏🏽"]],
            "1f3fe": ["1f9cf-1f3fe", 47, 25, 15, ["🧏🏾"]],
            "1f3ff": ["1f9cf-1f3ff", 47, 26, 15, ["🧏🏿"]]
        },
        "1f9d1-200d-1f33e": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f33e", 47, 29, 15, ["🧑🏻‍🌾"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f33e", 47, 30, 15, ["🧑🏼‍🌾"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f33e", 47, 31, 15, ["🧑🏽‍🌾"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f33e", 47, 32, 15, ["🧑🏾‍🌾"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f33e", 47, 33, 15, ["🧑🏿‍🌾"]]
        },
        "1f9d1-200d-1f373": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f373", 47, 35, 15, ["🧑🏻‍🍳"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f373", 47, 36, 15, ["🧑🏼‍🍳"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f373", 47, 37, 15, ["🧑🏽‍🍳"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f373", 47, 38, 15, ["🧑🏾‍🍳"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f373", 47, 39, 15, ["🧑🏿‍🍳"]]
        },
        "1f9d1-200d-1f37c": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f37c", 47, 41, 15, ["🧑🏻‍🍼"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f37c", 47, 42, 15, ["🧑🏼‍🍼"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f37c", 47, 43, 15, ["🧑🏽‍🍼"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f37c", 47, 44, 15, ["🧑🏾‍🍼"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f37c", 47, 45, 15, ["🧑🏿‍🍼"]]
        },
        "1f9d1-200d-1f384": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f384", 47, 47, 15, ["🧑🏻‍🎄"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f384", 47, 48, 15, ["🧑🏼‍🎄"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f384", 47, 49, 15, ["🧑🏽‍🎄"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f384", 47, 50, 15, ["🧑🏾‍🎄"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f384", 47, 51, 15, ["🧑🏿‍🎄"]]
        },
        "1f9d1-200d-1f393": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f393", 47, 53, 15, ["🧑🏻‍🎓"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f393", 47, 54, 15, ["🧑🏼‍🎓"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f393", 47, 55, 15, ["🧑🏽‍🎓"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f393", 47, 56, 15, ["🧑🏾‍🎓"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f393", 47, 57, 15, ["🧑🏿‍🎓"]]
        },
        "1f9d1-200d-1f3a4": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f3a4", 47, 59, 15, ["🧑🏻‍🎤"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f3a4", 48, 0, 15, ["🧑🏼‍🎤"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f3a4", 48, 1, 15, ["🧑🏽‍🎤"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f3a4", 48, 2, 15, ["🧑🏾‍🎤"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f3a4", 48, 3, 15, ["🧑🏿‍🎤"]]
        },
        "1f9d1-200d-1f3a8": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f3a8", 48, 5, 15, ["🧑🏻‍🎨"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f3a8", 48, 6, 15, ["🧑🏼‍🎨"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f3a8", 48, 7, 15, ["🧑🏽‍🎨"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f3a8", 48, 8, 15, ["🧑🏾‍🎨"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f3a8", 48, 9, 15, ["🧑🏿‍🎨"]]
        },
        "1f9d1-200d-1f3eb": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f3eb", 48, 11, 15, ["🧑🏻‍🏫"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f3eb", 48, 12, 15, ["🧑🏼‍🏫"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f3eb", 48, 13, 15, ["🧑🏽‍🏫"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f3eb", 48, 14, 15, ["🧑🏾‍🏫"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f3eb", 48, 15, 15, ["🧑🏿‍🏫"]]
        },
        "1f9d1-200d-1f3ed": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f3ed", 48, 17, 15, ["🧑🏻‍🏭"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f3ed", 48, 18, 15, ["🧑🏼‍🏭"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f3ed", 48, 19, 15, ["🧑🏽‍🏭"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f3ed", 48, 20, 15, ["🧑🏾‍🏭"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f3ed", 48, 21, 15, ["🧑🏿‍🏭"]]
        },
        "1f9d1-200d-1f4bb": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f4bb", 48, 23, 15, ["🧑🏻‍💻"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f4bb", 48, 24, 15, ["🧑🏼‍💻"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f4bb", 48, 25, 15, ["🧑🏽‍💻"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f4bb", 48, 26, 15, ["🧑🏾‍💻"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f4bb", 48, 27, 15, ["🧑🏿‍💻"]]
        },
        "1f9d1-200d-1f4bc": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f4bc", 48, 29, 15, ["🧑🏻‍💼"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f4bc", 48, 30, 15, ["🧑🏼‍💼"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f4bc", 48, 31, 15, ["🧑🏽‍💼"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f4bc", 48, 32, 15, ["🧑🏾‍💼"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f4bc", 48, 33, 15, ["🧑🏿‍💼"]]
        },
        "1f9d1-200d-1f527": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f527", 48, 35, 15, ["🧑🏻‍🔧"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f527", 48, 36, 15, ["🧑🏼‍🔧"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f527", 48, 37, 15, ["🧑🏽‍🔧"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f527", 48, 38, 15, ["🧑🏾‍🔧"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f527", 48, 39, 15, ["🧑🏿‍🔧"]]
        },
        "1f9d1-200d-1f52c": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f52c", 48, 41, 15, ["🧑🏻‍🔬"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f52c", 48, 42, 15, ["🧑🏼‍🔬"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f52c", 48, 43, 15, ["🧑🏽‍🔬"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f52c", 48, 44, 15, ["🧑🏾‍🔬"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f52c", 48, 45, 15, ["🧑🏿‍🔬"]]
        },
        "1f9d1-200d-1f680": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f680", 48, 47, 15, ["🧑🏻‍🚀"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f680", 48, 48, 15, ["🧑🏼‍🚀"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f680", 48, 49, 15, ["🧑🏽‍🚀"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f680", 48, 50, 15, ["🧑🏾‍🚀"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f680", 48, 51, 15, ["🧑🏿‍🚀"]]
        },
        "1f9d1-200d-1f692": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f692", 48, 53, 15, ["🧑🏻‍🚒"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f692", 48, 54, 15, ["🧑🏼‍🚒"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f692", 48, 55, 15, ["🧑🏽‍🚒"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f692", 48, 56, 15, ["🧑🏾‍🚒"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f692", 48, 57, 15, ["🧑🏿‍🚒"]]
        },
        "1f9d1-200d-1f91d-200d-1f9d1": {
            "1f3fb-1f3fb": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb", 48, 59, 15, ["🧑🏻‍🤝‍🧑🏻"]],
            "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc", 49, 0, 7, ["🧑🏻‍🤝‍🧑🏼"]],
            "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd", 49, 1, 7, ["🧑🏻‍🤝‍🧑🏽"]],
            "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe", 49, 2, 7, ["🧑🏻‍🤝‍🧑🏾"]],
            "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff", 49, 3, 7, ["🧑🏻‍🤝‍🧑🏿"]],
            "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb", 49, 4, 15, ["🧑🏼‍🤝‍🧑🏻"]],
            "1f3fc-1f3fc": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc", 49, 5, 15, ["🧑🏼‍🤝‍🧑🏼"]],
            "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd", 49, 6, 7, ["🧑🏼‍🤝‍🧑🏽"]],
            "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe", 49, 7, 7, ["🧑🏼‍🤝‍🧑🏾"]],
            "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff", 49, 8, 7, ["🧑🏼‍🤝‍🧑🏿"]],
            "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb", 49, 9, 15, ["🧑🏽‍🤝‍🧑🏻"]],
            "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc", 49, 10, 15, ["🧑🏽‍🤝‍🧑🏼"]],
            "1f3fd-1f3fd": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd", 49, 11, 15, ["🧑🏽‍🤝‍🧑🏽"]],
            "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe", 49, 12, 7, ["🧑🏽‍🤝‍🧑🏾"]],
            "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff", 49, 13, 7, ["🧑🏽‍🤝‍🧑🏿"]],
            "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb", 49, 14, 15, ["🧑🏾‍🤝‍🧑🏻"]],
            "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc", 49, 15, 15, ["🧑🏾‍🤝‍🧑🏼"]],
            "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd", 49, 16, 15, ["🧑🏾‍🤝‍🧑🏽"]],
            "1f3fe-1f3fe": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe", 49, 17, 15, ["🧑🏾‍🤝‍🧑🏾"]],
            "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff", 49, 18, 7, ["🧑🏾‍🤝‍🧑🏿"]],
            "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb", 49, 19, 15, ["🧑🏿‍🤝‍🧑🏻"]],
            "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc", 49, 20, 15, ["🧑🏿‍🤝‍🧑🏼"]],
            "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd", 49, 21, 15, ["🧑🏿‍🤝‍🧑🏽"]],
            "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe", 49, 22, 15, ["🧑🏿‍🤝‍🧑🏾"]],
            "1f3ff-1f3ff": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff", 49, 23, 15, ["🧑🏿‍🤝‍🧑🏿"]]
        },
        "1f9d1-200d-1f9af": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f9af", 49, 25, 15, ["🧑🏻‍🦯"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f9af", 49, 26, 15, ["🧑🏼‍🦯"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f9af", 49, 27, 15, ["🧑🏽‍🦯"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f9af", 49, 28, 15, ["🧑🏾‍🦯"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f9af", 49, 29, 15, ["🧑🏿‍🦯"]]
        },
        "1f9d1-200d-1f9b0": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f9b0", 49, 31, 15, ["🧑🏻‍🦰"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f9b0", 49, 32, 15, ["🧑🏼‍🦰"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f9b0", 49, 33, 15, ["🧑🏽‍🦰"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f9b0", 49, 34, 15, ["🧑🏾‍🦰"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f9b0", 49, 35, 15, ["🧑🏿‍🦰"]]
        },
        "1f9d1-200d-1f9b1": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f9b1", 49, 37, 15, ["🧑🏻‍🦱"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f9b1", 49, 38, 15, ["🧑🏼‍🦱"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f9b1", 49, 39, 15, ["🧑🏽‍🦱"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f9b1", 49, 40, 15, ["🧑🏾‍🦱"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f9b1", 49, 41, 15, ["🧑🏿‍🦱"]]
        },
        "1f9d1-200d-1f9b2": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f9b2", 49, 43, 7, ["🧑🏻‍🦲"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f9b2", 49, 44, 7, ["🧑🏼‍🦲"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f9b2", 49, 45, 7, ["🧑🏽‍🦲"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f9b2", 49, 46, 7, ["🧑🏾‍🦲"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f9b2", 49, 47, 7, ["🧑🏿‍🦲"]]
        },
        "1f9d1-200d-1f9b3": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f9b3", 49, 49, 7, ["🧑🏻‍🦳"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f9b3", 49, 50, 7, ["🧑🏼‍🦳"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f9b3", 49, 51, 7, ["🧑🏽‍🦳"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f9b3", 49, 52, 7, ["🧑🏾‍🦳"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f9b3", 49, 53, 7, ["🧑🏿‍🦳"]]
        },
        "1f9d1-200d-1f9bc": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f9bc", 49, 55, 15, ["🧑🏻‍🦼"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f9bc", 49, 56, 15, ["🧑🏼‍🦼"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f9bc", 49, 57, 15, ["🧑🏽‍🦼"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f9bc", 49, 58, 15, ["🧑🏾‍🦼"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f9bc", 49, 59, 15, ["🧑🏿‍🦼"]]
        },
        "1f9d1-200d-1f9bd": {
            "1f3fb": ["1f9d1-1f3fb-200d-1f9bd", 50, 1, 15, ["🧑🏻‍🦽"]],
            "1f3fc": ["1f9d1-1f3fc-200d-1f9bd", 50, 2, 15, ["🧑🏼‍🦽"]],
            "1f3fd": ["1f9d1-1f3fd-200d-1f9bd", 50, 3, 15, ["🧑🏽‍🦽"]],
            "1f3fe": ["1f9d1-1f3fe-200d-1f9bd", 50, 4, 15, ["🧑🏾‍🦽"]],
            "1f3ff": ["1f9d1-1f3ff-200d-1f9bd", 50, 5, 15, ["🧑🏿‍🦽"]]
        },
        "1f9d1-200d-2695-fe0f": {
            "1f3fb": ["1f9d1-1f3fb-200d-2695-fe0f", 50, 7, 15, ["🧑🏻‍⚕️"]],
            "1f3fc": ["1f9d1-1f3fc-200d-2695-fe0f", 50, 8, 15, ["🧑🏼‍⚕️"]],
            "1f3fd": ["1f9d1-1f3fd-200d-2695-fe0f", 50, 9, 15, ["🧑🏽‍⚕️"]],
            "1f3fe": ["1f9d1-1f3fe-200d-2695-fe0f", 50, 10, 15, ["🧑🏾‍⚕️"]],
            "1f3ff": ["1f9d1-1f3ff-200d-2695-fe0f", 50, 11, 15, ["🧑🏿‍⚕️"]]
        },
        "1f9d1-200d-2696-fe0f": {
            "1f3fb": ["1f9d1-1f3fb-200d-2696-fe0f", 50, 13, 15, ["🧑🏻‍⚖️"]],
            "1f3fc": ["1f9d1-1f3fc-200d-2696-fe0f", 50, 14, 15, ["🧑🏼‍⚖️"]],
            "1f3fd": ["1f9d1-1f3fd-200d-2696-fe0f", 50, 15, 15, ["🧑🏽‍⚖️"]],
            "1f3fe": ["1f9d1-1f3fe-200d-2696-fe0f", 50, 16, 15, ["🧑🏾‍⚖️"]],
            "1f3ff": ["1f9d1-1f3ff-200d-2696-fe0f", 50, 17, 15, ["🧑🏿‍⚖️"]]
        },
        "1f9d1-200d-2708-fe0f": {
            "1f3fb": ["1f9d1-1f3fb-200d-2708-fe0f", 50, 19, 15, ["🧑🏻‍✈️"]],
            "1f3fc": ["1f9d1-1f3fc-200d-2708-fe0f", 50, 20, 15, ["🧑🏼‍✈️"]],
            "1f3fd": ["1f9d1-1f3fd-200d-2708-fe0f", 50, 21, 15, ["🧑🏽‍✈️"]],
            "1f3fe": ["1f9d1-1f3fe-200d-2708-fe0f", 50, 22, 15, ["🧑🏾‍✈️"]],
            "1f3ff": ["1f9d1-1f3ff-200d-2708-fe0f", 50, 23, 15, ["🧑🏿‍✈️"]]
        },
        "1f9d1": {
            "1f3fb": ["1f9d1-1f3fb", 50, 25, 15, ["🧑🏻"]],
            "1f3fc": ["1f9d1-1f3fc", 50, 26, 15, ["🧑🏼"]],
            "1f3fd": ["1f9d1-1f3fd", 50, 27, 15, ["🧑🏽"]],
            "1f3fe": ["1f9d1-1f3fe", 50, 28, 15, ["🧑🏾"]],
            "1f3ff": ["1f9d1-1f3ff", 50, 29, 15, ["🧑🏿"]]
        },
        "1f9d2": {
            "1f3fb": ["1f9d2-1f3fb", 50, 31, 15, ["🧒🏻"]],
            "1f3fc": ["1f9d2-1f3fc", 50, 32, 15, ["🧒🏼"]],
            "1f3fd": ["1f9d2-1f3fd", 50, 33, 15, ["🧒🏽"]],
            "1f3fe": ["1f9d2-1f3fe", 50, 34, 15, ["🧒🏾"]],
            "1f3ff": ["1f9d2-1f3ff", 50, 35, 15, ["🧒🏿"]]
        },
        "1f9d3": {
            "1f3fb": ["1f9d3-1f3fb", 50, 37, 15, ["🧓🏻"]],
            "1f3fc": ["1f9d3-1f3fc", 50, 38, 15, ["🧓🏼"]],
            "1f3fd": ["1f9d3-1f3fd", 50, 39, 15, ["🧓🏽"]],
            "1f3fe": ["1f9d3-1f3fe", 50, 40, 15, ["🧓🏾"]],
            "1f3ff": ["1f9d3-1f3ff", 50, 41, 15, ["🧓🏿"]]
        },
        "1f9d4-200d-2640-fe0f": {
            "1f3fb": ["1f9d4-1f3fb-200d-2640-fe0f", 50, 43, 7, ["🧔🏻‍♀️"]],
            "1f3fc": ["1f9d4-1f3fc-200d-2640-fe0f", 50, 44, 7, ["🧔🏼‍♀️"]],
            "1f3fd": ["1f9d4-1f3fd-200d-2640-fe0f", 50, 45, 7, ["🧔🏽‍♀️"]],
            "1f3fe": ["1f9d4-1f3fe-200d-2640-fe0f", 50, 46, 7, ["🧔🏾‍♀️"]],
            "1f3ff": ["1f9d4-1f3ff-200d-2640-fe0f", 50, 47, 7, ["🧔🏿‍♀️"]]
        },
        "1f9d4-200d-2642-fe0f": {
            "1f3fb": ["1f9d4-1f3fb-200d-2642-fe0f", 50, 49, 7, ["🧔🏻‍♂️"]],
            "1f3fc": ["1f9d4-1f3fc-200d-2642-fe0f", 50, 50, 7, ["🧔🏼‍♂️"]],
            "1f3fd": ["1f9d4-1f3fd-200d-2642-fe0f", 50, 51, 7, ["🧔🏽‍♂️"]],
            "1f3fe": ["1f9d4-1f3fe-200d-2642-fe0f", 50, 52, 7, ["🧔🏾‍♂️"]],
            "1f3ff": ["1f9d4-1f3ff-200d-2642-fe0f", 50, 53, 7, ["🧔🏿‍♂️"]]
        },
        "1f9d4": {
            "1f3fb": ["1f9d4-1f3fb", 50, 55, 15, ["🧔🏻"]],
            "1f3fc": ["1f9d4-1f3fc", 50, 56, 15, ["🧔🏼"]],
            "1f3fd": ["1f9d4-1f3fd", 50, 57, 15, ["🧔🏽"]],
            "1f3fe": ["1f9d4-1f3fe", 50, 58, 15, ["🧔🏾"]],
            "1f3ff": ["1f9d4-1f3ff", 50, 59, 15, ["🧔🏿"]]
        },
        "1f9d5": {
            "1f3fb": ["1f9d5-1f3fb", 51, 1, 15, ["🧕🏻"]],
            "1f3fc": ["1f9d5-1f3fc", 51, 2, 15, ["🧕🏼"]],
            "1f3fd": ["1f9d5-1f3fd", 51, 3, 15, ["🧕🏽"]],
            "1f3fe": ["1f9d5-1f3fe", 51, 4, 15, ["🧕🏾"]],
            "1f3ff": ["1f9d5-1f3ff", 51, 5, 15, ["🧕🏿"]]
        },
        "1f9d6-200d-2640-fe0f": {
            "1f3fb": ["1f9d6-1f3fb-200d-2640-fe0f", 51, 7, 15, ["🧖🏻‍♀️"]],
            "1f3fc": ["1f9d6-1f3fc-200d-2640-fe0f", 51, 8, 15, ["🧖🏼‍♀️"]],
            "1f3fd": ["1f9d6-1f3fd-200d-2640-fe0f", 51, 9, 15, ["🧖🏽‍♀️"]],
            "1f3fe": ["1f9d6-1f3fe-200d-2640-fe0f", 51, 10, 15, ["🧖🏾‍♀️"]],
            "1f3ff": ["1f9d6-1f3ff-200d-2640-fe0f", 51, 11, 15, ["🧖🏿‍♀️"]]
        },
        "1f9d6-200d-2642-fe0f": {
            "1f3fb": ["1f9d6-1f3fb-200d-2642-fe0f", 51, 13, 15, ["🧖🏻‍♂️", "🧖🏻"]],
            "1f3fc": ["1f9d6-1f3fc-200d-2642-fe0f", 51, 14, 15, ["🧖🏼‍♂️", "🧖🏼"]],
            "1f3fd": ["1f9d6-1f3fd-200d-2642-fe0f", 51, 15, 15, ["🧖🏽‍♂️", "🧖🏽"]],
            "1f3fe": ["1f9d6-1f3fe-200d-2642-fe0f", 51, 16, 15, ["🧖🏾‍♂️", "🧖🏾"]],
            "1f3ff": ["1f9d6-1f3ff-200d-2642-fe0f", 51, 17, 15, ["🧖🏿‍♂️", "🧖🏿"]]
        },
        "1f9d7-200d-2640-fe0f": {
            "1f3fb": ["1f9d7-1f3fb-200d-2640-fe0f", 51, 25, 15, ["🧗🏻‍♀️", "🧗🏻"]],
            "1f3fc": ["1f9d7-1f3fc-200d-2640-fe0f", 51, 26, 15, ["🧗🏼‍♀️", "🧗🏼"]],
            "1f3fd": ["1f9d7-1f3fd-200d-2640-fe0f", 51, 27, 15, ["🧗🏽‍♀️", "🧗🏽"]],
            "1f3fe": ["1f9d7-1f3fe-200d-2640-fe0f", 51, 28, 15, ["🧗🏾‍♀️", "🧗🏾"]],
            "1f3ff": ["1f9d7-1f3ff-200d-2640-fe0f", 51, 29, 15, ["🧗🏿‍♀️", "🧗🏿"]]
        },
        "1f9d7-200d-2642-fe0f": {
            "1f3fb": ["1f9d7-1f3fb-200d-2642-fe0f", 51, 31, 15, ["🧗🏻‍♂️"]],
            "1f3fc": ["1f9d7-1f3fc-200d-2642-fe0f", 51, 32, 15, ["🧗🏼‍♂️"]],
            "1f3fd": ["1f9d7-1f3fd-200d-2642-fe0f", 51, 33, 15, ["🧗🏽‍♂️"]],
            "1f3fe": ["1f9d7-1f3fe-200d-2642-fe0f", 51, 34, 15, ["🧗🏾‍♂️"]],
            "1f3ff": ["1f9d7-1f3ff-200d-2642-fe0f", 51, 35, 15, ["🧗🏿‍♂️"]]
        },
        "1f9d8-200d-2640-fe0f": {
            "1f3fb": ["1f9d8-1f3fb-200d-2640-fe0f", 51, 43, 15, ["🧘🏻‍♀️", "🧘🏻"]],
            "1f3fc": ["1f9d8-1f3fc-200d-2640-fe0f", 51, 44, 15, ["🧘🏼‍♀️", "🧘🏼"]],
            "1f3fd": ["1f9d8-1f3fd-200d-2640-fe0f", 51, 45, 15, ["🧘🏽‍♀️", "🧘🏽"]],
            "1f3fe": ["1f9d8-1f3fe-200d-2640-fe0f", 51, 46, 15, ["🧘🏾‍♀️", "🧘🏾"]],
            "1f3ff": ["1f9d8-1f3ff-200d-2640-fe0f", 51, 47, 15, ["🧘🏿‍♀️", "🧘🏿"]]
        },
        "1f9d8-200d-2642-fe0f": {
            "1f3fb": ["1f9d8-1f3fb-200d-2642-fe0f", 51, 49, 15, ["🧘🏻‍♂️"]],
            "1f3fc": ["1f9d8-1f3fc-200d-2642-fe0f", 51, 50, 15, ["🧘🏼‍♂️"]],
            "1f3fd": ["1f9d8-1f3fd-200d-2642-fe0f", 51, 51, 15, ["🧘🏽‍♂️"]],
            "1f3fe": ["1f9d8-1f3fe-200d-2642-fe0f", 51, 52, 15, ["🧘🏾‍♂️"]],
            "1f3ff": ["1f9d8-1f3ff-200d-2642-fe0f", 51, 53, 15, ["🧘🏿‍♂️"]]
        },
        "1f9d9-200d-2640-fe0f": {
            "1f3fb": ["1f9d9-1f3fb-200d-2640-fe0f", 52, 1, 15, ["🧙🏻‍♀️", "🧙🏻"]],
            "1f3fc": ["1f9d9-1f3fc-200d-2640-fe0f", 52, 2, 15, ["🧙🏼‍♀️", "🧙🏼"]],
            "1f3fd": ["1f9d9-1f3fd-200d-2640-fe0f", 52, 3, 15, ["🧙🏽‍♀️", "🧙🏽"]],
            "1f3fe": ["1f9d9-1f3fe-200d-2640-fe0f", 52, 4, 15, ["🧙🏾‍♀️", "🧙🏾"]],
            "1f3ff": ["1f9d9-1f3ff-200d-2640-fe0f", 52, 5, 15, ["🧙🏿‍♀️", "🧙🏿"]]
        },
        "1f9d9-200d-2642-fe0f": {
            "1f3fb": ["1f9d9-1f3fb-200d-2642-fe0f", 52, 7, 15, ["🧙🏻‍♂️"]],
            "1f3fc": ["1f9d9-1f3fc-200d-2642-fe0f", 52, 8, 15, ["🧙🏼‍♂️"]],
            "1f3fd": ["1f9d9-1f3fd-200d-2642-fe0f", 52, 9, 15, ["🧙🏽‍♂️"]],
            "1f3fe": ["1f9d9-1f3fe-200d-2642-fe0f", 52, 10, 15, ["🧙🏾‍♂️"]],
            "1f3ff": ["1f9d9-1f3ff-200d-2642-fe0f", 52, 11, 15, ["🧙🏿‍♂️"]]
        },
        "1f9da-200d-2640-fe0f": {
            "1f3fb": ["1f9da-1f3fb-200d-2640-fe0f", 52, 19, 15, ["🧚🏻‍♀️", "🧚🏻"]],
            "1f3fc": ["1f9da-1f3fc-200d-2640-fe0f", 52, 20, 15, ["🧚🏼‍♀️", "🧚🏼"]],
            "1f3fd": ["1f9da-1f3fd-200d-2640-fe0f", 52, 21, 15, ["🧚🏽‍♀️", "🧚🏽"]],
            "1f3fe": ["1f9da-1f3fe-200d-2640-fe0f", 52, 22, 15, ["🧚🏾‍♀️", "🧚🏾"]],
            "1f3ff": ["1f9da-1f3ff-200d-2640-fe0f", 52, 23, 15, ["🧚🏿‍♀️", "🧚🏿"]]
        },
        "1f9da-200d-2642-fe0f": {
            "1f3fb": ["1f9da-1f3fb-200d-2642-fe0f", 52, 25, 15, ["🧚🏻‍♂️"]],
            "1f3fc": ["1f9da-1f3fc-200d-2642-fe0f", 52, 26, 15, ["🧚🏼‍♂️"]],
            "1f3fd": ["1f9da-1f3fd-200d-2642-fe0f", 52, 27, 15, ["🧚🏽‍♂️"]],
            "1f3fe": ["1f9da-1f3fe-200d-2642-fe0f", 52, 28, 15, ["🧚🏾‍♂️"]],
            "1f3ff": ["1f9da-1f3ff-200d-2642-fe0f", 52, 29, 15, ["🧚🏿‍♂️"]]
        },
        "1f9db-200d-2640-fe0f": {
            "1f3fb": ["1f9db-1f3fb-200d-2640-fe0f", 52, 37, 15, ["🧛🏻‍♀️", "🧛🏻"]],
            "1f3fc": ["1f9db-1f3fc-200d-2640-fe0f", 52, 38, 15, ["🧛🏼‍♀️", "🧛🏼"]],
            "1f3fd": ["1f9db-1f3fd-200d-2640-fe0f", 52, 39, 15, ["🧛🏽‍♀️", "🧛🏽"]],
            "1f3fe": ["1f9db-1f3fe-200d-2640-fe0f", 52, 40, 15, ["🧛🏾‍♀️", "🧛🏾"]],
            "1f3ff": ["1f9db-1f3ff-200d-2640-fe0f", 52, 41, 15, ["🧛🏿‍♀️", "🧛🏿"]]
        },
        "1f9db-200d-2642-fe0f": {
            "1f3fb": ["1f9db-1f3fb-200d-2642-fe0f", 52, 43, 15, ["🧛🏻‍♂️"]],
            "1f3fc": ["1f9db-1f3fc-200d-2642-fe0f", 52, 44, 15, ["🧛🏼‍♂️"]],
            "1f3fd": ["1f9db-1f3fd-200d-2642-fe0f", 52, 45, 15, ["🧛🏽‍♂️"]],
            "1f3fe": ["1f9db-1f3fe-200d-2642-fe0f", 52, 46, 15, ["🧛🏾‍♂️"]],
            "1f3ff": ["1f9db-1f3ff-200d-2642-fe0f", 52, 47, 15, ["🧛🏿‍♂️"]]
        },
        "1f9dc-200d-2640-fe0f": {
            "1f3fb": ["1f9dc-1f3fb-200d-2640-fe0f", 52, 55, 15, ["🧜🏻‍♀️"]],
            "1f3fc": ["1f9dc-1f3fc-200d-2640-fe0f", 52, 56, 15, ["🧜🏼‍♀️"]],
            "1f3fd": ["1f9dc-1f3fd-200d-2640-fe0f", 52, 57, 15, ["🧜🏽‍♀️"]],
            "1f3fe": ["1f9dc-1f3fe-200d-2640-fe0f", 52, 58, 15, ["🧜🏾‍♀️"]],
            "1f3ff": ["1f9dc-1f3ff-200d-2640-fe0f", 52, 59, 15, ["🧜🏿‍♀️"]]
        },
        "1f9dc-200d-2642-fe0f": {
            "1f3fb": ["1f9dc-1f3fb-200d-2642-fe0f", 53, 1, 15, ["🧜🏻‍♂️", "🧜🏻"]],
            "1f3fc": ["1f9dc-1f3fc-200d-2642-fe0f", 53, 2, 15, ["🧜🏼‍♂️", "🧜🏼"]],
            "1f3fd": ["1f9dc-1f3fd-200d-2642-fe0f", 53, 3, 15, ["🧜🏽‍♂️", "🧜🏽"]],
            "1f3fe": ["1f9dc-1f3fe-200d-2642-fe0f", 53, 4, 15, ["🧜🏾‍♂️", "🧜🏾"]],
            "1f3ff": ["1f9dc-1f3ff-200d-2642-fe0f", 53, 5, 15, ["🧜🏿‍♂️", "🧜🏿"]]
        },
        "1f9dd-200d-2640-fe0f": {
            "1f3fb": ["1f9dd-1f3fb-200d-2640-fe0f", 53, 13, 15, ["🧝🏻‍♀️"]],
            "1f3fc": ["1f9dd-1f3fc-200d-2640-fe0f", 53, 14, 15, ["🧝🏼‍♀️"]],
            "1f3fd": ["1f9dd-1f3fd-200d-2640-fe0f", 53, 15, 15, ["🧝🏽‍♀️"]],
            "1f3fe": ["1f9dd-1f3fe-200d-2640-fe0f", 53, 16, 15, ["🧝🏾‍♀️"]],
            "1f3ff": ["1f9dd-1f3ff-200d-2640-fe0f", 53, 17, 15, ["🧝🏿‍♀️"]]
        },
        "1f9dd-200d-2642-fe0f": {
            "1f3fb": ["1f9dd-1f3fb-200d-2642-fe0f", 53, 19, 15, ["🧝🏻‍♂️", "🧝🏻"]],
            "1f3fc": ["1f9dd-1f3fc-200d-2642-fe0f", 53, 20, 15, ["🧝🏼‍♂️", "🧝🏼"]],
            "1f3fd": ["1f9dd-1f3fd-200d-2642-fe0f", 53, 21, 15, ["🧝🏽‍♂️", "🧝🏽"]],
            "1f3fe": ["1f9dd-1f3fe-200d-2642-fe0f", 53, 22, 15, ["🧝🏾‍♂️", "🧝🏾"]],
            "1f3ff": ["1f9dd-1f3ff-200d-2642-fe0f", 53, 23, 15, ["🧝🏿‍♂️", "🧝🏿"]]
        },
        "261d-fe0f": {
            "1f3fb": ["261d-1f3fb", 55, 55, 15, ["☝🏻"]],
            "1f3fc": ["261d-1f3fc", 55, 56, 15, ["☝🏼"]],
            "1f3fd": ["261d-1f3fd", 55, 57, 15, ["☝🏽"]],
            "1f3fe": ["261d-1f3fe", 55, 58, 15, ["☝🏾"]],
            "1f3ff": ["261d-1f3ff", 55, 59, 15, ["☝🏿"]]
        },
        "26f9-fe0f-200d-2640-fe0f": {
            "1f3fb": ["26f9-1f3fb-200d-2640-fe0f", 57, 10, 15, ["⛹🏻‍♀️"]],
            "1f3fc": ["26f9-1f3fc-200d-2640-fe0f", 57, 11, 15, ["⛹🏼‍♀️"]],
            "1f3fd": ["26f9-1f3fd-200d-2640-fe0f", 57, 12, 15, ["⛹🏽‍♀️"]],
            "1f3fe": ["26f9-1f3fe-200d-2640-fe0f", 57, 13, 15, ["⛹🏾‍♀️"]],
            "1f3ff": ["26f9-1f3ff-200d-2640-fe0f", 57, 14, 15, ["⛹🏿‍♀️"]]
        },
        "26f9-fe0f-200d-2642-fe0f": {
            "1f3fb": ["26f9-1f3fb-200d-2642-fe0f", 57, 16, 15, ["⛹🏻‍♂️", "⛹🏻"]],
            "1f3fc": ["26f9-1f3fc-200d-2642-fe0f", 57, 17, 15, ["⛹🏼‍♂️", "⛹🏼"]],
            "1f3fd": ["26f9-1f3fd-200d-2642-fe0f", 57, 18, 15, ["⛹🏽‍♂️", "⛹🏽"]],
            "1f3fe": ["26f9-1f3fe-200d-2642-fe0f", 57, 19, 15, ["⛹🏾‍♂️", "⛹🏾"]],
            "1f3ff": ["26f9-1f3ff-200d-2642-fe0f", 57, 20, 15, ["⛹🏿‍♂️", "⛹🏿"]]
        },
        "270a": {
            "1f3fb": ["270a-1f3fb", 57, 34, 15, ["✊🏻"]],
            "1f3fc": ["270a-1f3fc", 57, 35, 15, ["✊🏼"]],
            "1f3fd": ["270a-1f3fd", 57, 36, 15, ["✊🏽"]],
            "1f3fe": ["270a-1f3fe", 57, 37, 15, ["✊🏾"]],
            "1f3ff": ["270a-1f3ff", 57, 38, 15, ["✊🏿"]]
        },
        "270b": {
            "1f3fb": ["270b-1f3fb", 57, 40, 15, ["✋🏻"]],
            "1f3fc": ["270b-1f3fc", 57, 41, 15, ["✋🏼"]],
            "1f3fd": ["270b-1f3fd", 57, 42, 15, ["✋🏽"]],
            "1f3fe": ["270b-1f3fe", 57, 43, 15, ["✋🏾"]],
            "1f3ff": ["270b-1f3ff", 57, 44, 15, ["✋🏿"]]
        },
        "270c-fe0f": {
            "1f3fb": ["270c-1f3fb", 57, 46, 15, ["✌🏻"]],
            "1f3fc": ["270c-1f3fc", 57, 47, 15, ["✌🏼"]],
            "1f3fd": ["270c-1f3fd", 57, 48, 15, ["✌🏽"]],
            "1f3fe": ["270c-1f3fe", 57, 49, 15, ["✌🏾"]],
            "1f3ff": ["270c-1f3ff", 57, 50, 15, ["✌🏿"]]
        },
        "270d-fe0f": {
            "1f3fb": ["270d-1f3fb", 57, 52, 15, ["✍🏻"]],
            "1f3fc": ["270d-1f3fc", 57, 53, 15, ["✍🏼"]],
            "1f3fd": ["270d-1f3fd", 57, 54, 15, ["✍🏽"]],
            "1f3fe": ["270d-1f3fe", 57, 55, 15, ["✍🏾"]],
            "1f3ff": ["270d-1f3ff", 57, 56, 15, ["✍🏿"]]
        }
    }, f.prototype.obsoletes_data = {
        "1f3c3-200d-2642-fe0f": ["1f3c3", 8, 34, 15],
        "1f3c3-1f3fb-200d-2642-fe0f": ["1f3c3-1f3fb", 8, 35, 15],
        "1f3c3-1f3fc-200d-2642-fe0f": ["1f3c3-1f3fc", 8, 36, 15],
        "1f3c3-1f3fd-200d-2642-fe0f": ["1f3c3-1f3fd", 8, 37, 15],
        "1f3c3-1f3fe-200d-2642-fe0f": ["1f3c3-1f3fe", 8, 38, 15],
        "1f3c3-1f3ff-200d-2642-fe0f": ["1f3c3-1f3ff", 8, 39, 15],
        "1f3c4-200d-2642-fe0f": ["1f3c4", 8, 52, 15],
        "1f3c4-1f3fb-200d-2642-fe0f": ["1f3c4-1f3fb", 8, 53, 15],
        "1f3c4-1f3fc-200d-2642-fe0f": ["1f3c4-1f3fc", 8, 54, 15],
        "1f3c4-1f3fd-200d-2642-fe0f": ["1f3c4-1f3fd", 8, 55, 15],
        "1f3c4-1f3fe-200d-2642-fe0f": ["1f3c4-1f3fe", 8, 56, 15],
        "1f3c4-1f3ff-200d-2642-fe0f": ["1f3c4-1f3ff", 8, 57, 15],
        "1f3ca-200d-2642-fe0f": ["1f3ca", 9, 20, 15],
        "1f3ca-1f3fb-200d-2642-fe0f": ["1f3ca-1f3fb", 9, 21, 15],
        "1f3ca-1f3fc-200d-2642-fe0f": ["1f3ca-1f3fc", 9, 22, 15],
        "1f3ca-1f3fd-200d-2642-fe0f": ["1f3ca-1f3fd", 9, 23, 15],
        "1f3ca-1f3fe-200d-2642-fe0f": ["1f3ca-1f3fe", 9, 24, 15],
        "1f3ca-1f3ff-200d-2642-fe0f": ["1f3ca-1f3ff", 9, 25, 15],
        "1f3cb-fe0f-200d-2642-fe0f": ["1f3cb-fe0f", 9, 38, 15],
        "1f3cb-1f3fb-200d-2642-fe0f": ["1f3cb-1f3fb", 9, 39, 15],
        "1f3cb-1f3fc-200d-2642-fe0f": ["1f3cb-1f3fc", 9, 40, 15],
        "1f3cb-1f3fd-200d-2642-fe0f": ["1f3cb-1f3fd", 9, 41, 15],
        "1f3cb-1f3fe-200d-2642-fe0f": ["1f3cb-1f3fe", 9, 42, 15],
        "1f3cb-1f3ff-200d-2642-fe0f": ["1f3cb-1f3ff", 9, 43, 15],
        "1f3cc-fe0f-200d-2642-fe0f": ["1f3cc-fe0f", 9, 56, 15],
        "1f3cc-1f3fb-200d-2642-fe0f": ["1f3cc-1f3fb", 9, 57, 15],
        "1f3cc-1f3fc-200d-2642-fe0f": ["1f3cc-1f3fc", 9, 58, 15],
        "1f3cc-1f3fd-200d-2642-fe0f": ["1f3cc-1f3fd", 9, 59, 15],
        "1f3cc-1f3fe-200d-2642-fe0f": ["1f3cc-1f3fe", 10, 0, 15],
        "1f3cc-1f3ff-200d-2642-fe0f": ["1f3cc-1f3ff", 10, 1, 15],
        "1f468-200d-1f469-200d-1f466": ["1f46a", 22, 0, 15],
        "1f46e-200d-2642-fe0f": ["1f46e", 23, 31, 15],
        "1f46e-1f3fb-200d-2642-fe0f": ["1f46e-1f3fb", 23, 32, 15],
        "1f46e-1f3fc-200d-2642-fe0f": ["1f46e-1f3fc", 23, 33, 15],
        "1f46e-1f3fd-200d-2642-fe0f": ["1f46e-1f3fd", 23, 34, 15],
        "1f46e-1f3fe-200d-2642-fe0f": ["1f46e-1f3fe", 23, 35, 15],
        "1f46e-1f3ff-200d-2642-fe0f": ["1f46e-1f3ff", 23, 36, 15],
        "1f46f-200d-2640-fe0f": ["1f46f", 23, 39, 15],
        "1f471-200d-2642-fe0f": ["1f471", 24, 10, 15],
        "1f471-1f3fb-200d-2642-fe0f": ["1f471-1f3fb", 24, 11, 15],
        "1f471-1f3fc-200d-2642-fe0f": ["1f471-1f3fc", 24, 12, 15],
        "1f471-1f3fd-200d-2642-fe0f": ["1f471-1f3fd", 24, 13, 15],
        "1f471-1f3fe-200d-2642-fe0f": ["1f471-1f3fe", 24, 14, 15],
        "1f471-1f3ff-200d-2642-fe0f": ["1f471-1f3ff", 24, 15, 15],
        "1f473-200d-2642-fe0f": ["1f473", 24, 34, 15],
        "1f473-1f3fb-200d-2642-fe0f": ["1f473-1f3fb", 24, 35, 15],
        "1f473-1f3fc-200d-2642-fe0f": ["1f473-1f3fc", 24, 36, 15],
        "1f473-1f3fd-200d-2642-fe0f": ["1f473-1f3fd", 24, 37, 15],
        "1f473-1f3fe-200d-2642-fe0f": ["1f473-1f3fe", 24, 38, 15],
        "1f473-1f3ff-200d-2642-fe0f": ["1f473-1f3ff", 24, 39, 15],
        "1f477-200d-2642-fe0f": ["1f477", 25, 10, 15],
        "1f477-1f3fb-200d-2642-fe0f": ["1f477-1f3fb", 25, 11, 15],
        "1f477-1f3fc-200d-2642-fe0f": ["1f477-1f3fc", 25, 12, 15],
        "1f477-1f3fd-200d-2642-fe0f": ["1f477-1f3fd", 25, 13, 15],
        "1f477-1f3fe-200d-2642-fe0f": ["1f477-1f3fe", 25, 14, 15],
        "1f477-1f3ff-200d-2642-fe0f": ["1f477-1f3ff", 25, 15, 15],
        "1f481-200d-2640-fe0f": ["1f481", 25, 47, 15],
        "1f481-1f3fb-200d-2640-fe0f": ["1f481-1f3fb", 25, 48, 15],
        "1f481-1f3fc-200d-2640-fe0f": ["1f481-1f3fc", 25, 49, 15],
        "1f481-1f3fd-200d-2640-fe0f": ["1f481-1f3fd", 25, 50, 15],
        "1f481-1f3fe-200d-2640-fe0f": ["1f481-1f3fe", 25, 51, 15],
        "1f481-1f3ff-200d-2640-fe0f": ["1f481-1f3ff", 25, 52, 15],
        "1f482-200d-2642-fe0f": ["1f482", 26, 5, 15],
        "1f482-1f3fb-200d-2642-fe0f": ["1f482-1f3fb", 26, 6, 15],
        "1f482-1f3fc-200d-2642-fe0f": ["1f482-1f3fc", 26, 7, 15],
        "1f482-1f3fd-200d-2642-fe0f": ["1f482-1f3fd", 26, 8, 15],
        "1f482-1f3fe-200d-2642-fe0f": ["1f482-1f3fe", 26, 9, 15],
        "1f482-1f3ff-200d-2642-fe0f": ["1f482-1f3ff", 26, 10, 15],
        "1f486-200d-2640-fe0f": ["1f486", 26, 36, 15],
        "1f486-1f3fb-200d-2640-fe0f": ["1f486-1f3fb", 26, 37, 15],
        "1f486-1f3fc-200d-2640-fe0f": ["1f486-1f3fc", 26, 38, 15],
        "1f486-1f3fd-200d-2640-fe0f": ["1f486-1f3fd", 26, 39, 15],
        "1f486-1f3fe-200d-2640-fe0f": ["1f486-1f3fe", 26, 40, 15],
        "1f486-1f3ff-200d-2640-fe0f": ["1f486-1f3ff", 26, 41, 15],
        "1f487-200d-2640-fe0f": ["1f487", 26, 54, 15],
        "1f487-1f3fb-200d-2640-fe0f": ["1f487-1f3fb", 26, 55, 15],
        "1f487-1f3fc-200d-2640-fe0f": ["1f487-1f3fc", 26, 56, 15],
        "1f487-1f3fd-200d-2640-fe0f": ["1f487-1f3fd", 26, 57, 15],
        "1f487-1f3fe-200d-2640-fe0f": ["1f487-1f3fe", 26, 58, 15],
        "1f487-1f3ff-200d-2640-fe0f": ["1f487-1f3ff", 26, 59, 15],
        "1f575-fe0f-200d-2642-fe0f": ["1f575-fe0f", 31, 47, 15],
        "1f575-1f3fb-200d-2642-fe0f": ["1f575-1f3fb", 31, 48, 15],
        "1f575-1f3fc-200d-2642-fe0f": ["1f575-1f3fc", 31, 49, 15],
        "1f575-1f3fd-200d-2642-fe0f": ["1f575-1f3fd", 31, 50, 15],
        "1f575-1f3fe-200d-2642-fe0f": ["1f575-1f3fe", 31, 51, 15],
        "1f575-1f3ff-200d-2642-fe0f": ["1f575-1f3ff", 31, 52, 15],
        "1f645-200d-2640-fe0f": ["1f645", 34, 16, 15],
        "1f645-1f3fb-200d-2640-fe0f": ["1f645-1f3fb", 34, 17, 15],
        "1f645-1f3fc-200d-2640-fe0f": ["1f645-1f3fc", 34, 18, 15],
        "1f645-1f3fd-200d-2640-fe0f": ["1f645-1f3fd", 34, 19, 15],
        "1f645-1f3fe-200d-2640-fe0f": ["1f645-1f3fe", 34, 20, 15],
        "1f645-1f3ff-200d-2640-fe0f": ["1f645-1f3ff", 34, 21, 15],
        "1f646-200d-2640-fe0f": ["1f646", 34, 34, 15],
        "1f646-1f3fb-200d-2640-fe0f": ["1f646-1f3fb", 34, 35, 15],
        "1f646-1f3fc-200d-2640-fe0f": ["1f646-1f3fc", 34, 36, 15],
        "1f646-1f3fd-200d-2640-fe0f": ["1f646-1f3fd", 34, 37, 15],
        "1f646-1f3fe-200d-2640-fe0f": ["1f646-1f3fe", 34, 38, 15],
        "1f646-1f3ff-200d-2640-fe0f": ["1f646-1f3ff", 34, 39, 15],
        "1f647-200d-2642-fe0f": ["1f647", 34, 52, 15],
        "1f647-1f3fb-200d-2642-fe0f": ["1f647-1f3fb", 34, 53, 15],
        "1f647-1f3fc-200d-2642-fe0f": ["1f647-1f3fc", 34, 54, 15],
        "1f647-1f3fd-200d-2642-fe0f": ["1f647-1f3fd", 34, 55, 15],
        "1f647-1f3fe-200d-2642-fe0f": ["1f647-1f3fe", 34, 56, 15],
        "1f647-1f3ff-200d-2642-fe0f": ["1f647-1f3ff", 34, 57, 15],
        "1f64b-200d-2640-fe0f": ["1f64b", 35, 13, 15],
        "1f64b-1f3fb-200d-2640-fe0f": ["1f64b-1f3fb", 35, 14, 15],
        "1f64b-1f3fc-200d-2640-fe0f": ["1f64b-1f3fc", 35, 15, 15],
        "1f64b-1f3fd-200d-2640-fe0f": ["1f64b-1f3fd", 35, 16, 15],
        "1f64b-1f3fe-200d-2640-fe0f": ["1f64b-1f3fe", 35, 17, 15],
        "1f64b-1f3ff-200d-2640-fe0f": ["1f64b-1f3ff", 35, 18, 15],
        "1f64d-200d-2640-fe0f": ["1f64d", 35, 37, 15],
        "1f64d-1f3fb-200d-2640-fe0f": ["1f64d-1f3fb", 35, 38, 15],
        "1f64d-1f3fc-200d-2640-fe0f": ["1f64d-1f3fc", 35, 39, 15],
        "1f64d-1f3fd-200d-2640-fe0f": ["1f64d-1f3fd", 35, 40, 15],
        "1f64d-1f3fe-200d-2640-fe0f": ["1f64d-1f3fe", 35, 41, 15],
        "1f64d-1f3ff-200d-2640-fe0f": ["1f64d-1f3ff", 35, 42, 15],
        "1f64e-200d-2640-fe0f": ["1f64e", 35, 55, 15],
        "1f64e-1f3fb-200d-2640-fe0f": ["1f64e-1f3fb", 35, 56, 15],
        "1f64e-1f3fc-200d-2640-fe0f": ["1f64e-1f3fc", 35, 57, 15],
        "1f64e-1f3fd-200d-2640-fe0f": ["1f64e-1f3fd", 35, 58, 15],
        "1f64e-1f3fe-200d-2640-fe0f": ["1f64e-1f3fe", 35, 59, 15],
        "1f64e-1f3ff-200d-2640-fe0f": ["1f64e-1f3ff", 36, 0, 15],
        "1f6a3-200d-2642-fe0f": ["1f6a3", 36, 54, 15],
        "1f6a3-1f3fb-200d-2642-fe0f": ["1f6a3-1f3fb", 36, 55, 15],
        "1f6a3-1f3fc-200d-2642-fe0f": ["1f6a3-1f3fc", 36, 56, 15],
        "1f6a3-1f3fd-200d-2642-fe0f": ["1f6a3-1f3fd", 36, 57, 15],
        "1f6a3-1f3fe-200d-2642-fe0f": ["1f6a3-1f3fe", 36, 58, 15],
        "1f6a3-1f3ff-200d-2642-fe0f": ["1f6a3-1f3ff", 36, 59, 15],
        "1f6b4-200d-2642-fe0f": ["1f6b4", 37, 28, 15],
        "1f6b4-1f3fb-200d-2642-fe0f": ["1f6b4-1f3fb", 37, 29, 15],
        "1f6b4-1f3fc-200d-2642-fe0f": ["1f6b4-1f3fc", 37, 30, 15],
        "1f6b4-1f3fd-200d-2642-fe0f": ["1f6b4-1f3fd", 37, 31, 15],
        "1f6b4-1f3fe-200d-2642-fe0f": ["1f6b4-1f3fe", 37, 32, 15],
        "1f6b4-1f3ff-200d-2642-fe0f": ["1f6b4-1f3ff", 37, 33, 15],
        "1f6b5-200d-2642-fe0f": ["1f6b5", 37, 46, 15],
        "1f6b5-1f3fb-200d-2642-fe0f": ["1f6b5-1f3fb", 37, 47, 15],
        "1f6b5-1f3fc-200d-2642-fe0f": ["1f6b5-1f3fc", 37, 48, 15],
        "1f6b5-1f3fd-200d-2642-fe0f": ["1f6b5-1f3fd", 37, 49, 15],
        "1f6b5-1f3fe-200d-2642-fe0f": ["1f6b5-1f3fe", 37, 50, 15],
        "1f6b5-1f3ff-200d-2642-fe0f": ["1f6b5-1f3ff", 37, 51, 15],
        "1f6b6-200d-2642-fe0f": ["1f6b6", 38, 4, 15],
        "1f6b6-1f3fb-200d-2642-fe0f": ["1f6b6-1f3fb", 38, 5, 15],
        "1f6b6-1f3fc-200d-2642-fe0f": ["1f6b6-1f3fc", 38, 6, 15],
        "1f6b6-1f3fd-200d-2642-fe0f": ["1f6b6-1f3fd", 38, 7, 15],
        "1f6b6-1f3fe-200d-2642-fe0f": ["1f6b6-1f3fe", 38, 8, 15],
        "1f6b6-1f3ff-200d-2642-fe0f": ["1f6b6-1f3ff", 38, 9, 15],
        "1f9d6-200d-2642-fe0f": ["1f9d6", 51, 18, 15],
        "1f9d6-1f3fb-200d-2642-fe0f": ["1f9d6-1f3fb", 51, 19, 15],
        "1f9d6-1f3fc-200d-2642-fe0f": ["1f9d6-1f3fc", 51, 20, 15],
        "1f9d6-1f3fd-200d-2642-fe0f": ["1f9d6-1f3fd", 51, 21, 15],
        "1f9d6-1f3fe-200d-2642-fe0f": ["1f9d6-1f3fe", 51, 22, 15],
        "1f9d6-1f3ff-200d-2642-fe0f": ["1f9d6-1f3ff", 51, 23, 15],
        "1f9d7-200d-2640-fe0f": ["1f9d7", 51, 36, 15],
        "1f9d7-1f3fb-200d-2640-fe0f": ["1f9d7-1f3fb", 51, 37, 15],
        "1f9d7-1f3fc-200d-2640-fe0f": ["1f9d7-1f3fc", 51, 38, 15],
        "1f9d7-1f3fd-200d-2640-fe0f": ["1f9d7-1f3fd", 51, 39, 15],
        "1f9d7-1f3fe-200d-2640-fe0f": ["1f9d7-1f3fe", 51, 40, 15],
        "1f9d7-1f3ff-200d-2640-fe0f": ["1f9d7-1f3ff", 51, 41, 15],
        "1f9d8-200d-2640-fe0f": ["1f9d8", 51, 54, 15],
        "1f9d8-1f3fb-200d-2640-fe0f": ["1f9d8-1f3fb", 51, 55, 15],
        "1f9d8-1f3fc-200d-2640-fe0f": ["1f9d8-1f3fc", 51, 56, 15],
        "1f9d8-1f3fd-200d-2640-fe0f": ["1f9d8-1f3fd", 51, 57, 15],
        "1f9d8-1f3fe-200d-2640-fe0f": ["1f9d8-1f3fe", 51, 58, 15],
        "1f9d8-1f3ff-200d-2640-fe0f": ["1f9d8-1f3ff", 51, 59, 15],
        "1f9d9-200d-2640-fe0f": ["1f9d9", 52, 12, 15],
        "1f9d9-1f3fb-200d-2640-fe0f": ["1f9d9-1f3fb", 52, 13, 15],
        "1f9d9-1f3fc-200d-2640-fe0f": ["1f9d9-1f3fc", 52, 14, 15],
        "1f9d9-1f3fd-200d-2640-fe0f": ["1f9d9-1f3fd", 52, 15, 15],
        "1f9d9-1f3fe-200d-2640-fe0f": ["1f9d9-1f3fe", 52, 16, 15],
        "1f9d9-1f3ff-200d-2640-fe0f": ["1f9d9-1f3ff", 52, 17, 15],
        "1f9da-200d-2640-fe0f": ["1f9da", 52, 30, 15],
        "1f9da-1f3fb-200d-2640-fe0f": ["1f9da-1f3fb", 52, 31, 15],
        "1f9da-1f3fc-200d-2640-fe0f": ["1f9da-1f3fc", 52, 32, 15],
        "1f9da-1f3fd-200d-2640-fe0f": ["1f9da-1f3fd", 52, 33, 15],
        "1f9da-1f3fe-200d-2640-fe0f": ["1f9da-1f3fe", 52, 34, 15],
        "1f9da-1f3ff-200d-2640-fe0f": ["1f9da-1f3ff", 52, 35, 15],
        "1f9db-200d-2640-fe0f": ["1f9db", 52, 48, 15],
        "1f9db-1f3fb-200d-2640-fe0f": ["1f9db-1f3fb", 52, 49, 15],
        "1f9db-1f3fc-200d-2640-fe0f": ["1f9db-1f3fc", 52, 50, 15],
        "1f9db-1f3fd-200d-2640-fe0f": ["1f9db-1f3fd", 52, 51, 15],
        "1f9db-1f3fe-200d-2640-fe0f": ["1f9db-1f3fe", 52, 52, 15],
        "1f9db-1f3ff-200d-2640-fe0f": ["1f9db-1f3ff", 52, 53, 15],
        "1f9dc-200d-2642-fe0f": ["1f9dc", 53, 6, 15],
        "1f9dc-1f3fb-200d-2642-fe0f": ["1f9dc-1f3fb", 53, 7, 15],
        "1f9dc-1f3fc-200d-2642-fe0f": ["1f9dc-1f3fc", 53, 8, 15],
        "1f9dc-1f3fd-200d-2642-fe0f": ["1f9dc-1f3fd", 53, 9, 15],
        "1f9dc-1f3fe-200d-2642-fe0f": ["1f9dc-1f3fe", 53, 10, 15],
        "1f9dc-1f3ff-200d-2642-fe0f": ["1f9dc-1f3ff", 53, 11, 15],
        "1f9dd-200d-2642-fe0f": ["1f9dd", 53, 24, 15],
        "1f9dd-1f3fb-200d-2642-fe0f": ["1f9dd-1f3fb", 53, 25, 15],
        "1f9dd-1f3fc-200d-2642-fe0f": ["1f9dd-1f3fc", 53, 26, 15],
        "1f9dd-1f3fd-200d-2642-fe0f": ["1f9dd-1f3fd", 53, 27, 15],
        "1f9dd-1f3fe-200d-2642-fe0f": ["1f9dd-1f3fe", 53, 28, 15],
        "1f9dd-1f3ff-200d-2642-fe0f": ["1f9dd-1f3ff", 53, 29, 15],
        "1f9de-200d-2642-fe0f": ["1f9de", 53, 32, 15],
        "1f9df-200d-2642-fe0f": ["1f9df", 53, 35, 15],
        "26f9-fe0f-200d-2642-fe0f": ["26f9-fe0f", 57, 21, 15],
        "26f9-1f3fb-200d-2642-fe0f": ["26f9-1f3fb", 57, 22, 15],
        "26f9-1f3fc-200d-2642-fe0f": ["26f9-1f3fc", 57, 23, 15],
        "26f9-1f3fd-200d-2642-fe0f": ["26f9-1f3fd", 57, 24, 15],
        "26f9-1f3fe-200d-2642-fe0f": ["26f9-1f3fe", 57, 25, 15],
        "26f9-1f3ff-200d-2642-fe0f": ["26f9-1f3ff", 57, 26, 15]
    }, "undefined" != typeof exports ? (exports = "undefined" != typeof module && module.exports ? module.exports = f : exports).EmojiConvertor = f : "function" == typeof define && define.amd ? define(function () {
        return f
    }) : e.EmojiConvertor = f
}.call(function () {
    return this || ("undefined" != typeof window ? window : global)
}());