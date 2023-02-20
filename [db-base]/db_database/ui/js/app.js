(function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 0)
})({
        0: function(t, e, i) {
            t.exports = i("56d7")
        },
        "0bc6": function(t, e, i) {},
        "13b3": function(t, e, i) {},
        "166a": function(t, e, i) {},
        "1b2c": function(t, e, i) {},
        "1bfb": function(t, e, i) {},
        "20f6": function(t, e, i) {},
        "25a8": function(t, e, i) {},
        "2b0e": function(t, e, i) {
            "use strict";
            (function(t) {
                /*!
                 * Vue.js v2.6.11
                 * (c) 2014-2019 Evan You
                 * Released under the MIT License.
                 */
                var i = Object.freeze({});

                function n(t) {
                    return void 0 === t || null === t
                }

                function r(t) {
                    return void 0 !== t && null !== t
                }

                function s(t) {
                    return !0 === t
                }

                function a(t) {
                    return !1 === t
                }

                function o(t) {
                    return "string" === typeof t || "number" === typeof t || "symbol" === typeof t || "boolean" === typeof t
                }

                function l(t) {
                    return null !== t && "object" === typeof t
                }
                var c = Object.prototype.toString;

                function h(t) {
                    return "[object Object]" === c.call(t)
                }

                function u(t) {
                    return "[object RegExp]" === c.call(t)
                }

                function d(t) {
                    var e = parseFloat(String(t));
                    return e >= 0 && Math.floor(e) === e && isFinite(t)
                }

                function p(t) {
                    return r(t) && "function" === typeof t.then && "function" === typeof t.catch
                }

                function f(t) {
                    return null == t ? "" : Array.isArray(t) || h(t) && t.toString === c ? JSON.stringify(t, null, 2) : String(t)
                }

                function g(t) {
                    var e = parseFloat(t);
                    return isNaN(e) ? t : e
                }

                function m(t, e) {
                    for (var i = Object.create(null), n = t.split(","), r = 0; r < n.length; r++) i[n[r]] = !0;
                    return e ? function(t) {
                        return i[t.toLowerCase()]
                    } : function(t) {
                        return i[t]
                    }
                }
                m("slot,component", !0);
                var v = m("key,ref,slot,slot-scope,is");

                function b(t, e) {
                    if (t.length) {
                        var i = t.indexOf(e);
                        if (i > -1) return t.splice(i, 1)
                    }
                }
                var y = Object.prototype.hasOwnProperty;

                function x(t, e) {
                    return y.call(t, e)
                }

                function _(t) {
                    var e = Object.create(null);
                    return function(i) {
                        var n = e[i];
                        return n || (e[i] = t(i))
                    }
                }
                var w = /-(\w)/g,
                    C = _((function(t) {
                        return t.replace(w, (function(t, e) {
                            return e ? e.toUpperCase() : ""
                        }))
                    })),
                    k = _((function(t) {
                        return t.charAt(0).toUpperCase() + t.slice(1)
                    })),
                    S = /\B([A-Z])/g,
                    $ = _((function(t) {
                        return t.replace(S, "-$1").toLowerCase()
                    }));

                function A(t, e) {
                    function i(i) {
                        var n = arguments.length;
                        return n ? n > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e)
                    }
                    return i._length = t.length, i
                }

                function I(t, e) {
                    return t.bind(e)
                }
                var M = Function.prototype.bind ? I : A;

                function O(t, e) {
                    e = e || 0;
                    var i = t.length - e,
                        n = new Array(i);
                    while (i--) n[i] = t[i + e];
                    return n
                }

                function T(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                }

                function L(t) {
                    for (var e = {}, i = 0; i < t.length; i++) t[i] && T(e, t[i]);
                    return e
                }

                function P(t, e, i) {}
                var D = function(t, e, i) {
                        return !1
                    },
                    B = function(t) {
                        return t
                    };

                function E(t, e) {
                    if (t === e) return !0;
                    var i = l(t),
                        n = l(e);
                    if (!i || !n) return !i && !n && String(t) === String(e);
                    try {
                        var r = Array.isArray(t),
                            s = Array.isArray(e);
                        if (r && s) return t.length === e.length && t.every((function(t, i) {
                            return E(t, e[i])
                        }));
                        if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
                        if (r || s) return !1;
                        var a = Object.keys(t),
                            o = Object.keys(e);
                        return a.length === o.length && a.every((function(i) {
                            return E(t[i], e[i])
                        }))
                    } catch (c) {
                        return !1
                    }
                }

                function F(t, e) {
                    for (var i = 0; i < t.length; i++)
                        if (E(t[i], e)) return i;
                    return -1
                }

                function V(t) {
                    var e = !1;
                    return function() {
                        e || (e = !0, t.apply(this, arguments))
                    }
                }
                var N = "data-server-rendered",
                    z = ["component", "directive", "filter"],
                    R = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
                    W = {
                        optionMergeStrategies: Object.create(null),
                        silent: !1,
                        productionTip: !1,
                        devtools: !1,
                        performance: !1,
                        errorHandler: null,
                        warnHandler: null,
                        ignoredElements: [],
                        keyCodes: Object.create(null),
                        isReservedTag: D,
                        isReservedAttr: D,
                        isUnknownElement: D,
                        getTagNamespace: P,
                        parsePlatformTagName: B,
                        mustUseProp: D,
                        async: !0,
                        _lifecycleHooks: R
                    },
                    H = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

                function j(t) {
                    var e = (t + "").charCodeAt(0);
                    return 36 === e || 95 === e
                }

                function q(t, e, i, n) {
                    Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !!n,
                        writable: !0,
                        configurable: !0
                    })
                }
                var U = new RegExp("[^" + H.source + ".$_\\d]");

                function Y(t) {
                    if (!U.test(t)) {
                        var e = t.split(".");
                        return function(t) {
                            for (var i = 0; i < e.length; i++) {
                                if (!t) return;
                                t = t[e[i]]
                            }
                            return t
                        }
                    }
                }
                var G, X = "__proto__" in {},
                    Z = "undefined" !== typeof window,
                    K = "undefined" !== typeof WXEnvironment && !!WXEnvironment.platform,
                    Q = K && WXEnvironment.platform.toLowerCase(),
                    J = Z && window.navigator.userAgent.toLowerCase(),
                    tt = J && /msie|trident/.test(J),
                    et = J && J.indexOf("msie 9.0") > 0,
                    it = J && J.indexOf("edge/") > 0,
                    nt = (J && J.indexOf("android"), J && /iphone|ipad|ipod|ios/.test(J) || "ios" === Q),
                    rt = (J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J), J && J.match(/firefox\/(\d+)/)),
                    st = {}.watch,
                    at = !1;
                if (Z) try {
                    var ot = {};
                    Object.defineProperty(ot, "passive", {
                        get: function() {
                            at = !0
                        }
                    }), window.addEventListener("test-passive", null, ot)
                } catch (wa) {}
                var lt = function() {
                        return void 0 === G && (G = !Z && !K && "undefined" !== typeof t && (t["process"] && "server" === t["process"].env.VUE_ENV)), G
                    },
                    ct = Z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

                function ht(t) {
                    return "function" === typeof t && /native code/.test(t.toString())
                }
                var ut, dt = "undefined" !== typeof Symbol && ht(Symbol) && "undefined" !== typeof Reflect && ht(Reflect.ownKeys);
                ut = "undefined" !== typeof Set && ht(Set) ? Set : function() {
                    function t() {
                        this.set = Object.create(null)
                    }
                    return t.prototype.has = function(t) {
                        return !0 === this.set[t]
                    }, t.prototype.add = function(t) {
                        this.set[t] = !0
                    }, t.prototype.clear = function() {
                        this.set = Object.create(null)
                    }, t
                }();
                var pt = P,
                    ft = 0,
                    gt = function() {
                        this.id = ft++, this.subs = []
                    };
                gt.prototype.addSub = function(t) {
                    this.subs.push(t)
                }, gt.prototype.removeSub = function(t) {
                    b(this.subs, t)
                }, gt.prototype.depend = function() {
                    gt.target && gt.target.addDep(this)
                }, gt.prototype.notify = function() {
                    var t = this.subs.slice();
                    for (var e = 0, i = t.length; e < i; e++) t[e].update()
                }, gt.target = null;
                var mt = [];

                function vt(t) {
                    mt.push(t), gt.target = t
                }

                function bt() {
                    mt.pop(), gt.target = mt[mt.length - 1]
                }
                var yt = function(t, e, i, n, r, s, a, o) {
                        this.tag = t, this.data = e, this.children = i, this.text = n, this.elm = r, this.ns = void 0, this.context = s, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
                    },
                    xt = {
                        child: {
                            configurable: !0
                        }
                    };
                xt.child.get = function() {
                    return this.componentInstance
                }, Object.defineProperties(yt.prototype, xt);
                var _t = function(t) {
                    void 0 === t && (t = "");
                    var e = new yt;
                    return e.text = t, e.isComment = !0, e
                };

                function wt(t) {
                    return new yt(void 0, void 0, void 0, String(t))
                }

                function Ct(t) {
                    var e = new yt(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
                    return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e
                }
                var kt = Array.prototype,
                    St = Object.create(kt),
                    $t = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
                $t.forEach((function(t) {
                    var e = kt[t];
                    q(St, t, (function() {
                        var i = [],
                            n = arguments.length;
                        while (n--) i[n] = arguments[n];
                        var r, s = e.apply(this, i),
                            a = this.__ob__;
                        switch (t) {
                            case "push":
                            case "unshift":
                                r = i;
                                break;
                            case "splice":
                                r = i.slice(2);
                                break
                        }
                        return r && a.observeArray(r), a.dep.notify(), s
                    }))
                }));
                var At = Object.getOwnPropertyNames(St),
                    It = !0;

                function Mt(t) {
                    It = t
                }
                var Ot = function(t) {
                    this.value = t, this.dep = new gt, this.vmCount = 0, q(t, "__ob__", this), Array.isArray(t) ? (X ? Tt(t, St) : Lt(t, St, At), this.observeArray(t)) : this.walk(t)
                };

                function Tt(t, e) {
                    t.__proto__ = e
                }

                function Lt(t, e, i) {
                    for (var n = 0, r = i.length; n < r; n++) {
                        var s = i[n];
                        q(t, s, e[s])
                    }
                }

                function Pt(t, e) {
                    var i;
                    if (l(t) && !(t instanceof yt)) return x(t, "__ob__") && t.__ob__ instanceof Ot ? i = t.__ob__ : It && !lt() && (Array.isArray(t) || h(t)) && Object.isExtensible(t) && !t._isVue && (i = new Ot(t)), e && i && i.vmCount++, i
                }

                function Dt(t, e, i, n, r) {
                    var s = new gt,
                        a = Object.getOwnPropertyDescriptor(t, e);
                    if (!a || !1 !== a.configurable) {
                        var o = a && a.get,
                            l = a && a.set;
                        o && !l || 2 !== arguments.length || (i = t[e]);
                        var c = !r && Pt(i);
                        Object.defineProperty(t, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                var e = o ? o.call(t) : i;
                                return gt.target && (s.depend(), c && (c.dep.depend(), Array.isArray(e) && Ft(e))), e
                            },
                            set: function(e) {
                                var n = o ? o.call(t) : i;
                                e === n || e !== e && n !== n || o && !l || (l ? l.call(t, e) : i = e, c = !r && Pt(e), s.notify())
                            }
                        })
                    }
                }

                function Bt(t, e, i) {
                    if (Array.isArray(t) && d(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, i), i;
                    if (e in t && !(e in Object.prototype)) return t[e] = i, i;
                    var n = t.__ob__;
                    return t._isVue || n && n.vmCount ? i : n ? (Dt(n.value, e, i), n.dep.notify(), i) : (t[e] = i, i)
                }

                function Et(t, e) {
                    if (Array.isArray(t) && d(e)) t.splice(e, 1);
                    else {
                        var i = t.__ob__;
                        t._isVue || i && i.vmCount || x(t, e) && (delete t[e], i && i.dep.notify())
                    }
                }

                function Ft(t) {
                    for (var e = void 0, i = 0, n = t.length; i < n; i++) e = t[i], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && Ft(e)
                }
                Ot.prototype.walk = function(t) {
                    for (var e = Object.keys(t), i = 0; i < e.length; i++) Dt(t, e[i])
                }, Ot.prototype.observeArray = function(t) {
                    for (var e = 0, i = t.length; e < i; e++) Pt(t[e])
                };
                var Vt = W.optionMergeStrategies;

                function Nt(t, e) {
                    if (!e) return t;
                    for (var i, n, r, s = dt ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < s.length; a++) i = s[a], "__ob__" !== i && (n = t[i], r = e[i], x(t, i) ? n !== r && h(n) && h(r) && Nt(n, r) : Bt(t, i, r));
                    return t
                }

                function zt(t, e, i) {
                    return i ? function() {
                        var n = "function" === typeof e ? e.call(i, i) : e,
                            r = "function" === typeof t ? t.call(i, i) : t;
                        return n ? Nt(n, r) : r
                    } : e ? t ? function() {
                        return Nt("function" === typeof e ? e.call(this, this) : e, "function" === typeof t ? t.call(this, this) : t)
                    } : e : t
                }

                function Rt(t, e) {
                    var i = e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
                    return i ? Wt(i) : i
                }

                function Wt(t) {
                    for (var e = [], i = 0; i < t.length; i++) - 1 === e.indexOf(t[i]) && e.push(t[i]);
                    return e
                }

                function Ht(t, e, i, n) {
                    var r = Object.create(t || null);
                    return e ? T(r, e) : r
                }
                Vt.data = function(t, e, i) {
                    return i ? zt(t, e, i) : e && "function" !== typeof e ? t : zt(t, e)
                }, R.forEach((function(t) {
                    Vt[t] = Rt
                })), z.forEach((function(t) {
                    Vt[t + "s"] = Ht
                })), Vt.watch = function(t, e, i, n) {
                    if (t === st && (t = void 0), e === st && (e = void 0), !e) return Object.create(t || null);
                    if (!t) return e;
                    var r = {};
                    for (var s in T(r, t), e) {
                        var a = r[s],
                            o = e[s];
                        a && !Array.isArray(a) && (a = [a]), r[s] = a ? a.concat(o) : Array.isArray(o) ? o : [o]
                    }
                    return r
                }, Vt.props = Vt.methods = Vt.inject = Vt.computed = function(t, e, i, n) {
                    if (!t) return e;
                    var r = Object.create(null);
                    return T(r, t), e && T(r, e), r
                }, Vt.provide = zt;
                var jt = function(t, e) {
                    return void 0 === e ? t : e
                };

                function qt(t, e) {
                    var i = t.props;
                    if (i) {
                        var n, r, s, a = {};
                        if (Array.isArray(i)) {
                            n = i.length;
                            while (n--) r = i[n], "string" === typeof r && (s = C(r), a[s] = {
                                type: null
                            })
                        } else if (h(i))
                            for (var o in i) r = i[o], s = C(o), a[s] = h(r) ? r : {
                                type: r
                            };
                        else 0;
                        t.props = a
                    }
                }

                function Ut(t, e) {
                    var i = t.inject;
                    if (i) {
                        var n = t.inject = {};
                        if (Array.isArray(i))
                            for (var r = 0; r < i.length; r++) n[i[r]] = {
                                from: i[r]
                            };
                        else if (h(i))
                            for (var s in i) {
                                var a = i[s];
                                n[s] = h(a) ? T({
                                    from: s
                                }, a) : {
                                    from: a
                                }
                            } else 0
                    }
                }

                function Yt(t) {
                    var e = t.directives;
                    if (e)
                        for (var i in e) {
                            var n = e[i];
                            "function" === typeof n && (e[i] = {
                                bind: n,
                                update: n
                            })
                        }
                }

                function Gt(t, e, i) {
                    if ("function" === typeof e && (e = e.options), qt(e, i), Ut(e, i), Yt(e), !e._base && (e.extends && (t = Gt(t, e.extends, i)), e.mixins))
                        for (var n = 0, r = e.mixins.length; n < r; n++) t = Gt(t, e.mixins[n], i);
                    var s, a = {};
                    for (s in t) o(s);
                    for (s in e) x(t, s) || o(s);

                    function o(n) {
                        var r = Vt[n] || jt;
                        a[n] = r(t[n], e[n], i, n)
                    }
                    return a
                }

                function Xt(t, e, i, n) {
                    if ("string" === typeof i) {
                        var r = t[e];
                        if (x(r, i)) return r[i];
                        var s = C(i);
                        if (x(r, s)) return r[s];
                        var a = k(s);
                        if (x(r, a)) return r[a];
                        var o = r[i] || r[s] || r[a];
                        return o
                    }
                }

                function Zt(t, e, i, n) {
                    var r = e[t],
                        s = !x(i, t),
                        a = i[t],
                        o = te(Boolean, r.type);
                    if (o > -1)
                        if (s && !x(r, "default")) a = !1;
                        else if ("" === a || a === $(t)) {
                        var l = te(String, r.type);
                        (l < 0 || o < l) && (a = !0)
                    }
                    if (void 0 === a) {
                        a = Kt(n, r, t);
                        var c = It;
                        Mt(!0), Pt(a), Mt(c)
                    }
                    return a
                }

                function Kt(t, e, i) {
                    if (x(e, "default")) {
                        var n = e.default;
                        return t && t.$options.propsData && void 0 === t.$options.propsData[i] && void 0 !== t._props[i] ? t._props[i] : "function" === typeof n && "Function" !== Qt(e.type) ? n.call(t) : n
                    }
                }

                function Qt(t) {
                    var e = t && t.toString().match(/^\s*function (\w+)/);
                    return e ? e[1] : ""
                }

                function Jt(t, e) {
                    return Qt(t) === Qt(e)
                }

                function te(t, e) {
                    if (!Array.isArray(e)) return Jt(e, t) ? 0 : -1;
                    for (var i = 0, n = e.length; i < n; i++)
                        if (Jt(e[i], t)) return i;
                    return -1
                }

                function ee(t, e, i) {
                    vt();
                    try {
                        if (e) {
                            var n = e;
                            while (n = n.$parent) {
                                var r = n.$options.errorCaptured;
                                if (r)
                                    for (var s = 0; s < r.length; s++) try {
                                        var a = !1 === r[s].call(n, t, e, i);
                                        if (a) return
                                    } catch (wa) {
                                        ne(wa, n, "errorCaptured hook")
                                    }
                            }
                        }
                        ne(t, e, i)
                    } finally {
                        bt()
                    }
                }

                function ie(t, e, i, n, r) {
                    var s;
                    try {
                        s = i ? t.apply(e, i) : t.call(e), s && !s._isVue && p(s) && !s._handled && (s.catch((function(t) {
                            return ee(t, n, r + " (Promise/async)")
                        })), s._handled = !0)
                    } catch (wa) {
                        ee(wa, n, r)
                    }
                    return s
                }

                function ne(t, e, i) {
                    if (W.errorHandler) try {
                        return W.errorHandler.call(null, t, e, i)
                    } catch (wa) {
                        wa !== t && re(wa, null, "config.errorHandler")
                    }
                    re(t, e, i)
                }

                function re(t, e, i) {
                    if (!Z && !K || "undefined" === typeof console) throw t;
                    console.error(t)
                }
                var se, ae = !1,
                    oe = [],
                    le = !1;

                function ce() {
                    le = !1;
                    var t = oe.slice(0);
                    oe.length = 0;
                    for (var e = 0; e < t.length; e++) t[e]()
                }
                if ("undefined" !== typeof Promise && ht(Promise)) {
                    var he = Promise.resolve();
                    se = function() {
                        he.then(ce), nt && setTimeout(P)
                    }, ae = !0
                } else if (tt || "undefined" === typeof MutationObserver || !ht(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) se = "undefined" !== typeof setImmediate && ht(setImmediate) ? function() {
                    setImmediate(ce)
                } : function() {
                    setTimeout(ce, 0)
                };
                else {
                    var ue = 1,
                        de = new MutationObserver(ce),
                        pe = document.createTextNode(String(ue));
                    de.observe(pe, {
                        characterData: !0
                    }), se = function() {
                        ue = (ue + 1) % 2, pe.data = String(ue)
                    }, ae = !0
                }

                function fe(t, e) {
                    var i;
                    if (oe.push((function() {
                            if (t) try {
                                t.call(e)
                            } catch (wa) {
                                ee(wa, e, "nextTick")
                            } else i && i(e)
                        })), le || (le = !0, se()), !t && "undefined" !== typeof Promise) return new Promise((function(t) {
                        i = t
                    }))
                }
                var ge = new ut;

                function me(t) {
                    ve(t, ge), ge.clear()
                }

                function ve(t, e) {
                    var i, n, r = Array.isArray(t);
                    if (!(!r && !l(t) || Object.isFrozen(t) || t instanceof yt)) {
                        if (t.__ob__) {
                            var s = t.__ob__.dep.id;
                            if (e.has(s)) return;
                            e.add(s)
                        }
                        if (r) {
                            i = t.length;
                            while (i--) ve(t[i], e)
                        } else {
                            n = Object.keys(t), i = n.length;
                            while (i--) ve(t[n[i]], e)
                        }
                    }
                }
                var be = _((function(t) {
                    var e = "&" === t.charAt(0);
                    t = e ? t.slice(1) : t;
                    var i = "~" === t.charAt(0);
                    t = i ? t.slice(1) : t;
                    var n = "!" === t.charAt(0);
                    return t = n ? t.slice(1) : t, {
                        name: t,
                        once: i,
                        capture: n,
                        passive: e
                    }
                }));

                function ye(t, e) {
                    function i() {
                        var t = arguments,
                            n = i.fns;
                        if (!Array.isArray(n)) return ie(n, null, arguments, e, "v-on handler");
                        for (var r = n.slice(), s = 0; s < r.length; s++) ie(r[s], null, t, e, "v-on handler")
                    }
                    return i.fns = t, i
                }

                function xe(t, e, i, r, a, o) {
                    var l, c, h, u;
                    for (l in t) c = t[l], h = e[l], u = be(l), n(c) || (n(h) ? (n(c.fns) && (c = t[l] = ye(c, o)), s(u.once) && (c = t[l] = a(u.name, c, u.capture)), i(u.name, c, u.capture, u.passive, u.params)) : c !== h && (h.fns = c, t[l] = h));
                    for (l in e) n(t[l]) && (u = be(l), r(u.name, e[l], u.capture))
                }

                function _e(t, e, i) {
                    var a;
                    t instanceof yt && (t = t.data.hook || (t.data.hook = {}));
                    var o = t[e];

                    function l() {
                        i.apply(this, arguments), b(a.fns, l)
                    }
                    n(o) ? a = ye([l]) : r(o.fns) && s(o.merged) ? (a = o, a.fns.push(l)) : a = ye([o, l]), a.merged = !0, t[e] = a
                }

                function we(t, e, i) {
                    var s = e.options.props;
                    if (!n(s)) {
                        var a = {},
                            o = t.attrs,
                            l = t.props;
                        if (r(o) || r(l))
                            for (var c in s) {
                                var h = $(c);
                                Ce(a, l, c, h, !0) || Ce(a, o, c, h, !1)
                            }
                        return a
                    }
                }

                function Ce(t, e, i, n, s) {
                    if (r(e)) {
                        if (x(e, i)) return t[i] = e[i], s || delete e[i], !0;
                        if (x(e, n)) return t[i] = e[n], s || delete e[n], !0
                    }
                    return !1
                }

                function ke(t) {
                    for (var e = 0; e < t.length; e++)
                        if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                    return t
                }

                function Se(t) {
                    return o(t) ? [wt(t)] : Array.isArray(t) ? Ae(t) : void 0
                }

                function $e(t) {
                    return r(t) && r(t.text) && a(t.isComment)
                }

                function Ae(t, e) {
                    var i, a, l, c, h = [];
                    for (i = 0; i < t.length; i++) a = t[i], n(a) || "boolean" === typeof a || (l = h.length - 1, c = h[l], Array.isArray(a) ? a.length > 0 && (a = Ae(a, (e || "") + "_" + i), $e(a[0]) && $e(c) && (h[l] = wt(c.text + a[0].text), a.shift()), h.push.apply(h, a)) : o(a) ? $e(c) ? h[l] = wt(c.text + a) : "" !== a && h.push(wt(a)) : $e(a) && $e(c) ? h[l] = wt(c.text + a.text) : (s(t._isVList) && r(a.tag) && n(a.key) && r(e) && (a.key = "__vlist" + e + "_" + i + "__"), h.push(a)));
                    return h
                }

                function Ie(t) {
                    var e = t.$options.provide;
                    e && (t._provided = "function" === typeof e ? e.call(t) : e)
                }

                function Me(t) {
                    var e = Oe(t.$options.inject, t);
                    e && (Mt(!1), Object.keys(e).forEach((function(i) {
                        Dt(t, i, e[i])
                    })), Mt(!0))
                }

                function Oe(t, e) {
                    if (t) {
                        for (var i = Object.create(null), n = dt ? Reflect.ownKeys(t) : Object.keys(t), r = 0; r < n.length; r++) {
                            var s = n[r];
                            if ("__ob__" !== s) {
                                var a = t[s].from,
                                    o = e;
                                while (o) {
                                    if (o._provided && x(o._provided, a)) {
                                        i[s] = o._provided[a];
                                        break
                                    }
                                    o = o.$parent
                                }
                                if (!o)
                                    if ("default" in t[s]) {
                                        var l = t[s].default;
                                        i[s] = "function" === typeof l ? l.call(e) : l
                                    } else 0
                            }
                        }
                        return i
                    }
                }

                function Te(t, e) {
                    if (!t || !t.length) return {};
                    for (var i = {}, n = 0, r = t.length; n < r; n++) {
                        var s = t[n],
                            a = s.data;
                        if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, s.context !== e && s.fnContext !== e || !a || null == a.slot)(i.default || (i.default = [])).push(s);
                        else {
                            var o = a.slot,
                                l = i[o] || (i[o] = []);
                            "template" === s.tag ? l.push.apply(l, s.children || []) : l.push(s)
                        }
                    }
                    for (var c in i) i[c].every(Le) && delete i[c];
                    return i
                }

                function Le(t) {
                    return t.isComment && !t.asyncFactory || " " === t.text
                }

                function Pe(t, e, n) {
                    var r, s = Object.keys(e).length > 0,
                        a = t ? !!t.$stable : !s,
                        o = t && t.$key;
                    if (t) {
                        if (t._normalized) return t._normalized;
                        if (a && n && n !== i && o === n.$key && !s && !n.$hasNormal) return n;
                        for (var l in r = {}, t) t[l] && "$" !== l[0] && (r[l] = De(e, l, t[l]))
                    } else r = {};
                    for (var c in e) c in r || (r[c] = Be(e, c));
                    return t && Object.isExtensible(t) && (t._normalized = r), q(r, "$stable", a), q(r, "$key", o), q(r, "$hasNormal", s), r
                }

                function De(t, e, i) {
                    var n = function() {
                        var t = arguments.length ? i.apply(null, arguments) : i({});
                        return t = t && "object" === typeof t && !Array.isArray(t) ? [t] : Se(t), t && (0 === t.length || 1 === t.length && t[0].isComment) ? void 0 : t
                    };
                    return i.proxy && Object.defineProperty(t, e, {
                        get: n,
                        enumerable: !0,
                        configurable: !0
                    }), n
                }

                function Be(t, e) {
                    return function() {
                        return t[e]
                    }
                }

                function Ee(t, e) {
                    var i, n, s, a, o;
                    if (Array.isArray(t) || "string" === typeof t)
                        for (i = new Array(t.length), n = 0, s = t.length; n < s; n++) i[n] = e(t[n], n);
                    else if ("number" === typeof t)
                        for (i = new Array(t), n = 0; n < t; n++) i[n] = e(n + 1, n);
                    else if (l(t))
                        if (dt && t[Symbol.iterator]) {
                            i = [];
                            var c = t[Symbol.iterator](),
                                h = c.next();
                            while (!h.done) i.push(e(h.value, i.length)), h = c.next()
                        } else
                            for (a = Object.keys(t), i = new Array(a.length), n = 0, s = a.length; n < s; n++) o = a[n], i[n] = e(t[o], o, n);
                    return r(i) || (i = []), i._isVList = !0, i
                }

                function Fe(t, e, i, n) {
                    var r, s = this.$scopedSlots[t];
                    s ? (i = i || {}, n && (i = T(T({}, n), i)), r = s(i) || e) : r = this.$slots[t] || e;
                    var a = i && i.slot;
                    return a ? this.$createElement("template", {
                        slot: a
                    }, r) : r
                }

                function Ve(t) {
                    return Xt(this.$options, "filters", t, !0) || B
                }

                function Ne(t, e) {
                    return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
                }

                function ze(t, e, i, n, r) {
                    var s = W.keyCodes[e] || i;
                    return r && n && !W.keyCodes[e] ? Ne(r, n) : s ? Ne(s, t) : n ? $(n) !== e : void 0
                }

                function Re(t, e, i, n, r) {
                    if (i)
                        if (l(i)) {
                            var s;
                            Array.isArray(i) && (i = L(i));
                            var a = function(a) {
                                if ("class" === a || "style" === a || v(a)) s = t;
                                else {
                                    var o = t.attrs && t.attrs.type;
                                    s = n || W.mustUseProp(e, o, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                                }
                                var l = C(a),
                                    c = $(a);
                                if (!(l in s) && !(c in s) && (s[a] = i[a], r)) {
                                    var h = t.on || (t.on = {});
                                    h["update:" + a] = function(t) {
                                        i[a] = t
                                    }
                                }
                            };
                            for (var o in i) a(o)
                        } else;
                    return t
                }

                function We(t, e) {
                    var i = this._staticTrees || (this._staticTrees = []),
                        n = i[t];
                    return n && !e || (n = i[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), je(n, "__static__" + t, !1)), n
                }

                function He(t, e, i) {
                    return je(t, "__once__" + e + (i ? "_" + i : ""), !0), t
                }

                function je(t, e, i) {
                    if (Array.isArray(t))
                        for (var n = 0; n < t.length; n++) t[n] && "string" !== typeof t[n] && qe(t[n], e + "_" + n, i);
                    else qe(t, e, i)
                }

                function qe(t, e, i) {
                    t.isStatic = !0, t.key = e, t.isOnce = i
                }

                function Ue(t, e) {
                    if (e)
                        if (h(e)) {
                            var i = t.on = t.on ? T({}, t.on) : {};
                            for (var n in e) {
                                var r = i[n],
                                    s = e[n];
                                i[n] = r ? [].concat(r, s) : s
                            }
                        } else;
                    return t
                }

                function Ye(t, e, i, n) {
                    e = e || {
                        $stable: !i
                    };
                    for (var r = 0; r < t.length; r++) {
                        var s = t[r];
                        Array.isArray(s) ? Ye(s, e, i) : s && (s.proxy && (s.fn.proxy = !0), e[s.key] = s.fn)
                    }
                    return n && (e.$key = n), e
                }

                function Ge(t, e) {
                    for (var i = 0; i < e.length; i += 2) {
                        var n = e[i];
                        "string" === typeof n && n && (t[e[i]] = e[i + 1])
                    }
                    return t
                }

                function Xe(t, e) {
                    return "string" === typeof t ? e + t : t
                }

                function Ze(t) {
                    t._o = He, t._n = g, t._s = f, t._l = Ee, t._t = Fe, t._q = E, t._i = F, t._m = We, t._f = Ve, t._k = ze, t._b = Re, t._v = wt, t._e = _t, t._u = Ye, t._g = Ue, t._d = Ge, t._p = Xe
                }

                function Ke(t, e, n, r, a) {
                    var o, l = this,
                        c = a.options;
                    x(r, "_uid") ? (o = Object.create(r), o._original = r) : (o = r, r = r._original);
                    var h = s(c._compiled),
                        u = !h;
                    this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || i, this.injections = Oe(c.inject, r), this.slots = function() {
                        return l.$slots || Pe(t.scopedSlots, l.$slots = Te(n, r)), l.$slots
                    }, Object.defineProperty(this, "scopedSlots", {
                        enumerable: !0,
                        get: function() {
                            return Pe(t.scopedSlots, this.slots())
                        }
                    }), h && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = Pe(t.scopedSlots, this.$slots)), c._scopeId ? this._c = function(t, e, i, n) {
                        var s = hi(o, t, e, i, n, u);
                        return s && !Array.isArray(s) && (s.fnScopeId = c._scopeId, s.fnContext = r), s
                    } : this._c = function(t, e, i, n) {
                        return hi(o, t, e, i, n, u)
                    }
                }

                function Qe(t, e, n, s, a) {
                    var o = t.options,
                        l = {},
                        c = o.props;
                    if (r(c))
                        for (var h in c) l[h] = Zt(h, c, e || i);
                    else r(n.attrs) && ti(l, n.attrs), r(n.props) && ti(l, n.props);
                    var u = new Ke(n, l, a, s, t),
                        d = o.render.call(null, u._c, u);
                    if (d instanceof yt) return Je(d, n, u.parent, o, u);
                    if (Array.isArray(d)) {
                        for (var p = Se(d) || [], f = new Array(p.length), g = 0; g < p.length; g++) f[g] = Je(p[g], n, u.parent, o, u);
                        return f
                    }
                }

                function Je(t, e, i, n, r) {
                    var s = Ct(t);
                    return s.fnContext = i, s.fnOptions = n, e.slot && ((s.data || (s.data = {})).slot = e.slot), s
                }

                function ti(t, e) {
                    for (var i in e) t[C(i)] = e[i]
                }
                Ze(Ke.prototype);
                var ei = {
                        init: function(t, e) {
                            if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                                var i = t;
                                ei.prepatch(i, i)
                            } else {
                                var n = t.componentInstance = ri(t, Mi);
                                n.$mount(e ? t.elm : void 0, e)
                            }
                        },
                        prepatch: function(t, e) {
                            var i = e.componentOptions,
                                n = e.componentInstance = t.componentInstance;
                            Di(n, i.propsData, i.listeners, e, i.children)
                        },
                        insert: function(t) {
                            var e = t.context,
                                i = t.componentInstance;
                            i._isMounted || (i._isMounted = !0, Vi(i, "mounted")), t.data.keepAlive && (e._isMounted ? Ki(i) : Ei(i, !0))
                        },
                        destroy: function(t) {
                            var e = t.componentInstance;
                            e._isDestroyed || (t.data.keepAlive ? Fi(e, !0) : e.$destroy())
                        }
                    },
                    ii = Object.keys(ei);

                function ni(t, e, i, a, o) {
                    if (!n(t)) {
                        var c = i.$options._base;
                        if (l(t) && (t = c.extend(t)), "function" === typeof t) {
                            var h;
                            if (n(t.cid) && (h = t, t = xi(h, c), void 0 === t)) return yi(h, e, i, a, o);
                            e = e || {}, _n(t), r(e.model) && oi(t.options, e);
                            var u = we(e, t, o);
                            if (s(t.options.functional)) return Qe(t, u, e, i, a);
                            var d = e.on;
                            if (e.on = e.nativeOn, s(t.options.abstract)) {
                                var p = e.slot;
                                e = {}, p && (e.slot = p)
                            }
                            si(e);
                            var f = t.options.name || o,
                                g = new yt("vue-component-" + t.cid + (f ? "-" + f : ""), e, void 0, void 0, void 0, i, {
                                    Ctor: t,
                                    propsData: u,
                                    listeners: d,
                                    tag: o,
                                    children: a
                                }, h);
                            return g
                        }
                    }
                }

                function ri(t, e) {
                    var i = {
                            _isComponent: !0,
                            _parentVnode: t,
                            parent: e
                        },
                        n = t.data.inlineTemplate;
                    return r(n) && (i.render = n.render, i.staticRenderFns = n.staticRenderFns), new t.componentOptions.Ctor(i)
                }

                function si(t) {
                    for (var e = t.hook || (t.hook = {}), i = 0; i < ii.length; i++) {
                        var n = ii[i],
                            r = e[n],
                            s = ei[n];
                        r === s || r && r._merged || (e[n] = r ? ai(s, r) : s)
                    }
                }

                function ai(t, e) {
                    var i = function(i, n) {
                        t(i, n), e(i, n)
                    };
                    return i._merged = !0, i
                }

                function oi(t, e) {
                    var i = t.model && t.model.prop || "value",
                        n = t.model && t.model.event || "input";
                    (e.attrs || (e.attrs = {}))[i] = e.model.value;
                    var s = e.on || (e.on = {}),
                        a = s[n],
                        o = e.model.callback;
                    r(a) ? (Array.isArray(a) ? -1 === a.indexOf(o) : a !== o) && (s[n] = [o].concat(a)) : s[n] = o
                }
                var li = 1,
                    ci = 2;

                function hi(t, e, i, n, r, a) {
                    return (Array.isArray(i) || o(i)) && (r = n, n = i, i = void 0), s(a) && (r = ci), ui(t, e, i, n, r)
                }

                function ui(t, e, i, n, s) {
                    if (r(i) && r(i.__ob__)) return _t();
                    if (r(i) && r(i.is) && (e = i.is), !e) return _t();
                    var a, o, l;
                    (Array.isArray(n) && "function" === typeof n[0] && (i = i || {}, i.scopedSlots = {
                        default: n[0]
                    }, n.length = 0), s === ci ? n = Se(n) : s === li && (n = ke(n)), "string" === typeof e) ? (o = t.$vnode && t.$vnode.ns || W.getTagNamespace(e), a = W.isReservedTag(e) ? new yt(W.parsePlatformTagName(e), i, n, void 0, void 0, t) : i && i.pre || !r(l = Xt(t.$options, "components", e)) ? new yt(e, i, n, void 0, void 0, t) : ni(l, i, t, n, e)) : a = ni(e, i, t, n);
                    return Array.isArray(a) ? a : r(a) ? (r(o) && di(a, o), r(i) && pi(i), a) : _t()
                }

                function di(t, e, i) {
                    if (t.ns = e, "foreignObject" === t.tag && (e = void 0, i = !0), r(t.children))
                        for (var a = 0, o = t.children.length; a < o; a++) {
                            var l = t.children[a];
                            r(l.tag) && (n(l.ns) || s(i) && "svg" !== l.tag) && di(l, e, i)
                        }
                }

                function pi(t) {
                    l(t.style) && me(t.style), l(t.class) && me(t.class)
                }

                function fi(t) {
                    t._vnode = null, t._staticTrees = null;
                    var e = t.$options,
                        n = t.$vnode = e._parentVnode,
                        r = n && n.context;
                    t.$slots = Te(e._renderChildren, r), t.$scopedSlots = i, t._c = function(e, i, n, r) {
                        return hi(t, e, i, n, r, !1)
                    }, t.$createElement = function(e, i, n, r) {
                        return hi(t, e, i, n, r, !0)
                    };
                    var s = n && n.data;
                    Dt(t, "$attrs", s && s.attrs || i, null, !0), Dt(t, "$listeners", e._parentListeners || i, null, !0)
                }
                var gi, mi = null;

                function vi(t) {
                    Ze(t.prototype), t.prototype.$nextTick = function(t) {
                        return fe(t, this)
                    }, t.prototype._render = function() {
                        var t, e = this,
                            i = e.$options,
                            n = i.render,
                            r = i._parentVnode;
                        r && (e.$scopedSlots = Pe(r.data.scopedSlots, e.$slots, e.$scopedSlots)), e.$vnode = r;
                        try {
                            mi = e, t = n.call(e._renderProxy, e.$createElement)
                        } catch (wa) {
                            ee(wa, e, "render"), t = e._vnode
                        } finally {
                            mi = null
                        }
                        return Array.isArray(t) && 1 === t.length && (t = t[0]), t instanceof yt || (t = _t()), t.parent = r, t
                    }
                }

                function bi(t, e) {
                    return (t.__esModule || dt && "Module" === t[Symbol.toStringTag]) && (t = t.default), l(t) ? e.extend(t) : t
                }

                function yi(t, e, i, n, r) {
                    var s = _t();
                    return s.asyncFactory = t, s.asyncMeta = {
                        data: e,
                        context: i,
                        children: n,
                        tag: r
                    }, s
                }

                function xi(t, e) {
                    if (s(t.error) && r(t.errorComp)) return t.errorComp;
                    if (r(t.resolved)) return t.resolved;
                    var i = mi;
                    if (i && r(t.owners) && -1 === t.owners.indexOf(i) && t.owners.push(i), s(t.loading) && r(t.loadingComp)) return t.loadingComp;
                    if (i && !r(t.owners)) {
                        var a = t.owners = [i],
                            o = !0,
                            c = null,
                            h = null;
                        i.$on("hook:destroyed", (function() {
                            return b(a, i)
                        }));
                        var u = function(t) {
                                for (var e = 0, i = a.length; e < i; e++) a[e].$forceUpdate();
                                t && (a.length = 0, null !== c && (clearTimeout(c), c = null), null !== h && (clearTimeout(h), h = null))
                            },
                            d = V((function(i) {
                                t.resolved = bi(i, e), o ? a.length = 0 : u(!0)
                            })),
                            f = V((function(e) {
                                r(t.errorComp) && (t.error = !0, u(!0))
                            })),
                            g = t(d, f);
                        return l(g) && (p(g) ? n(t.resolved) && g.then(d, f) : p(g.component) && (g.component.then(d, f), r(g.error) && (t.errorComp = bi(g.error, e)), r(g.loading) && (t.loadingComp = bi(g.loading, e), 0 === g.delay ? t.loading = !0 : c = setTimeout((function() {
                            c = null, n(t.resolved) && n(t.error) && (t.loading = !0, u(!1))
                        }), g.delay || 200)), r(g.timeout) && (h = setTimeout((function() {
                            h = null, n(t.resolved) && f(null)
                        }), g.timeout)))), o = !1, t.loading ? t.loadingComp : t.resolved
                    }
                }

                function _i(t) {
                    return t.isComment && t.asyncFactory
                }

                function wi(t) {
                    if (Array.isArray(t))
                        for (var e = 0; e < t.length; e++) {
                            var i = t[e];
                            if (r(i) && (r(i.componentOptions) || _i(i))) return i
                        }
                }

                function Ci(t) {
                    t._events = Object.create(null), t._hasHookEvent = !1;
                    var e = t.$options._parentListeners;
                    e && Ai(t, e)
                }

                function ki(t, e) {
                    gi.$on(t, e)
                }

                function Si(t, e) {
                    gi.$off(t, e)
                }

                function $i(t, e) {
                    var i = gi;
                    return function n() {
                        var r = e.apply(null, arguments);
                        null !== r && i.$off(t, n)
                    }
                }

                function Ai(t, e, i) {
                    gi = t, xe(e, i || {}, ki, Si, $i, t), gi = void 0
                }

                function Ii(t) {
                    var e = /^hook:/;
                    t.prototype.$on = function(t, i) {
                        var n = this;
                        if (Array.isArray(t))
                            for (var r = 0, s = t.length; r < s; r++) n.$on(t[r], i);
                        else(n._events[t] || (n._events[t] = [])).push(i), e.test(t) && (n._hasHookEvent = !0);
                        return n
                    }, t.prototype.$once = function(t, e) {
                        var i = this;

                        function n() {
                            i.$off(t, n), e.apply(i, arguments)
                        }
                        return n.fn = e, i.$on(t, n), i
                    }, t.prototype.$off = function(t, e) {
                        var i = this;
                        if (!arguments.length) return i._events = Object.create(null), i;
                        if (Array.isArray(t)) {
                            for (var n = 0, r = t.length; n < r; n++) i.$off(t[n], e);
                            return i
                        }
                        var s, a = i._events[t];
                        if (!a) return i;
                        if (!e) return i._events[t] = null, i;
                        var o = a.length;
                        while (o--)
                            if (s = a[o], s === e || s.fn === e) {
                                a.splice(o, 1);
                                break
                            }
                        return i
                    }, t.prototype.$emit = function(t) {
                        var e = this,
                            i = e._events[t];
                        if (i) {
                            i = i.length > 1 ? O(i) : i;
                            for (var n = O(arguments, 1), r = 'event handler for "' + t + '"', s = 0, a = i.length; s < a; s++) ie(i[s], e, n, e, r)
                        }
                        return e
                    }
                }
                var Mi = null;

                function Oi(t) {
                    var e = Mi;
                    return Mi = t,
                        function() {
                            Mi = e
                        }
                }

                function Ti(t) {
                    var e = t.$options,
                        i = e.parent;
                    if (i && !e.abstract) {
                        while (i.$options.abstract && i.$parent) i = i.$parent;
                        i.$children.push(t)
                    }
                    t.$parent = i, t.$root = i ? i.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
                }

                function Li(t) {
                    t.prototype._update = function(t, e) {
                        var i = this,
                            n = i.$el,
                            r = i._vnode,
                            s = Oi(i);
                        i._vnode = t, i.$el = r ? i.__patch__(r, t) : i.__patch__(i.$el, t, e, !1), s(), n && (n.__vue__ = null), i.$el && (i.$el.__vue__ = i), i.$vnode && i.$parent && i.$vnode === i.$parent._vnode && (i.$parent.$el = i.$el)
                    }, t.prototype.$forceUpdate = function() {
                        var t = this;
                        t._watcher && t._watcher.update()
                    }, t.prototype.$destroy = function() {
                        var t = this;
                        if (!t._isBeingDestroyed) {
                            Vi(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                            var e = t.$parent;
                            !e || e._isBeingDestroyed || t.$options.abstract || b(e.$children, t), t._watcher && t._watcher.teardown();
                            var i = t._watchers.length;
                            while (i--) t._watchers[i].teardown();
                            t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Vi(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null)
                        }
                    }
                }

                function Pi(t, e, i) {
                    var n;
                    return t.$el = e, t.$options.render || (t.$options.render = _t), Vi(t, "beforeMount"), n = function() {
                        t._update(t._render(), i)
                    }, new en(t, n, P, {
                        before: function() {
                            t._isMounted && !t._isDestroyed && Vi(t, "beforeUpdate")
                        }
                    }, !0), i = !1, null == t.$vnode && (t._isMounted = !0, Vi(t, "mounted")), t
                }

                function Di(t, e, n, r, s) {
                    var a = r.data.scopedSlots,
                        o = t.$scopedSlots,
                        l = !!(a && !a.$stable || o !== i && !o.$stable || a && t.$scopedSlots.$key !== a.$key),
                        c = !!(s || t.$options._renderChildren || l);
                    if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = s, t.$attrs = r.data.attrs || i, t.$listeners = n || i, e && t.$options.props) {
                        Mt(!1);
                        for (var h = t._props, u = t.$options._propKeys || [], d = 0; d < u.length; d++) {
                            var p = u[d],
                                f = t.$options.props;
                            h[p] = Zt(p, f, e, t)
                        }
                        Mt(!0), t.$options.propsData = e
                    }
                    n = n || i;
                    var g = t.$options._parentListeners;
                    t.$options._parentListeners = n, Ai(t, n, g), c && (t.$slots = Te(s, r.context), t.$forceUpdate())
                }

                function Bi(t) {
                    while (t && (t = t.$parent))
                        if (t._inactive) return !0;
                    return !1
                }

                function Ei(t, e) {
                    if (e) {
                        if (t._directInactive = !1, Bi(t)) return
                    } else if (t._directInactive) return;
                    if (t._inactive || null === t._inactive) {
                        t._inactive = !1;
                        for (var i = 0; i < t.$children.length; i++) Ei(t.$children[i]);
                        Vi(t, "activated")
                    }
                }

                function Fi(t, e) {
                    if ((!e || (t._directInactive = !0, !Bi(t))) && !t._inactive) {
                        t._inactive = !0;
                        for (var i = 0; i < t.$children.length; i++) Fi(t.$children[i]);
                        Vi(t, "deactivated")
                    }
                }

                function Vi(t, e) {
                    vt();
                    var i = t.$options[e],
                        n = e + " hook";
                    if (i)
                        for (var r = 0, s = i.length; r < s; r++) ie(i[r], t, null, t, n);
                    t._hasHookEvent && t.$emit("hook:" + e), bt()
                }
                var Ni = [],
                    zi = [],
                    Ri = {},
                    Wi = !1,
                    Hi = !1,
                    ji = 0;

                function qi() {
                    ji = Ni.length = zi.length = 0, Ri = {}, Wi = Hi = !1
                }
                var Ui = 0,
                    Yi = Date.now;
                if (Z && !tt) {
                    var Gi = window.performance;
                    Gi && "function" === typeof Gi.now && Yi() > document.createEvent("Event").timeStamp && (Yi = function() {
                        return Gi.now()
                    })
                }

                function Xi() {
                    var t, e;
                    for (Ui = Yi(), Hi = !0, Ni.sort((function(t, e) {
                            return t.id - e.id
                        })), ji = 0; ji < Ni.length; ji++) t = Ni[ji], t.before && t.before(), e = t.id, Ri[e] = null, t.run();
                    var i = zi.slice(),
                        n = Ni.slice();
                    qi(), Qi(i), Zi(n), ct && W.devtools && ct.emit("flush")
                }

                function Zi(t) {
                    var e = t.length;
                    while (e--) {
                        var i = t[e],
                            n = i.vm;
                        n._watcher === i && n._isMounted && !n._isDestroyed && Vi(n, "updated")
                    }
                }

                function Ki(t) {
                    t._inactive = !1, zi.push(t)
                }

                function Qi(t) {
                    for (var e = 0; e < t.length; e++) t[e]._inactive = !0, Ei(t[e], !0)
                }

                function Ji(t) {
                    var e = t.id;
                    if (null == Ri[e]) {
                        if (Ri[e] = !0, Hi) {
                            var i = Ni.length - 1;
                            while (i > ji && Ni[i].id > t.id) i--;
                            Ni.splice(i + 1, 0, t)
                        } else Ni.push(t);
                        Wi || (Wi = !0, fe(Xi))
                    }
                }
                var tn = 0,
                    en = function(t, e, i, n, r) {
                        this.vm = t, r && (t._watcher = this), t._watchers.push(this), n ? (this.deep = !!n.deep, this.user = !!n.user, this.lazy = !!n.lazy, this.sync = !!n.sync, this.before = n.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = i, this.id = ++tn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ut, this.newDepIds = new ut, this.expression = "", "function" === typeof e ? this.getter = e : (this.getter = Y(e), this.getter || (this.getter = P)), this.value = this.lazy ? void 0 : this.get()
                    };
                en.prototype.get = function() {
                    var t;
                    vt(this);
                    var e = this.vm;
                    try {
                        t = this.getter.call(e, e)
                    } catch (wa) {
                        if (!this.user) throw wa;
                        ee(wa, e, 'getter for watcher "' + this.expression + '"')
                    } finally {
                        this.deep && me(t), bt(), this.cleanupDeps()
                    }
                    return t
                }, en.prototype.addDep = function(t) {
                    var e = t.id;
                    this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
                }, en.prototype.cleanupDeps = function() {
                    var t = this.deps.length;
                    while (t--) {
                        var e = this.deps[t];
                        this.newDepIds.has(e.id) || e.removeSub(this)
                    }
                    var i = this.depIds;
                    this.depIds = this.newDepIds, this.newDepIds = i, this.newDepIds.clear(), i = this.deps, this.deps = this.newDeps, this.newDeps = i, this.newDeps.length = 0
                }, en.prototype.update = function() {
                    this.lazy ? this.dirty = !0 : this.sync ? this.run() : Ji(this)
                }, en.prototype.run = function() {
                    if (this.active) {
                        var t = this.get();
                        if (t !== this.value || l(t) || this.deep) {
                            var e = this.value;
                            if (this.value = t, this.user) try {
                                this.cb.call(this.vm, t, e)
                            } catch (wa) {
                                ee(wa, this.vm, 'callback for watcher "' + this.expression + '"')
                            } else this.cb.call(this.vm, t, e)
                        }
                    }
                }, en.prototype.evaluate = function() {
                    this.value = this.get(), this.dirty = !1
                }, en.prototype.depend = function() {
                    var t = this.deps.length;
                    while (t--) this.deps[t].depend()
                }, en.prototype.teardown = function() {
                    if (this.active) {
                        this.vm._isBeingDestroyed || b(this.vm._watchers, this);
                        var t = this.deps.length;
                        while (t--) this.deps[t].removeSub(this);
                        this.active = !1
                    }
                };
                var nn = {
                    enumerable: !0,
                    configurable: !0,
                    get: P,
                    set: P
                };

                function rn(t, e, i) {
                    nn.get = function() {
                        return this[e][i]
                    }, nn.set = function(t) {
                        this[e][i] = t
                    }, Object.defineProperty(t, i, nn)
                }

                function sn(t) {
                    t._watchers = [];
                    var e = t.$options;
                    e.props && an(t, e.props), e.methods && fn(t, e.methods), e.data ? on(t) : Pt(t._data = {}, !0), e.computed && hn(t, e.computed), e.watch && e.watch !== st && gn(t, e.watch)
                }

                function an(t, e) {
                    var i = t.$options.propsData || {},
                        n = t._props = {},
                        r = t.$options._propKeys = [],
                        s = !t.$parent;
                    s || Mt(!1);
                    var a = function(s) {
                        r.push(s);
                        var a = Zt(s, e, i, t);
                        Dt(n, s, a), s in t || rn(t, "_props", s)
                    };
                    for (var o in e) a(o);
                    Mt(!0)
                }

                function on(t) {
                    var e = t.$options.data;
                    e = t._data = "function" === typeof e ? ln(e, t) : e || {}, h(e) || (e = {});
                    var i = Object.keys(e),
                        n = t.$options.props,
                        r = (t.$options.methods, i.length);
                    while (r--) {
                        var s = i[r];
                        0, n && x(n, s) || j(s) || rn(t, "_data", s)
                    }
                    Pt(e, !0)
                }

                function ln(t, e) {
                    vt();
                    try {
                        return t.call(e, e)
                    } catch (wa) {
                        return ee(wa, e, "data()"), {}
                    } finally {
                        bt()
                    }
                }
                var cn = {
                    lazy: !0
                };

                function hn(t, e) {
                    var i = t._computedWatchers = Object.create(null),
                        n = lt();
                    for (var r in e) {
                        var s = e[r],
                            a = "function" === typeof s ? s : s.get;
                        0, n || (i[r] = new en(t, a || P, P, cn)), r in t || un(t, r, s)
                    }
                }

                function un(t, e, i) {
                    var n = !lt();
                    "function" === typeof i ? (nn.get = n ? dn(e) : pn(i), nn.set = P) : (nn.get = i.get ? n && !1 !== i.cache ? dn(e) : pn(i.get) : P, nn.set = i.set || P), Object.defineProperty(t, e, nn)
                }

                function dn(t) {
                    return function() {
                        var e = this._computedWatchers && this._computedWatchers[t];
                        if (e) return e.dirty && e.evaluate(), gt.target && e.depend(), e.value
                    }
                }

                function pn(t) {
                    return function() {
                        return t.call(this, this)
                    }
                }

                function fn(t, e) {
                    t.$options.props;
                    for (var i in e) t[i] = "function" !== typeof e[i] ? P : M(e[i], t)
                }

                function gn(t, e) {
                    for (var i in e) {
                        var n = e[i];
                        if (Array.isArray(n))
                            for (var r = 0; r < n.length; r++) mn(t, i, n[r]);
                        else mn(t, i, n)
                    }
                }

                function mn(t, e, i, n) {
                    return h(i) && (n = i, i = i.handler), "string" === typeof i && (i = t[i]), t.$watch(e, i, n)
                }

                function vn(t) {
                    var e = {
                            get: function() {
                                return this._data
                            }
                        },
                        i = {
                            get: function() {
                                return this._props
                            }
                        };
                    Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", i), t.prototype.$set = Bt, t.prototype.$delete = Et, t.prototype.$watch = function(t, e, i) {
                        var n = this;
                        if (h(e)) return mn(n, t, e, i);
                        i = i || {}, i.user = !0;
                        var r = new en(n, t, e, i);
                        if (i.immediate) try {
                            e.call(n, r.value)
                        } catch (s) {
                            ee(s, n, 'callback for immediate watcher "' + r.expression + '"')
                        }
                        return function() {
                            r.teardown()
                        }
                    }
                }
                var bn = 0;

                function yn(t) {
                    t.prototype._init = function(t) {
                        var e = this;
                        e._uid = bn++, e._isVue = !0, t && t._isComponent ? xn(e, t) : e.$options = Gt(_n(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, Ti(e), Ci(e), fi(e), Vi(e, "beforeCreate"), Me(e), sn(e), Ie(e), Vi(e, "created"), e.$options.el && e.$mount(e.$options.el)
                    }
                }

                function xn(t, e) {
                    var i = t.$options = Object.create(t.constructor.options),
                        n = e._parentVnode;
                    i.parent = e.parent, i._parentVnode = n;
                    var r = n.componentOptions;
                    i.propsData = r.propsData, i._parentListeners = r.listeners, i._renderChildren = r.children, i._componentTag = r.tag, e.render && (i.render = e.render, i.staticRenderFns = e.staticRenderFns)
                }

                function _n(t) {
                    var e = t.options;
                    if (t.super) {
                        var i = _n(t.super),
                            n = t.superOptions;
                        if (i !== n) {
                            t.superOptions = i;
                            var r = wn(t);
                            r && T(t.extendOptions, r), e = t.options = Gt(i, t.extendOptions), e.name && (e.components[e.name] = t)
                        }
                    }
                    return e
                }

                function wn(t) {
                    var e, i = t.options,
                        n = t.sealedOptions;
                    for (var r in i) i[r] !== n[r] && (e || (e = {}), e[r] = i[r]);
                    return e
                }

                function Cn(t) {
                    this._init(t)
                }

                function kn(t) {
                    t.use = function(t) {
                        var e = this._installedPlugins || (this._installedPlugins = []);
                        if (e.indexOf(t) > -1) return this;
                        var i = O(arguments, 1);
                        return i.unshift(this), "function" === typeof t.install ? t.install.apply(t, i) : "function" === typeof t && t.apply(null, i), e.push(t), this
                    }
                }

                function Sn(t) {
                    t.mixin = function(t) {
                        return this.options = Gt(this.options, t), this
                    }
                }

                function $n(t) {
                    t.cid = 0;
                    var e = 1;
                    t.extend = function(t) {
                        t = t || {};
                        var i = this,
                            n = i.cid,
                            r = t._Ctor || (t._Ctor = {});
                        if (r[n]) return r[n];
                        var s = t.name || i.options.name;
                        var a = function(t) {
                            this._init(t)
                        };
                        return a.prototype = Object.create(i.prototype), a.prototype.constructor = a, a.cid = e++, a.options = Gt(i.options, t), a["super"] = i, a.options.props && An(a), a.options.computed && In(a), a.extend = i.extend, a.mixin = i.mixin, a.use = i.use, z.forEach((function(t) {
                            a[t] = i[t]
                        })), s && (a.options.components[s] = a), a.superOptions = i.options, a.extendOptions = t, a.sealedOptions = T({}, a.options), r[n] = a, a
                    }
                }

                function An(t) {
                    var e = t.options.props;
                    for (var i in e) rn(t.prototype, "_props", i)
                }

                function In(t) {
                    var e = t.options.computed;
                    for (var i in e) un(t.prototype, i, e[i])
                }

                function Mn(t) {
                    z.forEach((function(e) {
                        t[e] = function(t, i) {
                            return i ? ("component" === e && h(i) && (i.name = i.name || t, i = this.options._base.extend(i)), "directive" === e && "function" === typeof i && (i = {
                                bind: i,
                                update: i
                            }), this.options[e + "s"][t] = i, i) : this.options[e + "s"][t]
                        }
                    }))
                }

                function On(t) {
                    return t && (t.Ctor.options.name || t.tag)
                }

                function Tn(t, e) {
                    return Array.isArray(t) ? t.indexOf(e) > -1 : "string" === typeof t ? t.split(",").indexOf(e) > -1 : !!u(t) && t.test(e)
                }

                function Ln(t, e) {
                    var i = t.cache,
                        n = t.keys,
                        r = t._vnode;
                    for (var s in i) {
                        var a = i[s];
                        if (a) {
                            var o = On(a.componentOptions);
                            o && !e(o) && Pn(i, s, n, r)
                        }
                    }
                }

                function Pn(t, e, i, n) {
                    var r = t[e];
                    !r || n && r.tag === n.tag || r.componentInstance.$destroy(), t[e] = null, b(i, e)
                }
                yn(Cn), vn(Cn), Ii(Cn), Li(Cn), vi(Cn);
                var Dn = [String, RegExp, Array],
                    Bn = {
                        name: "keep-alive",
                        abstract: !0,
                        props: {
                            include: Dn,
                            exclude: Dn,
                            max: [String, Number]
                        },
                        created: function() {
                            this.cache = Object.create(null), this.keys = []
                        },
                        destroyed: function() {
                            for (var t in this.cache) Pn(this.cache, t, this.keys)
                        },
                        mounted: function() {
                            var t = this;
                            this.$watch("include", (function(e) {
                                Ln(t, (function(t) {
                                    return Tn(e, t)
                                }))
                            })), this.$watch("exclude", (function(e) {
                                Ln(t, (function(t) {
                                    return !Tn(e, t)
                                }))
                            }))
                        },
                        render: function() {
                            var t = this.$slots.default,
                                e = wi(t),
                                i = e && e.componentOptions;
                            if (i) {
                                var n = On(i),
                                    r = this,
                                    s = r.include,
                                    a = r.exclude;
                                if (s && (!n || !Tn(s, n)) || a && n && Tn(a, n)) return e;
                                var o = this,
                                    l = o.cache,
                                    c = o.keys,
                                    h = null == e.key ? i.Ctor.cid + (i.tag ? "::" + i.tag : "") : e.key;
                                l[h] ? (e.componentInstance = l[h].componentInstance, b(c, h), c.push(h)) : (l[h] = e, c.push(h), this.max && c.length > parseInt(this.max) && Pn(l, c[0], c, this._vnode)), e.data.keepAlive = !0
                            }
                            return e || t && t[0]
                        }
                    },
                    En = {
                        KeepAlive: Bn
                    };

                function Fn(t) {
                    var e = {
                        get: function() {
                            return W
                        }
                    };
                    Object.defineProperty(t, "config", e), t.util = {
                        warn: pt,
                        extend: T,
                        mergeOptions: Gt,
                        defineReactive: Dt
                    }, t.set = Bt, t.delete = Et, t.nextTick = fe, t.observable = function(t) {
                        return Pt(t), t
                    }, t.options = Object.create(null), z.forEach((function(e) {
                        t.options[e + "s"] = Object.create(null)
                    })), t.options._base = t, T(t.options.components, En), kn(t), Sn(t), $n(t), Mn(t)
                }
                Fn(Cn), Object.defineProperty(Cn.prototype, "$isServer", {
                    get: lt
                }), Object.defineProperty(Cn.prototype, "$ssrContext", {
                    get: function() {
                        return this.$vnode && this.$vnode.ssrContext
                    }
                }), Object.defineProperty(Cn, "FunctionalRenderContext", {
                    value: Ke
                }), Cn.version = "2.6.11";
                var Vn = m("style,class"),
                    Nn = m("input,textarea,option,select,progress"),
                    zn = function(t, e, i) {
                        return "value" === i && Nn(t) && "button" !== e || "selected" === i && "option" === t || "checked" === i && "input" === t || "muted" === i && "video" === t
                    },
                    Rn = m("contenteditable,draggable,spellcheck"),
                    Wn = m("events,caret,typing,plaintext-only"),
                    Hn = function(t, e) {
                        return Gn(e) || "false" === e ? "false" : "contenteditable" === t && Wn(e) ? e : "true"
                    },
                    jn = m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                    qn = "http://www.w3.org/1999/xlink",
                    Un = function(t) {
                        return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
                    },
                    Yn = function(t) {
                        return Un(t) ? t.slice(6, t.length) : ""
                    },
                    Gn = function(t) {
                        return null == t || !1 === t
                    };

                function Xn(t) {
                    var e = t.data,
                        i = t,
                        n = t;
                    while (r(n.componentInstance)) n = n.componentInstance._vnode, n && n.data && (e = Zn(n.data, e));
                    while (r(i = i.parent)) i && i.data && (e = Zn(e, i.data));
                    return Kn(e.staticClass, e.class)
                }

                function Zn(t, e) {
                    return {
                        staticClass: Qn(t.staticClass, e.staticClass),
                        class: r(t.class) ? [t.class, e.class] : e.class
                    }
                }

                function Kn(t, e) {
                    return r(t) || r(e) ? Qn(t, Jn(e)) : ""
                }

                function Qn(t, e) {
                    return t ? e ? t + " " + e : t : e || ""
                }

                function Jn(t) {
                    return Array.isArray(t) ? tr(t) : l(t) ? er(t) : "string" === typeof t ? t : ""
                }

                function tr(t) {
                    for (var e, i = "", n = 0, s = t.length; n < s; n++) r(e = Jn(t[n])) && "" !== e && (i && (i += " "), i += e);
                    return i
                }

                function er(t) {
                    var e = "";
                    for (var i in t) t[i] && (e && (e += " "), e += i);
                    return e
                }
                var ir = {
                        svg: "http://www.w3.org/2000/svg",
                        math: "http://www.w3.org/1998/Math/MathML"
                    },
                    nr = m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                    rr = m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                    sr = function(t) {
                        return nr(t) || rr(t)
                    };

                function ar(t) {
                    return rr(t) ? "svg" : "math" === t ? "math" : void 0
                }
                var or = Object.create(null);

                function lr(t) {
                    if (!Z) return !0;
                    if (sr(t)) return !1;
                    if (t = t.toLowerCase(), null != or[t]) return or[t];
                    var e = document.createElement(t);
                    return t.indexOf("-") > -1 ? or[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : or[t] = /HTMLUnknownElement/.test(e.toString())
                }
                var cr = m("text,number,password,search,email,tel,url");

                function hr(t) {
                    if ("string" === typeof t) {
                        var e = document.querySelector(t);
                        return e || document.createElement("div")
                    }
                    return t
                }

                function ur(t, e) {
                    var i = document.createElement(t);
                    return "select" !== t || e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && i.setAttribute("multiple", "multiple"), i
                }

                function dr(t, e) {
                    return document.createElementNS(ir[t], e)
                }

                function pr(t) {
                    return document.createTextNode(t)
                }

                function fr(t) {
                    return document.createComment(t)
                }

                function gr(t, e, i) {
                    t.insertBefore(e, i)
                }

                function mr(t, e) {
                    t.removeChild(e)
                }

                function vr(t, e) {
                    t.appendChild(e)
                }

                function br(t) {
                    return t.parentNode
                }

                function yr(t) {
                    return t.nextSibling
                }

                function xr(t) {
                    return t.tagName
                }

                function _r(t, e) {
                    t.textContent = e
                }

                function wr(t, e) {
                    t.setAttribute(e, "")
                }
                var Cr = Object.freeze({
                        createElement: ur,
                        createElementNS: dr,
                        createTextNode: pr,
                        createComment: fr,
                        insertBefore: gr,
                        removeChild: mr,
                        appendChild: vr,
                        parentNode: br,
                        nextSibling: yr,
                        tagName: xr,
                        setTextContent: _r,
                        setStyleScope: wr
                    }),
                    kr = {
                        create: function(t, e) {
                            Sr(e)
                        },
                        update: function(t, e) {
                            t.data.ref !== e.data.ref && (Sr(t, !0), Sr(e))
                        },
                        destroy: function(t) {
                            Sr(t, !0)
                        }
                    };

                function Sr(t, e) {
                    var i = t.data.ref;
                    if (r(i)) {
                        var n = t.context,
                            s = t.componentInstance || t.elm,
                            a = n.$refs;
                        e ? Array.isArray(a[i]) ? b(a[i], s) : a[i] === s && (a[i] = void 0) : t.data.refInFor ? Array.isArray(a[i]) ? a[i].indexOf(s) < 0 && a[i].push(s) : a[i] = [s] : a[i] = s
                    }
                }
                var $r = new yt("", {}, []),
                    Ar = ["create", "activate", "update", "remove", "destroy"];

                function Ir(t, e) {
                    return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && r(t.data) === r(e.data) && Mr(t, e) || s(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && n(e.asyncFactory.error))
                }

                function Mr(t, e) {
                    if ("input" !== t.tag) return !0;
                    var i, n = r(i = t.data) && r(i = i.attrs) && i.type,
                        s = r(i = e.data) && r(i = i.attrs) && i.type;
                    return n === s || cr(n) && cr(s)
                }

                function Or(t, e, i) {
                    var n, s, a = {};
                    for (n = e; n <= i; ++n) s = t[n].key, r(s) && (a[s] = n);
                    return a
                }

                function Tr(t) {
                    var e, i, a = {},
                        l = t.modules,
                        c = t.nodeOps;
                    for (e = 0; e < Ar.length; ++e)
                        for (a[Ar[e]] = [], i = 0; i < l.length; ++i) r(l[i][Ar[e]]) && a[Ar[e]].push(l[i][Ar[e]]);

                    function h(t) {
                        return new yt(c.tagName(t).toLowerCase(), {}, [], void 0, t)
                    }

                    function u(t, e) {
                        function i() {
                            0 === --i.listeners && d(t)
                        }
                        return i.listeners = e, i
                    }

                    function d(t) {
                        var e = c.parentNode(t);
                        r(e) && c.removeChild(e, t)
                    }

                    function p(t, e, i, n, a, o, l) {
                        if (r(t.elm) && r(o) && (t = o[l] = Ct(t)), t.isRootInsert = !a, !f(t, e, i, n)) {
                            var h = t.data,
                                u = t.children,
                                d = t.tag;
                            r(d) ? (t.elm = t.ns ? c.createElementNS(t.ns, d) : c.createElement(d, t), w(t), y(t, u, e), r(h) && _(t, e), b(i, t.elm, n)) : s(t.isComment) ? (t.elm = c.createComment(t.text), b(i, t.elm, n)) : (t.elm = c.createTextNode(t.text), b(i, t.elm, n))
                        }
                    }

                    function f(t, e, i, n) {
                        var a = t.data;
                        if (r(a)) {
                            var o = r(t.componentInstance) && a.keepAlive;
                            if (r(a = a.hook) && r(a = a.init) && a(t, !1), r(t.componentInstance)) return g(t, e), b(i, t.elm, n), s(o) && v(t, e, i, n), !0
                        }
                    }

                    function g(t, e) {
                        r(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, x(t) ? (_(t, e), w(t)) : (Sr(t), e.push(t))
                    }

                    function v(t, e, i, n) {
                        var s, o = t;
                        while (o.componentInstance)
                            if (o = o.componentInstance._vnode, r(s = o.data) && r(s = s.transition)) {
                                for (s = 0; s < a.activate.length; ++s) a.activate[s]($r, o);
                                e.push(o);
                                break
                            }
                        b(i, t.elm, n)
                    }

                    function b(t, e, i) {
                        r(t) && (r(i) ? c.parentNode(i) === t && c.insertBefore(t, e, i) : c.appendChild(t, e))
                    }

                    function y(t, e, i) {
                        if (Array.isArray(e)) {
                            0;
                            for (var n = 0; n < e.length; ++n) p(e[n], i, t.elm, null, !0, e, n)
                        } else o(t.text) && c.appendChild(t.elm, c.createTextNode(String(t.text)))
                    }

                    function x(t) {
                        while (t.componentInstance) t = t.componentInstance._vnode;
                        return r(t.tag)
                    }

                    function _(t, i) {
                        for (var n = 0; n < a.create.length; ++n) a.create[n]($r, t);
                        e = t.data.hook, r(e) && (r(e.create) && e.create($r, t), r(e.insert) && i.push(t))
                    }

                    function w(t) {
                        var e;
                        if (r(e = t.fnScopeId)) c.setStyleScope(t.elm, e);
                        else {
                            var i = t;
                            while (i) r(e = i.context) && r(e = e.$options._scopeId) && c.setStyleScope(t.elm, e), i = i.parent
                        }
                        r(e = Mi) && e !== t.context && e !== t.fnContext && r(e = e.$options._scopeId) && c.setStyleScope(t.elm, e)
                    }

                    function C(t, e, i, n, r, s) {
                        for (; n <= r; ++n) p(i[n], s, t, e, !1, i, n)
                    }

                    function k(t) {
                        var e, i, n = t.data;
                        if (r(n))
                            for (r(e = n.hook) && r(e = e.destroy) && e(t), e = 0; e < a.destroy.length; ++e) a.destroy[e](t);
                        if (r(e = t.children))
                            for (i = 0; i < t.children.length; ++i) k(t.children[i])
                    }

                    function S(t, e, i) {
                        for (; e <= i; ++e) {
                            var n = t[e];
                            r(n) && (r(n.tag) ? ($(n), k(n)) : d(n.elm))
                        }
                    }

                    function $(t, e) {
                        if (r(e) || r(t.data)) {
                            var i, n = a.remove.length + 1;
                            for (r(e) ? e.listeners += n : e = u(t.elm, n), r(i = t.componentInstance) && r(i = i._vnode) && r(i.data) && $(i, e), i = 0; i < a.remove.length; ++i) a.remove[i](t, e);
                            r(i = t.data.hook) && r(i = i.remove) ? i(t, e) : e()
                        } else d(t.elm)
                    }

                    function A(t, e, i, s, a) {
                        var o, l, h, u, d = 0,
                            f = 0,
                            g = e.length - 1,
                            m = e[0],
                            v = e[g],
                            b = i.length - 1,
                            y = i[0],
                            x = i[b],
                            _ = !a;
                        while (d <= g && f <= b) n(m) ? m = e[++d] : n(v) ? v = e[--g] : Ir(m, y) ? (M(m, y, s, i, f), m = e[++d], y = i[++f]) : Ir(v, x) ? (M(v, x, s, i, b), v = e[--g], x = i[--b]) : Ir(m, x) ? (M(m, x, s, i, b), _ && c.insertBefore(t, m.elm, c.nextSibling(v.elm)), m = e[++d], x = i[--b]) : Ir(v, y) ? (M(v, y, s, i, f), _ && c.insertBefore(t, v.elm, m.elm), v = e[--g], y = i[++f]) : (n(o) && (o = Or(e, d, g)), l = r(y.key) ? o[y.key] : I(y, e, d, g), n(l) ? p(y, s, t, m.elm, !1, i, f) : (h = e[l], Ir(h, y) ? (M(h, y, s, i, f), e[l] = void 0, _ && c.insertBefore(t, h.elm, m.elm)) : p(y, s, t, m.elm, !1, i, f)), y = i[++f]);
                        d > g ? (u = n(i[b + 1]) ? null : i[b + 1].elm, C(t, u, i, f, b, s)) : f > b && S(e, d, g)
                    }

                    function I(t, e, i, n) {
                        for (var s = i; s < n; s++) {
                            var a = e[s];
                            if (r(a) && Ir(t, a)) return s
                        }
                    }

                    function M(t, e, i, o, l, h) {
                        if (t !== e) {
                            r(e.elm) && r(o) && (e = o[l] = Ct(e));
                            var u = e.elm = t.elm;
                            if (s(t.isAsyncPlaceholder)) r(e.asyncFactory.resolved) ? L(t.elm, e, i) : e.isAsyncPlaceholder = !0;
                            else if (s(e.isStatic) && s(t.isStatic) && e.key === t.key && (s(e.isCloned) || s(e.isOnce))) e.componentInstance = t.componentInstance;
                            else {
                                var d, p = e.data;
                                r(p) && r(d = p.hook) && r(d = d.prepatch) && d(t, e);
                                var f = t.children,
                                    g = e.children;
                                if (r(p) && x(e)) {
                                    for (d = 0; d < a.update.length; ++d) a.update[d](t, e);
                                    r(d = p.hook) && r(d = d.update) && d(t, e)
                                }
                                n(e.text) ? r(f) && r(g) ? f !== g && A(u, f, g, i, h) : r(g) ? (r(t.text) && c.setTextContent(u, ""), C(u, null, g, 0, g.length - 1, i)) : r(f) ? S(f, 0, f.length - 1) : r(t.text) && c.setTextContent(u, "") : t.text !== e.text && c.setTextContent(u, e.text), r(p) && r(d = p.hook) && r(d = d.postpatch) && d(t, e)
                            }
                        }
                    }

                    function O(t, e, i) {
                        if (s(i) && r(t.parent)) t.parent.data.pendingInsert = e;
                        else
                            for (var n = 0; n < e.length; ++n) e[n].data.hook.insert(e[n])
                    }
                    var T = m("attrs,class,staticClass,staticStyle,key");

                    function L(t, e, i, n) {
                        var a, o = e.tag,
                            l = e.data,
                            c = e.children;
                        if (n = n || l && l.pre, e.elm = t, s(e.isComment) && r(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
                        if (r(l) && (r(a = l.hook) && r(a = a.init) && a(e, !0), r(a = e.componentInstance))) return g(e, i), !0;
                        if (r(o)) {
                            if (r(c))
                                if (t.hasChildNodes())
                                    if (r(a = l) && r(a = a.domProps) && r(a = a.innerHTML)) {
                                        if (a !== t.innerHTML) return !1
                                    } else {
                                        for (var h = !0, u = t.firstChild, d = 0; d < c.length; d++) {
                                            if (!u || !L(u, c[d], i, n)) {
                                                h = !1;
                                                break
                                            }
                                            u = u.nextSibling
                                        }
                                        if (!h || u) return !1
                                    }
                            else y(e, c, i);
                            if (r(l)) {
                                var p = !1;
                                for (var f in l)
                                    if (!T(f)) {
                                        p = !0, _(e, i);
                                        break
                                    }!p && l["class"] && me(l["class"])
                            }
                        } else t.data !== e.text && (t.data = e.text);
                        return !0
                    }
                    return function(t, e, i, o) {
                        if (!n(e)) {
                            var l = !1,
                                u = [];
                            if (n(t)) l = !0, p(e, u);
                            else {
                                var d = r(t.nodeType);
                                if (!d && Ir(t, e)) M(t, e, u, null, null, o);
                                else {
                                    if (d) {
                                        if (1 === t.nodeType && t.hasAttribute(N) && (t.removeAttribute(N), i = !0), s(i) && L(t, e, u)) return O(e, u, !0), t;
                                        t = h(t)
                                    }
                                    var f = t.elm,
                                        g = c.parentNode(f);
                                    if (p(e, u, f._leaveCb ? null : g, c.nextSibling(f)), r(e.parent)) {
                                        var m = e.parent,
                                            v = x(e);
                                        while (m) {
                                            for (var b = 0; b < a.destroy.length; ++b) a.destroy[b](m);
                                            if (m.elm = e.elm, v) {
                                                for (var y = 0; y < a.create.length; ++y) a.create[y]($r, m);
                                                var _ = m.data.hook.insert;
                                                if (_.merged)
                                                    for (var w = 1; w < _.fns.length; w++) _.fns[w]()
                                            } else Sr(m);
                                            m = m.parent
                                        }
                                    }
                                    r(g) ? S([t], 0, 0) : r(t.tag) && k(t)
                                }
                            }
                            return O(e, u, l), e.elm
                        }
                        r(t) && k(t)
                    }
                }
                var Lr = {
                    create: Pr,
                    update: Pr,
                    destroy: function(t) {
                        Pr(t, $r)
                    }
                };

                function Pr(t, e) {
                    (t.data.directives || e.data.directives) && Dr(t, e)
                }

                function Dr(t, e) {
                    var i, n, r, s = t === $r,
                        a = e === $r,
                        o = Er(t.data.directives, t.context),
                        l = Er(e.data.directives, e.context),
                        c = [],
                        h = [];
                    for (i in l) n = o[i], r = l[i], n ? (r.oldValue = n.value, r.oldArg = n.arg, Vr(r, "update", e, t), r.def && r.def.componentUpdated && h.push(r)) : (Vr(r, "bind", e, t), r.def && r.def.inserted && c.push(r));
                    if (c.length) {
                        var u = function() {
                            for (var i = 0; i < c.length; i++) Vr(c[i], "inserted", e, t)
                        };
                        s ? _e(e, "insert", u) : u()
                    }
                    if (h.length && _e(e, "postpatch", (function() {
                            for (var i = 0; i < h.length; i++) Vr(h[i], "componentUpdated", e, t)
                        })), !s)
                        for (i in o) l[i] || Vr(o[i], "unbind", t, t, a)
                }
                var Br = Object.create(null);

                function Er(t, e) {
                    var i, n, r = Object.create(null);
                    if (!t) return r;
                    for (i = 0; i < t.length; i++) n = t[i], n.modifiers || (n.modifiers = Br), r[Fr(n)] = n, n.def = Xt(e.$options, "directives", n.name, !0);
                    return r
                }

                function Fr(t) {
                    return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
                }

                function Vr(t, e, i, n, r) {
                    var s = t.def && t.def[e];
                    if (s) try {
                        s(i.elm, t, i, n, r)
                    } catch (wa) {
                        ee(wa, i.context, "directive " + t.name + " " + e + " hook")
                    }
                }
                var Nr = [kr, Lr];

                function zr(t, e) {
                    var i = e.componentOptions;
                    if ((!r(i) || !1 !== i.Ctor.options.inheritAttrs) && (!n(t.data.attrs) || !n(e.data.attrs))) {
                        var s, a, o, l = e.elm,
                            c = t.data.attrs || {},
                            h = e.data.attrs || {};
                        for (s in r(h.__ob__) && (h = e.data.attrs = T({}, h)), h) a = h[s], o = c[s], o !== a && Rr(l, s, a);
                        for (s in (tt || it) && h.value !== c.value && Rr(l, "value", h.value), c) n(h[s]) && (Un(s) ? l.removeAttributeNS(qn, Yn(s)) : Rn(s) || l.removeAttribute(s))
                    }
                }

                function Rr(t, e, i) {
                    t.tagName.indexOf("-") > -1 ? Wr(t, e, i) : jn(e) ? Gn(i) ? t.removeAttribute(e) : (i = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, i)) : Rn(e) ? t.setAttribute(e, Hn(e, i)) : Un(e) ? Gn(i) ? t.removeAttributeNS(qn, Yn(e)) : t.setAttributeNS(qn, e, i) : Wr(t, e, i)
                }

                function Wr(t, e, i) {
                    if (Gn(i)) t.removeAttribute(e);
                    else {
                        if (tt && !et && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== i && !t.__ieph) {
                            var n = function(e) {
                                e.stopImmediatePropagation(), t.removeEventListener("input", n)
                            };
                            t.addEventListener("input", n), t.__ieph = !0
                        }
                        t.setAttribute(e, i)
                    }
                }
                var Hr = {
                    create: zr,
                    update: zr
                };

                function jr(t, e) {
                    var i = e.elm,
                        s = e.data,
                        a = t.data;
                    if (!(n(s.staticClass) && n(s.class) && (n(a) || n(a.staticClass) && n(a.class)))) {
                        var o = Xn(e),
                            l = i._transitionClasses;
                        r(l) && (o = Qn(o, Jn(l))), o !== i._prevClass && (i.setAttribute("class", o), i._prevClass = o)
                    }
                }
                var qr, Ur = {
                        create: jr,
                        update: jr
                    },
                    Yr = "__r",
                    Gr = "__c";

                function Xr(t) {
                    if (r(t[Yr])) {
                        var e = tt ? "change" : "input";
                        t[e] = [].concat(t[Yr], t[e] || []), delete t[Yr]
                    }
                    r(t[Gr]) && (t.change = [].concat(t[Gr], t.change || []), delete t[Gr])
                }

                function Zr(t, e, i) {
                    var n = qr;
                    return function r() {
                        var s = e.apply(null, arguments);
                        null !== s && Jr(t, r, i, n)
                    }
                }
                var Kr = ae && !(rt && Number(rt[1]) <= 53);

                function Qr(t, e, i, n) {
                    if (Kr) {
                        var r = Ui,
                            s = e;
                        e = s._wrapper = function(t) {
                            if (t.target === t.currentTarget || t.timeStamp >= r || t.timeStamp <= 0 || t.target.ownerDocument !== document) return s.apply(this, arguments)
                        }
                    }
                    qr.addEventListener(t, e, at ? {
                        capture: i,
                        passive: n
                    } : i)
                }

                function Jr(t, e, i, n) {
                    (n || qr).removeEventListener(t, e._wrapper || e, i)
                }

                function ts(t, e) {
                    if (!n(t.data.on) || !n(e.data.on)) {
                        var i = e.data.on || {},
                            r = t.data.on || {};
                        qr = e.elm, Xr(i), xe(i, r, Qr, Jr, Zr, e.context), qr = void 0
                    }
                }
                var es, is = {
                    create: ts,
                    update: ts
                };

                function ns(t, e) {
                    if (!n(t.data.domProps) || !n(e.data.domProps)) {
                        var i, s, a = e.elm,
                            o = t.data.domProps || {},
                            l = e.data.domProps || {};
                        for (i in r(l.__ob__) && (l = e.data.domProps = T({}, l)), o) i in l || (a[i] = "");
                        for (i in l) {
                            if (s = l[i], "textContent" === i || "innerHTML" === i) {
                                if (e.children && (e.children.length = 0), s === o[i]) continue;
                                1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                            }
                            if ("value" === i && "PROGRESS" !== a.tagName) {
                                a._value = s;
                                var c = n(s) ? "" : String(s);
                                rs(a, c) && (a.value = c)
                            } else if ("innerHTML" === i && rr(a.tagName) && n(a.innerHTML)) {
                                es = es || document.createElement("div"), es.innerHTML = "<svg>" + s + "</svg>";
                                var h = es.firstChild;
                                while (a.firstChild) a.removeChild(a.firstChild);
                                while (h.firstChild) a.appendChild(h.firstChild)
                            } else if (s !== o[i]) try {
                                a[i] = s
                            } catch (wa) {}
                        }
                    }
                }

                function rs(t, e) {
                    return !t.composing && ("OPTION" === t.tagName || ss(t, e) || as(t, e))
                }

                function ss(t, e) {
                    var i = !0;
                    try {
                        i = document.activeElement !== t
                    } catch (wa) {}
                    return i && t.value !== e
                }

                function as(t, e) {
                    var i = t.value,
                        n = t._vModifiers;
                    if (r(n)) {
                        if (n.number) return g(i) !== g(e);
                        if (n.trim) return i.trim() !== e.trim()
                    }
                    return i !== e
                }
                var os = {
                        create: ns,
                        update: ns
                    },
                    ls = _((function(t) {
                        var e = {},
                            i = /;(?![^(]*\))/g,
                            n = /:(.+)/;
                        return t.split(i).forEach((function(t) {
                            if (t) {
                                var i = t.split(n);
                                i.length > 1 && (e[i[0].trim()] = i[1].trim())
                            }
                        })), e
                    }));

                function cs(t) {
                    var e = hs(t.style);
                    return t.staticStyle ? T(t.staticStyle, e) : e
                }

                function hs(t) {
                    return Array.isArray(t) ? L(t) : "string" === typeof t ? ls(t) : t
                }

                function us(t, e) {
                    var i, n = {};
                    if (e) {
                        var r = t;
                        while (r.componentInstance) r = r.componentInstance._vnode, r && r.data && (i = cs(r.data)) && T(n, i)
                    }(i = cs(t.data)) && T(n, i);
                    var s = t;
                    while (s = s.parent) s.data && (i = cs(s.data)) && T(n, i);
                    return n
                }
                var ds, ps = /^--/,
                    fs = /\s*!important$/,
                    gs = function(t, e, i) {
                        if (ps.test(e)) t.style.setProperty(e, i);
                        else if (fs.test(i)) t.style.setProperty($(e), i.replace(fs, ""), "important");
                        else {
                            var n = vs(e);
                            if (Array.isArray(i))
                                for (var r = 0, s = i.length; r < s; r++) t.style[n] = i[r];
                            else t.style[n] = i
                        }
                    },
                    ms = ["Webkit", "Moz", "ms"],
                    vs = _((function(t) {
                        if (ds = ds || document.createElement("div").style, t = C(t), "filter" !== t && t in ds) return t;
                        for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < ms.length; i++) {
                            var n = ms[i] + e;
                            if (n in ds) return n
                        }
                    }));

                function bs(t, e) {
                    var i = e.data,
                        s = t.data;
                    if (!(n(i.staticStyle) && n(i.style) && n(s.staticStyle) && n(s.style))) {
                        var a, o, l = e.elm,
                            c = s.staticStyle,
                            h = s.normalizedStyle || s.style || {},
                            u = c || h,
                            d = hs(e.data.style) || {};
                        e.data.normalizedStyle = r(d.__ob__) ? T({}, d) : d;
                        var p = us(e, !0);
                        for (o in u) n(p[o]) && gs(l, o, "");
                        for (o in p) a = p[o], a !== u[o] && gs(l, o, null == a ? "" : a)
                    }
                }
                var ys = {
                        create: bs,
                        update: bs
                    },
                    xs = /\s+/;

                function _s(t, e) {
                    if (e && (e = e.trim()))
                        if (t.classList) e.indexOf(" ") > -1 ? e.split(xs).forEach((function(e) {
                            return t.classList.add(e)
                        })) : t.classList.add(e);
                        else {
                            var i = " " + (t.getAttribute("class") || "") + " ";
                            i.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (i + e).trim())
                        }
                }

                function ws(t, e) {
                    if (e && (e = e.trim()))
                        if (t.classList) e.indexOf(" ") > -1 ? e.split(xs).forEach((function(e) {
                            return t.classList.remove(e)
                        })) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
                        else {
                            var i = " " + (t.getAttribute("class") || "") + " ",
                                n = " " + e + " ";
                            while (i.indexOf(n) >= 0) i = i.replace(n, " ");
                            i = i.trim(), i ? t.setAttribute("class", i) : t.removeAttribute("class")
                        }
                }

                function Cs(t) {
                    if (t) {
                        if ("object" === typeof t) {
                            var e = {};
                            return !1 !== t.css && T(e, ks(t.name || "v")), T(e, t), e
                        }
                        return "string" === typeof t ? ks(t) : void 0
                    }
                }
                var ks = _((function(t) {
                        return {
                            enterClass: t + "-enter",
                            enterToClass: t + "-enter-to",
                            enterActiveClass: t + "-enter-active",
                            leaveClass: t + "-leave",
                            leaveToClass: t + "-leave-to",
                            leaveActiveClass: t + "-leave-active"
                        }
                    })),
                    Ss = Z && !et,
                    $s = "transition",
                    As = "animation",
                    Is = "transition",
                    Ms = "transitionend",
                    Os = "animation",
                    Ts = "animationend";
                Ss && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Is = "WebkitTransition", Ms = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Os = "WebkitAnimation", Ts = "webkitAnimationEnd"));
                var Ls = Z ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
                    return t()
                };

                function Ps(t) {
                    Ls((function() {
                        Ls(t)
                    }))
                }

                function Ds(t, e) {
                    var i = t._transitionClasses || (t._transitionClasses = []);
                    i.indexOf(e) < 0 && (i.push(e), _s(t, e))
                }

                function Bs(t, e) {
                    t._transitionClasses && b(t._transitionClasses, e), ws(t, e)
                }

                function Es(t, e, i) {
                    var n = Vs(t, e),
                        r = n.type,
                        s = n.timeout,
                        a = n.propCount;
                    if (!r) return i();
                    var o = r === $s ? Ms : Ts,
                        l = 0,
                        c = function() {
                            t.removeEventListener(o, h), i()
                        },
                        h = function(e) {
                            e.target === t && ++l >= a && c()
                        };
                    setTimeout((function() {
                        l < a && c()
                    }), s + 1), t.addEventListener(o, h)
                }
                var Fs = /\b(transform|all)(,|$)/;

                function Vs(t, e) {
                    var i, n = window.getComputedStyle(t),
                        r = (n[Is + "Delay"] || "").split(", "),
                        s = (n[Is + "Duration"] || "").split(", "),
                        a = Ns(r, s),
                        o = (n[Os + "Delay"] || "").split(", "),
                        l = (n[Os + "Duration"] || "").split(", "),
                        c = Ns(o, l),
                        h = 0,
                        u = 0;
                    e === $s ? a > 0 && (i = $s, h = a, u = s.length) : e === As ? c > 0 && (i = As, h = c, u = l.length) : (h = Math.max(a, c), i = h > 0 ? a > c ? $s : As : null, u = i ? i === $s ? s.length : l.length : 0);
                    var d = i === $s && Fs.test(n[Is + "Property"]);
                    return {
                        type: i,
                        timeout: h,
                        propCount: u,
                        hasTransform: d
                    }
                }

                function Ns(t, e) {
                    while (t.length < e.length) t = t.concat(t);
                    return Math.max.apply(null, e.map((function(e, i) {
                        return zs(e) + zs(t[i])
                    })))
                }

                function zs(t) {
                    return 1e3 * Number(t.slice(0, -1).replace(",", "."))
                }

                function Rs(t, e) {
                    var i = t.elm;
                    r(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
                    var s = Cs(t.data.transition);
                    if (!n(s) && !r(i._enterCb) && 1 === i.nodeType) {
                        var a = s.css,
                            o = s.type,
                            c = s.enterClass,
                            h = s.enterToClass,
                            u = s.enterActiveClass,
                            d = s.appearClass,
                            p = s.appearToClass,
                            f = s.appearActiveClass,
                            m = s.beforeEnter,
                            v = s.enter,
                            b = s.afterEnter,
                            y = s.enterCancelled,
                            x = s.beforeAppear,
                            _ = s.appear,
                            w = s.afterAppear,
                            C = s.appearCancelled,
                            k = s.duration,
                            S = Mi,
                            $ = Mi.$vnode;
                        while ($ && $.parent) S = $.context, $ = $.parent;
                        var A = !S._isMounted || !t.isRootInsert;
                        if (!A || _ || "" === _) {
                            var I = A && d ? d : c,
                                M = A && f ? f : u,
                                O = A && p ? p : h,
                                T = A && x || m,
                                L = A && "function" === typeof _ ? _ : v,
                                P = A && w || b,
                                D = A && C || y,
                                B = g(l(k) ? k.enter : k);
                            0;
                            var E = !1 !== a && !et,
                                F = js(L),
                                N = i._enterCb = V((function() {
                                    E && (Bs(i, O), Bs(i, M)), N.cancelled ? (E && Bs(i, I), D && D(i)) : P && P(i), i._enterCb = null
                                }));
                            t.data.show || _e(t, "insert", (function() {
                                var e = i.parentNode,
                                    n = e && e._pending && e._pending[t.key];
                                n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), L && L(i, N)
                            })), T && T(i), E && (Ds(i, I), Ds(i, M), Ps((function() {
                                Bs(i, I), N.cancelled || (Ds(i, O), F || (Hs(B) ? setTimeout(N, B) : Es(i, o, N)))
                            }))), t.data.show && (e && e(), L && L(i, N)), E || F || N()
                        }
                    }
                }

                function Ws(t, e) {
                    var i = t.elm;
                    r(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());
                    var s = Cs(t.data.transition);
                    if (n(s) || 1 !== i.nodeType) return e();
                    if (!r(i._leaveCb)) {
                        var a = s.css,
                            o = s.type,
                            c = s.leaveClass,
                            h = s.leaveToClass,
                            u = s.leaveActiveClass,
                            d = s.beforeLeave,
                            p = s.leave,
                            f = s.afterLeave,
                            m = s.leaveCancelled,
                            v = s.delayLeave,
                            b = s.duration,
                            y = !1 !== a && !et,
                            x = js(p),
                            _ = g(l(b) ? b.leave : b);
                        0;
                        var w = i._leaveCb = V((function() {
                            i.parentNode && i.parentNode._pending && (i.parentNode._pending[t.key] = null), y && (Bs(i, h), Bs(i, u)), w.cancelled ? (y && Bs(i, c), m && m(i)) : (e(), f && f(i)), i._leaveCb = null
                        }));
                        v ? v(C) : C()
                    }

                    function C() {
                        w.cancelled || (!t.data.show && i.parentNode && ((i.parentNode._pending || (i.parentNode._pending = {}))[t.key] = t), d && d(i), y && (Ds(i, c), Ds(i, u), Ps((function() {
                            Bs(i, c), w.cancelled || (Ds(i, h), x || (Hs(_) ? setTimeout(w, _) : Es(i, o, w)))
                        }))), p && p(i, w), y || x || w())
                    }
                }

                function Hs(t) {
                    return "number" === typeof t && !isNaN(t)
                }

                function js(t) {
                    if (n(t)) return !1;
                    var e = t.fns;
                    return r(e) ? js(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
                }

                function qs(t, e) {
                    !0 !== e.data.show && Rs(e)
                }
                var Us = Z ? {
                        create: qs,
                        activate: qs,
                        remove: function(t, e) {
                            !0 !== t.data.show ? Ws(t, e) : e()
                        }
                    } : {},
                    Ys = [Hr, Ur, is, os, ys, Us],
                    Gs = Ys.concat(Nr),
                    Xs = Tr({
                        nodeOps: Cr,
                        modules: Gs
                    });
                et && document.addEventListener("selectionchange", (function() {
                    var t = document.activeElement;
                    t && t.vmodel && na(t, "input")
                }));
                var Zs = {
                    inserted: function(t, e, i, n) {
                        "select" === i.tag ? (n.elm && !n.elm._vOptions ? _e(i, "postpatch", (function() {
                            Zs.componentUpdated(t, e, i)
                        })) : Ks(t, e, i.context), t._vOptions = [].map.call(t.options, ta)) : ("textarea" === i.tag || cr(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", ea), t.addEventListener("compositionend", ia), t.addEventListener("change", ia), et && (t.vmodel = !0)))
                    },
                    componentUpdated: function(t, e, i) {
                        if ("select" === i.tag) {
                            Ks(t, e, i.context);
                            var n = t._vOptions,
                                r = t._vOptions = [].map.call(t.options, ta);
                            if (r.some((function(t, e) {
                                    return !E(t, n[e])
                                }))) {
                                var s = t.multiple ? e.value.some((function(t) {
                                    return Js(t, r)
                                })) : e.value !== e.oldValue && Js(e.value, r);
                                s && na(t, "change")
                            }
                        }
                    }
                };

                function Ks(t, e, i) {
                    Qs(t, e, i), (tt || it) && setTimeout((function() {
                        Qs(t, e, i)
                    }), 0)
                }

                function Qs(t, e, i) {
                    var n = e.value,
                        r = t.multiple;
                    if (!r || Array.isArray(n)) {
                        for (var s, a, o = 0, l = t.options.length; o < l; o++)
                            if (a = t.options[o], r) s = F(n, ta(a)) > -1, a.selected !== s && (a.selected = s);
                            else if (E(ta(a), n)) return void(t.selectedIndex !== o && (t.selectedIndex = o));
                        r || (t.selectedIndex = -1)
                    }
                }

                function Js(t, e) {
                    return e.every((function(e) {
                        return !E(e, t)
                    }))
                }

                function ta(t) {
                    return "_value" in t ? t._value : t.value
                }

                function ea(t) {
                    t.target.composing = !0
                }

                function ia(t) {
                    t.target.composing && (t.target.composing = !1, na(t.target, "input"))
                }

                function na(t, e) {
                    var i = document.createEvent("HTMLEvents");
                    i.initEvent(e, !0, !0), t.dispatchEvent(i)
                }

                function ra(t) {
                    return !t.componentInstance || t.data && t.data.transition ? t : ra(t.componentInstance._vnode)
                }
                var sa = {
                        bind: function(t, e, i) {
                            var n = e.value;
                            i = ra(i);
                            var r = i.data && i.data.transition,
                                s = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                            n && r ? (i.data.show = !0, Rs(i, (function() {
                                t.style.display = s
                            }))) : t.style.display = n ? s : "none"
                        },
                        update: function(t, e, i) {
                            var n = e.value,
                                r = e.oldValue;
                            if (!n !== !r) {
                                i = ra(i);
                                var s = i.data && i.data.transition;
                                s ? (i.data.show = !0, n ? Rs(i, (function() {
                                    t.style.display = t.__vOriginalDisplay
                                })) : Ws(i, (function() {
                                    t.style.display = "none"
                                }))) : t.style.display = n ? t.__vOriginalDisplay : "none"
                            }
                        },
                        unbind: function(t, e, i, n, r) {
                            r || (t.style.display = t.__vOriginalDisplay)
                        }
                    },
                    aa = {
                        model: Zs,
                        show: sa
                    },
                    oa = {
                        name: String,
                        appear: Boolean,
                        css: Boolean,
                        mode: String,
                        type: String,
                        enterClass: String,
                        leaveClass: String,
                        enterToClass: String,
                        leaveToClass: String,
                        enterActiveClass: String,
                        leaveActiveClass: String,
                        appearClass: String,
                        appearActiveClass: String,
                        appearToClass: String,
                        duration: [Number, String, Object]
                    };

                function la(t) {
                    var e = t && t.componentOptions;
                    return e && e.Ctor.options.abstract ? la(wi(e.children)) : t
                }

                function ca(t) {
                    var e = {},
                        i = t.$options;
                    for (var n in i.propsData) e[n] = t[n];
                    var r = i._parentListeners;
                    for (var s in r) e[C(s)] = r[s];
                    return e
                }

                function ha(t, e) {
                    if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
                        props: e.componentOptions.propsData
                    })
                }

                function ua(t) {
                    while (t = t.parent)
                        if (t.data.transition) return !0
                }

                function da(t, e) {
                    return e.key === t.key && e.tag === t.tag
                }
                var pa = function(t) {
                        return t.tag || _i(t)
                    },
                    fa = function(t) {
                        return "show" === t.name
                    },
                    ga = {
                        name: "transition",
                        props: oa,
                        abstract: !0,
                        render: function(t) {
                            var e = this,
                                i = this.$slots.default;
                            if (i && (i = i.filter(pa), i.length)) {
                                0;
                                var n = this.mode;
                                0;
                                var r = i[0];
                                if (ua(this.$vnode)) return r;
                                var s = la(r);
                                if (!s) return r;
                                if (this._leaving) return ha(t, r);
                                var a = "__transition-" + this._uid + "-";
                                s.key = null == s.key ? s.isComment ? a + "comment" : a + s.tag : o(s.key) ? 0 === String(s.key).indexOf(a) ? s.key : a + s.key : s.key;
                                var l = (s.data || (s.data = {})).transition = ca(this),
                                    c = this._vnode,
                                    h = la(c);
                                if (s.data.directives && s.data.directives.some(fa) && (s.data.show = !0), h && h.data && !da(s, h) && !_i(h) && (!h.componentInstance || !h.componentInstance._vnode.isComment)) {
                                    var u = h.data.transition = T({}, l);
                                    if ("out-in" === n) return this._leaving = !0, _e(u, "afterLeave", (function() {
                                        e._leaving = !1, e.$forceUpdate()
                                    })), ha(t, r);
                                    if ("in-out" === n) {
                                        if (_i(s)) return c;
                                        var d, p = function() {
                                            d()
                                        };
                                        _e(l, "afterEnter", p), _e(l, "enterCancelled", p), _e(u, "delayLeave", (function(t) {
                                            d = t
                                        }))
                                    }
                                }
                                return r
                            }
                        }
                    },
                    ma = T({
                        tag: String,
                        moveClass: String
                    }, oa);
                delete ma.mode;
                var va = {
                    props: ma,
                    beforeMount: function() {
                        var t = this,
                            e = this._update;
                        this._update = function(i, n) {
                            var r = Oi(t);
                            t.__patch__(t._vnode, t.kept, !1, !0), t._vnode = t.kept, r(), e.call(t, i, n)
                        }
                    },
                    render: function(t) {
                        for (var e = this.tag || this.$vnode.data.tag || "span", i = Object.create(null), n = this.prevChildren = this.children, r = this.$slots.default || [], s = this.children = [], a = ca(this), o = 0; o < r.length; o++) {
                            var l = r[o];
                            if (l.tag)
                                if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) s.push(l), i[l.key] = l, (l.data || (l.data = {})).transition = a;
                                else;
                        }
                        if (n) {
                            for (var c = [], h = [], u = 0; u < n.length; u++) {
                                var d = n[u];
                                d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), i[d.key] ? c.push(d) : h.push(d)
                            }
                            this.kept = t(e, null, c), this.removed = h
                        }
                        return t(e, null, s)
                    },
                    updated: function() {
                        var t = this.prevChildren,
                            e = this.moveClass || (this.name || "v") + "-move";
                        t.length && this.hasMove(t[0].elm, e) && (t.forEach(ba), t.forEach(ya), t.forEach(xa), this._reflow = document.body.offsetHeight, t.forEach((function(t) {
                            if (t.data.moved) {
                                var i = t.elm,
                                    n = i.style;
                                Ds(i, e), n.transform = n.WebkitTransform = n.transitionDuration = "", i.addEventListener(Ms, i._moveCb = function t(n) {
                                    n && n.target !== i || n && !/transform$/.test(n.propertyName) || (i.removeEventListener(Ms, t), i._moveCb = null, Bs(i, e))
                                })
                            }
                        })))
                    },
                    methods: {
                        hasMove: function(t, e) {
                            if (!Ss) return !1;
                            if (this._hasMove) return this._hasMove;
                            var i = t.cloneNode();
                            t._transitionClasses && t._transitionClasses.forEach((function(t) {
                                ws(i, t)
                            })), _s(i, e), i.style.display = "none", this.$el.appendChild(i);
                            var n = Vs(i);
                            return this.$el.removeChild(i), this._hasMove = n.hasTransform
                        }
                    }
                };

                function ba(t) {
                    t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
                }

                function ya(t) {
                    t.data.newPos = t.elm.getBoundingClientRect()
                }

                function xa(t) {
                    var e = t.data.pos,
                        i = t.data.newPos,
                        n = e.left - i.left,
                        r = e.top - i.top;
                    if (n || r) {
                        t.data.moved = !0;
                        var s = t.elm.style;
                        s.transform = s.WebkitTransform = "translate(" + n + "px," + r + "px)", s.transitionDuration = "0s"
                    }
                }
                var _a = {
                    Transition: ga,
                    TransitionGroup: va
                };
                Cn.config.mustUseProp = zn, Cn.config.isReservedTag = sr, Cn.config.isReservedAttr = Vn, Cn.config.getTagNamespace = ar, Cn.config.isUnknownElement = lr, T(Cn.options.directives, aa), T(Cn.options.components, _a), Cn.prototype.__patch__ = Z ? Xs : P, Cn.prototype.$mount = function(t, e) {
                    return t = t && Z ? hr(t) : void 0, Pi(this, t, e)
                }, Z && setTimeout((function() {
                    W.devtools && ct && ct.emit("init", Cn)
                }), 0), e["a"] = Cn
            }).call(this, i("c8ba"))
        },
        "30ef": function(t, e, i) {
            /*!
             * Chart.js v2.9.3
             * https://www.chartjs.org
             * (c) 2019 Chart.js Contributors
             * Released under the MIT License
             */
            (function(e, n) {
                t.exports = n(function() {
                    try {
                        return i("c32d")
                    } catch (t) {}
                }())
            })(0, (function(t) {
                "use strict";

                function e(t, e) {
                    return e = {
                        exports: {}
                    }, t(e, e.exports), e.exports
                }

                function i(t) {
                    return t && t["default"] || t
                }
                t = t && t.hasOwnProperty("default") ? t["default"] : t;
                var n = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50]
                    },
                    r = e((function(t) {
                        var e = {};
                        for (var i in n) n.hasOwnProperty(i) && (e[n[i]] = i);
                        var r = t.exports = {
                            rgb: {
                                channels: 3,
                                labels: "rgb"
                            },
                            hsl: {
                                channels: 3,
                                labels: "hsl"
                            },
                            hsv: {
                                channels: 3,
                                labels: "hsv"
                            },
                            hwb: {
                                channels: 3,
                                labels: "hwb"
                            },
                            cmyk: {
                                channels: 4,
                                labels: "cmyk"
                            },
                            xyz: {
                                channels: 3,
                                labels: "xyz"
                            },
                            lab: {
                                channels: 3,
                                labels: "lab"
                            },
                            lch: {
                                channels: 3,
                                labels: "lch"
                            },
                            hex: {
                                channels: 1,
                                labels: ["hex"]
                            },
                            keyword: {
                                channels: 1,
                                labels: ["keyword"]
                            },
                            ansi16: {
                                channels: 1,
                                labels: ["ansi16"]
                            },
                            ansi256: {
                                channels: 1,
                                labels: ["ansi256"]
                            },
                            hcg: {
                                channels: 3,
                                labels: ["h", "c", "g"]
                            },
                            apple: {
                                channels: 3,
                                labels: ["r16", "g16", "b16"]
                            },
                            gray: {
                                channels: 1,
                                labels: ["gray"]
                            }
                        };
                        for (var s in r)
                            if (r.hasOwnProperty(s)) {
                                if (!("channels" in r[s])) throw new Error("missing channels property: " + s);
                                if (!("labels" in r[s])) throw new Error("missing channel labels property: " + s);
                                if (r[s].labels.length !== r[s].channels) throw new Error("channel and label counts mismatch: " + s);
                                var a = r[s].channels,
                                    o = r[s].labels;
                                delete r[s].channels, delete r[s].labels, Object.defineProperty(r[s], "channels", {
                                    value: a
                                }), Object.defineProperty(r[s], "labels", {
                                    value: o
                                })
                            }
                        function l(t, e) {
                            return Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2)
                        }
                        r.rgb.hsl = function(t) {
                            var e, i, n, r = t[0] / 255,
                                s = t[1] / 255,
                                a = t[2] / 255,
                                o = Math.min(r, s, a),
                                l = Math.max(r, s, a),
                                c = l - o;
                            return l === o ? e = 0 : r === l ? e = (s - a) / c : s === l ? e = 2 + (a - r) / c : a === l && (e = 4 + (r - s) / c), e = Math.min(60 * e, 360), e < 0 && (e += 360), n = (o + l) / 2, i = l === o ? 0 : n <= .5 ? c / (l + o) : c / (2 - l - o), [e, 100 * i, 100 * n]
                        }, r.rgb.hsv = function(t) {
                            var e, i, n, r, s, a = t[0] / 255,
                                o = t[1] / 255,
                                l = t[2] / 255,
                                c = Math.max(a, o, l),
                                h = c - Math.min(a, o, l),
                                u = function(t) {
                                    return (c - t) / 6 / h + .5
                                };
                            return 0 === h ? r = s = 0 : (s = h / c, e = u(a), i = u(o), n = u(l), a === c ? r = n - i : o === c ? r = 1 / 3 + e - n : l === c && (r = 2 / 3 + i - e), r < 0 ? r += 1 : r > 1 && (r -= 1)), [360 * r, 100 * s, 100 * c]
                        }, r.rgb.hwb = function(t) {
                            var e = t[0],
                                i = t[1],
                                n = t[2],
                                s = r.rgb.hsl(t)[0],
                                a = 1 / 255 * Math.min(e, Math.min(i, n));
                            return n = 1 - 1 / 255 * Math.max(e, Math.max(i, n)), [s, 100 * a, 100 * n]
                        }, r.rgb.cmyk = function(t) {
                            var e, i, n, r, s = t[0] / 255,
                                a = t[1] / 255,
                                o = t[2] / 255;
                            return r = Math.min(1 - s, 1 - a, 1 - o), e = (1 - s - r) / (1 - r) || 0, i = (1 - a - r) / (1 - r) || 0, n = (1 - o - r) / (1 - r) || 0, [100 * e, 100 * i, 100 * n, 100 * r]
                        }, r.rgb.keyword = function(t) {
                            var i = e[t];
                            if (i) return i;
                            var r, s = 1 / 0;
                            for (var a in n)
                                if (n.hasOwnProperty(a)) {
                                    var o = n[a],
                                        c = l(t, o);
                                    c < s && (s = c, r = a)
                                }
                            return r
                        }, r.keyword.rgb = function(t) {
                            return n[t]
                        }, r.rgb.xyz = function(t) {
                            var e = t[0] / 255,
                                i = t[1] / 255,
                                n = t[2] / 255;
                            e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92;
                            var r = .4124 * e + .3576 * i + .1805 * n,
                                s = .2126 * e + .7152 * i + .0722 * n,
                                a = .0193 * e + .1192 * i + .9505 * n;
                            return [100 * r, 100 * s, 100 * a]
                        }, r.rgb.lab = function(t) {
                            var e, i, n, s = r.rgb.xyz(t),
                                a = s[0],
                                o = s[1],
                                l = s[2];
                            return a /= 95.047, o /= 100, l /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, e = 116 * o - 16, i = 500 * (a - o), n = 200 * (o - l), [e, i, n]
                        }, r.hsl.rgb = function(t) {
                            var e, i, n, r, s, a = t[0] / 360,
                                o = t[1] / 100,
                                l = t[2] / 100;
                            if (0 === o) return s = 255 * l, [s, s, s];
                            i = l < .5 ? l * (1 + o) : l + o - l * o, e = 2 * l - i, r = [0, 0, 0];
                            for (var c = 0; c < 3; c++) n = a + 1 / 3 * -(c - 1), n < 0 && n++, n > 1 && n--, s = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, r[c] = 255 * s;
                            return r
                        }, r.hsl.hsv = function(t) {
                            var e, i, n = t[0],
                                r = t[1] / 100,
                                s = t[2] / 100,
                                a = r,
                                o = Math.max(s, .01);
                            return s *= 2, r *= s <= 1 ? s : 2 - s, a *= o <= 1 ? o : 2 - o, i = (s + r) / 2, e = 0 === s ? 2 * a / (o + a) : 2 * r / (s + r), [n, 100 * e, 100 * i]
                        }, r.hsv.rgb = function(t) {
                            var e = t[0] / 60,
                                i = t[1] / 100,
                                n = t[2] / 100,
                                r = Math.floor(e) % 6,
                                s = e - Math.floor(e),
                                a = 255 * n * (1 - i),
                                o = 255 * n * (1 - i * s),
                                l = 255 * n * (1 - i * (1 - s));
                            switch (n *= 255, r) {
                                case 0:
                                    return [n, l, a];
                                case 1:
                                    return [o, n, a];
                                case 2:
                                    return [a, n, l];
                                case 3:
                                    return [a, o, n];
                                case 4:
                                    return [l, a, n];
                                case 5:
                                    return [n, a, o]
                            }
                        }, r.hsv.hsl = function(t) {
                            var e, i, n, r = t[0],
                                s = t[1] / 100,
                                a = t[2] / 100,
                                o = Math.max(a, .01);
                            return n = (2 - s) * a, e = (2 - s) * o, i = s * o, i /= e <= 1 ? e : 2 - e, i = i || 0, n /= 2, [r, 100 * i, 100 * n]
                        }, r.hwb.rgb = function(t) {
                            var e, i, n, r, s, a, o, l = t[0] / 360,
                                c = t[1] / 100,
                                h = t[2] / 100,
                                u = c + h;
                            switch (u > 1 && (c /= u, h /= u), e = Math.floor(6 * l), i = 1 - h, n = 6 * l - e, 0 !== (1 & e) && (n = 1 - n), r = c + n * (i - c), e) {
                                default:
                                    case 6:
                                    case 0:
                                    s = i,
                                a = r,
                                o = c;
                                break;
                                case 1:
                                        s = r,
                                    a = i,
                                    o = c;
                                    break;
                                case 2:
                                        s = c,
                                    a = i,
                                    o = r;
                                    break;
                                case 3:
                                        s = c,
                                    a = r,
                                    o = i;
                                    break;
                                case 4:
                                        s = r,
                                    a = c,
                                    o = i;
                                    break;
                                case 5:
                                        s = i,
                                    a = c,
                                    o = r;
                                    break
                            }
                            return [255 * s, 255 * a, 255 * o]
                        }, r.cmyk.rgb = function(t) {
                            var e, i, n, r = t[0] / 100,
                                s = t[1] / 100,
                                a = t[2] / 100,
                                o = t[3] / 100;
                            return e = 1 - Math.min(1, r * (1 - o) + o), i = 1 - Math.min(1, s * (1 - o) + o), n = 1 - Math.min(1, a * (1 - o) + o), [255 * e, 255 * i, 255 * n]
                        }, r.xyz.rgb = function(t) {
                            var e, i, n, r = t[0] / 100,
                                s = t[1] / 100,
                                a = t[2] / 100;
                            return e = 3.2406 * r + -1.5372 * s + -.4986 * a, i = -.9689 * r + 1.8758 * s + .0415 * a, n = .0557 * r + -.204 * s + 1.057 * a, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, e = Math.min(Math.max(0, e), 1), i = Math.min(Math.max(0, i), 1), n = Math.min(Math.max(0, n), 1), [255 * e, 255 * i, 255 * n]
                        }, r.xyz.lab = function(t) {
                            var e, i, n, r = t[0],
                                s = t[1],
                                a = t[2];
                            return r /= 95.047, s /= 100, a /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, e = 116 * s - 16, i = 500 * (r - s), n = 200 * (s - a), [e, i, n]
                        }, r.lab.xyz = function(t) {
                            var e, i, n, r = t[0],
                                s = t[1],
                                a = t[2];
                            i = (r + 16) / 116, e = s / 500 + i, n = i - a / 200;
                            var o = Math.pow(i, 3),
                                l = Math.pow(e, 3),
                                c = Math.pow(n, 3);
                            return i = o > .008856 ? o : (i - 16 / 116) / 7.787, e = l > .008856 ? l : (e - 16 / 116) / 7.787, n = c > .008856 ? c : (n - 16 / 116) / 7.787, e *= 95.047, i *= 100, n *= 108.883, [e, i, n]
                        }, r.lab.lch = function(t) {
                            var e, i, n, r = t[0],
                                s = t[1],
                                a = t[2];
                            return e = Math.atan2(a, s), i = 360 * e / 2 / Math.PI, i < 0 && (i += 360), n = Math.sqrt(s * s + a * a), [r, n, i]
                        }, r.lch.lab = function(t) {
                            var e, i, n, r = t[0],
                                s = t[1],
                                a = t[2];
                            return n = a / 360 * 2 * Math.PI, e = s * Math.cos(n), i = s * Math.sin(n), [r, e, i]
                        }, r.rgb.ansi16 = function(t) {
                            var e = t[0],
                                i = t[1],
                                n = t[2],
                                s = 1 in arguments ? arguments[1] : r.rgb.hsv(t)[2];
                            if (s = Math.round(s / 50), 0 === s) return 30;
                            var a = 30 + (Math.round(n / 255) << 2 | Math.round(i / 255) << 1 | Math.round(e / 255));
                            return 2 === s && (a += 60), a
                        }, r.hsv.ansi16 = function(t) {
                            return r.rgb.ansi16(r.hsv.rgb(t), t[2])
                        }, r.rgb.ansi256 = function(t) {
                            var e = t[0],
                                i = t[1],
                                n = t[2];
                            if (e === i && i === n) return e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232;
                            var r = 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(i / 255 * 5) + Math.round(n / 255 * 5);
                            return r
                        }, r.ansi16.rgb = function(t) {
                            var e = t % 10;
                            if (0 === e || 7 === e) return t > 50 && (e += 3.5), e = e / 10.5 * 255, [e, e, e];
                            var i = .5 * (1 + ~~(t > 50)),
                                n = (1 & e) * i * 255,
                                r = (e >> 1 & 1) * i * 255,
                                s = (e >> 2 & 1) * i * 255;
                            return [n, r, s]
                        }, r.ansi256.rgb = function(t) {
                            if (t >= 232) {
                                var e = 10 * (t - 232) + 8;
                                return [e, e, e]
                            }
                            var i;
                            t -= 16;
                            var n = Math.floor(t / 36) / 5 * 255,
                                r = Math.floor((i = t % 36) / 6) / 5 * 255,
                                s = i % 6 / 5 * 255;
                            return [n, r, s]
                        }, r.rgb.hex = function(t) {
                            var e = ((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2])),
                                i = e.toString(16).toUpperCase();
                            return "000000".substring(i.length) + i
                        }, r.hex.rgb = function(t) {
                            var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                            if (!e) return [0, 0, 0];
                            var i = e[0];
                            3 === e[0].length && (i = i.split("").map((function(t) {
                                return t + t
                            })).join(""));
                            var n = parseInt(i, 16),
                                r = n >> 16 & 255,
                                s = n >> 8 & 255,
                                a = 255 & n;
                            return [r, s, a]
                        }, r.rgb.hcg = function(t) {
                            var e, i, n = t[0] / 255,
                                r = t[1] / 255,
                                s = t[2] / 255,
                                a = Math.max(Math.max(n, r), s),
                                o = Math.min(Math.min(n, r), s),
                                l = a - o;
                            return e = l < 1 ? o / (1 - l) : 0, i = l <= 0 ? 0 : a === n ? (r - s) / l % 6 : a === r ? 2 + (s - n) / l : 4 + (n - r) / l + 4, i /= 6, i %= 1, [360 * i, 100 * l, 100 * e]
                        }, r.hsl.hcg = function(t) {
                            var e = t[1] / 100,
                                i = t[2] / 100,
                                n = 1,
                                r = 0;
                            return n = i < .5 ? 2 * e * i : 2 * e * (1 - i), n < 1 && (r = (i - .5 * n) / (1 - n)), [t[0], 100 * n, 100 * r]
                        }, r.hsv.hcg = function(t) {
                            var e = t[1] / 100,
                                i = t[2] / 100,
                                n = e * i,
                                r = 0;
                            return n < 1 && (r = (i - n) / (1 - n)), [t[0], 100 * n, 100 * r]
                        }, r.hcg.rgb = function(t) {
                            var e = t[0] / 360,
                                i = t[1] / 100,
                                n = t[2] / 100;
                            if (0 === i) return [255 * n, 255 * n, 255 * n];
                            var r = [0, 0, 0],
                                s = e % 1 * 6,
                                a = s % 1,
                                o = 1 - a,
                                l = 0;
                            switch (Math.floor(s)) {
                                case 0:
                                    r[0] = 1, r[1] = a, r[2] = 0;
                                    break;
                                case 1:
                                    r[0] = o, r[1] = 1, r[2] = 0;
                                    break;
                                case 2:
                                    r[0] = 0, r[1] = 1, r[2] = a;
                                    break;
                                case 3:
                                    r[0] = 0, r[1] = o, r[2] = 1;
                                    break;
                                case 4:
                                    r[0] = a, r[1] = 0, r[2] = 1;
                                    break;
                                default:
                                    r[0] = 1, r[1] = 0, r[2] = o
                            }
                            return l = (1 - i) * n, [255 * (i * r[0] + l), 255 * (i * r[1] + l), 255 * (i * r[2] + l)]
                        }, r.hcg.hsv = function(t) {
                            var e = t[1] / 100,
                                i = t[2] / 100,
                                n = e + i * (1 - e),
                                r = 0;
                            return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n]
                        }, r.hcg.hsl = function(t) {
                            var e = t[1] / 100,
                                i = t[2] / 100,
                                n = i * (1 - e) + .5 * e,
                                r = 0;
                            return n > 0 && n < .5 ? r = e / (2 * n) : n >= .5 && n < 1 && (r = e / (2 * (1 - n))), [t[0], 100 * r, 100 * n]
                        }, r.hcg.hwb = function(t) {
                            var e = t[1] / 100,
                                i = t[2] / 100,
                                n = e + i * (1 - e);
                            return [t[0], 100 * (n - e), 100 * (1 - n)]
                        }, r.hwb.hcg = function(t) {
                            var e = t[1] / 100,
                                i = t[2] / 100,
                                n = 1 - i,
                                r = n - e,
                                s = 0;
                            return r < 1 && (s = (n - r) / (1 - r)), [t[0], 100 * r, 100 * s]
                        }, r.apple.rgb = function(t) {
                            return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
                        }, r.rgb.apple = function(t) {
                            return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
                        }, r.gray.rgb = function(t) {
                            return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
                        }, r.gray.hsl = r.gray.hsv = function(t) {
                            return [0, 0, t[0]]
                        }, r.gray.hwb = function(t) {
                            return [0, 100, t[0]]
                        }, r.gray.cmyk = function(t) {
                            return [0, 0, 0, t[0]]
                        }, r.gray.lab = function(t) {
                            return [t[0], 0, 0]
                        }, r.gray.hex = function(t) {
                            var e = 255 & Math.round(t[0] / 100 * 255),
                                i = (e << 16) + (e << 8) + e,
                                n = i.toString(16).toUpperCase();
                            return "000000".substring(n.length) + n
                        }, r.rgb.gray = function(t) {
                            var e = (t[0] + t[1] + t[2]) / 3;
                            return [e / 255 * 100]
                        }
                    }));
                r.rgb, r.hsl, r.hsv, r.hwb, r.cmyk, r.xyz, r.lab, r.lch, r.hex, r.keyword, r.ansi16, r.ansi256, r.hcg, r.apple, r.gray;

                function s() {
                    for (var t = {}, e = Object.keys(r), i = e.length, n = 0; n < i; n++) t[e[n]] = {
                        distance: -1,
                        parent: null
                    };
                    return t
                }

                function a(t) {
                    var e = s(),
                        i = [t];
                    e[t].distance = 0;
                    while (i.length)
                        for (var n = i.pop(), a = Object.keys(r[n]), o = a.length, l = 0; l < o; l++) {
                            var c = a[l],
                                h = e[c]; - 1 === h.distance && (h.distance = e[n].distance + 1, h.parent = n, i.unshift(c))
                        }
                    return e
                }

                function o(t, e) {
                    return function(i) {
                        return e(t(i))
                    }
                }

                function l(t, e) {
                    var i = [e[t].parent, t],
                        n = r[e[t].parent][t],
                        s = e[t].parent;
                    while (e[s].parent) i.unshift(e[s].parent), n = o(r[e[s].parent][s], n), s = e[s].parent;
                    return n.conversion = i, n
                }
                var c = function(t) {
                        for (var e = a(t), i = {}, n = Object.keys(e), r = n.length, s = 0; s < r; s++) {
                            var o = n[s],
                                c = e[o];
                            null !== c.parent && (i[o] = l(o, e))
                        }
                        return i
                    },
                    h = {},
                    u = Object.keys(r);

                function d(t) {
                    var e = function(e) {
                        return void 0 === e || null === e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
                    };
                    return "conversion" in t && (e.conversion = t.conversion), e
                }

                function p(t) {
                    var e = function(e) {
                        if (void 0 === e || null === e) return e;
                        arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                        var i = t(e);
                        if ("object" === typeof i)
                            for (var n = i.length, r = 0; r < n; r++) i[r] = Math.round(i[r]);
                        return i
                    };
                    return "conversion" in t && (e.conversion = t.conversion), e
                }
                u.forEach((function(t) {
                    h[t] = {}, Object.defineProperty(h[t], "channels", {
                        value: r[t].channels
                    }), Object.defineProperty(h[t], "labels", {
                        value: r[t].labels
                    });
                    var e = c(t),
                        i = Object.keys(e);
                    i.forEach((function(i) {
                        var n = e[i];
                        h[t][i] = p(n), h[t][i].raw = d(n)
                    }))
                }));
                var f = h,
                    g = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50]
                    },
                    m = {
                        getRgba: v,
                        getHsla: b,
                        getRgb: x,
                        getHsl: _,
                        getHwb: y,
                        getAlpha: w,
                        hexString: C,
                        rgbString: k,
                        rgbaString: S,
                        percentString: $,
                        percentaString: A,
                        hslString: I,
                        hslaString: M,
                        hwbString: O,
                        keyword: T
                    };

                function v(t) {
                    if (t) {
                        var e = /^#([a-fA-F0-9]{3,4})$/i,
                            i = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
                            n = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                            r = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                            s = /(\w+)/,
                            a = [0, 0, 0],
                            o = 1,
                            l = t.match(e),
                            c = "";
                        if (l) {
                            l = l[1], c = l[3];
                            for (var h = 0; h < a.length; h++) a[h] = parseInt(l[h] + l[h], 16);
                            c && (o = Math.round(parseInt(c + c, 16) / 255 * 100) / 100)
                        } else if (l = t.match(i)) {
                            c = l[2], l = l[1];
                            for (h = 0; h < a.length; h++) a[h] = parseInt(l.slice(2 * h, 2 * h + 2), 16);
                            c && (o = Math.round(parseInt(c, 16) / 255 * 100) / 100)
                        } else if (l = t.match(n)) {
                            for (h = 0; h < a.length; h++) a[h] = parseInt(l[h + 1]);
                            o = parseFloat(l[4])
                        } else if (l = t.match(r)) {
                            for (h = 0; h < a.length; h++) a[h] = Math.round(2.55 * parseFloat(l[h + 1]));
                            o = parseFloat(l[4])
                        } else if (l = t.match(s)) {
                            if ("transparent" == l[1]) return [0, 0, 0, 0];
                            if (a = g[l[1]], !a) return
                        }
                        for (h = 0; h < a.length; h++) a[h] = L(a[h], 0, 255);
                        return o = o || 0 == o ? L(o, 0, 1) : 1, a[3] = o, a
                    }
                }

                function b(t) {
                    if (t) {
                        var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                            i = t.match(e);
                        if (i) {
                            var n = parseFloat(i[4]),
                                r = L(parseInt(i[1]), 0, 360),
                                s = L(parseFloat(i[2]), 0, 100),
                                a = L(parseFloat(i[3]), 0, 100),
                                o = L(isNaN(n) ? 1 : n, 0, 1);
                            return [r, s, a, o]
                        }
                    }
                }

                function y(t) {
                    if (t) {
                        var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                            i = t.match(e);
                        if (i) {
                            var n = parseFloat(i[4]),
                                r = L(parseInt(i[1]), 0, 360),
                                s = L(parseFloat(i[2]), 0, 100),
                                a = L(parseFloat(i[3]), 0, 100),
                                o = L(isNaN(n) ? 1 : n, 0, 1);
                            return [r, s, a, o]
                        }
                    }
                }

                function x(t) {
                    var e = v(t);
                    return e && e.slice(0, 3)
                }

                function _(t) {
                    var e = b(t);
                    return e && e.slice(0, 3)
                }

                function w(t) {
                    var e = v(t);
                    return e || (e = b(t)) || (e = y(t)) ? e[3] : void 0
                }

                function C(t, e) {
                    e = void 0 !== e && 3 === t.length ? e : t[3];
                    return "#" + P(t[0]) + P(t[1]) + P(t[2]) + (e >= 0 && e < 1 ? P(Math.round(255 * e)) : "")
                }

                function k(t, e) {
                    return e < 1 || t[3] && t[3] < 1 ? S(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                }

                function S(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
                }

                function $(t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return A(t, e);
                    var i = Math.round(t[0] / 255 * 100),
                        n = Math.round(t[1] / 255 * 100),
                        r = Math.round(t[2] / 255 * 100);
                    return "rgb(" + i + "%, " + n + "%, " + r + "%)"
                }

                function A(t, e) {
                    var i = Math.round(t[0] / 255 * 100),
                        n = Math.round(t[1] / 255 * 100),
                        r = Math.round(t[2] / 255 * 100);
                    return "rgba(" + i + "%, " + n + "%, " + r + "%, " + (e || t[3] || 1) + ")"
                }

                function I(t, e) {
                    return e < 1 || t[3] && t[3] < 1 ? M(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                }

                function M(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
                }

                function O(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                }

                function T(t) {
                    return D[t.slice(0, 3)]
                }

                function L(t, e, i) {
                    return Math.min(Math.max(e, t), i)
                }

                function P(t) {
                    var e = t.toString(16).toUpperCase();
                    return e.length < 2 ? "0" + e : e
                }
                var D = {};
                for (var B in g) D[g[B]] = B;
                var E = function(t) {
                    return t instanceof E ? t : this instanceof E ? (this.valid = !1, this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    }, void("string" === typeof t ? (e = m.getRgba(t), e ? this.setValues("rgb", e) : (e = m.getHsla(t)) ? this.setValues("hsl", e) : (e = m.getHwb(t)) && this.setValues("hwb", e)) : "object" === typeof t && (e = t, void 0 !== e.r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new E(t);
                    var e
                };
                E.prototype = {
                    isValid: function() {
                        return this.valid
                    },
                    rgb: function() {
                        return this.setSpace("rgb", arguments)
                    },
                    hsl: function() {
                        return this.setSpace("hsl", arguments)
                    },
                    hsv: function() {
                        return this.setSpace("hsv", arguments)
                    },
                    hwb: function() {
                        return this.setSpace("hwb", arguments)
                    },
                    cmyk: function() {
                        return this.setSpace("cmyk", arguments)
                    },
                    rgbArray: function() {
                        return this.values.rgb
                    },
                    hslArray: function() {
                        return this.values.hsl
                    },
                    hsvArray: function() {
                        return this.values.hsv
                    },
                    hwbArray: function() {
                        var t = this.values;
                        return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                    },
                    cmykArray: function() {
                        return this.values.cmyk
                    },
                    rgbaArray: function() {
                        var t = this.values;
                        return t.rgb.concat([t.alpha])
                    },
                    hslaArray: function() {
                        var t = this.values;
                        return t.hsl.concat([t.alpha])
                    },
                    alpha: function(t) {
                        return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                    },
                    red: function(t) {
                        return this.setChannel("rgb", 0, t)
                    },
                    green: function(t) {
                        return this.setChannel("rgb", 1, t)
                    },
                    blue: function(t) {
                        return this.setChannel("rgb", 2, t)
                    },
                    hue: function(t) {
                        return t && (t %= 360, t = t < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                    },
                    saturation: function(t) {
                        return this.setChannel("hsl", 1, t)
                    },
                    lightness: function(t) {
                        return this.setChannel("hsl", 2, t)
                    },
                    saturationv: function(t) {
                        return this.setChannel("hsv", 1, t)
                    },
                    whiteness: function(t) {
                        return this.setChannel("hwb", 1, t)
                    },
                    blackness: function(t) {
                        return this.setChannel("hwb", 2, t)
                    },
                    value: function(t) {
                        return this.setChannel("hsv", 2, t)
                    },
                    cyan: function(t) {
                        return this.setChannel("cmyk", 0, t)
                    },
                    magenta: function(t) {
                        return this.setChannel("cmyk", 1, t)
                    },
                    yellow: function(t) {
                        return this.setChannel("cmyk", 2, t)
                    },
                    black: function(t) {
                        return this.setChannel("cmyk", 3, t)
                    },
                    hexString: function() {
                        return m.hexString(this.values.rgb)
                    },
                    rgbString: function() {
                        return m.rgbString(this.values.rgb, this.values.alpha)
                    },
                    rgbaString: function() {
                        return m.rgbaString(this.values.rgb, this.values.alpha)
                    },
                    percentString: function() {
                        return m.percentString(this.values.rgb, this.values.alpha)
                    },
                    hslString: function() {
                        return m.hslString(this.values.hsl, this.values.alpha)
                    },
                    hslaString: function() {
                        return m.hslaString(this.values.hsl, this.values.alpha)
                    },
                    hwbString: function() {
                        return m.hwbString(this.values.hwb, this.values.alpha)
                    },
                    keyword: function() {
                        return m.keyword(this.values.rgb, this.values.alpha)
                    },
                    rgbNumber: function() {
                        var t = this.values.rgb;
                        return t[0] << 16 | t[1] << 8 | t[2]
                    },
                    luminosity: function() {
                        for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                            var n = t[i] / 255;
                            e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                        }
                        return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                    },
                    contrast: function(t) {
                        var e = this.luminosity(),
                            i = t.luminosity();
                        return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
                    },
                    level: function(t) {
                        var e = this.contrast(t);
                        return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                    },
                    dark: function() {
                        var t = this.values.rgb,
                            e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
                        return e < 128
                    },
                    light: function() {
                        return !this.dark()
                    },
                    negate: function() {
                        for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                        return this.setValues("rgb", t), this
                    },
                    lighten: function(t) {
                        var e = this.values.hsl;
                        return e[2] += e[2] * t, this.setValues("hsl", e), this
                    },
                    darken: function(t) {
                        var e = this.values.hsl;
                        return e[2] -= e[2] * t, this.setValues("hsl", e), this
                    },
                    saturate: function(t) {
                        var e = this.values.hsl;
                        return e[1] += e[1] * t, this.setValues("hsl", e), this
                    },
                    desaturate: function(t) {
                        var e = this.values.hsl;
                        return e[1] -= e[1] * t, this.setValues("hsl", e), this
                    },
                    whiten: function(t) {
                        var e = this.values.hwb;
                        return e[1] += e[1] * t, this.setValues("hwb", e), this
                    },
                    blacken: function(t) {
                        var e = this.values.hwb;
                        return e[2] += e[2] * t, this.setValues("hwb", e), this
                    },
                    greyscale: function() {
                        var t = this.values.rgb,
                            e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                        return this.setValues("rgb", [e, e, e]), this
                    },
                    clearer: function(t) {
                        var e = this.values.alpha;
                        return this.setValues("alpha", e - e * t), this
                    },
                    opaquer: function(t) {
                        var e = this.values.alpha;
                        return this.setValues("alpha", e + e * t), this
                    },
                    rotate: function(t) {
                        var e = this.values.hsl,
                            i = (e[0] + t) % 360;
                        return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
                    },
                    mix: function(t, e) {
                        var i = this,
                            n = t,
                            r = void 0 === e ? .5 : e,
                            s = 2 * r - 1,
                            a = i.alpha() - n.alpha(),
                            o = ((s * a === -1 ? s : (s + a) / (1 + s * a)) + 1) / 2,
                            l = 1 - o;
                        return this.rgb(o * i.red() + l * n.red(), o * i.green() + l * n.green(), o * i.blue() + l * n.blue()).alpha(i.alpha() * r + n.alpha() * (1 - r))
                    },
                    toJSON: function() {
                        return this.rgb()
                    },
                    clone: function() {
                        var t, e, i = new E,
                            n = this.values,
                            r = i.values;
                        for (var s in n) n.hasOwnProperty(s) && (t = n[s], e = {}.toString.call(t), "[object Array]" === e ? r[s] = t.slice(0) : "[object Number]" === e ? r[s] = t : console.error("unexpected color value:", t));
                        return i
                    }
                }, E.prototype.spaces = {
                    rgb: ["red", "green", "blue"],
                    hsl: ["hue", "saturation", "lightness"],
                    hsv: ["hue", "saturation", "value"],
                    hwb: ["hue", "whiteness", "blackness"],
                    cmyk: ["cyan", "magenta", "yellow", "black"]
                }, E.prototype.maxes = {
                    rgb: [255, 255, 255],
                    hsl: [360, 100, 100],
                    hsv: [360, 100, 100],
                    hwb: [360, 100, 100],
                    cmyk: [100, 100, 100, 100]
                }, E.prototype.getValues = function(t) {
                    for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                    return 1 !== e.alpha && (i.a = e.alpha), i
                }, E.prototype.setValues = function(t, e) {
                    var i, n, r = this.values,
                        s = this.spaces,
                        a = this.maxes,
                        o = 1;
                    if (this.valid = !0, "alpha" === t) o = e;
                    else if (e.length) r[t] = e.slice(0, t.length), o = e[t.length];
                    else if (void 0 !== e[t.charAt(0)]) {
                        for (i = 0; i < t.length; i++) r[t][i] = e[t.charAt(i)];
                        o = e.a
                    } else if (void 0 !== e[s[t][0]]) {
                        var l = s[t];
                        for (i = 0; i < t.length; i++) r[t][i] = e[l[i]];
                        o = e.alpha
                    }
                    if (r.alpha = Math.max(0, Math.min(1, void 0 === o ? r.alpha : o)), "alpha" === t) return !1;
                    for (i = 0; i < t.length; i++) n = Math.max(0, Math.min(a[t][i], r[t][i])), r[t][i] = Math.round(n);
                    for (var c in s) c !== t && (r[c] = f[t][c](r[t]));
                    return !0
                }, E.prototype.setSpace = function(t, e) {
                    var i = e[0];
                    return void 0 === i ? this.getValues(t) : ("number" === typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
                }, E.prototype.setChannel = function(t, e, i) {
                    var n = this.values[t];
                    return void 0 === i ? n[e] : (i === n[e] || (n[e] = i, this.setValues(t, n)), this)
                }, "undefined" !== typeof window && (window.Color = E);
                var F = E,
                    V = {
                        noop: function() {},
                        uid: function() {
                            var t = 0;
                            return function() {
                                return t++
                            }
                        }(),
                        isNullOrUndef: function(t) {
                            return null === t || "undefined" === typeof t
                        },
                        isArray: function(t) {
                            if (Array.isArray && Array.isArray(t)) return !0;
                            var e = Object.prototype.toString.call(t);
                            return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
                        },
                        isObject: function(t) {
                            return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                        },
                        isFinite: function(t) {
                            return ("number" === typeof t || t instanceof Number) && isFinite(t)
                        },
                        valueOrDefault: function(t, e) {
                            return "undefined" === typeof t ? e : t
                        },
                        valueAtIndexOrDefault: function(t, e, i) {
                            return V.valueOrDefault(V.isArray(t) ? t[e] : t, i)
                        },
                        callback: function(t, e, i) {
                            if (t && "function" === typeof t.call) return t.apply(i, e)
                        },
                        each: function(t, e, i, n) {
                            var r, s, a;
                            if (V.isArray(t))
                                if (s = t.length, n)
                                    for (r = s - 1; r >= 0; r--) e.call(i, t[r], r);
                                else
                                    for (r = 0; r < s; r++) e.call(i, t[r], r);
                            else if (V.isObject(t))
                                for (a = Object.keys(t), s = a.length, r = 0; r < s; r++) e.call(i, t[a[r]], a[r])
                        },
                        arrayEquals: function(t, e) {
                            var i, n, r, s;
                            if (!t || !e || t.length !== e.length) return !1;
                            for (i = 0, n = t.length; i < n; ++i)
                                if (r = t[i], s = e[i], r instanceof Array && s instanceof Array) {
                                    if (!V.arrayEquals(r, s)) return !1
                                } else if (r !== s) return !1;
                            return !0
                        },
                        clone: function(t) {
                            if (V.isArray(t)) return t.map(V.clone);
                            if (V.isObject(t)) {
                                for (var e = {}, i = Object.keys(t), n = i.length, r = 0; r < n; ++r) e[i[r]] = V.clone(t[i[r]]);
                                return e
                            }
                            return t
                        },
                        _merger: function(t, e, i, n) {
                            var r = e[t],
                                s = i[t];
                            V.isObject(r) && V.isObject(s) ? V.merge(r, s, n) : e[t] = V.clone(s)
                        },
                        _mergerIf: function(t, e, i) {
                            var n = e[t],
                                r = i[t];
                            V.isObject(n) && V.isObject(r) ? V.mergeIf(n, r) : e.hasOwnProperty(t) || (e[t] = V.clone(r))
                        },
                        merge: function(t, e, i) {
                            var n, r, s, a, o, l = V.isArray(e) ? e : [e],
                                c = l.length;
                            if (!V.isObject(t)) return t;
                            for (i = i || {}, n = i.merger || V._merger, r = 0; r < c; ++r)
                                if (e = l[r], V.isObject(e))
                                    for (s = Object.keys(e), o = 0, a = s.length; o < a; ++o) n(s[o], t, e, i);
                            return t
                        },
                        mergeIf: function(t, e) {
                            return V.merge(t, e, {
                                merger: V._mergerIf
                            })
                        },
                        extend: Object.assign || function(t) {
                            return V.merge(t, [].slice.call(arguments, 1), {
                                merger: function(t, e, i) {
                                    e[t] = i[t]
                                }
                            })
                        },
                        inherits: function(t) {
                            var e = this,
                                i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                                    return e.apply(this, arguments)
                                },
                                n = function() {
                                    this.constructor = i
                                };
                            return n.prototype = e.prototype, i.prototype = new n, i.extend = V.inherits, t && V.extend(i.prototype, t), i.__super__ = e.prototype, i
                        },
                        _deprecated: function(t, e, i, n) {
                            void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + n + '" instead')
                        }
                    },
                    N = V;
                V.callCallback = V.callback, V.indexOf = function(t, e, i) {
                    return Array.prototype.indexOf.call(t, e, i)
                }, V.getValueOrDefault = V.valueOrDefault, V.getValueAtIndexOrDefault = V.valueAtIndexOrDefault;
                var z = {
                        linear: function(t) {
                            return t
                        },
                        easeInQuad: function(t) {
                            return t * t
                        },
                        easeOutQuad: function(t) {
                            return -t * (t - 2)
                        },
                        easeInOutQuad: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                        },
                        easeInCubic: function(t) {
                            return t * t * t
                        },
                        easeOutCubic: function(t) {
                            return (t -= 1) * t * t + 1
                        },
                        easeInOutCubic: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                        },
                        easeInQuart: function(t) {
                            return t * t * t * t
                        },
                        easeOutQuart: function(t) {
                            return -((t -= 1) * t * t * t - 1)
                        },
                        easeInOutQuart: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                        },
                        easeInQuint: function(t) {
                            return t * t * t * t * t
                        },
                        easeOutQuint: function(t) {
                            return (t -= 1) * t * t * t * t + 1
                        },
                        easeInOutQuint: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                        },
                        easeInSine: function(t) {
                            return 1 - Math.cos(t * (Math.PI / 2))
                        },
                        easeOutSine: function(t) {
                            return Math.sin(t * (Math.PI / 2))
                        },
                        easeInOutSine: function(t) {
                            return -.5 * (Math.cos(Math.PI * t) - 1)
                        },
                        easeInExpo: function(t) {
                            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                        },
                        easeOutExpo: function(t) {
                            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                        },
                        easeInOutExpo: function(t) {
                            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                        },
                        easeInCirc: function(t) {
                            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                        },
                        easeOutCirc: function(t) {
                            return Math.sqrt(1 - (t -= 1) * t)
                        },
                        easeInOutCirc: function(t) {
                            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        },
                        easeInElastic: function(t) {
                            var e = 1.70158,
                                i = 0,
                                n = 1;
                            return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
                        },
                        easeOutElastic: function(t) {
                            var e = 1.70158,
                                i = 0,
                                n = 1;
                            return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
                        },
                        easeInOutElastic: function(t) {
                            var e = 1.70158,
                                i = 0,
                                n = 1;
                            return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
                        },
                        easeInBack: function(t) {
                            var e = 1.70158;
                            return t * t * ((e + 1) * t - e)
                        },
                        easeOutBack: function(t) {
                            var e = 1.70158;
                            return (t -= 1) * t * ((e + 1) * t + e) + 1
                        },
                        easeInOutBack: function(t) {
                            var e = 1.70158;
                            return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                        },
                        easeInBounce: function(t) {
                            return 1 - z.easeOutBounce(1 - t)
                        },
                        easeOutBounce: function(t) {
                            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        },
                        easeInOutBounce: function(t) {
                            return t < .5 ? .5 * z.easeInBounce(2 * t) : .5 * z.easeOutBounce(2 * t - 1) + .5
                        }
                    },
                    R = {
                        effects: z
                    };
                N.easingEffects = z;
                var W = Math.PI,
                    H = W / 180,
                    j = 2 * W,
                    q = W / 2,
                    U = W / 4,
                    Y = 2 * W / 3,
                    G = {
                        clear: function(t) {
                            t.ctx.clearRect(0, 0, t.width, t.height)
                        },
                        roundedRect: function(t, e, i, n, r, s) {
                            if (s) {
                                var a = Math.min(s, r / 2, n / 2),
                                    o = e + a,
                                    l = i + a,
                                    c = e + n - a,
                                    h = i + r - a;
                                t.moveTo(e, l), o < c && l < h ? (t.arc(o, l, a, -W, -q), t.arc(c, l, a, -q, 0), t.arc(c, h, a, 0, q), t.arc(o, h, a, q, W)) : o < c ? (t.moveTo(o, i), t.arc(c, l, a, -q, q), t.arc(o, l, a, q, W + q)) : l < h ? (t.arc(o, l, a, -W, 0), t.arc(o, h, a, 0, W)) : t.arc(o, l, a, -W, W), t.closePath(), t.moveTo(e, i)
                            } else t.rect(e, i, n, r)
                        },
                        drawPoint: function(t, e, i, n, r, s) {
                            var a, o, l, c, h, u = (s || 0) * H;
                            if (e && "object" === typeof e && (a = e.toString(), "[object HTMLImageElement]" === a || "[object HTMLCanvasElement]" === a)) return t.save(), t.translate(n, r), t.rotate(u), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();
                            if (!(isNaN(i) || i <= 0)) {
                                switch (t.beginPath(), e) {
                                    default: t.arc(n, r, i, 0, j),
                                    t.closePath();
                                    break;
                                    case "triangle":
                                            t.moveTo(n + Math.sin(u) * i, r - Math.cos(u) * i),
                                        u += Y,
                                        t.lineTo(n + Math.sin(u) * i, r - Math.cos(u) * i),
                                        u += Y,
                                        t.lineTo(n + Math.sin(u) * i, r - Math.cos(u) * i),
                                        t.closePath();
                                        break;
                                    case "rectRounded":
                                            h = .516 * i,
                                        c = i - h,
                                        o = Math.cos(u + U) * c,
                                        l = Math.sin(u + U) * c,
                                        t.arc(n - o, r - l, h, u - W, u - q),
                                        t.arc(n + l, r - o, h, u - q, u),
                                        t.arc(n + o, r + l, h, u, u + q),
                                        t.arc(n - l, r + o, h, u + q, u + W),
                                        t.closePath();
                                        break;
                                    case "rect":
                                            if (!s) {
                                            c = Math.SQRT1_2 * i, t.rect(n - c, r - c, 2 * c, 2 * c);
                                            break
                                        }u += U;
                                    case "rectRot":
                                            o = Math.cos(u) * i,
                                        l = Math.sin(u) * i,
                                        t.moveTo(n - o, r - l),
                                        t.lineTo(n + l, r - o),
                                        t.lineTo(n + o, r + l),
                                        t.lineTo(n - l, r + o),
                                        t.closePath();
                                        break;
                                    case "crossRot":
                                            u += U;
                                    case "cross":
                                            o = Math.cos(u) * i,
                                        l = Math.sin(u) * i,
                                        t.moveTo(n - o, r - l),
                                        t.lineTo(n + o, r + l),
                                        t.moveTo(n + l, r - o),
                                        t.lineTo(n - l, r + o);
                                        break;
                                    case "star":
                                            o = Math.cos(u) * i,
                                        l = Math.sin(u) * i,
                                        t.moveTo(n - o, r - l),
                                        t.lineTo(n + o, r + l),
                                        t.moveTo(n + l, r - o),
                                        t.lineTo(n - l, r + o),
                                        u += U,
                                        o = Math.cos(u) * i,
                                        l = Math.sin(u) * i,
                                        t.moveTo(n - o, r - l),
                                        t.lineTo(n + o, r + l),
                                        t.moveTo(n + l, r - o),
                                        t.lineTo(n - l, r + o);
                                        break;
                                    case "line":
                                            o = Math.cos(u) * i,
                                        l = Math.sin(u) * i,
                                        t.moveTo(n - o, r - l),
                                        t.lineTo(n + o, r + l);
                                        break;
                                    case "dash":
                                            t.moveTo(n, r),
                                        t.lineTo(n + Math.cos(u) * i, r + Math.sin(u) * i);
                                        break
                                }
                                t.fill(), t.stroke()
                            }
                        },
                        _isPointInArea: function(t, e) {
                            var i = 1e-6;
                            return t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i
                        },
                        clipArea: function(t, e) {
                            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                        },
                        unclipArea: function(t) {
                            t.restore()
                        },
                        lineTo: function(t, e, i, n) {
                            var r = i.steppedLine;
                            if (r) {
                                if ("middle" === r) {
                                    var s = (e.x + i.x) / 2;
                                    t.lineTo(s, n ? i.y : e.y), t.lineTo(s, n ? e.y : i.y)
                                } else "after" === r && !n || "after" !== r && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                                t.lineTo(i.x, i.y)
                            } else i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
                        }
                    },
                    X = G;
                N.clear = G.clear, N.drawRoundedRectangle = function(t) {
                    t.beginPath(), G.roundedRect.apply(G, arguments)
                };
                var Z = {
                    _set: function(t, e) {
                        return N.merge(this[t] || (this[t] = {}), e)
                    }
                };
                Z._set("global", {
                    defaultColor: "rgba(0,0,0,0.1)",
                    defaultFontColor: "#666",
                    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    defaultFontSize: 12,
                    defaultFontStyle: "normal",
                    defaultLineHeight: 1.2,
                    showLines: !0
                });
                var K = Z,
                    Q = N.valueOrDefault;

                function J(t) {
                    return !t || N.isNullOrUndef(t.size) || N.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                }
                var tt = {
                        toLineHeight: function(t, e) {
                            var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                            if (!i || "normal" === i[1]) return 1.2 * e;
                            switch (t = +i[2], i[3]) {
                                case "px":
                                    return t;
                                case "%":
                                    t /= 100;
                                    break
                            }
                            return e * t
                        },
                        toPadding: function(t) {
                            var e, i, n, r;
                            return N.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, r = +t.left || 0) : e = i = n = r = +t || 0, {
                                top: e,
                                right: i,
                                bottom: n,
                                left: r,
                                height: e + n,
                                width: r + i
                            }
                        },
                        _parseFont: function(t) {
                            var e = K.global,
                                i = Q(t.fontSize, e.defaultFontSize),
                                n = {
                                    family: Q(t.fontFamily, e.defaultFontFamily),
                                    lineHeight: N.options.toLineHeight(Q(t.lineHeight, e.defaultLineHeight), i),
                                    size: i,
                                    style: Q(t.fontStyle, e.defaultFontStyle),
                                    weight: null,
                                    string: ""
                                };
                            return n.string = J(n), n
                        },
                        resolve: function(t, e, i, n) {
                            var r, s, a, o = !0;
                            for (r = 0, s = t.length; r < s; ++r)
                                if (a = t[r], void 0 !== a && (void 0 !== e && "function" === typeof a && (a = a(e), o = !1), void 0 !== i && N.isArray(a) && (a = a[i], o = !1), void 0 !== a)) return n && !o && (n.cacheable = !1), a
                        }
                    },
                    et = {
                        _factorize: function(t) {
                            var e, i = [],
                                n = Math.sqrt(t);
                            for (e = 1; e < n; e++) t % e === 0 && (i.push(e), i.push(t / e));
                            return n === (0 | n) && i.push(n), i.sort((function(t, e) {
                                return t - e
                            })).pop(), i
                        },
                        log10: Math.log10 || function(t) {
                            var e = Math.log(t) * Math.LOG10E,
                                i = Math.round(e),
                                n = t === Math.pow(10, i);
                            return n ? i : e
                        }
                    },
                    it = et;
                N.log10 = et.log10;
                var nt = function(t, e) {
                        return {
                            x: function(i) {
                                return t + t + e - i
                            },
                            setWidth: function(t) {
                                e = t
                            },
                            textAlign: function(t) {
                                return "center" === t ? t : "right" === t ? "left" : "right"
                            },
                            xPlus: function(t, e) {
                                return t - e
                            },
                            leftForLtr: function(t, e) {
                                return t - e
                            }
                        }
                    },
                    rt = function() {
                        return {
                            x: function(t) {
                                return t
                            },
                            setWidth: function(t) {},
                            textAlign: function(t) {
                                return t
                            },
                            xPlus: function(t, e) {
                                return t + e
                            },
                            leftForLtr: function(t, e) {
                                return t
                            }
                        }
                    },
                    st = function(t, e, i) {
                        return t ? nt(e, i) : rt()
                    },
                    at = function(t, e) {
                        var i, n;
                        "ltr" !== e && "rtl" !== e || (i = t.canvas.style, n = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = n)
                    },
                    ot = function(t) {
                        var e = t.prevTextDirection;
                        void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
                    },
                    lt = {
                        getRtlAdapter: st,
                        overrideTextDirection: at,
                        restoreTextDirection: ot
                    },
                    ct = N,
                    ht = R,
                    ut = X,
                    dt = tt,
                    pt = it,
                    ft = lt;

                function gt(t, e, i, n) {
                    var r, s, a, o, l, c, h, u, d, p = Object.keys(i);
                    for (r = 0, s = p.length; r < s; ++r)
                        if (a = p[r], c = i[a], e.hasOwnProperty(a) || (e[a] = c), o = e[a], o !== c && "_" !== a[0]) {
                            if (t.hasOwnProperty(a) || (t[a] = o), l = t[a], h = typeof c, h === typeof l)
                                if ("string" === h) {
                                    if (u = F(l), u.valid && (d = F(c), d.valid)) {
                                        e[a] = d.mix(u, n).rgbString();
                                        continue
                                    }
                                } else if (ct.isFinite(l) && ct.isFinite(c)) {
                                e[a] = l + (c - l) * n;
                                continue
                            }
                            e[a] = c
                        }
                }
                ct.easing = ht, ct.canvas = ut, ct.options = dt, ct.math = pt, ct.rtl = ft;
                var mt = function(t) {
                    ct.extend(this, t), this.initialize.apply(this, arguments)
                };
                ct.extend(mt.prototype, {
                    _type: void 0,
                    initialize: function() {
                        this.hidden = !1
                    },
                    pivot: function() {
                        var t = this;
                        return t._view || (t._view = ct.extend({}, t._model)), t._start = {}, t
                    },
                    transition: function(t) {
                        var e = this,
                            i = e._model,
                            n = e._start,
                            r = e._view;
                        return i && 1 !== t ? (r || (r = e._view = {}), n || (n = e._start = {}), gt(n, r, i, t), e) : (e._view = ct.extend({}, i), e._start = null, e)
                    },
                    tooltipPosition: function() {
                        return {
                            x: this._model.x,
                            y: this._model.y
                        }
                    },
                    hasValue: function() {
                        return ct.isNumber(this._model.x) && ct.isNumber(this._model.y)
                    }
                }), mt.extend = ct.inherits;
                var vt = mt,
                    bt = vt.extend({
                        chart: null,
                        currentStep: 0,
                        numSteps: 60,
                        easing: "",
                        render: null,
                        onAnimationProgress: null,
                        onAnimationComplete: null
                    }),
                    yt = bt;
                Object.defineProperty(bt.prototype, "animationObject", {
                    get: function() {
                        return this
                    }
                }), Object.defineProperty(bt.prototype, "chartInstance", {
                    get: function() {
                        return this.chart
                    },
                    set: function(t) {
                        this.chart = t
                    }
                }), K._set("global", {
                    animation: {
                        duration: 1e3,
                        easing: "easeOutQuart",
                        onProgress: ct.noop,
                        onComplete: ct.noop
                    }
                });
                var xt = {
                        animations: [],
                        request: null,
                        addAnimation: function(t, e, i, n) {
                            var r, s, a = this.animations;
                            for (e.chart = t, e.startTime = Date.now(), e.duration = i, n || (t.animating = !0), r = 0, s = a.length; r < s; ++r)
                                if (a[r].chart === t) return void(a[r] = e);
                            a.push(e), 1 === a.length && this.requestAnimationFrame()
                        },
                        cancelAnimation: function(t) {
                            var e = ct.findIndex(this.animations, (function(e) {
                                return e.chart === t
                            })); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
                        },
                        requestAnimationFrame: function() {
                            var t = this;
                            null === t.request && (t.request = ct.requestAnimFrame.call(window, (function() {
                                t.request = null, t.startDigest()
                            })))
                        },
                        startDigest: function() {
                            var t = this;
                            t.advance(), t.animations.length > 0 && t.requestAnimationFrame()
                        },
                        advance: function() {
                            var t, e, i, n, r = this.animations,
                                s = 0;
                            while (s < r.length) t = r[s], e = t.chart, i = t.numSteps, n = Math.floor((Date.now() - t.startTime) / t.duration * i) + 1, t.currentStep = Math.min(n, i), ct.callback(t.render, [e, t], e), ct.callback(t.onAnimationProgress, [t], e), t.currentStep >= i ? (ct.callback(t.onAnimationComplete, [t], e), e.animating = !1, r.splice(s, 1)) : ++s
                        }
                    },
                    _t = ct.options.resolve,
                    wt = ["push", "pop", "shift", "splice", "unshift"];

                function Ct(t, e) {
                    t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {
                            listeners: [e]
                        }
                    }), wt.forEach((function(e) {
                        var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                            n = t[e];
                        Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !1,
                            value: function() {
                                var e = Array.prototype.slice.call(arguments),
                                    r = n.apply(this, e);
                                return ct.each(t._chartjs.listeners, (function(t) {
                                    "function" === typeof t[i] && t[i].apply(t, e)
                                })), r
                            }
                        })
                    })))
                }

                function kt(t, e) {
                    var i = t._chartjs;
                    if (i) {
                        var n = i.listeners,
                            r = n.indexOf(e); - 1 !== r && n.splice(r, 1), n.length > 0 || (wt.forEach((function(e) {
                            delete t[e]
                        })), delete t._chartjs)
                    }
                }
                var St = function(t, e) {
                    this.initialize(t, e)
                };
                ct.extend(St.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
                    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
                    initialize: function(t, e) {
                        var i = this;
                        i.chart = t, i.index = e, i.linkScales(), i.addElements(), i._type = i.getMeta().type
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this,
                            e = t.getMeta(),
                            i = t.chart,
                            n = i.scales,
                            r = t.getDataset(),
                            s = i.options.scales;
                        null !== e.xAxisID && e.xAxisID in n && !r.xAxisID || (e.xAxisID = r.xAxisID || s.xAxes[0].id), null !== e.yAxisID && e.yAxisID in n && !r.yAxisID || (e.yAxisID = r.yAxisID || s.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    _getValueScaleId: function() {
                        return this.getMeta().yAxisID
                    },
                    _getIndexScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    _getValueScale: function() {
                        return this.getScaleForId(this._getValueScaleId())
                    },
                    _getIndexScale: function() {
                        return this.getScaleForId(this._getIndexScaleId())
                    },
                    reset: function() {
                        this._update(!0)
                    },
                    destroy: function() {
                        this._data && kt(this._data, this)
                    },
                    createMetaDataset: function() {
                        var t = this,
                            e = t.datasetElementType;
                        return e && new e({
                            _chart: t.chart,
                            _datasetIndex: t.index
                        })
                    },
                    createMetaData: function(t) {
                        var e = this,
                            i = e.dataElementType;
                        return i && new i({
                            _chart: e.chart,
                            _datasetIndex: e.index,
                            _index: t
                        })
                    },
                    addElements: function() {
                        var t, e, i = this,
                            n = i.getMeta(),
                            r = i.getDataset().data || [],
                            s = n.data;
                        for (t = 0, e = r.length; t < e; ++t) s[t] = s[t] || i.createMetaData(t);
                        n.dataset = n.dataset || i.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var t = this,
                            e = t.getDataset(),
                            i = e.data || (e.data = []);
                        t._data !== i && (t._data && kt(t._data, t), i && Object.isExtensible(i) && Ct(i, t), t._data = i), t.resyncElements()
                    },
                    _configure: function() {
                        var t = this;
                        t._config = ct.merge({}, [t.chart.options.datasets[t._type], t.getDataset()], {
                            merger: function(t, e, i) {
                                "_meta" !== t && "data" !== t && ct._merger(t, e, i)
                            }
                        })
                    },
                    _update: function(t) {
                        var e = this;
                        e._configure(), e._cachedDataOpts = null, e.update(t)
                    },
                    update: ct.noop,
                    transition: function(t) {
                        for (var e = this.getMeta(), i = e.data || [], n = i.length, r = 0; r < n; ++r) i[r].transition(t);
                        e.dataset && e.dataset.transition(t)
                    },
                    draw: function() {
                        var t = this.getMeta(),
                            e = t.data || [],
                            i = e.length,
                            n = 0;
                        for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
                    },
                    getStyle: function(t) {
                        var e, i = this,
                            n = i.getMeta(),
                            r = n.dataset;
                        return i._configure(), r && void 0 === t ? e = i._resolveDatasetElementOptions(r || {}) : (t = t || 0, e = i._resolveDataElementOptions(n.data[t] || {}, t)), !1 !== e.fill && null !== e.fill || (e.backgroundColor = e.borderColor), e
                    },
                    _resolveDatasetElementOptions: function(t, e) {
                        var i, n, r, s, a = this,
                            o = a.chart,
                            l = a._config,
                            c = t.custom || {},
                            h = o.options.elements[a.datasetElementType.prototype._type] || {},
                            u = a._datasetElementOptions,
                            d = {},
                            p = {
                                chart: o,
                                dataset: a.getDataset(),
                                datasetIndex: a.index,
                                hover: e
                            };
                        for (i = 0, n = u.length; i < n; ++i) r = u[i], s = e ? "hover" + r.charAt(0).toUpperCase() + r.slice(1) : r, d[r] = _t([c[s], l[s], h[s]], p);
                        return d
                    },
                    _resolveDataElementOptions: function(t, e) {
                        var i = this,
                            n = t && t.custom,
                            r = i._cachedDataOpts;
                        if (r && !n) return r;
                        var s, a, o, l, c = i.chart,
                            h = i._config,
                            u = c.options.elements[i.dataElementType.prototype._type] || {},
                            d = i._dataElementOptions,
                            p = {},
                            f = {
                                chart: c,
                                dataIndex: e,
                                dataset: i.getDataset(),
                                datasetIndex: i.index
                            },
                            g = {
                                cacheable: !n
                            };
                        if (n = n || {}, ct.isArray(d))
                            for (a = 0, o = d.length; a < o; ++a) l = d[a], p[l] = _t([n[l], h[l], u[l]], f, e, g);
                        else
                            for (s = Object.keys(d), a = 0, o = s.length; a < o; ++a) l = s[a], p[l] = _t([n[l], h[d[l]], h[l], u[l]], f, e, g);
                        return g.cacheable && (i._cachedDataOpts = Object.freeze(p)), p
                    },
                    removeHoverStyle: function(t) {
                        ct.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            r = t._model,
                            s = ct.getHoverColor;
                        t.$previousStyle = {
                            backgroundColor: r.backgroundColor,
                            borderColor: r.borderColor,
                            borderWidth: r.borderWidth
                        }, r.backgroundColor = _t([n.hoverBackgroundColor, e.hoverBackgroundColor, s(r.backgroundColor)], void 0, i), r.borderColor = _t([n.hoverBorderColor, e.hoverBorderColor, s(r.borderColor)], void 0, i), r.borderWidth = _t([n.hoverBorderWidth, e.hoverBorderWidth, r.borderWidth], void 0, i)
                    },
                    _removeDatasetHoverStyle: function() {
                        var t = this.getMeta().dataset;
                        t && this.removeHoverStyle(t)
                    },
                    _setDatasetHoverStyle: function() {
                        var t, e, i, n, r, s, a = this.getMeta().dataset,
                            o = {};
                        if (a) {
                            for (s = a._model, r = this._resolveDatasetElementOptions(a, !0), n = Object.keys(r), t = 0, e = n.length; t < e; ++t) i = n[t], o[i] = s[i], s[i] = r[i];
                            a.$previousStyle = o
                        }
                    },
                    resyncElements: function() {
                        var t = this,
                            e = t.getMeta(),
                            i = t.getDataset().data,
                            n = e.data.length,
                            r = i.length;
                        r < n ? e.data.splice(r, n - r) : r > n && t.insertElements(n, r - n)
                    },
                    insertElements: function(t, e) {
                        for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
                    },
                    onDataPush: function() {
                        var t = arguments.length;
                        this.insertElements(this.getDataset().data.length - t, t)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    }
                }), St.extend = ct.inherits;
                var $t = St,
                    At = 2 * Math.PI;

                function It(t, e) {
                    var i = e.startAngle,
                        n = e.endAngle,
                        r = e.pixelMargin,
                        s = r / e.outerRadius,
                        a = e.x,
                        o = e.y;
                    t.beginPath(), t.arc(a, o, e.outerRadius, i - s, n + s), e.innerRadius > r ? (s = r / e.innerRadius, t.arc(a, o, e.innerRadius - r, n + s, i - s, !0)) : t.arc(a, o, r, n + Math.PI / 2, i - Math.PI / 2), t.closePath(), t.clip()
                }

                function Mt(t, e, i, n) {
                    var r, s = i.endAngle;
                    for (n && (i.endAngle = i.startAngle + At, It(t, i), i.endAngle = s, i.endAngle === i.startAngle && i.fullCircles && (i.endAngle += At, i.fullCircles--)), t.beginPath(), t.arc(i.x, i.y, i.innerRadius, i.startAngle + At, i.startAngle, !0), r = 0; r < i.fullCircles; ++r) t.stroke();
                    for (t.beginPath(), t.arc(i.x, i.y, e.outerRadius, i.startAngle, i.startAngle + At), r = 0; r < i.fullCircles; ++r) t.stroke()
                }

                function Ot(t, e, i) {
                    var n = "inner" === e.borderAlign;
                    n ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), i.fullCircles && Mt(t, e, i, n), n && It(t, i), t.beginPath(), t.arc(i.x, i.y, e.outerRadius, i.startAngle, i.endAngle), t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0), t.closePath(), t.stroke()
                }
                K._set("global", {
                    elements: {
                        arc: {
                            backgroundColor: K.global.defaultColor,
                            borderColor: "#fff",
                            borderWidth: 2,
                            borderAlign: "center"
                        }
                    }
                });
                var Tt = vt.extend({
                        _type: "arc",
                        inLabelRange: function(t) {
                            var e = this._view;
                            return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                        },
                        inRange: function(t, e) {
                            var i = this._view;
                            if (i) {
                                var n = ct.getAngleFromPoint(i, {
                                        x: t,
                                        y: e
                                    }),
                                    r = n.angle,
                                    s = n.distance,
                                    a = i.startAngle,
                                    o = i.endAngle;
                                while (o < a) o += At;
                                while (r > o) r -= At;
                                while (r < a) r += At;
                                var l = r >= a && r <= o,
                                    c = s >= i.innerRadius && s <= i.outerRadius;
                                return l && c
                            }
                            return !1
                        },
                        getCenterPoint: function() {
                            var t = this._view,
                                e = (t.startAngle + t.endAngle) / 2,
                                i = (t.innerRadius + t.outerRadius) / 2;
                            return {
                                x: t.x + Math.cos(e) * i,
                                y: t.y + Math.sin(e) * i
                            }
                        },
                        getArea: function() {
                            var t = this._view;
                            return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                        },
                        tooltipPosition: function() {
                            var t = this._view,
                                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                                i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                            return {
                                x: t.x + Math.cos(e) * i,
                                y: t.y + Math.sin(e) * i
                            }
                        },
                        draw: function() {
                            var t, e = this._chart.ctx,
                                i = this._view,
                                n = "inner" === i.borderAlign ? .33 : 0,
                                r = {
                                    x: i.x,
                                    y: i.y,
                                    innerRadius: i.innerRadius,
                                    outerRadius: Math.max(i.outerRadius - n, 0),
                                    pixelMargin: n,
                                    startAngle: i.startAngle,
                                    endAngle: i.endAngle,
                                    fullCircles: Math.floor(i.circumference / At)
                                };
                            if (e.save(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, r.fullCircles) {
                                for (r.endAngle = r.startAngle + At, e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), t = 0; t < r.fullCircles; ++t) e.fill();
                                r.endAngle = r.startAngle + i.circumference % At
                            }
                            e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), e.fill(), i.borderWidth && Ot(e, i, r), e.restore()
                        }
                    }),
                    Lt = ct.valueOrDefault,
                    Pt = K.global.defaultColor;
                K._set("global", {
                    elements: {
                        line: {
                            tension: .4,
                            backgroundColor: Pt,
                            borderWidth: 3,
                            borderColor: Pt,
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0,
                            borderJoinStyle: "miter",
                            capBezierPoints: !0,
                            fill: !0
                        }
                    }
                });
                var Dt = vt.extend({
                        _type: "line",
                        draw: function() {
                            var t, e, i, n = this,
                                r = n._view,
                                s = n._chart.ctx,
                                a = r.spanGaps,
                                o = n._children.slice(),
                                l = K.global,
                                c = l.elements.line,
                                h = -1,
                                u = n._loop;
                            if (o.length) {
                                if (n._loop) {
                                    for (t = 0; t < o.length; ++t)
                                        if (e = ct.previousItem(o, t), !o[t]._view.skip && e._view.skip) {
                                            o = o.slice(t).concat(o.slice(0, t)), u = a;
                                            break
                                        }
                                    u && o.push(o[0])
                                }
                                for (s.save(), s.lineCap = r.borderCapStyle || c.borderCapStyle, s.setLineDash && s.setLineDash(r.borderDash || c.borderDash), s.lineDashOffset = Lt(r.borderDashOffset, c.borderDashOffset), s.lineJoin = r.borderJoinStyle || c.borderJoinStyle, s.lineWidth = Lt(r.borderWidth, c.borderWidth), s.strokeStyle = r.borderColor || l.defaultColor, s.beginPath(), i = o[0]._view, i.skip || (s.moveTo(i.x, i.y), h = 0), t = 1; t < o.length; ++t) i = o[t]._view, e = -1 === h ? ct.previousItem(o, t) : o[h], i.skip || (h !== t - 1 && !a || -1 === h ? s.moveTo(i.x, i.y) : ct.canvas.lineTo(s, e._view, i), h = t);
                                u && s.closePath(), s.stroke(), s.restore()
                            }
                        }
                    }),
                    Bt = ct.valueOrDefault,
                    Et = K.global.defaultColor;

                function Ft(t) {
                    var e = this._view;
                    return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
                }

                function Vt(t) {
                    var e = this._view;
                    return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                }
                K._set("global", {
                    elements: {
                        point: {
                            radius: 3,
                            pointStyle: "circle",
                            backgroundColor: Et,
                            borderColor: Et,
                            borderWidth: 1,
                            hitRadius: 1,
                            hoverRadius: 4,
                            hoverBorderWidth: 1
                        }
                    }
                });
                var Nt = vt.extend({
                        _type: "point",
                        inRange: function(t, e) {
                            var i = this._view;
                            return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                        },
                        inLabelRange: Ft,
                        inXRange: Ft,
                        inYRange: Vt,
                        getCenterPoint: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y
                            }
                        },
                        getArea: function() {
                            return Math.PI * Math.pow(this._view.radius, 2)
                        },
                        tooltipPosition: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y,
                                padding: t.radius + t.borderWidth
                            }
                        },
                        draw: function(t) {
                            var e = this._view,
                                i = this._chart.ctx,
                                n = e.pointStyle,
                                r = e.rotation,
                                s = e.radius,
                                a = e.x,
                                o = e.y,
                                l = K.global,
                                c = l.defaultColor;
                            e.skip || (void 0 === t || ct.canvas._isPointInArea(e, t)) && (i.strokeStyle = e.borderColor || c, i.lineWidth = Bt(e.borderWidth, l.elements.point.borderWidth), i.fillStyle = e.backgroundColor || c, ct.canvas.drawPoint(i, n, s, a, o, r))
                        }
                    }),
                    zt = K.global.defaultColor;

                function Rt(t) {
                    return t && void 0 !== t.width
                }

                function Wt(t) {
                    var e, i, n, r, s;
                    return Rt(t) ? (s = t.width / 2, e = t.x - s, i = t.x + s, n = Math.min(t.y, t.base), r = Math.max(t.y, t.base)) : (s = t.height / 2, e = Math.min(t.x, t.base), i = Math.max(t.x, t.base), n = t.y - s, r = t.y + s), {
                        left: e,
                        top: n,
                        right: i,
                        bottom: r
                    }
                }

                function Ht(t, e, i) {
                    return t === e ? i : t === i ? e : t
                }

                function jt(t) {
                    var e = t.borderSkipped,
                        i = {};
                    return e ? (t.horizontal ? t.base > t.x && (e = Ht(e, "left", "right")) : t.base < t.y && (e = Ht(e, "bottom", "top")), i[e] = !0, i) : i
                }

                function qt(t, e, i) {
                    var n, r, s, a, o = t.borderWidth,
                        l = jt(t);
                    return ct.isObject(o) ? (n = +o.top || 0, r = +o.right || 0, s = +o.bottom || 0, a = +o.left || 0) : n = r = s = a = +o || 0, {
                        t: l.top || n < 0 ? 0 : n > i ? i : n,
                        r: l.right || r < 0 ? 0 : r > e ? e : r,
                        b: l.bottom || s < 0 ? 0 : s > i ? i : s,
                        l: l.left || a < 0 ? 0 : a > e ? e : a
                    }
                }

                function Ut(t) {
                    var e = Wt(t),
                        i = e.right - e.left,
                        n = e.bottom - e.top,
                        r = qt(t, i / 2, n / 2);
                    return {
                        outer: {
                            x: e.left,
                            y: e.top,
                            w: i,
                            h: n
                        },
                        inner: {
                            x: e.left + r.l,
                            y: e.top + r.t,
                            w: i - r.l - r.r,
                            h: n - r.t - r.b
                        }
                    }
                }

                function Yt(t, e, i) {
                    var n = null === e,
                        r = null === i,
                        s = !(!t || n && r) && Wt(t);
                    return s && (n || e >= s.left && e <= s.right) && (r || i >= s.top && i <= s.bottom)
                }
                K._set("global", {
                    elements: {
                        rectangle: {
                            backgroundColor: zt,
                            borderColor: zt,
                            borderSkipped: "bottom",
                            borderWidth: 0
                        }
                    }
                });
                var Gt = vt.extend({
                        _type: "rectangle",
                        draw: function() {
                            var t = this._chart.ctx,
                                e = this._view,
                                i = Ut(e),
                                n = i.outer,
                                r = i.inner;
                            t.fillStyle = e.backgroundColor, t.fillRect(n.x, n.y, n.w, n.h), n.w === r.w && n.h === r.h || (t.save(), t.beginPath(), t.rect(n.x, n.y, n.w, n.h), t.clip(), t.fillStyle = e.borderColor, t.rect(r.x, r.y, r.w, r.h), t.fill("evenodd"), t.restore())
                        },
                        height: function() {
                            var t = this._view;
                            return t.base - t.y
                        },
                        inRange: function(t, e) {
                            return Yt(this._view, t, e)
                        },
                        inLabelRange: function(t, e) {
                            var i = this._view;
                            return Rt(i) ? Yt(i, t, null) : Yt(i, null, e)
                        },
                        inXRange: function(t) {
                            return Yt(this._view, t, null)
                        },
                        inYRange: function(t) {
                            return Yt(this._view, null, t)
                        },
                        getCenterPoint: function() {
                            var t, e, i = this._view;
                            return Rt(i) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
                                x: t,
                                y: e
                            }
                        },
                        getArea: function() {
                            var t = this._view;
                            return Rt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
                        },
                        tooltipPosition: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y
                            }
                        }
                    }),
                    Xt = {},
                    Zt = Tt,
                    Kt = Dt,
                    Qt = Nt,
                    Jt = Gt;
                Xt.Arc = Zt, Xt.Line = Kt, Xt.Point = Qt, Xt.Rectangle = Jt;
                var te = ct._deprecated,
                    ee = ct.valueOrDefault;

                function ie(t, e) {
                    var i, n, r, s, a = t._length;
                    for (r = 1, s = e.length; r < s; ++r) a = Math.min(a, Math.abs(e[r] - e[r - 1]));
                    for (r = 0, s = t.getTicks().length; r < s; ++r) n = t.getPixelForTick(r), a = r > 0 ? Math.min(a, Math.abs(n - i)) : a, i = n;
                    return a
                }

                function ne(t, e, i) {
                    var n, r, s = i.barThickness,
                        a = e.stackCount,
                        o = e.pixels[t],
                        l = ct.isNullOrUndef(s) ? ie(e.scale, e.pixels) : -1;
                    return ct.isNullOrUndef(s) ? (n = l * i.categoryPercentage, r = i.barPercentage) : (n = s * a, r = 1), {
                        chunk: n / a,
                        ratio: r,
                        start: o - n / 2
                    }
                }

                function re(t, e, i) {
                    var n, r, s = e.pixels,
                        a = s[t],
                        o = t > 0 ? s[t - 1] : null,
                        l = t < s.length - 1 ? s[t + 1] : null,
                        c = i.categoryPercentage;
                    return null === o && (o = a - (null === l ? e.end - e.start : l - a)), null === l && (l = a + a - o), n = a - (a - Math.min(o, l)) / 2 * c, r = Math.abs(l - o) / 2 * c, {
                        chunk: r / e.stackCount,
                        ratio: i.barPercentage,
                        start: n
                    }
                }
                K._set("bar", {
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            offset: !0,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }],
                        yAxes: [{
                            type: "linear"
                        }]
                    }
                }), K._set("global", {
                    datasets: {
                        bar: {
                            categoryPercentage: .8,
                            barPercentage: .9
                        }
                    }
                });
                var se = $t.extend({
                        dataElementType: Xt.Rectangle,
                        _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
                        initialize: function() {
                            var t, e, i = this;
                            $t.prototype.initialize.apply(i, arguments), t = i.getMeta(), t.stack = i.getDataset().stack, t.bar = !0, e = i._getIndexScale().options, te("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), te("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), te("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), te("bar chart", i._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), te("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
                        },
                        update: function(t) {
                            var e, i, n = this,
                                r = n.getMeta().data;
                            for (n._ruler = n.getRuler(), e = 0, i = r.length; e < i; ++e) n.updateElement(r[e], e, t)
                        },
                        updateElement: function(t, e, i) {
                            var n = this,
                                r = n.getMeta(),
                                s = n.getDataset(),
                                a = n._resolveDataElementOptions(t, e);
                            t._xScale = n.getScaleForId(r.xAxisID), t._yScale = n.getScaleForId(r.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                                backgroundColor: a.backgroundColor,
                                borderColor: a.borderColor,
                                borderSkipped: a.borderSkipped,
                                borderWidth: a.borderWidth,
                                datasetLabel: s.label,
                                label: n.chart.data.labels[e]
                            }, ct.isArray(s.data[e]) && (t._model.borderSkipped = null), n._updateElementGeometry(t, e, i, a), t.pivot()
                        },
                        _updateElementGeometry: function(t, e, i, n) {
                            var r = this,
                                s = t._model,
                                a = r._getValueScale(),
                                o = a.getBasePixel(),
                                l = a.isHorizontal(),
                                c = r._ruler || r.getRuler(),
                                h = r.calculateBarValuePixels(r.index, e, n),
                                u = r.calculateBarIndexPixels(r.index, e, c, n);
                            s.horizontal = l, s.base = i ? o : h.base, s.x = l ? i ? o : h.head : u.center, s.y = l ? u.center : i ? o : h.head, s.height = l ? u.size : void 0, s.width = l ? void 0 : u.size
                        },
                        _getStacks: function(t) {
                            var e, i, n = this,
                                r = n._getIndexScale(),
                                s = r._getMatchingVisibleMetas(n._type),
                                a = r.options.stacked,
                                o = s.length,
                                l = [];
                            for (e = 0; e < o; ++e)
                                if (i = s[e], (!1 === a || -1 === l.indexOf(i.stack) || void 0 === a && void 0 === i.stack) && l.push(i.stack), i.index === t) break;
                            return l
                        },
                        getStackCount: function() {
                            return this._getStacks().length
                        },
                        getStackIndex: function(t, e) {
                            var i = this._getStacks(t),
                                n = void 0 !== e ? i.indexOf(e) : -1;
                            return -1 === n ? i.length - 1 : n
                        },
                        getRuler: function() {
                            var t, e, i = this,
                                n = i._getIndexScale(),
                                r = [];
                            for (t = 0, e = i.getMeta().data.length; t < e; ++t) r.push(n.getPixelForValue(null, t, i.index));
                            return {
                                pixels: r,
                                start: n._startPixel,
                                end: n._endPixel,
                                stackCount: i.getStackCount(),
                                scale: n
                            }
                        },
                        calculateBarValuePixels: function(t, e, i) {
                            var n, r, s, a, o, l, c, h = this,
                                u = h.chart,
                                d = h._getValueScale(),
                                p = d.isHorizontal(),
                                f = u.data.datasets,
                                g = d._getMatchingVisibleMetas(h._type),
                                m = d._parseValue(f[t].data[e]),
                                v = i.minBarLength,
                                b = d.options.stacked,
                                y = h.getMeta().stack,
                                x = void 0 === m.start ? 0 : m.max >= 0 && m.min >= 0 ? m.min : m.max,
                                _ = void 0 === m.start ? m.end : m.max >= 0 && m.min >= 0 ? m.max - m.min : m.min - m.max,
                                w = g.length;
                            if (b || void 0 === b && void 0 !== y)
                                for (n = 0; n < w; ++n) {
                                    if (r = g[n], r.index === t) break;
                                    r.stack === y && (c = d._parseValue(f[r.index].data[e]), s = void 0 === c.start ? c.end : c.min >= 0 && c.max >= 0 ? c.max : c.min, (m.min < 0 && s < 0 || m.max >= 0 && s > 0) && (x += s))
                                }
                            return a = d.getPixelForValue(x), o = d.getPixelForValue(x + _), l = o - a, void 0 !== v && Math.abs(l) < v && (l = v, o = _ >= 0 && !p || _ < 0 && p ? a - v : a + v), {
                                size: l,
                                base: a,
                                head: o,
                                center: o + l / 2
                            }
                        },
                        calculateBarIndexPixels: function(t, e, i, n) {
                            var r = this,
                                s = "flex" === n.barThickness ? re(e, i, n) : ne(e, i, n),
                                a = r.getStackIndex(t, r.getMeta().stack),
                                o = s.start + s.chunk * a + s.chunk / 2,
                                l = Math.min(ee(n.maxBarThickness, 1 / 0), s.chunk * s.ratio);
                            return {
                                base: o - l / 2,
                                head: o + l / 2,
                                center: o,
                                size: l
                            }
                        },
                        draw: function() {
                            var t = this,
                                e = t.chart,
                                i = t._getValueScale(),
                                n = t.getMeta().data,
                                r = t.getDataset(),
                                s = n.length,
                                a = 0;
                            for (ct.canvas.clipArea(e.ctx, e.chartArea); a < s; ++a) {
                                var o = i._parseValue(r.data[a]);
                                isNaN(o.min) || isNaN(o.max) || n[a].draw()
                            }
                            ct.canvas.unclipArea(e.ctx)
                        },
                        _resolveDataElementOptions: function() {
                            var t = this,
                                e = ct.extend({}, $t.prototype._resolveDataElementOptions.apply(t, arguments)),
                                i = t._getIndexScale().options,
                                n = t._getValueScale().options;
                            return e.barPercentage = ee(i.barPercentage, e.barPercentage), e.barThickness = ee(i.barThickness, e.barThickness), e.categoryPercentage = ee(i.categoryPercentage, e.categoryPercentage), e.maxBarThickness = ee(i.maxBarThickness, e.maxBarThickness), e.minBarLength = ee(n.minBarLength, e.minBarLength), e
                        }
                    }),
                    ae = ct.valueOrDefault,
                    oe = ct.options.resolve;
                K._set("bubble", {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-0"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                var i = e.datasets[t.datasetIndex].label || "",
                                    n = e.datasets[t.datasetIndex].data[t.index];
                                return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                            }
                        }
                    }
                });
                var le = $t.extend({
                        dataElementType: Xt.Point,
                        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
                        update: function(t) {
                            var e = this,
                                i = e.getMeta(),
                                n = i.data;
                            ct.each(n, (function(i, n) {
                                e.updateElement(i, n, t)
                            }))
                        },
                        updateElement: function(t, e, i) {
                            var n = this,
                                r = n.getMeta(),
                                s = t.custom || {},
                                a = n.getScaleForId(r.xAxisID),
                                o = n.getScaleForId(r.yAxisID),
                                l = n._resolveDataElementOptions(t, e),
                                c = n.getDataset().data[e],
                                h = n.index,
                                u = i ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" === typeof c ? c : NaN, e, h),
                                d = i ? o.getBasePixel() : o.getPixelForValue(c, e, h);
                            t._xScale = a, t._yScale = o, t._options = l, t._datasetIndex = h, t._index = e, t._model = {
                                backgroundColor: l.backgroundColor,
                                borderColor: l.borderColor,
                                borderWidth: l.borderWidth,
                                hitRadius: l.hitRadius,
                                pointStyle: l.pointStyle,
                                rotation: l.rotation,
                                radius: i ? 0 : l.radius,
                                skip: s.skip || isNaN(u) || isNaN(d),
                                x: u,
                                y: d
                            }, t.pivot()
                        },
                        setHoverStyle: function(t) {
                            var e = t._model,
                                i = t._options,
                                n = ct.getHoverColor;
                            t.$previousStyle = {
                                backgroundColor: e.backgroundColor,
                                borderColor: e.borderColor,
                                borderWidth: e.borderWidth,
                                radius: e.radius
                            }, e.backgroundColor = ae(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = ae(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = ae(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
                        },
                        _resolveDataElementOptions: function(t, e) {
                            var i = this,
                                n = i.chart,
                                r = i.getDataset(),
                                s = t.custom || {},
                                a = r.data[e] || {},
                                o = $t.prototype._resolveDataElementOptions.apply(i, arguments),
                                l = {
                                    chart: n,
                                    dataIndex: e,
                                    dataset: r,
                                    datasetIndex: i.index
                                };
                            return i._cachedDataOpts === o && (o = ct.extend({}, o)), o.radius = oe([s.radius, a.r, i._config.radius, n.options.elements.point.radius], l, e), o
                        }
                    }),
                    ce = ct.valueOrDefault,
                    he = Math.PI,
                    ue = 2 * he,
                    de = he / 2;
                K._set("doughnut", {
                    animation: {
                        animateRotate: !0,
                        animateScale: !1
                    },
                    hover: {
                        mode: "single"
                    },
                    legendCallback: function(t) {
                        var e, i, n, r, s = document.createElement("ul"),
                            a = t.data,
                            o = a.datasets,
                            l = a.labels;
                        if (s.setAttribute("class", t.id + "-legend"), o.length)
                            for (e = 0, i = o[0].data.length; e < i; ++e) n = s.appendChild(document.createElement("li")), r = n.appendChild(document.createElement("span")), r.style.backgroundColor = o[0].backgroundColor[e], l[e] && n.appendChild(document.createTextNode(l[e]));
                        return s.outerHTML
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var e = t.data;
                                return e.labels.length && e.datasets.length ? e.labels.map((function(i, n) {
                                    var r = t.getDatasetMeta(0),
                                        s = r.controller.getStyle(n);
                                    return {
                                        text: i,
                                        fillStyle: s.backgroundColor,
                                        strokeStyle: s.borderColor,
                                        lineWidth: s.borderWidth,
                                        hidden: isNaN(e.datasets[0].data[n]) || r.data[n].hidden,
                                        index: n
                                    }
                                })) : []
                            }
                        },
                        onClick: function(t, e) {
                            var i, n, r, s = e.index,
                                a = this.chart;
                            for (i = 0, n = (a.data.datasets || []).length; i < n; ++i) r = a.getDatasetMeta(i), r.data[s] && (r.data[s].hidden = !r.data[s].hidden);
                            a.update()
                        }
                    },
                    cutoutPercentage: 50,
                    rotation: -de,
                    circumference: ue,
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                var i = e.labels[t.index],
                                    n = ": " + e.datasets[t.datasetIndex].data[t.index];
                                return ct.isArray(i) ? (i = i.slice(), i[0] += n) : i += n, i
                            }
                        }
                    }
                });
                var pe = $t.extend({
                    dataElementType: Xt.Arc,
                    linkScales: ct.noop,
                    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                    getRingIndex: function(t) {
                        for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                        return e
                    },
                    update: function(t) {
                        var e, i, n, r, s = this,
                            a = s.chart,
                            o = a.chartArea,
                            l = a.options,
                            c = 1,
                            h = 1,
                            u = 0,
                            d = 0,
                            p = s.getMeta(),
                            f = p.data,
                            g = l.cutoutPercentage / 100 || 0,
                            m = l.circumference,
                            v = s._getRingWeight(s.index);
                        if (m < ue) {
                            var b = l.rotation % ue;
                            b += b >= he ? -ue : b < -he ? ue : 0;
                            var y = b + m,
                                x = Math.cos(b),
                                _ = Math.sin(b),
                                w = Math.cos(y),
                                C = Math.sin(y),
                                k = b <= 0 && y >= 0 || y >= ue,
                                S = b <= de && y >= de || y >= ue + de,
                                $ = b === -he || y >= he,
                                A = b <= -de && y >= -de || y >= he + de,
                                I = $ ? -1 : Math.min(x, x * g, w, w * g),
                                M = A ? -1 : Math.min(_, _ * g, C, C * g),
                                O = k ? 1 : Math.max(x, x * g, w, w * g),
                                T = S ? 1 : Math.max(_, _ * g, C, C * g);
                            c = (O - I) / 2, h = (T - M) / 2, u = -(O + I) / 2, d = -(T + M) / 2
                        }
                        for (n = 0, r = f.length; n < r; ++n) f[n]._options = s._resolveDataElementOptions(f[n], n);
                        for (a.borderWidth = s.getMaxBorderWidth(), e = (o.right - o.left - a.borderWidth) / c, i = (o.bottom - o.top - a.borderWidth) / h, a.outerRadius = Math.max(Math.min(e, i) / 2, 0), a.innerRadius = Math.max(a.outerRadius * g, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (s._getVisibleDatasetWeightTotal() || 1), a.offsetX = u * a.outerRadius, a.offsetY = d * a.outerRadius, p.total = s.calculateTotal(), s.outerRadius = a.outerRadius - a.radiusLength * s._getRingWeightOffset(s.index), s.innerRadius = Math.max(s.outerRadius - a.radiusLength * v, 0), n = 0, r = f.length; n < r; ++n) s.updateElement(f[n], n, t)
                    },
                    updateElement: function(t, e, i) {
                        var n = this,
                            r = n.chart,
                            s = r.chartArea,
                            a = r.options,
                            o = a.animation,
                            l = (s.left + s.right) / 2,
                            c = (s.top + s.bottom) / 2,
                            h = a.rotation,
                            u = a.rotation,
                            d = n.getDataset(),
                            p = i && o.animateRotate || t.hidden ? 0 : n.calculateCircumference(d.data[e]) * (a.circumference / ue),
                            f = i && o.animateScale ? 0 : n.innerRadius,
                            g = i && o.animateScale ? 0 : n.outerRadius,
                            m = t._options || {};
                        ct.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _model: {
                                backgroundColor: m.backgroundColor,
                                borderColor: m.borderColor,
                                borderWidth: m.borderWidth,
                                borderAlign: m.borderAlign,
                                x: l + r.offsetX,
                                y: c + r.offsetY,
                                startAngle: h,
                                endAngle: u,
                                circumference: p,
                                outerRadius: g,
                                innerRadius: f,
                                label: ct.valueAtIndexOrDefault(d.label, e, r.data.labels[e])
                            }
                        });
                        var v = t._model;
                        i && o.animateRotate || (v.startAngle = 0 === e ? a.rotation : n.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
                    },
                    calculateTotal: function() {
                        var t, e = this.getDataset(),
                            i = this.getMeta(),
                            n = 0;
                        return ct.each(i.data, (function(i, r) {
                            t = e.data[r], isNaN(t) || i.hidden || (n += Math.abs(t))
                        })), n
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total;
                        return e > 0 && !isNaN(t) ? ue * (Math.abs(t) / e) : 0
                    },
                    getMaxBorderWidth: function(t) {
                        var e, i, n, r, s, a, o, l, c = this,
                            h = 0,
                            u = c.chart;
                        if (!t)
                            for (e = 0, i = u.data.datasets.length; e < i; ++e)
                                if (u.isDatasetVisible(e)) {
                                    n = u.getDatasetMeta(e), t = n.data, e !== c.index && (s = n.controller);
                                    break
                                }
                        if (!t) return 0;
                        for (e = 0, i = t.length; e < i; ++e) r = t[e], s ? (s._configure(), a = s._resolveDataElementOptions(r, e)) : a = r._options, "inner" !== a.borderAlign && (o = a.borderWidth, l = a.hoverBorderWidth, h = o > h ? o : h, h = l > h ? l : h);
                        return h
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            i = t._options,
                            n = ct.getHoverColor;
                        t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth
                        }, e.backgroundColor = ce(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = ce(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = ce(i.hoverBorderWidth, i.borderWidth)
                    },
                    _getRingWeightOffset: function(t) {
                        for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
                        return e
                    },
                    _getRingWeight: function(t) {
                        return Math.max(ce(this.chart.data.datasets[t].weight, 1), 0)
                    },
                    _getVisibleDatasetWeightTotal: function() {
                        return this._getRingWeightOffset(this.chart.data.datasets.length)
                    }
                });
                K._set("horizontalBar", {
                    hover: {
                        mode: "index",
                        axis: "y"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom"
                        }],
                        yAxes: [{
                            type: "category",
                            position: "left",
                            offset: !0,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }]
                    },
                    elements: {
                        rectangle: {
                            borderSkipped: "left"
                        }
                    },
                    tooltips: {
                        mode: "index",
                        axis: "y"
                    }
                }), K._set("global", {
                    datasets: {
                        horizontalBar: {
                            categoryPercentage: .8,
                            barPercentage: .9
                        }
                    }
                });
                var fe = se.extend({
                        _getValueScaleId: function() {
                            return this.getMeta().xAxisID
                        },
                        _getIndexScaleId: function() {
                            return this.getMeta().yAxisID
                        }
                    }),
                    ge = ct.valueOrDefault,
                    me = ct.options.resolve,
                    ve = ct.canvas._isPointInArea;

                function be(t, e) {
                    var i = t && t.options.ticks || {},
                        n = i.reverse,
                        r = void 0 === i.min ? e : 0,
                        s = void 0 === i.max ? e : 0;
                    return {
                        start: n ? s : r,
                        end: n ? r : s
                    }
                }

                function ye(t, e, i) {
                    var n = i / 2,
                        r = be(t, n),
                        s = be(e, n);
                    return {
                        top: s.end,
                        right: r.end,
                        bottom: s.start,
                        left: r.start
                    }
                }

                function xe(t) {
                    var e, i, n, r;
                    return ct.isObject(t) ? (e = t.top, i = t.right, n = t.bottom, r = t.left) : e = i = n = r = t, {
                        top: e,
                        right: i,
                        bottom: n,
                        left: r
                    }
                }
                K._set("line", {
                    showLines: !0,
                    spanGaps: !1,
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            id: "y-axis-0"
                        }]
                    }
                });
                var _e = $t.extend({
                        datasetElementType: Xt.Line,
                        dataElementType: Xt.Point,
                        _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
                        _dataElementOptions: {
                            backgroundColor: "pointBackgroundColor",
                            borderColor: "pointBorderColor",
                            borderWidth: "pointBorderWidth",
                            hitRadius: "pointHitRadius",
                            hoverBackgroundColor: "pointHoverBackgroundColor",
                            hoverBorderColor: "pointHoverBorderColor",
                            hoverBorderWidth: "pointHoverBorderWidth",
                            hoverRadius: "pointHoverRadius",
                            pointStyle: "pointStyle",
                            radius: "pointRadius",
                            rotation: "pointRotation"
                        },
                        update: function(t) {
                            var e, i, n = this,
                                r = n.getMeta(),
                                s = r.dataset,
                                a = r.data || [],
                                o = n.chart.options,
                                l = n._config,
                                c = n._showLine = ge(l.showLine, o.showLines);
                            for (n._xScale = n.getScaleForId(r.xAxisID), n._yScale = n.getScaleForId(r.yAxisID), c && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), s._scale = n._yScale, s._datasetIndex = n.index, s._children = a, s._model = n._resolveDatasetElementOptions(s), s.pivot()), e = 0, i = a.length; e < i; ++e) n.updateElement(a[e], e, t);
                            for (c && 0 !== s._model.tension && n.updateBezierControlPoints(), e = 0, i = a.length; e < i; ++e) a[e].pivot()
                        },
                        updateElement: function(t, e, i) {
                            var n, r, s = this,
                                a = s.getMeta(),
                                o = t.custom || {},
                                l = s.getDataset(),
                                c = s.index,
                                h = l.data[e],
                                u = s._xScale,
                                d = s._yScale,
                                p = a.dataset._model,
                                f = s._resolveDataElementOptions(t, e);
                            n = u.getPixelForValue("object" === typeof h ? h : NaN, e, c), r = i ? d.getBasePixel() : s.calculatePointY(h, e, c), t._xScale = u, t._yScale = d, t._options = f, t._datasetIndex = c, t._index = e, t._model = {
                                x: n,
                                y: r,
                                skip: o.skip || isNaN(n) || isNaN(r),
                                radius: f.radius,
                                pointStyle: f.pointStyle,
                                rotation: f.rotation,
                                backgroundColor: f.backgroundColor,
                                borderColor: f.borderColor,
                                borderWidth: f.borderWidth,
                                tension: ge(o.tension, p ? p.tension : 0),
                                steppedLine: !!p && p.steppedLine,
                                hitRadius: f.hitRadius
                            }
                        },
                        _resolveDatasetElementOptions: function(t) {
                            var e = this,
                                i = e._config,
                                n = t.custom || {},
                                r = e.chart.options,
                                s = r.elements.line,
                                a = $t.prototype._resolveDatasetElementOptions.apply(e, arguments);
                            return a.spanGaps = ge(i.spanGaps, r.spanGaps), a.tension = ge(i.lineTension, s.tension), a.steppedLine = me([n.steppedLine, i.steppedLine, s.stepped]), a.clip = xe(ge(i.clip, ye(e._xScale, e._yScale, a.borderWidth))), a
                        },
                        calculatePointY: function(t, e, i) {
                            var n, r, s, a, o, l, c, h = this,
                                u = h.chart,
                                d = h._yScale,
                                p = 0,
                                f = 0;
                            if (d.options.stacked) {
                                for (o = +d.getRightValue(t), l = u._getSortedVisibleDatasetMetas(), c = l.length, n = 0; n < c; ++n) {
                                    if (s = l[n], s.index === i) break;
                                    r = u.data.datasets[s.index], "line" === s.type && s.yAxisID === d.id && (a = +d.getRightValue(r.data[e]), a < 0 ? f += a || 0 : p += a || 0)
                                }
                                return o < 0 ? d.getPixelForValue(f + o) : d.getPixelForValue(p + o)
                            }
                            return d.getPixelForValue(t)
                        },
                        updateBezierControlPoints: function() {
                            var t, e, i, n, r = this,
                                s = r.chart,
                                a = r.getMeta(),
                                o = a.dataset._model,
                                l = s.chartArea,
                                c = a.data || [];

                            function h(t, e, i) {
                                return Math.max(Math.min(t, i), e)
                            }
                            if (o.spanGaps && (c = c.filter((function(t) {
                                    return !t._model.skip
                                }))), "monotone" === o.cubicInterpolationMode) ct.splineCurveMonotone(c);
                            else
                                for (t = 0, e = c.length; t < e; ++t) i = c[t]._model, n = ct.splineCurve(ct.previousItem(c, t)._model, i, ct.nextItem(c, t)._model, o.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                            if (s.options.elements.line.capBezierPoints)
                                for (t = 0, e = c.length; t < e; ++t) i = c[t]._model, ve(i, l) && (t > 0 && ve(c[t - 1]._model, l) && (i.controlPointPreviousX = h(i.controlPointPreviousX, l.left, l.right), i.controlPointPreviousY = h(i.controlPointPreviousY, l.top, l.bottom)), t < c.length - 1 && ve(c[t + 1]._model, l) && (i.controlPointNextX = h(i.controlPointNextX, l.left, l.right), i.controlPointNextY = h(i.controlPointNextY, l.top, l.bottom)))
                        },
                        draw: function() {
                            var t, e = this,
                                i = e.chart,
                                n = e.getMeta(),
                                r = n.data || [],
                                s = i.chartArea,
                                a = i.canvas,
                                o = 0,
                                l = r.length;
                            for (e._showLine && (t = n.dataset._model.clip, ct.canvas.clipArea(i.ctx, {
                                    left: !1 === t.left ? 0 : s.left - t.left,
                                    right: !1 === t.right ? a.width : s.right + t.right,
                                    top: !1 === t.top ? 0 : s.top - t.top,
                                    bottom: !1 === t.bottom ? a.height : s.bottom + t.bottom
                                }), n.dataset.draw(), ct.canvas.unclipArea(i.ctx)); o < l; ++o) r[o].draw(s)
                        },
                        setHoverStyle: function(t) {
                            var e = t._model,
                                i = t._options,
                                n = ct.getHoverColor;
                            t.$previousStyle = {
                                backgroundColor: e.backgroundColor,
                                borderColor: e.borderColor,
                                borderWidth: e.borderWidth,
                                radius: e.radius
                            }, e.backgroundColor = ge(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = ge(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = ge(i.hoverBorderWidth, i.borderWidth), e.radius = ge(i.hoverRadius, i.radius)
                        }
                    }),
                    we = ct.options.resolve;
                K._set("polarArea", {
                    scale: {
                        type: "radialLinear",
                        angleLines: {
                            display: !1
                        },
                        gridLines: {
                            circular: !0
                        },
                        pointLabels: {
                            display: !1
                        },
                        ticks: {
                            beginAtZero: !0
                        }
                    },
                    animation: {
                        animateRotate: !0,
                        animateScale: !0
                    },
                    startAngle: -.5 * Math.PI,
                    legendCallback: function(t) {
                        var e, i, n, r, s = document.createElement("ul"),
                            a = t.data,
                            o = a.datasets,
                            l = a.labels;
                        if (s.setAttribute("class", t.id + "-legend"), o.length)
                            for (e = 0, i = o[0].data.length; e < i; ++e) n = s.appendChild(document.createElement("li")), r = n.appendChild(document.createElement("span")), r.style.backgroundColor = o[0].backgroundColor[e], l[e] && n.appendChild(document.createTextNode(l[e]));
                        return s.outerHTML
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var e = t.data;
                                return e.labels.length && e.datasets.length ? e.labels.map((function(i, n) {
                                    var r = t.getDatasetMeta(0),
                                        s = r.controller.getStyle(n);
                                    return {
                                        text: i,
                                        fillStyle: s.backgroundColor,
                                        strokeStyle: s.borderColor,
                                        lineWidth: s.borderWidth,
                                        hidden: isNaN(e.datasets[0].data[n]) || r.data[n].hidden,
                                        index: n
                                    }
                                })) : []
                            }
                        },
                        onClick: function(t, e) {
                            var i, n, r, s = e.index,
                                a = this.chart;
                            for (i = 0, n = (a.data.datasets || []).length; i < n; ++i) r = a.getDatasetMeta(i), r.data[s].hidden = !r.data[s].hidden;
                            a.update()
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                return e.labels[t.index] + ": " + t.yLabel
                            }
                        }
                    }
                });
                var Ce = $t.extend({
                    dataElementType: Xt.Arc,
                    linkScales: ct.noop,
                    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                    _getIndexScaleId: function() {
                        return this.chart.scale.id
                    },
                    _getValueScaleId: function() {
                        return this.chart.scale.id
                    },
                    update: function(t) {
                        var e, i, n, r = this,
                            s = r.getDataset(),
                            a = r.getMeta(),
                            o = r.chart.options.startAngle || 0,
                            l = r._starts = [],
                            c = r._angles = [],
                            h = a.data;
                        for (r._updateRadius(), a.count = r.countVisibleElements(), e = 0, i = s.data.length; e < i; e++) l[e] = o, n = r._computeAngle(e), c[e] = n, o += n;
                        for (e = 0, i = h.length; e < i; ++e) h[e]._options = r._resolveDataElementOptions(h[e], e), r.updateElement(h[e], e, t)
                    },
                    _updateRadius: function() {
                        var t = this,
                            e = t.chart,
                            i = e.chartArea,
                            n = e.options,
                            r = Math.min(i.right - i.left, i.bottom - i.top);
                        e.outerRadius = Math.max(r / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
                    },
                    updateElement: function(t, e, i) {
                        var n = this,
                            r = n.chart,
                            s = n.getDataset(),
                            a = r.options,
                            o = a.animation,
                            l = r.scale,
                            c = r.data.labels,
                            h = l.xCenter,
                            u = l.yCenter,
                            d = a.startAngle,
                            p = t.hidden ? 0 : l.getDistanceFromCenterForValue(s.data[e]),
                            f = n._starts[e],
                            g = f + (t.hidden ? 0 : n._angles[e]),
                            m = o.animateScale ? 0 : l.getDistanceFromCenterForValue(s.data[e]),
                            v = t._options || {};
                        ct.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: l,
                            _model: {
                                backgroundColor: v.backgroundColor,
                                borderColor: v.borderColor,
                                borderWidth: v.borderWidth,
                                borderAlign: v.borderAlign,
                                x: h,
                                y: u,
                                innerRadius: 0,
                                outerRadius: i ? m : p,
                                startAngle: i && o.animateRotate ? d : f,
                                endAngle: i && o.animateRotate ? d : g,
                                label: ct.valueAtIndexOrDefault(c, e, c[e])
                            }
                        }), t.pivot()
                    },
                    countVisibleElements: function() {
                        var t = this.getDataset(),
                            e = this.getMeta(),
                            i = 0;
                        return ct.each(e.data, (function(e, n) {
                            isNaN(t.data[n]) || e.hidden || i++
                        })), i
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            i = t._options,
                            n = ct.getHoverColor,
                            r = ct.valueOrDefault;
                        t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth
                        }, e.backgroundColor = r(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = r(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = r(i.hoverBorderWidth, i.borderWidth)
                    },
                    _computeAngle: function(t) {
                        var e = this,
                            i = this.getMeta().count,
                            n = e.getDataset(),
                            r = e.getMeta();
                        if (isNaN(n.data[t]) || r.data[t].hidden) return 0;
                        var s = {
                            chart: e.chart,
                            dataIndex: t,
                            dataset: n,
                            datasetIndex: e.index
                        };
                        return we([e.chart.options.elements.arc.angle, 2 * Math.PI / i], s, t)
                    }
                });
                K._set("pie", ct.clone(K.doughnut)), K._set("pie", {
                    cutoutPercentage: 0
                });
                var ke = pe,
                    Se = ct.valueOrDefault;
                K._set("radar", {
                    spanGaps: !1,
                    scale: {
                        type: "radialLinear"
                    },
                    elements: {
                        line: {
                            fill: "start",
                            tension: 0
                        }
                    }
                });
                var $e = $t.extend({
                    datasetElementType: Xt.Line,
                    dataElementType: Xt.Point,
                    linkScales: ct.noop,
                    _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
                    _dataElementOptions: {
                        backgroundColor: "pointBackgroundColor",
                        borderColor: "pointBorderColor",
                        borderWidth: "pointBorderWidth",
                        hitRadius: "pointHitRadius",
                        hoverBackgroundColor: "pointHoverBackgroundColor",
                        hoverBorderColor: "pointHoverBorderColor",
                        hoverBorderWidth: "pointHoverBorderWidth",
                        hoverRadius: "pointHoverRadius",
                        pointStyle: "pointStyle",
                        radius: "pointRadius",
                        rotation: "pointRotation"
                    },
                    _getIndexScaleId: function() {
                        return this.chart.scale.id
                    },
                    _getValueScaleId: function() {
                        return this.chart.scale.id
                    },
                    update: function(t) {
                        var e, i, n = this,
                            r = n.getMeta(),
                            s = r.dataset,
                            a = r.data || [],
                            o = n.chart.scale,
                            l = n._config;
                        for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), s._scale = o, s._datasetIndex = n.index, s._children = a, s._loop = !0, s._model = n._resolveDatasetElementOptions(s), s.pivot(), e = 0, i = a.length; e < i; ++e) n.updateElement(a[e], e, t);
                        for (n.updateBezierControlPoints(), e = 0, i = a.length; e < i; ++e) a[e].pivot()
                    },
                    updateElement: function(t, e, i) {
                        var n = this,
                            r = t.custom || {},
                            s = n.getDataset(),
                            a = n.chart.scale,
                            o = a.getPointPositionForValue(e, s.data[e]),
                            l = n._resolveDataElementOptions(t, e),
                            c = n.getMeta().dataset._model,
                            h = i ? a.xCenter : o.x,
                            u = i ? a.yCenter : o.y;
                        t._scale = a, t._options = l, t._datasetIndex = n.index, t._index = e, t._model = {
                            x: h,
                            y: u,
                            skip: r.skip || isNaN(h) || isNaN(u),
                            radius: l.radius,
                            pointStyle: l.pointStyle,
                            rotation: l.rotation,
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            tension: Se(r.tension, c ? c.tension : 0),
                            hitRadius: l.hitRadius
                        }
                    },
                    _resolveDatasetElementOptions: function() {
                        var t = this,
                            e = t._config,
                            i = t.chart.options,
                            n = $t.prototype._resolveDatasetElementOptions.apply(t, arguments);
                        return n.spanGaps = Se(e.spanGaps, i.spanGaps), n.tension = Se(e.lineTension, i.elements.line.tension), n
                    },
                    updateBezierControlPoints: function() {
                        var t, e, i, n, r = this,
                            s = r.getMeta(),
                            a = r.chart.chartArea,
                            o = s.data || [];

                        function l(t, e, i) {
                            return Math.max(Math.min(t, i), e)
                        }
                        for (s.dataset._model.spanGaps && (o = o.filter((function(t) {
                                return !t._model.skip
                            }))), t = 0, e = o.length; t < e; ++t) i = o[t]._model, n = ct.splineCurve(ct.previousItem(o, t, !0)._model, i, ct.nextItem(o, t, !0)._model, i.tension), i.controlPointPreviousX = l(n.previous.x, a.left, a.right), i.controlPointPreviousY = l(n.previous.y, a.top, a.bottom), i.controlPointNextX = l(n.next.x, a.left, a.right), i.controlPointNextY = l(n.next.y, a.top, a.bottom)
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            i = t._options,
                            n = ct.getHoverColor;
                        t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth,
                            radius: e.radius
                        }, e.backgroundColor = Se(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Se(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Se(i.hoverBorderWidth, i.borderWidth), e.radius = Se(i.hoverRadius, i.radius)
                    }
                });
                K._set("scatter", {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            id: "x-axis-1",
                            type: "linear",
                            position: "bottom"
                        }],
                        yAxes: [{
                            id: "y-axis-1",
                            type: "linear",
                            position: "left"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t) {
                                return "(" + t.xLabel + ", " + t.yLabel + ")"
                            }
                        }
                    }
                }), K._set("global", {
                    datasets: {
                        scatter: {
                            showLine: !1
                        }
                    }
                });
                var Ae = _e,
                    Ie = {
                        bar: se,
                        bubble: le,
                        doughnut: pe,
                        horizontalBar: fe,
                        line: _e,
                        polarArea: Ce,
                        pie: ke,
                        radar: $e,
                        scatter: Ae
                    };

                function Me(t, e) {
                    return t.native ? {
                        x: t.x,
                        y: t.y
                    } : ct.getRelativePosition(t, e)
                }

                function Oe(t, e) {
                    var i, n, r, s, a, o, l = t._getSortedVisibleDatasetMetas();
                    for (n = 0, s = l.length; n < s; ++n)
                        for (i = l[n].data, r = 0, a = i.length; r < a; ++r) o = i[r], o._view.skip || e(o)
                }

                function Te(t, e) {
                    var i = [];
                    return Oe(t, (function(t) {
                        t.inRange(e.x, e.y) && i.push(t)
                    })), i
                }

                function Le(t, e, i, n) {
                    var r = Number.POSITIVE_INFINITY,
                        s = [];
                    return Oe(t, (function(t) {
                        if (!i || t.inRange(e.x, e.y)) {
                            var a = t.getCenterPoint(),
                                o = n(e, a);
                            o < r ? (s = [t], r = o) : o === r && s.push(t)
                        }
                    })), s
                }

                function Pe(t) {
                    var e = -1 !== t.indexOf("x"),
                        i = -1 !== t.indexOf("y");
                    return function(t, n) {
                        var r = e ? Math.abs(t.x - n.x) : 0,
                            s = i ? Math.abs(t.y - n.y) : 0;
                        return Math.sqrt(Math.pow(r, 2) + Math.pow(s, 2))
                    }
                }

                function De(t, e, i) {
                    var n = Me(e, t);
                    i.axis = i.axis || "x";
                    var r = Pe(i.axis),
                        s = i.intersect ? Te(t, n) : Le(t, n, !1, r),
                        a = [];
                    return s.length ? (t._getSortedVisibleDatasetMetas().forEach((function(t) {
                        var e = t.data[s[0]._index];
                        e && !e._view.skip && a.push(e)
                    })), a) : []
                }
                var Be = {
                        modes: {
                            single: function(t, e) {
                                var i = Me(e, t),
                                    n = [];
                                return Oe(t, (function(t) {
                                    if (t.inRange(i.x, i.y)) return n.push(t), n
                                })), n.slice(0, 1)
                            },
                            label: De,
                            index: De,
                            dataset: function(t, e, i) {
                                var n = Me(e, t);
                                i.axis = i.axis || "xy";
                                var r = Pe(i.axis),
                                    s = i.intersect ? Te(t, n) : Le(t, n, !1, r);
                                return s.length > 0 && (s = t.getDatasetMeta(s[0]._datasetIndex).data), s
                            },
                            "x-axis": function(t, e) {
                                return De(t, e, {
                                    intersect: !1
                                })
                            },
                            point: function(t, e) {
                                var i = Me(e, t);
                                return Te(t, i)
                            },
                            nearest: function(t, e, i) {
                                var n = Me(e, t);
                                i.axis = i.axis || "xy";
                                var r = Pe(i.axis);
                                return Le(t, n, i.intersect, r)
                            },
                            x: function(t, e, i) {
                                var n = Me(e, t),
                                    r = [],
                                    s = !1;
                                return Oe(t, (function(t) {
                                    t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
                                })), i.intersect && !s && (r = []), r
                            },
                            y: function(t, e, i) {
                                var n = Me(e, t),
                                    r = [],
                                    s = !1;
                                return Oe(t, (function(t) {
                                    t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
                                })), i.intersect && !s && (r = []), r
                            }
                        }
                    },
                    Ee = ct.extend;

                function Fe(t, e) {
                    return ct.where(t, (function(t) {
                        return t.pos === e
                    }))
                }

                function Ve(t, e) {
                    return t.sort((function(t, i) {
                        var n = e ? i : t,
                            r = e ? t : i;
                        return n.weight === r.weight ? n.index - r.index : n.weight - r.weight
                    }))
                }

                function Ne(t) {
                    var e, i, n, r = [];
                    for (e = 0, i = (t || []).length; e < i; ++e) n = t[e], r.push({
                        index: e,
                        box: n,
                        pos: n.position,
                        horizontal: n.isHorizontal(),
                        weight: n.weight
                    });
                    return r
                }

                function ze(t, e) {
                    var i, n, r;
                    for (i = 0, n = t.length; i < n; ++i) r = t[i], r.width = r.horizontal ? r.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, r.height = r.horizontal && e.hBoxMaxHeight
                }

                function Re(t) {
                    var e = Ne(t),
                        i = Ve(Fe(e, "left"), !0),
                        n = Ve(Fe(e, "right")),
                        r = Ve(Fe(e, "top"), !0),
                        s = Ve(Fe(e, "bottom"));
                    return {
                        leftAndTop: i.concat(r),
                        rightAndBottom: n.concat(s),
                        chartArea: Fe(e, "chartArea"),
                        vertical: i.concat(n),
                        horizontal: r.concat(s)
                    }
                }

                function We(t, e, i, n) {
                    return Math.max(t[i], e[i]) + Math.max(t[n], e[n])
                }

                function He(t, e, i) {
                    var n, r, s = i.box,
                        a = t.maxPadding;
                    if (i.size && (t[i.pos] -= i.size), i.size = i.horizontal ? s.height : s.width, t[i.pos] += i.size, s.getPadding) {
                        var o = s.getPadding();
                        a.top = Math.max(a.top, o.top), a.left = Math.max(a.left, o.left), a.bottom = Math.max(a.bottom, o.bottom), a.right = Math.max(a.right, o.right)
                    }
                    if (n = e.outerWidth - We(a, t, "left", "right"), r = e.outerHeight - We(a, t, "top", "bottom"), n !== t.w || r !== t.h) return t.w = n, t.h = r, i.horizontal ? n !== t.w : r !== t.h
                }

                function je(t) {
                    var e = t.maxPadding;

                    function i(i) {
                        var n = Math.max(e[i] - t[i], 0);
                        return t[i] += n, n
                    }
                    t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
                }

                function qe(t, e) {
                    var i = e.maxPadding;

                    function n(t) {
                        var n = {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        };
                        return t.forEach((function(t) {
                            n[t] = Math.max(e[t], i[t])
                        })), n
                    }
                    return n(t ? ["left", "right"] : ["top", "bottom"])
                }

                function Ue(t, e, i) {
                    var n, r, s, a, o, l, c = [];
                    for (n = 0, r = t.length; n < r; ++n) s = t[n], a = s.box, a.update(s.width || e.w, s.height || e.h, qe(s.horizontal, e)), He(e, i, s) && (l = !0, c.length && (o = !0)), a.fullWidth || c.push(s);
                    return o && Ue(c, e, i) || l
                }

                function Ye(t, e, i) {
                    var n, r, s, a, o = i.padding,
                        l = e.x,
                        c = e.y;
                    for (n = 0, r = t.length; n < r; ++n) s = t[n], a = s.box, s.horizontal ? (a.left = a.fullWidth ? o.left : e.left, a.right = a.fullWidth ? i.outerWidth - o.right : e.left + e.w, a.top = c, a.bottom = c + a.height, a.width = a.right - a.left, c = a.bottom) : (a.left = l, a.right = l + a.width, a.top = e.top, a.bottom = e.top + e.h, a.height = a.bottom - a.top, l = a.right);
                    e.x = l, e.y = c
                }
                K._set("global", {
                    layout: {
                        padding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                });
                var Ge = {
                        defaults: {},
                        addBox: function(t, e) {
                            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                                return [{
                                    z: 0,
                                    draw: function() {
                                        e.draw.apply(e, arguments)
                                    }
                                }]
                            }, t.boxes.push(e)
                        },
                        removeBox: function(t, e) {
                            var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
                        },
                        configure: function(t, e, i) {
                            for (var n, r = ["fullWidth", "position", "weight"], s = r.length, a = 0; a < s; ++a) n = r[a], i.hasOwnProperty(n) && (e[n] = i[n])
                        },
                        update: function(t, e, i) {
                            if (t) {
                                var n = t.options.layout || {},
                                    r = ct.options.toPadding(n.padding),
                                    s = e - r.width,
                                    a = i - r.height,
                                    o = Re(t.boxes),
                                    l = o.vertical,
                                    c = o.horizontal,
                                    h = Object.freeze({
                                        outerWidth: e,
                                        outerHeight: i,
                                        padding: r,
                                        availableWidth: s,
                                        vBoxMaxWidth: s / 2 / l.length,
                                        hBoxMaxHeight: a / 2
                                    }),
                                    u = Ee({
                                        maxPadding: Ee({}, r),
                                        w: s,
                                        h: a,
                                        x: r.left,
                                        y: r.top
                                    }, r);
                                ze(l.concat(c), h), Ue(l, u, h), Ue(c, u, h) && Ue(l, u, h), je(u), Ye(o.leftAndTop, u, h), u.x += u.w, u.y += u.h, Ye(o.rightAndBottom, u, h), t.chartArea = {
                                    left: u.left,
                                    top: u.top,
                                    right: u.left + u.w,
                                    bottom: u.top + u.h
                                }, ct.each(o.chartArea, (function(e) {
                                    var i = e.box;
                                    Ee(i, t.chartArea), i.update(u.w, u.h)
                                }))
                            }
                        }
                    },
                    Xe = {
                        acquireContext: function(t) {
                            return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                        }
                    },
                    Ze = "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n",
                    Ke = Object.freeze({
                        __proto__: null,
                        default: Ze
                    }),
                    Qe = i(Ke),
                    Je = "$chartjs",
                    ti = "chartjs-",
                    ei = ti + "size-monitor",
                    ii = ti + "render-monitor",
                    ni = ti + "render-animation",
                    ri = ["animationstart", "webkitAnimationStart"],
                    si = {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup",
                        pointerenter: "mouseenter",
                        pointerdown: "mousedown",
                        pointermove: "mousemove",
                        pointerup: "mouseup",
                        pointerleave: "mouseout",
                        pointerout: "mouseout"
                    };

                function ai(t, e) {
                    var i = ct.getStyle(t, e),
                        n = i && i.match(/^(\d+)(\.\d+)?px$/);
                    return n ? Number(n[1]) : void 0
                }

                function oi(t, e) {
                    var i = t.style,
                        n = t.getAttribute("height"),
                        r = t.getAttribute("width");
                    if (t[Je] = {
                            initial: {
                                height: n,
                                width: r,
                                style: {
                                    display: i.display,
                                    height: i.height,
                                    width: i.width
                                }
                            }
                        }, i.display = i.display || "block", null === r || "" === r) {
                        var s = ai(t, "width");
                        void 0 !== s && (t.width = s)
                    }
                    if (null === n || "" === n)
                        if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                        else {
                            var a = ai(t, "height");
                            void 0 !== s && (t.height = a)
                        }
                    return t
                }
                var li = function() {
                        var t = !1;
                        try {
                            var e = Object.defineProperty({}, "passive", {
                                get: function() {
                                    t = !0
                                }
                            });
                            window.addEventListener("e", null, e)
                        } catch (i) {}
                        return t
                    }(),
                    ci = !!li && {
                        passive: !0
                    };

                function hi(t, e, i) {
                    t.addEventListener(e, i, ci)
                }

                function ui(t, e, i) {
                    t.removeEventListener(e, i, ci)
                }

                function di(t, e, i, n, r) {
                    return {
                        type: t,
                        chart: e,
                        native: r || null,
                        x: void 0 !== i ? i : null,
                        y: void 0 !== n ? n : null
                    }
                }

                function pi(t, e) {
                    var i = si[t.type] || t.type,
                        n = ct.getRelativePosition(t, e);
                    return di(i, e, n.x, n.y, t)
                }

                function fi(t, e) {
                    var i = !1,
                        n = [];
                    return function() {
                        n = Array.prototype.slice.call(arguments), e = e || this, i || (i = !0, ct.requestAnimFrame.call(window, (function() {
                            i = !1, t.apply(e, n)
                        })))
                    }
                }

                function gi(t) {
                    var e = document.createElement("div");
                    return e.className = t || "", e
                }

                function mi(t) {
                    var e = 1e6,
                        i = gi(ei),
                        n = gi(ei + "-expand"),
                        r = gi(ei + "-shrink");
                    n.appendChild(gi()), r.appendChild(gi()), i.appendChild(n), i.appendChild(r), i._reset = function() {
                        n.scrollLeft = e, n.scrollTop = e, r.scrollLeft = e, r.scrollTop = e
                    };
                    var s = function() {
                        i._reset(), t()
                    };
                    return hi(n, "scroll", s.bind(n, "expand")), hi(r, "scroll", s.bind(r, "shrink")), i
                }

                function vi(t, e) {
                    var i = t[Je] || (t[Je] = {}),
                        n = i.renderProxy = function(t) {
                            t.animationName === ni && e()
                        };
                    ct.each(ri, (function(e) {
                        hi(t, e, n)
                    })), i.reflow = !!t.offsetParent, t.classList.add(ii)
                }

                function bi(t) {
                    var e = t[Je] || {},
                        i = e.renderProxy;
                    i && (ct.each(ri, (function(e) {
                        ui(t, e, i)
                    })), delete e.renderProxy), t.classList.remove(ii)
                }

                function yi(t, e, i) {
                    var n = t[Je] || (t[Je] = {}),
                        r = n.resizer = mi(fi((function() {
                            if (n.resizer) {
                                var r = i.options.maintainAspectRatio && t.parentNode,
                                    s = r ? r.clientWidth : 0;
                                e(di("resize", i)), r && r.clientWidth < s && i.canvas && e(di("resize", i))
                            }
                        })));
                    vi(t, (function() {
                        if (n.resizer) {
                            var e = t.parentNode;
                            e && e !== r.parentNode && e.insertBefore(r, e.firstChild), r._reset()
                        }
                    }))
                }

                function xi(t) {
                    var e = t[Je] || {},
                        i = e.resizer;
                    delete e.resizer, bi(t), i && i.parentNode && i.parentNode.removeChild(i)
                }

                function _i(t, e) {
                    var i = t[Je] || (t[Je] = {});
                    if (!i.containsStyles) {
                        i.containsStyles = !0, e = "/* Chart.js */\n" + e;
                        var n = document.createElement("style");
                        n.setAttribute("type", "text/css"), n.appendChild(document.createTextNode(e)), t.appendChild(n)
                    }
                }
                var wi = {
                    disableCSSInjection: !1,
                    _enabled: "undefined" !== typeof window && "undefined" !== typeof document,
                    _ensureLoaded: function(t) {
                        if (!this.disableCSSInjection) {
                            var e = t.getRootNode ? t.getRootNode() : document,
                                i = e.host ? e : document.head;
                            _i(i, Qe)
                        }
                    },
                    acquireContext: function(t, e) {
                        "string" === typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                        var i = t && t.getContext && t.getContext("2d");
                        return i && i.canvas === t ? (this._ensureLoaded(t), oi(t, e), i) : null
                    },
                    releaseContext: function(t) {
                        var e = t.canvas;
                        if (e[Je]) {
                            var i = e[Je].initial;
                            ["height", "width"].forEach((function(t) {
                                var n = i[t];
                                ct.isNullOrUndef(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
                            })), ct.each(i.style || {}, (function(t, i) {
                                e.style[i] = t
                            })), e.width = e.width, delete e[Je]
                        }
                    },
                    addEventListener: function(t, e, i) {
                        var n = t.canvas;
                        if ("resize" !== e) {
                            var r = i[Je] || (i[Je] = {}),
                                s = r.proxies || (r.proxies = {}),
                                a = s[t.id + "_" + e] = function(e) {
                                    i(pi(e, t))
                                };
                            hi(n, e, a)
                        } else yi(n, i, t)
                    },
                    removeEventListener: function(t, e, i) {
                        var n = t.canvas;
                        if ("resize" !== e) {
                            var r = i[Je] || {},
                                s = r.proxies || {},
                                a = s[t.id + "_" + e];
                            a && ui(n, e, a)
                        } else xi(n)
                    }
                };
                ct.addEvent = hi, ct.removeEvent = ui;
                var Ci = wi._enabled ? wi : Xe,
                    ki = ct.extend({
                        initialize: function() {},
                        acquireContext: function() {},
                        releaseContext: function() {},
                        addEventListener: function() {},
                        removeEventListener: function() {}
                    }, Ci);
                K._set("global", {
                    plugins: {}
                });
                var Si = {
                        _plugins: [],
                        _cacheId: 0,
                        register: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach((function(t) {
                                -1 === e.indexOf(t) && e.push(t)
                            })), this._cacheId++
                        },
                        unregister: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach((function(t) {
                                var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
                            })), this._cacheId++
                        },
                        clear: function() {
                            this._plugins = [], this._cacheId++
                        },
                        count: function() {
                            return this._plugins.length
                        },
                        getAll: function() {
                            return this._plugins
                        },
                        notify: function(t, e, i) {
                            var n, r, s, a, o, l = this.descriptors(t),
                                c = l.length;
                            for (n = 0; n < c; ++n)
                                if (r = l[n], s = r.plugin, o = s[e], "function" === typeof o && (a = [t].concat(i || []), a.push(r.options), !1 === o.apply(s, a))) return !1;
                            return !0
                        },
                        descriptors: function(t) {
                            var e = t.$plugins || (t.$plugins = {});
                            if (e.id === this._cacheId) return e.descriptors;
                            var i = [],
                                n = [],
                                r = t && t.config || {},
                                s = r.options && r.options.plugins || {};
                            return this._plugins.concat(r.plugins || []).forEach((function(t) {
                                var e = i.indexOf(t);
                                if (-1 === e) {
                                    var r = t.id,
                                        a = s[r];
                                    !1 !== a && (!0 === a && (a = ct.clone(K.global.plugins[r])), i.push(t), n.push({
                                        plugin: t,
                                        options: a || {}
                                    }))
                                }
                            })), e.descriptors = n, e.id = this._cacheId, n
                        },
                        _invalidate: function(t) {
                            delete t.$plugins
                        }
                    },
                    $i = {
                        constructors: {},
                        defaults: {},
                        registerScaleType: function(t, e, i) {
                            this.constructors[t] = e, this.defaults[t] = ct.clone(i)
                        },
                        getScaleConstructor: function(t) {
                            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                        },
                        getScaleDefaults: function(t) {
                            return this.defaults.hasOwnProperty(t) ? ct.merge({}, [K.scale, this.defaults[t]]) : {}
                        },
                        updateScaleDefaults: function(t, e) {
                            var i = this;
                            i.defaults.hasOwnProperty(t) && (i.defaults[t] = ct.extend(i.defaults[t], e))
                        },
                        addScalesToLayout: function(t) {
                            ct.each(t.scales, (function(e) {
                                e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, Ge.addBox(t, e)
                            }))
                        }
                    },
                    Ai = ct.valueOrDefault,
                    Ii = ct.rtl.getRtlAdapter;
                K._set("global", {
                    tooltips: {
                        enabled: !0,
                        custom: null,
                        mode: "nearest",
                        position: "average",
                        intersect: !0,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        titleFontStyle: "bold",
                        titleSpacing: 2,
                        titleMarginBottom: 6,
                        titleFontColor: "#fff",
                        titleAlign: "left",
                        bodySpacing: 2,
                        bodyFontColor: "#fff",
                        bodyAlign: "left",
                        footerFontStyle: "bold",
                        footerSpacing: 2,
                        footerMarginTop: 6,
                        footerFontColor: "#fff",
                        footerAlign: "left",
                        yPadding: 6,
                        xPadding: 6,
                        caretPadding: 2,
                        caretSize: 5,
                        cornerRadius: 6,
                        multiKeyBackground: "#fff",
                        displayColors: !0,
                        borderColor: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        callbacks: {
                            beforeTitle: ct.noop,
                            title: function(t, e) {
                                var i = "",
                                    n = e.labels,
                                    r = n ? n.length : 0;
                                if (t.length > 0) {
                                    var s = t[0];
                                    s.label ? i = s.label : s.xLabel ? i = s.xLabel : r > 0 && s.index < r && (i = n[s.index])
                                }
                                return i
                            },
                            afterTitle: ct.noop,
                            beforeBody: ct.noop,
                            beforeLabel: ct.noop,
                            label: function(t, e) {
                                var i = e.datasets[t.datasetIndex].label || "";
                                return i && (i += ": "), ct.isNullOrUndef(t.value) ? i += t.yLabel : i += t.value, i
                            },
                            labelColor: function(t, e) {
                                var i = e.getDatasetMeta(t.datasetIndex),
                                    n = i.data[t.index],
                                    r = n._view;
                                return {
                                    borderColor: r.borderColor,
                                    backgroundColor: r.backgroundColor
                                }
                            },
                            labelTextColor: function() {
                                return this._options.bodyFontColor
                            },
                            afterLabel: ct.noop,
                            afterBody: ct.noop,
                            beforeFooter: ct.noop,
                            footer: ct.noop,
                            afterFooter: ct.noop
                        }
                    }
                });
                var Mi = {
                    average: function(t) {
                        if (!t.length) return !1;
                        var e, i, n = 0,
                            r = 0,
                            s = 0;
                        for (e = 0, i = t.length; e < i; ++e) {
                            var a = t[e];
                            if (a && a.hasValue()) {
                                var o = a.tooltipPosition();
                                n += o.x, r += o.y, ++s
                            }
                        }
                        return {
                            x: n / s,
                            y: r / s
                        }
                    },
                    nearest: function(t, e) {
                        var i, n, r, s = e.x,
                            a = e.y,
                            o = Number.POSITIVE_INFINITY;
                        for (i = 0, n = t.length; i < n; ++i) {
                            var l = t[i];
                            if (l && l.hasValue()) {
                                var c = l.getCenterPoint(),
                                    h = ct.distanceBetweenPoints(e, c);
                                h < o && (o = h, r = l)
                            }
                        }
                        if (r) {
                            var u = r.tooltipPosition();
                            s = u.x, a = u.y
                        }
                        return {
                            x: s,
                            y: a
                        }
                    }
                };

                function Oi(t, e) {
                    return e && (ct.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function Ti(t) {
                    return ("string" === typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
                }

                function Li(t) {
                    var e = t._xScale,
                        i = t._yScale || t._scale,
                        n = t._index,
                        r = t._datasetIndex,
                        s = t._chart.getDatasetMeta(r).controller,
                        a = s._getIndexScale(),
                        o = s._getValueScale();
                    return {
                        xLabel: e ? e.getLabelForIndex(n, r) : "",
                        yLabel: i ? i.getLabelForIndex(n, r) : "",
                        label: a ? "" + a.getLabelForIndex(n, r) : "",
                        value: o ? "" + o.getLabelForIndex(n, r) : "",
                        index: n,
                        datasetIndex: r,
                        x: t._model.x,
                        y: t._model.y
                    }
                }

                function Pi(t) {
                    var e = K.global;
                    return {
                        xPadding: t.xPadding,
                        yPadding: t.yPadding,
                        xAlign: t.xAlign,
                        yAlign: t.yAlign,
                        rtl: t.rtl,
                        textDirection: t.textDirection,
                        bodyFontColor: t.bodyFontColor,
                        _bodyFontFamily: Ai(t.bodyFontFamily, e.defaultFontFamily),
                        _bodyFontStyle: Ai(t.bodyFontStyle, e.defaultFontStyle),
                        _bodyAlign: t.bodyAlign,
                        bodyFontSize: Ai(t.bodyFontSize, e.defaultFontSize),
                        bodySpacing: t.bodySpacing,
                        titleFontColor: t.titleFontColor,
                        _titleFontFamily: Ai(t.titleFontFamily, e.defaultFontFamily),
                        _titleFontStyle: Ai(t.titleFontStyle, e.defaultFontStyle),
                        titleFontSize: Ai(t.titleFontSize, e.defaultFontSize),
                        _titleAlign: t.titleAlign,
                        titleSpacing: t.titleSpacing,
                        titleMarginBottom: t.titleMarginBottom,
                        footerFontColor: t.footerFontColor,
                        _footerFontFamily: Ai(t.footerFontFamily, e.defaultFontFamily),
                        _footerFontStyle: Ai(t.footerFontStyle, e.defaultFontStyle),
                        footerFontSize: Ai(t.footerFontSize, e.defaultFontSize),
                        _footerAlign: t.footerAlign,
                        footerSpacing: t.footerSpacing,
                        footerMarginTop: t.footerMarginTop,
                        caretSize: t.caretSize,
                        cornerRadius: t.cornerRadius,
                        backgroundColor: t.backgroundColor,
                        opacity: 0,
                        legendColorBackground: t.multiKeyBackground,
                        displayColors: t.displayColors,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    }
                }

                function Di(t, e) {
                    var i = t._chart.ctx,
                        n = 2 * e.yPadding,
                        r = 0,
                        s = e.body,
                        a = s.reduce((function(t, e) {
                            return t + e.before.length + e.lines.length + e.after.length
                        }), 0);
                    a += e.beforeBody.length + e.afterBody.length;
                    var o = e.title.length,
                        l = e.footer.length,
                        c = e.titleFontSize,
                        h = e.bodyFontSize,
                        u = e.footerFontSize;
                    n += o * c, n += o ? (o - 1) * e.titleSpacing : 0, n += o ? e.titleMarginBottom : 0, n += a * h, n += a ? (a - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * u, n += l ? (l - 1) * e.footerSpacing : 0;
                    var d = 0,
                        p = function(t) {
                            r = Math.max(r, i.measureText(t).width + d)
                        };
                    return i.font = ct.fontString(c, e._titleFontStyle, e._titleFontFamily), ct.each(e.title, p), i.font = ct.fontString(h, e._bodyFontStyle, e._bodyFontFamily), ct.each(e.beforeBody.concat(e.afterBody), p), d = e.displayColors ? h + 2 : 0, ct.each(s, (function(t) {
                        ct.each(t.before, p), ct.each(t.lines, p), ct.each(t.after, p)
                    })), d = 0, i.font = ct.fontString(u, e._footerFontStyle, e._footerFontFamily), ct.each(e.footer, p), r += 2 * e.xPadding, {
                        width: r,
                        height: n
                    }
                }

                function Bi(t, e) {
                    var i, n, r, s, a, o = t._model,
                        l = t._chart,
                        c = t._chart.chartArea,
                        h = "center",
                        u = "center";
                    o.y < e.height ? u = "top" : o.y > l.height - e.height && (u = "bottom");
                    var d = (c.left + c.right) / 2,
                        p = (c.top + c.bottom) / 2;
                    "center" === u ? (i = function(t) {
                        return t <= d
                    }, n = function(t) {
                        return t > d
                    }) : (i = function(t) {
                        return t <= e.width / 2
                    }, n = function(t) {
                        return t >= l.width - e.width / 2
                    }), r = function(t) {
                        return t + e.width + o.caretSize + o.caretPadding > l.width
                    }, s = function(t) {
                        return t - e.width - o.caretSize - o.caretPadding < 0
                    }, a = function(t) {
                        return t <= p ? "top" : "bottom"
                    }, i(o.x) ? (h = "left", r(o.x) && (h = "center", u = a(o.y))) : n(o.x) && (h = "right", s(o.x) && (h = "center", u = a(o.y)));
                    var f = t._options;
                    return {
                        xAlign: f.xAlign ? f.xAlign : h,
                        yAlign: f.yAlign ? f.yAlign : u
                    }
                }

                function Ei(t, e, i, n) {
                    var r = t.x,
                        s = t.y,
                        a = t.caretSize,
                        o = t.caretPadding,
                        l = t.cornerRadius,
                        c = i.xAlign,
                        h = i.yAlign,
                        u = a + o,
                        d = l + o;
                    return "right" === c ? r -= e.width : "center" === c && (r -= e.width / 2, r + e.width > n.width && (r = n.width - e.width), r < 0 && (r = 0)), "top" === h ? s += u : s -= "bottom" === h ? e.height + u : e.height / 2, "center" === h ? "left" === c ? r += u : "right" === c && (r -= u) : "left" === c ? r -= d : "right" === c && (r += d), {
                        x: r,
                        y: s
                    }
                }

                function Fi(t, e) {
                    return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
                }

                function Vi(t) {
                    return Oi([], Ti(t))
                }
                var Ni = vt.extend({
                        initialize: function() {
                            this._model = Pi(this._options), this._lastActive = []
                        },
                        getTitle: function() {
                            var t = this,
                                e = t._options,
                                i = e.callbacks,
                                n = i.beforeTitle.apply(t, arguments),
                                r = i.title.apply(t, arguments),
                                s = i.afterTitle.apply(t, arguments),
                                a = [];
                            return a = Oi(a, Ti(n)), a = Oi(a, Ti(r)), a = Oi(a, Ti(s)), a
                        },
                        getBeforeBody: function() {
                            return Vi(this._options.callbacks.beforeBody.apply(this, arguments))
                        },
                        getBody: function(t, e) {
                            var i = this,
                                n = i._options.callbacks,
                                r = [];
                            return ct.each(t, (function(t) {
                                var s = {
                                    before: [],
                                    lines: [],
                                    after: []
                                };
                                Oi(s.before, Ti(n.beforeLabel.call(i, t, e))), Oi(s.lines, n.label.call(i, t, e)), Oi(s.after, Ti(n.afterLabel.call(i, t, e))), r.push(s)
                            })), r
                        },
                        getAfterBody: function() {
                            return Vi(this._options.callbacks.afterBody.apply(this, arguments))
                        },
                        getFooter: function() {
                            var t = this,
                                e = t._options.callbacks,
                                i = e.beforeFooter.apply(t, arguments),
                                n = e.footer.apply(t, arguments),
                                r = e.afterFooter.apply(t, arguments),
                                s = [];
                            return s = Oi(s, Ti(i)), s = Oi(s, Ti(n)), s = Oi(s, Ti(r)), s
                        },
                        update: function(t) {
                            var e, i, n = this,
                                r = n._options,
                                s = n._model,
                                a = n._model = Pi(r),
                                o = n._active,
                                l = n._data,
                                c = {
                                    xAlign: s.xAlign,
                                    yAlign: s.yAlign
                                },
                                h = {
                                    x: s.x,
                                    y: s.y
                                },
                                u = {
                                    width: s.width,
                                    height: s.height
                                },
                                d = {
                                    x: s.caretX,
                                    y: s.caretY
                                };
                            if (o.length) {
                                a.opacity = 1;
                                var p = [],
                                    f = [];
                                d = Mi[r.position].call(n, o, n._eventPosition);
                                var g = [];
                                for (e = 0, i = o.length; e < i; ++e) g.push(Li(o[e]));
                                r.filter && (g = g.filter((function(t) {
                                    return r.filter(t, l)
                                }))), r.itemSort && (g = g.sort((function(t, e) {
                                    return r.itemSort(t, e, l)
                                }))), ct.each(g, (function(t) {
                                    p.push(r.callbacks.labelColor.call(n, t, n._chart)), f.push(r.callbacks.labelTextColor.call(n, t, n._chart))
                                })), a.title = n.getTitle(g, l), a.beforeBody = n.getBeforeBody(g, l), a.body = n.getBody(g, l), a.afterBody = n.getAfterBody(g, l), a.footer = n.getFooter(g, l), a.x = d.x, a.y = d.y, a.caretPadding = r.caretPadding, a.labelColors = p, a.labelTextColors = f, a.dataPoints = g, u = Di(this, a), c = Bi(this, u), h = Ei(a, u, c, n._chart)
                            } else a.opacity = 0;
                            return a.xAlign = c.xAlign, a.yAlign = c.yAlign, a.x = h.x, a.y = h.y, a.width = u.width, a.height = u.height, a.caretX = d.x, a.caretY = d.y, n._model = a, t && r.custom && r.custom.call(n, a), n
                        },
                        drawCaret: function(t, e) {
                            var i = this._chart.ctx,
                                n = this._view,
                                r = this.getCaretPosition(t, e, n);
                            i.lineTo(r.x1, r.y1), i.lineTo(r.x2, r.y2), i.lineTo(r.x3, r.y3)
                        },
                        getCaretPosition: function(t, e, i) {
                            var n, r, s, a, o, l, c = i.caretSize,
                                h = i.cornerRadius,
                                u = i.xAlign,
                                d = i.yAlign,
                                p = t.x,
                                f = t.y,
                                g = e.width,
                                m = e.height;
                            if ("center" === d) o = f + m / 2, "left" === u ? (n = p, r = n - c, s = n, a = o + c, l = o - c) : (n = p + g, r = n + c, s = n, a = o - c, l = o + c);
                            else if ("left" === u ? (r = p + h + c, n = r - c, s = r + c) : "right" === u ? (r = p + g - h - c, n = r - c, s = r + c) : (r = i.caretX, n = r - c, s = r + c), "top" === d) a = f, o = a - c, l = a;
                            else {
                                a = f + m, o = a + c, l = a;
                                var v = s;
                                s = n, n = v
                            }
                            return {
                                x1: n,
                                x2: r,
                                x3: s,
                                y1: a,
                                y2: o,
                                y3: l
                            }
                        },
                        drawTitle: function(t, e, i) {
                            var n, r, s, a = e.title,
                                o = a.length;
                            if (o) {
                                var l = Ii(e.rtl, e.x, e.width);
                                for (t.x = Fi(e, e._titleAlign), i.textAlign = l.textAlign(e._titleAlign), i.textBaseline = "middle", n = e.titleFontSize, r = e.titleSpacing, i.fillStyle = e.titleFontColor, i.font = ct.fontString(n, e._titleFontStyle, e._titleFontFamily), s = 0; s < o; ++s) i.fillText(a[s], l.x(t.x), t.y + n / 2), t.y += n + r, s + 1 === o && (t.y += e.titleMarginBottom - r)
                            }
                        },
                        drawBody: function(t, e, i) {
                            var n, r, s, a, o, l, c, h, u = e.bodyFontSize,
                                d = e.bodySpacing,
                                p = e._bodyAlign,
                                f = e.body,
                                g = e.displayColors,
                                m = 0,
                                v = g ? Fi(e, "left") : 0,
                                b = Ii(e.rtl, e.x, e.width),
                                y = function(e) {
                                    i.fillText(e, b.x(t.x + m), t.y + u / 2), t.y += u + d
                                },
                                x = b.textAlign(p);
                            for (i.textAlign = p, i.textBaseline = "middle", i.font = ct.fontString(u, e._bodyFontStyle, e._bodyFontFamily), t.x = Fi(e, x), i.fillStyle = e.bodyFontColor, ct.each(e.beforeBody, y), m = g && "right" !== x ? "center" === p ? u / 2 + 1 : u + 2 : 0, o = 0, c = f.length; o < c; ++o) {
                                for (n = f[o], r = e.labelTextColors[o], s = e.labelColors[o], i.fillStyle = r, ct.each(n.before, y), a = n.lines, l = 0, h = a.length; l < h; ++l) {
                                    if (g) {
                                        var _ = b.x(v);
                                        i.fillStyle = e.legendColorBackground, i.fillRect(b.leftForLtr(_, u), t.y, u, u), i.lineWidth = 1, i.strokeStyle = s.borderColor, i.strokeRect(b.leftForLtr(_, u), t.y, u, u), i.fillStyle = s.backgroundColor, i.fillRect(b.leftForLtr(b.xPlus(_, 1), u - 2), t.y + 1, u - 2, u - 2), i.fillStyle = r
                                    }
                                    y(a[l])
                                }
                                ct.each(n.after, y)
                            }
                            m = 0, ct.each(e.afterBody, y), t.y -= d
                        },
                        drawFooter: function(t, e, i) {
                            var n, r, s = e.footer,
                                a = s.length;
                            if (a) {
                                var o = Ii(e.rtl, e.x, e.width);
                                for (t.x = Fi(e, e._footerAlign), t.y += e.footerMarginTop, i.textAlign = o.textAlign(e._footerAlign), i.textBaseline = "middle", n = e.footerFontSize, i.fillStyle = e.footerFontColor, i.font = ct.fontString(n, e._footerFontStyle, e._footerFontFamily), r = 0; r < a; ++r) i.fillText(s[r], o.x(t.x), t.y + n / 2), t.y += n + e.footerSpacing
                            }
                        },
                        drawBackground: function(t, e, i, n) {
                            i.fillStyle = e.backgroundColor, i.strokeStyle = e.borderColor, i.lineWidth = e.borderWidth;
                            var r = e.xAlign,
                                s = e.yAlign,
                                a = t.x,
                                o = t.y,
                                l = n.width,
                                c = n.height,
                                h = e.cornerRadius;
                            i.beginPath(), i.moveTo(a + h, o), "top" === s && this.drawCaret(t, n), i.lineTo(a + l - h, o), i.quadraticCurveTo(a + l, o, a + l, o + h), "center" === s && "right" === r && this.drawCaret(t, n), i.lineTo(a + l, o + c - h), i.quadraticCurveTo(a + l, o + c, a + l - h, o + c), "bottom" === s && this.drawCaret(t, n), i.lineTo(a + h, o + c), i.quadraticCurveTo(a, o + c, a, o + c - h), "center" === s && "left" === r && this.drawCaret(t, n), i.lineTo(a, o + h), i.quadraticCurveTo(a, o, a + h, o), i.closePath(), i.fill(), e.borderWidth > 0 && i.stroke()
                        },
                        draw: function() {
                            var t = this._chart.ctx,
                                e = this._view;
                            if (0 !== e.opacity) {
                                var i = {
                                        width: e.width,
                                        height: e.height
                                    },
                                    n = {
                                        x: e.x,
                                        y: e.y
                                    },
                                    r = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                    s = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                                this._options.enabled && s && (t.save(), t.globalAlpha = r, this.drawBackground(n, e, t, i), n.y += e.yPadding, ct.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(n, e, t), this.drawBody(n, e, t), this.drawFooter(n, e, t), ct.rtl.restoreTextDirection(t, e.textDirection), t.restore())
                            }
                        },
                        handleEvent: function(t) {
                            var e = this,
                                i = e._options,
                                n = !1;
                            return e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : (e._active = e._chart.getElementsAtEventForMode(t, i.mode, i), i.reverse && e._active.reverse()), n = !ct.arrayEquals(e._active, e._lastActive), n && (e._lastActive = e._active, (i.enabled || i.custom) && (e._eventPosition = {
                                x: t.x,
                                y: t.y
                            }, e.update(!0), e.pivot())), n
                        }
                    }),
                    zi = Mi,
                    Ri = Ni;
                Ri.positioners = zi;
                var Wi = ct.valueOrDefault;

                function Hi() {
                    return ct.merge({}, [].slice.call(arguments), {
                        merger: function(t, e, i, n) {
                            if ("xAxes" === t || "yAxes" === t) {
                                var r, s, a, o = i[t].length;
                                for (e[t] || (e[t] = []), r = 0; r < o; ++r) a = i[t][r], s = Wi(a.type, "xAxes" === t ? "category" : "linear"), r >= e[t].length && e[t].push({}), !e[t][r].type || a.type && a.type !== e[t][r].type ? ct.merge(e[t][r], [$i.getScaleDefaults(s), a]) : ct.merge(e[t][r], a)
                            } else ct._merger(t, e, i, n)
                        }
                    })
                }

                function ji() {
                    return ct.merge({}, [].slice.call(arguments), {
                        merger: function(t, e, i, n) {
                            var r = e[t] || {},
                                s = i[t];
                            "scales" === t ? e[t] = Hi(r, s) : "scale" === t ? e[t] = ct.merge(r, [$i.getScaleDefaults(s.type), s]) : ct._merger(t, e, i, n)
                        }
                    })
                }

                function qi(t) {
                    t = t || {};
                    var e = t.data = t.data || {};
                    return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = ji(K.global, K[t.type], t.options || {}), t
                }

                function Ui(t) {
                    var e = t.options;
                    ct.each(t.scales, (function(e) {
                        Ge.removeBox(t, e)
                    })), e = ji(K.global, K[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize()
                }

                function Yi(t, e, i) {
                    var n, r = function(t) {
                        return t.id === n
                    };
                    do {
                        n = e + i++
                    } while (ct.findIndex(t, r) >= 0);
                    return n
                }

                function Gi(t) {
                    return "top" === t || "bottom" === t
                }

                function Xi(t, e) {
                    return function(i, n) {
                        return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t]
                    }
                }
                K._set("global", {
                    elements: {},
                    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                    hover: {
                        onHover: null,
                        mode: "nearest",
                        intersect: !0,
                        animationDuration: 400
                    },
                    onClick: null,
                    maintainAspectRatio: !0,
                    responsive: !0,
                    responsiveAnimationDuration: 0
                });
                var Zi = function(t, e) {
                    return this.construct(t, e), this
                };
                ct.extend(Zi.prototype, {
                    construct: function(t, e) {
                        var i = this;
                        e = qi(e);
                        var n = ki.acquireContext(t, e),
                            r = n && n.canvas,
                            s = r && r.height,
                            a = r && r.width;
                        i.id = ct.uid(), i.ctx = n, i.canvas = r, i.config = e, i.width = a, i.height = s, i.aspectRatio = s ? a / s : null, i.options = e.options, i._bufferedRender = !1, i._layers = [], i.chart = i, i.controller = i, Zi.instances[i.id] = i, Object.defineProperty(i, "data", {
                            get: function() {
                                return i.config.data
                            },
                            set: function(t) {
                                i.config.data = t
                            }
                        }), n && r ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    },
                    initialize: function() {
                        var t = this;
                        return Si.notify(t, "beforeInit"), ct.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), Si.notify(t, "afterInit"), t
                    },
                    clear: function() {
                        return ct.canvas.clear(this), this
                    },
                    stop: function() {
                        return xt.cancelAnimation(this), this
                    },
                    resize: function(t) {
                        var e = this,
                            i = e.options,
                            n = e.canvas,
                            r = i.maintainAspectRatio && e.aspectRatio || null,
                            s = Math.max(0, Math.floor(ct.getMaximumWidth(n))),
                            a = Math.max(0, Math.floor(r ? s / r : ct.getMaximumHeight(n)));
                        if ((e.width !== s || e.height !== a) && (n.width = e.width = s, n.height = e.height = a, n.style.width = s + "px", n.style.height = a + "px", ct.retinaScale(e, i.devicePixelRatio), !t)) {
                            var o = {
                                width: s,
                                height: a
                            };
                            Si.notify(e, "resize", [o]), i.onResize && i.onResize(e, o), e.stop(), e.update({
                                duration: i.responsiveAnimationDuration
                            })
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options,
                            e = t.scales || {},
                            i = t.scale;
                        ct.each(e.xAxes, (function(t, i) {
                            t.id || (t.id = Yi(e.xAxes, "x-axis-", i))
                        })), ct.each(e.yAxes, (function(t, i) {
                            t.id || (t.id = Yi(e.yAxes, "y-axis-", i))
                        })), i && (i.id = i.id || "scale")
                    },
                    buildOrUpdateScales: function() {
                        var t = this,
                            e = t.options,
                            i = t.scales || {},
                            n = [],
                            r = Object.keys(i).reduce((function(t, e) {
                                return t[e] = !1, t
                            }), {});
                        e.scales && (n = n.concat((e.scales.xAxes || []).map((function(t) {
                            return {
                                options: t,
                                dtype: "category",
                                dposition: "bottom"
                            }
                        })), (e.scales.yAxes || []).map((function(t) {
                            return {
                                options: t,
                                dtype: "linear",
                                dposition: "left"
                            }
                        })))), e.scale && n.push({
                            options: e.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), ct.each(n, (function(e) {
                            var n = e.options,
                                s = n.id,
                                a = Wi(n.type, e.dtype);
                            Gi(n.position) !== Gi(e.dposition) && (n.position = e.dposition), r[s] = !0;
                            var o = null;
                            if (s in i && i[s].type === a) o = i[s], o.options = n, o.ctx = t.ctx, o.chart = t;
                            else {
                                var l = $i.getScaleConstructor(a);
                                if (!l) return;
                                o = new l({
                                    id: s,
                                    type: a,
                                    options: n,
                                    ctx: t.ctx,
                                    chart: t
                                }), i[o.id] = o
                            }
                            o.mergeTicksOptions(), e.isDefault && (t.scale = o)
                        })), ct.each(r, (function(t, e) {
                            t || delete i[e]
                        })), t.scales = i, $i.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function() {
                        var t, e, i = this,
                            n = [],
                            r = i.data.datasets;
                        for (t = 0, e = r.length; t < e; t++) {
                            var s = r[t],
                                a = i.getDatasetMeta(t),
                                o = s.type || i.config.type;
                            if (a.type && a.type !== o && (i.destroyDatasetMeta(t), a = i.getDatasetMeta(t)), a.type = o, a.order = s.order || 0, a.index = t, a.controller) a.controller.updateIndex(t), a.controller.linkScales();
                            else {
                                var l = Ie[a.type];
                                if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                                a.controller = new l(i, t), n.push(a.controller)
                            }
                        }
                        return n
                    },
                    resetElements: function() {
                        var t = this;
                        ct.each(t.data.datasets, (function(e, i) {
                            t.getDatasetMeta(i).controller.reset()
                        }), t)
                    },
                    reset: function() {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function(t) {
                        var e, i, n = this;
                        if (t && "object" === typeof t || (t = {
                                duration: t,
                                lazy: arguments[1]
                            }), Ui(n), Si._invalidate(n), !1 !== Si.notify(n, "beforeUpdate")) {
                            n.tooltip._data = n.data;
                            var r = n.buildOrUpdateControllers();
                            for (e = 0, i = n.data.datasets.length; e < i; e++) n.getDatasetMeta(e).controller.buildOrUpdateElements();
                            n.updateLayout(), n.options.animation && n.options.animation.duration && ct.each(r, (function(t) {
                                t.reset()
                            })), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], Si.notify(n, "afterUpdate"), n._layers.sort(Xi("z", "_idx")), n._bufferedRender ? n._bufferedRequest = {
                                duration: t.duration,
                                easing: t.easing,
                                lazy: t.lazy
                            } : n.render(t)
                        }
                    },
                    updateLayout: function() {
                        var t = this;
                        !1 !== Si.notify(t, "beforeLayout") && (Ge.update(this, this.width, this.height), t._layers = [], ct.each(t.boxes, (function(e) {
                            e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers())
                        }), t), t._layers.forEach((function(t, e) {
                            t._idx = e
                        })), Si.notify(t, "afterScaleUpdate"), Si.notify(t, "afterLayout"))
                    },
                    updateDatasets: function() {
                        var t = this;
                        if (!1 !== Si.notify(t, "beforeDatasetsUpdate")) {
                            for (var e = 0, i = t.data.datasets.length; e < i; ++e) t.updateDataset(e);
                            Si.notify(t, "afterDatasetsUpdate")
                        }
                    },
                    updateDataset: function(t) {
                        var e = this,
                            i = e.getDatasetMeta(t),
                            n = {
                                meta: i,
                                index: t
                            };
                        !1 !== Si.notify(e, "beforeDatasetUpdate", [n]) && (i.controller._update(), Si.notify(e, "afterDatasetUpdate", [n]))
                    },
                    render: function(t) {
                        var e = this;
                        t && "object" === typeof t || (t = {
                            duration: t,
                            lazy: arguments[1]
                        });
                        var i = e.options.animation,
                            n = Wi(t.duration, i && i.duration),
                            r = t.lazy;
                        if (!1 !== Si.notify(e, "beforeRender")) {
                            var s = function(t) {
                                Si.notify(e, "afterRender"), ct.callback(i && i.onComplete, [t], e)
                            };
                            if (i && n) {
                                var a = new yt({
                                    numSteps: n / 16.66,
                                    easing: t.easing || i.easing,
                                    render: function(t, e) {
                                        var i = ct.easing.effects[e.easing],
                                            n = e.currentStep,
                                            r = n / e.numSteps;
                                        t.draw(i(r), r, n)
                                    },
                                    onAnimationProgress: i.onProgress,
                                    onAnimationComplete: s
                                });
                                xt.addAnimation(e, a, n, r)
                            } else e.draw(), s(new yt({
                                numSteps: 0,
                                chart: e
                            }));
                            return e
                        }
                    },
                    draw: function(t) {
                        var e, i, n = this;
                        if (n.clear(), ct.isNullOrUndef(t) && (t = 1), n.transition(t), !(n.width <= 0 || n.height <= 0) && !1 !== Si.notify(n, "beforeDraw", [t])) {
                            for (i = n._layers, e = 0; e < i.length && i[e].z <= 0; ++e) i[e].draw(n.chartArea);
                            for (n.drawDatasets(t); e < i.length; ++e) i[e].draw(n.chartArea);
                            n._drawTooltip(t), Si.notify(n, "afterDraw", [t])
                        }
                    },
                    transition: function(t) {
                        for (var e = this, i = 0, n = (e.data.datasets || []).length; i < n; ++i) e.isDatasetVisible(i) && e.getDatasetMeta(i).controller.transition(t);
                        e.tooltip.transition(t)
                    },
                    _getSortedDatasetMetas: function(t) {
                        var e, i, n = this,
                            r = n.data.datasets || [],
                            s = [];
                        for (e = 0, i = r.length; e < i; ++e) t && !n.isDatasetVisible(e) || s.push(n.getDatasetMeta(e));
                        return s.sort(Xi("order", "index")), s
                    },
                    _getSortedVisibleDatasetMetas: function() {
                        return this._getSortedDatasetMetas(!0)
                    },
                    drawDatasets: function(t) {
                        var e, i, n = this;
                        if (!1 !== Si.notify(n, "beforeDatasetsDraw", [t])) {
                            for (e = n._getSortedVisibleDatasetMetas(), i = e.length - 1; i >= 0; --i) n.drawDataset(e[i], t);
                            Si.notify(n, "afterDatasetsDraw", [t])
                        }
                    },
                    drawDataset: function(t, e) {
                        var i = this,
                            n = {
                                meta: t,
                                index: t.index,
                                easingValue: e
                            };
                        !1 !== Si.notify(i, "beforeDatasetDraw", [n]) && (t.controller.draw(e), Si.notify(i, "afterDatasetDraw", [n]))
                    },
                    _drawTooltip: function(t) {
                        var e = this,
                            i = e.tooltip,
                            n = {
                                tooltip: i,
                                easingValue: t
                            };
                        !1 !== Si.notify(e, "beforeTooltipDraw", [n]) && (i.draw(), Si.notify(e, "afterTooltipDraw", [n]))
                    },
                    getElementAtEvent: function(t) {
                        return Be.modes.single(this, t)
                    },
                    getElementsAtEvent: function(t) {
                        return Be.modes.label(this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function(t) {
                        return Be.modes["x-axis"](this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function(t, e, i) {
                        var n = Be.modes[e];
                        return "function" === typeof n ? n(this, t, i) : []
                    },
                    getDatasetAtEvent: function(t) {
                        return Be.modes.dataset(this, t, {
                            intersect: !0
                        })
                    },
                    getDatasetMeta: function(t) {
                        var e = this,
                            i = e.data.datasets[t];
                        i._meta || (i._meta = {});
                        var n = i._meta[e.id];
                        return n || (n = i._meta[e.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null,
                            order: i.order || 0,
                            index: t
                        }), n
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" === typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroyDatasetMeta: function(t) {
                        var e = this.id,
                            i = this.data.datasets[t],
                            n = i._meta && i._meta[e];
                        n && (n.controller.destroy(), delete i._meta[e])
                    },
                    destroy: function() {
                        var t, e, i = this,
                            n = i.canvas;
                        for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
                        n && (i.unbindEvents(), ct.canvas.clear(i), ki.releaseContext(i.ctx), i.canvas = null, i.ctx = null), Si.notify(i, "destroy"), delete Zi.instances[i.id]
                    },
                    toBase64Image: function() {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip: function() {
                        var t = this;
                        t.tooltip = new Ri({
                            _chart: t,
                            _chartInstance: t,
                            _data: t.data,
                            _options: t.options.tooltips
                        }, t)
                    },
                    bindEvents: function() {
                        var t = this,
                            e = t._listeners = {},
                            i = function() {
                                t.eventHandler.apply(t, arguments)
                            };
                        ct.each(t.options.events, (function(n) {
                            ki.addEventListener(t, n, i), e[n] = i
                        })), t.options.responsive && (i = function() {
                            t.resize()
                        }, ki.addEventListener(t, "resize", i), e.resize = i)
                    },
                    unbindEvents: function() {
                        var t = this,
                            e = t._listeners;
                        e && (delete t._listeners, ct.each(e, (function(e, i) {
                            ki.removeEventListener(t, i, e)
                        })))
                    },
                    updateHoverStyle: function(t, e, i) {
                        var n, r, s, a = i ? "set" : "remove";
                        for (r = 0, s = t.length; r < s; ++r) n = t[r], n && this.getDatasetMeta(n._datasetIndex).controller[a + "HoverStyle"](n);
                        "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + a + "DatasetHoverStyle"]()
                    },
                    eventHandler: function(t) {
                        var e = this,
                            i = e.tooltip;
                        if (!1 !== Si.notify(e, "beforeEvent", [t])) {
                            e._bufferedRender = !0, e._bufferedRequest = null;
                            var n = e.handleEvent(t);
                            i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), Si.notify(e, "afterEvent", [t]);
                            var r = e._bufferedRequest;
                            return r ? e.render(r) : n && !e.animating && (e.stop(), e.render({
                                duration: e.options.hover.animationDuration,
                                lazy: !0
                            })), e._bufferedRender = !1, e._bufferedRequest = null, e
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            i = e.options || {},
                            n = i.hover,
                            r = !1;
                        return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, n.mode, n), ct.callback(i.onHover || i.hover.onHover, [t.native, e.active], e), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(e, t.native, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, n.mode, !1), e.active.length && n.mode && e.updateHoverStyle(e.active, n.mode, !0), r = !ct.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, r
                    }
                }), Zi.instances = {};
                var Ki = Zi;
                Zi.Controller = Zi, Zi.types = {}, ct.configMerge = ji, ct.scaleMerge = Hi;
                var Qi = function() {
                    function t(t, e, i) {
                        var n;
                        return "string" === typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                    }

                    function e(t) {
                        return void 0 !== t && null !== t && "none" !== t
                    }

                    function i(i, n, r) {
                        var s = document.defaultView,
                            a = ct._getParentNode(i),
                            o = s.getComputedStyle(i)[n],
                            l = s.getComputedStyle(a)[n],
                            c = e(o),
                            h = e(l),
                            u = Number.POSITIVE_INFINITY;
                        return c || h ? Math.min(c ? t(o, i, r) : u, h ? t(l, a, r) : u) : "none"
                    }
                    ct.where = function(t, e) {
                        if (ct.isArray(t) && Array.prototype.filter) return t.filter(e);
                        var i = [];
                        return ct.each(t, (function(t) {
                            e(t) && i.push(t)
                        })), i
                    }, ct.findIndex = Array.prototype.findIndex ? function(t, e, i) {
                        return t.findIndex(e, i)
                    } : function(t, e, i) {
                        i = void 0 === i ? t : i;
                        for (var n = 0, r = t.length; n < r; ++n)
                            if (e.call(i, t[n], n, t)) return n;
                        return -1
                    }, ct.findNextWhere = function(t, e, i) {
                        ct.isNullOrUndef(i) && (i = -1);
                        for (var n = i + 1; n < t.length; n++) {
                            var r = t[n];
                            if (e(r)) return r
                        }
                    }, ct.findPreviousWhere = function(t, e, i) {
                        ct.isNullOrUndef(i) && (i = t.length);
                        for (var n = i - 1; n >= 0; n--) {
                            var r = t[n];
                            if (e(r)) return r
                        }
                    }, ct.isNumber = function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    }, ct.almostEquals = function(t, e, i) {
                        return Math.abs(t - e) < i
                    }, ct.almostWhole = function(t, e) {
                        var i = Math.round(t);
                        return i - e <= t && i + e >= t
                    }, ct.max = function(t) {
                        return t.reduce((function(t, e) {
                            return isNaN(e) ? t : Math.max(t, e)
                        }), Number.NEGATIVE_INFINITY)
                    }, ct.min = function(t) {
                        return t.reduce((function(t, e) {
                            return isNaN(e) ? t : Math.min(t, e)
                        }), Number.POSITIVE_INFINITY)
                    }, ct.sign = Math.sign ? function(t) {
                        return Math.sign(t)
                    } : function(t) {
                        return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
                    }, ct.toRadians = function(t) {
                        return t * (Math.PI / 180)
                    }, ct.toDegrees = function(t) {
                        return t * (180 / Math.PI)
                    }, ct._decimalPlaces = function(t) {
                        if (ct.isFinite(t)) {
                            var e = 1,
                                i = 0;
                            while (Math.round(t * e) / e !== t) e *= 10, i++;
                            return i
                        }
                    }, ct.getAngleFromPoint = function(t, e) {
                        var i = e.x - t.x,
                            n = e.y - t.y,
                            r = Math.sqrt(i * i + n * n),
                            s = Math.atan2(n, i);
                        return s < -.5 * Math.PI && (s += 2 * Math.PI), {
                            angle: s,
                            distance: r
                        }
                    }, ct.distanceBetweenPoints = function(t, e) {
                        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                    }, ct.aliasPixel = function(t) {
                        return t % 2 === 0 ? 0 : .5
                    }, ct._alignPixel = function(t, e, i) {
                        var n = t.currentDevicePixelRatio,
                            r = i / 2;
                        return Math.round((e - r) * n) / n + r
                    }, ct.splineCurve = function(t, e, i, n) {
                        var r = t.skip ? e : t,
                            s = e,
                            a = i.skip ? e : i,
                            o = Math.sqrt(Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2)),
                            l = Math.sqrt(Math.pow(a.x - s.x, 2) + Math.pow(a.y - s.y, 2)),
                            c = o / (o + l),
                            h = l / (o + l);
                        c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
                        var u = n * c,
                            d = n * h;
                        return {
                            previous: {
                                x: s.x - u * (a.x - r.x),
                                y: s.y - u * (a.y - r.y)
                            },
                            next: {
                                x: s.x + d * (a.x - r.x),
                                y: s.y + d * (a.y - r.y)
                            }
                        }
                    }, ct.EPSILON = Number.EPSILON || 1e-14, ct.splineCurveMonotone = function(t) {
                        var e, i, n, r, s, a, o, l, c, h = (t || []).map((function(t) {
                                return {
                                    model: t._model,
                                    deltaK: 0,
                                    mK: 0
                                }
                            })),
                            u = h.length;
                        for (e = 0; e < u; ++e)
                            if (n = h[e], !n.model.skip) {
                                if (i = e > 0 ? h[e - 1] : null, r = e < u - 1 ? h[e + 1] : null, r && !r.model.skip) {
                                    var d = r.model.x - n.model.x;
                                    n.deltaK = 0 !== d ? (r.model.y - n.model.y) / d : 0
                                }!i || i.model.skip ? n.mK = n.deltaK : !r || r.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
                            }
                        for (e = 0; e < u - 1; ++e) n = h[e], r = h[e + 1], n.model.skip || r.model.skip || (ct.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (s = n.mK / n.deltaK, a = r.mK / n.deltaK, l = Math.pow(s, 2) + Math.pow(a, 2), l <= 9 || (o = 3 / Math.sqrt(l), n.mK = s * o * n.deltaK, r.mK = a * o * n.deltaK)));
                        for (e = 0; e < u; ++e) n = h[e], n.model.skip || (i = e > 0 ? h[e - 1] : null, r = e < u - 1 ? h[e + 1] : null, i && !i.model.skip && (c = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - c, n.model.controlPointPreviousY = n.model.y - c * n.mK), r && !r.model.skip && (c = (r.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + c, n.model.controlPointNextY = n.model.y + c * n.mK))
                    }, ct.nextItem = function(t, e, i) {
                        return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                    }, ct.previousItem = function(t, e, i) {
                        return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                    }, ct.niceNum = function(t, e) {
                        var i, n = Math.floor(ct.log10(t)),
                            r = t / Math.pow(10, n);
                        return i = e ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10, i * Math.pow(10, n)
                    }, ct.requestAnimFrame = function() {
                        return "undefined" === typeof window ? function(t) {
                            t()
                        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                            return window.setTimeout(t, 1e3 / 60)
                        }
                    }(), ct.getRelativePosition = function(t, e) {
                        var i, n, r = t.originalEvent || t,
                            s = t.target || t.srcElement,
                            a = s.getBoundingClientRect(),
                            o = r.touches;
                        o && o.length > 0 ? (i = o[0].clientX, n = o[0].clientY) : (i = r.clientX, n = r.clientY);
                        var l = parseFloat(ct.getStyle(s, "padding-left")),
                            c = parseFloat(ct.getStyle(s, "padding-top")),
                            h = parseFloat(ct.getStyle(s, "padding-right")),
                            u = parseFloat(ct.getStyle(s, "padding-bottom")),
                            d = a.right - a.left - l - h,
                            p = a.bottom - a.top - c - u;
                        return i = Math.round((i - a.left - l) / d * s.width / e.currentDevicePixelRatio), n = Math.round((n - a.top - c) / p * s.height / e.currentDevicePixelRatio), {
                            x: i,
                            y: n
                        }
                    }, ct.getConstraintWidth = function(t) {
                        return i(t, "max-width", "clientWidth")
                    }, ct.getConstraintHeight = function(t) {
                        return i(t, "max-height", "clientHeight")
                    }, ct._calculatePadding = function(t, e, i) {
                        return e = ct.getStyle(t, e), e.indexOf("%") > -1 ? i * parseInt(e, 10) / 100 : parseInt(e, 10)
                    }, ct._getParentNode = function(t) {
                        var e = t.parentNode;
                        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
                    }, ct.getMaximumWidth = function(t) {
                        var e = ct._getParentNode(t);
                        if (!e) return t.clientWidth;
                        var i = e.clientWidth,
                            n = ct._calculatePadding(e, "padding-left", i),
                            r = ct._calculatePadding(e, "padding-right", i),
                            s = i - n - r,
                            a = ct.getConstraintWidth(t);
                        return isNaN(a) ? s : Math.min(s, a)
                    }, ct.getMaximumHeight = function(t) {
                        var e = ct._getParentNode(t);
                        if (!e) return t.clientHeight;
                        var i = e.clientHeight,
                            n = ct._calculatePadding(e, "padding-top", i),
                            r = ct._calculatePadding(e, "padding-bottom", i),
                            s = i - n - r,
                            a = ct.getConstraintHeight(t);
                        return isNaN(a) ? s : Math.min(s, a)
                    }, ct.getStyle = function(t, e) {
                        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                    }, ct.retinaScale = function(t, e) {
                        var i = t.currentDevicePixelRatio = e || "undefined" !== typeof window && window.devicePixelRatio || 1;
                        if (1 !== i) {
                            var n = t.canvas,
                                r = t.height,
                                s = t.width;
                            n.height = r * i, n.width = s * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = r + "px", n.style.width = s + "px")
                        }
                    }, ct.fontString = function(t, e, i) {
                        return e + " " + t + "px " + i
                    }, ct.longestText = function(t, e, i, n) {
                        n = n || {};
                        var r = n.data = n.data || {},
                            s = n.garbageCollect = n.garbageCollect || [];
                        n.font !== e && (r = n.data = {}, s = n.garbageCollect = [], n.font = e), t.font = e;
                        var a, o, l, c, h, u = 0,
                            d = i.length;
                        for (a = 0; a < d; a++)
                            if (c = i[a], void 0 !== c && null !== c && !0 !== ct.isArray(c)) u = ct.measureText(t, r, s, u, c);
                            else if (ct.isArray(c))
                            for (o = 0, l = c.length; o < l; o++) h = c[o], void 0 === h || null === h || ct.isArray(h) || (u = ct.measureText(t, r, s, u, h));
                        var p = s.length / 2;
                        if (p > i.length) {
                            for (a = 0; a < p; a++) delete r[s[a]];
                            s.splice(0, p)
                        }
                        return u
                    }, ct.measureText = function(t, e, i, n, r) {
                        var s = e[r];
                        return s || (s = e[r] = t.measureText(r).width, i.push(r)), s > n && (n = s), n
                    }, ct.numberOfLabelLines = function(t) {
                        var e = 1;
                        return ct.each(t, (function(t) {
                            ct.isArray(t) && t.length > e && (e = t.length)
                        })), e
                    }, ct.color = F ? function(t) {
                        return t instanceof CanvasGradient && (t = K.global.defaultColor), F(t)
                    } : function(t) {
                        return console.error("Color.js not found!"), t
                    }, ct.getHoverColor = function(t) {
                        return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : ct.color(t).saturate(.5).darken(.1).rgbString()
                    }
                };

                function Ji() {
                    throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
                }

                function tn(t) {
                    this.options = t || {}
                }
                ct.extend(tn.prototype, {
                    formats: Ji,
                    parse: Ji,
                    format: Ji,
                    add: Ji,
                    diff: Ji,
                    startOf: Ji,
                    endOf: Ji,
                    _create: function(t) {
                        return t
                    }
                }), tn.override = function(t) {
                    ct.extend(tn.prototype, t)
                };
                var en = tn,
                    nn = {
                        _date: en
                    },
                    rn = {
                        formatters: {
                            values: function(t) {
                                return ct.isArray(t) ? t : "" + t
                            },
                            linear: function(t, e, i) {
                                var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                                Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
                                var r = ct.log10(Math.abs(n)),
                                    s = "";
                                if (0 !== t) {
                                    var a = Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1]));
                                    if (a < 1e-4) {
                                        var o = ct.log10(Math.abs(t)),
                                            l = Math.floor(o) - Math.floor(r);
                                        l = Math.max(Math.min(l, 20), 0), s = t.toExponential(l)
                                    } else {
                                        var c = -1 * Math.floor(r);
                                        c = Math.max(Math.min(c, 20), 0), s = t.toFixed(c)
                                    }
                                } else s = "0";
                                return s
                            },
                            logarithmic: function(t, e, i) {
                                var n = t / Math.pow(10, Math.floor(ct.log10(t)));
                                return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                            }
                        }
                    },
                    sn = ct.isArray,
                    an = ct.isNullOrUndef,
                    on = ct.valueOrDefault,
                    ln = ct.valueAtIndexOrDefault;

                function cn(t, e) {
                    for (var i = [], n = t.length / e, r = 0, s = t.length; r < s; r += n) i.push(t[Math.floor(r)]);
                    return i
                }

                function hn(t, e, i) {
                    var n, r = t.getTicks().length,
                        s = Math.min(e, r - 1),
                        a = t.getPixelForTick(s),
                        o = t._startPixel,
                        l = t._endPixel,
                        c = 1e-6;
                    if (!(i && (n = 1 === r ? Math.max(a - o, l - a) : 0 === e ? (t.getPixelForTick(1) - a) / 2 : (a - t.getPixelForTick(s - 1)) / 2, a += s < e ? n : -n, a < o - c || a > l + c))) return a
                }

                function un(t, e) {
                    ct.each(t, (function(t) {
                        var i, n = t.gc,
                            r = n.length / 2;
                        if (r > e) {
                            for (i = 0; i < r; ++i) delete t.data[n[i]];
                            n.splice(0, r)
                        }
                    }))
                }

                function dn(t, e, i, n) {
                    var r, s, a, o, l, c, h, u, d, p, f, g, m, v = i.length,
                        b = [],
                        y = [],
                        x = [];
                    for (r = 0; r < v; ++r) {
                        if (o = i[r].label, l = i[r].major ? e.major : e.minor, t.font = c = l.string, h = n[c] = n[c] || {
                                data: {},
                                gc: []
                            }, u = l.lineHeight, d = p = 0, an(o) || sn(o)) {
                            if (sn(o))
                                for (s = 0, a = o.length; s < a; ++s) f = o[s], an(f) || sn(f) || (d = ct.measureText(t, h.data, h.gc, d, f), p += u)
                        } else d = ct.measureText(t, h.data, h.gc, d, o), p = u;
                        b.push(d), y.push(p), x.push(u / 2)
                    }

                    function _(t) {
                        return {
                            width: b[t] || 0,
                            height: y[t] || 0,
                            offset: x[t] || 0
                        }
                    }
                    return un(n, v), g = b.indexOf(Math.max.apply(null, b)), m = y.indexOf(Math.max.apply(null, y)), {
                        first: _(0),
                        last: _(v - 1),
                        widest: _(g),
                        highest: _(m)
                    }
                }

                function pn(t) {
                    return t.drawTicks ? t.tickMarkLength : 0
                }

                function fn(t) {
                    var e, i;
                    return t.display ? (e = ct.options._parseFont(t), i = ct.options.toPadding(t.padding), e.lineHeight + i.height) : 0
                }

                function gn(t, e) {
                    return ct.extend(ct.options._parseFont({
                        fontFamily: on(e.fontFamily, t.fontFamily),
                        fontSize: on(e.fontSize, t.fontSize),
                        fontStyle: on(e.fontStyle, t.fontStyle),
                        lineHeight: on(e.lineHeight, t.lineHeight)
                    }), {
                        color: ct.options.resolve([e.fontColor, t.fontColor, K.global.defaultFontColor])
                    })
                }

                function mn(t) {
                    var e = gn(t, t.minor),
                        i = t.major.enabled ? gn(t, t.major) : e;
                    return {
                        minor: e,
                        major: i
                    }
                }

                function vn(t) {
                    var e, i, n, r = [];
                    for (i = 0, n = t.length; i < n; ++i) e = t[i], "undefined" !== typeof e._index && r.push(e);
                    return r
                }

                function bn(t) {
                    var e, i, n = t.length;
                    if (n < 2) return !1;
                    for (i = t[0], e = 1; e < n; ++e)
                        if (t[e] - t[e - 1] !== i) return !1;
                    return i
                }

                function yn(t, e, i, n) {
                    var r, s, a, o, l = bn(t),
                        c = (e.length - 1) / n;
                    if (!l) return Math.max(c, 1);
                    for (r = ct.math._factorize(l), a = 0, o = r.length - 1; a < o; a++)
                        if (s = r[a], s > c) return s;
                    return Math.max(c, 1)
                }

                function xn(t) {
                    var e, i, n = [];
                    for (e = 0, i = t.length; e < i; e++) t[e].major && n.push(e);
                    return n
                }

                function _n(t, e, i) {
                    var n, r, s = 0,
                        a = e[0];
                    for (i = Math.ceil(i), n = 0; n < t.length; n++) r = t[n], n === a ? (r._index = n, s++, a = e[s * i]) : delete r.label
                }

                function wn(t, e, i, n) {
                    var r, s, a, o, l = on(i, 0),
                        c = Math.min(on(n, t.length), t.length),
                        h = 0;
                    e = Math.ceil(e), n && (r = n - i, e = r / Math.floor(r / e)), o = l;
                    while (o < 0) h++, o = Math.round(l + h * e);
                    for (s = Math.max(l, 0); s < c; s++) a = t[s], s === o ? (a._index = s, h++, o = Math.round(l + h * e)) : delete a.label
                }
                K._set("scale", {
                    display: !0,
                    position: "left",
                    offset: !1,
                    gridLines: {
                        display: !0,
                        color: "rgba(0,0,0,0.1)",
                        lineWidth: 1,
                        drawBorder: !0,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickMarkLength: 10,
                        zeroLineWidth: 1,
                        zeroLineColor: "rgba(0,0,0,0.25)",
                        zeroLineBorderDash: [],
                        zeroLineBorderDashOffset: 0,
                        offsetGridLines: !1,
                        borderDash: [],
                        borderDashOffset: 0
                    },
                    scaleLabel: {
                        display: !1,
                        labelString: "",
                        padding: {
                            top: 4,
                            bottom: 4
                        }
                    },
                    ticks: {
                        beginAtZero: !1,
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        padding: 0,
                        reverse: !1,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 0,
                        labelOffset: 0,
                        callback: rn.formatters.values,
                        minor: {},
                        major: {}
                    }
                });
                var Cn = vt.extend({
                    zeroLineIndex: 0,
                    getPadding: function() {
                        var t = this;
                        return {
                            left: t.paddingLeft || 0,
                            top: t.paddingTop || 0,
                            right: t.paddingRight || 0,
                            bottom: t.paddingBottom || 0
                        }
                    },
                    getTicks: function() {
                        return this._ticks
                    },
                    _getLabels: function() {
                        var t = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                    },
                    mergeTicksOptions: function() {},
                    beforeUpdate: function() {
                        ct.callback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, e, i) {
                        var n, r, s, a, o, l = this,
                            c = l.options.ticks,
                            h = c.sampleSize;
                        if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = ct.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, i), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), a = l.buildTicks() || [], a = l.afterBuildTicks(a) || a, (!a || !a.length) && l.ticks)
                            for (a = [], n = 0, r = l.ticks.length; n < r; ++n) a.push({
                                value: l.ticks[n],
                                major: !1
                            });
                        return l._ticks = a, o = h < a.length, s = l._convertTicksToLabels(o ? cn(a, h) : a), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = c.display && (c.autoSkip || "auto" === c.source) ? l._autoSkip(a) : a, o && (s = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = s, l.afterUpdate(), l.minSize
                    },
                    _configure: function() {
                        var t, e, i = this,
                            n = i.options.ticks.reverse;
                        i.isHorizontal() ? (t = i.left, e = i.right) : (t = i.top, e = i.bottom, n = !n), i._startPixel = t, i._endPixel = e, i._reversePixels = n, i._length = e - t
                    },
                    afterUpdate: function() {
                        ct.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        ct.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        ct.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        ct.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: ct.noop,
                    afterDataLimits: function() {
                        ct.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        ct.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: ct.noop,
                    afterBuildTicks: function(t) {
                        var e = this;
                        return sn(t) && t.length ? ct.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = ct.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
                    },
                    beforeTickToLabelConversion: function() {
                        ct.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var t = this,
                            e = t.options.ticks;
                        t.ticks = t.ticks.map(e.userCallback || e.callback, this)
                    },
                    afterTickToLabelConversion: function() {
                        ct.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        ct.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var t, e, i, n, r, s, a, o = this,
                            l = o.options,
                            c = l.ticks,
                            h = o.getTicks().length,
                            u = c.minRotation || 0,
                            d = c.maxRotation,
                            p = u;
                        !o._isVisible() || !c.display || u >= d || h <= 1 || !o.isHorizontal() ? o.labelRotation = u : (t = o._getLabelSizes(), e = t.widest.width, i = t.highest.height - t.highest.offset, n = Math.min(o.maxWidth, o.chart.width - e), r = l.offset ? o.maxWidth / h : n / (h - 1), e + 6 > r && (r = n / (h - (l.offset ? .5 : 1)), s = o.maxHeight - pn(l.gridLines) - c.padding - fn(l.scaleLabel), a = Math.sqrt(e * e + i * i), p = ct.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / r, 1)), Math.asin(Math.min(s / a, 1)) - Math.asin(i / a))), p = Math.max(u, Math.min(d, p))), o.labelRotation = p)
                    },
                    afterCalculateTickRotation: function() {
                        ct.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        ct.callback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var t = this,
                            e = t.minSize = {
                                width: 0,
                                height: 0
                            },
                            i = t.chart,
                            n = t.options,
                            r = n.ticks,
                            s = n.scaleLabel,
                            a = n.gridLines,
                            o = t._isVisible(),
                            l = "bottom" === n.position,
                            c = t.isHorizontal();
                        if (c ? e.width = t.maxWidth : o && (e.width = pn(a) + fn(s)), c ? o && (e.height = pn(a) + fn(s)) : e.height = t.maxHeight, r.display && o) {
                            var h = mn(r),
                                u = t._getLabelSizes(),
                                d = u.first,
                                p = u.last,
                                f = u.widest,
                                g = u.highest,
                                m = .4 * h.minor.lineHeight,
                                v = r.padding;
                            if (c) {
                                var b = 0 !== t.labelRotation,
                                    y = ct.toRadians(t.labelRotation),
                                    x = Math.cos(y),
                                    _ = Math.sin(y),
                                    w = _ * f.width + x * (g.height - (b ? g.offset : 0)) + (b ? 0 : m);
                                e.height = Math.min(t.maxHeight, e.height + w + v);
                                var C, k, S = t.getPixelForTick(0) - t.left,
                                    $ = t.right - t.getPixelForTick(t.getTicks().length - 1);
                                b ? (C = l ? x * d.width + _ * d.offset : _ * (d.height - d.offset), k = l ? _ * (p.height - p.offset) : x * p.width + _ * p.offset) : (C = d.width / 2, k = p.width / 2), t.paddingLeft = Math.max((C - S) * t.width / (t.width - S), 0) + 3, t.paddingRight = Math.max((k - $) * t.width / (t.width - $), 0) + 3
                            } else {
                                var A = r.mirror ? 0 : f.width + v + m;
                                e.width = Math.min(t.maxWidth, e.width + A), t.paddingTop = d.height / 2, t.paddingBottom = p.height / 2
                            }
                        }
                        t.handleMargins(), c ? (t.width = t._length = i.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = i.height - t.margins.top - t.margins.bottom)
                    },
                    handleMargins: function() {
                        var t = this;
                        t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom))
                    },
                    afterFit: function() {
                        ct.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(t) {
                        if (an(t)) return NaN;
                        if (("number" === typeof t || t instanceof Number) && !isFinite(t)) return NaN;
                        if (t)
                            if (this.isHorizontal()) {
                                if (void 0 !== t.x) return this.getRightValue(t.x)
                            } else if (void 0 !== t.y) return this.getRightValue(t.y);
                        return t
                    },
                    _convertTicksToLabels: function(t) {
                        var e, i, n, r = this;
                        for (r.ticks = t.map((function(t) {
                                return t.value
                            })), r.beforeTickToLabelConversion(), e = r.convertTicksToLabels(t) || r.ticks, r.afterTickToLabelConversion(), i = 0, n = t.length; i < n; ++i) t[i].label = e[i];
                        return e
                    },
                    _getLabelSizes: function() {
                        var t = this,
                            e = t._labelSizes;
                        return e || (t._labelSizes = e = dn(t.ctx, mn(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e
                    },
                    _parseValue: function(t) {
                        var e, i, n, r;
                        return sn(t) ? (e = +this.getRightValue(t[0]), i = +this.getRightValue(t[1]), n = Math.min(e, i), r = Math.max(e, i)) : (t = +this.getRightValue(t), e = void 0, i = t, n = t, r = t), {
                            min: n,
                            max: r,
                            start: e,
                            end: i
                        }
                    },
                    _getScaleLabel: function(t) {
                        var e = this._parseValue(t);
                        return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t)
                    },
                    getLabelForIndex: ct.noop,
                    getPixelForValue: ct.noop,
                    getValueForPixel: ct.noop,
                    getPixelForTick: function(t) {
                        var e = this,
                            i = e.options.offset,
                            n = e._ticks.length,
                            r = 1 / Math.max(n - (i ? 0 : 1), 1);
                        return t < 0 || t > n - 1 ? null : e.getPixelForDecimal(t * r + (i ? r / 2 : 0))
                    },
                    getPixelForDecimal: function(t) {
                        var e = this;
                        return e._reversePixels && (t = 1 - t), e._startPixel + t * e._length
                    },
                    getDecimalForPixel: function(t) {
                        var e = (t - this._startPixel) / this._length;
                        return this._reversePixels ? 1 - e : e
                    },
                    getBasePixel: function() {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function() {
                        var t = this,
                            e = t.min,
                            i = t.max;
                        return t.beginAtZero ? 0 : e < 0 && i < 0 ? i : e > 0 && i > 0 ? e : 0
                    },
                    _autoSkip: function(t) {
                        var e, i, n, r, s = this,
                            a = s.options.ticks,
                            o = s._length,
                            l = a.maxTicksLimit || o / s._tickSize() + 1,
                            c = a.major.enabled ? xn(t) : [],
                            h = c.length,
                            u = c[0],
                            d = c[h - 1];
                        if (h > l) return _n(t, c, h / l), vn(t);
                        if (n = yn(c, t, o, l), h > 0) {
                            for (e = 0, i = h - 1; e < i; e++) wn(t, n, c[e], c[e + 1]);
                            return r = h > 1 ? (d - u) / (h - 1) : null, wn(t, n, ct.isNullOrUndef(r) ? 0 : u - r, u), wn(t, n, d, ct.isNullOrUndef(r) ? t.length : d + r), vn(t)
                        }
                        return wn(t, n), vn(t)
                    },
                    _tickSize: function() {
                        var t = this,
                            e = t.options.ticks,
                            i = ct.toRadians(t.labelRotation),
                            n = Math.abs(Math.cos(i)),
                            r = Math.abs(Math.sin(i)),
                            s = t._getLabelSizes(),
                            a = e.autoSkipPadding || 0,
                            o = s ? s.widest.width + a : 0,
                            l = s ? s.highest.height + a : 0;
                        return t.isHorizontal() ? l * n > o * r ? o / n : l / r : l * r < o * n ? l / n : o / r
                    },
                    _isVisible: function() {
                        var t, e, i, n = this,
                            r = n.chart,
                            s = n.options.display;
                        if ("auto" !== s) return !!s;
                        for (t = 0, e = r.data.datasets.length; t < e; ++t)
                            if (r.isDatasetVisible(t) && (i = r.getDatasetMeta(t), i.xAxisID === n.id || i.yAxisID === n.id)) return !0;
                        return !1
                    },
                    _computeGridLineItems: function(t) {
                        var e, i, n, r, s, a, o, l, c, h, u, d, p, f, g, m, v, b = this,
                            y = b.chart,
                            x = b.options,
                            _ = x.gridLines,
                            w = x.position,
                            C = _.offsetGridLines,
                            k = b.isHorizontal(),
                            S = b._ticksToDraw,
                            $ = S.length + (C ? 1 : 0),
                            A = pn(_),
                            I = [],
                            M = _.drawBorder ? ln(_.lineWidth, 0, 0) : 0,
                            O = M / 2,
                            T = ct._alignPixel,
                            L = function(t) {
                                return T(y, t, M)
                            };
                        for ("top" === w ? (e = L(b.bottom), o = b.bottom - A, c = e - O, u = L(t.top) + O, p = t.bottom) : "bottom" === w ? (e = L(b.top), u = t.top, p = L(t.bottom) - O, o = e + O, c = b.top + A) : "left" === w ? (e = L(b.right), a = b.right - A, l = e - O, h = L(t.left) + O, d = t.right) : (e = L(b.left), h = t.left, d = L(t.right) - O, a = e + O, l = b.left + A), i = 0; i < $; ++i) n = S[i] || {}, an(n.label) && i < S.length || (i === b.zeroLineIndex && x.offset === C ? (f = _.zeroLineWidth, g = _.zeroLineColor, m = _.zeroLineBorderDash || [], v = _.zeroLineBorderDashOffset || 0) : (f = ln(_.lineWidth, i, 1), g = ln(_.color, i, "rgba(0,0,0,0.1)"), m = _.borderDash || [], v = _.borderDashOffset || 0), r = hn(b, n._index || i, C), void 0 !== r && (s = T(y, r, f), k ? a = l = h = d = s : o = c = u = p = s, I.push({
                            tx1: a,
                            ty1: o,
                            tx2: l,
                            ty2: c,
                            x1: h,
                            y1: u,
                            x2: d,
                            y2: p,
                            width: f,
                            color: g,
                            borderDash: m,
                            borderDashOffset: v
                        })));
                        return I.ticksLength = $, I.borderValue = e, I
                    },
                    _computeLabelItems: function() {
                        var t, e, i, n, r, s, a, o, l, c, h, u, d = this,
                            p = d.options,
                            f = p.ticks,
                            g = p.position,
                            m = f.mirror,
                            v = d.isHorizontal(),
                            b = d._ticksToDraw,
                            y = mn(f),
                            x = f.padding,
                            _ = pn(p.gridLines),
                            w = -ct.toRadians(d.labelRotation),
                            C = [];
                        for ("top" === g ? (s = d.bottom - _ - x, a = w ? "left" : "center") : "bottom" === g ? (s = d.top + _ + x, a = w ? "right" : "center") : "left" === g ? (r = d.right - (m ? 0 : _) - x, a = m ? "left" : "right") : (r = d.left + (m ? 0 : _) + x, a = m ? "right" : "left"), t = 0, e = b.length; t < e; ++t) i = b[t], n = i.label, an(n) || (o = d.getPixelForTick(i._index || t) + f.labelOffset, l = i.major ? y.major : y.minor, c = l.lineHeight, h = sn(n) ? n.length : 1, v ? (r = o, u = "top" === g ? ((w ? 1 : .5) - h) * c : (w ? 0 : .5) * c) : (s = o, u = (1 - h) * c / 2), C.push({
                            x: r,
                            y: s,
                            rotation: w,
                            label: n,
                            font: l,
                            textOffset: u,
                            textAlign: a
                        }));
                        return C
                    },
                    _drawGrid: function(t) {
                        var e = this,
                            i = e.options.gridLines;
                        if (i.display) {
                            var n, r, s, a, o, l = e.ctx,
                                c = e.chart,
                                h = ct._alignPixel,
                                u = i.drawBorder ? ln(i.lineWidth, 0, 0) : 0,
                                d = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                            for (s = 0, a = d.length; s < a; ++s) o = d[s], n = o.width, r = o.color, n && r && (l.save(), l.lineWidth = n, l.strokeStyle = r, l.setLineDash && (l.setLineDash(o.borderDash), l.lineDashOffset = o.borderDashOffset), l.beginPath(), i.drawTicks && (l.moveTo(o.tx1, o.ty1), l.lineTo(o.tx2, o.ty2)), i.drawOnChartArea && (l.moveTo(o.x1, o.y1), l.lineTo(o.x2, o.y2)), l.stroke(), l.restore());
                            if (u) {
                                var p, f, g, m, v = u,
                                    b = ln(i.lineWidth, d.ticksLength - 1, 1),
                                    y = d.borderValue;
                                e.isHorizontal() ? (p = h(c, e.left, v) - v / 2, f = h(c, e.right, b) + b / 2, g = m = y) : (g = h(c, e.top, v) - v / 2, m = h(c, e.bottom, b) + b / 2, p = f = y), l.lineWidth = u, l.strokeStyle = ln(i.color, 0), l.beginPath(), l.moveTo(p, g), l.lineTo(f, m), l.stroke()
                            }
                        }
                    },
                    _drawLabels: function() {
                        var t = this,
                            e = t.options.ticks;
                        if (e.display) {
                            var i, n, r, s, a, o, l, c, h = t.ctx,
                                u = t._labelItems || (t._labelItems = t._computeLabelItems());
                            for (i = 0, r = u.length; i < r; ++i) {
                                if (a = u[i], o = a.font, h.save(), h.translate(a.x, a.y), h.rotate(a.rotation), h.font = o.string, h.fillStyle = o.color, h.textBaseline = "middle", h.textAlign = a.textAlign, l = a.label, c = a.textOffset, sn(l))
                                    for (n = 0, s = l.length; n < s; ++n) h.fillText("" + l[n], 0, c), c += o.lineHeight;
                                else h.fillText(l, 0, c);
                                h.restore()
                            }
                        }
                    },
                    _drawTitle: function() {
                        var t = this,
                            e = t.ctx,
                            i = t.options,
                            n = i.scaleLabel;
                        if (n.display) {
                            var r, s, a = on(n.fontColor, K.global.defaultFontColor),
                                o = ct.options._parseFont(n),
                                l = ct.options.toPadding(n.padding),
                                c = o.lineHeight / 2,
                                h = i.position,
                                u = 0;
                            if (t.isHorizontal()) r = t.left + t.width / 2, s = "bottom" === h ? t.bottom - c - l.bottom : t.top + c + l.top;
                            else {
                                var d = "left" === h;
                                r = d ? t.left + c + l.top : t.right - c - l.top, s = t.top + t.height / 2, u = d ? -.5 * Math.PI : .5 * Math.PI
                            }
                            e.save(), e.translate(r, s), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = a, e.font = o.string, e.fillText(n.labelString, 0, 0), e.restore()
                        }
                    },
                    draw: function(t) {
                        var e = this;
                        e._isVisible() && (e._drawGrid(t), e._drawTitle(), e._drawLabels())
                    },
                    _layers: function() {
                        var t = this,
                            e = t.options,
                            i = e.ticks && e.ticks.z || 0,
                            n = e.gridLines && e.gridLines.z || 0;
                        return t._isVisible() && i !== n && t.draw === t._draw ? [{
                            z: n,
                            draw: function() {
                                t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments)
                            }
                        }, {
                            z: i,
                            draw: function() {
                                t._drawLabels.apply(t, arguments)
                            }
                        }] : [{
                            z: i,
                            draw: function() {
                                t.draw.apply(t, arguments)
                            }
                        }]
                    },
                    _getMatchingVisibleMetas: function(t) {
                        var e = this,
                            i = e.isHorizontal();
                        return e.chart._getSortedVisibleDatasetMetas().filter((function(n) {
                            return (!t || n.type === t) && (i ? n.xAxisID === e.id : n.yAxisID === e.id)
                        }))
                    }
                });
                Cn.prototype._draw = Cn.prototype.draw;
                var kn = Cn,
                    Sn = ct.isNullOrUndef,
                    $n = {
                        position: "bottom"
                    },
                    An = kn.extend({
                        determineDataLimits: function() {
                            var t, e = this,
                                i = e._getLabels(),
                                n = e.options.ticks,
                                r = n.min,
                                s = n.max,
                                a = 0,
                                o = i.length - 1;
                            void 0 !== r && (t = i.indexOf(r), t >= 0 && (a = t)), void 0 !== s && (t = i.indexOf(s), t >= 0 && (o = t)), e.minIndex = a, e.maxIndex = o, e.min = i[a], e.max = i[o]
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t._getLabels(),
                                i = t.minIndex,
                                n = t.maxIndex;
                            t.ticks = 0 === i && n === e.length - 1 ? e : e.slice(i, n + 1)
                        },
                        getLabelForIndex: function(t, e) {
                            var i = this,
                                n = i.chart;
                            return n.getDatasetMeta(e).controller._getValueScaleId() === i.id ? i.getRightValue(n.data.datasets[e].data[t]) : i._getLabels()[t]
                        },
                        _configure: function() {
                            var t = this,
                                e = t.options.offset,
                                i = t.ticks;
                            kn.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), i && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(i.length - (e ? 0 : 1), 1))
                        },
                        getPixelForValue: function(t, e, i) {
                            var n, r, s, a = this;
                            return Sn(e) || Sn(i) || (t = a.chart.data.datasets[i].data[e]), Sn(t) || (n = a.isHorizontal() ? t.x : t.y), (void 0 !== n || void 0 !== t && isNaN(e)) && (r = a._getLabels(), t = ct.valueOrDefault(n, t), s = r.indexOf(t), e = -1 !== s ? s : e, isNaN(e) && (e = t)), a.getPixelForDecimal((e - a._startValue) / a._valueRange)
                        },
                        getPixelForTick: function(t) {
                            var e = this.ticks;
                            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex)
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                i = Math.round(e._startValue + e.getDecimalForPixel(t) * e._valueRange);
                            return Math.min(Math.max(i, 0), e.ticks.length - 1)
                        },
                        getBasePixel: function() {
                            return this.bottom
                        }
                    }),
                    In = $n;
                An._defaults = In;
                var Mn = ct.noop,
                    On = ct.isNullOrUndef;

                function Tn(t, e) {
                    var i, n, r, s, a = [],
                        o = 1e-14,
                        l = t.stepSize,
                        c = l || 1,
                        h = t.maxTicks - 1,
                        u = t.min,
                        d = t.max,
                        p = t.precision,
                        f = e.min,
                        g = e.max,
                        m = ct.niceNum((g - f) / h / c) * c;
                    if (m < o && On(u) && On(d)) return [f, g];
                    s = Math.ceil(g / m) - Math.floor(f / m), s > h && (m = ct.niceNum(s * m / h / c) * c), l || On(p) ? i = Math.pow(10, ct._decimalPlaces(m)) : (i = Math.pow(10, p), m = Math.ceil(m * i) / i), n = Math.floor(f / m) * m, r = Math.ceil(g / m) * m, l && (!On(u) && ct.almostWhole(u / m, m / 1e3) && (n = u), !On(d) && ct.almostWhole(d / m, m / 1e3) && (r = d)), s = (r - n) / m, s = ct.almostEquals(s, Math.round(s), m / 1e3) ? Math.round(s) : Math.ceil(s), n = Math.round(n * i) / i, r = Math.round(r * i) / i, a.push(On(u) ? n : u);
                    for (var v = 1; v < s; ++v) a.push(Math.round((n + v * m) * i) / i);
                    return a.push(On(d) ? r : d), a
                }
                var Ln = kn.extend({
                        getRightValue: function(t) {
                            return "string" === typeof t ? +t : kn.prototype.getRightValue.call(this, t)
                        },
                        handleTickRangeOptions: function() {
                            var t = this,
                                e = t.options,
                                i = e.ticks;
                            if (i.beginAtZero) {
                                var n = ct.sign(t.min),
                                    r = ct.sign(t.max);
                                n < 0 && r < 0 ? t.max = 0 : n > 0 && r > 0 && (t.min = 0)
                            }
                            var s = void 0 !== i.min || void 0 !== i.suggestedMin,
                                a = void 0 !== i.max || void 0 !== i.suggestedMax;
                            void 0 !== i.min ? t.min = i.min : void 0 !== i.suggestedMin && (null === t.min ? t.min = i.suggestedMin : t.min = Math.min(t.min, i.suggestedMin)), void 0 !== i.max ? t.max = i.max : void 0 !== i.suggestedMax && (null === t.max ? t.max = i.suggestedMax : t.max = Math.max(t.max, i.suggestedMax)), s !== a && t.min >= t.max && (s ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, i.beginAtZero || t.min--)
                        },
                        getTickLimit: function() {
                            var t, e = this,
                                i = e.options.ticks,
                                n = i.stepSize,
                                r = i.maxTicksLimit;
                            return n ? t = Math.ceil(e.max / n) - Math.floor(e.min / n) + 1 : (t = e._computeTickLimit(), r = r || 11), r && (t = Math.min(r, t)), t
                        },
                        _computeTickLimit: function() {
                            return Number.POSITIVE_INFINITY
                        },
                        handleDirectionalChanges: Mn,
                        buildTicks: function() {
                            var t = this,
                                e = t.options,
                                i = e.ticks,
                                n = t.getTickLimit();
                            n = Math.max(2, n);
                            var r = {
                                    maxTicks: n,
                                    min: i.min,
                                    max: i.max,
                                    precision: i.precision,
                                    stepSize: ct.valueOrDefault(i.fixedStepSize, i.stepSize)
                                },
                                s = t.ticks = Tn(r, t);
                            t.handleDirectionalChanges(), t.max = ct.max(s), t.min = ct.min(s), i.reverse ? (s.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                        },
                        convertTicksToLabels: function() {
                            var t = this;
                            t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), kn.prototype.convertTicksToLabels.call(t)
                        },
                        _configure: function() {
                            var t, e = this,
                                i = e.getTicks(),
                                n = e.min,
                                r = e.max;
                            kn.prototype._configure.call(e), e.options.offset && i.length && (t = (r - n) / Math.max(i.length - 1, 1) / 2, n -= t, r += t), e._startValue = n, e._endValue = r, e._valueRange = r - n
                        }
                    }),
                    Pn = {
                        position: "left",
                        ticks: {
                            callback: rn.formatters.linear
                        }
                    },
                    Dn = 0,
                    Bn = 1;

                function En(t, e, i) {
                    var n = [i.type, void 0 === e && void 0 === i.stack ? i.index : "", i.stack].join(".");
                    return void 0 === t[n] && (t[n] = {
                        pos: [],
                        neg: []
                    }), t[n]
                }

                function Fn(t, e, i, n) {
                    var r, s, a = t.options,
                        o = a.stacked,
                        l = En(e, o, i),
                        c = l.pos,
                        h = l.neg,
                        u = n.length;
                    for (r = 0; r < u; ++r) s = t._parseValue(n[r]), isNaN(s.min) || isNaN(s.max) || i.data[r].hidden || (c[r] = c[r] || 0, h[r] = h[r] || 0, a.relativePoints ? c[r] = 100 : s.min < 0 || s.max < 0 ? h[r] += s.min : c[r] += s.max)
                }

                function Vn(t, e, i) {
                    var n, r, s = i.length;
                    for (n = 0; n < s; ++n) r = t._parseValue(i[n]), isNaN(r.min) || isNaN(r.max) || e.data[n].hidden || (t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max))
                }
                var Nn = Ln.extend({
                        determineDataLimits: function() {
                            var t, e, i, n, r = this,
                                s = r.options,
                                a = r.chart,
                                o = a.data.datasets,
                                l = r._getMatchingVisibleMetas(),
                                c = s.stacked,
                                h = {},
                                u = l.length;
                            if (r.min = Number.POSITIVE_INFINITY, r.max = Number.NEGATIVE_INFINITY, void 0 === c)
                                for (t = 0; !c && t < u; ++t) e = l[t], c = void 0 !== e.stack;
                            for (t = 0; t < u; ++t) e = l[t], i = o[e.index].data, c ? Fn(r, h, e, i) : Vn(r, e, i);
                            ct.each(h, (function(t) {
                                n = t.pos.concat(t.neg), r.min = Math.min(r.min, ct.min(n)), r.max = Math.max(r.max, ct.max(n))
                            })), r.min = ct.isFinite(r.min) && !isNaN(r.min) ? r.min : Dn, r.max = ct.isFinite(r.max) && !isNaN(r.max) ? r.max : Bn, r.handleTickRangeOptions()
                        },
                        _computeTickLimit: function() {
                            var t, e = this;
                            return e.isHorizontal() ? Math.ceil(e.width / 40) : (t = ct.options._parseFont(e.options.ticks), Math.ceil(e.height / t.lineHeight))
                        },
                        handleDirectionalChanges: function() {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function(t, e) {
                            return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForValue: function(t) {
                            var e = this;
                            return e.getPixelForDecimal((+e.getRightValue(t) - e._startValue) / e._valueRange)
                        },
                        getValueForPixel: function(t) {
                            return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                        },
                        getPixelForTick: function(t) {
                            var e = this.ticksAsNumbers;
                            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                        }
                    }),
                    zn = Pn;
                Nn._defaults = zn;
                var Rn = ct.valueOrDefault,
                    Wn = ct.math.log10;

                function Hn(t, e) {
                    var i, n, r = [],
                        s = Rn(t.min, Math.pow(10, Math.floor(Wn(e.min)))),
                        a = Math.floor(Wn(e.max)),
                        o = Math.ceil(e.max / Math.pow(10, a));
                    0 === s ? (i = Math.floor(Wn(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), r.push(s), s = n * Math.pow(10, i)) : (i = Math.floor(Wn(s)), n = Math.floor(s / Math.pow(10, i)));
                    var l = i < 0 ? Math.pow(10, Math.abs(i)) : 1;
                    do {
                        r.push(s), ++n, 10 === n && (n = 1, ++i, l = i >= 0 ? 1 : l), s = Math.round(n * Math.pow(10, i) * l) / l
                    } while (i < a || i === a && n < o);
                    var c = Rn(t.max, s);
                    return r.push(c), r
                }
                var jn = {
                    position: "left",
                    ticks: {
                        callback: rn.formatters.logarithmic
                    }
                };

                function qn(t, e) {
                    return ct.isFinite(t) && t >= 0 ? t : e
                }
                var Un = kn.extend({
                        determineDataLimits: function() {
                            var t, e, i, n, r, s, a = this,
                                o = a.options,
                                l = a.chart,
                                c = l.data.datasets,
                                h = a.isHorizontal();

                            function u(t) {
                                return h ? t.xAxisID === a.id : t.yAxisID === a.id
                            }
                            a.min = Number.POSITIVE_INFINITY, a.max = Number.NEGATIVE_INFINITY, a.minNotZero = Number.POSITIVE_INFINITY;
                            var d = o.stacked;
                            if (void 0 === d)
                                for (t = 0; t < c.length; t++)
                                    if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && u(e) && void 0 !== e.stack) {
                                        d = !0;
                                        break
                                    }
                            if (o.stacked || d) {
                                var p = {};
                                for (t = 0; t < c.length; t++) {
                                    e = l.getDatasetMeta(t);
                                    var f = [e.type, void 0 === o.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
                                    if (l.isDatasetVisible(t) && u(e))
                                        for (void 0 === p[f] && (p[f] = []), n = c[t].data, r = 0, s = n.length; r < s; r++) {
                                            var g = p[f];
                                            i = a._parseValue(n[r]), isNaN(i.min) || isNaN(i.max) || e.data[r].hidden || i.min < 0 || i.max < 0 || (g[r] = g[r] || 0, g[r] += i.max)
                                        }
                                }
                                ct.each(p, (function(t) {
                                    if (t.length > 0) {
                                        var e = ct.min(t),
                                            i = ct.max(t);
                                        a.min = Math.min(a.min, e), a.max = Math.max(a.max, i)
                                    }
                                }))
                            } else
                                for (t = 0; t < c.length; t++)
                                    if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && u(e))
                                        for (n = c[t].data, r = 0, s = n.length; r < s; r++) i = a._parseValue(n[r]), isNaN(i.min) || isNaN(i.max) || e.data[r].hidden || i.min < 0 || i.max < 0 || (a.min = Math.min(i.min, a.min), a.max = Math.max(i.max, a.max), 0 !== i.min && (a.minNotZero = Math.min(i.min, a.minNotZero)));
                            a.min = ct.isFinite(a.min) ? a.min : null, a.max = ct.isFinite(a.max) ? a.max : null, a.minNotZero = ct.isFinite(a.minNotZero) ? a.minNotZero : null, this.handleTickRangeOptions()
                        },
                        handleTickRangeOptions: function() {
                            var t = this,
                                e = t.options.ticks,
                                i = 1,
                                n = 10;
                            t.min = qn(e.min, t.min), t.max = qn(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(Wn(t.min)) - 1), t.max = Math.pow(10, Math.floor(Wn(t.max)) + 1)) : (t.min = i, t.max = n)), null === t.min && (t.min = Math.pow(10, Math.floor(Wn(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(Wn(t.min)) + 1) : n), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(Wn(t.max))) : t.minNotZero = i)
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t.options.ticks,
                                i = !t.isHorizontal(),
                                n = {
                                    min: qn(e.min),
                                    max: qn(e.max)
                                },
                                r = t.ticks = Hn(n, t);
                            t.max = ct.max(r), t.min = ct.min(r), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && r.reverse()
                        },
                        convertTicksToLabels: function() {
                            this.tickValues = this.ticks.slice(), kn.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function(t, e) {
                            return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function(t) {
                            var e = this.tickValues;
                            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                        },
                        _getFirstTickValue: function(t) {
                            var e = Math.floor(Wn(t)),
                                i = Math.floor(t / Math.pow(10, e));
                            return i * Math.pow(10, e)
                        },
                        _configure: function() {
                            var t = this,
                                e = t.min,
                                i = 0;
                            kn.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), i = Rn(t.options.ticks.fontSize, K.global.defaultFontSize) / t._length), t._startValue = Wn(e), t._valueOffset = i, t._valueRange = (Wn(t.max) - Wn(e)) / (1 - i)
                        },
                        getPixelForValue: function(t) {
                            var e = this,
                                i = 0;
                            return t = +e.getRightValue(t), t > e.min && t > 0 && (i = (Wn(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(i)
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                i = e.getDecimalForPixel(t);
                            return 0 === i && 0 === e.min ? 0 : Math.pow(10, e._startValue + (i - e._valueOffset) * e._valueRange)
                        }
                    }),
                    Yn = jn;
                Un._defaults = Yn;
                var Gn = ct.valueOrDefault,
                    Xn = ct.valueAtIndexOrDefault,
                    Zn = ct.options.resolve,
                    Kn = {
                        display: !0,
                        animate: !0,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0,0,0,0.1)",
                            lineWidth: 1,
                            borderDash: [],
                            borderDashOffset: 0
                        },
                        gridLines: {
                            circular: !1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: rn.formatters.linear
                        },
                        pointLabels: {
                            display: !0,
                            fontSize: 10,
                            callback: function(t) {
                                return t
                            }
                        }
                    };

                function Qn(t) {
                    var e = t.ticks;
                    return e.display && t.display ? Gn(e.fontSize, K.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
                }

                function Jn(t, e, i) {
                    return ct.isArray(i) ? {
                        w: ct.longestText(t, t.font, i),
                        h: i.length * e
                    } : {
                        w: t.measureText(i).width,
                        h: e
                    }
                }

                function tr(t, e, i, n, r) {
                    return t === n || t === r ? {
                        start: e - i / 2,
                        end: e + i / 2
                    } : t < n || t > r ? {
                        start: e - i,
                        end: e
                    } : {
                        start: e,
                        end: e + i
                    }
                }

                function er(t) {
                    var e, i, n, r = ct.options._parseFont(t.options.pointLabels),
                        s = {
                            l: 0,
                            r: t.width,
                            t: 0,
                            b: t.height - t.paddingTop
                        },
                        a = {};
                    t.ctx.font = r.string, t._pointLabelSizes = [];
                    var o = t.chart.data.labels.length;
                    for (e = 0; e < o; e++) {
                        n = t.getPointPosition(e, t.drawingArea + 5), i = Jn(t.ctx, r.lineHeight, t.pointLabels[e]), t._pointLabelSizes[e] = i;
                        var l = t.getIndexAngle(e),
                            c = ct.toDegrees(l) % 360,
                            h = tr(c, n.x, i.w, 0, 180),
                            u = tr(c, n.y, i.h, 90, 270);
                        h.start < s.l && (s.l = h.start, a.l = l), h.end > s.r && (s.r = h.end, a.r = l), u.start < s.t && (s.t = u.start, a.t = l), u.end > s.b && (s.b = u.end, a.b = l)
                    }
                    t.setReductions(t.drawingArea, s, a)
                }

                function ir(t) {
                    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
                }

                function nr(t, e, i, n) {
                    var r, s, a = i.y + n / 2;
                    if (ct.isArray(e))
                        for (r = 0, s = e.length; r < s; ++r) t.fillText(e[r], i.x, a), a += n;
                    else t.fillText(e, i.x, a)
                }

                function rr(t, e, i) {
                    90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h)
                }

                function sr(t) {
                    var e = t.ctx,
                        i = t.options,
                        n = i.pointLabels,
                        r = Qn(i),
                        s = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                        a = ct.options._parseFont(n);
                    e.save(), e.font = a.string, e.textBaseline = "middle";
                    for (var o = t.chart.data.labels.length - 1; o >= 0; o--) {
                        var l = 0 === o ? r / 2 : 0,
                            c = t.getPointPosition(o, s + l + 5),
                            h = Xn(n.fontColor, o, K.global.defaultFontColor);
                        e.fillStyle = h;
                        var u = t.getIndexAngle(o),
                            d = ct.toDegrees(u);
                        e.textAlign = ir(d), rr(d, t._pointLabelSizes[o], c), nr(e, t.pointLabels[o], c, a.lineHeight)
                    }
                    e.restore()
                }

                function ar(t, e, i, n) {
                    var r, s = t.ctx,
                        a = e.circular,
                        o = t.chart.data.labels.length,
                        l = Xn(e.color, n - 1),
                        c = Xn(e.lineWidth, n - 1);
                    if ((a || o) && l && c) {
                        if (s.save(), s.strokeStyle = l, s.lineWidth = c, s.setLineDash && (s.setLineDash(e.borderDash || []), s.lineDashOffset = e.borderDashOffset || 0), s.beginPath(), a) s.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI);
                        else {
                            r = t.getPointPosition(0, i), s.moveTo(r.x, r.y);
                            for (var h = 1; h < o; h++) r = t.getPointPosition(h, i), s.lineTo(r.x, r.y)
                        }
                        s.closePath(), s.stroke(), s.restore()
                    }
                }

                function or(t) {
                    return ct.isNumber(t) ? t : 0
                }
                var lr = Ln.extend({
                        setDimensions: function() {
                            var t = this;
                            t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Qn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
                        },
                        determineDataLimits: function() {
                            var t = this,
                                e = t.chart,
                                i = Number.POSITIVE_INFINITY,
                                n = Number.NEGATIVE_INFINITY;
                            ct.each(e.data.datasets, (function(r, s) {
                                if (e.isDatasetVisible(s)) {
                                    var a = e.getDatasetMeta(s);
                                    ct.each(r.data, (function(e, r) {
                                        var s = +t.getRightValue(e);
                                        isNaN(s) || a.data[r].hidden || (i = Math.min(s, i), n = Math.max(s, n))
                                    }))
                                }
                            })), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions()
                        },
                        _computeTickLimit: function() {
                            return Math.ceil(this.drawingArea / Qn(this.options))
                        },
                        convertTicksToLabels: function() {
                            var t = this;
                            Ln.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map((function() {
                                var e = ct.callback(t.options.pointLabels.callback, arguments, t);
                                return e || 0 === e ? e : ""
                            }))
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        fit: function() {
                            var t = this,
                                e = t.options;
                            e.display && e.pointLabels.display ? er(t) : t.setCenterPoint(0, 0, 0, 0)
                        },
                        setReductions: function(t, e, i) {
                            var n = this,
                                r = e.l / Math.sin(i.l),
                                s = Math.max(e.r - n.width, 0) / Math.sin(i.r),
                                a = -e.t / Math.cos(i.t),
                                o = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
                            r = or(r), s = or(s), a = or(a), o = or(o), n.drawingArea = Math.min(Math.floor(t - (r + s) / 2), Math.floor(t - (a + o) / 2)), n.setCenterPoint(r, s, a, o)
                        },
                        setCenterPoint: function(t, e, i, n) {
                            var r = this,
                                s = r.width - e - r.drawingArea,
                                a = t + r.drawingArea,
                                o = i + r.drawingArea,
                                l = r.height - r.paddingTop - n - r.drawingArea;
                            r.xCenter = Math.floor((a + s) / 2 + r.left), r.yCenter = Math.floor((o + l) / 2 + r.top + r.paddingTop)
                        },
                        getIndexAngle: function(t) {
                            var e = this.chart,
                                i = 360 / e.data.labels.length,
                                n = e.options || {},
                                r = n.startAngle || 0,
                                s = (t * i + r) % 360;
                            return (s < 0 ? s + 360 : s) * Math.PI * 2 / 360
                        },
                        getDistanceFromCenterForValue: function(t) {
                            var e = this;
                            if (ct.isNullOrUndef(t)) return NaN;
                            var i = e.drawingArea / (e.max - e.min);
                            return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
                        },
                        getPointPosition: function(t, e) {
                            var i = this,
                                n = i.getIndexAngle(t) - Math.PI / 2;
                            return {
                                x: Math.cos(n) * e + i.xCenter,
                                y: Math.sin(n) * e + i.yCenter
                            }
                        },
                        getPointPositionForValue: function(t, e) {
                            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                        },
                        getBasePosition: function(t) {
                            var e = this,
                                i = e.min,
                                n = e.max;
                            return e.getPointPositionForValue(t || 0, e.beginAtZero ? 0 : i < 0 && n < 0 ? n : i > 0 && n > 0 ? i : 0)
                        },
                        _drawGrid: function() {
                            var t, e, i, n = this,
                                r = n.ctx,
                                s = n.options,
                                a = s.gridLines,
                                o = s.angleLines,
                                l = Gn(o.lineWidth, a.lineWidth),
                                c = Gn(o.color, a.color);
                            if (s.pointLabels.display && sr(n), a.display && ct.each(n.ticks, (function(t, i) {
                                    0 !== i && (e = n.getDistanceFromCenterForValue(n.ticksAsNumbers[i]), ar(n, a, e, i))
                                })), o.display && l && c) {
                                for (r.save(), r.lineWidth = l, r.strokeStyle = c, r.setLineDash && (r.setLineDash(Zn([o.borderDash, a.borderDash, []])), r.lineDashOffset = Zn([o.borderDashOffset, a.borderDashOffset, 0])), t = n.chart.data.labels.length - 1; t >= 0; t--) e = n.getDistanceFromCenterForValue(s.ticks.reverse ? n.min : n.max), i = n.getPointPosition(t, e), r.beginPath(), r.moveTo(n.xCenter, n.yCenter), r.lineTo(i.x, i.y), r.stroke();
                                r.restore()
                            }
                        },
                        _drawLabels: function() {
                            var t = this,
                                e = t.ctx,
                                i = t.options,
                                n = i.ticks;
                            if (n.display) {
                                var r, s, a = t.getIndexAngle(0),
                                    o = ct.options._parseFont(n),
                                    l = Gn(n.fontColor, K.global.defaultFontColor);
                                e.save(), e.font = o.string, e.translate(t.xCenter, t.yCenter), e.rotate(a), e.textAlign = "center", e.textBaseline = "middle", ct.each(t.ticks, (function(i, a) {
                                    (0 !== a || n.reverse) && (r = t.getDistanceFromCenterForValue(t.ticksAsNumbers[a]), n.showLabelBackdrop && (s = e.measureText(i).width, e.fillStyle = n.backdropColor, e.fillRect(-s / 2 - n.backdropPaddingX, -r - o.size / 2 - n.backdropPaddingY, s + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), e.fillStyle = l, e.fillText(i, 0, -r))
                                })), e.restore()
                            }
                        },
                        _drawTitle: ct.noop
                    }),
                    cr = Kn;
                lr._defaults = cr;
                var hr = ct._deprecated,
                    ur = ct.options.resolve,
                    dr = ct.valueOrDefault,
                    pr = Number.MIN_SAFE_INTEGER || -9007199254740991,
                    fr = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    gr = {
                        millisecond: {
                            common: !0,
                            size: 1,
                            steps: 1e3
                        },
                        second: {
                            common: !0,
                            size: 1e3,
                            steps: 60
                        },
                        minute: {
                            common: !0,
                            size: 6e4,
                            steps: 60
                        },
                        hour: {
                            common: !0,
                            size: 36e5,
                            steps: 24
                        },
                        day: {
                            common: !0,
                            size: 864e5,
                            steps: 30
                        },
                        week: {
                            common: !1,
                            size: 6048e5,
                            steps: 4
                        },
                        month: {
                            common: !0,
                            size: 2628e6,
                            steps: 12
                        },
                        quarter: {
                            common: !1,
                            size: 7884e6,
                            steps: 4
                        },
                        year: {
                            common: !0,
                            size: 3154e7
                        }
                    },
                    mr = Object.keys(gr);

                function vr(t, e) {
                    return t - e
                }

                function br(t) {
                    var e, i, n, r = {},
                        s = [];
                    for (e = 0, i = t.length; e < i; ++e) n = t[e], r[n] || (r[n] = !0, s.push(n));
                    return s
                }

                function yr(t) {
                    return ct.valueOrDefault(t.time.min, t.ticks.min)
                }

                function xr(t) {
                    return ct.valueOrDefault(t.time.max, t.ticks.max)
                }

                function _r(t, e, i, n) {
                    if ("linear" === n || !t.length) return [{
                        time: e,
                        pos: 0
                    }, {
                        time: i,
                        pos: 1
                    }];
                    var r, s, a, o, l, c = [],
                        h = [e];
                    for (r = 0, s = t.length; r < s; ++r) o = t[r], o > e && o < i && h.push(o);
                    for (h.push(i), r = 0, s = h.length; r < s; ++r) l = h[r + 1], a = h[r - 1], o = h[r], void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === o || c.push({
                        time: o,
                        pos: r / (s - 1)
                    });
                    return c
                }

                function wr(t, e, i) {
                    var n, r, s, a = 0,
                        o = t.length - 1;
                    while (a >= 0 && a <= o) {
                        if (n = a + o >> 1, r = t[n - 1] || null, s = t[n], !r) return {
                            lo: null,
                            hi: s
                        };
                        if (s[e] < i) a = n + 1;
                        else {
                            if (!(r[e] > i)) return {
                                lo: r,
                                hi: s
                            };
                            o = n - 1
                        }
                    }
                    return {
                        lo: s,
                        hi: null
                    }
                }

                function Cr(t, e, i, n) {
                    var r = wr(t, e, i),
                        s = r.lo ? r.hi ? r.lo : t[t.length - 2] : t[0],
                        a = r.lo ? r.hi ? r.hi : t[t.length - 1] : t[1],
                        o = a[e] - s[e],
                        l = o ? (i - s[e]) / o : 0,
                        c = (a[n] - s[n]) * l;
                    return s[n] + c
                }

                function kr(t, e) {
                    var i = t._adapter,
                        n = t.options.time,
                        r = n.parser,
                        s = r || n.format,
                        a = e;
                    return "function" === typeof r && (a = r(a)), ct.isFinite(a) || (a = "string" === typeof s ? i.parse(a, s) : i.parse(a)), null !== a ? +a : (r || "function" !== typeof s || (a = s(e), ct.isFinite(a) || (a = i.parse(a))), a)
                }

                function Sr(t, e) {
                    if (ct.isNullOrUndef(e)) return null;
                    var i = t.options.time,
                        n = kr(t, t.getRightValue(e));
                    return null === n || i.round && (n = +t._adapter.startOf(n, i.round)), n
                }

                function $r(t, e, i, n) {
                    var r, s, a, o = mr.length;
                    for (r = mr.indexOf(t); r < o - 1; ++r)
                        if (s = gr[mr[r]], a = s.steps ? s.steps : fr, s.common && Math.ceil((i - e) / (a * s.size)) <= n) return mr[r];
                    return mr[o - 1]
                }

                function Ar(t, e, i, n, r) {
                    var s, a;
                    for (s = mr.length - 1; s >= mr.indexOf(i); s--)
                        if (a = mr[s], gr[a].common && t._adapter.diff(r, n, a) >= e - 1) return a;
                    return mr[i ? mr.indexOf(i) : 0]
                }

                function Ir(t) {
                    for (var e = mr.indexOf(t) + 1, i = mr.length; e < i; ++e)
                        if (gr[mr[e]].common) return mr[e]
                }

                function Mr(t, e, i, n) {
                    var r, s = t._adapter,
                        a = t.options,
                        o = a.time,
                        l = o.unit || $r(o.minUnit, e, i, n),
                        c = ur([o.stepSize, o.unitStepSize, 1]),
                        h = "week" === l && o.isoWeekday,
                        u = e,
                        d = [];
                    if (h && (u = +s.startOf(u, "isoWeek", h)), u = +s.startOf(u, h ? "day" : l), s.diff(i, e, l) > 1e5 * c) throw e + " and " + i + " are too far apart with stepSize of " + c + " " + l;
                    for (r = u; r < i; r = +s.add(r, c, l)) d.push(r);
                    return r !== i && "ticks" !== a.bounds || d.push(r), d
                }

                function Or(t, e, i, n, r) {
                    var s, a, o = 0,
                        l = 0;
                    return r.offset && e.length && (s = Cr(t, "time", e[0], "pos"), o = 1 === e.length ? 1 - s : (Cr(t, "time", e[1], "pos") - s) / 2, a = Cr(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? a : (a - Cr(t, "time", e[e.length - 2], "pos")) / 2), {
                        start: o,
                        end: l,
                        factor: 1 / (o + 1 + l)
                    }
                }

                function Tr(t, e, i, n) {
                    var r, s, a = t._adapter,
                        o = +a.startOf(e[0].value, n),
                        l = e[e.length - 1].value;
                    for (r = o; r <= l; r = +a.add(r, 1, n)) s = i[r], s >= 0 && (e[s].major = !0);
                    return e
                }

                function Lr(t, e, i) {
                    var n, r, s = [],
                        a = {},
                        o = e.length;
                    for (n = 0; n < o; ++n) r = e[n], a[r] = n, s.push({
                        value: r,
                        major: !1
                    });
                    return 0 !== o && i ? Tr(t, s, a, i) : s
                }
                var Pr = {
                        position: "bottom",
                        distribution: "linear",
                        bounds: "data",
                        adapters: {},
                        time: {
                            parser: !1,
                            unit: !1,
                            round: !1,
                            displayFormat: !1,
                            isoWeekday: !1,
                            minUnit: "millisecond",
                            displayFormats: {}
                        },
                        ticks: {
                            autoSkip: !1,
                            source: "auto",
                            major: {
                                enabled: !1
                            }
                        }
                    },
                    Dr = kn.extend({
                        initialize: function() {
                            this.mergeTicksOptions(), kn.prototype.initialize.call(this)
                        },
                        update: function() {
                            var t = this,
                                e = t.options,
                                i = e.time || (e.time = {}),
                                n = t._adapter = new nn._date(e.adapters.date);
                            return hr("time scale", i.format, "time.format", "time.parser"), hr("time scale", i.min, "time.min", "ticks.min"), hr("time scale", i.max, "time.max", "ticks.max"), ct.mergeIf(i.displayFormats, n.formats()), kn.prototype.update.apply(t, arguments)
                        },
                        getRightValue: function(t) {
                            return t && void 0 !== t.t && (t = t.t), kn.prototype.getRightValue.call(this, t)
                        },
                        determineDataLimits: function() {
                            var t, e, i, n, r, s, a, o = this,
                                l = o.chart,
                                c = o._adapter,
                                h = o.options,
                                u = h.time.unit || "day",
                                d = fr,
                                p = pr,
                                f = [],
                                g = [],
                                m = [],
                                v = o._getLabels();
                            for (t = 0, i = v.length; t < i; ++t) m.push(Sr(o, v[t]));
                            for (t = 0, i = (l.data.datasets || []).length; t < i; ++t)
                                if (l.isDatasetVisible(t))
                                    if (r = l.data.datasets[t].data, ct.isObject(r[0]))
                                        for (g[t] = [], e = 0, n = r.length; e < n; ++e) s = Sr(o, r[e]), f.push(s), g[t][e] = s;
                                    else g[t] = m.slice(0), a || (f = f.concat(m), a = !0);
                            else g[t] = [];
                            m.length && (d = Math.min(d, m[0]), p = Math.max(p, m[m.length - 1])), f.length && (f = i > 1 ? br(f).sort(vr) : f.sort(vr), d = Math.min(d, f[0]), p = Math.max(p, f[f.length - 1])), d = Sr(o, yr(h)) || d, p = Sr(o, xr(h)) || p, d = d === fr ? +c.startOf(Date.now(), u) : d, p = p === pr ? +c.endOf(Date.now(), u) + 1 : p, o.min = Math.min(d, p), o.max = Math.max(d + 1, p), o._table = [], o._timestamps = {
                                data: f,
                                datasets: g,
                                labels: m
                            }
                        },
                        buildTicks: function() {
                            var t, e, i, n = this,
                                r = n.min,
                                s = n.max,
                                a = n.options,
                                o = a.ticks,
                                l = a.time,
                                c = n._timestamps,
                                h = [],
                                u = n.getLabelCapacity(r),
                                d = o.source,
                                p = a.distribution;
                            for (c = "data" === d || "auto" === d && "series" === p ? c.data : "labels" === d ? c.labels : Mr(n, r, s, u), "ticks" === a.bounds && c.length && (r = c[0], s = c[c.length - 1]), r = Sr(n, yr(a)) || r, s = Sr(n, xr(a)) || s, t = 0, e = c.length; t < e; ++t) i = c[t], i >= r && i <= s && h.push(i);
                            return n.min = r, n.max = s, n._unit = l.unit || (o.autoSkip ? $r(l.minUnit, n.min, n.max, u) : Ar(n, h.length, l.minUnit, n.min, n.max)), n._majorUnit = o.major.enabled && "year" !== n._unit ? Ir(n._unit) : void 0, n._table = _r(n._timestamps.data, r, s, p), n._offsets = Or(n._table, h, r, s, a), o.reverse && h.reverse(), Lr(n, h, n._majorUnit)
                        },
                        getLabelForIndex: function(t, e) {
                            var i = this,
                                n = i._adapter,
                                r = i.chart.data,
                                s = i.options.time,
                                a = r.labels && t < r.labels.length ? r.labels[t] : "",
                                o = r.datasets[e].data[t];
                            return ct.isObject(o) && (a = i.getRightValue(o)), s.tooltipFormat ? n.format(kr(i, a), s.tooltipFormat) : "string" === typeof a ? a : n.format(kr(i, a), s.displayFormats.datetime)
                        },
                        tickFormatFunction: function(t, e, i, n) {
                            var r = this,
                                s = r._adapter,
                                a = r.options,
                                o = a.time.displayFormats,
                                l = o[r._unit],
                                c = r._majorUnit,
                                h = o[c],
                                u = i[e],
                                d = a.ticks,
                                p = c && h && u && u.major,
                                f = s.format(t, n || (p ? h : l)),
                                g = p ? d.major : d.minor,
                                m = ur([g.callback, g.userCallback, d.callback, d.userCallback]);
                            return m ? m(f, e, i) : f
                        },
                        convertTicksToLabels: function(t) {
                            var e, i, n = [];
                            for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(t[e].value, e, t));
                            return n
                        },
                        getPixelForOffset: function(t) {
                            var e = this,
                                i = e._offsets,
                                n = Cr(e._table, "time", t, "pos");
                            return e.getPixelForDecimal((i.start + n) * i.factor)
                        },
                        getPixelForValue: function(t, e, i) {
                            var n = this,
                                r = null;
                            if (void 0 !== e && void 0 !== i && (r = n._timestamps.datasets[i][e]), null === r && (r = Sr(n, t)), null !== r) return n.getPixelForOffset(r)
                        },
                        getPixelForTick: function(t) {
                            var e = this.getTicks();
                            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                i = e._offsets,
                                n = e.getDecimalForPixel(t) / i.factor - i.end,
                                r = Cr(e._table, "pos", n, "time");
                            return e._adapter._create(r)
                        },
                        _getLabelSize: function(t) {
                            var e = this,
                                i = e.options.ticks,
                                n = e.ctx.measureText(t).width,
                                r = ct.toRadians(e.isHorizontal() ? i.maxRotation : i.minRotation),
                                s = Math.cos(r),
                                a = Math.sin(r),
                                o = dr(i.fontSize, K.global.defaultFontSize);
                            return {
                                w: n * s + o * a,
                                h: n * a + o * s
                            }
                        },
                        getLabelWidth: function(t) {
                            return this._getLabelSize(t).w
                        },
                        getLabelCapacity: function(t) {
                            var e = this,
                                i = e.options.time,
                                n = i.displayFormats,
                                r = n[i.unit] || n.millisecond,
                                s = e.tickFormatFunction(t, 0, Lr(e, [t], e._majorUnit), r),
                                a = e._getLabelSize(s),
                                o = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h);
                            return e.options.offset && o--, o > 0 ? o : 1
                        }
                    }),
                    Br = Pr;
                Dr._defaults = Br;
                var Er = {
                        category: An,
                        linear: Nn,
                        logarithmic: Un,
                        radialLinear: lr,
                        time: Dr
                    },
                    Fr = {
                        datetime: "MMM D, YYYY, h:mm:ss a",
                        millisecond: "h:mm:ss.SSS a",
                        second: "h:mm:ss a",
                        minute: "h:mm a",
                        hour: "hA",
                        day: "MMM D",
                        week: "ll",
                        month: "MMM YYYY",
                        quarter: "[Q]Q - YYYY",
                        year: "YYYY"
                    };
                nn._date.override("function" === typeof t ? {
                    _id: "moment",
                    formats: function() {
                        return Fr
                    },
                    parse: function(e, i) {
                        return "string" === typeof e && "string" === typeof i ? e = t(e, i) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null
                    },
                    format: function(e, i) {
                        return t(e).format(i)
                    },
                    add: function(e, i, n) {
                        return t(e).add(i, n).valueOf()
                    },
                    diff: function(e, i, n) {
                        return t(e).diff(t(i), n)
                    },
                    startOf: function(e, i, n) {
                        return e = t(e), "isoWeek" === i ? e.isoWeekday(n).valueOf() : e.startOf(i).valueOf()
                    },
                    endOf: function(e, i) {
                        return t(e).endOf(i).valueOf()
                    },
                    _create: function(e) {
                        return t(e)
                    }
                } : {}), K._set("global", {
                    plugins: {
                        filler: {
                            propagate: !0
                        }
                    }
                });
                var Vr = {
                    dataset: function(t) {
                        var e = t.fill,
                            i = t.chart,
                            n = i.getDatasetMeta(e),
                            r = n && i.isDatasetVisible(e),
                            s = r && n.dataset._children || [],
                            a = s.length || 0;
                        return a ? function(t, e) {
                            return e < a && s[e]._view || null
                        } : null
                    },
                    boundary: function(t) {
                        var e = t.boundary,
                            i = e ? e.x : null,
                            n = e ? e.y : null;
                        return ct.isArray(e) ? function(t, i) {
                            return e[i]
                        } : function(t) {
                            return {
                                x: null === i ? t.x : i,
                                y: null === n ? t.y : n
                            }
                        }
                    }
                };

                function Nr(t, e, i) {
                    var n, r = t._model || {},
                        s = r.fill;
                    if (void 0 === s && (s = !!r.backgroundColor), !1 === s || null === s) return !1;
                    if (!0 === s) return "origin";
                    if (n = parseFloat(s, 10), isFinite(n) && Math.floor(n) === n) return "-" !== s[0] && "+" !== s[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;
                    switch (s) {
                        case "bottom":
                            return "start";
                        case "top":
                            return "end";
                        case "zero":
                            return "origin";
                        case "origin":
                        case "start":
                        case "end":
                            return s;
                        default:
                            return !1
                    }
                }

                function zr(t) {
                    var e, i = t.el._model || {},
                        n = t.el._scale || {},
                        r = t.fill,
                        s = null;
                    if (isFinite(r)) return null;
                    if ("start" === r ? s = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === r ? s = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? s = i.scaleZero : n.getBasePixel && (s = n.getBasePixel()), void 0 !== s && null !== s) {
                        if (void 0 !== s.x && void 0 !== s.y) return s;
                        if (ct.isFinite(s)) return e = n.isHorizontal(), {
                            x: e ? s : null,
                            y: e ? null : s
                        }
                    }
                    return null
                }

                function Rr(t) {
                    var e, i, n, r, s, a = t.el._scale,
                        o = a.options,
                        l = a.chart.data.labels.length,
                        c = t.fill,
                        h = [];
                    if (!l) return null;
                    for (e = o.ticks.reverse ? a.max : a.min, i = o.ticks.reverse ? a.min : a.max, n = a.getPointPositionForValue(0, e), r = 0; r < l; ++r) s = "start" === c || "end" === c ? a.getPointPositionForValue(r, "start" === c ? e : i) : a.getBasePosition(r), o.gridLines.circular && (s.cx = n.x, s.cy = n.y, s.angle = a.getIndexAngle(r) - Math.PI / 2), h.push(s);
                    return h
                }

                function Wr(t) {
                    var e = t.el._scale || {};
                    return e.getPointPositionForValue ? Rr(t) : zr(t)
                }

                function Hr(t, e, i) {
                    var n, r = t[e],
                        s = r.fill,
                        a = [e];
                    if (!i) return s;
                    while (!1 !== s && -1 === a.indexOf(s)) {
                        if (!isFinite(s)) return s;
                        if (n = t[s], !n) return !1;
                        if (n.visible) return s;
                        a.push(s), s = n.fill
                    }
                    return !1
                }

                function jr(t) {
                    var e = t.fill,
                        i = "dataset";
                    return !1 === e ? null : (isFinite(e) || (i = "boundary"), Vr[i](t))
                }

                function qr(t) {
                    return t && !t.skip
                }

                function Ur(t, e, i, n, r) {
                    var s, a, o, l;
                    if (n && r) {
                        for (t.moveTo(e[0].x, e[0].y), s = 1; s < n; ++s) ct.canvas.lineTo(t, e[s - 1], e[s]);
                        if (void 0 === i[0].angle)
                            for (t.lineTo(i[r - 1].x, i[r - 1].y), s = r - 1; s > 0; --s) ct.canvas.lineTo(t, i[s], i[s - 1], !0);
                        else
                            for (a = i[0].cx, o = i[0].cy, l = Math.sqrt(Math.pow(i[0].x - a, 2) + Math.pow(i[0].y - o, 2)), s = r - 1; s > 0; --s) t.arc(a, o, l, i[s].angle, i[s - 1].angle, !0)
                    }
                }

                function Yr(t, e, i, n, r, s) {
                    var a, o, l, c, h, u, d, p, f = e.length,
                        g = n.spanGaps,
                        m = [],
                        v = [],
                        b = 0,
                        y = 0;
                    for (t.beginPath(), a = 0, o = f; a < o; ++a) l = a % f, c = e[l]._view, h = i(c, l, n), u = qr(c), d = qr(h), s && void 0 === p && u && (p = a + 1, o = f + p), u && d ? (b = m.push(c), y = v.push(h)) : b && y && (g ? (u && m.push(c), d && v.push(h)) : (Ur(t, m, v, b, y), b = y = 0, m = [], v = []));
                    Ur(t, m, v, b, y), t.closePath(), t.fillStyle = r, t.fill()
                }
                var Gr = {
                        id: "filler",
                        afterDatasetsUpdate: function(t, e) {
                            var i, n, r, s, a = (t.data.datasets || []).length,
                                o = e.propagate,
                                l = [];
                            for (n = 0; n < a; ++n) i = t.getDatasetMeta(n), r = i.dataset, s = null, r && r._model && r instanceof Xt.Line && (s = {
                                visible: t.isDatasetVisible(n),
                                fill: Nr(r, n, a),
                                chart: t,
                                el: r
                            }), i.$filler = s, l.push(s);
                            for (n = 0; n < a; ++n) s = l[n], s && (s.fill = Hr(l, n, o), s.boundary = Wr(s), s.mapper = jr(s))
                        },
                        beforeDatasetsDraw: function(t) {
                            var e, i, n, r, s, a, o, l = t._getSortedVisibleDatasetMetas(),
                                c = t.ctx;
                            for (i = l.length - 1; i >= 0; --i) e = l[i].$filler, e && e.visible && (n = e.el, r = n._view, s = n._children || [], a = e.mapper, o = r.backgroundColor || K.global.defaultColor, a && o && s.length && (ct.canvas.clipArea(c, t.chartArea), Yr(c, s, a, r, o, n._loop), ct.canvas.unclipArea(c)))
                        }
                    },
                    Xr = ct.rtl.getRtlAdapter,
                    Zr = ct.noop,
                    Kr = ct.valueOrDefault;

                function Qr(t, e) {
                    return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
                }
                K._set("global", {
                    legend: {
                        display: !0,
                        position: "top",
                        align: "center",
                        fullWidth: !0,
                        reverse: !1,
                        weight: 1e3,
                        onClick: function(t, e) {
                            var i = e.datasetIndex,
                                n = this.chart,
                                r = n.getDatasetMeta(i);
                            r.hidden = null === r.hidden ? !n.data.datasets[i].hidden : null, n.update()
                        },
                        onHover: null,
                        onLeave: null,
                        labels: {
                            boxWidth: 40,
                            padding: 10,
                            generateLabels: function(t) {
                                var e = t.data.datasets,
                                    i = t.options.legend || {},
                                    n = i.labels && i.labels.usePointStyle;
                                return t._getSortedDatasetMetas().map((function(i) {
                                    var r = i.controller.getStyle(n ? 0 : void 0);
                                    return {
                                        text: e[i.index].label,
                                        fillStyle: r.backgroundColor,
                                        hidden: !t.isDatasetVisible(i.index),
                                        lineCap: r.borderCapStyle,
                                        lineDash: r.borderDash,
                                        lineDashOffset: r.borderDashOffset,
                                        lineJoin: r.borderJoinStyle,
                                        lineWidth: r.borderWidth,
                                        strokeStyle: r.borderColor,
                                        pointStyle: r.pointStyle,
                                        rotation: r.rotation,
                                        datasetIndex: i.index
                                    }
                                }), this)
                            }
                        }
                    },
                    legendCallback: function(t) {
                        var e, i, n, r, s = document.createElement("ul"),
                            a = t.data.datasets;
                        for (s.setAttribute("class", t.id + "-legend"), e = 0, i = a.length; e < i; e++) n = s.appendChild(document.createElement("li")), r = n.appendChild(document.createElement("span")), r.style.backgroundColor = a[e].backgroundColor, a[e].label && n.appendChild(document.createTextNode(a[e].label));
                        return s.outerHTML
                    }
                });
                var Jr = vt.extend({
                    initialize: function(t) {
                        var e = this;
                        ct.extend(e, t), e.legendHitBoxes = [], e._hoveredItem = null, e.doughnutMode = !1
                    },
                    beforeUpdate: Zr,
                    update: function(t, e, i) {
                        var n = this;
                        return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                    },
                    afterUpdate: Zr,
                    beforeSetDimensions: Zr,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: Zr,
                    beforeBuildLabels: Zr,
                    buildLabels: function() {
                        var t = this,
                            e = t.options.labels || {},
                            i = ct.callback(e.generateLabels, [t.chart], t) || [];
                        e.filter && (i = i.filter((function(i) {
                            return e.filter(i, t.chart.data)
                        }))), t.options.reverse && i.reverse(), t.legendItems = i
                    },
                    afterBuildLabels: Zr,
                    beforeFit: Zr,
                    fit: function() {
                        var t = this,
                            e = t.options,
                            i = e.labels,
                            n = e.display,
                            r = t.ctx,
                            s = ct.options._parseFont(i),
                            a = s.size,
                            o = t.legendHitBoxes = [],
                            l = t.minSize,
                            c = t.isHorizontal();
                        if (c ? (l.width = t.maxWidth, l.height = n ? 10 : 0) : (l.width = n ? 10 : 0, l.height = t.maxHeight), n) {
                            if (r.font = s.string, c) {
                                var h = t.lineWidths = [0],
                                    u = 0;
                                r.textAlign = "left", r.textBaseline = "middle", ct.each(t.legendItems, (function(t, e) {
                                    var n = Qr(i, a),
                                        s = n + a / 2 + r.measureText(t.text).width;
                                    (0 === e || h[h.length - 1] + s + 2 * i.padding > l.width) && (u += a + i.padding, h[h.length - (e > 0 ? 0 : 1)] = 0), o[e] = {
                                        left: 0,
                                        top: 0,
                                        width: s,
                                        height: a
                                    }, h[h.length - 1] += s + i.padding
                                })), l.height += u
                            } else {
                                var d = i.padding,
                                    p = t.columnWidths = [],
                                    f = t.columnHeights = [],
                                    g = i.padding,
                                    m = 0,
                                    v = 0;
                                ct.each(t.legendItems, (function(t, e) {
                                    var n = Qr(i, a),
                                        s = n + a / 2 + r.measureText(t.text).width;
                                    e > 0 && v + a + 2 * d > l.height && (g += m + i.padding, p.push(m), f.push(v), m = 0, v = 0), m = Math.max(m, s), v += a + d, o[e] = {
                                        left: 0,
                                        top: 0,
                                        width: s,
                                        height: a
                                    }
                                })), g += m, p.push(m), f.push(v), l.width += g
                            }
                            t.width = l.width, t.height = l.height
                        } else t.width = l.width = t.height = l.height = 0
                    },
                    afterFit: Zr,
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    draw: function() {
                        var t = this,
                            e = t.options,
                            i = e.labels,
                            n = K.global,
                            r = n.defaultColor,
                            s = n.elements.line,
                            a = t.height,
                            o = t.columnHeights,
                            l = t.width,
                            c = t.lineWidths;
                        if (e.display) {
                            var h, u = Xr(e.rtl, t.left, t.minSize.width),
                                d = t.ctx,
                                p = Kr(i.fontColor, n.defaultFontColor),
                                f = ct.options._parseFont(i),
                                g = f.size;
                            d.textAlign = u.textAlign("left"), d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = p, d.fillStyle = p, d.font = f.string;
                            var m = Qr(i, g),
                                v = t.legendHitBoxes,
                                b = function(t, e, n) {
                                    if (!(isNaN(m) || m <= 0)) {
                                        d.save();
                                        var a = Kr(n.lineWidth, s.borderWidth);
                                        if (d.fillStyle = Kr(n.fillStyle, r), d.lineCap = Kr(n.lineCap, s.borderCapStyle), d.lineDashOffset = Kr(n.lineDashOffset, s.borderDashOffset), d.lineJoin = Kr(n.lineJoin, s.borderJoinStyle), d.lineWidth = a, d.strokeStyle = Kr(n.strokeStyle, r), d.setLineDash && d.setLineDash(Kr(n.lineDash, s.borderDash)), i && i.usePointStyle) {
                                            var o = m * Math.SQRT2 / 2,
                                                l = u.xPlus(t, m / 2),
                                                c = e + g / 2;
                                            ct.canvas.drawPoint(d, n.pointStyle, o, l, c, n.rotation)
                                        } else d.fillRect(u.leftForLtr(t, m), e, m, g), 0 !== a && d.strokeRect(u.leftForLtr(t, m), e, m, g);
                                        d.restore()
                                    }
                                },
                                y = function(t, e, i, n) {
                                    var r = g / 2,
                                        s = u.xPlus(t, m + r),
                                        a = e + r;
                                    d.fillText(i.text, s, a), i.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(s, a), d.lineTo(u.xPlus(s, n), a), d.stroke())
                                },
                                x = function(t, n) {
                                    switch (e.align) {
                                        case "start":
                                            return i.padding;
                                        case "end":
                                            return t - n;
                                        default:
                                            return (t - n + i.padding) / 2
                                    }
                                },
                                _ = t.isHorizontal();
                            h = _ ? {
                                x: t.left + x(l, c[0]),
                                y: t.top + i.padding,
                                line: 0
                            } : {
                                x: t.left + i.padding,
                                y: t.top + x(a, o[0]),
                                line: 0
                            }, ct.rtl.overrideTextDirection(t.ctx, e.textDirection);
                            var w = g + i.padding;
                            ct.each(t.legendItems, (function(e, n) {
                                var r = d.measureText(e.text).width,
                                    s = m + g / 2 + r,
                                    p = h.x,
                                    f = h.y;
                                u.setWidth(t.minSize.width), _ ? n > 0 && p + s + i.padding > t.left + t.minSize.width && (f = h.y += w, h.line++, p = h.x = t.left + x(l, c[h.line])) : n > 0 && f + w > t.top + t.minSize.height && (p = h.x = p + t.columnWidths[h.line] + i.padding, h.line++, f = h.y = t.top + x(a, o[h.line]));
                                var C = u.x(p);
                                b(C, f, e), v[n].left = u.leftForLtr(C, v[n].width), v[n].top = f, y(C, f, e, r), _ ? h.x += s + i.padding : h.y += w
                            })), ct.rtl.restoreTextDirection(t.ctx, e.textDirection)
                        }
                    },
                    _getLegendItemAt: function(t, e) {
                        var i, n, r, s = this;
                        if (t >= s.left && t <= s.right && e >= s.top && e <= s.bottom)
                            for (r = s.legendHitBoxes, i = 0; i < r.length; ++i)
                                if (n = r[i], t >= n.left && t <= n.left + n.width && e >= n.top && e <= n.top + n.height) return s.legendItems[i];
                        return null
                    },
                    handleEvent: function(t) {
                        var e, i = this,
                            n = i.options,
                            r = "mouseup" === t.type ? "click" : t.type;
                        if ("mousemove" === r) {
                            if (!n.onHover && !n.onLeave) return
                        } else {
                            if ("click" !== r) return;
                            if (!n.onClick) return
                        }
                        e = i._getLegendItemAt(t.x, t.y), "click" === r ? e && n.onClick && n.onClick.call(i, t.native, e) : (n.onLeave && e !== i._hoveredItem && (i._hoveredItem && n.onLeave.call(i, t.native, i._hoveredItem), i._hoveredItem = e), n.onHover && e && n.onHover.call(i, t.native, e))
                    }
                });

                function ts(t, e) {
                    var i = new Jr({
                        ctx: t.ctx,
                        options: e,
                        chart: t
                    });
                    Ge.configure(t, i, e), Ge.addBox(t, i), t.legend = i
                }
                var es = {
                        id: "legend",
                        _element: Jr,
                        beforeInit: function(t) {
                            var e = t.options.legend;
                            e && ts(t, e)
                        },
                        beforeUpdate: function(t) {
                            var e = t.options.legend,
                                i = t.legend;
                            e ? (ct.mergeIf(e, K.global.legend), i ? (Ge.configure(t, i, e), i.options = e) : ts(t, e)) : i && (Ge.removeBox(t, i), delete t.legend)
                        },
                        afterEvent: function(t, e) {
                            var i = t.legend;
                            i && i.handleEvent(e)
                        }
                    },
                    is = ct.noop;
                K._set("global", {
                    title: {
                        display: !1,
                        fontStyle: "bold",
                        fullWidth: !0,
                        padding: 10,
                        position: "top",
                        text: "",
                        weight: 2e3
                    }
                });
                var ns = vt.extend({
                    initialize: function(t) {
                        var e = this;
                        ct.extend(e, t), e.legendHitBoxes = []
                    },
                    beforeUpdate: is,
                    update: function(t, e, i) {
                        var n = this;
                        return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                    },
                    afterUpdate: is,
                    beforeSetDimensions: is,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: is,
                    beforeBuildLabels: is,
                    buildLabels: is,
                    afterBuildLabels: is,
                    beforeFit: is,
                    fit: function() {
                        var t, e, i = this,
                            n = i.options,
                            r = i.minSize = {},
                            s = i.isHorizontal();
                        n.display ? (t = ct.isArray(n.text) ? n.text.length : 1, e = t * ct.options._parseFont(n).lineHeight + 2 * n.padding, i.width = r.width = s ? i.maxWidth : e, i.height = r.height = s ? e : i.maxHeight) : i.width = r.width = i.height = r.height = 0
                    },
                    afterFit: is,
                    isHorizontal: function() {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    draw: function() {
                        var t = this,
                            e = t.ctx,
                            i = t.options;
                        if (i.display) {
                            var n, r, s, a = ct.options._parseFont(i),
                                o = a.lineHeight,
                                l = o / 2 + i.padding,
                                c = 0,
                                h = t.top,
                                u = t.left,
                                d = t.bottom,
                                p = t.right;
                            e.fillStyle = ct.valueOrDefault(i.fontColor, K.global.defaultFontColor), e.font = a.string, t.isHorizontal() ? (r = u + (p - u) / 2, s = h + l, n = p - u) : (r = "left" === i.position ? u + l : p - l, s = h + (d - h) / 2, n = d - h, c = Math.PI * ("left" === i.position ? -.5 : .5)), e.save(), e.translate(r, s), e.rotate(c), e.textAlign = "center", e.textBaseline = "middle";
                            var f = i.text;
                            if (ct.isArray(f))
                                for (var g = 0, m = 0; m < f.length; ++m) e.fillText(f[m], 0, g, n), g += o;
                            else e.fillText(f, 0, 0, n);
                            e.restore()
                        }
                    }
                });

                function rs(t, e) {
                    var i = new ns({
                        ctx: t.ctx,
                        options: e,
                        chart: t
                    });
                    Ge.configure(t, i, e), Ge.addBox(t, i), t.titleBlock = i
                }
                var ss = {
                        id: "title",
                        _element: ns,
                        beforeInit: function(t) {
                            var e = t.options.title;
                            e && rs(t, e)
                        },
                        beforeUpdate: function(t) {
                            var e = t.options.title,
                                i = t.titleBlock;
                            e ? (ct.mergeIf(e, K.global.title), i ? (Ge.configure(t, i, e), i.options = e) : rs(t, e)) : i && (Ge.removeBox(t, i), delete t.titleBlock)
                        }
                    },
                    as = {},
                    os = Gr,
                    ls = es,
                    cs = ss;
                for (var hs in as.filler = os, as.legend = ls, as.title = cs, Ki.helpers = ct, Qi(), Ki._adapters = nn, Ki.Animation = yt, Ki.animationService = xt, Ki.controllers = Ie, Ki.DatasetController = $t, Ki.defaults = K, Ki.Element = vt, Ki.elements = Xt, Ki.Interaction = Be, Ki.layouts = Ge, Ki.platform = ki, Ki.plugins = Si, Ki.Scale = kn, Ki.scaleService = $i, Ki.Ticks = rn, Ki.Tooltip = Ri, Ki.helpers.each(Er, (function(t, e) {
                        Ki.scaleService.registerScaleType(e, t, t._defaults)
                    })), as) as.hasOwnProperty(hs) && Ki.plugins.register(as[hs]);
                Ki.platform.initialize();
                var us = Ki;
                return "undefined" !== typeof window && (window.Chart = Ki), Ki.Chart = Ki, Ki.Legend = as.legend._element, Ki.Title = as.title._element, Ki.pluginService = Ki.plugins, Ki.PluginBase = Ki.Element.extend({}), Ki.canvasHelpers = Ki.helpers.canvas, Ki.layoutService = Ki.layouts, Ki.LinearScaleBase = Ln, Ki.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(t) {
                    Ki[t] = function(e, i) {
                        return new Ki(e, Ki.helpers.merge(i || {}, {
                            type: t.charAt(0).toLowerCase() + t.slice(1)
                        }))
                    }
                })), us
            }))
        },
        3408: function(t, e, i) {},
        "3ad0": function(t, e, i) {},
        4804: function(t, e, i) {},
        "495d": function(t, e, i) {},
        "4b85": function(t, e, i) {},
        "4ff9": function(t, e, i) {},
        "56d7": function(t, e, i) {
                "use strict";
                i.r(e);
                var n = {};
                i.r(n), i.d(n, "linear", (function() {
                    return Nn
                })), i.d(n, "easeInQuad", (function() {
                    return zn
                })), i.d(n, "easeOutQuad", (function() {
                    return Rn
                })), i.d(n, "easeInOutQuad", (function() {
                    return Wn
                })), i.d(n, "easeInCubic", (function() {
                    return Hn
                })), i.d(n, "easeOutCubic", (function() {
                    return jn
                })), i.d(n, "easeInOutCubic", (function() {
                    return qn
                })), i.d(n, "easeInQuart", (function() {
                    return Un
                })), i.d(n, "easeOutQuart", (function() {
                    return Yn
                })), i.d(n, "easeInOutQuart", (function() {
                    return Gn
                })), i.d(n, "easeInQuint", (function() {
                    return Xn
                })), i.d(n, "easeOutQuint", (function() {
                    return Zn
                })), i.d(n, "easeInOutQuint", (function() {
                    return Kn
                }));
                var r = i("2b0e"),
                    s = function() {
                        var t = this,
                            e = t.$createElement,
                            i = t._self._c || e;
                        return t.showInterface ? i("v-app", [i("v-content", [i("v-container", {
                            attrs: {
                                fluid: "",
                                "fill-height": ""
                            }
                        }, [i("v-layout", {
                            attrs: {
                                "align-center": "",
                                "justify-center": ""
                            }
                        }, [i("v-flex", {
                            attrs: {
                                xs9: ""
                            }
                        }, [i("v-card", {
                            staticClass: "elevation-12"
                        }, [i("v-system-bar", {
                            attrs: {
                                window: "",
                                dark: ""
                            }
                        }, [t._v(" MySQL Explorer "), i("v-spacer"), i("v-icon", {
                            on: {
                                click: function(e) {
                                    return t.close()
                                }
                            }
                        }, [t._v("close")])], 1), i("v-tabs", {
                            attrs: {
                                color: "primary",
                                "slider-color": "secondary"
                            },
                            model: {
                                value: t.active,
                                callback: function(e) {
                                    t.active = e
                                },
                                expression: "active"
                            }
                        }, [i("v-tab", {
                            attrs: {
                                ripple: ""
                            }
                        }, [t._v(" Time-resolved ")]), i("v-tab", {
                            attrs: {
                                ripple: ""
                            }
                        }, [t._v(" Resources ")]), i("v-tab", {
                            attrs: {
                                ripple: ""
                            }
                        }, [t._v(" Slowest Queries ")]), i("v-tab-item", [i("v-flex", {
                            staticStyle: {
                                height: "480px"
                            },
                            attrs: {
                                xs12: "",
                                "pa-2": ""
                            }
                        }, [i("m-chart", {
                            attrs: {
                                id: "time-graph",
                                labels: t.timeLabels,
                                datasets: t.timeData,
                                height: "540"
                            }
                        })], 1)], 1), i("v-tab-item", [i("v-flex", {
                            staticStyle: {
                                height: "480px"
                            },
                            attrs: {
                                xs12: "",
                                "pa-2": ""
                            }
                        }, [i("m-chart", {
                            attrs: {
                                id: "resource-graph",
                                labels: t.resourceLabels,
                                datasets: t.resourceData,
                                height: "540"
                            }
                        })], 1)], 1), i("v-tab-item", [i("v-flex", {
                            staticStyle: {
                                height: "480px"
                            },
                            attrs: {
                                xs12: "",
                                "pa-2": ""
                            }
                        }, [i("v-data-table", {
                            attrs: {
                                "align-end": "",
                                headers: t.headers,
                                items: t.slowqueries,
                                "items-per-page": 7,
                                "footer-props": {
                                    "items-per-page-options": [7],
                                    prevIcon: "chevron_left",
                                    nextIcon: "chevron_right"
                                }
                            },
                            scopedSlots: t._u([{
                                key: "items",
                                fn: function(e) {
                                    return [i("td", [t._v(t._s(e.item.resource))]), i("td", [t._v(t._s(e.item.sql))]), i("td", [t._v(t._s(e.item.queryTime))])]
                                }
                            }], null, !1, 202333779)
                        })], 1)], 1)], 1), i("v-footer", {
                            staticStyle: {
                                "min-height": "28px"
                            },
                            attrs: {
                                dark: "",
                                color: "black",
                                height: "28"
                            }
                        })], 1)], 1)], 1)], 1)], 1)], 1) : t._e()
                    },
                    a = [],
                    o = function() {
                        var t = this,
                            e = t.$createElement,
                            i = t._self._c || e;
                        return i("canvas", {
                            attrs: {
                                id: t.id,
                                width: t.width,
                                height: t.height
                            }
                        })
                    },
                    l = [],
                    c = i("30ef"),
                    h = i.n(c);
                h.a.defaults.global.defaultFontFamily = "'Alegreya Sans', 'sans-serif'";
                var u = {
                        data() {
                            return {
                                myChart: null
                            }
                        },
                        methods: {
                            createChart(t) {
                                const e = document.getElementById(t);
                                this.myChart = new h.a(e, {
                                    type: this.type,
                                    data: {
                                        labels: this.labels,
                                        datasets: this.datasets
                                    },
                                    options: {
                                        responsive: !0,
                                        lineTension: 1,
                                        scales: {
                                            yAxes: [{
                                                ticks: {
                                                    beginAtZero: !0
                                                }
                                            }]
                                        }
                                    }
                                })
                            },
                            arraysEqual(t, e) {
                                if (t === e) return !0;
                                if (null === t || null === e) return !1;
                                if (t.length !== e.length) return !1;
                                for (let i = 0; i < t.length; i += 1)
                                    if (t[i] !== e[i]) return !1;
                                return !0
                            }
                        },
                        props: {
                            id: {
                                type: String,
                                default: "line-chart"
                            },
                            type: {
                                type: String,
                                default: "line"
                            },
                            datasets: {
                                type: Array,
                                default: () => []
                            },
                            labels: {
                                type: Array,
                                default: () => []
                            },
                            height: {
                                type: Number,
                                default: 400
                            },
                            width: {
                                type: Number,
                                default: 1600
                            }
                        },
                        mounted() {
                            this.createChart(this.id)
                        },
                        watch: {
                            datasets() {
                                this.myChart && (this.myChart.data.datasets = this.datasets, this.myChart.update())
                            },
                            labels() {
                                this.myChart && (this.arraysEqual(this.myChart.data.labels, this.labels) || (this.myChart.data.labels = this.labels, this.myChart.update(0)))
                            }
                        }
                    },
                    d = u;

                function p(t, e, i, n, r, s, a, o) {
                    var l, c = "function" === typeof t ? t.options : t;
                    if (e && (c.render = e, c.staticRenderFns = i, c._compiled = !0), n && (c.functional = !0), s && (c._scopeId = "data-v-" + s), a ? (l = function(t) {
                            t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
                        }, c._ssrRegister = l) : r && (l = o ? function() {
                            r.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
                        } : r), l)
                        if (c.functional) {
                            c._injectStyles = l;
                            var h = c.render;
                            c.render = function(t, e) {
                                return l.call(e), h(t, e)
                            }
                        } else {
                            var u = c.beforeCreate;
                            c.beforeCreate = u ? [].concat(u, l) : [l]
                        }
                    return {
                        exports: t,
                        options: c
                    }
                }
                var f = p(d, o, l, !1, null, null, null),
                    g = f.exports,
                    m = {
                        components: {
                            MChart: g
                        },
                        data() {
                            return {
                                showInterface: !1,
                                colorGraphLoad: {
                                    backgroundColor: ["rgba(54, 73, 93, 0.5)"],
                                    borderColor: ["#36495d"],
                                    borderWidth: 3
                                },
                                colorGraphAvg: {
                                    backgroundColor: ["rgba(71, 183, 132, 0.5)"],
                                    borderColor: ["#47b784"],
                                    borderWidth: 3
                                },
                                colorGraphCount: {
                                    backgroundColor: ["rgba(62, 128, 113, 0.5)"],
                                    borderColor: ["#3e8071"],
                                    borderWidth: 3
                                },
                                resourceData: [],
                                resourceLabels: [],
                                timeLabels: [],
                                timeData: [],
                                slowqueries: [{
                                    resource: "memes",
                                    sql: "SELECT * FROM memes",
                                    queryTime: 5e3
                                }],
                                headers: [{
                                    text: "Resource",
                                    value: "resource"
                                }, {
                                    text: "Query",
                                    value: "sql",
                                    sortable: !1
                                }, {
                                    text: "Execution Time (ms)",
                                    value: "queryTime"
                                }]
                            }
                        },
                        destroyed() {
                            window.removeEventListener("message", this.listener)
                        },
                        methods: {
                            close() {
                                fetch("http://db_database/close-explorer", {
                                    method: "post",
                                    body: JSON.stringify({
                                        close: !0
                                    })
                                })
                            },
                            onToggleShow() {
                                this.showInterface = !this.showInterface
                            },
                            onSlowQueryData({
                                slowQueries: t
                            }) {
                                Array.isArray(t) && (this.slowqueries = t)
                            },
                            onTimeData({
                                timeData: t
                            }) {
                                if (Array.isArray(t) && 3 === t.length) {
                                    this.timeData = [{...this.colorGraphLoad,
                                        label: "Server Load (ms)",
                                        ...t[0]
                                    }, {...this.colorGraphAvg,
                                        label: "Average Query Time (ms)",
                                        ...t[1]
                                    }, {...this.colorGraphCount,
                                        label: "Query Count",
                                        ...t[2]
                                    }];
                                    const e = [];
                                    for (let i = t[0].data.length - 1; i > -1; i -= 1) 0 !== i ? e.push(`-${5*i}min`) : e.push("now");
                                    this.timeLabels = e
                                }
                            },
                            onResourceData({
                                resourceData: t
                            }) {
                                Array.isArray(t) && 3 === t.length && (this.resourceData = [{...this.colorGraphLoad,
                                    label: "Server Load (ms)",
                                    ...t[0]
                                }, {...this.colorGraphAvg,
                                    label: "Average Query Time (ms)",
                                    ...t[1]
                                }, {...this.colorGraphCount,
                                    label: "Query Count",
                                    ...t[2]
                                }])
                            },
                            onResourceLabels({
                                resourceLabels: t
                            }) {
                                this.resourceLabels = t
                            }
                        },
                        mounted() {
                            this.listener = window.addEventListener("message", t => {
                                const e = t.data || t.detail;
                                e && this[e.type] && this[e.type](e)
                            })
                        },
                        name: "app"
                    },
                    v = m,
                    b = (i("5c0b"), i("6544")),
                    y = i.n(b);
                i("df86");

                function x(t) {
                    const e = {...t.props,
                            ...t.injections
                        },
                        i = _.options.computed.isDark.call(e);
                    return _.options.computed.themeClasses.call({
                        isDark: i
                    })
                }
                const _ = r["a"].extend().extend({
                    name: "themeable",
                    provide() {
                        return {
                            theme: this.themeableProvide
                        }
                    },
                    inject: {
                        theme: {
                            default: {
                                isDark: !1
                            }
                        }
                    },
                    props: {
                        dark: {
                            type: Boolean,
                            default: null
                        },
                        light: {
                            type: Boolean,
                            default: null
                        }
                    },
                    data() {
                        return {
                            themeableProvide: {
                                isDark: !1
                            }
                        }
                    },
                    computed: {
                        appIsDark() {
                            return this.$vuetify.theme.dark || !1
                        },
                        isDark() {
                            return !0 === this.dark || !0 !== this.light && this.theme.isDark
                        },
                        themeClasses() {
                            return {
                                "theme--dark": this.isDark,
                                "theme--light": !this.isDark
                            }
                        },
                        rootIsDark() {
                            return !0 === this.dark || !0 !== this.light && this.appIsDark
                        },
                        rootThemeClasses() {
                            return {
                                "theme--dark": this.rootIsDark,
                                "theme--light": !this.rootIsDark
                            }
                        }
                    },
                    watch: {
                        isDark: {
                            handler(t, e) {
                                t !== e && (this.themeableProvide.isDark = this.isDark)
                            },
                            immediate: !0
                        }
                    }
                });
                var w = _;

                function C(...t) {
                    return r["a"].extend({
                        mixins: t
                    })
                }
                var k = C(w).extend({
                    name: "v-app",
                    props: {
                        dark: {
                            type: Boolean,
                            default: void 0
                        },
                        id: {
                            type: String,
                            default: "app"
                        },
                        light: {
                            type: Boolean,
                            default: void 0
                        }
                    },
                    computed: {
                        isDark() {
                            return this.$vuetify.theme.dark
                        }
                    },
                    beforeCreate() {
                        if (!this.$vuetify || this.$vuetify === this.$root) throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")
                    },
                    render(t) {
                        const e = t("div", {
                            staticClass: "v-application--wrap"
                        }, this.$slots.default);
                        return t("div", {
                            staticClass: "v-application",
                            class: {
                                "v-application--is-rtl": this.$vuetify.rtl, "v-application--is-ltr": !this.$vuetify.rtl, ...this.themeClasses
                            },
                            attrs: {
                                "data-app": !0
                            },
                            domProps: {
                                id: this.id
                            }
                        }, [e])
                    }
                });
                i("615b"), i("25a8");

                function S(t) {
                    return function(e, i) {
                        for (const n in i) Object.prototype.hasOwnProperty.call(e, n) || this.$delete(this.$data[t], n);
                        for (const n in e) this.$set(this.$data[t], n, e[n])
                    }
                }
                var $ = r["a"].extend({
                    data: () => ({
                        attrs$: {},
                        listeners$: {}
                    }),
                    created() {
                        this.$watch("$attrs", S("attrs$"), {
                            immediate: !0
                        }), this.$watch("$listeners", S("listeners$"), {
                            immediate: !0
                        })
                    }
                });

                function A(t, e, i) {
                    if (i && (e = {
                            _isVue: !0,
                            $parent: i,
                            $options: e
                        }), e) {
                        if (e.$_alreadyWarned = e.$_alreadyWarned || [], e.$_alreadyWarned.includes(t)) return;
                        e.$_alreadyWarned.push(t)
                    }
                    return "[Vuetify] " + t + (e ? B(e) : "")
                }

                function I(t, e, i) {
                    const n = A(t, e, i);
                    null != n && console.warn(n)
                }

                function M(t, e, i) {
                    const n = A(t, e, i);
                    null != n && console.error(n)
                }

                function O(t, e, i, n) {
                    M(`[BREAKING] '${t}' has been removed, use '${e}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`, i, n)
                }

                function T(t, e, i) {
                    I(`[REMOVED] '${t}' has been removed. You can safely omit it.`, e, i)
                }
                const L = /(?:^|[-_])(\w)/g,
                    P = t => t.replace(L, t => t.toUpperCase()).replace(/[-_]/g, "");

                function D(t, e) {
                    if (t.$root === t) return "<Root>";
                    const i = "function" === typeof t && null != t.cid ? t.options : t._isVue ? t.$options || t.constructor.options : t || {};
                    let n = i.name || i._componentTag;
                    const r = i.__file;
                    if (!n && r) {
                        const t = r.match(/([^/\\]+)\.vue$/);
                        n = t && t[1]
                    }
                    return (n ? `<${P(n)}>` : "<Anonymous>") + (r && !1 !== e ? " at " + r : "")
                }

                function B(t) {
                    if (t._isVue && t.$parent) {
                        const e = [];
                        let i = 0;
                        while (t) {
                            if (e.length > 0) {
                                const n = e[e.length - 1];
                                if (n.constructor === t.constructor) {
                                    i++, t = t.$parent;
                                    continue
                                }
                                i > 0 && (e[e.length - 1] = [n, i], i = 0)
                            }
                            e.push(t), t = t.$parent
                        }
                        return "\n\nfound in\n\n" + e.map((t, e) => `${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${D(t[0])}... (${t[1]} recursive calls)`:D(t)}`).join("\n")}return`\n\n(found in ${D(t)})`}function E(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}var F=r["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?(M("style must be an object",this),e):"string"===typeof e.class?(M("class must be an object",this),e):(E(t)?e.style={...e.style,"background-color":""+t,"border-color":""+t}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return M("style must be an object",this),e;if("string"===typeof e.class)return M("class must be an object",this),e;if(E(t))e.style={...e.style,color:""+t,"caret-color":""+t};else if(t){const[i,n]=t.toString().trim().split(" ",2);e.class={...e.class,[i+"--text"]:!0},n&&(e.class["text--"+n]=!0)}return e}}}),V=r["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{["elevation-"+this.elevation]:!0}}}});function N(t,e="div",i){return r["a"].extend({name:i||t.replace(/__/g,"-"),functional:!0,render(i,{data:n,children:r}){return n.staticClass=`${t} ${n.staticClass||""}`.trim(),i(e,n,r)}})}let z=!1;try{if("undefined"!==typeof window){const t=Object.defineProperty({},"passive",{get:()=>{z=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(Gr){console.warn(Gr)}function R(t,e,i){const n=e.length-1;if(n<0)return void 0===t?i:t;for(let r=0;r<n;r++){if(null==t)return i;t=t[e[r]]}return null==t||void 0===t[e[n]]?i:t[e[n]]}function W(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const i=Object.keys(t);return i.length===Object.keys(e).length&&i.every(i=>W(t[i],e[i]))}function H(t,e,i){return null!=t&&e&&"string"===typeof e?void 0!==t[e]?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),R(t,e.split("."),i)):i}function j(t,e,i){if(null==e)return void 0===t?i:t;if(t!==Object(t))return void 0===i?t:i;if("string"===typeof e)return H(t,e,i);if(Array.isArray(e))return R(t,e,i);if("function"!==typeof e)return i;const n=e(t,i);return"undefined"===typeof n?i:n}function q(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;const e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||q(t.parentNode)}const U={"&":"&amp;","<":"&lt;",">":"&gt;"};function Y(t){return t.replace(/[&<>]/g,t=>U[t]||t)}function G(t,e){const i={};for(let n=0;n<e.length;n++){const r=e[n];"undefined"!==typeof t[r]&&(i[r]=t[r])}return i}function X(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function Z(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function K(t){return null!==t&&"object"===typeof t}const Q=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34});function J(t,e){if(!e.startsWith("$"))return e;const i="$vuetify.icons.values."+e.split("$").pop().split(".").pop();return H(t,i,e)}function tt(t){return Object.keys(t)}const et=/-(\w)/g,it=t=>t.replace(et,(t,e)=>e?e.toUpperCase():"");function nt(t){return t.charAt(0).toUpperCase()+t.slice(1)}function rt(t,e,i){const n=e[0],r=[];let s=null;for(var a=0;a<t.length;a++){const e=t[a],i=H(e,n);s!==i&&(s=i,r.push({name:i,items:[]})),r[r.length-1].items.push(e)}return r}function st(t){return null!=t?Array.isArray(t)?t:[t]:[]}function at(t,e,i,n,r){if(null===e||!e.length)return t;const s=new Intl.Collator(n,{sensitivity:"accent",usage:"sort"});return t.sort((t,n)=>{for(let a=0;a<e.length;a++){const o=e[a];let l=H(t,o),c=H(n,o);if(i[a]&&([l,c]=[c,l]),r&&r[o]){const t=r[o](l,c);if(!t)continue;return t}if((null!==l||null!==c)&&([l,c]=[l,c].map(t=>(t||"").toString().toLocaleLowerCase()),l!==c))return isNaN(l)||isNaN(c)?s.compare(l,c):Number(l)-Number(c)}return 0})}function ot(t,e,i){return null!=t&&null!=e&&"boolean"!==typeof t&&-1!==t.toString().toLocaleLowerCase().indexOf(e.toLocaleLowerCase())}function lt(t,e){return e?(e=e.toString().toLowerCase(),""===e.trim()?t:t.filter(t=>Object.keys(t).some(i=>ot(H(t,i),e,t)))):t}function ct(t,e,i){return t.$slots[e]&&t.$scopedSlots[e]&&t.$scopedSlots[e].name?i?"v-slot":"scoped":t.$slots[e]?"normal":t.$scopedSlots[e]?"scoped":void 0}function ht(t,e){return Object.keys(e).filter(e=>e.startsWith(t)).reduce((i,n)=>(i[n.replace(t,"")]=e[n],i),{})}function ut(t,e="default",i,n=!1){return t.$scopedSlots[e]?t.$scopedSlots[e](i instanceof Function?i():i):!t.$slots[e]||i&&!n?void 0:t.$slots[e]}function dt(t,e=0,i=1){return Math.max(e,Math.min(i,t))}function pt(t){return t?Object.keys(t).reduce((e,i)=>(e[it(i)]=t[i],e),{}):{}}function ft(t={},e={}){for(const i in e){const n=t[i],r=e[i];K(n)&&K(r)?t[i]=ft(n,r):t[i]=r}return t}var gt=r["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=X(this.height),i=X(this.minHeight),n=X(this.minWidth),r=X(this.maxHeight),s=X(this.maxWidth),a=X(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),r&&(t.maxHeight=r),s&&(t.maxWidth=s),a&&(t.width=a),t}}}),mt=C($,F,V,gt,w).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes(){return{"v-sheet":!0,"v-sheet--tile":this.tile,...this.themeClasses,...this.elevationClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),vt=mt;i("6ece");const bt={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function yt(t){const e={};for(const i of t.split(bt.styleList)){let[t,n]=i.split(bt.styleProp);t=t.trim(),t&&("string"===typeof n&&(n=n.trim()),e[it(t)]=n)}return e}function xt(){const t={};let e,i,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"style":case"directives":if(!arguments[n][e])break;if(Array.isArray(t[e])||(t[e]=[]),"style"===e){let t;t=Array.isArray(arguments[n].style)?arguments[n].style:[arguments[n].style];for(let e=0;e<t.length;e++){const i=t[e];"string"===typeof i&&(t[e]=yt(i))}arguments[n].style=t}t[e]=t[e].concat(arguments[n][e]);break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":if(!arguments[n][e])break;t[e]||(t[e]={});const r=t[e];for(i of Object.keys(arguments[n][e]||{}))r[i]?r[i]=Array().concat(r[i],arguments[n][e][i]):r[i]=arguments[n][e][i];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:t[e]||(t[e]=arguments[n][e])}return t}function _t(t=[],...e){return Array().concat(t,...e)}function wt(t,e="top center 0",i){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:e}},render(e,i){const n="transition"+(i.props.group?"-group":""),r={props:{name:t,mode:i.props.mode},on:{beforeEnter(t){t.style.transformOrigin=i.props.origin,t.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(r.on.leave=_t(r.on.leave,t=>t.style.position="absolute")),i.props.hideOnLeave&&(r.on.leave=_t(r.on.leave,t=>t.style.display="none")),e(n,xt(i.data,r),i.children)}}}function Ct(t,e,i="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:i}},render(i,n){return i("transition",xt(n.data,{props:{name:t},on:e}),n.children)}}}var kt=function(t="",e=!1){const i=e?"width":"height",n="offset"+nt(i);return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow,[i]:t.style[i]}},enter(e){const r=e._initialStyle,s=e[n]+"px";e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=r.visibility,e.style.overflow="hidden",e.style[i]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[i]=s})},afterEnter:s,enterCancelled:s,leave(t){t._initialStyle={transition:"",visibility:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=t[n]+"px",t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){const e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[i]=e),delete t._initialStyle}};wt("carousel-transition"),wt("carousel-reverse-transition"),wt("tab-transition"),wt("tab-reverse-transition"),wt("menu-transition"),wt("fab-transition","center center","out-in"),wt("dialog-transition"),wt("dialog-bottom-transition");const St=wt("fade-transition"),$t=(wt("scale-transition"),wt("scroll-x-transition"),wt("scroll-x-reverse-transition"),wt("scroll-y-transition"),wt("scroll-y-reverse-transition"),wt("slide-x-transition")),At=(wt("slide-x-reverse-transition"),wt("slide-y-transition"),wt("slide-y-reverse-transition"),Ct("expand-transition",kt())),It=Ct("expand-x-transition",kt("",!0));const Mt={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function Ot(t=[]){return r["a"].extend({name:"positionable",props:t.length?G(Mt,t):Mt})}var Tt=Ot();function Lt(t="value",e="change"){return r["a"].extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const Pt=Lt();var Dt=Pt;const Bt=C(F,Ot(["absolute","fixed","top","bottom"]),Dt,w);var Et=Bt.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:X(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:X(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.$vuetify.rtl?"right":"left"]:X(this.normalizedValue,"%"),width:X(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?St:$t},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=X(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=ut(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?X(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),Ft=Et,Vt=r["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(Ft,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}});i("7435");function Nt(t,e){t.style["transform"]=e,t.style["webkitTransform"]=e}function zt(t,e){t.style["opacity"]=e.toString()}function Rt(t){return"TouchEvent"===t.constructor.name}function Wt(t){return"KeyboardEvent"===t.constructor.name}const Ht=(t,e,i={})=>{let n=0,r=0;if(!Wt(t)){const i=e.getBoundingClientRect(),s=Rt(t)?t.touches[t.touches.length-1]:t;n=s.clientX-i.left,r=s.clientY-i.top}let s=0,a=.3;e._ripple&&e._ripple.circle?(a=.15,s=e.clientWidth/2,s=i.center?s:s+Math.sqrt((n-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const o=(e.clientWidth-2*s)/2+"px",l=(e.clientHeight-2*s)/2+"px",c=i.center?o:n-s+"px",h=i.center?l:r-s+"px";return{radius:s,scale:a,x:c,y:h,centerX:o,centerY:l}},jt={show(t,e,i={}){if(!e._ripple||!e._ripple.enabled)return;const n=document.createElement("span"),r=document.createElement("span");n.appendChild(r),n.className="v-ripple__container",i.class&&(n.className+=" "+i.class);const{radius:s,scale:a,x:o,y:l,centerX:c,centerY:h}=Ht(t,e,i),u=2*s+"px";r.className="v-ripple__animation",r.style.width=u,r.style.height=u,e.appendChild(n);const d=window.getComputedStyle(e);d&&"static"===d.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),Nt(r,`translate(${o}, ${l}) scale3d(${a},${a},${a})`),zt(r,0),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),Nt(r,`translate(${c}, ${h}) scale3d(1,1,1)`),zt(r,.25)},0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const i=e[e.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const n=performance.now()-Number(i.dataset.activated),r=Math.max(250-n,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),zt(i,0),setTimeout(()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)},300)},r)}};function qt(t){return"undefined"===typeof t||!!t}function Ut(t){const e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched){if(Rt(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;e.center=i._ripple.centered||Wt(t),i._ripple.class&&(e.class=i._ripple.class),jt.show(t,i,e)}}function Yt(t){const e=t.currentTarget;e&&(window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),jt.hide(e))}let Gt=!1;function Xt(t){Gt||t.keyCode!==Q.enter&&t.keyCode!==Q.space||(Gt=!0,Ut(t))}function Zt(t){Gt=!1,Yt(t)}function Kt(t,e,i){const n=qt(e.value);n||jt.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=n;const r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),n&&!i?(t.addEventListener("touchstart",Ut,{passive:!0}),t.addEventListener("touchend",Yt,{passive:!0}),t.addEventListener("touchcancel",Yt),t.addEventListener("mousedown",Ut),t.addEventListener("mouseup",Yt),t.addEventListener("mouseleave",Yt),t.addEventListener("keydown",Xt),t.addEventListener("keyup",Zt),t.addEventListener("dragstart",Yt,{passive:!0})):!n&&i&&Qt(t)}function Qt(t){t.removeEventListener("mousedown",Ut),t.removeEventListener("touchstart",Ut),t.removeEventListener("touchend",Yt),t.removeEventListener("touchcancel",Yt),t.removeEventListener("mouseup",Yt),t.removeEventListener("mouseleave",Yt),t.removeEventListener("keydown",Xt),t.removeEventListener("keyup",Zt),t.removeEventListener("dragstart",Yt)}function Jt(t,e,i){Kt(t,e,!1)}function te(t){delete t._ripple,Qt(t)}function ee(t,e){if(e.value===e.oldValue)return;const i=qt(e.oldValue);Kt(t,e,i)}const ie={bind:Jt,unbind:te,update:ee};var ne=ie,re=r["a"].extend({name:"routable",directives:{Ripple:ne},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){return null!=this.ripple?this.ripple:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},methods:{click(t){this.$emit("click",t)},generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,click:this.click},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let n=this.activeClass,r=this.exactActiveClass||n;this.proxyClass&&(n=`${n} ${this.proxyClass}`.trim(),r=`${r} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,activeClass:n,exactActiveClass:r,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass} ${this.proxyClass||""}`.trim(),e="_vnode.data.class."+t;this.$nextTick(()=>{H(this.$refs.link,e)&&this.toggle()})},toggle:()=>{}}}),se=C(Vt,re,vt).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...re.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...vt.options.computed.classes.call(this)}},styles(){const t={...vt.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=Vt.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}});i("20f6"),i("4b85");function ae(t){return r["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:n,children:r}){n.staticClass=`${t} ${n.staticClass||""}`.trim();const{attrs:s}=n;if(s){n.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(n.staticClass+=" "+t.join(" "))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),e(i.tag,n,r)}})}var oe,le=ae("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:n}){let r;const{attrs:s}=i;return s&&(i.attrs={},r=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,xt(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),n)}}),ce=(i("daaf"),r["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})),he=ce.extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:i,footer:n,insetFooter:r,bottom:s,left:a}=this.$vuetify.application;return{paddingTop:e+t+"px",paddingRight:i+"px",paddingBottom:n+r+s+"px",paddingLeft:a+"px"}}},render(t){const e={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,e,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}}),ue=(i("91f4"),r["a"].extend({name:"v-data",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},sortBy:{type:[String,Array],default:()=>[]},sortDesc:{type:[Boolean,Array],default:()=>[]},customSort:{type:Function,default:at},mustSort:Boolean,multiSort:Boolean,page:{type:Number,default:1},itemsPerPage:{type:Number,default:10},groupBy:{type:[String,Array],default:()=>[]},groupDesc:{type:[Boolean,Array],default:()=>[]},customGroup:{type:Function,default:rt},locale:{type:String,default:"en-US"},disableSort:Boolean,disablePagination:Boolean,disableFiltering:Boolean,search:String,customFilter:{type:Function,default:lt},serverItemsLength:{type:Number,default:-1}},data(){let t={page:this.page,itemsPerPage:this.itemsPerPage,sortBy:st(this.sortBy),sortDesc:st(this.sortDesc),groupBy:st(this.groupBy),groupDesc:st(this.groupDesc),mustSort:this.mustSort,multiSort:this.multiSort};return this.options&&(t=Object.assign(t,this.options)),{internalOptions:t}},computed:{itemsLength(){return this.serverItemsLength>=0?this.serverItemsLength:this.filteredItems.length},pageCount(){return this.internalOptions.itemsPerPage<=0?1:Math.ceil(this.itemsLength/this.internalOptions.itemsPerPage)},pageStart(){return-1!==this.internalOptions.itemsPerPage&&this.items.length?(this.internalOptions.page-1)*this.internalOptions.itemsPerPage:0},pageStop(){return-1===this.internalOptions.itemsPerPage?this.itemsLength:this.items.length?Math.min(this.itemsLength,this.internalOptions.page*this.internalOptions.itemsPerPage):0},isGrouped(){return!!this.internalOptions.groupBy.length},pagination(){return{page:this.internalOptions.page,itemsPerPage:this.internalOptions.itemsPerPage,pageStart:this.pageStart,pageStop:this.pageStop,pageCount:this.pageCount,itemsLength:this.itemsLength}},filteredItems(){let t=this.items.slice();return!this.disableFiltering&&this.serverItemsLength<=0&&(t=this.customFilter(t,this.search)),t},computedItems(){let t=this.filteredItems.slice();return!this.disableSort&&this.serverItemsLength<=0&&(t=this.sortItems(t)),!this.disablePagination&&this.serverItemsLength<=0&&(t=this.paginateItems(t)),t},groupedItems(){return this.isGrouped?this.groupItems(this.computedItems):null},scopedProps(){const t={sort:this.sort,sortArray:this.sortArray,group:this.group,items:this.computedItems,options:this.internalOptions,updateOptions:this.updateOptions,pagination:this.pagination,groupedItems:this.groupedItems,originalItemsLength:this.items.length};return t},computedOptions(){return{...this.options}}},watch:{computedOptions:{handler(t,e){W(t,e)||this.updateOptions(t)},deep:!0,immediate:!0},internalOptions:{handler(t,e){W(t,e)||this.$emit("update:options",t)},deep:!0,immediate:!0},page(t){this.updateOptions({page:t})},"internalOptions.page"(t){this.$emit("update:page",t)},itemsPerPage(t){this.updateOptions({itemsPerPage:t})},"internalOptions.itemsPerPage"(t){this.$emit("update:items-per-page",t)},sortBy(t){this.updateOptions({sortBy:st(t)})},"internalOptions.sortBy"(t,e){!W(t,e)&&this.$emit("update:sort-by",Array.isArray(this.sortBy)?t:t[0])},sortDesc(t){this.updateOptions({sortDesc:st(t)})},"internalOptions.sortDesc"(t,e){!W(t,e)&&this.$emit("update:sort-desc",Array.isArray(this.sortDesc)?t:t[0])},groupBy(t){this.updateOptions({groupBy:st(t)})},"internalOptions.groupBy"(t,e){!W(t,e)&&this.$emit("update:group-by",Array.isArray(this.groupBy)?t:t[0])},groupDesc(t){this.updateOptions({groupDesc:st(t)})},"internalOptions.groupDesc"(t,e){!W(t,e)&&this.$emit("update:group-desc",Array.isArray(this.groupDesc)?t:t[0])},multiSort(t){this.updateOptions({multiSort:t})},"internalOptions.multiSort"(t){this.$emit("update:multi-sort",t)},mustSort(t){this.updateOptions({mustSort:t})},"internalOptions.mustSort"(t){this.$emit("update:must-sort",t)},pageCount:{handler(t){this.$emit("page-count",t)},immediate:!0},computedItems:{handler(t){this.$emit("current-items",t)},immediate:!0},pagination:{handler(t,e){W(t,e)||this.$emit("pagination",this.pagination)},immediate:!0}},methods:{toggle(t,e,i,n,r,s){let a=e.slice(),o=i.slice();const l=a.findIndex(e=>e===t);return l<0?(s||(a=[],o=[]),a.push(t),o.push(!1)):l>=0&&!o[l]?o[l]=!0:r?o[l]=!1:(a.splice(l,1),o.splice(l,1)),W(a,e)&&W(o,i)||(n=1),{by:a,desc:o,page:n}},group(t){const{by:e,desc:i,page:n}=this.toggle(t,this.internalOptions.groupBy,this.internalOptions.groupDesc,this.internalOptions.page,!0,!1);this.updateOptions({groupBy:e,groupDesc:i,page:n})},sort(t){if(Array.isArray(t))return this.sortArray(t);const{by:e,desc:i,page:n}=this.toggle(t,this.internalOptions.sortBy,this.internalOptions.sortDesc,this.internalOptions.page,this.internalOptions.mustSort,this.internalOptions.multiSort);this.updateOptions({sortBy:e,sortDesc:i,page:n})},sortArray(t){const e=t.map(t=>{const e=this.internalOptions.sortBy.findIndex(e=>e===t);return e>-1&&this.internalOptions.sortDesc[e]});this.updateOptions({sortBy:t,sortDesc:e})},updateOptions(t){this.internalOptions={...this.internalOptions,...t,page:this.serverItemsLength<0?Math.max(1,Math.min(t.page||this.internalOptions.page,this.pageCount)):t.page||this.internalOptions.page}},sortItems(t){let e=this.internalOptions.sortBy,i=this.internalOptions.sortDesc;return this.internalOptions.groupBy.length&&(e=[...this.internalOptions.groupBy,...e],i=[...this.internalOptions.groupDesc,...i]),this.customSort(t,e,i,this.locale)},groupItems(t){return this.customGroup(t,this.internalOptions.groupBy,this.internalOptions.groupDesc)},paginateItems(t){return-1===this.serverItemsLength&&t.length<=this.pageStart&&(this.internalOptions.page=Math.max(1,this.internalOptions.page-1)),t.slice(this.pageStart,this.pageStop)}},render(){return this.$scopedSlots.default&&this.$scopedSlots.default(this.scopedProps)}})),de=(i("495d"),i("4ff9"),i("68dd"),i("8adc"),i("4804"),r["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}}));function pe(t){return["fas","far","fal","fab","fad"].some(e=>t.includes(e))}function fe(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(oe||(oe={}));const ge=C($,F,de,w).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),J(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=tt(t).find(e=>t[e]);return e&&oe[e]||X(this.size)},getDefaultData(){const t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$};return t},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const i=[],n=this.getDefaultData();let r="material-icons";const s=t.indexOf("-"),a=s<=-1;a?i.push(t):(r=t.slice(0,s),pe(r)&&(r="")),n.class[r]=!0,n.class[t]=!a;const o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,i)},renderSvgIcon(t,e){const i=this.getSize(),n={...this.getDefaultData(),style:i?{fontSize:i,height:i,width:i}:void 0};n.class["v-icon--svg"]=!0,this.applyColors(n);const r={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:i||"24",width:i||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",n,[e("svg",r,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const i=this.getDefaultData();i.class["v-icon--is-component"]=!0;const n=this.getSize();n&&(i.style={fontSize:n,height:n,width:n}),this.applyColors(i);const r=t.component;return i.props=t.props,i.nativeOn=i.on,e(r,i)}},render(t){const e=this.getIcon();return"string"===typeof e?fe(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var me=r["a"].extend({name:"v-icon",$_wrapperFor:ge,functional:!0,render(t,{data:e,children:i}){let n="";return e.domProps&&(n=e.domProps.textContent||e.domProps.innerHTML||n,delete e.domProps.textContent,delete e.domProps.innerHTML),t(ge,e,n?[n]:i)}}),ve=me;function be(t,e){return()=>I(`The ${t} component must be used inside a ${e}`)}function ye(t,e,i){const n=e&&i?{register:be(e,i),unregister:be(e,i)}:null;return r["a"].extend({name:"registrable-inject",inject:{[t]:{default:n}}})}function xe(t,e,i){const n=ye(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}});return n}xe("itemGroup");function _e(t="value",e="input"){return r["a"].extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const we=_e();var Ce=we,ke=C(F,de,re,w,xe("chipGroup"),_e("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...re.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(re.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&O(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(ve,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(It,t)},genClose(){return this.$createElement(ve,{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:n}=this.generateRouteLink();n.attrs={...n.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex},n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);const r=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(r,n),e)}}),Se=ke,$e=(i("ee6f"),w.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:w.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}})),Ae=r["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const i=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),i)}}});const Ie=C(Ae,Ce);var Me=Ie.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave"],listeners:{}}),watch:{activator:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=ct(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&M('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=ut(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive},t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;e=t&&t.$options.mixins&&t.$options.mixins.some(t=>t.options&&["activatable","menuable"].includes(t.options.name))?t.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot(){return ut(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}});function Oe(t){const e=[];for(let i=0;i<t.length;i++){const n=t[i];n.isActive&&n.isDependent?e.push(n):e.push(...Oe(n.$children))}return e}var Te=C().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?Oe(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let i=0;i<e.length;i++)t.push(...e[i].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}}),Le=r["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&T("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}});function Pe(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var De=C(Le).extend({name:"detachable",props:{attach:{default:!1,validator:Pe},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick(()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)})}})},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)})}}catch(Gr){console.log(Gr)}},methods:{getScopeIdAttrs(){const t=H(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):I("Unable to locate target "+(this.attach||"[data-app]"),this)}}}),Be=r["a"].extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:q(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,i=[this.stackMinZIndex,q(e)],n=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let r=0;r<n.length;r++)t.includes(n[r])||i.push(q(n[r]));return Math.max(...i)}}});const Ee=C(Be,Tt,Me);var Fe=Ee.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width);let r=0;if(r+=this.left?i-(n-t.width):i,this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));r+=this.left?-e:t.width}return this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),r},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return X(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return X(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,r=this.dimensions.content.height,s=t+r,a=i<s;return a&&this.offsetOverflow&&n.top>r?t=this.pageYOffset+(n.top-r):a&&!this.allowOverflow?t=i-r-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return;let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=Me.options.methods.genActivatorListeners.call(this),e=t.click;return t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY},t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek(t){requestAnimationFrame(()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()})},startTransition(){return new Promise(t=>requestAnimationFrame(()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek(()=>{this.$refs.content&&(t.content=this.measure(this.$refs.content)),this.dimensions=t})}}}),Ve=r["a"].extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}});function Ne(){return!1}function ze(t,e,i){i.args=i.args||{};const n=i.args.closeConditional||Ne;if(!t||!1===n(t))return;if("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)return;const r=(i.args.include||(()=>[]))();r.push(e),!r.some(e=>e.contains(t.target))&&setTimeout(()=>{n(t)&&i.value&&i.value(t)},0)}const Re={inserted(t,e){const i=i=>ze(i,t,e),n=document.querySelector("[data-app]")||document.body;n.addEventListener("click",i,!0),t._clickOutside=i},unbind(t){if(!t._clickOutside)return;const e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}};var We=Re;function He(t,e){const i=e.value,n=e.options||{passive:!0};window.addEventListener("resize",i,n),t._onResize={callback:i,options:n},e.modifiers&&e.modifiers.quiet||i()}function je(t){if(!t._onResize)return;const{callback:e,options:i}=t._onResize;window.removeEventListener("resize",e,i),delete t._onResize}const qe={inserted:He,unbind:je};var Ue=qe;const Ye=C(Te,Ae,De,Fe,Ve,Ce,w);var Ge=Ye.extend({name:"v-menu",provide(){return{isInMenu:!0,theme:this.theme}},directives:{ClickOutside:We,Resize:Ue},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?X(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":X(this.maxHeight);return t||"0"},calculatedMaxWidth(){return X(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return X(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return X(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?X(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find(t=>t.tabIndex>-1))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=e.offsetTop-e.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&T("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame(()=>{this.startTransition().then(()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))})})},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==Q.tab){if(t.keyCode===Q.down)this.nextTile();else if(t.keyCode===Q.up)this.prevTile();else{if(t.keyCode!==Q.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=Me.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=Fe.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:()=>{this.isActive=!1},args:{closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler(){this.runDelay("open",()=>{this.hasJustFocused||(this.hasJustFocused=!0,this.isActive=!0)})},mouseLeaveHandler(t){this.runDelay("close",()=>{this.$refs.content.contains(t.relatedTarget)||requestAnimationFrame(()=>{this.isActive=!1,this.callDeactivate()})})},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},onKeyDown(t){if(t.keyCode===Q.esc){setTimeout(()=>{this.isActive=!1});const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}else!this.isActive&&[Q.up,Q.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick(()=>this.changeListIndex(t))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent(()=>[this.$createElement($e,{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])])])}}),Xe=Ge,Ze=(i("cf36"),r["a"].extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:ne},props:{...F.options.props,...w.options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}},render(t,{props:e,data:i}){const n=[];if(e.ripple&&!e.disabled){const i=t("div",F.options.methods.setTextColor(e.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));n.push(i)}let r=e.offIcon;e.indeterminate?r=e.indeterminateIcon:e.value&&(r=e.onIcon),n.push(t(me,F.options.methods.setTextColor(e.value&&e.color,{props:{disabled:e.disabled,dark:e.dark,light:e.light}}),r));const s={"v-simple-checkbox":!0,"v-simple-checkbox--disabled":e.disabled};return t("div",{...i,class:s,on:{click:t=>{t.stopPropagation(),i.on&&i.on.input&&!e.disabled&&st(i.on.input).forEach(t=>t(!e.value))}}},n)}})),Ke=(i("8ce9"),w.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})),Qe=Ke,Je=(i("0bc6"),C(w).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})),ti=Je;i("61d2");const ei=C(F,re,w,xe("listItemGroup"),_e("inputValue"));var ii=ei.extend().extend({name:"v-list-item",directives:{Ripple:ne},inheritAttrs:!1,inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...re.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(re.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&T("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="listitem",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-"+this._uid):this.isInList&&(t.role="listitem")),t}},render(t){let{tag:e,data:i}=this.generateRouteLink();i.attrs={...i.attrs,...this.genAttrs()},i.on={...i.on,click:this.click,keydown:t=>{t.keyCode===Q.enter&&this.click(t),this.$emit("keydown",t)}};const n=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return e=this.inactive?"div":e,t(e,this.setTextColor(this.color,i),n)}}),ni=r["a"].extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:i=[]}){e.staticClass=e.staticClass?"v-list-item__action "+e.staticClass:"v-list-item__action";const n=i.filter(t=>!1===t.isComment&&" "!==t.text);return n.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,i)}}),ri=(i("3ad0"),mt.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,shaped:Boolean,subheader:Boolean,threeLine:Boolean,tile:{type:Boolean,default:!0},twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...mt.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--shaped":this.shaped,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex(e=>e._uid===t._uid);e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})),si=(i("db42"),r["a"].extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:i}){return e.staticClass=("v-list-item__icon "+(e.staticClass||"")).trim(),t("div",e,i)}}));const ai=C($,Le,F,ye("list"),Ce);ai.extend().extend({name:"v-list-group",directives:{ripple:ne},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick(()=>this.isActive=!this.isActive))},genIcon(t){return this.$createElement(ve,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(si,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(ii,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent(()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},ut(this))])},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(si,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick(()=>this.isActive=e)},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(At,this.genItems())])}}),i("899c"),i("166a");const oi=C(Dt,w).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((t,e)=>this.toggleMethod(this.getValue(t,e)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.internalValue===t;const t=this.internalValue;return Array.isArray(t)?e=>t.includes(e):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&I("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return null==t.value||""===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",()=>this.onClick(t)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);const n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(t=>t!==i):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const i=e.find(t=>!t.disabled);if(!i)return;const n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex(e=>e===t);this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t("div",this.genData(),this.$slots.default)}});oi.extend({name:"v-item-group",provide(){return{itemGroup:this}}}),C(oi,F).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...oi.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...oi.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),i("3408");var li=C(F,gt).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles(){return{height:X(this.size),minWidth:X(this.size),width:X(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),ci=li;ci.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...ci.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=ci.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}});N("v-list-item__action-text","span");const hi=N("v-list-item__content","div"),ui=N("v-list-item__title","div");N("v-list-item__subtitle","div");var di=C(F,w).extend({name:"v-select-list",directives:{ripple:ne},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map(t=>this.getValue(t))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const t={attrs:{role:void 0},on:{mousedown:t=>t.preventDefault()}};return this.$createElement(ii,t,[this.genTileContent(this.noDataText)])}},methods:{genAction(t,e){return this.$createElement(ni,[this.$createElement(Ze,{props:{color:this.color,value:e},on:{input:()=>this.$emit("select",t)}})])},genDivider(t){return this.$createElement(Qe,{props:t})},genFilteredText(t){if(t=t||"",!this.searchInput||this.noFilter)return Y(t);const{start:e,middle:i,end:n}=this.getMaskedCharacters(t);return`${Y(e)}${this.genHighlight(i)}${Y(n)}`},genHeader(t){return this.$createElement(ti,{props:t},t.header)},genHighlight(t){return`<span class="v-list-item__mask">${Y(t)}</span>`},getMaskedCharacters(t){const e=(this.searchInput||"").toString().toLocaleLowerCase(),i=t.toLocaleLowerCase().indexOf(e);if(i<0)return{start:"",middle:t,end:""};const n=t.slice(0,i),r=t.slice(i,i+e.length),s=t.slice(i+e.length);return{start:n,middle:r,end:s}},genTile({item:t,index:e,disabled:i=null,value:n=!1}){n||(n=this.hasItem(t)),t===Object(t)&&(i=null!==i?i:this.getDisabled(t));const r={attrs:{"aria-selected":String(n),id:`list-item-${this._uid}-${e}`,role:"option"},on:{mousedown:t=>{t.preventDefault()},click:()=>i||this.$emit("select",t)},props:{activeClass:this.tileActiveClass,disabled:i,ripple:!0,inputValue:n}};if(!this.$scopedSlots.item)return this.$createElement(ii,r,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(t,n):null,this.genTileContent(t,e)]);const s=this,a=this.$scopedSlots.item({parent:s,item:t,attrs:{...r.attrs,...r.props},on:r.on});return this.needsTile(a)?this.$createElement(ii,r,a):a},genTileContent(t,e=0){const i=this.genFilteredText(this.getText(t));return this.$createElement(hi,[this.$createElement(ui,{domProps:{innerHTML:i}})])},hasItem(t){return this.parsedItems.indexOf(this.getValue(t))>-1},needsTile(t){return 1!==t.length||null==t[0].componentOptions||"v-list-item"!==t[0].componentOptions.Ctor.options.name},getDisabled(t){return Boolean(j(t,this.itemDisabled,!1))},getText(t){return String(j(t,this.itemText,t))},getValue(t){return j(t,this.itemValue,this.getText(t))}},render(){const t=[],e=this.items.length;for(let i=0;i<e;i++){const e=this.items[i];this.hideSelected&&this.hasItem(e)||(null==e?t.push(this.genTile({item:e,index:i})):e.header?t.push(this.genHeader(e)):e.divider?t.push(this.genDivider(e)):t.push(this.genTile({item:e,index:i})))}return t.length||t.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&t.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&t.push(this.$slots["append-item"]),this.$createElement(ri,{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},t)}}),pi=(i("d191"),i("1b2c"),C(w).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:i,listeners:n,props:r}=e,s={staticClass:"v-label",class:{"v-label--active":r.value,"v-label--is-disabled":r.disabled,...x(e)},attrs:{for:r.for,"aria-hidden":!r.for},on:n,style:{left:X(r.left),right:X(r.right),position:r.absolute?"absolute":"relative"},ref:"label"};return t("label",F.options.methods.setTextColor(r.focused&&r.color,s),i)}})),fi=pi,gi=(i("8ff2"),C(F,w).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},ut(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),mi=gi,vi=C(F,ye("form"),w).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.disabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.disabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.disabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){W(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.disabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout(()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()},0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation(){this.isResetting=!0},validate(t=!1,e){const i=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let n=0;n<this.rules.length;n++){const t=this.rules[n],r="function"===typeof t?t(e):t;!1===r||"string"===typeof r?i.push(r||""):"boolean"!==typeof r&&M(`Rules should return a string or boolean, received '${typeof r}' instead`,this)}return this.errorBucket=i,this.valid=0===i.length,this.valid}}});const bi=C($,vi);var yi=bi.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.readonly,"v-input--dense":this.dense,...this.themeClasses}},computedId(){return this.id||"input-"+this._uid},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isDisabled(){return this.disabled||this.readonly},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map(t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""}).filter(t=>""!==t):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,i={}){const n=this[t+"Icon"],r="click:"+Z(t),s=!(!this.listeners$[r]&&!e),a=xt({attrs:{"aria-label":s?Z(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:s?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(r,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},i);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--"+Z(t):void 0},[this.$createElement(ve,a,n)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:X(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(fi,{props:{color:this.validationState,dark:this.dark,disabled:this.disabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(mi,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>ut(this,"message",t)}}):null},genSlot(t,e,i){if(!i.length)return null;const n=`${t}-${e}`;return this.$createElement("div",{staticClass:"v-input__"+n,ref:n},i)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),xi=yi,_i=(i("e9b1"),C(w).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:i}=e,n=parseInt(i.max,10),r=parseInt(i.value,10),s=n?`${r} / ${n}`:String(i.value),a=n&&r>n;return t("div",{staticClass:"v-counter",class:{"error--text":a,...x(e)}},s)}})),wi=_i;function Ci(t,e){const i=e.modifiers||{},n=e.value,{handler:r,options:s}="object"===typeof n?n:{handler:n,options:{}},a=new IntersectionObserver((e=[],n)=>{if(t._observe){if(r&&(!i.quiet||t._observe.init)){const t=Boolean(e.find(t=>t.isIntersecting));r(e,n,t)}t._observe.init&&i.once?ki(t):t._observe.init=!0}},s);t._observe={init:!1,observer:a},a.observe(t)}function ki(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}const Si={inserted:Ci,unbind:ki};var $i=Si;function Ai(t){return"undefined"!==typeof window&&"IntersectionObserver"in window?r["a"].extend({name:"intersectable",mounted(){$i.inserted(this.$el,{name:"intersect",value:{handler:this.onObserve}})},destroyed(){$i.unbind(this.$el)},methods:{onObserve(e,i,n){if(n)for(let r=0,s=t.onVisible.length;r<s;r++){const e=this[t.onVisible[r]];"function"!==typeof e?I(t.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}}):r["a"].extend({name:"intersectable"})}const Ii=C(xi,Ai({onVisible:["setLabelWidth","setPrefixWidth","setPrependWidth","tryAutofocus"]}),Vt),Mi=["color","file","time","date","datetime-local","week","month"];var Oi=Ii.extend().extend({name:"v-text-field",directives:{ripple:ne},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...xi.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=vi.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):(this.internalValue||"").toString().length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return xi.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){return null!=this.lazyValue&&this.lazyValue.toString().length>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||Mi.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&(!this.isSingle||!this.isLabelActive&&!this.placeholder)},labelValue(){return!this.isSingle&&Boolean(this.isFocused||this.isLabelActive||this.placeholder)}},watch:{labelValue:"setLabelWidth",outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&O("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&O("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&I("shaped should be used with either filled or outlined",this)},mounted(){this.autofocus&&this.tryAutofocus(),this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth(),requestAnimationFrame(()=>this.isBooted=!0)},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame(()=>{this.$refs.input&&this.$refs.input.blur()})},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick(()=>this.internalValue=null)},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots["append"]?t.push(this.$slots["append"]):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=xi.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){if(!this.clearable)return null;const t=this.isDirty?void 0:{attrs:{disabled:!0}};return this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback,t)])},genCounter(){if(!this.hasCounter)return null;const t=!0===this.counter?this.attrs$.maxlength:this.counter;return this.$createElement(wi,{props:{dark:this.dark,light:this.light,max:t,value:this.computedCounterValue}})},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.disabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(fi,t,this.$slots.label||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"}});return this.$createElement("legend",{style:{width:this.isSingle?void 0:X(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);return delete t["change"],this.$createElement("input",{style:{},domProps:{value:this.lazyValue},attrs:{...this.attrs$,autofocus:this.autofocus,disabled:this.disabled,id:this.computedId,placeholder:this.placeholder,readonly:this.readonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input"})},genMessages(){if(!this.showDetails)return null;const t=xi.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:"v-text-field__"+t,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick(()=>this.$emit("blur",t))},onClick(){this.isFocused||this.disabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(this.$refs.input)return document.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t)))},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===Q.enter&&this.$emit("change",this.internalValue),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),xi.options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),xi.options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){return!(!this.autofocus||"undefined"===typeof document||!this.$refs.input||document.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)}}}),Ti=r["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:W}}}),Li=r["a"].extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}});const Pi={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},Di=C(Oi,Ti,Li);var Bi=Di.extend().extend({name:"v-select",directives:{ClickOutside:We},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>Pi},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...Oi.options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple}},computedItems(){return this.allItems},computedOwns(){return"list-"+this._uid},computedCounterValue(){return this.multiple?this.selectedItems.length:(this.getText(this.selectedItems[0])||"").toString().length},directives(){return this.isFocused?[{name:"click-outside",value:this.blur,args:{closeConditional:this.closeConditional}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const t=this.$vnode&&this.$vnode.context.$options._scopeId,e=t?{[t]:!0}:{};return{attrs:{...e,id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&M("assert: staticList should not be called if slots are used"),this.$createElement(di,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let t="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(t)&&(t=t.reduce((t,e)=>(t[e.trim()]=!0,t),{})),{...Pi,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:t.offsetY?1:0,...t}}},watch:{internalValue(t){this.initialValue=t,this.setSelectedItems()},menuIsBooted(){window.setTimeout(()=>{this.getContent()&&this.getContent().addEventListener&&this.getContent().addEventListener("scroll",this.onScroll,!1)})},isMenuActive(t){window.setTimeout(()=>this.onMenuActiveChange(t)),t&&(this.menuIsBooted=!0)},items:{immediate:!0,handler(t){this.cacheItems&&this.$nextTick(()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(t))}),this.setSelectedItems()}}},methods:{blur(t){Oi.options.methods.blur.call(this,t),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1},activateMenu(){this.disabled||this.readonly||this.isMenuActive||(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:void 0),this.setMenuIndex(-1),this.$nextTick(()=>this.$refs.input&&this.$refs.input.focus()),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(t){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(t.target))&&this.$el&&!this.$el.contains(t.target)&&t.target!==this.$el},filterDuplicates(t){const e=new Map;for(let i=0;i<t.length;++i){const n=t[i],r=this.getValue(n);!e.has(r)&&e.set(r,n)}return Array.from(e.values())},findExistingIndex(t){const e=this.getValue(t);return(this.internalValue||[]).findIndex(t=>this.valueComparator(this.getValue(t),e))},getContent(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection(t,e){const i=this.disabled||this.readonly||this.getDisabled(t);return this.$createElement(Se,{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&!i,disabled:i,inputValue:e===this.selectedIndex,small:this.smallChips},on:{click:t=>{i||(t.stopPropagation(),this.selectedIndex=e)},"click:close":()=>this.onChipInput(t)},key:JSON.stringify(this.getValue(t))},this.getText(t))},genCommaSelection(t,e,i){const n=e===this.selectedIndex&&this.computedColor,r=this.disabled||this.getDisabled(t);return this.$createElement("div",this.setTextColor(n,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":r},key:JSON.stringify(this.getValue(t))}),`${this.getText(t)}${i?"":", "}`)},genDefaultSlot(){const t=this.genSelections(),e=this.genInput();return Array.isArray(t)?t.push(e):(t.children=t.children||[],t.children.push(e)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,t,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon(t,e,i){const n=xi.options.methods.genIcon.call(this,t,e,i);return"append"===t&&(n.children[0].data=xt(n.children[0].data,{attrs:{tabindex:n.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),n},genInput(){const t=Oi.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data=xt(t.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.readonly),"aria-activedescendant":H(this.$refs.menu,"activeTile.id"),autocomplete:H(t.data,"attrs.autocomplete","off")},on:{keypress:this.onKeyPress}}),t},genHiddenInput(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot(){const t=Oi.options.methods.genInputSlot.call(this);return t.data.attrs={...t.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},t},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const t=["prepend-item","no-data","append-item"].filter(t=>this.$slots[t]).map(t=>this.$createElement("template",{slot:t},this.$slots[t]));return this.$createElement(di,{...this.listData},t)},genMenu(){const t=this.$_menuProps;return t.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?t.attach=this.$el:t.attach=this.attach,this.$createElement(Xe,{attrs:{role:void 0,offsetY:!0},props:t,on:{input:t=>{this.isMenuActive=t,this.isFocused=t}},ref:"menu"},[this.genList()])},genSelections(){let t=this.selectedItems.length;const e=new Array(t);let i;i=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(t--)e[t]=i(this.selectedItems[t],t,t===e.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},e)},genSlotSelection(t,e){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:t,index:e,select:t=>{t.stopPropagation(),this.selectedIndex=e},selected:e===this.selectedIndex,disabled:this.disabled||this.readonly})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(t){return j(t,this.itemDisabled,!1)},getText(t){return j(t,this.itemText,t)},getValue(t){return j(t,this.itemValue,this.getText(t))},onBlur(t){t&&this.$emit("blur",t)},onChipInput(t){this.multiple?this.selectItem(t):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(t){this.isDisabled||(this.isAppendInner(t.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",t))},onEscDown(t){t.preventDefault(),this.isMenuActive&&(t.stopPropagation(),this.isMenuActive=!1)},onKeyPress(t){if(this.multiple||this.readonly||this.disableLookup)return;const e=1e3,i=performance.now();i-this.keyboardLookupLastTime>e&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=t.key.toLowerCase(),this.keyboardLookupLastTime=i;const n=this.allItems.findIndex(t=>{const e=(this.getText(t)||"").toString();return e.toLowerCase().startsWith(this.keyboardLookupPrefix)}),r=this.allItems[n];-1!==n&&(this.lastItem=Math.max(this.lastItem,n+5),this.setValue(this.returnObject?r:this.getValue(r)),this.$nextTick(()=>this.$refs.menu.getTiles()),setTimeout(()=>this.setMenuIndex(n)))},onKeyDown(t){if(this.readonly)return;const e=t.keyCode,i=this.$refs.menu;return[Q.enter,Q.space].includes(e)&&this.activateMenu(),this.$emit("keydown",t),i?(this.isMenuActive&&e!==Q.tab&&this.$nextTick(()=>{i.changeListIndex(t),this.$emit("update:list-index",i.listIndex)}),!this.isMenuActive&&[Q.up,Q.down].includes(e)?this.onUpDown(t):e===Q.esc?this.onEscDown(t):e===Q.tab?this.onTabDown(t):e===Q.space?this.onSpaceDown(t):void 0):void 0},onMenuActiveChange(t){if(this.multiple&&!t||this.getMenuIndex()>-1)return;const e=this.$refs.menu;if(e&&this.isDirty)for(let i=0;i<e.tiles.length;i++)if("true"===e.tiles[i].getAttribute("aria-selected")){this.setMenuIndex(i);break}},onMouseUp(t){this.hasMouseDown&&3!==t.which&&!this.isDisabled&&(this.isAppendInner(t.target)?this.$nextTick(()=>this.isMenuActive=!this.isMenuActive):this.isEnclosed&&(this.isMenuActive=!0)),Oi.options.methods.onMouseUp.call(this,t)},onScroll(){if(this.isMenuActive){if(this.lastItem>=this.computedItems.length)return;const t=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;t&&(this.lastItem+=20)}else requestAnimationFrame(()=>this.getContent().scrollTop=0)},onSpaceDown(t){t.preventDefault()},onTabDown(t){const e=this.$refs.menu;if(!e)return;const i=e.activeTile;!this.multiple&&i&&this.isMenuActive?(t.preventDefault(),t.stopPropagation(),i.click()):this.blur(t)},onUpDown(t){const e=this.$refs.menu;if(!e)return;if(t.preventDefault(),this.multiple)return this.activateMenu();const i=t.keyCode;e.isBooted=!0,window.requestAnimationFrame(()=>{e.getTiles(),Q.up===i?e.prevTile():e.nextTile(),e.activeTile&&e.activeTile.click()})},selectItem(t){if(this.multiple){const e=(this.internalValue||[]).slice(),i=this.findExistingIndex(t);if(-1!==i?e.splice(i,1):e.push(t),this.setValue(e.map(t=>this.returnObject?t:this.getValue(t))),this.$nextTick(()=>{this.$refs.menu&&this.$refs.menu.updateDimensions()}),!this.multiple)return;const n=this.getMenuIndex();if(this.setMenuIndex(-1),this.hideSelected)return;this.$nextTick(()=>this.setMenuIndex(n))}else this.setValue(this.returnObject?t:this.getValue(t)),this.isMenuActive=!1},setMenuIndex(t){this.$refs.menu&&(this.$refs.menu.listIndex=t)},setSelectedItems(){const t=[],e=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue];for(const i of e){const e=this.allItems.findIndex(t=>this.valueComparator(this.getValue(t),this.getValue(i)));e>-1&&t.push(this.allItems[e])}this.selectedItems=t},setValue(t){const e=this.internalValue;this.internalValue=t,t!==e&&this.$emit("change",t)},isAppendInner(t){const e=this.$refs["append-inner"];return e&&(e===t||e.contains(t))}}}),Ei=(i("86cc"),i("8d4f"),F.extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:X(this.calculatedSize),width:X(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:"v-progress-circular__"+t,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})),Fi=Ei;const Vi=C(vt,re,Tt,de,xe("btnToggle"),_e("inputValue"));var Ni=Vi.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...re.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},contained(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple(){const t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=this.ripple?this.ripple:t)},isFlat(){return Boolean(this.icon||this.text||this.outlined)},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&O(t,e,this)})},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(Fi,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],i=this.isFlat?this.setTextColor:this.setBackgroundColor,{tag:n,data:r}=this.generateRouteLink();return"button"===n&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(n,this.disabled?r:i(this.color,r),e)}}),zi=Ni,Ri=r["a"].extend({name:"v-data-footer",props:{options:{type:Object,required:!0},pagination:{type:Object,required:!0},itemsPerPageOptions:{type:Array,default:()=>[5,10,15,-1]},prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},itemsPerPageAllText:{type:String,default:"$vuetify.dataFooter.itemsPerPageAll"},showFirstLastPage:Boolean,showCurrentPage:Boolean,disablePagination:Boolean,disableItemsPerPage:Boolean,pageText:{type:String,default:"$vuetify.dataFooter.pageText"}},computed:{disableNextPageIcon(){return this.options.itemsPerPage<=0||this.options.page*this.options.itemsPerPage>=this.pagination.itemsLength||this.pagination.pageStop<0},computedDataItemsPerPageOptions(){return this.itemsPerPageOptions.map(t=>"object"===typeof t?t:this.genDataItemsPerPageOption(t))}},methods:{updateOptions(t){this.$emit("update:options",Object.assign({},this.options,t))},onFirstPage(){this.updateOptions({page:1})},onPreviousPage(){this.updateOptions({page:this.options.page-1})},onNextPage(){this.updateOptions({page:this.options.page+1})},onLastPage(){this.updateOptions({page:this.pagination.pageCount})},onChangeItemsPerPage(t){this.updateOptions({itemsPerPage:t,page:1})},genDataItemsPerPageOption(t){return{text:-1===t?this.$vuetify.lang.t(this.itemsPerPageAllText):String(t),value:t}},genItemsPerPageSelect(){let t=this.options.itemsPerPage;const e=this.computedDataItemsPerPageOptions;return e.length<=1?null:(e.find(e=>e.value===t)||(t=e[0]),this.$createElement("div",{staticClass:"v-data-footer__select"},[this.$vuetify.lang.t(this.itemsPerPageText),this.$createElement(Bi,{attrs:{"aria-label":this.itemsPerPageText},props:{disabled:this.disableItemsPerPage,items:e,value:t,hideDetails:!0,auto:!0,minWidth:"75px"},on:{input:this.onChangeItemsPerPage}})]))},genPaginationInfo(){let t=["–"];if(this.pagination.itemsLength&&this.pagination.itemsPerPage){const e=this.pagination.itemsLength,i=this.pagination.pageStart+1,n=e<this.pagination.pageStop||this.pagination.pageStop<0?e:this.pagination.pageStop;t=this.$scopedSlots["page-text"]?[this.$scopedSlots["page-text"]({pageStart:i,pageStop:n,itemsLength:e})]:[this.$vuetify.lang.t(this.pageText,i,n,e)]}return this.$createElement("div",{class:"v-data-footer__pagination"},t)},genIcon(t,e,i,n){return this.$createElement(zi,{props:{disabled:e||this.disablePagination,icon:!0,text:!0},on:{click:t},attrs:{"aria-label":i}},[this.$createElement(ve,n)])},genIcons(){const t=[],e=[];return t.push(this.genIcon(this.onPreviousPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.prevPage"),this.$vuetify.rtl?this.nextIcon:this.prevIcon)),e.push(this.genIcon(this.onNextPage,this.disableNextPageIcon,this.$vuetify.lang.t("$vuetify.dataFooter.nextPage"),this.$vuetify.rtl?this.prevIcon:this.nextIcon)),this.showFirstLastPage&&(t.unshift(this.genIcon(this.onFirstPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.firstPage"),this.$vuetify.rtl?this.lastIcon:this.firstIcon)),e.push(this.genIcon(this.onLastPage,this.options.page>=this.pagination.pageCount||-1===this.options.itemsPerPage,this.$vuetify.lang.t("$vuetify.dataFooter.lastPage"),this.$vuetify.rtl?this.firstIcon:this.lastIcon))),[this.$createElement("div",{staticClass:"v-data-footer__icons-before"},t),this.showCurrentPage&&this.$createElement("span",[this.options.page.toString()]),this.$createElement("div",{staticClass:"v-data-footer__icons-after"},e)]}},render(){return this.$createElement("div",{staticClass:"v-data-footer"},[this.genItemsPerPageSelect(),this.genPaginationInfo(),this.genIcons()])}}),Wi=w.extend({name:"v-data-iterator",props:{...ue.options.props,itemKey:{type:String,default:"id"},value:{type:Array,default:()=>[]},singleSelect:Boolean,expanded:{type:Array,default:()=>[]},mobileBreakpoint:{type:[Number,String],default:600},singleExpand:Boolean,loading:[Boolean,String],noResultsText:{type:String,default:"$vuetify.dataIterator.noResultsText"},noDataText:{type:String,default:"$vuetify.noDataText"},loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideDefaultFooter:Boolean,footerProps:Object,selectableKey:{type:String,default:"isSelectable"}},data:()=>({selection:{},expansion:{},internalCurrentItems:[]}),computed:{everyItem(){return!!this.selectableItems.length&&this.selectableItems.every(t=>this.isSelected(t))},someItems(){return this.selectableItems.some(t=>this.isSelected(t))},sanitizedFooterProps(){return pt(this.footerProps)},selectableItems(){return this.internalCurrentItems.filter(t=>this.isSelectable(t))},isMobile(){return 0!==this.$vuetify.breakpoint.width&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakpoint,10)}},watch:{value:{handler(t){this.selection=t.reduce((t,e)=>(t[H(e,this.itemKey)]=e,t),{})},immediate:!0},selection(t,e){W(Object.keys(t),Object.keys(e))||this.$emit("input",Object.values(t))},expanded:{handler(t){this.expansion=t.reduce((t,e)=>(t[H(e,this.itemKey)]=!0,t),{})},immediate:!0},expansion(t,e){if(W(t,e))return;const i=Object.keys(t).filter(e=>t[e]),n=i.length?this.items.filter(t=>i.includes(String(H(t,this.itemKey)))):[];this.$emit("update:expanded",n)}},created(){const t=[["disable-initial-sort","sort-by"],["filter","custom-filter"],["pagination","options"],["total-items","server-items-length"],["hide-actions","hide-default-footer"],["rows-per-page-items","footer-props.items-per-page-options"],["rows-per-page-text","footer-props.items-per-page-text"],["prev-icon","footer-props.prev-icon"],["next-icon","footer-props.next-icon"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&O(t,e,this)});const e=["expand","content-class","content-props","content-tag"];e.forEach(t=>{this.$attrs.hasOwnProperty(t)&&T(t)})},methods:{toggleSelectAll(t){const e=Object.assign({},this.selection);for(let i=0;i<this.selectableItems.length;i++){const n=this.selectableItems[i];if(!this.isSelectable(n))continue;const r=H(n,this.itemKey);t?e[r]=n:delete e[r]}this.selection=e,this.$emit("toggle-select-all",{items:this.internalCurrentItems,value:t})},isSelectable(t){return!1!==H(t,this.selectableKey)},isSelected(t){return!!this.selection[H(t,this.itemKey)]||!1},select(t,e=!0,i=!0){if(!this.isSelectable(t))return;const n=this.singleSelect?{}:Object.assign({},this.selection),r=H(t,this.itemKey);if(e?n[r]=t:delete n[r],this.singleSelect&&i){const t=Object.keys(this.selection),e=t.length&&H(this.selection[t[0]],this.itemKey);e&&e!==r&&this.$emit("item-selected",{item:this.selection[e],value:!1})}this.selection=n,i&&this.$emit("item-selected",{item:t,value:e})},isExpanded(t){return this.expansion[H(t,this.itemKey)]||!1},expand(t,e=!0){const i=this.singleExpand?{}:Object.assign({},this.expansion),n=H(t,this.itemKey);e?i[n]=!0:delete i[n],this.expansion=i,this.$emit("item-expanded",{item:t,value:e})},createItemProps(t){return{item:t,select:e=>this.select(t,e),isSelected:this.isSelected(t),expand:e=>this.expand(t,e),isExpanded:this.isExpanded(t),isMobile:this.isMobile}},genEmptyWrapper(t){return this.$createElement("div",t)},genEmpty(t,e){if(0===t&&this.loading){const t=this.$slots["loading"]||this.$vuetify.lang.t(this.loadingText);return this.genEmptyWrapper(t)}if(0===t){const t=this.$slots["no-data"]||this.$vuetify.lang.t(this.noDataText);return this.genEmptyWrapper(t)}if(0===e){const t=this.$slots["no-results"]||this.$vuetify.lang.t(this.noResultsText);return this.genEmptyWrapper(t)}return null},genItems(t){const e=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return e?[e]:this.$scopedSlots.default?this.$scopedSlots.default({...t,isSelected:this.isSelected,select:this.select,isExpanded:this.isExpanded,expand:this.expand}):this.$scopedSlots.item?t.items.map(t=>this.$scopedSlots.item(this.createItemProps(t))):[]},genFooter(t){if(this.hideDefaultFooter)return null;const e={props:{...this.sanitizedFooterProps,options:t.options,pagination:t.pagination},on:{"update:options":e=>t.updateOptions(e)}},i=ht("footer.",this.$scopedSlots);return this.$createElement(Ri,{scopedSlots:i,...e})},genDefaultScopedSlot(t){const e={...t,someItems:this.someItems,everyItem:this.everyItem,toggleSelectAll:this.toggleSelectAll};return this.$createElement("div",{staticClass:"v-data-iterator"},[ut(this,"header",e,!0),this.genItems(t),this.genFooter(t),ut(this,"footer",e,!0)])}},render(){return this.$createElement(ue,{props:this.$props,on:{"update:options":(t,e)=>!W(t,e)&&this.$emit("update:options",t),"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!W(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}}),Hi=(i("f823"),C().extend({directives:{ripple:ne},props:{headers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],groupDesc:[],multiSort:!1,mustSort:!1})},sortIcon:{type:String,default:"$sort"},everyItem:Boolean,someItems:Boolean,showGroupBy:Boolean,singleSelect:Boolean,disableSort:Boolean},methods:{genSelectAll(){const t={props:{value:this.everyItem,indeterminate:!this.everyItem&&this.someItems},on:{input:t=>this.$emit("toggle-select-all",t)}};return this.$scopedSlots["data-table-select"]?this.$scopedSlots["data-table-select"](t):this.$createElement(Ze,{staticClass:"v-data-table__checkbox",...t})},genSortIcon(){return this.$createElement(ve,{staticClass:"v-data-table-header__icon",props:{size:18}},[this.sortIcon])}}})),ji=C(Hi).extend({name:"v-data-table-header-mobile",props:{sortByText:{type:String,default:"$vuetify.dataTable.sortBy"}},methods:{genSortChip(t){const e=[t.item.text],i=this.options.sortBy.findIndex(e=>e===t.item.value),n=i>=0,r=this.options.sortDesc[i];return e.push(this.$createElement("div",{staticClass:"v-chip__close",class:{sortable:!0,active:n,asc:n&&!r,desc:n&&r}},[this.genSortIcon()])),this.$createElement(Se,{staticClass:"sortable",nativeOn:{click:e=>{e.stopPropagation(),this.$emit("sort",t.item.value)}}},e)},genSortSelect(t){return this.$createElement(Bi,{props:{label:this.$vuetify.lang.t(this.sortByText),items:t,hideDetails:!0,multiple:this.options.multiSort,value:this.options.multiSort?this.options.sortBy:this.options.sortBy[0],menuProps:{closeOnContentClick:!0}},on:{change:t=>this.$emit("sort",t)},scopedSlots:{selection:t=>this.genSortChip(t)}})}},render(t){const e=[],i=this.headers.find(t=>"data-table-select"===t.value);i&&!this.singleSelect&&e.push(this.$createElement("div",{class:["v-data-table-header-mobile__select",...st(i.class)],attrs:{width:i.width}},[this.genSelectAll()]));const n=this.headers.filter(t=>!1!==t.sortable&&"data-table-select"!==t.value);!this.disableSort&&n.length&&e.push(this.genSortSelect(n));const r=t("th",[t("div",{staticClass:"v-data-table-header-mobile__wrapper"},e)]),s=t("tr",[r]);return t("thead",{staticClass:"v-data-table-header v-data-table-header-mobile"},[s])}}),qi=C(Hi).extend({name:"v-data-table-header-desktop",methods:{genGroupByToggle(t){return this.$createElement("span",{on:{click:e=>{e.stopPropagation(),this.$emit("group",t.value)}}},["group"])},getAria(t,e){const i=t=>this.$vuetify.lang.t("$vuetify.dataTable.ariaLabel."+t);let n="none",r=[i("sortNone"),i("activateAscending")];return t?(e?(n="descending",r=[i("sortDescending"),i(this.options.mustSort?"activateAscending":"activateNone")]):(n="ascending",r=[i("sortAscending"),i("activateDescending")]),{ariaSort:n,ariaLabel:r.join(" ")}):{ariaSort:n,ariaLabel:r.join(" ")}},genHeader(t){const e={attrs:{role:"columnheader",scope:"col","aria-label":t.text||""},style:{width:X(t.width),minWidth:X(t.width)},class:["text-"+(t.align||"start"),...st(t.class),t.divider&&"v-data-table__divider"],on:{}},i=[];if("data-table-select"===t.value&&!this.singleSelect)return this.$createElement("th",e,[this.genSelectAll()]);if(i.push(this.$scopedSlots[t.value]?this.$scopedSlots[t.value]({header:t}):this.$createElement("span",[t.text])),!this.disableSort&&(t.sortable||!t.hasOwnProperty("sortable"))){e.on["click"]=()=>this.$emit("sort",t.value);const n=this.options.sortBy.findIndex(e=>e===t.value),r=n>=0,s=this.options.sortDesc[n];e.class.push("sortable");const{ariaLabel:a,ariaSort:o}=this.getAria(r,s);e.attrs["aria-label"]+=`${t.text?": ":""}${a}`,e.attrs["aria-sort"]=o,r&&(e.class.push("active"),e.class.push(s?"desc":"asc")),"end"===t.align?i.unshift(this.genSortIcon()):i.push(this.genSortIcon()),this.options.multiSort&&r&&i.push(this.$createElement("span",{class:"v-data-table-header__sort-badge"},[String(n+1)]))}return this.showGroupBy&&i.push(this.genGroupByToggle(t)),this.$createElement("th",e,i)}},render(){return this.$createElement("thead",{staticClass:"v-data-table-header"},[this.$createElement("tr",this.headers.map(t=>this.genHeader(t)))])}});function Ui(t){if(t.model&&t.on&&t.on.input)if(Array.isArray(t.on.input)){const e=t.on.input.indexOf(t.model.callback);e>-1&&t.on.input.splice(e,1)}else delete t.on.input}function Yi(t,e){const i=[];for(const n in t)t.hasOwnProperty(n)&&i.push(e("template",{slot:n},t[n]));return i}var Gi=r["a"].extend({name:"v-data-table-header",functional:!0,props:{...Hi.options.props,mobile:Boolean},render(t,{props:e,data:i,slots:n}){Ui(i);const r=Yi(n(),t);return i=xt(i,{props:e}),e.mobile?t(ji,i,r):t(qi,i,r)}}),Xi=r["a"].extend({name:"row",functional:!0,props:{headers:Array,item:Object,rtl:Boolean},render(t,{props:e,slots:i,data:n}){const r=i(),s=e.headers.map(i=>{const s=[],a=H(e.item,i.value),o=i.value,l=n.scopedSlots&&n.scopedSlots[o],c=r[o];l?s.push(l({item:e.item,header:i,value:a})):c?s.push(c):s.push(null==a?a:String(a));const h="text-"+(i.align||"start");return t("td",{class:{[h]:!0,"v-data-table__divider":i.divider}},s)});return t("tr",n,s)}}),Zi=r["a"].extend({name:"row-group",functional:!0,props:{value:{type:Boolean,default:!0},headerClass:{type:String,default:"v-row-group__header"},contentClass:String,summaryClass:{type:String,default:"v-row-group__summary"}},render(t,{slots:e,props:i}){const n=e(),r=[];return n["column.header"]?r.push(t("tr",{staticClass:i.headerClass},n["column.header"])):n["row.header"]&&r.push(...n["row.header"]),n["row.content"]&&i.value&&r.push(...n["row.content"]),n["column.summary"]?r.push(t("tr",{staticClass:i.summaryClass},n["column.summary"])):n["row.summary"]&&r.push(...n["row.summary"]),r}}),Ki=(i("8b37"),C(w).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:X(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})),Qi=r["a"].extend({name:"row",functional:!0,props:{headers:Array,item:Object,rtl:Boolean},render(t,{props:e,slots:i,data:n}){const r=i(),s=e.headers.map(i=>{const s={"v-data-table__mobile-row":!0},a=[],o=H(e.item,i.value),l=i.value,c=n.scopedSlots&&n.scopedSlots[l],h=r[l];c?a.push(c({item:e.item,header:i,value:o})):h?a.push(h):a.push(null==o?o:String(o));const u=[t("div",{staticClass:"v-data-table__mobile-row__cell"},a)];return"dataTableSelect"!==i.value&&u.unshift(t("div",{staticClass:"v-data-table__mobile-row__header"},[i.text])),t("td",{class:s},u)});return t("tr",{...n,staticClass:"v-data-table__mobile-table-row"},s)}});function Ji(t,e,i){return n=>{const r=H(t,n.value);return n.filter?n.filter(r,e,t):i(r,e,t)}}function tn(t,e,i,n,r){return e="string"===typeof e?e.trim():null,e&&n.length||i.length?t.filter(t=>!(!i.length||!i.every(Ji(t,e,ot)))||e&&n.some(Ji(t,e,r))):t}var en=Wi.extend({name:"v-data-table",directives:{ripple:ne},props:{headers:{type:Array,default:()=>[]},showSelect:Boolean,showExpand:Boolean,showGroupBy:Boolean,height:[Number,String],hideDefaultHeader:Boolean,caption:String,dense:Boolean,headerProps:Object,calculateWidths:Boolean,fixedHeader:Boolean,headersLength:Number,expandIcon:{type:String,default:"$expand"},customFilter:{type:Function,default:ot}},data(){return{internalGroupBy:[],openCache:{},widths:[]}},computed:{computedHeaders(){if(!this.headers)return[];const t=this.headers.filter(t=>void 0===t.value||!this.internalGroupBy.find(e=>e===t.value)),e={text:"",sortable:!1,width:"1px"};if(this.showSelect){const i=t.findIndex(t=>"data-table-select"===t.value);i<0?t.unshift({...e,value:"data-table-select"}):t.splice(i,1,{...e,...t[i]})}if(this.showExpand){const i=t.findIndex(t=>"data-table-expand"===t.value);i<0?t.unshift({...e,value:"data-table-expand"}):t.splice(i,1,{...e,...t[i]})}return t},colspanAttrs(){return this.isMobile?void 0:{colspan:this.headersLength||this.computedHeaders.length}},columnSorters(){return this.computedHeaders.reduce((t,e)=>(e.sort&&(t[e.value]=e.sort),t),{})},headersWithCustomFilters(){return this.headers.filter(t=>t.filter&&(!t.hasOwnProperty("filterable")||!0===t.filterable))},headersWithoutCustomFilters(){return this.headers.filter(t=>!t.filter&&(!t.hasOwnProperty("filterable")||!0===t.filterable))},sanitizedHeaderProps(){return pt(this.headerProps)},computedItemsPerPage(){const t=this.options&&this.options.itemsPerPage?this.options.itemsPerPage:this.itemsPerPage,e=this.sanitizedFooterProps.itemsPerPageOptions;if(e&&!e.find(e=>"number"===typeof e?e===t:e.value===t)){const t=e[0];return"object"===typeof t?t.value:t}return t}},created(){const t=[["sort-icon","header-props.sort-icon"],["hide-headers","hide-default-header"],["select-all","show-select"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&O(t,e,this)})},mounted(){this.calculateWidths&&(window.addEventListener("resize",this.calcWidths),this.calcWidths())},beforeDestroy(){this.calculateWidths&&window.removeEventListener("resize",this.calcWidths)},methods:{calcWidths(){this.widths=Array.from(this.$el.querySelectorAll("th")).map(t=>t.clientWidth)},customFilterWithColumns(t,e){return tn(t,e,this.headersWithCustomFilters,this.headersWithoutCustomFilters,this.customFilter)},customSortWithHeaders(t,e,i,n){return this.customSort(t,e,i,n,this.columnSorters)},createItemProps(t){const e=Wi.options.methods.createItemProps.call(this,t);return Object.assign(e,{headers:this.computedHeaders})},genCaption(t){return this.caption?[this.$createElement("caption",[this.caption])]:ut(this,"caption",t,!0)},genColgroup(t){return this.$createElement("colgroup",this.computedHeaders.map(t=>this.$createElement("col",{class:{divider:t.divider}})))},genLoading(){const t=this.$slots["progress"]?this.$slots.progress:this.$createElement(Ft,{props:{color:!0===this.loading?"primary":this.loading,height:2,indeterminate:!0}}),e=this.$createElement("th",{staticClass:"column",attrs:this.colspanAttrs},[t]),i=this.$createElement("tr",{staticClass:"v-data-table__progress"},[e]);return this.$createElement("thead",[i])},genHeaders(t){const e={props:{...this.sanitizedHeaderProps,headers:this.computedHeaders,options:t.options,mobile:this.isMobile,showGroupBy:this.showGroupBy,someItems:this.someItems,everyItem:this.everyItem,singleSelect:this.singleSelect,disableSort:this.disableSort},on:{sort:t.sort,group:t.group,"toggle-select-all":this.toggleSelectAll}},i=[ut(this,"header",e)];if(!this.hideDefaultHeader){const t=ht("header.",this.$scopedSlots);i.push(this.$createElement(Gi,{...e,scopedSlots:t}))}return this.loading&&i.push(this.genLoading()),i},genEmptyWrapper(t){return this.$createElement("tr",{staticClass:"v-data-table__empty-wrapper"},[this.$createElement("td",{attrs:this.colspanAttrs},t)])},genItems(t,e){const i=this.genEmpty(e.originalItemsLength,e.pagination.itemsLength);return i?[i]:e.groupedItems?this.genGroupedRows(e.groupedItems,e):this.genRows(t,e)},genGroupedRows(t,e){return t.map(t=>(this.openCache.hasOwnProperty(t.name)||this.$set(this.openCache,t.name,!0),this.$scopedSlots.group?this.$scopedSlots.group({group:t.name,options:e.options,items:t.items,headers:this.computedHeaders}):this.genDefaultGroupedRow(t.name,t.items,e)))},genDefaultGroupedRow(t,e,i){const n=!!this.openCache[t],r=[this.$createElement("template",{slot:"row.content"},this.genRows(e,i))],s=()=>this.$set(this.openCache,t,!this.openCache[t]),a=()=>i.updateOptions({groupBy:[],groupDesc:[]});if(this.$scopedSlots["group.header"])r.unshift(this.$createElement("template",{slot:"column.header"},[this.$scopedSlots["group.header"]({group:t,groupBy:i.options.groupBy,items:e,headers:this.computedHeaders,isOpen:n,toggle:s,remove:a})]));else{const e=this.$createElement(zi,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:s}},[this.$createElement(ve,[n?"$minus":"$plus"])]),o=this.$createElement(zi,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:a}},[this.$createElement(ve,["$close"])]),l=this.$createElement("td",{staticClass:"text-start",attrs:this.colspanAttrs},[e,`${i.options.groupBy[0]}: ${t}`,o]);r.unshift(this.$createElement("template",{slot:"column.header"},[l]))}return this.$scopedSlots["group.summary"]&&r.push(this.$createElement("template",{slot:"column.summary"},[this.$scopedSlots["group.summary"]({group:t,groupBy:i.options.groupBy,items:e,headers:this.computedHeaders,isOpen:n,toggle:s})])),this.$createElement(Zi,{key:t,props:{value:n}},r)},genRows(t,e){return this.$scopedSlots.item?this.genScopedRows(t,e):this.genDefaultRows(t,e)},genScopedRows(t,e){const i=[];for(let n=0;n<t.length;n++){const e=t[n];i.push(this.$scopedSlots.item({...this.createItemProps(e),index:n})),this.isExpanded(e)&&i.push(this.$scopedSlots["expanded-item"]({item:e,headers:this.computedHeaders}))}return i},genDefaultRows(t,e){return this.$scopedSlots["expanded-item"]?t.map(t=>this.genDefaultExpandedRow(t)):t.map(t=>this.genDefaultSimpleRow(t))},genDefaultExpandedRow(t){const e=this.isExpanded(t),i={"v-data-table__expanded v-data-table__expanded__row":e},n=this.genDefaultSimpleRow(t,i),r=this.$createElement("tr",{staticClass:"v-data-table__expanded v-data-table__expanded__content"},[this.$scopedSlots["expanded-item"]({item:t,headers:this.computedHeaders})]);return this.$createElement(Zi,{props:{value:e}},[this.$createElement("template",{slot:"row.header"},[n]),this.$createElement("template",{slot:"row.content"},[r])])},genDefaultSimpleRow(t,e={}){const i=ht("item.",this.$scopedSlots),n=this.createItemProps(t);if(this.showSelect){const e=i["data-table-select"];i["data-table-select"]=e?()=>e(n):()=>this.$createElement(Ze,{staticClass:"v-data-table__checkbox",props:{value:n.isSelected,disabled:!this.isSelectable(t)},on:{input:t=>n.select(t)}})}if(this.showExpand){const t=i["data-table-expand"];i["data-table-expand"]=t?()=>t(n):()=>this.$createElement(ve,{staticClass:"v-data-table__expand-icon",class:{"v-data-table__expand-icon--active":n.isExpanded},on:{click:t=>{t.stopPropagation(),n.expand(!n.isExpanded)}}},[this.expandIcon])}return this.$createElement(this.isMobile?Qi:Xi,{key:H(t,this.itemKey),class:{...e,"v-data-table__selected":n.isSelected},props:{headers:this.computedHeaders,item:t,rtl:this.$vuetify.rtl},scopedSlots:i,on:{click:()=>this.$emit("click:row",t,n)}})},genBody(t){const e={...t,expand:this.expand,headers:this.computedHeaders,isExpanded:this.isExpanded,isMobile:this.isMobile,isSelected:this.isSelected,select:this.select};return this.$scopedSlots.body?this.$scopedSlots.body(e):this.$createElement("tbody",[ut(this,"body.prepend",e,!0),this.genItems(t.items,t),ut(this,"body.append",e,!0)])},genFooters(t){const e={props:{options:t.options,pagination:t.pagination,itemsPerPageText:"$vuetify.dataTable.itemsPerPageText",...this.sanitizedFooterProps},on:{"update:options":e=>t.updateOptions(e)},widths:this.widths,headers:this.computedHeaders},i=[ut(this,"footer",e,!0)];return this.hideDefaultFooter||i.push(this.$createElement(Ri,{...e,scopedSlots:ht("footer.",this.$scopedSlots)})),i},genDefaultScopedSlot(t){const e={height:this.height,fixedHeader:this.fixedHeader,dense:this.dense};return this.$createElement(Ki,{props:e},[this.proxySlot("top",ut(this,"top",t,!0)),this.genCaption(t),this.genColgroup(t),this.genHeaders(t),this.genBody(t),this.proxySlot("bottom",this.genFooters(t))])},proxySlot(t,e){return this.$createElement("template",{slot:t},e)}},render(){return this.$createElement(ue,{props:{...this.$props,customFilter:this.customFilterWithColumns,customSort:this.customSortWithHeaders,itemsPerPage:this.computedItemsPerPage},on:{"update:options":(t,e)=>{this.internalGroupBy=t.groupBy||[],!W(t,e)&&this.$emit("update:options",t)},"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!W(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}}),nn=ae("flex");i("b5b6");function rn(t,e=[]){return C(Ot(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}var sn=C(mt,rn("footer",["height","inset"]),ce).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...mt.options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...mt.options.computed.styles.call(this),height:isNaN(t)?t:X(t),left:X(this.computedLeft),right:X(this.computedRight),bottom:X(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),an=ae("layout"),on=N("spacer","div","v-spacer"),ln=(i("8308"),C(rn("bar",["height","window"]),F,w).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes(){return{"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window,...this.themeClasses}},computedHeight(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles(){return{height:X(this.computedHeight)}}},methods:{updateApplication(){return this.$el?this.$el.clientHeight:this.computedHeight}},render(t){const e={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),ut(this))}}));const cn=C(re,xe("tabsBar"),w);var hn=cn.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...re.options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted(){this.onRouteChange()},methods:{click(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.attrs={...i.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:0},i.on={...i.on,keydown:t=>{t.keyCode===Q.enter&&this.click(t),this.$emit("keydown",t)}},t(e,i,this.$slots.default)}});const un=t=>{const{touchstartX:e,touchendX:i,touchstartY:n,touchendY:r}=t,s=.5,a=16;t.offsetX=i-e,t.offsetY=r-n,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&r<n-a&&t.up(t),t.down&&r>n+a&&t.down(t))};function dn(t,e){const i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function pn(t,e){const i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),un(e)}function fn(t,e){const i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function gn(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>dn(t,e),touchend:t=>pn(t,e),touchmove:t=>fn(t,e)}}function mn(t,e,i){const n=e.value,r=n.parent?t.parentElement:t,s=n.options||{passive:!0};if(!r)return;const a=gn(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=a,tt(a).forEach(t=>{r.addEventListener(t,a[t],s)})}function vn(t,e,i){const n=e.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const r=n._touchHandlers[i.context._uid];tt(r).forEach(t=>{n.removeEventListener(t,r[t])}),delete n._touchHandlers[i.context._uid]}const bn={inserted:mn,unbind:vn};var yn=bn;const xn=C(Le,xe("windowGroup","v-window-item","v-window"));var _n=xn.extend().extend().extend({name:"v-window-item",directives:{Touch:yn},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=X(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=X(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}}),wn=_n.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=_n.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}});i("1bfb"),i("608c");const Cn=C(oi).extend({name:"base-slide-group",directives:{Resize:Ue,Touch:yn},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:t=>!isNaN(parseInt(t))},prevIcon:{type:String,default:"$prev"},showArrows:Boolean},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...oi.options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset},isMobile(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const i=`${t[0].toUpperCase()}${t.slice(1)}`,n=this["has"+i];return this.showArrows||n?this.$createElement(ve,{props:{disabled:!n}},this[e+"Icon"]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(St,[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,i,n){const r=i?-1:1,s=r*n+("prev"===t?-1:1)*e.wrapper;return r*Math.max(Math.min(s,e.content-e.wrapper),0)},onAffixClick(t){this.$emit("click:"+t),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd(){const{content:t,wrapper:e}=this.$refs,i=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-i&&(this.scrollOffset=-i):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,i,n){const r=t.clientWidth,s=i?e.content-t.offsetLeft-r:t.offsetLeft;i&&(n=-n);const a=e.wrapper+n,o=r+s,l=.4*r;return s<n?n=Math.max(s-l,0):a<o&&(n=Math.min(n-(a-o-l),e.content-e.wrapper)),i?-n:n},calculateCenteredOffset(t,e,i){const{offsetLeft:n,clientWidth:r}=t;if(i){const t=e.content-n-r/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=n+r/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});Cn.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var kn=C(Cn,ce,w).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...Cn.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=Cn.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const i=this.items,n=t.path,r=e.path;let s=!1,a=!1;for(const o of i)if(o.to===n?s=!0:o.to===r&&(a=!0),s&&a)break;!s&&a&&(this.internalValue=void 0)}},render(t){const e=Cn.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),Sn=(i("13b3"),oi.extend({name:"v-window",provide(){return{windowGroup:this}},directives:{Touch:yn},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...oi.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,i=e?"-reverse":"";return`v-window-${t}${i}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>this.internalValue===this.getValue(t,e))},internalReverse(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genContainer(){const t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,i){return this.$createElement("div",{staticClass:"v-window__"+t},[this.$createElement(zi,{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel."+t)},on:{click:()=>{this.changedByDelimiters=!0,i()}}},[this.$createElement(ve,{props:{large:!0}},e)])])},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const i=this.genIcon("prev",e,this.prev);i&&t.push(i)}const i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){const e=this.genIcon("next",i,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next(){if(this.isReverse=this.$vuetify.rtl,!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(this.isReverse=!this.$vuetify.rtl,!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}})),$n=Sn.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...Sn.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||oi.options.methods.getValue.call(this,t,e)}}}),An=C(F).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}});const In=C(F,Dt,w);var Mn=In.extend().extend({name:"v-tabs",directives:{Resize:Ue},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakPoint:{type:[Number,String],default:1264},nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:Boolean,sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:X(this.slider.height),left:this.isReversed?void 0:X(this.slider.left),right:this.isReversed?X(this.slider.right):void 0,top:this.vertical?X(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:X(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick(()=>{window.setTimeout(this.callSlider,30)})},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick(()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}}),!0):(this.slider.width=0,!1)},genBar(t,e){const i={style:{height:X(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakPoint:this.mobileBreakPoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,i),this.setBackgroundColor(this.backgroundColor,i),this.$createElement(kn,i,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement($n,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(An,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const i=[],n=[],r=this.$slots.default||[],s=r.length;for(let a=0;a<s;a++){const s=r[a];if(s.componentOptions)switch(s.componentOptions.Ctor.options.name){case"v-tabs-slider":e=s;break;case"v-tabs-items":t=s;break;case"v-tab-item":i.push(s);break;default:n.push(s)}else n.push(s)}return{tab:n,slider:e,items:t,item:i}}},render(t){const{tab:e,slider:i,items:n,item:r}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,i),this.genItems(n,r)])}}),On=p(v,s,a,!1,null,null,null),Tn=On.exports;function Ln(t,e={}){if(Ln.installed)return;Ln.installed=!0,r["a"]!==t&&M("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const i=e.components||{},n=e.directives||{};for(const r in n){const e=n[r];t.directive(r,e)}(function e(i){if(i){for(const n in i){const r=i[n];r&&!e(r.$_vuetify_subcomponents)&&t.component(n,r)}return!0}return!1})(i),t.$_vuetify_installed||(t.$_vuetify_installed=!0,t.mixin({beforeCreate(){const e=this.$options;e.vuetify?(e.vuetify.init(this,e.ssrContext),this.$vuetify=t.observable(e.vuetify.framework)):this.$vuetify=e.parent&&e.parent.$vuetify||this}}))}y()(On,{VApp:k,VCard:se,VContainer:le,VContent:he,VDataTable:en,VFlex:nn,VFooter:sn,VIcon:me,VLayout:an,VSpacer:on,VSystemBar:ln,VTab:hn,VTabItem:wn,VTabs:Mn});i("95ed");var Pn={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"}};const Dn={breakpoint:{scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:Pn},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};class Bn{constructor(){this.framework={}}init(t,e){}}class En extends Bn{constructor(t,e){super();const i=ft({},Dn),{userPreset:n}=e,{preset:r={},...s}=n;null!=r.preset&&I("Global presets do not support the **preset** option, it can be safely omitted"),e.preset=ft(ft(i,r),s)}}En.property="presets";class Fn extends Bn{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(t,e,i){this.application[e]={[t]:i},this.update(e)}unregister(t,e){null!=this.application[e][t]&&(delete this.application[e][t],this.update(e))}update(t){this[t]=Object.values(this.application[t]).reduce((t,e)=>t+e,0)}}Fn.property="application";class Vn extends Bn{constructor(t){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="",this.height=0,this.width=0,this.resizeTimeout=0;const{scrollBarWidth:e,thresholds:i}=t[Vn.property];this.scrollBarWidth=e,this.thresholds=i,this.init()}init(){"undefined"!==typeof window&&(window.addEventListener("resize",this.onResize.bind(this),{passive:!0}),this.update())}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}update(){const t=this.getClientHeight(),e=this.getClientWidth(),i=e<this.thresholds.xs,n=e<this.thresholds.sm&&!i,r=e<this.thresholds.md-this.scrollBarWidth&&!(n||i),s=e<this.thresholds.lg-this.scrollBarWidth&&!(r||n||i),a=e>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=t,this.width=e,this.xs=i,this.sm=n,this.md=r,this.lg=s,this.xl=a,this.xsOnly=i,this.smOnly=n,this.smAndDown=(i||n)&&!(r||s||a),this.smAndUp=!i&&(n||r||s||a),this.mdOnly=r,this.mdAndDown=(i||n||r)&&!(s||a),this.mdAndUp=!(i||n)&&(r||s||a),this.lgOnly=s,this.lgAndDown=(i||n||r||s)&&!a,this.lgAndUp=!(i||n||r)&&(s||a),this.xlOnly=a,!0){case i:this.name="xs";break;case n:this.name="sm";break;case r:this.name="md";break;case s:this.name="lg";break;default:this.name="xl";break}}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}Vn.property="breakpoint";const Nn=t=>t,zn=t=>t**2,Rn=t=>t*(2-t),Wn=t=>t<.5?2*t**2:(4-2*t)*t-1,Hn=t=>t**3,jn=t=>--t**3+1,qn=t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,Un=t=>t**4,Yn=t=>1- --t**4,Gn=t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,Xn=t=>t**5,Zn=t=>1+--t**5,Kn=t=>t<.5?16*t**5:1+16*--t**5;function Qn(t){if("number"===typeof t)return t;let e=er(t);if(!e)throw"string"===typeof t?new Error(`Target element "${t}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${tr(t)} instead.`);let i=0;while(e)i+=e.offsetTop,e=e.offsetParent;return i}function Jn(t){const e=er(t);if(e)return e;throw"string"===typeof t?new Error(`Container element "${t}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${tr(t)} instead.`)}function tr(t){return null==t?t:t.constructor.name}function er(t){return"string"===typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}function ir(t,e={}){const i={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...e},r=Jn(i.container);if(i.appOffset&&ir.framework.application){const t=r.classList.contains("v-navigation-drawer"),e=r.classList.contains("v-navigation-drawer--clipped"),{bar:n,top:s}=ir.framework.application;i.offset+=n,t&&!e||(i.offset+=s)}const s=performance.now();let a;a="number"===typeof t?Qn(t)-i.offset:Qn(t)-Qn(r)-i.offset;const o=r.scrollTop;if(a===o)return Promise.resolve(a);const l="function"===typeof i.easing?i.easing:n[i.easing];if(!l)throw new TypeError(`Easing function "${i.easing}" not found.`);return new Promise(t=>requestAnimationFrame((function e(n){const c=n-s,h=Math.abs(i.duration?Math.min(c/i.duration,1):1);r.scrollTop=Math.floor(o+(a-o)*l(h));const u=r===document.body?document.documentElement.clientHeight:r.clientHeight;if(1===h||u+r.scrollTop===r.scrollHeight)return t(a);requestAnimationFrame(e)})))}ir.framework={},ir.init=()=>{};class nr extends Bn{constructor(){return super(),ir}}nr.property="goTo";const rr={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",success:"M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",warning:"M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",error:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var sr=rr;const ar={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var or=ar;const lr={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var cr=lr;const hr={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var ur=hr;const dr={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var pr=dr;function fr(t,e){const i={};for(const n in e)i[n]={component:t,props:{icon:e[n].split(" fa-")}};return i}var gr=fr("font-awesome-icon",ur),mr=Object.freeze({mdiSvg:sr,md:or,mdi:cr,fa:ur,fa4:pr,faSvg:gr});class vr extends Bn{constructor(t){super();const{iconfont:e,values:i}=t[vr.property];this.iconfont=e,this.values=ft(mr[e],i)}}vr.property="icons";const br="$vuetify.",yr=Symbol("Lang fallback");function xr(t,e,i=!1,n){const r=e.replace(br,"");let s=H(t,r,yr);return s===yr&&(i?(M(`Translation key "${r}" not found in fallback`),s=e):(I(`Translation key "${r}" not found, falling back to default`),s=xr(n,e,!0,n))),s}class _r extends Bn{constructor(t){super(),this.defaultLocale="en";const{current:e,locales:i,t:n}=t[_r.property];this.current=e,this.locales=i,this.translator=n||this.defaultTranslator}currentLocale(t){const e=this.locales[this.current],i=this.locales[this.defaultLocale];return xr(e,t,!1,i)}t(t,...e){return t.startsWith(br)?this.translator(t,...e):this.replace(t,e)}defaultTranslator(t,...e){return this.replace(this.currentLocale(t),e)}replace(t,e){return t.replace(/\{(\d+)\}/g,(t,i)=>String(e[+i]))}}_r.property="lang";const wr=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Cr=t=>t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055,kr=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Sr=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function $r(t){const e=Array(3),i=Cr,n=wr;for(let r=0;r<3;++r)e[r]=Math.round(255*dt(i(n[r][0]*t[0]+n[r][1]*t[1]+n[r][2]*t[2])));return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function Ar(t){const e=[0,0,0],i=Sr,n=kr,r=i((t>>16&255)/255),s=i((t>>8&255)/255),a=i((t>>0&255)/255);for(let o=0;o<3;++o)e[o]=n[o][0]*r+n[o][1]*s+n[o][2]*a;return e}function Ir(t){let e;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==t?t:t.constructor.name} instead`);{let i="#"===t[0]?t.substring(1):t;3===i.length&&(i=i.split("").map(t=>t+t).join("")),6!==i.length&&I(`'${t}' is not a valid rgb color`),e=parseInt(i,16)}}return e<0?(I(`Colors cannot be negative: '${t}'`),e=0):(e>16777215||isNaN(e))&&(I(`'${t}' is not a valid rgb color`),e=16777215),e}function Mr(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function Or(t){return Mr(Ir(t))}const Tr=.20689655172413793,Lr=t=>t>Tr**3?Math.cbrt(t):t/(3*Tr**2)+4/29,Pr=t=>t>Tr?t**3:3*Tr**2*(t-4/29);function Dr(t){const e=Lr,i=e(t[1]);return[116*i-16,500*(e(t[0]/.95047)-i),200*(i-e(t[2]/1.08883))]}function Br(t){const e=Pr,i=(t[0]+16)/116;return[.95047*e(i+t[1]/500),e(i),1.08883*e(i-t[2]/200)]}function Er(t,e=!1){const{anchor:i,...n}=t,r=Object.keys(n),s={};for(let a=0;a<r.length;++a){const i=r[a],n=t[i];null!=n&&(e?("base"===i||i.startsWith("lighten")||i.startsWith("darken"))&&(s[i]=Or(n)):s[i]="object"===typeof n?Er(n,!0):Wr(i,Ir(n)))}return e||(s.anchor=i||s.base||s.primary.base),s}const Fr=(t,e)=>`\n.v-application .${t} {\n  background-color: ${e} !important;\n  border-color: ${e} !important;\n}\n.v-application .${t}--text {\n  color: ${e} !important;\n  caret-color: ${e} !important;\n}`,Vr=(t,e,i)=>{const[n,r]=e.split(/(\d)/,2);return`\n.v-application .${t}.${n}-${r} {\n  background-color: ${i} !important;\n  border-color: ${i} !important;\n}\n.v-application .${t}--text.text--${n}-${r} {\n  color: ${i} !important;\n  caret-color: ${i} !important;\n}`},Nr=(t,e="base")=>`--v-${t}-${e}`,zr=(t,e="base")=>`var(${Nr(t,e)})`;function Rr(t,e=!1){const{anchor:i,...n}=t,r=Object.keys(n);if(!r.length)return"";let s="",a="";const o=e?zr("anchor"):i;a+=`.v-application a { color: ${o}; }`,e&&(s+=`  ${Nr("anchor")}: ${i};\n`);for(let l=0;l<r.length;++l){const i=r[l],n=t[i];a+=Fr(i,e?zr(i):n.base),e&&(s+=`  ${Nr(i)}: ${n.base};\n`);const o=Object.keys(n);for(let t=0;t<o.length;++t){const r=o[t],l=n[r];"base"!==r&&(a+=Vr(i,r,e?zr(i,r):l),e&&(s+=`  ${Nr(i,r)}: ${l};\n`))}}return e&&(s=`:root {\n${s}}\n\n`),s+a}function Wr(t,e){const i={base:Mr(e)};for(let n=5;n>0;--n)i["lighten"+n]=Mr(Hr(e,n));for(let n=1;n<=4;++n)i["darken"+n]=Mr(jr(e,n));return i}function Hr(t,e){const i=Dr(Ar(t));return i[0]=i[0]+10*e,$r(Br(i))}function jr(t,e){const i=Dr(Ar(t));return i[0]=i[0]-10*e,$r(Br(i))}class qr extends Bn{constructor(t){super(),this.disabled=!1,this.isDark=null,this.vueInstance=null,this.vueMeta=null;const{dark:e,disable:i,options:n,themes:r}=t[qr.property];this.dark=Boolean(e),this.defaults=this.themes=r,this.options=n,i?this.disabled=!0:this.themes={dark:this.fillVariant(r.dark,!0),light:this.fillVariant(r.light,!1)}}set css(t){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=t)}set dark(t){const e=this.isDark;this.isDark=t,null!=e&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(t,e){this.disabled||(t.$meta?this.initVueMeta(t):e&&this.initSSR(e),this.initTheme())}setTheme(t,e){this.themes[t]=Object.assign(this.themes[t],e),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(t={},e){const i=this.themes[e?"dark":"light"];return Object.assign({},i,t)}genStyleElement(){if("undefined"===typeof document)return;const t=this.options||{};this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",t.cspNonce&&this.styleEl.setAttribute("nonce",t.cspNonce),document.head.appendChild(this.styleEl)}initVueMeta(t){if(this.vueMeta=t.$meta(),this.isVueMeta23)return void t.$nextTick(()=>{this.applyVueMeta23()});const e="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",i=t.$options[e]||{};t.$options[e]=()=>{i.style=i.style||[];const t=i.style.find(t=>"vuetify-theme-stylesheet"===t.id);return t?t.cssText=this.generatedStyles:i.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),i}}applyVueMeta23(){const{set:t}=this.vueMeta.addApp("vuetify");t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}]})}initSSR(t){const e=this.options||{},i=e.cspNonce?` nonce="${e.cspNonce}"`:"";t.head=t.head||"",t.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${i}>${this.generatedStyles}</style>`}initTheme(){"undefined"!==typeof document&&(this.vueInstance&&this.vueInstance.$destroy(),this.vueInstance=new r["a"]({data:{themes:this.themes},watch:{themes:{immediate:!0,deep:!0,handler:()=>this.applyTheme()}}}))}get currentTheme(){const t=this.dark?"dark":"light";return this.themes[t]}get generatedStyles(){const t=this.parsedTheme,e=this.options||{};let i;return null!=e.themeCache&&(i=e.themeCache.get(t),null!=i)||(i=Rr(t,e.customProperties),null!=e.minifyTheme&&(i=e.minifyTheme(i)),null!=e.themeCache&&e.themeCache.set(t,i)),i}get parsedTheme(){const t=this.currentTheme||{};return Er(t)}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}qr.property="theme";class Ur{constructor(t={}){this.framework={},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(En),this.use(Fn),this.use(Vn),this.use(nr),this.use(vr),this.use(_r),this.use(qr)}init(t,e){this.installed.forEach(i=>{const n=this.framework[i];n.framework=this.framework,n.init(t,e)}),this.framework.rtl=Boolean(this.preset.rtl)}use(t){const e=t.property;this.installed.includes(e)||(this.framework[e]=new t(this.preset,this),this.installed.push(e))}}Ur.install=Ln,Ur.installed=!1,Ur.version="2.2.29";i("d1e7");r["a"].use(Ur);var Yr=new Ur({icons:{iconfont:"md"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:Yr,render(t){return t(Tn)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("7694"),r=i.n(n);r.a},"608c":function(t,e,i){},"615b":function(t,e,i){},"61d2":function(t,e,i){},6544:function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(i.components=t.exports.options.components),i.components=i.components||{},e)i.components[n]=i.components[n]||e[n]}},"68dd":function(t,e,i){},"6ece":function(t,e,i){},7435:function(t,e,i){},7694:function(t,e,i){},8308:function(t,e,i){},"86cc":function(t,e,i){},"899c":function(t,e,i){},"8adc":function(t,e,i){},"8b37":function(t,e,i){},"8ce9":function(t,e,i){},"8d4f":function(t,e,i){},"8ff2":function(t,e,i){},"91f4":function(t,e,i){},"95ed":function(t,e,i){},b5b6:function(t,e,i){},c32d:function(t,e){if("undefined"===typeof moment){var i=new Error("Cannot find module 'moment'");throw i.code="MODULE_NOT_FOUND",i}t.exports=moment},c8ba:function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(n){"object"===typeof window&&(i=window)}t.exports=i},cf36:function(t,e,i){},d191:function(t,e,i){},d1e7:function(t,e,i){},daaf:function(t,e,i){},db42:function(t,e,i){},df86:function(t,e,i){},e9b1:function(t,e,i){},ee6f:function(t,e,i){},f823:function(t,e,i){}});