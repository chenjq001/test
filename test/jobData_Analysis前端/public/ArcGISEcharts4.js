!function (e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.echarts = t()
}(this, function () {
    var e, t;
    !function () {
        function i(e, t) {
            if (!t) return e;
            if (0 === e.indexOf(".")) {
                var i = t.split("/"), r = e.split("/"), n = i.length - 1, a = r.length, o = 0, s = 0;
                e:for (var l = 0; a > l; l++) switch (r[l]) {
                    case"..":
                        if (!(n > o)) break e;
                        o++, s++;
                        break;
                    case".":
                        s++;
                        break;
                    default:
                        break e
                }
                return i.length = n - o, r = r.slice(s), i.concat(r).join("/")
            }
            return e
        }

        function r(e) {
            function t(t, o) {
                if ("string" == typeof t) {
                    var s = r[t];
                    return s || (s = a(i(t, e)), r[t] = s), s
                }
                t instanceof Array && (o = o || function () {
                }, o.apply(this, n(t, o, e)))
            }

            var r = {};
            return t
        }

        function n(t, r, n) {
            for (var s = [], l = o[n], c = 0, u = Math.min(t.length, r.length); u > c; c++) {
                var h, d = i(t[c], n);
                switch (d) {
                    case"require":
                        h = l && l.require || e;
                        break;
                    case"exports":
                        h = l.exports;
                        break;
                    case"module":
                        h = l;
                        break;
                    default:
                        h = a(d)
                }
                s.push(h)
            }
            return s
        }

        function a(e) {
            var t = o[e];
            if (!t) throw new Error("No " + e);
            if (!t.defined) {
                var i = t.factory, r = i.apply(this, n(t.deps || [], i, e));
                "undefined" != typeof r && (t.exports = r), t.defined = 1
            }
            return t.exports
        }

        var o = {};
        t = function (e, t, i) {
            if (2 === arguments.length && (i = t, t = [], "function" != typeof i)) {
                var n = i;
                i = function () {
                    return n
                }
            }
            o[e] = {id: e, deps: t, factory: i, defined: 0, exports: {}, require: r(e)}
        }, e = r("")
    }(), t("zrender/graphic/Gradient", ["require"], function (e) {
        var t = function (e) {
            this.colorStops = e || []
        };
        return t.prototype = {
            constructor: t, addColorStop: function (e, t) {
                this.colorStops.push({offset: e, color: t})
            }
        }, t
    }), t("zrender/core/util", ["require", "../graphic/Gradient"], function (e) {
        function t(e) {
            if ("object" == typeof e && null !== e) {
                var i = e;
                if (e instanceof Array) {
                    i = [];
                    for (var r = 0, n = e.length; n > r; r++) i[r] = t(e[r])
                } else if (!M(e) && !S(e)) {
                    i = {};
                    for (var a in e) e.hasOwnProperty(a) && (i[a] = t(e[a]))
                }
                return i
            }
            return e
        }

        function i(e, r, n) {
            if (e) {
                if (!r) return e;
                for (var a in r) if (r.hasOwnProperty(a)) {
                    var o = e[a], s = r[a];
                    !w(s) || !w(o) || x(s) || x(o) || S(s) || S(o) || M(s) || M(o) ? !n && a in e || (e[a] = t(r[a], !0)) : i(o, s, n)
                }
                return e
            }
        }

        function r(e, t) {
            for (var r = e[0], n = 1, a = e.length; a > n; n++) r = i(r, e[n], t);
            return r
        }

        function n(e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e
        }

        function a(e, t, i) {
            for (var r in t) t.hasOwnProperty(r) && (i ? null != t[r] : null == e[r]) && (e[r] = t[r]);
            return e
        }

        function o() {
            return document.createElement("canvas")
        }

        function s() {
            return L || (L = q.createCanvas().getContext("2d")), L
        }

        function l(e, t) {
            if (e) {
                if (e.indexOf) return e.indexOf(t);
                for (var i = 0, r = e.length; r > i; i++) if (e[i] === t) return i
            }
            return -1
        }

        function c(e, t) {
            function i() {
            }

            var r = e.prototype;
            i.prototype = t.prototype, e.prototype = new i;
            for (var n in r) e.prototype[n] = r[n];
            e.prototype.constructor = e, e.superClass = t
        }

        function u(e, t, i) {
            e = "prototype" in e ? e.prototype : e, t = "prototype" in t ? t.prototype : t, a(e, t, i)
        }

        function h(e) {
            return e ? "string" == typeof e ? !1 : "number" == typeof e.length : void 0
        }

        function d(e, t, i) {
            if (e && t) if (e.forEach && e.forEach === k) e.forEach(t, i); else if (e.length === +e.length) for (var r = 0, n = e.length; n > r; r++) t.call(i, e[r], r, e); else for (var a in e) e.hasOwnProperty(a) && t.call(i, e[a], a, e)
        }

        function p(e, t, i) {
            if (e && t) {
                if (e.map && e.map === O) return e.map(t, i);
                for (var r = [], n = 0, a = e.length; a > n; n++) r.push(t.call(i, e[n], n, e));
                return r
            }
        }

        function f(e, t, i, r) {
            if (e && t) {
                if (e.reduce && e.reduce === E) return e.reduce(t, i, r);
                for (var n = 0, a = e.length; a > n; n++) i = t.call(r, i, e[n], n, e);
                return i
            }
        }

        function g(e, t, i) {
            if (e && t) {
                if (e.filter && e.filter === V) return e.filter(t, i);
                for (var r = [], n = 0, a = e.length; a > n; n++) t.call(i, e[n], n, e) && r.push(e[n]);
                return r
            }
        }

        function m(e, t, i) {
            if (e && t) for (var r = 0, n = e.length; n > r; r++) if (t.call(i, e[r], r, e)) return e[r]
        }

        function v(e, t) {
            var i = R.call(arguments, 2);
            return function () {
                return e.apply(t, i.concat(R.call(arguments)))
            }
        }

        function y(e) {
            var t = R.call(arguments, 1);
            return function () {
                return e.apply(this, t.concat(R.call(arguments)))
            }
        }

        function x(e) {
            return "[object Array]" === D.call(e)
        }

        function _(e) {
            return "function" == typeof e
        }

        function b(e) {
            return "[object String]" === D.call(e)
        }

        function w(e) {
            var t = typeof e;
            return "function" === t || !!e && "object" == t
        }

        function M(e) {
            return !!T[D.call(e)] || e instanceof I
        }

        function S(e) {
            return e && 1 === e.nodeType && "string" == typeof e.nodeName
        }

        function A(e) {
            for (var t = 0, i = arguments.length; i > t; t++) if (null != arguments[t]) return arguments[t]
        }

        function z() {
            return Function.call.apply(R, arguments)
        }

        function C(e, t) {
            if (!e) throw new Error(t)
        }

        var L, I = e("../graphic/Gradient"), T = {
                "[object Function]": 1,
                "[object RegExp]": 1,
                "[object Date]": 1,
                "[object Error]": 1,
                "[object CanvasGradient]": 1
            }, D = Object.prototype.toString, P = Array.prototype, k = P.forEach, V = P.filter, R = P.slice, O = P.map,
            E = P.reduce, q = {
                inherits: c,
                mixin: u,
                clone: t,
                merge: i,
                mergeAll: r,
                extend: n,
                defaults: a,
                getContext: s,
                createCanvas: o,
                indexOf: l,
                slice: z,
                find: m,
                isArrayLike: h,
                each: d,
                map: p,
                reduce: f,
                filter: g,
                bind: v,
                curry: y,
                isArray: x,
                isString: b,
                isObject: w,
                isFunction: _,
                isBuildInObject: M,
                isDom: S,
                retrieve: A,
                assert: C,
                noop: function () {
                }
            };
        return q
    }), t("echarts/util/clazz", ["require", "zrender/core/util"], function (e) {
        function t(e, t) {
            for (var i, r = e.constructor, n = e[t]; (r = r.$superClass) && (i = r.prototype[t]) && i === n;) ;
            return i
        }

        var i = e("zrender/core/util"), r = {}, n = ".", a = "___EC__COMPONENT__CONTAINER___",
            o = r.parseClassType = function (e) {
                var t = {main: "", sub: ""};
                return e && (e = e.split(n), t.main = e[0] || "", t.sub = e[1] || ""), t
            };
        return r.enableClassExtend = function (e, r) {
            e.extend = function (n) {
                var a = function () {
                    r && r.apply(this, arguments), e.apply(this, arguments)
                };
                return i.extend(a.prototype, i.extend({
                    $superCall: function (e) {
                        var r = i.slice(arguments, 1);
                        return t(this, e).apply(this, r)
                    }, $superApply: function (e, i) {
                        return t(this, e).apply(this, i)
                    }
                }, n)), a.extend = this.extend, i.inherits(a, this), a.$superClass = this, a
            }
        }, r.enableClassManagement = function (e, t) {
            function r(e) {
                var t = n[e.main];
                return t && t[a] || (t = n[e.main] = {}, t[a] = !0), t
            }

            t = t || {};
            var n = {};
            if (e.registerClass = function (e, t) {
                if (t) if (t = o(t), t.sub) {
                    if (t.sub !== a) {
                        var i = r(t);
                        i[t.sub] = e
                    }
                } else {
                    if (n[t.main]) throw new Error(t.main + "exists");
                    n[t.main] = e
                }
                return e
            }, e.getClass = function (e, t, i) {
                var r = n[e];
                if (r && r[a] && (r = t ? r[t] : null), i && !r) throw new Error("Component " + e + "." + (t || "") + " not exists");
                return r
            }, e.getClassesByMainType = function (e) {
                e = o(e);
                var t = [], r = n[e.main];
                return r && r[a] ? i.each(r, function (e, i) {
                    i !== a && t.push(e)
                }) : t.push(r), t
            }, e.hasClass = function (e) {
                return e = o(e), !!n[e.main]
            }, e.getAllClassMainTypes = function () {
                var e = [];
                return i.each(n, function (t, i) {
                    e.push(i)
                }), e
            }, e.hasSubTypes = function (e) {
                e = o(e);
                var t = n[e.main];
                return t && t[a]
            }, e.parseClassType = o, t.registerWhenExtend) {
                var s = e.extend;
                s && (e.extend = function (t) {
                    var i = s.call(this, t);
                    return e.registerClass(i, t.type)
                })
            }
            return e
        }, r.setReadOnly = function (e, t) {
            i.isArray(t) || (t = null != t ? [t] : []), i.each(t, function (t) {
                var r = e[t];
                Object.defineProperty && Object.defineProperty(e, t, {
                    value: r,
                    writable: !1
                }), i.isArray(e[t]) && Object.freeze && Object.freeze(e[t])
            })
        }, r
    }), t("echarts/model/mixin/makeStyleMapper", ["require", "zrender/core/util"], function (e) {
        var t = e("zrender/core/util");
        return function (e) {
            for (var i = 0; i < e.length; i++) e[i][1] || (e[i][1] = e[i][0]);
            return function (i) {
                for (var r = {}, n = 0; n < e.length; n++) {
                    var a = e[n][1];
                    if (!(i && t.indexOf(i, a) >= 0)) {
                        var o = this.getShallow(a);
                        null != o && (r[e[n][0]] = o)
                    }
                }
                return r
            }
        }
    }), t("echarts/model/mixin/lineStyle", ["require", "./makeStyleMapper"], function (e) {
        var t = e("./makeStyleMapper")([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
        return {
            getLineStyle: function (e) {
                var i = t.call(this, e), r = this.getLineDash();
                return r && (i.lineDash = r), i
            }, getLineDash: function () {
                var e = this.get("type");
                return "solid" === e || null == e ? null : "dashed" === e ? [5, 5] : [1, 1]
            }
        }
    }), t("echarts/model/mixin/areaStyle", ["require", "./makeStyleMapper"], function (e) {
        return {getAreaStyle: e("./makeStyleMapper")([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]])}
    }), t("zrender/core/vector", [], function () {
        var e = "undefined" == typeof Float32Array ? Array : Float32Array, t = {
            create: function (t, i) {
                var r = new e(2);
                return r[0] = t || 0, r[1] = i || 0, r
            }, copy: function (e, t) {
                return e[0] = t[0], e[1] = t[1], e
            }, clone: function (t) {
                var i = new e(2);
                return i[0] = t[0], i[1] = t[1], i
            }, set: function (e, t, i) {
                return e[0] = t, e[1] = i, e
            }, add: function (e, t, i) {
                return e[0] = t[0] + i[0], e[1] = t[1] + i[1], e
            }, scaleAndAdd: function (e, t, i, r) {
                return e[0] = t[0] + i[0] * r, e[1] = t[1] + i[1] * r, e
            }, sub: function (e, t, i) {
                return e[0] = t[0] - i[0], e[1] = t[1] - i[1], e
            }, len: function (e) {
                return Math.sqrt(this.lenSquare(e))
            }, lenSquare: function (e) {
                return e[0] * e[0] + e[1] * e[1]
            }, mul: function (e, t, i) {
                return e[0] = t[0] * i[0], e[1] = t[1] * i[1], e
            }, div: function (e, t, i) {
                return e[0] = t[0] / i[0], e[1] = t[1] / i[1], e
            }, dot: function (e, t) {
                return e[0] * t[0] + e[1] * t[1]
            }, scale: function (e, t, i) {
                return e[0] = t[0] * i, e[1] = t[1] * i, e
            }, normalize: function (e, i) {
                var r = t.len(i);
                return 0 === r ? (e[0] = 0, e[1] = 0) : (e[0] = i[0] / r, e[1] = i[1] / r), e
            }, distance: function (e, t) {
                return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
            }, distanceSquare: function (e, t) {
                return (e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1])
            }, negate: function (e, t) {
                return e[0] = -t[0], e[1] = -t[1], e
            }, lerp: function (e, t, i, r) {
                return e[0] = t[0] + r * (i[0] - t[0]), e[1] = t[1] + r * (i[1] - t[1]), e
            }, applyTransform: function (e, t, i) {
                var r = t[0], n = t[1];
                return e[0] = i[0] * r + i[2] * n + i[4], e[1] = i[1] * r + i[3] * n + i[5], e
            }, min: function (e, t, i) {
                return e[0] = Math.min(t[0], i[0]), e[1] = Math.min(t[1], i[1]), e
            }, max: function (e, t, i) {
                return e[0] = Math.max(t[0], i[0]), e[1] = Math.max(t[1], i[1]), e
            }
        };
        return t.length = t.len, t.lengthSquare = t.lenSquare, t.dist = t.distance, t.distSquare = t.distanceSquare, t
    }), t("zrender/core/matrix", [], function () {
        var e = "undefined" == typeof Float32Array ? Array : Float32Array, t = {
            create: function () {
                var i = new e(6);
                return t.identity(i), i
            }, identity: function (e) {
                return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
            }, copy: function (e, t) {
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
            }, mul: function (e, t, i) {
                var r = t[0] * i[0] + t[2] * i[1], n = t[1] * i[0] + t[3] * i[1], a = t[0] * i[2] + t[2] * i[3],
                    o = t[1] * i[2] + t[3] * i[3], s = t[0] * i[4] + t[2] * i[5] + t[4],
                    l = t[1] * i[4] + t[3] * i[5] + t[5];
                return e[0] = r, e[1] = n, e[2] = a, e[3] = o, e[4] = s, e[5] = l, e
            }, translate: function (e, t, i) {
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + i[0], e[5] = t[5] + i[1], e
            }, rotate: function (e, t, i) {
                var r = t[0], n = t[2], a = t[4], o = t[1], s = t[3], l = t[5], c = Math.sin(i), u = Math.cos(i);
                return e[0] = r * u + o * c, e[1] = -r * c + o * u, e[2] = n * u + s * c, e[3] = -n * c + u * s, e[4] = u * a + c * l, e[5] = u * l - c * a, e
            }, scale: function (e, t, i) {
                var r = i[0], n = i[1];
                return e[0] = t[0] * r, e[1] = t[1] * n, e[2] = t[2] * r, e[3] = t[3] * n, e[4] = t[4] * r, e[5] = t[5] * n, e
            }, invert: function (e, t) {
                var i = t[0], r = t[2], n = t[4], a = t[1], o = t[3], s = t[5], l = i * o - a * r;
                return l ? (l = 1 / l, e[0] = o * l, e[1] = -a * l, e[2] = -r * l, e[3] = i * l, e[4] = (r * s - o * n) * l, e[5] = (a * n - i * s) * l, e) : null
            }
        };
        return t
    }), t("zrender/core/BoundingRect", ["require", "./vector", "./matrix"], function (e) {
        function t(e, t, i, r) {
            this.x = e, this.y = t, this.width = i, this.height = r
        }

        var i = e("./vector"), r = e("./matrix"), n = i.applyTransform, a = Math.min, o = Math.abs, s = Math.max;
        return t.prototype = {
            constructor: t, union: function (e) {
                var t = a(e.x, this.x), i = a(e.y, this.y);
                this.width = s(e.x + e.width, this.x + this.width) - t, this.height = s(e.y + e.height, this.y + this.height) - i, this.x = t, this.y = i
            }, applyTransform: function () {
                var e = [], t = [];
                return function (i) {
                    i && (e[0] = this.x, e[1] = this.y, t[0] = this.x + this.width, t[1] = this.y + this.height, n(e, e, i), n(t, t, i), this.x = a(e[0], t[0]), this.y = a(e[1], t[1]), this.width = o(t[0] - e[0]), this.height = o(t[1] - e[1]))
                }
            }(), calculateTransform: function (e) {
                var t = this, i = e.width / t.width, n = e.height / t.height, a = r.create();
                return r.translate(a, a, [-t.x, -t.y]), r.scale(a, a, [i, n]), r.translate(a, a, [e.x, e.y]), a
            }, intersect: function (e) {
                var t = this, i = t.x, r = t.x + t.width, n = t.y, a = t.y + t.height, o = e.x, s = e.x + e.width,
                    l = e.y, c = e.y + e.height;
                return !(o > r || i > s || l > a || n > c)
            }, contain: function (e, t) {
                var i = this;
                return e >= i.x && e <= i.x + i.width && t >= i.y && t <= i.y + i.height
            }, clone: function () {
                return new t(this.x, this.y, this.width, this.height)
            }, copy: function (e) {
                this.x = e.x, this.y = e.y, this.width = e.width, this.height = e.height
            }
        }, t
    }), t("zrender/contain/text", ["require", "../core/util", "../core/BoundingRect"], function (e) {
        function t(e, t) {
            var i = e + ":" + t;
            if (s[i]) return s[i];
            for (var r = (e + "").split("\n"), n = 0, a = 0, o = r.length; o > a; a++) n = Math.max(d.measureText(r[a], t).width, n);
            return l > c && (l = 0, s = {}), l++, s[i] = n, n
        }

        function i(e, i, r, n) {
            var a = ((e || "") + "").split("\n").length, o = t(e, i), s = t("国", i), l = a * s, c = new h(0, 0, o, l);
            switch (c.lineHeight = s, n) {
                case"bottom":
                case"alphabetic":
                    c.y -= s;
                    break;
                case"middle":
                    c.y -= s / 2
            }
            switch (r) {
                case"end":
                case"right":
                    c.x -= c.width;
                    break;
                case"center":
                    c.x -= c.width / 2
            }
            return c
        }

        function r(e, t, i, r) {
            var n = t.x, a = t.y, o = t.height, s = t.width, l = i.height, c = o / 2 - l / 2, u = "left";
            switch (e) {
                case"left":
                    n -= r, a += c, u = "right";
                    break;
                case"right":
                    n += r + s, a += c, u = "left";
                    break;
                case"top":
                    n += s / 2, a -= r + l, u = "center";
                    break;
                case"bottom":
                    n += s / 2, a += o + r, u = "center";
                    break;
                case"inside":
                    n += s / 2, a += c, u = "center";
                    break;
                case"insideLeft":
                    n += r, a += c, u = "left";
                    break;
                case"insideRight":
                    n += s - r, a += c, u = "right";
                    break;
                case"insideTop":
                    n += s / 2, a += r, u = "center";
                    break;
                case"insideBottom":
                    n += s / 2, a += o - l - r, u = "center";
                    break;
                case"insideTopLeft":
                    n += r, a += r, u = "left";
                    break;
                case"insideTopRight":
                    n += s - r, a += r, u = "right";
                    break;
                case"insideBottomLeft":
                    n += r, a += o - l - r;
                    break;
                case"insideBottomRight":
                    n += s - r, a += o - l - r, u = "right"
            }
            return {x: n, y: a, textAlign: u, textBaseline: "top"}
        }

        function n(e, i, r, n) {
            if (!r) return "";
            n = u.defaults({
                ellipsis: "...",
                minCharacters: 3,
                maxIterations: 3,
                cnCharWidth: t("国", i),
                ascCharWidth: t("a", i)
            }, n, !0), r -= t(n.ellipsis);
            for (var o = (e + "").split("\n"), s = 0, l = o.length; l > s; s++) o[s] = a(o[s], i, r, n);
            return o.join("\n")
        }

        function a(e, i, r, n) {
            for (var a = 0; ; a++) {
                var s = t(e, i);
                if (r > s || a >= n.maxIterations) {
                    e += n.ellipsis;
                    break
                }
                var l = 0 === a ? o(e, r, n) : Math.floor(e.length * r / s);
                if (l < n.minCharacters) {
                    e = "";
                    break
                }
                e = e.substr(0, l)
            }
            return e
        }

        function o(e, t, i) {
            for (var r = 0, n = 0, a = e.length; a > n && t > r; n++) {
                var o = e.charCodeAt(n);
                r += o >= 0 && 127 >= o ? i.ascCharWidth : i.cnCharWidth
            }
            return n
        }

        var s = {}, l = 0, c = 5e3, u = e("../core/util"), h = e("../core/BoundingRect"), d = {
            getWidth: t,
            getBoundingRect: i,
            adjustTextPositionOnRect: r,
            ellipsis: n,
            measureText: function (e, t) {
                var i = u.getContext();
                return i.font = t, i.measureText(e)
            }
        };
        return d
    }), t("echarts/model/mixin/textStyle", ["require", "zrender/contain/text"], function (e) {
        function t(e, t) {
            return e && e.getShallow(t)
        }

        var i = e("zrender/contain/text");
        return {
            getTextColor: function () {
                var e = this.ecModel;
                return this.getShallow("color") || e && e.get("textStyle.color")
            }, getFont: function () {
                var e = this.ecModel, i = e && e.getModel("textStyle");
                return [this.getShallow("fontStyle") || t(i, "fontStyle"), this.getShallow("fontWeight") || t(i, "fontWeight"), (this.getShallow("fontSize") || t(i, "fontSize") || 12) + "px", this.getShallow("fontFamily") || t(i, "fontFamily") || "sans-serif"].join(" ")
            }, getTextRect: function (e) {
                var t = this.get("textStyle") || {};
                return i.getBoundingRect(e, this.getFont(), t.align, t.baseline)
            }, ellipsis: function (e, t, r) {
                return i.ellipsis(e, this.getFont(), t, r)
            }
        }
    }), t("echarts/model/mixin/itemStyle", ["require", "./makeStyleMapper"], function (e) {
        return {getItemStyle: e("./makeStyleMapper")([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]])}
    }), t("echarts/model/Model", ["require", "zrender/core/util", "../util/clazz", "./mixin/lineStyle", "./mixin/areaStyle", "./mixin/textStyle", "./mixin/itemStyle"], function (e) {
        function t(e, t, i) {
            this.parentModel = t || null, this.ecModel = i || null, this.option = e, this.init.apply(this, arguments)
        }

        var i = e("zrender/core/util"), r = e("../util/clazz");
        t.prototype = {
            constructor: t, init: function (e) {
            }, mergeOption: function (e) {
                i.merge(this.option, e, !0)
            }, get: function (e, t) {
                if (!e) return this.option;
                "string" == typeof e && (e = e.split("."));
                for (var i = this.option, r = this.parentModel, n = 0; n < e.length && (i = i && "object" == typeof i ? i[e[n]] : null, null != i); n++) ;
                return null == i && r && !t && (i = r.get(e)), i
            }, getShallow: function (e, t) {
                var i = this.option, r = i && i[e], n = this.parentModel;
                return null == r && n && !t && (r = n.getShallow(e)), r
            }, getModel: function (e, i) {
                var r = this.get(e, !0), n = this.parentModel, a = new t(r, i || n && n.getModel(e), this.ecModel);
                return a
            }, isEmpty: function () {
                return null == this.option
            }, restoreData: function () {
            }, clone: function () {
                var e = this.constructor;
                return new e(i.clone(this.option))
            }, setReadOnly: function (e) {
                r.setReadOnly(this, e)
            }
        }, r.enableClassExtend(t);
        var n = i.mixin;
        return n(t, e("./mixin/lineStyle")), n(t, e("./mixin/areaStyle")), n(t, e("./mixin/textStyle")), n(t, e("./mixin/itemStyle")), t
    }), t("echarts/util/component", ["require", "zrender/core/util", "./clazz"], function (e) {
        var t = e("zrender/core/util"), i = e("./clazz"), r = i.parseClassType, n = 0, a = {}, o = "_";
        return a.getUID = function (e) {
            return [e || "", n++, Math.random()].join(o)
        }, a.enableSubTypeDefaulter = function (e) {
            var t = {};
            return e.registerSubTypeDefaulter = function (e, i) {
                e = r(e), t[e.main] = i
            }, e.determineSubType = function (i, n) {
                var a = n.type;
                if (!a) {
                    var o = r(i).main;
                    e.hasSubTypes(i) && t[o] && (a = t[o](n))
                }
                return a
            }, e
        }, a.enableTopologicalTravel = function (e, i) {
            function r(e) {
                var r = {}, o = [];
                return t.each(e, function (s) {
                    var l = n(r, s), c = l.originalDeps = i(s), u = a(c, e);
                    l.entryCount = u.length, 0 === l.entryCount && o.push(s), t.each(u, function (e) {
                        t.indexOf(l.predecessor, e) < 0 && l.predecessor.push(e);
                        var i = n(r, e);
                        t.indexOf(i.successor, e) < 0 && i.successor.push(s)
                    })
                }), {graph: r, noEntryList: o}
            }

            function n(e, t) {
                return e[t] || (e[t] = {predecessor: [], successor: []}), e[t]
            }

            function a(e, i) {
                var r = [];
                return t.each(e, function (e) {
                    t.indexOf(i, e) >= 0 && r.push(e)
                }), r
            }

            e.topologicalTravel = function (e, i, n, a) {
                function o(e) {
                    c[e].entryCount--, 0 === c[e].entryCount && u.push(e)
                }

                function s(e) {
                    h[e] = !0, o(e)
                }

                if (e.length) {
                    var l = r(i), c = l.graph, u = l.noEntryList, h = {};
                    for (t.each(e, function (e) {
                        h[e] = !0
                    }); u.length;) {
                        var d = u.pop(), p = c[d], f = !!h[d];
                        f && (n.call(a, d, p.originalDeps.slice()), delete h[d]), t.each(p.successor, f ? s : o)
                    }
                    t.each(h, function () {
                        throw new Error("Circle dependency may exists")
                    })
                }
            }
        }, a
    }), t("echarts/util/number", ["require", "zrender/core/util"], function (e) {
        function t(e) {
            return e.replace(/^\s+/, "").replace(/\s+$/, "")
        }

        var i = e("zrender/core/util"), r = {}, n = 1e-4;
        return r.linearMap = function (e, t, n, a) {
            if (i.isArray(e)) return i.map(e, function (e) {
                return r.linearMap(e, t, n, a)
            });
            var o = t[1] - t[0];
            if (0 === o) return (n[0] + n[1]) / 2;
            var s = (e - t[0]) / o;
            return a && (s = Math.min(Math.max(s, 0), 1)), s * (n[1] - n[0]) + n[0]
        }, r.parsePercent = function (e, i) {
            switch (e) {
                case"center":
                case"middle":
                    e = "50%";
                    break;
                case"left":
                case"top":
                    e = "0%";
                    break;
                case"right":
                case"bottom":
                    e = "100%"
            }
            return "string" == typeof e ? t(e).match(/%$/) ? parseFloat(e) / 100 * i : parseFloat(e) : null == e ? NaN : +e
        }, r.round = function (e) {
            return +(+e).toFixed(12)
        }, r.asc = function (e) {
            return e.sort(function (e, t) {
                return e - t
            }), e
        }, r.getPrecision = function (e) {
            for (var t = 1, i = 0; Math.round(e * t) / t !== e;) t *= 10, i++;
            return i
        }, r.getPixelPrecision = function (e, t) {
            var i = Math.log, r = Math.LN10, n = Math.floor(i(e[1] - e[0]) / r),
                a = Math.round(i(Math.abs(t[1] - t[0])) / r);
            return Math.max(-n + a, 0)
        }, r.MAX_SAFE_INTEGER = 9007199254740991, r.remRadian = function (e) {
            var t = 2 * Math.PI;
            return (e % t + t) % t
        }, r.isRadianAroundZero = function (e) {
            return e > -n && n > e
        }, r.parseDate = function (e) {
            return e instanceof Date ? e : new Date("string" == typeof e ? e.replace(/-/g, "/") : e)
        }, r
    }), t("echarts/util/format", ["require", "zrender/core/util"], function (e) {
        function t(e) {
            return isNaN(e) ? "-" : (e = (e + "").split("."), e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : ""))
        }

        function i(e) {
            return e.toLowerCase().replace(/-(.)/g, function (e, t) {
                return t.toUpperCase()
            })
        }

        function r(e) {
            var t = e.length;
            return "number" == typeof e ? [e, e, e, e] : 2 === t ? [e[0], e[1], e[0], e[1]] : 3 === t ? [e[0], e[1], e[2], e[1]] : e
        }

        function n(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }

        function a(e, t) {
            return "{" + e + (null == t ? "" : t) + "}"
        }

        function o(e, t) {
            s.isArray(t) || (t = [t]);
            var i = t.length;
            if (!i) return "";
            for (var r = t[0].$vars, n = 0; n < r.length; n++) {
                var o = l[n];
                e = e.replace(a(o), a(o, 0))
            }
            for (var c = 0; i > c; c++) for (var u = 0; u < r.length; u++) e = e.replace(a(l[u], c), t[c][r[u]]);
            return e
        }

        var s = e("zrender/core/util"), l = ["a", "b", "c", "d", "e", "f", "g"];
        return {normalizeCssArray: r, addCommas: t, toCamelCase: i, encodeHTML: n, formatTpl: o}
    }), t("echarts/util/layout", ["require", "zrender/core/util", "zrender/core/BoundingRect", "./number", "./format"], function (e) {
        function t(e, t, i, r, n) {
            var a = 0, o = 0;
            null == r && (r = 1 / 0), null == n && (n = 1 / 0);
            var s = 0;
            t.eachChild(function (l, c) {
                var u, h, d = l.position, p = l.getBoundingRect(), f = t.childAt(c + 1), g = f && f.getBoundingRect();
                if ("horizontal" === e) {
                    var m = p.width + (g ? -g.x + p.x : 0);
                    u = a + m, u > r || l.newline ? (a = 0, u = m, o += s + i, s = 0) : s = Math.max(s, p.height)
                } else {
                    var v = p.height + (g ? -g.y + p.y : 0);
                    h = o + v, h > n || l.newline ? (a += s + i, o = 0, h = v, s = 0) : s = Math.max(s, p.width)
                }
                l.newline || (d[0] = a, d[1] = o, "horizontal" === e ? a = u + i : o = h + i)
            })
        }

        var i = e("zrender/core/util"), r = e("zrender/core/BoundingRect"), n = e("./number"), a = e("./format"),
            o = n.parsePercent, s = i.each, l = {};
        return l.box = t, l.vbox = i.curry(t, "vertical"), l.hbox = i.curry(t, "horizontal"), l.getAvailableSize = function (e, t, i) {
            var r = t.width, n = t.height, s = o(e.x, r), l = o(e.y, n), c = o(e.x2, r), u = o(e.y2, n);
            return (isNaN(s) || isNaN(parseFloat(e.x))) && (s = 0), (isNaN(c) || isNaN(parseFloat(e.x2))) && (c = r), (isNaN(l) || isNaN(parseFloat(e.y))) && (l = 0), (isNaN(u) || isNaN(parseFloat(e.y2))) && (u = n), i = a.normalizeCssArray(i || 0), {
                width: Math.max(c - s - i[1] - i[3], 0),
                height: Math.max(u - l - i[0] - i[2], 0)
            }
        }, l.getLayoutRect = function (e, t, i) {
            i = a.normalizeCssArray(i || 0);
            var n = t.width, s = t.height, l = o(e.left, n), c = o(e.top, s), u = o(e.right, n), h = o(e.bottom, s),
                d = o(e.width, n), p = o(e.height, s), f = i[2] + i[0], g = i[1] + i[3], m = e.aspect;
            switch (isNaN(d) && (d = n - u - g - l), isNaN(p) && (p = s - h - f - c), isNaN(d) && isNaN(p) && (m > n / s ? d = .8 * n : p = .8 * s), null != m && (isNaN(d) && (d = m * p), isNaN(p) && (p = d / m)), isNaN(l) && (l = n - u - d - g), isNaN(c) && (c = s - h - p - f), e.left || e.right) {
                case"center":
                    l = n / 2 - d / 2 - i[3];
                    break;
                case"right":
                    l = n - d - g
            }
            switch (e.top || e.bottom) {
                case"middle":
                case"center":
                    c = s / 2 - p / 2 - i[0];
                    break;
                case"bottom":
                    c = s - p - f
            }
            var v = new r(l + i[3], c + i[0], d, p);
            return v.margin = i, v
        }, l.positionGroup = function (e, t, r, n) {
            var a = e.getBoundingRect();
            t = i.extend(i.clone(t), {
                width: a.width,
                height: a.height
            }), t = l.getLayoutRect(t, r, n), e.position = [t.x - a.x, t.y - a.y]
        }, l.mergeLayoutParam = function (e, t, i) {
            function r(r) {
                var o = {}, l = 0, c = {}, u = 0, h = i.ignoreSize ? 1 : 2;
                if (s(r, function (t) {
                    c[t] = e[t]
                }), s(r, function (e) {
                    n(t, e) && (o[e] = c[e] = t[e]), a(o, e) && l++, a(c, e) && u++
                }), u !== h && l) {
                    if (h > u) {
                        var d = 0;
                        return s(r, function (e) {
                            "auto" === c[e] && (h - u > d ? d++ : c[e] = null)
                        }), c
                    }
                    if (l >= h) return o;
                    for (var p = 0; p < r.length; p++) {
                        var f = r[p];
                        if (!n(o, f) && n(e, f)) {
                            o[f] = e[f];
                            break
                        }
                    }
                    return o
                }
                return c
            }

            function n(e, t) {
                return e.hasOwnProperty(t)
            }

            function a(e, t) {
                return null != e[t] && "auto" !== e[t]
            }

            function o(e, t, i) {
                s(e, function (e) {
                    t[e] = i[e]
                })
            }

            i = i || {};
            var l = ["width", "left", "right"], c = ["height", "top", "bottom"], u = r(l), h = r(c);
            o(l, e, u), o(c, e, h)
        }, l.getLayoutParams = function (e) {
            var t = {};
            return e && s(["left", "right", "top", "bottom", "width", "height"], function (i) {
                e.hasOwnProperty(i) && (t[i] = e[i])
            }), t
        }, l
    }), t("echarts/model/mixin/boxLayout", ["require"], function (e) {
        return {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get("bottom"),
                    width: this.get("width"),
                    height: this.get("height")
                }
            }
        }
    }), t("echarts/model/Component", ["require", "./Model", "zrender/core/util", "../util/component", "../util/clazz", "../util/layout", "./mixin/boxLayout"], function (e) {
        function t(e) {
            var t = [];
            return r.each(l.getClassesByMainType(e), function (e) {
                n.apply(t, e.prototype.dependencies || [])
            }), r.map(t, function (e) {
                return o.parseClassType(e).main
            })
        }

        var i = e("./Model"), r = e("zrender/core/util"), n = Array.prototype.push, a = e("../util/component"),
            o = e("../util/clazz"), s = e("../util/layout"), l = i.extend({
                type: "component",
                id: "",
                name: "",
                mainType: "",
                subType: "",
                componentIndex: 0,
                defaultOption: null,
                ecModel: null,
                dependentModels: [],
                uid: null,
                layoutMode: null,
                init: function (e, t, i, r) {
                    this.mergeDefaultAndTheme(this.option, this.ecModel)
                },
                mergeDefaultAndTheme: function (e, t) {
                    var i = this.layoutMode, n = i ? s.getLayoutParams(e) : {}, a = t.getTheme();
                    r.merge(e, a.get(this.mainType)), r.merge(e, this.getDefaultOption()), i && s.mergeLayoutParam(e, n, i)
                },
                mergeOption: function (e) {
                    r.merge(this.option, e, !0);
                    var t = this.layoutMode;
                    t && s.mergeLayoutParam(this.option, e, t)
                },
                getDefaultOption: function () {
                    if (!this.hasOwnProperty("__defaultOption")) {
                        for (var e = [], t = this.constructor; t;) {
                            var i = t.prototype.defaultOption;
                            i && e.push(i), t = t.superClass
                        }
                        for (var n = {}, a = e.length - 1; a >= 0; a--) n = r.merge(n, e[a], !0);
                        this.__defaultOption = n
                    }
                    return this.__defaultOption
                }
            });
        return o.enableClassExtend(l, function (e, t, i, n) {
            r.extend(this, n), this.uid = a.getUID("componentModel"), this.setReadOnly(["type", "id", "uid", "name", "mainType", "subType", "dependentModels", "componentIndex"])
        }), o.enableClassManagement(l, {registerWhenExtend: !0}), a.enableSubTypeDefaulter(l), a.enableTopologicalTravel(l, t), r.mixin(l, e("./mixin/boxLayout")), l
    }), t("echarts/model/globalDefault", [], function () {
        var e = "";
        return "undefined" != typeof navigator && (e = navigator.platform || ""), {
            color: ["#c23531", "#314656", "#61a0a8", "#dd8668", "#91c7ae", "#6e7074", "#61a0a8", "#bda29a", "#44525d", "#c4ccd3"],
            grid: {},
            textStyle: {
                fontFamily: e.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            animation: !0,
            animationThreshold: 2e3,
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut"
        }
    }), t("echarts/model/Global", ["require", "zrender/core/util", "./Model", "./Component", "./globalDefault"], function (e) {
        function t(e, t) {
            for (var i in t) x.hasClass(i) || ("object" == typeof t[i] ? e[i] = e[i] ? h.merge(e[i], t[i], !1) : h.clone(t[i]) : e[i] = t[i])
        }

        function i(e) {
            e = e, this.option = {}, this._componentsMap = {}, this._seriesIndices = null, t(e, this._theme.option), h.merge(e, _, !1), this.mergeOption(e)
        }

        function r(e, t) {
            h.isArray(t) || (t = t ? [t] : []);
            var i = {};
            return p(t, function (t) {
                i[t] = (e[t] || []).slice()
            }), i
        }

        function n(e, t) {
            e = (e || []).slice();
            var i = [];
            return p(t, function (t, r) {
                if (y(t) && t.id) for (var n = 0, a = e.length; a > n; n++) if (e[n].id === t.id) return void(i[r] = e.splice(n, 1)[0])
            }), p(t, function (t, r) {
                if (y(t) && t.name && !c(t)) for (var n = 0, a = e.length; a > n; n++) if (e[n].name === t.name) return void(i[r] = e.splice(n, 1)[0])
            }), p(t, function (t, r) {
                i[r] || !e[r] || c(t) || (i[r] = e[r])
            }), i
        }

        function a(e, t, i) {
            function r(r) {
                p(t, function (t, a) {
                    if (y(t)) {
                        var o = i[a], s = n[a], l = e + "." + s.subType;
                        r(s, t, o, l)
                    }
                })
            }

            var n = [], a = "\x00", s = {}, l = {};
            return p(t, function (t, r) {
                if (y(t)) {
                    var a = i[r], s = o(e, t, a), l = {mainType: e, subType: s};
                    n[r] = l
                }
            }), r(function (e, t, i, r) {
                e.name = i ? i.name : null != t.name ? t.name : a + "-", l[e.name] = 0
            }), r(function (e, t, i, r) {
                var n = e.name;
                if (e.id = i ? i.id : null != t.id ? t.id : a + [r, n, l[n]++].join("|"), s[e.id]) throw new Error("id duplicates: " + e.id);
                s[e.id] = 1
            }), n
        }

        function o(e, t, i) {
            var r = t.type ? t.type : i ? i.subType : x.determineSubType(e, t);
            return r
        }

        function s(e) {
            return g(e, function (e) {
                return e.componentIndex
            }) || []
        }

        function l(e, t) {
            return t.hasOwnProperty("subType") ? f(e, function (e) {
                return e.subType === t.subType
            }) : e
        }

        function c(e) {
            return e.id && 0 === (e.id + "").indexOf("\x00_ec_\x00")
        }

        function u(e) {
            if (!e._seriesIndices) throw new Error("Series is not initialized. Please depends sereis.")
        }

        var h = e("zrender/core/util"), d = e("./Model"), p = h.each, f = h.filter, g = h.map, m = h.isArray,
            v = h.indexOf, y = h.isObject, x = e("./Component"), _ = e("./globalDefault"), b = d.extend({
                constructor: b, init: function (e, t, i, r) {
                    i = i || {}, this.option = null, this._theme = new d(i), this._optionManager = r
                }, setOption: function (e, t) {
                    this._optionManager.setOption(e, t), this.resetOption()
                }, resetOption: function (e) {
                    var t = !1, r = this._optionManager;
                    if (!e || "recreate" === e) {
                        var n = r.mountOption();
                        this.option && "recreate" !== e ? (this.restoreData(), this.mergeOption(n)) : i.call(this, n), t = !0
                    }
                    if (("timeline" === e || "media" === e) && this.restoreData(), !e || "recreate" === e || "timeline" === e) {
                        var a = r.getTimelineOption(this);
                        a && (this.mergeOption(a), t = !0)
                    }
                    if (!e || "recreate" === e || "media" === e) {
                        var o = r.getMediaOption(this, this._api);
                        o.length && p(o, function (e) {
                            this.mergeOption(e, t = !0)
                        }, this)
                    }
                    return t
                }, mergeOption: function (e) {
                    function t(t, r) {
                        var n = e[t];
                        n ? o.call(this, t, n, r) : i.call(this, t), "series" === t && (this._seriesIndices = s(c.series))
                    }

                    function i(e) {
                        p(c[e], function (e) {
                            e.mergeOption({}, this)
                        }, this)
                    }

                    function o(e, t, i) {
                        h.isArray(t) || (t = [t]), c[e] || (c[e] = []);
                        var o = n(c[e], t), s = a(e, t, o), u = r(c, i);
                        l[e] = [], p(t, function (t, i) {
                            if (y(t)) {
                                var r = o[i], n = x.getClass(e, s[i].subType, !0);
                                r && r instanceof n ? r.mergeOption(t, this) : (r = new n(t, this, this, h.extend({
                                    dependentModels: u,
                                    componentIndex: i
                                }, s[i])), c[e][i] = r), l[e][i] = r.option
                            }
                        }, this)
                    }

                    var l = this.option, c = this._componentsMap, u = [];
                    p(e, function (e, t) {
                        null != e && (x.hasClass(t) ? u.push(t) : l[t] = null == l[t] ? h.clone(e) : h.merge(l[t], e, !0))
                    }), x.topologicalTravel(u, x.getAllClassMainTypes(), t, this)
                }, getTheme: function () {
                    return this._theme
                }, getComponent: function (e, t) {
                    var i = this._componentsMap[e];
                    return i ? i[t || 0] : void 0
                }, queryComponents: function (e) {
                    var t = e.mainType;
                    if (!t) return [];
                    var i = e.index, r = e.id, n = e.name, a = this._componentsMap[t];
                    if (!a || !a.length) return [];
                    var o;
                    if (null != i) m(i) || (i = [i]), o = f(g(i, function (e) {
                        return a[e]
                    }), function (e) {
                        return !!e
                    }); else if (null != r) {
                        var s = m(r);
                        o = f(a, function (e) {
                            return s && v(r, e.id) >= 0 || !s && e.id === r
                        })
                    } else if (null != n) {
                        var c = m(n);
                        o = f(a, function (e) {
                            return c && v(n, e.name) >= 0 || !c && e.name === n
                        })
                    }
                    return l(o, e)
                }, findComponents: function (e) {
                    function t(e) {
                        var t = n + "Index", i = n + "Id", r = n + "Name";
                        return e && (e.hasOwnProperty(t) || e.hasOwnProperty(i) || e.hasOwnProperty(r)) ? {
                            mainType: n,
                            index: e[t],
                            id: e[i],
                            name: e[r]
                        } : null
                    }

                    function i(t) {
                        return e.filter ? f(t, e.filter) : t
                    }

                    var r = e.query, n = e.mainType, a = t(r), o = a ? this.queryComponents(a) : this._componentsMap[n];
                    return i(l(o, e))
                }, eachComponent: function (e, t, i) {
                    var r = this._componentsMap;
                    if ("function" == typeof e) i = t, t = e, p(r, function (e, r) {
                        p(e, function (e, n) {
                            t.call(i, r, e, n)
                        })
                    }); else if (h.isString(e)) p(r[e], t, i); else if (y(e)) {
                        var n = this.findComponents(e);
                        p(n, t, i)
                    }
                }, getSeriesByName: function (e) {
                    var t = this._componentsMap.series;
                    return f(t, function (t) {
                        return t.name === e
                    })
                }, getSeriesByIndex: function (e) {
                    return this._componentsMap.series[e]
                }, getSeriesByType: function (e) {
                    var t = this._componentsMap.series;
                    return f(t, function (t) {
                        return t.subType === e
                    })
                }, getSeries: function () {
                    return this._componentsMap.series.slice()
                }, eachSeries: function (e, t) {
                    u(this), p(this._seriesIndices, function (i) {
                        var r = this._componentsMap.series[i];
                        e.call(t, r, i)
                    }, this)
                }, eachRawSeries: function (e, t) {
                    p(this._componentsMap.series, e, t)
                }, eachSeriesByType: function (e, t, i) {
                    u(this), p(this._seriesIndices, function (r) {
                        var n = this._componentsMap.series[r];
                        n.subType === e && t.call(i, n, r)
                    }, this)
                }, eachRawSeriesByType: function (e, t, i) {
                    return p(this.getSeriesByType(e), t, i)
                }, isSeriesFiltered: function (e) {
                    return u(this), h.indexOf(this._seriesIndices, e.componentIndex) < 0
                }, filterSeries: function (e, t) {
                    u(this);
                    var i = f(this._componentsMap.series, e, t);
                    this._seriesIndices = s(i)
                }, restoreData: function () {
                    var e = this._componentsMap;
                    this._seriesIndices = s(e.series);
                    var t = [];
                    p(e, function (e, i) {
                        t.push(i)
                    }), x.topologicalTravel(t, x.getAllClassMainTypes(), function (t, i) {
                        p(e[t], function (e) {
                            e.restoreData()
                        })
                    })
                }
            });
        return b
    }), t("echarts/ExtensionAPI", ["require", "zrender/core/util"], function (e) {
        function t(e) {
            i.each(r, function (t) {
                this[t] = i.bind(e[t], e)
            }, this)
        }

        var i = e("zrender/core/util"),
            r = ["getDom", "getZr", "getWidth", "getHeight", "dispatchAction", "on", "off", "getDataURL", "getConnectedDataURL"];
        return t
    }), t("echarts/CoordinateSystem", ["require"], function (e) {
        function t() {
            this._coordinateSystems = {}, this._coordinateSystemsList = []
        }

        var i = {};
        return t.prototype = {
            constructor: t, update: function (e, t) {
                var r = {};
                for (var n in i) r[n] = i[n].create(e, t);
                this._coordinateSystems = r
            }, get: function (e, t) {
                var i = this._coordinateSystems[e];
                return i ? i[t || 0] : void 0
            }
        }, t.register = function (e, t) {
            i[e] = t
        }, t
    }), t("echarts/model/OptionManager", ["require", "zrender/core/util"], function (e) {
        function t(e) {
            this._api = e, this._timelineOptions, this._mediaList, this._mediaDefault, this._currentMediaIndices = [], this._optionBackup
        }

        function i(e, t) {
            var i, r, n = [], a = [], l = e.timeline;
            if ((l || e.options) && (r = e.baseOption || {}, n = (e.options || []).slice()), e.media) {
                r = e.baseOption || {};
                var c = e.media;
                s(c, function (e) {
                    e && e.option && (e.query ? a.push(e) : i || (i = e))
                })
            }
            return r || (r = e), r.timeline || (r.timeline = l), s([r].concat(n).concat(o.map(a, function (e) {
                return e.option
            })), function (e) {
                s(t, function (t) {
                    t(e)
                })
            }), {baseOption: r, timelineOptions: n, mediaDefault: i, mediaList: a}
        }

        function r(e, t, i) {
            var r = {width: t, height: i, aspectratio: t / i}, a = !0;
            return o.each(e, function (e, t) {
                var i = t.match(u);
                if (i && i[1] && i[2]) {
                    var o = i[1], s = i[2].toLowerCase();
                    n(r[s], e, o) || (a = !1)
                }
            }), a
        }

        function n(e, t, i) {
            return "min" === i ? e >= t : "max" === i ? t >= e : e === t
        }

        function a(e, t) {
            return e.join(",") === t.join(",")
        }

        var o = e("zrender/core/util"), s = o.each, l = o.clone, c = o.map, u = /^(min|max)?(.+)$/;
        return t.prototype = {
            constructor: t, setOption: function (e, t) {
                e = l(e, !0),
                    this._optionBackup = i.call(this, e, t)
            }, mountOption: function () {
                var e = this._optionBackup;
                return this._timelineOptions = c(e.timelineOptions, l), this._mediaList = c(e.mediaList, l), this._mediaDefault = l(e.mediaDefault), this._currentMediaIndices = [], l(e.baseOption)
            }, getTimelineOption: function (e) {
                var t, i = this._timelineOptions;
                if (i.length) {
                    var r = e.getComponent("timeline");
                    r && (t = l(i[r.getCurrentIndex()], !0))
                }
                return t
            }, getMediaOption: function (e) {
                var t = this._api.getWidth(), i = this._api.getHeight(), n = this._mediaList, o = this._mediaDefault,
                    s = [], u = [];
                if (!n.length && !o) return u;
                for (var h = 0, d = n.length; d > h; h++) r(n[h].query, t, i) && s.push(h);
                return !s.length && o && (s = [-1]), s.length && !a(s, this._currentMediaIndices) && (u = c(s, function (e) {
                    return l(-1 === e ? o.option : n[e].option)
                })), this._currentMediaIndices = s, u
            }
        }, t
    }), t("echarts/util/model", ["require", "./format", "./number", "zrender/core/util", "../model/Model"], function (e) {
        var t = e("./format"), i = e("./number"), r = e("zrender/core/util"), n = e("../model/Model"),
            a = ["x", "y", "z", "radius", "angle"], o = {};
        return o.createNameEach = function (e, t) {
            e = e.slice();
            var i = r.map(e, o.capitalFirst);
            t = (t || []).slice();
            var n = r.map(t, o.capitalFirst);
            return function (a, o) {
                r.each(e, function (e, r) {
                    for (var s = {name: e, capital: i[r]}, l = 0; l < t.length; l++) s[t[l]] = e + n[l];
                    a.call(o, s)
                })
            }
        }, o.capitalFirst = function (e) {
            return e ? e.charAt(0).toUpperCase() + e.substr(1) : e
        }, o.eachAxisDim = o.createNameEach(a, ["axisIndex", "axis", "index"]), o.normalizeToArray = function (e) {
            return r.isArray(e) ? e : null == e ? [] : [e]
        }, o.createLinkedNodesFinder = function (e, t, i) {
            function n(e, t) {
                return r.indexOf(t.nodes, e) >= 0
            }

            function a(e, n) {
                var a = !1;
                return t(function (t) {
                    r.each(i(e, t) || [], function (e) {
                        n.records[t.name][e] && (a = !0)
                    })
                }), a
            }

            function o(e, n) {
                n.nodes.push(e), t(function (t) {
                    r.each(i(e, t) || [], function (e) {
                        n.records[t.name][e] = !0
                    })
                })
            }

            return function (i) {
                function r(e) {
                    !n(e, s) && a(e, s) && (o(e, s), l = !0)
                }

                var s = {nodes: [], records: {}};
                if (t(function (e) {
                    s.records[e.name] = {}
                }), !i) return s;
                o(i, s);
                var l;
                do l = !1, e(r); while (l);
                return s
            }
        }, o.defaultEmphasis = function (e, t) {
            if (e) {
                var i = e.emphasis = e.emphasis || {}, n = e.normal = e.normal || {};
                r.each(t, function (e) {
                    var t = r.retrieve(i[e], n[e]);
                    null != t && (i[e] = t)
                })
            }
        }, o.createDataFormatModel = function (e, t, i) {
            var a = new n;
            return r.mixin(a, o.dataFormatMixin), a.seriesIndex = e.seriesIndex, a.name = e.name || "", a.getData = function () {
                return t
            }, a.getRawDataArray = function () {
                return i
            }, a
        }, o.getDataItemValue = function (e) {
            return e && (null == e.value ? e : e.value)
        }, o.converDataValue = function (e, t) {
            var r = t && t.type;
            return "ordinal" === r ? e : ("time" !== r || isFinite(e) || null == e || "-" === e || (e = +i.parseDate(e)), null == e || "" === e ? NaN : +e)
        }, o.dataFormatMixin = {
            getDataParams: function (e) {
                var t = this.getData(), i = this.seriesIndex, r = this.name, n = this.getRawValue(e),
                    a = t.getRawIndex(e), o = t.getName(e, !0), s = this.getRawDataArray(), l = s && s[a];
                return {
                    seriesIndex: i,
                    seriesName: r,
                    name: o,
                    dataIndex: a,
                    data: l,
                    value: n,
                    $vars: ["seriesName", "name", "value"]
                }
            }, getFormattedLabel: function (e, i, r) {
                i = i || "normal";
                var n = this.getData(), a = n.getItemModel(e), o = this.getDataParams(e);
                return r || (r = a.get(["label", i, "formatter"])), "function" == typeof r ? (o.status = i, r(o)) : "string" == typeof r ? t.formatTpl(r, o) : void 0
            }, getRawValue: function (e) {
                var t = this.getData().getItemModel(e);
                if (t && t.option) {
                    var i = t.option;
                    return r.isObject(i) && !r.isArray(i) ? i.value : i
                }
            }
        }, o
    }), t("echarts/model/Series", ["require", "zrender/core/util", "../util/format", "../util/model", "./Component"], function (e) {
        var t = e("zrender/core/util"), i = e("../util/format"), r = e("../util/model"), n = e("./Component"),
            a = i.encodeHTML, o = i.addCommas, s = n.extend({
                type: "series",
                seriesIndex: 0,
                coordinateSystem: null,
                defaultOption: null,
                legendDataProvider: null,
                init: function (e, t, i, r) {
                    this.seriesIndex = this.componentIndex, this.mergeDefaultAndTheme(e, i), this._dataBeforeProcessed = this.getInitialData(e, i), this._data = this._dataBeforeProcessed.cloneShallow()
                },
                mergeDefaultAndTheme: function (e, i) {
                    t.merge(e, i.getTheme().get(this.subType)), t.merge(e, this.getDefaultOption()), r.defaultEmphasis(e.label, ["position", "show", "textStyle", "distance", "formatter"])
                },
                mergeOption: function (e, i) {
                    e = t.merge(this.option, e, !0);
                    var r = this.getInitialData(e, i);
                    r && (this._data = r, this._dataBeforeProcessed = r.cloneShallow())
                },
                getInitialData: function () {
                },
                getData: function () {
                    return this._data
                },
                setData: function (e) {
                    this._data = e
                },
                getRawData: function () {
                    return this._dataBeforeProcessed
                },
                getRawDataArray: function () {
                    return this.option.data
                },
                getDimensionsOnAxis: function (e) {
                    return [e]
                },
                formatTooltip: function (e, i) {
                    var r = this._data, n = this.getRawValue(e), s = t.isArray(n) ? t.map(n, o).join(", ") : o(n),
                        l = r.getName(e);
                    return i ? a(this.name) + " : " + s : a(this.name) + "<br />" + (l ? a(l) + " : " + s : s)
                },
                restoreData: function () {
                    this._data = this._dataBeforeProcessed.cloneShallow()
                }
            });
        return t.mixin(s, r.dataFormatMixin), s
    }), t("zrender/core/guid", [], function () {
        var e = 2311;
        return function () {
            return "zr_" + e++
        }
    }), t("zrender/mixin/Eventful", ["require", "../core/util"], function (e) {
        var t = Array.prototype.slice, i = e("../core/util"), r = i.indexOf, n = function () {
            this._$handlers = {}
        };
        return n.prototype = {
            constructor: n, one: function (e, t, i) {
                var n = this._$handlers;
                return t && e ? (n[e] || (n[e] = []), r(n[e], e) >= 0 ? this : (n[e].push({
                    h: t,
                    one: !0,
                    ctx: i || this
                }), this)) : this
            }, on: function (e, t, i) {
                var r = this._$handlers;
                return t && e ? (r[e] || (r[e] = []), r[e].push({h: t, one: !1, ctx: i || this}), this) : this
            }, isSilent: function (e) {
                var t = this._$handlers;
                return t[e] && t[e].length
            }, off: function (e, t) {
                var i = this._$handlers;
                if (!e) return this._$handlers = {}, this;
                if (t) {
                    if (i[e]) {
                        for (var r = [], n = 0, a = i[e].length; a > n; n++) i[e][n].h != t && r.push(i[e][n]);
                        i[e] = r
                    }
                    i[e] && 0 === i[e].length && delete i[e]
                } else delete i[e];
                return this
            }, trigger: function (e) {
                if (this._$handlers[e]) {
                    var i = arguments, r = i.length;
                    r > 3 && (i = t.call(i, 1));
                    for (var n = this._$handlers[e], a = n.length, o = 0; a > o;) {
                        switch (r) {
                            case 1:
                                n[o].h.call(n[o].ctx);
                                break;
                            case 2:
                                n[o].h.call(n[o].ctx, i[1]);
                                break;
                            case 3:
                                n[o].h.call(n[o].ctx, i[1], i[2]);
                                break;
                            default:
                                n[o].h.apply(n[o].ctx, i)
                        }
                        n[o].one ? (n.splice(o, 1), a--) : o++
                    }
                }
                return this
            }, triggerWithContext: function (e) {
                if (this._$handlers[e]) {
                    var i = arguments, r = i.length;
                    r > 4 && (i = t.call(i, 1, i.length - 1));
                    for (var n = i[i.length - 1], a = this._$handlers[e], o = a.length, s = 0; o > s;) {
                        switch (r) {
                            case 1:
                                a[s].h.call(n);
                                break;
                            case 2:
                                a[s].h.call(n, i[1]);
                                break;
                            case 3:
                                a[s].h.call(n, i[1], i[2]);
                                break;
                            default:
                                a[s].h.apply(n, i)
                        }
                        a[s].one ? (a.splice(s, 1), o--) : s++
                    }
                }
                return this
            }
        }, n
    }), t("zrender/mixin/Transformable", ["require", "../core/matrix", "../core/vector"], function (e) {
        function t(e) {
            return e > a || -a > e
        }

        var i = e("../core/matrix"), r = e("../core/vector"), n = i.identity, a = 5e-5, o = function (e) {
            e = e || {}, e.position || (this.position = [0, 0]), null == e.rotation && (this.rotation = 0), e.scale || (this.scale = [1, 1]), this.origin = this.origin || null
        }, s = o.prototype;
        s.transform = null, s.needLocalTransform = function () {
            return t(this.rotation) || t(this.position[0]) || t(this.position[1]) || t(this.scale[0] - 1) || t(this.scale[1] - 1)
        }, s.updateTransform = function () {
            var e = this.parent, t = e && e.transform, r = this.needLocalTransform(), a = this.transform;
            return r || t ? (a = a || i.create(), r ? this.getLocalTransform(a) : n(a), t && (r ? i.mul(a, e.transform, a) : i.copy(a, e.transform)), this.transform = a, this.invTransform = this.invTransform || i.create(), void i.invert(this.invTransform, a)) : void(a && n(a))
        }, s.getLocalTransform = function (e) {
            e = e || [], n(e);
            var t = this.origin, r = this.scale, a = this.rotation, o = this.position;
            return t && (e[4] -= t[0], e[5] -= t[1]), i.scale(e, e, r), a && i.rotate(e, e, a), t && (e[4] += t[0], e[5] += t[1]), e[4] += o[0], e[5] += o[1], e
        }, s.setTransform = function (e) {
            var t = this.transform;
            t && e.transform(t[0], t[1], t[2], t[3], t[4], t[5])
        };
        var l = [];
        return s.decomposeTransform = function () {
            if (this.transform) {
                var e = this.parent, r = this.transform;
                e && e.transform && (i.mul(l, e.invTransform, r), r = l);
                var n = r[0] * r[0] + r[1] * r[1], a = r[2] * r[2] + r[3] * r[3], o = this.position, s = this.scale;
                t(n - 1) && (n = Math.sqrt(n)), t(a - 1) && (a = Math.sqrt(a)), r[0] < 0 && (n = -n), r[3] < 0 && (a = -a), o[0] = r[4], o[1] = r[5], s[0] = n, s[1] = a, this.rotation = Math.atan2(-r[1] / a, r[0] / n)
            }
        }, s.transformCoordToLocal = function (e, t) {
            var i = [e, t], n = this.invTransform;
            return n && r.applyTransform(i, i, n), i
        }, s.transformCoordToGlobal = function (e, t) {
            var i = [e, t], n = this.transform;
            return n && r.applyTransform(i, i, n), i
        }, o
    }), t("zrender/animation/easing", [], function () {
        var e = {
            linear: function (e) {
                return e
            }, quadraticIn: function (e) {
                return e * e
            }, quadraticOut: function (e) {
                return e * (2 - e)
            }, quadraticInOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
            }, cubicIn: function (e) {
                return e * e * e
            }, cubicOut: function (e) {
                return --e * e * e + 1
            }, cubicInOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
            }, quarticIn: function (e) {
                return e * e * e * e
            }, quarticOut: function (e) {
                return 1 - --e * e * e * e
            }, quarticInOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
            }, quinticIn: function (e) {
                return e * e * e * e * e
            }, quinticOut: function (e) {
                return --e * e * e * e * e + 1
            }, quinticInOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
            }, sinusoidalIn: function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            }, sinusoidalOut: function (e) {
                return Math.sin(e * Math.PI / 2)
            }, sinusoidalInOut: function (e) {
                return .5 * (1 - Math.cos(Math.PI * e))
            }, exponentialIn: function (e) {
                return 0 === e ? 0 : Math.pow(1024, e - 1)
            }, exponentialOut: function (e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            }, exponentialInOut: function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
            }, circularIn: function (e) {
                return 1 - Math.sqrt(1 - e * e)
            }, circularOut: function (e) {
                return Math.sqrt(1 - --e * e)
            }, circularInOut: function (e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }, elasticIn: function (e) {
                var t, i = .1, r = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || 1 > i ? (i = 1, t = r / 4) : t = r * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
            }, elasticOut: function (e) {
                var t, i = .1, r = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || 1 > i ? (i = 1, t = r / 4) : t = r * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
            }, elasticInOut: function (e) {
                var t, i = .1, r = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || 1 > i ? (i = 1, t = r / 4) : t = r * Math.asin(1 / i) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
            }, backIn: function (e) {
                var t = 1.70158;
                return e * e * ((t + 1) * e - t)
            }, backOut: function (e) {
                var t = 1.70158;
                return --e * e * ((t + 1) * e + t) + 1
            }, backInOut: function (e) {
                var t = 2.5949095;
                return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
            }, bounceIn: function (t) {
                return 1 - e.bounceOut(1 - t)
            }, bounceOut: function (e) {
                return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }, bounceInOut: function (t) {
                return .5 > t ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5
            }
        };
        return e
    }), t("zrender/animation/Clip", ["require", "./easing"], function (e) {
        function t(e) {
            this._target = e.target, this._life = e.life || 1e3, this._delay = e.delay || 0, this._initialized = !1, this.loop = null == e.loop ? !1 : e.loop, this.gap = e.gap || 0, this.easing = e.easing || "Linear", this.onframe = e.onframe, this.ondestroy = e.ondestroy, this.onrestart = e.onrestart
        }

        var i = e("./easing");
        return t.prototype = {
            constructor: t, step: function (e) {
                this._initialized || (this._startTime = (new Date).getTime() + this._delay, this._initialized = !0);
                var t = (e - this._startTime) / this._life;
                if (!(0 > t)) {
                    t = Math.min(t, 1);
                    var r = this.easing, n = "string" == typeof r ? i[r] : r, a = "function" == typeof n ? n(t) : t;
                    return this.fire("frame", a), 1 == t ? this.loop ? (this.restart(), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            }, restart: function () {
                var e = (new Date).getTime(), t = (e - this._startTime) % this._life;
                this._startTime = (new Date).getTime() - t + this.gap, this._needsRemove = !1
            }, fire: function (e, t) {
                e = "on" + e, this[e] && this[e](this._target, t)
            }
        }, t
    }), t("zrender/tool/color", ["require"], function (e) {
        function t(e) {
            return e = Math.round(e), 0 > e ? 0 : e > 255 ? 255 : e
        }

        function i(e) {
            return e = Math.round(e), 0 > e ? 0 : e > 360 ? 360 : e
        }

        function r(e) {
            return 0 > e ? 0 : e > 1 ? 1 : e
        }

        function n(e) {
            return t(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 * 255 : parseInt(e, 10))
        }

        function a(e) {
            return r(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 : parseFloat(e))
        }

        function o(e, t, i) {
            return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? e + (t - e) * i * 6 : 1 > 2 * i ? t : 2 > 3 * i ? e + (t - e) * (2 / 3 - i) * 6 : e
        }

        function s(e, t, i) {
            return e + (t - e) * i
        }

        function l(e) {
            if (e) {
                e += "";
                var t = e.replace(/ /g, "").toLowerCase();
                if (t in x) return x[t].slice();
                if ("#" !== t.charAt(0)) {
                    var i = t.indexOf("("), r = t.indexOf(")");
                    if (-1 !== i && r + 1 === t.length) {
                        var o = t.substr(0, i), s = t.substr(i + 1, r - (i + 1)).split(","), l = 1;
                        switch (o) {
                            case"rgba":
                                if (4 !== s.length) return;
                                l = a(s.pop());
                            case"rgb":
                                if (3 !== s.length) return;
                                return [n(s[0]), n(s[1]), n(s[2]), l];
                            case"hsla":
                                if (4 !== s.length) return;
                                return s[3] = a(s[3]), c(s);
                            case"hsl":
                                if (3 !== s.length) return;
                                return c(s);
                            default:
                                return
                        }
                    }
                } else {
                    if (4 === t.length) {
                        var u = parseInt(t.substr(1), 16);
                        if (!(u >= 0 && 4095 >= u)) return;
                        return [(3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1]
                    }
                    if (7 === t.length) {
                        var u = parseInt(t.substr(1), 16);
                        if (!(u >= 0 && 16777215 >= u)) return;
                        return [(16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1]
                    }
                }
            }
        }

        function c(e) {
            var i = (parseFloat(e[0]) % 360 + 360) % 360 / 360, r = a(e[1]), n = a(e[2]),
                s = .5 >= n ? n * (r + 1) : n + r - n * r, l = 2 * n - s,
                c = [t(255 * o(l, s, i + 1 / 3)), t(255 * o(l, s, i)), t(255 * o(l, s, i - 1 / 3))];
            return 4 === e.length && (c[3] = e[3]), c
        }

        function u(e) {
            if (e) {
                var t, i, r = e[0] / 255, n = e[1] / 255, a = e[2] / 255, o = Math.min(r, n, a), s = Math.max(r, n, a),
                    l = s - o, c = (s + o) / 2;
                if (0 === l) t = 0, i = 0; else {
                    i = .5 > c ? l / (s + o) : l / (2 - s - o);
                    var u = ((s - r) / 6 + l / 2) / l, h = ((s - n) / 6 + l / 2) / l, d = ((s - a) / 6 + l / 2) / l;
                    r === s ? t = d - h : n === s ? t = 1 / 3 + u - d : a === s && (t = 2 / 3 + h - u), 0 > t && (t += 1), t > 1 && (t -= 1)
                }
                var p = [360 * t, i, c];
                return null != e[3] && p.push(e[3]), p
            }
        }

        function h(e, t) {
            var i = l(e);
            if (i) {
                for (var r = 0; 3 > r; r++) 0 > t ? i[r] = i[r] * (1 - t) | 0 : i[r] = (255 - i[r]) * t + i[r] | 0;
                return y(i, 4 === i.length ? "rgba" : "rgb")
            }
        }

        function d(e, t) {
            var i = l(e);
            return i ? ((1 << 24) + (i[0] << 16) + (i[1] << 8) + +i[2]).toString(16).slice(1) : void 0
        }

        function p(e, i, r) {
            if (i && i.length && e >= 0 && 1 >= e) {
                r = r || [0, 0, 0, 0];
                var n = e * (i.length - 1), a = Math.floor(n), o = Math.ceil(n), l = i[a], c = i[o], u = n - a;
                return r[0] = t(s(l[0], c[0], u)), r[1] = t(s(l[1], c[1], u)), r[2] = t(s(l[2], c[2], u)), r[3] = t(s(l[3], c[3], u)), r
            }
        }

        function f(e, i, n) {
            if (i && i.length && e >= 0 && 1 >= e) {
                var a = e * (i.length - 1), o = Math.floor(a), c = Math.ceil(a), u = l(i[o]), h = l(i[c]), d = a - o,
                    p = y([t(s(u[0], h[0], d)), t(s(u[1], h[1], d)), t(s(u[2], h[2], d)), r(s(u[3], h[3], d))], "rgba");
                return n ? {color: p, leftIndex: o, rightIndex: c, value: a} : p
            }
        }

        function g(e, t) {
            if (!(2 !== e.length || e[1] < e[0])) {
                for (var i = f(e[0], t, !0), r = f(e[1], t, !0), n = [{
                    color: i.color,
                    offset: 0
                }], a = r.value - i.value, o = Math.max(i.value, i.rightIndex), s = Math.min(r.value, r.leftIndex), l = o; a > 0 && s >= l; l++) n.push({
                    color: t[l],
                    offset: (l - i.value) / a
                });
                return n.push({color: r.color, offset: 1}), n
            }
        }

        function m(e, t, r, n) {
            return e = l(e), e ? (e = u(e), null != t && (e[0] = i(t)), null != r && (e[1] = a(r)), null != n && (e[2] = a(n)), y(c(e), "rgba")) : void 0
        }

        function v(e, t) {
            return e = l(e), e && null != t ? (e[3] = r(t), y(e, "rgba")) : void 0
        }

        function y(e, t) {
            return ("rgb" === t || "hsv" === t || "hsl" === t) && (e = e.slice(0, 3)), t + "(" + e.join(",") + ")"
        }

        var x = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        };
        return {
            parse: l,
            lift: h,
            toHex: d,
            fastMapToColor: p,
            mapToColor: f,
            mapIntervalToColor: g,
            modifyHSL: m,
            modifyAlpha: v,
            stringify: y
        }
    }), t("zrender/animation/Animator", ["require", "./Clip", "../tool/color", "../core/util"], function (e) {
        function t(e, t) {
            return e[t]
        }

        function i(e, t, i) {
            e[t] = i
        }

        function r(e, t, i) {
            return (t - e) * i + e
        }

        function n(e, t, i) {
            return i > .5 ? t : e
        }

        function a(e, t, i, n, a) {
            var o = e.length;
            if (1 == a) for (var s = 0; o > s; s++) n[s] = r(e[s], t[s], i); else for (var l = e[0].length, s = 0; o > s; s++) for (var c = 0; l > c; c++) n[s][c] = r(e[s][c], t[s][c], i)
        }

        function o(e, t, i) {
            var r = e.length, n = t.length;
            if (r !== n) {
                var a = r > n;
                if (a) e.length = n; else for (var o = r; n > o; o++) e.push(1 === i ? t[o] : v.call(t[o]))
            }
        }

        function s(e, t, i) {
            if (e === t) return !0;
            var r = e.length;
            if (r !== t.length) return !1;
            if (1 === i) {
                for (var n = 0; r > n; n++) if (e[n] !== t[n]) return !1
            } else for (var a = e[0].length, n = 0; r > n; n++) for (var o = 0; a > o; o++) if (e[n][o] !== t[n][o]) return !1;
            return !0
        }

        function l(e, t, i, r, n, a, o, s, l) {
            var u = e.length;
            if (1 == l) for (var h = 0; u > h; h++) s[h] = c(e[h], t[h], i[h], r[h], n, a, o); else for (var d = e[0].length, h = 0; u > h; h++) for (var p = 0; d > p; p++) s[h][p] = c(e[h][p], t[h][p], i[h][p], r[h][p], n, a, o)
        }

        function c(e, t, i, r, n, a, o) {
            var s = .5 * (i - e), l = .5 * (r - t);
            return (2 * (t - i) + s + l) * o + (-3 * (t - i) - 2 * s - l) * a + s * n + t
        }

        function u(e) {
            if (m(e)) {
                var t = e.length;
                if (m(e[0])) {
                    for (var i = [], r = 0; t > r; r++) i.push(v.call(e[r]));
                    return i
                }
                return v.call(e)
            }
            return e
        }

        function h(e) {
            return e[0] = Math.floor(e[0]), e[1] = Math.floor(e[1]), e[2] = Math.floor(e[2]), "rgba(" + e.join(",") + ")"
        }

        function d(e, t, i, u, d) {
            var g = e._getter, v = e._setter, y = "spline" === t, x = u.length;
            if (x) {
                var _, b = u[0].value, w = m(b), M = !1, S = !1, A = w && m(b[0]) ? 2 : 1;
                u.sort(function (e, t) {
                    return e.time - t.time
                }), _ = u[x - 1].time;
                for (var z = [], C = [], L = u[0].value, I = !0, T = 0; x > T; T++) {
                    z.push(u[T].time / _);
                    var D = u[T].value;
                    if (w && s(D, L, A) || !w && D === L || (I = !1), L = D, "string" == typeof D) {
                        var P = f.parse(D);
                        P ? (D = P, M = !0) : S = !0
                    }
                    C.push(D)
                }
                if (!I) {
                    if (w) {
                        for (var k = C[x - 1], T = 0; x - 1 > T; T++) o(C[T], k, A);
                        o(g(e._target, d), k, A)
                    }
                    var V, R, O, E, q, B, N = 0, G = 0;
                    if (M) var F = [0, 0, 0, 0];
                    var Z = function (e, t) {
                        var i;
                        if (G > t) {
                            for (V = Math.min(N + 1, x - 1), i = V; i >= 0 && !(z[i] <= t); i--) ;
                            i = Math.min(i, x - 2)
                        } else {
                            for (i = N; x > i && !(z[i] > t); i++) ;
                            i = Math.min(i - 1, x - 2)
                        }
                        N = i, G = t;
                        var o = z[i + 1] - z[i];
                        if (0 !== o) if (R = (t - z[i]) / o, y) if (E = C[i], O = C[0 === i ? i : i - 1], q = C[i > x - 2 ? x - 1 : i + 1], B = C[i > x - 3 ? x - 1 : i + 2], w) l(O, E, q, B, R, R * R, R * R * R, g(e, d), A); else {
                            var s;
                            if (M) s = l(O, E, q, B, R, R * R, R * R * R, F, 1), s = h(F); else {
                                if (S) return n(E, q, R);
                                s = c(O, E, q, B, R, R * R, R * R * R)
                            }
                            v(e, d, s)
                        } else if (w) a(C[i], C[i + 1], R, g(e, d), A); else {
                            var s;
                            if (M) a(C[i], C[i + 1], R, F, 1), s = h(F); else {
                                if (S) return n(C[i], C[i + 1], R);
                                s = r(C[i], C[i + 1], R)
                            }
                            v(e, d, s)
                        }
                    }, H = new p({
                        target: e._target,
                        life: _,
                        loop: e._loop,
                        delay: e._delay,
                        onframe: Z,
                        ondestroy: i
                    });
                    return t && "spline" !== t && (H.easing = t), H
                }
            }
        }

        var p = e("./Clip"), f = e("../tool/color"), g = e("../core/util"), m = g.isArrayLike,
            v = Array.prototype.slice, y = function (e, r, n, a) {
                this._tracks = {}, this._target = e, this._loop = r || !1, this._getter = n || t, this._setter = a || i, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
            };
        return y.prototype = {
            when: function (e, t) {
                var i = this._tracks;
                for (var r in t) {
                    if (!i[r]) {
                        i[r] = [];
                        var n = this._getter(this._target, r);
                        if (null == n) continue;
                        0 !== e && i[r].push({time: 0, value: u(n)})
                    }
                    i[r].push({time: e, value: t[r]})
                }
                return this
            }, during: function (e) {
                return this._onframeList.push(e), this
            }, _doneCallback: function () {
                this._tracks = {}, this._clipList.length = 0;
                for (var e = this._doneList, t = e.length, i = 0; t > i; i++) e[i].call(this)
            }, start: function (e) {
                var t, i = this, r = 0, n = function () {
                    r--, r || i._doneCallback()
                };
                for (var a in this._tracks) {
                    var o = d(this, e, n, this._tracks[a], a);
                    o && (this._clipList.push(o), r++, this.animation && this.animation.addClip(o), t = o)
                }
                if (t) {
                    var s = t.onframe;
                    t.onframe = function (e, t) {
                        s(e, t);
                        for (var r = 0; r < i._onframeList.length; r++) i._onframeList[r](e, t)
                    }
                }
                return r || this._doneCallback(), this
            }, stop: function (e) {
                for (var t = this._clipList, i = this.animation, r = 0; r < t.length; r++) {
                    var n = t[r];
                    e && n.onframe(this._target, 1), i && i.removeClip(n)
                }
                t.length = 0
            }, delay: function (e) {
                return this._delay = e, this
            }, done: function (e) {
                return e && this._doneList.push(e), this
            }, getClips: function () {
                return this._clipList
            }
        }, y
    }), t("zrender/config", [], function () {
        var e = 1;
        "undefined" != typeof window && (e = Math.max(window.devicePixelRatio || 1, 1));
        var t = {debugMode: 0, devicePixelRatio: e};
        return t
    }), t("zrender/core/log", ["require", "../config"], function (e) {
        var t = e("../config");
        return function () {
            if (0 !== t.debugMode) if (1 == t.debugMode) for (var e in arguments) throw new Error(arguments[e]); else if (t.debugMode > 1) for (var e in arguments) console.log(arguments[e])
        }
    }), t("zrender/mixin/Animatable", ["require", "../animation/Animator", "../core/util", "../core/log"], function (e) {
        var t = e("../animation/Animator"), i = e("../core/util"), r = i.isString, n = i.isFunction, a = i.isObject,
            o = e("../core/log"), s = function () {
                this.animators = []
            };
        return s.prototype = {
            constructor: s, animate: function (e, r) {
                var n, a = !1, s = this, l = this.__zr;
                if (e) {
                    var c = e.split("."), u = s;
                    a = "shape" === c[0];
                    for (var h = 0, d = c.length; d > h; h++) u && (u = u[c[h]]);
                    u && (n = u)
                } else n = s;
                if (!n) return void o('Property "' + e + '" is not existed in element ' + s.id);
                var p = s.animators, f = new t(n, r);
                return f.during(function (e) {
                    s.dirty(a)
                }).done(function () {
                    p.splice(i.indexOf(p, f), 1)
                }), p.push(f), l && l.animation.addAnimator(f), f
            }, stopAnimation: function (e) {
                for (var t = this.animators, i = t.length, r = 0; i > r; r++) t[r].stop(e);
                return t.length = 0, this
            }, animateTo: function (e, t, i, a, o) {
                function s() {
                    c--, c || o && o()
                }

                r(i) ? (o = a, a = i, i = 0) : n(a) ? (o = a, a = "linear", i = 0) : n(i) ? (o = i, i = 0) : n(t) ? (o = t, t = 500) : t || (t = 500), this.stopAnimation(), this._animateToShallow("", this, e, t, i, a, o);
                var l = this.animators.slice(), c = l.length;
                c || o && o();
                for (var u = 0; u < l.length; u++) l[u].done(s).start(a)
            }, _animateToShallow: function (e, t, r, n, o) {
                var s = {}, l = 0;
                for (var c in r) if (null != t[c]) a(r[c]) && !i.isArrayLike(r[c]) ? this._animateToShallow(e ? e + "." + c : c, t[c], r[c], n, o) : (s[c] = r[c], l++); else if (null != r[c]) if (e) {
                    var u = {};
                    u[e] = {}, u[e][c] = r[c], this.attr(u)
                } else this.attr(c, r[c]);
                return l > 0 && this.animate(e, !1).when(null == n ? 500 : n, s).delay(o || 0), this
            }
        }, s
    }), t("zrender/Element", ["require", "./core/guid", "./mixin/Eventful", "./mixin/Transformable", "./mixin/Animatable", "./core/util"], function (e) {
        var t = e("./core/guid"), i = e("./mixin/Eventful"), r = e("./mixin/Transformable"),
            n = e("./mixin/Animatable"), a = e("./core/util"), o = function (e) {
                r.call(this, e), i.call(this, e), n.call(this, e), this.id = e.id || t()
            };
        return o.prototype = {
            type: "element",
            name: "",
            __zr: null,
            ignore: !1,
            clipPath: null,
            drift: function (e, t) {
                switch (this.draggable) {
                    case"horizontal":
                        t = 0;
                        break;
                    case"vertical":
                        e = 0
                }
                var i = this.transform;
                i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += e, i[5] += t, this.decomposeTransform(), this.dirty()
            },
            beforeUpdate: function () {
            },
            afterUpdate: function () {
            },
            update: function () {
                this.updateTransform()
            },
            traverse: function (e, t) {
            },
            attrKV: function (e, t) {
                if ("position" === e || "scale" === e || "origin" === e) {
                    if (t) {
                        var i = this[e];
                        i || (i = this[e] = []), i[0] = t[0], i[1] = t[1]
                    }
                } else this[e] = t
            },
            hide: function () {
                this.ignore = !0, this.__zr && this.__zr.refresh()
            },
            show: function () {
                this.ignore = !1, this.__zr && this.__zr.refresh()
            },
            attr: function (e, t) {
                if ("string" == typeof e) this.attrKV(e, t); else if (a.isObject(e)) for (var i in e) e.hasOwnProperty(i) && this.attrKV(i, e[i]);
                return this.dirty(), this
            },
            setClipPath: function (e) {
                var t = this.__zr;
                t && e.addSelfToZr(t), this.clipPath && this.clipPath !== e && this.removeClipPath(), this.clipPath = e, e.__zr = t, e.__clipTarget = this, this.dirty()
            },
            removeClipPath: function () {
                var e = this.clipPath;
                e && (e.__zr && e.removeSelfFromZr(e.__zr), e.__zr = null, e.__clipTarget = null, this.clipPath = null, this.dirty())
            },
            addSelfToZr: function (e) {
                this.__zr = e;
                var t = this.animators;
                if (t) for (var i = 0; i < t.length; i++) e.animation.addAnimator(t[i]);
                this.clipPath && this.clipPath.addSelfToZr(e)
            },
            removeSelfFromZr: function (e) {
                this.__zr = null;
                var t = this.animators;
                if (t) for (var i = 0; i < t.length; i++) e.animation.removeAnimator(t[i]);
                this.clipPath && this.clipPath.removeSelfFromZr(e)
            }
        }, a.mixin(o, n), a.mixin(o, r), a.mixin(o, i), o
    }), t("zrender/container/Group", ["require", "../core/util", "../Element", "../core/BoundingRect"], function (e) {
        var t = e("../core/util"), i = e("../Element"), r = e("../core/BoundingRect"), n = function (e) {
            e = e || {}, i.call(this, e);
            for (var t in e) this[t] = e[t];
            this._children = [], this.__storage = null, this.__dirty = !0
        };
        return n.prototype = {
            constructor: n, type: "group", children: function () {
                return this._children.slice()
            }, childAt: function (e) {
                return this._children[e]
            }, childOfName: function (e) {
                for (var t = this._children, i = 0; i < t.length; i++) if (t[i].name === e) return t[i]
            }, childCount: function () {
                return this._children.length
            }, add: function (e) {
                return e && e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), this
            }, addBefore: function (e, t) {
                if (e && e !== this && e.parent !== this && t && t.parent === this) {
                    var i = this._children, r = i.indexOf(t);
                    r >= 0 && (i.splice(r, 0, e), this._doAdd(e))
                }
                return this
            }, _doAdd: function (e) {
                e.parent && e.parent.remove(e), e.parent = this;
                var t = this.__storage, i = this.__zr;
                t && t !== e.__storage && (t.addToMap(e), e instanceof n && e.addChildrenToStorage(t)), i && i.refresh()
            }, remove: function (e) {
                var i = this.__zr, r = this.__storage, a = this._children, o = t.indexOf(a, e);
                return 0 > o ? this : (a.splice(o, 1), e.parent = null, r && (r.delFromMap(e.id), e instanceof n && e.delChildrenFromStorage(r)), i && i.refresh(), this)
            }, removeAll: function () {
                var e, t, i = this._children, r = this.__storage;
                for (t = 0; t < i.length; t++) e = i[t], r && (r.delFromMap(e.id), e instanceof n && e.delChildrenFromStorage(r)), e.parent = null;
                return i.length = 0, this
            }, eachChild: function (e, t) {
                for (var i = this._children, r = 0; r < i.length; r++) {
                    var n = i[r];
                    e.call(t, n, r)
                }
                return this
            }, traverse: function (e, t) {
                for (var i = 0; i < this._children.length; i++) {
                    var r = this._children[i];
                    e.call(t, r), "group" === r.type && r.traverse(e, t)
                }
                return this
            }, addChildrenToStorage: function (e) {
                for (var t = 0; t < this._children.length; t++) {
                    var i = this._children[t];
                    e.addToMap(i), i instanceof n && i.addChildrenToStorage(e)
                }
            }, delChildrenFromStorage: function (e) {
                for (var t = 0; t < this._children.length; t++) {
                    var i = this._children[t];
                    e.delFromMap(i.id), i instanceof n && i.delChildrenFromStorage(e)
                }
            }, dirty: function () {
                return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
            }, getBoundingRect: function (e) {
                for (var t = null, i = new r(0, 0, 0, 0), n = e || this._children, a = [], o = 0; o < n.length; o++) {
                    var s = n[o];
                    if (!s.ignore && !s.invisible) {
                        var l = s.getBoundingRect(), c = s.getLocalTransform(a);
                        c ? (i.copy(l), i.applyTransform(c), t = t || i.clone(), t.union(i)) : (t = t || l.clone(), t.union(l))
                    }
                }
                return t || i
            }
        }, t.inherits(n, i), n
    }), t("echarts/view/Component", ["require", "zrender/container/Group", "../util/component", "../util/clazz"], function (e) {
        var t = e("zrender/container/Group"), i = e("../util/component"), r = e("../util/clazz"), n = function () {
            this.group = new t, this.uid = i.getUID("viewComponent")
        };
        n.prototype = {
            constructor: n, init: function (e, t) {
            }, render: function (e, t, i, r) {
            }, dispose: function () {
            }
        };
        var a = n.prototype;
        return a.updateView = a.updateLayout = a.updateVisual = function (e, t, i, r) {
        }, r.enableClassExtend(n), r.enableClassManagement(n, {registerWhenExtend: !0}), n
    }), t("echarts/view/Chart", ["require", "zrender/container/Group", "../util/component", "../util/clazz"], function (e) {
        function t() {
            this.group = new n, this.uid = a.getUID("viewChart")
        }

        function i(e, t) {
            if (e && (e.trigger(t), "group" === e.type)) for (var r = 0; r < e.childCount(); r++) i(e.childAt(r), t)
        }

        function r(e, t, r) {
            if (null != t.dataIndex) {
                var n = e.getItemGraphicEl(t.dataIndex);
                i(n, r)
            } else if (t.name) {
                var a = e.indexOfName(t.name), n = e.getItemGraphicEl(a);
                i(n, r)
            } else e.eachItemGraphicEl(function (e) {
                i(e, r)
            })
        }

        var n = e("zrender/container/Group"), a = e("../util/component"), o = e("../util/clazz");
        t.prototype = {
            type: "chart", init: function (e, t) {
            }, render: function (e, t, i, r) {
            }, highlight: function (e, t, i, n) {
                r(e.getData(), n, "emphasis")
            }, downplay: function (e, t, i, n) {
                r(e.getData(), n, "normal")
            }, remove: function (e, t) {
                this.group.removeAll()
            }, dispose: function () {
            }
        };
        var s = t.prototype;
        return s.updateView = s.updateLayout = s.updateVisual = function (e, t, i, r) {
            this.render(e, t, i, r)
        }, o.enableClassExtend(t), o.enableClassManagement(t, {registerWhenExtend: !0}), t
    }), t("zrender/graphic/Style", ["require"], function (e) {
        var t = ["lineCap", "lineJoin", "miterLimit", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowColor"],
            i = function (e) {
                this.extendFrom(e)
            };
        i.prototype = {
            constructor: i,
            fill: "#000000",
            stroke: null,
            opacity: 1,
            lineDash: null,
            lineDashOffset: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            lineWidth: 1,
            strokeNoScale: !1,
            text: null,
            textFill: "#000",
            textStroke: null,
            textPosition: "inside",
            textBaseline: null,
            textAlign: null,
            textDistance: 5,
            textShadowBlur: 0,
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            bind: function (e, i) {
                for (var r = this.fill, n = this.stroke, a = 0; a < t.length; a++) {
                    var o = t[a];
                    null != this[o] && (e[o] = this[o])
                }
                if (null != n) {
                    var s = this.lineWidth;
                    e.lineWidth = s / (this.strokeNoScale && i && i.getLineScale ? i.getLineScale() : 1)
                }
                null != r && (e.fillStyle = r.canvasGradient ? r.canvasGradient : r), null != n && (e.strokeStyle = n.canvasGradient ? n.canvasGradient : n), null != this.opacity && (e.globalAlpha = this.opacity)
            },
            extendFrom: function (e, t) {
                if (e) {
                    var i = this;
                    for (var r in e) !e.hasOwnProperty(r) || !t && i.hasOwnProperty(r) || (i[r] = e[r])
                }
            },
            set: function (e, t) {
                "string" == typeof e ? this[e] = t : this.extendFrom(e, !0)
            },
            clone: function () {
                var e = new this.constructor;
                return e.extendFrom(this, !0), e
            }
        };
        var r, n, a = i.prototype;
        for (n = 0; n < t.length; n++) r = t[n], r in a || (a[r] = null);
        return i
    }), t("zrender/graphic/mixin/RectText", ["require", "../../contain/text", "../../core/BoundingRect"], function (e) {
        function t(e, t) {
            return "string" == typeof e ? e.lastIndexOf("%") >= 0 ? parseFloat(e) / 100 * t : parseFloat(e) : e
        }

        function i(e, t) {
            e.transform(t[0], t[1], t[2], t[3], t[4], t[5])
        }

        var r = e("../../contain/text"), n = e("../../core/BoundingRect"), a = new n, o = function () {
        };
        return o.prototype = {
            constructor: o, drawRectText: function (e, n, o) {
                var s = this.style, l = s.text;
                if (null != l && (l += ""), l) {
                    var c, u, h = s.textPosition, d = s.textDistance, p = s.textAlign, f = s.textFont || s.font,
                        g = s.textBaseline;
                    o = o || r.getBoundingRect(l, f, p, g);
                    var m = this.transform, v = this.invTransform;
                    if (m && (a.copy(n), a.applyTransform(m), n = a, i(e, v)), h instanceof Array) c = n.x + t(h[0], n.width), u = n.y + t(h[1], n.height), p = p || "left", g = g || "top"; else {
                        var y = r.adjustTextPositionOnRect(h, n, o, d);
                        c = y.x, u = y.y, p = p || y.textAlign,
                            g = g || y.textBaseline
                    }
                    e.textAlign = p, e.textBaseline = g;
                    var x = s.textFill, _ = s.textStroke;
                    x && (e.fillStyle = x), _ && (e.strokeStyle = _), e.font = f, e.shadowColor = s.textShadowColor, e.shadowBlur = s.textShadowBlur, e.shadowOffsetX = s.textShadowOffsetX, e.shadowOffsetY = s.textShadowOffsetY;
                    for (var b = l.split("\n"), w = 0; w < b.length; w++) x && e.fillText(b[w], c, u), _ && e.strokeText(b[w], c, u), u += o.lineHeight;
                    m && i(e, m)
                }
            }
        }, o
    }), t("zrender/graphic/Displayable", ["require", "../core/util", "./Style", "../Element", "./mixin/RectText"], function (e) {
        function t(e) {
            e = e || {}, n.call(this, e);
            for (var t in e) e.hasOwnProperty(t) && "style" !== t && (this[t] = e[t]);
            this.style = new r(e.style), this._rect = null, this.__clipPaths = []
        }

        var i = e("../core/util"), r = e("./Style"), n = e("../Element"), a = e("./mixin/RectText");
        return t.prototype = {
            constructor: t,
            type: "displayable",
            __dirty: !0,
            invisible: !1,
            z: 0,
            z2: 0,
            zlevel: 0,
            draggable: !1,
            dragging: !1,
            silent: !1,
            culling: !1,
            cursor: "pointer",
            rectHover: !1,
            beforeBrush: function (e) {
            },
            afterBrush: function (e) {
            },
            brush: function (e) {
            },
            getBoundingRect: function () {
            },
            contain: function (e, t) {
                return this.rectContain(e, t)
            },
            traverse: function (e, t) {
                e.call(t, this)
            },
            rectContain: function (e, t) {
                var i = this.transformCoordToLocal(e, t), r = this.getBoundingRect();
                return r.contain(i[0], i[1])
            },
            dirty: function () {
                this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
            },
            animateStyle: function (e) {
                return this.animate("style", e)
            },
            attrKV: function (e, t) {
                "style" !== e ? n.prototype.attrKV.call(this, e, t) : this.style.set(t)
            },
            setStyle: function (e, t) {
                return this.style.set(e, t), this.dirty(), this
            }
        }, i.inherits(t, n), i.mixin(t, a), t
    }), t("zrender/core/curve", ["require", "./vector"], function (e) {
        function t(e) {
            return e > -_ && _ > e
        }

        function i(e) {
            return e > _ || -_ > e
        }

        function r(e, t, i, r, n) {
            var a = 1 - n;
            return a * a * (a * e + 3 * n * t) + n * n * (n * r + 3 * a * i)
        }

        function n(e, t, i, r, n) {
            var a = 1 - n;
            return 3 * (((t - e) * a + 2 * (i - t) * n) * a + (r - i) * n * n)
        }

        function a(e, i, r, n, a, o) {
            var s = n + 3 * (i - r) - e, l = 3 * (r - 2 * i + e), c = 3 * (i - e), u = e - a, h = l * l - 3 * s * c,
                d = l * c - 9 * s * u, p = c * c - 3 * l * u, f = 0;
            if (t(h) && t(d)) if (t(l)) o[0] = 0; else {
                var g = -c / l;
                g >= 0 && 1 >= g && (o[f++] = g)
            } else {
                var m = d * d - 4 * h * p;
                if (t(m)) {
                    var v = d / h, g = -l / s + v, _ = -v / 2;
                    g >= 0 && 1 >= g && (o[f++] = g), _ >= 0 && 1 >= _ && (o[f++] = _)
                } else if (m > 0) {
                    var M = x(m), S = h * l + 1.5 * s * (-d + M), A = h * l + 1.5 * s * (-d - M);
                    S = 0 > S ? -y(-S, w) : y(S, w), A = 0 > A ? -y(-A, w) : y(A, w);
                    var g = (-l - (S + A)) / (3 * s);
                    g >= 0 && 1 >= g && (o[f++] = g)
                } else {
                    var z = (2 * h * l - 3 * s * d) / (2 * x(h * h * h)), C = Math.acos(z) / 3, L = x(h),
                        I = Math.cos(C), g = (-l - 2 * L * I) / (3 * s), _ = (-l + L * (I + b * Math.sin(C))) / (3 * s),
                        T = (-l + L * (I - b * Math.sin(C))) / (3 * s);
                    g >= 0 && 1 >= g && (o[f++] = g), _ >= 0 && 1 >= _ && (o[f++] = _), T >= 0 && 1 >= T && (o[f++] = T)
                }
            }
            return f
        }

        function o(e, r, n, a, o) {
            var s = 6 * n - 12 * r + 6 * e, l = 9 * r + 3 * a - 3 * e - 9 * n, c = 3 * r - 3 * e, u = 0;
            if (t(l)) {
                if (i(s)) {
                    var h = -c / s;
                    h >= 0 && 1 >= h && (o[u++] = h)
                }
            } else {
                var d = s * s - 4 * l * c;
                if (t(d)) o[0] = -s / (2 * l); else if (d > 0) {
                    var p = x(d), h = (-s + p) / (2 * l), f = (-s - p) / (2 * l);
                    h >= 0 && 1 >= h && (o[u++] = h), f >= 0 && 1 >= f && (o[u++] = f)
                }
            }
            return u
        }

        function s(e, t, i, r, n, a) {
            var o = (t - e) * n + e, s = (i - t) * n + t, l = (r - i) * n + i, c = (s - o) * n + o, u = (l - s) * n + s,
                h = (u - c) * n + c;
            a[0] = e, a[1] = o, a[2] = c, a[3] = h, a[4] = h, a[5] = u, a[6] = l, a[7] = r
        }

        function l(e, t, i, n, a, o, s, l, c, u, h) {
            var d, p, f, g, m, y = .005, b = 1 / 0;
            M[0] = c, M[1] = u;
            for (var w = 0; 1 > w; w += .05) S[0] = r(e, i, a, s, w), S[1] = r(t, n, o, l, w), g = v(M, S), b > g && (d = w, b = g);
            b = 1 / 0;
            for (var z = 0; 32 > z && !(_ > y); z++) p = d - y, f = d + y, S[0] = r(e, i, a, s, p), S[1] = r(t, n, o, l, p), g = v(S, M), p >= 0 && b > g ? (d = p, b = g) : (A[0] = r(e, i, a, s, f), A[1] = r(t, n, o, l, f), m = v(A, M), 1 >= f && b > m ? (d = f, b = m) : y *= .5);
            return h && (h[0] = r(e, i, a, s, d), h[1] = r(t, n, o, l, d)), x(b)
        }

        function c(e, t, i, r) {
            var n = 1 - r;
            return n * (n * e + 2 * r * t) + r * r * i
        }

        function u(e, t, i, r) {
            return 2 * ((1 - r) * (t - e) + r * (i - t))
        }

        function h(e, r, n, a, o) {
            var s = e - 2 * r + n, l = 2 * (r - e), c = e - a, u = 0;
            if (t(s)) {
                if (i(l)) {
                    var h = -c / l;
                    h >= 0 && 1 >= h && (o[u++] = h)
                }
            } else {
                var d = l * l - 4 * s * c;
                if (t(d)) {
                    var h = -l / (2 * s);
                    h >= 0 && 1 >= h && (o[u++] = h)
                } else if (d > 0) {
                    var p = x(d), h = (-l + p) / (2 * s), f = (-l - p) / (2 * s);
                    h >= 0 && 1 >= h && (o[u++] = h), f >= 0 && 1 >= f && (o[u++] = f)
                }
            }
            return u
        }

        function d(e, t, i) {
            var r = e + i - 2 * t;
            return 0 === r ? .5 : (e - t) / r
        }

        function p(e, t, i, r, n) {
            var a = (t - e) * r + e, o = (i - t) * r + t, s = (o - a) * r + a;
            n[0] = e, n[1] = a, n[2] = s, n[3] = s, n[4] = o, n[5] = i
        }

        function f(e, t, i, r, n, a, o, s, l) {
            var u, h = .005, d = 1 / 0;
            M[0] = o, M[1] = s;
            for (var p = 0; 1 > p; p += .05) {
                S[0] = c(e, i, n, p), S[1] = c(t, r, a, p);
                var f = v(M, S);
                d > f && (u = p, d = f)
            }
            d = 1 / 0;
            for (var g = 0; 32 > g && !(_ > h); g++) {
                var m = u - h, y = u + h;
                S[0] = c(e, i, n, m), S[1] = c(t, r, a, m);
                var f = v(S, M);
                if (m >= 0 && d > f) u = m, d = f; else {
                    A[0] = c(e, i, n, y), A[1] = c(t, r, a, y);
                    var b = v(A, M);
                    1 >= y && d > b ? (u = y, d = b) : h *= .5
                }
            }
            return l && (l[0] = c(e, i, n, u), l[1] = c(t, r, a, u)), x(d)
        }

        var g = e("./vector"), m = g.create, v = g.distSquare, y = Math.pow, x = Math.sqrt, _ = 1e-4, b = x(3),
            w = 1 / 3, M = m(), S = m(), A = m();
        return {
            cubicAt: r,
            cubicDerivativeAt: n,
            cubicRootAt: a,
            cubicExtrema: o,
            cubicSubdivide: s,
            cubicProjectPoint: l,
            quadraticAt: c,
            quadraticDerivativeAt: u,
            quadraticRootAt: h,
            quadraticExtremum: d,
            quadraticSubdivide: p,
            quadraticProjectPoint: f
        }
    }), t("zrender/core/bbox", ["require", "./vector", "./curve"], function (e) {
        var t = e("./vector"), i = e("./curve"), r = {}, n = Math.min, a = Math.max, o = Math.sin, s = Math.cos,
            l = t.create(), c = t.create(), u = t.create(), h = 2 * Math.PI;
        return r.fromPoints = function (e, t, i) {
            if (0 !== e.length) {
                var r, o = e[0], s = o[0], l = o[0], c = o[1], u = o[1];
                for (r = 1; r < e.length; r++) o = e[r], s = n(s, o[0]), l = a(l, o[0]), c = n(c, o[1]), u = a(u, o[1]);
                t[0] = s, t[1] = c, i[0] = l, i[1] = u
            }
        }, r.fromLine = function (e, t, i, r, o, s) {
            o[0] = n(e, i), o[1] = n(t, r), s[0] = a(e, i), s[1] = a(t, r)
        }, r.fromCubic = function (e, t, r, o, s, l, c, u, h, d) {
            var p, f, g, m, v, y = [], x = [], _ = i.cubicExtrema, b = i.cubicAt, w = _(e, r, s, c, y);
            for (v = 0; w > v; v++) y[v] = b(e, r, s, c, y[v]);
            for (w = _(t, o, l, u, x), v = 0; w > v; v++) x[v] = b(t, o, l, u, x[v]);
            y.push(e, c), x.push(t, u), p = n.apply(null, y), f = a.apply(null, y), g = n.apply(null, x), m = a.apply(null, x), h[0] = p, h[1] = g, d[0] = f, d[1] = m
        }, r.fromQuadratic = function (e, t, r, o, s, l, c, u) {
            var h = i.quadraticExtremum, d = i.quadraticAt, p = a(n(h(e, r, s), 1), 0), f = a(n(h(t, o, l), 1), 0),
                g = d(e, r, s, p), m = d(t, o, l, f);
            c[0] = n(e, s, g), c[1] = n(t, l, m), u[0] = a(e, s, g), u[1] = a(t, l, m)
        }, r.fromArc = function (e, i, r, n, a, d, p, f, g) {
            var m = t.min, v = t.max;
            if (Math.abs(a - d) % h < 1e-4) return f[0] = e - r, f[1] = i - n, g[0] = e + r, void(g[1] = i + n);
            if (l[0] = s(a) * r + e, l[1] = o(a) * n + i, c[0] = s(d) * r + e, c[1] = o(d) * n + i, m(f, l, c), v(g, l, c), a %= h, 0 > a && (a += h), d %= h, 0 > d && (d += h), a > d && !p ? d += h : d > a && p && (a += h), p) {
                var y = d;
                d = a, a = y
            }
            for (var x = 0; d > x; x += Math.PI / 2) x > a && (u[0] = s(x) * r + e, u[1] = o(x) * n + i, m(f, u, f), v(g, u, g))
        }, r
    }), t("zrender/core/PathProxy", ["require", "./curve", "./vector", "./bbox", "./BoundingRect"], function (e) {
        var t = e("./curve"), i = e("./vector"), r = e("./bbox"), n = e("./BoundingRect"),
            a = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, o = [], s = [], l = [], c = [], u = Math.min, h = Math.max,
            d = Math.cos, p = Math.sin, f = Math.sqrt, g = "undefined" != typeof Float32Array, m = function () {
                this.data = [], this._len = 0, this._ctx = null, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0
            };
        return m.prototype = {
            constructor: m,
            _lineDash: null,
            _dashOffset: 0,
            _dashIdx: 0,
            _dashSum: 0,
            getContext: function () {
                return this._ctx
            },
            beginPath: function (e) {
                return this._ctx = e, e && e.beginPath(), this._len = 0, this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
            },
            moveTo: function (e, t) {
                return this.addData(a.M, e, t), this._ctx && this._ctx.moveTo(e, t), this._x0 = e, this._y0 = t, this._xi = e, this._yi = t, this
            },
            lineTo: function (e, t) {
                return this.addData(a.L, e, t), this._ctx && (this._needsDash() ? this._dashedLineTo(e, t) : this._ctx.lineTo(e, t)), this._xi = e, this._yi = t, this
            },
            bezierCurveTo: function (e, t, i, r, n, o) {
                return this.addData(a.C, e, t, i, r, n, o), this._ctx && (this._needsDash() ? this._dashedBezierTo(e, t, i, r, n, o) : this._ctx.bezierCurveTo(e, t, i, r, n, o)), this._xi = n, this._yi = o, this
            },
            quadraticCurveTo: function (e, t, i, r) {
                return this.addData(a.Q, e, t, i, r), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(e, t, i, r) : this._ctx.quadraticCurveTo(e, t, i, r)), this._xi = i, this._yi = r, this
            },
            arc: function (e, t, i, r, n, o) {
                return this.addData(a.A, e, t, i, i, r, n - r, 0, o ? 0 : 1), this._ctx && this._ctx.arc(e, t, i, r, n, o), this._xi = d(n) * i + e, this._xi = p(n) * i + e, this
            },
            arcTo: function (e, t, i, r, n) {
                return this._ctx && this._ctx.arcTo(e, t, i, r, n), this
            },
            rect: function (e, t, i, r) {
                return this._ctx && this._ctx.rect(e, t, i, r), this.addData(a.R, e, t, i, r), this
            },
            closePath: function () {
                this.addData(a.Z);
                var e = this._ctx, t = this._x0, i = this._y0;
                return e && (this._needsDash() && this._dashedLineTo(t, i), e.closePath()), this._xi = t, this._yi = i, this
            },
            fill: function (e) {
                e && e.fill(), this.toStatic()
            },
            stroke: function (e) {
                e && e.stroke(), this.toStatic()
            },
            setLineDash: function (e) {
                if (e instanceof Array) {
                    this._lineDash = e, this._dashIdx = 0;
                    for (var t = 0, i = 0; i < e.length; i++) t += e[i];
                    this._dashSum = t
                }
                return this
            },
            setLineDashOffset: function (e) {
                return this._dashOffset = e, this
            },
            len: function () {
                return this._len
            },
            setData: function (e) {
                var t = e.length;
                this.data && this.data.length == t || !g || (this.data = new Float32Array(t));
                for (var i = 0; t > i; i++) this.data[i] = e[i];
                this._len = t
            },
            appendPath: function (e) {
                e instanceof Array || (e = [e]);
                for (var t = e.length, i = 0, r = this._len, n = 0; t > n; n++) i += e[n].len();
                g && this.data instanceof Float32Array && (this.data = new Float32Array(r + i));
                for (var n = 0; t > n; n++) for (var a = e[n].data, o = 0; o < a.length; o++) this.data[r++] = a[o];
                this._len = r
            },
            addData: function (e) {
                var t = this.data;
                this._len + arguments.length > t.length && (this._expandData(), t = this.data);
                for (var i = 0; i < arguments.length; i++) t[this._len++] = arguments[i];
                this._prevCmd = e
            },
            _expandData: function () {
                if (!(this.data instanceof Array)) {
                    for (var e = [], t = 0; t < this._len; t++) e[t] = this.data[t];
                    this.data = e
                }
            },
            _needsDash: function () {
                return this._lineDash
            },
            _dashedLineTo: function (e, t) {
                var i, r, n = this._dashSum, a = this._dashOffset, o = this._lineDash, s = this._ctx, l = this._xi,
                    c = this._yi, d = e - l, p = t - c, g = f(d * d + p * p), m = l, v = c, y = o.length;
                for (d /= g, p /= g, 0 > a && (a = n + a), a %= n, m -= a * d, v -= a * p; d >= 0 && e >= m || 0 > d && m > e;) r = this._dashIdx, i = o[r], m += d * i, v += p * i, this._dashIdx = (r + 1) % y, d > 0 && l > m || 0 > d && m > l || s[r % 2 ? "moveTo" : "lineTo"](d >= 0 ? u(m, e) : h(m, e), p >= 0 ? u(v, t) : h(v, t));
                d = m - e, p = v - t, this._dashOffset = -f(d * d + p * p)
            },
            _dashedBezierTo: function (e, i, r, n, a, o) {
                var s, l, c, u, h, d = this._dashSum, p = this._dashOffset, g = this._lineDash, m = this._ctx,
                    v = this._xi, y = this._yi, x = t.cubicAt, _ = 0, b = this._dashIdx, w = g.length, M = 0;
                for (0 > p && (p = d + p), p %= d, s = 0; 1 > s; s += .1) l = x(v, e, r, a, s + .1) - x(v, e, r, a, s), c = x(y, i, n, o, s + .1) - x(y, i, n, o, s), _ += f(l * l + c * c);
                for (; w > b && (M += g[b], !(M > p)); b++) ;
                for (s = (M - p) / _; 1 >= s;) u = x(v, e, r, a, s), h = x(y, i, n, o, s), b % 2 ? m.moveTo(u, h) : m.lineTo(u, h), s += g[b] / _, b = (b + 1) % w;
                b % 2 !== 0 && m.lineTo(a, o), l = a - u, c = o - h, this._dashOffset = -f(l * l + c * c)
            },
            _dashedQuadraticTo: function (e, t, i, r) {
                var n = i, a = r;
                i = (i + 2 * e) / 3, r = (r + 2 * t) / 3, e = (this._xi + 2 * e) / 3, t = (this._yi + 2 * t) / 3, this._dashedBezierTo(e, t, i, r, n, a)
            },
            toStatic: function () {
                this.data.length = this._len, g && this.data instanceof Array && (this.data = new Float32Array(this.data))
            },
            getBoundingRect: function () {
                o[0] = o[1] = l[0] = l[1] = Number.MAX_VALUE, s[0] = s[1] = c[0] = c[1] = -Number.MAX_VALUE;
                for (var e = this.data, t = 0, u = 0, h = 0, f = 0, g = 0; g < e.length;) {
                    var m = e[g++];
                    switch (1 == g && (t = e[g], u = e[g + 1], h = t, f = u), m) {
                        case a.M:
                            h = e[g++], f = e[g++], t = h, u = f, l[0] = h, l[1] = f, c[0] = h, c[1] = f;
                            break;
                        case a.L:
                            r.fromLine(t, u, e[g], e[g + 1], l, c), t = e[g++], u = e[g++];
                            break;
                        case a.C:
                            r.fromCubic(t, u, e[g++], e[g++], e[g++], e[g++], e[g], e[g + 1], l, c), t = e[g++], u = e[g++];
                            break;
                        case a.Q:
                            r.fromQuadratic(t, u, e[g++], e[g++], e[g], e[g + 1], l, c), t = e[g++], u = e[g++];
                            break;
                        case a.A:
                            var v = e[g++], y = e[g++], x = e[g++], _ = e[g++], b = e[g++], w = e[g++] + b,
                                M = (e[g++], 1 - e[g++]);
                            1 == g && (h = d(b) * x + v, f = p(b) * _ + y), r.fromArc(v, y, x, _, b, w, M, l, c), t = d(w) * x + v, u = p(w) * _ + y;
                            break;
                        case a.R:
                            h = t = e[g++], f = u = e[g++];
                            var S = e[g++], A = e[g++];
                            r.fromLine(h, f, h + S, f + A, l, c);
                            break;
                        case a.Z:
                            t = h, u = f
                    }
                    i.min(o, o, l), i.max(s, s, c)
                }
                return 0 === g && (o[0] = o[1] = s[0] = s[1] = 0), new n(o[0], o[1], s[0] - o[0], s[1] - o[1])
            },
            rebuildPath: function (e) {
                for (var t = this.data, i = 0; i < this._len;) {
                    var r = t[i++];
                    switch (r) {
                        case a.M:
                            e.moveTo(t[i++], t[i++]);
                            break;
                        case a.L:
                            e.lineTo(t[i++], t[i++]);
                            break;
                        case a.C:
                            e.bezierCurveTo(t[i++], t[i++], t[i++], t[i++], t[i++], t[i++]);
                            break;
                        case a.Q:
                            e.quadraticCurveTo(t[i++], t[i++], t[i++], t[i++]);
                            break;
                        case a.A:
                            var n = t[i++], o = t[i++], s = t[i++], l = t[i++], c = t[i++], u = t[i++], h = t[i++],
                                d = t[i++], p = s > l ? s : l, f = s > l ? 1 : s / l, g = s > l ? l / s : 1,
                                m = Math.abs(s - l) > .001;
                            m ? (e.translate(n, o), e.rotate(h), e.scale(f, g), e.arc(0, 0, p, c, c + u, 1 - d), e.scale(1 / f, 1 / g), e.rotate(-h), e.translate(-n, -o)) : e.arc(n, o, p, c, c + u, 1 - d);
                            break;
                        case a.R:
                            e.rect(t[i++], t[i++], t[i++], t[i++]);
                            break;
                        case a.Z:
                            e.closePath()
                    }
                }
            }
        }, m.CMD = a, m
    }), t("zrender/contain/line", [], function () {
        return {
            containStroke: function (e, t, i, r, n, a, o) {
                if (0 === n) return !1;
                var s = n, l = 0, c = e;
                if (o > t + s && o > r + s || t - s > o && r - s > o || a > e + s && a > i + s || e - s > a && i - s > a) return !1;
                if (e === i) return Math.abs(a - e) <= s / 2;
                l = (t - r) / (e - i), c = (e * r - i * t) / (e - i);
                var u = l * a - o + c, h = u * u / (l * l + 1);
                return s / 2 * s / 2 >= h
            }
        }
    }), t("zrender/contain/cubic", ["require", "../core/curve"], function (e) {
        var t = e("../core/curve");
        return {
            containStroke: function (e, i, r, n, a, o, s, l, c, u, h) {
                if (0 === c) return !1;
                var d = c;
                if (h > i + d && h > n + d && h > o + d && h > l + d || i - d > h && n - d > h && o - d > h && l - d > h || u > e + d && u > r + d && u > a + d && u > s + d || e - d > u && r - d > u && a - d > u && s - d > u) return !1;
                var p = t.cubicProjectPoint(e, i, r, n, a, o, s, l, u, h, null);
                return d / 2 >= p
            }
        }
    }), t("zrender/contain/quadratic", ["require", "../core/curve"], function (e) {
        var t = e("../core/curve");
        return {
            containStroke: function (e, i, r, n, a, o, s, l, c) {
                if (0 === s) return !1;
                var u = s;
                if (c > i + u && c > n + u && c > o + u || i - u > c && n - u > c && o - u > c || l > e + u && l > r + u && l > a + u || e - u > l && r - u > l && a - u > l) return !1;
                var h = t.quadraticProjectPoint(e, i, r, n, a, o, l, c, null);
                return u / 2 >= h
            }
        }
    }), t("zrender/contain/util", ["require"], function (e) {
        var t = 2 * Math.PI;
        return {
            normalizeRadian: function (e) {
                return e %= t, 0 > e && (e += t), e
            }
        }
    }), t("zrender/contain/arc", ["require", "./util"], function (e) {
        var t = e("./util").normalizeRadian, i = 2 * Math.PI;
        return {
            containStroke: function (e, r, n, a, o, s, l, c, u) {
                if (0 === l) return !1;
                var h = l;
                c -= e, u -= r;
                var d = Math.sqrt(c * c + u * u);
                if (d - h > n || n > d + h) return !1;
                if (Math.abs(a - o) % i < 1e-4) return !0;
                if (s) {
                    var p = a;
                    a = t(o), o = t(p)
                } else a = t(a), o = t(o);
                a > o && (o += i);
                var f = Math.atan2(u, c);
                return 0 > f && (f += i), f >= a && o >= f || f + i >= a && o >= f + i
            }
        }
    }), t("zrender/contain/windingLine", [], function () {
        return function (e, t, i, r, n, a) {
            if (a > t && a > r || t > a && r > a) return 0;
            if (r === t) return 0;
            var o = t > r ? 1 : -1, s = (a - t) / (r - t), l = s * (i - e) + e;
            return l > n ? o : 0
        }
    }), t("zrender/contain/path", ["require", "../core/PathProxy", "./line", "./cubic", "./quadratic", "./arc", "./util", "../core/curve", "./windingLine"], function (e) {
        function t(e, t) {
            return Math.abs(e - t) < v
        }

        function i() {
            var e = x[0];
            x[0] = x[1], x[1] = e
        }

        function r(e, t, r, n, a, o, s, l, c, u) {
            if (u > t && u > n && u > o && u > l || t > u && n > u && o > u && l > u) return 0;
            var h = p.cubicRootAt(t, n, o, l, u, y);
            if (0 === h) return 0;
            for (var d, f, g = 0, m = -1, v = 0; h > v; v++) {
                var _ = y[v], b = p.cubicAt(e, r, a, s, _);
                c > b || (0 > m && (m = p.cubicExtrema(t, n, o, l, x), x[1] < x[0] && m > 1 && i(), d = p.cubicAt(t, n, o, l, x[0]), m > 1 && (f = p.cubicAt(t, n, o, l, x[1]))), g += 2 == m ? _ < x[0] ? t > d ? 1 : -1 : _ < x[1] ? d > f ? 1 : -1 : f > l ? 1 : -1 : _ < x[0] ? t > d ? 1 : -1 : d > l ? 1 : -1)
            }
            return g
        }

        function n(e, t, i, r, n, a, o, s) {
            if (s > t && s > r && s > a || t > s && r > s && a > s) return 0;
            var l = p.quadraticRootAt(t, r, a, s, y);
            if (0 === l) return 0;
            var c = p.quadraticExtremum(t, r, a);
            if (c >= 0 && 1 >= c) {
                for (var u = 0, h = p.quadraticAt(t, r, a, c), d = 0; l > d; d++) {
                    var f = p.quadraticAt(e, i, n, y[d]);
                    f > o || (u += y[d] < c ? t > h ? 1 : -1 : h > a ? 1 : -1)
                }
                return u
            }
            var f = p.quadraticAt(e, i, n, y[0]);
            return f > o ? 0 : t > a ? 1 : -1
        }

        function a(e, t, i, r, n, a, o, s) {
            if (s -= t, s > i || -i > s) return 0;
            var l = Math.sqrt(i * i - s * s);
            if (y[0] = -l, y[1] = l, Math.abs(r - n) % m < 1e-4) {
                r = 0, n = m;
                var c = a ? 1 : -1;
                return o >= y[0] + e && o <= y[1] + e ? c : 0
            }
            if (a) {
                var l = r;
                r = d(n), n = d(l)
            } else r = d(r), n = d(n);
            r > n && (n += m);
            for (var u = 0, h = 0; 2 > h; h++) {
                var p = y[h];
                if (p + e > o) {
                    var f = Math.atan2(s, p), c = a ? 1 : -1;
                    0 > f && (f = m + f), (f >= r && n >= f || f + m >= r && n >= f + m) && (f > Math.PI / 2 && f < 1.5 * Math.PI && (c = -c), u += c)
                }
            }
            return u
        }

        function o(e, i, o, l, d) {
            for (var p = 0, m = 0, v = 0, y = 0, x = 0, _ = 0; _ < e.length;) {
                var b = e[_++];
                if (b === s.M && _ > 1 && (o || (p += f(m, v, y, x, l, d)), 0 !== p)) return !0;
                switch (1 == _ && (m = e[_], v = e[_ + 1], y = m, x = v), b) {
                    case s.M:
                        y = e[_++], x = e[_++], m = y, v = x;
                        break;
                    case s.L:
                        if (o) {
                            if (g(m, v, e[_], e[_ + 1], i, l, d)) return !0
                        } else p += f(m, v, e[_], e[_ + 1], l, d) || 0;
                        m = e[_++], v = e[_++];
                        break;
                    case s.C:
                        if (o) {
                            if (c.containStroke(m, v, e[_++], e[_++], e[_++], e[_++], e[_], e[_ + 1], i, l, d)) return !0
                        } else p += r(m, v, e[_++], e[_++], e[_++], e[_++], e[_], e[_ + 1], l, d) || 0;
                        m = e[_++], v = e[_++];
                        break;
                    case s.Q:
                        if (o) {
                            if (u.containStroke(m, v, e[_++], e[_++], e[_], e[_ + 1], i, l, d)) return !0
                        } else p += n(m, v, e[_++], e[_++], e[_], e[_ + 1], l, d) || 0;
                        m = e[_++], v = e[_++];
                        break;
                    case s.A:
                        var w = e[_++], M = e[_++], S = e[_++], A = e[_++], z = e[_++], C = e[_++],
                            L = (e[_++], 1 - e[_++]), I = Math.cos(z) * S + w, T = Math.sin(z) * A + M;
                        _ > 1 ? p += f(m, v, I, T, l, d) : (y = I, x = T);
                        var D = (l - w) * A / S + w;
                        if (o) {
                            if (h.containStroke(w, M, A, z, z + C, L, i, D, d)) return !0
                        } else p += a(w, M, A, z, z + C, L, D, d);
                        m = Math.cos(z + C) * S + w, v = Math.sin(z + C) * A + M;
                        break;
                    case s.R:
                        y = m = e[_++], x = v = e[_++];
                        var P = e[_++], k = e[_++], I = y + P, T = x + k;
                        if (o) {
                            if (g(y, x, I, x, i, l, d) || g(I, x, I, T, i, l, d) || g(I, T, y, T, i, l, d) || g(y, T, I, T, i, l, d)) return !0
                        } else p += f(I, x, I, T, l, d), p += f(y, T, y, x, l, d);
                        break;
                    case s.Z:
                        if (o) {
                            if (g(m, v, y, x, i, l, d)) return !0
                        } else if (p += f(m, v, y, x, l, d), 0 !== p) return !0;
                        m = y, v = x
                }
            }
            return o || t(v, x) || (p += f(m, v, y, x, l, d) || 0), 0 !== p
        }

        var s = e("../core/PathProxy").CMD, l = e("./line"), c = e("./cubic"), u = e("./quadratic"), h = e("./arc"),
            d = e("./util").normalizeRadian, p = e("../core/curve"), f = e("./windingLine"), g = l.containStroke,
            m = 2 * Math.PI, v = 1e-4, y = [-1, -1, -1], x = [-1, -1];
        return {
            contain: function (e, t, i) {
                return o(e, 0, !1, t, i)
            }, containStroke: function (e, t, i, r) {
                return o(e, t, !0, i, r)
            }
        }
    }), t("zrender/graphic/Path", ["require", "./Displayable", "../core/util", "../core/PathProxy", "../contain/path", "./Gradient"], function (e) {
        function t(e) {
            var t = e.fill;
            return null != t && "none" !== t
        }

        function i(e) {
            var t = e.stroke;
            return null != t && "none" !== t && e.lineWidth > 0
        }

        function r(e) {
            n.call(this, e), this.path = new o
        }

        var n = e("./Displayable"), a = e("../core/util"), o = e("../core/PathProxy"), s = e("../contain/path"),
            l = e("./Gradient"), c = Math.abs;
        return r.prototype = {
            constructor: r,
            type: "path",
            __dirtyPath: !0,
            strokeContainThreshold: 5,
            brush: function (e) {
                e.save();
                var r = this.style, n = this.path, a = i(r), o = t(r);
                this.__dirtyPath && (o && r.fill instanceof l && r.fill.updateCanvasGradient(this, e), a && r.stroke instanceof l && r.stroke.updateCanvasGradient(this, e)), r.bind(e, this), this.setTransform(e);
                var s = r.lineDash, c = r.lineDashOffset, u = !!e.setLineDash;
                this.__dirtyPath || s && !u && a ? (n = this.path.beginPath(e), s && !u && (n.setLineDash(s), n.setLineDashOffset(c)), this.buildPath(n, this.shape), this.__dirtyPath = !1) : (e.beginPath(), this.path.rebuildPath(e)), o && n.fill(e), s && u && (e.setLineDash(s), e.lineDashOffset = c), a && n.stroke(e), null != r.text && this.drawRectText(e, this.getBoundingRect()), e.restore()
            },
            buildPath: function (e, t) {
            },
            getBoundingRect: function () {
                var e = this._rect, t = this.style;
                if (!e) {
                    var r = this.path;
                    this.__dirtyPath && (r.beginPath(), this.buildPath(r, this.shape)), e = r.getBoundingRect()
                }
                if (i(t) && (this.__dirty || !this._rect)) {
                    var n = this._rectWithStroke || (this._rectWithStroke = e.clone());
                    n.copy(e);
                    var a = t.lineWidth, o = t.strokeNoScale ? this.getLineScale() : 1;
                    return a = Math.max(a, this.strokeContainThreshold), o > 1e-10 && (n.width += a / o, n.height += a / o, n.x -= a / o / 2, n.y -= a / o / 2), n
                }
                return this._rect = e, e
            },
            contain: function (e, r) {
                var n = this.transformCoordToLocal(e, r), a = this.getBoundingRect(), o = this.style;
                if (e = n[0], r = n[1], a.contain(e, r)) {
                    var l = this.path.data;
                    if (i(o)) {
                        var c = o.lineWidth, u = o.strokeNoScale ? this.getLineScale() : 1;
                        if (1e-10 > u) return !1;
                        if (c = Math.max(c, this.strokeContainThreshold), s.containStroke(l, c / u, e, r)) return !0
                    }
                    if (t(o)) return s.contain(l, e, r)
                }
                return !1
            },
            dirty: function (e) {
                0 === arguments.length && (e = !0), e && (this.__dirtyPath = e, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
            },
            animateShape: function (e) {
                return this.animate("shape", e)
            },
            attrKV: function (e, t) {
                "shape" === e ? this.setShape(t) : n.prototype.attrKV.call(this, e, t)
            },
            setShape: function (e, t) {
                var i = this.shape;
                if (i) {
                    if (a.isObject(e)) for (var r in e) i[r] = e[r]; else i[e] = t;
                    this.dirty(!0)
                }
                return this
            },
            getLineScale: function () {
                var e = this.transform;
                return e && c(e[0] - 1) > 1e-10 && c(e[3] - 1) > 1e-10 ? Math.sqrt(c(e[0] * e[3] - e[2] * e[1])) : 1
            }
        }, r.extend = function (e) {
            var t = function (t) {
                r.call(this, t), e.style && this.style.extendFrom(e.style, !1);
                var i = e.shape;
                if (i) {
                    this.shape = this.shape || {};
                    var n = this.shape;
                    for (var a in i) !n.hasOwnProperty(a) && i.hasOwnProperty(a) && (n[a] = i[a])
                }
                e.init && e.init.call(this, t)
            };
            a.inherits(t, r);
            for (var i in e) "style" !== i && "shape" !== i && (t.prototype[i] = e[i]);
            return t
        }, a.inherits(r, n), r
    }), t("zrender/tool/transformPath", ["require", "../core/PathProxy", "../core/vector"], function (e) {
        function t(e, t) {
            var r, l, c, u, h, d = e.data, p = i.M, f = i.C, g = i.L, m = i.R, v = i.A, y = i.Q;
            for (c = 0, u = 0; c < d.length;) {
                switch (r = d[c++], u = c, l = 0, r) {
                    case p:
                        l = 1;
                        break;
                    case g:
                        l = 1;
                        break;
                    case f:
                        l = 3;
                        break;
                    case y:
                        l = 2;
                        break;
                    case v:
                        var x = t[4], _ = t[5], b = o(t[0] * t[0] + t[1] * t[1]), w = o(t[2] * t[2] + t[3] * t[3]),
                            M = s(-t[1] / w, t[0] / b);
                        d[c + 7];
                        d[c++] += x, d[c++] += _, d[c++] *= b, d[c++] *= w, d[c++] += M, d[c++] += M, c += 2, u = c;
                        break;
                    case m:
                        S[0] = d[c++], S[1] = d[c++], n(S, S, t), d[u++] = S[0], d[u++] = S[1], S[0] += d[c++], S[1] += d[c++], n(S, S, t), d[u++] = S[0], d[u++] = S[1]
                }
                for (h = 0; l > h; h++) {
                    var S = a[h];
                    S[0] = d[c++], S[1] = d[c++], n(S, S, t), d[u++] = S[0], d[u++] = S[1]
                }
            }
        }

        var i = e("../core/PathProxy").CMD, r = e("../core/vector"), n = r.applyTransform, a = [[], [], []],
            o = Math.sqrt, s = Math.atan2;
        return t
    }), t("zrender/tool/path", ["require", "../graphic/Path", "../core/PathProxy", "./transformPath", "../core/matrix"], function (e) {
        function t(e, t, i, r, n, a, o, s, l, p, m) {
            var v = l * (d / 180), y = h(v) * (e - i) / 2 + u(v) * (t - r) / 2,
                x = -1 * u(v) * (e - i) / 2 + h(v) * (t - r) / 2, _ = y * y / (o * o) + x * x / (s * s);
            _ > 1 && (o *= c(_), s *= c(_));
            var b = (n === a ? -1 : 1) * c((o * o * (s * s) - o * o * (x * x) - s * s * (y * y)) / (o * o * (x * x) + s * s * (y * y))) || 0,
                w = b * o * x / s, M = b * -s * y / o, S = (e + i) / 2 + h(v) * w - u(v) * M,
                A = (t + r) / 2 + u(v) * w + h(v) * M, z = g([1, 0], [(y - w) / o, (x - M) / s]),
                C = [(y - w) / o, (x - M) / s], L = [(-1 * y - w) / o, (-1 * x - M) / s], I = g(C, L);
            f(C, L) <= -1 && (I = d), f(C, L) >= 1 && (I = 0), 0 === a && I > 0 && (I -= 2 * d), 1 === a && 0 > I && (I += 2 * d), m.addData(p, S, A, o, s, z, I, v, a)
        }

        function i(e) {
            if (!e) return [];
            var i, r = e.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
            for (i = 0; i < l.length; i++) r = r.replace(new RegExp(l[i], "g"), "|" + l[i]);
            var n, o = r.split("|"), s = 0, c = 0, u = new a, h = a.CMD;
            for (i = 1; i < o.length; i++) {
                var d, p = o[i], f = p.charAt(0), g = 0, m = p.slice(1).replace(/e,-/g, "e-").split(",");
                m.length > 0 && "" === m[0] && m.shift();
                for (var v = 0; v < m.length; v++) m[v] = parseFloat(m[v]);
                for (; g < m.length && !isNaN(m[g]) && !isNaN(m[0]);) {
                    var y, x, _, b, w, M, S, A = s, z = c;
                    switch (f) {
                        case"l":
                            s += m[g++], c += m[g++], d = h.L, u.addData(d, s, c);
                            break;
                        case"L":
                            s = m[g++], c = m[g++], d = h.L, u.addData(d, s, c);
                            break;
                        case"m":
                            s += m[g++], c += m[g++], d = h.M, u.addData(d, s, c), f = "l";
                            break;
                        case"M":
                            s = m[g++], c = m[g++], d = h.M, u.addData(d, s, c), f = "L";
                            break;
                        case"h":
                            s += m[g++], d = h.L, u.addData(d, s, c);
                            break;
                        case"H":
                            s = m[g++], d = h.L, u.addData(d, s, c);
                            break;
                        case"v":
                            c += m[g++], d = h.L, u.addData(d, s, c);
                            break;
                        case"V":
                            c = m[g++], d = h.L, u.addData(d, s, c);
                            break;
                        case"C":
                            d = h.C, u.addData(d, m[g++], m[g++], m[g++], m[g++], m[g++], m[g++]), s = m[g - 2], c = m[g - 1];
                            break;
                        case"c":
                            d = h.C, u.addData(d, m[g++] + s, m[g++] + c, m[g++] + s, m[g++] + c, m[g++] + s, m[g++] + c), s += m[g - 2], c += m[g - 1];
                            break;
                        case"S":
                            y = s, x = c;
                            var C = u.len(), L = u.data;
                            n === h.C && (y += s - L[C - 4], x += c - L[C - 3]), d = h.C, A = m[g++], z = m[g++], s = m[g++], c = m[g++], u.addData(d, y, x, A, z, s, c);
                            break;
                        case"s":
                            y = s, x = c;
                            var C = u.len(), L = u.data;
                            n === h.C && (y += s - L[C - 4], x += c - L[C - 3]), d = h.C, A = s + m[g++], z = c + m[g++], s += m[g++], c += m[g++], u.addData(d, y, x, A, z, s, c);
                            break;
                        case"Q":
                            A = m[g++], z = m[g++], s = m[g++], c = m[g++], d = h.Q, u.addData(d, A, z, s, c);
                            break;
                        case"q":
                            A = m[g++] + s, z = m[g++] + c, s += m[g++], c += m[g++], d = h.Q, u.addData(d, A, z, s, c);
                            break;
                        case"T":
                            y = s, x = c;
                            var C = u.len(), L = u.data;
                            n === h.Q && (y += s - L[C - 4], x += c - L[C - 3]), s = m[g++], c = m[g++], d = h.Q, u.addData(d, y, x, s, c);
                            break;
                        case"t":
                            y = s, x = c;
                            var C = u.len(), L = u.data;
                            n === h.Q && (y += s - L[C - 4], x += c - L[C - 3]), s += m[g++], c += m[g++], d = h.Q, u.addData(d, y, x, s, c);
                            break;
                        case"A":
                            _ = m[g++], b = m[g++], w = m[g++], M = m[g++], S = m[g++], A = s, z = c, s = m[g++], c = m[g++], d = h.A, t(A, z, s, c, M, S, _, b, w, d, u);
                            break;
                        case"a":
                            _ = m[g++], b = m[g++], w = m[g++], M = m[g++], S = m[g++], A = s, z = c, s += m[g++], c += m[g++], d = h.A, t(A, z, s, c, M, S, _, b, w, d, u)
                    }
                }
                ("z" === f || "Z" === f) && (d = h.Z, u.addData(d)), n = d
            }
            return u.toStatic(), u
        }

        function r(e, t) {
            var r, n = i(e);
            return t = t || {}, t.buildPath = function (e) {
                e.setData(n.data), r && o(e, r);
                var t = e.getContext();
                t && e.rebuildPath(t)
            }, t.applyTransform = function (e) {
                r || (r = s.create()), s.mul(r, e, r)
            }, t
        }

        var n = e("../graphic/Path"), a = e("../core/PathProxy"), o = e("./transformPath"), s = e("../core/matrix"),
            l = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
            c = Math.sqrt, u = Math.sin, h = Math.cos, d = Math.PI, p = function (e) {
                return Math.sqrt(e[0] * e[0] + e[1] * e[1])
            }, f = function (e, t) {
                return (e[0] * t[0] + e[1] * t[1]) / (p(e) * p(t))
            }, g = function (e, t) {
                return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(f(e, t))
            };
        return {
            createFromString: function (e, t) {
                return new n(r(e, t))
            }, extendFromString: function (e, t) {
                return n.extend(r(e, t))
            }, mergePath: function (e, t) {
                var i, r, a = [], o = e.length;
                for (r = 0; o > r; r++) i = e[r], i.__dirty && i.buildPath(i.path, i.shape), a.push(i.path);
                var s = new n(t);
                return s.buildPath = function (e) {
                    e.appendPath(a);
                    var t = e.getContext();
                    t && e.rebuildPath(t)
                }, s
            }
        }
    }), t("zrender/graphic/helper/roundRect", ["require"], function (e) {
        return {
            buildPath: function (e, t) {
                var i, r, n, a, o = t.x, s = t.y, l = t.width, c = t.height, u = t.r;
                "number" == typeof u ? i = r = n = a = u : u instanceof Array ? 1 === u.length ? i = r = n = a = u[0] : 2 === u.length ? (i = n = u[0], r = a = u[1]) : 3 === u.length ? (i = u[0], r = a = u[1], n = u[2]) : (i = u[0], r = u[1], n = u[2], a = u[3]) : i = r = n = a = 0;
                var h;
                i + r > l && (h = i + r, i *= l / h, r *= l / h), n + a > l && (h = n + a, n *= l / h, a *= l / h), r + n > c && (h = r + n, r *= c / h, n *= c / h), i + a > c && (h = i + a, i *= c / h, a *= c / h), e.moveTo(o + i, s), e.lineTo(o + l - r, s), 0 !== r && e.quadraticCurveTo(o + l, s, o + l, s + r), e.lineTo(o + l, s + c - n), 0 !== n && e.quadraticCurveTo(o + l, s + c, o + l - n, s + c), e.lineTo(o + a, s + c), 0 !== a && e.quadraticCurveTo(o, s + c, o, s + c - a), e.lineTo(o, s + i), 0 !== i && e.quadraticCurveTo(o, s, o + i, s)
            }
        }
    }), t("zrender/core/LRU", ["require"], function (e) {
        var t = function () {
            this.head = null, this.tail = null, this._len = 0
        }, i = t.prototype;
        i.insert = function (e) {
            var t = new r(e);
            return this.insertEntry(t), t
        }, i.insertEntry = function (e) {
            this.head ? (this.tail.next = e, e.prev = this.tail, this.tail = e) : this.head = this.tail = e, this._len++
        }, i.remove = function (e) {
            var t = e.prev, i = e.next;
            t ? t.next = i : this.head = i, i ? i.prev = t : this.tail = t, e.next = e.prev = null, this._len--
        }, i.len = function () {
            return this._len
        };
        var r = function (e) {
            this.value = e, this.next, this.prev
        }, n = function (e) {
            this._list = new t, this._map = {}, this._maxSize = e || 10
        }, a = n.prototype;
        return a.put = function (e, t) {
            var i = this._list, r = this._map;
            if (null == r[e]) {
                var n = i.len();
                if (n >= this._maxSize && n > 0) {
                    var a = i.head;
                    i.remove(a), delete r[a.key]
                }
                var o = i.insert(t);
                o.key = e, r[e] = o
            }
        }, a.get = function (e) {
            var t = this._map[e], i = this._list;
            return null != t ? (t !== i.tail && (i.remove(t), i.insertEntry(t)), t.value) : void 0
        }, a.clear = function () {
            this._list.clear(), this._map = {}
        }, n
    }), t("zrender/graphic/Image", ["require", "./Displayable", "../core/BoundingRect", "../core/util", "./helper/roundRect", "../core/LRU"], function (e) {
        var t = e("./Displayable"), i = e("../core/BoundingRect"), r = e("../core/util"), n = e("./helper/roundRect"),
            a = e("../core/LRU"), o = new a(50), s = function (e) {
                t.call(this, e)
            };
        return s.prototype = {
            constructor: s, type: "image", brush: function (e) {
                var t, i = this.style, r = i.image;
                if (t = "string" == typeof r ? this._image : r, !t && r) {
                    var a = o.get(r);
                    if (!a) return t = new Image, t.onload = function () {
                        t.onload = null;
                        for (var e = 0; e < a.pending.length; e++) a.pending[e].dirty()
                    }, a = {image: t, pending: [this]}, t.src = r, o.put(r, a), void(this._image = t);
                    if (t = a.image, this._image = t, !t.width || !t.height) return void a.pending.push(this)
                }
                if (t) {
                    var s = i.width || t.width, l = i.height || t.height, c = i.x || 0, u = i.y || 0;
                    if (!t.width || !t.height) return;
                    if (e.save(), i.bind(e), this.setTransform(e), i.r && (e.beginPath(), n.buildPath(e, i), e.clip()), i.sWidth && i.sHeight) {
                        var h = i.sx || 0, d = i.sy || 0;
                        e.drawImage(t, h, d, i.sWidth, i.sHeight, c, u, s, l)
                    } else if (i.sx && i.sy) {
                        var h = i.sx, d = i.sy, p = s - h, f = l - d;
                        e.drawImage(t, h, d, p, f, c, u, s, l)
                    } else e.drawImage(t, c, u, s, l);
                    null == i.width && (i.width = s), null == i.height && (i.height = l), null != i.text && this.drawRectText(e, this.getBoundingRect()), e.restore()
                }
            }, getBoundingRect: function () {
                var e = this.style;
                return this._rect || (this._rect = new i(e.x || 0, e.y || 0, e.width || 0, e.height || 0)), this._rect
            }
        }, r.inherits(s, t), s
    }), t("zrender/graphic/Text", ["require", "./Displayable", "../core/util", "../contain/text"], function (e) {
        var t = e("./Displayable"), i = e("../core/util"), r = e("../contain/text"), n = function (e) {
            t.call(this, e)
        };
        return n.prototype = {
            constructor: n, type: "text", brush: function (e) {
                var t = this.style, i = t.x || 0, n = t.y || 0, a = t.text, o = t.fill, s = t.stroke;
                if (null != a && (a += ""), a) {
                    e.save(), this.style.bind(e), this.setTransform(e), o && (e.fillStyle = o), s && (e.strokeStyle = s), e.font = t.textFont || t.font, e.textAlign = t.textAlign, e.textBaseline = t.textBaseline;
                    for (var l = r.measureText("国", e.font).width, c = a.split("\n"), u = 0; u < c.length; u++) o && e.fillText(c[u], i, n), s && e.strokeText(c[u], i, n), n += l;
                    e.restore()
                }
            }, getBoundingRect: function () {
                if (!this._rect) {
                    var e = this.style, t = r.getBoundingRect(e.text + "", e.textFont, e.textAlign, e.textBaseline);
                    t.x += e.x || 0, t.y += e.y || 0, this._rect = t
                }
                return this._rect
            }
        }, i.inherits(n, t), n
    }), t("zrender/graphic/shape/Circle", ["require", "../Path"], function (e) {
        return e("../Path").extend({
            type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (e, t) {
                e.moveTo(t.cx + t.r, t.cy), e.arc(t.cx, t.cy, t.r, 0, 2 * Math.PI, !0)
            }
        })
    }), t("zrender/graphic/shape/Sector", ["require", "../Path"], function (e) {
        return e("../Path").extend({
            type: "sector",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            buildPath: function (e, t) {
                var i = t.cx, r = t.cy, n = t.r0 || 0, a = t.r, o = t.startAngle, s = t.endAngle, l = t.clockwise,
                    c = Math.cos(o), u = Math.sin(o);
                e.moveTo(c * n + i, u * n + r), e.lineTo(c * a + i, u * a + r), e.arc(i, r, a, o, s, !l), e.lineTo(Math.cos(s) * n + i, Math.sin(s) * n + r), 0 !== n && e.arc(i, r, n, s, o, l), e.closePath()
            }
        })
    }), t("zrender/graphic/helper/smoothSpline", ["require", "../../core/vector"], function (e) {
        function t(e, t, i, r, n, a, o) {
            var s = .5 * (i - e), l = .5 * (r - t);
            return (2 * (t - i) + s + l) * o + (-3 * (t - i) - 2 * s - l) * a + s * n + t
        }

        var i = e("../../core/vector");
        return function (e, r) {
            for (var n = e.length, a = [], o = 0, s = 1; n > s; s++) o += i.distance(e[s - 1], e[s]);
            var l = o / 2;
            l = n > l ? n : l;
            for (var s = 0; l > s; s++) {
                var c, u, h, d = s / (l - 1) * (r ? n : n - 1), p = Math.floor(d), f = d - p, g = e[p % n];
                r ? (c = e[(p - 1 + n) % n], u = e[(p + 1) % n], h = e[(p + 2) % n]) : (c = e[0 === p ? p : p - 1], u = e[p > n - 2 ? n - 1 : p + 1], h = e[p > n - 3 ? n - 1 : p + 2]);
                var m = f * f, v = f * m;
                a.push([t(c[0], g[0], u[0], h[0], f, m, v), t(c[1], g[1], u[1], h[1], f, m, v)])
            }
            return a
        }
    }), t("zrender/graphic/helper/smoothBezier", ["require", "../../core/vector"], function (e) {
        var t = e("../../core/vector"), i = t.min, r = t.max, n = t.scale, a = t.distance, o = t.add;
        return function (e, s, l, c) {
            var u, h, d, p, f = [], g = [], m = [], v = [];
            if (c) {
                d = [1 / 0, 1 / 0], p = [-(1 / 0), -(1 / 0)];
                for (var y = 0, x = e.length; x > y; y++) i(d, d, e[y]), r(p, p, e[y]);
                i(d, d, c[0]), r(p, p, c[1])
            }
            for (var y = 0, x = e.length; x > y; y++) {
                var _ = e[y];
                if (l) u = e[y ? y - 1 : x - 1], h = e[(y + 1) % x]; else {
                    if (0 === y || y === x - 1) {
                        f.push(t.clone(e[y]));
                        continue
                    }
                    u = e[y - 1], h = e[y + 1]
                }
                t.sub(g, h, u), n(g, g, s);
                var b = a(_, u), w = a(_, h), M = b + w;
                0 !== M && (b /= M, w /= M), n(m, g, -b), n(v, g, w);
                var S = o([], _, m), A = o([], _, v);
                c && (r(S, S, d), i(S, S, p), r(A, A, d), i(A, A, p)), f.push(S), f.push(A)
            }
            return l && f.push(f.shift()), f
        }
    }), t("zrender/graphic/helper/poly", ["require", "./smoothSpline", "./smoothBezier"], function (e) {
        var t = e("./smoothSpline"), i = e("./smoothBezier");
        return {
            buildPath: function (e, r, n) {
                var a = r.points, o = r.smooth;
                if (a && a.length >= 2) {
                    if (o && "spline" !== o) {
                        var s = i(a, o, n, r.smoothConstraint);
                        e.moveTo(a[0][0], a[0][1]);
                        for (var l = a.length, c = 0; (n ? l : l - 1) > c; c++) {
                            var u = s[2 * c], h = s[2 * c + 1], d = a[(c + 1) % l];
                            e.bezierCurveTo(u[0], u[1], h[0], h[1], d[0], d[1])
                        }
                    } else {
                        "spline" === o && (a = t(a, n)), e.moveTo(a[0][0], a[0][1]);
                        for (var c = 1, p = a.length; p > c; c++) e.lineTo(a[c][0], a[c][1])
                    }
                    n && e.closePath()
                }
            }
        }
    }), t("zrender/graphic/shape/Polygon", ["require", "../helper/poly", "../Path"], function (e) {
        var t = e("../helper/poly");
        return e("../Path").extend({
            type: "polygon",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            buildPath: function (e, i) {
                t.buildPath(e, i, !0)
            }
        })
    }), t("zrender/graphic/shape/Polyline", ["require", "../helper/poly", "../Path"], function (e) {
        var t = e("../helper/poly");
        return e("../Path").extend({
            type: "polyline",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            style: {stroke: "#000", fill: null},
            buildPath: function (e, i) {
                t.buildPath(e, i, !1)
            }
        })
    }), t("zrender/graphic/shape/Rect", ["require", "../helper/roundRect", "../Path"], function (e) {
        var t = e("../helper/roundRect");
        return e("../Path").extend({
            type: "rect",
            shape: {r: 0, x: 0, y: 0, width: 0, height: 0},
            buildPath: function (e, i) {
                var r = i.x, n = i.y, a = i.width, o = i.height;
                i.r ? t.buildPath(e, i) : e.rect(r, n, a, o), e.closePath()
            }
        })
    }), t("zrender/graphic/shape/Line", ["require", "../Path"], function (e) {
        return e("../Path").extend({
            type: "line",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (e, t) {
                var i = t.x1, r = t.y1, n = t.x2, a = t.y2, o = t.percent;
                0 !== o && (e.moveTo(i, r), 1 > o && (n = i * (1 - o) + n * o, a = r * (1 - o) + a * o), e.lineTo(n, a))
            },
            pointAt: function (e) {
                var t = this.shape;
                return [t.x1 * (1 - e) + t.x2 * e, t.y1 * (1 - e) + t.y2 * e]
            }
        })
    }), t("zrender/graphic/shape/BezierCurve", ["require", "../../core/curve", "../Path"], function (e) {
        var t = e("../../core/curve"), i = t.quadraticSubdivide, r = t.cubicSubdivide, n = t.quadraticAt, a = t.cubicAt,
            o = [];
        return e("../Path").extend({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (e, t) {
                var n = t.x1, a = t.y1, s = t.x2, l = t.y2, c = t.cpx1, u = t.cpy1, h = t.cpx2, d = t.cpy2,
                    p = t.percent;
                0 !== p && (e.moveTo(n, a), null == h || null == d ? (1 > p && (i(n, c, s, p, o), c = o[1], s = o[2], i(a, u, l, p, o), u = o[1], l = o[2]), e.quadraticCurveTo(c, u, s, l)) : (1 > p && (r(n, c, h, s, p, o), c = o[1], h = o[2], s = o[3], r(a, u, d, l, p, o), u = o[1], d = o[2], l = o[3]), e.bezierCurveTo(c, u, h, d, s, l)))
            },
            pointAt: function (e) {
                var t = this.shape, i = t.cpx2, r = t.cpy2;
                return null === i || null === r ? [n(t.x1, t.cpx1, t.x2, e), n(t.y1, t.cpy1, t.y2, e)] : [a(t.x1, t.cpx1, t.cpx1, t.x2, e), a(t.y1, t.cpy1, t.cpy1, t.y2, e)]
            }
        })
    }), t("zrender/graphic/shape/Arc", ["require", "../Path"], function (e) {
        return e("../Path").extend({
            type: "arc",
            shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            style: {stroke: "#000", fill: null},
            buildPath: function (e, t) {
                var i = t.cx, r = t.cy, n = t.r, a = t.startAngle, o = t.endAngle, s = t.clockwise, l = Math.cos(a),
                    c = Math.sin(a);
                e.moveTo(l * n + i, c * n + r), e.arc(i, r, n, a, o, !s)
            }
        })
    }), t("zrender/graphic/LinearGradient", ["require", "../core/util", "./Gradient"], function (e) {
        var t = e("../core/util"), i = e("./Gradient"), r = function (e, t, r, n, a) {
            this.x = null == e ? 0 : e, this.y = null == t ? 0 : t, this.x2 = null == r ? 1 : r, this.y2 = null == n ? 0 : n, i.call(this, a)
        };
        return r.prototype = {
            constructor: r, type: "linear", updateCanvasGradient: function (e, t) {
                for (var i = e.getBoundingRect(), r = this.x * i.width + i.x, n = this.x2 * i.width + i.x, a = this.y * i.height + i.y, o = this.y2 * i.height + i.y, s = t.createLinearGradient(r, a, n, o), l = this.colorStops, c = 0; c < l.length; c++) s.addColorStop(l[c].offset, l[c].color);
                this.canvasGradient = s
            }
        }, t.inherits(r, i), r
    }), t("zrender/graphic/RadialGradient", ["require", "../core/util", "./Gradient"], function (e) {
        var t = e("../core/util"), i = e("./Gradient"), r = function (e, t, r, n) {
            this.x = null == e ? .5 : e, this.y = null == t ? .5 : t, this.r = null == r ? .5 : r, i.call(this, n)
        };
        return r.prototype = {
            constructor: r, type: "radial", updateCanvasGradient: function (e, t) {
                for (var i = e.getBoundingRect(), r = i.width, n = i.height, a = Math.min(r, n), o = this.x * r + i.x, s = this.y * n + i.y, l = this.r * a, c = t.createRadialGradient(o, s, 0, o, s, l), u = this.colorStops, h = 0; h < u.length; h++) c.addColorStop(u[h].offset, u[h].color);
                this.canvasGradient = c
            }
        }, t.inherits(r, i), r
    }), t("echarts/util/graphic", ["require", "zrender/core/util", "zrender/tool/path", "zrender/graphic/Path", "zrender/tool/color", "zrender/core/matrix", "zrender/core/vector", "zrender/graphic/Gradient", "zrender/container/Group", "zrender/graphic/Image", "zrender/graphic/Text", "zrender/graphic/shape/Circle", "zrender/graphic/shape/Sector", "zrender/graphic/shape/Polygon", "zrender/graphic/shape/Polyline", "zrender/graphic/shape/Rect", "zrender/graphic/shape/Line", "zrender/graphic/shape/BezierCurve", "zrender/graphic/shape/Arc", "zrender/graphic/LinearGradient", "zrender/graphic/RadialGradient"], function (e) {
        function t(e) {
            if (!e.__isHover) {
                if (e.__hoverStlDirty) {
                    var t = e.style.stroke, i = e.style.fill, r = e.__hoverStl;
                    r.fill = r.fill || (i instanceof y ? i : g.lift(i, -.1)), r.stroke = r.stroke || (t instanceof y ? t : g.lift(t, -.1));
                    var n = {};
                    for (var a in r) r.hasOwnProperty(a) && (n[a] = e.style[a]);
                    e.__normalStl = n, e.__hoverStlDirty = !1
                }
                e.setStyle(e.__hoverStl), e.z2 += 1, e.__isHover = !0
            }
        }

        function i(e) {
            if (e.__isHover) {
                var t = e.__normalStl;
                t && e.setStyle(t), e.z2 -= 1, e.__isHover = !1
            }
        }

        function r(e) {
            "group" === e.type ? e.traverse(function (e) {
                "group" !== e.type && t(e)
            }) : t(e)
        }

        function n(e) {
            "group" === e.type ? e.traverse(function (e) {
                "group" !== e.type && i(e)
            }) : i(e)
        }

        function a(e, t) {
            e.__hoverStl = e.hoverStyle || t, e.__hoverStlDirty = !0
        }

        function o() {
            !this.__isEmphasis && r(this)
        }

        function s() {
            !this.__isEmphasis && n(this)
        }

        function l() {
            this.__isEmphasis = !0, r(this)
        }

        function c() {
            this.__isEmphasis = !1, n(this)
        }

        function u(e, t, i, r, n) {
            var a = e ? "Update" : "", o = r && r.getShallow("animationDuration" + a),
                s = r && r.getShallow("animationEasing" + a);
            r && r.getShallow("animation") ? t.animateTo(i, o, s, n) : (t.attr(i), n && n())
        }

        var h = e("zrender/core/util"), d = e("zrender/tool/path"), p = Math.round, f = e("zrender/graphic/Path"),
            g = e("zrender/tool/color"), m = e("zrender/core/matrix"), v = e("zrender/core/vector"),
            y = e("zrender/graphic/Gradient"), x = {};
        return x.Group = e("zrender/container/Group"), x.Image = e("zrender/graphic/Image"), x.Text = e("zrender/graphic/Text"), x.Circle = e("zrender/graphic/shape/Circle"), x.Sector = e("zrender/graphic/shape/Sector"), x.Polygon = e("zrender/graphic/shape/Polygon"), x.Polyline = e("zrender/graphic/shape/Polyline"), x.Rect = e("zrender/graphic/shape/Rect"), x.Line = e("zrender/graphic/shape/Line"), x.BezierCurve = e("zrender/graphic/shape/BezierCurve"), x.Arc = e("zrender/graphic/shape/Arc"), x.LinearGradient = e("zrender/graphic/LinearGradient"), x.RadialGradient = e("zrender/graphic/RadialGradient"), x.extendShape = function (e) {
            return f.extend(e)
        }, x.extendPath = function (e, t) {
            return d.extendFromString(e, t)
        }, x.makePath = function (e, t, i, r) {
            var n = d.createFromString(e, t), a = n.getBoundingRect();
            if (i) {
                var o = a.width / a.height;
                if ("center" === r) {
                    var s, l = i.height * o;
                    l <= i.width ? s = i.height : (l = i.width, s = l / o);
                    var c = i.x + i.width / 2, u = i.y + i.height / 2;
                    i.x = c - l / 2, i.y = u - s / 2, i.width = l, i.height = s
                }
                this.resizePath(n, i)
            }
            return n
        }, x.mergePath = d.mergePath, x.resizePath = function (e, t) {
            if (e.applyTransform) {
                var i = e.getBoundingRect(), r = i.calculateTransform(t);
                e.applyTransform(r)
            }
        }, x.subPixelOptimizeLine = function (e) {
            var t = x.subPixelOptimize, i = e.shape, r = e.style.lineWidth;
            return p(2 * i.x1) === p(2 * i.x2) && (i.x1 = i.x2 = t(i.x1, r, !0)), p(2 * i.y1) === p(2 * i.y2) && (i.y1 = i.y2 = t(i.y1, r, !0)), e
        }, x.subPixelOptimizeRect = function (e) {
            var t = x.subPixelOptimize, i = e.shape, r = e.style.lineWidth, n = i.x, a = i.y, o = i.width, s = i.height;
            return i.x = t(i.x, r, !0), i.y = t(i.y, r, !0), i.width = Math.max(t(n + o, r, !1) - i.x, 0 === o ? 0 : 1), i.height = Math.max(t(a + s, r, !1) - i.y, 0 === s ? 0 : 1), e
        }, x.subPixelOptimize = function (e, t, i) {
            var r = p(2 * e);
            return (r + p(t)) % 2 === 0 ? r / 2 : (r + (i ? 1 : -1)) / 2
        }, x.setHoverStyle = function (e, t) {
            t = t || {}, "group" === e.type ? e.traverse(function (e) {
                "group" !== e.type && a(e, t)
            }) : a(e, t), e.on("mouseover", o).on("mouseout", s), e.on("emphasis", l).on("normal", c)
        }, x.setText = function (e, t, i) {
            var r = t.getShallow("position") || "inside", n = r.indexOf("inside") >= 0 ? "white" : i,
                a = t.getModel("textStyle");
            h.extend(e, {
                textDistance: t.getShallow("distance") || 5,
                textFont: a.getFont(),
                textPosition: r,
                textFill: a.getTextColor() || n
            })
        }, x.updateProps = h.curry(u, !0), x.initProps = h.curry(u, !1), x.getTransform = function (e, t) {
            for (var i = m.identity([]); e && e !== t;) m.mul(i, e.getLocalTransform(), i), e = e.parent;
            return i
        }, x.applyTransform = function (e, t, i) {
            return i && (t = m.invert([], t)), v.applyTransform([], e, t)
        }, x.transformDirection = function (e, t, i) {
            var r = 0 === t[4] || 0 === t[5] || 0 === t[0] ? 1 : Math.abs(2 * t[4] / t[0]),
                n = 0 === t[4] || 0 === t[5] || 0 === t[2] ? 1 : Math.abs(2 * t[4] / t[2]),
                a = ["left" === e ? -r : "right" === e ? r : 0, "top" === e ? -n : "bottom" === e ? n : 0];
            return a = x.applyTransform(a, t, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
        }, x
    }), t("zrender/core/env", [], function () {
        function e(e) {
            var t = this.os = {}, i = this.browser = {}, r = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                n = e.match(/(Android);?[\s\/]+([\d.]+)?/), a = e.match(/(iPad).*OS\s([\d_]+)/),
                o = e.match(/(iPod)(.*OS\s([\d_]+))?/), s = !a && e.match(/(iPhone\sOS)\s([\d_]+)/),
                l = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), c = l && e.match(/TouchPad/),
                u = e.match(/Kindle\/([\d.]+)/), h = e.match(/Silk\/([\d._]+)/),
                d = e.match(/(BlackBerry).*Version\/([\d.]+)/), p = e.match(/(BB10).*Version\/([\d.]+)/),
                f = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/), g = e.match(/PlayBook/),
                m = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/), v = e.match(/Firefox\/([\d.]+)/),
                y = e.match(/MSIE ([\d.]+)/), x = r && e.match(/Mobile\//) && !m,
                _ = e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !m, y = e.match(/MSIE\s([\d.]+)/);
            return (i.webkit = !!r) && (i.version = r[1]), n && (t.android = !0, t.version = n[2]), s && !o && (t.ios = t.iphone = !0, t.version = s[2].replace(/_/g, ".")), a && (t.ios = t.ipad = !0, t.version = a[2].replace(/_/g, ".")), o && (t.ios = t.ipod = !0, t.version = o[3] ? o[3].replace(/_/g, ".") : null), l && (t.webos = !0, t.version = l[2]), c && (t.touchpad = !0), d && (t.blackberry = !0, t.version = d[2]), p && (t.bb10 = !0, t.version = p[2]), f && (t.rimtabletos = !0, t.version = f[2]), g && (i.playbook = !0), u && (t.kindle = !0, t.version = u[1]), h && (i.silk = !0, i.version = h[1]), !h && t.android && e.match(/Kindle Fire/) && (i.silk = !0), m && (i.chrome = !0, i.version = m[1]), v && (i.firefox = !0, i.version = v[1]), y && (i.ie = !0, i.version = y[1]), x && (e.match(/Safari/) || t.ios) && (i.safari = !0), _ && (i.webview = !0), y && (i.ie = !0, i.version = y[1]), t.tablet = !!(a || g || n && !e.match(/Mobile/) || v && e.match(/Tablet/) || y && !e.match(/Phone/) && e.match(/Touch/)), t.phone = !(t.tablet || t.ipod || !(n || s || l || d || p || m && e.match(/Android/) || m && e.match(/CriOS\/([\d.]+)/) || v && e.match(/Mobile/) || y && e.match(/Touch/))), {
                browser: i,
                os: t,
                node: !1,
                canvasSupported: document.createElement("canvas").getContext ? !0 : !1
            }
        }

        return "undefined" == typeof navigator ? {
            browser: {},
            os: {},
            node: !0,
            canvasSupported: !0
        } : e(navigator.userAgent)
    }), t("zrender/core/event", ["require", "../mixin/Eventful"], function (e) {
        function t(e) {
            return e.getBoundingClientRect ? e.getBoundingClientRect() : {left: 0, top: 0}
        }

        function i(e, i) {
            if (i = i || window.event, null != i.zrX) return i;
            var r = i.type, n = r && r.indexOf("touch") >= 0;
            if (n) {
                var a = "touchend" != r ? i.targetTouches[0] : i.changedTouches[0];
                if (a) {
                    var o = t(e);
                    i.zrX = a.clientX - o.left, i.zrY = a.clientY - o.top
                }
            } else {
                var s = 0, l = 0;
                i.pageX || i.pageY ? (s = i.pageX, l = i.pageY) : (s = i.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, l = i.clientY + document.body.scrollTop + document.documentElement.scrollTop);
                var c = t(e), u = c.top + (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    h = c.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0);
                i.zrX = s - h, i.zrY = l - u, i.zrDelta = i.wheelDelta ? i.wheelDelta / 120 : -(i.detail || 0) / 3
            }
            return i
        }

        function r(e, t, i) {
            o ? e.addEventListener(t, i) : e.attachEvent("on" + t, i)
        }

        function n(e, t, i) {
            o ? e.removeEventListener(t, i) : e.detachEvent("on" + t, i)
        }

        var a = e("../mixin/Eventful"), o = "undefined" != typeof window && !!window.addEventListener,
            s = o ? function (e) {
                e.preventDefault(), e.stopPropagation(), e.cancelBubble = !0
            } : function (e) {
                e.returnValue = !1, e.cancelBubble = !0
            };
        return {normalizeEvent: i, addEventListener: r, removeEventListener: n, stop: s, Dispatcher: a}
    }), t("zrender/mixin/Draggable", ["require"], function (e) {
        function t() {
            this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
        }

        return t.prototype = {
            constructor: t, _dragStart: function (e) {
                var t = e.target;
                t && t.draggable && (this._draggingTarget = t, t.dragging = !0, this._x = e.offsetX, this._y = e.offsetY, this._dispatchProxy(t, "dragstart", e.event))
            }, _drag: function (e) {
                var t = this._draggingTarget;
                if (t) {
                    var i = e.offsetX, r = e.offsetY, n = i - this._x, a = r - this._y;
                    this._x = i, this._y = r, t.drift(n, a, e), this._dispatchProxy(t, "drag", e.event);
                    var o = this._findHover(i, r, t), s = this._dropTarget;
                    this._dropTarget = o, t !== o && (s && o !== s && this._dispatchProxy(s, "dragleave", e.event), o && o !== s && this._dispatchProxy(o, "dragenter", e.event))
                }
            }, _dragEnd: function (e) {
                var t = this._draggingTarget;
                t && (t.dragging = !1), this._dispatchProxy(t, "dragend", e.event), this._dropTarget && this._dispatchProxy(this._dropTarget, "drop", e.event), this._draggingTarget = null, this._dropTarget = null
            }
        }, t
    }), t("zrender/core/GestureMgr", ["require"], function (e) {
        function t(e) {
            var t = e[1][0] - e[0][0], i = e[1][1] - e[0][1];
            return Math.sqrt(t * t + i * i)
        }

        function i(e) {
            return [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
        }

        var r = function () {
            this._track = []
        };
        r.prototype = {
            constructor: r, recognize: function (e, t) {
                return this._doTrack(e, t), this._recognize(e)
            }, clear: function () {
                return this._track.length = 0, this
            }, _doTrack: function (e, t) {
                var i = e.touches;
                if (i) {
                    for (var r = {points: [], touches: [], target: t, event: e}, n = 0, a = i.length; a > n; n++) {
                        var o = i[n];
                        r.points.push([o.clientX, o.clientY]), r.touches.push(o)
                    }
                    this._track.push(r)
                }
            }, _recognize: function (e) {
                for (var t in n) if (n.hasOwnProperty(t)) {
                    var i = n[t](this._track, e);
                    if (i) return i
                }
            }
        };
        var n = {
            pinch: function (e, r) {
                var n = e.length;
                if (n) {
                    var a = (e[n - 1] || {}).points, o = (e[n - 2] || {}).points || a;
                    if (o && o.length > 1 && a && a.length > 1) {
                        var s = t(a) / t(o);
                        !isFinite(s) && (s = 1), r.pinchScale = s;
                        var l = i(a);
                        return r.pinchX = l[0], r.pinchY = l[1], {type: "pinch", target: e[0].target, event: r}
                    }
                }
            }
        };
        return r
    }), t("zrender/Handler", ["require", "./core/env", "./core/event", "./core/util", "./mixin/Draggable", "./core/GestureMgr", "./mixin/Eventful"], function (e) {
        function t(e) {
            return "_" + e + "Handler"
        }

        function i(e, t, i) {
            return {
                type: e,
                event: i,
                target: t,
                cancelBubble: !1,
                offsetX: i.zrX,
                offsetY: i.zrY,
                gestureEvent: i.gestureEvent,
                pinchX: i.pinchX,
                pinchY: i.pinchY,
                pinchScale: i.pinchScale,
                wheelDelta: i.zrDelta
            }
        }

        function r(e, t, i) {
            var r = e._gestureMgr;
            "start" === i && r.clear();
            var n = r.recognize(t, e._findHover(t.zrX, t.zrY, null));
            if ("end" === i && r.clear(), n) {
                var a = n.type;
                t.gestureEvent = a, e._dispatchProxy(n.target, a, n.event)
            }
        }

        function n(e) {
            for (var i = d.concat(p), r = i.length; r--;) {
                var n = i[r];
                e[t(n)] = l.bind(y[n], e)
            }
        }

        function a(e, t, i) {
            if (e[e.rectHover ? "rectContain" : "contain"](t, i)) {
                for (var r = e.parent; r;) {
                    if (r.clipPath && !r.clipPath.contain(t, i)) return !1;
                    r = r.parent
                }
                return !0
            }
            return !1
        }

        var o = e("./core/env"), s = e("./core/event"), l = e("./core/util"), c = e("./mixin/Draggable"),
            u = e("./core/GestureMgr"), h = e("./mixin/Eventful"),
            d = ["click", "dblclick", "mousewheel", "mousemove", "mouseout", "mouseup", "mousedown"],
            p = ["touchstart", "touchend", "touchmove"], f = 300, g = s.addEventListener, m = s.removeEventListener,
            v = s.normalizeEvent, y = {
                mousemove: function (e) {
                    e = v(this.root, e);
                    var t = e.zrX, i = e.zrY, r = this._findHover(t, i, null), n = this._hovered;
                    this._hovered = r, this.root.style.cursor = r ? r.cursor : this._defaultCursorStyle, n && r !== n && n.__zr && this._dispatchProxy(n, "mouseout", e), this._dispatchProxy(r, "mousemove", e), r && r !== n && this._dispatchProxy(r, "mouseover", e)
                }, mouseout: function (e) {
                    e = v(this.root, e);
                    var t = e.toElement || e.relatedTarget;
                    if (t != this.root) for (; t && 9 != t.nodeType;) {
                        if (t === this.root) return;
                        t = t.parentNode
                    }
                    this._dispatchProxy(this._hovered, "mouseout", e), this.trigger("globalout", {event: e})
                }, touchstart: function (e) {
                    e = v(this.root, e), this._lastTouchMoment = new Date, r(this, e, "start"), this._mousemoveHandler(e), this._mousedownHandler(e)
                }, touchmove: function (e) {
                    e = v(this.root, e), r(this, e, "change"), this._mousemoveHandler(e)
                }, touchend: function (e) {
                    e = v(this.root, e), r(this, e, "end"), this._mouseupHandler(e), +new Date - this._lastTouchMoment < f && this._clickHandler(e)
                }
            };
        l.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick"], function (e) {
            y[e] = function (t) {
                t = v(this.root, t);
                var i = this._findHover(t.zrX, t.zrY, null);
                this._dispatchProxy(i, e, t)
            }
        });
        var x = function (e, i, r) {
            h.call(this), this.root = e, this.storage = i, this.painter = r, this._hovered, this._lastTouchMoment, this._lastX, this._lastY, this._defaultCursorStyle = "default", this._gestureMgr = new u, n(this), o.os.tablet || o.os.phone ? (l.each(p, function (i) {
                g(e, i, this[t(i)])
            }, this), g(e, "mouseout", this._mouseoutHandler)) : (l.each(d, function (i) {
                g(e, i, this[t(i)])
            }, this), g(e, "DOMMouseScroll", this._mousewheelHandler)), c.call(this)
        };
        return x.prototype = {
            constructor: x, resize: function (e) {
                this._hovered = null
            }, dispatch: function (e, i) {
                var r = this[t(e)];
                r && r(i)
            }, dispose: function () {
                for (var e = this.root, i = d.concat(p), r = 0; r < i.length; r++) {
                    var n = i[r];
                    m(e, n, this[t(n)])
                }
                m(e, "DOMMouseScroll", this._mousewheelHandler), this.root = this.storage = this.painter = null
            }, setDefaultCursorStyle: function (e) {
                this._defaultCursorStyle = e
            }, _dispatchProxy: function (e, t, r) {
                for (var n = "on" + t, a = i(t, e, r), o = e; o && (o[n] && (a.cancelBubble = o[n].call(o, a)), o.trigger(t, a), o = o.parent, !a.cancelBubble);) ;
                a.cancelBubble || (this.trigger(t, a), this.painter && this.painter.eachOtherLayer(function (e) {
                    "function" == typeof e[n] && e[n].call(e, a), e.trigger && e.trigger(t, a)
                }))
            }, _findHover: function (e, t, i) {
                for (var r = this.storage.getDisplayList(), n = r.length - 1; n >= 0; n--) if (!r[n].silent && r[n] !== i && a(r[n], e, t)) return r[n]
            }
        }, l.mixin(x, h), l.mixin(x, c), x
    }), t("zrender/Storage", ["require", "./core/util", "./container/Group"], function (e) {
        function t(e, t) {
            return e.zlevel === t.zlevel ? e.z === t.z ? e.z2 === t.z2 ? e.__renderidx - t.__renderidx : e.z2 - t.z2 : e.z - t.z : e.zlevel - t.zlevel
        }

        var i = e("./core/util"), r = e("./container/Group"), n = function () {
            this._elements = {}, this._roots = [], this._displayList = [], this._displayListLen = 0
        };
        return n.prototype = {
            constructor: n, getDisplayList: function (e) {
                return e && this.updateDisplayList(), this._displayList
            }, updateDisplayList: function () {
                this._displayListLen = 0;
                for (var e = this._roots, i = this._displayList, r = 0, n = e.length; n > r; r++) {
                    var a = e[r];
                    this._updateAndAddDisplayable(a)
                }
                i.length = this._displayListLen;
                for (var r = 0, n = i.length; n > r; r++) i[r].__renderidx = r;
                i.sort(t)
            }, _updateAndAddDisplayable: function (e, t) {
                if (!e.ignore) {
                    e.beforeUpdate(), e.update(), e.afterUpdate();
                    var i = e.clipPath;
                    if (i && (i.parent = e, i.updateTransform(), t ? (t = t.slice(), t.push(i)) : t = [i]), "group" == e.type) {
                        for (var r = e._children, n = 0; n < r.length; n++) {
                            var a = r[n];
                            a.__dirty = e.__dirty || a.__dirty, this._updateAndAddDisplayable(a, t)
                        }
                        e.__dirty = !1
                    } else e.__clipPaths = t, this._displayList[this._displayListLen++] = e
                }
            }, addRoot: function (e) {
                this._elements[e.id] || (e instanceof r && e.addChildrenToStorage(this), this.addToMap(e), this._roots.push(e))
            }, delRoot: function (e) {
                if (null == e) {
                    for (var t = 0; t < this._roots.length; t++) {
                        var n = this._roots[t];
                        n instanceof r && n.delChildrenFromStorage(this)
                    }
                    return this._elements = {}, this._roots = [], this._displayList = [], void(this._displayListLen = 0)
                }
                if (e instanceof Array) for (var t = 0, a = e.length; a > t; t++) this.delRoot(e[t]); else {
                    var o;
                    o = "string" == typeof e ? this._elements[e] : e;
                    var s = i.indexOf(this._roots, o);
                    s >= 0 && (this.delFromMap(o.id), this._roots.splice(s, 1), o instanceof r && o.delChildrenFromStorage(this))
                }
            }, addToMap: function (e) {
                return e instanceof r && (e.__storage = this), e.dirty(), this._elements[e.id] = e, this
            }, get: function (e) {
                return this._elements[e]
            }, delFromMap: function (e) {
                var t = this._elements, i = t[e];
                return i && (delete t[e], i instanceof r && (i.__storage = null)), this
            }, dispose: function () {
                this._elements = this._renderList = this._roots = null
            }
        }, n
    }), t("zrender/animation/Animation", ["require", "../core/util", "../core/event", "./Animator"], function (e) {
        var t = e("../core/util"), i = e("../core/event").Dispatcher,
            r = "undefined" != typeof window && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (e) {
                setTimeout(e, 16)
            }, n = e("./Animator"), a = function (e) {
                e = e || {}, this.stage = e.stage || {}, this.onframe = e.onframe || function () {
                }, this._clips = [], this._running = !1, this._time = 0, i.call(this)
            };
        return a.prototype = {
            constructor: a, addClip: function (e) {
                this._clips.push(e)
            }, addAnimator: function (e) {
                e.animation = this;
                for (var t = e.getClips(), i = 0; i < t.length; i++) this.addClip(t[i])
            }, removeClip: function (e) {
                var i = t.indexOf(this._clips, e);
                i >= 0 && this._clips.splice(i, 1)
            }, removeAnimator: function (e) {
                for (var t = e.getClips(), i = 0; i < t.length; i++) this.removeClip(t[i]);
                e.animation = null
            }, _update: function () {
                for (var e = (new Date).getTime(), t = e - this._time, i = this._clips, r = i.length, n = [], a = [], o = 0; r > o; o++) {
                    var s = i[o], l = s.step(e);
                    l && (n.push(l), a.push(s))
                }
                for (var o = 0; r > o;) i[o]._needsRemove ? (i[o] = i[r - 1], i.pop(), r--) : o++;
                r = n.length;
                for (var o = 0; r > o; o++) a[o].fire(n[o]);
                this._time = e, this.onframe(t), this.trigger("frame", t), this.stage.update && this.stage.update()
            }, start: function () {
                function e() {
                    t._running && (r(e), t._update())
                }

                var t = this;
                this._running = !0, this._time = (new Date).getTime(), r(e)
            }, stop: function () {
                this._running = !1
            }, clear: function () {
                this._clips = []
            }, animate: function (e, t) {
                t = t || {};
                var i = new n(e, t.loop, t.getter, t.setter);
                return i
            }
        }, t.mixin(a, i), a
    }), t("zrender/Layer", ["require", "./core/util", "./config"], function (e) {
        function t() {
            return !1
        }

        function i(e, t, i, r) {
            var n = document.createElement(t), a = i.getWidth(), o = i.getHeight(), s = n.style;
            return s.position = "absolute", s.left = 0, s.top = 0, s.width = a + "px", s.height = o + "px", n.width = a * r, n.height = o * r, n.setAttribute("data-zr-dom-id", e), n
        }

        var r = e("./core/util"), n = e("./config"), a = function (e, a, o) {
            var s;
            o = o || n.devicePixelRatio, "string" == typeof e ? s = i(e, "canvas", a, o) : r.isObject(e) && (s = e, e = s.id), this.id = e, this.dom = s;
            var l = s.style;
            l && (s.onselectstart = t, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)"), this.domBack = null, this.ctxBack = null, this.painter = a, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = o
        };
        return a.prototype = {
            constructor: a, elCount: 0, __dirty: !0, initContext: function () {
                this.ctx = this.dom.getContext("2d");
                var e = this.dpr;
                1 != e && this.ctx.scale(e, e)
            }, createBackBuffer: function () {
                var e = this.dpr;
                this.domBack = i("back-" + this.id, "canvas", this.painter, e), this.ctxBack = this.domBack.getContext("2d"), 1 != e && this.ctxBack.scale(e, e)
            }, resize: function (e, t) {
                var i = this.dpr, r = this.dom, n = r.style, a = this.domBack;
                n.width = e + "px", n.height = t + "px", r.width = e * i, r.height = t * i, 1 != i && this.ctx.scale(i, i), a && (a.width = e * i, a.height = t * i, 1 != i && this.ctxBack.scale(i, i))
            }, clear: function (e) {
                var t = this.dom, i = this.ctx, r = t.width, n = t.height, a = this.clearColor,
                    o = this.motionBlur && !e, s = this.lastFrameAlpha, l = this.dpr;
                if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(t, 0, 0, r / l, n / l)), i.clearRect(0, 0, r / l, n / l), a && (i.save(), i.fillStyle = this.clearColor, i.fillRect(0, 0, r / l, n / l), i.restore()), o) {
                    var c = this.domBack;
                    i.save(), i.globalAlpha = s, i.drawImage(c, 0, 0, r / l, n / l), i.restore()
                }
            }
        }, a
    }), t("zrender/Painter", ["require", "./config", "./core/util", "./core/log", "./core/BoundingRect", "./Layer", "./graphic/Image"], function (e) {
        function t(e) {
            return parseInt(e, 10)
        }

        function i(e) {
            return e ? e.isBuildin ? !0 : "function" != typeof e.resize || "function" != typeof e.refresh ? !1 : !0 : !1
        }

        function r(e) {
            e.__unusedCount++
        }

        function n(e) {
            e.__dirty = !1, 1 == e.__unusedCount && e.clear()
        }

        function a(e, t, i) {
            return p.copy(e.getBoundingRect()), e.transform && p.applyTransform(e.transform), f.width = t, f.height = i, !p.intersect(f)
        }

        function o(e, t) {
            if (!e || !t || e.length !== t.length) return !0;
            for (var i = 0; i < e.length; i++) if (e[i] !== t[i]) return !0
        }

        function s(e, t) {
            for (var i = 0; i < e.length; i++) {
                var r, n = e[i];
                n.transform && (r = n.transform, t.transform(r[0], r[1], r[2], r[3], r[4], r[5]));
                var a = n.path;
                a.beginPath(t), n.buildPath(a, n.shape), t.clip(), n.transform && (r = n.invTransform, t.transform(r[0], r[1], r[2], r[3], r[4], r[5]))
            }
        }

        var l = e("./config"), c = e("./core/util"), u = e("./core/log"), h = e("./core/BoundingRect"),
            d = e("./Layer"), p = new h(0, 0, 0, 0), f = new h(0, 0, 0, 0), g = function (e, t, i) {
                var r = !e.nodeName || "CANVAS" === e.nodeName.toUpperCase();
                i = i || {}, this.dpr = i.devicePixelRatio || l.devicePixelRatio, this._singleCanvas = r, this.root = e;
                var n = e.style;
                if (n && (n["-webkit-tap-highlight-color"] = "transparent", n["-webkit-user-select"] = "none", n["user-select"] = "none", n["-webkit-touch-callout"] = "none", e.innerHTML = ""), this.storage = t, r) {
                    var a = e.width, o = e.height;
                    this._width = a, this._height = o;
                    var s = new d(e, this, 1);
                    s.initContext(), this._layers = {0: s}, this._zlevelList = [0]
                } else {
                    var a = this._getWidth(), o = this._getHeight();
                    this._width = a, this._height = o;
                    var c = document.createElement("div");
                    this._domRoot = c;
                    var u = c.style;
                    u.position = "relative", u.overflow = "hidden", u.width = this._width + "px", u.height = this._height + "px", e.appendChild(c), this._layers = {}, this._zlevelList = []
                }
                this._layerConfig = {}, this.pathToImage = this._createPathToImage()
            };
        return g.prototype = {
            constructor: g, isSingleCanvas: function () {
                return this._singleCanvas
            }, getViewportRoot: function () {
                return this._singleCanvas ? this._layers[0].dom : this._domRoot
            }, refresh: function (e) {
                var t = this.storage.getDisplayList(!0), i = this._zlevelList;
                this._paintList(t, e);
                for (var r = 0; r < i.length; r++) {
                    var n = i[r], a = this._layers[n];
                    !a.isBuildin && a.refresh && a.refresh()
                }
                return this
            }, _paintList: function (e, t) {
                null == t && (t = !1), this._updateLayerStatus(e);
                var i, l, c, h = this._width, d = this._height;
                this.eachBuildinLayer(r);
                for (var p = null, f = 0, g = e.length; g > f; f++) {
                    var m = e[f], v = this._singleCanvas ? 0 : m.zlevel;
                    if (l !== v && (l = v, i = this.getLayer(l), i.isBuildin || u("ZLevel " + l + " has been used by unkown layer " + i.id), c = i.ctx, i.__unusedCount = 0, (i.__dirty || t) && i.clear()), (i.__dirty || t) && !m.invisible && 0 !== m.style.opacity && m.scale[0] && m.scale[1] && (!m.culling || !a(m, h, d))) {
                        var y = m.__clipPaths;
                        o(y, p) && (p && c.restore(), y && (c.save(), s(y, c)), p = y), m.beforeBrush && m.beforeBrush(c), m.brush(c, !1), m.afterBrush && m.afterBrush(c)
                    }
                    m.__dirty = !1
                }
                p && c.restore(), this.eachBuildinLayer(n)
            }, getLayer: function (e) {
                if (this._singleCanvas) return this._layers[0];
                var t = this._layers[e];
                return t || (t = new d("zr_" + e, this, this.dpr), t.isBuildin = !0, this._layerConfig[e] && c.merge(t, this._layerConfig[e], !0), this.insertLayer(e, t), t.initContext()), t
            }, insertLayer: function (e, t) {
                var r = this._layers, n = this._zlevelList, a = n.length, o = null, s = -1, l = this._domRoot;
                if (r[e]) return void u("ZLevel " + e + " has been used already");
                if (!i(t)) return void u("Layer of zlevel " + e + " is not valid");
                if (a > 0 && e > n[0]) {
                    for (s = 0; a - 1 > s && !(n[s] < e && n[s + 1] > e); s++) ;
                    o = r[n[s]]
                }
                if (n.splice(s + 1, 0, e), o) {
                    var c = o.dom;
                    c.nextSibling ? l.insertBefore(t.dom, c.nextSibling) : l.appendChild(t.dom)
                } else l.firstChild ? l.insertBefore(t.dom, l.firstChild) : l.appendChild(t.dom);
                r[e] = t
            }, eachLayer: function (e, t) {
                var i, r, n = this._zlevelList;
                for (r = 0; r < n.length; r++) i = n[r], e.call(t, this._layers[i], i)
            }, eachBuildinLayer: function (e, t) {
                var i, r, n, a = this._zlevelList;
                for (n = 0; n < a.length; n++) r = a[n], i = this._layers[r], i.isBuildin && e.call(t, i, r)
            }, eachOtherLayer: function (e, t) {
                var i, r, n, a = this._zlevelList;
                for (n = 0; n < a.length; n++) r = a[n], i = this._layers[r], i.isBuildin || e.call(t, i, r)
            }, getLayers: function () {
                return this._layers
            }, _updateLayerStatus: function (e) {
                var t = this._layers, i = {};
                this.eachBuildinLayer(function (e, t) {
                    i[t] = e.elCount, e.elCount = 0
                });
                for (var r = 0, n = e.length; n > r; r++) {
                    var a = e[r], o = this._singleCanvas ? 0 : a.zlevel, s = t[o];
                    if (s) {
                        if (s.elCount++, s.__dirty) continue;
                        s.__dirty = a.__dirty
                    }
                }
                this.eachBuildinLayer(function (e, t) {
                    i[t] !== e.elCount && (e.__dirty = !0)
                })
            }, clear: function () {
                return this.eachBuildinLayer(this._clearLayer), this
            }, _clearLayer: function (e) {
                e.clear()
            }, configLayer: function (e, t) {
                if (t) {
                    var i = this._layerConfig;
                    i[e] ? c.merge(i[e], t, !0) : i[e] = t;
                    var r = this._layers[e];
                    r && c.merge(r, i[e], !0)
                }
            }, delLayer: function (e) {
                var t = this._layers, i = this._zlevelList, r = t[e];
                r && (r.dom.parentNode.removeChild(r.dom), delete t[e], i.splice(c.indexOf(i, e), 1))
            }, resize: function (e, t) {
                var i = this._domRoot;
                if (i.style.display = "none", e = e || this._getWidth(), t = t || this._getHeight(), i.style.display = "", this._width != e || t != this._height) {
                    i.style.width = e + "px", i.style.height = t + "px";
                    for (var r in this._layers) this._layers[r].resize(e, t);
                    this.refresh(!0)
                }
                return this._width = e, this._height = t, this
            }, clearLayer: function (e) {
                var t = this._layers[e];
                t && t.clear()
            }, dispose: function () {
                this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
            }, getRenderedCanvas: function (e) {
                if (e = e || {}, this._singleCanvas) return this._layers[0].dom;
                var t = new d("image", this, e.pixelRatio || this.dpr);
                t.initContext();
                var i = t.ctx;
                t.clearColor = e.backgroundColor, t.clear();
                for (var r = this.storage.getDisplayList(!0), n = 0; n < r.length; n++) {
                    var a = r[n];
                    a.invisible || (a.beforeBrush && a.beforeBrush(i), a.brush(i, !1), a.afterBrush && a.afterBrush(i))
                }
                return t.dom
            }, getWidth: function () {
                return this._width
            }, getHeight: function () {
                return this._height
            }, _getWidth: function () {
                var e = this.root, i = document.defaultView.getComputedStyle(e);
                return (e.clientWidth || t(i.width) || t(e.style.width)) - (t(i.paddingLeft) || 0) - (t(i.paddingRight) || 0) | 0
            }, _getHeight: function () {
                var e = this.root, i = document.defaultView.getComputedStyle(e);
                return (e.clientHeight || t(i.height) || t(e.style.height)) - (t(i.paddingTop) || 0) - (t(i.paddingBottom) || 0) | 0
            }, _pathToImage: function (t, i, r, n, a) {
                var o = document.createElement("canvas"), s = o.getContext("2d");
                o.width = r * a, o.height = n * a, s.clearRect(0, 0, r * a, n * a);
                var l = {position: i.position, rotation: i.rotation, scale: i.scale};
                i.position = [0, 0, 0], i.rotation = 0, i.scale = [1, 1], i && i.brush(s);
                var c = e("./graphic/Image"), u = new c({id: t, style: {x: 0, y: 0, image: o}});
                return null != l.position && (u.position = i.position = l.position), null != l.rotation && (u.rotation = i.rotation = l.rotation), null != l.scale && (u.scale = i.scale = l.scale), u
            }, _createPathToImage: function () {
                var e = this;
                return function (t, i, r, n) {
                    return e._pathToImage(t, i, r, n, e.dpr)
                }
            }
        }, g
    }), t("zrender/zrender", ["require", "./core/guid", "./core/env", "./Handler", "./Storage", "./animation/Animation", "./Painter"], function (e) {
        function t(e) {
            delete c[e]
        }

        var i = e("./core/guid"), r = e("./core/env"), n = e("./Handler"), a = e("./Storage"),
            o = e("./animation/Animation"), s = !r.canvasSupported, l = {canvas: e("./Painter")}, c = {}, u = {};
        u.version = "3.0.0", u.init = function (e, t) {
            var r = new h(i(), e, t);
            return c[r.id] = r, r
        }, u.dispose = function (e) {
            if (e) e.dispose(); else {
                for (var t in c) c[t].dispose();
                c = {}
            }
            return u
        }, u.getInstance = function (e) {
            return c[e]
        }, u.registerPainter = function (e, t) {
            l[e] = t
        };
        var h = function (e, t, i) {
            i = i || {}, this.dom = t, this.id = e;
            var c = this, u = new a, h = i.renderer;
            if (s) {
                if (!l.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                h = "vml"
            } else h && l[h] || (h = "canvas");
            var d = new l[h](t, u, i);
            this.storage = u, this.painter = d, r.node || (this.handler = new n(d.getViewportRoot(), u, d)), this.animation = new o({
                stage: {
                    update: function () {
                        c._needsRefresh && c.refreshImmediately()
                    }
                }
            }), this.animation.start(), this._needsRefresh;
            var p = u.delFromMap, f = u.addToMap;
            u.delFromMap = function (e) {
                var t = u.get(e);
                p.call(u, e), t && t.removeSelfFromZr(c)
            }, u.addToMap = function (e) {
                f.call(u, e), e.addSelfToZr(c)
            }
        };
        return h.prototype = {
            constructor: h, getId: function () {
                return this.id
            }, add: function (e) {
                this.storage.addRoot(e), this._needsRefresh = !0
            }, remove: function (e) {
                this.storage.delRoot(e), this._needsRefresh = !0
            }, configLayer: function (e, t) {
                this.painter.configLayer(e, t), this._needsRefresh = !0
            }, refreshImmediately: function () {
                this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
            }, refresh: function () {
                this._needsRefresh = !0
            }, resize: function () {
                this.painter.resize(), this.handler && this.handler.resize()
            }, clearAnimation: function () {
                this.animation.clear()
            }, getWidth: function () {
                return this.painter.getWidth()
            }, getHeight: function () {
                return this.painter.getHeight()
            }, toDataURL: function (e, t, i) {
                return this.painter.toDataURL(e, t, i)
            }, pathToImage: function (e, t, r) {
                var n = i();
                return this.painter.pathToImage(n, e, t, r)
            }, setDefaultCursorStyle: function (e) {
                this.handler.setDefaultCursorStyle(e)
            }, on: function (e, t, i) {
                this.handler && this.handler.on(e, t, i)
            }, off: function (e, t) {
                this.handler && this.handler.off(e, t)
            }, trigger: function (e, t) {
                this.handler && this.handler.trigger(e, t)
            }, clear: function () {
                this.storage.delRoot(), this.painter.clear()
            }, dispose: function () {
                this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler && this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, t(this.id)
            }
        }, u
    }), t("zrender", ["zrender/zrender"], function (e) {
        return e
    }), t("echarts/loading/default", ["require", "../util/graphic", "zrender/core/util"], function (e) {
        var t = e("../util/graphic"), i = e("zrender/core/util"), r = Math.PI;
        return function (e, n) {
            n = n || {}, i.defaults(n, {
                text: "loading",
                color: "#c23531",
                textColor: "#000",
                maskColor: "rgba(255, 255, 255, 0.8)",
                zlevel: 0
            });
            var a = new t.Rect({style: {fill: n.maskColor}, zlevel: n.zlevel, z: 1e4}), o = new t.Arc({
                shape: {startAngle: -r / 2, endAngle: -r / 2 + .1, r: 10},
                style: {stroke: n.color, lineCap: "round", lineWidth: 5},
                zlevel: n.zlevel,
                z: 10001
            }), s = new t.Rect({
                style: {
                    fill: "none",
                    text: n.text,
                    textPosition: "right",
                    textDistance: 10,
                    textFill: n.textColor
                }, zlevel: n.zlevel, z: 10001
            });
            o.animateShape(!0).when(1e3, {endAngle: 3 * r / 2}).start("circularInOut"), o.animateShape(!0).when(1e3, {startAngle: 3 * r / 2}).delay(300).start("circularInOut");
            var l = new t.Group;
            return l.add(o), l.add(s), l.add(a), l.resize = function () {
                var t = e.getWidth() / 2, i = e.getHeight() / 2;
                o.setShape({cx: t, cy: i});
                var r = o.shape.r;
                s.setShape({x: t - r, y: i - r, width: 2 * r, height: 2 * r}), a.setShape({
                    x: 0,
                    y: 0,
                    width: e.getWidth(),
                    height: e.getHeight()
                })
            }, l.resize(), l
        }
    }), t("echarts/visual/seriesColor", ["require", "zrender/graphic/Gradient"], function (e) {
        var t = e("zrender/graphic/Gradient");
        return function (e, i, r) {
            function n(e) {
                var n = [i, "normal", "color"], a = r.get("color"), o = e.getData(),
                    s = e.get(n) || a[e.seriesIndex % a.length];
                o.setVisual("color", s), r.isSeriesFiltered(e) || ("function" != typeof s || s instanceof t || o.each(function (t) {
                    o.setItemVisual(t, "color", s(e.getDataParams(t)))
                }), o.each(function (e) {
                    var t = o.getItemModel(e), i = t.get(n, !0);
                    null != i && o.setItemVisual(e, "color", i)
                }))
            }

            e ? r.eachSeriesByType(e, n) : r.eachSeries(n)
        }
    }), t("echarts/preprocessor/helper/compatStyle", ["require", "zrender/core/util"], function (e) {
        function t(e) {
            var t = e && e.itemStyle;
            t && i.each(r, function (r) {
                var n = t.normal, a = t.emphasis;
                n && n[r] && (e[r] = e[r] || {}, e[r].normal ? i.merge(e[r].normal, n[r]) : e[r].normal = n[r], n[r] = null), a && a[r] && (e[r] = e[r] || {}, e[r].emphasis ? i.merge(e[r].emphasis, a[r]) : e[r].emphasis = a[r], a[r] = null)
            })
        }

        var i = e("zrender/core/util"),
            r = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
        return function (e) {
            t(e);
            var r = e.data;
            if (r) {
                for (var n = 0; n < r.length; n++) t(r[n]);
                var a = e.markPoint;
                if (a && a.data) for (var o = a.data, n = 0; n < o.length; n++) t(o[n]);
                var s = e.markLine;
                if (s && s.data) for (var l = s.data, n = 0; n < l.length; n++) i.isArray(l[n]) ? (t(l[n][0]), t(l[n][1])) : t(l[n])
            }
        }
    }), t("echarts/preprocessor/backwardCompat", ["require", "zrender/core/util", "./helper/compatStyle"], function (e) {
        function t(e, t) {
            t = t.split(",");
            for (var i = e, r = 0; r < t.length && (i = i && i[t[r]], null != i); r++) ;
            return i
        }

        function i(e, t, i, r) {
            t = t.split(",");
            for (var n, a = e, o = 0; o < t.length - 1; o++) n = t[o], null == a[n] && (a[n] = {}), a = a[n];
            (r || null == a[t[o]]) && (a[t[o]] = i)
        }

        function r(e) {
            c(o, function (t) {
                t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]])
            })
        }

        var n = e("zrender/core/util"), a = e("./helper/compatStyle"),
            o = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
            s = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
            l = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"],
            c = n.each;
        return function (e) {
            c(e.series, function (e) {
                if (n.isObject(e)) {
                    var o = e.type;
                    if (a(e), ("pie" === o || "gauge" === o) && null != e.clockWise && (e.clockwise = e.clockWise), "gauge" === o) {
                        var s = t(e, "pointer.color");
                        null != s && i(e, "itemStyle.normal.color", s)
                    }
                    for (var c = 0; c < l.length; c++) if (l[c] === e.type) {
                        r(e);
                        break
                    }
                }
            }), e.dataRange && (e.visualMap = e.dataRange), c(s, function (t) {
                var i = e[t];
                i && (n.isArray(i) || (i = [i]), c(i, function (e) {
                    r(e)
                }))
            })
        }
    }), t("echarts/echarts", ["require", "./model/Global", "./ExtensionAPI", "./CoordinateSystem", "./model/OptionManager", "./model/Component", "./model/Series", "./view/Component", "./view/Chart", "./util/graphic", "zrender", "zrender/core/util", "zrender/tool/color", "zrender/core/env", "zrender/mixin/Eventful", "./loading/default", "./visual/seriesColor", "./preprocessor/backwardCompat", "echarts/util/graphic", "echarts/util/number", "echarts/util/format", "echarts/coord/geo/Geo"], function (e) {
        function t(e, t, i) {
            e = e && e.toLowerCase(), z.prototype.on.call(this, e, t, i)
        }

        function i() {
            z.call(this)
        }

        function r(e, t, r) {
            r = r || {}, t && L(B, function (e) {
                e(t)
            }), this.id, this.group, this._dom = e, this._zr = w.init(e, {
                renderer: r.renderer || "canvas",
                devicePixelRatio: r.devicePixelRatio
            }), "string" == typeof t && (t = G[t]), this._theme = M.clone(t), this.Geo = C, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._api = new f(this), this._coordinateSystem = new g, z.call(this), this._messageCenter = new i, this._initEvents(), this.resize = M.bind(this.resize, this)
        }

        function n(e, t) {
            var i = this._model;
            i && i.eachComponent({mainType: "series", query: t}, function (r, n) {
                var a = this._chartsMap[r.__viewId];
                a && a[e](r, i, this._api, t)
            }, this)
        }

        function a(e, t, i) {
            var r = this._api;
            L(this._componentsViews, function (n) {
                var a = n.__model;
                n[e](a, t, r, i), d(a, n)
            }, this), t.eachSeries(function (n, a) {
                var o = this._chartsMap[n.__viewId];
                o[e](n, t, r, i), d(n, o)
            }, this)
        }

        function o(e, t) {
            for (var i = "component" === e, r = i ? this._componentsViews : this._chartsViews, n = i ? this._componentsMap : this._chartsMap, a = this._zr, o = 0; o < r.length; o++) r[o].__keepAlive = !1;
            t[i ? "eachComponent" : "eachSeries"](function (e, o) {
                if (i) {
                    if ("series" === e) return
                } else o = e;
                var s = o.id + "_" + o.type, l = n[s];
                if (!l) {
                    var c = v.parseClassType(o.type), u = i ? x.getClass(c.main, c.sub) : _.getClass(c.sub);
                    if (!u) return;
                    l = new u, l.init(t, this._api), n[s] = l, r.push(l), a.add(l.group)
                }
                o.__viewId = s, l.__keepAlive = !0, l.__id = s, l.__model = o
            }, this);
            for (var o = 0; o < r.length;) {
                var s = r[o];
                s.__keepAlive ? o++ : (a.remove(s.group), s.dispose(t, this._api), r.splice(o, 1), delete n[s.__id])
            }
        }

        function s(e) {
            L(T, function (t) {
                L(q[t] || [], function (t) {
                    t(e)
                })
            })
        }

        function l(e) {
            var t = {};
            e.eachSeries(function (e) {
                var i = e.get("stack"), r = e.getData();
                if (i && "list" === r.type) {
                    var n = t[i];
                    n && (r.stackedOn = n), t[i] = r
                }
            })
        }

        function c(e, t) {
            var i = this._api;
            L(E, function (r) {
                r(e, i, t)
            })
        }

        function u(e, t) {
            L(I, function (i) {
                L(N[i] || [], function (i) {
                    i(e, t)
                })
            })
        }

        function h(e, t) {
            var i = this._api;
            L(this._componentsViews, function (r) {
                var n = r.__model;
                r.render(n, e, i, t), d(n, r)
            }, this), L(this._chartsViews, function (e) {
                e.__keepAlive = !1
            }, this), e.eachSeries(function (r, n) {
                var a = this._chartsMap[r.__viewId];
                a.__keepAlive = !0, a.render(r, e, i, t), d(r, a)
            }, this), L(this._chartsViews, function (t) {
                t.__keepAlive || t.remove(e, i)
            }, this)
        }

        function d(e, t) {
            var i = e.get("z"), r = e.get("zlevel");
            t.group.traverse(function (e) {
                null != i && (e.z = i), null != r && (e.zlevel = r)
            })
        }

        var p = e("./model/Global"), f = e("./ExtensionAPI"), g = e("./CoordinateSystem"),
            m = e("./model/OptionManager"), v = e("./model/Component"), y = e("./model/Series"),
            x = e("./view/Component"), _ = e("./view/Chart"), b = e("./util/graphic"), w = e("zrender"),
            M = e("zrender/core/util"), S = e("zrender/tool/color"), A = e("zrender/core/env"),
            z = e("zrender/mixin/Eventful"), C = e("echarts/coord/geo/Geo"), L = M.each,
            I = ["echarts", "chart", "component"], T = ["transform", "filter", "statistic"];
        i.prototype.on = t, M.mixin(i, z);
        var D = r.prototype;
        D.getDom = function () {
            return this._dom
        }, D.getZr = function () {
            return this._zr
        }, D.setOption = function (e, t, i) {
            (!this._model || t) && (this._model = new p(null, null, this._theme, new m(this._api))), this._model.setOption(e, B), P.prepareAndUpdate.call(this), !i && this._zr.refreshImmediately()
        }, D.setTheme = function () {
            console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
        }, D.getModel = function () {
            return this._model
        }, D.getWidth = function () {
            return this._zr.getWidth()
        }, D.getHeight = function () {
            return this._zr.getHeight()
        }, D.getRenderedCanvas = function (e) {
            if (A.canvasSupported) {
                e = e || {}, e.pixelRatio = e.pixelRatio || 1, e.backgroundColor = e.backgroundColor || this._model.get("backgroundColor");
                var t = this._zr, i = t.storage.getDisplayList();
                return M.each(i, function (e) {
                    e.stopAnimation(!0)
                }), t.painter.getRenderedCanvas(e)
            }
        }, D.getDataURL = function (e) {
            e = e || {};
            var t = e.excludeComponents, i = this._model, r = [], n = this;
            L(t, function (e) {
                i.eachComponent({mainType: e}, function (e) {
                    var t = n._componentsMap[e.__viewId];
                    t.group.ignore || (r.push(t), t.group.ignore = !0)
                })
            });
            var a = this.getRenderedCanvas(e).toDataURL("image/" + (e && e.type || "png"));
            return L(r, function (e) {
                e.group.ignore = !1
            }), a
        }, D.getConnectedDataURL = function (e) {
            if (A.canvasSupported) {
                var t = this.group, i = Math.min, r = Math.max, n = 1 / 0;
                if (Z[t]) {
                    var a = n, o = n, s = -n, l = -n, c = [], u = e && e.pixelRatio || 1;
                    for (var h in F) {
                        var d = F[h];
                        if (d.group === t) {
                            var p = d.getRenderedCanvas(M.clone(e)), f = d.getDom().getBoundingClientRect();
                            a = i(f.left, a), o = i(f.top, o), s = r(f.right, s), l = r(f.bottom, l), c.push({
                                dom: p,
                                left: f.left,
                                top: f.top
                            })
                        }
                    }
                    a *= u, o *= u, s *= u, l *= u;
                    var g = s - a, m = l - o, v = M.createCanvas();
                    v.width = g, v.height = m;
                    var y = w.init(v);
                    return L(c, function (e) {
                        var t = new b.Image({style: {x: e.left * u - a, y: e.top * u - o, image: e.dom}});
                        y.add(t)
                    }), y.refreshImmediately(), v.toDataURL("image/" + (e && e.type || "png"))
                }
                return this.getDataURL(e)
            }
        };
        var P = {
            update: function (e) {
                var t = this._model;
                if (t) {
                    t.restoreData(), s.call(this, t), l.call(this, t), this._coordinateSystem.update(t, this._api), c.call(this, t, e), u.call(this, t, e), h.call(this, t, e);
                    var i = t.get("backgroundColor");
                    if (!A.canvasSupported) {
                        var r = S.parse(i);
                        i = S.stringify(r, "rgb"), 0 === r[3] && (i = "transparent")
                    }
                    var n = this._zr.painter;
                    n.isSingleCanvas && n.isSingleCanvas() ? this._zr.configLayer(0, {clearColor: i}) : (i = i || "transparent", this._dom.style.backgroundColor = i)
                }
            }, updateView: function (e) {
                var t = this._model;
                t && (c.call(this, t, e), u.call(this, t, e), a.call(this, "updateView", t, e))
            }, updateVisual: function (e) {
                var t = this._model;
                t && (u.call(this, t, e), a.call(this, "updateVisual", t, e))
            }, updateLayout: function (e) {
                var t = this._model;
                t && (c.call(this, t, e), a.call(this, "updateLayout", t, e))
            }, highlight: function (e) {
                n.call(this, "highlight", e)
            }, downplay: function (e) {
                n.call(this, "downplay", e)
            }, prepareAndUpdate: function (e) {
                var t = this._model;
                o.call(this, "component", t), o.call(this, "chart", t), P.update.call(this, e)
            }
        };
        D.resize = function () {
            this._zr.resize();
            var e = this._model && this._model.resetOption("media");
            P[e ? "prepareAndUpdate" : "update"].call(this), this._loadingFX && this._loadingFX.resize()
        };
        var k = e("./loading/default");
        D.showLoading = function (e, t) {
            M.isObject(e) && (t = e, e = "default");
            var i = k(this._api, t), r = this._zr;
            this._loadingFX = i, r.painter.clear(), r.add(i)
        }, D.hideLoading = function () {
            this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
        }, D.makeActionFromEvent = function (e) {
            var t = M.extend({}, e);
            return t.type = O[e.type], t
        }, D.dispatchAction = function (e, t) {
            var i = R[e.type];
            if (i) {
                var r = i.actionInfo, n = r.update || "update", a = [e], o = !1;
                e.batch && (o = !0, a = M.map(e.batch, function (t) {
                    return t = M.defaults(M.extend({}, t), e), t.batch = null, t
                }));
                for (var s, l = [], c = "highlight" === e.type || "downplay" === e.type, u = 0; u < a.length; u++) {
                    var h = a[u];
                    s = i.action(h, this._model), s = s || M.extend({}, h), s.type = r.event || s.type, l.push(s), c && P[n].call(this, h)
                }
                "none" !== n && !c && P[n].call(this, e), t || (s = o ? {
                    type: l[0].type,
                    batch: l
                } : l[0], this._messageCenter.trigger(s.type, s))
            }
        }, D.on = t;
        var V = ["click", "dblclick", "mouseover", "mouseout", "globalout"];
        D._initEvents = function () {
            var e = this._zr;
            L(V, function (t) {
                e.on(t, function (e) {
                    var i = this.getModel(), r = e.target;
                    if (r && null != r.dataIndex) {
                        var n = r.hostModel || i.getSeriesByIndex(r.seriesIndex),
                            a = n && n.getDataParams(r.dataIndex) || {};
                        a.event = e, a.type = t, this.trigger(t, a)
                    }
                }, this)
            }, this), L(O, function (e, t) {
                this._messageCenter.on(t, function (e) {
                    this.trigger(t, e)
                }, this)
            }, this)
        }, D.isDisposed = function () {
            return this._disposed
        }, D.dispose = function () {
            this._disposed = !0;
            var e = this._api, t = this._model;
            L(this._componentsViews, function (i) {
                i.dispose(t, e)
            }), L(this._chartsViews, function (i) {
                i.dispose(t, e)
            }), this._zr.dispose(), F[this.id] = null
        }, M.mixin(r, z);
        var R = [], O = {}, E = [], q = {}, B = [], N = {}, G = {}, F = {}, Z = {}, H = new Date - 0, W = new Date - 0,
            j = "_echarts_instance_", U = {version: "3.0.0", dependencies: {zrender: "3.0.0"}};
        return U.init = function (e, t, i) {
            if (w.version.replace(".", "") - 0 < U.dependencies.zrender.replace(".", "") - 0) throw new Error("ZRender " + w.version + " is too old for ECharts " + U.version + ". Current version need ZRender " + U.dependencies.zrender + "+");
            if (!e) throw new Error("Initialize failed: invalid dom.");
            var n = new r(e, t, i);
            return n.id = H++, F[n.id] = n, e.setAttribute && e.setAttribute(j, n.id), M.each(O, function (e, t) {
                n._messageCenter.on(t, function (e) {
                    if (Z[n.group]) {
                        n.__connectedActionDispatching = !0;
                        for (var t in F) {
                            var i = n.makeActionFromEvent(e), r = F[t];
                            r !== n && r.group === n.group && (r.__connectedActionDispatching || r.dispatchAction(i))
                        }
                        n.__connectedActionDispatching = !1
                    }
                })
            }), n
        }, U.connect = function (e) {
            if (M.isArray(e)) {
                var t = e;
                e = null, M.each(t, function (t) {
                    null != t.group && (e = t.group)
                }), e = e || W++, M.each(t, function (t) {
                    t.group = e
                })
            }
            return Z[e] = !0, e
        }, U.disConnect = function (e) {
            Z[e] = !1
        }, U.dispose = function (e) {
            M.isDom(e) ? e = U.getInstanceByDom(e) : "string" == typeof e && (e = F[e]), e instanceof r && !e.isDisposed() && e.dispose()
        }, U.getInstanceByDom = function (e) {
            var t = e.getAttribute(j);
            return F[t]
        }, U.getInstanceById = function (e) {
            return F[e]
        }, U.registerTheme = function (e, t) {
            G[e] = t
        }, U.registerPreprocessor = function (e) {
            B.push(e)
        }, U.registerProcessor = function (e, t) {
            if (M.indexOf(T, e) < 0) throw new Error("stage should be one of " + T);
            var i = q[e] || (q[e] = []);
            i.push(t)
        }, U.registerAction = function (e, t, i) {
            "function" == typeof t && (i = t, t = "");
            var r = M.isObject(e) ? e.type : [e, e = {event: t}][0];
            e.event = (e.event || r).toLowerCase(), t = e.event, R[r] || (R[r] = {action: i, actionInfo: e}), O[t] = r
        }, U.registerCoordinateSystem = function (e, t) {
            g.register(e, t)
        }, U.registerLayout = function (e) {
            M.indexOf(E, e) < 0 && E.push(e)
        }, U.registerVisualCoding = function (e, t) {
            if (M.indexOf(I, e) < 0) throw new Error("stage should be one of " + I);
            var i = N[e] || (N[e] = []);
            i.push(t)
        }, U.extendChartView = function (e) {
            return _.extend(e)
        }, U.extendComponentModel = function (e) {
            return v.extend(e)
        }, U.extendSeriesModel = function (e) {
            return y.extend(e)
        }, U.extendComponentView = function (e) {
            return x.extend(e)
        }, U.setCanvasCreator = function (e) {
            M.createCanvas = e
        }, U.registerVisualCoding("echarts", M.curry(e("./visual/seriesColor"), "", "itemStyle")), U.registerPreprocessor(e("./preprocessor/backwardCompat")), U.registerAction({
            type: "highlight",
            event: "highlight",
            update: "highlight"
        }, M.noop), U.registerAction({
            type: "downplay",
            event: "downplay",
            update: "downplay"
        }, M.noop), U.graphic = e("echarts/util/graphic"), U.number = e("echarts/util/number"), U.format = e("echarts/util/format"), U.util = {}, L(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend"], function (e) {
            U.util[e] = M[e]
        }), U
    }), t("echarts", ["echarts/echarts"], function (e) {
        return e
    }), t("echarts/data/DataDiffer", ["require"], function (e) {
        function t(e) {
            return e
        }

        function i(e, i, r, n) {
            this._old = e, this._new = i, this._oldKeyGetter = r || t, this._newKeyGetter = n || t
        }

        function r(e, t, i) {
            for (var r = 0; r < e.length; r++) {
                var n = i(e[r]), a = t[n];
                null == a ? t[n] = r : (a.length || (t[n] = a = [a]), a.push(r))
            }
        }

        return i.prototype = {
            constructor: i, add: function (e) {
                return this._add = e, this
            }, update: function (e) {
                return this._update = e, this
            }, remove: function (e) {
                return this._remove = e, this
            }, execute: function () {
                var e, t = this._old, i = this._new, n = this._oldKeyGetter, a = this._newKeyGetter, o = {}, s = {};
                for (r(t, o, n), r(i, s, a), e = 0; e < t.length; e++) {
                    var l = n(t[e]), c = s[l];
                    if (null != c) {
                        var u = c.length;
                        u ? (1 === u && (s[l] = null), c = c.unshift()) : s[l] = null, this._update && this._update(c, e)
                    } else this._remove && this._remove(e)
                }
                for (var l in s) if (s.hasOwnProperty(l)) {
                    var c = s[l];
                    if (null == c) continue;
                    if (c.length) for (var e = 0, u = c.length; u > e; e++) this._add && this._add(c[e]); else this._add && this._add(c)
                }
            }
        }, i
    }), t("echarts/data/List", ["require", "../model/Model", "./DataDiffer", "zrender/core/util", "../util/model"], function (e) {
        function t(e) {
            return c.isArray(e) || (e = [e]), e
        }

        var i = "undefined", r = "undefined" == typeof window ? global : window,
            n = typeof r.Float64Array === i ? Array : r.Float64Array,
            a = typeof r.Int32Array === i ? Array : r.Int32Array,
            o = {"float": n, "int": a, ordinal: Array, number: Array, time: Array}, s = e("../model/Model"),
            l = e("./DataDiffer"), c = e("zrender/core/util"), u = e("../util/model"), h = c.isObject,
            d = ["stackedOn", "_nameList", "_idList", "_rawData"], p = function (e, t, i) {
                c.each(d.concat(i || []), function (i) {
                    t.hasOwnProperty(i) && (e[i] = t[i])
                })
            }, f = function (e, t) {
                e = e || ["x", "y"];
                for (var i = {}, r = [], n = 0; n < e.length; n++) {
                    var a, o = {};
                    "string" == typeof e[n] ? (a = e[n], o = {
                        name: a,
                        stackable: !1,
                        type: "number"
                    }) : (o = e[n], a = o.name, o.type = o.type || "number"), r.push(a), i[a] = o
                }
                this.dimensions = r, this._dimensionInfos = i, this.hostModel = t, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData
            }, g = f.prototype;
        g.type = "list", g.getDimension = function (e) {
            return isNaN(e) || (e = this.dimensions[e] || e), e
        }, g.getDimensionInfo = function (e) {
            return this._dimensionInfos[this.getDimension(e)]
        }, g.initData = function (e, t, i) {
            e = e || [], this._rawData = e;
            var r = this._storage = {}, n = this.indices = [], a = this.dimensions, s = e.length,
                l = this._dimensionInfos, h = [], d = {};
            t = t || [];
            for (var p = 0; p < a.length; p++) {
                var f = l[a[p]], g = o[f.type];
                r[a[p]] = new g(s)
            }
            i = i || function (e, t, i, r) {
                var n = u.getDataItemValue(e);
                return u.converDataValue(c.isArray(n) ? n[r] : n, l[t])
            };
            for (var m = 0; m < e.length; m++) {
                for (var v = e[m], y = 0; y < a.length; y++) {
                    var x = a[y], _ = r[x];
                    _[m] = i(v, x, m, y)
                }
                n.push(m)
            }
            for (var p = 0; p < e.length; p++) {
                var b = "";
                t[p] || (t[p] = e[p].name, b = e[p].id);
                var w = t[p] || "";
                !b && w && (d[w] = d[w] || 0, b = w, d[w] > 0 && (b += "__ec__" + d[w]), d[w]++), b && (h[p] = b)
            }
            this._nameList = t, this._idList = h
        }, g.count = function () {
            return this.indices.length
        }, g.get = function (e, t, i) {
            var r = this._storage, n = this.indices[t], a = r[e] && r[e][n], o = this._dimensionInfos[e];
            if (i && o && o.stackable) for (var s = this.stackedOn; s;) {
                var l = s.get(e, t);
                (a >= 0 && l > 0 || 0 >= a && 0 > l) && (a += l), s = s.stackedOn
            }
            return a
        }, g.getValues = function (e, t, i) {
            var r = [];
            c.isArray(e) || (i = t, t = e, e = this.dimensions);
            for (var n = 0, a = e.length; a > n; n++) r.push(this.get(e[n], t, i));
            return r
        }, g.hasValue = function (e) {
            for (var t = this.dimensions, i = this._dimensionInfos, r = 0, n = t.length; n > r; r++) if ("ordinal" !== i[t[r]].type && isNaN(this.get(t[r], e))) return !1;
            return !0
        }, g.getDataExtent = function (e, t) {
            var i = this._storage[e], r = this.getDimensionInfo(e);
            t = r && r.stackable && t;
            var n, a = (this._extent || (this._extent = {}))[e + !!t];
            if (a) return a;
            if (i) {
                for (var o = 1 / 0, s = -(1 / 0), l = 0, c = this.count(); c > l; l++) n = this.get(e, l, t), o > n && (o = n), n > s && (s = n);
                return this._extent[e + t] = [o, s]
            }
            return [1 / 0, -(1 / 0)]
        }, g.getSum = function (e, t) {
            var i = this._storage[e], r = 0;
            if (i) for (var n = 0, a = this.count(); a > n; n++) {
                var o = this.get(e, n, t);
                isNaN(o) || (r += o)
            }
            return r
        }, g.indexOf = function (e, t) {
            var i = this._storage, r = i[e], n = this.indices;
            if (r) for (var a = 0, o = n.length; o > a; a++) {
                var s = n[a];
                if (r[s] === t) return a
            }
            return -1
        }, g.indexOfName = function (e) {
            for (var t = this.indices, i = this._nameList, r = 0, n = t.length; n > r; r++) {
                var a = t[r];
                if (i[a] === e) return r
            }
            return -1
        }, g.indexOfNearest = function (e, t, i) {
            c.isArray(e) || (e = e ? [e] : []);
            var r = this._storage, n = r[e];
            if (n) {
                for (var a = Number.MAX_VALUE, o = -1, s = 0, l = e.length; l > s; s++) for (var u = 0, h = this.count(); h > u; u++) {
                    var d = Math.abs(this.get(e[s], u, i) - t);
                    a >= d && (a = d, o = u)
                }
                return o
            }
            return -1
        }, g.getRawIndex = function (e) {
            var t = this.indices[e];
            return null == t ? -1 : t
        }, g.getName = function (e) {
            return this._nameList[this.indices[e]] || ""
        }, g.getId = function (e) {
            return this._idList[this.indices[e]] || this.getRawIndex(e) + ""
        }, g.each = function (e, i, r, n) {
            "function" == typeof e && (n = r, r = i, i = e, e = []), e = c.map(t(e), this.getDimension, this);
            var a = [], o = e.length, s = this.indices;
            n = n || this;
            for (var l = 0; l < s.length; l++) if (0 === o) i.call(n, l); else if (1 === o) i.call(n, this.get(e[0], l, r), l); else {
                for (var u = 0; o > u; u++) a[u] = this.get(e[u], l, r);
                a[u] = l, i.apply(n, a)
            }
        }, g.filterSelf = function (e, i, r, n) {
            "function" == typeof e && (n = r, r = i, i = e, e = []), e = c.map(t(e), this.getDimension, this);
            var a = [], o = [], s = e.length, l = this.indices;
            n = n || this;
            for (var u = 0; u < l.length; u++) {
                var h;
                if (1 === s) h = i.call(n, this.get(e[0], u, r), u); else {
                    for (var d = 0; s > d; d++) o[d] = this.get(e[d], u, r);
                    o[d] = u, h = i.apply(n, o)
                }
                h && a.push(l[u])
            }
            return this.indices = a, this._extent = {}, this
        }, g.mapArray = function (e, t, i, r) {
            "function" == typeof e && (r = i, i = t, t = e, e = []);
            var n = [];
            return this.each(e, function () {
                n.push(t && t.apply(this, arguments))
            }, i, r), n
        }, g.map = function (e, i, r, n) {
            e = c.map(t(e), this.getDimension, this);
            var a = this.dimensions, o = new f(c.map(a, this.getDimensionInfo, this), this.hostModel),
                s = o.indices = this.indices;
            p(o, this, this._wrappedMethods);
            for (var l = o._storage = {}, u = this._storage, h = 0; h < a.length; h++) {
                var d = a[h], g = u[d];
                c.indexOf(e, d) >= 0 ? l[d] = new g.constructor(u[d].length) : l[d] = u[d]
            }
            var m = [];
            return this.each(e, function () {
                var t = arguments[arguments.length - 1], r = i && i.apply(this, arguments);
                if (null != r) {
                    "number" == typeof r && (m[0] = r, r = m);
                    for (var n = 0; n < r.length; n++) {
                        var a = e[n], o = l[a], c = s[t];
                        o && (o[c] = r[n])
                    }
                }
            }), o
        };
        var m = new s(null);
        g.getItemModel = function (e, t) {
            var i, r = this.hostModel;
            return e = this.indices[e], i = t ? new s(null, r) : m, i.option = this._rawData[e], i.parentModel = r, i.ecModel = r.ecModel, i
        }, g.diff = function (e) {
            var t = this._idList, i = e && e._idList;
            return new l(e ? e.indices : [], this.indices, function (e) {
                return i[e] || e + ""
            }, function (e) {
                return t[e] || e + ""
            })
        }, g.getVisual = function (e) {
            var t = this._visual;
            return t && t[e]
        }, g.setVisual = function (e, t) {
            if (h(e)) for (var i in e) e.hasOwnProperty(i) && this.setVisual(i, e[i]); else this._visual = this._visual || {}, this._visual[e] = t
        }, g.getItemLayout = function (e) {
            return this._itemLayouts[e]
        }, g.setItemLayout = function (e, t, i) {
            this._itemLayouts[e] = i ? c.extend(this._itemLayouts[e] || {}, t) : t
        }, g.getItemVisual = function (e, t, i) {
            var r = this._itemVisuals[e], n = r && r[t];
            return null != n || i ? n : this.getVisual(t)
        }, g.setItemVisual = function (e, t, i) {
            var r = this._itemVisuals[e] || {};
            if (this._itemVisuals[e] = r, h(t)) for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]); else r[t] = i
        };
        var v = function (e) {
            e.seriesIndex = this.seriesIndex, e.dataIndex = this.dataIndex
        };
        return g.setItemGraphicEl = function (e, t) {
            var i = this.hostModel;
            t && (t.dataIndex = e, t.seriesIndex = i && i.seriesIndex, "group" === t.type && t.traverse(v, t)), this._graphicEls[e] = t
        }, g.getItemGraphicEl = function (e) {
            return this._graphicEls[e]
        }, g.eachItemGraphicEl = function (e, t) {
            c.each(this._graphicEls, function (i, r) {
                i && e && e.call(t, i, r)
            })
        }, g.cloneShallow = function () {
            var e = c.map(this.dimensions, this.getDimensionInfo, this), t = new f(e, this.hostModel);
            return t._storage = this._storage, p(t, this, this._wrappedMethods), t.indices = this.indices.slice(), t
        }, g.wrapMethod = function (e, t) {
            var i = this[e];
            "function" == typeof i && (this._wrappedMethods = this._wrappedMethods || [], this._wrappedMethods.push(e), this[e] = function () {
                var e = i.apply(this, arguments);
                return t.call(this, e)
            })
        }, f
    }), t("echarts/data/helper/completeDimensions", ["require", "zrender/core/util"], function (e) {
        function t(e, t, a) {
            var o = r(t[0]), s = n.isArray(o) && o.length || 1;
            a = a || [];
            for (var l = 0; s > l; l++) if (!e[l]) {
                var c = a[l] || "extra" + (l - a.length);
                e[l] = i(t, l) ? {type: "ordinal", name: c} : c
            }
            return e
        }

        function i(e, t) {
            for (var i = 0, a = e.length; a > i; i++) {
                var o = r(e[i]);
                if (!n.isArray(o)) return !1;
                var o = o[t];
                if (null != o && isFinite(o)) return !1;
                if (n.isString(o) && "-" !== o) return !0
            }
            return !1
        }

        function r(e) {
            return n.isArray(e) ? e : n.isObject(e) ? e.value : e
        }

        var n = e("zrender/core/util");
        return t
    }), t("echarts/chart/helper/createListFromArray", ["require", "../../data/List", "../../data/helper/completeDimensions", "zrender/core/util", "../../util/model"], function (e) {
        function t(e) {
            for (var t = 0; t < e.length && null == e[t];) t++;
            return e[t]
        }

        function i(e) {
            var i = t(e);
            return null != i && !l.isArray(u(i))
        }

        function r(e, t, r) {
            e = e || [];
            var n = d[t.get("coordinateSystem")](e, t, r), s = n.dimensions, l = n.categoryAxisModel,
                c = "ordinal" === s[0].type ? 0 : "ordinal" === s[1].type ? 1 : -1, p = new o(s, t), f = a(n, e),
                g = l && i(e) ? function (e, t, i, r) {
                    return r === c ? i : h(u(e), s[r])
                } : function (e, t, i, r) {
                    var n = u(e);
                    return h(n && n[r], s[r])
                };
            return p.initData(e, f, g), p
        }

        function n(e) {
            return "category" !== e && "time" !== e
        }

        function a(e, t) {
            var i = [];
            if (e.categoryAxisModel) {
                var r = e.categoryAxisModel.getCategories();
                if (r) {
                    var n = t.length;
                    if (l.isArray(t[0]) && t[0].length > 1) {
                        i = [];
                        for (var a = 0; n > a; a++) i[a] = r[t[a][0]]
                    } else i = r.slice(0)
                }
            }
            return i
        }

        var o = e("../../data/List"), s = e("../../data/helper/completeDimensions"), l = e("zrender/core/util"),
            c = e("../../util/model"), u = c.getDataItemValue, h = c.converDataValue, d = {
                cartesian2d: function (e, t, i) {
                    var r = i.getComponent("xAxis", t.get("xAxisIndex")), a = i.getComponent("yAxis", t.get("yAxisIndex")),
                        o = r.get("type"), l = a.get("type"), c = "category" === l, u = "category" === o,
                        h = [{name: "x", type: u ? "ordinal" : "float", stackable: n(o)}, {
                            name: "y",
                            type: c ? "ordinal" : "float",
                            stackable: n(l)
                        }];
                    return s(h, e, ["x", "y", "z"]), {dimensions: h, categoryAxisModel: u ? r : c ? a : null}
                }, polar: function (e, t, i) {
                    var r = t.get("polarIndex") || 0, a = function (e) {
                            return e.get("polarIndex") === r
                        }, o = i.findComponents({mainType: "angleAxis", filter: a})[0],
                        l = i.findComponents({mainType: "radiusAxis", filter: a})[0], c = "category" === l.get("type"),
                        u = "category" === o.get("type"), h = [{
                            name: "radius",
                            type: c ? "ordinal" : "float",
                            stackable: n(l.get("type"))
                        }, {name: "angle", type: u ? "ordinal" : "float", stackable: n(o.get("type"))}];
                    return s(h, e, ["radius", "angle", "value"]), {
                        dimensions: h,
                        categoryAxisModel: u ? o : c ? l : null
                    }
                }, geo: function (e, t, i) {
                    return {dimensions: s([{name: "lng"}, {name: "lat"}], e, ["lng", "lat", "value"])}
                }
            };
        return r
    }), t("echarts/chart/line/LineSeries", ["require", "../helper/createListFromArray", "../../model/Series"], function (e) {
        var t = e("../helper/createListFromArray"), i = e("../../model/Series");
        return i.extend({
            type: "series.line",
            dependencies: ["grid", "polar"],
            getInitialData: function (e, i) {
                return t(e.data, this, i)
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                polarIndex: 0,
                clipOverflow: !0,
                label: {normal: {position: "top"}, emphasis: {position: "top"}},
                lineStyle: {normal: {width: 2, type: "solid"}},
                symbol: "emptyCircle",
                symbolSize: 4,
                showSymbol: !0,
                animationEasing: "linear"
            }
        })
    }), t("echarts/util/symbol", ["require", "./graphic", "zrender/core/BoundingRect"], function (e) {
        var t = e("./graphic"), i = e("zrender/core/BoundingRect"), r = t.extendShape({
            type: "triangle",
            shape: {cx: 0, cy: 0, width: 0, height: 0},
            buildPath: function (e, t) {
                var i = t.cx, r = t.cy, n = t.width / 2, a = t.height / 2;
                e.moveTo(i, r - a), e.lineTo(i + n, r + a), e.lineTo(i - n, r + a), e.closePath()
            }
        }), n = t.extendShape({
            type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (e, t) {
                var i = t.cx, r = t.cy, n = t.width / 2, a = t.height / 2;
                e.moveTo(i, r - a), e.lineTo(i + n, r), e.lineTo(i, r + a), e.lineTo(i - n, r), e.closePath()
            }
        }), a = t.extendShape({
            type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (e, t) {
                var i = t.x, r = t.y, n = t.width / 5 * 3, a = Math.max(n, t.height), o = n / 2, s = o * o / (a - o),
                    l = r - a + o + s, c = Math.asin(s / o), u = Math.cos(c) * o, h = Math.sin(c), d = Math.cos(c);
                e.arc(i, l, o, Math.PI - c, 2 * Math.PI + c);
                var p = .6 * o, f = .7 * o;
                e.bezierCurveTo(i + u - h * p, l + s + d * p, i, r - f, i, r), e.bezierCurveTo(i, r - f, i - u + h * p, l + s + d * p, i - u, l + s), e.closePath()
            }
        }), o = t.extendShape({
            type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (e, t) {
                var i = t.height, r = t.width, n = t.x, a = t.y, o = r / 3 * 2;
                e.moveTo(n, a), e.lineTo(n + o, a + i), e.lineTo(n, a + i / 4 * 3), e.lineTo(n - o, a + i), e.lineTo(n, a), e.closePath()
            }
        }), s = {
            line: t.Line,
            rect: t.Rect,
            roundRect: t.Rect,
            square: t.Rect,
            circle: t.Circle,
            diamond: n,
            pin: a,
            arrow: o,
            triangle: r
        }, l = {
            line: function (e, t, i, r, n) {
                n.x1 = e, n.y1 = t + r / 2, n.x2 = e + i, n.y2 = t + r / 2
            }, rect: function (e, t, i, r, n) {
                n.x = e, n.y = t, n.width = i, n.height = r
            }, roundRect: function (e, t, i, r, n) {
                n.x = e, n.y = t, n.width = i, n.height = r, n.r = Math.min(i, r) / 4
            }, square: function (e, t, i, r, n) {
                var a = Math.min(i, r);
                n.x = e, n.y = t, n.width = a, n.height = a
            }, circle: function (e, t, i, r, n) {
                n.cx = e + i / 2, n.cy = t + r / 2, n.r = Math.min(i, r) / 2
            }, diamond: function (e, t, i, r, n) {
                n.cx = e + i / 2, n.cy = t + r / 2, n.width = i, n.height = r
            }, pin: function (e, t, i, r, n) {
                n.x = e + i / 2, n.y = t + r / 2, n.width = i, n.height = r
            }, arrow: function (e, t, i, r, n) {
                n.x = e + i / 2, n.y = t + r / 2, n.width = i, n.height = r
            }, triangle: function (e, t, i, r, n) {
                n.cx = e + i / 2, n.cy = t + r / 2, n.width = i, n.height = r
            }
        }, c = {};
        for (var u in s) c[u] = new s[u];
        var h = t.extendShape({
            type: "symbol",
            shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0},
            beforeBrush: function () {
                var e = this.style, t = this.shape;
                "pin" === t.symbolType && "inside" === e.textPosition && (e.textPosition = ["50%", "40%"], e.textAlign = "center", e.textBaseline = "middle")
            },
            buildPath: function (e, t) {
                var i = t.symbolType, r = c[i];
                "none" !== t.symbolType && (r || (i = "rect", r = c[i]), l[i](t.x, t.y, t.width, t.height, r.shape), r.buildPath(e, r.shape))
            }
        }), d = function (e) {
            if ("image" !== this.type) {
                var t = this.style, i = this.shape;
                i && "line" === i.symbolType ? t.stroke = e : this.__isEmptyBrush ? (t.stroke = e, t.fill = "#fff") : (t.fill && (t.fill = e), t.stroke && (t.stroke = e)), this.dirty()
            }
        }, p = {
            createSymbol: function (e, r, n, a, o, s) {
                var l = 0 === e.indexOf("empty");
                l && (e = e.substr(5, 1).toLowerCase() + e.substr(6));
                var c;
                return c = 0 === e.indexOf("image://") ? new t.Image({
                    style: {
                        image: e.slice(8),
                        x: r,
                        y: n,
                        width: a,
                        height: o
                    }
                }) : 0 === e.indexOf("path://") ? t.makePath(e.slice(7), {}, new i(r, n, a, o)) : new h({
                    shape: {
                        symbolType: e,
                        x: r,
                        y: n,
                        width: a,
                        height: o
                    }
                }), c.__isEmptyBrush = l, c.setColor = d, c.setColor(s), c
            }
        };
        return p
    }), t("echarts/chart/helper/Symbol", ["require", "zrender/core/util", "../../util/symbol", "../../util/graphic", "../../util/number"], function (e) {
        function t(e) {
            return n.isArray(e) || (e = [+e, +e]), e
        }

        function i(e, t) {
            o.Group.call(this), this.updateData(e, t)
        }

        function r(e, t) {
            this.parent.drift(e, t)
        }

        var n = e("zrender/core/util"), a = e("../../util/symbol"), o = e("../../util/graphic"),
            s = e("../../util/number"), l = i.prototype;
        l._createSymbol = function (e, i, n) {
            this.removeAll();
            var s = i.hostModel, l = i.getItemVisual(n, "color"), c = a.createSymbol(e, -.5, -.5, 1, 1, l);
            c.attr({style: {strokeNoScale: !0}, z2: 100, scale: [0, 0]}), c.drift = r;
            var u = t(i.getItemVisual(n, "symbolSize"));
            o.initProps(c, {scale: u}, s), this._symbolType = e, this.add(c)
        }, l.stopSymbolAnimation = function (e) {
            this.childAt(0).stopAnimation(e)
        }, l.getScale = function () {
            return this.childAt(0).scale
        }, l.highlight = function () {
            this.childAt(0).trigger("emphasis")
        }, l.downplay = function () {
            this.childAt(0).trigger("normal")
        }, l.setZ = function (e, t) {
            var i = this.childAt(0);
            i.zlevel = e, i.z = t
        }, l.setDraggable = function (e) {
            var t = this.childAt(0);
            t.draggable = e, t.cursor = e ? "move" : "pointer"
        }, l.updateData = function (e, i) {
            var r = e.getItemVisual(i, "symbol") || "circle", n = e.hostModel, a = t(e.getItemVisual(i, "symbolSize"));
            if (r !== this._symbolType) this._createSymbol(r, e, i); else {
                var s = this.childAt(0);
                o.updateProps(s, {scale: a}, n)
            }
            this._updateCommon(e, i, a), this._seriesModel = n
        };
        var c = ["itemStyle", "normal"], u = ["itemStyle", "emphasis"], h = ["label", "normal"],
            d = ["label", "emphasis"];
        return l._updateCommon = function (e, i, r) {
            var a = this.childAt(0), l = e.hostModel, p = e.getItemModel(i), f = p.getModel(c),
                g = e.getItemVisual(i, "color"), m = p.getModel(u).getItemStyle();
            a.rotation = p.getShallow("symbolRotate") * Math.PI / 180 || 0;
            var v = p.getShallow("symbolOffset");
            if (v) {
                var y = a.position;
                y[0] = s.parsePercent(v[0], r[0]), y[1] = s.parsePercent(v[1], r[1])
            }
            a.setColor(g), n.extend(a.style, f.getItemStyle(["color"]));
            var x = p.getModel(h), _ = p.getModel(d), b = e.dimensions[e.dimensions.length - 1],
                w = l.getFormattedLabel(i, "normal") || e.get(b, i), M = a.style;
            x.get("show") ? (o.setText(M, x, g), M.text = w) : M.text = "", _.getShallow("show") ? (o.setText(m, _, g), m.text = w) : m.text = "", o.setHoverStyle(a, m);
            var S = t(e.getItemVisual(i, "symbolSize"));
            if (a.off("mouseover").off("mouseout").off("emphasis").off("normal"), p.getShallow("hoverAnimation")) {
                var A = function () {
                    var e = S[1] / S[0];
                    this.animateTo({scale: [Math.max(1.1 * S[0], S[0] + 3), Math.max(1.1 * S[1], S[1] + 3 * e)]}, 400, "elasticOut")
                }, z = function () {
                    this.animateTo({scale: S}, 400, "elasticOut")
                };
                a.on("mouseover", A).on("mouseout", z).on("emphasis", A).on("normal", z)
            }
        }, l.fadeOut = function (e) {
            var t = this.childAt(0);
            t.style.text = "", o.updateProps(t, {scale: [0, 0]}, this._seriesModel, e)
        }, n.inherits(i, o.Group), i
    }), t("echarts/chart/helper/SymbolDraw", ["require", "../../util/graphic", "./Symbol"], function (e) {
        function t(e) {
            this.group = new r.Group, this._symbolCtor = e || n
        }

        function i(e, t, i) {
            var r = e.getItemLayout(t);
            return r && !isNaN(r[0]) && !isNaN(r[1]) && !(i && i(t)) && "none" !== e.getItemVisual(t, "symbol")
        }

        var r = e("../../util/graphic"), n = e("./Symbol"), a = t.prototype;
        return a.updateData = function (e, t) {
            var n = this.group, a = e.hostModel, o = this._data, s = this._symbolCtor;
            e.diff(o).add(function (r) {
                var a = e.getItemLayout(r);
                if (i(e, r, t)) {
                    var o = new s(e, r);
                    o.attr("position", a), e.setItemGraphicEl(r, o), n.add(o)
                }
            }).update(function (l, c) {
                var u = o.getItemGraphicEl(c), h = e.getItemLayout(l);
                return i(e, l, t) ? (u ? (u.updateData(e, l), r.updateProps(u, {position: h}, a)) : (u = new s(e, l), u.attr("position", h)), n.add(u), void e.setItemGraphicEl(l, u)) : void n.remove(u)
            }).remove(function (e) {
                var t = o.getItemGraphicEl(e);
                t && t.fadeOut(function () {
                    n.remove(t)
                })
            }).execute(), this._data = e
        }, a.updateLayout = function () {
            var e = this._data;
            e && e.eachItemGraphicEl(function (t, i) {
                t.attr("position", e.getItemLayout(i))
            })
        }, a.remove = function (e) {
            var t = this.group, i = this._data;
            i && (e ? i.eachItemGraphicEl(function (e) {
                e.fadeOut(function () {
                    t.remove(e)
                })
            }) : t.removeAll())
        }, t
    }), t("zrender/core/arrayDiff", ["require"], function (e) {
        function t(e, t) {
            return e === t
        }

        function i(e, t, i) {
            var r = {cmd: e, idx: t};
            return "=" === e && (r.idx1 = i), r
        }

        function r(e, t, r, n) {
            e.push(i(t, r, n))
        }

        function n(e, t, i, r, n, a, o, l) {
            var c, u, h, d = i > r, p = n > a, f = s(r - i), g = s(a - n);
            for (u = 0; f >= u; u++) for (h = 0; g >= h; h++) if (0 === u) l[h] = h; else if (0 === h) c = l[h], l[h] = u; else {
                var m = e[d ? i - u : u - 1 + i], v = t[p ? n - h : h - 1 + n], y = c + (o(m, v) ? 0 : 2), x = l[h] + 1,
                    _ = l[h - 1] + 1;
                c = l[h], l[h] = x > y ? y : x, _ < l[h] && (l[h] = _)
            }
            return l
        }

        function a(e, t, i, o, s, l, c, u, h) {
            var d, p, f = [], g = o - i, m = l - s;
            if (g) if (m) if (1 === g) {
                var v = e[i], y = !1;
                for (p = 0; m > p; p++) c(v, t[p + s]) && !y ? (y = !0, r(f, "=", i, p + s)) : r(f, "+", p + s);
                y || r(f, "-", i)
            } else if (1 === m) {
                var x = t[s], y = !1;
                for (d = 0; g > d; d++) c(x, e[d + i]) && !y ? (y = !0, r(f, "=", d + i, s)) : r(f, "-", d + i);
                y || r(f, "+", s)
            } else {
                var _ = (g / 2 | 0) + i;
                n(e, t, i, _, s, l, c, u), n(e, t, o, _ + 1, l, s, c, h);
                var b, w = 1 / 0, M = 0;
                for (p = 0; m >= p; p++) b = u[p] + h[m - p], w > b && (w = b, M = p);
                M += s, f = a(e, t, i, _, s, M, c, u, h);
                var S = a(e, t, _, o, M, l, c, u, h);
                for (d = 0; d < S.length; d++) f.push(S[d])
            } else for (d = 0; g > d; d++) r(f, "-", d + i); else for (p = 0; m > p; p++) r(f, "+", p + s);
            return f
        }

        function o(e, i, n) {
            n = n || t;
            var o, s, l = e.length, c = i.length, u = Math.min(l, c), h = [];
            for (o = 0; u > o && n(e[o], i[o]); o++) r(h, "=", o, o);
            for (s = 0; u > s && n(e[l - s - 1], i[c - s - 1]); s++) ;
            if (l - s >= o || c - s >= o) {
                var d = a(e, i, o, l - s, o, c - s, n, [], []);
                for (o = 0; o < d.length; o++) h.push(d[o]);
                for (o = 0; s > o; o++) r(h, "=", l - s + o, c - s + o)
            }
            return h
        }

        var s = Math.abs;
        return o
    }),t("echarts/chart/line/lineAnimationDiff", ["require", "zrender/core/arrayDiff"], function (e) {
        function t(e) {
            return e >= 0 ? 1 : -1
        }

        function i(e, i, r) {
            for (var n, a = e.getBaseAxis(), o = e.getOtherAxis(a), s = a.onZero ? 0 : o.scale.getExtent()[0], l = o.dim, c = "x" === l || "radius" === l ? 1 : 0, u = i.stackedOn, h = i.get(l, r); u && t(u.get(l, r)) === t(h);) {
                n = u;
                break
            }
            var d = [];
            return d[c] = i.get(a.dim, r), d[1 - c] = n ? n.get(l, r, !0) : s, e.dataToPoint(d)
        }

        var r = e("zrender/core/arrayDiff");
        return function (e, t, n, a, o, s) {
            for (var l = t.mapArray(t.getId), c = e.mapArray(e.getId), u = [], h = [], d = [], p = [], f = [], g = [], m = [], v = r(c, l), y = s.dimensions, x = 0; x < v.length; x++) {
                var _ = v[x], b = !0;
                switch (_.cmd) {
                    case"=":
                        u.push(e.getItemLayout(_.idx)), h.push(t.getItemLayout(_.idx1)), d.push(n[_.idx]), p.push(a[_.idx1]), m.push(t.getRawIndex(_.idx1));
                        break;
                    case"+":
                        var w = _.idx;
                        u.push(o.dataToPoint([t.get(y[0], w, !0), t.get(y[1], w, !0)])),
                            h.push(t.getItemLayout(w).slice()), d.push(i(o, t, w)), p.push(a[w]), m.push(t.getRawIndex(w));
                        break;
                    case"-":
                        var w = _.idx, M = e.getRawIndex(w);
                        M !== w ? (u.push(e.getItemLayout(w)), h.push(s.dataToPoint([e.get(y[0], w, !0), e.get(y[1], w, !0)])), d.push(n[w]), p.push(i(s, e, w)), m.push(M)) : b = !1
                }
                b && (f.push(_), g.push(g.length))
            }
            g.sort(function (e, t) {
                return m[e] - m[t]
            });
            for (var S = [], A = [], z = [], C = [], L = [], x = 0; x < g.length; x++) {
                var w = g[x];
                S[x] = u[w], A[x] = h[w], z[x] = d[w], C[x] = p[w], L[x] = f[w]
            }
            return {current: S, next: A, stackedOnCurrent: z, stackedOnNext: C, status: L}
        }
    }),t("echarts/chart/line/poly", ["require", "zrender/graphic/Path", "zrender/core/vector"], function (e) {
        function t(e, t, i, r, f, g, m, v, y) {
            for (var x = i, _ = 0; f > _; _++) {
                var b = t[x];
                if (x >= r || 0 > x || isNaN(b[0]) || isNaN(b[1])) break;
                if (x === i) e[g > 0 ? "moveTo" : "lineTo"](b[0], b[1]), u(d, b); else if (y > 0) {
                    var w = x - g, M = x + g;
                    g > 0 ? (w = o(w, i), M = a(M, r - 1)) : (M = o(M, 0), w = a(w, i));
                    var S = t[w], A = t[M];
                    (isNaN(A[0]) || isNaN(A[1])) && (A = b), n.sub(h, A, S), c(p, b, h, -y / 2), s(d, d, v), l(d, d, m), s(p, p, v), l(p, p, m), e.bezierCurveTo(d[0], d[1], p[0], p[1], b[0], b[1]), c(d, b, h, y / 2)
                } else e.lineTo(b[0], b[1]);
                x += g
            }
            return _
        }

        function i(e) {
            for (var t = [1 / 0, 1 / 0], i = [-(1 / 0), -(1 / 0)], r = 0; r < e.length; r++) {
                var n = e[r];
                n[0] < t[0] && (t[0] = n[0]), n[1] < t[1] && (t[1] = n[1]), n[0] > i[0] && (i[0] = n[0]), n[1] > i[1] && (i[1] = n[1])
            }
            return {min: t, max: i}
        }

        var r = e("zrender/graphic/Path"), n = e("zrender/core/vector"), a = Math.min, o = Math.max, s = n.min,
            l = n.max, c = n.scaleAndAdd, u = n.copy, h = [], d = [], p = [];
        return {
            Polyline: r.extend({
                type: "ec-polyline",
                shape: {points: [], smooth: 0},
                style: {fill: null, stroke: "#000", smooth: 0},
                buildPath: function (e, r) {
                    for (var n = r.points, a = 0, o = n.length, s = i(n); o > a;) a += t(e, n, a, o, o, 1, s.min, s.max, r.smooth) + 1
                }
            }),
            Polygon: r.extend({
                type: "ec-polygon",
                shape: {points: [], stackedOnPoints: [], smooth: 0, stackedOnSmooth: 0},
                buildPath: function (e, r) {
                    for (var n = r.points, a = r.stackedOnPoints, o = 0, s = n.length, l = i(n), c = i(a); s > o;) {
                        var u = t(e, n, o, s, s, 1, l.min, l.max, r.smooth);
                        t(e, a, o + u - 1, s, u, -1, c.min, c.max, r.stackedOnSmooth), o += u + 1, e.closePath()
                    }
                }
            })
        }
    }),t("echarts/chart/line/LineView", ["require", "zrender/core/util", "../helper/SymbolDraw", "../helper/Symbol", "./lineAnimationDiff", "../../util/graphic", "./poly", "../../view/Chart"], function (e) {
        function t(e, t) {
            if (e.length === t.length) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i], n = t[i];
                    if (r[0] !== n[0] || r[1] !== n[1]) return
                }
                return !0
            }
        }

        function i(e) {
            return "number" == typeof e ? e : e ? .3 : 0
        }

        function r(e) {
            var t = e.getGlobalExtent();
            if (e.onBand) {
                var i = e.getBandWidth() / 2 - 1, r = t[1] > t[0] ? 1 : -1;
                t[0] += r * i, t[1] -= r * i
            }
            return t
        }

        function n(e) {
            return e >= 0 ? 1 : -1
        }

        function a(e, t) {
            var i = e.getBaseAxis(), r = e.getOtherAxis(i), a = i.onZero ? 0 : r.scale.getExtent()[0], o = r.dim,
                s = "x" === o || "radius" === o ? 1 : 0;
            return t.mapArray([o], function (r, l) {
                for (var c, u = t.stackedOn; u && n(u.get(o, l)) === n(r);) {
                    c = u;
                    break
                }
                var h = [];
                return h[s] = t.get(i.dim, l), h[1 - s] = c ? c.get(o, l, !0) : a, e.dataToPoint(h)
            }, !0)
        }

        function o(e, t) {
            return null != t.dataIndex ? t.dataIndex : null != t.name ? e.indexOfName(t.name) : void 0
        }

        function s(e, t, i) {
            var n = r(e.getAxis("x")), a = r(e.getAxis("y")), o = e.getBaseAxis().isHorizontal(), s = n[0], l = a[0],
                c = n[1] - s, u = a[1] - l;
            i.get("clipOverflow") || (o ? (l -= u, u *= 3) : (s -= c, c *= 3));
            var h = new f.Rect({shape: {x: s, y: l, width: c, height: u}});
            return t && (h.shape[o ? "width" : "height"] = 0, f.initProps(h, {shape: {width: c, height: u}}, i)), h
        }

        function l(e, t, i) {
            var r = e.getAngleAxis(), n = e.getRadiusAxis(), a = n.getExtent(), o = r.getExtent(), s = Math.PI / 180,
                l = new f.Sector({
                    shape: {
                        cx: e.cx,
                        cy: e.cy,
                        r0: a[0],
                        r: a[1],
                        startAngle: -o[0] * s,
                        endAngle: -o[1] * s,
                        clockwise: r.inverse
                    }
                });
            return t && (l.shape.endAngle = -o[0] * s, f.initProps(l, {shape: {endAngle: -o[1] * s}}, i)), l
        }

        function c(e, t, i) {
            return "polar" === e.type ? l(e, t, i) : s(e, t, i)
        }

        var u = e("zrender/core/util"), h = e("../helper/SymbolDraw"), d = e("../helper/Symbol"),
            p = e("./lineAnimationDiff"), f = e("../../util/graphic"), g = e("./poly"), m = e("../../view/Chart");
        return m.extend({
            type: "line", init: function () {
                var e = new f.Group, t = new h;
                this.group.add(t.group), this.group.add(e), this._symbolDraw = t, this._lineGroup = e
            }, render: function (e, r, n) {
                var o = e.coordinateSystem, s = this.group, l = e.getData(), h = e.getModel("lineStyle.normal"),
                    d = e.getModel("areaStyle.normal"), p = l.mapArray(l.getItemLayout, !0), f = "polar" === o.type,
                    g = this._coordSys, m = this._symbolDraw, v = this._polyline, y = this._polygon,
                    x = this._lineGroup, _ = e.get("animation"), b = !d.isEmpty(), w = a(o, l), M = e.get("showSymbol"),
                    S = M && !f && !e.get("showAllSymbol") && this._getSymbolIgnoreFunc(l, o), A = this._data;
                A && A.eachItemGraphicEl(function (e, t) {
                    e.__temp && (s.remove(e), A.setItemGraphicEl(t, null))
                }), M || m.remove(), v && g.type === o.type ? (_ && x.setClipPath(c(o, !1, e)), M && m.updateData(l, S), l.eachItemGraphicEl(function (e) {
                    e.stopAnimation(!0)
                }), t(this._stackedOnPoints, w) && t(this._points, p) || (_ ? this._updateAnimation(l, w, o, n) : (v.setShape({points: p}), y && y.setShape({
                    points: p,
                    stackedOnPoints: w
                }))), s.add(x)) : (M && m.updateData(l, S), v = this._newPolyline(s, p, o, _), b && (y = this._newPolygon(s, p, w, o, _)), x.setClipPath(c(o, !0, e))), v.setStyle(u.defaults(h.getLineStyle(), {
                    stroke: l.getVisual("color"),
                    lineJoin: "bevel"
                }));
                var z = e.get("smooth");
                if (z = i(e.get("smooth")), v.shape.smooth = z, y) {
                    var C = y.shape, L = l.stackedOn, I = 0;
                    if (y.style.opacity = .7, y.setStyle(u.defaults(d.getAreaStyle(), {
                        fill: l.getVisual("color"),
                        lineJoin: "bevel"
                    })), C.smooth = z, L) {
                        var T = L.hostModel;
                        I = i(T.get("smooth"))
                    }
                    C.stackedOnSmooth = I
                }
                this._data = l, this._coordSys = o, this._stackedOnPoints = w, this._points = p
            }, highlight: function (e, t, i, r) {
                var n = e.getData(), a = o(n, r);
                if (null != a && a >= 0) {
                    var s = n.getItemGraphicEl(a);
                    if (!s) {
                        var l = n.getItemLayout(a);
                        s = new d(n, a, i), s.position = l, s.setZ(e.get("zlevel"), e.get("z")), s.ignore = isNaN(l[0]) || isNaN(l[1]), s.__temp = !0, n.setItemGraphicEl(a, s), s.stopSymbolAnimation(!0), this.group.add(s)
                    }
                    s.highlight()
                } else m.prototype.highlight.call(this, e, t, i, r)
            }, downplay: function (e, t, i, r) {
                var n = e.getData(), a = o(n, r);
                if (null != a && a >= 0) {
                    var s = n.getItemGraphicEl(a);
                    s && (s.__temp ? (n.setItemGraphicEl(a, null), this.group.remove(s)) : s.downplay())
                } else m.prototype.downplay.call(this, e, t, i, r)
            }, _newPolyline: function (e, t) {
                var i = this._polyline;
                return i && e.remove(i), i = new g.Polyline({
                    shape: {points: t},
                    silent: !0,
                    z2: 10
                }), this._lineGroup.add(i), this._polyline = i, i
            }, _newPolygon: function (e, t, i) {
                var r = this._polygon;
                return r && e.remove(r), r = new g.Polygon({
                    shape: {points: t, stackedOnPoints: i},
                    silent: !0
                }), this._lineGroup.add(r), this._polygon = r, r
            }, _getSymbolIgnoreFunc: function (e, t) {
                var i = t.getAxesByScale("ordinal")[0];
                return i && i.isLabelIgnored ? u.bind(i.isLabelIgnored, i) : void 0
            }, _updateAnimation: function (e, t, i, r) {
                var n = this._polyline, a = this._polygon, o = e.hostModel,
                    s = p(this._data, e, this._stackedOnPoints, t, this._coordSys, i);
                n.shape.points = s.current, f.updateProps(n, {shape: {points: s.next}}, o), a && (a.setShape({
                    points: s.current,
                    stackedOnPoints: s.stackedOnCurrent
                }), f.updateProps(a, {shape: {points: s.next, stackedOnPoints: s.stackedOnNext}}, o));
                for (var l = [], c = s.status, u = 0; u < c.length; u++) {
                    var h = c[u].cmd;
                    if ("=" === h) {
                        var d = e.getItemGraphicEl(c[u].idx1);
                        d && l.push({el: d, ptIdx: u})
                    }
                }
                n.animators && n.animators.length && n.animators[0].during(function () {
                    for (var e = 0; e < l.length; e++) {
                        var t = l[e].el;
                        t.attr("position", n.shape.points[l[e].ptIdx])
                    }
                })
            }, remove: function (e) {
                var t = this.group;
                t.remove(this._lineGroup), this._symbolDraw.remove(!0)
            }
        })
    }),t("echarts/visual/symbol", ["require"], function (e) {
        return function (e, t, i, r, n) {
            r.eachRawSeriesByType(e, function (e) {
                var n = e.getData(), a = e.get("symbol") || t, o = e.get("symbolSize");
                n.setVisual({
                    legendSymbol: i || a,
                    symbol: a,
                    symbolSize: o
                }), r.isSeriesFiltered(e) || ("function" == typeof o && n.each(function (t) {
                    var i = e.getRawValue(t), r = e.getDataParams(t);
                    n.setItemVisual(t, "symbolSize", o(i, r))
                }), n.each(function (e) {
                    var t = n.getItemModel(e), i = t.get("symbol", !0), r = t.get("symbolSize", !0);
                    null != i && n.setItemVisual(e, "symbol", i), null != r && n.setItemVisual(e, "symbolSize", r)
                }))
            })
        }
    }),t("echarts/layout/points", ["require"], function (e) {
        return function (e, t, i) {
            t.eachSeriesByType(e, function (e) {
                var t = e.getData(), i = e.coordinateSystem, r = i.dimensions;
                t.each(r, function (e, r, n) {
                    var a;
                    a = isNaN(e) || isNaN(r) ? [NaN, NaN] : i.dataToPoint([e, r]), t.setItemLayout(n, a)
                }, !0)
            })
        }
    }),t("echarts/chart/line", ["require", "zrender/core/util", "../echarts", "./line/LineSeries", "./line/LineView", "../visual/symbol", "../layout/points"], function (e) {
        var t = e("zrender/core/util"), i = e("../echarts");
        e("./line/LineSeries"), e("./line/LineView"), i.registerVisualCoding("chart", t.curry(e("../visual/symbol"), "line", "circle", "line")), i.registerLayout(t.curry(e("../layout/points"), "line"))
    }),t("echarts/scale/Scale", ["require", "../util/clazz"], function (e) {
        function t() {
            this._extent = [1 / 0, -(1 / 0)], this._interval = 0, this.init && this.init.apply(this, arguments)
        }

        var i = e("../util/clazz"), r = t.prototype;
        return r.contain = function (e) {
            var t = this._extent;
            return e >= t[0] && e <= t[1]
        }, r.normalize = function (e) {
            var t = this._extent;
            return t[1] === t[0] ? .5 : (e - t[0]) / (t[1] - t[0])
        }, r.scale = function (e) {
            var t = this._extent;
            return e * (t[1] - t[0]) + t[0]
        }, r.unionExtent = function (e) {
            var t = this._extent;
            e[0] < t[0] && (t[0] = e[0]), e[1] > t[1] && (t[1] = e[1])
        }, r.getExtent = function () {
            return this._extent.slice()
        }, r.setExtent = function (e, t) {
            var i = this._extent;
            isNaN(e) || (i[0] = e), isNaN(t) || (i[1] = t)
        }, r.getTicksLabels = function () {
            for (var e = [], t = this.getTicks(), i = 0; i < t.length; i++) e.push(this.getLabel(t[i]));
            return e
        }, i.enableClassExtend(t), i.enableClassManagement(t, {registerWhenExtend: !0}), t
    }),t("echarts/scale/Ordinal", ["require", "zrender/core/util", "./Scale"], function (e) {
        var t = e("zrender/core/util"), i = e("./Scale"), r = i.prototype, n = i.extend({
            type: "ordinal", init: function (e, t) {
                this._data = e, this._extent = t || [0, e.length - 1]
            }, contain: function (e) {
                return r.contain.call(this, e) && null != this._data[e]
            }, normalize: function (e) {
                return "string" == typeof e && (e = t.indexOf(this._data, e)), r.normalize.call(this, e)
            }, scale: function (e) {
                return Math.round(r.scale.call(this, e))
            }, getTicks: function () {
                for (var e = [], t = this._extent, i = t[0]; i <= t[1];) e.push(i), i++;
                return e
            }, getLabel: function (e) {
                return this._data[e]
            }, count: function () {
                return this._extent[1] - this._extent[0] + 1
            }, niceTicks: t.noop, niceExtent: t.noop
        });
        return n.create = function () {
            return new n
        }, n
    }),t("echarts/scale/Interval", ["require", "../util/number", "../util/format", "./Scale"], function (e) {
        var t = e("../util/number"), i = e("../util/format"), r = e("./Scale"), n = Math.floor, a = Math.ceil,
            o = r.extend({
                type: "interval", _interval: 0, setExtent: function (e, t) {
                    var i = this._extent;
                    isNaN(e) || (i[0] = e), isNaN(t) || (i[1] = t)
                }, unionExtent: function (e) {
                    var t = this._extent;
                    e[0] < t[0] && (t[0] = e[0]), e[1] > t[1] && (t[1] = e[1]), o.prototype.setExtent.call(this, t[0], t[1])
                }, getInterval: function () {
                    return this._interval || this.niceTicks(), this._interval
                }, setInterval: function (e) {
                    this._interval = e, this._niceExtent = this._extent.slice()
                }, getTicks: function () {
                    this._interval || this.niceTicks();
                    var e = this._interval, i = this._extent, r = [], n = 1e4;
                    if (e) {
                        var a = this._niceExtent;
                        i[0] < a[0] && r.push(i[0]);
                        for (var o = a[0]; o <= a[1];) if (r.push(o), o = t.round(o + e), r.length > n) return [];
                        i[1] > a[1] && r.push(i[1])
                    }
                    return r
                }, getTicksLabels: function () {
                    for (var e = [], t = this.getTicks(), i = 0; i < t.length; i++) e.push(this.getLabel(t[i]));
                    return e
                }, getLabel: function (e) {
                    return i.addCommas(e)
                }, niceTicks: function (e) {
                    e = e || 10;
                    var i = this._extent, r = i[1] - i[0];
                    if (!(r === 1 / 0 || 0 >= r)) {
                        var o = Math.pow(10, Math.floor(Math.log(r / e) / Math.LN10)), s = e / r * o;
                        .15 >= s ? o *= 10 : .3 >= s ? o *= 5 : .5 >= s ? o *= 3 : .75 >= s && (o *= 2);
                        var l = [t.round(a(i[0] / o) * o), t.round(n(i[1] / o) * o)];
                        this._interval = o, this._niceExtent = l
                    }
                }, niceExtent: function (e, i, r) {
                    var o = this._extent;
                    if (o[0] === o[1]) {
                        var s = o[0] / 2 || 1;
                        o[0] -= s, o[1] += s
                    }
                    if (o[1] === -(1 / 0) && o[0] === 1 / 0) return o[1] = 1, o[0] = -1, this._niceExtent = [-1, 1], void(this._interval = .5);
                    this.niceTicks(e, i, r);
                    var l = this._interval;
                    i || (o[0] = t.round(n(o[0] / l) * l)), r || (o[1] = t.round(a(o[1] / l) * l))
                }
            });
        return o.create = function () {
            return new o
        }, o
    }),t("echarts/scale/Time", ["require", "zrender/core/util", "../util/number", "./Interval"], function (e) {
        var t = e("zrender/core/util"), i = e("../util/number"), r = e("./Interval"), n = r.prototype, a = Math.ceil,
            o = Math.floor, s = function (e, t, i, r) {
                for (; r > i;) {
                    var n = i + r >>> 1;
                    e[n][2] < t ? i = n + 1 : r = n
                }
                return i
            }, l = function (e) {
                return 10 > e ? "0" + e : e
            }, c = function (e, t) {
                ("week" === e || "month" === e || "quarter" === e || "half-year" === e || "year" === e) && (e = "MM-dd\nyyyy");
                var r = i.parseDate(t), n = r.getFullYear(), a = r.getMonth() + 1, o = r.getDate(), s = r.getHours(),
                    c = r.getMinutes(), u = r.getSeconds();
                return e = e.replace("MM", l(a)).toLowerCase().replace("yyyy", n).replace("yy", n % 100).replace("dd", l(o)).replace("d", o).replace("hh", l(s)).replace("h", s).replace("mm", l(c)).replace("m", c).replace("ss", l(u)).replace("s", u)
            }, u = r.extend({
                type: "time", getLabel: function (e) {
                    var t = this._stepLvl, i = new Date(e);
                    return c(t[0], i)
                }, niceTicks: function (e) {
                    e = e || 10;
                    var t = this._extent, i = t[1] - t[0], r = i / e, n = h.length, l = s(h, r, 0, n),
                        c = h[Math.min(l, n - 1)], u = c[2], d = [a(t[0] / u) * u, o(t[1] / u) * u];
                    this._stepLvl = c, this._interval = u, this._niceExtent = d
                }
            });
        t.each(["contain", "normalize"], function (e) {
            u.prototype[e] = function (t) {
                return t = +i.parseDate(t), n[e].call(this, t)
            }
        });
        var h = [["hh:mm:ss", 1, 1e3], ["hh:mm:ss", 5, 5e3], ["hh:mm:ss", 10, 1e4], ["hh:mm:ss", 15, 15e3], ["hh:mm:ss", 30, 3e4], ["hh:mm\nMM-dd", 1, 6e4], ["hh:mm\nMM-dd", 5, 3e5], ["hh:mm\nMM-dd", 10, 6e5], ["hh:mm\nMM-dd", 15, 9e5], ["hh:mm\nMM-dd", 30, 18e5], ["hh:mm\nMM-dd", 1, 36e5], ["hh:mm\nMM-dd", 2, 72e5], ["hh:mm\nMM-dd", 6, 216e5], ["hh:mm\nMM-dd", 12, 432e5], ["MM-dd\nyyyy", 1, 864e5], ["week", 7, 6048e5], ["month", 1, 26784e5], ["quarter", 3, 8208e6], ["half-year", 6, 16416e6], ["year", 1, 32832e6]];
        return u.create = function () {
            return new u
        }, u
    }),t("echarts/scale/Log", ["require", "zrender/core/util", "./Scale", "../util/number", "./Interval"], function (e) {
        var t = e("zrender/core/util"), i = e("./Scale"), r = e("../util/number"), n = e("./Interval"), a = i.prototype,
            o = n.prototype, s = Math.floor, l = Math.ceil, c = Math.pow, u = 10, h = Math.log, d = i.extend({
                type: "log", getTicks: function () {
                    return t.map(o.getTicks.call(this), function (e) {
                        return r.round(c(u, e))
                    })
                }, getLabel: o.getLabel, scale: function (e) {
                    return e = a.scale.call(this, e), c(u, e)
                }, setExtent: function (e, t) {
                    e = h(e) / h(u), t = h(t) / h(u), o.setExtent.call(this, e, t)
                }, getExtent: function () {
                    var e = a.getExtent.call(this);
                    return e[0] = c(u, e[0]), e[1] = c(u, e[1]), e
                }, unionExtent: function (e) {
                    e[0] = h(e[0]) / h(u), e[1] = h(e[1]) / h(u), a.unionExtent.call(this, e)
                }, niceTicks: function (e) {
                    e = e || 10;
                    var t = this._extent, i = t[1] - t[0];
                    if (!(i === 1 / 0 || 0 >= i)) {
                        var n = c(10, s(h(i / e) / Math.LN10)), a = e / i * n;
                        .5 >= a && (n *= 10);
                        var o = [r.round(l(t[0] / n) * n), r.round(s(t[1] / n) * n)];
                        this._interval = n, this._niceExtent = o
                    }
                }, niceExtent: o.niceExtent
            });
        return t.each(["contain", "normalize"], function (e) {
            d.prototype[e] = function (t) {
                return t = h(t) / h(u), a[e].call(this, t)
            }
        }), d.create = function () {
            return new d
        }, d
    }),t("echarts/coord/axisHelper", ["require", "../scale/Ordinal", "../scale/Interval", "../scale/Time", "../scale/Log", "../scale/Scale", "../util/number", "zrender/core/util", "zrender/contain/text"], function (e) {
        var t = e("../scale/Ordinal"), i = e("../scale/Interval");
        e("../scale/Time"), e("../scale/Log");
        var r = e("../scale/Scale"), n = e("../util/number"), a = e("zrender/core/util"), o = e("zrender/contain/text"),
            s = {};
        return s.niceScaleExtent = function (e, t) {
            var i = e.scale;
            if ("ordinal" !== i.type) {
                var r = t.get("min"), o = t.get("max"), s = t.get("boundaryGap");
                a.isArray(s) || (s = [s || 0, s || 0]), s[0] = n.parsePercent(s[0], 1), s[1] = n.parsePercent(s[1], 1);
                var l = i.getExtent(), c = l[1] - l[0], u = !0, h = !0;
                null == r && (r = l[0] - s[0] * c, u = !1), null == o && (o = l[1] + s[1] * c, h = !1), "dataMin" === r && (r = l[0]), "dataMax" === o && (o = l[1]), i.setExtent(r, o), i.niceExtent(t.get("splitNumber"), u, h);
                var d = t.get("interval");
                null != d && i.setInterval && i.setInterval(d)
            }
        }, s.createScaleByModel = function (e, n) {
            if (n = n || e.get("type")) switch (n) {
                case"category":
                    return new t(e.getCategories(), [1 / 0, -(1 / 0)]);
                case"value":
                    return new i;
                default:
                    return (r.getClass(n) || i).create(e)
            }
        }, s.ifAxisCrossZero = function (e) {
            var t = e.scale.getExtent(), i = t[0], r = t[1], n = e.model.get("min"), a = e.model.get("max");
            return isNaN(n) || (i = Math.min(n, i)), isNaN(a) || (r = Math.max(a, r)), !(i > 0 && r > 0 || 0 > i && 0 > r) || s.ifAxisNeedsCrossZero(e)
        }, s.ifAxisNeedsCrossZero = function (e) {
            return !e.model.get("scale")
        }, s.getAxisLabelInterval = function (e, t, i, r) {
            for (var n, a = 0, s = 0, l = 0; l < e.length; l++) {
                var c = e[l], u = o.getBoundingRect(t[l], i, "center", "top");
                u[r ? "x" : "y"] += c, u[r ? "width" : "height"] *= 1.5, n ? n.intersect(u) ? (s++, a = Math.max(a, s)) : (n.union(u), s = 0) : n = u.clone()
            }
            return a
        }, s.getFormattedLabels = function (e, t) {
            var i = e.scale, r = i.getTicksLabels(), n = i.getTicks();
            return "string" == typeof t ? (t = function (e) {
                return function (t) {
                    return e.replace("{value}", t)
                }
            }(t), a.map(r, t)) : "function" == typeof t ? a.map(n, function (r, n) {
                return t("category" === e.type ? i.getLabel(r) : r, n)
            }, this) : r
        }, s
    }),t("echarts/coord/cartesian/Cartesian", ["require", "zrender/core/util"], function (e) {
        function t(e) {
            return this._axes[e]
        }

        var i = e("zrender/core/util"), r = function (e) {
            this._axes = {}, this._dimList = [], this.name = e || ""
        };
        return r.prototype = {
            constructor: r, type: "cartesian", getAxis: function (e) {
                return this._axes[e]
            }, getAxes: function () {
                return i.map(this._dimList, t, this)
            }, getAxesByScale: function (e) {
                return e = e.toLowerCase(), i.filter(this.getAxes(), function (t) {
                    return t.scale.type === e
                })
            }, addAxis: function (e) {
                var t = e.dim;
                this._axes[t] = e, this._dimList.push(t)
            }, dataToCoord: function (e) {
                return this._dataCoordConvert(e, "dataToCoord")
            }, coordToData: function (e) {
                return this._dataCoordConvert(e, "coordToData")
            }, _dataCoordConvert: function (e, t) {
                for (var i = this._dimList, r = e instanceof Array ? [] : {}, n = 0; n < i.length; n++) {
                    var a = i[n], o = this._axes[a];
                    r[a] = o[t](e[a])
                }
                return r
            }
        }, r
    }),t("echarts/coord/cartesian/Cartesian2D", ["require", "zrender/core/util", "./Cartesian"], function (e) {
        function t(e) {
            r.call(this, e), this.dimensions = ["x", "y"]
        }

        var i = e("zrender/core/util"), r = e("./Cartesian");
        return t.prototype = {
            constructor: t, type: "cartesian2d", getBaseAxis: function () {
                return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
            }, containPoint: function (e) {
                var t = this.getAxis("x"), i = this.getAxis("y");
                return t.contain(t.toLocalCoord(e[0])) && i.contain(i.toLocalCoord(e[1]))
            }, containData: function (e) {
                return this.getAxis("x").containData(e[0]) && this.getAxis("y").containData(e[1])
            }, dataToPoints: function (e, t) {
                return e.mapArray(["x", "y"], function (e, t) {
                    return this.dataToPoint([e, t])
                }, t, this)
            }, dataToPoint: function (e, t) {
                var i = this.getAxis("x"), r = this.getAxis("y");
                return [i.toGlobalCoord(i.dataToCoord(e[0], t)), r.toGlobalCoord(r.dataToCoord(e[1], t))]
            }, pointToData: function (e, t) {
                var i = this.getAxis("x"), r = this.getAxis("y");
                return [i.coordToData(i.toLocalCoord(e[0]), t), r.coordToData(r.toLocalCoord(e[1]), t)]
            }, getOtherAxis: function (e) {
                return this.getAxis("x" === e.dim ? "y" : "x")
            }
        }, i.inherits(t, r), t
    }),t("echarts/coord/Axis", ["require", "../util/number", "zrender/core/util"], function (e) {
        function t(e, t) {
            var i = e[1] - e[0], r = t, n = i / r / 2;
            e[0] += n, e[1] -= n
        }

        var i = e("../util/number"), r = i.linearMap, n = e("zrender/core/util"), a = function (e, t, i) {
            this.dim = e, this.scale = t, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
        };
        return a.prototype = {
            constructor: a, contain: function (e) {
                var t = this._extent, i = Math.min(t[0], t[1]), r = Math.max(t[0], t[1]);
                return e >= i && r >= e
            }, containData: function (e) {
                return this.contain(this.dataToCoord(e))
            }, getExtent: function () {
                var e = this._extent.slice();
                return e
            }, getPixelPrecision: function (e) {
                return i.getPixelPrecision(e || this.scale.getExtent(), this._extent)
            }, setExtent: function (e, t) {
                var i = this._extent;
                i[0] = e, i[1] = t
            }, dataToCoord: function (e, i) {
                e = this.scale.normalize(e);
                var n = this.getExtent(), a = this.scale;
                return this.onBand && "ordinal" === a.type && t(n, a.count()), r(e, [0, 1], n, i)
            }, coordToData: function (e, i) {
                var n = this.getExtent();
                this.onBand && t(n, this.scale.count());
                var a = r(e, n, [0, 1], i);
                return this.scale.scale(a)
            }, getTicksCoords: function () {
                if (this.onBand) {
                    for (var e = this.getBands(), t = [], i = 0; i < e.length; i++) t.push(e[i][0]);
                    return e[i - 1] && t.push(e[i - 1][1]), t
                }
                return n.map(this.scale.getTicks(), this.dataToCoord, this)
            }, getLabelsCoords: function () {
                if (this.onBand) {
                    for (var e, t = this.getBands(), i = [], r = 0; r < t.length; r++) e = t[r], i.push((e[0] + e[1]) / 2);
                    return i
                }
                return n.map(this.scale.getTicks(), this.dataToCoord, this)
            }, getBands: function () {
                for (var e = this.getExtent(), t = [], i = this.scale.count(), r = e[0], n = e[1], a = n - r, o = 0; i > o; o++) t.push([a * o / i + r, a * (o + 1) / i + r]);
                return t
            }, getBandWidth: function () {
                var e = this._extent, t = this.scale.getExtent(), i = t[1] - t[0] + (this.onBand ? 1 : 0),
                    r = Math.abs(e[1] - e[0]);
                return Math.abs(r) / i
            }
        }, a
    }),t("echarts/coord/cartesian/axisLabelInterval", ["require", "zrender/core/util", "../axisHelper"], function (e) {
        var t = e("zrender/core/util"), i = e("../axisHelper");
        return function (e) {
            var r = e.model, n = r.getModel("axisLabel"), a = n.get("interval");
            return "category" !== e.type || "auto" !== a ? "auto" === a ? 0 : a : i.getAxisLabelInterval(t.map(e.scale.getTicks(), e.dataToCoord, e), r.getFormattedLabels(), n.getModel("textStyle").getFont(), e.isHorizontal())
        }
    }),t("echarts/coord/cartesian/Axis2D", ["require", "zrender/core/util", "../Axis", "./axisLabelInterval"], function (e) {
        var t = e("zrender/core/util"), i = e("../Axis"), r = e("./axisLabelInterval"), n = function (e, t, r, n, a) {
            i.call(this, e, t, r), this.type = n || "value", this.position = a || "bottom"
        };
        return n.prototype = {
            constructor: n, index: 0, onZero: !1, model: null, isHorizontal: function () {
                var e = this.position;
                return "top" === e || "bottom" === e
            }, getGlobalExtent: function () {
                var e = this.getExtent();
                return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), e
            }, getLabelInterval: function () {
                var e = this._labelInterval;
                return e || (e = this._labelInterval = r(this)), e
            }, isLabelIgnored: function (e) {
                if ("category" === this.type) {
                    var t = this.getLabelInterval();
                    return "function" == typeof t && !t(e, this.scale.getLabel(e)) || e % (t + 1)
                }
            }, toLocalCoord: null, toGlobalCoord: null
        }, t.inherits(n, i), n
    }),t("echarts/coord/axisDefault", ["require", "zrender/core/util"], function (e) {
        var t = e("zrender/core/util"), i = {
                show: !0,
                zlevel: 0,
                z: 0,
                inverse: !1,
                name: "",
                nameLocation: "end",
                nameTextStyle: {},
                nameGap: 15,
                axisLine: {show: !0, onZero: !0, lineStyle: {color: "#333", width: 1, type: "solid"}},
                axisTick: {show: !0, inside: !1, length: 5, lineStyle: {color: "#333", width: 1}},
                axisLabel: {show: !0, inside: !1, rotate: 0, margin: 8, textStyle: {color: "#333", fontSize: 12}},
                splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
                splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
            }, r = t.merge({boundaryGap: !0, axisTick: {interval: "auto"}, axisLabel: {interval: "auto"}}, i),
            n = t.defaults({boundaryGap: [0, 0], splitNumber: 5}, i),
            a = t.defaults({scale: !0, min: "dataMin", max: "dataMax"}, n), o = t.defaults({}, n);
        return o.scale = !0, {categoryAxis: r, valueAxis: n, timeAxis: a, logAxis: o}
    }),t("echarts/coord/axisModelCreator", ["require", "./axisDefault", "zrender/core/util", "../model/Component"], function (e) {
        var t = e("./axisDefault"), i = e("zrender/core/util"), r = e("../model/Component"),
            n = ["value", "category", "time", "log"];
        return function (e, a, o, s) {
            i.each(n, function (r) {
                a.extend({
                    type: e + "Axis." + r, mergeDefaultAndTheme: function (t, n) {
                        var a = n.getTheme();
                        i.merge(t, a.get(r + "Axis")), i.merge(t, this.getDefaultOption()), t.type = o(e, t)
                    }, defaultOption: i.mergeAll([{}, t[r + "Axis"], s], !0)
                })
            }), r.registerSubTypeDefaulter(e + "Axis", i.curry(o, e))
        }
    }),t("echarts/coord/axisModelCommonMixin", ["require", "zrender/core/util", "./axisHelper"], function (e) {
        function t(e) {
            return n.isObject(e) && null != e.value ? e.value : e
        }

        function i() {
            return "category" === this.get("type") && n.map(this.get("data"), t)
        }

        function r() {
            return a.getFormattedLabels(this.axis, this.get("axisLabel.formatter"))
        }

        var n = e("zrender/core/util"), a = e("./axisHelper");
        return {getFormattedLabels: r, getCategories: i}
    }),t("echarts/coord/cartesian/AxisModel", ["require", "../../model/Component", "zrender/core/util", "../axisModelCreator", "../axisModelCommonMixin"], function (e) {
        function t(e, t) {
            return t.type || (t.data ? "category" : "value")
        }

        var i = e("../../model/Component"), r = e("zrender/core/util"), n = e("../axisModelCreator"), a = i.extend({
            type: "cartesian2dAxis", axis: null, setNeedsCrossZero: function (e) {
                this.option.scale = !e
            }, setMin: function (e) {
                this.option.min = e
            }, setMax: function (e) {
                this.option.max = e
            }
        });
        r.merge(a.prototype, e("../axisModelCommonMixin"));
        var o = {gridIndex: 0};
        return n("x", a, t, o), n("y", a, t, o), a
    }),t("echarts/coord/cartesian/GridModel", ["require", "./AxisModel", "../../model/Component"], function (e) {
        e("./AxisModel");
        var t = e("../../model/Component");
        return t.extend({
            type: "grid",
            dependencies: ["xAxis", "yAxis"],
            layoutMode: "box",
            coordinateSystem: null,
            defaultOption: {
                show: !1,
                zlevel: 0,
                z: 0,
                left: "10%",
                top: 60,
                right: "10%",
                bottom: 60,
                containLabel: !1,
                backgroundColor: "rgba(0,0,0,0)",
                borderWidth: 1,
                borderColor: "#ccc"
            }
        })
    }),t("echarts/coord/cartesian/Grid", ["require", "exports", "module", "../../util/layout", "../../coord/axisHelper", "zrender/core/util", "./Cartesian2D", "./Axis2D", "./GridModel", "../../CoordinateSystem"], function (e, t) {
        function i(e, t, i) {
            return i.getComponent("grid", e.get("gridIndex")) === t
        }

        function r(e) {
            for (var t, i = e.model, r = i.getFormattedLabels(), n = 0; n < r.length; n++) if (!e.isLabelIgnored(n)) {
                var a = i.getTextRect(r[n]);
                t ? t.union(a) : t = a
            }
            return t
        }

        function n(e, t, i) {
            this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(e, t, i)
        }

        function a(e, t) {
            var i = e.getExtent(), r = i[0] + i[1];
            e.toGlobalCoord = "x" === e.dim ? function (e) {
                return e + t
            } : function (e) {
                return r - e + t
            }, e.toLocalCoord = "x" === e.dim ? function (e) {
                return e - t
            } : function (e) {
                return r - e + t
            }
        }

        var o = e("../../util/layout"), s = e("../../coord/axisHelper"), l = e("zrender/core/util"),
            c = e("./Cartesian2D"), u = e("./Axis2D"), h = l.each, d = s.ifAxisCrossZero, p = s.ifAxisNeedsCrossZero,
            f = s.niceScaleExtent;
        e("./GridModel");
        var g = n.prototype;
        return g.type = "grid", g.getRect = function () {
            return this._rect
        }, g.resize = function (e, t) {
            function i() {
                h(s, function (e) {
                    var t = e.isHorizontal(), i = t ? [0, n.width] : [0, n.height], r = e.inverse ? 1 : 0;
                    e.setExtent(i[r], i[1 - r]), a(e, t ? n.x : n.y)
                })
            }

            var n = o.getLayoutRect(e.getBoxLayoutParams(), {width: t.getWidth(), height: t.getHeight()});
            this._rect = n;
            var s = this._axesList;
            i(), e.get("containLabel") && (h(s, function (e) {
                if (!e.model.get("axisLabel.inside")) {
                    var t = r(e);
                    if (t) {
                        var i = e.isHorizontal() ? "height" : "width", a = e.model.get("axisLabel.margin");
                        n[i] -= t[i] + a, "top" === e.position ? n.y += t.height + a : "left" === e.position && (n.x += t.width + a)
                    }
                }
            }), i())
        }, g.getAxis = function (e, t) {
            if (null != t) {
                var i = e + t;
                return this._axesMap[i]
            }
            for (var r = this._axesList, n = 0; n < r.length; n++) if (r[n].dim === e) return r[n]
        }, g.getCartesian = function (e, t) {
            var i = "x" + e + "y" + t;
            return this._coordsMap[i]
        }, g._initCartesian = function (e, t, r) {
            function n(e) {
                var t = l[e];
                return t[0] && ("category" === t[0].type || !d(t[0])) || t[1] && ("category" === t[1].type || !d(t[1]))
            }

            function a(r) {
                return function (n, a) {
                    if (i(n, e, t)) {
                        var c = n.get("position");
                        "x" === r ? ("top" !== c && "bottom" !== c && (c = "bottom"), o[c] && (c = "top" === c ? "bottom" : "top")) : ("left" !== c && "right" !== c && (c = "left"), o[c] && (c = "left" === c ? "right" : "left")), o[c] = !0;
                        var h = new u(r, s.createScaleByModel(n), [0, 0], n.get("type"), c), d = "category" === h.type;
                        h.onBand = d && n.get("boundaryGap"), h.inverse = n.get("inverse"), h.onZero = n.get("axisLine.onZero"), n.axis = h, h.model = n, h.index = a, this._axesList.push(h), this._axesMap[r + a] = h, l[r][a] = h, g[r]++
                    }
                }
            }

            var o = {left: !1, right: !1, top: !1, bottom: !1}, l = {x: {}, y: {}}, g = {x: 0, y: 0};
            return t.eachComponent("xAxis", a("x"), this), t.eachComponent("yAxis", a("y"), this), g.x && g.y ? (h(l.x, function (e, t) {
                h(l.y, function (i, r) {
                    var n = "x" + t + "y" + r, a = new c(n);
                    a.grid = this, this._coordsMap[n] = a, this._coordsList.push(a), a.addAxis(e), a.addAxis(i)
                }, this)
            }, this), this._updateCartesianFromSeries(t, e), h(l.x, function (e) {
                n("y") && (e.onZero = !1), p(e) && e.scale.unionExtent([0, 0]), f(e, e.model)
            }, this), void h(l.y, function (e) {
                n("x") && (e.onZero = !1), p(e) && e.scale.unionExtent([0, 0]), f(e, e.model)
            }, this)) : (this._axesMap = {}, void(this._axesList = []))
        }, g._updateCartesianFromSeries = function (e, t) {
            function r(e, t, i, r) {
                h(r.getDimensionsOnAxis(i), function (i) {
                    t.scale.unionExtent(e.getDataExtent(i, "ordinal" !== t.scale.type))
                })
            }

            e.eachSeries(function (n) {
                if ("cartesian2d" === n.get("coordinateSystem")) {
                    var a = n.get("xAxisIndex"), o = n.get("yAxisIndex"), s = e.getComponent("xAxis", a),
                        l = e.getComponent("yAxis", o);
                    if (!i(s, t, e) || !i(l, t, e)) return;
                    var c = this.getCartesian(a, o), u = n.getData();
                    "list" === u.type && (r(u, c.getAxis("x"), "x", n), r(u, c.getAxis("y"), "y", n))
                }
            }, this)
        }, n.create = function (e, t) {
            var i = [];
            return e.eachComponent("grid", function (r, a) {
                var o = new n(r, e, t);
                o.name = "grid_" + a, o.resize(r, t), r.coordinateSystem = o, i.push(o)
            }), e.eachSeries(function (t) {
                if ("cartesian2d" === t.get("coordinateSystem")) {
                    var r = t.get("xAxisIndex"), n = e.getComponent("xAxis", r), a = i[n.get("gridIndex")];
                    t.coordinateSystem = a.getCartesian(r, t.get("yAxisIndex"))
                }
            }), i
        }, e("../../CoordinateSystem").register("grid", n), n
    }),t("echarts/chart/bar/BarSeries", ["require", "../../model/Series", "../helper/createListFromArray"], function (e) {
        var t = e("../../model/Series"), i = e("../helper/createListFromArray");
        return t.extend({
            type: "series.bar",
            dependencies: ["grid", "polar"],
            getInitialData: function (e, t) {
                return i(e.data, this, t)
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                barMinHeight: 0,
                barGap: "30%",
                barCategoryGap: "20%",
                itemStyle: {
                    normal: {barBorderColor: "#fff", barBorderWidth: 0},
                    emphasis: {barBorderColor: "#fff", barBorderWidth: 0}
                }
            }
        })
    }),t("echarts/chart/bar/barItemStyle", ["require", "../../model/mixin/makeStyleMapper"], function (e) {
        return {getBarItemStyle: e("../../model/mixin/makeStyleMapper")([["fill", "color"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]])}
    }),t("echarts/chart/bar/BarView", ["require", "zrender/core/util", "../../util/graphic", "../../model/Model", "./barItemStyle", "../../echarts"], function (e) {
        function t(e, t) {
            var i = e.width > 0 ? 1 : -1, r = e.height > 0 ? 1 : -1;
            e.x += i * t / 2, e.y += r * t / 2, e.width -= i * t, e.height -= r * t
        }

        var i = e("zrender/core/util"), r = e("../../util/graphic");
        return i.extend(e("../../model/Model").prototype, e("./barItemStyle")), e("../../echarts").extendChartView({
            type: "bar",
            render: function (e, t, i) {
                var r = e.get("coordinateSystem");
                return "cartesian2d" === r && this._renderOnCartesian(e, t, i), this.group
            },
            _renderOnCartesian: function (e, n, a) {
                function o(n, a) {
                    var o = l.getItemLayout(n), s = l.getItemModel(n).get(f) || 0;
                    t(o, s);
                    var c = new r.Rect({shape: i.extend({}, o)});
                    if (p) {
                        var u = c.shape, h = d ? "height" : "width", g = {};
                        u[h] = 0, g[h] = o[h], r[a ? "updateProps" : "initProps"](c, {shape: g}, e)
                    }
                    return c
                }

                var s = this.group, l = e.getData(), c = this._data, u = e.coordinateSystem, h = u.getBaseAxis(),
                    d = h.isHorizontal(), p = e.get("animation"), f = ["itemStyle", "normal", "barBorderWidth"];
                l.diff(c).add(function (e) {
                    if (l.hasValue(e)) {
                        var t = o(e);
                        l.setItemGraphicEl(e, t), s.add(t)
                    }
                }).update(function (i, n) {
                    var a = c.getItemGraphicEl(n);
                    if (!l.hasValue(i)) return void s.remove(a);
                    a || (a = o(i, !0));
                    var u = l.getItemLayout(i), h = l.getItemModel(i).get(f) || 0;
                    t(u, h), r.updateProps(a, {shape: u}, e), l.setItemGraphicEl(i, a), s.add(a)
                }).remove(function (t) {
                    var i = c.getItemGraphicEl(t);
                    i && (i.style.text = "", r.updateProps(i, {shape: {width: 0}}, e, function () {
                        s.remove(i)
                    }))
                }).execute(), this._updateStyle(e, l, d), this._data = l
            },
            _updateStyle: function (e, t, n) {
                function a(e, t, i, n, a) {
                    r.setText(e, t, i), e.text = n, "outside" === e.textPosition && (e.textPosition = a)
                }

                t.eachItemGraphicEl(function (o, s) {
                    var l = t.getItemModel(s), c = l.getModel("label.normal"), u = t.getItemVisual(s, "color"),
                        h = t.getItemLayout(s), d = l.getModel("itemStyle.emphasis").getItemStyle();
                    o.setStyle(i.defaults({fill: u}, l.getModel("itemStyle.normal").getBarItemStyle()));
                    var p = n ? h.height > 0 ? "bottom" : "top" : h.width > 0 ? "left" : "right",
                        c = l.getModel("label.normal"), f = l.getModel("label.emphasis"), g = o.style;
                    c.get("show") ? a(g, c, u, e.getFormattedLabel(s, "normal") || e.getRawValue(s), p) : g.text = "", f.get("show") ? a(d, f, u, e.getFormattedLabel(s, "emphasis") || e.getRawValue(s), p) : d.text = "", r.setHoverStyle(o, d)
                })
            },
            remove: function (e, t) {
                var i = this.group;
                e.get("animation") ? this._data && this._data.eachItemGraphicEl(function (t) {
                    t.style.text = "", r.updateProps(t, {shape: {width: 0}}, e, function () {
                        i.remove(t)
                    })
                }) : i.removeAll()
            }
        })
    }),t("echarts/layout/barGrid", ["require", "zrender/core/util", "../util/number"], function (e) {
        function t(e) {
            return e.get("stack") || "__ec_stack_" + e.seriesIndex
        }

        function i(e, i) {
            var r = {};
            n.each(e, function (e, i) {
                var n = e.coordinateSystem, a = n.getBaseAxis(), o = r[a.index] || {
                    remainedWidth: a.getBandWidth(),
                    autoWidthCount: 0,
                    categoryGap: "20%",
                    gap: "30%",
                    axis: a,
                    stacks: {}
                }, s = o.stacks;
                r[a.index] = o;
                var l = t(e);
                s[l] || o.autoWidthCount++, s[l] = s[l] || {width: 0, maxWidth: 0};
                var c = e.get("barWidth"), u = e.get("barMaxWidth"), h = e.get("barGap"), d = e.get("barCategoryGap");
                c && !s[l].width && (c = Math.min(o.remainedWidth, c), s[l].width = c, o.remainedWidth -= c), u && (s[l].maxWidth = u), null != h && (o.gap = h), null != d && (o.categoryGap = d)
            });
            var a = {};
            return n.each(r, function (e, t) {
                a[t] = {};
                var i = e.stacks, r = e.axis, s = r.getBandWidth(), l = o(e.categoryGap, s), c = o(e.gap, 1),
                    u = e.remainedWidth, h = e.autoWidthCount, d = (u - l) / (h + (h - 1) * c);
                d = Math.max(d, 0), n.each(i, function (e, t) {
                    var i = e.maxWidth;
                    !e.width && i && d > i && (i = Math.min(i, u), u -= i, e.width = i, h--)
                }), d = (u - l) / (h + (h - 1) * c), d = Math.max(d, 0);
                var p, f = 0;
                n.each(i, function (e, t) {
                    e.width || (e.width = d), p = e, f += e.width * (1 + c)
                }), p && (f -= p.width * c);
                var g = -f / 2;
                n.each(i, function (e, i) {
                    a[t][i] = a[t][i] || {offset: g, width: e.width}, g += e.width * (1 + c)
                })
            }), a
        }

        function r(e, r, a) {
            var o = i(n.filter(r.getSeriesByType(e), function (e) {
                return !r.isSeriesFiltered(e) && e.coordinateSystem && "cartesian2d" === e.coordinateSystem.type
            })), s = {};
            r.eachSeriesByType(e, function (e) {
                var i = e.getData(), r = e.coordinateSystem, n = r.getBaseAxis(), a = t(e), l = o[n.index][a],
                    c = l.offset, u = l.width, h = r.getOtherAxis(n), d = e.get("barMinHeight") || 0,
                    p = n.onZero ? h.toGlobalCoord(h.dataToCoord(0)) : h.getGlobalExtent()[0],
                    f = r.dataToPoints(i, !0);
                s[a] = s[a] || [], i.each(h.dim, function (e, t) {
                    if (!isNaN(e)) {
                        s[a][t] || (s[a][t] = {p: p, n: p});
                        var r, n, o, l, g = e >= 0 ? "p" : "n", m = f[t], v = s[a][t][g];
                        h.isHorizontal() ? (r = v, n = m[1] + c, o = m[0] - v, l = u, Math.abs(o) < d && (o = (0 > o ? -1 : 1) * d), s[a][t][g] += o) : (r = m[0] + c, n = v, o = u, l = m[1] - v, Math.abs(l) < d && (l = (0 >= l ? -1 : 1) * d), s[a][t][g] += l), i.setItemLayout(t, {
                            x: r,
                            y: n,
                            width: o,
                            height: l
                        })
                    }
                }, !0)
            }, this)
        }

        var n = e("zrender/core/util"), a = e("../util/number"), o = a.parsePercent;
        return r
    }),t("echarts/chart/bar", ["require", "zrender/core/util", "../coord/cartesian/Grid", "./bar/BarSeries", "./bar/BarView", "../layout/barGrid", "../echarts"], function (e) {
        var t = e("zrender/core/util");
        e("../coord/cartesian/Grid"), e("./bar/BarSeries"), e("./bar/BarView");
        var i = e("../layout/barGrid"), r = e("../echarts");
        r.registerLayout(t.curry(i, "bar")), r.registerVisualCoding("chart", function (e) {
            e.eachSeriesByType("bar", function (e) {
                var t = e.getData();
                t.setVisual("legendSymbol", "roundRect")
            })
        })
    }),t("echarts/component/axis/AxisBuilder", ["require", "zrender/core/util", "../../util/graphic", "../../model/Model", "../../util/number"], function (e) {
        function t(e, t, i) {
            var r, n, a = s(t - e.rotation);
            return l(a) ? (n = i > 0 ? "top" : "bottom", r = "center") : l(a - c) ? (n = i > 0 ? "bottom" : "top", r = "center") : (n = "middle", r = a > 0 && c > a ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
                rotation: a,
                textAlign: r,
                textBaseline: n
            }
        }

        function i(e, t, i) {
            var r, n, a = s(-e.rotation), o = i[0] > i[1], u = "start" === t && !o || "start" !== t && o;
            return l(a - c / 2) ? (n = u ? "bottom" : "top", r = "center") : l(a - 1.5 * c) ? (n = u ? "top" : "bottom", r = "center") : (n = "middle", r = 1.5 * c > a && a > c / 2 ? u ? "left" : "right" : u ? "right" : "left"), {
                rotation: a,
                textAlign: r,
                textBaseline: n
            }
        }

        var r = e("zrender/core/util"), n = e("../../util/graphic"), a = e("../../model/Model"),
            o = e("../../util/number"), s = o.remRadian, l = o.isRadianAroundZero, c = Math.PI, u = function (e, t) {
                this.opt = t, this.axisModel = e, r.defaults(t, {
                    labelOffset: 0,
                    nameDirection: 1,
                    tickDirection: 1,
                    labelDirection: 1,
                    silent: !0
                }), this.group = new n.Group({position: t.position.slice(), rotation: t.rotation})
            };
        u.prototype = {
            constructor: u, hasBuilder: function (e) {
                return !!h[e]
            }, add: function (e) {
                h[e].call(this)
            }, getGroup: function () {
                return this.group
            }
        };
        var h = {
            axisLine: function () {
                var e = this.opt, t = this.axisModel;
                if (t.get("axisLine.show")) {
                    var i = this.axisModel.axis.getExtent();
                    this.group.add(new n.Line({
                        shape: {x1: i[0], y1: 0, x2: i[1], y2: 0},
                        style: r.extend({lineCap: "round"}, t.getModel("axisLine.lineStyle").getLineStyle()),
                        strokeContainThreshold: e.strokeContainThreshold,
                        silent: !!e.silent,
                        z2: 1
                    }))
                }
            }, axisTick: function () {
                var e = this.axisModel;
                if (e.get("axisTick.show")) {
                    for (var t = e.axis, i = e.getModel("axisTick"), r = this.opt, a = i.getModel("lineStyle"), o = i.get("length"), s = p(i, r.labelInterval), l = t.getTicksCoords(), c = [], u = 0; u < l.length; u++) if (!d(t, u, s)) {
                        var h = l[u];
                        c.push(new n.Line(n.subPixelOptimizeLine({
                            shape: {x1: h, y1: 0, x2: h, y2: r.tickDirection * o},
                            style: {lineWidth: a.get("width")},
                            silent: !0
                        })))
                    }
                    this.group.add(n.mergePath(c, {style: a.getLineStyle(), silent: !0}))
                }
            }, axisLabel: function () {
                function e(e, t) {
                    var i = e && e.getBoundingRect().clone(), r = t && t.getBoundingRect().clone();
                    return i && r ? (i.applyTransform(e.getLocalTransform()), r.applyTransform(t.getLocalTransform()), i.intersect(r)) : void 0
                }

                var i = this.axisModel;
                if (i.get("axisLabel.show")) {
                    var r = this.opt, o = i.axis, s = i.getModel("axisLabel"), l = s.getModel("textStyle"),
                        u = s.get("margin"), h = o.scale.getTicks(), p = i.getFormattedLabels(), f = r.labelRotation;
                    null == f && (f = s.get("rotate") || 0), f = f * c / 180;
                    for (var g = t(r, f, r.labelDirection), m = i.get("data"), v = [], y = 0; y < h.length; y++) if (!d(o, y, r.labelInterval)) {
                        var x = l;
                        m && m[y] && m[y].textStyle && (x = new a(m[y].textStyle, l, i.ecModel));
                        var _ = o.dataToCoord(h[y]), b = [_, r.labelOffset + r.labelDirection * u], w = new n.Text({
                            style: {
                                text: p[y],
                                textAlign: x.get("align", !0) || g.textAlign,
                                textBaseline: x.get("baseline", !0) || g.textBaseline,
                                textFont: x.getFont(),
                                fill: x.getTextColor()
                            }, position: b, rotation: g.rotation, silent: !0, z2: 10
                        });
                        v.push(w), this.group.add(w)
                    }
                    if ("category" !== o.type) {
                        if (i.get("min")) {
                            var M = v[0], S = v[1];
                            e(M, S) && (M.ignore = !0)
                        }
                        if (i.get("max")) {
                            var A = v[v.length - 1], z = v[v.length - 2];
                            e(z, A) && (A.ignore = !0)
                        }
                    }
                }
            }, axisName: function () {
                var e = this.opt, r = this.axisModel, a = this.opt.axisName;
                if (null == a && (a = r.get("name")), a) {
                    var o, s = r.get("nameLocation"), l = e.nameDirection, c = r.getModel("nameTextStyle"),
                        u = r.get("nameGap") || 0, h = this.axisModel.axis.getExtent(), d = h[0] > h[1] ? -1 : 1,
                        p = ["start" === s ? h[0] - d * u : "end" === s ? h[1] + d * u : (h[0] + h[1]) / 2, "middle" === s ? e.labelOffset + l * u : 0];
                    o = "middle" === s ? t(e, e.rotation, l) : i(e, s, h), this.group.add(new n.Text({
                        style: {
                            text: a,
                            textFont: c.getFont(),
                            fill: c.getTextColor() || r.get("axisLine.lineStyle.color"),
                            textAlign: o.textAlign,
                            textBaseline: o.textBaseline
                        }, position: p, rotation: o.rotation, silent: !0, z2: 1
                    }))
                }
            }
        }, d = u.ifIgnoreOnTick = function (e, t, i) {
            return "ordinal" === e.scale.type && "function" == typeof i && !i(t, e.scale.getLabel(t)) || t % (i + 1)
        }, p = u.getInterval = function (e, t) {
            var i = e.get("interval");
            return (null == i || "auto" == i) && (i = t), i
        };
        return u
    }),t("echarts/component/axis/AxisView", ["require", "zrender/core/util", "../../util/graphic", "./AxisBuilder", "../../echarts"], function (e) {
        function t(e, t) {
            function i(e, t) {
                var i = r.getAxis(e);
                return i.toGlobalCoord(i.dataToCoord(0))
            }

            var r = e.coordinateSystem, n = t.axis, a = {}, o = n.position, s = n.onZero ? "onZero" : o, l = n.dim,
                c = r.getRect(), u = [c.x, c.x + c.width, c.y, c.y + c.height],
                h = {x: {top: u[2], bottom: u[3]}, y: {left: u[0], right: u[1]}};
            h.x.onZero = Math.max(Math.min(i("y"), h.x.bottom), h.x.top), h.y.onZero = Math.max(Math.min(i("x"), h.y.right), h.y.left), a.position = ["y" === l ? h.y[s] : u[0], "x" === l ? h.x[s] : u[3]];
            var d = {x: 0, y: 1};
            a.rotation = Math.PI / 2 * d[l];
            var p = {top: -1, bottom: 1, left: -1, right: 1};
            a.labelDirection = a.tickDirection = a.nameDirection = p[o], n.onZero && (a.labelOffset = h[l][o] - h[l].onZero), t.getModel("axisTick").get("inside") && (a.tickDirection = -a.tickDirection), t.getModel("axisLabel").get("inside") && (a.labelDirection = -a.labelDirection);
            var f = t.getModel("axisLabel").get("rotate");
            return a.labelRotation = "top" === s ? -f : f, a.labelInterval = n.getLabelInterval(), a.z2 = 1, a
        }

        var i = e("zrender/core/util"), r = e("../../util/graphic"), n = e("./AxisBuilder"), a = n.ifIgnoreOnTick,
            o = n.getInterval, s = ["axisLine", "axisLabel", "axisTick", "axisName"], l = ["splitLine", "splitArea"],
            c = e("../../echarts").extendComponentView({
                type: "axis", render: function (e, r) {
                    if (this.group.removeAll(), e.get("show")) {
                        var a = r.getComponent("grid", e.get("gridIndex")), o = t(a, e), c = new n(e, o);
                        i.each(s, c.add, c), this.group.add(c.getGroup()), i.each(l, function (t) {
                            e.get(t + ".show") && this["_" + t](e, a, o.labelInterval)
                        }, this)
                    }
                }, _splitLine: function (e, t, i) {
                    var n = e.axis, s = e.getModel("splitLine"), l = s.getModel("lineStyle"), c = l.get("width"),
                        u = l.get("color"), h = o(s, i);
                    u = u instanceof Array ? u : [u];
                    for (var d = t.coordinateSystem.getRect(), p = n.isHorizontal(), f = [], g = 0, m = n.getTicksCoords(), v = [], y = [], x = 0; x < m.length; x++) if (!a(n, x, h)) {
                        var _ = n.toGlobalCoord(m[x]);
                        p ? (v[0] = _, v[1] = d.y, y[0] = _, y[1] = d.y + d.height) : (v[0] = d.x, v[1] = _, y[0] = d.x + d.width, y[1] = _);
                        var b = g++ % u.length;
                        f[b] = f[b] || [], f[b].push(new r.Line(r.subPixelOptimizeLine({
                            shape: {
                                x1: v[0],
                                y1: v[1],
                                x2: y[0],
                                y2: y[1]
                            }, style: {lineWidth: c}, silent: !0
                        })))
                    }
                    for (var x = 0; x < f.length; x++) this.group.add(r.mergePath(f[x], {
                        style: {
                            stroke: u[x % u.length],
                            lineDash: l.getLineDash(),
                            lineWidth: c
                        }, silent: !0
                    }))
                }, _splitArea: function (e, t, i) {
                    var n = e.axis, s = e.getModel("splitArea"), l = s.get("areaStyle.color"),
                        c = t.coordinateSystem.getRect(), u = n.getTicksCoords(), h = u[0], d = u[0], p = [], f = 0,
                        g = o(s, i);
                    l = l instanceof Array ? l : [l];
                    for (var m = 1; m < u.length; m++) if (!a(n, m, g)) {
                        var v, y, x, _, b = n.toGlobalCoord(u[m]);
                        n.isHorizontal() ? (v = h, y = c.y, x = b - v, _ = c.height) : (v = c.x, y = d, x = c.width, _ = b - y);
                        var w = f++ % l.length;
                        p[w] = p[w] || [], p[w].push(new r.Rect({
                            shape: {x: v, y: y, width: x, height: _},
                            silent: !0
                        })), h = v + x, d = y + _
                    }
                    for (var m = 0; m < p.length; m++) this.group.add(r.mergePath(p[m], {
                        style: {fill: l[m % l.length]},
                        silent: !0
                    }))
                }
            });
        c.extend({type: "xAxis"}), c.extend({type: "yAxis"})
    }),t("echarts/component/axis", ["require", "../coord/cartesian/AxisModel", "./axis/AxisView"], function (e) {
        e("../coord/cartesian/AxisModel"), e("./axis/AxisView")
    }),t("echarts/component/grid", ["require", "../util/graphic", "zrender/core/util", "../coord/cartesian/Grid", "./axis", "../echarts"], function (e) {
        var t = e("../util/graphic"), i = e("zrender/core/util");
        e("../coord/cartesian/Grid"), e("./axis"), e("../echarts").extendComponentView({
            type: "grid",
            render: function (e, r) {
                this.group.removeAll(), e.get("show") && this.group.add(new t.Rect({
                    shape: e.coordinateSystem.getRect(),
                    style: i.defaults({fill: e.get("backgroundColor")}, e.getItemStyle()),
                    silent: !0
                }))
            }
        })
    }),t("echarts/chart/helper/dataSelectableMixin", ["require", "zrender/core/util"], function (e) {
        var t = e("zrender/core/util");
        return {
            updateSelectedMap: function () {
                var e = this.option;
                this._dataOptMap = t.reduce(e.data, function (e, t) {
                    return e[t.name] = t, e
                }, {})
            }, select: function (e) {
                var i = this._dataOptMap, r = i[e], n = this.get("selectedMode");
                "single" === n && t.each(i, function (e) {
                    e.selected = !1
                }), r && (r.selected = !0)
            }, unSelect: function (e) {
                var t = this._dataOptMap[e];
                t && (t.selected = !1)
            }, toggleSelected: function (e) {
                var t = this._dataOptMap[e];
                return null != t ? (this[t.selected ? "unSelect" : "select"](e), t.selected) : void 0
            }, isSelected: function (e) {
                var t = this._dataOptMap[e];
                return t && t.selected
            }
        }
    }),t("echarts/chart/pie/PieSeries", ["require", "../../data/List", "zrender/core/util", "../../util/model", "../../data/helper/completeDimensions", "../helper/dataSelectableMixin", "../../echarts"], function (e) {
        var t = e("../../data/List"), i = e("zrender/core/util"), r = e("../../util/model"),
            n = e("../../data/helper/completeDimensions"), a = e("../helper/dataSelectableMixin"),
            o = e("../../echarts").extendSeriesModel({
                type: "series.pie",
                init: function (e) {
                    this.$superApply("init", arguments), this.legendDataProvider = function () {
                        return this._dataBeforeProcessed
                    }, this.updateSelectedMap(), this._defaultLabelLine(e)
                },
                mergeOption: function (e) {
                    this.$superCall("mergeOption", e), this.updateSelectedMap()
                },
                getInitialData: function (e, i) {
                    var r = n(["value"], e.data), a = new t(r, this);
                    return a.initData(e.data), a
                },
                getDataParams: function (e) {
                    var t = this._data, i = this.$superCall("getDataParams", e);
                    return i.percent = +(t.get("value", e) / t.getSum("value") * 100).toFixed(2), i.$vars.push("percent"), i
                },
                _defaultLabelLine: function (e) {
                    r.defaultEmphasis(e.labelLine, ["show"]);
                    var t = e.labelLine.normal, i = e.labelLine.emphasis;
                    t.show = t.show && e.label.normal.show, i.show = i.show && e.label.emphasis.show
                },
                defaultOption: {
                    zlevel: 0,
                    z: 2,
                    legendHoverLink: !0,
                    hoverAnimation: !0,
                    center: ["50%", "50%"],
                    radius: [0, "75%"],
                    clockwise: !0,
                    startAngle: 90,
                    minAngle: 0,
                    selectedOffset: 10,
                    avoidLabelOverlap: !0,
                    label: {normal: {rotate: !1, show: !0, position: "outer"}, emphasis: {}},
                    labelLine: {
                        normal: {
                            show: !0,
                            length: 20,
                            length2: 5,
                            smooth: !1,
                            lineStyle: {width: 1, type: "solid"}
                        }
                    },
                    itemStyle: {
                        normal: {borderColor: "rgba(0,0,0,0)", borderWidth: 1},
                        emphasis: {borderColor: "rgba(0,0,0,0)", borderWidth: 1}
                    },
                    animationEasing: "cubicOut",
                    data: []
                }
            });
        return i.mixin(o, a), o
    }),t("echarts/chart/pie/PieView", ["require", "../../util/graphic", "zrender/core/util", "../../view/Chart"], function (e) {
        function t(e, t, r, n) {
            var a = t.getData(), o = this.dataIndex, s = a.getName(o), l = t.get("selectedOffset");
            n.dispatchAction({type: "pieToggleSelect", from: e, name: s, seriesId: t.id}), a.each(function (e) {
                i(a.getItemGraphicEl(e), a.getItemLayout(e), t.isSelected(a.getName(e)), l, r)
            })
        }

        function i(e, t, i, r, n) {
            var a = (t.startAngle + t.endAngle) / 2, o = Math.cos(a), s = Math.sin(a), l = i ? r : 0,
                c = [o * l, s * l];
            n ? e.animate().when(200, {position: c}).start("bounceOut") : e.attr("position", c)
        }

        function r(e, t) {
            function i() {
                o.ignore = o.hoverIgnore, s.ignore = s.hoverIgnore
            }

            function r() {
                o.ignore = o.normalIgnore, s.ignore = s.normalIgnore
            }

            a.Group.call(this);
            var n = new a.Sector({z2: 2}), o = new a.Polyline, s = new a.Text;
            this.add(n), this.add(o), this.add(s), this.updateData(e, t, !0), this.on("emphasis", i).on("normal", r).on("mouseover", i).on("mouseout", r)
        }

        function n(e, t, i, r) {
            var n = r.getModel("textStyle"), a = r.get("position"), o = "inside" === a || "inner" === a;
            return {
                fill: n.getTextColor() || (o ? "#fff" : e.getItemVisual(t, "color")),
                textFont: n.getFont(),
                text: e.hostModel.getFormattedLabel(t, i) || e.getName(t)
            }
        }

        var a = e("../../util/graphic"), o = e("zrender/core/util"), s = r.prototype;
        s.updateData = function (e, t, r) {
            function n() {
                l.stopAnimation(!0), l.animateTo({shape: {r: h.r + 10}}, 300, "elasticOut")
            }

            function s() {
                l.stopAnimation(!0), l.animateTo({shape: {r: h.r}}, 300, "elasticOut")
            }

            var l = this.childAt(0), c = e.hostModel, u = e.getItemModel(t), h = e.getItemLayout(t),
                d = o.extend({}, h);
            d.label = null, r ? (l.setShape(d), l.shape.endAngle = h.startAngle, a.updateProps(l, {shape: {endAngle: h.endAngle}}, c)) : a.updateProps(l, {shape: d}, c);
            var p = u.getModel("itemStyle"), f = e.getItemVisual(t, "color");
            l.setStyle(o.defaults({fill: f}, p.getModel("normal").getItemStyle())), l.hoverStyle = p.getModel("emphasis").getItemStyle(), i(this, e.getItemLayout(t), u.get("selected"), c.get("selectedOffset"), c.get("animation")), l.off("mouseover").off("mouseout").off("emphasis").off("normal"), u.get("hoverAnimation") && l.on("mouseover", n).on("mouseout", s).on("emphasis", n).on("normal", s), this._updateLabel(e, t), a.setHoverStyle(this)
        }, s._updateLabel = function (e, t) {
            var i = this.childAt(1), r = this.childAt(2), o = e.hostModel, s = e.getItemModel(t),
                l = e.getItemLayout(t), c = l.label, u = e.getItemVisual(t, "color");
            a.updateProps(i, {shape: {points: c.linePoints || [[c.x, c.y], [c.x, c.y], [c.x, c.y]]}}, o), a.updateProps(r, {
                style: {
                    x: c.x,
                    y: c.y
                }
            }, o), r.attr({
                style: {textAlign: c.textAlign, textBaseline: c.textBaseline, textFont: c.font},
                rotation: c.rotation,
                origin: [c.x, c.y],
                z2: 10
            });
            var h = s.getModel("label.normal"), d = s.getModel("label.emphasis"), p = s.getModel("labelLine.normal"),
                f = s.getModel("labelLine.emphasis");
            r.setStyle(n(e, t, "normal", h)), r.ignore = r.normalIgnore = !h.get("show"), r.hoverIgnore = !d.get("show"), i.ignore = i.normalIgnore = !p.get("show"), i.hoverIgnore = !f.get("show"), i.setStyle({stroke: u}), i.setStyle(p.getModel("lineStyle").getLineStyle()), r.hoverStyle = n(e, t, "emphasis", d), i.hoverStyle = f.getModel("lineStyle").getLineStyle();
            var g = p.get("smooth");
            g && g === !0 && (g = .4), i.setShape({smooth: g})
        }, o.inherits(r, a.Group);
        var l = e("../../view/Chart").extend({
            type: "pie", init: function () {
                var e = new a.Group;
                this._sectorGroup = e
            }, render: function (e, i, n, a) {
                if (!a || a.from !== this.uid) {
                    var s = e.getData(), l = this._data, c = this.group, u = i.get("animation"), h = !l,
                        d = o.curry(t, this.uid, e, u, n), p = e.get("selectedMode");
                    if (s.diff(l).add(function (e) {
                        var t = new r(s, e);
                        h && t.eachChild(function (e) {
                            e.stopAnimation(!0)
                        }), p && t.on("click", d), s.setItemGraphicEl(e, t), c.add(t)
                    }).update(function (e, t) {
                        var i = l.getItemGraphicEl(t);
                        i.updateData(s, e), i.off("click"), p && i.on("click", d), c.add(i), s.setItemGraphicEl(e, i)
                    }).remove(function (e) {
                        var t = l.getItemGraphicEl(e);
                        c.remove(t)
                    }).execute(), u && h && s.count() > 0) {
                        var f = s.getItemLayout(0), g = Math.max(n.getWidth(), n.getHeight()) / 2,
                            m = o.bind(c.removeClipPath, c);
                        c.setClipPath(this._createClipPath(f.cx, f.cy, g, f.startAngle, f.clockwise, m, e))
                    }
                    this._data = s
                }
            }, _createClipPath: function (e, t, i, r, n, o, s) {
                var l = new a.Sector({shape: {cx: e, cy: t, r0: 0, r: i, startAngle: r, endAngle: r, clockwise: n}});
                return a.initProps(l, {shape: {endAngle: r + (n ? 1 : -1) * Math.PI * 2}}, s, o), l
            }
        });
        return l
    }),t("echarts/action/createDataSelectAction", ["require", "../echarts", "zrender/core/util"], function (e) {
        var t = e("../echarts"), i = e("zrender/core/util");
        return function (e, r) {
            i.each(r, function (i) {
                i.update = "updateView", t.registerAction(i, function (t, r) {
                    var n = {};
                    return r.eachComponent({mainType: "series", subType: e, query: t}, function (e) {
                        e[i.method] && e[i.method](t.name);
                        var r = e.getData();
                        r.each(function (t) {
                            var i = r.getName(t);
                            n[i] = e.isSelected(i) || !1
                        })
                    }), {name: t.name, selected: n}
                })
            })
        }
    }),t("echarts/visual/dataColor", ["require"], function (e) {
        return function (e, t) {
            t.eachSeriesByType(e, function (e) {
                var i = e.get("color"), r = e.getRawData();
                if (!t.isSeriesFiltered(e)) {
                    var n = e.getData();
                    n.each(function (e) {
                        var t = n.getItemModel(e), a = n.getRawIndex(e);
                        if (!n.getItemVisual(e, "color", !0)) {
                            var o = t.get("itemStyle.normal.color") || i[a % i.length];
                            r.setItemVisual(a, "color", o), n.setItemVisual(e, "color", o)
                        }
                    })
                }
            })
        }
    }),t("echarts/chart/pie/labelLayout", ["require", "zrender/contain/text"], function (e) {
        function t(e, t, i, r, n, a, o) {
            function s(t, i, r, n) {
                for (var a = t; i > a; a++) if (e[a].y += r, a > t && i > a + 1 && e[a + 1].y > e[a].y + e[a].height) return void l(a, r / 2);
                l(i - 1, r / 2)
            }

            function l(t, i) {
                for (var r = t; r >= 0 && (e[r].y -= i, !(r > 0 && e[r].y > e[r - 1].y + e[r - 1].height)); r--) ;
            }

            e.sort(function (e, t) {
                return e.y - t.y
            });
            for (var c, u = 0, h = e.length, d = [], p = [], f = 0; h > f; f++) c = e[f].y - u, 0 > c && s(f, h, -c, n), u = e[f].y + e[f].height;
            0 > o - u && l(h - 1, u - o);
            for (var f = 0; h > f; f++) e[f].y >= i ? p.push(e[f]) : d.push(e[f])
        }

        function i(e, i, r, n, a, o) {
            for (var s = [], l = [], c = 0; c < e.length; c++) e[c].x < i ? s.push(e[c]) : l.push(e[c]);
            t(s, i, r, n, -1, a, o), t(l, i, r, n, 1, a, o);
            for (var c = 0; c < e.length; c++) {
                var u = e[c].linePoints;
                u && (e[c].x < i ? u[2][0] = e[c].x + 3 : u[2][0] = e[c].x - 3, u[1][1] = u[2][1] = e[c].y)
            }
        }

        var r = e("zrender/contain/text");
        return function (e, t, n, a) {
            var o, s, l = e.getData(), c = [], u = !1;
            l.each(function (i) {
                var n, a, h, d, p = l.getItemLayout(i), f = l.getItemModel(i), g = f.getModel("label.normal"),
                    m = g.get("position"), v = f.getModel("labelLine.normal"), y = v.get("length"),
                    x = v.get("length2"), _ = (p.startAngle + p.endAngle) / 2, b = Math.cos(_), w = Math.sin(_);
                if (o = p.cx, s = p.cy, "center" === m) n = p.cx, a = p.cy, d = "center"; else {
                    var M = "inside" === m || "inner" === m, S = (M ? p.r / 2 * b : p.r * b) + o,
                        A = (M ? p.r / 2 * w : p.r * w) + s;
                    if (y += t - p.r, n = S + 3 * b, a = A + 3 * w, !M) {
                        var z = S + b * y, C = A + w * y, L = z + (0 > b ? -1 : 1) * x, I = C;
                        n = L + (0 > b ? -5 : 5), a = I, h = [[S, A], [z, C], [L, I]]
                    }
                    d = M ? "center" : b > 0 ? "left" : "right"
                }
                var T = "middle", D = g.getModel("textStyle").getFont(),
                    P = g.get("rotate") ? 0 > b ? -_ + Math.PI : -_ : 0,
                    k = e.getFormattedLabel(i, "normal") || l.getName(i), V = r.getBoundingRect(k, D, d, T);
                u = !!P, p.label = {
                    x: n,
                    y: a,
                    height: V.height,
                    length: y,
                    length2: x,
                    linePoints: h,
                    textAlign: d,
                    textBaseline: T,
                    font: D,
                    rotation: P
                }, c.push(p.label)
            }), !u && e.get("avoidLabelOverlap") && i(c, o, s, t, n, a)
        }
    }),t("echarts/chart/pie/pieLayout", ["require", "../../util/number", "./labelLayout", "zrender/core/util"], function (e) {
        var t = e("../../util/number"), i = t.parsePercent, r = e("./labelLayout"), n = e("zrender/core/util"),
            a = 2 * Math.PI, o = Math.PI / 180;
        return function (e, s, l) {
            s.eachSeriesByType(e, function (e) {
                var s = e.get("center"), c = e.get("radius");
                n.isArray(c) || (c = [0, c]), n.isArray(s) || (s = [s, s]);
                var u = l.getWidth(), h = l.getHeight(), d = Math.min(u, h), p = i(s[0], u), f = i(s[1], h),
                    g = i(c[0], d / 2), m = i(c[1], d / 2), v = e.getData(), y = -e.get("startAngle") * o,
                    x = e.get("minAngle") * o, _ = v.getSum("value");
                0 === _ && (_ = v.count());
                var b = Math.PI / _ * 2, w = e.get("clockwise"), M = e.get("roseType"), S = v.getDataExtent("value");
                S[0] = 0;
                var A = a, z = 0, C = y, L = w ? 1 : -1;
                if (v.each("value", function (e, i) {
                    var r;
                    r = "area" !== M ? 0 === _ ? b : e * b : a / (v.count() || 1), x > r ? (r = x, A -= x) : z += e;
                    var n = C + L * r;
                    v.setItemLayout(i, {
                        angle: r,
                        startAngle: C,
                        endAngle: n,
                        clockwise: w,
                        cx: p,
                        cy: f,
                        r0: g,
                        r: M ? t.linearMap(e, S, [g, m]) : m
                    }), C = n
                }, !0), a > A) if (.001 >= A) {
                    var I = a / v.count();
                    v.each(function (e) {
                        var t = v.getItemLayout(e);
                        t.startAngle = y + L * e * I, t.endAngle = y + L * (e + 1) * I
                    })
                } else b = A / z, C = y, v.each("value", function (e, t) {
                    var i = v.getItemLayout(t), r = i.angle === x ? x : e * b;
                    i.startAngle = C, i.endAngle = C + L * r, C += r
                });
                r(e, m, u, h)
            })
        }
    }),t("echarts/processor/dataFilter", [], function () {
        return function (e, t) {
            var i = t.findComponents({mainType: "legend"});
            i && i.length && t.eachSeriesByType(e, function (e) {
                var t = e.getData();
                t.filterSelf(function (e) {
                    for (var r = t.getName(e), n = 0; n < i.length; n++) if (!i[n].isSelected(r)) return !1;
                    return !0
                }, this)
            }, this)
        }
    }),t("echarts/chart/pie", ["require", "zrender/core/util", "../echarts", "./pie/PieSeries", "./pie/PieView", "../action/createDataSelectAction", "../visual/dataColor", "./pie/pieLayout", "../processor/dataFilter"], function (e) {
        var t = e("zrender/core/util"), i = e("../echarts");
        e("./pie/PieSeries"), e("./pie/PieView"), e("../action/createDataSelectAction")("pie", [{
            type: "pieToggleSelect",
            event: "pieselectchanged",
            method: "toggleSelected"
        }, {type: "pieSelect", event: "pieselected", method: "select"}, {
            type: "pieUnSelect",
            event: "pieunselected",
            method: "unSelect"
        }]), i.registerVisualCoding("chart", t.curry(e("../visual/dataColor"), "pie")), i.registerLayout(t.curry(e("./pie/pieLayout"), "pie")), i.registerProcessor("filter", t.curry(e("../processor/dataFilter"), "pie"))
    }),t("echarts/chart/scatter/ScatterSeries", ["require", "../helper/createListFromArray", "../../model/Series"], function (e) {
        var t = e("../helper/createListFromArray"), i = e("../../model/Series");
        return i.extend({
            type: "series.scatter",
            dependencies: ["grid", "polar"],
            getInitialData: function (e, i) {
                var r = t(e.data, this, i);
                return r
            },
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                polarIndex: 0,
                geoIndex: 0,
                symbolSize: 10,
                large: !1,
                largeThreshold: 2e3,
                itemStyle: {normal: {opacity: .8}}
            }
        })
    }),t("echarts/chart/helper/LargeSymbolDraw", ["require", "../../util/graphic", "../../util/symbol", "zrender/core/util"], function (e) {
        function t() {
            this.group = new i.Group, this._symbolEl = new a({silent: !0})
        }

        var i = e("../../util/graphic"), r = e("../../util/symbol"), n = e("zrender/core/util"), a = i.extendShape({
            shape: {points: null, sizes: null}, symbolProxy: null, buildPath: function (e, t) {
                for (var i = t.points, r = t.sizes, n = this.symbolProxy, a = n.shape, o = 0; o < i.length; o++) {
                    var s = i[o], l = r[o];
                    l[0] < 4 ? e.rect(s[0] - l[0] / 2, s[1] - l[1] / 2, l[0], l[1]) : (a.x = s[0] - l[0] / 2, a.y = s[1] - l[1] / 2, a.width = l[0], a.height = l[1], n.buildPath(e, a))
                }
            }
        }), o = t.prototype;
        return o.updateData = function (e) {
            this.group.removeAll();
            var t = this._symbolEl, i = e.hostModel;
            t.setShape({
                points: e.mapArray(e.getItemLayout), sizes: e.mapArray(function (t) {
                    var i = e.getItemVisual(t, "symbolSize");
                    return n.isArray(i) || (i = [i, i]), i
                })
            }), t.symbolProxy = r.createSymbol(e.getVisual("symbol"), 0, 0, 0, 0), t.setColor = t.symbolProxy.setColor, t.setStyle(i.getModel("itemStyle.normal").getItemStyle(["color"]));
            var a = e.getVisual("color");
            a && t.setColor(a), this.group.add(this._symbolEl)
        }, o.updateLayout = function (e) {
            var t = e.getData();
            this._symbolEl.setShape({points: t.mapArray(t.getItemLayout)})
        }, o.remove = function () {
            this.group.removeAll()
        }, t
    }),t("echarts/chart/scatter/ScatterView", ["require", "../helper/SymbolDraw", "../helper/LargeSymbolDraw", "../../echarts"], function (e) {
        var t = e("../helper/SymbolDraw"), i = e("../helper/LargeSymbolDraw");
        e("../../echarts").extendChartView({
            type: "scatter", init: function () {
                this._normalSymbolDraw = new t, this._largeSymbolDraw = new i
            }, render: function (e, t, i) {
                var r = e.getData(), n = this._largeSymbolDraw, a = this._normalSymbolDraw, o = this.group,
                    s = e.get("large") && r.count() > e.get("largeThreshold") ? n : a;
                this._symbolDraw = s, s.updateData(r), o.add(s.group), o.remove(s === n ? a.group : n.group)
            }, updateLayout: function () {
                this._symbolDraw.updateLayout()
            }, remove: function (e, t) {
                this._symbolDraw && this._symbolDraw.remove(t, !0)
            }
        })
    }),t("echarts/chart/scatter", ["require", "zrender/core/util", "../echarts", "./scatter/ScatterSeries", "./scatter/ScatterView", "../visual/symbol", "../layout/points"], function (e) {
        var t = e("zrender/core/util"), i = e("../echarts");
        e("./scatter/ScatterSeries"), e("./scatter/ScatterView"), i.registerVisualCoding("chart", t.curry(e("../visual/symbol"), "scatter", "circle", null)), i.registerLayout(t.curry(e("../layout/points"), "scatter"))
    }),t("echarts/component/tooltip/TooltipModel", ["require", "../../echarts"], function (e) {
        e("../../echarts").extendComponentModel({
            type: "tooltip",
            defaultOption: {
                zlevel: 0,
                z: 8,
                show: !0,
                showContent: !0,
                trigger: "item",
                triggerOn: "mousemove",
                alwaysShowContent: !1,
                hideDelay: 100,
                transitionDuration: .4,
                enterable: !1,
                backgroundColor: "rgba(50,50,50,0.7)",
                borderColor: "#333",
                borderRadius: 4,
                borderWidth: 0,
                padding: 5,
                axisPointer: {
                    type: "line",
                    axis: "auto",
                    animation: !0,
                    animationDurationUpdate: 200,
                    animationEasingUpdate: "exponentialOut",
                    lineStyle: {color: "#555", width: 1, type: "solid"},
                    crossStyle: {color: "#555", width: 1, type: "dashed", textStyle: {}},
                    shadowStyle: {color: "rgba(150,150,150,0.3)"}
                },
                textStyle: {color: "#fff", fontSize: 14}
            }
        })
    }),t("echarts/component/tooltip/TooltipContent", ["require", "zrender/core/util", "zrender/tool/color", "zrender/core/event", "../../util/format"], function (e) {
        function t(e) {
            var t = "cubic-bezier(0.23, 1, 0.32, 1)", i = "left " + e + "s " + t + ",top " + e + "s " + t;
            return o.map(d, function (e) {
                return e + "transition:" + i
            }).join(";")
        }

        function i(e) {
            var t = [], i = e.get("fontSize"), r = e.getTextColor();
            return r && t.push("color:" + r), t.push("font:" + e.getFont()), i && t.push("line-height:" + Math.round(3 * i / 2) + "px"), u(["decoration", "align"], function (i) {
                var r = e.get(i);
                r && t.push("text-" + i + ":" + r)
            }), t.join(";")
        }

        function r(e) {
            e = e;
            var r = [], n = e.get("transitionDuration"), a = e.get("backgroundColor"), o = e.getModel("textStyle"),
                l = e.get("padding");
            return n && r.push(t(n)), a && (r.push("background-Color:" + s.toHex(a)), r.push("filter:alpha(opacity=70)"), r.push("background-Color:" + a)), u(["width", "color", "radius"], function (t) {
                var i = "border-" + t, n = h(i), a = e.get(n);
                null != a && r.push(i + ":" + a + ("color" === t ? "" : "px"))
            }), r.push(i(o)), null != l && r.push("padding:" + c.normalizeCssArray(l).join("px ") + "px"), r.join(";") + ";"
        }

        function n(e, t) {
            var i = document.createElement("div"), r = t.getZr();
            this.el = i, this._x = t.getWidth() / 2, this._y = t.getHeight() / 2, e.appendChild(i), this._container = e, this._show = !1, this._hideTimeout;
            var n = this;
            i.onmouseenter = function () {
                n.enterable && (clearTimeout(n._hideTimeout), n._show = !0), n._inContent = !0
            }, i.onmousemove = function (t) {
                if (!n.enterable) {
                    var i = r.handler;
                    l.normalizeEvent(e, t), i.dispatch("mousemove", t)
                }
            }, i.onmouseleave = function () {
                n.enterable && n._show && n.hideLater(n._hideDelay), n._inContent = !1
            }, a(i, e)
        }

        function a(e, t) {
            function i(e) {
                r(e.target) && e.preventDefault()
            }

            function r(i) {
                for (; i && i !== t;) {
                    if (i === e) return !0;
                    i = i.parentNode
                }
            }

            l.addEventListener(t, "touchstart", i), l.addEventListener(t, "touchmove", i), l.addEventListener(t, "touchend", i)
        }

        var o = e("zrender/core/util"), s = e("zrender/tool/color"), l = e("zrender/core/event"),
            c = e("../../util/format"), u = o.each, h = c.toCamelCase, d = ["", "-webkit-", "-moz-", "-o-"],
            p = "position:absolute;display:block;border-style:solid;white-space:nowrap;";
        return n.prototype = {
            constructor: n, enterable: !0, update: function () {
                var e = this._container, t = e.currentStyle || document.defaultView.getComputedStyle(e), i = e.style;
                "absolute" !== i.position && "absolute" !== t.position && (i.position = "relative"), this.hide()
            }, show: function (e) {
                clearTimeout(this._hideTimeout), this.el.style.cssText = p + r(e) + ";left:" + this._x + "px;top:" + this._y + "px;", this._show = !0
            }, setContent: function (e) {
                var t = this.el;
                t.innerHTML = e, t.style.display = e ? "block" : "none"
            }, moveTo: function (e, t) {
                var i = this.el.style;
                i.left = e + "px", i.top = t + "px", this._x = e, this._y = t
            }, hide: function () {
                this.el.style.display = "none", this._show = !1
            }, hideLater: function (e) {
                !this._show || this._inContent && this.enterable || (e ? (this._hideDelay = e, this._show = !1, this._hideTimeout = setTimeout(o.bind(this.hide, this), e)) : this.hide())
            }, isShow: function () {
                return this._show
            }
        }, n
    }),t("echarts/component/tooltip/TooltipView", ["require", "./TooltipContent", "../../util/graphic", "zrender/core/util", "../../util/format", "../../util/number", "../../echarts"], function (e) {
        function t(e, t) {
            if (!e || !t) return !1;
            var i = p.round;
            return i(e[0]) === i(t[0]) && i(e[1]) === i(t[1])
        }

        function i(e, t, i, r) {
            return {x1: e, y1: t, x2: i, y2: r}
        }

        function r(e, t, i, r) {
            return {x: e, y: t, width: i, height: r}
        }

        function n(e, t, i, r, n, a) {
            return {cx: e, cy: t, r0: i, r: r, startAngle: n, endAngle: a, clockwise: !0}
        }

        function a(e, t, i, r, n) {
            var a = i.clientWidth, o = i.clientHeight, s = 20;
            return e + a + s > r ? e -= a + s : e += s, t + o + s > n ? t -= o + s : t += s, [e, t]
        }

        function o(e, t, i) {
            var r = i.clientWidth, n = i.clientHeight, a = 5, o = 0, s = 0, l = t.width, c = t.height;
            switch (e) {
                case"inside":
                    o = t.x + l / 2 - r / 2, s = t.y + c / 2 - n / 2;
                    break;
                case"top":
                    o = t.x + l / 2 - r / 2, s = t.y - n - a;
                    break;
                case"bottom":
                    o = t.x + l / 2 - r / 2, s = t.y + c + a;
                    break;
                case"left":
                    o = t.x - r - a, s = t.y + c / 2 - n / 2;
                    break;
                case"right":
                    o = t.x + l + a, s = t.y + c / 2 - n / 2
            }
            return [o, s]
        }

        function s(e, t, i, r, n, s, l) {
            var c = l.getWidth(), u = l.getHeight(), d = s && s.getBoundingRect().clone();
            if (s && d.applyTransform(s.transform), "function" == typeof e && (e = e([t, i], n, d)), h.isArray(e)) t = f(e[0], c), i = f(e[1], u); else if ("string" == typeof e && s) {
                var p = o(e, d, r.el);
                t = p[0], i = p[1]
            } else {
                var p = a(t, i, r.el, c, u);
                t = p[0], i = p[1]
            }
            r.moveTo(t, i)
        }

        function l(e) {
            var t = e.coordinateSystem, i = e.get("tooltip.trigger", !0);
            return !(!t || "cartesian2d" !== t.type && "polar" !== t.type || "item" === i)
        }

        var c = e("./TooltipContent"), u = e("../../util/graphic"), h = e("zrender/core/util"),
            d = e("../../util/format"), p = e("../../util/number"), f = p.parsePercent;
        e("../../echarts").extendComponentView({
            type: "tooltip", _axisPointers: {}, init: function (e, t) {
                var i = new c(t.getDom(), t);
                this._tooltipContent = i, t.on("showTip", this._manuallyShowTip, this), t.on("hideTip", this._hide, this)
            }, render: function (e, t, i) {
                this.group.removeAll(), this._axisPointers = {}, this._tooltipModel = e, this._ecModel = t, this._api = i, this._lastHover = {};
                var r = this._tooltipContent;
                r.update(), r.enterable = e.get("enterable"), this._alwaysShowContent = e.get("alwaysShowContent"), this._seriesGroupByAxis = this._prepareAxisTriggerData(e, t);
                var n = this._crossText;
                n && this.group.add(n);
                var a = this._api.getZr(), o = this._tryShow;
                a.off("click", o), a.off("mousemove", o), a.off("mouseout", this._hide), "click" === e.get("triggerOn") ? a.on("click", o, this) : (a.on("mousemove", o, this), a.on("mouseout", this._hide, this))
            }, _manuallyShowTip: function (e) {
                if (e.from !== this.uid) {
                    var t = this._ecModel, i = e.seriesIndex, r = e.dataIndex, n = t.getSeriesByIndex(i), a = this._api;
                    if (null == e.x || null == e.y) {
                        if (n || t.eachSeries(function (e) {
                            l(e) && !n && (n = e)
                        }), n) {
                            var o = n.getData();
                            null == r && (r = o.indexOfName(e.name));
                            var s = o.getItemGraphicEl(r);
                            if (s) {
                                var c = s.getBoundingRect().clone();
                                c.applyTransform(s.transform);
                                var u = c.x + c.width / 2, h = c.y + c.height / 2;
                                this._tryShow({offsetX: u, offsetY: h, target: s, event: {}})
                            }
                        }
                    } else a.getZr().handler.dispatch("mousemove", {zrX: e.x, zrY: e.y})
                }
            }, _prepareAxisTriggerData: function (e, t) {
                var i = {};
                return t.eachSeries(function (e) {
                    if (l(e)) {
                        var t, r, n = e.coordinateSystem;
                        "cartesian2d" === n.type ? (t = n.getBaseAxis(), r = t.dim + t.index) : (t = n.getBaseAxis(), r = t.dim + n.name), i[r] = i[r] || {
                            coordSys: [],
                            series: []
                        }, i[r].coordSys.push(n), i[r].series.push(e)
                    }
                }, this), i
            }, _tryShow: function (e) {
                var t = e.target, i = this._tooltipModel, r = i.get("trigger"), n = this._ecModel, a = this._api;
                if (i) if (t && null != t.dataIndex) {
                    var o = t.hostModel || n.getSeriesByIndex(t.seriesIndex), s = t.dataIndex,
                        l = o.getData().getItemModel(s);
                    "axis" === (l.get("tooltip.trigger") || r) ? this._showAxisTooltip(i, n, e) : (this._ticket = "", this._hideAxisPointer(), this._resetLastHover(), this._showItemTooltipContent(o, s, e)), a.dispatchAction({
                        type: "showTip",
                        from: this.uid,
                        dataIndex: t.dataIndex,
                        seriesIndex: t.seriesIndex
                    })
                } else "item" === r ? this._hide() : this._showAxisTooltip(i, n, e), a.dispatchAction({
                    type: "showTip",
                    from: this.uid,
                    x: e.offsetX,
                    y: e.offsetY
                })
            }, _showAxisTooltip: function (e, i, r) {
                var n = e.getModel("axisPointer"), a = n.get("type");
                if ("cross" === a) {
                    var o = r.target;
                    if (o && null != o.dataIndex) {
                        var s = i.getSeriesByIndex(o.seriesIndex), l = o.dataIndex;
                        this._showItemTooltipContent(s, l, r)
                    }
                }
                this._showAxisPointer();
                var c = !0;
                h.each(this._seriesGroupByAxis, function (e) {
                    var i = e.coordSys, o = i[0], s = [r.offsetX, r.offsetY];
                    if (!o.containPoint(s)) return void this._hideAxisPointer(o.name);
                    c = !1;
                    var l = o.dimensions, u = o.pointToData(s, !0);
                    s = o.dataToPoint(u);
                    var d = o.getBaseAxis(), p = n.get("axis");
                    "auto" === p && (p = d.dim);
                    var f = !1, g = this._lastHover;
                    if ("cross" === a) t(g.data, u) && (f = !0), g.data = u; else {
                        var m = h.indexOf(l, p);
                        g.data === u[m] && (f = !0), g.data = u[m]
                    }
                    "cartesian2d" !== o.type || f ? "polar" !== o.type || f || this._showPolarPointer(n, o, p, s) : this._showCartesianPointer(n, o, p, s), "cross" !== a && this._showSeriesTooltipContent(o, e.series, s, u, f)
                }, this), c && this._hide()
            }, _showCartesianPointer: function (e, t, n, a) {
                function o(r, n, a) {
                    var o = "x" === r ? i(n[0], a[0], n[0], a[1]) : i(a[0], n[1], a[1], n[1]),
                        s = l._getPointerElement(t, e, r, o);
                    h ? u.updateProps(s, {shape: o}, e) : s.attr({shape: o})
                }

                function s(i, n, a) {
                    var o = t.getAxis(i), s = o.getBandWidth(), c = a[1] - a[0],
                        d = "x" === i ? r(n[0] - s / 2, a[0], s, c) : r(a[0], n[1] - s / 2, c, s),
                        p = l._getPointerElement(t, e, i, d);
                    h ? u.updateProps(p, {shape: d}, e) : p.attr({shape: d})
                }

                var l = this, c = e.get("type"), h = "cross" !== c;
                if ("cross" === c) o("x", a, t.getAxis("y").getGlobalExtent()), o("y", a, t.getAxis("x").getGlobalExtent()),
                    this._updateCrossText(t, a, e); else {
                    var d = t.getAxis("x" === n ? "y" : "x"), p = d.getGlobalExtent();
                    "cartesian2d" === t.type && ("line" === c ? o : s)(n, a, p)
                }
            }, _showPolarPointer: function (e, t, r, a) {
                function o(r, n, a) {
                    var o, s = t.pointToCoord(n);
                    if ("angle" === r) {
                        var c = t.coordToPoint([a[0], s[1]]), h = t.coordToPoint([a[1], s[1]]);
                        o = i(c[0], c[1], h[0], h[1])
                    } else o = {cx: t.cx, cy: t.cy, r: s[0]};
                    var d = l._getPointerElement(t, e, r, o);
                    p ? u.updateProps(d, {shape: o}, e) : d.attr({shape: o})
                }

                function s(i, r, a) {
                    var o, s = t.getAxis(i), c = s.getBandWidth(), h = t.pointToCoord(r), d = Math.PI / 180;
                    o = "angle" === i ? n(t.cx, t.cy, a[0], a[1], (-h[1] - c / 2) * d, (-h[1] + c / 2) * d) : n(t.cx, t.cy, h[0] - c / 2, h[0] + c / 2, 0, 2 * Math.PI);
                    var f = l._getPointerElement(t, e, i, o);
                    p ? u.updateProps(f, {shape: o}, e) : f.attr({shape: o})
                }

                var l = this, c = e.get("type"), h = t.getAngleAxis(), d = t.getRadiusAxis(), p = "cross" !== c;
                if ("cross" === c) o("angle", a, d.getExtent()), o("radius", a, h.getExtent()), this._updateCrossText(t, a, e); else {
                    var f = t.getAxis("radius" === r ? "angle" : "radius"), g = f.getExtent();
                    ("line" === c ? o : s)(r, a, g)
                }
            }, _updateCrossText: function (e, t, i) {
                var r = i.getModel("crossStyle"), n = r.getModel("textStyle"), a = this._tooltipModel,
                    o = this._crossText;
                o || (o = this._crossText = new u.Text({
                    style: {
                        textAlign: "left",
                        textBaseline: "bottom"
                    }
                }), this.group.add(o));
                var s = e.pointToData(t), l = e.dimensions;
                s = h.map(s, function (t, i) {
                    var r = e.getAxis(l[i]);
                    return t = "category" === r.type || "time" === r.type ? r.scale.getLabel(t) : d.addCommas(t.toFixed(r.getPixelPrecision()))
                }), o.setStyle({
                    fill: n.getTextColor() || r.get("color"),
                    textFont: n.getFont(),
                    text: s.join(", "),
                    x: t[0] + 5,
                    y: t[1] - 5
                }), o.z = a.get("z"), o.zlevel = a.get("zlevel")
            }, _getPointerElement: function (e, t, i, r) {
                var n = this._tooltipModel, a = n.get("z"), o = n.get("zlevel"), s = this._axisPointers, l = e.name;
                if (s[l] = s[l] || {}, s[l][i]) return s[l][i];
                var c = t.get("type"), h = t.getModel(c + "Style"), d = "shadow" === c,
                    p = h[d ? "getAreaStyle" : "getLineStyle"](),
                    f = "polar" === e.type ? d ? "Sector" : "radius" === i ? "Circle" : "Line" : d ? "Rect" : "Line";
                d ? p.stroke = null : p.fill = null;
                var g = s[l][i] = new u[f]({style: p, z: a, zlevel: o, silent: !0, shape: r});
                return this.group.add(g), g
            }, _showSeriesTooltipContent: function (e, t, i, r, n) {
                var a = this._tooltipModel, o = this._tooltipContent, l = e.getBaseAxis(),
                    c = r["x" === l.dim || "radius" === l.dim ? 0 : 1], u = h.map(t, function (e) {
                        return {
                            seriesIndex: e.seriesIndex,
                            dataIndex: e.getData().indexOfNearest(e.getDimensionsOnAxis(l.dim), c)
                        }
                    }), p = this._api, f = this._lastHover;
                if (f.payloadBatch && !n && this._api.dispatchAction({
                    type: "downplay",
                    batch: h.clone(f.payloadBatch)
                }), n || (this._api.dispatchAction({
                    type: "highlight",
                    batch: h.clone(u)
                }), f.payloadBatch = u), l && a.get("showContent")) {
                    var g, m = a.get("formatter"), v = a.get("position"), y = h.map(t, function (e, t) {
                        return e.getDataParams(u[t].dataIndex)
                    });
                    o.show(a);
                    var x = u[0].dataIndex;
                    if (!n) {
                        if (this._ticket = "", m) {
                            if ("string" == typeof m) g = d.formatTpl(m, y); else if ("function" == typeof m) {
                                var _ = this, b = "axis_" + e.name + "_" + x, w = function (e, t) {
                                    e === _._ticket && (o.setContent(t), s(v, i[0], i[1], o, y, null, p))
                                };
                                _._ticket = b, g = m(y, b, w)
                            }
                        } else g = t[0].getData().getName(x) + "<br />" + h.map(t, function (e, t) {
                            return e.formatTooltip(u[t].dataIndex, !0)
                        }).join("<br />");
                        o.setContent(g)
                    }
                    s(v, i[0], i[1], o, y, null, p)
                }
            }, _showItemTooltipContent: function (e, t, i) {
                var r = this._api, n = e.getData(), a = n.getItemModel(t), o = this._tooltipModel,
                    l = this._tooltipContent, c = a.getModel("tooltip");
                if (c.parentModel ? c.parentModel.parentModel = o : c.parentModel = this._tooltipModel, c.get("showContent")) {
                    var u, h = c.get("formatter"), p = c.get("position"), f = e.getDataParams(t);
                    if (h) {
                        if ("string" == typeof h) u = d.formatTpl(h, f); else if ("function" == typeof h) {
                            var g = this, m = "item_" + e.name + "_" + t, v = function (e, t) {
                                e === g._ticket && (l.setContent(t), s(p, i.offsetX, i.offsetY, l, f, i.target, r))
                            };
                            g._ticket = m, u = h(f, m, v)
                        }
                    } else u = e.formatTooltip(t);
                    l.show(c), l.setContent(u), s(p, i.offsetX, i.offsetY, l, f, i.target, r)
                }
            }, _showAxisPointer: function (e) {
                if (e) {
                    var t = this._axisPointers[e];
                    t && h.each(t, function (e) {
                        e.show()
                    })
                } else this.group.eachChild(function (e) {
                    e.show()
                }), this.group.show()
            }, _resetLastHover: function () {
                var e = this._lastHover;
                e.payloadBatch && this._api.dispatchAction({
                    type: "downplay",
                    batch: e.payloadBatch
                }), this._lastHover = {}
            }, _hideAxisPointer: function (e) {
                if (e) {
                    var t = this._axisPointers[e];
                    t && h.each(t, function (e) {
                        e.hide()
                    })
                } else this.group.hide()
            }, _hide: function () {
                this._hideAxisPointer(), this._resetLastHover(), this._alwaysShowContent || this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay"))
            }, dispose: function (e, t) {
                var i = t.getZr();
                i.off("click", this._tryShow), i.off("mousemove", this._tryShow), i.off("mouseout", this._hide), t.off("showTip")
            }
        })
    }),t("echarts/component/tooltip", ["require", "./tooltip/TooltipModel", "./tooltip/TooltipView", "../echarts", "../echarts"], function (e) {
        e("./tooltip/TooltipModel"), e("./tooltip/TooltipView"), e("../echarts").registerAction({
            type: "showTip",
            event: "showTip",
            update: "none"
        }, function () {
        }), e("../echarts").registerAction({type: "hideTip", event: "hideTip", update: "none"}, function () {
        })
    }),t("echarts/coord/polar/RadiusAxis", ["require", "zrender/core/util", "../Axis"], function (e) {
        function t(e, t) {
            r.call(this, "radius", e, t), this.type = "category"
        }

        var i = e("zrender/core/util"), r = e("../Axis");
        return t.prototype = {
            constructor: t,
            dataToRadius: r.prototype.dataToCoord,
            radiusToData: r.prototype.coordToData
        }, i.inherits(t, r), t
    }),t("echarts/coord/polar/AngleAxis", ["require", "zrender/core/util", "../Axis"], function (e) {
        function t(e, t) {
            t = t || [0, 360], r.call(this, "angle", e, t), this.type = "category"
        }

        var i = e("zrender/core/util"), r = e("../Axis");
        return t.prototype = {
            constructor: t,
            dataToAngle: r.prototype.dataToCoord,
            angleToData: r.prototype.coordToData
        }, i.inherits(t, r), t
    }),t("echarts/coord/polar/Polar", ["require", "./RadiusAxis", "./AngleAxis"], function (e) {
        var t = e("./RadiusAxis"), i = e("./AngleAxis"), r = function (e) {
            this.name = e || "", this.cx = 0, this.cy = 0, this.dimensions = ["radius", "angle"], this._radiusAxis = new t, this._angleAxis = new i
        };
        return r.prototype = {
            constructor: r, type: "polar", containPoint: function (e) {
                var t = this.pointToCoord(e);
                return this._radiusAxis.contain(t[0]) && this._angleAxis.contain(t[1])
            }, containData: function (e) {
                return this._radiusAxis.containData(e[0]) && this._angleAxis.containData(e[1])
            }, getAxis: function (e) {
                return this["_" + e + "Axis"]
            }, getAxesByScale: function (e) {
                var t = [], i = this._angleAxis, r = this._radiusAxis;
                return i.scale.type === e && t.push(i), r.scale.type === e && t.push(r), t
            }, getAngleAxis: function () {
                return this._angleAxis
            }, getRadiusAxis: function () {
                return this._radiusAxis
            }, getOtherAxis: function (e) {
                var t = this._angleAxis;
                return e === t ? this._radiusAxis : t
            }, getBaseAxis: function () {
                return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAngleAxis()
            }, dataToPoints: function (e) {
                return e.mapArray(this.dimensions, function (e, t) {
                    return this.dataToPoint([e, t])
                }, this)
            }, dataToPoint: function (e, t) {
                return this.coordToPoint([this._radiusAxis.dataToRadius(e[0], t), this._angleAxis.dataToAngle(e[1], t)])
            }, pointToData: function (e, t) {
                var i = this.pointToCoord(e);
                return [this._radiusAxis.radiusToData(i[0], t), this._angleAxis.angleToData(i[1], t)]
            }, pointToCoord: function (e) {
                var t = e[0] - this.cx, i = e[1] - this.cy, r = this.getAngleAxis(), n = r.getExtent(),
                    a = Math.min(n[0], n[1]), o = Math.max(n[0], n[1]);
                r.inverse ? a = o - 360 : o = a + 360;
                var s = Math.sqrt(t * t + i * i);
                t /= s, i /= s;
                for (var l = Math.atan2(-i, t) / Math.PI * 180, c = a > l ? 1 : -1; a > l || l > o;) l += 360 * c;
                return [s, l]
            }, coordToPoint: function (e) {
                var t = e[0], i = e[1] / 180 * Math.PI, r = Math.cos(i) * t + this.cx, n = -Math.sin(i) * t + this.cy;
                return [r, n]
            }
        }, r
    }),t("echarts/coord/polar/AxisModel", ["require", "zrender/core/util", "../../model/Component", "../axisModelCreator", "../axisModelCommonMixin"], function (e) {
        function t(e, t) {
            return t.type || (t.data ? "category" : "value")
        }

        var i = e("zrender/core/util"), r = e("../../model/Component"), n = e("../axisModelCreator"),
            a = r.extend({type: "polarAxis", axis: null});
        i.merge(a.prototype, e("../axisModelCommonMixin"));
        var o = {
            angle: {polarIndex: 0, startAngle: 90, clockwise: !0, splitNumber: 12, axisLabel: {rotate: !1}},
            radius: {polarIndex: 0, splitNumber: 5}
        };
        n("angle", a, t, o.angle), n("radius", a, t, o.radius)
    }),t("echarts/coord/polar/PolarModel", ["require", "./AxisModel", "../../echarts"], function (e) {
        e("./AxisModel"), e("../../echarts").extendComponentModel({
            type: "polar",
            dependencies: ["polarAxis", "angleAxis"],
            coordinateSystem: null,
            findAxisModel: function (e) {
                var t, i = this.ecModel;
                return i.eachComponent(e, function (e) {
                    i.getComponent("polar", e.getShallow("polarIndex")) === this && (t = e)
                }, this), t
            },
            defaultOption: {zlevel: 0, z: 0, center: ["50%", "50%"], radius: "80%"}
        })
    }),t("echarts/coord/polar/polarCreator", ["require", "./Polar", "../../util/number", "zrender/core/util", "../../coord/axisHelper", "./PolarModel", "../../CoordinateSystem"], function (e) {
        function t(e, t) {
            var i = e.get("center"), r = e.get("radius"), n = t.getWidth(), o = t.getHeight(), s = a.parsePercent;
            this.cx = s(i[0], n), this.cy = s(i[1], o);
            var l = this.getRadiusAxis(), c = Math.min(n, o) / 2;
            l.setExtent(0, s(r, c))
        }

        function i(e, t) {
            if (e.type = t.get("type"), e.scale = s.createScaleByModel(t), e.onBand = t.get("boundaryGap") && "category" === e.type, "angleAxis" === t.mainType) {
                var i = t.get("startAngle");
                e.inverse = t.get("inverse") ^ t.get("clockwise"), e.setExtent(i, i + (e.inverse ? -360 : 360))
            }
            t.axis = e, e.model = t
        }

        function r(e, t, i) {
            t.eachSeries(function (t) {
                if ("polar" === t.get("coordinateSystem")) {
                    var i = t.get("polarIndex") || 0, r = e[i];
                    if (!r) return;
                    t.coordinateSystem = r;
                    var n = r.getRadiusAxis(), a = r.getAngleAxis(), o = t.getData();
                    n.scale.unionExtent(o.getDataExtent("radius", "category" !== n.type)), a.scale.unionExtent(o.getDataExtent("angle", "category" !== a.type))
                }
            }), o.each(e, function (e) {
                var t = e.getAngleAxis(), i = e.getRadiusAxis();
                l(t, t.model), l(i, i.model)
            })
        }

        var n = e("./Polar"), a = e("../../util/number"), o = e("zrender/core/util"), s = e("../../coord/axisHelper"),
            l = s.niceScaleExtent;
        e("./PolarModel");
        var c = {
            create: function (e, a) {
                var s = [];
                return e.eachComponent("polar", function (e, r) {
                    var o = new n(r);
                    o.resize = t;
                    var l = o.getRadiusAxis(), c = o.getAngleAxis(), u = e.findAxisModel("radiusAxis"),
                        h = e.findAxisModel("angleAxis");
                    i(l, u), i(c, h), o.resize(e, a), s.push(o), e.coordinateSystem = o
                }), r(s, e, a), o.each(s, function (e) {
                    var t = e.getAngleAxis();
                    if ("category" === t.type && !t.onBand) {
                        var i = t.getExtent(), r = 360 / t.scale.count();
                        t.inverse ? i[1] += r : i[1] -= r, t.setExtent(i[0], i[1])
                    }
                }), s
            }
        };
        e("../../CoordinateSystem").register("polar", c)
    }),t("echarts/component/axis/AngleAxisView", ["require", "zrender/core/util", "../../util/graphic", "../../model/Model", "../../echarts"], function (e) {
        function t(e, t, i, r) {
            var n = e.coordToPoint([t, r]), a = e.coordToPoint([i, r]);
            return {x1: n[0], y1: n[1], x2: a[0], y2: a[1]}
        }

        var i = e("zrender/core/util"), r = e("../../util/graphic"), n = e("../../model/Model"),
            a = ["axisLine", "axisLabel", "axisTick", "splitLine", "splitArea"];
        e("../../echarts").extendComponentView({
            type: "angleAxis", render: function (e, t) {
                if (this.group.removeAll(), e.get("show")) {
                    var r = t.getComponent("polar", e.get("polarIndex")), n = e.axis, o = r.coordinateSystem,
                        s = o.getRadiusAxis().getExtent(), l = n.getTicksCoords();
                    "category" !== n.type && l.pop(), i.each(a, function (t) {
                        e.get(t + ".show") && this["_" + t](e, o, l, s)
                    }, this)
                }
            }, _axisLine: function (e, t, i, n) {
                var a = e.getModel("axisLine.lineStyle"), o = new r.Circle({
                    shape: {cx: t.cx, cy: t.cy, r: n[1]},
                    style: a.getLineStyle(),
                    z2: 1,
                    silent: !0
                });
                o.style.fill = null, this.group.add(o)
            }, _axisTick: function (e, n, a, o) {
                var s = e.getModel("axisTick"), l = (s.get("inside") ? -1 : 1) * s.get("length"),
                    c = i.map(a, function (e) {
                        return new r.Line({shape: t(n, o[1], o[1] + l, e)})
                    });
                this.group.add(r.mergePath(c, {style: s.getModel("lineStyle").getLineStyle()}))
            }, _axisLabel: function (e, t, i, a) {
                for (var o = e.axis, s = e.get("data"), l = e.getModel("axisLabel"), c = l.getModel("textStyle"), u = e.getFormattedLabels(), h = l.get("margin"), d = o.getLabelsCoords(), p = 0; p < i.length; p++) {
                    var f = a[1], g = t.coordToPoint([f + h, d[p]]), m = t.cx, v = t.cy,
                        y = Math.abs(g[0] - m) / f < .3 ? "center" : g[0] > m ? "left" : "right",
                        x = Math.abs(g[1] - v) / f < .3 ? "middle" : g[1] > v ? "top" : "bottom", _ = c;
                    s && s[p] && s[p].textStyle && (_ = new n(s[p].textStyle, c)), this.group.add(new r.Text({
                        style: {
                            x: g[0],
                            y: g[1],
                            fill: _.getTextColor(),
                            text: u[p],
                            textAlign: y,
                            textBaseline: x,
                            textFont: _.getFont()
                        }, silent: !0
                    }))
                }
            }, _splitLine: function (e, n, a, o) {
                var s = e.getModel("splitLine"), l = s.getModel("lineStyle"), c = l.get("color"), u = 0;
                c = c instanceof Array ? c : [c];
                for (var h = [], d = 0; d < a.length; d++) {
                    var p = u++ % c.length;
                    h[p] = h[p] || [], h[p].push(new r.Line({shape: t(n, o[0], o[1], a[d])}))
                }
                for (var d = 0; d < h.length; d++) this.group.add(r.mergePath(h[d], {
                    style: i.defaults({stroke: c[d % c.length]}, l.getLineStyle()),
                    silent: !0,
                    z: e.get("z")
                }))
            }, _splitArea: function (e, t, n, a) {
                var o = e.getModel("splitArea"), s = o.getModel("areaStyle"), l = s.get("color"), c = 0;
                l = l instanceof Array ? l : [l];
                for (var u = [], h = Math.PI / 180, d = -n[0] * h, p = Math.min(a[0], a[1]), f = Math.max(a[0], a[1]), g = e.get("clockwise"), m = 1; m < n.length; m++) {
                    var v = c++ % l.length;
                    u[v] = u[v] || [], u[v].push(new r.Sector({
                        shape: {
                            cx: t.cx,
                            cy: t.cy,
                            r0: p,
                            r: f,
                            startAngle: d,
                            endAngle: -n[m] * h,
                            clockwise: g
                        }, silent: !0
                    })), d = -n[m] * h
                }
                for (var m = 0; m < u.length; m++) this.group.add(r.mergePath(u[m], {
                    style: i.defaults({fill: l[m % l.length]}, s.getAreaStyle()),
                    silent: !0
                }))
            }
        })
    }),t("echarts/component/angleAxis", ["require", "../coord/polar/polarCreator", "./axis/AngleAxisView"], function (e) {
        e("../coord/polar/polarCreator"), e("./axis/AngleAxisView")
    }),t("echarts/component/axis/RadiusAxisView", ["require", "zrender/core/util", "../../util/graphic", "./AxisBuilder", "../../echarts"], function (e) {
        function t(e, t, i) {
            return {
                position: [e.cx, e.cy],
                rotation: i / 180 * Math.PI,
                labelDirection: -1,
                tickDirection: -1,
                nameDirection: 1,
                labelRotation: t.getModel("axisLabel").get("rotate"),
                z2: 1
            }
        }

        var i = e("zrender/core/util"), r = e("../../util/graphic"), n = e("./AxisBuilder"),
            a = ["axisLine", "axisLabel", "axisTick", "axisName"], o = ["splitLine", "splitArea"];
        e("../../echarts").extendComponentView({
            type: "radiusAxis", render: function (e, r) {
                if (this.group.removeAll(), e.get("show")) {
                    var s = r.getComponent("polar", e.get("polarIndex")), l = s.coordinateSystem.getAngleAxis(),
                        c = e.axis, u = s.coordinateSystem, h = c.getTicksCoords(), d = l.getExtent()[0],
                        p = c.getExtent(), f = t(u, e, d), g = new n(e, f);
                    i.each(a, g.add, g), this.group.add(g.getGroup()), i.each(o, function (t) {
                        e.get(t + ".show") && this["_" + t](e, u, d, p, h)
                    }, this)
                }
            }, _splitLine: function (e, t, n, a, o) {
                var s = e.getModel("splitLine"), l = s.getModel("lineStyle"), c = l.get("color"), u = 0;
                c = c instanceof Array ? c : [c];
                for (var h = [], d = 0; d < o.length; d++) {
                    var p = u++ % c.length;
                    h[p] = h[p] || [], h[p].push(new r.Circle({shape: {cx: t.cx, cy: t.cy, r: o[d]}, silent: !0}))
                }
                for (var d = 0; d < h.length; d++) this.group.add(r.mergePath(h[d], {
                    style: i.defaults({
                        stroke: c[d % c.length],
                        fill: null
                    }, l.getLineStyle()), silent: !0
                }))
            }, _splitArea: function (e, t, n, a, o) {
                var s = e.getModel("splitArea"), l = s.getModel("areaStyle"), c = l.get("color"), u = 0;
                c = c instanceof Array ? c : [c];
                for (var h = [], d = o[0], p = 1; p < o.length; p++) {
                    var f = u++ % c.length;
                    h[f] = h[f] || [], h[f].push(new r.Sector({
                        shape: {
                            cx: t.cx,
                            cy: t.cy,
                            r0: d,
                            r: o[p],
                            startAngle: 0,
                            endAngle: 2 * Math.PI
                        }, silent: !0
                    })), d = o[p]
                }
                for (var p = 0; p < h.length; p++) this.group.add(r.mergePath(h[p], {
                    style: i.defaults({fill: c[p % c.length]}, l.getAreaStyle()),
                    silent: !0
                }))
            }
        })
    }),t("echarts/component/radiusAxis", ["require", "../coord/polar/polarCreator", "./axis/RadiusAxisView"], function (e) {
        e("../coord/polar/polarCreator"), e("./axis/RadiusAxisView")
    }),t("echarts/component/polar", ["require", "../coord/polar/polarCreator", "./angleAxis", "./radiusAxis", "../echarts"], function (e) {
        e("../coord/polar/polarCreator"), e("./angleAxis"), e("./radiusAxis"), e("../echarts").extendComponentView({type: "polar"})
    }),t("echarts/chart/radar/RadarSeries", ["require", "../helper/createListFromArray", "../../model/Series", "zrender/core/util", "../../util/number", "../../component/polar"], function (e) {
        var t = e("../helper/createListFromArray"), i = e("../../model/Series"), r = e("zrender/core/util"),
            n = e("../../util/number"), a = n.linearMap;
        return e("../../component/polar"), i.extend({
            type: "series.radar",
            dependencies: ["polar"],
            getInitialData: function (e, i) {
                var n = e.indicator, o = t(e.data, this, i);
                if (n) {
                    var s = r.reduce(n, function (e, t, i) {
                        return e[t.name] = t, e
                    }, {});
                    o = o.map(["radius"], function (e, t) {
                        var i = s[o.getName(t)];
                        return i && i.max ? a(e, [i.min || 0, i.max], [0, 1]) : void 0
                    });
                    var l = this.getRawValue;
                    this.getRawValue = function (e) {
                        var t = l.call(this, e), i = s[o.getName(e)];
                        return i && null != i.max ? a(t, [0, 1], [i.min || 0, i.max]) : void 0
                    }
                }
                return o
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "polar",
                legendHoverLink: !0,
                polarIndex: 0,
                lineStyle: {normal: {width: 2, type: "solid"}},
                symbol: "emptyCircle",
                symbolSize: 4,
                showAllSymbol: !1
            }
        })
    }),t("echarts/chart/radar/RadarView", ["require", "../helper/SymbolDraw", "../../util/graphic", "zrender/core/util", "../../echarts"], function (e) {
        var t = e("../helper/SymbolDraw"), i = e("../../util/graphic"), r = e("zrender/core/util");
        return e("../../echarts").extendChartView({
            type: "radar", init: function () {
                this._symbolDraw = new t
            }, render: function (e, t, n) {
                function a() {
                    return r.map(c, function (e) {
                        return [o.cx, o.cy]
                    })
                }

                var o = e.coordinateSystem, s = this.group, l = e.getData(), c = l.mapArray(l.getItemLayout, !0);
                if (!(c.length < 1)) {
                    c.push(c[0].slice());
                    var u = this._polygon || (this._polygon = new i.Polygon({shape: {points: []}})),
                        h = this._polyline || (this._polyline = new i.Polyline({shape: {points: []}, z2: 10})),
                        d = h.shape, p = u.shape, f = {shape: {points: c}};
                    d.points.length !== c.length ? (p.points = a(), d.points = a(), i.initProps(h, f, e), i.initProps(u, f, e)) : (i.updateProps(h, f, e), i.updateProps(u, f, e)), this._symbolDraw.updateData(l), h.setStyle(r.extend(e.getModel("lineStyle.normal").getLineStyle(), {stroke: l.getVisual("color")}));
                    var g = e.getModel("areaStyle.normal");
                    u.ignore = g.isEmpty(), i.setHoverStyle(h, e.getModel("lineStyle.emphasis").getLineStyle()), u.ignore || (u.setStyle(r.defaults(g.getAreaStyle(), {
                        fill: l.getVisual("color"),
                        opacity: .7
                    })), i.setHoverStyle(u, e.getModel("areaStyle.emphasis").getLineStyle())), s.add(h), s.add(u), s.add(this._symbolDraw.group), this._data = l
                }
            }
        })
    }),t("echarts/chart/radar/backwardCompat", ["require", "zrender/core/util", "../../scale/Interval"], function (e) {
        var t = e("zrender/core/util"), i = e("../../scale/Interval"), r = t.isArray, n = t.each, a = t.filter;
        return function (e) {
            var o = e.polar, s = e.radiusAxis, l = e.angleAxis, c = a(e.series, function (e) {
                return "radar" === e.type
            }) || [];
            o && c.length && (r(o) || (o = [o]), s ? r(s) || (s = [s]) : s = e.radiusAxis = [], l ? r(l) || (l = [l]) : l = e.angleAxis = [], n(o, function (r, o) {
                if (r.indicator) {
                    var u = t.map(r.indicator, function (e) {
                        var t = e.min, i = e.max;
                        return null != i && i >= 0 && (t = 0), {name: e.text, min: t, max: i}
                    }), h = t.find(s, function (e) {
                        return (e.polarIndex || 0) === o
                    }), d = t.find(l, function (e) {
                        return (e.polarIndex || 0) === o
                    });
                    h || (h = {type: "value", polarIndex: o}, s.push(h)), d || (d = {
                        type: "category",
                        polarIndex: o
                    }, l.push(d)), d.data = t.map(r.indicator, function (e) {
                        var t = {value: e.text}, i = e.axisLabel;
                        return i && i.textStyle && (t.textStyle = i.textStyle), t
                    }), d.startAngle = r.startAngle || 90, r.axisLine && (d.splitLine = r.axisLine), r.axisLabel && (d.axisLabel = r.axisLabel), r.splitLine && (h.splitLine = r.splitLine), r.splitArea && (h.splitArea = r.splitArea), h.splitLine = h.splitLine || {}, h.splitArea = h.splitArea || {}, null == h.splitLine.show && (h.splitLine.show = !0), null == h.splitArea.show && (h.splitArea.show = !0), d.boundaryGap = !1, h.min = 0, h.max = 1, h.interval = 1 / (r.splitNumber || 5), h.axisLine = {show: !1}, h.axisLabel = {show: !1}, h.axisTick = {show: !1};
                    var p = a(c, function (e) {
                        return (e.polarIndex || 0) === o
                    }), f = t.map(u, function () {
                        return []
                    });
                    n(p, function (i) {
                        if (i.indicator = u, i.data[0] && t.isArray(i.data[0].value)) {
                            var r = i.data, n = r[0];
                            i.data = n.value, i.name = n.name;
                            for (var a = 1; a < r.length; a++) {
                                var n = r[a], o = t.clone(i);
                                e.series.push(t.extend(o, {name: n.name, data: n.value, indicator: u}))
                            }
                            for (var a = 0; a < n.value.length; a++) for (var s = 0; s < r.length; s++) f[a].push(r[s].value[a])
                        }
                    }), n(f, function (e, t) {
                        var n = new i, a = 1 / 0, o = -(1 / 0), s = e.length;
                        if (s) {
                            for (var l = 0; s > l; l++) a = Math.min(a, e[l]), o = Math.max(o, e[l]);
                            n.setExtent(a, o), n.niceExtent(r.splitNumber || 5);
                            var c = n.getExtent();
                            null == u[t].min && (u[t].min = c[0]), null == u[t].max && (u[t].max = c[1])
                        }
                    })
                }
            }))
        }
    }),t("echarts/chart/radar", ["require", "zrender/core/util", "../echarts", "./radar/RadarSeries", "./radar/RadarView", "../visual/symbol", "../layout/points", "./radar/backwardCompat"], function (e) {
        var t = e("zrender/core/util"), i = e("../echarts");
        e("./radar/RadarSeries"), e("./radar/RadarView"), i.registerVisualCoding("chart", t.curry(e("../visual/symbol"), "radar", "circle", null)), i.registerLayout(t.curry(e("../layout/points"), "radar")), i.registerPreprocessor(e("./radar/backwardCompat"))
    }),t("echarts/component/legend/LegendModel", ["require", "zrender/core/util", "../../model/Model", "../../echarts"], function (e) {
        var t = e("zrender/core/util"), i = e("../../model/Model");
        return e("../../echarts").extendComponentModel({
            type: "legend",
            dependencies: ["series"],
            layoutMode: {type: "box", ignoreSize: !0},
            init: function (e, r, n) {
                this.mergeDefaultAndTheme(e, n), e.selected = e.selected || {};
                var a = t.map(e.data || [], function (e) {
                    return "string" == typeof e && (e = {name: e}), new i(e, this, this.ecModel)
                }, this);
                this._data = a, this._updateAvailableNames(n);
                var o = this.option.selected;
                if (a[0] && "single" === this.get("selectedMode")) {
                    var s = !1;
                    for (var l in o) o[l] && (this.select(l), s = !0);
                    !s && this.select(a[0].get("name"))
                }
            },
            mergeOption: function (e) {
                this.$superCall("mergeOption", e), this._updateAvailableNames(this.ecModel)
            },
            _updateAvailableNames: function (e) {
                var i = t.map(e.getSeries(), function (e) {
                    return e.name
                });
                e.eachSeries(function (e) {
                    if (e.legendDataProvider) {
                        var t = e.legendDataProvider();
                        i = i.concat(t.mapArray(t.getName))
                    }
                }), this._availableNames = i
            },
            getData: function () {
                return this._data
            },
            select: function (e) {
                var i = this.option.selected, r = this.get("selectedMode");
                if ("single" === r) {
                    var n = this._data;
                    t.each(n, function (e) {
                        i[e.get("name")] = !1
                    })
                }
                i[e] = !0
            },
            unSelect: function (e) {
                "single" !== this.get("selectedMode") && (this.option.selected[e] = !1)
            },
            toggleSelected: function (e) {
                var t = this.option.selected;
                e in t || (t[e] = !0), this[t[e] ? "unSelect" : "select"](e)
            },
            isSelected: function (e) {
                var i = this.option.selected;
                return !(e in i && !i[e]) && t.indexOf(this._availableNames, e) >= 0
            },
            defaultOption: {
                zlevel: 0,
                z: 4,
                show: !0,
                orient: "horizontal",
                left: "center",
                top: "top",
                align: "auto",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                textStyle: {color: "#333"},
                selectedMode: !0
            }
        })
    }),t("echarts/component/legend/legendAction", ["require", "../../echarts", "zrender/core/util"], function (e) {
        function t(e, t, i) {
            var n, a = {}, o = "toggleSelected" === e;
            return i.eachComponent("legend", function (i) {
                o && null != n ? i[n ? "select" : "unSelect"](t.name) : (i[e](t.name), n = i.isSelected(t.name));
                var s = i.getData();
                r.each(s, function (e) {
                    var t = e.get("name");
                    if ("\n" !== t && "" !== t) {
                        var r = i.isSelected(t);
                        t in a ? a[t] = a[t] && r : a[t] = r
                    }
                })
            }), {name: t.name, selected: a}
        }

        var i = e("../../echarts"), r = e("zrender/core/util");
        i.registerAction("legendToggleSelect", "legendselectchanged", r.curry(t, "toggleSelected")), i.registerAction("legendSelect", "legendselected", r.curry(t, "select")), i.registerAction("legendUnSelect", "legendunselected", r.curry(t, "unSelect"))
    }),t("echarts/component/helper/listComponent", ["require", "../../util/layout", "../../util/format", "../../util/graphic"], function (e) {
        function t(e, t, r) {
            i.positionGroup(e, t.getBoxLayoutParams(), {width: r.getWidth(), height: r.getHeight()}, t.get("padding"))
        }

        var i = e("../../util/layout"), r = e("../../util/format"), n = e("../../util/graphic");
        return {
            layout: function (e, r, n) {
                i.box(r.get("orient"), e, r.get("itemGap"), n.getWidth(), n.getHeight()), t(e, r, n)
            }, addBackground: function (e, t) {
                var i = r.normalizeCssArray(t.get("padding")), a = e.getBoundingRect(),
                    o = t.getItemStyle(["color", "opacity"]);
                o.fill = t.get("backgroundColor");
                var s = new n.Rect({
                    shape: {
                        x: a.x - i[3],
                        y: a.y - i[0],
                        width: a.width + i[1] + i[3],
                        height: a.height + i[0] + i[2]
                    }, style: o, silent: !0
                });
                n.subPixelOptimizeRect(s), e.add(s)
            }
        }
    }),t("echarts/component/legend/LegendView", ["require", "zrender/core/util", "../../util/symbol", "../../util/graphic", "../helper/listComponent", "../../echarts"], function (e) {
        function t(e, t) {
            t.dispatchAction({type: "legendToggleSelect", name: e})
        }

        function i(e, t, i) {
            e.get("legendHoverLink") && i.dispatchAction({type: "highlight", seriesName: e.name, name: t})
        }

        function r(e, t, i) {
            e.get("legendHoverLink") && i.dispatchAction({type: "downplay", seriesName: e.name, name: t})
        }

        var n = e("zrender/core/util"), a = e("../../util/symbol"), o = e("../../util/graphic"),
            s = e("../helper/listComponent"), l = n.curry, c = "#ccc";
        return e("../../echarts").extendComponentView({
            type: "legend", init: function () {
                this._symbolTypeStore = {}
            }, render: function (e, a, u) {
                var h = e.get("selectedMode"), d = e.get("itemWidth"), p = e.get("itemHeight"), f = e.get("align"),
                    g = this.group;
                g.removeAll(), "auto" === f && (f = "right" === e.get("left") && "vertical" === e.get("orient") ? "right" : "left");
                var m = {}, v = {};
                n.each(e.getData(), function (n) {
                    var s = n.get("name");
                    ("" === s || "\n" === s) && g.add(new o.Group({newline: !0}));
                    var y = a.getSeriesByName(s)[0];
                    if (m[s] = n, y && !v[s]) {
                        var x = y.getData(), _ = x.getVisual("color");
                        e.isSelected(s) || (_ = c), "function" == typeof _ && (_ = _(y.getDataParams(0)));
                        var b = x.getVisual("legendSymbol") || "roundRect", w = x.getVisual("symbol"),
                            M = this._createItem(s, n, e, b, w, d, p, f, _, h);
                        M.on("click", l(t, s, u)).on("mouseover", l(i, y, "", u)).on("mouseout", l(r, y, "", u)), v[s] = !0
                    }
                }, this), a.eachRawSeries(function (n) {
                    if (n.legendDataProvider) {
                        var a = n.legendDataProvider();
                        a.each(function (o) {
                            var s = a.getName(o);
                            if (m[s] && !v[s]) {
                                var g = a.getItemVisual(o, "color");
                                e.isSelected(s) || (g = c);
                                var y = "roundRect", x = this._createItem(s, m[s], e, y, null, d, p, f, g, h);
                                x.on("click", l(t, s, u)).on("mouseover", l(i, n, s, u)).on("mouseout", l(r, n, s, u)), v[s] = !0
                            }
                        }, !1, this)
                    }
                }, this), s.layout(g, e, u), s.addBackground(g, e)
            }, _createItem: function (e, t, i, r, n, s, l, c, u, h) {
                var d = new o.Group, p = t.getModel("textStyle"), f = t.get("icon");
                if (r = f || r, d.add(a.createSymbol(r, 0, 0, s, l, u)), !f && n && n !== r && "none" != n) {
                    var g = .8 * l;
                    d.add(a.createSymbol(n, (s - g) / 2, (l - g) / 2, g, g, u))
                }
                var m = "left" === c ? s + 5 : -5, v = c, y = i.get("formatter");
                "string" == typeof y && y ? e = y.replace("{name}", e) : "function" == typeof y && (e = y(e));
                var x = new o.Text({
                    style: {
                        text: e,
                        x: m,
                        y: l / 2,
                        fill: p.getTextColor(),
                        textFont: p.getFont(),
                        textAlign: v,
                        textBaseline: "middle"
                    }
                });
                return d.add(x), d.add(new o.Rect({
                    shape: d.getBoundingRect(),
                    invisible: !0
                })), d.eachChild(function (e) {
                    e.silent = !h
                }), this.group.add(d), d
            }
        })
    }),t("echarts/component/legend/legendFilter", [], function () {
        return function (e) {
            var t = e.findComponents({mainType: "legend"});
            t && t.length && e.filterSeries(function (e) {
                for (var i = 0; i < t.length; i++) if (!t[i].isSelected(e.name)) return !1;
                return !0
            })
        }
    }),t("echarts/component/legend", ["require", "./legend/LegendModel", "./legend/legendAction", "./legend/LegendView", "../echarts", "./legend/legendFilter"], function (e) {
        e("./legend/LegendModel"), e("./legend/legendAction"), e("./legend/LegendView");
        var t = e("../echarts");
        t.registerProcessor("filter", e("./legend/legendFilter"))
    }),t("echarts/chart/map/MapSeries", ["require", "../../data/List", "../../echarts", "../../model/Series", "zrender/core/util", "../../data/helper/completeDimensions", "../../util/format", "../helper/dataSelectableMixin"], function (e) {
        function t(e, t) {
            for (var i = {}, r = t.features, n = 0; n < e.length; n++) i[e[n].name] = e[n];
            for (var n = 0; n < r.length; n++) {
                var a = r[n].properties.name;
                i[a] || e.push({value: NaN, name: a})
            }
            return e
        }

        var i = e("../../data/List"), r = e("../../echarts"), n = e("../../model/Series"), a = e("zrender/core/util"),
            o = e("../../data/helper/completeDimensions"), s = e("../../util/format"), l = s.encodeHTML,
            c = s.addCommas, u = e("../helper/dataSelectableMixin"), h = n.extend({
                type: "series.map",
                needsDrawMap: !1,
                seriesGroup: [],
                init: function (e) {
                    e = this._fillOption(e), this.option = e, this.$superApply("init", arguments), this.updateSelectedMap()
                },
                getInitialData: function (e) {
                    var t = o(["value"], e.data), r = new i(t, this);
                    return r.initData(e.data), r
                },
                mergeOption: function (e) {
                    e = this._fillOption(e), n.prototype.mergeOption.call(this, e), this.updateSelectedMap()
                },
                _fillOption: function (e) {
                    e = a.extend({}, e);
                    var i = r.getMap(e.mapType), n = i && i.geoJson;
                    return n && e.data && (e.data = t(e.data, n)), e
                },
                setRoamZoom: function (e) {
                    var t = this.option.roamDetail;
                    t && (t.zoom = e)
                },
                setRoamPan: function (e, t) {
                    var i = this.option.roamDetail;
                    i && (i.x = e, i.y = t)
                },
                formatTooltip: function (e) {
                    for (var t = this._data, i = c(this.getRawValue(e)), r = t.getName(e), n = this.seriesGroup, a = [], o = 0; o < n.length; o++) isNaN(n[o].getRawValue(e)) || a.push(l(n[o].name));
                    return a.join(", ") + "<br />" + r + " : " + i
                },
                defaultOption: {
                    zlevel: 0,
                    z: 2,
                    coordinateSystem: "geo",
                    map: "china",
                    left: "center",
                    top: "center",
                    showLegendSymbol: !0,
                    dataRangeHoverLink: !0,
                    roamDetail: {x: 0, y: 0, zoom: 1},
                    label: {
                        normal: {show: !1, textStyle: {color: "#000"}},
                        emphasis: {show: !1, textStyle: {color: "#000"}}
                    },
                    itemStyle: {
                        normal: {borderWidth: .5, borderColor: "#444", areaColor: "#eee"},
                        emphasis: {areaColor: "rgba(255,215, 0, 0.8)"}
                    }
                }
            });
        return a.mixin(h, u), h
    }),t("echarts/component/helper/interactionMutex", ["require"], function (e) {
        function t(e) {
            return e[i] || (e[i] = {})
        }

        var i = "\x00_ec_interaction_mutex", r = {
            take: function (e, i) {
                t(i)[e] = !0
            }, release: function (e, i) {
                t(i)[e] = !1
            }, isTaken: function (e, i) {
                return !!t(i)[e]
            }
        };
        return r
    }),t("echarts/component/helper/RoamController", ["require", "zrender/mixin/Eventful", "zrender/core/util", "zrender/core/event", "./interactionMutex"], function (e) {
        function t(e) {
            if (!e.target || !e.target.draggable) {
                var t = e.offsetX, i = e.offsetY, r = this.rect;
                r && r.contain(t, i) && (this._x = t, this._y = i, this._dragging = !0)
            }
        }

        function i(e) {
            if (this._dragging && (u.stop(e.event), "pinch" !== e.gestureEvent)) {
                if (h.isTaken("globalPan", this._zr)) return;
                var t = e.offsetX, i = e.offsetY, r = t - this._x, n = i - this._y;
                this._x = t, this._y = i;
                var a = this.target;
                if (a) {
                    var o = a.position;
                    o[0] += r, o[1] += n, a.dirty()
                }
                u.stop(e.event), this.trigger("pan", r, n)
            }
        }

        function r(e) {
            this._dragging = !1
        }

        function n(e) {
            u.stop(e.event);
            var t = e.wheelDelta < 0 ? 1.1 : 1 / 1.1;
            o.call(this, e, t, e.offsetX, e.offsetY)
        }

        function a(e) {
            if (!h.isTaken("globalPan", this._zr)) {
                u.stop(e.event);
                var t = e.pinchScale > 1 ? 1.1 : 1 / 1.1;
                o.call(this, e, t, e.pinchX, e.pinchY)
            }
        }

        function o(e, t, i, r) {
            var n = this.rect;
            if (n && n.contain(i, r)) {
                var a = this.target;
                if (a) {
                    var o = a.position, s = a.scale, l = this._zoom = this._zoom || 1;
                    l *= t;
                    var c = l / this._zoom;
                    this._zoom = l, o[0] -= (i - o[0]) * (c - 1), o[1] -= (r - o[1]) * (c - 1), s[0] *= c, s[1] *= c, a.dirty()
                }
                this.trigger("zoom", t, i, r)
            }
        }

        function s(e, o, s) {
            this.target = o, this.rect = s, this._zr = e;
            var u = c.bind, h = u(t, this), d = u(i, this), p = u(r, this), f = u(n, this), g = u(a, this);
            l.call(this), this.enable = function (t) {
                this.disable(), null == t && (t = !0), t && "scale" !== t && (e.on("mousedown", h), e.on("mousemove", d), e.on("mouseup", p)), t && "move" !== t && (e.on("mousewheel", f), e.on("pinch", g))
            }, this.disable = function () {
                e.off("mousedown", h), e.off("mousemove", d), e.off("mouseup", p), e.off("mousewheel", f), e.off("pinch", g)
            }, this.dispose = this.disable, this.isDragging = function () {
                return this._dragging
            }, this.isPinching = function () {
                return this._pinching
            }
        }

        var l = e("zrender/mixin/Eventful"), c = e("zrender/core/util"), u = e("zrender/core/event"),
            h = e("./interactionMutex");
        return c.mixin(s, l), s
    }),t("echarts/component/helper/MapDraw", ["require", "./RoamController", "../../util/graphic", "zrender/core/util"], function (e) {
        function t(e, t) {
            var i = e.getItemStyle(), r = e.get("areaColor");
            return r && (i.fill = r), i
        }

        function i(e, t, i, n, a) {
            i.off("click"), e.get("selectedMode") && i.on("click", function (i) {
                var o = i.target.dataIndex;
                if (null != o) {
                    var s = t.getName(o);
                    n.dispatchAction({
                        type: "mapToggleSelect",
                        seriesIndex: e.seriesIndex,
                        name: s,
                        from: a.uid
                    }), r(e, t, n)
                }
            })
        }

        function r(e, t) {
            t.eachItemGraphicEl(function (i, r) {
                var n = t.getName(r);
                i.trigger(e.isSelected(n) ? "emphasis" : "normal")
            })
        }

        function n(e, t) {
            var i = new o.Group;
            this._controller = new a(e.getZr(), t ? i : null, null), this.group = i, this._updateGroup = t
        }

        var a = e("./RoamController"), o = e("../../util/graphic"), s = e("zrender/core/util");
        return n.prototype = {
            constructor: n, draw: function (e, n, a, l) {
                var c = e.getData && e.getData(), u = e.coordinateSystem, h = this.group;
                h.removeAll();
                var d = u.scale;
                h.position = u.position.slice(), h.scale = d.slice();
                var p, f, g, m, v, y, x = ["itemStyle", "normal"], _ = ["itemStyle", "emphasis"],
                    b = ["label", "normal"], w = ["label", "emphasis"];
                c || (p = e.getModel(x), f = e.getModel(_), g = t(p, d), m = t(f, d), v = e.getModel(b), y = e.getModel(w)), s.each(u.regions, function (i) {
                    var r, n = new o.Group;
                    if (c) {
                        r = c.indexOfName(i.name);
                        var a = c.getItemModel(r), l = c.getItemVisual(r, "color", !0);
                        p = a.getModel(x), f = a.getModel(_), g = t(p, d), m = t(f, d), v = a.getModel(b), y = a.getModel(w), l && (g.fill = l)
                    }
                    var u = v.getModel("textStyle"), M = y.getModel("textStyle");
                    s.each(i.contours, function (e) {
                        var t = new o.Polygon({shape: {points: e}, style: {strokeNoScale: !0}, culling: !0});
                        t.setStyle(g), n.add(t)
                    });
                    var S = v.get("show"), A = y.get("show"), z = c && isNaN(c.get("value", r)),
                        C = c && c.getItemLayout(r);
                    if (!c || z && (S || A) || C && C.showLabel) {
                        var L = c ? r : i.name, I = e.getFormattedLabel(L, "normal"),
                            T = e.getFormattedLabel(L, "emphasis"), D = new o.Text({
                                style: {
                                    text: S ? I || i.name : "",
                                    fill: u.getTextColor(),
                                    textFont: u.getFont(),
                                    textAlign: "center",
                                    textBaseline: "middle"
                                },
                                hoverStyle: {text: A ? T || i.name : "", fill: M.getTextColor(), textFont: M.getFont()},
                                position: i.center.slice(),
                                scale: [1 / d[0], 1 / d[1]],
                                z2: 10,
                                silent: !0
                            });
                        n.add(D)
                    }
                    c && c.setItemGraphicEl(r, n), o.setHoverStyle(n, m), h.add(n)
                }), this._updateController(e, n, a), c && i(e, c, h, a, l), c && r(e, c)
            }, remove: function () {
                this.group.removeAll(), this._controller.dispose()
            }, _updateController: function (e, t, i) {
                var r = e.coordinateSystem, n = this._controller;
                n.enable(e.get("roam") || !1);
                var a = e.type.split(".")[0];
                n.off("pan").on("pan", function (t, r) {
                    i.dispatchAction({type: "geoRoam", component: a, name: e.name, dx: t, dy: r})
                }), n.off("zoom").on("zoom", function (t, r, n) {
                    if (i.dispatchAction({
                        type: "geoRoam",
                        component: a,
                        name: e.name,
                        zoom: t,
                        originX: r,
                        originY: n
                    }), this._updateGroup) {
                        var o = this.group, s = o.scale;
                        o.traverse(function (e) {
                            "text" === e.type && e.attr("scale", [1 / s[0], 1 / s[1]])
                        })
                    }
                }, this), n.rect = r.getViewRect()
            }
        }, n
    }),t("echarts/chart/map/MapView", ["require", "../../util/graphic", "../../component/helper/MapDraw", "../../echarts"], function (e) {
        var t = e("../../util/graphic"), i = e("../../component/helper/MapDraw");
        e("../../echarts").extendChartView({
            type: "map", render: function (e, t, r, n) {
                if (!n || "mapToggleSelect" !== n.type || n.from !== this.uid) {
                    var a = this.group;
                    if (a.removeAll(), n && "geoRoam" === n.type && "series" === n.component && n.name === e.name) {
                        var o = this._mapDraw;
                        o && a.add(o.group)
                    } else if (e.needsDrawMap) {
                        var o = this._mapDraw || new i(r, !0);
                        a.add(o.group), o.draw(e, t, r, this), this._mapDraw = o
                    } else this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
                    e.get("showLegendSymbol") && t.getComponent("legend") && this._renderSymbols(e, t, r)
                }
            }, remove: function () {
                this._mapDraw && this._mapDraw.remove(), this._mapDraw = null, this.group.removeAll()
            }, _renderSymbols: function (e, i, r) {
                var n = e.getData(), a = this.group;
                n.each("value", function (e, i) {
                    if (!isNaN(e)) {
                        var r = n.getItemLayout(i);
                        if (r && r.point) {
                            var o = r.point, s = r.offset, l = new t.Circle({
                                style: {fill: n.getVisual("color")},
                                shape: {cx: o[0] + 9 * s, cy: o[1], r: 3},
                                silent: !0,
                                z2: 10
                            });
                            if (!s) {
                                var c = n.getName(i), u = n.getItemModel(i), h = u.getModel("label.normal"),
                                    d = u.getModel("label.emphasis"), p = h.getModel("textStyle"),
                                    f = d.getModel("textStyle"), g = n.getItemGraphicEl(i);
                                l.setStyle({textPosition: "bottom"});
                                var m = function () {
                                    l.setStyle({
                                        text: d.get("show") ? c : "",
                                        textFill: f.getTextColor(),
                                        textFont: f.getFont()
                                    })
                                }, v = function () {
                                    l.setStyle({
                                        text: h.get("show") ? c : "",
                                        textFill: p.getTextColor(),
                                        textFont: p.getFont()
                                    })
                                };
                                g.on("mouseover", m).on("mouseout", v).on("emphasis", m).on("normal", v), v()
                            }
                            a.add(l)
                        }
                    }
                })
            }
        })
    }),t("echarts/action/roamHelper", ["require"], function (e) {
        var t = {};
        return t.calcPanAndZoom = function (e, t) {
            var i = t.dx, r = t.dy, n = t.zoom, a = e.get("x") || 0, o = e.get("y") || 0, s = e.get("zoom") || 1;
            if (null != i && null != r && (a += i, o += r), null != n) {
                var l = (t.originX - a) * (n - 1), c = (t.originY - o) * (n - 1);
                a -= l, o -= c
            }
            return {x: a, y: o, zoom: (n || 1) * s}
        }, t
    }),t("echarts/action/geoRoam", ["require", "zrender/core/util", "./roamHelper", "../echarts"], function (e) {
        var t = e("zrender/core/util"), i = e("./roamHelper"), r = e("../echarts"),
            n = {type: "geoRoam", event: "geoRoam", update: "updateLayout"};
        r.registerAction(n, function (e, r) {
            var n = e.component || "series";
            r.eachComponent(n, function (r) {
                if (r.name === e.name) {
                    var a = r.coordinateSystem;
                    if ("geo" !== a.type) return;
                    var o = r.getModel("roamDetail"), s = i.calcPanAndZoom(o, e);
                    r.setRoamPan && r.setRoamPan(s.x, s.y), r.setRoamZoom && r.setRoamZoom(s.zoom), a && a.setPan(s.x, s.y), a && a.setZoom(s.zoom), "series" === n && t.each(r.seriesGroup, function (e) {
                        e.setRoamPan(s.x, s.y), e.setRoamZoom(s.zoom)
                    })
                }
            })
        })
    }),t("echarts/coord/geo/GeoModel", ["require", "../../util/model", "../../model/Component"], function (e) {
        var t = e("../../util/model"), i = e("../../model/Component");
        i.extend({
            type: "geo",
            coordinateSystem: null,
            init: function (e) {
                i.prototype.init.apply(this, arguments), t.defaultEmphasis(e.label, ["position", "show", "textStyle", "distance", "formatter"])
            },
            defaultOption: {
                zlevel: 0,
                z: 0,
                show: !0,
                left: "center",
                top: "center",
                map: "",
                roamDetail: {x: 0, y: 0, zoom: 1},
                label: {
                    normal: {show: !1, textStyle: {color: "#000"}},
                    emphasis: {show: !0, textStyle: {color: "rgb(100,0,0)"}}
                },
                itemStyle: {
                    normal: {borderWidth: .5, borderColor: "#444", color: "#eee"},
                    emphasis: {color: "rgba(255,215,0,0.8)"}
                }
            },
            getFormattedLabel: function (e, t) {
                var i = this.get("label." + t + ".formatter"), r = {name: e};
                return "function" == typeof i ? (r.status = t, i(r)) : "string" == typeof i ? i.replace("{a}", r.seriesName) : void 0
            },
            setRoamZoom: function (e) {
                var t = this.option.roamDetail;
                t && (t.zoom = e)
            },
            setRoamPan: function (e, t) {
                var i = this.option.roamDetail;
                i && (i.x = e, i.y = t)
            }
        })
    }),t("zrender/contain/polygon", ["require", "./windingLine"], function (e) {
        function t(e, t) {
            return Math.abs(e - t) < n
        }

        function i(e, i, n) {
            var a = 0, o = e[0];
            if (!o) return !1;
            for (var s = 1; s < e.length; s++) {
                var l = e[s];
                a += r(o[0], o[1], l[0], l[1], i, n), o = l
            }
            var c = e[0];
            return t(o[0], c[0]) && t(o[1], c[1]) || (a += r(o[0], o[1], c[0], c[1], i, n)), 0 !== a
        }

        var r = e("./windingLine"), n = 1e-8;
        return {contain: i}
    }),t("echarts/coord/geo/Region", ["require", "zrender/contain/polygon", "zrender/core/BoundingRect", "zrender/core/bbox", "zrender/core/vector"], function (e) {
        function t(e, t, i) {
            if (this.name = e, this.contours = t, i) i = [i[0], i[1]]; else {
                var r = this.getBoundingRect();
                i = [r.x + r.width / 2, r.y + r.height / 2]
            }
            this.center = i
        }

        var i = e("zrender/contain/polygon"), r = e("zrender/core/BoundingRect"), n = e("zrender/core/bbox"),
            a = e("zrender/core/vector");
        return t.prototype = {
            constructor: t, getBoundingRect: function () {
                var e = this._rect;
                if (e) return e;
                for (var t = Number.MAX_VALUE, i = [t, t], o = [-t, -t], s = [], l = [], c = this.contours, u = 0; u < c.length; u++) n.fromPoints(c[u], s, l), a.min(i, i, s), a.max(o, o, l);
                return 0 === u && (i[0] = i[1] = o[0] = o[1] = 0), this._rect = new r(i[0], i[1], o[0] - i[0], o[1] - i[1])
            }, contain: function (e) {
                var t = this.getBoundingRect(), r = this.contours;
                if (t.contain(e[0], e[1])) for (var n = 0, a = r.length; a > n; n++) if (i.contain(r[n], e[0], e[1])) return !0;
                return !1
            }, transformTo: function (e, t, i, n) {
                var o = this.getBoundingRect(), s = o.width / o.height;
                i ? n || (n = i / s) : i = s * n;
                for (var l = new r(e, t, i, n), c = o.calculateTransform(l), u = this.contours, h = 0; h < u.length; h++) for (var d = 0; d < u[h].length; d++) a.applyTransform(u[h][d], u[h][d], c);
                o = this._rect, o.copy(l), this.center = [o.x + o.width / 2, o.y + o.height / 2]
            }
        }, t
    }),t("echarts/coord/geo/parseGeoJson", ["require", "zrender/core/util", "./Region"], function (e) {
        function t(e) {
            if (!e.UTF8Encoding) return e;
            for (var t = e.features, r = 0; r < t.length; r++) for (var n = t[r], a = n.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
                var c = o[l];
                if ("Polygon" === a.type) o[l] = i(c, s[l]); else if ("MultiPolygon" === a.type) for (var u = 0; u < c.length; u++) {
                    var h = c[u];
                    c[u] = i(h, s[l][u])
                }
            }
            return e.UTF8Encoding = !1, e
        }

        function i(e, t) {
            for (var i = [], r = t[0], n = t[1], a = 0; a < e.length; a += 2) {
                var o = e.charCodeAt(a) - 64, s = e.charCodeAt(a + 1) - 64;
                o = o >> 1 ^ -(1 & o), s = s >> 1 ^ -(1 & s), o += r, s += n, r = o, n = s, i.push([o / 1024, s / 1024])
            }
            return i
        }

        function r(e) {
            for (var t = [], i = 0; i < e.length; i++) for (var r = 0; r < e[i].length; r++) t.push(e[i][r]);
            return t
        }

        var n = e("zrender/core/util"), a = e("./Region");
        return function (e) {
            return t(e), n.map(n.filter(e.features, function (e) {
                return e.geometry && e.properties
            }), function (e) {
                var t = e.properties, i = e.geometry, n = i.coordinates;
                return "MultiPolygon" === i.type && (n = r(n)), new a(t.name, n, t.cp)
            })
        }
    }),t("echarts/coord/View", ["require", "zrender/core/vector", "zrender/core/matrix", "zrender/mixin/Transformable", "zrender/core/util", "zrender/core/BoundingRect"], function (e) {
        function t() {
            a.call(this)
        }

        function i(e) {
            this.name = e, this.dimensions = ["x", "y"], a.call(this), this._roamTransform = new t, this._viewTransform = new t
        }

        var r = e("zrender/core/vector"), n = e("zrender/core/matrix"), a = e("zrender/mixin/Transformable"),
            o = e("zrender/core/util"), s = e("zrender/core/BoundingRect"), l = r.applyTransform;
        return o.mixin(t, a), i.prototype = {
            constructor: i, type: "view", setBoundingRect: function (e, t, i, r) {
                return this._rect = new s(e, t, i, r), this._rect
            }, getBoundingRect: function () {
                return this._rect
            }, setViewRect: function (e, t, i, r) {
                this.transformTo(e, t, i, r), this._viewRect = new s(e, t, i, r)
            }, transformTo: function (e, t, i, r) {
                var n = this.getBoundingRect(), a = this._viewTransform;
                a.transform = n.calculateTransform(new s(e, t, i, r)), a.decomposeTransform(), this._updateTransform()
            }, setPan: function (e, t) {
                this._roamTransform.position = [e, t], this._updateTransform()
            }, setZoom: function (e) {
                this._roamTransform.scale = [e, e], this._updateTransform()
            }, getRoamTransform: function () {
                return this._roamTransform.transform
            }, _updateTransform: function () {
                var e = this._roamTransform, t = this._viewTransform;
                t.parent = e, e.updateTransform(), t.updateTransform(), t.transform && n.copy(this.transform || (this.transform = []), t.transform), this.decomposeTransform()
            }, getViewRect: function () {
                return this._viewRect
            }, dataToPoint: function (e) {
                var t = this.transform;
                return t ? l([], e, t) : [e[0], e[1]]
            }, pointToData: function (e) {
                var t = this.invTransform;
                return t ? l([], e, t) : [e[0], e[1]]
            }
        }, o.mixin(i, a), i
    }),t("echarts/coord/geo/fix/nanhai", ["require", "../Region"], function (e) {
        for (var t = e("../Region"), i = [126, 25], r = [[[0, 3.5], [7, 11.2], [15, 11.9], [30, 7], [42, .7], [52, .7], [56, 7.7], [59, .7], [64, .7], [64, 0], [5, 0], [0, 3.5]], [[13, 16.1], [19, 14.7], [16, 21.7], [11, 23.1], [13, 16.1]], [[12, 32.2], [14, 38.5], [15, 38.5], [13, 32.2], [12, 32.2]], [[16, 47.6], [12, 53.2], [13, 53.2], [18, 47.6], [16, 47.6]], [[6, 64.4], [8, 70], [9, 70], [8, 64.4], [6, 64.4]], [[23, 82.6], [29, 79.8], [30, 79.8], [25, 82.6], [23, 82.6]], [[37, 70.7], [43, 62.3], [44, 62.3], [39, 70.7], [37, 70.7]], [[48, 51.1], [51, 45.5], [53, 45.5], [50, 51.1], [48, 51.1]], [[51, 35], [51, 28.7], [53, 28.7], [53, 35], [51, 35]], [[52, 22.4], [55, 17.5], [56, 17.5], [53, 22.4], [52, 22.4]], [[58, 12.6], [62, 7], [63, 7], [60, 12.6], [58, 12.6]], [[0, 3.5], [0, 93.1], [64, 93.1], [64, 0], [63, 0], [63, 92.4], [1, 92.4], [1, 3.5], [0, 3.5]]], n = 0; n < r.length; n++) for (var a = 0; a < r[n].length; a++) r[n][a][0] /= 10.5, r[n][a][1] /= -14, r[n][a][0] += i[0], r[n][a][1] += i[1];
        return function (e) {
            "china" === e.map && e.regions.push(new t("南海诸岛", r, i))
        }
    }),t("echarts/coord/geo/fix/textCoord", ["require", "zrender/core/util"], function (e) {
        var t = e("zrender/core/util"),
            i = {"南海诸岛": [32, 80], "广东": [0, -10], "香港": [10, 5], "澳门": [-10, 10], "天津": [5, 5]};
        return function (e) {
            t.each(e.regions, function (e) {
                var t = i[e.name];
                if (t) {
                    var r = e.center;
                    r[0] += t[0] / 10.5, r[1] += -t[1] / 14
                }
            })
        }
    }),t("echarts/coord/geo/fix/geoCoord", ["require", "zrender/core/util"], function (e) {
        var t = e("zrender/core/util"), i = {Russia: [100, 60], "United States of America": [-99, 38]};
        return function (e) {
            t.each(e.regions, function (e) {
                var t = i[e.name];
                if (t) {
                    var r = e.center;
                    r[0] = t[0], r[1] = t[1]
                }
            })
        }
    }),t("echarts/coord/geo/Geo", ["require", "./parseGeoJson", "zrender/core/util", "zrender/core/BoundingRect", "../View", "./fix/nanhai", "./fix/textCoord", "./fix/geoCoord"], function (e) {
        function t(e, t, i, r, n) {
            a.call(this, e), this.map = t, this.dimensions = ["lng", "lat"], this._nameCoordMap = {}, this.loadGeoJson(i, r, n)
        }

        var i = e("./parseGeoJson"), r = e("zrender/core/util"), n = e("zrender/core/BoundingRect"), a = e("../View"),
            o = [e("./fix/nanhai"), e("./fix/textCoord"), e("./fix/geoCoord")];
        return t.prototype = {
            constructor: t, type: "geo", loadGeoJson: function (e, t, n) {
                try {
                    this.regions = e ? i(e) : []
                } catch (a) {
                    throw"Invalid geoJson format\n" + a
                }
                t = t || {}, n = n || {};
                for (var s = this.regions, l = {}, c = 0; c < s.length; c++) {
                    var u = s[c].name;
                    u = n[u] || u, s[c].name = u, l[u] = s[c], this.addGeoCoord(u, s[c].center);
                    var h = t[u];
                    h && s[c].transformTo(h.left, h.top, h.width, h.height)
                }
                this._regionsMap = l, this._rect = null, r.each(o, function (e) {
                    e(this)
                }, this)
            }, transformTo: function (e, t, i, r) {
                var a = this.getBoundingRect();
                a = a.clone(), a.y = -a.y - a.height;
                var o = this._viewTransform;
                o.transform = a.calculateTransform(new n(e, t, i, r)), o.decomposeTransform();
                var s = o.scale;
                s[1] = -s[1], o.updateTransform(), this._updateTransform()
            }, getRegion: function (e) {
                return this._regionsMap[e]
            }, addGeoCoord: function (e, t) {
                this._nameCoordMap[e] = t
            }, getGeoCoord: function (e) {
                return this._nameCoordMap[e]
            }, getBoundingRect: function () {
                if (this._rect) return this._rect;
                for (var e, t = this.regions, i = 0; i < t.length; i++) {
                    var r = t[i].getBoundingRect();
                    e = e || r.clone(), e.union(r)
                }
                return this._rect = e || new n(0, 0, 0, 0)
            }, dataToPoints: function (e) {
                var t = [];
                return e.mapArray(["lng", "lat"], function (e, i) {
                    return t[0] = e, t[1] = i, this.dataToPoint(t)
                }, this)
            }, dataToPoint: function (e) {
                return "string" == typeof e && (e = this.getGeoCoord(e)), e ? a.prototype.dataToPoint.call(this, e) : void 0
            }
        }, r.mixin(t, a), t
    }),t("echarts/coord/geo/geoCreator", ["require", "./GeoModel", "./Geo", "../../util/layout", "zrender/core/util", "../../echarts"], function (e) {
        function t(e, t) {
            var i = this.getBoundingRect(), r = e.getBoxLayoutParams();
            r.aspect = i.width / i.height * .75;
            var a = n.getLayoutRect(r, {width: t.getWidth(), height: t.getHeight()});
            this.setViewRect(a.x, a.y, a.width, a.height);
            var o = e.getModel("roamDetail"), s = o.get("x") || 0, l = o.get("y") || 0, c = o.get("zoom") || 1;
            this.setPan(s, l), this.setZoom(c)
        }

        function i(e, t) {
            a.each(t.get("geoCoord"), function (t, i) {
                e.addGeoCoord(i, t)
            })
        }

        e("./GeoModel");
        var r = e("./Geo"), n = e("../../util/layout"), a = e("zrender/core/util"), o = {}, s = {
            create: function (e, n) {
                var s = [];
                e.eachComponent("geo", function (e, a) {
                    var l = e.get("map"), c = o[l],
                        u = new r(l + a, l, c && c.geoJson, c && c.specialAreas, e.get("nameMap"));
                    s.push(u), i(u, e), e.coordinateSystem = u, u.model = e, u.resize = t, u.resize(e, n)
                }), e.eachSeries(function (e) {
                    var t = e.get("coordinateSystem");
                    if ("geo" === t) {
                        var i = e.get("geoIndex") || 0;
                        e.coordinateSystem = s[i]
                    }
                });
                var l = {};
                return e.eachSeriesByType("map", function (e) {
                    var t = e.get("map");
                    l[t] = l[t] || [], l[t].push(e)
                }), a.each(l, function (e, l) {
                    var c = o[l], u = a.map(e, function (e) {
                        return e.get("nameMap")
                    }), h = new r(l, l, c && c.geoJson, c && c.specialAreas, a.mergeAll(u));
                    s.push(h), h.resize = t, h.resize(e[0], n), a.each(e, function (e) {
                        e.coordinateSystem = h, i(h, e)
                    })
                }), s
            }, registerMap: function (e, t, i) {
                t.geoJson && !t.features && (i = t.specialAreas, t = t.geoJson), "string" == typeof t && (t = "undefined" != typeof JSON && JSON.parse ? JSON.parse(t) : new Function("return (" + t + ");")()), o[e] = {
                    geoJson: t,
                    specialAreas: i
                }
            }, getMap: function (e) {
                return o[e]
            }
        }, l = e("../../echarts");
        l.registerMap = s.registerMap, l.getMap = s.getMap, l.loadMap = function () {
        }, l.registerCoordinateSystem("geo", s)
    }),t("echarts/chart/map/mapSymbolLayout", ["require", "zrender/core/util"], function (e) {
        var t = e("zrender/core/util");
        return function (e) {
            var i = {};
            e.eachSeriesByType("map", function (r) {
                var n = r.get("mapType");
                if (!i[n]) {
                    var a = {};
                    t.each(r.seriesGroup, function (t) {
                        var i = t.coordinateSystem, r = t.getData();
                        t.get("showLegendSymbol") && e.getComponent("legend") && r.each("value", function (e, t) {
                            var n = r.getName(t), o = i.getRegion(n);
                            if (o && !isNaN(e)) {
                                var s = a[n] || 0, l = i.dataToPoint(o.center);
                                a[n] = s + 1, r.setItemLayout(t, {point: l, offset: s})
                            }
                        })
                    });
                    var o = r.getData();
                    o.each(function (e) {
                        var t = o.getName(e), i = o.getItemLayout(e) || {};
                        i.showLabel = !a[t], o.setItemLayout(e, i)
                    }), i[n] = !0
                }
            })
        }
    }),t("echarts/chart/map/mapVisual", ["require"], function (e) {
        return function (e) {
            e.eachSeriesByType("map", function (e) {
                var t = e.get("color"), i = e.getModel("itemStyle.normal"), r = i.get("areaColor"),
                    n = i.get("color") || t[e.seriesIndex % t.length];
                e.getData().setVisual({areaColor: r, color: n})
            })
        }
    }),t("echarts/chart/map/mapDataStatistic", ["require", "zrender/core/util"], function (e) {
        function t(e, t) {
            for (var i = {}, r = ["value"], n = 0; n < e.length; n++) e[n].each(r, function (t, r) {
                var a = e[n].getName(r);
                i[a] = i[a] || [], isNaN(t) || i[a].push(t)
            });
            return e[0].map(r, function (r, n) {
                for (var a = e[0].getName(n), o = 0, s = 1 / 0, l = -(1 / 0), c = i[a].length, u = 0; c > u; u++) s = Math.min(s, i[a][u]), l = Math.max(l, i[a][u]), o += i[a][u];
                var h;
                return h = "min" === t ? s : "max" === t ? l : "average" === t ? o / c : o, 0 === c ? NaN : h
            })
        }

        var i = e("zrender/core/util");
        return function (e) {
            var r = {};
            e.eachSeriesByType("map", function (e) {
                var t = e.get("map");
                r[t] = r[t] || [], r[t].push(e)
            }), i.each(r, function (e, r) {
                var n = t(i.map(e, function (e) {
                    return e.getData()
                }), e[0].get("mapValueCalculation"));
                e[0].seriesGroup = [], e[0].setData(n);
                for (var a = 0; a < e.length; a++) e[a].seriesGroup = e, e[a].needsDrawMap = 0 === a
            })
        }
    }),t("echarts/chart/map/backwardCompat", ["require", "zrender/core/util"], function (e) {
        function t(e) {
            var t = {};
            return i.each(r, function (i) {
                null != e[i] && (t[i] = e[i])
            }), t
        }

        var i = e("zrender/core/util"),
            r = ["x", "y", "x2", "y2", "width", "height", "map", "roam", "roamDetail", "label", "itemStyle"], n = {};
        return function (e) {
            var r = [];
            i.each(e.series, function (e) {
                "map" === e.type && r.push(e), i.extend(n, e.geoCoord)
            });
            var a = {};
            i.each(r, function (r) {
                if (r.map = r.map || r.mapType, i.defaults(r, r.mapLocation), r.markPoint) {
                    var o = r.markPoint;
                    if (o.data = i.map(o.data, function (e) {
                        if (!i.isArray(e.value)) {
                            var t;
                            e.geoCoord ? t = e.geoCoord : e.name && (t = n[e.name]);
                            var r = t ? [t[0], t[1]] : [NaN, NaN];
                            null != e.value && r.push(e.value), e.value = r
                        }
                        return e
                    }), !r.data || !r.data.length) {
                        e.geo || (e.geo = []);
                        var s = a[r.map];
                        s || (s = a[r.map] = t(r), e.geo.push(s));
                        var l = r.markPoint;
                        l.type = e.effect && e.effect.show ? "effectScatter" : "scatter", l.coordinateSystem = "geo", l.geoIndex = i.indexOf(e.geo, s), l.name = r.name, e.series.splice(i.indexOf(e.series, r), 1, l)
                    }
                }
            })
        }
    }),t("echarts/chart/map", ["require", "../echarts", "./map/MapSeries", "./map/MapView", "../action/geoRoam", "../coord/geo/geoCreator", "./map/mapSymbolLayout", "./map/mapVisual", "./map/mapDataStatistic", "./map/backwardCompat", "../action/createDataSelectAction"], function (e) {
        var t = e("../echarts");
        e("./map/MapSeries"), e("./map/MapView"), e("../action/geoRoam"), e("../coord/geo/geoCreator"), t.registerLayout(e("./map/mapSymbolLayout")), t.registerVisualCoding("chart", e("./map/mapVisual")), t.registerProcessor("statistic", e("./map/mapDataStatistic")), t.registerPreprocessor(e("./map/backwardCompat")), e("../action/createDataSelectAction")("map", [{
            type: "mapToggleSelect",
            event: "mapselectchanged",
            method: "toggleSelected"
        }, {type: "mapSelect", event: "mapselected", method: "select"}, {
            type: "mapUnSelect",
            event: "mapunselected",
            method: "unSelect"
        }])
    }),t("echarts/data/helper/linkList", ["require", "zrender/core/util"], function (e) {
        function t(e, t, r) {
            return i.each(n, function (n, a) {
                var o = e[a];
                e[a] = i.curry(n, o, t, r)
            }), e[r] = t, t.data = e, e
        }

        var i = e("zrender/core/util"), r = Array.prototype.slice, n = {
            cloneShallow: function (e, i, n) {
                var a = e.apply(this, r.call(arguments, 3));
                return t(a, i, n)
            }, map: function (e, i, n) {
                var a = e.apply(this, r.call(arguments, 3));
                return t(a, i, n)
            }, filterSelf: function (e, t, i) {
                var n = e.apply(this, r.call(arguments, 3));
                return t.update(), n
            }
        };
        return {
            linkToGraph: function (e, i) {
                t(e, i, "graph")
            }, linkToTree: function (e, i) {
                t(e, i, "tree")
            }
        }
    }),t("echarts/data/Tree", ["require", "zrender/core/util", "../model/Model", "./List", "./helper/linkList", "./helper/completeDimensions"], function (e) {
        function t(e, t) {
            this.root, this.data, this._nodes = [], this.hostModel = e, this.levelModels = r.map(t || [], function (t) {
                return new n(t, e, e.ecModel)
            })
        }

        function i(e, t) {
            var i = t.children;
            e.parentNode !== t && (i.push(e), e.parentNode = t, t.hostTree._nodes.push(e))
        }

        var r = e("zrender/core/util"), n = e("../model/Model"), a = e("./List"), o = e("./helper/linkList"),
            s = e("./helper/completeDimensions"), l = function (e, t, i) {
                this.name = e || "", this.depth = 0, this.height = 0, this.parentNode = null, this.dataIndex = null == t ? -1 : t, this.children = [], this.viewChildren = [], this.hostTree = i
            };
        return l.prototype = {
            constructor: l, isRemoved: function () {
                return this.dataIndex < 0
            }, eachNode: function (e, t, i) {
                "function" == typeof e && (i = t, t = e, e = null), e = e || {}, r.isString(e) && (e = {order: e});
                var n, a = e.order || "preorder", o = this[e.attr || "children"];
                "preorder" === a && (n = t.call(i, this));
                for (var s = 0; !n && s < o.length; s++) o[s].eachNode(e, t, i);
                "postorder" === a && t.call(i, this)
            }, updateDepthAndHeight: function (e) {
                var t = 0;
                this.depth = e;
                for (var i = 0; i < this.children.length; i++) {
                    var r = this.children[i];
                    r.updateDepthAndHeight(e + 1), r.height > t && (t = r.height)
                }
                this.height = t + 1
            }, getNodeById: function (e) {
                if (this.getId() === e) return this;
                for (var t = 0, i = this.children, r = i.length; r > t; t++) {
                    var n = i[t].getNodeById(e);
                    if (n) return n
                }
            }, contains: function (e) {
                if (e === this) return !0;
                for (var t = 0, i = this.children, r = i.length; r > t; t++) {
                    var n = i[t].contains(e);
                    if (n) return n
                }
            }, getAncestors: function (e) {
                for (var t = [], i = e ? this : this.parentNode; i;) t.push(i), i = i.parentNode;
                return t.reverse(), t
            }, getValue: function (e) {
                var t = this.hostTree.data;
                return t.get(t.getDimension(e || "value"), this.dataIndex)
            }, setLayout: function (e, t) {
                this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, e, t)
            }, getLayout: function () {
                return this.hostTree.data.getItemLayout(this.dataIndex)
            }, getModel: function (e) {
                if (!(this.dataIndex < 0)) {
                    var t = this.hostTree, i = t.data.getItemModel(this.dataIndex), r = this.getLevelModel();
                    return i.getModel(e, (r || t.hostModel).getModel(e))
                }
            }, getLevelModel: function () {
                return (this.hostTree.levelModels || [])[this.depth]
            }, setVisual: function (e, t) {
                this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, e, t)
            }, getVisual: function (e, t) {
                return this.hostTree.data.getItemVisual(this.dataIndex, e, t)
            }, getRawIndex: function () {
                return this.hostTree.data.getRawIndex(this.dataIndex)
            }, getId: function () {
                return this.hostTree.data.getId(this.dataIndex)
            }
        }, t.prototype = {
            constructor: t, type: "tree", eachNode: function (e, t, i) {
                this.root.eachNode(e, t, i)
            }, getNodeByDataIndex: function (e) {
                var t = this.data.getRawIndex(e);
                return this._nodes[t]
            }, getNodeByName: function (e) {
                return this.root.getNodeByName(e)
            }, update: function () {
                for (var e = this.data, t = this._nodes, i = 0, r = t.length; r > i; i++) t[i].dataIndex = -1;
                for (var i = 0, r = e.count(); r > i; i++) t[e.getRawIndex(i)].dataIndex = i
            }
        }, t.createTree = function (e, r, n) {
            function c(e, t) {
                h.push(e);
                var r = new l(e.name, h.length - 1, u);
                t ? i(r, t) : u.root = r;
                var n = e.children;
                if (n) for (var a = 0; a < n.length; a++) c(n[a], r)
            }

            var u = new t(r, n), h = [];
            c(e), u.root.updateDepthAndHeight(0);
            var d = s([{name: "value"}], h), p = new a(d, r);
            return p.initData(h), o.linkToTree(p, u), u
        }, t
    }),t("echarts/chart/treemap/TreemapSeries", ["require", "../../model/Series", "../../data/Tree", "zrender/core/util", "../../model/Model", "../../util/format"], function (e) {
        function t(e, i) {
            var r = 0;
            a.each(e.children, function (e) {
                t(e, i);
                var n = e.value;
                a.isArray(n) && (n = n[0]), r += n
            });
            var n = e.value;
            i >= 0 && (a.isArray(n) ? n = n[0] : e.value = new Array(i)), (null == n || isNaN(n)) && (n = r), 0 > n && (n = 0), i >= 0 ? e.value[0] = n : e.value = n
        }

        function i(e, t) {
            var i = t.get("color");
            if (i) {
                e = e || [];
                var r;
                if (a.each(e, function (e) {
                    var t = new o(e), i = t.get("color");
                    (t.get("itemStyle.normal.color") || i && "none" !== i) && (r = !0)
                }), !r) {
                    var n = e[0] || (e[0] = {});
                    n.color = i.slice()
                }
                return e
            }
        }

        var r = e("../../model/Series"), n = e("../../data/Tree"), a = e("zrender/core/util"),
            o = e("../../model/Model"), s = e("../../util/format"), l = s.encodeHTML, c = s.addCommas;
        return r.extend({
            type: "series.treemap",
            dependencies: ["grid", "polar"],
            defaultOption: {
                left: "center",
                top: "middle",
                right: null,
                bottom: null,
                width: "80%",
                height: "80%",
                sort: !0,
                clipWindow: "origin",
                squareRatio: .5 * (1 + Math.sqrt(5)),
                root: null,
                visualDimension: 0,
                zoomToNodeRatio: .1024,
                roam: !0,
                animation: !0,
                animationDurationUpdate: 1500,
                animationEasing: "quinticInOut",
                breadcrumb: {
                    show: !0,
                    height: 22,
                    left: "center",
                    top: "bottom",
                    emptyItemWidth: 25,
                    itemStyle: {
                        normal: {
                            color: "rgba(0,0,0,0.7)",
                            borderColor: "rgba(255,255,255,0.7)",
                            borderWidth: 1,
                            shadowColor: "rgba(150,150,150,1)",
                            shadowBlur: 3,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            textStyle: {color: "#fff"}
                        }, emphasis: {textStyle: {}}
                    }
                },
                label: {
                    normal: {
                        show: !0,
                        position: ["50%", "50%"],
                        textStyle: {align: "center", baseline: "middle", color: "#fff", ellipsis: !0}
                    }
                },
                itemStyle: {
                    normal: {
                        color: null,
                        colorAlpha: null,
                        colorSaturation: null,
                        borderWidth: 0,
                        gapWidth: 0,
                        borderColor: "#fff",
                        borderColorSaturation: null
                    }, emphasis: {}
                },
                color: "none",
                colorAlpha: null,
                colorSaturation: null,
                colorMappingBy: "index",
                visibleMin: 10,
                childrenVisibleMin: null,
                levels: []
            },
            getInitialData: function (e, r) {
                var o = e.data || [], s = e.name;
                null == s && (s = e.name);
                var l = {name: s, children: e.data}, c = (o[0] || {}).value;
                t(l, a.isArray(c) ? c.length : -1);
                var u = e.levels || [];
                return u = e.levels = i(u, r), n.createTree(l, this, u).data
            },
            getViewRoot: function () {
                var e = this.option.root, t = this.getData().tree.root;
                return e && t.getNodeById(e) || t
            },
            formatTooltip: function (e) {
                var t = this.getData(), i = this.getRawValue(e), r = c(a.isArray(i) ? i[0] : i), n = t.getName(e);
                return l(n) + ": " + r
            },
            getDataParams: function (e) {
                for (var t = r.prototype.getDataParams.apply(this, arguments), i = this.getData(), n = i.tree.getNodeByDataIndex(e), a = t.treePathInfo = []; n;) {
                    var o = n.dataIndex;
                    a.push({name: n.name, dataIndex: o, value: this.getRawValue(o)}), n = n.parentNode
                }
                return a.reverse(), t
            },
            setLayoutInfo: function (e) {
                this.layoutInfo = this.layoutInfo || {}, a.extend(this.layoutInfo, e)
            },
            mapIdToIndex: function (e) {
                var t = this._idIndexMap;
                t || (t = this._idIndexMap = {}, this._idIndexMapCount = 0);
                var i = t[e];
                return null == i && (t[e] = i = this._idIndexMapCount++), i
            }
        })
    }),t("echarts/chart/treemap/helper", ["require"], function (e) {
        var t = {
            retrieveTargetInfo: function (e, t) {
                if (e && "treemapZoomToNode" === e.type) {
                    var i = t.getData().tree.root, r = e.targetNode;
                    if (r && i.contains(r)) return {node: r};
                    var n = e.targetNodeId;
                    return null != n && (r = i.getNodeById(n)) ? {node: r} : null
                }
            }
        };
        return t
    }),t("echarts/chart/treemap/Breadcrumb", ["require", "../../util/graphic", "../../util/layout", "zrender/core/util"], function (e) {
        function t(e, t) {
            this.group = new r.Group, e.add(this.group), this._onSelect = t || a.noop
        }

        function i(e, t, i, r, n, a) {
            var o = [[n ? e : e - l, t], [e + i, t], [e + i, t + r], [n ? e : e - l, t + r]];
            return !a && o.splice(2, 0, [e + i + l, t + r / 2]), !n && o.push([e, t + r / 2]), o
        }

        var r = e("../../util/graphic"), n = e("../../util/layout"), a = e("zrender/core/util"), o = 8, s = 8, l = 5;
        return t.prototype = {
            constructor: t, render: function (e, t, i) {
                var r = e.getModel("breadcrumb"), a = this.group;
                if (a.removeAll(), r.get("show") && i) {
                    var o = r.getModel("itemStyle.normal"), s = o.getModel("textStyle"), l = {
                        pos: {
                            left: r.get("left"),
                            right: r.get("right"),
                            top: r.get("top"),
                            bottom: r.get("bottom")
                        },
                        box: {width: t.getWidth(), height: t.getHeight()},
                        emptyItemWidth: r.get("emptyItemWidth"),
                        totalWidth: 0,
                        renderList: []
                    };
                    this._prepare(r, i, l, s), this._renderContent(r, i, l, o, s), n.positionGroup(a, l.pos, l.box)
                }
            }, _prepare: function (e, t, i, r) {
                for (var n = t; n; n = n.parentNode) {
                    var a = n.getModel().get("name"), l = r.getTextRect(a),
                        c = Math.max(l.width + 2 * o, i.emptyItemWidth);
                    i.totalWidth += c + s, i.renderList.push({node: n, text: a, width: c})
                }
            }, _renderContent: function (e, t, o, l, c) {
                for (var u = 0, h = o.emptyItemWidth, d = e.get("height"), p = n.getAvailableSize(o.pos, o.box), f = o.totalWidth, g = o.renderList, m = g.length - 1; m >= 0; m--) {
                    var v = g[m], y = v.width, x = v.text;
                    f > p.width && (f -= y - h, y = h, x = ""), this.group.add(new r.Polygon({
                        shape: {points: i(u, 0, y, d, m === g.length - 1, 0 === m)},
                        style: a.defaults(l.getItemStyle(), {
                            lineJoin: "bevel",
                            text: x,
                            textFill: c.getTextColor(),
                            textFont: c.getFont()
                        }),
                        onclick: a.bind(this._onSelect, this, v.node)
                    })), u += y + s
                }
            }, remove: function () {
                this.group.removeAll()
            }
        }, t
    }),t("echarts/util/animation", ["require", "zrender/core/util"], function (e) {
        function t() {
            var e, t = [], r = {};
            return {
                add: function (e, n, a, o, s) {
                    return i.isString(o) && (s = o, o = 0), r[e.id] ? !1 : (r[e.id] = 1, t.push({
                        el: e,
                        target: n,
                        time: a,
                        delay: o,
                        easing: s
                    }), !0)
                }, done: function (t) {
                    return e = t, this
                }, start: function () {
                    function i() {
                        n--, n || (t.length = 0, r = {}, e && e())
                    }

                    for (var n = t.length, a = 0, o = t.length; o > a; a++) {
                        var s = t[a];
                        s.el.animateTo(s.target, s.time, s.delay, s.easing, i)
                    }
                    return this
                }
            }
        }

        var i = e("zrender/core/util");
        return {createWrap: t}
    }),t("echarts/chart/treemap/TreemapView", ["require", "zrender/core/util", "../../util/graphic", "../../data/DataDiffer", "./helper", "./Breadcrumb", "../../component/helper/RoamController", "zrender/core/BoundingRect", "zrender/core/matrix", "../../util/animation", "../../echarts"], function (e) {
        function t() {
            return {nodeGroup: [], background: [], content: []}
        }

        var i = e("zrender/core/util"), r = e("../../util/graphic"), n = e("../../data/DataDiffer"), a = e("./helper"),
            o = e("./Breadcrumb"), s = e("../../component/helper/RoamController"), l = e("zrender/core/BoundingRect"),
            c = e("zrender/core/matrix"), u = e("../../util/animation"), h = i.bind, d = r.Group, p = r.Rect,
            f = i.each, g = 3;
        return e("../../echarts").extendChartView({
            type: "treemap", init: function (e, i) {
                this._containerGroup, this._storage = t(), this._oldTree, this._breadcrumb, this._controller, this._state = "ready", this._mayClick
            }, render: function (e, t, r, n) {
                var o = t.findComponents({mainType: "series", subType: "treemap", query: n});
                if (!(i.indexOf(o, e) < 0)) {
                    this.seriesModel = e, this.api = r, this.ecModel = t;
                    var s = n && n.type, l = e.layoutInfo, c = !this._oldTree, u = this._giveContainerGroup(l),
                        h = this._doRender(u, e);
                    c || s && "treemapZoomToNode" !== s ? h.renderFinally() : this._doAnimation(u, h, e), this._resetController(r);
                    var d = a.retrieveTargetInfo(n, e);
                    this._renderBreadcrumb(e, r, d)
                }
            }, _giveContainerGroup: function (e) {
                var t = this._containerGroup;
                return t || (t = this._containerGroup = new d, this._initEvents(t), this.group.add(t)), t.position = [e.x, e.y], t
            }, _doRender: function (e, r) {
                function a(e, t, r, o, s) {
                    function l(e) {
                        return e.getId()
                    }

                    function c(i, n) {
                        var l = null != i ? e[i] : null, c = null != n ? t[n] : null, u = s || l === x;
                        u || (l = null);
                        var h = y(l, c, r);
                        h && a(l && l.viewChildren || [], c && c.viewChildren || [], h, o, u)
                    }

                    o ? (t = e, f(e, function (e, t) {
                        !e.isRemoved() && c(t, t)
                    })) : new n(t, e, l, l).add(c).update(c).remove(i.curry(c, null)).execute()
                }

                function o(e) {
                    var i = t();
                    return e && f(e, function (e, t) {
                        var r = i[t];
                        f(e, function (e) {
                            e && (r.push(e), e.__tmWillDelete = t)
                        })
                    }), i
                }

                function s() {
                    f(v, function (e) {
                        f(e, function (e) {
                            e.parent && e.parent.remove(e)
                        })
                    }), f(g, function (e) {
                        e.invisible = !0
                    }), f(m, function (e) {
                        e.invisible = !1, e.__tmWillVisible = !1, e.dirty()
                    })
                }

                var l = r.getData().tree, c = this._oldTree, u = t(), d = t(), p = this._storage, g = [], m = [],
                    v = [], y = h(this._renderNode, this, d, p, u, g, m), x = r.getViewRoot();
                a(l.root ? [l.root] : [], c && c.root ? [c.root] : [], e, l === c || !c, x === l.root);
                var v = o(p);
                return this._oldTree = l, this._storage = d, {lastsForAnimation: u, willDeleteEls: v, renderFinally: s}
            }, _renderNode: function (e, t, r, n, a, o, s, l) {
                function c(i, n) {
                    var a = null != m && t[i][m], o = r[i];
                    return a ? (t[i][m] = null, u(o, a, i)) : _ || (a = new n, h(o, a, i)), e[i][g] = a
                }

                function u(e, t, r) {
                    var n = e[g] = {};
                    n.old = "nodeGroup" === r ? t.position.slice() : i.extend({}, t.shape)
                }

                function h(e, t, i) {
                    if ("background" === i) t.invisible = !0, t.__tmWillVisible = !0, a.push(t); else {
                        var n, s = o.parentNode, l = 0, c = 0;
                        s && (n = r.background[s.getRawIndex()]) && (l = n.old.width, c = n.old.height);
                        var u = e[g] = {};
                        u.old = "nodeGroup" === i ? [l, c] : {
                            x: l,
                            y: c,
                            width: 0,
                            height: 0
                        }, u.fadein = "nodeGroup" !== i
                    }
                }

                function f(e, t) {
                    _ ? !e.invisible && n.push(e) : (e.setStyle(t), e.__tmWillVisible || (e.invisible = !1))
                }

                var g = o && o.getRawIndex(), m = s && s.getRawIndex();
                if (o) {
                    var v = o.getLayout(), y = v.width, x = v.height, _ = v.invisible, b = c("nodeGroup", d);
                    if (b) {
                        l.add(b), b.position = [v.x, v.y], b.__tmNodeWidth = y, b.__tmNodeHeight = x;
                        var w = c("background", p);
                        w && (w.setShape({
                            x: 0,
                            y: 0,
                            width: y,
                            height: x
                        }), f(w, {fill: o.getVisual("borderColor", !0)}), b.add(w));
                        var M = o.viewChildren;
                        if (!M || !M.length) {
                            var S = v.borderWidth, A = c("content", p);
                            if (A) {
                                var z = Math.max(y - 2 * S, 0), C = Math.max(x - 2 * S, 0),
                                    L = o.getModel("label.normal"), I = o.getModel("label.normal.textStyle"),
                                    T = o.getModel().get("name"), D = I.getTextRect(T), P = L.get("show");
                                !P || D.height > C ? T = "" : D.width > z && (T = I.get("ellipsis") ? I.ellipsis(T, z) : ""), A.dataIndex = o.dataIndex, A.seriesIndex = this.seriesModel.seriesIndex, A.culling = !0, A.setShape({
                                    x: S,
                                    y: S,
                                    width: z,
                                    height: C
                                }), f(A, {
                                    fill: o.getVisual("color", !0),
                                    text: T,
                                    textPosition: L.get("position"),
                                    textFill: I.getTextColor(),
                                    textAlign: I.get("align"),
                                    textBaseline: I.get("baseline"),
                                    textFont: I.getFont()
                                }), b.add(A)
                            }
                        }
                        return b
                    }
                }
            }, _doAnimation: function (e, t, r) {
                if (r.get("animation")) {
                    var n = r.get("animationDurationUpdate"), a = r.get("animationEasing"), o = u.createWrap(),
                        s = this.seriesModel.getViewRoot(), l = this._storage.nodeGroup[s.getRawIndex()];
                    l && l.traverse(function (e) {
                        var t;
                        if (!e.invisible && (t = e.__tmWillDelete)) {
                            var i = 0, r = 0, s = e.parent;
                            s.__tmWillDelete || (i = s.__tmNodeWidth, r = s.__tmNodeHeight);
                            var l = "nodeGroup" === t ? {position: [i, r], style: {opacity: 0}} : {
                                shape: {
                                    x: i,
                                    y: r,
                                    width: 0,
                                    height: 0
                                }, style: {opacity: 0}
                            };
                            o.add(e, l, n, a)
                        }
                    }), f(this._storage, function (e, r) {
                        f(e, function (e, s) {
                            var l, c = t.lastsForAnimation[r][s];
                            c && ("nodeGroup" === r ? (l = {position: e.position.slice()}, e.position = c.old) : (l = {shape: i.extend({}, e.shape)}, e.setShape(c.old), c.fadein ? (e.setStyle("opacity", 0), l.style = {opacity: 1}) : 1 !== e.style.opacity && (l.style = {opacity: 1})), o.add(e, l, n, a))
                        })
                    }, this), this._state = "animating", o.done(h(function () {
                        this._state = "ready", t.renderFinally()
                    }, this)).start()
                }
            }, _resetController: function (e) {
                function t(e) {
                    return this._mayClick = !1, e.apply(this, Array.prototype.slice.call(arguments, 1))
                }

                var i = this._controller;
                return i || (i = this._controller = new s(e.getZr()), i.enable(), i.on("pan", h(t, this, this._onPan)), i.on("zoom", h(t, this, this._onZoom))), i.rect = new l(0, 0, e.getWidth(), e.getHeight()), this.seriesModel.get("roam") ? void 0 : (i.off("pan").off("zoom"), void(this._controller = null))
            }, _onPan: function (e, t) {
                if ("animating" !== this._state && (Math.abs(e) > g || Math.abs(t) > g)) {
                    var i = this.seriesModel.getViewRoot();
                    if (!i) return;
                    var r = i.getLayout();
                    if (!r) return;
                    this.api.dispatchAction({
                        type: "treemapMove",
                        from: this.uid,
                        seriesId: this.seriesModel.id,
                        rootRect: {x: r.x + e, y: r.y + t, width: r.width, height: r.height}
                    })
                }
            }, _onZoom: function (e, t, i) {
                if ("animating" !== this._state) {
                    var r = this.seriesModel.getViewRoot();
                    if (!r) return;
                    var n = r.getLayout();
                    if (!n) return;
                    var a = new l(n.x, n.y, n.width, n.height), o = this.seriesModel.layoutInfo;
                    t -= o.x, i -= o.y;
                    var s = c.create();
                    c.translate(s, s, [-t, -i]),
                        c.scale(s, s, [e, e]), c.translate(s, s, [t, i]), a.applyTransform(s), this.api.dispatchAction({
                        type: "treemapRender",
                        from: this.uid,
                        seriesId: this.seriesModel.id,
                        rootRect: {x: a.x, y: a.y, width: a.width, height: a.height}
                    })
                }
            }, _initEvents: function (e) {
                function t(e) {
                    var t = this.findTarget(e.offsetX, e.offsetY);
                    t && this._zoomToNode(t)
                }

                e.on("mousedown", function (e) {
                    "ready" === this._state && (this._mayClick = !0)
                }, this), e.on("mouseup", function (e) {
                    this._mayClick && (this._mayClick = !1, "ready" === this._state && t.call(this, e))
                }, this)
            }, _renderBreadcrumb: function (e, t, i) {
                function r(e) {
                    this._zoomToNode({node: e})
                }

                i || (i = this.findTarget(t.getWidth() / 2, t.getHeight() / 2), i || (i = {node: e.getData().tree.root})), (this._breadcrumb || (this._breadcrumb = new o(this.group, h(r, this)))).render(e, t, i.node)
            }, remove: function () {
                this._containerGroup && this._containerGroup.removeAll(), this._storage = t(), this._state = "ready", this._breadcrumb && this._breadcrumb.remove()
            }, _zoomToNode: function (e) {
                this.api.dispatchAction({
                    type: "treemapZoomToNode",
                    from: this.uid,
                    seriesId: this.seriesModel.id,
                    targetNode: e.node
                })
            }, findTarget: function (e, t) {
                var i, r = this.seriesModel.getViewRoot();
                return r.eachNode({attr: "viewChildren", order: "preorder"}, function (r) {
                    var n = this._storage.background[r.getRawIndex()];
                    if (n) {
                        var a = n.transformCoordToLocal(e, t), o = n.shape;
                        if (!(o.x <= a[0] && a[0] <= o.x + o.width && o.y <= a[1] && a[1] <= o.y + o.height)) return !1;
                        i = {node: r, offsetX: a[0], offsetY: a[1]}
                    }
                }, this), i
            }
        })
    }),t("echarts/chart/treemap/treemapAction", ["require", "../../echarts"], function (e) {
        var t = e("../../echarts"), i = function () {
        };
        t.registerAction({type: "treemapZoomToNode", update: "updateView"}, i), t.registerAction({
            type: "treemapRender",
            update: "updateView"
        }, i), t.registerAction({type: "treemapMove", update: "updateView"}, i)
    }),t("echarts/visual/VisualMapping", ["require", "zrender/core/util", "zrender/tool/color", "../util/number"], function (e) {
        function t(e) {
            var t = e.pieceList;
            e.hasSpecialVisual = !1, l.each(t, function (t, i) {
                t.originIndex = i, t.visual && (e.hasSpecialVisual = !0)
            })
        }

        function i(e) {
            var t = e.categories, i = e.visual, r = l.isArray(i);
            if (!t) {
                if (r) return;
                throw new Error
            }
            var n = e.categoryMap = {};
            if (h(t, function (e, t) {
                n[e] = t
            }), !r) {
                var a = [];
                l.isObject(i) ? h(i, function (e, t) {
                    var i = n[t];
                    a[null != i ? i : p] = e
                }) : a[p] = i, i = e.visual = a
            }
            for (var o = t.length - 1; o >= 0; o--) null == i[o] && (delete n[t[o]], t.pop())
        }

        function r(e) {
            return {
                applyVisual: function (t, i, r) {
                    var n = i("color"), a = l.isArray(t);
                    if (t = a ? [this.mapValueToVisual(t[0]), this.mapValueToVisual(t[1])] : this.mapValueToVisual(t), l.isArray(n)) for (var o = 0, s = n.length; s > o; o++) n[o].color = e(n[o].color, a ? t[o] : t); else r("color", e(n, t))
                }, mapValueToVisual: function (e) {
                    var t = this._normalizeData(e), i = this._getSpecifiedVisual(e), r = this.option.visual;
                    return null == i && (i = s(this) ? o(this, r, t) : u(t, [0, 1], r, !0)), i
                }
            }
        }

        function n(e, t) {
            return e[Math.round(u(t, [0, 1], [0, e.length - 1], !0))]
        }

        function a(e, t, i) {
            i("color", this.mapValueToVisual(e))
        }

        function o(e, t, i) {
            return t[e.option.loop && i !== p ? i % t.length : i]
        }

        function s(e) {
            return "category" === e.option.mappingMethod
        }

        var l = e("zrender/core/util"), c = e("zrender/tool/color"), u = e("../util/number").linearMap, h = l.each,
            d = l.isObject, p = -1, f = function (e) {
                var r = e.mappingMethod, n = e.type;
                this.type = n, this.mappingMethod = r;
                var a = this.option = l.clone(e);
                this._normalizeData = m[r], this._getSpecifiedVisual = l.bind(v[r], this, n), l.extend(this, g[n]), "piecewise" === r && t(a), "category" === r && i(a)
            };
        f.prototype = {
            constructor: f,
            applyVisual: null,
            isValueActive: null,
            mapValueToVisual: null,
            getNormalizer: function () {
                return l.bind(this._normalizeData, this)
            }
        };
        var g = f.visualHandlers = {
            color: {
                applyVisual: a, getColorMapper: function () {
                    var e = s(this) ? this.option.visual : l.map(this.option.visual, c.parse);
                    return l.bind(s(this) ? function (t, i) {
                        return !i && (t = this._normalizeData(t)), o(this, e, t)
                    } : function (t, i, r) {
                        var n = !!r;
                        return !i && (t = this._normalizeData(t)), r = c.fastMapToColor(t, e, r), n ? r : l.stringify(r, "rgba")
                    }, this)
                }, mapValueToVisual: function (e) {
                    var t = this.option.visual;
                    if (l.isArray(e)) return e = [this._normalizeData(e[0]), this._normalizeData(e[1])], c.mapIntervalToColor(e, t);
                    var i = this._normalizeData(e), r = this._getSpecifiedVisual(e);
                    return null == r && (r = s(this) ? o(this, t, i) : c.mapToColor(i, t)), r
                }
            }, colorHue: r(function (e, t) {
                return c.modifyHSL(e, t)
            }), colorSaturation: r(function (e, t) {
                return c.modifyHSL(e, null, t)
            }), colorLightness: r(function (e, t) {
                return c.modifyHSL(e, null, null, t)
            }), colorAlpha: r(function (e, t) {
                return c.modifyAlpha(e, t)
            }), symbol: {
                applyVisual: function (e, t, i) {
                    var r = this.mapValueToVisual(e);
                    if (l.isString(r)) i("symbol", r); else if (d(r)) for (var n in r) r.hasOwnProperty(n) && i(n, r[n])
                }, mapValueToVisual: function (e) {
                    var t = this._normalizeData(e), i = this._getSpecifiedVisual(e), r = this.option.visual;
                    return null == i && (i = s(this) ? o(this, r, t) : n(r, t) || {}), i
                }
            }, symbolSize: {
                applyVisual: function (e, t, i) {
                    i("symbolSize", this.mapValueToVisual(e))
                }, mapValueToVisual: function (e) {
                    var t = this._normalizeData(e), i = this._getSpecifiedVisual(e), r = this.option.visual;
                    return null == i && (i = s(this) ? o(this, r, t) : u(t, [0, 1], r, !0)), i
                }
            }
        }, m = {
            linear: function (e) {
                return u(e, this.option.dataExtent, [0, 1], !0)
            }, piecewise: function (e) {
                var t = this.option.pieceList, i = f.findPieceIndex(e, t);
                return null != i ? u(i, [0, t.length - 1], [0, 1], !0) : void 0
            }, category: function (e) {
                var t = this.option.categories ? this.option.categoryMap[e] : e;
                return null == t ? p : t
            }
        }, v = {
            linear: l.noop, piecewise: function (e, t) {
                var i = this.option, r = i.pieceList;
                if (i.hasSpecialVisual) {
                    var n = f.findPieceIndex(t, r), a = r[n];
                    if (a && a.visual) return a.visual[e]
                }
            }, category: l.noop
        };
        return f.addVisualHandler = function (e, t) {
            g[e] = t
        }, f.isValidType = function (e) {
            return g.hasOwnProperty(e)
        }, f.eachVisual = function (e, t, i) {
            l.isObject(e) ? l.each(e, t, i) : t.call(i, e)
        }, f.mapVisual = function (e, t, i) {
            var r, n = l.isArray(e) ? [] : l.isObject(e) ? {} : (r = !0, null);
            return f.eachVisual(e, function (e, a) {
                var o = t.call(i, e, a);
                r ? n = o : n[a] = o
            }), n
        }, f.isInVisualCluster = function (e, t) {
            return "color" === t ? !(!e || 0 !== e.indexOf(t)) : e === t
        }, f.retrieveVisuals = function (e) {
            var t, i = {};
            return e && h(g, function (r, n) {
                e.hasOwnProperty(n) && (i[n] = e[n], t = !0)
            }), t ? i : null
        }, f.prepareVisualTypes = function (e) {
            if (d(e)) {
                var t = [];
                h(e, function (e, i) {
                    t.push(i)
                }), e = t
            } else {
                if (!l.isArray(e)) return [];
                e = e.slice()
            }
            return e.sort(function (e, t) {
                return "color" === t && "color" !== e && 0 === e.indexOf("color") ? 1 : -1
            }), e
        }, f.findPieceIndex = function (e, t) {
            for (var i = 0, r = t.length; r > i; i++) {
                var n = t[i];
                if (null != n.value && n.value === e) return i
            }
            for (var i = 0, r = t.length; r > i; i++) {
                var n = t[i], a = n.interval;
                if (a) if (a[0] === -(1 / 0)) {
                    if (e < a[1]) return i
                } else if (a[1] === 1 / 0) {
                    if (a[0] < e) return i
                } else if (n.interval[0] <= e && e <= n.interval[1]) return i
            }
        }, f
    }),t("echarts/chart/treemap/treemapVisual", ["require", "../../visual/VisualMapping", "zrender/tool/color", "zrender/core/util"], function (e) {
        function t(e, a, s, c, u, d) {
            var f = e.getModel(), g = e.getLayout();
            if (!g.invisible) {
                var m, v = e.getModel(p), y = s[e.depth], x = i(v, a, y, c), _ = v.get("borderColor"),
                    b = v.get("borderColorSaturation");
                null != b && (m = r(x, e), _ = n(b, m)), e.setVisual("borderColor", _);
                var w = e.viewChildren;
                if (w && w.length) {
                    var M = o(e, f, g, v, x, w);
                    h.each(w, function (e, i) {
                        if (e.depth >= u.length || e === u[e.depth]) {
                            var r = l(f, x, e, i, M, d);
                            t(e, r, s, c, u, d)
                        }
                    })
                } else m = r(x, e), e.setVisual("color", m)
            }
        }

        function i(e, t, i, r) {
            var n = h.extend({}, t);
            return h.each(["color", "colorAlpha", "colorSaturation"], function (a) {
                var o = e.get(a, !0);
                null == o && i && (o = i[a]), null == o && (o = t[a]), null == o && (o = r.get(a)), null != o && (n[a] = o)
            }), n
        }

        function r(e) {
            var t = a(e, "color");
            if (t) {
                var i = a(e, "colorAlpha"), r = a(e, "colorSaturation");
                return r && (t = u.modifyHSL(t, null, null, r)), i && (t = u.modifyAlpha(t, i)), t
            }
        }

        function n(e, t) {
            return null != t ? u.modifyHSL(t, null, null, e) : null
        }

        function a(e, t) {
            var i = e[t];
            return null != i && "none" !== i ? i : void 0
        }

        function o(e, t, i, r, n, a) {
            if (a && a.length) {
                var o = s(t, "color") || null != n.color && "none" !== n.color && (s(t, "colorAlpha") || s(t, "colorSaturation"));
                if (o) {
                    var l = t.get("colorMappingBy"), u = {type: o.name, dataExtent: i.dataExtent, visual: o.range};
                    "color" !== u.type || "index" !== l && "id" !== l ? u.mappingMethod = "linear" : (u.mappingMethod = "category", u.loop = !0);
                    var h = new c(u);
                    return h.__drColorMappingBy = l, h
                }
            }
        }

        function s(e, t) {
            var i = e.get(t);
            return d(i) && i.length ? {name: t, range: i} : null
        }

        function l(e, t, i, r, n, a) {
            var o = h.extend({}, t);
            if (n) {
                var s = n.type, l = "color" === s && n.__drColorMappingBy,
                    c = "index" === l ? r : "id" === l ? a.mapIdToIndex(i.getId()) : i.getValue(e.get("visualDimension"));
                o[s] = n.mapValueToVisual(c)
            }
            return o
        }

        var c = e("../../visual/VisualMapping"), u = e("zrender/tool/color"), h = e("zrender/core/util"), d = h.isArray,
            p = "itemStyle.normal";
        return function (e, i) {
            var r = {mainType: "series", subType: "treemap", query: i};
            e.eachComponent(r, function (e) {
                var i = e.getData().tree, r = i.root, n = e.getModel(p);
                if (!r.isRemoved()) {
                    var a = h.map(i.levelModels, function (e) {
                        return e ? e.get(p) : null
                    });
                    t(r, {}, a, n, e.getViewRoot().getAncestors(), e)
                }
            })
        }
    }),t("echarts/chart/treemap/treemapLayout", ["require", "zrender/core/util", "../../util/number", "../../util/layout", "zrender/core/BoundingRect", "./helper"], function (e) {
        function t(e, t, r) {
            var n = {mainType: "series", subType: "treemap", query: r};
            e.eachComponent(n, function (e) {
                var n = t.getWidth(), a = t.getHeight(), o = e.get("size") || [], s = v(y(e.get("width"), o[0]), n),
                    l = v(y(e.get("height"), o[1]), a),
                    d = m.getLayoutRect(e.getBoxLayoutParams(), {width: t.getWidth(), height: t.getHeight()}),
                    p = r && r.type, f = _.retrieveTargetInfo(r, e),
                    g = "treemapRender" === p || "treemapMove" === p ? r.rootRect : null, b = e.getViewRoot();
                if ("treemapMove" !== p) {
                    var w = "treemapZoomToNode" === p ? c(e, f, s, l) : g ? [g.width, g.height] : [s, l],
                        M = e.get("sort");
                    M && "asc" !== M && "desc" !== M && (M = "desc");
                    var S = {squareRatio: e.get("squareRatio"), sort: M};
                    b.setLayout({x: 0, y: 0, width: w[0], height: w[1], area: w[0] * w[1]}), i(b, S)
                }
                b.setLayout(u(d, g, f), !0), e.setLayoutInfo(d), h(b, new x(-d.x, -d.y, n, a))
            })
        }

        function i(e, t) {
            var n, a;
            if (!e.isRemoved()) {
                var o = e.getLayout();
                n = o.width, a = o.height;
                var c = e.getModel("itemStyle.normal"), u = c.get("borderWidth"), h = c.get("gapWidth") / 2, g = u - h,
                    m = e.getModel();
                e.setLayout({borderWidth: u}, !0), n = d(n - 2 * g, 0), a = d(a - 2 * g, 0);
                var v = n * a, y = r(e, m, v, t);
                if (y.length) {
                    var x = {x: g, y: g, width: n, height: a}, _ = p(n, a), b = 1 / 0, w = [];
                    w.area = 0;
                    for (var M = 0, S = y.length; S > M;) {
                        var A = y[M];
                        w.push(A), w.area += A.getLayout().area;
                        var z = s(w, _, t.squareRatio);
                        b >= z ? (M++, b = z) : (w.area -= w.pop().getLayout().area, l(w, _, x, h, !1), _ = p(x.width, x.height), w.length = w.area = 0, b = 1 / 0)
                    }
                    w.length && l(w, _, x, h, !0);
                    var C;
                    if (!t.hideChildren) {
                        var L = m.get("childrenVisibleMin");
                        null != L && L > v && (C = !0)
                    }
                    for (var M = 0, S = y.length; S > M; M++) {
                        var I = f.extend({hideChildren: C}, t);
                        i(y[M], I)
                    }
                }
            }
        }

        function r(e, t, i, r) {
            var s = e.children || [], l = r.sort;
            if ("asc" !== l && "desc" !== l && (l = null), r.hideChildren) return e.viewChildren = [];
            s = f.filter(s, function (e) {
                return !e.isRemoved()
            }), a(s, l);
            var c = o(t, s, l);
            if (0 === c.sum) return e.viewChildren = [];
            if (c.sum = n(t, i, c.sum, l, s), 0 === c.sum) return e.viewChildren = [];
            for (var u = 0, h = s.length; h > u; u++) {
                var d = s[u].getValue() / c.sum * i;
                s[u].setLayout({area: d})
            }
            return e.viewChildren = s, e.setLayout({dataExtent: c.dataExtent}, !0), s
        }

        function n(e, t, i, r, n) {
            if (!r) return i;
            for (var a = e.get("visibleMin"), o = n.length, s = o, l = o - 1; l >= 0; l--) {
                var c = n["asc" === r ? o - l - 1 : l].getValue();
                a > c / i * t && (s = l, i -= c)
            }
            return "asc" === r ? n.splice(0, o - s) : n.splice(s, o - s), i
        }

        function a(e, t) {
            return t && e.sort(function (e, i) {
                return "asc" === t ? e.getValue() - i.getValue() : i.getValue() - e.getValue()
            }), e
        }

        function o(e, t, i) {
            for (var r = 0, n = 0, a = t.length; a > n; n++) r += t[n].getValue();
            var o, s = e.get("visualDimension");
            if (t && t.length) if ("value" === s && i) o = [t[t.length - 1].getValue(), t[0].getValue()], "asc" === i && o.reverse(); else {
                var o = [1 / 0, -(1 / 0)];
                f.each(t, function (e) {
                    var t = e.getValue(s);
                    t < o[0] && (o[0] = t), t > o[1] && (o[1] = t)
                })
            } else o = [NaN, NaN];
            return {sum: r, dataExtent: o}
        }

        function s(e, t, i) {
            for (var r, n = 0, a = 1 / 0, o = 0, s = e.length; s > o; o++) r = e[o].getLayout().area, r && (a > r && (a = r), r > n && (n = r));
            var l = e.area * e.area, c = t * t * i;
            return l ? d(c * n / l, l / (c * a)) : 1 / 0
        }

        function l(e, t, i, r, n) {
            var a = t === i.width ? 0 : 1, o = 1 - a, s = ["x", "y"], l = ["width", "height"], c = i[s[a]],
                u = t ? e.area / t : 0;
            (n || u > i[l[o]]) && (u = i[l[o]]);
            for (var h = 0, f = e.length; f > h; h++) {
                var g = e[h], m = {}, v = u ? g.getLayout().area / u : 0, y = m[l[o]] = d(u - 2 * r, 0),
                    x = i[s[a]] + i[l[a]] - c, _ = h === f - 1 || v > x ? x : v, b = m[l[a]] = d(_ - 2 * r, 0);
                m[s[o]] = i[s[o]] + p(r, y / 2), m[s[a]] = c + p(r, b / 2), c += _, g.setLayout(m, !0)
            }
            i[s[o]] += u, i[l[o]] -= u
        }

        function c(e, t, i, r) {
            var n = (t || {}).node, a = [i, r];
            if (!n || n === e.getViewRoot()) return a;
            for (var o, s = i * r, l = s * e.get("zoomToNodeRatio"); o = n.parentNode;) {
                for (var c = 0, u = o.children, h = 0, d = u.length; d > h; h++) c += u[h].getValue();
                var p = n.getValue();
                if (0 === p) return a;
                l *= c / p;
                var f = o.getModel("itemStyle.normal").get("borderWidth");
                isFinite(f) && (l += 4 * f * f + 4 * f * Math.pow(l, .5)), l > g.MAX_SAFE_INTEGER && (l = g.MAX_SAFE_INTEGER), n = o
            }
            s > l && (l = s);
            var m = Math.pow(l / s, .5);
            return [i * m, r * m]
        }

        function u(e, t, i) {
            if (t) return {x: t.x, y: t.y};
            var r = {x: 0, y: 0};
            if (!i) return r;
            var n = i.node, a = n.getLayout();
            if (!a) return r;
            for (var o = [a.width / 2, a.height / 2], s = n; s;) {
                var l = s.getLayout();
                o[0] += l.x, o[1] += l.y, s = s.parentNode
            }
            return {x: e.width / 2 - o[0], y: e.height / 2 - o[1]}
        }

        function h(e, t) {
            var i = e.getLayout();
            e.setLayout({invisible: !t.intersect(i)}, !0);
            for (var r = e.viewChildren || [], n = 0, a = r.length; a > n; n++) {
                var o = new x(t.x - i.x, t.y - i.y, t.width, t.height);
                h(r[n], o)
            }
        }

        var d = Math.max, p = Math.min, f = e("zrender/core/util"), g = e("../../util/number"),
            m = e("../../util/layout"), v = g.parsePercent, y = f.retrieve, x = e("zrender/core/BoundingRect"),
            _ = e("./helper");
        return t
    }),t("echarts/chart/treemap", ["require", "../echarts", "./treemap/TreemapSeries", "./treemap/TreemapView", "./treemap/treemapAction", "./treemap/treemapVisual", "./treemap/treemapLayout"], function (e) {
        var t = e("../echarts");
        e("./treemap/TreemapSeries"), e("./treemap/TreemapView"), e("./treemap/treemapAction"), t.registerVisualCoding("chart", e("./treemap/treemapVisual")), t.registerLayout(e("./treemap/treemapLayout"))
    }),t("echarts/data/Graph", ["require", "zrender/core/util"], function (e) {
        function t(e, t) {
            this.id = null == e ? "" : e, this.inEdges = [], this.outEdges = [], this.edges = [], this.hostGraph, this.dataIndex = null == t ? -1 : t
        }

        function i(e, t, i) {
            this.node1 = e, this.node2 = t, this.dataIndex = null == i ? -1 : i
        }

        var r = e("zrender/core/util"), n = function (e) {
            this._directed = e || !1, this.nodes = [], this.edges = [], this._nodesMap = {}, this._edgesMap = {}, this.data, this.edgeData
        }, a = n.prototype;
        a.type = "graph", a.isDirected = function () {
            return this._directed
        }, a.addNode = function (e, i) {
            var r = this._nodesMap;
            if (!r[e]) {
                var n = new t(e, i);
                return n.hostGraph = this, this.nodes.push(n), r[e] = n, n
            }
        }, a.getNodeByIndex = function (e) {
            var t = this.data.getRawIndex(e);
            return this.nodes[t]
        }, a.getNodeById = function (e) {
            return this._nodesMap[e]
        }, a.addEdge = function (e, r, n) {
            var a = this._nodesMap, o = this._edgesMap;
            if (e instanceof t || (e = a[e]), r instanceof t || (r = a[r]), e && r) {
                var s = e.id + "-" + r.id;
                if (!o[s]) {
                    var l = new i(e, r, n);
                    return l.hostGraph = this, this._directed && (e.outEdges.push(l), r.inEdges.push(l)), e.edges.push(l), e !== r && r.edges.push(l), this.edges.push(l), o[s] = l, l
                }
            }
        }, a.getEdgeByIndex = function (e) {
            var t = this.edgeData.getRawIndex(e);
            return this.edges[t]
        }, a.getEdge = function (e, i) {
            e instanceof t && (e = e.id), i instanceof t && (i = i.id);
            var r = this._edgesMap;
            return this._directed ? r[e + "-" + i] : r[e + "-" + i] || r[i + "-" + e]
        }, a.eachNode = function (e, t) {
            for (var i = this.nodes, r = i.length, n = 0; r > n; n++) i[n].dataIndex >= 0 && e.call(t, i[n], n)
        }, a.eachEdge = function (e, t) {
            for (var i = this.edges, r = i.length, n = 0; r > n; n++) i[n].dataIndex >= 0 && i[n].node1.dataIndex >= 0 && i[n].node2.dataIndex >= 0 && e.call(t, i[n], n)
        }, a.breadthFirstTraverse = function (e, i, r, n) {
            if (!i instanceof t && (i = this._nodesMap[i]), i) {
                for (var a = "out" === r ? "outEdges" : "in" === r ? "inEdges" : "edges", o = 0; o < this.nodes.length; o++) this.nodes[o].__visited = !1;
                if (!e.call(n, i, null)) for (var s = [i]; s.length;) for (var l = s.shift(), c = l[a], o = 0; o < c.length; o++) {
                    var u = c[o], h = u.node1 === l ? u.node2 : u.node1;
                    if (!h.__visited) {
                        if (e.call(h, h, l)) return;
                        s.push(h), h.__visited = !0
                    }
                }
            }
        }, a.update = function () {
            for (var e = this.data, t = this.edgeData, i = this.nodes, r = this.edges, n = 0, a = i.length; a > n; n++) i[n].dataIndex = -1;
            for (var n = 0, a = e.count(); a > n; n++) i[e.getRawIndex(n)].dataIndex = n;
            t.filterSelf(function (e) {
                var i = r[t.getRawIndex(e)];
                return i.node1.dataIndex >= 0 && i.node2.dataIndex >= 0
            });
            for (var n = 0, a = r.length; a > n; n++) r[n].dataIndex = -1;
            for (var n = 0, a = t.count(); a > n; n++) r[t.getRawIndex(n)].dataIndex = n
        }, a.setEdgeData = function (e) {
            this.edgeData = e, this._edgeDataSaved = e.cloneShallow()
        }, a.restoreData = function () {
            this.edgeData = this._edgeDataSaved.cloneShallow()
        }, a.clone = function () {
            for (var e = new n(this._directed), t = this.nodes, i = this.edges, r = 0; r < t.length; r++) e.addNode(t[r].id, t[r].dataIndex);
            for (var r = 0; r < i.length; r++) {
                var a = i[r];
                e.addEdge(a.node1.id, a.node2.id, a.dataIndex)
            }
            return e
        }, t.prototype = {
            constructor: t, degree: function () {
                return this.edges.length
            }, inDegree: function () {
                return this.inEdges.length
            }, outDegree: function () {
                return this.outEdges.length
            }, getModel: function (e) {
                if (!(this.dataIndex < 0)) {
                    var t = this.hostGraph, i = t.data.getItemModel(this.dataIndex);
                    return i.getModel(e)
                }
            }
        }, i.prototype.getModel = function (e) {
            if (!(this.dataIndex < 0)) {
                var t = this.hostGraph, i = t.data.getItemModel(this.dataIndex);
                return i.getModel(e)
            }
        };
        var o = function (e, t) {
            return {
                getValue: function (i) {
                    var r = this[e][t];
                    return r.get(r.getDimension(i || "value"), this.dataIndex)
                }, setVisual: function (i, r) {
                    this.dataIndex >= 0 && this[e][t].setItemVisual(this.dataIndex, i, r)
                }, getVisual: function (i, r) {
                    return this[e][t].getItemVisual(this.dataIndex, i, r)
                }, setLayout: function (i, r) {
                    this.dataIndex >= 0 && this[e][t].setItemLayout(this.dataIndex, i, r)
                }, getLayout: function () {
                    return this[e][t].getItemLayout(this.dataIndex)
                }, getGraphicEl: function () {
                    return this[e][t].getItemGraphicEl(this.dataIndex)
                }, getRawIndex: function () {
                    return this[e][t].getRawIndex(this.dataIndex)
                }
            }
        };
        return r.mixin(t, o("hostGraph", "data")), r.mixin(i, o("hostGraph", "edgeData")), n.Node = t, n.Edge = i, n
    }),t("echarts/chart/helper/createGraphFromNodeEdge", ["require", "../../data/List", "../../data/Graph", "../../data/helper/linkList", "../../data/helper/completeDimensions", "zrender/core/util"], function (e) {
        var t = e("../../data/List"), i = e("../../data/Graph"), r = e("../../data/helper/linkList"),
            n = e("../../data/helper/completeDimensions"), a = e("zrender/core/util");
        return function (e, o, s, l) {
            for (var c = new i(l), u = 0; u < e.length; u++) c.addNode(a.retrieve(e[u].id, e[u].name, u), u);
            for (var h = [], d = [], u = 0; u < o.length; u++) {
                var p = o[u];
                c.addEdge(p.source, p.target, u) && (d.push(p), h.push(a.retrieve(p.id, p.source + " - " + p.target)))
            }
            var f = n(["value"], e), g = new t(f, s), m = new t(["value"], s);
            return g.initData(e), m.initData(d, h), c.setEdgeData(m), r.linkToGraph(g, c), c.update(), c
        }
    }),t("echarts/chart/graph/GraphSeries", ["require", "../../data/List", "zrender/core/util", "../helper/createGraphFromNodeEdge", "../../echarts"], function (e) {
        var t = e("../../data/List"), i = e("zrender/core/util"), r = e("../helper/createGraphFromNodeEdge");
        return e("../../echarts").extendSeriesModel({
            type: "series.graph",
            init: function (e) {
                this.$superApply("init", arguments), this.legendDataProvider = function () {
                    return this._categoriesData
                }, this._updateCategoriesData()
            },
            mergeOption: function (e) {
                this.$superApply("mergeOption", arguments), this._updateCategoriesData()
            },
            getInitialData: function (e, t) {
                var i = e.edges || e.links, n = e.data || e.nodes;
                if (n && i) {
                    var a = r(n, i, this, !0), o = a.data, s = this;
                    return o.wrapMethod("getItemModel", function (e) {
                        var t = s._categoriesModels, i = e.getShallow("category"), r = t[i];
                        return r && (r.parentModel = e.parentModel, e.parentModel = r), e
                    }), o
                }
            },
            restoreData: function () {
                this.$superApply("restoreData", arguments), this.getGraph().restoreData()
            },
            getGraph: function () {
                return this.getData().graph
            },
            getEdgeData: function () {
                return this.getGraph().edgeData
            },
            getCategoriesData: function () {
                return this._categoriesData
            },
            _updateCategoriesData: function () {
                var e = i.map(this.option.categories || [], function (e) {
                    return null != e.value ? e : i.extend({value: 0}, e)
                }), r = new t(["value"], this);
                r.initData(e), this._categoriesData = r, this._categoriesModels = r.mapArray(function (e) {
                    return r.getItemModel(e, !0)
                })
            },
            setRoamZoom: function (e) {
                var t = this.option.roamDetail;
                t && (t.zoom = e)
            },
            setRoamPan: function (e, t) {
                var i = this.option.roamDetail;
                i && (i.x = e, i.y = t)
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                color: ["#61a0a8", "#d14a61", "#fd9c35", "#675bba", "#fec42c", "#dd4444", "#fd9c35", "#cd4870"],
                coordinateSystem: "view",
                legendHoverLink: !0,
                hoverAnimation: !0,
                layout: null,
                force: {initLayout: null, repulsion: 50, gravity: .1, edgeLength: 30, layoutAnimation: !0},
                left: "center",
                top: "center",
                symbol: "circle",
                symbolSize: 10,
                draggable: !1,
                roam: !1,
                roamDetail: {x: 0, y: 0, zoom: 1},
                nodeScaleRatio: .6,
                label: {normal: {show: !1}, emphasis: {show: !0}},
                itemStyle: {normal: {}, emphasis: {}},
                lineStyle: {normal: {color: "#aaa", width: 1, curveness: 0, opacity: .5}, emphasis: {}}
            }
        })
    }),t("echarts/chart/helper/LinePath", ["require", "../../util/graphic"], function (e) {
        var t = e("../../util/graphic"), i = t.Line.prototype, r = t.BezierCurve.prototype;
        return t.extendShape({
            type: "ec-line",
            style: {stroke: "#000", fill: null},
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1, cpx1: null, cpy1: null},
            buildPath: function (e, t) {
                (null == t.cpx1 || null == t.cpy1 ? i : r).buildPath(e, t)
            },
            pointAt: function (e) {
                var t = this.shape;
                return null == t.cpx1 || null == t.cpy1 ? i.pointAt.call(this, e) : r.pointAt.call(this, e)
            }
        })
    }),t("echarts/chart/helper/Line", ["require", "../../util/symbol", "zrender/core/vector", "./LinePath", "../../util/graphic", "zrender/core/util", "../../util/number"], function (e) {
        function t(e, t, i) {
            var r = t.getItemVisual(i, "color"), n = t.getItemVisual(i, "symbol"), a = t.getItemVisual(i, "symbolSize");
            if ("none" !== n) {
                d.isArray(a) || (a = [a, a]);
                var o = l.createSymbol(n, -a[0] / 2, -a[1] / 2, a[0], a[1], r);
                return o.name = e, o
            }
        }

        function i(e) {
            var t = new u({name: "line", style: {strokeNoScale: !0}});
            return r(t.shape, e), t
        }

        function r(e, t) {
            var i = t[0], r = t[1], n = t[2];
            e.x1 = i[0], e.y1 = i[1], e.x2 = r[0], e.y2 = r[1], e.percent = 1, n && (e.cpx1 = n[0], e.cpy1 = n[1])
        }

        function n(e) {
            return "symbol" === e.type && "arrow" === e.shape.symbolType
        }

        function a() {
            var e = this, t = e.childOfName("line");
            if (this.__dirty || t.__dirty) {
                var i = e.childOfName("fromSymbol"), r = e.childOfName("toSymbol"), a = e.childOfName("label"),
                    s = t.pointAt(0), l = t.pointAt(t.shape.percent), u = c.sub([], l, s);
                c.normalize(u, u), i && (i.attr("position", s), n(r) && r.attr("rotation", o(s, l))), r && (r.attr("position", l), n(i) && i.attr("rotation", o(l, s))), a.attr("position", l);
                var h, d, p;
                "end" === a.__position ? (h = [5 * u[0] + l[0], 5 * u[1] + l[1]], d = u[0] > .8 ? "left" : u[0] < -.8 ? "right" : "center", p = u[1] > .8 ? "top" : u[1] < -.8 ? "bottom" : "middle") : (h = [5 * -u[0] + s[0], 5 * -u[1] + s[1]], d = u[0] > .8 ? "right" : u[0] < -.8 ? "left" : "center", p = u[1] > .8 ? "bottom" : u[1] < -.8 ? "top" : "middle"), a.attr({
                    style: {
                        textBaseline: a.__textBaseline || p,
                        textAlign: a.__textAlign || d
                    }, position: h
                })
            }
        }

        function o(e, t) {
            return -Math.PI / 2 - Math.atan2(t[1] - e[1], t[0] - e[0])
        }

        function s(e, t, i, r) {
            h.Group.call(this), this._createLine(e, t, i, r)
        }

        var l = e("../../util/symbol"), c = e("zrender/core/vector"), u = e("./LinePath"), h = e("../../util/graphic"),
            d = e("zrender/core/util"), p = e("../../util/number"), f = s.prototype;
        return f.beforeUpdate = a, f._createLine = function (e, r, n, a) {
            var o = e.hostModel, s = e.getItemLayout(a), l = i(s);
            l.shape.percent = 0, h.initProps(l, {shape: {percent: 1}}, o), this.add(l);
            var c = new h.Text({name: "label"});
            if (this.add(c), r) {
                var u = t("fromSymbol", r, a);
                this.add(u), this._fromSymbolType = r.getItemVisual(a, "symbol")
            }
            if (n) {
                var d = t("toSymbol", n, a);
                this.add(d), this._toSymbolType = n.getItemVisual(a, "symbol")
            }
            this._updateCommonStl(e, r, n, a)
        }, f.updateData = function (e, i, n, a) {
            var o = e.hostModel, s = this.childOfName("line"), l = e.getItemLayout(a), c = {shape: {}};
            if (r(c.shape, l), h.updateProps(s, c, o), i) {
                var u = i.getItemVisual(a, "symbol");
                if (this._fromSymbolType !== u) {
                    var d = t("fromSymbol", i, a);
                    this.remove(s.childOfName("fromSymbol")), this.add(d)
                }
                this._fromSymbolType = u
            }
            if (n) {
                var p = n.getItemVisual(a, "symbol");
                if (p !== this._toSymbolType) {
                    var f = t("toSymbol", n, a);
                    this.remove(s.childOfName("toSymbol")), this.add(f)
                }
                this._toSymbolType = p
            }
            this._updateCommonStl(e, i, n, a)
        }, f._updateCommonStl = function (e, t, i, r) {
            var n = e.hostModel, a = this.childOfName("line"), o = e.getItemModel(r), s = o.getModel("label.normal"),
                l = s.getModel("textStyle"), c = o.getModel("label.emphasis"), u = c.getModel("textStyle"),
                f = p.round(n.getRawValue(r));
            isNaN(f) && (f = e.getName(r)), a.setStyle(d.extend({stroke: e.getItemVisual(r, "color")}, o.getModel("lineStyle.normal").getLineStyle()));
            var g = this.childOfName("label");
            g.setStyle({
                text: s.get("show") ? n.getFormattedLabel(r, "normal") || f : "",
                textFont: l.getFont(),
                fill: l.getTextColor() || e.getItemVisual(r, "color")
            }), g.hoverStyle = {
                text: c.get("show") ? n.getFormattedLabel(r, "emphasis") || f : "",
                textFont: l.getFont(),
                fill: u.getTextColor()
            }, g.__textAlign = l.get("align"), g.__textBaseline = l.get("baseline"), g.__position = s.get("position"), h.setHoverStyle(this, o.getModel("lineStyle.emphasis").getLineStyle())
        }, f.updateLayout = function (e, t, i, n) {
            var a = e.getItemLayout(n), o = this.childOfName("line");
            r(o.shape, a), o.dirty(!0), t && t.getItemGraphicEl(n).attr("position", a[0]), i && i.getItemGraphicEl(n).attr("position", a[1])
        }, d.inherits(s, h.Group), s
    }),t("echarts/chart/helper/LineDraw", ["require", "../../util/graphic", "./Line"], function (e) {
        function t(e) {
            this._ctor = e || r, this.group = new i.Group
        }

        var i = e("../../util/graphic"), r = e("./Line"), n = t.prototype;
        return n.updateData = function (e, t, i) {
            var r = this._lineData, n = this.group, a = this._ctor;
            e.diff(r).add(function (r) {
                var o = new a(e, t, i, r);
                e.setItemGraphicEl(r, o), n.add(o)
            }).update(function (a, o) {
                var s = r.getItemGraphicEl(o);
                s.updateData(e, t, i, a), e.setItemGraphicEl(a, s), n.add(s)
            }).remove(function (e) {
                n.remove(r.getItemGraphicEl(e))
            }).execute(), this._lineData = e, this._fromData = t, this._toData = i
        }, n.updateLayout = function () {
            var e = this._lineData;
            e.eachItemGraphicEl(function (t, i) {
                t.updateLayout(e, this._fromData, this._toData, i)
            }, this)
        }, n.remove = function () {
            this.group.removeAll()
        }, t
    }),t("echarts/chart/graph/GraphView", ["require", "../helper/SymbolDraw", "../helper/LineDraw", "../../component/helper/RoamController", "../../util/model", "../../util/graphic", "../../echarts"], function (e) {
        var t = e("../helper/SymbolDraw"), i = e("../helper/LineDraw"), r = e("../../component/helper/RoamController"),
            n = e("../../util/model"), a = e("../../util/graphic");
        e("../../echarts").extendChartView({
            type: "graph", init: function (e, n) {
                var a = new t, o = new i, s = this.group, l = new r(n.getZr(), s);
                s.add(a.group), s.add(o.group), this._symbolDraw = a, this._lineDraw = o, this._controller = l, this._firstRender = !0
            }, render: function (e, t, i) {
                var r = e.coordinateSystem;
                if ("geo" === r.type || "view" === r.type) {
                    var o = e.getData();
                    this._model = e;
                    var s = this._symbolDraw, l = this._lineDraw;
                    s.updateData(o);
                    var c = o.graph.edgeData, u = e.option, h = n.createDataFormatModel(e, c, u.edges || u.links);
                    h.formatTooltip = function (e) {
                        var t = this.getDataParams(e), i = t.data, r = i.source + " > " + i.target;
                        return t.value && (r += ":" + t.value), r
                    }, l.updateData(c, null, null), c.eachItemGraphicEl(function (e) {
                        e.traverse(function (e) {
                            e.hostModel = h
                        })
                    }), o.graph.eachEdge(function (e) {
                        e.__lineWidth = e.getModel("lineStyle.normal").get("width")
                    });
                    var d = this.group, p = {position: r.position, scale: r.scale};
                    this._firstRender ? d.attr(p) : a.updateProps(d, p, e), this._nodeScaleRatio = e.get("nodeScaleRatio"), this._updateNodeAndLinkScale(), this._updateController(e, r, i), clearTimeout(this._layoutTimeout);
                    var f = e.forceLayout, g = e.get("force.layoutAnimation");
                    f && this._startForceLayoutIteration(f, g), o.eachItemGraphicEl(function (e, t) {
                        var i = o.getItemModel(t).get("draggable");
                        i && f ? e.on("drag", function () {
                            f.warmUp(), !this._layouting && this._startForceLayoutIteration(f, g), f.setFixed(t), o.setItemLayout(t, e.position)
                        }, this).on("dragend", function () {
                            f.setUnfixed(t)
                        }, this) : e.off("drag"), e.setDraggable(i)
                    }, this), this._firstRender = !1
                }
            }, _startForceLayoutIteration: function (e, t) {
                var i = this;
                !function r() {
                    e.step(function (e) {
                        i.updateLayout(), (i._layouting = !e) && (t ? i._layoutTimeout = setTimeout(r, 16) : r())
                    })
                }()
            }, _updateController: function (e, t, i) {
                var r = this._controller;
                r.rect = t.getViewRect(), r.enable(e.get("roam")), r.off("pan").off("zoom").on("pan", function (t, r) {
                    i.dispatchAction({seriesId: e.id, type: "graphRoam", dx: t, dy: r})
                }).on("zoom", function (t, r, n) {
                    i.dispatchAction({seriesId: e.id, type: "graphRoam", zoom: t, originX: r, originY: n})
                }).on("zoom", this._updateNodeAndLinkScale, this)
            }, _updateNodeAndLinkScale: function () {
                var e = this._model, t = e.getData(), i = this.group, r = this._nodeScaleRatio, n = i.scale[0],
                    a = (n - 1) * r + 1, o = [a / n, a / n];
                t.eachItemGraphicEl(function (e, t) {
                    e.attr("scale", o)
                })
            }, updateLayout: function (e, t) {
                this._symbolDraw.updateLayout(), this._lineDraw.updateLayout()
            }, remove: function (e, t) {
                this._symbolDraw && this._symbolDraw.remove(), this._lineDraw && this._lineDraw.remove()
            }
        })
    }),t("echarts/chart/graph/roamAction", ["require", "../../echarts", "../../action/roamHelper"], function (e) {
        var t = e("../../echarts"), i = e("../../action/roamHelper"),
            r = {type: "graphRoam", event: "graphRoam", update: "none"};
        t.registerAction(r, function (e, t) {
            t.eachComponent({mainType: "series", query: e}, function (t) {
                var r = t.coordinateSystem, n = t.getModel("roamDetail"), a = i.calcPanAndZoom(n, e);
                t.setRoamPan && t.setRoamPan(a.x, a.y), t.setRoamZoom && t.setRoamZoom(a.zoom), r && r.setPan(a.x, a.y), r && r.setZoom(a.zoom)
            })
        })
    }),t("echarts/chart/graph/categoryFilter", ["require"], function (e) {
        return function (e) {
            var t = e.findComponents({mainType: "legend"});
            t && t.length && e.eachSeriesByType("graph", function (e) {
                var i = e.getCategoriesData(), r = e.getGraph(), n = r.data, a = i.mapArray(i.getName);
                n.filterSelf(function (e) {
                    var i = n.getItemModel(e), r = i.getShallow("category");
                    if (null != r) {
                        "number" == typeof r && (r = a[r]);
                        for (var o = 0; o < t.length; o++) if (!t[o].isSelected(r)) return !1
                    }
                    return !0
                })
            }, this)
        }
    }),t("echarts/chart/graph/categoryVisual", ["require"], function (e) {
        return function (e) {
            e.eachSeriesByType("graph", function (e) {
                var t = e.get("color"), i = e.getCategoriesData(), r = e.getData(), n = {};
                i.each(function (e) {
                    n[i.getName(e)] = e;
                    var r = i.getItemModel(e), a = i.getRawIndex(e),
                        o = r.get("itemStyle.normal.color") || t[a % t.length];
                    i.setItemVisual(e, "color", o)
                }), i.count() && r.each(function (e) {
                    var t = r.getItemModel(e), a = t.getShallow("category");
                    null != a && ("string" == typeof a && (a = n[a]), r.setItemVisual(e, "color", i.getItemVisual(a, "color")))
                })
            })
        }
    }),t("echarts/chart/graph/simpleLayoutHelper", ["require"], function (e) {
        return function (e) {
            var t = e.coordinateSystem;
            if (!t || "view" === t.type) {
                var i = e.getGraph();
                i.eachNode(function (e) {
                    var t = e.getModel();
                    e.setLayout([+t.get("x"), +t.get("y")])
                }), i.eachEdge(function (e) {
                    var t, i = e.getModel().get("lineStyle.normal.curveness") || 0, r = e.node1.getLayout(),
                        n = e.node2.getLayout();
                    i > 0 && (t = [(r[0] + n[0]) / 2 - (r[1] - n[1]) * i, (r[1] + n[1]) / 2 - (n[0] - r[0]) * i]), e.setLayout([r, n, t])
                })
            }
        }
    }),t("echarts/chart/graph/simpleLayout", ["require", "./simpleLayoutHelper"], function (e) {
        var t = e("./simpleLayoutHelper");
        return function (e, i) {
            e.eachSeriesByType("graph", function (e) {
                var i = e.get("layout");
                i && "none" !== i || t(e)
            })
        }
    }),t("echarts/chart/graph/circularLayoutHelper", ["require"], function (e) {
        return function (e) {
            var t = e.coordinateSystem;
            if (!t || "view" === t.type) {
                var i = t.getBoundingRect(), r = e.getData(), n = r.graph, a = 0, o = r.getSum("value"),
                    s = 2 * Math.PI / (o || r.count()), l = i.width / 2 + i.x, c = i.height / 2 + i.y,
                    u = Math.min(i.width, i.height) / 2;
                n.eachNode(function (e) {
                    var t = e.getValue("value");
                    a += s * (o ? t : 2) / 2, e.setLayout([u * Math.cos(a) + l, u * Math.sin(a) + c]), a += s * (o ? t : 2) / 2
                }), n.eachEdge(function (e) {
                    var t, i = e.getModel().get("lineStyle.normal.curveness") || 0, r = e.node1.getLayout(),
                        n = e.node2.getLayout();
                    i > 0 && (t = [l, c]), e.setLayout([r, n, t])
                })
            }
        }
    }),t("echarts/chart/graph/circularLayout", ["require", "./circularLayoutHelper"], function (e) {
        var t = e("./circularLayoutHelper");
        return function (e, i) {
            e.eachSeriesByType("graph", function (e) {
                "circular" === e.get("layout") && t(e)
            })
        }
    }),t("echarts/chart/graph/forceHelper", ["require", "zrender/core/vector"], function (e) {
        var t = e("zrender/core/vector"), i = t.scaleAndAdd;
        return function (e, r, n) {
            for (var a = n.rect, o = a.width, s = a.height, l = [a.x + o / 2, a.y + s / 2], c = null == n.gravity ? .1 : n.gravity, u = 0; u < e.length; u++) {
                var h = e[u];
                h.p || (h.p = t.create(o * (Math.random() - .5) + l[0], s * (Math.random() - .5) + l[1])), h.pp = t.clone(h.p), h.edges = null
            }
            var d = .6;
            return {
                warmUp: function () {
                    d = .5
                }, setFixed: function (t) {
                    e[t].fixed = !0
                }, setUnfixed: function (t) {
                    e[t].fixed = !1
                }, step: function (n) {
                    for (var a = [], o = e.length, s = 0; s < r.length; s++) {
                        var u = r[s], h = u.n1, p = u.n2;
                        t.sub(a, p.p, h.p);
                        var f = t.len(a) - u.d, g = p.w / (h.w + p.w);
                        t.normalize(a, a), !h.fixed && i(h.p, h.p, a, g * f * d), !p.fixed && i(p.p, p.p, a, -(1 - g) * f * d)
                    }
                    for (var s = 0; o > s; s++) {
                        var m = e[s];
                        m.fixed || (t.sub(a, l, m.p), t.scaleAndAdd(m.p, m.p, a, c * d))
                    }
                    for (var s = 0; o > s; s++) for (var h = e[s], v = s + 1; o > v; v++) {
                        var p = e[v];
                        t.sub(a, p.p, h.p);
                        var f = t.len(a);
                        0 === f && (t.set(a, Math.random() - .5, Math.random() - .5), f = 1);
                        var y = (h.rep + p.rep) / f / f;
                        !h.fixed && i(h.pp, h.pp, a, y), !p.fixed && i(p.pp, p.pp, a, -y)
                    }
                    for (var x = [], s = 0; o > s; s++) {
                        var m = e[s];
                        m.fixed || (t.sub(x, m.p, m.pp), t.scaleAndAdd(m.p, m.p, x, d), t.copy(m.pp, m.p))
                    }
                    d = .992 * d, n && n(e, r, .01 > d)
                }
            }
        }
    }),t("echarts/chart/graph/forceLayout", ["require", "./forceHelper", "../../util/number", "./simpleLayoutHelper", "./circularLayoutHelper", "zrender/core/vector"], function (e) {
        var t = e("./forceHelper"), i = e("../../util/number"), r = e("./simpleLayoutHelper"),
            n = e("./circularLayoutHelper"), a = e("zrender/core/vector");
        return function (e, o) {
            e.eachSeriesByType("graph", function (e) {
                if ("force" === e.get("layout")) {
                    var o = e.preservedPoints || {}, s = e.getGraph(), l = s.data, c = s.edgeData,
                        u = e.getModel("force"), h = u.get("initLayout");
                    e.preservedPoints ? l.each(function (e) {
                        var t = l.getId(e);
                        l.setItemLayout(e, o[t] || [NaN, NaN])
                    }) : h && "none" !== h ? "circular" === h && n(e) : r(e);
                    var d = l.getDataExtent("value"), p = u.get("repulsion"), f = u.get("edgeLength"),
                        g = l.mapArray("value", function (e, t) {
                            var r = l.getItemLayout(t), n = i.linearMap(e, d, [0, p]) || p / 2;
                            return {w: n, rep: n, p: !r || isNaN(r[0]) || isNaN(r[1]) ? null : r}
                        }), m = c.mapArray("value", function (e, t) {
                            var i = s.getEdgeByIndex(t);
                            return {
                                n1: g[i.node1.dataIndex],
                                n2: g[i.node2.dataIndex],
                                d: f,
                                curveness: i.getModel().get("lineStyle.normal.curveness") || 0
                            }
                        }), v = e.coordinateSystem, y = v.getBoundingRect(),
                        x = t(g, m, {rect: y, gravity: u.get("gravity")}), _ = x.step;
                    x.step = function (e) {
                        for (var t = 0, i = g.length; i > t; t++) g[t].fixed && a.copy(g[t].p, s.getNodeByIndex(t).getLayout());
                        _(function (t, i, r) {
                            for (var n = 0, a = t.length; a > n; n++) t[n].fixed || s.getNodeByIndex(n).setLayout(t[n].p), o[l.getId(n)] = t[n].p;
                            for (var n = 0, a = i.length; a > n; n++) {
                                var c = i[n], u = c.n1.p, h = c.n2.p, d = [u, h];
                                c.curveness > 0 && d.push([(u[0] + h[0]) / 2 - (u[1] - h[1]) * c.curveness, (u[1] + h[1]) / 2 - (h[0] - u[0]) * c.curveness]), s.getEdgeByIndex(n).setLayout(d)
                            }
                            e && e(r)
                        })
                    }, e.forceLayout = x, e.preservedPoints = o, x.step()
                } else e.forceLayout = null
            })
        }
    }),t("echarts/chart/graph/createView", ["require", "../../coord/View", "../../util/layout", "zrender/core/bbox"], function (e) {
        function t(e, t, i) {
            var n = e.getBoxLayoutParams();
            return n.aspect = i, r.getLayoutRect(n, {width: t.getWidth(), height: t.getHeight()})
        }

        var i = e("../../coord/View"), r = e("../../util/layout"), n = e("zrender/core/bbox");
        return function (e, r) {
            e.eachSeriesByType("graph", function (e) {
                var a = e.get("coordinateSystem");
                if (!a || "view" === a) {
                    var o = new i, s = e.getData(), l = s.mapArray(function (e) {
                        var t = s.getItemModel(e);
                        return [+t.get("x"), +t.get("y")]
                    }), c = [], u = [];
                    n.fromPoints(l, c, u);
                    var h = t(e, r, (u[0] - c[0]) / (u[1] - c[1]) || 1);
                    (isNaN(c[0]) || isNaN(c[1])) && (c = [h.x, h.y], u = [h.x + h.width, h.y + h.height]);
                    var d = u[0] - c[0], p = u[1] - c[1], f = h.width, g = h.height;
                    o = e.coordinateSystem = new i, o.setBoundingRect(c[0], c[1], d, p), o.setViewRect(h.x, h.y, f, g);
                    var m = e.getModel("roamDetail");
                    o.setPan(m.get("x") || 0, m.get("y") || 0), o.setZoom(m.get("zoom") || 1)
                }
            })
        }
    }),t("echarts/chart/graph", ["require", "../echarts", "zrender/core/util", "./graph/GraphSeries", "./graph/GraphView", "./graph/roamAction", "./graph/categoryFilter", "../visual/symbol", "./graph/categoryVisual", "./graph/simpleLayout", "./graph/circularLayout", "./graph/forceLayout", "./graph/createView"], function (e) {
        var t = e("../echarts"), i = e("zrender/core/util");
        e("./graph/GraphSeries"), e("./graph/GraphView"), e("./graph/roamAction"), t.registerProcessor("filter", e("./graph/categoryFilter")), t.registerVisualCoding("chart", i.curry(e("../visual/symbol"), "graph", "circle", null)), t.registerVisualCoding("chart", e("./graph/categoryVisual")), t.registerLayout(e("./graph/simpleLayout")), t.registerLayout(e("./graph/circularLayout")), t.registerLayout(e("./graph/forceLayout")), t.registerCoordinateSystem("graphView", {create: e("./graph/createView")})
    }),t("echarts/chart/gauge/GaugeSeries", ["require", "../../data/List", "../../model/Series", "zrender/core/util"], function (e) {
        var t = e("../../data/List"), i = e("../../model/Series"), r = e("zrender/core/util"), n = i.extend({
            type: "series.gauge",
            getInitialData: function (e, i) {
                var n = new t(["value"], this), a = e.data || [];
                return r.isArray(a) || (a = [a]), n.initData(a), n
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                center: ["50%", "50%"],
                legendHoverLink: !0,
                radius: "75%",
                startAngle: 225,
                endAngle: -45,
                clockwise: !0,
                min: 0,
                max: 100,
                splitNumber: 10,
                axisLine: {
                    show: !0,
                    lineStyle: {color: [[.2, "#91c7ae"], [.8, "#63869e"], [1, "#c23531"]], width: 30}
                },
                splitLine: {show: !0, length: 30, lineStyle: {color: "#eee", width: 2, type: "solid"}},
                axisTick: {
                    show: !0,
                    splitNumber: 5,
                    length: 8,
                    lineStyle: {color: "#eee", width: 1, type: "solid"}
                },
                axisLabel: {show: !0, textStyle: {color: "auto"}},
                pointer: {show: !0, length: "80%", width: 8},
                itemStyle: {normal: {color: "auto"}},
                title: {show: !0, offsetCenter: [0, "-40%"], textStyle: {color: "#333", fontSize: 15}},
                detail: {
                    show: !0,
                    backgroundColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    borderColor: "#ccc",
                    width: 100,
                    height: 40,
                    offsetCenter: [0, "40%"],
                    textStyle: {color: "auto", fontSize: 30}
                }
            }
        });
        return n
    }),t("echarts/chart/gauge/PointerPath", ["require", "zrender/graphic/Path"], function (e) {
        return e("zrender/graphic/Path").extend({
            type: "echartsGaugePointer",
            shape: {angle: 0, width: 10, r: 10, x: 0, y: 0},
            buildPath: function (e, t) {
                var i = Math.cos, r = Math.sin, n = t.r, a = t.width, o = t.angle,
                    s = t.x - i(o) * a * (a >= n / 3 ? 1 : 2), l = t.y - r(o) * a * (a >= n / 3 ? 1 : 2);
                o = t.angle - Math.PI / 2, e.moveTo(s, l), e.lineTo(t.x + i(o) * a, t.y + r(o) * a), e.lineTo(t.x + i(t.angle) * n, t.y + r(t.angle) * n), e.lineTo(t.x - i(o) * a, t.y - r(o) * a), e.lineTo(s, l)
            }
        })
    }),t("echarts/chart/gauge/GaugeView", ["require", "./PointerPath", "../../util/graphic", "../../util/number", "../../view/Chart"], function (e) {
        function t(e, t) {
            var i = e.get("center"), r = t.getWidth(), n = t.getHeight(), a = Math.min(r, n), s = o(i[0], t.getWidth()),
                l = o(i[1], t.getHeight()), c = o(e.get("radius"), a / 2);
            return {cx: s, cy: l, r: c}
        }

        function i(e, t) {
            return t && ("string" == typeof t ? e = t.replace("{value}", e) : "function" == typeof t && (e = t(e))), e
        }

        var r = e("./PointerPath"), n = e("../../util/graphic"), a = e("../../util/number"), o = a.parsePercent,
            s = 2 * Math.PI, l = e("../../view/Chart").extend({
                type: "gauge", render: function (e, i, r) {
                    this.group.removeAll();
                    var n = e.get("axisLine.lineStyle.color"), a = t(e, r);
                    this._renderMain(e, i, r, n, a)
                }, _renderMain: function (e, t, i, r, a) {
                    for (var o = this.group, l = e.getModel("axisLine"), c = l.getModel("lineStyle"), u = e.get("clockwise"), h = -e.get("startAngle") / 180 * Math.PI, d = -e.get("endAngle") / 180 * Math.PI, p = (d - h) % s, f = h, g = c.get("width"), m = 0; m < r.length; m++) {
                        var d = h + p * r[m][0], v = new n.Sector({
                            shape: {
                                startAngle: f,
                                endAngle: d,
                                cx: a.cx,
                                cy: a.cy,
                                clockwise: u,
                                r0: a.r - g,
                                r: a.r
                            }, silent: !0
                        });
                        v.setStyle({fill: r[m][1]}), v.setStyle(c.getLineStyle(["color", "borderWidth", "borderColor"])), o.add(v), f = d
                    }
                    var y = function (e) {
                        if (0 >= e) return r[0][1];
                        for (var t = 0; t < r.length; t++) if (r[t][0] >= e && (0 === t ? 0 : r[t - 1][0]) < e) return r[t][1];
                        return r[t - 1][1]
                    };
                    if (!u) {
                        var x = h;
                        h = d, d = x
                    }
                    this._renderTicks(e, t, i, y, a, h, d, u), this._renderPointer(e, t, i, y, a, h, d, u), this._renderTitle(e, t, i, y, a), this._renderDetail(e, t, i, y, a)
                }, _renderTicks: function (e, t, r, o, s, l, c, u) {
                    for (var h = this.group, d = s.cx, p = s.cy, f = s.r, g = e.get("min"), m = e.get("max"), v = e.getModel("splitLine"), y = e.getModel("axisTick"), x = e.getModel("axisLabel"), _ = e.get("splitNumber"), b = y.get("splitNumber"), w = v.get("length"), M = y.get("length"), S = l, A = (c - l) / _, z = A / b, C = v.getModel("lineStyle").getLineStyle(), L = y.getModel("lineStyle").getLineStyle(), I = x.getModel("textStyle"), T = 0; _ >= T; T++) {
                        var D = Math.cos(S), P = Math.sin(S);
                        if (v.get("show")) {
                            var k = new n.Line({
                                shape: {
                                    x1: D * f + d,
                                    y1: P * f + p,
                                    x2: D * (f - w) + d,
                                    y2: P * (f - w) + p
                                }, style: C, silent: !0
                            });
                            "auto" === C.stroke && k.setStyle({stroke: o(T / _)}), h.add(k)
                        }
                        if (x.get("show")) {
                            var V = i(a.round(T / _ * (m - g) + g), x.get("formatter")), R = new n.Text({
                                style: {
                                    text: V,
                                    x: D * (f - w - 5) + d,
                                    y: P * (f - w - 5) + p,
                                    fill: I.getTextColor(),
                                    textFont: I.getFont(),
                                    textBaseline: -.4 > P ? "top" : P > .4 ? "bottom" : "middle",
                                    textAlign: -.4 > D ? "left" : D > .4 ? "right" : "center"
                                }, silent: !0
                            });
                            "auto" === R.style.fill && R.setStyle({fill: o(T / _)}), h.add(R)
                        }
                        if (y.get("show") && T !== _) {
                            for (var O = 0; b >= O; O++) {
                                var D = Math.cos(S), P = Math.sin(S), E = new n.Line({
                                    shape: {
                                        x1: D * f + d,
                                        y1: P * f + p,
                                        x2: D * (f - M) + d,
                                        y2: P * (f - M) + p
                                    }, silent: !0, style: L
                                });
                                "auto" === L.stroke && E.setStyle({stroke: o((T + O / b) / _)}), h.add(E), S += z
                            }
                            S -= z
                        } else S += A
                    }
                }, _renderPointer: function (e, t, i, s, l, c, u, h) {
                    var d = a.linearMap, p = [+e.get("min"), +e.get("max")], f = [c, u];
                    h || (f = f.reverse());
                    var g = e.getData(), m = this._data, v = this.group;
                    g.diff(m).add(function (t) {
                        var i = new r({shape: {angle: c}});
                        n.updateProps(i, {shape: {angle: d(g.get("value", t), p, f)}}, e), v.add(i), g.setItemGraphicEl(t, i)
                    }).update(function (t, i) {
                        var r = m.getItemGraphicEl(i);
                        n.updateProps(r, {shape: {angle: d(g.get("value", t), p, f)}}, e), v.add(r), g.setItemGraphicEl(t, r)
                    }).remove(function (e) {
                        var t = m.getItemGraphicEl(e);
                        v.remove(t)
                    }).execute(), g.eachItemGraphicEl(function (e, t) {
                        var i = g.getItemModel(t), r = i.getModel("pointer");
                        e.attr({
                            shape: {x: l.cx, y: l.cy, width: r.get("width"), r: o(r.get("length"), l.r)},
                            style: i.getModel("itemStyle.normal").getItemStyle()
                        }), "auto" === e.style.fill && e.setStyle("fill", s((g.get("value", t) - p[0]) / (p[1] - p[0]))), n.setHoverStyle(e, i.getModel("itemStyle.emphasis").getItemStyle())
                    }), this._data = g
                }, _renderTitle: function (e, t, i, r, a) {
                    var s = e.getModel("title");
                    if (s.get("show")) {
                        var l = s.getModel("textStyle"), c = s.get("offsetCenter"), u = a.cx + o(c[0], a.r),
                            h = a.cy + o(c[1], a.r), d = new n.Text({
                                style: {
                                    x: u,
                                    y: h,
                                    text: e.getData().getName(0),
                                    fill: l.getTextColor(),
                                    textFont: l.getFont(),
                                    textAlign: "center",
                                    textBaseline: "middle"
                                }
                            });
                        this.group.add(d)
                    }
                }, _renderDetail: function (e, t, r, a, s) {
                    var l = e.getModel("detail"), c = e.get("min"), u = e.get("max");
                    if (l.get("show")) {
                        var h = l.getModel("textStyle"), d = l.get("offsetCenter"), p = s.cx + o(d[0], s.r),
                            f = s.cy + o(d[1], s.r), g = o(l.get("width"), s.r), m = o(l.get("height"), s.r),
                            v = e.getData().get("value", 0), y = new n.Rect({
                                shape: {x: p - g / 2, y: f - m / 2, width: g, height: m},
                                style: {
                                    text: i(v, l.get("formatter")),
                                    fill: l.get("backgroundColor"),
                                    textFill: h.getTextColor(),
                                    textFont: h.getFont()
                                }
                            });
                        "auto" === y.style.textFill && y.setStyle("textFill", a((v - c) / (u - c))), y.setStyle(l.getItemStyle(["color"])), this.group.add(y)
                    }
                }
            });
        return l
    }),t("echarts/chart/gauge", ["require", "./gauge/GaugeSeries", "./gauge/GaugeView"], function (e) {
        e("./gauge/GaugeSeries"), e("./gauge/GaugeView")
    }),t("echarts/chart/funnel/FunnelSeries", ["require", "../../data/List", "../../util/model", "../../data/helper/completeDimensions", "../../echarts"], function (e) {
        var t = e("../../data/List"), i = e("../../util/model"), r = e("../../data/helper/completeDimensions");
        e("../../echarts").extendSeriesModel({
            type: "series.funnel",
            init: function (e) {
                this.$superApply("init", arguments), this.legendDataProvider = function () {
                    return this._dataBeforeProcessed
                }, this._defaultLabelLine(e)
            },
            getInitialData: function (e, i) {
                var n = r(["value"], e.data), a = new t(n, this);
                return a.initData(e.data), a
            },
            _defaultLabelLine: function (e) {
                i.defaultEmphasis(e.labelLine, ["show"]);
                var t = e.labelLine.normal, r = e.labelLine.emphasis;
                t.show = t.show && e.label.normal.show, r.show = r.show && e.label.emphasis.show
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                left: 80,
                top: 60,
                right: 80,
                bottom: 60,
                minSize: "0%",
                maxSize: "100%",
                sort: "descending",
                gap: 0,
                funnelAlign: "center",
                label: {normal: {show: !0, position: "outer"}, emphasis: {show: !0}},
                labelLine: {normal: {show: !0, length: 20, lineStyle: {width: 1, type: "solid"}}, emphasis: {}},
                itemStyle: {normal: {borderColor: "#fff", borderWidth: 1}, emphasis: {}}
            }
        })
    }),t("echarts/chart/funnel/FunnelView", ["require", "../../util/graphic", "zrender/core/util", "../../view/Chart"], function (e) {
        function t(e, t) {
            function i() {
                o.ignore = o.hoverIgnore, s.ignore = s.hoverIgnore
            }

            function n() {
                o.ignore = o.normalIgnore, s.ignore = s.normalIgnore
            }

            r.Group.call(this);
            var a = new r.Polygon, o = new r.Polyline, s = new r.Text;
            this.add(a), this.add(o), this.add(s), this.updateData(e, t, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
        }

        function i(e, t, i, r) {
            var n = r.getModel("textStyle"), a = r.get("position"),
                o = "inside" === a || "inner" === a || "center" === a;
            return {
                fill: n.getTextColor() || (o ? "#fff" : e.getItemVisual(t, "color")),
                textFont: n.getFont(),
                text: e.hostModel.getFormattedLabel(t, i) || e.getName(t)
            }
        }

        var r = e("../../util/graphic"), n = e("zrender/core/util"), a = t.prototype,
            o = ["itemStyle", "normal", "opacity"];
        a.updateData = function (e, t, i) {
            var a = this.childAt(0), s = e.hostModel, l = e.getItemModel(t), c = e.getItemLayout(t),
                u = e.getItemModel(t).get(o);
            u = null == u ? 1 : u, i ? (a.setShape({points: c.points}), a.setStyle({opacity: 0}), r.updateProps(a, {style: {opacity: u}}, s)) : r.initProps(a, {shape: {points: c.points}}, s);
            var h = l.getModel("itemStyle"), d = e.getItemVisual(t, "color");
            a.setStyle(n.defaults({fill: d}, h.getModel("normal").getItemStyle())), a.hoverStyle = h.getModel("emphasis").getItemStyle(), this._updateLabel(e, t), r.setHoverStyle(this)
        }, a._updateLabel = function (e, t) {
            var n = this.childAt(1), a = this.childAt(2), o = e.hostModel, s = e.getItemModel(t),
                l = e.getItemLayout(t), c = l.label, u = e.getItemVisual(t, "color");
            r.updateProps(n, {shape: {points: c.linePoints || c.linePoints}}, o), r.updateProps(a, {
                style: {
                    x: c.x,
                    y: c.y
                }
            }, o), a.attr({
                style: {textAlign: c.textAlign, textBaseline: c.textBaseline, textFont: c.font},
                rotation: c.rotation,
                origin: [c.x, c.y],
                z2: 10
            });
            var h = s.getModel("label.normal"), d = s.getModel("label.emphasis"), p = s.getModel("labelLine.normal"),
                f = s.getModel("labelLine.emphasis");
            a.setStyle(i(e, t, "normal", h)), a.ignore = a.normalIgnore = !h.get("show"), a.hoverIgnore = !d.get("show"), n.ignore = n.normalIgnore = !p.get("show"), n.hoverIgnore = !f.get("show"), n.setStyle({stroke: u}), n.setStyle(p.getModel("lineStyle").getLineStyle()), a.hoverStyle = i(e, t, "emphasis", d), n.hoverStyle = f.getModel("lineStyle").getLineStyle()
        }, n.inherits(t, r.Group);
        var s = e("../../view/Chart").extend({
            type: "funnel", render: function (e, i, r) {
                var n = e.getData(), a = this._data, o = this.group;
                n.diff(a).add(function (e) {
                    var i = new t(n, e);
                    n.setItemGraphicEl(e, i), o.add(i)
                }).update(function (e, t) {
                    var i = a.getItemGraphicEl(t);
                    i.updateData(n, e), o.add(i), n.setItemGraphicEl(e, i)
                }).remove(function (e) {
                    var t = a.getItemGraphicEl(e);
                    o.remove(t)
                }).execute(), this._data = n
            }, remove: function () {
                this.group.removeAll(), this._data = null
            }
        });
        return s
    }),t("echarts/chart/funnel/funnelLayout", ["require", "../../util/layout", "../../util/number"], function (e) {
        function t(e, t) {
            return n.getLayoutRect(e.getBoxLayoutParams(), {width: t.getWidth(), height: t.getHeight()})
        }

        function i(e, t) {
            for (var i = e.mapArray("value", function (e) {
                return e
            }), r = [], n = "ascending" === t, a = 0, o = e.count(); o > a; a++) r[a] = a;
            return r.sort(function (e, t) {
                return n ? i[e] - i[t] : i[t] - i[e]
            }), r
        }

        function r(e) {
            e.each(function (t) {
                var i, r, n, a, o = e.getItemModel(t), s = o.getModel("label.normal"), l = s.get("position"),
                    c = o.getModel("labelLine.normal"), u = e.getItemLayout(t), h = u.points,
                    d = "inner" === l || "inside" === l || "center" === l;
                if (d) r = (h[0][0] + h[1][0] + h[2][0] + h[3][0]) / 4, n = (h[0][1] + h[1][1] + h[2][1] + h[3][1]) / 4, i = "center", a = [[r, n], [r, n]]; else {
                    var p, f, g, m = c.get("length");
                    "left" === l ? (p = (h[3][0] + h[0][0]) / 2, f = (h[3][1] + h[0][1]) / 2, g = p - m, r = g - 5, i = "right") : (p = (h[1][0] + h[2][0]) / 2, f = (h[1][1] + h[2][1]) / 2, g = p + m, r = g + 5, i = "left");
                    var v = f;
                    a = [[p, f], [g, v]], n = v
                }
                u.label = {linePoints: a, x: r, y: n, textBaseline: "middle", textAlign: i, inside: d}
            })
        }

        var n = e("../../util/layout"), a = e("../../util/number"), o = a.parsePercent;
        return function (e, n) {
            e.eachSeriesByType("funnel", function (e) {
                var s = e.getData(), l = e.get("sort"), c = t(e, n), u = i(s, l),
                    h = [o(e.get("minSize"), c.width), o(e.get("maxSize"), c.width)], d = s.getDataExtent("value"),
                    p = e.get("min"), f = e.get("max");
                null == p && (p = Math.min(d[0], 0)), null == f && (f = d[1]);
                var g = e.get("funnelAlign"), m = e.get("gap"), v = (c.height - m * (s.count() - 1)) / s.count(),
                    y = c.y, x = function (e, t) {
                        var i, r = s.get("value", e) || 0, n = a.linearMap(r, [p, f], h, !0);
                        switch (g) {
                            case"left":
                                i = c.x;
                                break;
                            case"center":
                                i = c.x + (c.width - n) / 2;
                                break;
                            case"right":
                                i = c.x + c.width - n
                        }
                        return [[i, t], [i + n, t]]
                    };
                "ascending" === l && (v = -v, m = -m, y += c.height, u = u.reverse());
                for (var _ = 0; _ < u.length; _++) {
                    var b = u[_], w = u[_ + 1], M = x(b, y), S = x(w, y + v);
                    y += v + m, s.setItemLayout(b, {points: M.concat(S.slice().reverse())})
                }
                r(s)
            })
        }
    }),t("echarts/chart/funnel", ["require", "zrender/core/util", "../echarts", "./funnel/FunnelSeries", "./funnel/FunnelView", "../visual/dataColor", "./funnel/funnelLayout", "../processor/dataFilter"], function (e) {
        var t = e("zrender/core/util"), i = e("../echarts");
        e("./funnel/FunnelSeries"), e("./funnel/FunnelView"), i.registerVisualCoding("chart", t.curry(e("../visual/dataColor"), "funnel")), i.registerLayout(e("./funnel/funnelLayout")), i.registerProcessor("filter", t.curry(e("../processor/dataFilter"), "funnel"))
    }),t("echarts/coord/parallel/ParallelAxis", ["require", "zrender/core/util", "../Axis"], function (e) {
        var t = e("zrender/core/util"), i = e("../Axis"), r = function (e, t, r, n, a) {
            i.call(this, e, t, r), this.type = n || "value", this.axisIndex = a
        };
        return r.prototype = {constructor: r, model: null}, t.inherits(r, i), r
    }),t("echarts/coord/parallel/Parallel", ["require", "../../util/layout", "../../coord/axisHelper", "zrender/core/util", "./ParallelAxis", "zrender/core/matrix", "zrender/core/vector"], function (e) {
        function t(e, t, i) {
            this._axesMap = {}, this._axesLayout = {}, this.dimensions = e.dimensions, this._rect, this._init(e, t, i)
        }

        var i = e("../../util/layout"), r = e("../../coord/axisHelper"), n = e("zrender/core/util"),
            a = e("./ParallelAxis"), o = e("zrender/core/matrix"), s = e("zrender/core/vector"), l = n.each,
            c = Math.PI;
        return t.prototype = {
            type: "parallel", constructor: t, _init: function (e, t, i) {
                var n = e.dimensions, o = e.parallelAxisIndex;
                l(n, function (e, i) {
                    var n = o[i], s = t.getComponent("parallelAxis", n),
                        l = this._axesMap[e] = new a(e, r.createScaleByModel(s), [0, 0], s.get("type"), n),
                        c = "category" === l.type;
                    l.onBand = c && s.get("boundaryGap"), l.inverse = s.get("inverse"), s.axis = l, l.model = s
                }, this), this._updateAxesFromSeries(e, t)
            }, _updateAxesFromSeries: function (e, t) {
                t.eachSeries(function (i) {
                    if (e.contains(i, t)) {
                        var r = i.getData();
                        l(this.dimensions, function (e) {
                            this._axesMap[e].scale.unionExtent(r.getDataExtent(e))
                        }, this)
                    }
                }, this)
            }, resize: function (e, t) {
                this._rect = i.getLayoutRect(e.getBoxLayoutParams(), {
                    width: t.getWidth(),
                    height: t.getHeight()
                }), this._layoutAxes(e)
            }, getRect: function () {
                return this._rect
            }, _layoutAxes: function (e) {
                var t = this._rect, i = e.get("layout"), n = this._axesMap, a = this.dimensions,
                    s = [t.width, t.height], u = "horizontal" === i ? 0 : 1, h = s[u], d = s[1 - u], p = [0, d];
                l(n, function (e) {
                    var t = e.inverse ? 1 : 0;
                    e.setExtent(p[t], p[1 - t]), r.niceScaleExtent(e, e.model)
                }), l(a, function (e, r) {
                    var n = h * r / (a.length - 1), s = {horizontal: {x: n, y: d}, vertical: {x: 0, y: n}},
                        l = {horizontal: c / 2, vertical: 0}, u = [s[i].x + t.x, s[i].y + t.y], p = l[i],
                        f = o.create();
                    o.rotate(f, f, p), o.translate(f, f, u), this._axesLayout[e] = {
                        position: u,
                        rotation: p,
                        transform: f,
                        tickDirection: 1,
                        labelDirection: 1
                    }
                }, this)
            }, getAxis: function (e) {
                return this._axesMap[e]
            }, dataToPoint: function (e, t) {
                return this.axisCoordToPoint(this._axesMap[t].dataToCoord(e), t)
            }, eachActiveState: function (e, t, i) {
                for (var r = this.dimensions, n = this._axesMap, a = !1, o = 0, s = r.length; s > o; o++) "normal" !== n[r[o]].model.getActiveState() && (a = !0);
                for (var l = 0, c = e.count(); c > l; l++) {
                    var u, h = e.getValues(r, l);
                    if (a) {
                        u = "active";
                        for (var o = 0, s = r.length; s > o; o++) {
                            var d = r[o], p = n[d].model.getActiveState(h[o], o);
                            if ("inactive" === p) {
                                u = "inactive";
                                break
                            }
                        }
                    } else u = "normal";
                    t.call(i, u, l)
                }
            }, axisCoordToPoint: function (e, t) {
                var i = this._axesLayout[t], r = [e, 0];
                return s.applyTransform(r, r, i.transform), r
            }, getAxisLayout: function (e) {
                return n.clone(this._axesLayout[e])
            }
        }, t
    }),t("echarts/coord/parallel/parallelCreator", ["require", "./Parallel", "../../CoordinateSystem"], function (e) {
        function t(e, t) {
            var r = [];
            return e.eachComponent("parallel", function (n, a) {
                var o = new i(n, e, t);
                o.name = "parallel_" + a, o.resize(n, t), n.coordinateSystem = o, o.model = n, r.push(o)
            }), e.eachSeries(function (e) {
                if ("parallel" === e.get("coordinateSystem")) {
                    var t = e.get("parallelIndex");
                    e.coordinateSystem = r[t]
                }
            }), r
        }

        var i = e("./Parallel");
        e("../../CoordinateSystem").register("parallel", {create: t})
    }),t("echarts/coord/parallel/AxisModel", ["require", "../../model/Component", "zrender/core/util", "../../model/mixin/makeStyleMapper", "../axisModelCreator", "../../util/number", "../axisModelCommonMixin"], function (e) {
        function t(e, t) {
            return t.type || (t.data ? "category" : "value")
        }

        var i = e("../../model/Component"), r = e("zrender/core/util"), n = e("../../model/mixin/makeStyleMapper"),
            a = e("../axisModelCreator"), o = e("../../util/number"), s = i.extend({
                type: "baseParallelAxis", axis: null, activeIntervals: [], getAreaSelectStyle: function () {
                    return n([["fill", "color"], ["lineWidth", "borderWidth"], ["stroke", "borderColor"], ["width", "width"], ["opacity", "opacity"]]).call(this.getModel("areaSelectStyle"))
                }, setActiveIntervals: function (e) {
                    var t = this.activeIntervals = r.clone(e);
                    if (t) for (var i = t.length - 1; i >= 0; i--) o.asc(t[i])
                }, getActiveState: function (e) {
                    var t = this.activeIntervals;
                    if (!t.length) return "normal";
                    if (null == e) return "inactive";
                    for (var i = 0, r = t.length; r > i; i++) if (t[i][0] <= e && e <= t[i][1]) return "active";
                    return "inactive"
                }
            }), l = {
                type: "value",
                dim: null,
                parallelIndex: null,
                areaSelectStyle: {
                    width: 20,
                    borderWidth: 1,
                    borderColor: "rgba(160,197,232)",
                    color: "rgba(160,197,232)",
                    opacity: .3
                },
                z: 10
            };
        return r.merge(s.prototype, e("../axisModelCommonMixin")), a("parallel", s, t, l), s
    }),t("echarts/coord/parallel/ParallelModel", ["require", "zrender/core/util", "../../model/Component", "./AxisModel"], function (e) {
        var t = e("zrender/core/util"), i = e("../../model/Component");
        e("./AxisModel"), i.extend({
            type: "parallel",
            dependencies: ["parallelAxis"],
            coordinateSystem: null,
            dimensions: null,
            parallelAxisIndex: null,
            defaultOption: {
                zlevel: 0,
                z: 0,
                left: 80,
                top: 60,
                right: 80,
                bottom: 60,
                layout: "horizontal",
                parallelAxisDefault: null
            },
            init: function () {
                i.prototype.init.apply(this, arguments), this.mergeOption({})
            },
            mergeOption: function (e) {
                var i = this.option;
                e && t.merge(i, e), this._initDimensions()
            },
            contains: function (e, t) {
                var i = e.get("parallelIndex");
                return null != i && t.getComponent("parallel", i) === this
            },
            _initDimensions: function () {
                var e = this.dimensions = [], i = this.parallelAxisIndex = [],
                    r = t.filter(this.dependentModels.parallelAxis, function (e) {
                        return e.get("parallelIndex") === this.componentIndex
                    });
                t.each(r, function (t) {
                    e.push("dim" + t.get("dim")), i.push(t.componentIndex)
                })
            }
        })
    }),t("echarts/component/axis/parallelAxisAction", ["require", "../../echarts"], function (e) {
        var t = e("../../echarts"), i = {type: "axisAreaSelect", event: "axisAreaSelected", update: "updateVisual"};
        t.registerAction(i, function (e, t) {
            t.eachComponent({mainType: "parallelAxis", query: e}, function (t) {
                t.axis.model.setActiveIntervals(e.intervals)
            })
        })
    }),t("echarts/component/helper/SelectController", ["require", "zrender/mixin/Eventful", "zrender/core/util", "../../util/graphic"], function (e) {
        function t(e, t, i) {
            f.call(this), this.type = e, this.zr = t, this.opt = g.clone(i), this.group = new m.Group, this._containerRect = null, this._track = [], this._dragging, this._cover, this._disabled = !0, this._handlers = {
                mousedown: v(n, this),
                mousemove: v(a, this),
                mouseup: v(o, this)
            }, y(M, function (e) {
                this.zr.on(e, this._handlers[e])
            }, this)
        }

        function i(e, t) {
            var i = this.group.transformCoordToLocal(e, t);
            return !this._containerRect || this._containerRect.contain(i[0], i[1])
        }

        function r(e) {
            var t = e.event;
            t.preventDefault && t.preventDefault()
        }

        function n(e) {
            if (!(this._disabled || e.target && e.target.draggable)) {
                r(e);
                var t = e.offsetX, n = e.offsetY;
                i.call(this, t, n) && (this._dragging = !0, this._track = [[t, n]])
            }
        }

        function a(e) {
            this._dragging && !this._disabled && (r(e), s.call(this, e))
        }

        function o(e) {
            this._dragging && !this._disabled && (r(e), s.call(this, e, !0), this._dragging = !1, this._track = [])
        }

        function s(e, t) {
            var r = e.offsetX, n = e.offsetY;
            if (i.call(this, r, n)) {
                this._track.push([r, n]);
                var a = l.call(this) ? S[this.type].getRanges.call(this) : [];
                c.call(this, a), this.trigger("selected", g.clone(a)), t && this.trigger("selectEnd", g.clone(a))
            }
        }

        function l() {
            var e = this._track;
            if (!e.length) return !1;
            var t = e[e.length - 1], i = e[0], r = t[0] - i[0], n = t[1] - i[1], a = b(r * r + n * n, .5);
            return a > w
        }

        function c(e) {
            var t = S[this.type];
            e && e.length ? (this._cover || (this._cover = t.create.call(this), this.group.add(this._cover)), t.update.call(this, e)) : (this.group.remove(this._cover), this._cover = null)
        }

        function u() {
            var e = this.group, t = e.parent;
            t && t.remove(e)
        }

        function h() {
            var e = this.opt;
            return new m.Rect({style: {stroke: e.stroke, fill: e.fill, lineWidth: e.lineWidth, opacity: e.opacity}})
        }

        function d() {
            return g.map(this._track, function (e) {
                return this.group.transformCoordToLocal(e[0], e[1])
            }, this)
        }

        function p() {
            var e = d.call(this), t = e.length - 1;
            return 0 > t && (t = 0), [e[0], e[t]]
        }

        var f = e("zrender/mixin/Eventful"), g = e("zrender/core/util"), m = e("../../util/graphic"), v = g.bind,
            y = g.each, x = Math.min, _ = Math.max, b = Math.pow, w = 2, M = ["mousedown", "mousemove", "mouseup"];
        t.prototype = {
            constructor: t, enable: function (e, t) {
                this._disabled = !1, u.call(this), this._containerRect = t !== !1 ? t || e.getBoundingRect() : null, e.add(this.group)
            }, update: function (e) {
                c.call(this, e && g.clone(e))
            }, disable: function () {
                this._disabled = !0, u.call(this)
            }, dispose: function () {
                this.disable(), y(M, function (e) {
                    this.zr.off(e, this._handlers[e])
                }, this)
            }
        }, g.mixin(t, f);
        var S = {
            line: {
                create: h, getRanges: function () {
                    var e = p.call(this), t = x(e[0][0], e[1][0]), i = _(e[0][0], e[1][0]);
                    return [[t, i]]
                }, update: function (e) {
                    var t = e[0], i = this.opt.width;
                    this._cover.setShape({x: t[0], y: -i / 2, width: t[1] - t[0], height: i})
                }
            }, rect: {
                create: h, getRanges: function () {
                    var e = p.call(this), t = [x(e[1][0], e[0][0]), x(e[1][1], e[0][1])],
                        i = [_(e[1][0], e[0][0]), _(e[1][1], e[0][1])];
                    return [[[t[0], i[0]], [t[1], i[1]]]]
                }, update: function (e) {
                    var t = e[0];
                    this._cover.setShape({x: t[0][0], y: t[1][0], width: t[0][1] - t[0][0], height: t[1][1] - t[1][0]})
                }
            }
        };
        return t
    }),t("echarts/component/axis/ParallelAxisView", ["require", "zrender/core/util", "./AxisBuilder", "../helper/SelectController", "../../echarts"], function (e) {
        function t(e, t, i) {
            return i && "axisAreaSelect" === i.type && t.findComponents({mainType: "parallelAxis", query: i})[0] === e
        }

        var i = e("zrender/core/util"), r = e("./AxisBuilder"), n = e("../helper/SelectController"),
            a = ["axisLine", "axisLabel", "axisTick", "axisName"], o = e("../../echarts").extendComponentView({
                type: "parallelAxis",
                _selectController: null,
                render: function (e, n, o, s) {
                    if (!t(e, n, s) && (this.axisModel = e, this.api = o, this.group.removeAll(), e.get("show"))) {
                        var l = n.getComponent("parallel", e.get("parallelIndex")).coordinateSystem,
                            c = e.getAreaSelectStyle(), u = c.width, h = l.getAxisLayout(e.axis.dim),
                            d = i.extend({strokeContainThreshold: u, silent: !(u > 0)}, h), p = new r(e, d);
                        i.each(a, p.add, p);
                        var f = p.getGroup();
                        this.group.add(f), this._buildSelectController(f, c, e, o)
                    }
                },
                _buildSelectController: function (e, t, r, a) {
                    var o = r.axis, s = this._selectController;
                    s || (s = this._selectController = new n("line", a.getZr(), t), s.on("selected", i.bind(this._onSelected, this))), s.enable(e);
                    var l = i.map(r.activeIntervals, function (e) {
                        return [o.dataToCoord(e[0], !0), o.dataToCoord(e[1], !0)]
                    });
                    s.update(l)
                },
                _onSelected: function (e) {
                    var t = this.axisModel, r = t.axis, n = i.map(e, function (e) {
                        return [r.coordToData(e[0], !0), r.coordToData(e[1], !0)]
                    });
                    this.api.dispatchAction({type: "axisAreaSelect", parallelAxisId: t.id, intervals: n})
                },
                remove: function () {
                    this._selectController && this._selectController.disable()
                },
                dispose: function () {
                    this._selectController && (this._selectController.dispose(), this._selectController = null)
                }
            });
        return o
    }),t("echarts/component/parallelAxis", ["require", "../coord/parallel/parallelCreator", "./axis/parallelAxisAction", "./axis/ParallelAxisView"], function (e) {
        e("../coord/parallel/parallelCreator"), e("./axis/parallelAxisAction"), e("./axis/ParallelAxisView")
    }),t("echarts/coord/parallel/parallelPreprocessor", ["require", "zrender/core/util", "../../util/model"], function (e) {
        function t(e) {
            if (!e.parallel) {
                var t = !1;
                r.each(e.series, function (e) {
                    e && "parallel" === e.type && (t = !0)
                }), t && (e.parallel = [{}])
            }
        }

        function i(e) {
            var t = n.normalizeToArray(e.parallelAxis);
            r.each(t, function (t) {
                if (r.isObject(t)) {
                    var i = t.parallelIndex || 0, a = n.normalizeToArray(e.parallel)[i];
                    a && a.parallelAxisDefault && r.merge(t, a.parallelAxisDefault, !1)
                }
            })
        }

        var r = e("zrender/core/util"), n = e("../../util/model");
        return function (e) {
            t(e), i(e)
        }
    }),t("echarts/component/parallel", ["require", "../coord/parallel/parallelCreator", "../coord/parallel/ParallelModel", "./parallelAxis", "../echarts", "../coord/parallel/parallelPreprocessor"], function (e) {
        e("../coord/parallel/parallelCreator"), e("../coord/parallel/ParallelModel"), e("./parallelAxis");
        var t = e("../echarts");
        t.extendComponentView({type: "parallel"}), t.registerPreprocessor(e("../coord/parallel/parallelPreprocessor"))
    }),t("echarts/chart/parallel/ParallelSeries", ["require", "../../data/List", "zrender/core/util", "../../model/Series"], function (e) {
        function t(e, t, i) {
            var n = e.get("data"), a = +t.replace("dim", "");
            n && n.length && r.each(i, function (e) {
                if (e) {
                    var t = r.indexOf(n, e[a]);
                    e[a] = t >= 0 ? t : NaN
                }
            })
        }

        var i = e("../../data/List"), r = e("zrender/core/util"), n = e("../../model/Series");
        return n.extend({
            type: "series.parallel",
            dependencies: ["parallel"],
            getInitialData: function (e, n) {
                var a = n.getComponent("parallel", this.get("parallelIndex")), o = a.dimensions,
                    s = a.parallelAxisIndex, l = e.data, c = r.map(o, function (e, i) {
                        var r = n.getComponent("parallelAxis", s[i]);
                        return "category" === r.get("type") ? (t(r, e, l), {name: e, type: "ordinal"}) : e
                    }), u = new i(c, this);
                return u.initData(l), u
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "parallel",
                parallelIndex: 0,
                label: {normal: {show: !1}, emphasis: {show: !1}},
                inactiveOpacity: .05,
                activeOpacity: 1,
                lineStyle: {normal: {width: 2, opacity: .45, type: "solid"}},
                animationEasing: "linear"
            }
        })
    }),t("echarts/chart/parallel/ParallelView", ["require", "../../util/graphic", "zrender/core/util", "../../view/Chart"], function (e) {
        function t(e, t, i) {
            var r = e.model, n = e.getRect(),
                o = new a.Rect({shape: {x: n.x, y: n.y, width: n.width, height: n.height}}),
                s = "horizontal" === r.get("layout") ? "width" : "height";
            return o.setShape(s, 0), a.initProps(o, {shape: {width: n.width, height: n.height}}, t, i), o
        }

        function i(e, t, i, r) {
            for (var a = 0, o = t.length - 1; o > a; a++) {
                var s = t[a], l = t[a + 1], c = e[a], u = e[a + 1];
                r(n(c, i.getAxis(s).type) || n(u, i.getAxis(l).type) ? null : [i.dataToPoint(c, s), i.dataToPoint(u, l)], a)
            }
        }

        function r(e) {
            return new a.Polyline({shape: {points: e}, silent: !0})
        }

        function n(e, t) {
            return "category" === t ? null == e : null == e || isNaN(e)
        }

        var a = e("../../util/graphic"), o = e("zrender/core/util"), s = e("../../view/Chart").extend({
            type: "parallel", init: function () {
                this._dataGroup = new a.Group, this.group.add(this._dataGroup), this._data
            }, render: function (e, n, s, l) {
                function c(e) {
                    var t = p.getValues(m, e), n = new a.Group;
                    d.add(n), i(t, m, g, function (e, t) {
                        e && n.add(r(e))
                    }), p.setItemGraphicEl(e, n)
                }

                function u(t, n) {
                    var o = p.getValues(m, t), s = f.getItemGraphicEl(n), l = [], c = 0;
                    i(o, m, g, function (t, i) {
                        var n = s.childAt(c++);
                        t && !n ? l.push(r(t)) : t && a.updateProps(n, {shape: {points: t}}, e)
                    });
                    for (var u = s.childCount() - 1; u >= c; u--) s.remove(s.childAt(u));
                    for (var u = 0, h = l.length; h > u; u++) s.add(l[u]);
                    p.setItemGraphicEl(t, s)
                }

                function h(e) {
                    var t = f.getItemGraphicEl(e);
                    d.remove(t)
                }

                var d = this._dataGroup, p = e.getData(), f = this._data, g = e.coordinateSystem, m = g.dimensions;
                p.diff(f).add(c).update(u).remove(h).execute(), p.eachItemGraphicEl(function (e, t) {
                    var i = p.getItemModel(t), r = i.getModel("lineStyle.normal");
                    e.eachChild(function (e) {
                        e.setStyle(o.extend(r.getLineStyle(), {
                            stroke: p.getItemVisual(t, "color"),
                            opacity: p.getItemVisual(t, "opacity")
                        }))
                    })
                }), this._data || d.setClipPath(t(g, e, function () {
                    d.removeClipPath()
                })), this._data = p
            }, remove: function () {
                this._dataGroup && this._dataGroup.removeAll(), this._data = null
            }
        });
        return s
    }),t("echarts/chart/parallel/parallelVisual", ["require"], function (e) {
        return function (e, t) {
            e.eachSeriesByType("parallel", function (t) {
                var i = t.getModel("itemStyle.normal"), r = e.get("color"),
                    n = i.get("color") || r[t.seriesIndex % r.length], a = t.get("inactiveOpacity"),
                    o = t.get("activeOpacity"), s = t.getModel("lineStyle.normal").getLineStyle(),
                    l = t.coordinateSystem, c = t.getData(), u = {normal: s.opacity, active: o, inactive: a};
                l.eachActiveState(c, function (e, t) {
                    c.setItemVisual(t, "opacity", u[e])
                }), c.setVisual("color", n)
            })
        }
    }),t("echarts/chart/parallel", ["require", "../echarts", "../component/parallel", "./parallel/ParallelSeries", "./parallel/ParallelView", "./parallel/parallelVisual"], function (e) {
        var t = e("../echarts");
        e("../component/parallel"), e("./parallel/ParallelSeries"), e("./parallel/ParallelView"), t.registerVisualCoding("chart", e("./parallel/parallelVisual"))
    }),t("echarts/chart/sankey/SankeySeries", ["require", "../../model/Series", "../helper/createGraphFromNodeEdge"], function (e) {
        var t = e("../../model/Series"), i = e("../helper/createGraphFromNodeEdge");
        return t.extend({
            type: "series.sankey",
            layoutInfo: null,
            getInitialData: function (e, t) {
                var r = e.edges || e.links, n = e.data || e.nodes;
                if (n && r) {
                    var a = i(n, r, this, !0);
                    return a.data
                }
            },
            getGraph: function () {
                return this.getData().graph
            },
            getEdgeData: function () {
                return this.getGraph().edgeData
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "view",
                layout: null,
                left: "5%",
                top: "5%",
                right: "20%",
                bottom: "5%",
                nodeWidth: 20,
                nodeGap: 8,
                layoutIterations: 32,
                label: {
                    normal: {show: !0, position: "right", textStyle: {color: "#000", fontSize: 12}},
                    emphasis: {show: !0}
                },
                itemStyle: {normal: {}, emphasis: {}},
                lineStyle: {normal: {color: "#314656", opacity: .2, curveness: .5}, emphasis: {opacity: .6}},
                color: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
                animationEasing: "linear",
                animationDuration: 1e3
            }
        })
    }),t("echarts/chart/sankey/SankeyView", ["require", "../../util/graphic", "../../util/model", "zrender/core/util", "../../echarts"], function (e) {
        function t(e, t, r) {
            var n = new i.Rect({
                shape: {
                    x: e.x - 10, y: e.y - 10, width: 0, height: e.height + 20
                }
            });
            return i.initProps(n, {shape: {width: e.width + 20, height: e.height + 20}}, t, r), n
        }

        var i = e("../../util/graphic"), r = e("../../util/model"), n = e("zrender/core/util"), a = i.extendShape({
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, cpx2: 0, cpy2: 0, extent: 0},
            buildPath: function (e, t) {
                var i = t.extent / 2;
                e.moveTo(t.x1, t.y1 - i), e.bezierCurveTo(t.cpx1, t.cpy1 - i, t.cpx2, t.cpy2 - i, t.x2, t.y2 - i), e.lineTo(t.x2, t.y2 + i), e.bezierCurveTo(t.cpx2, t.cpy2 + i, t.cpx1, t.cpy1 + i, t.x1, t.y1 + i), e.closePath()
            }
        });
        return e("../../echarts").extendChartView({
            type: "sankey", _model: null, render: function (e, o, s) {
                var l = e.getGraph(), c = this.group, u = e.layoutInfo;
                this._model = e, c.removeAll(), c.position = [u.x, u.y];
                var h = l.edgeData, d = e.option, p = r.createDataFormatModel(e, h, d.edges || d.links);
                p.formatTooltip = function (e) {
                    var t = this.getDataParams(e), i = t.data, r = i.source + " -- " + i.target;
                    return t.value && (r += ":" + t.value), r
                }, l.eachNode(function (t) {
                    var r = t.getLayout(), a = t.getModel(), o = a.getModel("label.normal"),
                        s = o.getModel("textStyle"), l = a.getModel("label.emphasis"), u = l.getModel("textStyle"),
                        h = new i.Rect({
                            shape: {x: r.x, y: r.y, width: t.getLayout().dx, height: t.getLayout().dy},
                            style: {
                                text: o.get("show") ? e.getFormattedLabel(t.dataIndex, "normal") || t.id : "",
                                textFont: s.getFont(),
                                textFill: s.getTextColor(),
                                textPosition: o.get("position")
                            }
                        });
                    h.setStyle(n.defaults({fill: t.getVisual("color")}, a.getModel("itemStyle.normal").getItemStyle())), i.setHoverStyle(h, n.extend(t.getModel("itemStyle.emphasis"), {
                        text: l.get("show") ? e.getFormattedLabel(t.dataIndex, "emphasis") || t.id : "",
                        textFont: u.getFont(),
                        textFill: u.getTextColor(),
                        textPosition: l.get("position")
                    })), c.add(h)
                }), l.eachEdge(function (e) {
                    var t = new a;
                    t.dataIndex = e.dataIndex, t.hostModel = p;
                    var r = e.getModel("lineStyle.normal"), n = r.get("curveness"), o = e.node1.getLayout(),
                        s = e.node2.getLayout(), l = e.getLayout();
                    t.shape.extent = Math.max(1, l.dy);
                    var u = o.x + o.dx, h = o.y + l.sy + l.dy / 2, d = s.x, f = s.y + l.ty + l.dy / 2,
                        g = u * (1 - n) + d * n, m = h, v = u * n + d * (1 - n), y = f;
                    t.setShape({
                        x1: u,
                        y1: h,
                        x2: d,
                        y2: f,
                        cpx1: g,
                        cpy1: m,
                        cpx2: v,
                        cpy2: y
                    }), t.setStyle(r.getItemStyle()), i.setHoverStyle(t, e.getModel("lineStyle.emphasis").getItemStyle()), c.add(t)
                }), this._data || c.setClipPath(t(c.getBoundingRect(), e, function () {
                    c.removeClipPath()
                })), this._data = e.getData()
            }
        })
    }),t("echarts/util/array/nest", ["require", "zrender/core/util"], function (e) {
        function t() {
            function e(t, n) {
                if (n >= r.length) return t;
                for (var a = -1, o = t.length, s = r[n++], l = {}, c = {}; ++a < o;) {
                    var u = s(t[a]), h = c[u];
                    h ? h.push(t[a]) : c[u] = [t[a]]
                }
                return i.each(c, function (t, i) {
                    l[i] = e(t, n)
                }), l
            }

            function t(e, a) {
                if (a >= r.length) return e;
                var o = [], s = n[a++];
                return i.each(e, function (e, i) {
                    o.push({key: i, values: t(e, a)})
                }), s ? o.sort(function (e, t) {
                    return s(e.key, t.key)
                }) : o
            }

            var r = [], n = [];
            return {
                key: function (e) {
                    return r.push(e), this
                }, sortKeys: function (e) {
                    return n[r.length - 1] = e, this
                }, entries: function (i) {
                    return t(e(i, 0), 0)
                }
            }
        }

        var i = e("zrender/core/util");
        return t
    }),t("echarts/chart/sankey/sankeyLayout", ["require", "../../util/layout", "../../util/array/nest", "zrender/core/util"], function (e) {
        function t(e, t) {
            return w.getLayoutRect(e.getBoxLayoutParams(), {width: t.getWidth(), height: t.getHeight()})
        }

        function i(e, t, i, r, a, o, l) {
            n(e, i, a), s(e, t, o, r, l), f(e)
        }

        function r(e) {
            S.each(e, function (e) {
                var t = v(e.outEdges, b), i = v(e.inEdges, b), r = Math.max(t, i);
                e.setLayout({value: r}, !0)
            })
        }

        function n(e, t, i) {
            for (var r = e, n = null, s = 0, l = 0; r.length;) n = [], S.each(r, function (e) {
                e.setLayout({x: s}, !0), e.setLayout({dx: t}, !0), S.each(e.outEdges, function (e) {
                    n.push(e.node2)
                })
            }), r = n, ++s;
            a(e, s), l = (i - t) / (s - 1), o(e, l)
        }

        function a(e, t) {
            S.each(e, function (e) {
                e.outEdges.length || e.setLayout({x: t - 1}, !0)
            })
        }

        function o(e, t) {
            S.each(e, function (e) {
                var i = e.getLayout().x * t;
                e.setLayout({x: i}, !0)
            })
        }

        function s(e, t, i, r, n) {
            var a = M().key(function (e) {
                return e.getLayout().x
            }).sortKeys(_).entries(e).map(function (e) {
                return e.values
            });
            l(e, a, t, i, r), c(a, r, i);
            for (var o = 1; n > 0; n--) o *= .99, u(a, o), c(a, r, i), d(a, o), c(a, r, i)
        }

        function l(e, t, i, r, n) {
            var a = [];
            S.each(t, function (e) {
                var t = e.length, i = 0;
                S.each(e, function (e) {
                    i += e.getLayout().value
                });
                var o = (r - (t - 1) * n) / i;
                a.push(o)
            }), a.sort(function (e, t) {
                return e - t
            });
            var o = a[0];
            S.each(t, function (e) {
                S.each(e, function (e, t) {
                    e.setLayout({y: t}, !0);
                    var i = e.getLayout().value * o;
                    e.setLayout({dy: i}, !0)
                })
            }), S.each(i, function (e) {
                var t = +e.getValue() * o;
                e.setLayout({dy: t}, !0)
            })
        }

        function c(e, t, i) {
            S.each(e, function (e) {
                var r, n, a, o = 0, s = e.length;
                for (e.sort(x), a = 0; s > a; a++) {
                    if (r = e[a], n = o - r.getLayout().y, n > 0) {
                        var l = r.getLayout().y + n;
                        r.setLayout({y: l}, !0)
                    }
                    o = r.getLayout().y + r.getLayout().dy + t
                }
                if (n = o - t - i, n > 0) {
                    var l = r.getLayout().y - n;
                    for (r.setLayout({y: l}, !0), o = r.getLayout().y, a = s - 2; a >= 0; --a) r = e[a], n = r.getLayout().y + r.getLayout().dy + t - o, n > 0 && (l = r.getLayout().y - n, r.setLayout({y: l}, !0)), o = r.getLayout().y
                }
            })
        }

        function u(e, t) {
            S.each(e.slice().reverse(), function (e) {
                S.each(e, function (e) {
                    if (e.outEdges.length) {
                        var i = v(e.outEdges, h) / v(e.outEdges, b), r = e.getLayout().y + (i - y(e)) * t;
                        e.setLayout({y: r}, !0)
                    }
                })
            })
        }

        function h(e) {
            return y(e.node2) * e.getValue()
        }

        function d(e, t) {
            S.each(e, function (e) {
                S.each(e, function (e) {
                    if (e.inEdges.length) {
                        var i = v(e.inEdges, p) / v(e.inEdges, b), r = e.getLayout().y + (i - y(e)) * t;
                        e.setLayout({y: r}, !0)
                    }
                })
            })
        }

        function p(e) {
            return y(e.node1) * e.getValue()
        }

        function f(e) {
            S.each(e, function (e) {
                e.outEdges.sort(g), e.inEdges.sort(m)
            }), S.each(e, function (e) {
                var t = 0, i = 0;
                S.each(e.outEdges, function (e) {
                    e.setLayout({sy: t}, !0), t += e.getLayout().dy
                }), S.each(e.inEdges, function (e) {
                    e.setLayout({ty: i}, !0), i += e.getLayout().dy
                })
            })
        }

        function g(e, t) {
            return e.node2.getLayout().y - t.node2.getLayout().y
        }

        function m(e, t) {
            return e.node1.getLayout().y - t.node1.getLayout().y
        }

        function v(e, t) {
            var i, r = 0, n = e.length, a = -1;
            if (1 === arguments.length) for (; ++a < n;) i = +e[a], isNaN(i) || (r += i); else for (; ++a < n;) i = +t.call(e, e[a], a), isNaN(i) || (r += i);
            return r
        }

        function y(e) {
            return e.getLayout().y + e.getLayout().dy / 2
        }

        function x(e, t) {
            return e.getLayout().y - t.getLayout().y
        }

        function _(e, t) {
            return t > e ? -1 : e > t ? 1 : e == t ? 0 : NaN
        }

        function b(e) {
            return e.getValue()
        }

        var w = e("../../util/layout"), M = e("../../util/array/nest"), S = e("zrender/core/util");
        return function (e, n) {
            e.eachSeriesByType("sankey", function (e) {
                var a = e.get("nodeWidth"), o = e.get("nodeGap"), s = t(e, n);
                e.layoutInfo = s;
                var l = s.width, c = s.height, u = e.getGraph(), h = u.nodes, d = u.edges;
                r(h);
                var p = h.filter(function (e) {
                    return 0 === e.getLayout().value
                }), f = 0 !== p.length ? 0 : e.get("layoutIterations");
                i(h, d, a, o, l, c, f)
            })
        }
    }),t("echarts/chart/sankey/sankeyVisual", ["require", "../../visual/VisualMapping"], function (e) {
        var t = e("../../visual/VisualMapping");
        return function (e, i) {
            e.eachSeriesByType("sankey", function (e) {
                var i = e.getGraph(), r = i.nodes;
                r.sort(function (e, t) {
                    return e.getLayout().value - t.getLayout().value
                });
                var n = r[0].getLayout().value, a = r[r.length - 1].getLayout().value;
                r.forEach(function (i) {
                    var r = new t({type: "color", mappingMethod: "linear", dataExtent: [n, a], visual: e.get("color")}),
                        o = r.mapValueToVisual(i.getLayout().value);
                    i.setVisual("color", o)
                })
            })
        }
    }),t("echarts/chart/sankey", ["require", "../echarts", "./sankey/SankeySeries", "./sankey/SankeyView", "./sankey/sankeyLayout", "./sankey/sankeyVisual"], function (e) {
        var t = e("../echarts");
        e("./sankey/SankeySeries"), e("./sankey/SankeyView"), t.registerLayout(e("./sankey/sankeyLayout")), t.registerVisualCoding("chart", e("./sankey/sankeyVisual"))
    }),t("echarts/chart/helper/WhiskerBoxDraw", ["require", "zrender/core/util", "../../util/graphic", "zrender/graphic/Path"], function (e) {
        function t(e, t, i, r) {
            o.Group.call(this), this.bodyIndex, this.whiskerIndex, this.styleUpdater = i, this._createContent(e, t, r), this.updateData(e, t, r), this._seriesModel
        }

        function i(e, t, i) {
            return a.map(e, function (e) {
                return e = e.slice(), e[t] = i.initBaseline, e
            })
        }

        function r(e) {
            var t = {};
            return a.each(e, function (e, i) {
                t["ends" + i] = e
            }), t
        }

        function n(e) {
            this.group = new o.Group, this.styleUpdater = e
        }

        var a = e("zrender/core/util"), o = e("../../util/graphic"), s = e("zrender/graphic/Path"), l = s.extend({
            type: "whiskerInBox", shape: {}, buildPath: function (e, t) {
                for (var i in t) if (0 === i.indexOf("ends")) {
                    var r = t[i];
                    e.moveTo(r[0][0], r[0][1]), e.lineTo(r[1][0], r[1][1])
                }
            }
        }), c = t.prototype;
        c._createContent = function (e, t, n) {
            var s = e.getItemLayout(t), c = "horizontal" === s.chartLayout ? 1 : 0, u = 0;
            this.add(new o.Polygon({
                shape: {points: n ? i(s.bodyEnds, c, s) : s.bodyEnds},
                style: {strokeNoScale: !0},
                z2: 100
            })), this.bodyIndex = u++;
            var h = a.map(s.whiskerEnds, function (e) {
                return n ? i(e, c, s) : e
            });
            this.add(new l({shape: r(h), style: {strokeNoScale: !0}, z2: 100})), this.whiskerIndex = u++
        }, c.updateData = function (e, t, i) {
            var n = this._seriesModel = e.hostModel, a = e.getItemLayout(t), s = o[i ? "initProps" : "updateProps"];
            s(this.childAt(this.bodyIndex), {shape: {points: a.bodyEnds}}, n), s(this.childAt(this.whiskerIndex), {shape: r(a.whiskerEnds)}, n), this.styleUpdater.call(null, this, e, t)
        }, a.inherits(t, o.Group);
        var u = n.prototype;
        return u.updateData = function (e) {
            var i = this.group, r = this._data, n = this.styleUpdater;
            e.diff(r).add(function (r) {
                if (e.hasValue(r)) {
                    var a = new t(e, r, n, !0);
                    e.setItemGraphicEl(r, a), i.add(a)
                }
            }).update(function (a, o) {
                var s = r.getItemGraphicEl(o);
                return e.hasValue(a) ? (s ? s.updateData(e, a) : s = new t(e, a, n), i.add(s), void e.setItemGraphicEl(a, s)) : void i.remove(s)
            }).remove(function (e) {
                var t = r.getItemGraphicEl(e);
                t && i.remove(t)
            }).execute(), this._data = e
        }, u.remove = function () {
            var e = this.group, t = this._data;
            this._data = null, t && t.eachItemGraphicEl(function (t) {
                t && e.remove(t)
            })
        }, n
    }),t("echarts/chart/helper/whiskerBoxCommon", ["require", "../../data/List", "../../data/helper/completeDimensions", "../helper/WhiskerBoxDraw"], function (e) {
        function t(e) {
            return null == e.value ? e : e.value
        }

        var i = e("../../data/List"), r = e("../../data/helper/completeDimensions"), n = e("../helper/WhiskerBoxDraw"),
            a = {
                _baseAxisDim: null, getInitialData: function (e, n) {
                    var a, o, s = n.getComponent("xAxis", this.get("xAxisIndex")),
                        l = n.getComponent("yAxis", this.get("yAxisIndex")), c = s.get("type"), u = l.get("type");
                    "category" === c ? (e.layout = "horizontal", a = s.getCategories(), o = !0) : "category" === u ? (e.layout = "vertical", a = l.getCategories(), o = !0) : e.layout = e.layout || "horizontal", this._baseAxisDim = "horizontal" === e.layout ? "x" : "y";
                    var h = e.data, d = this.dimensions = ["base"].concat(this.valueDimensions);
                    r(d, h);
                    var p = new i(d, this);
                    return p.initData(h, a ? a.slice() : null, function (e, i, r, n) {
                        var a = t(e);
                        return o ? "base" === i ? r : a[n - 1] : a[n]
                    }), p
                }, getDimensionsOnAxis: function (e) {
                    var t = this.valueDimensions.slice(), i = ["base"],
                        r = {horizontal: {x: i, y: t}, vertical: {x: t, y: i}};
                    return r[this.get("layout")][e]
                }, getBaseAxisModel: function () {
                    var e = this._baseAxisDim;
                    return this.ecModel.getComponent(e + "Axis", this.get(e + "AxisIndex"))
                }
            }, o = {
                init: function () {
                    var e = this._whiskerBoxDraw = new n(this.getStyleUpdater());
                    this.group.add(e.group)
                }, render: function (e, t, i) {
                    this._whiskerBoxDraw.updateData(e.getData())
                }, remove: function (e) {
                    this._whiskerBoxDraw.remove()
                }
            };
        return {seriesModelMixin: a, viewMixin: o}
    }),t("echarts/chart/boxplot/BoxplotSeries", ["require", "zrender/core/util", "../../model/Series", "../helper/whiskerBoxCommon"], function (e) {
        var t = e("zrender/core/util"), i = e("../../model/Series"), r = e("../helper/whiskerBoxCommon"), n = i.extend({
            type: "series.boxplot",
            dependencies: ["xAxis", "yAxis", "grid"],
            valueDimensions: ["min", "Q1", "median", "Q3", "max"],
            dimensions: null,
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                layout: null,
                boxWidth: [7, 50],
                itemStyle: {
                    normal: {color: "#fff", borderWidth: 1},
                    emphasis: {
                        borderWidth: 2,
                        shadowBlur: 5,
                        shadowOffsetX: 2,
                        shadowOffsetY: 2,
                        shadowColor: "rgba(0,0,0,0.4)"
                    }
                },
                animationEasing: "elasticOut",
                animationDuration: 800
            }
        });
        return t.mixin(n, r.seriesModelMixin, !0), n
    }),t("echarts/chart/boxplot/BoxplotView", ["require", "zrender/core/util", "../../view/Chart", "../../util/graphic", "../helper/whiskerBoxCommon"], function (e) {
        function t(e, t, i) {
            var r = t.getItemModel(i), a = r.getModel(s), o = t.getItemVisual(i, "color"),
                c = a.getItemStyle(["borderColor"]), u = e.childAt(e.whiskerIndex);
            u.style.set(c), u.style.stroke = o, u.dirty();
            var h = e.childAt(e.bodyIndex);
            h.style.set(c), h.style.stroke = o, h.dirty();
            var d = r.getModel(l).getItemStyle();
            n.setHoverStyle(e, d)
        }

        var i = e("zrender/core/util"), r = e("../../view/Chart"), n = e("../../util/graphic"),
            a = e("../helper/whiskerBoxCommon"), o = r.extend({
                type: "boxplot", getStyleUpdater: function () {
                    return t
                }
            });
        i.mixin(o, a.viewMixin, !0);
        var s = ["itemStyle", "normal"], l = ["itemStyle", "emphasis"];
        return o
    }),t("echarts/chart/boxplot/boxplotVisual", ["require"], function (e) {
        var t = ["itemStyle", "normal", "borderColor"];
        return function (e, i) {
            var r = e.get("color");
            e.eachRawSeriesByType("boxplot", function (i) {
                var n = r[i.seriesIndex % r.length], a = i.getData();
                a.setVisual({
                    legendSymbol: "roundRect",
                    color: i.get(t) || n
                }), e.isSeriesFiltered(i) || a.each(function (e) {
                    var i = a.getItemModel(e);
                    a.setItemVisual(e, {color: i.get(t, !0)})
                })
            })
        }
    }),t("echarts/chart/boxplot/boxplotLayout", ["require", "zrender/core/util", "../../util/number"], function (e) {
        function t(e) {
            var t = [], i = [];
            return e.eachSeriesByType("boxplot", function (e) {
                var r = e.getBaseAxisModel().axis, a = n.indexOf(i, r);
                0 > a && (a = i.length, i[a] = r, t[a] = {axis: r, seriesModels: []}), t[a].seriesModels.push(e)
            }), t
        }

        function i(e) {
            var t, i, r = e.axis, a = e.seriesModels, l = a.length, c = e.boxWidthList = [], u = e.boxOffsetList = [],
                h = [];
            if ("category" === r.type) i = r.getBandWidth(); else {
                var d = 0;
                s(a, function (e) {
                    d = Math.max(d, e.getData().count())
                }), t = r.getExtent(), Math.abs(t[1] - t[0]) / d
            }
            s(a, function (e) {
                var t = e.get("boxWidth");
                n.isArray(t) || (t = [t, t]), h.push([o(t[0], i) || 0, o(t[1], i) || 0])
            });
            var p = .8 * i - 2, f = p / l * .3, g = (p - f * (l - 1)) / l, m = g / 2 - p / 2;
            s(a, function (e, t) {
                u.push(m), m += f + g, c.push(Math.min(Math.max(g, h[t][0]), h[t][1]))
            })
        }

        function r(e, t, i) {
            var r = e.coordinateSystem, n = e.getData(), a = e.dimensions, o = e.get("layout"), s = i / 2;
            n.each(a, function () {
                function e(e) {
                    var i = [];
                    i[p] = h, i[f] = e;
                    var n;
                    return isNaN(h) || isNaN(e) ? n = [NaN, NaN] : (n = r.dataToPoint(i), n[p] += t), n
                }

                function i(e, t) {
                    var i = e.slice(), r = e.slice();
                    i[p] += s, r[p] -= s, t ? x.push(i, r) : x.push(r, i)
                }

                function l(e) {
                    var t = [e.slice(), e.slice()];
                    t[0][p] -= s, t[1][p] += s, y.push(t)
                }

                var c = arguments, u = a.length, h = c[0], d = c[u], p = "horizontal" === o ? 0 : 1, f = 1 - p,
                    g = e(c[3]), m = e(c[1]), v = e(c[5]), y = [[m, e(c[2])], [v, e(c[4])]];
                l(m), l(v), l(g);
                var x = [];
                i(y[0][1], 0), i(y[1][1], 1), n.setItemLayout(d, {
                    chartLayout: o,
                    initBaseline: g[f],
                    median: g,
                    bodyEnds: x,
                    whiskerEnds: y
                })
            })
        }

        var n = e("zrender/core/util"), a = e("../../util/number"), o = a.parsePercent, s = n.each;
        return function (e, n) {
            var a = t(e);
            s(a, function (e) {
                var t = e.seriesModels;
                t.length && (i(e), s(t, function (t, i) {
                    r(t, e.boxOffsetList[i], e.boxWidthList[i])
                }))
            })
        }
    }),t("echarts/chart/boxplot", ["require", "../echarts", "./boxplot/BoxplotSeries", "./boxplot/BoxplotView", "./boxplot/boxplotVisual", "./boxplot/boxplotLayout"], function (e) {
        var t = e("../echarts");
        e("./boxplot/BoxplotSeries"), e("./boxplot/BoxplotView"), t.registerVisualCoding("chart", e("./boxplot/boxplotVisual")), t.registerLayout(e("./boxplot/boxplotLayout"))
    }),t("echarts/chart/candlestick/CandlestickSeries", ["require", "zrender/core/util", "../../model/Series", "../helper/whiskerBoxCommon", "../../util/format"], function (e) {
        var t = e("zrender/core/util"), i = e("../../model/Series"), r = e("../helper/whiskerBoxCommon"),
            n = e("../../util/format"), a = n.encodeHTML, o = n.addCommas, s = i.extend({
                type: "series.candlestick",
                dependencies: ["xAxis", "yAxis", "grid"],
                valueDimensions: ["open", "close", "lowest", "highest"],
                dimensions: null,
                defaultOption: {
                    zlevel: 0,
                    z: 2,
                    coordinateSystem: "cartesian2d",
                    legendHoverLink: !0,
                    hoverAnimation: !0,
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    layout: null,
                    itemStyle: {
                        normal: {
                            color: "#c23531",
                            color0: "#314656",
                            borderWidth: 1,
                            borderColor: "#c23531",
                            borderColor0: "#314656"
                        }, emphasis: {borderWidth: 2}
                    },
                    animationUpdate: !1,
                    animationEasing: "linear",
                    animationDuration: 300
                },
                getShadowDim: function () {
                    return "open"
                },
                formatTooltip: function (e, i) {
                    var r = t.map(this.valueDimensions, function (t) {
                        return t + ": " + o(this._data.get(t, e))
                    }, this);
                    return a(this.name) + "<br />" + r.join("<br />")
                }
            });
        return t.mixin(s, r.seriesModelMixin, !0), s
    }),t("echarts/chart/candlestick/CandlestickView", ["require", "zrender/core/util", "../../view/Chart", "../../util/graphic", "../helper/whiskerBoxCommon"], function (e) {
        function t(e, t, i) {
            var r = t.getItemModel(i), a = r.getModel(s), o = t.getItemVisual(i, "color"),
                c = t.getItemVisual(i, "borderColor"),
                u = a.getItemStyle(["color", "color0", "borderColor", "borderColor0"]), h = e.childAt(e.whiskerIndex);
            h.style.set(u), h.style.stroke = c, h.dirty();
            var d = e.childAt(e.bodyIndex);
            d.style.set(u), d.style.fill = o, d.style.stroke = c, d.dirty();
            var p = r.getModel(l).getItemStyle();
            n.setHoverStyle(e, p)
        }

        var i = e("zrender/core/util"), r = e("../../view/Chart"), n = e("../../util/graphic"),
            a = e("../helper/whiskerBoxCommon"), o = r.extend({
                type: "candlestick", getStyleUpdater: function () {
                    return t
                }
            });
        i.mixin(o, a.viewMixin, !0);
        var s = ["itemStyle", "normal"], l = ["itemStyle", "emphasis"];
        return o
    }),t("echarts/chart/candlestick/preprocessor", ["require", "zrender/core/util"], function (e) {
        var t = e("zrender/core/util");
        return function (e) {
            e && t.isArray(e.series) && t.each(e.series, function (e) {
                t.isObject(e) && "k" === e.type && (e.type = "candlestick")
            })
        }
    }),t("echarts/chart/candlestick/candlestickVisual", ["require"], function (e) {
        var t = ["itemStyle", "normal", "borderColor"], i = ["itemStyle", "normal", "borderColor0"],
            r = ["itemStyle", "normal", "color"], n = ["itemStyle", "normal", "color0"];
        return function (e, a) {
            e.eachRawSeriesByType("candlestick", function (a) {
                var o = a.getData();
                o.setVisual({legendSymbol: "roundRect"}), e.isSeriesFiltered(a) || o.each(function (e) {
                    var a = o.getItemModel(e), s = o.getItemLayout(e).sign;
                    o.setItemVisual(e, {color: a.get(s > 0 ? r : n), borderColor: a.get(s > 0 ? t : i)})
                })
            })
        }
    }),t("echarts/chart/candlestick/candlestickLayout", ["require"], function (e) {
        function t(e, t) {
            var a, o = e.getBaseAxisModel().axis,
                s = "category" === o.type ? o.getBandWidth() : (a = o.getExtent(), Math.abs(a[1] - a[0]) / t.count());
            return s / 2 - 2 > r ? s / 2 - 2 : s - r > n ? r : Math.max(s - n, i)
        }

        var i = 2, r = 5, n = 4;
        return function (e, i) {
            e.eachSeriesByType("candlestick", function (e) {
                var i = e.coordinateSystem, r = e.getData(), n = e.dimensions, a = e.get("layout"), o = t(e, r);
                r.each(n, function () {
                    function e(e) {
                        var t = [];
                        return t[h] = c, t[d] = e, isNaN(c) || isNaN(e) ? [NaN, NaN] : i.dataToPoint(t)
                    }

                    function t(e, t) {
                        var i = e.slice(), r = e.slice();
                        i[h] += o / 2, r[h] -= o / 2, t ? S.push(i, r) : S.push(r, i)
                    }

                    var s = arguments, l = n.length, c = s[0], u = s[l], h = "horizontal" === a ? 0 : 1, d = 1 - h,
                        p = s[1], f = s[2], g = s[3], m = s[4], v = Math.min(p, f), y = Math.max(p, f), x = e(v),
                        _ = e(y), b = e(g), w = e(m), M = [[w, _], [b, x]], S = [];
                    t(_, 0), t(x, 1), r.setItemLayout(u, {
                        chartLayout: a,
                        sign: p > f ? -1 : f > p ? 1 : 0,
                        initBaseline: p > f ? _[d] : x[d],
                        bodyEnds: S,
                        whiskerEnds: M
                    })
                }, !0)
            })
        }
    }),t("echarts/chart/candlestick", ["require", "../echarts", "./candlestick/CandlestickSeries", "./candlestick/CandlestickView", "./candlestick/preprocessor", "./candlestick/candlestickVisual", "./candlestick/candlestickLayout"], function (e) {
        var t = e("../echarts");
        e("./candlestick/CandlestickSeries"), e("./candlestick/CandlestickView"), t.registerPreprocessor(e("./candlestick/preprocessor")), t.registerVisualCoding("chart", e("./candlestick/candlestickVisual")), t.registerLayout(e("./candlestick/candlestickLayout"))
    }),t("echarts/chart/effectScatter/EffectScatterSeries", ["require", "../helper/createListFromArray", "../../model/Series"], function (e) {
        var t = e("../helper/createListFromArray"), i = e("../../model/Series");
        return i.extend({
            type: "series.effectScatter",
            dependencies: ["grid", "polar"],
            getInitialData: function (e, i) {
                var r = t(e.data, this, i);
                return r
            },
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                effectType: "ripple",
                showEffectOn: "render",
                rippleEffect: {period: 4, scale: 2.5, brushType: "fill"},
                xAxisIndex: 0,
                yAxisIndex: 0,
                polarIndex: 0,
                geoIndex: 0,
                symbolSize: 10
            }
        })
    }),t("echarts/chart/helper/EffectSymbol", ["require", "zrender/core/util", "../../util/symbol", "../../util/graphic", "../../util/number", "./Symbol"], function (e) {
        function t(e) {
            return r.isArray(e) || (e = [+e, +e]), e
        }

        function i(e, t) {
            l.call(this);
            var i = new s(e, t), r = new l;
            this.add(i), this.add(r), r.beforeUpdate = function () {
                this.attr(i.getScale())
            }, this.updateData(e, t)
        }

        var r = e("zrender/core/util"), n = e("../../util/symbol"), a = e("../../util/graphic"),
            o = e("../../util/number"), s = e("./Symbol"), l = a.Group, c = 3, u = i.prototype;
        return u.stopEffectAnimation = function () {
            this.childAt(1).removeAll()
        }, u.startEffectAnimation = function (e, t, i, r, a, o) {
            for (var s = this._symbolType, l = this._color, u = this.childAt(1), h = 0; c > h; h++) {
                var d = n.createSymbol(s, -.5, -.5, 1, 1, l);
                d.attr({
                    style: {stroke: "stroke" === t ? l : null, fill: "fill" === t ? l : null, strokeNoScale: !0},
                    z2: 99,
                    silent: !0,
                    scale: [1, 1],
                    z: a,
                    zlevel: o
                });
                var p = -h / c * e + r;
                d.animate("", !0).when(e, {scale: [i, i]}).delay(p).start(), d.animateStyle(!0).when(e, {opacity: 0}).delay(p).start(), u.add(d)
            }
        }, u.highlight = function () {
            this.trigger("emphasis")
        }, u.downplay = function () {
            this.trigger("normal")
        }, u.updateData = function (e, i) {
            function r() {
                b.trigger("emphasis"), "render" !== f && this.startEffectAnimation(v, m, g, y, x, _)
            }

            function n() {
                b.trigger("normal"), "render" !== f && this.stopEffectAnimation()
            }

            var a = e.hostModel;
            this.childAt(0).updateData(e, i);
            var s = this.childAt(1), l = e.getItemModel(i), c = e.getItemVisual(i, "symbol"),
                u = t(e.getItemVisual(i, "symbolSize")), h = e.getItemVisual(i, "color");
            s.attr("scale", u), s.traverse(function (e) {
                e.attr({fill: h})
            });
            var d = l.getShallow("symbolOffset");
            if (d) {
                var p = s.position;
                p[0] = o.parsePercent(d[0], u[0]), p[1] = o.parsePercent(d[1], u[1])
            }
            this._symbolType = c, this._color = h;
            var f = a.get("showEffectOn"), g = l.get("rippleEffect.scale"), m = l.get("rippleEffect.brushType"),
                v = 1e3 * l.get("rippleEffect.period"), y = i / e.count(), x = l.getShallow("z") || 0,
                _ = l.getShallow("zlevel") || 0;
            this.stopEffectAnimation(), "render" === f && this.startEffectAnimation(v, m, g, y, x, _);
            var b = this.childAt(0);
            this.on("mouseover", r, this).on("mouseout", n, this).on("emphasis", r, this).on("normal", n, this)
        }, u.fadeOut = function (e) {
            e && e()
        }, r.inherits(i, l), i
    }),t("echarts/chart/effectScatter/EffectScatterView", ["require", "../helper/SymbolDraw", "../helper/EffectSymbol", "../../echarts"], function (e) {
        var t = e("../helper/SymbolDraw"), i = e("../helper/EffectSymbol");
        e("../../echarts").extendChartView({
            type: "effectScatter", init: function () {
                this._symbolDraw = new t(i)
            }, render: function (e, t, i) {
                var r = e.getData(), n = this._symbolDraw;
                n.updateData(r), this.group.add(n.group)
            }, updateLayout: function () {
                this._symbolDraw.updateLayout()
            }, remove: function (e, t) {
                this._symbolDraw && this._symbolDraw.remove(t)
            }
        })
    }),t("echarts/chart/effectScatter", ["require", "zrender/core/util", "../echarts", "./effectScatter/EffectScatterSeries", "./effectScatter/EffectScatterView", "../visual/symbol", "../layout/points"], function (e) {
        var t = e("zrender/core/util"), i = e("../echarts");
        e("./effectScatter/EffectScatterSeries"), e("./effectScatter/EffectScatterView"), i.registerVisualCoding("chart", t.curry(e("../visual/symbol"), "effectScatter", "circle", null)), i.registerLayout(t.curry(e("../layout/points"), "effectScatter"))
    }),t("echarts/chart/lines/LinesSeries", ["require", "../../model/Series", "../../data/List", "zrender/core/util"], function (e) {
        var t = e("../../model/Series"), i = e("../../data/List"), r = e("zrender/core/util");
        return t.extend({
            type: "series.lines",
            dependencies: ["grid", "polar"],
            getInitialData: function (e, t) {
                function n(e, t, i, r) {
                    return e.coord && e.coord[r]
                }

                var a = [], o = [], s = [];
                r.each(e.data, function (e) {
                    a.push(e[0]), o.push(e[1]), s.push(r.extend(r.extend({}, r.isArray(e[0]) ? null : e[0]), r.isArray(e[1]) ? null : e[1]))
                });
                var l = e.coordinateSystem;
                if ("cartesian2d" !== l && "geo" !== l) throw new Error("Coordinate system can only be cartesian2d or geo in lines");
                var c = "geo" === l ? ["lng", "lat"] : ["x", "y"], u = new i(c, this), h = new i(c, this),
                    d = new i(["value"], this);
                return u.initData(a, null, n), h.initData(o, null, n), d.initData(s), this.fromData = u, this.toData = h, d
            },
            formatTooltip: function (e) {
                var t = this.fromData.getName(e), i = this.toData.getName(e);
                return t + " > " + i
            },
            defaultOption: {
                coordinateSystem: "geo",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                geoIndex: 0,
                effect: {show: !1, period: 4, symbol: "circle", symbolSize: 3, trailLength: .2},
                large: !1,
                largeThreshold: 2e3,
                label: {normal: {show: !1, position: "end"}},
                lineStyle: {normal: {opacity: .5}}
            }
        })
    }),t("echarts/chart/helper/EffectLine", ["require", "../../util/graphic", "./Line", "zrender/core/util", "../../util/symbol", "zrender/core/curve"], function (e) {
        function t(e, t, i, r) {
            n.Group.call(this);
            var o = new a(e, t, i, r);
            this.add(o), this._updateEffectSymbol(e, r)
        }

        function i(e, t) {
            e.__p1 = t[0], e.__p2 = t[1], e.__cp1 = t[2] || [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
        }

        function r() {
            var e = this.__p1, t = this.__p2, i = this.__cp1, r = this.__t, n = this.position, a = l.quadraticAt,
                o = l.quadraticDerivativeAt;
            n[0] = a(e[0], i[0], t[0], r), n[1] = a(e[1], i[1], t[1], r);
            var s = o(e[0], i[0], t[0], r), c = o(e[1], i[1], t[1], r);
            this.rotation = -Math.atan2(c, s) - Math.PI / 2, this.ignore = !1
        }

        var n = e("../../util/graphic"), a = e("./Line"), o = e("zrender/core/util"), s = e("../../util/symbol"),
            l = e("zrender/core/curve"), c = t.prototype;
        return c._updateEffectSymbol = function (e, t) {
            var n = e.getItemModel(t), a = n.getModel("effect"), l = a.get("symbolSize"), c = a.get("symbol");
            o.isArray(l) || (l = [l, l]);
            var u = a.get("color") || e.getItemVisual(t, "color"), h = this.childAt(1), d = 1e3 * a.get("period");
            (this._symbolType !== c || d !== this._period) && (h = s.createSymbol(c, -.5, -.5, 1, 1, u), h.ignore = !0, h.z2 = 100, this._symbolType = c, this._period = d, this.add(h), h.__t = 0, h.animate("", !0).when(d, {__t: 1}).delay(t / e.count() * d / 2).during(o.bind(r, h)).start()), h.setStyle("shadowColor", u), h.setStyle(a.getItemStyle(["color"])), h.attr("scale", l);
            var p = e.getItemLayout(t);
            i(h, p), h.setColor(u), h.attr("scale", l)
        }, c.updateData = function (e, t, i, r) {
            this.childAt(0).updateData(e, t, i, r), this._updateEffectSymbol(e, r)
        }, c.updateLayout = function (e, t, r, n) {
            this.childAt(0).updateLayout(e, t, r, n);
            var a = this.childAt(1), o = e.getItemLayout(n);
            i(a, o)
        }, o.inherits(t, n.Group), t
    }),t("echarts/chart/lines/LinesView", ["require", "../helper/LineDraw", "../helper/EffectLine", "../helper/Line", "../../echarts"], function (e) {
        var t = e("../helper/LineDraw"), i = e("../helper/EffectLine"), r = e("../helper/Line");
        e("../../echarts").extendChartView({
            type: "lines", init: function () {
            }, render: function (e, n, a) {
                var o = e.getData(), s = this._lineDraw, l = e.get("effect.show");
                l !== this._hasEffet && (s && s.remove(), s = this._lineDraw = new t(l ? i : r), this._hasEffet = l);
                var c = e.get("zlevel"), u = e.get("effect.trailLength"), h = a.getZr();
                h.painter.getLayer(c).clear(!0), null != this._lastZlevel && h.configLayer(this._lastZlevel, {motionBlur: !1}), l && u && h.configLayer(c, {
                    motionBlur: !0,
                    lastFrameAlpha: Math.max(Math.min(u / 10 + .9, 1), 0)
                }), this.group.add(s.group), s.updateData(o), this._lastZlevel = c
            }, updateLayout: function (e, t, i) {
                this._lineDraw.updateLayout();
                var r = i.getZr();
                r.painter.getLayer(this._lastZlevel).clear(!0)
            }, remove: function (e, t) {
                this._lineDraw && this._lineDraw.remove(t, !0)
            }
        })
    }),t("echarts/chart/lines/linesLayout", ["require"], function (e) {
        return function (e) {
            e.eachSeriesByType("lines", function (e) {
                var t = e.coordinateSystem, i = e.fromData, r = e.toData, n = e.getData(), a = t.dimensions;
                i.each(a, function (e, r, n) {
                    i.setItemLayout(n, t.dataToPoint([e, r]))
                }), r.each(a, function (e, i, n) {
                    r.setItemLayout(n, t.dataToPoint([e, i]))
                }), n.each(function (e) {
                    var t, a = i.getItemLayout(e), o = r.getItemLayout(e),
                        s = n.getItemModel(e).get("lineStyle.normal.curveness");
                    s > 0 && (t = [(a[0] + o[0]) / 2 - (a[1] - o[1]) * s, (a[1] + o[1]) / 2 - (o[0] - a[0]) * s]), n.setItemLayout(e, [a, o, t])
                })
            })
        }
    }),t("echarts/chart/lines", ["require", "./lines/LinesSeries", "./lines/LinesView", "zrender/core/util", "../echarts", "./lines/linesLayout", "../visual/seriesColor"], function (e) {
        e("./lines/LinesSeries"), e("./lines/LinesView");
        var t = e("zrender/core/util"), i = e("../echarts");
        i.registerLayout(e("./lines/linesLayout")), i.registerVisualCoding("chart", t.curry(e("../visual/seriesColor"), "lines", "lineStyle"))
    }),t("echarts/chart/heatmap/HeatmapSeries", ["require", "../../model/Series", "../helper/createListFromArray"], function (e) {
        var t = e("../../model/Series"), i = e("../helper/createListFromArray");
        return t.extend({
            type: "series.heatmap",
            getInitialData: function (e, t) {
                return i(e.data, this, t)
            },
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                xAxisIndex: 0,
                yAxisIndex: 0,
                geoIndex: 0,
                blurSize: 20
            }
        })
    }),t("echarts/chart/heatmap/HeatmapLayer", ["require", "zrender/core/util"], function (e) {
        function t() {
            var e = n.createCanvas();
            this.canvas = e, this.blurSize = 30, this.opacity = 1, this._gradientPixels = {}
        }

        var i = 20, r = 256, n = e("zrender/core/util");
        return t.prototype = {
            update: function (e, t, n, a, o, s) {
                var l = this._getBrush(), c = this._getGradient(e, o, "inRange"),
                    u = this._getGradient(e, o, "outOfRange"), h = i + this.blurSize, d = this.canvas,
                    p = d.getContext("2d"), f = e.length;
                d.width = t, d.height = n;
                for (var g = 0; f > g; ++g) {
                    var m = e[g], v = m[0], y = m[1], x = m[2], _ = a(x);
                    p.globalAlpha = _, p.drawImage(l, v - h, y - h)
                }
                for (var b = p.getImageData(0, 0, d.width, d.height), w = b.data, M = 0, S = w.length; S > M;) {
                    var _ = w[M + 3] / 256, A = 4 * Math.floor(_ * (r - 1));
                    if (_ > 0) {
                        var z = s(_) ? c : u;
                        w[M++] = z[A], w[M++] = z[A + 1], w[M++] = z[A + 2], w[M++] *= this.opacity * z[A + 3]
                    } else M += 4
                }
                return p.putImageData(b, 0, 0), d
            }, _getBrush: function () {
                var e = this._brushCanvas || (this._brushCanvas = n.createCanvas()), t = i + this.blurSize, r = 2 * t;
                e.width = r, e.height = r;
                var a = e.getContext("2d");
                return a.clearRect(0, 0, r, r), a.shadowOffsetX = r, a.shadowBlur = this.blurSize, a.shadowColor = "#000", a.beginPath(), a.arc(-t, t, i, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), e
            }, _getGradient: function (e, t, i) {
                for (var r = this._gradientPixels, n = r[i] || (r[i] = new Uint8ClampedArray(1024)), a = [], o = 0, s = 0; 256 > s; s++) t[i](s / 255, !0, a), n[o++] = a[0], n[o++] = a[1], n[o++] = a[2], n[o++] = a[3];
                return n
            }
        }, t
    }),t("echarts/chart/heatmap/HeatmapView", ["require", "../../util/graphic", "./HeatmapLayer", "zrender/core/util", "../../echarts"], function (e) {
        function t(e, t, i) {
            var r = e[1] - e[0];
            t = a.map(t, function (t) {
                return {interval: [(t.interval[0] - e[0]) / r, (t.interval[1] - e[0]) / r]}
            });
            var n = t.length, o = 0;
            return function (e) {
                for (var r = o; n > r; r++) {
                    var a = t[r].interval;
                    if (a[0] <= e && e <= a[1]) {
                        o = r;
                        break
                    }
                }
                if (r === n) for (var r = o - 1; r >= 0; r--) {
                    var a = t[r].interval;
                    if (a[0] <= e && e <= a[1]) {
                        o = r;
                        break
                    }
                }
                return r >= 0 && n > r && i[r]
            }
        }

        function i(e, t) {
            var i = e[1] - e[0];
            return t = [(t[0] - e[0]) / i, (t[1] - e[0]) / i], function (e) {
                return e >= t[0] && e <= t[1]
            }
        }

        var r = e("../../util/graphic"), n = e("./HeatmapLayer"), a = e("zrender/core/util");
        return e("../../echarts").extendChartView({
            type: "heatmap", render: function (e, t, i) {
                var r;
                if (t.eachComponent("visualMap", function (t) {
                    t.eachTargetSeries(function (i) {
                        i === e && (r = t)
                    })
                }), !r) throw new Error("Heatmap must use with visualMap");
                this.group.removeAll();
                var n = e.coordinateSystem;
                "cartesian2d" === n.type ? this._renderOnCartesian(n, e, i) : "geo" === n.type && this._renderOnGeo(n, e, r, i)
            }, _renderOnCartesian: function (e, t, i) {
                var n = e.getAxis("x"), a = e.getAxis("y"), o = this.group;
                if ("category" !== n.type || "category" !== a.type) throw new Error("Heatmap on cartesian must have two category axes");
                if (!n.onBand || !a.onBand) throw new Error("Heatmap on cartesian must have two axes with boundaryGap true");
                var s = n.getBandWidth(), l = a.getBandWidth(), c = t.getData();
                c.each(["x", "y", "z"], function (i, n, a, u) {
                    var h = c.getItemModel(u), d = e.dataToPoint([i, n]);
                    if (!isNaN(a)) {
                        var p = new r.Rect({
                                shape: {x: d[0] - s / 2, y: d[1] - l / 2, width: s, height: l},
                                style: {fill: c.getItemVisual(u, "color")}
                            }), f = h.getModel("itemStyle.normal").getItemStyle(["color"]),
                            g = h.getModel("itemStyle.emphasis").getItemStyle(), m = h.getModel("label.normal"),
                            v = h.getModel("label.emphasis"), y = t.getRawValue(u), x = "-";
                        y && null != y[2] && (x = y[2]), m.get("show") && (r.setText(f, m), f.text = t.getFormattedLabel(u, "normal") || x), v.get("show") && (r.setText(g, v), g.text = t.getFormattedLabel(u, "emphasis") || x), p.setStyle(f), r.setHoverStyle(p, g), o.add(p), c.setItemGraphicEl(u, p)
                    }
                })
            }, _renderOnGeo: function (e, a, o, s) {
                var l = o.targetVisuals.inRange, c = o.targetVisuals.outOfRange, u = a.getData(),
                    h = this._hmLayer || this._hmLayer || new n;
                h.blurSize = a.get("blurSize");
                var d = e.getViewRect().clone(), p = e.getRoamTransform();
                d.applyTransform(p);
                var f = Math.max(d.x, 0), g = Math.max(d.y, 0), m = Math.min(d.width + d.x, s.getWidth()),
                    v = Math.min(d.height + d.y, s.getHeight()), y = m - f, x = v - g,
                    _ = u.mapArray(["lng", "lat", "value"], function (t, i, r) {
                        var n = e.dataToPoint([t, i]);
                        return n[0] -= f, n[1] -= g, n.push(r), n
                    }), b = o.getExtent(),
                    w = "visualMap.continuous" === o.type ? i(b, o.option.range) : t(b, o.getPieceList(), o.option.selected);
                h.update(_, y, x, l.color.getNormalizer(), {
                    inRange: l.color.getColorMapper(),
                    outOfRange: c.color.getColorMapper()
                }, w);
                var M = new r.Image({style: {width: y, height: x, x: f, y: g, image: h.canvas}, silent: !0});
                this.group.add(M)
            }
        })
    }),t("echarts/chart/heatmap", ["require", "./heatmap/HeatmapSeries", "./heatmap/HeatmapView"], function (e) {
        e("./heatmap/HeatmapSeries"), e("./heatmap/HeatmapView")
    }),t("echarts/component/geo/GeoView", ["require", "../helper/MapDraw", "../../echarts"], function (e) {
        var t = e("../helper/MapDraw");
        return e("../../echarts").extendComponentView({
            type: "geo", init: function (e, i) {
                var r = new t(i, !0);
                this._mapDraw = r, this.group.add(r.group)
            }, render: function (e, t, i) {
                e.get("show") && this._mapDraw.draw(e, t, i)
            }
        })
    }),t("echarts/component/geo", ["require", "../coord/geo/geoCreator", "./geo/GeoView", "../action/geoRoam"], function (e) {
        e("../coord/geo/geoCreator"), e("./geo/GeoView"), e("../action/geoRoam")
    }),t("echarts/component/title", ["require", "../echarts", "../util/graphic", "../util/layout"], function (e) {
        var t = e("../echarts"), i = e("../util/graphic"), r = e("../util/layout");
        t.extendComponentModel({
            type: "title",
            defaultOption: {
                zlevel: 0,
                z: 6,
                show: !0,
                text: "",
                target: "blank",
                subtext: "",
                subtarget: "blank",
                left: "left",
                top: "top",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
                subtextStyle: {color: "#aaa"}
            }
        }), t.extendComponentView({
            type: "title", render: function (e, t, n) {
                if (this.group.removeAll(), e.get("show")) {
                    var a = this.group, o = e.getModel("textStyle"), s = e.getModel("subtextStyle"),
                        l = e.get("textAlign"), c = new i.Text({
                            style: {
                                text: e.get("text"),
                                textFont: o.getFont(),
                                fill: o.getTextColor(),
                                textBaseline: "top"
                            }, z2: 10
                        }), u = c.getBoundingRect(), h = e.get("subtext"), d = new i.Text({
                            style: {
                                text: h,
                                textFont: s.getFont(),
                                fill: s.getTextColor(),
                                y: u.height + e.get("itemGap"),
                                textBaseline: "top"
                            }, z2: 10
                        }), p = e.get("link"), f = e.get("sublink");
                    c.silent = !p, d.silent = !f, p && c.on("click", function () {
                        window.open(p, e.get("target"))
                    }), f && d.on("click", function () {
                        window.open(f, e.get("subtarget"))
                    }), a.add(c), h && a.add(d);
                    var g = a.getBoundingRect(), m = e.getBoxLayoutParams();
                    m.width = g.width, m.height = g.height;
                    var v = r.getLayoutRect(m, {width: n.getWidth(), height: n.getHeight()}, e.get("padding"));
                    if (!l) {
                        var y = v.x / n.getWidth(), x = (v.x + v.width) / n.getWidth();
                        .2 > y ? l = "left" : x > .8 ? (v.x += v.width, l = "right") : (v.x += v.width / 2, l = "center")
                    }
                    a.position = [v.x, v.y], c.setStyle("textAlign", l), d.setStyle("textAlign", l), g = a.getBoundingRect();
                    var _ = v.margin, b = e.getItemStyle(["color", "opacity"]);
                    b.fill = e.get("backgroundColor");
                    var w = new i.Rect({
                        shape: {
                            x: g.x - _[3],
                            y: g.y - _[0],
                            width: g.width + _[1] + _[3],
                            height: g.height + _[0] + _[2]
                        }, style: b, silent: !0
                    });
                    i.subPixelOptimizeRect(w), a.add(w)
                }
            }
        })
    }),t("echarts/component/dataZoom/typeDefaulter", ["require", "../../model/Component"], function (e) {
        e("../../model/Component").registerSubTypeDefaulter("dataZoom", function (e) {
            return "slider"
        })
    }),t("echarts/component/dataZoom/AxisProxy", ["require", "zrender/core/util", "../../util/number"], function (e) {
        function t(e, t) {
            var i = [Number.MAX_VALUE, Number.MIN_VALUE];
            return o(t, function (t) {
                var r = t.getData();
                r && o(t.getDimensionsOnAxis(e), function (e) {
                    var t = r.getDataExtent(e);
                    t[0] < i[0] && (i[0] = t[0]), t[1] > i[1] && (i[1] = t[1])
                })
            }, this), i
        }

        function i(e, t, i) {
            var n = [0, 100], l = e.option, c = [l.start, l.end], u = [l.startValue, l.endValue], h = ["floor", "ceil"];
            return o([0, 1], function (e) {
                var o, s = u[e], l = !0;
                r(s) && (o = c[e], r(o) && (o = n[e]), s = a.linearMap(o, n, t, !0), l = !1), i && (s = Math[h[e]](s)), l && (o = a.linearMap(s, t, n, !0)), u[e] = s, c[e] = o
            }), {valueWindow: s(u), percentWindow: s(c)}
        }

        function r(e) {
            return isNaN(e) || null == e
        }

        var n = e("zrender/core/util"), a = e("../../util/number"), o = n.each, s = a.asc, l = function (e, t, i, r) {
            this._dimName = e, this._axisIndex = t, this._backup, this._valueWindow, this._percentWindow, this._dataExtent, this.ecModel = r, this._model = i
        };
        return l.prototype = {
            constructor: l, hostedBy: function (e) {
                return this._model === e
            }, backup: function (e, t) {
                e === this._model && (this._backup = t)
            }, getBackup: function () {
                return n.clone(this._backup)
            }, getDataExtent: function () {
                return this._dataExtent.slice()
            }, getDataValueWindow: function () {
                return this._valueWindow.slice()
            }, getDataPercentWindow: function () {
                return this._percentWindow.slice()
            }, getTargetSeriesModels: function () {
                var e = [];
                return this.ecModel.eachSeries(function (t) {
                    this._axisIndex === t.get(this._dimName + "AxisIndex") && e.push(t)
                }, this), e
            }, getAxisModel: function () {
                return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
            }, getOtherAxisModel: function () {
                var e, t, i = this._dimName, r = this.ecModel, n = this.getAxisModel(), a = "x" === i || "y" === i;
                a ? (t = "gridIndex", e = "x" === i ? "y" : "x") : (t = "polarIndex", e = "angle" === i ? "radius" : "angle");
                var o;
                return r.eachComponent(e + "Axis", function (e) {
                    (e.get(t) || 0) === (n.get(t) || 0) && (o = e)
                }), o
            }, reset: function (e) {
                if (e === this._model) {
                    var r = this._dimName, n = this.getAxisModel(), a = "category" === n.get("type"),
                        o = this.getTargetSeriesModels(), s = t(r, o), l = i(e, s, a);
                    this._dataExtent = s.slice(), this._valueWindow = l.valueWindow.slice(), this._percentWindow = l.percentWindow.slice()
                }
            }, filterData: function (e) {
                function t(e) {
                    return e >= a[0] && e <= a[1]
                }

                if (e === this._model) {
                    var i = this._dimName, r = this.getTargetSeriesModels(), n = e.get("filterMode"),
                        a = this._valueWindow, s = this.getOtherAxisModel();
                    e.get("$fromToolbox") && s && "category" === s.get("type") && (n = "empty"), o(r, function (e) {
                        var r = e.getData();
                        r && o(e.getDimensionsOnAxis(i), function (i) {
                            "empty" === n ? e.setData(r.map(i, function (e) {
                                return t(e) ? e : NaN
                            })) : r.filterSelf(i, t)
                        })
                    })
                }
            }
        }, l
    }),t("echarts/component/dataZoom/DataZoomModel", ["require", "zrender/core/util", "zrender/core/env", "../../echarts", "../../util/model", "./AxisProxy"], function (e) {
        var t = e("zrender/core/util"), i = e("zrender/core/env"), r = e("../../echarts"), n = e("../../util/model"),
            a = e("./AxisProxy"), o = t.each, s = n.eachAxisDim;
        return r.extendComponentModel({
            type: "dataZoom",
            dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "series"],
            defaultOption: {
                zlevel: 0,
                z: 4,
                orient: null,
                xAxisIndex: null,
                yAxisIndex: null,
                filterMode: "filter",
                throttle: 100,
                start: 0,
                end: 100,
                startValue: null,
                endValue: null
            },
            init: function (e, t, i) {
                this._autoMode, this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this.mergeDefaultAndTheme(e, i), this.mergeOption({}, !0)
            },
            mergeOption: function (e, r) {
                var n = this.option;
                e && t.merge(n, e), i.canvasSupported || (n.realtime = !1), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(e, r), this._giveAxisProxies(), this._backup()
            },
            _giveAxisProxies: function () {
                var e = this._axisProxies;
                this.eachTargetAxis(function (t, i, r, n) {
                    var o = this.dependentModels[t.axis][i],
                        s = o.__dzAxisProxy || (o.__dzAxisProxy = new a(t.name, i, this, n));
                    e[t.name + "_" + i] = s
                }, this)
            },
            _resetTarget: function (e, t) {
                this._resetAutoMode(e, t);
                var i = this.option;
                s(function (e) {
                    var t = e.axisIndex;
                    i[t] = "axisIndex" === r ? [] : n.normalizeToArray(i[t])
                }, this);
                var r = this._autoMode;
                "axisIndex" === r ? this._autoSetAxisIndex() : "orient" === r && this._autoSetOrient()
            },
            _resetAutoMode: function (e, t) {
                var i = t ? this.option : e, r = !1;
                s(function (e) {
                    null != i[e.axisIndex] && (r = !0)
                }, this);
                var n = i.orient;
                null == n && r ? this._autoMode = "orient" : (null == n && (this.option.orient = "horizontal"), r || (this._autoMode = "axisIndex"))
            },
            _autoSetAxisIndex: function () {
                var e = "axisIndex" === this._autoMode, i = this.get("orient"), r = this.option;
                if (e) {
                    var n = "vertical" === i ? {dim: "y", axisIndex: "yAxisIndex", axis: "yAxis"} : {
                        dim: "x",
                        axisIndex: "xAxisIndex",
                        axis: "xAxis"
                    };
                    this.dependentModels[n.axis].length && (r[n.axisIndex] = [0], e = !1)
                }
                e && s(function (t) {
                    if (e) {
                        var i = [], n = this.dependentModels[t.axis];
                        if (n.length && !i.length) for (var a = 0, o = n.length; o > a; a++) "category" === n[a].get("type") && i.push(a);
                        r[t.axisIndex] = i, i.length && (e = !1)
                    }
                }, this), e && this.ecModel.eachSeries(function (e) {
                    this._isSeriesHasAllAxesTypeOf(e, "value") && s(function (i) {
                        var n = r[i.axisIndex], a = e.get(i.axisIndex);
                        t.indexOf(n, a) < 0 && n.push(a)
                    })
                }, this)
            },
            _autoSetOrient: function () {
                var e;
                this.eachTargetAxis(function (t) {
                    !e && (e = t.name)
                }, this), this.option.orient = "y" === e ? "vertical" : "horizontal"
            },
            _isSeriesHasAllAxesTypeOf: function (e, t) {
                var i = !0;
                return s(function (r) {
                    var n = e.get(r.axisIndex), a = this.dependentModels[r.axis][n];
                    a && a.get("type") === t || (i = !1)
                }, this), i
            },
            _backup: function () {
                this.eachTargetAxis(function (e, t, i, r) {
                    var n = r.getComponent(e.axis, t);
                    this.getAxisProxy(e.name, t).backup(this, {
                        scale: n.get("scale", !0),
                        min: n.get("min", !0),
                        max: n.get("max", !0)
                    })
                }, this)
            },
            getFirstTargetAxisModel: function () {
                var e;
                return s(function (t) {
                    if (null == e) {
                        var i = this.get(t.axisIndex);
                        i.length && (e = this.dependentModels[t.axis][i[0]])
                    }
                }, this), e
            },
            eachTargetAxis: function (e, t) {
                var i = this.ecModel;
                s(function (r) {
                    o(this.get(r.axisIndex), function (n) {
                        e.call(t, r, n, this, i)
                    }, this)
                }, this)
            },
            getAxisProxy: function (e, t) {
                return this._axisProxies[e + "_" + t]
            },
            setRawRange: function (e) {
                o(["start", "end", "startValue", "endValue"], function (t) {
                    this.option[t] = e[t]
                }, this)
            },
            getPercentRange: function () {
                var e = this._axisProxies;
                for (var t in e) if (e.hasOwnProperty(t) && e[t].hostedBy(this)) return e[t].getDataPercentWindow();
                for (var t in e) if (e.hasOwnProperty(t) && !e[t].hostedBy(this)) return e[t].getDataPercentWindow()
            }
        })
    }),t("echarts/component/dataZoom/DataZoomView", ["require", "../../view/Component"], function (e) {
        var t = e("../../view/Component");
        return t.extend({
            type: "dataZoom", render: function (e, t, i, r) {
                this.dataZoomModel = e, this.ecModel = t, this.api = i
            }, getTargetInfo: function () {
                function e(e, t, i, r) {
                    for (var n, a = 0; a < i.length; a++) if (i[a].model === e) {
                        n = i[a];
                        break
                    }
                    n || i.push(n = {model: e, axisModels: [], coordIndex: r}), n.axisModels.push(t)
                }

                var t = this.dataZoomModel, i = this.ecModel, r = [], n = [], a = [];
                return t.eachTargetAxis(function (t, o) {
                    var s = i.getComponent(t.axis, o);
                    if (s) {
                        a.push(s);
                        var l = s.get("gridIndex"), c = s.get("polarIndex");
                        if (null != l) {
                            var u = i.getComponent("grid", l);
                            e(u, s, r, l)
                        } else if (null != c) {
                            var u = i.getComponent("polar", c);
                            e(u, s, n, c)
                        }
                    }
                }, this), {cartesians: r, polars: n, axisModels: a}
            }
        })
    }),t("echarts/component/dataZoom/SliderZoomModel", ["require", "./DataZoomModel"], function (e) {
        var t = e("./DataZoomModel");
        return t.extend({
            type: "dataZoom.slider",
            layoutMode: "box",
            defaultOption: {
                show: !0,
                left: "auto",
                right: "auto",
                top: "auto",
                bottom: "auto",
                width: "auto",
                height: "auto",
                backgroundColor: "rgba(47,69,84,0)",
                dataBackgroundColor: "#ddd",
                fillerColor: "rgba(47,69,84,0.25)",
                handleColor: "rgba(47,69,84,0.65)",
                handleSize: 10,
                labelPrecision: null,
                labelFormatter: null,
                showDetail: !0,
                showDataShadow: "auto",
                realtime: !0,
                zoomLock: !1,
                textStyle: {color: "#333"}
            }
        })
    }),t("echarts/util/throttle", [], function () {
        var e = {}, t = "\x00__throttleOriginMethod", i = "\x00__throttleRate";
        return e.throttle = function (e, t, i, r) {
            function n(n) {
                function p() {
                    u = (new Date).getTime(), h = null, (d ? e : e[n]).apply(o, s || [])
                }

                var f = function () {
                    l = (new Date).getTime(), o = this, s = arguments, a = l - (r ? c : u) - t, clearTimeout(h), r ? i ? h = setTimeout(p, t) : a >= 0 && p() : a >= 0 ? p() : i && (h = setTimeout(p, -a)), c = l
                };
                return f.clear = function () {
                    h && (clearTimeout(h), h = null)
                }, f
            }

            var a, o, s, l = (new Date).getTime(), c = 0, u = 0, h = null, d = "function" == typeof e;
            if (t = t || 0, d) return n();
            for (var p = [], f = 0; f < e.length; f++) p[f] = n(f);
            return p
        }, e.fixRate = function (t, i) {
            return null != i ? e.throttle(t, i, !0, !1) : t
        }, e.debounce = function (t, i) {
            return null != i ? e.throttle(t, i, !0, !0) : t
        }, e.createOrUpdate = function (r, n, a, o) {
            var s = r[n];
            if (s && null != a && o) {
                var l = s[t] || s, c = s[i];
                c !== a && (s = r[n] = e[o](l, a), s[t] = l, s[i] = a)
            }
        }, e.clear = function (e, i) {
            var r = e[i];
            r && r[t] && (e[i] = r[t])
        }, e
    }),t("echarts/component/helper/sliderMove", ["require"], function (e) {
        return function (e, t, i, r, n) {
            function a(e, t, i) {
                var r = t.length ? t.slice() : [t, t];
                return t[0] > t[1] && r.reverse(), 0 > e && r[0] + e < i[0] && (e = i[0] - r[0]), e > 0 && r[1] + e > i[1] && (e = i[1] - r[1]), e
            }

            return e ? ("rigid" === r ? (e = a(e, t, i), t[0] += e, t[1] += e) : (e = a(e, t[n], i), t[n] += e, "push" === r && t[0] > t[1] && (t[1 - n] = t[n])), t) : t
        }
    }),t("echarts/component/dataZoom/SliderZoomView", ["require", "zrender/core/util", "../../util/graphic", "../../util/throttle", "./DataZoomView", "../../util/number", "../../util/layout", "../helper/sliderMove"], function (e) {
        function t(e) {
            return "x" === e ? "y" : "x"
        }

        var i = e("zrender/core/util"), r = e("../../util/graphic"), n = e("../../util/throttle"),
            a = e("./DataZoomView"), o = r.Rect, s = e("../../util/number"), l = s.linearMap,
            c = e("../../util/layout"), u = e("../helper/sliderMove"), h = s.asc, d = i.bind, p = Math.round,
            f = Math.max, g = i.each, m = 7, v = 1, y = 30, x = "horizontal", _ = "vertical", b = 5,
            w = ["line", "bar", "candlestick", "scatter"];
        return a.extend({
            type: "dataZoom.slider", init: function (e, t) {
                this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._halfHandleSize, this._location, this._dragging, this._dataShadowInfo, this.api = t
            }, render: function (e, t, i, r) {
                return this.$superApply("render", arguments), n.createOrUpdate(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = e.get("orient"), this._halfHandleSize = p(e.get("handleSize") / 2), this.dataZoomModel.get("show") === !1 ? void this.group.removeAll() : (r && "dataZoom" === r.type && r.from === this.uid || this._buildView(), void this._updateView())
            }, remove: function () {
                this.$superApply("remove", arguments), n.clear(this, "_dispatchZoomAction")
            }, dispose: function () {
                this.$superApply("dispose", arguments), n.clear(this, "_dispatchZoomAction")
            }, _buildView: function () {
                var e = this.group;
                e.removeAll(), this._resetLocation(), this._resetInterval();
                var t = this._displayables.barGroup = new r.Group;
                this._renderBackground(), this._renderDataShadow(), this._renderHandle(), e.add(t), this._positionGroup()
            }, _resetLocation: function () {
                var e = this.dataZoomModel, t = this.api, r = this._findCoordRect(),
                    n = {width: t.getWidth(), height: t.getHeight()},
                    a = this._orient === x ? {left: r.x, top: n.height - y - m, width: r.width, height: y} : {
                        right: m,
                        top: r.y,
                        width: y,
                        height: r.height
                    };
                i.each(c.getLayoutParams(e.option), function (e, t) {
                    "auto" !== e && (a[t] = e)
                });
                var o = c.getLayoutRect(a, n, e.padding);
                this._location = {
                    x: o.x,
                    y: o.y
                }, this._size = [o.width, o.height], this._orient === _ && this._size.reverse()
            }, _positionGroup: function () {
                var e = this.group, t = this._location, i = this._orient,
                    r = this.dataZoomModel.getFirstTargetAxisModel(), n = r && r.get("inverse"),
                    a = this._displayables.barGroup, o = (this._dataShadowInfo || {}).otherAxisInverse;
                a.attr(i !== x || n ? i === x && n ? {scale: o ? [-1, 1] : [-1, -1]} : i !== _ || n ? {
                    scale: o ? [-1, -1] : [-1, 1],
                    rotation: Math.PI / 2
                } : {scale: o ? [1, -1] : [1, 1], rotation: Math.PI / 2} : {scale: o ? [1, 1] : [1, -1]});
                var s = e.getBoundingRect([a]);
                e.position[0] = t.x - s.x, e.position[1] = t.y - s.y
            }, _getViewExtent: function () {
                var e = this._halfHandleSize, t = f(this._size[0], 4 * e), i = [e, t - e];
                return i
            }, _renderBackground: function () {
                var e = this.dataZoomModel, t = this._size;
                this._displayables.barGroup.add(new o({
                    silent: !0,
                    shape: {x: 0, y: 0, width: t[0], height: t[1]},
                    style: {fill: e.get("backgroundColor")}
                }))
            }, _renderDataShadow: function () {
                var e = this._dataShadowInfo = this._prepareDataShadowInfo();
                if (e) {
                    var t = this._size, i = e.series, n = i.getRawData(),
                        a = i.getShadowDim ? i.getShadowDim() : e.otherDim, o = n.getDataExtent(a),
                        s = .3 * (o[1] - o[0]);
                    o = [o[0] - s, o[1] + s];
                    var c = [0, t[1]], u = [0, t[0]], h = [[t[0], 0], [0, 0]], d = u[1] / n.count(), p = 0,
                        f = Math.round(n.count() / t[0]);
                    n.each([a], function (e, t) {
                        if (f > 0 && t % f) return void(p += d);
                        var i = null == e || isNaN(e) || "" === e ? null : l(e, o, c, !0);
                        null != i && h.push([p, i]), p += d
                    }), this._displayables.barGroup.add(new r.Polyline({
                        shape: {points: h},
                        style: {fill: this.dataZoomModel.get("dataBackgroundColor"), lineWidth: 0},
                        silent: !0,
                        z2: -20
                    }))
                }
            }, _prepareDataShadowInfo: function () {
                var e = this.dataZoomModel, r = e.get("showDataShadow");
                if (r !== !1) {
                    var n, a = this.ecModel;
                    return e.eachTargetAxis(function (o, s) {
                        var l = e.getAxisProxy(o.name, s).getTargetSeriesModels();
                        i.each(l, function (e) {
                            if (!(n || r !== !0 && i.indexOf(w, e.get("type")) < 0)) {
                                var l = t(o.name), c = a.getComponent(o.axis, s).axis;
                                n = {
                                    thisAxis: c,
                                    series: e,
                                    thisDim: o.name,
                                    otherDim: l,
                                    otherAxisInverse: e.coordinateSystem.getOtherAxis(c).inverse
                                }
                            }
                        }, this)
                    }, this), n
                }
            }, _renderHandle: function () {
                var e = this._displayables, t = e.handles = [], i = e.handleLabels = [],
                    n = this._displayables.barGroup, a = this._size;
                n.add(e.filler = new o({
                    draggable: !0,
                    cursor: "move",
                    drift: d(this._onDragMove, this, "all"),
                    ondragend: d(this._onDragEnd, this),
                    onmouseover: d(this._showDataInfo, this, !0),
                    onmouseout: d(this._showDataInfo, this, !1),
                    style: {fill: this.dataZoomModel.get("fillerColor"), textPosition: "inside"}
                })), n.add(new o(r.subPixelOptimizeRect({
                    silent: !0,
                    shape: {x: 0, y: 0, width: a[0], height: a[1]},
                    style: {stroke: this.dataZoomModel.get("dataBackgroundColor"), lineWidth: v, fill: "rgba(0,0,0,0)"}
                }))), g([0, 1], function (e) {
                    n.add(t[e] = new o({
                        style: {fill: this.dataZoomModel.get("handleColor")},
                        cursor: "move",
                        draggable: !0,
                        drift: d(this._onDragMove, this, e),
                        ondragend: d(this._onDragEnd, this),
                        onmouseover: d(this._showDataInfo, this, !0),
                        onmouseout: d(this._showDataInfo, this, !1)
                    }));
                    var a = this.dataZoomModel.textStyleModel;
                    this.group.add(i[e] = new r.Text({
                        silent: !0,
                        invisible: !0,
                        style: {
                            x: 0,
                            y: 0,
                            text: "",
                            textBaseline: "middle",
                            textAlign: "center",
                            fill: a.getTextColor(),
                            textFont: a.getFont()
                        }
                    }))
                }, this)
            }, _resetInterval: function () {
                var e = this._range = this.dataZoomModel.getPercentRange();
                this._handleEnds = l(e, [0, 100], this._getViewExtent(), !0)
            }, _updateInterval: function (e, t) {
                var i = this._handleEnds, r = this._getViewExtent();
                u(t, i, r, "all" === e || this.dataZoomModel.get("zoomLock") ? "rigid" : "cross", e), this._range = h(l(i, r, [0, 100], !0))
            }, _updateView: function () {
                var e = this._displayables, t = this._handleEnds, i = h(t.slice()), r = this._size,
                    n = this._halfHandleSize;
                g([0, 1], function (i) {
                    var a = e.handles[i];
                    a.setShape({x: t[i] - n, y: -1, width: 2 * n, height: r[1] + 2, r: 1})
                }, this), e.filler.setShape({
                    x: i[0],
                    y: 0,
                    width: i[1] - i[0],
                    height: this._size[1]
                }), this._updateDataInfo()
            }, _updateDataInfo: function () {
                function e(e) {
                    var t = r.getTransform(i.handles[e], this.group),
                        s = r.transformDirection(0 === e ? "right" : "left", t), l = this._halfHandleSize + b,
                        u = r.applyTransform([c[e] + (0 === e ? -l : l), this._size[1] / 2], t);
                    n[e].setStyle({
                        x: u[0],
                        y: u[1],
                        textBaseline: a === x ? "middle" : s,
                        textAlign: a === x ? s : "center",
                        text: o[e]
                    })
                }

                var t = this.dataZoomModel, i = this._displayables, n = i.handleLabels, a = this._orient, o = ["", ""];
                if (t.get("showDetail")) {
                    var s, l;
                    t.eachTargetAxis(function (e, i) {
                        s || (s = t.getAxisProxy(e.name, i).getDataValueWindow(), l = this.ecModel.getComponent(e.axis, i).axis)
                    }, this), s && (o = [this._formatLabel(s[0], l), this._formatLabel(s[1], l)])
                }
                var c = h(this._handleEnds.slice());
                e.call(this, 0), e.call(this, 1)
            }, _formatLabel: function (e, t) {
                var r = this.dataZoomModel, n = r.get("labelFormatter");
                if (i.isFunction(n)) return n(e);
                var a = r.get("labelPrecision");
                return (null == a || "auto" === a) && (a = t.getPixelPrecision()), e = null == e && isNaN(e) ? "" : "category" === t.type || "time" === t.type ? t.scale.getLabel(Math.round(e)) : e.toFixed(Math.min(a, 20)), i.isString(n) && (e = n.replace("{value}", e)), e
            }, _showDataInfo: function (e) {
                e = this._dragging || e;
                var t = this._displayables.handleLabels;
                t[0].attr("invisible", !e), t[1].attr("invisible", !e)
            }, _onDragMove: function (e, t, i) {
                this._dragging = !0;
                var r = this._applyBarTransform([t, i], !0);
                this._updateInterval(e, r[0]), this._updateView(), this.dataZoomModel.get("realtime") && this._dispatchZoomAction()
            }, _onDragEnd: function () {
                this._dragging = !1, this._showDataInfo(!1), this._dispatchZoomAction()
            }, _dispatchZoomAction: function () {
                var e = this._range;
                this.api.dispatchAction({
                    type: "dataZoom",
                    from: this.uid,
                    dataZoomId: this.dataZoomModel.id,
                    start: e[0],
                    end: e[1]
                })
            }, _applyBarTransform: function (e, t) {
                var i = this._displayables.barGroup.getLocalTransform();
                return r.applyTransform(e, i, t)
            }, _findCoordRect: function () {
                var e, t = this.getTargetInfo();
                if (t.cartesians.length) e = t.cartesians[0].model.coordinateSystem.getRect(); else {
                    var i = this.api.getWidth(), r = this.api.getHeight();
                    e = {x: .2 * i, y: .2 * r, width: .6 * i, height: .6 * r}
                }
                return e
            }
        })
    }),t("echarts/component/dataZoom/InsideZoomModel", ["require", "./DataZoomModel"], function (e) {
        var t = e("./DataZoomModel");
        return t.extend({type: "dataZoom.inside"})
    }),t("echarts/component/dataZoom/InsideZoomView", ["require", "./DataZoomView", "../../util/throttle", "zrender/core/util", "../helper/sliderMove", "../../component/helper/RoamController"], function (e) {
        function t(e, t, i, n) {
            t = t.slice();
            var a = n.axisModels[0];
            if (a) {
                var o = r(e, a, i), s = o.signal * (t[1] - t[0]) * o.pixel / o.pixelLength;
                return l(s, t, [0, 100], "rigid"), t
            }
        }

        function i(e, t, i, a, o, s) {
            i = i.slice();
            var l = o.axisModels[0];
            if (l) {
                var c = r(t, l, a), u = c.pixel - c.pixelStart, h = u / c.pixelLength * (i[1] - i[0]) + i[0];
                return e = Math.max(e, 0), i[0] = (i[0] - h) * e + h, i[1] = (i[1] - h) * e + h, n(i)
            }
        }

        function r(e, t, i) {
            var r = t.axis, n = i.rect, a = {};
            return "x" === r.dim ? (a.pixel = e[0], a.pixelLength = n.width, a.pixelStart = n.x, a.signal = r.inverse ? 1 : -1) : (a.pixel = e[1], a.pixelLength = n.height, a.pixelStart = n.y, a.signal = r.inverse ? -1 : 1), a
        }

        function n(e) {
            var t = [0, 100];
            return !(e[0] <= t[1]) && (e[0] = t[1]), !(e[1] <= t[1]) && (e[1] = t[1]), !(e[0] >= t[0]) && (e[0] = t[0]), !(e[1] >= t[0]) && (e[1] = t[0]), e
        }

        var a = e("./DataZoomView"), o = e("../../util/throttle"), s = e("zrender/core/util"),
            l = e("../helper/sliderMove"), c = e("../../component/helper/RoamController"), u = s.bind;
        return a.extend({
            type: "dataZoom.inside", init: function (e, t) {
                this._controllers = {}, this._range
            }, render: function (e, t, i, r) {
                this.$superApply("render", arguments), o.createOrUpdate(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), r && "dataZoom" === r.type && r.from === this.uid || (this._range = e.getPercentRange()), this._resetController(i)
            }, remove: function () {
                this.$superApply("remove", arguments);
                var e = this._controllers;
                s.each(e, function (e) {
                    e.off("pan").off("zoom")
                }), e.length = 0, o.clear(this, "_dispatchZoomAction")
            }, dispose: function () {
                this.$superApply("dispose", arguments), o.clear(this, "_dispatchZoomAction")
            }, _resetController: function (e) {
                var t = this._controllers, i = this.getTargetInfo();
                s.each(i.cartesians, function (i) {
                    var r = "cartesian" + i.coordIndex, n = t[r];
                    n || (n = t[r] = new c(e.getZr()), n.enable(), n.on("pan", u(this._onPan, this, n, i)), n.on("zoom", u(this._onZoom, this, n, i))), n.rect = i.model.coordinateSystem.getRect().clone()
                }, this)
            }, _onPan: function (e, i, r, n) {
                var a = this._range = t([r, n], this._range, e, i);
                a && this._dispatchZoomAction(a)
            }, _onZoom: function (e, t, r, n, a) {
                var o = this.dataZoomModel;
                r = 1 / r;
                var s = this._range = i(r, [n, a], this._range, e, t, o);
                this._dispatchZoomAction(s)
            }, _dispatchZoomAction: function (e) {
                this.api.dispatchAction({
                    type: "dataZoom",
                    from: this.uid,
                    dataZoomId: this.dataZoomModel.id,
                    start: e[0],
                    end: e[1]
                })
            }
        })
    }),t("echarts/component/dataZoom/dataZoomProcessor", ["require", "../../echarts", "../../util/number"], function (e) {
        function t(e, t, i, r) {
            var a = e.name, o = i.getAxisProxy(a, t);
            o.reset(i);
            var s = o.getDataPercentWindow(), l = o.getDataValueWindow(), c = r.getComponent(e.axis, t),
                u = 0 === s[0] && 100 === s[1], h = o.getBackup(), d = n.getPixelPrecision(l, [0, 500]),
                p = !(20 > d && d >= 0);
            c.setNeedsCrossZero && c.setNeedsCrossZero(u ? !h.scale : !1), c.setMin && c.setMin(u || p ? h.min : +l[0].toFixed(d)), c.setMax && c.setMax(u || p ? h.max : +l[1].toFixed(d))
        }

        function i(e, t, i, r) {
            i.getAxisProxy(e.name, t).filterData(i)
        }

        var r = e("../../echarts"), n = e("../../util/number");
        r.registerProcessor("filter", function (e, r) {
            e.eachComponent("dataZoom", function (e) {
                e.eachTargetAxis(t)
            }), e.eachComponent("dataZoom", function (e) {
                e.eachTargetAxis(i)
            })
        })
    }),t("echarts/component/dataZoom/dataZoomAction", ["require", "zrender/core/util", "../../util/model", "../../echarts"], function (e) {
        var t = e("zrender/core/util"), i = e("../../util/model"), r = e("../../echarts");
        r.registerAction("dataZoom", function (e, r) {
            var n = i.createLinkedNodesFinder(t.bind(r.eachComponent, r, "dataZoom"), i.eachAxisDim, function (e, t) {
                return e.get(t.axisIndex)
            }), a = [];
            r.eachComponent({mainType: "dataZoom", query: e}, function (e, t) {
                a.push.apply(a, n(e).nodes)
            }), t.each(a, function (t, i) {
                t.setRawRange({start: e.start, end: e.end, startValue: e.startValue, endValue: e.endValue})
            })
        })
    }),t("echarts/component/dataZoom", ["require", "./dataZoom/typeDefaulter", "./dataZoom/DataZoomModel", "./dataZoom/DataZoomView", "./dataZoom/SliderZoomModel", "./dataZoom/SliderZoomView", "./dataZoom/InsideZoomModel", "./dataZoom/InsideZoomView", "./dataZoom/dataZoomProcessor", "./dataZoom/dataZoomAction"], function (e) {
        e("./dataZoom/typeDefaulter"), e("./dataZoom/DataZoomModel"), e("./dataZoom/DataZoomView"), e("./dataZoom/SliderZoomModel"), e("./dataZoom/SliderZoomView"), e("./dataZoom/InsideZoomModel"), e("./dataZoom/InsideZoomView"), e("./dataZoom/dataZoomProcessor"), e("./dataZoom/dataZoomAction")
    }),t("echarts/component/visualMap/preprocessor", ["require", "zrender/core/util"], function (e) {
        function t(e, t) {
            return e && e.hasOwnProperty && e.hasOwnProperty(t)
        }

        var i = e("zrender/core/util"), r = i.each;
        return function (e) {
            var n = e && e.visualMap;
            i.isArray(n) || (n = n ? [n] : []), r(n, function (e) {
                if (e) {
                    t(e, "splitList") && !t(e, "pieces") && (e.pieces = e.splitList, delete e.splitList);
                    var n = e.pieces;
                    n && i.isArray(n) && r(n, function (e) {
                        i.isObject(e) && (t(e, "start") && !t(e, "min") && (e.min = e.start), t(e, "end") && !t(e, "max") && (e.max = e.end))
                    })
                }
            })
        }
    }),t("echarts/component/visualMap/typeDefaulter", ["require", "../../model/Component"], function (e) {
        e("../../model/Component").registerSubTypeDefaulter("visualMap", function (e) {
            return e.categories || (e.pieces ? e.pieces.length > 0 : e.splitNumber > 0) && !e.calculable ? "piecewise" : "continuous"
        })
    }),t("echarts/component/visualMap/visualCoding", ["require", "../../echarts", "../../visual/VisualMapping", "zrender/core/util"], function (e) {
        function t(e, t) {
            var i = e.targetVisuals, a = {};
            n.each(["inRange", "outOfRange"], function (e) {
                var t = r.prepareVisualTypes(i[e]);
                a[e] = t
            }), e.eachTargetSeries(function (t) {
                function r(e) {
                    return s.getItemVisual(o, e)
                }

                function n(e, t) {
                    s.setItemVisual(o, e, t)
                }

                var o, s = t.getData(), l = e.getDataDimension(s);
                s.each([l], function (t, s) {
                    o = s;
                    for (var l = e.getValueState(t), c = i[l], u = a[l], h = 0, d = u.length; d > h; h++) {
                        var p = u[h];
                        c[p] && c[p].applyVisual(t, r, n)
                    }
                })
            })
        }

        var i = e("../../echarts"), r = e("../../visual/VisualMapping"), n = e("zrender/core/util");
        i.registerVisualCoding("component", function (e) {
            e.eachComponent("visualMap", function (i) {
                t(i, e)
            })
        })
    }),t("echarts/visual/visualDefault", ["require", "zrender/core/util"], function (e) {
        var t = e("zrender/core/util"), i = {
            get: function (e, i, n) {
                var a = t.clone((r[e] || {})[i]);
                return n && t.isArray(a) ? a[a.length - 1] : a
            }
        }, r = {
            color: {active: ["#006edd", "#e0ffff"], inactive: ["rgba(0,0,0,0)"]},
            colorHue: {active: [0, 360], inactive: [0, 0]},
            colorSaturation: {active: [.3, 1], inactive: [0, 0]},
            colorLightness: {active: [.9, .5], inactive: [0, 0]},
            colorAlpha: {active: [.3, 1], inactive: [0, 0]},
            symbol: {active: ["circle", "roundRect", "diamond"], inactive: ["none"]},
            symbolSize: {active: [10, 50], inactive: [0, 0]}
        };
        return i
    }),t("echarts/component/visualMap/VisualMapModel", ["require", "zrender/core/util", "zrender/core/env", "../../echarts", "../../util/model", "../../visual/visualDefault", "../../visual/VisualMapping", "../../util/number"], function (e) {
        var t = e("zrender/core/util"), i = e("zrender/core/env"), r = e("../../echarts"), n = e("../../util/model"),
            a = e("../../visual/visualDefault"), o = e("../../visual/VisualMapping"), s = o.mapVisual, l = o.eachVisual,
            c = e("../../util/number"), u = t.isArray, h = t.each, d = c.asc, p = c.linearMap;
        return r.extendComponentModel({
            type: "visualMap",
            dependencies: ["series"],
            dataBound: [-(1 / 0), 1 / 0],
            stateList: ["inRange", "outOfRange"],
            layoutMode: {type: "box", ignoreSize: !0},
            defaultOption: {
                show: !0,
                zlevel: 0,
                z: 4,
                min: 0,
                max: 200,
                dimension: null,
                inRange: null,
                outOfRange: null,
                left: 0,
                right: null,
                top: null,
                bottom: 0,
                itemWidth: null,
                itemHeight: null,
                inverse: !1,
                orient: "vertical",
                seriesIndex: null,
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                contentColor: "#5793f3",
                inactiveColor: "#aaa",
                borderWidth: 0,
                padding: 5,
                textGap: 10,
                precision: 0,
                color: ["#bf444c", "#d88273", "#f6efa6"],
                formatter: null,
                text: null,
                textStyle: {color: "#333"}
            },
            init: function (e, t, i) {
                this._autoSeriesIndex = !1, this._dataExtent, this.controllerVisuals = {}, this.targetVisuals = {}, this.textStyleModel, this.itemSize, this.mergeDefaultAndTheme(e, i), this.doMergeOption({}, !0)
            },
            mergeOption: function (e) {
                this.$superApply("mergeOption", arguments), this.doMergeOption(e, !1)
            },
            doMergeOption: function (e, t) {
                var r = this.option;
                i.canvasSupported || (r.realtime = !1), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption()
            },
            formatValueText: function (e, i) {
                function r(e) {
                    return e === l[0] ? "min" : e === l[1] ? "max" : (+e).toFixed(s)
                }

                var n, a, o = this.option, s = o.precision, l = this.dataBound, c = o.formatter;
                return t.isArray(e) && (e = e.slice(), n = !0), a = i ? e : n ? [r(e[0]), r(e[1])] : r(e), t.isString(c) ? c.replace("{value}", n ? a[0] : a).replace("{value2}", n ? a[1] : a) : t.isFunction(c) ? n ? c(e[0], e[1]) : c(e) : n ? e[0] === l[0] ? "< " + a[1] : e[1] === l[1] ? "> " + a[0] : a[0] + " - " + a[1] : a
            },
            resetTargetSeries: function (e, t) {
                var i = this.option, r = this._autoSeriesIndex = null == (t ? i : e).seriesIndex;
                i.seriesIndex = r ? [] : n.normalizeToArray(i.seriesIndex), r && this.ecModel.eachSeries(function (e, t) {
                    var r = e.getData();
                    "list" === r.type && i.seriesIndex.push(t)
                })
            },
            resetExtent: function () {
                var e = this.option, t = d([e.min, e.max]);
                this._dataExtent = t
            },
            getDataDimension: function (e) {
                var t = this.option.dimension;
                return null != t ? t : e.dimensions.length - 1
            },
            getExtent: function () {
                return this._dataExtent.slice()
            },
            resetVisual: function (e) {
                function t(t, r) {
                    h(this.stateList, function (n) {
                        var a = r[n] || (r[n] = {}), s = this.option[t][n] || {};
                        h(s, function (t, r) {
                            if (o.isValidType(r)) {
                                var s = {type: r, dataExtent: i, visual: t};
                                e && e.call(this, s, n), a[r] = new o(s)
                            }
                        }, this)
                    }, this)
                }

                var i = this.getExtent();
                t.call(this, "controller", this.controllerVisuals), t.call(this, "target", this.targetVisuals)
            },
            completeVisualOption: function () {
                function e(e) {
                    u(n.color) && !e.inRange && (e.inRange = {color: n.color.slice().reverse()}), h(this.stateList, function (i) {
                        var r = e[i];
                        if (t.isString(r)) {
                            var n = a.get(r, "active", g);
                            n ? (e[i] = {}, e[i][r] = n) : delete e[i]
                        }
                    }, this)
                }

                function i(e, t, i) {
                    var r = e[t], n = e[i];
                    r && !n && (n = e[i] = {}, h(r, function (e, t) {
                        var i = a.get(t, "inactive", g);
                        o.isValidType(t) && i && (n[t] = i)
                    }))
                }

                function r(e) {
                    var i = (e.inRange || {}).symbol || (e.outOfRange || {}).symbol,
                        r = (e.inRange || {}).symbolSize || (e.outOfRange || {}).symbolSize,
                        n = this.get("inactiveColor");
                    h(this.stateList, function (a) {
                        var o = this.itemSize, c = e[a];
                        c || (c = e[a] = {color: g ? n : [n]}), c.symbol || (c.symbol = i && t.clone(i) || (g ? "roundRect" : ["roundRect"])), c.symbolSize || (c.symbolSize = r && t.clone(r) || (g ? o[0] : [o[0], o[0]])), c.symbol = s(c.symbol, function (e) {
                            return "none" === e || "square" === e ? "roundRect" : e
                        });
                        var u = c.symbolSize;
                        if (u) {
                            var h = -(1 / 0);
                            l(u, function (e) {
                                e > h && (h = e)
                            }), c.symbolSize = s(u, function (e) {
                                return p(e, [0, h], [0, o[0]], !0)
                            })
                        }
                    }, this)
                }

                var n = this.option, c = {inRange: n.inRange, outOfRange: n.outOfRange},
                    d = n.target || (n.target = {}), f = n.controller || (n.controller = {});
                t.merge(d, c), t.merge(f, c);
                var g = this.isCategory();
                e.call(this, d), e.call(this, f), i.call(this, d, "inRange", "outOfRange"), i.call(this, d, "outOfRange", "inRange"), r.call(this, f)
            },
            eachTargetSeries: function (e, i) {
                t.each(this.option.seriesIndex, function (t) {
                    e.call(i, this.ecModel.getSeriesByIndex(t))
                }, this)
            },
            isCategory: function () {
                return !!this.option.categories
            },
            resetItemSize: function () {
                this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))]
            },
            setSelected: t.noop,
            getValueState: t.noop
        })
    }),t("echarts/component/visualMap/ContinuousModel", ["require", "./VisualMapModel", "zrender/core/util", "../../util/number"], function (e) {
        var t = e("./VisualMapModel"), i = e("zrender/core/util"), r = e("../../util/number"), n = [20, 140];
        return t.extend({
            type: "visualMap.continuous",
            defaultOption: {
                handlePosition: "auto",
                calculable: !1,
                range: [-(1 / 0), 1 / 0],
                hoverLink: !0,
                realtime: !0,
                itemWidth: null,
                itemHeight: null
            },
            doMergeOption: function (e, t) {
                this.$superApply("doMergeOption", arguments), this.resetTargetSeries(e, t), this.resetExtent(), this.resetVisual(function (e) {
                    e.mappingMethod = "linear"
                }), this._resetRange()
            },
            resetItemSize: function () {
                t.prototype.resetItemSize.apply(this, arguments);
                var e = this.itemSize;
                "horizontal" === this._orient && e.reverse(), (null == e[0] || isNaN(e[0])) && (e[0] = n[0]), (null == e[1] || isNaN(e[1])) && (e[1] = n[1])
            },
            _resetRange: function () {
                var e = this.getExtent(), t = this.option.range;
                t[0] > t[1] && t.reverse(), t[0] = Math.max(t[0], e[0]), t[1] = Math.min(t[1], e[1])
            },
            completeVisualOption: function () {
                t.prototype.completeVisualOption.apply(this, arguments), i.each(this.stateList, function (e) {
                    var t = this.option.controller[e].symbolSize;
                    t && t[0] !== t[1] && (t[0] = 0)
                }, this)
            },
            setSelected: function (e) {
                this.option.range = e.slice(), this._resetRange()
            },
            getSelected: function () {
                var e = this.getExtent(), t = r.asc((this.get("range") || []).slice());
                return t[0] > e[1] && (t[0] = e[1]), t[1] > e[1] && (t[1] = e[1]), t[0] < e[0] && (t[0] = e[0]), t[1] < e[0] && (t[1] = e[0]), t
            },
            getValueState: function (e) {
                var t = this.option.range, i = this.getExtent();
                return (t[0] <= i[0] || t[0] <= e) && (t[1] >= i[1] || e <= t[1]) ? "inRange" : "outOfRange"
            }
        })
    }),t("echarts/component/visualMap/VisualMapView", ["require", "../../echarts", "zrender/core/util", "../../util/graphic", "../../util/format", "../../util/layout", "../../visual/VisualMapping"], function (e) {
        var t = e("../../echarts"), i = e("zrender/core/util"), r = e("../../util/graphic"), n = e("../../util/format"),
            a = e("../../util/layout"), o = e("../../visual/VisualMapping");
        return t.extendComponentView({
            type: "visualMap", autoPositionValues: {left: 1, right: 1, top: 1, bottom: 1}, init: function (e, t) {
                this.ecModel = e, this.api = t, this.visualMapModel, this._updatableShapes = {}
            }, render: function (e, t, i, r) {
                return this.visualMapModel = e, e.get("show") === !1 ? void this.group.removeAll() : void this.doRender.apply(this, arguments)
            }, renderBackground: function (e) {
                var t = this.visualMapModel, i = n.normalizeCssArray(t.get("padding") || 0), a = e.getBoundingRect();
                e.add(new r.Rect({
                    z2: -1,
                    silent: !0,
                    shape: {x: a.x - i[3], y: a.y - i[0], width: a.width + i[3] + i[1], height: a.height + i[0] + i[2]},
                    style: {
                        fill: t.get("backgroundColor"),
                        stroke: t.get("borderColor"), lineWidth: t.get("borderWidth")
                    }
                }))
            }, getControllerVisual: function (e, t, r) {
                function n(e) {
                    return h[e]
                }

                function a(e, t) {
                    h[e] = t
                }

                var s = this.visualMapModel, l = i.isArray(e);
                if (l && (!t || "color" !== r)) throw new Error(e);
                var c = s.controllerVisuals[t || s.getValueState(e)], u = s.get("contentColor"),
                    h = {symbol: s.get("itemSymbol"), color: l ? [{color: u, offset: 0}, {color: u, offset: 1}] : u},
                    d = o.prepareVisualTypes(c);
                return i.each(d, function (t) {
                    var i = c[t];
                    (!r || o.isInVisualCluster(t, r)) && i && i.applyVisual(e, n, a)
                }), h
            }, positionGroup: function (e) {
                var t = this.visualMapModel, i = this.api;
                a.positionGroup(e, t.getBoxLayoutParams(), {width: i.getWidth(), height: i.getHeight()})
            }, doRender: i.noop
        })
    }),t("echarts/component/visualMap/helper", ["require", "../../util/layout"], function (e) {
        var t = e("../../util/layout"), i = {
            getItemAlign: function (e, i, r) {
                var n = e.option, a = n.align;
                if (null != a && "auto" !== a) return a;
                for (var o = {
                    width: i.getWidth(),
                    height: i.getHeight()
                }, s = "horizontal" === n.orient ? 1 : 0, l = [["left", "right", "width"], ["top", "bottom", "height"]], c = l[s], u = [0, null, 10], h = {}, d = 0; 3 > d; d++) h[l[1 - s][d]] = u[d], h[c[d]] = 2 === d ? r[0] : n[c[d]];
                var p = [["x", "width", 3], ["y", "height", 0]][s], f = t.getLayoutRect(h, o, n.padding);
                return c[(f.margin[p[2]] || 0) + f[p[0]] + .5 * f[p[1]] < .5 * o[p[1]] ? 0 : 1]
            }
        };
        return i
    }),t("echarts/component/visualMap/ContinuousView", ["require", "./VisualMapView", "../../util/graphic", "zrender/core/util", "../../util/number", "../helper/sliderMove", "zrender/graphic/LinearGradient", "./helper"], function (e) {
        function t(e, t, i) {
            return new n.Polygon({shape: {points: e}, draggable: !!t, cursor: i, drift: t})
        }

        function i(e, t) {
            return 0 === e ? [[0, 0], [t, 0], [t, -t]] : [[0, 0], [t, 0], [t, t]]
        }

        var r = e("./VisualMapView"), n = e("../../util/graphic"), a = e("zrender/core/util"),
            o = e("../../util/number"), s = e("../helper/sliderMove"), l = o.linearMap,
            c = e("zrender/graphic/LinearGradient"), u = e("./helper"), h = a.each, d = r.extend({
                type: "visualMap.continuous", init: function () {
                    r.prototype.init.apply(this, arguments), this._shapes = {}, this._dataInterval = [], this._handleEnds = [], this._orient, this._useHandle
                }, doRender: function (e, t, i, r) {
                    r && "selectDataRange" === r.type && r.from === this.uid ? this._updateView() : this._buildView()
                }, _buildView: function () {
                    this.group.removeAll();
                    var e = this.visualMapModel, t = this.group;
                    this._orient = e.get("orient"), this._useHandle = e.get("calculable"), this._resetInterval(), this._renderBar(t);
                    var i = e.get("text");
                    this._renderEndsText(t, i, 0), this._renderEndsText(t, i, 1), this._updateView(!0), this.renderBackground(t), this._updateView(), this.positionGroup(t)
                }, _renderEndsText: function (e, t, i) {
                    if (t) {
                        var r = t[1 - i];
                        r = null != r ? r + "" : "";
                        var a = this.visualMapModel, o = a.get("textGap"), s = a.itemSize, l = this._shapes.barGroup,
                            c = this._applyTransform([s[0] / 2, 0 === i ? -o : s[1] + o], l),
                            u = this._applyTransform(0 === i ? "bottom" : "top", l), h = this._orient,
                            d = this.visualMapModel.textStyleModel;
                        this.group.add(new n.Text({
                            style: {
                                x: c[0],
                                y: c[1],
                                textBaseline: "horizontal" === h ? "middle" : u,
                                textAlign: "horizontal" === h ? u : "center",
                                text: r,
                                textFont: d.getFont(),
                                fill: d.getTextColor()
                            }
                        }))
                    }
                }, _renderBar: function (e) {
                    var i = this.visualMapModel, r = this._shapes, n = i.itemSize, o = this._orient, s = this._useHandle,
                        l = u.getItemAlign(i, this.api, n), c = r.barGroup = this._createBarGroup(l);
                    c.add(r.outOfRange = t()), c.add(r.inRange = t(null, a.bind(this._modifyHandle, this, "all"), s ? "move" : null));
                    var h = i.textStyleModel.getTextRect("国"), d = Math.max(h.width, h.height);
                    s && (r.handleGroups = [], r.handleThumbs = [], r.handleLabels = [], r.handleLabelPoints = [], this._createHandle(c, 0, n, d, o, l), this._createHandle(c, 1, n, d, o, l)), e.add(c)
                }, _createHandle: function (e, r, o, s, l) {
                    var c = new n.Group({position: [o[0], 0]}), u = t(i(r, s), a.bind(this._modifyHandle, this, r), "move");
                    c.add(u);
                    var h = {
                        x: "horizontal" === l ? s / 2 : 1.5 * s,
                        y: "horizontal" === l ? 0 === r ? -(1.5 * s) : 1.5 * s : 0 === r ? -s / 2 : s / 2
                    }, d = this.visualMapModel.textStyleModel, p = new n.Text({
                        silent: !0,
                        style: {
                            x: 0,
                            y: 0,
                            text: "",
                            textBaseline: "middle",
                            textFont: d.getFont(),
                            fill: d.getTextColor()
                        }
                    });
                    this.group.add(p);
                    var f = this._shapes;
                    f.handleThumbs[r] = u, f.handleGroups[r] = c, f.handleLabelPoints[r] = h, f.handleLabels[r] = p, e.add(c)
                }, _modifyHandle: function (e, t, i) {
                    if (this._useHandle) {
                        var r = this._applyTransform([t, i], this._shapes.barGroup, !0);
                        this._updateInterval(e, r[1]), this.api.dispatchAction({
                            type: "selectDataRange",
                            from: this.uid,
                            visualMapId: this.visualMapModel.id,
                            selected: this._dataInterval.slice()
                        })
                    }
                }, _resetInterval: function () {
                    var e = this.visualMapModel, t = this._dataInterval = e.getSelected();
                    this._handleEnds = l(t, e.getExtent(), [0, e.itemSize[1]], !0)
                }, _updateInterval: function (e, t) {
                    t = t || 0;
                    var i = this.visualMapModel, r = this._handleEnds;
                    s(t, r, [0, i.itemSize[1]], "all" === e ? "rigid" : "push", e), this._dataInterval = l(r, [0, i.itemSize[1]], i.getExtent(), !0)
                }, _updateView: function (e) {
                    var t = this.visualMapModel, i = t.getExtent(), r = this._shapes, n = this._dataInterval,
                        a = [0, t.itemSize[1]], o = e ? a : this._handleEnds, s = this._createBarVisual(n, i, o, "inRange"),
                        l = this._createBarVisual(i, i, a, "outOfRange");
                    r.inRange.setStyle("fill", s.barColor).setShape("points", s.barPoints), r.outOfRange.setStyle("fill", l.barColor).setShape("points", l.barPoints), this._useHandle && h([0, 1], function (e) {
                        r.handleThumbs[e].setStyle("fill", s.handlesColor[e]), r.handleLabels[e].setStyle({
                            text: t.formatValueText(n[e]),
                            textAlign: this._applyTransform("horizontal" === this._orient ? 0 === e ? "bottom" : "top" : "left", r.barGroup)
                        })
                    }, this), this._updateHandlePosition(o)
                }, _createBarVisual: function (e, t, i, r) {
                    var n = this.getControllerVisual(e, r, "color").color,
                        a = [this.getControllerVisual(e[0], r, "symbolSize").symbolSize, this.getControllerVisual(e[1], r, "symbolSize").symbolSize],
                        o = this._createBarPoints(i, a);
                    return {
                        barColor: new c(0, 0, 1, 1, n),
                        barPoints: o,
                        handlesColor: [n[0].color, n[n.length - 1].color]
                    }
                }, _createBarPoints: function (e, t) {
                    var i = this.visualMapModel.itemSize;
                    return [[i[0] - t[0], e[0]], [i[0], e[0]], [i[0], e[1]], [i[0] - t[1], e[1]]]
                }, _createBarGroup: function (e) {
                    var t = this._orient, i = this.visualMapModel.get("inverse");
                    return new n.Group("horizontal" !== t || i ? "horizontal" === t && i ? {
                        scale: "bottom" === e ? [-1, 1] : [1, 1],
                        rotation: -Math.PI / 2
                    } : "vertical" !== t || i ? {scale: "left" === e ? [1, 1] : [-1, 1]} : {scale: "left" === e ? [1, -1] : [-1, -1]} : {
                        scale: "bottom" === e ? [1, 1] : [-1, 1],
                        rotation: Math.PI / 2
                    })
                }, _updateHandlePosition: function (e) {
                    if (this._useHandle) {
                        var t = this._shapes;
                        h([0, 1], function (i) {
                            var r = t.handleGroups[i];
                            r.position[1] = e[i];
                            var a = t.handleLabelPoints[i], o = n.applyTransform([a.x, a.y], n.getTransform(r, this.group));
                            t.handleLabels[i].setStyle({x: o[0], y: o[1]})
                        }, this)
                    }
                }, _applyTransform: function (e, t, i) {
                    var r = n.getTransform(t, this.group);
                    return n[a.isArray(e) ? "applyTransform" : "transformDirection"](e, r, i)
                }
            });
        return d
    }),t("echarts/component/visualMap/visualMapAction", ["require", "../../echarts"], function (e) {
        var t = e("../../echarts"), i = {type: "selectDataRange", event: "dataRangeSelected", update: "update"};
        t.registerAction(i, function (e, t) {
            t.eachComponent({mainType: "visualMap", query: e}, function (t) {
                t.setSelected(e.selected)
            })
        })
    }),t("echarts/component/visualMapContinuous", ["require", "../echarts", "./visualMap/preprocessor", "./visualMap/typeDefaulter", "./visualMap/visualCoding", "./visualMap/ContinuousModel", "./visualMap/ContinuousView", "./visualMap/visualMapAction"], function (e) {
        e("../echarts").registerPreprocessor(e("./visualMap/preprocessor")), e("./visualMap/typeDefaulter"), e("./visualMap/visualCoding"), e("./visualMap/ContinuousModel"), e("./visualMap/ContinuousView"), e("./visualMap/visualMapAction")
    }),t("echarts/component/visualMap/PiecewiseModel", ["require", "./VisualMapModel", "zrender/core/util", "../../visual/VisualMapping"], function (e) {
        function t(e, t) {
            var i = e.inverse;
            ("vertical" === e.orient ? !i : i) && t.reverse()
        }

        var i = e("./VisualMapModel"), r = e("zrender/core/util"), n = e("../../visual/VisualMapping"), a = i.extend({
            type: "visualMap.piecewise",
            defaultOption: {
                selected: null,
                align: "auto",
                itemWidth: 20,
                itemHeight: 14,
                itemSymbol: "roundRect",
                pieceList: null,
                categories: null,
                splitNumber: 5,
                selectedMode: "multiple",
                itemGap: 10
            },
            doMergeOption: function (e, t) {
                this.$superApply("doMergeOption", arguments), this._pieceList = [], this.resetTargetSeries(e, t), this.resetExtent();
                var i = this._mode = this._decideMode();
                o[this._mode].call(this), this._resetSelected(e, t);
                var n = this.option.categories;
                this.resetVisual(function (e, t) {
                    "categories" === i ? (e.mappingMethod = "category", e.categories = r.clone(n)) : (e.mappingMethod = "piecewise", e.pieceList = r.map(this._pieceList, function (e) {
                        var e = r.clone(e);
                        return "inRange" !== t && (e.visual = null), e
                    }))
                })
            },
            _resetSelected: function (e, t) {
                var i = this.option, n = this._pieceList, a = (t ? i : e).selected || {};
                if (i.selected = a, r.each(n, function (e, t) {
                    var i = this.getSelectedMapKey(e);
                    i in a || (a[i] = !0)
                }, this), "single" === i.selectedMode) {
                    var o = !1;
                    r.each(n, function (e, t) {
                        var i = this.getSelectedMapKey(e);
                        a[i] && (o ? a[i] = !1 : o = !0)
                    }, this)
                }
            },
            getSelectedMapKey: function (e) {
                return "categories" === this._mode ? e.value + "" : e.index + ""
            },
            getPieceList: function () {
                return this._pieceList
            },
            _decideMode: function () {
                var e = this.option;
                return e.pieces && e.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber"
            },
            setSelected: function (e) {
                this.option.selected = r.clone(e)
            },
            getValueState: function (e) {
                var t = this._pieceList, i = n.findPieceIndex(e, t);
                return null != i && this.option.selected[this.getSelectedMapKey(t[i])] ? "inRange" : "outOfRange"
            }
        }), o = {
            splitNumber: function () {
                var e = this.option, t = e.precision, i = this.getExtent(), r = e.splitNumber;
                r = Math.max(parseInt(r, 10), 1), e.splitNumber = r;
                for (var n = (i[1] - i[0]) / r; +n.toFixed(t) !== n && 5 > t;) t++;
                e.precision = t, n = +n.toFixed(t);
                for (var a = 0, o = i[0]; r > a; a++, o += n) {
                    var s = a === r - 1 ? i[1] : o + n;
                    this._pieceList.push({text: this.formatValueText([o, s]), index: a, interval: [o, s]})
                }
            }, categories: function () {
                var e = this.option;
                r.each(e.categories, function (e) {
                    this._pieceList.push({text: this.formatValueText(e, !0), value: e})
                }, this), t(e, this._pieceList)
            }, pieces: function () {
                var e = this.option;
                r.each(e.pieces, function (e, t) {
                    r.isObject(e) || (e = {value: e});
                    var i, a = {text: "", index: t};
                    if (null != e.label && (a.text = e.label, i = !0), e.hasOwnProperty("value")) a.value = e.value, i || (a.text = this.formatValueText(a.value)); else {
                        var o = e.min, s = e.max;
                        null == o && (o = -(1 / 0)), null == s && (s = 1 / 0), o === s && (a.value = o), a.interval = [o, s], i || (a.text = this.formatValueText([o, s]))
                    }
                    a.visual = n.retrieveVisuals(e), this._pieceList.push(a)
                }, this), t(e, this._pieceList)
            }
        };
        return a
    }),t("echarts/component/visualMap/PiecewiseView", ["require", "./VisualMapView", "zrender/core/util", "../../util/graphic", "../../util/symbol", "../../util/layout", "./helper"], function (e) {
        var t = e("./VisualMapView"), i = e("zrender/core/util"), r = e("../../util/graphic"),
            n = e("../../util/symbol"), a = e("../../util/layout"), o = e("./helper"), s = t.extend({
                type: "visualMap.piecewise", doRender: function () {
                    function e(e) {
                        var n = new r.Group;
                        n.onclick = i.bind(this._onItemClick, this, e.piece), this._createItemSymbol(n, e.piece, [0, 0, h[0], h[1]]), p && n.add(new r.Text({
                            style: {
                                x: "right" === u ? -o : h[0] + o,
                                y: h[1] / 2,
                                text: e.piece.text,
                                textBaseline: "middle",
                                textAlign: u,
                                textFont: l,
                                fill: c
                            }
                        })), t.add(n)
                    }

                    var t = this.group;
                    t.removeAll();
                    var n = this.visualMapModel, o = n.get("textGap"), s = n.textStyleModel, l = s.getFont(),
                        c = s.getTextColor(), u = this._getItemAlign(), h = n.itemSize, d = this._getViewData(),
                        p = !d.endsText, f = !p;
                    f && this._renderEndsText(t, d.endsText[0], h), i.each(d.pieceList, e, this), f && this._renderEndsText(t, d.endsText[1], h), a.box(n.get("orient"), t, n.get("itemGap")), this.renderBackground(t), this.positionGroup(t)
                }, _getItemAlign: function () {
                    var e = this.visualMapModel, t = e.option;
                    if ("vertical" === t.orient) return o.getItemAlign(e, this.api, e.itemSize);
                    var i = t.align;
                    return i && "auto" !== i || (i = "left"), i
                }, _renderEndsText: function (e, t, i) {
                    if (t) {
                        var n = new r.Group, a = this.visualMapModel.textStyleModel;
                        n.add(new r.Text({
                            style: {
                                x: i[0] / 2,
                                y: i[1] / 2,
                                textBaseline: "middle",
                                textAlign: "center",
                                text: t,
                                textFont: a.getFont(),
                                fill: a.getTextColor()
                            }
                        })), e.add(n)
                    }
                }, _getViewData: function () {
                    var e = this.visualMapModel, t = i.map(e.getPieceList(), function (e, t) {
                        return {piece: e, index: t}
                    }), r = e.get("text"), n = e.get("orient"), a = e.get("inverse");
                    return ("horizontal" === n ? a : !a) ? t.reverse() : r && (r = r.slice().reverse()), {
                        pieceList: t,
                        endsText: r
                    }
                }, _createItemSymbol: function (e, t, i) {
                    var r;
                    if (this.visualMapModel.isCategory()) r = t.value; else if (null != t.value) r = t.value; else {
                        var a = t.interval || [];
                        r = (a[0] + a[1]) / 2
                    }
                    var o = this.getControllerVisual(r);
                    e.add(n.createSymbol(o.symbol, i[0], i[1], i[2], i[3], o.color))
                }, _onItemClick: function (e) {
                    var t = this.visualMapModel, r = t.option, n = i.clone(r.selected), a = t.getSelectedMapKey(e);
                    "single" === r.selectedMode ? (n[a] = !0, i.each(n, function (e, t) {
                        n[t] = t === a
                    })) : n[a] = !n[a], this.api.dispatchAction({
                        type: "selectDataRange",
                        from: this.uid,
                        visualMapId: this.visualMapModel.id,
                        selected: n
                    })
                }
            });
        return s
    }),t("echarts/component/visualMapPiecewise", ["require", "../echarts", "./visualMap/preprocessor", "./visualMap/typeDefaulter", "./visualMap/visualCoding", "./visualMap/PiecewiseModel", "./visualMap/PiecewiseView", "./visualMap/visualMapAction"], function (e) {
        e("../echarts").registerPreprocessor(e("./visualMap/preprocessor")), e("./visualMap/typeDefaulter"), e("./visualMap/visualCoding"), e("./visualMap/PiecewiseModel"), e("./visualMap/PiecewiseView"), e("./visualMap/visualMapAction")
    }),t("echarts/component/visualMap", ["require", "./visualMapContinuous", "./visualMapPiecewise"], function (e) {
        e("./visualMapContinuous"), e("./visualMapPiecewise")
    }),t("echarts/component/marker/MarkPointModel", ["require", "../../model/globalDefault", "../../util/model", "../../echarts"], function (e) {
        var t = e("../../model/globalDefault"), i = e("../../util/model");
        t.markPoint = {};
        var r = e("../../echarts").extendComponentModel({
            type: "markPoint",
            dependencies: ["series", "grid", "polar"],
            init: function (e, t, i, r, n) {
                this.mergeDefaultAndTheme(e, i), this.mergeOption(e, n, !0)
            },
            mergeOption: function (e, t, n) {
                if (!t) {
                    var a = this.ecModel;
                    a.eachSeries(function (e) {
                        var t = e.get("markPoint"), o = e.markPointModel;
                        if (!t || !t.data) return void(e.markPointModel = null);
                        if (o) o.mergeOption(t, !0); else {
                            n && i.defaultEmphasis(t.label, ["position", "show", "textStyle", "distance", "formatter"]);
                            var s = {seriesIndex: e.seriesIndex, name: e.name};
                            o = new r(t, this, a, s, !0)
                        }
                        e.markPointModel = o
                    }, this)
                }
            },
            defaultOption: {
                zlevel: 0,
                z: 5,
                symbol: "pin",
                symbolSize: 50,
                tooltip: {trigger: "item"},
                label: {normal: {show: !0, position: "inside"}, emphasis: {show: !0}},
                itemStyle: {normal: {borderWidth: 2}, emphasis: {}}
            }
        });
        return r
    }),t("echarts/component/marker/markerHelper", ["require", "zrender/core/util", "../../util/number"], function (e) {
        function t(e, t, i) {
            var r = -1;
            do r = Math.max(n.getPrecision(e.get(t, i)), r), e = e.stackedOn; while (e);
            return r
        }

        function i(e, i, r, n, a) {
            var o = i.getDataExtent(n), s = [], l = o[0], c = o[1], u = (c - l) * e + l, h = i.indexOfNearest(n, u);
            s[1 - a] = i.get(r, h), s[a] = i.get(n, h, !0);
            var d = t(i, n, h);
            return d >= 0 && (s[a] = +s[a].toFixed(d)), s
        }

        var r = e("zrender/core/util"), n = e("../../util/number"), a = r.curry,
            o = {min: a(i, 0), max: a(i, 1), average: a(i, .5)}, s = function (e, t, i) {
                if ((isNaN(i.x) || isNaN(i.y)) && !r.isArray(i.coord) && t) {
                    var n, a, s, l;
                    null != i.valueIndex ? (n = t.dimensions[i.valueIndex], a = t.dimensions[1 - i.valueIndex], s = t.getAxis(n), l = t.getAxis(a)) : (l = t.getBaseAxis(), s = t.getOtherAxis(l), a = l.dim, n = s.dim);
                    var c = null != i.valueIndex ? i.valueIndex : "angle" === n || "x" === n ? 0 : 1;
                    i = r.extend({}, i), i.type && o[i.type] && l && s ? i.coord = o[i.type](e, l.dim, n, c) : i.coord = [null != i.xAxis ? i.xAxis : i.radiusAxis, null != i.yAxis ? i.yAxis : i.angleAxis]
                }
                return i
            }, l = function (e, t) {
                return e && t.coord && (null == t.x || null == t.y) ? e.containData(t.coord) : !0
            }, c = function (e, t, i, r) {
                return 2 > r ? e.coord && e.coord[r] : void e.value
            };
        return {dataTransform: s, dataFilter: l, dimValueGetter: c}
    }),t("echarts/component/marker/MarkPointView", ["require", "../../chart/helper/SymbolDraw", "zrender/core/util", "../../util/format", "../../util/model", "../../util/number", "../../data/List", "./markerHelper", "../../echarts"], function (e) {
        function t(e, t, i) {
            var n = t.dimensions, a = new c(r.map(n, t.getDimensionInfo, t), i);
            return e && a.initData(r.filter(r.map(i.get("data"), r.curry(u.dataTransform, t, e)), r.curry(u.dataFilter, e)), null, u.dimValueGetter), a
        }

        var i = e("../../chart/helper/SymbolDraw"), r = e("zrender/core/util"), n = e("../../util/format"),
            a = e("../../util/model"), o = e("../../util/number"), s = n.addCommas, l = n.encodeHTML,
            c = e("../../data/List"), u = e("./markerHelper"), h = {
                getRawDataArray: function () {
                    return this.option.data
                }, formatTooltip: function (e) {
                    var t = this.getData(), i = this.getRawValue(e), n = r.isArray(i) ? r.map(i, s).join(", ") : s(i),
                        a = t.getName(e);
                    return this.name + "<br />" + ((a ? l(a) + " : " : "") + n)
                }, getData: function () {
                    return this._data
                }, setData: function (e) {
                    this._data = e
                }
            };
        r.defaults(h, a.dataFormatMixin), e("../../echarts").extendComponentView({
            type: "markPoint", init: function () {
                this._symbolDrawMap = {}
            }, render: function (e, t, i) {
                var r = this._symbolDrawMap;
                for (var n in r) r[n].__keep = !1;
                t.eachSeries(function (e) {
                    var t = e.markPointModel;
                    t && this._renderSeriesMP(e, t, i)
                }, this);
                for (var n in r) r[n].__keep || (r[n].remove(), this.group.remove(r[n].group))
            }, _renderSeriesMP: function (e, n, a) {
                var s = e.coordinateSystem, l = e.name, c = e.getData(), u = this._symbolDrawMap, d = u[l];
                d || (d = u[l] = new i);
                var p = t(s, c, n), f = s && s.dimensions;
                r.mixin(n, h), n.setData(p), p.each(function (e) {
                    var t, i = p.getItemModel(e), r = i.getShallow("x"), l = i.getShallow("y");
                    if (null != r && null != l) t = [o.parsePercent(r, a.getWidth()), o.parsePercent(l, a.getHeight())]; else if (s) {
                        var u = p.get(f[0], e), h = p.get(f[1], e);
                        t = s.dataToPoint([u, h])
                    }
                    p.setItemLayout(e, t);
                    var d = i.getShallow("symbolSize");
                    "function" == typeof d && (d = d(n.getRawValue(e), n.getDataParams(e))), p.setItemVisual(e, {
                        symbolSize: d,
                        color: i.get("itemStyle.normal.color") || c.getVisual("color"),
                        symbol: i.getShallow("symbol")
                    })
                }), d.updateData(p), this.group.add(d.group), p.eachItemGraphicEl(function (e) {
                    e.traverse(function (e) {
                        e.hostModel = n
                    })
                }), d.__keep = !0
            }
        })
    }),t("echarts/component/markPoint", ["require", "./marker/MarkPointModel", "./marker/MarkPointView"], function (e) {
        e("./marker/MarkPointModel"), e("./marker/MarkPointView")
    }),t("echarts/component/marker/MarkLineModel", ["require", "../../model/globalDefault", "../../util/model", "../../echarts"], function (e) {
        var t = e("../../model/globalDefault"), i = e("../../util/model");
        t.markLine = {};
        var r = e("../../echarts").extendComponentModel({
            type: "markLine",
            dependencies: ["series", "grid", "polar"],
            init: function (e, t, i, r, n) {
                this.mergeDefaultAndTheme(e, i), this.mergeOption(e, n, !0)
            },
            mergeOption: function (e, t, n) {
                if (!t) {
                    var a = this.ecModel;
                    a.eachSeries(function (e) {
                        var t = e.get("markLine"), o = e.markLineModel;
                        if (!t || !t.data) return void(e.markLineModel = null);
                        if (o) o.mergeOption(t, !0); else {
                            n && i.defaultEmphasis(t.label, ["position", "show", "textStyle", "distance", "formatter"]);
                            var s = {seriesIndex: e.seriesIndex, name: e.name};
                            o = new r(t, this, a, s, !0)
                        }
                        e.markLineModel = o
                    }, this)
                }
            },
            defaultOption: {
                zlevel: 0,
                z: 5,
                symbol: ["circle", "arrow"],
                symbolSize: [8, 16],
                precision: 2,
                tooltip: {trigger: "item"},
                label: {normal: {show: !0, position: "end"}, emphasis: {show: !0}},
                lineStyle: {normal: {type: "dashed"}, emphasis: {width: 3}},
                animationEasing: "linear"
            }
        });
        return r
    }),t("echarts/component/marker/MarkLineView", ["require", "zrender/core/util", "../../data/List", "../../util/format", "../../util/model", "../../util/number", "./markerHelper", "../../chart/helper/LineDraw", "../../echarts"], function (e) {
        function t(e, t) {
            return u.dataFilter(e, t[0]) && u.dataFilter(e, t[1])
        }

        function i(e, i, a) {
            var o = e.dimensions, s = new n(o, a), l = new n(o, a), c = new n([], a);
            if (e) {
                var h = e.getBaseAxis(), p = e.getOtherAxis(h),
                    f = r.filter(r.map(a.get("data"), r.curry(d, i, e, h, p)), r.curry(t, e));
                s.initData(r.map(f, function (e) {
                    return e[0]
                }), null, u.dimValueGetter), l.initData(r.map(f, function (e) {
                    return e[1]
                }), null, u.dimValueGetter), c.initData(r.map(f, function (e) {
                    return e[2]
                }))
            }
            return {from: s, to: l, line: c}
        }

        var r = e("zrender/core/util"), n = e("../../data/List"), a = e("../../util/format"), o = e("../../util/model"),
            s = e("../../util/number"), l = a.addCommas, c = a.encodeHTML, u = e("./markerHelper"),
            h = e("../../chart/helper/LineDraw"), d = function (e, t, i, n, a) {
                var o = a.type;
                if (!r.isArray(a) && "min" === o || "max" === o || "average" === o) {
                    null != a.valueIndex && (i = t.getAxis(t.dimensions[1 - a.valueIndex]), n = t.getAxis(t.dimensions[a.valueIndex]));
                    var s = i.dim + "Axis", l = n.dim + "Axis", c = i.scale.getExtent(), h = r.extend({}, a), d = {},
                        p = e.getDataExtent(n.dim, !0);
                    h.type = null, h[s] = c[0], d[s] = c[1];
                    var f = "average" === o ? .5 : "max" === o ? 1 : 0, g = (p[1] - p[0]) * f + p[0];
                    g = n.coordToData(n.dataToCoord(g)), h[l] = d[l] = g, a = [h, d, {type: o}]
                }
                return a = [u.dataTransform(e, t, a[0]), u.dataTransform(e, t, a[1]), {}], r.merge(a[2], a[0]), r.merge(a[2], a[1]), a
            }, p = {
                formatTooltip: function (e) {
                    var t = this._data, i = this.getRawValue(e), n = r.isArray(i) ? r.map(i, l).join(", ") : l(i),
                        a = t.getName(e);
                    return this.name + "<br />" + ((a ? c(a) + " : " : "") + n)
                }, getRawDataArray: function () {
                    return this.option.data
                }, getData: function () {
                    return this._data
                }, setData: function (e) {
                    this._data = e
                }
            };
        r.defaults(p, o.dataFormatMixin), e("../../echarts").extendComponentView({
            type: "markLine", init: function () {
                this._markLineMap = {}
            }, render: function (e, t, i) {
                var r = this._markLineMap;
                for (var n in r) r[n].__keep = !1;
                t.eachSeries(function (e) {
                    var r = e.markLineModel;
                    r && this._renderSeriesML(e, r, t, i)
                }, this);
                for (var n in r) r[n].__keep || this.group.remove(r[n].group)
            }, _renderSeriesML: function (e, t, n, a) {
                function o(e, t, i) {
                    var r, n = e.getItemModel(t), o = n.get("x"), c = n.get("y");
                    if (null != o && null != c) r = [s.parsePercent(o, a.getWidth()), s.parsePercent(c, a.getHeight())]; else {
                        var h = e.get(m[0], t), d = e.get(m[1], t);
                        r = l.dataToPoint([h, d])
                    }
                    e.setItemLayout(t, r), e.setItemVisual(t, {
                        symbolSize: n.get("symbolSize") || b[i ? 0 : 1],
                        symbol: n.get("symbol", !0) || _[i ? 0 : 1],
                        color: n.get("itemStyle.normal.color") || u.getVisual("color")
                    })
                }

                var l = e.coordinateSystem, c = e.name, u = e.getData(), d = this._markLineMap, f = d[c];
                f || (f = d[c] = new h), this.group.add(f.group);
                var g = i(l, u, t), m = l.dimensions, v = g.from, y = g.to, x = g.line;
                r.extend(t, p), t.setData(x);
                var _ = t.get("symbol"), b = t.get("symbolSize");
                r.isArray(_) || (_ = [_, _]), "number" == typeof b && (b = [b, b]), g.from.each(function (e) {
                    o(v, e, !0), o(y, e)
                }), x.each(function (e) {
                    var t = x.getItemModel(e).get("lineStyle.normal.color");
                    x.setItemVisual(e, {color: t || v.getItemVisual(e, "color")}), x.setItemLayout(e, [v.getItemLayout(e), y.getItemLayout(e)])
                }), f.updateData(x, v, y), g.line.eachItemGraphicEl(function (e, i) {
                    e.traverse(function (e) {
                        e.hostModel = t
                    })
                }), f.__keep = !0
            }
        })
    }),t("echarts/component/markLine", ["require", "./marker/MarkLineModel", "./marker/MarkLineView"], function (e) {
        e("./marker/MarkLineModel"), e("./marker/MarkLineView")
    }),t("echarts/component/timeline/preprocessor", ["require", "zrender/core/util"], function (e) {
        function t(e) {
            var t = e.type, a = {number: "value", time: "time"};
            if (a[t] && (e.axisType = a[t], delete e.type), i(e), r(e, "controlPosition")) {
                var o = e.controlStyle || (e.controlStyle = {});
                r(o, "position") || (o.position = e.controlPosition), "none" !== o.position || r(o, "show") || (o.show = !1, delete o.position), delete e.controlPosition
            }
            n.each(e.data || [], function (e) {
                n.isObject(e) && !n.isArray(e) && (!r(e, "value") && r(e, "name") && (e.value = e.name), i(e))
            })
        }

        function i(e) {
            var t = e.itemStyle || (e.itemStyle = {}), i = t.emphasis || (t.emphasis = {}),
                a = (t.normal || (t.normal = {}), e.label || e.label || {}), o = a.normal || (a.normal = {}),
                s = {normal: 1, emphasis: 1};
            n.each(a, function (e, t) {
                s[t] || r(o, t) || (o[t] = e)
            }), i.label && !r(a, "emphasis") && (a.emphasis = i.label, delete i.label)
        }

        function r(e, t) {
            return e.hasOwnProperty(t)
        }

        var n = e("zrender/core/util");
        return function (e) {
            var i = e && e.timeline;
            n.isArray(i) || (i = i ? [i] : []), n.each(i, function (e) {
                e && t(e)
            })
        }
    }),t("echarts/component/timeline/typeDefaulter", ["require", "../../model/Component"], function (e) {
        e("../../model/Component").registerSubTypeDefaulter("timeline", function () {
            return "slider"
        })
    }),t("echarts/component/timeline/timelineAction", ["require", "../../echarts"], function (e) {
        var t = e("../../echarts");
        t.registerAction({
            type: "timelineChange",
            event: "timelineChanged",
            update: "prepareAndUpdate"
        }, function (e, t) {
            var i = t.getComponent("timeline");
            i && null != e.currentIndex && (i.setCurrentIndex(e.currentIndex), !i.get("loop", !0) && i.isIndexMax() && i.setPlayState(!1)), t.resetOption("timeline")
        }), t.registerAction({
            type: "timelinePlayChange",
            event: "timelinePlayChanged",
            update: "update"
        }, function (e, t) {
            var i = t.getComponent("timeline");
            i && null != e.playState && i.setPlayState(e.playState)
        })
    }),t("echarts/component/timeline/TimelineModel", ["require", "../../model/Component", "../../data/List", "zrender/core/util", "../../util/model"], function (e) {
        var t = e("../../model/Component"), i = e("../../data/List"), r = e("zrender/core/util"),
            n = e("../../util/model"), a = t.extend({
                type: "timeline",
                layoutMode: "box",
                defaultOption: {
                    zlevel: 0,
                    z: 4,
                    show: !0,
                    axisType: "time",
                    realtime: !0,
                    left: "20%",
                    top: null,
                    right: "20%",
                    bottom: 0,
                    width: null,
                    height: 40,
                    padding: 5,
                    controlPosition: "left",
                    autoPlay: !1,
                    rewind: !1,
                    loop: !0,
                    playInterval: 2e3,
                    currentIndex: 0,
                    itemStyle: {normal: {}, emphasis: {}},
                    label: {normal: {textStyle: {color: "#000"}}, emphasis: {}},
                    data: []
                },
                init: function (e, t, i) {
                    this._data, this._names, this.mergeDefaultAndTheme(e, i), this._initData()
                },
                mergeOption: function (e) {
                    this.$superApply("mergeOption", arguments), this._initData()
                },
                setCurrentIndex: function (e) {
                    null == e && (e = this.option.currentIndex);
                    var t = this._data.count();
                    this.option.loop ? e = (e % t + t) % t : (e >= t && (e = t - 1), 0 > e && (e = 0)), this.option.currentIndex = e
                },
                getCurrentIndex: function () {
                    return this.option.currentIndex
                },
                isIndexMax: function () {
                    return this.getCurrentIndex() >= this._data.count() - 1
                },
                setPlayState: function (e) {
                    this.option.autoPlay = !!e
                },
                getPlayState: function () {
                    return !!this.option.autoPlay
                },
                _initData: function () {
                    var e = this.option, t = e.data || [], a = e.axisType, o = this._names = [];
                    if ("category" === a) {
                        var s = [];
                        r.each(t, function (e, t) {
                            var i, a = n.getDataItemValue(e);
                            r.isObject(e) ? (i = r.clone(e), i.value = t) : i = t, s.push(i), r.isString(a) || null != a && !isNaN(a) || (a = ""), o.push(a + "")
                        }), t = s
                    }
                    var l = {category: "ordinal", time: "time"}[a] || "number",
                        c = this._data = new i([{name: "value", type: l}], this);
                    c.initData(t, o)
                },
                getData: function () {
                    return this._data
                },
                getCategories: function () {
                    return "category" === this.get("axisType") ? this._names.slice() : void 0
                }
            });
        return a
    }),t("echarts/component/timeline/SliderTimelineModel", ["require", "./TimelineModel"], function (e) {
        var t = e("./TimelineModel");
        return t.extend({
            type: "timeline.slider",
            defaultOption: {
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                orient: "horizontal",
                inverse: !1,
                tooltip: !1,
                symbol: "emptyCircle",
                symbolSize: 10,
                lineStyle: {show: !0, width: 2, color: "#304654"},
                label: {
                    position: "auto",
                    normal: {show: !0, interval: "auto", rotate: 0, textStyle: {color: "#304654"}},
                    emphasis: {show: !0, textStyle: {color: "#c23531"}}
                },
                itemStyle: {normal: {color: "#304654", borderWidth: 1}, emphasis: {color: "#c23531"}},
                checkpointStyle: {
                    symbol: "circle",
                    symbolSize: 13,
                    color: "#c23531",
                    borderWidth: 5,
                    borderColor: "rgba(194,53,49, 0.5)",
                    animation: !0,
                    animationDuration: 300,
                    animationEasing: "quinticInOut"
                },
                controlStyle: {
                    show: !0,
                    showPlayBtn: !0,
                    showPrevBtn: !0,
                    showNextBtn: !0,
                    itemSize: 22,
                    itemGap: 12,
                    position: "left",
                    playIcon: "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",
                    stopIcon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
                    nextIcon: "path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",
                    prevIcon: "path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",
                    normal: {color: "#304654", borderColor: "#304654", borderWidth: 1},
                    emphasis: {color: "#c23531", borderColor: "#c23531", borderWidth: 2}
                },
                data: []
            }
        })
    }),t("echarts/component/timeline/TimelineView", ["require", "../../view/Component"], function (e) {
        var t = e("../../view/Component");
        return t.extend({type: "timeline"})
    }),t("echarts/component/timeline/TimelineAxis", ["require", "zrender/core/util", "../../coord/Axis", "../../coord/axisHelper"], function (e) {
        var t = e("zrender/core/util"), i = e("../../coord/Axis"), r = e("../../coord/axisHelper"),
            n = function (e, t, r, n) {
                i.call(this, e, t, r), this.type = n || "value", this._autoLabelInterval, this.model = null
            };
        return n.prototype = {
            constructor: n, getLabelInterval: function () {
                var e = this.model, i = e.getModel("label.normal"), n = i.get("interval");
                if (null != n && "auto" != n) return n;
                var n = this._autoLabelInterval;
                return n || (n = this._autoLabelInterval = r.getAxisLabelInterval(t.map(this.scale.getTicks(), this.dataToCoord, this), r.getFormattedLabels(this, i.get("formatter")), i.getModel("textStyle").getFont(), "horizontal" === e.get("orient"))), n
            }, isLabelIgnored: function (e) {
                if ("category" === this.type) {
                    var t = this.getLabelInterval();
                    return "function" == typeof t && !t(e, this.scale.getLabel(e)) || e % (t + 1)
                }
            }
        }, t.inherits(n, i), n
    }),t("echarts/component/timeline/SliderTimelineView", ["require", "zrender/core/util", "../../util/graphic", "../../util/layout", "./TimelineView", "./TimelineAxis", "../../util/symbol", "../../coord/axisHelper", "zrender/core/BoundingRect", "zrender/core/matrix", "../../util/number", "../../util/model", "../../util/format"], function (e) {
        function t(e, t) {
            return s.getLayoutRect(e.getBoxLayoutParams(), {
                width: t.getWidth(),
                height: t.getHeight()
            }, e.get("padding"))
        }

        function i(e, t, i, r) {
            var n = o.makePath(e.get(t).replace(/^path:\/\//, ""), a.clone(r || {}), new d(i[0], i[1], i[2], i[3]), "center");
            return n
        }

        function r(e, t, i, r, n, o) {
            var s = e.get("symbol"), l = t.get("color"), c = e.get("symbolSize"), h = c / 2,
                d = t.getItemStyle(["color", "symbol", "symbolSize"]);
            return n ? (n.setStyle(d), n.setColor(l), i.add(n), o && o.onUpdate(n)) : (n = u.createSymbol(s, -h, -h, c, c, l), i.add(n), o && o.onCreate(n)), r = a.merge({
                rectHover: !0,
                style: d,
                z2: 100
            }, r, !0), n.attr(r), n
        }

        function n(e, t, i, r, n) {
            if (!e.dragging) {
                var a = r.getModel("checkpointStyle"), o = i.dataToCoord(r.getData().get(["value"], t));
                n || !a.get("animation", !0) ? e.attr({position: [o, 0]}) : (e.stopAnimation(!0), e.animateTo({position: [o, 0]}, a.get("animationDuration", !0), a.get("animationEasing", !0)))
            }
        }

        var a = e("zrender/core/util"), o = e("../../util/graphic"), s = e("../../util/layout"),
            l = e("./TimelineView"), c = e("./TimelineAxis"), u = e("../../util/symbol"),
            h = e("../../coord/axisHelper"), d = e("zrender/core/BoundingRect"), p = e("zrender/core/matrix"),
            f = e("../../util/number"), g = e("../../util/model"), m = e("../../util/format"), v = m.encodeHTML,
            y = a.bind, x = a.each, _ = Math.PI;
        return l.extend({
            type: "timeline.slider", init: function (e, t) {
                this.api = t, this._axis, this._viewRect, this._timer, this._currentPointer, this._mainGroup, this._labelGroup
            }, render: function (e, t, i, r) {
                this.model = e, this.api = i, this.ecModel = t, this.group.removeAll();
                var n = this._layout(e, i), a = this._createGroup("mainGroup"), o = this._createGroup("labelGroup"),
                    s = this._axis = this._createAxis(n, e);
                x(["AxisLine", "AxisTick", "Control", "CurrentPointer"], function (t) {
                    this["_render" + t](n, a, s, e)
                }, this), this._renderAxisLabel(n, o, s, e), this._position(n, e), this._doPlayStop()
            }, remove: function () {
                this._clearTimer(), this.group.removeAll()
            }, dispose: function () {
                this._clearTimer()
            }, _layout: function (e, i) {
                var r = e.get("label.normal.position"), n = e.get("orient"), a = t(e, i);
                null == r || "auto" === r ? r = "horizontal" === n ? a.y + a.height / 2 < i.getHeight() / 2 ? "-" : "+" : a.x + a.width / 2 < i.getWidth() / 2 ? "+" : "-" : isNaN(r) && (r = {
                    horizontal: {
                        top: "-",
                        bottom: "+"
                    }, vertical: {left: "-", right: "+"}
                }[n][r]);
                var o = {horizontal: "center", vertical: r >= 0 || "+" === r ? "left" : "right"},
                    s = {horizontal: r >= 0 || "+" === r ? "top" : "bottom", vertical: "middle"},
                    l = {horizontal: 0, vertical: _ / 2}, c = "vertical" === n ? a.height : a.width,
                    u = e.getModel("controlStyle"), h = u.get("show"), d = h ? u.get("itemSize") : 0,
                    p = h ? u.get("itemGap") : 0, f = d + p, g = e.get("label.normal.rotate") || 0;
                g = g * _ / 180;
                var m, v, y, x, b = u.get("position", !0), h = u.get("show", !0), w = h && u.get("showPlayBtn", !0),
                    M = h && u.get("showPrevBtn", !0), S = h && u.get("showNextBtn", !0), A = 0, z = c;
                return "left" === b || "bottom" === b ? (w && (m = [0, 0], A += f), M && (v = [A, 0], A += f), S && (y = [z - d, 0], z -= f)) : (w && (m = [z - d, 0], z -= f), M && (v = [0, 0], A += f), S && (y = [z - d, 0], z -= f)), x = [A, z], e.get("inverse") && x.reverse(),
                    {
                        viewRect: a,
                        mainLength: c,
                        orient: n,
                        rotation: l[n],
                        labelRotation: g,
                        labelPosOpt: r,
                        labelAlign: o[n],
                        labelBaseline: s[n],
                        playPosition: m,
                        prevBtnPosition: v,
                        nextBtnPosition: y,
                        axisExtent: x,
                        controlSize: d,
                        controlGap: p
                    }
            }, _position: function (e, t) {
                function i(e) {
                    var t = e.position;
                    e.origin = [h[0][0] - t[0], h[1][0] - t[1]]
                }

                function r(e) {
                    return [[e.x, e.x + e.width], [e.y, e.y + e.height]]
                }

                function n(e, t, i, r, n) {
                    e[r] += i[r][n] - t[r][n]
                }

                var a = this._mainGroup, o = this._labelGroup, s = e.viewRect;
                if ("vertical" === e.orient) {
                    var l = p.create(), c = s.x, u = s.y + s.height;
                    p.translate(l, l, [-c, -u]), p.rotate(l, l, -_ / 2), p.translate(l, l, [c, u]), s = s.clone(), s.applyTransform(l)
                }
                var h = r(s), d = r(a.getBoundingRect()), f = r(o.getBoundingRect()), g = a.position, m = o.position;
                m[0] = g[0] = h[0][0];
                var v = e.labelPosOpt;
                if (isNaN(v)) {
                    var y = "+" === v ? 0 : 1;
                    n(g, d, h, 1, y), n(m, f, h, 1, 1 - y)
                } else {
                    var y = v >= 0 ? 0 : 1;
                    n(g, d, h, 1, y), m[1] = g[1] + v
                }
                a.position = g, o.position = m, a.rotation = o.rotation = e.rotation, i(a), i(o)
            }, _createAxis: function (e, t) {
                var i = t.getData(), r = t.get("axisType"), n = h.createScaleByModel(t, r),
                    a = i.getDataExtent("value");
                n.setExtent(a[0], a[1]), this._customizeScale(n, i), n.niceTicks();
                var o = new c("value", n, e.axisExtent, r);
                return o.model = t, o
            }, _customizeScale: function (e, t) {
                e.getTicks = function () {
                    return t.mapArray(["value"], function (e) {
                        return e
                    })
                }, e.getTicksLabels = function () {
                    return a.map(this.getTicks(), e.getLabel, e)
                }
            }, _createGroup: function (e) {
                var t = this["_" + e] = new o.Group;
                return this.group.add(t), t
            }, _renderAxisLine: function (e, t, i, r) {
                var n = i.getExtent();
                r.get("lineStyle.show") && t.add(new o.Line({
                    shape: {x1: n[0], y1: 0, x2: n[1], y2: 0},
                    style: a.extend({lineCap: "round"}, r.getModel("lineStyle").getLineStyle()),
                    silent: !0,
                    z2: 1
                }))
            }, _renderAxisTick: function (e, t, i, n) {
                var a = n.getData(), s = i.scale.getTicks(), l = this._prepareTooltipHostModel(a, n);
                x(s, function (e, n) {
                    var s = i.dataToCoord(e), c = a.getItemModel(n), u = c.getModel("itemStyle.normal"),
                        h = c.getModel("itemStyle.emphasis"),
                        d = {position: [s, 0], onclick: y(this._changeTimeline, this, n)}, p = r(c, u, t, d);
                    o.setHoverStyle(p, h.getItemStyle()), c.get("tooltip") ? (p.dataIndex = n, p.hostModel = l) : p.dataIndex = p.hostModel = null
                }, this)
            }, _prepareTooltipHostModel: function (e, t) {
                var i = g.createDataFormatModel({}, e, t.get("data")), r = this;
                return i.formatTooltip = function (e) {
                    return v(r._axis.scale.getLabel(e))
                }, i
            }, _renderAxisLabel: function (e, t, i, r) {
                var n = r.getModel("label.normal");
                if (n.get("show")) {
                    var a = r.getData(), s = i.scale.getTicks(), l = h.getFormattedLabels(i, n.get("formatter")),
                        c = i.getLabelInterval();
                    x(s, function (r, n) {
                        if (!i.isLabelIgnored(n, c)) {
                            var s = a.getItemModel(n), u = s.getModel("label.normal.textStyle"),
                                h = s.getModel("label.emphasis.textStyle"), d = i.dataToCoord(r), p = new o.Text({
                                    style: {
                                        text: l[n],
                                        textAlign: e.labelAlign,
                                        textBaseline: e.labelBaseline,
                                        textFont: u.getFont(),
                                        fill: u.getTextColor()
                                    },
                                    position: [d, 0],
                                    rotation: e.labelRotation - e.rotation,
                                    onclick: y(this._changeTimeline, this, n),
                                    silent: !1
                                });
                            t.add(p), o.setHoverStyle(p, h.getItemStyle())
                        }
                    }, this)
                }
            }, _renderControl: function (e, t, r, n) {
                function a(e, r, a, d) {
                    if (e) {
                        var p = {
                            position: e,
                            origin: [s / 2, 0],
                            rotation: d ? -l : 0,
                            rectHover: !0,
                            style: c,
                            onclick: a
                        }, f = i(n, r, h, p);
                        t.add(f), o.setHoverStyle(f, u)
                    }
                }

                var s = e.controlSize, l = e.rotation, c = n.getModel("controlStyle.normal").getItemStyle(),
                    u = n.getModel("controlStyle.emphasis").getItemStyle(), h = [0, -s / 2, s, s], d = n.getPlayState(),
                    p = n.get("inverse", !0);
                a(e.nextBtnPosition, "controlStyle.nextIcon", y(this._changeTimeline, this, p ? "-" : "+")), a(e.prevBtnPosition, "controlStyle.prevIcon", y(this._changeTimeline, this, p ? "+" : "-")), a(e.playPosition, "controlStyle." + (d ? "stopIcon" : "playIcon"), y(this._handlePlayClick, this, !d), !0)
            }, _renderCurrentPointer: function (e, t, i, a) {
                var o = a.getData(), s = a.getCurrentIndex(), l = o.getItemModel(s).getModel("checkpointStyle"),
                    c = this, u = {
                        onCreate: function (e) {
                            e.draggable = !0, e.drift = y(c._handlePointerDrag, c), e.ondragend = y(c._handlePointerDragend, c), n(e, s, i, a, !0)
                        }, onUpdate: function (e) {
                            n(e, s, i, a)
                        }
                    };
                this._currentPointer = r(l, l, this._mainGroup, {}, this._currentPointer, u)
            }, _handlePlayClick: function (e) {
                this._clearTimer(), this.api.dispatchAction({type: "timelinePlayChange", playState: e, from: this.uid})
            }, _handlePointerDrag: function (e, t, i) {
                this._clearTimer(), this._pointerChangeTimeline([i.offsetX, i.offsetY])
            }, _handlePointerDragend: function (e) {
                this._pointerChangeTimeline([e.offsetX, e.offsetY], !0)
            }, _pointerChangeTimeline: function (e, t) {
                var i = this._toAxisCoord(e)[0], r = this._axis, n = f.asc(r.getExtent().slice());
                i > n[1] && (i = n[1]), i < n[0] && (i = n[0]), this._currentPointer.position[0] = i, this._currentPointer.dirty();
                var a = this._findNearestTick(i), o = this.model;
                (t || a !== o.getCurrentIndex() && o.get("realtime")) && this._changeTimeline(a)
            }, _doPlayStop: function () {
                function e() {
                    var e = this.model;
                    this._changeTimeline(e.getCurrentIndex() + (e.get("rewind", !0) ? -1 : 1))
                }

                this._clearTimer(), this.model.getPlayState() && (this._timer = setTimeout(y(e, this), this.model.get("playInterval")))
            }, _toAxisCoord: function (e) {
                var t = this._mainGroup.getLocalTransform();
                return o.applyTransform(e, t, !0)
            }, _findNearestTick: function (e) {
                var t, i = this.model.getData(), r = 1 / 0, n = this._axis;
                return i.each(["value"], function (i, a) {
                    var o = n.dataToCoord(i), s = Math.abs(o - e);
                    r > s && (r = s, t = a)
                }), t
            }, _clearTimer: function () {
                this._timer && (clearTimeout(this._timer), this._timer = null)
            }, _changeTimeline: function (e) {
                var t = this.model.getCurrentIndex();
                "+" === e ? e = t + 1 : "-" === e && (e = t - 1), this.api.dispatchAction({
                    type: "timelineChange",
                    currentIndex: e,
                    from: this.uid
                })
            }
        })
    }),t("echarts/component/timeline", ["require", "../echarts", "./timeline/preprocessor", "./timeline/typeDefaulter", "./timeline/timelineAction", "./timeline/SliderTimelineModel", "./timeline/SliderTimelineView"], function (e) {
        var t = e("../echarts");
        t.registerPreprocessor(e("./timeline/preprocessor")), e("./timeline/typeDefaulter"), e("./timeline/timelineAction"), e("./timeline/SliderTimelineModel"), e("./timeline/SliderTimelineView")
    }),t("echarts/component/toolbox/featureManager", ["require"], function (e) {
        var t = {};
        return {
            register: function (e, i) {
                t[e] = i
            }, get: function (e) {
                return t[e]
            }
        }
    }),t("echarts/component/toolbox/ToolboxModel", ["require", "./featureManager", "zrender/core/util", "../../echarts"], function (e) {
        var t = e("./featureManager"), i = e("zrender/core/util");
        e("../../echarts").extendComponentModel({
            type: "toolbox",
            mergeDefaultAndTheme: function (e) {
                this.$superApply("mergeDefaultAndTheme", arguments), i.each(this.option.feature, function (e, r) {
                    var n = t.get(r);
                    n && i.merge(e, n.defaultOption)
                })
            },
            defaultOption: {
                show: !0,
                z: 6,
                zlevel: 0,
                orient: "horizontal",
                left: "right",
                top: "top",
                backgroundColor: "transparent",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemSize: 15,
                itemGap: 8,
                showTitle: !0,
                iconStyle: {normal: {borderColor: "#666", color: "none"}, emphasis: {borderColor: "#3E98C5"}}
            }
        })
    }),t("echarts/component/toolbox/ToolboxView", ["require", "./featureManager", "zrender/core/util", "../../util/graphic", "../../model/Model", "../../data/DataDiffer", "../helper/listComponent", "zrender/contain/text", "../../echarts"], function (e) {
        var t = e("./featureManager"), i = e("zrender/core/util"), r = e("../../util/graphic"),
            n = e("../../model/Model"), a = e("../../data/DataDiffer"), o = e("../helper/listComponent"),
            s = e("zrender/contain/text");
        return e("../../echarts").extendComponentView({
            type: "toolbox", render: function (e, l, c) {
                function u(i, r) {
                    var a, o = m[i], s = m[r], u = f[o], d = new n(u, e, e.ecModel);
                    if (o && !s) {
                        var p = t.get(o);
                        if (!p) return;
                        g[o] = a = new p(d)
                    } else {
                        if (a = g[s], !a) return;
                        a.model = d
                    }
                    return !o && s ? void(a.dispose && a.dispose(l, c)) : d.get("show") ? (h(d, a, o), d.setIconStatus = function (e, t) {
                        var i = this.option, r = this.iconPaths;
                        i.iconStatus = i.iconStatus || {}, i.iconStatus[e] = t, r[e] && r[e].trigger(t)
                    }, void(a.render && a.render(d, l, c))) : void(a.remove && a.remove(l, c))
                }

                function h(t, n, a) {
                    var o = t.getModel("iconStyle"), s = n.getIcons ? n.getIcons() : t.get("icon"),
                        u = t.get("title") || {};
                    if ("string" == typeof s) {
                        var h = s, f = u;
                        s = {}, u = {}, s[a] = h, u[a] = f
                    }
                    var g = t.iconPaths = {};
                    i.each(s, function (a, s) {
                        var h = o.getModel("normal").getItemStyle(), f = o.getModel("emphasis").getItemStyle(),
                            m = r.makePath(a, {style: h, hoverStyle: f, rectHover: !0}, {
                                x: -p / 2,
                                y: -p / 2,
                                width: p,
                                height: p
                            }, "center");
                        r.setHoverStyle(m), e.get("showTitle") && (m.__title = u[s], m.on("mouseover", function () {
                            m.setStyle({
                                text: u[s],
                                textPosition: f.textPosition || "bottom",
                                textFill: f.fill || f.stroke || "#000",
                                textAlign: f.textAlign || "center"
                            })
                        }).on("mouseout", function () {
                            m.setStyle({textFill: null})
                        })), m.trigger(t.get("iconStatus." + s) || "normal"), d.add(m), m.on("click", i.bind(n.onclick, n, l, c, s)), g[s] = m
                    })
                }

                var d = this.group;
                if (d.removeAll(), e.get("show")) {
                    var p = +e.get("itemSize"), f = e.get("feature") || {}, g = this._features || (this._features = {}),
                        m = [];
                    i.each(f, function (e, t) {
                        m.push(t)
                    }), new a(this._featureNames || [], m).add(u).update(u).remove(i.curry(u, null)).execute(), this._featureNames = m, o.layout(d, e, c), o.addBackground(d, e), d.eachChild(function (e) {
                        var t = e.__title, i = e.hoverStyle;
                        if (i && t) {
                            var r = s.getBoundingRect(t, i.font), n = e.position[0] + d.position[0],
                                a = e.position[1] + d.position[1] + p, o = !1;
                            a + r.height > c.getHeight() && (i.textPosition = "top", o = !0);
                            var l = o ? -5 - r.height : p + 8;
                            n + r.width / 2 > c.getWidth() ? (i.textPosition = ["100%", l], i.textAlign = "right") : n - r.width / 2 < 0 && (i.textPosition = [0, l], i.textAlign = "left")
                        }
                    })
                }
            }, remove: function (e, t) {
                i.each(this._features, function (i) {
                    i.remove && i.remove(e, t)
                }), this.group.removeAll()
            }, dispose: function (e, t) {
                i.each(this._features, function (i) {
                    i.dispose && i.dispose(e, t)
                })
            }
        })
    }),t("echarts/component/toolbox/feature/SaveAsImage", ["require", "../featureManager"], function (e) {
        function t(e) {
            this.model = e
        }

        t.defaultOption = {
            show: !0,
            icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6            M29.2,45.1L29.2,0",
            title: "保存为图片",
            type: "png",
            name: "",
            excludeComponents: ["toolbox"],
            pixelRatio: 1
        };
        var i = t.prototype;
        return i.onclick = function (e, t) {
            var i = this.model, r = e.get("title.0.text") || "echarts", n = document.createElement("a"),
                a = i.get("type", !0) || "png";
            n.download = r + "." + a, n.target = "_blank", n.href = t.getConnectedDataURL({
                type: a,
                backgroundColor: i.get("backgroundColor", !0) || e.get("backgroundColor") || "#fff",
                excludeComponents: i.get("excludeComponents"),
                pixelRatio: i.get("pixelRatio")
            }), n.click()
        }, e("../featureManager").register("saveAsImage", t), t
    }),t("echarts/component/toolbox/feature/MagicType", ["require", "zrender/core/util", "../../../echarts", "../featureManager"], function (e) {
        function t(e) {
            this.model = e
        }

        var i = e("zrender/core/util");
        t.defaultOption = {
            show: !0,
            type: [],
            icon: {
                line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
                bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
                stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
                tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
            },
            title: {line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺"},
            option: {},
            seriesIndex: {}
        };
        var r = t.prototype;
        r.getIcons = function () {
            var e = this.model, t = e.get("icon"), r = {};
            return i.each(e.get("type"), function (e) {
                t[e] && (r[e] = t[e])
            }), r
        };
        var n = {
            line: function (e, t, r, n) {
                return "bar" === e ? i.merge({
                    id: t,
                    type: "line",
                    data: r.get("data"),
                    stack: r.get("stack")
                }, n.get("option.line")) : void 0
            }, bar: function (e, t, r, n) {
                return "line" === e ? i.merge({
                    id: t,
                    type: "bar",
                    data: r.get("data"),
                    stack: r.get("stack")
                }, n.get("option.bar")) : void 0
            }, stack: function (e, t, i, r) {
                return "line" === e || "bar" === e ? {id: t, stack: "__ec_magicType_stack__"} : void 0
            }, tiled: function (e, t, i, r) {
                return "line" === e || "bar" === e ? {id: t, stack: ""} : void 0
            }
        }, a = [["line", "bar"], ["stack", "tiled"]];
        r.onclick = function (e, t, r) {
            var o = this.model, s = o.get("seriesIndex." + r);
            if (n[r]) {
                var l = {series: []}, c = function (e) {
                    var t = e.subType, a = e.id, s = n[r](t, a, e, o);
                    s && (i.defaults(s, e.option), l.series.push(s))
                };
                i.each(a, function (e) {
                    i.indexOf(e, r) >= 0 && i.each(e, function (e) {
                        o.setIconStatus(e, "normal")
                    })
                }), o.setIconStatus(r, "emphasis"), e.eachComponent({
                    mainType: "series",
                    seriesIndex: s
                }, c), t.dispatchAction({type: "changeMagicType", currentType: r, newOption: l})
            }
        };
        var o = e("../../../echarts");
        return o.registerAction({
            type: "changeMagicType",
            event: "magicTypeChanged",
            update: "prepareAndUpdate"
        }, function (e, t) {
            t.mergeOption(e.newOption)
        }), e("../featureManager").register("magicType", t), t
    }),t("echarts/component/toolbox/feature/DataView", ["require", "zrender/core/util", "zrender/core/event", "../featureManager", "../../../echarts"], function (e) {
        function t(e) {
            var t = {}, i = [], r = [];
            return e.eachRawSeries(function (e) {
                var n = e.coordinateSystem;
                if (!n || "cartesian2d" !== n.type && "polar" !== n.type) i.push(e); else {
                    var a = n.getBaseAxis();
                    if ("category" === a.type) {
                        var o = a.dim + "_" + a.index;
                        t[o] || (t[o] = {
                            categoryAxis: a,
                            valueAxis: n.getOtherAxis(a),
                            series: []
                        }, r.push({axisDim: a.dim, axisIndex: a.index})), t[o].series.push(e)
                    } else i.push(e)
                }
            }), {seriesGroupByCategoryAxis: t, other: i, meta: r}
        }

        function i(e) {
            var t = [];
            return d.each(e, function (e, i) {
                var r = e.categoryAxis, n = e.valueAxis, a = n.dim, o = [" "].concat(d.map(e.series, function (e) {
                    return e.name
                })), s = [r.model.getCategories()];
                d.each(e.series, function (e) {
                    s.push(e.getRawData().mapArray(a, function (e) {
                        return e
                    }))
                });
                for (var l = [o.join(g)], c = 0; c < s[0].length; c++) {
                    for (var u = [], h = 0; h < s.length; h++) u.push(s[h][c]);
                    l.push(u.join(g))
                }
                t.push(l.join("\n"))
            }), t.join("\n\n" + f + "\n\n")
        }

        function r(e) {
            return d.map(e, function (e) {
                var t = e.getRawData(), i = [e.name], r = [];
                return t.each(t.dimensions, function () {
                    for (var e = arguments.length, n = arguments[e - 1], a = t.getName(n), o = 0; e - 1 > o; o++) r[o] = arguments[o];
                    i.push((a ? a + g : "") + r.join(g))
                }), i.join("\n")
            }).join("\n\n" + f + "\n\n")
        }

        function n(e) {
            var n = t(e);
            return {
                value: d.filter([i(n.seriesGroupByCategoryAxis), r(n.other)], function (e) {
                    return e.replace(/[\n\t\s]/g, "")
                }).join("\n\n" + f + "\n\n"), meta: n.meta
            }
        }

        function a(e) {
            return e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }

        function o(e) {
            var t = e.slice(0, e.indexOf("\n"));
            return t.indexOf(g) >= 0 ? !0 : void 0
        }

        function s(e) {
            for (var t = e.split(/\n+/g), i = a(t.shift()).split(m), r = [], n = d.map(i, function (e) {
                return {name: e, data: []}
            }), o = 0; o < t.length; o++) {
                var s = a(t[o]).split(m);
                r.push(s.shift());
                for (var l = 0; l < s.length; l++) n[l] && (n[l].data[o] = s[l])
            }
            return {series: n, categories: r}
        }

        function l(e) {
            for (var t = e.split(/\n+/g), i = a(t.shift()), r = [], n = 0; n < t.length; n++) {
                var o, s = a(t[n]).split(m), l = "", c = !1;
                isNaN(s[0]) ? (c = !0, l = s[0], s = s.slice(1), r[n] = {
                    name: l,
                    value: []
                }, o = r[n].value) : o = r[n] = [];
                for (var u = 0; u < s.length; u++) o.push(+s[u]);
                1 === o.length && (c ? r[n].value = o[0] : r[n] = o[0])
            }
            return {name: i, data: r}
        }

        function c(e, t) {
            var i = e.split(new RegExp("\n*" + f + "\n*", "g")), r = {series: []};
            return d.each(i, function (e, i) {
                if (o(e)) {
                    var n = s(e), a = t[i], c = a.axisDim + "Axis";
                    a && (r[c] = r[c] || [], r[c][a.axisIndex] = {data: n.categories}, r.series = r.series.concat(n.series))
                } else {
                    var n = l(e);
                    r.series.push(n)
                }
            }), r
        }

        function u(e) {
            this._dom = null, this.model = e
        }

        function h(e, t) {
            return d.map(e, function (e, i) {
                var r = t && t[i];
                return d.isObject(r) && !d.isArray(r) ? (d.isObject(e) && !d.isArray(e) && (e = e.value), d.defaults({value: e}, r)) : e
            })
        }

        var d = e("zrender/core/util"), p = e("zrender/core/event"), f = new Array(60).join("-"), g = "	",
            m = new RegExp("[" + g + "| ]+", "g");
        return u.defaultOption = {
            show: !0,
            readOnly: !1,
            icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
            title: "数据视图",
            lang: ["数据视图", "关闭", "刷新"],
            backgroundColor: "#fff",
            textColor: "#000",
            textareaColor: "#fff",
            textareaBorderColor: "#333",
            buttonColor: "#c23531",
            buttonTextColor: "#fff"
        }, u.prototype.onclick = function (e, t) {
            function i() {
                r.removeChild(o), x._dom = null
            }

            var r = t.getDom(), a = this.model;
            this._dom && r.removeChild(this._dom);
            var o = document.createElement("div");
            o.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", o.style.backgroundColor = a.get("backgroundColor") || "#fff";
            var s = document.createElement("h4"), l = a.get("lang") || [];
            s.innerHTML = l[0] || a.get("title"), s.style.cssText = "margin: 10px 20px;", s.style.color = a.get("textColor");
            var u = document.createElement("textarea");
            u.style.cssText = "display:block;width:100%;font-size:14px;line-height:1.6rem;font-family:Monaco,Consolas,Courier new,monospace", u.readOnly = a.get("readOnly"), u.style.color = a.get("textColor"), u.style.borderColor = a.get("textareaBorderColor"), u.style.backgroundColor = a.get("textareaColor");
            var h = n(e);
            u.value = h.value;
            var d = h.meta, f = document.createElement("div");
            f.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
            var m = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
                v = document.createElement("div"), y = document.createElement("div");
            m += ";background-color:" + a.get("buttonColor"), m += ";color:" + a.get("buttonTextColor");
            var x = this;
            p.addEventListener(v, "click", i), p.addEventListener(y, "click", function () {
                var e;
                try {
                    e = c(u.value, d)
                } catch (r) {
                    throw i(), new Error("Data view format error " + r)
                }
                t.dispatchAction({type: "changeDataView", newOption: e}), i()
            }), v.innerHTML = l[1], y.innerHTML = l[2], y.style.cssText = m, v.style.cssText = m, f.appendChild(y), f.appendChild(v), p.addEventListener(u, "keydown", function (e) {
                if (9 === (e.keyCode || e.which)) {
                    var t = this.value, i = this.selectionStart, r = this.selectionEnd;
                    this.value = t.substring(0, i) + g + t.substring(r), this.selectionStart = this.selectionEnd = i + 1, p.stop(e)
                }
            }), o.appendChild(s), o.appendChild(u), o.appendChild(f), u.style.height = r.clientHeight - 80 + "px", r.appendChild(o), this._dom = o
        }, u.prototype.remove = function (e, t) {
            this._dom && t.getDom().removeChild(this._dom)
        }, u.prototype.dispose = function (e, t) {
            this.remove(e, t)
        }, e("../featureManager").register("dataView", u), e("../../../echarts").registerAction({
            type: "changeDataView",
            event: "dataViewChanged",
            update: "prepareAndUpdate"
        }, function (e, t) {
            var i = [];
            d.each(e.newOption.series, function (e) {
                var r = t.getSeriesByName(e.name)[0];
                if (r) {
                    var n = r.get("data");
                    i.push({name: e.name, data: h(e.data, n)})
                } else i.push(d.extend({type: "scatter"}, e))
            }), t.mergeOption(d.defaults({series: i}, e.newOption))
        }), u
    }),t("echarts/component/dataZoom/history", ["require", "zrender/core/util"], function (e) {
        function t(e) {
            var t = e[n];
            return t || (t = e[n] = [{}]), t
        }

        var i = e("zrender/core/util"), r = i.each, n = "\x00_ec_hist_store", a = {
            push: function (e, i) {
                var n = t(e);
                r(i, function (t, i) {
                    for (var r = n.length - 1; r >= 0; r--) {
                        var a = n[r];
                        if (a[i]) break
                    }
                    if (0 > r) {
                        var o = e.queryComponents({mainType: "dataZoom", subType: "select", id: i})[0];
                        if (o) {
                            var s = o.getPercentRange();
                            n[0][i] = {dataZoomId: i, start: s[0], end: s[1]}
                        }
                    }
                }), n.push(i)
            }, pop: function (e) {
                var i = t(e), n = i[i.length - 1];
                i.length > 1 && i.pop();
                var a = {};
                return r(n, function (e, t) {
                    for (var r = i.length - 1; r >= 0; r--) {
                        var e = i[r][t];
                        if (e) {
                            a[t] = e;
                            break
                        }
                    }
                }), a
            }, clear: function (e) {
                e[n] = null
            }, count: function (e) {
                return t(e).length
            }
        };
        return a
    }),t("echarts/component/dataZoom/SelectZoomModel", ["require", "./DataZoomModel"], function (e) {
        var t = e("./DataZoomModel");
        return t.extend({type: "dataZoom.select"})
    }),t("echarts/component/dataZoom/SelectZoomView", ["require", "./DataZoomView"], function (e) {
        return e("./DataZoomView").extend({type: "dataZoom.select"})
    }),t("echarts/component/dataZoomSelect", ["require", "./dataZoom/typeDefaulter", "./dataZoom/DataZoomModel", "./dataZoom/DataZoomView", "./dataZoom/SelectZoomModel", "./dataZoom/SelectZoomView", "./dataZoom/dataZoomProcessor", "./dataZoom/dataZoomAction"], function (e) {
        e("./dataZoom/typeDefaulter"), e("./dataZoom/DataZoomModel"), e("./dataZoom/DataZoomView"), e("./dataZoom/SelectZoomModel"), e("./dataZoom/SelectZoomView"), e("./dataZoom/dataZoomProcessor"), e("./dataZoom/dataZoomAction")
    }),t("echarts/component/toolbox/feature/DataZoom", ["require", "zrender/core/util", "../../../util/number", "../../helper/SelectController", "zrender/core/BoundingRect", "zrender/container/Group", "../../dataZoom/history", "../../helper/interactionMutex", "../../dataZoomSelect", "../featureManager", "../../../echarts"], function (e) {
        function t(e) {
            this.model = e, this._controllerGroup, this._controller, this._isZoomActive
        }

        function i(e, t) {
            var i = [{axisModel: e.getAxis("x").model, axisIndex: 0}, {axisModel: e.getAxis("y").model, axisIndex: 0}];
            return i.grid = e, t.eachComponent({mainType: "dataZoom", subType: "select"}, function (e, n) {
                r("xAxis", i[0].axisModel, e, t) && (i[0].dataZoomModel = e), r("yAxis", i[1].axisModel, e, t) && (i[1].dataZoomModel = e)
            }), i
        }

        function r(e, t, i, r) {
            var n = i.get(e + "Index");
            return null != n && r.getComponent(e, n) === t
        }

        function n(e, t) {
            var i = t.grid, r = new u(e[0][0], e[1][0], e[0][1] - e[0][0], e[1][1] - e[1][0]);
            if (r.intersect(i.getRect())) {
                var n = i.getCartesian(t[0].axisIndex, t[1].axisIndex), a = n.pointToData([e[0][0], e[1][0]], !0),
                    o = n.pointToData([e[0][1], e[1][1]], !0);
                return [g([a[0], o[0]]), g([a[1], o[1]])]
            }
        }

        function a(e, t, i, r) {
            var n = t[i], a = n.dataZoomModel;
            return {dataZoomId: a.id, startValue: e[i][0], endValue: e[i][1]}
        }

        function o(e, t) {
            e.setIconStatus("back", d.count(t) > 1 ? "emphasis" : "normal")
        }

        var s = e("zrender/core/util"), l = e("../../../util/number"), c = e("../../helper/SelectController"),
            u = e("zrender/core/BoundingRect"), h = e("zrender/container/Group"), d = e("../../dataZoom/history"),
            p = e("../../helper/interactionMutex"), f = s.each, g = l.asc;
        e("../../dataZoomSelect");
        var m = "\x00_ec_\x00toolbox-dataZoom_";
        t.defaultOption = {
            show: !0,
            icon: {
                zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
                back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
            },
            title: {zoom: "区域缩放", back: "区域缩放还原"}
        };
        var v = t.prototype;
        v.render = function (e, t, i) {
            o(e, t)
        }, v.onclick = function (e, t, i) {
            var r = this._controllerGroup;
            this._controllerGroup || (r = this._controllerGroup = new h, t.getZr().add(r)), y[i].call(this, r, this.model, e, t)
        }, v.remove = function (e, t) {
            this._disposeController(), p.release("globalPan", t.getZr())
        }, v.dispose = function (e, t) {
            var i = t.getZr();
            p.release("globalPan", i), this._disposeController(), this._controllerGroup && i.remove(this._controllerGroup)
        };
        var y = {
            zoom: function (e, t, i, r) {
                var n = this._isZoomActive = !this._isZoomActive, a = r.getZr();
                p[n ? "take" : "release"]("globalPan", a), t.setIconStatus("zoom", n ? "emphasis" : "normal"), n ? (a.setDefaultCursorStyle("crosshair"), this._createController(e, t, i, r)) : (a.setDefaultCursorStyle("default"), this._disposeController())
            }, back: function (e, t, i, r) {
                this._dispatchAction(d.pop(i), r)
            }
        };
        return v._createController = function (e, t, i, r) {
            var n = this._controller = new c("rect", r.getZr(), {
                lineWidth: 3,
                stroke: "#333",
                fill: "rgba(0,0,0,0.2)"
            });
            n.on("selectEnd", s.bind(this._onSelected, this, n, t, i, r)), n.enable(e, !1)
        }, v._disposeController = function () {
            var e = this._controller;
            e && (e.off("selected"), e.dispose())
        }, v._onSelected = function (e, t, r, o, s) {
            if (s.length) {
                var l = s[0];
                e.update();
                var c = {};
                r.eachComponent("grid", function (e, t) {
                    var o = e.coordinateSystem, s = i(o, r), u = n(l, s);
                    if (u) {
                        var h = a(u, s, 0, "x"), d = a(u, s, 1, "y");
                        h && (c[h.dataZoomId] = h), d && (c[d.dataZoomId] = d)
                    }
                }, this), d.push(r, c), this._dispatchAction(c, o)
            }
        }, v._dispatchAction = function (e, t) {
            var i = [];
            f(e, function (e) {
                i.push(e)
            }), i.length && t.dispatchAction({type: "dataZoom", from: this.uid, batch: s.clone(i, !0)})
        }, e("../featureManager").register("dataZoom", t), e("../../../echarts").registerPreprocessor(function (e) {
            function t(e) {
                i(e, function (t, i) {
                    var n = {type: "select", $fromToolbox: !0, id: m + e + i};
                    n[e + "Index"] = i, r.push(n)
                })
            }

            function i(t, i) {
                var r = e[t];
                s.isArray(r) || (r = r ? [r] : []), f(r, i)
            }

            if (e) {
                var r = e.dataZoom || (e.dataZoom = []);
                s.isArray(r) || (r = [r]);
                var n = e.toolbox;
                n && (s.isArray(n) && (n = n[0]), n && n.feature && n.feature.dataZoom && (t("xAxis"), t("yAxis")))
            }
        }), t
    }),t("echarts/component/toolbox/feature/Restore", ["require", "../../dataZoom/history", "../featureManager", "../../../echarts"], function (e) {
        function t(e) {
            this.model = e
        }

        var i = e("../../dataZoom/history");
        t.defaultOption = {
            show: !0,
            icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
            title: "还原"
        };
        var r = t.prototype;
        return r.onclick = function (e, t, r) {
            i.clear(e), t.dispatchAction({type: "restore", from: this.uid})
        }, e("../featureManager").register("restore", t), e("../../../echarts").registerAction({
            type: "restore",
            event: "restore",
            update: "prepareAndUpdate"
        }, function (e, t) {
            t.resetOption("recreate")
        }), t
    }),t("echarts/component/toolbox", ["require", "./toolbox/ToolboxModel", "./toolbox/ToolboxView", "./toolbox/feature/SaveAsImage", "./toolbox/feature/MagicType", "./toolbox/feature/DataView", "./toolbox/feature/DataZoom", "./toolbox/feature/Restore"], function (e) {
        e("./toolbox/ToolboxModel"), e("./toolbox/ToolboxView"), e("./toolbox/feature/SaveAsImage"), e("./toolbox/feature/MagicType"), e("./toolbox/feature/DataView"), e("./toolbox/feature/DataZoom"), e("./toolbox/feature/Restore")
    }),t("zrender/vml/core", ["require", "../core/env"], function (e) {
        function t() {
            if (!o) {
                o = !0;
                var e = a.styleSheets;
                e.length < 31 ? a.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : e[0].addRule(".zrvml", "behavior:url(#default#VML)")
            }
        }

        if (!e("../core/env").canvasSupported) {
            var i, r = "urn:schemas-microsoft-com:vml", n = window, a = n.document, o = !1;
            try {
                !a.namespaces.zrvml && a.namespaces.add("zrvml", r), i = function (e) {
                    return a.createElement("<zrvml:" + e + ' class="zrvml">')
                }
            } catch (s) {
                i = function (e) {
                    return a.createElement("<" + e + ' xmlns="' + r + '" class="zrvml">')
                }
            }
            return {doc: a, initVML: t, createNode: i}
        }
    }),t("zrender/vml/graphic", ["require", "../core/env", "../core/vector", "../core/BoundingRect", "../core/PathProxy", "../tool/color", "../contain/text", "../graphic/mixin/RectText", "../graphic/Displayable", "../graphic/Image", "../graphic/Text", "../graphic/Path", "../graphic/Gradient", "./core"], function (e) {
        function t(e) {
            e.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", e.coordsize = B + "," + B, e.coordorigin = "0,0"
        }

        function i(e) {
            return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
        }

        function r(e, t, i) {
            return "rgb(" + [e, t, i].join(",") + ")"
        }

        function n(e, t) {
            t && e && t.parentNode !== e && e.appendChild(t)
        }

        function a(e, t) {
            t && e && t.parentNode === e && e.removeChild(t)
        }

        function o(e, t, i) {
            return (parseFloat(e) || 0) * G + (parseFloat(t) || 0) * F + i
        }

        function s(e, t, i) {
            var n = b.parse(t);
            i = +i, isNaN(i) && (i = 1), n && (e.color = r(n[0], n[1], n[2]), e.opacity = i * n[3])
        }

        function l(e) {
            var t = b.parse(e);
            return [r(t[0], t[1], t[2]), t[3]]
        }

        function c(e, t, i) {
            var r = t.fill;
            if (null != r) if (r instanceof L) {
                var n, a = 0, o = [0, 0], c = 0, u = 1, h = i.getBoundingRect(), d = h.width, p = h.height;
                if ("linear" === r.type) {
                    n = "gradient";
                    var f = i.transform, g = [r.x * d, r.y * p], m = [r.x2 * d, r.y2 * p];
                    f && (O(g, g, f), O(m, m, f));
                    var v = m[0] - g[0], y = m[1] - g[1];
                    a = 180 * Math.atan2(v, y) / Math.PI, 0 > a && (a += 360), 1e-6 > a && (a = 0)
                } else {
                    n = "gradientradial";
                    var g = [r.x * d, r.y * p], f = i.transform, x = i.scale, _ = d, b = p;
                    o = [(g[0] - h.x) / _, (g[1] - h.y) / b], f && O(g, g, f), _ /= x[0] * B, b /= x[1] * B;
                    var w = R(_, b);
                    c = 0 / w, u = 2 * r.r / w - c
                }
                var M = r.colorStops.slice();
                M.sort(function (e, t) {
                    return e.offset - t.offset
                });
                for (var S = M.length, A = [], z = [], C = 0; S > C; C++) {
                    var I = M[C], T = l(I.color);
                    z.push(I.offset * u + c + " " + T[0]), (0 === C || C === S - 1) && A.push(T)
                }
                if (S >= 2) {
                    var D = A[0][0], P = A[1][0], k = A[0][1] * t.opacity, V = A[1][1] * t.opacity;
                    e.type = n, e.method = "none", e.focus = "100%", e.angle = a, e.color = D, e.color2 = P, e.colors = z.join(","), e.opacity = V, e.opacity2 = k
                }
                "radial" === n && (e.focusposition = o.join(","))
            } else s(e, r, t.opacity)
        }

        function u(e, t) {
            null != t.lineJoin && (e.joinstyle = t.lineJoin), null != t.miterLimit && (e.miterlimit = t.miterLimit * B), null != t.lineCap && (e.endcap = t.lineCap), null != t.lineDash && (e.dashstyle = t.lineDash.join(" ")), null == t.stroke || t.stroke instanceof L || s(e, t.stroke, t.opacity)
        }

        function h(e, t, i, r) {
            var o = "fill" == t, s = e.getElementsByTagName(t)[0];
            null != i[t] && "none" !== i[t] && (o || !o && i.lineWidth) ? (e[o ? "filled" : "stroked"] = "true", i[t] instanceof L && a(e, s), s || (s = I.createNode(t)), o ? c(s, i, r) : u(s, i), n(e, s)) : (e[o ? "filled" : "stroked"] = "false", a(e, s))
        }

        function d(e, t) {
            var i, r, n, a, o, s, l = _.M, c = _.C, u = _.L, h = _.A, d = _.Q, p = [];
            for (a = 0; a < e.length;) {
                switch (n = e[a++], r = "", i = 0, n) {
                    case l:
                        r = " m ", i = 1, o = e[a++], s = e[a++], Z[0][0] = o, Z[0][1] = s;
                        break;
                    case u:
                        r = " l ", i = 1, o = e[a++], s = e[a++], Z[0][0] = o, Z[0][1] = s;
                        break;
                    case d:
                    case c:
                        r = " c ", i = 3;
                        var f, g, m = e[a++], v = e[a++], y = e[a++], x = e[a++];
                        n === d ? (f = y, g = x, y = (y + 2 * m) / 3, x = (x + 2 * v) / 3, m = (o + 2 * m) / 3, v = (s + 2 * v) / 3) : (f = e[a++], g = e[a++]), Z[0][0] = m, Z[0][1] = v, Z[1][0] = y, Z[1][1] = x, Z[2][0] = f, Z[2][1] = g, o = f, s = g;
                        break;
                    case h:
                        var b = 0, w = 0, M = 1, S = 1, A = 0;
                        t && (b = t[4], w = t[5], M = D(t[0] * t[0] + t[1] * t[1]), S = D(t[2] * t[2] + t[3] * t[3]), A = Math.atan2(-t[1] / S, t[0] / M));
                        var z = e[a++], C = e[a++], L = e[a++], I = e[a++], P = e[a++] + A, R = e[a++] + P + A;
                        a++;
                        var q = e[a++], G = z + k(P) * L, F = C + V(P) * I, m = z + k(R) * L, v = C + V(R) * I,
                            H = q ? " wa " : " at ";
                        p.push(H, T(((z - L) * M + b) * B - N), E, T(((C - I) * S + w) * B - N), E, T(((z + L) * M + b) * B - N), E, T(((C + I) * S + w) * B - N), E, T((G * M + b) * B - N), E, T((F * S + w) * B - N), E, T((m * M + b) * B - N), E, T((v * S + w) * B - N)), o = m, s = v;
                        break;
                    case _.R:
                        var W = Z[0], j = Z[1];
                        W[0] = e[a++], W[1] = e[a++], j[0] = W[0] + e[a++], j[1] = W[1] + e[a++], t && (O(W, W, t), O(j, j, t)), W[0] = T(W[0] * B - N), j[0] = T(j[0] * B - N), W[1] = T(W[1] * B - N), j[1] = T(j[1] * B - N), p.push(" m ", W[0], E, W[1], " l ", j[0], E, W[1], " l ", j[0], E, j[1], " l ", W[0], E, j[1]);
                        break;
                    case _.Z:
                        p.push(" x ")
                }
                if (i > 0) {
                    p.push(r);
                    for (var U = 0; i > U; U++) {
                        var Y = Z[U];
                        t && O(Y, Y, t), p.push(T(Y[0] * B - N), E, T(Y[1] * B - N), i - 1 > U ? E : "")
                    }
                }
            }
            return p.join("")
        }

        function p(e) {
            return "object" == typeof e && e.tagName && "IMG" === e.tagName.toUpperCase()
        }

        function f(e) {
            var t = j[e];
            if (!t) {
                U > Y && (U = 0, j = {});
                var i, r = X.style;
                try {
                    r.font = e, i = r.fontFamily.split(",")[0]
                } catch (n) {
                }
                t = {
                    style: r.fontStyle || W,
                    variant: r.fontVariant || W,
                    weight: r.fontWeight || W,
                    size: 0 | parseFloat(r.fontSize || 12),
                    family: i || "Microsoft YaHei"
                }, j[e] = t, U++
            }
            return t
        }

        function g(e, r, a, s) {
            var l = this.style, c = l.text;
            if (c) {
                var u, d, p = l.textAlign, g = f(l.textFont),
                    m = g.style + " " + g.variant + " " + g.weight + " " + g.size + 'px "' + g.family + '"',
                    v = l.textBaseline;
                a = a || w.getBoundingRect(c, m, p, v);
                var y = this.transform;
                if (y && !s && (K.copy(r), K.applyTransform(y), r = K), s) u = r.x, d = r.y; else {
                    var x = l.textPosition, _ = l.textDistance;
                    if (x instanceof Array) u = r.x + x[0], d = r.y + x[1], p = p || "left", v = v || "top"; else {
                        var b = w.adjustTextPositionOnRect(x, r, a, _);
                        u = b.x, d = b.y, p = p || b.textAlign, v = v || b.textBaseline
                    }
                }
                var M = g.size;
                switch (v) {
                    case"hanging":
                    case"top":
                        d += M / 1.75;
                        break;
                    case"middle":
                        break;
                    default:
                        d -= M / 2.25
                }
                switch (p) {
                    case"left":
                        break;
                    case"center":
                        u -= a.width / 2;
                        break;
                    case"right":
                        u -= a.width
                }
                var S, A, z, C = I.createNode, L = this._textVmlEl;
                L ? (z = L.firstChild, S = z.nextSibling, A = S.nextSibling) : (L = C("line"), S = C("path"), A = C("textpath"), z = C("skew"), A.style["v-text-align"] = "left", t(L), S.textpathok = !0, A.on = !0, L.from = "0 0", L.to = "1000 0.05", n(L, z), n(L, S), n(L, A), this._textVmlEl = L);
                var D = [u, d], P = L.style;
                y && s ? (O(D, D, y), z.on = !0, z.matrix = y[0].toFixed(3) + E + y[2].toFixed(3) + E + y[1].toFixed(3) + E + y[3].toFixed(3) + ",0,0", z.offset = (T(D[0]) || 0) + "," + (T(D[1]) || 0), z.origin = "0 0", P.left = "0px", P.top = "0px") : (z.on = !1, P.left = T(u) + "px", P.top = T(d) + "px"), A.string = i(c);
                try {
                    A.style.font = m
                } catch (k) {
                }
                h(L, "fill", {
                    fill: s ? l.fill : l.textFill,
                    opacity: l.opacity
                }, this), h(L, "stroke", {
                    stroke: s ? l.stroke : l.textStroke,
                    opacity: l.opacity,
                    lineDash: l.lineDash
                }, this), L.style.zIndex = o(this.zlevel, this.z, this.z2), n(e, L)
            }
        }

        function m(e) {
            a(e, this._textVmlEl), this._textVmlEl = null
        }

        function v(e) {
            n(e, this._textVmlEl)
        }

        if (!e("../core/env").canvasSupported) {
            var y = e("../core/vector"), x = e("../core/BoundingRect"), _ = e("../core/PathProxy").CMD,
                b = e("../tool/color"), w = e("../contain/text"), M = e("../graphic/mixin/RectText"),
                S = e("../graphic/Displayable"), A = e("../graphic/Image"), z = e("../graphic/Text"),
                C = e("../graphic/Path"), L = e("../graphic/Gradient"), I = e("./core"), T = Math.round, D = Math.sqrt,
                P = Math.abs, k = Math.cos, V = Math.sin, R = Math.max, O = y.applyTransform, E = ",",
                q = "progid:DXImageTransform.Microsoft", B = 21600, N = B / 2, G = 1e5, F = 1e3, Z = [[], [], []];
            C.prototype.brush = function (e) {
                var i = this.style, r = this._vmlEl;
                r || (r = I.createNode("shape"), t(r), this._vmlEl = r), h(r, "fill", i, this), h(r, "stroke", i, this);
                var a = this.transform, s = null != a, l = r.getElementsByTagName("stroke")[0];
                if (l) {
                    var c = i.lineWidth;
                    if (s && !i.strokeNoScale) {
                        var u = a[0] * a[3] - a[1] * a[2];
                        c *= D(P(u))
                    }
                    l.weight = c + "px"
                }
                var p = this.path;
                this.__dirtyPath && (p.beginPath(), this.buildPath(p, this.shape), this.__dirtyPath = !1), r.path = d(p.data, this.transform), r.style.zIndex = o(this.zlevel, this.z, this.z2), n(e, r), i.text && this.drawRectText(e, this.getBoundingRect())
            }, C.prototype.onRemoveFromStorage = function (e) {
                a(e, this._vmlEl), this.removeRectText(e)
            }, C.prototype.onAddToStorage = function (e) {
                n(e, this._vmlEl), this.appendRectText(e)
            }, A.prototype.brush = function (e) {
                var i, r, a = this.style, s = a.image;
                if (p(s)) {
                    var l = s.src;
                    if (l === this._imageSrc) i = this._imageWidth, r = this._imageHeight; else {
                        var c = s.runtimeStyle, u = c.width, h = c.height;
                        c.width = "auto", c.height = "auto", i = s.width, r = s.height, c.width = u, c.height = h, this._imageSrc = l, this._imageWidth = i, this._imageHeight = r
                    }
                    s = l
                } else s === this._imageSrc && (i = this._imageWidth, r = this._imageHeight);
                if (s) {
                    var d = a.x || 0, f = a.y || 0, g = a.width, m = a.height, v = a.sWidth, y = a.sHeight,
                        x = a.sx || 0, _ = a.sy || 0, b = v && y, w = this._vmlEl;
                    w || (w = I.doc.createElement("div"), t(w), this._vmlEl = w);
                    var M, S = w.style, A = !1, z = 1, C = 1;
                    if (this.transform && (M = this.transform, z = D(M[0] * M[0] + M[1] * M[1]), C = D(M[2] * M[2] + M[3] * M[3]), A = M[1] || M[2]), A) {
                        var L = [d, f], P = [d + g, f], k = [d, f + m], V = [d + g, f + m];
                        O(L, L, M), O(P, P, M), O(k, k, M), O(V, V, M);
                        var B = R(L[0], P[0], k[0], V[0]), N = R(L[1], P[1], k[1], V[1]), G = [];
                        G.push("M11=", M[0] / z, E, "M12=", M[2] / C, E, "M21=", M[1] / z, E, "M22=", M[3] / C, E, "Dx=", T(d * z + M[4]), E, "Dy=", T(f * C + M[5])), S.padding = "0 " + T(B) + "px " + T(N) + "px 0", S.filter = q + ".Matrix(" + G.join("") + ", SizingMethod=clip)"
                    } else M && (d = d * z + M[4], f = f * C + M[5]), S.filter = "", S.left = T(d) + "px", S.top = T(f) + "px";
                    var F = this._imageEl, Z = this._cropEl;
                    F || (F = I.doc.createElement("div"), this._imageEl = F);
                    var H = F.style;
                    if (b) {
                        if (i && r) H.width = T(z * i * g / v) + "px", H.height = T(C * r * m / y) + "px"; else {
                            var W = new Image, j = this;
                            W.onload = function () {
                                W.onload = null, i = W.width, r = W.height, H.width = T(z * i * g / v) + "px", H.height = T(C * r * m / y) + "px", j._imageWidth = i, j._imageHeight = r, j._imageSrc = s
                            }, W.src = s
                        }
                        Z || (Z = I.doc.createElement("div"), Z.style.overflow = "hidden", this._cropEl = Z);
                        var U = Z.style;
                        U.width = T((g + x * g / v) * z), U.height = T((m + _ * m / y) * C), U.filter = q + ".Matrix(Dx=" + -x * g / v * z + ",Dy=" + -_ * m / y * C + ")", Z.parentNode || w.appendChild(Z), F.parentNode != Z && Z.appendChild(F)
                    } else H.width = T(z * g) + "px", H.height = T(C * m) + "px", w.appendChild(F), Z && Z.parentNode && (w.removeChild(Z), this._cropEl = null);
                    var Y = "", X = a.opacity;
                    1 > X && (Y += ".Alpha(opacity=" + T(100 * X) + ") "), Y += q + ".AlphaImageLoader(src=" + s + ", SizingMethod=scale)", H.filter = Y, w.style.zIndex = o(this.zlevel, this.z, this.z2), n(e, w), a.text && this.drawRectText(e, this.getBoundingRect())
                }
            }, A.prototype.onRemoveFromStorage = function (e) {
                a(e, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(e)
            }, A.prototype.onAddToStorage = function (e) {
                n(e, this._vmlEl), this.appendRectText(e)
            };
            var H, W = "normal", j = {}, U = 0, Y = 100, X = document.createElement("div");
            w.measureText = function (e, t) {
                var i = I.doc;
                H || (H = i.createElement("div"), H.style.cssText = "position:absolute;top:-20000px;left:0;                padding:0;margin:0;border:none;white-space:pre;", I.doc.body.appendChild(H));
                try {
                    H.style.font = t
                } catch (r) {
                }
                return H.innerHTML = "", H.appendChild(i.createTextNode(e)), {width: H.offsetWidth}
            };
            for (var K = new x, J = [M, S, A, C, z], Q = 0; Q < J.length; Q++) {
                var $ = J[Q].prototype;
                $.drawRectText = g, $.removeRectText = m, $.appendRectText = v
            }
            z.prototype.brush = function (e) {
                var t = this.style;
                t.text && this.drawRectText(e, {
                    x: t.x || 0,
                    y: t.y || 0,
                    width: 0,
                    height: 0
                }, this.getBoundingRect(), !0)
            }, z.prototype.onRemoveFromStorage = function (e) {
                this.removeRectText(e)
            }, z.prototype.onAddToStorage = function (e) {
                this.appendRectText(e)
            }
        }
    }),t("zrender/vml/Painter", ["require", "../core/log", "./core"], function (e) {
        function t(e) {
            return parseInt(e, 10)
        }

        function i(e, t) {
            a.initVML(), this.root = e, this.storage = t;
            var i = document.createElement("div"), r = document.createElement("div");
            i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", r.style.cssText = "position:absolute;left:0;top:0;", e.appendChild(i), this._vmlRoot = r, this._vmlViewport = i, this.resize();
            var n = t.delFromMap, o = t.addToMap;
            t.delFromMap = function (e) {
                var i = t.get(e);
                n.call(t, e), i && i.onRemoveFromStorage && i.onRemoveFromStorage(r)
            }, t.addToMap = function (e) {
                e.onAddToStorage && e.onAddToStorage(r), o.call(t, e)
            }, this._firstPaint = !0
        }

        function r(e) {
            return function () {
                n('In IE8.0 VML mode painter not support method "' + e + '"')
            }
        }

        var n = e("../core/log"), a = e("./core");
        i.prototype = {
            constructor: i, getViewportRoot: function () {
                return this._vmlViewport
            }, refresh: function () {
                var e = this.storage.getDisplayList(!0);
                this._paintList(e)
            }, _paintList: function (e) {
                for (var t = this._vmlRoot, i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.__dirty && !r.invisible && (r.beforeBrush && r.beforeBrush(), r.brush(t), r.afterBrush && r.afterBrush()), r.__dirty = !1
                }
                this._firstPaint && (this._vmlViewport.appendChild(t), this._firstPaint = !1)
            }, resize: function () {
                var e = this._getWidth(), t = this._getHeight();
                if (this._width != e && this._height != t) {
                    this._width = e, this._height = t;
                    var i = this._vmlViewport.style;
                    i.width = e + "px", i.height = t + "px"
                }
            }, dispose: function () {
                this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null
            }, getWidth: function () {
                return this._width
            }, getHeight: function () {
                return this._height
            }, _getWidth: function () {
                var e = this.root, i = e.currentStyle;
                return (e.clientWidth || t(i.width)) - t(i.paddingLeft) - t(i.paddingRight) | 0
            }, _getHeight: function () {
                var e = this.root, i = e.currentStyle;
                return (e.clientHeight || t(i.height)) - t(i.paddingTop) - t(i.paddingBottom) | 0
            }
        };
        for (var o = ["getLayer", "insertLayer", "eachLayer", "eachBuildinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], s = 0; s < o.length; s++) {
            var l = o[s];
            i.prototype[l] = r(l)
        }
        return i
    }),t("zrender/vml/vml", ["require", "./graphic", "../zrender", "./Painter"], function (e) {
        e("./graphic"), e("../zrender").registerPainter("vml", e("./Painter"))
    });
    var i = e("echarts");
    return e("echarts/chart/line"), e("echarts/chart/bar"), e("echarts/component/grid"), e("echarts/chart/pie"), e("echarts/chart/scatter"), e("echarts/component/tooltip"), e("echarts/component/polar"), e("echarts/chart/radar"), e("echarts/component/legend"), e("echarts/chart/map"), e("echarts/chart/treemap"), e("echarts/chart/graph"), e("echarts/chart/gauge"), e("echarts/chart/funnel"), e("echarts/chart/parallel"), e("echarts/chart/sankey"), e("echarts/chart/boxplot"), e("echarts/chart/candlestick"), e("echarts/chart/effectScatter"), e("echarts/chart/lines"), e("echarts/chart/heatmap"), e("echarts/component/geo"), e("echarts/component/parallel"), e("echarts/component/title"), e("echarts/component/dataZoom"), e("echarts/component/visualMap"), e("echarts/component/markPoint"), e("echarts/component/markLine"), e("echarts/component/timeline"), e("echarts/component/toolbox"), e("zrender/vml/vml"), i
}), function (e, t) {
    "function" == typeof define && define.amd ? define(["exports", "echarts"], t) : "object" == typeof exports && "string" != typeof exports.nodeName ? t(exports, require("echarts")) : t({}, e.echarts)
}(this, function (e, t) {
    var i = function (e) {
        "undefined" != typeof console && console && console.error && console.error(e)
    };
    return t ? t.registerMap ? void t.registerMap("china", {
        type: "FeatureCollection",
        features: [{
            id: "710000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@°Ü¯Û", "@@ƛĴÕƊÉɼģºðʀ\\ƎsÆNŌÔĚänÜƤɊĂǀĆĴĤǊŨxĚĮǂƺòƌâÔ®ĮXŦţƸZûÐƕƑGđ¨ĭMó·ęcëƝɉlÝƯֹÅŃ^Ó·śŃǋƏďíåɛGɉ¿IċããF¥ĘWǬÏĶñÄ", "@@\\p|WoYG¿¥Ij@", "@@¡@V^RqBbAnTXeQr©C", "@@ÆEEkWqë I"]],
                encodeOffsets: [[[122886, 24033], [123335, 22980], [122375, 24193], [122518, 24117], [124427, 22618]]]
            },
            properties: {cp: [121.509062, 25.044332], name: "台湾", childNum: 5}
        }, {
            id: "130000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@\\aM`Ç½ÓnUKĜēs¤­©yrý§uģcJ»eIP]ªrºc_ħ²G¼s`jÎŸnüsÂľP", "@@U`Ts¿mÄ", "@@FOhđ©OiÃ`ww^ÌkÑH«ƇǤŗĺtFu{Z}Ö@U´ʚLg®¯Oı°Ãw ^VbÉsmAê]]w§RRl£ŭuwNÁ`ÇFēÝčȻuT¡Ĺ¯Õ¯sŗő£YªhVƍ£ƅnëYNgq¼ś¿µı²UºÝUąąŖóxV@tƯJ]eR¾fe|rHA|h~Ėƍl§ÏjVë` ØoÅbbx³^zÃĶ¶Sj®AyÂhðk`«PËµEFÛ¬Y¨Ļrõqi¼Wi°§Ð±²°`[À|ĠO@ÆxO\\ta\\p_Zõ^û{ġȧXýĪÓjùÎRb^Î»j{íděYfíÙTymńŵōHim½éŅ­aVcř§ax¹XŻácWU£ôãºQ¨÷Ñws¥qEHÙ|šYQoŕÇyáĂ£MÃ°oťÊP¡mWO¡v{ôvîēÜISpÌhp¨ jdeŔQÖjX³àĈ[n`Yp@UcM`RKhEbpŞlNut®EtqnsÁgAiúoHqCXhfgu~ÏWP½¢G^}¯ÅīGCÑ^ãziMáļMTÃƘrMc|O_¯Ŏ´|morDkO\\mĆJfl@cĢ¬¢aĦtRıÒXòë¬WP{ŵǫƝīÛ÷ąV×qƥV¿aȉd³BqPBmaËđŻģmÅ®V¹d^KKonYg¯XhqaLdu¥Ípǅ¡KąÅkĝęěhq}HyÃ]¹ǧ£Í÷¿qágPmoei¤o^á¾ZEY^Ný{nOl±Í@Mċèk§daNaÇį¿]øRiiñEūiǱàUtėGyl}ÓM}jpEC~¡FtoQiHkk{ILgĽxqÈƋÄdeVDJj£J|ÅdzÂFt~KŨ¸IÆv|¢r}èonb}`RÎÄn°ÒdÞ²^®lnÐèĄlðÓ×]ªÆ}LiĂ±Ö`^°Ç¶p®đDcŋ`ZÔ¶êqvFÆN®ĆTH®¦O¾IbÐã´BĐɢŴÆíȦpĐÞXR·nndO¤OÀĈƒ­QgµFo|gȒęSWb©osx|hYhgŃfmÖĩnºTÌSp¢dYĤ¶UĈjlǐpäðëx³kÛfw²Xjz~ÂqbTÑěŨ@|oMzv¢ZrÃVw¬ŧĖ¸f°ÐTªqs{S¯r æÝl¼ÖĞ ǆiGĘJ¼lr}~K¨ŸƐÌWö¼Þ°nÞoĦL|C~D©|q]SvKÑcwpÏÏĿćènĪWlĄkT}¬Tp~®Hgd˒ĺBVtEÀ¢ôPĎƗè@~kü\\rÊĔÖæW_§¼F´©òDòjYÈrbĞāøŀG{ƀ|¦ðrb|ÀH`pʞkvGpuARhÞÆǶgĘTǼƹS£¨¡ù³ŘÍ]¿ÂyôEP xX¶¹ÜO¡gÚ¡IwÃé¦ÅBÏ|Ç°N«úmH¯âbęU~xĈbȒ{^xÖlD¸dɂ~"]],
                encodeOffsets: [[[120023, 41045], [121616, 39981], [122102, 42307]]]
            },
            properties: {cp: [114.502461, 38.045474], name: "河北", childNum: 3}
        }, {
            id: "140000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@ħÜ_ªlìwGkÛÃǏokćiµVZģ¡coTSË¹ĪmnÕńehZg{gtwªpXaĚThȑp{¶Eh®RćƑP¿£PmcªaJyý{ýȥoÅîɡųAďä³aÏJ½¥PG­ąSM­sWz½µÛYÓŖgxoOkĒCo­Èµ]¯_²ÕjāK~©ÅØ^ÔkïçămÏk]­±cÝ¯ÑÃmQÍ~_apm~ç¡qu{JÅŧ·Ls}EyÁÆcI{¤IiCfUcƌÃp§]ě«vD@¡SÀµMÅwuYY¡DbÑc¡h×]nkoQdaMç~eDÛtT©±@¥ù@É¡ZcW|WqOJmĩl«ħşvOÓ«IqăV¥D[mI~Ó¢cehiÍ]Ɠ~ĥqX·eƷn±}v[ěďŕ]_œ`¹§ÕōIo©b­s^}Ét±ū«³p£ÿ¥WÑxçÁ«h×u×¥ř¾dÒ{ºvĴÎêÌɊ²¶ü¨|ÞƸµȲLLúÉƎ¤ϊęĔV`_bªS^|dzY|dz¥pZbÆ£¶ÒK}tĦÔņƠPYznÍvX¶Ěn ĠÔzý¦ª÷ÑĸÙUȌ¸dòÜJð´ìúNM¬XZ´¤ŊǸ_tldI{¦ƀðĠȤ¥NehXnYGR° ƬDj¬¸|CĞKqºfƐiĺ©ª~ĆOQª ¤@ìǦɌ²æBÊTĞHƘÁĪËĖĴŞȀÆÿȄlŤĒötÎ½î¼ĨXh|ªM¤ÐzÞĩÒSrao³"],
                encodeOffsets: [[117016, 41452]]
            },
            properties: {cp: [112.549248, 37.857014], name: "山西", childNum: 1}
        }, {
            id: "150000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@ǪƫÌÛMĂ[`ÕCn}¶Vcês¯PqFB|S³C|kñHdiÄ¥sŉÅPóÑÑE^ÅPpy_YtShQ·aHwsOnŉÃs©iqjUSiº]ïW«gW¡ARëśĳĘů`çõh]y»ǃǛҤxÒm~zf}pf|ÜroÈzrKÈĵSƧż؜Ġu~è¬vîS¼ĂhĖMÈÄw\\fŦ°W ¢¾luŸDw\\Ŗĝ", "@@GVu»Aylßí¹ãe]Eāò³C¹ð¾²iÒAdkò^P²CǜңǄ z¼g^èöŰ_Ĳĕê}gÁnUI«m]jvV¼euhwqAaW_µj»çjioQR¹ēÃßt@r³[ÛlćË^ÍÉáGOUÛOB±XkÅ¹£k|e]olkVÍ¼ÕqtaÏõjgÁ£§U^RLËnX°ÇBz^~wfvypV ¯ƫĉ˭ȫƗŷɿÿĿƑ˃ĝÿÃǃßËőó©ǐȍŒĖM×ÍEyxþp]ÉvïèvƀnÂĴÖ@V~Ĉ³MEĸÅĖtējyÄDXÄxGQuv_i¦aBçw˛wD©{tāmQ{EJ§KPśƘƿ¥@sCTÉ}ɃwƇy±gÑ}T[÷kÐç¦«SÒ¥¸ëBX½HáÅµÀğtSÝÂa[ƣ°¯¦Pï¡]£ġÒk®G²èQ°óMq}EóƐÇ\\@áügQÍu¥FTÕ¿Jû]|mvāÎYua^WoÀa·­ząÒot×¶CLƗi¯¤mƎHǊ¤îìɾŊìTdåwsRÖgĒųúÍġäÕ}Q¶¿A[¡{d×uQAMxVvMOmăl«ct[wº_ÇÊjbÂ£ĦS_éQZ_lwgOiýe`YYJq¥IÁǳ£ÙË[ÕªuƏ³ÍTs·bÁĽäė[b[ŗfãcn¥îC¿÷µ[ŏÀQ­ōĉm¿Á^£mJVmL[{Ï_£F¥Ö{ŹA}×Wu©ÅaųĳƳhB{·TQqÙIķËZđ©Yc|M¡LeVUóK_QWk_ĥ¿ãZ»X\\ĴuUèlG®ěłTĠğDŃGÆÍz]±ŭ©Å]ÅÐ}UË¥©TċïxgckfWgi\\ÏĒ¥HkµEë{»ÏetcG±ahUiñiWsɁ·cCÕk]wȑ|ća}wVaĚá G°ùnM¬¯{ÈÐÆA¥ÄêJxÙ¢hP¢ÛºµwWOóFÁz^ÀŗÎú´§¢T¤ǻƺSėǵhÝÅQgvBHouʝl_o¿Ga{ïq{¥|ſĿHĂ÷aĝÇqZñiñC³ª»E`¨åXēÕqÉû[l}ç@čƘóO¿¡FUsAʽīccocÇS}£IS~ălkĩXçmĈŀÐoÐdxÒuL^T{r@¢ÍĝKén£kQyÅõËXŷƏL§~}kq»IHėǅjĝ»ÑÞoå°qTt|r©ÏS¯·eŨĕx«È[eM¿yupN~¹ÏyN£{©għWí»Í¾səšǅ_ÃĀɗ±ąĳĉʍŌŷSÉA±åǥɋ@ë£R©ąP©}ĹªƏj¹erLDĝ·{i«ƫC½ÉshVzGS|úþXgp{ÁX¿ć{ƱȏñZáĔyoÁhA}ŅĆfdŉ_¹Y°ėǩÑ¡H¯¶oMQqð¡Ë|Ñ`ƭŁX½·óÛxğįÅcQs«tȋǅFù^it«Č¯[hAi©á¥ÇĚ×l|¹y¯Kȝqgů{ñǙµïċĹzŚȭ¶¡oŽäÕG\\ÄT¿Òõr¯LguÏYęRƩɷŌO\\İÐ¢æ^Ŋ ĲȶȆbÜGĝ¬¿ĚVĎgª^íu½jÿĕęjık@Ľ]ėl¥ËĭûÁėéV©±ćn©­ȇÍq¯½YÃÔŉÉNÑÅÝy¹NqáʅDǡËñ­ƁYÅy̱os§ȋµʽǘǏƬɱàưN¢ƔÊuľýľώȪƺɂļxZĈ}ÌŉŪĺœĭFЛĽ̅ȣͽÒŵìƩÇϋÿȮǡŏçƑůĕ~Ç¼ȳÐUfdIxÿ\\G zâɏÙOº·pqy£@qþ@Ǟ˽IBäƣzsÂZÁàĻdñ°ŕzéØűzșCìDȐĴĺf®Àľưø@ɜÖÞKĊŇƄ§͑těï͡VAġÑÑ»d³öǍÝXĉĕÖ{þĉu¸ËʅğU̎éhɹƆ̗̮ȘǊ֥ड़ࡰţાíϲäʮW¬®ҌeרūȠkɬɻ̼ãüfƠSצɩςåȈHϚÎKǳͲOðÏȆƘ¼CϚǚ࢚˼ФÔ¤ƌĞ̪Qʤ´¼mȠJˀƲÀɠmɆǄĜƠ´ǠN~ʢĜ¶ƌĆĘźʆȬ˪ĚĒ¸ĞGȖƴƀj`ĢçĶāàŃºēĢĖćYÀŎüôQÐÂŎŞǆŞêƖoˆDĤÕºÑǘÛˤ³̀gńƘĔÀ^ªƂ`ªt¾äƚêĦĀ¼ÐĔǎ¨Ȕ»͠^ˮÊȦƤøxRrŜH¤¸ÂxDÄ|ø˂˜ƮÐ¬ɚwɲFjĔ²Äw°ǆdÀÉ_ĸdîàŎjÊêTĞªŌŜWÈ|tqĢUB~´°ÎFCU¼pĀēƄN¦¾O¶łKĊOjĚj´ĜYp{¦SĚÍ\\T×ªV÷Ší¨ÅDK°ßtŇĔK¨ǵÂcḷ̌ĚǣȄĽFlġUĵŇȣFʉɁMğįʏƶɷØŭOǽ«ƽū¹Ʊő̝Ȩ§ȞʘĖiɜɶʦ}¨֪ࠜ̀ƇǬ¹ǨE˦ĥªÔêFxúQEr´Wrh¤Ɛ \\talĈDJÜ|[Pll̚¸ƎGú´P¬W¦^¦H]prRn|or¾wLVnÇIujkmon£cX^Bh`¥V¦U¤¸}xRj[^xN[~ªxQ[`ªHÆÂExx^wN¶Ê|¨ìMrdYpoRzNyÀDs~bcfÌ`L¾n|¾T°c¨È¢ar¤`[|òDŞĔöxElÖdHÀI`Ď\\Àì~ÆR¼tf¦^¢ķ¶eÐÚMptgjɡČÅyġLûŇV®ÄÈƀĎ°P|ªVVªj¬ĚÒêp¬E|ŬÂ_~¼rƐK f{ĘFĒƌXưăkÃĄ}nµo×q£ç­kX{uĩ«āíÓUŅÝVUŌ]Ť¥lyň[oi{¦LĸĦ^ôâJ¨^UZðÚĒL¿Ìf£K£ʺoqNwğc`uetOj×°KJ±qÆġmĚŗos¬qehqsuH{¸kH¡ÊRǪÇƌbȆ¢´äÜ¢NìÉʖ¦â©Ɨؗ"]],
                encodeOffsets: [[[128500, 52752], [127089, 51784]]]
            },
            properties: {cp: [111.670801, 40.818311], name: "内蒙古", childNum: 2}
        }, {
            id: "210000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@L@@s]", "@@MnNm", "@@dc", "@@eÀC@b", "@@fXwkbrÄ`qg", "@@^jtWQ", "@@~ Y[c", "@@I`ĖN^_¿ZÁM", "@@Ïxǌ{q_×^Gigp", "@@iX¶BY", "@@YZ", "@@L_yG`b", "@@^WqCTZ", "@@\\[§t|]", "@@m`p[", "@@@é^BntaÊU]x ¯ÄPĲ­°hʙK³VÕ@Y~|EvĹsÇ¦­L^pÃ²ŸÒG Ël]xxÄ_fT¤Ď¤cPC¨¸TVjbgH²sdÎdHt`B²¬GJję¶[ÐhjeXdlwhðSČ¦ªVÊÏÆZÆŶ®²^ÎyÅHńĚDMħĜŁH­kçvV[ĳ¼WYÀäĦ`XlR`ôLUVfK¢{NZdĒªYĸÌÚJRr¸SA|ƴgŴĴÆbvªØX~źB|¦ÕE¤Ð`\\|KUnnI]¤ÀÂĊnŎR®Ő¿¶\\ÀøíDm¦ÎbŨabaĘ\\ľãÂ¸atÎSƐ´©v\\ÖÚÌǴ¤Â¨JKrZ_ZfjþhPkx`YRIjJcVf~sCN¤ EhæmsHy¨SðÑÌ\\\\ĐRÊwS¥fqŒßýáĞÙÉÖ[^¯ǤŲê´\\¦¬ĆPM¯£»uïpùzExanµyoluqe¦W^£ÊL}ñrkqWňûPUP¡ôJoo·U}£[·¨@XĸDXm­ÛÝºGUCÁª½{íĂ^cjk¶Ã[q¤LÉö³cux«|Zd²BWÇ®Yß½ve±ÃCý£W{Ú^q^sÑ·¨ËMr¹·C¥GDrí@wÕKţÃ«V·i}xËÍ÷i©ĝɝǡ]{c±OW³Ya±_ç©HĕoƫŇqr³Lys[ñ³¯OSďOMisZ±ÅFC¥Pq{Ã[Pg}\\¿ghćOk^ĩÃXaĕËĥM­oEqqZûěŉ³F¦oĵhÕP{¯~TÍlªNßYÐ{Ps{ÃVUeĎwk±ŉVÓ½ŽJãÇÇ»Jm°dhcÀffdF~ĀeĖd`sx² ®EĦ¦dQÂd^~ăÔH¦\\LKpĄVez¤NP ǹÓRÆąJSh­a[¦´ÂghwmBÐ¨źhI|VV|p] Â¼èNä¶ÜBÖ¼L`¼bØæKVpoúNZÞÒKxpw|ÊEMnzEQIZZNBčÚFÜçmĩWĪñtÞĵÇñZ«uD±|ƏlǗw·±PmÍada CLǑkùó¡³Ï«QaċÏOÃ¥ÕđQȥċƭy³ÁA"]],
                encodeOffsets: [[[123686, 41445], [126019, 40435], [124393, 40128], [126117, 39963], [125322, 40140], [126686, 40700], [126041, 40374], [125584, 40168], [125509, 40217], [125453, 40165], [125362, 40214], [125280, 40291], [125774, 39997], [125976, 40496], [125822, 39993], [122731, 40949]]]
            },
            properties: {cp: [123.429096, 41.796767], name: "辽宁", childNum: 16}
        }, {
            id: "220000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@ñr½ÉKāGÁ¤ia ÉÈ¹`\\xs¬dĆkNnuNUwNx¶c¸|\\¢GªóĄ~RãÖÎĢùđŴÕhQxtcæëSɽŉíëǉ£ƍG£nj°KƘµDsØÑpyĆ¸®¿bXp]vbÍZuĂ{n^IüÀSÖ¦EvRÎûh@â[ƏÈô~FNr¯ôçR±­HÑlĢ^¤¢OðætxsŒ]ÞÁTĠs¶¿âÆGW¾ìA¦·TÑ¬è¥ÏÐJ¨¼ÒÖ¼ƦɄxÊ~StD@Ă¼Ŵ¡jlºWvÐzƦZÐ²CH AxiukdGgetqmcÛ£Ozy¥cE}|¾cZk¿uŐã[oxGikfeäT@SUwpiÚFM©£è^Ú`@v¶eňf heP¶täOlÃUgÞzŸU`l}ÔÆUvØ_Ō¬Öi^ĉi§²ÃB~¡ĈÚEgc|DC_Ȧm²rBx¼MÔ¦ŮdĨÃâYxƘDVÇĺĿg¿cwÅ\\¹¥Yĭl¤OvLjM_a W`zļMž·\\swqÝSAqŚĳ¯°kRē°wx^ĐkǂÒ\\]nrĂ}²ĊŲÒøãh·M{yMzysěnĒġV·°G³¼XÀ¤¹i´o¤ŃÈ`ÌǲÄUĞd\\iÖmÈBĤÜɲDEh LG¾ƀÄ¾{WaYÍÈĢĘÔRîĐj}ÇccjoUb½{h§Ǿ{KƖµÎ÷GĄØŜçưÌs«lyiē«`å§H¥Ae^§GK}iã\\c]v©ģZmÃ|[M}ģTɟĵÂÂ`ÀçmFK¥ÚíÁbX³ÌQÒHof{]ept·GŋĜYünĎųVY^ydõkÅZW«WUa~U·SbwGçǑiW^qFuNĝ·EwUtW·Ýďæ©PuqEzwAVXRãQ`­©GYYhcUGorBd}ģÉb¡·µMicF«Yƅ»é\\ɹ~ǙG³mØ©BšuT§Ĥ½¢Ã_Ã½L¡ûsT\\rke\\PnwAKy}ywdSefµ]UhĿD@mÿvaÙNSkCuncÿ`lWėVâ¦÷~^fÏ~vwHCį`xqT­­lW«ï¸skmßEGqd¯R©Ý¯¯S\\cZ¹iűƏCuƍÓXoR}M^o£R}oªU­FuuXHlEÅÏ©¤ßgXþ¤D²ÄufàÀ­XXÈ±Ac{Yw¬dvõ´KÊ£\\rµÄlidā]|î©¾DÂVH¹Þ®ÜWnCķ W§@\\¸~¤Vp¸póIO¢VOŇürXql~òÉK]¤¥Xrfkvzpm¶bwyFoúvð¼¤ N°ąO¥«³[éǣű]°Õ\\ÚÊĝôîŇÔaâBYlďQ[ Ë[ïÒ¥RI|`j]P"],
                encodeOffsets: [[126831, 44503]]
            },
            properties: {cp: [125.3245, 43.886841], name: "吉林", childNum: 1}
        }, {
            id: "230000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@UµNÿ¥īèçHÍøƕ¶Lǽ|g¨|a¾pVidd~ÈiíďÓQġėÇZÎXb½|ſÃH½KFgɱCģÛÇAnjÕc[VĝǱÃËÇ_ £ń³pj£º¿»WH´¯U¸đĢmtĜyzzNN|g¸÷äűÑ±ĉā~mq^[ǁÑďlw]¯xQĔ¯l°řĴrBÞTxr[tŽ¸ĻN_yX`biNKuP£kZĮ¦[ºxÆÀdhĹŀUÈƗCwáZħÄŭcÓ¥»NAw±qȥnD`{ChdÙFć}¢A±Äj¨]ĊÕjŋ«×`VuÓÅ~_kŷVÝyhVkÄãPsOµfgeŇµf@u_Ù ÙcªNªÙEojVxT@ãSefjlwH\\pŏäÀvlY½d{F~¦dyz¤PÜndsrhfHcvlwjF£G±DÏƥYyÏu¹XikĿ¦ÏqƗǀOŜ¨LI|FRĂn sª|C˜zxAè¥bfudTrFWÁ¹Am|ĔĕsķÆF´N}ćUÕ@Áĳſmuçuð^ÊýowFzØÎĕNőǏȎôªÌŒǄàĀÄ˄ĞŀƒʀĀƘŸˮȬƬĊ°Uzouxe]}AyÈW¯ÌmKQ]Īºif¸ÄX|sZt|½ÚUÎ lk^p{f¤lºlÆW A²PVÜPHÊâ]ÎĈÌÜk´\\@qàsĔÄQºpRij¼èi`¶bXrBgxfv»uUi^v~J¬mVp´£´VWrnP½ì¢BX¬hðX¹^TjVriªjtŊÄmtPGx¸bgRsT`ZozÆO]ÒFôÒOÆŊvÅpcGêsx´DR{AEOr°x|íb³Wm~DVjºéNNËÜ˛ɶ­GxŷCSt}]ûōSmtuÇÃĕNāg»íT«u}ç½BĵÞʣ¥ëÊ¡MÛ³ãȅ¡ƋaǩÈÉQG¢·lG|tvgrrf«ptęŘnÅĢrI²¯LiØsPf_vĠdxM prʹL¤¤eËÀđKïÙVY§]Ióáĥ]ķK¥j|pŇ\\kzţ¦šnņäÔVĂîĪ¬|vW®l¤èØrxm¶ă~lÄƯĄ̈́öȄEÔ¤ØQĄĄ»ƢjȦOǺ¨ìSŖÆƬyQv`cwZSÌ®ü±Ǆ]ŀç¬B¬©ńzƺŷɄeeOĨSfm ĊƀP̎ēz©ĊÄÕÊmgÇsJ¥ƔŊśæÎÑqv¿íUOµªÂnĦÁ_½ä@êí£P}Ġ[@gġ}gɊ×ûÏWXá¢užƻÌsNÍ½ƎÁ§čŐAēeL³àydl¦ĘVçŁpśǆĽĺſÊQíÜçÛġÔsĕ¬Ǹ¯YßċġHµ ¡eå`ļrĉŘóƢFìĎWøxÊkƈdƬv|I|·©NqńRŀ¤éeŊŀàŀU²ŕƀBQ£Ď}L¹Îk@©ĈuǰųǨÚ§ƈnTËÇéƟÊcfčŤ^XmHĊĕË«W·ċëx³ǔķÐċJāwİ_ĸȀ^ôWr­°oú¬ĦŨK~ȰCĐ´Ƕ£fNÎèâw¢XnŮeÂÆĶ¾¾xäLĴĘlļO¤ÒĨA¢Êɚ¨®ØCÔ ŬGƠƦYĜĘÜƬDJg_ͥœ@čŅĻA¶¯@wÎqC½Ĉ»NăëKďÍQÙƫ[«ÃígßÔÇOÝáWñuZ¯ĥŕā¡ÑķJu¤E å¯°WKÉ±_d_}}vyõu¬ï¹ÓU±½@gÏ¿rÃ½DgCdµ°MFYxw¿CG£Rƛ½Õ{]L§{qqą¿BÇƻğëܭǊË|c²}Fµ}ÙRsÓpg±QNqǫŋRwŕnéÑÉK«SeYRŋ@{¤SJ}D Ûǖ֍]gr¡µŷjqWÛham³~S«Ü[", "@@ƨĶTLÇyqpÇÛqe{~oyen}s`qiXGù]Ëp½©lÉÁp]Þñ´FĂ^fäîºkàz¼BUv¬D"]],
                encodeOffsets: [[[134456, 44547], [127123, 51780]]]
            },
            properties: {cp: [126.642464, 45.756967], name: "黑龙江", childNum: 2}
        }, {
            id: "320000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@Õg^vÁbnÀ`Jnĝ¬òM¶ĘTÖŒbe¦¦{¸ZâćNp©Hp|`mjhSEb\\afv`sz^lkljÄtg¤D­¾X¿À|ĐiZȀåB·î}GL¢õcßjayBFµÏC^ĭcÙt¿sğH]j{s©HM¢QnDÀ©DaÜÞ·jgàiDbPufjDk`dPOîhw¡ĥ¥GP²ĐobºrYî¶aHŢ´ ]´rılw³r_{£DB_Ûdåuk|Ũ¯F Cºyr{XFye³Þċ¿ÂkĭB¿MvÛpm`rÚã@Ę¹hågËÖƿxnlč¶Åì½Ot¾dJlVJĂǀŞqvnO^JZż·Q}êÍÅmµÒ]ƍ¦Dq}¬R^èĂ´ŀĻĊIÔtĲyQŐĠMNtR®òLhĚs©»}OÓGZz¶A\\jĨFäOĤHYJvÞHNiÜaĎÉnFQlNM¤B´ĄNöɂtpŬdZÅglmuÇUšŞÚb¤uŃJŴu»¹ĄlȖħŴw̌ŵ²ǹǠ͛hĭłƕrçü±Yrřl¥i`ã__¢ćSÅr[Çq^ùzWmOĈaŐÝɞï²ʯʊáĘĳĒǭPħ͍ôƋÄÄÍīçÛɈǥ£­ÛmY`ó£Z«§°Ó³QafusNıǅ_k}¢m[ÝóDµ¡RLčiXyÅNïă¡¸iĔÏNÌķoıdōîåŤûHcs}~Ûwbù¹£¦ÓCtOPrE^ÒogĉIµÛÅʹK¤½phMú`mR¸¦PƚgÉLRs`£¯ãhD¨|³¤C"],
                encodeOffsets: [[121451, 32518]]
            },
            properties: {cp: [118.767413, 32.041544], name: "江苏", childNum: 1}
        }, {
            id: "330000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@jX^n", "@@sfdM", "@@qP\\xz[_i", "@@o\\VzRZ}mECy", "@@R¢FX}°[m]", "@@Cb\\}", "@@e|v\\laus", "@@v~s{", "@@QxÂF©}", "@@¹nvÞs©m", "@@rQgYIh", "@@bi«ZX", "@@p[}ILd", "@@À¿|", "@@¹dnb", "@@rS}[Kl", "@@g~h}", "@@FlCk", "@@ůTG°ĄLHm°UF", "@@OdRe", "@@v[u\\", "@@FjâL~wyoo~sµLZ", "@@¬e¹aH", "@@\\nÔ¡q]L³ë\\ÿ®QÌ", "@@ÊA­©]ª", "@@Kxv{­", "@@@hlIk_", "@@pWcrxp", "@@Md|_iA", "@@¢X£½z\\ðpN", "@@hlÜ[LykAvyfw^E ", "@@fp¤MusH", "@@®_ma~LÁ¬`", "@@@°¡mÛGĕ¨§Ianá[ýƤjfæÐNäGp", "@@iMt\\", "@@Zc[b", "@@X®±GrÆ°Zæĉm", "@@Z~dOSo|A¿qZv", "@@@`EN£p", "@@|s", "@@@nDi", "@@na£¾uYL¯QªmĉÅdMgÇjcº«ę¬­K­´B«Âącoċ\\xK`cįŧ«®á[~ıxu·ÅKsËÉc¢Ù\\ĭƛëbf¹­ģSĜkáƉÔ­ĈZB{aMµfzŉfÓÔŹŁƋǝÊĉ{ğč±g³ne{ç­ií´S¬\\ßðK¦w\\iqªĭiAuA­µ_W¥ƣO\\lċĢttC¨£t`PZäuXßBsĻyekOđġĵHuXBµ]×­­\\°®¬F¢¾pµ¼kŘó¬Wät¸|@L¨¸µrºù³Ù~§WIZW®±Ð¨ÒÉx`²pĜrOògtÁZ{üÙ[|ûKwsPlU[}¦Rvn`hsª^nQ´ĘRWb_ rtČFIÖkĦPJ¶ÖÀÖJĈĄTĚòC ²@PúØz©Pî¢£CÈÚĒ±hŖl¬â~nm¨f©iļ«mntqÒTÜÄjL®EÌFª²iÊxØ¨IÈhhst[Ôx}dtüGæţŔïĬaĸpMËÐjē¢·ðĄÆMzjWKĎ¢Q¶À_ê_@ıi«pZgf¤Nrq]§ĂN®«H±yƳí¾×ŊďŀĐÏŴǝĂíÀBŖÕªÁŐTFqĉ¯³ËCĕģi¨hÜ·ñt»¯Ï", "@@ºwZRkĕWK "]],
                encodeOffsets: [[[125785, 31436], [125729, 31431], [125513, 31380], [125329, 30690], [125223, 30438], [125115, 30114], [124815, 29155], [124419, 28746], [124095, 28635], [124005, 28609], [125e3, 30713], [125111, 30698], [125078, 30682], [125150, 30684], [124014, 28103], [125008, 31331], [125411, 31468], [125329, 31479], [125369, 31139], [125626, 30916], [125417, 30956], [125254, 30976], [125199, 30997], [125095, 31058], [125083, 30915], [124885, 31015], [125218, 30798], [124867, 30838], [124755, 30788], [124802, 30809], [125267, 30657], [125218, 30578], [125200, 30562], [125192, 30787], [124968, 30474], [125167, 30396], [125115, 30363], [124955, 29879], [124714, 29781], [124762, 29462], [124325, 28754], [124863, 30077], [125366, 31477]]]
            },
            properties: {cp: [120.153576, 30.287459], name: "浙江", childNum: 43}
        }, {
            id: "340000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@^iuLV\\", "@@e©Edh", "@@´CE¶zAXêeödK¡~H¸íæAȽd{ďÅÀ½W®£ChÃsikkly]_teu[bFaTign{]GqªoĈMYá|·¥f¥őaSÕėNµñĞ«Im_m¿Âa]uĜp Z_§{Cäg¤°r[_YjÆOdý[I[á·¥Q_nùgL¾mzˆDÜÆ¶ĊJhpc¹O]iŠ]¥ jtsggDÑ¡w×jÉ©±EFË­KiÛÃÕYvsm¬njĻª§emná}k«ŕgđ²ÙDÇ¤í¡ªOy×Où±@DñSęćăÕIÕ¿IµĥOlJÕÍRÍ|JìĻÒåyķrĕq§ÄĩsWÆßF¶X®¿mwRIÞfßoG³¾©uyHį{Ɓħ¯AFnuPÍÔzVdàôº^Ðæd´oG¤{S¬ćxã}ŧ×Kǥĩ«ÕOEÐ·ÖdÖsƘÑ¨[Û^Xr¢¼§xvÄÆµ`K§ tÒ´Cvlo¸fzŨð¾NY´ı~ÉĔēßúLÃÃ_ÈÏ|]ÂÏHlg`ben¾¢pUh~ƴĖ¶_r sĄ~cƈ]|r c~`¼{À{ȒiJjz`îÀT¥Û³]u}fïQl{skloNdjäËzDvčoQďHI¦rbrHĖ~BmlNRaĥTX\\{fÁKÁ®TLÂÄMtÊgĀDĄXƔvDcÎJbt[¤D@®hh~kt°ǾzÖ@¾ªdbYhüóV´ŮŒ¨Üc±r@J|àuYÇÔG·ĚąĐlŪÚpSJ¨ĸLvÞcPæķŨ®mÐálsgd×mQ¨ųÆ©Þ¤IÎs°KZpĄ|XwWdĎµmkǀwÌÕæhºgBĝâqÙĊzÖgņtÀÁĂÆáhEz|WzqD¹°Eŧl{ævÜcA`¤C`|´qxĲkq^³³GšµbíZ¹qpa±ď OH¦Ħx¢gPícOl_iCveaOjChß¸iÝbÛªCC¿mRV§¢A|tbkĜEÀtîm^g´fÄ"]],
                encodeOffsets: [[[121722, 32278], [119475, 30423], [121606, 33646]]]
            },
            properties: {cp: [117.283042, 31.86119], name: "安徽", childNum: 3}
        }, {
            id: "350000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@zht´}[", "@@aj^~ĆGå", "@@edHse", "@@@vPGsyQ", "@@sBzddW[O", "@@S¨Qy", "@@NVucW", "@@qptB@q", "@@¸[iu", "@@Q\\pD[_", "@@jSwUappI", "@@eXª~", "@@AjvFoo", "@@fT_Çí\\v|ba¦jZÆy|®", "@@IjLg", "@@wJIx«¼AoNe{M¥", "@@K±¡ÓČ~N¾", "@@k¡¹Eh~c®uDqZì¡I~Māe£bN¨gZý¡a±Öcp©PhI¢QqÇGj|¥U g[Ky¬ŏv@OptÉEF\\@ åA¬V{XģĐBycpě¼³Ăp·¤¥ohqqÚ¡ŅLs^Ã¡§qlÀhH¨MCe»åÇGD¥zPO£čÙkJA¼ßėuĕeûÒiÁŧS[¡Uûŗ½ùěcÝ§SùĩąSWó«íęACµeRåǃRCÒÇZÍ¢ź±^dlstjD¸ZpuÔâÃH¾oLUêÃÔjjēò´ĄWƛ^Ñ¥Ħ@ÇòmOw¡õyJyD}¢ďÑÈġfZda©º²z£NjD°Ötj¶¬ZSÎ~¾c°¶ÐmxO¸¢Pl´SL|¥AȪĖMņĲg®áIJČĒü` QF¬h|ĂJ@zµ |ê³È ¸UÖŬŬÀCtrĸr]ðM¤ĶĲHtÏ AĬkvsq^aÎbvdfÊòSD´Z^xPsĂrvƞŀjJd×ŘÉ ®AÎ¦ĤdxĆqAZRÀMźnĊ»İÐZ YXæJyĊ²·¶q§·K@·{sXãô«lŗ¶»o½E¡­«¢±¨Y®Ø¶^AvWĶGĒĢPlzfļtàAvWYãO_¤sD§ssČġ[kƤPX¦`¶®BBvĪjv©jx[L¥àï[F¼ÍË»ğV`«Ip}ccÅĥZEãoP´B@D¸m±z«Ƴ¿å³BRØ¶Wlâþäą`]Z£Tc ĹGµ¶Hm@_©k¾xĨôȉðX«½đCIbćqK³ÁÄš¬OAwã»aLŉËĥW[ÂGIÂNxĳ¤D¢îĎÎB§°_JGs¥E@¤ućPåcuMuw¢BI¿]zG¹guĮI"]],
                encodeOffsets: [[[123250, 27563], [122541, 27268], [123020, 27189], [122916, 27125], [122887, 26845], [122808, 26762], [122568, 25912], [122778, 26197], [122515, 26757], [122816, 26587], [123388, 27005], [122450, 26243], [122578, 25962], [121255, 25103], [120987, 24903], [122339, 25802], [121042, 25093], [122439, 26024]]]
            },
            properties: {cp: [119.306239, 26.075302], name: "福建", childNum: 18}
        }, {
            id: "360000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@ÖP¬ǦĪØLŨä~Ĉw«|TH£pc³Ïå¹]ĉđxe{ÎÓvOEm°BƂĨİ|Gvz½ª´HàpeJÝQxnÀW­EµàXÅĪt¨ÃĖrÄwÀFÎ|Ă¡WÕ¸cf¥XaęST±m[r«_gmQu~¥V\\OkxtL E¢Ú^~ýØkbēqoě±_Êw§Ñ²ÏƟė¼mĉŹ¿NQYBąrwģcÍ¥B­ŗÊcØiIƝĿuqtāwO]³YCñTeÉcaubÍ]trluīBÐGsĵıN£ï^ķqsq¿DūūVÕ·´Ç{éĈýÿOER_đûIċâJh­ŅıNȩĕB¦K{Tk³¡OP·wnµÏd¯}½TÍ«YiµÕsC¯iM¤­¦¯P|ÿUHvhe¥oFTuõ\\OSsMòđƇiaºćXĊĵà·çhƃ÷Ç{ígu^đgm[ÙxiIN¶Õ»lđÕwZSÆv©_ÈëJbVkĔVÀ¤P¾ºÈMÖxlò~ªÚàGĂ¢B±ÌKyñ`w²¹·`gsÙfIěxŕeykpudjuTfb·hh¿Jd[\\LáƔĨƐAĈepÀÂMD~ņªe^\\^§ý©j×cZØ¨zdÒa¶lÒJìõ`oz÷@¤uŞ¸´ôęöY¼HČƶajlÞƩ¥éZ[|h}^U  ¥pĄžƦO lt¸Æ Q\\aÆ|CnÂOjt­ĚĤdÈF`¶@Ðë ¦ōÒ¨SêvHĢÛ@[ÆQoxHW[ŰîÀt¦Ǆ~NĠ¢lĄtZoCƞÔºCxrpČNpj¢{f_Y`_eq®Aot`@oDXfkp¨|s¬\\DÄSfè©Hn¬^DhÆyøJhØxĢĀLÊƠPżċĄwĮ¶"],
                encodeOffsets: [[118923, 30536]]
            },
            properties: {cp: [115.892151, 28.676493], name: "江西", childNum: 1}
        }, {
            id: "370000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@Xjd]mE", "@@itnq", "@@Dl@k", "@@TGw", "@@K¬U", "@@Wd`c", "@@PtMs", "@@LnXlc", "@@ppVu]Qn", "@@cdzAU_", "@@udRhnCE", "@@oIpP", "@@M{ĿčwbxƨîKÎMĮ]ZF½Y]â£ph¶¨râøÀÎǨ¤^ºÄGz~grĚĜlĞÆLĆǆ¢Îo¦cvKbgr°WhmZp L]LºcUÆ­nżĤÌĒbAnrOA´ȊcÀbƦUØrĆUÜøĬƞŶǬĴóò_A̈«ªdÎÉnb²ĦhņBĖįĦåXćì@L¯´ywƕCéÃµė ƿ¸lµZæyj|BíÂKNNnoƈfÈMZwnŐNàúÄsTJULîVjǎ¾ĒØDz²XPn±ŴPè¸ŔLƔÜƺ_TüÃĤBBċÈöA´faM¨{«M`¶d¡ôÖ°mȰBÔjj´PM|c^d¤u¤Û´ä«ƢfPk¶Môl]Lb}su^ke{lCMrDÇ­]NÑFsmoõľHyGă{{çrnÓEƕZGª¹Fj¢ÿ©}ÌCǷë¡ąuhÛ¡^KxC`C\\bÅxì²ĝÝ¿_NīCȽĿåB¥¢·IŖÕy\\¹kxÃ£ČáKµË¤ÁçFQ¡KtŵƋ]CgÏAùSedcÚźuYfyMmhUWpSyGwMPqŀÁ¼zK¶G­Y§Ë@´śÇµƕBm@IogZ¯uTMx}CVKï{éƵP_K«pÛÙqċtkkù]gTğwoɁsMõ³ăAN£MRkmEÊčÛbMjÝGuIZGPģãħE[iµBEuDPÔ~ª¼ęt]ûG§¡QMsğNPŏįzs£Ug{đJĿļā³]ç«Qr~¥CƎÑ^n¶ÆéÎR~Ż¸YI] PumŝrƿIā[xeÇ³L¯v¯s¬ÁY~}ťuŁgƋpÝĄ_ņī¶ÏSR´ÁP~¿Cyċßdwk´SsX|t`Ä ÈðAªìÎT°¦Dda^lĎDĶÚY°`ĪŴǒàŠv\\ebZHŖR¬ŢƱùęOÑM­³FÛaj"]],
                encodeOffsets: [[[123806, 39303], [123821, 39266], [123742, 39256], [123702, 39203], [123649, 39066], [123847, 38933], [123580, 38839], [123894, 37288], [123043, 36624], [123344, 38676], [123522, 38857], [123628, 38858], [118267, 36772]]]
            },
            properties: {cp: [117.000923, 36.675807], name: "山东", childNum: 13}
        }, {
            id: "410000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@dXD}~Hgq~ÔN~zkĘHVsǲßjŬŢ`Pûàl¢\\ÀEhİgÞē X¼`khÍLùµP³swIÓzeŠĠð´E®ÚPtºIŊÊºL«šŕQGYfa[şußǑĩų_Z¯ĵÙčC]kbc¥CS¯ëÍB©ïÇÃ_{sWTt³xlàcČzÀD}ÂOQ³ÐTĬµƑÐ¿ŸghłŦv~}ÂZ«¤lPÇ£ªÝŴÅR§ØnhctâknÏ­ľŹUÓÝdKuķI§oTũÙďkęĆH¸Ó\\Ä¿PcnS{wBIvÉĽ[GqµuŇôYgûZca©@½Õǽys¯}lgg@­C\\£asIdÍuCQñ[L±ęk·ţb¨©kK»KC²òGKmĨS`UQnk}AGēsqaJ¥ĐGRĎpCuÌy ã iMcplk|tRkðev~^´¦ÜSí¿_iyjI|ȑ|¿_»d}q^{Ƈdă}tqµ`ŷé£©V¡om½ZÙÏÁRD|JOÈpÀRsI{ùÓjuµ{t}uËRivGçJFjµåkWê´MÂHewixGw½Yŷpµú³XU½ġyłåkÚwZX·l¢Á¢KzOÎÎjc¼htoDHr|­J½}JZ_¯iPq{tę½ĕ¦Zpĵø«kQĹ¤]MÛfaQpě±ǽ¾]u­Fu÷nčÄ¯ADp}AjmcEÇaª³o³ÆÍSƇĈÙDIzçñİ^KNiÞñ[aA²zzÌ÷D|[íÄ³gfÕÞd®|`Ć~oĠƑô³ŊD×°¯CsøÂ«ìUMhTº¨¸ǝêWÔDruÂÇZ£ĆPZW~ØØv¬gèÂÒw¦X¤Ā´oŬ¬²Ês~]®tªapŎJ¨Öº_ŔfŐ\\Đ\\Ĝu~m²Ƹ¸fWĦrƔ}Î^gjdfÔ¡J}\\n C¦þWxªJRÔŠu¬ĨĨmFdM{\\d\\YÊ¢ú@@¦ª²SÜsC}fNècbpRmlØ^gd¢aÒ¢CZZxvÆ¶N¿¢T@uC¬^ĊðÄn|lIlXhun[", "@@hzUq"]],
                encodeOffsets: [[[116744, 37216], [116480, 33048]]]
            },
            properties: {cp: [113.665412, 34.757975], name: "河南", childNum: 2}
        }, {
            id: "420000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@ASd", "@@ls{d", "@@¾«}{ra®pîÃ\\{øCËyyB±b\\òÝjKL ]ĎĽÌJyÚCƈćÎT´Å´pb©ÈdFin~BCo°BĎÃømv®E^vǾ½Ĝ²RobÜeN^ĺ£R¬lĶ÷YoĖ¥Ě¾|sOr°jY`~I¾®I{GqpCgyl{£ÍÍyPLÂ¡¡¸kWxYlÙæŁĢz¾V´W¶ùŸo¾ZHxjwfxGNÁ³Xéæl¶EièIH ujÌQ~v|sv¶Ôi|ú¢FhQsğ¦SiŠBgÐE^ÁÐ{čnOÂÈUÎóĔÊēĲ}Z³½Mŧïeyp·uk³DsÑ¨L¶_ÅuÃ¨w»¡WqÜ]\\Ò§tƗcÕ¸ÕFÏǝĉăxŻČƟOKÉġÿ×wg÷IÅzCg]m«ªGeçÃTC«[t§{loWeC@ps_Bp­rf_``Z|ei¡oċMqow¹DƝÓDYpûsYkıǃ}s¥ç³[§cY§HK«Qy]¢wwö¸ïx¼ņ¾Xv®ÇÀµRĠÐHM±cÏdƒǍũȅȷ±DSyúĝ£ŤĀàtÖÿï[îb\\}pĭÉI±Ñy¿³x¯No|¹HÏÛmjúË~TuęjCöAwě¬Rđl¯ Ñb­ŇTĿ_[IčĄʿnM¦ğ\\É[T·k¹©oĕ@A¾wya¥Y\\¥Âaz¯ãÁ¡k¥ne£ÛwE©Êō¶˓uoj_U¡cF¹­[WvP©whuÕyBF`RqJUw\\i¡{jEPïÿ½fćQÑÀQ{°fLÔ~wXgītêÝ¾ĺHd³fJd]HJ²EoU¥HhwQsƐ»Xmg±çve]DmÍPoCc¾_hhøYrŊU¶eD°Č_N~øĹĚ·`z]Äþp¼äÌQv\\rCé¾TnkžŐÚÜa¼ÝƆĢ¶ÛodĔňÐ¢JqPb ¾|J¾fXƐîĨ_Z¯À}úƲN_ĒÄ^ĈaŐyp»CÇÄKñL³ġM²wrIÒŭxjb[n«øæà ^²­h¯ÚŐªÞ¸Y²ĒVø}Ā^İ´LÚm¥ÀJÞ{JVųÞŃx×sxxƈē ģMřÚðòIfĊŒ\\Ʈ±ŒdÊ§ĘDvČ_Àæ~Dċ´A®µ¨ØLV¦êHÒ¤"]],
                encodeOffsets: [[[113712, 34e3], [115612, 30507], [113649, 34054]]]
            },
            properties: {cp: [114.298572, 30.584355], name: "湖北", childNum: 3}
        }, {
            id: "430000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@nFZw", "@@ãÆá½ÔXrCOËRïÿĩ­TooQyÓ[ŅBE¬ÎÓXaį§Ã¸G °ITxpúxÚĳ¥ÏĢ¾edÄ©ĸGàGhM¤Â_U}Ċ}¢pczfþg¤ÇôAV", "@@ȴÚĖÁĐiOĜ«BxDõĚivSÌ}iùÜnÐºG{p°M°yÂÒzJ²Ì ÂcXëöüiáÿñőĞ¤ùTz²CȆȸǎŪƑÐc°dPÎğË¶[È½u¯½WM¡­ÉB·rínZÒ `¨GA¾\\pēXhÃRC­üWGġuTé§ŎÑ©êLM³}_EÇģc®ęisÁPDmÅ{b[RÅs·kPŽƥóRoOV~]{g\\êYƪ¦kÝbiċƵGZ»Ěõó·³vŝ£ø@pyö_ëIkÑµbcÑ§y×dYØªiþUjŅ³C}ÁN»hĻħƏâƓKA·³CQ±µ§¿AUƑ¹AtćOwD]JUÖgk¯b£ylZFËÑ±H­}EbóľA¡»Ku¦·³åş¥ùBD^{ÌC´­¦ŷJ£^[ª¿ğ|ƅN skóā¹¿ï]ă~÷O§­@Vm¡Qđ¦¢Ĥ{ºjÔª¥nf´~Õo×ÛąGû¥cÑ[Z¶ŨĪ²SÊǔƐƀAÚŌ¦QØ¼rŭ­«}NÏürÊ¬mjr@ĘrTW ­SsdHzƓ^ÇÂyUi¯DÅYlŹu{hT}mĉ¹¥ěDÿë©ıÓ[Oº£¥ótł¹MÕƪ`PDiÛU¾ÅâìUñBÈ£ýhedy¡oċ`pfmjP~kZaZsÐd°wj§@Ĵ®w~^kÀÅKvNmX\\¨aŃqvíó¿F¤¡@ũÑVw}S@j}¾«pĂrªg àÀ²NJ¶¶DôK|^ª°LX¾ŴäPĪ±£EXd^¶ĲÞÜ~u¸ǔMRhsRe`ÄofIÔ\\Ø  ićymnú¨cj ¢»GČìƊÿÐ¨XeĈĀ¾Oð Fi ¢|[jVxrIQ_EzAN¦zLU`cªxOTu RLÄªpUĪȴ^ŎµªÉFxÜf¤ºgĲèy°Áb[¦Zb¦z½xBĖ@ªpºjS´rVźOd©ʪiĎăJP`"]],
                encodeOffsets: [[[115640, 30489], [112577, 27316], [114113, 30649]]]
            },
            properties: {cp: [112.982279, 28.19409], name: "湖南", childNum: 3}
        }, {
            id: "440000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@QdAsa", "@@lxDRm", "@@sbhNLo", "@@Ă ý", "@@WltOY[", "@@Kr]S", "@@e~AS}", "@@I|Mym", "@@Û³LS²Q", "@@nvºBë¥cÕº", "@@zdÛJm", "@@°³", "@@a yAª¸ËJIxØ@ĀHÉÕZofoo", "@@sŗÃÔėAƁZÄ ~°ČPºb", "@@¶ÝÌvmĞh¹Ĺ", "@@HdSjĒ¢D}waru«ZqadY{K", "@@el\\LqqO", "@@~rMmX", "@@f^E", "@@øPªoj÷ÍÝħXČx°Q¨ıXJp", "@@gÇƳmxatfu", "@@EÆC½", "@@¸B_¶ekWvSivc}p}Ăº¾NĎyj¦Èm th_®Ä}»âUzLË²Aā¡ßH©Ùñ}wkNÕ¹ÇO½¿£ēUlaUìIÇª`uTÅxYĒÖ¼kÖµMjJÚwn\\hĒv]îh|ÈƄøèg¸Ķß ĉĈWb¹ƀdéĘNTtP[öSvrCZaGubo´ŖÒÇĐ~¡zCIözx¢PnÈñ @ĥÒ¦]ƜX³ăĔñiiÄÓVépKG½ÄÓávYoC·sitiaÀyŧÎ¡ÈYDÑům}ý|m[węõĉZÅxUO}÷N¹³ĉo_qtăqwµŁYÙǝŕ¹tïÛUÃ¯mRCºĭ|µÕÊK½Rē ó]GªęAxNqSF|ām¡diď×YïYWªŉOeÚtĐ«zđ¹TāúEáÎÁWwíHcòßÎſ¿Çdğ·ùT×Çūʄ¡XgWÀǇğ·¿ÃOj YÇ÷Sğ³kzőõmĝ[³¡VÙæÅöMÌ³¹pÁaËýý©D©ÜJŹƕģGą¤{ÙūÇO²«BƱéAÒĥ¡«BhlmtÃPµyU¯ucd·w_bŝcīímGOGBȅŹãĻFŷŽŕ@Óoo¿ē±ß}}ÓF÷tĲWÈCőâUâǙIğŉ©IĳE×Á³AĥDĈ±ÌÜÓĨ£L]ĈÙƺZǾĆĖMĸĤfÎĵlŨnÈĐtFFĤêk¶^k°f¶g}®Faf`vXŲxl¦ÔÁ²¬Ð¦pqÊÌ²iXØRDÎ}Ä@ZĠsx®AR~®ETtĄZƈfŠŠHâÒÐAµ\\S¸^wĖkRzalŜ|E¨ÈNĀňZTpBh£\\ĎƀuXĖtKL¶G|»ĺEļĞ~ÜĢÛĊrOÙîvd]n¬VÊĜ°RÖpMƀ¬HbwEÀ©\\¤]ŸI®¥D³|Ë]CúAŠ¦æ´¥¸Lv¼¢ĽBaôF~®²GÌÒEYzk¤°ahlVÕI^CxĈPsBƒºVÀB¶¨R²´D", "@@OR"]],
                encodeOffsets: [[[117381, 22988], [116552, 22934], [116790, 22617], [116973, 22545], [116444, 22536], [116931, 22515], [116496, 22490], [116453, 22449], [113301, 21439], [118726, 21604], [118709, 21486], [113210, 20816], [115482, 22082], [113171, 21585], [113199, 21590], [115232, 22102], [115739, 22373], [115134, 22184], [113056, 21175], [119573, 21271], [119957, 24020], [115859, 22356], [116680, 26053], [116561, 22649]]]
            },
            properties: {cp: [113.280637, 23.125178], name: "广东", childNum: 24}
        }, {
            id: "450000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@H TI¡U", "@@Ɣ_LÊFZgčP­kini«qÇczÍY®¬Ů»qR×ō©DÕ§ƙǃŵTÉĩ±ıdÑnYYĲvNĆĆØÜ Öp}e³¦m©iÓ|¹ħņ|ª¦QF¢Â¬ʖovg¿em^ucäāmÇÖåB¡Õçĝ}FĻ¼Ĺ{µHKsLSđƃrč¤[AgoSŇYMÿ§Ç{FśbkylQxĕ]T·¶[BÑÏGáşşƇeăYSs­FQ}­BwtYğÃ@~CÍQ ×WjË±rÉ¥oÏ ±«ÓÂ¥kwWűue_b­E~µh¯ecl¯Ïr¯EģJğ}w³Ƈē`ãògK_ÛsUʝćğ¶höO¤Ǜn³c`¡yię[ďĵűMę§]XÎ_íÛ]éÛUćİÕBƣ±dy¹T^dûÅÑŦ·PĻþÙ`K¦¢ÍeĥR¿³£[~äu¼dltW¸oRM¢ď\\z}Æzdvň{ÎXF¶°Â_ÒÂÏL©ÖTmu¼ãlīkiqéfA·Êµ\\őDc¥ÝFyÔćcűH_hLÜêĺĐ¨c}rn`½Ì@¸¶ªVLhŒ\\Ţĺk~Ġið°|gtTĭĸ^xvKVGréAébUuMJVÃO¡qĂXËSģãlýà_juYÛÒBG^éÖ¶§EGÅzěƯ¤EkN[kdåucé¬dnYpAyČ{`]þ±X\\ÞÈk¡ĬjàhÂƄ¢Hè ŔâªLĒ^Öm¶ħĊAǦė¸zÚGn£¾rªŀÜt¬@ÖÚSx~øOŒŶÐÂæȠ\\ÈÜObĖw^oÞLf¬°bI lTØBÌF£Ć¹gñĤaYt¿¤VSñK¸¤nM¼JE±½¸ñoÜCƆæĪ^ĚQÖ¦^f´QüÜÊz¯lzUĺš@ìp¶n]sxtx¶@~ÒĂJb©gk{°~c°`Ô¬rV\\la¼¤ôá`¯¹LCÆbxEræOv[H­[~|aB£ÖsºdAĐzNÂðsÞÆĤªbab`ho¡³F«èVZs\\\\ÔRzpp®SĪº¨ÖºNĳd`a¦¤F³¢@`¢ĨĀìhYvlĆº¦Ċ~nS|gźv^kGÆÀè·"]],
                encodeOffsets: [[[111707, 21520], [113706, 26955]]]
            },
            properties: {cp: [108.320004, 22.82402], name: "广西", childNum: 2}
        }, {
            id: "460000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@¦Ŝil¢XƦƞòïè§ŞCêɕrŧůÇąĻõ·ĉ³œ̅kÇm@ċȧŧĥĽʉ­ƅſȓÒË¦ŝE}ºƑ[ÍĜȋ gÎfǐÏĤ¨êƺ\\Ɔ¸ĠĎvʄȀÐ¾jNðĀÒRZǆzÐĊ¢DÀɘZ"],
                encodeOffsets: [[112750, 20508]]
            },
            properties: {cp: [110.33119, 20.031971], name: "海南", childNum: 1}
        }, {
            id: "510000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@LqSn", "@@ĆOìÛÐ@ĞǔNY{¤Á§di´ezÝúØãwIþËQÇ¦ÃqÉSJ»ĂéʔõÔƁİlƞ¹§ĬqtÀƄmÀêErĒtD®ċæcQE®³^ĭ¥©l}äQtoŖÜqÆkµªÔĻĴ¡@Ċ°B²Èw^^RsºTĀ£ŚæQPJvÄz^Đ¹Æ¯fLà´GC²dt­ĀRt¼¤ĦOðğfÔðDŨŁĞƘïPÈ®âbMüÀXZ ¸£@Å»»QÉ­]dsÖ×_Í_ÌêŮPrĔĐÕGĂeZÜîĘqBhtO ¤tE[h|YÔZśÎs´xº±Uñt|OĩĠºNbgþJy^dÂY Į]Řz¦gC³R`Āz¢Aj¸CL¤RÆ»@­Ŏk\\Ç´£YW}z@Z}Ã¶oû¶]´^NÒ}èNªPÍy¹`S°´ATeVamdUĐwʄvĮÕ\\uÆŗ¨Yp¹àZÂmWh{á}WØǍÉüwga§ßAYrÅÂQĀÕ¬LŐý®Xøxª½Ű¦¦[þ`ÜUÖ´òrÙŠ°²ÄkĳnDX{U~ET{ļº¦PZcjF²Ė@pg¨B{u¨ŦyhoÚD®¯¢ WòàFÎ¤¨GDäz¦kŮPġqË¥À]eâÚ´ªKxīPÖ|æ[xÃ¤JÞĥsNÖ½I¬nĨY´®ÐƐmDŝuäđđEbee_v¡}ìęǊē}qÉåT¯µRs¡M@}ůaa­¯wvƉåZw\\Z{åû`[±oiJDÅ¦]ĕãïrG réÏ·~ąSfy×Í·ºſƽĵȁŗūmHQ¡Y¡®ÁÃ×t«­T¤JJJyJÈ`Ohß¦¡uËhIyCjmÿwZGTiSsOB²fNmsPa{M{õE^Hj}gYpaeu¯oáwHjÁ½M¡pMuåmni{fk\\oÎqCwEZ¼KĝAy{m÷LwO×SimRI¯rKõBS«sFe]fµ¢óY_ÆPRcue°Cbo×bd£ŌIHgtrnyPt¦foaXďxlBowz_{ÊéWiêEGhÜ¸ºuFĈIxf®Y½ĀǙ]¤EyF²ċw¸¿@g¢§RGv»áW`ÃĵJwi]t¥wO­½a[×]`Ãi­üL¦LabbTÀåc}ÍhÆh®BHî|îºÉk­¤Sy£ia©taį·Ɖ`ō¥UhOĝLk}©Fos´JmµlŁuønÑJWÎªYÀïAetTŅÓGË«bo{ıwodƟ½OġÜÂµxàNÖ¾P²§HKv¾]|BÆåoZ`¡Ø`ÀmºĠ~ÌÐ§nÇ¿¤]wğ@srğu~Io[é±¹ ¿ſđÓ@qg¹zƱřaí°KtÇ¤V»Ã[ĩǭƑ^ÇÓ@áťsZÏÅĭƋěpwDóÖáŻneQËq·GCœýS]x·ýq³OÕ¶Qzßti{řáÍÇWŝŭñzÇWpç¿JXĩè½cFÂLiVjx}\\NŇĖ¥GeJA¼ÄHfÈu~¸Æ«dE³ÉMA|bÒćhG¬CMõƤąAvüVéŀ_VÌ³ĐwQj´·ZeÈÁ¨X´Æ¡Qu·»ÕZ³ġqDoy`L¬gdp°şp¦ėìÅĮZ°Iähzĵf²å ĚÑKpIN|Ñz]ń·FU×é»R³MÉ»GM«kiér}Ã`¹ăÞmÈnÁîRǀ³ĜoİzŔwǶVÚ£À]ɜ»ĆlƂ²ĠþTº·àUȞÏʦ¶I«dĽĢdĬ¿»Ĕ×h\\c¬ä²GêëĤł¥ÀǿżÃÆMº}BÕĢyFVvwxBèĻĒ©Ĉt@Ğû¸£B¯¨ˋäßkķ½ªôNÔ~t¼Ŵu^s¼{TA¼ø°¢İªDè¾Ň¶ÝJ®Z´ğ~Sn|ªWÚ©òzPOȸbð¢|øĞA"]],
                encodeOffsets: [[[108815, 30935], [100197, 35028]]]
            },
            properties: {cp: [104.065735, 30.659462], name: "四川", childNum: 2}
        }, {
            id: "520000", geometry: {
                type: "MultiPolygon",
                coordinates: [["@@G\\lY£cj", "@@q|mc¯vÏV", "@@hÑ£IsNgßHHªķÃh_¹¡ĝÄ§ń¦uÙùgS¯JH|sÝÅtÁïyMDč»eÕtA¤{b\\}G®u\\åPFqwÅaDK°ºâ_£ùbµmÁÛĹM[q|hlaªāI}Ñµ@swtwm^oµDéĽŠyVky°ÉûÛR³e¥]RÕěħ[ƅåÛDpJiVÂF²I»mN·£LbÒYbWsÀbpkiTZĄă¶Hq`ĥ_J¯ae«KpÝx]aĕÛPÇȟ[ÁåŵÏő÷Pw}TÙ@Õs«ĿÛq©½m¤ÙH·yǥĘĉBµĨÕnđ]K©œáGçş§ÕßgǗĦTèƤƺ{¶ÉHÎd¾ŚÊ·OÐjXWrãLyzÉAL¾ę¢bĶėy_qMĔąro¼hĊw¶øV¤w²Ĉ]ÊKx|`ź¦ÂÈdrcÈbe¸`I¼čTF´¼Óýȃr¹ÍJ©k_șl³´_pĐ`oÒh¶pa^ÓĔ}D»^Xy`d[KvJPhèhCrĂĚÂ^Êƌ wZL­Ġ£ÁbrzOIlMMĪŐžËr×ÎeŦtw|¢mKjSǘňĂStÎŦEtqFT¾Eì¬¬ôxÌO¢ K³ŀºäYPVgŎ¦ŊmŞ¼VZwVlz¤£Tl®ctĽÚó{G­AÇge~Îd¿æaSba¥KKûj®_Ä^\\Ø¾bP®¦x^sxjĶI_Ä Xâ¼Hu¨Qh¡À@Ëô}±GNìĎlT¸`V~R°tbÕĊ`¸úÛtÏFDu[MfqGH·¥yAztMFe|R_GkChZeÚ°tov`xbDnÐ{E}ZèxNEÞREn[Pv@{~rĆAB§EO¿|UZ~ìUf¨J²ĂÝÆsªB`s¶fvö¦Õ~dÔq¨¸º»uù[[§´sb¤¢zþF¢ÆÀhÂW\\ıËIÝo±ĭŠ£þÊs}¡R]ěDg´VG¢j±®èºÃmpU[Áëº°rÜbNu¸}º¼`niºÔXĄ¤¼ÔdaµÁ_ÃftQQgR·Ǔv}Ý×ĵ]µWc¤F²OĩųãW½¯K©]{LóµCIµ±Mß¿h©āq¬o½~@i~TUxð´Đhw­ÀEîôuĶb[§nWuMÆJl½]vuıµb"]],
                encodeOffsets: [[[112158, 27383], [112105, 27474], [112095, 27476]]]
            }, properties: {cp: [106.713478, 26.578343], name: "贵州", childNum: 3}
        }, {
            id: "530000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@[ùx½}ÑRHYīĺûsÍniEoã½Ya²ė{c¬ĝgĂsAØÅwďõzFjw}«Dx¿}Uũlê@HÅ­F¨ÇoJ´Ónũuą¡Ã¢pÒÅØ TF²xa²ËXcÊlHîAßËŁkŻƑŷÉ©hW­æßUËs¡¦}teèÆ¶StÇÇ}Fd£jĈZĆÆ¤Tč\\D}O÷£U§~ŃGåŃDĝ¸Tsd¶¶Bª¤u¢ŌĎo~t¾ÍŶÒtD¦ÚiôözØX²ghįh½Û±¯ÿm·zR¦Ɵ`ªŊÃh¢rOÔ´£Ym¼èêf¯ŪĽncÚbw\\zlvWªâ ¦gmĿBĹ£¢ƹřbĥkǫßeeZkÙIKueT»sVesbaĕ  ¶®dNĄÄpªy¼³BE®lGŭCǶwêżĔÂepÍÀQƞpC¼ŲÈ­AÎô¶RäQ^Øu¬°_Èôc´¹ò¨PÎ¢hlĎ¦´ĦÆ´sâÇŲPnÊD^¯°Upv}®BPÌªjǬxSöwlfòªvqĸ|`H­viļndĜ­Ćhňem·FyÞqóSį¯³X_ĞçêtryvL¤§z¦c¦¥jnŞklD¤øz½ĜàĂŧMÅ|áƆàÊcðÂFÜáŢ¥\\\\ºİøÒÐJĴîD¦zK²ǏÎEh~CD­hMn^ÌöÄ©ČZÀaüfɭyœpį´ěFűk]Ôě¢qlÅĆÙa¶~ÄqêljN¬¼HÊNQ´ê¼VØ¸E^ŃÒyM{JLoÒęæe±Ķygã¯JYÆĭĘëo¥Šo¯hcK«z_prC´ĢÖY¼ v¸¢RÅW³Â§fÇ¸Yi³xR´ďUË`êĿUûuĆBƣöNDH«ĈgÑaB{ÊNF´¬c·Åv}eÇÃGB»If¦HňĕM~[iwjUÁKE¾dĪçWIèÀoÈXòyŞŮÈXâÎŚj|àsRyµÖPr´þ ¸^wþTDŔHr¸RÌmfżÕâCôoxĜƌÆĮÐYtâŦÔ@]ÈǮƒ\\Ī¼Ä£UsÈ¯LbîƲŚºyhr@ĒÔƀÀ²º\\êpJ}ĠvqtĠ@^xÀ£È¨mËÏğ}n¹_¿¢×Y_æpÅA^{½Lu¨GO±Õ½ßM¶wÁĢÛPƢ¼pcĲx|apÌ¬HÐŊSfsðBZ¿©XÏÒKk÷Eû¿SrEFsÕūkóVǥŉiTL¡n{uxţÏhôŝ¬ğōNNJkyPaqÂğ¤K®YxÉƋÁ]āęDqçgOgILu\\_gz]W¼~CÔē]bµogpÑ_oď`´³Țkl`IªºÎȄqÔþ»E³ĎSJ»_f·adÇqÇc¥Á_Źw{L^É±ćxU£µ÷xgĉp»ĆqNē`rĘzaĵĚ¡K½ÊBzyäKXqiWPÏÉ¸½řÍcÊG|µƕƣGË÷k°_^ý|_zċBZocmø¯hhcæ\\lMFlư£ĜÆyHF¨µêÕ]HAàÓ^it `þßäkĤÎT~Wlÿ¨ÔPzUCNVv [jâôDôď[}z¿msSh¯{jïğl}šĹ[őgK©U·µË@¾m_~q¡f¹ÅË^»f³ø}Q¡ÖË³gÍ±^Ç\\ëÃA_¿bWÏ[¶ƛé£F{īZgm@|kHǭƁć¦UĔť×ëǟeċ¼ȡȘÏíBÉ£āĘPªĳ¶ŉÿy©nď£G¹¡I±LÉĺÑdĉÜW¥}gÁ{aqÃ¥aıęÏZÁ`"],
                encodeOffsets: [[104636, 22969]]
            },
            properties: {cp: [102.712251, 25.040609], name: "云南", childNum: 1}
        }, {
            id: "540000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@ÂhľxŖxÒVºÅâAĪÝȆµę¯Ňa±r_w~uSÕňqOj]ɄQ£ZUDûoY»©M[L¼qãË{VÍçWVi]ë©Ä÷àyƛhÚU°adcQ~Mx¥caÛcSyFÖk­uRýq¿ÔµQĽ³aG{¿FµëªéĜÿª@¬·K·àariĕĀ«V»ŶĴūgèLǴŇƶaftèBŚ£^âǐÝ®M¦ÁǞÿ¬LhJ¾óƾÆºcxwf]Y´¦|QLn°adĊ\\¨oǀÍŎ´ĩĀd`tÊQŞŕ|¨C^©Ĉ¦¦ÎJĊ{ëĎjª²rÐl`¼Ą[t|¦Stè¾PÜK¸dƄı]s¤î_v¹ÎVòŦj£Əsc¬_Ğ´|Ł¦Av¦w`ăaÝaa­¢e¤ı²©ªSªÈMĄwÉØŔì@T¤Ę\\õª@þo´­xA sÂtŎKzó²ÇČµ¢r^nĊ­Æ¬×üG¢³ {âĊ]G~bÀgVjzlhǶfOfdªB]pjTOtĊn¤}®¦Č¥d¢¼»ddY¼t¢eȤJ¤}Ǿ¡°§¤AÐlc@ĝsªćļđAçwxUuzEÖġ~AN¹ÄÅȀŻ¦¿ģŁéì±Hãd«g[Ø¼ēÀcīľġ¬cJµÐʥVȝ¸ßS¹ý±ğkƁ¼ą^ɛ¤Ûÿb[}¬ōõÃ]ËNm®g@Bg}ÍF±ǐyL¥íCIĳÏ÷Ñį[¹¦[âšEÛïÁÉdƅß{âNÆāŨß¾ě÷yC£k­´ÓH@Â¹TZ¥¢į·ÌAÐ§®Zcv½Z­¹|ÅWZqgW|ieZÅYVÓqdqbc²R@c¥Rã»GeeƃīQ}J[ÒK¬Ə|oėjġĠÑN¡ð¯EBčnwôɍėª²CλŹġǝʅįĭạ̃ūȹ]ΓͧgšsgȽóϧµǛęgſ¶ҍć`ĘąŌJÞä¤rÅň¥ÖÁUětęuůÞiĊÄÀ\\Æs¦ÓRb|Â^řÌkÄŷ¶½÷f±iMÝ@ĥ°G¬ÃM¥n£Øąğ¯ß§aëbéüÑOčk£{\\eµª×MÉfm«Ƒ{Å×Gŏǩãy³©WÑăû··Qòı}¯ãIéÕÂZ¨īès¶ZÈsæĔTŘvgÌsN@îá¾ó@ÙwU±ÉTå»£TđWxq¹Zobs[×¯cĩvėŧ³BM|¹kªħ¥TzNYnÝßpęrñĠĉRS~½ěVVµõ«M££µBĉ¥áºae~³AuĐh`Ü³ç@BÛïĿa©|z²Ý¼D£àč²ŸIûI āóK¥}rÝ_Á´éMaň¨~ªSĈ½½KÙóĿeƃÆB·¬ën×W|Uº}LJrƳlŒµ`bÔ`QÐÓ@s¬ñIÍ@ûws¡åQÑßÁ`ŋĴ{ĪTÚÅTSÄ³Yo|Ç[Ç¾µMW¢ĭiÕØ¿@MhpÕ]jéò¿OƇĆƇpêĉâlØwěsǩĵ¸cbU¹ř¨WavquSMzeo_^gsÏ·¥Ó@~¯¿RiīB\\qTGªÇĜçPoÿfñòą¦óQīÈáPābß{ZŗĸIæÅhnszÁCËìñÏ·ąĚÝUm®ó­L·ăUÈíoù´Êj°ŁŤ_uµ^°ìÇ@tĶĒ¡ÆM³Ģ«İĨÅ®ğRāðggheÆ¢zÊ©Ô\\°ÝĎz~ź¤PnMĪÖB£kné§żćĆKĒ°¼L¶èâz¨u¦¥LDĘz¬ýÎmĘd¾ßFzhg²Fy¦ĝ¤ċņbÎ@yĄæm°NĮZRÖíJ²öLĸÒ¨Y®ƌÐVàtt_ÚÂyĠz]ŢhzĎ{ÂĢXc|ÐqfO¢¤ögÌHNPKŖUú´xx[xvĐCûĀìÖT¬¸^}Ìsòd´_KgžLĴÀBon|H@Êx¦BpŰŌ¿fµƌA¾zǈRx¶FkĄźRzŀ~¶[´HnªVƞuĒ­È¨ƎcƽÌm¸ÁÈM¦x͊ëÀxǆBú^´W£dkɾĬpw˂ØɦļĬIŚÊnŔa¸~J°îlɌxĤÊÈðhÌ®gT´øàCÀ^ªerrƘd¢İP|Ė ŸWªĦ^¶´ÂLaT±üWƜǀRÂŶUńĖ[QhlLüAÜ\\qRĄ©"],
                encodeOffsets: [[90849, 37210]]
            },
            properties: {cp: [91.132212, 29.660361], name: "西藏", childNum: 1}
        }, {
            id: "610000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@¸ÂW¢xR­Fq§uF@N¢XLRMº[ğȣſï|¥Jkc`sŉǷ£Y³WN«ùMëï³ÛIg÷±mTșÚÒķø©þ¥yÓğęmWµÎumZyOŅƟĥÓ~sÑL¤µaÅY¦ocyZ{y c]{Ta©`U_Ěē£ωÊƍKùK¶ȱÝƷ§{û»ÅÁȹÍéuĳ|¹cÑdìUYOuFÕÈYvÁCqÓTǢí§·S¹NgV¬ë÷Át°DØ¯C´ŉƒópģ}ąiEËFéGU¥×K§­¶³BČ}C¿åċ`wġB·¤őcƭ²ő[Å^axwQOñJÙïŚĤNĔwƇÄńwĪ­o[_KÓª³ÙnKÇěÿ]ďă_d©·©Ýŏ°Ù®g]±ß×¥¬÷m\\iaǑkěX{¢|ZKlçhLtŇîŵœè[É@ƉĄEtƇÏ³­ħZ«mJ×¾MtÝĦ£IwÄå\\Õ{OwĬ©LÙ³ÙTª¿^¦rÌĢŭO¥lãyC§HÍ£ßEñX¡­°ÙCgpťzb`wIvA|¥hoĕ@E±iYd¥OÿµÇvPW|mCĴŜǂÒW¶¸AĜh^Wx{@¬­F¸¡ķn£P|ªĴ@^ĠĈæbÔc¶lYi^MicĎ°Â[ävï¶gv@ÀĬ·lJ¸sn|¼u~a]ÆÈtŌºJpþ£KKf~¦UbyäIĺãnÔ¿^­ŵMThĠÜ¤ko¼Ŏìąǜh`[tRd²Ĳ_XPrɲlXiL§à¹H°Ȧqº®QCbAŌJ¸ĕÚ³ĺ§ `d¨YjiZvRĺ±öVKkjGȊÄePĞZmļKÀ[`ösìhïÎoĬdtKÞ{¬èÒÒBÔpĲÇĬJŊ¦±J«[©ārHµàåVKe§|P²ÇÓ·vUzgnN¾yI@oHĆÛķhxen¡QQ±ƝJǖRbzy¸ËÐl¼EºpĤ¼x¼½~Ğà@ÚüdK^mÌSjp²ȮµûGĦ}Ħðǚ¶òƄjɂz°{ºØkÈęâ¦jªBg\\ċ°s¬]jú EȌǆ¬stRÆdĠİwÜ¸ôW¾ƮłÒ_{Ìû¼jº¹¢GǪÒ¯ĘZ`ºŊecņą~BÂgzpâēòYƲȐĎ"],
                encodeOffsets: [[113634, 40474]]
            },
            properties: {cp: [108.948024, 34.263161], name: "陕西", childNum: 1}
        }, {
            id: "620000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@Vu_^", "@@ųEĠtt~nkh`Q¦ÅÄÜdwAb×ĠąJ¤DüègĺqBqj°lI¡Ĩ¶ĖIHdjÎB°aZ¢KJO[|A£Dx}NĂ¬HUnrk kp¼Y kMJn[aGáÚÏ[½rc}aQxOgsPMnUsncZsKúvAtÞġ£®ĀYKdnFw¢JE°Latf`¼h¬we|Æbj}GA·~W`¢MC¤tL©Ĳ°qdfObÞĬ¹ttu`^ZúE`[@Æsîz®¡CƳƜG²R¢RmfwĸgÜą G@pzJM½mhVy¸uÈÔO±¨{LfæU¶ßGĂq\\ª¬²I¥IŉÈīoıÓÑAçÑ|«LÝcspīðÍgtë_õ\\ĉñLYnĝgRǡÁiHLlõUĹ²uQjYi§Z_c¨´ĹĖÙ·ŋIaBD­R¹ȥr¯GºßK¨jWkɱOqWĳ\\a­Q\\sg_ĆǛōëp»£lğÛgSŶN®À]ÓämĹãJaz¥V}Le¤Lýo¹IsŋÅÇ^bz³tmEÁ´a¹cčecÇNĊãÁ\\č¯dNj]jZµkÓdaćå]ğĳ@ ©O{¤ĸm¢E·®«|@Xwg]Aģ±¯XǁÑǳªcwQÚŝñsÕ³ÛV_ý¥\\ů¥©¾÷w©WÕÊĩhÿÖÁRo¸V¬âDb¨hûxÊ×ǌ~Zâg|XÁnßYoº§ZÅŘv[ĭÖʃuďxcVbnUSfB¯³_TzºÎO©çMÑ~M³]µ^püµÄY~y@X~¤Z³[Èōl@®Å¼£QK·Di¡ByÿQ_´D¥hŗy^ĭÁZ]cIzýah¹MĪğPs{ò²Vw¹t³ŜË[Ñ}X\\gsF£sPAgěp×ëfYHāďÖqēŭOÏëdLü\\it^c®RÊº¶¢H°mrY£B¹čIoľu¶uI]vģSQ{UŻÅ}QÂ|Ì°ƅ¤ĩŪU ęĄÌZÒ\\v²PĔ»ƢNHĂyAmƂwVm`]ÈbH`Ì¢²ILvĜH®¤Dlt_¢JJÄämèÔDëþgºƫaʎÌrêYi~ Îİ¤NpÀA¾Ĕ¼bð÷®üszMzÖĖQdȨýv§Tè|ªHÃ¾a¸|Ð ƒwKĢx¦ivr^ÿ ¸l öæfƟĴ·PJv}n\\h¹¶v·À|\\ƁĚN´ĜçèÁz]ġ¤²¨QÒŨTIlªťØ}¼˗ƦvÄùØEÂ«FïËIqōTvāÜŏíÛßÛVj³âwGăÂíNOPìyV³ŉĖýZso§HÑiYw[ß\\X¦¥c]ÔƩÜ·«jÐqvÁ¦m^ċ±R¦΋ƈťĚgÀ»IïĨʗƮ°ƝĻþÍAƉſ±tÍEÕÞāNUÍ¡\\ſčåÒʻĘm ƭÌŹöʥëQ¤µ­ÇcƕªoIýIÉ_mkl³ăƓ¦j¡YzŇi}Msßõīʋ }ÁVm_[n}eı­Uĥ¼ªI{Î§DÓƻėojqYhĹT©oūĶ£]ďxĩǑMĝq`B´ƃ˺Чç~²ņj@¥@đ´ί}ĥtPńÇ¾V¬ufÓÉCtÓ̻¹£G³]ƖƾŎĪŪĘ̖¨ʈĢƂlɘ۪üºňUðǜȢƢż̌ȦǼĤŊɲĖÂ­KqĘŉ¼ĔǲņɾªǀÞĈĂD½ĄĎÌŗĞrôñnN¼â¾ʄľԆ|Ǆ֦ज़ȗǉ̘̭ɺƅêgV̍ʆĠ·ÌĊv|ýĖÕWĊǎÞ´õ¼cÒÒBĢ͢UĜð͒s¨ňƃLĉÕÝ@ɛƯ÷¿Ľ­ĹeȏĳëCȚDŲyê×Ŗyò¯ļcÂßYtÁƤyAã˾J@ǝrý@¤rz¸oP¹ɐÚyáHĀ[JwcVeȴÏ»ÈĖ}ƒŰŐèȭǢόĀƪÈŶë;Ñ̆ȤМľĮEŔĹŊũ~ËUă{ĻƹɁύȩþĽvĽƓÉ@ēĽɲßǐƫʾǗĒpäWÐxnsÀ^ƆwW©¦cÅ¡Ji§vúF¶¨c~c¼īeXǚ\\đ¾JwÀďksãAfÕ¦L}waoZD½Ml«]eÒÅaÉ²áo½FõÛ]ĻÒ¡wYR£¢rvÓ®y®LFLzĈôe]gx}|KK}xklL]c¦£fRtív¦PŨ£", "@@M T¥"]],
                encodeOffsets: [[[108619, 36299], [108594, 36341], [108600, 36306]]]
            },
            properties: {cp: [103.823557, 36.058039], name: "甘肃", childNum: 3}
        }, {
            id: "630000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@InJo", "@@CÆ½OŃĦsΰ~Ē³¦@@Ņi±è}ШƄ˹A³r_ĞǒNĪĐw¤^ŬĵªpĺSZgrpiƼĘÔ¨C|ÍJ©Ħ»®VĲ~f\\m `UnÂ~ʌĬàöNt~ňjy¢ZiƔ¥Ąk´nl`JÊJþ©pdƖ®È£¶ìRʦźõƮËnʼėæÑƀĎ[¢VÎĂMÖÝÎF²sƊƀÎBļýƞ¯ʘƭðħ¼Jh¿ŦęΌƇ¥²Q]Č¥nuÂÏri¸¬ƪÛ^Ó¦d¥[Wàx\\ZjÒ¨GtpþYŊĕ´zUOëPîMĄÁxH´áiÜUàîÜŐĂÛSuŎrJðÌ¬EFÁú×uÃÎkrĒ{V}İ«O_ÌËĬ©ÓŧSRÑ±§Ģ£^ÂyèçěM³Ƃę{[¸¿uºµ[gt£¸OƤĿéYõ·kĀq]juw¥DĩƍõÇPéÄ½G©ã¤GuȧþRcÕĕNyyût­øï»a½ē¿BMoį£Íj}éZËqbʍƬh¹ìÿÓAçãnIÃ¡I`ks£CG­ěUy×Cy@¶ʡÊBnāzGơMē¼±O÷õJËĚăVĪũƆ£¯{ËL½ÌzżVR|ĠTbuvJvµhĻĖHAëáa­OÇðñęNwœľ·LmI±íĠĩPÉ×®ÿscB³±JKßĊ«`ađ»·QAmOVţéÿ¤¹SQt]]Çx±¯A@ĉĳ¢Óļ©l¶ÅÛrŕspãRk~¦ª]Į­´FRåd­ČsCqđéFn¿ÅƃmÉx{W©ºƝºįkÕƂƑ¸wWūÐ©ÈF£\\tÈ¥ÄRÈýÌJ lGr^×äùyÞ³fjc¨£ÂZ|ǓMĝÏ@ëÜőRĝ÷¡{aïȷPu°ËXÙ{©TmĠ}Y³­ÞIňµç½©C¡į÷¯B»|St»]vųs»}MÓ ÿʪƟǭA¡fs»PY¼c¡»¦cċ­¥£~msĉPSi^o©AecPeǵkgyUi¿h}aHĉ^|á´¡HØûÅ«ĉ®]m¡qċ¶±ÈyôōLÁstB®wn±ă¥HSòė£Së@×œÊăxÇN©©T±ª£Ĳ¡fb®Þbb_Ą¥xu¥B{łĝ³«`dƐt¤ťiñÍUuºí`£^tƃĲc·ÛLO½sç¥Ts{ă\\_»kÏ±q©čiìĉ|ÍI¥ć¥]ª§D{ŝŖÉR_sÿc³ĪōƿÎ§p[ĉc¯bKmR¥{³Ze^wx¹dƽÅ½ôIg §Mĕ ƹĴ¿ǣÜÍ]Ý]snåA{eƭ`ǻŊĿ\\ĳŬűYÂÿ¬jĖqßb¸L«¸©@ěĀ©ê¶ìÀEH|´bRľÓ¶rÀQþvl®ÕETzÜdb hw¤{LRdcb¯ÙVgƜßzÃôì®^jUèXÎ|UäÌ»rK\\ªN¼pZCüVY¤ɃRi^rPŇTÖ}|br°qňbĚ°ªiƶGQ¾²x¦PmlŜ[Ĥ¡ΞsĦÔÏâ\\ªÚŒU\\f¢N²§x|¤§xĔsZPòʛ²SÐqF`ªVÞŜĶƨVZÌL`¢dŐIqr\\oäõFÎ·¤»Ŷ×h¹]ClÙ\\¦ďÌį¬řtTӺƙgQÇÓHţĒ´ÃbEÄlbʔC|CŮkƮ[ʼ¬ň´KŮÈΰÌĪ¶ƶlðļATUvdTGº̼ÔsÊDÔveMg"]],
                encodeOffsets: [[[105308, 37219], [95370, 40081]]]
            },
            properties: {cp: [101.778916, 36.623178], name: "青海", childNum: 2}
        }, {
            id: "640000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@KëÀęĞ«Oęȿȕı]ŉ¡åįÕÔ«ǴõƪĚQÐZhv K°öqÀÑS[ÃÖHƖčËnL]ûcÙß@ĝ¾}w»»oģF¹»kÌÏ·{zP§B­¢íyÅt@@á]Yv_ssģ¼ißĻL¾ġsKD£¡N_X¸}B~HaiÅf{«x»ge_bsKF¯¡IxmELcÿZ¤­ĢÝsuBLùtYdmVtNmtOPhRw~bd¾qÐ\\âÙH\\bImlNZ»loqlVmGā§~QCw¤{A\\PKNY¯bFkC¥sks_Ã\\ă«¢ħkJi¯rrAhĹûç£CUĕĊ_ÔBixÅÙĄnªÑaM~ħpOu¥sîeQ¥¤^dkKwlL~{L~hw^ófćKyE­K­zuÔ¡qQ¤xZÑ¢^ļöÜ¾Ep±âbÊÑÆ^fk¬NC¾YpxbK~¥eÖäBlt¿Đx½I[ĒǙWf»Ĭ}d§dµùEuj¨IÆ¢¥dXªƅx¿]mtÏwßRĶX¢͎vÆzƂZò®ǢÌʆCrâºMÞzÆMÒÊÓŊZÄ¾r°Î®Ȉmª²ĈUªĚîøºĮ¦ÌĘk^FłĬhĚiĀĖ¾iİbjË"],
                encodeOffsets: [[109366, 40242]]
            },
            properties: {cp: [106.278179, 38.46637], name: "宁夏", childNum: 1}
        }, {
            id: "650000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@QØĔ²X¨~ǘBºjʐßØvKƔX¨vĊOÃ·¢i@~cĝe_«E}QxgɪëÏÃ@sÅyXoŖ{ô«ŸuXêÎf`C¹ÂÿÐGĮÕĞXŪōŸMźÈƺQèĽôe|¿ƸJR¤ĘEjcUóº¯Ĩ_ŘÁMª÷Ð¥OéÈ¿ÖğǤǷÂFÒzÉx[]­Ĥĝœ¦EP}ûƥé¿İƷTėƫœŕƅƱB»Đ±ēO¦E}`cȺrĦáŖuÒª«ĲπdƺÏØZƴwʄ¤ĖGĐǂZĶèH¶}ÚZצʥĪï|ÇĦMŔ»İĝǈì¥Βba­¯¥ǕǚkĆŵĦɑĺƯxūД̵nơʃĽá½M»òmqóŘĝčË¾ăCćāƿÝɽ©ǱŅ»ēėŊLrÁ®ɱĕģŉǻ̋ȥơŻǛȡVï¹Ň۩ûkɗġƁ§ʇė̕ĩũƽō^ƕUv£ƁQïƵkŏ½ΉÃŭÇ³LŇʻ«ƭ\\lŭD{ʓDkaFÃÄa³ŤđÔGRÈƚhSӹŚsİ«ĐË[¥ÚDkº^Øg¼ŵ¸£EÍöůŉT¡c_ËKYƧUśĵÝU_©rETÏʜ±OñtYwē¨{£¨uM³x½şL©Ùá[ÓÐĥ Νtģ¢\\śnkOw¥±T»ƷFɯàĩÞáB¹ÆÑUwŕĽw]kE½Èå~Æ÷QyěCFmĭZīŵVÁƿQƛûXS²b½KÏ½ĉS©ŷXĕ{ĕK·¥Ɨcqq©f¿]ßDõU³h­gËÇïģÉɋwk¯í}I·œbmÉřīJɥĻˁ×xoɹīlc¤³Xù]ǅA¿w͉ì¥wÇN·ÂËnƾƍdÇ§đ®ƝvUm©³G\\}µĿQyŹlăµEwǇQ½yƋBe¶ŋÀůo¥AÉw@{Gpm¿AĳŽKLh³`ñcËtW±»ÕSëüÿďDu\\wwwù³VLŕOMËGh£õP¡erÏd{ġWÁč|yšg^ğyÁzÙs`s|ÉåªÇ}m¢Ń¨`x¥ù^}Ì¥H«YªƅAÐ¹n~ź¯f¤áÀzgÇDIÔ´AňĀÒ¶ûEYospõD[{ù°]uJqU|Soċxţ[õÔĥkŋÞŭZËºóYËüċrw ÞkrťË¿XGÉbřaDü·Ē÷AÃª[ÄäIÂ®BÕĐÞ_¢āĠpÛÄȉĖġDKwbmÄNôfƫVÉviǳHQµâFù­Âœ³¦{YGd¢ĚÜO {Ö¦ÞÍÀP^bƾl[vt×ĈÍEË¨¡Đ~´î¸ùÎhuè`¸HÕŔVºwĠââWò@{ÙNÝ´ə²ȕn{¿¥{l÷eé^eďXj©î\\ªÑòÜìc\\üqÕ[Č¡xoÂċªbØ­ø|¶ȴZdÆÂońéG\\¼C°ÌÆn´nxÊOĨŪƴĸ¢¸òTxÊǪMīĞÖŲÃɎOvʦƢ~FRěò¿ġ~åŊúN¸qĘ[Ĕ¶ÂćnÒPĒÜvúĀÊbÖ{Äî¸~Ŕünp¤ÂH¾ĄYÒ©ÊfºmÔĘcDoĬMŬS¤s²ʘÚžȂVŦ èW°ªB|ĲXŔþÈJĦÆæFĚêYĂªĂ]øªŖNÞüAfɨJ¯ÎrDDĤ`mz\\§~D¬{vJÂ«lµĂb¤pŌŰNĄ¨ĊXW|ų ¿¾ɄĦƐMTòP÷fØĶK¢ȝ˔Sô¹òEð­`Ɩ½ǒÂň×äı§ĤƝ§C~¡hlåǺŦŞkâ~}FøàĲaĞfƠ¥Ŕd®U¸źXv¢aƆúŪtŠųƠjdƺƺÅìnrh\\ĺ¯äɝĦ]èpĄ¦´LƞĬ´ƤǬ˼Ēɸ¤rºǼ²¨zÌPðŀbþ¹ļD¢¹\\ĜÑŚ¶ZƄ³âjĦoâȴLÊȮĐ­ĚăÀêZǚŐ¤qȂ\\L¢ŌİfÆs|zºeªÙæ§΢{Ā´ƐÚ¬¨Ĵà²łhʺKÞºÖTiƢ¾ªì°`öøu®Ê¾ãÖ"],
                encodeOffsets: [[88824, 50096]]
            },
            properties: {cp: [87.617733, 43.792818], name: "新疆", childNum: 1}
        }, {
            id: "110000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@RºaYÕQaúÍÔiþĩȨWĢü|Ėu[qb[swP@ÅğP¿{\\¯Y²·Ñ¨j¯X\\¯MSvU¯YIŕY{[fk­VÁûtŷmiÍt_H»Ĩ±d`¹­{bwYr³S]§§o¹qGtm_SŧoaFLgQN_dV@Zom_ć\\ßW´ÕiœRcfio§ËgToÛJíĔóu|wP¤XnO¢ÉŦ¯pNÄā¤zâŖÈRpŢZÚ{GrFt¦Òx§ø¹RóäV¤XdżâºWbwŚ¨Ud®bêņ¾jnŎGŃŶnzÚScîĚZen¬"],
                encodeOffsets: [[119421, 42013]]
            },
            properties: {cp: [116.405285, 39.904989], name: "北京", childNum: 1}
        }, {
            id: "120000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@ŬgX§Ü«E¶FÌ¬O_ïlÁgz±AXeµÄĵ{¶]gitgIj·¥ì_iU¨ÐƎk}ĕ{gBqGf{¿aU^fIư³õ{YıëNĿk©ïËZukāAīlĕĥs¡bġ«@dekąI[nlPqCnp{ō³°`{PNdƗqSÄĻNNâyj]äÒD ĬH°Æ]~¡HO¾X}ÐxgpgWrDGpù^LrzWxZ^¨´T\\|~@IzbĤjeĊªz£®ĔvěLmV¾Ô_ÈNW~zbĬvG²ZmDM~~"],
                encodeOffsets: [[120237, 41215]]
            },
            properties: {cp: [117.190182, 39.125596], name: "天津", childNum: 1}
        }, {
            id: "310000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@ɧư¬EpƸÁx]", "@@©²", "@@MA", "@@QpªKWT§¨", "@@bŝÕÕEȣÚƥêImɇǦèÜĠÚÄÓŴ·ʌÇ", "@@Sô¤r]ìƬįǜûȬɋŭ×^sYɍDŋŽąñCG²«ªč@h_p¯A{oloY¬j@Ĳ`gQÚpptǀ^MĲvtbe´Rh@oj¨", "@@ÆLH{a}Eo¦"]],
                encodeOffsets: [[[124702, 32062], [124547, 32200], [124808, 31991], [124726, 32110], [124903, 32376], [124065, 32166], [124870, 31965]]]
            },
            properties: {cp: [121.472644, 31.231706], name: "上海", childNum: 7}
        }, {
            id: "500000",
            geometry: {
                type: "Polygon",
                coordinates: ["@@TÂÛ`Ùƅően½SêqDu[RåÍ¹÷eXÍy¸_ĺę}÷`M¯ċfCVµqŉ÷Zgg^d½pDOÎCn^uf²ènh¼WtƏxRGg¦pVFI±G^Ic´ecGĹÞ½sëÆNäÌ¤KÓe¯|R¸§LÜkPoïƭNï¶}Gywdiù©nkĈzj@Óc£»Wă¹Óf§c[µo·Ó|MvÛaq½«è\\ÂoVnÓØÍ²«bq¿ehCĜ^Q~ Évýş¤²ĮpEĶyhsŊwH½¿gÅ¡ýE¡ya£³t\\¨\\vú¹¼©·Ñr_oÒý¥et³]Et©uÖ¥±ă©KVeë]}wVPÀFA¨ąB}qTjgRemfFmQFÝMyùnÑAmÑCawu_p¯sfÛ_gI_pNysB¦zG¸rHeN\\CvEsÐñÚkcDÖĉsaQ¯}_UzÁē}^R Äd^ÍĸZ¾·¶`wećJE¹vÛ·HgéFXjÉê`|ypxkAwWĐpb¥eOsmzwqChóUQl¥F^lafanòsrEvfQdÁUVfÎvÜ^eftET¬ôA\\¢sJnQTjPØxøK|nBzĞ»LYFDxÓvr[ehľvN¢o¾NiÂxGpâ¬zbfZo~hGi]öF||NbtOMn eA±tPTLjpYQ|SHYĀxinzDJÌg¢và¥Pg_ÇzIIII£®S¬ØsÎ¼¥¨^LnGĲļĲƤjÎƀƾ¹¸ØÎezĆT¸}êÐqHðqĖä¥^CÆIj²p\\_ æüY|[YxƊæu°xb®Űb@~¢NQt°¶Sæ Ê~rǉĔëĚ¢~uf`faĔJåĊnÔ]jƎćÊ@£¾a®£Ű{ŶĕFègLk{Y|¡ĜWƔtƬJÑxq±ĢN´òKLÈÃ¼D|s`ŋć]Ã`đMùƱ¿~Y°ħ`ƏíW½eI½{aOIrÏ¡ĕŇapµÜƃġ²"],
                encodeOffsets: [[111728, 31311]]
            },
            properties: {cp: [106.504962, 29.533155], name: "重庆", childNum: 1}
        }, {
            id: "810000",
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@AlFi", "@@mp", "@@EpHo", "@@rMUwAS¬]", "@@ea¢pl¸Eõ¹hj[]ÔCÎ@lj¡uBX´AI¹[yDU]W`çwZkmcMpÅv}IoJlcafŃK°ä¬XJmÐ đhI®æÔtSHnEÒrÄc"]],
                encodeOffsets: [[[117111, 23002], [117072, 22876], [117045, 22887], [116882, 22747], [116975, 23082]]]
            },
            properties: {cp: [114.173355, 22.320048], name: "香港", childNum: 5}
        }, {
            id: "820000",
            geometry: {type: "Polygon", coordinates: ["@@áw{Îr"], encodeOffsets: [[116285, 22746]]},
            properties: {cp: [113.54909, 22.198951], name: "澳门", childNum: 1}
        }],
        UTF8Encoding: !0
    }) : void i("ECharts Map is not loaded") : void i("ECharts is not Loaded")
});