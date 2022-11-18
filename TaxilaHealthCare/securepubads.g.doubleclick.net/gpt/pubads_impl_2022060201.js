(function(_) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var q, ca, da, ea, ia, ka, ma, ja, na, oa, pa, qa, ra, sa, va, wa, ya, za, Aa, Ca, Ba, Da, Ea, Fa, Ha, v, La, Na, Qa, Sa, Ua, Va, Wa, Ya, $a, fb, kb, mb, pb, rb, tb, vb, wb, xb, zb, Ab, Bb, Cb, Db, Gb, Hb, Ib, Mb, Pb, Qb, Ob, Rb, Tb, Nb, Wb, ac, bc, dc, ec, gc, lc, nc, ic, rc, uc, oc, pc, yc, zc, Ac, Bc, wc, xc, Cc, Gc, Hc, Mc, Oc, Qc, Rc, Tc, Uc, Vc, Xc, Zc, bd, pd, id, sd, td, vd, xd, yd, Ed, Kd, Id, Md, Sd, Yd, ce, de, te, ze, Be, De, Ee, Ge, He, Ie, Je, Le, Ke, Pe, Re, Se, Te, Ze, af, bf, cf, gf, mf, of , tf, vf, Xe, wf, yf, Ff, G, Uf, fg, jg, lg, ng, pg, qg, rg, tg, wg, zg, Cg, Eg, Dg, Hg, Mg, Ng, Og, Pg, Fg, Qg, Rg, Gg, Sg, Ug, Vg, Xg, Wg, bh, $g, ch, lh, oh, gh, hh, ph, rh, sh, th, uh, yh, Ch, zh, wh, Eh, Ih, Lh, Nh, N, Ph, Qh, Sh, Uh, Wh, bi, Yh, Xh, Zh, $h, ai, ti, ui, wi, xi, Ai, Di, Ii, Oi, Qi, Si, Ti, Vi, Xi, Yi, $i, Wi, bj, dj, fj, ij, pj, sj, tj, Bj, Dj, Fj, Gj, Hj, Kj, Mj, la, Nj, Pj, Tj, bk, ck, ek, Uj, nk, pk, qk, rk, tk, uk, wk, yk, Kk, Lk, Mk, Rk, Ok, Vk, al, bl, fl, il, pl, tl, vl, wl, yl, Al, Cl, Hl, Ol, Dl, Pl, Ql, Fl, Jl, Il, Kl, El, Rl, Ul, $l, Vl, bm, em, cm, hm, im, om, pm, qm, rm, sm, tm, um, vm, wm, xm, ym, Jm, Om, Km, Qm, Tm, Rm, Sm, Xm, Zm, $m, cn, dn, mn, tn, un, wn, Cn, Fn, Gn, Hn, Nn, On, Rn, Sn, Tn, Yn, Zn, ao, bo, co, Qo, So, To, Uo, bp, dp, jp, mp, B, np, op, pp, qp, rp, w, sp, tp, up, S, vp, wp, xp, Ep, Fp, Gp, bb, db, eb, Ip, Lp, Jp, Kp, Mp, Np, Ia, Rp, mi, ha, Sp, Tp, Up, Vp, xe, Yp;
    ca = function(a, b) {
        b = _.ba(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    da = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ea = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    ia = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.fa(e) ? "o" + ha(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    ka = function(a, b) {
        a.sort(b || ja)
    };
    ma = function(a) {
        for (var b = la, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || ja;
        ka(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    ja = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    na = function(a, b) {
        return a === b
    };
    oa = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    pa = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = pa.apply(null, ea(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    qa = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    ra = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    sa = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    va = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < ua.length; f++) c = ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    wa = function() {
        var a = _.r.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    ya = function(a) {
        return xa(wa(), a)
    };
    za = function(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    Aa = function() {
        return ya("Firefox") || ya("FxiOS")
    };
    Ca = function() {
        return ya("Safari") && !(Ba() || ya("Coast") || ya("Opera") || ya("Edge") || ya("Edg/") || ya("OPR") || Aa() || ya("Silk") || ya("Android"))
    };
    Ba = function() {
        return (ya("Chrome") || ya("CriOS")) && !ya("Edge") || ya("Silk")
    };
    Da = function(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[_.u(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    };
    Ea = function() {
        var a = wa();
        if (ya("Trident") || ya("MSIE")) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        a = za(a);
        b = Da(a);
        return ya("Opera") ? b(["Version", "Opera"]) : ya("Edge") ? b(["Edge"]) : ya("Edg/") ? b(["Edg"]) : ya("Silk") ? b(["Silk"]) : Ba() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    };
    Fa = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    Ha = function(a) {
        return new _.Ga(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    v = function(a) {
        var b = Ia.apply(1, arguments);
        if (0 === b.length) return Ja(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Ja(c.join(""))
    };
    La = function(a, b) {
        var c = Ka(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Ja(c)
    };
    Na = function(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        a.innerHTML = Ma(b)
    };
    Qa = function() {
        for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = Pa[19 == d ? c & 3 | 8 : c]);
        return Ja("uuid-in-package:" + a.join("").toLowerCase())
    };
    Sa = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    Ua = function(a, b) {
        a.textContent = b instanceof Ta && b.constructor === Ta ? b.j : "type_error:SafeScript";
        Sa(a)
    };
    Va = function(a, b) {
        a.src = Ka(b);
        Sa(a)
    };
    Wa = function(a, b) {
        a.write(Ma(b))
    };
    Ya = function(a) {
        return a ? a.passive && Xa() ? a : a.capture || !1 : !1
    };
    $a = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new w.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            Va(g, a);
            c && "complete" !== b.document.readyState ? _.Za(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    fb = function(a) {
        var b, c, d, e, f, g;
        return _.ab(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.m + "&st=") + a.ub, c = void 0, h.A = 2, bb(h, cb(b), 4);
                case 4:
                    c = h.m;
                    db(h, 3);
                    break;
                case 2:
                    eb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Lb || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.H,
                        ne: c.bg_hash_basename,
                        me: c.bg_binary,
                        Ue: a.j + "_" + a.m,
                        Lb: d,
                        ub: a.ub,
                        lc: e,
                        Cc: f,
                        kc: g
                    }) : h.return(void 0)
            }
        })
    };
    kb = function(a) {
        var b;
        return _.ab(function(c) {
            if (1 == c.j) return bb(c, fb(a), 2);
            if (b = c.m) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.ne, g._bgp_ = b.me, g._li_ = b.Ue, g._jk_ = b.Lb, g._st_ = b.ub, g._rc_ = b.lc, g._dl_ = b.Cc, g._g2_ = b.kc, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = ib(jb, {
                    basename: d
                });
                $a(d)
            }
            return c.return(b)
        })
    };
    mb = function(a) {
        if (a !== lb) throw Error("requires a valid immutable API token");
    };
    pb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (nb) {
            if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (ob || (ob = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    rb = function(a) {
        return qb && null != a && a instanceof Uint8Array
    };
    tb = function(a) {
        if (a !== sb) throw Error("illegal external caller");
    };
    vb = function(a, b) {
        Object.isFrozen(a) || (ub ? a[ub] |= b : void 0 !== a.hb ? a.hb |= b : Object.defineProperties(a, {
            hb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    };
    wb = function(a) {
        var b;
        ub ? b = a[ub] : b = a.hb;
        return null == b ? 0 : b
    };
    xb = function(a) {
        vb(a, 1);
        return a
    };
    zb = function(a) {
        return Array.isArray(a) ? !!(wb(a) & 2) : !1
    };
    Ab = function(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        vb(a, 2)
    };
    Bb = function(a, b) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as mutable");
        b ? vb(a, 8) : Object.isFrozen(a) || (ub ? a[ub] &= -9 : void 0 !== a.hb && (a.hb &= -9))
    };
    Cb = function(a) {
        return zb(a.wa)
    };
    Db = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    Gb = function(a) {
        return null == a ? Eb() : a.constructor === Fb ? a : "string" === typeof a ? a ? new Fb(a, sb) : Eb() : rb(a) ? a.length ? new Fb(new Uint8Array(a), sb) : Eb() : Eb()
    };
    Hb = function(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };
    Ib = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (Array.isArray(a)) return new b(a);
        if (c) return new b
    };
    Mb = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (rb(a)) return Jb(a);
                    if (a instanceof Fb) return Kb(a);
                    if (a instanceof Lb) return a.ra()
                }
        }
        return a
    };
    Pb = function(a, b) {
        b = void 0 === b ? Nb : b;
        return Ob(a, b)
    };
    Qb = function(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Ob(a, b);
            else if (Db(a)) {
                var c = {},
                    d;
                for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = Qb(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    };
    Ob = function(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = Qb(c[d], b);
        Array.isArray(a) && wb(a) & 1 && xb(c);
        return c
    };
    Rb = function(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Mb(a);
        return Array.isArray(a) ? Pb(a, Rb) : a
    };
    Tb = function(a) {
        return Sb(a)
    };
    Nb = function(a) {
        return rb(a) ? new Uint8Array(a) : a instanceof Lb ? Ub(a, Tb) : a
    };
    Wb = function(a) {
        var b = Vb(a, 45, !1);
        if (b.length && !(wb(b) & 4)) {
            Object.isFrozen(b) && (b = xb(b.slice()), x(a, 45, b, void 0, !0));
            for (var c = 0; c < b.length; c++) b[c] = Gb(b[c]);
            vb(b, 5)
        }
        Cb(a) && Object.freeze(b);
        return b
    };
    ac = function(a, b, c, d) {
        Xb(a);
        c !== d ? x(a, b, c) : Yb(a, b);
        return a
    };
    bc = function(a, b, c) {
        Xb(a);
        Vb(a, b).push(c)
    };
    dc = function(a, b, c) {
        return cc(a, b) === c ? c : -1
    };
    ec = function(a, b) {
        return Mb(b)
    };
    gc = function(a, b) {
        b.sb && (a.sb = b.sb.slice());
        var c = b.Z;
        if (c) {
            b = b.j;
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    if (e) {
                        var f = !(!b || !b[d]),
                            g = +d;
                        if (Array.isArray(e)) {
                            if (e.length)
                                for (f = fc(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) gc(f[g], e[g])
                        } else(f = hc(a, e.constructor, g, void 0, f)) && gc(f, e)
                    }
                }
        }
    };
    lc = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.z(ic(c, a)), b = c.next().value, a = c.next().value, c = b);
        jc = c >>> 0;
        kc = a >>> 0
    };
    nc = function(a) {
        if (16 > a.length) lc(Number(a));
        else if (mc) a = BigInt(a), jc = Number(a & BigInt(4294967295)) >>> 0, kc = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            kc = jc = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), kc *= 1E6, jc = 1E6 * jc + d, 4294967296 <= jc && (kc += jc / 4294967296 | 0, jc %= 4294967296);
            b && (b = _.z(ic(jc, kc)), a = b.next().value, b = b.next().value, jc = a, kc = b)
        }
    };
    ic = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    rc = function(a, b, c) {
        if (c) {
            var d = {},
                e;
            for (e in c) {
                if (Object.prototype.hasOwnProperty.call(c, e)) {
                    var f = c[e],
                        g = f.Gf;
                    g || (d.xb = f.Yg || f.eh.Ec, f.le ? (d.Hc = oc(f.le), g = function(h) {
                        return function(k, l, m) {
                            return h.xb(k, l, m, h.Hc)
                        }
                    }(d)) : f.Ve ? (d.Gc = pc(f.ye.qd, f.Ve), g = function(h) {
                        return function(k, l, m) {
                            return h.xb(k, l, m, h.Gc)
                        }
                    }(d)) : g = d.xb, f.Gf = g);
                    g(b, a, f.ye)
                }
                d = {
                    xb: d.xb,
                    Hc: d.Hc,
                    Gc: d.Gc
                }
            }
        }
        qc(b, a)
    };
    uc = function(a, b) {
        var c = a[b];
        "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
        return Array.isArray(c) && (sc in c || tc in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
    };
    oc = function(a) {
        var b = a[vc];
        if (!b) {
            var c = wc(a);
            b = function(d, e) {
                return xc(d, e, c)
            };
            a[vc] = b
        }
        return b
    };
    pc = function(a, b) {
        var c = a[vc];
        c || (c = function(d, e) {
            return rc(d, e, b)
        }, a[vc] = c);
        return c
    };
    yc = function(a, b) {
        a.push(b)
    };
    zc = function(a, b, c) {
        a.push(b, c.Ec)
    };
    Ac = function(a, b, c, d) {
        var e = oc(d),
            f = wc(d).qd,
            g = c.Ec;
        a.push(b, function(h, k, l) {
            return g(h, k, l, f, e)
        })
    };
    Bc = function(a, b, c, d, e, f) {
        var g = pc(d, f),
            h = c.Ec;
        a.push(b, function(k, l, m) {
            return h(k, l, m, d, g)
        })
    };
    wc = function(a) {
        var b = a[tc];
        if (b) return b;
        b = a[tc] = [];
        var c = yc,
            d = zc,
            e = Ac,
            f = Bc;
        b.qd = a[0];
        var g = 1;
        if (a.length > g && "number" !== typeof a[g]) {
            var h = a[g++];
            c(b, h)
        }
        for (; g < a.length;) {
            c = a[g++];
            for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
            h = a[g++];
            k -= g;
            switch (k) {
                case 0:
                    d(b, c, h);
                    break;
                case 1:
                    (k = uc(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                    break;
                case 2:
                    k = b;
                    var l = g++;
                    l = uc(a, l);
                    e(k, c, h, l, a[g++]);
                    break;
                case 3:
                    f(b, c, h, a[g++], a[g++], a[g++]);
                    break;
                case 4:
                    f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + k);
            }
        }
        sc in a && tc in a && (a.length = 0);
        return b
    };
    xc = function(a, b, c) {
        for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)(0, c[f + 1])(b, a, c[f]);
        rc(a, b, e ? c[0] : void 0)
    };
    Cc = function(a, b) {
        return {
            bh: a,
            Ec: b
        }
    };
    Gc = function(a, b, c, d, e, f) {
        (a = a.Z && a.Z[c]) ? Array.isArray(a) ? (e = f.Kc ? xb(a.slice()) : a, Dc(b, c, e)) : Ec(b, c, a): (qb && d instanceof Uint8Array ? e = d.length ? new Fb(new Uint8Array(d), sb) : Eb() : d instanceof Lb ? e = Ub(d, Fc) : (Array.isArray(d) && (e ? Ab(d) : Array.isArray(d) && wb(d) & 1 && f.Kc && (d = d.slice())), e = d), x(b, c, e))
    };
    Hc = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    Mc = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function(f) {
            f = _.z(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = _.z(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next())
                    if (h = h.value, d && (h === b || Ic(h, b))) {
                        f = _.z(d);
                        for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
            }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Jc(function(f) {
            if (!f.parent || !Kc(f.parent)) return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++) try {
                if (Lc(g[h]) == f) {
                    Mc(f.parent, g[h], c, d);
                    break
                }
            } catch (k) {}
            return !1
        }, !1, !1, a)
    };
    Oc = function(a) {
        return a instanceof Nc ? Ma(a) : Ma(a)
    };
    Qc = function(a) {
        return a instanceof Pc ? Ka(a) : Ka(a)
    };
    Rc = function(a) {
        return function() {
            var b = Ia.apply(0, arguments);
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    };
    Tc = function(a) {
        a.Xd.apply(a, _.Sc(Ia.apply(1, arguments).map(function(b) {
            return {
                Yd: 2,
                message: b
            }
        })))
    };
    Uc = function(a) {
        a.Xd.apply(a, _.Sc(Ia.apply(1, arguments).map(function(b) {
            return {
                Yd: 5,
                message: b
            }
        })))
    };
    Vc = function(a) {
        a && "function" == typeof a.za && a.za()
    };
    Xc = function() {
        var a = Wc;
        return function(b) {
            return b instanceof a
        }
    };
    Zc = function() {
        var a = Yc;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    bd = function(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        var e = _.$c("IMG", a.document);
        if (c || d) {
            var f = function(g) {
                c && c(g);
                d && ca(a.google_image_requests, e);
                _.ad(e, "load", f);
                _.ad(e, "error", f)
            };
            _.Za(e, "load", f);
            _.Za(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    pd = function(a, b) {
        var c;
        a: {
            try {
                if (a) {
                    var d = a.getItem("google_experiment_mod");
                    break a
                }
            } catch (g) {}
            d = null
        }
        d = null != (c = d) ? c : "";
        try {
            var e = cd(dd, d);
            if (d) {
                var f = cd(dd, d);
                ed(f, fd(gd(1), -1));
                f.X()
            }
        } catch (g) {
            id(d), e = new dd
        }
        if (c = (B = fc(e, jd, 1), _.u(B, "find")).call(B, function(g) {
                return kd(g, 1, 0) === b
            }))
            if (f = ld(c, 2), null === f || isNaN(f)) id(d);
            else return f;
        d = md() ? null : Math.floor(1E3 * nd());
        if (null === d) return null;
        c ? fd(c, d) : ed(e, fd(gd(b), d));
        return od(a, e.X()) ? d : null
    };
    id = function(a) {
        .01 > Math.random() && qd({
            data: a
        }, "ls_tamp")
    };
    sd = function(a, b) {
        b = void 0 === b ? window : b;
        if (rd(a)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    td = function(a) {
        return "null" !== a.origin
    };
    vd = function(a, b, c) {
        b = rd(b) && td(c) ? c.document.cookie : null;
        return null === b ? null : (new ud({
            cookie: b
        })).get(a) || ""
    };
    xd = function(a, b, c) {
        var d;
        return _.ab(function(e) {
            if (1 == e.j) return bb(e, w.Promise.all(a), 2);
            if (3 != e.j) {
                if (!b.length) return e.return(0);
                d = _.wd();
                return bb(e, w.Promise.race([w.Promise.all(b), new w.Promise(function(f) {
                    return void setTimeout(f, c)
                })]), 3)
            }
            return e.return(_.wd() - d)
        })
    };
    yd = function(a, b) {
        var c, d, e;
        return _.ab(function(f) {
            if (1 == f.j) return c = 0 < b ? a.filter(function(g) {
                return !g.hd
            }) : a, bb(f, w.Promise.all(c.map(function(g) {
                return g.rd.promise
            })), 2);
            if (3 != f.j) {
                if (a.length === c.length) return f.return(0);
                d = a.filter(function(g) {
                    return g.hd
                });
                e = _.wd();
                return bb(f, w.Promise.race([w.Promise.all(d.map(function(g) {
                    return g.rd.promise
                })), new w.Promise(function(g) {
                    return void setTimeout(g, b)
                })]), 3)
            }
            return f.return(_.wd() - e)
        })
    };
    Ed = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = zd.j();
        0 === e.j && (e.j = Math.random() < _.Ad(Bd) ? 2 : 1);
        2 === e.j && (e = {}, qd(_.u(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(Cd(window)), e.em = c, e.lid = b, e.eids = _.C(Dd).j().join(), e), d), "esp"))
    };
    Kd = function(a, b, c, d) {
        Ed(18, a);
        try {
            var e = _.wd();
            _.Ad(Fd) && (x(b, 8, Number((Gd(b, 8) - 1).toFixed(3))), x(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function(f) {
                Ed(29, a, null, {
                    delta: String(_.wd() - e)
                });
                x(b, 3, Date.now());
                "string" !== typeof f ? Ed(21, a) : f || Ed(20, a);
                Ec(x(b, 2, f), 10);
                Hd().set(b, d) && Ed(27, a);
                return b
            }).catch(function(f) {
                Id(b, 106, d);
                Ed(28, a, Jd(f));
                return b
            })
        } catch (f) {
            return Id(b, 107, d), Ed(1, a, Jd(f)), w.Promise.resolve(b)
        }
    };
    Id = function(a, b, c) {
        var d, e = null != (d = hc(a, Ld, 10)) ? d : new Ld;
        b = x(e, 1, b);
        Ec(a, 10, b);
        Hd().set(a, c)
    };
    Md = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new w.Promise(function(c) {
            var d = function() {
                c(b());
                _.ad(a, "load", d)
            };
            _.Za(a, "load", d)
        })
    };
    Sd = function(a, b, c, d) {
        var e, f, g, h, k;
        return _.ab(function(l) {
            if (1 == l.j) {
                e = new Nd(a, b, c, d);
                f = new Od(e.o, e.D, c, d);
                g = new Pd(f.o, f.D, c, d);
                h = new Qd;
                for (var m = _.z([e, f, g]), n = m.next(); !n.done; n = m.next()) D(h, n.value);
                Rd(h);
                return bb(l, f.l.promise, 2)
            }
            k = l.m;
            return l.return(k ? k : {
                id: a,
                collectorGeneratedData: null
            })
        })
    };
    Yd = function(a, b, c) {
        if (b)
            if (Td() === Ud(window) || _.E(Vd))
                if (a.encryptedSignalProviders instanceof Wd) a.encryptedSignalProviders.addErrorHandler(c);
                else {
                    Ed(38, "");
                    var d, e = new Xd(null != (d = a.encryptedSignalProviders) ? d : [], b);
                    a.encryptedSignalProviders = new Wd(e);
                    e.addErrorHandler(c)
                }
        else Ed(16, "");
        else Ed(15, "")
    };
    ce = function(a, b, c) {
        var d = b.toString();
        if (c && !document.querySelector('[src="' + d + '"]')) {
            var e = Hd().get(a, c),
                f = e.mb,
                g;
            if (!(!e.success || f && (0 === $d(f) || 1 > (null != (g = Gd(f, 8)) ? g : 0)))) {
                Ed(30, a, null, {
                    url: d
                });
                var h = document.createElement("script");
                h.setAttribute("esp-signal", "true");
                Va(h, b);
                var k = function() {
                    Ed(31, a, null, {
                        url: d
                    });
                    Id(null != f ? f : ae(new be, a), 109, c);
                    _.ad(h, "error", k)
                };
                document.head.appendChild(h);
                _.Za(h, "error", k)
            }
        }
    };
    de = function(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };
    te = function(a) {
        var b = _.u(Object, "assign").call(Object, {}, a);
        a = a.id;
        b = (delete b.id, b);
        if (_.u(Object, "keys").call(Object, b).length) throw Error("Invalid attribute(s): " + _.u(Object, "keys").call(Object, b));
        b = {
            id: a
        };
        if (!ee.test("div")) throw Error("");
        if ("DIV" in fe) throw Error("");
        var c = void 0;
        a = null;
        var d = "";
        if (b)
            for (g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!ee.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof ge) e = he(e);
                        else {
                            if ("style" == f.toLowerCase()) throw Error("");
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in ie)
                                if (e instanceof Pc) e = Ka(e).toString();
                                else if (e instanceof _.je) e = _.ke(e);
                            else if ("string" === typeof e) e instanceof _.je || (e = "object" == typeof e && e.Oa ? e.Ga() : String(e), le.test(e) ? e = new _.je(e, _.me) : (e = String(e), e = e.replace(/(%0A|%0D)/g, ""), e = e.match(ne) ? new _.je(e, _.me) : null)), e = (e || _.oe).Ga();
                            else throw Error("");
                        }
                        e.Oa && (e = e.Ga());
                        f = f + '="' + pe(String(e)) + '"';
                        d += " " + f
                    }
                }
        var g = "<div" + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === qe.div ? g += ">" : (a = re(c), g += ">" + Ma(a).toString() + "</div>", a = a.rb());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? a = 0 : a = null);
        g = se(g, a);
        return se(Oc(g).toString(), null)
    };
    ze = function(a) {
        ue();
        var b = ve.googleToken[5] || 0;
        a && (0 != b || we[3] >= xe() ? ye.md(a) : (ye.yd().push(a), ye.Rd()));
        we[3] >= xe() && we[2] >= xe() || ye.Rd()
    };
    Be = function(a) {
        a = Ae(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    De = function(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.Ce(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        ia(a);
        ka(a, function(b, c) {
            return b - c
        });
        return a
    };
    Ee = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    Ge = function(a, b, c, d) {
        var e = new _.Fe,
            f = "",
            g = function(A) {
                try {
                    var y = "object" === typeof A.data ? A.data : JSON.parse(A.data);
                    f === y.paw_id && (_.ad(a, "message", g), y.error ? e.reject(Error(y.error)) : e.resolve(d(y)))
                } catch (J) {}
            },
            h;
        if ("function" === typeof(null == (h = a.gmaSdk) ? void 0 : h.getQueryInfo)) return _.Za(a, "message", g), f = c(a.gmaSdk), e.promise;
        var k, l, m, n, p, t;
        return "function" === typeof(null == (k = a.webkit) ? void 0 : null == (l = k.messageHandlers) ? void 0 : null == (m = l.getGmaQueryInfo) ? void 0 : m.postMessage) || "function" === typeof(null == (n = a.webkit) ? void 0 : null == (p = n.messageHandlers) ? void 0 : null == (t = p.getGmaSig) ? void 0 : t.postMessage) ? (f = String(Math.floor(2147483647 * nd())), _.Za(a, "message", g), b(a.webkit.messageHandlers, f), e.promise) : null
    };
    He = function(a) {
        return Ge(a, function(b, c) {
            var d;
            return void(null != (d = b.getGmaQueryInfo) ? d : b.getGmaSig).postMessage(c)
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Ie = function(a) {
        var b, c;
        return null != (c = (B = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.u(B, "find")).call(B, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Je = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e, f = null != (e = b.googletag.queryIds) ? e : [];
                f.push(c);
                500 < f.length && f.shift();
                b.googletag.queryIds = f
            }
        } catch (g) {}
    };
    Le = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = _.z(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a,
                f = d.value;
            d = c;
            d = void 0 === d ? null : d;
            var g = e.document;
            var h = f.x,
                k = f.y;
            g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
            if (g = g.elementFromPoint(h, k)) {
                if (!(h = Ke(g, e, f, d))) a: {
                    d = void 0 === d ? null : d;h = e.document;
                    for (g = g.offsetParent; g && g != h.body; g = g.offsetParent)
                        if (k = Ke(g, e, f, d)) {
                            h = k;
                            break a
                        }
                    h = null
                }
                d = h || null
            } else d = null;
            if (d) return d
        }
        return null
    };
    Ke = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== Me(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= _.Ne(_.Oe, a).width && 1 >= _.Ne(_.Oe, a).height ? !0 : !1;
        d && d.j("ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    };
    Pe = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.Ce(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    Re = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.Qe(d, function(e) {
                    return !_.u(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = Pe(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    Se = function(a, b) {
        .001 > nd() && qd({
            c: a,
            s: b
        }, "gpt_whirs")
    };
    Te = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    _.We = function(a) {
        _.C(Ue).j = !0;
        return Ve[a]
    };
    Ze = function() {
        var a = Xe(),
            b = !_.C(Ue).j,
            c = Ye;
        Ye = void 0;
        if (!b) {
            if (c) throw Error(c());
            throw Error(String(b));
        }
        _.u(Object, "assign").call(Object, Ve, a._vars_);
        a._vars_ = Ve
    };
    af = function(a) {
        var b = _.Ad($e);
        if (a.length <= b) return {
            url: a,
            nd: 0
        };
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        b = c;
        return {
            url: b,
            nd: a.length - b.length + 8
        }
    };
    bf = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    cf = function(a, b) {
        b = void 0 === b ? window : b;
        return !!bf(a, b)
    };
    gf = function(a) {
        var b = new df;
        b = ac(b, 1, Date.now(), 0);
        b = ac(b, 2, a.pvsid, 0);
        b = ac(b, 3, a.ya, "");
        var c = _.C(Dd).j();
        b = ef(b, 4, c);
        a = ac(b, 5, a.Te, 0);
        var d;
        if (b = null == (d = w.globalThis.performance) ? void 0 : d.memory) {
            d = new ff;
            try {
                ac(d, 1, b.jsHeapSizeLimit, 0)
            } catch (e) {}
            try {
                ac(d, 2, b.totalJSHeapSize, 0)
            } catch (e) {}
            try {
                ac(d, 3, b.usedJSHeapSize, 0)
            } catch (e) {}
        } else d = void 0;
        d && Ec(a, 10, d);
        return a
    };
    mf = function(a, b) {
        var c = hf();
        if (a.Mb) {
            var d = a.kb;
            a = gf(a);
            var e = new jf;
            b = ac(e, 1, b, !1);
            c = ac(b, 2, c, 0);
            c = kf(a, 6, lf, c);
            Uc(d, c)
        }
    }; of = function(a, b) {
        if (!document.getElementById("gatc:host:script")) {
            var c = document.createElement("script");
            c.id = "gatc:host:script";
            Va(c, a.be.Fe);
            a.Cd.appendChild(c)
        }
        a = window.gatc_host;
        nf(a) ? b(a) : Array.isArray(a) && "function" === typeof a.push ? a.push(b) : window.gatc_host = [b]
    };
    tf = function(a, b) {
        b = void 0 === b ? pf : b;
        var c = function(e) {
                "string" === typeof e && (e = qf.j(e), a(e))
            },
            d = new rf; of (b, function(e) {
            if (nf(e)) {
                var f = new sf;
                ac(f, 1, qf.m, 0);
                e.openConsoleTab(f.X(), c, function(g) {
                    if (!(d.j instanceof MessagePort)) {
                        var h = d.j;
                        d.j = g;
                        g = _.z(h);
                        for (h = g.next(); !h.done; h = g.next())(h = h.value) && d.send(h)
                    }
                })
            }
        });
        return d
    };
    vf = function(a, b) {
        uf.has(a);
        uf.set(a, b)
    };
    Xe = function() {
        var a;
        return null != (a = _.r.googletag) ? a : _.r.googletag = {
            cmd: []
        }
    };
    wf = function(a, b) {
        var c = Xe();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    yf = function(a) {
        if (a = xf[a]) {
            var b, c, d;
            return null != (d = null == (c = (b = Xe())[a]) ? void 0 : c.call(b)) ? d : null
        }
        return null
    };
    Ff = function(a) {
        var b = new zf;
        if (Af(a)) return Bf(b, 1, Cf, a), b;
        if ("number" === typeof a) return Bf(b, 2, Cf, a), b;
        if ("boolean" === typeof a) return Bf(b, 3, Cf, a), b;
        if (void 0 === a) return Bf(b, 4, Cf, 2), b;
        if (null === a) return Bf(b, 4, Cf, 1), b;
        if ("function" === typeof a) return Bf(b, 7, Cf, a.toString()), b;
        if (Array.isArray(a)) {
            var c = new Df;
            Ef(c, a.map(function(h) {
                return Ff(h)
            }));
            kf(b, 5, Cf, c);
            return b
        }
        c = new Gf;
        var d = Hf(c),
            e = !1;
        if (a === Xe()) x(c, 2, 1), e = !0;
        else if (void 0 !== a.constructor && uf.has(a.constructor)) {
            var f = uf.get(a.constructor);
            x(c, 2, f);
            e = !0;
            8 === f ? (f = a.getSlotId().getDomId(), If(c, Jf(new Kf, Lf().m[f]))) : 7 === f && (f = Lf().j, If(c, Mf(f)))
        }
        a = _.z(_.u(Object, "entries").call(Object, a));
        for (f = a.next(); !f.done; f = a.next()) {
            var g = _.z(f.value);
            f = g.next().value;
            g = g.next().value;
            e && "function" === typeof g || d.set(f, Ff(g))
        }
        kf(b, 6, Cf, c);
        return b
    };
    G = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        _.We(148) && (Nf || (Nf = new Of, Nf.initialize()), c = Pf(b, c));
        return function() {
            var e = Ia.apply(0, arguments),
                f = _.Qf(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Mb && a.nf) {
                    var h = a.kb,
                        k = gf(a);
                    var l = ac(k, 5, a.Se, 0);
                    var m = new Rf;
                    var n = ac(m, 1, b, 0);
                    var p = ac(n, 2, g, 0);
                    var t = kf(l, 9, lf, p);
                    Uc(h, t)
                }
            } catch (A) {}
            return f
        }
    };
    _.Qf = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = Ia.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.C(Sf);
            try {
                var l = _.E(Tf);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) Uf.call(this, a, 110, m);
                    else if (Uf.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if ((e = h) && Vf && Wf() && (Vf.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_start"), Vf.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_end")), !g && !d) throw m;
                }
            }
            return f
        }
    };
    _.Xf = function(a, b, c, d) {
        return _.Qf(a, b, c, void 0 === d ? !1 : d)()
    };
    Uf = function(a, b, c) {
        if (a.Wd) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new Yf,
                e = new Zf;
            try {
                var f = Cd(window);
                ac(e, 1, f, 0)
            } catch (p) {}
            try {
                var g = _.C(Dd).j();
                ef(e, 2, g)
            } catch (p) {}
            try {
                ac(e, 3, window.document.URL, "")
            } catch (p) {}
            f = Ec(d, 2, e);
            g = new $f;
            b = ac(g, 1, b, 0);
            try {
                var h = Af(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                ac(b, 2, h, "")
            } catch (p) {}
            try {
                var k = Af(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                ac(b, 3, k, "")
            } catch (p) {}
            try {
                var l = Af(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && ef(b, 4, l.split(/\n\s*/))
            } catch (p) {}
            h = Ec(f, 1, b);
            k = new ag;
            try {
                ac(k, 1, a.Za || a.ya, "")
            } catch (p) {}
            try {
                var m = bg();
                ac(k, 2, m, 0)
            } catch (p) {}
            try {
                var n = [].concat(_.Sc(_.u(cg, "keys").call(cg)));
                ef(k, 3, n)
            } catch (p) {}
            kf(h, 4, dg, k);
            ac(h, 5, a.sd, 0);
            Tc(a.kb, h)
        }
    };
    fg = function(a, b) {
        var c, d;
        return null != (d = null == (c = _.u(a, "find").call(a, function(e) {
            e = hc(e, eg, 1);
            return e.getWidth() <= b.getWidth() && e.getHeight() <= b.getHeight()
        })) ? void 0 : fc(c, eg, 2)) ? d : null
    };
    jg = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && fc(a, gg, 6).length ? fg(fc(a, gg, 6), hg(ig(new eg, b), c)) : fc(a, eg, 5)
    };
    lg = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = kg(!1, b), c = jg(a, b.width, b.height));
        null != c || (c = jg(a));
        return null == c ? [] : c.map(function(d) {
            return I(d, 3) ? "fluid" : [d.getWidth(), d.getHeight()]
        })
    };
    ng = function(a) {
        if (!lg(a).length && mg(a, 16)) return "1x1";
        var b = [],
            c = !1;
        a = _.z(lg(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    pg = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(a.getAdUnitPath()), c.push(ng(a)), c.push(a.getDomId()));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? og(c.join(":")).toString() : "0"
    };
    qg = function(a) {
        return 0 !== a && 1 !== a
    };
    rg = function(a, b) {
        var c;
        return !(null != (c = I(b, 22)) ? !c : !I(a, 15))
    };
    tg = function(a) {
        var b = a.document;
        return sg(a) ? b.URL : b.referrer
    };
    wg = function(a) {
        try {
            return ug(a, window.top)
        } catch (b) {
            return new _.vg(-12245933, -12245933)
        }
    };
    zg = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Ne(xg, a), a = new _.yg(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Cg = function(a, b) {
        for (var c = {}, d = _.z(_.u(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = Sb(b[e]),
                g = _.C(Ag),
                h = g.j.get(e);
            null == h ? h = ++_.C(Sf).A : g.j.delete(e);
            x(f, 20, h);
            c[e] = f
        }
        a = Sb(a);
        b = new Date(Date.now());
        b = b.getUTCFullYear() + Bg(b.getUTCMonth() + 1) + Bg(b.getUTCDate());
        return {
            W: a,
            R: c,
            mf: b
        }
    };
    Eg = function() {
        for (var a = "", b = _.z(Dg()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Dg = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    Hg = function(a, b) {
        return Fg(a, b) || Gg(a, b)
    };
    Mg = function(a, b, c, d) {
        var e = Hg(b, a);
        if (!e) return null;
        var f = wg(e),
            g = e === Gg(b, a),
            h = Ig(function() {
                var p = g ? Gg(b, a) : e;
                return p && Jg(p, window)
            }),
            k = function(p) {
                var t;
                return null == (t = h()) ? void 0 : t.getPropertyValue(p)
            };
        c = lg(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = Kg(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = Kg(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && Lg(e) ? f : new _.vg(-12245933, -12245933)
    };
    Ng = function(a, b, c, d) {
        var e = Gg(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = Mg(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    Og = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    Pg = function(a) {
        return Og(a) + "__container__"
    };
    Fg = function(a, b) {
        var c;
        return (null == (c = Gg(a, b)) ? void 0 : c.querySelector('[id="' + Pg(a) + '"]')) || null
    };
    Qg = function(a, b) {
        var c, d;
        return null != (d = null == (c = Fg(a, b)) ? void 0 : c.querySelector('iframe[id="' + Og(a) + '"]')) ? d : null
    };
    Rg = function(a) {
        var b = window;
        try {
            var c, d;
            null == (c = b.performance) || null == (d = c.mark) || d.call(c, a)
        } catch (e) {}
    };
    Gg = function(a, b) {
        b = void 0 === b ? document : b;
        return Lf().A.get(a) || b.getElementById(a.getDomId())
    };
    Sg = function(a) {
        return Math.round(Number(Kg(a)))
    };
    Ug = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.Tg(a, c), a = a.parentElement
    };
    Vg = function(a, b, c, d, e) {
        _.Tg(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            g = "rtl" === d.direction,
            h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.Tg(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.Tg(a, f)), !0) : !1
    };
    Xg = function(a, b, c, d, e, f, g, h, k) {
        var l = ng(d);
        _.r.setTimeout(_.Qf(a, 459, function() {
            return void Wg(a, b, c, e, f, g, l, h, k)
        }), 500)
    };
    Wg = function(a, b, c, d, e, f, g, h, k) {
        if (_.r.IntersectionObserver) {
            var l = null,
                m, n = null != (m = Qg(c, b)) ? m : Gg(c, b);
            m = _.Qf(a, 459, function(p) {
                if (p = p && p[0]) {
                    var t = p.boundingClientRect,
                        A = window.innerWidth,
                        y = Math.round(t.left),
                        J = Math.round(t.right),
                        F = 0 > y + 2,
                        K = 0 < J - (A + 2);
                    if (p.intersectionRatio >= 1 - ((0 <= Math.round(t.left) ? 0 : 2) + (Math.round(t.right) <= window.innerWidth ? 0 : 2)) / e || F || K) Yg(h, function(H) {
                        if (F || K) {
                            var L = new Zg;
                            L.set(8);
                            $g(n) && L.set(10);
                            L = ah(L)
                        } else L = bh(b, c);
                        var W = ch(c, n, f),
                            P = W.Oe;
                        W = W.Pe;
                        dh(H, a);
                        M(H, "qid", k);
                        M(H, "iu", c.getAdUnitPath());
                        M(H, "e", String(L));
                        F && M(H, "ofl", String(y));
                        K && M(H, "ofr", String(J - A));
                        M(H, "ret", e + "x" + f);
                        M(H, "req", g);
                        M(H, "bm", String(d));
                        M(H, "efh", Number(P));
                        M(H, "stk", Number(W));
                        M(H, "ifi", eh(window))
                    }, _.Ad(fh)), l && l.unobserve(n)
                }
            });
            n && (l = new _.r.IntersectionObserver(m, {
                threshold: [1]
            }), l.observe(n))
        }
    };
    bh = function(a, b) {
        var c = Qg(b, a) || Gg(b, a),
            d = new Zg;
        try {
            var e = c.getBoundingClientRect(),
                f = e.left,
                g = e.top,
                h = e.width,
                k = e.height,
                l = Gg(b, a),
                m = Jg(l, window);
            if ("hidden" === m.visibility || "none" === m.display) return ah(d);
            var n = Sg(m.getPropertyValue("border-top-width") || 0) + 1;
            b = f + h;
            k = g + k;
            var p = a.elementsFromPoint(f + n + 2, g + n);
            var t = a.elementsFromPoint(b - n - 2, g + n);
            var A = a.elementsFromPoint(b - n - 2, k - n);
            var y = a.elementsFromPoint(f + n + 2, k - n);
            var J = a.elementsFromPoint(b / 2, k - n)
        } catch (K) {
            return d.set(1), ah(d)
        }
        if (!(p && p.length && t && t.length && A && A.length && y && y.length && J && J.length)) return d.set(7), ah(d);
        a = function(K, H) {
            for (var L = !1, W = 0; W < K.length; W++) {
                var P = K[W];
                if (L) {
                    var aa = Jg(P, window);
                    if ("hidden" !== aa.visibility && !gh(P) && !F(c, P)) {
                        d.set(H);
                        "absolute" === aa.position && d.set(11);
                        break
                    }
                } else c === P && (L = !0)
            }
        };
        hh(c) && d.set(9);
        var F = function(K, H) {
            return ih(K, H) || ih(H, K)
        };
        f = p[0];
        c === f || F(c, f) || gh(f) || d.set(2);
        f = t[0];
        c === f || F(c, f) || gh(f) || d.set(3);
        f = A[0];
        c === f || F(c, f) || gh(f) || d.set(4);
        f = y[0];
        c === f || F(c, f) || gh(f) || d.set(5);
        if (gh(c)) return ah(d);
        a(p, 12);
        a(t, 13);
        a(A, 14);
        a(y, 15);
        a(J, 6);
        return ah(d)
    };
    $g = function(a) {
        var b = !1,
            c = !1;
        return jh(a, function(d) {
            c = c || "scroll" === d.overflowX || "auto" === d.overflowX;
            return (b = b || "flex" === d.display) && c
        })
    };
    ch = function(a, b, c) {
        var d = (a = Gg(a)) && Jg(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        kh(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = lh(k, _.r, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.u(l, "endsWith").call(l, "px") ? Sg(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.u(mh, "includes").call(mh, l) || (e = !1)
                }
            f || (k = Jg(k, _.r), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            Oe: e,
            Pe: f
        }
    };
    lh = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.u(mh, "includes").call(mh, e.height) || (null == e ? 0 : e.maxHeight) && !_.u(nh, "includes").call(nh, e.maxHeight) || oh(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.u(mh, "includes").call(mh, g) || !!f && !_.u(nh, "includes").call(nh, f)
        }, c, d) ? !1 : !0
    };
    oh = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g],
                    l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (H) {
                    if (15 == H.code) throw H.styleSheet = k, H;
                }
                h = l
            } catch (H) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length)
                for (l = 0; l < Math.min(h.length, e); ++l) try {
                    var m = h[l],
                        n, p = c;
                    if (!(n = f.call(a, m.selectorText) && p(m))) a: {
                        var t = void 0;p = a;
                        var A = c,
                            y = e,
                            J = null != (t = m.cssRules) ? t : [];
                        for (t = 0; t < Math.min(J.length, y); t++) {
                            var F = J[t],
                                K = A;
                            if (f.call(p, F.selectorText) && K(F)) {
                                n = !0;
                                break a
                            }
                        }
                        n = !1
                    }
                    if (n) return !0
                } catch (H) {}
        }
        return !1
    };
    gh = function(a) {
        return jh(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    hh = function(a) {
        return jh(a, function(b) {
            var c;
            return (B = ["left", "right"], _.u(B, "includes")).call(B, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    ph = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    rh = function(a, b, c) {
        c = void 0 === c ? qh : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.Za(a, "load", function() {
            return void c(a, b)
        }))
    };
    sh = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    th = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    uh = function(a) {
        if (a === a.top || Kc(a.top)) return w.Promise.resolve({
            status: 4
        });
        var b = sh(a);
        if (!b) return w.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && th(a.document.referrer)) return w.Promise.resolve({
            status: 3
        });
        var c = new _.Fe;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                ac: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    yh = function(a) {
        a = void 0 === a ? window : a;
        var b = void 0 === b ? vh : b;
        var c = wh(a);
        return c.messageChannel ? w.Promise.resolve(c.messageChannel) : new w.Promise(function(d) {
            var e = _.$c("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Ka(b).toString();
            var f = (new URL(b.toString())).origin,
                g = xh({
                    destination: a,
                    jc: e,
                    origin: f,
                    Fa: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(function(h) {
                "goog:topics:frame:handshake:ack" === h.data && d(g)
            });
            c.messageChannel = g;
            a.document.documentElement.appendChild(e)
        })
    };
    Ch = function(a, b, c, d, e, f) {
        var g = zh(f),
            h = g.Yb,
            k = g.Xb;
        b = wh(b);
        b.getTopicsPromise || (c = {
            message: "goog:topics:frame:get:topics",
            callApi: c,
            sendGen204: d
        }, d && (c.pvsid = Cd(window)), a = a.j(c).then(function(l) {
            l = l.data;
            if ("string" !== typeof l && !Zc()(l)) {
                var m = Error(JSON.stringify(l));
                Uf(e.context, 989, m);
                return 7
            }
            if ((k || l !== h) && f) try {
                var n = new Ah;
                m = x(n, 2, _.wd());
                "string" === typeof l ? Bf(m, 1, Bh, l) : Bf(m, 3, Bh, l);
                f.setItem("goog:cached:topics", m.X())
            } catch (p) {}
            return l
        }), b.getTopicsPromise = a);
        return h && !k ? w.Promise.resolve(h) : b.getTopicsPromise
    };
    zh = function(a) {
        if (!a) return {
            Yb: null,
            Xb: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Yb: null,
                Xb: !0
            };
            var c = cd(Ah, b),
                d = cc(c, Bh);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    e = Dh(c, dc(c, Bh, 1));
                    break;
                case 3:
                    e = kd(c, dc(c, Bh, 3), 0);
                    break;
                default:
                    Fa(d)
            }
            return {
                Yb: e,
                Xb: ld(c, 2) + 6048E5 < _.wd()
            }
        } catch (f) {
            return {
                Yb: null,
                Xb: !0
            }
        }
    };
    wh = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    Eh = function(a) {
        var b = "";
        Jc(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    Ih = function(a) {
        a = (Kc(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!Fh(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    Lh = function(a, b) {
        var c = Jh.get(a);
        c || (b = c = b(), Kh.set(b, a), Jh.set(a, b));
        return c
    };
    Nh = function(a, b) {
        return Lh(b, function() {
            return new Mh(a, b)
        })
    };
    N = function(a) {
        return function() {
            return new Oh(a, [].concat(_.Sc(Ia.apply(0, arguments))))
        }
    };
    Ph = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Ph(b) : String(b)
        }).join(", ") + "]"
    };
    Qh = function(a, b) {
        b = Ph(b);
        b = b.substring(1, b.length - 1);
        return new Oh(96, [a, b])
    };
    Sh = function(a) {
        var b;
        return null != (b = (B = _.u(Object, "values").call(Object, Rh), _.u(B, "find")).call(B, function(c) {
            return c === a
        })) ? b : null
    };
    Uh = function(a, b, c) {
        return Lh(c, function() {
            return new Th(a, b, c)
        })
    };
    Wh = function(a, b, c) {
        return Lh(c, function() {
            return new Vh(a, b, c)
        })
    };
    bi = function(a) {
        var b = window;
        "complete" === _.r.document.readyState ? _.Xf(a, 94, function() {
            Xe()._pubconsole_disable_ || null !== Xh(b) && Yh(a, b)
        }) : _.Za(_.r, "load", _.Qf(a, 94, function() {
            Xe()._pubconsole_disable_ || null !== Xh(b) && Yh(a, b)
        }));
        wf("disablePublisherConsole", G(a, 93, Zh));
        wf("onPubConsoleJsLoad", G(a, 731, $h));
        wf("openConsole", G(a, 732, function(c) {
            ai(a, void 0 === c ? "" : c)
        }))
    };
    Yh = function(a, b) {
        b = void 0 === b ? _.r : b;
        if (!ci) {
            var c = new di("gpt_pubconsole_loaded");
            dh(c, a);
            M(c, "param", String(Xh(b)));
            M(c, "api", String(ei));
            fi(c, 1);
            gi(b.document, Ja(Qc(hi).toString()));
            ci = !0
        }
    };
    Xh = function(a) {
        var b = tg(a),
            c;
        return null != (c = (B = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.u(B, "find")).call(B, function(d) {
            return null !== ii(b, d)
        })) ? c : null
    };
    Zh = function() {
        Xe()._pubconsole_disable_ = !0
    };
    $h = function() {
        ji && (Xe().console.openConsole(ki), ki = void 0, ji = !1)
    };
    ai = function(a, b) {
        b = void 0 === b ? "" : b;
        ei = !0;
        var c;
        (null == (c = Xe()) ? 0 : c.console) ? Xe().console.openConsole(b): (b && (ki = b), ji = !0, Yh(a))
    };
    ti = function(a, b, c, d, e) {
        if ("string" !== typeof c || li(c)) O(e, Qh("Slot.setTargeting", [c, d]), a);
        else {
            var f = [];
            Array.isArray(d) ? f = d : mi(d) ? f = _.u(Array, "from").call(Array, d) : d && (f = [d]);
            f = f.map(String);
            (d = (B = fc(b, ni, 9), _.u(B, "find")).call(B, function(g) {
                return oi(g) === c
            })) ? pi(d, f): (d = pi(qi(new ni, c), f), ri(b, 9, ni, d));
            e.info(si(c, f.join(), b.getAdUnitPath()), a)
        }
    };
    ui = function(a, b, c, d) {
        if (null != c && "object" === typeof c)
            for (var e = _.z(_.u(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next()) f = f.value, ti(a, b, f, c[f], d);
        else d.error(Qh("Slot.updateTargetingFromMap", [c]), a)
    };
    wi = function(a, b, c) {
        return Lh(c, function() {
            return new vi(a, b, c, c.j)
        })
    };
    xi = function(a) {
        return _.u(Object, "assign").call(Object, {}, a, _.u(Object, "fromEntries").call(Object, _.u(Object, "entries").call(Object, a).map(function(b) {
            b = _.z(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    Ai = function() {
        var a = {},
            b = xi(yi);
        a.OutOfPageFormat = b;
        b = xi(zi);
        a.TrafficSource = b;
        return a
    };
    Di = function() {
        for (var a = Bi(Ci) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "38"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-38"
    };
    Ii = function() {
        if (Ei) return Ei;
        for (var a = Fi(Gi), b = [], c = 0; c < a.length; c += 2) Hi(a[c], a[c + 1], b);
        return Ei = b.join("&")
    };
    Oi = function(a, b) {
        if (!b || !_.fa(b)) return null;
        var c = !1,
            d = new Ji;
        _.Ki(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? x(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? x(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? x(d, 3, b.sandbox) : c = g = !0;
                    break;
                case "useUniqueDomain":
                    Li();
                    return;
                default:
                    g = !0
            }
            g && a.error(Mi("setSafeFrameConfig", Ni(b), f, Ni(e)))
        });
        return c ? null : d
    };
    Qi = function(a) {
        var b = new Ji;
        a = _.z(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) Pi(c, 1) && x(b, 1, I(c, 1)), Pi(c, 2) && x(b, 2, I(c, 2)), Pi(c, 3) && x(b, 3, I(c, 3)), Pi(c, 4) && x(b, 4, I(c, 4));
        return b
    };
    Si = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Ri) : "fluid" === a
    };
    Ti = function(a) {
        return Array.isArray(a) && 2 === a.length && Ri(a[0]) && Ri(a[1])
    };
    Vi = function(a) {
        return Array.isArray(a) ? hg(ig(new eg, a[0]), a[1]) : Ui()
    };
    Xi = function(a) {
        var b = [];
        if (Wi(a)) b.push(Vi(a));
        else if (Array.isArray(a)) {
            a = _.z(a);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, Wi(c)) b.push(Vi(c));
                else {
                    a: {
                        var d = ["fluid"];
                        if (mi(c) && mi(d) && c.length == d.length) {
                            for (var e = c.length, f = na, g = 0; g < e; g++)
                                if (!f(c[g], d[g])) {
                                    c = !1;
                                    break a
                                }
                            c = !0
                        } else c = !1
                    }
                    c && b.push(Ui())
                }
        }
        return b
    };
    Yi = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) return null;
        var b = a[0];
        a = a[1];
        if ("number" === typeof b && 0 <= b) b = Math.floor(b);
        else if (null !== b) return null;
        if ("number" === typeof a && 0 <= a) a = Math.floor(a);
        else if (null !== a) return null;
        return hg(ig(new eg, b), a)
    };
    $i = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return {
            Oc: [],
            La: null
        };
        if (Array.isArray(a) ? 0 : Array.isArray(a.fixed) || "fluid" === a.fixed || Array.isArray(a.max)) {
            var c = Xi(a.fixed),
                d;
            if (d = Yi(a.max)) {
                var e = a.min ? Yi(a.min) : new eg;
                null != (null == e ? void 0 : e.getWidth()) || null != e && ig(e, 0);
                null != (null == e ? void 0 : e.getHeight()) || null != e && hg(e, 0);
                d = {
                    max: d,
                    min: e
                }
            } else d = {
                max: null,
                min: null
            };
            e = d;
            d = e.max;
            e = e.min;
            if (a.max && !d) throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
            if (a.min && !e) throw Error("Invalid GPT minimum size: " + JSON.stringify(a));
            var f;
            if (null != (f = a.fixed) && f.length || d) {
                if (0 === d.getWidth() || 0 === d.getHeight()) throw Error("Invalid GPT size: maximums cannot be zero: " + JSON.stringify(a));
                if (e) {
                    b = e.getWidth();
                    f = d.getWidth();
                    if (null != b && null != f && b > f) throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                    b = e.getHeight();
                    f = d.getHeight();
                    if (null != b && null != f && b > f) throw Error("Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
                }
            } else {
                var g, h;
                null == (g = b.console) || null == (h = g.warn) || h.call(g, "Invalid GPT fixed size specification: " + JSON.stringify(a))
            }
            d && e ? (a = new Zi, a = Ec(a, 1, d), a = Ec(a, 2, e)) : a = null;
            return {
                Oc: c,
                La: a
            }
        }
        a.length || null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a));
        return {
            Oc: Xi(a),
            La: null
        }
    };
    Wi = function(a) {
        return Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    bj = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new aj("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!Ti(b)) throw new aj("Size must be an array of two non-negative integers");
        b = hg(ig(new eg, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = Xi(a[1]), 0 === a.length) throw new aj("At least one slot size must be present");
        var c = new gg;
        b = Ec(c, 1, b);
        return Dc(b, 2, a)
    };
    dj = function(a, b, c) {
        return Lh(c, function() {
            return new cj(a, b, c)
        })
    };
    fj = function(a, b, c, d) {
        for (var e = _.z(_.u(Object, "entries").call(Object, ej)), f = e.next(); !f.done; f = e.next()) {
            var g = _.z(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && O(a, g(c, d))
        }
    };
    ij = function(a) {
        return a ? _.E(gj) ? 604800 : _.Ad(hj) || 3600 : -1
    };
    pj = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = ij(void 0 === b ? !1 : b);
        if (!(0 < b) || c && rd(c)) {
            var d = 0;
            try {
                d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (g) {
                d |= 32
            }
            c = c ? sd(c) : null;
            var e = 0;
            try {
                e |= jj(a, 2500);
                if (_.E(kj)) {
                    var f = _.lj(a).clientHeight;
                    e |= f ? 320 > f ? 2097152 : 0 : 1073741824
                }
                e |= mj(a);
                0 < b && !_.nj(_.oj(c, b)) && (e |= 134217728)
            } catch (g) {
                e |= 32
            }
            a = d | e
        } else a = 4194304;
        return a
    };
    sj = function(a, b, c, d, e, f) {
        d = qj(d);
        if (5 !== d) return !1;
        var g = pj(e, "22639388115" !== Te(c.getAdUnitPath()), f);
        _.E(gj) && (g &= -134217729);
        g && (Yg("gpt_int_ns", function(h) {
            M(h, "nsr", g);
            dh(h, a)
        }, _.Ad(rj)), fj(b, g, d, c.getAdUnitPath()));
        return !!g
    };
    tj = function(a) {
        if (4 === a) return 11;
        switch (a) {
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            default:
                return null
        }
    };
    Bj = function(a) {
        a = tj(a);
        if (!a) return null;
        var b = 0;
        if (11 !== a) {
            b |= _.r != _.r.top ? 512 : 0;
            var c = _.uj(_.r);
            c = 26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (c = c.adCount[a]) ? 1 <= c : !1 : !1;
            c && (b |= 64);
            if (b) return b
        }
        if (2 === a || 1 === a) {
            var d = {
                ka: _.r,
                Gd: vj
            };
            0 === (0, _.wj)() && (d.Gd = 3E3, d.Hd = 650);
            c = 0;
            try {
                var e = d.ka;
                c |= e != e.top ? 512 : 0;
                var f = d.ka;
                var g = Math.min(f.screen.width || 0, f.screen.height || 0);
                c |= g ? 320 > g ? 8192 : 0 : 2048;
                var h = d.ka,
                    k;
                if (k = h.navigator) {
                    var l = h.navigator.userAgent;
                    k = /Android 2/.test(l) || /iPhone OS [34]_/.test(l) || /Windows Phone (?:OS )?[67]/.test(l) || /MSIE.*Windows NT/.test(l) || /Windows NT.*Trident/.test(l)
                }
                c |= k ? 1048576 : 0;
                c = d.Hd ? c | (d.ka.innerHeight >= d.Hd ? 0 : 1024) : c | (_.xj(d.ka) ? 0 : 8);
                c |= jj(d.ka, d.Gd);
                c |= mj(d.ka)
            } catch (m) {
                c |= 32
            }
            switch (d.Og) {
                case 2:
                    e = d.ka;
                    g = d.Ca;
                    g = void 0 === g ? null : g;
                    f = yj(e.innerWidth, 3, 0, Math.min(Math.round(e.innerWidth / 320 * 50), zj) + 15, 3);
                    null != Le(e, f, void 0 === g ? null : g) && (c |= 16777216);
                    break;
                case 1:
                    e = d.ka, g = d.Ca, g = void 0 === g ? null : g, f = e.innerWidth, h = e.innerHeight, k = Math.min(Math.round(e.innerWidth / 320 * 50), zj) + 15, l = yj(f, 3, h - k, h, 3), 25 < k && l.push({
                        x: f - 25,
                        y: h - 25
                    }), null != Le(e, l, void 0 === g ? null : g) && (c |= 16777216)
            }
            if (e = d.Pg) e = d.ka, d = d.Ca, d = void 0 === d ? null : d, d = void 0 === d ? null : d, g = e.innerWidth, f = e.innerHeight, h = _.Ad(Aj), g = yj(g, 10, f - h, f, 10), e = null != Le(e, g, d);
            e && (c |= 16777216);
            b |= c
        } else 8 === a ? b |= pj(_.r) : 11 !== a && (b |= 32);
        b || (c = _.uj(_.r), c.adCount = c.adCount || {}, c.adCount[a] = c.adCount[a] + 1 || 1);
        return b
    };
    Dj = function(a) {
        var b = new RegExp("(^|,|/)" + a + "($|,|/)");
        return [].concat(_.Sc(_.C(Cj).fa)).some(function(c) {
            return b.test(Te(c.getAdUnitPath()))
        })
    };
    Fj = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = Ej.exec(null != (b = null == (a = _.We(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    Gj = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    Hj = function(a, b) {
        var c = b.A;
        return a.map(function(d) {
            return _.u(c, "find").call(c, function(e) {
                return e.j === d
            })
        }).filter(Xc())
    };
    Kj = function(a, b, c, d, e) {
        var f = Ij(a, b, d, e, void 0, !0),
            g = f.slotId;
        f = f.Ra;
        if (!g || !f) return O(b, Qh("PubAdsService.definePassback", [d, e])), null;
        x(f, 17, !0);
        c.Sa(g, f);
        return {
            Nd: wi(a, b, new Jj(a, g, c)),
            Ra: f
        }
    };
    Mj = function(a, b, c) {
        return Lh(c, function() {
            return new Lj(a, b, c)
        })
    };
    la = function(a, b) {
        a: {
            b = b[0];a = a[0];
            for (var c = ja, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = ja(b.length, a.length)
        }
        return b
    };
    Nj = function(a, b) {
        return null == a ? void 0 : a.replace(/\$\{AUCTION_PRICE\}/g, String(b))
    };
    Pj = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(og(a))) ? d : 1E6 * _.Ad(Oj)
    };
    Tj = function(a, b, c, d, e) {
        if ((null == c ? 0 : c.size) || _.Ad(Oj)) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == b ? void 0 : b.adUnits) ? g : [];
            b = {};
            f = _.z(e);
            for (g = f.next(); !g.done; b = {
                    Vb: b.Vb
                }, g = f.next()) {
                e = g.value;
                g = e.code;
                var h = e.bids;
                e = void 0;
                if (g && null != (e = h) && e.length && (g = Pj(g, c), b.Vb = g / 1E6, !(0 >= g))) {
                    var k = void 0;
                    e = {};
                    h = _.z(null != (k = h) ? k : []);
                    for (k = h.next(); !k.done; e = {
                            Ma: e.Ma,
                            Fc: e.Fc
                        }, k = h.next()) {
                        k = k.value;
                        e.Fc = "function" === typeof k.getFloor ? k.getFloor : void 0;
                        e.Ma = Qj(Rj(new Sj, 4), g);
                        k.getFloor = function(m, n) {
                            return function(p) {
                                4 === kd(m.Ma, 1, 0) && Rj(m.Ma, 1);
                                var t = {
                                        currency: "USD",
                                        floor: n.Vb
                                    },
                                    A, y = null == (A = m.Fc) ? void 0 : A.apply(a, [p]);
                                return null != y && y.floor ? (null == y ? 0 : y.currency) && "USD" !== y.currency ? (1 === kd(m.Ma, 1, 0) && (p = Qj(Rj(m.Ma, 6), 1E6 * y.floor), x(p, 3, y.currency)), y) : (y.floor || 0) > n.Vb ? (1 === kd(m.Ma, 1, 0) && Qj(Rj(m.Ma, 5), 1E6 * y.floor), y) : t : t
                            }
                        }(e, b);
                        var l = void 0;
                        null == (l = d) || l.set(k.getFloor, e.Ma)
                    }
                }
            }
        }
    };
    bk = function(a, b, c, d, e, f) {
        d = void 0 === d ? [] : d;
        var g, h, k = null == (g = f.getBidResponsesForAdUnitCode) ? void 0 : null == (h = g.call(f, b.getDomId())) ? void 0 : h.bids,
            l;
        if (null == (l = k) || !l.length) {
            var m;
            k = (null == (m = (0, f.getBidResponsesForAdUnitCode)(b.getAdUnitPath())) ? void 0 : m.bids) || []
        }
        b = k.filter(function(n) {
            return n.auctionId !== c && d.some(function(p) {
                return (B = Vb(p, 2), _.u(B, "includes")).call(B, n.adId)
            })
        });
        b = _.z(b);
        for (f = b.next(); !f.done; f = b.next()) f = f.value, g = Uj(f, e, d), g = Vj(a, Wj(x(Xj(Yj(new Zj, f.bidder), 1), 6, !0), g)), "number" === typeof f.timeToRespond && ak(g, f.timeToRespond)
    };
    ck = function(a, b, c) {
        Pi(a, 3) || (c === b.getAdUnitPath() ? x(a, 3, 1) : c === b.getDomId() && x(a, 3, 2))
    };
    ek = function(a, b, c, d, e, f) {
        (e = null == e ? void 0 : e.get(null != f ? f : function() {
            return null
        })) && 1 !== kd(e, 1, 0) && Ec(b, 5, e);
        mg(a, 5) || (e ? 1 === kd(e, 1, 0) ? dk(a, e) : dk(a, Qj(Rj(new Sj, 1), Pj(c, d))) : dk(a, Rj(new Sj, Pj(c, d) ? 2 : 3)))
    };
    Uj = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new fk;
        if ("number" === typeof a.cpm && (x(d, 2, Math.round(1E6 * a.cpm)), !a.originalCurrency || a.originalCurrency === a.currency)) {
            var e = Math.round(1E6 * Number(a.originalCpm));
            isNaN(e) || e === ld(d, 2) || x(d, 8, e)
        }
        "string" === typeof a.currency && x(d, 3, a.currency);
        "string" === typeof a.dealId && (e = gk(new hk, a.dealId), Ec(d, 6, e));
        if (a.adserverTargeting && "object" === typeof a.adserverTargeting) {
            c = _.u(Object, "fromEntries").call(Object, c.map(function(p) {
                return [oi(p), Vb(p, 2)]
            }));
            e = _.z(["", "_" + a.bidder]);
            for (var f = e.next(); !f.done; f = e.next())
                if (f = f.value, _.E(ik)) {
                    var g = [],
                        h = !1,
                        k = _.u(Object, "keys").call(Object, a.adserverTargeting);
                    k = _.z(k);
                    for (var l = k.next(); !l.done; l = k.next()) {
                        l = ("" + l.value + f).slice(0, 20);
                        var m = void 0,
                            n = null == (m = c[l]) ? void 0 : m[0];
                        void 0 !== n && (g.push(l), h || (h = n === a.adId))
                    }
                    h && jk(d, Vb(d, 4).concat(g))
                } else {
                    g = [];
                    h = _.z(_.u(Object, "entries").call(Object, a.adserverTargeting));
                    for (k = h.next(); !k.done; k = h.next())
                        if (k = _.z(k.value), l = k.next().value, k = k.next().value, l = (l + f).slice(0, 20), m = void 0, null != (m = c[l]) && m.length)
                            if (c[l][0] === String(k)) g.push(l);
                            else {
                                g = [];
                                break
                            }
                    jk(d, Vb(d, 4).concat(g))
                }
        }
        switch (a.mediaType || "banner") {
            case "banner":
                x(d, 5, 1);
                break;
            case "native":
                x(d, 5, 2);
                break;
            case "video":
                x(d, 5, 3)
        }
        c = "number" === typeof a.height ? a.height : void 0;
        e = "number" === typeof a.height ? a.width : void 0;
        void 0 !== c && void 0 !== e && kk(d, lk(mk(e), c));
        "string" === typeof a.adId && (x(d, 1, a.adId), b.set(a.adId, {
            height: c,
            width: e,
            adUrl: "string" === typeof a.adUrl ? a.adUrl : void 0,
            ie: "string" === typeof a.ad ? a.ad : void 0,
            format: kd(d, 5, 0),
            cpm: Pi(d, 2) ? ld(d, 2) : void 0
        }));
        return d
    };
    nk = function(a, b) {
        var c = new w.Map,
            d = function(n) {
                var p = c.get(n);
                p || (p = {}, c.set(n, p));
                return p
            },
            e = [];
        a = _.z(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            var k = g,
                l = k.auctionId,
                m = k.bidId;
            k = k.bids;
            "bidTimeout" === h && e.push.apply(e, _.Sc(g));
            if (l === b) switch (h) {
                case "bidRequested":
                    if (!Array.isArray(k)) continue;
                    g = _.z(k);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    m && (d(m).ff = f)
            }
        }
        d = new w.Map;
        a = _.z(_.u(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.z(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.ff, g && h && d.set(f, {
            latency: h - g,
            Ed: !1
        });
        e = _.z(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Ed = !0;
        return d
    };
    pk = function(a, b) {
        return Lh(b, function() {
            return new ok(a, b)
        })
    };
    qk = function(a, b) {
        for (var c = new Zg, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return ah(c)
    };
    rk = function(a, b, c) {
        var d = void 0 === c.Db ? "" : c.Db;
        c = void 0 === c.la ? "," : c.la;
        var e = !1;
        a = a.map(function(f) {
            f = b(f);
            e || (e = !!f);
            return String(f || d)
        });
        return e ? a.join(c) : null
    };
    tk = function(a, b, c) {
        var d = a.map(function(e) {
            return b[e.getDomId()]
        });
        return new w.Map([
            ["ists", {
                value: qk(d, function(e) {
                    return 0 !== qj(e)
                }) || null
            }],
            ["fas", {
                value: rk(d, function(e) {
                    return tj(qj(e))
                }, {
                    Db: 0
                })
            }],
            ["itsi", {
                value: _.E(gj) && a.some(function(e) {
                    var f;
                    return 5 === (null == (f = b[e.getDomId()]) ? void 0 : qj(f))
                }) ? function() {
                    if (!c) return 1;
                    var e, f = Math.max.apply(Math, _.Sc(null != (e = _.oj(c, ij(!0))) ? e : []));
                    return isFinite(f) ? Math.ceil(Math.max(Date.now() - f, 1) / 6E4) : null
                }() : null
            }],
            ["fsapi", {
                value: _.E(_.sk)
            }]
        ])
    };
    uk = function(a) {
        return new w.Map([
            ["rbvs", {
                value: qk(a, function(b) {
                    return 4 === qj(b)
                }) || null
            }]
        ])
    };
    wk = function(a, b) {
        return new w.Map([
            ["ucis", {
                value: a.map(function(c) {
                    c = b.j.get(c);
                    null != c.Pb || (c.Pb = window === window.top ? (++b.I).toString(36) : vk());
                    return c.Pb
                }),
                options: {
                    la: "|"
                }
            }],
            ["oid", {
                value: 2
            }]
        ])
    };
    yk = function(a, b) {
        var c = b.R,
            d = new w.Map,
            e = new w.Map;
        b = _.z(b.W.na());
        for (var f = b.next(); !f.done; f = b.next()) {
            var g = f.value;
            e.set(oi(g), [Vb(g, 2)[0]])
        }
        for (b = 0; b < a.length; b++)
            if (g = c[a[b].getDomId()])
                for (g = _.z(g.na()), f = g.next(); !f.done; f = g.next()) {
                    var h = f.value;
                    f = oi(h);
                    var k = e.get(f) || [];
                    h = Vb(h, 2)[0];
                    1 === a.length ? k[0] = h : h !== k[0] && (k[b + 1] = h);
                    e.set(f, k)
                }
        a = [];
        c = _.z(_.u(e, "keys").call(e));
        for (b = c.next(); !b.done; b = c.next()) g = b.value, b = xk()[g], g = e.get(g), b && g && (1 < g.length ? (g = g.map(function(l) {
            return encodeURIComponent(l || "")
        }).join(), a.push(b + "," + g)) : 1 === g.length && "url" !== b && d.set(b, {
            value: g[0]
        }));
        a.length && d.set("sps", {
            value: a.join("|")
        });
        return d
    };
    Kk = function(a, b) {
        var c;
        var d = b.document.domain;
        var e = null != (c = rd(a) && td(b) ? b.document.cookie : null) ? c : "",
            f = b.history.length,
            g = b.screen,
            h = b.document.referrer;
        if (zk()) d = window.gaGlobal || {};
        else {
            var k = Math.round((new Date).getTime() / 1E3),
                l = b.google_analytics_domain_name;
            d = "undefined" == typeof l ? Ak("auto", d) : Ak(l, d);
            var m = -1 < e.indexOf("__utma=" + d + "."),
                n = -1 < e.indexOf("__utmb=" + d);
            (c = (Bk() || window).gaGlobal) || (c = {}, (Bk() || window).gaGlobal = c);
            var p = !1;
            if (m) h = e.split("__utma=" + d + ".")[1].split(";")[0].split("."), n ? c.sid = h[3] : c.sid || (c.sid = k + ""), c.vid = h[0] + "." + h[1], c.from_cookie = !0;
            else {
                c.sid || (c.sid = k + "");
                if (!c.vid) {
                    p = !0;
                    n = Math.round(2147483647 * Math.random());
                    m = Ek.appName;
                    var t = Ek.version,
                        A = Ek.language ? Ek.language : Ek.browserLanguage,
                        y = Ek.platform,
                        J = Ek.userAgent;
                    try {
                        var F = Ek.javaEnabled()
                    } catch (H) {
                        F = !1
                    }
                    F = [m, t, A, y, J, F ? 1 : 0].join("");
                    g ? F += g.width + "x" + g.height + g.colorDepth : _.r.java && _.r.java.awt && (g = _.r.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), F += g.screen.width + "x" + g.screen.height);
                    F = F + e + (h || "");
                    for (h = F.length; 0 < f;) F += f-- ^ h++;
                    c.vid = (n ^ Fk(F) & 2147483647) + "." + k
                }
                _.E(Gk) && c.from_cookie || (c.from_cookie = !1)
            }
            if (!c.cid) {
                b: for (k = 999, l && (l = 0 == l.indexOf(".") ? l.substr(1) : l, k = l.split(".").length), l = 999, e = e.split(";"), h = 0; h < e.length; h++)
                    if (g = Hk.exec(e[h]) || Ik.exec(e[h]) || Jk.exec(e[h])) {
                        F = g[1] || 0;
                        if (F == k) {
                            var K = g[2];
                            break b
                        }
                        F < l && (l = F, K = g[2])
                    }p && K && -1 != K.search(/^\d+\.\d+$/) ? (c.vid = K, c.from_cookie = !0) : K != c.vid && (c.cid = K)
            }
            c.dh = d;
            c.hid || (c.hid = Math.round(2147483647 * Math.random()));
            d = c
        }
        return (K = d.from_cookie) && !rd(a) ? new w.Map : new w.Map([
            ["ga_vid", {
                value: d.vid
            }],
            ["ga_sid", {
                value: d.sid
            }],
            ["ga_hid", {
                value: d.hid
            }],
            ["ga_fc", {
                value: K
            }],
            ["ga_cid", {
                value: d.cid
            }],
            ["ga_wpids", {
                value: b.google_analytics_uacct
            }]
        ])
    };
    Lk = function(a, b, c, d) {
        var e = _.$c("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    Mk = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    Rk = function(a, b) {
        for (var c = [], d = [], e = _.z(a), f = e.next(); !f.done; f = e.next()) {
            var g = void 0,
                h = void 0,
                k = void 0;
            var l = b;
            f = Gg(f.value);
            var m = Nk((null == f ? void 0 : f.parentElement) && Jg(f.parentElement, l) || null);
            !m || 1 === m[0] && 1 === m[3] ? (m = null != (k = null == f ? void 0 : f.parentElement) ? k : null, k = null != (h = zg(m)) ? h : new _.yg(0, 0), Ok(k, m, l, 100), h = null != (g = zg(f)) ? g : new _.yg(0, 0), Ok(h, f, l, 1), -1 === k.height && (h.height = -1), l = k, h = g = h, g = l.width + "x" + l.height, l = h.width + "x" + h.height) : l = g = "-1x-1";
            c.push(g);
            d.push(l)
        }
        null == Pk && (e = Qk(b, 500, 300), l = b.navigator, g = l.userAgent, h = l.platform, l = l.product, !/Win|Mac|Linux|iPad|iPod|iPhone/.test(h) && /^Opera/.test(g) ? g = !1 : /Win/.test(h) && /Trident/.test(g) && 11 <= b.document.documentMode ? g = !0 : (h = (/WebKit\/(\d+)/.exec(g) || [0, 0])[1], f = (/rv:(\d+\.\d+)/.exec(g) || [0, 0])[1], g = !h && "Gecko" === l && 27 <= f && !/ rv: 1\.8([^.] |\.0) /.test(g) || 536 <= h ? !0 : !1), Pk = g && !e);
        f = 0 !== (0, _.wj)();
        e = kg(!0, b, f).width;
        g = [];
        l = [];
        h = [];
        null !== b && b != b.top && (k = kg(!1, b).width, (-12245933 === e || -12245933 === k || k < e) && h.push(8)); - 12245933 !== e && (1.5 * e < b.document.documentElement.scrollWidth ? h.push(10) : f && 1.5 * b.outerWidth < e && h.push(10));
        a = _.z(a);
        for (k = a.next(); !k.done; k = a.next()) {
            f = new Zg;
            m = Gg(k.value);
            k = 0;
            var n = !1,
                p = !1;
            if (m) {
                for (var t = 0, A = m; A && 100 > t; t++, A = A.parentElement) {
                    var y = Jg(A, b);
                    if (y) {
                        var J = y,
                            F = J.display,
                            K = J.overflowX;
                        if ("visible" !== J.overflowY && (f.set(2), (J = zg(A)) && (k = k ? Math.min(k, J.width) : J.width), f.get(9))) break;
                        Mk(y) && f.set(9);
                        "none" === F && f.set(7);
                        "IFRAME" === A.nodeName && (y = parseInt(y.width, 10), y < e && (f.set(8), k = k ? Math.min(y, k) : y));
                        p || (p = "scroll" === K || "auto" === K);
                        n || (n = "flex" === F)
                    } else f.set(3)
                }
                p && n && (m = m.getBoundingClientRect().left, (m > e || 0 > m) && f.set(11))
            } else f.set(1);
            m = _.z(h);
            for (n = m.next(); !n.done; n = m.next()) f.set(n.value);
            g.push(ah(f));
            l.push(k)
        }
        return new w.Map([
            ["psz", {
                value: c,
                options: {
                    la: "|"
                }
            }],
            ["msz", {
                value: d,
                options: {
                    la: "|"
                }
            }],
            ["fws", {
                value: g
            }],
            ["ohw", {
                value: l
            }],
            ["ea", {
                value: Pk ? null : "0",
                options: {
                    va: !0
                }
            }]
        ])
    };
    Ok = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !Sk(b, c, d))) {
                    a: {
                        do {
                            var g = Jg(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    Vk = function(a) {
        return new w.Map([
            ["cbidsp", {
                value: rk(null != a ? a : [], function(b) {
                    return Jb(Tk(b, Uk), 3)
                }, {
                    la: "~"
                })
            }]
        ])
    };
    al = function(a, b) {
        var c = _.We(251),
            d, e, f, g, h, k, l;
        var m = b;
        m = void 0 === m ? Wk : m;
        try {
            var n = m.history.length
        } catch (Zd) {
            n = 0
        }
        m = w.Map;
        n = ["u_his", {
            value: n
        }];
        var p = ["u_h", {
            value: null == (d = b.screen) ? void 0 : d.height
        }];
        d = ["u_w", {
            value: null == (e = b.screen) ? void 0 : e.width
        }];
        e = ["u_ah", {
            value: null == (f = b.screen) ? void 0 : f.availHeight
        }];
        f = ["u_aw", {
            value: null == (g = b.screen) ? void 0 : g.availWidth
        }];
        g = ["u_cd", {
            value: null == (h = b.screen) ? void 0 : h.colorDepth
        }];
        h = b;
        h = void 0 === h ? _.r : h;
        h = h.devicePixelRatio;
        h = ["u_sd", {
            value: "number" === typeof h ? +h.toFixed(3) : null
        }];
        var t = ["u_tz", {
            value: -(new Date).getTimezoneOffset()
        }];
        try {
            var A, y, J, F, K = null != (F = null == (A = b.external) ? void 0 : null == (y = A.getHostEnvironmentValue) ? void 0 : null == (J = y.bind(b.external)) ? void 0 : J("os-mode")) ? F : "",
                H, L = Number(null == (H = JSON.parse(K)) ? void 0 : H["os-mode"]);
            var W = 0 <= L ? L + 1 : null
        } catch (Zd) {
            W = null
        }
        W = ["wsm", {
            value: W
        }];
        A = ["dmc", {
            value: null != (l = null == (k = b.navigator) ? void 0 : k.deviceMemory) ? l : null
        }];
        (a = Q(a, 8)) ? (50 < a.length && (a = a.substring(0, 50)), a = "a " + Xk('role:1 producer:12 loc:"' + a + '"')) : a = "";
        a = ["uule", {
            value: a
        }];
        k = b;
        k = void 0 === k ? _.r : k;
        l = new Zg;
        k.SVGElement && k.document.createElementNS && l.set(0);
        y = Yk();
        y["allow-top-navigation-by-user-activation"] && l.set(1);
        y["allow-popups-to-escape-sandbox"] && l.set(2);
        k.crypto && k.crypto.subtle && l.set(3);
        k.TextDecoder && k.TextEncoder && l.set(4);
        k = ["bc", {
            value: ah(l)
        }];
        c = ["uach", {
            value: c ? Xk(c, 3) : null
        }];
        if (_.We(221)) var P = null;
        else if (l = null == (P = b.navigator) ? void 0 : P.userActivation) {
            P = 0;
            if (null == l ? 0 : l.hasBeenActive) P |= 1;
            if (null == l ? 0 : l.isActive) P |= 2
        } else P = void 0;
        P = ["uas", {
            value: P
        }];
        a: {
            try {
                var aa, ta, Oa = null == (aa = b.performance) ? void 0 : null == (ta = aa.getEntriesByType("navigation")) ? void 0 : ta[0];
                if (null == Oa ? 0 : Oa.type) {
                    var Ra;
                    var gb = null != (Ra = Zk.get(Oa.type)) ? Ra : null;
                    break a
                }
            } catch (Zd) {}
            var yb, hd, hb;gb = null != (hb = $k.get(null == (yb = b.performance) ? void 0 : null == (hd = yb.navigation) ? void 0 : hd.type)) ? hb : null
        }
        return new m([n, p, d, e, f, g, h, t, W, A, a, k, c, P, ["nvt", {
            value: gb
        }]])
    };
    bl = function(a, b) {
        return new w.Map([
            ["click", {
                value: !b && a.getClickUrl() ? a.getClickUrl() : null
            }]
        ])
    };
    fl = function(a, b, c, d, e) {
        if (0 !== kd(c, 24, 0)) return new w.Map;
        c = cl(a, "__gads", b);
        var f = _.E(dl) && "1" === cl(a, "__gpi_opt_out", b) ? "1" : null,
            g = w.Map,
            h = ["cookie_enabled", {
                value: !c && el(a, b) ? "1" : null
            }],
            k = e.document,
            l = k.domain;
        d = ["cdm", {
            value: (d || tg(e)) === k.URL ? "" : l
        }];
        a = _.E(dl) ? (a = cl(a, "__gpi", b)) && !_.u(a, "includes").call(a, "&") ? a : null : null;
        return new g([
            ["cookie", {
                value: c,
                options: {
                    va: !0
                }
            }], h, d, ["gpic", {
                value: a
            }],
            ["gpico", {
                value: f
            }],
            ["pdopt", {
                value: f
            }]
        ])
    };
    il = function(a) {
        a = void 0 === a ? _.r : a;
        var b = w.Map,
            c = a,
            d = a;
        var e = gl(d);
        c = Qk(d, c.google_ad_width, c.google_ad_height);
        var f = e.location.href;
        if (e == e.top) f = !0;
        else {
            var g = !1,
                h = e.document;
            h && h.referrer && (f = h.referrer, e.parent == e.top && (g = !0));
            (e = e.location.ancestorOrigins) && (e = e[e.length - 1]) && -1 == f.indexOf(e) && (g = !1, f = e);
            f = g
        }
        g = d.top == d ? 0 : Kc(d.top) ? 1 : 2;
        e = 4;
        c || 1 != g ? c || 2 != g ? c && 1 == g ? e = 7 : c && 2 == g && (e = 8) : e = 6 : e = 5;
        f && (e |= 16);
        c = "" + e;
        if (d != d.top)
            for (; d && d != d.top && Kc(d) && !d.sf_ && !d.$sf && !d.inGptIF && !d.inDapIF; d = d.parent);
        return new b([
            ["frm", {
                value: c || null
            }],
            ["vis", {
                value: hl(a.document)
            }]
        ])
    };
    pl = function(a, b) {
        if (_.E(jl)) var c = new w.Map;
        else {
            c = w.Map;
            a = _.E(kl) ? Te(a[0].getAdUnitPath()) : null;
            a = void 0 === a ? null : a;
            if (b) {
                var d = new ll,
                    e = _.Ad(ml),
                    f = _.Ad(nl),
                    g = [],
                    h = RegExp("^_GESPSK-(.+)$");
                try {
                    for (var k = 0; k < b.length; k++) {
                        var l = (h.exec(b.key(k)) || [])[1];
                        l && g.push(l)
                    }
                } catch (n) {}
                l = _.z(g);
                for (g = l.next(); !g.done; g = l.next())
                    if (g = g.value, h = Hd().get(g, b).mb)
                        if (k = $d(h), 0 === k || 1 === k) {
                            var m = !1;
                            if (a && (k = /^pub(\d+)$/.exec(g)) && !(m = _.u(a.split(","), "includes").call(a.split(","), k[1]))) continue;
                            x(h, 9, m);
                            k = Q(h, 2);
                            m = m ? f : e;
                            0 <= m && k && k.length > m && (m = {}, Ed(12, g, null, (m.sl = String(k.length), m)), Id(h, 108, b), Yb(h, 2));
                            ri(d, 2, be, h);
                            Ed(19, g)
                        }
                b = fc(d, be, 2).length ? Jb(Tk(d, ol), 3) : null
            } else b = null;
            c = new c([
                ["a3p", {
                    value: b
                }]
            ])
        }
        return c
    };
    tl = function(a, b) {
        return _.E(ql) ? new w.Map([
            ["pied", {
                value: rk(a, function(c) {
                    var d;
                    return (c = null == (d = b[c.getDomId()]) ? void 0 : hc(d, rl, 25)) ? Jb(Tk(c, sl), 3) : ""
                }, {
                    la: "~"
                })
            }]
        ]) : new w.Map
    };
    vl = function(a, b, c, d, e) {
        var f = [],
            g = [];
        b = _.z(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            var k = d[h.getDomId()];
            h = Ng(h, k, c, rg(a, k));
            k = void 0;
            var l = e ? null != (k = h) ? k : ul : h;
            l && (f.push(Math.round(l.x)), g.push(Math.round(l.y)))
        }
        return new w.Map([
            ["adxs", {
                value: f
            }],
            ["adys", {
                value: g
            }]
        ])
    };
    wl = function(a, b, c) {
        b && (a.wb = b);
        a = sg(c) ? null : kg(!1, c);
        return new w.Map([
            ["biw", {
                value: b ? b.width : null
            }],
            ["bih", {
                value: b ? b.height : null
            }],
            ["isw", {
                value: b ? null == a ? void 0 : a.width : null
            }],
            ["ish", {
                value: b ? null == a ? void 0 : a.height : null
            }]
        ])
    };
    yl = function(a) {
        try {
            var b = a.top;
            var c = xl(b.document, b)
        } catch (d) {
            c = new _.vg(-12245933, -12245933)
        }
        return new w.Map([
            ["scr_x", {
                value: Math.round(c.x),
                options: {
                    va: !0
                }
            }],
            ["scr_y", {
                value: Math.round(c.y),
                options: {
                    va: !0
                }
            }]
        ])
    };
    Al = function(a, b, c) {
        var d = null;
        try {
            var e = xl(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.W,
                    h = c.R[f.getDomId()],
                    k;
                f = null == (k = Ng(f, h, b.document, rg(g, h))) ? void 0 : k.y;
                k = kg(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++zl
            })
        } catch (f) {}
        return new w.Map([
            ["btvi", {
                value: d,
                options: {
                    va: !0,
                    la: "|"
                }
            }]
        ])
    };
    Cl = function(a) {
        var b = a.lb.N.W,
            c = a.Id;
        a = c.gd;
        var d = c.Qd;
        c = c.Fd;
        if (_.E(Bl)) return new w.Map;
        b = 0 === kd(b, 24, 0);
        return new w.Map([
            ["adsid", {
                value: b ? a : null
            }],
            ["pucrd", {
                value: b ? d : null
            }],
            ["jar", {
                value: c
            }]
        ])
    };
    Hl = function(a, b, c, d, e) {
        e = void 0 === e ? _.r : e;
        var f = w.Map,
            g = ["prev_scp", {
                value: Dl(b, c)
            }],
            h = c.W,
            k = c.R[b[0].getDomId()],
            l = new Zg;
        l.set(0, 1 !== d);
        l.set(1, !!I(k, 17));
        l.set(2, El(b, c));
        l.set(3, I(h, 27) || !1);
        l.set(4, 3 === d);
        b = ah(l);
        return new f([g, ["eri", {
                value: b
            }],
            ["cust_params", {
                value: Fl(a),
                options: {
                    la: "&"
                }
            }],
            ["stss", {
                value: 0 === Gl(_.We(172)) ? null : Gl(_.We(172))
            }],
            ["ppid", {
                value: 1 !== kd(a, 24, 0) && Pi(a, 16) ? Q(a, 16) : null,
                options: {
                    va: !0
                }
            }],
            ["gct", {
                value: bf("google_preview", e)
            }],
            ["sc", {
                value: Number(_.We(6)),
                options: {
                    va: !0
                }
            }]
        ])
    };
    Ol = function(a, b, c, d, e, f, g) {
        var h = cf("google_preview", a),
            k = a.document,
            l = h ? Il(k.URL) : k.URL;
        k = h ? Il(k.referrer) : k.referrer;
        h = !1;
        if (f) c = Jl(e.na());
        else {
            var m;
            c = null != (m = Jl(g[c[0].getDomId()].na())) ? m : Jl(e.na())
        }
        if (null != c) {
            var n = l;
            sg(a) || (k = "", h = !0)
        } else c = l;
        e = Kl(a);
        n = new w.Map([
            ["nhd", {
                value: e || null
            }],
            ["url", {
                value: c
            }],
            ["loc", {
                value: null !== n && n !== c ? n : null
            }],
            ["ref", {
                value: k
            }]
        ]);
        l = c;
        m = _.We(252) || {};
        m.url = l;
        _.C(Ue).j = !0;
        Ve[252] = m;
        if (e) {
            e = n.set;
            a: {
                var p, t;l = Kc(a.top) && (null == (p = a.top) ? void 0 : null == (t = p.location) ? void 0 : t.href);
                var A;p = null == (A = a.location) ? void 0 : A.ancestorOrigins;a = Eh(a) || "";A = (null == p ? void 0 : p[p.length - 1]) || "";
                if (_.E(Ll)) try {
                    var y = A && Ml(A.match(_.Nl)[3] || null) && Ml(A.match(_.Nl)[3] || null) !== Ml(a.match(_.Nl)[3] || null) ? A : a || A;
                    var J = l || y || "";
                    break a
                } catch (K) {
                    J = K instanceof Error ? K : Error(String(K));
                    var F;
                    y = null != (F = null == p ? void 0 : p.length) ? F : 0;
                    .001 > nd() && qd({
                        rtw: a,
                        aotw: A,
                        aol: String(y),
                        di: J.message
                    }, "tpurl")
                }
                J = l || a || A
            }
            F = (F = J) ? h ? Ml(F.match(_.Nl)[3] || null) : F : null;
            e.call(n, "top", {
                value: F
            });
            n.set("etu", {
                value: b.ac
            })
        }
        n.set("scar", {
            value: d
        });
        return n
    };
    Dl = function(a, b) {
        var c = b.R;
        return rk(a, function(d) {
            return Pl(c[d.getDomId()]).join("&")
        }, {
            la: "|"
        })
    };
    Pl = function(a) {
        a = Ql(a);
        var b = [];
        _.Ki(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    Ql = function(a) {
        for (var b = {}, c = _.z(fc(a, ni, 9)), d = c.next(); !d.done; d = c.next()) d = d.value, b[oi(d)] = Vb(d, 2);
        a = Vb(a, 8);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    Fl = function(a) {
        var b = !1,
            c = fc(a, ni, 2).map(function(d) {
                var e = oi(d);
                b = "excl_cat" === e;
                d = Vb(d, 2);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = Vb(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    Jl = function(a) {
        var b;
        return (null == (b = _.u(a, "find").call(a, function(c) {
            return "page_url" === oi(c)
        })) ? void 0 : Vb(b, 2)[0]) || null
    };
    Il = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Kl = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Jc(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    El = function(a, b) {
        var c = b.R;
        return !!Jl(b.W.na()) || a.some(function(d) {
            return null !== Jl(c[d.getDomId()].na())
        })
    };
    Rl = function(a) {
        return new w.Map([
            ["pvsid", {
                value: a.Fb.K.Kd
            }],
            ["correlator", {
                value: a.lb.N.W.getCorrelator()
            }]
        ])
    };
    Ul = function(a, b) {
        a = Sl(a) || new Tl;
        var c = kd(a, 6, 2),
            d, e, f, g;
        return new w.Map([
            ["rdp", {
                value: I(a, 1) ? "1" : null
            }],
            ["ltd", {
                value: I(a, 9) ? "1" : null
            }],
            ["gdpr_consent", {
                value: null != (d = Q(b, 2)) ? d : null
            }],
            ["gdpr", {
                value: Pi(b, 3) ? I(b, 3) ? "1" : "0" : null,
                options: {
                    va: !0
                }
            }],
            ["addtl_consent", {
                value: null != (e = Q(b, 4)) ? e : null
            }],
            ["tcfe", {
                value: null != (f = Q(b, 7)) ? f : null
            }],
            ["us_privacy", {
                value: null != (g = Q(b, 1)) ? g : null
            }],
            ["npa", {
                value: I(b, 6) || I(a, 8) ? 1 : null
            }],
            ["tfua", {
                value: 2 !== c ? c : null,
                options: {
                    va: !0
                }
            }],
            ["tfcd", {
                value: Pi(a, 5) ? Q(a, 5) : null,
                options: {
                    va: !0
                }
            }],
            ["trt", {
                value: Pi(a, 10) ? Q(a, 10) : null,
                options: {
                    va: !0
                }
            }],
            ["tad", {
                value: Pi(b, 8) ? I(b, 8) ? "1" : "0" : null,
                options: {
                    va: !0
                }
            }]
        ])
    };
    $l = function(a, b, c, d) {
        return new w.Map([
            ["ris", {
                value: Vl(b, function(e) {
                    var f, g;
                    return null != (g = null == (f = a.j.get(e)) ? void 0 : f.Tc) ? g : 0
                }, d)
            }],
            ["rcs", {
                value: rk(b, function(e) {
                    if (!c) {
                        var f = void 0 === f ? _.r : f;
                        var g = a.j.get(e);
                        g && (_.E(Wl) || (g.Tc = _.Xl(f) || 0), g.Td++)
                    }
                    return Yl(a, e)
                }, {
                    Db: 0
                })
            }],
            ["tfr", {
                value: _.E(Zl) ? Vl(b, function(e) {
                    var f, g;
                    return null != (g = null == (f = a.j.get(e)) ? void 0 : f.xd) ? g : null
                }, d) : null
            }]
        ])
    };
    Vl = function(a, b, c) {
        return rk(a, function(d) {
            d = b(d);
            var e = _.Xl(c);
            return d && e ? Math.round(Math.min((e - d) / 1E3, 1800)) : null
        }, {
            la: "~"
        })
    };
    bm = function(a, b, c) {
        var d = b.W,
            e = b.R;
        b = b.mf;
        return new w.Map([
            ["sfv", {
                value: (null != c ? c : window).postMessage ? am ? am : am = Di() : null
            }],
            ["fsfs", {
                value: rk(a, function(f) {
                    f = e[f.getDomId()];
                    var g;
                    return Number(null != (g = null == f ? void 0 : I(f, 12)) ? g : I(d, 13))
                }, {
                    Db: 0
                })
            }],
            ["fsbs", {
                value: rk(a, function(f) {
                    f = e[f.getDomId()].Ba();
                    var g = d.Ba(),
                        h;
                    return (null != (h = null == f ? void 0 : I(f, 3)) ? h : null == g ? 0 : I(g, 3)) ? 1 : 0
                }, {
                    Db: 0
                })
            }],
            ["ecs", {
                value: b
            }]
        ])
    };
    em = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? _.r : g;
        var h = [],
            k = a.map(function(l) {
                return l.getAdUnitPath().replace(/,/g, ":").split("/").map(function(m) {
                    if (!m) return "";
                    var n = _.u(h, "findIndex").call(h, function(p) {
                        return p === m
                    });
                    return 0 <= n ? n : h.push(m) - 1
                }).join("/")
            });
        return new w.Map([
            ["iu_parts", {
                value: h
            }],
            ["enc_prev_ius", {
                value: k
            }],
            ["prev_iu_szs", {
                value: b.map(function(l) {
                    return ng(l)
                })
            }],
            ["fluid", {
                value: function() {
                    var l = !1,
                        m = b.map(function(n) {
                            n = (B = lg(n), _.u(B, "includes")).call(B, "fluid");
                            l || (l = n);
                            return n ? "height" : "0"
                        });
                    return l ? m : null
                }()
            }],
            ["ifi", {
                value: function() {
                    var l = eh(g);
                    if (!c) {
                        l += 1;
                        var m = g,
                            n = a.length;
                        n = void 0 === n ? 1 : n;
                        m = Bk(zk(m)) || m;
                        m.google_unique_id = (m.google_unique_id || 0) + n
                    }
                    return l
                }()
            }],
            ["adks", {
                value: cm(a, d, e, f)
            }],
            ["didk", {
                value: _.E(dm) ? rk(a, function(l) {
                    return og(l.getDomId())
                }, {
                    la: "~"
                }) : null
            }]
        ])
    };
    cm = function(a, b, c, d) {
        return a.map(function(e) {
            if (c) {
                var f = d.R[e.getDomId()];
                f = pg(f);
                if (e = b.j.get(e)) e.ob = f;
                return f
            }
            f = d.W;
            var g = d.R[e.getDomId()],
                h;
            if (!(h = fm(b, e))) {
                f = pg(g, I(f, 6) || I(g, 17) ? null : Gg(e));
                if (e = b.j.get(e)) e.ob = f;
                h = f
            }
            return h
        }).join()
    };
    hm = function() {
        var a = void 0 === a ? window : a;
        gm = _.wd(a)
    };
    im = function(a, b) {
        var c = new w.Map([
            ["dt", {
                value: (new Date).getTime()
            }]
        ]);
        if (!a) {
            try {
                var d = Math.round(Date.parse(b.document.lastModified) / 1E3) || null
            } catch (e) {
                d = null
            }
            c.set("lmt", {
                value: d
            })
        }
        a = gm;
        b = hf(b);
        0 < b && a >= b && (c.set("dlt", {
            value: b
        }), c.set("idt", {
            value: a - b
        }));
        return c
    };
    om = function(a) {
        var b = new w.Map,
            c = _.E(jm(a) ? km : lm),
            d = _.E(mm);
        a = nm(a, c, d);
        (null == a ? 0 : a.length) && b.set("tt_state", {
            value: Xk(JSON.stringify(a), 3)
        });
        return b
    };
    pm = function() {
        var a = void 0 === a ? navigator : a;
        var b = new w.Map;
        "runAdAuction" in a && "joinAdInterestGroup" in a && b.set("td", {
            value: 1
        });
        return b
    };
    qm = function(a) {
        var b = a.lb.N.W,
            c = a.ee;
        a = c.Ua;
        c = c.Ta;
        var d = I(b, 21),
            e;
        return new w.Map([
            ["hxva", {
                value: d ? 1 : null
            }],
            ["cmsid", {
                value: d ? Q(b, 23) : null
            }],
            ["vid", {
                value: d ? Q(b, 22) : null
            }],
            ["pod", {
                value: isNaN(c) ? null : c
            }],
            ["ppos", {
                value: isNaN(a) ? null : a
            }],
            ["scor", {
                value: null != (e = Q(b, 29)) ? e : null
            }]
        ])
    };
    rm = function(a) {
        a = a.fd;
        var b = a.Va,
            c = a.Na;
        return "wbn" === a.Ka ? new w.Map([
            ["wbsu", {
                value: b.toString().replace(/^uuid-in-package:/, "")
            }],
            ["callback", {
                value: c
            }]
        ]) : new w.Map
    };
    sm = function(a, b) {
        return a && (a = hc(a, eg, 1)) ? a.getWidth() || b.innerWidth : 0
    };
    tm = function(a, b) {
        return a && (a = hc(a, eg, 1)) ? a.getHeight() || b.innerHeight : 0
    };
    um = function(a) {
        return a && (a = hc(a, eg, 2)) ? a.getWidth() || 0 : 0
    };
    vm = function(a) {
        return a && (a = hc(a, eg, 2)) ? a.getHeight() || 0 : 0
    };
    wm = function(a, b, c) {
        a = a.map(function(e) {
            return b[e.getDomId()]
        });
        var d = a.some(function(e) {
            return mg(e, 16)
        });
        return new w.Map([
            ["rtgs", {
                value: d ? a.map(function(e) {
                    return mg(e, 16) ? lg(e).length ? "1" : "2" : "0"
                }) : null,
                options: {
                    la: "!"
                }
            }],
            ["max_w", {
                value: d ? a.map(function(e) {
                    return sm(hc(e, Zi, 16), c)
                }) : null,
                options: {
                    la: "!"
                }
            }],
            ["max_h", {
                value: d ? a.map(function(e) {
                    return tm(hc(e, Zi, 16), c)
                }) : null,
                options: {
                    la: "!"
                }
            }],
            ["min_w", {
                value: d ? a.map(function(e) {
                    return um(hc(e, Zi, 16))
                }) : null,
                options: {
                    la: "!"
                }
            }],
            ["min_h", {
                value: d ? a.map(function(e) {
                    return vm(hc(e, Zi, 16))
                }) : null,
                options: {
                    la: "!"
                }
            }]
        ])
    };
    xm = function(a, b) {
        var c;
        return !(null != (c = I(a, 11)) ? !c : !I(b, 10))
    };
    ym = function(a, b, c, d) {
        if (a = Gg(a, b)) {
            var e;
            if (c = null != (e = I(c, 24)) ? e : I(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.r.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    Jm = function(a, b, c, d, e) {
        var f = new Qd,
            g = new zm(a, c);
        D(f, g);
        var h = new Am(d, _.E(Bm));
        _.Cm(f, h);
        e = new Dm(a, h, e);
        D(f, e);
        var k = new Em(a, d, e.l);
        D(f, k);
        e = new Fm(a, h, e.l);
        D(f, e);
        h = new Gm(a, b, d, e.l, g.Ya);
        D(f, h);
        b = new Hm(a, b, d, c, e.l, g.Ya);
        D(f, b);
        a = new Im(a, g.Ya, b.l, h.l);
        D(f, a);
        Rd(f);
        return {
            Ya: a.B,
            Ha: f
        }
    };
    Om = function(a, b) {
        var c = Km(b),
            d = c.slotId,
            e = c.te;
        c = c.ue;
        if (d) {
            if (c = Lf(), (b = Lm(c, d.getDomId())) && !I(b, 19))
                if (e && c.A.set(d, e), Gg(d) || qg(qj(b)))
                    for (x(b, 19, !0), a = Cg(c.j, c.m), e = _.z(Vb(b, 4)), b = e.next(); !b.done; b = e.next()) b = yf(b.value), b = Kh.get(b), b.C && b.P(a, d);
                else O(a, Mm(String(b.getAdUnitPath()), String(b.getDomId())), d)
        } else c ? a.error(Nm(c)) : a.error(Qh("googletag.display", [String(b)]))
    };
    Km = function(a) {
        var b = null,
            c = null,
            d = "";
        b = _.C(Cj);
        if ("string" === typeof a) d = a, b = Pm(b, d);
        else if (_.fa(a) && 1 == a.nodeType) c = a, d = c.id, b = Pm(b, d);
        else {
            var e;
            b = null != (e = (B = [].concat(_.Sc(b.fa)), _.u(B, "find")).call(B, function(f) {
                return f.j === a
            })) ? e : null
        }
        return {
            slotId: b,
            te: c,
            ue: d
        }
    };
    Qm = function(a) {
        switch (Number(a)) {
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            default:
                return "Out-of-page creative"
        }
    };
    Tm = function(a, b, c, d) {
        return "string" === typeof c && c.length && (null == d || "string" === typeof d || "number" === typeof d && Rm(d)) ? Sm(a, b, c, "number" === typeof d ? d : 1, "string" === typeof d ? d : void 0) : (b.error(Qh("googletag.defineOutOfPageSlot", [c, d])), null)
    };
    Rm = function(a) {
        return !!Fh(yi, function(b) {
            return b === a
        })
    };
    Sm = function(a, b, c, d, e) {
        b = _.C(Cj).add(a, b, c, [1, 1], {
            eb: e,
            format: d
        });
        a = b.slotId;
        b = b.Ra;
        if (a && b) {
            if (5 === d && _.E(Um)) return null;
            x(b, 15, d);
            _.Vm(a, function() {
                var f = window,
                    g = tj(d);
                if (null != g) {
                    f = _.uj(f);
                    var h = f.adCount && f.adCount[g];
                    h && (f.adCount[g] = h - 1)
                }
            })
        }
        return null != a ? a : null
    };
    Xm = function(a) {
        Wm = a
    };
    Zm = function() {
        for (var a = _.z(_.u(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            d && (xa(d, "/tag/js/gpt.js") || xa(d, "/tag/js/gpt_mobile.js")) && !c.googletag_executed && b.textContent && (c.googletag_executed = !0, c = document.createElement("script"), b = new Ta(b.textContent, Ym), Ua(c, b), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    $m = function(a, b) {
        b = _.z(_.u(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.z(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    cn = function(a, b) {
        var c = [];
        c = _.C(Cj);
        c = [].concat(_.Sc(c.fa)).slice();
        if (b) {
            if (!Array.isArray(b)) return O(a, Qh("googletag.destroySlots", [b])), !1;
            ia(b);
            c = c.filter(function(d) {
                return _.u(b, "includes").call(b, d.j)
            })
        }
        if (!c.length) return !1;
        an(c);
        bn(c);
        return !0
    };
    dn = function(a, b) {
        wf("display", G(a, 95, function(c) {
            void Om(b, c)
        }))
    };
    mn = function(a, b, c) {
        var d;
        if (cf("google_content_service_disabled", c)) Yg("gpt_scdvqp", function(f) {
            dh(f, a)
        }, 1);
        else if (!_.E(en)) {
            var e = _.fn(function() {
                _.E(gn) || O(b, hn(), null)
            });
            return G(a, 817, function() {
                _.E(jn) && b.error(kn(), null, !0);
                e();
                null != d || (d = new ln(a, b));
                return Wh(a, b, d)
            })
        }
    };
    tn = function(a, b, c, d) {
        var e = Xe(),
            f;
        d = mn(a, b, d);
        var g = G(a, 74, function(k, l, m) {
                return nn(a, b, k, l, m)
            }),
            h = {};
        g = (h._loaded_ = !0, h.cmd = [], h._vars_ = e._vars_, h.evalScripts = e.evalScripts, h.display = G(a, 95, function(k) {
            void Om(b, k)
        }), h.defineOutOfPageSlot = G(a, 73, function(k, l) {
            k = Tm(a, b, k, l);
            if (!k) return null;
            var m;
            return null != (m = k.j) ? m : null
        }), h.getVersion = G(a, 946, function() {
            return a.Pa ? String(a.Pa) : a.ya
        }), h.pubads = G(a, 947, function() {
            return Mj(a, b, c)
        }), h.companionAds = G(a, 816, function() {
            null != f || (f = new on(a, b, c));
            return Uh(a, b, f)
        }), h.setAdIframeTitle = G(a, 729, Xm), h.getEventLog = G(a, 945, function() {
            return new pn(a, b)
        }), h.sizeMapping = G(a, 90, function() {
            return new qn(a, b)
        }), h.enableServices = G(a, 91, function() {
            rn(b)
        }), h.destroySlots = G(a, 75, function(k) {
            return cn(b, k)
        }), h.enums = Ai(), h.defineSlot = g, h.defineUnit = g, h.getWindowsThatCanCommunicateWithHostpageLibrary = G(a, 955, function(k) {
            return sn(k)
        }), h.disablePublisherConsole = G(a, 93, Zh), h.onPubConsoleJsLoad = G(a, 731, $h), h.openConsole = G(a, 732, function(k) {
            ai(a, void 0 === k ? "" : k)
        }), h.apiReady = !0, h);
        d && (g.content = d);
        $m(e, g)
    };
    un = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.u(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    wn = function(a, b) {
        var c = _.Ad(vn);
        Math.random() <= c && qd(b, a)
    };
    Cn = function(a, b, c) {
        var d = {};
        if (!c) return b.error(xn("missing data-rendering attribute")), d;
        try {
            var e = cd(yn, zn(c))
        } catch (k) {}
        var f;
        (null == (f = e) ? 0 : mg(f, 1)) ? (b = new An, b = ac(b, 4, 1, 0), b = ac(b, 2, 7, 0), a = ac(b, 3, a.Za || a.ya, ""), b = hc(e, Bn, 1), a = Ec(a, 5, b), a = ac(a, 6, !0, !1), d.rf = a) : b.error(xn("invalid data-rendering attribute"));
        var g;
        d.ef = null == (g = e) ? void 0 : Dh(g, 2);
        var h;
        d.Ic = null == (h = e) ? void 0 : Dh(h, 3);
        return d
    };
    Fn = function(a, b) {
        var c, d, e, f, g, h, k, l, m, n, p, t, A, y, J, F, K;
        return _.ab(function(H) {
            c = ii(b, "ai");
            if (!c || 0 === c.length) return H.return(w.Promise.resolve(b));
            d = Dn();
            if (null == (e = d) ? 0 : e.gmaSdk) {
                if (n = (null == (f = d) ? 0 : null == (g = f.gmaSdk) ? 0 : g.getClickSignalsWithTimeout) ? null == (h = d) ? void 0 : null == (k = h.gmaSdk) ? void 0 : k.getClickSignalsWithTimeout(c, 200) : null == (l = d) ? void 0 : null == (m = l.gmaSdk) ? void 0 : m.getClickSignals(c)) return H.return(w.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(n) + "&")))
            } else if (null != (null == (p = d) ? void 0 : null == (t = p.webkit) ? void 0 : t.messageHandlers.getGmaClickSignals)) return A = new _.Fe, y = A.resolve, J = A.promise, En(null == (F = d) ? void 0 : null == (K = F.webkit) ? void 0 : K.messageHandlers.getGmaClickSignals, {
                click_string: c
            }, function(L) {
                y(b.replace("?", "?" + L + "&"))
            }, function() {
                y(b)
            }, function(L, W) {
                return _.Qf(a, L, W)
            }), H.return(J);
            return H.return(w.Promise.resolve(b))
        })
    };
    Gn = function(a, b, c, d) {
        var e, f, g;
        return _.ab(function(h) {
            e = b.getBoundingClientRect();
            f = {};
            var k = d.replace;
            var l = (f.nx = Math.floor(c.clientX - e.x), f.ny = Math.floor(c.clientY - e.y), f.dim = Math.floor(e.width) + "x" + Math.floor(e.height), f);
            var m = [];
            for (n in l) Hi(n, l[n], m);
            l = m.join("&");
            if (l) {
                m = -1;
                0 > m && (m = 0);
                var n = -1;
                if (0 > n || n > m) {
                    n = m;
                    var p = ""
                } else p = "".substring(n + 1, m);
                m = ["".slice(0, n), p, "".slice(m)];
                n = m[1];
                m[1] = l ? n ? n + "&" + l : l : n;
                l = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else l = "";
            g = k.call(d, "?", l + "&");
            return h.return(Fn(a, g))
        })
    };
    Hn = function(a, b, c) {
        var d, e, f, g, h, k, l, m, n, p, t, A, y;
        return _.ab(function(J) {
            if (null != (null == (d = c) ? void 0 : null == (e = d.gmaSdk) ? void 0 : e.getViewSignals)) {
                if (h = null == (f = c) ? void 0 : null == (g = f.gmaSdk) ? void 0 : g.getViewSignals()) return k = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + h + "$2"), J.return(w.Promise.resolve(k))
            } else if (null != (null == (l = c) ? void 0 : null == (m = l.webkit) ? void 0 : m.messageHandlers.getGmaViewSignals)) return n = new _.Fe, p = n.resolve, t = n.promise, En(null == (A = c) ? void 0 : null == (y = A.webkit) ? void 0 : y.messageHandlers.getGmaViewSignals, {}, function(F) {
                p(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + F + "$2"))
            }, function() {
                p(b)
            }, function(F, K) {
                return _.Qf(a, F, K)
            }), J.return(t);
            return J.return(w.Promise.resolve(b))
        })
    };
    Nn = function(a, b) {
        var c = window;
        var d = void 0 === d ? kb : d;
        var e;
        if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
            var f = Dn(),
                g;
            null == (g = f ? new In(function(k, l) {
                return _.Qf(a, k, l)
            }, function() {}) : void 0) || Jn(g);
            var h = un(c);
            e = function() {
                return h.apply(this, arguments) || this
            };
            _.R(e, h);
            e.prototype.connectedCallback = function() {
                var k = Cn(a, b, this.dataset.rendering),
                    l = k.rf,
                    m = k.ef;
                k = k.Ic;
                l && d(Kn(window, l));
                m && Hn(a, m, f).then(function(n) {
                    return void Ln(n)
                });
                k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.Ic = k, this.addEventListener("click", this.j)) : O(b, Mn(k)))
            };
            e.prototype.j = function(k) {
                var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
                l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && Gn(a, this, k, this.Ic).then(function(m) {
                    return void Ln(m)
                })
            };
            c.customElements.define("google-product-ad", e)
        }
    };
    On = function(a) {
        var b = {};
        a = _.z(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[Q(c, 1)] = Q(c, 2);
        return b
    };
    Rn = function(a, b) {
        var c;
        return Pn(a, Qn, function(d) {
            d = d.detail.data;
            try {
                return c = JSON.parse(d), "rewarded" === c.type && c.message === b
            } catch (e) {
                return !1
            }
        }).then(function() {
            return c
        })
    };
    Sn = function(a) {
        .001 > nd() && qd({
            c: "sd",
            s: String(a)
        }, "gpt_whirs")
    };
    Tn = function(a, b) {
        /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = Ja(b), a.src = Ka(b).toString())
    };
    Yn = function(a, b, c, d) {
        d = d.xf;
        var e = b.kind;
        switch (e) {
            case 0:
                return new(d ? Un : Vn)(a, b, c);
            case 1:
                return new Wn(a, b, c);
            case 2:
                return new Xn(a, b, c);
            default:
                Fa(e)
        }
    };
    Zn = function(a) {
        if (!Kc(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    ao = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver ? new IntersectionObserver(a, b) : new $n(a, b)
    };
    bo = function(a) {
        return Pi(a, 1) ? Pi(a, 3) && 0 !== (0, _.wj)() ? Q(a, 1) * Gd(a, 3) : Q(a, 1) : null
    };
    co = function(a, b) {
        return "undefined" === typeof IntersectionObserver ? new $n(b, {
            rootMargin: a + "%"
        }) : new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    Qo = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        var p = new Qd,
            t = kg(!0, window),
            A = e.W,
            y = e.R[c.getDomId()],
            J = new eo(a, window);
        D(p, J);
        var F = f.Hb,
            K = f.Rb,
            H = f.Ce,
            L = f.td,
            W = f.ke,
            P = f.Le,
            aa = f.yf,
            ta = f.De,
            Oa = f.ze,
            Ra = f.Wb,
            gb = f.zf,
            yb = f.Ke,
            hd = f.uf,
            hb = f.Cf,
            Zd = f.Df,
            Ck = f.He,
            Gh = f.Af,
            Hh = f.bc,
            Zb = f.pa,
            Dk = f.sf,
            $b = f.Ff;
        f = f.af;
        var Cr = void 0;
        Math.random() < _.Ad(fo) && (n = new go(a, $b, n.G, aa, L), D(p, n), Cr = n.B);
        K = new ho(a, d, c, F, K, Zb, $b, Cr);
        D(p, K);
        F = new io;
        F.j(k);
        k = new jo(a, window.top, F);
        D(p, k);
        g = new ko(a, Te(c.getAdUnitPath()), g, k.B);
        D(p, g);
        Zb = new lo(a, qj(y), t.height, Oa, K.Hb);
        D(p, Zb);
        g = new mo(a, c, Gg(c, h), c.getDomId(), Pg(c), h, qj(y), d);
        D(p, g);
        $b = new no(a, K.pa, W, P, aa);
        D(p, $b);
        aa = new oo(a, A, y, window, W, aa);
        D(p, aa);
        hb = new po(a, hc(A, qo, 5), hb);
        D(p, hb);
        Zb = new ro(a, c.getAdUnitPath(), y, t.width, window, Ra, K.Rb, Zb.B, $b.B, g.B);
        D(p, Zb);
        Ra = new so(a, c, A, y, qj(y), h, d, g.B, aa.B, Zb.o, H);
        D(p, Ra);
        $b = new to(a, Ra.B);
        D(p, $b);
        n = new uo(a, c, t, d, $b.B, hb.l);
        D(p, n);
        $b = new vo(a, window, g.B);
        D(p, $b);
        Zd = new wo(a, n.B, Ra.B, Zd, hb.l);
        D(p, Zd);
        t = new xo(a, h, c, y, t, H, g.B, Ra.B, Zb.o, Zb.Wb, $b.B, L);
        D(p, t);
        hb = new yo(a, Dk);
        D(p, hb);
        hb = new zo(a, d, Dk, hb.B, Zb.pa, Zb.o);
        D(p, hb);
        gb = new Ao(a, A, y, hb.pa, aa.B, W, gb);
        D(p, gb);
        Hh = new Bo(a, window, Hh, J.B);
        D(p, Hh);
        b = new Co(a, b, c, e, P, Gh);
        D(p, b);
        Gh = new Do(a, qj(y), h);
        D(p, Gh);
        m = new Eo(a, m, qj(y), Oa, ta);
        D(p, m);
        L = new Fo(a, c, d, e, l, window, hb.pa, aa.B, b.B, Zd.B, g.B, Ra.B, hb.G, L, H, gb.B, P, yb, hd, t.B, Hh.B, Gh.B, m.B, K.l, Dk);
        D(p, L);
        _.E(dl) && (P = new Go(a, window, c, L.D, F), D(p, P));
        Oa = new Ho(a, d, qj(y), c, window, Oa, L.l, g.B, m.B);
        D(p, Oa);
        e = new Io(a, c, qj(y), e.wb, ta, L.l, g.B, k.B, m.B);
        D(p, e);
        e = new Jo(a, c, window, W, L.l, L.o);
        D(p, e);
        y = new Ko(a, c, qj(y), l, window, L.l, g.B);
        D(p, y);
        h = new Lo(a, c, L.l, h, l);
        D(p, h);
        d = new Mo(a, fm(d, c), window.top, L.l, J.B);
        D(p, d);
        c = new No(a, c, H, W, hd, L.l, Ra.B, L.o);
        D(p, c);
        Ck = new Oo(a, window, Ck, L.l, Ra.B, g.B);
        D(p, Ck);
        D(p, new Po(a, f, Xe(), A));
        return p
    };
    So = function() {
        if (Ca()) var a = 0 <= Ro(Ea(), 11);
        else a = za(wa()), Da(a), a = Aa() ? (a = a[2]) && a[1] || "" : "", "" === a ? a = NaN : (a = a.split("."), a = 0 === a.length ? NaN : Number(a[0])), a = 65 <= a;
        return a
    };
    To = function(a, b) {
        return window.IntersectionObserver ? new IntersectionObserver(a, {
            rootMargin: b
        }) : new $n(a, {
            rootMargin: b
        })
    };
    Uo = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = Ia.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.Sc(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.ab(function(l) {
                if (1 == l.j) return d && clearTimeout(d), d = 0, f = new _.Fe, g = b(f.resolve), h = ++e, bb(l, 0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, 1E3);
                _.Vm(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    bp = function() {
        var a = new Vo;
        var b = (new Wo).setCorrelator(Cd(_.r));
        var c = _.C(Dd).j().join();
        b = ac(b, 5, c, "");
        b = ac(b, 2, 1, 0);
        a = Ec(a, 1, b);
        b = new Xo;
        c = _.E(Yo);
        b = ac(b, 7, c, !1);
        c = _.E(Zo);
        b = ac(b, 8, c, !1);
        c = _.E($o);
        b = ac(b, 9, c, !1);
        b = ac(b, 10, !0, !1);
        c = _.E(ap);
        b = ac(b, 13, c, !1);
        b = ac(b, 16, !0, !1);
        a = Ec(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    dp = function() {
        var a = cp,
            b = Number(a);
        return 1 > b || Math.floor(b) !== b ? (qd({
            v: a
        }, "gpt_inv_ver"), "1") : a
    };
    jp = function() {
        var a = ep() || md() ? 1 : nd(),
            b = .001 > a;
        b ? (_.C(fp).o = !0, gp(31067358)) : .002 > a && gp(31067357);
        hp(23);
        a = 1E-4 > a;
        var c = _.E(ip);
        return {
            Mb: b,
            Te: 1E3,
            nf: a,
            Se: 1E4,
            Wd: b,
            sd: 1E3,
            pf: c
        }
    };
    mp = function(a) {
        var b = dp();
        var c = /m\d+/.test("") ? Number("".substring(1)) : void 0;
        var d = Cd(window),
            e = _.Ad(kp);
        return _.u(Object, "assign").call(Object, {}, a, {
            ya: b,
            Za: "",
            Pa: c,
            pvsid: d,
            kb: new lp(e)
        })
    };
    np = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    op = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    pp = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    qp = pp(this);
    rp = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    w = {};
    sp = {};
    _.u = function(a, b) {
        var c = sp[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    };
    tp = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in w ? f = w : f = qp;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = rp && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? op(w, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === sp[d] && (a = 1E9 * Math.random() >>> 0, sp[d] = rp ? qp.Symbol(d) : "$jscp$" + a + "$" + d), op(f, sp[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    tp("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            op(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    tp("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, w.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = qp[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && op(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return up(np(this))
                }
            })
        }
        return a
    }, "es6");
    up = function(a) {
        a = {
            next: a
        };
        a[_.u(w.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    S = function(a) {
        return a.raw = a
    };
    _.z = function(a) {
        var b = "undefined" != typeof w.Symbol && _.u(w.Symbol, "iterator") && a[_.u(w.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: np(a)
        }
    };
    vp = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    };
    _.Sc = function(a) {
        return a instanceof Array ? a : vp(_.z(a))
    };
    wp = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    xp = rp && "function" == typeof _.u(Object, "assign") ? _.u(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) wp(d, e) && (a[e] = d[e])
        }
        return a
    };
    tp("Object.assign", function(a) {
        return a || xp
    }, "es6");
    var yp = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        zp = function() {
            function a() {
                function c() {}
                new c;
                _.u(w.Reflect, "construct").call(w.Reflect, c, [], function() {});
                return new c instanceof c
            }
            if (rp && "undefined" != typeof w.Reflect && _.u(w.Reflect, "construct")) {
                if (a()) return _.u(w.Reflect, "construct");
                var b = _.u(w.Reflect, "construct");
                return function(c, d, e) {
                    c = b(c, d);
                    e && _.u(w.Reflect, "setPrototypeOf").call(w.Reflect, c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = yp(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        Ap;
    if (rp && "function" == typeof _.u(Object, "setPrototypeOf")) Ap = _.u(Object, "setPrototypeOf");
    else {
        var Bp;
        a: {
            var Cp = {
                    a: !0
                },
                Dp = {};
            try {
                Dp.__proto__ = Cp;
                Bp = Dp.a;
                break a
            } catch (a) {}
            Bp = !1
        }
        Ap = Bp ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    Ep = Ap;
    _.R = function(a, b) {
        a.prototype = yp(b.prototype);
        a.prototype.constructor = a;
        if (Ep) Ep(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.jh = b.prototype
    };
    Fp = function() {
        this.l = !1;
        this.H = null;
        this.m = void 0;
        this.j = 1;
        this.I = this.A = 0;
        this.C = null
    };
    Gp = function(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    };
    Fp.prototype.o = function(a) {
        this.m = a
    };
    var Hp = function(a, b) {
        a.C = {
            ud: b,
            Ne: !0
        };
        a.j = a.A || a.I
    };
    Fp.prototype.return = function(a) {
        this.C = {
            return: a
        };
        this.j = this.I
    };
    bb = function(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    };
    db = function(a, b) {
        a.j = b;
        a.A = 0
    };
    eb = function(a) {
        a.A = 0;
        var b = a.C.ud;
        a.C = null;
        return b
    };
    Ip = function(a) {
        this.j = new Fp;
        this.m = a
    };
    Lp = function(a, b) {
        Gp(a.j);
        var c = a.j.H;
        if (c) return Jp(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return Kp(a)
    };
    Jp = function(a, b, c, d) {
        try {
            var e = b.call(a.j.H, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.H = null, Hp(a.j, g), Kp(a)
        }
        a.j.H = null;
        d.call(a.j, f);
        return Kp(a)
    };
    Kp = function(a) {
        for (; a.j.j;) try {
            var b = a.m(a.j);
            if (b) return a.j.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.m = void 0, Hp(a.j, c)
        }
        a.j.l = !1;
        if (a.j.C) {
            b = a.j.C;
            a.j.C = null;
            if (b.Ne) throw b.ud;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    Mp = function(a) {
        this.next = function(b) {
            Gp(a.j);
            a.j.H ? b = Jp(a, a.j.H.next, b, a.j.o) : (a.j.o(b), b = Kp(a));
            return b
        };
        this.throw = function(b) {
            Gp(a.j);
            a.j.H ? b = Jp(a, a.j.H["throw"], b, a.j.o) : (Hp(a.j, b), b = Kp(a));
            return b
        };
        this.return = function(b) {
            return Lp(a, b)
        };
        this[_.u(w.Symbol, "iterator")] = function() {
            return this
        }
    };
    Np = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new w.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : w.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.ab = function(a) {
        return Np(new Mp(new Ip(a)))
    };
    Ia = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    tp("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    tp("Reflect.construct", function() {
        return zp
    }, "es6");
    tp("Reflect.setPrototypeOf", function(a) {
        return a ? a : Ep ? function(b, c) {
            try {
                return Ep(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    tp("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.m = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.A(function() {
                    h.C()
                })
            }
            this.j.push(g)
        };
        var d = qp.setTimeout;
        b.prototype.A = function(g) {
            d(g, 0)
        };
        b.prototype.C = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.H(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.H = function(g) {
            this.A(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.m = 0;
            this.A = void 0;
            this.j = [];
            this.o = !1;
            var h = this.H();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.H = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.P),
                reject: g(this.C)
            }
        };
        e.prototype.P = function(g) {
            if (g === this) this.C(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.J(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.oa(g) : this.l(g)
            }
        };
        e.prototype.oa = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.C(k);
                return
            }
            "function" == typeof h ? this.V(h, g) : this.l(g)
        };
        e.prototype.C = function(g) {
            this.I(2, g)
        };
        e.prototype.l = function(g) {
            this.I(1, g)
        };
        e.prototype.I = function(g, h) {
            if (0 != this.m) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.m);
            this.m = g;
            this.A = h;
            2 === this.m && this.G();
            this.L()
        };
        e.prototype.G = function() {
            var g = this;
            d(function() {
                if (g.D()) {
                    var h = qp.console;
                    "undefined" !== typeof h && h.error(g.A)
                }
            }, 1)
        };
        e.prototype.D = function() {
            if (this.o) return !1;
            var g = qp.CustomEvent,
                h = qp.Event,
                k = qp.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = qp.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.A;
            return k(g)
        };
        e.prototype.L = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.m(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.J = function(g) {
            var h = this.H();
            g.Zb(h.resolve, h.reject)
        };
        e.prototype.V = function(g, h) {
            var k = this.H();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, t) {
                return "function" == typeof p ? function(A) {
                    try {
                        l(p(A))
                    } catch (y) {
                        m(y)
                    }
                } : t
            }
            var l, m, n = new e(function(p, t) {
                l = p;
                m = t
            });
            this.Zb(k(g, l), k(h, m));
            return n
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Zb = function(g, h) {
            function k() {
                switch (l.m) {
                    case 1:
                        g(l.A);
                        break;
                    case 2:
                        h(l.A);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.m);
                }
            }
            var l = this;
            null == this.j ? f.m(k) : this.j.push(k);
            this.o = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.z(g), m = l.next(); !m.done; m = l.next()) c(m.value).Zb(h, k)
            })
        };
        e.all = function(g) {
            var h = _.z(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function n(A) {
                    return function(y) {
                        p[A] = y;
                        t--;
                        0 == t && l(p)
                    }
                }
                var p = [],
                    t = 0;
                do p.push(void 0), t++, c(k.value).Zb(n(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    tp("Object.setPrototypeOf", function(a) {
        return a || Ep
    }, "es6");
    tp("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.z(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!wp(g, d)) {
                var k = new b;
                op(g, d, {
                    value: k
                })
            }
            if (!wp(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && wp(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && wp(g, d) && wp(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && wp(g, d) && wp(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    tp("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.u(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.z([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.u(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var b = new w.WeakMap,
            c = function(h) {
                this.m = {};
                this.j = f();
                this.size = 0;
                if (h) {
                    h = _.z(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.m[l.id] = []);
            l.ma ? l.ma.value = k : (l.ma = {
                next: this.j,
                Qa: this.j.Qa,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.ma), this.j.Qa.next = l.ma, this.j.Qa = l.ma, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.ma && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.m[h.id], h.ma.Qa.next = h.ma.next, h.ma.next.Qa = h.ma.Qa, h.ma.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.m = {};
            this.j = this.j.Qa = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).ma
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).ma) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = _.u(this, "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[_.u(w.Symbol, "iterator")] = _.u(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h.m[l];
                if (m && wp(h.m, l))
                    for (h = 0; h < m.length; h++) {
                        var n = m[h];
                        if (k !== k && n.key !== n.key || k === n.key) return {
                            id: l,
                            list: m,
                            index: h,
                            ma: n
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    ma: void 0
                }
            },
            e = function(h, k) {
                var l = h.j;
                return up(function() {
                    if (l) {
                        for (; l.head != h.j;) l = l.Qa;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Qa = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var Op = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    tp("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Op(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var Pp = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                de: f
            }
        }
        return {
            i: -1,
            de: void 0
        }
    };
    tp("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Pp(this, b, c).de
        }
    }, "es6");
    tp("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.u(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.z([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.u(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new w.Map;
            if (c) {
                c = _.z(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return _.u(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return _.u(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.u(b.prototype, "values");
        b.prototype[_.u(w.Symbol, "iterator")] = _.u(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    var Qp = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[_.u(w.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    tp("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Qp(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    tp("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    tp("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.u(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    tp("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    tp("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Op(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    tp("globalThis", function(a) {
        return a || qp
    }, "es_2020");
    tp("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Pp(this, b, c).i
        }
    }, "es6");
    tp("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) wp(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    tp("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Qp(this, function(b) {
                return b
            })
        }
    }, "es6");
    tp("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof w.Symbol && _.u(w.Symbol, "iterator") && b[_.u(w.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    tp("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Qp(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    tp("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    tp("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.u(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    tp("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Op(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    tp("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) wp(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    tp("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.u(w.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.u(w.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    _.r = this || self;
    Rp = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    mi = function(a) {
        var b = Rp(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.fa = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    ha = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Sp) && a[Sp] || (a[Sp] = ++Tp)
    };
    Sp = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Tp = 0;
    Up = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Vp = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.Wp = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.Wp = Up : _.Wp = Vp;
        return _.Wp.apply(null, arguments)
    };
    _.Xp = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    xe = function() {
        return Date.now()
    };
    Yp = function() {
        var a = Xe(),
            b = Ai();
        a.enums = b
    };
    var Zp;
    var ge = function(a, b) {
        this.j = a === $p && b || "";
        this.m = aq
    };
    ge.prototype.Oa = !0;
    ge.prototype.Ga = function() {
        return this.j
    };
    var he = function(a) {
            return a instanceof ge && a.constructor === ge && a.m === aq ? a.j : "type_error:Const"
        },
        bq = function(a) {
            return new ge($p, a)
        },
        aq = {},
        $p = {};
    var jb = bq("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var cq = {};
    var Ae, eq;
    _.ba = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.dq = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.Ce = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    Ae = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    eq = function(a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    };
    _.Qe = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var qe = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Ym = {},
        Ta = function(a, b) {
            this.j = b === Ym ? a : "";
            this.Oa = !0
        };
    Ta.prototype.toString = function() {
        return this.j.toString()
    };
    Ta.prototype.Ga = function() {
        return this.j.toString()
    };
    var Pc = function(a, b) {
        this.j = b === fq ? a : ""
    };
    q = Pc.prototype;
    q.toString = function() {
        return this.j + ""
    };
    q.Oa = !0;
    q.Ga = function() {
        return this.j.toString()
    };
    q.Qc = !0;
    q.rb = function() {
        return 1
    };
    var Ka = function(a) {
            return a instanceof Pc && a.constructor === Pc ? a.j : "type_error:TrustedResourceUrl"
        },
        ib = function(a, b) {
            var c = he(a);
            if (!gq.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(hq, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof ge ? he(d) : encodeURIComponent(String(d))
            });
            return Ja(a)
        },
        hq = /%{(\w+)}/g,
        gq = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        iq = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        fq = {},
        Ja = function(a) {
            return new Pc(a, fq)
        },
        jq = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
    var kq = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        li = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        lq = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        pe = function(a) {
            if (!mq.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(nq, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(oq, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(pq, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(qq, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(rq, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(sq, "&#0;"));
            return a
        },
        nq = /&/g,
        oq = /</g,
        pq = />/g,
        qq = /"/g,
        rq = /'/g,
        sq = /\x00/g,
        mq = /[\x00&<>"']/,
        xa = function(a, b) {
            return -1 != a.indexOf(b)
        },
        Ro = function(a, b) {
            var c = 0;
            a = lq(String(a)).split(".");
            b = lq(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = tq(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || tq(0 == f[2].length, 0 == g[2].length) || tq(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        tq = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var ne, le;
    _.je = function(a, b) {
        this.j = b === _.me ? a : ""
    };
    q = _.je.prototype;
    q.toString = function() {
        return this.j.toString()
    };
    q.Oa = !0;
    q.Ga = function() {
        return this.j.toString()
    };
    q.Qc = !0;
    q.rb = function() {
        return 1
    };
    _.ke = function(a) {
        return a instanceof _.je && a.constructor === _.je ? a.j : "type_error:SafeUrl"
    };
    ne = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    le = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.me = {};
    _.oe = new _.je("about:invalid#zClosurez", _.me);
    var uq = {},
        Nc = function(a, b, c) {
            this.j = c === uq ? a : "";
            this.m = b;
            this.Oa = this.Qc = !0
        };
    Nc.prototype.rb = function() {
        return this.m
    };
    Nc.prototype.Ga = function() {
        return this.j.toString()
    };
    Nc.prototype.toString = function() {
        return this.j.toString()
    };
    var Ma = function(a) {
            return a instanceof Nc && a.constructor === Nc ? a.j : "type_error:SafeHtml"
        },
        vq = function(a) {
            if (a instanceof Nc) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.Qc && (c = a.rb());
            return se(pe(b && a.Oa ? a.Ga() : String(a)), c)
        },
        xq = function(a) {
            var b = vq(wq),
                c = b.rb(),
                d = [],
                e = function(f) {
                    Array.isArray(f) ? f.forEach(e) : (f = vq(f), d.push(Ma(f).toString()), f = f.rb(), 0 == c ? c = f : 0 != f && c != f && (c = null))
                };
            a.forEach(e);
            return se(d.join(Ma(b).toString()), c)
        },
        re = function(a) {
            return xq(Array.prototype.slice.call(arguments))
        },
        se = function(a, b) {
            return new Nc(a, b, uq)
        },
        ee = /^[a-zA-Z0-9-]+$/,
        ie = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        fe = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        wq = new Nc(_.r.trustedTypes && _.r.trustedTypes.emptyHTML || "", 0, uq);
    var yq = function(a, b, c, d) {
        this.j = a;
        this.A = b;
        this.m = c;
        this.H = d
    };
    var zq = new yq(new w.Set("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ")), new w.Map([
        ["A", new w.Map([
            ["href", {
                ta: 2
            }]
        ])],
        ["AREA", new w.Map([
            ["href", {
                ta: 2
            }]
        ])],
        ["LINK", new w.Map([
            ["href", {
                ta: 2,
                conditions: new w.Map([
                    ["rel", new w.Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]
                ])
            }]
        ])],
        ["SOURCE", new w.Map([
            ["src", {
                ta: 2
            }]
        ])],
        ["IMG", new w.Map([
            ["src", {
                ta: 2
            }]
        ])],
        ["VIDEO", new w.Map([
            ["src", {
                ta: 2
            }]
        ])],
        ["AUDIO", new w.Map([
            ["src", {
                ta: 2
            }]
        ])]
    ]), new w.Set("title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")), new w.Map([
        ["dir", {
            ta: 3,
            conditions: new w.Map([
                ["dir", new w.Set(["auto", "ltr", "rtl"])]
            ])
        }],
        ["async", {
            ta: 3,
            conditions: new w.Map([
                ["async", new w.Set(["async"])]
            ])
        }],
        ["cite", {
            ta: 2
        }],
        ["loading", {
            ta: 3,
            conditions: new w.Map([
                ["loading", new w.Set(["eager", "lazy"])]
            ])
        }],
        ["poster", {
            ta: 2
        }],
        ["target", {
            ta: 3,
            conditions: new w.Map([
                ["target", new w.Set(["_self", "_blank"])]
            ])
        }]
    ]));
    _.Ga = function(a) {
        this.Qe = a
    };
    _.Aq = [Ha("data"), Ha("http"), Ha("https"), Ha("mailto"), Ha("ftp"), new _.Ga(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var Bq = function() {
        if (cq !== cq) throw Error("Bad secret");
    };
    new Bq;
    var Cq = function() {
        this.m = !1;
        this.j = zq
    };
    Cq.prototype.build = function() {
        if (this.m) throw Error("this sanitizer has already called build");
        this.m = !0;
        return new Bq
    };
    var Dq, Eq, Ig, Fq;
    Dq = function() {
        return !0
    };
    Eq = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Ig = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.fn = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    Fq = function(a, b, c) {
        var d = 0,
            e = !1,
            f = [],
            g = function() {
                d = 0;
                e && (e = !1, h())
            },
            h = function() {
                d = _.r.setTimeout(g, b);
                var k = f;
                f = [];
                a.apply(c, k)
            };
        return function(k) {
            f = arguments;
            d ? e = !0 : h()
        }
    };
    var Gq, Xa;
    Gq = {
        passive: !0
    };
    Xa = Ig(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.r.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.Za = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Ya(d)), !0) : !1
    };
    _.ad = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Ya(d)), !0) : !1
    };
    var cb = function(a) {
        return new w.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var lb = {};
    var ob, nb = "undefined" !== typeof TextEncoder;
    var Hq = function(a) {
        Hq[" "](a);
        return a
    };
    Hq[" "] = function() {};
    var Iq = function(a, b) {
            try {
                return Hq(a[b]), !0
            } catch (c) {}
            return !1
        },
        Jq = function(a, b, c, d) {
            d = d ? d(b) : b;
            return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
        };
    var Kq, Mq, Nq, Oq, Pq, Qq;
    Kq = ya("Opera");
    _.Lq = ya("Trident") || ya("MSIE");
    Mq = ya("Edge");
    Nq = ya("Gecko") && !(xa(wa().toLowerCase(), "webkit") && !ya("Edge")) && !(ya("Trident") || ya("MSIE")) && !ya("Edge");
    Oq = xa(wa().toLowerCase(), "webkit") && !ya("Edge");
    Pq = function() {
        var a = _.r.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Rq = "",
            Sq = function() {
                var a = wa();
                if (Nq) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Mq) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Lq) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Oq) return /WebKit\/(\S+)/.exec(a);
                if (Kq) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Sq && (Rq = Sq ? Sq[1] : "");
        if (_.Lq) {
            var Tq = Pq();
            if (null != Tq && Tq > parseFloat(Rq)) {
                Qq = String(Tq);
                break a
            }
        }
        Qq = Rq
    }
    var Uq = Qq,
        Vq = {},
        Wq = function(a) {
            return Jq(Vq, a, function() {
                return 0 <= Ro(Uq, a)
            })
        },
        Xq;
    if (_.r.document && _.Lq) {
        var Yq = Pq();
        Xq = Yq ? Yq : parseInt(Uq, 10) || void 0
    } else Xq = void 0;
    var Zq = Xq;
    !ya("Android") || Ba();
    Ba();
    Ca();
    var $q = {},
        ar = null,
        br = Nq || Oq || "function" == typeof _.r.btoa,
        Jb = function(a, b) {
            void 0 === b && (b = 0);
            cr();
            b = $q[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        Xk = function(a, b) {
            if (br && !b) a = _.r.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = Jb(c, b)
            }
            return a
        },
        zn = function(a) {
            var b = "";
            dr(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        er = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : xa("=.", a[b - 1]) && (c = xa("=.", a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            dr(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        dr = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = ar[l];
                    if (null != m) return m;
                    if (!li(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            cr();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        cr = function() {
            if (!ar) {
                ar = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    $q[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === ar[f] && (ar[f] = e)
                    }
                }
            }
        };
    var qb = "undefined" !== typeof Uint8Array,
        fr, sb = {};
    var gr, Fb = function(a, b) {
            tb(b);
            this.Qb = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        Eb = function() {
            return gr || (gr = new Fb(null, sb))
        },
        Kb = function(a) {
            var b = a.Qb;
            b = null == b || "string" === typeof b ? b : qb && b instanceof Uint8Array ? Jb(b) : null;
            return null == b ? "" : a.Qb = b
        };
    Fb.prototype.isEmpty = function() {
        return null == this.Qb
    };
    var ub = "function" === typeof w.Symbol && "symbol" === typeof(0, w.Symbol)() ? (0, w.Symbol)(void 0) : void 0;
    var hr, ir = Object.freeze(xb([])),
        Xb = function(a) {
            if (Cb(a)) throw Error("Cannot mutate an immutable Message");
        },
        jr = "undefined" != typeof w.Symbol && "undefined" != typeof w.Symbol.hasInstance;
    var Lb = function(a, b) {
            this.j = a;
            this.A = b;
            this.map = {};
            this.m = !1;
            for (a = this.size = 0; a < this.j.length; a++) {
                b = this.j[a];
                var c = b[0].toString(),
                    d = this.map[c];
                this.map[c] = b;
                void 0 === d && this.size++
            }
        },
        kr = function(a) {
            if (zb(a.j)) throw Error("Cannot mutate an immutable Map");
        };
    Lb.prototype.ra = function() {
        if (!this.m) {
            var a = lr(this);
            a.sort();
            for (var b = 0; b < a.length; b++) this.j[b] = this.map[a[b]];
            a.length < this.j.length && (this.j.length = a.length);
            this.m = !0;
            this.size = this.j.length
        }
        return this.j
    };
    var Ub = function(a, b) {
        var c = a.A,
            d = new Lb(xb([]), c),
            e;
        for (e in a.map) {
            var f = a.map[e];
            c ? d.set(f[0], b(mr(a, f))) : d.set(f[0], f[1])
        }
        return d
    };
    q = Lb.prototype;
    q.clear = function() {
        kr(this);
        this.map = {};
        this.size = this.j.length = 0;
        this.m = !0
    };
    q.delete = function(a) {
        kr(this);
        a = a.toString();
        return this.map.hasOwnProperty(a) ? (delete this.map[a], this.size--, this.m = !1, !0) : !1
    };
    q.entries = function() {
        var a = [],
            b = lr(this);
        b.sort();
        for (var c = 0; c < b.length; c++) {
            var d = this.map[b[c]];
            a.push([d[0], mr(this, d)])
        }
        return new nr(a)
    };
    q.keys = function() {
        var a = [],
            b = lr(this);
        b.sort();
        for (var c = 0; c < b.length; c++) a.push(this.map[b[c]][0]);
        return new nr(a)
    };
    q.values = function() {
        var a = [],
            b = lr(this);
        b.sort();
        for (var c = 0; c < b.length; c++) a.push(mr(this, this.map[b[c]]));
        return new nr(a)
    };
    q.forEach = function(a, b) {
        var c = lr(this);
        c.sort();
        for (var d = 0; d < c.length; d++) {
            var e = this.map[c[d]];
            a.call(b, mr(this, e), e[0], this)
        }
    };
    q.set = function(a, b) {
        kr(this);
        var c = a.toString(),
            d = this.map[c];
        d ? d[1] = b : (a = [a, b], this.map[c] = a, this.j.push(a), this.m = !1, this.size++);
        return this
    };
    var mr = function(a, b) {
        var c = b[1],
            d = a.A;
        if (d) {
            var e = !1;
            var f = null != c && "object" === typeof c && !(e = Array.isArray(c)) && Array.isArray(c.wa) && c.constructor !== Object ? c : e ? new d(c) : new d;
            f !== c && (b[1] = f, zb(a.j) && Ab(f.wa));
            return f
        }
        return c
    };
    Lb.prototype.get = function(a) {
        if (a = this.map[a.toString()]) return mr(this, a)
    };
    Lb.prototype.has = function(a) {
        return a.toString() in this.map
    };
    var lr = function(a) {
        a = a.map;
        var b = [],
            c;
        for (c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
        return b
    };
    Lb.prototype[_.u(w.Symbol, "iterator")] = function() {
        return _.u(this, "entries").call(this)
    };
    var nr = function(a) {
        this.m = 0;
        this.j = a
    };
    nr.prototype.next = function() {
        return this.m < this.j.length ? {
            done: !1,
            value: this.j[this.m++]
        } : {
            done: !0,
            value: void 0
        }
    };
    nr.prototype[_.u(w.Symbol, "iterator")] = function() {
        return this
    };
    var or = function(a) {
            return a.j || (a.j = a.wa[a.m + a.bb] = {})
        },
        Q = function(a, b, c) {
            return -1 === b ? null : b >= a.m ? a.j ? a.j[b] : void 0 : (void 0 === c ? 0 : c) && a.j && (c = a.j[b], null != c) ? c : a.wa[b + a.bb]
        },
        x = function(a, b, c, d, e) {
            d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || Xb(a);
            b < a.m && !d ? a.wa[b + a.bb] = c : or(a)[b] = c;
            return a
        },
        Pi = function(a, b) {
            return null != Q(a, b)
        },
        mg = function(a, b) {
            return Array.isArray(Q(a, b))
        },
        Vb = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            var e = Q(a, b, d);
            Array.isArray(e) || (e = ir);
            if (Cb(a)) c && (Ab(e), Object.freeze(e));
            else if (e === ir || zb(e)) e = xb(e.slice()), x(a, b, e, d);
            return e
        },
        Gd = function(a, b) {
            a = Q(a, b);
            return null == a ? a : +a
        },
        I = function(a, b) {
            a = Q(a, b);
            return null == a ? a : !!a
        },
        kd = function(a, b, c) {
            a = Q(a, b);
            return null == a ? c : a
        },
        pr = function(a, b, c) {
            a = I(a, b);
            return null == a ? void 0 === c ? !1 : c : a
        },
        ef = function(a, b, c) {
            null == c ? c = ir : xb(c);
            return x(a, b, c)
        },
        Yb = function(a, b, c) {
            return x(a, b, void 0, !1, c)
        },
        Bf = function(a, b, c, d) {
            Xb(a);
            (c = cc(a, c)) && c !== b && null != d && (a.Z && c in a.Z && (a.Z[c] = void 0), x(a, c));
            return x(a, b, d)
        },
        cc = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != Q(a, e) && (0 !== c && Yb(a, c, !0), c = e)
            }
            return c
        },
        hc = function(a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            var f = e;
            if (-1 === c) d = null;
            else {
                a.Z || (a.Z = {});
                var g = a.Z[c];
                if (g) d = g;
                else {
                    var h = Q(a, c, f);
                    b = Ib(h, b, d);
                    void 0 == b ? d = g : (d && b.ra() !== h && x(a, c, b.ra(), f, !0), a.Z[c] = b, Cb(a) && Ab(b.wa), d = b)
                }
            }
            if (null == d) return d;
            Cb(d) && !Cb(a) && (d = d.Ob(lb), x(a, c, d.ra(), e), a.Z[c] = d);
            return d
        },
        qr = function(a, b, c, d, e) {
            e = void 0 === e ? !0 : e;
            a.Z || (a.Z = {});
            var f = Cb(a),
                g = a.Z[c];
            d = Vb(a, c, !0, d);
            var h = f || zb(d);
            if (!g) {
                g = [];
                f = f || h;
                for (var k = 0; k < d.length; k++) {
                    var l = d[k];
                    f = f || zb(l);
                    l = Ib(l, b);
                    void 0 !== l && (g.push(l), h && Ab(l.wa))
                }
                a.Z[c] = g;
                Bb(d, !f)
            }
            b = h || e;
            e = zb(g);
            b && !e && (Object.isFrozen(g) && (a.Z[c] = g = g.slice()), Ab(g), Object.freeze(g));
            !b && e && (a.Z[c] = g = g.slice());
            return g
        },
        fc = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            var e = Cb(a);
            b = qr(a, b, c, d, e);
            a = Vb(a, c, d);
            if (!(c = e) && (c = a)) {
                if (!Array.isArray(a)) throw Error("cannot check mutability state of non-array");
                c = !(wb(a) & 8)
            }
            if (c) {
                for (c = 0; c < b.length; c++)(d = b[c]) && Cb(d) && !e && (b[c] = b[c].Ob(lb), a[c] = b[c].ra());
                Bb(a, !0)
            }
            return b
        },
        Ec = function(a, b, c) {
            Xb(a);
            a.Z || (a.Z = {});
            var d = null != c ? c.ra() : c;
            a.Z[b] = c;
            return x(a, b, d)
        },
        kf = function(a, b, c, d) {
            Xb(a);
            a.Z || (a.Z = {});
            var e = null != d ? d.ra() : d;
            a.Z[b] = d;
            return Bf(a, b, c, e)
        },
        Dc = function(a, b, c) {
            Xb(a);
            if (null != c) {
                var d = xb([]);
                for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].ra(), e = e || zb(d[f]);
                a.Z || (a.Z = {});
                a.Z[b] = c;
                Bb(d, !e)
            } else a.Z && (a.Z[b] = void 0), d = ir;
            return x(a, b, d)
        },
        rr = function(a, b, c, d) {
            Xb(a);
            var e = qr(a, c, b, void 0, !1);
            c = null != d ? d : new c;
            a = Vb(a, b);
            e.push(c);
            a.push(c.ra());
            mb(lb);
            Cb(c) && Bb(a, !1);
            return c
        },
        ri = function(a, b, c, d) {
            rr(a, b, c, d);
            return a
        },
        ld = function(a, b) {
            return kd(a, b, 0)
        },
        Dh = function(a, b) {
            return kd(a, b, "")
        },
        tr = function(a) {
            return ld(a, dc(a, sr, 3))
        };
    var vr = function(a, b, c) {
        a || (a = ur);
        ur = null;
        var d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.bb = (d ? 0 : -1) - (this.constructor.j || 0);
        this.Z = void 0;
        this.wa = a;
        a: {
            d = this.wa.length;a = d - 1;
            if (d && (d = this.wa[a], Db(d))) {
                this.m = a - this.bb;
                this.j = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, a + 1 - this.bb), this.j = void 0) : this.m = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.m) a += this.bb, (d = this.wa[a]) ? Array.isArray(d) && xb(d) : this.wa[a] = ir;
                else {
                    d = or(this);
                    var e = d[a];
                    e ? Array.isArray(e) && xb(e) : d[a] = ir
                }
    };
    vr.prototype.toJSON = function() {
        var a = this.ra();
        return hr ? a : Pb(a, Rb)
    };
    vr.prototype.ra = function() {
        return this.wa
    };
    vr.prototype.X = function() {
        hr = !0;
        try {
            return JSON.stringify(this.toJSON(), ec)
        } finally {
            hr = !1
        }
    };
    var cd = function(a, b) {
            if (null == b || "" == b) return new a;
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + Rp(b) + ": " + b);
            ur = b;
            a = new a(b);
            ur = null;
            return a
        },
        Sb = function(a) {
            var b = Pb(a.ra());
            ur = b;
            b = new a.constructor(b);
            ur = null;
            gc(b, a);
            return b
        },
        ur;
    var jc = 0,
        kc = 0,
        mc = "function" === typeof BigInt;
    var wr = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        yr = function(a) {
            if (!a) return xr || (xr = new wr(0, 0));
            if (!/^\d+$/.test(a)) return null;
            nc(a);
            return new wr(jc, kc)
        },
        xr, zr = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        Br = function(a) {
            if (!a) return Ar || (Ar = new zr(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            nc(a);
            return new zr(jc, kc)
        },
        Ar;
    var Dr = function() {
        this.j = []
    };
    Dr.prototype.length = function() {
        return this.j.length
    };
    Dr.prototype.end = function() {
        var a = this.j;
        this.j = [];
        return a
    };
    var Er = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.j.push(b)
        },
        Fr = function(a, b) {
            for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b)
        },
        Gr = function(a, b) {
            if (0 <= b) Fr(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1)
            }
        };
    var Hr = function() {
            this.A = [];
            this.m = 0;
            this.j = new Dr
        },
        Ir = function(a, b) {
            0 !== b.length && (a.A.push(b), a.m += b.length)
        },
        Jr = function(a, b) {
            Fr(a.j, 8 * b + 2);
            b = a.j.end();
            Ir(a, b);
            b.push(a.m);
            return b
        },
        Kr = function(a, b) {
            var c = b.pop();
            for (c = a.m + a.j.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.m++;
            b.push(c);
            a.m++
        },
        qc = function(a, b) {
            if (b = b.sb) {
                Ir(a, a.j.end());
                for (var c = 0; c < b.length; c++) {
                    var d = a;
                    var e = b[c];
                    tb(sb);
                    var f = e.Qb;
                    f = null == f || rb(f) ? f : "string" === typeof f ? er(f) : null;
                    e = null == f ? f : e.Qb = f;
                    Ir(d, e || fr || (fr = new Uint8Array(0)))
                }
            }
        },
        Lr = function(a, b, c) {
            Fr(a.j, 8 * b + 2);
            Fr(a.j, c.length);
            Ir(a, a.j.end());
            Ir(a, c)
        };
    var Mr = function() {
        vr.apply(this, arguments)
    };
    _.R(Mr, vr);
    Mr.prototype.Ob = function() {
        return this
    };
    if (jr) {
        var Nr = {};
        Object.defineProperties(Mr, (Nr[w.Symbol.hasInstance] = Hb(function() {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        }), Nr))
    };
    var vc = (0, w.Symbol)(),
        tc = (0, w.Symbol)(),
        sc = (0, w.Symbol)(),
        Tk = function(a, b) {
            var c = new Hr;
            xc(a, c, wc(b));
            Ir(c, c.j.end());
            a = new Uint8Array(c.m);
            b = c.A;
            for (var d = b.length, e = 0, f = 0; f < d; f++) {
                var g = b[f];
                a.set(g, e);
                e += g.length
            }
            c.A = [a];
            return a
        },
        Or = Cc(function(a, b, c) {
            if (5 !== a.j()) return !1;
            x(b, c, a.l());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            if (null != b) {
                Fr(a.j, 8 * c + 5);
                a = a.j;
                var d = +b;
                0 === d ? 0 < 1 / d ? jc = kc = 0 : (kc = 0, jc = 2147483648) : isNaN(d) ? (kc = 0, jc = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d, 3.4028234663852886E38 < d ? (kc = 0, jc = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), kc = 0, jc = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, kc = 0, jc = (c | b + 127 << 23 | d & 8388607) >>> 0));
                c = jc;
                a.j.push(c >>> 0 & 255);
                a.j.push(c >>> 8 & 255);
                a.j.push(c >>> 16 & 255);
                a.j.push(c >>> 24 & 255)
            }
        }),
        Pr = Cc(function(a, b, c) {
            if (0 !== a.j()) return !1;
            x(b, c, a.I());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && ("string" === typeof b && Br(b), null != b && (Fr(a.j, 8 * c), "number" === typeof b ? (a = a.j, lc(b), Er(a, jc, kc)) : (c = Br(b), Er(a.j, c.m, c.j))))
        }),
        Qr = Cc(function(a, b, c) {
            if (0 !== a.j()) return !1;
            x(b, c, a.L());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && ("string" === typeof b && yr(b), null != b && (Fr(a.j, 8 * c), "number" === typeof b ? (a = a.j, lc(b), Er(a, jc, kc)) : (c = yr(b), Er(a.j, c.m, c.j))))
        }),
        Rr = Cc(function(a, b, c) {
            if (0 !== a.j()) return !1;
            x(b, c, a.o());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && null != b && (Fr(a.j, 8 * c), Gr(a.j, b))
        }),
        Sr = Cc(function(a, b, c) {
            if (0 !== a.j()) return !1;
            x(b, c, a.H());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && (Fr(a.j, 8 * c), a.j.j.push(b ? 1 : 0))
        }),
        Tr = Cc(function(a, b, c) {
            if (2 !== a.j()) return !1;
            x(b, c, a.A());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && Lr(a, c, pb(b))
        }),
        Ur = Cc(function(a, b, c) {
            if (2 !== a.j()) return !1;
            a = a.A();
            bc(b, c, a);
            return !0
        }, function(a, b, c) {
            b = Vb(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && Lr(a, c, pb(e))
                }
        }),
        Vr = Cc(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            var f = a.m;
            Xb(b);
            b.Z || (b.Z = {});
            var g = b.Z[c];
            g ? (d = g.Ob(lb), d !== g && (x(b, c, d.ra()), b.Z[c] = d), b = d) : (g = Q(b, c), d = Ib(g, d, !0).Ob(lb), g !== d.ra() && x(b, c, d.ra()), b = b.Z[c] = d);
            f.call(a, b, e);
            return !0
        }, function(a, b, c, d, e) {
            b = hc(b, d, c);
            null != b && (c = Jr(a, c), e(b, a), Kr(a, c))
        }),
        Wr = Cc(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(rr(b, c, d), e);
            return !0
        }, function(a, b, c, d, e) {
            b = fc(b, d, c);
            if (null != b)
                for (d = 0; d < b.length; d++) {
                    var f = Jr(a, c);
                    e(b[d], a);
                    Kr(a, f)
                }
        }),
        Xr = Cc(function(a, b, c) {
            if (0 !== a.j()) return !1;
            x(b, c, a.C());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && (b = parseInt(b, 10), Fr(a.j, 8 * c), Gr(a.j, b))
        });
    var Fc = function(a) {
        return a
    };
    var T = function() {
        Mr.apply(this, arguments)
    };
    _.R(T, Mr);
    T.prototype.Ob = function(a) {
        mb(a);
        if (Cb(this)) {
            a = {
                Kc: !0
            };
            var b = Cb(this);
            if (b && !a.Kc) throw Error("copyRepeatedFields must be true for frozen messages");
            var c = new this.constructor;
            this.sb && (c.sb = this.sb.slice());
            for (var d = this.ra(), e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && Db(f))
                    for (h in f) {
                        if (Object.prototype.hasOwnProperty.call(f, h)) {
                            var g = +h;
                            _.u(Number, "isNaN").call(Number, g) ? or(c)[h] = f[h] : Gc(this, c, g, f[h], b, a)
                        }
                    } else Gc(this, c, e - this.bb, f, b, a)
            }
            var h = c
        } else h = this;
        return h
    };
    if (jr) {
        var Yr = {};
        Object.defineProperties(T, (Yr[w.Symbol.hasInstance] = Hb(Object[w.Symbol.hasInstance]), Yr))
    };
    var An = function(a) {
        T.call(this, a)
    };
    _.R(An, T);
    var Bn = function(a) {
        T.call(this, a)
    };
    _.R(Bn, T);
    var Zr = function(a) {
            this.j = a.m;
            this.m = a.A;
            this.H = a.H;
            this.Lb = a.Lb;
            this.F = a.F;
            this.ub = a.ub;
            this.lc = a.lc;
            this.Cc = a.Cc;
            this.kc = a.kc;
            this.A = a.j
        },
        $r = function(a, b, c) {
            this.m = a;
            this.A = b;
            this.H = c;
            this.F = window;
            this.ub = "env";
            this.lc = "n";
            this.Cc = "0";
            this.kc = "1";
            this.j = !0
        };
    $r.prototype.build = function() {
        return new Zr(this)
    };
    var Kn = function(a, b) {
        var c = void 0 === pr(b, 6) ? !0 : pr(b, 6),
            d, e;
        a: switch (kd(b, 4, 0)) {
            case 1:
                var f = "pt";
                break a;
            case 2:
                f = "cr";
                break a;
            default:
                f = ""
        }
        f = new $r(Hc(kd(b, 2, 0)), Dh(b, 3), f);
        b = null != (e = null == (d = hc(b, Bn, 5)) ? void 0 : Dh(d, 1)) ? e : "";
        f.Lb = b;
        f.j = c;
        f.F = a;
        return f.build()
    };
    var Sj = function(a) {
        T.call(this, a)
    };
    _.R(Sj, T);
    var Rj = function(a, b) {
            return x(a, 1, b)
        },
        Qj = function(a, b) {
            return x(a, 2, b)
        },
        as = [Sj, 1, Xr, 2, Rr, 3, Tr];
    var Zj = function(a) {
        T.call(this, a, -1, bs)
    };
    _.R(Zj, T);
    var Yj = function(a, b) {
            return x(a, 1, b)
        },
        ak = function(a, b) {
            x(a, 2, b)
        },
        Wj = function(a, b) {
            return ri(a, 3, fk, b)
        },
        Xj = function(a, b) {
            return x(a, 4, b)
        },
        fk = function(a) {
            T.call(this, a, -1, cs)
        };
    _.R(fk, T);
    var jk = function(a, b) {
            ef(a, 4, b)
        },
        kk = function(a, b) {
            Ec(a, 7, b)
        },
        hk = function(a) {
            T.call(this, a)
        };
    _.R(hk, T);
    hk.prototype.getId = function() {
        return Dh(this, 1)
    };
    var gk = function(a, b) {
            return x(a, 1, b)
        },
        ds = function(a) {
            T.call(this, a)
        };
    _.R(ds, T);
    ds.prototype.getWidth = function() {
        return ld(this, 1)
    };
    var mk = function(a) {
        var b = new ds;
        return x(b, 1, a)
    };
    ds.prototype.getHeight = function() {
        return ld(this, 2)
    };
    var lk = function(a, b) {
            return x(a, 2, b)
        },
        bs = [3],
        cs = [4],
        es = [Zj, 1, Tr, 2, Pr, 3, Wr, [fk, 1, Tr, 2, Pr, 8, Pr, 3, Tr, 4, Ur, 5, Xr, 6, Vr, [hk, 1, Tr], 7, Vr, [ds, 1, Rr, 2, Rr]], 4, Xr, 5, Vr, as, 6, Sr];
    var gs = function(a) {
        T.call(this, a, -1, fs)
    };
    _.R(gs, T);
    var Vj = function(a, b) {
            return rr(a, 2, Zj, b)
        },
        dk = function(a, b) {
            Ec(a, 5, b)
        },
        fs = [2],
        hs = [gs, 1, Xr, 6, Tr, 2, Wr, es, 3, Xr, 4, Tr, 5, Vr, as, 7, Sr, 8, Rr];
    var js = function(a) {
        T.call(this, a, -1, is)
    };
    _.R(js, T);
    var ks = function(a) {
            var b = new gs;
            b = x(b, 1, 1);
            return rr(a, 1, gs, b)
        },
        is = [1],
        Uk = [js, 1, Wr, hs];
    var ms = function(a) {
        T.call(this, a, -1, ls)
    };
    _.R(ms, T);
    var os = function(a) {
        T.call(this, a, -1, ns)
    };
    _.R(os, T);
    var ps = function(a) {
        T.call(this, a)
    };
    _.R(ps, T);
    var ls = [1],
        ns = [1],
        sr = [2, 3];
    var rs = function(a) {
        T.call(this, a, -1, qs)
    };
    _.R(rs, T);
    var qs = [4];
    var ss = function(a) {
        T.call(this, a)
    };
    _.R(ss, T);
    var us = function(a) {
        T.call(this, a, -1, ts)
    };
    _.R(us, T);
    var ts = [1];
    var ws = function(a) {
        T.call(this, a, -1, vs)
    };
    _.R(ws, T);
    var xs = function(a) {
        T.call(this, a)
    };
    _.R(xs, T);
    var vs = [1];
    var ys = function(a) {
        T.call(this, a)
    };
    _.R(ys, T);
    ys.prototype.getAdUnitPath = function() {
        return Dh(this, 1)
    };
    var zs = function(a) {
        T.call(this, a)
    };
    _.R(zs, T);
    var As = [zs, 1, Pr];
    var rl = function(a) {
        T.call(this, a)
    };
    _.R(rl, T);
    rl.prototype.getEscapedQemQueryId = function() {
        return Dh(this, 1)
    };
    var sl = [rl, 1, Tr, 2, Vr, As];
    var Bs = function(a) {
        T.call(this, a)
    };
    _.R(Bs, T);
    var Cs = [5];
    var Es = function(a) {
        T.call(this, a, -1, Ds)
    };
    _.R(Es, T);
    var Ds = [4, 5];
    var Fs = function(a) {
        T.call(this, a)
    };
    _.R(Fs, T);
    var Hs = function(a) {
        T.call(this, a, -1, Gs)
    };
    _.R(Hs, T);
    var Gs = [13];
    var Js = function(a) {
        T.call(this, a, -1, Is)
    };
    _.R(Js, T);
    var Is = [13];
    var ll = function(a) {
        T.call(this, a, -1, Ks)
    };
    _.R(ll, T);
    var Ls = function(a) {
        T.call(this, a)
    };
    _.R(Ls, T);
    var Ms = function(a) {
        T.call(this, a)
    };
    _.R(Ms, T);
    var Ns = function(a) {
        T.call(this, a)
    };
    _.R(Ns, T);
    var be = function(a) {
        T.call(this, a)
    };
    _.R(be, T);
    var ae = function(a, b) {
            return x(a, 1, b)
        },
        Ld = function(a) {
            T.call(this, a)
        };
    _.R(Ld, T);
    var Ks = [1, 2],
        Os = [Ms, 1, Qr, 2, Qr, 3, Qr],
        ol = [ll, 1, Wr, [Ls, 1, Qr, 2, Vr, Os, 3, Vr, Os, 4, Tr, 5, Tr, 6, Sr, 7, Vr, [Ns, 4, Xr, 5, Tr]], 2, Wr, [be, 1, Tr, 2, Tr, 3, Pr, 7, Pr, 8, Or, 4, Rr, 5, Rr, 6, Rr, 9, Sr, 10, Vr, [Ld, 1, Xr]]];
    var Ps = function(a) {
        T.call(this, a)
    };
    _.R(Ps, T);
    var Rs = function(a) {
        T.call(this, a, -1, Qs)
    };
    _.R(Rs, T);
    var Qs = [1];
    var Ss = function(a) {
        T.call(this, a)
    };
    _.R(Ss, T);
    var Ts = function(a) {
        T.call(this, a)
    };
    _.R(Ts, T);
    Ts.prototype.getVersion = function() {
        return Q(this, 5)
    };
    var Us = function(a) {
        T.call(this, a)
    };
    _.R(Us, T);
    var Vs = function(a) {
        T.call(this, a)
    };
    _.R(Vs, T);
    var Xs = function(a) {
        T.call(this, a, -1, Ws)
    };
    _.R(Xs, T);
    Xs.prototype.getEscapedQemQueryId = function() {
        return Dh(this, 4)
    };
    var Ws = [2];
    var Ys = function(a) {
        T.call(this, a)
    };
    _.R(Ys, T);
    var Zs = function(a) {
        T.call(this, a)
    };
    _.R(Zs, T);
    var $s = function(a) {
        T.call(this, a)
    };
    _.R($s, T);
    $s.prototype.getEscapedQemQueryId = function() {
        return Dh(this, 2)
    };
    var bt = function(a) {
        T.call(this, a, -1, at)
    };
    _.R(bt, T);
    var ct = function(a) {
        return hc(a, $s, 5)
    };
    bt.prototype.getWidth = function() {
        return ld(this, 9)
    };
    bt.prototype.getHeight = function() {
        return ld(this, 10)
    };
    var at = [3, 7, 11];
    var et = function(a) {
        T.call(this, a, -1, dt)
    };
    _.R(et, T);
    et.prototype.getHeight = function() {
        return Q(this, 6)
    };
    et.prototype.getWidth = function() {
        return Q(this, 7)
    };
    et.prototype.getEscapedQemQueryId = function() {
        return Q(this, 34)
    };
    var ft = function(a) {
        T.call(this, a)
    };
    _.R(ft, T);
    ft.prototype.getHtml = function() {
        var a = Q(this, 1);
        null == a ? a = null : a instanceof Fb || (a = Gb(a), x(this, 1, a, void 0, !0));
        return a
    };
    var dt = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 28, 38, 53, 62, 63],
        gt = [4, 41],
        ht = [39, 48];
    var yn = function(a) {
        T.call(this, a)
    };
    _.R(yn, T);
    var Wk = window;
    var Xo = function(a) {
        T.call(this, a, -1, it)
    };
    _.R(Xo, T);
    var it = [15];
    var Wo = function(a) {
        T.call(this, a)
    };
    _.R(Wo, T);
    Wo.prototype.getCorrelator = function() {
        return ld(this, 1)
    };
    Wo.prototype.setCorrelator = function(a) {
        return ac(this, 1, a, 0)
    };
    var Vo = function(a) {
        T.call(this, a)
    };
    _.R(Vo, T);
    var jt = _.Lq || Oq;
    var kt = /^[\w+/_-]+[=]{0,2}$/,
        lt = function(a, b) {
            b = (b || _.r).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && kt.test(a) ? a : "" : ""
        };
    _.vg = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.vg.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.vg.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.vg.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.yg = function(a, b) {
        this.width = a;
        this.height = b
    };
    q = _.yg.prototype;
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.isEmpty = function() {
        return !(this.width * this.height)
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var mt, nt, Bg, vk, ot, qt;
    mt = function(a) {
        return a = pe(a)
    };
    nt = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    Bg = function(a) {
        if (!_.u(Number, "isFinite").call(Number, a)) return String(a);
        a = String(a);
        var b = a.indexOf("."); - 1 === b && (b = a.length);
        var c = "-" === a[0] ? "-" : "";
        c && (a = a.substring(1));
        return c + nt("0", Math.max(0, 2 - b)) + a
    };
    vk = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ xe()).toString(36)
    };
    ot = 2147483648 * Math.random() | 0;
    _.pt = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    qt = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var tt, vt, ut, yt, At, Ic, Lc, rt;
    tt = function(a) {
        return a ? new rt(_.st(a)) : Zp || (Zp = new rt)
    };
    vt = function(a, b) {
        qa(b, function(c, d) {
            c && "object" == typeof c && c.Oa && (c = c.Ga());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ut.hasOwnProperty(d) ? a.setAttribute(ut[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    ut = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.xt = function(a) {
        a = a.document;
        a = _.wt(a) ? a.documentElement : a.body;
        return new _.yg(a.clientWidth, a.clientHeight)
    };
    yt = function(a) {
        return a.scrollingElement ? a.scrollingElement : !Oq && _.wt(a) ? a.documentElement : a.body || a.documentElement
    };
    _.zt = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    At = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!mi(f) || _.fa(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.fa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.dq(g ? da(f) : f, d)
            }
        }
    };
    _.wt = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.Bt = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.Ct = function(a) {
        var b;
        if (jt && !(_.Lq && Wq("9") && !Wq("10") && _.r.SVGElement && a instanceof _.r.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.fa(b) && 1 == b.nodeType ? b : null
    };
    _.Dt = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    Ic = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };
    _.st = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    Lc = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.zt(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    rt = function(a) {
        this.j = a || _.r.document || document
    };
    q = rt.prototype;
    q.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    q.createElement = function(a) {
        var b = this.j;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    q.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    q.appendChild = function(a, b) {
        a.appendChild(b)
    };
    q.append = function(a, b) {
        At(_.st(a), a, arguments)
    };
    q.ge = _.Bt;
    q.contains = _.Dt;
    var Et = function() {
        return ya("iPad") || ya("Android") && !ya("Mobile") || ya("Silk")
    };
    var Ml, Hi, Ft, ii;
    _.Nl = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    Ml = function(a) {
        return a ? decodeURI(a) : a
    };
    Hi = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Hi(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    Ft = /#|$/;
    ii = function(a, b) {
        var c = a.search(Ft);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    var Kc, Jc, Td, Gt, Ud, gi, Jg, nd, Ht, Fh, og, md, od, ep, Jt, Kt, Lt, Kg, Mt, Nt, Ot, Pt, Qt, Yk, Rt, St, Tt, ih, kh, jh, Nk, Ut, Wt, Xt, Yt, Zt, $t, Cd, au, bu, Ri, cu, du, Ni, gl;
    Kc = function(a) {
        try {
            return !!a && null != a.location.href && Iq(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Jc = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.r : d;
        c = (void 0 === c ? 0 : c) ? Gt(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Kc(c) || !a(c));) c = Gt(c)
    };
    Td = function() {
        var a = window;
        Jc(function(b) {
            a = b;
            return !1
        });
        return a
    };
    Gt = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Ud = function(a) {
        return Kc(a.top) ? a.top : null
    };
    gi = function(a, b) {
        var c = _.$c("SCRIPT", a);
        Va(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Jg = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    nd = function() {
        if (!w.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            w.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Ki = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    Ht = function(a) {
        var b = [];
        _.Ki(a, function(c, d) {
            b.push(d)
        });
        return b
    };
    _.It = function(a) {
        var b = [];
        _.Ki(a, function(c) {
            b.push(c)
        });
        return b
    };
    Fh = function(a, b) {
        return sa(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    og = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    md = Ig(function() {
        return _.Qe(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Jt) || 1E-4 > Math.random()
    });
    od = function(a, b) {
        try {
            if (a) return a.setItem("google_experiment_mod", b), b
        } catch (c) {}
        return null
    };
    ep = Ig(function() {
        return Jt("MSIE")
    });
    Jt = function(a) {
        return xa(wa(), a)
    };
    Kt = /^([0-9.]+)px$/;
    Lt = function() {
        return /^true$/.test("false")
    };
    Kg = function(a) {
        return (a = Kt.exec(a)) ? +a[1] : null
    };
    Mt = function(a, b) {
        b = void 0 === b ? !0 : b;
        try {
            for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return b;
                case "http:":
                    return !1
            }
        } catch (d) {}
        return !0
    };
    Nt = function(a) {
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    Ot = {
        Lf: "allow-forms",
        Mf: "allow-modals",
        Nf: "allow-orientation-lock",
        Of: "allow-pointer-lock",
        Pf: "allow-popups",
        Qf: "allow-popups-to-escape-sandbox",
        Rf: "allow-presentation",
        Sf: "allow-same-origin",
        Tf: "allow-scripts",
        Uf: "allow-top-navigation",
        Vf: "allow-top-navigation-by-user-activation"
    };
    Pt = Ig(function() {
        return _.It(Ot)
    });
    Qt = function(a) {
        var b = Pt();
        return a.length ? _.Ce(b, function(c) {
            return !(0 <= _.ba(a, c))
        }) : b
    };
    Yk = function() {
        var a = _.$c("IFRAME"),
            b = {};
        _.dq(Pt(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    Rt = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && xa(a, "[native code]")
    };
    St = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = Gt(a))) break
        }
        return null
    };
    Tt = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.$c("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {}
        return null
    };
    _.wj = Ig(function() {
        return !Et() && (ya("iPod") || ya("iPhone") || ya("Android") || ya("IEMobile")) ? 2 : Et() ? 1 : 0
    });
    ih = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.Tg = function(a, b) {
        _.Ki(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    kh = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    jh = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = Jg(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    Nk = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : Ae(a, parseFloat)
    };
    Ut = {};
    _.Vt = (Ut["http://googleads.g.doubleclick.net"] = !0, Ut["http://pagead2.googlesyndication.com"] = !0, Ut["https://googleads.g.doubleclick.net"] = !0, Ut["https://pagead2.googlesyndication.com"] = !0, Ut);
    Wt = function(a) {
        _.r.console && _.r.console.warn && _.r.console.warn(a)
    };
    Xt = [];
    Yt = function() {
        var a = Xt;
        Xt = [];
        a = _.z(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    Zt = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    $t = function() {
        return Math.floor(Math.random() * Math.pow(2, 52))
    };
    Cd = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: $t(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    au = function(a, b) {
        Mc(_.zt(_.st(a)), a, b)
    };
    bu = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (Xt.push(b), 1 == Xt.length && (w.Promise ? w.Promise.resolve().then(Yt) : window.setImmediate ? setImmediate(Yt) : setTimeout(Yt, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    Ri = function(a) {
        return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    cu = function(a, b) {
        var c = _.$c("DIV");
        c.id = a;
        c.textContent = b;
        _.Tg(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    du = function(a) {
        return new w.Promise(function(b) {
            setTimeout(function() {
                return void b(2)
            }, a)
        })
    };
    Ni = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.$c = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    gl = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, Kc(a) && (b = a);
        return b
    };
    _.eu = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.eu.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.eu.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.fu = function(a) {
        return new _.eu(a.top, a.right, a.bottom, a.left)
    };
    _.eu.prototype.contains = function(a) {
        return this && a ? a instanceof _.eu ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.eu.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.eu.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.eu.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var gu = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        hu = function(a) {
            return new _.eu(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        iu = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new gu(c, e, d - c, a - e)
            }
            return null
        };
    gu.prototype.contains = function(a) {
        return a instanceof _.vg ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    gu.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    gu.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    gu.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var zk = function(a) {
            a = void 0 === a ? _.r : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b) try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
            try {
                if (b && b.pageViewId && b.canonicalUrl) return b
            } catch (c) {}
            return null
        },
        Bk = function(a) {
            return (a = a || zk()) ? Kc(a.master) ? a.master : null : null
        },
        ku = function(a, b) {
            if (a.ampInaboxInitialized) return !0;
            var c, d = "amp-ini-load" === b.data;
            a.ampInaboxPendingMessages && !d && (c = /^amp-(\d{15,20})?/.exec(b.data)) && (a.ampInaboxPendingMessages.push(b), ju(a, c[1]));
            return !1
        },
        lu = function(a, b, c) {
            var d = !0;
            d = void 0 === d ? !1 : d;
            var e = a.ampInaboxIframes = a.ampInaboxIframes || [],
                f = function() {},
                g = function() {};
            b && (e.push(b), g = function() {
                a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
                ca(e, b);
                f()
            });
            if (a.ampInaboxInitialized) return g;
            a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
            c && /^\d{15,20}$/.test(c) && ju(a, c);
            var h = function(k) {
                ku(a, k) && f()
            };
            d || e.google_amp_listener_added || (e.google_amp_listener_added = !0, _.Za(a, "message", h), f = function() {
                _.ad(a, "message", h)
            });
            return g
        },
        ju = function(a, b) {
            a.ampInaboxInitialized || b && !/^\d{15,20}$/.test(b) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || gi(a.document, b ? ib(bq("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                ampVersion: b
            }) : Ja(he(bq("https://cdn.ampproject.org/amp4ads-host-v0.js"))))
        };
    var ou, Me, xg, qu, ru, ug;
    _.nu = function(a, b, c) {
        if ("string" === typeof b)(b = _.mu(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.mu(c, d);
                f && (c.style[f] = e)
            }
    };
    ou = {};
    _.mu = function(a, b) {
        var c = ou[b];
        if (!c) {
            var d = _.pt(b);
            c = d;
            void 0 === a.style[d] && (d = (Oq ? "Webkit" : Nq ? "Moz" : _.Lq ? "ms" : null) + qt(d), void 0 !== a.style[d] && (c = d));
            ou[b] = c
        }
        return c
    };
    _.pu = function(a, b) {
        var c = _.st(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    Me = function(a, b) {
        return _.pu(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    xg = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };
    qu = function(a) {
        if (_.Lq && !(8 <= Number(Zq))) return a.offsetParent;
        var b = _.st(a),
            c = Me(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = Me(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    ru = function(a) {
        var b = _.st(a),
            c = new _.vg(0, 0);
        var d = b ? _.st(b) : document;
        d = !_.Lq || 9 <= Number(Zq) || _.wt(tt(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = xg(a);
        d = tt(b).j;
        b = yt(d);
        d = d.parentWindow || d.defaultView;
        b = _.Lq && Wq("10") && d.pageYOffset != b.scrollTop ? new _.vg(b.scrollLeft, b.scrollTop) : new _.vg(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    ug = function(a, b) {
        var c = new _.vg(0, 0),
            d = _.zt(_.st(a));
        if (!Iq(d, "parent")) return c;
        do {
            var e = d == b ? ru(a) : _.su(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.su = function(a) {
        a = xg(a);
        return new _.vg(a.left, a.top)
    };
    _.tu = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Ne = function(a, b) {
        if ("none" != Me(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Oe = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Oq && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = xg(a), new _.yg(a.right - a.left, a.bottom - a.top)) : new _.yg(b, c)
    };
    var eh = function(a) {
        a = Bk(zk(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var uu = Rc(function(a) {
        var b = [],
            c = {};
        a = _.z(a);
        for (var d = a.next(); !d.done; c = {
                Tb: c.Tb
            }, d = a.next()) c.Tb = d.value, Rc(function(e) {
            return function() {
                var f = {};
                b.push([(f[e.Tb.Yd] = e.Tb.message.toJSON(), f)])
            }
        }(c))();
        return JSON.stringify([b])
    });
    var vu = function(a, b) {
        if (w.globalThis.fetch) w.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var lp = function(a) {
        var b = void 0 === b ? vu : b;
        this.H = void 0 === a ? 1E3 : a;
        this.A = b;
        this.m = [];
        this.j = null
    };
    lp.prototype.Xd = function() {
        var a = Ia.apply(0, arguments),
            b = this;
        Rc(function() {
            b.m.push.apply(b.m, _.Sc(a));
            var c = Rc(function() {
                var d = uu(b.m);
                b.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                b.m = [];
                b.j = null
            });
            100 <= b.m.length ? (null !== b.j && clearTimeout(b.j), b.j = setTimeout(c, 0)) : null === b.j && (b.j = setTimeout(c, b.H))
        })()
    };
    var U = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        wu = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? 0 : b
        },
        xu = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? "" : b
        },
        yu = function(a, b) {
            b = void 0 === b ? [] : b;
            this.j = a;
            this.defaultValue = b
        };
    var Aj, zu, Au, Bu, fh, Cu, Oj, Du, fo, Eu, Fu, Gu, Hu, Iu, Ju, ik, Ku, Lu, Mu, Nu, Ou, Pu, Qu, Ru, Su, Tu, vn, Uu, Vu, Wu, Xu, Yu, Zu, $u, dl, av, bv, cv, Bl, dv, Um, hj, rj, ev, gj, fv, gv, Tf, hv, iv, jv, kv, lv, mv, nv, ov, ql, pv, Zl, Wl, qv, Gi, Ci, rv, en, jn, gn, sv, tv, uv, vv, dm, wv, xv, yv, zv, ip, kp, Av, Bv, Cv, Dv, Ev, Fv, $e, Gv, Hv, Vd, Iv, jl, kl, Fd, Jv, Kv, nl, ml, Bd, Zo, $o, Ll, kj, Bm, Gk, ap, Yo, Mv, Nv, Ov, Pv, lm, km, Rv, mm, Sv, Tv, Uv, Vv, Wv;
    Aj = new wu(1158);
    zu = new U(1122, !0);
    Au = new xu(3);
    Bu = new yu(481);
    fh = new wu(7, .1);
    Cu = new U(212);
    Oj = new wu(387165532);
    Du = new U(411850510);
    fo = new wu(444965520, .01);
    Eu = new U(448338835, !0);
    Fu = new U(359351145);
    Gu = new U(427553875);
    Hu = new wu(448338836, .01);
    Iu = new wu(427198696);
    Ju = new wu(438663674);
    ik = new U(447038262);
    Ku = new U(438663673, !0);
    Lu = new U(23);
    Mu = new U(369430);
    Nu = new U(432254233);
    Ou = new wu(408380992, .01);
    Pu = new wu(377289019, 1E4);
    Qu = new wu(488);
    Ru = new wu(529, 20);
    Su = new xu(10);
    Tu = new wu(428094087);
    vn = new wu(447000223, .01);
    Uu = new wu(430268223);
    Vu = new U(427841102);
    Wu = new wu(434620574);
    Xu = new U(360245597, !0);
    Yu = new U(45360254);
    Zu = new wu(494, 5E3);
    $u = new wu(517, .01);
    dl = new U(384700361, !0);
    av = new U(439896109);
    bv = new U(371390390);
    cv = new U(220);
    Bl = new U(200);
    dv = new U(111);
    Um = new U(323);
    hj = new wu(388529191);
    rj = new wu(492, .01);
    ev = new U(438898982, !0);
    gj = new U(423059401);
    _.sk = new U(430565960);
    fv = new wu(363650251);
    gv = new U(83);
    Tf = new U(85);
    hv = new U(437061931);
    iv = new wu(398776877, 6E4);
    jv = new U(437292966);
    kv = new U(444964204);
    lv = new wu(374201269, 6E4);
    mv = new wu(371364213, 6E4);
    nv = new wu(376149757, .0025);
    ov = new U(444932010);
    ql = new U(422917270);
    pv = new U(377936516, !0);
    Zl = new U(421896358);
    Wl = new U(423820325);
    qv = new wu(24);
    Gi = new yu(1);
    Ci = new xu(2, "1-0-38");
    rv = new U(116);
    en = new U(427203966);
    jn = new U(442109935);
    gn = new U(441772725);
    sv = new U(441529989);
    tv = new U(428624799);
    uv = new U(437308144);
    vv = new yu(489, ["td"]);
    dm = new U(392065905);
    wv = new wu(360245595, 500);
    xv = new wu(432023148);
    yv = new U(451209599);
    zv = new U(424117738);
    ip = new U(435380794);
    kp = new wu(397316938, 1E3);
    Av = new U(444587044);
    Bv = new U(440148284);
    Cv = new U(440148283);
    Dv = new U(444587045);
    Ev = new U(440148282);
    Fv = new U(399705355);
    $e = new wu(425668704, 15360);
    Gv = new U(501);
    Hv = new xu(363931022);
    Vd = new U(1930);
    Iv = new U(453);
    jl = new U(454);
    kl = new U(426169223);
    Fd = new wu(360261971);
    Jv = new wu(1921, 72);
    Kv = new wu(1920, 24);
    nl = new wu(426169222, 1E3);
    ml = new wu(1917, 300);
    Bd = new wu(1916, .001);
    Zo = new U(77);
    $o = new U(78);
    Ll = new U(1961);
    kj = new U(309);
    Bm = new U(1970);
    Gk = new U(1953, !0);
    ap = new U(80);
    Yo = new U(76);
    _.Lv = new U(1947, !0);
    Mv = new U(84);
    Nv = new U(1958);
    Ov = new U(188);
    Pv = new U(1971);
    _.Qv = new wu(1972);
    lm = new U(1928);
    km = new U(1941);
    Rv = new U(370946349);
    mm = new U(392736476);
    Sv = new wu(406149835);
    Tv = new U(397841828);
    Uv = new U(432946749);
    Vv = new U(432938498);
    Wv = new wu(432059203);
    var Xv = function(a, b, c, d, e, f) {
            try {
                var g = a.j,
                    h = _.$c("SCRIPT", g);
                h.async = !0;
                Va(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", function() {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", function() {
                    0 < c ? Xv(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (k) {
                f()
            }
        },
        Yv = function(a, b, c, d) {
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            Xv(tt(a), b, 0, !1, c, d)
        };
    ra({
        mg: 0,
        lg: 1,
        ig: 2,
        dg: 3,
        jg: 4,
        eg: 5,
        kg: 6,
        gg: 7,
        hg: 8,
        cg: 9,
        fg: 10
    }).map(function(a) {
        return Number(a)
    });
    ra({
        og: 0,
        pg: 1,
        ng: 2
    }).map(function(a) {
        return Number(a)
    });
    var Zv = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.$c("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    _.$v = function() {
        this.m = this.m;
        this.oa = this.oa
    };
    _.$v.prototype.m = !1;
    _.$v.prototype.za = function() {
        this.m || (this.m = !0, this.H())
    };
    _.Cm = function(a, b) {
        _.Vm(a, _.Xp(Vc, b))
    };
    _.Vm = function(a, b) {
        a.m ? b() : (a.oa || (a.oa = []), a.oa.push(b))
    };
    _.$v.prototype.H = function() {
        if (this.oa)
            for (; this.oa.length;) this.oa.shift()()
    };
    var aw = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        bw = function(a, b, c) {
            b = void 0 === b ? 500 : b;
            c = void 0 === c ? !1 : c;
            _.$v.call(this);
            this.j = a;
            this.A = null;
            this.o = {};
            this.L = 0;
            this.I = b;
            this.l = c;
            this.C = null
        };
    _.R(bw, _.$v);
    bw.prototype.H = function() {
        this.o = {};
        this.C && (_.ad(this.j, "message", this.C), delete this.C);
        delete this.o;
        delete this.j;
        delete this.A;
        _.$v.prototype.H.call(this)
    };
    var dw = function(a) {
        return "function" === typeof a.j.__tcfapi || null != cw(a)
    };
    bw.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.l
            },
            d = _.fn(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.I && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.I));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = aw(c), c.internalBlockOnErrors = b.l, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            ew(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    bw.prototype.removeEventListener = function(a) {
        a && a.listenerId && ew(this, "removeEventListener", null, a.listenerId)
    };
    var gw = function(a, b) {
            var c = {
                    internalErrorState: 0,
                    internalBlockOnErrors: a.l
                },
                d = _.fn(function() {
                    return b(c)
                }),
                e = 0; - 1 !== a.I && (e = setTimeout(function() {
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, a.I));
            ew(a, "addEventListener", function(f, g) {
                var h = e;
                h && clearTimeout(h);
                g && (c = f);
                c.internalErrorState = aw(c);
                c.internalBlockOnErrors = a.l;
                0 != c.internalErrorState && (c.tcString = "tcunavailable");
                if (a.l) fw(c) && (ew(a, "removeEventListener", null, c.listenerId), d());
                else if (0 != c.internalErrorState || fw(c)) ew(a, "removeEventListener", null, c.listenerId), d()
            })
        },
        hw = function(a, b) {
            var c = void 0 === c ? "755" : c;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var d = a.publisher.restrictions[b];
                    if (void 0 !== d) {
                        d = d[void 0 === c ? "755" : c];
                        break a
                    }
                }
                d = void 0
            }
            if (0 === d) return !1;
            a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
            return b
        },
        ew = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
            else if (cw(a)) {
                iw(a);
                var e = ++a.L;
                a.o[e] = c;
                a.A && (c = {}, a.A.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        cw = function(a) {
            if (a.A) return a.A;
            a.A = St(a.j, "__tcfapiLocator");
            return a.A
        },
        iw = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.o[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.Za(a.j, "message", a.C))
        },
        fw = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = aw(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        jw = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return hw(a, c)
            })
        };
    var kw = function(a, b, c) {
            this.j = a;
            this.A = b;
            this.m = void 0 === c ? function() {} : c
        },
        lw = function(a, b, c) {
            return new kw(a, b, c)
        };
    kw.prototype.start = function() {
        if (this.j === this.j.top) try {
            Zv(this.j), mw(this)
        } catch (a) {}
    };
    var mw = function(a) {
        var b = ib(bq("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.A,
            ers: 3
        });
        Yv(a.j, b, function() {
            a.m(!0)
        }, function() {
            a.m(!1)
        })
    };
    var nw = w.Promise;
    var ow = function(a) {
        this.m = a
    };
    ow.prototype.send = function(a, b, c) {
        this.m.then(function(d) {
            d.send(a, b, c)
        })
    };
    ow.prototype.j = function(a, b) {
        return this.m.then(function(c) {
            return c.j(a, b)
        })
    };
    var pw = function(a) {
        this.data = a
    };
    var qw = function(a) {
        this.m = a
    };
    qw.prototype.send = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        rw(d.port1, b);
        this.m.postMessage(a, [d.port2].concat(c))
    };
    qw.prototype.j = function(a, b) {
        var c = this;
        return new nw(function(d) {
            c.send(a, d, b)
        })
    };
    var sw = function(a, b) {
            rw(a, b);
            return new qw(a)
        },
        rw = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new pw(c.data, sw(c.ports[0])))
            })
        };
    var xh = function(a) {
            var b = a.jc,
                c = void 0 === a.Fa ? "ZNWN1d" : a.Fa,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.wc ? void 0 : a.wc;
            return tw({
                destination: a.destination,
                Ee: function() {
                    return b.contentWindow
                },
                Ye: uw(a.origin),
                Fa: c,
                onMessage: d,
                wc: e
            })
        },
        tw = function(a) {
            var b = a.destination,
                c = a.Ee,
                d = a.Ye,
                e = void 0 === a.ed ? void 0 : a.ed,
                f = a.Fa,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.wc ? void 0 : a.wc,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new ow(new nw(function(l, m) {
                var n = function(p) {
                    if (p.source === c())
                        if (!0 !== k[p.origin]) {
                            b.removeEventListener("message", n, !1);
                            var t = d.join(", ");
                            m(Error("Origin mismatch while establishing channel. Expected " + (1 === d.length ? t : "one of [" + t + "]") + ", but received " + p.origin + "."))
                        } else(p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error("Token mismatch while establishing channel. Expected " + e + ", but received " + p.data.t + ".")) : (l(sw(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        uw = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var Ye = void 0;
    var Af = function(a) {
        return "string" === typeof a
    };
    var vw = new Cq,
        ww = new w.Map(vw.j.H);
    ww.set("style", {
        ta: 4
    });
    vw.j = new yq(vw.j.j, vw.j.A, vw.j.m, ww);
    var xw = new w.Map(vw.j.H);
    xw.set("class", {
        ta: 1
    });
    vw.j = new yq(vw.j.j, vw.j.A, vw.j.m, xw);
    var yw = new w.Map(vw.j.H);
    yw.set("id", {
        ta: 1
    });
    vw.j = new yq(vw.j.j, vw.j.A, vw.j.m, yw);
    vw.build();
    var zw = function(a) {
        T.call(this, a)
    };
    _.R(zw, T);
    var Aw = function(a) {
        T.call(this, a)
    };
    _.R(Aw, T);
    var Rf = function(a) {
        T.call(this, a)
    };
    _.R(Rf, T);
    var jf = function(a) {
        T.call(this, a)
    };
    _.R(jf, T);
    var ff = function(a) {
        T.call(this, a)
    };
    _.R(ff, T);
    var Bw = function(a) {
        T.call(this, a)
    };
    _.R(Bw, T);
    var df = function(a) {
        T.call(this, a, -1, Cw)
    };
    _.R(df, T);
    df.prototype.getTagSessionCorrelator = function() {
        return ld(this, 2)
    };
    var Cw = [4],
        lf = [6, 7, 8, 9, 11];
    var ag = function(a) {
        T.call(this, a, -1, Dw)
    };
    _.R(ag, T);
    var Dw = [3];
    var $f = function(a) {
        T.call(this, a, -1, Ew)
    };
    _.R($f, T);
    var Ew = [4];
    var Zf = function(a) {
        T.call(this, a, -1, Fw)
    };
    _.R(Zf, T);
    Zf.prototype.getTagSessionCorrelator = function() {
        return ld(this, 1)
    };
    var Fw = [2];
    var Yf = function(a) {
        T.call(this, a)
    };
    _.R(Yf, T);
    var dg = [4];
    _.C = function(a) {
        var b = "gb";
        if (a.gb && a.hasOwnProperty(b)) return a.gb;
        b = new a;
        return a.gb = b
    };
    var Gw, Bi, Fi;
    Gw = function() {
        var a = {};
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.A = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.H = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.C = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    };
    _.E = function(a) {
        return _.C(Gw).m(a.j, a.defaultValue)
    };
    _.Ad = function(a) {
        return _.C(Gw).A(a.j, a.defaultValue)
    };
    Bi = function(a) {
        return _.C(Gw).H(a.j, a.defaultValue)
    };
    Fi = function(a) {
        return _.C(Gw).C(a.j, a.defaultValue)
    };
    var Ek = navigator,
        Fk = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Ak = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Fk(a.toLowerCase())
        },
        Hk = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        Ik = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        Jk = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var sg = function(a) {
            return !!a && a.top == a
        },
        Qk = function(a, b, c) {
            b = b || a.google_ad_width;
            c = c || a.google_ad_height;
            if (sg(a)) return !1;
            var d = a.document,
                e = d.documentElement;
            if (b && c) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
                if (g > 2 * c || f > 2 * b) return !1
            }
            return !0
        };
    var Hw = function(a) {
            a = void 0 === a ? window : a;
            return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
        },
        Iw = function(a, b) {
            b = void 0 === b ? window : b;
            var c = Hw(b);
            if (!c) return null;
            var d = null;
            try {
                "afma-gpt-sdk-a" == c ? d = b._gmptnl.pm("GAM=", a) || "5" : (d = b.__gmptnl_n || "5", b.webkit.messageHandlers._gmptnl.postMessage("GAM="))
            } catch (e) {
                return "3"
            }
            return "string" === typeof d ? d : "3"
        };
    var Zg = function() {
        this.j = [];
        this.m = -1
    };
    Zg.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.u(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b, this.m = -1)
    };
    Zg.prototype.get = function(a) {
        return !!this.j[a]
    };
    var ah = function(a) {
        -1 === a.m && (a.m = eq(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.m
    };
    var dd = function(a) {
        T.call(this, a, -1, Jw)
    };
    _.R(dd, T);
    var ed = function(a, b) {
            ri(a, 1, jd, b)
        },
        jd = function(a) {
            T.call(this, a)
        };
    _.R(jd, T);
    var gd = function(a) {
            var b = new jd;
            return ac(b, 1, a, 0)
        },
        fd = function(a, b) {
            return ac(a, 2, b, 0)
        },
        Jw = [1];
    var qd, Ln;
    _.Kw = function(a, b, c, d) {
        bd(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d)
    };
    qd = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.Ki(a, function(e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        Ln(d, c)
    };
    Ln = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : _.Kw(c, a, void 0, b)
    };
    var ud = function(a) {
            this.j = a || {
                cookie: ""
            }
        },
        Nw = function() {
            var a = Lw;
            if (!_.r.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                Uc: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            Mw(a, "TESTCOOKIESENABLED");
            return !0
        };
    ud.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.fh;
            d = c.lf || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Uc
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    ud.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = lq(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var Mw = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Uc: 0,
            path: c,
            domain: d
        })
    };
    ud.prototype.isEmpty = function() {
        return !this.j.cookie
    };
    ud.prototype.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = lq(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) Mw(this, b[a])
    };
    var Lw = new ud("undefined" == typeof document ? null : document);
    var Ow = null,
        Pw = function() {
            if (null === Ow) {
                Ow = "";
                try {
                    var a = "";
                    try {
                        a = _.r.top.location.hash
                    } catch (c) {
                        a = _.r.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        Ow = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return Ow
        };
    var Qw, hf;
    _.wd = function(a) {
        a = void 0 === a ? _.r : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : xe()
    };
    _.Xl = function(a) {
        a = void 0 === a ? _.r : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    Qw = function(a, b) {
        b = void 0 === b ? _.r : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    hf = function(a) {
        a = void 0 === a ? _.r : a;
        var b = Math.min(Qw("domLoading", a) || Infinity, Qw("domInteractive", a) || Infinity);
        return Infinity == b ? Math.max(Qw("responseEnd", a), Qw("navigationStart", a)) : b
    };
    var Rw = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e;
        this.taskId = void 0
    };
    var Vf = _.r.performance,
        Sw = !!(Vf && Vf.mark && Vf.measure && Vf.clearMarks),
        Wf = Ig(function() {
            var a;
            if (a = Sw) a = Pw(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        }),
        Tw = function(a, b) {
            this.m = [];
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.m = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.j = Wf() || (null != c ? c : Math.random() < a)
        },
        Uw = function(a, b, c, d, e, f) {
            a.j && (b = new Rw(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.m.length || a.m.push(b))
        };
    Tw.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new Rw(a, b, _.Xl() || _.wd());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Vf && Wf() && Vf.mark(b);
        return a
    };
    Tw.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.Xl() || _.wd()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Vf && Wf() && Vf.mark(b);
            !this.j || 2048 < this.m.length || this.m.push(a)
        }
    };
    var Vw = function(a, b, c) {
        var d = _.Xl();
        d && Uw(a, b, 9, d, 0, c)
    };
    var aj = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, aj.prototype)
    };
    _.R(aj, Error);
    aj.prototype.name = "PublisherInputError";
    var Ww = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, Ww.prototype)
    };
    _.R(Ww, Error);
    Ww.prototype.name = "ServerError";
    var Xw = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, Xw.prototype)
    };
    _.R(Xw, Error);
    Xw.prototype.name = "NetworkError";
    var Yw = function(a) {
        a = void 0 === a ? !1 : a;
        _.$v.call(this);
        this.I = a;
        this.j = [];
        this.A = [];
        this.l = [];
        this.C = [];
        this.o = []
    };
    _.R(Yw, _.$v);
    var Zw = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        a.I ? c ? a.C.push(b.promise) : a.l.push(b.promise) : a.A.push({
            hd: c,
            rd: b
        })
    };
    Yw.prototype.H = function() {
        this.j.length = 0;
        this.o.length = 0;
        this.A.length = 0;
        this.l.length = 0;
        this.C.length = 0;
        _.$v.prototype.H.call(this)
    };
    _.Fe = function() {
        var a = this;
        this.promise = new w.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var $w = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, $w.prototype);
        this.name = "InputError"
    };
    _.R($w, Error);
    var ax = function() {
            var a = this;
            this.L = this.A = null;
            this.l = -1;
            this.H = new _.Fe;
            this.m = !1;
            this.H.promise.then(function() {
                -1 !== a.l && (a.L = _.wd() - a.l)
            }, function() {})
        },
        bx = function() {
            ax.apply(this, arguments)
        };
    _.R(bx, ax);
    qp.Object.defineProperties(bx.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.H.promise
            }
        },
        C: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        },
        o: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.L
            }
        }
    });
    var io = function() {
        bx.apply(this, arguments)
    };
    _.R(io, bx);
    io.prototype.j = function(a) {
        this.m || (this.m = !0, this.A = a, this.H.resolve(a))
    };
    var dx = function(a, b) {
            null == b ? cx(a) : a.j(b)
        },
        cx = function(a) {
            a.m || (a.m = !0, a.A = null, a.H.resolve(null))
        },
        ex = function(a, b) {
            a.m || (a.m = !0, a.A = null, a.I = b, a.H.reject(b))
        },
        fx = function(a) {
            ax.call(this);
            this.j = a
        };
    _.R(fx, ax);
    qp.Object.defineProperties(fx.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.I
            }
        }
    });
    var gx = function(a) {
        fx.call(this, a);
        this.j = a
    };
    _.R(gx, fx);
    qp.Object.defineProperties(gx.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.A
            }
        }
    });
    var hx = function() {
        fx.apply(this, arguments)
    };
    _.R(hx, fx);
    qp.Object.defineProperties(hx.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.A
            }
        }
    });
    var ix = function() {
        fx.apply(this, arguments)
    };
    _.R(ix, fx);
    qp.Object.defineProperties(ix.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.A
            }
        }
    });
    var jx = function() {
        bx.apply(this, arguments)
    };
    _.R(jx, bx);
    jx.prototype.notify = function() {
        this.m || (this.m = !0, this.A = null, this.H.resolve(null))
    };
    var kx = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? !1 : c;
        _.$v.call(this);
        this.id = a;
        this.aa = b;
        this.V = c;
        this.ea = !1;
        this.I = -1;
        this.C = new Yw(c);
        _.Cm(this, this.C)
    };
    _.R(kx, _.$v);
    kx.prototype.start = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l;
        return _.ab(function(m) {
            switch (m.j) {
                case 1:
                    if (a.ea) return m.return();
                    a.ea = !0;
                    m.A = 2;
                    if (a.V) return c = a, bb(m, xd(a.C.l, a.C.C, a.aa), 7);
                    b = a;
                    return bb(m, yd(a.C.A, a.aa), 6);
                case 6:
                    b.I = m.m;
                    m.j = 5;
                    break;
                case 7:
                    c.I = m.m;
                case 5:
                    if (a.m) {
                        m.j = 8;
                        break
                    }
                    for (var n = 0, p = _.z(a.C.o), t = p.next(); !t.done; t = p.next()) {
                        if (null === t.value.j.A) throw Error("missing input: " + a.id + "/" + n);
                        ++n
                    }
                    if (a.V)
                        for (d = _.wd(), e = _.z(a.C.j), f = e.next(); !f.done; f = e.next()) g = f.value, g.l = d;
                    else
                        for (h = _.z(a.C.j), f = h.next(); !f.done; f = h.next()) k = f.value, k.l = _.wd();
                    return bb(m, a.j(), 8);
                case 8:
                    db(m, 0);
                    break;
                case 2:
                    l = eb(m);
                    if (a.m) return m.return();
                    l instanceof $w ? a.L(l) : l instanceof Error && (a.P(l), a.A(l));
                    m.j = 0
            }
        })
    };
    var V = function(a) {
            var b = new io;
            a.C.j.push(b);
            return b
        },
        lx = function(a) {
            var b = new jx;
            a.C.j.push(b);
            return b
        },
        X = function(a, b) {
            Zw(a.C, b);
            b = new hx(b);
            a.C.o.push(b);
            return b
        },
        Y = function(a, b) {
            Zw(a.C, b);
            return new gx(b)
        },
        mx = function(a, b) {
            Zw(a.C, b, !0);
            return new gx(b)
        },
        nx = function(a, b) {
            Zw(a.C, b)
        };
    kx.prototype.L = function() {};
    kx.prototype.A = function(a) {
        if (this.C.j.length) {
            a = new $w(a.message);
            for (var b = _.z(this.C.j), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.C) {
                    var d = a;
                    c.m = !0;
                    c.I = d;
                    c.H.reject(d)
                }
        }
    };
    var ox = function(a, b) {
        kx.call(this, a);
        this.id = a;
        this.M = b
    };
    _.R(ox, kx);
    ox.prototype.P = function(a) {
        this.M(this.id, a)
    };
    var px;
    px = {
        tg: 0,
        fe: 3,
        he: 4,
        Dg: 5
    };
    var qx = px.fe,
        rx = px.he;
    var sx = Lt();
    var tx = function(a) {
            this.methodName = a
        },
        ux = new tx(1),
        vx = new tx(16),
        wx = new tx(15),
        xx = new tx(2),
        yx = new tx(3),
        zx = new tx(5),
        Ax = new tx(6),
        Bx = new tx(7),
        Cx = new tx(8),
        Dx = new tx(14),
        Ex = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        };
    var Dd = function() {
            this.m = function() {};
            this.H = function() {};
            this.A = function() {
                return []
            };
            this.j = function() {
                return []
            }
        },
        Fx = function(a, b, c) {
            a.m = Ex(ux, b, function() {});
            a.A = function(d) {
                return Ex(xx, b, function() {
                    return []
                })(d, c)
            };
            a.j = function() {
                return Ex(yx, b, function() {
                    return []
                })(c)
            };
            a.H = function(d) {
                Ex(vx, b, function() {})(d, c)
            }
        },
        Gx = function(a) {
            _.C(Dd).m(a)
        },
        gp = function(a) {
            _.C(Dd).H(a)
        },
        hp = function(a) {
            return _.C(Dd).A(a)
        };
    var Hx = function() {};
    Hx.j = function() {
        throw Error("Must be overridden");
    };
    var zd = function() {
        this.j = 0
    };
    _.R(zd, Hx);
    zd.gb = void 0;
    zd.j = function() {
        return zd.gb ? zd.gb : zd.gb = new zd
    };
    var Ix = function() {
            this.cache = {}
        },
        Hd = function() {
            Jx || (Kx = _.Ad(Kv), Lx = _.Ad(Jv), Jx = new Ix);
            return Jx
        },
        $d = function(a) {
            var b = Q(a, 3);
            if (!b) return 3;
            if (void 0 === Q(a, 2)) return 4;
            a = Date.now();
            return a > b + 36E5 * Lx ? 2 : a > b + 36E5 * Kx ? 1 : 0
        };
    Ix.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            mb: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            Ed(6, a, null == (d = g) ? void 0 : d.message);
            return {
                mb: null,
                success: !1
            }
        }
        if (!c) return {
            mb: null,
            success: !0
        };
        try {
            var e = cd(be, c);
            this.cache[a] = e;
            return {
                mb: e,
                success: !0
            }
        } catch (g) {
            var f;
            Ed(5, a, null == (f = g) ? void 0 : f.message);
            return {
                mb: null,
                success: !1
            }
        }
    };
    Ix.prototype.set = function(a, b) {
        var c = Q(a, 1);
        try {
            b.setItem("_GESPSK-" + c, a.X())
        } catch (e) {
            var d;
            Ed(7, c, null == (d = e) ? void 0 : d.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var Jx = null,
        Kx = 24,
        Lx = 72;
    var Jd = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var Nd = function(a, b, c, d) {
        ox.call(this, 655, d);
        this.Xa = a;
        this.G = b;
        this.J = c;
        this.o = V(this);
        this.D = V(this);
        this.l = _.Ad(Fd)
    };
    _.R(Nd, ox);
    Nd.prototype.j = function() {
        var a = Hd().get(this.Xa, this.J).mb,
            b = Date.now();
        if (a)
            if (this.l && (Pi(a, 8) || (Ed(33, this.Xa), x(a, 8, this.l)), Pi(a, 7) || (Ed(34, this.Xa), x(a, 7, Math.round(Date.now() / 1E3 / 60)))), Pi(a, 3) || Ed(35, this.Xa), this.l) {
                var c = Gd(a, 8),
                    d, e = null != (d = Q(a, 7)) ? d : b;
                c < this.l && x(a, 8, Math.min(c + Number((this.l * (b / 1E3 / 60 - e) / 60).toFixed(3)), this.l));
                1 > Gd(a, 8) ? (b = {}, Ed(22, this.Xa, null, (b.t = String(e), b.cr = String(c), b.cs = String($d(a)), b)), Id(a, 104, this.J), cx(this.o), cx(this.D)) : (this.o.j(this.G), this.D.j(a))
            } else this.o.j(this.G), this.D.j(a);
        else this.o.j(this.G), a = this.D, c = a.j, e = ae(new be, this.Xa), d = new Ld, d = x(d, 1, 100), e = Ec(e, 10, d), e = x(e, 8, this.l), b = x(e, 3, b), c.call(a, b)
    };
    var Od = function(a, b, c, d) {
        ox.call(this, 658, d);
        this.J = c;
        this.l = V(this);
        this.o = V(this);
        this.D = V(this);
        this.G = Y(this, a);
        this.O = Y(this, b)
    };
    _.R(Od, ox);
    Od.prototype.j = function() {
        var a = this;
        if (this.G.value) {
            var b = function(g) {
                    a.l.j({
                        id: Q(g, 1),
                        collectorGeneratedData: Q(g, 2)
                    })
                },
                c = this.G.value,
                d = this.O.value,
                e = Q(d, 1),
                f = $d(d);
            switch (f) {
                case 0:
                    Ed(24, e);
                    break;
                case 1:
                    Ed(25, e);
                    break;
                case 2:
                    Ed(26, e);
                    break;
                case 3:
                    Ed(9, e);
                    break;
                case 4:
                    Ed(23, e)
            }
            switch (f) {
                case 0:
                    b(d);
                    Mx(this);
                    break;
                case 1:
                    b(d);
                    this.o.j(c);
                    this.D.j(d);
                    break;
                case 3:
                case 2:
                case 4:
                    x(d, 2, null), Kd(e, d, c, this.J).then(b), Mx(this)
            }
        } else cx(this.l), Mx(this)
    };
    var Mx = function(a) {
        cx(a.o);
        cx(a.D)
    };
    var Pd = function(a, b, c, d) {
        ox.call(this, 662, d);
        this.D = c;
        this.l = Y(this, a);
        this.o = Y(this, b)
    };
    _.R(Pd, ox);
    Pd.prototype.j = function() {
        var a = this;
        this.o.value && this.l.value && Md().then(function() {
            var b = a.o.value;
            Kd(Q(b, 1), b, a.l.value, a.D)
        })
    };
    var Qd = function() {
        _.$v.apply(this, arguments);
        this.j = []
    };
    _.R(Qd, _.$v);
    var D = function(a, b) {
            _.Cm(a, b);
            a.j.push(b)
        },
        Rd = function(a) {
            if (a.j.length) {
                a = _.z(a.j);
                for (var b = a.next(); !b.done; b = a.next()) b.value.start()
            }
        };
    Qd.prototype.H = function() {
        _.$v.prototype.H.call(this);
        this.j.length = 0
    };
    var Xd = function(a, b) {
        this.j = b;
        this.H = [];
        this.A = [];
        this.m = [];
        a = _.z(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    Xd.prototype.push = function(a) {
        var b = a.id;
        a = a.collectorFunction;
        if ("string" !== typeof b) Ed(37, "invalid-id"), Id(ae(new be, b), 102, this.j);
        else if ("function" !== typeof a) Ed(14, b), Id(ae(new be, b), 105, this.j);
        else {
            b = Sd(b, a, this.j, this.C);
            this.H.push(b);
            a = _.z(this.A);
            for (var c = a.next(); !c.done; c = a.next()) b.then(c.value)
        }
    };
    Xd.prototype.addOnSignalResolveCallback = function(a) {
        this.A.push(a);
        for (var b = _.z(this.H), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    Xd.prototype.addErrorHandler = function(a) {
        this.m.push(a)
    };
    Xd.prototype.C = function(a, b) {
        for (var c = _.z(this.m), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };
    var Wd = function(a) {
        this.push = function(b) {
            a.push(b)
        };
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        };
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        }
    };
    var Ox, Px;
    _.Nx = function(a) {
        var b = de(a);
        return b ? _.Ce(Ae(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    };
    Ox = function(a, b) {
        return da(a.document.querySelectorAll(b))
    };
    Px = function(a) {
        var b = [];
        a = _.z(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };
    var Qx = 0,
        Rx = Ja(he(bq("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Sx = function() {
            this.j = function() {}
        },
        Tx = function() {
            var a = _.C(fp).I;
            _.C(Sx).j(a)
        };
    var Vx = function() {
            var a = void 0,
                b = 2;
            if (void 0 === a) {
                var c = void 0 === c ? _.r : c;
                a = c.ggeac || (c.ggeac = {})
            }
            b = void 0 === b ? 0 : b;
            c = a;
            var d = b;
            d = void 0 === d ? 0 : d;
            Fx(_.C(Dd), c, d);
            Ux(a, b);
            b = a;
            _.C(Sx).j = Ex(Dx, b);
            _.C(Gw).j()
        },
        Ux = function(a, b) {
            var c = _.C(Gw);
            c.m = function(d, e) {
                return Ex(zx, a, function() {
                    return !1
                })(d, e, b)
            };
            c.A = function(d, e) {
                return Ex(Ax, a, function() {
                    return 0
                })(d, e, b)
            };
            c.H = function(d, e) {
                return Ex(Bx, a, function() {
                    return ""
                })(d, e, b)
            };
            c.C = function(d, e) {
                return Ex(Cx, a, function() {
                    return []
                })(d, e, b)
            };
            c.j = function() {
                Ex(wx, a)(b)
            }
        };
    var kg = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.yg(b.innerWidth, b.innerHeight)).round() : _.xt(b || window).round()
            } catch (d) {
                return new _.yg(-12245933, -12245933)
            }
        },
        Wx = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        xl = function(a, b) {
            b = void 0 === b ? _.r : b;
            a = a.scrollingElement || Wx(a);
            return new _.vg(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        Lg = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var Xx = function(a) {
        T.call(this, a)
    };
    _.R(Xx, T);
    var rd = function(a) {
        return I(a, 5)
    };
    var Yx = function(a) {
            this.j = a;
            this.m = 0
        },
        el = function(a, b) {
            if (0 === a.m) {
                if (cl(a, "__gads", b)) b = !0;
                else {
                    var c = a.j;
                    rd(b) && td(c) && (new ud(c.document)).set("GoogleAdServingTest", "Good", void 0);
                    if (c = "Good" === vd("GoogleAdServingTest", b, a.j)) {
                        var d = a.j;
                        rd(b) && td(d) && Mw(new ud(d.document), "GoogleAdServingTest")
                    }
                    b = c
                }
                a.m = b ? 2 : 1
            }
            return 2 === a.m
        },
        cl = function(a, b, c) {
            return c ? vd(b, c, a.j) : null
        },
        Zx = function(a, b, c, d) {
            if (d) {
                var e = {
                    Uc: Q(c, 2) - Date.now() / 1E3,
                    path: Q(c, 3),
                    domain: Q(c, 4),
                    lf: !1
                };
                a = a.j;
                rd(d) && td(a) && (new ud(a.document)).set(b, Q(c, 1), e)
            }
        },
        $x = function(a, b, c) {
            if (c && vd(b, c, a.j)) {
                var d = a.j.location.hostname;
                if ("localhost" === d) d = ["localhost"];
                else if (d = d.split("."), 2 > d.length) d = [];
                else {
                    for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                    d = e
                }
                d = _.z(d);
                for (e = d.next(); !e.done; e = d.next()) f = a.j, rd(c) && td(f) && Mw(new ud(f.document), b, "/", e.value)
            }
        };
    var ay = {},
        by = (ay[3] = Ja(he(bq("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), ay),
        cy = {},
        dy = (cy[3] = Ja(he(bq("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js"))), cy);
    var ey = function(a) {
            this.j = a;
            this.m = vk()
        },
        fy = function(a) {
            var b = {};
            _.dq(a, function(c) {
                b[c.j] = c.m
            });
            return b
        };
    var gy = S(["https://adservice.google.com/adsid/integrator.", ""]),
        hy = S(["https://adservice.google.ad/adsid/integrator.", ""]),
        iy = S(["https://adservice.google.ae/adsid/integrator.", ""]),
        jy = S(["https://adservice.google.com.af/adsid/integrator.", ""]),
        ky = S(["https://adservice.google.com.ag/adsid/integrator.", ""]),
        ly = S(["https://adservice.google.com.ai/adsid/integrator.", ""]),
        my = S(["https://adservice.google.al/adsid/integrator.", ""]),
        ny = S(["https://adservice.google.co.ao/adsid/integrator.", ""]),
        oy = S(["https://adservice.google.com.ar/adsid/integrator.", ""]),
        py = S(["https://adservice.google.as/adsid/integrator.", ""]),
        qy = S(["https://adservice.google.at/adsid/integrator.", ""]),
        ry = S(["https://adservice.google.com.au/adsid/integrator.", ""]),
        sy = S(["https://adservice.google.az/adsid/integrator.", ""]),
        ty = S(["https://adservice.google.com.bd/adsid/integrator.", ""]),
        uy = S(["https://adservice.google.be/adsid/integrator.", ""]),
        vy = S(["https://adservice.google.bf/adsid/integrator.", ""]),
        wy = S(["https://adservice.google.bg/adsid/integrator.", ""]),
        xy = S(["https://adservice.google.com.bh/adsid/integrator.", ""]),
        yy = S(["https://adservice.google.bi/adsid/integrator.", ""]),
        zy = S(["https://adservice.google.bj/adsid/integrator.", ""]),
        Ay = S(["https://adservice.google.com.bn/adsid/integrator.", ""]),
        By = S(["https://adservice.google.com.bo/adsid/integrator.", ""]),
        Cy = S(["https://adservice.google.com.br/adsid/integrator.", ""]),
        Dy = S(["https://adservice.google.bs/adsid/integrator.", ""]),
        Ey = S(["https://adservice.google.bt/adsid/integrator.", ""]),
        Fy = S(["https://adservice.google.co.bw/adsid/integrator.", ""]),
        Gy = S(["https://adservice.google.com.bz/adsid/integrator.", ""]),
        Hy = S(["https://adservice.google.ca/adsid/integrator.", ""]),
        Iy = S(["https://adservice.google.cd/adsid/integrator.", ""]),
        Jy = S(["https://adservice.google.cf/adsid/integrator.", ""]),
        Ky = S(["https://adservice.google.cg/adsid/integrator.", ""]),
        Ly = S(["https://adservice.google.ch/adsid/integrator.", ""]),
        My = S(["https://adservice.google.ci/adsid/integrator.", ""]),
        Ny = S(["https://adservice.google.co.ck/adsid/integrator.", ""]),
        Oy = S(["https://adservice.google.cl/adsid/integrator.", ""]),
        Py = S(["https://adservice.google.cm/adsid/integrator.", ""]),
        Qy = S(["https://adservice.google.com.co/adsid/integrator.", ""]),
        Ry = S(["https://adservice.google.co.cr/adsid/integrator.", ""]),
        Sy = S(["https://adservice.google.com.cu/adsid/integrator.", ""]),
        Ty = S(["https://adservice.google.cv/adsid/integrator.", ""]),
        Uy = S(["https://adservice.google.com.cy/adsid/integrator.", ""]),
        Vy = S(["https://adservice.google.cz/adsid/integrator.", ""]),
        Wy = S(["https://adservice.google.de/adsid/integrator.", ""]),
        Xy = S(["https://adservice.google.dj/adsid/integrator.", ""]),
        Yy = S(["https://adservice.google.dk/adsid/integrator.", ""]),
        Zy = S(["https://adservice.google.dm/adsid/integrator.", ""]),
        $y = S(["https://adservice.google.dz/adsid/integrator.", ""]),
        az = S(["https://adservice.google.com.ec/adsid/integrator.", ""]),
        bz = S(["https://adservice.google.ee/adsid/integrator.", ""]),
        cz = S(["https://adservice.google.com.eg/adsid/integrator.", ""]),
        dz = S(["https://adservice.google.es/adsid/integrator.", ""]),
        ez = S(["https://adservice.google.com.et/adsid/integrator.", ""]),
        fz = S(["https://adservice.google.fi/adsid/integrator.", ""]),
        gz = S(["https://adservice.google.com.fj/adsid/integrator.", ""]),
        hz = S(["https://adservice.google.fm/adsid/integrator.", ""]),
        iz = S(["https://adservice.google.fr/adsid/integrator.", ""]),
        jz = S(["https://adservice.google.ga/adsid/integrator.", ""]),
        kz = S(["https://adservice.google.ge/adsid/integrator.", ""]),
        lz = S(["https://adservice.google.gg/adsid/integrator.", ""]),
        mz = S(["https://adservice.google.com.gh/adsid/integrator.", ""]),
        nz = S(["https://adservice.google.com.gi/adsid/integrator.", ""]),
        oz = S(["https://adservice.google.gl/adsid/integrator.", ""]),
        pz = S(["https://adservice.google.gm/adsid/integrator.", ""]),
        qz = S(["https://adservice.google.gr/adsid/integrator.", ""]),
        rz = S(["https://adservice.google.com.gt/adsid/integrator.", ""]),
        sz = S(["https://adservice.google.gy/adsid/integrator.", ""]),
        tz = S(["https://adservice.google.com.hk/adsid/integrator.", ""]),
        uz = S(["https://adservice.google.hn/adsid/integrator.", ""]),
        vz = S(["https://adservice.google.hr/adsid/integrator.", ""]),
        wz = S(["https://adservice.google.ht/adsid/integrator.", ""]),
        xz = S(["https://adservice.google.hu/adsid/integrator.", ""]),
        yz = S(["https://adservice.google.co.id/adsid/integrator.", ""]),
        zz = S(["https://adservice.google.ie/adsid/integrator.", ""]),
        Az = S(["https://adservice.google.co.il/adsid/integrator.", ""]),
        Bz = S(["https://adservice.google.im/adsid/integrator.", ""]),
        Cz = S(["https://adservice.google.co.in/adsid/integrator.", ""]),
        Dz = S(["https://adservice.google.iq/adsid/integrator.", ""]),
        Ez = S(["https://adservice.google.is/adsid/integrator.", ""]),
        Fz = S(["https://adservice.google.it/adsid/integrator.", ""]),
        Gz = S(["https://adservice.google.je/adsid/integrator.", ""]),
        Hz = S(["https://adservice.google.com.jm/adsid/integrator.", ""]),
        Iz = S(["https://adservice.google.jo/adsid/integrator.", ""]),
        Jz = S(["https://adservice.google.co.jp/adsid/integrator.", ""]),
        Kz = S(["https://adservice.google.co.ke/adsid/integrator.", ""]),
        Lz = S(["https://adservice.google.com.kh/adsid/integrator.", ""]),
        Mz = S(["https://adservice.google.ki/adsid/integrator.", ""]),
        Nz = S(["https://adservice.google.kg/adsid/integrator.", ""]),
        Oz = S(["https://adservice.google.co.kr/adsid/integrator.", ""]),
        Pz = S(["https://adservice.google.com.kw/adsid/integrator.", ""]),
        Qz = S(["https://adservice.google.kz/adsid/integrator.", ""]),
        Rz = S(["https://adservice.google.la/adsid/integrator.", ""]),
        Sz = S(["https://adservice.google.com.lb/adsid/integrator.", ""]),
        Tz = S(["https://adservice.google.li/adsid/integrator.", ""]),
        Uz = S(["https://adservice.google.lk/adsid/integrator.", ""]),
        Vz = S(["https://adservice.google.co.ls/adsid/integrator.", ""]),
        Wz = S(["https://adservice.google.lt/adsid/integrator.", ""]),
        Xz = S(["https://adservice.google.lu/adsid/integrator.", ""]),
        Yz = S(["https://adservice.google.lv/adsid/integrator.", ""]),
        Zz = S(["https://adservice.google.com.ly/adsid/integrator.", ""]),
        $z = S(["https://adservice.google.md/adsid/integrator.", ""]),
        aA = S(["https://adservice.google.me/adsid/integrator.", ""]),
        bA = S(["https://adservice.google.mg/adsid/integrator.", ""]),
        cA = S(["https://adservice.google.mk/adsid/integrator.", ""]),
        dA = S(["https://adservice.google.ml/adsid/integrator.", ""]),
        eA = S(["https://adservice.google.com.mm/adsid/integrator.", ""]),
        fA = S(["https://adservice.google.mn/adsid/integrator.", ""]),
        gA = S(["https://adservice.google.ms/adsid/integrator.", ""]),
        hA = S(["https://adservice.google.com.mt/adsid/integrator.", ""]),
        iA = S(["https://adservice.google.mu/adsid/integrator.", ""]),
        jA = S(["https://adservice.google.mv/adsid/integrator.", ""]),
        kA = S(["https://adservice.google.mw/adsid/integrator.", ""]),
        lA = S(["https://adservice.google.com.mx/adsid/integrator.", ""]),
        mA = S(["https://adservice.google.com.my/adsid/integrator.", ""]),
        nA = S(["https://adservice.google.co.mz/adsid/integrator.", ""]),
        oA = S(["https://adservice.google.com.na/adsid/integrator.", ""]),
        pA = S(["https://adservice.google.com.ng/adsid/integrator.", ""]),
        qA = S(["https://adservice.google.com.ni/adsid/integrator.", ""]),
        rA = S(["https://adservice.google.ne/adsid/integrator.", ""]),
        sA = S(["https://adservice.google.nl/adsid/integrator.", ""]),
        tA = S(["https://adservice.google.no/adsid/integrator.", ""]),
        uA = S(["https://adservice.google.com.np/adsid/integrator.", ""]),
        vA = S(["https://adservice.google.nr/adsid/integrator.", ""]),
        wA = S(["https://adservice.google.nu/adsid/integrator.", ""]),
        xA = S(["https://adservice.google.co.nz/adsid/integrator.", ""]),
        yA = S(["https://adservice.google.com.om/adsid/integrator.", ""]),
        zA = S(["https://adservice.google.com.pa/adsid/integrator.", ""]),
        AA = S(["https://adservice.google.com.pe/adsid/integrator.", ""]),
        BA = S(["https://adservice.google.com.pg/adsid/integrator.", ""]),
        CA = S(["https://adservice.google.com.ph/adsid/integrator.", ""]),
        DA = S(["https://adservice.google.com.pk/adsid/integrator.", ""]),
        EA = S(["https://adservice.google.pl/adsid/integrator.", ""]),
        FA = S(["https://adservice.google.pn/adsid/integrator.", ""]),
        GA = S(["https://adservice.google.com.pr/adsid/integrator.", ""]),
        HA = S(["https://adservice.google.ps/adsid/integrator.", ""]),
        IA = S(["https://adservice.google.pt/adsid/integrator.", ""]),
        JA = S(["https://adservice.google.com.py/adsid/integrator.", ""]),
        KA = S(["https://adservice.google.com.qa/adsid/integrator.", ""]),
        LA = S(["https://adservice.google.ro/adsid/integrator.", ""]),
        MA = S(["https://adservice.google.ru/adsid/integrator.", ""]),
        NA = S(["https://adservice.google.rw/adsid/integrator.", ""]),
        OA = S(["https://adservice.google.com.sa/adsid/integrator.", ""]),
        PA = S(["https://adservice.google.com.sb/adsid/integrator.", ""]),
        QA = S(["https://adservice.google.sc/adsid/integrator.", ""]),
        RA = S(["https://adservice.google.se/adsid/integrator.", ""]),
        SA = S(["https://adservice.google.com.sg/adsid/integrator.", ""]),
        TA = S(["https://adservice.google.sh/adsid/integrator.", ""]),
        UA = S(["https://adservice.google.si/adsid/integrator.", ""]),
        VA = S(["https://adservice.google.sk/adsid/integrator.", ""]),
        WA = S(["https://adservice.google.sn/adsid/integrator.", ""]),
        XA = S(["https://adservice.google.so/adsid/integrator.", ""]),
        YA = S(["https://adservice.google.sm/adsid/integrator.", ""]),
        ZA = S(["https://adservice.google.sr/adsid/integrator.", ""]),
        $A = S(["https://adservice.google.st/adsid/integrator.", ""]),
        aB = S(["https://adservice.google.com.sv/adsid/integrator.", ""]),
        bB = S(["https://adservice.google.td/adsid/integrator.", ""]),
        cB = S(["https://adservice.google.tg/adsid/integrator.", ""]),
        dB = S(["https://adservice.google.co.th/adsid/integrator.", ""]),
        eB = S(["https://adservice.google.com.tj/adsid/integrator.", ""]),
        fB = S(["https://adservice.google.tl/adsid/integrator.", ""]),
        gB = S(["https://adservice.google.tm/adsid/integrator.", ""]),
        hB = S(["https://adservice.google.tn/adsid/integrator.", ""]),
        iB = S(["https://adservice.google.to/adsid/integrator.", ""]),
        jB = S(["https://adservice.google.com.tr/adsid/integrator.", ""]),
        kB = S(["https://adservice.google.tt/adsid/integrator.", ""]),
        lB = S(["https://adservice.google.com.tw/adsid/integrator.", ""]),
        mB = S(["https://adservice.google.co.tz/adsid/integrator.", ""]),
        nB = S(["https://adservice.google.com.ua/adsid/integrator.", ""]),
        oB = S(["https://adservice.google.co.ug/adsid/integrator.", ""]),
        pB = S(["https://adservice.google.co.uk/adsid/integrator.", ""]),
        qB = S(["https://adservice.google.com.uy/adsid/integrator.", ""]),
        rB = S(["https://adservice.google.co.uz/adsid/integrator.", ""]),
        sB = S(["https://adservice.google.com.vc/adsid/integrator.", ""]),
        tB = S(["https://adservice.google.co.ve/adsid/integrator.", ""]),
        uB = S(["https://adservice.google.vg/adsid/integrator.", ""]),
        vB = S(["https://adservice.google.co.vi/adsid/integrator.", ""]),
        wB = S(["https://adservice.google.com.vn/adsid/integrator.", ""]),
        xB = S(["https://adservice.google.vu/adsid/integrator.", ""]),
        yB = S(["https://adservice.google.ws/adsid/integrator.", ""]),
        zB = S(["https://adservice.google.rs/adsid/integrator.", ""]),
        AB = S(["https://adservice.google.co.za/adsid/integrator.", ""]),
        BB = S(["https://adservice.google.co.zm/adsid/integrator.", ""]),
        CB = S(["https://adservice.google.co.zw/adsid/integrator.", ""]),
        DB = S(["https://adservice.google.cat/adsid/integrator.", ""]),
        EB = new w.Map([
            [".google.com", function(a) {
                return v(gy, a)
            }],
            [".google.ad", function(a) {
                return v(hy, a)
            }],
            [".google.ae", function(a) {
                return v(iy, a)
            }],
            [".google.com.af", function(a) {
                return v(jy, a)
            }],
            [".google.com.ag", function(a) {
                return v(ky, a)
            }],
            [".google.com.ai", function(a) {
                return v(ly, a)
            }],
            [".google.al", function(a) {
                return v(my, a)
            }],
            [".google.co.ao", function(a) {
                return v(ny, a)
            }],
            [".google.com.ar", function(a) {
                return v(oy, a)
            }],
            [".google.as", function(a) {
                return v(py, a)
            }],
            [".google.at", function(a) {
                return v(qy, a)
            }],
            [".google.com.au", function(a) {
                return v(ry, a)
            }],
            [".google.az", function(a) {
                return v(sy, a)
            }],
            [".google.com.bd", function(a) {
                return v(ty, a)
            }],
            [".google.be", function(a) {
                return v(uy, a)
            }],
            [".google.bf", function(a) {
                return v(vy, a)
            }],
            [".google.bg", function(a) {
                return v(wy, a)
            }],
            [".google.com.bh", function(a) {
                return v(xy, a)
            }],
            [".google.bi", function(a) {
                return v(yy, a)
            }],
            [".google.bj", function(a) {
                return v(zy, a)
            }],
            [".google.com.bn", function(a) {
                return v(Ay, a)
            }],
            [".google.com.bo", function(a) {
                return v(By, a)
            }],
            [".google.com.br", function(a) {
                return v(Cy, a)
            }],
            [".google.bs", function(a) {
                return v(Dy, a)
            }],
            [".google.bt", function(a) {
                return v(Ey, a)
            }],
            [".google.co.bw", function(a) {
                return v(Fy, a)
            }],
            [".google.com.bz", function(a) {
                return v(Gy, a)
            }],
            [".google.ca", function(a) {
                return v(Hy, a)
            }],
            [".google.cd", function(a) {
                return v(Iy, a)
            }],
            [".google.cf", function(a) {
                return v(Jy, a)
            }],
            [".google.cg", function(a) {
                return v(Ky, a)
            }],
            [".google.ch", function(a) {
                return v(Ly, a)
            }],
            [".google.ci", function(a) {
                return v(My, a)
            }],
            [".google.co.ck", function(a) {
                return v(Ny, a)
            }],
            [".google.cl", function(a) {
                return v(Oy, a)
            }],
            [".google.cm", function(a) {
                return v(Py, a)
            }],
            [".google.com.co", function(a) {
                return v(Qy, a)
            }],
            [".google.co.cr", function(a) {
                return v(Ry, a)
            }],
            [".google.com.cu", function(a) {
                return v(Sy, a)
            }],
            [".google.cv", function(a) {
                return v(Ty, a)
            }],
            [".google.com.cy", function(a) {
                return v(Uy, a)
            }],
            [".google.cz", function(a) {
                return v(Vy, a)
            }],
            [".google.de", function(a) {
                return v(Wy, a)
            }],
            [".google.dj", function(a) {
                return v(Xy, a)
            }],
            [".google.dk", function(a) {
                return v(Yy, a)
            }],
            [".google.dm", function(a) {
                return v(Zy, a)
            }],
            [".google.dz", function(a) {
                return v($y, a)
            }],
            [".google.com.ec", function(a) {
                return v(az, a)
            }],
            [".google.ee", function(a) {
                return v(bz, a)
            }],
            [".google.com.eg", function(a) {
                return v(cz, a)
            }],
            [".google.es", function(a) {
                return v(dz, a)
            }],
            [".google.com.et", function(a) {
                return v(ez, a)
            }],
            [".google.fi", function(a) {
                return v(fz, a)
            }],
            [".google.com.fj", function(a) {
                return v(gz, a)
            }],
            [".google.fm", function(a) {
                return v(hz, a)
            }],
            [".google.fr", function(a) {
                return v(iz, a)
            }],
            [".google.ga", function(a) {
                return v(jz, a)
            }],
            [".google.ge", function(a) {
                return v(kz, a)
            }],
            [".google.gg", function(a) {
                return v(lz, a)
            }],
            [".google.com.gh", function(a) {
                return v(mz, a)
            }],
            [".google.com.gi", function(a) {
                return v(nz, a)
            }],
            [".google.gl", function(a) {
                return v(oz, a)
            }],
            [".google.gm", function(a) {
                return v(pz, a)
            }],
            [".google.gr", function(a) {
                return v(qz, a)
            }],
            [".google.com.gt", function(a) {
                return v(rz, a)
            }],
            [".google.gy", function(a) {
                return v(sz, a)
            }],
            [".google.com.hk", function(a) {
                return v(tz, a)
            }],
            [".google.hn", function(a) {
                return v(uz, a)
            }],
            [".google.hr", function(a) {
                return v(vz, a)
            }],
            [".google.ht", function(a) {
                return v(wz, a)
            }],
            [".google.hu", function(a) {
                return v(xz, a)
            }],
            [".google.co.id", function(a) {
                return v(yz, a)
            }],
            [".google.ie", function(a) {
                return v(zz, a)
            }],
            [".google.co.il", function(a) {
                return v(Az, a)
            }],
            [".google.im", function(a) {
                return v(Bz, a)
            }],
            [".google.co.in", function(a) {
                return v(Cz, a)
            }],
            [".google.iq", function(a) {
                return v(Dz, a)
            }],
            [".google.is", function(a) {
                return v(Ez, a)
            }],
            [".google.it", function(a) {
                return v(Fz, a)
            }],
            [".google.je", function(a) {
                return v(Gz, a)
            }],
            [".google.com.jm", function(a) {
                return v(Hz, a)
            }],
            [".google.jo", function(a) {
                return v(Iz, a)
            }],
            [".google.co.jp", function(a) {
                return v(Jz, a)
            }],
            [".google.co.ke", function(a) {
                return v(Kz, a)
            }],
            [".google.com.kh", function(a) {
                return v(Lz, a)
            }],
            [".google.ki", function(a) {
                return v(Mz, a)
            }],
            [".google.kg", function(a) {
                return v(Nz, a)
            }],
            [".google.co.kr", function(a) {
                return v(Oz, a)
            }],
            [".google.com.kw", function(a) {
                return v(Pz, a)
            }],
            [".google.kz", function(a) {
                return v(Qz, a)
            }],
            [".google.la", function(a) {
                return v(Rz, a)
            }],
            [".google.com.lb", function(a) {
                return v(Sz, a)
            }],
            [".google.li", function(a) {
                return v(Tz, a)
            }],
            [".google.lk", function(a) {
                return v(Uz, a)
            }],
            [".google.co.ls", function(a) {
                return v(Vz, a)
            }],
            [".google.lt", function(a) {
                return v(Wz, a)
            }],
            [".google.lu", function(a) {
                return v(Xz, a)
            }],
            [".google.lv", function(a) {
                return v(Yz, a)
            }],
            [".google.com.ly", function(a) {
                return v(Zz, a)
            }],
            [".google.md", function(a) {
                return v($z, a)
            }],
            [".google.me", function(a) {
                return v(aA, a)
            }],
            [".google.mg", function(a) {
                return v(bA, a)
            }],
            [".google.mk", function(a) {
                return v(cA, a)
            }],
            [".google.ml", function(a) {
                return v(dA, a)
            }],
            [".google.com.mm", function(a) {
                return v(eA, a)
            }],
            [".google.mn", function(a) {
                return v(fA, a)
            }],
            [".google.ms", function(a) {
                return v(gA, a)
            }],
            [".google.com.mt", function(a) {
                return v(hA, a)
            }],
            [".google.mu", function(a) {
                return v(iA, a)
            }],
            [".google.mv", function(a) {
                return v(jA, a)
            }],
            [".google.mw", function(a) {
                return v(kA, a)
            }],
            [".google.com.mx", function(a) {
                return v(lA, a)
            }],
            [".google.com.my", function(a) {
                return v(mA, a)
            }],
            [".google.co.mz", function(a) {
                return v(nA, a)
            }],
            [".google.com.na", function(a) {
                return v(oA, a)
            }],
            [".google.com.ng", function(a) {
                return v(pA, a)
            }],
            [".google.com.ni", function(a) {
                return v(qA, a)
            }],
            [".google.ne", function(a) {
                return v(rA, a)
            }],
            [".google.nl", function(a) {
                return v(sA, a)
            }],
            [".google.no", function(a) {
                return v(tA, a)
            }],
            [".google.com.np", function(a) {
                return v(uA, a)
            }],
            [".google.nr", function(a) {
                return v(vA, a)
            }],
            [".google.nu", function(a) {
                return v(wA, a)
            }],
            [".google.co.nz", function(a) {
                return v(xA, a)
            }],
            [".google.com.om", function(a) {
                return v(yA, a)
            }],
            [".google.com.pa", function(a) {
                return v(zA, a)
            }],
            [".google.com.pe", function(a) {
                return v(AA, a)
            }],
            [".google.com.pg", function(a) {
                return v(BA, a)
            }],
            [".google.com.ph", function(a) {
                return v(CA, a)
            }],
            [".google.com.pk", function(a) {
                return v(DA, a)
            }],
            [".google.pl", function(a) {
                return v(EA, a)
            }],
            [".google.pn", function(a) {
                return v(FA, a)
            }],
            [".google.com.pr", function(a) {
                return v(GA, a)
            }],
            [".google.ps", function(a) {
                return v(HA, a)
            }],
            [".google.pt", function(a) {
                return v(IA, a)
            }],
            [".google.com.py", function(a) {
                return v(JA, a)
            }],
            [".google.com.qa", function(a) {
                return v(KA, a)
            }],
            [".google.ro", function(a) {
                return v(LA, a)
            }],
            [".google.ru", function(a) {
                return v(MA, a)
            }],
            [".google.rw", function(a) {
                return v(NA, a)
            }],
            [".google.com.sa", function(a) {
                return v(OA, a)
            }],
            [".google.com.sb", function(a) {
                return v(PA, a)
            }],
            [".google.sc", function(a) {
                return v(QA, a)
            }],
            [".google.se", function(a) {
                return v(RA, a)
            }],
            [".google.com.sg", function(a) {
                return v(SA, a)
            }],
            [".google.sh", function(a) {
                return v(TA, a)
            }],
            [".google.si", function(a) {
                return v(UA, a)
            }],
            [".google.sk", function(a) {
                return v(VA, a)
            }],
            [".google.sn", function(a) {
                return v(WA, a)
            }],
            [".google.so", function(a) {
                return v(XA, a)
            }],
            [".google.sm", function(a) {
                return v(YA, a)
            }],
            [".google.sr", function(a) {
                return v(ZA, a)
            }],
            [".google.st", function(a) {
                return v($A, a)
            }],
            [".google.com.sv", function(a) {
                return v(aB, a)
            }],
            [".google.td", function(a) {
                return v(bB, a)
            }],
            [".google.tg", function(a) {
                return v(cB, a)
            }],
            [".google.co.th", function(a) {
                return v(dB, a)
            }],
            [".google.com.tj", function(a) {
                return v(eB, a)
            }],
            [".google.tl", function(a) {
                return v(fB, a)
            }],
            [".google.tm", function(a) {
                return v(gB, a)
            }],
            [".google.tn", function(a) {
                return v(hB, a)
            }],
            [".google.to", function(a) {
                return v(iB, a)
            }],
            [".google.com.tr", function(a) {
                return v(jB, a)
            }],
            [".google.tt", function(a) {
                return v(kB, a)
            }],
            [".google.com.tw", function(a) {
                return v(lB, a)
            }],
            [".google.co.tz", function(a) {
                return v(mB, a)
            }],
            [".google.com.ua", function(a) {
                return v(nB, a)
            }],
            [".google.co.ug", function(a) {
                return v(oB, a)
            }],
            [".google.co.uk", function(a) {
                return v(pB, a)
            }],
            [".google.com.uy", function(a) {
                return v(qB, a)
            }],
            [".google.co.uz", function(a) {
                return v(rB, a)
            }],
            [".google.com.vc", function(a) {
                return v(sB, a)
            }],
            [".google.co.ve", function(a) {
                return v(tB, a)
            }],
            [".google.vg", function(a) {
                return v(uB, a)
            }],
            [".google.co.vi", function(a) {
                return v(vB, a)
            }],
            [".google.com.vn", function(a) {
                return v(wB, a)
            }],
            [".google.vu", function(a) {
                return v(xB, a)
            }],
            [".google.ws", function(a) {
                return v(yB, a)
            }],
            [".google.rs", function(a) {
                return v(zB, a)
            }],
            [".google.co.za", function(a) {
                return v(AB, a)
            }],
            [".google.co.zm", function(a) {
                return v(BB, a)
            }],
            [".google.co.zw", function(a) {
                return v(CB, a)
            }],
            [".google.cat", function(a) {
                return v(DB, a)
            }]
        ].map(function(a) {
            var b = _.z(a);
            a = b.next().value;
            b = b.next().value;
            var c = {};
            return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
        }));
    var FB = function(a, b, c) {
        var d = _.$c("LINK", a);
        try {
            if (d.rel = "preload", xa("preload", "stylesheet")) {
                d.href = Ka(b).toString();
                var e = lt('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                e && d.setAttribute("nonce", e)
            } else {
                if (b instanceof Pc) var f = Ka(b).toString();
                else {
                    if (b instanceof _.je) var g = _.ke(b);
                    else {
                        if (b instanceof _.je) var h = b;
                        else b = "object" == typeof b && b.Oa ? b.Ga() : String(b), le.test(b) || (b = "about:invalid#zClosurez"), h = new _.je(b, _.me);
                        g = _.ke(h)
                    }
                    f = g
                }
                d.href = f
            }
        } catch (k) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (k) {}
    };
    var ve = _.r,
        GB = function(a) {
            var b = new w.Map([
                ["domain", _.r.location.hostname]
            ]);
            we[3] >= xe() && b.set("adsid", we[1]);
            return La(EB.get(a).js, b)
        },
        we, HB, ue = function() {
            ve = _.r;
            we = ve.googleToken = ve.googleToken || {};
            var a = xe();
            we[1] && we[3] > a && 0 < we[2] || (we[1] = "", we[2] = -1, we[3] = -1, we[4] = "", we[6] = "");
            HB = ve.googleIMState = ve.googleIMState || {};
            EB.has(HB[1]) || (HB[1] = ".google.com");
            Array.isArray(HB[5]) || (HB[5] = []);
            "boolean" !== typeof HB[6] && (HB[6] = !1);
            Array.isArray(HB[7]) || (HB[7] = []);
            "number" !== typeof HB[8] && (HB[8] = 0)
        },
        IB = function(a) {
            ue();
            EB.has(a) && (HB[1] = a)
        },
        ye = {
            Pc: function() {
                return 0 < HB[8]
            },
            bf: function() {
                HB[8]++
            },
            cf: function() {
                0 < HB[8] && HB[8]--
            },
            df: function() {
                HB[8] = 0
            },
            ih: function() {
                return !1
            },
            yd: function() {
                return HB[5]
            },
            md: function(a) {
                try {
                    a()
                } catch (b) {
                    _.r.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Rd: function() {
                if (!ye.Pc()) {
                    var a = _.r.document,
                        b = function(e) {
                            e = GB(e);
                            a: {
                                try {
                                    var f = lt("script[nonce]");
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            FB(a, e.toString(), f);
                            f = _.$c("SCRIPT", a);
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.r.processGoogleToken({}, 2)
                            };
                            Va(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), ye.bf()
                            } catch (g) {}
                        },
                        c = HB[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    _.r.setTimeout(function() {
                        return _.r.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        JB = function(a) {
            _.r.processGoogleToken = _.r.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                ue();
                1 == c ? ye.df() : ye.cf();
                var k = ve.googleToken = ve.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !ye.Pc() && (!(we[3] >= xe()) || "NT" == we[1]);
                var m = !(we[3] >= xe()) && 0 != c;
                if (l || e || m) e = xe(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.Kw(_.r, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, ue();
                if (l || !ye.Pc()) {
                    c = ye.yd();
                    for (b = 0; b < c.length; b++) ye.md(c[b]);
                    c.length = 0
                }
            };
            ze(a)
        };
    var $n = function(a, b) {
            b = void 0 === b ? {} : b;
            this.root = b.root ? b.root : null;
            this.o = b.rootMargin ? Be(b.rootMargin) : [{
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }];
            this.rootMargin = Ae(this.o, function(c) {
                return "" + c.value + c.type
            }).join(" ");
            this.L = De(b.threshold);
            this.I = a;
            this.j = [];
            this.H = [];
            this.C = !1;
            this.m = null;
            this.A = Fq(this.l, 100, this)
        },
        KB = function(a) {
            if (a.root) var b = Ee(a.root);
            else {
                var c = _.xt(window);
                b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }
            a = Ae(a.o, function(d, e) {
                return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
            });
            return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2]
            }
        },
        LB = function(a, b, c) {
            if (!b || b.isIntersecting != c.isIntersecting) return !0;
            var d = b.intersectionRatio,
                e = c.intersectionRatio;
            return d == e ? !1 : _.Qe(a.L, function(f) {
                return f < d != f < e
            })
        };
    $n.prototype.l = function() {
        var a = this,
            b = KB(this);
        _.dq(this.j, function(c) {
            var d = c.target,
                e = Ee(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                m = h - l,
                n = k - g;
            g = 0 <= m && 0 <= n ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: m,
                height: n
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            LB(a, c.ma, d) && a.H.push(d);
            c.ma = d
        });
        this.H.length && this.I(MB(this), this)
    };
    $n.prototype.observe = function(a) {
        _.Qe(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            ma: null
        }), this.l(), this.C || (this.C = !0, _.Za(_.r, "scroll", this.A), _.Za(_.r, "resize", this.A), _.r.MutationObserver && !this.m && (this.m = new MutationObserver(this.A), this.m.observe(_.r.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    $n.prototype.unobserve = function(a) {
        this.j = _.Ce(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    $n.prototype.disconnect = function() {
        this.C = !1;
        this.j.length = 0;
        _.ad(_.r, "scroll", this.A);
        _.ad(_.r, "resize", this.A);
        this.m && (this.m.disconnect(), this.m = null)
    };
    var MB = function(a) {
        var b = [].concat(_.Sc(a.H));
        a.H.length = 0;
        return b
    };
    var NB = function(a, b, c, d, e, f) {
        _.$v.call(this);
        this.Fa = a;
        this.status = 1;
        this.C = b;
        this.A = c;
        this.G = d;
        this.Kb = !!e;
        this.l = Math.random();
        this.o = {};
        this.j = null;
        this.L = (0, _.Wp)(this.P, this);
        this.I = f
    };
    _.R(NB, _.$v);
    NB.prototype.P = function(a) {
        if (!("*" !== this.A && a.origin !== this.A || !this.Kb && a.source != this.C)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.fa(b) && (a = b.i, b.c === this.Fa && a != this.l)) {
                if (2 !== this.status) try {
                    this.status = 2, OB(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.fa(b)) && this.o.hasOwnProperty(a)) this.o[a](b)
            }
        }
    };
    var OB = function(a) {
        var b = {};
        b.c = a.Fa;
        b.i = a.l;
        a.I && (b.e = a.I);
        a.C.postMessage(JSON.stringify(b), a.A)
    };
    NB.prototype.D = function() {
        if (1 === this.status) {
            try {
                this.C.postMessage && OB(this)
            } catch (a) {}
            window.setTimeout((0, _.Wp)(this.D, this), 50)
        }
    };
    NB.prototype.connect = function(a) {
        a && (this.j = a);
        _.Za(window, "message", this.L);
        this.G && this.D()
    };
    var PB = function(a, b, c) {
        a.o[b] = c
    };
    NB.prototype.send = function(a, b) {
        var c = {};
        c.c = this.Fa;
        c.i = this.l;
        c.s = a;
        c.p = b;
        try {
            this.C.postMessage(JSON.stringify(c), this.A)
        } catch (d) {}
    };
    NB.prototype.H = function() {
        this.status = 3;
        _.ad(window, "message", this.L);
        _.$v.prototype.H.call(this)
    };
    var Zk = new w.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        $k = new w.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var QB = function(a) {
        T.call(this, a)
    };
    _.R(QB, T);
    var RB = function(a) {
        T.call(this, a)
    };
    _.R(RB, T);
    var SB = function(a) {
        T.call(this, a)
    };
    _.R(SB, T);
    Ja(he(bq("https://pagead2.googlesyndication.com/pagead/osd.js")));
    var TB = function() {
            return 0 != hl(document)
        },
        hl = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        UB = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        },
        VB = function(a) {
            return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
        },
        WB = function(a, b) {
            if (3 == hl(b)) return !1;
            a();
            return !0
        },
        XB = function(a, b) {
            if (!WB(a, b)) {
                var c = !1,
                    d = UB(b),
                    e = function() {
                        !c && WB(a, b) && (c = !0, _.ad(b, d, e))
                    };
                d && _.Za(b, d, e)
            }
        };
    var In = function(a, b) {
            this.j = a;
            this.A = b;
            this.m = {}
        },
        Jn = function(a) {
            Dn() && (document.addEventListener("touchstart", function(b) {
                a.j(902, function() {
                    a.m[b.touches[0].identifier] = Date.now()
                })()
            }, Gq), document.addEventListener("touchend", function(b) {
                a.j(902, function() {
                    var c = b.changedTouches[0],
                        d = c.clientX,
                        e = c.clientY,
                        f = c.force;
                    c = a.m[c.identifier];
                    if (void 0 !== c) try {
                        var g = Dn(),
                            h = {
                                x: d,
                                y: e,
                                duration_ms: Date.now() - c
                            };
                        if (null == g ? 0 : g.gmaSdk) {
                            var k;
                            null == (k = g.gmaSdk) || k.reportTouchEvent(JSON.stringify(_.u(Object, "assign").call(Object, {}, h, {
                                type: 1,
                                force: f
                            })))
                        } else {
                            var l;
                            null == g || null == (l = g.webkit) || l.messageHandlers.reportGmaTouchEvent.postMessage(h)
                        }
                    } catch (m) {
                        a.A("paw_sigs", {
                            msg: "reportTouchError",
                            err: m instanceof Error ? m.message : "nonError"
                        })
                    }
                })()
            }, Gq))
        },
        En = function(a, b, c, d, e) {
            var f = 200,
                g = wn;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            f = void 0 === f ? 200 : f;
            var h = String(Math.floor(2147483647 * nd())),
                k = 0,
                l = function(m) {
                    try {
                        var n = "object" === typeof m.data ? m.data : JSON.parse(m.data);
                        h === n.paw_id && (window.clearTimeout(k), window.removeEventListener("message", l), n.signal ? c(n.signal) : n.error && d(n.error))
                    } catch (p) {
                        g("paw_sigs", {
                            msg: "postmessageError",
                            err: p instanceof Error ? p.message : "nonError",
                            data: null == m.data ? "null" : 500 < m.data.length ? m.data.substring(0, 500) : m.data
                        })
                    }
                };
            window.addEventListener("message", function(m) {
                e(903, function() {
                    l(m)
                })()
            });
            a.postMessage(_.u(Object, "assign").call(Object, {}, {
                paw_id: h
            }, b));
            k = window.setTimeout(function() {
                window.removeEventListener("message", l);
                d("PAW GMA postmessage timed out.")
            }, f)
        },
        Dn = function() {
            var a = window,
                b;
            if (a.gmaSdk || (null == (b = a.webkit) ? 0 : b.messageHandlers.getGmaViewSignals)) return a;
            try {
                var c = window.parent,
                    d;
                if (c.gmaSdk || (null == (d = c.webkit) ? 0 : d.messageHandlers.getGmaViewSignals)) return c
            } catch (e) {}
            return null
        };
    var ZB, YB;
    ZB = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new YB;
        this.sideRailProcessedFixedElements = new w.Set;
        this.sideRailAvailableSpace = new w.Map
    };
    _.uj = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new w.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new w.Map)) : a.google_reactive_ads_global_state = new ZB;
        return a.google_reactive_ads_global_state
    };
    YB = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var bC;
    _.$B = function(a) {
        this.j = _.uj(a).floatingAdsStacking
    };
    _.aC = function(a) {
        a = _.It(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    bC = function(a) {
        var b = _.aC(a);
        _.dq(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    _.cC = function(a) {
        this.m = a;
        this.j = null
    };
    _.dC = function(a) {
        if (null == a.j) {
            var b = a.m,
                c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483646;
            bC(b);
            a.j = c
        }
    };
    _.eC = function(a) {
        if (null != a.j) {
            var b = a.m;
            delete b.j.maxZIndexRestrictions[a.j];
            bC(b);
            a.j = null
        }
    };
    var vj, jj, mj;
    vj = 728 * 1.38;
    _.xj = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.fC = function(a) {
        var b = _.lj(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    jj = function(a, b) {
        return (a = _.lj(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    mj = function(a) {
        return (a = _.fC(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.lj = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.gC = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    var yj = function(a, b, c, d, e) {
            for (var f = [], g = 0; g < e; g++)
                for (var h = 0; h < b; h++) {
                    var k = f,
                        l = b - 1,
                        m = e - 1;
                    k.push.call(k, {
                        x: (0 == l ? 0 : h / l) * a,
                        y: c + (0 == m ? 0 : g / m) * (d - c)
                    })
                }
            return f
        },
        zj = 90 * 1.38;
    var hC;
    _.iC = function(a, b) {
        if (!a.body) return null;
        var c = new hC;
        c.apply(a, b);
        return function() {
            _.nu(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.A,
                position: c.H,
                top: c.C
            });
            b.scrollTo(0, c.m)
        }
    };
    hC = function() {
        this.j = this.C = this.H = this.A = null;
        this.m = 0
    };
    hC.prototype.apply = function(a, b) {
        this.A = a.body.style.overflow;
        this.H = a.body.style.position;
        this.C = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.m = _.gC(b);
        _.nu(a.body, "top", -this.m + "px")
    };
    _.oj = function(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : Re(a, b)
    };
    _.nj = function(a) {
        return !!a && 1 > a.length
    };
    var jC = function(a, b) {
        b = void 0 === b ? 500 : b;
        _.$v.call(this);
        this.A = a;
        this.o = b;
        this.j = null;
        this.l = {};
        this.I = 0;
        this.C = null
    };
    _.R(jC, _.$v);
    jC.prototype.H = function() {
        this.l = {};
        this.C && (_.ad(this.A, "message", this.C), delete this.C);
        delete this.l;
        delete this.A;
        delete this.j;
        _.$v.prototype.H.call(this)
    };
    var lC = function(a) {
            var b;
            return "function" === typeof(null == (b = a.A) ? void 0 : b.__uspapi) || null != kC(a)
        },
        nC = function(a, b) {
            var c = {};
            if (lC(a)) {
                var d = _.fn(function() {
                    return b(c)
                });
                mC(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, a.o)
            } else b(c)
        },
        mC = function(a, b) {
            var c;
            "function" === typeof(null == (c = a.A) ? void 0 : c.__uspapi) ? (a = a.A.__uspapi, a("getUSPData", 1, b)) : kC(a) && (oC(a), c = ++a.I, a.l[c] = b, a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
                command: "getUSPData",
                version: 1,
                callId: c
            }, b), "*")))
        },
        kC = function(a) {
            if (a.j) return a.j;
            a.j = St(a.A, "__uspapiLocator");
            return a.j
        },
        oC = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = {};
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__uspapiReturn;
                    var e;
                    null == (e = a.l) || e[d.callId](d.returnValue, d.success)
                } catch (f) {}
            }, _.Za(a.A, "message", a.C))
        };
    var pC = function(a) {
        T.call(this, a)
    };
    _.R(pC, T);
    var Am = function(a, b) {
        b = void 0 === b ? !1 : b;
        _.$v.call(this);
        this.A = a;
        this.C = this.j = null;
        this.l = {};
        this.I = 0;
        this.o = !1;
        this.L = b
    };
    _.R(Am, _.$v);
    var qC = function(a) {
            a.o || (a.j || (a.j = !a.L && a.A.googlefc ? a.A : St(a.A, "googlefcPresent")), a.o = !0);
            return !!a.j
        },
        sC = function(a, b) {
            if (qC(a))
                if (a.j === a.A) a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push("loaded", function(e) {
                    b(cd(pC, e))
                });
                else {
                    rC(a);
                    var c = a.I++;
                    a.l[c] = b;
                    var d = {};
                    a.j.postMessage((d.__fciCall = {
                        command: "loaded",
                        callId: c
                    }, d), "*")
                }
        },
        tC = function(a) {
            return new w.Promise(function(b) {
                sC(a, b)
            })
        },
        rC = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = cd(pC, b.data.__fciReturn);
                    (0, a.l[Q(c, 1)])(c)
                } catch (d) {}
            }, _.Za(a.A, "message", a.C))
        };
    var uC = {},
        Ve = (uC[23] = .001, uC[211] = !1, uC[253] = !1, uC[246] = [], uC[226] = [], uC[150] = "", uC[148] = sx, uC[221] = Lt(), uC[36] = Lt(), uC[172] = null, uC[259] = null, uC[6] = Mt(window), uC[260] = void 0, uC[251] = null, uC[252] = null, uC[258] = null, uC),
        Ue = function() {
            this.j = !1
        };
    var vC = Ig(function() {
        return !!Nt(_.r.location.href)
    });
    var di = function(a) {
            var b = void 0 === b ? Cd(_.r) : b;
            this.id = a;
            this.m = Math.random() < _.We(23);
            this.j = {
                pvsid: String(b)
            }
        },
        wC = function(a) {
            a = Te(a);
            var b;
            cg.set(a, (null != (b = cg.get(a)) ? b : 0) + 1)
        },
        bg = function() {
            return [].concat(_.Sc(_.u(cg, "values").call(cg))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        M = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        },
        fi = function(a, b) {
            b = void 0 === b ? null : b;
            b = void 0 === b ? null : b;
            if (vC()) b = !0;
            else {
                var c = a.m;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && _.Kw(window, xC(a) || "", void 0, _.E(hv))
        },
        xC = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Ki(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        yC = function(a, b) {
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? M(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), M(a, "nw_id", b.join()))
        },
        dh = function(a, b, c) {
            M(a, "vrg", String(b.Pa || b.ya));
            c ? (yC(a, c), M(a, "nslots", c.length.toString())) : (yC(a, [].concat(_.Sc(_.u(cg, "keys").call(cg)))), M(a, "nslots", bg().toString()));
            b = _.C(Dd).j();
            b.length && M(a, "eid", b.join());
            M(a, "pub_url", document.URL)
        },
        Yg = function(a, b, c) {
            c = void 0 === c ? _.We(23) : c;
            if (void 0 === c || 0 > c || 1 < c) c = _.We(23);
            Math.random() < c && (a = new di(a), b(a), fi(a, 1))
        },
        cg = new w.Map;
    var ni = function(a) {
        T.call(this, a, -1, zC)
    };
    _.R(ni, T);
    var oi = function(a) {
            return Q(a, 1)
        },
        qi = function(a, b) {
            return x(a, 1, b)
        },
        pi = function(a, b) {
            return ef(a, 2, b)
        },
        zC = [2];
    var qo = function(a) {
        T.call(this, a)
    };
    _.R(qo, T);
    var Tl = function(a) {
        T.call(this, a)
    };
    _.R(Tl, T);
    Tl.prototype.setTagForChildDirectedTreatment = function(a) {
        return x(this, 5, a)
    };
    Tl.prototype.clearTagForChildDirectedTreatment = function() {
        return Yb(this, 5)
    };
    Tl.prototype.setTagForUnderAgeOfConsent = function(a) {
        return x(this, 6, a)
    };
    var Ji = function(a) {
        T.call(this, a)
    };
    _.R(Ji, T);
    var BC = function(a) {
        T.call(this, a, -1, AC)
    };
    _.R(BC, T);
    BC.prototype.na = function() {
        return fc(this, ni, 14)
    };
    BC.prototype.Ba = function() {
        return hc(this, Ji, 18)
    };
    var Sl = function(a) {
        return hc(a, Tl, 25)
    };
    BC.prototype.getCorrelator = function() {
        return Q(this, 26)
    };
    BC.prototype.setCorrelator = function(a) {
        return x(this, 26, a)
    };
    var AC = [2, 3, 14, 32];
    var eg = function(a) {
        T.call(this, a)
    };
    _.R(eg, T);
    eg.prototype.getWidth = function() {
        return Q(this, 1)
    };
    var ig = function(a, b) {
        return x(a, 1, b)
    };
    eg.prototype.getHeight = function() {
        return Q(this, 2)
    };
    var hg = function(a, b) {
            return x(a, 2, b)
        },
        Ui = function() {
            var a = new eg;
            return x(a, 3, !0)
        };
    var Zi = function(a) {
        T.call(this, a)
    };
    _.R(Zi, T);
    var gg = function(a) {
        T.call(this, a, -1, CC)
    };
    _.R(gg, T);
    var CC = [2];
    var EC = function(a) {
        T.call(this, a, -1, DC)
    };
    _.R(EC, T);
    EC.prototype.getAdUnitPath = function() {
        return Q(this, 1)
    };
    EC.prototype.getDomId = function() {
        return Q(this, 2)
    };
    var FC = function(a, b) {
        x(a, 2, b)
    };
    EC.prototype.na = function() {
        return fc(this, ni, 3)
    };
    EC.prototype.getClickUrl = function() {
        return Q(this, 7)
    };
    EC.prototype.setClickUrl = function(a) {
        return x(this, 7, a)
    };
    EC.prototype.Ba = function() {
        return hc(this, Ji, 13)
    };
    var qj = function(a) {
            return kd(a, 15, 0)
        },
        GC = function(a, b) {
            Ec(a, 25, b)
        },
        DC = [3, 4, 5, 6, 8, 9];
    var Kf = function(a) {
        T.call(this, a)
    };
    _.R(Kf, T);
    var Jf = function(a, b) {
            return kf(a, 1, HC, b)
        },
        Mf = function(a) {
            var b = new Kf;
            return kf(b, 2, HC, a)
        },
        HC = [1, 2];
    var zf = function(a) {
        T.call(this, a)
    };
    _.R(zf, T);
    var Df = function(a) {
        T.call(this, a, -1, IC)
    };
    _.R(Df, T);
    var Ef = function(a, b) {
            Dc(a, 1, b)
        },
        Gf = function(a) {
            T.call(this, a)
        };
    _.R(Gf, T);
    var Hf = function(a) {
            a: {
                var b = Q(a, 1);
                if (null == b) b = [];
                else if (b.constructor === Lb) {
                    a = b;
                    break a
                }
                var c = Cb(a),
                    d = zb(b);
                if (!c && d) {
                    for (var e = b.slice(), f = 0; f < b.length; f++)
                        if (Array.isArray(e[f])) {
                            var g = e[f].slice();
                            e[f] = g;
                            zf && 1 < g.length && Array.isArray(g[1]) && Ab(g[1])
                        }
                    b = e
                }
                b = new Lb(b, zf);c && !d && Ab(b.j);x(a, 1, b, !1, !0);a = b
            }
            return a
        },
        If = function(a, b) {
            Ec(a, 3, b)
        },
        Cf = [1, 2, 3, 4, 7, 5, 6],
        IC = [1];
    var KC = function(a) {
        T.call(this, a, -1, JC)
    };
    _.R(KC, T);
    var LC = function(a, b) {
            return ac(a, 1, b, 0)
        },
        MC = function(a, b) {
            return Ec(a, 2, b)
        },
        NC = function(a, b) {
            return Dc(a, 3, b)
        },
        JC = [3];
    var OC = function(a) {
        T.call(this, a)
    };
    _.R(OC, T);
    OC.prototype.getTimestamp = function() {
        return ld(this, 1)
    };
    var QC = function(a) {
            var b = new OC;
            b = ac(b, 1, Date.now(), 0);
            return kf(b, 2, PC, a)
        },
        PC = [2, 3];
    var RC = function(a) {
        T.call(this, a)
    };
    _.R(RC, T);
    var SC = function(a) {
        var b = new RC;
        return Ec(b, 1, a)
    };
    var TC = function(a) {
        T.call(this, a)
    };
    _.R(TC, T);
    var qf = new function(a, b, c) {
        this.j = b;
        this.m = c
    }(function(a) {
        return cd(RC, a)
    }, function(a) {
        return cd(TC, a)
    }, 4);
    var nf = function(a) {
        return !!a && "function" === typeof a.openConsoleTab && "function" === typeof a.attachOverlay
    };
    var sf = function(a) {
        T.call(this, a)
    };
    _.R(sf, T);
    var rf = function() {
        this.j = _.u(Array, "from").call(Array, {
            length: 1E3
        });
        this.m = 0
    };
    rf.prototype.send = function(a) {
        this.j instanceof MessagePort ? this.j.postMessage(a.X()) : (this.j[this.m] = a, this.m = (this.m + 1) % 1E3)
    };
    var UC = S(["https://www.googletagservices.com/console/host/host.js"]),
        VC = S(["https://www.googletagservices.com/console/panel/index.html"]),
        WC = S(["https://www.googletagservices.com/console/overlay/index.html"]),
        XC = {
            Fe: v(UC),
            ah: v(VC),
            Zg: v(WC)
        };
    var pf = {
        Cd: document.body,
        be: XC
    };
    var uf = new w.Map;
    var YC = {},
        xf = (YC.companion_ads = "companionAds", YC.content = "content", YC.publisher_ads = "pubads", YC),
        Rh = {
            wg: "rewardedSlotReady",
            vg: "rewardedSlotGranted",
            ug: "rewardedSlotClosed",
            xg: "slotAdded",
            Ag: "slotRequested",
            Bg: "slotResponseReceived",
            zg: "slotRenderEnded",
            yg: "slotOnload",
            Cg: "slotVisibilityChanged",
            qg: "impressionViewable"
        };
    var Sf = function() {
        Tw.call(this, _.E(Tf) || _.E(Mv) ? 1 : 0, _.r);
        this.A = 0;
        var a = _.E(Tf) || _.E(Mv);
        _.r.google_measure_js_timing = a || _.r.google_measure_js_timing
    };
    _.R(Sf, Tw);
    var Ag = function() {
        this.j = new w.Map
    };
    var ZC = function() {
            this.m = {};
            this.j = new BC;
            this.A = new w.Map;
            this.j.setCorrelator($t());
            _.We(36) && x(this.j, 15, !0)
        },
        $C = function(a) {
            var b = Lf(),
                c = a.getDomId();
            if (c && !b.m.hasOwnProperty(c)) {
                var d = _.C(Ag),
                    e = ++_.C(Sf).A;
                d.j.set(c, e);
                x(a, 20, e);
                b.m[c] = a
            }
        },
        Lm = function(a, b) {
            var c;
            return null != (c = a.m[b]) ? c : null
        },
        Lf = function() {
            return _.C(ZC)
        };
    var aD = {
            Cd: document.body,
            be: XC
        },
        Of = function() {
            var a = void 0 === a ? aD : a;
            var b = void 0 === b ? document.URL : b;
            this.A = a;
            this.url = b;
            this.m = !1
        },
        Nf;
    Of.prototype.initialize = function() {
        if (null !== ii(this.url, "googtime") && !this.j) try {
            this.j = tf(function() {}, this.A)
        } catch (c) {
            var a, b;
            null == (a = console) || null == (b = a.error) || b.call(a, c)
        }
    };
    Of.prototype.sendMessage = function(a, b, c, d) {
        a = NC(MC(LC(new KC, a), Ff(b)), c.map(function(e) {
            return Ff(e)
        }));
        d && x(a, 4, d);
        d = QC(a);
        d = SC(d);
        this.j.send(d)
    };
    var Pf = function(a, b) {
        var c = Nf;
        return function() {
            var d = Ia.apply(0, arguments);
            if (c.j && !c.m) {
                c.m = !0;
                try {
                    c.sendMessage(a, this, d, Error().stack)
                } catch (g) {
                    var e, f;
                    null == (e = console) || null == (f = e.error) || f.call(e, g)
                } finally {
                    c.m = !1
                }
            }
            return b.apply(this, d)
        }
    };
    var cD;
    _.bD = function(a) {
        this.context = a
    };
    cD = function(a, b) {
        b.catch(function(c) {
            c = c ? c : "unknown rejection";
            Uf(a.context, 963, c instanceof Error ? c : Error(String(c)))
        })
    };
    var dD = Ig(Eg);
    var mh = ["auto", "inherit", "100%"],
        nh = mh.concat(["none"]);
    var Sk = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        kh(a, function(e) {
            return d = lh(e, b, 10, 10)
        }, c);
        return d
    };
    var eD = function(a, b, c, d, e, f) {
        this.A = _.fu(a);
        this.m = _.fu(b);
        this.H = c;
        this.j = _.fu(d);
        this.C = e;
        this.l = f
    };
    eD.prototype.X = function() {
        return JSON.stringify({
            windowCoords_t: this.A.top,
            windowCoords_r: this.A.right,
            windowCoords_b: this.A.bottom,
            windowCoords_l: this.A.left,
            frameCoords_t: this.m.top,
            frameCoords_r: this.m.right,
            frameCoords_b: this.m.bottom,
            frameCoords_l: this.m.left,
            styleZIndex: this.H,
            allowedExpansion_t: this.j.top,
            allowedExpansion_r: this.j.right,
            allowedExpansion_b: this.j.bottom,
            allowedExpansion_l: this.j.left,
            xInView: this.C,
            yInView: this.l
        })
    };
    var fD = function(a) {
        var b = window,
            c = b.screenX || b.screenLeft || 0,
            d = b.screenY || b.screenTop || 0;
        b = new _.eu(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
        c = ru(a);
        d = _.Ne(_.Oe, a);
        var e = new gu(c.x, c.y, d.width, d.height);
        c = hu(e);
        d = String(Me(a, "zIndex"));
        var f = new _.eu(0, Infinity, Infinity, 0);
        for (var g = tt(a), h = g.j.body, k = g.j.documentElement, l = yt(g.j); a = qu(a);)
            if (!(_.Lq && 0 == a.clientWidth || Oq && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != Me(a, "overflow")) {
                var m = ru(a),
                    n = new _.vg(a.clientLeft, a.clientTop);
                m.x += n.x;
                m.y += n.y;
                f.top = Math.max(f.top, m.y);
                f.right = Math.min(f.right, m.x + a.clientWidth);
                f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
                f.left = Math.max(f.left, m.x)
            }
        a = l.scrollLeft;
        l = l.scrollTop;
        f.left = Math.max(f.left, a);
        f.top = Math.max(f.top, l);
        g = g.j;
        g = _.xt(g.parentWindow || g.defaultView || window);
        f.right = Math.min(f.right, a + g.width);
        f.bottom = Math.min(f.bottom, l + g.height);
        l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new gu(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? iu(e, f) : null;
        g = a = 0;
        l && !(new _.yg(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
        l = new _.eu(0, 0, 0, 0);
        if (h = f)(e = iu(e, f)) ? (k = hu(f), m = hu(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
        h && (l = new _.eu(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
        return new eD(b, c, d, l, a, g)
    };
    var gD = function(a) {
        this.H = a;
        this.C = null;
        this.D = this.status = 0;
        this.m = null;
        this.Fa = "sfchannel" + a
    };
    var hD = function(a) {
        this.j = a
    };
    hD.prototype.X = function() {
        return JSON.stringify(this.j)
    };
    var iD = function(a, b) {
        this.cc = a;
        this.ec = b;
        this.m = this.j = !1
    };
    iD.prototype.X = function() {
        return JSON.stringify({
            expandByOverlay: this.cc,
            expandByPush: this.ec,
            readCookie: this.j,
            writeCookie: this.m
        })
    };
    var jD = function(a, b, c, d, e, f, g, h, k) {
        h = void 0 === h ? [] : h;
        this.m = a;
        this.A = b;
        this.H = c;
        this.permissions = d;
        this.metadata = e;
        this.C = f;
        this.Kb = g;
        this.hostpageLibraryTokens = h;
        this.j = "";
        this.tb = void 0 === k ? "" : k
    };
    jD.prototype.X = function() {
        var a = {};
        a = (a.uid = this.m, a.hostPeerName = this.A, a.initialGeometry = this.H.X(), a.permissions = this.permissions.X(), a.metadata = this.metadata.X(), a.reportCreativeGeometry = this.C, a.isDifferentSourceWindow = this.Kb, a.goog_safeframe_hlt = fy(this.hostpageLibraryTokens), a);
        this.j && (a.sentinel = this.j);
        this.tb && (a.pbjsAdConfig = this.tb);
        return JSON.stringify(a)
    };
    var kD = function(a, b) {
        this.j = a;
        this.A = b
    };
    kD.prototype.X = function(a) {
        this.A && a && (a.sentinel = this.A);
        return JSON.stringify(a)
    };
    var lD = function(a, b, c) {
        kD.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.R(lD, kD);
    lD.prototype.X = function() {
        return kD.prototype.X.call(this, {
            uid: this.j,
            version: this.version
        })
    };
    var mD = function(a, b, c, d) {
        kD.call(this, a, void 0 === d ? "" : d);
        this.H = b;
        this.m = c
    };
    _.R(mD, kD);
    mD.prototype.X = function() {
        return kD.prototype.X.call(this, {
            uid: this.j,
            initialWidth: this.H,
            initialHeight: this.m
        })
    };
    var nD = function(a, b, c) {
        kD.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.R(nD, kD);
    nD.prototype.X = function() {
        return kD.prototype.X.call(this, {
            uid: this.j,
            description: this.description
        })
    };
    var oD = function(a, b, c, d) {
        kD.call(this, a, void 0 === d ? "" : d);
        this.m = b;
        this.push = c
    };
    _.R(oD, kD);
    oD.prototype.X = function() {
        return kD.prototype.X.call(this, {
            uid: this.j,
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        })
    };
    var pD = function(a, b) {
        kD.call(this, a, void 0 === b ? "" : b)
    };
    _.R(pD, kD);
    pD.prototype.X = function() {
        return kD.prototype.X.call(this, {
            uid: this.j
        })
    };
    var qD = function(a, b, c) {
        kD.call(this, a, void 0 === c ? "" : c);
        this.H = b
    };
    _.R(qD, kD);
    qD.prototype.X = function() {
        var a = {
            uid: this.j,
            newGeometry: this.H.X()
        };
        return kD.prototype.X.call(this, a)
    };
    var rD = function(a, b, c, d, e, f) {
        qD.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.m = d;
        this.push = e
    };
    _.R(rD, qD);
    rD.prototype.X = function() {
        var a = {
            uid: this.j,
            success: this.success,
            newGeometry: this.H.X(),
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        };
        this.A && (a.sentinel = this.A);
        return JSON.stringify(a)
    };
    var sD = function(a, b, c, d) {
        kD.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.R(sD, kD);
    sD.prototype.X = function() {
        return kD.prototype.X.call(this, {
            uid: this.j,
            width: this.width,
            height: this.height
        })
    };
    var tD = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Jc(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var uD = function() {
            this.j = []
        },
        wD = function(a, b, c, d, e) {
            a.j.push(new vD(b, c, d, e))
        },
        xD = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.m ? (c.A.style.removeProperty(c.j), c.A.style.setProperty(c.j, String(c.H), c.C)) : c.A.style[c.j] = c.H
            }
            a.j.length = 0
        },
        vD = function(a, b, c, d) {
            this.A = a;
            this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.H = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.C = this.m ? a.style.getPropertyPriority(this.j) : void 0;
            this.m ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
    var yD = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        zD = function() {
            var a = window,
                b = _.Xl(a);
            b && yD({
                label: "2",
                type: 9,
                value: b
            }, a)
        },
        AD = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = _.Xl(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && yD(_.u(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (_.Xl() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        };
    var FD = function(a) {
        gD.call(this, a.uniqueId);
        var b = this;
        this.o = a.Xg;
        this.L = 1 === a.size;
        this.aa = new iD(a.permissions.cc && !this.L, a.permissions.ec && !this.L);
        this.l = a.Zc;
        var c;
        this.ga = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.da = "file:" == c ? "*" : c + "//" + d;
        this.ha = !!a.Kb;
        c = !1 === a.ce ? "https:" : window.location.protocol;
        d = "//" + a.Bc + (_.E(uv) ? "-safeframe.usercontent.goog" : ".safeframe.googlesyndication.com");
        this.J = a.Bc ? d : "//tpc.googlesyndication.com";
        this.ca = a.jc ? "*" : c + this.J;
        this.M = !!a.ve;
        this.ea = BD(a);
        this.A = new uD;
        CD(this, a.Zc, a.size);
        this.C = this.U = fD(a.Zc);
        this.G = a.kf || "1-0-38";
        var e;
        this.Y = null != (e = a.qe) ? e : "";
        this.ia = a.tb;
        DD(this, a);
        this.oa = AD(412, function() {
            return ED(b)
        }, a.Aa);
        this.P = -1;
        this.I = 0;
        var f = AD(415, function() {
            b.j && (b.j.name = "", a.Jd && a.Jd(), _.ad(b.j, "load", f))
        }, a.Aa);
        _.Za(this.j, "load", f);
        this.Rc = AD(413, this.Rc, a.Aa);
        this.bd = AD(417, this.bd, a.Aa);
        this.cd = AD(419, this.cd, a.Aa);
        this.Mc = AD(411, this.Mc, a.Aa);
        this.Jc = AD(409, this.Jc, a.Aa);
        this.V = AD(410, this.V, a.Aa);
        this.Vc = AD(416, this.Vc, a.Aa);
        this.m = new NB(this.Fa, this.j.contentWindow, this.ca, !1);
        PB(this.m, "init_done", (0, _.Wp)(this.Rc, this));
        PB(this.m, "register_done", (0, _.Wp)(this.bd, this));
        PB(this.m, "report_error", (0, _.Wp)(this.cd, this));
        PB(this.m, "expand_request", (0, _.Wp)(this.Mc, this));
        PB(this.m, "collapse_request", (0, _.Wp)(this.Jc, this));
        PB(this.m, "creative_geometry_update", (0, _.Wp)(this.V, this));
        this.m.connect((0, _.Wp)(this.Vc, this))
    };
    _.R(FD, gD);
    var CD = function(a, b, c) {
            a.L ? (b.style.width = _.tu("100%", !0), b.style.height = _.tu("auto", !0)) : (b.style.width = _.tu(c.width, !0), b.style.height = _.tu(c.height, !0))
        },
        DD = function(a, b) {
            var c = b.jc,
                d = b.content,
                e = b.ce,
                f = b.Ib,
                g = b.size,
                h = void 0 === b.Jb ? "3rd party ad content" : b.Jb;
            b = b.hc;
            var k = {
                shared: {
                    sf_ver: a.G,
                    ck_on: Nw() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.G + ";" + d.length + ";" + d + (new jD(a.H, a.da, a.U, a.aa, new hD(k), a.L, a.ha, a.ga, a.ia)).X();
            e = !1 === e;
            if (a.M && g instanceof _.yg) {
                k = _.zt(_.st(a.l));
                var l = _.zt(_.st(a.l)).location.protocol + a.J;
                Qx || gi(k.document, Rx);
                Qx++;
                k.google_eas_queue = k.google_eas_queue || [];
                k.google_eas_queue.push({
                    a: f,
                    b: l,
                    c: g.width,
                    d: g.height,
                    e: "sf-gdn-exp-" + Qx,
                    f: void 0,
                    g: void 0,
                    h: void 0,
                    i: void 0
                })
            }
            k = g.width;
            g = g.height;
            a.L && (g = k = 0);
            l = {};
            f = (l.id = f, l.title = h, l.name = d, l.scrolling = "no", l.marginWidth = "0", l.marginHeight = "0", l.width = String(k), l.height = String(g), l["data-is-safeframe"] = "true", l);
            void 0 === c && (h = _.zt(_.st(a.l)), g = a.Y, d = a.J, (k = g) && (k = "?" + k), d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.G + "/html/container.html" + k), (k = tD(h)) && (d += (g ? "&" : "?") + "n=" + k), e = (e || Mt(h, !1) ? "https:" : "http:") + d, g = [], a.M && (d = Nt(h.location.href), h = g.push, d = [0 < d.length ? "google_debug" + (d ? "=" + d : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.H, "&p=", encodeURIComponent(_.r.document.location.protocol), "//", encodeURIComponent(_.r.document.location.host)].join(""), h.call(g, d)), g.length && (e += "#" + g.join("&")), f.src = e);
            null !== a.ea && (f.sandbox = a.ea);
            b && (f.allow = b);
            f.role = "region";
            f["aria-label"] = "Advertisement";
            f.tabIndex = "0";
            c ? (a.j = c, vt(a.j, f)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), f && va(c, f), b = _.$c("IFRAME"), vt(b, c), a.j = b);
            a.L && (a.j.style.minWidth = "100%");
            a.l.appendChild(a.j)
        };
    q = FD.prototype;
    q.Vc = function() {
        _.Za(window, "resize", this.oa);
        _.Za(window, "scroll", this.oa)
    };
    q.Rc = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !ph(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new lD(b.uid, b.version, b.sentinel);
            if (this.H !== c.j || this.G !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.o) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    q.bd = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !ph(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.H !== (new mD(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).j) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.o) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    q.cd = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !ph(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new nD(b.uid, b.description, b.sentinel);
            if (this.H !== c.j) throw Error("Wrong source container");
            var d;
            null == (d = this.o) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.o) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    q.Mc = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.D) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !ph(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new oD(b.uid, new _.eu(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.H !== c.j) throw Error("Wrong source container");
            if (!(0 <= c.m.top && 0 <= c.m.left && 0 <= c.m.bottom && 0 <= c.m.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.aa.ec || !c.push && this.aa.cc) {
                var e = c.m,
                    f = c.push,
                    g = this.C = fD(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) wD(this.A, h, "overflowX", "visible", "important"), wD(this.A, h, "overflowY", "visible", "important");
                    var k = hu(new gu(0, 0, this.C.m.getWidth(), this.C.m.getHeight()));
                    _.fa(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    wD(this.A, this.l, "position", "relative");
                    wD(this.A, this.j, "position", "absolute");
                    if (f) {
                        var l = k.getWidth();
                        wD(this.A, this.l, "width", l + "px");
                        var m = k.getHeight();
                        wD(this.A, this.l, "height", m + "px")
                    } else wD(this.A, this.j, "zIndex", "10000");
                    var n = k.getWidth();
                    wD(this.A, this.j, "width", n + "px");
                    var p = k.getHeight();
                    wD(this.A, this.j, "height", p + "px");
                    wD(this.A, this.j, "left", k.left + "px");
                    wD(this.A, this.j, "top", k.top + "px");
                    this.D = 2;
                    this.C = fD(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            this.m.send("expand_response", (new rD(this.H, a, this.C, c.m, c.push)).X());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (A) {
            var t;
            null == (t = this.o) || t.error("Invalid EXPAND_REQUEST message. Reason: " + A.message)
        }
    };
    q.Jc = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.D) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !ph(b.uid)) throw Error("Cannot parse JSON message");
            if (this.H !== (new pD(b.uid, b.sentinel)).j) throw Error("Wrong source container");
            xD(this.A);
            this.D = 0;
            this.j && (this.C = fD(this.j));
            this.m.send("collapse_response", (new qD(this.H, this.C)).X())
        } catch (d) {
            var c;
            null == (c = this.o) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var ED = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.I) {
            case 0:
                GD(a);
                a.P = window.setTimeout((0, _.Wp)(a.O, a), 1E3);
                a.I = 1;
                break;
            case 1:
                a.I = 2;
                break;
            case 2:
                a.I = 2
        }
    };
    FD.prototype.V = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !ph(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new sD(b.uid, b.width, b.height, b.sentinel);
            if (this.H !== c.j) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.L) d !== this.j.height && (this.j.height = d, ED(this));
            else {
                var e;
                null == (e = this.o) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.o) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    FD.prototype.O = function() {
        if (1 == this.status || 2 == this.status) switch (this.I) {
            case 1:
                this.I = 0;
                break;
            case 2:
                GD(this), this.P = window.setTimeout((0, _.Wp)(this.O, this), 1E3), this.I = 1
        }
    };
    var GD = function(a) {
            a.C = fD(a.j);
            a.m.send("geometry_update", (new qD(a.H, a.C)).X())
        },
        BD = function(a) {
            var b = null;
            a.Vd && (b = a.Vd);
            return null == b ? null : b.join(" ")
        },
        HD = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        ID = ["allow-top-navigation"],
        JD = ["allow-same-origin"],
        KD = Qt([].concat(_.Sc(HD), _.Sc(ID)));
    Qt([].concat(_.Sc(HD), _.Sc(JD)));
    Qt([].concat(_.Sc(HD), _.Sc(ID), _.Sc(JD)));
    var LD = S(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        MD = S(["https://secureframe.doubleclick.net/container.html"]),
        ND = {
            Re: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Nb) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Nb)) throw new RangeError("Invalid subdomain: " + a.Nb);
                return a.wf ? Ja("https://" + a.Nb + "-safeframe.usercontent.goog/safeframe/" + a.version + "/html/container.html") : Ja("https://" + a.Nb + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            hh: function(a) {
                return v(LD, a)
            },
            gh: v(MD)
        };
    var qh = function(a, b) {
        try {
            kb(Kn(a, b))
        } catch (c) {}
    };
    var OD = function(a) {
        T.call(this, a)
    };
    _.R(OD, T);
    var PD = [OD, 4, Pr, 2, Pr, 1, Pr, 3, Pr, 5, Sr];
    var QD = [.05, .1, .2, .5],
        RD = [0, .5, 1],
        SD = function(a) {
            a = Ud(a);
            if (!a) return -1;
            try {
                var b = Wx(a.document);
                var c = new _.yg(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.yg(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        TD = function(a, b) {
            return 0 > a ? [] : Ae(QD, function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        VD = function(a) {
            this.C = a.F;
            this.A = a.eb;
            this.o = a.nb;
            this.m = null;
            this.H = a.Aa;
            this.j = UD(this);
            this.l = a.qf || !1
        };
    VD.prototype.getSlotId = function() {
        return this.m
    };
    var XD = function(a, b) {
            if (a.j) {
                if (null != a.m) {
                    try {
                        WD(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.H && a.H(c)
                    }
                    a.j && a.j.unobserve(a.A)
                }
                a.m = b;
                a.j.observe(a.A)
            }
        },
        UD = function(a) {
            var b = a.A.offsetWidth * a.A.offsetHeight,
                c = SD(a.C);
            b = [].concat(_.Sc(RD), _.Sc(TD(c, b)));
            ia(b);
            return _.r.IntersectionObserver ? new _.r.IntersectionObserver(function(d) {
                return YD(a, d)
            }, {
                threshold: b
            }) : new $n(function(d) {
                return YD(a, d)
            }, {
                threshold: b
            })
        },
        YD = function(a, b) {
            try {
                var c = SD(a.C);
                _.dq(b, function(d) {
                    a.l && WD(a, Math.round(d.time), d.boundingClientRect.width * d.boundingClientRect.height, d.intersectionRect.width * d.intersectionRect.height, c, d.isIntersecting)
                })
            } catch (d) {
                a.H && a.H(d)
            }
        },
        WD = function(a, b, c, d, e, f) {
            if (null == a.m) throw Error("Not Attached.");
            var g = new OD;
            c = x(g, 1, c);
            d = x(c, 2, d);
            e = x(d, 3, e);
            b = x(e, 4, b);
            f = x(b, 5, f);
            f = Jb(Tk(f, PD), 4);
            Uw(a.o, "1", 10, f, void 0, a.m)
        };
    var ZD = function(a, b) {
            this.j = a;
            this.m = b
        },
        $D = function(a) {
            if (a.j.frames.google_ads_top_frame) return !0;
            var b = Tt(a.j);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.m
                })
            }, !1);
            return !0
        };
    var Ah = function(a) {
        T.call(this, a)
    };
    _.R(Ah, T);
    var Bh = [1, 3];
    var Yc = {
        Lg: 0,
        Gg: 1,
        Eg: 2,
        Fg: 3,
        Kg: 4,
        Ig: 5,
        Jg: 6,
        Hg: 7
    };
    var aE = S(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        vh = v(aE);
    var bE = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        cE = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };
    var eE = function(a, b, c) {
        _.$v.call(this);
        var d = this;
        this.A = a;
        this.j = [];
        b && dE() && this.j.push(bE);
        c && this.j.push(cE);
        if (document.hasTrustToken && !_.E(Rv)) {
            var e = new w.Map;
            this.j.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.A ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof w.Map ? new w.Map([].concat(_.Sc(e), _.Sc(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof w.Map || (window.goog_tt_promise_map = new w.Map)
        }
    };
    _.R(eE, _.$v);
    var dE = function() {
            var a = void 0 === a ? window : a;
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        },
        jm = function(a) {
            a = void 0 === a ? window : a;
            return !a.PeriodicSyncManager
        },
        nm = function(a, b, c) {
            a = a.goog_tt_state_map;
            var d, e = [];
            b && (d = null == a ? void 0 : a.get(bE.issuerOrigin)) && e.push(d);
            c && (d = null == a ? void 0 : a.get(cE.issuerOrigin)) && e.push(d);
            return e
        },
        fE = function(a) {
            return _.E(Uv) ? !0 : a.some(function(b) {
                return b.hasRedemptionRecord
            })
        },
        gE = function() {
            var a = window,
                b = _.We(221),
                c = _.We(150);
            return b || ".google.ch" === c || "function" === typeof a.__tcfapi
        },
        hE = function(a) {
            var b = _.We(252);
            a = _.E(Uv) ? a.filter(function(c) {
                return 12 !== c.state
            }).map(function(c) {
                return c.issuerOrigin
            }) : a.filter(function(c) {
                return c.hasRedemptionRecord
            }).map(function(c) {
                return c.issuerOrigin
            });
            if (0 == a.length) return null;
            a = {
                type: "send-redemption-record",
                issuers: a,
                refreshPolicy: "none",
                signRequestData: _.E(Uv) ? "omit" : "include",
                includeTimestampHeader: !0,
                additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
            };
            !_.E(Uv) && b && 0 < _.u(Object, "keys").call(Object, b).length && (a.additionalSigningData = Xk(JSON.stringify(b), 3));
            return a
        },
        iE = function(a, b, c) {
            var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
            e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
        },
        jE = function() {
            var a = bE.issuerOrigin + bE.redemptionPath,
                b = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        issuer: bE.issuerOrigin,
                        refreshPolicy: "none"
                    }
                };
            iE(bE.issuerOrigin, 2);
            return window.fetch(a, b).then(function(c) {
                if (!c.ok) throw Error(c.status + ": Network response was not ok!");
                iE(bE.issuerOrigin, 6, !0)
            }).catch(function(c) {
                c && "NoModificationAllowedError" === c.name ? iE(bE.issuerOrigin, 6, !0) : iE(bE.issuerOrigin, 5)
            })
        },
        kE = function() {
            var a = bE.issuerOrigin + bE.issuancePath;
            iE(bE.issuerOrigin, 8);
            return window.fetch(a, {
                keepalive: !0,
                trustToken: {
                    type: "token-request"
                }
            }).then(function(b) {
                if (!b.ok) throw Error(b.status + ": Network response was not ok!");
                iE(bE.issuerOrigin, 10);
                return jE()
            }).catch(function(b) {
                if (b && "NoModificationAllowedError" === b.name) return iE(bE.issuerOrigin, 10), jE();
                iE(bE.issuerOrigin, 9)
            })
        },
        lE = function() {
            iE(bE.issuerOrigin, 13);
            return document.hasTrustToken(bE.issuerOrigin).then(function(a) {
                return a ? jE() : kE()
            })
        },
        mE = function() {
            iE(cE.issuerOrigin, 13);
            if (w.Promise) {
                var a = document.hasTrustToken(cE.issuerOrigin).then(function(e) {
                        return e
                    }).catch(function(e) {
                        return w.Promise.reject({
                            state: 19,
                            error: e
                        })
                    }),
                    b = cE.issuerOrigin + cE.redemptionPath,
                    c = {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "none"
                        }
                    };
                iE(cE.issuerOrigin, 16);
                a = a.then(function(e) {
                    return window.fetch(b, c).then(function(f) {
                        if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                        iE(cE.issuerOrigin, 18, !0)
                    }).catch(function(f) {
                        if (f && "NoModificationAllowedError" === f.name) iE(cE.issuerOrigin, 18, !0);
                        else {
                            if (e) return w.Promise.reject({
                                state: 17,
                                error: f
                            });
                            iE(cE.issuerOrigin, 17)
                        }
                    })
                }).then(function() {
                    return document.hasTrustToken(cE.issuerOrigin).then(function(e) {
                        return e
                    }).catch(function(e) {
                        return w.Promise.reject({
                            state: 19,
                            error: e
                        })
                    })
                }).then(function(e) {
                    var f = cE.issuerOrigin + cE.getStatePath;
                    iE(cE.issuerOrigin, 20);
                    return window.fetch(f + "?ht=" + e, {
                        trustToken: {
                            type: "send-redemption-record",
                            issuers: [cE.issuerOrigin]
                        }
                    }).then(function(g) {
                        if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                        iE(cE.issuerOrigin, 22);
                        return g.text().then(function(h) {
                            return JSON.parse(h)
                        })
                    }).catch(function(g) {
                        return w.Promise.reject({
                            state: 21,
                            error: g
                        })
                    })
                });
                var d = Cd(window);
                return a.then(function(e) {
                    var f = cE.issuerOrigin + cE.issuancePath;
                    return e && e.srqt && e.cs ? (iE(cE.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-request"
                        }
                    }).then(function(g) {
                        if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                        iE(cE.issuerOrigin, 25);
                        return e
                    }).catch(function(g) {
                        return w.Promise.reject({
                            state: 24,
                            error: g
                        })
                    })) : e
                }).then(function(e) {
                    if (e && e.srdt && e.cs) return iE(cE.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "refresh"
                        }
                    }).then(function(f) {
                        if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                        iE(cE.issuerOrigin, 28, !0)
                    }).catch(function(f) {
                        return w.Promise.reject({
                            state: 27,
                            error: f
                        })
                    })
                }).then(function() {
                    iE(cE.issuerOrigin, 29)
                }).catch(function(e) {
                    if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                        if ("number" === typeof e.state && e.error instanceof Error) {
                            iE(cE.issuerOrigin, e.state);
                            var f = _.Ad(Sv);
                            Math.random() <= f && qd({
                                state: e.state,
                                err: e.error.toString()
                            }, "dtt_err")
                        } else throw Error(e);
                    else throw e;
                })
            }
        },
        nE = function(a) {
            if (document.hasTrustToken && !_.E(Rv) && a.A) {
                var b = window.goog_tt_promise_map;
                if (b && b instanceof w.Map) {
                    var c = [];
                    if (a.j.some(function(e) {
                            return e.issuerOrigin === bE.issuerOrigin
                        })) {
                        var d = b.get(bE.issuerOrigin);
                        d || (d = lE(), b.set(bE.issuerOrigin, d));
                        c.push(d)
                    }
                    a.j.some(function(e) {
                        return e.issuerOrigin === cE.issuerOrigin
                    }) && (a = b.get(cE.issuerOrigin), a || (a = mE(), b.set(cE.issuerOrigin, a)), c.push(a));
                    if (0 < c.length && w.Promise && w.Promise.all) return w.Promise.all(c)
                }
            }
        };
    var oE = function() {
            this.id = "goog_" + ot++
        },
        pE = function(a) {
            _.$v.call(this);
            this.context = a;
            this.o = new w.Map
        };
    _.R(pE, _.$v);
    pE.prototype.H = function() {
        _.$v.prototype.H.call(this);
        this.o.clear()
    };
    var rE = function(a, b, c) {
            if (a.m) return function() {};
            var d = "string" === typeof b ? b : b.id,
                e, f, g = null != (f = null == (e = a.o.get(d)) ? void 0 : e.add(c)) ? f : new w.Set([c]);
            a.o.set(d, g);
            return function() {
                return void qE(a, b, c)
            }
        },
        Pn = function(a, b, c) {
            c = void 0 === c ? function() {
                return !0
            } : c;
            return new w.Promise(function(d) {
                var e = rE(a, b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        qE = function(a, b, c) {
            var d;
            return !(null == (d = a.o.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        };
    pE.prototype.dispatchEvent = function(a, b, c) {
        var d = this,
            e, f, g, h, k, l, m;
        return _.ab(function(n) {
            if (1 == n.j) {
                e = "string" === typeof a ? a : a.id;
                f = d.o.get(e);
                if (null == (g = f) || !g.size) return n.return();
                h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                    detail: c,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var p = document.createEvent("CustomEvent");
                    p.initCustomEvent(e, !0, !0, c);
                    return p
                }();
                k = {};
                l = _.z(f);
                m = l.next()
            }
            if (5 != n.j) {
                if (m.done) {
                    n.j = 0;
                    return
                }
                k.Sb = m.value;
                return bb(n, 0, 5)
            }
            _.Xf(d.context, b, function(p) {
                return function() {
                    d.o.has(e) && f.has(p.Sb) && p.Sb(h)
                }
            }(k), !0);
            k = {
                Sb: k.Sb
            };
            m = l.next();
            n.j = 2
        })
    };
    var sE = new oE,
        tE = new oE,
        uE = new oE,
        vE = new oE,
        wE = new oE,
        xE = new oE,
        yE = new oE,
        Qn = new oE,
        zE = new oE,
        AE = new oE;
    var BE, FE, JE, fm, Yl, EE, DE, CE, KE;
    BE = function() {
        this.j = new w.Map;
        this.o = 0;
        this.m = new w.Map;
        this.Kd = Cd(_.r);
        this.ac = null;
        this.H = 0;
        this.l = _.fn(function() {
            return void Rg("gpt-first-ad-request")
        });
        this.C = this.A = this.I = 0
    };
    FE = function(a, b) {
        var c = void 0 === c ? _.r : c;
        a.j.get(b) || (a.j.set(b, {
            ib: !0,
            Yc: "",
            ob: "",
            Td: 0,
            Tc: 0,
            Wc: [],
            Xc: [],
            fb: !1,
            xd: null
        }), _.Vm(b, function() {
            a.j.delete(b);
            CE(a, b)
        }), rE(b, tE, function(d) {
            var e = d.timeStamp;
            d = d.detail;
            var f = a.j.get(b);
            f.Yc = Q(d, 33) || "";
            f.fb = !0;
            DE(a, b, function() {
                f.Yc = ""
            });
            EE(a, b, function() {
                f.fb = !1
            });
            if (_.E(Wl) && !I(d, 8)) {
                var g;
                f.Tc = null != (g = null != e ? e : _.Xl(c)) ? g : 0
            }
        }), _.E(Zl) && Pn(b, wE).then(function(d) {
            d = d.timeStamp;
            a.j.get(b).xd = null != d ? d : _.Xl()
        }))
    };
    _.GE = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.ib) ? d : !1
    };
    _.HE = function(a, b) {
        if (a = a.j.get(b)) a.ib = !1
    };
    _.IE = function(a, b) {
        if (a = a.j.get(b)) a.ib = !0
    };
    JE = function(a, b) {
        if (!b.length) return [];
        var c = Te(b[0].getAdUnitPath());
        b.every(function(g) {
            return Te(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.z(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.z(e.value);
            e = f.next().value;
            (f = f.next().value.Yc) && Te(e.getAdUnitPath()) === c && !_.u(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    fm = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.ob) ? d : ""
    };
    Yl = function(a, b) {
        return (a = a.j.get(b)) ? a.Td - 1 : 0
    };
    EE = function(a, b, c) {
        (a = a.j.get(b)) && a.Wc.push(c)
    };
    DE = function(a, b, c) {
        (a = a.j.get(b)) && a.Xc.push(c)
    };
    CE = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.Xc.slice(), a.Xc.length = 0, a = _.z(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    KE = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.Wc.slice(), a.Wc.length = 0, a = _.z(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    BE.prototype.fb = function(a) {
        var b, c;
        return null != (c = null == (b = this.j.get(a)) ? void 0 : b.fb) ? c : !1
    };
    var ME = function(a, b, c) {
            a.j.get(b).jd = c;
            EE(a, b, function() {
                return void LE(a, b)
            })
        },
        LE = function(a, b) {
            var c;
            null == (c = a.j.get(b)) || delete c.jd
        };
    var xk = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var Z = function(a, b, c) {
        kx.call(this, b, void 0 === c ? 0 : c, _.E(ov));
        this.context = a
    };
    _.R(Z, kx);
    Z.prototype.P = function(a) {
        Uf(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var NE = function(a, b, c, d, e) {
        var f = null,
            g = _.Qf(a.context, b, e);
        _.Za(c, d, g) && (f = function() {
            return _.ad(c, d, g)
        }, _.Vm(a, f));
        return f
    };
    var OE = /(<head(\s+[^>]*)?>)/i,
        no = function(a, b, c, d, e) {
            Z.call(this, a, 665);
            this.B = V(this);
            this.l = X(this, b);
            this.o = Y(this, c);
            this.D = X(this, d);
            this.G = Y(this, e)
        };
    _.R(no, Z);
    no.prototype.j = function() {
        var a;
        if (0 === this.l.value.kind && null != (a = this.o.value) && Q(a, 1)) {
            a = this.l.value.sa;
            var b = !!this.G.value;
            b || Aa() || (a = a.replace(OE, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"));
            this.D.value && !b && (a = a.replace(OE, '$1<meta name="referrer" content="origin">'));
            this.B.j({
                kind: 0,
                sa: a
            })
        } else this.B.j(this.l.value)
    };
    var No = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 718);
        this.D = Y(this, c);
        this.l = Y(this, d);
        nx(this, e);
        this.G = X(this, f);
        this.o = X(this, g);
        this.J = X(this, h);
        this.M = Pn(b, zE)
    };
    _.R(No, Z);
    No.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.ab(function(e) {
            if (1 == e.j) {
                var f = !a.J.value;
                if (null == a.l.value || "height" !== a.D.value || f) return e.return();
                b = a.G.value;
                c = a.o.value;
                PE(c, !1);
                _.nu(c, "min-width", "100%");
                _.nu(b, "min-width", "100%");
                return bb(e, a.M, 2)
            }
            if (a.m) return e.return();
            d = b.contentDocument;
            if (!d) return e.return();
            f = d.body.offsetWidth;
            b.setAttribute("height", String(d.body.offsetHeight));
            b.setAttribute("width", String(f));
            PE(c, !0);
            e.j = 0
        })
    };
    var PE = function(a, b) {
        _.nu(a, "visibility", b ? "visible" : "hidden")
    };
    var Jo = function(a, b, c, d, e, f) {
        Z.call(this, a, 685);
        var g = this;
        this.slotId = b;
        this.F = c;
        this.l = Y(this, d);
        this.o = X(this, e);
        this.D = X(this, f);
        Pn(this.slotId, Qn, function(h) {
            return ku(g.F, h.detail)
        })
    };
    _.R(Jo, Z);
    Jo.prototype.j = function() {
        var a = this;
        if (!_.E(dv) && !this.D.value) {
            var b, c, d = null != (c = null == (b = this.l.value) ? void 0 : Q(b, 1)) ? c : "",
                e = lu(this.F, this.o.value, d);
            _.Vm(this, function() {
                try {
                    e()
                } catch (f) {
                    Uf(a.context, 493, f)
                }
            })
        }
    };
    var Kh = new w.Map,
        Jh = new w.Map;
    var Mh = function(a, b) {
        this.push = G(a, 76, b.push.bind(b))
    };
    vf(Mh, 2);
    var Oh = function(a, b) {
        b = void 0 === b ? [] : b;
        this.messageId = a;
        this.args = b
    };
    Oh.prototype.getMessageId = function() {
        return this.messageId
    };
    Oh.prototype.getMessageArgs = function() {
        return this.args
    };
    var QE = N(2),
        RE = N(3),
        SE = N(4),
        TE = N(5),
        UE = N(6),
        VE = N(12),
        WE = N(14),
        XE = N(16),
        YE = N(19),
        ZE = N(20),
        Mm = N(23),
        Nm = N(26),
        $E = N(28),
        aF = N(30),
        bF = N(31),
        cF = N(34),
        dF = N(35),
        eF = N(36),
        fF = N(38),
        gF = N(40),
        hF = N(48),
        iF = N(50),
        jF = N(60),
        kF = N(63),
        lF = N(64),
        mF = N(66),
        nF = N(68),
        oF = N(69),
        pF = N(70),
        qF = N(71),
        rF = N(78),
        sF = N(80),
        tF = N(82),
        uF = N(84),
        vF = N(85),
        wF = N(87),
        si = N(88),
        xF = N(92),
        yF = N(93),
        zF = N(99),
        AF = N(103),
        BF = N(104),
        CF = N(105),
        DF = N(106),
        EF = N(107),
        FF = N(108),
        GF = N(113),
        HF = N(114),
        IF = N(115),
        JF = N(116),
        KF = N(117),
        LF = N(118),
        MF = N(119),
        Mi = N(121),
        NF = N(122),
        OF = N(123),
        xn = N(125),
        PF = N(126),
        QF = N(127),
        hn = N(128),
        kn = N(144),
        RF = N(134),
        SF = N(135),
        TF = N(136),
        UF = N(137),
        VF = N(138),
        WF = N(139),
        XF = N(140),
        Mn = N(142),
        YF = N(143),
        ZF = N(145);
    var $F = function(a, b, c) {
        var d = this;
        this.addEventListener = G(a, 86, function(e, f) {
            if ("function" !== typeof f) return O(b, Qh("Service.addEventListener", [e, f])), d;
            var g = Sh(e);
            if (!g) return O(b, yF(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = G(a, 904, function(e, f) {
            var g = Sh(e);
            if ("function" === typeof f && g) return e = c.removeEventListener(g, f), _.E(Nu) ? void 0 : e;
            O(b, Qh("Service.removeEventListener", [e, f]));
            return _.E(Nu) ? void 0 : !1
        });
        this.getSlots = G(a, 573, function() {
            return c.A.map(function(e) {
                return e.j
            })
        });
        this.getSlotIdMap = G(a, 574, function() {
            for (var e = {}, f = _.z(c.A), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.j;
            return e
        });
        this.enable = G(a, 87, function() {
            return void c.enable()
        }, !0);
        this.getName = G(a, 575, function() {
            return c.getName()
        })
    };
    var Th = function(a, b, c) {
        $F.call(this, a, b, c);
        var d = this;
        this.set = G(a, 576, function(e, f) {
            c.set(e, f);
            return d
        });
        this.get = G(a, 577, function(e) {
            return c.get(e)
        });
        this.getAttributeKeys = G(a, 578, function() {
            return Ht(c.l)
        });
        this.display = G(a, 558, function(e, f, g, h) {
            return c.display(e, f, null != g ? g : "", null != h ? h : "")
        });
        this.notifyUnfilledSlots = G(a, 69, function(e) {
            c.ib && aG(c, bG(c, e))
        });
        this.refreshAllSlots = G(a, 60, function() {
            c.ib && aG(c)
        });
        this.setVideoSession = G(a, 61, function(e, f, g) {
            c.J = f;
            c.V = g;
            "number" === typeof e && x(Lf().j, 29, e)
        });
        this.getDisplayAdsCorrelator = G(a, 62, function(e) {
            return cG(c, void 0 === e ? "" : e)
        });
        this.getVideoStreamCorrelator = G(a, 63, function() {
            var e;
            return null != (e = Q(Lf().j, 29)) ? e : 0
        });
        this.isSlotAPersistentRoadblock = G(a, 64, function(e) {
            var f = _.u(c.A, "find").call(c.A, function(g) {
                return g.j === e
            });
            return !!f && dG(c, f)
        });
        this.onImplementationLoaded = G(a, 65, function() {
            c.j.info(hF("GPT CompanionAds"))
        });
        this.slotRenderEnded = G(a, 67, function(e, f, g) {
            var h = _.u(c.A, "find").call(c.A, function(k) {
                return k.j === e
            });
            return h && eG(c, h, f, g)
        });
        this.setRefreshUnfilledSlots = G(a, 59, function(e) {
            return c.setRefreshUnfilledSlots(e)
        })
    };
    _.R(Th, $F);
    vf(Th, 3);
    var Vh = function(a, b, c) {
        $F.call(this, a, b, c);
        this.setContent = G(a, 72, function(d, e) {
            var f = _.u(c.A, "find").call(c.A, function(g) {
                return g.j === d
            });
            if (_.E(gn)) O(b, kn(), f);
            else return !!f && c.setContent(f, e)
        })
    };
    _.R(Vh, $F);
    vf(Vh, 4);
    var fG = S(["https://console.googletagservices.com/pubconsole/loader.js"]),
        gG = S(["/pubconsole/loader.js"]),
        hi = v(fG);
    v(gG);
    var ki, ji = !1,
        ci = !1,
        ei = !1;
    var pn = function(a, b) {
        this.getAllEvents = G(a, 563, function() {
            return ci ? hG(b).slice() : []
        });
        this.getEventsBySlot = G(a, 565, function(c) {
            return ci ? iG(b, c).slice() : []
        });
        this.getEventsByLevel = G(a, 566, function(c) {
            return ci ? jG(b, c).slice() : []
        })
    };
    vf(pn, 5);
    var vi = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = Lf().j,
            h = Lm(Lf(), f.getDomId());
        this.set = G(a, 83, function(k, l) {
            "page_url" === k && l && (k = [pi(qi(new ni, k), [String(l)])], Dc(h, 3, k));
            return e
        });
        this.get = G(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (B = h.na(), _.u(B, "find")).call(B, function(n) {
                return oi(n) === k
            })) ? void 0 : Vb(l, 2)[0]) ? m : null
        });
        this.setClickUrl = G(a, 79, function(k) {
            "string" === typeof k ? h.setClickUrl(k) : O(b, Qh("Slot.setClickUrl", [k]), f);
            return e
        });
        this.setTargeting = G(a, 81, function(k, l) {
            ti(f, h, k, l, b);
            return e
        });
        this.updateTargetingFromMap = G(a, 85, function(k) {
            ui(f, h, k, b);
            return e
        });
        this.display = G(a, 78, function() {
            kG(d, f, Cg(g, Lf().m))
        });
        this.setTagForChildDirectedTreatment = G(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = Sl(g) || new Tl;
                l.setTagForChildDirectedTreatment(k);
                Ec(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = G(a, 567, function(k) {
            "boolean" === typeof k ? x(h, 12, k) : O(b, Qh("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = G(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = Sl(g) || new Tl;
                l.setTagForUnderAgeOfConsent(k);
                Ec(g, 25, l)
            }
            return e
        })
    };
    vf(vi, 6);
    var ok = function(a, b) {
        this.push = G(a, 932, function(c) {
            b.push(c)
        })
    };
    var yi = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5
        },
        zi = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var fp = function(a, b) {
            var c = this;
            a = void 0 === a ? Lf().j : a;
            b = void 0 === b ? _.r : b;
            this.C = "";
            this.j = this.m = null;
            this.l = this.o = this.A = !1;
            this.H = function() {
                return !1
            };
            var d = {},
                e = {},
                f = {};
            this.I = (f[qx] = (d[19] = function() {
                return !!I(a, 10)
            }, d[13] = function() {
                return Ia.apply(0, arguments).some(function(g) {
                    return 0 == c.C.lastIndexOf(g, 0)
                })
            }, d[12] = function() {
                return !!I(a, 6)
            }, d[11] = TB, d[15] = function(g) {
                return c.H(g)
            }, d[7] = function() {
                var g;
                return !(null == (g = b.crypto) || !g.subtle)
            }, d[48] = function() {
                return !!c.m
            }, d[51] = function() {
                return c.A
            }, d[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (g) {
                    return !1
                }
            }, d[67] = function() {
                return c.o
            }, d[68] = function() {
                return c.l
            }, d), f[rx] = (e[8] = function(g) {
                var h;
                return null != (h = pd(c.m, Number(g))) ? h : void 0
            }, e[10] = function(g) {
                return c.j ? og(g + c.j) % 1E3 : void 0
            }, e), f)
        },
        lG = function(a, b) {
            b && !a.j && (a.j = _.u(b.split(":"), "find").call(b.split(":"), function(c) {
                return 0 === c.indexOf("ID=")
            }) || null)
        };
    var Jj = function(a, b, c) {
        pE.call(this, a);
        this.slotId = b;
        this.j = c
    };
    _.R(Jj, pE);
    Jj.prototype.getSlotId = function() {
        return this.slotId
    };
    var am = "",
        Ei = null,
        Li = _.fn(function() {
            var a, b;
            null == (a = window.console) || null == (b = a.warn) || b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
        });
    var Wc = function(a, b, c, d) {
        pE.call(this, a);
        this.adUnitPath = b;
        this.eb = d;
        this.j = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.R(Wc, pE);
    q = Wc.prototype;
    q.getId = function() {
        return this.id
    };
    q.getAdUnitPath = function() {
        return this.adUnitPath
    };
    q.getName = function() {
        return this.adUnitPath
    };
    q.toString = function() {
        return this.getId()
    };
    q.getDomId = function() {
        return this.eb
    };
    var mG = function(a, b) {
        a.j = b
    };
    var nG = function(a, b) {
        this.getId = G(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = G(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = G(a, 595, function() {
            return b.getName()
        });
        this.toString = G(a, 596, function() {
            return b.toString()
        });
        this.getDomId = G(a, 597, function() {
            return b.getDomId()
        })
    };
    var oG = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        pG = function(a, b) {
            a.advertiserId = b
        },
        qG = function(a, b) {
            a.campaignId = b
        },
        rG = function(a, b) {
            a.yieldGroupIds = b
        },
        sG = function(a, b) {
            a.companyIds = b
        };
    var tG = function(a, b) {
        this.width = a;
        this.height = b
    };
    tG.prototype.getWidth = function() {
        return this.width
    };
    tG.prototype.getHeight = function() {
        return this.height
    };
    var cj = function(a, b, c) {
        var d = this,
            e = Lm(Lf(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.Vm(c, function() {
            e = new EC;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        rE(c, uE, function(n) {
            var p = n.detail;
            n = p.pd;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = G(a, 40, function(n, p) {
            if ("string" !== typeof n || "string" !== typeof p || void 0 === xk()[n]) return O(b, Qh("Slot.set", [n, p]), c), d;
            var t = (B = e.na(), _.u(B, "find")).call(B, function(A) {
                return oi(A) === n
            });
            t ? pi(t, [p]) : (t = qi(new ni, n), bc(t, 2, p), ri(e, 3, ni, t));
            return d
        });
        this.get = G(a, 41, function(n) {
            if ("string" !== typeof n) return O(b, Qh("Slot.get", [n]), c), null;
            var p = (B = e.na(), _.u(B, "find")).call(B, function(t) {
                return oi(t) === n
            });
            return (p = p && Vb(p, 2)) ? p[0] : null
        });
        this.getAttributeKeys = G(a, 42, function() {
            return e.na().map(function(n) {
                return oi(n)
            })
        });
        this.addService = G(a, 43, function(n) {
            n = Kh.get(n);
            if (!n) return O(b, Qh("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((B = Vb(e, 4), _.u(B, "includes")).call(B, p)) return b.info(VE(p, c.toString()), c), d;
            n.Sa(c, e);
            return d
        });
        this.defineSizeMapping = G(a, 44, function(n) {
            try {
                var p = e;
                if (!Array.isArray(n)) throw new aj("Size mapping must be an array");
                var t = n.map(bj);
                Dc(p, 6, t)
            } catch (A) {
                n = A, Uf(a, 44, n), Wt("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = G(a, 45, function(n) {
            if ("string" !== typeof n) return O(b, Qh("Slot.setClickUrl", [n]), c), d;
            e.setClickUrl(n);
            return d
        });
        this.setCategoryExclusion = G(a, 46, function(n) {
            "string" !== typeof n || li(n) ? O(b, Qh("Slot.setCategoryExclusion", [n]), c) : ((B = Vb(e, 8), _.u(B, "includes")).call(B, n) || bc(e, 8, n), b.info(WE(n), c));
            return d
        });
        this.clearCategoryExclusions = G(a, 47, function() {
            x(e, 8, ir);
            b.info(XE(), c);
            return d
        });
        this.getCategoryExclusions = G(a, 48, function() {
            return Vb(e, 8).slice()
        });
        this.setTargeting = G(a, 49, function(n, p) {
            ti(c, e, n, p, b);
            return d
        });
        this.updateTargetingFromMap = G(a, 649, function(n) {
            ui(c, e, n, b);
            return d
        });
        this.clearTargeting = G(a, 50, function(n) {
            if (void 0 === n) return Dc(e, 9), b.info(YE(c.getAdUnitPath()), c), d;
            var p = fc(e, ni, 9),
                t = _.u(p, "findIndex").call(p, function(A) {
                    return oi(A) === n
                });
            if (0 > t) return O(b, uF(n, c.getAdUnitPath()), c), d;
            p.splice(t, 1);
            Dc(e, 9, p);
            b.info(AF(n, c.getAdUnitPath()), c);
            return d
        });
        this.getTargeting = G(a, 51, function(n) {
            if ("string" !== typeof n) return O(b, Qh("Slot.getTargeting", [n]), c), [];
            var p = (B = fc(e, ni, 9), _.u(B, "find")).call(B, function(t) {
                return oi(t) === n
            });
            return p ? Vb(p, 2).slice() : []
        });
        this.getTargetingKeys = G(a, 52, function() {
            return fc(e, ni, 9).map(function(n) {
                return oi(n)
            })
        });
        this.setCollapseEmptyDiv = G(a, 53, function(n, p) {
            p = void 0 === p ? !1 : p;
            if ("boolean" !== typeof n || "boolean" !== typeof p) return O(b, Qh("Slot.setCollapseEmptyDiv", [n, p]), c), d;
            x(e, 10, n);
            x(e, 11, n && p);
            Yg("gpt_ced", function(t) {
                M(t, "sc", I(e, 11) ? "t" : "f");
                M(t, "level", "slot");
                dh(t, a)
            });
            p && !n && O(b, ZE(c.toString()), c);
            return d
        });
        this.getAdUnitPath = G(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = G(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = G(a, 55, function(n) {
            if ("boolean" !== typeof n) return O(b, Qh("Slot.setForceSafeFrame", [String(n)]), c), d;
            x(e, 12, n);
            return d
        });
        this.setSafeFrameConfig = G(a, 56, function(n) {
            var p = Oi(b, n);
            if (!p) return b.error(Qh("Slot.setSafeFrameConfig", [n]), c), d;
            Ec(e, 13, p);
            return d
        });
        rE(c, tE, function(n) {
            n = n.detail;
            if (I(n, 8)) g = null;
            else {
                g = new oG;
                var p = !!I(n, 9);
                g.isBackfill = p;
                var t = Vb(n, 15),
                    A = Vb(n, 16);
                t.length && A.length && (g.sourceAgnosticCreativeId = t[0], g.sourceAgnosticLineItemId = A[0], p || (g.creativeId = t[0], g.lineItemId = A[0], (p = Vb(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
                Vb(n, 17).length && pG(g, Vb(n, 17)[0]);
                Vb(n, 18).length && qG(g, Vb(n, 18)[0]);
                Vb(n, 19).length && rG(g, Vb(n, 19));
                Vb(n, 20).length && sG(g, Vb(n, 20));
                n = Wb(n).map(function(y) {
                    return Kb(y)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = G(a, 355, function() {
            return g
        });
        this.getName = G(a, 170, function() {
            b.error(YF());
            var n = new di("slot_get_name");
            dh(n, a);
            fi(n);
            return c.getAdUnitPath()
        });
        var m = new nG(a, c);
        this.getSlotId = G(a, 579, function() {
            return m
        });
        this.getServices = G(a, 580, function() {
            return Vb(e, 4).map(function(n) {
                return yf(n)
            })
        });
        this.getSizes = G(a, 581, function(n, p) {
            var t, A;
            return null != (A = null == (t = jg(e, n, p)) ? void 0 : t.map(function(y) {
                return I(y, 3) ? "fluid" : new tG(y.getWidth(), y.getHeight())
            })) ? A : null
        });
        this.getClickUrl = G(a, 582, function() {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = G(a, 583, function() {
            for (var n = {}, p = _.z(fc(e, ni, 9)), t = p.next(); !t.done; t = p.next()) t = t.value, oi(t) && (n[oi(t)] = Vb(t, 2));
            return n
        });
        this.getOutOfPage = G(a, 584, function(n) {
            return "number" === typeof n ? qj(e) === n : 0 !== qj(e)
        });
        this.getCollapseEmptyDiv = G(a, 585, function() {
            return Pi(e, 10) ? I(e, 10) : null
        });
        this.getDivStartsCollapsed = G(a, 586, function() {
            return Pi(e, 11) ? I(e, 11) : null
        });
        rE(c, vE, function(n) {
            h = n.detail.re
        });
        this.getContentUrl = G(a, 587, function() {
            return h()
        });
        this.getFirstLook = G(a, 588, function() {
            Wt("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        rE(c, tE, function(n) {
            var p;
            k = null != (p = n.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = G(a, 591, function() {
            return k
        });
        this.getHtml = G(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        })
    };
    vf(cj, 8);
    var uG = function() {
            this.m = [];
            this.hostpageLibraryTokens = [];
            this.j = {}
        },
        vG = function(a, b) {
            if (!_.u(a.m, "includes").call(a.m, b) && (B = [1, 2, 3], _.u(B, "includes")).call(B, b)) {
                var c;
                if (c = _.E(rv) ? dy[b] : by[b]) {
                    var d = b + "_hostpage_library";
                    if (c = gi(document, c)) c.id = d
                }
                a.m.push(b);
                b = new ey(b);
                a.hostpageLibraryTokens.push(b);
                a = Xe();
                a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                a.hostpageLibraryTokens[b.j] = b.m
            }
        },
        wG = function(a, b, c) {
            var d;
            a.j[b] = null != (d = a.j[b]) ? d : new w.Set;
            a.j[b].add(c)
        },
        xG = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.u(c, "values").call(c)) ? d : [];
            return [].concat(_.Sc(a))
        };
    var yG = {},
        ej = (yG[64] = RF, yG[134217728] = SF, yG[32768] = TF, yG[536870912] = UF, yG[8] = VF, yG[512] = WF, yG[1048576] = XF, yG[4194304] = ZF, yG);
    var zG = _.fn(function() {
            Wt("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        Cj = function() {
            this.j = new w.Map;
            this.fa = new w.Set;
            _.C(fp).H = Dj
        };
    Cj.prototype.add = function(a, b, c, d, e) {
        var f = this;
        e = void 0 === e ? {} : e;
        var g = void 0 === e.eb ? void 0 : e.eb,
            h = void 0 === e.format ? 0 : e.format;
        e = void 0 === e.Md ? !1 : e.Md;
        var k = Bj(h);
        if (k) return Yg("gpt_pla_ns", function(n) {
            M(n, "iu", c);
            M(n, "f", null != h ? h : "");
            M(n, "nsr", k);
            dh(n, a)
        }), fj(b, k, h, c), {};
        e && zG();
        e = this.j.get(c) || Number(e);
        var l;
        b = null != (l = AG(a, b, c, e, d, g || "gpt_unit_" + c + "_" + e)) ? l : {};
        l = b.Ra;
        var m = b.slotId;
        b = b.Lc;
        if (!m) return {
            Lc: b
        };
        this.j.set(c, e + 1);
        this.fa.add(m);
        _.Vm(m, function() {
            return void f.fa.delete(m)
        });
        wC(c);
        return {
            slotId: m,
            Ra: l
        }
    };
    var sn = function(a) {
            return xG(_.C(uG), a).map(function(b) {
                var c;
                return null == (c = Qg(b, document)) ? void 0 : c.contentWindow
            }).filter(function(b) {
                return !!b
            })
        },
        bn = function(a) {
            a = _.z(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.za()
        },
        Pm = function(a, b) {
            a = _.z(a.fa);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c;
            return null
        },
        Ij = function(a, b, c, d, e, f) {
            f = void 0 === f ? !1 : f;
            return "string" === typeof c && 0 < c.length && d && (void 0 === e || "string" === typeof e) ? _.C(Cj).add(a, b, c, d, {
                eb: e,
                Md: f
            }) : {}
        },
        nn = function(a, b, c, d, e) {
            a = Ij(a, b, c, d, e);
            var f = a.slotId;
            if (f) return f.j;
            a.Lc || b.error(Qh("googletag.defineSlot", [c, d, e]));
            return null
        },
        BG = function(a, b) {
            var c = G(a, 74, function(d, e, f) {
                return nn(a, b, d, e, f)
            });
            wf("defineSlot", c);
            wf("defineUnit", c);
            wf("getWindowsThatCanCommunicateWithHostpageLibrary", G(a, 955, function(d) {
                return sn(d)
            }))
        },
        AG = function(a, b, c, d, e, f) {
            var g = Pm(_.C(Cj), f);
            if (g) return b.error($E(f, c, g.getAdUnitPath())), {
                Lc: !0
            };
            var h = new EC;
            FC(x(h, 1, c), f);
            e = $i(e);
            g = e.La;
            Dc(h, 5, e.Oc);
            null !== g && Ec(h, 16, g);
            $C(h);
            var k = new Wc(a, c, d, f);
            mG(k, dj(a, b, k));
            _.Vm(k, function() {
                var l = Lf(),
                    m = k.getDomId();
                delete l.m[m];
                l.A.delete(k);
                l = k.getAdUnitPath();
                l = Te(l);
                var n;
                m = (null != (n = cg.get(l)) ? n : 0) - 1;
                0 >= m ? cg.delete(l) : cg.set(l, m);
                b.info(zF(k.toString()), k);
                (n = Jh.get(k)) && Kh.delete(n);
                Jh.delete(k)
            });
            b.info(QE(k.toString()), k);
            rE(k, vE, function(l) {
                l = l.detail.hf;
                b.info(RE(k.getAdUnitPath()), k);
                Uw(_.C(Sf), "7", 9, Yl(_.C(BE), k), 0, l)
            });
            rE(k, tE, function(l) {
                var m = l.detail;
                b.info(SE(k.getAdUnitPath()), k);
                var n;
                l = _.C(Sf);
                var p = Q(h, 20);
                m = null != (n = m.getEscapedQemQueryId()) ? n : "";
                l.j && (_.r.google_timing_params = _.r.google_timing_params || {}, _.r.google_timing_params["qqid." + p] = m)
            });
            rE(k, uE, function() {
                return void b.info(TE(k.getAdUnitPath()), k)
            });
            rE(k, wE, function() {
                return void b.info(UE(k.getAdUnitPath()), k)
            });
            return {
                Ra: h,
                slotId: k
            }
        };
    var CG = new w.WeakMap,
        DG = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var Ej = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/,
        Gl = function(a, b) {
            b = void 0 === b ? DG : b;
            var c = ha(a),
                d = function(f) {
                    f = _.z(f);
                    f.next();
                    f = vp(f);
                    return b(c, f)
                },
                e = function(f) {
                    var g = _.z(f);
                    f = g.next().value;
                    g = vp(g);
                    return a.apply(f, g)
                };
            return function() {
                var f = Ia.apply(0, arguments),
                    g = this || _.r,
                    h = CG.get(g);
                h || (h = {}, CG.set(g, h));
                return Jq(h, [this].concat(_.Sc(f)), e, d)
            }
        }(function(a) {
            return (null == a ? 0 : a.src) ? Ej.test(a.src) ? 0 : 1 : 2
        }, function(a, b) {
            var c;
            return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
        });
    var EG = function(a) {
            var b = _.C(fp),
                c = [];
            a = _.z(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                d = d.value;
                b.C = d;
                var e = hp(9);
                1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
            }
            return c
        },
        FG = _.fn(function() {
            return void Wt("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        GG = _.fn(function() {
            return void Wt("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        HG = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    FG();
                    return !0
                },
                set: function() {
                    FG()
                },
                configurable: !0
            })
        },
        Lj = function(a, b, c) {
            $F.call(this, a, b, c);
            var d = this,
                e = Lf().j,
                f = Lf().m,
                g = !1;
            this.setTargeting = G(a, 1, function(h, k) {
                var l = null;
                "string" === typeof k ? l = [k] : Array.isArray(k) ? l = k : mi(k) && (l = _.u(Array, "from").call(Array, k));
                var m = "string" === typeof h && !li(h);
                l = l && pa(l);
                var n, p = null != (n = null == l ? void 0 : l.every(function(t) {
                    return "string" === typeof t
                })) ? n : !1;
                if (!m || !p) return O(b, Qh("PubAdsService.setTargeting", [h, k])), d;
                k = l;
                m = (B = fc(e, ni, 2), _.u(B, "find")).call(B, function(t) {
                    return oi(t) === h
                });
                if ("gpt-beta" === h) {
                    if (c.C) return O(b, DF(k.join())), d;
                    if (m) return O(b, EF(k.join())), d;
                    k = EG(k)
                }
                m ? pi(m, k) : (m = pi(qi(new ni, h), k), ri(e, 2, ni, m));
                b.info(si(h, k.join(), c.getName()));
                return d
            });
            this.clearTargeting = G(a, 2, function(h) {
                if (void 0 === h) return Dc(e, 2), b.info(BF(c.getName())), d;
                if ("gpt-beta" === h) return O(b, FF(h)), d;
                var k = fc(e, ni, 2),
                    l = _.u(k, "findIndex").call(k, function(m) {
                        return oi(m) === h
                    });
                if (0 > l) return O(b, uF(h, c.getName())), d;
                k.splice(l, 1);
                Dc(e, 2, k);
                b.info(tF(h, c.getName()));
                return d
            });
            this.getTargeting = G(a, 38, function(h) {
                if ("string" !== typeof h) return O(b, Qh("PubAdsService.getTargeting", [h])), [];
                var k = (B = fc(e, ni, 2), _.u(B, "find")).call(B, function(l) {
                    return oi(l) === h
                });
                return k ? Vb(k, 2).slice() : []
            });
            this.getTargetingKeys = G(a, 39, function() {
                return fc(e, ni, 2).map(function(h) {
                    return oi(h)
                })
            });
            this.setCategoryExclusion = G(a, 3, function(h) {
                if ("string" !== typeof h || li(h)) return O(b, Qh("PubAdsService.setCategoryExclusion", [h])), d;
                (B = Vb(e, 3), _.u(B, "includes")).call(B, h) || bc(e, 3, h);
                b.info(vF(h));
                return d
            });
            this.clearCategoryExclusions = G(a, 4, function() {
                x(e, 3, ir);
                b.info(wF());
                return d
            });
            this.disableInitialLoad = G(a, 5, function() {
                x(e, 4, !0);
                g || (g = !0, HG())
            });
            this.enableSingleRequest = G(a, 6, function() {
                if (c.C && !I(e, 6)) return O(b, jF("PubAdsService.enableSingleRequest")), !1;
                b.info(kF("single request"));
                x(e, 6, !0);
                return !0
            });
            this.enableAsyncRendering = G(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = G(a, 8, function() {
                Wt("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = G(a, 485, function(h) {
                var k = new qo;
                x(k, 1, 800);
                x(k, 2, 400);
                x(k, 3, 3);
                if (_.fa(h)) {
                    var l = h.fetchMarginPercent;
                    "number" === typeof l && (0 <= l ? x(k, 1, l) : -1 === l && Yb(k, 1));
                    l = h.renderMarginPercent;
                    "number" === typeof l && (0 <= l ? x(k, 2, l) : -1 === l && Yb(k, 2));
                    h = h.mobileScaling;
                    "number" === typeof h && (0 < h ? x(k, 3, h) : -1 === h && x(k, 3, 1))
                }
                Ec(e, 5, k)
            });
            this.setCentering = G(a, 9, function(h) {
                h = !!h;
                b.info(lF("centering", String(h)));
                x(e, 15, h)
            });
            this.definePassback = G(a, 10, function(h, k) {
                return (h = Kj(a, b, c, h, k)) && h.Nd
            });
            this.refresh = G(a, 11, function() {
                var h = Ia.apply(0, arguments),
                    k = _.z(h),
                    l = k.next().value;
                k = k.next().value;
                k = void 0 === k ? {} : k;
                l && !Array.isArray(l) || !_.fa(k) || k.changeCorrelator && "boolean" !== typeof k.changeCorrelator ? O(b, Qh("PubAdsService.refresh", h)) : (k && !1 === k.changeCorrelator || e.setCorrelator($t()), l = l ? Hj(l, c) : c.A, c.refresh(Cg(e, f), l) || O(b, Qh("PubAdsService.refresh", h)))
            });
            this.enableVideoAds = G(a, 12, function() {
                x(e, 21, !0);
                IG(c, e)
            });
            this.setVideoContent = G(a, 13, function(h, k) {
                JG(c, h, k, e)
            });
            this.collapseEmptyDivs = G(a, 14, function(h) {
                h = void 0 === h ? !1 : h;
                x(e, 11, !0);
                var k = !!h;
                x(e, 10, k);
                Yg("gpt_ced", function(l) {
                    M(l, "sc", k ? "t" : "f");
                    M(l, "level", "page");
                    dh(l, a)
                });
                b.info(rF(String(k)));
                return !!I(e, 11)
            });
            this.clear = G(a, 15, function(h) {
                if (Array.isArray(h)) return KG(c, e, f, Hj(h, c));
                if (void 0 === h) return KG(c, e, f, c.A);
                O(b, Qh("PubAdsService.clear", [h]));
                return !1
            });
            this.setLocation = G(a, 16, function(h) {
                if ("string" !== typeof h) return O(b, Qh("PubAdsService.setLocation", [h])), d;
                x(e, 8, h);
                return d
            });
            this.setCookieOptions = G(a, 17, function() {
                GG();
                return d
            });
            this.setTagForChildDirectedTreatment = G(a, 18, function(h) {
                if (1 !== h && 0 !== h) return O(b, NF("PubadsService.setTagForChildDirectedTreatment", Ni(h), "0,1")), d;
                var k = Sl(e) || new Tl;
                k.setTagForChildDirectedTreatment(h);
                Ec(e, 25, k);
                return d
            });
            this.clearTagForChildDirectedTreatment = G(a, 19, function() {
                var h = Sl(e);
                if (!h) return d;
                h.clearTagForChildDirectedTreatment();
                Ec(e, 25, h);
                return d
            });
            this.setPublisherProvidedId = G(a, 20, function(h) {
                h = String(h);
                b.info(lF("PPID", h));
                x(e, 16, h);
                return d
            });
            this.set = G(a, 21, function(h, k) {
                if ("string" !== typeof h || !h.length || void 0 === xk()[h] || "string" !== typeof k) return O(b, Qh("PubAdsService.set", [h, k])), d;
                var l = (B = e.na(), _.u(B, "find")).call(B, function(m) {
                    return oi(m) === h
                });
                l ? pi(l, [k]) : (l = qi(new ni, h), bc(l, 2, k), ri(e, 14, ni, l));
                b.info(eF(h, String(k), c.getName()));
                return d
            });
            this.get = G(a, 22, function(h) {
                if ("string" !== typeof h) return O(b, Qh("PubAdsService.get", [h])), null;
                var k = (B = e.na(), _.u(B, "find")).call(B, function(l) {
                    return oi(l) === h
                });
                return (k = k && Vb(k, 2)) ? k[0] : null
            });
            this.getAttributeKeys = G(a, 23, function() {
                return e.na().map(function(h) {
                    return oi(h)
                })
            });
            this.display = G(a, 24, function(h, k, l, m) {
                return void c.display(h, k, void 0 === l ? "" : l, void 0 === m ? "" : m)
            });
            this.updateCorrelator = G(a, 25, function() {
                Wt(Gj("update"));
                O(b, IF());
                e.setCorrelator($t());
                return d
            });
            this.defineOutOfPagePassback = G(a, 35, function(h) {
                h = Kj(a, b, c, h, [1, 1]);
                if (!h) return null;
                x(h.Ra, 15, 1);
                return h.Nd
            });
            this.setForceSafeFrame = G(a, 36, function(h) {
                if ("boolean" !== typeof h) return O(b, Qh("PubAdsService.setForceSafeFrame", [Ni(h)])), d;
                x(e, 13, h);
                return d
            });
            this.setSafeFrameConfig = G(a, 37, function(h) {
                var k = Oi(b, h);
                if (!k) return O(b, Qh("PubAdsService.setSafeFrameConfig", [h])), d;
                Ec(e, 18, k);
                return d
            });
            this.setRequestNonPersonalizedAds = G(a, 445, function(h) {
                if (0 !== h && 1 !== h) return O(b, NF("PubAdsService.setRequestNonPersonalizedAds", Ni(h), "0,1")), d;
                var k = Sl(e) || new Tl;
                x(k, 8, !!h);
                Ec(e, 25, k);
                return d
            });
            this.setTagForUnderAgeOfConsent = G(a, 447, function(h) {
                h = void 0 === h ? 2 : h;
                if (2 !== h && 0 !== h && 1 !== h) return O(b, NF("PubadsService.setTagForUnderAgeOfConsent", Ni(h), "2,0,1")), d;
                var k = Sl(e) || new Tl;
                k.setTagForUnderAgeOfConsent(h);
                Ec(e, 25, k);
                return d
            });
            this.getCorrelator = G(a, 27, function() {
                return String(e.getCorrelator())
            });
            this.getTagSessionCorrelator = G(a, 631, function() {
                return Cd(_.r)
            });
            this.getVideoContent = G(a, 30, function() {
                return LG(c, e)
            });
            this.getVersion = G(a, 568, function() {
                return a.Pa ? String(a.Pa) : a.ya
            });
            this.forceExperiment = G(a, 569, function(h) {
                return void c.forceExperiment(h)
            });
            this.setCorrelator = G(a, 28, function(h) {
                Wt(Gj("set"));
                O(b, HF());
                if (sg(window)) return d;
                if (!("number" === typeof h && isFinite(h) && 0 == h % 1 && 0 < h)) return O(b, Qh("PubadsService.setCorrelator", [Ni(h)])), d;
                e.setCorrelator(h);
                x(e, 27, !0);
                return d
            });
            this.markAsAmp = G(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = G(a, 571, function() {
                return !!I(e, 6)
            });
            this.setImaContent = G(a, 328, function(h, k) {
                Pi(e, 22) ? JG(c, h, k, e) : (x(e, 21, !0), IG(c, e), "string" === typeof h && x(e, 19, h), "string" === typeof k && x(e, 20, k))
            });
            this.getImaContent = G(a, 329, function() {
                return Pi(e, 22) ? LG(c, e) : c.C ? {
                    vid: Q(e, 19) || "",
                    cmsid: Q(e, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = G(a, 572, function() {
                return !!I(e, 4)
            });
            this.setPrivacySettings = G(a, 648, function(h) {
                if (!_.fa(h)) return O(b, Qh("PubAdsService.setPrivacySettings", [h])), d;
                var k = h.restrictDataProcessing,
                    l = h.childDirectedTreatment,
                    m = h.underAgeOfConsent,
                    n = h.limitedAds,
                    p = h.nonPersonalizedAds,
                    t = h.trafficSource,
                    A, y = null != (A = Sl(e)) ? A : new Tl;
                "boolean" === typeof p ? x(y, 8, p) : void 0 !== p && O(b, Mi("PubAdsService.setPrivacySettings", Ni(h), "nonPersonalizedAds", Ni(p)));
                "boolean" === typeof k ? x(y, 1, k) : void 0 !== k && O(b, Mi("PubAdsService.setPrivacySettings", Ni(h), "restrictDataProcessing", Ni(k)));
                if ("boolean" === typeof n) {
                    if (n && !I(y, 9) && (A = Fj(), a.pf && a.Mb)) {
                        k = a.kb;
                        p = gf(a);
                        var J = new Bw;
                        J = ac(J, 1, !0, !1);
                        A = ac(J, 2, A, !1);
                        p = kf(p, 11, lf, A);
                        Uc(k, p)
                    }
                    x(y, 9, n)
                } else void 0 !== n && O(b, Mi("PubAdsService.setPrivacySettings", Ni(h), "limitedAds", Ni(n)));
                void 0 !== m && (null === m ? y.setTagForUnderAgeOfConsent(2) : !1 === m ? y.setTagForUnderAgeOfConsent(0) : !0 === m ? y.setTagForUnderAgeOfConsent(1) : O(b, Mi("PubAdsService.setPrivacySettings", Ni(h), "underAgeOfConsent", Ni(m))));
                void 0 !== l && (null === l ? y.clearTagForChildDirectedTreatment() : !1 === l ? y.setTagForChildDirectedTreatment(0) : !0 === l ? y.setTagForChildDirectedTreatment(1) : O(b, Mi("PubAdsService.setPrivacySettings", Ni(h), "childDirectedTreatment", Ni(l))));
                void 0 !== t && (null === t ? Yb(y, 10) : (B = _.u(Object, "values").call(Object, zi), _.u(B, "includes")).call(B, t) ? x(y, 10, t) : O(b, Mi("PubAdsService.setPrivacySettings", Ni(h), "trafficSource", Ni(t))));
                Ec(e, 25, y);
                return d
            })
        };
    _.R(Lj, $F);
    vf(Lj, 7);
    var qn = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = _.Qf(a, 88, function(f, g) {
            var h;
            if (h = Ti(f)) h = Si(g) || Array.isArray(g) && g.every(Si);
            h ? d.push([f, g]) : (e.push([f, g]), O(b, Qh("SizeMappingBuilder.addSize", [f, g])));
            return c
        });
        this.build = _.Qf(a, 89, function() {
            if (e.length) return O(b, cF(Ni(e))), null;
            ma(d);
            return d
        })
    };
    var ho = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 856);
        this.K = b;
        this.slotId = c;
        this.Hb = V(this);
        this.Rb = V(this);
        this.pa = V(this);
        this.J = V(this);
        this.l = V(this);
        this.D = Y(this, d);
        this.G = Y(this, e);
        this.o = Y(this, f);
        this.M = Y(this, g);
        h && nx(this, h)
    };
    _.R(ho, Z);
    var MG = function(a) {
        dx(a.Hb, a.D.value);
        dx(a.Rb, a.G.value);
        dx(a.pa, a.o.value);
        cx(a.J);
        cx(a.l)
    };
    ho.prototype.j = function() {
        var a = this.M.value;
        if (_.E(Fu) && a) {
            var b = this.o.value;
            if (0 !== (null == b ? void 0 : b.kind) || b.sa.length) {
                var c;
                var d = null == (c = this.K.j.get(this.slotId)) ? void 0 : c.jd;
                var e = null == d ? void 0 : d.get(a);
                if (!e) throw new aj("Could not find bid with id: " + a);
                d = void 0 === e.height ? this.D.value : e.height;
                c = void 0 === e.width ? this.G.value : e.width;
                var f = e.adUrl,
                    g = e.ie,
                    h = void 0 === e.cpm ? 0 : e.cpm;
                if (1 !== e.format) MG(this);
                else {
                    this.J.j(e);
                    if (!g && !f) throw new aj("Could not find ad to render for bid id: " + a);
                    e = {
                        ad: Nj(g, h),
                        adUrl: Nj(f, h),
                        adId: a,
                        width: c,
                        height: d
                    };
                    g = btoa(JSON.stringify(e));
                    0 === (null == b ? void 0 : b.kind) ? (e = this.pa, f = e.j, b = b.sa.replace(new RegExp("{{GOOGLE_PBJS_AD_CONFIG}}".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), g.replace(/\$/g, "$$$$")), f.call(e, {
                        kind: 0,
                        sa: b
                    }), cx(this.l)) : (dx(this.pa, b), dx(this.l, g));
                    dx(this.Hb, d);
                    dx(this.Rb, c);
                    window.postMessage(JSON.stringify({
                        message: "Prebid Request",
                        adId: a
                    }), "*")
                }
                LE(this.K, this.slotId)
            } else MG(this)
        } else MG(this)
    };
    var NG = function(a, b, c, d, e, f) {
        Z.call(this, a, 975);
        this.l = b;
        this.o = c;
        this.pbjs = d;
        this.D = e;
        this.requestBidsConfig = f;
        this.B = new jx
    };
    _.R(NG, Z);
    NG.prototype.j = function() {
        Tj(this.D, this.pbjs, this.l, this.o, this.requestBidsConfig);
        this.B.notify()
    };
    var OG = function(a, b) {
        Z.call(this, a, 937, _.Ad(iv));
        this.o = V(this);
        this.l = V(this);
        this.D = V(this);
        this.G = V(this);
        this.J = mx(this, b)
    };
    _.R(OG, Z);
    OG.prototype.j = function() {
        var a = this.J.value;
        if (a) {
            var b = {},
                c = new w.Set,
                d;
            if (null == (d = hc(a, ss, 2)) ? 0 : pr(d, 2)) b["*"] = {
                tc: !0
            };
            d = _.z(fc(a, rs, 1));
            for (var e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                for (var f = _.z([Dh(e, 2), Dh(e, 1)].filter(function(n) {
                        return !!n
                    })), g = f.next(); !g.done; g = f.next()) b[g.value] = {
                    tc: pr(e, 3)
                };
                e = _.z(Vb(e, 4));
                for (f = e.next(); !f.done; f = e.next()) c.add(f.value)
            }
            dx(this.o, b);
            dx(this.l, [].concat(_.Sc(c)));
            var h, k;
            b = null == (h = hc(a, ss, 2)) ? void 0 : null == (k = hc(h, ms, 1)) ? void 0 : fc(k, os, 1);
            dx(this.D, (null == b ? 0 : b.length) ? b : null);
            var l, m;
            a = null == (l = hc(a, ss, 2)) ? void 0 : null == (m = hc(l, ms, 3)) ? void 0 : fc(m, os, 1);
            dx(this.G, (null == a ? 0 : a.length) ? a : null)
        } else cx(this.o), cx(this.l), cx(this.D), cx(this.G)
    };
    OG.prototype.L = function(a) {
        this.A(a)
    };
    OG.prototype.A = function() {
        cx(this.o);
        cx(this.l);
        cx(this.D)
    };
    var PG = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        QG = function(a, b, c, d, e, f, g, h, k, l, m) {
            Z.call(this, a, 920);
            this.l = b;
            this.R = e;
            this.Ja = l;
            this.K = m;
            this.B = V(this);
            this.M = X(this, c);
            this.J = new ix(d);
            this.o = Y(this, f);
            this.G = Y(this, g);
            this.O = Y(this, h);
            this.D = Y(this, k)
        };
    _.R(QG, Z);
    QG.prototype.j = function() {
        var a = this.J.value;
        RG(this) ? a && a.libLoaded ? "function" !== typeof a.getEvents ? (this.l.error(PF()), cx(this.B)) : (a = SG(this, a)) ? this.B.j(a) : this.B.j([]) : cx(this.B) : cx(this.B)
    };
    QG.prototype.L = function(a) {
        this.A(a)
    };
    QG.prototype.A = function(a) {
        this.l.error(QF(a.message));
        cx(this.B)
    };
    var SG = function(a, b) {
            var c = (0, b.getEvents)(),
                d = c.filter(function(g) {
                    var h = g.args;
                    return "auctionEnd" === g.eventType && h.auctionId
                }),
                e = !1,
                f = a.M.value.map(function(g) {
                    var h = new js,
                        k = function(gb) {
                            return gb === g.getDomId() || gb === g.getAdUnitPath()
                        },
                        l, m = null != (l = TG.get(g)) ? l : 0,
                        n;
                    l = null != (n = d.filter(function(gb) {
                        var yb, hd, hb;
                        return Number(null == (yb = gb.args) ? void 0 : yb.timestamp) > m && (null == (hd = gb.args) ? void 0 : null == (hb = hd.adUnitCodes) ? void 0 : _.u(hb, "find").call(hb, k))
                    })) ? n : [];
                    if (!l.length) return h;
                    var p;
                    n = null == (p = l.reduce(function(gb, yb) {
                        return Number(yb.args.timestamp) > Number(gb.args.timestamp) ? yb : gb
                    })) ? void 0 : p.args;
                    if (!n) return h;
                    var t = void 0 === n.bidderRequests ? [] : n.bidderRequests;
                    p = void 0 === n.bidsReceived ? [] : n.bidsReceived;
                    var A = n.auctionId;
                    n = n.timestamp;
                    if (!A || null == n || !t.length) return h;
                    TG.has(g) || _.Vm(g, function() {
                        return TG.delete(g)
                    });
                    TG.set(g, n);
                    n = ks(h);
                    Math.random() < _.Ad(Iu) && b.version && PG.test(b.version) && x(n, 6, b.version);
                    l = new w.Map;
                    var y = Ig(function() {
                            return nk(c, A)
                        }),
                        J = fc(a.R[g.getDomId()], ni, 9);
                    t = _.z(t);
                    for (var F = t.next(); !F.done; F = t.next()) {
                        var K = F.value;
                        F = K.bidderCode;
                        var H = K.timeout,
                            L = K.start,
                            W = {};
                        K = _.z(K.bids);
                        for (var P = K.next(); !P.done; W = {
                                yb: W.yb
                            }, P = K.next()) {
                            var aa = P.value;
                            W.yb = aa.bidId;
                            var ta = aa.transactionId;
                            P = aa.adUnitCode;
                            aa = aa.getFloor;
                            if (W.yb && k(P)) {
                                e = !0;
                                ck(n, g, P);
                                ta && !Pi(n, 4) && x(n, 4, ta);
                                Pi(n, 8) || x(n, 8, H);
                                var Oa = _.u(p, "find").call(p, function(gb) {
                                    return function(yb) {
                                        return yb.requestId === gb.yb
                                    }
                                }(W));
                                ta = Vj(n, Yj(new Zj, F));
                                ek(n, ta, P, a.G.value, a.O.value, aa);
                                L && a.D.value && _.E(Gu) && x(n, 7, a.D.value < L);
                                Oa ? (Xj(ta, 1), "number" === typeof Oa.timeToRespond && ak(ta, Oa.timeToRespond), P = Uj(Oa, l, J), Wj(ta, P)) : (P = y().get(W.yb)) && !P.Ed ? ak(Xj(ta, 2), Math.round(P.latency)) : (Xj(ta, 3), ak(ta, H))
                            }
                        }
                    }
                    var Ra;
                    (null == (Ra = b.getConfig) ? 0 : Ra.call(b).useBidCache) && bk(n, g, A, J, l, b);
                    ME(a.K, g, l);
                    return h
                });
            return e ? f : null
        },
        RG = function(a) {
            var b, c;
            return !!(null == (b = a.o.value) ? 0 : null == (c = b["*"]) ? 0 : c.tc) || a.Ja.split(",").some(function(d) {
                var e, f;
                return !!(null == (e = a.o.value) ? 0 : null == (f = e[d]) ? 0 : f.tc)
            })
        },
        TG = new w.Map;
    var go = function(a, b, c, d, e) {
        Z.call(this, a, 982);
        this.B = lx(this);
        this.o = Y(this, b);
        this.l = new ix(c);
        this.G = Y(this, d);
        this.D = Y(this, e)
    };
    _.R(go, Z);
    go.prototype.j = function() {
        var a = this,
            b;
        if (this.o.value && (null == (b = this.l.value) ? 0 : b.onEvent)) {
            b = {};
            for (var c = _.z(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), d = c.next(); !d.done; b = {
                    zb: b.zb,
                    Ub: b.Ub
                }, d = c.next()) b.zb = d.value, b.Ub = function(e) {
                return function(f) {
                    if (a.o.value === f.adId) {
                        var g = new di("hbm_brt");
                        dh(g, a.context);
                        M(g, "et", e.zb);
                        M(g, "sf", !!a.G.value);
                        var h;
                        M(g, "qqid", null != (h = a.D.value) ? h : "");
                        var k, l, m;
                        M(g, "bc", String(null != (m = null != (l = f.bidderCode) ? l : null == (k = f.bid) ? void 0 : k.bidder) ? m : ""));
                        fi(g, 1)
                    }
                }
            }(b), this.l.value.onEvent(b.zb, b.Ub), _.Vm(this, function(e) {
                return function() {
                    return void _.Xf(a.context, a.id, function() {
                        var f, g;
                        return void(null == (f = a.l.value) ? void 0 : null == (g = f.offEvent) ? void 0 : g.call(f, e.zb, e.Ub))
                    }, !0)
                }
            }(b))
        }
        this.B.notify()
    };
    go.prototype.A = function() {
        this.B.notify()
    };
    var UG = function(a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.l = e;
        this.requestBidsConfig = f;
        nx(this, b);
        nx(this, c)
    };
    _.R(UG, Z);
    UG.prototype.j = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
    };
    var VG = function(a, b, c) {
        Z.call(this, a, 981);
        this.l = b;
        this.requestBidsConfig = c;
        this.B = new jx
    };
    _.R(VG, Z);
    VG.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.l) ? void 0 : a.get("*")) ? b : _.Ad(Ju);
        c && (this.requestBidsConfig.timeout = c);
        this.B.notify()
    };
    var WG = function(a, b, c, d, e) {
        _.$v.call(this);
        this.j = a;
        this.A = b;
        this.C = c;
        this.l = d;
        this.pbjs = e
    };
    _.R(WG, _.$v);
    WG.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            _.E(Du) && (a.timeout = 1);
            var d = new Qd;
            _.Cm(this, d);
            if (_.E(Ku)) {
                var e = new VG(this.j, this.l, a);
                D(d, e);
                e = e.B
            } else e = new jx, e.notify();
            var f = new NG(this.j, this.A, this.C, this.pbjs, b, a);
            D(d, f);
            D(d, new UG(this.j, f.B, e, c, b, a));
            Rd(d)
        }
    };
    var XG = function(a, b, c, d, e, f) {
        Z.call(this, a, 951);
        this.F = window;
        this.D = X(this, b);
        this.o = Y(this, d);
        this.G = Y(this, e);
        this.l = Y(this, f);
        nx(this, c)
    };
    _.R(XG, Z);
    XG.prototype.j = function() {
        var a = this,
            b, c = (null == (b = this.o.value) ? void 0 : b.size) || _.Ad(Oj),
            d;
        b = (null == (d = this.l.value) ? void 0 : d.size) || _.Ad(Ju);
        var e = this.D.value,
            f;
        d = null != (f = Xe().pbjs_hooks) ? f : [];
        f = new WG(this.context, this.o.value, this.G.value, this.l.value, e);
        _.Cm(this, f);
        d = _.z(d);
        for (var g = d.next(); !g.done; g = d.next()) f.push(g.value);
        d = !!Xe().pbjs_hooks;
        if (c || b || d) Xe().pbjs_hooks = pk(this.context, f);
        !c && !b || d || (c = null == e ? void 0 : e.que, b = function() {
            var h;
            null == e || null == (h = e.requestBids) || h.before.call(a.F, function(k, l) {
                return Xe().pbjs_hooks.push({
                    context: a.F,
                    nextFunction: k,
                    requestBidsConfig: l
                })
            }, 0)
        }, (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(b) : null == c || c.unshift(b))
    };
    var Pk = null;
    var zl = 0,
        ul = new _.vg(-9, -9);
    var gm = 0;
    var YG = function(a) {
            this.j = a;
            this.A = [];
            this.m = "";
            this.H = new w.Set(Fi(vv));
            a = _.z(I(this.j.Fb.ba, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id adsid".split(" ") : []);
            for (var b = a.next(); !b.done; b = a.next()) this.H.add(b.value)
        },
        $G = function(a) {
            if (0 === a.j.lb.fa.length) return "";
            ZG(a);
            var b = a.j,
                c = b.Fb.ba,
                d, e;
            b = null != (e = null == (d = Sl(b.lb.N.W)) ? void 0 : I(d, 9)) ? e : !1;
            d = I(c, 8);
            a.m = b || d || !rd(c) ? "https://pagead2.googlesyndication.com/gampad/ads?" : "https://securepubads.g.doubleclick.net/gampad/ads?";
            c = a.A;
            if (_.E(bv))
                for (d = Math.random, e = c.length - 1; 0 < e; e--) {
                    b = Math.floor(d() * (e + 1));
                    var f = c[e];
                    c[e] = c[b];
                    c[b] = f
                }
            c = _.z(c);
            for (e = c.next(); !e.done; e = c.next()) {
                d = a;
                e = e.value;
                b = e.value;
                var g = e.options;
                f = void 0 === g.la ? "," : g.la;
                g = void 0 === g.va ? !1 : g.va;
                if (b = "object" !== typeof b ? null == b || !g && 0 === b ? null : encodeURIComponent(b) : Array.isArray(b) && b.length ? encodeURIComponent(b.join(f)) : null) "?" !== d.m[d.m.length - 1] && (d.m += "&"), d.m += e.Ld + "=" + b
            }
            return a.m
        },
        ZG = function(a) {
            var b = a.j,
                c = b.Fb,
                d = c.F,
                e = c.K,
                f = c.vd,
                g = c.context,
                h = c.ba,
                k = c.Ia;
            c = c.ja;
            var l = b.lb,
                m = l.N,
                n = l.Da,
                p = l.fa;
            l = l.Dd;
            var t = b.Od.zd,
                A = b.fd.Ka;
            b = b.kd.ld;
            var y = m.W,
                J = m.R,
                F = e.Kd;
            aH(a, Rl(a.j));
            aH(a, rm(a.j));
            aH(a, Cl(a.j));
            aH(a, qm(a.j));
            aH(a, new w.Map([
                ["eid", {
                    value: f
                }],
                ["debug_experiment_id", {
                    value: Pw().split(",")
                }]
            ]));
            aH(a, new w.Map([
                ["output", {
                    value: A
                }],
                ["gdfp_req", {
                    value: 1
                }],
                ["vrg", {
                    value: g.Pa ? String(g.Pa) : g.ya
                }],
                ["ptt", {
                    value: 17
                }],
                ["impl", {
                    value: I(y, 6) ? "fifs" : "fif"
                }]
            ]));
            aH(a, new w.Map([
                ["co", {
                    value: 0 !== kd(y, 24, 0) ? kd(y, 24, 0) : null,
                    options: {
                        va: !0
                    }
                }]
            ]));
            aH(a, Ul(y, h));
            f = p.map(function(K) {
                return J[K.getDomId()]
            });
            aH(a, em(p, f, l, e, k, m, d));
            aH(a, bm(p, m, d));
            aH(a, $l(e, p, l, d));
            aH(a, bl(J[p[0].getDomId()], k));
            aH(a, tk(p, J, sd(h, d)));
            aH(a, uk(f));
            aH(a, Hl(y, p, m, n, d));
            aH(a, fl(c, h, y, Jl(y.na()), d));
            aH(a, new w.Map([
                ["arp", {
                    value: Ih(d) ? 1 : null
                }],
                ["abxe", {
                    value: Kc(d.top) || Rt(d.IntersectionObserver) ? 1 : null
                }]
            ]));
            aH(a, new w.Map([
                ["expflags", {
                    value: _.We(253) ? Bi(Su) || null : null
                }]
            ]));
            aH(a, im(Jl(y.na()), d));
            aH(a, wl(m, kg(!0, d), d));
            aH(a, vl(y, p, d.document, J, k));
            aH(a, wk(p, e));
            aH(a, yk(p, m));
            aH(a, al(y, d));
            aH(a, Ol(d, e, p, t, y, k, J));
            aH(a, new w.Map([
                ["rumc", {
                    value: _.E(Mv) || _.C(Sf).j ? F : null
                }],
                ["rume", {
                    value: _.E(gv) ? 1 : null
                }]
            ]));
            aH(a, il(d));
            aH(a, yl(d));
            aH(a, Rk(p, d));
            aH(a, wm(p, J, d));
            aH(a, new w.Map([
                ["psts", {
                    value: JE(e, p)
                }]
            ]));
            aH(a, Kk(h, d));
            aH(a, new w.Map([
                ["js", {
                    value: _.E(Lu) ? Hw(d) : null
                }],
                ["ms", {
                    value: _.E(Lu) ? Iw(F.toString(), d) : null
                }]
            ]));
            aH(a, Al(p, d, m));
            aH(a, pm());
            aH(a, tl(p, J));
            aH(a, om(d));
            aH(a, new w.Map([
                ["topics", {
                    value: a.j.Zd.ae
                }]
            ]));
            aH(a, pl(p, sd(h, d)));
            aH(a, Vk(b))
        },
        bH = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.A.some(function(e) {
                return b === e.Ld
            });
            a.H.has(b) || null == c || a.A.push({
                Ld: b,
                value: c,
                options: d
            })
        },
        aH = function(a, b) {
            b = _.z(_.u(b, "entries").call(b));
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = _.z(c.value);
                c = d.next().value;
                d = d.next().value;
                bH(a, c, d.value, d.options)
            }
        };
    var eH = function(a, b) {
            var c = this;
            this.context = a;
            this.j = new w.Map;
            this.m = new w.Map;
            this.nb = _.C(Sf);
            window.performance && Rt(window.performance.now) && (_.Za(window, "DOMContentLoaded", _.Qf(a, 334, function() {
                for (var d = _.z(c.j), e = d.next(); !e.done; e = d.next()) {
                    var f = _.z(e.value);
                    e = f.next().value;
                    f = f.next().value;
                    cH(c, e, f) && c.j.delete(e)
                }
            })), rE(b, xE, function(d) {
                var e = d.detail;
                d = e.dd;
                e = e.R;
                return void dH(c, Pm(_.C(Cj), d), Q(e, 20))
            }), rE(b, yE, function(d) {
                var e = d.detail;
                d = e.dd;
                e = e.R;
                d = Pm(_.C(Cj), d);
                e = Q(e, 20);
                var f = c.m.get(d);
                null != f ? XD(f, e) : dH(c, d, e)
            }))
        },
        dH = function(a, b, c) {
            cH(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Vm(b, function() {
                return a.j.delete(b)
            }))
        },
        cH = function(a, b, c) {
            var d = Gg(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new VD({
                F: window,
                nb: a.nb,
                eb: d,
                Aa: function(e) {
                    return void Uf(a.context, 336, e)
                },
                qf: _.E(Mv)
            });
            if (!d.j) return !1;
            XD(d, c);
            a.m.set(b, d);
            EE(_.C(BE), b, function() {
                return void a.m.delete(b)
            });
            return !0
        };
    var fH = function(a) {
        this.m = a;
        this.A = this.j = 0
    };
    fH.prototype.push = function() {
        for (var a = _.z(Ia.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(w.globalThis), this.j++)
            } catch (c) {
                this.A++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.m.error(aF(String(c)))
            }
        }
        this.m.info(bF(String(this.j), String(this.A)));
        return this.j
    };
    var gH = function(a, b) {
        Z.call(this, a, 931);
        this.D = V(this);
        this.l = V(this);
        this.G = V(this);
        this.o = Y(this, b)
    };
    _.R(gH, Z);
    gH.prototype.j = function() {
        var a = _.Ad(Oj) || this.o.value,
            b = new w.Map;
        this.D.j(new w.Map);
        if (a) {
            var c;
            a = _.z(null != (c = this.o.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                c = c.value;
                var d = fc(c, ps, 1);
                1 === kd(d[0], 1, 0) ? d = tr(d[0]) : (d = d[0], d = Dh(d, dc(d, sr, 2)));
                c = ld(c, 2);
                var e = void 0;
                b.set(d, Math.min(null != (e = b.get(d)) ? e : Number.MAX_VALUE, c))
            }
        }
        this.l.j(b);
        this.G.j(Date.now())
    };
    var hH = function(a, b) {
        Z.call(this, a, 981);
        this.l = V(this);
        this.o = Y(this, b)
    };
    _.R(hH, Z);
    hH.prototype.j = function() {
        var a = new w.Map,
            b, c = _.z(null != (b = this.o.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = fc(b, ps, 1);
            1 === kd(d[0], 1, 0) ? d = tr(d[0]) : (d = d[0], d = Dh(d, dc(d, sr, 2)));
            a.set(d, ld(b, 2))
        }
        this.l.j(a)
    };
    var iH = function(a, b, c, d) {
        Z.call(this, a, 980);
        this.B = new jx;
        this.D = Y(this, b);
        _.E(kv) && (this.o = Y(this, c), this.l = Y(this, d))
    };
    _.R(iH, Z);
    iH.prototype.j = function() {
        var a;
        (B = _.u(Object, "entries").call(Object, null != (a = this.D.value) ? a : {}), _.u(B, "find")).call(B, function(f) {
            var g = _.z(f);
            f = g.next().value;
            g = g.next().value;
            return "*" !== f && (null == g ? void 0 : g.tc)
        }) && (_.C(fp).l = !0);
        hp(25);
        if (_.E(kv)) {
            var b, c, d, e;
            a = _.z([].concat(_.Sc(null != (d = null == (b = this.o) ? void 0 : b.value) ? d : []), _.Sc(null != (e = null == (c = this.l) ? void 0 : c.value) ? e : [])));
            for (b = a.next(); !b.done; b = a.next()) gp(b.value)
        }
        this.B.notify()
    };
    var jH = function(a, b) {
        Z.call(this, a, 892, _.Ad(mv));
        this.o = V(this);
        this.D = V(this);
        this.l = V(this);
        this.G = mx(this, b)
    };
    _.R(jH, Z);
    jH.prototype.j = function() {
        var a = this.G.value;
        if (!a) throw Error("config timeout");
        dx(this.o, hc(a, us, 3));
        dx(this.D, hc(a, ws, 2));
        dx(this.l, Vb(a, 4))
    };
    jH.prototype.L = function(a) {
        this.A(a)
    };
    jH.prototype.A = function(a) {
        ex(this.o, a);
        ex(this.D, a);
        cx(this.l)
    };
    var kH = [{
            name: "Interstitial",
            Nc: 1
        }, {
            name: "TopAnchor",
            Nc: 2
        }, {
            name: "BottomAnchor",
            Nc: 3
        }],
        lH = function(a, b) {
            Z.call(this, a, 789);
            this.l = b;
            this.B = V(this)
        };
    _.R(lH, Z);
    lH.prototype.j = function() {
        var a = this;
        this.B.j(kH.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.l)
        }).map(function(b) {
            var c = b.name;
            b = b.Nc;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            d = new Bs;
            e = new ys;
            b = x(e, 2, b);
            c = x(b, 1, "/22639388115/example/" + c.toLowerCase());
            return kf(d, 5, Cs, c)
        }))
    };
    var mH = function(a, b) {
        Z.call(this, a, 969);
        this.F = b;
        this.o = V(this);
        this.l = V(this)
    };
    _.R(mH, Z);
    mH.prototype.j = function() {
        var a = this;
        if (_.E(Xu)) {
            var b = "",
                c = void 0,
                d = function() {
                    return void a.F.clearInterval(c)
                },
                e = _.Qf(this.context, this.id, function() {
                    var f, g, h;
                    return _.ab(function(k) {
                        switch (k.j) {
                            case 1:
                                f = He(a.F);
                                a.l.j(!!f);
                                if (!f) {
                                    d();
                                    k.j = 2;
                                    break
                                }
                                k.A = 3;
                                return bb(k, f, 5);
                            case 5:
                                b = null != (g = k.m) ? g : "0";
                                b.length > _.Ad(Zu) && (Uf(a.context, a.id, new aj("ML:" + (_.E(Yu) ? b : b.length))), b = "0", d());
                                db(k, 2);
                                break;
                            case 3:
                                h = eb(k), Uf(a.context, a.id, h), b = "0", d();
                            case 2:
                                a.o.j(function() {
                                    return b
                                }), k.j = 0
                        }
                    })
                });
            c = this.F.setInterval(e, 1E3 * _.Ad(Wu));
            _.Vm(this, d);
            e()
        } else this.l.j(!1), this.o.j(function() {
            return ""
        })
    };
    mH.prototype.A = function() {
        this.l.j(!1);
        this.o.j(function() {
            return ""
        })
    };
    var nH = function(a, b, c, d) {
        Z.call(this, a, 906, _.Ad(lv));
        this.F = b;
        this.l = lx(this);
        this.D = mx(this, c);
        this.o = Pn(d, xE).then(function(e) {
            return Te(e.detail.R.getAdUnitPath())
        });
        this.F !== this.F.top && this.l.notify()
    };
    _.R(nH, Z);
    nH.prototype.j = function() {
        var a = this,
            b;
        return _.ab(function(c) {
            if (a.F !== a.F.top) return c.return();
            if (b = a.D.value) return bb(c, oH(a, b), 0);
            a.l.notify();
            c.j = 0
        })
    };
    var oH = function(a, b) {
            var c, d;
            return _.ab(function(e) {
                c = fc(b, xs, 1);
                if (!c.length) return a.l.notify(), e.return();
                d = c[0];
                return (B = [2, 3], _.u(B, "includes")).call(B, kd(d, 3, 0)) ? (pH(a, Dh(d, 1)), e.return()) : bb(e, _.Xf(a.context, 917, function() {
                    return qH(a, b)
                }), 0)
            })
        },
        qH = function(a, b) {
            var c, d;
            return _.ab(function(e) {
                if (1 == e.j) return bb(e, a.o, 2);
                c = e.m;
                (d = fc(b, xs, 1).some(function(f) {
                    return Dh(f, 1) === c
                })) ? pH(a, c): (Yg("pp_iris_failure", function(f) {
                    M(f, "fnc", c);
                    dh(f, a.context)
                }, _.Ad(nv)), a.l.notify());
                e.j = 0
            })
        },
        pH = function(a, b) {
            var c = lw(a.F, b, function(d) {
                if (!d) {
                    d = tt(c.j);
                    for (var e = _.z(document.getElementsByName("googlefcPresent")), f = e.next(); !f.done; f = e.next()) d.ge(f.value)
                }
                a.l.notify()
            });
            c.start()
        };
    nH.prototype.L = function(a) {
        this.A(a)
    };
    nH.prototype.A = function() {
        this.l.notify()
    };
    var rH = function(a, b) {
        Z.call(this, a, 964);
        var c = this;
        this.F = b;
        this.l = new jx;
        this.F === this.F.top && (nx(this, this.l), (a = Qw("loadEventStart", this.F)) ? (a = _.wd(this.F) - a, 1E3 <= a ? this.l.notify() : setTimeout(_.Qf(this.context, this.id, function() {
            return void c.l.notify()
        }), 1E3 - a)) : (a = function() {
            return void setTimeout(_.Qf(c.context, c.id, function() {
                return void c.l.notify()
            }), 1E3)
        }, "complete" === this.F.document.readyState ? a() : NE(this, this.id, this.F, "load", a)))
    };
    _.R(rH, Z);
    rH.prototype.j = function() {
        var a = this;
        this.F === this.F.top && Yg("gpt_dens", function(b) {
            dh(b, a.context);
            var c = kg(!1, a.F),
                d = c.height;
            M(b, "vw", c.width);
            M(b, "vh", d);
            d = "CSS1Compat" === a.F.document.compatMode ? a.F.document.documentElement : a.F.document.body;
            c = d.scrollHeight;
            d = d.scrollWidth;
            M(b, "ph", c);
            M(b, "pw", d);
            var e = 0,
                f = 0,
                g = 0,
                h = a.F,
                k = {
                    Ge: !1
                },
                l = Ox(h, ".google-auto-placed"),
                m = Ox(h, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"),
                n = Ox(h, "ins.adsbygoogle[data-ad-format=autorelaxed]");
            var p = (_.Nx(h) || Ox(h, "div[id^=div-gpt-ad]")).concat(Ox(h, "iframe[id^=google_ads_iframe]"));
            var t = Ox(h, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                A = Ox(h, "ins.adsbygoogle-ablated-ad-slot"),
                y = Ox(h, "div.googlepublisherpluginad"),
                J = Ox(h, "html > ins.adsbygoogle"),
                F = [].concat(Ox(h, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), Ox(h, "body ins.adsbygoogle"));
            h = [];
            k = _.z([
                [k.Rg, l],
                [k.Ge, m],
                [k.Ug, n],
                [k.Sg, p],
                [k.Vg, t],
                [k.Qg, A],
                [k.Tg, y],
                [k.Wg, J]
            ]);
            for (l = k.next(); !l.done; l = k.next()) m = _.z(l.value), l = m.next().value, m = m.next().value, !1 === l ? h = h.concat(m) : F = F.concat(m);
            F = Px(F);
            k = Px(h);
            h = F.slice(0);
            F = _.z(k);
            for (k = F.next(); !k.done; k = F.next())
                for (k = k.value, l = 0; l < h.length; l++)(k.contains(h[l]) || h[l].contains(k)) && h.splice(l, 1);
            h = _.z(h);
            for (F = h.next(); !F.done; F = h.next()) k = F.value.getBoundingClientRect(), F = k.width, k = k.height, e += k, f += k * F, g++;
            M(b, "act", g);
            M(b, "aht", e);
            M(b, "ahd", Math.round(e / c * 100));
            M(b, "aa", f);
            M(b, "aad", Math.round(f / (c * d) * 100))
        }, _.Ad(xv))
    };
    var sH = function(a) {
        Z.call(this, a, 891);
        this.l = V(this);
        var b = new io;
        this.o = X(this, b);
        (a = _.We(260)) ? a(function(c, d) {
            if (d) ex(b, d);
            else try {
                if ("string" === typeof c) {
                    var e = JSON.parse(c || "[]");
                    Array.isArray(e) && b.j(e)
                }
            } catch (f) {} finally {
                b.C || ex(b, Error("malformed response"))
            }
        }): ex(b, Error("missing input"))
    };
    _.R(sH, Z);
    sH.prototype.j = function() {
        this.l.j(new Es(this.o.value))
    };
    var tH = function(a, b) {
        Z.call(this, a, 966);
        this.F = b;
        this.l = V(this)
    };
    _.R(tH, Z);
    tH.prototype.j = function() {
        var a = this,
            b = Ie(this.F);
        if (b) this.l.j(b);
        else {
            if (_.E(Eu) && (b = Object.getOwnPropertyDescriptor(this.F, "_pbjsGlobals")) && !b.configurable) {
                Yg("pdpg_error", function(d) {
                    dh(d, a.context)
                }, _.Ad(Hu));
                return
            }
            var c = null;
            Object.defineProperty(this.F, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Ie(a.F)) && a.l.j(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    tH.prototype.A = function() {};
    var uH = function(a, b) {
        Z.call(this, a, 979);
        this.F = b;
        this.B = V(this)
    };
    _.R(uH, Z);
    uH.prototype.j = function() {
        var a = this;
        _.E(Bv) && "function" === typeof this.F.document.browsingTopics ? yh(this.F).then(function(b) {
            a.B.j(b)
        }) : cx(this.B)
    };
    uH.prototype.A = function() {
        cx(this.B)
    };
    var Im = function(a, b, c, d) {
        Z.call(this, a, 959);
        this.Ya = b;
        this.B = V(this);
        this.l = X(this, b);
        nx(this, c);
        nx(this, d)
    };
    _.R(Im, Z);
    Im.prototype.j = function() {
        this.B.j(this.l.value)
    };
    var Fm = function(a, b, c) {
        Z.call(this, a, 879);
        this.o = b;
        this.l = V(this);
        this.D = null;
        _.We(260) && (this.D = X(this, c))
    };
    _.R(Fm, Z);
    Fm.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.ab(function(e) {
            if (1 == e.j) {
                if (null != (c = null == (b = a.D) ? void 0 : b.value) ? !c : !qC(a.o)) {
                    cx(a.l);
                    e.j = 0;
                    return
                }
                return bb(e, tC(a.o), 3)
            }
            d = e.m;
            a.l.j(d);
            e.j = 0
        })
    };
    var Hm = function(a, b, c, d, e, f) {
        Z.call(this, a, 874);
        this.o = b;
        this.F = c;
        this.G = d;
        this.l = lx(this);
        nx(this, e);
        this.D = X(this, f)
    };
    _.R(Hm, Z);
    Hm.prototype.j = function() {
        var a = this,
            b = new bw(this.F, -1, _.E(Pv));
        _.Cm(this, b);
        dw(b) ? (this.o.info(LF()), gw(b, _.Qf(this.context, 661, function(c) {
            var d = a.D.value,
                e, f, g;
            if (g = !(null == (e = a.G) ? 0 : I(e, 9))) {
                var h = void 0 === h ? !1 : h;
                g = fw(c) ? !1 === c.gdprApplies || "tcunavailable" === c.tcString || void 0 === c.gdprApplies && !h || "string" !== typeof c.tcString || !c.tcString.length ? !0 : hw(c, "1") : !1
            }
            e = x(d, 5, g);
            g = !jw(c, ["3", "4"]);
            e = x(e, 9, g);
            e = x(e, 2, c.tcString);
            g = null != (f = c.addtlConsent) ? f : "";
            f = x(e, 4, g);
            x(f, 7, c.internalErrorState);
            f = !jw(c, ["3", "4"]);
            x(d, 9, f);
            null != c.gdprApplies && x(d, 3, c.gdprApplies);
            _.E(zv) && !jw(c, ["2", "7", "9", "10"]) && x(d, 8, !0);
            "tcunavailable" === c.tcString ? a.o.info(MF("failed")) : a.o.info(MF("succeeded"));
            a.l.notify()
        }))) : this.l.notify()
    };
    var Gm = function(a, b, c, d, e) {
        Z.call(this, a, 875);
        this.D = b;
        this.F = c;
        this.l = lx(this);
        nx(this, d);
        this.o = X(this, e)
    };
    _.R(Gm, Z);
    Gm.prototype.j = function() {
        var a = this,
            b = new jC(this.F);
        _.Cm(this, b);
        if (lC(b)) {
            var c = _.Qf(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && x(a.o.value, 1, d.uspString);
                a.l.notify()
            });
            this.D.info(KF());
            nC(b, c)
        } else this.l.notify()
    };
    var zm = function(a, b) {
        Z.call(this, a, 958);
        this.l = b;
        this.Ya = V(this)
    };
    _.R(zm, Z);
    zm.prototype.j = function() {
        var a = new Xx,
            b, c = null == (b = this.l) ? void 0 : I(b, 9);
        x(a, 5, !c);
        this.Ya.j(a)
    };
    var Dm = function(a, b, c) {
        Z.call(this, a, 896);
        this.o = b;
        this.D = c;
        this.l = V(this)
    };
    _.R(Dm, Z);
    Dm.prototype.j = function() {
        var a = this;
        _.We(260) ? this.D.then(_.Qf(this.context, this.id, function() {
            return void a.l.j(qC(a.o))
        })) : this.l.j(qC(this.o))
    };
    var Em = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.F = b;
        this.l = d;
        this.o = X(this, c)
    };
    _.R(Em, Z);
    Em.prototype.j = function() {
        var a = this;
        this.l && _.Xf(this.context, 894, function() {
            return void Yg("cmpMet", function(b) {
                dh(b, a.context);
                var c = new bw(a.F);
                _.Cm(a, c);
                var d = new jC(a.F);
                _.Cm(a, d);
                M(b, "fc", Number(a.o.value));
                M(b, "tcfv1", Number(!!a.F.Ng));
                M(b, "tcfv2", Number(dw(c)));
                M(b, "usp", Number(lC(d)));
                M(b, "ptt", 17)
            }, a.l)
        })
    };
    var jo = function(a, b, c) {
        Z.call(this, a, 706);
        this.F = b;
        this.B = V(this);
        this.l = X(this, c)
    };
    _.R(jo, Z);
    jo.prototype.j = function() {
        dx(this.B, sd(this.l.value, this.F))
    };
    var vH = new w.Map([
            [1, 5],
            [2, 2],
            [3, 3]
        ]),
        Po = function(a, b, c, d, e) {
            e = void 0 === e ? document : e;
            Z.call(this, a, 912);
            this.googletag = c;
            this.W = d;
            this.T = e;
            this.l = X(this, b)
        };
    _.R(Po, Z);
    Po.prototype.j = function() {
        var a = this;
        if (_.E(pv))
            for (var b = {}, c = _.z(this.l.value), d = c.next(); !d.done; b = {
                    ab: b.ab
                }, d = c.next()) {
                d = d.value;
                var e = hc(d, ys, dc(d, Cs, 5)),
                    f = void 0,
                    g = null == (f = e) ? void 0 : f.getAdUnitPath();
                e && g && vH.has(kd(e, 2, 0)) && (b.ab = this.googletag.defineOutOfPageSlot(g, vH.get(kd(e, 2, 0))), b.ab && (e = void 0, null == (e = Lm(Lf(), b.ab.getSlotElementId())) || GC(e, hc(d, rl, 4)), b.ab.addService(this.googletag.pubads()), bu(this.T, function(h) {
                    return function() {
                        a.googletag.display(h.ab);
                        var k;
                        I(null != (k = a.W) ? k : Lf().j, 4) && a.googletag.pubads().refresh([h.ab])
                    }
                }(b))))
            }
    };
    var wH = function(a, b, c, d) {
        Z.call(this, a, 890);
        this.o = b;
        this.D = c;
        this.l = Y(this, d)
    };
    _.R(wH, Z);
    wH.prototype.j = function() {
        var a = this;
        Yd(this.o, this.l.value, function(b, c) {
            Uf(a.context, b, c);
            var d, e;
            null == (d = a.D) || null == (e = d.error) || e.call(d, c)
        })
    };
    var xH = function(a, b) {
        _.$v.call(this);
        this.context = a;
        this.ga = b;
        this.M = new sH(this.context);
        this.C = new jH(this.context, this.M.l);
        this.L = this.C.l;
        this.j = new OG(this.context, this.C.o);
        this.A = new gH(this.context, this.j.D);
        this.J = new hH(this.context, this.j.G);
        this.O = new tH(this.context, window);
        this.U = new uH(this.context, window);
        this.aa = new iH(this.context, this.j.o, this.L, this.j.l);
        this.o = this.A.l;
        this.ca = this.A.G;
        this.D = null;
        this.Y = this.j.o;
        this.ea = this.j.l;
        this.P = this.A.D;
        this.G = this.O.l;
        this.I = this.J.l;
        this.da = this.U.B;
        this.V = this.aa.B;
        _.Cm(this, this.O);
        _.Cm(this, this.M);
        _.Cm(this, this.C);
        _.Cm(this, this.A);
        _.Cm(this, this.J);
        _.Cm(this, this.j);
        _.Cm(this, this.U);
        _.Cm(this, this.aa);
        _.We(260) || (cx(this.L), cx(this.Y), cx(this.ea), cx(this.o), cx(this.ca), cx(this.P), cx(this.I), this.V.notify());
        _.E(Bv) || cx(this.da);
        0 < _.Ad(Wu) && (this.l = new mH(this.context, window), _.Cm(this, this.l), this.ha = this.l.o, this.ia = this.l.l)
    };
    _.R(xH, _.$v);
    var yH = function(a, b) {
        var c = new Qd;
        _.Cm(a, c);
        D(c, a.O);
        D(c, a.M);
        D(c, a.C);
        D(c, a.j);
        D(c, a.A);
        D(c, a.aa);
        _.E(Ku) ? D(c, a.J) : cx(a.I);
        b = new nH(a.context, window, a.C.D, b);
        a.D = b.l.promise;
        D(c, b);
        var d;
        b = new lH(a.context, null != (d = window.location.hash) ? d : "");
        D(c, b);
        D(c, new Po(a.context, b.B, Xe(), null));
        _.Ad(xv) && D(c, new rH(a.context, window));
        a.l && D(c, a.l);
        _.E(Bv) && D(c, a.U);
        D(c, new XG(a.context, a.G, a.V, a.o, a.P, a.I));
        _.E(Iv) || !_.E(jv) || Fj() || (d = Jm(a.context, a.ga, null, window, a.D).Ya, d = new jo(a.context, window, d), D(c, d), a = new wH(a.context, Xe(), console, d.B), D(c, a));
        Rd(c)
    };
    var zH = ["Debug", "Info", "Warning", "Error", "Fatal"],
        AH = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.j = c;
            this.timestamp = new Date
        };
    q = AH.prototype;
    q.getSlot = function() {
        return this.j
    };
    q.getLevel = function() {
        return this.level
    };
    q.getTimestamp = function() {
        return this.timestamp
    };
    q.getMessage = function() {
        return this.message
    };
    q.toString = function() {
        return this.timestamp.toTimeString() + ": " + zH[this.level] + ": " + this.message
    };
    var BH = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            116: function(a) {
                return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            128: function() {
                return "ContentService is deprecated. The content() method will be removed from googletag soon. For more information, see https://developers.google.com/publisher-tag/reference#googletag.ContentService."
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return Qm(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return Qm(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return Qm(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return Qm(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return Qm(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return Qm(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return Qm(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            142: function(a) {
                return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
            },
            145: function(a) {
                return Qm(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            }
        },
        CH = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            125: function(a) {
                return "google-product-ad element is invalid: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            }
        };
    var DH = function(a) {
            this.context = a;
            this.j = _.u(Array, "from").call(Array, {
                length: 1E3
            });
            this.A = this.H = this.m = 0;
            this.C = window
        },
        hG = function(a) {
            return a.j.filter(function(b) {
                return !!b
            })
        },
        iG = function(a, b) {
            return a.j.filter(function(c) {
                return c && c.getSlot() === b
            })
        },
        jG = function(a, b) {
            return a.j.filter(function(c) {
                return c && c.getLevel() >= b
            })
        };
    DH.prototype.log = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f, g;
        c = new AH(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j) ? g : null);
        this.j[this.m] = c;
        this.m = (this.m + 1) % 1E3;
        g = _.Ad(Qu) && 100 > this.H;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs(),
            k = b.getMessageId(),
            l = BH[k] || CH[k];
        g && f && (b = _.Ad(Qu), Yg("gpt_eventlog_messages", function(m) {
            ++e.H;
            dh(m, e.context);
            M(m, "level", a);
            M(m, "messageId", k);
            M(m, "args", h.join("|"));
            l || M(m, "noMsg", !0);
            var n = Error(),
                p;
            var t = null != (p = n.stack) ? p : "";
            n = n.message;
            try {
                -1 == t.indexOf(n) && (t = n + "\n" + t);
                for (var A; t != A;) A = t, t = t.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                var y = t.replace(/\n */g, "\n")
            } catch (J) {
                y = n
            }
            M(m, "stack", y)
        }, b));
        if (l) {
            b = "[GPT] " + l(h);
            if (d) throw new aj(b);
            d = this.A < _.Ad(Ru) && f && _.r.console;
            if (this.C === top && d || _.u(_.r.navigator.userAgent, "includes").call(_.r.navigator.userAgent, "Lighthouse"))(function(m) {
                var n, p, t, A;
                return void(2 === a ? null == (p = (n = _.r.console).warn) ? void 0 : p.call(n, m) : null == (A = (t = _.r.console).error) ? void 0 : A.call(t, m))
            })(b), this.A++
        }
        return c
    };
    DH.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var O = function(a, b, c) {
        a.log(2, b, c, !1)
    };
    DH.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var Wm = "3rd party ad content";
    var EH = function(a, b) {
            this.serviceName = b;
            this.slot = a.j
        },
        FH = function(a, b) {
            EH.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.R(FH, EH);
    var GH = function() {
        EH.apply(this, arguments)
    };
    _.R(GH, EH);
    var HH = function(a, b, c) {
        EH.call(this, a, b);
        this.inViewPercentage = c
    };
    _.R(HH, EH);
    var IH = function() {
        EH.apply(this, arguments)
    };
    _.R(IH, EH);
    var JH = function() {
        EH.apply(this, arguments)
    };
    _.R(JH, EH);
    var KH = function(a, b, c, d) {
        EH.call(this, a, b);
        this.payload = d;
        this.makeRewardedVisible = c
    };
    _.R(KH, EH);
    var LH = function(a, b, c) {
        EH.call(this, a, b);
        this.payload = this.payload = c
    };
    _.R(LH, EH);
    var MH = function() {
        EH.apply(this, arguments)
    };
    _.R(MH, EH);
    var NH = function() {
        EH.apply(this, arguments)
    };
    _.R(NH, EH);
    var OH = function() {
        EH.apply(this, arguments)
    };
    _.R(OH, EH);
    var PH = new w.Set,
        QH = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.r.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new aj("Reached Limit for addEventListener");
        }, 3E5),
        RH = function(a, b) {
            pE.call(this, a);
            this.j = b;
            this.A = [];
            this.C = !1;
            this.D = 0;
            this.I = new w.Map;
            PH.add(this);
            this.j.info(dF(this.getName()))
        };
    _.R(RH, pE);
    q = RH.prototype;
    q.enable = function() {
        this.C || (this.C = !0, hp(6), this.Sc())
    };
    q.Sa = function(a, b) {
        this.A.push(a);
        var c = new JH(a, this.getName());
        this.dispatchEvent("slotAdded", 818, c);
        this.j.info(gF(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        bc(b, 4, a)
    };
    q.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ca(b.A, c)
        })
    };
    q.addEventListener = function(a, b) {
        var c = this;
        if (this.D >= _.Ad(Pu) && 0 < _.Ad(Pu)) QH();
        else {
            var d;
            null != (d = this.I.get(a)) && d.has(b) || (this.I.has(a) || this.I.set(a, new w.Map), d = function(e) {
                e = e.detail;
                try {
                    b(e)
                } catch (h) {
                    c.j.error(xF(String(h), a));
                    var f, g;
                    null == (f = window.console) || null == (g = f.error) || g.call(f, h)
                }
            }, this.I.get(a).set(b, d), rE(this, a, d), this.D++)
        }
    };
    q.removeEventListener = function(a, b) {
        var c, d = null == (c = this.I.get(a)) ? void 0 : c.get(b);
        if (!d || !qE(this, a, d)) return !1;
        this.D--;
        return this.I.get(a).delete(b)
    };
    var rn = function(a) {
            for (var b = _.z(PH), c = b.next(); !c.done; c = b.next()) c = c.value, c.C && a.info(fF()), c.enable()
        },
        an = function(a) {
            for (var b = _.z(PH), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
        };
    var on = function(a, b, c) {
        RH.call(this, a, b);
        this.L = c;
        this.ads = new w.Map;
        this.l = {};
        this.G = this.ib = !1;
        _.C(fp).A = !0
    };
    _.R(on, RH);
    q = on.prototype;
    q.set = function(a, b) {
        "string" === typeof a && a.length ? (this.l[a] = b, this.j.info(eF(a, String(b), this.getName()))) : O(this.j, Qh("CompanionAdsService.set", [a, b]));
        return this
    };
    q.get = function(a) {
        var b;
        return null != (b = this.l[a]) ? b : null
    };
    q.display = function(a, b, c, d) {
        this.enable();
        b = Ij(this.context, this.j, a, b, c);
        a = b.slotId;
        b = b.Ra;
        this.Sa(a, b);
        null == b || b.setClickUrl(d);
        Om(this.j, null == a ? void 0 : a.getDomId())
    };
    q.Sa = function(a, b) {
        var c = this;
        rE(a, tE, function(d) {
            I(d.detail, 11) && (SH(c, a).Ze = !0)
        });
        RH.prototype.Sa.call(this, a, b)
    };
    q.Sc = function() {};
    q.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.ib = a)
    };
    var cG = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.G && Yg("ima_sdk_v", function(c) {
                a.G = !0;
                M(c, "v", b)
            });
            return String(Lf().j.getCorrelator())
        },
        aG = function(a, b) {
            var c = Lf().j,
                d = Lf().m;
            if (a.L.C) {
                var e = {
                    Da: 3
                };
                a.J && (e.Ta = a.J);
                a.V && (e.Ua = a.V);
                b = null != b ? b : a.A;
                c = Cg(c, d);
                d = e.Ta;
                var f = e.Ua;
                d && "number" !== typeof d || f && "number" !== typeof f || a.L.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.j.error(mF(b[0].getDomId()))
        },
        dG = function(a, b) {
            var c;
            return a.L.C && !(null == (c = a.ads.get(b)) || !c.Ze)
        },
        bG = function(a, b) {
            return a.A.filter(function(c) {
                return _.u(b, "includes").call(b, c.toString())
            })
        };
    on.prototype.getName = function() {
        return "companion_ads"
    };
    on.prototype.P = function() {};
    var eG = function(a, b, c, d) {
            b = new FH(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            a.dispatchEvent("slotRenderEnded", 67, b)
        },
        SH = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.Vm(b, function() {
                return a.ads.delete(b)
            }));
            return c
        };
    var ln = function(a, b) {
        RH.call(this, a, b);
        this.l = new w.Map
    };
    _.R(ln, RH);
    ln.prototype.getName = function() {
        return "content"
    };
    ln.prototype.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        this.enable();
        b = Ij(this.context, this.j, a, b, c);
        a = b.slotId;
        b = b.Ra;
        this.Sa(a, b);
        b.setClickUrl(d);
        Om(this.j, a.getDomId())
    };
    ln.prototype.destroySlots = function(a) {
        a = RH.prototype.destroySlots.call(this, a);
        for (var b = _.z(a), c = b.next(); !c.done; c = b.next()) this.l.delete(c.value);
        return a
    };
    var TH = function(a, b) {
        var c = a.l.get(b),
            d = Gg(b);
        !(c && void 0 !== c.content && d && a.C) || c && c.Sd || (c.Sd = !0, Na(d, se(c.content, null)), Yg("gpt_cont_svc", function(e) {
            var f;
            M(e, "cl", String(null == c ? void 0 : null == (f = c.content) ? void 0 : f.length));
            dh(e, a.context, [b.getAdUnitPath()])
        }), a.dispatchEvent("slotRenderEnded", 819, new FH(b, a.getName())))
    };
    ln.prototype.Sc = function() {};
    ln.prototype.P = function(a, b) {
        TH(this, b)
    };
    ln.prototype.setContent = function(a, b) {
        var c = this;
        if (_.u(this.A, "includes").call(this.A, a) && "string" === typeof b && b.length) {
            var d = this.l.get(a);
            d ? d.content = b : this.l.set(a, {
                content: b,
                Sd: void 0
            });
            _.Vm(a, function() {
                return void c.l.delete(a)
            });
            TH(this, a)
        }
    };
    var UH, VH, XH;
    UH = new w.Map([
        [2, {
            Xe: "page_level_ads"
        }]
    ]);
    VH = function(a, b) {
        var c = void 0 === c ? UH : c;
        this.context = a;
        this.A = b;
        this.j = c;
        this.m = new w.Map;
        this.loaded = new w.Set
    };
    _.WH = function(a, b) {
        b = b.module;
        a.m.has(b) || a.m.set(b, new _.Fe);
        return a.m.get(b)
    };
    XH = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = _.Qf(a.context, 340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = a.j.get(c);
                f = (void 0 === f.se ? [] : f.se).map(function(g) {
                    return _.WH(a, g).promise
                });
                w.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(Xe(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    VH.prototype.load = function(a) {
        var b = _.WH(this, a),
            c, d = (null != (c = this.j.get(a.module)) ? c : {}).Xe;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            c = (c = _.We(172)) && "pagead2.googlesyndication.com" === Ml((c.src || "").match(_.Nl)[3] || null);
            c = Ja(Qc(c ? this.A.oe(d) : this.A.pe(d)).toString());
            d = {};
            var e = _.Ad(qv),
                f = _.Ad(Tu);
            e && (d.cb = e);
            f && (d.mcb = f);
            _.u(Object, "keys").call(Object, d).length ? (c = iq.exec(Ka(c).toString()), e = c[3] || "", d = Ja(c[1] + jq("?", c[2] || "", d) + jq("#", e))) : d = c;
            XH(this, a);
            gi(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    var YH = function() {
        this.resources = {}
    };
    var Ho = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 682);
        this.K = b;
        this.format = c;
        this.slotId = d;
        this.F = e;
        this.B = lx(this);
        this.l = Y(this, f);
        this.o = X(this, g);
        this.G = X(this, h);
        this.D = Y(this, k)
    };
    _.R(Ho, Z);
    Ho.prototype.j = function() {
        var a = this;
        if ((2 === this.format || 3 === this.format) && null !== this.l.j.A && pr(this.l.value, 12, !1)) {
            var b = this.D.value.Ae,
                c = _.GE(this.K, this.slotId),
                d = this.G.value,
                e = this.o.value;
            _.Tg(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (ZH) ZH.Ef(e);
            else {
                ZH = new b(this.context, this.format, e, this.F, d, this.K, this.slotId);
                b = {};
                d = _.z(fc(this.l.value, Fs, 13));
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, b[Q(f, 1)] = Q(f, 2);
                ZH.Hf(b);
                ZH.Cb();
                DE(this.K, this.slotId, function() {
                    ZH && (ZH.za(), ZH = null);
                    c && _.IE(a.K, a.slotId)
                })
            }
            _.Vm(this, function() {
                return _.Bt(e)
            })
        }
        this.B.notify()
    };
    var ZH = null;
    var Io = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.format = c;
        this.O = d;
        this.l = Y(this, e);
        this.o = X(this, f);
        this.J = X(this, g);
        this.D = Y(this, h);
        this.G = Y(this, k);
        this.M = Pn(b, Qn, function(l) {
            l = l.detail;
            try {
                var m = JSON.parse(l.data);
                return "sth" === m.googMsgType && "i-adframe-load" === m.msg_type
            } catch (n) {
                return !1
            }
        })
    };
    _.R(Io, Z);
    Io.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n;
        return _.ab(function(p) {
            if (1 == p.j) {
                b = a.l.value;
                if (!b || 5 !== a.format) return p.return();
                c = a.J.value;
                d = a.o.value;
                e = a.G.value;
                f = e.Ie;
                g = new _.bD(a.context);
                l = _.E(gj) && (null == (h = a.l.value) ? 0 : Pi(h, 14)) ? 60 * (null == (k = a.l.value) ? NaN : Q(k, 14)) : ij(!0);
                m = new f(window, d, c, g, a.O, On(fc(b, Fs, 13)), "22639388115" === Te(a.slotId.getAdUnitPath()), function() {
                    return void a.za()
                }, l, a.D.value);
                _.Cm(a, m);
                n = _.Ad(fv);
                switch (n) {
                    case 0:
                        m.M();
                        break;
                    case 1:
                        p.j = 2;
                        return
                }
            } else {
                if (4 != p.j) return bb(p, a.M, 4);
                if (a.m) return p.return();
                m.M(!0)
            }
            p.j = 0
        })
    };
    var $H = function() {
        this.module = 2
    };
    $H.prototype.toString = function() {
        return String(this.module)
    };
    _.aI = new $H;
    var Eo = function(a, b, c, d, e) {
        Z.call(this, a, 846);
        this.D = b;
        this.format = c;
        this.B = V(this);
        this.l = Y(this, d);
        this.o = Y(this, e)
    };
    _.R(Eo, Z);
    Eo.prototype.j = function() {
        var a = this,
            b, c, d, e, f;
        return _.ab(function(g) {
            if (1 == g.j) {
                c = (2 === a.format || 3 === a.format) && !(null == (b = a.l.value) || !pr(b, 12, !1));
                d = 5 === a.format && a.o.value;
                if (!c && !d) {
                    cx(a.B);
                    g.j = 0;
                    return
                }
                e = a.B;
                f = e.j;
                return bb(g, a.D.load(_.aI), 3)
            }
            f.call(e, g.m);
            g.j = 0
        })
    };
    var bI = function(a, b, c, d) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.qa = c;
        nx(this, d);
        this.l = new w.Promise(function(e) {
            for (var f = _.z(["closed", "ha_before_make_visible"]), g = f.next(); !g.done; g = f.next()) Rn(b, g.value).then(e)
        })
    };
    _.R(bI, Z);
    bI.prototype.j = function() {
        var a = this;
        return _.ab(function(b) {
            if (1 == b.j) return bb(b, a.l, 2);
            if (3 != b.j) return a.m ? b.return() : bb(b, a.qa.dispatchEvent("rewardedSlotClosed", 703, new MH(a.slotId, "publisher_ads")), 3);
            a.za();
            b.j = 0
        })
    };
    var cI = function(a, b, c, d) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.qa = c;
        nx(this, d);
        var e = new io;
        this.l = Y(this, e);
        Rn(b, "granted").then(function(f) {
            var g;
            return void dx(e, null != (g = f.payload) ? g : null)
        })
    };
    _.R(cI, Z);
    cI.prototype.j = function() {
        this.qa.dispatchEvent("rewardedSlotGranted", 702, new LH(this.slotId, "publisher_ads", this.l.value))
    };
    var dI = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        eI = function(a, b, c, d, e, f) {
            Z.call(this, a, 693);
            this.F = b;
            this.G = f;
            this.B = lx(this);
            this.l = X(this, c);
            this.o = X(this, d);
            nx(this, e);
            this.D = new _.$B(this.F)
        };
    _.R(eI, Z);
    eI.prototype.j = function() {
        var a = this;
        if (!this.G.C) {
            var b = 0 === (0, _.wj)() ? "rgba(1,1,1,0.5)" : "white";
            _.Tg(this.o.value, _.u(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, dI));
            _.Vm(this, _.iC(this.F.document, this.F));
            Lc(this.l.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.F === this.F.top) {
                this.F.location.hash = "goog_rewarded";
                var c = new _.cC(this.D);
                _.dC(c);
                _.Vm(this, function() {
                    _.eC(c);
                    "goog_rewarded" === a.F.location.hash && (a.F.location.hash = "")
                })
            }
            this.B.notify()
        }
    };
    var fI = function(a, b, c, d) {
        Z.call(this, a, 695);
        this.F = b;
        this.l = X(this, c);
        nx(this, d)
    };
    _.R(fI, Z);
    fI.prototype.j = function() {
        if (this.F === this.F.top) var a = Lc(this.l.value),
            b = NE(this, 503, this.F, "hashchange", function(c) {
                kq(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var gI = function(a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.qa = c;
        this.B = lx(this);
        this.l = X(this, d)
    };
    _.R(gI, Z);
    gI.prototype.j = function() {
        var a = this,
            b, c, d, e, f;
        return _.ab(function(g) {
            if (1 == g.j) return b = a.l.value, c = new _.Fe, d = c.promise, e = c.resolve, a.qa.dispatchEvent("rewardedSlotReady", 701, new KH(a.slotId, "publisher_ads", e, null != (f = b.payload) ? f : null)), bb(g, d, 2);
            if (a.m) return g.return();
            a.B.notify();
            a.za();
            g.j = 0
        })
    };
    var hI = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        iI = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        jI = function(a, b, c) {
            Z.call(this, a, 691);
            var d = this;
            this.o = V(this);
            this.l = lx(this);
            this.D = X(this, c);
            this.G = Rn(b, "prefetched");
            Rn(b, "ha_before_make_visible").then(function() {
                return void d.l.notify()
            })
        };
    _.R(jI, Z);
    jI.prototype.j = function() {
        var a = this,
            b;
        return _.ab(function(c) {
            if (1 == c.j) {
                if (a.l.C) return c.return();
                _.Tg(a.D.value, _.u(Object, "assign").call(Object, {
                    position: "absolute"
                }, 0 === (0, _.wj)() ? iI : hI));
                return bb(c, a.G, 2)
            }
            b = c.m;
            if (a.m) return c.return();
            a.o.j(b);
            c.j = 0
        })
    };
    var Ko = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 688);
        4 === c && (this.Ha = new Qd, _.Cm(this, this.Ha), c = new jI(this.context, b, f), D(this.Ha, c), a = new gI(this.context, b, d, c.o), D(this.Ha, a), g = new eI(this.context, e, f, g, a.B, c.l), D(this.Ha, g), D(this.Ha, new fI(this.context, e, f, g.B)), D(this.Ha, new cI(this.context, b, d, a.B)), D(this.Ha, new bI(this.context, b, d, a.B)))
    };
    _.R(Ko, Z);
    Ko.prototype.j = function() {
        var a;
        null == (a = this.Ha) || Rd(a)
    };
    var kI = function(a, b, c) {
        _.$v.call(this);
        this.context = a;
        this.C = b;
        this.A = c;
        a = c.slotId;
        b = c.size;
        this.j = "height" === c.Be ? "fluid" : [b.width, b.height];
        this.Ib = Og(a);
        this.Jb = Wm
    };
    _.R(kI, _.$v);
    kI.prototype.render = function() {
        var a = this.C,
            b = this.A,
            c = b.slotId,
            d = b.N.R,
            e = b.T,
            f = b.size,
            g = b.vb,
            h = b.we,
            k = b.isBackfill;
        b = b.Pb;
        g && Je(g, _.zt(e), null != h ? h : "", !1);
        Vw(_.C(Sf), "5", Q(d[c.getDomId()], 20));
        c.dispatchEvent(uE, 801, {
            pd: 0 === a.kind ? a.sa : "",
            isBackfill: k
        });
        a = this.o();
        b && a && a.setAttribute("data-google-container-id", b);
        c.dispatchEvent(wE, 825, {
            size: f,
            isEmpty: !1
        });
        return a
    };
    kI.prototype.loaded = function(a) {
        var b = this.A,
            c = b.slotId,
            d = b.qa;
        b = b.N.R;
        c.dispatchEvent(zE, 844, void 0);
        a && a.setAttribute("data-load-complete", !0);
        d.dispatchEvent("slotOnload", 710, new IH(c, "publisher_ads"));
        Vw(_.C(Sf), "6", Q(b[c.getDomId()], 20))
    };
    var lI = function(a, b) {
        if (b) return null;
        a = a.C;
        a = 0 === a.kind ? a.sa : "";
        b = "";
        var c = !0,
            d = "sf";
        b = void 0 === b ? "" : b;
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? "" : d;
        if (a) {
            var e = a.toLowerCase(); - 1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && Se(d, 2) : (c && Se(d, 3), a = _.E(Nv) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
        } else c && Se(d, 1);
        return a
    };
    kI.prototype.H = function() {
        _.$v.prototype.H.call(this);
        var a;
        null == (a = this.A.vb) || a.removeAttribute("data-google-query-id")
    };
    kI.prototype.I = function(a, b) {
        var c = this,
            d = mI(this, function() {
                return void c.loaded(d.j)
            }, a, b);
        _.Vm(this, function() {
            100 != d.status && (2 == d.D && (xD(d.A), d.D = 0), window.clearTimeout(d.P), d.P = -1, d.I = 3, d.m && (d.m.za(), d.m = null), _.ad(window, "resize", d.oa), _.ad(window, "scroll", d.oa), d.l && d.j && d.l == _.Ct(d.j) && d.l.removeChild(d.j), d.j = null, d.l = null, d.status = 100)
        });
        return d
    };
    var mI = function(a, b, c, d) {
        var e = a.A,
            f = e.Ud,
            g = e.isBackfill,
            h = e.Je,
            k = e.Pb,
            l = e.Bc,
            m = e.hc,
            n = e.tb,
            p = Array.isArray(a.j) ? new _.yg(Number(a.j[0]), Number(a.j[1])) : 1;
        return new FD({
            Zc: e.od,
            Ib: a.Ib,
            Jb: a.Jb,
            content: lI(a, d),
            size: p,
            ve: !!h,
            Jd: b,
            Vd: null != f ? f : void 0,
            permissions: {
                cc: Pi(c, 1) ? !!I(c, 1) : !g,
                ec: Pi(c, 2) ? !!I(c, 2) : !1
            },
            Kb: !!Xe().fifWin,
            kf: am ? am : am = Di(),
            qe: Ii(),
            ce: !1,
            hostpageLibraryTokens: _.C(uG).hostpageLibraryTokens,
            Aa: function(t, A) {
                return void Uf(a.context, t, A)
            },
            uniqueId: k,
            Bc: null != l ? l : void 0,
            hc: null != m ? m : void 0,
            jc: null != d ? d : void 0,
            tb: null != n ? n : void 0
        })
    };
    var Un = function() {
        kI.apply(this, arguments)
    };
    _.R(Un, kI);
    Un.prototype.o = function() {
        var a = this.A,
            b = a.N,
            c = b.W;
        a = b.R[a.slotId.getDomId()];
        b = new Ji;
        c = Qi([b, c.Ba(), null == a ? void 0 : a.Ba()]);
        return kI.prototype.I.call(this, c).j
    };
    Un.prototype.l = function() {
        return !1
    };
    var nI = function() {
        kI.apply(this, arguments)
    };
    _.R(nI, kI);
    var oI = function(a, b) {
            var c = _.$c(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Ib;
            c.name = a.Ib;
            c.title = a.Jb;
            Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]), c.height = String(a.j[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("role", "region");
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        pI = function(a, b) {
            "string" !== typeof a.j && (b.width = String(a.j[0]), b.height = String(a.j[1]));
            var c = _.Qf(a.context, 774, function() {
                a.loaded(b);
                _.ad(b, "load", c)
            });
            _.Za(b, "load", c);
            _.Vm(a, function() {
                return _.ad(b, "load", c)
            });
            a.A.od.appendChild(b)
        };
    var Vn = function() {
        nI.apply(this, arguments)
    };
    _.R(Vn, nI);
    Vn.prototype.o = function() {
        var a = this,
            b = this.A,
            c = b.Ud;
        b = b.hc;
        var d = oI(this);
        if (null == c ? 0 : c.length)
            if (_.Lq) {
                c = _.z(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.Sc(c));
        b && (d.allow = b);
        xa(wa(), "iPhone") || (d.srcdoc = Ma(wq));
        pI(this, d);
        _.Xf(this.context, 653, function() {
            var f;
            if (f = se(Oc(se(a.C.sa, null)).toString(), null)) {
                var g = f.toString().toLowerCase(); - 1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? Sn(2) : (Sn(3), f = _.E(Nv) ? f : se("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>", null))
            } else Sn(1);
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Aa() && g.open("text/html", "replace");
            Wa(g, f);
            var l, m, n;
            if (kq(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, t;
                null == (p = d.contentWindow) || null == (t = p.history) || t.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    Vn.prototype.l = function() {
        return !0
    };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var Pa = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var Xn = function() {
        nI.apply(this, arguments)
    };
    _.R(Xn, nI);
    Xn.prototype.o = function() {
        var a = oI(this, !this.A.vf);
        Tn(a, this.C.ed);
        pI(this, a);
        return a
    };
    Xn.prototype.l = function() {
        return !1
    };
    var Wn = function() {
        nI.apply(this, arguments)
    };
    _.R(Wn, nI);
    Wn.prototype.o = function() {
        var a = this.C.url,
            b = this.A,
            c = b.N,
            d = c.W;
        b = c.R[b.slotId.getDomId()];
        d = Qi([d.Ba(), null == b ? void 0 : b.Ba()]);
        var e = oI(this);
        Tn(e, a);
        nI.prototype.I.call(this, d, e);
        var f = function() {
            e.removeEventListener("load", f);
            qI(a)
        };
        e.addEventListener("load", f);
        au(e, function() {
            return void qI(a)
        });
        return e
    };
    var qI = function(a) {
        var b = document.querySelectorAll("script[type=webbundle]");
        if (b.length) {
            a: {
                for (var c = 0; c < b.length; c++) {
                    var d = void 0;
                    if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
                        b = b[c];
                        break a
                    }
                }
                b = null
            }
            b && b.textContent && (c = JSON.parse(b.textContent)) && "object" === typeof c && (d = c.resources, a = d.indexOf(a, 0), -1 < a && d.splice(a, 1), 0 === d.length ? document.head.removeChild(b) : (a = _.$c("SCRIPT"), a.setAttribute("type", "webbundle"), a.textContent = JSON.stringify(c), document.head.removeChild(b), document.head.appendChild(a)))
        }
    };
    Wn.prototype.l = function() {
        return !1
    };
    var Fo = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, A, y, J, F, K, H, L, W, P, aa, ta) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.K = c;
        this.N = d;
        this.qa = e;
        this.F = f;
        this.l = V(this);
        this.o = V(this);
        this.D = lx(this);
        this.J = X(this, g);
        this.ia = X(this, h);
        nx(this, l);
        this.ca = X(this, m);
        this.G = X(this, n);
        this.Y = X(this, p);
        nx(this, H);
        this.M = Y(this, t);
        this.O = Y(this, A);
        this.xa = Y(this, y);
        this.U = X(this, J);
        this.ha = Y(this, F);
        this.Wa = Y(this, K);
        this.ua = Y(this, k);
        nx(this, L);
        this.ga = X(this, W);
        nx(this, P);
        this.Ea = Y(this, aa);
        this.da = Y(this, ta)
    };
    _.R(Fo, Z);
    Fo.prototype.j = function() {
        var a = this,
            b = this.J.value;
        if (0 === b.kind && null == b.sa) throw new Ww("invalid html");
        var c;
        b = Yn(this.context, b, {
            T: document,
            slotId: this.slotId,
            K: this.K,
            N: this.N,
            qa: this.qa,
            size: this.Y.value,
            vb: this.ca.value,
            od: this.G.value,
            we: this.M.value,
            Be: this.O.value,
            Ud: this.xa.value,
            isBackfill: this.U.value,
            Je: this.ha.value,
            Pb: this.Wa.value,
            Bc: this.ua.value,
            hc: this.ga.value,
            tb: this.Ea.value,
            vf: null == (c = this.da.value) ? void 0 : pr(c, 14)
        }, {
            xf: this.ia.value
        });
        _.Cm(this, b);
        var d = b.render();
        NE(this, this.id, this.F, "message", function(e) {
            d.contentWindow === e.source && a.slotId.dispatchEvent(Qn, 824, e)
        });
        this.D.notify();
        this.l.j(d);
        this.o.j(b.l())
    };
    var Mo = function(a, b, c, d, e) {
        Z.call(this, a, 863);
        this.l = c;
        this.ob = Number(b);
        this.o = X(this, d);
        this.D = X(this, e);
        this.G = rI(this)
    };
    _.R(Mo, Z);
    var rI = function(a) {
        return _.ab(function(b) {
            return b.return(new w.Promise(function(c) {
                try {
                    NE(a, a.id, a.l, "message", function(d) {
                        var e;
                        "asmreq" === (null == (e = d.data) ? void 0 : e.type) && ld(cd(QB, d.data.payload), 1) === a.ob && c(d)
                    })
                } catch (d) {}
            }))
        })
    };
    Mo.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g;
        return _.ab(function(h) {
            if (1 == h.j) return b = Zn(a.l), c = a.o.value, d = a.D.value, bb(h, a.G, 2);
            e = h.m;
            var k = a.l,
                l = Zn(k);
            var m = c.getBoundingClientRect();
            var n = Kc(k) ? ug(c, k) : {
                x: 0,
                y: 0
            };
            k = n.x;
            n = n.y;
            m = new _.eu(n, k + m.right, n + m.bottom, k);
            k = new SB;
            k = x(k, 1, m.top);
            k = x(k, 3, m.bottom);
            k = x(k, 2, m.left);
            m = x(k, 4, m.right);
            k = new RB;
            k = x(k, 1, a.ob);
            k = x(k, 2, !d);
            m = Ec(k, 3, m);
            m = x(m, 4, b);
            f = x(m, 5, l);
            g = {
                type: "asmres",
                payload: f.X()
            };
            e.ports[0].postMessage(g);
            h.j = 0
        })
    };
    var xo = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 699);
        this.T = b;
        this.slotId = c;
        this.l = d;
        this.wb = e;
        this.B = lx(this);
        this.J = Y(this, f);
        this.O = X(this, g);
        this.D = X(this, h);
        this.M = X(this, k);
        this.o = Y(this, l);
        this.U = X(this, m);
        this.G = X(this, n)
    };
    _.R(xo, Z);
    xo.prototype.j = function() {
        var a = this.O.value,
            b = this.D.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.J.value) {
            var c, d = null != (c = this.o.value) ? c : 0;
            c = this.M.value;
            var e = this.U.value,
                f = this.G.value,
                g = !1;
            switch (d) {
                case 1:
                case 2:
                    g = this.context;
                    var h = this.T,
                        k = this.slotId,
                        l = this.l,
                        m = this.wb;
                    var n = c.width,
                        p = c.height,
                        t = 0;
                    var A = 0;
                    var y = lg(l);
                    y = _.z(y);
                    for (var J = y.next(); !J.done; J = y.next()) {
                        var F = J.value;
                        Array.isArray(F) && (J = F[0], F = F[1], t < J && (t = J), A < F && (A = F))
                    }
                    A = [t, A];
                    t = A[0] < n;
                    p = A[1] < p;
                    if (t || p) {
                        A = n + "px";
                        y = {
                            "max-height": "none",
                            "max-width": A,
                            padding: "0px",
                            width: A
                        };
                        p && (y.height = "auto");
                        Ug(b, a, y);
                        b = {};
                        t && (t = Sg(e.width), n > t && (b.width = A, b["max-width"] = A));
                        p && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (K in b)
                                if (Object.prototype.hasOwnProperty.call(b, K)) {
                                    var K = !1;
                                    break c
                                }
                            K = !0
                        }
                        K ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.Tg(a, b), b = !0)
                    } else b = !1;
                    b: switch (A = c.width, K = h.defaultView || h.parentWindow || _.r, d) {
                        case 2:
                            a = Vg(a, K, A, e, m);
                            break b;
                        case 1:
                            if (e = a.parentElement)
                                if (m = zg(e)) {
                                    J = m.width;
                                    m = Gg(k, K.document);
                                    n = Jg(m, K);
                                    p = n.position;
                                    F = Sg(n.width) || 0;
                                    t = Jg(e, K);
                                    y = "rtl" === t.direction ? "Right" : "Left";
                                    m = y.toLowerCase();
                                    K = "absolute" === p ? 0 : Sg(t["padding" + y]);
                                    t = Sg(t["border" + y + "Width"]);
                                    A = Math.max(Math.round((J - Math.max(F, A)) / 2), 0);
                                    J = {};
                                    F = 0;
                                    var H = Nk(n);
                                    H && (F = H[4] * ("Right" === y ? -1 : 1), y = H[3] || 1, 1 !== (H[0] || 1) || 1 !== y) && (H[0] = 1, H[3] = 1, J.transform = "matrix(" + H.join(",") + ")");
                                    y = 0;
                                    switch (p) {
                                        case "fixed":
                                            var L, W = null != (L = Number(Kg(n.getPropertyValue(m)))) ? L : 0,
                                                P;
                                            L = null != (P = e.getBoundingClientRect().left) ? P : 0;
                                            y = W - L;
                                            break;
                                        case "relative":
                                            y = null != (W = Number(Kg(n.getPropertyValue(m)))) ? W : 0;
                                            break;
                                        case "absolute":
                                            J[m] = "0"
                                    }
                                    J["margin-" + m] = A - K - t - y - F + "px";
                                    _.Tg(a, J);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (Xg(g, h, k, l, d, c.width, c.height, "gpt_slotexp", f), g = !0) : g = !1;
                    break;
                case 3:
                    d = this.context, g = this.T, h = this.slotId, k = this.l, L = this.wb, l = c.width, P = c.height, W = Sg(e.height) || 0, P >= W || "none" === e.display || "hidden" === e.visibility || !L || -12245933 === L.width || a.getBoundingClientRect().bottom <= L.height ? g = !1 : (L = {
                        height: P + "px"
                    }, Ug(b, a, L), _.Tg(a, L), Xg(d, g, h, k, 3, l, P, "gpt_slotred", f), g = !0)
            }!g && _.E(Cu) && Xg(this.context, this.T, this.slotId, this.l, 0, c.width, c.height, "gpt_pgbrk", f)
        }
        this.B.notify()
    };
    var lo = function(a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.D = c;
        this.B = V(this);
        this.l = Y(this, d);
        this.o = Y(this, e)
    };
    _.R(lo, Z);
    lo.prototype.j = function() {
        var a = this.o.value;
        if (null == a) cx(this.B);
        else {
            var b = Math.round(.3 * this.D);
            2 !== this.format && 3 !== this.format || null === this.l.j.A || !pr(this.l.value, 12, !1) || 0 >= b || a <= b ? this.B.j(a) : this.B.j(b)
        }
    };
    var so = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.W = c;
        this.o = d;
        this.T = f;
        this.K = g;
        this.B = V(this);
        this.G = 2 === e || 3 === e;
        this.l = X(this, h);
        this.M = X(this, k);
        this.J = Y(this, l);
        this.D = Y(this, m)
    };
    _.R(so, Z);
    so.prototype.j = function() {
        var a = rg(this.W, this.o),
            b = Fg(this.slotId, this.T) || Lk(this.l.value, Pg(this.slotId), a);
        this.M.value && !a && (b.style.display = "inline-block");
        this.G ? DE(this.K, this.slotId, function() {
            return void _.Bt(b)
        }) : _.Vm(this, function() {
            return void _.Bt(b)
        });
        a = sI(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.B.j(b)
    };
    var sI = function(a) {
        var b = a.l.value,
            c, d = null == (c = a.J.value) ? void 0 : c.height;
        if (b && !a.D.value && d) {
            var e;
            c = (null != (e = I(a.o, 23)) ? e : I(a.W, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var eo = function(a, b) {
        Z.call(this, a, 859);
        this.F = b;
        this.B = V(this)
    };
    _.R(eo, Z);
    eo.prototype.j = function() {
        this.B.j(!Kc(this.F.top))
    };
    var vo = function(a, b, c) {
        Z.call(this, a, 698);
        this.F = b;
        this.B = V(this);
        this.l = X(this, c)
    };
    _.R(vo, Z);
    vo.prototype.j = function() {
        dx(this.B, Jg(this.l.value, this.F))
    };
    var ko = function(a, b, c, d) {
        Z.call(this, a, 813);
        this.Ja = b;
        this.l = V(this);
        this.D = Y(this, c);
        this.o = Y(this, d)
    };
    _.R(ko, Z);
    ko.prototype.j = function() {
        var a = this.D.value;
        if (!a || _.E(Iv)) this.l.j(!1);
        else if (tI.has(this.Ja)) this.l.j(!1);
        else {
            tI.add(this.Ja);
            a = _.z(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = b.value;
                b = c.Xa;
                (c = c.url) && ce(b, c, this.o.value)
            }
            this.l.j(!0)
        }
    };
    var tI = new w.Set;
    var Do = function(a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.T = c;
        this.B = V(this)
    };
    _.R(Do, Z);
    Do.prototype.j = function() {
        var a = [],
            b;
        (null == (b = this.T.featurePolicy) ? 0 : (B = b.features(), _.u(B, "includes")).call(B, "attribution-reporting")) && a.push("attribution-reporting");
        5 !== this.format && 4 !== this.format || !_.E(zu) || a.push("autoplay");
        a.length ? this.B.j(a.join(";")) : this.B.j("")
    };
    var Go = function(a, b, c, d, e) {
        Z.call(this, a, 934);
        this.F = b;
        this.slotId = c;
        nx(this, d);
        this.l = X(this, e)
    };
    _.R(Go, Z);
    Go.prototype.j = function() {
        var a = this;
        rE(this.slotId, Qn, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.l.value,
                        g = new Ts;
                    var h = x(g, 1, d ? "1" : "0");
                    var k = x(x(h, 2, 2147483647), 3, "/");
                    var l = x(k, 4, a.F.location.hostname);
                    var m = new Yx(a.F);
                    Zx(m, "__gpi_opt_out", l, f);
                    if (d || e) $x(m, "__gads", f), $x(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var Oo = function(a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.F = b;
        this.G = Y(this, c);
        this.o = X(this, d);
        this.l = X(this, e);
        this.D = X(this, f)
    };
    _.R(Oo, Z);
    Oo.prototype.j = function() {
        var a = this,
            b = this.G.value,
            c, d = null == b ? void 0 : null == (c = Q(b, 1)) ? void 0 : c.toUpperCase(),
            e;
        b = null == b ? void 0 : null == (e = Q(b, 2)) ? void 0 : e.toUpperCase();
        if (d && b) {
            e = this.o.value;
            c = this.l.value;
            var f = this.D.value,
                g = f.style.height,
                h = f.style.width,
                k = f.style.display,
                l = f.style.position,
                m = cu(e.id + "_top", d),
                n = cu(e.id + "_bottom", b);
            _.Tg(n, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            f.appendChild(m);
            f.appendChild(n);
            _.Tg(c, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.Tg(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var p;
            _.Tg(f, {
                position: "relative",
                display: (null == (p = this.F.screen.orientation) ? 0 : p.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            NE(this, 722, this.F, "orientationchange", function() {
                var t;
                (null == (t = a.F.screen.orientation) ? 0 : t.angle) ? _.Tg(f, {
                    display: "none"
                }): _.Tg(f, {
                    display: "block"
                })
            });
            _.Vm(this, function() {
                _.Bt(m);
                _.Bt(n);
                f.style.position = l;
                f.style.height = g;
                f.style.width = h;
                f.style.display = k
            })
        }
    };
    var Lo = function(a, b, c, d, e, f) {
        f = void 0 === f ? ao : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.T = d;
        this.qa = e;
        this.J = f;
        this.G = !1;
        this.l = null;
        this.D = this.o = -1;
        this.O = _.fn(function() {
            g.qa.dispatchEvent("impressionViewable", 715, new GH(g.slotId, "publisher_ads"))
        });
        this.U = Fq(function() {
            g.qa.dispatchEvent("slotVisibilityChanged", 716, new HH(g.slotId, "publisher_ads", g.D))
        }, 200);
        this.M = X(this, c);
        var h = new jx;
        Pn(this.slotId, zE).then(function() {
            return void h.notify()
        });
        nx(this, h)
    };
    _.R(Lo, Z);
    Lo.prototype.j = function() {
        var a = this,
            b = this.J(_.Qf(this.context, this.id, function(c) {
                c = _.z(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.u(Number, "isFinite").call(Number, a.o) && uI(a)
            }));
        b.observe(this.M.value);
        NE(this, this.id, this.T, "visibilitychange", function() {
            uI(a)
        });
        _.Vm(this, function() {
            b.disconnect()
        })
    };
    var uI = function(a) {
            var b = !VB(a.T);
            vI(a, 50 <= a.o && b);
            b = Math.floor(b ? a.o : 0);
            if (0 > b || 100 < b || b === a.D ? 0 : -1 !== a.D || 0 !== b) a.D = b, a.U()
        },
        vI = function(a, b) {
            a.G || (b ? null === a.l && (a.l = setTimeout(function() {
                VB(a.T) || (a.O(), a.G = !0);
                a.l = null
            }, 1E3)) : null !== a.l && (clearTimeout(a.l), a.l = null))
        };
    var po = function(a, b, c) {
        Z.call(this, a, 666);
        this.o = b;
        this.l = V(this);
        this.D = Y(this, c)
    };
    _.R(po, Z);
    po.prototype.j = function() {
        var a = new qo;
        if (null !== this.D.j.A) {
            var b = x(a, 2, this.D.value);
            x(b, 3, 1)
        }
        if (this.o) {
            a = [this.o, a];
            b = new qo;
            a = _.z(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Pi(c, 1) && x(b, 1, Q(c, 1)), Pi(c, 2) && x(b, 2, Q(c, 2)), Pi(c, 3) && x(b, 3, Gd(c, 3));
            a = b
        }
        b = this.l;
        a = Pi(a, 2) ? Pi(a, 3) && 0 !== (0, _.wj)() ? Q(a, 2) * Gd(a, 3) : Q(a, 2) : null;
        dx(b, a)
    };
    var wo = function(a, b, c, d, e, f) {
        f = void 0 === f ? co : f;
        Z.call(this, a, 666);
        this.o = f;
        this.B = lx(this);
        nx(this, b);
        this.l = X(this, c);
        this.G = Y(this, d);
        this.D = Y(this, e)
    };
    _.R(wo, Z);
    wo.prototype.j = function() {
        var a = this.D.value,
            b = this.G.value,
            c = this.l.value;
        null == a || 0 > a || 0 === b || !Lg(c) ? this.B.notify() : wI(this, a, b, c)
    };
    var wI = function(a, b, c, d) {
        var e = a.o(b, _.Qf(a.context, 291, function(f, g) {
            f = _.z(f);
            for (var h = f.next(); !h.done; h = f.next())
                if (h = h.value, !(0 >= h.intersectionRatio)) {
                    g.unobserve(h.target);
                    a.B.notify();
                    break
                }
        }));
        null != c && setTimeout(function() {
            a.B.notify();
            e.disconnect()
        }, c);
        e.observe(d);
        _.Vm(a, function() {
            e.disconnect()
        })
    };
    var uo = function(a, b, c, d, e, f) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.wb = c;
        this.K = d;
        this.B = lx(this);
        this.o = X(this, e);
        this.l = Y(this, f)
    };
    _.R(uo, Z);
    uo.prototype.j = function() {
        var a = this,
            b, c = null != (b = this.l.value) ? b : 0;
        if (0 !== (0, _.wj)() || 0 < c) {
            var d = document;
            b = UB(d);
            if (VB(d) && b && (0 < Yl(this.K, this.slotId) || !xI(this)) && b) {
                var e = NE(this, 324, d, b, function() {
                    VB(d) || (e && e(), a.B.notify())
                });
                if (e) return
            }
        }
        this.B.notify()
    };
    var xI = function(a) {
        var b = a.o.value;
        try {
            var c, d = null != (c = top) ? c : void 0;
            if (void 0 === d) return !0;
            var e = xl(null == d ? void 0 : d.document, d).y,
                f = e + a.wb.height;
            return b.y >= e && b.y <= f
        } catch (g) {
            return !0
        }
    };
    var oo = function(a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.W = b;
        this.R = c;
        this.F = d;
        this.B = V(this);
        this.l = Y(this, e);
        this.o = Y(this, f)
    };
    _.R(oo, Z);
    oo.prototype.j = function() {
        var a;
        if (Bi(Au) || (null == (a = this.R) ? 0 : mg(a, 16)) && cf("google_range_debug", this.F)) this.B.j(!0);
        else {
            var b;
            a = !(null == (b = this.l.value) || !Q(b, 1)) && (I(this.R, 12) || I(this.W, 13)) || !!this.o.value;
            this.B.j(!!a)
        }
    };
    var Co = function(a, b, c, d, e, f) {
        Z.call(this, a, 828);
        this.o = b;
        this.slotId = c;
        this.N = d;
        this.B = V(this);
        this.l = X(this, e);
        this.D = Y(this, f)
    };
    _.R(Co, Z);
    Co.prototype.j = function() {
        var a = this,
            b = this.N,
            c = b.W,
            d = b.R[this.slotId.getDomId()],
            e = this.D.value;
        b = null;
        var f;
        d = null != (f = null == d ? void 0 : d.Ba()) ? f : null;
        c = c.Ba();
        (null == d ? 0 : Pi(d, 4)) ? b = I(d, 4): (null == c ? 0 : Pi(c, 4)) ? b = I(c, 4) : null != e && (b = e);
        var g = String(b);
        null == e || e === b || this.l.value || O(this.o, JF(g, String(e)));
        this.l.value || Yg("gpt_sf_r", function(h) {
            dh(h, a.context);
            M(h, "GAM", String(e));
            M(h, "Final", g)
        });
        this.B.j(_.E(tv) ? Eg() : dD())
    };
    var Ao = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 719);
        this.W = b;
        this.D = c;
        this.B = V(this);
        this.l = X(this, d);
        this.G = X(this, e);
        this.o = Y(this, f);
        this.J = Y(this, g)
    };
    _.R(Ao, Z);
    Ao.prototype.j = function() {
        var a = this.l.value.kind;
        switch (a) {
            case 0:
                if (this.l.value.sa)
                    if (this.G.value) yI(this);
                    else {
                        if (a = this.o.value) a = Yk(), a = !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"]);
                        a ? this.B.j(KD) : cx(this.B)
                    }
                else cx(this.B);
                break;
            case 1:
                yI(this);
                break;
            case 2:
                cx(this.B);
                break;
            default:
                Fa(a)
        }
    };
    var yI = function(a) {
        var b = a.J.value,
            c = new Ji;
        b = x(c, 3, b);
        I(Qi([b, a.W.Ba(), a.D.Ba()]), 3) ? a.B.j(KD) : cx(a.B)
    };
    var ro = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.ca = c;
        this.M = d;
        this.window = e;
        this.pa = V(this);
        this.o = V(this);
        this.Wb = V(this);
        this.l = Bi(Au).split(",");
        this.G = Fi(Bu);
        this.La = mg(c, 16) ? hc(c, Zi, 16) : null;
        this.J = bf("google_range_debug", this.window);
        this.O = Y(this, f);
        this.da = Y(this, g);
        this.U = Y(this, h);
        this.D = X(this, k);
        this.Y = X(this, l)
    };
    _.R(ro, Z);
    ro.prototype.j = function() {
        if (0 !== this.D.value.kind || this.D.value.sa.length) {
            var a;
            if (a = !!(this.l.length || this.La && this.J)) {
                b: if (this.l.length) {
                    if (this.G.length && (a = this.adUnitPath.split("/"), !_.u(this.G, "includes").call(this.G, a[a.length - 1]))) {
                        a = !1;
                        break b
                    }
                    a = !0
                } else a = !1;
                var b = a;a = b ? zI(this) : null;
                if (b && a) {
                    b = this.Y.value;
                    var c, d, e = null != (d = null == (c = zg(b.parentElement)) ? void 0 : c.width) ? d : 0;
                    c = "p" === this.l[0];
                    d = Number(this.l[0]);
                    if (c = "f" === this.l[0] ? this.M : d && 0 < d ? d : c ? Math.min(e, this.M) : null) {
                        d = a.width;
                        var f = a.height,
                            g = this.l[1],
                            h = Number(g);
                        d = "ratio" === g && d ? Math.floor(f / d * c) : h && 0 < h ? f * h : f;
                        AI(this, c, d, {
                            kind: 0,
                            sa: BI(c, d, "<p>Requested size:" + a.width + "x" + a.height + "</p>")
                        }, c <= e ? 1 : 2, b);
                        a = !0
                    } else a = !1
                } else a = !1;
                if (!a) a: if (this.La && this.J) {
                    a = sm(this.La, this.window);
                    b = tm(this.La, this.window);
                    e = um(this.La);
                    c = vm(this.La);
                    switch (this.J) {
                        case "max":
                            d = a;
                            f = b;
                            break;
                        case "min":
                            d = e;
                            f = c;
                            break;
                        case "banner":
                            d = a;
                            f = 90 > b ? b : 90 < c ? c : 90;
                            break;
                        case "skyscraper":
                            d = 90 > a ? a : 90 < e ? e : 90;
                            f = b;
                            break;
                        default:
                            a = !1;
                            break a
                    }
                    AI(this, d, f, {
                        kind: 0,
                        sa: BI(d, f, "<p>Minimum size:" + e + "x" + c + "</p><p>Maximum size:" + (a + "x" + b + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>"))
                    });
                    a = !0
                } else a = !1
            }
            a || CI(this)
        } else CI(this)
    };
    var zI = function(a) {
            a = lg(a.ca)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.yg(a[0], a[1]) : null
        },
        BI = function(a, b, c) {
            return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
        },
        AI = function(a, b, c, d, e, f) {
            e = void 0 === e ? a.O.value : e;
            a.o.j(new _.yg(b, c));
            a.pa.j(d);
            dx(a.Wb, e);
            f && _.nu(f, "opacity", .5)
        },
        CI = function(a) {
            var b = a.da.value;
            if (null == b) throw new aj("Missing 'width'.");
            var c = a.U.value;
            if (null == c) throw new aj("Missing 'height'.");
            AI(a, b, c, a.D.value)
        };
    var mo = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 673);
        this.slotId = b;
        this.vb = c;
        this.D = d;
        this.o = e;
        this.T = f;
        this.l = g;
        this.K = h;
        this.B = V(this)
    };
    _.R(mo, Z);
    mo.prototype.j = function() {
        var a = this,
            b, c;
        return _.ab(function(d) {
            if (1 == d.j) {
                if (a.vb) {
                    DI(a, a.vb);
                    a.B.j(a.vb);
                    d.j = 0;
                    return
                }
                if (qg(a.l)) {
                    a.B.j(EI(a));
                    d.j = 0;
                    return
                }
                return bb(d, Pn(a.slotId, sE), 4)
            }
            b = d.m;
            c = b.detail;
            if (a.m) return d.return();
            DI(a, c);
            a.B.j(c);
            d.j = 0
        })
    };
    var EI = function(a) {
            var b = _.$c("INS");
            b.id = a.D;
            _.Tg(b, {
                display: "none"
            });
            a.T.documentElement.appendChild(b);
            var c = function() {
                return void _.Bt(b)
            };
            2 === a.l || 3 === a.l ? DE(a.K, a.slotId, c) : _.Vm(a, c);
            return b
        },
        DI = function(a, b) {
            if (2 !== a.l && 3 !== a.l) {
                for (var c = _.z(_.u(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next()) d = d.value, 1 === d.nodeType && d.id !== a.o && _.Bt(d);
                b.style.display = ""
            }
        };
    var to = function(a, b) {
        Z.call(this, a, 676);
        this.B = V(this);
        this.l = X(this, b)
    };
    _.R(to, Z);
    to.prototype.j = function() {
        var a = wg(this.l.value);
        this.B.j(a)
    };
    var Bo = function(a, b, c, d) {
        Z.call(this, a, 807);
        this.F = b;
        this.B = lx(this);
        this.l = Y(this, c);
        this.o = Y(this, d)
    };
    _.R(Bo, Z);
    Bo.prototype.j = function() {
        var a = this.l.value;
        if (a && !this.o.value) {
            var b = gl(this.F);
            $D(new ZD(b, a)) || this.P(new aj("Cannot create top window frame"))
        }
        this.B.notify()
    };
    var yo = function(a, b) {
        Z.call(this, a, 881);
        this.B = V(this);
        this.l = Y(this, b)
    };
    _.R(yo, Z);
    yo.prototype.j = function() {
        if (_.E(Fv) || !this.l.value) cx(this.B);
        else {
            for (var a = this.l.value, b = {}, c = _.z(fc(a, Ys, 7)), d = c.next(); !d.done; d = c.next()) d = d.value, b[Dh(d, 1)] = JSON.parse(Dh(d, 2));
            (c = hc(a, Xs, 6)) && (b["https://googleads.g.doubleclick.net"] = c.toJSON());
            c = {};
            d = _.z(fc(a, Zs, 11));
            for (var e = d.next(); !e.done; e = d.next()) e = e.value, c[Dh(e, 1)] = ld(e, 2);
            var f;
            this.B.j({
                seller: "https://pubads.g.doubleclick.net",
                decisionLogicUrl: Dh(a, 1),
                trustedScoringSignalsUrl: Dh(a, 2),
                interestGroupBuyers: Vb(a, 3),
                auctionSignals: JSON.parse(Dh(a, 4) || "{}"),
                sellerSignals: (null == (f = ct(a)) ? void 0 : f.toJSON()) || [],
                sellerTimeout: ld(a, 15) || 50,
                perBuyerSignals: b,
                perBuyerTimeouts: c
            })
        }
    };
    yo.prototype.A = function() {
        cx(this.B)
    };
    var FI = navigator,
        zo = function(a, b, c, d, e, f) {
            Z.call(this, a, 882);
            this.K = b;
            this.pa = V(this);
            this.G = V(this);
            this.l = Y(this, c);
            this.J = Y(this, d);
            this.M = Y(this, e);
            this.O = Y(this, f)
        };
    _.R(zo, Z);
    var GI = function(a, b, c) {
            var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
                e, f, g = null == (e = a.l.value) ? void 0 : null == (f = ct(e)) ? void 0 : pr(f, 18),
                h, k;
            if ((e = null == (h = a.l.value) ? void 0 : null == (k = ct(h)) ? void 0 : pr(k, 7)) || g) d += "&isContextualWinner=1";
            e && (d += "&hasXfpAds=1");
            a.o && (d += "&winner_qid=" + encodeURIComponent(a.o));
            a.D && (d += "&xfpQid=" + encodeURIComponent(a.D));
            var l, m;
            if (null == (l = a.l.value) ? 0 : null == (m = ct(l)) ? 0 : pr(m, 4)) d += "&is_plog=1";
            var n, p, t, A, y, J;
            !(null == (n = a.l.value) ? 0 : null == (p = ct(n)) ? 0 : pr(p, 17)) && ((null == (t = a.l.value) ? 0 : null == (A = ct(t)) ? 0 : pr(A, 9)) || (null == (y = a.l.value) ? 0 : null == (J = ct(y)) ? 0 : pr(J, 10))) && (d += "&turtlexTest=1");
            d += "&applied_timeout_ms=" + c + "&duration_ms=" + Math.round(b);
            Ln(d)
        },
        HI = function(a) {
            dx(a.pa, a.M.value);
            dx(a.G, a.O.value)
        };
    zo.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p, t, A, y, J, F, K, H, L, W;
        return _.ab(function(P) {
            if (1 == P.j) {
                if (_.E(Fv) || !a.J.value) return HI(a), P.return();
                c = null == (b = a.l.value) ? void 0 : b.getWidth();
                e = null == (d = a.l.value) ? void 0 : d.getHeight();
                if (!c || !e) return HI(a), P.return();
                h = null != (g = null == (f = a.l.value) ? void 0 : ct(f)) ? g : void 0;
                a.o = null == (k = h) ? void 0 : k.getEscapedQemQueryId();
                a.D = null == (l = h) ? void 0 : Dh(l, 6);
                n = null == (m = h) ? void 0 : pr(m, 9);
                (t = null == (p = h) ? void 0 : pr(p, 10)) && HI(a);
                Yg("pre_run_ad_auction_ping", function(aa) {
                    dh(aa, a.context);
                    var ta;
                    M(aa, "winner_qid", null != (ta = a.o) ? ta : "");
                    var Oa;
                    M(aa, "xfpQid", null != (Oa = a.D) ? Oa : "")
                }, 1);
                A = performance.now();
                J = (null == (y = a.l.value) ? void 0 : ld(y, 8)) || 1E3;
                return bb(P, II(a, a.J.value, h, J), 2)
            }
            F = P.m;
            K = Math.round(performance.now() - A);
            H = 2 === F;
            L = 1 === F;
            W = F && !H && !L;
            Yg("run_ad_auction_stats", function(aa) {
                dh(aa, a.context);
                M(aa, "duration_ms", K);
                M(aa, "applied_timeout_ms", J);
                M(aa, "timed_out", H);
                M(aa, "auction_skipped", L);
                M(aa, "auction_winner", W ? 1 : 0);
                var ta;
                M(aa, "thread_release_only", (null == (ta = h) ? 0 : pr(ta, 15)) ? 1 : 0);
                var Oa;
                M(aa, "winner_qid", null != (Oa = a.o) ? Oa : "");
                var Ra;
                M(aa, "xfpQid", null != (Ra = a.D) ? Ra : "")
            }, 1);
            if (!F || L || H) return GI(a, K, H ? J : 0), t || HI(a), P.return();
            if (t) return P.return();
            if (n) return HI(a), P.return();
            a.pa.j({
                kind: 2,
                ed: F
            });
            a.G.j(new _.yg(c, e));
            P.j = 0
        })
    };
    zo.prototype.A = function() {
        HI(this)
    };
    var II = function(a, b, c, d) {
        var e, f, g, h, k, l, m, n, p;
        return _.ab(function(t) {
            if (1 == t.j) {
                f = (null == (e = c) ? void 0 : ld(e, 14)) || -1;
                if (0 < f && a.K.A >= f) return t.return(1);
                h = (null == (g = c) ? void 0 : ld(g, 13)) || -1;
                if (0 < h && a.K.C >= h) return t.return(1);
                ++a.K.A;
                ++a.K.C;
                n = (null == (k = c) ? 0 : pr(k, 15)) ? new w.Promise(function(A) {
                    setTimeout(function() {
                        A(null)
                    }, 0)
                }) : null == (m = (l = FI).runAdAuction) ? void 0 : m.call(l, b);
                return bb(t, w.Promise.race([n, du(d)]), 2)
            }
            p = t.m;
            --a.K.A;
            return t.return(p)
        })
    };
    var JI = function(a, b) {
            this.context = a;
            this.m = b;
            this.j = new w.Map
        },
        KI = function(a, b) {
            if (b) {
                var c;
                null == (c = a.j.get(b)) || c.za();
                a.j.delete(b)
            }
        },
        MI = function(a, b, c, d, e, f, g, h, k, l) {
            var m = document,
                n = window;
            KI(a, b);
            rE(b, wE, LI);
            c = Qo(a.context, a.m, b, c, d, e, f, m, g, h, k, l);
            a.j.set(b, c);
            _.Vm(b, function() {
                return void KI(a, b)
            });
            n.top !== n && n.addEventListener("pagehide", function(p) {
                p.persisted || KI(a, b)
            });
            Rd(c)
        },
        LI = _.fn(function() {
            return void Rg("gpt-first-ad-render")
        });
    var NI = function(a, b) {
        Z.call(this, a, 802);
        this.F = b;
        this.l = V(this);
        this.o = V(this)
    };
    _.R(NI, Z);
    NI.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.ab(function(f) {
            if (1 == f.j) {
                if (!_.E(Xu)) return a.o.j(!1), a.l.j(""), f.return();
                b = He(a.F);
                if (!b) {
                    a.o.j(!1);
                    a.l.j("");
                    f.j = 0;
                    return
                }
                a.o.j(!0);
                f.A = 3;
                return bb(f, b, 5)
            }
            if (3 != f.j) return d = null != (c = f.m) ? c : "0", d.length > _.Ad(Zu) && (Uf(a.context, a.id, new aj("ML:" + (_.E(Yu) ? d : d.length))), d = "0"), a.l.j(d), db(f, 0);
            e = eb(f);
            Uf(a.context, a.id, e);
            a.l.j("0");
            f.j = 0
        })
    };
    NI.prototype.A = function() {
        this.o.j(!1);
        this.l.j("")
    };
    var OI = function(a, b, c) {
        Z.call(this, a, 944);
        this.F = b;
        this.l = new Yx(this.F);
        this.o = Y(this, c)
    };
    _.R(OI, Z);
    OI.prototype.j = function() {
        var a = this.o.value;
        if (a && el(this.l, a)) {
            var b = cl(this.l, "__gpi_opt_out", a);
            if (b) {
                var c = new Ts;
                b = x(c, 1, b);
                b = x(x(b, 2, 2147483647), 3, "/");
                b = x(b, 4, this.F.location.hostname);
                Zx(this.l, "__gpi_opt_out", b, a)
            }
        }
    };
    var PI = function(a, b, c, d) {
        d = void 0 === d ? So : d;
        Z.call(this, a, 883);
        this.D = b;
        this.G = d;
        this.l = lx(this);
        this.o = X(this, c)
    };
    _.R(PI, Z);
    PI.prototype.j = function() {
        var a = this;
        return _.ab(function(b) {
            if (1 == b.j) {
                if (!rd(a.o.value) || _.E(Bl)) return a.l.notify(), b.return();
                _.E(cv) || IB(a.D);
                if (!a.G()) {
                    JB(null);
                    b.j = 2;
                    return
                }
                return bb(b, new w.Promise(function(c) {
                    return void JB(c)
                }), 2)
            }
            a.l.notify();
            b.j = 0
        })
    };
    var QI = function(a, b, c, d) {
        Z.call(this, a, 884);
        this.ja = b;
        this.l = V(this);
        this.D = Y(this, c);
        this.o = X(this, d)
    };
    _.R(QI, Z);
    QI.prototype.j = function() {
        _.C(fp).m = this.D.value;
        lG(_.C(fp), cl(this.ja, "__gads", this.o.value));
        hp(20);
        hp(2);
        this.l.j(_.C(Dd).j())
    };
    var RI = function(a, b, c) {
        Z.call(this, a, 873);
        this.F = b;
        this.l = X(this, c)
    };
    _.R(RI, Z);
    RI.prototype.j = function() {
        var a = this.context,
            b = this.l.value,
            c = this.F;
        !Xe()._pubconsole_disable_ && (b = vd("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || Yh(a, c))
    };
    var SI = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, A, y, J, F, K, H, L, W) {
        Z.call(this, a, 798);
        var P = this;
        this.K = b;
        this.N = c;
        this.ja = d;
        this.Ka = e;
        this.Ia = f;
        this.Da = g;
        this.Ua = h;
        this.Ta = k;
        this.Va = m;
        this.Na = n;
        this.F = p;
        this.B = V(this);
        this.ca = X(this, t);
        this.J = X(this, A);
        this.D = X(this, l);
        this.G = mx(this, y);
        this.O = X(this, J);
        this.U = X(this, F);
        this.Y = X(this, K);
        this.o = Y(this, H);
        this.l = mx(this, W);
        nx(this, L);
        _.E(Ev) && (_.E(Cv) ? W.promise.then(function(aa) {
            return P.M = aa
        }) : this.l = mx(this, W))
    };
    _.R(SI, Z);
    SI.prototype.j = function() {
        for (var a = this, b = new w.Map, c = _.z(this.J.value), d = c.next(); !d.done; d = c.next()) d = d.value, b.set(d, this.Ia ? TI(this, d) : function() {
            return a.ca.value
        });
        this.B.j(b)
    };
    var TI = function(a, b) {
        return Ig(function() {
            var c = new Xx,
                d, e, f, g = null != (f = null != (e = a.M) ? e : null == (d = a.l) ? void 0 : d.value) ? f : "1",
                h;
            c = new YG({
                Fb: {
                    F: a.F,
                    context: a.context,
                    K: a.K,
                    ja: a.ja,
                    ba: c,
                    Ia: !1,
                    vd: a.D.value
                },
                lb: {
                    fa: [b],
                    N: a.N,
                    Da: a.Da,
                    Dd: !0
                },
                ee: {
                    Ua: a.Ua,
                    Ta: a.Ta
                },
                Id: {
                    gd: a.O.value,
                    Fd: a.U.value,
                    Qd: a.Y.value
                },
                Od: {
                    zd: null != (h = a.G.value) ? h : "0"
                },
                fd: {
                    Ka: a.Ka,
                    Va: a.Va,
                    Na: a.Na
                },
                kd: {
                    ld: a.o.value
                },
                Zd: {
                    ae: g
                }
            });
            return af($G(c)).url
        })
    };
    var UI = function(a, b, c, d, e, f) {
        f = void 0 === f ? To : f;
        Z.call(this, a, 886);
        this.fa = b;
        this.K = c;
        this.l = d;
        this.T = e;
        this.o = f;
        this.B = lx(this)
    };
    _.R(UI, Z);
    UI.prototype.j = function() {
        var a = this,
            b, c;
        return _.ab(function(d) {
            if (1 == d.j) return 3 !== hl(a.T) ? (d.j = 2, d = void 0) : d = bb(d, new w.Promise(function(e) {
                return void XB(e, a.T)
            }), 2), d;
            if (4 != d.j) return b = a.l ? bo(a.l) : null, null == b || (c = a.fa.some(function(e) {
                return !Lg(Gg(e))
            })) ? (a.B.notify(), d.return()) : bb(d, VI(a, b), 4);
            a.B.notify();
            d.j = 0
        })
    };
    var VI = function(a, b) {
        return _.ab(function(c) {
            return c.return(new w.Promise(function(d) {
                var e = a.o(function(k, l) {
                    k.some(function(m) {
                        return 0 < m.intersectionRatio
                    }) && (l.disconnect(), d())
                }, b + "%");
                _.Vm(a, function() {
                    return void e.disconnect()
                });
                for (var f = {}, g = _.z(a.fa), h = g.next(); !h.done; f = {
                        Ab: f.Ab
                    }, h = g.next()) {
                    h = h.value;
                    f.Ab = Gg(h);
                    if (!f.Ab) break;
                    e.observe(f.Ab);
                    EE(a.K, h, function(k) {
                        return function() {
                            return void e.unobserve(k.Ab)
                        }
                    }(f))
                }
            }))
        })
    };
    var WI = function(a, b, c, d) {
        Z.call(this, a, 936);
        this.o = b;
        this.B = V(this);
        _.E(kv) || (this.l = Y(this, c), this.D = Y(this, d))
    };
    _.R(WI, Z);
    WI.prototype.j = function() {
        var a, b, c, d;
        this.B.j([].concat(_.Sc(this.o), _.Sc(null != (c = null == (a = this.l) ? void 0 : a.value) ? c : []), _.Sc(null != (d = null == (b = this.D) ? void 0 : b.value) ? d : [])))
    };
    var XI = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Z.call(this, a, 866);
        this.D = b;
        this.G = c;
        this.o = d;
        this.Ka = e;
        this.Na = f;
        this.Va = g;
        this.ba = h;
        this.T = k;
        this.B = lx(this);
        this.l = X(this, l);
        this.M = X(this, m);
        nx(this, n);
        this.J = X(this, p)
    };
    _.R(XI, Z);
    XI.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n;
        return _.ab(function(p) {
            if (1 == p.j) {
                b = a.M.value;
                if (!b) return a.B.notify(), p.return();
                c = _.$c("SCRIPT");
                d = {
                    source: b,
                    credentials: a.J.value ? "include" : "omit",
                    resources: [a.Va.toString()]
                };
                c.setAttribute("type", "webbundle");
                Ua(c, new Ta(JSON.stringify(d).replace(/</g, "\\x3c"), Ym));
                e = _.$c("SCRIPT");
                Va(e, a.Va);
                a.T.head.appendChild(c);
                a.T.head.appendChild(e);
                a.B.notify();
                return bb(p, YI(a), 2)
            }
            f = p.m;
            g = f.je;
            h = f.We;
            delete Xe()[a.Na.replace("googletag.", "")];
            if (g.length !== h.length) return a.G(new Ww("Received " + g.length + " ad URLs but " + h.length + " metadatas")), p.return();
            d.resources = g.filter(function(t) {
                return t
            });
            d.resources.length ? (k = _.$c("SCRIPT"), k.setAttribute("type", "webbundle"), Ua(k, new Ta(JSON.stringify(d).replace(/</g, "\\x3c"), Ym)), a.T.head.removeChild(c), a.T.head.appendChild(k)) : a.T.head.removeChild(c);
            for (l = 0; l < g.length; l++) m = g[l], n = h[l], a.D(l, n, {
                kind: 1,
                url: m
            }, a.l.value, a.ba);
            a.o(g.length - 1, a.l.value, a.ba);
            p.j = 0
        })
    };
    var YI = function(a) {
        var b = Xe(),
            c = a.Na.replace("googletag.", "");
        return new w.Promise(function(d) {
            var e = !1;
            Object.defineProperty(b, c, {
                value: function(f, g) {
                    e || d({
                        je: f,
                        We: g
                    });
                    e = !0
                },
                writable: !1,
                enumerable: !1,
                configurable: !0
            })
        })
    };
    var ZI = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.D = b;
        this.Ia = c;
        this.N = d;
        this.o = e;
        this.F = f;
        this.ba = g;
        this.l = V(this)
    };
    _.R(ZI, Z);
    ZI.prototype.j = function() {
        var a = this,
            b = this.D;
        !this.Ia && 1 < this.D.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.m) return !1;
            var d = a.N.R[c.getDomId()];
            if (mj(a.F) && 4 === qj(d)) {
                O(a.o, GF("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath())));
                var e = !0
            } else e = !1;
            return !e && !sj(a.context, a.o, c, d, a.F, a.ba)
        });
        30 < b.length && (O(this.o, CF("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.l.j(b)
    };
    var $I = function(a, b, c, d, e) {
        Z.call(this, a, 957);
        this.ba = b;
        this.l = c;
        this.o = e;
        this.B = V(this);
        d && (this.D = X(this, d))
    };
    _.R($I, Z);
    $I.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k;
        return _.ab(function(l) {
            if (1 == l.j) {
                b = _.Ad(Uu);
                if (2 === b && !rd(a.ba)) {
                    a.B.j((null == (c = a.D) ? 0 : c.value) ? "0" : "");
                    l.j = 0;
                    return
                }
                h = a.B;
                k = h.j;
                return bb(l, null != (f = null == (d = a.l) ? void 0 : d.promise) ? f : null == (e = a.o) ? void 0 : e.promise.then(function(m) {
                    return m ? m() : ""
                }), 3)
            }
            k.call(h, null != (g = l.m) ? g : "");
            l.j = 0
        })
    };
    $I.prototype.A = function() {
        this.B.j("")
    };
    var aJ = function(a, b, c) {
        Z.call(this, a, 919);
        this.l = b;
        this.ba = c;
        this.B = V(this)
    };
    _.R(aJ, Z);
    aJ.prototype.j = function() {
        var a, b = !(null == (a = this.l) ? 0 : I(a, 9)) && !!rd(this.ba);
        this.B.j(b)
    };
    var bJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.K = b;
        this.N = c;
        this.T = d;
        this.B = lx(this);
        this.l = X(this, e);
        nx(this, f)
    };
    _.R(bJ, Z);
    bJ.prototype.j = function() {
        var a = this.N,
            b = a.W;
        a = a.R;
        for (var c = _.z(this.l.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()],
                f = this.T;
            f = void 0 === f ? document : f;
            xm(e, b) && !this.K.fb(d) && ym(d, f, e, b)
        }
        this.B.notify()
    };
    var cJ = function(a, b, c, d, e, f) {
        f = void 0 === f ? rh : f;
        Z.call(this, a, 939);
        this.o = b;
        this.F = c;
        this.ba = d;
        this.l = f;
        nx(this, e)
    };
    _.R(cJ, Z);
    cJ.prototype.j = function() {
        if (_.E(yv) || rd(this.ba)) {
            var a = this.l,
                b = this.F,
                c = new An;
            var d = new Bn;
            d = ac(d, 1, String(this.o), "");
            c = Ec(c, 5, d);
            c = ac(c, 4, 1, 0);
            c = ac(c, 2, 2, 0);
            c = ac(c, 3, this.context.Za || this.context.ya, "");
            d = rd(this.ba);
            c = ac(c, 6, d, !1);
            a.call(this, b, c)
        }
    };
    var dJ = function(a, b, c, d, e) {
        Z.call(this, a, 905);
        this.N = b;
        this.l = c;
        this.B = lx(this);
        this.o = X(this, d);
        nx(this, e)
    };
    _.R(dJ, Z);
    dJ.prototype.j = function() {
        for (var a = _.z(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            switch (null == (c = this.N.R[b.value.getDomId()]) ? void 0 : qj(c)) {
                case 2:
                case 3:
                case 5:
                    this.l.load(_.aI);
                    return
            }
        }
        this.B.notify()
    };
    var eJ = function(a, b, c, d, e) {
        Z.call(this, a, 833);
        this.Ka = b;
        this.l = c;
        this.F = d;
        this.B = lx(this);
        nx(this, e)
    };
    _.R(eJ, Z);
    eJ.prototype.j = function() {
        if ("wbn" !== this.Ka) {
            var a = this.l,
                b = this.F,
                c = _.E(tv) ? Eg() : dD();
            c = {
                version: am ? am : am = Di(),
                Nb: c,
                wf: _.E(uv)
            };
            c = ND.Re(c);
            var d = tD(b);
            c = d ? La(c, new w.Map([
                ["n", String(d)]
            ])) : c;
            d = Fi(Gi);
            for (var e = new w.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
            c = La(c, e);
            d = a.resources[c.toString()];
            var g;
            _.E(tv) || _.E(sv) || d || (null == (g = Xe()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.$c("IFRAME"), a.src = Ka(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
        this.B.notify()
    };
    var fJ = function(a, b, c, d, e) {
        Z.call(this, a, 928);
        this.K = b;
        this.requestId = c;
        this.B = lx(this);
        this.l = X(this, d);
        nx(this, e)
    };
    _.R(fJ, Z);
    fJ.prototype.j = function() {
        this.K.l();
        var a = this.context,
            b = this.requestId,
            c = this.l.value.length;
        if (a.Mb) {
            var d = a.kb;
            a = gf(a);
            var e = new zw;
            b = ac(e, 2, b, 0);
            c = ac(b, 1, c, 0);
            c = kf(a, 7, lf, c);
            Uc(d, c)
        }
        this.B.notify()
    };
    var gJ = function(a, b, c, d) {
        Z.call(this, a, 867);
        this.qa = b;
        this.N = c;
        this.B = lx(this);
        this.l = X(this, d)
    };
    _.R(gJ, Z);
    gJ.prototype.j = function() {
        for (var a = _.z(this.l.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.z(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = Q(this.N.R[b.getDomId()], 20);
            b.dispatchEvent(vE, 808, {
                re: c,
                hf: d
            });
            this.qa.dispatchEvent("slotRequested", 705, new NH(b, "publisher_ads"))
        }
        this.B.notify()
    };
    var hJ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, A, y, J, F, K, H, L, W, P) {
        Z.call(this, a, 785, _.Ad(wv));
        var aa = this;
        this.Ia = b;
        this.K = c;
        this.ja = d;
        this.N = e;
        this.Ka = f;
        this.Da = g;
        this.Ua = h;
        this.Ta = k;
        this.Va = m;
        this.Na = n;
        this.nb = p;
        this.ba = t;
        this.F = A;
        this.G = y;
        this.bc = J;
        this.Y = K;
        this.l = V(this);
        this.M = V(this);
        this.O = V(this);
        this.U = V(this);
        nx(this, W);
        _.E(Vu) ? y.promise.then(function(ta) {
            return aa.ia = ta
        }) : this.ga = mx(this, y);
        this.o = mx(this, J);
        this.da = X(this, l);
        this.J = X(this, F);
        this.ca = Y(this, H);
        Zw(this.C, K, !0);
        nx(this, P);
        _.E(Cv) ? L.promise.then(function(ta) {
            return aa.ha = ta
        }) : this.D = mx(this, L)
    };
    _.R(hJ, Z);
    hJ.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p, t, A, y, J, F, K, H;
        return _.ab(function(L) {
            switch (L.j) {
                case 1:
                    if (!a.J.value.length) return a.l.j(""), L.return();
                    b = !_.E(Bl);
                    if (b) {
                        ue();
                        var W = we[1]
                    } else W = "";
                    c = W;
                    b ? (ue(), W = we[4]) : W = "";
                    d = W;
                    b ? (ue(), W = we[6]) : W = "";
                    e = W;
                    k = null != (h = null != (g = a.ia) ? g : null == (f = a.ga) ? void 0 : f.value) ? h : "0";
                    _.E(Cv) ? l = null != (m = a.ha) ? m : 1 : l = null != (t = null == (n = a.D) ? void 0 : n.value) ? t : null !== (null == (p = a.D) ? void 0 : p.value) || a.D.j.m ? null : 1;
                    a.o.value && (a.K.ac = a.o.value);
                    A = new YG({
                        Fb: {
                            F: a.F,
                            context: a.context,
                            K: a.K,
                            ja: a.ja,
                            ba: a.ba,
                            Ia: a.Ia,
                            vd: a.da.value
                        },
                        lb: {
                            fa: a.J.value,
                            N: a.N,
                            Da: a.Da,
                            Dd: !1
                        },
                        ee: {
                            Ua: a.Ua,
                            Ta: a.Ta
                        },
                        Id: {
                            gd: c,
                            Fd: d,
                            Qd: e
                        },
                        Od: {
                            zd: k
                        },
                        fd: {
                            Ka: a.Ka,
                            Va: a.Va,
                            Na: a.Na
                        },
                        kd: {
                            ld: a.ca.value
                        },
                        Zd: {
                            ae: l
                        }
                    });
                    y = af($G(A));
                    J = y.url;
                    F = y.nd;
                    Uw(a.nb, (9).toString(), 9, F);
                    a.l.j(J);
                    a.M.j(c);
                    a.O.j(d);
                    a.U.j(e);
                    return bb(L, a.G.promise, 2);
                case 2:
                    if (a.m) return L.return();
                    Yg("gpt_paw", function(P) {
                        dh(P, a.context);
                        var aa;
                        M(P, "sig", null != (aa = a.G.o) ? aa : -1);
                        M(P, "req", a.I);
                        M(P, "req_cnt", a.K.H);
                        var ta;
                        M(P, "dm", null != (ta = window.navigator.deviceMemory) ? ta : -1)
                    }, _.Ad($u));
                    if (!a.o.value) {
                        L.j = 3;
                        break
                    }
                    return bb(L, a.bc.promise, 4);
                case 4:
                    Yg("gpt_etu", function(P) {
                        dh(P, a.context);
                        var aa;
                        M(P, "sig", null != (aa = a.bc.o) ? aa : -1);
                        M(P, "req", a.I)
                    });
                case 3:
                    K = gE();
                    H = !!_.We(258);
                    if (!K && !H) {
                        L.j = 0;
                        break
                    }
                    return bb(L, a.Y.promise, 6);
                case 6:
                    Yg("gpt_tt_blk", function(P) {
                        dh(P, a.context);
                        M(P, "res", K ? "c" : "t");
                        var aa;
                        M(P, "sig", null != (aa = a.Y.o) ? aa : -1);
                        M(P, "req", a.I)
                    }, _.Ad(Wv)), L.j = 0
            }
        })
    };
    var iJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.l = b;
        this.T = c;
        this.N = d;
        this.F = e;
        this.B = lx(this);
        nx(this, f)
    };
    _.R(iJ, Z);
    iJ.prototype.j = function() {
        for (var a = _.z(this.l), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Gg(b, this.T);
            if (!Fg(b, this.T) && c) {
                a: {
                    var d = c;
                    var e = this.N.R[b.getDomId()],
                        f = 0,
                        g = 0;e = _.z(lg(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.z(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), Mk(Jg(d, this.F)) || !d.parentElement || Mk(Jg(d.parentElement, this.F))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.N;f = g.W;g = g.R[b.getDomId()];Lk(c, Pg(b), rg(f, g), d)
            }
        }
        this.B.notify()
    };
    var jJ = function(a, b, c, d, e) {
            this.C = a;
            this.l = b;
            this.H = c;
            this.fa = d;
            this.ba = e;
            this.A = "";
            this.m = -1;
            this.state = 1;
            this.j = ""
        },
        kJ = function(a, b) {
            a.state = 4;
            try {
                a.l(b)
            } catch (c) {}
        };
    var lJ = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 788);
        this.J = b;
        this.M = c;
        this.G = d;
        this.ba = e;
        this.B = lx(this);
        this.D = 0;
        this.o = !1;
        this.l = null != l ? l : new XMLHttpRequest;
        this.U = X(this, f);
        this.Y = X(this, g);
        nx(this, h);
        this.O = X(this, k)
    };
    _.R(lJ, Z);
    lJ.prototype.j = function() {
        var a = this,
            b = this.Y.value;
        if (b) {
            var c = new jJ(this.J, this.M, this.G, this.U.value, this.ba);
            this.l.open("GET", b);
            this.l.withCredentials = this.O.value;
            b = _.E(jm(window) ? km : lm);
            var d = _.E(mm);
            if ((b = nm(window, b, d)) && fE(b)) try {
                var e = hE(b);
                if (e) {
                    var f = this.l;
                    (null == f ? 0 : f.setTrustToken) && f.setTrustToken(e)
                }
            } catch (g) {}
            this.l.onreadystatechange = function() {
                mJ(a, c, !1)
            };
            this.l.onload = function() {
                mJ(a, c, !0)
            };
            this.l.onerror = function() {
                kJ(c, new Xw("XHR error"))
            };
            this.l.send()
        }
        this.B.notify()
    };
    var mJ = function(a, b, c) {
        try {
            if (3 === a.l.readyState || 4 === a.l.readyState)
                if (300 <= a.l.status) a.o || (kJ(b, new Xw("xhr_err-" + a.l.status)), a.o = !0);
                else {
                    var d = a.l.responseText.substr(a.D);
                    if (d && d)
                        if (1 !== b.state && 2 !== b.state) kJ(b, new Ww("state err: (" + ([b.state, b.j.length].join() + ")")));
                        else {
                            b.j && (d = b.j + d);
                            var e = 0,
                                f = !1;
                            do {
                                var g = d.indexOf("\n", e);
                                f = -1 !== g;
                                if (!f) break;
                                var h = b,
                                    k = d.substr(e, g - e);
                                if (1 === h.state) h.A = k, ++h.m, h.state = 2;
                                else {
                                    try {
                                        h.C(h.m, h.A, {
                                            kind: 0,
                                            sa: Zt(k)
                                        }, h.fa, h.ba), h.A = ""
                                    } catch (l) {}
                                    h.state = 1
                                }
                                e = g + 1
                            } while (f && e < d.length);
                            b.j = d.substr(e)
                        }
                    a.D = a.l.responseText.length;
                    c && 4 === a.l.readyState && (1 !== b.state || b.j ? kJ(b, new Ww("state err (" + ([b.state, b.j.length].join() + ")"))) : (b.state = 3, b.H(b.m, b.fa, b.ba)))
                }
        } catch (l) {
            kJ(b, l)
        }
    };
    var nJ = function(a, b, c, d, e) {
        Z.call(this, a, 918);
        this.N = b;
        this.nb = c;
        this.B = lx(this);
        this.l = X(this, e);
        nx(this, d)
    };
    _.R(nJ, Z);
    nJ.prototype.j = function() {
        var a = this.l.value;
        a.length && Vw(this.nb, "3", Q(this.N.R[a[0].getDomId()], 20));
        this.B.notify()
    };
    var oJ = function(a, b) {
        Z.call(this, a, 820);
        this.F = b;
        this.B = V(this)
    };
    _.R(oJ, Z);
    oJ.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.ab(function(f) {
            if (1 == f.j) return bb(f, uh(a.F), 2);
            b = f.m;
            c = b.ac;
            d = b.status;
            c || Yg("gpt_etu", function(g) {
                dh(g, a.context);
                M(g, "rsn", d)
            });
            a.B.j(null != (e = c) ? e : "");
            f.j = 0
        })
    };
    var pJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 978);
        this.l = b;
        this.ba = c;
        this.F = e;
        this.localStorage = f;
        this.B = V(this);
        this.o = Y(this, d)
    };
    _.R(pJ, Z);
    pJ.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.ab(function(e) {
            if (1 == e.j) {
                if (!_.E(Ev) || !a.o.value) return cx(a.B), e.return();
                var f, g, h, k, l;
                if ((null == (f = a.l) ? 0 : I(f, 8)) || (null == (g = a.l) ? 0 : I(g, 1)) || 1 === (null == (h = a.l) ? void 0 : kd(h, 6, 2)) || 1 === (null == (k = a.l) ? void 0 : Q(k, 5)) || (null == (l = a.l) ? 0 : I(l, 9)) || !rd(a.ba) || I(a.ba, 9)) {
                    a.B.j(5);
                    e.j = 0;
                    return
                }
                c = a.B;
                d = c.j;
                return bb(e, Ch(a.o.value, a.F, _.E(Av), _.E(Dv), new _.bD(a.context), null != (b = a.localStorage) ? b : void 0), 3)
            }
            d.call(c, e.m);
            e.j = 0
        })
    };
    pJ.prototype.A = function() {
        cx(this.B)
    };
    var qJ = function(a, b, c) {
        Z.call(this, a, 858);
        this.l = b;
        this.ba = c;
        this.B = lx(this)
    };
    _.R(qJ, Z);
    qJ.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m;
        return _.ab(function(n) {
            switch (n.j) {
                case 1:
                    n.A = 2;
                    if (gE()) {
                        c = _.E(jm(window) ? km : lm);
                        d = _.E(mm);
                        e = new eE(!!rd(a.ba), c, d);
                        f = nE(e);
                        if (!f) {
                            n.j = 7;
                            break
                        }
                        if (_.E(Vv)) {
                            g = new _.bD(a.context);
                            cD(g, f);
                            n.j = 7;
                            break
                        }
                        h = Date.now();
                        return bb(n, f, 9)
                    }
                    b = _.We(258);
                    return bb(n, b, 6);
                case 6:
                    a.B.notify();
                    n.j = 5;
                    break;
                case 9:
                    Yg("gpt_tt", function(p) {
                        dh(p, a.context);
                        M(p, "act", Date.now() - h)
                    }, _.Ad(Wv));
                case 7:
                    a.B.notify();
                case 5:
                    _.E(Tv) && (l = null == (k = a.l) ? void 0 : I(k, 9)) && !gE() && qd({
                        mc: "1"
                    }, "gptttmc");
                    db(n, 0);
                    break;
                case 2:
                    m = eb(n), m instanceof Error && a.P(m), a.B.notify(), n.j = 0
            }
        })
    };
    var sJ = function(a, b, c) {
        Z.call(this, a, 804);
        this.l = c;
        this.G = [];
        this.D = {
            Hb: rJ(this, function(d) {
                return d.getHeight()
            }),
            Rb: rJ(this, function(d) {
                return d.getWidth()
            }),
            Me: rJ(this, function(d) {
                return !!I(d, 8)
            }),
            Ce: rJ(this, function(d) {
                return Q(d, 10)
            }),
            td: rJ(this, function(d) {
                return d.getEscapedQemQueryId()
            }),
            ke: rJ(this, function(d) {
                return hc(d, Ss, 43)
            }),
            Le: rJ(this, function(d) {
                return !!I(d, 9)
            }),
            yf: rJ(this, function(d) {
                return I(d, 12)
            }),
            De: rJ(this, function(d) {
                return hc(d, Js, dc(d, ht, 48))
            }),
            ze: rJ(this, function(d) {
                return hc(d, Hs, dc(d, ht, 39))
            }),
            Wb: rJ(this, function(d) {
                return Q(d, 36)
            }),
            zf: rJ(this, function(d) {
                return I(d, 13)
            }),
            Ke: rJ(this, function(d) {
                return I(d, 3)
            }),
            uf: rJ(this, function(d) {
                return Q(d, 49)
            }),
            Cf: rJ(this, function(d) {
                return Q(d, 29)
            }),
            Df: rJ(this, function(d) {
                return Q(d, 30)
            }),
            He: rJ(this, function(d) {
                return hc(d, Vs, 51)
            }),
            Af: rJ(this, function(d) {
                return I(d, 52)
            }),
            bc: rJ(this, function(d) {
                return Q(d, 61)
            }),
            pa: V(this),
            sf: rJ(this, function(d) {
                return hc(d, bt, 58)
            }),
            Ff: rJ(this, function(d) {
                var e, f;
                return null != (f = null == (e = hc(d, Us, 56)) ? void 0 : Q(e, 1)) ? f : null
            }),
            af: rJ(this, function(d) {
                var e;
                return null != (e = fc(d, Bs, 62)) ? e : []
            })
        };
        this.o = X(this, b)
    };
    _.R(sJ, Z);
    var rJ = function(a, b) {
        var c = V(a);
        a.G.push({
            B: c,
            xe: b
        });
        return c
    };
    sJ.prototype.j = function() {
        for (var a = _.z(this.G), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.xe;
            dx(b.B, c(this.o.value))
        }
        a = this.o.value;
        if (hc(a, ft, dc(a, gt, 41))) throw new Ww("SecureFrame");
        0 === this.l.kind || 1 === this.l.kind && this.l.url ? this.D.pa.j(this.l) : (a = this.D.pa, b = a.j, c = this.o.value, c = Q(c, dc(c, gt, 4)), b.call(a, {
            kind: 0,
            sa: c || ""
        }))
    };
    var tJ = function(a, b, c) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.l = lx(this);
        this.o = X(this, c)
    };
    _.R(tJ, Z);
    tJ.prototype.j = function() {
        for (var a = this, b = Vb(this.o.value, 23), c = _.C(uG), d = _.z(b), e = d.next(); !e.done; e = d.next()) e = e.value, vG(c, e), wG(c, e, this.slotId);
        this.l.notify();
        b.length && Yg("gpt_hp", function(f) {
            dh(f, a.context);
            M(f, "ls", b.join())
        }, _.Ad(Ou))
    };
    var uJ = function(a, b, c) {
        Z.call(this, a, 803);
        this.l = b;
        this.slotId = c;
        this.B = V(this);
        this.o = V(this)
    };
    _.R(uJ, Z);
    uJ.prototype.j = function() {
        var a = JSON.parse(this.l),
            b = Fh(a, Dq);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.l);
        a = new et(a.slice());
        var c;
        b = _.z(null != (c = Vb(a, 27)) ? c : []);
        for (c = b.next(); !c.done; c = b.next()) Gx(c.value);
        hp(4);
        this.slotId.dispatchEvent(tE, 800, a);
        this.B.j(a);
        c = hc(a, Rs, 54);
        this.o.j(c ? fc(c, Ps, 1).filter(function(d) {
            Dh(d, 1) || Ed(32, "");
            return !!Dh(d, 1)
        }).map(function(d) {
            var e = Dh(d, 2);
            return {
                Xa: Dh(d, 1),
                url: e && (_.u(e, "startsWith").call(e, location.protocol) || _.u(e, "startsWith").call(e, "data:") && 40 >= e.length) ? Ja(e) : void 0
            }
        }) : [])
    };
    var vJ = function(a, b, c, d, e) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.N = c;
        this.K = d;
        this.l = lx(this);
        this.o = X(this, e)
    };
    _.R(vJ, Z);
    vJ.prototype.j = function() {
        var a = this;
        wJ(this) && (_.HE(this.K, this.slotId), DE(this.K, this.slotId, function() {
            _.IE(a.K, a.slotId)
        }));
        this.l.notify()
    };
    var wJ = function(a) {
        var b = !!I(a.o.value, 11);
        if (_.E(ev)) return b;
        a = a.N.R[a.slotId.getDomId()];
        return 4 === qj(a) || 5 === qj(a) || b
    };
    var xJ = function(a, b, c, d) {
        Z.call(this, a, 821);
        this.ba = b;
        this.ja = c;
        this.l = lx(this);
        this.o = X(this, d)
    };
    _.R(xJ, Z);
    xJ.prototype.j = function() {
        if (rd(this.ba))
            for (var a = new w.Set, b = _.z(fc(this.o.value, Ts, 14)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = c.getVersion()) ? d : 1;
                a.has(e) || (Zx(this.ja, 2 === e ? "__gpi" : "__gads", c, this.ba), a.add(e))
            }
        this.l.notify()
    };
    var yJ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, A, y, J, F, K, H, L, W) {
        Z.call(this, a, 973);
        this.G = b;
        this.o = c;
        this.M = d;
        this.N = e;
        this.K = f;
        this.ja = g;
        this.ca = h;
        this.J = k;
        this.l = l;
        this.jb = m;
        this.D = n;
        this.da = p;
        this.Ja = t;
        this.F = A;
        this.T = y;
        this.ia = J;
        this.ha = H;
        this.U = L;
        this.ga = W;
        this.Y = Y(this, J);
        this.O = X(this, F);
        this.ua = X(this, K);
        nx(this, n.V)
    };
    _.R(yJ, Z);
    yJ.prototype.j = function() {
        var a = this,
            b = new Qd;
        _.Cm(this, b);
        var c = this.O.value,
            d = Sl(this.N.W);
        if (!_.E(Iv) && (!_.E(jv) || Fj())) {
            var e = new wH(this.context, Xe(), console, this.ia);
            D(b, e)
        }
        e = new UI(this.context, this.o, this.K, hc(this.N.W, qo, 5), this.T);
        D(b, e);
        var f = new iJ(this.context, this.o, this.T, this.N, this.F, e.B);
        D(b, f);
        var g = !!I(this.N.W, 6);
        e = new ZI(this.context, this.o, g, this.N, this.G, this.F, c);
        D(b, e);
        var h = new oJ(this.context, this.F);
        D(b, h);
        var k = new qJ(this.context, d, c);
        D(b, k);
        var l = this.D,
            m = l.G,
            n = l.L,
            p = l.Y,
            t = l.o,
            A = l.P,
            y = l.ca,
            J = l.ea,
            F = l.ha,
            K = l.ia,
            H = l.da;
        l = this.U;
        if (0 !== _.Ad(Uu) || !l) {
            l || _.Ad(Wu);
            var L;
            l = new $I(this.context, c, l, null != (L = this.ga) ? L : K, F);
            D(b, l);
            l = l.B
        }
        L = new QG(this.context, this.G, e.l, m, this.N.R, p, t, A, y, this.Ja, this.K);
        D(b, L);
        J = new WI(this.context, this.ua.value, J, n);
        D(b, J);
        m = this.jb.Da;
        p = this.jb.Ua || NaN;
        t = this.jb.Ta || NaN;
        y = A = null;
        var W = ++this.K.H;
        n = window.isSecureContext && _.E(Gv) ? "wbn" : "ldjh";
        "wbn" === n && (A = Qa(), y = "googletag.wbn" + W);
        _.E(Ev) ? (H = new pJ(this.context, d, c, H, this.F, this.Y.value), D(b, H), H = H.B) : (H = new io, cx(H));
        f = new hJ(this.context, g, this.K, this.ja, this.N, n, m, p, t, J.B, A, y, _.C(Sf), c, this.F, l, h.B, e.l, k.B, L.B, H, f.B, this.ha);
        D(b, f);
        h = new nJ(this.context, this.N, _.C(Sf), f.l, e.l);
        D(b, h);
        d = new aJ(this.context, d, c);
        D(b, d);
        k = _.Qf(this.context, 646, function(aa, ta, Oa, Ra, gb) {
            var yb = function() {
                return void zJ(a, gb, aa, ta, Oa, Ra)
            };
            aa && _.E(Mu) ? setTimeout(_.Qf(a.context, 646, yb), 0) : yb()
        });
        F = _.Qf(this.context, 647, function(aa, ta, Oa) {
            var Ra = function() {
                return void AJ(a, W, Oa, ta, aa)
            };
            _.E(Mu) ? setTimeout(_.Qf(a.context, 646, Ra), 0) : Ra()
        });
        K = _.Qf(this.context, 289, function(aa) {
            aa = aa instanceof Error ? aa : Error();
            aa.message = aa.message || "strm_err";
            Uf(a.context, 289, aa)
        });
        var P;
        "ldjh" === n ? P = new lJ(this.context, k, K, F, c, e.l, f.l, h.B, d.B) : P = new XI(this.context, k, K, F, n, y, A, c, this.T, e.l, f.l, h.B, d.B);
        D(b, P);
        d = new fJ(this.context, this.K, W, e.l, P.B);
        D(b, d);
        g = new SI(this.context, this.K, this.N, this.ja, n, g, m, p, t, J.B, A, y, this.F, f.l, e.l, l, f.M, f.O, f.U, L.B, d.B, H);
        D(b, g);
        g = new gJ(this.context, this.l.Pd, this.N, g.B);
        D(b, g);
        g = new eJ(this.context, n, this.ca, this.F, g.B);
        D(b, g);
        g = new dJ(this.context, this.N, this.J, e.l, g.B);
        D(b, g);
        e = new bJ(this.context, this.K, this.N, this.T, e.l, g.B);
        D(b, e);
        c = new cJ(this.context, Cd(this.F), this.F, c, P.B);
        D(b, c);
        Rd(b)
    };
    var zJ = function(a, b, c, d, e, f) {
            var g, h;
            return _.ab(function(k) {
                g = f[c];
                if (!g) return Uf(a.context, 646, Error("missing slot")), k.return();
                0 === c && (h = Q(a.N.R[g.getDomId()], 20), Vw(_.C(Sf), "4", h));
                return bb(k, BJ(a, g, d, e, b), 0)
            })
        },
        AJ = function(a, b, c, d, e) {
            var f, g, h;
            return _.ab(function(k) {
                switch (k.j) {
                    case 1:
                        var l = a.context,
                            m = e + 1,
                            n = d.length;
                        if (l.Mb) {
                            var p = l.kb;
                            l = gf(l);
                            var t = new Aw;
                            t = ac(t, 3, b, 0);
                            m = ac(t, 1, m, 0);
                            n = ac(m, 2, n, 0);
                            n = kf(l, 8, lf, n);
                            Uc(p, n)
                        }
                        f = e + 1;
                    case 2:
                        if (!(f < d.length)) {
                            k.j = 4;
                            break
                        }
                        if (!d[f]) {
                            k.j = 3;
                            break
                        }
                        p = new et;
                        g = x(p, 8, !0).X();
                        h = '{"empty":' + g + "}";
                        return bb(k, zJ(a, c, f, h, {
                            kind: 0,
                            sa: ""
                        }, d), 3);
                    case 3:
                        ++f;
                        k.j = 2;
                        break;
                    case 4:
                        p = a.K, n = a.M, l = p.m.get(n) - 1, 0 === l ? p.m.delete(n) : p.m.set(n, l), 0 === l && a.l.Bd.dispatchEvent(AE, 965, a.M), k.j = 0
                }
            })
        },
        BJ = function(a, b, c, d, e) {
            var f, g, h, k, l, m, n, p, t, A, y, J, F;
            return _.ab(function(K) {
                switch (K.j) {
                    case 1:
                        return f = new Qd, g = new uJ(a.context, c, b), D(f, g), h = new xJ(a.context, e, a.ja, g.B), D(f, h), k = new tJ(a.context, b, g.B), D(f, k), l = new vJ(a.context, b, a.N, a.K, g.B), D(f, l), m = new sJ(a.context, g.B, d), D(f, m), n = [h.l.promise, k.l.promise, l.l.promise], Rd(f), bb(K, w.Promise.all(n), 2);
                    case 2:
                        if (b.m) return K.return();
                        p = m;
                        t = p.D;
                        return bb(K, t.Me.promise, 3);
                    case 3:
                        A = K.m;
                        y = cf("google_norender");
                        if (!A && !y) {
                            MI(a.da, b, a.K, a.N, t, g.o, e, a.l.Pd, a.J, a.D);
                            K.j = 4;
                            break
                        }
                        return bb(K, t.td.promise, 5);
                    case 5:
                        F = null != (J = K.m) ? J : "";
                        var H = a.K,
                            L = a.N,
                            W = Gg(b, document);
                        W && Je(W, window, F, !0);
                        Vw(_.C(Sf), "5", Q(L.R[b.getDomId()], 20));
                        b.dispatchEvent(uE, 801, {
                            pd: null,
                            isBackfill: !1
                        });
                        if (_.GE(H, b) && !Qg(b, document)) {
                            H = L.W;
                            L = L.R[b.getDomId()];
                            var P;
                            (null != (P = I(L, 10)) ? P : I(H, 11)) && ym(b, document, L, H)
                        }
                        b.dispatchEvent(wE, 825, {
                            isEmpty: !0
                        });
                    case 4:
                        f.za(), K.j = 0
                }
            })
        };
    var CJ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, A, y) {
        Z.call(this, a, 885);
        this.D = b;
        this.N = c;
        this.K = d;
        this.ja = e;
        this.jb = f;
        this.M = g;
        this.J = h;
        this.l = k;
        this.G = l;
        this.o = m;
        this.O = n;
        this.F = p;
        this.T = t;
        this.U = X(this, A);
        nx(this, y)
    };
    _.R(CJ, Z);
    CJ.prototype.j = function() {
        var a = this.U.value;
        if (a.length) {
            var b = this.K,
                c = this.l,
                d = a.length;
            b.m.has(c);
            b.m.set(c, d);
            a = _.z(a);
            for (b = a.next(); !b.done; b = a.next()) {
                var e = b.value;
                c = b = void 0;
                d = e.Ja;
                var f = e.fa;
                e = new Qd;
                _.Cm(this, e);
                var g = void 0;
                0 >= _.Ad(Wu) && (g = new NI(this.context, this.F), D(e, g));
                var h = Jm(this.context, this.D, Sl(this.N.W), this.F, this.o.D),
                    k = h.Ya;
                _.Cm(e, h.Ha);
                h = new RI(this.context, this.F, k);
                D(e, h);
                h = new OI(this.context, this.F, k);
                D(e, h);
                h = new PI(this.context, _.We(150), k);
                D(e, h);
                var l = new jo(this.context, this.F, k);
                D(e, l);
                var m = new QI(this.context, this.ja, l.B, k);
                D(e, m);
                d = new yJ(this.context, this.D, f, this.l, this.N, this.K, this.ja, this.M, this.J, this.G, this.jb, this.o, this.O, d, this.F, this.T, l.B, k, m.l, h.l, null == (c = g) ? void 0 : c.l, null == (b = g) ? void 0 : b.o);
                D(e, d);
                Rd(e)
            }
        } else this.G.Bd.dispatchEvent(AE, 965, this.l)
    };
    var DJ = new w.Map,
        EJ = function(a, b, c, d) {
            d = void 0 === d ? DJ : d;
            Z.call(this, a, 834);
            this.D = b;
            this.fa = c;
            this.l = d;
            this.o = V(this);
            this.G = w.Promise.all(this.fa.map(this.J, this))
        };
    _.R(EJ, Z);
    EJ.prototype.j = function() {
        var a = this,
            b;
        return _.ab(function(c) {
            if (1 == c.j) return bb(c, a.G, 2);
            b = c.m;
            a.o.j(b.filter(function(d) {
                return null != d && !d.m
            }));
            c.j = 0
        })
    };
    EJ.prototype.J = function(a) {
        var b = this,
            c, d;
        return _.ab(function(e) {
            if (1 == e.j) {
                if (a.m) return e.return(null);
                b.l.has(a) || (b.l.set(a, Uo(a)), _.Vm(a, function() {
                    return void b.l.delete(a)
                }));
                c = b.l.get(a);
                return bb(e, c(), 2)
            }
            d = e.m;
            if (b.m) return e.return(null);
            if (d) return e.return(a);
            O(b.D, OF(a.getAdUnitPath()));
            return e.return(null)
        })
    };
    var FJ = function(a, b, c, d, e) {
        Z.call(this, a, 847);
        this.K = b;
        this.Ia = c;
        this.o = d;
        this.l = V(this);
        this.D = X(this, e)
    };
    _.R(FJ, Z);
    FJ.prototype.j = function() {
        var a = this.D.value;
        if (a.length) {
            for (var b = _.z(a), c = b.next(); !c.done; c = b.next()) KE(this.K, c.value);
            this.o ? this.l.j([]) : this.Ia ? (b = Te(a[0].getAdUnitPath()), a = GJ(a, b), this.l.j(a)) : (a = a.map(function(d) {
                return {
                    Ja: Te(d.getAdUnitPath()),
                    fa: [d]
                }
            }), this.l.j(a))
        } else this.l.j([])
    };
    var GJ = function(a, b) {
        var c = [];
        a = oa(a, function(f) {
            return Te(f.getAdUnitPath())
        });
        a = _.z(_.u(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.z(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                Ja: d,
                fa: e
            }) : c.push({
                Ja: d,
                fa: e
            })
        }
        return c
    };
    var HJ = function(a, b, c) {
        Z.call(this, a, 845);
        this.R = b;
        this.l = V(this);
        this.o = V(this);
        this.D = X(this, c)
    };
    _.R(HJ, Z);
    HJ.prototype.j = function() {
        var a = this,
            b = function(d) {
                d = a.R[d.getDomId()];
                return !!lg(d).length || mg(d, 16)
            },
            c = this.D.value;
        this.l.j(c.filter(b));
        this.o.j(c.filter(Eq(b)))
    };
    var IJ = function(a, b, c, d, e) {
        Z.call(this, a, 864);
        this.K = b;
        this.N = c;
        this.T = d;
        this.l = lx(this);
        this.o = X(this, e)
    };
    _.R(IJ, Z);
    IJ.prototype.j = function() {
        for (var a = _.z(this.o.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value, _.GE(this.K, b)) {
                var c = this.N,
                    d = c.W;
                c = c.R[b.getDomId()];
                xm(c, d) && ym(b, this.T, c, d);
                KE(this.K, b);
                var e = void 0,
                    f = void 0;
                null != (e = null != (f = I(c, 10)) ? f : I(d, 11)) && e && ym(b, this.T, c, d)
            }
        this.l.notify()
    };
    var JJ = function(a, b, c, d, e, f, g, h, k, l, m) {
        _.$v.call(this);
        var n = this;
        this.context = a;
        this.C = b;
        this.K = c;
        this.ja = d;
        this.qa = e;
        this.I = f;
        this.o = g;
        this.L = h;
        this.l = k;
        this.T = l;
        this.F = m;
        this.j = new w.Map;
        this.A = new pE(a);
        _.Cm(this, this.A);
        rE(this.A, AE, function(p) {
            p = p.detail;
            var t = n.j.get(p);
            t && (n.j.delete(p), t.za())
        })
    };
    _.R(JJ, _.$v);
    var KJ = function(a, b, c, d) {
        var e = ++a.K.o;
        a.j.has(e);
        var f = new Qd;
        a.j.set(e, f);
        b = new EJ(a.context, a.C, b);
        D(f, b);
        var g = new HJ(a.context, d.R, b.o);
        D(f, g);
        b = new FJ(a.context, a.K, !!I(d.W, 6), cf("google_nofetch"), g.l);
        D(f, b);
        g = new IJ(a.context, a.K, d, document, g.o);
        D(f, g);
        a = new CJ(a.context, a.C, d, a.K, a.ja, c, a.I, a.o, e, {
            Bd: a.A,
            Pd: a.qa
        }, a.l, a.L, a.F, a.T, b.l, g.l);
        D(f, a);
        Rd(f)
    };
    var LJ = function(a, b, c, d) {
        RH.call(this, a, b);
        this.aa = c;
        this.V = d;
        this.l = new w.Set;
        this.L = {};
        this.K = _.C(BE);
        this.G = new JI(this.context, this.j);
        this.ja = new Yx(window);
        this.M = _.C(YH);
        this.J = new JJ(this.context, this.j, this.K, this.ja, this, this.M, this.aa, this.G, this.V, document, window);
        _.Cm(this, this.J);
        _.E(Mv) && new eH(a, this)
    };
    _.R(LJ, RH);
    LJ.prototype.getName = function() {
        return "publisher_ads"
    };
    LJ.prototype.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        var e = "";
        if (c)
            if (_.fa(c) && 1 == c.nodeType) {
                var f = c;
                e = f.id
            } else e = c;
        this.enable();
        var g = Ij(this.context, this.j, a, b, e),
            h = g.slotId;
        g = g.Ra;
        if (h && g) {
            f && !e && (f.id = h.getDomId());
            this.Sa(h, g);
            g.setClickUrl(d);
            var k;
            Om(this.j, null != (k = f) ? k : h.getDomId())
        } else O(this.j, Qh("PubAdsService.display", [a, b, c]))
    };
    var kG = function(a, b, c) {
        var d = void 0 === d ? document : d;
        var e;
        null != (e = c.R[b.getDomId()]) && x(e, 19, !0);
        e = {
            id: mt(b.getDomId())
        };
        Wa(d, te(e));
        Gg(b, d) ? (a.enable(), FE(a.K, b), MJ(a, c, b)) : Yg("gpt_pb_write", function(f) {
            dh(f, a.context)
        })
    };
    LJ.prototype.Sa = function(a, b) {
        var c = this;
        I(b, 17) || this.C && FE(this.K, a);
        this.dispatchEvent(xE, 724, {
            dd: a.getDomId(),
            R: b
        });
        rE(a, wE, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new FH(a, "publisher_ads");
            e.isEmpty && (f.isEmpty = !0);
            e = a.j.getResponseInformation();
            d && e && (f.size = [d.width, d.height], f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            c.dispatchEvent("slotRenderEnded", 708, f)
        });
        rE(a, tE, function() {
            return void c.dispatchEvent("slotResponseReceived", 709, new OH(a, c.getName()))
        });
        RH.prototype.Sa.call(this, a, b)
    };
    LJ.prototype.P = function(a, b) {
        this.enable();
        this.C && FE(this.K, b);
        this.j.info(iF());
        var c = a.W,
            d = a.R,
            e = I(c, 6);
        if (e || !this.K.fb(b)) e && (e = Gg(b)) && b.dispatchEvent(sE, 778, e), I(c, 4) && (d = d[b.getDomId()], e = document, e = void 0 === e ? document : e, xm(d, c) && !this.K.fb(b) && ym(b, e, d, c)), MJ(this, a, b)
    };
    var MJ = function(a, b, c) {
            var d = NJ(a, b, c);
            OJ(a, d, b, {
                Da: 1
            });
            b = c.getAdUnitPath();
            if (c = a.L[b]) {
                c = _.z(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, OJ(a, d.fa, d.N, d.jb);
                delete a.L[b]
            }
        },
        NJ = function(a, b, c) {
            var d = b.W;
            b = b.R;
            if (I(d, 4)) return [];
            var e;
            return !I(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : I(e, 17)) ? (a.l.add(c), _.Vm(c, function() {
                return void a.l.delete(c)
            }), [c]) : a.A.filter(function(f) {
                if (a.l.has(f)) return !1;
                a.l.add(f);
                _.Vm(f, function() {
                    return void a.l.delete(f)
                });
                return !0
            })
        },
        OJ = function(a, b, c, d) {
            a.j.info(pF());
            if (PJ(a, b, d, c) && 1 !== d.Da)
                for (b = _.z(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), a.dispatchEvent(yE, 725, {
                    dd: d,
                    R: c.R[d]
                })
        },
        PJ = function(a, b, c, d) {
            b = b.filter(function(e) {
                if (!_.GE(a.K, e)) return !1;
                if (_.E(ev)) {
                    var f = d.R[e.getDomId()];
                    5 !== qj(f) && 4 !== qj(f) || _.HE(a.K, e)
                }
                return !0
            });
            if (!b.length) return null;
            KJ(a.J, b, c, d);
            return b
        };
    LJ.prototype.refresh = function(a, b, c) {
        b = QJ(this, b);
        if (!b.length) return !1;
        RJ(this, a, b, null != c ? c : {
            Da: 2
        });
        return !0
    };
    var QJ = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.m) return !0;
                O(a.j, sF(String(d)));
                return !1
            })
        },
        RJ = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.C) {
                var h = {};
                e = _.z(c);
                for (f = e.next(); !f.done; h = {
                        Bb: h.Bb
                    }, f = e.next()) h.Bb = f.value, a.l.add(h.Bb), _.Vm(h.Bb, function(k) {
                    return function() {
                        return void a.l.delete(k.Bb)
                    }
                }(h));
                OJ(a, c, b, d)
            } else c.length && I(b.W, 6) ? (O(a.j, oF(g), e), e = e.getAdUnitPath(), f = null != (h = a.L[e]) ? h : [], f.push({
                fa: c,
                N: b,
                jb: d
            }), a.L[e] = f) : O(a.j, mF(g), e)
        };
    LJ.prototype.Sc = function() {
        var a = this,
            b = Lf().j;
        if (I(b, 6))
            for (var c = _.z(this.A), d = c.next(); !d.done; d = c.next()) this.C && FE(this.K, d.value);
        IG(this, b);
        rE(this, "rewardedSlotClosed", function(e) {
            var f = e.detail.slot;
            e = _.u(a.A, "find").call(a.A, function(g) {
                return f === g.j
            });
            SJ(a, [e], Lf().j, Lf().m, a.K)
        });
        wf("pubadsReady", !0)
    };
    LJ.prototype.destroySlots = function(a, b) {
        a = RH.prototype.destroySlots.call(this, a);
        if (a.length && this.C) {
            var c, d = null != (c = null == b ? void 0 : b.W) ? c : Lf().j,
                e;
            b = null != (e = null == b ? void 0 : b.R) ? e : Lf().m;
            TJ(this, a, d, b)
        }
        return a
    };
    var KG = function(a, b, c, d) {
            if (!a.C) return O(a.j, nF(), d[0]), !1;
            var e = QJ(a, d);
            if (!e.length) return O(a.j, Qh("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.j.info(qF());
            TJ(a, e, b, c);
            return !0
        },
        TJ = function(a, b, c, d) {
            for (var e = _.z(b), f = e.next(); !f.done; f = e.next()) CE(a.K, f.value);
            SJ(a, b, c, d, a.K)
        };
    LJ.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && Gx(a)
    };
    var SJ = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.z(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                KI(a.G, g);
                var h = d[g.getDomId()];
                xm(h, c) && ym(g, f.document, h, c);
                KE(e, g)
            }
        },
        JG = function(a, b, c, d) {
            x(d, 21, !0);
            x(d, 22, String(null != b ? b : ""));
            x(d, 23, String(null != c ? c : ""));
            IG(a, d)
        },
        LG = function(a, b) {
            if (!a.C) return null;
            var c, d;
            return {
                vid: null != (c = Q(b, 22)) ? c : "",
                cmsid: null != (d = Q(b, 23)) ? d : ""
            }
        },
        IG = function(a, b) {
            I(b, 21) && a.C && x(b, 29, $t())
        };
    var cp = "2022060201";
    var UJ = S(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        VJ = S(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        WJ = S(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        XJ = S(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        YJ = S(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]),
        ZJ = S(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]);
    (function(a, b, c, d) {
        var e = null != c ? c : {
            ya: dp(),
            Za: "",
            kb: new lp(0),
            Wd: !0,
            sd: 1
        };
        try {
            Ze();
            var f = window.googletag;
            if (null == f ? 0 : f.evalScripts) f.evalScripts();
            else {
                zD();
                wf("evalScripts", function() {
                    try {
                        Zm()
                    } catch (W) {
                        Uf(e, 297, W);
                        var H, L;
                        null == (H = window.console) || null == (L = H.error) || L.call(H, W)
                    }
                });
                try {
                    Vx()
                } catch (H) {
                    Uf(e, 408, H)
                }
                hm();
                try {
                    Tx(), hp(13), hp(3)
                } catch (H) {
                    Uf(e, 408, H)
                }
                Rg("gpt-tag-load");
                var g = jp(),
                    h = null != c ? c : mp(g),
                    k = null != d ? d : new DH(h),
                    l = !!_.We(259);
                mf(h, l);
                _.C(Cj);
                var m = a(h),
                    n = new VH(h, m),
                    p = new xH(h, k),
                    t = new LJ(h, k, n, p);
                _.We(260) && yH(p, t);
                var A = Bi(Hv);
                A && _.Xf(h, 862, function() {
                    var H = document;
                    if (A && H.head) {
                        var L = _.$c("META");
                        H.head.appendChild(L);
                        L.httpEquiv = "origin-trial";
                        L.content = A
                    }
                }, !0);
                if (_.E(av)) tn(h, k, t, b);
                else {
                    wf("defineOutOfPageSlot", G(h, 73, function(H, L) {
                        H = Tm(h, k, H, L);
                        if (!H) return null;
                        var W;
                        return null != (W = H.j) ? W : null
                    }));
                    BG(h, k);
                    dn(h, k);
                    Xe().enums || Yp();
                    wf("getVersion", G(h, 946, function() {
                        return h.Pa ? String(h.Pa) : h.ya
                    }));
                    wf("pubads", G(h, 947, function() {
                        return Mj(h, k, t)
                    }));
                    var y;
                    wf("companionAds", G(h, 816, function() {
                        null != y || (y = new on(h, k, t));
                        return Uh(h, k, y)
                    }));
                    var J;
                    if (cf("google_content_service_disabled", b)) Yg("gpt_scdvqp", function(H) {
                        dh(H, h)
                    }, 1);
                    else if (!_.E(en)) {
                        var F = _.fn(function() {
                            _.E(gn) || O(k, hn(), null)
                        });
                        wf("content", G(h, 817, function() {
                            _.E(jn) && k.error(kn(), null, !0);
                            F();
                            null != J || (J = new ln(h, k));
                            return Wh(h, k, J)
                        }))
                    }
                    wf("setAdIframeTitle", G(h, 729, Xm));
                    wf("getEventLog", G(h, 945, function() {
                        return new pn(h, k)
                    }));
                    wf("sizeMapping", G(h, 90, function() {
                        return new qn(h, k)
                    }));
                    wf("enableServices", G(h, 91, function() {
                        rn(k)
                    }));
                    wf("destroySlots", G(h, 75, function(H) {
                        return cn(k, H)
                    }));
                    wf("apiReady", !0)
                }
                var K = function() {
                    _.Xf(h, 77, function() {
                        var H = Xe().cmd;
                        if (!H || Array.isArray(H)) {
                            var L = new fH(k);
                            Xe().cmd = Nh(h, L);
                            null != H && H.length && L.push.apply(L, H)
                        }
                    })
                };
                Xe().fifWin && "complete" !== document.readyState ? _.Za(window, "load", function() {
                    window.setTimeout(K, 0)
                }) : K();
                Zm();
                if (_.E(Mv) || _.C(Sf).j) bp(), gi(document, Ja(Qc(_.E(Ov) ? m.gf : m.jf).toString()));
                Nn(h, k);
                bi(h)
            }
        } catch (H) {
            Uf(e, 106, H)
        }
    })(function(a) {
        return {
            pe: function(b) {
                return a.Za ? v(UJ, a.Za, b) : v(VJ, b, a.ya)
            },
            oe: function(b) {
                return a.Za ? v(WJ, a.Za, b) : v(XJ, b, a.ya)
            },
            jf: v(YJ),
            gf: v(ZJ)
        }
    }, window);
}).call(this, {});