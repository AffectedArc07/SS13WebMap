"use strict";
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            k = 0,
            l = 0,
            m = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (l = -1 * g.detail), "wheelDelta" in g && (l = g.wheelDelta), "wheelDeltaY" in g && (l = g.wheelDeltaY), "wheelDeltaX" in g && (k = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (k = -1 * l, l = 0), j = 0 === l ? k : l, "deltaY" in g && (l = -1 * g.deltaY, j = l), "deltaX" in g && (k = g.deltaX, 0 === l && (j = -1 * k)), 0 !== l || 0 !== k) {
            if (1 === g.deltaMode) {
                var n = a.data(this, "mousewheel-line-height");
                j *= n, l *= n, k *= n
            } else if (2 === g.deltaMode) {
                var o = a.data(this, "mousewheel-page-height");
                j *= o, l *= o, k *= o
            }
            return m = Math.max(Math.abs(l), Math.abs(k)), (!f || f > m) && (f = m, d(g, m) && (f /= 40)), d(g, m) && (j /= 40, k /= 40, l /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), k = Math[k >= 1 ? "floor" : "ceil"](k / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), b.deltaX = k, b.deltaY = l, b.deltaFactor = f, b.deltaMode = 0, h.unshift(b, j, k, l), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = h.length; a;) this.removeEventListener(h[--a], b, !1);
            else this.onmousewheel = null
        },
        getLineHeight: function(b) {
            return parseInt(a(b)["offsetParent" in a.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
}), ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length,
            c = fb.type(a);
        return "function" === c || fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (fb.isFunction(b)) return fb.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return fb.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (nb.test(b)) return fb.filter(b, a, c);
            b = fb.filter(b, a)
        }
        return fb.grep(a, function(a) {
            return fb.inArray(a, b) >= 0 !== c
        })
    }

    function e(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function f(a) {
        var b = vb[a] = {};
        return fb.each(a.match(ub) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        pb.addEventListener ? (pb.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (pb.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
    }

    function h() {
        (pb.addEventListener || "load" === event.type || "complete" === pb.readyState) && (g(), fb.ready())
    }

    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(Ab, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : zb.test(c) ? fb.parseJSON(c) : c
                } catch (e) {}
                fb.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function j(a) {
        var b;
        for (b in a)
            if (("data" !== b || !fb.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function k(a, b, c, d) {
        if (fb.acceptData(a)) {
            var e, f, g = fb.expando,
                h = a.nodeType,
                i = h ? fb.cache : a,
                j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || fb.guid++ : g), i[j] || (i[j] = h ? {} : {
                toJSON: fb.noop
            }), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = fb.extend(i[j], b) : i[j].data = fb.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[fb.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[fb.camelCase(b)])) : e = f, e
        }
    }

    function l(a, b, c) {
        if (fb.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? fb.cache : a,
                h = f ? a[fb.expando] : fb.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    fb.isArray(b) ? b = b.concat(fb.map(b, fb.camelCase)) : b in d ? b = [b] : (b = fb.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !j(d) : !fb.isEmptyObject(d)) return
                }(c || (delete g[h].data, j(g[h]))) && (f ? fb.cleanData([a], !0) : db.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    function m() {
        return !0
    }

    function n() {
        return !1
    }

    function o() {
        try {
            return pb.activeElement
        } catch (a) {}
    }

    function p(a) {
        var b = Lb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function q(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== yb ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== yb ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || fb.nodeName(d, b) ? f.push(d) : fb.merge(f, q(d, b));
        return void 0 === b || b && fb.nodeName(a, b) ? fb.merge([a], f) : f
    }

    function r(a) {
        Fb.test(a.type) && (a.defaultChecked = a.checked)
    }

    function s(a, b) {
        return fb.nodeName(a, "table") && fb.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function t(a) {
        return a.type = (null !== fb.find.attr(a, "type")) + "/" + a.type, a
    }

    function u(a) {
        var b = Wb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function v(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) fb._data(c, "globalEval", !b || fb._data(b[d], "globalEval"))
    }

    function w(a, b) {
        if (1 === b.nodeType && fb.hasData(a)) {
            var c, d, e, f = fb._data(a),
                g = fb._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) fb.event.add(b, c, h[c][d])
            }
            g.data && (g.data = fb.extend({}, g.data))
        }
    }

    function x(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !db.noCloneEvent && b[fb.expando]) {
                e = fb._data(b);
                for (d in e.events) fb.removeEvent(b, d, e.handle);
                b.removeAttribute(fb.expando)
            }
            "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), db.html5Clone && a.innerHTML && !fb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Fb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function y(b, c) {
        var d = fb(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : fb.css(d[0], "display");
        return d.detach(), e
    }

    function z(a) {
        var b = pb,
            c = ac[a];
        return c || (c = y(a, b), "none" !== c && c || (_b = (_b || fb("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (_b[0].contentWindow || _b[0].contentDocument).document, b.write(), b.close(), c = y(a, b), _b.detach()), ac[a] = c), c
    }

    function A(a, b) {
        return {
            get: function() {
                var c = a();
                return null != c ? c ? void delete this.get : (this.get = b).apply(this, arguments) : void 0
            }
        }
    }

    function B(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = nc.length; e--;)
            if (b = nc[e] + c, b in a) return b;
        return d
    }

    function C(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = fb._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Db(d) && (f[g] = fb._data(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = Db(d), (c && "none" !== c || !e) && fb._data(d, "olddisplay", e ? c : fb.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function D(a, b, c) {
        var d = jc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fb.css(a, c + Cb[f], !0, e)), d ? ("content" === c && (g -= fb.css(a, "padding" + Cb[f], !0, e)), "margin" !== c && (g -= fb.css(a, "border" + Cb[f] + "Width", !0, e))) : (g += fb.css(a, "padding" + Cb[f], !0, e), "padding" !== c && (g += fb.css(a, "border" + Cb[f] + "Width", !0, e)));
        return g
    }

    function F(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = bc(a),
            g = db.boxSizing() && "border-box" === fb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = cc(a, b, f), (0 > e || null == e) && (e = a.style[b]), ec.test(e)) return e;
            d = g && (db.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function G(a, b, c, d, e) {
        return new G.prototype.init(a, b, c, d, e)
    }

    function H() {
        return setTimeout(function() {
            oc = void 0
        }), oc = fb.now()
    }

    function I(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Cb[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function J(a, b, c) {
        for (var d, e = (uc[b] || []).concat(uc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function K(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && Db(a),
            p = fb._data(a, "fxshow");
        c.queue || (h = fb._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, fb.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = fb.css(a, "display"), k = z(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === fb.css(a, "float") && (db.inlineBlockNeedsLayout && "inline" !== k ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", db.shrinkWrapBlocks() || l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], qc.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || fb.style(a, d)
            }
        if (!fb.isEmptyObject(m)) {
            p ? "hidden" in p && (o = p.hidden) : p = fb._data(a, "fxshow", {}), f && (p.hidden = !o), o ? fb(a).show() : l.done(function() {
                fb(a).hide()
            }), l.done(function() {
                var b;
                fb._removeData(a, "fxshow");
                for (b in m) fb.style(a, b, m[b])
            });
            for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function L(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = fb.camelCase(c), e = b[d], f = a[c], fb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fb.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function M(a, b, c) {
        var d, e, f = 0,
            g = tc.length,
            h = fb.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = oc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: fb.extend({}, b),
                opts: fb.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: oc || H(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (L(k, j.opts.specialEasing); g > f; f++)
            if (d = tc[f].call(j, a, k, j.opts)) return d;
        return fb.map(k, J, j), fb.isFunction(j.opts.start) && j.opts.start.call(a, j), fb.fx.timer(fb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function N(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(ub) || [];
            if (fb.isFunction(c))
                for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function O(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fb.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Sc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function P(a, b) {
        var c, d, e = fb.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && fb.extend(!0, a, c), a
    }

    function Q(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function R(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function S(a, b, c, d) {
        var e;
        if (fb.isArray(b)) fb.each(b, function(b, e) {
            c || Wc.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== fb.type(b)) d(a, b);
        else
            for (e in b) S(a + "[" + e + "]", b[e], c, d)
    }

    function T() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function U() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function V(a) {
        return fb.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var W = [],
        X = W.slice,
        Y = W.concat,
        Z = W.push,
        $ = W.indexOf,
        _ = {},
        ab = _.toString,
        bb = _.hasOwnProperty,
        cb = "".trim,
        db = {},
        eb = "1.11.0",
        fb = function(a, b) {
            return new fb.fn.init(a, b)
        },
        gb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        hb = /^-ms-/,
        ib = /-([\da-z])/gi,
        jb = function(a, b) {
            return b.toUpperCase()
        };
    fb.fn = fb.prototype = {
        jquery: eb,
        constructor: fb,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
        },
        pushStack: function(a) {
            var b = fb.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return fb.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(fb.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Z,
        sort: W.sort,
        splice: W.splice
    }, fb.extend = fb.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fb.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (fb.isPlainObject(c) || (b = fb.isArray(c))) ? (b ? (b = !1, f = a && fb.isArray(a) ? a : []) : f = a && fb.isPlainObject(a) ? a : {}, g[d] = fb.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, fb.extend({
        expando: "jQuery" + (eb + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === fb.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === fb.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== fb.type(a) || a.nodeType || fb.isWindow(a)) return !1;
            try {
                if (a.constructor && !bb.call(a, "constructor") && !bb.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (db.ownLast)
                for (b in a) return bb.call(a, b);
            for (b in a);
            return void 0 === b || bb.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[ab.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && fb.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(hb, "ms-").replace(ib, jb)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: cb && !cb.call("﻿ ") ? function(a) {
            return null == a ? "" : cb.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(gb, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if ($) return $.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d];) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return Y.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (e = a[b], b = a, a = e), fb.isFunction(a) ? (c = X.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(X.call(arguments)))
            }, d.guid = a.guid = a.guid || fb.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: db
    }), fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        _["[object " + b + "]"] = b.toLowerCase()
    });
    var kb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, o, p, q;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = sb.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)), c
                    }
                if (x.qsa && (!J || !J.test(a))) {
                    if (o = l = N, p = b, q = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (l = b.getAttribute("id")) ? o = l.replace(ub, "\\$&") : b.setAttribute("id", o), o = "[id='" + o + "'] ", i = j.length; i--;) j[i] = o + n(j[i]);
                        p = tb.test(a) && k(b.parentNode) || b, q = j.join(",")
                    }
                    if (q) try {
                        return _.apply(c, p.querySelectorAll(q)), c
                    } catch (r) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return v(a.replace(ib, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > y.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) y.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && typeof a.getElementsByTagName !== V && a
        }

        function l() {}

        function m(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = y.preFilter; h;) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ib, " ")
                }), h = h.slice(d.length));
                for (g in y.filter) !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }

        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function o(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = d || u(b || "*", h.nodeType ? [h] : h, []),
                    r = !a || !d && b ? p : q(p, m, a, h, i),
                    s = c ? f || (d ? a : o || e) ? [] : g : r;
                if (c && c(r, s, h, i), e)
                    for (j = q(s, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i)
                        }
                        for (k = s.length; k--;)(l = s[k]) && (j = f ? bb.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : _.apply(g, s)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                    return a === b
                }, g, !0), j = o(function(a) {
                    return bb.call(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                }]; e > h; h++)
                if (c = y.relative[a[h].type]) k = [o(p(k), c)];
                else {
                    if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !y.relative[a[d].type]; d++);
                        return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                    }
                    k.push(c)
                }
            return p(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && y.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Z.call(i));
                            r = q(r)
                        }
                        _.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }

        function u(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && y.relative[f[1].type]) {
                    if (b = (y.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)
                    if ((i = y.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && n(f), !a) return _.apply(c, d), c;
                        break
                    }
            }
            return B(a, j)(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c
        }
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = "undefined",
            W = 1 << 31,
            X = {}.hasOwnProperty,
            Y = [],
            Z = Y.pop,
            $ = Y.push,
            _ = Y.push,
            ab = Y.slice,
            bb = Y.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            db = "[\\x20\\t\\r\\n\\f]",
            eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            fb = eb.replace("w", "w#"),
            gb = "\\[" + db + "*(" + eb + ")" + db + "*(?:([*^$|!~]?=)" + db + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fb + ")|)|)" + db + "*\\]",
            hb = ":(" + eb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + gb.replace(3, 8) + ")*)|.*)\\)|)",
            ib = new RegExp("^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$", "g"),
            jb = new RegExp("^" + db + "*," + db + "*"),
            kb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"),
            lb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]", "g"),
            mb = new RegExp(hb),
            nb = new RegExp("^" + fb + "$"),
            ob = {
                ID: new RegExp("^#(" + eb + ")"),
                CLASS: new RegExp("^\\.(" + eb + ")"),
                TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + gb),
                PSEUDO: new RegExp("^" + hb),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + db + "*(even|odd|(([+-]|)(\\d*)n|)" + db + "*(?:([+-]|)" + db + "*(\\d+)|))" + db + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + cb + ")$", "i"),
                needsContext: new RegExp("^" + db + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + db + "*((?:-\\d)?\\d*)" + db + "*\\)|)(?=[^-]|$)", "i")
            },
            pb = /^(?:input|select|textarea|button)$/i,
            qb = /^h\d$/i,
            rb = /^[^{]+\{\s*\[native \w/,
            sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tb = /[+~]/,
            ub = /'|\\/g,
            vb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)", "ig"),
            wb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            _.apply(Y = ab.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
        } catch (xb) {
            _ = {
                apply: Y.length ? function(a, b) {
                    $.apply(a, ab.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        x = b.support = {}, A = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O,
                d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !A(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                F()
            }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                F()
            })), x.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), x.getElementsByTagName = e(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
            }), x.getElementsByClassName = rb.test(c.getElementsByClassName) && e(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), x.getById = e(function(a) {
                return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
            }), x.getById ? (y.find.ID = function(a, b) {
                if (typeof b.getElementById !== V && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, y.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete y.find.ID, y.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), y.find.TAG = x.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, y.find.CLASS = x.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (x.qsa = rb.test(c.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + db + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + db + "*(?:value|" + cb + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
            }), e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + db + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (x.matchesSelector = rb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", hb)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var d, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0;
                if (f === h) return g(a, b);
                for (d = a; d = d.parentNode;) i.unshift(d);
                for (d = b; d = d.parentNode;) j.unshift(d);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, c) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!x.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = y.attrHandle[b.toLowerCase()],
                d = c && X.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : x.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !x.detectDuplicates, D = !x.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, z = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += z(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += z(b);
            return c
        }, y = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ob,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb), a[3] = (a[4] || a[5] || "").replace(vb, wb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return ob.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && mb.test(c) && (b = m(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = bb.call(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = B(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !y.pseudos.empty(a)
                },
                header: function(a) {
                    return qb.test(a.nodeName)
                },
                input: function(a) {
                    return pb.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, y.pseudos.nth = y.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) y.pseudos[w] = h(w);
        for (w in {
                submit: !0,
                reset: !0
            }) y.pseudos[w] = i(w);
        return l.prototype = y.filters = y.pseudos, y.setFilters = new l, B = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d))
            }
            return f
        }, x.sortStable = N.split("").sort(U).join("") === N, x.detectDuplicates = !!E, F(), x.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), x.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(cb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    fb.find = kb, fb.expr = kb.selectors, fb.expr[":"] = fb.expr.pseudos, fb.unique = kb.uniqueSort, fb.text = kb.getText, fb.isXMLDoc = kb.isXML, fb.contains = kb.contains;
    var lb = fb.expr.match.needsContext,
        mb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        nb = /^.[^:#\[\.,]*$/;
    fb.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [d] : [] : fb.find.matches(a, fb.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, fb.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(fb(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (fb.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) fb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? fb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && lb.test(a) ? fb(a) : a || [], !1).length
        }
    });
    var ob, pb = a.document,
        qb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        rb = fb.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : qb.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ob).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof fb ? b[0] : b, fb.merge(this, fb.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : pb, !0)), mb.test(c[1]) && fb.isPlainObject(b))
                        for (c in b) fb.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = pb.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return ob.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = pb, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fb.isFunction(a) ? "undefined" != typeof ob.ready ? ob.ready(a) : a(fb) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fb.makeArray(a, this))
        };
    rb.prototype = fb.fn, ob = fb(pb);
    var sb = /^(?:parents|prev(?:Until|All))/,
        tb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fb.extend({
        dir: function(a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !fb(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), fb.fn.extend({
        has: function(a) {
            var b, c = fb(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (fb.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = lb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fb.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? fb.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? fb.inArray(this[0], fb(a)) : fb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(fb.unique(fb.merge(this.get(), fb(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), fb.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return fb.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return fb.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return fb.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return fb.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return fb.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return fb.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return fb.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return fb.sibling(a.firstChild)
        },
        contents: function(a) {
            return fb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : fb.merge([], a.childNodes)
        }
    }, function(a, b) {
        fb.fn[a] = function(c, d) {
            var e = fb.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fb.filter(d, e)), this.length > 1 && (tb[a] || (e = fb.unique(e)), sb.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var ub = /\S+/g,
        vb = {};
    fb.Callbacks = function(a) {
        a = "string" == typeof a ? vb[a] || f(a) : fb.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
                    if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var d = i.length;
                        ! function f(b) {
                            fb.each(b, function(b, c) {
                                var d = fb.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = i.length : c && (h = d, k(c))
                    }
                    return this
                },
                remove: function() {
                    return i && fb.each(arguments, function(a, c) {
                        for (var d;
                            (d = fb.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
                    }), this
                },
                has: function(a) {
                    return a ? fb.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], e = 0, this
                },
                disable: function() {
                    return i = j = c = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, c || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, c) {
                    return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return l
    }, fb.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", fb.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", fb.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", fb.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return fb.Deferred(function(c) {
                            fb.each(b, function(b, f) {
                                var g = fb.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? fb.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, fb.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = X.call(arguments),
                g = f.length,
                h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : fb.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var wb;
    fb.fn.ready = function(a) {
        return fb.ready.promise().done(a), this
    }, fb.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? fb.readyWait++ : fb.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--fb.readyWait : !fb.isReady) {
                if (!pb.body) return setTimeout(fb.ready);
                fb.isReady = !0, a !== !0 && --fb.readyWait > 0 || (wb.resolveWith(pb, [fb]), fb.fn.trigger && fb(pb).trigger("ready").off("ready"))
            }
        }
    }), fb.ready.promise = function(b) {
        if (!wb)
            if (wb = fb.Deferred(), "complete" === pb.readyState) setTimeout(fb.ready);
            else if (pb.addEventListener) pb.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
        else {
            pb.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
            var c = !1;
            try {
                c = null == a.frameElement && pb.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!fb.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    g(), fb.ready()
                }
            }()
        }
        return wb.promise(b)
    };
    var xb, yb = "undefined";
    for (xb in fb(db)) break;
    db.ownLast = "0" !== xb, db.inlineBlockNeedsLayout = !1, fb(function() {
            var a, b, c = pb.getElementsByTagName("body")[0];
            c && (a = pb.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = pb.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== yb && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (db.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
        }),
        function() {
            var a = pb.createElement("div");
            if (null == db.deleteExpando) {
                db.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    db.deleteExpando = !1
                }
            }
            a = null
        }(), fb.acceptData = function(a) {
            var b = fb.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var zb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ab = /([A-Z])/g;
    fb.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? fb.cache[a[fb.expando]] : a[fb.expando], !!a && !j(a)
        },
        data: function(a, b, c) {
            return k(a, b, c)
        },
        removeData: function(a, b) {
            return l(a, b)
        },
        _data: function(a, b, c) {
            return k(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return l(a, b, !0)
        }
    }), fb.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = fb.data(f), 1 === f.nodeType && !fb._data(f, "parsedAttrs"))) {
                    for (c = g.length; c--;) d = g[c].name, 0 === d.indexOf("data-") && (d = fb.camelCase(d.slice(5)), i(f, d, e[d]));
                    fb._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                fb.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                fb.data(this, a, b)
            }) : f ? i(f, a, fb.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                fb.removeData(this, a)
            })
        }
    }), fb.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = fb._data(a, b), c && (!d || fb.isArray(c) ? d = fb._data(a, b, fb.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fb.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = fb._queueHooks(a, b),
                g = function() {
                    fb.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return fb._data(a, c) || fb._data(a, c, {
                empty: fb.Callbacks("once memory").add(function() {
                    fb._removeData(a, b + "queue"), fb._removeData(a, c)
                })
            })
        }
    }), fb.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fb.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = fb.queue(this, a, b);
                fb._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fb.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                fb.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = fb.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = fb._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Bb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Cb = ["Top", "Right", "Bottom", "Left"],
        Db = function(a, b) {
            return a = b || a, "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a)
        },
        Eb = fb.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === fb.type(c)) {
                e = !0;
                for (h in c) fb.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, fb.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(fb(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Fb = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = pb.createDocumentFragment(),
            b = pb.createElement("div"),
            c = pb.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", db.leadingWhitespace = 3 === b.firstChild.nodeType, db.tbody = !b.getElementsByTagName("tbody").length, db.htmlSerialize = !!b.getElementsByTagName("link").length, db.html5Clone = "<:nav></:nav>" !== pb.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), db.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", db.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", db.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, db.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                db.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == db.deleteExpando) {
            db.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                db.deleteExpando = !1
            }
        }
        a = b = c = null
    }(),
    function() {
        var b, c, d = pb.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (db[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), db[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Gb = /^(?:input|select|textarea)$/i,
        Hb = /^key/,
        Ib = /^(?:mouse|contextmenu)|click/,
        Jb = /^(?:focusinfocus|focusoutblur)$/,
        Kb = /^([^.]*)(?:\.(.+)|)$/;
    fb.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = fb._data(a);
            if (q) {
                for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = fb.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
                        return typeof fb === yb || a && fb.event.triggered === a.type ? void 0 : fb.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(ub) || [""], h = b.length; h--;) f = Kb.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = fb.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = fb.event.special[n] || {}, l = fb.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && fb.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), fb.event.global[n] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = fb.hasData(a) && fb._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ub) || [""], j = b.length; j--;)
                    if (h = Kb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = fb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle), delete k[n])
                    } else
                        for (n in k) fb.event.remove(a, n + b[j], c, d, !0);
                fb.isEmptyObject(k) && (delete q.handle, fb._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || pb],
                n = bb.call(b, "type") ? b.type : b,
                o = bb.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || pb, 3 !== d.nodeType && 8 !== d.nodeType && !Jb.test(n + fb.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[fb.expando] ? b : new fb.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : fb.makeArray(c, [b]), j = fb.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                if (!e && !j.noBubble && !fb.isWindow(d)) {
                    for (i = j.delegateType || n, Jb.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                    k === (d.ownerDocument || pb) && m.push(k.defaultView || k.parentWindow || a)
                }
                for (l = 0;
                    (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (fb._data(h, "events") || {})[b.type] && fb._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && fb.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && fb.acceptData(d) && g && d[n] && !fb.isWindow(d)) {
                    k = d[g], k && (d[g] = null), fb.event.triggered = n;
                    try {
                        d[n]()
                    } catch (p) {}
                    fb.event.triggered = void 0, k && (d[g] = k)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = fb.event.fix(a);
            var b, c, d, e, f, g = [],
                h = X.call(arguments),
                i = (fb._data(this, "events") || {})[a.type] || [],
                j = fb.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = fb.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, f = 0;
                        (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((fb.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? fb(c, this).index(i) >= 0 : fb.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[fb.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ib.test(e) ? this.mouseHooks : Hb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fb.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || pb), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || pb, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== o() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === o() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return fb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return fb.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = fb.extend(new fb.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? fb.event.trigger(e, null, b) : fb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, fb.removeEvent = pb.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === yb && (a[d] = null), a.detachEvent(d, c))
    }, fb.Event = function(a, b) {
        return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? m : n) : this.type = a, b && fb.extend(this, b), this.timeStamp = a && a.timeStamp || fb.now(), void(this[fb.expando] = !0)) : new fb.Event(a, b)
    }, fb.Event.prototype = {
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = m, this.stopPropagation()
        }
    }, fb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        fb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), db.submitBubbles || (fb.event.special.submit = {
        setup: function() {
            return fb.nodeName(this, "form") ? !1 : void fb.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = fb.nodeName(b, "input") || fb.nodeName(b, "button") ? b.form : void 0;
                c && !fb._data(c, "submitBubbles") && (fb.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), fb._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && fb.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return fb.nodeName(this, "form") ? !1 : void fb.event.remove(this, "._submit")
        }
    }), db.changeBubbles || (fb.event.special.change = {
        setup: function() {
            return Gb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fb.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), fb.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), fb.event.simulate("change", this, a, !0)
            })), !1) : void fb.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Gb.test(b.nodeName) && !fb._data(b, "changeBubbles") && (fb.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || fb.event.simulate("change", this.parentNode, a, !0)
                }), fb._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return fb.event.remove(this, "._change"), !Gb.test(this.nodeName)
        }
    }), db.focusinBubbles || fb.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            fb.event.simulate(b, a.target, fb.event.fix(a), !0)
        };
        fb.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = fb._data(d, b);
                e || d.addEventListener(a, c, !0), fb._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = fb._data(d, b) - 1;
                e ? fb._data(d, b, e) : (d.removeEventListener(a, c, !0), fb._removeData(d, b))
            }
        }
    }), fb.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return fb().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = fb.guid++)), this.each(function() {
                fb.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, fb(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function() {
                fb.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                fb.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? fb.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Lb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Mb = / jQuery\d+="(?:null|\d+)"/g,
        Nb = new RegExp("<(?:" + Lb + ")[\\s/>]", "i"),
        Ob = /^\s+/,
        Pb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Qb = /<([\w:]+)/,
        Rb = /<tbody/i,
        Sb = /<|&#?\w+;/,
        Tb = /<(?:script|style|link)/i,
        Ub = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Vb = /^$|\/(?:java|ecma)script/i,
        Wb = /^true\/(.*)/,
        Xb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Yb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: db.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Zb = p(pb),
        $b = Zb.appendChild(pb.createElement("div"));
    Yb.optgroup = Yb.option, Yb.tbody = Yb.tfoot = Yb.colgroup = Yb.caption = Yb.thead, Yb.th = Yb.td, fb.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = fb.contains(a.ownerDocument, a);
            if (db.html5Clone || fb.isXMLDoc(a) || !Nb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : ($b.innerHTML = a.outerHTML, $b.removeChild(f = $b.firstChild)), !(db.noCloneEvent && db.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a)))
                for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
            if (b)
                if (c)
                    for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
                else w(a, f);
            return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                if (f = a[o], f || 0 === f)
                    if ("object" === fb.type(f)) fb.merge(n, f.nodeType ? [f] : f);
                    else if (Sb.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Qb.exec(f) || ["", ""])[1].toLowerCase(), k = Yb[i] || Yb._default, h.innerHTML = k[1] + f.replace(Pb, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!db.leadingWhitespace && Ob.test(f) && n.push(b.createTextNode(Ob.exec(f)[0])), !db.tbody)
                    for (f = "table" !== i || Rb.test(f) ? "<table>" !== k[1] || Rb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) fb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (fb.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = m.lastChild
            } else n.push(b.createTextNode(f));
            for (h && m.removeChild(h), db.appendChecked || fb.grep(q(n, "input"), r), o = 0; f = n[o++];)
                if ((!d || -1 === fb.inArray(f, d)) && (g = fb.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
                    for (e = 0; f = h[e++];) Vb.test(f.type || "") && c.push(f);
            return h = null, m
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = fb.expando, i = fb.cache, j = db.deleteExpando, k = fb.event.special; null != (c = a[g]); g++)
                if ((b || fb.acceptData(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? fb.event.remove(c, d) : fb.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== yb ? c.removeAttribute(h) : c[h] = null, W.push(e))
                }
        }
    }), fb.fn.extend({
        text: function(a) {
            return Eb(this, function(a) {
                return void 0 === a ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pb).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? fb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || fb.cleanData(q(c)), c.parentNode && (b && fb.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && fb.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && fb.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return fb.clone(this, a, b)
            })
        },
        html: function(a) {
            return Eb(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(Mb, "") : void 0;
                if (!("string" != typeof a || Tb.test(a) || !db.htmlSerialize && Nb.test(a) || !db.leadingWhitespace && Ob.test(a) || Yb[(Qb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Pb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (fb.cleanData(q(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, fb.cleanData(q(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = Y.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                n = fb.isFunction(m);
            if (n || j > 1 && "string" == typeof m && !db.checkClone && Ub.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (h = fb.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                for (f = fb.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = fb.clone(d, !0, !0), e && fb.merge(f, q(d, "script"))), b.call(this[i], d, i);
                if (e)
                    for (g = f[f.length - 1].ownerDocument, fb.map(f, u), i = 0; e > i; i++) d = f[i], Vb.test(d.type || "") && !fb._data(d, "globalEval") && fb.contains(g, d) && (d.src ? fb._evalUrl && fb._evalUrl(d.src) : fb.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Xb, "")));
                h = c = null
            }
            return this
        }
    }), fb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        fb.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = fb(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), fb(f[d])[b](c), Z.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var _b, ac = {};
    ! function() {
        var a, b, c = pb.createElement("div"),
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", db.opacity = /^0.5/.test(a.style.opacity), db.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", db.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, db.shrinkWrapBlocks = function() {
            var a, c, e, f;
            if (null == b) {
                if (a = pb.getElementsByTagName("body")[0], !a) return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = pb.createElement("div"), e = pb.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== yb && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
            }
            return b
        }
    }();
    var bc, cc, dc = /^margin/,
        ec = new RegExp("^(" + Bb + ")(?!px)[a-z%]+$", "i"),
        fc = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (bc = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, cc = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || bc(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || fb.contains(a.ownerDocument, a) || (g = fb.style(a, b)), ec.test(g) && dc.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : pb.documentElement.currentStyle && (bc = function(a) {
        return a.currentStyle
    }, cc = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || bc(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), ec.test(g) && !fc.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    }), ! function() {
        function b() {
            var b, c, d = pb.getElementsByTagName("body")[0];
            d && (b = pb.createElement("div"), c = pb.createElement("div"), b.style.cssText = j, d.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", fb.swap(d, null != d.style.zoom ? {
                zoom: 1
            } : {}, function() {
                e = 4 === c.offsetWidth
            }), f = !0, g = !1, h = !0, a.getComputedStyle && (g = "1%" !== (a.getComputedStyle(c, null) || {}).top, f = "4px" === (a.getComputedStyle(c, null) || {
                width: "4px"
            }).width), d.removeChild(b), c = d = null)
        }
        var c, d, e, f, g, h, i = pb.createElement("div"),
            j = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            k = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = i.getElementsByTagName("a")[0], c.style.cssText = "float:left;opacity:.5", db.opacity = /^0.5/.test(c.style.opacity), db.cssFloat = !!c.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", db.clearCloneStyle = "content-box" === i.style.backgroundClip, c = i = null, fb.extend(db, {
            reliableHiddenOffsets: function() {
                if (null != d) return d;
                var a, b, c, e = pb.createElement("div"),
                    f = pb.getElementsByTagName("body")[0];
                return f ? (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = pb.createElement("div"), a.style.cssText = j, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", d = c && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, d) : void 0
            },
            boxSizing: function() {
                return null == e && b(), e
            },
            boxSizingReliable: function() {
                return null == f && b(), f
            },
            pixelPosition: function() {
                return null == g && b(), g
            },
            reliableMarginRight: function() {
                var b, c, d, e;
                if (null == h && a.getComputedStyle) {
                    if (b = pb.getElementsByTagName("body")[0], !b) return;
                    c = pb.createElement("div"), d = pb.createElement("div"), c.style.cssText = j, b.appendChild(c).appendChild(d), e = d.appendChild(pb.createElement("div")), e.style.cssText = d.style.cssText = k, e.style.marginRight = e.style.width = "0", d.style.width = "1px", h = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                }
                return h
            }
        })
    }(), fb.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var gc = /alpha\([^)]*\)/i,
        hc = /opacity\s*=\s*([^)]*)/,
        ic = /^(none|table(?!-c[ea]).+)/,
        jc = new RegExp("^(" + Bb + ")(.*)$", "i"),
        kc = new RegExp("^([+-])=(" + Bb + ")", "i"),
        lc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        mc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        nc = ["Webkit", "O", "Moz", "ms"];
    fb.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = cc(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": db.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = fb.camelCase(b),
                    i = a.style;
                if (b = fb.cssProps[h] || (fb.cssProps[h] = B(i, h)), g = fb.cssHooks[b] || fb.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = kc.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(fb.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || fb.cssNumber[h] || (c += "px"), db.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = "", i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = fb.camelCase(b);
            return b = fb.cssProps[h] || (fb.cssProps[h] = B(a.style, h)), g = fb.cssHooks[b] || fb.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = cc(a, b, d)), "normal" === f && b in mc && (f = mc[b]), "" === c || c ? (e = parseFloat(f), c === !0 || fb.isNumeric(e) ? e || 0 : f) : f
        }
    }), fb.each(["height", "width"], function(a, b) {
        fb.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && ic.test(fb.css(a, "display")) ? fb.swap(a, lc, function() {
                    return F(a, b, d)
                }) : F(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && bc(a);
                return D(a, c, d ? E(a, b, d, db.boxSizing() && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), db.opacity || (fb.cssHooks.opacity = {
        get: function(a, b) {
            return hc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = fb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === fb.trim(f.replace(gc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = gc.test(f) ? f.replace(gc, e) : f + " " + e)
        }
    }), fb.cssHooks.marginRight = A(db.reliableMarginRight, function(a, b) {
        return b ? fb.swap(a, {
            display: "inline-block"
        }, cc, [a, "marginRight"]) : void 0
    }), fb.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        fb.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Cb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, dc.test(a) || (fb.cssHooks[a + b].set = D)
    }), fb.fn.extend({
        css: function(a, b) {
            return Eb(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (fb.isArray(b)) {
                    for (d = bc(a), e = b.length; e > g; g++) f[b[g]] = fb.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? fb.style(a, b, c) : fb.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Db(this) ? fb(this).show() : fb(this).hide()
            })
        }
    }), fb.Tween = G, G.prototype = {
        constructor: G,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fb.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = G.propHooks[this.prop];
            return a && a.get ? a.get(this) : G.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = G.propHooks[this.prop];
            return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
        }
    }, G.prototype.init.prototype = G.prototype, G.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, fb.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, fb.fx = G.prototype.init, fb.fx.step = {};
    var oc, pc, qc = /^(?:toggle|show|hide)$/,
        rc = new RegExp("^(?:([+-])=|)(" + Bb + ")([a-z%]*)$", "i"),
        sc = /queueHooks$/,
        tc = [K],
        uc = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = rc.exec(b),
                    f = e && e[3] || (fb.cssNumber[a] ? "" : "px"),
                    g = (fb.cssNumber[a] || "px" !== f && +d) && rc.exec(fb.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, fb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    fb.Animation = fb.extend(M, {
            tweener: function(a, b) {
                fb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], uc[c] = uc[c] || [], uc[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? tc.unshift(a) : tc.push(a)
            }
        }), fb.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? fb.extend({}, a) : {
                complete: c || !c && b || fb.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !fb.isFunction(b) && b
            };
            return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                fb.isFunction(d.old) && d.old.call(this), d.queue && fb.dequeue(this, d.queue)
            }, d
        }, fb.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(Db).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = fb.isEmptyObject(a),
                    f = fb.speed(b, c, d),
                    g = function() {
                        var b = M(this, fb.extend({}, a), f);
                        (e || fb._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = fb.timers,
                        g = fb._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && sc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && fb.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = fb._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = fb.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, fb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), fb.each(["toggle", "show", "hide"], function(a, b) {
            var c = fb.fn[b];
            fb.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
            }
        }), fb.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            fb.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), fb.timers = [], fb.fx.tick = function() {
            var a, b = fb.timers,
                c = 0;
            for (oc = fb.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || fb.fx.stop(), oc = void 0
        }, fb.fx.timer = function(a) {
            fb.timers.push(a), a() ? fb.fx.start() : fb.timers.pop()
        }, fb.fx.interval = 13, fb.fx.start = function() {
            pc || (pc = setInterval(fb.fx.tick, fb.fx.interval))
        }, fb.fx.stop = function() {
            clearInterval(pc), pc = null
        }, fb.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, fb.fn.delay = function(a, b) {
            return a = fb.fx ? fb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e = pb.createElement("div");
            e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = pb.createElement("select"), d = c.appendChild(pb.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", db.getSetAttribute = "t" !== e.className, db.style = /top/.test(a.getAttribute("style")), db.hrefNormalized = "/a" === a.getAttribute("href"), db.checkOn = !!b.value, db.optSelected = d.selected, db.enctype = !!pb.createElement("form").enctype, c.disabled = !0, db.optDisabled = !d.disabled, b = pb.createElement("input"), b.setAttribute("value", ""), db.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), db.radioValue = "t" === b.value, a = b = c = d = e = null
        }();
    var vc = /\r/g;
    fb.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = fb.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, fb(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fb.isArray(e) && (e = fb.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = fb.valHooks[e.type] || fb.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(vc, "") : null == c ? "" : c)) : void 0
        }
    }), fb.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = fb.find.attr(a, "value");
                    return null != b ? b : fb.text(a)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (db.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
                            if (b = fb(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--;)
                        if (d = e[g], fb.inArray(fb.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), fb.each(["radio", "checkbox"], function() {
        fb.valHooks[this] = {
            set: function(a, b) {
                return fb.isArray(b) ? a.checked = fb.inArray(fb(a).val(), b) >= 0 : void 0
            }
        }, db.checkOn || (fb.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var wc, xc, yc = fb.expr.attrHandle,
        zc = /^(?:checked|selected)$/i,
        Ac = db.getSetAttribute,
        Bc = db.input;
    fb.fn.extend({
        attr: function(a, b) {
            return Eb(this, fb.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                fb.removeAttr(this, a)
            })
        }
    }), fb.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === yb ? fb.prop(a, b, c) : (1 === f && fb.isXMLDoc(a) || (b = b.toLowerCase(), d = fb.attrHooks[b] || (fb.expr.match.bool.test(b) ? xc : wc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = fb.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void fb.removeAttr(a, b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(ub);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = fb.propFix[c] || c, fb.expr.match.bool.test(c) ? Bc && Ac || !zc.test(c) ? a[d] = !1 : a[fb.camelCase("default-" + c)] = a[d] = !1 : fb.attr(a, c, ""), a.removeAttribute(Ac ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!db.radioValue && "radio" === b && fb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), xc = {
        set: function(a, b, c) {
            return b === !1 ? fb.removeAttr(a, c) : Bc && Ac || !zc.test(c) ? a.setAttribute(!Ac && fb.propFix[c] || c, c) : a[fb.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, fb.each(fb.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = yc[b] || fb.find.attr;
        yc[b] = Bc && Ac || !zc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = yc[b], yc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, yc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[fb.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), Bc && Ac || (fb.attrHooks.value = {
        set: function(a, b, c) {
            return fb.nodeName(a, "input") ? void(a.defaultValue = b) : wc && wc.set(a, b, c)
        }
    }), Ac || (wc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, yc.id = yc.name = yc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, fb.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: wc.set
    }, fb.attrHooks.contenteditable = {
        set: function(a, b, c) {
            wc.set(a, "" === b ? !1 : b, c)
        }
    }, fb.each(["width", "height"], function(a, b) {
        fb.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), db.style || (fb.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Cc = /^(?:input|select|textarea|button|object)$/i,
        Dc = /^(?:a|area)$/i;
    fb.fn.extend({
        prop: function(a, b) {
            return Eb(this, fb.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = fb.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), fb.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !fb.isXMLDoc(a), f && (b = fb.propFix[b] || b, e = fb.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = fb.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Cc.test(a.nodeName) || Dc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), db.hrefNormalized || fb.each(["href", "src"], function(a, b) {
        fb.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), db.optSelected || (fb.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), fb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fb.propFix[this.toLowerCase()] = this
    }), db.enctype || (fb.propFix.enctype = "encoding");
    var Ec = /[\t\r\n\f]/g;
    fb.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(ub) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ec, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = fb.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(ub) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ec, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? fb.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(fb.isFunction(a) ? function(c) {
                fb(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = fb(this), f = a.match(ub) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === yb || "boolean" === c) && (this.className && fb._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : fb._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Ec, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        fb.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), fb.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Fc = fb.now(),
        Gc = /\?/,
        Hc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fb.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = fb.trim(b + "");
        return e && !fb.trim(e.replace(Hc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : fb.error("Invalid JSON: " + b)
    }, fb.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || fb.error("Invalid XML: " + b), c
    };
    var Ic, Jc, Kc = /#.*$/,
        Lc = /([?&])_=[^&]*/,
        Mc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Nc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Oc = /^(?:GET|HEAD)$/,
        Pc = /^\/\//,
        Qc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Rc = {},
        Sc = {},
        Tc = "*/".concat("*");
    try {
        Jc = location.href
    } catch (Uc) {
        Jc = pb.createElement("a"), Jc.href = "", Jc = Jc.href
    }
    Ic = Qc.exec(Jc.toLowerCase()) || [], fb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Jc,
            type: "GET",
            isLocal: Nc.test(Ic[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Tc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fb.parseJSON,
                "text xml": fb.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? P(P(a, fb.ajaxSettings), b) : P(fb.ajaxSettings, a)
        },
        ajaxPrefilter: N(Rc),
        ajaxTransport: N(Sc),
        ajax: function(a, b) {
            function c(a, b, c, d) {
                var e, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (fb.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (fb.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --fb.active || fb.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = fb.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? fb(m) : fb.event,
                o = fb.Deferred(),
                p = fb.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!k)
                                for (k = {}; b = Mc.exec(g);) k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return j && j.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Jc) + "").replace(Kc, "").replace(Pc, Ic[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = fb.trim(l.dataType || "*").toLowerCase().match(ub) || [""], null == l.crossDomain && (d = Qc.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Ic[1] && d[2] === Ic[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Ic[3] || ("http:" === Ic[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = fb.param(l.data, l.traditional)), O(Rc, l, b, v), 2 === t) return v;
            i = l.global, i && 0 === fb.active++ && fb.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Oc.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Gc.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Lc.test(f) ? f.replace(Lc, "$1_=" + Fc++) : f + (Gc.test(f) ? "&" : "?") + "_=" + Fc++)), l.ifModified && (fb.lastModified[f] && v.setRequestHeader("If-Modified-Since", fb.lastModified[f]), fb.etag[f] && v.setRequestHeader("If-None-Match", fb.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Tc + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[e](l[e]);
            if (j = O(Sc, l, b, v)) {
                v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, j.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return fb.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return fb.get(a, void 0, b, "script")
        }
    }), fb.each(["get", "post"], function(a, b) {
        fb[b] = function(a, c, d, e) {
            return fb.isFunction(c) && (e = e || d, d = c, c = void 0), fb.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), fb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        fb.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), fb._evalUrl = function(a) {
        return fb.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, fb.fn.extend({
        wrapAll: function(a) {
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = fb(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(fb.isFunction(a) ? function(b) {
                fb(this).wrapInner(a.call(this, b))
            } : function() {
                var b = fb(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = fb.isFunction(a);
            return this.each(function(c) {
                fb(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes)
            }).end()
        }
    }), fb.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !db.reliableHiddenOffsets() && "none" === (a.style && a.style.display || fb.css(a, "display"))
    }, fb.expr.filters.visible = function(a) {
        return !fb.expr.filters.hidden(a)
    };
    var Vc = /%20/g,
        Wc = /\[\]$/,
        Xc = /\r?\n/g,
        Yc = /^(?:submit|button|image|reset|file)$/i,
        Zc = /^(?:input|select|textarea|keygen)/i;
    fb.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = fb.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = fb.ajaxSettings && fb.ajaxSettings.traditional), fb.isArray(a) || a.jquery && !fb.isPlainObject(a)) fb.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) S(c, a[c], b, e);
        return d.join("&").replace(Vc, "+")
    }, fb.fn.extend({
        serialize: function() {
            return fb.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = fb.prop(this, "elements");
                return a ? fb.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !fb(this).is(":disabled") && Zc.test(this.nodeName) && !Yc.test(a) && (this.checked || !Fb.test(a))
            }).map(function(a, b) {
                var c = fb(this).val();
                return null == c ? null : fb.isArray(c) ? fb.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Xc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Xc, "\r\n")
                }
            }).get()
        }
    }), fb.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
    } : T;
    var $c = 0,
        _c = {},
        ad = fb.ajaxSettings.xhr();
    a.ActiveXObject && fb(a).on("unload", function() {
        for (var a in _c) _c[a](void 0, !0)
    }), db.cors = !!ad && "withCredentials" in ad, ad = db.ajax = !!ad, ad && fb.ajaxTransport(function(a) {
        if (!a.crossDomain || db.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++$c;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete _c[g], b = void 0, f.onreadystatechange = fb.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = _c[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    }), fb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return fb.globalEval(a), a
            }
        }
    }), fb.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), fb.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = pb.head || fb("head")[0] || pb.documentElement;
            return {
                send: function(d, e) {
                    b = pb.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var bd = [],
        cd = /(=)\?(?=&|$)|\?\?/;
    fb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = bd.pop() || fb.expando + "_" + Fc++;
            return this[a] = !0, a
        }
    }), fb.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (cd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && cd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fb.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(cd, "$1" + e) : b.jsonp !== !1 && (b.url += (Gc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || fb.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, bd.push(e)), g && fb.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), fb.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || pb;
        var d = mb.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = fb.buildFragment([a], b, e), e && e.length && fb(e).remove(), fb.merge([], d.childNodes))
    };
    var dd = fb.fn.load;
    fb.fn.load = function(a, b, c) {
        if ("string" != typeof a && dd) return dd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), fb.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && fb.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? fb("<div>").append(fb.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, fb.expr.filters.animated = function(a) {
        return fb.grep(fb.timers, function(b) {
            return a === b.elem
        }).length
    };
    var ed = a.document.documentElement;
    fb.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fb.css(a, "position"),
                l = fb(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fb.css(a, "top"), i = fb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && fb.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, fb.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                fb.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            return f ? (b = f.documentElement, fb.contains(b, e) ? (typeof e.getBoundingClientRect !== yb && (d = e.getBoundingClientRect()), c = V(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === fb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fb.nodeName(a[0], "html") || (c = a.offset()), c.top += fb.css(a[0], "borderTopWidth", !0), c.left += fb.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - fb.css(d, "marginTop", !0),
                    left: b.left - c.left - fb.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || ed; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position");) a = a.offsetParent;
                return a || ed
            })
        }
    }), fb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        fb.fn[a] = function(d) {
            return Eb(this, function(a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? fb(f).scrollLeft() : e, c ? e : fb(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), fb.each(["top", "left"], function(a, b) {
        fb.cssHooks[b] = A(db.pixelPosition, function(a, c) {
            return c ? (c = cc(a, b), ec.test(c) ? fb(a).position()[b] + "px" : c) : void 0
        })
    }), fb.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        fb.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            fb.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Eb(this, function(b, c, d) {
                    var e;
                    return fb.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fb.css(b, c, g) : fb.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), fb.fn.size = function() {
        return this.length
    }, fb.fn.andSelf = fb.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fb
    });
    var fd = a.jQuery,
        gd = a.$;
    return fb.noConflict = function(b) {
        return a.$ === fb && (a.$ = gd), b && a.jQuery === fb && (a.jQuery = fd), fb
    }, typeof b === yb && (a.jQuery = a.$ = fb), fb
}),
function(a) {
    function b(a) {
        return Object.prototype.toString.call(a).slice(8, -1).toLowerCase()
    }

    function c(a, b) {
        for (var c = []; b > 0; c[--b] = a);
        return c.join("")
    }
    var d = function() {
        return d.cache.hasOwnProperty(arguments[0]) || (d.cache[arguments[0]] = d.parse(arguments[0])), d.format.call(null, d.cache[arguments[0]], arguments)
    };
    d.format = function(a, e) {
        var f, g, h, i, j, k, l, m = 1,
            n = a.length,
            o = "",
            p = [];
        for (g = 0; n > g; g++)
            if (o = b(a[g]), "string" === o) p.push(a[g]);
            else if ("array" === o) {
            if (i = a[g], i[2])
                for (f = e[m], h = 0; h < i[2].length; h++) {
                    if (!f.hasOwnProperty(i[2][h])) throw d('[sprintf] property "%s" does not exist', i[2][h]);
                    f = f[i[2][h]]
                } else f = i[1] ? e[i[1]] : e[m++];
            if (/[^s]/.test(i[8]) && "number" != b(f)) throw d("[sprintf] expecting number but found %s", b(f));
            switch (i[8]) {
                case "b":
                    f = f.toString(2);
                    break;
                case "c":
                    f = String.fromCharCode(f);
                    break;
                case "d":
                    f = parseInt(f, 10);
                    break;
                case "e":
                    f = i[7] ? f.toExponential(i[7]) : f.toExponential();
                    break;
                case "f":
                    f = i[7] ? parseFloat(f).toFixed(i[7]) : parseFloat(f);
                    break;
                case "o":
                    f = f.toString(8);
                    break;
                case "s":
                    f = (f = String(f)) && i[7] ? f.substring(0, i[7]) : f;
                    break;
                case "u":
                    f >>>= 0;
                    break;
                case "x":
                    f = f.toString(16);
                    break;
                case "X":
                    f = f.toString(16).toUpperCase()
            }
            f = /[def]/.test(i[8]) && i[3] && f >= 0 ? "+" + f : f, k = i[4] ? "0" == i[4] ? "0" : i[4].charAt(1) : " ", l = i[6] - String(f).length, j = i[6] ? c(k, l) : "", p.push(i[5] ? f + j : j + f)
        }
        return p.join("")
    }, d.cache = {}, d.parse = function(a) {
        for (var b = a, c = [], d = [], e = 0; b;) {
            if (null !== (c = /^[^\x25]+/.exec(b))) d.push(c[0]);
            else if (null !== (c = /^\x25{2}/.exec(b))) d.push("%");
            else {
                if (null === (c = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b))) throw "[sprintf] huh?";
                if (c[2]) {
                    e |= 1;
                    var f = [],
                        g = c[2],
                        h = [];
                    if (null === (h = /^([a-z_][a-z_\d]*)/i.exec(g))) throw "[sprintf] huh?";
                    for (f.push(h[1]);
                        "" !== (g = g.substring(h[0].length));)
                        if (null !== (h = /^\.([a-z_][a-z_\d]*)/i.exec(g))) f.push(h[1]);
                        else {
                            if (null === (h = /^\[(\d+)\]/.exec(g))) throw "[sprintf] huh?";
                            f.push(h[1])
                        }
                    c[2] = f
                } else e |= 2;
                if (3 === e) throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                d.push(c)
            }
            b = b.substring(c[0].length)
        }
        return d
    };
    var e = function(a, b, c) {
        return c = b.slice(0), c.splice(0, 0, a), d.apply(null, c)
    };
    a.sprintf = d, a.vsprintf = e
}("undefined" != typeof exports ? exports : window),
function(a, b) {
    function c(a, b) {
        var c;
        if ("string" == typeof a && "string" == typeof b) return localStorage[a] = b, !0;
        if ("object" == typeof a && "undefined" == typeof b) {
            for (c in a) a.hasOwnProperty(c) && (localStorage[c] = a[c]);
            return !0
        }
        return !1
    }

    function d(a, b) {
        var c, d, e;
        if (c = new Date, c.setTime(c.getTime() + 31536e6), d = "; expires=" + c.toGMTString(), "string" == typeof a && "string" == typeof b) return document.cookie = a + "=" + b + d + "; path=/", !0;
        if ("object" == typeof a && "undefined" == typeof b) {
            for (e in a) a.hasOwnProperty(e) && (document.cookie = e + "=" + a[e] + d + "; path=/");
            return !0
        }
        return !1
    }

    function e(a) {
        return localStorage[a]
    }

    function f(a) {
        var b, c, d, e;
        for (b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
            for (e = c[d];
                " " === e.charAt(0);) e = e.substring(1, e.length);
            if (0 === e.indexOf(b)) return e.substring(b.length, e.length)
        }
        return null
    }

    function g(a) {
        return delete localStorage[a]
    }

    function h(a) {
        return d(a, "", -1)
    }

    function i(a, b) {
        var c = [],
            d = a.length;
        if (b > d) return [a];
        for (var e = 0; d > e; e += b) c.push(a.substring(e, e + b));
        return c
    }

    function j(b) {
        var c = b ? [b] : [],
            d = 0;
        a.extend(this, {
            get: function() {
                return c
            },
            rotate: function() {
                return 1 === c.length ? c[0] : (d === c.length - 1 ? d = 0 : ++d, c[d])
            },
            length: function() {
                return c.length
            },
            set: function(a) {
                for (var b = c.length; b--;)
                    if (c[b] === a) return d = b, void 0;
                this.append(a)
            },
            front: function() {
                return c[d]
            },
            append: function(a) {
                c.push(a)
            }
        })
    }

    function k(b) {
        var c = b ? [b] : [];
        a.extend(this, {
            map: function(b) {
                return a.map(c, b)
            },
            size: function() {
                return c.length
            },
            pop: function() {
                if (0 === c.length) return null;
                var a = c[c.length - 1];
                return c = c.slice(0, c.length - 1), a
            },
            push: function(a) {
                return c = c.concat([a]), a
            },
            top: function() {
                return c.length > 0 ? c[c.length - 1] : null
            }
        })
    }

    function l(b, c) {
        var d = !0,
            e = "";
        "string" == typeof b && "" !== b && (e = b + "_"), e += "commands";
        var f = a.Storage.get(e);
        f = f ? a.parseJSON(f) : [];
        var g = f.length - 1;
        a.extend(this, {
            append: function(b) {
                d && f[f.length - 1] !== b && (f.push(b), c && f.length > c && (f = f.slice(-c)), g = f.length - 1, a.Storage.set(e, a.json_stringify(f)))
            },
            data: function() {
                return f
            },
            reset: function() {
                g = f.length - 1
            },
            last: function() {
                return f[length - 1]
            },
            end: function() {
                return g === f.length - 1
            },
            position: function() {
                return g
            },
            current: function() {
                return f[g]
            },
            next: function() {
                return g < f.length - 1 && ++g, -1 !== g ? f[g] : void 0
            },
            previous: function() {
                var a = g;
                return g > 0 && --g, -1 !== a ? f[g] : void 0
            },
            clear: function() {
                f = [], this.purge()
            },
            enabled: function() {
                return d
            },
            enable: function() {
                d = !0
            },
            purge: function() {
                a.Storage.remove(e)
            },
            disable: function() {
                d = !1
            }
        })
    }

    function m(b) {
        return a("<div>" + a.terminal.strip(b) + "</div>").text().length
    }

    function n() {
        var a = !1,
            c = "animation",
            d = "",
            e = "Webkit Moz O ms Khtml".split(" "),
            f = "",
            g = document.createElement("div");
        if (g.style.animationName && (a = !0), a === !1)
            for (var h = 0; h < e.length; h++)
                if (g.style[e[h] + "AnimationName"] !== b) {
                    f = e[h], c = f + "Animation", d = "-" + f.toLowerCase() + "-", a = !0;
                    break
                }
        return a
    }

    function o(a, b) {
        var c = a.replace(/^\s+|\s+$/g, "").split(/(\s+)/),
            d = a.replace(/^[^\s]+\s*/, "");
        return {
            name: c[0],
            args: b(d),
            rest: d
        }
    }

    function p(b) {
        var c = a(window).scrollTop(),
            d = c + a(window).height(),
            e = a(b).offset().top,
            f = e + a(b).height();
        return f >= c && d >= e
    }

    function q() {
        var b = a('<div class="terminal"><div class="cmd"><span>&nbsp;</span></div></div>').appendTo("body"),
            c = b.find("span"),
            d = {
                width: c.width(),
                height: c.outerHeight()
            };
        return b.remove(), d
    }

    function r(a) {
        var b = q().width,
            c = Math.floor(a.width() / b);
        if (u(a)) {
            var d = 20,
                e = a.innerWidth() - a.width();
            c -= Math.ceil((d - e / 2) / (b - 1))
        }
        return c
    }

    function s(a) {
        return Math.floor(a.height() / q().height)
    }

    function t() {
        if (window.getSelection || document.getSelection) {
            var a = (window.getSelection || document.getSelection)();
            return a.text ? a.text : a.toString()
        }
        return document.selection ? document.selection.createRange().text : void 0
    }

    function u(a) {
        return a.get(0).scrollHeight > a.innerHeight()
    }
    a.omap = function(b, c) {
        var d = {};
        return a.each(b, function(a, e) {
            d[a] = c.call(b, a, e)
        }), d
    };
    var v = "undefined" != typeof window.localStorage;
    a.extend({
            Storage: {
                set: v ? c : d,
                get: v ? e : f,
                remove: v ? g : h
            }
        }), jQuery.fn.extend({
            everyTime: function(a, b, c, d, e) {
                return this.each(function() {
                    jQuery.timer.add(this, a, b, c, d, e)
                })
            },
            oneTime: function(a, b, c) {
                return this.each(function() {
                    jQuery.timer.add(this, a, b, c, 1)
                })
            },
            stopTime: function(a, b) {
                return this.each(function() {
                    jQuery.timer.remove(this, a, b)
                })
            }
        }), jQuery.extend({
            timer: {
                guid: 1,
                global: {},
                regex: /^([0-9]+)\s*(.*s)?$/,
                powers: {
                    ms: 1,
                    cs: 10,
                    ds: 100,
                    s: 1e3,
                    das: 1e4,
                    hs: 1e5,
                    ks: 1e6
                },
                timeParse: function(a) {
                    if (a === b || null === a) return null;
                    var c = this.regex.exec(jQuery.trim(a.toString()));
                    if (c[2]) {
                        var d = parseInt(c[1], 10),
                            e = this.powers[c[2]] || 1;
                        return d * e
                    }
                    return a
                },
                add: function(a, b, c, d, e, f) {
                    var g = 0;
                    if (jQuery.isFunction(c) && (e || (e = d), d = c, c = b), b = jQuery.timer.timeParse(b), !("number" != typeof b || isNaN(b) || 0 >= b)) {
                        e && e.constructor !== Number && (f = !!e, e = 0), e = e || 0, f = f || !1, a.$timers || (a.$timers = {}), a.$timers[c] || (a.$timers[c] = {}), d.$timerID = d.$timerID || this.guid++;
                        var h = function() {
                            f && h.inProgress || (h.inProgress = !0, (++g > e && 0 !== e || d.call(a, g) === !1) && jQuery.timer.remove(a, c, d), h.inProgress = !1)
                        };
                        h.$timerID = d.$timerID, a.$timers[c][d.$timerID] || (a.$timers[c][d.$timerID] = window.setInterval(h, b)), this.global[c] || (this.global[c] = []), this.global[c].push(a)
                    }
                },
                remove: function(a, b, c) {
                    var d, e = a.$timers;
                    if (e) {
                        if (b) {
                            if (e[b]) {
                                if (c) c.$timerID && (window.clearInterval(e[b][c.$timerID]), delete e[b][c.$timerID]);
                                else
                                    for (var f in e[b]) e[b].hasOwnProperty(f) && (window.clearInterval(e[b][f]), delete e[b][f]);
                                for (d in e[b])
                                    if (e[b].hasOwnProperty(d)) break;
                                d || (d = null, delete e[b])
                            }
                        } else
                            for (var g in e) e.hasOwnProperty(g) && this.remove(a, g, c);
                        for (d in e)
                            if (e.hasOwnProperty(d)) break;
                        d || (a.$timers = null)
                    }
                }
            }
        }), /(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) && jQuery(window).one("unload", function() {
            var a = jQuery.timer.global;
            for (var b in a)
                if (a.hasOwnProperty(b))
                    for (var c = a[b], d = c.length; --d;) jQuery.timer.remove(c[d], b)
        }),
        function(a) {
            if (String.prototype.split.toString().match(/\[native/)) {
                var b, c = String.prototype.split,
                    d = /()??/.exec("")[1] === a;
                return b = function(b, e, f) {
                    if ("[object RegExp]" !== Object.prototype.toString.call(e)) return c.call(b, e, f);
                    var g, h, i, j, k = [],
                        l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
                        m = 0;
                    for (e = new RegExp(e.source, l + "g"), b += "", d || (g = new RegExp("^" + e.source + "$(?!\\s)", l)), f = f === a ? -1 >>> 0 : f >>> 0;
                        (h = e.exec(b)) && (i = h.index + h[0].length, !(i > m && (k.push(b.slice(m, h.index)), !d && h.length > 1 && h[0].replace(g, function() {
                            for (var b = 1; b < arguments.length - 2; b++) arguments[b] === a && (h[b] = a)
                        }), h.length > 1 && h.index < b.length && Array.prototype.push.apply(k, h.slice(1)), j = h[0].length, m = i, k.length >= f)));) e.lastIndex === h.index && e.lastIndex++;
                    return m === b.length ? (j || !e.test("")) && k.push("") : k.push(b.slice(m)), k.length > f ? k.slice(0, f) : k
                }, String.prototype.split = function(a, c) {
                    return b(this, a, c)
                }, b
            }
        }(), a.json_stringify = function(c, d) {
            var e, f = "";
            d = d === b ? 1 : d;
            var g = typeof c;
            switch (g) {
                case "function":
                    f += c;
                    break;
                case "boolean":
                    f += c ? "true" : "false";
                    break;
                case "object":
                    if (null === c) f += "null";
                    else if (c instanceof Array) {
                        f += "[";
                        var h = c.length;
                        for (e = 0; h - 1 > e; ++e) f += a.json_stringify(c[e], d + 1);
                        f += a.json_stringify(c[h - 1], d + 1) + "]"
                    } else {
                        f += "{";
                        for (var i in c) c.hasOwnProperty(i) && (f += '"' + i + '":' + a.json_stringify(c[i], d + 1));
                        f += "}"
                    }
                    break;
                case "string":
                    var j = c,
                        k = {
                            "\\\\": "\\\\",
                            '"': '\\"',
                            "/": "\\/",
                            "\\n": "\\n",
                            "\\r": "\\r",
                            "\\t": "\\t"
                        };
                    for (e in k) k.hasOwnProperty(e) && (j = j.replace(new RegExp(e, "g"), k[e]));
                    f += '"' + j + '"';
                    break;
                case "number":
                    f += String(c)
            }
            return f += d > 1 ? "," : "", 1 === d && (f = f.replace(/,([\]}])/g, "$1")), f.replace(/([\[{]),/g, "$1")
        }, a.fn.cmd = function(c) {
            function d() {
                K.toggleClass("inverted")
            }

            function e() {
                w = "(reverse-i-search)`" + B + "': ", N()
            }

            function f() {
                w = v, A = !1, C = null, B = ""
            }

            function g(a) {
                var b, c, d = y.data(),
                    f = d.length;
                if (a && C > 0 && (f -= C), B.length > 0)
                    for (var g = B.length; g > 0; g--) {
                        c = B.substring(0, g).replace(/([.*+{}\[\]?])/g, "\\$1"), b = new RegExp(c);
                        for (var h = f; h--;)
                            if (b.test(d[h])) return C = d.length - h, H = 0, p.set(d[h], !0), M(), B.length !== g && (B = B.substring(0, g), e()), void 0
                    }
                B = ""
            }

            function h() {
                var a = p.width(),
                    b = K.innerWidth();
                s = Math.floor(a / b)
            }

            function j(a) {
                var b = a.substring(0, s - u),
                    c = a.substring(s - u);
                return [b].concat(i(c, s))
            }

            function k() {
                r.focus(), p.oneTime(1, function() {
                    p.insert(r.val()), r.blur().val("")
                })
            }

            function o(a) {
                var d, g, h;
                if ("function" == typeof c.keydown && (d = c.keydown(a), d !== b)) return d;
                if (I) {
                    if (38 === a.which || 80 === a.which && a.ctrlKey || (O = !0), !A || 35 !== a.which && 36 !== a.which && 37 !== a.which && 38 !== a.which && 39 !== a.which && 40 !== a.which && 13 !== a.which && 27 !== a.which) {
                        if (a.altKey) return 68 === a.which ? (p.set(E.slice(0, H) + E.slice(H).replace(/[^ ]+ |[^ ]+$/, ""), !0), !1) : !0;
                        if (13 === a.keyCode)
                            if (a.shiftKey) p.insert("\n");
                            else {
                                y && E && !D && ("function" == typeof c.historyFilter && c.historyFilter(E) || !c.historyFilter) && y.append(E);
                                var i = E;
                                y.reset(), p.set(""), c.commands && c.commands(i), "function" == typeof w && N()
                            } else if (8 === a.which) A ? (B = B.slice(0, -1), e()) : "" !== E && H > 0 && (E = E.slice(0, H - 1) + E.slice(H, E.length), --H, M());
                        else if (67 === a.which && a.ctrlKey && a.shiftKey) F = t();
                        else if (86 === a.which && a.ctrlKey && a.shiftKey) "" !== F && p.insert(F);
                        else if (9 !== a.which || a.ctrlKey || a.altKey) {
                            if (46 === a.which) return "" !== E && H < E.length && (E = E.slice(0, H) + E.slice(H + 1, E.length), M()), !0;
                            if (y && 38 === a.which || 80 === a.which && a.ctrlKey) O ? (L = E, p.set(y.current())) : p.set(y.previous()), O = !1;
                            else if (y && 40 === a.which || 78 === a.which && a.ctrlKey) p.set(y.end() ? L : y.next());
                            else if (37 === a.which || 66 === a.which && a.ctrlKey)
                                if (a.ctrlKey && 66 !== a.which) {
                                    h = H - 1, g = 0, " " === E[h] && --h;
                                    for (var j = h; j > 0; --j) {
                                        if (" " === E[j] && " " !== E[j + 1]) {
                                            g = j + 1;
                                            break
                                        }
                                        if ("\n" === E[j] && "\n" !== E[j + 1]) {
                                            g = j;
                                            break
                                        }
                                    }
                                    p.position(g)
                                } else H > 0 && (--H, M());
                            else if (39 === a.which || 70 === a.which && a.ctrlKey)
                                if (a.ctrlKey && 70 !== a.which) {
                                    " " === E[H] && ++H;
                                    var l = /\S[\n\s]{2,}|[\n\s]+\S?/,
                                        m = E.slice(H).match(l);
                                    !m || m[0].match(/^\s+$/) ? H = E.length : " " !== m[0][0] ? H += m.index + 1 : (H += m.index + m[0].length - 1, " " !== m[0][m[0].length - 1] && --H), M()
                                } else H < E.length && (++H, M());
                            else {
                                if (123 === a.which) return !0;
                                if (36 === a.which) p.position(0);
                                else if (35 === a.which) p.position(E.length);
                                else {
                                    if (a.shiftKey && 45 == a.which) return k(), !0;
                                    if (!a.ctrlKey && !a.metaKey) return !0;
                                    if (192 === a.which) return !0;
                                    if (a.metaKey) {
                                        if (82 === a.which) return !0;
                                        if (76 === a.which) return !0
                                    }
                                    if (a.shiftKey) {
                                        if (84 === a.which) return !0
                                    } else {
                                        if (81 === a.which) {
                                            if ("" !== E && 0 !== H) {
                                                var n = E.slice(0, H),
                                                    q = E.slice(H + 1),
                                                    r = n.match(/([^ ]+ *$)/);
                                                H = n.length - r[0].length, G = n.slice(H), E = n.slice(0, H) + q, M()
                                            }
                                            return !1
                                        }
                                        if (72 === a.which) return "" !== E && H > 0 && (E = E.slice(0, --H), H < E.length - 1 && (E += E.slice(H)), M()), !1;
                                        if (65 === a.which) p.position(0);
                                        else if (69 === a.which) p.position(E.length);
                                        else {
                                            if (88 === a.which || 67 === a.which || 84 === a.which) return !0;
                                            if (89 === a.which) "" !== G && p.insert(G);
                                            else {
                                                if (86 === a.which) return k(), !0;
                                                if (75 === a.which) 0 === H ? (G = E, p.set("")) : H !== E.length && (G = E.slice(H), p.set(E.slice(0, H)));
                                                else if (85 === a.which) "" !== E && 0 !== H && (G = E.slice(0, H), p.set(E.slice(H, E.length)), p.position(0));
                                                else if (17 === a.which) return !1
                                            }
                                        }
                                    }
                                }
                            }
                        } else p.insert("	")
                    } else f(), N(), 27 === a.which && (E = ""), M(), o.call(this, a);
                    return !1
                }
            }
            var p = this,
                q = p.data("cmd");
            if (q) return q;
            p.addClass("cmd"), p.append('<span class="prompt"></span><span></span><span class="cursor">&nbsp;</span><span></span>');
            var r = a("<textarea/>").addClass("clipboard").appendTo(p);
            c.width && p.width(c.width);
            var s, u, v, w, x, y, z, A = !1,
                B = "",
                C = null,
                D = c.mask || !1,
                E = "",
                F = "",
                G = "",
                H = 0,
                I = c.enabled,
                J = c.historySize || 60,
                K = p.find(".cursor");
            z = n() ? function(a) {
                a ? K.addClass("blink") : K.removeClass("blink")
            } : function(a) {
                a && !I ? (K.addClass("inverted"), p.everyTime(500, "blink", d)) : I && (p.stopTime("blink", d), K.removeClass("inverted"))
            };
            var L, M = function(b) {
                    function c(b, c) {
                        var d = b.length;
                        if (c === d) g.html(a.terminal.encode(b, !0)), K.html("&nbsp;"), h.html("");
                        else if (0 === c) g.html(""), K.html(a.terminal.encode(b.slice(0, 1), !0)), h.html(a.terminal.encode(b.slice(1), !0));
                        else {
                            var e = a.terminal.encode(b.slice(0, c), !0);
                            g.html(e);
                            var f = b.slice(c, c + 1);
                            K.html(" " === f ? "&nbsp;" : a.terminal.encode(f, !0)), c === b.length - 1 ? h.html("") : h.html(a.terminal.encode(b.slice(c + 1), !0))
                        }
                    }

                    function d(b) {
                        return "<div>" + a.terminal.encode(b, !0) + "</div>"
                    }

                    function e(b) {
                        var c = h;
                        a.each(b, function(b, e) {
                            c = a(d(e)).insertAfter(c).addClass("clear")
                        })
                    }

                    function f(b) {
                        a.each(b, function(a, b) {
                            g.before(d(b))
                        })
                    }
                    var g = K.prev(),
                        h = K.next();
                    return function() {
                        var k, l, m = D ? E.replace(/./g, "*") : E;
                        if (b.find("div").remove(), g.html(""), m.length > s - u - 1 || m.match(/\n/)) {
                            var n, o = m.match(/\t/g),
                                p = o ? 3 * o.length : 0;
                            if (o && (m = m.replace(/\t/g, "\x00\x00\x00\x00")), m.match(/\n/)) {
                                var q = m.split("\n");
                                for (l = s - u - 1, k = 0; k < q.length - 1; ++k) q[k] += " ";
                                for (q[0].length > l ? (n = [q[0].substring(0, l)], n = n.concat(i(q[0].substring(l), s))) : n = [q[0]], k = 1; k < q.length; ++k) q[k].length > s ? n = n.concat(i(q[k], s)) : n.push(q[k])
                            } else n = j(m);
                            if (o && (n = a.map(n, function(a) {
                                    return a.replace(/\x00\x00\x00\x00/g, "	")
                                })), l = n[0].length, 0 === l && 1 === n.length);
                            else if (l > H) c(n[0], H), e(n.slice(1));
                            else if (H === l) g.before(d(n[0])), c(n[1], 0), e(n.slice(2));
                            else {
                                var r = n.length;
                                if (l > H) c(n[0], H), e(n.slice(1));
                                else if (H === l) g.before(d(n[0])), c(n[1], 0), e(n.slice(2));
                                else {
                                    var t = n.slice(-1)[0],
                                        v = m.length - H,
                                        w = t.length,
                                        x = 0;
                                    if (w >= v) f(n.slice(0, -1)), x = w === v ? 0 : w - v, c(t, x + p);
                                    else if (3 === r) g.before("<div>" + a.terminal.encode(n[0], !0) + "</div>"), c(n[1], H - l - 1), h.after('<div class="clear">' + a.terminal.encode(n[2], !0) + "</div>");
                                    else {
                                        var y, z;
                                        for (x = H, k = 0; k < n.length; ++k) {
                                            var A = n[k].length;
                                            if (!(x > A)) break;
                                            x -= A
                                        }
                                        z = n[k], y = k, x === z.length && (x = 0, z = n[++y]), c(z, x), f(n.slice(0, y)), e(n.slice(y + 1))
                                    }
                                }
                            }
                        } else "" === m ? (g.html(""), K.html("&nbsp;"), h.html("")) : c(m, H)
                    }
                }(p),
                N = function() {
                    function b(b) {
                        u = m(b), c.html(a.terminal.format(a.terminal.encode(b)))
                    }
                    var c = p.find(".prompt");
                    return function() {
                        switch (typeof w) {
                            case "string":
                                b(w);
                                break;
                            case "function":
                                w(b)
                        }
                    }
                }(),
                O = !0;
            a.extend(p, {
                name: function(a) {
                    if (a !== b) {
                        x = a;
                        var c = y && y.enabled() || !y;
                        return y = new l(a, J), c || y.disable(), p
                    }
                    return x
                },
                purge: function() {
                    return y.clear(), p
                },
                history: function() {
                    return y
                },
                set: function(a, d) {
                    return a !== b && (E = a, d || (H = E.length), M(), "function" == typeof c.onCommandChange && c.onCommandChange(E)), p
                },
                insert: function(a, b) {
                    return H === E.length ? E += a : E = 0 === H ? a + E : E.slice(0, H) + a + E.slice(H), b || (H += a.length), M(), "function" == typeof c.onCommandChange && c.onCommandChange(E), p
                },
                get: function() {
                    return E
                },
                commands: function(a) {
                    return a ? (c.commands = a, p) : a
                },
                destroy: function() {
                    return a(document.documentElement || window).unbind(".cmd"), p.stopTime("blink", d), p.find(".cursor").next().remove().end().prev().remove().end().remove(), p.find(".prompt, .clipboard").remove(), p.removeClass("cmd").removeData("cmd"), p
                },
                prompt: function(a) {
                    if (a === b) return w;
                    if ("string" != typeof a && "function" != typeof a) throw "prompt must be a function or string";
                    return w = a, N(), M(), p
                },
                kill_text: function() {
                    return G
                },
                position: function(a) {
                    return "number" == typeof a ? (H = 0 > a ? 0 : a > E.length ? E.length : a, M(), p) : H
                },
                visible: function() {
                    var a = p.visible;
                    return function() {
                        a.apply(p, []), M(), N()
                    }
                }(),
                show: function() {
                    var a = p.show;
                    return function() {
                        a.apply(p, []), M(), N()
                    }
                }(),
                resize: function(a) {
                    return a ? s = a : h(), M(), p
                },
                enable: function() {
                    return I = !0, z(!0), p
                },
                isenabled: function() {
                    return I
                },
                disable: function() {
                    return I = !1, z(!1), p
                },
                mask: function(a) {
                    return "boolean" == typeof a ? (D = a, M(), p) : D
                }
            }), p.name(c.name || c.prompt || ""), w = c.prompt || "> ", N(), (c.enabled === b || c.enabled === !0) && p.enable();
            return a(document.documentElement || window).bind("keypress.cmd", function(d) {
                var f;
                if (d.ctrlKey && 99 === d.which) return !0;
                if (A || "function" != typeof c.keypress || (f = c.keypress(d)), f !== b && !f) return f;
                if (I) {
                    if (a.inArray(d.which, [38, 13, 0, 8]) > -1 && 123 !== d.keyCode && (38 !== d.which || !d.shiftKey)) return !1;
                    if (!d.ctrlKey && (!d.altKey || 100 !== d.which) || d.altKey) return A ? (B += String.fromCharCode(d.which), g(), e()) : p.insert(String.fromCharCode(d.which)), !1
                }
            }).bind("keydown.cmd", o), p.data("cmd", p), p
        };
    var w = ["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
        x = /(\[\[[gbiuso]*;[^;]*;[^\]]*\](?:[^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?)/i,
        y = /\[\[([gbiuso]*);([^;]*);([^;\]]*);?([^;\]]*);?([^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?/gi,
        z = /\[\[([gbiuso]*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?/gi,
        A = /^\[\[([gbiuso]*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]$/gi,
        B = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i,
        C = /\bhttps?:\/\/(?:(?!&[^;]+;)[^\s"'<>)])+\b/g,
        D = /((([^<>('")[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))/g,
        E = /('[^']*'|"(\\"|[^"])*"|\/(\\\/|[^\/])+\/[gimy]*|(\\ |[^ ])+|[\w-]+)/g,
        F = /(\[\[[gbiuso]*;[^;]*;[^\]]*\])/i,
        G = /\[\[[gbiuso]*;[^;]*;[^\]]*\]?$/i;
    a.terminal = {
        valid_color: function(b) {
            return b.match(B) || -1 !== a.inArray(b.toLowerCase(), w)
        },
        escape_regex: function(a) {
            var b = /([\^\$\[\]\(\)\+\*\.\|])/g;
            return a.replace(b, "\\$1")
        },
        have_formatting: function(a) {
            return a.match(z)
        },
        is_formatting: function(a) {
            return a.match(A)
        },
        format_split: function(a) {
            return a.split(x)
        },
        split_equal: function(a, b) {
            for (var c = !1, d = !1, e = "", f = [], g = a.replace(z, function(a, b, c) {
                    var d = b.match(/;/g).length;
                    return d = 2 == d ? ";;" : 3 == d ? ";" : "", "[[" + b + d + c.replace(/\\\]/g, "&#93;").replace(/\n/g, "\\n") + "]" + c + "]"
                }).split(/\n/g), h = 0, i = g.length; i > h; ++h)
                if ("" !== g[h])
                    for (var j = g[h], k = 0, l = 0, m = 0, n = j.length; n > m; ++m) {
                        if ("[" === j[m] && "[" === j[m + 1]) c = !0;
                        else if (c && "]" === j[m]) d ? (c = !1, d = !1) : d = !0;
                        else if (c && d || !c) {
                            if ("&" === j[m]) {
                                var o = j.substring(m).match(/^(&[^;]+;)/);
                                if (!o) throw "Unclosed html entity in line " + (h + 1) + " at char " + (m + 1);
                                m += o[1].length - 2, m === n - 1 && f.push(p + o[1]);
                                continue
                            }
                            "]" === j[m] && "\\" === j[m - 1] ? --l : ++l
                        }
                        if (l === b || m === n - 1) {
                            var p = j.substring(k, m + 1);
                            e && (p = e + p, p.match("]") && (e = "")), k = m + 1, l = 0;
                            var q = p.match(z);
                            if (q) {
                                var r = q[q.length - 1];
                                if ("]" !== r[r.length - 1]) e = r.match(F)[1], p += "]";
                                else if (p.match(G)) {
                                    {
                                        var s = p.length;
                                        s - r[r.length - 1].length
                                    }
                                    p = p.replace(G, ""), e = r.match(F)[1]
                                }
                            }
                            f.push(p)
                        }
                    } else f.push("");
            return f
        },
        encode: function(a, b) {
            return a = b ? a.replace(/&(?![^=]+=)/g, "&") : a.replace(/&(?!#[0-9]+;|[a-zA-Z]+;|[^= "]+=[^=])/g, "&"), a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
        },
        format: function(b, c) {
            var d = a.extend({}, {
                linksNoReferrer: !1
            }, c || {});
            if ("string" == typeof b) {
                var e = a.terminal.format_split(b);
                return e && e.length > 1 && (b = a.map(e, function(b) {
                    return "" === b ? b : "[" === b.substring(0, 1) ? b.replace(y, function(b, c, d, e, f, g, h) {
                        if ("" === h) return "";
                        h = h.replace(/\\]/g, "]");
                        var i = ""; - 1 !== c.indexOf("b") && (i += "font-weight:bold;");
                        var j = []; - 1 !== c.indexOf("u") && j.push("underline"), -1 !== c.indexOf("s") && j.push("line-through"), -1 !== c.indexOf("o") && j.push("overline"), j.length && (i += "text-decoration:" + j.join(" ") + ";"), -1 !== c.indexOf("i") && (i += "font-style:italic;"), a.terminal.valid_color(d) && (i += "color:" + d + ";", -1 !== c.indexOf("g") && (i += "text-shadow:0 0 5px " + d + ";")), a.terminal.valid_color(e) && (i += "background-color:" + e);
                        var k;
                        k = "" === g ? h : g.replace(/&#93;/g, "]");
                        var l = '<span style="' + i + '"' + ("" !== f ? ' class="' + f + '"' : "") + ' data-text="' + k.replace('"', "&quote;") + '">' + h + "</span>";
                        return l
                    }) : "<span>" + b + "</span>"
                }).join("")), a.map(b.split(/(<\/?span[^>]*>)/g), function(a) {
                    return a.match(/span/) ? a : a.replace(C, function(a) {
                        var b = a.match(/\.$/);
                        return a = a.replace(/\.$/, ""), '<a target="_blank" ' + (d.linksNoReferer ? ' rel="noreferrer" ' : "") + 'href="' + a + '">' + a + "</a>" + (b ? "." : "")
                    }).replace(D, '<a href="mailto:$1">$1</a>')
                }).join("").replace(/<span><br\/?><\/span>/g, "<br/>")
            }
            return ""
        },
        escape_brackets: function(a) {
            return a.replace(/\[/g, "&#91;").replace(/\]/g, "&#93;")
        },
        strip: function(a) {
            return a.replace(y, "$6")
        },
        active: function() {
            return P.front()
        },
        overtyping: function(a) {
            return a.replace(/((?:_\x08.|.\x08_)+)/g, function(a) {
                return "[[u;;]" + a.replace(/_x08|\x08_|_\u0008|\u0008_/g, "") + "]"
            }).replace(/((?:.\x08.)+)/g, function(a) {
                return "[[b;#fff;]" + a.replace(/(.)(?:\x08|\u0008)(.)/g, function(a, b, c) {
                    return c
                }) + "]"
            })
        },
        ansi_colors: {
            normal: {
                black: "#000",
                red: "#A00",
                green: "#008400",
                yellow: "#A50",
                blue: "#00A",
                magenta: "#A0A",
                cyan: "#0AA",
                white: "#AAA"
            },
            faited: {
                black: "#000",
                red: "#640000",
                green: "#006100",
                yellow: "#737300",
                blue: "#000087",
                magenta: "#650065",
                cyan: "#008787",
                white: "#818181"
            },
            bold: {
                black: "#000",
                red: "#F55",
                green: "#44D544",
                yellow: "#FF5",
                blue: "#55F",
                magenta: "#F5F",
                cyan: "#5FF",
                white: "#FFF"
            },
            palette: ["#000000", "#AA0000", "#00AA00", "#AA5500", "#0000AA", "#AA00AA", "#00AAAA", "#AAAAAA", "#555555", "#FF5555", "#55FF55", "#FFFF55", "#5555FF", "#FF55FF", "#55FFFF", "#FFFFFF", "#000000", "#00005F", "#000087", "#0000AF", "#0000D7", "#0000FF", "#005F00", "#005F5F", "#005F87", "#005FAF", "#005FD7", "#005FFF", "#008700", "#00875F", "#008787", "#0087AF", "#0087D7", "#00AF00", "#00AF5F", "#00AF87", "#00AFAF", "#00AFD7", "#00AFFF", "#00D700", "#00D75F", "#00D787", "#00D7AF", "#00D7D7", "#00D7FF", "#00FF00", "#00FF5F", "#00FF87", "#00FFAF", "#00FFD7", "#00FFFF", "#5F0000", "#5F005F", "#5F0087", "#5F00AF", "#5F00D7", "#5F00FF", "#5F5F00", "#5F5F5F", "#5F5F87", "#5F5FAF", "#5F5FD7", "#5F5FFF", "#5F8700", "#5F875F", "#5F8787", "#5F87AF", "#5F87D7", "#5F87FF", "#5FAF00", "#5FAF5F", "#5FAF87", "#5FAFAF", "#5FAFD7", "#5FAFFF", "#5FD700", "#5FD75F", "#5FD787", "#5FD7AF", "#5FD7D7", "#5FD7FF", "#5FFF00", "#5FFF5F", "#5FFF87", "#5FFFAF", "#5FFFD7", "#5FFFFF", "#870000", "#87005F", "#870087", "#8700AF", "#8700D7", "#8700FF", "#875F00", "#875F5F", "#875F87", "#875FAF", "#875FD7", "#875FFF", "#878700", "#87875F", "#878787", "#8787AF", "#8787D7", "#8787FF", "#87AF00", "#87AF5F", "#87AF87", "#87AFAF", "#87AFD7", "#87AFFF", "#87D700", "#87D75F", "#87D787", "#87D7AF", "#87D7D7", "#87D7FF", "#87FF00", "#87FF5F", "#87FF87", "#87FFAF", "#87FFD7", "#87FFFF", "#AF0000", "#AF005F", "#AF0087", "#AF00AF", "#AF00D7", "#AF00FF", "#AF5F00", "#AF5F5F", "#AF5F87", "#AF5FAF", "#AF5FD7", "#AF5FFF", "#AF8700", "#AF875F", "#AF8787", "#AF87AF", "#AF87D7", "#AF87FF", "#AFAF00", "#AFAF5F", "#AFAF87", "#AFAFAF", "#AFAFD7", "#AFAFFF", "#AFD700", "#AFD75F", "#AFD787", "#AFD7AF", "#AFD7D7", "#AFD7FF", "#AFFF00", "#AFFF5F", "#AFFF87", "#AFFFAF", "#AFFFD7", "#AFFFFF", "#D70000", "#D7005F", "#D70087", "#D700AF", "#D700D7", "#D700FF", "#D75F00", "#D75F5F", "#D75F87", "#D75FAF", "#D75FD7", "#D75FFF", "#D78700", "#D7875F", "#D78787", "#D787AF", "#D787D7", "#D787FF", "#D7AF00", "#D7AF5F", "#D7AF87", "#D7AFAF", "#D7AFD7", "#D7AFFF", "#D7D700", "#D7D75F", "#D7D787", "#D7D7AF", "#D7D7D7", "#D7D7FF", "#D7FF00", "#D7FF5F", "#D7FF87", "#D7FFAF", "#D7FFD7", "#D7FFFF", "#FF0000", "#FF005F", "#FF0087", "#FF00AF", "#FF00D7", "#FF00FF", "#FF5F00", "#FF5F5F", "#FF5F87", "#FF5FAF", "#FF5FD7", "#FF5FFF", "#FF8700", "#FF875F", "#FF8787", "#FF87AF", "#FF87D7", "#FF87FF", "#FFAF00", "#FFAF5F", "#FFAF87", "#FFAFAF", "#FFAFD7", "#FFAFFF", "#FFD700", "#FFD75F", "#FFD787", "#FFD7AF", "#FFD7D7", "#FFD7FF", "#FFFF00", "#FFFF5F", "#FFFF87", "#FFFFAF", "#FFFFD7", "#FFFFFF", "#080808", "#121212", "#1C1C1C", "#262626", "#303030", "#3A3A3A", "#444444", "#4E4E4E", "#585858", "#626262", "#6C6C6C", "#767676", "#808080", "#8A8A8A", "#949494", "#9E9E9E", "#A8A8A8", "#B2B2B2", "#BCBCBC", "#C6C6C6", "#D0D0D0", "#DADADA", "#E4E4E4", "#EEEEEE"]
        },
        from_ansi: function() {
            function b(b) {
                var e, f = b.split(";"),
                    g = !1,
                    h = !1,
                    i = !1,
                    j = [],
                    k = "",
                    l = "",
                    m = !1,
                    n = !1,
                    o = !1,
                    p = a.terminal.ansi_colors.palette;
                for (var q in f) {
                    switch (e = parseInt(f[q], 10)) {
                        case 1:
                            j.push("b"), i = !0, g = !1;
                            break;
                        case 4:
                            j.push("u");
                            break;
                        case 3:
                            j.push("i");
                            break;
                        case 5:
                            o = !0;
                            break;
                        case 38:
                            m = !0;
                            break;
                        case 48:
                            n = !0;
                            break;
                        case 2:
                            g = !0, i = !1;
                            break;
                        case 7:
                            h = !0;
                            break;
                        default:
                            m && o && p[e - 1] ? k = p[e - 1] : c[e] && (k = c[e]), n && o && p[e - 1] ? l = p[e - 1] : d[e] && (l = d[e])
                    }
                    5 !== e && (o = !1)
                }
                if (h)
                    if (k && l) {
                        var r = l;
                        l = k, k = r
                    } else k = "black", l = "white";
                var s, t;
                return s = t = i ? a.terminal.ansi_colors.bold : g ? a.terminal.ansi_colors.faited : a.terminal.ansi_colors.normal, [j.join(""), m ? k : s[k], n ? l : t[l]]
            }
            var c = {
                    30: "black",
                    31: "red",
                    32: "green",
                    33: "yellow",
                    34: "blue",
                    35: "magenta",
                    36: "cyan",
                    37: "white",
                    39: "white"
                },
                d = {
                    40: "black",
                    41: "red",
                    42: "green",
                    43: "yellow",
                    44: "blue",
                    45: "magenta",
                    46: "cyan",
                    47: "white",
                    49: "black"
                };
            return function(a) {
                var c = a.split(/(\x1B\[[0-9;]*[A-Za-z])/g);
                if (1 == c.length) return a;
                var d = [];
                c.length > 3 && "[0m" == c.slice(0, 3).join("") && (c = c.slice(3));
                for (var e, f, g, h, i = !1, j = 0; j < c.length; ++j)
                    if (h = c[j].match(/^\x1B\[([0-9;]*)([A-Za-z])$/)) switch (h[2]) {
                        case "m":
                            if ("" === h[1]) continue;
                            "0" !== h[1] && (g = b(h[1])), i ? (d.push("]"), "0" == h[1] ? (i = !1, e = f = "") : (g[1] = g[1] || e, g[2] = g[2] || f, d.push("[[" + g.join(";") + "]"), g[1] && (e = g[1]), g[2] && (f = g[2]))) : "0" != h[1] && (i = !0, d.push("[[" + g.join(";") + "]"), g[1] && (e = g[1]), g[2] && (f = g[2]))
                    } else d.push(c[j]);
                return i && d.push("]"), d.join("")
            }
        }(),
        parseArguments: function(b) {
            return a.map(b.match(E) || [], function(a) {
                if ("'" === a[0] && "'" === a[a.length - 1]) return a.replace(/^'|'$/g, "");
                if ('"' === a[0] && '"' === a[a.length - 1]) return a = a.replace(/^"|"$/g, "").replace(/\\([" ])/g, "$1"), a.replace(/\\\\|\\t|\\n/g, function(a) {
                    return "t" === a[1] ? "	" : "n" === a[1] ? "\n" : "\\"
                }).replace(/\\x([0-9a-f]+)/gi, function(a, b) {
                    return String.fromCharCode(parseInt(b, 16))
                }).replace(/\\0([0-7]+)/g, function(a, b) {
                    return String.fromCharCode(parseInt(b, 8))
                });
                if (a.match(/^\/(\\\/|[^\/])+\/[gimy]*$/)) {
                    var b = a.match(/^\/([^\/]+)\/([^\/]*)$/);
                    return new RegExp(b[1], b[2])
                }
                return a.match(/^-?[0-9]+$/) ? parseInt(a, 10) : a.match(/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/) ? parseFloat(a) : a.replace(/\\ /g, " ")
            })
        },
        splitArguments: function(b) {
            return a.map(b.match(E) || [], function(a) {
                return "'" === a[0] && "'" === a[a.length - 1] ? a.replace(/^'|'$/g, "") : '"' === a[0] && '"' === a[a.length - 1] ? a.replace(/^"|"$/g, "").replace(/\\([" ])/g, "$1") : "/" === a[0] && "/" == a[a.length - 1] ? a : a.replace(/\\ /g, " ")
            })
        },
        parseCommand: function(b) {
            return o(b, a.terminal.parseArguments)
        },
        splitCommand: function(b) {
            return o(b, a.terminal.splitArguments)
        },
        test: function() {
            function b(a, b) {
                c.echo(b + " &#91;" + (a ? "[[b;#44D544;]PASS]" : "[[b;#FF5555;]FAIL]") + "&#93;")
            }
            var c = a.terminal.active();
            if (!c) {
                c = a("body").terminal(a.noop).css("margin", 0);
                var d = (c.outerHeight() - c.height(), a(window));
                d.resize(function() {
                    c.css("height", a(window).height() - 20)
                }).resize()
            }
            c.echo("Testing...");
            var e = 'name "foo bar" baz /^asd [x]/ str\\ str 10 1e10',
                f = a.terminal.splitCommand(e);
            b("name" === f.name && "foo bar" === f.args[0] && "baz" === f.args[1] && "/^asd [x]/" === f.args[2] && "str str" === f.args[3] && "10" === f.args[4] && "1e10" === f.args[5], "$.terminal.splitCommand"), f = a.terminal.parseCommand(e), b("name" === f.name && "foo bar" === f.args[0] && "baz" === f.args[1] && "regexp" === a.type(f.args[2]) && "^asd [x]" === f.args[2].source && "str str" === f.args[3] && 10 === f.args[4] && 1e10 === f.args[5], "$.terminal.parseCommand"), e = "[2;31;46mFoo[1;3;4;32;45mBar[0m[7mBaz", b("[[;#640000;#008787]Foo][[biu;#44D544;#F5F]Bar][[;#000;#AAA]Baz]" === a.terminal.from_ansi(e), "$.terminal.from_ansi"), e = "[[biugs;#fff;#000]Foo][[i;;;foo]Bar][[ous;;]Baz]", c.echo("$.terminal.format"), b('<span style="font-weight:bold;text-decoration:underline line-through;font-style:italic;color:#fff;text-shadow:0 0 5px #fff;background-color:#000" data-text="Foo">Foo</span><span style="font-style:italic;" class="foo" data-text="Bar">Bar</span><span style="text-decoration:underline line-through overline;" data-text="Baz">Baz</span>' === a.terminal.format(e), "	formatting"), e = "http://terminal.jcubic.pl/examples.php https://www.google.com/?q=jquery%20terminal", b('<a target="_blank" href="http://terminal.jcubic.pl/examples.php">http://terminal.jcubic.pl/examples.php</a> <a target="_blank" href="https://www.google.com/?q=jquery%20terminal">https://www.google.com/?q=jquery%20terminal</a>' === a.terminal.format(e), "	urls"), e = "foo@bar.com baz.quux@example.com", b('<a href="mailto:foo@bar.com">foo@bar.com</a> <a href="mailto:baz.quux@example.com">baz.quux@example.com</a>' === a.terminal.format(e), "	emails"), e = "-_-[[biugs;#fff;#000]Foo]-_-[[i;;;foo]Bar]-_-[[ous;;]Baz]-_-", b("-_-Foo-_-Bar-_-Baz-_-" === a.terminal.strip(e), "$.terminal.strip"), e = "[[bui;#fff;]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed dolor nisl, in suscipit justo. Donec a enim et est porttitor semper at vitae augue. Proin at nulla at dui mattis mattis. Nam a volutpat ante. Aliquam consequat dui eu sem convallis ullamcorper. Nulla suscipit, massa vitae suscipit ornare, tellus] est [[b;;#f00]consequat nunc, quis blandit elit odio eu arcu. Nam a urna nec nisl varius sodales. Mauris iaculis tincidunt orci id commodo. Aliquam] non magna quis [[i;;]tortor malesuada aliquam] eget ut lacus. Nam ut vestibulum est. Praesent volutpat tellus in eros dapibus elementum. Nam laoreet risus non nulla mollis ac luctus [[ub;#fff;]felis dapibus. Pellentesque mattis elementum augue non sollicitudin. Nullam lobortis fermentum elit ac mollis. Nam ac varius risus. Cras faucibus euismod nulla, ac auctor diam rutrum sit amet. Nulla vel odio erat], ac mattis enim.", c.echo("$.terminal.split_equal");
            for (var g = [10, 40, 60, 400], h = g.length; h--;) {
                for (var i = a.terminal.split_equal(e, g[h]), j = !0, k = 0; k < i.length; ++k)
                    if (a.terminal.strip(i[k]).length > g[h]) {
                        j = !1;
                        break
                    }
                b(j, "	split " + g[h])
            }
        }
    }, a.fn.visible = function() {
        return this.css("visibility", "visible")
    }, a.fn.hidden = function() {
        return this.css("visibility", "hidden")
    };
    var H = {};
    a.jrpc = function(b, c, d, e, f) {
        H[b] = H[b] || 0;
        var g = a.json_stringify({
            jsonrpc: "2.0",
            method: c,
            params: d,
            id: ++H[b]
        });
        return a.ajax({
            url: b,
            data: g,
            success: function(b, c, d) {
                var g = d.getResponseHeader("Content-Type");
                if (!g.match(/application\/json/)) {
                    if (!console || !console.warn) throw new Error("WARN: Response Content-Type is not application/json");
                    console.warn("Response Content-Type is not application/json")
                }
                var h;
                try {
                    h = a.parseJSON(b)
                } catch (i) {
                    if (!f) throw new Error("Invalid JSON");
                    return f(d, "Invalid JSON", i), void 0
                }
                e(h, c, d)
            },
            error: f,
            contentType: "application/json",
            dataType: "text",
            async: !0,
            cache: !1,
            type: "POST"
        })
    };
    var I = "0.8.8",
        J = !I.match(/^\{\{/),
        K = "Copyright (c) 2011-2013 Jakub Jankiewicz <http://jcubic.pl>",
        L = J ? " version " + I : " ",
        M = new RegExp(" {" + L.length + "}$"),
        N = [
            ["jQuery Terminal", "(c) 2011-2013 jcubic"],
            ["jQuery Terminal Emulator" + (J ? " v. " + I : ""), K.replace(/ *<.*>/, "")],
            ["jQuery Terminal Emulator" + (J ? L : ""), K.replace(/^Copyright /, "")],
            ["      _______                 ________                        __", "     / / _  /_ ____________ _/__  ___/______________  _____  / /", " __ / / // / // / _  / _/ // / / / _  / _/     / /  \\/ / _ \\/ /", "/  / / // / // / ___/ // // / / / ___/ // / / / / /\\  / // / /__", "\\___/____ \\\\__/____/_/ \\__ / /_/____/_//_/ /_/ /_/  \\/\\__\\_\\___/", "         \\/          /____/                                   ".replace(M, " ") + L, K],
            ["      __ _____                     ________                              __", "     / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /", " __ / // // // // // _  // _// // / / // _  // _//     // //  \\/ // _ \\/ /", "/  / // // // // // ___// / / // / / // ___// / / / / // // /\\  // // / /__", "\\___//____ \\\\___//____//_/ _\\_  / /_//____//_/ /_/ /_//_//_/ /_/ \\__\\_\\___/", "          \\/              /____/                                          ".replace(M, "") + L, K]
        ];
    a.terminal.defaults = {
        prompt: "> ",
        history: !0,
        exit: !0,
        clear: !0,
        enabled: !0,
        historySize: 60,
        checkArity: !0,
        exceptionHandler: null,
        cancelableAjax: !0,
        processArguments: !0,
        linksNoReferrer: !1,
        login: null,
        outputLimit: -1,
        onAjaxError: null,
        onRPCError: null,
        completion: !1,
        historyFilter: null,
        onInit: a.noop,
        onClear: a.noop,
        onBlur: a.noop,
        onFocus: a.noop,
        onTerminalChange: a.noop,
        onExit: a.noop,
        keypress: a.noop,
        keydown: a.noop,
        strings: {
            wrongPasswordTryAgain: "Wrong password try again!",
            wrongPassword: "Wrong password!",
            ajaxAbortError: "Error while aborting ajax call!",
            wrongArity: "Wrong number of arguments. Function '%s' expect %s got %s!",
            commandNotFound: "Command '%s' Not Found!",
            oneRPCWithIgnore: "You can use only one rpc with ignoreSystemDescribe",
            oneInterpreterFunction: "You can't use more then one function (rpc with ignoreSystemDescribe is count as one)",
            loginFunctionMissing: "You don't have login function",
            noTokenError: "Access denied (no token)",
            serverResponse: "Server reponse is",
            wrongGreetings: "Wrong value of greetings parameter",
            notWhileLogin: "You can't call that function while in login",
            loginIsNotAFunction: "Authenticate must be a function",
            canExitError: "You can't exit from main interpeter",
            invalidCompletion: "Invalid completion",
            login: "login",
            password: "password"
        }
    };
    var O = [],
        P = new j;
    a.fn.terminal = function(c, d) {
        function e(b) {
            return "function" == typeof db.processArguments ? o(b, db.processArguments) : db.processArguments ? a.terminal.parseCommand(b) : a.terminal.splitCommand(b)
        }

        function f(b) {
            "string" == typeof b ? R.echo(b) : b instanceof Array ? R.echo(a.map(b, function(b) {
                return a.json_stringify(b)
            }).join(" ")) : "object" == typeof b ? R.echo(a.json_stringify(b)) : R.echo(b)
        }

        function g(a) {
            "function" == typeof db.onRPCError ? db.onRPCError.call(R, a) : R.error("&#91;RPC&#93; " + a.message)
        }

        function h(b) {
            var c = function(c, d) {
                R.pause(), a.jrpc(b, c, d, function(a) {
                    a.error ? g(a.error) : "function" == typeof db.processRPCResponse ? db.processRPCResponse.call(R, a.result) : f(a.result), R.resume()
                }, j)
            };
            return function(a, b) {
                if ("" !== a)
                    if (a = e(a), db.login && "help" !== a.name) {
                        var d = b.token();
                        d ? c(a.name, [d].concat(a.args)) : b.error("&#91;AUTH&#93; " + eb.noTokenError)
                    } else c(a.name, a.args)
            }
        }

        function i(c, d, f) {
            return function(g, h) {
                if ("" !== g) {
                    var j = e(g),
                        k = c[j.name],
                        l = a.type(k);
                    if ("function" === l) {
                        if (!d || k.length === j.args.length) return k.apply(R, j.args);
                        R.error("&#91;Arity&#93; " + sprintf(eb.wrongArity, j.name, k.length, j.args.length))
                    } else if ("object" === l || "string" === l) {
                        var m = [];
                        "object" === l && (m = Object.keys(k), k = i(k, d)), h.push(k, {
                            prompt: j.name + "> ",
                            name: j.name,
                            completion: "object" === l ? function(a, b, c) {
                                c(m)
                            } : b
                        })
                    } else "function" === a.type(f) ? f(g, R) : "function" === a.type(db.onCommandNotFound) ? db.onCommandNotFound(g, R) : h.error(sprintf(eb.commandNotFound, j.name))
                }
            }
        }

        function j(a, b, c) {
            R.resume(), "function" == typeof db.onAjaxError ? db.onAjaxError.call(R, a, b, c) : "abort" !== b && R.error("&#91;AJAX&#93; " + b + " - " + eb.serverResponse + ": \n" + a.responseText)
        }

        function l(b, c, d) {
            a.jrpc(b, "system.describe", [], function(e) {
                if (e.procs) {
                    var h = {};
                    a.each(e.procs, function(d, e) {
                        h[e.name] = function() {
                            var d = c && "help" != e.name,
                                h = Array.prototype.slice.call(arguments),
                                i = h.length + (d ? 1 : 0);
                            db.checkArity && e.params && e.params.length !== i ? R.error("&#91;Arity&#93; " + sprintf(eb.wrongArity, e.name, e.params.length, i)) : (R.pause(), d && (h = [R.token(!0)].concat(h)), a.jrpc(b, e.name, h, function(a) {
                                a.error ? g(a.error) : f(a.result), R.resume()
                            }, j))
                        }
                    }), d(h)
                } else d(null)
            }, function() {
                d(null)
            })
        }

        function m(b, c, d) {
            d = d || a.noop;
            var e, f, g = a.type(b),
                j = {},
                k = 0;
            if ("array" === g) {
                var m = {};
                ! function n(b, d) {
                    if (b.length) {
                        var e = b[0],
                            g = b.slice(1),
                            i = a.type(e);
                        "string" === i ? (k++, R.pause(), db.ignoreSystemDescribe ? (1 === k ? f = h(e) : R.error(eb.oneRPCWithIgnore), n(g, d)) : l(e, c, function(b) {
                            b && a.extend(m, b), R.resume(), n(g, d)
                        })) : "function" === i ? f ? R.error(eb.oneInterpreterFunction) : f = e : "object" === i && (a.extend(m, e), n(g, d))
                    } else d()
                }(b, function() {
                    e = Object.keys(m), j.interpreter = i(m, !1, f), j.completion = function(a, b, c) {
                        c(e)
                    }, d(j)
                })
            } else if ("string" === g) db.ignoreSystemDescribe ? d({
                interpreter: h(b),
                completion: db.completion
            }) : (R.pause(), l(b, c, function(a) {
                if (a) {
                    var c = Object.keys(a);
                    j.interpreter = i(a, !1), j.completion = function(a, b, d) {
                        d(c)
                    }
                } else j.interpreter = h(b), j.completion = db.completion;
                R.resume(), d(j)
            }));
            else if ("object" === g) e = Object.keys(b), j.interpreter = i(b, db.checkArity), j.completion = function(a, b, c) {
                c(e)
            }, d(j);
            else {
                if ("undefined" === g) b = a.noop;
                else if ("function" !== g) throw g + " is invalid interpreter value";
                d({
                    interpreter: b,
                    completion: db.completion
                })
            }
        }

        function n(b, c) {
            var d = "boolean" === a.type(c) ? "login" : c;
            return function(c, e, f) {
                R.pause(), a.jrpc(b, d, [c, e], function(a) {
                    R.resume(), !a.error && a.result ? f(a.result) : f(null)
                }, j)
            }
        }

        function q(a) {
            return "string" == typeof a ? a : "string" == typeof a.fileName ? a.fileName + ": " + a.message : a.message
        }

        function v(a, b) {
            "function" == typeof db.exceptionHandler ? db.exceptionHandler.call(R, a) : R.exception(a, b)
        }

        function w() {
            var a = S.prop ? S.prop("scrollHeight") : S.attr("scrollHeight");
            S.scrollTop(a)
        }

        function x(a, b) {
            try {
                if ("function" == typeof b) b(function() {});
                else if ("string" != typeof b) {
                    var c = a + " must be string or function";
                    throw c
                }
            } catch (d) {
                return v(d, a.toUpperCase()), !1
            }
            return !0
        }

        function y(b, c) {
            try {
                var d = a.extend({
                    raw: !1,
                    finalize: a.noop
                }, c || {});
                b = "function" === a.type(b) ? b() : b, b = "string" === a.type(b) ? b : String(b);
                var e, f;
                if (d.raw || (b = a.terminal.encode(b)), b = a.terminal.overtyping(b), b = a.terminal.from_ansi(b), M.push(Q), !d.raw && (b.length > V || b.match(/\n/))) {
                    var g = a.terminal.split_equal(b, V);
                    for (e = 0, f = g.length; f > e; ++e) "" === g[e] || "\r" === g[e] ? M.push("&nbsp;") : d.raw ? M.push(g[e]) : M.push(a.terminal.format(g[e], {
                        linksNoReferer: db.linksNoReferer
                    }))
                } else d.raw || (b = a.terminal.format(b, {
                    linksNoReferer: db.linksNoReferer
                })), M.push(b);
                M.push(d.finalize)
            } catch (h) {
                M = [], alert("[Internal Exception(draw_line)]:" + q(h) + "\n" + h.stack)
            }
        }

        function z() {
            lb.resize(V);
            var b, c = U.empty().detach();
            if (db.outputLimit >= 0) {
                var d = 0 === db.outputLimit ? R.rows() : db.outputLimit;
                b = $.slice($.length - d - 1)
            } else b = $;
            a.each(b, function(a, b) {
                y.apply(null, b)
            }), lb.before(c), R.flush()
        }

        function A() {
            if (db.greetings === b) R.echo(R.signature);
            else if (db.greetings) {
                var a = typeof db.greetings;
                "string" === a ? R.echo(db.greetings) : "function" === a ? db.greetings.call(R, R.echo) : R.error(eb.wrongGreetings)
            }
        }

        function B(b) {
            b = a.terminal.escape_brackets(a.terminal.encode(b, !0));
            var c = lb.prompt();
            lb.mask() && (b = b.replace(/./g, "*")), "function" == typeof c ? c(function(a) {
                R.echo(a + b)
            }) : R.echo(c + b)
        }

        function C(c, d, e) {
            try {
                K() || (T = a.terminal.splitCommand(c).name, (e && "function" == typeof db.historyFilter && db.historyFilter(c) || !db.historyFilter) && lb.history().append(c));
                var f = kb.top();
                if ("exit" === c && db.exit) {
                    var g = kb.size();
                    R.token(), (1 == g && R.token() || g > 1) && (d || B(c), R.pop())
                } else {
                    d || B(c);
                    var h = $.length - 1;
                    if ("clear" === c && db.clear) R.clear();
                    else {
                        var i = f.interpreter(c, R);
                        i !== b && (h === $.length - 1 ? ($.pop(), i !== !1 && R.echo(i)) : $ = i === !1 ? $.slice(0, h).concat($.slice(h + 1)) : $.slice(0, h).concat([i]).concat($.slice(h + 1)), R.resize())
                    }
                }
            } catch (j) {
                throw v(j, "USER"), R.resume(), j
            }
        }

        function D() {
            if ("function" == typeof db.onBeforeLogout) try {
                if (db.onBeforeLogout(R) === !1) return
            } catch (a) {
                throw v(a, "onBeforeLogout"), a
            }
            if (E(), "function" == typeof db.onAfterLogout) try {
                db.onAfterLogout(R)
            } catch (a) {
                throw v(a, "onAfterlogout"), a
            }
            R.login(db.login, !0, H)
        }

        function E() {
            var b = R.prefix_name(!0) + "_";
            a.Storage.remove(b + "token"), a.Storage.remove(b + "login")
        }

        function F(b) {
            var c = R.prefix_name() + "_interpreters",
                d = a.Storage.get(c);
            d = d ? a.parseJSON(d) : [], -1 == a.inArray(b, d) && (d.push(b), a.Storage.set(c, a.json_stringify(d)))
        }

        function G(a) {
            var b = kb.top(),
                c = R.prefix_name(!0);
            K() || F(c), lb.name(c), "function" == typeof b.prompt ? lb.prompt(function(a) {
                b.prompt(a, R)
            }) : lb.prompt(b.prompt), lb.set(""), a || "function" != typeof b.onStart || b.onStart(R)
        }

        function H() {
            G(), A();
            var b = !1;
            if ("function" == typeof db.onInit) {
                bb = function() {
                    b = !0
                };
                try {
                    db.onInit(R)
                } catch (c) {
                    throw v(c, "OnInit"), c
                } finally {
                    bb = a.noop, b || R.resume()
                }
            }
        }

        function J(b, c, d) {
            var e = lb.get().substring(0, lb.position());
            if (e === b) {
                for (var f = new RegExp("^" + a.terminal.escape_regex(c)), g = [], h = d.length; h--;) f.test(d[h]) && g.push(d[h]);
                if (1 === g.length) R.insert(g[0].replace(f, "") + " ");
                else if (g.length > 1)
                    if (Z >= 2) B(b), R.echo(g.join("	")), Z = 0;
                    else {
                        var i, j = !1;
                        a: for (i = c.length; i < g[0].length; ++i) {
                            for (h = 1; h < g.length; ++h)
                                if (g[0].charAt(i) !== g[h].charAt(i)) break a;
                            j = !0
                        }
                        j && R.insert(g[0].slice(0, i).replace(f, ""))
                    }
            }
        }

        function K() {
            return ab || lb.mask()
        }

        function L(c) {
            var d, e, f = kb.top();
            if ("function" === a.type(f.keydown) && (d = f.keydown(c, R), d !== b)) return d;
            var g;
            if (g = db.completion && "boolean" != a.type(db.completion) && !f.completion ? db.completion : f.completion, R.oneTime(10, function() {
                    hb()
                }), "function" === a.type(db.keydown) && (d = db.keydown(c, R), d !== b)) return d;
            if (R.paused()) {
                if (68 === c.which && c.ctrlKey) {
                    if (O.length) {
                        for (e = O.length; e--;) {
                            var h = O[e];
                            if (4 !== h.readyState) try {
                                h.abort()
                            } catch (i) {
                                R.error(l.ajaxAbortError)
                            }
                        }
                        O = [], R.resume()
                    }
                    return !1
                }
            } else {
                if (9 !== c.which && (Z = 0), 68 === c.which && c.ctrlKey) return ab || ("" === lb.get() ? kb.size() > 1 || db.login !== b ? R.pop("") : (R.resume(), R.echo("")) : R.set_command("")), !1;
                if (76 === c.which && c.ctrlKey) R.clear();
                else {
                    if (g && 9 === c.which) {
                        ++Z;
                        var j, k = lb.get().substring(0, lb.position()),
                            l = k.split(" ");
                        if (1 == l.length) j = l[0];
                        else
                            for (j = l[l.length - 1], e = l.length - 1; e > 0 && "\\" == l[e - 1][l[e - 1].length - 1]; e--) j = l[e - 1] + " " + j;
                        switch (a.type(g)) {
                            case "function":
                                g(R, j, function(a) {
                                    J(k, j, a)
                                });
                                break;
                            case "array":
                                J(k, j, g);
                                break;
                            default:
                                throw new Error(a.terminal.defaults.strings.invalidCompletion)
                        }
                        return !1
                    }
                    if (86 === c.which && c.ctrlKey) return R.oneTime(1, function() {
                        w()
                    }), void 0;
                    if (9 === c.which && c.ctrlKey) {
                        if (P.length() > 1) return R.focus(!1), !1
                    } else 34 === c.which ? R.scroll(R.height()) : 33 === c.which ? R.scroll(-R.height()) : R.attr({
                        scrollTop: R.attr("scrollHeight")
                    })
                }
            }
        }
        var M = [],
            Q = 1,
            R = this;
        if (this.length > 1) return this.each(function() {
            a.fn.terminal.call(a(this), c, a.extend({
                name: R.selector
            }, d))
        });
        if (R.data("terminal")) return R.data("terminal");
        if (0 === R.length) throw 'Sorry, but terminal said that "' + R.selector + '" is not valid selector!';
        var S, T, U, V, W, X, Y, Z = 0,
            $ = [],
            _ = P.length(),
            ab = !1,
            bb = a.noop,
            cb = [],
            db = a.extend({}, a.terminal.defaults, {
                name: R.selector
            }, d || {}),
            eb = a.terminal.defaults.strings,
            fb = db.enabled,
            gb = !1;
        a.extend(R, a.omap({
            clear: function() {
                U.html(""), lb.set(""), $ = [];
                try {
                    db.onClear(R)
                } catch (a) {
                    throw v(a, "onClear"), a
                }
                return R.attr({
                    scrollTop: 0
                }), R
            },
            export_view: function() {
                if (ab) throw new Exception(eb.notWhileLogin);
                return {
                    prompt: R.get_prompt(),
                    command: R.get_command(),
                    position: lb.position(),
                    lines: $.slice(0)
                }
            },
            import_view: function(a) {
                if (ab) throw new Exception(eb.notWhileLogin);
                return R.set_prompt(a.prompt), R.set_command(a.command), lb.position(a.position), $ = a.lines, z(), R
            },
            exec: function(a, b) {
                return gb ? cb.push([a, b]) : C(a, b, !0), R
            },
            login: function(b, c, d, e) {
                if (ab) throw new Error(eb.notWhileLogin);
                if ("function" != typeof b) throw new Error(eb.loginIsNotAFunction);
                if (R.token(!0) && R.login_name(!0)) return "function" == typeof d && d(), R;
                return db.history && lb.history().disable(), ab = !0, R.push(function(f) {
                    R.set_mask(!0).push(function(g) {
                        try {
                            b.call(R, f, g, function(b, g) {
                                if (b) {
                                    R.pop().pop(), db.history && lb.history().enable();
                                    var h = R.prefix_name(!0) + "_";
                                    a.Storage.set(h + "token", b), a.Storage.set(h + "login", f), ab = !1, "function" == typeof d && d()
                                } else c ? (g || R.error(eb.wrongPasswordTryAgain), R.pop().set_mask(!1)) : (ab = !1, g || R.error(eb.wrongPassword), R.pop().pop()), "function" == typeof e && e()
                            })
                        } catch (h) {
                            v(h, "USER(authentication)")
                        }
                    }, {
                        prompt: eb.password + ": "
                    })
                }, {
                    prompt: eb.login + ": "
                })
            },
            settings: db,
            commands: function() {
                return kb.top().interpreter
            },
            setInterpreter: function(b, c) {
                function d() {
                    R.pause(), m(b, c, function(b) {
                        R.resume();
                        var c = kb.top();
                        a.extend(c, b), G(!0)
                    })
                }
                "string" == a.type(b) && c ? R.login(n(b, c), !0, d) : d()
            },
            greetings: function() {
                return A(), R
            },
            paused: function() {
                return gb
            },
            pause: function() {
                return bb(), !gb && lb && (gb = !0, R.disable(), lb.hidden()), R
            },
            resume: function() {
                if (gb && lb) {
                    gb = !1, R.enable(), lb.visible();
                    var a = cb;
                    for (cb = []; a.length;) R.exec.apply(R, a.shift());
                    w()
                }
                return R
            },
            cols: function() {
                return V
            },
            rows: function() {
                return W
            },
            history: function() {
                return lb.history()
            },
            next: function() {
                if (1 === P.length()) return R; {
                    var b = R.offset().top;
                    R.height(), R.scrollTop()
                }
                if (p(R)) {
                    P.front().disable();
                    var c = P.rotate().enable(),
                        d = c.offset().top - 50;
                    a("html,body").animate({
                        scrollTop: d
                    }, 500);
                    try {
                        db.onTerminalChange(c)
                    } catch (e) {
                        throw v(e, "onTerminalChange"), e
                    }
                    return c
                }
                return R.enable(), a("html,body").animate({
                    scrollTop: b - 50
                }, 500), R
            },
            focus: function(a, b) {
                return R.oneTime(1, function() {
                    if (1 === P.length())
                        if (a === !1) try {
                            b || db.onBlur(R) === !1 || R.disable()
                        } catch (c) {
                            throw v(c, "onBlur"), c
                        } else try {
                                b || db.onFocus(R) === !1 || R.enable()
                            } catch (c) {
                                throw v(c, "onFocus"), c
                            } else if (a === !1) R.next();
                            else {
                                var d = P.front();
                                if (d != R && (d.disable(), !b)) try {
                                    db.onTerminalChange(R)
                                } catch (c) {
                                    throw v(c, "onTerminalChange"), c
                                }
                                P.set(R), R.enable()
                            }
                }), R
            },
            enable: function() {
                return V === b && R.resize(), lb && (lb.enable(), fb = !0), R
            },
            disable: function() {
                return lb && (fb = !1, lb.disable()), R
            },
            enabled: function() {
                return fb
            },
            signature: function() {
                var a = R.cols(),
                    b = 15 > a ? null : 35 > a ? 0 : 55 > a ? 1 : 64 > a ? 2 : 75 > a ? 3 : 4;
                return null !== b ? N[b].join("\n") + "\n" : ""
            },
            version: function() {
                return I
            },
            cmd: function() {
                return lb
            },
            get_command: function() {
                return lb.get()
            },
            set_command: function(a) {
                return lb.set(a), R
            },
            insert: function(a) {
                if ("string" == typeof a) return lb.insert(a), R;
                throw "insert function argument is not a string"
            },
            set_prompt: function(a) {
                return x("prompt", a) && ("function" == typeof a ? lb.prompt(function(b) {
                    a(b, R)
                }) : lb.prompt(a), kb.top().prompt = a), R
            },
            get_prompt: function() {
                return kb.top().prompt
            },
            set_mask: function(a) {
                return lb.mask(a), R
            },
            get_output: function(b) {
                return b ? $ : a.map($, function(a) {
                    return "function" == typeof a[0] ? a[0]() : a[0]
                }).join("\n")
            },
            resize: function(a, b) {
                a && b && (R.width(a), R.height(b)), a = R.width(), b = R.height();
                var c = r(R),
                    d = s(R);
                return (c !== V || d !== W) && (V = c, W = d, z(), "function" != typeof db.onResize || Y === b && X === a || db.onResize(R), (Y !== b || X !== a) && (Y = b, X = a)), R
            },
            flush: function() {
                try {
                    var b;
                    if (a.each(M, function(c, d) {
                            if (d === Q) b = a("<div></div>");
                            else if ("function" == typeof d) {
                                b.appendTo(U);
                                try {
                                    d(b)
                                } catch (e) {
                                    v(e, "USER:echo(finalize)")
                                }
                            } else a("<div/>").html(d).appendTo(b).width("100%")
                        }), db.outputLimit >= 0) {
                        var c = 0 === db.outputLimit ? R.rows() : db.outputLimit,
                            d = U.find("div div");
                        if (d.length > c) {
                            var e = d.slice(0, $.length - c + 1),
                                f = e.parent();
                            e.remove(), f.each(function() {
                                var b = a(this);
                                b.is(":empty") && b.remove()
                            })
                        }
                    }
                    w(), M = []
                } catch (g) {
                    alert("[Flush] " + q(g) + "\n" + g.stack)
                }
                return R
            },
            echo: function(b, c) {
                try {
                    b = b || "";
                    var d = a.extend({
                        flush: !0,
                        raw: !1,
                        finalize: a.noop
                    }, c || {});
                    M = [], y(b, d), $.push([b, d]), d.flush && R.flush(), hb()
                } catch (e) {
                    alert("[Terminal.echo] " + q(e) + "\n" + e.stack)
                }
                return R
            },
            error: function(b, c) {
                return R.echo("[[;#f00;]" + a.terminal.escape_brackets(b).replace(/\\$/, "&#92;") + "]", c)
            },
            exception: function(b, c) {
                var d = q(b);
                c && (d = "&#91;" + c + "&#93;: " + d), d && R.error(d, {
                    finalize: function(a) {
                        a.addClass("exception message")
                    }
                }), "string" == typeof b.fileName && (R.pause(), a.get(b.fileName, function(a) {
                    R.resume();
                    var c = b.lineNumber - 1,
                        d = a.split("\n")[c];
                    d && R.error("&#91;" + b.lineNumber + "&#93;: " + d)
                })), b.stack && R.error(b.stack, {
                    finalize: function(a) {
                        a.addClass("exception stack-trace")
                    }
                })
            },
            scroll: function(a) {
                var b;
                return a = Math.round(a), S.prop ? (a > S.prop("scrollTop") && a > 0 && S.prop("scrollTop", 0), b = S.prop("scrollTop"), S.scrollTop(b + a)) : (a > S.attr("scrollTop") && a > 0 && S.attr("scrollTop", 0), b = S.attr("scrollTop"), S.scrollTop(b + a)), R
            },
            logout: db.login ? function() {
                for (; kb.size() > 1;) R.pop();
                return R.pop()
            } : function() {
                R.error(eb.loginFunctionMissing)
            },
            token: db.login ? function(b) {
                return a.Storage.get(R.prefix_name(b) + "_token")
            } : a.noop,
            login_name: db.login ? function(b) {
                return a.Storage.get(R.prefix_name(b) + "_login")
            } : a.noop,
            name: function() {
                return kb.top().name
            },
            prefix_name: function(a) {
                var b = (db.name ? db.name + "_" : "") + _;
                return a && kb.size() > 1 && (b += "_" + kb.map(function(a) {
                    return a.name
                }).slice(1).join("_")), b
            },
            push: function(b, c) {
                c = c || {}, c.name = c.name || T, c.prompt = c.prompt || c.name + " ";
                var d = kb.top();
                return d && (d.mask = lb.mask()), m(b, c.login, function(d) {
                    if (kb.push(a.extend({}, d, c)), c.login) {
                        var e = a.type(c.login);
                        "function" == e ? R.login(c.login, !1, G, R.pop) : ("string" == a.type(b) && "string" == e || "boolean" == e) && R.login(n(b, c.login), !1, G, R.pop)
                    } else G()
                }), R
            },
            pop: function(c) {
                c !== b && B(c);
                var d = R.token(!0);
                if (1 == kb.size())
                    if (db.login) {
                        if (D(), "function" === a.type(db.onExit)) try {
                            db.onExit(R)
                        } catch (e) {
                            throw v(e, "onExit"), e
                        }
                    } else R.error(eb.canExitError);
                else {
                    d && E();
                    var f = kb.pop();
                    if (G(), "function" === a.type(f.onExit)) try {
                        f.onExit(R)
                    } catch (e) {
                        throw v(e, "onExit"), e
                    }
                    R.set_mask(kb.top().mask)
                }
                return R
            },
            level: function() {
                return kb.size()
            },
            reset: function() {
                for (R.clear(); kb.size() > 1;) kb.pop();
                return H(), R
            },
            purge: function() {
                var b = R.prefix_name() + "_",
                    c = a.Storage.get(b + "interpreters");
                return a.each(a.parseJSON(c), function(b, c) {
                    a.Storage.remove(c + "_commands"), a.Storage.remove(c + "_token"), a.Storage.remove(c + "_login")
                }), lb.purge(), a.Storage.remove(b + "interpreters"), R
            },
            destroy: function() {
                return lb.destroy().remove(), U.remove(), a(document).unbind(".terminal"), a(window).unbind(".terminal"), R.unbind("click, mousewheel"), R.removeData("terminal").removeClass("terminal"), db.width && R.css("width", ""), db.height && R.css("height", ""), R
            }
        }, function(a, b) {
            return function() {
                try {
                    return b.apply(this, Array.prototype.slice.apply(arguments))
                } catch (c) {
                    throw "exec" !== a && "resume" !== a && v(c, "TERMINAL"), c
                }
            }
        }));
        var hb = function() {
            var a = u(R);
            return function() {
                a !== u(R) && (R.resize(), a = u(R))
            }
        }();
        if (db.width && R.width(db.width), db.height && R.height(db.height), S = navigator.userAgent.toLowerCase().match(/(webkit)[ \/]([\w.]+)/) || "body" != R[0].tagName.toLowerCase() ? R : a("html"), a(document).bind("ajaxSend.terminal", function(a, b) {
                O.push(b)
            }), U = a("<div>").addClass("terminal-output").appendTo(R), R.addClass("terminal"), ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) && (R.click(function() {
                R.find("textarea").focus()
            }), R.find("textarea").focus()), db.login && "function" == typeof db.onBeforeLogin) try {
            db.onBeforeLogin(R)
        } catch (ib) {
            throw v(ib, "onBeforeLogin"), ib
        }
        var jb = db.login;
        "string" != typeof c || "string" != typeof db.login && !db.login || (db.login = n(c, db.login)), P.append(R);
        var kb, lb;
        return m(c, jb, function(c) {
            if (kb = new k(a.extend({
                    name: db.name,
                    prompt: db.prompt,
                    greetings: db.greetings
                }, c)), lb = a("<div/>").appendTo(R).cmd({
                    prompt: db.prompt,
                    history: db.history,
                    historyFilter: db.historyFilter,
                    historySize: db.historySize,
                    width: "100%",
                    keydown: L,
                    keypress: db.keypress ? function(a) {
                        return db.keypress(a, R)
                    } : null,
                    onCommandChange: function(b) {
                        if ("function" === a.type(db.onCommandChange)) try {
                            db.onCommandChange(b, R)
                        } catch (c) {
                            throw v(c, "onCommandChange"), c
                        }
                        w()
                    },
                    commands: C
                }), fb ? R.focus(b, !0) : R.disable(), a(document).bind("click.terminal", function(b) {
                    a(b.target).closest(".terminal").hasClass("terminal") || db.onBlur(R) === !1 || R.disable()
                }), R.click(function() {
                    R.enabled() || R.focus()
                }).mousedown(function(a) {
                    2 == a.which && R.insert(t())
                }), db.login ? R.login(db.login, !0, H) : H(), R.is(":visible") && (V = r(R), lb.resize(V), W = s(R)), R.oneTime(100, function() {
                    a(window).bind("resize.terminal", function() {
                        if (R.is(":visible")) {
                            var a = R.width(),
                                b = R.height();
                            (Y !== b || X !== a) && R.resize()
                        }
                    })
                }), a.event.special.mousewheel) {
                var d = !1;
                a(document).bind("keydown.terminal", function(a) {
                    a.shiftKey && (d = !0)
                }).bind("keyup.terminal", function(a) {
                    (a.shiftKey || 16 == a.which) && (d = !1)
                }), R.mousewheel(function(a, b) {
                    d || (b > 0 ? R.scroll(-40) : R.scroll(40))
                })
            }
        }), R.data("terminal", R), R
    }
}(jQuery);
var initializeMap = function(a, b, c, d) {
    function e(a) {
        return $.extend(!0, {}, a)
    }

    function f(a) {
        return this instanceof f ? (this._e = new Float32Array(9), a ? this._e.set(a) : this._e[0] = this._e[4] = this._e[8] = 1, void 0) : new f(a)
    }

    function g(a) {
        return this instanceof g ? (this._e = new Float32Array(3), a ? this._e.set(a) : this._e[2] = 1, void 0) : new g(a)
    }

    function h(a, b, c) {
        return Math.max(b, Math.min(a, c))
    }

    function i() {
        var a = $("#mapcontainer"),
            b = I.data("matrix").inv(),
            c = b.mul(g([a.width() / 2, a.height() / 2, 1])),
            d = C[H.location.z],
            e = {
                x: h(c.x(), 0, d.width * A),
                y: h(c.y(), 0, d.height * A)
            };
        (e.x != c.x() || e.y != c.y()) && (H.location = j(e), n(e))
    }

    function j(a) {
        return {
            x: Math.floor(a.x / A) + C[H.location.z].offset.x,
            y: C[H.location.z].height + 1 - C[H.location.z].offset.y - Math.floor(a.y / A),
            z: H.location.z
        }
    }

    function k(a) {
        return {
            x: (a.x - C[H.location.z].offset.x) * A,
            y: (C[H.location.z].height + 1 - C[H.location.z].offset.y - a.y) * A
        }
    }

    function l(a, b, c) {
        var d = I.parent().offset();
        H.zoom = h(H.zoom + c, E, F), o({
            x: a - d.left,
            y: b - d.top
        }), v()
    }

    function m(a, b) {
        void 0 === a.z && (a.z = H.location.z), a.z != H.location.z && (t(a.z), b = !0);
        var c = k(a);
        c.x += A / 2, c.y += A / 2, n(c, b), H.location = a, v(), $("#mapcontainer .loading").remove(), $("#map").show()
    }

    function n(a, b) {
        var c = $("#mapcontainer").width(),
            d = $("#mapcontainer").height(),
            e = f.translate(Math.floor(c / 2), Math.floor(d / 2)).scale(H.zoom / 100).translate(-a.x, -a.y);
        I.data("matrix", e), I.css({
            transitionDuration: b ? "0" : "0.5s",
            transform: e.toCssMatrix()
        })
    }

    function o(a) {
        var b = I.data("matrix");
        void 0 === a && (a = {
            x: $("#mapcontainer").width() / 2,
            y: $("#mapcontainer").height() / 2
        });
        var c = (new g([a.x, a.y, 1]), H.zoom / 100 / b.e(0));
        1 != c && (b = f.translate(a.x, a.y).scale(c).translate(-a.x, -a.y).mul(b), I.data("matrix", b), I.css({
            transitionProperty: "transform",
            transitionDuration: "0.0s",
            transform: b.toCssMatrix()
        }), $("#zoomInfo").text(H.zoom / 100), i())
    }

    function p(a) {
        a.preventDefault(), I.css({
            transition: "none"
        }), I._isDragging = !0;
        var b = I.data("matrix"),
            c = b.e(6),
            d = b.e(7);
        $(document).off(".mapdrag").on("mousemove.mapdrag", function(e) {
            e.preventDefault(), b.e(6, c + e.pageX - a.pageX), b.e(7, d + e.pageY - a.pageY), I.data("matrix", b), I.css({
                transform: b.toCssMatrix()
            })
        }).on("mouseup.mapdrag", function(a) {
            a.preventDefault(), $(this).off(".mapdrag"), I._isDragging = !1, v(), i()
        })
    }

    function q() {
        var a = $("#mapcontainer"),
            b = I.data("matrix").inv(),
            c = b.mul(g([a.width() / 2, a.height() / 2, 1]));
        return j({
            x: c.x(),
            y: c.y()
        })
    }

    function r() {
        if ($(".highlight").remove(), "undefined" != typeof G) {
            var a = G[H.location.z];
            if (!a) return;
            for (var b = 0; b < a.length; ++b) {
                var c = k({
                    x: a[b][1],
                    y: a[b][2]
                });
                $('<div class="highlight"/>').css({
                    left: c.x,
                    top: c.y
                }).appendTo(I)
            }
        }
    }

    function s() {
        "undefined" != typeof d && (G = $.parseJson(mapData), r())
    }

    function t(c) {
        if (void 0 !== C[c]) {
            $("#mapcontainer").append('<span class="loading" />'), I.width(C[c].width * A), I.height(C[c].height * A);
            var d = $("#tiles");
            d.empty();
            for (var e = Math.ceil(C[c].width / B), f = Math.ceil(C[c].height / B), g = B * A, h = C[c].height % B * A || g, i = C[c].width % B * A || g, j = 3 == c ? "cogmap2" : b, k = 0; e > k; ++k)
                for (var l = 0; f > l; ++l) d.append($($.parseHTML("<img/>")).attr({
                    src: "Files/Map/" + l + "" + k + ".png"
                }).css({
                    left: k * g,
                    top: l * g,
                    width: k + 1 == e ? i : g,
                    height: l + 1 == f ? h : g,
                    background: "url(Files/loading.gif) 50% 50% no-repeat"
                }).on("load", function() {
                    $(this).css({
                        background: "transparent"
                    })
                }));
            H.location.z = c, r(), $("#z").val(c), $("#zoomInfo").text(H.zoom / 100)
        }
    }

    function u() {
        var a = $("#z"),
            b = $("#bfz");
        $.each(C, function(c, d) {
            if (void 0 === d) return !0;
            var e = $("<option/>");
            e.val(c), e.clone().text(d.name + " (+" + C[c].offset.z + ")").appendTo(b), d.src ? e.text(d.name) : (e.text(d.name + " (map missing)"), e.prop("disabled", !0)), e.appendTo(a)
        })
    }

    function v() {
        H.location = q(), history.replaceState(H, "", x(H))
    }

    function w(a, b) {
        a.location || (a.location = e(D.location)), H.zoom = a.zoom, m(a.location, b)
    }

    function x(a) {
        var b = "#l=" + a.location.x + "," + a.location.y + "," + a.location.z;
        return 100 != a.zoom && (b += ";z=" + a.zoom / 100), b
    }

    function y(a) {
        if (!a || "#" != a[0]) return void 0;
        a = a.slice(1);
        for (var b, c = {}, d = /([^=&;]+)(?:=([^&;]*))?/g; b = d.exec(a);) {
            var f = decodeURIComponent(b[1]),
                g = void 0 !== b[2] ? decodeURIComponent(b[2]) : void 0;
            c[f] = g
        }
        var i = e(D);
        if (c.l) {
            var j = c.l.split(",");
            i.location = {
                x: parseInt(j[0]),
                y: parseInt(j[1]),
                z: parseInt(j[2])
            }
        }
        return c.z && (i.zoom = h(100 * +c.z, E, F), $("#zoomInfo").text(i.zoom / 100)), i
    }

    function z(a, b) {
        var c = y(document.location.hash);
        c && void 0 === C[c.location.z] && (c.location.z = 1), w(c, b)
    }
    var A = 32,
        B = 37.5,
        C = [];
    $.each(c, function(a, b) {
        var c = {
            width: 300,
            height: 300,
            offset: {
                x: 1,
                y: 1
            },
            start: {
                x: 150,
                y: 150
            }
        };
        c.src = b + ".png";
        var d;
        switch (b) {
            case "z1":
                d = "Station";
                break;
            case "z2":
                d = "Restricted";
                break;
            case "z3":
                d = "Debris Field";
                break;
            case "z4":
                d = "Mining";
                break;
            case "z5":
                d = "Unknown"
        }
        c.name = d, C[b.substring(1)] = c
    });
    var D = {
            fixed: void 0,
            equation: {
                dx: 0 / 0,
                dy: 0 / 0,
                mx: 0 / 0,
                my: 0 / 0
            },
            location: {
                x: 0,
                y: 0,
                z: 0
            },
            zoom: 20
        },
        E = 20,
        F = 200,
        G = [];
    f.scale = function(a, b) {
        return void 0 === b && (b = a), new f([a, 0, 0, 0, b, 0, 0, 0, 1])
    }, f.translate = function(a, b) {
        return new f([1, 0, 0, 0, 1, 0, a, b, 1])
    }, f.prototype = {
        scale: function(a, b) {
            return this.mul(f.scale(a, b))
        },
        translate: function(a, b) {
            return this.mul(f.translate(a, b))
        },
        mul: function(a) {
            var b = this._e,
                c = a._e;
            if (a instanceof f) {
                var d = new f([b[0] * c[0] + b[3] * c[1] + b[6] * c[2], b[1] * c[0] + b[4] * c[1] + b[7] * c[2], b[2] * c[0] + b[5] * c[1] + b[8] * c[2], b[0] * c[3] + b[3] * c[4] + b[6] * c[5], b[1] * c[3] + b[4] * c[4] + b[7] * c[5], b[2] * c[3] + b[5] * c[4] + b[8] * c[5], b[0] * c[6] + b[3] * c[7] + b[6] * c[8], b[1] * c[6] + b[4] * c[7] + b[7] * c[8], b[2] * c[6] + b[5] * c[7] + b[8] * c[8]]);
                return d
            }
            return a instanceof g ? new g([b[0] * c[0] + b[3] * c[1] + b[6] * c[2], b[1] * c[0] + b[4] * c[1] + b[7] * c[2], b[2] * c[0] + b[5] * c[1] + b[8] * c[2]]) : new f([b[0] * a, b[1] * a, b[2] * a, b[3] * a, b[4] * a, b[5] * a, b[6] * a, b[7] * a, b[8] * a])
        },
        det: function() {
            var a = this._e;
            return a[0] * a[4] * a[8] + a[3] * a[7] * a[2] + a[6] * a[1] * a[5] - a[6] * a[4] * a[2] - a[3] * a[1] * a[8] - a[0] * a[7] * a[5]
        },
        inv: function() {
            var a = this._e,
                b = 1 / this.det();
            return new f([b * (a[4] * a[8] - a[7] * a[5]), b * (a[7] * a[2] - a[1] * a[8]), b * (a[1] * a[5] - a[4] * a[2]), b * (a[6] * a[5] - a[3] * a[8]), b * (a[0] * a[8] - a[6] * a[2]), b * (a[3] * a[2] - a[0] * a[5]), b * (a[3] * a[7] - a[6] * a[4]), b * (a[6] * a[1] - a[0] * a[7]), b * (a[0] * a[4] - a[3] * a[1])])
        },
        toCssMatrix: function(a) {
            var b = this._e;
            if (0 != b[2] || 0 != b[5] || 1 != b[8]) throw console.log(this), "Non-affine matrix cannot be used in CSS";
            return a || Math.floor(b[0]) != b[0] ? "matrix(" + [b[0], b[1], b[3], b[4], b[6], b[7]].join(",") + ")" : "matrix(" + [b[0], b[1], b[3], b[4], Math.floor(b[6]), Math.floor(b[7])].join(",") + ")"
        }
    }, g.prototype = {
        mul: function(a) {
            var b = this._e;
            return new g([b[0] * a, b[1] * a, b[2] * a])
        },
        x: function(a) {
            return void 0 !== a && (this._e[0] = a), this._e[0]
        },
        y: function(a) {
            return void 0 !== a && (this._e[1] = a), this._e[1]
        },
        z: function(a) {
            return void 0 !== a && (this._e[2] = a), this._e[2]
        }
    }, f.prototype.e = g.prototype.e = function(a, b) {
        return void 0 !== b && (this._e[a] = b), this._e[a]
    };
    var H = e(D),
        I = $("#map");
    I.on("mousewheel", function(a) {
        if (a.preventDefault(), !I._isDragging) {
            var b = a.delta || a.deltaY || a.originalEvent.wheelDelta;
            b = 10 * (0 > b ? -1 : 1), l(a.pageX, a.pageY, b)
        }
    }), I.on("dblclick", function(a) {
        a.preventDefault(), l(a.pageX, a.pageY, 20)
    }), I.on("mousedown", p), $("#z").on("change", function() {
        var a = e(H.location);
        a.z = $(this).val(), m(a)
    }), $("#zoomIn").click(function(a) {
        a.preventDefault(), H.zoom != F && (H.zoom = h(H.zoom + 20, E, F), o(), v())
    }), $("#zoomOut").click(function(a) {
        a.preventDefault(), H.zoom != E && (H.zoom = h(H.zoom - 20, E, F), o(), v())
    }), $(window).on("hashchange", function() {
        z(window.location.hash)
    }), u(), s(), t(1), window.location.hash ? z(window.location.hash, !0) : m(C[H.location.z].start)
};
! function(a, b) {
    a.fn.extend({
        scrollspy: function(c) {
            var d = {
                    min: 0,
                    max: 0,
                    mode: "vertical",
                    buffer: 0,
                    container: b,
                    onEnter: c.onEnter ? c.onEnter : [],
                    onLeave: c.onLeave ? c.onLeave : [],
                    onTick: c.onTick ? c.onTick : []
                },
                c = a.extend({}, d, c);
            return this.each(function() {
                var b = this,
                    d = c,
                    e = a(d.container),
                    f = d.mode,
                    g = d.buffer,
                    h = 0,
                    i = h,
                    j = !1;
                e.bind("scroll", function() {
                    var c = {
                            top: a(this).scrollTop(),
                            left: a(this).scrollLeft()
                        },
                        k = "vertical" == f ? c.top + g : c.left + g,
                        l = d.max,
                        m = d.min;
                    a.isFunction(d.max) && (l = d.max()), a.isFunction(d.min) && (m = d.min()), 0 == l && (l = "vertical" == f ? e.height() : e.outerWidth() + a(b).outerWidth()), k >= m && l >= k ? (j || (j = !0, i++, a(b).trigger("scrollEnter", {
                        position: c
                    }), a.isFunction(d.onEnter) && d.onEnter(b, c)), a(b).trigger("scrollTick", {
                        position: c,
                        inside: j,
                        enters: i,
                        leaves: h
                    }), a.isFunction(d.onTick) && d.onTick(b, c, j, i, h)) : j && (j = !1, h++, a(b).trigger("scrollLeave", {
                        position: c,
                        leaves: h
                    }), a.isFunction(d.onLeave) && d.onLeave(b, c))
                })
            })
        }
    })
}(jQuery, window),
function(a) {
    a.fn.extend({
        customSelect: function(b) {
            if ("undefined" == typeof document.body.style.maxHeight) return this;
            var c = {
                    customClass: "customSelect",
                    mapClass: !0,
                    mapStyle: !0
                },
                b = a.extend(c, b),
                d = b.customClass,
                e = function(b, c) {
                    var d = b.find(":selected"),
                        e = c.children(":first"),
                        g = d.html() || "&nbsp;";
                    e.html(g), d.attr("disabled") ? c.addClass(f("DisabledOption")) : c.removeClass(f("DisabledOption")), setTimeout(function() {
                        c.removeClass(f("Open")), a(document).off("mouseup." + f("Open"))
                    }, 60)
                },
                f = function(a) {
                    return d + a
                };
            return this.each(function() {
                var c = a(this),
                    g = a("<span />").addClass(f("Inner")),
                    h = a("<span />");
                c.after(h.append(g)), h.addClass(d), b.mapClass && h.addClass(c.attr("class")), b.mapStyle && h.attr("style", c.attr("style")), c.addClass("hasCustomSelect").on("update", function() {
                    e(c, h);
                    var a = parseInt(c.outerWidth(), 10) - (parseInt(h.outerWidth(), 10) - parseInt(h.width(), 10));
                    h.css({
                        display: "inline-block"
                    });
                    var b = h.outerHeight();
                    c.attr("disabled") ? h.addClass(f("Disabled")) : h.removeClass(f("Disabled")), g.css({
                        width: a,
                        display: "inline-block"
                    }), c.css({
                        "-webkit-appearance": "menulist-button",
                        width: h.outerWidth(),
                        position: "absolute",
                        opacity: 0,
                        height: b,
                        fontSize: h.css("font-size")
                    })
                }).on("change", function() {
                    h.addClass(f("Changed")), e(c, h)
                }).on("keyup", function(a) {
                    h.hasClass(f("Open")) ? (13 == a.which || 27 == a.which) && e(c, h) : (c.blur(), c.focus())
                }).on("mousedown", function() {
                    h.removeClass(f("Changed"))
                }).on("mouseup", function(b) {
                    h.hasClass(f("Open")) || (a("." + f("Open")).not(h).length > 0 && "undefined" != typeof InstallTrigger ? c.focus() : (h.addClass(f("Open")), b.stopPropagation(), a(document).one("mouseup." + f("Open"), function(b) {
                        b.target != c.get(0) && a.inArray(b.target, c.find("*").get()) < 0 ? c.blur() : e(c, h)
                    })))
                }).focus(function() {
                    h.removeClass(f("Changed")).addClass(f("Focus"))
                }).blur(function() {
                    h.removeClass(f("Focus") + " " + f("Open"))
                }).hover(function() {
                    h.addClass(f("Hover"))
                }, function() {
                    h.removeClass(f("Hover"))
                }).trigger("update")
            })
        }
    })
}(jQuery),
function(a, b, c) {
    function d(b, c) {
        this.callbacks = {
            hide: [],
            show: []
        }, this.checkInterval = null, this.content, this.$el = a(b), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = a.extend({}, j, c), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this.init()
    }

    function e(b, c) {
        var d = !0;
        return a.each(b, function(a) {
            return "undefined" == typeof c[a] || b[a] !== c[a] ? (d = !1, !1) : void 0
        }), d
    }

    function f() {
        return !l && k
    }

    function g() {
        var a = c.body || c.documentElement,
            b = a.style,
            d = "transition";
        if ("string" == typeof b[d]) return !0;
        v = ["Moz", "Webkit", "Khtml", "O", "ms"], d = d.charAt(0).toUpperCase() + d.substr(1);
        for (var e = 0; e < v.length; e++)
            if ("string" == typeof b[v[e] + d]) return !0;
        return !1
    }
    var h = "tooltipster",
        j = {
            animation: "fade",
            arrow: !0,
            arrowColor: "",
            autoClose: !0,
            content: null,
            contentAsHTML: !1,
            contentCloning: !0,
            delay: 200,
            fixedWidth: 0,
            maxWidth: 0,
            functionInit: function() {},
            functionBefore: function(a, b) {
                b()
            },
            functionReady: function() {},
            functionAfter: function() {},
            icon: "(?)",
            iconCloning: !0,
            iconDesktop: !1,
            iconTouch: !1,
            iconTheme: "tooltipster-icon",
            interactive: !1,
            interactiveTolerance: 350,
            offsetX: 0,
            offsetY: 0,
            onlyOne: !1,
            position: "top",
            positionTracker: !1,
            speed: 350,
            timer: 0,
            theme: "tooltipster-default",
            touchDevices: !0,
            trigger: "hover",
            updateAnimation: !0
        };
    d.prototype = {
        init: function() {
            var b = this;
            if (c.querySelector) {
                if (null !== b.options.content) b.setContent(b.options.content);
                else {
                    var d = b.$el.attr("title");
                    "undefined" == typeof d && (d = null), b.setContent(d)
                }
                var e = b.options.functionInit.call(b.$el, b.$el, b.content);
                "undefined" != typeof e && b.setContent(e), b.$el.removeAttr("title").addClass("tooltipstered"), !k && b.options.iconDesktop || k && b.options.iconTouch ? ("string" == typeof b.options.icon ? (b.$elProxy = a('<span class="' + b.options.iconTheme + '"></span>'), b.$elProxy.text(b.options.icon)) : b.$elProxy = b.options.iconCloning ? b.options.icon.clone(!0) : b.options.icon, b.$elProxy.insertAfter(b.$el)) : b.$elProxy = b.$el, "hover" == b.options.trigger ? (b.$elProxy.on("mouseenter." + b.namespace, function() {
                    (!f() || b.options.touchDevices) && (b.mouseIsOverProxy = !0, b.showTooltip())
                }).on("mouseleave." + b.namespace, function() {
                    (!f() || b.options.touchDevices) && (b.mouseIsOverProxy = !1)
                }), k && b.options.touchDevices && b.$elProxy.on("touchstart." + b.namespace, function() {
                    b.showTooltipNow()
                })) : "click" == b.options.trigger && b.$elProxy.on("click." + b.namespace, function() {
                    (!f() || b.options.touchDevices) && b.showTooltip()
                })
            }
        },
        showTooltip: function() {
            var a = this;
            "shown" != a.status && "appearing" != a.status && (a.options.delay ? a.timerShow = setTimeout(function() {
                ("click" == a.options.trigger || "hover" == a.options.trigger && a.mouseIsOverProxy) && a.showTooltipNow()
            }, a.options.delay) : a.showTooltipNow())
        },
        showTooltipNow: function(c) {
            var d = this;
            d.options.functionBefore.call(d.$el, d.$el, function() {
                if (d.enabled && null !== d.content) {
                    c && d.callbacks.show.push(c), d.callbacks.hide = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null, d.options.onlyOne && a(".tooltipstered").not(d.$el).each(function(b, c) {
                        var d = a(c),
                            e = d[h]("status"),
                            f = d[h]("option", "autoClose");
                        "hidden" !== e && "disappearing" !== e && f && d[h]("hide")
                    });
                    var e = function() {
                        d.status = "shown", a.each(d.callbacks.show, function(a, b) {
                            b.call(d.$el)
                        }), d.callbacks.show = []
                    };
                    if ("hidden" !== d.status) {
                        var f = 0;
                        "disappearing" === d.status ? (d.status = "appearing", g() ? (d.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + d.options.animation + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.stop().fadeIn(e)) : "shown" === d.status && e()
                    } else {
                        d.status = "appearing";
                        var f = d.options.speed,
                            i = "tooltipster-" + d.options.animation,
                            j = "-webkit-transition-duration: " + d.options.speed + "ms; -webkit-animation-duration: " + d.options.speed + "ms; -moz-transition-duration: " + d.options.speed + "ms; -moz-animation-duration: " + d.options.speed + "ms; -o-transition-duration: " + d.options.speed + "ms; -o-animation-duration: " + d.options.speed + "ms; -ms-transition-duration: " + d.options.speed + "ms; -ms-animation-duration: " + d.options.speed + "ms; transition-duration: " + d.options.speed + "ms; animation-duration: " + d.options.speed + "ms;",
                            l = d.options.fixedWidth > 0 ? "width:" + Math.round(d.options.fixedWidth) + "px;" : "",
                            m = d.options.maxWidth > 0 ? "max-width:" + Math.round(d.options.maxWidth) + "px;" : "",
                            n = d.options.interactive ? "pointer-events: auto;" : "";
                        if (d.$tooltip = a('<div class="tooltipster-base ' + d.options.theme + '" style="' + l + " " + m + " " + n + " " + j + '"><div class="tooltipster-content"></div></div>'), g() && d.$tooltip.addClass(i), d.insertContent(), d.$tooltip.appendTo("body"), d.positionTooltip(), d.options.functionReady.call(d.$el, d.$el, d.$tooltip), g() ? (d.$tooltip.addClass(i + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.css("display", "none").fadeIn(d.options.speed, e), d.setCheckInterval(), a(b).on("scroll." + d.namespace + " resize." + d.namespace, function() {
                                d.positionTooltip()
                            }), d.options.autoClose)
                            if (a("body").off("." + d.namespace), "hover" == d.options.trigger)
                                if (k && setTimeout(function() {
                                        a("body").on("touchstart." + d.namespace, function() {
                                            d.hideTooltip()
                                        })
                                    }, 0), d.options.interactive) {
                                    k && d.$tooltip.on("touchstart." + d.namespace, function(a) {
                                        a.stopPropagation()
                                    });
                                    var o = null;
                                    d.$elProxy.add(d.$tooltip).on("mouseleave." + d.namespace + "-autoClose", function() {
                                        clearTimeout(o), o = setTimeout(function() {
                                            d.hideTooltip()
                                        }, d.options.interactiveTolerance)
                                    }).on("mouseenter." + d.namespace + "-autoClose", function() {
                                        clearTimeout(o)
                                    })
                                } else d.$elProxy.on("mouseleave." + d.namespace + "-autoClose", function() {
                                    d.hideTooltip()
                                });
                        else "click" == d.options.trigger && (setTimeout(function() {
                            a("body").on("click." + d.namespace + " touchstart." + d.namespace, function() {
                                d.hideTooltip()
                            })
                        }, 0), d.options.interactive && d.$tooltip.on("click." + d.namespace + " touchstart." + d.namespace, function(a) {
                            a.stopPropagation()
                        }))
                    }
                    d.options.timer > 0 && (d.timerHide = setTimeout(function() {
                        d.timerHide = null, d.hideTooltip()
                    }, d.options.timer + f))
                }
            })
        },
        setCheckInterval: function() {
            var b = this;
            b.checkInterval = setInterval(function() {
                if (0 === a("body").find(b.$el).length || 0 === a("body").find(b.$elProxy).length || "hidden" == b.status || 0 === a("body").find(b.$tooltip).length)("shown" == b.status || "appearing" == b.status) && b.hideTooltip(), b.cancelCheckInterval();
                else if (b.options.positionTracker) {
                    var c = b.positionInfo(b.$elProxy),
                        d = !1;
                    e(c.dimension, b.elProxyPosition.dimension) && ("fixed" === b.$elProxy.css("position") ? e(c.position, b.elProxyPosition.position) && (d = !0) : e(c.offset, b.elProxyPosition.offset) && (d = !0)), d || b.positionTooltip()
                }
            }, 200)
        },
        cancelCheckInterval: function() {
            clearInterval(this.checkInterval), this.checkInterval = null
        },
        hideTooltip: function(c) {
            var d = this;
            c && d.callbacks.hide.push(c), d.callbacks.show = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null;
            var e = function() {
                a.each(d.callbacks.hide, function(a, b) {
                    b.call(d.$el)
                }), d.callbacks.hide = []
            };
            if ("shown" == d.status || "appearing" == d.status) {
                d.status = "disappearing";
                var f = function() {
                    d.status = "hidden", "object" == typeof d.content && null !== d.content && d.content.detach(), d.$tooltip.remove(), d.$tooltip = null, a(b).off("." + d.namespace), a("body").off("." + d.namespace), d.$elProxy.off("." + d.namespace + "-autoClose"), d.options.functionAfter.call(d.$el, d.$el), e()
                };
                g() ? (d.$tooltip.clearQueue().removeClass("tooltipster-" + d.options.animation + "-show").addClass("tooltipster-dying"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(f)) : d.$tooltip.stop().fadeOut(d.options.speed, f)
            } else "hidden" == d.status && e()
        },
        setContent: function(a) {
            "object" == typeof a && null !== a && this.options.contentCloning && (a = a.clone(!0)), this.content = a
        },
        insertContent: function() {
            var a = this,
                b = this.$tooltip.find(".tooltipster-content");
            "string" != typeof a.content || a.options.contentAsHTML ? b.empty().append(a.content) : b.text(a.content)
        },
        updateTooltip: function(a) {
            var b = this;
            b.setContent(a), null !== b.content ? "hidden" !== b.status && (b.insertContent(), b.positionTooltip(), b.options.updateAnimation && (g() ? (b.$tooltip.css({
                width: "",
                "-webkit-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-moz-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-o-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-ms-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                transition: "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
            }).addClass("tooltipster-content-changing"), setTimeout(function() {
                "hidden" != b.status && (b.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function() {
                    "hidden" !== b.status && b.$tooltip.css({
                        "-webkit-transition": b.options.speed + "ms",
                        "-moz-transition": b.options.speed + "ms",
                        "-o-transition": b.options.speed + "ms",
                        "-ms-transition": b.options.speed + "ms",
                        transition: b.options.speed + "ms"
                    })
                }, b.options.speed))
            }, b.options.speed)) : b.$tooltip.fadeTo(b.options.speed, .5, function() {
                "hidden" != b.status && b.$tooltip.fadeTo(b.options.speed, 1)
            }))) : b.hideTooltip()
        },
        positionInfo: function(a) {
            return {
                dimension: {
                    height: a.outerHeight(!1),
                    width: a.outerWidth(!1)
                },
                offset: a.offset(),
                position: {
                    left: parseInt(a.css("left")),
                    top: parseInt(a.css("top"))
                }
            }
        },
        positionTooltip: function() {
            function c() {
                var c = a(b).scrollLeft();
                0 > D - c && (f = D - c, D = c), D + j - c > g && (f = D - (g + c - j), D = g + c - j)
            }

            function d(c, d) {
                h.offset.top - a(b).scrollTop() - l - G - 12 < 0 && d.indexOf("top") > -1 && (I = c), h.offset.top + h.dimension.height + l + 12 + G > a(b).scrollTop() + a(b).height() && d.indexOf("bottom") > -1 && (I = c, F = h.offset.top - l - G - 12)
            }
            var e = this;
            if (0 !== a("body").find(e.$tooltip).length) {
                e.$tooltip.css("width", ""), e.elProxyPosition = e.positionInfo(e.$elProxy);
                var f = null,
                    g = a(b).width(),
                    h = e.elProxyPosition,
                    j = e.$tooltip.outerWidth(!1),
                    k = e.$tooltip.innerWidth() + 1,
                    l = e.$tooltip.outerHeight(!1);
                if (e.$elProxy.is("area")) {
                    var m = e.$elProxy.attr("shape"),
                        n = e.$elProxy.parent().attr("name"),
                        o = a('img[usemap="#' + n + '"]'),
                        p = o.offset().left,
                        q = o.offset().top,
                        r = void 0 !== e.$elProxy.attr("coords") ? e.$elProxy.attr("coords").split(",") : void 0;
                    if ("circle" == m) {
                        var s = parseInt(r[0]),
                            t = parseInt(r[1]),
                            u = parseInt(r[2]);
                        h.dimension.height = 2 * u, h.dimension.width = 2 * u, h.offset.top = q + t - u, h.offset.left = p + s - u
                    } else if ("rect" == m) {
                        var s = parseInt(r[0]),
                            t = parseInt(r[1]),
                            v = parseInt(r[2]),
                            w = parseInt(r[3]);
                        h.dimension.height = w - t, h.dimension.width = v - s, h.offset.top = q + t, h.offset.left = p + s
                    } else if ("poly" == m) {
                        var x = 0,
                            y = 0,
                            z = 0,
                            A = 0,
                            B = "even";
                        for (i = 0; i < r.length; i++) {
                            var C = parseInt(r[i]);
                            "even" == B ? (C > z && (z = C, 0 === i && (x = z)), x > C && (x = C), B = "odd") : (C > A && (A = C, 1 == i && (y = A)), y > C && (y = C), B = "even")
                        }
                        h.dimension.height = A - y, h.dimension.width = z - x, h.offset.top = q + y, h.offset.left = p + x
                    } else h.dimension.height = o.outerHeight(!1), h.dimension.width = o.outerWidth(!1), h.offset.top = q, h.offset.left = p
                }
                0 === e.options.fixedWidth && e.$tooltip.css({
                    width: Math.round(k) + "px",
                    "padding-left": "0px",
                    "padding-right": "0px"
                });
                var D = 0,
                    E = 0,
                    F = 0,
                    G = parseInt(e.options.offsetY),
                    H = parseInt(e.options.offsetX),
                    I = e.options.position;
                if ("top" == I) {
                    var J = h.offset.left + j - (h.offset.left + h.dimension.width);
                    D = h.offset.left + H - J / 2, F = h.offset.top - l - G - 12, c(), d("bottom", "top")
                }
                if ("top-left" == I && (D = h.offset.left + H, F = h.offset.top - l - G - 12, c(), d("bottom-left", "top-left")), "top-right" == I && (D = h.offset.left + h.dimension.width + H - j, F = h.offset.top - l - G - 12, c(), d("bottom-right", "top-right")), "bottom" == I) {
                    var J = h.offset.left + j - (h.offset.left + h.dimension.width);
                    D = h.offset.left - J / 2 + H, F = h.offset.top + h.dimension.height + G + 12, c(), d("top", "bottom")
                }
                if ("bottom-left" == I && (D = h.offset.left + H, F = h.offset.top + h.dimension.height + G + 12, c(), d("top-left", "bottom-left")), "bottom-right" == I && (D = h.offset.left + h.dimension.width + H - j, F = h.offset.top + h.dimension.height + G + 12, c(), d("top-right", "bottom-right")), "left" == I) {
                    D = h.offset.left - H - j - 12, E = h.offset.left + H + h.dimension.width + 12;
                    var K = h.offset.top + l - (h.offset.top + e.$elProxy.outerHeight(!1));
                    if (F = h.offset.top - K / 2 - G, 0 > D && E + j > g) {
                        var L = 2 * parseFloat(e.$tooltip.css("border-width")),
                            M = j + D - L;
                        e.$tooltip.css("width", M + "px"), l = e.$tooltip.outerHeight(!1), D = h.offset.left - H - M - 12 - L, K = h.offset.top + l - (h.offset.top + e.$elProxy.outerHeight(!1)), F = h.offset.top - K / 2 - G
                    } else 0 > D && (D = h.offset.left + H + h.dimension.width + 12, f = "left")
                }
                if ("right" == I) {
                    D = h.offset.left + H + h.dimension.width + 12, E = h.offset.left - H - j - 12;
                    var K = h.offset.top + l - (h.offset.top + e.$elProxy.outerHeight(!1));
                    if (F = h.offset.top - K / 2 - G, D + j > g && 0 > E) {
                        var L = 2 * parseFloat(e.$tooltip.css("border-width")),
                            M = g - D - L;
                        e.$tooltip.css("width", M + "px"), l = e.$tooltip.outerHeight(!1), K = h.offset.top + l - (h.offset.top + e.$elProxy.outerHeight(!1)), F = h.offset.top - K / 2 - G
                    } else D + j > g && (D = h.offset.left - H - j - 12, f = "right")
                }
                if (e.options.arrow) {
                    var N = "tooltipster-arrow-" + I;
                    if (e.options.arrowColor.length < 1) var O = e.$tooltip.css("background-color");
                    else var O = e.options.arrowColor;
                    if (f ? "left" == f ? (N = "tooltipster-arrow-right", f = "") : "right" == f ? (N = "tooltipster-arrow-left", f = "") : f = "left:" + Math.round(f) + "px;" : f = "", "top" == I || "top-left" == I || "top-right" == I) var P = parseFloat(e.$tooltip.css("border-bottom-width")),
                        Q = e.$tooltip.css("border-bottom-color");
                    else if ("bottom" == I || "bottom-left" == I || "bottom-right" == I) var P = parseFloat(e.$tooltip.css("border-top-width")),
                        Q = e.$tooltip.css("border-top-color");
                    else if ("left" == I) var P = parseFloat(e.$tooltip.css("border-right-width")),
                        Q = e.$tooltip.css("border-right-color");
                    else if ("right" == I) var P = parseFloat(e.$tooltip.css("border-left-width")),
                        Q = e.$tooltip.css("border-left-color");
                    else var P = parseFloat(e.$tooltip.css("border-bottom-width")),
                        Q = e.$tooltip.css("border-bottom-color");
                    P > 1 && P++;
                    var R = "";
                    if (0 !== P) {
                        var S = "",
                            T = "border-color: " + Q + ";"; - 1 !== N.indexOf("bottom") ? S = "margin-top: -" + Math.round(P) + "px;" : -1 !== N.indexOf("top") ? S = "margin-bottom: -" + Math.round(P) + "px;" : -1 !== N.indexOf("left") ? S = "margin-right: -" + Math.round(P) + "px;" : -1 !== N.indexOf("right") && (S = "margin-left: -" + Math.round(P) + "px;"), R = '<span class="tooltipster-arrow-border" style="' + S + " " + T + ';"></span>'
                    }
                    e.$tooltip.find(".tooltipster-arrow").remove();
                    var U = '<div class="' + N + ' tooltipster-arrow" style="' + f + '">' + R + '<span style="border-color:' + O + ';"></span></div>';
                    e.$tooltip.append(U)
                }
                e.$tooltip.css({
                    top: Math.round(F) + "px",
                    left: Math.round(D) + "px"
                })
            }
        }
    }, a.fn[h] = function() {
        var b = arguments;
        if (0 === this.length) {
            if ("string" == typeof b[0]) {
                var c = !0;
                switch (b[0]) {
                    case "setDefaults":
                        a.extend(j, b[1]);
                        break;
                    default:
                        c = !1
                }
                return c ? !0 : this
            }
            return this
        }
        if ("string" == typeof b[0]) {
            var e = "#*$~&";
            return this.each(function() {
                var c = a(this).data("tooltipster");
                if (!c) throw new Error("You called Tooltipster's \"" + b[0] + '" method on an uninitialized element');
                switch (b[0]) {
                    case "content":
                    case "update":
                        if ("undefined" == typeof b[1]) return e = c.content, !1;
                        c.updateTooltip(b[1]);
                        break;
                    case "destroy":
                        c.hideTooltip(), c.$el[0] !== c.$elProxy[0] && c.$elProxy.remove();
                        var d = "string" == typeof c.content ? c.content : a("<div></div>").append(c.content).html();
                        c.$el.removeClass("tooltipstered").attr("title", d).removeData("tooltipster").off("." + c.namespace);
                        break;
                    case "disable":
                        c.hideTooltip(), c.enabled = !1;
                        break;
                    case "elementIcon":
                        return e = c.$el[0] !== c.$elProxy[0] ? c.$elProxy[0] : void 0, !1;
                    case "elementTooltip":
                        return e = c.$tooltip ? c.$tooltip[0] : void 0, !1;
                    case "enable":
                        c.enabled = !0;
                        break;
                    case "hide":
                        c.hideTooltip(b[1]);
                        break;
                    case "option":
                        return e = c.options[b[1]], !1;
                    case "reposition":
                        c.positionTooltip();
                        break;
                    case "show":
                        c.showTooltipNow(b[1]);
                        break;
                    case "status":
                        return e = c.status, !1;
                    default:
                        throw new Error('Unknown method .tooltipster("' + b[0] + '")')
                }
            }), "#*$~&" !== e ? e : this
        }
        return this.each(function() {
            a(this).data("tooltipster") || a(this).data("tooltipster", new d(this, b[0]))
        })
    };
    var k = !!("ontouchstart" in b),
        l = !1;
    a("body").one("mousemove", function() {
        l = !0
    })
}(jQuery, window, document),
function() {
    var a = jQuery,
        b = function() {
            function a() {
                this.fadeDuration = 0, this.fitImagesInViewport = !0, this.resizeDuration = 0, this.showImageNumberLabel = !0, this.wrapAround = !1
            }
            return a.prototype.albumLabel = function(a, b) {
                return "Image " + a + " of " + b
            }, a
        }(),
        c = function() {
            function b(a) {
                this.options = a, this.album = [], this.currentImageIndex = void 0, this.init()
            }
            return b.prototype.init = function() {
                this.enable(), this.build()
            }, b.prototype.enable = function() {
                var b = this;
                a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(c) {
                    return b.start(a(c.currentTarget)), !1
                })
            }, b.prototype.build = function() {
                var b = this;
                a("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function() {
                    return b.end(), !1
                }), this.$lightbox.hide().on("click", function(c) {
                    return "lightbox" === a(c.target).attr("id") && b.end(), !1
                }), this.$outerContainer.on("click", function(c) {
                    return "lightbox" === a(c.target).attr("id") && b.end(), !1
                }), this.$lightbox.find(".lb-prev").on("click", function() {
                    return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1), !1
                }), this.$lightbox.find(".lb-next").on("click", function() {
                    return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1), !1
                }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
                    return b.end(), !1
                })
            }, b.prototype.start = function(b) {
                function c(a) {
                    d.album.push({
                        link: a.attr("href"),
                        title: a.attr("data-title") || a.attr("title")
                    })
                }
                var d = this,
                    e = a(window);
                e.on("resize", this.sizeOverlay.call(this)), a("select, object, embed").css({
                    visibility: "hidden"
                }), this.sizeOverlay(), this.album = [];
                var f, g = 0,
                    h = b.attr("data-lightbox");
                if (h) {
                    f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');
                    for (var i = 0; i < f.length; i = ++i) c(a(f[i])), f[i] === b[0] && (g = i)
                } else if ("lightbox" === b.attr("rel")) c(b);
                else {
                    f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
                    for (var j = 0; j < f.length; j = ++j) c(a(f[j])), f[j] === b[0] && (g = j)
                }
                var k = e.scrollTop() + e.height() / 10,
                    l = e.scrollLeft();
                this.$lightbox.css({
                    top: k + "px",
                    left: l + "px"
                }).fadeIn(this.options.fadeDuration), this.changeImage(g)
            }, b.prototype.changeImage = function(b) {
                var c = this;
                this.disableKeyboardNav();
                var d = this.$lightbox.find(".lb-image");
                this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
                var e = new Image;
                e.onload = function() {
                    var f, g, h, i, j, k, l;
                    d.attr("src", c.album[b].link), f = a(e), d.width(e.width), d.height(e.height), c.options.fitImagesInViewport && (l = a(window).width(), k = a(window).height(), j = l - c.containerLeftPadding - c.containerRightPadding - 20, i = k - c.containerTopPadding - c.containerBottomPadding - 110, (e.width > j || e.height > i) && (e.width / j > e.height / i ? (h = j, g = parseInt(e.height / (e.width / h), 10), d.width(h), d.height(g)) : (g = i, h = parseInt(e.width / (e.height / g), 10), d.width(h), d.height(g)))), c.sizeContainer(d.width(), d.height())
                }, e.src = this.album[b].link, this.currentImageIndex = b
            }, b.prototype.sizeOverlay = function() {
                this.$overlay.width(a(document).width()).height(a(document).height())
            }, b.prototype.sizeContainer = function(a, b) {
                var c = this,
                    d = (this.$outerContainer.outerWidth(), this.$outerContainer.outerHeight(), a + this.containerLeftPadding + this.containerRightPadding),
                    e = b + this.containerTopPadding + this.containerBottomPadding;
                this.$outerContainer.animate({
                    width: d,
                    height: e
                }, this.options.resizeDuration, "swing"), setTimeout(function() {
                    c.$lightbox.find(".lb-dataContainer").width(d), c.$lightbox.find(".lb-prevLink").height(e), c.$lightbox.find(".lb-nextLink").height(e), c.showImage()
                }, this.options.resizeDuration)
            }, b.prototype.showImage = function() {
                this.$lightbox.find(".lb-loader").hide(), this.$lightbox.find(".lb-image").fadeIn(0), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
            }, b.prototype.updateNav = function() {
                this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? this.$lightbox.find(".lb-prev, .lb-next").show() : (this.currentImageIndex > 0 && this.$lightbox.find(".lb-prev").show(), this.currentImageIndex < this.album.length - 1 && this.$lightbox.find(".lb-next").show()))
            }, b.prototype.updateDetails = function() {
                var a = this;
                "undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast"), this.album.length > 1 && this.options.showImageNumberLabel ? this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex + 1, this.album.length)).fadeIn("fast") : this.$lightbox.find(".lb-number").hide(), this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
                    return a.sizeOverlay()
                })
            }, b.prototype.preloadNeighboringImages = function() {
                if (this.album.length > this.currentImageIndex + 1) {
                    var a = new Image;
                    a.src = this.album[this.currentImageIndex + 1].link
                }
                if (this.currentImageIndex > 0) {
                    var b = new Image;
                    b.src = this.album[this.currentImageIndex - 1].link
                }
            }, b.prototype.enableKeyboardNav = function() {
                a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this))
            }, b.prototype.disableKeyboardNav = function() {
                a(document).off(".keyboard")
            }, b.prototype.keyboardAction = function(a) {
                var b = 27,
                    c = 37,
                    d = 39,
                    e = a.keyCode,
                    f = String.fromCharCode(e).toLowerCase();
                e === b || f.match(/x|o|c/) ? this.end() : "p" === f || e === c ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : ("n" === f || e === d) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
            }, b.prototype.end = function() {
                return this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), a("select, object, embed").css({
                    visibility: "visible"
                })
            }, b
        }();
    a(function() {
        {
            var a = new b;
            new c(a)
        }
    })
}.call(this);
var attachVoting = function(a) {
        $(".vote").click(function(b) {
            b.preventDefault(), $(this).css("pointer-events", "none");
            var c, d, e = $(this),
                f = $(this).attr("data-id");
            $(this).hasClass("upvote") && (d = "/upvote/", c = "up"), $(this).hasClass("downvote") && (d = "/downvote/", c = "down"), $.ajax({
                type: "POST",
                url: a + d + f
            }).done(function(a) {
                var b = $.parseJSON(a);
                if ("failed" === b.status && console.log(b.message), "success" === b.status) {
                    var d = $('.voting .vote-amount[data-id="' + f + '"]'),
                        g = parseInt(d.text());
                    "up" === c && 1 === b.meta && g++, "down" === c && 1 === b.meta && g--, "up" === c && 2 === b.meta && (g += 2), "down" === c && 2 === b.meta && (g -= 2), d.children(":first").text(g), e.addClass("disabled"), "up" === c && $('.voting .downvote.disabled[data-id="' + f + '"]').removeClass("disabled"), "down" === c && $('.voting .upvote.disabled[data-id="' + f + '"]').removeClass("disabled");
                    var h = d.css("color");
                    d.animate({
                        color: "white"
                    }, 200, function() {
                        d.animate({
                            color: h
                        }, 800)
                    })
                }
            }), $(this).css("pointer-events", "")
        })
    },
    placeLoader = function(a) {
        var b = $('<span class="loading" />');
        a.append(b)
    },
    removeLoader = function(a) {
        a.find(".loading").each(function() {
            $(this).remove()
        })
    };
$(document).ready(function() {
        $(".tooltip").tooltipster({
            delay: 100
        });
        var a = $("#cursorBee"),
            b = !0,
            c = function() {
                var c = 0,
                    d = 0,
                    e = 0,
                    f = 0;
                if ($(document).mousemove(function(a) {
                        c = a.pageX, d = a.pageY
                    }), b) {
                    b = !1; {
                        setInterval(function() {
                            e += Math.ceil((c - e) / 12 + 2), f += Math.ceil((d - f) / 12 + 2), a.css({
                                left: e,
                                top: f
                            })
                        }, 30)
                    }
                }
            };
        if ($("#toggleCursorBee").click(function(b) {
                b.preventDefault(), a.toggle(), c()
            }), $(".content-wrap > nav > ul").length) {
            var d, e, f, g = $(".content-wrap > nav > ul");
            g.append('<li id="line" style="display:none"></li>');
            var h = $("#line");
            setTimeout(function() {
                h.height($(".content-wrap > nav > ul .current").outerHeight()).css("top", $(".content-wrap > nav > ul .current").position().top).data("top", $(".content-wrap > nav > ul .current").position().top).data("height", h.height()), h.fadeIn(100)
            }, 150), $(".content-wrap > nav > ul > li a").not(".logo").hover(function() {
                d = $(this), e = d.position().top, f = d.outerHeight(), h.stop().animate({
                    top: e,
                    height: f
                })
            }, function() {
                h.stop().animate({
                    top: h.data("top"),
                    height: h.data("height")
                })
            })
        }
        $("select.prettify").customSelect();
        var i = $(".content-wrap > nav > ul");
        i.length && i.is(":visible") && i.scrollspy({
            min: i.offset().top,
            max: 99999,
            onEnter: function() {
                i.addClass("fixed")
            },
            onLeave: function() {
                i.removeClass("fixed")
            }
        });
        var j = $(".filter");
        if (j.length && j.is(":visible")) {
            var j = $(".filter");
            $(window).resize(function() {
                j.hasClass("fixed") && j.css("width", $(".content-wrap > section > div").outerWidth())
            }), j.scrollspy({
                min: j.offset().top,
                max: 99999,
                onEnter: function() {
                    j.addClass("fixed"), j.css("width", $(".content-wrap > section > div").outerWidth())
                },
                onLeave: function() {
                    j.removeClass("fixed"), j.css("width", "")
                }
            })
        }
        if ($(".scrollTop").length) {
            var k = $(".scrollTop");
            k.scrollspy({
                min: $(".content-wrap > section > div").offset().top,
                max: 99999,
                onEnter: function() {
                    k.fadeIn(200)
                },
                onLeave: function() {
                    k.fadeOut(200)
                }
            })
        }
        $("li.dropdown > ul").css("display", "none"), $("li.dropdown > a .fa").show(), $("li.dropdown > a").click(function(a) {
            a.preventDefault();
            var b = $(this).parent("li").children("ul");
            b.stop(!0, !1).slideToggle("fast", function() {
                var a = b.parent("li").children("a").children("i");
                b.is(":hidden") ? (a.removeClass("fa-angle-up"), a.addClass("fa-angle-down")) : (a.removeClass("fa-angle-down"), a.addClass("fa-angle-up"))
            })
        }), $(".listing-rows > div > div").hover(function() {
            $(this).children(".view").addClass("active")
        }, function() {
            $(this).children(".view").removeClass("active")
        }), $(".voting").each(function() {
            $(this).children("a").css("display", "inline-block")
        })
    }),
    function(a) {
        function b() {}

        function c(a) {
            function c(b) {
                b.prototype.option || (b.prototype.option = function(b) {
                    a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
                })
            }

            function e(b, c) {
                a.fn[b] = function(e) {
                    if ("string" == typeof e) {
                        for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                            var j = this[h],
                                k = a.data(j, b);
                            if (k)
                                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                    var l = k[e].apply(k, g);
                                    if (void 0 !== l) return l
                                } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var d = a.data(this, b);
                        d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                    })
                }
            }
            if (a) {
                var f = "undefined" == typeof console ? b : function(a) {
                    console.error(a)
                };
                return a.bridget = function(a, b) {
                    c(b), e(a, b)
                }, a.bridget
            }
        }
        var d = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c(a.jQuery)
    }(window),
    function(a) {
        var b = document.documentElement,
            c = function() {};
        b.addEventListener ? c = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : b.attachEvent && (c = function(b, c, d) {
            b[c + d] = d.handleEvent ? function() {
                var b = a.event;
                b.target = b.target || b.srcElement, d.handleEvent.call(d, b)
            } : function() {
                var c = a.event;
                c.target = c.target || c.srcElement, d.call(b, c)
            }, b.attachEvent("on" + c, b[c + d])
        });
        var d = function() {};
        b.removeEventListener ? d = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : b.detachEvent && (d = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var e = {
            bind: c,
            unbind: d
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", e) : a.eventie = e
    }(this),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : f.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== e.readyState;
            if (!b.isReady && !c) {
                b.isReady = !0;
                for (var d = 0, g = f.length; g > d; d++) {
                    var h = f[d];
                    h()
                }
            }
        }

        function d(d) {
            return d.bind(e, "DOMContentLoaded", c), d.bind(e, "readystatechange", c), d.bind(a, "load", c), b
        }
        var e = a.document,
            f = [];
        b.isReady = !1, "function" == typeof define && define.amd ? (b.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : a.docReady = d(a.eventie)
    }(this),
    function() {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if ("object" == typeof a) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
            return this.getListeners(a), this
        }, d.defineEvents = function(a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = c("removeListener"), d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, d._getEvents = function() {
            return this._events || (this._events = {})
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : a.getStyleProperty = b
    }(window),
    function(a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function c() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0
            }
            return a
        }

        function d(a) {
            function d(a) {
                if ("string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var d = g(a);
                    if ("none" === d.display) return c();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var k = f.isBorderBox = !(!j || !d[j] || "border-box" !== d[j]), l = 0, m = h.length; m > l; l++) {
                        var n = h[l],
                            o = d[n];
                        o = e(a, o);
                        var p = parseFloat(o);
                        f[n] = isNaN(p) ? 0 : p
                    }
                    var q = f.paddingLeft + f.paddingRight,
                        r = f.paddingTop + f.paddingBottom,
                        s = f.marginLeft + f.marginRight,
                        t = f.marginTop + f.marginBottom,
                        u = f.borderLeftWidth + f.borderRightWidth,
                        v = f.borderTopWidth + f.borderBottomWidth,
                        w = k && i,
                        x = b(d.width);
                    x !== !1 && (f.width = x + (w ? 0 : q + u));
                    var y = b(d.height);
                    return y !== !1 && (f.height = y + (w ? 0 : r + v)), f.innerWidth = f.width - (q + u), f.innerHeight = f.height - (r + v), f.outerWidth = f.width + s, f.outerHeight = f.height + t, f
                }
            }

            function e(a, b) {
                if (f || -1 === b.indexOf("%")) return b;
                var c = a.style,
                    d = c.left,
                    e = a.runtimeStyle,
                    g = e && e.left;
                return g && (e.left = a.currentStyle.left), c.left = b, b = c.pixelLeft, c.left = d, g && (e.left = g), b
            }
            var i, j = a("boxSizing");
            return function() {
                if (j) {
                    var a = document.createElement("div");
                    a.style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style[j] = "border-box";
                    var c = document.body || document.documentElement;
                    c.appendChild(a);
                    var d = g(a);
                    i = 200 === b(d.width), c.removeChild(a)
                }
            }(), d
        }
        var e = document.defaultView,
            f = e && e.getComputedStyle,
            g = f ? function(a) {
                return e.getComputedStyle(a, null)
            } : function(a) {
                return a.currentStyle
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : a.getSize = d(a.getStyleProperty)
    }(window),
    function(a, b) {
        function c(a, b) {
            return a[h](b)
        }

        function d(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function e(a, b) {
            d(a);
            for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++)
                if (c[e] === a) return !0;
            return !1
        }

        function f(a, b) {
            return d(a), c(a, b)
        }
        var g, h = function() {
            if (b.matchesSelector) return "matchesSelector";
            for (var a = ["webkit", "moz", "ms", "o"], c = 0, d = a.length; d > c; c++) {
                var e = a[c],
                    f = e + "MatchesSelector";
                if (b[f]) return f
            }
        }();
        if (h) {
            var i = document.createElement("div"),
                j = c(i, "div");
            g = j ? c : f
        } else g = e;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return g
        }) : window.matchesSelector = g
    }(this, Element.prototype),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function d(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }

        function e(a, e, f) {
            function h(a, b) {
                a && (this.element = a, this.layout = b, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var i = f("transition"),
                j = f("transform"),
                k = i && j,
                l = !!f("perspective"),
                m = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[i],
                n = ["transform", "transition", "transitionDuration", "transitionProperty"],
                o = function() {
                    for (var a = {}, b = 0, c = n.length; c > b; b++) {
                        var d = n[b],
                            e = f(d);
                        e && e !== d && (a[d] = e)
                    }
                    return a
                }();
            b(h.prototype, a.prototype), h.prototype._create = function() {
                this._transition = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, h.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, h.prototype.getSize = function() {
                this.size = e(this.element)
            }, h.prototype.css = function(a) {
                var b = this.element.style;
                for (var c in a) {
                    var d = o[c] || c;
                    b[d] = a[c]
                }
            }, h.prototype.getPosition = function() {
                var a = g(this.element),
                    b = this.layout.options,
                    c = b.isOriginLeft,
                    d = b.isOriginTop,
                    e = parseInt(a[c ? "left" : "right"], 10),
                    f = parseInt(a[d ? "top" : "bottom"], 10);
                e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
                var h = this.layout.size;
                e -= c ? h.paddingLeft : h.paddingRight, f -= d ? h.paddingTop : h.paddingBottom, this.position.x = e, this.position.y = f
            }, h.prototype.layoutPosition = function() {
                var a = this.layout.size,
                    b = this.layout.options,
                    c = {};
                b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this])
            };
            var p = l ? function(a, b) {
                return "translate3d(" + a + "px, " + b + "px, 0)"
            } : function(a, b) {
                return "translate(" + a + "px, " + b + "px)"
            };
            h.prototype._transitionTo = function(a, b) {
                this.getPosition();
                var c = this.position.x,
                    d = this.position.y,
                    e = parseInt(a, 10),
                    f = parseInt(b, 10),
                    g = e === this.position.x && f === this.position.y;
                if (this.setPosition(a, b), g && !this.isTransitioning) return this.layoutPosition(), void 0;
                var h = a - c,
                    i = b - d,
                    j = {},
                    k = this.layout.options;
                h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({
                    to: j,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, h.prototype.goTo = function(a, b) {
                this.setPosition(a, b), this.layoutPosition()
            }, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function(a, b) {
                this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
            }, h.prototype._nonTransition = function(a) {
                this.css(a.to), a.isCleaning && this._removeStyles(a.to);
                for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
            }, h.prototype._transition = function(a) {
                if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(a), void 0;
                var b = this._transition;
                for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
                for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
                if (a.from) {
                    this.css(a.from);
                    var d = this.element.offsetHeight;
                    d = null
                }
                this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
            };
            var q = j && d(j) + ",opacity";
            h.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: q,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(m, this, !1))
            }, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function(a) {
                this.ontransitionend(a)
            }, h.prototype.onotransitionend = function(a) {
                this.ontransitionend(a)
            };
            var r = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            h.prototype.ontransitionend = function(a) {
                if (a.target === this.element) {
                    var b = this._transition,
                        d = r[a.propertyName] || a.propertyName;
                    if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                        var e = b.onEnd[d];
                        e.call(this), delete b.onEnd[d]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, h.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1
            }, h.prototype._removeStyles = function(a) {
                var b = {};
                for (var c in a) b[c] = "";
                this.css(b)
            };
            var s = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return h.prototype.removeTransitionStyles = function() {
                this.css(s)
            }, h.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, h.prototype.remove = function() {
                if (!i || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
                var a = this;
                this.on("transitionEnd", function() {
                    return a.removeElem(), !0
                }), this.hide()
            }, h.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var a = this.layout.options;
                this.transition({
                    from: a.hiddenStyle,
                    to: a.visibleStyle,
                    isCleaning: !0
                })
            }, h.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var a = this.layout.options;
                this.transition({
                    from: a.visibleStyle,
                    to: a.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, h.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, h
        }
        var f = document.defaultView,
            g = f && f.getComputedStyle ? function(a) {
                return f.getComputedStyle(a, null)
            } : function(a) {
                return a.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty))
    }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            return "[object Array]" === l.call(a)
        }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b
        }

        function e(a, b) {
            var c = n(b, a); - 1 !== c && b.splice(c, 1)
        }

        function f(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        }

        function g(c, g, l, n, o, p) {
            function q(a, c) {
                if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a)) return i && i.error("Bad " + this.settings.namespace + " element: " + a), void 0;
                this.element = a, this.options = b({}, this.options), this.option(c);
                var d = ++s;
                this.element.outlayerGUID = d, t[d] = this, this._create(), this.options.isInitLayout && this.layout()
            }

            function r(a, c) {
                a.prototype[c] = b({}, q.prototype[c])
            }
            var s = 0,
                t = {};
            return q.prototype.settings = {
                namespace: "outlayer",
                item: p
            }, q.prototype.options = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, b(q.prototype, l.prototype), q.prototype.option = function(a) {
                b(this.options, a)
            }, q.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, q.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, q.prototype._itemize = function(a) {
                for (var b = this._filterFindItemElements(a), c = this.settings.item, d = [], e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = new c(g, this);
                    d.push(h)
                }
                return d
            }, q.prototype._filterFindItemElements = function(a) {
                a = d(a);
                for (var b = this.options.itemSelector, c = [], e = 0, f = a.length; f > e; e++) {
                    var g = a[e];
                    if (m(g))
                        if (b) {
                            o(g, b) && c.push(g);
                            for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i])
                        } else c.push(g)
                }
                return c
            }, q.prototype.getItemElements = function() {
                for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
                return a
            }, q.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, a), this._isLayoutInited = !0
            }, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function() {
                this.getSize()
            }, q.prototype.getSize = function() {
                this.size = n(this.element)
            }, q.prototype._getMeasurement = function(a, b) {
                var c, d = this.options[a];
                d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0
            }, q.prototype.layoutItems = function(a, b) {
                a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
            }, q.prototype._getItemsForLayout = function(a) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.isIgnored || b.push(e)
                }
                return b
            }, q.prototype._layoutItems = function(a, b) {
                if (!a || !a.length) return this.emitEvent("layoutComplete", [this, a]), void 0;
                this._itemsOn(a, "layout", function() {
                    this.emitEvent("layoutComplete", [this, a])
                });
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b, c.push(g)
                }
                this._processLayoutQueue(c)
            }, q.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, q.prototype._processLayoutQueue = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this._positionItem(d.item, d.x, d.y, d.isInstant)
                }
            }, q.prototype._positionItem = function(a, b, c, d) {
                d ? a.goTo(b, c) : a.moveTo(b, c)
            }, q.prototype._postLayout = function() {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function(a, b) {
                if (void 0 !== a) {
                    var c = this.size;
                    c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
                }
            }, q.prototype._itemsOn = function(a, b, c) {
                function d() {
                    return e++, e === f && c.call(g), !0
                }
                for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
                    var j = a[h];
                    j.on(b, d)
                }
            }, q.prototype.ignore = function(a) {
                var b = this.getItem(a);
                b && (b.isIgnored = !0)
            }, q.prototype.unignore = function(a) {
                var b = this.getItem(a);
                b && delete b.isIgnored
            }, q.prototype.stamp = function(a) {
                if (a = this._find(a)) {
                    this.stamps = this.stamps.concat(a);
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        this.ignore(d)
                    }
                }
            }, q.prototype.unstamp = function(a) {
                if (a = this._find(a))
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        e(d, this.stamps), this.unignore(d)
                    }
            }, q.prototype._find = function(a) {
                return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0
            }, q.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var a = 0, b = this.stamps.length; b > a; a++) {
                        var c = this.stamps[a];
                        this._manageStamp(c)
                    }
                }
            }, q.prototype._getBoundingRect = function() {
                var a = this.element.getBoundingClientRect(),
                    b = this.size;
                this._boundingRect = {
                    left: a.left + b.paddingLeft + b.borderLeftWidth,
                    top: a.top + b.paddingTop + b.borderTopWidth,
                    right: a.right - (b.paddingRight + b.borderRightWidth),
                    bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
                }
            }, q.prototype._manageStamp = k, q.prototype._getElementOffset = function(a) {
                var b = a.getBoundingClientRect(),
                    c = this._boundingRect,
                    d = n(a),
                    e = {
                        left: b.left - c.left - d.marginLeft,
                        top: b.top - c.top - d.marginTop,
                        right: c.right - b.right - d.marginRight,
                        bottom: c.bottom - b.bottom - d.marginBottom
                    };
                return e
            }, q.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, q.prototype.bindResize = function() {
                this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0)
            }, q.prototype.unbindResize = function() {
                c.unbind(a, "resize", this), this.isResizeBound = !1
            }, q.prototype.onresize = function() {
                function a() {
                    b.resize(), delete b.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var b = this;
                this.resizeTimeout = setTimeout(a, 100)
            }, q.prototype.resize = function() {
                var a = n(this.element),
                    b = this.size && a;
                b && a.innerWidth === this.size.innerWidth || this.layout()
            }, q.prototype.addItems = function(a) {
                var b = this._itemize(a);
                return b.length && (this.items = this.items.concat(b)), b
            }, q.prototype.appended = function(a) {
                var b = this.addItems(a);
                b.length && (this.layoutItems(b, !0), this.reveal(b))
            }, q.prototype.prepended = function(a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
                }
            }, q.prototype.reveal = function(a) {
                if (a && a.length)
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        d.reveal()
                    }
            }, q.prototype.hide = function(a) {
                if (a && a.length)
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        d.hide()
                    }
            }, q.prototype.getItem = function(a) {
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    if (d.element === a) return d
                }
            }, q.prototype.getItems = function(a) {
                if (a && a.length) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        var e = a[c],
                            f = this.getItem(e);
                        f && b.push(f)
                    }
                    return b
                }
            }, q.prototype.remove = function(a) {
                a = d(a);
                var b = this.getItems(a);
                if (b && b.length) {
                    this._itemsOn(b, "remove", function() {
                        this.emitEvent("removeComplete", [this, b])
                    });
                    for (var c = 0, f = b.length; f > c; c++) {
                        var g = b[c];
                        g.remove(), e(g, this.items)
                    }
                }
            }, q.prototype.destroy = function() {
                var a = this.element.style;
                a.height = "", a.position = "", a.width = "";
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    d.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, j && j.removeData(this.element, this.settings.namespace)
            }, q.data = function(a) {
                var b = a && a.outlayerGUID;
                return b && t[b]
            }, q.create = function(a, c) {
                function d() {
                    q.apply(this, arguments)
                }
                return b(d.prototype, q.prototype), r(d, "options"), r(d, "settings"), b(d.prototype.options, c), d.prototype.settings.namespace = a, d.data = q.data, d.Item = function() {
                    p.apply(this, arguments)
                }, d.Item.prototype = new p, d.prototype.settings.item = d.Item, g(function() {
                    for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
                        var l, m = c[g],
                            n = m.getAttribute(e);
                        try {
                            l = n && JSON.parse(n)
                        } catch (o) {
                            i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + o);
                            continue
                        }
                        var p = new d(m, l);
                        j && j.data(m, a, p)
                    }
                }), j && j.bridget && j.bridget(a, d), d
            }, q.Item = p, q
        }
        var h = a.document,
            i = a.console,
            j = a.jQuery,
            k = function() {},
            l = Object.prototype.toString,
            m = "object" == typeof HTMLElement ? function(a) {
                return a instanceof HTMLElement
            } : function(a) {
                return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
            },
            n = Array.prototype.indexOf ? function(a, b) {
                return a.indexOf(b)
            } : function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
    }(window),
    function(a) {
        function b(a, b) {
            var d = a.create("masonry");
            return d.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var a = this.cols;
                for (this.colYs = []; a--;) this.colYs.push(0);
                this.maxY = 0
            }, d.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var a = this.items[0],
                        c = a && a.element;
                    this.columnWidth = c && b(c).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, d.prototype.getContainerWidth = function() {
                var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                    c = b(a);
                this.containerWidth = c && c.innerWidth
            }, d.prototype._getItemLayoutPosition = function(a) {
                a.getSize();
                var b = a.size.outerWidth % this.columnWidth,
                    d = b && 1 > b ? "round" : "ceil",
                    e = Math[d](a.size.outerWidth / this.columnWidth);
                e = Math.min(e, this.cols);
                for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = {
                        x: this.columnWidth * h,
                        y: g
                    }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
                return i
            }, d.prototype._getColGroup = function(a) {
                if (2 > a) return this.colYs;
                for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                    var e = this.colYs.slice(d, d + a);
                    b[d] = Math.max.apply(Math, e)
                }
                return b
            }, d.prototype._manageStamp = function(a) {
                var c = b(a),
                    d = this._getElementOffset(a),
                    e = this.options.isOriginLeft ? d.left : d.right,
                    f = e + c.outerWidth,
                    g = Math.floor(e / this.columnWidth);
                g = Math.max(0, g);
                var h = Math.floor(f / this.columnWidth);
                h = Math.min(this.cols - 1, h);
                for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
            }, d.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var a = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
            }, d.prototype._getContainerFitWidth = function() {
                for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
                return (this.cols - a) * this.columnWidth - this.gutter
            }, d.prototype.resize = function() {
                var a = this.containerWidth;
                this.getContainerWidth(), a !== this.containerWidth && this.layout()
            }, d
        }
        var c = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                if (e === b) return c
            }
            return -1
        };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], b) : a.Masonry = b(a.Outlayer, a.getSize)
    }(window),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventEmitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
    }(this, function(a, b, c) {
        function d(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function e(a) {
            return "[object Array]" === m.call(a)
        }

        function f(a) {
            var b = [];
            if (e(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0, d = a.length; d > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function g(a, b, c) {
            if (!(this instanceof g)) return new g(a, b);
            "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
            var e = this;
            setTimeout(function() {
                e.check()
            })
        }

        function h(a) {
            this.img = a
        }

        function i(a) {
            this.src = a, n[a] = this
        }
        var j = a.jQuery,
            k = a.console,
            l = "undefined" != typeof k,
            m = Object.prototype.toString;
        g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
            this.images = [];
            for (var a = 0, b = this.elements.length; b > a; a++) {
                var c = this.elements[a];
                "IMG" === c.nodeName && this.addImage(c);
                for (var d = c.querySelectorAll("img"), e = 0, f = d.length; f > e; e++) {
                    var g = d[e];
                    this.addImage(g)
                }
            }
        }, g.prototype.addImage = function(a) {
            var b = new h(a);
            this.images.push(b)
        }, g.prototype.check = function() {
            function a(a, e) {
                return b.options.debug && l && k.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
            }
            var b = this,
                c = 0,
                d = this.images.length;
            if (this.hasAnyBroken = !1, !d) return this.complete(), void 0;
            for (var e = 0; d > e; e++) {
                var f = this.images[e];
                f.on("confirm", a), f.check()
            }
        }, g.prototype.progress = function(a) {
            this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
            var b = this;
            setTimeout(function() {
                b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
            })
        }, g.prototype.complete = function() {
            var a = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var b = this;
            setTimeout(function() {
                if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                    var c = b.hasAnyBroken ? "reject" : "resolve";
                    b.jqDeferred[c](b)
                }
            })
        }, j && (j.fn.imagesLoaded = function(a, b) {
            var c = new g(this, a, b);
            return c.jqDeferred.promise(j(this))
        }), h.prototype = new b, h.prototype.check = function() {
            var a = n[this.img.src] || new i(this.img.src);
            if (a.isConfirmed) return this.confirm(a.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var b = this;
            a.on("confirm", function(a, c) {
                return b.confirm(a.isLoaded, c), !0
            }), a.check()
        }, h.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emit("confirm", this, b)
        };
        var n = {};
        return i.prototype = new b, i.prototype.check = function() {
            if (!this.isChecked) {
                var a = new Image;
                c.bind(a, "load", this), c.bind(a, "error", this), a.src = this.src, this.isChecked = !0
            }
        }, i.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, i.prototype.onload = function(a) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(a)
        }, i.prototype.onerror = function(a) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
        }, i.prototype.confirm = function(a, b) {
            this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
        }, i.prototype.unbindProxyEvents = function(a) {
            c.unbind(a.target, "load", this), c.unbind(a.target, "error", this)
        }, g
    });