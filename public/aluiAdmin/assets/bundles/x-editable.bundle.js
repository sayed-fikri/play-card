!function (o) {
    function t(e, i) {
        return function (t) {
            return n(e.call(this, t), i)
        }
    }

    function s() {
    }

    function a(t) {
        l(this, t)
    }

    function r(t) {
        var e = this._data = {}, i = t.years || t.year || t.y || 0, s = t.months || t.month || t.M || 0,
            n = t.weeks || t.week || t.w || 0, a = t.days || t.day || t.d || 0, o = t.hours || t.hour || t.h || 0,
            r = t.minutes || t.minute || t.m || 0, l = t.seconds || t.second || t.s || 0,
            t = t.milliseconds || t.millisecond || t.ms || 0;
        this._milliseconds = t + 1e3 * l + 6e4 * r + 36e5 * o, this._days = a + 7 * n, this._months = s + 12 * i, e.milliseconds = t % 1e3, l += h(t / 1e3), e.seconds = l % 60, r += h(l / 60), e.minutes = r % 60, o += h(r / 60), e.hours = o % 24, a += h(o / 24), e.days = (a += 7 * n) % 30, s += h(a / 30), e.months = s % 12, i += h(s / 12), e.years = i
    }

    function l(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function h(t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t)
    }

    function n(t, e) {
        for (var i = t + ""; i.length < e;) i = "0" + i;
        return i
    }

    function i(t, e, i) {
        var s = e._milliseconds, n = e._days, e = e._months;
        s && t._d.setTime(+t + s * i), n && t.date(t.date() + n * i), e && (s = t.date(), t.date(1).month(t.month() + e * i).date(Math.min(s, t.daysInMonth())))
    }

    function u(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function d(t, e) {
        for (var i = Math.min(t.length, e.length), s = Math.abs(t.length - e.length), n = 0, a = 0; a < i; a++) ~~t[a] != ~~e[a] && n++;
        return n + s
    }

    function c(t) {
        return t ? (!$[t] && M && require("./lang/" + t), $[t]) : D.fn._lang
    }

    function e(e, t) {
        function i(t) {
            return e.lang().longDateFormat(t) || t
        }

        for (var s = 5; s-- && x.test(t);) t = t.replace(x, i);
        return F[t] || (F[t] = function (i) {
            for (var t, s = i.match(_), n = 0, a = s.length; n < a; n++) j[s[n]] ? s[n] = j[s[n]] : s[n] = (t = s[n]).match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
            return function (t) {
                var e = "";
                for (n = 0; n < a; n++) e += "function" == typeof s[n].call ? s[n].call(t, i) : s[n];
                return e
            }
        }(t)), F[t](e)
    }

    function p(t) {
        var e, i, s = [];
        if (!t._d) {
            for (e = 0; e < 7; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            s[3] += t._tzh || 0, s[4] += t._tzm || 0, i = new Date(0), t._useUTC ? (i.setUTCFullYear(s[0], s[1], s[2]), i.setUTCHours(s[3], s[4], s[5], s[6])) : (i.setFullYear(s[0], s[1], s[2]), i.setHours(s[3], s[4], s[5], s[6])), t._d = i
        }
    }

    function f(t) {
        var e, i, s = t._f.match(_), n = t._i;
        for (t._a = [], e = 0; e < s.length; e++) {
            i = (function (t) {
                switch (t) {
                    case"DDDD":
                        return E;
                    case"YYYY":
                        return I;
                    case"YYYYY":
                        return N;
                    case"S":
                    case"SS":
                    case"SSS":
                    case"DDD":
                        return H;
                    case"MMM":
                    case"MMMM":
                    case"dd":
                    case"ddd":
                    case"dddd":
                    case"a":
                    case"A":
                        return L;
                    case"X":
                        return z;
                    case"Z":
                    case"ZZ":
                        return T;
                    case"T":
                        return W;
                    case"MM":
                    case"DD":
                    case"YY":
                    case"HH":
                    case"hh":
                    case"mm":
                    case"ss":
                    case"M":
                    case"D":
                    case"d":
                    case"H":
                    case"h":
                    case"m":
                    case"s":
                        return P;
                    default:
                        return new RegExp(t.replace("\\", ""))
                }
            }(s[e]).exec(n) || [])[0], i && (n = n.slice(n.indexOf(i) + i.length));
            if (j[s[e]]) {
                a = void 0;
                o = void 0;
                r = void 0;
                l = void 0;
                h = void 0;
                var a = s[e];
                var o = i;
                var r = t;
                var l, h = r._a;
                switch (a) {
                    case"M":
                    case"MM":
                        h[1] = null == o ? 0 : ~~o - 1;
                        break;
                    case"MMM":
                    case"MMMM":
                        null != (l = c(r._l).monthsParse(o)) ? h[1] = l : r._isValid = !1;
                        break;
                    case"D":
                    case"DD":
                    case"DDD":
                    case"DDDD":
                        null != o && (h[2] = ~~o);
                        break;
                    case"YY":
                        h[0] = ~~o + (68 < ~~o ? 1900 : 2e3);
                        break;
                    case"YYYY":
                    case"YYYYY":
                        h[0] = ~~o;
                        break;
                    case"a":
                    case"A":
                        r._isPm = "pm" === (o + "").toLowerCase();
                        break;
                    case"H":
                    case"HH":
                    case"h":
                    case"hh":
                        h[3] = ~~o;
                        break;
                    case"m":
                    case"mm":
                        h[4] = ~~o;
                        break;
                    case"s":
                    case"ss":
                        h[5] = ~~o;
                        break;
                    case"S":
                    case"SS":
                    case"SSS":
                        h[6] = ~~(1e3 * ("0." + o));
                        break;
                    case"X":
                        r._d = new Date(1e3 * parseFloat(o));
                        break;
                    case"Z":
                    case"ZZ":
                        r._useUTC = !0, (l = (o + "").match(Z)) && l[1] && (r._tzh = ~~l[1]), l && l[2] && (r._tzm = ~~l[2]), l && "+" === l[0] && (r._tzh = -r._tzh, r._tzm = -r._tzm)
                }
                null == o && (r._isValid = !1)
            }
        }
        t._isPm && t._a[3] < 12 && (t._a[3] += 12), !1 === t._isPm && 12 === t._a[3] && (t._a[3] = 0), p(t)
    }

    function m(t) {
        var e = t._i, i = V.exec(e);
        if (e === o) t._d = new Date; else if (i) t._d = new Date(+i[1]); else if ("string" != typeof e) u(e) ? (t._a = e.slice(0), p(t)) : t._d = e instanceof Date ? new Date(+e) : new Date(e); else {
            var s, n = t, a = n._i;
            if (Q.exec(a)) {
                for (n._f = "YYYY-MM-DDT", s = 0; s < 4; s++) if (Y[s][1].exec(a)) {
                    n._f += Y[s][0];
                    break
                }
                T.exec(a) && (n._f += " Z"), f(n)
            } else n._d = new Date(a)
        }
    }

    function y(t, e, i) {
        var s = C(Math.abs(t) / 1e3), n = C(s / 60), a = C(n / 60), o = C(a / 24), r = C(o / 365),
            s = (s < 45 ? ["s", s] : 1 === n && ["m"]) || n < 45 && ["mm", n] || 1 === a && ["h"] || a < 22 && ["hh", a] || 1 === o && ["d"] || o <= 25 && ["dd", o] || o <= 45 && ["M"] || o < 345 && ["MM", C(o / 30)] || 1 === r && ["y"] || ["yy", r];
        return s[2] = e, s[3] = 0 < t, s[4] = i, function (t, e, i, s, n) {
            return n.relativeTime(e || 1, !!i, t, s)
        }.apply({}, s)
    }

    function v(t, e, i) {
        e = i - e, i -= t.day();
        return e < i && (i -= 7), i < e - 7 && (i += 7), Math.ceil(D(t).add("d", i).dayOfYear() / 7)
    }

    function b(t) {
        var e = t._i, i = t._f;
        return null === e || "" === e ? null : ("string" == typeof e && (t._i = e = c().preparse(e)), D.isMoment(e) ? (t = l({}, e))._d = new Date(+e._d) : (i ? u(i) ? function (t) {
            for (var e, i, s, n = 99; t._f.length;) {
                if ((s = l({}, t))._f = t._f.pop(), f(s), (e = new a(s)).isValid()) {
                    i = e;
                    break
                }
                (s = d(s._a, e.toArray())) < n && (n = s, i = e)
            }
            l(t, i)
        } : f : m)(t), new a(t))
    }

    function g(t, i) {
        D.fn[t] = D.fn[t + "s"] = function (t) {
            var e = this._isUTC ? "UTC" : "";
            return null != t ? (this._d["set" + e + i](t), this) : this._d["get" + e + i]()
        }
    }

    function w(t, e) {
        D.duration.fn["as" + t] = function () {
            return +this / e
        }
    }

    for (var D, k, C = Math.round, $ = {}, M = "undefined" != typeof module && module.exports, V = /^\/?Date\((\-?\d+)/i, _ = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, x = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, P = /\d\d?/, H = /\d{1,3}/, E = /\d{3}/, I = /\d{1,4}/, N = /[+\-]?\d{1,6}/, L = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, T = /Z|[\+\-]\d\d:?\d\d/i, W = /T/i, z = /[\+\-]?\d+(\.\d{1,3})?/, Q = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, Y = [["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], Z = /([\+\-]|\d\d)/gi, S = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), U = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, F = {}, O = "DDD w W M D d".split(" "), A = "M D H h m s w W".split(" "), j = {
        M: function () {
            return this.month() + 1
        }, MMM: function (t) {
            return this.lang().monthsShort(this, t)
        }, MMMM: function (t) {
            return this.lang().months(this, t)
        }, D: function () {
            return this.date()
        }, DDD: function () {
            return this.dayOfYear()
        }, d: function () {
            return this.day()
        }, dd: function (t) {
            return this.lang().weekdaysMin(this, t)
        }, ddd: function (t) {
            return this.lang().weekdaysShort(this, t)
        }, dddd: function (t) {
            return this.lang().weekdays(this, t)
        }, w: function () {
            return this.week()
        }, W: function () {
            return this.isoWeek()
        }, YY: function () {
            return n(this.year() % 100, 2)
        }, YYYY: function () {
            return n(this.year(), 4)
        }, YYYYY: function () {
            return n(this.year(), 5)
        }, a: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        }, A: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        }, H: function () {
            return this.hours()
        }, h: function () {
            return this.hours() % 12 || 12
        }, m: function () {
            return this.minutes()
        }, s: function () {
            return this.seconds()
        }, S: function () {
            return ~~(this.milliseconds() / 100)
        }, SS: function () {
            return n(~~(this.milliseconds() / 10), 2)
        }, SSS: function () {
            return n(this.milliseconds(), 3)
        }, Z: function () {
            var t = -this.zone(), e = "+";
            return t < 0 && (t = -t, e = "-"), e + n(~~(t / 60), 2) + ":" + n(~~t % 60, 2)
        }, ZZ: function () {
            var t = -this.zone(), e = "+";
            return t < 0 && (t = -t, e = "-"), e + n(~~(10 * t / 6), 4)
        }, X: function () {
            return this.unix()
        }
    }; O.length;) k = O.pop(), j[k + "o"] = function (e) {
        return function (t) {
            return this.lang().ordinal(e.call(this, t))
        }
    }(j[k]);
    for (; A.length;) k = A.pop(), j[k + k] = t(j[k], 2);
    for (j.DDDD = t(j.DDD, 3), s.prototype = {
        set: function (t) {
            var e, i;
            for (i in t) e = t[i], "function" == typeof e ? this[i] = e : this["_" + i] = e
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function (t) {
            return this._months[t.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function (t) {
            return this._monthsShort[t.month()]
        },
        monthsParse: function (t) {
            var e, i;
            for (this._monthsParse || (this._monthsParse = []), e = 0; e < 12; e++) if (this._monthsParse[e] || (i = D([2e3, e]), i = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[e] = new RegExp(i.replace(".", ""), "i")), this._monthsParse[e].test(t)) return e
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function (t) {
            return this._weekdays[t.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function (t) {
            return this._weekdaysShort[t.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function (t) {
            return this._weekdaysMin[t.day()]
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function (t) {
            var e = this._longDateFormat[t];
            return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (t) {
                return t.slice(1)
            }), this._longDateFormat[t] = e), e
        },
        meridiem: function (t, e, i) {
            return 11 < t ? i ? "pm" : "PM" : i ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function (t, e) {
            t = this._calendar[t];
            return "function" == typeof t ? t.apply(e) : t
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function (t, e, i, s) {
            var n = this._relativeTime[i];
            return "function" == typeof n ? n(t, e, i, s) : n.replace(/%d/i, t)
        },
        pastFuture: function (t, e) {
            t = this._relativeTime[0 < t ? "future" : "past"];
            return "function" == typeof t ? t(e) : t.replace(/%s/i, e)
        },
        ordinal: function (t) {
            return this._ordinal.replace("%d", t)
        },
        _ordinal: "%d",
        preparse: function (t) {
            return t
        },
        postformat: function (t) {
            return t
        },
        week: function (t) {
            return v(t, this._week.dow, this._week.doy)
        },
        _week: {dow: 0, doy: 6}
    }, (D = function (t, e, i) {
        return b({_i: t, _f: e, _l: i, _isUTC: !1})
    }).utc = function (t, e, i) {
        return b({_useUTC: !0, _isUTC: !0, _l: i, _i: t, _f: e})
    }, D.unix = function (t) {
        return D(1e3 * t)
    }, D.duration = function (t, e) {
        var i = D.isDuration(t), s = "number" == typeof t, n = i ? t._data : s ? {} : t;
        return s && (e ? n[e] = t : n.milliseconds = t), s = new r(n), i && t.hasOwnProperty("_lang") && (s._lang = t._lang), s
    }, D.version = "2.0.0", D.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", D.lang = function (t, e) {
        var i;
        if (!t) return D.fn._lang._abbr;
        e ? (i = t, (e = e).abbr = i, $[i] || ($[i] = new s), $[i].set(e), $[i]) : $[t] || c(t), D.duration.fn._lang = D.fn._lang = c(t)
    }, D.langData = function (t) {
        return c(t = t && t._lang && t._lang._abbr ? t._lang._abbr : t)
    }, D.isMoment = function (t) {
        return t instanceof a
    }, D.isDuration = function (t) {
        return t instanceof r
    }, D.fn = a.prototype = {
        clone: function () {
            return D(this)
        }, valueOf: function () {
            return +this._d
        }, unix: function () {
            return Math.floor(+this._d / 1e3)
        }, toString: function () {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, toDate: function () {
            return this._d
        }, toJSON: function () {
            return D.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }, toArray: function () {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
        }, isValid: function () {
            return null == this._isValid && (this._a ? this._isValid = !d(this._a, (this._isUTC ? D.utc(this._a) : D(this._a)).toArray()) : this._isValid = !isNaN(this._d.getTime())), !!this._isValid
        }, utc: function () {
            return this._isUTC = !0, this
        }, local: function () {
            return this._isUTC = !1, this
        }, format: function (t) {
            t = e(this, t || D.defaultFormat);
            return this.lang().postformat(t)
        }, add: function (t, e) {
            t = "string" == typeof t ? D.duration(+e, t) : D.duration(t, e);
            return i(this, t, 1), this
        }, subtract: function (t, e) {
            t = "string" == typeof t ? D.duration(+e, t) : D.duration(t, e);
            return i(this, t, -1), this
        }, diff: function (t, e, i) {
            var s, n, t = this._isUTC ? D(t).utc() : D(t).local(), a = 6e4 * (this.zone() - t.zone());
            return "year" === (e = e && e.replace(/s$/, "")) || "month" === e ? (s = 432e5 * (this.daysInMonth() + t.daysInMonth()), n = 12 * (this.year() - t.year()) + (this.month() - t.month()), n += (this - D(this).startOf("month") - (t - D(t).startOf("month"))) / s, "year" === e && (n /= 12)) : (s = this - t - a, n = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? s / 864e5 : "week" === e ? s / 6048e5 : s), i ? n : h(n)
        }, from: function (t, e) {
            return D.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
        }, fromNow: function (t) {
            return this.from(D(), t)
        }, calendar: function () {
            var t = this.diff(D().startOf("day"), "days", !0),
                t = t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(t, this))
        }, isLeapYear: function () {
            var t = this.year();
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        }, isDST: function () {
            return this.zone() < D([this.year()]).zone() || this.zone() < D([this.year(), 5]).zone()
        }, day: function (t) {
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null == t ? e : this.add({d: t - e})
        }, startOf: function (t) {
            switch (t = t.replace(/s$/, "")) {
                case"year":
                    this.month(0);
                case"month":
                    this.date(1);
                case"week":
                case"day":
                    this.hours(0);
                case"hour":
                    this.minutes(0);
                case"minute":
                    this.seconds(0);
                case"second":
                    this.milliseconds(0)
            }
            return "week" === t && this.day(0), this
        }, endOf: function (t) {
            return this.startOf(t).add(t.replace(/s?$/, "s"), 1).subtract("ms", 1)
        }, isAfter: function (t, e) {
            return e = void 0 !== e ? e : "millisecond", +this.clone().startOf(e) > +D(t).startOf(e)
        }, isBefore: function (t, e) {
            return e = void 0 !== e ? e : "millisecond", +this.clone().startOf(e) < +D(t).startOf(e)
        }, isSame: function (t, e) {
            return e = void 0 !== e ? e : "millisecond", +this.clone().startOf(e) == +D(t).startOf(e)
        }, zone: function () {
            return this._isUTC ? 0 : this._d.getTimezoneOffset()
        }, daysInMonth: function () {
            return D.utc([this.year(), this.month() + 1, 0]).date()
        }, dayOfYear: function (t) {
            var e = C((D(this).startOf("day") - D(this).startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add("d", t - e)
        }, isoWeek: function (t) {
            var e = v(this, 1, 4);
            return null == t ? e : this.add("d", 7 * (t - e))
        }, week: function (t) {
            var e = this.lang().week(this);
            return null == t ? e : this.add("d", 7 * (t - e))
        }, lang: function (t) {
            return t === o ? this._lang : (this._lang = c(t), this)
        }
    }, k = 0; k < S.length; k++) g(S[k].toLowerCase().replace(/s$/, ""), S[k]);
    for (k in g("year", "FullYear"), D.fn.days = D.fn.day, D.fn.weeks = D.fn.week, D.fn.isoWeeks = D.fn.isoWeek, D.duration.fn = r.prototype = {
        weeks: function () {
            return h(this.days() / 7)
        }, valueOf: function () {
            return this._milliseconds + 864e5 * this._days + 2592e6 * this._months
        }, humanize: function (t) {
            var e = +this, i = y(e, !t, this.lang());
            return t && (i = this.lang().pastFuture(e, i)), this.lang().postformat(i)
        }, lang: D.fn.lang
    }, U) U.hasOwnProperty(k) && (w(k, U[k]), function (t) {
        D.duration.fn[t] = function () {
            return this._data[t]
        }
    }(k.toLowerCase()));
    w("Weeks", 6048e5), D.lang("en", {
        ordinal: function (t) {
            var e = t % 10;
            return t + (1 == ~~(t % 100 / 10) ? "th" : 1 == e ? "st" : 2 == e ? "nd" : 3 == e ? "rd" : "th")
        }
    }), M && (module.exports = D), "undefined" == typeof ender && (this.moment = D), "function" == typeof define && define.amd && define("moment", [], function () {
        return D
    })
}.call(this), function (a) {
    "use strict";

    function n(t, e) {
        this.options = a.extend({}, a.fn.editableform.defaults, e), this.$div = a(t), this.options.scope || (this.options.scope = this)
    }

    n.prototype = {
        constructor: n, initInput: function () {
            this.input = this.options.input, this.value = this.input.str2value(this.options.value), this.input.prerender()
        }, initTemplate: function () {
            this.$form = a(a.fn.editableform.template)
        }, initButtons: function () {
            var t = this.$form.find(".editable-buttons");
            t.append(a.fn.editableform.buttons), "bottom" === this.options.showbuttons && t.addClass("editable-buttons-bottom")
        }, render: function () {
            this.$loading = a(a.fn.editableform.loading), this.$div.empty().append(this.$loading), this.initTemplate(), this.options.showbuttons ? this.initButtons() : this.$form.find(".editable-buttons").remove(), this.showLoading(), this.isSaving = !1, this.$div.triggerHandler("rendering"), this.initInput(), this.$form.find("div.editable-input").append(this.input.$tpl), this.$div.append(this.$form), a.when(this.input.render()).then(a.proxy(function () {
                var t;
                this.options.showbuttons || this.input.autosubmit(), this.$form.find(".editable-cancel").click(a.proxy(this.cancel, this)), this.input.error ? (this.error(this.input.error), this.$form.find(".editable-submit").attr("disabled", !0), this.input.$input.attr("disabled", !0), this.$form.submit(function (t) {
                    t.preventDefault()
                })) : (this.error(!1), this.input.$input.removeAttr("disabled"), this.$form.find(".editable-submit").removeAttr("disabled"), t = null === this.value || void 0 === this.value || "" === this.value ? this.options.defaultValue : this.value, this.input.value2input(t), this.$form.submit(a.proxy(this.submit, this))), this.$div.triggerHandler("rendered"), this.showForm(), this.input.postrender && this.input.postrender()
            }, this))
        }, cancel: function () {
            this.$div.triggerHandler("cancel")
        }, showLoading: function () {
            var t, e;
            this.$form ? (t = this.$form.outerWidth(), e = this.$form.outerHeight(), t && this.$loading.width(t), e && this.$loading.height(e), this.$form.hide()) : (t = this.$loading.parent().width()) && this.$loading.width(t), this.$loading.show()
        }, showForm: function (t) {
            this.$loading.hide(), this.$form.show(), !1 !== t && this.input.activate(), this.$div.triggerHandler("show")
        }, error: function (t) {
            var e = this.$form.find(".control-group"), i = this.$form.find(".editable-error-block");
            if (!1 === t) e.removeClass(a.fn.editableform.errorGroupClass), i.removeClass(a.fn.editableform.errorBlockClass).empty().hide(); else {
                if (t) {
                    for (var s = ("" + t).split("\n"), n = 0; n < s.length; n++) s[n] = a("<div>").text(s[n]).html();
                    t = s.join("<br>")
                }
                e.addClass(a.fn.editableform.errorGroupClass), i.addClass(a.fn.editableform.errorBlockClass).html(t).show()
            }
        }, submit: function (t) {
            t.stopPropagation(), t.preventDefault();
            var i, s = this.input.input2value(), t = this.validate(s);
            if ("object" === a.type(t) && void 0 !== t.newValue) {
                if (s = t.newValue, this.input.value2input(s), "string" == typeof t.msg) return this.error(t.msg), void this.showForm()
            } else if (t) return this.error(t), void this.showForm();
            this.options.savenochange || this.input.value2str(s) !== this.input.value2str(this.value) ? (i = this.input.value2submit(s), this.isSaving = !0, a.when(this.save(i)).done(a.proxy(function (t) {
                this.isSaving = !1;
                var e = "function" == typeof this.options.success ? this.options.success.call(this.options.scope, t, s) : null;
                return !1 === e ? (this.error(!1), void this.showForm(!1)) : "string" == typeof e ? (this.error(e), void this.showForm()) : (e && "object" == typeof e && e.hasOwnProperty("newValue") && (s = e.newValue), this.error(!1), this.value = s, void this.$div.triggerHandler("save", {
                    newValue: s,
                    submitValue: i,
                    response: t
                }))
            }, this)).fail(a.proxy(function (t) {
                this.isSaving = !1, t = "function" == typeof this.options.error ? this.options.error.call(this.options.scope, t, s) : "string" == typeof t ? t : t.responseText || t.statusText || "Unknown error!", this.error(t), this.showForm()
            }, this))) : this.$div.triggerHandler("nochange")
        }, save: function (t) {
            this.options.pk = a.fn.editableutils.tryParseJson(this.options.pk, !0);
            var e = "function" == typeof this.options.pk ? this.options.pk.call(this.options.scope) : this.options.pk;
            return !!("function" == typeof this.options.url || this.options.url && ("always" === this.options.send || "auto" === this.options.send && null != e)) ? (this.showLoading(), t = {
                name: this.options.name || "",
                value: t,
                pk: e
            }, "function" == typeof this.options.params ? t = this.options.params.call(this.options.scope, t) : (this.options.params = a.fn.editableutils.tryParseJson(this.options.params, !0), a.extend(t, this.options.params)), "function" == typeof this.options.url ? this.options.url.call(this.options.scope, t) : a.ajax(a.extend({
                url: this.options.url,
                data: t,
                type: "POST"
            }, this.options.ajaxOptions))) : void 0
        }, validate: function (t) {
            return void 0 === t && (t = this.value), "function" == typeof this.options.validate ? this.options.validate.call(this.options.scope, t) : void 0
        }, option: function (t, e) {
            t in this.options && (this.options[t] = e), "value" === t && this.setValue(e)
        }, setValue: function (t, e) {
            this.value = e ? this.input.str2value(t) : t, this.$form && this.$form.is(":visible") && this.input.value2input(this.value)
        }
    }, a.fn.editableform = function (i) {
        var s = arguments;
        return this.each(function () {
            var t = a(this), e = t.data("editableform");
            e || t.data("editableform", e = new n(this, "object" == typeof i && i)), "string" == typeof i && e[i].apply(e, Array.prototype.slice.call(s, 1))
        })
    }, a.fn.editableform.Constructor = n, a.fn.editableform.defaults = {
        type: "text",
        url: null,
        params: null,
        name: null,
        pk: null,
        value: null,
        defaultValue: null,
        send: "auto",
        validate: null,
        success: null,
        error: null,
        ajaxOptions: null,
        showbuttons: !0,
        scope: null,
        savenochange: !1
    }, a.fn.editableform.template = '<form class="form-inline editableform"><div class="control-group"><div><div class="editable-input"></div><div class="editable-buttons"></div></div><div class="editable-error-block"></div></div></form>', a.fn.editableform.loading = '<div class="editableform-loading"></div>', a.fn.editableform.buttons = '<button type="submit" class="editable-submit">ok</button><button type="button" class="editable-cancel">cancel</button>', a.fn.editableform.errorGroupClass = null, a.fn.editableform.errorBlockClass = "editable-error", a.fn.editableform.engine = "jquery"
}(window.jQuery), function (l) {
    "use strict";
    l.fn.editableutils = {
        inherit: function (t, e) {
            function i() {
            }

            i.prototype = e.prototype, t.prototype = new i, (t.prototype.constructor = t).superclass = e.prototype
        }, setCursorPosition: function (t, e) {
            if (t.setSelectionRange) try {
                t.setSelectionRange(e, e)
            } catch (t) {
            } else t.createTextRange && ((t = t.createTextRange()).collapse(!0), t.moveEnd("character", e), t.moveStart("character", e), t.select())
        }, tryParseJson: function (t, e) {
            if ("string" == typeof t && t.length && t.match(/^[\{\[].*[\}\]]$/)) if (e) try {
                t = new Function("return " + t)()
            } catch (t) {
            } finally {
                return t
            } else t = new Function("return " + t)();
            return t
        }, sliceObj: function (t, e, i) {
            var s, n, a = {};
            if (l.isArray(e) && e.length) for (var o = 0; o < e.length; o++) s = e[o], t.hasOwnProperty(s) && (a[s] = t[s]), !0 !== i && (n = s.toLowerCase(), t.hasOwnProperty(n) && (a[s] = t[n]));
            return a
        }, getConfigData: function (t) {
            var i = {};
            return l.each(t[0].dataset, function (t, e) {
                "object" == typeof e && (!e || "object" != typeof e || e.constructor !== Object && e.constructor !== Array) || (i[t] = e)
            }), i
        }, objectKeys: function (t) {
            if (Object.keys) return Object.keys(t);
            if (t !== Object(t)) throw new TypeError("Object.keys called on a non-object");
            var e, i = [];
            for (e in t) Object.prototype.hasOwnProperty.call(t, e) && i.push(e);
            return i
        }, escape: function (t) {
            return l("<div>").text(t).html()
        }, itemsByValue: function (s, t, n) {
            var e, a, o, r;
            return t && null !== s ? ("function" != typeof n && (e = n || "value", n = function (t) {
                return t[e]
            }), a = l.isArray(s), o = [], r = this, l.each(t, function (t, e) {
                var i;
                e.children ? o = o.concat(r.itemsByValue(s, e.children, n)) : a ? l.grep(s, function (t) {
                    return t == (e && "object" == typeof e ? n(e) : e)
                }).length && o.push(e) : (i = e && "object" == typeof e ? n(e) : e, s == i && o.push(e))
            }), o) : []
        }, createInput: function (t) {
            var e, i = t.type;
            return "date" === i && ("inline" === t.mode ? l.fn.editabletypes.datefield ? i = "datefield" : l.fn.editabletypes.dateuifield && (i = "dateuifield") : l.fn.editabletypes.date ? i = "date" : l.fn.editabletypes.dateui && (i = "dateui"), "date" !== i || l.fn.editabletypes.date || (i = "combodate")), "wysihtml5" !== (i = "datetime" === i && "inline" === t.mode ? "datetimefield" : i) || l.fn.editabletypes[i] || (i = "textarea"), "function" == typeof l.fn.editabletypes[i] ? new (e = l.fn.editabletypes[i])(this.sliceObj(t, this.objectKeys(e.defaults))) : (l.error("Unknown type: " + i), !1)
        }, supportsTransitions: function () {
            var t = (document.body || document.documentElement).style, e = ["Moz", "Webkit", "Khtml", "O", "ms"];
            if ("string" == typeof t[i = "transition"]) return !0;
            for (var i = i.charAt(0).toUpperCase() + i.substr(1), s = 0; s < e.length; s++) if ("string" == typeof t[e[s] + i]) return !0;
            return !1
        }
    }
}(window.jQuery), function (r) {
    "use strict";

    function l(t, e) {
        this.init(t, e)
    }

    function h(t, e) {
        this.init(t, e)
    }

    l.prototype = {
        containerName: null,
        containerDataName: null,
        innerCss: null,
        containerClass: "editable-container editable-popup",
        defaults: {},
        init: function (t, e) {
            this.$element = r(t), this.options = r.extend({}, r.fn.editableContainer.defaults, e), this.splitOptions(), this.formOptions.scope = this.$element[0], this.initContainer(), this.delayedHide = !1, this.$element.on("destroyed", r.proxy(function () {
                this.destroy()
            }, this)), r(document).data("editable-handlers-attached") || (r(document).on("keyup.editable", function (t) {
                27 === t.which && r(".editable-open").editableContainer("hide", "cancel")
            }), r(document).on("click.editable", function (t) {
                var e, i = r(t.target),
                    s = [".editable-container", ".ui-datepicker-header", ".datepicker", ".modal-backdrop", ".bootstrap-wysihtml5-insert-image-modal", ".bootstrap-wysihtml5-insert-link-modal"];
                if (!r(".select2-drop-mask").is(":visible") && r.contains(document.documentElement, t.target) && !i.is(document)) {
                    for (e = 0; e < s.length; e++) if (i.is(s[e]) || i.parents(s[e]).length) return;
                    l.prototype.closeOthers(t.target)
                }
            }), r(document).data("editable-handlers-attached", !0))
        },
        splitOptions: function () {
            if (this.containerOptions = {}, this.formOptions = {}, !r.fn[this.containerName]) throw new Error(this.containerName + " not found. Have you included corresponding js file?");
            for (var t in this.options) t in this.defaults ? this.containerOptions[t] = this.options[t] : this.formOptions[t] = this.options[t]
        },
        tip: function () {
            return this.container() ? this.container().$tip : null
        },
        container: function () {
            var t;
            return this.containerDataName && (t = this.$element.data(this.containerDataName)) ? t : this.$element.data(this.containerName)
        },
        call: function () {
            this.$element[this.containerName].apply(this.$element, arguments)
        },
        initContainer: function () {
            this.call(this.containerOptions)
        },
        renderForm: function () {
            this.$form.editableform(this.formOptions).on({
                save: r.proxy(this.save, this),
                nochange: r.proxy(function () {
                    this.hide("nochange")
                }, this),
                cancel: r.proxy(function () {
                    this.hide("cancel")
                }, this),
                show: r.proxy(function () {
                    this.delayedHide ? (this.hide(this.delayedHide.reason), this.delayedHide = !1) : this.setPosition()
                }, this),
                rendering: r.proxy(this.setPosition, this),
                resize: r.proxy(this.setPosition, this),
                rendered: r.proxy(function () {
                    this.$element.triggerHandler("shown", r(this.options.scope).data("editable"))
                }, this)
            }).editableform("render")
        },
        show: function (t) {
            this.$element.addClass("editable-open"), !1 !== t && this.closeOthers(this.$element[0]), this.innerShow(), this.tip().addClass(this.containerClass), this.$form, this.$form = r("<div>"), (this.tip().is(this.innerCss) ? this.tip() : this.tip().find(this.innerCss)).append(this.$form), this.renderForm()
        },
        hide: function (t) {
            this.tip() && this.tip().is(":visible") && this.$element.hasClass("editable-open") && (this.$form.data("editableform").isSaving ? this.delayedHide = {reason: t} : (this.delayedHide = !1, this.$element.removeClass("editable-open"), this.innerHide(), this.$element.triggerHandler("hidden", t || "manual")))
        },
        innerShow: function () {
        },
        innerHide: function () {
        },
        toggle: function (t) {
            this.container() && this.tip() && this.tip().is(":visible") ? this.hide() : this.show(t)
        },
        setPosition: function () {
        },
        save: function (t, e) {
            this.$element.triggerHandler("save", e), this.hide("save")
        },
        option: function (t, e) {
            this.options[t] = e, t in this.containerOptions ? (this.containerOptions[t] = e, this.setContainerOption(t, e)) : (this.formOptions[t] = e, this.$form && this.$form.editableform("option", t, e))
        },
        setContainerOption: function (t, e) {
            this.call("option", t, e)
        },
        destroy: function () {
            this.hide(), this.innerDestroy(), this.$element.off("destroyed"), this.$element.removeData("editableContainer")
        },
        innerDestroy: function () {
        },
        closeOthers: function (s) {
            r(".editable-open").each(function (t, e) {
                var i;
                e === s || r(e).find(s).length || (i = (e = r(e)).data("editableContainer")) && ("cancel" === i.options.onblur ? e.data("editableContainer").hide("onblur") : "submit" === i.options.onblur && e.data("editableContainer").tip().find("form").submit())
            })
        },
        activate: function () {
            this.tip && this.tip().is(":visible") && this.$form && this.$form.data("editableform").input.activate()
        }
    }, r.fn.editableContainer = function (a) {
        var o = arguments;
        return this.each(function () {
            var t = r(this), e = "editableContainer", i = t.data(e), s = "object" == typeof a && a,
                n = "inline" === s.mode ? h : l;
            i || t.data(e, i = new n(this, s)), "string" == typeof a && i[a].apply(i, Array.prototype.slice.call(o, 1))
        })
    }, r.fn.editableContainer.Popup = l, r.fn.editableContainer.Inline = h, r.fn.editableContainer.defaults = {
        value: null,
        placement: "top",
        autohide: !0,
        onblur: "cancel",
        anim: !1,
        mode: "popup"
    }, jQuery.event.special.destroyed = {
        remove: function (t) {
            t.handler && t.handler()
        }
    }
}(window.jQuery), function (t) {
    "use strict";
    t.extend(t.fn.editableContainer.Inline.prototype, t.fn.editableContainer.Popup.prototype, {
        containerName: "editableform",
        innerCss: ".editable-inline",
        containerClass: "editable-container editable-inline",
        initContainer: function () {
            this.$tip = t("<span></span>"), this.options.anim || (this.options.anim = 0)
        },
        splitOptions: function () {
            this.containerOptions = {}, this.formOptions = this.options
        },
        tip: function () {
            return this.$tip
        },
        innerShow: function () {
            this.$element.hide(), this.tip().insertAfter(this.$element).show()
        },
        innerHide: function () {
            this.$tip.hide(this.options.anim, t.proxy(function () {
                this.$element.show(), this.innerDestroy()
            }, this))
        },
        innerDestroy: function () {
            this.tip() && this.tip().empty().remove()
        }
    })
}(window.jQuery), function (u) {
    "use strict";

    function d(t, e) {
        this.$element = u(t), this.options = u.extend({}, u.fn.editable.defaults, e, u.fn.editableutils.getConfigData(this.$element)), this.options.selector ? this.initLive() : this.init(), this.options.highlight && !u.fn.editableutils.supportsTransitions() && (this.options.highlight = !1)
    }

    d.prototype = {
        constructor: d, init: function () {
            var t, e = !1;
            if (this.options.name = this.options.name || this.$element.attr("id"), this.options.scope = this.$element[0], this.input = u.fn.editableutils.createInput(this.options), this.input) {
                switch (void 0 === this.options.value || null === this.options.value ? (this.value = this.input.html2value(u.trim(this.$element.html())), e = !0) : (this.options.value = u.fn.editableutils.tryParseJson(this.options.value, !0), "string" == typeof this.options.value ? this.value = this.input.str2value(this.options.value) : this.value = this.options.value), this.$element.addClass("editable"), "textarea" === this.input.type && this.$element.addClass("editable-pre-wrapped"), "manual" !== this.options.toggle ? (this.$element.addClass("editable-click"), this.$element.on(this.options.toggle + ".editable", u.proxy(function (t) {
                    this.options.disabled || t.preventDefault(), "mouseenter" === this.options.toggle ? this.show() : (t = "click" !== this.options.toggle, this.toggle(t))
                }, this))) : this.$element.attr("tabindex", -1), "function" == typeof this.options.display && (this.options.autotext = "always"), this.options.autotext) {
                    case"always":
                        t = !0;
                        break;
                    case"auto":
                        t = !u.trim(this.$element.text()).length && null !== this.value && void 0 !== this.value && !e;
                        break;
                    default:
                        t = !1
                }
                u.when(!t || this.render()).then(u.proxy(function () {
                    this.options.disabled ? this.disable() : this.enable(), this.$element.triggerHandler("init", this)
                }, this))
            }
        }, initLive: function () {
            var i = this.options.selector;
            this.options.selector = !1, this.options.autotext = "never", this.$element.on(this.options.toggle + ".editable", i, u.proxy(function (t) {
                var e = u(t.target).closest(i);
                e.data("editable") || (e.hasClass(this.options.emptyclass) && e.empty(), e.editable(this.options).trigger(t))
            }, this))
        }, render: function (t) {
            return !1 !== this.options.display ? this.input.value2htmlFinal ? this.input.value2html(this.value, this.$element[0], this.options.display, t) : "function" == typeof this.options.display ? this.options.display.call(this.$element[0], this.value, t) : this.input.value2html(this.value, this.$element[0]) : void 0
        }, enable: function () {
            this.options.disabled = !1, this.$element.removeClass("editable-disabled"), this.handleEmpty(this.isEmpty), "manual" !== this.options.toggle && "-1" === this.$element.attr("tabindex") && this.$element.removeAttr("tabindex")
        }, disable: function () {
            this.options.disabled = !0, this.hide(), this.$element.addClass("editable-disabled"), this.handleEmpty(this.isEmpty), this.$element.attr("tabindex", -1)
        }, toggleDisabled: function () {
            this.options.disabled ? this.enable() : this.disable()
        }, option: function (t, e) {
            return t && "object" == typeof t ? void u.each(t, u.proxy(function (t, e) {
                this.option(u.trim(t), e)
            }, this)) : (this.options[t] = e, "disabled" === t ? e ? this.disable() : this.enable() : ("value" === t && this.setValue(e), this.container && this.container.option(t, e), void (this.input.option && this.input.option(t, e))))
        }, handleEmpty: function (t) {
            !1 !== this.options.display && (void 0 !== t ? this.isEmpty = t : "function" == typeof this.input.isEmpty ? this.isEmpty = this.input.isEmpty(this.$element) : this.isEmpty = "" === u.trim(this.$element.html()), this.options.disabled ? this.isEmpty && (this.$element.empty(), this.options.emptyclass && this.$element.removeClass(this.options.emptyclass)) : this.isEmpty ? (this.$element.html(this.options.emptytext), this.options.emptyclass && this.$element.addClass(this.options.emptyclass)) : this.options.emptyclass && this.$element.removeClass(this.options.emptyclass))
        }, show: function (t) {
            if (!this.options.disabled) {
                if (this.container) {
                    if (this.container.tip().is(":visible")) return
                } else {
                    var e = u.extend({}, this.options, {value: this.value, input: this.input});
                    this.$element.editableContainer(e), this.$element.on("save.internal", u.proxy(this.save, this)), this.container = this.$element.data("editableContainer")
                }
                this.container.show(t)
            }
        }, hide: function () {
            this.container && this.container.hide()
        }, toggle: function (t) {
            this.container && this.container.tip().is(":visible") ? this.hide() : this.show(t)
        }, save: function (t, e) {
            var i, s;
            this.options.unsavedclass && ("function" == typeof this.options.url || !1 === this.options.display || void 0 !== e.response || this.options.savenochange && this.input.value2str(this.value) !== this.input.value2str(e.newValue) ? this.$element.removeClass(this.options.unsavedclass) : this.$element.addClass(this.options.unsavedclass)), this.options.highlight && (i = this.$element, s = i.css("background-color"), i.css("background-color", this.options.highlight), setTimeout(function () {
                "transparent" === s && (s = ""), i.css("background-color", s), i.addClass("editable-bg-transition"), setTimeout(function () {
                    i.removeClass("editable-bg-transition")
                }, 1700)
            }, 10)), this.setValue(e.newValue, !1, e.response)
        }, validate: function () {
            return "function" == typeof this.options.validate ? this.options.validate.call(this, this.value) : void 0
        }, setValue: function (t, e, i) {
            this.value = e ? this.input.str2value(t) : t, this.container && this.container.option("value", this.value), u.when(this.render(i)).then(u.proxy(function () {
                this.handleEmpty()
            }, this))
        }, activate: function () {
            this.container && this.container.activate()
        }, destroy: function () {
            this.disable(), this.container && this.container.destroy(), this.input.destroy(), "manual" !== this.options.toggle && (this.$element.removeClass("editable-click"), this.$element.off(this.options.toggle + ".editable")), this.$element.off("save.internal"), this.$element.removeClass("editable editable-open editable-disabled"), this.$element.removeData("editable")
        }
    }, u.fn.editable = function (s) {
        var i = {}, n = arguments, a = "editable";
        switch (s) {
            case"validate":
                return this.each(function () {
                    var t, e = u(this).data(a);
                    e && (t = e.validate()) && (i[e.options.name] = t)
                }), i;
            case"getValue":
                return 2 === arguments.length && !0 === arguments[1] ? i = this.eq(0).data(a).value : this.each(function () {
                    var t = u(this).data(a);
                    t && void 0 !== t.value && null !== t.value && (i[t.options.name] = t.input.value2submit(t.value))
                }), i;
            case"submit":
                var t, e, o, r = arguments[1] || {}, l = this, h = this.editable("validate");
                return u.isEmptyObject(h) ? (o = {}, 1 === l.length ? (e = {
                    name: (t = l.data("editable")).options.name || "",
                    value: t.input.value2submit(t.value),
                    pk: "function" == typeof t.options.pk ? t.options.pk.call(t.options.scope) : t.options.pk
                }, "function" == typeof t.options.params ? e = t.options.params.call(t.options.scope, e) : (t.options.params = u.fn.editableutils.tryParseJson(t.options.params, !0), u.extend(e, t.options.params)), o = {
                    url: t.options.url,
                    data: e,
                    type: "POST"
                }, r.success = r.success || t.options.success, r.error = r.error || t.options.error) : (e = this.editable("getValue"), o = {
                    url: r.url,
                    data: e,
                    type: "POST"
                }), o.success = "function" == typeof r.success ? function (t) {
                    r.success.call(l, t, r)
                } : u.noop, o.error = "function" == typeof r.error ? function () {
                    r.error.apply(l, arguments)
                } : u.noop, r.ajaxOptions && u.extend(o, r.ajaxOptions), r.data && u.extend(o.data, r.data), u.ajax(o)) : "function" == typeof r.error && r.error.call(l, h), this
        }
        return this.each(function () {
            var t = u(this), e = t.data(a), i = "object" == typeof s && s;
            return i && i.selector ? void new d(this, i) : (e || t.data(a, e = new d(this, i)), void ("string" == typeof s && e[s].apply(e, Array.prototype.slice.call(n, 1))))
        })
    }, u.fn.editable.defaults = {
        type: "text",
        disabled: !1,
        toggle: "click",
        emptytext: "Empty",
        autotext: "auto",
        value: null,
        display: null,
        emptyclass: "editable-empty",
        unsavedclass: "editable-unsaved",
        selector: null,
        highlight: "#FFFF80"
    }
}(window.jQuery), function (s) {
    "use strict";
    s.fn.editabletypes = {};

    function t() {
    }

    t.prototype = {
        init: function (t, e, i) {
            this.type = t, this.options = s.extend({}, i, e)
        }, prerender: function () {
            this.$tpl = s(this.options.tpl), this.$input = this.$tpl, this.$clear = null, this.error = null
        }, render: function () {
        }, value2html: function (t, e) {
            s(e)[this.options.escape ? "text" : "html"](s.trim(t))
        }, html2value: function (t) {
            return s("<div>").html(t).text()
        }, value2str: function (t) {
            return String(t)
        }, str2value: function (t) {
            return t
        }, value2submit: function (t) {
            return t
        }, value2input: function (t) {
            this.$input.val(t)
        }, input2value: function () {
            return this.$input.val()
        }, activate: function () {
            this.$input.is(":visible") && this.$input.focus()
        }, clear: function () {
            this.$input.val(null)
        }, escape: function (t) {
            return s("<div>").text(t).html()
        }, autosubmit: function () {
        }, destroy: function () {
        }, setClass: function () {
            this.options.inputclass && this.$input.addClass(this.options.inputclass)
        }, setAttr: function (t) {
            void 0 !== this.options[t] && null !== this.options[t] && this.$input.attr(t, this.options[t])
        }, option: function (t, e) {
            this.options[t] = e
        }
    }, t.defaults = {
        tpl: "",
        inputclass: null,
        escape: !0,
        scope: null,
        showbuttons: !0
    }, s.extend(s.fn.editabletypes, {abstractinput: t})
}(window.jQuery), function (r) {
    "use strict";

    function t(t) {
    }

    r.fn.editableutils.inherit(t, r.fn.editabletypes.abstractinput), r.extend(t.prototype, {
        render: function () {
            var t = r.Deferred();
            return this.error = null, this.onSourceReady(function () {
                this.renderList(), t.resolve()
            }, function () {
                this.error = this.options.sourceError, t.resolve()
            }), t.promise()
        }, html2value: function (t) {
            return null
        }, value2html: function (t, e, i, s) {
            function n() {
                "function" == typeof i ? i.call(e, t, this.sourceData, s) : this.value2htmlFinal(t, e), a.resolve()
            }

            var a = r.Deferred();
            return null === t ? n.call(this) : this.onSourceReady(n, function () {
                a.resolve()
            }), a.promise()
        }, onSourceReady: function (e, i) {
            var t;
            if (r.isFunction(this.options.source) ? (t = this.options.source.call(this.options.scope), this.sourceData = null) : t = this.options.source, this.options.sourceCache && r.isArray(this.sourceData)) e.call(this); else {
                try {
                    t = r.fn.editableutils.tryParseJson(t, !1)
                } catch (t) {
                    return void i.call(this)
                }
                if ("string" == typeof t) {
                    if (this.options.sourceCache) {
                        var s, n = t;
                        if (r(document).data(n) || r(document).data(n, {}), !1 === (s = r(document).data(n)).loading && s.sourceData) return this.sourceData = s.sourceData, this.doPrepend(), void e.call(this);
                        if (!0 === s.loading) return s.callbacks.push(r.proxy(function () {
                            this.sourceData = s.sourceData, this.doPrepend(), e.call(this)
                        }, this)), void s.err_callbacks.push(r.proxy(i, this));
                        s.loading = !0, s.callbacks = [], s.err_callbacks = []
                    }
                    n = r.extend({
                        url: t, type: "get", cache: !1, dataType: "json", success: r.proxy(function (t) {
                            s && (s.loading = !1), this.sourceData = this.makeArray(t), r.isArray(this.sourceData) ? (s && (s.sourceData = this.sourceData, r.each(s.callbacks, function () {
                                this.call()
                            })), this.doPrepend(), e.call(this)) : (i.call(this), s && r.each(s.err_callbacks, function () {
                                this.call()
                            }))
                        }, this), error: r.proxy(function () {
                            i.call(this), s && (s.loading = !1, r.each(s.err_callbacks, function () {
                                this.call()
                            }))
                        }, this)
                    }, this.options.sourceOptions);
                    r.ajax(n)
                } else this.sourceData = this.makeArray(t), (r.isArray(this.sourceData) ? (this.doPrepend(), e) : i).call(this)
            }
        }, doPrepend: function () {
            null !== this.options.prepend && void 0 !== this.options.prepend && (r.isArray(this.prependData) || (r.isFunction(this.options.prepend) && (this.options.prepend = this.options.prepend.call(this.options.scope)), this.options.prepend = r.fn.editableutils.tryParseJson(this.options.prepend, !0), "string" == typeof this.options.prepend && (this.options.prepend = {"": this.options.prepend}), this.prependData = this.makeArray(this.options.prepend)), r.isArray(this.prependData) && r.isArray(this.sourceData) && (this.sourceData = this.prependData.concat(this.sourceData)))
        }, renderList: function () {
        }, value2htmlFinal: function (t, e) {
        }, makeArray: function (t) {
            var i, s, e, n = [];
            if (!t || "string" == typeof t) return null;
            if (r.isArray(t)) for (var a = function (t, e) {
                return s = {value: t, text: e}, !(2 <= i++) && void 0
            }, o = 0; o < t.length; o++) "object" == typeof (e = t[o]) ? (i = 0, r.each(e, a), 1 === i ? n.push(s) : 1 < i && (e.children && (e.children = this.makeArray(e.children)), n.push(e))) : n.push({
                value: e,
                text: e
            }); else r.each(t, function (t, e) {
                n.push({value: t, text: e})
            });
            return n
        }, option: function (t, e) {
            this.options[t] = e, "source" === t && (this.sourceData = null), "prepend" === t && (this.prependData = null)
        }
    }), t.defaults = r.extend({}, r.fn.editabletypes.abstractinput.defaults, {
        source: null,
        prepend: !1,
        sourceError: "Error when loading list",
        sourceCache: !0,
        sourceOptions: null
    }), r.fn.editabletypes.list = t
}(window.jQuery), function (i) {
    "use strict";

    function e(t) {
        this.init("text", t, e.defaults)
    }

    i.fn.editableutils.inherit(e, i.fn.editabletypes.abstractinput), i.extend(e.prototype, {
        render: function () {
            this.renderClear(), this.setClass(), this.setAttr("placeholder")
        }, activate: function () {
            this.$input.is(":visible") && (this.$input.focus(), this.$input.is("input,textarea") && !this.$input.is('[type="checkbox"],[type="range"]') && i.fn.editableutils.setCursorPosition(this.$input.get(0), this.$input.val().length), this.toggleClear && this.toggleClear())
        }, renderClear: function () {
            this.options.clear && (this.$clear = i('<span class="editable-clear-x"></span>'), this.$input.after(this.$clear).css("padding-right", 24).keyup(i.proxy(function (t) {
                var e;
                ~i.inArray(t.keyCode, [40, 38, 9, 13, 27]) || (clearTimeout(this.t), (e = this).t = setTimeout(function () {
                    e.toggleClear(t)
                }, 100))
            }, this)).parent().css("position", "relative"), this.$clear.click(i.proxy(this.clear, this)))
        }, postrender: function () {
        }, toggleClear: function (t) {
            var e, i;
            this.$clear && (e = this.$input.val().length, i = this.$clear.is(":visible"), e && !i && this.$clear.show(), !e && i && this.$clear.hide())
        }, clear: function () {
            this.$clear.hide(), this.$input.val("").focus()
        }
    }), e.defaults = i.extend({}, i.fn.editabletypes.abstractinput.defaults, {
        tpl: '<input type="text">',
        placeholder: null,
        clear: !0
    }), i.fn.editabletypes.text = e
}(window.jQuery), function (e) {
    "use strict";

    function i(t) {
        this.init("textarea", t, i.defaults)
    }

    e.fn.editableutils.inherit(i, e.fn.editabletypes.abstractinput), e.extend(i.prototype, {
        render: function () {
            this.setClass(), this.setAttr("placeholder"), this.setAttr("rows"), this.$input.keydown(function (t) {
                t.ctrlKey && 13 === t.which && e(this).closest("form").submit()
            })
        }, activate: function () {
            e.fn.editabletypes.text.prototype.activate.call(this)
        }
    }), i.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
        tpl: "<textarea></textarea>",
        inputclass: "input-large",
        placeholder: null,
        rows: 7
    }), e.fn.editabletypes.textarea = i
}(window.jQuery), function (o) {
    "use strict";

    function e(t) {
        this.init("select", t, e.defaults)
    }

    o.fn.editableutils.inherit(e, o.fn.editabletypes.list), o.extend(e.prototype, {
        renderList: function () {
            this.$input.empty();
            var n = this.options.escape, a = function (t, e) {
                var i;
                if (o.isArray(e)) for (var s = 0; s < e.length; s++) i = {}, e[s].children ? (i.label = e[s].text, t.append(a(o("<optgroup>", i), e[s].children))) : (i.value = e[s].value, e[s].disabled && (i.disabled = !0), (i = o("<option>", i))[n ? "text" : "html"](e[s].text), t.append(i));
                return t
            };
            a(this.$input, this.sourceData), this.setClass(), this.$input.on("keydown.editable", function (t) {
                13 === t.which && o(this).closest("form").submit()
            })
        }, value2htmlFinal: function (t, e) {
            var i = "", t = o.fn.editableutils.itemsByValue(t, this.sourceData);
            t.length && (i = t[0].text), o.fn.editabletypes.abstractinput.prototype.value2html.call(this, i, e)
        }, autosubmit: function () {
            this.$input.off("keydown.editable").on("change.editable", function () {
                o(this).closest("form").submit()
            })
        }
    }), e.defaults = o.extend({}, o.fn.editabletypes.list.defaults, {tpl: "<select></select>"}), o.fn.editabletypes.select = e
}(window.jQuery), function (n) {
    "use strict";

    function e(t) {
        this.init("checklist", t, e.defaults)
    }

    n.fn.editableutils.inherit(e, n.fn.editabletypes.list), n.extend(e.prototype, {
        renderList: function () {
            if (this.$tpl.empty(), n.isArray(this.sourceData)) {
                for (var t = 0; t < this.sourceData.length; t++) {
                    var e = n("<label>").append(n("<input>", {type: "checkbox", value: this.sourceData[t].value})),
                        i = n("<span>");
                    i[this.options.escape ? "text" : "html"](" " + this.sourceData[t].text), e.append(i), n("<div>").append(e).appendTo(this.$tpl)
                }
                this.$input = this.$tpl.find('input[type="checkbox"]'), this.setClass()
            }
        }, value2str: function (t) {
            return n.isArray(t) ? t.sort().join(n.trim(this.options.separator)) : ""
        }, str2value: function (t) {
            var e;
            return "string" == typeof t && t.length ? (e = new RegExp("\\s*" + n.trim(this.options.separator) + "\\s*"), t.split(e)) : n.isArray(t) ? t : [t]
        }, value2input: function (s) {
            this.$input.prop("checked", !1), n.isArray(s) && s.length && this.$input.each(function (t, e) {
                var i = n(e);
                n.each(s, function (t, e) {
                    i.val() == e && i.prop("checked", !0)
                })
            })
        }, input2value: function () {
            var i = [];
            return this.$input.filter(":checked").each(function (t, e) {
                i.push(n(e).val())
            }), i
        }, value2htmlFinal: function (t, e) {
            var i = [], t = n.fn.editableutils.itemsByValue(t, this.sourceData), s = this.options.escape;
            t.length ? (n.each(t, function (t, e) {
                e = s ? n.fn.editableutils.escape(e.text) : e.text;
                i.push(e)
            }), n(e).html(i.join("<br>"))) : n(e).empty()
        }, activate: function () {
            this.$input.first().focus()
        }, autosubmit: function () {
            this.$input.on("keydown", function (t) {
                13 === t.which && n(this).closest("form").submit()
            })
        }
    }), e.defaults = n.extend({}, n.fn.editabletypes.list.defaults, {
        tpl: '<div class="editable-checklist"></div>',
        inputclass: null,
        separator: ","
    }), n.fn.editabletypes.checklist = e
}(window.jQuery), function (i) {
    "use strict";

    function e(t) {
        this.init("password", t, e.defaults)
    }

    i.fn.editableutils.inherit(e, i.fn.editabletypes.text), i.extend(e.prototype, {
        value2html: function (t, e) {
            t ? i(e).text("[hidden]") : i(e).empty()
        }, html2value: function (t) {
            return null
        }
    }), e.defaults = i.extend({}, i.fn.editabletypes.text.defaults, {tpl: '<input type="password">'}), i.fn.editabletypes.password = e
}(window.jQuery), function (t) {
    "use strict";

    function e(t) {
        this.init("email", t, e.defaults)
    }

    t.fn.editableutils.inherit(e, t.fn.editabletypes.text), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, {tpl: '<input type="email">'}), t.fn.editabletypes.email = e
}(window.jQuery), function (t) {
    "use strict";

    function e(t) {
        this.init("url", t, e.defaults)
    }

    t.fn.editableutils.inherit(e, t.fn.editabletypes.text), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, {tpl: '<input type="url">'}), t.fn.editabletypes.url = e
}(window.jQuery), function (t) {
    "use strict";

    function e(t) {
        this.init("tel", t, e.defaults)
    }

    t.fn.editableutils.inherit(e, t.fn.editabletypes.text), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, {tpl: '<input type="tel">'}), t.fn.editabletypes.tel = e
}(window.jQuery), function (t) {
    "use strict";

    function e(t) {
        this.init("number", t, e.defaults)
    }

    t.fn.editableutils.inherit(e, t.fn.editabletypes.text), t.extend(e.prototype, {
        render: function () {
            e.superclass.render.call(this), this.setAttr("min"), this.setAttr("max"), this.setAttr("step")
        }, postrender: function () {
            this.$clear && this.$clear.css({right: 24})
        }
    }), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, {
        tpl: '<input type="number">',
        inputclass: "input-mini",
        min: null,
        max: null,
        step: null
    }), t.fn.editabletypes.number = e
}(window.jQuery), function (t) {
    "use strict";

    function e(t) {
        this.init("range", t, e.defaults)
    }

    t.fn.editableutils.inherit(e, t.fn.editabletypes.number), t.extend(e.prototype, {
        render: function () {
            this.$input = this.$tpl.filter("input"), this.setClass(), this.setAttr("min"), this.setAttr("max"), this.setAttr("step"), this.$input.on("input", function () {
                t(this).siblings("output").text(t(this).val())
            })
        }, activate: function () {
            this.$input.focus()
        }
    }), e.defaults = t.extend({}, t.fn.editabletypes.number.defaults, {
        tpl: '<input type="range"><output style="width: 30px; display: inline-block"></output>',
        inputclass: "input-medium"
    }), t.fn.editabletypes.range = e
}(window.jQuery), function (t) {
    "use strict";

    function e(t) {
        this.init("time", t, e.defaults)
    }

    t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, {
        render: function () {
            this.setClass()
        }
    }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, {tpl: '<input type="time">'}), t.fn.editabletypes.time = e
}(window.jQuery), function (a) {
    "use strict";

    function o(t) {
        var e, i;
        this.init("select2", t, o.defaults), t.select2 = t.select2 || {}, this.sourceData = null, t.placeholder && (t.select2.placeholder = t.placeholder), !t.select2.tags && t.source && (e = t.source, "string" == typeof (e = a.isFunction(t.source) ? t.source.call(t.scope) : e) ? (t.select2.ajax = t.select2.ajax || {}, t.select2.ajax.data || (t.select2.ajax.data = function (t) {
            return {query: t}
        }), t.select2.ajax.results || (t.select2.ajax.results = function (t) {
            return {results: t}
        }), t.select2.ajax.url = e) : (this.sourceData = this.convertSource(e), t.select2.data = this.sourceData)), this.options.select2 = a.extend({}, o.defaults.select2, t.select2), this.isMultiple = this.options.select2.tags || this.options.select2.multiple, this.isRemote = "ajax" in this.options.select2, this.idFunc = this.options.select2.id, "function" != typeof this.idFunc && (i = this.idFunc || "id", this.idFunc = function (t) {
            return t[i]
        }), this.formatSelection = this.options.select2.formatSelection, "function" != typeof this.formatSelection && (this.formatSelection = function (t) {
            return t.text
        })
    }

    a.fn.editableutils.inherit(o, a.fn.editabletypes.abstractinput), a.extend(o.prototype, {
        render: function () {
            this.setClass(), this.isRemote && this.$input.on("select2-loaded", a.proxy(function (t) {
                this.sourceData = t.items.results
            }, this)), this.isMultiple && this.$input.on("change", function () {
                a(this).closest("form").parent().triggerHandler("resize")
            })
        }, value2html: function (t, e) {
            var i, s = "", n = this;
            this.options.select2.tags ? i = t : this.sourceData && (i = a.fn.editableutils.itemsByValue(t, this.sourceData, this.idFunc)), a.isArray(i) ? (s = [], a.each(i, function (t, e) {
                s.push(e && "object" == typeof e ? n.formatSelection(e) : e)
            })) : i && (s = n.formatSelection(i)), s = a.isArray(s) ? s.join(this.options.viewseparator) : s, o.superclass.value2html.call(this, s, e)
        }, html2value: function (t) {
            return this.options.select2.tags ? this.str2value(t, this.options.viewseparator) : null
        }, value2input: function (t) {
            var e, i;
            a.isArray(t) && (t = t.join(this.getSeparator())), this.$input.data("select2") ? this.$input.val(t).trigger("change", !0) : (this.$input.val(t), this.$input.select2(this.options.select2)), !this.isRemote || this.isMultiple || this.options.select2.initSelection || (e = this.options.select2.id, i = this.options.select2.formatSelection, e || i || ((e = a(this.options.scope)).data("editable").isEmpty || (i = {
                id: t,
                text: e.text()
            }, this.$input.select2("data", i))))
        }, input2value: function () {
            return this.$input.select2("val")
        }, str2value: function (t, e) {
            if ("string" != typeof t || !this.isMultiple) return t;
            var i, s, n;
            if (e = e || this.getSeparator(), null === t || t.length < 1) return null;
            for (s = 0, n = (i = t.split(e)).length; s < n; s += 1) i[s] = a.trim(i[s]);
            return i
        }, autosubmit: function () {
            this.$input.on("change", function (t, e) {
                e || a(this).closest("form").submit()
            })
        }, getSeparator: function () {
            return this.options.select2.separator || a.fn.select2.defaults.separator
        }, convertSource: function (t) {
            if (a.isArray(t) && t.length && void 0 !== t[0].value) for (var e = 0; e < t.length; e++) void 0 !== t[e].value && (t[e].id = t[e].value, delete t[e].value);
            return t
        }, activate: function () {
            this.$input.select2("open")
        }, destroy: function () {
            this.$input && this.$input.data("select2") && this.$input.select2("destroy")
        }
    }), o.defaults = a.extend({}, a.fn.editabletypes.abstractinput.defaults, {
        tpl: '<input type="hidden">',
        select2: null,
        placeholder: null,
        source: null,
        viewseparator: ", "
    }), a.fn.editabletypes.select2 = o
}(window.jQuery), function (o) {
    function n(t, e) {
        return this.$element = o(t), this.$element.is("input") ? (this.options = o.extend({}, o.fn.combodate.defaults, e, this.$element.data()), void this.init()) : void o.error("Combodate should be applied to INPUT element")
    }

    n.prototype = {
        constructor: n, init: function () {
            this.map = {
                day: ["D", "date"],
                month: ["M", "month"],
                year: ["Y", "year"],
                hour: ["[Hh]", "hours"],
                minute: ["m", "minutes"],
                second: ["s", "seconds"],
                ampm: ["[Aa]", ""]
            }, this.$widget = o('<span class="combodate"></span>').html(this.getTemplate()), this.initCombos(), this.datetime = null, this.$widget.on("change", "select", o.proxy(function (t) {
                this.$element.val(this.getValue()).change(), this.options.smartDays && (o(t.target).is(".month") || o(t.target).is(".year")) && this.fillCombo("day")
            }, this)), this.$widget.find("select").css("width", "auto"), this.$element.hide().after(this.$widget), this.setValue(this.$element.val() || this.options.value)
        }, getTemplate: function () {
            var s = this.options.template, i = this.$element.prop("disabled"), n = this.options.customClass;
            return o.each(this.map, function (t, e) {
                e = e[0];
                var i = new RegExp(e + "+"), e = 1 < e.length ? e.substring(1, 2) : e;
                s = s.replace(i, "{" + e + "}")
            }), s = s.replace(/ /g, "&nbsp;"), o.each(this.map, function (t, e) {
                e = 1 < (e = e[0]).length ? e.substring(1, 2) : e;
                s = s.replace("{" + e + "}", '<select class="' + t + " " + n + '"' + (i ? ' disabled="disabled"' : "") + "></select>")
            }), s
        }, initCombos: function () {
            for (var t in this.map) {
                var e = this.$widget.find("." + t);
                this["$" + t] = e.length ? e : null, this.fillCombo(t)
            }
        }, fillCombo: function (t) {
            var e = this["$" + t];
            if (e) {
                var i = this["fill" + t.charAt(0).toUpperCase() + t.slice(1)](), t = e.val();
                e.empty();
                for (var s = 0; s < i.length; s++) e.append('<option value="' + i[s][0] + '">' + i[s][1] + "</option>");
                e.val(t)
            }
        }, fillCommon: function (t) {
            var e, i = [];
            return "name" === this.options.firstItem ? (e = (e = "function" == typeof (e = moment.localeData ? moment.localeData()._relativeTime : moment.relativeTime || moment.langData()._relativeTime)[t] ? e[t](1, !0, t, !1) : e[t]).split(" ").reverse()[0], i.push(["", e])) : "empty" === this.options.firstItem && i.push(["", ""]), i
        }, fillDay: function () {
            var t, e, i, s, n = this.fillCommon("d"), a = -1 !== this.options.template.indexOf("DD"), o = 31;
            for (this.options.smartDays && this.$month && this.$year && (i = parseInt(this.$month.val(), 10), s = parseInt(this.$year.val(), 10), isNaN(i) || isNaN(s) || (o = moment([s, i]).daysInMonth())), e = 1; e <= o; e++) t = a ? this.leadZero(e) : e, n.push([e, t]);
            return n
        }, fillMonth: function () {
            for (var t, e = this.fillCommon("M"), i = -1 !== this.options.template.indexOf("MMMMMM"), s = -1 !== this.options.template.indexOf("MMMMM"), n = -1 !== this.options.template.indexOf("MMMM"), a = -1 !== this.options.template.indexOf("MMM"), o = -1 !== this.options.template.indexOf("MM"), r = 0; r <= 11; r++) t = i ? moment().date(1).month(r).format("MM - MMMM") : s ? moment().date(1).month(r).format("MM - MMM") : n ? moment().date(1).month(r).format("MMMM") : a ? moment().date(1).month(r).format("MMM") : o ? this.leadZero(r + 1) : r + 1, e.push([r, t]);
            return e
        }, fillYear: function () {
            for (var t, e = [], i = -1 !== this.options.template.indexOf("YYYY"), s = this.options.maxYear; s >= this.options.minYear; s--) t = i ? s : (s + "").substring(2), e[this.options.yearDescending ? "push" : "unshift"]([s, t]);
            return this.fillCommon("y").concat(e)
        }, fillHour: function () {
            for (var t, e = this.fillCommon("h"), i = -1 !== this.options.template.indexOf("h"), s = (this.options.template.indexOf("H"), -1 !== this.options.template.toLowerCase().indexOf("hh")), n = i ? 12 : 23, a = i ? 1 : 0; a <= n; a++) t = s ? this.leadZero(a) : a, e.push([a, t]);
            return e
        }, fillMinute: function () {
            for (var t, e = this.fillCommon("m"), i = -1 !== this.options.template.indexOf("mm"), s = 0; s <= 59; s += this.options.minuteStep) t = i ? this.leadZero(s) : s, e.push([s, t]);
            return e
        }, fillSecond: function () {
            for (var t, e = this.fillCommon("s"), i = -1 !== this.options.template.indexOf("ss"), s = 0; s <= 59; s += this.options.secondStep) t = i ? this.leadZero(s) : s, e.push([s, t]);
            return e
        }, fillAmpm: function () {
            var t = -1 !== this.options.template.indexOf("a");
            return this.options.template.indexOf("A"), [["am", t ? "am" : "AM"], ["pm", t ? "pm" : "PM"]]
        }, getValue: function (t) {
            var e, i = {}, s = this, n = !1;
            return o.each(this.map, function (t, e) {
                if ("ampm" !== t) return s["$" + t] ? i[t] = parseInt(s["$" + t].val(), 10) : (e = s.datetime ? s.datetime[e[1]]() : "day" === t ? 1 : 0, i[t] = e), isNaN(i[t]) ? !(n = !0) : void 0
            }), n ? "" : (this.$ampm && (i.hour = 12 === i.hour ? "am" === this.$ampm.val() ? 0 : 12 : "am" === this.$ampm.val() ? i.hour : i.hour + 12), e = moment([i.year, i.month, i.day, i.hour, i.minute, i.second]), this.highlight(e), null === (t = void 0 === t ? this.options.format : t) ? e.isValid() ? e : null : e.isValid() ? e.format(t) : "")
        }, setValue: function (t) {
            function i(t, s) {
                var n = {};
                return t.children("option").each(function (t, e) {
                    var i, e = o(e).attr("value");
                    "" !== e && (i = Math.abs(e - s), (void 0 === n.distance || i < n.distance) && (n = {
                        value: e,
                        distance: i
                    }))
                }), n.value
            }

            var s, n, a;
            t && (s = "string" == typeof t ? moment(t, this.options.format, !0) : moment(t), n = this, a = {}, s.isValid() ? (o.each(this.map, function (t, e) {
                "ampm" !== t && (a[t] = s[e[1]]())
            }), this.$ampm && (12 <= a.hour ? (a.ampm = "pm", 12 < a.hour && (a.hour -= 12)) : (a.ampm = "am", 0 === a.hour && (a.hour = 12))), o.each(a, function (t, e) {
                n["$" + t] && ("minute" === t && 1 < n.options.minuteStep && n.options.roundTime && (e = i(n["$" + t], e)), "second" === t && 1 < n.options.secondStep && n.options.roundTime && (e = i(n["$" + t], e)), n["$" + t].val(e))
            }), this.options.smartDays && this.fillCombo("day"), this.$element.val(s.format(this.options.format)).change(), this.datetime = s) : this.datetime = null)
        }, highlight: function (t) {
            t.isValid() ? this.options.errorClass ? this.$widget.removeClass(this.options.errorClass) : this.$widget.find("select").css("border-color", this.borderColor) : this.options.errorClass ? this.$widget.addClass(this.options.errorClass) : (this.borderColor || (this.borderColor = this.$widget.find("select").css("border-color")), this.$widget.find("select").css("border-color", "red"))
        }, leadZero: function (t) {
            return t <= 9 ? "0" + t : t
        }, destroy: function () {
            this.$widget.remove(), this.$element.removeData("combodate").show()
        }
    }, o.fn.combodate = function (i) {
        var t, s = Array.apply(null, arguments);
        return s.shift(), "getValue" === i && this.length && (t = this.eq(0).data("combodate")) ? t.getValue.apply(t, s) : this.each(function () {
            var t = o(this), e = t.data("combodate");
            e || t.data("combodate", e = new n(this, "object" == typeof i && i)), "string" == typeof i && "function" == typeof e[i] && e[i].apply(e, s)
        })
    }, o.fn.combodate.defaults = {
        format: "DD-MM-YYYY HH:mm",
        template: "D / MMM / YYYY   H : mm",
        value: null,
        minYear: 1970,
        maxYear: (new Date).getFullYear(),
        yearDescending: !0,
        minuteStep: 5,
        secondStep: 1,
        firstItem: "empty",
        errorClass: null,
        customClass: "",
        roundTime: !0,
        smartDays: !1
    }
}(window.jQuery), function (e) {
    "use strict";

    function i(t) {
        this.init("combodate", t, i.defaults), this.options.viewformat || (this.options.viewformat = this.options.format), t.combodate = e.fn.editableutils.tryParseJson(t.combodate, !0), this.options.combodate = e.extend({}, i.defaults.combodate, t.combodate, {
            format: this.options.format,
            template: this.options.template
        })
    }

    e.fn.editableutils.inherit(i, e.fn.editabletypes.abstractinput), e.extend(i.prototype, {
        render: function () {
            this.$input.combodate(this.options.combodate), "bs3" === e.fn.editableform.engine && this.$input.siblings().find("select").addClass("form-control"), this.options.inputclass && this.$input.siblings().find("select").addClass(this.options.inputclass)
        }, value2html: function (t, e) {
            t = t ? t.format(this.options.viewformat) : "";
            i.superclass.value2html.call(this, t, e)
        }, html2value: function (t) {
            return t ? moment(t, this.options.viewformat) : null
        }, value2str: function (t) {
            return t ? t.format(this.options.format) : ""
        }, str2value: function (t) {
            return t ? moment(t, this.options.format) : null
        }, value2submit: function (t) {
            return this.value2str(t)
        }, value2input: function (t) {
            this.$input.combodate("setValue", t)
        }, input2value: function () {
            return this.$input.combodate("getValue", null)
        }, activate: function () {
            this.$input.siblings(".combodate").find("select").eq(0).focus()
        }, autosubmit: function () {
        }
    }), i.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
        tpl: '<input type="text">',
        inputclass: null,
        format: "YYYY-MM-DD",
        viewformat: null,
        template: "D / MMM / YYYY",
        combodate: null
    }), e.fn.editabletypes.combodate = i
}(window.jQuery), function (o) {
    "use strict";
    var r = o.fn.editableform.Constructor.prototype.initInput;
    o.extend(o.fn.editableform.Constructor.prototype, {
        initTemplate: function () {
            this.$form = o(o.fn.editableform.template), this.$form.find(".control-group").addClass("form-group"), this.$form.find(".editable-error-block").addClass("help-block")
        }, initInput: function () {
            r.apply(this);
            var t = null === this.input.options.inputclass || !1 === this.input.options.inputclass,
                e = "form-control-sm",
                i = "text,select,textarea,password,email,url,tel,number,range,time,typeaheadjs".split(",");
            ~o.inArray(this.input.type, i) && (this.input.$input.addClass("form-control"), t && (this.input.options.inputclass = e, this.input.$input.addClass(e)));
            for (var s = this.$form.find(".editable-buttons"), n = t ? [e] : this.input.options.inputclass.split(" "), a = 0; a < n.length; a++) "input-lg" === n[a].toLowerCase() && s.find("button").removeClass("btn-sm").addClass("btn-lg")
        }
    }), o.fn.editableform.buttons = '<button type="submit" class="btn btn-primary btn-sm editable-submit"><i class="fa fa-check" aria-hidden="true"></i></button><button type="button" class="btn btn-default btn-sm editable-cancel"><i class="fa fa-times" aria-hidden="true"></i></button>', o.fn.editableform.errorGroupClass = "has-error", o.fn.editableform.errorBlockClass = null, o.fn.editableform.engine = "bs4"
}(window.jQuery), function (e) {
    "use strict";
    e.extend(e.fn.editableContainer.Popup.prototype, {
        containerName: "popover",
        containerDataName: "bs.popover",
        innerCss: ".popover-body",
        // defaults: e.fn.popover.Constructor.DEFAULTS,
        initContainer: function () {
            var t;
            e.extend(this.containerOptions, {
                trigger: "manual",
                selector: !1,
                content: " ",
                template: this.defaults.template
            }), this.$element.data("template") && (t = this.$element.data("template"), this.$element.removeData("template")), this.call(this.containerOptions), t && this.$element.data("template", t)
        },
        innerShow: function () {
            this.call("show")
        },
        innerHide: function () {
            this.call("hide")
        },
        innerDestroy: function () {
            this.call("dispose")
        },
        setContainerOption: function (t, e) {
            this.container().options[t] = e
        },
        setPosition: function () {
            !function () {
            }.call(this.container())
        },
        tip: function () {
            return this.container() ? e(this.container().tip) : null
        }
    })
}(window.jQuery), function (y) {
    function v() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function b(t, e) {
        this._process_options(e), this.element = y(t), this.isInline = !1, this.isInput = this.element.is("input"), this.component = !!this.element.is(".date") && this.element.find(".add-on, .btn"), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = y(w.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && (this.picker.addClass("datepicker-rtl"), this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function (t, e) {
            return parseInt(e) + 1
        }), this._allow_update = !1, this.setStartDate(this.o.startDate), this.setEndDate(this.o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
    }

    function l(t, e) {
        this.element = y(t), this.inputs = y.map(e.inputs, function (t) {
            return t.jquery ? t[0] : t
        }), delete e.inputs, y(this.inputs).datepicker(e).bind("changeDate", y.proxy(this.dateUpdated, this)), this.pickers = y.map(this.inputs, function (t) {
            return y(t).data("datepicker")
        }), this.updateDates()
    }

    b.prototype = {
        constructor: b, _process_options: function (t) {
            this._o = y.extend({}, this._o, t);
            var e = this.o = y.extend({}, this._o), t = e.language;
            switch (g[t] || (t = t.split("-")[0], g[t] || (t = h.language)), e.language = t, e.startView) {
                case 2:
                case"decade":
                    e.startView = 2;
                    break;
                case 1:
                case"year":
                    e.startView = 1;
                    break;
                default:
                    e.startView = 0
            }
            switch (e.minViewMode) {
                case 1:
                case"months":
                    e.minViewMode = 1;
                    break;
                case 2:
                case"years":
                    e.minViewMode = 2;
                    break;
                default:
                    e.minViewMode = 0
            }
            e.startView = Math.max(e.startView, e.minViewMode), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7;
            t = w.parseFormat(e.format);
            e.startDate !== -1 / 0 && (e.startDate = w.parseDate(e.startDate, t, e.language)), e.endDate !== 1 / 0 && (e.endDate = w.parseDate(e.endDate, t, e.language)), e.daysOfWeekDisabled = e.daysOfWeekDisabled || [], y.isArray(e.daysOfWeekDisabled) || (e.daysOfWeekDisabled = e.daysOfWeekDisabled.split(/[,\s]*/)), e.daysOfWeekDisabled = y.map(e.daysOfWeekDisabled, function (t) {
                return parseInt(t, 10)
            })
        }, _events: [], _secondaryEvents: [], _applyEvents: function (t) {
            for (var e, i, s = 0; s < t.length; s++) e = t[s][0], i = t[s][1], e.on(i)
        }, _unapplyEvents: function (t) {
            for (var e, i, s = 0; s < t.length; s++) e = t[s][0], i = t[s][1], e.off(i)
        }, _buildEvents: function () {
            this.isInput ? this._events = [[this.element, {
                focus: y.proxy(this.show, this),
                keyup: y.proxy(this.update, this),
                keydown: y.proxy(this.keydown, this)
            }]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), {
                focus: y.proxy(this.show, this),
                keyup: y.proxy(this.update, this),
                keydown: y.proxy(this.keydown, this)
            }], [this.component, {click: y.proxy(this.show, this)}]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {click: y.proxy(this.show, this)}]], this._secondaryEvents = [[this.picker, {click: y.proxy(this.click, this)}], [y(window), {resize: y.proxy(this.place, this)}], [y(document), {
                mousedown: y.proxy(function (t) {
                    this.element.is(t.target) || this.element.find(t.target).size() || this.picker.is(t.target) || this.picker.find(t.target).size() || this.hide()
                }, this)
            }]]
        }, _attachEvents: function () {
            this._detachEvents(), this._applyEvents(this._events)
        }, _detachEvents: function () {
            this._unapplyEvents(this._events)
        }, _attachSecondaryEvents: function () {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        }, _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        }, _trigger: function (t, e) {
            var i = e || this.date, e = new Date(i.getTime() + 6e4 * i.getTimezoneOffset());
            this.element.trigger({
                type: t, date: e, format: y.proxy(function (t) {
                    t = t || this.o.format;
                    return w.formatDate(i, t, this.o.language)
                }, this)
            })
        }, show: function (t) {
            this.isInline || this.picker.appendTo("body"), this.picker.show(), this.height = (this.component || this.element).outerHeight(), this.place(), this._attachSecondaryEvents(), t && t.preventDefault(), this._trigger("show")
        }, hide: function (t) {
            this.isInline || this.picker.is(":visible") && (this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
        }, remove: function () {
            this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
        }, getDate: function () {
            var t = this.getUTCDate();
            return new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
        }, getUTCDate: function () {
            return this.date
        }, setDate: function (t) {
            this.setUTCDate(new Date(t.getTime() - 6e4 * t.getTimezoneOffset()))
        }, setUTCDate: function (t) {
            this.date = t, this.setValue()
        }, setValue: function () {
            var t = this.getFormattedDate();
            this.isInput ? this.element.val(t) : this.component && this.element.find("input").val(t)
        }, getFormattedDate: function (t) {
            return void 0 === t && (t = this.o.format), w.formatDate(this.date, t, this.o.language)
        }, setStartDate: function (t) {
            this._process_options({startDate: t}), this.update(), this.updateNavArrows()
        }, setEndDate: function (t) {
            this._process_options({endDate: t}), this.update(), this.updateNavArrows()
        }, setDaysOfWeekDisabled: function (t) {
            this._process_options({daysOfWeekDisabled: t}), this.update(), this.updateNavArrows()
        }, place: function () {
            var t, e, i;
            this.isInline || (t = parseInt(this.element.parents().filter(function () {
                return "auto" != y(this).css("z-index")
            }).first().css("z-index")) + 10, e = (this.component ? this.component.parent() : this.element).offset(), i = (this.component || this.element).outerHeight(!0), this.picker.css({
                top: e.top + i,
                left: e.left,
                zIndex: t
            }))
        }, _allow_update: !0, update: function () {
            var t, e;
            this._allow_update && (e = !1, arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (t = arguments[0], e = !0) : (t = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), delete this.element.data().date), this.date = w.parseDate(t, this.o.format, this.o.language), e && this.setValue(), this.date < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.date > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = new Date(this.date), this.fill())
        }, fillDow: function () {
            var t, e = this.o.weekStart, i = "<tr>";
            for (this.o.calendarWeeks && (i += t = '<th class="cw">&nbsp;</th>', this.picker.find(".datepicker-days thead tr:first-child").prepend(t)); e < this.o.weekStart + 7;) i += '<th class="dow">' + g[this.o.language].daysMin[e++ % 7] + "</th>";
            i += "</tr>", this.picker.find(".datepicker-days thead").append(i)
        }, fillMonths: function () {
            for (var t = "", e = 0; e < 12;) t += '<span class="month">' + g[this.o.language].monthsShort[e++] + "</span>";
            this.picker.find(".datepicker-months td").html(t)
        }, setRange: function (t) {
            t && t.length ? this.range = y.map(t, function (t) {
                return t.valueOf()
            }) : delete this.range, this.fill()
        }, getClassNames: function (t) {
            var e = [], i = this.viewDate.getUTCFullYear(), s = this.viewDate.getUTCMonth(), n = this.date.valueOf(),
                a = new Date;
            return t.getUTCFullYear() < i || t.getUTCFullYear() == i && t.getUTCMonth() < s ? e.push("old") : (t.getUTCFullYear() > i || t.getUTCFullYear() == i && t.getUTCMonth() > s) && e.push("new"), this.o.todayHighlight && t.getUTCFullYear() == a.getFullYear() && t.getUTCMonth() == a.getMonth() && t.getUTCDate() == a.getDate() && e.push("today"), n && t.valueOf() == n && e.push("active"), (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || -1 !== y.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)) && e.push("disabled"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && e.push("range"), -1 != y.inArray(t.valueOf(), this.range) && e.push("selected")), e
        }, fill: function () {
            var t, e = new Date(this.viewDate), i = e.getUTCFullYear(), e = e.getUTCMonth(),
                s = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                n = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                a = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                o = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                r = (this.date && this.date.valueOf(), this.picker.find(".datepicker-days thead th.datepicker-switch").text(g[this.o.language].months[e] + " " + i), this.picker.find("tfoot th.today").text(g[this.o.language].today).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot th.clear").text(g[this.o.language].clear).toggle(!1 !== this.o.clearBtn), this.updateNavArrows(), this.fillMonths(), v(i, e - 1, 28, 0, 0, 0, 0)),
                e = w.getDaysInMonth(r.getUTCFullYear(), r.getUTCMonth());
            r.setUTCDate(e), r.setUTCDate(e - (r.getUTCDay() - this.o.weekStart + 7) % 7), (l = new Date(r)).setUTCDate(l.getUTCDate() + 42);
            for (var l = l.valueOf(), h = []; r.valueOf() < l;) {
                r.getUTCDay() == this.o.weekStart && (h.push("<tr>"), this.o.calendarWeeks) && (u = new Date(+r + (this.o.weekStart - r.getUTCDay() - 7) % 7 * 864e5), u = new Date(+u + (11 - u.getUTCDay()) % 7 * 864e5), d = new Date(+(d = v(u.getUTCFullYear(), 0, 1)) + (11 - d.getUTCDay()) % 7 * 864e5), h.push('<td class="cw">' + ((u - d) / 864e5 / 7 + 1) + "</td>")), (u = this.getClassNames(r)).push("day");
                var u, d = this.o.beforeShowDay(r);
                void 0 === d ? d = {} : "boolean" == typeof d ? d = {enabled: d} : "string" == typeof d && (d = {classes: d}), !1 === d.enabled && u.push("disabled"), d.classes && (u = u.concat(d.classes.split(/\s+/))), d.tooltip && (t = d.tooltip), u = y.unique(u), h.push('<td class="' + u.join(" ") + '"' + (t ? ' title="' + t + '"' : "") + ">" + r.getUTCDate() + "</td>"), r.getUTCDay() == this.o.weekEnd && h.push("</tr>"), r.setUTCDate(r.getUTCDate() + 1)
            }
            this.picker.find(".datepicker-days tbody").empty().append(h.join(""));
            var c = this.date && this.date.getUTCFullYear(),
                e = this.picker.find(".datepicker-months").find("th:eq(1)").text(i).end().find("span").removeClass("active"),
                n = (c && c == i && e.eq(this.date.getUTCMonth()).addClass("active"), (i < s || a < i) && e.addClass("disabled"), i == s && e.slice(0, n).addClass("disabled"), i == a && e.slice(o + 1).addClass("disabled"), h = "", i = 10 * parseInt(i / 10, 10), this.picker.find(".datepicker-years").find("th:eq(1)").text(i + "-" + (i + 9)).end().find("td"));
            --i;
            for (var p = -1; p < 11; p++) h += '<span class="year' + (-1 == p ? " old" : 10 == p ? " new" : "") + (c == i ? " active" : "") + (i < s || a < i ? " disabled" : "") + '">' + i + "</span>", i += 1;
            n.html(h)
        }, updateNavArrows: function () {
            if (this._allow_update) {
                var t = new Date(this.viewDate), e = t.getUTCFullYear(), i = t.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"});
                        break;
                    case 1:
                    case 2:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"})
                }
            }
        }, click: function (t) {
            t.preventDefault();
            var e, i, s, n, a = y(t.target).closest("span, td, th");
            if (1 == a.length) switch (a[0].nodeName.toLowerCase()) {
                case"th":
                    switch (a[0].className) {
                        case"datepicker-switch":
                            this.showMode(1);
                            break;
                        case"prev":
                        case"next":
                            var o = w.modes[this.viewMode].navStep * ("prev" == a[0].className ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, o);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, o)
                            }
                            this.fill();
                            break;
                        case"today":
                            var r = v((r = new Date).getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0),
                                l = (this.showMode(-2), "linked" == this.o.todayBtn ? null : "view");
                            this._setDate(r, l);
                            break;
                        case"clear":
                            this.isInput ? e = this.element : this.component && (e = this.element.find("input")), e && e.val("").change(), this._trigger("changeDate"), this.update(), this.o.autoclose && this.hide()
                    }
                    break;
                case"span":
                    a.is(".disabled") || (this.viewDate.setUTCDate(1), a.is(".month") ? (i = 1, n = a.parent().find("span").index(a), s = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(n), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(v(s, n, i, 0, 0, 0, 0))) : (s = parseInt(a.text(), 10) || 0, i = 1, n = 0, this.viewDate.setUTCFullYear(s), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(v(s, n, i, 0, 0, 0, 0))), this.showMode(-1), this.fill());
                    break;
                case"td":
                    a.is(".day") && !a.is(".disabled") && (i = parseInt(a.text(), 10) || 1, s = this.viewDate.getUTCFullYear(), n = this.viewDate.getUTCMonth(), a.is(".old") ? 0 === n ? (n = 11, --s) : --n : a.is(".new") && (11 == n ? (n = 0, s += 1) : n += 1), this._setDate(v(s, n, i, 0, 0, 0, 0)))
            }
        }, _setDate: function (t, e) {
            var i;
            e && "date" != e || (this.date = new Date(t)), e && "view" != e || (this.viewDate = new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate"), this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && (i.change(), !this.o.autoclose || e && "date" != e || this.hide())
        }, moveMonth: function (t, e) {
            if (!e) return t;
            var i, s, n = new Date(t.valueOf()), a = n.getUTCDate(), o = n.getUTCMonth(), r = Math.abs(e);
            if (e = 0 < e ? 1 : -1, 1 == r) s = -1 == e ? function () {
                return n.getUTCMonth() == o
            } : function () {
                return n.getUTCMonth() != i
            }, i = o + e, n.setUTCMonth(i), (i < 0 || 11 < i) && (i = (i + 12) % 12); else {
                for (var l = 0; l < r; l++) n = this.moveMonth(n, e);
                i = n.getUTCMonth(), n.setUTCDate(a), s = function () {
                    return i != n.getUTCMonth()
                }
            }
            for (; s();) n.setUTCDate(--a), n.setUTCMonth(i);
            return n
        }, moveYear: function (t, e) {
            return this.moveMonth(t, 12 * e)
        }, dateWithinRange: function (t) {
            return t >= this.o.startDate && t <= this.o.endDate
        }, keydown: function (t) {
            if (this.picker.is(":not(:visible)")) 27 == t.keyCode && this.show(); else {
                var e, i, s, n, a = !1;
                switch (t.keyCode) {
                    case 27:
                        this.hide(), t.preventDefault();
                        break;
                    case 37:
                    case 39:
                        this.o.keyboardNavigation && (e = 37 == t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.date, e), s = this.moveYear(this.viewDate, e)) : t.shiftKey ? (i = this.moveMonth(this.date, e), s = this.moveMonth(this.viewDate, e)) : ((i = new Date(this.date)).setUTCDate(this.date.getUTCDate() + e), (s = new Date(this.viewDate)).setUTCDate(this.viewDate.getUTCDate() + e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = s, this.setValue(), this.update(), t.preventDefault(), a = !0));
                        break;
                    case 38:
                    case 40:
                        this.o.keyboardNavigation && (e = 38 == t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.date, e), s = this.moveYear(this.viewDate, e)) : t.shiftKey ? (i = this.moveMonth(this.date, e), s = this.moveMonth(this.viewDate, e)) : ((i = new Date(this.date)).setUTCDate(this.date.getUTCDate() + 7 * e), (s = new Date(this.viewDate)).setUTCDate(this.viewDate.getUTCDate() + 7 * e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = s, this.setValue(), this.update(), t.preventDefault(), a = !0));
                        break;
                    case 13:
                        this.hide(), t.preventDefault();
                        break;
                    case 9:
                        this.hide()
                }
                a && (this._trigger("changeDate"), this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change())
            }
        }, showMode: function (t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + w.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
        }
    };
    l.prototype = {
        updateDates: function () {
            this.dates = y.map(this.pickers, function (t) {
                return t.date
            }), this.updateRanges()
        }, updateRanges: function () {
            var i = y.map(this.dates, function (t) {
                return t.valueOf()
            });
            y.each(this.pickers, function (t, e) {
                e.setRange(i)
            })
        }, dateUpdated: function (t) {
            var e = y(t.target).data("datepicker").getUTCDate(), i = y.inArray(t.target, this.inputs),
                s = this.inputs.length;
            if (-1 != i) {
                if (e < this.dates[i]) for (; 0 <= i && e < this.dates[i];) this.pickers[i--].setUTCDate(e); else if (e > this.dates[i]) for (; i < s && e > this.dates[i];) this.pickers[i++].setUTCDate(e);
                this.updateDates()
            }
        }, remove: function () {
            y.map(this.pickers, function (t) {
                t.remove()
            }), delete this.element.data().datepicker
        }
    };
    var t = y.fn.datepicker, i = y.fn.datepicker = function (a) {
            var o, r = Array.apply(null, arguments);
            return r.shift(), this.each(function () {
                var t, e, i = y(this), s = i.data("datepicker"), n = "object" == typeof a && a;
                return s || (e = function (t, e) {
                    var i, s, n = y(t).data(), a = {}, o = new RegExp("^" + e.toLowerCase() + "([A-Z])"),
                        e = new RegExp("^" + e.toLowerCase());
                    for (s in n) e.test(s) && (i = s.replace(o, function (t, e) {
                        return e.toLowerCase()
                    }), a[i] = n[s]);
                    return a
                }(this, "date"), t = function (t) {
                    var i, s = {};
                    if (g[t] || (t = t.split("-")[0], g[t])) return i = g[t], y.each(u, function (t, e) {
                        e in i && (s[e] = i[e])
                    }), s
                }(y.extend({}, h, e, n).language), t = y.extend({}, h, t, e, n), i.is(".input-daterange") || t.inputs ? (e = {inputs: t.inputs || i.find("input").toArray()}, i.data("datepicker", s = new l(this, y.extend(t, e)))) : i.data("datepicker", s = new b(this, t))), ("string" != typeof a || "function" != typeof s[a] || void 0 === (o = s[a].apply(s, r))) && void 0
            }), void 0 !== o ? o : this
        }, h = y.fn.datepicker.defaults = {
            autoclose: !1,
            beforeShowDay: y.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            daysOfWeekDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "mm/dd/yyyy",
            keyboardNavigation: !0,
            language: "en",
            minViewMode: 0,
            rtl: !1,
            startDate: -1 / 0,
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0
        }, u = y.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"],
        g = (y.fn.datepicker.Constructor = b, y.fn.datepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                today: "Today",
                clear: "Clear"
            }
        }), w = {
            modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {clsName: "years", navFnc: "FullYear", navStep: 10}],
            isLeapYear: function (t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            },
            getDaysInMonth: function (t, e) {
                return [31, w.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
            parseFormat: function (t) {
                var e = t.replace(this.validParts, "\0").split("\0"), t = t.match(this.validParts);
                if (e && e.length && t && 0 !== t.length) return {separators: e, parts: t};
                throw new Error("Invalid date format.")
            },
            parseDate: function (t, e, i) {
                if (!(t instanceof Date)) {
                    if ("string" == typeof e && (e = w.parseFormat(e)), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(t)) {
                        var s, n = /([\-+]\d+)([dmwy])/, a = t.match(/([\-+]\d+)([dmwy])/g);
                        t = new Date;
                        for (var o = 0; o < a.length; o++) switch (h = n.exec(a[o]), s = parseInt(h[1]), h[2]) {
                            case"d":
                                t.setUTCDate(t.getUTCDate() + s);
                                break;
                            case"m":
                                t = b.prototype.moveMonth.call(b.prototype, t, s);
                                break;
                            case"w":
                                t.setUTCDate(t.getUTCDate() + 7 * s);
                                break;
                            case"y":
                                t = b.prototype.moveYear.call(b.prototype, t, s)
                        }
                        return v(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 0, 0, 0)
                    }
                    var r, l, h, a = t && t.match(this.nonpunctuation) || [], t = new Date, u = {},
                        d = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], c = {
                            yyyy: function (t, e) {
                                return t.setUTCFullYear(e)
                            }, yy: function (t, e) {
                                return t.setUTCFullYear(2e3 + e)
                            }, m: function (t, e) {
                                for (--e; e < 0;) e += 12;
                                for (t.setUTCMonth(e %= 12); t.getUTCMonth() != e;) t.setUTCDate(t.getUTCDate() - 1);
                                return t
                            }, d: function (t, e) {
                                return t.setUTCDate(e)
                            }
                        },
                        p = (c.M = c.MM = c.mm = c.m, c.dd = c.d, t = v(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0), e.parts.slice());
                    if (a.length != p.length && (p = y(p).filter(function (t, e) {
                        return -1 !== y.inArray(e, d)
                    }).toArray()), a.length == p.length) {
                        for (var o = 0, f = p.length; o < f; o++) {
                            if (r = parseInt(a[o], 10), h = p[o], isNaN(r)) switch (h) {
                                case"MM":
                                    l = y(g[i].months).filter(function () {
                                        var t = this.slice(0, a[o].length);
                                        return t == a[o].slice(0, t.length)
                                    }), r = y.inArray(l[0], g[i].months) + 1;
                                    break;
                                case"M":
                                    l = y(g[i].monthsShort).filter(function () {
                                        var t = this.slice(0, a[o].length);
                                        return t == a[o].slice(0, t.length)
                                    }), r = y.inArray(l[0], g[i].monthsShort) + 1
                            }
                            u[h] = r
                        }
                        for (var m, o = 0; o < d.length; o++) (m = d[o]) in u && !isNaN(u[m]) && c[m](t, u[m])
                    }
                }
                return t
            },
            formatDate: function (t, e, i) {
                "string" == typeof e && (e = w.parseFormat(e));
                var s = {
                    d: t.getUTCDate(),
                    D: g[i].daysShort[t.getUTCDay()],
                    DD: g[i].days[t.getUTCDay()],
                    m: t.getUTCMonth() + 1,
                    M: g[i].monthsShort[t.getUTCMonth()],
                    MM: g[i].months[t.getUTCMonth()],
                    yy: t.getUTCFullYear().toString().substring(2),
                    yyyy: t.getUTCFullYear()
                };
                s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m;
                for (var t = [], n = y.extend([], e.separators), a = 0, o = e.parts.length; a <= o; a++) n.length && t.push(n.shift()), t.push(s[e.parts[a]]);
                return t.join("")
            },
            headTemplate: '<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="datepicker-switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    w.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + w.headTemplate + "<tbody></tbody>" + w.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + w.headTemplate + w.contTemplate + w.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + w.headTemplate + w.contTemplate + w.footTemplate + "</table></div></div>", y.fn.datepicker.DPGlobal = w, y.fn.datepicker.noConflict = function () {
        return y.fn.datepicker = t, this
    }, y(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (t) {
        var e = y(this);
        e.data("datepicker") || (t.preventDefault(), i.call(e, "show"))
    }), y(function () {
        i.call(y('[data-provide="datepicker-inline"]'))
    })
}(window.jQuery), function (i) {
    "use strict";
    i.fn.bdatepicker = i.fn.datepicker.noConflict(), i.fn.datepicker || (i.fn.datepicker = i.fn.bdatepicker);

    function s(t) {
        this.init("date", t, s.defaults), this.initPicker(t, s.defaults)
    }

    i.fn.editableutils.inherit(s, i.fn.editabletypes.abstractinput), i.extend(s.prototype, {
        initPicker: function (t, e) {
            this.options.viewformat || (this.options.viewformat = this.options.format), t.datepicker = i.fn.editableutils.tryParseJson(t.datepicker, !0), this.options.datepicker = i.extend({}, e.datepicker, t.datepicker, {format: this.options.viewformat}), this.options.datepicker.language = this.options.datepicker.language || "en", this.dpg = i.fn.bdatepicker.DPGlobal, this.parsedFormat = this.dpg.parseFormat(this.options.format), this.parsedViewFormat = this.dpg.parseFormat(this.options.viewformat)
        }, render: function () {
            this.$input.bdatepicker(this.options.datepicker), this.options.clear && (this.$clear = i('<a href="#"></a>').html(this.options.clear).click(i.proxy(function (t) {
                t.preventDefault(), t.stopPropagation(), this.clear()
            }, this)), this.$tpl.parent().append(i('<div class="editable-clear">').append(this.$clear)))
        }, value2html: function (t, e) {
            t = t ? this.dpg.formatDate(t, this.parsedViewFormat, this.options.datepicker.language) : "";
            s.superclass.value2html.call(this, t, e)
        }, html2value: function (t) {
            return this.parseDate(t, this.parsedViewFormat)
        }, value2str: function (t) {
            return t ? this.dpg.formatDate(t, this.parsedFormat, this.options.datepicker.language) : ""
        }, str2value: function (t) {
            return this.parseDate(t, this.parsedFormat)
        }, value2submit: function (t) {
            return this.value2str(t)
        }, value2input: function (t) {
            this.$input.bdatepicker("update", t)
        }, input2value: function () {
            return this.$input.data("datepicker").date
        }, activate: function () {
        }, clear: function () {
            this.$input.data("datepicker").date = null, this.$input.find(".active").removeClass("active"), this.options.showbuttons || this.$input.closest("form").submit()
        }, autosubmit: function () {
            this.$input.on("mouseup", ".day", function (t) {
                var e;
                i(t.currentTarget).is(".old") || i(t.currentTarget).is(".new") || (e = i(this).closest("form"), setTimeout(function () {
                    e.submit()
                }, 200))
            })
        }, parseDate: function (t, e) {
            var i = null;
            return t && (i = this.dpg.parseDate(t, e, this.options.datepicker.language), "string" == typeof t && (t !== this.dpg.formatDate(i, e, this.options.datepicker.language) && (i = null))), i
        }
    }), s.defaults = i.extend({}, i.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="editable-date well"></div>',
        inputclass: null,
        format: "yyyy-mm-dd",
        viewformat: null,
        datepicker: {weekStart: 0, startView: 0, minViewMode: 0, autoclose: !1},
        clear: "&times; clear"
    }), i.fn.editabletypes.date = s
}(window.jQuery), function (t) {
    "use strict";

    function e(t) {
        this.init("datefield", t, e.defaults), this.initPicker(t, e.defaults)
    }

    t.fn.editableutils.inherit(e, t.fn.editabletypes.date), t.extend(e.prototype, {
        render: function () {
            this.$input = this.$tpl.find("input"), this.setClass(), this.setAttr("placeholder"), this.$input.bdatepicker(this.options.datepicker), this.$input.off("focus keydown"), this.$input.keyup(t.proxy(function () {
                this.$tpl.removeData("date"), this.$tpl.bdatepicker("update")
            }, this))
        }, value2input: function (t) {
            this.$input.val(t ? this.dpg.formatDate(t, this.parsedViewFormat, this.options.datepicker.language) : ""), this.$tpl.bdatepicker("update")
        }, input2value: function () {
            return this.html2value(this.$input.val())
        }, activate: function () {
            t.fn.editabletypes.text.prototype.activate.call(this)
        }, autosubmit: function () {
        }
    }), e.defaults = t.extend({}, t.fn.editabletypes.date.defaults, {
        tpl: '<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',
        inputclass: "input-small",
        datepicker: {weekStart: 0, startView: 0, minViewMode: 0, autoclose: !0}
    }), t.fn.editabletypes.datefield = e
}(window.jQuery), function (i) {
    "use strict";

    function s(t) {
        this.init("datetime", t, s.defaults), this.initPicker(t, s.defaults)
    }

    i.fn.editableutils.inherit(s, i.fn.editabletypes.abstractinput), i.extend(s.prototype, {
        initPicker: function (t, e) {
            this.options.viewformat || (this.options.viewformat = this.options.format), t.datetimepicker = i.fn.editableutils.tryParseJson(t.datetimepicker, !0), this.options.datetimepicker = i.extend({}, e.datetimepicker, t.datetimepicker, {format: this.options.viewformat}), this.options.datetimepicker.language = this.options.datetimepicker.language || "en", this.dpg = i.fn.datetimepicker.DPGlobal, this.parsedFormat = this.dpg.parseFormat(this.options.format, this.options.formatType), this.parsedViewFormat = this.dpg.parseFormat(this.options.viewformat, this.options.formatType)
        }, render: function () {
            this.$input.datetimepicker(this.options.datetimepicker), this.$input.on("changeMode", function (t) {
                var e = i(this).closest("form").parent();
                setTimeout(function () {
                    e.triggerHandler("resize")
                }, 0)
            }), this.options.clear && (this.$clear = i('<a href="#"></a>').html(this.options.clear).click(i.proxy(function (t) {
                t.preventDefault(), t.stopPropagation(), this.clear()
            }, this)), this.$tpl.parent().append(i('<div class="editable-clear">').append(this.$clear)))
        }, value2html: function (t, e) {
            t = t ? this.dpg.formatDate(this.toUTC(t), this.parsedViewFormat, this.options.datetimepicker.language, this.options.formatType) : "";
            return e ? void s.superclass.value2html.call(this, t, e) : t
        }, html2value: function (t) {
            t = this.parseDate(t, this.parsedViewFormat);
            return t ? this.fromUTC(t) : null
        }, value2str: function (t) {
            return t ? this.dpg.formatDate(this.toUTC(t), this.parsedFormat, this.options.datetimepicker.language, this.options.formatType) : ""
        }, str2value: function (t) {
            t = this.parseDate(t, this.parsedFormat);
            return t ? this.fromUTC(t) : null
        }, value2submit: function (t) {
            return this.value2str(t)
        }, value2input: function (t) {
            t && this.$input.data("datetimepicker").setDate(t)
        }, input2value: function () {
            var t = this.$input.data("datetimepicker");
            return t.date ? t.getDate() : null
        }, activate: function () {
        }, clear: function () {
            this.$input.data("datetimepicker").date = null, this.$input.find(".active").removeClass("active"), this.options.showbuttons || this.$input.closest("form").submit()
        }, autosubmit: function () {
            this.$input.on("mouseup", ".minute", function (t) {
                var e = i(this).closest("form");
                setTimeout(function () {
                    e.submit()
                }, 200)
            })
        }, toUTC: function (t) {
            return t && new Date(t.valueOf() - 6e4 * t.getTimezoneOffset())
        }, fromUTC: function (t) {
            return t && new Date(t.valueOf() + 6e4 * t.getTimezoneOffset())
        }, parseDate: function (t, e) {
            var i = null;
            return t && (i = this.dpg.parseDate(t, e, this.options.datetimepicker.language, this.options.formatType), "string" == typeof t && (t !== this.dpg.formatDate(i, e, this.options.datetimepicker.language, this.options.formatType) && (i = null))), i
        }
    }), s.defaults = i.extend({}, i.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="editable-date well"></div>',
        inputclass: null,
        format: "yyyy-mm-dd hh:ii",
        formatType: "standard",
        viewformat: null,
        datetimepicker: {todayHighlight: !1, autoclose: !1},
        clear: "&times; clear"
    }), i.fn.editabletypes.datetime = s
}(window.jQuery), function (t) {
    "use strict";

    function e(t) {
        this.init("datetimefield", t, e.defaults), this.initPicker(t, e.defaults)
    }

    t.fn.editableutils.inherit(e, t.fn.editabletypes.datetime), t.extend(e.prototype, {
        render: function () {
            this.$input = this.$tpl.find("input"), this.setClass(), this.setAttr("placeholder"), this.$tpl.datetimepicker(this.options.datetimepicker), this.$input.off("focus keydown"), this.$input.keyup(t.proxy(function () {
                this.$tpl.removeData("date"), this.$tpl.datetimepicker("update")
            }, this))
        }, value2input: function (t) {
            this.$input.val(this.value2html(t)), this.$tpl.datetimepicker("update")
        }, input2value: function () {
            return this.html2value(this.$input.val())
        }, activate: function () {
            t.fn.editabletypes.text.prototype.activate.call(this)
        }, autosubmit: function () {
        }
    }), e.defaults = t.extend({}, t.fn.editabletypes.datetime.defaults, {
        tpl: '<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',
        inputclass: "input-medium",
        datetimepicker: {todayHighlight: !1, autoclose: !0}
    }), t.fn.editabletypes.datetimefield = e
}(window.jQuery);
