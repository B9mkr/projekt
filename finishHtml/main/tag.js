﻿﻿
(function (m, t, w) {
  function F(a, b, c) {
    return function () {
      try {
        return a.apply(this, arguments)
      } catch (d) {
        c || sa(d, b)
      }
    }
  }

  function sa(a, b) {
    var c;
    if (.01 > Math.random()) try {
      var d = a && a.message || "";
      (c = -1 < d.indexOf("network error occurred") || -1 < d.indexOf("send beacon") && -1 < d.indexOf("Content Security Policy")) || (new Ra).log("jserrs", va, a.message, b, L.href, "", "string" === typeof a.stack && a.stack.replace(/\n/g, "\\n"))
    } catch (f) {}
  }

  function H(a, b, c, d) {
    return m.setTimeout(F(a, c || "setTimeout", d), b)
  }

  function Pb(a, b, c, d, f) {
    function l(a,
      e) {
      e = Math.max(0, Math.min(e, 65535));
      k.mergeArrays(a, [e >> 8, e & 255])
    }

    function g(a, e) {
      k.mergeArrays(a, [e & 255])
    }

    function n(a, e) {
      if (-1 == fa.indexOf(e)) return !0;
      g(a, e)
    }

    function r(a, e) {
      for (e = Math.max(0, e | 0); 127 < e;) k.mergeArrays(a, [e & 127 | 128]), e >>= 7;
      k.mergeArrays(a, [e])
    }

    function u(a, e) {
      255 < e.length && (e = e.substr(0, 255));
      k.mergeArrays(a, [e.length]);
      for (var b = 0; b < e.length; b++) l(a, e.charCodeAt(b))
    }

    function p(a, e) {
      r(a, e.length);
      for (var b = 0; b < e.length; b++) r(a, e.charCodeAt(b))
    }

    function C(a) {
      if (!a.nodeName) return a[Y] = -1, null;
      var e = +a[Y];
      if (!isFinite(e) || 0 >= e) return null;
      if (a.attributes)
        for (var b = a; b;) {
          if (b.attributes.__ym_wv_ign) return null;
          b = b.parentElement
        }
      b = 64;
      var c = 0,
        h = v.getElementParent(a),
        d = h && h[Y] ? h[Y] : 0;
      0 > d && (d = 0);
      var f = a.nodeName.toUpperCase(),
        q = Ma[f];
      q || (b |= 2);
      var p = v.getElementNeighborPosition(a);
      p || (b |= 4);
      var B = v.getElementRegion(a);
      (h = h ? v.getElementRegion(h) : null) && B[0] == h[0] && B[1] == h[1] && B[2] == h[2] && B[3] == h[3] && (b |= 8);
      Fa[e].pos = B[0] + "x" + B[1];
      Fa[e].size = B[2] + "x" + B[3];
      a.id && "string" == typeof a.id &&
        (b |= 32);
      (h = v.calcTextChecksum(a)) && (b |= 16);
      var C = v.calcAttribChecksum(a);
      C && (c |= 2);
      a: {
        var A = v.getElementChildren(v.getElementParent(a), a.tagName);
        for (var I = 0; I < A.length; I++)
          if ((!A[I].id || "string" != typeof A[I].id) && v.calcAttribChecksum(A[I]) == C && v.calcTextChecksum(A[I]) == h) {
            A = !0;
            break a
          }
        A = !1
      }
      if (A) {
        b |= 1;
        var k = v.calcChildrenChecksum(a)
      }
      A = [];
      if (n(A, 1)) return null;
      r(A, e);
      g(A, b);
      r(A, d);
      q ? g(A, q) : u(A, f);
      p && r(A, p);
      b & 8 || (r(A, B[0]), r(A, B[1]), r(A, B[2]), r(A, B[3]));
      b & 32 && u(A, a.id);
      h && l(A, h);
      b & 1 && l(A, k);
      g(A, c);
      C && l(A, C);
      return A
    }

    function q(a, e, b, c, h, d) {
      for (var f; b && (f = v.getElementSize(b)) && (!f[0] || !f[1]);) b = v.getElementParent(b);
      if (!b) return null;
      f = b[Y];
      if (!f || 0 > f) return null;
      var q = {
        mousemove: 2,
        click: 32,
        dblclick: 33,
        mousedown: 4,
        mouseup: 30,
        touch: 12
      }[e];
      if (!q) return null;
      var p = v.getElementXY(b);
      b = [];
      if (n(b, q)) return null;
      r(b, a);
      r(b, f);
      r(b, Math.max(0, c[0] - p[0]));
      r(b, Math.max(0, c[1] - p[1]));
      /^mouse(up|down)|click$/.test(e) && (a = h || d, g(b, 2 > a ? 1 : a == (h ? 2 : 4) ? 4 : 2));
      return b
    }

    function h(a, e, b, c, h) {
      var d = [];
      if (n(d, 38)) return null;
      r(d, a);
      l(d, e);
      g(d, b);
      a = c[Y];
      if (!a || 0 > a) a = 0;
      r(d, a);
      g(d, h ? 1 : 0);
      return d
    }

    function e(a, e) {
      var b;
      if (0 == e.length) var c = b = "";
      else 100 >= e.length ? (b = e, c = "") : 200 >= e.length ? (b = e.substr(0, 100), c = e.substr(100)) : (b = e.substr(0, 97), c = e.substr(e.length - 97));
      var h = [];
      if (n(h, 29)) return null;
      r(h, a);
      p(h, b);
      p(h, c);
      return h
    }

    function B(a) {
      var e = [];
      if (n(e, 27)) return null;
      r(e, a);
      return e
    }

    function I(a) {
      var e = [];
      g(e, 14);
      r(e, a);
      return e
    }

    function A(a) {
      var e = [];
      if (n(e, 15)) return null;
      r(e, a);
      return e
    }

    function ca(a, e) {
      var b = [];
      if (n(b,
          17)) return null;
      r(b, a);
      r(b, e[Y]);
      return b
    }

    function Sa(a, e) {
      var b = [];
      if (n(b, 18)) return null;
      r(b, a);
      r(b, e[Y]);
      return b
    }

    function Na(a, e, b, c) {
      var h = [];
      if (n(h, 39)) return null;
      r(h, a);
      r(h, e[Y]);
      u(h, String(b));
      g(h, c ? 1 : 0);
      return h
    }

    function Ta(a, e) {
      var b = e[Y];
      if (0 < b) {
        var c = [],
          h = v.getElementRegion(e),
          g = Fa[b],
          d = h[0] + "x" + h[1],
          f = h[2] + "x" + h[3];
        if (d != g.pos) {
          g.pos = d;
          if (n(c, 9)) return null;
          r(c, a);
          r(c, b);
          r(c, h[0]);
          r(c, h[1])
        }
        if (f != g.size) {
          g.size = f;
          if (n(c, 10)) return null;
          r(c, a);
          r(c, b);
          r(c, h[2]);
          r(c, h[3])
        }
        if (c.length) return c
      }
      return null
    }

    function Ua(a) {
      var e = a[Y];
      if (!e || 0 > e || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || ta(a.form)) return null;
      var b = v.getFormNumber(a.form);
      if (0 > b) return null;
      var c = "INPUT" == a.nodeName ? {
        text: 0,
        color: 0,
        date: 0,
        datetime: 0,
        "datetime-local": 0,
        email: 0,
        number: 0,
        range: 0,
        search: 0,
        tel: 0,
        time: 0,
        url: 0,
        month: 0,
        week: 0,
        password: 2,
        radio: 3,
        checkbox: 4,
        file: 6,
        image: 7
      }[a.type] : {
        SELECT: 1,
        TEXTAREA: 5
      }[a.nodeName];
      if ("number" != typeof c) return null;
      for (var h = -1, g = a.form.elements, d = g.length, f = 0, q = 0; f < d; f++)
        if (g[f].name ==
          a.name) {
          if (g[f] == a) {
            h = q;
            break
          }
          q++
        }
      if (0 > h) return null;
      g = [];
      if (n(g, 7)) return null;
      r(g, e);
      r(g, b);
      r(g, c);
      p(g, a.name || "");
      r(g, h);
      return g
    }

    function G(a, e) {
      var b = v.getFormNumber(e);
      if (0 > b) return null;
      for (var c = e.elements, h = c.length, g = [], d = 0; d < h; d++)
        if (!v.isEmptyField(c[d])) {
          var f = c[d][Y];
          f && 0 < f && k.mergeArrays(g, [f])
        }
      c = [];
      if (n(c, 11)) return null;
      r(c, a);
      r(c, b);
      r(c, g.length);
      for (b = 0; b < g.length; b++) r(c, g[b]);
      return c
    }

    function da(a, e, b) {
      a = a.apply(m, e);
      R.append(a, b)
    }

    function w(a) {
      if (a[Y]) a = Ta(x.nowEventTime(),
        a);
      else {
        var e = v.getElementParent(a);
        e && w(e);
        a[Y] = na;
        Fa[na] = {};
        na++;
        e = C(a);
        R.append(e, void 0);
        a = Ua(a)
      }
      R.append(a, void 0)
    }

    function z(a, e) {
      var b = a && v.classNameExists(a, "(ym-disable-keys|-metrika-nokeys)");
      e && a && (b = b || !!v.getElementsByClassName("(ym-disable-keys|-metrika-nokeys)", a).length);
      return b
    }

    function ta(a) {
      return a && v.classNameExists(a, "(ym-disable-submit|-metrika-noform)")
    }

    function D(a) {
      var e = S.getTarget(a);
      if (e && "SCROLLBAR" != e.nodeName) {
        if (/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(e.tagName))
          if (e[Y]) w(e);
          else {
            var b = e.form;
            if (b) {
              b = b.elements;
              for (var c = b.length, h = 0; h < c; h++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b[h].tagName) && !b[h][Y] && w(b[h])
            } else w(e)
          }
        else w(e);
        da(q, [x.nowEventTime(), a.type, e, S.getPos(a), a.which, a.button])
      }
    }

    function wa(a) {
      D(a);
      ja()
    }

    function tb(a) {
      return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
    }

    function oa(a) {
      if (!a) return {
        ignore: !0,
        forceRecord: !1,
        isPrivate: !1,
        privateFlag: !1,
        recordData: !0
      };
      var e = "password" === a.type || la.test(a.name) || la.test(a.id),
        b = k.reduce(function (e, b) {
          return e || Z.generalRegex.test(a[b])
        }, !1, ["className", "id", "name"]) || Z.placeholderRegex.test(a.placeholder),
        c = Z.forceRecordRegex.test(a.className);
      return {
        forceRecord: c,
        ignore: e,
        isPrivate: b,
        privateFlag: !c && (b || e),
        recordData: c || !(b && f.get("isEU") || e)
      }
    }

    function Ga(a) {
      return "INPUT" == a.tagName ? "password" == a.type || a.name && la.test(a.name) || a.id && la.test(a.id) : !1
    }

    function E(a, e, b) {
      a = S.getTarget(a);
      var c = oa(a);
      c.ignore || !c.forceRecord && (c.isPrivate && f.get("isEU") || z(a)) || (w(a), da(h, [x.nowEventTime(), e, b, a, c.privateFlag]))
    }

    function P(a) {
      var e = a.keyCode,
        b = tb(a);
      if ({
          3: 1,
          8: 1,
          9: 1,
          13: 1,
          16: 1,
          17: 1,
          18: 1,
          19: 1,
          20: 1,
          27: 1,
          33: 1,
          34: 1,
          35: 1,
          36: 1,
          37: 1,
          38: 1,
          39: 1,
          40: 1,
          45: 1,
          46: 1,
          91: 1,
          92: 1,
          93: 1,
          106: 1,
          110: 1,
          111: 1,
          144: 1,
          145: 1
        }[e] || 112 <= e && 123 >= e || 96 <= e && 105 >= e || b & 16) 19 == e && 4 == (b & -17) && (e = 144), E(a, e, b | 16), ka = !1, k.setTimeout(function () {
        ka = !0
      }, 1, "fvl.keyDown"), !(67 == e && b & 4) || b & 1 || b & 2 || V()
    }

    function ha(a) {
      ka && !gb && 0 !== a.which && (E(a, a.charCode || a.keyCode, tb(a)), gb = !0, k.setTimeout(function () {
        gb = !1
      }, 1, "fvl.keyPress"))
    }

    function ja() {
      if (m.getSelection) {
        try {
          var a = m.getSelection()
        } catch (Qb) {
          return
        }
        var b = a.toString();
        var c = a.anchorNode
      } else t.selection && t.selection.createRange && (a = t.selection.createRange(), b = a.text, c = a.parentElement());
      if ("string" == typeof b) {
        try {
          for (; c && 1 != c.nodeType;) c = c.parentNode
        } catch (Qb) {
          return
        }
        if (c) {
          a = oa(c).privateFlag || z(c, !0);
          c = c.getElementsByTagName("*");
          for (var h = 0; h < c.length && !a;) a = oa(c[h]).privateFlag || z(c[h], !0), h++;
          b != Oa && (Oa = b, b = a ? k.map(function () {
              return Z.obfuscatedSymbol
            }, b.split("")).join("") :
            b, da(e, [x.nowEventTime(), b]))
        }
      }
    }

    function V() {
      hb || (hb = !0, Oa && da(B, [x.nowEventTime()]), k.setTimeout(function () {
        hb = !1
      }, 1, "fvl.copy"))
    }

    function O() {
      xa || (xa = !0, da(I, [x.nowEventTime()]))
    }

    function H() {
      xa && (xa = !1, da(A, [x.nowEventTime()]))
    }

    function aa(a) {
      (!xa || a && !a.fromElement) && O()
    }

    function Q(a) {
      a && !a.toElement && H()
    }

    function F(a) {
      if ((a = S.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
        if (a[Y]) w(a);
        else {
          var e = a.form;
          if (e) {
            e = e.elements;
            for (var b = e.length, c = 0; c < b; c++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(e[c].tagName) &&
              !e[c][Y] && w(e[c])
          } else w(a)
        }
        da(ca, [x.nowEventTime(), a])
      }
    }

    function K(a) {
      (a = S.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (w(a), da(Sa, [x.nowEventTime(), a]))
    }

    function L(a) {
      if ((a = S.getTarget(a)) && !Ga(a) && !z(a) && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
        var e = oa(a),
          b = /^(checkbox|radio)$/.test(a.type) ? a.checked : a.value;
        b = e.recordData ? b : k.map(function () {
          return Z.obfuscatedSymbol
        }, b.split("")).join("");
        w(a);
        da(Na, [x.nowEventTime(), a, b, e.privateFlag])
      }
    }

    function J(a) {
      if ((a = S.getTarget(a)) &&
        !ta(a) && "FORM" == a.nodeName) {
        for (var e = a.elements, b = 0; b < e.length; b++) v.isEmptyField(e[b]) || w(e[b]);
        da(G, [x.nowEventTime(), a], !0)
      }
    }

    function N(a) {
      (a = S.getTarget(a)) && "BODY" == a.tagName && R.append([], !0)
    }
    var R = new ub({
        protocol: a,
        counterId: b,
        globalConfig: f,
        counterType: c,
        meta: {
          url: M().href,
          hitId: d,
          timezone: ib,
          timestamp: jb
        }
      }),
      Ma = {
        A: 1,
        ABBR: 2,
        ACRONYM: 3,
        ADDRESS: 4,
        APPLET: 5,
        AREA: 6,
        B: 7,
        BASE: 8,
        BASEFONT: 9,
        BDO: 10,
        BIG: 11,
        BLOCKQUOTE: 12,
        BODY: 13,
        BR: 14,
        BUTTON: 15,
        CAPTION: 16,
        CENTER: 17,
        CITE: 18,
        CODE: 19,
        COL: 20,
        COLGROUP: 21,
        DD: 22,
        DEL: 23,
        DFN: 24,
        DIR: 25,
        DIV: 26,
        DL: 27,
        DT: 28,
        EM: 29,
        FIELDSET: 30,
        FONT: 31,
        FORM: 32,
        FRAME: 33,
        FRAMESET: 34,
        H1: 35,
        H2: 36,
        H3: 37,
        H4: 38,
        H5: 39,
        H6: 40,
        HEAD: 41,
        HR: 42,
        HTML: 43,
        I: 44,
        IFRAME: 45,
        IMG: 46,
        INPUT: 47,
        INS: 48,
        ISINDEX: 49,
        KBD: 50,
        LABEL: 51,
        LEGEND: 52,
        LI: 53,
        LINK: 54,
        MAP: 55,
        MENU: 56,
        META: 57,
        NOFRAMES: 58,
        NOSCRIPT: 59,
        OBJECT: 60,
        OL: 61,
        OPTGROUP: 62,
        OPTION: 63,
        P: 64,
        PARAM: 65,
        PRE: 66,
        Q: 67,
        S: 68,
        SAMP: 69,
        SCRIPT: 70,
        SELECT: 71,
        SMALL: 72,
        SPAN: 73,
        STRIKE: 74,
        STRONG: 75,
        STYLE: 76,
        SUB: 77,
        SUP: 78,
        TABLE: 79,
        TBODY: 80,
        TD: 81,
        TEXTAREA: 82,
        TFOOT: 83,
        TH: 84,
        THEAD: 85,
        TITLE: 86,
        TR: 87,
        TT: 88,
        U: 89,
        UL: 90,
        VAR: 91,
        NOINDEX: 100
      },
      fa = [17, 18, 38, 32, 39, 15, 11, 7, 1],
      Z = function () {
        var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
        return {
          generalRegex: new RegExp("(" + a.join("|") + ")", "i"),
          placeholderRegex: new RegExp("(" + a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";")).join("|") +
            ")", "i"),
          forceRecordRegex: /ym-record-keys/i,
          obfuscatedSymbol: String.fromCharCode(8226),
          obfuscatedKeyCode: 88
        }
      }(),
      na = 1,
      la = /^(password|passwd|pswd)$/,
      ka = !0,
      gb = !1,
      Oa = "",
      hb = !1,
      xa = !0;
    x.initCorrector();
    x.nowTime();
    var Y = "metrikaId_" + Math.random(),
      Fa = {},
      Ha = ":submit" + Math.random();
    if (!k.isMetrikaPlayer()) {
      y.on(t, "click,dblclick,mousedown", D);
      y.on(t, "mouseup", wa);
      y.on(t, "keydown", P);
      y.on(t, "keypress", ha);
      y.on(t, "copy", V);
      if (v.getBody()) y.on(t, "mouseleave", N);
      t.attachEvent && !m.opera ? (y.on(t, "focusin", aa), y.on(t,
        "focusout", Q)) : (y.on(m, "focus", O), y.on(m, "blur", H), y.on(t, "blur", H));
      t.addEventListener ? (y.on(t, "focus", F), y.on(t, "blur", K), y.on(t, "change", L), y.on(t, "submit", J)) : t.attachEvent && (y.on(t, "focusin", F), y.on(t, "focusout", K), function () {
        for (var a = t.getElementsByTagName("form"), e = 0; e < a.length; e++) {
          for (var b = a[e].getElementsByTagName("*"), c = 0; c < b.length; c++)
            if (/^INPUT|SELECT|TEXTAREA$/.test(b[c].tagName)) y.on(b[c], "change", L);
          y.on(a[e], "submit", J)
        }
      }());
      (function () {
        var a = t.getElementsByTagName("form");
        if (a.length)
          for (var e =
              0; e < a.length; e++) {
            var b = a[e].submit;
            if ("function" == typeof b || "object" == typeof b && /^\s*function submit\(\)/.test(String(b))) a[e][Ha] = b, a[e].submit = function () {
              J({
                target: this
              });
              return this[Ha]()
            }
          }
      })()
    }
    return {
      start: function () {
        R.activate()
      },
      stop: function () {
        R.clear();
        y.un(t, "click", D);
        y.un(t, "dblclick", D);
        y.un(t, "mousedown", D);
        y.un(t, "mouseup", wa);
        y.un(t, "keydown", P);
        y.un(t, "keypress", ha);
        y.un(t, "copy", V);
        y.un(t, "focusin", aa);
        y.un(t, "focusout", Q);
        y.un(m, "focus", O);
        y.un(m, "blur", H);
        y.un(t, "blur", H);
        t.removeEventListener ?
          (y.un(t, "focus", F), y.un(t, "blur", K), y.un(t, "change", L), y.un(t, "submit", J)) : t.detachEvent && (y.un(t, "focusin", F), y.un(t, "focusout", K), function () {
            for (var a = t.getElementsByTagName("form"), e = 0; e < a.length; e++) {
              for (var b = a[e].getElementsByTagName("*"), c = 0; c < b.length; c++) /^INPUT|SELECT|TEXTAREA$/.test(b[c].tagName) && y.un(b[c], "change", L);
              y.un(a[e], "submit", J)
            }
          }());
        (function () {
          for (var a = t.getElementsByTagName("form"), e = 0; e < a.length; e++) a[e][Ha] && (a[e].submit = a[e][Ha])
        })()
      }
    }
  }

  function M() {
    for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "),
        c = b.length, d = c, f, l; d--;) a[b[d]] = "";
    try {
      for (f = m.location, d = c; d--;) l = b[d], a[l] = "" + f[l]
    } catch (g) {
      L && (a = L)
    }
    return a
  }

  function pa() {
    return 0 == M().hostname.search(/^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex)$/)
  }

  function kb(a) {
    return -1 !== ("" + m.navigator.userAgent).toLowerCase().search(a)
  }

  function vb(a) {
    return (a = a && a.innerHTML && a.innerHTML.replace(/<\/?[^>]+>/gi, "")) ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
  }

  function wb(a,
    b) {
    var c;
    if (!a || !b) return !1;
    var d = [];
    for (c = 0; c < b.length; c++) d.push(b[c].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
    return (new RegExp("\\.(" + d.join("|") + ")$", "i")).test(a)
  }

  function Tb(a, b) {
    function c(a) {
      a = a.split(":");
      a = a[1] || "";
      a = a.replace(/^\/*/, "").replace(/^www\./, "");
      return a.split("/")[0]
    }
    return a && b ? c(a) == c(b) : a || b ? !1 : !0
  }

  function xb() {
    var a = m.performance || m.webkitPerformance,
      b = a && a.timing,
      c, d = [];
    if (b && (c = b.navigationStart))
      for (d = [b.domainLookupEnd - b.domainLookupStart, b.connectEnd - b.connectStart, b.responseStart - b.requestStart, b.responseEnd - b.responseStart, b.fetchStart - c, b.redirectEnd - b.redirectStart, b.redirectCount || a.navigation && a.navigation.redirectCount], d.push(b.domInteractive && b.domLoading ? b.domInteractive - b.domLoading : null), d.push(b.domContentLoadedEventStart &&
          b.domContentLoadedEventEnd ? b.domContentLoadedEventEnd - b.domContentLoadedEventStart : null), d.push(b.domComplete ? b.domComplete - c : null), d.push(b.loadEventStart ? b.loadEventStart - c : null), d.push(b.loadEventStart && b.loadEventEnd ? b.loadEventEnd - b.loadEventStart : null), d.push(b.domContentLoadedEventStart ? b.domContentLoadedEventStart - c : null), a = 0; a < d.length; a++) b = d[a], null !== b && (0 > b || 36E5 < b) && (d[a] = null);
    return d
  }

  function Ub(a) {
    var b = [],
      c = a._lastPerformanceTiming,
      d = xb(),
      f;
    if (c) {
      var l = 0;
      for (f = c.length; l < f; l++) null ===
        d[l] ? b.push(d[l]) : b.push(c[l] === d[l] ? "" : d[l])
    } else b = d;
    a._lastPerformanceTiming = d;
    return b.join(",")
  }

  function Vb(a) {
    return "first-contentful-paint" === a.name
  }

  function Wb() {
    var a = m.performance && m.performance.getEntriesByType,
      b = a ? k.filter(Vb, m.performance.getEntriesByType("paint")) : [];
    if (b.length) return b = b[0], Math.round(b.startTime);
    if (a) return 0;
    if ("object" == typeof m.chrome && m.chrome.loadTimes) {
      if (b = m.chrome.loadTimes(), b.requestTime && b.firstPaintTime && m.performance && m.performance.timing) return Math.round(1E3 *
        b.firstPaintTime - m.performance.timing.navigationStart)
    } else if (m.performance && m.performance.timing && (b = m.performance.timing, b.navigationStart && b.msFirstPaint)) return b.msFirstPaint - b.navigationStart;
    return null
  }
  var Pa = !1,
    yb = "undefined" !== typeof Object && "function" === typeof Object.defineProperty;
  try {
    if (yb) var Xb = function (a) {
      function b(d) {
        if (c[d]) return c[d].exports;
        var f = c[d] = {
          i: d,
          l: !1,
          exports: {}
        };
        a[d].call(f.exports, f, f.exports, b);
        f.l = !0;
        return f.exports
      }
      var c = {};
      b.m = a;
      b.c = c;
      b.d = function (a, c, l) {
        b.o(a,
          c) || Object.defineProperty(a, c, {
          enumerable: !0,
          get: l
        })
      };
      b.r = function (a) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
          value: "Module"
        });
        Object.defineProperty(a, "__esModule", {
          value: !0
        })
      };
      b.t = function (a, c) {
        c & 1 && (a = b(a));
        if (c & 8 || c & 4 && "object" === typeof a && a && a.__esModule) return a;
        var d = Object.create(null);
        b.r(d);
        Object.defineProperty(d, "default", {
          enumerable: !0,
          value: a
        });
        if (c & 2 && "string" != typeof a)
          for (var g in a) b.d(d, g, function (b) {
            return a[b]
          }.bind(null, g));
        return d
      };
      b.n = function (a) {
        var c = a && a.__esModule ? function () {
          return a["default"]
        } : function () {
          return a
        };
        b.d(c, "a", c);
        return c
      };
      b.o = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
      };
      b.p = "";
      return b(b.s = 67)
    }([function (a, b, c) {
        c.r(b);
        c.d(b, "IterableUtils", function () {
          return C
        });
        var d = c(26),
          f = c(19),
          l = c(29),
          g = c(8),
          n = c(12);
        a = c(9);
        var r = c(2),
          u = a.a.Map,
          p = a.a.Set,
          C = {
            binarySearch: function (a, b, e) {
              var c = 0,
                h = a.length - 1;
              for (e = "function" === typeof e ? e : function (a) {
                  return a
                }; c <= h;) {
                var g = Math.round((c + h) /
                    2),
                  d = e(a[g]);
                if (d === b) {
                  var f = a[g];
                  break
                } else b > d ? c = g + 1 : h = g - 1
              }
              return f
            },
            forof: function (a, b) {
              a instanceof g.List ? a.forEach(b) : a instanceof n.KeyValue ? a.forEach(b) : Object(d.a)(a, b)
            },
            forin: function (a, b) {
              Object(f.a)(a, b)
            },
            fastIterate: function (a, b) {
              for (var e = 0, c = a.length; e < c; e++) b(e, a[e])
            },
            toArray: function (a) {
              return a instanceof g.List || a instanceof n.KeyValue ? p && a instanceof p || u && a instanceof u ? Object(l.a)(a) : a.toArray() : Object(l.a)(a)
            },
            toList: function (a) {
              a = this.isArray(a) ? a : this.toArray(a);
              for (var b =
                  new g.List, e = 0; e < a.length; e++) b.add(a[e]);
              return b
            },
            addToArray: function (a) {
              for (var b, e = arguments.length, c = Array(1 < e ? e - 1 : 0), g = 1; g < e; g++) c[g - 1] = arguments[g];
              return (b = []).concat.apply(b, c).reduce(function (a, e) {
                0 > a.indexOf(e) && a.push(e);
                return a
              }, a)
            },
            removeFromArray: function (a) {
              for (var b, e = arguments.length, c = Array(1 < e ? e - 1 : 0), g = 1; g < e; g++) c[g - 1] = arguments[g];
              return (b = []).concat.apply(b, c).reduce(function (a, e) {
                var b = a.indexOf(e);
                0 <= b && a.splice(b, 1);
                return a
              }, a)
            },
            isArray: function (a) {
              return "function" === typeof Array.isArray ?
                Array.isArray(a) : "[object Array]" === {}.toString.call(a)
            },
            inArray: function (a, b) {
              return a ? "function" === typeof a.includes ? a.includes(b) : 0 <= a.indexOf(b) : !1
            },
            fill: function (a, b) {
              if (Array.prototype.fill) return a.fill(b);
              for (var e = a.length; 0 < e--;) a[e] = b;
              return a
            },
            reduce: function (a, b, e) {
              return this.toArray(a).reduce(b, e)
            },
            reduceRight: function (a, b, e) {
              return this.toArray(a).reduceRight(b, e)
            },
            map: function (a, b) {
              var e = this.toArray(a);
              if (r.ObjectUtils.isNative(e.map, "map")) return e.map(b);
              for (var c = [], h = 0; h < e.length; h++) c[h] =
                b(e[h], h, e);
              return c
            },
            find: function (a, b) {
              if (Array.prototype.find) return a.find(b);
              var e;
              this.forof(a, function (c, h) {
                return !0 === !!b(c, h, a) ? (e = c, !1) : !0
              });
              return e
            },
            keys: function (a) {
              if ("function" === typeof a.keys) return a.keys();
              var b = [];
              this.forof(a, function (a, c) {
                b.push(c)
              });
              return b
            },
            values: function (a) {
              if (a.hasOwnProperty("values")) return a.values();
              var b = [];
              this.forof(a, function (a, c) {
                b.push(a)
              });
              return b
            },
            includes: function (a, b, e) {
              void 0 === e && (e = 0);
              if (r.ObjectUtils.isNative(Array.prototype.includes,
                  "includes")) return a.includes(b, e);
              for (var c = a.length; e < c; e++)
                if (a[e] === b) return !0;
              return !1
            }
          }
      }, function (a, b) {
        a.exports = function (a, b, f) {
          b in a ? Object.defineProperty(a, b, {
            value: f,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : a[b] = f;
          return a
        }
      }, function (a, b, c) {
        c.r(b);
        a = c(5);
        var d = c.n(a),
          f = c(9),
          l = f.a.Object.assign || function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b],
                h = f.a.Object.prototype.hasOwnProperty.bind(c),
                e;
              for (e in c) h(e) && (a[e] = c[e])
            }
            return a
          },
          g = c(19),
          n = c(26),
          r = c(28);
        c.d(b, "ObjectUtils",
          function () {
            return u
          });
        var u = {
          sizeof: function (a, b) {
            void 0 === a && (a = {});
            void 0 === b && (b = !1);
            var c = JSON.stringify(a);
            c = -~encodeURI(c).split(/%..|./).length;
            return b ? r.NumberUtils.bytesToSize(c) : c
          },
          assign: function (a) {
            for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), h = 1; h < b; h++) c[h - 1] = arguments[h];
            return l.apply(void 0, [a].concat(c))
          },
          deleteProps: function (a, b) {
            void 0 === b && (b = []);
            Object(n.a)(b, function (b) {
              delete a[b]
            });
            return a
          },
          copyObject: function (a) {
            return d()({}, a)
          },
          type: function (a) {
            return {}.toString.call(a)
          },
          deepCopyObject: function (a) {
            return JSON.parse(JSON.stringify(a))
          },
          combine: function () {
            for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
            return b.reduce(function (a, e) {
              return null != e ? d()({}, a, e) : a
            }, {})
          },
          findNativeImplementation: function (a) {
            if (this.isNative(f.a[a], a)) return f.a[a];
            var b = ["webkit", "moz", "ms", "o"];
            a = "" + a.slice(0, 1).toUpperCase() + a.slice(1);
            for (var c = 0; c < b.length; c++) {
              var h = "" + b[c] + a;
              if (this.isNative(f.a[h], h)) return f.a[h]
            }
            return null
          },
          isNative: function (a, b) {
            return a ? (new RegExp("function\\s*" +
              b + "\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}", "i")).test(a.toString()) : !1
          },
          isMonkeyPatchedOrUndefined: function (a, b) {
            var c = f.a;
            if (c[a] === w || !this.isNative(c[a], a)) return !0;
            if (b)
              for (var h = 0; h < b.length; h++)
                if (!this.isNative(c[a].prototype[b[h]], b[h])) return !0;
            return !1
          },
          objectKeys: function (a) {
            var b = [];
            Object(g.a)(a, function (a) {
              return b.push(a)
            });
            return b
          },
          objectValues: function (a) {
            var b = [];
            Object(g.a)(a, function (a, c) {
              return b.push(c)
            });
            return b
          },
          safeAccess: function (a, b) {
            if (null == a || "string" !==
              typeof b) return w;
            for (var c = b.split("."), h = a, e = 0, g = c.length; e < g; e++)
              if (h = h[c[e]], null == h) return w;
            return h
          },
          objectIsWindow: function (a) {
            return "undefined" !== typeof Window && a && a.window && a.window === a
          }
        }
      }, function (a, b, c) {
        b.a = "undefined" !== typeof m ? m : "undefined" !== typeof self ? self : global
      }, function (a, b, c) {
        function d(a) {
          var b = {};
          "string" === typeof a && 0 < a.length && "?" !== a && (a = a.replace(/^\?/, "").split("\x26"), Object(l.a)(a, function (a) {
            var e = a.split("\x3d");
            a = e[0];
            e = e[1];
            try {
              b[a] = decodeURIComponent(e)
            } catch (I) {
              b[a] =
                ""
            }
          }));
          return b
        }
        c.r(b);
        var f = c(2),
          l = c(26);
        a = c(19);
        var g = c(3),
          n = c(9);
        f.ObjectUtils.objectIsWindow(g.a) && d(g.a.location.search);
        c = f.ObjectUtils.objectIsWindow(g.a) && g.a !== g.a.top;
        var r = n.a.console || g.a.console;
        "undefined" === g.a.WV_DEBUG && Object.defineProperty(g.a, "WV_DEBUG", {
          value: {}
        });
        var u = function () {
            var a = !1,
              b = !1;
            if (f.ObjectUtils.objectIsWindow(g.a)) {
              a = "1" === d(g.a.location.search)._ym_debug;
              try {
                b = /ym_debug=1/.test(g.a.document.cookie)
              } catch (e) {
                return a
              }
            }
            return a || b
          }(),
          p = {
            __native: r,
            __debugMode: u,
            __addDebug: function (a, b) {},
            devLog: function () {}
          },
          C = ["%cWV:", "font-weight: bold;"];
        c && C.length && (C[1] += "color: purple");
        Object(a.a)(r, function (a) {
          var b, e = r[a] instanceof n.a.Function;
          p[a] = u ? e ? (b = r[a]).bind.apply(b, [r].concat(C)) : r[a] : e ? function () {} : r[a]
        }, !0);
        u && (p.devLog = r.log);
        b["default"] = p
      }, function (a, b, c) {
        var d = c(1);
        a.exports = function (a) {
          for (var b = 1; b < arguments.length; b++) {
            var c = null != arguments[b] ? arguments[b] : {},
              f = Object.keys(c);
            "function" === typeof Object.getOwnPropertySymbols && (f = f.concat(Object.getOwnPropertySymbols(c).filter(function (a) {
              return Object.getOwnPropertyDescriptor(c,
                a).enumerable
            })));
            f.forEach(function (b) {
              d(a, b, c[b])
            })
          }
          return a
        }
      }, function (a, b) {
        a.exports = function (a) {
          if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return a
        }
      }, function (a, b, c) {
        c.r(b);
        c.d(b, "DO_NOT_TRACK", function () {
          return l
        });
        c.d(b, "IS_INCOGNITO", function () {
          return g
        });
        c.d(b, "IS_MOBILE_DEVICE", function () {
          return n
        });
        c.d(b, "IS_DEVELOPMENT", function () {
          return r
        });
        a = c(5);
        var d = c.n(a);
        a = c(13);
        var f = c(3);
        c = d()({}, c(30).BrowserUtils, c(37).DocumentUtils, c(10).DOMUtils,
          c(23).FunctionUtils, c(0).IterableUtils, c(91).MapUtils, c(28).NumberUtils, c(2).ObjectUtils, c(18).StringUtils, c(38).TimeUtils, c(16).Tools, {
            math: c(92).MathUtils
          });
        try {
          var l = a.a.respectDoNotTrack && !0 === navigator.doNotTrack
        } catch (u) {
          l = !1
        }
        var g = function () {
          try {
            f.a.localStorage.setItem("test", "test");
            var a = "test" !== f.a.localStorage.getItem("test");
            f.a.localStorage.removeItem("test");
            return a
          } catch (p) {
            return !0
          }
        }();
        try {
          var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) ?
            !0 : !1
        } catch (u) {
          n = !1
        }
        var r = "development" === a.a.environment;
        Object.defineProperties(c, {
          DO_NOT_TRACK: {
            value: l
          },
          IS_INCOGNITO: {
            value: g
          },
          IS_MOBILE_DEVICE: {
            value: n
          },
          IS_DEVELOPMENT: {
            value: r
          }
        });
        b["default"] = c
      }, function (a, b, c) {
        c.r(b);
        c.d(b, "List", function () {
          return n
        });
        a = c(14);
        var d = c.n(a);
        a = c(1);
        var f = c.n(a),
          l = c(9);
        a = c(2);
        var g = c(0);
        c = l.a.Set;
        a = a.ObjectUtils.isMonkeyPatchedOrUndefined("Set", "add has clear delete forEach toString".split(" "));
        var n = function () {
          function a(b) {
            f()(this, "list", []);
            b && (b instanceof a ? this.create(g.IterableUtils.toArray(b)) : b instanceof Array && this.create(b))
          }
          var b = a.prototype;
          b.add = function (a) {
            !1 === this.has(a) && this.list.push(a);
            return this
          };
          b.has = function (a) {
            return 0 <= this.list.indexOf(a)
          };
          b.clear = function () {
            this.list.length = 0;
            return this
          };
          b["delete"] = function (a) {
            a = this.list.indexOf(a);
            return 0 <= a ? (this.list.splice(a, 1), !0) : !1
          };
          b.each = function (a) {
            if ("function" === typeof a)
              for (var b = 0; b < this.list.length;) {
                var c = this.list[b];
                2 === a.length ? a(c, c) : a(c);
                b++
              }
          };
          b.forEach = function (a) {
            this.each(a)
          };
          b.values = function () {
            return this.list.slice(0)
          };
          b.keys = function () {
            return this.list.slice(0)
          };
          b.toArray = function () {
            return this.list.slice(0)
          };
          b.toString = function () {
            return "List(" + this.size + ")"
          };
          b.create = function (a) {
            for (var b = 0; b < a.length;) this.add(a[b]), b++
          };
          d()(a, [{
            key: "size",
            get: function () {
              return this.list.length
            }
          }]);
          return a
        }();
        b["default"] = a ? n : c
      }, function (a, b, c) {
        var d = c(13),
          f = function (a, b) {
            var c = a.contentWindow;
            return c ? b.reduce(function (a, b) {
              return a && c.hasOwnProperty(b)
            }, !0) : !1
          };
        b.a = function () {
          var a =
            "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : m;
          if ("undefined" !== typeof t && t.body) {
            var b = t.createElement("iframe");
            b.name = d.a.NATIVE_IFRAME_NAME;
            b.title = d.a.NATIVE_IFRAME_NAME;
            b.frameBorder = "0";
            b.style.setProperty("opacity", "0", "important");
            b.style.setProperty("width", "0px", "important");
            b.style.setProperty("height", "0px", "important");
            b.style.setProperty("position", "absolute", "important");
            b.style.setProperty("left", "100%", "important");
            b.style.setProperty("bottom", "100%", "important");
            b.style.setProperty("border", "0", "important");
            b.setAttribute("aria-hidden", "true");
            try {
              /Trident|MSIE/.test(navigator.userAgent) ? t.body.parentNode && t.body.parentNode.appendChild(b) : t.body.appendChild(b), f(b, ["Set", "Map"]) && (a = b.contentWindow || a)
            } catch (n) {
              b.parentElement && b.parentElement.removeChild(b)
            }
          }
          return a
        }()
      }, function (a, b, c) {
        c.r(b);
        c.d(b, "DOMUtils", function () {
          return n
        });
        var d = c(3),
          f = c(0),
          l = c(2),
          g = c(18),
          n = {
            NodeTypes: {
              ELEMENT_NODE: 1,
              ATTRIBUTE_NODE: 2,
              TEXT_NODE: 3,
              CDATA_SECTION_NODE: 4,
              ENTITY_REFERENCE_NODE: 5,
              ENTITY_NODE: 6,
              PROCESSING_INSTRUCTION_NODE: 7,
              COMMENT_NODE: 8,
              DOCUMENT_NODE: 9,
              DOCUMENT_TYPE_NODE: 10,
              DOCUMENT_FRAGMENT_NODE: 11,
              NOTATION_NODE: 12
            },
            base: function () {
              var a = t.createElement("a");
              a.href = "/";
              var b = t.querySelector("base");
              b && b.href && (a.href = b.href);
              return a.href
            },
            getScroll: function (a) {
              if (null == a) return {
                left: 0,
                top: 0
              };
              if (a.window === a) return {
                top: a.scrollY || 0,
                left: a.scrollX || 0
              };
              var b = a.ownerDocument || a,
                c = a.documentElement,
                g = b.defaultView || b.parentWindow,
                d = b.body;
              a === b && (a = this.scrollingElement(b));
              return -1 !== [c, d].indexOf(a) ? {
                top: a.scrollTop || g.scrollY,
                left: a.scrollLeft || g.scrollX
              } : {
                top: a.scrollTop || 0,
                left: a.scrollLeft || 0
              }
            },
            documentVisible: function () {
              if ("undefined" !== typeof t) {
                var a = "undefined" !== typeof t.msHidden ? "msHidden" : "undefined" !== typeof t.webkitHidden ? "webkitHidden" : "hidden";
                return function () {
                  return t[a]
                }
              }
            }(),
            isDOMNode: function (a) {
              if (a) try {
                var b = a.ownerDocument;
                if (null === b) return !1;
                if (b.defaultView) return a instanceof b.defaultView.Node
              } catch (p) {
                return "object" === typeof a && "object" ===
                  typeof a.style && "object" === typeof a.ownerDocument
              }
              return !1
            },
            isScrollable: function (a) {
              var b = a.scrollHeight !== a.clientHeight;
              return a.scrollWidth !== a.clientWidth || b
            },
            scrollingElement: function (a) {
              a = a || t;
              return a.scrollingElement || (a.documentElement.scrollHeight >= a.body.scrollHeight && 0 === a.compatMode.indexOf("CSS1") ? a.documentElement : a.body)
            },
            convertNode: function (a, b, c) {
              var g = void 0 === c ? {
                doc: t,
                saveChildren: !0
              } : c;
              c = g.doc;
              g = g.saveChildren;
              c = c || a.ownerDocument;
              var d = c.createElement(b);
              f.IterableUtils.forof(a.attributes,
                function (a) {
                  d.setAttribute(a.name, a.value)
                });
              g && f.IterableUtils.forof(a.childNodes, function (a) {
                d.appendChild(a.cloneNode(!0))
              });
              return d
            },
            isBlankOrSameOriginIframe: function (a, b) {
              var c = a.getAttribute("src"),
                d = a.getAttribute("sandbox");
              return d && !d.match(/allow-same-origin/) || c && "about:blank" !== c && (c = g.StringUtils.parseURLNative(c).host) && (b || m).location.host !== c ? !1 : !0
            },
            nodeIsRecordable: function (a) {
              if (null !== a) {
                var b = null != a.getAttribute("metrika-ignore") || /-metrika-ignore/.test(a.className),
                  c = null !=
                  a.getAttribute("metrika-force") || /-metrika-force/.test(a.className);
                a = a.getAttribute("type");
                return c ? !0 : !b && "password" !== a
              }
              return !1
            },
            contentSizeChanged: function (a, b) {
              var c = a.ownerDocument ? a.ownerDocument.defaultView : m,
                g = {
                  stopped: !1,
                  height: null,
                  width: null,
                  runner: function () {
                    if (!this.stopped) {
                      var g = null == a ? {} : "function" === typeof a ? a() || {} : a;
                      var h = g.scrollHeight;
                      g = g.scrollWidth;
                      if (h !== this.height || g !== this.width) this.height = h, this.width = g, b({
                        width: g,
                        height: h
                      });
                      c && c.requestAnimationFrame(this.runner.bind(this))
                    }
                  },
                  stop: function () {
                    this.stopped = !0
                  }
                };
              g.runner();
              return g
            },
            elementsFromPoint: function (a, b, c) {
              c = c || t;
              var g = c.elementsFromPoint;
              if (g) return g.call(c, a, b);
              g = [];
              for (var d = [], h;
                (h = c.elementFromPoint(a, b)) && -1 === g.indexOf(h);) {
                g.push(h);
                var e = h.style;
                d.push({
                  value: e.getPropertyValue("pointer-events"),
                  priority: e.getPropertyPriority("pointer-events")
                });
                e.setProperty("pointer-events", "none", "important")
              }
              for (a = d.length; b = d[--a];) g[a].style.setProperty("pointer-events", b.value ? b.value : "", b.priority);
              return g
            },
            nodeIndentLevel: function (a) {
              for (var b =
                  0; a.parentNode;) a = a.parentNode, b++;
              return b
            },
            offsets: function (a, b) {
              var c = void 0 === b ? {} : b,
                g = c.excludeBorder,
                d = void 0 === g ? !1 : g;
              c = c.excludePadding;
              var h = void 0 === c ? !1 : c;
              !1 === "getBoundingClientRect" in a && ("documentElement" in a ? a = a.documentElement : "document" in a && (a = a.document.documentElement));
              var e = (a.ownerDocument || t).defaultView || m,
                f = a.getBoundingClientRect();
              c = f.top;
              g = f.right;
              var l = f.bottom;
              f = f.left;
              if (d || h) {
                e = e.getComputedStyle(a);
                if (d) {
                  d = e.borderRightWidth;
                  var n = e.borderBottomWidth,
                    r = e.borderLeftWidth;
                  c += parseInt(e.borderTopWidth || "0", 10);
                  g += parseInt(d || "0", 10);
                  l += parseInt(n || "0", 10);
                  f += parseInt(r || "0", 10)
                }
                h && (h = e.paddingRight, d = e.paddingBottom, n = e.paddingLeft, c += parseInt(e.paddingTop || "0", 10), g += parseInt(h || "0", 10), l += parseInt(d || "0", 10), f += parseInt(n || "0", 10))
              }
              return {
                top: c,
                right: g,
                bottom: l,
                left: f
              }
            },
            nodeIsInTree: function (a) {
              if (this.isDOMNode(a)) {
                var b = a.ownerDocument;
                if (null != b) return b.documentElement.contains(a)
              }
              return !1
            },
            waitForNode: function (a, b, c) {
              var g = this;
              void 0 === c && (c = 500);
              var d = {
                disconnect: function () {}
              };
              if (g.nodeIsInTree(a)) b(!0);
              else {
                var h = a.ownerDocument || t,
                  e = new MutationObserver(function () {
                    g.nodeIsInTree(a) && (b(!0), e.disconnect())
                  });
                e.observe(h.documentElement, {
                  subtree: !0,
                  childList: !0
                });
                var f = isFinite(c) ? H(function () {
                  g.nodeIsInTree(a) || (b(!1), e.disconnect())
                }, c) : w;
                d.disconnect = function () {
                  f && clearTimeout(f);
                  e.disconnect()
                }
              }
              return d
            },
            createElement: function (a, b, c) {
              c = c || t;
              var g = c.createElement(a);
              f.IterableUtils.forin(b, function (a) {
                var c = b[a];
                "style" === a ? l.ObjectUtils.assign(g[a], c) : g[a] = c
              });
              return g
            },
            matchesSelector: function (a, b) {
              var c = f.IterableUtils.find(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function (a) {
                return a in t.body
              });
              this.matchesSelector = function (a, b) {
                if (c) {
                  if (null == a || null == a.ownerDocument) return !1;
                  try {
                    if (c in a) return a[c](b)
                  } catch (h) {}
                }
                return !1
              };
              return this.matchesSelector(a, b)
            },
            closestParent: function (a, b, c) {
              void 0 === c && (c = !1);
              for (a = c && !this.isTextNode(a) ? a : a.parentNode; a;) {
                if (a && this.matchesSelector(a, b)) return a;
                a = a.parentNode
              }
              return null
            },
            isTextNode: function (a) {
              return 0 <= [this.NodeTypes.TEXT_NODE, this.NodeTypes.COMMENT_NODE].indexOf(a.nodeType)
            },
            isChildOf: function (a, b, c) {
              void 0 === c && (c = !1);
              return null != this.closestParent(a, b, c)
            },
            copyAttributes: function (a, b) {
              f.IterableUtils.forof(a.attributes, function (c) {
                try {
                  b.setAttribute(c.name, c.value)
                } catch (C) {
                  d.a.console.warn("Can't copy attribute [" + c.name + "\x3d" + c.value + "]", {
                    sourceNode: a
                  })
                }
              });
              return b
            },
            isHiddenContent: function (a) {
              if (null == a) return !1;
              if ("#text" === a.nodeName) return this.isHiddenContent(a.parentNode);
              if (/ym-hidden-content/.test(a.className)) return !1;
              if (/ym-hide-content/.test(a.className)) return !0;
              var b = this.matchesSelector(a, ".ym-hide-content *");
              return b && (/ym-show-content/.test(a.className) || this.matchesSelector(a, ".ym-hide-content .ym-show-content *")) ? !1 : b
            }
          }
      }, function (a, b, c) {
        c.d(b, "b", function () {
          return p
        });
        c.d(b, "a", function () {
          return C
        });
        a = c(33);
        var d = c.n(a);
        a = c(5);
        var f = c.n(a);
        a = c(13);
        var l = c(2),
          g = c(0),
          n = c(10),
          r = c(16),
          u = c(4);
        c = a.a.DOMIndexer;
        var p = c.IGNORED_NODES,
          C = c.IGNORED_ATTRIBUTES,
          q =
          c.SKIPPED_ATTRIBUTES,
          h = c.EXTRA_ATTRIBUTES,
          e = [],
          B = {},
          I = {
            INPUT: function (a, b) {
              var e = f()({}, b);
              "checkbox" === b.type || "radio" === b.type ? a.checked ? b.checked = "checked" : delete b.checked : e.value = a.value;
              return e
            },
            IMG: function (a, b) {
              var e = f()({}, b);
              a.currentSrc && (e.src = a.currentSrc || b.src);
              return e
            }
          },
          A = function (a) {
            if (null == a) return !1;
            a = a.nodeType;
            return a === n.DOMUtils.NodeTypes.TEXT_NODE || a === n.DOMUtils.NodeTypes.COMMENT_NODE
          },
          k = function oa(a, b) {
            var e = [];
            if ("function" === typeof b) {
              var c = b(a);
              null != c && c !== NodeFilter.FILTER_ACCEPT ||
                e.push(a)
            } else e.push(a);
            if (a.childNodes && 0 < a.childNodes.length) {
              c = a.childNodes;
              for (var h = 0, g = c.length; h < g; h++) e.push.apply(e, oa(c[h]))
            }
            return e
          },
          m = function (a, b, e) {
            var c = function (a) {
              return "function" === typeof e ? e(a) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
            };
            if ("function" === typeof b && c(a) === NodeFilter.FILTER_ACCEPT && (b(a), !1 === A(a)))
              for (a = t.createTreeWalker(a, -1, e ? {
                  acceptNode: c
                } : null, !1); a.nextNode() && !1 !== b(a.currentNode););
          },
          Na = function (a, b) {
            var e = [];
            a && (n.DOMUtils.nodeIsInTree(a) ?
              m(null == a ? t.documentElement : a, function (a) {
                e.push(a)
              }, b) : e.push.apply(e, k(a, b)));
            return e
          },
          Ta = function (a) {
            var b = a["*"],
              e = d()(a, ["*"]),
              c = {},
              h = new RegExp(b.join("|"), "i");
            g.IterableUtils.forin(e, function (a) {
              var h, g = (h = []).concat.apply(h, e[a].concat(b));
              c[a] = new RegExp(g.join("|"), "i")
            });
            return function (a, b) {
              if (a && b) {
                var e = "string" === typeof a ? a : a.nodeName;
                if (e) return (e = c[e.toLowerCase()]) && !!b.match(e) || !!b.match(h)
              }
              return !1
            }
          }(C),
          Ua = [function (a, b, e) {
            return null == e || /^javascript/.test(e)
          }, function (a, b) {
            return "SCRIPT" ===
              a.nodeName && "src" === b
          }, function (a, b) {
            return "A" === a.nodeName && "href" === b
          }],
          G = function (a, b, e) {
            for (var c = 0, h = Ua.length; c < h; c++)
              if (!0 === Ua[c](a, b, e)) return !1;
            return !0
          },
          da = function (a, b, c) {
            var h = c;
            if (G(a, b, c)) {
              h = e.reduce(function (e, c) {
                try {
                  var h = c(a, b, e);
                  return null != h ? h : e
                } catch (ja) {
                  return u["default"].warn("Filtering error", ja), e
                }
              }, h);
              if ("string" === typeof h) return (c = B[b]) ? c(a, b, h) || h : h;
              if (null != h && !1 !== h) return h.baseVal
            }
            return null
          },
          v = function (a, b) {
            a: {
              try {
                t.createAttribute(b)
              } catch (Ga) {
                var e = !1;
                break a
              }
              e = !0
            }
            return !e || Ta({
              nodeName: a
            }, b) ? !1 : b
          },
          y = function (a, b, e) {
            if (e && e.name) {
              if (!1 !== v(b, e.name)) try {
                var c, h = da(a, e.name, e.value);
                return c = {}, c[e.name] = h || "", c
              } catch (P) {
                u["default"].warn("Error while reading attribute", e, a), u["default"].warn(P)
              }
            } else u["default"].warn("Error while reading attribute", e, a);
            return null
          };
        c = function (a) {
          var b = new RegExp(a.join("|"), "gi");
          return function (a) {
            return a && !!a.nodeName.match(b)
          }
        }(p);
        var z = function (a) {
          return a && a.namespaceURI ? /svg/.test(a.namespaceURI) : !1
        };
        c = {
          all: Na,
          map: function (a, b, e) {
            var c = [];
            a = Na(a, e);
            g.IterableUtils.fastIterate(a, function (a, e) {
              c.push(b(e))
            });
            return c
          },
          walk: m,
          each: function (a, b, e) {
            a && (a = Na(a, e), g.IterableUtils.fastIterate(a, b))
          },
          getAttributes: function (a) {
            var b = {},
              e = a.nodeName,
              c = g.IterableUtils.toArray(a.attributes);
            c && c.length && (g.IterableUtils.fastIterate(c, function (c, h) {
              var g = y(a, e, h);
              g && l.ObjectUtils.assign(b, g)
            }), (c = h[e] || w) && g.IterableUtils.fastIterate(c, function (c, h) {
              y(b, e, {
                name: h,
                value: a[h]
              })
            }));
            return (c = I[e]) ? c(a, b) : b
          },
          getContent: function (a) {
            if (null !=
              a && A(a)) return a.textContent
          },
          getNamespace: function (a) {
            if (z(a)) return a.namespaceURI
          },
          normalizeAttributeValue: da,
          cloneAttributes: function (a, b) {
            var e = g.IterableUtils.toArray(a.attributes);
            g.IterableUtils.fastIterate(e, function (a, e) {
              var c = !1 === r.Tools.isNULL(e.namespaceURI),
                h = e.cloneNode();
              c ? b.attributes.setNamedItemNS(h) : b.attributes.setNamedItem(h)
            });
            return b
          },
          isSVG: z,
          isTextNode: A,
          isIgnoredNode: c,
          isIgnoredAttr: Ta,
          isAttributeNameValid: v,
          isSkippedAttribute: function (a) {
            return g.IterableUtils.includes(q,
              a)
          }
        };
        Object.defineProperty(c, "addAttributesFilter", {
          value: function (a) {
            "function" === typeof a && e.push(a)
          }
        });
        b.c = c
      }, function (a, b, c) {
        c.r(b);
        c.d(b, "KeyValue", function () {
          return n
        });
        a = c(14);
        var d = c.n(a);
        a = c(1);
        var f = c.n(a);
        a = c(2);
        var l = c(9),
          g = c(0);
        c = l.a.Map;
        a = a.ObjectUtils.isMonkeyPatchedOrUndefined("Map", "set get has clear delete forEach toString".split(" "));
        var n = function () {
          function a(b) {
            f()(this, "lastIndex", 0);
            f()(this, "list", []);
            f()(this, "index", []);
            b instanceof a ? this.create(g.IterableUtils.toArray(b)) :
              b instanceof Array && this.create(b)
          }
          var b = a.prototype;
          b.allocate = function (a) {
            void 0 === a && (a = 0);
            this.list.length = a;
            this.index.length = a
          };
          b.set = function (a, b) {
            var c = this.indexOf(this.index, a); - 1 !== c ? this.list[c].value = b : (this.list[this.lastIndex] = {
              key: a,
              value: b
            }, this.index[this.lastIndex] = a, this.lastIndex++);
            return this
          };
          b.get = function (a) {
            return (a = this.find(a)) ? a.value : w
          };
          b.keys = function () {
            return this.list.map(function (a) {
              return a.key
            })
          };
          b.values = function () {
            return this.list.map(function (a) {
              return a.value
            })
          };
          b.has = function (a) {
            return -1 !== this.indexOf(this.index, a)
          };
          b.clear = function () {
            this.lastIndex = 0;
            this.list.length = 0;
            this.index.length = 0;
            return this
          };
          b["delete"] = function (a) {
            if (a = this.find(a))
              if (a = this.indexOf(this.list, a), -1 !== a) return this.list.splice(a, 1), this.index.splice(a, 1), this.lastIndex--, !0;
            return !1
          };
          b.each = function (a) {
            "function" === typeof a && this.loop(function (b) {
              var c = b.key;
              b = b.value;
              2 === a.length ? a(c, b) : a([c, b])
            })
          };
          b.forEach = function (a) {
            var b = this;
            "function" === typeof a && this.loop(function (c) {
              a(c.value,
                c.key, b)
            })
          };
          b.toArray = function () {
            return this.list.map(function (a) {
              return [a.key, a.value]
            })
          };
          b.toString = function () {
            return "KeyValue(" + this.size + ")"
          };
          b.loop = function (a) {
            if ("function" === typeof a)
              for (var b = 0; b < this.list.length;) a.call(this, this.list[b]), b++
          };
          b.create = function (a) {
            var b = 0;
            if (a && 0 < a.length)
              for (; b < a.length;) {
                var c = a[b];
                this.set(c[0], c[1]);
                b++
              }
          };
          b.find = function (a) {
            a = this.indexOf(this.index, a);
            if (-1 !== a) return this.list[a]
          };
          b.indexOf = function (a, b) {
            return [].indexOf.call(a, b)
          };
          d()(a, [{
            key: "size",
            get: function () {
              return this.lastIndex
            }
          }]);
          return a
        }();
        b["default"] = a ? n : c
      }, function (a, b, c) {
        a = c(5);
        a = c.n(a);
        c.d(b, "a", function () {
          return d
        });
        var d = a()({}, {
          NATIVE_IFRAME_NAME: "ym-native-frame"
        }, {
          environment: "production",
          "package": {
            version: "2.6.2"
          },
          respectDoNotTrack: !0,
          experimentalWebSocket: !0,
          captors: {
            input: !0,
            keystrokes: !0,
            media: !1,
            mouse: !0,
            focus: !0,
            mutations: !0,
            resize: !0,
            deviceRotation: !0,
            selection: !0,
            scroll: !0,
            touch: !0,
            zoom: !0,
            window: !0,
            srcset: !0
          },
          captorsConfig: {
            input: {
              PD: function () {
                return {
                  delimiter: "(-|\\.|_|\\s){0,2}",
                  suspiciousWords: "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                  placeholderSuspiciousWords: "\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" ")
                }
              }
            }
          },
          DOMIndexer: {
            IGNORED_NODES: ["script", "noscript", "audio"],
            IGNORED_ATTRIBUTES: {
              "*": ["^on.+", "srcset", "integrity", "crossorigin"],
              iframe: ["src"],
              script: ["src", "type"]
            },
            SKIPPED_ATTRIBUTES: [],
            EXTRA_ATTRIBUTES: {
              VIDEO: ["width", "height"]
            },
            URL_NODES: ["link", "img", "svg"],
            URL_ATTRIBUTES: "href link content poster style src srcset".split(" "),
            IGNORE_NODES_ORDER: ["HEAD"],
            HIDABLE_NODES: "#text IMG INPUT BUTTON SELECT TEXTAREA".split(" "),
            REPLACE_ATTRIBUTES: {
              a: {
                href: "#"
              }
            }
          }
        })
      }, function (a, b) {
        function c(a, b) {
          for (var c =
              0; c < b.length; c++) {
            var g = b[c];
            g.enumerable = g.enumerable || !1;
            g.configurable = !0;
            "value" in g && (g.writable = !0);
            Object.defineProperty(a, g.key, g)
          }
        }
        a.exports = function (a, b, l) {
          b && c(a.prototype, b);
          l && c(a, l);
          return a
        }
      }, function (a, b, c) {
        (function (a, f) {
          var d = c(8),
            g = c(0),
            n = c(2),
            r = function () {
              function b(b, c) {
                var h = void 0 === c ? {} : c,
                  e = h.context;
                e = void 0 === e ? null : e;
                h = h.expose;
                h = void 0 === h ? !1 : h;
                this.allowedEvents = g.IterableUtils.toList((this.eventsList || b || []).map(function (a) {
                  return a.split(":")[0]
                }));
                this.context = e || this;
                this._define("_events", new a)._define("_memory", new a)._define("_namespaces", new a)._define("_options", new a)._define("_once", new a);
                this._setupEvents();
                this._exposeEvents(e, h)
              }
              var c = b.prototype;
              c.emit = function (a) {
                for (var b = this, c = arguments.length, e = Array(1 < c ? c - 1 : 0), d = 1; d < c; d++) e[d - 1] = arguments[d];
                return new f(function (c, h) {
                  var d = a.split(" ");
                  g.IterableUtils.forof(d, function (a) {
                    b._invokeEvent(a, e, c, h)
                  });
                  return b
                })
              };
              c.on = function (a, b) {
                var c = this;
                if ("function" === typeof b) {
                  var e = a.split(" ");
                  g.IterableUtils.forof(e,
                    function (a) {
                      c._saveEvent(a, b)
                    })
                } else throw Error("Callback sould be a function");
                return this
              };
              c.off = function (a, b) {
                var c = this;
                var e = a ? a.split(" ") : g.IterableUtils.keys(c._events);
                g.IterableUtils.forof(e, function (a) {
                  c._removeEvent(a, b)
                });
                return this
              };
              c._define = function (a, b) {
                Object.defineProperty(this, a, {
                  value: b,
                  writable: !1
                });
                return this
              };
              c._exposeEvents = function (a, b) {
                b && n.ObjectUtils.assign(a, {
                  on: this.on.bind(this),
                  off: this.off.bind(this),
                  emit: this.emit.bind(this)
                })
              };
              c._getNamespace = function (a, b) {
                var c =
                  this._namespaces.get(a);
                return c ? c.get(b) || this._events.get(a) : this._events.get(a)
              };
              c._hasOption = function (a, b) {
                var c = this._options.get(a);
                return !!c && c.has(b)
              };
              c._invokeEvent = function (a, b, c) {
                var e = this;
                a = a.split(".");
                var h = a[0];
                a = a[1];
                var d = this._hasOption(h, "stop");
                if ((a = this._getNamespace(h, a)) && 0 < a.size) {
                  var q = f.resolve();
                  b = this._saveMemory(h, b);
                  g.IterableUtils.forof(a, function (a) {
                    if (e._isAlreadyCalled(h, a)) return !0;
                    q = q.then(function (g) {
                      return !1 !== g ? (g = e._runCallback(h, a, b), c(g), d ? g : null) : !1
                    })
                  })
                }
              };
              c._isAlreadyCalled = function (a, b) {
                if (this._hasOption(a, "once")) {
                  var c = this._once.get(a) || new d["default"];
                  if (c.has(b)) return !0;
                  c.add(b);
                  this._once.set(a, c)
                }
                return !1
              };
              c._runCallback = function (a, b, c) {
                c = this._saveMemory(a, c);
                return b.call.apply(b, [this.context].concat(c))
              };
              c._saveEvent = function (a, b) {
                var c = a.split(":"),
                  e = c[0];
                c = c.slice(1);
                var f = e.split(".");
                e = f[0];
                f = f[1];
                var q = this._events.get(e) || new d["default"];
                c = this._options.get(e) || g.IterableUtils.toList(c);
                var l = this._memory.get(e) || !1;
                q.has(b) ||
                  (q.add(b), this._events.set(e, q), this._options.set(e, c), this._saveNamespace(e, f, b), l && this._runCallback(e, b, l))
              };
              c._saveMemory = function (a, b) {
                return this._hasOption(a, "memory") ? this._memory.has(a) ? this._memory.get(a) || [] : this._memory.set(a, b) && b : b
              };
              c._saveNamespace = function (b, c, h) {
                var e = this._namespaces.get(b) || new a,
                  g = e.get(c || "__global") || new d["default"];
                g.add(h);
                e.set(c || "__global", g);
                this._namespaces.set(b, e)
              };
              c._setupEvents = function () {
                var a = this;
                this.allowedEvents.size && g.IterableUtils.forof(this.allowedEvents,
                  function (b) {
                    var c = b.split(":");
                    b = c[0];
                    c = c.slice(1);
                    a._options.set(b, g.IterableUtils.toList(c));
                    a._events.set(b, new d["default"])
                  })
              };
              c._removeCallbacks = function (a, b) {
                if (b instanceof d["default"]) {
                  var c = this._events.get(a);
                  g.IterableUtils.forof(b, function (a) {
                    c && c["delete"](a)
                  })
                }
              };
              c._removeEvent = function (a, b) {
                var c = a.split("."),
                  e = c[0];
                c = c[1];
                var g = this._events.get(e) || new d["default"];
                g.has(b) ? (c || g["delete"](b), this._removeNamespace(e, c, b)) : (c || (this._events["delete"](e), this._options["delete"](e)),
                  this._removeNamespace(e, c))
              };
              c._removeNamespace = function (a, b) {
                var c = this,
                  e = this._namespaces.get(a);
                e && (b ? (this._removeCallbacks(a, e.get(b)), e["delete"](b)) : (g.IterableUtils.forof(e, function (b) {
                  c._removeCallbacks(a, b)
                }), this._namespaces["delete"](a)))
              };
              return b
            }();
          b.a = r
        }).call(this, c(12)["default"], c(22).Promise)
      }, function (a, b, c) {
        c.r(b);
        (function (a) {
          c.d(b, "Tools", function () {
            return u
          });
          var d = c(3),
            l = c(41),
            g = c(2),
            n = c(4),
            r = {
              "null": null,
              undefined: w,
              "true": !0,
              "false": !1
            },
            u = {
              delay: function (b, c) {
                void 0 ===
                  c && (c = 0);
                return new a(function (a) {
                  H(function () {
                    a(b())
                  }, c)
                })
              },
              copyText: function (b) {
                return new a(function (a) {
                  var c = t.createElement("textarea"),
                    h = t.body;
                  c.value = b;
                  c.style.opacity = "0";
                  c.style.position = "absolute";
                  c.style.top = "-99999px";
                  c.style.left = "-99999px";
                  c.onselect = function () {
                    try {
                      c.onselect = null, t.execCommand && t.execCommand("copy"), a()
                    } catch (e) {
                      n["default"].warn("Error while copying text " + b, e)
                    }
                    h.removeChild(c)
                  };
                  h.appendChild(c);
                  c.select()
                })
              },
              globalize: function (a, b) {
                "undefined" !== typeof d.a && Object.defineProperty(d.a,
                  b, {
                    value: a
                  })
              },
              guid: function () {
                var a = function () {
                  return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                };
                return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
              },
              measure: function (a, b, c) {
                if (null != b) return "function" === typeof b ? b() : b
              },
              apiMock: function (a) {
                var b = {
                  properties: [],
                  methods: []
                };
                a = a.prototype;
                for (var c in a)
                  if (a.hasOwnProperty(c)) try {
                    a[c] instanceof Function ? b.methods.push(c) : b.properties.push(c)
                  } catch (h) {
                    b.properties.push(c)
                  }
                return b
              },
              cast: function (a) {
                if (r.hasOwnProperty(a)) return r[a];
                var b = Number(a);
                return String(b) === a ? b : a
              },
              "catch": function (a) {
                try {
                  a()
                } catch (C) {
                  return n["default"].warn(C), C
                }
              },
              fetch: l.a,
              promise: function (b) {
                return (new a(function (a, c) {
                  b(a, c)
                }))["catch"](function (a) {
                  return n["default"].warn(a)
                })
              },
              isNULL: function (a) {
                return null == a
              },
              isFunction: function (a) {
                return "function" === typeof a
              },
              promiseError: function (b) {
                n["default"].warn(b);
                return a.reject(b)
              },
              promiseExec: function (b) {
                return new a(function (a) {
                  a(b())
                })
              },
              requestAnimationFrame: function (a) {
                var b = g.ObjectUtils.findNativeImplementation("requestAnimationFrame"),
                  c = g.ObjectUtils.findNativeImplementation("cancelAnimationFrame");
                if (b && c) return this.requestAnimationFrame = b.bind(m), this.requestAnimationFrame(a);
                this.requestAnimationFrame = b = function (a) {
                  return H(a, 4)
                };
                return b(a)
              },
              cancelAnimationFrame: function (a) {
                var b = g.ObjectUtils.findNativeImplementation("requestAnimationFrame"),
                  c = g.ObjectUtils.findNativeImplementation("cancelAnimationFrame");
                b && c ? (this.cancelAnimationFrame = c.bind(m), this.cancelAnimationFrame(a)) : (this.cancelAnimationFrame = function (a) {
                    clearTimeout(a)
                  },
                  clearTimeout(a))
              },
              throwError: function (a) {
                throw Error(a);
              },
              errorProxy: function (a, b, c) {
                void 0 === b && (b = !1);
                try {
                  return a()
                } catch (h) {
                  return m.console.warn("Error while running " + (c || a.name), h), b
                }
              }
            }
        }).call(this, c(22).Promise)
      }, function (a, b) {
        a.exports = function (a, b) {
          a.prototype = Object.create(b.prototype);
          a.prototype.constructor = a;
          a.__proto__ = b
        }
      }, function (a, b, c) {
        c.r(b);
        c.d(b, "StringUtils", function () {
          return l
        });
        var d = c(3),
          f = c(0),
          l = {
            dasherize: function (a) {
              return a.replace(/[A-Z]/g, function (b, c) {
                var g = /[A-Z]/g.test(a[c -
                  1]);
                return (0 === c || g ? "" : "-") + b.toLowerCase()
              })
            },
            pad: function (a, b, c, d) {
              void 0 === b && (b = 2);
              void 0 === c && (c = " ");
              void 0 === d && (d = !1);
              a = String(a);
              b = f.IterableUtils.fill(Array(Math.max(0, Math.min(b - a.length, b))), c);
              return d ? "" + a + b.join("") : "" + b.join("") + a
            },
            stringToBlobURL: function (a, b, c) {
              void 0 === c && (c = d.a.location);
              var g = function () {
                  try {
                    return new Blob([a], {
                      type: b
                    })
                  } catch (q) {
                    var c = d.a;
                    c = new(c.BlobBuilder || c.WebKitBlobBuilder || c.MozBlobBuilder || c.MSBlobBuilder);
                    c.append(a);
                    return c.getBlob(b)
                  }
                }(),
                f = function (a) {
                  return a ?
                    (a = (URL || webkitURL).createObjectURL(a), /blob:(?!http[s]?).*/.test(a) ? a.replace("blob:", "blob:" + (c.protocol + "//" + c.host) + "/") : a) : w
                }(g);
              return g ? {
                blob: g,
                url: f
              } : null
            },
            repeatString: function (a, b) {
              void 0 === b && (b = 1);
              return Array(b + 1).join(a)
            },
            parseURLNative: function (a) {
              var b = t.createElement("a");
              b.href = a;
              return {
                protocol: b.protocol,
                hostname: b.hostname,
                host: b.host,
                port: b.port,
                pathname: b.pathname,
                search: b.search,
                url: a
              }
            },
            parseURL: function (a) {
              if (!a) return w;
              if ("string" !== typeof a) return d.a.console.warn("URL was expected to be a string",
                a), w;
              var b = a.match(/^(http[s]?|file):\/\/([^/\n]*)([^?\n]*)(\?[^\n]*)?/);
              if (b) {
                var c = b.slice(1);
                b = c[0];
                var g = c[1],
                  f = c[2];
                c = c[3];
                var l = g ? (g.match(/([^:\s]+)(:[0-9]*)?/) || []).slice(1) : [],
                  q = l[0];
                q = void 0 === q ? w : q;
                l = l[1];
                l = void 0 === l ? w : l;
                var h = q ? (q.match(/\.([^.]+)$/) || [])[1] : w,
                  e = f ? function () {
                    var a = f.match(/([^/]+)\.([^/]*)$/);
                    return a ? a[0] : w
                  }() : w,
                  B = f && e ? f.replace("/" + e, "") : f || "/";
                return {
                  protocol: b ? b + ":" : w,
                  hostname: g,
                  host: q,
                  port: (l || "80").replace(/:/, ""),
                  path: f || "/",
                  tld: h,
                  file: e,
                  pathname: B,
                  search: c ? c.replace(/^\?/,
                    "") : w,
                  url: a,
                  assemble: function (a) {
                    var b = this;
                    return a ? a.replace(/(\{([^}]+)\})/g, function () {
                      return b[2 >= arguments.length ? w : arguments[2]]
                    }) : this.url
                  }
                }
              }
              return w
            }
          }
      }, function (a, b, c) {
        b.a = function (a, b, c) {
          void 0 === c && (c = !1);
          var g = 2 === b.length;
          if (a && b instanceof Function)
            for (var d in a)
              if (a.hasOwnProperty(d) || !0 === c) {
                var f = g ? b(d, a[d]) : b(d);
                if (!0 !== f && !1 === f) break
              }
        }
      }, function (a, b, c) {
        (function (a, c) {
          var d = new a;
          b.a = {
            throttledFunctions: d,
            invokeAll: function (a) {
              c.fastIterate(d, function (b, c) {
                c.invoke.call(a)
              })
            },
            create: function (a, b) {
              var g = void 0 === b ? {} : b,
                f = g.timeout,
                l = void 0 === f ? 0 : f;
              f = g.immediateFirstRun;
              var n = void 0 === f ? !1 : f;
              g = g.context;
              var q = !0,
                h = null,
                e = null,
                B = null,
                I = null,
                A = !1,
                k = null,
                m = null;
              g = {
                invoke: function () {
                  var b = this.context || this;
                  B !== h && (I = c.now(), B = h, a.call(b, {
                    object: h,
                    prevObject: null,
                    timeDifff: 0,
                    args: m
                  }))
                },
                run: function (b) {
                  var g = this.context || this;
                  n && (clearTimeout(k), k = H(function () {
                    return q = !0
                  }, l));
                  if (!A) {
                    h = b;
                    for (var d = arguments.length, f = Array(1 < d ? d - 1 : 0), r = 1; r < d; r++) f[r - 1] = arguments[r];
                    m = f;
                    q && n ?
                      (q = !1, B = b, a.call(g, {
                        object: b,
                        prevObject: null,
                        timeDifff: 0,
                        args: m
                      })) : (I = c.now(), A = !0, H(function Sb() {
                        var b = parseInt(c.now() - I, 10);
                        b >= l ? (A = !1, I = c.now(), B !== h && (e = B, B = h, a.call(g, {
                          object: h,
                          prevObject: e,
                          timeDiff: b,
                          args: m
                        }))) : H(Sb)
                      }))
                  }
                },
                context: void 0 === g ? null : g,
                call: function () {
                  var a;
                  (a = this.run).call.apply(a, arguments)
                }
              };
              d.set(a, g);
              return g
            },
            setContext: function (a, b) {
              if (d.has(a)) {
                var c = d.get(a);
                null == c.context && (c.context = b)
              }
            }
          }
        }).call(this, c(12)["default"], c(7)["default"])
      }, function (a, b, c) {
        c.d(b, "a", function () {
          return p
        });
        a = c(13);
        b = c(12);
        var d = c(10),
          f = c(18),
          l = new b.KeyValue,
          g = String.fromCharCode(8226);
        a = a.a.captorsConfig.input.PD();
        c = a.suspiciousWords;
        a = a.placeholderSuspiciousWords;
        var n = new RegExp("(" + c.join("|") + ")", "i"),
          r = new RegExp("(" + c.concat(a).join("|") + ")", "i"),
          u = /color|radio|checkbox|date|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/i,
          p = {
            isValidType: function (a) {
              return u.test(a)
            },
            isValidNode: function (a) {
              var b = a.nodeName;
              a = a.type;
              return "INPUT" === b ? !a || p.isValidType(a) : /textarea|select|progress/i.test(b)
            },
            isPrivateInformationField: function (a) {
              var b = a.placeholder;
              return [a.className, a.id, a.name].reduce(function (a, b) {
                return a || n.test(b)
              }, !1) || r.test(b)
            },
            isIgnored: function (a) {
              return /password/i.test(a.type) || /ym-disable-keys/i.test(a.className) || d.DOMUtils.isHiddenContent(a) ? !0 : !1
            },
            isRecordable: function (a) {
              return this.matchesClass(a.className, "ym-record-keys") ? !0 : !1
            },
            matchesClass: function (a, b) {
              return (new RegExp(b, "i")).test(a)
            },
            isAllowed: function (a, b) {
              void 0 === b && (b = !1);
              return b ? !0 === p.isRecordable(a) :
                !1 === p.isIgnored(a)
            },
            isChanged: function (a, b) {
              var c = !0;
              if (l.has(a)) {
                var e = l.get(a);
                e && (c = b !== e[0])
              }
              c && l.set(a, [b]);
              return c
            },
            validate: function (a, b) {
              var c = b || {},
                e = c.isEU,
                g = c.recording.keysMode;
              c = p.isRecordable(a);
              var d = p.isPrivateInformationField(a);
              e = p.isAllowed(a, "explicit" === g) && (!e || !d);
              return {
                forceRecord: c,
                isPrivate: d,
                isAllowed: e
              }
            },
            encode: function (a) {
              void 0 === a && (a = "");
              return a && 0 < a.length ? a.split(/\n/).map(function (a) {
                return f.StringUtils.repeatString(g, a.length)
              }).join("\n") : a
            }
          }
      }, function (a,
        b, c) {
        c.r(b);
        c.d(b, "Promise", function () {
          return d
        });
        var d = c(3).a.Promise || c(87).Promise
      }, function (a, b, c) {
        c.r(b);
        c.d(b, "FunctionUtils", function () {
          return d
        });
        var d = {
          invoke: function (a, b, c) {
            void 0 === b && (b = []);
            return "function" === typeof a ? (c && (a = a.bind(c)), a.apply(void 0, b)) : a
          },
          lazy: function (a, b) {
            void 0 === b && (b = 0);
            var c;
            return function () {
              for (var g = arguments.length, d = Array(g), f = 0; f < g; f++) d[f] = arguments[f];
              clearTimeout(c);
              c = H(function () {
                a.apply(void 0, d)
              }, b)
            }
          },
          once: function (a) {
            var b = function () {
              var c = a.apply(void 0,
                arguments);
              b = function () {
                return c
              };
              return c
            };
            return function () {
              return b.apply(void 0, arguments)
            }
          },
          noop: function () {
            return function () {}
          },
          toFunction: function (a) {
            return "function" === typeof a ? a : this.noop()
          },
          repeat: function (a, b) {
            var c = void 0 === b ? {} : b,
              d = c.context,
              f = void 0 === d ? null : d;
            d = c.args;
            var l = void 0 === d ? [] : d;
            d = c.delay;
            var p = void 0 === d ? 0 : d;
            c = c.raf;
            c = void 0 === c ? !0 : c;
            var C = Date.now(),
              q = !1,
              h = null,
              e = c ? this.requestAnimationFrame.bind(this) : H,
              B = c ? this.cancelAnimationFrame.bind(this) : clearTimeout;
            c = function A() {
              q ?
                B(h) : (Date.now() - C >= p && (C = Date.now(), a.apply(f, l)), h = e(A))
            };
            c.stop = function () {
              q = !0
            };
            c();
            return c
          }
        }
      }, function (a, b, c) {
        a.exports = c(89)
      }, function (a, b, c) {
        c.r(b);
        a = c(3).a.Symbol;
        c = a instanceof Function && a.iterator ? a : c(68);
        b["default"] = c
      }, function (a, b, c) {
        (function (a) {
          var d = c(29),
            l = function (a, b, c) {
              a.forEach(function (a, g) {
                2 === b.length ? c ? b(a, g) : b([a, g]) : b(a)
              })
            };
          b.a = function (b, c) {
            var g = 2 === c.length;
            if (b && c instanceof Function)
              if (null != b[a.iterator])
                if (g)
                  if (b instanceof Array) {
                    g = 0;
                    for (var f = b.length; g < f; g++) {
                      var n =
                        c(g, b[g]);
                      if (!0 !== n && !1 === n) break
                    }
                  } else {
                    if (b[a.iterator])
                      for (g = b, f = Array.isArray(g), n = 0, g = f ? g : g[a.iterator]();;) {
                        if (f) {
                          if (n >= g.length) break;
                          var C = g[n++]
                        } else {
                          n = g.next();
                          if (n.done) break;
                          C = n.value
                        }
                        C = c(C[0], C[1]);
                        if (!0 !== C && !1 === C) break
                      }
                  }
            else
              for (g = b, f = Array.isArray(g), n = 0, g = f ? g : g[a.iterator]();;) {
                if (f) {
                  if (n >= g.length) break;
                  C = g[n++]
                } else {
                  n = g.next();
                  if (n.done) break;
                  C = n.value
                }
                C = c(C);
                if (!0 !== C && !1 === C) break
              } else if ("forEach" in b) l(b, c, g);
              else if (b instanceof Array)
              for (f = Object(d.a)(b), n = 0; n < f.length && (C =
                  f[n], C = g ? c.apply(void 0, C) : c(C), !0 === C || !1 !== C); n++);
          }
        }).call(this, c(25)["default"])
      }, function (a, b, c) {
        var d = c(3),
          f = c(2),
          l = function () {
            var a = !1;
            if (f.ObjectUtils.objectIsWindow(d.a)) try {
              d.a.addEventListener("test", function () {}, Object.defineProperties({}, {
                passive: {
                  get: function () {
                    return a = !0
                  },
                  configurable: !0,
                  enumerable: !0
                }
              }))
            } catch (r) {}
            return a
          }(),
          g = function (a, b, c, g, d) {
            void 0 === d && (d = {});
            a += "EventListener";
            if (b && b[a]) return l ? b[a](c, g, d) : b[a](c, g, "boolean" === typeof d ? d : d.capture || !1)
          };
        a = function () {
          function a() {}
          a.on = function (a, b, c, d) {
            void 0 === d && (d = {});
            return g("add", a, b, c, d)
          };
          a.off = function (a, b, c, d) {
            void 0 === d && (d = {});
            return g("remove", a, b, c, d)
          };
          return a
        }();
        b.a = a
      }, function (a, b, c) {
        c.r(b);
        c.d(b, "NumberUtils", function () {
          return d
        });
        var d = {
          size: function (a, b) {
            void 0 === b && (b = "kb");
            switch (b.toLowerCase()) {
              case "b":
              case "byte":
              case "bytes":
                return a;
              case "kb":
              case "kilobyte":
              case "kilobytes":
                return a * this.size(1024, "bytes");
              case "mb":
              case "megabyte":
              case "megabytes":
                return a * this.size(1024, "kilobytes");
              case "gb":
              case "gigabyte":
              case "gigabytes":
                return a *
                  this.size(1024, "megabytes");
              case "tb":
              case "terabyte":
              case "terabytes":
                return a * this.size(1024, "gigabytes");
              default:
                return a
            }
          },
          bytesToSize: function (a) {
            if (0 === a) return "0 Byte";
            var b = Math.round(Math.floor(Math.log(a) / Math.log(1024)));
            return Math.round(a / Math.pow(1024, b)) + " " + ["Bytes", "KB", "MB", "GB", "TB"][b]
          },
          closestNumber: function (a, b) {
            return a.length ? a.reduce(function (a, c) {
              return Math.abs(c - b) < Math.abs(a - b) ? c : a
            }) : null
          }
        }
      }, function (a, b, c) {
        (function (a) {
          var d = c(9),
            l = c(2);
          b.a = function (b) {
            var c = [];
            if (!b) return c;
            if (b instanceof Array) return [].slice.call(b, 0);
            if (l.ObjectUtils.isNative(d.a.Array.from, "from")) return d.a.Array.from(b);
            var g = "length" in b ? b.length : "size" in b ? b.size : 0;
            var f = c.slice.call(b, 0);
            if (f.length === g) return f;
            try {
              if (b.forEach) b.forEach(function (a, b) {
                var e = a;
                b && a && b !== a && (e = [b, a]);
                c.push(e)
              });
              else
                for (var p = b[a.iterator](), C, q; C = p.next(), q = C.value, !C.done;) c.push(q);
              return c
            } catch (h) {
              return []
            }
          }
        }).call(this, c(25)["default"])
      }, function (a, b, c) {
        c.r(b);
        c.d(b, "BrowserUtils", function () {
          return l
        });
        var d = c(3),
          f = c(10),
          l = {
            isMSIE: function () {
              var a = d.a.navigator.userAgent,
                b = a.indexOf("MSIE ");
              if (0 < b) return parseInt(a.substring(b + 5, a.indexOf(".", b)), 10);
              if (0 < a.indexOf("Trident/")) return b = a.indexOf("rv:"), parseInt(a.substring(b + 3, a.indexOf(".", b)), 10);
              b = a.indexOf("Edge/");
              return 0 < b ? parseInt(a.substring(b + 5, a.indexOf(".", b)), 10) : !1
            },
            isIframe: function (a) {
              return a.top !== a
            },
            isMobile: function (a) {
              a = a || m && m.navigator ? navigator.userAgent : null;
              if (null == a) return !1;
              var b = !1;
              if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0,
                  4))) b = !0;
              return b
            },
            isAndroid: function () {
              return /android/i.test(navigator.userAgent)
            },
            isIOS: function () {
              return /ipad|iphone|ipod/i.test(navigator.userAgent)
            },
            orientation: function (a) {
              a = a || d.a;
              return null != a ? a : (a = a.screen.orientation || a.screen.mozOrientation || a.screen.msOrientation) && a.angle || 0
            },
            devicePixelRatio: function () {
              return d.a.devicePixelRatio || 1
            },
            meta: function (a) {
              return (a = t.querySelector('meta[name\x3d"ym:' + a + '"]')) ? a.content : null
            },
            scaleFactor: function (a, b) {
              var c = a.clientWidth,
                g = a.clientHeight,
                d = b.clientWidth,
                f = b.clientHeight;
              return d > c || f > g ? (c /= d, g /= f, Math.min(1, Math.max(c > g ? .1 : .35, Math.min(c, g)))) : 1
            },
            viewportGetter: function (a) {
              a = a || m.document;
              var b = a.defaultView,
                c = function (c) {
                  /Trident|MSIE/.test(b.navigator.userAgent) ? a.body.parentNode && a.body.parentNode.appendChild(c) : a.body.appendChild(c)
                },
                d = a.querySelector("ym-measure.ym-viewport"),
                g = a.querySelector("ym-measure.ym-zoom");
              null === d && (d = f.DOMUtils.createElement("ym-measure", {
                className: "ym-viewport",
                style: {
                  display: "block",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  position: "fixed",
                  transform: "translate(0, -100%)",
                  msTransform: "translate(0, -100%)",
                  webkitTransform: "translate(0, -100%)",
                  transformOrigin: "0 0",
                  msTransformOrigin: "0 0",
                  webkitTransformOrigin: "0 0"
                }
              }), c(d));
              null === g && (g = f.DOMUtils.createElement("ym-measure", {
                className: "ym-zoom",
                style: {
                  bottom: "100%",
                  position: "fixed",
                  width: "100vw"
                }
              }), c(g));
              return Object.defineProperties({
                getSize: function (a) {
                  void 0 === a && (a = 1);
                  var b = d;
                  return {
                    width: Math.round(b.clientWidth * a),
                    height: Math.round(b.clientHeight *
                      a)
                  }
                }
              }, {
                zoomLevel: {
                  get: function () {
                    try {
                      return parseFloat((g.clientWidth / b.innerWidth).toFixed(3))
                    } catch (C) {
                      return 1
                    }
                  },
                  configurable: !0,
                  enumerable: !0
                },
                scrollingElement: {
                  get: function () {
                    return a.scrollingElement || (a.documentElement.scrollHeight > a.body.scrollHeight && 0 === a.compatMode.indexOf("CSS1") ? a.documentElement : a.body)
                  },
                  configurable: !0,
                  enumerable: !0
                },
                orientation: {
                  get: function () {
                    var a = ea ? ea.orientation || ea.mozOrientation || ea.msOrientation : null;
                    return a && a.angle || 0
                  },
                  configurable: !0,
                  enumerable: !0
                }
              })
            }
          }
      },
      function (a, b, c) {
        (function (a, f, l) {
          c.d(b, "b", function () {
            return q
          });
          var g = c(1);
          g = c.n(g);
          var d = c(15),
            r = "2d webgl experimental-webgl webgl2 experimental-webgl2 bitmaprenderer".split(" "),
            u = function () {
              var a = t.createElement("canvas");
              a.proxy = !1;
              return r.filter(function (b) {
                return null != a.getContext(b)
              })
            }(),
            p = new a,
            C = HTMLCanvasElement.prototype.getContext,
            q = function (a) {
              var b = t.createElement("canvas");
              b.width = a.width;
              b.height = a.height;
              b.proxy = !1;
              b.getContext("2d").drawImage(a, 0, 0);
              return b.toDataURL("image/jpeg")
            },
            h = function (a) {
              a = a.constructor;
              if (p.has(a)) return p.has(a);
              var b = f.apiMock(a);
              p.set(a, b);
              return b
            };
          a = function () {
            function a() {}
            a.mock = function () {
              if (!this.mocked) {
                this.mocked = !0;
                HTMLCanvasElement.prototype.getContext = function (b) {
                  var c = C.call(this, b);
                  if (null !== c) return !1 !== this.proxy && 0 <= u.indexOf(b) && a.update(c), c
                };
                var b = t.querySelectorAll("canvas");
                f.forof(b, function (a) {
                  f.forof(r, a.getContext.bind(a))
                })
              }
            };
            a.remove = function () {
              this.mocked && (this.mocked = !1, this.events.off(), HTMLCanvasElement.prototype.getContext =
                C)
            };
            a.update = function (b) {
              if (!1 === a.proxies.has(b)) {
                var c = this,
                  e = b.canvas,
                  g = Object.getPrototypeOf(b),
                  d = h(b);
                f.nodeIsRecordable(e) && d.properties && (f.forof(d.properties, function (a) {
                  var e = Object.getOwnPropertyDescriptor(g, a),
                    h = f.combine(e);
                  e.get && (h.get = e.get.bind(b));
                  e.set && (h.set = function (h) {
                    c.setterInvoked(b, a, h);
                    return e.set.call(b, h)
                  });
                  Object.defineProperty(b, a, h)
                }), f.forof(d.methods, function (a) {
                  var e = b[a];
                  Object.defineProperty(b, a, {
                    configurable: !0,
                    value: function () {
                      for (var h = arguments.length, d = Array(h),
                          g = 0; g < h; g++) d[g] = arguments[g];
                      c.methodInvoked(b, a, d);
                      return e.bind.apply(e, [b].concat(d))
                    }
                  })
                }));
                a.proxies.add(b)
              }
            };
            a.setterInvoked = function (a, b, c) {
              var e = this;
              this.mocked && H(function () {
                e.send(a, "setter", {
                  name: b,
                  value: String(c)
                })
              })
            };
            a.methodInvoked = function (a, b, c) {
              var e = this;
              this.mocked && H(function () {
                c = c.map(function (a) {
                  return a instanceof Image ? q(a) : String(a)
                });
                e.send(a, "method", {
                  name: b,
                  args: c
                })
              })
            };
            a.send = function () {};
            return a
          }();
          g()(a, "proxies", new l);
          g()(a, "mocked", !1);
          g()(a, "events", new d.a(["setter:memory",
            "method:memory"
          ]));
          b.a = a
        }).call(this, c(12)["default"], c(7)["default"], c(8)["default"])
      },
      function (a, b, c) {
        (function (a) {
          var d = c(14),
            l = c.n(d);
          d = c(1);
          var g = c.n(d),
            n = c(4);
          d = function () {
            function b() {
              g()(this, "executionFrameId", null);
              g()(this, "jobExecutionStartStamp", null);
              this.jobs = [];
              this.isRunning = !1
            }
            var c = b.prototype;
            c.push = function (a, b) {
              var c;
              void 0 === b && (b = !1);
              (c = this.jobs).push.apply(c, [].concat(a));
              this.start(b)
            };
            c.start = function (a) {
              void 0 === a && (a = !1);
              this.isRunning || this.executeNextJob(a)
            };
            c.executeNextJob =
              function (a) {
                void 0 === a && (a = !1);
                this.hasJobs && (a ? this._executeJobsSync() : this._executeJobsAsync())
              };
            c._executeJobsSync = function () {
              if (this.hasJobs && this.isRunning) {
                for (a.cancelAnimationFrame(this.executionFrameId); this.hasJobs;) this._executeJob();
                this.jobExecutionStartStamp = null;
                this.isRunning = !1
              }
            };
            c._executeJobsAsync = function () {
              var b = this;
              if (this.hasJobs) {
                this.isRunning = !0;
                var c;
                this.executionFrameId = a.requestAnimationFrame(function () {
                  for (; b.hasJobs && (!b.jobExecutionStartStamp || 150 > c);) c = b._executeJob(!b.jobExecutionStartStamp);
                  b.jobExecutionStartStamp = null;
                  b._executeJobsAsync()
                })
              } else this.isRunning = !1
            };
            c._executeJob = function (a) {
              void 0 === a && (a = !0);
              a && (this.jobExecutionStartStamp = (new Date).valueOf());
              a = this.jobs.shift();
              try {
                a()
              } catch (C) {
                n["default"].log("Error occurred when running job"), n["default"].log(C), n["default"].log(a.toString())
              }
              return (new Date).valueOf() - this.jobExecutionStartStamp
            };
            l()(b, [{
              key: "hasJobs",
              get: function () {
                return 0 < this.jobs.length
              }
            }]);
            return b
          }();
          b.a = d
        }).call(this, c(7)["default"])
      },
      function (a, b) {
        a.exports =
          function (a, b) {
            if (null == a) return {};
            var c = {},
              d = Object.keys(a),
              g;
            for (g = 0; g < d.length; g++) {
              var n = d[g];
              0 <= b.indexOf(n) || (c[n] = a[n])
            }
            return c
          }
      },
      function (a, b, c) {
        c.d(b, "a", function () {
          return d
        });
        c.d(b, "b", function () {
          return f
        });
        var d = function () {
            function a() {
              this.m = []
            }
            var b = a.prototype;
            b.use = function (a) {
              this.m.push(a)
            };
            b.useRight = function (a) {
              this.m.unshift(a)
            };
            b.run = function (a, b) {
              this._execute(a, b)
            };
            b._execute = function (a, b) {
              this.m.reduceRight(function (b, c) {
                return function (d) {
                  return c(d || a, b)
                }
              }, function (c) {
                return b(c ||
                  a)
              })(a)
            };
            return a
          }(),
          f = function () {
            function a() {
              this.m = []
            }
            var b = a.prototype;
            b.use = function (a) {
              this.m.push(a)
            };
            b.useRight = function (a) {
              this.m.unshift(a)
            };
            b.run = function (a, b) {
              return this._execute(a, b)
            };
            b._execute = function (a) {
              for (var b = 0, c = this.m.length; b < c; b++) {
                var d = this.m[b](a);
                if (d === w) break;
                a = d
              }
              return a
            };
            return a
          }()
      },
      function (a, b, c) {
        (function (b) {
          function c(a, c, d, f, u, p, k) {
            try {
              var g = a[p](k),
                h = g.value
            } catch (e) {
              d(e);
              return
            }
            g.done ? c(h) : b.resolve(h).then(f, u)
          }
          a.exports = function (a) {
            return function () {
              var d =
                this,
                f = arguments;
              return new b(function (b, g) {
                function l(a) {
                  c(q, b, g, l, n, "next", a)
                }

                function n(a) {
                  c(q, b, g, l, n, "throw", a)
                }
                var q = a.apply(d, f);
                l(w)
              })
            }
          }
        }).call(this, c(22).Promise)
      },
      function (a, b, c) {
        var d = c(78)();
        a.exports = function (a) {
          return a !== d && null !== a
        }
      },
      function (a, b, c) {
        c.r(b);
        c.d(b, "DocumentUtils", function () {
          return f
        });
        var d = function (a) {
            return a ? "IFRAME" === a.nodeName ? a.contentDocument : a : null
          },
          f = {
            open: function (a) {
              (a = d(a)) && a.open()
            },
            write: function (a, b) {
              var c = d(a);
              c && c.write(b)
            },
            close: function (a) {
              (a = d(a)) &&
              a.close()
            },
            initDocument: function (a) {
              var b = void 0 === a ? {} : a;
              a = b.html;
              var c = b.doctype;
              b = b.doc || t.cloneNode(!1);
              this.open(b);
              this.write(b, a || c + "\x3chtml\x3e\x3chead\x3e\x3c/head\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
              this.close(b);
              return b
            }
          }
      },
      function (a, b, c) {
        c.r(b);
        c.d(b, "TimeUtils", function () {
          return f
        });
        a = c(42);
        var d = c(18),
          f = {
            now: function () {
              return (new Date).getTime()
            },
            formatTime: function (a, b) {
              void 0 === b && (b = !0);
              a = Number(a);
              return [Math.floor(a / 3600), Math.floor(a / 60 % 60), Math.floor(a % 60)].filter(function (a,
                b) {
                return !(0 === a && 0 === b)
              }).map(function (a, c) {
                return d.StringUtils.pad(a, 0 !== c || b ? 2 : 0, "0")
              })
            },
            formattedTime: function (a, b, c) {
              void 0 === b && (b = ["sec", "min", "hours"]);
              void 0 === c && (c = !0);
              var d = f.formatTime(a, c).reverse();
              return b.reduce(function (a, b, c) {
                d[c] && parseInt(d[c], 10) && a.push(parseInt(d[c], 10) + " " + b);
                return a
              }, []).reverse().join(" ")
            },
            timer: a.a
          }
      },
      function (a, b) {
        function c() {
          throw Error("setTimeout has not been defined");
        }

        function d() {
          throw Error("clearTimeout has not been defined");
        }

        function f(a) {
          if (k ===
            H) return H(a, 0);
          if ((k === c || !k) && H) return k = H, H(a, 0);
          try {
            return k(a, 0)
          } catch (ca) {
            try {
              return k.call(null, a, 0)
            } catch (Sa) {
              return k.call(this, a, 0)
            }
          }
        }

        function l(a) {
          if (q === clearTimeout) return clearTimeout(a);
          if ((q === d || !q) && clearTimeout) return q = clearTimeout, clearTimeout(a);
          try {
            return q(a)
          } catch (ca) {
            try {
              return q.call(null, a)
            } catch (Sa) {
              return q.call(this, a)
            }
          }
        }

        function g() {
          e && B && (e = !1, B.length ? h = B.concat(h) : I = -1, h.length && n())
        }

        function n() {
          if (!e) {
            var a = f(g);
            e = !0;
            for (var b = h.length; b;) {
              B = h;
              for (h = []; ++I < b;) B &&
                B[I].run();
              I = -1;
              b = h.length
            }
            B = null;
            e = !1;
            l(a)
          }
        }

        function r(a, b) {
          this.fun = a;
          this.array = b
        }

        function u() {}
        var p = a.exports = {};
        try {
          var k = "function" === typeof H ? H : c
        } catch (A) {
          k = c
        }
        try {
          var q = "function" === typeof clearTimeout ? clearTimeout : d
        } catch (A) {
          q = d
        }
        var h = [],
          e = !1,
          B, I = -1;
        p.nextTick = function (a) {
          var b = Array(arguments.length - 1);
          if (1 < arguments.length)
            for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
          h.push(new r(a, b));
          1 !== h.length || e || f(n)
        };
        r.prototype.run = function () {
          this.fun.apply(null, this.array)
        };
        p.title =
          "browser";
        p.browser = !0;
        p.env = {};
        p.argv = [];
        p.version = "";
        p.versions = {};
        p.on = u;
        p.addListener = u;
        p.once = u;
        p.off = u;
        p.removeListener = u;
        p.removeAllListeners = u;
        p.emit = u;
        p.prependListener = u;
        p.prependOnceListener = u;
        p.listeners = function (a) {
          return []
        };
        p.binding = function (a) {
          throw Error("process.binding is not supported");
        };
        p.cwd = function () {
          return "/"
        };
        p.chdir = function (a) {
          throw Error("process.chdir is not supported");
        };
        p.umask = function () {
          return 0
        }
      },
      function (a, b, c) {
        function d() {
          if ("undefined" === typeof Reflect || !Reflect.construct ||
            Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
          } catch (g) {
            return !1
          }
        }

        function f(b, c, r) {
          d() ? a.exports = f = Reflect.construct : a.exports = f = function (a, b, c) {
            var d = [null];
            d.push.apply(d, b);
            a = new(Function.bind.apply(a, d));
            c && l(a, c.prototype);
            return a
          };
          return f.apply(null, arguments)
        }
        var l = c(88);
        a.exports = f
      },
      function (a, b, c) {
        (function (a) {
          var d = c(37),
            l = c(2),
            g = c(19);
          b.a = function (b) {
            var c = l.ObjectUtils.assign({
              url: "",
              headers: {},
              method: "get",
              type: "json",
              data: null
            }, b);
            if (b.headers === w || b.headers["Content-Type"] === w) c.headers = c.headers || {}, c.headers["Content-Type"] = function () {
              switch (c.type) {
                case "json":
                  return "application/json";
                case "css":
                  return "text/css";
                case "html":
                  return "text/html";
                default:
                  return "text/plain"
              }
            }();
            return (new a(function (a, b) {
              var f = new XMLHttpRequest,
                l = new FileReader;
              "css" === c.type && (f.responseType = "blob");
              f.addEventListener("readystatechange", function () {
                var h = f.status;
                4 === f.readyState && (200 <= h && 301 >
                  h ? "css" === c.type ? (h = ((f.getResponseHeader("Content-Type") || "").split("; ").map(function (a) {
                    return a.split("\x3d")
                  }).find(function (a) {
                    return "charset" === a[0]
                  }) || ["charset", "UTF-8"])[1], l.addEventListener("load", function (b) {
                    a({
                      result: l.result
                    })
                  }), l.readAsText(f.response, h)) : (h = function (a) {
                    switch (c.type) {
                      case "json":
                        return JSON.parse(a);
                      case "html":
                        return d.DocumentUtils.initDocument({
                          html: a
                        });
                      default:
                        return a
                    }
                  }(f.responseText), a({
                    result: h
                  })) : b(Error(h + " " + f.statusText)))
              });
              f.addEventListener("error",
                b);
              f.open(c.method.toUpperCase(), c.url);
              Object(g.a)(c.headers, function (a, b) {
                f.setRequestHeader(a, b)
              });
              f.send(c.data ? JSON.stringify(c.data) : w)
            }))["catch"](function (a) {
              return {}
            })
          }
        }).call(this, c(22).Promise)
      },
      function (a, b, c) {
        (function (a, c) {
          var d = function () {
              if ("undefined" !== typeof m) return m;
              if ("undefined" !== typeof global) return global;
              if ("undefined" !== typeof self) return self
            }(),
            g = function () {
              return Date.now()
            },
            f = function (b) {
              return b ? (b = this._getTime() - b, 0 > b && a.warn("Invalid stamp: " + b), b) : 0
            },
            r = function (a,
              b) {
              var c;
              (c = d.console).log.apply(c, a.concat([b + "ms"]))
            };
          b.a = function (a) {
            void 0 === a && (a = {});
            var b = a.getStamp || f,
              c = a.printLog || r,
              d = {
                start: function () {
                  var a = this._getTime();
                  this._initializedAt = this._initializedAt || a;
                  this._startedAt = a;
                  return d
                },
                stamp: function () {
                  return this._getStamp(this._startedAt)
                },
                stampSinceCreated: function () {
                  return this._getStamp(this._initializedAt)
                },
                reset: function () {
                  return this.start()
                },
                log: function () {
                  for (var a = arguments.length, b = Array(a), d = 0; d < a; d++) b[d] = arguments[d];
                  c(b, this.stamp());
                  return this
                },
                logSinceCreated: function () {
                  for (var a = arguments.length, b = Array(a), d = 0; d < a; d++) b[d] = arguments[d];
                  c(b, this.stampSinceCreated());
                  return this
                }
              };
            Object.defineProperties(d, {
              _getTime: {
                value: (a.getTime || g).bind(d)
              },
              _getStamp: {
                value: b.bind(d)
              }
            });
            return d
          }
        }).call(this, c(4)["default"], c(39))
      },
      function (a, b, c) {
        (function (a, f) {
          var d = c(5),
            g = c.n(d),
            n = c(21);
          b.a = function () {
            var b = new a,
              c = {
                input: {
                  capture: !0,
                  passive: !0
                },
                change: {
                  capture: !0
                },
                keyup: {
                  capture: !0
                },
                paste: {
                  capture: !0
                },
                cut: {
                  capture: !0
                }
              };
            return {
              inputs: {},
              events: {},
              create: function (a) {
                var d = this;
                this.checkInpudDescriptorOverrideAbility = this.checkInpudDescriptorOverrideAbility.bind(this);
                this.handleInputValueChange = this.handleInputValueChange.bind(this);
                this.handleInputChangeValueEvent = this.handleInputChangeValueEvent.bind(this);
                this.handleNodeIndex = this.handleNodeIndex.bind(this);
                this.handleNodeRemoval = this.handleNodeRemoval.bind(this);
                this.recorder = a;
                this.checkInpudDescriptorOverrideAbility(a) && (a.indexer.dom.forEach(function (a) {
                    d.handleNodeIndex(a)
                  }),
                  a.indexer.on("add", this.handleNodeIndex), a.indexer.on("remove", this.handleNodeRemoval));
                f.forin(c, function (g) {
                  b.add(a.attachEvent(a.document, g, d.handleInputChangeValueEvent, c[g]))
                })
              },
              handleNodeIndex: function (a) {
                if (n.a.isValidNode(a.nativeNode) && "__ym_input_override_test" !== a.nativeNode.getAttribute("class")) {
                  var b = a.nativeNode,
                    c = a.id,
                    h = "radio" === a.attributes.type || "checkbox" === a.attributes.type;
                  a = this.getPropertyName(h);
                  this.inputs[c] = {
                    checkable: h,
                    value: b[a]
                  };
                  h = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b),
                    a) || {};
                  var e = Object.getOwnPropertyDescriptor(b, a) || {},
                    d = g()({}, h, e);
                  if (f.isNative(d.set, "((set)?(\\s?" + a + ")?)?")) {
                    var l = this;
                    try {
                      Object.defineProperty(b, a, g()({}, d, {
                        configurable: !0,
                        set: function (a) {
                          var b = this;
                          l.recorder.errorLogger(function () {
                            l.handleInputValueChange(c, a, b)
                          }, "inpVC");
                          return d.set.call(this, a)
                        }
                      }))
                    } catch (A) {
                      delete this.inputs[c]
                    }
                  }
                }
              },
              handleInputChangeValueEvent: function (a) {
                var b = this;
                this.recorder.errorLogger(function () {
                  var c = a.target,
                    h = b.recorder.indexer.get(c);
                  if (h) {
                    var e = h.id;
                    if (!b.inputs[e] &&
                      (b.handleNodeIndex(h), !b.inputs[e])) return;
                    h = b.getPropertyName(b.inputs[e].checkable);
                    b.handleInputValueChange(e, c[h], c)
                  }
                }, "inpChV")
              },
              handleInputValueChange: function (a, b, c) {
                var h = this.inputs[a],
                  e = h.checkable;
                h = h.value;
                if ((!b || -1 !== ["string", "boolean", "number"].indexOf(typeof b)) && b !== h) {
                  if (e) c = this.recorder._getEventObject("change", a, {
                    checked: !!b
                  });
                  else {
                    var d = n.a.validate(c, this.recorder.options);
                    h = d.forceRecord;
                    var g = d.isPrivate;
                    d = d.isAllowed || h ? b : n.a.encode(b);
                    c = this.recorder._getEventObject("change",
                      c, {
                        value: d,
                        hidden: g && !h
                      })
                  }
                  this.inputs[a] = {
                    checkable: e,
                    value: b
                  };
                  this.recorder._publishActions(c)
                }
              },
              handleNodeRemoval: function (a) {
                a.nativeNode && "__ym_input_override_test" === a.nativeNode.getAttribute("class") || delete this.inputs[a.id]
              },
              getPropertyName: function (a) {
                return a ? "checked" : "value"
              },
              checkInpudDescriptorOverrideAbility: function (a) {
                var b = !0,
                  c = a.document.createElement("input");
                c.value = "INPUT_VALUE";
                c.setAttribute("style", "display: none !important;");
                c.setAttribute("type", "text");
                c.setAttribute("class",
                  "__ym_input_override_test");
                a.document.documentElement.appendChild(c);
                try {
                  var h = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(c), "value") || {},
                    e = Object.getOwnPropertyDescriptor(c, "value") || {},
                    d = g()({}, h, e);
                  Object.defineProperty(c, "value", g()({}, d, {
                    configurable: !0,
                    set: function (a) {
                      return d.set.call(c, a)
                    }
                  }));
                  "INPUT_VALUE" !== c.value && (b = !1);
                  c.value = "INPUT_TEST";
                  "INPUT_TEST" !== c.value && (b = !1)
                } catch (I) {
                  b = !1
                }
                a.document.documentElement.removeChild(c);
                return b
              },
              destroy: function (a) {
                var b = this;
                Object.keys(this.inputs).forEach(function (c) {
                  var h =
                    a.indexer.findByID(c);
                  if (h) {
                    c = b.getPropertyName(b.inputs[c].checkable);
                    var e = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(h), c);
                    Object.defineProperty(h, c, e)
                  }
                });
                Object.keys(this.events).forEach(function (c) {
                  a.removeEvent(b.events[c])
                });
                a.indexer.off("add", this.handleNodeIndex);
                a.indexer.off("remove", this.handleNodeRemoval)
              }
            }
          }
        }).call(this, c(8)["default"], c(7)["default"])
      },
      function (a, b, c) {
        (function (a, f) {
          var d = c(20);
          b.a = function () {
            var b = {
                mousemove: {
                  capture: !0,
                  passive: !0,
                  lazy: 5
                },
                mousedown: {
                  capture: !0
                },
                mouseup: {
                  capture: !0
                },
                click: {
                  capture: !0
                }
              },
              c = new a,
              l = function (a) {
                var b = a.object;
                a = a.args[0];
                var c = b.type,
                  e = b.target,
                  d = b.pageX,
                  g = b.pageY,
                  f = b.clientX;
                f = void 0 === f ? null : f;
                b = b.clientY;
                b = void 0 === b ? null : b;
                e = this.document.elementFromPoint(void 0 === d ? null : d, void 0 === g ? null : g) || e;
                a = this._getEventObject(c, e, {
                  x: f,
                  y: b
                }, a);
                this._publishActions(a)
              },
              u = d.a.create(l, {
                timeout: 0
              }),
              p = function (a) {
                var b = this.stamp;
                "mousemove" === a.type ? u.call(this, a, b) : l.call(this, {
                  object: a,
                  args: [b]
                })
              };
            return {
              create: function (a) {
                var d = a._universalHandler(p);
                f.forin(b, function (h) {
                  c.add(a.attachEvent(a.document, h, d, b[h]))
                })
              },
              destroy: function (a) {
                f.forof(c, function (b) {
                  return a.removeEvent(b)
                });
                c.clear()
              }
            }
          }
        }).call(this, c(8)["default"], c(7)["default"])
      },
      function (a, b, c) {
        (function (a, c) {
          b.a = function () {
            var b = {
                focus: {
                  capture: !0
                },
                blur: {
                  capture: !0
                }
              },
              d = new a,
              f = function (a) {
                a = this._getEventObject(a.type, a.target);
                this._publishActions(a)
              };
            return {
              create: function (a) {
                var g = a._universalHandler(f);
                c.forin(b, function (c) {
                  d.add(a.attachEvent(a.document, c, g, b[c]))
                })
              },
              destroy: function (a) {
                c.forof(d,
                  function (b) {
                    return a.removeEvent(b)
                  });
                d.clear()
              }
            }
          }
        }).call(this, c(8)["default"], c(7)["default"])
      },
      function (a, b, c) {
        (function (a) {
          b.a = function () {
            var b, c = function (b, c) {
              var d = this,
                g = a.now();
              this._blockUpcomingCaptor("resize");
              this._executeCaptor("deviceRotation", function () {
                H(function () {
                  var f = a.now() - g;
                  d._publishActions(c.getValue.call(d, b, f))
                }, 300)
              })
            };
            return {
              getValue: function (a, b) {
                var c = this.viewport.getSize(1);
                c = this._getEventObject("deviceRotation", 0, {
                  width: c.width,
                  height: c.height,
                  orientation: this.viewport.orientation
                });
                c.stamp -= b;
                return c
              },
              create: function (a) {
                b = a.attachEvent(a.window, "orientationchange", a._universalHandler(c, {
                  extra: [this]
                }), {
                  passive: !0
                })
              },
              destroy: function (a) {
                a.removeEvent(b)
              }
            }
          }
        }).call(this, c(7)["default"])
      },
      function (a, b, c) {
        (function (a, f) {
          var d = c(20);
          b.a = function () {
            var b, c = new a,
              l = function (a) {
                var b = a.args[0],
                  c = this.viewport.scrollingElement;
                a = a.object.target;
                var h = this.document,
                  e = this.window,
                  d = f.getScroll(a);
                b = this._getEventObject("scroll", a, {
                  x: Math.max(d.left, 0),
                  y: Math.max(d.top, 0),
                  page: a === c || a ===
                    e || a === h || a === h.body
                }, b);
                this._publishActions(b)
              },
              u = function (a) {
                var b = a.target;
                if (c.has(b)) b = c.get(b);
                else {
                  var g = d.a.create(l, {
                    timeout: f.isAndroid() ? 0 : 100,
                    immediateFirstRun: !0
                  });
                  c.set(b, g);
                  b = g
                }
                b.call(this, a)
              };
            return {
              create: function (a) {
                var c = a._universalHandler(u);
                b = a.attachEvent(a.document, "scroll", c.bind(a), {
                  capture: !0,
                  passive: !0
                })
              },
              destroy: function (a) {
                a.removeEvent(b);
                c.clear()
              }
            }
          }
        }).call(this, c(12)["default"], c(7)["default"])
      },
      function (a, b, c) {
        (function (a, c) {
          b.a = function () {
            var b = {
                mousemove: {
                  capture: !0,
                  passive: !0,
                  lazy: 5
                },
                touchmove: {
                  capture: !0,
                  passive: !0,
                  lazy: 5
                },
                mousedown: {
                  capture: !0
                },
                touchdown: {
                  capture: !0
                }
              },
              d = new a,
              f = !1,
              r = function (a) {
                var b = "select" === a.type ? this.selection.getSelectionFor(a.target) : this.selection.getPageSelection();
                b && b.start !== b.end && -1 !== ["mousemove", "touchmove", "touchdown"].indexOf(a.type) ? (f = !0, a = this._getEventObject("selection", "select" === a.type ? a.target : this.rootNode, b), this._publishActions(a)) : f && -1 !== ["mousedown", "touchmove", "touchdown"].indexOf(a.type) && (f = !1, a = this._getEventObject("selection",
                  null, {
                    start: 0,
                    end: 0
                  }), this._publishActions(a))
              };
            return {
              create: function (a) {
                var g = a._universalHandler(function (b) {
                  ("mousemove" === b.type && 1 === b.which || -1 !== ["mousedown", "touchmove", "touchdown"].indexOf(b.type)) && r.call(a, b)
                });
                c.forin(b, function (c) {
                  d.add(a.attachEvent(a.document, c, g, b[c]))
                })
              },
              destroy: function (a) {
                c.forof(d, function (b) {
                  return a.removeEvent(b)
                })
              }
            }
          }
        }).call(this, c(8)["default"], c(7)["default"])
      },
      function (a, b, c) {
        (function (a, f, l) {
          var d = c(20);
          b.a = function () {
            var b = {
                touchmove: {
                  capture: !0,
                  passive: !0
                },
                touchstart: {
                  capture: !0
                },
                touchend: {
                  capture: !0
                },
                touchcancel: {
                  capture: !0
                },
                touchforcechange: {
                  capture: !0
                }
              },
              c = new a,
              g = new f,
              p = !1,
              k = function (a) {
                var b = a.object;
                a = a.args[0];
                var c = b.type,
                  e = l.map(b.changedTouches, function (a) {
                    return {
                      id: a.__id,
                      x: Math.round(a.clientX),
                      y: Math.round(a.clientY),
                      force: a.force
                    }
                  });
                b = this._getEventObject(c, b.target, {
                  touches: e
                }, a);
                this._publishActions(b)
              },
              q = d.a.create(k, {
                timeout: l.isAndroid() ? 0 : 300
              }),
              h = function (a) {
                var b = this.stamp,
                  c = "touchcancel" === a.type || "touchend" === a.type;
                a.changedTouches &&
                  0 < a.changedTouches.length && l.forof(a.changedTouches, function (a) {
                    var b = void 0 === c ? !1 : c;
                    if (g.has(a.identifier)) var e = g.get(a.identifier);
                    else e = l.guid(), g.set(a.identifier, e);
                    b && g["delete"](a.identifier);
                    a.__id = e
                  });
                "touchmove" === a.type ? p ? k.call(this, {
                  object: a,
                  args: [b]
                }) : q.call(this, a, b) : k.call(this, {
                  object: a,
                  args: [b]
                })
              };
            return {
              create: function (a) {
                var e = a._universalHandler(h);
                l.forin(b, function (h) {
                  c.add(a.attachEvent(a.document, h, e, b[h]))
                });
                var d = null,
                  g = a._universalHandler(function () {
                    clearTimeout(d);
                    p = !0;
                    d = H(function () {
                      return p = !1
                    }, 150)
                  });
                c.add(a.attachEvent(a.document, "scroll", g, {
                  passive: !0,
                  capture: !0
                }))
              },
              destroy: function (a) {
                l.forof(c, function (b) {
                  return a.removeEvent(b)
                });
                c.clear()
              }
            }
          }
        }).call(this, c(8)["default"], c(12)["default"], c(7)["default"])
      },
      function (a, b, c) {
        (function (a, c) {
          b.a = function () {
            var b = new a,
              d = [],
              f = null,
              r = function () {
                var a = this,
                  b = this.stamp,
                  g = this.viewport.zoomLevel;
                if (this.zoomLevel !== g) {
                  clearTimeout(f);
                  var l = c.scrollingElement(),
                    h = l.scrollLeft;
                  l = l.scrollTop;
                  this.zoomLevel = g;
                  d.push([b,
                    g, h, l
                  ]);
                  f = H(function () {
                    var b = d[0],
                      c = d[d.length - 1],
                      h = c[0];
                    b = a._getEventObject("zoom", 0, {
                      zoomFrom: {
                        level: b[1],
                        x: b[2],
                        y: b[3]
                      },
                      zoomTo: {
                        level: c[1],
                        x: c[2],
                        y: c[3]
                      },
                      duration: h - b[0]
                    }, h);
                    d.length = 0;
                    a._publishActions(b)
                  }, 100)
                }
              };
            return {
              create: function (a) {
                a = a._universalHandler(r);
                this.captor = c.repeat(a)
              },
              destroy: function () {
                this.captor.stop();
                b.clear()
              }
            }
          }
        }).call(this, c(8)["default"], c(7)["default"])
      },
      function (a, b, c) {
        (function (a, c) {
          b.a = function () {
            var b, d = "undefined" !== typeof t.hidden ? {
                hidden: "hidden",
                event: "visibilitychange"
              } :
              "undefined" !== typeof t.msHidden ? {
                hidden: "msHidden",
                event: "msvisibilitychange"
              } : "undefined" !== typeof t.webkitHidden ? {
                hidden: "webkitHidden",
                event: "webkitvisibilitychange"
              } : null,
              f = d ? (b = {}, b[d.event] = {
                capture: !0
              }, b) : {
                focus: {
                  capture: !0
                },
                blur: {
                  capture: !0
                }
              },
              r = {
                focus: "windowfocus",
                blur: "windowblur"
              },
              u = new a,
              p = function (a) {
                a = d ? this._getEventObject(r[t[d.hidden] ? "blur" : "focus"], this.window) : this._getEventObject(r[a.type], this.window);
                this._publishActions(a)
              };
            return {
              create: function (a) {
                var b = a._universalHandler(p);
                c.forin(f, function (c) {
                  u.add(a.attachEvent(a.window, c, b, f[c]))
                })
              },
              destroy: function (a) {
                c.forof(u, function (b) {
                  return a.removeEvent(b)
                });
                u.clear()
              }
            }
          }
        }).call(this, c(8)["default"], c(7)["default"])
      },
      function (a, b, c) {
        (function (a) {
          var d = c(14),
            l = c.n(d);
          d = c(6);
          var g = c.n(d);
          d = c(17);
          var n = c.n(d);
          d = c(1);
          var r = c.n(d);
          d = c(15);
          var u = c(53),
            p = c(32),
            k = c(11);
          d = function (b) {
            function c(c, e, h) {
              var d = b.call(this) || this;
              r()(g()(d), "IGNORE_NODE_ATTRIBUTE", "__ym_wv_ign");
              r()(g()(d), "eventsList", ["mutation"]);
              d.indexer = e;
              d.originalHTML =
                d.indexer.html;
              d.target = c;
              d.watcher = new u.a(d.target, h);
              d.queue = new p.a;
              d._timer = a.timer();
              d.watcher.on("mutation", d.collectMutations.bind(g()(d)));
              return d
            }
            n()(c, b);
            var e = c.prototype;
            e.addChanges = function (b, c) {
              for (var e = arguments.length, h = Array(2 < e ? e - 2 : 0), d = 2; d < e; d++) h[d - 2] = arguments[d];
              if (null != b[c] && 0 < h.length) {
                var g, f = b[c].length;
                a.fastIterate(h, function (a, b) {
                  return b.i = f + a
                });
                b[c] = (g = b[c]).concat.apply(g, h)
              }
            };
            e.collectMutations = function (a) {
              var b = this;
              this.queue.push(function () {
                var c = b.processMutations(a.summary);
                c.hasData && b.emit("mutation", {
                  changes: c.store,
                  stamp: a.stamp
                })
              })
            };
            e.destroy = function () {
              this.queue.start(!0);
              this.off();
              this.watcher.off();
              this.watcher.stop()
            };
            e.cleanChangesObject = function (b) {
              a.forin(b, function (a) {
                0 === b[a].length && delete b[a]
              });
              return b
            };
            e.initObserver = function () {
              this.initObserver = a.noop();
              this.watcher.start();
              this._timer.start()
            };
            e.processMutations = function (b) {
              var c = this,
                e = !1,
                h = [];
              a.fastIterate(b, function (a, b) {
                if (b.target.parentNode && !k.c.isIgnoredNode(b.target.parentNode)) {
                  var d =
                    c.changesObject;
                  !1 !== function () {
                    var a = b.type,
                      e = b.target,
                      h = c.indexer.getIndexedNodeId(e);
                    if (null == h) return !1;
                    e = [b, h, e, d];
                    switch (a) {
                      case "childList":
                        return c.processTreeChanges.apply(c, e);
                      case "attributes":
                        return c.processAttributesChanges.apply(c, e);
                      case "characterData":
                        return c.processContentChanges.apply(c, e)
                    }
                  }() && (e = !0, h.push(c.cleanChangesObject(d)))
                }
              });
              return {
                store: h,
                hasData: e
              }
            };
            e.combineMutations = function (b, c) {
              return a.reduce(Object.keys(c), function (a, b) {
                var e;
                null == a[b] && (a[b] = []);
                a[b] = (e = a[b]).concat.apply(e,
                  c[b]);
                return a
              }, b)
            };
            e.processTreeChanges = function (b, c, e, h) {
              var d = this,
                g = b.nextSibling,
                f = b.previousSibling;
              e = b.meta;
              b = e.addedNodes;
              e = e.removedNodes;
              e = void 0 === e ? [] : e;
              var l = [],
                B = [];
              a.fastIterate(void 0 === b ? [] : b, function (b, e) {
                d.indexer.reindexNodeTree(e, {
                  parentID: c,
                  callback: function (b, c) {
                    if (b) {
                      var h = a.combine({
                        id: b.id,
                        pa: b.parent,
                        nm: b.name
                      }, c === e ? {
                        pr: d.getIDForNode(f),
                        nx: d.getIDForNode(g)
                      } : {});
                      b.content && (h.ct = b.content);
                      b.namespace && (h.ns = b.namespace);
                      h.at = k.c.getAttributes(b.nativeNode);
                      l.push(h)
                    }
                  }
                })
              });
              a.fastIterate(e, function (a, b) {
                var e = {
                  id: d.indexer.removeNodeTree(b),
                  pa: c,
                  pr: d.getIDForNode(f),
                  nx: d.getIDForNode(g)
                };
                e.id && B.push(e)
              });
              if (0 === l.length && 0 === B.length) return !1;
              this.addChanges.apply(this, [h, "a"].concat(B));
              this.addChanges.apply(this, [h, "b"].concat(l))
            };
            e.processAttributesChanges = function (a, b, c, e) {
              var h, d = a.meta;
              a = d.name;
              c = d.oldValue;
              d = d.newValue;
              var g = null === d || d === w;
              this.addChanges(e, "c", {
                id: b,
                at: (h = {}, h[a] = {
                  n: d,
                  o: c,
                  r: g
                }, h)
              })
            };
            e.processContentChanges = function (a, b, c, e) {
              this.addChanges(e,
                "d", {
                  id: b,
                  ct: {
                    n: a.meta.newValue,
                    o: a.meta.oldValue
                  }
                })
            };
            e.getIDForNode = function (a) {
              if (a) {
                var b = this.indexer.getNodeId(a);
                if (null != b) return b;
                this.indexer.reindexNodeTree(a);
                return this.indexer.getNodeId(a)
              }
            };
            l()(c, [{
              key: "changesObject",
              get: function () {
                return {
                  a: [],
                  b: [],
                  c: [],
                  d: []
                }
              }
            }, {
              key: "html",
              get: function () {
                return this.originalHTML
              }
            }]);
            return c
          }(d.a);
          b.a = d
        }).call(this, c(7)["default"])
      },
      function (a, b, c) {
        (function (a, f, l) {
          var d = c(6),
            n = c.n(d);
          d = c(17);
          var r = c.n(d);
          d = c(1);
          var u = c.n(d),
            p = c(11);
          d = function (b) {
            function c(a,
              c) {
              var e = b.call(this) || this;
              u()(n()(e), "eventsList", ["mutation"]);
              e.recorder = c;
              e.paused = !0;
              e.element = a;
              e.document = a.ownerDocument;
              e.observer = null;
              e.initMutationObserver();
              return e
            }
            r()(c, b);
            var h = c.prototype;
            h.start = function () {
              this.observer && this.observer.observe(this.element, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0,
                attributeOldValue: !0,
                characterDataOldValue: !0
              })
            };
            h.stop = function () {
              this.observer && this.observer.disconnect()
            };
            h.initMutationObserver = function () {
              var b = this,
                c = this.document.defaultView.MutationObserver;
              c ? this.observer = new c(function () {
                try {
                  for (var a = arguments.length, c = Array(a), e = 0; e < a; e++) c[e] = arguments[e];
                  b.processMutations.apply(b, c)
                } catch (Sa) {}
              }) : a.warn("Can't access MutationObserver of a window", m)
            };
            h.processMutations = function (a) {
              var b = this;
              a = f.toArray(a);
              var c = {
                added: new l,
                removed: new l
              };
              a = f.reduceRight(a, function (a, e) {
                var h = e.type,
                  d = e.target,
                  g = b.collectSummary(h, d, c, e);
                null != g && a.unshift({
                  target: d,
                  type: h,
                  meta: g,
                  nextSibling: e.nextSibling,
                  previousSibling: e.previousSibling
                });
                return a
              }, []);
              0 < a.length &&
                this.emit("mutation", {
                  summary: a,
                  stamp: this.recorder.stamp
                });
              c.added.clear();
              c.removed.clear()
            };
            h.collectSummary = function (a, b, c, h) {
              switch (a) {
                case "childList":
                  b = f.reduce(h.addedNodes, function (a, b) {
                    !1 === c.added.has(b) && (a.push(b), p.c.walk(b, function (a) {
                      c.removed.has(a) && c.removed["delete"](a);
                      return c.added.add(a)
                    }));
                    return a
                  }, []);
                  h = f.reduce(h.removedNodes, function (a, b) {
                    !1 === c.removed.has(b) && (a.push(b), p.c.walk(b, function (a) {
                      return c.removed.add(a)
                    }));
                    return a
                  }, []);
                  if (0 < b.length || 0 < h.length) return {
                    addedNodes: b,
                    removedNodes: h
                  };
                  break;
                case "attributes":
                  a = h.attributeName;
                  h = h.oldValue;
                  var e = b.getAttribute(a);
                  if (h !== e) return {
                    name: a,
                    oldValue: p.c.normalizeAttributeValue(b, a, h),
                    newValue: p.c.normalizeAttributeValue(b, a, e)
                  };
                  break;
                case "characterData":
                  if (h = h.oldValue, b = b.textContent, b !== h) return {
                    oldValue: h,
                    newValue: b
                  }
              }
            };
            return c
          }(c(15).a);
          b.a = d
        }).call(this, c(4)["default"], c(7)["default"], c(8)["default"])
      },
      function (a, b, c) {
        (function (a) {
          var d = c(17),
            l = c.n(d);
          d = function (b) {
            function c(c) {
              void 0 === c && (c = []);
              var d = b.call(this) ||
                this;
              a.fastIterate(c, function (a, b) {
                d.use(b)
              });
              return d
            }
            l()(c, b);
            var d = c.prototype;
            d.main = function (a, b) {
              "function" === typeof b && b()
            };
            d.send = function (a) {
              this.run(a, this.main.bind(this))
            };
            return c
          }(c(34).a);
          b.a = d
        }).call(this, c(7)["default"])
      },
      function (a, b, c) {
        a = c(1);
        var d = c.n(a),
          f = c(3);
        c = function () {
          function a(a) {
            var b = this;
            d()(this, "_options", {
              checkOnLoad: !1,
              resetOnEnd: !1,
              loopCheckTime: 50,
              loopMaxNumber: 5,
              baitClass: "adsbygoogle yap-reset ya_partner",
              baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
              debug: !1
            });
            d()(this, "_var", {
              version: "3.2.1",
              bait: null,
              checking: !1,
              loop: null,
              loopNumber: 0,
              event: {
                detected: [],
                notDetected: []
              }
            });
            a !== w && this.setOption(a);
            a = function () {
              H(function () {
                !0 === b._options.checkOnLoad && (!0 === b._options.debug && b._log("onload-\x3eeventCallback", "A check loading is launched"), null === b._var.bait && b._creatBait(), H(function () {
                  b.check()
                }, 1))
              }, 1)
            };
            f.a.addEventListener !== w ? f.a.addEventListener("load", a, !1) : f.a.attachEvent("onload", a)
          }
          var b = a.prototype;
          b._log = function () {};
          b.setOption = function (a,
            b) {
            if (b !== w) {
              var c = a;
              a = {};
              a[c] = b
            }
            for (var d in a) this._options[d] = a[d], !0 === this._options.debug && this._log("setOption", 'The option "' + d + '" he was assigned to "' + a[d] + '"');
            return this
          };
          b._creatBait = function () {
            var a = t.createElement("div");
            a.setAttribute("class", this._options.baitClass);
            a.setAttribute("style", this._options.baitStyle);
            this._var.bait = f.a.document.body.appendChild(a);
            this._var.bait = f.a.document.body.appendChild(a);
            this._var.bait.offsetParent;
            this._var.bait.offsetHeight;
            this._var.bait.offsetLeft;
            this._var.bait.offsetTop;
            this._var.bait.offsetWidth;
            this._var.bait.clientHeight;
            this._var.bait.clientWidth;
            !0 === this._options.debug && this._log("_creatBait", "Bait has been created")
          };
          b._destroyBait = function () {
            f.a.document.body.removeChild(this._var.bait);
            this._var.bait = null;
            !0 === this._options.debug && this._log("_destroyBait", "Bait has been removed")
          };
          b.check = function (a) {
            var b = this;
            a === w && (a = !0);
            !0 === this._options.debug && this._log("check", "An audit was requested " + (!0 === a ? "with a" : "without") + " loop");
            if (!0 === this._var.checking) return !0 === this._options.debug && this._log("check", "A check was canceled because there is already an ongoing"), !1;
            this._var.checking = !0;
            null === this._var.bait && this._creatBait();
            this._var.loopNumber = 0;
            !0 === a && (this._var.loop = setInterval(function () {
              b._checkBait(a)
            }, this._options.loopCheckTime));
            H(function () {
              b._checkBait(a)
            }, 1);
            !0 === this._options.debug && this._log("check", "A check is in progress ...");
            return !0
          };
          b.checkSync = function () {
            return this._checkBait()
          };
          b._checkBait = function (a) {
            var b = !1;
            if (!f.a.document.body) return !1;
            null === this._var.bait && this._creatBait();
            if (null !== f.a.document.body.getAttribute("abp") || null === this._var.bait.offsetParent || 0 === parseInt(this._var.bait.offsetHeight, 10) || 0 === parseInt(this._var.bait.offsetLeft, 10) || 0 === parseInt(this._var.bait.offsetTop, 10) || 0 === parseInt(this._var.bait.offsetWidth, 10) || 0 === parseInt(this._var.bait.clientHeight, 10) || 0 === parseInt(this._var.bait.clientWidth, 10)) b = !0;
            if (f.a.getComputedStyle !== w) {
              var c = f.a.getComputedStyle(this._var.bait,
                null);
              !c || "none" !== c.getPropertyValue("display") && "hidden" !== c.getPropertyValue("visibility") || (b = !0)
            }!0 === this._options.debug && this._log("_checkBait", "A check (" + (this._var.loopNumber + 1) + "/" + this._options.loopMaxNumber + " ~" + (1 + this._var.loopNumber * this._options.loopCheckTime) + "ms) was conducted and detection is " + (!0 === b ? "positive" : "negative"));
            !0 === a && (this._var.loopNumber++, this._var.loopNumber >= this._options.loopMaxNumber && this._stopLoop());
            if (!0 === b) this._stopLoop(), this._destroyBait(), this.emitEvent(!0), !0 === a && (this._var.checking = !1);
            else if (null === this._var.loop || !1 === a) this._destroyBait(), this.emitEvent(!1), !0 === a && (this._var.checking = !1);
            return b
          };
          b._stopLoop = function () {
            clearInterval(this._var.loop);
            this._var.loop = null;
            this._var.loopNumber = 0;
            !0 === this._options.debug && this._log("_stopLoop", "A loop has been stopped")
          };
          b.emitEvent = function (a) {
            !0 === this._options.debug && this._log("emitEvent", "An event with a " + (!0 === a ? "positive" : "negative") + " detection was called");
            a = this._var.event[!0 === a ? "detected" :
              "notDetected"];
            for (var b in a)
              if (!0 === this._options.debug && this._log("emitEvent", "Call function " + (parseInt(b, 10) + 1) + "/" + a.length), a.hasOwnProperty(b)) a[b]();
            !0 === this._options.resetOnEnd && this.clearEvent();
            return this
          };
          b.clearEvent = function () {
            this._var.event.detected = [];
            this._var.event.notDetected = [];
            !0 === this._options.debug && this._log("clearEvent", "The event list has been cleared")
          };
          b.on = function (a, b) {
            this._var.event[!0 === a ? "detected" : "notDetected"].push(b);
            !0 === this._options.debug && this._log("on",
              'A type of event "' + (!0 === a ? "detected" : "notDetected") + '" was added');
            return this
          };
          b.onDetected = function (a) {
            return this.on(!0, a)
          };
          b.onNotDetected = function (a) {
            return this.on(!1, a)
          };
          return a
        }();
        b.a = c
      },
      function (a, b, c) {
        a = function () {
          function a(a, b) {
            void 0 === a && (a = "body");
            void 0 === b && (b = {});
            this.root = "string" === typeof a ? t.querySelector(a) : a;
            this.ctx = b;
            var c = -1 !== navigator.appVersion.indexOf("Mac") ? "macos" : "other";
            this.OS = c;
            this.modifierCodes = {
              91: "super",
              93: "super",
              224: "super",
              18: "alt",
              17: "ctrl",
              16: "shift",
              9: "tab",
              8: "backspace",
              46: "delete"
            };
            this.keyOrder = {
              "super": 1,
              ctrl: 2,
              alt: 3,
              shift: 4,
              tab: 5,
              "delete": 6,
              backspace: 6
            };
            this.singleKeys = [4, 9, 8, 32, 37, 38, 39, 40, 46];
            this.keyDict = {
              macos: {
                91: "\x26#8984;",
                93: "\x26#8984;",
                224: "\x26#8984;",
                18: "\x26#8997;",
                17: "\x26#8963;",
                16: "\x26#8679;",
                9: "\x26#8677;",
                8: "\x26#9003;",
                46: "\x26#9003;"
              },
              other: {
                91: "\x26#xff;",
                93: "\x26#xff;",
                224: "\x26#xff;",
                18: "Alt",
                17: "Ctrl",
                16: "Shift",
                9: "Tab",
                8: "Backspace",
                46: "Delete"
              },
              multi: {
                32: "SPACEBAR",
                37: "\x26larr;",
                38: "\x26uarr;",
                39: "\x26rarr;",
                40: "\x26darr;",
                13: "Enter"
              }
            };
            this.initialModifier = null;
            this.modifierPressed = 0;
            this.events = [];
            this.modifiers = {};
            this.captors = [];
            this.filters = [];
            this.keyStroke = [];
            this.holding = [];
            this.initHandler()
          }
          var b = a.prototype;
          b.onCapture = function (a) {
            "function" === typeof a && 0 > this.captors.indexOf(a) && this.captors.push(a)
          };
          b.addElementFilter = function (a) {
            "function" === typeof a && 0 > this.captors.indexOf(a) && this.filters.push(a)
          };
          b.applyFilters = function (a) {
            var b = this;
            return this.filters.reduce(function (c, d) {
              return !0 ===
                c ? c && d.call(b, a) : !1
            }, !0)
          };
          b.initHandler = function () {
            this.attachEvent("keydown", this.keydownHandler);
            this.attachEvent("keyup", this.keyupHandler)
          };
          b.getKeystroke = function (a) {
            var b = this,
              c = this.keyOrder;
            return a.map(function (a) {
              var c = a.keyCode,
                d = b.modifierCodes[a.keyCode],
                g = b.getKeySymbol(a);
              return {
                id: c,
                key: b.getKeySymbol(a),
                isMeta: !!d && /^&#/.test(g),
                modifier: d
              }
            }).sort(function (a, b) {
              return (c[a.modifier] || 100) - (c[b.modifier] || 100)
            })
          };
          b.getKeySymbol = function (a) {
            return this.keyDict[this.OS][a.keyCode] || this.keyDict.multi[a.keyCode] ||
              String.fromCharCode(a.keyCode)
          };
          b.startCapture = function (a) {
            this.initialModifier = a;
            this.pushKey(a);
            this.cancelCapture()
          };
          b.sendKeys = function (a, b) {
            var c = this;
            void 0 === b && (b = !1);
            if (1 < a.length || b) {
              var d = this.getKeystroke(a);
              this.captors.forEach(function (a) {
                return a.call(c, d, b)
              })
            }
          };
          b.endCapture = function () {
            var a = this;
            this._keyStroke = this.keyStroke.slice(0);
            clearTimeout(this._endCapture);
            this._endCapture = H(function () {
              a.sendKeys(a._keyStroke)
            })
          };
          b.pushKey = function (a) {
            !1 === this.isCaptured(a) && this.keyStroke.push(a)
          };
          b.removeKey = function (a) {
            this.keyStroke = this.keyStroke.reduce(function (b, c) {
              c.keyCode !== a.keyCode && b.push(c);
              return b
            }, [])
          };
          b.cancelCapture = function () {
            this.isModifierPressed() ? H(this.cancelCapture.bind(this), 100) : this.keyStroke.length = 0
          };
          b.reset = function () {
            var a = this;
            this._reset = H(function () {
              a.resetImmediate()
            }, 300)
          };
          b.resetImmediate = function () {
            this.modifierPressed = 0;
            this.keyStroke.length = 0;
            this.holding.length = 0;
            clearTimeout(this._endCapture)
          };
          b.cancelReset = function () {
            clearTimeout(this._reset)
          };
          b.keydownHandler =
            function (a) {
              this.applyFilters(a.target) && !1 === this.isInputWithShift(a) && !a.repeat && 0 > this.held(a.keyCode) && (this.holding.push(a.keyCode), this.isModifier(a.keyCode) && !this.isModifierPressed() ? (this.modifierPressed += 1, this.startCapture(a), this.reset()) : this.isModifierPressed() ? (this.cancelReset(), this.pushKey(a), this.endCapture()) : (this.resetImmediate(), this.pushKey(a)))
            };
          b.keyupHandler = function (a) {
            if (this.applyFilters(a.target)) {
              var b = this.isModifier(a.keyCode),
                c = this.held(a.keyCode);
              0 <= c && this.holding.splice(c,
                1);
              b && this.isModifierPressed() && (this.modifierPressed = 0, this.holding.length = 0);
              1 === this.keyStroke.length && (b = this.keyStroke[0], 0 <= this.singleKeys.indexOf(b.keyCode) && (this.sendKeys([b], !0), this.resetImmediate()));
              this.removeKey(a);
              clearTimeout(this._endCapture)
            }
          };
          b.attachEvent = function (a, b) {
            var c = this;
            if ("function" === typeof b) {
              var d = this.ctx.attachEvent(this.ctx.document, a, function (a) {
                (c.root && c.root.contains(a.target) || a.target === c.root) && c.ctx.errorLogger(function () {
                  b.call(c, a)
                })
              }, !0);
              this.events.push(function () {
                c.ctx.removeEvent(d)
              })
            }
          };
          b.held = function (a) {
            return this.holding.indexOf(a)
          };
          b.isModifier = function (a) {
            return null != this.modifierCodes[a]
          };
          b.isModifierPressed = function () {
            return 0 < this.modifierPressed
          };
          b.isInitialModifier = function (a) {
            return this.initialModifier ? this.initialModifier.keyCode === a.keyCode : !1
          };
          b.isCaptured = function (a) {
            return null != this.keyStroke.reduce(function (b, c) {
              null == b && c.keyCode === a.keyCode && (b = c);
              return b
            }, null)
          };
          b.isInputWithShift = function (a) {
            return "INPUT" === a.target.nodeName ? a.shiftKey || 32 === a.keyCode ||
              "shift" === this.modifierCodes[a.keyCode] : !1
          };
          b.destroy = function () {
            var a;
            for (this.resetImmediate(); a = this.events.pop();) a();
            this.filters.length = 0
          };
          return a
        }();
        b.a = a
      },
      function (a, b, c) {
        (function (a) {
          var d = c(1),
            l = c.n(d),
            g = c(15),
            n = c(31),
            r = c(2),
            u = c(16),
            p = c(0);
          d = "HTMLMediaElement" in m;
          var k = {},
            q = p.IterableUtils.toList(["addEventListener", "removeEventListener"]),
            h = function () {
              function b() {
                l()(this, "originalDescriptors", new a);
                l()(this, "mocked", !1);
                l()(this, "events", new g.a(["setter", "method"]));
                r.ObjectUtils.assign(k,
                  u.Tools.apiMock(HTMLMediaElement))
              }
              var c = b.prototype;
              c.descriptor = function (a, b) {
                return Object.getOwnPropertyDescriptor(a, b)
              };
              c.mock = function () {
                var a = this,
                  b = HTMLMediaElement.prototype,
                  c = this;
                p.IterableUtils.forof(k.properties, function (e) {
                  if (q.has(e)) return !0;
                  var h = a.descriptor(b, e);
                  if (h) {
                    a.originalDescriptors.set(e, h);
                    var d = r.ObjectUtils.combine(h);
                    h.get && (d.get = function () {
                      return h.get.call(this)
                    });
                    h.set && (d.set = function (a) {
                      c.setterInvoked(this, e, a);
                      return h.set.call(this, a)
                    });
                    Object.defineProperty(b,
                      e, d)
                  }
                });
                p.IterableUtils.forof(k.methods, function (e) {
                  if (q.has(e)) return !0;
                  var h = a.descriptor(b, e);
                  a.originalDescriptors.set(e, h);
                  Object.defineProperty(b, e, {
                    configurable: !0,
                    value: function () {
                      for (var a, b = arguments.length, d = Array(b), g = 0; g < b; g++) d[g] = arguments[g];
                      c.methodInvoked(this, e, d);
                      return (a = h.value).call.apply(a, [this].concat(d))
                    }
                  })
                });
                this.mocked = !0
              };
              c.remove = function () {
                this.events.off();
                var a = HTMLMediaElement.prototype;
                p.IterableUtils.forof(this.originalDescriptors, function (b, c) {
                  delete a[c];
                  Object.defineProperty(a,
                    c, b)
                });
                this.mocked = !1
              };
              c.setterInvoked = function (a, b, c) {
                var e = this;
                this.mocked && H(function () {
                  e.send(a, "setter", {
                    name: b,
                    value: c
                  })
                })
              };
              c.methodInvoked = function (a, b, c) {
                var e = this;
                this.mocked && H(function () {
                  c = c.map(function (a) {
                    return a instanceof Image ? Object(n.b)(a) : a
                  });
                  e.send(a, "method", {
                    name: b,
                    args: c
                  })
                })
              };
              c.send = function (a, b, c) {
                this.events.emit(b, r.ObjectUtils.combine(c, {
                  media: a
                }))
              };
              return b
            }();
          l()(h, "supported", d);
          b.a = h
        }).call(this, c(12)["default"])
      },
      function (a, b, c) {
        (function (a) {
          c.d(b, "a", function () {
            return d
          });
          var d = function (b, c) {
            void 0 === c && (c = "body");
            return new a(function (a) {
              null == b.querySelector(c) || t.hidden || t.msHidden || t.webkitHidden ? function u() {
                null == b.querySelector(c) || t.hidden || t.msHidden || t.webkitHidden ? H(u, 100) : a()
              }() : a()
            })
          }
        }).call(this, c(22).Promise)
      },
      function (a, b, c) {
        (function (a, f) {
          var d = c(14),
            g = c.n(d);
          d = c(6);
          var n = c.n(d);
          d = c(17);
          var r = c.n(d);
          d = c(1);
          var u = c.n(d),
            p = c(11);
          d = c(15);
          var k = c(34),
            q = c(0),
            h = c(2),
            e = c(23),
            B = c(16),
            I = c(4),
            A = "attributes namespace content parent next prev".split(" ");
          d = function (b) {
            function c(c,
              e) {
              var h = (void 0 === e ? {} : e).disabled;
              var d = void 0 === h ? !1 : h;
              h = b.call(this) || this;
              u()(n()(h), "eventsList", ["initialIndex:once:memory", "add", "remove", "node"]);
              h.disabled = d;
              h.nextID = 0;
              h.closed = !1;
              h.dom = new a;
              h.index = new a;
              h.initialDOM = new f;
              h.middleware = new k.b;
              h.document = c;
              h.quickAccess = {};
              return h
            }
            r()(c, b);
            var d = c.prototype;
            d.initialIndex = function () {
              this.fastIndex(this.document.documentElement)
            };
            d.use = function (a) {
              this.middleware.use(a)
            };
            d.initDOMCache = function () {
              this.domCache = new a(this.index)
            };
            d.writeCache =
              function (a, b, c) {
                this.domCache && this.domCache.set(a, {
                  node: b,
                  data: c
                })
              };
            d.findCache = function (a) {
              if (this.domCache) return this.domCache.get(a)
            };
            d.addQuckAccessItem = function (a, b) {
              null == this.quickAccess[a] && null == this[a] && (this.quickAccess[a] = b, Object.defineProperty(this, a, {
                get: function () {
                  return this.quickAccess[a]
                }
              }))
            };
            d.addToIndex = function (a, b, c) {
              void 0 === c && (c = null);
              if (a = this.middleware.run(a)) {
                this.emit("node", a);
                var e = a._DOMIndexerInfo;
                if (!1 === this.dom.has(a) || null == e) c = this.generateNodeID(c), e = {
                  id: c,
                  name: a.tagName || a.nodeName,
                  parent: b,
                  nativeNode: a,
                  namespace: p.c.getNamespace(a),
                  attributes: p.c.getAttributes(a),
                  content: p.c.getContent(a)
                }, this.domCache && this.writeCache(c, a, e), this.dom.set(a, e), this.index.set(c, a), a._DOMIndexerID = c, a._DOMIndexerInfo = e;
                this.emit("add", e);
                return e
              }
              I["default"].warn("Can't index undefined node")
            };
            d.clear = function (a) {
              void 0 === a && (a = !0);
              q.IterableUtils.forof(q.IterableUtils.keys(this.dom), function (a) {
                q.IterableUtils.forof(["_DOMIndexerID", "_DOMIndexerInfo"], function (b) {
                  a[b] =
                    null;
                  delete a[b]
                })
              });
              a && (this.document = null);
              this.dom.clear();
              this.index.clear()
            };
            d.dump = function () {
              return {
                dom: new a(this.dom),
                index: new a(this.index)
              }
            };
            d.dumpRestore = function (a) {
              h.ObjectUtils.assign(this, a);
              this.document.body.innerHTML = ""
            };
            d.findByID = function (a) {
              return this.find(a)
            };
            d.findByNode = function (a) {
              return this.get(a)
            };
            d.find = function (a) {
              if (null != a) {
                var b = this.index.get(a);
                return null == b && this.domCache ? (a = this.findCache(a)) && a.node : b
              }
            };
            d.findInfo = function (a) {
              return this.dom.get(this.find(a))
            };
            d.generateNodeID = function (a) {
              return null != a ? a : this.nextID++
            };
            d.get = function (a) {
              return this.dom.get(a)
            };
            d.getNodeId = function (a) {
              return (a = this.get(a)) && a.id
            };
            d.getIndexedNodeId = function (a) {
              var b = this.getNodeId(a);
              return null == b ? (this.reindexNodeTree(a), this.getNodeId(a)) : b
            };
            d.getNodesIds = function (a) {
              var b = this;
              return q.IterableUtils.toArray(a).map(function (a) {
                return {
                  id: b.getNodeId(a),
                  nodes: b.getNodesIds(a.childNodes)
                }
              })
            };
            d.reindexNodeTree = function (a, b) {
              var c = this,
                h = void 0 === b ? {} : b,
                d = h.returnAll;
              d = void 0 ===
                d ? !1 : d;
              var g = h.callback,
                f = void 0 === g ? null : g;
              h = h.parentID;
              var B = void 0 === h ? null : h;
              if (a) {
                var l = [];
                if (a.parentNode || B) f = e.FunctionUtils.toFunction(f), p.c.each(a, function (a, b) {
                  B = b.parentNode && c.getNodeId(b.parentNode) || B;
                  if (null != B) {
                    var e = c.addToIndex(b, B);
                    l.push(e);
                    f(e, b)
                  }
                });
                return d ? l : a._DOMIndexerID
              }
            };
            d.removeFromIndex = function (a) {
              var b = this.getNodeId(a);
              this.dom["delete"](a);
              this.index["delete"](b);
              q.IterableUtils.toArray(a.childNodes).map(this.removeFromIndex.bind(this));
              this.emit("remove", a);
              return b
            };
            d.replaceBody = function (a) {
              this.removeNodeTree(this.BODY.id);
              var b = this.BODY.nativeNode;
              delete b._DOMIndexerInfo;
              delete b._DOMIndexerID;
              this.addToIndex(b, this.HTML.id, a)
            };
            d.removeNodeTree = function (a, b) {
              var c = this;
              void 0 === b && (b = !1);
              if (a) {
                var e = [],
                  h = this.getNodeId(a);
                p.c.each(a, function (a, b) {
                  var h = c.getNodeId(b);
                  c.dom["delete"](b);
                  c.index["delete"](h);
                  c.emit("remove", b);
                  e.push(h)
                });
                return b ? e : h
              }
            };
            d.fastIndex = function (a) {
              if (!this.disabled) {
                var b = this.addToIndex.bind(this),
                  c = this.initialDOM.add.bind(this.initialDOM);
                p.c.each(a, function (a, e) {
                  var d = b(e, e.parentNode && e.parentNode._DOMIndexerID);
                  c(h.ObjectUtils.copyObject(d))
                });
                this.initialDOM.forEach(function (a) {
                  var b = a.nativeNode,
                    c = b.previousSibling;
                  b = b.nextSibling;
                  c && c._DOMIndexerID && (a.prev = c._DOMIndexerID);
                  b && b._DOMIndexerID && (a.next = b._DOMIndexerID)
                })
              }
            };
            d.isIndexed = function (a) {
              return this.dom.has(a)
            };
            d.showMissingNodes = function (a) {
              var b = this;
              void 0 === a && (a = !1);
              a && B.Tools.measure("Show missing nodes", function () {
                var a = p.c.all(b.document.documentElement);
                q.IterableUtils.fastIterate(a,
                  function (a, c) {
                    !1 === b.dom.has(c) && I["default"].log("Missing node", c)
                  });
                I["default"].log("Index diff: [DOM: " + a.length + "] [INDEX: " + b.dom.size + "] [DIFF: " + (b.dom.size - a.length) + "]")
              })
            };
            d.getCurrentHtml = function () {
              var a = q.IterableUtils.map(this.dom, function (a) {
                return a[1]
              });
              return c.simplify(a)
            };
            d.getDocument = function () {
              return this.document
            };
            d.setDocument = function (a) {
              this.document = a
            };
            g()(c, [{
                key: "HTML",
                get: function () {
                  return this.document.documentElement._DOMIndexerInfo
                }
              }, {
                key: "BODY",
                get: function () {
                  return this.document.body._DOMIndexerInfo
                }
              },
              {
                key: "html",
                get: function () {
                  return c.simplify(this.initialDOM)
                }
              }
            ]);
            return c
          }(d.a);
          u()(d, "simplify", function (a) {
            return q.IterableUtils.map(a, function (a) {
              var b = {
                id: a.id,
                name: a.name.toLowerCase()
              };
              q.IterableUtils.forof(A, function (c) {
                null != a[c] && (b[c] = a[c])
              });
              return b
            })
          });
          u()(d, "toNodesTree", function (a) {
            var b = {};
            a = q.IterableUtils.toArray(a);
            q.IterableUtils.forof(a, function (a) {
              if (null == b[a.id]) {
                var c = h.ObjectUtils.combine(a);
                b[a.id] = c;
                null != a.parent && (a = b[a.parent]) && (a.children = a.children || [], a.children.push(c))
              }
            });
            return b[0]
          });
          b.a = d
        }).call(this, c(12)["default"], c(8)["default"])
      },
      function (a, b, c) {
        (function (a) {
          var d = c(5),
            l = c.n(d);
          d = c(14);
          var g = c.n(d);
          d = c(1);
          var n = c.n(d),
            r = c(4),
            u = c(10);
          d = function () {
            function b(b) {
              void 0 === b && (b = m);
              n()(this, "_cancelMainHandler", null);
              n()(this, "subscriptions", {});
              this.window = a.isIframe(b) ? b.parent : b;
              b.Ya || (b.Ya = {});
              b.Ya._metrika || (b.Ya._metrika = {});
              if (b.Ya._metrika._m) return b.Ya._metrika._m;
              this.targetWindow = b;
              b.Ya._metrika._m = this;
              b = this.targetWindow.Ya._metrika;
              var c = this.targetWindow.Ya._metrika.fi ||
                "";
              c = /^ym-/.test(c) ? c : "ym-" + a.guid();
              b.fi = c;
              this.identifier = this.targetWindow.Ya._metrika.fi;
              this._handleMessages();
              return this
            }
            var c = b.prototype;
            c.send = function (a, b) {
              var c = this,
                h = void 0 === b ? {} : b,
                d = h.data,
                g = h.onResponse,
                f = h.onTimeout,
                l = h.receiver,
                q = h.awaitResponse,
                n = h.timeoutTime,
                u = null,
                p = !1,
                k = !1,
                C, m = [],
                t = Date.now();
              "function" === typeof g && (p = !0, u = a + "." + this.timestamp, this.listenOnce(function (a) {
                var b = a.data,
                  e = b._ym_cancel_response,
                  h = b.data;
                if (b.type === u) e ? r["default"].warn("Seems like you forgot to call `answer` in a message handler. This message requires response.") :
                  (k = !0, g(h, {
                    origin: a.origin,
                    location: c.targetWindow.location.href,
                    identifier: c.identifier
                  }), clearTimeout(C));
                else return !1
              }, this.targetWindow));
              u && m.push("response:" + u);
              (function wa() {
                c._sendMessage({
                  data: d,
                  type: a,
                  target: c._getReceiver(l),
                  flags: m
                });
                if (q && p) {
                  var b = n;
                  void 0 === b && (b = 3E4);
                  b = Date.now() - t >= b;
                  !1 === k && (b ? "function" === typeof f && f() : C = H(wa, 100))
                }
              })()
            };
            c.subscribe = function (a, b) {
              var c = this._createSubscriptionsGroup(a);
              if (!1 === this._isSubscribed(c, b)) c.push(b);
              else throw Error("This callback has already been subscribed to " +
                a);
            };
            c.unsubscribe = function (b, c) {
              var e = this._getSubcribers(b);
              !0 === this._isSubscribed(e, c) && a.removeFromArray(e, c)
            };
            c.unsubscribeAll = function (a) {
              this._getSubcribers(a).splice(0)
            };
            c.listen = function (a) {
              var b = this;
              this._attachEvent("message", a);
              return function () {
                return b._removeEvent("message", a)
              }
            };
            c.listenOnce = function (a, b) {
              var c = this;
              b = b || this.window;
              var h = function (b) {
                  !1 !== a(b) && d()
                },
                d = function () {
                  c._removeEvent("message", h, b)
                };
              this._attachEvent("message", h, b);
              return d
            };
            c._attachEvent = function (a, b,
              c) {
              var e = this;
              (c || this.window).addEventListener(a, b);
              return function () {
                return e._removeEvent(a, b)
              }
            };
            c._createSubscriptionsGroup = function (a) {
              return this._getSubcribers(a)
            };
            c._isSubscribed = function (a, b) {
              return b && 0 <= a.indexOf(b)
            };
            c._removeEvent = function (a, b, c) {
              (c || this.window).removeEventListener(a, b)
            };
            c._getSubcribers = function (a) {
              this.subscriptions[a] || (this.subscriptions[a] = []);
              return this.subscriptions[a]
            };
            c._sendMessage = function (a) {
              var b = void 0 === a ? {} : a;
              a = b.target;
              var c = b.flags;
              c = void 0 === c ? [] :
                c;
              b = {
                _ym_messenger: !0,
                _ym_identifier: this.identifier,
                type: b.type,
                data: b.data
              };
              if (c && 0 < c.length)
                for (var d = 0, g = c.length; d < g; d++) {
                  var f = c[d].split(":");
                  b["_ym_" + f[0]] = f[1] || !0
                }
              this._postMessage(b, a)
            };
            c._postMessage = function (a, b) {
              (b || this.window).postMessage(a, "*")
            };
            c._getReceiver = function (a) {
              if (null != a) {
                if (a.postMessage) return a;
                if (a.contentWindow) return a.contentWindow
              }
            };
            c._handleMessages = function () {
              var a = this;
              if (null == this._cancelMainHandler) {
                var b = this._attachEvent("message", function (b) {
                  var c = b.data || {},
                    e = c._ym_response,
                    d = c._ym_identifier,
                    h = c.data,
                    g = c.type;
                  if (!0 === c._ym_messenger && g && !/\.([0-9]+)$/.test(g)) {
                    c = a._getSubcribers(g) || [];
                    var f = a._findIframe(b.source, d);
                    if (null === f) r["default"].warn("Cannot find iframe with id " + d);
                    else {
                      var q = {
                        id: d,
                        sender: f,
                        data: h,
                        type: g
                      };
                      b = 0;
                      for (d = c.length; b < d; b++) {
                        var n = c[b];
                        e ? function () {
                          var b = {
                              type: e,
                              target: f.contentWindow
                            },
                            c = 2 === n.length,
                            d = null,
                            h = function (e) {
                              clearTimeout(d);
                              e = c ? l()({}, b, {
                                data: e
                              }) : l()({}, b, {
                                flags: ["cancel_response"]
                              });
                              a._sendMessage(e)
                            };
                          c ? (d = H(function () {
                            r["default"].warn("Response has been canceled because `answer` was never called");
                            c = !1;
                            h()
                          }, 2E3), n(q, h)) : (n(q), h())
                        }() : n(q)
                      }
                    }
                  }
                }, this.targetWindow);
                this._cancelMainHandler = function () {
                  b();
                  a._cancelMainHandler = null
                }
              }
            };
            c._findIframe = function (b, c) {
              var e = this,
                d = [].slice.call(t.querySelectorAll("iframe"));
              return a.find(d, function (a) {
                if (a.contentWindow === b) return !0;
                if (u.DOMUtils.isBlankOrSameOriginIframe(a, e.win)) try {
                  return a.contentWindow.Ya._metrika.fi === c
                } catch (A) {}
                return !1
              }) || null
            };
            g()(b, [{
              key: "timestamp",
              get: function () {
                return a.now()
              }
            }]);
            return b
          }();
          b.a = d
        }).call(this, c(7)["default"])
      },
      function (a, b, c) {
        (function (a) {
          var d = c(5),
            l = c.n(d),
            g = c(4);
          d = function () {
            function b(a, b, c) {
              void 0 === a && (a = m);
              void 0 === b && (b = t);
              Object.defineProperty(this, "_indexer", {
                value: c
              });
              this.window = a;
              this.document = b;
              this.indexer = this._indexer;
              this.selection = this.window.getSelection()
            }
            var c = b.prototype;
            c.getPageSelection = function () {
              var a = this.getSelection();
              if (a) {
                var b = this.indexer.getNodeId(a.startNode),
                  c = this.indexer.getNodeId(a.endNode);
                this.restoreIndexer();
                return l()({}, a, {
                  startNode: b,
                  endNode: c
                })
              }
            };
            c.restorePageSelection =
              function (b) {
                if (b) {
                  var c = this.indexer.find(b.startNode),
                    d = this.indexer.find(b.endNode);
                  this.restoreIndexer();
                  a.isDOMNode(c) && a.isDOMNode(d) && this.restoreSelection(l()({}, b, {
                    startNode: c,
                    endNode: d
                  }))
                }
              };
            c.getSelection = function () {
              if (0 < this.selection.rangeCount) {
                var a = this.selection.getRangeAt(0) || this.document.createRange();
                return {
                  start: a.startOffset,
                  end: a.endOffset,
                  startNode: a.startContainer,
                  endNode: a.endContainer
                }
              }
            };
            c.restoreSelection = function (a) {
              var b = a.start,
                c = a.end,
                d = a.startNode;
              a = a.endNode;
              try {
                var h =
                  d.ownerDocument,
                  e = h.defaultView.getSelection(),
                  f = h.createRange();
                f.setStart(d, b);
                f.setEnd(a, c);
                e.removeAllRanges();
                e.addRange(f)
              } catch (I) {
                g["default"].log({
                  start: {
                    startNode: d,
                    start: b
                  },
                  end: {
                    endNode: a,
                    end: c
                  }
                }, I)
              }
            };
            c.getSelectionFor = function (a) {
              if (/text|search|password|tel|url/.test(a.type)) return {
                start: a.selectionStart,
                end: a.selectionEnd
              }
            };
            c.restoreSelectionFor = function (a, b) {
              b && null != b.start && null != b.end && /text|search|password|tel|url/.test(a.type) && (a.selectionStart = b.start, a.selectionEnd = b.end)
            };
            c.clear = function () {
              var a = this.document.createRange();
              a.setStart(this.document.body, 0);
              a.setEnd(this.document.body, 0);
              this.selection.removeAllRanges();
              this.selection.addRange(a)
            };
            c.setIndexer = function (a) {
              a !== this.indexer && (this.indexer = a)
            };
            c.restoreIndexer = function () {
              this.indexer = this._indexer
            };
            return b
          }();
          b.a = d
        }).call(this, c(7)["default"])
      },
      function (a, b, c) {
        (function (a) {
          var d = c(3),
            l = c(4),
            g = {
              doNotTrack: function () {
                return !0 !== navigator.doNotTrack
              },
              localStorage: function () {
                try {
                  return d.a.localStorage.setItem("test",
                    "value"), d.a.localStorage.removeItem("test"), !0
                } catch (n) {
                  return !1
                }
              },
              defineProperty: function () {
                try {
                  return Object.defineProperty({}, "test", {
                    value: 123
                  }), !0
                } catch (n) {
                  return !1
                }
              }
            };
          b.a = function () {
            a.forin(g, function (a) {
              if (!g[a]()) return l["default"].log("Feature not supported: " + a), !1
            });
            return !0
          }()
        }).call(this, c(7)["default"])
      },
      function (a, b, c) {
        (function (a) {
          var d = c(33),
            l = c.n(d);
          d = c(12);
          var g = c(0),
            n = c(18),
            r = c(2),
            u = {
              items: {
                extnameFinder: /\.(css|png|gif|svg|jp[e]?g|mp4|ogv|webm|webp|mp3|ico|woff|ttf|eot)/gi,
                urlPartsFinder: /([?./]*)/gi,
                anchorFinder: /^(?!#).*([#]+)/g,
                cssURLFinder: /url\(['"]?((?!#|data|blob))([^()'"]+)['"]?\)/g,
                URLImportFinder: /@import ['"]((?!#|data|blob)([^()'"]+))['"]/g,
                protocolMissing: /^(?!http[s]?).*/,
                dataurlTest: /^(data|blob):/,
                selectorTest: /^#(.*)/,
                protocolIncomplete: /^(http[s]?)?(:?\/\/)/,
                resourceFinder: /{{RESOURCE_URL}}/,
                proxiedURL: /proxy([^?]*)\?url=/i,
                relativePath: /^(?!\\)/
              },
              get: function (a) {
                return this.items[a]
              },
              reset: function (a) {
                this.items[a].lastIndex = 0
              },
              test: function (a, b) {
                var c =
                  this.get(a);
                this.reset(a);
                return c.test(b)
              },
              resetMultiple: function () {
                for (var a, b = this, c = arguments.length, e = Array(c), d = 0; d < c; d++) e[d] = arguments[d];
                e = (a = []).concat.apply(a, e);
                g.IterableUtils.fastIterate(e, function (a, c) {
                  return b.reset(c)
                })
              },
              resetAll: function () {
                this.resetMultiple(g.IterableUtils.keys(this.items))
              }
            },
            p = {
              location: null,
              proxy: null,
              base: null,
              window: "object" === typeof m && m || null,
              document: "object" === typeof t && t || null
            },
            k = new d["default"],
            q = new d["default"],
            h = function (a) {
              return "string" === typeof a ?
                URL.parse ? URL.parse(a) : new URL(a) : a
            },
            e = function (a) {
              return q.get(a) || a
            },
            B = function () {
              var a = h(function () {
                if (p.base) return p.base;
                if (p.document) {
                  var a = p.document.querySelector("base[href]");
                  return a ? a.href : p.location
                }
                return p.location
              }());
              return p.location = {
                host: a.host,
                protocol: a.protocol,
                path: (a.pathname || a.path || "").replace(/[^/]*$/, "")
              }
            },
            I = [];
          d = Object.defineProperties({
            regexp: u,
            patchCSS: function (a, b) {
              var c = this,
                e = (void 0 === b ? {} : b).location,
                d = void 0 === e ? null : e,
                h = {
                  cssURLFinder: function (a) {
                    return "url('" +
                      a + "')"
                  },
                  URLImportFinder: function (a) {
                    return '@import "' + a + '"'
                  }
                };
              ["cssURLFinder", "URLImportFinder"].forEach(function (a) {
                return u.reset(a)
              });
              return ["cssURLFinder", "URLImportFinder"].reduce(function (a, b) {
                return c.patchURLS(a, u.get(b), d, h[b])
              }, a)
            },
            patchURLS: function (a, b, c, e) {
              var d = this,
                h = a,
                g = function (a) {
                  return "function" === typeof a ? a : function (a) {
                    return a
                  }
                }(e);
              "string" === typeof a && a.match(b) && (h = a.replace(b, function () {
                var a = d.patchURL(2 >= arguments.length ? w : arguments[2], {
                  location: c
                });
                return g(a)
              }));
              return h
            },
            patchURL: function (a, b) {
              var c = this,
                e = void 0 === b ? {} : b,
                d = e.location,
                h = void 0 === d ? null : d;
              e = e.split;
              var g = void 0 === e ? !1 : e;
              return "string" === typeof a ? function (a) {
                return g ? a.split(",") : [a]
              }(a).reduce(function (a, b) {
                var e = b.trim().split(" "),
                  d = e[0];
                e = e.slice(1);
                d = c.applyPatch(d, h);
                a.push([d].concat(e).join(" "));
                return a
              }, []).join(", ") : a
            },
            applyPatch: function (b, c) {
              var e = u.test("relativePath", b),
                d = this.getRelativeLocation(c),
                h = d.host,
                g = d.protocol;
              d = d.path || d.pathname || "";
              e = e ? this.resolvePath(b, d) : b;
              if (0 <= I.indexOf(e)) return e;
              if (q.has(e)) return k.get(e);
              d = b;
              u.resetAll();
              if (u.test("dataurlTest", b) || u.test("selectorTest", b)) return b;
              u.test("protocolMissing", b) && (d = u.test("protocolIncomplete", b) ? b.replace(u.get("protocolIncomplete"), g + "//") : g + "//" + (h + "/" + e).replace(/\/\/+/, "/"));
              q.set(b, d);
              /http[s]?/.test(d) ? (h = d, u.test("proxiedURL", h) ? d = h : (p.isWhitelisted ? (g = p.isWhitelisted(h)) && a.warn("Whitelisted: " + h) : g = !1, d = g ? h : (g = p.proxy) && u.test("resourceFinder", g) ? g.replace(u.get("resourceFinder"), h.replace(/&/g, "%26")) : h), I.push(d),
                k.set(b, d), h = d) : (I.push(b), k.set(b, d), h = b);
              return p.noEncode ? decodeURIComponent(h) : h
            },
            getRelativeLocation: function (a) {
              var b = u.test("relativePath", a);
              return a ? b ? (b = n.StringUtils.parseURL(e(a)), a = this.resolvePath(a, this.location.protocol + "//" + this.location.host + (this.location.path || this.location.pathname || "")), b || r.ObjectUtils.assign({}, this.location, {
                path: a
              })) : r.ObjectUtils.assign({}, this.location, {
                path: a
              }) : this.location
            },
            resolvePath: function (a, b) {
              if (/^\//.test(a) || /^https?:\/\//.test(a)) return a;
              for (var c = (b.replace(/\/[^\/]*$/, "") + "/" + a).split("/"), e = [], d = 0, h = c.length; d < h; d++) {
                var g = c[d];
                "" === g ? e.length = 0 : "." !== g && (".." === g ? 0 < e.length && --e.length : e.push(g))
              }
              e.unshift("");
              return e.join("/")
            },
            configure: function (a) {
              void 0 === a && (a = {});
              var b = a;
              a = b.proxyWhitelist;
              b = l()(b, ["proxyWhitelist"]);
              p = r.ObjectUtils.assign({}, p, b);
              if (a) {
                a = a.map(function (a) {
                  return a.replace("*", "(.*)")
                }).join("|");
                var c = new RegExp("" + a, "ig");
                p.isWhitelisted = function (a) {
                  c.lastIndex = 0;
                  return c.test(a)
                }
              }
            },
            isURLLike: function (a) {
              u.resetMultiple(["dataurlTest",
                "selectorTest", "extnameFinder", "protocolMissing"
              ]);
              return u.test("dataurlTest", a) || u.test("selectorTest", a) ? !1 : u.test("extnameFinder", a) && u.test("protocolMissing", a)
            },
            clearCache: function () {
              k.clear();
              q.clear()
            },
            isProxiedURL: function (a) {
              return a ? u.test("proxiedURL", a) : !1
            }
          }, {
            location: {
              get: function () {
                return B()
              },
              set: function (a) {
                return (p = r.ObjectUtils.assign({}, p, {
                  location: a
                })).location
              },
              configurable: !0,
              enumerable: !0
            },
            config: {
              get: function () {
                return p
              },
              configurable: !0,
              enumerable: !0
            }
          });
          b.a = d
        }).call(this,
          c(4)["default"])
      },
      function (a, b, c) {
        function d() {
          try {
            if (!m.sessionStorage) return null;
            var a = m.sessionStorage.getItem(l),
              b = !1;
            try {
              var c = m.opener ? m.opener.sessionStorage : null;
              b = !!c && a === c.getItem(l)
            } catch (u) {
              b = !0
            }
            if (!a || b) a = f.Tools.guid(), m.sessionStorage.setItem(l, a);
            return a
          } catch (u) {
            return null
          }
        }
        c.d(b, "a", function () {
          return d
        });
        var f = c(16),
          l = "__vw_tab_guid"
      },
      function (a, b, c) {
        a = c(43);
        var d = c(32),
          f = c(44),
          l = c(45),
          g = c(46),
          n = c(47),
          r = c(48),
          u = c(49),
          p = c(50);
        c = c(51);
        b.a = {
          input: a.a,
          keystrokes: function () {
            return {
              create: function (a) {
                a.keyCapture.onCapture(function (b) {
                  "OBJECT" ===
                  t.activeElement.nodeName && /flash/.test(t.getAttribute("type")) || (b = a._getEventObject("keystroke", -1, b), a._publishActions(b))
                })
              },
              destroy: function (a) {
                a.keyCapture.destroy()
              }
            }
          },
          media: function () {
            return {
              create: function (a) {
                var b = new a.MediaProxy,
                  c = a._universalHandler(function (b) {
                    b = a._getEventObject("mediaProperty", b.media, {
                      property: b.name,
                      value: b.value
                    });
                    a._publishActions(b)
                  }),
                  e = a._universalHandler(function (b) {
                    b = a._getEventObject("mediaMethod", b.media, {
                      method: b.name,
                      args: b.args
                    });
                    a._publishActions(b)
                  });
                b.events.on("setter", c);
                b.events.on("method", e);
                b.mock()
              },
              destroy: function (a) {
                a.mediaProxy.remove()
              }
            }
          },
          mutations: function () {
            var a = new d.a,
              b = 0,
              c = 0,
              e = function (e) {
                var d = this,
                  h = e.stamp,
                  g = e.changes;
                a.push(function () {
                  h !== b && (c = 0);
                  b = h;
                  d._publishMutations(d._getMutationObject(g, h, c++))
                })
              };
            return {
              create: function (a) {
                a.summary.on("mutation", a._universalHandler(e))
              },
              destroy: function (b) {
                b.summary.off("mutation");
                a.start(!0)
              }
            }
          },
          mouse: f.a,
          focus: l.a,
          resize: function () {
            var a, b = function (a, b) {
              var c = 0,
                e = function () {
                  var d =
                    b.getValue.call(this, a);
                  d && (0 !== d.stamp ? this._publishActions(d) : 3 > c && (H(e, 300), c += 1))
                }.bind(this);
              e()
            };
            return {
              getValue: function () {
                var a = this.viewport.getSize(1),
                  b = a.width;
                a = a.height;
                var c = this.viewport.scrollingElement;
                if (0 < b && 0 < a) return this._getEventObject("resize", 0, {
                  width: b,
                  height: a,
                  pageWidth: c.scrollWidth,
                  pageHeight: c.scrollHeight
                })
              },
              create: function (c) {
                a = c.attachEvent(c.window, "resize", c._universalHandler(b, {
                  extra: [this]
                }), {
                  passive: !0
                })
              },
              destroy: function (b) {
                b.removeEvent(a)
              }
            }
          },
          deviceRotation: g.a,
          scroll: n.a,
          selection: r.a,
          touch: u.a,
          zoom: p.a,
          window: c.a,
          srcset: function () {
            return {
              create: function (a) {
                this.onImageLoad = this.onImageLoad.bind(this);
                a.document.addEventListener("load", this.onImageLoad, !0);
                this.recorder = a
              },
              onImageLoad: function (a) {
                var b = this;
                this.recorder.errorLogger(function () {
                  var c = a.target;
                  "IMG" === (c.tagName || c.nodeName) && c.getAttribute("srcset") && b.recorder.summary.collectMutations({
                    summary: [{
                      meta: {
                        name: "src",
                        oldValue: null,
                        newValue: c.currentSrc
                      },
                      target: c,
                      type: "attributes"
                    }],
                    stamp: b.recorder.stamp
                  })
                })
              },
              destroy: function (a) {
                a.document.removeEventListener("load", this.onImageLoad)
              }
            }
          }
        }
      },
      function (a, b, c) {
        a = c(13);
        var d = c(12),
          f = c(10),
          l = {
            rand: function (a, b) {
              return Math.round(Math.random() * (b - a)) + a
            },
            charFromRange: function (a, b) {
              var c = this.rand(a, b);
              return String.fromCharCode(c)
            },
            isLetter: function (a) {
              return /[\w\u0410-\u042f\u0430-\u044f]/.test(a)
            },
            isNumber: function (a) {
              return /[0-9]/.test(a)
            },
            isUpperCase: function (a) {
              return a === a.toUpperCase()
            },
            randomizeString: function (a) {
              var b = this;
              return (a || "").split("").map(function (a) {
                return b.isNumber(a) ?
                  b.rand(0, 9) : b.isLetter(a) ? b.isUpperCase(a) ? b.charFromRange(65, 90) : b.charFromRange(97, 122) : a
              }).join("")
            },
            getNodeBounds: function (a) {
              if (a.getBoundingClientRect) return a.getBoundingClientRect();
              var b = a.ownerDocument.createRange();
              b.selectNode(a);
              a = b.getBoundingClientRect();
              b.detach();
              return a
            }
          },
          g = a.a.DOMIndexer.HIDABLE_NODES,
          n = new d.KeyValue,
          r = function (a, b) {
            var c = a.ownerDocument.createElement(b),
              d = l.getNodeBounds(a);
            c.setAttribute("ym-node-type", a.nodeName.toLowerCase());
            a.attributes && (f.DOMUtils.copyAttributes(a,
              c), c.className = a.className);
            c.className += " ym-hidden-content";
            return {
              placeholder: c,
              bounds: d
            }
          };
        b.a = function (a) {
          if (0 <= g.indexOf(a.nodeName)) {
            var b = f.DOMUtils.isHiddenContent(a);
            if (n.has(a)) return n.get(a);
            if (b) {
              var c = a.nodeName;
              b = a.textContent;
              if ("#text" === c && b && "" === b.trim()) return a;
              b = function (a) {
                switch (c) {
                  case "#text":
                    var b = r(a, "span").placeholder;
                    b.setAttribute("ym-text-content", l.randomizeString(a.textContent || ""));
                    return b;
                  case "IMG":
                    return b = r(a, "img"), a = b.placeholder, b = b.bounds, a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII\x3d",
                      a.width = b.width, a.height = b.height, a;
                  case "TEXTAREA":
                  case "INPUT":
                    return b = r(a, "input"), a = b.placeholder, b = b.bounds, a.style.width = b.width + "px", a.style.height = b.height + "px", a;
                  default:
                    return b = r(a, "span"), a = b.placeholder, b = b.bounds, a.style.width = b.width + "px", a.style.height = b.height + "px", a
                }
              }(a);
              n.set(a, b);
              return b
            }
          }
          return a
        }
      },
      function (a, b, c) {
        c.r(b);
        (function (a, f, l) {
          c.d(b, "default", function () {
            return la
          });
          var d = c(40),
            n = c.n(d);
          d = c(24);
          var r = c.n(d);
          d = c(35);
          var k = c.n(d);
          d = c(5);
          var p = c.n(d);
          d = c(14);
          var C = c.n(d);
          d = c(6);
          var q = c.n(d);
          d = c(17);
          var h = c.n(d);
          d = c(1);
          var e = c.n(d),
            B = c(16),
            I = c(23),
            A = c(0),
            ca = c(13),
            v = c(31),
            y = c(65),
            z = c(52),
            x = c(54),
            G = c(21);
          d = c(55);
          var D = c(56),
            E = c(57),
            F = c(58),
            K = c(59),
            J = c(15),
            M = c(27),
            N = c(60),
            oa = c(61),
            Ga = c(62),
            T = c(20),
            P = c(63),
            ha = c(11),
            ja = c(64),
            V = c(30),
            O = c(10),
            qa = c(38),
            aa = c(7),
            Q = c(2),
            X = c(4),
            U = c(28),
            ya = c(66),
            S = new d.a({
              checkOnLoad: !1,
              resetOnEnd: !0
            }),
            W = {},
            R = {
              counterId: null,
              maxSize: U.NumberUtils.size(50, "mb"),
              maxDuration: 864E5,
              compression: !1,
              isEU: !1,
              recording: {
                keysMode: "explicit"
              }
            },
            Ma = {
              disableIndex: !1
            },
            fa = !0 === Ga.a,
            Z = aa.IS_INCOGNITO || aa.DO_NOT_TRACK || "disable" === V.BrowserUtils.meta("webvisor"),
            na = m !== m.top;
          m.__YM_WV_RECORDABLE__ === w && Object.defineProperty(m, "__YM_WV_RECORDABLE__", {
            value: !0
          });
          var la = function (b) {
              function c(c, d) {
                void 0 === c && (c = {});
                void 0 === d && (d = {});
                var h = b.call(this) || this;
                e()(q()(h), "middlewares", []);
                e()(q()(h), "options", Q.ObjectUtils.assign({}, R));
                e()(q()(h), "initOptions", Q.ObjectUtils.assign({}, Ma));
                e()(q()(h), "iframes", []);
                e()(q()(h), "waitingBody", null);
                e()(q()(h), "ableToStart", !1);
                e()(q()(h), "_identifier", B.Tools.guid());
                e()(q()(h), "offsets", {
                  left: 0,
                  top: 0
                });
                e()(q()(h), "fatalError", !1);
                e()(q()(h), "captors", new a);
                e()(q()(h), "prevMutationStamp", null);
                e()(q()(h), "prevMutationOrderingID", 0);
                e()(q()(h), "inited", !1);
                e()(q()(h), "startOptions", null);
                e()(q()(h), "precache", []);
                e()(q()(h), "paused", !0);
                e()(q()(h), "started", !1);
                e()(q()(h), "stopped", !1);
                e()(q()(h), "snapshotSent", !1);
                e()(q()(h), "eventsList", ["error"]);
                e()(q()(h), "_slaveMessengerRegistrationHandler", function (a, b) {
                  return function (c,
                    e) {
                    var d = c.offsets,
                      g = c.counterId,
                      f = e.origin;
                    try {
                      var l = p()({}, h.options),
                        B = f.split("//").pop(),
                        n = g === l.counterId,
                        q = B === m.location.host,
                        r = -1 !== (l.trustedDomains || []).indexOf(B);
                      q || r && n ? (h.offsets = d, h.sender.useRight(function (a) {
                        var b = a.data,
                          c = {};
                        A.IterableUtils.fastIterate(["page", "events", "mutations"], function (a, e) {
                          b[e] && (c[e] = b[e])
                        });
                        h.messenger.send("iframe_data", {
                          data: c
                        })
                      })) : X["default"].warn("Counter or domain mismatch, iframe will be recorded as master window");
                      return a()
                    } catch (Rb) {
                      b(Rb)
                    }
                  }
                });
                e()(q()(h), "_sendEOF", I.FunctionUtils.once(function () {
                  if (!h._EOF_SENT) {
                    var a = h._getEventObject("eof");
                    h._saveChanges({
                      events: [a]
                    });
                    h._EOF_SENT = !0
                  }
                }));
                h._context = function (a) {
                  var b = {};
                  return a ? (b.window = a.window || m, b.document = a.document || t, b) : {
                    window: m,
                    document: t
                  }
                }(d);
                h.sender = new x.a(h.middlewares.splice(0));
                h.captors = new a;
                h._timer = qa.TimeUtils.timer();
                h._tabId = Object(ja.a)();
                h._configOptions = p()({}, c);
                Object.defineProperty(h.window, "__WV_ENABLED__", {
                  value: !0
                });
                return !fa || Z ? q()(h) || q()(h) : h
              }
              h()(c,
                b);
              var d = c.prototype;
              d.configure = function () {
                var a = Q.ObjectUtils.combine({}, p()({}, R, this._configOptions));
                this.frames = [];
                this.viewport = V.BrowserUtils.viewportGetter(this.document);
                this.zoomLevel = this.viewport.zoomLevel;
                this.prevMutationStamp = null;
                this.prevMutationOrderingID = 0;
                this.ableToStart = this.inited = !1;
                this.startOptions = this.initException = null;
                this.precache = [];
                this.options = p()({}, a);
                this.canvasProxy = v.a;
                this.MediaProxy = E.a;
                ha.c.addAttributesFilter(function (b, c, e) {
                  if (G.a.isValidNode(b) && "value" ===
                    c) return b = G.a.validate(b, a), c = b.forceRecord, b.isAllowed || c ? e : G.a.encode(e)
                })
              };
              d.attachEvent = function () {
                for (var a, b = arguments.length, c = Array(b), e = 0; e < b; e++) c[e] = arguments[e];
                M.a.on.apply(M.a, (a = []).concat.apply(a, c));
                return c
              };
              d.removeEvent = function () {
                for (var a, b = arguments.length, c = Array(b), e = 0; e < b; e++) c[e] = arguments[e];
                M.a.off.apply(M.a, (a = []).concat.apply(a, c));
                return c
              };
              d["continue"] = function () {
                Z || (this.paused = !1)
              };
              d.findNode = function (a) {
                return this.indexer.getNodeId(a)
              };
              d.pause = function () {
                Z ||
                  (this.paused = !0)
              };
              d.middleware = function (a) {
                this.sender ? this.sender.use(a) : this.middlewares.push(a);
                return this
              };
              d.init = function (a) {
                var b = this;
                void 0 === a && (a = {});
                this.initOptions = Q.ObjectUtils.assign({}, this.initOptions, a || {});
                this.errorLogger(k()(r.a.mark(function Ha() {
                  return r.a.wrap(function (a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (fa && !Z) {
                          a.next = 2;
                          break
                        }
                        return a.abrupt("return");
                      case 2:
                        return a.prev = 2, a.next = 5, Object(F.a)(b.document);
                      case 5:
                        b.waitingDocument = a.sent;
                        a.next = 11;
                        break;
                      case 8:
                        a.prev =
                          8, a.t0 = a["catch"](2), b.__handleDocumentLoadError(a.t0);
                      case 11:
                        return a.next = 13, b.__handleDocumentLoad();
                      case 13:
                      case "end":
                        return a.stop()
                    }
                  }, Ha, null, [
                    [2, 8]
                  ])
                })), "init")["catch"](function (a) {
                  clearTimeout(b.cancelIfNotStarted);
                  b.waitingDocument = !1;
                  b.fatal("init-failed", a);
                  b.sendErrors = H(function () {
                    b.stop(!0, !1)
                  }, 3E4)
                })
              };
              d.__handleDocumentLoadError = function (a) {
                var b = a;
                "timeout" === a.message && (b = Error("No \x3cbody\x3e found. Can't continue"));
                this.fatal("init-failed", b)
              };
              d.__handleDocumentLoad = function () {
                var a =
                  k()(r.a.mark(function Fa() {
                    var a = this;
                    return r.a.wrap(function (b) {
                      for (;;) switch (b.prev = b.next) {
                        case 0:
                          return this.configure(), this.__initIndexer(), this.__initEventHandlers(), b.next = 5, this._initMessenger();
                        case 5:
                          this.waitingDocument = !1, this.ableToStart = !0, this.cancelIfNotStarted = H(function () {
                            a.stop(!0, !1)
                          }, 3E4), this.emit("ready"), this.inited = !0, this.startOptions && this.start(this.startOptions);
                        case 11:
                        case "end":
                          return b.stop()
                      }
                    }, Fa, this)
                  }));
                return function () {
                  return a.apply(this, arguments)
                }
              }();
              d.__initIndexer =
                function () {
                  var a = this;
                  this.indexer = new K.a(this.document, {
                    disabled: this.initOptions.disableIndex
                  });
                  if (p()({}, this.options).childIframe) this.indexer.on("node", function (b) {
                    return a.connectSlaveRecorder(b)
                  });
                  this.indexer.use(ya.a);
                  this.indexer.initialIndex()
                };
              d.__initEventHandlers = function () {
                this.summary = new z.a(this.document.documentElement, this.indexer, this);
                this.selection = new oa.a(m, this.document, this.indexer);
                this.keyCapture = new D.a("body", this);
                this.initOptions.disableMutations || this.summary.initObserver();
                this._initCaptors();
                this._createSnapshot()
              };
              d.connectSlaveRecorder = function (a) {
                var b = this;
                if ("IFRAME" === a.nodeName && a.name !== ca.a.NATIVE_IFRAME_NAME && O.DOMUtils.isBlankOrSameOriginIframe(a, this.window)) {
                  try {
                    var c = 0 < a.contentDocument.documentElement.childNodes.length && "complete" === a.contentDocument.readyState
                  } catch (tc) {
                    c = !0
                  }
                  var e = function fb(a) {
                      var c = a.contentWindow,
                        e = a.contentDocument;
                      X["default"].log("creating recorder");
                      if (c && e) {
                        if (!0 === c.__YM_WV_RECORDABLE__) return X["default"].warn("Iframe has internal counter installed");
                        if (!0 === c.__YM_RECORDING__) return X["default"].warn("We're already recording this iframe", a);
                        a.contentWindow.__YM_RECORDING__ = !0;
                        c = b._createInstance(b._configOptions, {
                          window: c,
                          document: e
                        });
                        c.init(b.initOptions);
                        c.start(b.startOptions);
                        return X["default"].info("Recorder injected into the iframe", a)
                      }
                      H(function () {
                        return fb(a)
                      }, 10)
                    },
                    d = function (c) {
                      b.errorLogger(function () {
                        if (c && c.parentElement && c.contentDocument && O.DOMUtils.isBlankOrSameOriginIframe(a, b.window) && !0 !== c.contentWindow.__WV_ENABLED__) try {
                          e(c)
                        } catch (fb) {
                          X["default"].error(fb),
                            X["default"].warn("Probably this iframe is cross-origin")
                        }
                      }, "ifLo")
                    };
                  this.attachEvent(a, "load", function () {
                    d(a)
                  }, {
                    capture: !0,
                    passive: !0
                  });
                  c && d(a)
                }
              };
              d.start = function (a) {
                var b = this;
                void 0 === a && (a = {});
                this.errorLogger(function () {
                  if (b.ableToStart)
                    if (!1 === b.fatalError)
                      if (!b.inited) b.savePageSnapshot(), b.fatal("init-failed", Error("Unknown error"));
                      else {
                        if (fa && !Z) {
                          clearTimeout(b.cancelIfNotStarted);
                          var c = (a || {}).forms;
                          b.options.recording = Q.ObjectUtils.combine({}, R.recording, {
                            keysMode: void 0 === c || c ? "regular" : "explicit"
                          });
                          b.start = I.FunctionUtils.noop();
                          b.started = !0;
                          b.sendSnapshot().then(function (a) {
                            a && (b._sendInitialEvents(), b._sendPreCachedData(), b._timer.start())
                          })["catch"](function (a) {
                            b.fatal("recording-interrupted", a);
                            b.start()
                          });
                          b["continue"]()
                        }
                      }
                  else b.stop(!0, !0);
                  else(function La() {
                    b.ableToStart ? b.start(a) : H(La, 50)
                  })()
                }, "start")
              };
              d.stop = function (a, b) {
                var c = this;
                void 0 === a && (a = !1);
                void 0 === b && (b = !0);
                fa && !Z && (!1 !== this.started && this.inited || a) && !0 !== this.stopped && (clearTimeout(this.cancelIfNotStarted),
                  clearTimeout(this.sendErrors), this.captors.forEach(function (a) {
                    a && a.hasOwnProperty("destroy") && a.destroy(c)
                  }), this.indexer && this.indexer.clear(), this.captors && this.captors.clear(), T.a.invokeAll(this), this.summary && this.summary.destroy(), this.keyCapture && this.keyCapture.destroy(), b ? (this._sendEOF(), !0 === this.fatalError && this._sendPreCachedData({
                    force: !0
                  }), this.emit("stop")) : a && this.emit("close"), this.started = !1, this.stopped = !0)
              };
              d.fatal = function (a, b) {
                void 0 === b && (b = null);
                X["default"].error(b);
                this.fatal =
                  I.FunctionUtils.noop();
                b = b || {
                  message: "Unknown exception",
                  stack: "No stack provided"
                };
                this.fatalError || (this.fatalError = !0, this.savePageSnapshot(), this.sendCustomEvent("fatalError", {
                  code: a,
                  exception: b.message,
                  stack: b.stack
                }), this.stop(!0, !0))
              };
              d.setURLProxy = function (a) {
                P.a.proxy = function () {
                  if ("string" === typeof a) return a;
                  if ("function" === typeof a) return a.call(this)
                }(a)
              };
              d.sendCustomEvent = function (a, b) {
                var c = this._getEventObject(a, null, b);
                this._saveChanges({
                  events: [c]
                })
              };
              d._initCaptors = function () {
                var a =
                  this;
                this.keyCapture.addElementFilter(function (a) {
                  return "INPUT" === a.nodeName ? "password" !== a.type && !1 === /ym-disable-keys/.test(a.className) : !0
                });
                var b = Q.ObjectUtils.combine({}, ca.a.captors, na ? ca.a.iframeCaptors : null);
                A.IterableUtils.forin(b, function (c) {
                  if (!0 === b[c]) {
                    var e = y.a[c]();
                    a.errorLogger(function () {
                      return e.create(a)
                    }, "init-captor-" + c);
                    a.captors.set(c, e)
                  }
                });
                M.a.on(this.window, "beforeunload", this.stop.bind(this))
              };
              d.throwError = function (a, b) {
                void 0 === b && (b = "recorder");
                this.emit("error", {
                  error: a,
                  namespace: "recorder:" + b
                })
              };
              d.errorLogger = function (a, b) {
                var c = this;
                void 0 === b && (b = "recorder");
                try {
                  var e = a();
                  return e instanceof f ? e["catch"](function (a) {
                    c.throwError(a, b + ":async")
                  }) : e
                } catch (La) {
                  this.throwError(La, b)
                }
              };
              d._blockUpcomingCaptor = function (a, b) {
                var c = this;
                void 0 === b && (b = Infinity);
                a && (this._blockedCaptors = this._blockedCaptors || new l, this._blockedCaptors.add(a), Infinity > b && H(function () {
                  return c._releaseCaptor(a)
                }, b))
              };
              d._releaseCaptor = function (a) {
                a && this._blockedCaptors.has(a) && this._blockedCaptors["delete"](a)
              };
              d._executeCaptor = function (a, b) {
                a && "function" === typeof b && (this._blockedCaptors && this._blockedCaptors.has(a) ? this._releaseCaptor(a) : b())
              };
              d._getEventObject = function (a, b, c, e) {
                b = "number" === typeof b ? b : b ? this.findNode(b) || -1 : null;
                return {
                  stamp: this._stampForType(a, e),
                  type: a,
                  target: b,
                  meta: c || null
                }
              };
              d._getMutationObject = function (a, b, c) {
                void 0 === c && (c = 0);
                return {
                  stamp: b,
                  meta: {
                    changes: a,
                    index: c
                  }
                }
              };
              d._stampForType = function (a, b) {
                var c = b || this.stamp;
                return W[a] = c + (c === W[a] ? 1 : 0)
              };
              d._getInitialScroll = function () {
                var a = [],
                  b = this.document.body,
                  c = this._getScroll(b);
                null != c && a.push(c);
                a.concat(this._getScrollForEachNode(b.childNodes));
                return a
              };
              d._getScrollForEachNode = function (a) {
                var b = this;
                return A.IterableUtils.toArray(a).reduce(function (a, c) {
                  var e = b._getScroll(c);
                  null != e && a.push(e);
                  0 < c.childNodes.length && (a = a.concat(b._getScrollForEachNode(c.childNodes)));
                  return a
                }, [])
              };
              d._getScroll = function (a) {
                var b = a.scrollTop,
                  c = a.scrollLeft;
                if (0 < b || 0 < c) return {
                  target: this.findNode(a),
                  scroll: [b, c]
                }
              };
              d._initMessenger = function () {
                var a =
                  this;
                return new f(function () {
                  var b = k()(r.a.mark(function La(b) {
                    var c;
                    return r.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          a.messenger = new N.a(a.window);
                          a._initMasterMessenger();
                          if (!V.BrowserUtils.isIframe(a.window)) {
                            e.next = 7;
                            break
                          }
                          e.next = 5;
                          return a._initSlaveMessenger();
                        case 5:
                          (c = e.sent) && a.fatal("messenger-init-failed", c);
                        case 7:
                          b();
                        case 8:
                        case "end":
                          return e.stop()
                      }
                    }, La)
                  }));
                  return function (a) {
                    return b.apply(this, arguments)
                  }
                }())
              };
              d._initMasterMessenger = function () {
                var a = this,
                  b = p()({}, this.options);
                this.messenger.subscribe("iframe_register", function (a, c) {
                  var e = O.DOMUtils.offsets(a.sender);
                  c({
                    counterId: b.counterId,
                    offsets: {
                      top: e.top,
                      left: e.left
                    }
                  })
                });
                this.messenger.subscribe("iframe_data", function (b) {
                  var c = b.data;
                  b = b.sender;
                  var e = a.findNode(b);
                  if (null != e) {
                    var d = {
                      frameId: e
                    };
                    c.page && (e = p()({}, c.page, d, {
                      tabId: a.tabId,
                      recordStamp: (new Date).getTime(),
                      stamp: a._stampForType("page")
                    }), a._request("/dump", {
                      page: e
                    }));
                    if (c.events) {
                      b = O.DOMUtils.offsets(b, {
                        excludeBorder: !0
                      });
                      var h = b.left,
                        g = b.top;
                      b = c.events.map(function (b) {
                        /mouse/.test(b.type) &&
                          (b.meta.x = Math.round(b.meta.x + h), b.meta.y = Math.round(b.meta.y + g));
                        return p()({}, b, d, {
                          stamp: a._stampForType(b.type)
                        })
                      });
                      a._publishActions(b)
                    }
                    c.mutations && (c = c.mutations.map(function (b) {
                      return p()({}, b, d, {
                        stamp: a._stampForType("mutation")
                      })
                    }), a._publishMutations(c))
                  }
                })
              };
              d._initSlaveMessenger = function () {
                var a = this;
                return (new f(function (b, c) {
                  X["default"].log("Awaiting subscription", a.document.documentElement);
                  a.messenger.send("iframe_register", {
                    awaitResponse: !0,
                    timeoutTime: 3E3,
                    onResponse: a._slaveMessengerRegistrationHandler(b,
                      c),
                    onTimeout: function () {
                      X["default"].warn("Slave recorder stopped due to a timeout: no response from the parent page within 1 seconds. This frame will be used as if it is master");
                      b()
                    }
                  })
                }))["catch"](function (b) {
                  X["default"].warn("Cant init recorder in frame");
                  a.throwError(b, "slave-recorder");
                  X["default"].warn(b, a.document);
                  return b
                })
              };
              d._publishActions = function () {
                var a;
                this._saveChanges({
                  events: (a = []).concat.apply(a, arguments)
                })
              };
              d._publishMutations = function () {
                var a;
                this._saveChanges({
                  mutations: (a = []).concat.apply(a, arguments)
                })
              };
              d._request = function (a, b, c) {
                void 0 === b && (b = {});
                void 0 === c && (c = !1);
                this._EOF_SENT && !0 !== c || (!0 === this.started || !0 === c ? (b = Q.ObjectUtils.combine({
                  _v: ca.a["package"].version
                }, p()({}, b)), this.sender.send({
                  url: a,
                  data: p()({}, b)
                })) : this.precache.push([a, b]))
              };
              d._saveChanges = function (a) {
                this._request("/dump", a);
                !this._EOF_SENT && this.started && (this.dataSent >= this.options.maxSize || this.hitDuration >= this.options.maxDuration) && this.stop()
              };
              d.sendSnapshot = function () {
                var a = this;
                return this.snapshot.get({
                  onSuccess: function (b) {
                    a.savePageSnapshot(b);
                    return !0
                  },
                  onFail: function () {
                    return !1
                  }
                })
              };
              d._createSnapshot = function () {
                var a = this,
                  b = f.resolve().then(function () {
                    return {
                      content: a.summary.html
                    }
                  })["catch"](function (a) {
                    return {
                      error: a
                    }
                  }).then(function (a) {
                    return {
                      content: a.content,
                      error: a.error
                    }
                  });
                this.snapshot = {
                  get: function (c) {
                    var e = c.onSuccess,
                      d = c.onFail;
                    return b.then(function (b) {
                      var c = b.error;
                      b = b.content;
                      c ? (b = d.call(a, b, c), a.fatal("invalid-snapshot", c)) : b = e.call(a, b);
                      return b
                    })
                  }
                }
              };
              d.savePageSnapshot = function (a) {
                if (this.indexer && !this.indexer.disabled &&
                  !this.snapshotSent) return this.snapshotSent = !0, a = p()({
                  content: a,
                  frameId: 0,
                  tabId: this.tabId,
                  recordStamp: (new Date).getTime()
                }, this.page), this._saveChanges({
                  page: a
                })
              };
              d._sendInitialEvents = function () {
                var a = this,
                  b = [],
                  c = function () {
                    var b = a.captors.get("resize");
                    return b && b.getValue.call(a)
                  }(),
                  e = this.viewport.scrollingElement,
                  d = this._getInitialScroll().map(function (b) {
                    var c = b.scroll,
                      d = c[0];
                    c = c[1];
                    b = a.indexer.find(b.target);
                    b = b === a.document || b === a.window ? e : b;
                    return a._getEventObject("scroll", b, {
                      x: c,
                      y: d,
                      page: b ===
                        e
                    })
                  });
                c && b.push(c);
                b.push.apply(b, d);
                this._saveChanges({
                  events: b
                })
              };
              d._sendPreCachedData = function (a) {
                a = (void 0 === a ? {} : a).force;
                a = void 0 === a ? !1 : a;
                if (this.precache.length)
                  for (var b; null != (b = this.precache.shift());) this._request(b[0], b[1], a)
              };
              d._connectToParent = function () {
                this._sendMessage("connect", {
                  id: this._identifier
                })
              };
              d._sendMessage = function (a, b) {
                (na ? this.window.top : this.window).postMessage({
                  type: a,
                  data: b
                }, "*")
              };
              d._universalHandler = function (a, b) {
                var c = this,
                  e = (void 0 === b ? {} : b).extra,
                  d = void 0 === e ? [] : e;
                return function () {
                  for (var b = arguments.length, e = Array(b), h = 0; h < b; h++) e[h] = arguments[h];
                  c.errorLogger(function () {
                    c.paused || a.apply(c, e.concat(d))
                  }, "universal-handler")
                }
              };
              d._createInstance = function () {
                for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                return n()(this.constructor, b)
              };
              C()(c, [{
                  key: "window",
                  get: function () {
                    return this._context.window
                  }
                }, {
                  key: "document",
                  get: function () {
                    return this._context.document
                  }
                }, {
                  key: "bodyNode",
                  get: function () {
                    return this.__bodyNode || (this.__bodyNode =
                      this.document.body)
                  }
                }, {
                  key: "fpsDelay",
                  get: function () {
                    return 1E3 / this.fps
                  }
                }, {
                  key: "doctype",
                  get: function () {
                    if (!this.document.doctype) return "";
                    var a = this.document.doctype || {},
                      b = a.publicId,
                      c = a.systemId;
                    return "\x3c!DOCTYPE " + [a.name || "html", b ? ' PUBLIC "' + b + '"' : "", !b && c ? " SYSTEM" : "", c ? ' "' + c + '"' : ""].join("") + "\x3e"
                  }
                }, {
                  key: "rootNode",
                  get: function () {
                    return this.__rootNode || (this.__rootNode = this.document.documentElement)
                  }
                }, {
                  key: "stamp",
                  get: function () {
                    return this._timer ? this._timer.stamp() : 0
                  }
                }, {
                  key: "eventID",
                  get: function () {
                    return this._eventID ? this._eventID += 1 : this._eventID = 1
                  }
                }, {
                  key: "page",
                  get: function () {
                    var a = this.viewport ? this.viewport.getSize() : {
                        width: 0,
                        height: 0
                      },
                      b = O.DOMUtils.base(),
                      c = !!this.document.querySelector("base[href]");
                    return {
                      meta: {
                        base: b,
                        hasBase: c,
                        viewport: a,
                        title: this.document.title,
                        doctype: this.doctype,
                        address: L.href,
                        ua: navigator.userAgent,
                        referrer: this.document.referrer,
                        adblocking: S.checkSync(),
                        screen: {
                          width: ea.width,
                          height: ea.height
                        },
                        location: {
                          host: L.host,
                          protocol: L.protocol,
                          path: L.pathname
                        }
                      }
                    }
                  }
                },
                {
                  key: "domain",
                  get: function () {
                    return L.protocol + "//" + (L.host || L.hostname) + (L.port ? ":" + L.port : "")
                  }
                }, {
                  key: "tabId",
                  get: function () {
                    return this._tabId
                  }
                }
              ]);
              return c
            }(J.a),
            ka = {
              IS_INCOGNITO: aa.IS_INCOGNITO,
              IS_MOBILE_DEVICE: aa.IS_MOBILE_DEVICE,
              DO_NOT_TRACK: aa.DO_NOT_TRACK
            };
          A.IterableUtils.forin(ka, function (a) {
            var b = {
              value: ka[a]
            };
            Object.defineProperty(la, a, b);
            Object.defineProperty(la.prototype, a, b)
          })
        }).call(this, c(12)["default"], c(22).Promise, c(8)["default"])
      },
      function (a, b, c) {
        b = c(25)["default"];
        a.exports = c(69)() ?
          b : c(70)
      },
      function (a, b, c) {
        (function (b) {
          var c = {
            object: !0,
            symbol: !0
          };
          a.exports = function () {
            if ("function" !== typeof b) return !1;
            var a = b("test symbol");
            try {
              String(a)
            } catch (g) {
              return !1
            }
            return c[typeof b.iterator] && c[typeof b.toPrimitive] && c[typeof b.toStringTag] ? !0 : !1
          }
        }).call(this, c(25)["default"])
      },
      function (a, b, c) {
        (function (b) {
          var d = c(71),
            l = c(85),
            g = Object.create,
            n = Object.defineProperties,
            r = Object.defineProperty,
            k = Object.prototype,
            p, m = g(null);
          if ("function" === typeof b) {
            var q = b;
            try {
              String(q());
              var h = !0
            } catch (I) {}
          }
          var e =
            function () {
              var a = g(null);
              return function (b) {
                for (var c = 0, e, h; a[b + (c || "")];) ++c;
                b += c || "";
                a[b] = !0;
                e = "@@" + b;
                r(k, e, d.gs(null, function (a) {
                  h || (h = !0, r(this, e, d(a)), h = !1)
                }));
                return e
              }
            }();
          var B = function (a) {
            if (this instanceof B) throw new TypeError("Symbol is not a constructor");
            return p(a)
          };
          a.exports = p = function ca(a) {
            if (this instanceof ca) throw new TypeError("Symbol is not a constructor");
            if (h) return q(a);
            var b = g(B.prototype);
            a = a === w ? "" : String(a);
            return n(b, {
              __description__: d("", a),
              __name__: d("", e(a))
            })
          };
          n(p, {
            "for": d(function (a) {
              return m[a] ? m[a] : m[a] = p(String(a))
            }),
            keyFor: d(function (a) {
              var b;
              l(a);
              for (b in m)
                if (m[b] === a) return b
            }),
            hasInstance: d("", q && q.hasInstance || p("hasInstance")),
            isConcatSpreadable: d("", q && q.isConcatSpreadable || p("isConcatSpreadable")),
            iterator: d("", q && q.iterator || p("iterator")),
            match: d("", q && q.match || p("match")),
            replace: d("", q && q.replace || p("replace")),
            search: d("", q && q.search || p("search")),
            species: d("", q && q.species || p("species")),
            split: d("", q && q.split || p("split")),
            toPrimitive: d("",
              q && q.toPrimitive || p("toPrimitive")),
            toStringTag: d("", q && q.toStringTag || p("toStringTag")),
            unscopables: d("", q && q.unscopables || p("unscopables"))
          });
          n(B.prototype, {
            constructor: d(p),
            toString: d("", function () {
              return this.__name__
            })
          });
          n(p.prototype, {
            toString: d(function () {
              return "Symbol (" + l(this).__description__ + ")"
            }),
            valueOf: d(function () {
              return l(this)
            })
          });
          r(p.prototype, p.toPrimitive, d("", function () {
            var a = l(this);
            return "symbol" === typeof a ? a : a.toString()
          }));
          r(p.prototype, p.toStringTag, d("c", "Symbol"));
          r(B.prototype,
            p.toStringTag, d("c", p.prototype[p.toStringTag]));
          r(B.prototype, p.toPrimitive, d("c", p.prototype[p.toPrimitive]))
        }).call(this, c(25)["default"])
      },
      function (a, b, c) {
        var d = c(72),
          f = c(80),
          l = c(81),
          g = c(82);
        (a.exports = function (a, b) {
          var c;
          if (2 > arguments.length || "string" !== typeof a) {
            var l = b;
            b = a;
            a = null
          } else l = arguments[2];
          if (null == a) {
            var n = c = !0;
            var q = !1
          } else n = g.call(a, "c"), q = g.call(a, "e"), c = g.call(a, "w");
          n = {
            value: b,
            configurable: n,
            enumerable: q,
            writable: c
          };
          return l ? d(f(l), n) : n
        }).gs = function (a, b, c, k) {
          "string" !== typeof a &&
            (k = c, c = b, b = a, a = null);
          null == b ? b = w : l(b) ? null == c ? c = w : l(c) || (k = c, c = w) : (k = b, b = c = w);
          if (null == a) {
            var n = !0;
            a = !1
          } else n = g.call(a, "c"), a = g.call(a, "e");
          b = {
            get: b,
            set: c,
            configurable: n,
            enumerable: a
          };
          return k ? d(f(k), b) : b
        }
      },
      function (a, b, c) {
        a.exports = c(73)() ? Object.assign : c(74)
      },
      function (a, b, c) {
        a.exports = function () {
          var a = Object.assign;
          if ("function" !== typeof a) return !1;
          var b = {
            foo: "raz"
          };
          a(b, {
            bar: "dwa"
          }, {
            trzy: "trzy"
          });
          return "razdwatrzy" === b.foo + b.bar + b.trzy
        }
      },
      function (a, b, c) {
        var d = c(75),
          f = c(79),
          l = Math.max;
        a.exports =
          function (a, b) {
            var c, g, n = l(arguments.length, 2);
            a = Object(f(a));
            var k = function (d) {
              try {
                a[d] = b[d]
              } catch (h) {
                c || (c = h)
              }
            };
            for (g = 1; g < n; ++g) b = arguments[g], d(b).forEach(k);
            if (c !== w) throw c;
            return a
          }
      },
      function (a, b, c) {
        a.exports = c(76)() ? Object.keys : c(77)
      },
      function (a, b, c) {
        a.exports = function () {
          try {
            return Object.keys("primitive"), !0
          } catch (d) {
            return !1
          }
        }
      },
      function (a, b, c) {
        var d = c(36),
          f = Object.keys;
        a.exports = function (a) {
          return f(d(a) ? Object(a) : a)
        }
      },
      function (a, b, c) {
        a.exports = function () {}
      },
      function (a, b, c) {
        var d = c(36);
        a.exports =
          function (a) {
            if (!d(a)) throw new TypeError("Cannot use null or undefined");
            return a
          }
      },
      function (a, b, c) {
        var d = c(36),
          f = Array.prototype.forEach,
          l = Object.create;
        a.exports = function (a) {
          var b = l(null);
          f.call(arguments, function (a) {
            if (d(a)) {
              a = Object(a);
              for (var c in a) b[c] = a[c]
            }
          });
          return b
        }
      },
      function (a, b, c) {
        a.exports = function (a) {
          return "function" === typeof a
        }
      },
      function (a, b, c) {
        a.exports = c(83)() ? String.prototype.contains : c(84)
      },
      function (a, b, c) {
        a.exports = function () {
          return "function" !== typeof "razdwatrzy".contains ? !1 :
            !0 === "razdwatrzy".contains("dwa") && !1 === "razdwatrzy".contains("foo")
        }
      },
      function (a, b, c) {
        var d = String.prototype.indexOf;
        a.exports = function (a, b) {
          return -1 < d.call(this, a, b)
        }
      },
      function (a, b, c) {
        var d = c(86);
        a.exports = function (a) {
          if (!d(a)) throw new TypeError(a + " is not a symbol");
          return a
        }
      },
      function (a, b, c) {
        a.exports = function (a) {
          return a ? "symbol" === typeof a ? !0 : a.constructor && "Symbol" === a.constructor.name ? "Symbol" === a[a.constructor.toStringTag] : !1 : !1
        }
      },
      function (a, b, c) {
        (function (b) {
          (function (b, c) {
            a.exports = c()
          })(this,
            function () {
              function a(a) {
                return "function" === typeof a
              }

              function c() {
                return function () {
                  return b.nextTick(p)
                }
              }

              function d() {
                return "undefined" !== typeof T ? function () {
                  T(p)
                } : k()
              }

              function n() {
                var a = 0,
                  b = new ja(p),
                  c = t.createTextNode("");
                b.observe(c, {
                  characterData: !0
                });
                return function () {
                  c.data = a = ++a % 2
                }
              }

              function r() {
                var a = new MessageChannel;
                a.port1.onmessage = p;
                return function () {
                  return a.port2.postMessage(0)
                }
              }

              function k() {
                return function () {
                  return H(p, 1)
                }
              }

              function p() {
                for (var a = 0; a < N; a += 2)(0, O[a])(O[a + 1]), O[a] = w,
                  O[a + 1] = w;
                N = 0
              }

              function C() {
                try {
                  var a = Function("return this")().require("vertx");
                  T = a.runOnLoop || a.runOnContext;
                  return d()
                } catch (fa) {
                  return k()
                }
              }

              function q(a, b) {
                var c = this,
                  d = new this.constructor(e);
                d[aa] === w && M(d);
                var h = c._state;
                if (h) {
                  var g = arguments[h - 1];
                  P(function () {
                    return F(h, d, g, c._result)
                  })
                } else D(c, d, a, b);
                return d
              }

              function h(a) {
                if (a && "object" === typeof a && a.constructor === this) return a;
                var b = new this(e);
                y(b, a);
                return b
              }

              function e() {}

              function B(a) {
                try {
                  return a.then
                } catch (fa) {
                  return S.error = fa, S
                }
              }

              function I(a, b, c, e) {
                try {
                  a.call(b, c, e)
                } catch (la) {
                  return la
                }
              }

              function A(a, b, c) {
                P(function (a) {
                  var e = !1,
                    d = I(c, b, function (c) {
                      e || (e = !0, b !== c ? y(a, c) : x(a, c))
                    }, function (b) {
                      e || (e = !0, G(a, b))
                    }, "Settle: " + (a._label || " unknown promise"));
                  !e && d && (e = !0, G(a, d))
                }, a)
              }

              function ca(a, b) {
                b._state === X ? x(a, b._result) : b._state === U ? G(a, b._result) : D(b, w, function (b) {
                  return y(a, b)
                }, function (b) {
                  return G(a, b)
                })
              }

              function v(b, c, e) {
                c.constructor === b.constructor && e === q && c.constructor.resolve === h ? ca(b, c) : e === S ? (G(b, S.error), S.error =
                  null) : e === w ? x(b, c) : a(e) ? A(b, c, e) : x(b, c)
              }

              function y(a, b) {
                if (a === b) G(a, new TypeError("You cannot resolve a promise with itself"));
                else {
                  var c = typeof b;
                  null === b || "object" !== c && "function" !== c ? x(a, b) : v(a, b, B(b))
                }
              }

              function z(a) {
                a._onerror && a._onerror(a._result);
                E(a)
              }

              function x(a, b) {
                a._state === Q && (a._result = b, a._state = X, 0 !== a._subscribers.length && P(E, a))
              }

              function G(a, b) {
                a._state === Q && (a._state = U, a._result = b, P(z, a))
              }

              function D(a, b, c, e) {
                var d = a._subscribers,
                  h = d.length;
                a._onerror = null;
                d[h] = b;
                d[h + X] = c;
                d[h + U] =
                  e;
                0 === h && a._state && P(E, a)
              }

              function E(a) {
                var b = a._subscribers,
                  c = a._state;
                if (0 !== b.length) {
                  for (var e, d, h = a._result, g = 0; g < b.length; g += 3) e = b[g], d = b[g + c], e ? F(c, e, d, h) : d(h);
                  a._subscribers.length = 0
                }
              }

              function F(b, c, e, d) {
                var h = a(e),
                  g = void 0,
                  f = void 0,
                  l = void 0,
                  B = void 0;
                if (h) {
                  try {
                    g = e(d)
                  } catch (xa) {
                    S.error = xa, g = S
                  }
                  g === S ? (B = !0, f = g.error, g.error = null) : l = !0;
                  if (c === g) {
                    G(c, new TypeError("A promises callback cannot return that same promise."));
                    return
                  }
                } else g = d, l = !0;
                c._state === Q && (h && l ? y(c, g) : B ? G(c, f) : b === X ? x(c, g) : b ===
                  U && G(c, g))
              }

              function K(a, b) {
                try {
                  b(function (b) {
                    y(a, b)
                  }, function (b) {
                    G(a, b)
                  })
                } catch (Z) {
                  G(a, Z)
                }
              }

              function M(a) {
                a[aa] = ba++;
                a._state = w;
                a._result = w;
                a._subscribers = []
              }
              var L = void 0,
                J = L = Array.isArray ? Array.isArray : function (a) {
                  return "[object Array]" === Object.prototype.toString.call(a)
                },
                N = 0,
                T = void 0,
                W = void 0,
                P = function (a, b) {
                  O[N] = a;
                  O[N + 1] = b;
                  N += 2;
                  2 === N && (W ? W(p) : qa())
                },
                ha = (L = "undefined" !== typeof m ? m : w) || {},
                ja = ha.MutationObserver || ha.WebKitMutationObserver;
              ha = "undefined" === typeof self && "undefined" !== typeof b && "[object process]" === {}.toString.call(b);
              var V = "undefined" !== typeof Uint8ClampedArray && "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel,
                O = Array(1E3),
                qa = void 0;
              qa = ha ? c() : ja ? n() : V ? r() : L === w ? C() : k();
              var aa = Math.random().toString(36).substring(2),
                Q = void 0,
                X = 1,
                U = 2,
                S = {
                  error: null
                },
                ba = 0,
                ia = function () {
                  function a(a, b) {
                    this._instanceConstructor = a;
                    this.promise = new a(e);
                    this.promise[aa] || M(this.promise);
                    J(b) ? (this._remaining = this.length = b.length, this._result = Array(this.length), 0 === this.length ? x(this.promise,
                      this._result) : (this.length = this.length || 0, this._enumerate(b), 0 === this._remaining && x(this.promise, this._result))) : G(this.promise, Error("Array Methods must be provided an Array"))
                  }
                  a.prototype._enumerate = function (a) {
                    for (var b = 0; this._state === Q && b < a.length; b++) this._eachEntry(a[b], b)
                  };
                  a.prototype._eachEntry = function (a, b) {
                    var c = this._instanceConstructor,
                      d = c.resolve;
                    d === h ? (d = B(a), d === q && a._state !== Q ? this._settledAt(a._state, b, a._result) : "function" !== typeof d ? (this._remaining--, this._result[b] = a) : c === R ?
                      (c = new c(e), v(c, a, d), this._willSettleAt(c, b)) : this._willSettleAt(new c(function (b) {
                        return b(a)
                      }), b)) : this._willSettleAt(d(a), b)
                  };
                  a.prototype._settledAt = function (a, b, c) {
                    var e = this.promise;
                    e._state === Q && (this._remaining--, a === U ? G(e, c) : this._result[b] = c);
                    0 === this._remaining && x(e, this._result)
                  };
                  a.prototype._willSettleAt = function (a, b) {
                    var c = this;
                    D(a, w, function (a) {
                      return c._settledAt(X, b, a)
                    }, function (a) {
                      return c._settledAt(U, b, a)
                    })
                  };
                  return a
                }(),
                R = function () {
                  function b(a) {
                    this[aa] = ba++;
                    this._result = this._state =
                      w;
                    this._subscribers = [];
                    if (e !== a) {
                      if ("function" !== typeof a) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                      if (this instanceof b) K(this, a);
                      else throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    }
                  }
                  b.prototype["catch"] = function (a) {
                    return this.then(null, a)
                  };
                  b.prototype["finally"] = function (b) {
                    var c = this.constructor;
                    return a(b) ? this.then(function (a) {
                        return c.resolve(b()).then(function () {
                          return a
                        })
                      },
                      function (a) {
                        return c.resolve(b()).then(function () {
                          throw a;
                        })
                      }) : this.then(b, b)
                  };
                  return b
                }();
              R.prototype.then = q;
              R.all = function (a) {
                return (new ia(this, a)).promise
              };
              R.race = function (a) {
                var b = this;
                return J(a) ? new b(function (c, e) {
                  for (var d = a.length, h = 0; h < d; h++) b.resolve(a[h]).then(c, e)
                }) : new b(function (a, b) {
                  return b(new TypeError("You must pass an array to race."))
                })
              };
              R.resolve = h;
              R.reject = function (a) {
                var b = new this(e);
                G(b, a);
                return b
              };
              R._setScheduler = function (a) {
                W = a
              };
              R._setAsap = function (a) {
                P = a
              };
              R._asap = P;
              R.polyfill = function () {
                var a = void 0;
                if ("undefined" !== typeof global) a = global;
                else if ("undefined" !== typeof self) a = self;
                else try {
                  a = Function("return this")()
                } catch (na) {
                  throw Error("polyfill failed because global object is unavailable in this environment");
                }
                var b = a.Promise;
                if (b) {
                  var c = null;
                  try {
                    c = Object.prototype.toString.call(b.resolve())
                  } catch (na) {}
                  if ("[object Promise]" === c && !b.cast) return
                }
                a.Promise = R
              };
              return R.Promise = R
            })
        }).call(this, c(39))
      },
      function (a, b) {
        function c(b, f) {
          a.exports = c = Object.setPrototypeOf ||
            function (a, b) {
              a.__proto__ = b;
              return a
            };
          return c(b, f)
        }
        a.exports = c
      },
      function (a, b, c) {
        b = function () {
          return this || "object" === typeof self && self
        }() || Function("return this")();
        var d = b.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(b).indexOf("regeneratorRuntime"),
          f = d && b.regeneratorRuntime;
        b.regeneratorRuntime = w;
        a.exports = c(90);
        if (d) b.regeneratorRuntime = f;
        else try {
          delete b.regeneratorRuntime
        } catch (l) {
          b.regeneratorRuntime = w
        }
      },
      function (a, b, c) {
        (function (b, c) {
          ! function (d) {
            function g(a, b, c, e) {
              b = Object.create((b &&
                b.prototype instanceof l ? b : l).prototype);
              e = new A(e || []);
              b._invoke = h(a, c, e);
              return b
            }

            function f(a, b, c) {
              try {
                return {
                  type: "normal",
                  arg: a.call(b, c)
                }
              } catch (V) {
                return {
                  type: "throw",
                  arg: V
                }
              }
            }

            function l() {}

            function k() {}

            function p() {}

            function m(a) {
              ["next", "throw", "return"].forEach(function (b) {
                a[b] = function (a) {
                  return this._invoke(b, a)
                }
              })
            }

            function q(a) {
              function b(e, d, h, g) {
                e = f(a[e], a, d);
                if ("throw" === e.type) g(e.arg);
                else {
                  var l = e.arg;
                  return (e = l.value) && "object" === typeof e && v.call(e, "__await") ? c.resolve(e.__await).then(function (a) {
                    b("next",
                      a, h, g)
                  }, function (a) {
                    b("throw", a, h, g)
                  }) : c.resolve(e).then(function (a) {
                    l.value = a;
                    h(l)
                  }, function (a) {
                    return b("throw", a, h, g)
                  })
                }
              }
              var e;
              this._invoke = function (a, d) {
                function h() {
                  return new c(function (c, e) {
                    b(a, d, c, e)
                  })
                }
                return e = e ? e.then(h, h) : h()
              }
            }

            function h(a, b, c) {
              var d = H;
              return function (h, g) {
                if (d === M) throw Error("Generator is already running");
                if (d === L) {
                  if ("throw" === h) throw g;
                  return t()
                }
                c.method = h;
                for (c.arg = g;;) {
                  var l = c.delegate;
                  if (l && (l = e(l, c))) {
                    if (l === J) continue;
                    return l
                  }
                  if ("next" === c.method) c.sent = c._sent =
                    c.arg;
                  else if ("throw" === c.method) {
                    if (d === H) throw d = L, c.arg;
                    c.dispatchException(c.arg)
                  } else "return" === c.method && c.abrupt("return", c.arg);
                  d = M;
                  l = f(a, b, c);
                  if ("normal" === l.type) {
                    d = c.done ? L : K;
                    if (l.arg === J) continue;
                    return {
                      value: l.arg,
                      done: c.done
                    }
                  }
                  "throw" === l.type && (d = L, c.method = "throw", c.arg = l.arg)
                }
              }
            }

            function e(a, b) {
              var c = a.iterator[b.method];
              if (c === w) {
                b.delegate = null;
                if ("throw" === b.method) {
                  if (a.iterator["return"] && (b.method = "return", b.arg = w, e(a, b), "throw" === b.method)) return J;
                  b.method = "throw";
                  b.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return J
              }
              c =
                f(c, a.iterator, b.arg);
              if ("throw" === c.type) return b.method = "throw", b.arg = c.arg, b.delegate = null, J;
              c = c.arg;
              if (!c) return b.method = "throw", b.arg = new TypeError("iterator result is not an object"), b.delegate = null, J;
              if (c.done) b[a.resultName] = c.value, b.next = a.nextLoc, "return" !== b.method && (b.method = "next", b.arg = w);
              else return c;
              b.delegate = null;
              return J
            }

            function B(a) {
              var b = {
                tryLoc: a[0]
              };
              1 in a && (b.catchLoc = a[1]);
              2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]);
              this.tryEntries.push(b)
            }

            function I(a) {
              var b = a.completion || {};
              b.type = "normal";
              delete b.arg;
              a.completion = b
            }

            function A(a) {
              this.tryEntries = [{
                tryLoc: "root"
              }];
              a.forEach(B, this);
              this.reset(!0)
            }

            function ca(a) {
              if (a) {
                var b = a[z];
                if (b) return b.call(a);
                if ("function" === typeof a.next) return a;
                if (!isNaN(a.length)) {
                  var c = -1;
                  b = function O() {
                    for (; ++c < a.length;)
                      if (v.call(a, c)) return O.value = a[c], O.done = !1, O;
                    O.value = w;
                    O.done = !0;
                    return O
                  };
                  return b.next = b
                }
              }
              return {
                next: t
              }
            }

            function t() {
              return {
                value: w,
                done: !0
              }
            }
            var y = Object.prototype,
              v = y.hasOwnProperty,
              w, x = "function" === typeof b ? b : {},
              z = x.iterator || "@@iterator",
              D = x.asyncIterator || "@@asyncIterator",
              E = x.toStringTag || "@@toStringTag";
            x = "object" === typeof a;
            var F = d.regeneratorRuntime;
            if (F) x && (a.exports = F);
            else {
              F = d.regeneratorRuntime = x ? a.exports : {};
              F.wrap = g;
              var H = "suspendedStart",
                K = "suspendedYield",
                M = "executing",
                L = "completed",
                J = {};
              d = {};
              d[z] = function () {
                return this
              };
              (x = (x = Object.getPrototypeOf) && x(x(ca([])))) && x !== y && v.call(x, z) && (d = x);
              var N = p.prototype = l.prototype = Object.create(d);
              k.prototype = N.constructor = p;
              p.constructor = k;
              p[E] = k.displayName =
                "GeneratorFunction";
              F.isGeneratorFunction = function (a) {
                return (a = "function" === typeof a && a.constructor) ? a === k || "GeneratorFunction" === (a.displayName || a.name) : !1
              };
              F.mark = function (a) {
                Object.setPrototypeOf ? Object.setPrototypeOf(a, p) : (a.__proto__ = p, E in a || (a[E] = "GeneratorFunction"));
                a.prototype = Object.create(N);
                return a
              };
              F.awrap = function (a) {
                return {
                  __await: a
                }
              };
              m(q.prototype);
              q.prototype[D] = function () {
                return this
              };
              F.AsyncIterator = q;
              F.async = function (a, b, c, e) {
                var d = new q(g(a, b, c, e));
                return F.isGeneratorFunction(b) ?
                  d : d.next().then(function (a) {
                    return a.done ? a.value : d.next()
                  })
              };
              m(N);
              N[E] = "Generator";
              N[z] = function () {
                return this
              };
              N.toString = function () {
                return "[object Generator]"
              };
              F.keys = function (a) {
                var b = [],
                  c;
                for (c in a) b.push(c);
                b.reverse();
                return function O() {
                  for (; b.length;) {
                    var c = b.pop();
                    if (c in a) return O.value = c, O.done = !1, O
                  }
                  O.done = !0;
                  return O
                }
              };
              F.values = ca;
              A.prototype = {
                constructor: A,
                reset: function (a) {
                  this.next = this.prev = 0;
                  this.sent = this._sent = w;
                  this.done = !1;
                  this.delegate = null;
                  this.method = "next";
                  this.arg = w;
                  this.tryEntries.forEach(I);
                  if (!a)
                    for (var b in this) "t" === b.charAt(0) && v.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = w)
                },
                stop: function () {
                  this.done = !0;
                  var a = this.tryEntries[0].completion;
                  if ("throw" === a.type) throw a.arg;
                  return this.rval
                },
                dispatchException: function (a) {
                  function b(b, e) {
                    h.type = "throw";
                    h.arg = a;
                    c.next = b;
                    e && (c.method = "next", c.arg = w);
                    return !!e
                  }
                  if (this.done) throw a;
                  for (var c = this, e = this.tryEntries.length - 1; 0 <= e; --e) {
                    var d = this.tryEntries[e],
                      h = d.completion;
                    if ("root" === d.tryLoc) return b("end");
                    if (d.tryLoc <= this.prev) {
                      var g =
                        v.call(d, "catchLoc"),
                        f = v.call(d, "finallyLoc");
                      if (g && f) {
                        if (this.prev < d.catchLoc) return b(d.catchLoc, !0);
                        if (this.prev < d.finallyLoc) return b(d.finallyLoc)
                      } else if (g) {
                        if (this.prev < d.catchLoc) return b(d.catchLoc, !0)
                      } else if (f) {
                        if (this.prev < d.finallyLoc) return b(d.finallyLoc)
                      } else throw Error("try statement without catch or finally");
                    }
                  }
                },
                abrupt: function (a, b) {
                  for (var c = this.tryEntries.length - 1; 0 <= c; --c) {
                    var e = this.tryEntries[c];
                    if (e.tryLoc <= this.prev && v.call(e, "finallyLoc") && this.prev < e.finallyLoc) {
                      var d =
                        e;
                      break
                    }
                  }
                  d && ("break" === a || "continue" === a) && d.tryLoc <= b && b <= d.finallyLoc && (d = null);
                  c = d ? d.completion : {};
                  c.type = a;
                  c.arg = b;
                  return d ? (this.method = "next", this.next = d.finallyLoc, J) : this.complete(c)
                },
                complete: function (a, b) {
                  if ("throw" === a.type) throw a.arg;
                  "break" === a.type || "continue" === a.type ? this.next = a.arg : "return" === a.type ? (this.rval = this.arg = a.arg, this.method = "return", this.next = "end") : "normal" === a.type && b && (this.next = b);
                  return J
                },
                finish: function (a) {
                  for (var b = this.tryEntries.length - 1; 0 <= b; --b) {
                    var c = this.tryEntries[b];
                    if (c.finallyLoc === a) return this.complete(c.completion, c.afterLoc), I(c), J
                  }
                },
                "catch": function (a) {
                  for (var b = this.tryEntries.length - 1; 0 <= b; --b) {
                    var c = this.tryEntries[b];
                    if (c.tryLoc === a) {
                      a = c.completion;
                      if ("throw" === a.type) {
                        var e = a.arg;
                        I(c)
                      }
                      return e
                    }
                  }
                  throw Error("illegal catch attempt");
                },
                delegateYield: function (a, b, c) {
                  this.delegate = {
                    iterator: ca(a),
                    resultName: b,
                    nextLoc: c
                  };
                  "next" === this.method && (this.arg = w);
                  return J
                }
              }
            }
          }(function () {
            return this || "object" === typeof self && self
          }() || Function("return this")())
        }).call(this,
          c(25)["default"], c(22).Promise)
      },
      function (a, b, c) {
        c.r(b);
        c.d(b, "MapUtils", function () {
          return d
        });
        var d = {
          setIfNotExists: function (a, b, c) {
            !1 === a.has(b) && a.set(b, this.invoke(c))
          },
          getOrSet: function (a, b, c) {
            if (a.has(b)) return a.get(b);
            c = this.invoke(c);
            a.set(b, c);
            return c
          },
          getAndUpdate: function (a, b, c) {
            var d = c = this.invoke(c);
            a.has(b) && (d = a.get(b));
            a.set(b, c);
            return d
          }
        }
      },
      function (a, b, c) {
        c.r(b);
        c.d(b, "MathUtils", function () {
          return f
        });
        var d = c(4),
          f = {
            toChunks: function (a, b) {
              var c = a.slice(0),
                g = c.length,
                f = g === b ? Math.round :
                Math.floor,
                l = 0;
              return c.reduce(function (a, q, h) {
                var e = f(b / (g / h));
                0 < h && 1 < e - l && d["default"].warn("Invalid index " + e + ": " + f(b / (g / (h - 1))) + " \x3c\x3d\x3e " + f(b / (g / h)), [c.length, h, b], [c.length / h], [b / (c.length / h)]);
                l = e;
                a[e] = a[e] || [];
                a[e].push(q);
                return a
              }, [])
            },
            split: function (a, b) {
              return a.reduce(function (a, c, d) {
                d = Math.floor(d / b);
                a[d] = (a[d] || []).concat(c);
                return a
              }, [])
            },
            avg: function (a) {
              return a.length ? a.reduce(function (a, b) {
                return a + b
              }) / a.length : NaN
            },
            max: function (a) {
              var b = NaN;
              if (0 < a.length) {
                var c = a.length -
                  2;
                for (b = a[a.length - 1]; 0 <= c; c--) b = b > a[c] ? b : a[c]
              }
              return b
            },
            random: function (a, b) {
              void 0 === a && (a = 0);
              return Math.round(Math.random() * b + a)
            }
          }
      }
    ])["default"]
  } catch (a) {
    Pa = {
      error: a,
      scope: "recoder"
    }
  }
  var k = {
      mixin: function (a) {
        var b, c;
        for (b = 1; b < arguments.length; b++)
          if (arguments[b]) {
            for (c in arguments[b]) arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
            arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
          }
        return a
      }
    },
    J = function (a) {
      a = a || {};
      k.mixin(this, a);
      this._initComponent()
    };
  J.prototype._initComponent =
    function () {};
  J.inherit = function (a) {
    a = a || {};
    var b = "function" == typeof this ? this : Object;
    a.hasOwnProperty("constructor") || (a.constructor = function () {
      b.apply(this, arguments)
    });
    var c = function () {};
    c.prototype = b.prototype;
    a.constructor.prototype = new c;
    k.mixin(a.constructor.prototype, a);
    a.constructor.prototype.constructor = a.constructor;
    a.constructor.superclass = b.prototype;
    a.constructor.inherit = J.inherit;
    return a.constructor
  };
  k.forEachKey = function (a, b, c) {
    for (var d in a) a.hasOwnProperty(d) && b.call(c, d, a[d], a)
  };
  k.isEqual = function (a, b) {
    var c = !0;
    k.forEachKey(a, function (a, f) {
      b.hasOwnProperty(a) && b[a] === f || (c = !1)
    });
    if (!c) return c;
    k.forEachKey(b, function (b, f) {
      a.hasOwnProperty(b) && a[b] === f || (c = !1)
    });
    return c
  };
  k.getNativeFunction = function (a, b) {
    b = b || m;
    var c = b.constructor && b.constructor.prototype && b.constructor.prototype[a] || b[a];
    try {
      if (c && c.apply) return function () {
        return c.apply(b, arguments)
      }
    } catch (d) {
      return b[a]
    }
    return c
  };
  k.setTimeout = function (a, b, c) {
    return k.getNativeFunction("setTimeout")(F(a, c || "setTimeout"),
      b)
  };
  var y = J.inherit({
    _initComponent: function () {
      y.superclass._initComponent.apply(this, arguments);
      this._listeners = []
    },
    on: function (a, b, c, d, f) {
      f = y._getOpts(f);
      b = b.split(",");
      var l = b.length,
        g = this._listeners,
        n;
      for (n = 0; n < l; n++) {
        var r = b[n];
        var k = F(function (a) {
          c.call(d || this, a || m.event)
        }, "on" + (r || "") + (f.name || ""));
        g[g.length] = [a, r, c, d, f, k];
        a.addEventListener ? a.addEventListener(r, k, y._prepOpts(f)) : a.attachEvent && a.attachEvent("on" + r, k)
      }
    },
    un: function (a, b, c, d, f) {
      f = y._getOpts(f);
      var l = this._listeners,
        g = l.length,
        n;
      for (n = 0; n < g; n++) {
        var r = l[n];
        if (r[0] == a && r[1] == b && r[2] == c && r[3] == d && k.isEqual(r[4], f)) {
          l.splice(n, 1);
          this._removeListener(a, b, r[5], f);
          break
        }
      }
    },
    unAll: function () {
      var a = this._listeners,
        b = a.length,
        c;
      for (c = 0; c < b; c++) {
        var d = a[c];
        this._removeListener(d[0], d[1], d[5], d[4])
      }
      a.length = 0
    },
    _removeListener: function (a, b, c, d) {
      a.removeEventListener ? a.removeEventListener(b, c, y._prepOpts(d)) : a.detachEvent && a.detachEvent("on" + b, c)
    }
  });
  y.supportsPassive = function () {
    if (y._supportsPassive !== w) return y._supportsPassive;
    y._supportsPassive = !1;
    try {
      var a = Object.defineProperty({}, "passive", {
        get: function () {
          return y._supportsPassive = !0
        }
      });
      m.addEventListener("test", null, a)
    } catch (b) {}
    return y._supportsPassive
  };
  y._getOpts = function (a) {
    return k.mixin({
      capture: !0,
      passive: !0
    }, a || {})
  };
  y._prepOpts = function (a) {
    return y.supportsPassive() ? a : !!a.capture
  };
  y.on = function () {
    y._instance || (y._instance = new y);
    y._instance.on.apply(y._instance, arguments)
  };
  y.un = function () {
    y._instance && y._instance.un.apply(y._instance, arguments)
  };
  var x = {
    UNLOAD_MS: 0,
    isPerfomance: m.performance &&
      m.performance.timing && m.performance.timing.navigationStart && m.performance.now,
    getMs: function () {
      return 0 < this.UNLOAD_MS ? this.UNLOAD_MS : this.isPerfomance ? Math.round(m.performance.timing.navigationStart + m.performance.now()) : x.oldMs()
    },
    getFormStart: function () {
      return this.isPerfomance ? Math.round(m.performance.now()) : this.getMs() - this.initTime
    }
  };
  x.oldMs = Date.now ? Date.now : function () {
    return (new Date).getTime()
  };
  x.initTime = x.getMs();
  y.on(m, "beforeunload,unload", function () {
    0 === x.UNLOAD_MS && (x.UNLOAD_MS = x.getMs())
  });
  k.pad = function (a) {
    return (10 > a ? "0" : "") + a
  };
  x.getTimestamp = function () {
    var a = new Date;
    a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()];
    var b = "",
      c;
    for (c = 0; c < a.length; c++) b += k.pad(a[c]);
    return b
  };
  x.getTimezone = function () {
    return -(new Date).getTimezoneOffset()
  };
  x.getMinutes = function () {
    return Math.floor(this.getMs() / 1E3 / 60)
  };
  x.getSeconds = function () {
    return Math.round(this.getMs() / 1E3)
  };
  x.isPerfomance || (x.deltaTime = 0, x.lastNowTime = 0, x.correctTime = 0, x.timeCorrector = function (a) {
    x.correctTime =
      x.getMs();
    a && x.correctTime < x.lastTime && (x.deltaTime += a - x.correctTime + 20);
    k.setTimeout(function () {
      x.timeCorrector(x.correctTime)
    }, 20, "timeCorrector")
  });
  x.initCorrector = function () {
    x.isPerfomance || x.timeCorrector(0)
  };
  x.nowTime = function () {
    if (this.isPerfomance) return this.getMs();
    var a = this.getMs() + x.deltaTime;
    a < x.lastNowTime && (a += x.lastNowTime + 10);
    return x.lastNowTime = a
  };
  x.nowEventTime = function () {
    return Math.round((x.nowTime() - x.initTime) / 50)
  };
  k.toString = function (a) {
    return Object.prototype.toString.call(a)
  };
  k.isFunction = function (a) {
    return "function" === typeof a
  };
  k.isArray = function (a) {
    return k.isFunction(Array.isArray) ? Array.isArray(a) : "[object Array]" === k.toString(a)
  };
  k.mergeArrays = function (a) {
    var b, c, d = arguments.length;
    for (b = 1; b < d; b++) {
      var f = arguments[b];
      if (k.isArray(f) || f && "[object Arguments]" === f.toString())
        for (c = 0; c < f.length; c++) a[a.length] = f[c]
    }
    return a
  };
  k.defer = function (a, b, c, d, f) {
    return k.setTimeout(function () {
      a.apply(c, d || [])
    }, b, f)
  };
  k.throttle = function (a, b, c, d) {
    var f, l, g;
    return function () {
      l = arguments;
      g = this;
      f || function () {
        f = null;
        l && (a.apply(c || g, l), l = null, f = k.setTimeout(arguments.callee, b, d))
      }()
    }
  };
  var Aa = J.inherit({
      storage: null,
      storageKey: "dataBuffer",
      store: {
        _keys: [],
        _values: [],
        get: function (a) {
          a = k.arrayIndexOf(this._keys, a);
          return -1 == a ? null : this._values[a]
        },
        set: function (a, b) {
          this._keys.push(a);
          this._values.push(b)
        },
        pop: function (a) {
          a = k.arrayIndexOf(this._keys, a);
          if (-1 == a) return null;
          var b = this._values[a];
          this._keys.splice(a, 1);
          this._values.splice(a, 1);
          return b
        }
      },
      maxBufferSize: 255,
      flushTimeout: 1E4,
      startBufferTime: 0,
      active: !0,
      meta: null,
      onFlush: function () {},
      onFlushCtx: null,
      bufferExpireTime: 864E5,
      _initComponent: function () {
        var a;
        Aa.superclass._initComponent.apply(this, arguments);
        this.wrappers = [];
        this._data = [];
        this._packetNumber = 0;
        this._flushTID = null;
        this._saveToStorageThrottled = k.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
        this.storage && (a = this.storage.get(this.storageKey)) && a.data && a.meta && a.time && a.time + this.bufferExpireTime > +x.getMs() && this.onFlush.call(this.onFlushCtx ||
          this, this.dataFromStorage(a.data), a.meta, a.pnum);
        this.clear()
      },
      setWVType: function (a) {
        this.wvType = a;
        this._sender.version = a
      },
      getFlushSize: function () {
        return this._data.length
      },
      mergeData: function (a, b) {
        k.mergeArrays(a, b)
      },
      updateStamp: function (a, b) {
        a.stamp !== w && (b.stamp = a.stamp, "eof" !== a.type && delete a.stamp)
      },
      append: function (a, b) {
        this.mergeData(this._data, a);
        this._saveToStorageThrottled();
        this.active && ((b || this.getFlushSize() >= this.maxBufferSize || this.getFlushSize() === this.maxChunkSize) && this._flush(b),
          this._flushTID || (this._flushTID = k.defer(this._flush, this.flushTimeout, this, [b], "DataBuffer._flush")))
      },
      activate: function () {
        this.active || (this.active = !0, this.append([]))
      },
      clear: function () {
        this._data.length = 0;
        this._flushTID = null;
        this.storage && this.storage.remove(this.storageKey)
      },
      _flush: function (a) {
        if (!this.getFlushSize()) return this.clear(), !1;
        this.onFlush.call(this.onFlushCtx || this, this._data, this.meta, this._packetNumber, a);
        this._packetNumber++;
        this.clear()
      },
      dataFromStorage: function (a) {
        return a
      },
      dataToStorage: function (a) {
        return a
      },
      _saveToStorage: function () {
        this.storage && this._data.length && this.storage.set(this.storageKey, {
          data: this.dataToStorage(this._data),
          meta: this.meta,
          pnum: this._packetNumber,
          time: x.getMs()
        })
      }
    }),
    zb = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" ");
  var ra = ["mc.webvisor.org", "mc.yandex.ru"];
  var D = {
    storage: {},
    init: function () {
      var a = this;
      F(function () {
        m.Ya = m.Ya || {};
        m.Ya._metrika = m.Ya._metrika || {};
        a.storage = m.Ya._metrika
      }, "", !0)();
      return this
    },
    setSafe: function (a,
      b) {
      var c = this;
      F(function () {
        c.storage[a] === w && (c.storage[a] = b)
      }, "", !0)();
      return this
    },
    set: function (a, b) {
      F(function () {
        m.Ya._metrika[a] = b
      }, "", !0)();
      return this
    },
    get: function (a, b) {
      return F(function () {
        var c = m.Ya._metrika[a];
        return c === w ? b : c
      }, "", !0)()
    }
  };
  k.async = function (a, b, c) {
    if (m.postMessage) {
      var d = "__ym__promise" + Math.random() + "_" + x.getMs();
      var f = function (c) {
        try {
          var g = c.data
        } catch (n) {
          return
        }
        g === d && (c.stopPropagation && c.stopPropagation(), a.call(b), y.un(m, "message", f, null, {
          passive: !1
        }))
      };
      y.on(m, "message",
        f, null, {
          passive: !1,
          name: ".async." + (c || "")
        });
      m.postMessage(d, "*")
    } else k.setTimeout(function () {
      a.call(b)
    }, 0)
  };
  var N = J.inherit({
    counterId: "",
    onlyCurrentDomain: !1,
    skipPrefix: !1,
    _initComponent: function () {
      var a;
      N.superclass._initComponent.apply(this, arguments);
      this._domain = null;
      if (!this.onlyCurrentDomain) {
        var b = m.location.host.split(".");
        for (a = 2;;)
          if (a <= b.length) {
            if (this._domain = "." + b.slice(-a).join("."), a++, this.isEnabled()) break
          } else {
            this._domain = null;
            break
          }
      }
    },
    create: function (a, b, c) {
      a = [this._prepareName(a) +
        "\x3d" + encodeURIComponent(b)
      ];
      c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a.push("expires\x3d" + b.toGMTString()));
      this._domain && a.push("domain\x3d" + this._domain);
      a.push("path\x3d/");
      try {
        t.cookie = a.join(";")
      } catch (d) {}
    },
    read: function (a) {
      try {
        var b = t.cookie
      } catch (c) {}
      return b && b.match(new RegExp("(?:^|;\\s*)" + this._prepareName(a) + "\x3d([^;]*)")) ? decodeURIComponent(RegExp.$1) : null
    },
    erase: function (a) {
      this.create(a, "", -1)
    },
    isEnabled: function () {
      this.create("metrika_enabled", "1", 60);
      var a = !!this.read("metrika_enabled");
      this.erase("metrika_enabled");
      return a
    },
    _prepareName: function (a) {
      return (this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
    }
  });
  N.get = function (a) {
    return (new N({
      onlyCurrentDomain: !0
    })).read(a)
  };
  N.set = function (a, b, c) {
    return (new N({
      onlyCurrentDomain: !0
    })).create(a, b, c)
  };
  N.isEnabled = function () {
    return (new N({
      onlyCurrentDomain: !0
    })).isEnabled()
  };
  k._hasIndexOf = [].indexOf && 0 === [w].indexOf(w);
  k.arrayIndexOf = k._hasIndexOf ? function (a, b) {
    return a.indexOf(b)
  } : function (a, b) {
    var c;
    for (c = 0; c < a.length; c++)
      if (a[c] ===
        b) return c;
    return -1
  };
  k.map = function (a, b) {
    var c, d = [];
    for (c = 0; c < b.length; c++) d.push(a(b[c], c));
    return d
  };
  var Va = J.inherit({
    hostIndexCookieName: "hostIndex",
    hosts: ra.slice(),
    HOSTS_DELIMITER: ",",
    COUNTERS_DELIMITER: "-",
    INDEX: 0,
    SUCCESS_COUNTER: 1,
    _initComponent: function () {
      this.cookie = new N
    },
    readCookie: function () {
      var a = this.cookie.read(this.hostIndexCookieName),
        b, c = this;
      if (null === a) this.hostsInfo = k.map(function (a, b) {
        return [b, 0].join(c.COUNTERS_DELIMITER)
      }, ra);
      else
        for (this.hostsInfo = a.split(this.HOSTS_DELIMITER),
          b = 0; b < this.hostsInfo.length; b++) a = this.hostsInfo[b].split(this.COUNTERS_DELIMITER), 1 < parseInt(a[this.SUCCESS_COUNTER], 10) && (this.cookieIndex = parseInt(a[this.INDEX], 10));
      this.cookieIndex === w && (this.cookieIndex = 1);
      this.selectedHost = ra[this.cookieIndex];
      return this
    },
    getUrls: function (a) {
      var b = this,
        c = ra.slice();
      this.readCookie();
      var d = this.cookieIndex;
      c[0] = [c[d], c[d] = c[0]][0];
      this.hosts = c;
      return k.map(function (c) {
        return [b.protocol, "//", c, "/", a].join("")
      }, c)
    },
    onSuccess: function (a, b) {
      var c = k.arrayIndexOf(ra,
          this.hosts[a]),
        d = this;
      "beacon" !== b && this.cookieIndex !== w && c !== this.cookieIndex && this.cookie.create(this.hostIndexCookieName, k.map(function (a) {
        a = a.split(d.COUNTERS_DELIMITER);
        c == a[d.INDEX] && (a[d.SUCCESS_COUNTER] = parseInt(a[d.SUCCESS_COUNTER], 10) + 1);
        return [a[d.INDEX], a[d.SUCCESS_COUNTER]].join(d.COUNTERS_DELIMITER)
      }, this.hostsInfo).join(d.HOSTS_DELIMITER), 1440)
    }
  });
  Va.isEnabled = function () {
    return 1 != (new Va).readCookie().cookieIndex
  };
  var Yb = J.inherit({
      transports: [],
      globalConfig: D,
      postParams: [],
      isDisabled: function () {
        return this.globalConfig.get("oo")
      },
      send: function (a, b, c, d) {
        var f = [a],
          l = this,
          g = c || function () {};
        if (l.isDisabled()) g.call(d);
        else {
          var n = new Va({
            protocol: this.protocol
          });
          this.forceHost ? f = [
            [this.protocol, "//", this.forceHost, "/", a].join("")
          ] : ra && (f = n.getUrls(a));
          (function p(a) {
            if (a < this.transports.length) try {
              var c = new this.transports[a]({
                timeout: this.timeout,
                postParams: this.postParams,
                queryStringParams: this.queryStringParams
              });
              b["browser-info"] = c.logInfo(b["browser-info"]);
              (function e(h) {
                h >= f.length ? c.blockNext() || p.call(this, a + 1) : c.request(f[h],
                  b,
                  function (a, b, f) {
                    a ? (g.call(d, b, f), n.onSuccess(h, c.id)) : k.async(function () {
                      e.call(l, h + 1)
                    }, this, "senderCall")
                  }, this)
              }).call(this, 0)
            } catch (q) {
              sa(q, "send by " + (c && c.id)), p.call(this, a + 1)
            }
          }).call(this, 0)
        }
      }
    }),
    Ba = {};
  k.keys = function (a) {
    var b, c = [];
    for (b in a) a.hasOwnProperty(b) && c.push(b);
    return c
  };
  Ba.stringify = function (a, b) {
    var c = [],
      d = b || {},
      f = {},
      l = k.keys(a).length,
      g, n;
    if (d.lastOrdering !== w)
      for (n = 1; n <= b.lastOrdering.length; n++) f[b.lastOrdering[n - 1]] = l + n;
    if (d.firstOrdering !== w)
      for (n = 0; n < b.firstOrdering.length; n++) f[b.firstOrdering[n]] =
        n;
    for (g in a)
      if (a.hasOwnProperty(g))
        if (d = a[g], k.isArray(d))
          for (n = 0; n < d.length; n++) c.push({
            key: g,
            value: encodeURIComponent(g) + "\x3d" + encodeURIComponent(String(d[n]))
          });
        else c.push({
          key: g,
          value: encodeURIComponent(g) + "\x3d" + encodeURIComponent(String(d))
        });
    c.sort(function (a, b) {
      var c = f[a.key],
        d = f[b.key];
      "undefined" === typeof c && (c = l);
      "undefined" === typeof d && (d = l);
      return c - d
    });
    return k.map(function (a) {
      return a.value
    }, c).join("\x26")
  };
  k.inArray = function (a, b) {
    var c;
    for (c = 0; c < a.length; c++)
      if (a[c] == b) return !0;
    return !1
  };
  var Ca = J.inherit({
      postParams: [],
      timeout: 1E4,
      index: 0,
      blockNext: function () {
        return !1
      },
      logInfo: function (a) {
        var b;
        if (a) return a = (b = a.match(/^ti:\d:/)) ? a.replace(b[0], "") : a, "ti:" + this.index + ":" + a
      },
      _buildUrl: function (a, b) {
        var c = Ba.stringify(b, this.queryStringParams);
        return a + (-1 < a.indexOf("?") ? "\x26" : c ? "?" : "") + c
      },
      _splitParams: function (a) {
        var b = {},
          c = {};
        k.forEachKey(a, function (a, f) {
          k.inArray(this.postParams, a) ? c[a] = f : b[a] = f
        }, this);
        return {
          get: b,
          post: c
        }
      },
      _parseResp: function (a) {
        return a
      }
    }),
    Wa = Ca.inherit({
      id: "XHR",
      index: 7,
      method: "POST",
      withCredentials: !0,
      blockNext: function () {
        return !m.XMLHttpRequest || navigator.platform.match(/Win/) ? !1 : "withCredentials" in new m.XMLHttpRequest
      },
      request: function (a, b, c, d) {
        var f = this,
          l;
        if (/[^a-z0-9.:-]/.test(L.host) && m.opera && "function" === typeof m.opera.version) {
          var g = m.opera.version();
          if ("string" === typeof g && "12" === g.split(".")[0]) return c.call(d, !1)
        }
        if (m.XMLHttpRequest) {
          var n = new XMLHttpRequest;
          if ("withCredentials" in n) {
            b = this._splitParams(b);
            a = this._buildUrl(a, b.get);
            try {
              n.open(this.method,
                a, !0)
            } catch (r) {
              return c.call(d, !1)
            }
            n.withCredentials = this.withCredentials;
            this._setHeaders(n);
            n.send(this._preparePostParams(b));
            n.onreadystatechange = function () {
              if (4 === n.readyState) {
                try {
                  l = f._parseResp(n.responseText)
                } catch (r) {
                  return c.call(d, !1)
                }
                c.apply(d, [200 === n.status].concat(l))
              }
            };
            this._timeOutCheck(n, c, d);
            return
          }
        }
        c.call(d, !1)
      },
      _timeOutCheck: function (a, b, c) {
        this.timeout && (a.timeout = this.timeout, k.setTimeout(function () {
          a.abort ? a.abort() : b.call(c, !1)
        }, this.timeout + 100))
      },
      setMethod: function (a) {
        this.method =
          a
      },
      _preparePostParams: function (a) {
        return Ba.stringify(a.post)
      },
      _setHeaders: function (a) {
        a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
      }
    }),
    z = {};
  k.memorize = function (a, b) {
    var c = "memorize";
    return function () {
      "memorize" === c && (c = a.apply(b || this, arguments));
      return c
    }
  };
  z.isAndroidWebView = F(function () {
    var a = navigator.userAgent || "";
    return a.match(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]/) || a.match(/Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*/) ||
      a.match(/; wv\).*Chrome\/[0-9][0-9.]*\sMobile/)
  }, "isAndroidWebView");
  var Zb = Ca.inherit({
    id: "beacon",
    index: 1,
    request: function (a, b, c, d) {
      "function" === typeof navigator.sendBeacon && !z.isAndroidWebView() && navigator.onLine ? (b = this._splitParams(b), b.get["force-urlencoded"] = 1, c.call(d, navigator.sendBeacon(this._buildUrl(a, b.get), Ba.stringify(b.post)))) : c.call(d, !1)
    }
  });
  k.random = function (a, b) {
    2 > arguments.length && (b = a, a = 0);
    1 > arguments.length && (b = 1073741824);
    return Math.floor(Math.random() * (b - a)) + a
  };
  var Xa = Ca.inherit({
      id: "form",
      index: 2,
      enctype: "application/x-www-form-urlencoded",
      htmlfileOnly: !1,
      _initComponent: function () {
        Xa.superclass._initComponent.apply(this, arguments);
        "_htmlfile" in Xa.prototype || (Xa.prototype._htmlfile = this._createHtmlfile());
        this._doc = this._htmlfile || (this.htmlfileOnly ? null : t)
      },
      request: function (a, b, c, d) {
        var f = this._doc;
        if (!f) return c.call(d, !1);
        b = this._splitParams(b);
        var l = "ifr" + k.random();
        var g = f.createElement("div");
        g.style.position = "absolute";
        g.style.left = "-99999px";
        g.style.top = "-99999px";
        var n = ['\x3ciframe name\x3d"',
          l, '"\x3e\x3c/iframe\x3e', '\x3cform action\x3d"', this._buildUrl(a, b.get), '" method\x3d"post" target\x3d"', l, '" enctype\x3d"', this.enctype, '"\x3e'
        ];
        k.forEachKey(b.post, function (a) {
          k.mergeArrays(n, ['\x3cinput type\x3d"hidden" autocomplete\x3d"off" autocorrect\x3d"off"', ' autocapitalize\x3d"off" spellcheck\x3d"false" name\x3d"', a, '"/\x3e'])
        });
        k.mergeArrays(n, ["\x3c/form\x3e"]);
        g.innerHTML = n.join("");
        f.body.appendChild(g);
        var r = g.getElementsByTagName("form")[0];
        k.forEachKey(b.post, function (a, b) {
          r[a].value =
            b
        });
        r.submit();
        k.setTimeout(function () {
          f.body.removeChild(g)
        }, 1E4, "TransportForm.request.2");
        return c.call(d, !0, "tf.request")
      },
      _createHtmlfile: function () {
        try {
          if (m.ActiveXObject) {
            var a = new ActiveXObject("htmlfile");
            a.open();
            a.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
            a.close();
            return a
          }
        } catch (b) {}
        return null
      }
    }),
    $b = Xa.inherit({
      id: "htmlfile",
      index: 3,
      htmlfileOnly: !0
    }),
    Da = Ca.inherit({
      id: "img",
      index: 4,
      request: function (a, b, c, d) {
        a = this._buildUrl(a, b);
        var f = !1;
        b = t.createElement("img");
        c =
          c || function () {};
        b.onload = F(function () {
          f || (c.call(d, !0), f = !0)
        }, "TransportImage.request");
        b.onerror = F(function () {
          f || (c.call(d, !1), f = !0)
        }, "TransportImage.request");
        b.src = a;
        this.timeout && k.setTimeout(function () {
          f || (c.call(d, !1), f = !0)
        }, this.timeout, "ti.request")
      }
    }),
    ba = {
      stringify: function (a) {
        try {
          var b = JSON.stringify(a)
        } catch (c) {}
        return k.inArray(["{}", w], b) ? "null" : b
      }
    };
  k.toJSON = function (a) {
    var b;
    if (a === w) return "";
    if (null === a) return "null";
    switch (a.constructor) {
      case Boolean:
        return a.toString();
      case Number:
        return isFinite(a) ?
          a.toString() : "null";
      case String:
        return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
      case Array:
        var c = [];
        var d = 0;
        for (b = a.length; d < b; d++) c[c.length] = k.toJSON(a[d]);
        return "[" + c.join(",") + "]";
      case Object:
        c = [];
        for (d in a) a.hasOwnProperty(d) && a[d] !== w && (c[c.length] = k.toJSON(d) + ":" + k.toJSON(a[d]));
        return "{" + c.join(",") + "}";
      default:
        return ba.stringify(a)
    }
  };
  var ia = J.inherit({
    counterId: "",
    _initComponent: function () {
      ia.superclass._initComponent.apply(this, arguments);
      this._ls = null;
      try {
        this._ls = m.localStorage
      } catch (a) {}
    },
    set: function (a, b) {
      if (this.isEnabled()) try {
        !b || b && k.isArray(b) && !b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), k.toJSON(b))
      } catch (c) {}
    },
    get: function (a) {
      if (this.isEnabled()) try {
        return JSON.parse(this._ls.getItem(this._getLsKey(a)))
      } catch (b) {}
      return null
    },
    remove: function (a) {
      if (this.isEnabled()) try {
        this._ls.removeItem(this._getLsKey(a))
      } catch (b) {}
    },
    isEnabled: function () {
      return this._ls && m.JSON && "object" == typeof this._ls && "object" == typeof m.JSON
    },
    getStorageId: function () {
      var a = this.get("lsid");
      a || (a = Math.round(Math.random() * x.getMs()), this.set("lsid", a));
      return a
    },
    clearStorageId: function () {
      this.remove("lsid")
    },
    _getLsKey: function (a) {
      return "_ym_alt" + this.counterId + "_" + a
    }
  });
  k.fnv32a = function (a) {
    var b = 2166136261,
      c;
    var d = 0;
    for (c = a.length; d < c; ++d) b ^= a.charCodeAt(d), b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
    return b >>> 0
  };
  k.clearTimeout = function (a) {
    return k.getNativeFunction("clearTimeout")(a)
  };
  k.getTld = function () {
    if (!this._tld) {
      var a = L.hostname.split(".");
      this._tld = a[a.length - 1]
    }
    return this._tld
  };
  var W = {
      abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      tail: "+/\x3d",
      tailSafe: "*-_",
      encode: function (a, b) {
        var c = (W.abc + (b ? W.tailSafe : W.tail)).split(""),
          d = a.length,
          f = [],
          l = d - d % 3,
          g;
        for (g = 0; g < l; g += 3) {
          var n = (a[g] << 16) + (a[g + 1] << 8) + a[g + 2];
          k.mergeArrays(f, [c[n >> 18 & 63], c[n >> 12 & 63], c[n >> 6 & 63], c[n & 63]])
        }
        switch (d - l) {
          case 1:
            n = a[l] << 4;
            k.mergeArrays(f, [c[n >> 6 & 63], c[n & 63], c[64], c[64]]);
            break;
          case 2:
            n = (a[l] << 10) + (a[l + 1] << 2), k.mergeArrays(f, [c[n >> 12 & 63],
              c[n >> 6 & 63], c[n & 63], c[64]
            ])
        }
        return f.join("")
      },
      decode: function (a, b) {
        for (var c = W.abc + (b ? W.tailSafe : W.tail), d = 0, f = "", l, g, n, k, u; a.length % 4;) a += "\x3d";
        do {
          l = c.indexOf(a.charAt(d++));
          g = c.indexOf(a.charAt(d++));
          k = c.indexOf(a.charAt(d++));
          u = c.indexOf(a.charAt(d++));
          if (0 > l || 0 > g || 0 > k || 0 > u) return null;
          n = l << 18 | g << 12 | k << 6 | u;
          l = n >> 16 & 255;
          g = n >> 8 & 255;
          n &= 255;
          f = 64 == k ? f + String.fromCharCode(l) : 64 == u ? f + String.fromCharCode(l, g) : f + String.fromCharCode(l, g, n)
        } while (d < a.length);
        return f
      }
    },
    Ia = {
      encode: function (a) {
        var b = [],
          c;
        var d =
          0;
        for (c = a.length; d < c; d++) {
          var f = a.charCodeAt(d);
          128 > f ? b.push(f) : (127 < f && 2048 > f ? b.push(f >> 6 | 192) : (b.push(f >> 12 | 224), b.push(f >> 6 & 63 | 128)), b.push(f & 63 | 128))
        }
        return b
      }
    };
  k.isNativeFunction = function (a, b) {
    return a && "function" === typeof a ? (new RegExp("function\\s*" + b + "\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}", "i")).test(a.toString()) : !1
  };
  var v = {
    removeNode: function (a) {
      var b = a && a.parentNode;
      b && b.removeChild(a)
    }
  };
  z.isSafariWebView = F(function () {
    var a = navigator.userAgent || "";
    return navigator.vendor &&
      -1 < navigator.vendor.indexOf("Apple") && (!a.match(/Safari/) && a.match(/Mobile/) || a.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== a.indexOf("FB_IAB") || -1 !== a.indexOf("FBAV") || -1 !== a.indexOf("OKApp") || -1 !== a.indexOf("GSA/"))
  }, "isSafariWebView");
  z.isSafari = function () {
    try {
      return navigator.vendor && -1 < navigator.vendor.indexOf("Apple") && navigator.userAgent && !navigator.userAgent.match("CriOS")
    } catch (a) {}
    return !1
  };
  z.getMacOSVersion = F(function () {
    var a = navigator.userAgent.match(/Mac OS X ([0-9]+)_([0-9]+)_([0-9]+)/);
    return a ? [+a[1], +a[2], +a[2]] : [0, 0, 0]
  }, "", !0);
  z.getPlatform = F(function () {
    return "" + navigator.platform
  }, "", !0);
  z.isIOS = F(function () {
    var a = z.getPlatform() || "";
    return "iPhone" === a || "iPad" === a
  }, "", !0);
  z.getITPYaBroVersion = function () {
    var a = /\sYptp\/\d\.(\d+)\s/,
      b = null;
    m.navigator && navigator.userAgent && (a = a.exec(navigator.userAgent)) && 1 < a.length && (b = parseInt(a[1], 10));
    return b
  };
  z.edgVersion = k.memorize(function () {
    var a = null;
    var b = /Edg\/(\d+)\./;
    m.navigator && navigator.userAgent && (b = navigator.userAgent.match(b)) &&
      1 < b.length && (a = parseInt(b[1], 10));
    return a
  });
  z.isFF = F(function (a) {
    var b = !1;
    m && m.document && m.document.documentElement && m.document.documentElement.style && (b = "MozAppearance" in m.document.documentElement.style && "undefined" !== typeof m.InstallTrigger);
    if (b && a && m.navigator && m.navigator.userAgent && m.navigator.userAgent.match) {
      var c = m.navigator.userAgent.match(/Firefox\/([0-9]+)/);
      b = !1;
      c && c.length && (c = +c[1], b = c >= a)
    }
    return b
  }, "isFF");
  var Ea = {
      _storage: new ia,
      globalConfig: null,
      key: "zzlc",
      userInfo: "",
      updateInfo: function (a) {
        k.forEachKey(this.getInfoFlags(),
          function (b, c) {
            var d = c.call(this);
            d && (a[b] = d)
          }, this);
        return a
      },
      getYm: function () {
        var a = this._storage.get(this.ymKey) || {};
        return a.resp ? a.resp : this.genYm.call(this, a)
      },
      getYmD: function () {
        var a = this._storage.get(this.ymKey) || {};
        if (a.dmn) return a.dmn
      },
      getZZ: function () {
        return this._storage.get(this.key) ? this._storage.get(this.key) : this.zz
      },
      getPP: function () {
        return this.globalConfig && this.globalConfig.get("pp") ? this.globalConfig.get("pp") : this.pp
      },
      getPU: function () {
        return this.globalConfig && this.globalConfig.get("pu") ?
          this.globalConfig.get("pu") : this.pu
      },
      getFip: function () {
        if (this._storage.get(this.fipKey)) return this._storage.get(this.fipKey)
      },
      getInfoFlags: function () {
        return {
          pi: this.getYm,
          pid: this.getYmD,
          zz: this.getZZ,
          pp: this.getPP,
          pu: this.getPU,
          fip: this.getFip
        }
      },
      checkVersion: function () {
        var a = z.edgVersion();
        var b = z.getITPYaBroVersion();
        if (this.globalConfig.get("isEU")) return 1;
        if (50 <= b && 99 >= b || a && 79 <= a) return 0;
        a = z.getMacOSVersion();
        return !((z.isIOS() || 10 <= a[0] && 13 <= a[2]) && z.isSafari()) || z.isSafariWebView()
      },
      noop: function () {},
      genPu: function (a) {
        var b = k.fnv32a(m.location.host) + this.userInfo;
        this.pu = b;
        a.set("pu", b);
        return b
      },
      ymKey: "pi",
      genYm: function (a) {
        var b = this,
          c = M(),
          d = x.getMinutes();
        if (!this.checkVersion() && m.fetch && this._storage.get("retryReqs") && "yandex.ru" == c.hostname && "/" == c.pathname && !(a.lt && a.lt + 1440 > d)) {
          a.lt = d;
          c = ["auto.ru/daiku", "thequestion.ru/daiku", "www.kinopoisk.ru/daiku", "www.maximonline.ru/_ym"];
          var f = c[k.random(0, c.length)];
          fetch("//" + f, {
            credentials: "include"
          }).then(function (a) {
            return a.json()
          }).then(function (c) {
            c &&
              (a.resp = c._ym_uid, a.dmn = W.encode(Ia.encode(f)), b._storage.set(b.ymKey, a))
          })["catch"](function () {
            b._storage.set(b.ymKey, a)
          })
        }
      },
      initPU: function (a, b) {
        var c = this;
        var d = z.isFF(68);
        this.globalConfig = b;
        b.get("pu") !== w || this.checkVersion() && !d || (b.setSafe("pu", null), a.addHandler("gpu-get", function () {
          return {
            type: "gpu-get",
            pu: b.get("pu")
          }
        }, this), m.opener ? (d = k.setTimeout(function () {
          c.genPu(b)
        }, 200, "pu"), a.sendToIframe(m.opener, {
          type: "gpu-get"
        }, this.handleGpu(d), this)) : this.genPu(b))
      },
      handleGpu: function (a) {
        return function (b) {
          b =
            b.pu;
          k.clearTimeout(a);
          b && (this.pu = b, this.globalConfig.set("pu", b))
        }
      },
      onicecandidate: F(function (a) {
        var b;
        try {
          var c = (b = a.localDescription.sdp) && b.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
        } catch (d) {
          a.onicecandidate = this.noop;
          "closed" !== a.iceConnectionState && a.close();
          return
        }
        c && 0 < c.length && (this.pp = k.fnv32a(c[1]), this.globalConfig.set("pp", this.pp));
        a.onicecandidate = this.noop;
        a.close()
      }, "wrt"),
      onOffer: function (a, b) {
        k.isFunction(a.setLocalDescription) && a.setLocalDescription(b, this.noop, this.noop)
      },
      initPP: F(function (a) {
        var b =
          m.RTCPeerConnection || m.mozRTCPeerConnection || m.webkitRTCPeerConnection;
        this.globalConfig = a;
        if (m.navigator.onLine && b && a.get("pp") == w && (this.globalConfig.setSafe("pp", null), b && b.prototype && b.prototype.constructor && b.prototype.constructor.name)) {
          try {
            var c = new b({
              iceServers: []
            });
            c.createDataChannel("y.metrika")
          } catch (f) {
            return
          }
          if (k.isFunction(c.createOffer) && !c.createOffer.length) {
            try {
              var d = c.createOffer()
            } catch (f) {
              return
            }
            k.isFunction(d.then) && d.then(k.bind(this.onOffer, this, c));
            c.onicecandidate = k.bind(this.onicecandidate,
              this, c)
          }
        }
      }, "rcinit"),
      initZZ: function () {
        var a = "ru";
        var b = z.isFF(68);
        var c = this;
        this.getZZ() || this.checkVersion() && !b || (b && (a = "md"), b = k.getNativeFunction("createElement", t)("iframe"), b.style.display = "none", b.style.width = "1px", b.style.height = "1px", b.style.visibility = "hidden", b.src = "https://mc.yandex." + a + W.decode("L21ldHJpa2EvenpsYy5odG1s"), m.document.documentElement.appendChild(b), y.on(m, "message", this.onMessage, this, {
          passive: !1
        }), this.frame = b, this.timeout = k.setTimeout(function () {
          y.un(m, "message", c.onMessage,
            c, {
              passive: !1
            });
          v.removeNode(c.frame);
          c.zz = "na"
        }, 3E3, "cd.initZZ"))
      },
      onMessage: function (a) {
        a.data && a.data.substr && "__ym__zz" === a.data.substr(0, 8) && (this.zz = a.data.substr(8), v.removeNode(this.frame), this._storage.set(this.key, this.zz), y.un(m, "message", this.onMessage, this, {
          passive: !1
        }), k.clearTimeout(this.timeout))
      },
      fipKey: "fip",
      fpFactors: ["webGL", "plugins", "applePay", "dnt"],
      initFip: function () {
        if (Object.keys && !this.checkVersion() && !this._storage.get(this.fipKey)) {
          var a = new lb(k.reduce(function (a, c) {
            a[c] =
              1;
            return a
          }, {}, this.fpFactors));
          a = a.toString(!1).join("-");
          this._storage.set(this.fipKey, a)
        }
      }
    },
    T = Yb.inherit({
      protocol: "",
      timeout: 4E3,
      queryStringParams: {
        firstOrdering: ["wmode", "callback", "cnt-class"],
        lastOrdering: ["browser-info"]
      },
      resource: "",
      counterId: "",
      counterType: 0,
      retry: !1,
      transports: [Zb, Wa, Da, $b],
      _initComponent: function () {
        T.superclass._initComponent.apply(this, arguments);
        this.retry && (this._storage = new ia)
      },
      send: function (a, b, c, d) {
        var f = this.globalConfig.get(ua.globalKey),
          l = this;
        f && 3 !== this.counterId ?
          f(function () {
            var g = l._registerRequest(a, b);
            l._sendSavedRequest(g, a, b, c, d)
          }, a) : (f = l._registerRequest(a, b), l._sendSavedRequest(f, a, b, c, d))
      },
      _sendSavedRequest: function (a, b, c, d, f) {
        var l = this.globalConfig.get("firstReqStatus"),
          g = b.forceNoRedirect;
        if ("process" == l) this.globalConfig.set("firstReqCallbacks", k.mergeArrays(this.globalConfig.get("firstReqCallbacks") || [], [
          [this, arguments]
        ]));
        else {
          l || this.globalConfig.set("firstReqStatus", "process");
          this.counterType && (b["cnt-class"] = this.counterType);
          this.globalConfig.get("pri") &&
            (c.pri = this.globalConfig.get("pri"));
          c.st = x.getSeconds();
          c.u = T._userID;
          this.globalConfig.get("isEU") || (c = Ea.updateInfo(c));
          c.hi = T._hostID;
          l = [this.resource, "/", this.counterId, g ? "/1" : ""].join("");
          delete b.forceNoRedirect;
          var n = [];
          c && (k.forEachKey(c, function (a, b) {
            "t" != a && k.mergeArrays(n, [a, b])
          }), c.t && k.mergeArrays(n, ["t", c.t]));
          n.length && (b["browser-info"] = n.join(":"));
          return T.superclass.send.call(this, l, b, function () {
            var b;
            this.globalConfig.set("firstReqStatus", "complete");
            this._unregisterRequest(a);
            var c = this.globalConfig.get("firstReqCallbacks");
            this.globalConfig.set("firstReqCallbacks", null);
            if (c)
              for (b = 0; b < c.length; b++) c[b][0]._sendSavedRequest.apply(c[b][0], c[b][1]);
            d && d.apply(f, arguments)
          }, this)
        }
      },
      _isRetryEnabled: function () {
        return this.retry && this._storage && this._storage.isEnabled()
      },
      _registerRequest: function (a, b) {
        var c;
        if (this._isRetryEnabled()) {
          b.rqnl = b.rqnl || 0;
          b.rqnl++;
          var d = this._storage.get("retryReqs") || {};
          for (c = 1; d[c];) c++;
          d[c] = {
            protocol: this.protocol,
            host: this.host,
            resource: this.resource,
            counterId: this.counterId,
            counterType: this.counterType,
            postParams: this.postParams,
            params: a,
            browserInfo: b,
            ghid: this.globalConfig.get("_globalMetrikaHitId"),
            time: x.getMs()
          };
          this._storage.set("retryReqs", d);
          return c
        }
      },
      _unregisterRequest: function (a) {
        if (a && this._isRetryEnabled()) {
          var b = this._storage.get("retryReqs") || {};
          b[a] && (delete b[a], this._storage.set("retryReqs", b))
        }
      },
      _getVersion: F(function () {
        return va
      }, "", !0)
    });
  T._storage = new ia;
  T.initCookie = function (a) {
    var b = new N({
        onlyCurrentDomain: "uid" !== a
      }),
      c = b.read(a),
      d = T._storage.get(a),
      f = !1,
      l = b.read("d"),
      g = x.getSeconds();
    d && !c && (c = d, f = !0, b.create(a, c, 525600), b.create("d", g, 525600));
    if (!c) c = g + "" + k.random(), b.create(a, c, 525600), b.create("d", g, 525600);
    else if (!l || 15768E3 < g - parseInt(l)) b.create(a, c, 525600), b.create("d", g, 525600);
    T._storage.set(a, c);
    T._hostID = b.read("hostIndex");
    T._userID = c;
    return f
  };
  T.retransmit = function (a) {
    var b = T._storage,
      c = b.get("retryReqs") || {},
      d;
    b.remove("retryReqs");
    k.forEachKey(c, function (b, c) {
      var g = x.getMs();
      a.get("firstReqStatus") ||
        a.set("firstReqStatus", "complete");
      c.ghid && c.ghid != a.get("_globalMetrikaHitId") && c.time && c.time + 1728E5 > g && 500 < g - c.time && 2 >= c.browserInfo.rqnl && (d = new T({
        protocol: c.protocol,
        host: c.host,
        resource: c.resource,
        counterId: c.counterId,
        counterType: c.counterType,
        postParams: c.postParams || [],
        retry: !0
      }), d.send(c.params, c.browserInfo))
    })
  };
  k.fletcher = function (a) {
    for (var b = a.length, c = 0, d = 255, f = 255, l, g, n; b;) {
      l = 21 < b ? 21 : b;
      b -= l;
      do g = "string" == typeof a ? a.charCodeAt(c) : a[c], c++, 255 < g && (n = g >> 8, g &= 255, g ^= n), d += g, f += d; while (--l);
      d = (d & 255) + (d >> 8);
      f = (f & 255) + (f >> 8)
    }
    a = (d & 255) + (d >> 8) << 8 | (f & 255) + (f >> 8);
    return 65535 == a ? 0 : a
  };
  k.arrayEvery = function (a, b, c) {
    var d;
    for (d = 0; d < a.length; d++)
      if (!b.call(c, a[d], d, a)) return !1;
    return !0
  };
  k.is4Bytes = function (a) {
    return !k.arrayEvery((encodeURIComponent(a).match(/(%[A-F,\d]{2})+/g) || []).join("").split("%"), function (a) {
      return 240 > parseInt(a, 16)
    })
  };
  k.trim = function (a, b) {
    a = String(a).replace(/^\s+|\s+$/g, "");
    b && a.length > b && (a = a.substr(0, b));
    return a
  };
  k.isNumber = function (a) {
    return isFinite(a) && !isNaN(a) &&
      "[object Number]" === k.toString(a)
  };
  k.isString = function (a) {
    return "[object String]" === k.toString(a)
  };
  k.warning = function () {
    m.console && "function" === typeof m.console.warn && console.warn.apply(console, arguments)
  };
  k.isObject = function (a) {
    try {
      return a && null !== a && "[object Object]" === k.toString(a)
    } catch (b) {
      return !1
    }
  };
  k._urlParser = null;
  k.parseUrl = function (a) {
    if (!this._urlParser) try {
      this._urlParser = t.createElement("a")
    } catch (b) {}
    return this._urlParser ? (this._urlParser.href = a, {
      protocol: this._urlParser.protocol,
      host: this._urlParser.host,
      port: this._urlParser.port,
      hostname: this._urlParser.hostname,
      hash: this._urlParser.hash,
      search: this._urlParser.search,
      query: this._urlParser.search.replace(/^\?/, ""),
      pathname: this._urlParser.pathname || "/",
      path: (this._urlParser.pathname || "/") + this._urlParser.search,
      href: this._urlParser.href
    }) : {}
  };
  k._playerRegexp = /^.+\.mtproxy\.yandex\.net$/;
  k.isMetrikaPlayer = function () {
    return "MetrikaPlayer" == m.name || this._playerRegexp.test(m.location.hostname)
  };
  v.getDocumentCharset = function () {
    return ("" +
      (t.characterSet || t.charset || "")).toLowerCase()
  };
  v.getBody = function () {
    for (var a = t.getElementsByTagName("body"); 0 < a.length;) return a[0]
  };
  v.getRootElement = function () {
    var a = t.documentElement,
      b = v.getBody();
    return "CSS1Compat" == t.compatMode ? a : b || a
  };
  v.getViewportSize = function () {
    var a = v.getRootElement();
    return [a.clientWidth || m.innerWidth, a.clientHeight || m.innerHeight]
  };
  v.getDocumentTitle = function () {
    var a = t.title;
    "string" != typeof a && (a = (a = t.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "");
    return a
  };
  z.getSilverlightVersion = k.memorize(function () {
    if (m.ActiveXObject) try {
      var a = new ActiveXObject("AgControl.AgControl");
      var b = function (a, b, d, f) {
        for (; c(a, b);) b[d] += f;
        b[d] -= f
      };
      var c = function (a, b) {
        return a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3])
      };
      var d = [1, 0, 0, 0];
      b(a, d, 0, 1);
      b(a, d, 1, 1);
      b(a, d, 2, 1E4);
      b(a, d, 2, 1E3);
      b(a, d, 2, 100);
      b(a, d, 2, 10);
      b(a, d, 2, 1);
      b(a, d, 3, 1);
      var f = d.join(".")
    } catch (l) {} else if (b = m.navigator, b = b.plugins && b.plugins["Silverlight Plug-In"]) f = b.description;
    return f || ""
  });
  z.getFlashVersion =
    k.memorize(function () {
      var a = m.navigator;
      if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
        var b = a.plugins["Shockwave Flash"];
        var c = b.version;
        if ((b = b.description) || c)
          if (a = a.mimeTypes, "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin) c ? z._flashVersion = c : b && (z._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
      } else if ("undefined" != typeof m.ActiveXObject) try {
        if (c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
          b = c.GetVariable("$version")) z._flashVersion = b.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, "")
      } catch (d) {}
      return z._flashVersion
    });
  z.getLanguage = k.memorize(function () {
    var a = (m.navigator ? navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage : "").toLowerCase();
    return k.isString(a) ? a : ""
  });
  z.getJavaEnabled = k.memorize(function () {
    try {
      return navigator.javaEnabled()
    } catch (a) {
      return !1
    }
  });
  z.getFingerPrint = k.memorize(function () {
    var a = [],
      b;
    if (navigator.plugins && navigator.plugins.length)
      for (b =
        0; b < navigator.plugins.length; b++) {
        var c = navigator.plugins[b];
        k.mergeArrays(a, [c.name, c.version, c.description, c.filename])
      }
    if (navigator.mimeTypes && navigator.mimeTypes.length)
      for (b = 0; b < navigator.mimeTypes.length; b++) c = navigator.mimeTypes[b], k.mergeArrays(a, [c.type, c.description, c.suffixes]);
    return k.fnv32a(a.join(";")) + "01"
  });
  z.getNotificationPermission = function () {
    try {
      var a = Notification.permission
    } catch (b) {}
    switch (a) {
      case "denied":
        return 1;
      case "granted":
        return 2
    }
  };
  z.isIframe = k.memorize(function () {
    try {
      return m.top !=
        m
    } catch (a) {
      return !1
    }
  });
  z._nMap = {
    other: "0",
    none: "1",
    unknown: "2",
    wifi: "3",
    ethernet: "4",
    bluetooth: "5",
    cellular: "6",
    wimax: "7",
    mixed: "8"
  };
  z.netType = function () {
    var a = (navigator.connection || {
      type: ""
    }).type;
    return z._nMap[a] || a
  };
  z.isHeadLess = k.memorize(function () {
    var a, b = ["_phantom", "__nightmare", "callPhantom"];
    for (a = 0; a < b.length; a++)
      if (m[b[a]]) return !0;
    return /PhantomJS/.test(m.navigator.userAgent) || m.navigator.webdriver || m.isChrome && !m.chrome ? !0 : /HeadlessChrome/.test(m.navigator.userAgent)
  });
  z.getNavigationStart =
    k.memorize(function () {
      var a = m.performance || m.webkitPerformance;
      return a && a.timing && a.timing.navigationStart
    });
  z.isSameOriginTopFrame = function () {
    try {
      return m.top.contentWindow || !0
    } catch (a) {
      return !1
    }
  };
  z.isDesktop = function (a) {
    var b = a.get("bt", {});
    a.get("bt") === w && (b.p = navigator.getBattery ? navigator.getBattery() : null, a.set("bt", b), b.p && b.p.then && b.p.then(function (a) {
      b.v = a.charging && 0 === a.chargingTime
    }));
    return b.v
  };
  z.isSelenium = k.memorize(function () {
    var a = ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"],
      b = ["selenium", "webdriver", "driver"],
      c, d = m.document,
      f = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" ");
    for (c = 0; c < a.length; c++)
      if (m[a[c]]) return !0;
    for (c = 0; c < f.length; c++)
      if (d && d[f[c]]) return !0;
    if (m.external && m.external.toString && 0 <= m.external.toString().indexOf("Sequentum")) return !0;
    if (d.documentElement &&
      d.documentElement.getAttribute)
      for (c = 0; c < b.length; c++)
        if (d.documentElement.getAttribute(b[c])) return !0;
    return !1
  });
  y.ready = function (a) {
    var b = t.readyState;
    if ("interactive" === b || "complete" === b) k.setTimeout(a, 0, "evt::ready");
    else {
      var c = function () {
        y.un(t, "DOMContentLoaded", c);
        y.un(m, "load", c);
        a()
      };
      y.on(t, "DOMContentLoaded", c);
      y.on(m, "load", c)
    }
  };
  var Ab = {
    url: "https://mc.webvisor.org/metrika/",
    _value: null,
    init: function (a) {
      var b = this._getLs().read("isad");
      this.globalConfig = a || D;
      b ? this._set(b) : this._getReqStatus() ||
        this._send()
    },
    getVal: function () {
      return this._value
    },
    _set: function (a) {
      this._value = "1" == a || "2" == a ? a : null
    },
    _send: function () {
      var a = this;
      this._setReqStatus("process");
      y.ready(function () {
        var b = t.createElement("img");
        b.onload = function () {
          a._saveReq(!1);
          v.removeNode(this)
        };
        b.onerror = function () {
          a._saveReq(!0);
          v.removeNode(this)
        };
        b.src = a.url + String.fromCharCode(97, 100, 118, 101, 114, 116, 46, 103, 105, 102);
        z.isSafari() && (b.style.position = "absolute", b.style.visibility = "hidden", b.style.width = "0px", b.style.height = "0px",
          v.getRootElement().appendChild(b))
      })
    },
    _saveReq: function (a) {
      this._value = a = a ? "1" : "2";
      this._setReqStatus("complete");
      this._getLs().create("isad", a, 1200)
    },
    _setReqStatus: function (a) {
      try {
        this.globalConfig.set("adStatus", a)
      } catch (b) {}
    },
    _getReqStatus: function () {
      try {
        return this.globalConfig.get("adStatus")
      } catch (a) {
        return "complete"
      }
    },
    _getLs: function () {
      this._ls || (this._ls = new N);
      return this._ls
    }
  };
  Ia.decode = function (a) {
    for (var b = "", c = 0, d, f, l; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) :
      191 < d && 224 > d ? (f = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | f & 63), c += 2) : (f = a.charCodeAt(c + 1), l = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (f & 63) << 6 | l & 63), c += 3);
    return b
  };
  k.reduce = function (a, b, c) {
    var d = 0;
    b == w && (b = c[0], d++);
    for (; d < c.length;) b = a(b, c[d]), d++;
    return b
  };
  k.filter = function (a, b) {
    var c, d = [];
    for (c = 0; c < b.length; c++) a(b[c]) && d.push(b[c]);
    return d
  };
  ba.parse = function (a) {
    try {
      return JSON.parse(a)
    } catch (b) {
      return null
    }
  };
  var Ja = T.inherit({
    hitId: 0,
    trackHash: !1,
    trimParams: !1,
    webvisor: !1,
    counter: null,
    counterNum: 0,
    windowName: null,
    resource: "watch",
    retry: !0,
    paramsQueue: {
      paramsQueue: [],
      length: function () {
        return this.paramsQueue.length
      },
      push: function (a) {
        this.paramsQueue.push(a)
      },
      _reduce: function (a) {
        return function (b, c) {
          k.arrayEvery(k.keys(c), function (d) {
            if (b.hasOwnProperty(d)) return 1; - 1 == k.arrayIndexOf(a, d) && (b[d] = c[d], delete c[d]);
            return 1
          });
          return b
        }
      },
      _filter: function (a) {
        return k.keys(a).length
      },
      mixin: function (a) {
        var b = {};
        this.paramsQueue.length && (b = k.reduce(this._reduce(k.keys(a)), {}, this.paramsQueue), this.paramsQueue = k.filter(this._filter, this.paramsQueue));
        return k.mixin({}, a, b)
      }
    },
    postParams: ["site-info"],
    countersNoTitle: "22836271 9928105 26128362 29850769 22327510 40081755 16082914 279297 23323747 16082899".split(" "),
    fake: !1,
    sendTitle: !0,
    _initComponent: function () {
      Ja.superclass._initComponent.apply(this, arguments);
      this._trackHash = this.trackHash;
      "0" === "" + this.counterType && (this.sendTitle = -1 === k.arrayIndexOf(this.countersNoTitle, "" + this.counterId))
    },
    setTrackHash: function (a) {
      this._trackHash =
        a
    },
    sendHit: function (a) {
      this._hitExt({
        url: a.url,
        title: a.title,
        referrer: a.referrer,
        vParams: a.vParams,
        modes: k.mixin(a.modes || {}, {
          ar: !0,
          saveRef: !0,
          pv: !0
        }),
        callback: a.callback,
        hasPrerender: a.hasPrerender,
        ctx: a.ctx
      }, "hit")
    },
    sendExperiments: function (a) {
      this._hitExt({
        url: M().href,
        title: "",
        referrer: "",
        modes: {
          ex: !0,
          ar: !0
        },
        experiments: a.experiments,
        callback: a.callback,
        ctx: a.ctx
      }, "exp")
    },
    sendPrerenderHit: function (a) {
      this._hitExt({
          url: a.url,
          vParams: a.vParams,
          title: a.title,
          referrer: a.referrer,
          modes: {
            ar: !0,
            pq: !0
          }
        },
        "hit")
    },
    sendAjaxHit: function (a) {
      this._hitExt({
        url: a.url,
        title: a.title,
        referrer: a.referrer,
        modes: a.modes
      }, "hit")
    },
    sendParams: function (a, b, c, d) {
      this._hitExt({
        url: d || M().href,
        title: "",
        referrer: "",
        forceNoRedirect: !0,
        vParams: a,
        modes: {
          ar: !0,
          pa: !0,
          onlyData: !0
        },
        callback: b,
        ctx: c
      }, "pa")
    },
    sendGoal: function (a, b) {
      if (/[/&=?#]/.test(a)) k.warning("Incorrect goal");
      else if (a) {
        var c = b.url ? k.parseUrl(b.url) : M();
        this._hitExt({
          url: "goal://" + c.hostname + "/" + encodeURIComponent(a),
          title: v.getDocumentTitle(),
          referrer: c.href,
          forceNoRedirect: !0,
          vParams: b.vParams,
          modes: {
            ar: !0
          },
          callback: b.callback,
          ctx: b.ctx
        }, "go")
      } else k.warning("Empty goal")
    },
    sendClickLink: function (a, b) {
      this._hitExt({
        url: a.url,
        title: a.title,
        referrer: b || M().href,
        modes: a.modes
      })
    },
    sendExtLink: function (a, b) {
      this._hitExt({
        url: a.url,
        title: a.title || "",
        referrer: b || M().href,
        vParams: a.vParams,
        modes: {
          ar: !0,
          ln: !0,
          ut: mb
        },
        callback: a.callback,
        ctx: a.ctx
      }, "cl")
    },
    sendFileUpload: function (a) {
      this._hitExt({
        url: a.url,
        title: a.title || "",
        referrer: M().href,
        vParams: a.vParams,
        modes: {
          ar: !0,
          ln: !0,
          dl: !0
        },
        callback: a.callback,
        ctx: a.ctx
      }, "fu")
    },
    sendNotBounce: function (a, b) {
      this._hitExt({
        url: b.url || M().href,
        title: "",
        referrer: "",
        modes: {
          cl: a,
          ar: !0,
          nb: !0,
          onlyData: !0
        },
        callback: b.callback,
        ctx: b.ctx
      }, "nb")
    },
    sendDevice: function (a) {
      this._hitExt({
        browserInfo: {
          di: a.data,
          dip: a.port
        },
        callback: a.callback,
        ctx: a.ctx
      }, "de")
    },
    _hitExt: function (a, b) {
      function c(a, b) {
        b && (m[a] = b)
      }
      var d, f, l, g = {};
      if (!k.isMetrikaPlayer()) {
        var n = a.modes || {};
        var r = a.browserInfo || {};
        var u = "undefined" !== typeof a.referrer ? a.referrer : Za.lastReferrer;
        var p = a.url || "";
        var m = {};
        a.nohit && c("nohit", 1);
        n.ar && !n.onlyData && (u = null === u || "" === u ? "" : this._prepareHitUrl(u), p = this._prepareHitUrl(a.url));
        c("forceNoRedirect", a.forceNoRedirect);
        c("page-ref", k.trim(u, nb));
        c("page-url", k.trim(p, nb));
        k.is4Bytes(a.title) && c("charset", "utf-8"); - 1 != M().hostname.search(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/) ? c("ut", mb) : "undefined" != typeof n.ut && c("ut", k.trim(n.ut, ac));
        c("exp", a.experiments);
        (f = a.vParams) && this.counter && f.__ym && (k.isNumber(f.__ym.turbo_page) && (this.counter.tp =
          f.__ym.turbo_page), k.isNumber(f.__ym.turbo_page_id) && (this.counter.tpid = f.__ym.turbo_page_id));
        (!f || k.isObject(f) && !f.__ym && !f.__ymu) && this.paramsQueue.length() && k.inArray(["go", "hit", "pa"], b) && (f = this.paramsQueue.mixin(f));
        f && (p = k.toJSON(f), this.trimParams && p.length > bc ? l = !0 : 7E5 < p ? k.warning("Too big params") : c("site-info", p));
        n.saveRef && (Za.lastReferrer = u);
        g = function (a, b) {
          var c = {};
          k.forEachKey(b, function (a, b) {
            -1 === k.arrayIndexOf(["", 0, w, null], b) && (c[a] = b)
          });
          return k.mixin({}, a, c)
        }(g, {
          gdpr: ua.getState(this.globalConfig),
          tp: this.counter && this.counter.tp,
          tpid: this.counter && this.counter.tpid,
          fu: this.getFu(a.url, a.referrer),
          eu: this.globalConfig.get("isEU"),
          v: this._getVersion(),
          pr: a.hasPrerender ? 1 : null
        });
        this.fake || (d = this._getTechInfo(a.title, n, this.counterId, a.ts, a.tz, this._trackHash, this.hitId, this.webvisor, this.counter, a.nohit));
        g.wv = 2;
        k.mixin(r, d, g);
        this.send(m, r, function () {
          l && this.counter.params(f);
          a.userParams && this.counter.userParams(a.userParams);
          k.isFunction(a.callback) && a.callback.apply(a.ctx, arguments)
        }, this)
      }
    },
    _prepareHitUrl: function (a) {
      var b = M(),
        c = b.host;
      b = b.href;
      if (!k.isString(a)) return b;
      if (-1 != a.search(/^[a-z][\w.+-]+:\/\//i)) return a;
      var d = a.charAt(0);
      if ("?" == d) return d = b.search(/\?/), -1 == d ? b + a : b.substr(0, d) + a;
      if ("#" == d) return d = b.search(/#/), -1 == d ? b + a : b.substr(0, d) + a;
      if ("/" == d) {
        if (d = b.search(c), -1 != d) return b.substr(0, d + c.length) + a
      } else return c = b.split("/"), c[c.length - 1] = a, c.join("/");
      return a
    },
    getFu: function (a, b) {
      var c = a !== M().href,
        d = t.referrer.replace(/\/$/, ""),
        f = (b || "").replace(/\/$/, "");
      d = d !==
        f;
      f = 0;
      d && c ? f = 3 : d ? f = 1 : c && (f = 2);
      return f
    },
    _getTechInfo: function (a, b, c, d, f, l, g, n, r, u) {
      function p(a, b, c) {
        var e = "" + b;
        a && b && (c || -1 === e.indexOf(":")) && (q[a] = e)
      }

      function C(a) {
        b[a] && p(a, "1")
      }
      var q = {};
      b = b || {};
      d = d || x.getTimestamp();
      f = f || x.getTimezone();
      p("j", z.getJavaEnabled() ? "1" : "");
      var h = z.isDesktop(this.globalConfig);
      h !== w && p("dp", h ? "1" : "0");
      p("nt", z.netType());
      p("ns", z.getNavigationStart());
      ea && p("s", ea.width + "x" + ea.height + "x" + (ea.colorDepth || ea.pixelDepth));
      m.devicePixelRatio && p("sk", m.devicePixelRatio);
      z.isSelenium() && p("iss", "1");
      z.isHeadLess() && p("hdl", "1");
      z.isIframe() && (p("ifr", "1"), p("sti", z.isSameOriginTopFrame() ? "1" : "0"));
      m.ia_document && m.ia_document.shareURL && m.ia_document.referrer && p("iia", "1");
      p("adb", Ab.getVal());
      p("f", z.getFlashVersion());
      p("l", z.getSilverlightVersion());
      p("fpr", z.getFingerPrint());
      p("cn", this.counterNum);
      b.pa || (h = v.getViewportSize(), p("w", h[0] + "x" + h[1]));
      p("z", f);
      p("i", d);
      p("et", x.getSeconds());
      p("en", v.getDocumentCharset());
      p("c", navigator.cookieEnabled ? "1" : "");
      p("la",
        z.getLanguage());
      p("ntf", z.getNotificationPermission());
      k.random(100) || p("np", W.encode(Ia.encode(k.trim(z.getPlatform(), 100))));
      l && p("wh", "1");
      f = "ar ln re dl cpf ad nb pa pq pv ex".split(" ");
      for (d = 0; d < f.length; d++) C(f[d]);
      f = "va vt sn sa he pai".split(" ");
      b.nb && f.push("cl");
      for (d = 0; d < f.length; d++) l = f[d], p(l, b[l]);
      f = new ia({
        counterId: c
      });
      f.isEnabled() && (c = f.getStorageId(), d = f.get("reqNum"), u || (d ? d++ : d = 1), f.set("reqNum", d), f.get("reqNum") == d ? (p("ls", c), p("rqn", d)) : (f.remove("reqNum"), f.clearStorageId(),
        1 < d && (p("ls", c), p("rqn", 0))));
      p("rn", k.random());
      p("hid", g);
      u || 3 == this.counterId || b.pq || p("ds", Ub(r));
      r._firstPaint || u || (r._firstPaint = Wb(), p("fp", r._firstPaint));
      if (n) {
        g = D.get("winNameNum");
        if (!g) {
          if (g = +m.name || Math.round(65535 * Math.random())) 0 > g && (g *= -1), g %= 65535;
          g = g || k.fletcher(m.name);
          D.set("winNameNum", g)
        }
        p("wn", g);
        try {
          m.history && p("hl", String(m.history.length))
        } catch (e) {}
      }
      g = "";
      this.sendTitle && (g = this._getTitle(a));
      p("t", g, !0);
      return q
    },
    _getTitle: function (a) {
      a = "undefined" == typeof a ? (a = v.getDocumentTitle()) ?
        k.trim(a, Bb) : "" : k.trim(a, Bb);
      return a
    }
  });
  k.array2Props = function (a) {
    var b = a.length,
      c = {},
      d = c,
      f;
    for (f = 0; f < b - 1; f++) {
      var l = a[f];
      d[l] = {};
      f < b - 2 && (d = d[l])
    }
    d[l] = a[b - 1];
    return c
  };
  var Ra = J.inherit({
      sampling: 1,
      counterId: 26302566,
      _initComponent: function () {
        Ra.superclass._initComponent.apply(this, arguments);
        this._sender = new Ja({
          protocol: "https:",
          counterId: this.counterId,
          retry: !1,
          counter: {}
        })
      },
      log: function () {
        this.logParams(k.array2Props(arguments))
      },
      logParams: function (a) {
        Math.random() < this.sampling && this._sender.sendHit({
          url: L.href,
          title: "",
          referrer: "",
          vParams: a
        })
      }
    }),
    cc = T.inherit({
      resource: "webvisor",
      retry: !0,
      postParams: ["wv-data"],
      sendPacket: function (a, b, c, d, f, l, g, n) {
        if (!a || !a.length) return !1;
        var r = W.encode(a, !0);
        if (0 == r.indexOf("AAAAAAAAADw") && m.Error) {
          var u = Error();
          "string" == typeof u.stack && (new Ra({
            sampling: .1
          })).log("bad visor packet 5", 1)
        }
        a = {
          rn: k.random(),
          "page-url": b,
          wmode: 0,
          "wv-type": 0,
          "wv-hit": c,
          "wv-part": d + 1,
          "wv-check": k.fletcher(a),
          "wv-data": r
        };
        f = {
          v: this._getVersion(),
          z: f,
          i: l
        };
        return this.send(a, f, g, n)
      }
    }),
    ub = Aa.inherit({
      protocol: "",
      counterId: "",
      counterType: "",
      meta: null,
      maxBufferSize: 7500,
      flushTimeout: 3E4,
      storageKey: "visorbuff",
      active: !1,
      _initComponent: function () {
        this.storage = new ia({
          counterId: this.counterId
        });
        this._sender = new cc({
          globalConfig: this.globalConfig,
          protocol: this.protocol,
          counterId: this.counterId,
          counterType: this.counterType
        });
        ub.superclass._initComponent.apply(this, arguments)
      },
      onFlush: function (a, b, c) {
        this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
      }
    });
  v.getDocumentHTML = function () {
    var a = "";
    var b =
      t.documentElement;
    var c = b.outerHTML,
      d, f;
    if (c) b = c;
    else {
      c = b.attributes;
      var l = "";
      for (d = 0; d < c.length; d++)(f = c[d]) && (l += " " + f.name + '\x3d"' + (f.value || "") + '"');
      b = "\x3chtml" + l + "\x3e" + b.innerHTML + "\x3c/html\x3e"
    }
    if (c = t.doctype) a = c.publicId ? ' PUBLIC "' + c.publicId + '"' : "", l = c.systemId ? ' "' + c.systemId + '"' : "", a = "\x3c!DOCTYPE " + c.name + a + l + "\x3e\n";
    return a + b
  };
  v.getElementParent = function (a) {
    if (!a || a == t.documentElement) return null;
    if (a == v.getBody()) return t.documentElement;
    var b = null;
    try {
      b = a.parentNode
    } catch (c) {}
    return b
  };
  v.getElementChildren = function (a, b) {
    var c = [],
      d, f, l;
    if (a && (d = a.childNodes)) {
      var g = 0;
      for (l = d.length; g < l; g++) {
        var n = d[g];
        (f = "INPUT" == n.nodeName && n.type && "hidden" == n.type.toLocaleLowerCase()) || b && n.nodeName != b || k.mergeArrays(c, [n])
      }
    }
    return c
  };
  v.getElementNeighborPosition = function (a) {
    var b = v.getElementParent(a),
      c;
    if (b) {
      var d = 0;
      b = b.childNodes;
      var f = a && a.nodeName;
      for (c = 0; c < b.length; c++) {
        var l = b[c] && b[c].nodeName;
        if (f == l) {
          if (a == b[c]) return d;
          d++
        }
      }
    }
    return 0
  };
  v.getDocumentScroll = function () {
    var a = v.getBody();
    return [m.pageXOffset || t.documentElement && t.documentElement.scrollLeft || a && a.scrollLeft || 0, m.pageYOffset || t.documentElement && t.documentElement.scrollTop || a && a.scrollTop || 0]
  };
  v.getElementXY = function (a) {
    var b;
    if (!a || !a.ownerDocument || "PARAM" == a.tagName || a == v.getBody() || a == t.documentElement) return [0, 0];
    if (a.getBoundingClientRect) {
      a = a.getBoundingClientRect();
      var c = v.getDocumentScroll();
      return [Math.round(a.left + c[0]), Math.round(a.top + c[1])]
    }
    for (b = c = 0; a;) c += a.offsetLeft, b += a.offsetTop, a = a.offsetParent;
    return [c,
      b
    ]
  };
  v.getDocumentSize = function () {
    var a = v.getRootElement(),
      b = v.getViewportSize();
    return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
  };
  v.getElementSize = function (a) {
    var b;
    return a == v.getBody() || a == t.documentElement ? v.getDocumentSize() : (b = a.getBoundingClientRect && a.getBoundingClientRect()) ? [b.width, b.height] : [a.offsetWidth, a.offsetHeight]
  };
  v.getElementRegion = function (a) {
    var b = v.getElementXY(a);
    a = v.getElementSize(a);
    return [b[0], b[1], a[0], a[1]]
  };
  v.calcChildrenChecksum = function (a) {
    var b = F(function () {
        return a.innerHTML
      },
      "", !0)() || "";
    return k.fletcher(b.replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
  };
  v.getFormNumber = function (a) {
    var b = t.getElementsByTagName("form"),
      c;
    var d = 0;
    for (c = b.length; d < c; d++)
      if (b[d] == a) return d;
    return -1
  };
  v.isEmptyField = function (a) {
    return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ? !a.checked : !a.value : "TEXTAREA" == a.nodeName ? !a.value : "SELECT" == a.nodeName ? 0 > a.selectedIndex : !0
  };
  v.calcTextChecksum = function (a) {
    var b = "";
    a = a.childNodes;
    var c;
    var d = 0;
    for (c = a.length; d < c; d++) a[d] && 3 == a[d].nodeType && (b += a[d].nodeValue);
    return k.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
  };
  v.calcAttribChecksum = function (a) {
    var b = "",
      c = "width height align title alt name".split(" "),
      d;
    "IMG" == a.tagName && (b += a.src.toLowerCase());
    "A" == a.tagName && (b += a.href.toLowerCase());
    b += String(a.className || "").toLowerCase();
    for (d = 0; d < c.length; d++) a.getAttribute && (b += String(a.getAttribute(c[d]) || "").toLowerCase());
    return k.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
  };
  v.classNameExists =
    function (a, b) {
      try {
        return (new RegExp("(?:^|\\s)" + b + "(?:\\s|$)")).test(a.className)
      } catch (c) {
        return !1
      }
    };
  v.getElementsByClassName = function (a, b) {
    var c;
    b = b || t;
    var d = b.getElementsByTagName("*");
    var f = [];
    for (c = 0; c < d.length; c++) v.classNameExists(d[c], a) && f.push(d[c]);
    return f
  };
  try {
    if (yb) {
      var lb = function (a) {
        function b(d) {
          if (c[d]) return c[d].f;
          var f = c[d] = {
            Z: d,
            L: !1,
            f: {}
          };
          return a[d].call(f.f, f, f.f, b), f.L = !0, f.f
        }
        var c = {};
        return b.aa = a, b.W = c, b.o = function (a, c, l) {
          b.D(a, c) || Object.defineProperty(a, c, {
            enumerable: !0,
            get: l
          })
        }, b.C = function (a) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
            value: "Module"
          });
          Object.defineProperty(a, "__esModule", {
            value: !0
          })
        }, b.$ = function (a, c) {
          if ((1 & c && (a = b(a)), 8 & c) || 4 & c && "object" == typeof a && a && a.a) return a;
          var d = Object.create(null);
          if (b.C(d), Object.defineProperty(d, "default", {
              enumerable: !0,
              value: a
            }), 2 & c && "string" != typeof a)
            for (var g in a) b.o(d, g, function (b) {
              return a[b]
            }.bind(null, g));
          return d
        }, b.X = function (a) {
          var c = a && a.a ? function () {
              return a["default"]
            } :
            function () {
              return a
            };
          return b.o(c, "a", c), c
        }, b.D = function (a, b) {
          return Object.prototype.hasOwnProperty.call(a, b)
        }, b.Y = "", b(b.ba = 0)
      }([function (a, b, c) {
          var d = this && this.U || function () {
            return (d = Object.assign || function (a) {
              for (var b, c = 1, d = arguments.length; c < d; c++)
                for (var h in b = arguments[c]) Object.prototype.hasOwnProperty.call(b, h) && (a[h] = b[h]);
              return a
            }).apply(this, arguments)
          };
          b.a = !0;
          var f = c(1),
            l = c(2),
            g = c(4),
            n = c(5),
            k = c(6);
          a = function () {
            function a(a) {
              var b = this;
              this.l = a;
              this.H = {
                webGL: f.B,
                dnt: n.w,
                plugins: l.A,
                applePay: g.v
              };
              this.l = d({
                webGL: !1,
                dnt: !1,
                plugins: !1,
                applePay: !1
              }, a);
              this.G = Object.keys(this.l).filter(function (a) {
                return b.l[a]
              }).map(function (a) {
                return new b.H[a]
              })
            }
            return a.prototype.toString = function (a) {
              void 0 === a && (a = !0);
              var b = this.G.map(function (a) {
                var b = "";
                try {
                  b = a.g()
                } catch (e) {}
                return b
              });
              return a ? [k.hash(b.join(""), 210)] : b.map(function (a) {
                return k.hash(a, 210)
              })
            }, a
          }();
          b.T = a;
          b["default"] = a
        }, function (a, b) {
          var c = this && this.V || function () {
            function a(b, c) {
              return (a = Object.setPrototypeOf || {
                  __proto__: []
                }
                instanceof Array && function (a, b) {
                  a.__proto__ = b
                } || function (a, b) {
                  for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
                })(b, c)
            }
            return function (b, c) {
              function d() {
                this.constructor = b
              }
              a(b, c);
              b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
            }
          }();
          b.a = !0;
          var d = function (a) {
            function b() {
              var b = a.call(this, "webgl") || this;
              return b.h && !b.J() && (b.h = !1), b
            }
            return c(b, a), b.prototype.J = function () {
              var a = this.canvas.getContext && (this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl"));
              return !!m.WebGLRenderingContext &&
                !!a
            }, b.prototype.j = function (a) {
              var b = this.c;
              return b.clearColor(0, 0, 0, 1), b.enable(b.DEPTH_TEST), b.depthFunc(b.LEQUAL), b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT), "[" + a[0] + ", " + a[1] + "]"
            }, b.prototype.M = function (a) {
              var b, c = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
              return c ? (0 === (b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) && (b = 2), b) : null
            }, b.prototype.s = function () {
              var a = this.c,
                b = [],
                c = a.createBuffer();
              a.bindBuffer(a.ARRAY_BUFFER, c);
              a.bufferData(a.ARRAY_BUFFER, new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]), a.STATIC_DRAW);
              c.K = 3;
              c.O = 3;
              var d = a.createProgram(),
                f = a.createShader(a.VERTEX_SHADER);
              a.shaderSource(f, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate\x3dattrVertex+uniformOffset;gl_Position\x3dvec4(attrVertex,0,1);}");
              a.compileShader(f);
              var l = a.createShader(a.FRAGMENT_SHADER);
              a.shaderSource(l,
                "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor\x3dvec4(varyinTexCoordinate,0,1);}");
              a.compileShader(l);
              a.attachShader(d, f);
              a.attachShader(d, l);
              a.linkProgram(d);
              a.useProgram(d);
              d.R = a.getAttribLocation(d, "attrVertex");
              d.P = a.getUniformLocation(d, "uniformOffset");
              a.enableVertexAttribArray(d.ca);
              a.vertexAttribPointer(d.R, c.K, a.FLOAT, !1, 0, 0);
              a.uniform2f(d.P, 1, 1);
              a.drawArrays(a.TRIANGLE_STRIP, 0, c.O);
              null != a.canvas && b.push(a.canvas.toDataURL());
              b.push("extensions:" + a.getSupportedExtensions().join(";"));
              b.push("webgl aliased line width range:" + this.j(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE)));
              b.push("webgl aliased point size range:" + this.j(a.getParameter(a.ALIASED_POINT_SIZE_RANGE)));
              b.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS));
              b.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no"));
              b.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS));
              b.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS));
              b.push("webgl green bits:" + a.getParameter(a.GREEN_BITS));
              b.push("webgl max anisotropy:" +
                this.M(a));
              b.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
              b.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE));
              b.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS));
              b.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE));
              b.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
              b.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE));
              b.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS));
              b.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS));
              b.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
              b.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS));
              b.push("webgl max viewport dims:" + this.j(a.getParameter(a.MAX_VIEWPORT_DIMS)));
              b.push("webgl red bits:" + a.getParameter(a.RED_BITS));
              b.push("webgl renderer:" + a.getParameter(a.RENDERER));
              b.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION));
              b.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS));
              b.push("webgl vendor:" + a.getParameter(a.VENDOR));
              b.push("webgl version:" + a.getParameter(a.VERSION));
              try {
                var q = a.getExtension("WEBGL_debug_renderer_info");
                q && (b.push("webgl unmasked vendor:" + a.getParameter(q.UNMASKED_VENDOR_WEBGL)), b.push("webgl unmasked renderer:" + a.getParameter(q.UNMASKED_RENDERER_WEBGL)))
              } catch (h) {}
              return a.getShaderPrecisionFormat ? (b.push("webgl vertex shader high float precision:" +
                  a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision), b.push("webgl vertex shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin), b.push("webgl vertex shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax), b.push("webgl vertex shader medium float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision), b.push("webgl vertex shader medium float precision rangeMin:" +
                  a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin), b.push("webgl vertex shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax), b.push("webgl vertex shader low float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision), b.push("webgl vertex shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin), b.push("webgl vertex shader low float precision rangeMax:" +
                  a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax), b.push("webgl fragment shader high float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision), b.push("webgl fragment shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin), b.push("webgl fragment shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax), b.push("webgl fragment shader medium float precision:" +
                  a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision), b.push("webgl fragment shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin), b.push("webgl fragment shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax), b.push("webgl fragment shader low float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision), b.push("webgl fragment shader low float precision rangeMin:" +
                  a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin), b.push("webgl fragment shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax), b.push("webgl vertex shader high int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision), b.push("webgl vertex shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin), b.push("webgl vertex shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER,
                  a.HIGH_INT).rangeMax), b.push("webgl vertex shader medium int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision), b.push("webgl vertex shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin), b.push("webgl vertex shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax), b.push("webgl vertex shader low int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision),
                b.push("webgl vertex shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin), b.push("webgl vertex shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax), b.push("webgl fragment shader high int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision), b.push("webgl fragment shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin), b.push("webgl fragment shader high int precision rangeMax:" +
                  a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax), b.push("webgl fragment shader medium int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision), b.push("webgl fragment shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin), b.push("webgl fragment shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax), b.push("webgl fragment shader low int precision:" +
                  a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision), b.push("webgl fragment shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin), b.push("webgl fragment shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax), b.join("~")) : b.join("~")
            }, b
          }(a = function () {
            function a(a) {
              this.F = a;
              this.h = !0;
              this.canvas = t.createElement("canvas");
              this.I() || (this.h = !1)
            }
            return a.prototype.I = function () {
              return this.c = this.canvas.getContext(this.F), !(!this.canvas.getContext || !this.c)
            }, a.prototype.g = function () {
              return this.h ? this.s() : this.id
            }, a
          }());
          b.B = d;
          a = function (a) {
            function b() {
              return a.call(this, "2d") || this
            }
            return c(b, a), b.prototype.s = function () {
              var a = this.canvas,
                b = this.c,
                c = [];
              return a.width = 2E3, a.height = 200, a.style.display = "inline", b.rect(0, 0, 10, 10), b.rect(2, 2, 6, 6), c.push("canvas winding:" + (!1 === b.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), b.textBaseline = "alphabetic", b.fillStyle = "#f60", b.fillRect(125, 1, 62, 20), b.fillStyle = "#069", b.font = "11pt Arial",
                b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), b.fillStyle = "rgba(102, 204, 0, 0.2)", b.font = "18pt Arial", b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), b.globalCompositeOperation = "multiply", b.fillStyle = "rgb(255,0,255)", b.beginPath(), b.arc(50, 50, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(0,255,255)", b.beginPath(), b.arc(100, 50, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(255,255,0)", b.beginPath(), b.arc(75, 100, 50, 0, 2 * Math.PI, !0), b.closePath(),
                b.fill(), b.fillStyle = "rgb(255,0,255)", b.arc(75, 75, 75, 0, 2 * Math.PI, !0), b.arc(75, 75, 25, 0, 2 * Math.PI, !0), b.fill("evenodd"), c.push("canvas fp:" + a.toDataURL()), c.join("~")
            }, b
          }(a);
          b.S = a
        }, function (a, b, c) {
          b.a = !0;
          var d = c(3);
          a = function () {
            function a() {}
            return a.prototype.g = function () {
              return d.u(navigator.plugins).sort(function (a, b) {
                return a.name > b.name ? 1 : 2
              }).map(function (a) {
                return [a.name, a.description, d.u(a).map(function (a) {
                  return [a.description, a.suffixes, a.type].join()
                }).join()].join()
              }).join()
            }, a
          }();
          b.A = a
        },
        function (a, b) {
          b.a = !0;
          b.u = function (a) {
            return Array.prototype.slice.call(a)
          }
        },
        function (a, b) {
          b.a = !0;
          a = function () {
            function a() {
              this.m = m.ApplePaySession
            }
            return a.prototype.g = function () {
              var a = !1;
              try {
                a = m.self !== m.top
              } catch (l) {}
              if (!this.m || "https:" !== L.protocol || a) return "";
              a = "";
              for (var b = 1; 10 >= b; b++) a += this.m.supportsVersion(b) ? b : "0";
              return a + this.m.canMakePayments()
            }, a
          }();
          b.v = a
        },
        function (a, b) {
          b.a = !0;
          a = function () {
            function a() {
              this.b = m.navigator
            }
            return a.prototype.g = function () {
              return this.b.i ? this.b.i : this.b.N ?
                this.b.N : this.b.i ? this.b.i : "unknown"
            }, a
          }();
          b.w = a
        },
        function (a, b) {
          function c(a, b) {
            a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]];
            b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
            var c = [0, 0, 0, 0];
            return c[3] += a[3] * b[3], c[2] += c[3] >>> 16, c[3] &= 65535, c[2] += a[2] * b[3], c[1] += c[2] >>> 16, c[2] &= 65535, c[2] += a[3] * b[2], c[1] += c[2] >>> 16, c[2] &= 65535, c[1] += a[1] * b[3], c[0] += c[1] >>> 16, c[1] &= 65535, c[1] += a[2] * b[2], c[0] += c[1] >>> 16, c[1] &= 65535, c[1] += a[3] * b[1], c[0] += c[1] >>> 16, c[1] &= 65535, c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0],
              c[0] &= 65535, [c[0] << 16 | c[1], c[2] << 16 | c[3]]
          }

          function d(a, b) {
            a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]];
            b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
            var c = [0, 0, 0, 0];
            return c[3] += a[3] + b[3], c[2] += c[3] >>> 16, c[3] &= 65535, c[2] += a[2] + b[2], c[1] += c[2] >>> 16, c[2] &= 65535, c[1] += a[1] + b[1], c[0] += c[1] >>> 16, c[1] &= 65535, c[0] += a[0] + b[0], c[0] &= 65535, [c[0] << 16 | c[1], c[2] << 16 | c[3]]
          }

          function f(a, b) {
            return 32 === (b %= 64) ? [a[1], a[0]] : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b] : (b -= 32, [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>>
              32 - b
            ])
          }

          function l(a, b) {
            return 0 === (b %= 64) ? a : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32, 0]
          }

          function g(a, b) {
            return [a[0] ^ b[0], a[1] ^ b[1]]
          }

          function k(a) {
            return a = g(a, [0, a[0] >>> 1]), a = g(a = c(a, [4283543511, 3981806797]), [0, a[0] >>> 1]), g(a = c(a, [3301882366, 444984403]), [0, a[0] >>> 1])
          }
          b.a = !0;
          b.hash = function (a, b) {
            b = b || 0;
            var n = (a = a || "").length % 16,
              r = a.length - n,
              q = [0, b];
            b = [0, b];
            for (var h, e, B = [2277735313, 289559509], I = [1291169091, 658871167], A = 0; A < r; A += 16) h = [255 & a.charCodeAt(A + 4) | (255 & a.charCodeAt(A + 5)) << 8 | (255 & a.charCodeAt(A +
              6)) << 16 | (255 & a.charCodeAt(A + 7)) << 24, 255 & a.charCodeAt(A) | (255 & a.charCodeAt(A + 1)) << 8 | (255 & a.charCodeAt(A + 2)) << 16 | (255 & a.charCodeAt(A + 3)) << 24], e = [255 & a.charCodeAt(A + 12) | (255 & a.charCodeAt(A + 13)) << 8 | (255 & a.charCodeAt(A + 14)) << 16 | (255 & a.charCodeAt(A + 15)) << 24, 255 & a.charCodeAt(A + 8) | (255 & a.charCodeAt(A + 9)) << 8 | (255 & a.charCodeAt(A + 10)) << 16 | (255 & a.charCodeAt(A + 11)) << 24], h = f(h = c(h, B), 31), q = d(q = f(q = g(q, c(h, I)), 27), b), q = d(c(q, [0, 5]), [0, 1390208809]), e = f(e = c(e, I), 33), b = d(b = f(b = g(b, c(e, B)), 31), q), b = d(c(b, [0, 5]), [0,
              944331445
            ]);
            switch (h = [0, 0], e = [0, 0], n) {
              case 15:
                e = g(e, l([0, a.charCodeAt(A + 14)], 48));
              case 14:
                e = g(e, l([0, a.charCodeAt(A + 13)], 40));
              case 13:
                e = g(e, l([0, a.charCodeAt(A + 12)], 32));
              case 12:
                e = g(e, l([0, a.charCodeAt(A + 11)], 24));
              case 11:
                e = g(e, l([0, a.charCodeAt(A + 10)], 16));
              case 10:
                e = g(e, l([0, a.charCodeAt(A + 9)], 8));
              case 9:
                e = c(e = g(e, [0, a.charCodeAt(A + 8)]), I), b = g(b, c(f(e, 33), B));
              case 8:
                h = g(h, l([0, a.charCodeAt(A + 7)], 56));
              case 7:
                h = g(h, l([0, a.charCodeAt(A + 6)], 48));
              case 6:
                h = g(h, l([0, a.charCodeAt(A + 5)], 40));
              case 5:
                h = g(h,
                  l([0, a.charCodeAt(A + 4)], 32));
              case 4:
                h = g(h, l([0, a.charCodeAt(A + 3)], 24));
              case 3:
                h = g(h, l([0, a.charCodeAt(A + 2)], 16));
              case 2:
                h = g(h, l([0, a.charCodeAt(A + 1)], 8));
              case 1:
                h = c(h = g(h, [0, a.charCodeAt(A)]), B), q = g(q, c(f(h, 31), I))
            }
            return q = d(q = g(q, [0, a.length]), b = g(b, [0, a.length])), b = d(b, q), q = d(q = k(q), b = k(b)), b = d(b, q), ("00000000" + (q[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (q[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (b[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (b[1] >>> 0).toString(16)).slice(-8)
          }
        }
      ]);
      lb = lb["default"]
    }
  } catch (a) {
    Pa = {
      error: a,
      scope: "fip"
    }
  }
  k.toArray = function (a) {
    var b, c = [];
    if (a && !isNaN(a.length) && 0 <= a.length)
      for (b = 0; b < a.length; b++) c.push(a[b]);
    return c
  };
  k.arrayFilter = function (a, b, c) {
    var d = [],
      f;
    for (f = 0; f < a.length; f++) b.call(c, a[f], f, a) && d.push(a[f]);
    return d
  };
  k.arrDiff = function (a, b) {
    return k.arrayFilter(a, function (a) {
      return -1 === k.arrayIndexOf(b, a)
    })
  };
  k.encodeURIComponent = function (a, b) {
    a = String(a);
    b && a.length > b && (a = a.substr(0, b));
    return (m.encodeURIComponent || m.escape)(a).replace(/\+/g, "%2B")
  };
  k.bind = function (a, b) {
    var c = [].slice.call(arguments, 2);
    return function () {
      return a.apply(b || this, c.concat([].slice.call(arguments, 0)))
    }
  };
  k.safeDecodeURIComponent = function (a) {
    try {
      return decodeURIComponent(a)
    } catch (b) {
      return ""
    }
  };
  k.isDev = function () {
    return !1
  };
  k.noop = function () {};
  !kb(/webkit/) && kb(/gecko/);
  var ob = {
      asyncChunk: 400,
      maxDuration: 20,
      restTime: 100,
      asyncBuffer: [],
      timeout: null,
      rest: 0,
      addAsyncItem: function (a, b, c, d, f) {
        var l = this;
        this.asyncBuffer.push({
          fn: a,
          ctx: b,
          args: d || [],
          loggerName: f || ""
        });
        c ? (clearTimeout(this.timeout), l.flushAsync(!0)) :
          x.getMs() - this.rest >= this.restTime && !this.timeout ? (this.rest = x.getMs(), l.flushAsync()) : this.timeout || (this.timeout = k.setTimeout(function () {
            l.rest = x.getMs();
            l.flushAsync();
            l.timeout = !1
          }, this.restTime))
      },
      chain: function (a, b, c, d) {
        var f = this;
        a.push = function (a) {
          throw 'Try to push in Executor when it started "' + a + '"';
        };
        (function u(b, c, k) {
          f.addAsyncItem(function (b, c, d) {
            c = a[b++](c);
            b <= a.length - 1 && u(b, c, d)
          }, null, k, [b, c], d + "." + b)
        })(0, b, c)
      },
      callByTimeout: function (a, b) {
        for (var c = x.getMs(), d = 0, f, l = (b || 0) + 1, g = 0,
            n = this; this.asyncBuffer.length;)
          if (f = this.asyncBuffer.shift(), g += 1, !f.isExecuted && (F(function () {
              f.fn.apply(f.ctx, f.args)
            }, "AsyncExecutor." + f.loggerName)(), d = x.getMs() - c, f.isExecuted = !0, !a && (g >= this.asyncChunk || d >= this.maxDuration))) {
            k.setTimeout(function () {
              n.callByTimeout(a, l)
            }, this.restTime);
            break
          }
      },
      flushAsync: function (a) {
        this.asyncBuffer.length && this.callByTimeout(a)
      }
    },
    dc = Wa.inherit({
      id: "XHRPlain",
      index: 8,
      _splitParams: function (a) {
        var b = {},
          c = {};
        k.forEachKey(a, function (a, f) {
          k.inArray(this.postParams,
            a) ? this.postParams.isSingle ? c = f : c[a] = f : b[a] = f
        }, this);
        return {
          get: b,
          post: c
        }
      },
      _preparePostParams: function (a) {
        return a.post
      },
      _setHeaders: function (a) {
        a.setRequestHeader("Content-Type", "text/plain")
      }
    }),
    pb = T.inherit({
      resource: "webvisor",
      version: 2,
      retry: !1,
      postParams: ["wv-data"],
      transports: [dc],
      _initComponent: function () {
        pb.superclass._initComponent.apply(this, arguments);
        this.postParams.isSingle = !0
      },
      sendPacket: function (a, b, c, d, f, l, g, n, r) {
        var u = v.getViewportSize();
        if (!a || !a.length) return !1;
        a = {
          rn: k.random(),
          "page-url": b,
          wmode: 0,
          "wv-type": this.version,
          "wv-hit": c,
          "wv-part": d + 1,
          "wv-data": a
        };
        f = {
          et: g,
          w: u[0] + "x" + u[1],
          v: this._getVersion(),
          z: f,
          i: l
        };
        this.browserInfoMix && (f = k.mixin(f, this.browserInfoMix));
        return this.send(a, f, n, r)
      }
    }),
    $a = Aa.inherit({
      protocol: "",
      chunkSize: 0,
      counterId: "",
      counterType: "",
      meta: null,
      maxBufferSize: 7E5,
      flushTimeout: 2E3,
      storageKey: "visorbuff2",
      active: !1,
      wvType: 2,
      _v: "",
      _totalSendLimit: null,
      _totalSendedSize: 0,
      _initComponent: function () {
        this._sender = new pb({
          version: this.wvType,
          protocol: this.protocol,
          globalConfig: this.globalConfig,
          counterId: this.counterId,
          browserInfoMix: this.browserInfoMix,
          counterType: this.counterType
        });
        $a.superclass._initComponent.apply(this, arguments)
      },
      append: function (a) {
        !this._data.length && a && a.length && (this.startBufferTime = x.getSeconds());
        $a.superclass.append.apply(this, arguments)
      },
      _getSize: function (a) {
        var b = this;
        this.chunkSize += encodeURIComponent(a).length;
        this.wrappers.length && k.reduce(function (a, d) {
          var c = d.getBufferData();
          c && (b.chunkSize += k.toJSON(c).length)
        }, 0, this.wrappers);
        return this.chunkSize
      },
      addData: function (a, b, c, d, f) {
        var l = 0,
          g = 1,
          n = {
            type: a
          },
          r = .9 * this.maxBufferSize;
        if (!this.totalSendLimit || this._totalSendedSize < this.totalSendLimit)
          if (this._v = c, this.wrappers.length && k.arrayEvery(this.wrappers, function (c) {
              c.trigger && c.trigger(a, b);
              return 1
            }), f) this._getSize("{}"), this.append([], d);
          else {
            this.updateStamp(b, n);
            c = ba.stringify(b);
            f = this._getSize(c);
            if (f > this.maxBufferSize)
              for (this._data.length && this._flush(), d = Math.ceil(c.length / r); l < c.length;) n.partNum = g, n.end = g === d,
                n.data = c.slice(l, l += r), g++, this._getSize(n.data), this.append([n], !0);
            else n.data = c, this.append([n], d);
            this.store.set(n, {
              id: a,
              data: b
            })
          }
      },
      onFlush: function (a, b, c) {
        this.chunkSize = 0;
        k.arrayEvery(this.wrappers, function (b) {
          if (!b.onFlush) return 1;
          k.arrayEvery(a, function (a) {
            a = this.store.pop(a);
            if (!a) return 1;
            b.onFlush(a.id, a.data);
            return 1
          }, this);
          return 1
        }, this);
        k.arrayEvery(this.wrappers, function (b) {
          b = b.getBufferData();
          if (!b) return 1;
          b.data = ba.stringify(b.data);
          a.push(b);
          return 1
        });
        if (a.length) {
          var d = ba.stringify(a);
          this._totalSendedSize += d.length;
          this._sender.sendPacket(d, b.url, b.hitId, c, b.timezone, b.timestamp, this.startBufferTime)
        }
      },
      getFlushSize: function () {
        return this.chunkSize
      }
    }),
    K = {},
    Cb = !1;
  try {
    K = function (a) {
      function b(d) {
        if (c[d]) return c[d].exports;
        var f = c[d] = {
          i: d,
          l: !1,
          exports: {}
        };
        a[d].call(f.exports, f, f.exports, b);
        f.l = !0;
        return f.exports
      }
      var c = {};
      b.m = a;
      b.c = c;
      b.d = function (a, c, l) {
        b.o(a, c) || Object.defineProperty(a, c, {
          configurable: !1,
          enumerable: !0,
          get: l
        })
      };
      b.r = function (a) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        })
      };
      b.n = function (a) {
        var c = a && a.__esModule ? function () {
          return a["default"]
        } : function () {
          return a
        };
        b.d(c, "a", c);
        return c
      };
      b.o = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
      };
      b.p = "";
      return b(b.s = 18)
    }([function (a, b, c) {
        function d(a, b, c) {
          for (var d = Object.keys(b), f = 0; f < d.length; ++f) void 0 !== a[d[f]] && c || (a[d[f]] = b[d[f]]);
          return a
        }

        function f(a) {
          function b(a, c) {
            if (!(this instanceof b)) return new b(a, c);
            Object.defineProperty(this, "message", {
              get: function () {
                return a
              }
            });
            Error.captureStackTrace ?
              Error.captureStackTrace(this, b) : Object.defineProperty(this, "stack", {
                value: Error().stack || ""
              });
            c && d(this, c)
          }(b.prototype = Object.create(Error.prototype)).constructor = b;
          Object.defineProperty(b.prototype, "name", {
            get: function () {
              return a
            }
          });
          b.prototype.toString = function () {
            return this.name + ": " + this.message
          };
          return b
        }
        b.asPromise = c(15);
        b.base64 = c(14);
        b.EventEmitter = c(13);
        b["float"] = c(12);
        b.inquire = c(11);
        b.utf8 = c(10);
        b.pool = c(9);
        b.LongBits = c(8);
        b.global = "undefined" != typeof m && m || "undefined" != typeof global &&
          global || "undefined" != typeof self && self || this;
        b.emptyArray = Object.freeze ? Object.freeze([]) : [];
        b.emptyObject = Object.freeze ? Object.freeze({}) : {};
        b.isNode = !!(b.global.process && b.global.process.versions && b.global.process.versions.node);
        b.isInteger = Number.isInteger || function (a) {
          return "number" == typeof a && isFinite(a) && Math.floor(a) === a
        };
        b.isString = function (a) {
          return "string" == typeof a || a instanceof String
        };
        b.isObject = function (a) {
          return a && "object" == typeof a
        };
        b.isset = b.isSet = function (a, b) {
          var c = a[b];
          return !(null ==
            c || !a.hasOwnProperty(b)) && ("object" != typeof c || 0 < (Array.isArray(c) ? c.length : Object.keys(c).length))
        };
        b.Buffer = function () {
          try {
            var a = b.inquire("buffer").Buffer;
            return a.prototype.utf8Write ? a : null
          } catch (g) {
            return null
          }
        }();
        b._Buffer_from = null;
        b._Buffer_allocUnsafe = null;
        b.newBuffer = function (a) {
          return "number" == typeof a ? b.Buffer ? b._Buffer_allocUnsafe(a) : new b.Array(a) : b.Buffer ? b._Buffer_from(a) : "undefined" == typeof Uint8Array ? a : new Uint8Array(a)
        };
        b.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        b.Long =
          b.global.dcodeIO && b.global.dcodeIO.Long || b.global.Long || b.inquire("long");
        b.key2Re = /^true|false|0|1$/;
        b.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        b.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        b.longToHash = function (a) {
          return a ? b.LongBits.from(a).toHash() : b.LongBits.zeroHash
        };
        b.longFromHash = function (a, c) {
          var d = b.LongBits.fromHash(a);
          return b.Long ? b.Long.fromBits(d.lo, d.hi, c) : d.toNumber(!!c)
        };
        b.merge = d;
        b.lcFirst = function (a) {
          return a.charAt(0).toLowerCase() + a.substring(1)
        };
        b.newError = f;
        b.ProtocolError =
          f("ProtocolError");
        b.oneOfGetter = function (a) {
          for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = 1;
          return function () {
            for (var a = Object.keys(this), c = a.length - 1; - 1 < c; --c)
              if (1 === b[a[c]] && void 0 !== this[a[c]] && null !== this[a[c]]) return a[c]
          }
        };
        b.oneOfSetter = function (a) {
          return function (b) {
            for (var c = 0; c < a.length; ++c) a[c] !== b && delete this[a[c]]
          }
        };
        b.toJSONOptions = {
          longs: String,
          enums: String,
          bytes: String,
          json: !0
        };
        b._configure = function () {
          var a = b.Buffer;
          a ? (b._Buffer_from = a.from !== Uint8Array.from && a.from || function (b, c) {
            return new a(b,
              c)
          }, b._Buffer_allocUnsafe = a.allocUnsafe || function (b) {
            return new a(b)
          }) : b._Buffer_from = b._Buffer_allocUnsafe = null
        }
      }, function (a, b, c) {
        function d(a, b) {
          return RangeError("index out of range: " + a.pos + " + " + (b || 1) + " \x3e " + a.len)
        }

        function f(a) {
          this.buf = a;
          this.pos = 0;
          this.len = a.length
        }

        function l() {
          var a = new p(0, 0),
            b = 0;
          if (!(4 < this.len - this.pos)) {
            for (; 3 > b; ++b) {
              if (this.pos >= this.len) throw d(this);
              a.lo = (a.lo | (127 & this.buf[this.pos]) << 7 * b) >>> 0;
              if (128 > this.buf[this.pos++]) return a
            }
            a.lo = (a.lo | (127 & this.buf[this.pos++]) <<
              7 * b) >>> 0;
            return a
          }
          for (; 4 > b; ++b)
            if (a.lo = (a.lo | (127 & this.buf[this.pos]) << 7 * b) >>> 0, 128 > this.buf[this.pos++]) return a;
          a.lo = (a.lo | (127 & this.buf[this.pos]) << 28) >>> 0;
          a.hi = (a.hi | (127 & this.buf[this.pos]) >> 4) >>> 0;
          if (128 > this.buf[this.pos++]) return a;
          b = 0;
          if (4 < this.len - this.pos)
            for (; 5 > b; ++b) {
              if (a.hi = (a.hi | (127 & this.buf[this.pos]) << 7 * b + 3) >>> 0, 128 > this.buf[this.pos++]) return a
            } else
              for (; 5 > b; ++b) {
                if (this.pos >= this.len) throw d(this);
                a.hi = (a.hi | (127 & this.buf[this.pos]) << 7 * b + 3) >>> 0;
                if (128 > this.buf[this.pos++]) return a
              }
          throw Error("invalid varint encoding");
        }

        function g(a, b) {
          return (a[b - 4] | a[b - 3] << 8 | a[b - 2] << 16 | a[b - 1] << 24) >>> 0
        }

        function k() {
          if (this.pos + 8 > this.len) throw d(this, 8);
          return new p(g(this.buf, this.pos += 4), g(this.buf, this.pos += 4))
        }
        a.exports = f;
        var r, u = c(0),
          p = u.LongBits,
          m = u.utf8,
          q, h = "undefined" != typeof Uint8Array ? function (a) {
            if (a instanceof Uint8Array || Array.isArray(a)) return new f(a);
            throw Error("illegal buffer");
          } : function (a) {
            if (Array.isArray(a)) return new f(a);
            throw Error("illegal buffer");
          };
        f.create = u.Buffer ? function (a) {
          return (f.create = function (a) {
            return u.Buffer.isBuffer(a) ?
              new r(a) : h(a)
          })(a)
        } : h;
        f.prototype._slice = u.Array.prototype.subarray || u.Array.prototype.slice;
        f.prototype.uint32 = (q = 4294967295, function () {
          q = (127 & this.buf[this.pos]) >>> 0;
          if (128 > this.buf[this.pos++]) return q;
          q = (q | (127 & this.buf[this.pos]) << 7) >>> 0;
          if (128 > this.buf[this.pos++]) return q;
          q = (q | (127 & this.buf[this.pos]) << 14) >>> 0;
          if (128 > this.buf[this.pos++]) return q;
          q = (q | (127 & this.buf[this.pos]) << 21) >>> 0;
          if (128 > this.buf[this.pos++]) return q;
          q = (q | (15 & this.buf[this.pos]) << 28) >>> 0;
          if (128 > this.buf[this.pos++]) return q;
          if ((this.pos += 5) > this.len) throw this.pos = this.len, d(this, 10);
          return q
        });
        f.prototype.int32 = function () {
          return 0 | this.uint32()
        };
        f.prototype.sint32 = function () {
          var a = this.uint32();
          return a >>> 1 ^ -(1 & a) | 0
        };
        f.prototype.bool = function () {
          return 0 !== this.uint32()
        };
        f.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw d(this, 4);
          return g(this.buf, this.pos += 4)
        };
        f.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) throw d(this, 4);
          return 0 | g(this.buf, this.pos += 4)
        };
        f.prototype["float"] = function () {
          if (this.pos +
            4 > this.len) throw d(this, 4);
          var a = u["float"].readFloatLE(this.buf, this.pos);
          this.pos += 4;
          return a
        };
        f.prototype["double"] = function () {
          if (this.pos + 8 > this.len) throw d(this, 4);
          var a = u["float"].readDoubleLE(this.buf, this.pos);
          this.pos += 8;
          return a
        };
        f.prototype.bytes = function () {
          var a = this.uint32(),
            b = this.pos,
            c = this.pos + a;
          if (c > this.len) throw d(this, a);
          this.pos += a;
          return Array.isArray(this.buf) ? this.buf.slice(b, c) : b === c ? new this.buf.constructor(0) : this._slice.call(this.buf, b, c)
        };
        f.prototype.string = function () {
          var a =
            this.bytes();
          return m.read(a, 0, a.length)
        };
        f.prototype.skip = function (a) {
          if ("number" == typeof a) {
            if (this.pos + a > this.len) throw d(this, a);
            this.pos += a
          } else {
            do
              if (this.pos >= this.len) throw d(this); while (128 & this.buf[this.pos++])
          }
          return this
        };
        f.prototype.skipType = function (a) {
          switch (a) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              for (; 4 != (a = 7 & this.uint32());) this.skipType(a);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + a + " at offset " +
                this.pos);
          }
          return this
        };
        f._configure = function (a) {
          r = a;
          var b = u.Long ? "toLong" : "toNumber";
          u.merge(f.prototype, {
            int64: function () {
              return l.call(this)[b](!1)
            },
            uint64: function () {
              return l.call(this)[b](!0)
            },
            sint64: function () {
              return l.call(this).zzDecode()[b](!1)
            },
            fixed64: function () {
              return k.call(this)[b](!0)
            },
            sfixed64: function () {
              return k.call(this)[b](!1)
            }
          })
        }
      }, function (a, b, c) {
        function d(a, b, c) {
          this.fn = a;
          this.len = b;
          this.next = void 0;
          this.val = c
        }

        function f() {}

        function l(a) {
          this.head = a.head;
          this.tail = a.tail;
          this.len =
            a.len;
          this.next = a.states
        }

        function g() {
          this.len = 0;
          this.tail = this.head = new d(f, 0, 0);
          this.states = null
        }

        function k(a, b, c) {
          b[c] = 255 & a
        }

        function r(a, b) {
          this.len = a;
          this.next = void 0;
          this.val = b
        }

        function m(a, b, c) {
          for (; a.hi;) b[c++] = 127 & a.lo | 128, a.lo = (a.lo >>> 7 | a.hi << 25) >>> 0, a.hi >>>= 7;
          for (; 127 < a.lo;) b[c++] = 127 & a.lo | 128, a.lo >>>= 7;
          b[c++] = a.lo
        }

        function p(a, b, c) {
          b[c] = 255 & a;
          b[c + 1] = a >>> 8 & 255;
          b[c + 2] = a >>> 16 & 255;
          b[c + 3] = a >>> 24
        }
        a.exports = g;
        var C, q = c(0),
          h = q.LongBits,
          e = q.base64,
          B = q.utf8;
        g.create = q.Buffer ? function () {
          return (g.create =
            function () {
              return new C
            })()
        } : function () {
          return new g
        };
        g.alloc = function (a) {
          return new q.Array(a)
        };
        q.Array !== Array && (g.alloc = q.pool(g.alloc, q.Array.prototype.subarray));
        g.prototype._push = function (a, b, c) {
          this.tail = this.tail.next = new d(a, b, c);
          this.len += b;
          return this
        };
        r.prototype = Object.create(d.prototype);
        r.prototype.fn = function (a, b, c) {
          for (; 127 < a;) b[c++] = 127 & a | 128, a >>>= 7;
          b[c] = a
        };
        g.prototype.uint32 = function (a) {
          this.len += (this.tail = this.tail.next = new r(128 > (a >>>= 0) ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 :
            5, a)).len;
          return this
        };
        g.prototype.int32 = function (a) {
          return 0 > a ? this._push(m, 10, h.fromNumber(a)) : this.uint32(a)
        };
        g.prototype.sint32 = function (a) {
          return this.uint32((a << 1 ^ a >> 31) >>> 0)
        };
        g.prototype.uint64 = function (a) {
          a = h.from(a);
          return this._push(m, a.length(), a)
        };
        g.prototype.int64 = g.prototype.uint64;
        g.prototype.sint64 = function (a) {
          a = h.from(a).zzEncode();
          return this._push(m, a.length(), a)
        };
        g.prototype.bool = function (a) {
          return this._push(k, 1, a ? 1 : 0)
        };
        g.prototype.fixed32 = function (a) {
          return this._push(p, 4, a >>>
            0)
        };
        g.prototype.sfixed32 = g.prototype.fixed32;
        g.prototype.fixed64 = function (a) {
          a = h.from(a);
          return this._push(p, 4, a.lo)._push(p, 4, a.hi)
        };
        g.prototype.sfixed64 = g.prototype.fixed64;
        g.prototype["float"] = function (a) {
          return this._push(q["float"].writeFloatLE, 4, a)
        };
        g.prototype["double"] = function (a) {
          return this._push(q["float"].writeDoubleLE, 8, a)
        };
        var I = q.Array.prototype.set ? function (a, b, c) {
          b.set(a, c)
        } : function (a, b, c) {
          for (var e = 0; e < a.length; ++e) b[c + e] = a[e]
        };
        g.prototype.bytes = function (a) {
          var b = a.length >>> 0;
          if (!b) return this._push(k,
            1, 0);
          if (q.isString(a)) {
            var c = g.alloc(b = e.length(a));
            e.decode(a, c, 0);
            a = c
          }
          return this.uint32(b)._push(I, b, a)
        };
        g.prototype.string = function (a) {
          var b = B.length(a);
          return b ? this.uint32(b)._push(B.write, b, a) : this._push(k, 1, 0)
        };
        g.prototype.fork = function () {
          this.states = new l(this);
          this.head = this.tail = new d(f, 0, 0);
          this.len = 0;
          return this
        };
        g.prototype.reset = function () {
          this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new d(f,
            0, 0), this.len = 0);
          return this
        };
        g.prototype.ldelim = function () {
          var a = this.head,
            b = this.tail,
            c = this.len;
          this.reset().uint32(c);
          c && (this.tail.next = a.next, this.tail = b, this.len += c);
          return this
        };
        g.prototype.finish = function () {
          for (var a = this.head.next, b = this.constructor.alloc(this.len), c = 0; a;) a.fn(a.val, b, c), c += a.len, a = a.next;
          return b
        };
        g._configure = function (a) {
          C = a
        }
      }, function (a, b, c) {
        a.exports = {}
      }, function (a, b, c) {
        function d(a, b, c) {
          if ("function" != typeof a) throw TypeError("rpcImpl must be a function");
          f.EventEmitter.call(this);
          this.rpcImpl = a;
          this.requestDelimited = !!b;
          this.responseDelimited = !!c
        }
        a.exports = d;
        var f = c(0);
        (d.prototype = Object.create(f.EventEmitter.prototype)).constructor = d;
        d.prototype.rpcCall = function C(a, b, c, d, k) {
          if (!d) throw TypeError("request must be specified");
          var g = this;
          if (!k) return f.asPromise(C, g, a, b, c, d);
          if (g.rpcImpl) try {
            return g.rpcImpl(a, b[g.requestDelimited ? "encodeDelimited" : "encode"](d).finish(), function (b, e) {
              if (b) return g.emit("error", b, a), k(b);
              if (null !== e) {
                if (!(e instanceof c)) try {
                  e = c[g.responseDelimited ?
                    "decodeDelimited" : "decode"](e)
                } catch (B) {
                  return g.emit("error", B, a), k(B)
                }
                g.emit("data", e, a);
                return k(null, e)
              }
              g.end(!0)
            })
          } catch (h) {
            g.emit("error", h, a), H(function () {
              k(h)
            }, 0)
          } else H(function () {
            k(Error("already ended"))
          }, 0)
        };
        d.prototype.end = function (a) {
          this.rpcImpl && (a || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off());
          return this
        }
      }, function (a, b, c) {
        b.Service = c(4)
      }, function (a, b, c) {
        function d(a) {
          f.call(this, a)
        }
        a.exports = d;
        var f = c(1);
        (d.prototype = Object.create(f.prototype)).constructor =
          d;
        a = c(0);
        a.Buffer && (d.prototype._slice = a.Buffer.prototype.slice);
        d.prototype.string = function () {
          var a = this.uint32();
          return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + a, this.len))
        }
      }, function (a, b, c) {
        function d() {
          l.call(this)
        }

        function f(a, b, c) {
          40 > a.length ? g.utf8.write(a, b, c) : b.utf8Write(a, c)
        }
        a.exports = d;
        var l = c(2);
        (d.prototype = Object.create(l.prototype)).constructor = d;
        var g = c(0),
          k = g.Buffer;
        d.alloc = function (a) {
          return (d.alloc = g._Buffer_allocUnsafe)(a)
        };
        var r = k && k.prototype instanceof Uint8Array &&
          "set" === k.prototype.set.name ? function (a, b, c) {
            b.set(a, c)
          } : function (a, b, c) {
            if (a.copy) a.copy(b, c, 0, a.length);
            else
              for (var d = 0; d < a.length;) b[c++] = a[d++]
          };
        d.prototype.bytes = function (a) {
          g.isString(a) && (a = g._Buffer_from(a, "base64"));
          var b = a.length >>> 0;
          this.uint32(b);
          b && this._push(r, b, a);
          return this
        };
        d.prototype.string = function (a) {
          var b = k.byteLength(a);
          this.uint32(b);
          b && this._push(f, b, a);
          return this
        }
      }, function (a, b, c) {
        function d(a, b) {
          this.lo = a >>> 0;
          this.hi = b >>> 0
        }
        a.exports = d;
        var f = c(0),
          l = d.zero = new d(0, 0);
        l.toNumber =
          function () {
            return 0
          };
        l.zzEncode = l.zzDecode = function () {
          return this
        };
        l.length = function () {
          return 1
        };
        var g = d.zeroHash = "\x00\x00\x00\x00\x00\x00\x00\x00";
        d.fromNumber = function (a) {
          if (0 === a) return l;
          var b = 0 > a;
          b && (a = -a);
          var c = a >>> 0;
          a = (a - c) / 4294967296 >>> 0;
          b && (a = ~a >>> 0, c = ~c >>> 0, 4294967295 < ++c && (c = 0, 4294967295 < ++a && (a = 0)));
          return new d(c, a)
        };
        d.from = function (a) {
          if ("number" == typeof a) return d.fromNumber(a);
          if (f.isString(a)) {
            if (!f.Long) return d.fromNumber(parseInt(a, 10));
            a = f.Long.fromString(a)
          }
          return a.low || a.high ?
            new d(a.low >>> 0, a.high >>> 0) : l
        };
        d.prototype.toNumber = function (a) {
          if (!a && this.hi >>> 31) {
            a = 1 + ~this.lo >>> 0;
            var b = ~this.hi >>> 0;
            a || (b = b + 1 >>> 0);
            return -(a + 4294967296 * b)
          }
          return this.lo + 4294967296 * this.hi
        };
        d.prototype.toLong = function (a) {
          return f.Long ? new f.Long(0 | this.lo, 0 | this.hi, !!a) : {
            low: 0 | this.lo,
            high: 0 | this.hi,
            unsigned: !!a
          }
        };
        var k = String.prototype.charCodeAt;
        d.fromHash = function (a) {
          return a === g ? l : new d((k.call(a, 0) | k.call(a, 1) << 8 | k.call(a, 2) << 16 | k.call(a, 3) << 24) >>> 0, (k.call(a, 4) | k.call(a, 5) << 8 | k.call(a,
            6) << 16 | k.call(a, 7) << 24) >>> 0)
        };
        d.prototype.toHash = function () {
          return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
        };
        d.prototype.zzEncode = function () {
          var a = this.hi >> 31;
          this.hi = ((this.hi << 1 | this.lo >>> 31) ^ a) >>> 0;
          this.lo = (this.lo << 1 ^ a) >>> 0;
          return this
        };
        d.prototype.zzDecode = function () {
          var a = -(1 & this.lo);
          this.lo = ((this.lo >>> 1 | this.hi << 31) ^ a) >>> 0;
          this.hi = (this.hi >>> 1 ^ a) >>> 0;
          return this
        };
        d.prototype.length = function () {
          var a =
            this.lo,
            b = (this.lo >>> 28 | this.hi << 4) >>> 0,
            c = this.hi >>> 24;
          return 0 === c ? 0 === b ? 16384 > a ? 128 > a ? 1 : 2 : 2097152 > a ? 3 : 4 : 16384 > b ? 128 > b ? 5 : 6 : 2097152 > b ? 7 : 8 : 128 > c ? 9 : 10
        }
      }, function (a, b, c) {
        a.exports = function (a, b, c) {
          var d = c || 8192,
            f = d >>> 1,
            l = null,
            k = d;
          return function (c) {
            if (1 > c || c > f) return a(c);
            k + c > d && (l = a(d), k = 0);
            c = b.call(l, k, k += c);
            7 & k && (k = 1 + (7 | k));
            return c
          }
        }
      }, function (a, b, c) {
        b.length = function (a) {
          for (var b = 0, c, d = 0; d < a.length; ++d) c = a.charCodeAt(d), 128 > c ? b += 1 : 2048 > c ? b += 2 : 55296 == (64512 & c) && 56320 == (64512 & a.charCodeAt(d + 1)) ? (++d,
            b += 4) : b += 3;
          return b
        };
        b.read = function (a, b, c) {
          if (1 > c - b) return "";
          for (var d, f = null, l = [], k = 0; b < c;) d = a[b++], 128 > d ? l[k++] = d : 191 < d && 224 > d ? l[k++] = (31 & d) << 6 | 63 & a[b++] : 239 < d && 365 > d ? (d = ((7 & d) << 18 | (63 & a[b++]) << 12 | (63 & a[b++]) << 6 | 63 & a[b++]) - 65536, l[k++] = 55296 + (d >> 10), l[k++] = 56320 + (1023 & d)) : l[k++] = (15 & d) << 12 | (63 & a[b++]) << 6 | 63 & a[b++], 8191 < k && ((f || (f = [])).push(String.fromCharCode.apply(String, l)), k = 0);
          return f ? (k && f.push(String.fromCharCode.apply(String, l.slice(0, k))), f.join("")) : String.fromCharCode.apply(String, l.slice(0,
            k))
        };
        b.write = function (a, b, c) {
          for (var d, f, k = c, l = 0; l < a.length; ++l) d = a.charCodeAt(l), 128 > d ? b[c++] = d : (2048 > d ? b[c++] = d >> 6 | 192 : (55296 == (64512 & d) && 56320 == (64512 & (f = a.charCodeAt(l + 1))) ? (d = 65536 + ((1023 & d) << 10) + (1023 & f), ++l, b[c++] = d >> 18 | 240, b[c++] = d >> 12 & 63 | 128) : b[c++] = d >> 12 | 224, b[c++] = d >> 6 & 63 | 128), b[c++] = 63 & d | 128);
          return c - k
        }
      }, function (a, b, c) {
        a.exports = function (a) {
          return null
        }
      }, function (a, b, c) {
        function d(a) {
          "undefined" != typeof Float32Array ? function () {
            function b(a, b, c) {
              h[0] = a;
              b[c] = e[0];
              b[c + 1] = e[1];
              b[c + 2] = e[2];
              b[c + 3] = e[3]
            }

            function c(a, b, c) {
              h[0] = a;
              b[c] = e[3];
              b[c + 1] = e[2];
              b[c + 2] = e[1];
              b[c + 3] = e[0]
            }

            function d(a, b) {
              e[0] = a[b];
              e[1] = a[b + 1];
              e[2] = a[b + 2];
              e[3] = a[b + 3];
              return h[0]
            }

            function f(a, b) {
              e[3] = a[b];
              e[2] = a[b + 1];
              e[1] = a[b + 2];
              e[0] = a[b + 3];
              return h[0]
            }
            var h = new Float32Array([-0]),
              e = new Uint8Array(h.buffer),
              g = 128 === e[3];
            a.writeFloatLE = g ? b : c;
            a.writeFloatBE = g ? c : b;
            a.readFloatLE = g ? d : f;
            a.readFloatBE = g ? f : d
          }() : function () {
            function b(a, b, c, e) {
              var d = 0 > b ? 1 : 0;
              d && (b = -b);
              if (0 === b) a(0 < 1 / b ? 0 : 2147483648, c, e);
              else if (isNaN(b)) a(2143289344,
                c, e);
              else if (3.4028234663852886e+38 < b) a((d << 31 | 2139095040) >>> 0, c, e);
              else if (1.1754943508222875e-38 > b) a((d << 31 | Math.round(b / 1.401298464324817e-45)) >>> 0, c, e);
              else {
                var h = Math.floor(Math.log(b) / Math.LN2);
                a((d << 31 | h + 127 << 23 | 8388607 & Math.round(b * Math.pow(2, -h) * 8388608)) >>> 0, c, e)
              }
            }

            function c(a, b, c) {
              c = a(b, c);
              a = 2 * (c >> 31) + 1;
              b = c >>> 23 & 255;
              c &= 8388607;
              return 255 === b ? c ? NaN : 1 / 0 * a : 0 === b ? 1.401298464324817e-45 * a * c : a * Math.pow(2, b - 150) * (c + 8388608)
            }
            a.writeFloatLE = b.bind(null, f);
            a.writeFloatBE = b.bind(null, l);
            a.readFloatLE =
              c.bind(null, g);
            a.readFloatBE = c.bind(null, k)
          }();
          "undefined" != typeof Float64Array ? function () {
            function b(a, b, c) {
              h[0] = a;
              b[c] = e[0];
              b[c + 1] = e[1];
              b[c + 2] = e[2];
              b[c + 3] = e[3];
              b[c + 4] = e[4];
              b[c + 5] = e[5];
              b[c + 6] = e[6];
              b[c + 7] = e[7]
            }

            function c(a, b, c) {
              h[0] = a;
              b[c] = e[7];
              b[c + 1] = e[6];
              b[c + 2] = e[5];
              b[c + 3] = e[4];
              b[c + 4] = e[3];
              b[c + 5] = e[2];
              b[c + 6] = e[1];
              b[c + 7] = e[0]
            }

            function d(a, b) {
              e[0] = a[b];
              e[1] = a[b + 1];
              e[2] = a[b + 2];
              e[3] = a[b + 3];
              e[4] = a[b + 4];
              e[5] = a[b + 5];
              e[6] = a[b + 6];
              e[7] = a[b + 7];
              return h[0]
            }

            function f(a, b) {
              e[7] = a[b];
              e[6] = a[b + 1];
              e[5] = a[b + 2];
              e[4] = a[b + 3];
              e[3] = a[b + 4];
              e[2] = a[b + 5];
              e[1] = a[b + 6];
              e[0] = a[b + 7];
              return h[0]
            }
            var h = new Float64Array([-0]),
              e = new Uint8Array(h.buffer),
              g = 128 === e[7];
            a.writeDoubleLE = g ? b : c;
            a.writeDoubleBE = g ? c : b;
            a.readDoubleLE = g ? d : f;
            a.readDoubleBE = g ? f : d
          }() : function () {
            function b(a, b, c, e, d, f) {
              var h = 0 > e ? 1 : 0;
              h && (e = -e);
              if (0 === e) a(0, d, f + b), a(0 < 1 / e ? 0 : 2147483648, d, f + c);
              else if (isNaN(e)) a(0, d, f + b), a(2146959360, d, f + c);
              else if (1.7976931348623157e+308 < e) a(0, d, f + b), a((h << 31 | 2146435072) >>> 0, d, f + c);
              else if (2.2250738585072014e-308 > e) e /= 5e-324,
                a(e >>> 0, d, f + b), a((h << 31 | e / 4294967296) >>> 0, d, f + c);
              else {
                var g = Math.floor(Math.log(e) / Math.LN2);
                1024 === g && (g = 1023);
                e *= Math.pow(2, -g);
                a(4503599627370496 * e >>> 0, d, f + b);
                a((h << 31 | g + 1023 << 20 | 1048576 * e & 1048575) >>> 0, d, f + c)
              }
            }

            function c(a, b, c, e, d) {
              b = a(e, d + b);
              e = a(e, d + c);
              a = 2 * (e >> 31) + 1;
              c = e >>> 20 & 2047;
              b = 4294967296 * (1048575 & e) + b;
              return 2047 === c ? b ? NaN : 1 / 0 * a : 0 === c ? 5e-324 * a * b : a * Math.pow(2, c - 1075) * (b + 4503599627370496)
            }
            a.writeDoubleLE = b.bind(null, f, 0, 4);
            a.writeDoubleBE = b.bind(null, l, 4, 0);
            a.readDoubleLE = c.bind(null, g, 0, 4);
            a.readDoubleBE = c.bind(null, k, 4, 0)
          }();
          return a
        }

        function f(a, b, c) {
          b[c] = 255 & a;
          b[c + 1] = a >>> 8 & 255;
          b[c + 2] = a >>> 16 & 255;
          b[c + 3] = a >>> 24
        }

        function l(a, b, c) {
          b[c] = a >>> 24;
          b[c + 1] = a >>> 16 & 255;
          b[c + 2] = a >>> 8 & 255;
          b[c + 3] = 255 & a
        }

        function g(a, b) {
          return (a[b] | a[b + 1] << 8 | a[b + 2] << 16 | a[b + 3] << 24) >>> 0
        }

        function k(a, b) {
          return (a[b] << 24 | a[b + 1] << 16 | a[b + 2] << 8 | a[b + 3]) >>> 0
        }
        a.exports = d(d)
      }, function (a, b, c) {
        function d() {
          this._listeners = {}
        }
        a.exports = d;
        d.prototype.on = function (a, b, c) {
          (this._listeners[a] || (this._listeners[a] = [])).push({
            fn: b,
            ctx: c ||
              this
          });
          return this
        };
        d.prototype.off = function (a, b) {
          if (void 0 === a) this._listeners = {};
          else if (void 0 === b) this._listeners[a] = [];
          else
            for (var c = this._listeners[a], d = 0; d < c.length;) c[d].fn === b ? c.splice(d, 1) : ++d;
          return this
        };
        d.prototype.emit = function (a) {
          var b = this._listeners[a];
          if (b) {
            for (var c = [], d = 1; d < arguments.length;) c.push(arguments[d++]);
            for (d = 0; d < b.length;) b[d].fn.apply(b[d++].ctx, c)
          }
          return this
        }
      }, function (a, b, c) {
        b.length = function (a) {
          var b = a.length;
          if (!b) return 0;
          for (var c = 0; 1 < --b % 4 && "\x3d" === a.charAt(b);) ++c;
          return Math.ceil(3 * a.length) / 4 - c
        };
        var d = Array(64),
          f = Array(123);
        for (a = 0; 64 > a;) f[d[a] = 26 > a ? a + 65 : 52 > a ? a + 71 : 62 > a ? a - 4 : a - 59 | 43] = a++;
        b.encode = function (a, b, c) {
          for (var f, g = null, k = [], l = 0, q = 0; b < c;) {
            var h = a[b++];
            switch (q) {
              case 0:
                k[l++] = d[h >> 2];
                f = (3 & h) << 4;
                q = 1;
                break;
              case 1:
                k[l++] = d[f | h >> 4];
                f = (15 & h) << 2;
                q = 2;
                break;
              case 2:
                k[l++] = d[f | h >> 6], k[l++] = d[63 & h], q = 0
            }
            8191 < l && ((g || (g = [])).push(String.fromCharCode.apply(String, k)), l = 0)
          }
          q && (k[l++] = d[f], k[l++] = 61, 1 === q && (k[l++] = 61));
          return g ? (l && g.push(String.fromCharCode.apply(String,
            k.slice(0, l))), g.join("")) : String.fromCharCode.apply(String, k.slice(0, l))
        };
        b.decode = function (a, b, c) {
          for (var d, g = c, k = 0, l = 0; l < a.length;) {
            var q = a.charCodeAt(l++);
            if (61 === q && 1 < k) break;
            if (void 0 === (q = f[q])) throw Error("invalid encoding");
            switch (k) {
              case 0:
                d = q;
                k = 1;
                break;
              case 1:
                b[c++] = d << 2 | (48 & q) >> 4;
                d = q;
                k = 2;
                break;
              case 2:
                b[c++] = (15 & d) << 4 | (60 & q) >> 2;
                d = q;
                k = 3;
                break;
              case 3:
                b[c++] = (3 & d) << 6 | q, k = 0
            }
          }
          if (1 === k) throw Error("invalid encoding");
          return c - g
        };
        b.test = function (a) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a)
        }
      },
      function (a, b, c) {
        a.exports = function (a, b) {
          for (var c = Array(arguments.length - 1), d = 0, f = 2, k = !0; f < arguments.length;) c[d++] = arguments[f++];
          return new Promise(function (f, g) {
            c[d] = function (a) {
              if (k)
                if (k = !1, a) g(a);
                else {
                  for (var b = Array(arguments.length - 1), c = 0; c < b.length;) b[c++] = arguments[c];
                  f.apply(null, b)
                }
            };
            try {
              a.apply(b || null, c)
            } catch (C) {
              k && (k = !1, g(C))
            }
          })
        }
      },
      function (a, b, c) {
        function d() {
          f.Reader._configure(f.BufferReader);
          f.util._configure()
        }
        var f = b;
        f.build = "minimal";
        f.Writer = c(2);
        f.BufferWriter = c(7);
        f.Reader =
          c(1);
        f.BufferReader = c(6);
        f.util = c(0);
        f.rpc = c(5);
        f.roots = c(3);
        f.configure = d;
        f.Writer._configure(f.BufferWriter);
        d()
      },
      function (a, b, c) {
        a.exports = c(16)
      },
      function (a, b, c) {
        b = c(17);
        var d = b.Reader,
          f = b.Writer,
          k = b.util,
          g = b.roots["default"] || (b.roots["default"] = {});
        g.ru = function () {
          var a = {};
          a.yandex = function () {
            var a = {};
            a.metrika = function () {
              var a = {};
              a.wv2 = function () {
                var a = {};
                a.proto = function () {
                  var a = {};
                  a.BufferWrapper = function () {
                    function a(a) {
                      this.buffer = [];
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null !=
                          a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.buffer = k.emptyArray;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      if (null != a.buffer && a.buffer.length)
                        for (var c = 0; c < a.buffer.length; ++c) g.ru.yandex.metrika.wv2.proto.Buffer.encode(a.buffer[c], b.uint32(10).fork()).ldelim();
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.BufferWrapper; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.buffer &&
                              e.buffer.length || (e.buffer = []);
                            e.buffer.push(g.ru.yandex.metrika.wv2.proto.Buffer.decode(a, a.uint32()));
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.Buffer = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.stamp = 0;
                    a.prototype.data = null;
                    a.prototype.page = 0;
                    a.prototype.chunk = k.newBuffer([]);
                    a.prototype.end = !1;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.stamp && Object.hasOwnProperty.call(a,
                        "stamp") && b.uint32(8).int32(a.stamp);
                      null != a.data && Object.hasOwnProperty.call(a, "data") && g.ru.yandex.metrika.wv2.proto.Wrapper.encode(a.data, b.uint32(18).fork()).ldelim();
                      null != a.page && Object.hasOwnProperty.call(a, "page") && b.uint32(24).int32(a.page);
                      null != a.chunk && Object.hasOwnProperty.call(a, "chunk") && b.uint32(34).bytes(a.chunk);
                      null != a.end && Object.hasOwnProperty.call(a, "end") && b.uint32(40).bool(a.end);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos +
                          b, e = new g.ru.yandex.metrika.wv2.proto.Buffer; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.stamp = a.int32();
                            break;
                          case 2:
                            e.data = g.ru.yandex.metrika.wv2.proto.Wrapper.decode(a, a.uint32());
                            break;
                          case 3:
                            e.page = a.int32();
                            break;
                          case 4:
                            e.chunk = a.bytes();
                            break;
                          case 5:
                            e.end = a.bool();
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.Wrapper = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.page = null;
                    a.prototype.mutation = null;
                    a.prototype.event =
                      null;
                    a.prototype.articleInfo = null;
                    a.prototype.publishersHeader = null;
                    a.prototype.activity = 0;
                    var b;
                    Object.defineProperty(a.prototype, "data", {
                      get: k.oneOfGetter(b = "page mutation event articleInfo publishersHeader activity".split(" ")),
                      set: k.oneOfSetter(b)
                    });
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.page && Object.hasOwnProperty.call(a, "page") && g.ru.yandex.metrika.wv2.proto.Page.encode(a.page, b.uint32(10).fork()).ldelim();
                      null != a.mutation && Object.hasOwnProperty.call(a,
                        "mutation") && g.ru.yandex.metrika.wv2.proto.Mutation.encode(a.mutation, b.uint32(18).fork()).ldelim();
                      null != a.event && Object.hasOwnProperty.call(a, "event") && g.ru.yandex.metrika.wv2.proto.Event.encode(a.event, b.uint32(26).fork()).ldelim();
                      null != a.articleInfo && Object.hasOwnProperty.call(a, "articleInfo") && g.ru.yandex.metrika.wv2.proto.ArticleInfo.encode(a.articleInfo, b.uint32(34).fork()).ldelim();
                      null != a.publishersHeader && Object.hasOwnProperty.call(a, "publishersHeader") && g.ru.yandex.metrika.wv2.proto.PublishersHeader.encode(a.publishersHeader,
                        b.uint32(42).fork()).ldelim();
                      null != a.activity && Object.hasOwnProperty.call(a, "activity") && b.uint32(48).uint32(a.activity);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Wrapper; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.page = g.ru.yandex.metrika.wv2.proto.Page.decode(a, a.uint32());
                            break;
                          case 2:
                            e.mutation = g.ru.yandex.metrika.wv2.proto.Mutation.decode(a, a.uint32());
                            break;
                          case 3:
                            e.event = g.ru.yandex.metrika.wv2.proto.Event.decode(a,
                              a.uint32());
                            break;
                          case 4:
                            e.articleInfo = g.ru.yandex.metrika.wv2.proto.ArticleInfo.decode(a, a.uint32());
                            break;
                          case 5:
                            e.publishersHeader = g.ru.yandex.metrika.wv2.proto.PublishersHeader.decode(a, a.uint32());
                            break;
                          case 6:
                            e.activity = a.uint32();
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.Page = function () {
                    function a(a) {
                      this.content = [];
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.meta = null;
                    a.prototype.content = k.emptyArray;
                    a.prototype.frameId = 0;
                    a.prototype.tabId =
                      "";
                    a.prototype.recordStamp = k.Long ? k.Long.fromBits(0, 0, !1) : 0;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.meta && Object.hasOwnProperty.call(a, "meta") && g.ru.yandex.metrika.wv2.proto.Page.Meta.encode(a.meta, b.uint32(10).fork()).ldelim();
                      if (null != a.content && a.content.length)
                        for (var c = 0; c < a.content.length; ++c) g.ru.yandex.metrika.wv2.proto.Page.Content.encode(a.content[c], b.uint32(18).fork()).ldelim();
                      null != a.frameId && Object.hasOwnProperty.call(a, "frameId") && b.uint32(24).sint32(a.frameId);
                      null != a.tabId && Object.hasOwnProperty.call(a, "tabId") && b.uint32(34).string(a.tabId);
                      null != a.recordStamp && Object.hasOwnProperty.call(a, "recordStamp") && b.uint32(40).int64(a.recordStamp);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Page; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.meta = g.ru.yandex.metrika.wv2.proto.Page.Meta.decode(a, a.uint32());
                            break;
                          case 2:
                            e.content && e.content.length || (e.content = []);
                            e.content.push(g.ru.yandex.metrika.wv2.proto.Page.Content.decode(a,
                              a.uint32()));
                            break;
                          case 3:
                            e.frameId = a.sint32();
                            break;
                          case 4:
                            e.tabId = a.string();
                            break;
                          case 5:
                            e.recordStamp = a.int64();
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    a.Box = function () {
                      function a(a) {
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.width = 0;
                      a.prototype.height = 0;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.width && Object.hasOwnProperty.call(a, "width") && b.uint32(8).int32(a.width);
                        null != a.height && Object.hasOwnProperty.call(a,
                          "height") && b.uint32(16).int32(a.height);
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Page.Box; a.pos < c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.width = a.int32();
                              break;
                            case 2:
                              e.height = a.int32();
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                      return a
                    }();
                    a.Location = function () {
                      function a(a) {
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.host = "";
                      a.prototype.protocol = "";
                      a.prototype.path = "";
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.host && Object.hasOwnProperty.call(a, "host") && b.uint32(10).string(a.host);
                        null != a.protocol && Object.hasOwnProperty.call(a, "protocol") && b.uint32(18).string(a.protocol);
                        null != a.path && Object.hasOwnProperty.call(a, "path") && b.uint32(26).string(a.path);
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Page.Location; a.pos <
                          c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.host = a.string();
                              break;
                            case 2:
                              e.protocol = a.string();
                              break;
                            case 3:
                              e.path = a.string();
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                      return a
                    }();
                    a.Scroll = function () {
                      function a(a) {
                        this.scroll = [];
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.target = 0;
                      a.prototype.scroll = k.emptyArray;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.target && Object.hasOwnProperty.call(a, "target") &&
                          b.uint32(8).int32(a.target);
                        if (null != a.scroll && a.scroll.length) {
                          b.uint32(18).fork();
                          for (var c = 0; c < a.scroll.length; ++c) b.int32(a.scroll[c]);
                          b.ldelim()
                        }
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Page.Scroll; a.pos < c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.target = a.int32();
                              break;
                            case 2:
                              e.scroll && e.scroll.length || (e.scroll = []);
                              if (2 == (7 & h))
                                for (h = a.uint32() + a.pos; a.pos < h;) e.scroll.push(a.int32());
                              else e.scroll.push(a.int32());
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                      return a
                    }();
                    a.Meta = function () {
                      function a(a) {
                        this.initialScroll = [];
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.doctype = "";
                      a.prototype.title = "";
                      a.prototype.address = "";
                      a.prototype.ua = "";
                      a.prototype.referrer = "";
                      a.prototype.base = "";
                      a.prototype.hasBase = !1;
                      a.prototype.screen = null;
                      a.prototype.viewport = null;
                      a.prototype.location = null;
                      a.prototype.initialScroll = k.emptyArray;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode =
                        function (a, b) {
                          b || (b = f.create());
                          null != a.doctype && Object.hasOwnProperty.call(a, "doctype") && b.uint32(10).string(a.doctype);
                          null != a.title && Object.hasOwnProperty.call(a, "title") && b.uint32(18).string(a.title);
                          null != a.address && Object.hasOwnProperty.call(a, "address") && b.uint32(26).string(a.address);
                          null != a.ua && Object.hasOwnProperty.call(a, "ua") && b.uint32(34).string(a.ua);
                          null != a.referrer && Object.hasOwnProperty.call(a, "referrer") && b.uint32(42).string(a.referrer);
                          null != a.base && Object.hasOwnProperty.call(a,
                            "base") && b.uint32(50).string(a.base);
                          null != a.hasBase && Object.hasOwnProperty.call(a, "hasBase") && b.uint32(56).bool(a.hasBase);
                          null != a.screen && Object.hasOwnProperty.call(a, "screen") && g.ru.yandex.metrika.wv2.proto.Page.Box.encode(a.screen, b.uint32(66).fork()).ldelim();
                          null != a.viewport && Object.hasOwnProperty.call(a, "viewport") && g.ru.yandex.metrika.wv2.proto.Page.Box.encode(a.viewport, b.uint32(74).fork()).ldelim();
                          null != a.location && Object.hasOwnProperty.call(a, "location") && g.ru.yandex.metrika.wv2.proto.Page.Location.encode(a.location,
                            b.uint32(82).fork()).ldelim();
                          if (null != a.initialScroll && a.initialScroll.length)
                            for (var c = 0; c < a.initialScroll.length; ++c) g.ru.yandex.metrika.wv2.proto.Page.Scroll.encode(a.initialScroll[c], b.uint32(90).fork()).ldelim();
                          return b
                        };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Page.Meta; a.pos < c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.doctype = a.string();
                              break;
                            case 2:
                              e.title = a.string();
                              break;
                            case 3:
                              e.address = a.string();
                              break;
                            case 4:
                              e.ua = a.string();
                              break;
                            case 5:
                              e.referrer = a.string();
                              break;
                            case 6:
                              e.base = a.string();
                              break;
                            case 7:
                              e.hasBase = a.bool();
                              break;
                            case 8:
                              e.screen = g.ru.yandex.metrika.wv2.proto.Page.Box.decode(a, a.uint32());
                              break;
                            case 9:
                              e.viewport = g.ru.yandex.metrika.wv2.proto.Page.Box.decode(a, a.uint32());
                              break;
                            case 10:
                              e.location = g.ru.yandex.metrika.wv2.proto.Page.Location.decode(a, a.uint32());
                              break;
                            case 11:
                              e.initialScroll && e.initialScroll.length || (e.initialScroll = []);
                              e.initialScroll.push(g.ru.yandex.metrika.wv2.proto.Page.Scroll.decode(a,
                                a.uint32()));
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                      return a
                    }();
                    a.Content = function () {
                      function a(a) {
                        this.attributes = {};
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.id = 0;
                      a.prototype.name = "";
                      a.prototype.attributes = k.emptyObject;
                      a.prototype.parent = 0;
                      a.prototype.content = "";
                      a.prototype.next = 0;
                      a.prototype.prev = 0;
                      a.prototype.hidden = !1;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.id && Object.hasOwnProperty.call(a,
                          "id") && b.uint32(8).int32(a.id);
                        null != a.name && Object.hasOwnProperty.call(a, "name") && b.uint32(18).string(a.name);
                        if (null != a.attributes && Object.hasOwnProperty.call(a, "attributes"))
                          for (var c = Object.keys(a.attributes), d = 0; d < c.length; ++d) b.uint32(26).fork().uint32(10).string(c[d]).uint32(18).string(a.attributes[c[d]]).ldelim();
                        null != a.parent && Object.hasOwnProperty.call(a, "parent") && b.uint32(32).int32(a.parent);
                        null != a.content && Object.hasOwnProperty.call(a, "content") && b.uint32(42).string(a.content);
                        null !=
                          a.next && Object.hasOwnProperty.call(a, "next") && b.uint32(48).int32(a.next);
                        null != a.prev && Object.hasOwnProperty.call(a, "prev") && b.uint32(56).int32(a.prev);
                        null != a.hidden && Object.hasOwnProperty.call(a, "hidden") && b.uint32(64).bool(a.hidden);
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c, e = void 0 === b ? a.len : a.pos + b, h = new g.ru.yandex.metrika.wv2.proto.Page.Content; a.pos < e;) switch (c = a.uint32(), c >>> 3) {
                          case 1:
                            h.id = a.int32();
                            break;
                          case 2:
                            h.name = a.string();
                            break;
                          case 3:
                            a.skip().pos++;
                            h.attributes === k.emptyObject && (h.attributes = {});
                            c = a.string();
                            a.pos++;
                            h.attributes[c] = a.string();
                            break;
                          case 4:
                            h.parent = a.int32();
                            break;
                          case 5:
                            h.content = a.string();
                            break;
                          case 6:
                            h.next = a.int32();
                            break;
                          case 7:
                            h.prev = a.int32();
                            break;
                          case 8:
                            h.hidden = a.bool();
                            break;
                          default:
                            a.skipType(7 & c)
                        }
                        return h
                      };
                      return a
                    }();
                    return a
                  }();
                  a.Mutation = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.target = 0;
                    a.prototype.stamp = 0;
                    a.prototype.meta = null;
                    a.prototype.frameId = 0;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.target && Object.hasOwnProperty.call(a, "target") && b.uint32(8).int32(a.target);
                      null != a.stamp && Object.hasOwnProperty.call(a, "stamp") && b.uint32(16).int32(a.stamp);
                      null != a.meta && Object.hasOwnProperty.call(a, "meta") && g.ru.yandex.metrika.wv2.proto.Mutation.Meta.encode(a.meta, b.uint32(26).fork()).ldelim();
                      null != a.frameId && Object.hasOwnProperty.call(a, "frameId") && b.uint32(32).sint32(a.frameId);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Mutation; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.target = a.int32();
                            break;
                          case 2:
                            e.stamp = a.int32();
                            break;
                          case 3:
                            e.meta = g.ru.yandex.metrika.wv2.proto.Mutation.Meta.decode(a, a.uint32());
                            break;
                          case 4:
                            e.frameId = a.sint32();
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    a.Delete = function () {
                      function a(a) {
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] =
                            a[b[c]])
                      }
                      a.prototype.id = 0;
                      a.prototype.pr = 0;
                      a.prototype.nx = 0;
                      a.prototype.pa = 0;
                      a.prototype.i = 0;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).int32(a.id);
                        null != a.pr && Object.hasOwnProperty.call(a, "pr") && b.uint32(16).int32(a.pr);
                        null != a.nx && Object.hasOwnProperty.call(a, "nx") && b.uint32(24).int32(a.nx);
                        null != a.pa && Object.hasOwnProperty.call(a, "pa") && b.uint32(32).int32(a.pa);
                        null != a.i && Object.hasOwnProperty.call(a,
                          "i") && b.uint32(40).int32(a.i);
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Mutation.Delete; a.pos < c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.id = a.int32();
                              break;
                            case 2:
                              e.pr = a.int32();
                              break;
                            case 3:
                              e.nx = a.int32();
                              break;
                            case 4:
                              e.pa = a.int32();
                              break;
                            case 5:
                              e.i = a.int32();
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                      return a
                    }();
                    a.Add = function () {
                      function a(a) {
                        this.at = {};
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null !=
                            a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.id = 0;
                      a.prototype.nm = "";
                      a.prototype.pa = 0;
                      a.prototype.ns = "";
                      a.prototype.pr = 0;
                      a.prototype.at = k.emptyObject;
                      a.prototype.ct = "";
                      a.prototype.nx = 0;
                      a.prototype.i = 0;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).int32(a.id);
                        null != a.nm && Object.hasOwnProperty.call(a, "nm") && b.uint32(18).string(a.nm);
                        null != a.pa && Object.hasOwnProperty.call(a, "pa") && b.uint32(24).int32(a.pa);
                        null !=
                          a.ns && Object.hasOwnProperty.call(a, "ns") && b.uint32(34).string(a.ns);
                        null != a.pr && Object.hasOwnProperty.call(a, "pr") && b.uint32(40).int32(a.pr);
                        if (null != a.at && Object.hasOwnProperty.call(a, "at"))
                          for (var c = Object.keys(a.at), d = 0; d < c.length; ++d) b.uint32(50).fork().uint32(10).string(c[d]).uint32(18).string(a.at[c[d]]).ldelim();
                        null != a.ct && Object.hasOwnProperty.call(a, "ct") && b.uint32(58).string(a.ct);
                        null != a.nx && Object.hasOwnProperty.call(a, "nx") && b.uint32(64).int32(a.nx);
                        null != a.i && Object.hasOwnProperty.call(a,
                          "i") && b.uint32(72).int32(a.i);
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c, e = void 0 === b ? a.len : a.pos + b, h = new g.ru.yandex.metrika.wv2.proto.Mutation.Add; a.pos < e;) switch (c = a.uint32(), c >>> 3) {
                          case 1:
                            h.id = a.int32();
                            break;
                          case 2:
                            h.nm = a.string();
                            break;
                          case 3:
                            h.pa = a.int32();
                            break;
                          case 4:
                            h.ns = a.string();
                            break;
                          case 5:
                            h.pr = a.int32();
                            break;
                          case 6:
                            a.skip().pos++;
                            h.at === k.emptyObject && (h.at = {});
                            c = a.string();
                            a.pos++;
                            h.at[c] = a.string();
                            break;
                          case 7:
                            h.ct = a.string();
                            break;
                          case 8:
                            h.nx = a.int32();
                            break;
                          case 9:
                            h.i = a.int32();
                            break;
                          default:
                            a.skipType(7 & c)
                        }
                        return h
                      };
                      return a
                    }();
                    a.BeforeAfter = function () {
                      function a(a) {
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.o = "";
                      a.prototype.n = "";
                      a.prototype.r = !1;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.o && Object.hasOwnProperty.call(a, "o") && b.uint32(10).string(a.o);
                        null != a.n && Object.hasOwnProperty.call(a, "n") && b.uint32(18).string(a.n);
                        null != a.r && Object.hasOwnProperty.call(a,
                          "r") && b.uint32(24).bool(a.r);
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Mutation.BeforeAfter; a.pos < c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.o = a.string();
                              break;
                            case 2:
                              e.n = a.string();
                              break;
                            case 3:
                              e.r = a.bool();
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                      return a
                    }();
                    a.AttributeChange = function () {
                      function a(a) {
                        this.at = {};
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.id =
                        0;
                      a.prototype.at = k.emptyObject;
                      a.prototype.i = 0;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).int32(a.id);
                        if (null != a.at && Object.hasOwnProperty.call(a, "at"))
                          for (var c = Object.keys(a.at), d = 0; d < c.length; ++d) b.uint32(18).fork().uint32(10).string(c[d]), g.ru.yandex.metrika.wv2.proto.Mutation.BeforeAfter.encode(a.at[c[d]], b.uint32(18).fork()).ldelim().ldelim();
                        null != a.i && Object.hasOwnProperty.call(a, "i") && b.uint32(24).int32(a.i);
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c, e = void 0 === b ? a.len : a.pos + b, h = new g.ru.yandex.metrika.wv2.proto.Mutation.AttributeChange; a.pos < e;) switch (c = a.uint32(), c >>> 3) {
                          case 1:
                            h.id = a.int32();
                            break;
                          case 2:
                            a.skip().pos++;
                            h.at === k.emptyObject && (h.at = {});
                            c = a.string();
                            a.pos++;
                            h.at[c] = g.ru.yandex.metrika.wv2.proto.Mutation.BeforeAfter.decode(a, a.uint32());
                            break;
                          case 3:
                            h.i = a.int32();
                            break;
                          default:
                            a.skipType(7 & c)
                        }
                        return h
                      };
                      return a
                    }();
                    a.TextChange = function () {
                      function a(a) {
                        if (a)
                          for (var b =
                              Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.id = 0;
                      a.prototype.ct = null;
                      a.prototype.i = 0;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).int32(a.id);
                        null != a.ct && Object.hasOwnProperty.call(a, "ct") && g.ru.yandex.metrika.wv2.proto.Mutation.BeforeAfter.encode(a.ct, b.uint32(18).fork()).ldelim();
                        null != a.i && Object.hasOwnProperty.call(a, "i") && b.uint32(24).int32(a.i);
                        return b
                      };
                      a.decode =
                        function (a, b) {
                          a instanceof d || (a = d.create(a));
                          for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Mutation.TextChange; a.pos < c;) {
                            var h = a.uint32();
                            switch (h >>> 3) {
                              case 1:
                                e.id = a.int32();
                                break;
                              case 2:
                                e.ct = g.ru.yandex.metrika.wv2.proto.Mutation.BeforeAfter.decode(a, a.uint32());
                                break;
                              case 3:
                                e.i = a.int32();
                                break;
                              default:
                                a.skipType(7 & h)
                            }
                          }
                          return e
                        };
                      return a
                    }();
                    a.Changes = function () {
                      function a(a) {
                        this.a = [];
                        this.b = [];
                        this.c = [];
                        this.d = [];
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] &&
                            (this[b[c]] = a[b[c]])
                      }
                      a.prototype.a = k.emptyArray;
                      a.prototype.b = k.emptyArray;
                      a.prototype.c = k.emptyArray;
                      a.prototype.d = k.emptyArray;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        if (null != a.a && a.a.length)
                          for (var c = 0; c < a.a.length; ++c) g.ru.yandex.metrika.wv2.proto.Mutation.Delete.encode(a.a[c], b.uint32(10).fork()).ldelim();
                        if (null != a.b && a.b.length)
                          for (c = 0; c < a.b.length; ++c) g.ru.yandex.metrika.wv2.proto.Mutation.Add.encode(a.b[c], b.uint32(18).fork()).ldelim();
                        if (null != a.c &&
                          a.c.length)
                          for (c = 0; c < a.c.length; ++c) g.ru.yandex.metrika.wv2.proto.Mutation.AttributeChange.encode(a.c[c], b.uint32(26).fork()).ldelim();
                        if (null != a.d && a.d.length)
                          for (c = 0; c < a.d.length; ++c) g.ru.yandex.metrika.wv2.proto.Mutation.TextChange.encode(a.d[c], b.uint32(34).fork()).ldelim();
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Mutation.Changes; a.pos < c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.a && e.a.length || (e.a = []);
                              e.a.push(g.ru.yandex.metrika.wv2.proto.Mutation.Delete.decode(a, a.uint32()));
                              break;
                            case 2:
                              e.b && e.b.length || (e.b = []);
                              e.b.push(g.ru.yandex.metrika.wv2.proto.Mutation.Add.decode(a, a.uint32()));
                              break;
                            case 3:
                              e.c && e.c.length || (e.c = []);
                              e.c.push(g.ru.yandex.metrika.wv2.proto.Mutation.AttributeChange.decode(a, a.uint32()));
                              break;
                            case 4:
                              e.d && e.d.length || (e.d = []);
                              e.d.push(g.ru.yandex.metrika.wv2.proto.Mutation.TextChange.decode(a, a.uint32()));
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                      return a
                    }();
                    a.Meta = function () {
                      function a(a) {
                        this.changes = [];
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.index = 0;
                      a.prototype.changes = k.emptyArray;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.index && Object.hasOwnProperty.call(a, "index") && b.uint32(8).int32(a.index);
                        if (null != a.changes && a.changes.length)
                          for (var c = 0; c < a.changes.length; ++c) g.ru.yandex.metrika.wv2.proto.Mutation.Changes.encode(a.changes[c], b.uint32(18).fork()).ldelim();
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof
                        d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Mutation.Meta; a.pos < c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.index = a.int32();
                              break;
                            case 2:
                              e.changes && e.changes.length || (e.changes = []);
                              e.changes.push(g.ru.yandex.metrika.wv2.proto.Mutation.Changes.decode(a, a.uint32()));
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                      return a
                    }();
                    return a
                  }();
                  a.Event = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.type =
                      0;
                    a.prototype.target = 0;
                    a.prototype.frameId = 0;
                    a.prototype.mouseEvent = null;
                    a.prototype.scrollEvent = null;
                    a.prototype.windowEvent = null;
                    a.prototype.selectionEvent = null;
                    a.prototype.changeEvent = null;
                    a.prototype.touchEvent = null;
                    a.prototype.methodEvent = null;
                    a.prototype.propertyEvent = null;
                    a.prototype.zoomEvent = null;
                    a.prototype.resizeEvent = null;
                    a.prototype.keystrokesEvent = null;
                    a.prototype.deviceRotationEvent = null;
                    a.prototype.fatalErrorEvent = null;
                    a.prototype.hashchangeEvent = null;
                    var b;
                    Object.defineProperty(a.prototype,
                      "meta", {
                        get: k.oneOfGetter(b = "mouseEvent scrollEvent windowEvent selectionEvent changeEvent touchEvent methodEvent propertyEvent zoomEvent resizeEvent keystrokesEvent deviceRotationEvent fatalErrorEvent hashchangeEvent".split(" ")),
                        set: k.oneOfSetter(b)
                      });
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.type && Object.hasOwnProperty.call(a, "type") && b.uint32(8).int32(a.type);
                      null != a.target && Object.hasOwnProperty.call(a, "target") && b.uint32(16).sint32(a.target);
                      null !=
                        a.frameId && Object.hasOwnProperty.call(a, "frameId") && b.uint32(24).sint32(a.frameId);
                      null != a.mouseEvent && Object.hasOwnProperty.call(a, "mouseEvent") && g.ru.yandex.metrika.wv2.proto.MouseEvent.encode(a.mouseEvent, b.uint32(34).fork()).ldelim();
                      null != a.scrollEvent && Object.hasOwnProperty.call(a, "scrollEvent") && g.ru.yandex.metrika.wv2.proto.ScrollEvent.encode(a.scrollEvent, b.uint32(42).fork()).ldelim();
                      null != a.windowEvent && Object.hasOwnProperty.call(a, "windowEvent") && g.ru.yandex.metrika.wv2.proto.WindowEvent.encode(a.windowEvent,
                        b.uint32(50).fork()).ldelim();
                      null != a.selectionEvent && Object.hasOwnProperty.call(a, "selectionEvent") && g.ru.yandex.metrika.wv2.proto.SelectionEvent.encode(a.selectionEvent, b.uint32(58).fork()).ldelim();
                      null != a.changeEvent && Object.hasOwnProperty.call(a, "changeEvent") && g.ru.yandex.metrika.wv2.proto.ChangeEvent.encode(a.changeEvent, b.uint32(66).fork()).ldelim();
                      null != a.touchEvent && Object.hasOwnProperty.call(a, "touchEvent") && g.ru.yandex.metrika.wv2.proto.TouchEvent.encode(a.touchEvent, b.uint32(74).fork()).ldelim();
                      null != a.methodEvent && Object.hasOwnProperty.call(a, "methodEvent") && g.ru.yandex.metrika.wv2.proto.MethodEvent.encode(a.methodEvent, b.uint32(82).fork()).ldelim();
                      null != a.propertyEvent && Object.hasOwnProperty.call(a, "propertyEvent") && g.ru.yandex.metrika.wv2.proto.PropertyEvent.encode(a.propertyEvent, b.uint32(90).fork()).ldelim();
                      null != a.zoomEvent && Object.hasOwnProperty.call(a, "zoomEvent") && g.ru.yandex.metrika.wv2.proto.ZoomEvent.encode(a.zoomEvent, b.uint32(98).fork()).ldelim();
                      null != a.resizeEvent && Object.hasOwnProperty.call(a,
                        "resizeEvent") && g.ru.yandex.metrika.wv2.proto.ResizeEvent.encode(a.resizeEvent, b.uint32(106).fork()).ldelim();
                      null != a.keystrokesEvent && Object.hasOwnProperty.call(a, "keystrokesEvent") && g.ru.yandex.metrika.wv2.proto.KeystrokesEvent.encode(a.keystrokesEvent, b.uint32(114).fork()).ldelim();
                      null != a.deviceRotationEvent && Object.hasOwnProperty.call(a, "deviceRotationEvent") && g.ru.yandex.metrika.wv2.proto.DeviceRotationEvent.encode(a.deviceRotationEvent, b.uint32(122).fork()).ldelim();
                      null != a.fatalErrorEvent &&
                        Object.hasOwnProperty.call(a, "fatalErrorEvent") && g.ru.yandex.metrika.wv2.proto.FatalErrorEvent.encode(a.fatalErrorEvent, b.uint32(130).fork()).ldelim();
                      null != a.hashchangeEvent && Object.hasOwnProperty.call(a, "hashchangeEvent") && g.ru.yandex.metrika.wv2.proto.HashchangeEvent.encode(a.hashchangeEvent, b.uint32(138).fork()).ldelim();
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.Event; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>>
                          3) {
                          case 1:
                            e.type = a.int32();
                            break;
                          case 2:
                            e.target = a.sint32();
                            break;
                          case 3:
                            e.frameId = a.sint32();
                            break;
                          case 4:
                            e.mouseEvent = g.ru.yandex.metrika.wv2.proto.MouseEvent.decode(a, a.uint32());
                            break;
                          case 5:
                            e.scrollEvent = g.ru.yandex.metrika.wv2.proto.ScrollEvent.decode(a, a.uint32());
                            break;
                          case 6:
                            e.windowEvent = g.ru.yandex.metrika.wv2.proto.WindowEvent.decode(a, a.uint32());
                            break;
                          case 7:
                            e.selectionEvent = g.ru.yandex.metrika.wv2.proto.SelectionEvent.decode(a, a.uint32());
                            break;
                          case 8:
                            e.changeEvent = g.ru.yandex.metrika.wv2.proto.ChangeEvent.decode(a,
                              a.uint32());
                            break;
                          case 9:
                            e.touchEvent = g.ru.yandex.metrika.wv2.proto.TouchEvent.decode(a, a.uint32());
                            break;
                          case 10:
                            e.methodEvent = g.ru.yandex.metrika.wv2.proto.MethodEvent.decode(a, a.uint32());
                            break;
                          case 11:
                            e.propertyEvent = g.ru.yandex.metrika.wv2.proto.PropertyEvent.decode(a, a.uint32());
                            break;
                          case 12:
                            e.zoomEvent = g.ru.yandex.metrika.wv2.proto.ZoomEvent.decode(a, a.uint32());
                            break;
                          case 13:
                            e.resizeEvent = g.ru.yandex.metrika.wv2.proto.ResizeEvent.decode(a, a.uint32());
                            break;
                          case 14:
                            e.keystrokesEvent = g.ru.yandex.metrika.wv2.proto.KeystrokesEvent.decode(a,
                              a.uint32());
                            break;
                          case 15:
                            e.deviceRotationEvent = g.ru.yandex.metrika.wv2.proto.DeviceRotationEvent.decode(a, a.uint32());
                            break;
                          case 16:
                            e.fatalErrorEvent = g.ru.yandex.metrika.wv2.proto.FatalErrorEvent.decode(a, a.uint32());
                            break;
                          case 17:
                            e.hashchangeEvent = g.ru.yandex.metrika.wv2.proto.HashchangeEvent.decode(a, a.uint32());
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.MouseEvent = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.x =
                      0;
                    a.prototype.y = 0;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.x && Object.hasOwnProperty.call(a, "x") && b.uint32(8).int32(a.x);
                      null != a.y && Object.hasOwnProperty.call(a, "y") && b.uint32(16).int32(a.y);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.MouseEvent; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.x = a.int32();
                            break;
                          case 2:
                            e.y = a.int32();
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.ScrollEvent = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.x = 0;
                    a.prototype.y = 0;
                    a.prototype.page = !1;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.x && Object.hasOwnProperty.call(a, "x") && b.uint32(8).int32(a.x);
                      null != a.y && Object.hasOwnProperty.call(a, "y") && b.uint32(16).int32(a.y);
                      null != a.page && Object.hasOwnProperty.call(a, "page") && b.uint32(24).bool(a.page);
                      return b
                    };
                    a.decode =
                      function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.ScrollEvent; a.pos < c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.x = a.int32();
                              break;
                            case 2:
                              e.y = a.int32();
                              break;
                            case 3:
                              e.page = a.bool();
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                    return a
                  }();
                  a.WindowEvent = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.WindowEvent; a.pos < c;) {
                        var h = a.uint32();
                        a.skipType(7 & h)
                      }
                      return e
                    };
                    return a
                  }();
                  a.SelectionEvent = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.start = 0;
                    a.prototype.end = 0;
                    a.prototype.startNode = 0;
                    a.prototype.endNode = 0;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.start && Object.hasOwnProperty.call(a, "start") && b.uint32(8).int32(a.start);
                      null != a.end && Object.hasOwnProperty.call(a, "end") && b.uint32(16).int32(a.end);
                      null != a.startNode && Object.hasOwnProperty.call(a, "startNode") && b.uint32(24).int32(a.startNode);
                      null != a.endNode && Object.hasOwnProperty.call(a, "endNode") && b.uint32(32).int32(a.endNode);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.SelectionEvent; a.pos < c;) {
                        var h =
                          a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.start = a.int32();
                            break;
                          case 2:
                            e.end = a.int32();
                            break;
                          case 3:
                            e.startNode = a.int32();
                            break;
                          case 4:
                            e.endNode = a.int32();
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.ChangeEvent = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.value = "";
                    a.prototype.checked = !1;
                    a.prototype.hidden = !1;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.value && Object.hasOwnProperty.call(a,
                        "value") && b.uint32(10).string(a.value);
                      null != a.checked && Object.hasOwnProperty.call(a, "checked") && b.uint32(16).bool(a.checked);
                      null != a.hidden && Object.hasOwnProperty.call(a, "hidden") && b.uint32(24).bool(a.hidden);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.ChangeEvent; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.value = a.string();
                            break;
                          case 2:
                            e.checked = a.bool();
                            break;
                          case 3:
                            e.hidden = a.bool();
                            break;
                          default:
                            a.skipType(7 &
                              h)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.TouchEvent = function () {
                    function a(a) {
                      this.touches = [];
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.touches = k.emptyArray;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      if (null != a.touches && a.touches.length)
                        for (var c = 0; c < a.touches.length; ++c) g.ru.yandex.metrika.wv2.proto.TouchEvent.SubMeta.encode(a.touches[c], b.uint32(10).fork()).ldelim();
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.TouchEvent; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.touches && e.touches.length || (e.touches = []);
                            e.touches.push(g.ru.yandex.metrika.wv2.proto.TouchEvent.SubMeta.decode(a, a.uint32()));
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    a.SubMeta = function () {
                      function a(a) {
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.id = "";
                      a.prototype.x = 0;
                      a.prototype.y = 0;
                      a.prototype.force = 0;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(10).string(a.id);
                        null != a.x && Object.hasOwnProperty.call(a, "x") && b.uint32(21)["float"](a.x);
                        null != a.y && Object.hasOwnProperty.call(a, "y") && b.uint32(29)["float"](a.y);
                        null != a.force && Object.hasOwnProperty.call(a, "force") && b.uint32(37)["float"](a.force);
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.TouchEvent.SubMeta; a.pos <
                          c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.id = a.string();
                              break;
                            case 2:
                              e.x = a["float"]();
                              break;
                            case 3:
                              e.y = a["float"]();
                              break;
                            case 4:
                              e.force = a["float"]();
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                      return a
                    }();
                    return a
                  }();
                  a.ZoomEvent = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.zoomFrom = null;
                    a.prototype.zoomTo = null;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.zoomFrom && Object.hasOwnProperty.call(a,
                        "zoomFrom") && g.ru.yandex.metrika.wv2.proto.ZoomEvent.ZoomPoint.encode(a.zoomFrom, b.uint32(10).fork()).ldelim();
                      null != a.zoomTo && Object.hasOwnProperty.call(a, "zoomTo") && g.ru.yandex.metrika.wv2.proto.ZoomEvent.ZoomPoint.encode(a.zoomTo, b.uint32(18).fork()).ldelim();
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.ZoomEvent; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.zoomFrom = g.ru.yandex.metrika.wv2.proto.ZoomEvent.ZoomPoint.decode(a,
                              a.uint32());
                            break;
                          case 2:
                            e.zoomTo = g.ru.yandex.metrika.wv2.proto.ZoomEvent.ZoomPoint.decode(a, a.uint32());
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    a.ZoomPoint = function () {
                      function a(a) {
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.level = 0;
                      a.prototype.x = 0;
                      a.prototype.y = 0;
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b = f.create());
                        null != a.level && Object.hasOwnProperty.call(a, "level") && b.uint32(13)["float"](a.level);
                        null != a.x && Object.hasOwnProperty.call(a,
                          "x") && b.uint32(16).int32(a.x);
                        null != a.y && Object.hasOwnProperty.call(a, "y") && b.uint32(24).int32(a.y);
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.ZoomEvent.ZoomPoint; a.pos < c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.level = a["float"]();
                              break;
                            case 2:
                              e.x = a.int32();
                              break;
                            case 3:
                              e.y = a.int32();
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                      return a
                    }();
                    return a
                  }();
                  a.ResizeEvent = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a),
                            c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.width = 0;
                    a.prototype.height = 0;
                    a.prototype.pageWidth = 0;
                    a.prototype.pageHeight = 0;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.width && Object.hasOwnProperty.call(a, "width") && b.uint32(8).int32(a.width);
                      null != a.height && Object.hasOwnProperty.call(a, "height") && b.uint32(16).int32(a.height);
                      null != a.pageWidth && Object.hasOwnProperty.call(a, "pageWidth") && b.uint32(24).int32(a.pageWidth);
                      null != a.pageHeight &&
                        Object.hasOwnProperty.call(a, "pageHeight") && b.uint32(32).int32(a.pageHeight);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.ResizeEvent; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.width = a.int32();
                            break;
                          case 2:
                            e.height = a.int32();
                            break;
                          case 3:
                            e.pageWidth = a.int32();
                            break;
                          case 4:
                            e.pageHeight = a.int32();
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.MethodEvent = function () {
                    function a(a) {
                      this.args = [];
                      if (a)
                        for (var b =
                            Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.method = "";
                    a.prototype.args = k.emptyArray;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.method && Object.hasOwnProperty.call(a, "method") && b.uint32(10).string(a.method);
                      if (null != a.args && a.args.length)
                        for (var c = 0; c < a.args.length; ++c) b.uint32(18).string(a.args[c]);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.MethodEvent; a.pos <
                        c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.method = a.string();
                            break;
                          case 2:
                            e.args && e.args.length || (e.args = []);
                            e.args.push(a.string());
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.PropertyEvent = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.property = "";
                    a.prototype.value = "";
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.property && Object.hasOwnProperty.call(a, "property") && b.uint32(10).string(a.property);
                      null != a.value && Object.hasOwnProperty.call(a, "value") && b.uint32(18).string(a.value);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.PropertyEvent; a.pos < c;) {
                        var h = a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.property = a.string();
                            break;
                          case 2:
                            e.value = a.string();
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.KeystrokesEvent = function () {
                    function a(a) {
                      this.keystrokes = [];
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null !=
                          a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.keystrokes = k.emptyArray;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      if (null != a.keystrokes && a.keystrokes.length)
                        for (var c = 0; c < a.keystrokes.length; ++c) g.ru.yandex.metrika.wv2.proto.KeystrokesEvent.KeystrokeEvent.encode(a.keystrokes[c], b.uint32(10).fork()).ldelim();
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.KeystrokesEvent; a.pos < c;) {
                        var h =
                          a.uint32();
                        switch (h >>> 3) {
                          case 1:
                            e.keystrokes && e.keystrokes.length || (e.keystrokes = []);
                            e.keystrokes.push(g.ru.yandex.metrika.wv2.proto.KeystrokesEvent.KeystrokeEvent.decode(a, a.uint32()));
                            break;
                          default:
                            a.skipType(7 & h)
                        }
                      }
                      return e
                    };
                    a.KeystrokeEvent = function () {
                      function a(a) {
                        if (a)
                          for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                      }
                      a.prototype.id = 0;
                      a.prototype.key = "";
                      a.prototype.isMeta = !1;
                      a.prototype.modifier = "";
                      a.create = function (b) {
                        return new a(b)
                      };
                      a.encode = function (a, b) {
                        b || (b =
                          f.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).int32(a.id);
                        null != a.key && Object.hasOwnProperty.call(a, "key") && b.uint32(18).string(a.key);
                        null != a.isMeta && Object.hasOwnProperty.call(a, "isMeta") && b.uint32(24).bool(a.isMeta);
                        null != a.modifier && Object.hasOwnProperty.call(a, "modifier") && b.uint32(34).string(a.modifier);
                        return b
                      };
                      a.decode = function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.KeystrokesEvent.KeystrokeEvent; a.pos <
                          c;) {
                          var h = a.uint32();
                          switch (h >>> 3) {
                            case 1:
                              e.id = a.int32();
                              break;
                            case 2:
                              e.key = a.string();
                              break;
                            case 3:
                              e.isMeta = a.bool();
                              break;
                            case 4:
                              e.modifier = a.string();
                              break;
                            default:
                              a.skipType(7 & h)
                          }
                        }
                        return e
                      };
                      return a
                    }();
                    return a
                  }();
                  a.DeviceRotationEvent = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.width = 0;
                    a.prototype.height = 0;
                    a.prototype.orientation = 0;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null !=
                        a.width && Object.hasOwnProperty.call(a, "width") && b.uint32(8).int32(a.width);
                      null != a.height && Object.hasOwnProperty.call(a, "height") && b.uint32(16).int32(a.height);
                      null != a.orientation && Object.hasOwnProperty.call(a, "orientation") && b.uint32(24).int32(a.orientation);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.DeviceRotationEvent; a.pos < c;) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                          case 1:
                            e.width = a.int32();
                            break;
                          case 2:
                            e.height =
                              a.int32();
                            break;
                          case 3:
                            e.orientation = a.int32();
                            break;
                          default:
                            a.skipType(7 & f)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.FatalErrorEvent = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.code = "";
                    a.prototype.exception = "";
                    a.prototype.stack = "";
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.code && Object.hasOwnProperty.call(a, "code") && b.uint32(10).string(a.code);
                      null != a.exception && Object.hasOwnProperty.call(a,
                        "exception") && b.uint32(18).string(a.exception);
                      null != a.stack && Object.hasOwnProperty.call(a, "stack") && b.uint32(26).string(a.stack);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.FatalErrorEvent; a.pos < c;) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                          case 1:
                            e.code = a.string();
                            break;
                          case 2:
                            e.exception = a.string();
                            break;
                          case 3:
                            e.stack = a.string();
                            break;
                          default:
                            a.skipType(7 & f)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.HashchangeEvent = function () {
                    function a(a) {
                      if (a)
                        for (var b =
                            Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.hash = "";
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.hash && Object.hasOwnProperty.call(a, "hash") && b.uint32(10).string(a.hash);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.HashchangeEvent; a.pos < c;) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                          case 1:
                            e.hash = a.string();
                            break;
                          default:
                            a.skipType(7 & f)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.EventType = function () {
                    var a = {},
                      b = Object.create(a);
                    b[a[0] = "mousemove"] = 0;
                    b[a[1] = "mouseup"] = 1;
                    b[a[2] = "mousedown"] = 2;
                    b[a[3] = "click"] = 3;
                    b[a[4] = "scroll"] = 4;
                    b[a[5] = "windowblur"] = 5;
                    b[a[6] = "windowfocus"] = 6;
                    b[a[7] = "focus"] = 7;
                    b[a[8] = "blur"] = 8;
                    b[a[9] = "eof"] = 9;
                    b[a[10] = "selection"] = 10;
                    b[a[11] = "change"] = 11;
                    b[a[12] = "input"] = 12;
                    b[a[13] = "touchmove"] = 13;
                    b[a[14] = "touchstart"] = 14;
                    b[a[15] = "touchend"] = 15;
                    b[a[16] = "touchcancel"] = 16;
                    b[a[17] = "touchforcechange"] = 17;
                    b[a[18] = "canvasMethod"] = 18;
                    b[a[19] = "canvasProperty"] =
                      19;
                    b[a[20] = "zoom"] = 20;
                    b[a[21] = "resize"] = 21;
                    b[a[22] = "mediaMethod"] = 22;
                    b[a[23] = "mediaProperty"] = 23;
                    b[a[24] = "keystroke"] = 24;
                    b[a[25] = "deviceRotation"] = 25;
                    b[a[26] = "fatalError"] = 26;
                    b[a[27] = "hashchange"] = 27;
                    return b
                  }();
                  a.PublishersHeader = function () {
                    function a(a) {
                      this.articleMeta = [];
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.articleMeta = k.emptyArray;
                    a.prototype.involvedTime = 0;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      if (null != a.articleMeta && a.articleMeta.length)
                        for (var c = 0; c < a.articleMeta.length; ++c) g.ru.yandex.metrika.wv2.proto.ArticleMeta.encode(a.articleMeta[c], b.uint32(10).fork()).ldelim();
                      null != a.involvedTime && Object.hasOwnProperty.call(a, "involvedTime") && b.uint32(16).int32(a.involvedTime);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.PublishersHeader; a.pos < c;) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                          case 1:
                            e.articleMeta && e.articleMeta.length ||
                              (e.articleMeta = []);
                            e.articleMeta.push(g.ru.yandex.metrika.wv2.proto.ArticleMeta.decode(a, a.uint32()));
                            break;
                          case 2:
                            e.involvedTime = a.int32();
                            break;
                          default:
                            a.skipType(7 & f)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.ArticleMeta = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.id = 0;
                    a.prototype.x = 0;
                    a.prototype.y = 0;
                    a.prototype.width = 0;
                    a.prototype.height = 0;
                    a.prototype.involvedTime = 0;
                    a.prototype.maxScrolled = 0;
                    a.prototype.chars = 0;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).uint32(a.id);
                      null != a.x && Object.hasOwnProperty.call(a, "x") && b.uint32(16).int32(a.x);
                      null != a.y && Object.hasOwnProperty.call(a, "y") && b.uint32(24).int32(a.y);
                      null != a.width && Object.hasOwnProperty.call(a, "width") && b.uint32(32).int32(a.width);
                      null != a.height && Object.hasOwnProperty.call(a, "height") && b.uint32(40).int32(a.height);
                      null != a.involvedTime && Object.hasOwnProperty.call(a, "involvedTime") && b.uint32(48).int32(a.involvedTime);
                      null != a.maxScrolled && Object.hasOwnProperty.call(a, "maxScrolled") && b.uint32(61)["float"](a.maxScrolled);
                      null != a.chars && Object.hasOwnProperty.call(a, "chars") && b.uint32(64).int32(a.chars);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.ArticleMeta; a.pos < c;) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                          case 1:
                            e.id = a.uint32();
                            break;
                          case 2:
                            e.x = a.int32();
                            break;
                          case 3:
                            e.y = a.int32();
                            break;
                          case 4:
                            e.width = a.int32();
                            break;
                          case 5:
                            e.height =
                              a.int32();
                            break;
                          case 6:
                            e.involvedTime = a.int32();
                            break;
                          case 7:
                            e.maxScrolled = a["float"]();
                            break;
                          case 8:
                            e.chars = a.int32();
                            break;
                          default:
                            a.skipType(7 & f)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.ArticleInfo = function () {
                    function a(a) {
                      this.authors = [];
                      this.topics = [];
                      this.rubric = [];
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.id = 0;
                    a.prototype.pageUrlCanonical = "";
                    a.prototype.pageTitle = "";
                    a.prototype.authors = k.emptyArray;
                    a.prototype.topics = k.emptyArray;
                    a.prototype.publicationDate =
                      "";
                    a.prototype.chars = 0;
                    a.prototype.rubric = k.emptyArray;
                    a.prototype.updateDate = "";
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).uint32(a.id);
                      null != a.pageUrlCanonical && Object.hasOwnProperty.call(a, "pageUrlCanonical") && b.uint32(18).string(a.pageUrlCanonical);
                      null != a.pageTitle && Object.hasOwnProperty.call(a, "pageTitle") && b.uint32(26).string(a.pageTitle);
                      if (null != a.authors && a.authors.length)
                        for (var c = 0; c < a.authors.length; ++c) g.ru.yandex.metrika.wv2.proto.ArticleAuthor.encode(a.authors[c],
                          b.uint32(34).fork()).ldelim();
                      if (null != a.topics && a.topics.length)
                        for (c = 0; c < a.topics.length; ++c) g.ru.yandex.metrika.wv2.proto.ArticleTopic.encode(a.topics[c], b.uint32(42).fork()).ldelim();
                      null != a.publicationDate && Object.hasOwnProperty.call(a, "publicationDate") && b.uint32(50).string(a.publicationDate);
                      null != a.chars && Object.hasOwnProperty.call(a, "chars") && b.uint32(56).int32(a.chars);
                      if (null != a.rubric && a.rubric.length)
                        for (c = 0; c < a.rubric.length; ++c) g.ru.yandex.metrika.wv2.proto.ArticleRubric.encode(a.rubric[c],
                          b.uint32(66).fork()).ldelim();
                      null != a.updateDate && Object.hasOwnProperty.call(a, "updateDate") && b.uint32(74).string(a.updateDate);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.ArticleInfo; a.pos < c;) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                          case 1:
                            e.id = a.uint32();
                            break;
                          case 2:
                            e.pageUrlCanonical = a.string();
                            break;
                          case 3:
                            e.pageTitle = a.string();
                            break;
                          case 4:
                            e.authors && e.authors.length || (e.authors = []);
                            e.authors.push(g.ru.yandex.metrika.wv2.proto.ArticleAuthor.decode(a,
                              a.uint32()));
                            break;
                          case 5:
                            e.topics && e.topics.length || (e.topics = []);
                            e.topics.push(g.ru.yandex.metrika.wv2.proto.ArticleTopic.decode(a, a.uint32()));
                            break;
                          case 6:
                            e.publicationDate = a.string();
                            break;
                          case 7:
                            e.chars = a.int32();
                            break;
                          case 8:
                            e.rubric && e.rubric.length || (e.rubric = []);
                            e.rubric.push(g.ru.yandex.metrika.wv2.proto.ArticleRubric.decode(a, a.uint32()));
                            break;
                          case 9:
                            e.updateDate = a.string();
                            break;
                          default:
                            a.skipType(7 & f)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.ArticleAuthor = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a),
                            c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.name = "";
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.name && Object.hasOwnProperty.call(a, "name") && b.uint32(10).string(a.name);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.ArticleAuthor; a.pos < c;) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                          case 1:
                            e.name = a.string();
                            break;
                          default:
                            a.skipType(7 & f)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.ArticleTopic = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.name = "";
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.name && Object.hasOwnProperty.call(a, "name") && b.uint32(10).string(a.name);
                      return b
                    };
                    a.decode = function (a, b) {
                      a instanceof d || (a = d.create(a));
                      for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.ArticleTopic; a.pos < c;) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                          case 1:
                            e.name =
                              a.string();
                            break;
                          default:
                            a.skipType(7 & f)
                        }
                      }
                      return e
                    };
                    return a
                  }();
                  a.ArticleRubric = function () {
                    function a(a) {
                      if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.name = "";
                    a.prototype.position = 0;
                    a.create = function (b) {
                      return new a(b)
                    };
                    a.encode = function (a, b) {
                      b || (b = f.create());
                      null != a.name && Object.hasOwnProperty.call(a, "name") && b.uint32(10).string(a.name);
                      null != a.position && Object.hasOwnProperty.call(a, "position") && b.uint32(16).int32(a.position);
                      return b
                    };
                    a.decode =
                      function (a, b) {
                        a instanceof d || (a = d.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new g.ru.yandex.metrika.wv2.proto.ArticleRubric; a.pos < c;) {
                          var f = a.uint32();
                          switch (f >>> 3) {
                            case 1:
                              e.name = a.string();
                              break;
                            case 2:
                              e.position = a.int32();
                              break;
                            default:
                              a.skipType(7 & f)
                          }
                        }
                        return e
                      };
                    return a
                  }();
                  return a
                }();
                return a
              }();
              return a
            }();
            return a
          }();
          return a
        }();
        a.exports = g
      }
    ]).ru.yandex.metrika.wv2.proto
  } catch (a) {}
  try {
    var ab = {
        ScrollEvent: {
          type: K.ScrollEvent,
          events: ["scroll"]
        },
        SelectionEvent: {
          type: K.SelectionEvent,
          events: ["selection"]
        },
        ChangeEvent: {
          type: K.ChangeEvent,
          events: ["change", "input"]
        },
        MethodEvent: {
          type: K.MethodEvent,
          repeated: "args",
          events: ["canvasMethod", "mediaMethod"]
        },
        PropertyEvent: {
          type: K.PropertyEvent,
          events: ["canvasProperty", "mediaProperty"]
        },
        KeystrokesEvent: {
          type: K.KeystrokesEvent,
          repeated: "keystrokes",
          events: ["keystroke"]
        },
        ZoomEvent: {
          type: K.ZoomEvent,
          events: ["zoom"]
        },
        ResizeEvent: {
          type: K.ResizeEvent,
          events: ["resize"]
        },
        WindowEvent: {
          type: K.WindowEvent,
          events: ["windowfocus", "windowblur", "focus", "blur", "eof"]
        },
        MouseEvent: {
          type: K.MouseEvent,
          events: ["mousemove", "mouseup", "mousedown", "click"]
        },
        DeviceRotationEvent: {
          type: K.DeviceRotationEvent,
          events: ["deviceRotation"]
        },
        FatalErrorEvent: {
          type: K.FatalErrorEvent,
          events: ["fatalError"]
        },
        TouchEvent: {
          type: K.TouchEvent,
          repeated: "touches",
          events: ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"]
        }
      },
      ec = k.reduce(function (a, b) {
        return a.concat(k.map(function (a) {
          return {
            eventName: a,
            type: ab[b].type,
            repeated: ab[b].repeated,
            typeStr: b
          }
        }, ab[b].events))
      }, [], k.keys(ab)),
      fc = {
        nullToStr: function (a) {
          var b =
            this;
          if (k.isArray(a)) return k.map(function (a) {
            return b.nullToStr(a)
          }, a);
          if (k.isObject(a)) k.forEachKey(a, function (c, d) {
            a[c] = b.nullToStr(d);
            return !0
          });
          else if (null === a || a === w) a = "";
          return a
        },
        uncapitalize: function (a, b) {
          var c = a.slice(1);
          return a.charAt(0).toLowerCase() + (b ? c.toLowerCase() : c)
        },
        capitalize: function (a, b) {
          var c = a.slice(1);
          return a.charAt(0).toUpperCase() + (b ? c.toLowerCase() : c)
        },
        notNaN: function (a) {
          return isNaN(a) && "number" == typeof a ? 0 : a
        },
        eventSerialize: function (a) {
          var b = k.filter(function (b) {
              return b.eventName ==
                a.type
            }, ec),
            c;
          for (c = 0; c < b.length; c++) var d = b[c];
          if (d) return d.repeated ? (c = new d.type, c[d.repeated] = a.meta[d.repeated] || a.meta) : c = new d.type(this.nullToStr(a.meta)), b = new K.Event({
            type: K.EventType[d.eventName],
            target: a.target,
            frameId: a.frameId
          }), b[this.uncapitalize(d.typeStr)] = c, b
        },
        pageSerialize: function (a) {
          return new K.Page(this.nullToStr(a))
        },
        articleInfoSerialize: function (a) {
          return new K.ArticleInfo(this.nullToStr(a))
        },
        publishersHeaderSerialize: function (a) {
          return new K.PublishersHeader(this.nullToStr(a))
        },
        mutationSerialize: function (a) {
          return new K.Mutation(this.nullToStr(a))
        },
        initBuffer: function () {
          return new K.BufferWrapper
        },
        appendBuffer: function (a, b) {
          a.buffer.push(b)
        },
        serializeChunk: function (a) {
          return this.serializeBuffer(null, a)
        },
        serializeBuffer: function (a, b, c) {
          var d = new K.Buffer(b);
          a = a || new K.Wrapper;
          b || (d.data = a);
          c !== w && (d.stamp = c);
          b && b.stamp === w && (d.stamp = x.getFormStart());
          return d
        },
        toTransport: function (a, b, c, d) {
          var f = b || "BufferWrapper",
            k = this;
          if (c) ob.chain([function () {
              return k.nullToStr(a)
            },
            function (a) {
              return K[f].encode(a)
            },
            function (a) {
              return a.finish()
            },
            function (a) {
              return c.call(d, a)
            }
          ], "", !1, "toTransportChain." + f);
          else return K[f].encode(this.nullToStr(a)).finish()
        },
        fromTrasport: function (a, b) {
          if ("number" == typeof a[0]) return K[b || "BufferWrapper"].decode(a)
        },
        serialize: function (a, b, c) {
          var d = {},
            f = {},
            k = this[a + "Serialize"];
          if (k) d[a] = k.call(this, b), f = new K.Wrapper(d);
          else if (c && K.Wrapper.prototype[a] !== w) f[a] = b;
          else throw "Unrecoginze type of message";
          return c ? K.Wrapper.encode(f).finish() :
            f
        }
      };
    Cb = !0
  } catch (a) {
    sa(a, "pr.in")
  }
  var Db = Aa.inherit({
      protocol: "",
      chunkSize: 0,
      counterId: "",
      counterType: "",
      meta: null,
      maxBufferSize: 7E5,
      serializer: fc,
      _dataSize: 0,
      flushTimeout: 2E3,
      storageKey: "visorbuff3",
      active: !1,
      wvType: 3,
      _totalSendedSize: 0,
      _v: "",
      _initComponent: function () {
        this._sender = new pb({
          version: this.wvType,
          protocol: this.protocol,
          browserInfoMix: this.browserInfoMix,
          globalConfig: this.globalConfig,
          counterId: this.counterId,
          counterType: this.counterType
        });
        this.maxChunkSize = .9 * this.maxBufferSize;
        $a.superclass._initComponent.apply(this,
          arguments)
      },
      activate: function () {
        this.active || (this.active = !0)
      },
      mergeData: function (a, b) {
        b.data && 0 === b.data.size || (this.serializer.appendBuffer(a, b), this._dataSize = 0)
      },
      _getSize: function (a) {
        return a.length
      },
      sendEncoded: function (a, b, c, d, f) {
        var k = this._getSize(a),
          g = this.getFlushSize(),
          n = 0,
          m = 0,
          u = 1;
        c.size = k;
        g + k > this.maxBufferSize && g && this._flush(d);
        if (k > this.maxBufferSize) {
          for (g = Math.ceil(a.length / this.maxChunkSize); m < k;) {
            b.page = u;
            b.end = u === g;
            b.chunk = a.slice(n, n += this.maxChunkSize);
            if (0 == b.chunk.length) break;
            b.size = this._getSize(b.chunk);
            m += b.size;
            c = this.serializer.serializeChunk(b);
            this.store.set(c, f);
            this.append(c, d);
            u++
          }
          this._totalSendedSize += m
        } else c = this.serializer.serializeBuffer(c, null, b.stamp), this._totalSendedSize += k, this.store.set(c, f), this.append(c, d)
      },
      addData: function (a, b, c, d, f) {
        var l = {
          type: a
        };
        if (!this.totalSendLimit || this._totalSendedSize < this.totalSendLimit)
          if (this._v = c, this.wrappers.length && k.arrayEvery(this.wrappers, function (c) {
              c.trigger && c.trigger(a, b);
              return 1
            }), f) {
            var g = this.serializer.serializeBuffer({
              size: 0
            });
            this.append(g, d)
          } else this._data && 0 == this._data.buffer.length && (this.startBufferTime = x.getSeconds()), this.updateStamp(b, l), g = this.serializer.serialize(a, b), d ? (c = this.serializer.toTransport(g, "Wrapper"), this.sendEncoded(c, l, g, !0, {
            id: a,
            data: b
          })) : this.serializer.toTransport(g, "Wrapper", function (c) {
            this.sendEncoded(c, l, g, !1, {
              id: a,
              data: b
            })
          }, this)
      },
      dataFromStorage: function (a) {
        return this.serializer.fromTrasport(a)
      },
      dataToStorage: function (a) {
        return this.serializer.toTransport(a)
      },
      getFlushSize: function () {
        var a =
          this,
          b = k.reduce(function (a, b) {
            return a + (b.data ? b.data.size : b.size)
          }, 0, this._data.buffer);
        this.wrappers.length && (b += k.reduce(function (b, d) {
          var c = d.getBufferData();
          return c ? b += a.serializer.serialize(c.type, c.data, !0).length : b
        }, b, this.wrappers));
        return b
      },
      onFlush: function (a, b, c, d) {
        var f = this;
        this._dataSize = 0;
        a && (this.wrappers.length && (k.arrayEvery(this.wrappers, function (b) {
            if (!b.onFlush) return 1;
            k.arrayEvery(a.buffer, function (a) {
              a = this.store.pop(a);
              if (!a) return 1;
              b.onFlush(a.id, a.data);
              return 1
            }, this)
          },
          this), a = k.reduce(function (a, b) {
          var c = b.getBufferData(),
            d = {
              data: {}
            };
          if (!c) return a;
          d.data[c.type] = c.data;
          c = new f.serializer.serializeBuffer(null, d);
          f.mergeData(a, c);
          return a
        }, a, this.wrappers)), a.buffer && a.buffer.length && (d ? this._sender.sendPacket(this.serializer.toTransport(a), b.url, b.hitId, c, b.timezone, b.timestamp, this.startBufferTime) : this.serializer.toTransport(a, "BufferWrapper", function (a) {
          this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp, this.startBufferTime)
        }, this)))
      },
      clear: function () {
        this._data =
          this.serializer.initBuffer();
        this._dataSize = 0;
        this._flushTID = null;
        this.storage && this.storage.remove(this.storageKey)
      }
    }),
    U = {};
  U._cookie = new N({
    onlyCurrentDomain: !0
  });
  U._check = F(function () {
    return -1 < m.location.href.indexOf("_ym_debug\x3d1") || m._ym_debug || "1" === U._cookie.read("debug")
  });
  U.enabled = U._check();
  U.log = F(function () {
      (-1 < L.href.indexOf("_ym_debug\x3d1") || m._ym_debug) && this._cookie.create("debug", "1");
      m.console && console.log && this._check() && (U.enabled = !0, console.log.apply(console, arguments))
    },
    "DebugConsole.log");
  var gc = J.inherit({
    eventMap: {
      mousemove: {
        val: 0,
        multiply: 1 / .68
      },
      click: {
        val: 0,
        multiply: 1 / .00975
      },
      input: {
        val: 0,
        multiply: 1 / .0116
      },
      scroll: {
        val: 0,
        multiply: 1 / .31
      },
      fatalError: {
        val: 0,
        multiply: 1
      }
    },
    getBufferData: function () {
      var a = this;
      return {
        type: "activity",
        data: k.reduce(function (b, c) {
          var d = a.eventMap[c];
          return Math.round(b + d.val * d.multiply)
        }, 0, k.keys(this.eventMap))
      }
    },
    onFlush: function (a, b) {
      var c;
      if (c = this.eventMap["event" !== a ? a : b.type]) c.val += 1
    }
  });
  v.closest = function (a, b) {
    var c;
    if (!(m && m.Element &&
        m.Element.prototype)) return null;
    if (m.Element.prototype.closest && k.isNativeFunction(m.Element.prototype.closest, "closest")) return a.closest(b);
    if (m.Element.prototype.matches && k.isNativeFunction(m.Element.prototype.matches, "matches")) {
      do {
        if (a.matches(b)) return a;
        a = a.parentElement || a.parentNode
      } while (null !== a && 1 === a.nodeType)
    }
    if (m.document.querySelectorAll && k.isNativeFunction(m.Element.prototype.querySelectorAll, "querySelectorAll")) {
      var d = (m.document || m.ownerDocument).querySelectorAll(b);
      do
        for (c = d.length; 0 <=
          --c && d.item(c) !== a;) a; while (0 > c && (a = a.parentElement));
      return a
    }
    return null
  };
  var E = {
      select: function (a, b) {
        return a ? a.querySelectorAll(b) : null
      },
      looksLikeFullUrl: function (a) {
        return "string" !== typeof a ? !1 : /^(https?:)\/\//.test(a)
      },
      selectOne: function (a, b) {
        var c = this.select(a, b);
        return c && c.length ? c[0] : null
      },
      closest: function (a, b) {
        return v.closest(a, b)
      },
      testAttr: function (a, b, c) {
        return c.test(a.getAttribute(b))
      },
      selectPropOne: function (a, b) {
        var c = this.selectProp(a, b);
        return c && c.length ? c[0] : null
      },
      selectProp: function (a,
        b) {
        var c = a.getAttribute("itemtype"),
          d = null,
          f = this.select(a, '[itemprop\x3d"' + b + '"]');
        c && (d = k.filter(function (b) {
          return b.parentNode && v.closest(b.parentNode, "[itemtype]") === a
        }, f));
        return d || f || []
      },
      getVal: function (a) {
        if (!a || 0 == a.length) return "";
        a.length === w && (a = [a]);
        return a[0].getAttribute("content") || a[0].innerText || ""
      },
      getDate: function (a) {
        return a ? a.attributes && a.attributes.datetime ? "" + a.attributes.datetime.value : this.getVal(a) : ""
      }
    },
    bb = {},
    cb = J.inherit({
      isAuthorsInTitle: !1,
      fields: {},
      schemaEntities: {
        "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
        opengraph: ["article"]
      },
      typesMap: {
        Answer: 3,
        Review: 2
      },
      _getContentNode: function (a) {
        return a.element
      },
      _getFieldData: function (a, b) {
        var c, d = this;
        F(function () {
          c = d.fields[b].call(d, a)
        }, "P.s." + b)();
        return c
      },
      _postprocessData: function (a, b) {
        var c = this._getContentNode(b);
        if (this.isAuthorsInTitle && !a.id && k.inArray([3, 2], a.type)) {
          var d = k.map(function (a) {
            return a.name
          }, a.authors).join(", ");
          a.pageTitle = d + ": " + a.pageTitle
        }
        a.pageTitle || (a.pageTitle = this._getTitleFromContent(c));
        a.pageUrlCanonical || (a.pageUrlCanonical =
          E.looksLikeFullUrl(a.id) ? a.id : this.getPageUrlCanonical());
        a.id || (a.id = a.pageTitle || a.pageUrlCanonical);
        return a
      },
      _getContentData: function (a) {
        var b = {},
          c = this;
        b.type = a.type;
        k.map(function (d) {
          b[d] = c._getFieldData(a, d)
        }, k.keys(this.fields));
        b.element = a.element;
        b.stamp = x.getFormStart();
        b = this._postprocessData(b, a);
        b.id = b.id ? k.fnv32a(b.id) : 1;
        b.update = k.bind(this._getFieldData, this, a);
        return b
      },
      _getTitleFromContent: function (a) {
        var b, c;
        for (b = 1; 5 >= b; b++)
          if (c = E.getVal(E.selectOne(a, "h" + b))) return c;
        return null
      },
      _getType: function () {
        return 1
      },
      getPageUrlCanonical: function () {
        var a = E.selectOne(this.root, '[rel\x3d"canonical"]');
        if (a) return a.href
      },
      findContent: function () {
        var a, b = [],
          c = [],
          d, f = this._findContentDescriptionNodes();
        for (a = 0; a < f.length; a++)
          if (d = this._getContentData({
              element: f[a],
              type: this._getType(f[a])
            })) k.isArray(d) || (d = [d]), k.map(function (a) {
            !a || a.chars <= bb[a.type] || (a = k.mixin({
              sended: !1,
              involvedTime: 0
            }, a)) && !k.inArray(c, a.id) && (a.index = b.push(a), c.push(a.id))
          }, d);
        return b
      }
    });
  bb[1] = 500;
  bb[2] = 500;
  bb[3] =
    0;
  var qb = cb.inherit({
      id: "s",
      isAuthorsInTitle: !0,
      typesRegExp: new RegExp("schema.org\\/(" + k.keys(cb.prototype.typesMap).join("|") + ")$"),
      fields: {
        node: function (a) {
          return this._getContentNode(a)
        },
        id: function (a) {
          a = a.element;
          var b = E.selectPropOne(a, "identifier");
          return b ? E.getVal(b) : (b = E.selectPropOne(a, "mainEntityOfPage")) && b.getAttribute("itemid") ? b.getAttribute("itemid") : null
        },
        chars: function (a) {
          var b = 0;
          a = a.element;
          var c, d, f = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"];
          for (c =
            0; c < f.length; c++)
            if (d = E.selectPropOne(a, f[c])) {
              b = E.getVal(d).length;
              break
            }
          0 === b && a.innerText && (b += a.innerText.length);
          return b
        },
        topics: function (a) {
          var b = [];
          a = E.selectProp(a.element, "about");
          return b = k.map(function (a) {
            var b = {
              name: E.getVal(a)
            };
            if (a = E.selectPropOne(a, "name")) b.name = E.getVal(a);
            return b
          }, a)
        },
        rubric: function (a) {
          var b = [];
          (a = E.selectOne(a.element, '[itemtype$\x3d"schema.org/BreadcrumbList"]')) || (a = E.selectOne(this.root, '[itemtype$\x3d"schema.org/BreadcrumbList"]'));
          a && (a = E.selectProp(a, "itemListElement"),
            b = k.map(function (a) {
              return {
                name: E.getVal(E.selectPropOne(a, "name")),
                position: E.getVal(E.selectPropOne(a, "position"))
              }
            }, a));
          return b
        },
        updateDate: function (a) {
          return (a = E.selectPropOne(a.element, "dateModified")) ? E.getDate(a) : ""
        },
        publicationDate: function (a) {
          return (a = E.selectPropOne(a.element, "datePublished")) ? E.getDate(a) : ""
        },
        pageUrlCanonical: function (a) {
          a = E.selectProp(a.element, "url");
          return a.length ? a[0].href ? a[0].href : E.getVal(a) : null
        },
        pageTitle: function (a) {
          var b = "",
            c = a.element,
            d = E.selectPropOne(c,
              "headline");
          d && (b += E.getVal(d));
          (d = E.selectPropOne(c, "alternativeHeadline")) && (b += " " + E.getVal(d));
          "" === b && ((d = E.selectPropOne(c, "name")) || (d = E.selectPropOne(c, "itemReviewed")), d && (b += E.getVal(d)));
          3 === a.type && (a = E.closest(c, '[itemtype$\x3d"schema.org/Question"]')) && (d = E.selectPropOne(a, "text")) && (b += E.getVal(d));
          return b
        },
        authors: function (a) {
          a = E.selectProp(a.element, "author");
          var b = [];
          return b = k.map(function (a) {
            var b = {},
              c;
            E.testAttr(a, "itemtype", /.+schema.org\/(Person|Organization)/) && (c = E.selectPropOne(a,
              "name")) && (b.name = E.getVal(c));
            b.name || (b.name = a.getAttribute("content") || a.innerText || a.getAttribute("href"));
            return b
          }, a)
        }
      },
      _getType: function (a) {
        a = a.getAttribute("itemtype") || "";
        return (a = this.typesRegExp.exec(a)) ? this.typesMap[a[1]] : 1
      },
      _getContentData: function (a) {
        return a.element && a.element.innerText && a.element.innerText.length ? qb.superclass._getContentData.call(this, a) : null
      },
      _findContentDescriptionNodes: function () {
        var a = k.map(function (a) {
          return '[itemtype$\x3d"schema.org/' + a + '"]'
        }, this.schemaEntities["schema.org"]).join(",");
        return E.select(t, a)
      }
    }),
    db = cb.inherit({
      id: "j",
      dataNodesSelector: 'script[type\x3d"application/ld+json"],script[type\x3d"application/json+ld"],script[type\x3d"ld+json"],script[type\x3d"json+ld"]',
      isAuthorsInTitle: !0,
      fields: {
        node: function (a) {
          return this._getContentNode(a)
        },
        id: function (a) {
          var b = a.data["@id"];
          a = a.data.mainEntity || a.data.mainEntityOfPage;
          !b && a && (b = a["@id"]);
          return b
        },
        chars: function (a) {
          return "string" === typeof a.data.text ? a.data.text.length : this._getContentNode(a).innerText.length
        },
        authors: function (a) {
          var b = [];
          b = b.concat(this._extractAuthors(a.data));
          b = b.concat(this._extractAuthors(a.data.mainEntity));
          return b.concat(this._extractAuthors(a.data.mainEntityOfPage))
        },
        pageTitle: function (a) {
          var b = a.data.headline || "";
          a.data.alternativeHeadline && (b += " " + a.data.alternativeHeadline);
          "" === b && (a.data.name ? b = a.data.name : a.data.itemReviewed && (b = a.data.itemReviewed));
          3 === a.type && a.data.parentItem && (b = a.data.parentItem.text);
          return b
        },
        updateDate: function (a) {
          return a.data.dateModified || ""
        },
        publicationDate: function (a) {
          return a.data.datePublished ||
            ""
        },
        pageUrlCanonical: function (a) {
          return a.data.url
        },
        topics: function (a) {
          a = a.data.about ? a.data.about ? k.isArray(a.data.about) : [a.data.about] : [];
          return k.map(function (a) {
            return {
              name: a.name || a.alternateName
            }
          }, a)
        },
        rubric: function (a) {
          var b = this._getContentNode(a),
            c = [];
          k.map(function (a) {
            (a = ba.parse(a.innerText)) && (a["@graph"] ? k.map(function (a) {
              "BreadcrumbList" === a["@type"] && c.push(a)
            }, a["@graph"]) : "BreadcrumbList" === a["@type"] && c.push(a))
          }, [a.element].concat(k.toArray(E.select(t.body === b ? t.documentElement :
            b, this.dataNodesSelector))));
          return c.length && (c = c[0].itemListElement, k.isArray(c)) ? k.map(function (a) {
            return {
              name: a.item.name,
              position: a.position
            }
          }, c) : []
        }
      },
      _extractAuthors: function (a) {
        if (!a || !a.author) return [];
        a = k.isArray(a.author) ? a.author : [a.author];
        return k.map(function (a) {
          return {
            name: a.name
          }
        }, a)
      },
      _getContentNode: function (a) {
        var b = a.element,
          c = a.data["@id"];
        a = a.data.url;
        var d, f = b.parentNode;
        a && "string" === typeof a && (d = this._extractElementByHashedUrl(a));
        !d && c && "string" === typeof c && (d = this._extractElementByHashedUrl(c));
        return d ? d : E.closest(b, "head") || 0 === f.innerText.length ? m.document.body : f
      },
      _extractElementByHashedUrl: function (a) {
        var b, c;
        try {
          if (b = k.parseUrl(a).hash)
            if (c = E.selectOne(t.body, b)) return c
        } catch (d) {
          return null
        }
      },
      _parseType: function (a) {
        return this.typesMap[a["@type"]] || 1
      },
      _getContentData: function (a) {
        var b = a.element,
          c = this,
          d = [],
          f;
        if (!a.data && (a.data = ba.parse(b.innerText), !a.data || !/schema\.org/.test(a.data["@context"]))) return null;
        if (k.isArray(a.data["@graph"])) return k.map(function (a) {
          if (!k.inArray(c.schemaEntities["schema.org"],
              a["@type"])) return null;
          a = {
            element: b,
            data: a,
            type: c._parseType(a)
          };
          return db.superclass._getContentData.call(c, a)
        }, a.data["@graph"]);
        "QAPage" === a.data["@type"] && (f = a.data.mainEntity || a.data.mainEntityOfPage);
        "Question" === a.data["@type"] && (f = a.data);
        if (f) return a = k.reduce(function (a, b) {
          var c = f[b] || [];
          return a.concat(k.isArray(c) ? c : [c])
        }, [], ["acceptedAnswer", "suggestedAnswer"]), k.map(function (a) {
          if (!k.inArray(c.schemaEntities["schema.org"], a["@type"])) return null;
          a = {
            element: b,
            type: c._parseType(a),
            data: k.mixin({
                parentItem: f
              },
              a)
          };
          return db.superclass._getContentData.call(c, a)
        }, a);
        if (!k.inArray(this.schemaEntities["schema.org"], a.data["@type"])) return null;
        d = this._parseType(a.data);
        return d = db.superclass._getContentData.call(this, k.mixin(a, {
          type: d
        }))
      },
      _findContentDescriptionNodes: function () {
        return E.select(m.document, this.dataNodesSelector)
      }
    }),
    Eb = cb.inherit({
      id: "o",
      fields: {
        node: function (a) {
          return this._getContentNode(a)
        },
        chars: function (a) {
          a = this._getContentNode(a);
          return a.innerText ? a.innerText.length : 0
        },
        authors: function (a) {
          return this._getArrayValue(a.data.author)
        },
        pageTitle: function (a) {
          return this._getSimpleValue(a.data.title) || ""
        },
        updateDate: function (a) {
          return this._getSimpleValue(a.data.modified_time)
        },
        publicationDate: function (a) {
          return this._getSimpleValue(a.data.published_time)
        },
        pageUrlCanonical: function (a) {
          return this._getSimpleValue(a.data.url)
        },
        topics: function (a) {
          return this._getArrayValue(a.data.tag)
        },
        rubric: function (a) {
          return this._getArrayValue(a.data.section)
        }
      },
      _getArrayValue: function (a) {
        return a ? k.isArray(a) ? k.map(function (a) {
          return {
            name: a
          }
        }, a) : [{
          name: a
        }] : []
      },
      _getSimpleValue: function (a) {
        return k.isArray(a) ? a.length ? a[0] : null : a
      },
      _findContentDescriptionNodes: function () {
        var a = [t.head],
          b = E.select(t.body, 'meta[property\x3d"og:type"]');
        b && (a = a.concat([].map.call(b, function (a) {
          return a
        })));
        return a
      },
      _getEntityData: function (a) {
        var b, c, d = a.element,
          f = {},
          l = this._getContentNode(a);
        d = E.select(d === t.head ? d : l, "meta[property]");
        var g, n = new RegExp("^(og:)?((" + this.schemaEntities.opengraph.join("|") + "):)?");
        if (d && d.length) k.map(function (a) {
          try {
            if (g = a.parentNode ===
              l || a.parentNode === m.document.head) b = a.getAttribute("property").replace(n, ""), c = a.getAttribute("content"), f[b] ? k.isArray(f[b]) ? f[b].push(c) : f[b] = [f[b], c] : f[b] = c
          } catch (u) {}
        }, d);
        else return null;
        return k.inArray(this.schemaEntities.opengraph, f.type) ? k.mixin(a, {
          data: f
        }) : null
      },
      _getContentNode: function (a) {
        a = a.element;
        return a === t.head ? t.body : a.parentElement
      },
      _getContentData: function (a) {
        return (a = this._getEntityData(a)) ? Eb.superclass._getContentData.call(this, a) : null
      }
    }),
    hc = J.inherit({
      buffer: null,
      meta: !1,
      activeEvents: "page resize scroll mousemove mousedown click windowfocus keystroke deviceRotation input touchmove touchstart".split(" "),
      isStopped: !1,
      schemas: {
        json_ld: db,
        schema: qb,
        microdata: qb,
        opengraph: Eb
      },
      checkSize: function () {
        var a = this,
          b = "pai" + this._schema.id,
          c = this.globalConfig.get(b, []);
        c.push(function (b) {
          !a.isStopped && b.length && (a.findContent(b), a.meta = a.getMeta(), a.send())
        });
        this.globalConfig.setSafe(b, c);
        if (1 == c.length) {
          var d = function (c) {
            var f = a.globalConfig.get(b),
              g = a._schema.findContent();
            a.findContent(g);
            a.meta = a.getMeta();
            var n = k.toJSON(a.meta);
            if (!a.isStopped) {
              if (c !== n)
                for (c = 0; c < f.length; c++) {
                  var m = k.map(function (a) {
                    return k.mixin({}, a)
                  }, g);
                  f[c](m)
                }
              a.timeout = k.setTimeout(function () {
                d(n)
              }, 1E3)
            }
          };
          d()
        }
      },
      stop: function () {
        this.isStopped = !0
      },
      getBufferData: function () {
        return this.meta.length ? {
          type: "publishersHeader",
          data: {
            articleMeta: this.meta || {},
            involvedTime: Math.max(this.involvedTime, 0)
          }
        } : null
      },
      findContent: function (a) {
        var b = k.map(function (a) {
          return a.id
        }, this.articles);
        this.articles =
          this.articles.concat(k.filter(function (a) {
            return !k.inArray(b, a.id)
          }, a))
      },
      getScroll: function () {
        this.scroll = {
          x: m.pageXOffset || this.root.scrollLeft,
          y: m.pageYOffset || this.root.scrollTop
        }
      },
      _initComponent: function () {
        var a = v.getViewportSize();
        this.handlers = [];
        this.events = [];
        this.articles = [];
        this.root = v.getRootElement();
        this.getScroll();
        this.viewbox = {
          width: a[0],
          height: a[1]
        }
      },
      getMeta: function () {
        var a = this;
        this.getScroll();
        var b = k.map(function (b) {
          if (a.isRemovedFromDoc(b.element)) var c = null;
          else c = {
            id: b.id,
            involvedTime: Math.max(b.involvedTime, 0),
            maxScrolled: b.maxScrolled || 0,
            chars: b.update ? b.update("chars") : 0
          }, b.node && k.isFunction(b.node.getBoundingClientRect) && (b = b.node.getBoundingClientRect(), c.x = Math.round(b.left) + a.scroll.x, c.y = Math.round(b.top) + a.scroll.y, c.width = Math.round(b.width), c.height = Math.round(b.height));
          return c
        }, this.articles);
        return b = k.filter(Boolean, b)
      },
      isRemovedFromDoc: function (a) {
        return v.closest(a, "html") !== m.document.documentElement
      },
      getArticalsToSend: function () {
        var a = [],
          b;
        for (b =
          0; b < this.articles.length; b++)
          if (!this.articles[b].sended) {
            var c = k.mixin({}, this.articles[b]);
            delete c.element;
            delete c.node;
            delete c.sended;
            delete c.index;
            delete c.involvedTime;
            delete c.visibility;
            delete c.maxScrolled;
            delete c.update;
            delete c.type;
            a.push(c)
          }
        return a
      },
      send: function () {
        var a = this.getArticalsToSend();
        a.length && (this.push({
          articleInfo: a
        }), U.log("Publisher content info found:", a), k.arrayEvery(this.articles, function (a) {
          a.sended = !0;
          return 1
        }))
      },
      start: function (a) {
        var b = this,
          c = this.globalConfig.get("counters", {})[this.counterId + ":0"];
        a && a.schema && c && c.tp && (a.schema = "microdata");
        a && a.schema && this.schemas[a.schema] && m.document && k.isNativeFunction(m.document.querySelectorAll, "querySelectorAll") ? (this.globalConfig.setSafe("pai", function () {
          return k.reduce(function (a, b) {
            (a.visibility || 0) <= b.visibility && (a = b);
            return a
          }, {}, b.articles).id
        }), this._schema = new this.schemas[a.schema], this._schema.root = this.root, U.log('Publishers analytics schema "' + a.schema + '"'), this.checkSize()) : this.stop()
      },
      push: function (a) {
        k.arrayEvery(this.handlers,
          function (b) {
            b(a);
            return 1
          });
        this.events.push(a)
      },
      middleware: function (a) {
        this.handlers.push(a);
        k.arrayEvery(this.events, function (b) {
          a(b)
        })
      },
      lastStamp: 0,
      involvedTime: 0,
      MAX_INACTIVE: 5E3,
      trigger: function (a, b) {
        var c = "event" !== a ? a : b.type;
        if (k.inArray(this.activeEvents, c)) {
          "scroll" == c && b.meta && b.meta.page && (this.scroll = b.meta);
          "resize" == c && 0 == b.target && (this.viewbox = b.meta);
          var d = x.getMs() - this.lastStamp;
          d = Math.min(d, this.MAX_INACTIVE);
          this.involvedTime += Math.round(d);
          this.lastStamp = x.getMs();
          this.meta &&
            this.scroll && this.viewbox && k.arrayEvery(this.articles, function (a) {
              if (this.isRemovedFromDoc(a.element)) return 1;
              var b = k.filter(function (b) {
                return b.id === a.id
              }, this.meta).pop();
              if (!b) return sa(Error("Can't find meta"), "p.t"), 1;
              var c = Math.max((Math.min(this.scroll.y + this.viewbox.height, b.y + b.height) - Math.max(this.scroll.y, b.y)) / this.viewbox.height, 0);
              var f = Math.max((this.scroll.y + this.viewbox.height - b.y) / b.height, 0);
              a.involvedTime += Math.round(c * d);
              a.maxScrolled = Math.round(1E4 * f) / 1E4;
              a.visibility = c;
              b.involvedTime =
                a.involvedTime;
              return 1
            }, this)
        }
      }
    }),
    Fb = J.inherit({
      hid: 0,
      tz: 0,
      ts: 0,
      counterId: 0,
      counterType: 0,
      url: "",
      protocol: "",
      executor: ob,
      enabled: !1,
      _map: {
        page: {
          iterate: !1,
          name: "page"
        },
        events: {
          iterate: !0,
          name: "event"
        },
        mutations: {
          iterate: !0,
          name: "mutation"
        },
        articleInfo: {
          iterate: !0,
          name: "articleInfo"
        }
      },
      _getBufferType: function () {
        var a = $a,
          b = !1;
        if (!U.enabled && Cb) {
          try {
            b = (b = 2 === (new Blob(["\u00e4"])).size) && 2 === (new Blob([new m.Uint8Array([1, 2])])).size
          } catch (c) {}
          b && m.Uint8Array && m.Uint8Array.prototype.slice && (a = Db)
        }
        return a
      },
      _initComponent: F(function () {
        var a = this._getBufferType();
        this._localStorage = new ia({
          counterId: this.counterId
        });
        var b = this._localStorage.get("pai");
        var c = this._getStorage();
        var d = c.read("visorc");
        "b" !== d && "w" !== d && (d = "");
        if (!c.isEnabled() || kb("opera mini")) d = "b";
        this._publisher = new hc({
          counterId: this.counterId,
          globalConfig: this.globalConfig
        });
        this._vc = d;
        c = {
          protocol: this.protocol,
          counterId: this.counterId,
          counterType: this.counterType,
          globalConfig: this.globalConfig,
          meta: {
            url: this.url,
            hitId: this.hid,
            timezone: this.tz,
            timestamp: this.ts
          }
        };
        this._recorder = new Xb({
          counterId: this.counterId,
          trustedDomains: this.trustedDomains,
          childIframe: this.childIframe
        });
        this._buffer = new a(k.mixin({}, c, {
          totalSendLimit: 31457280,
          browserInfoMix: {
            bt: 1
          }
        }));
        this._eventsBuffer = new a(k.mixin(c, b && {
          browserInfoMix: {
            pai: b
          }
        }));
        this._localStorage.remove("pai");
        this._buffer.activate();
        this._eventsBuffer.activate();
        "b" !== d && (this._formRecorder = new Pb(this.protocol, this.counterId, this.counterType, this.hid, this.globalConfig), this._recorder.on("error",
          function (a) {
            sa(a.error, a.namespace)
          }), this._activity = new gc);
        Fb.superclass._initComponent.apply(this, arguments)
      }, "wv2.init"),
      start: F(function (a, b) {
        var c = this,
          d = this._vc;
        if (this._recorder) {
          a = a || {};
          var f = +a.recp;
          if (!isFinite(f) || 0 > f || 1 < f) d = "w";
          d || (d = this.hid % 1E4 / 1E4 < f ? "w" : "b");
          this._getStorage().create("visorc", d, 30);
          this._publisher.start(b);
          "w" === d && this.isEnabled() && this.globalConfig.setSafe("wv2Counter", this.counterId);
          "w" === d && this.isEnabled() && this._isCorrectCounter() ? (this._recorder.middleware(function (a) {
              c.send(a.data)
            }),
            this._recorder.init(), this._eventsBuffer.wrappers.push(this._activity), this._recorder.start(a), this._formRecorder.start(), this.globalConfig.get("stopRecoder", function () {})(), this.globalConfig.set("stopRecoder", function () {
              c.stop()
            })) : this._publisher && !this._publisher.isStopped ? (this._recorder.middleware(function (a) {
            c.send(a.data, !0)
          }), this._recorder.init({
            disableIndex: !0,
            disableMutations: !0
          }), this._recorder.start(a)) : this.stop();
          this._publisher && !this._publisher.isStopped && (this._eventsBuffer.wrappers.push(this._publisher),
            this._eventsBuffer.setWVType(this._buffer instanceof Db ? 5 : 4), this._publisher.middleware(function (a) {
              c.send(a)
            }))
        }
      }, "wv2.start"),
      stop: function () {
        this._publisher && this._publisher.stop();
        this._recorder && (this._recorder.stop(), this._formRecorder && this._formRecorder.stop())
      },
      isEnabled: function () {
        var a = !this.globalConfig.get("oo");
        return this.enabled && m.MutationObserver && a
      },
      send: function (a, b) {
        var c = a._v;
        k.forEachKey(a, function (a, f) {
          var d = this._map[a],
            g = this._buffer;
          if (d) {
            var n = d.name;
            k.inArray(["event",
              "articleInfo"
            ], n) && (g = this._eventsBuffer);
            d.iterate ? k.forEachKey(f, function (a, d) {
              var f = "eof" === d.type && !d.frameId,
                k = [g],
                l;
              f && (k = [this._eventsBuffer, this._buffer]);
              for (l = 0; l < k.length; l++) this.executor.addAsyncItem(k[l].addData, k[l], f, [n, d, c, f, b], "send." + (d ? d.type || d.group || "" : "empty"))
            }, this) : g.addData(n, f, c)
          }
        }, this)
      },
      getVc: function () {
        return this._vc
      },
      _getStorage: function () {
        this._storage || (this._storage = new N({
          counterId: this.counterId
        }));
        return this._storage
      },
      _isCorrectCounter: function () {
        return this.counterId ===
          this.globalConfig.get("wv2Counter")
      }
    }),
    Gb = {
      FN: "ym",
      STACK: "a",
      counters: [],
      waitPool: {},
      handle: function (a) {
        if (2 > a.length) return 1;
        var b = "" + a[0];
        k.inArray(b, ":") || (b += ":0");
        var c = b.split(":")[0];
        var d = a[1];
        var f = this.globalConfig.get("counters", {})[b];
        "init" == d ? (d = "yaCounter" + c, m[d] || (a = k.mixin(a[2] || {}, {
          id: +c
        }), m[d] = new m.Ya[this.constructorName](a))) : k.inArray(this.counters, b) && f && f[d] ? (a = [].slice.call(a, 2), f[d].apply(f, a)) : k.inArray(this.counters, b) || (this.waitPool[b] || (this.waitPool[b] = []), this.waitPool[b].push(a));
        return 1
      },
      subscribe: function (a) {
        a && (this.counters.push(a), this.waitPool[a] && (k.arrayEvery(this.waitPool[a], this.handle, this), delete this.waitPool[a]))
      },
      init: function (a, b) {
        var c = this,
          d = m[this.FN];
        if (d) {
          var f = d[this.STACK];
          this.constructorName = a;
          this.globalConfig = b;
          f || (d[this.STACK] = f = []);
          var l = f.push;
          f.push = function () {
            var a = l.apply(f, arguments);
            k.arrayEvery(arguments, c.handle, c);
            return a
          };
          d && k.isArray(f) && k.arrayEvery(f, this.handle, this)
        }
      }
    },
    ic = function (a, b) {
      var c = ["R0lGODlhAQABAO+/vQAAAAAAAAAAIe+/vQQBAAAAACwAAAAAAQABAAACAkQBADs\x3d",
          "R0lGODlhAQABAO+/vQEAAAAA77+977+977+9Ie+/vQQBAAABACwAAAAAAQABAAACAkwBADs\x3d"
        ],
        d = {},
        f = !1,
        l = function (b) {
          f || (a(b), f = !0)
        },
        g = b || "aHR0cHM6Ly95YW5kZXgucnUvcG9ydGFsL2dlbmVyYXRlXzIwNA\x3d\x3d aHR0cHM6Ly95YW5kZXgudWEvcG9ydGFsL2dlbmVyYXRlXzIwNA\x3d\x3d aHR0cHM6Ly95YW5kZXguZnIvcG9ydGFsL2dlbmVyYXRlXzIwNA\x3d\x3d aHR0cHM6Ly9wYXNzcG9ydC55YW5kZXguZnIvbWMvcGl4ZWw\x3d aHR0cHM6Ly9wYXNzcG9ydC55YW5kZXgudWEvbWMvcGl4ZWw\x3d aHR0cHM6Ly9wYXNzcG9ydC55YW5kZXgucnUvbWMvcGl4ZWw\x3d aHR0cHM6Ly9nZXRmYXN0YnJvd3Nlci5jb20vbWMvcGl4ZWw\x3d aHR0cHM6Ly9nZXR5YWJyb3dzZXIuY29tL21jL3BpeGVs aHR0cHM6Ly9nZXRicm93c2VyMjQuY29tL21jL3BpeGVs aHR0cHM6Ly9tYy53ZWJ2aXNvci5jb20vd2F0Y2gvNDQ4ODk0NjMvMQ\x3d\x3d aHR0cHM6Ly9tYy53ZWJ2aXNvci5vcmcvd2F0Y2gvNDQ4ODk0NjMvMQ\x3d\x3d aHR0cHM6Ly9tYy55YW5kZXgudWEvd2F0Y2gvNDQ4ODk0NjMvMQ\x3d\x3d aHR0cHM6Ly9tYy55YW5kZXgucnUvd2F0Y2gvNDQ4ODk0NjMvMQ\x3d\x3d aHR0cHM6Ly95bWV0cmljYS5jb20vd2F0Y2gvNDQ4ODk0NjMvMQ\x3d\x3d aHR0cHM6Ly95bWV0cmljYTEuY29tL3dhdGNoLzQ0ODg5NDYzLzE aHR0cHM6Ly95bWV0cmljYTIuY29tL3dhdGNoLzQ0ODg5NDYzLzE\x3d aHR0cHM6Ly9tYWlsLnlhbmRleC5mci9tYy9waXhlbA\x3d\x3d aHR0cHM6Ly9tYWlsLnlhbmRleC5jb20vbWMvcGl4ZWw\x3d aHR0cHM6Ly9tYWlsLnlhbmRleC51YS9tYy9waXhlbA\x3d\x3d aHR0cHM6Ly9tYWlsLnlhbmRleC5ydS9tYy9waXhlbA\x3d\x3d aHR0cHM6Ly9zdGFydHVwLm1vYmlsZS55YW5kZXgubmV0L21jL3BpeGVs aHR0cHM6Ly9zdGFydHVwLm1vYmlsZS53ZWJ2aXNvci5jb20vbWMvcGl4ZWw\x3d aHR0cHM6Ly9yZXBvcnQuYXBwbWV0cmljYS53ZWJ2aXNvci5jb20vbWMvcGl4ZWw\x3d aHR0cHM6Ly9yZWRpcmVjdC5hcHBtZXRyaWNhLndlYnZpc29yLmNvbS9tYy9waXhlbA\x3d\x3d aHR0cHM6Ly9yZXBvcnQtMS5hcHBtZXRyaWNhLndlYnZpc29yLmNvbS9tYy9waXhlbA\x3d\x3d aHR0cHM6Ly9yZXBvcnQtMi5hcHBtZXRyaWNhLndlYnZpc29yLmNvbS9tYy9waXhlbA\x3d\x3d".split(" "),
        n = k.random(0, g.length);
      if (m.XMLHttpRequest) {
        var r = W.decode(g[n]);
        var u = new XMLHttpRequest;
        u.timeout = 1E4;
        u.open("GET", r, !0);
        u.ontimeout = function () {
          d[r] = {
            status: "timeout"
          };
          l(d)
        };
        u.onreadystatechange = function () {
          4 == u.readyState && u.responseURL && (u.responseURL !== r ? d[r] = {
            status: "redirect",
            body: u.responseURL
          } : 2 >= n ? d[r] = 204 == u.status ? {
            status: u.status
          } : {
            status: "onerror",
            code: u.status
          } : 200 != u.status || k.inArray(c, W.encode(Ia.encode(u.response))) ? d[r] = {
            status: u.status
          } : d[r] = {
            status: "content"
          }, l(d))
        };
        u.onerror =
          function (a) {
            d[r] = {
              status: "onerror",
              code: a.target.status
            };
            l(d)
          };
        u.send()
      }
    };
  v.loadScript = function (a, b) {
    b = b || m;
    var c = k.mixin({
        type: "text/javascript",
        charset: "utf-8",
        async: !0
      }, a),
      d = b.document,
      f = k.getNativeFunction("createElement", d),
      l = f("script");
    if (l) {
      l.type = c.type;
      l.charset = c.charset;
      l.src = c.src;
      c.async && (l.async = !0);
      try {
        var g = d.getElementsByTagName("head")[0];
        if (!g) {
          var n = d.getElementsByTagName("html")[0];
          g = f("head");
          n && n.appendChild(g)
        }
        g.insertBefore(l, g.firstChild);
        return l
      } catch (r) {}
    }
  };
  var jc = Ca.inherit({
      id: "script",
      index: 6,
      request: function (a, b, c, d) {
        var f = !1,
          l = k.getNativeFunction("createElement", t)("script");
        this.timeout && k.setTimeout(function () {
          f || (f = !0, v.removeNode(l), c.call(d, !1))
        }, this.timeout, "ts.request");
        if (!l) return f = !0, c.call(d, !1), !1;
        var g = "_ymjsp" + k.random();
        m[g] = F(function () {
          if (!f) {
            try {
              delete m[g]
            } catch (r) {
              m[g] = w
            }
            c.apply(d, k.mergeArrays([!0], arguments));
            f = !0;
            v.removeNode(l)
          }
        }, "transport.script");
        l.type = "text/javascript";
        l.src = this._buildUrl(a, k.mixin({
          wmode: 5,
          callback: g
        }, b));
        l.async = "async";
        var n =
          t.getElementsByTagName("head")[0];
        n || (n = t.createElement("head"), t.documentElement.appendChild(n));
        k.async(function () {
          n.insertBefore(l, n.firstChild)
        });
        l.onerror = function () {
          f = !0;
          c.call(d, !1);
          m[g] = w
        };
        return !0
      }
    }),
    Hb = Wa.inherit({
      id: "XHRhit",
      index: 10,
      _buildUrl: function (a, b) {
        b.wmode = 7;
        return Hb.superclass._buildUrl.apply(this, [a, b])
      },
      _parseResp: function (a) {
        var b = ba.parse(a);
        if (!b) throw "";
        return k.map(function (a) {
          return b[a]
        }, k.keys(b))
      }
    }),
    rb = Ja.inherit({
      transports: [Hb, jc],
      trimParams: !0,
      _initComponent: function () {
        rb.superclass._initComponent.apply(this,
          arguments);
        this._ilStorage = new ia({
          counterId: this.counterId
        })
      },
      postParams: [],
      checkYandexHost: function (a) {
        if (a) {
          a: {
            if (a = k.parseUrl(a).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/))
              if (a = a[0].split("yandex").reverse()[0].substring(1), -1 != k.arrayIndexOf(zb, a)) break a;a = !1
          }
          a && !Va.isEnabled() && (this.forceHost = "mc.yandex." + a)
        }
      },
      sendHit: function (a) {
        var b = {},
          c = this._ilStorage.get("il");
        a.visitColor && (b.vc = a.visitColor);
        c && (this._ilStorage.remove("il"), b.ilt = W.encode(Ia.encode(k.trim(c, Ib))));
        this.checkYandexHost(a.referrer);
        this._hitExt({
          url: a.url,
          forceNoRedirect: a.forceNoRedirect,
          nohit: a.nohit,
          hasPrerender: a.hasPrerender,
          title: a.title,
          referrer: a.referrer,
          vParams: a.vParams,
          userParams: a.userParams,
          experiments: a.experiments,
          modes: a.modes,
          browserInfo: b,
          ts: a.ts,
          tz: a.tz,
          callback: a.callback,
          ctx: a.ctx
        }, "hit")
      }
    }),
    Jb = J.inherit({
      cid: 3,
      cnt: 0,
      KEY_NAME: "wasSynced",
      _initComponent: function () {
        this._storage = new ia;
        this._cookie = new N
      },
      hit: function (a, b) {
        var c = this,
          d = b === w ? !0 : !1,
          f = d ? this._storage.get(this.KEY_NAME) : !1,
          l = [],
          g = this.globalConfig.get("fakeHit");
        if (g) return g(function (b) {
          a(b)
        });
        !f && d && (f = this._cookie.read(this.KEY_NAME)) && (f = ba.parse(f));
        f && f.params && f.time + 864E5 > x.getMs() ? (c.globalConfig.set("isEU", f.params.eu), a(f)) : (this.globalConfig.set("fakeHit", function (a) {
          l.push(a)
        }), this._getSender().sendHit({
          forceNoRedirect: this.forceNoRedirect,
          callback: function (b, d) {
            var g = b || {};
            f = {
              time: x.getMs(),
              params: g,
              bkParams: d
            };
            c.globalConfig.set("isEU", g.eu);
            c._storage.set(c.KEY_NAME, f);
            c._cookie.create(c.KEY_NAME, ba.stringify(f), 1728);
            a(f);
            c.globalConfig.set("fakeHit",
              function (a) {
                a(f)
              });
            k.arrayEvery(l, function (a) {
              a(f);
              return 1
            })
          }
        }))
      },
      _getSender: function () {
        this._sender || (this._sender = new rb({
          protocol: "https:",
          counterType: this.cnt,
          counterId: this.cid,
          sendTitle: !1,
          globalConfig: this.globalConfig,
          fake: !0
        }));
        return this._sender
      }
    }),
    Kb = J.inherit({
      baseUrl: "mc.yandex.",
      globalConfig: D,
      baseTld: "ru",
      partners: {
        "mc.yandexsport.ru": {
          regex: /^([^/]+\.)?yandexsport\.ru$/,
          tld: "ru"
        },
        "mc.beru.ru": {
          regex: /^([^/]+\.)?beru\.ru$/,
          tld: "ru"
        },
        "mc.kinopoisk.ru": {
          regex: /^([^/]+\.)?kinopoisk\.ru$/,
          tld: "ru"
        }
      },
      _initComponent: function () {
        var a = this;
        Kb.superclass._initComponent.apply(this, arguments);
        this.syncTlds = k.reduce(function (a, c) {
          return c(a)
        }, zb, [k.bind(k.filter, null, function (b) {
          return b !== a.baseTld
        }), k.bind(k.reduce, null, function (a, c) {
          a[c] = [c];
          return a
        }, {})]);
        k.forEachKey(this.partners, function (a, c) {
          c.regex.test(m.location.hostname) && (this.syncTlds[c.tld] || (this.syncTlds[c.tld] = []), this.syncTlds[c.tld].push(a), this._replaceBase[a] = !0)
        }, this);
        this.syncTlds = k.mixin(this.syncTlds, {
          ru: ["mc.webvisor.org"]
        });
        this._replaceBase["mc.webvisor.org"] = !0
      },
      _replaceBase: {},
      langToDomain: {
        ka: "ge",
        ro: "md",
        tg: "tj",
        tk: "tm",
        et: "ee",
        hy: "com.am",
        he: "co.li",
        ky: "kg",
        uk: "ua",
        be: "by",
        tr: "com.tr",
        kk: "kz"
      },
      sync: function (a) {
        var b = this,
          c = this._need(),
          d = -1 != M().hostname.search(/(?:^|\.)(?:ya|yandex(sport)?|beru|kinopoisk)\.(?:\w+|com?\.\w+)$/);
        this._is() ? a() : (d && b._syncAdmetrica(), c ? (this._setStatus(!0), this._getCn().hit(function () {
          b._sync(c, a)
        })) : a());
        d && this._addMda()
      },
      _addMda: function () {
        var a = new N({
            skipPrefix: !0
          }),
          b = new N,
          c = a.read("mda");
        "0" !== c && "1" !== c && a.create("mda", "0", 1036800);
        b.read("mda") && b.erase("mda")
      },
      _is: function () {
        try {
          return !!this.globalConfig.get("startSync")
        } catch (a) {
          return !1
        }
      },
      _setStatus: function (a) {
        try {
          this.globalConfig.set("startSync", a)
        } catch (b) {}
      },
      _need: function () {
        var a = this._getDomainByLang(),
          b = this._getTld(),
          c = [],
          d;
        (d = this.syncTlds[b]) && c.push.apply(c, d);
        d = this.syncTlds[a];
        a !== b && d && c.push.apply(c, d);
        var f = this._getLs().get("synced") || {};
        c = k.arrayFilter(c, function (a) {
          return (f[a] || 1) + 1440 < x.getMinutes()
        });
        return c.length && c || !1
      },
      _syncAdmetrica: function () {
        var a = new Da({
            timeout: 1E3
          }),
          b = this._getLs();
        ((b.get("synced") || {}).SYNCED_ADM || 1) + 1440 < x.getMinutes() && a.request("https://mc.admetrica.ru/sync_cookie_image_check", {}, function (a) {
          b.get("synced");
          var c = x.getMinutes();
          a = b.get("synced") || {};
          a.SYNCED_ADM = c;
          b.set("synced", a)
        })
      },
      _sync: function (a, b) {
        var c, d = 0,
          f = a.length,
          k = this;
        if (0 < f) {
          b = b || function () {};
          var g = function () {
            d++;
            f === d && b()
          };
          var n = k._getLs();
          var m = new Da({
            timeout: 1E3
          });
          for (c = 0; c < f; c++)(function (a) {
            m.request("https://" +
              (k._replaceBase[a] ? a : k.baseUrl + a) + "/sync_cookie_image_check", {},
              function (b) {
                g();
                var c = x.getMinutes();
                b = n.get("synced") || {};
                b[a] = c;
                n.set("synced", b)
              })
          })(a[c])
        } else b()
      },
      _getCn: function () {
        this._cn || (this._cn = new Jb({
          fake: !0,
          globalConfig: this.globalConfig
        }));
        return this._cn
      },
      _getLs: function () {
        this._ls || (this._ls = new ia);
        return this._ls
      },
      _getTld: function () {
        var a = k.getTld();
        return {
          am: "com.am",
          tr: "com.tr",
          ge: "com.ge",
          il: "co.il",
          "\u0440\u0444": "ru",
          "xn--p1ai": "ru",
          "\u0443\u043a\u0440": "ua",
          "xn--j1amh": "ua",
          "\u0431\u0435\u043b": "by",
          "xn--90ais": "by"
        }[a] || a
      },
      _getDomainByLang: function () {
        if (!m.navigator) return "ru";
        try {
          var a = navigator.languages ? navigator.languages[0] : z.getLanguage()
        } catch (b) {}
        a && a.toLowerCase && (a = a.toLowerCase().split("-")[0]);
        return this.langToDomain[a] || "ru"
      }
    }),
    kc = Wa.inherit({
      id: "RawBodyXHR",
      index: 9,
      postParams: ["body"],
      _setHeaders: function () {},
      _preparePostParams: function (a) {
        return a.post.body || ""
      }
    });
  z.isAndroid = F(function () {
    var a = navigator.userAgent.toLowerCase(),
      b = z.getPlatform() || "";
    return -1 < a.indexOf("android") && -1 < a.indexOf("mobile") && b.match(/^android|linux armv/i)
  }, "", !0);
  var Qa = {
      _url: "https://mc.webvisor.org/user_storage_set?",
      _params: {},
      init: function (a) {
        this._params = a || {}
      },
      save: function (a, b) {
        this._getReq().request(this._url + Ba.stringify({
          key: a,
          value: k.toJSON(b)
        }));
        this._getLs().set(a, b)
      },
      get: function (a) {
        return {
          remote: this._params[a],
          local: this._getLs().get(a)
        }
      },
      getNum: function (a) {
        a = this.get(a);
        return Math.max(+a.remote || 0, +a.local || 0)
      },
      _getLs: function () {
        this._ls || (this._ls =
          new ia);
        return this._ls
      },
      _getReq: function () {
        this._req || (this._req = new Da);
        return this._req
      }
    },
    lc = {
      sync: F(function (a, b, c, d) {
        var f = {
          t: 'UV|L7,!"T[rwe\x26D_\x3eZIb\\aW#98Y.PC6k'
        };
        this.globalConfig = d || D;
        if (this._enabled(a, b, c)) {
          this._setStatus(!0);
          var k = new kc({
            method: "GET",
            withCredentials: !1
          });
          var g = this._getHosts();
          var n = g.length;
          (function p(a) {
            var b = g[a];
            a < n ? k.request(b[0] + ":" + b[1] + "/p", f, function (c, d) {
              c ? this._save(c, d, b[1]) : p.call(this, a + 1)
            }, this) : this._save(!1)
          }).call(this, 0)
        }
      }, "ds"),
      _getHosts: function () {
        var a = [],
          b = L.protocol,
          c = z.isIOS();
        (z.isAndroid() || c && "http:" === b) && a.push(["http://127.0.0.1", "30102"], ["http://127.0.0.1", "29009"]);
        c && "https:" === b && a.push(["https://yandexmetrica.com", "30103"], ["https://yandexmetrica.com", "29010"]);
        return a
      },
      _save: function (a, b, c) {
        var d = x.getMinutes();
        a ? (new Ja({
          protocol: "https:",
          counterType: 0,
          counterId: 42822899,
          sendTitle: !1,
          fake: !0
        })).sendDevice({
          data: k.trim(b),
          port: c
        }) : d -= 45;
        Qa.save("ds", d)
      },
      _is: function () {
        try {
          return !!this.globalConfig.get("dSync")
        } catch (a) {
          return !1
        }
      },
      _enabled: function (a, b, c) {
        if (!(60 < x.getMinutes() - Qa.getNum("ds")) || this._is() || k.isDev(this.globalConfig)) return !1;
        a = 0 === b && 0 <= k.arrayIndexOf([39370095, 1282253, 29302335, 43653484, 41734944, 31048081, 16443139, 27737346, 41870499, 33911514, 30744873, 5564395, 2580487], a);
        a = pa() || !c && .1 >= Math.random() && a;
        c = z.isIOS() && a;
        return z.isAndroid() && a || c
      },
      _setStatus: function (a) {
        try {
          this.globalConfig.set("dSync", a)
        } catch (b) {}
      }
    },
    S = {
      getPos: function (a) {
        var b = v.getRootElement(),
          c = v.getDocumentScroll();
        return [a.pageX || a.clientX +
          c[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY + c[1] - (b.clientTop || 0) || 0
        ]
      },
      getTarget: function (a) {
        var b = null;
        try {
          if (b = a.target || a.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== t && (b = null)
        } catch (c) {}
        return b
      },
      getMouseButton: function (a) {
        return a.which || a.button == w ? a.which : a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
      },
      prevent: function (a) {
        a = a || m.event;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
      }
    };
  S.dispatchCustomEvent = F(function (a, b) {
    var c;
    b = b || t;
    if (c = k.getNativeFunction("createEvent",
        t)("Event")) c.initEvent(a, !1, !1), k.getNativeFunction("dispatchEvent", b)(c)
  }, "evt.dispatch");
  var Za = {
      lastReferrer: null
    },
    Ka = J.inherit({
      counter: null,
      prefsEcommerce: null,
      status: {
        NEW: w,
        PENDING: 1,
        OK: 2,
        FAIL: 3
      },
      overrideTimeout: null,
      dataLayerName: "dataLayer",
      _initComponent: function () {
        Ka.superclass._initComponent.apply(this, arguments);
        this.frameConnector && this.frameConnector.addHandler("params", function (a, b) {
            if (this.counter && this.counter.params) this.onCookies(function (a) {
              this.counter.params(a.data)
            }, this, b)
          },
          this);
        this._overridePush(this.globalConfig.get("dataLayer"))
      },
      waitPool: [],
      destruct: function () {
        this.frameConnector && this.frameConnector.destruct && (this.frameConnector.destruct(), this._send = function () {}, this.waitPool = [], this.onCookies = function () {});
        k.clearTimeout(this.overrideTimeout)
      },
      onCookies: function (a, b) {
        this.waitPool.push({
          fn: a,
          ctx: b,
          args: [].slice.call(arguments, 2)
        })
      },
      initUserLayer: function () {
        var a = "customArr";
        k.arrayEvery(this.waitPool, function (a) {
          a.fn.apply(a.ctx, a.args);
          return 1
        });
        this.onCookies =
          function (a, c) {
            a.apply(c, [].slice.call(arguments, 2))
          };
        if (this.prefsEcommerce || this.prefsUseDataLayer) this._overridePush(this.prefsEcommerce) || (k.isString(this.prefsEcommerce) && (this.dataLayerName = this.prefsEcommerce), a = this.dataLayerName, this._tryTimeout = k.bind(this._tryTimeout, this), this._tryTimeout()), this.counter._ecommerce = a
      },
      _overridePush: function (a) {
        if (a && "function" == typeof a.push) {
          var b = this;
          b._send(a);
          var c = a.push;
          a.push = function () {
            var a = c.apply(this, arguments);
            b._send([].slice.call(arguments,
              0));
            return a
          };
          return !0
        }
        return !1
      },
      _tryTimeout: function () {
        this._overridePush(m[this.dataLayerName]) || (this.overrideTimeout = k.setTimeout(this._tryTimeout, 1E3, "dlObserver"))
      },
      _callHandlers: function (a) {
        k.arrayEvery(Ka.handlers, function (b) {
          b && b.type && k.arrayEvery(b.type.split(","), function (c) {
            c.replace(" ", "") === a.type && b.callback && b.callback(a);
            return 1
          });
          return 1
        })
      },
      allowedEvents: "currencyCode add delete remove purchase checkout detail".split(" "),
      _convert: function (a, b) {
        var c = k.keys(b),
          d = !1,
          f = {
            transaction_id: "id",
            value: "revenue"
          };
        if (b.items) {
          var l = {};
          l[a] = {
            products: b.items
          };
          1 < c.length && (l[a].actionField = k.reduce(function (a, c) {
            f[c] ? a[f[c]] = b[c] : "currency" === c ? d = b[c] : "items" !== c && b[c] && (a[c] = b[c]);
            return a
          }, {}, c));
          d && (l.currencyCode = d);
          return l
        }
      },
      _checkGtag: function (a) {
        var b = {
            view_item: "detail",
            add_to_cart: "add",
            remove_from_cart: "remove",
            begin_checkout: "checkout",
            purchase: "purchase"
          },
          c = [];
        a && "event" === a[0] && b[a[1]] && (a = this._convert(b[a[1]], a[2])) && c.push(a);
        return c
      },
      _send: function (a) {
        var b = [],
          c = this.allowedEvents,
          d, f;
        var l = 0;
        for (f = a.length; l < f; l++) {
          if ((d = a[l]) && d.ymetrikaEvent) {
            var g = d.ymetrikaEvent;
            this._callHandlers(g);
            if ("params" === g.type && g.data) {
              g.sended || (g.sended = []);
              if (g.counter) this.counter && this.counter.params && this.counterId == g.counter && (this.onCookies(function (a) {
                this.counter.params(a.data)
              }, this, k.mixin({}, g)), g.sended.push(this.counterId));
              else this.onCookies(function (a) {
                k.forEachKey(this.globalConfig.get("counters"), function (b, c) {
                  var d = b.split(":")[0];
                  !k.inArray(a.sended, d) && c && c.params && (c.params(a.data),
                    a.sended.push(d))
                }, this)
              }, this, k.mixin({}, g));
              g.status == this.status.NEW && g.parent && this.frameConnector && this.frameConnector.checkFrame(m.parent) && m.parent !== m && (this.frameConnector.sendToParents({
                type: "params",
                data: g.data
              }, function () {
                g.status = this.status.OK
              }, this), g.status = this.status.PENDING)
            }
          }
          if (d && d.ecommerce) {
            var n = {};
            var r = !1;
            k.forEachKey(d.ecommerce, function (a, b) {
              0 <= k.arrayIndexOf(c, a) && (r = !0, n[a] = b)
            });
            r && b.push(n)
          }
          b = b.concat(this._checkGtag(d))
        }
        if (b.length) this.onCookies(function (a) {
            this.counter.params({
              __ym: {
                ecommerce: a
              }
            })
          },
          this, b)
      }
    });
  Ka.handlers = [];
  var Lb = "GDPR-ok GDPR-cross GDPR-cancel GDPR-skip GDPR-frame-skip GDPR-frame-ya GDPR-frame-noya GDPR-open-start GDPR-eu-skip GDPR-open-fail GDPR-open-success GDPR-cookie-success GDPR-cookie-fail GDPR-skip-login GDPR-skip-domain GDPR-skip-na GDPR-skip-eu-na GDPR-skip-wv".split(" "),
    mc = ["https://brozen.yandex.ru", "https://yabro1.zen-test.yandex.ru/yabro/index.html", "https://yabro2.zen-test.yandex.ru/yabro/index.html"],
    ua = J.inherit({
      globalKey: "f1",
      MAX_SIZE: 1E6,
      isYAN: !1,
      trigger: function (a) {
        this.globalConfig.get("dataLayer").push({
          ymetrikaEvent: {
            type: a
          }
        })
      },
      initCounter: function () {},
      enabled: pa() && -1 < m.location.href.indexOf("yagdprcheck\x3d1"),
      _initComponent: function () {
        this._cookie = ua.cookie;
        this._sender = new Jb({
          fake: !0,
          globalConfig: this.globalConfig,
          forceNoRedirect: !0
        })
      },
      realise: function (a, b) {
        this.initCounter.apply(m, a);
        this.globalConfig.set(this.globalKey, function (a) {
          a()
        });
        b.length && ob.chain(b.concat([function () {
          b = []
        }]), null, !1, "GDPR")
      },
      showPopup: function (a, b, c, d, f) {
        var k = this;
        a = v.loadScript({
          src: "https://yastatic.net/q/global-notifications/cc/_lego-cc" +
            a + "." + b + ".js"
        });
        k.trigger("GDPR-open-start");
        a.onerror = function (a) {
          F(function () {
            throw a;
          }, "gdpr-popup")();
          k.trigger("GDPR-open-fail");
          k.realise(c, d);
          k.frameConnector.sendToChildren({
            type: "GDPR-ok"
          })
        };
        a.onload = function () {
          k.trigger("GDPR-open-success");
          Ka.handlers = Ka.handlers.concat([{
            type: "GDPR-ok, GDPR-cross",
            callback: function (a) {
              a.once || (f.create("gdpr", "0", 525600), k.realise(c, d), k.frameConnector.sendToChildren({
                type: "GDPR-ok"
              }), a.once = !0)
            }
          }, {
            type: "GDPR-cancel",
            callback: function () {
              f.create("gdpr",
                "1");
              k.logCancel();
              k.frameConnector.sendToChildren({
                type: "GDPR-cancel"
              })
            }
          }])
        }
      },
      askGDPR: function (a, b, c, d, f, l) {
        if (k.inArray([null, ""], a)) this.showPopup(b, c, d, f, l);
        else if ("0" === a) this.trigger("GDPR-cookie-success"), this.realise(d, f);
        else if ("1" === a) return this.trigger("GDPR-cookie-fail"), this.logCancel(), !1
      },
      logCancel: function () {
        this._sender.hit(function () {}, !1)
      },
      handle: function () {
        var a = this._sender,
          b = [],
          c = (z.getLanguage() || "").toLowerCase().split("-")[0],
          d = "ontouchstart" in m ? "-touch" : "",
          f = this._cookie,
          l = f.read("gdpr"),
          g = f.read("yaGdprCheck"),
          n = this,
          r = this.globalConfig.get(this.globalKey),
          t = arguments;
        b.size = 0;
        if (r) return r(function () {
          n.realise(t, b)
        });
        k.inArray("ru en kk be ky tr tt uk".split(" "), c) || (c = "en");
        if (!this.enabled && ("0" === l || z.isSafariWebView() || z.isAndroidWebView() || k.inArray(mc, m.location.href.split("?")[0]) || !pa() || f.read("yandex_login") || this.disable)) return f.read("yandex_login") ? (this.trigger("GDPR-skip-login"), f.create("gdpr", "0", 525600)) : pa() ? "0" === l ? this.trigger("GDPR-skip") :
          z.isSafariWebView() || z.isAndroidWebView() ? this.trigger("GDPR-skip-wv") : this.trigger("GDPR-skip-na") : this.trigger("GDPR-skip-domain"), this.realise(t, b);
        this.globalConfig.set(this.globalKey, function (a, c) {
          var d = 0;
          try {
            d = JSON.stringify(c).length || 0
          } catch (h) {}
          b.size + d < n.MAX_SIZE ? (b.push(a), b.size += d) : k.warning("GDPR buffer is exceeded")
        });
        a.hit(function (a) {
          if (a.params.eu || g || n.enabled)
            if (n.frameConnector && n.frameConnector.addHandler("isYandex", function () {
                return {
                  type: "isYandex",
                  isYandex: pa()
                }
              }), n.frameConnector.isIframe) {
              n.frameConnector.sendToParents({
                  type: "isYandex"
                },
                function (a, c) {
                  var d = !1;
                  clearTimeout(m);
                  c[0].isYandex ? (n.trigger("GDPR-frame-ya"), n.frameConnector.addHandler("GDPR-ok", function () {
                    d || (f.create("gdpr", "0", 525600), n.realise(c, b), d = !0)
                  }), n.frameConnector.addHandler("GDPR-cancel", function () {
                    f.create("gdpr", "1")
                  })) : (n.trigger("GDPR-frame-noya"), n.realise(c, b))
                });
              var m = k.setTimeout(function () {
                n.trigger("GDPR-frame-skip");
                n.realise(t, b)
              }, 2E3)
            } else n.askGDPR(l, d, c, t, b, f);
          else return a.params.eu ? n.trigger("GDPR-skip-eu-na") : (f.create("gdpr", "0"), n.trigger("GDPR-eu-skip")),
            n.realise(t, b)
        })
      }
    });
  ua.globalKey = "f1";
  ua.cookie = new N({
    skipPrefix: !0
  });
  ua.getState = function (a) {
    var b = ua.cookie.read("gdpr");
    a = k.reduce(function (a, b) {
      b.ymetrikaEvent && k.inArray(Lb, b.ymetrikaEvent.type) && a.push(k.arrayIndexOf(Lb, b.ymetrikaEvent.type));
      return a
    }, [], a.get("dataLayer"));
    return a.length ? (a = a.join(","), b && (a += "-" + (k.inArray(["0", "1"], b) ? b : "2")), a) : ""
  };
  var nc = {
    init: function (a, b, c) {
      "22663942" == c && (c = t.createElement("img"), a && a.account && a.tmsec && b && (c.src = "https://www.tns-counter.ru/V13a****" +
        a.account + "/ru/UTF-8/tmsec\x3d" + a.tmsec + "/" + b))
    }
  };
  z.isIE = k.memorize(function () {
    return t && !t.addEventListener || !1
  });
  z.isChromePdf = k.memorize(function () {
    var a, b = navigator.plugins;
    if (b && b.length)
      for (a = 0; a < b.length; a++)
        if (/Chrome PDF Viewer/.test(b[a].name)) return !0;
    return !1
  });
  z.isPrivate = F(function (a) {
    var b = k.bind(a, null, 0);
    a = k.bind(a, null, 1);
    if (k.isFunction(m.webkitRequestFileSystem) && !z.isAndroid()) return m.webkitRequestFileSystem(0, 0, b, a);
    if (z.isFF()) return "undefined" == typeof navigator.serviceWorker ?
      a() : b();
    if (z.isSafari() && k.isFunction(m.openDatabase)) try {
      m.openDatabase(null, null, null, null), b()
    } catch (c) {
      a()
    } else {
      if (m.indexedDB || !m.PointerEvent && !m.MSPointerEvent) return b();
      a()
    }
  }, "isPrivate");
  z.findTarget = function (a) {
    a = a.target || a.srcElement;
    var b;
    if (!a) return !1;
    3 == a.nodeType && (a = a.parentNode);
    for (b = a && a.nodeName && a.nodeName.toString().toLowerCase(); a && a.parentNode && a.parentNode.nodeName && ("a" !== b && "area" !== b || !a.href && !a["xlink:href"]);) b = (a = a.parentNode) && a.nodeName && a.nodeName.toString().toLowerCase();
    return a.href ? a : !1
  };
  z.getHref = function (a) {
    if (!a) return "";
    a = a.href;
    return k.isString(a) ? "" + a : "[object SVGAnimatedString]" === k.toString(a) ? "" + a.baseVal : ""
  };
  z.getLinkComponents = function (a) {
    return a && "A" === a.nodeName ? {
      href: a.href,
      hostname: a.hostname || k.parseUrl(a.href).hostname || "",
      host: a.host,
      protocol: a.protocol,
      pathname: a.pathname,
      hash: a.hash,
      port: a.port,
      search: a.search,
      query: a.search.slice(Math.min(1, a.search.length)),
      path: (a.pathname || "/") + a.search
    } : k.isString(a) ? k.parseUrl(a) : {
      href: "",
      hostname: "",
      host: "",
      protocol: "",
      pathname: "",
      hash: "",
      port: "",
      search: "",
      query: "",
      path: ""
    }
  };
  var oc = T.inherit({
      resource: "clmap",
      retry: !0,
      transports: [Da],
      sendClick: function (a, b, c, d) {
        this.send({
          "page-url": a,
          "pointer-click": b
        }, {}, c, d)
      }
    }),
    pc = J.inherit({
      filter: null,
      ignoreTags: [],
      quota: 0,
      isTrackHash: !1,
      protocol: "",
      counterId: 0,
      counterType: 0,
      startTime: 0,
      MAX_LEN_PATH: 128,
      TIMEOUT_CLICK: 50,
      TIMEOUT_SAME_CLICKS: 1E3,
      DELTA_SAME_CLICKS: 2,
      tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
      _initComponent: function () {
        var a, b;
        this._lastClick = null;
        this.hasQuota = !!this.quota;
        this._quota = this.quota;
        this._ignoreTags = [];
        if (this.ignoreTags)
          for (a = 0; a < this.ignoreTags.length; a++) this.ignoreTags[a] && k.mergeArrays(this._ignoreTags, [String(this.ignoreTags[a]).toUpperCase()]);
        this._cacheTags = {};
        a = 59;
        var c = String.fromCharCode;
        for (b = 0; b < this.tags.length; b++) this._cacheTags[this.tags[b]] = c(a), c(a), a++;
        this._sender = new oc({
          globalConfig: this.globalConfig,
          protocol: this.protocol,
          counterId: this.counterId,
          counterType: this.counterType
        });
        this._start = !1;
        this.start()
      },
      destroy: function () {
        this.stop()
      },
      start: function () {
        if (!this._start) y.on(t, "click", this._handler, this);
        this._start = !0
      },
      stop: function () {
        this._start && y.un(t, "click", this._handler, this);
        this._start = !1
      },
      setTrackHash: function (a) {
        this.isTrackHash = a
      },
      _isIgnore: function (a) {
        return v.classNameExists(a, "(ym-disable-clickmap|ym-clickmap-ignore)")
      },
      _handler: function (a) {
        a = {
          el: S.getTarget(a),
          pos: S.getPos(a),
          button: S.getMouseButton(a),
          time: +new Date
        };
        if (this._isTrackingClick(a)) {
          var b =
            v.getElementSize(a.el);
          var c = v.getElementXY(a.el);
          b = ["rn", k.random(), "x", Math.floor(65535 * (a.pos[0] - c[0]) / (b[0] || 1)), "y", Math.floor(65535 * (a.pos[1] - c[1]) / (b[1] || 1)), "t", Math.floor((a.time - this.startTime) / 100), "p", this._getElPath(a.el), "X", a.pos[0], "Y", a.pos[1]];
          c = M().href;
          this.isTrackHash ? k.mergeArrays(b, ["wh", "1"]) : c = c.split("#")[0];
          this._sender.sendClick(k.trim(c, nb), b.join(":"));
          this._lastClick = a
        }
      },
      _isTrackingClick: function (a) {
        var b;
        if (m.ymDisabledClickmap || k.isMetrikaPlayer() || !a.el) return !1;
        var c = a.el.tagName;
        if ((2 == a.button || 3 == a.button) && "A" != c || this.filter && !this.filter(a.el, c)) return !1;
        for (b = 0; b < this._ignoreTags.length; b++)
          if (this._ignoreTags[b] == c) return !1;
        for (c = a.el; c;) {
          if (this._isIgnore(c)) return !1;
          c = c.parentNode
        }
        if (this._lastClick) {
          if (a.time - this._lastClick.time < this.TIMEOUT_CLICK) return !1;
          c = Math.abs(this._lastClick.pos[0] - a.pos[0]);
          b = Math.abs(this._lastClick.pos[1] - a.pos[1]);
          var d = a.time - this._lastClick.time;
          if (this._lastClick.el == a.el && c < this.DELTA_SAME_CLICKS && b < this.DELTA_SAME_CLICKS &&
            d < this.TIMEOUT_SAME_CLICKS) return !1
        }
        if (this.hasQuota) {
          if (!this._quota) return !1;
          this._quota--
        }
        return !0
      },
      _getElPath: function (a) {
        for (var b = ""; a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName;) b += this._cacheTags[a.tagName] || "*", b += v.getElementNeighborPosition(a) || "", a = a.parentNode;
        return k.trim(b, this.MAX_LEN_PATH)
      }
    }),
    Mb = J.inherit({
      injectHash: {
        Wjw75ghm7fa7JW8p: "https://yastatic.net/metrika-static-watch/assessor-init.js",
        Z4RhWJNDJanzkGJa: "https://yastatic.net/metrika-static-watch/assessor-compare.js"
      },
      ASSESSOR_COOKIE: "assessor",
      REMOTE_CONTROL: "i",
      getInjectHash: function () {
        var a = {};
        k.forEachKey(this.injectHash, function (b) {
          a[va + ("" + k.fnv32a(b))] = this.injectHash[b]
        }, this);
        return a
      },
      checkAssessor: function () {
        var a = [],
          b = this.getInjectHash();
        k.forEachKey(b, function (c) {
          if ((new RegExp(c)).test(m.location.hash) || N.get(this.ASSESSOR_COOKIE + c)) N.set(this.ASSESSOR_COOKIE + c), a.push(b[c])
        }, this);
        return a
      },
      _initComponent: function () {
        var a = this.checkAssessor();
        this.globalConfig.get(this.REMOTE_CONTROL) || (this.globalConfig.set(this.REMOTE_CONTROL, !0), Mb.superclass._initComponent.apply(this, arguments), this._executedMsgs = {}, y.on(m, "message", this._onMessage, this), a.length && (this.globalConfig.set("oo", !0), this.globalConfig.get("stopRecoder", function () {})(), k.arrayEvery(a, function (a) {
          v.loadScript({
            src: a
          }, m);
          return 1
        })))
      },
      _buildRemoteIframe: function (a) {
        var b = k.getNativeFunction("createElement", t)("div"),
          c = v.getBody() || t.documentElement;
        if (c) {
          b.innerHTML = '\x3ciframe name\x3d"RemoteIframe" allowtransparency\x3d"true" style\x3d"position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"\x3e\x3c/iframe\x3e';
          var d = b.firstChild;
          d.onload = function () {
            v.loadScript({
              src: a
            }, d.contentWindow)
          };
          m._ym__remoteIframeEl = d;
          b.createShadowRoot || b.webkitCreateShadowRoot ? (c.appendChild(b), b.removeChild(d), (c = b.createShadowRoot ? b.createShadowRoot() : b.webkitCreateShadowRoot()) && c.appendChild(d), m._ym__remoteIframeContainer = b) : (c.appendChild(d), m._ym__remoteIframeContainer = d)
        }
      },
      _isAllowedLang: function (a) {
        return -1 !== k.arrayIndexOf("ru uk en tr es de".split(" "), a)
      },
      _isAllowedOrigin: function (a) {
        return /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/.test(a)
      },
      _isAllowedStatic: function (a) {
        return /^(([\w\-.]+\.)?dev\.webvisor\.com|yastatic\.net|([\w\-.]+\.)?s3\.(mds\.)?yandex\.net)$/.test(a)
      },
      _onMessage: function (a) {
        try {
          var b = a.origin
        } catch (c) {}
        b && this._isAllowedOrigin(b) && (b = ba.parse(a.data)) && "appendremote" === b.action && this._isAllowedStatic(k.parseUrl(b.domain).host) && this._isAllowedLang(b.lang) && !this._executedMsgs[b.id] && (this._executedMsgs[b.id] = !0, m._ym__postMessageEvent = a, m._ym__inpageMode = b.inpageMode, m._ym__initMessage = b.initMessage, this._buildRemoteIframe(b.domain +
          "/cdn/inpage-remote/" + (b.newScriptAddr ? "_inpage-remote_" : "inpage-remote.") + b.lang + ".js"))
      }
    }),
    qc = {
      match: function () {
        this.enabled() && y.ready(function () {
          var a = k.getNativeFunction("createElement", t)("iframe");
          a.onload = function () {
            Qa.save("cm", x.getMinutes());
            v.removeNode(a)
          };
          a.style.display = "none";
          a.src = "https://mc.webvisor.org/metrika/watch_match.html";
          t.documentElement.appendChild(a)
        })
      },
      enabled: function () {
        return 1440 < x.getMinutes() - Qa.getNum("cm") && "tr" === k.getTld()
      }
    };
  F(function () {
    (function (a) {
      function b(d) {
        if (c[d]) return c[d].exports;
        var f = c[d] = {
          i: d,
          l: !1,
          exports: {}
        };
        a[d].call(f.exports, f, f.exports, b);
        f.l = !0;
        return f.exports
      }
      var c = {};
      b.m = a;
      b.c = c;
      b.d = function (a, c, k) {
        b.o(a, c) || Object.defineProperty(a, c, {
          configurable: !1,
          enumerable: !0,
          get: k
        })
      };
      b.n = function (a) {
        var c = a && a.__esModule ? function () {
          return a["default"]
        } : function () {
          return a
        };
        b.d(c, "a", c);
        return c
      };
      b.o = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
      };
      b.p = "";
      return b(b.s = 3)
    })({
      0: function (a, b, c) {
        b.__esModule = !0;
        b.listToArray = function (a) {
          return a ? [].slice.call(a) : []
        }
      },
      1: function (a, b, c) {
        b.__esModule = !0;
        var d = [".googlesyndication.com/", "/googleads"];
        b.isGoogleSrc = function (a) {
          return !(!a || !d.filter(function (b) {
            return 0 < a.indexOf(b)
          }).length)
        }
      },
      3: function (a, b, c) {
        b.__esModule = !0;
        a = {
          detectAd: c(4).detectAd
        };
        m.Ya ? m.Ya.AdDetector ? a = m.Ya.AdDetector : m.Ya.AdDetector = a : m.Ya = {
          AdDetector: a
        };
        b.AdDetector = a
      },
      34: function (a, b, c) {
        b.__esModule = !0;
        b.getParentElementsCount = function (a) {
          for (var b = 0;;)
            if (a = a.parentElement) b++;
            else return b
        }
      },
      4: function (a, b, c) {
        b.__esModule = !0;
        var d =
          c(5),
          f = c(9),
          k = c(34),
          g = c(6),
          n = t.body,
          r = t.documentElement;
        b.detectAd = function () {
          var a = m.pageYOffset || r.scrollTop || n.scrollTop,
            b = m.pageXOffset || r.scrollLeft || n.scrollLeft,
            c = r.clientTop || n.clientTop || 0,
            l = r.clientLeft || n.clientLeft || 0,
            h = r.scrollWidth || r.offsetWidth || m.innerWidth,
            e = r.scrollHeight || r.offsetHeight || m.innerHeight,
            t = g.getFrienlyWindowsTree(m),
            w = [];
          g.windowsTreeEach(t, function (a) {
            var b = a.window,
              c = a.parent,
              e = 0 < d.getParentFriendlyIFrames(b.document.documentElement).length,
              g = f.getAdsInWindow(b, {
                isInIFrame: e
              });
            e = g.adElements;
            g = g.iframeProviders;
            if (c) {
              var h = b.frameElement,
                k = w.filter(function (a) {
                  return a.windowsTree === c
                })[0].adElements;
              g.forEach(function (a) {
                k.push({
                  provider: a,
                  element: h
                })
              })
            }
            w.push({
              windowsTree: a,
              adElements: e
            })
          });
          w.forEach(function (a) {
            a.adElements = a.adElements.sort(function (a, b) {
              return k.getParentElementsCount(a.element) - k.getParentElementsCount(b.element)
            })
          });
          var v = [],
            x = [];
          w.forEach(function (a) {
            var b = a.windowsTree,
              c = b.parent;
            a = a.adElements;
            b = d.getParentFriendlyIFrames(b.window.document.documentElement);
            var e = b[b.length - 1];
            a.forEach(function (a) {
              var b = a.element;
              x.push({
                provider: a.provider,
                element: c ? e : b
              })
            })
          });
          x.forEach(function (d) {
            var f = d.element;
            var g = f.getBoundingClientRect();
            var k = g.top + a - c;
            g = g.left + b - l;
            var m = f.clientWidth;
            f = f.clientHeight;
            var n = g + m,
              p = k + f,
              q = 0 > g ? 0 : g < h ? g : h,
              r = 0 > k ? 0 : k < e ? k : e;
            100 <= ((n > h ? h : n > q ? n : q) - q) * ((p > e ? e : p > r ? p : r) - r) && v.push({
              top: k,
              left: g,
              width: m,
              height: f,
              provider: d.provider
            })
          });
          return {
            page: {
              width: h,
              height: e
            },
            window: {
              top: a,
              left: b,
              width: m.innerWidth,
              height: m.innerHeight
            },
            ads: v
          }
        }
      },
      5: function (a,
        b, c) {
        b.__esModule = !0;
        b.getParentFriendlyIFrames = function (a) {
          for (var b = [];;) try {
            if (a = a.ownerDocument.defaultView.frameElement) b.push(a);
            else return b
          } catch (l) {
            return b
          }
        }
      },
      6: function (a, b, c) {
        function d(a) {
          return m.listToArray(a.document.getElementsByTagName("iframe")).filter(function (a) {
            if (g.isSafari) return !1;
            try {
              return a.contentWindow.document
            } catch (p) {
              return !1
            }
          }).map(function (a) {
            return a.contentWindow
          })
        }

        function f(a, b) {
          var c = {
            window: a,
            children: [],
            parent: b
          };
          c.children = d(a).map(function (a) {
            return f(a,
              c)
          });
          return c
        }

        function k(a, b) {
          b(a);
          a.children.forEach(function (a) {
            return k(a, b)
          })
        }
        b.__esModule = !0;
        var g = c(7),
          m = c(0);
        b.getFrienlyWindowsTree = f;
        b.windowsTreeEach = k
      },
      7: function (a, b, c) {
        b.__esModule = !0;
        a = c(8);
        b.isSafari = a.isSafari()
      },
      8: function (a, b, c) {
        b.__esModule = !0;
        b.isSafari = function () {
          var a = navigator.userAgent.toLowerCase();
          return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome") && -1 === a.indexOf("android")
        }
      },
      9: function (a, b, c) {
        b.__esModule = !0;
        var d = c(0),
          f = c(1);
        b.getAdsInWindow = function (a, b) {
          function c(a,
            b) {
            b.forEach(function (b) {
              e.push({
                provider: a,
                element: b
              })
            })
          }
          var g = b.isInIFrame,
            k = a.document.body,
            l = d.listToArray(k.querySelectorAll("img")),
            m = d.listToArray(k.querySelectorAll("iframe")),
            q = d.listToArray(k.querySelectorAll("script")),
            h = d.listToArray(k.querySelectorAll("div")),
            e = [],
            t = [],
            w = d.listToArray(k.querySelectorAll("yatag")),
            v = d.listToArray(k.querySelectorAll("yatag yatag"));
          c("yandex", w.filter(function (a) {
            return -1 === v.indexOf(a)
          }));
          c("adriver", m.filter(function (a) {
            return (a = a.src) && -1 < a.indexOf(".adriver.ru/")
          }));
          c("adfox", m.filter(function (a) {
            return (a = a.id) && -1 < a.toLowerCase().indexOf("adfox")
          }));
          c("adfox", l.filter(function (a) {
            return (a = a.src) && -1 < a.indexOf("/banners.adfox.ru/")
          }));
          c("adfox", h.filter(function (a) {
            return -1 < a.id.indexOf("AdFox_banner_")
          }));
          g && l.filter(function (a) {
            return (a = a.src) && -1 < a.indexOf(".adfox.ru/")
          }).length && t.push("adfox");
          m.filter(function (a) {
            return f.isGoogleSrc(a.src)
          }).forEach(function (a) {
            e.push({
              provider: "google",
              element: a
            })
          });
          g && q.filter(function (a) {
              return f.isGoogleSrc(a.src)
            }).length &&
            t.push("google");
          c("awaps", m.filter(function (a) {
            return (a = a.src) && -1 < a.indexOf("awaps.yandex.net/")
          }));
          c("criteo", m.filter(function (a) {
            var b = a.src;
            a = a.id;
            return b && (-1 < b.indexOf(".criteo.com/") || a && -1 < a.indexOf("cto_iframe_")) ? !0 : !1
          }));
          return {
            adElements: e,
            iframeProviders: t
          }
        }
      }
    })
  }, "", !0)();
  var rc = {
      init: function (a, b) {
        if (Math.random() < (b || .005) && !D.get("adDetect")) {
          D.set("adDetect", !0);
          var c = function (b) {
            var c = m.Ya.AdDetector.detectAd();
            var d = c.window;
            var f = c.page;
            a.sendParams({
              __ym: {
                ads: {
                  w: {
                    t: d.top,
                    l: d.left,
                    w: d.width,
                    h: d.height
                  },
                  p: {
                    w: f.width,
                    h: f.height
                  },
                  a: k.map(function (a) {
                    return {
                      t: a.top,
                      l: a.left,
                      w: a.width,
                      h: a.height,
                      p: a.provider
                    }
                  }, c.ads),
                  full: b ? 1 : 0
                }
              }
            })
          };
          var d = F(function () {
            y.un(m, "load", d);
            c(!0)
          }, "", !0);
          y.on(m, "load", d);
          k.setTimeout(c, 1E4, "AdDetector", !0)
        }
      }
    },
    Nb = J.inherit({
      message: m.postMessage,
      spliter: ":",
      nameSpace: "__yminfo",
      pending: {},
      childs: {},
      isIframe: !1,
      parents: {},
      dataToSend: {
        parents: [],
        childs: []
      },
      checkFrame: function (a) {
        try {
          var b = a && a.postMessage
        } catch (c) {
          return !1
        }
        return b
      },
      checkChildrenData: function (a,
        b) {
        k.arrayEvery(this.dataToSend.childs, function (c) {
          -1 == k.arrayIndexOf(c.tryTo, b.counterId) && (c.tryTo.push(b.counterId), k.mixin(c.data, {
            toCounter: b.counterId
          }), this.sendToIframe(a, c.data, function () {
            c.sendedTo.push(b.counterId);
            c.callback && c.callback(b, arguments)
          }));
          return !0
        }, this)
      },
      checkParentData: function (a, b) {
        k.arrayEvery(this.dataToSend.parents, function (c) {
          -1 == k.arrayIndexOf(c.tryTo, b.counterId) && (c.tryTo.push(b.counterId), k.mixin(c.data, {
            toCounter: b.counterId
          }), this.sendToIframe(a, c.data, function () {
            c.sendedTo.push(b.counterId);
            c.callback && c.callback(b, arguments)
          }));
          return !0
        }, this)
      },
      getHandlers: function () {
        return {
          initToChild: [{
            fn: function (a, b) {
              a.source === m.top && this.trigger("parentConnect", a, b)
            }
          }],
          initToParent: [{
            fn: function (a, b) {
              this.childs[b.counterId] = {
                info: b,
                window: a.source
              };
              this.checkChildrenData(a.source, b)
            }
          }],
          parentConnect: [{
            fn: function (a, b) {
              this.parents[b.counterId] = {
                info: b,
                window: a.source
              };
              this.checkParentData(a.source, b)
            }
          }]
        }
      },
      genMessage: function (a, b) {
        var c = {
          date: x.getMs(),
          key: Math.random(),
          dir: 0
        };
        b && (c = {
          date: b[0],
          key: b[1],
          dir: b[2]
        });
        k.mixin(a, {
          counterId: this.counterId,
          hid: this.hid
        });
        var d = {
          data: a
        };
        d[this.nameSpace] = [this.nameSpace, c.date, c.key, c.dir].join(this.spliter);
        return {
          meta: c,
          string: ba.stringify(d)
        }
      },
      sendToIframe: function (a, b, c, d) {
        b = this.genMessage(b);
        var f = this,
          l = [b.meta.date, b.meta.key].join(this.spliter);
        this.checkFrame(a) && (a.postMessage(b.string, "*"), this.pending[l] = k.bind(c, d || this), k.setTimeout(function () {
          delete f.pending[l]
        }, 5E3, this, "fc.toSendToIframe"))
      },
      sendToChildren: function (a, b, c) {
        var d =
          this,
          f = this.dataToSend.childs.push({
            sendedTo: [],
            tryTo: [],
            callback: b ? k.bind(b, c || this) : !1,
            data: a
          }) - 1;
        k.forEachKey(this.childs, function (a) {
          this.dataToSend.childs[f].tryTo.push(a);
          return 1
        }, this);
        k.keys(this.childs).length && k.forEachKey(this.childs, function (b) {
          this.sendToIframe(d.childs[b].window, k.mixin(a, {
            toCounter: b
          }), function (a) {
            this.dataToSend.childs[f].sendedTo.push(b);
            this.dataToSend.childs[f].callback && this.dataToSend.childs[f].callback(a)
          }, this)
        }, this)
      },
      sendToParents: function (a, b, c) {
        var d = this.dataToSend.parents.push({
          sendedTo: [],
          tryTo: [],
          callback: b ? k.bind(b, c || this) : !1,
          data: a
        }) - 1;
        k.forEachKey(this.parents, function (a) {
          this.dataToSend.parents[d].tryTo.push(a);
          return 1
        }, this);
        k.keys(this.parents).length && this.sendToIframe(m.parent, a, function (a) {
          k.forEachKey(this.parents, function (b) {
            this.dataToSend.parents[d].sendedTo.push(b);
            this.dataToSend.parents[d].callback && this.dataToSend.parents[d].callback(a)
          }, this)
        }, this)
      },
      addHandler: function (a, b, c) {
        this.handlers[a] || (this.handlers[a] = []);
        this.handlers[a].push({
          fn: b,
          ctx: c
        })
      },
      destruct: function () {
        y.un(m,
          "message", this.onMessage, this, {
            passive: !1,
            name: "FrameConnector"
          });
        this.sendToIframe = function () {};
        this.parents = [];
        this.pending = {};
        this.childs = {};
        this.dataToSend = {
          parents: [],
          childs: []
        }
      },
      _initComponent: function () {
        var a = m.document.getElementsByTagName("iframe"),
          b = 0;
        Nb.superclass._initComponent.apply(this, arguments);
        this.handlers = k.mixin({}, this.getHandlers());
        this.isIframe = z.isIframe();
        if (this.message) {
          for (b = 0; b < a.length; b++) {
            var c = a[b];
            (function (a, b) {
              a.sendToIframe(b.contentWindow, {
                  type: "initToChild"
                },
                function (c) {
                  a.childs[c.counterId] = {
                    info: c,
                    window: b.contentWindow
                  }
                })
            })(this, c)
          }
          this.isIframe && this.sendToIframe(m.parent, {
            type: "initToParent"
          }, function (a) {
            this.trigger("parentConnect", {
              source: m.parent
            }, a)
          });
          y.on(m, "message", this.onMessage, this, {
            passive: !1,
            name: "FrameConnector"
          })
        }
      },
      trigger: function (a, b, c) {
        var d = this;
        return k.map(function (a) {
          a = a.fn.call(a.ctx || d, b, c) || {};
          return k.mixin(a, {
            counterId: d.counterId,
            hid: d.hid
          })
        }, this.handlers[a])
      },
      DIR_INDEX: 2,
      onMessage: function (a) {
        var b, c = [];
        try {
          var d = a.data;
          d = ba.parse(a.data);
          var f = d[this.nameSpace]
        } catch (g) {
          return
        }
        if (f && f.substring && f.substring(0, this.nameSpace.length) == this.nameSpace) {
          for (b = 0; 3 >= b; b++) {
            var l = k.arrayIndexOf(f, this.spliter); - 1 !== l ? c.push(f.substring(0, l)) : c.push(f);
            f = f.substring(l + 1)
          }
          b = c.splice(1, 3);
          if ((d = d.data) && d.type && this.handlers[d.type] && "0" === b[this.DIR_INDEX]) {
            if (!d.toCounter || d.toCounter == this.counterId) {
              try {
                a.source
              } catch (g) {
                return
              }
              d.counterId && this.checkFrame(a.source) && (l = this.trigger(d.type, a, d), a.source.postMessage(this.genMessage(l, [b[0], b[1], d.counterId]).string, "*"))
            }
          } else b[this.DIR_INDEX] == this.counterId && k.isArray(d) && k.arrayEvery(d, function (a) {
            return a.counterId && a.hid
          }) && (a = this.pending[[b[0], b[1]].join(this.spliter)]) && a.apply(this, d)
        }
      }
    }),
    L = M(),
    ib = x.getTimezone(),
    jb = x.getTimestamp(),
    ea = m.screen,
    ac = 64,
    nb = z.isIE() ? 512 : 2048,
    bc = z.isIE() ? 512 : 2048,
    Bb = z.isIE() ? 100 : 400,
    Ib = 100,
    mb = "noindex",
    Ob = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|ppt(x|m|b)?|xls(x|m|b)?|pdf|phps|png|xpi|g?zip)$/i,
    sc = +new Date,
    ma = "Metrika",
    sb, eb, va = function () {
      return "1857"
    }();
  D.init().setSafe("counters", {}).setSafe("hitParam", {}).setSafe("counterNum", 0).setSafe("dataLayer", []).setSafe("hitId", k.random(1, 1073741824)).setSafe("_globalMetrikaHitId", k.random()).setSafe("v", va);
  Ea.globalConfig = D;
  ma = "Metrika2";
  m.Ya[ma] = function (a, b, c, d) {
    var f = this;
    return F(function () {
      function l(a, b, c) {
        b = new N({
          counterId: b
        });
        b.erase("mp2_substs");
        if (a) {
          a: {
            var d = a.conditions;
            var e;
            if (d && d.length)
              for (e = 0; e < d.length; e++) {
                var f = d[e];
                if ("ref" ==
                  f.type) var h = g(f);
                else if ("adv" == f.type) {
                  var l = m.Ya._metrika.counter._directCampaign;
                  var p = f.ServiceNamePattern;
                  var q = f.RefererPattern;
                  h = l ? f.direct_orders : f.direct_camp;
                  var na = t.referrer,
                    la = Ba.parse(L.search),
                    w = u(L.search, L.hash),
                    v;
                  var x = la;
                  var y = {};
                  var ka = ["source", "medium", "campaign", "term", "content"];
                  for (v = 0; v < ka.length; v++) x["utm_" + ka[v]] && (y[ka[v]] = x["utm_" + ka[v]]);
                  x = y;
                  ka = l ? "direct.yandex.ru" : w && w.service || x.source;
                  v = !1;
                  if (!v && p && p.length)
                    for (y = 0; y < p.length; y++)
                      if ((new RegExp(p[y], "i")).test(ka)) {
                        v = !0;
                        break
                      }
                  if (!v && !f.yandex_direct && q && q.length)
                    for (p = 0; p < q.length; p++)
                      if ((new RegExp(q[p], "i")).test(na)) {
                        v = !0;
                        break
                      }!v && f.google_adwords && la.gclid && (v = !0);
                  if (v && h && h.length && (v = !1, l = l || w && w.campaign || x && x.campaign))
                    for (f = 0; f < h.length; f++)
                      if (h[f] == l) {
                        v = !0;
                        break
                      }
                  h = v
                } else h = !1;
                if (h) {
                  d[e].track_id && b.create("mp2_track", d[e].track_id, 43200);
                  break a
                }
              }
          }
          d = b.read("mp2_track");a = a.substs && a.substs[d];d && a ? (b.create("mp2_substs", k.toJSON(a)), a = n(a), c.params("__ym", a ? "mp_trackid" : "mp_trackid_bad", d)) : r()
        }
        else r()
      }

      function g(a) {
        var b = t.referrer || "",
          c, d;
        if ((new RegExp("^https?://" + L.host + "/")).test(b)) return !1;
        var e = a.patterns;
        for (c = 0; c < e.length; c++) {
          var f = new RegExp(e[c], "i");
          if (b.match(f))
            if (f = a.params || [], f.length) {
              var g = k.safeDecodeURIComponent((RegExp.$1 || "").replace(/\+/g, "%20"));
              for (d = 0; d < f.length; d++)
                if (g == k.safeDecodeURIComponent(f[d])) return !0
            } else return !0
        }
        return !1
      }

      function n(a, b) {
        var c = !1,
          d;
        if (a && "string" != typeof a && a.length)
          for (d = 0; d < a.length; d++) {
            var e = a[d].selector;
            var f = a[d].text;
            var g = e.charAt(0);
            e = e.slice(1);
            if ("#" == g) {
              if (g = t.getElementById(e)) c = !0, b && ja.unshift([g, g.innerHTML]), g.innerHTML = f
            } else if ("." == g)
              for (g = v.getElementsByClassName(e), e = 0; e < g.length; e++) {
                c = !0;
                var h = g[e],
                  k = f;
                b && ja.unshift([h, h.innerHTML]);
                h.innerHTML = k
              }
          }
        return c
      }

      function r() {
        var a;
        for (a = 0; a < ja.length; a++) ja[a][0].innerHTML = ja[a][1]
      }

      function u(a, b) {
        var c, d = "";
        a = a && a.replace(/^\?/, "");
        b = b && b.replace(/^#/, "") || "";
        if (a) {
          var e = a.split("\x26");
          for (c = 0; c < e.length; c++) {
            var f = e[c].split("\x3d");
            "_openstat" === f[0] && (d = f[1])
          }
        }
        var g =
          b.split("?");
        for (c = 0; c < g.length; c++) {
          var h = g[c].split("\x26");
          for (e = 0; e < h.length; e++) f = h[e].split("\x3d"), "_openstat" === f[0] && (d = f[1])
        }
        d && (d = -1 < d.indexOf(";") ? k.safeDecodeURIComponent(d) : Ia.decode(W.decode(d.replace(/[-*_]/g, function (a) {
          return {
            "*": "+",
            "-": "/",
            _: "\x3d"
          }[a] || a
        }))));
        return d && (c = d.split(";"), 4 == c.length) ? {
          service: c[0],
          campaign: c[1],
          ad: c[2],
          source: c[3]
        } : null
      }

      function p(a, b) {
        return F(function () {
          if (!f.isDestructing()) return a.apply(this, arguments)
        }, b || "")
      }

      function C() {
        var g = !1,
          n = !1;
        Da ||
          (n = T.initCookie(wa), Ea.userInfo = T._userID, Ab.init(D));
        Ea.initPU(qa, D);
        z.isAndroidWebView() || Ea.initPP(D);
        oa && nc.init(oa, O, a);
        D.get("pri") != w || z.isAndroidWebView() || (D.setSafe("pri", null), z.isPrivate(F(function (a) {
          D.set("pri", a)
        }, "privCb")));
        Gb.subscribe(V);
        if (D.get("hitParam")[V]) {
          if (1 != c || D.get("counters")[V]) return !1;
          g = !0
        }
        D.get("counters")[V] = f;
        D.get("hitParam")[V] = 1;
        k.async(function () {
          Ea.initFip(D)
        }, this, "initFip");
        f._webvisor = G.webvisor || !1;
        f._directCampaign = G.directCampaign;
        G.trackHash && J(!0);
        if (!g) {
          pa = new Fb({
            protocol: "https:",
            globalConfig: D,
            counterId: a,
            counterType: c,
            hid: O,
            tz: ib,
            ts: jb,
            url: L.href,
            enabled: f._webvisor,
            trustedDomains: G.trustedDomains,
            childIframe: G.childIframe
          });
          f.replacePhones();
          g = new Kb({
            globalConfig: D
          });
          var p = function (e) {
            var g = new rb({
                protocol: "https:",
                counterType: c,
                counterId: a,
                trackHash: za,
                hitId: O,
                webvisor: f._webvisor,
                counter: f,
                globalConfig: D,
                counterNum: aa
              }),
              h = {
                ut: ma,
                re: n,
                he: ~~G.httpError,
                ad: 1 == c && m.Ya && m.Ya.Direct,
                pv: !0,
                cpf: z.isChromePdf(),
                saveRef: !0
              };
            sb = +new Date;
            g.sendHit({
              url: P,
              referrer: ha,
              title: v.getDocumentTitle(),
              vParams: b,
              userParams: Ca,
              nohit: d,
              experiments: Ga,
              modes: h,
              visitColor: pa.getVc(),
              hasPrerender: ta,
              ts: jb,
              tz: ib,
              callback: function (g, h) {
                var k;
                eb || (eb = +new Date);
                d || (ta = !1);
                g = g || {};
                (k = "0" !== g.pcs) || Ea.initZZ();
                g.eu !== w && D.set("isEU", g.eu);
                T.retransmit(D);
                !k && .01 > Math.random() && ic(function (a) {
                  (new Ja({
                    forceHost: W.decode("bGFsYWJsYWguY29t"),
                    noRedir: !0,
                    protocol: "https:",
                    counterType: c,
                    globalConfig: D,
                    counterId: 44743195,
                    hitId: O,
                    counter: f,
                    counterNum: aa
                  })).sendParams({
                    __ym: {
                      monitor: a
                    }
                  })
                });
                Qa.init(h);
                qc.match();
                lc.sync(a, c, k, D);
                d || U.log("PageView. Counter ", a, ". URL: ", L.href, ". Referrer: " + t.referrer, ". Params: ", b);
                g.webvisor && (g.webvisor.isEU = D.get("isEU"));
                f.isDestructing() || (pa.start(g.webvisor, g.publisher), l(g.mp2, a, f), y.on(m, "load", f.replacePhones, f));
                f._inited = !0;
                e && e()
              }
            })
          };
          g.sync(p)
        }
        h(!1);
        y.on(t, "click", e, null, {
          name: "extLinkClick"
        });
        0 != k.keys(G).length && (fa && fa.initUserLayer(), G.enableAll ? (h(!0), B(!0), A()) : (G.clickmap && B(G.clickmap), G.trackLinks && h(G.trackLinks), G.accurateTrackBounce &&
          A(G.accurateTrackBounce)), G.triggerEvent && k.async(function () {
          S.dispatchCustomEvent("yacounter" + a + "inited")
        }, this, "yacounterInit"))
      }

      function q(a) {
        var b = new ua({
          frameConnector: qa,
          globalConfig: D,
          initCounter: C,
          disable: G.yaDisableGDPR
        });
        ta = a;
        b.handle.apply(b, arguments)
      }

      function h(a) {
        var b = {};
        switch (typeof a) {
          case "string":
            b.on = !0;
            break;
          case "object":
            b.on = !0;
            break;
          case "boolean":
            b.on = a;
            break;
          default:
            return
        }
        f._trackLinks = b
      }

      function e(a) {
        if (f._trackLinks && f._trackLinks.on) {
          a = z.findTarget(a);
          var b = z.getLinkComponents(a),
            c = b.href,
            d = D.get("pai", k.noop)();
          if (c && !v.classNameExists(a, "ym-disable-tracklink")) {
            var e = b.protocol + "//" + b.hostname + b.pathname;
            d = {
              pai: d && d + "-" + O,
              ln: !0
            };
            var g = vb(a);
            g = c === g ? "" : g;
            if (v.classNameExists(a, "ym-external-link")) Q.sendClickLink({
              url: c,
              title: g,
              modes: d
            }, P);
            else {
              var h = G.url ? k.parseUrl(P).hostname : M().hostname;
              d.dl = Ob.test(e) || Ob.test(c) || wb(c, ya) || wb(e, ya);
              b = b.hostname;
              (h ? h.replace(/^www\./, "") : "").toLowerCase() == (b ? b.replace(/^www\./, "") : "").toLowerCase() ? d.dl ? (d.ln = !1, Q.sendClickLink({
                url: c,
                title: g,
                modes: d
              }, P)) : (g = vb(a), va.set("pai", d.pai), g && g !== c && va.set("il", k.trim(g, Ib))) : c && -1 !== c.search(/^ *(data|javascript):/i) || (d.ut = mb, Q.sendClickLink({
                url: c,
                title: g,
                modes: d
              }, P))
            }
          }
        }
      }

      function B(b) {
        "undefined" === typeof b && (b = !0);
        !0 === b && (b = {});
        f._clickmap && f._clickmap.destroy();
        b && (f._clickmap = new pc({
          globalConfig: D,
          filter: b.filter,
          ignoreTags: b.ignoreTags,
          quota: b.quota,
          isTrackHash: b.isTrackHash,
          protocol: "https:",
          counterId: a,
          counterType: c,
          startTime: sc
        }))
      }

      function E(a, b) {
        function c() {
          if (!q) {
            p && k.clearTimeout(p);
            var c = h ? l : l + +new Date - n;
            c = b - c;
            0 > c && (c = 0);
            p = k.setTimeout(function () {
              q = !0;
              e(!1);
              a()
            }, c, "trackUserTime")
          }
        }

        function d() {
          g || (f = !0, h = !1, g = !0, c())
        }

        function e(a) {
          var b;
          for (b = 0; b < r.length; b += 3)
            if (a) y.on(r[b], r[b + 1], r[b + 2], {
              name: "tabTrack"
            });
            else y.un(r[b], r[b + 1], r[b + 2])
        }
        var f = !1,
          g = !1,
          h = !0,
          l = 0,
          n = +new Date,
          p = null,
          q = !1;
        if (z.isIE()) k.setTimeout(a, b, "trackUserTime");
        else {
          var r = [m, "blur", function () {
              h = f = g = !0;
              l += +new Date - n;
              n = +new Date;
              c()
            }, m, "focus", function () {
              f || g || (l = 0);
              n = +new Date;
              f = g = !0;
              h = !1;
              c()
            }, t, "click",
            d, t, "mousemove", d, t, "keydown", d, t, "scroll", d
          ];
          e(!0);
          c()
        }
      }

      function A(b) {
        var c = G.referrer ? ha : t.referrer,
          d = G.url ? P : M().href;
        "number" !== typeof b && (b = 15E3);
        if (!f._isAccurateTrackBounce) {
          f._isAccurateTrackBounce = !0;
          var e = new ia({
            counterId: a
          });
          var g = e.get("lastHit");
          e.set("lastHit", x.getMs());
          ((e = e.get("lastHit")) && (!g || g < e - 18E5) || !Tb(c, d) || .1 > Math.random()) && E(function () {
            f.notBounce();
            X.init(.002, sa)
          }, b)
        }
      }

      function H(a) {
        var b = function () {
          var a = M().hash.split("#")[1];
          if ("undefined" == typeof a) return !1;
          var b =
            a.indexOf("?");
          0 < b && (a = a.substring(0, b));
          return a
        };
        var c = b();
        (function Oa() {
          var d = b();
          d !== c && (a(), c = d);
          Aa = k.setTimeout(Oa, 200, "trackHash")
        })()
      }

      function J(a) {
        if (!1 === a) za && ("onhashchange" in m ? y.un(m, "hashchange", K) : k.clearTimeout(Aa), za = !1);
        else if (a = K, !za) {
          if ("onhashchange" in m) y.on(m, "hashchange", a);
          else H(a);
          za = !0
        }
        Q.setTrackHash(za);
        f._trackHash = za
      }

      function K() {
        var a = {
          ut: ma,
          ad: 1 == c && m.Ya && m.Ya.Direct,
          wh: !0,
          saveRef: !0,
          pv: !0
        };
        da = Za.lastReferrer = ra;
        Q.sendAjaxHit({
          url: G.url ? P : M().href,
          title: v.getDocumentTitle(),
          referrer: da,
          modes: a
        });
        ra = M().href
      }

      function ea(a, b, c) {
        a = R.parseValidate(a, b);
        b = [];
        a && (b.push(a), c = c || {}, k.isFunction(c.callback) && (b.push(c.callback), c.ctx && b.push(c.ctx)));
        b.length && f.params.apply(f, b)
      }
      var ma = "",
        G = {},
        da = "",
        ra = Za.lastReferrer = L.href,
        sa = .002,
        ta = !1,
        pa;
      D.setSafe("counter", f);
      Pa && F(function () {
        throw Pa.error;
      }, "include." + Pa.scope)();
      if ("object" === typeof a) {
        G = a;
        d = a.defer;
        ma = a.ut;
        var wa = a.ldc || "uid";
        c = a.type;
        b = a.params;
        var Ca = a.userParams;
        var oa = a.tns;
        var Ga = G.experiments;
        var Da = G.nck;
        var P =
          a.url;
        var ha = a.referrer;
        a = a.id
      }
      if (!m["disableYaCounter" + a]) {
        Ba.parse = function (a, b) {
          var c = {},
            d;
          a = a && a.replace(/^\?/, "") || "";
          if (a.length) {
            var e = a.split("\x26");
            for (d = 0; d < e.length; d++)
              if (e[d]) {
                var f = e[d].split("\x3d");
                if (f[0]) {
                  var g = k.safeDecodeURIComponent(f[0]);
                  f = k.safeDecodeURIComponent((f[1] || "").replace(/\+/g, "%20"));
                  b && g in c ? k.isArray(c[g]) ? c[g].push(f) : c[g] = [c[g], f] : c[g] = f
                }
              }
          }
          return c
        };
        var ja = [];
        P = P ? P : M().href;
        ha = ha ? ha : t.referrer;
        a = a || 0;
        /^\d+$/.test(a) || (a = 0);
        c = c || 0;
        var V = a + ":" + c;
        if (D.get("counters")[V]) return U.log("Duplicate counter " +
          V + " initialization"), D.get("counters")[V];
        var O = D.get("hitId");
        var qa = new Nb({
          counterId: a,
          hid: O
        });
        D.set("counterNum", D.get("counterNum") + 1);
        var aa = D.get("counterNum");
        var Q = new Ja({
          protocol: "https:",
          counterType: c,
          counterId: a,
          hitId: O,
          counter: f,
          globalConfig: D,
          counterNum: aa
        });
        var X = {
          init: function (a, b) {
            if (m.performance && "function" === typeof performance.getEntriesByType) {
              a === w && (a = 1);
              b === w && (b = 1);
              var c = Math.random() > a,
                d = Math.random() > b;
              if (!c || !d) {
                var e = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                  },
                  f = performance.getEntriesByType("resource"),
                  g = {},
                  h = {},
                  l = {
                    counterId: 51533966
                  },
                  n = {},
                  p;
                for (p = 0; p < f.length; p++) {
                  var q = f[p];
                  var r = q.name.replace(/^https?:\/\//, "").split("?")[0];
                  var t = k.fnv32a(r);
                  "script" !== q.initiatorType || c || (h[r] = {
                    dns: Math.round(q.domainLookupEnd - q.domainLookupStart),
                    tcp: Math.round(q.connectEnd - q.connectStart),
                    duration: Math.round(q.duration),
                    response: Math.round(q.responseEnd - q.requestStart),
                    name: q.name,
                    decodedBodySize: q.decodedBodySize
                  });
                  !e[t] || g[r] || d || (g[r] = {
                    dns: Math.round(q.domainLookupEnd - q.domainLookupStart),
                    tcp: Math.round(q.connectEnd - q.connectStart),
                    duration: Math.round(q.duration),
                    response: Math.round(q.responseEnd - q.requestStart),
                    pages: L.href
                  })
                }
                k.keys(g).length && (n.timings8 = g);
                k.keys(h).length && (n.scripts = h);
                k.keys(n).length && (new Ra(l)).logParams(n)
              }
            }
          }
        };
        24226447 == a && (sa = 1);
        f.replacePhones = p(function () {
          var b, c;
          try {
            (b = (new N({
              counterId: a
            })).read("mp2_substs")) &&
            (c = ba.parse(b)) && n(c, !0)
          } catch (ka) {}
          return f
        }, "counter.replacePhones");
        f.reachGoal = p(function (b, c, d, e) {
          2 <= arguments.length && "function" === typeof c && (e = d, d = c, c = w);
          U.log("Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ", c);
          Q.sendGoal(b, {
            url: G.url ? P : M().href,
            vParams: c,
            callback: d,
            ctx: e
          });
          return f
        }, "counter.reachGoal");
        f.trackLinks = p(function (a) {
          h(a);
          return f
        }, "counter.trackLinks");
        var va = new ia({
          counterId: a
        });
        f.hit = p(function (b, c, d, e, g, h) {
          (b = b && k.isFunction(b.toString) ? b.toString() : !1) ? (k.isObject(c) &&
            (d = c.referer, e = c.params, g = c.callback, h = c.ctx, c = c.title), P = b, U.log("PageView. Counter " + a, ". URL: " + b, ". Referrer: " + d, ". Params: ", e), Q.sendHit({
              url: b,
              title: c,
              hasPrerender: ta,
              referrer: d,
              vParams: e,
              callback: g,
              ctx: h
            }), ta = !1) : k.warning("Empty hit url");
          return f
        }, "counter.hit");
        f.params = p(function (b) {
          var c = arguments.length,
            d = c,
            e = [].slice.call(arguments, 0);
          if (b) {
            if (1 < arguments.length) {
              if (k.isFunction(arguments[c - 1])) {
                var g = arguments[c - 1];
                d = c - 1
              } else if (k.isFunction(arguments[c - 2])) {
                g = arguments[c - 2];
                var h =
                  arguments[c - 1];
                d = c - 2
              }
              e = [].slice.call(e, 0, d);
              1 < e.length && (e = [k.array2Props(e)])
            }
            c = -1 !== k.arrayIndexOf(k.keys(e[0]), "__ymu");
            (d = -1 !== k.arrayIndexOf(k.keys(e[0]), "__ym") && e[0].__ym.user_id) ? U.log('Set user id "' + e[0].__ym.user_id + '"'): U.log((c ? "User p" : "P") + "arams. Counter " + a + ". Params: ", e[0]);
            Q.sendParams(e[0], g, h, G.url ? P : M().href)
          } else k.warning("Wrong params");
          return f
        }, "counter.params");
        qa.addHandler("pluginInfo", function () {
          return G
        }, this);
        qa.addHandler("parentConnect", function (a, b) {
          Q.paramsQueue.push({
            __ym: {
              parentIframe: {
                counterId: b.counterId,
                hid: b.hid
              }
            }
          })
        }, this);
        f.file = p(function (a, b) {
          a ? (b = b || {}, Q.sendFileUpload({
            url: a,
            title: b.title,
            vParams: b.params,
            callback: b.callback,
            ctx: b.ctx,
            referrer: G.url ? P : M().href
          })) : k.warning("Empty file url");
          return f
        }, "counter.file");
        f.extLink = p(function (a, b) {
          a ? (b = b || {}, Q.sendExtLink({
            url: a,
            title: b.title,
            vParams: b.params,
            callback: b.callback,
            ctx: b.ctx,
            referrer: G.url ? P : M().href
          }, P)) : k.warning("Empty link");
          return f
        }, "counter.extLink");
        f.notBounce = p(function (a) {
          var b = 0;
          a = a || {};
          sb && eb && (b = eb - sb);
          Q.sendNotBounce(b, {
            url: G.url ? P : M().href,
            callback: a.callback,
            ctx: a.ctx
          });
          return f
        }, "counter.notBounce");
        var ya = [];
        f.addFileExtension = p(function (a) {
          if (!a) return k.warning("Empty extension"), f;
          "string" === typeof a ? ya.push(a) : ya = ya.concat(a);
          return f
        });
        f.clickmap = function (a) {
          B(a);
          return f
        };
        f.accurateTrackBounce = p(function (a) {
          A(a);
          return f
        });
        var Aa = null;
        var za = !1;
        f.trackHash = p(function (a) {
          J(a);
          return f
        });
        var R = {
          requiredEcommerceFields: ["currency", "goods"],
          parseValidate: function (a, b) {
            var c = this.validate(a, b),
              d;
            if (!c.isValid) return console &&
              console.log(c.message), !1;
            c = {};
            c[a] = {};
            b.currency && (c.currencyCode = b.currency);
            b.goods && (c[a].products = b.goods);
            for (d in b) b.hasOwnProperty(d) && -1 === k.arrayIndexOf(this.requiredEcommerceFields, d) && (c[a].actionField || (c[a].actionField = {}), c[a].actionField[d] = b[d]);
            return {
              __ym: {
                ecommerce: [c]
              }
            }
          },
          validate: function (a, b) {
            var c = !1,
              d = "";
            if (k.isObject(b)) switch (a) {
              case "detail":
              case "add":
              case "remove":
                k.isArray(b.goods) && b.goods.length ? (c = k.arrayEvery(b.goods, function (a) {
                  return k.isObject(a) && (k.isString(a.id) ||
                    k.isNumber(a.id) || k.isString(a.name) || k.isString(a.name))
                })) || (d = "All items in 'goods' should be objects and contain 'id' or 'name' field") : d = "Ecommerce data should contain 'goods' non-empty array";
                break;
              case "purchase":
                k.isNumber(b.id) || k.isString(b.id) ? c = !0 : d = "Purchase object should contain string or number 'id' field"
            } else d = "Ecommerce data should be an object";
            return {
              isValid: c,
              message: d
            }
          }
        };
        f.ecommerceDetail = p(function (a, b) {
          ea("detail", a, b);
          return f
        }, "ecommerce.detail");
        f.ecommerceAdd = p(function (a,
          b) {
          ea("add", a, b);
          return f
        }, "ecommerce.add");
        f.ecommerceRemove = p(function (a, b) {
          ea("remove", a, b);
          return f
        }, "ecommerce.remove");
        f.ecommercePurchase = p(function (a, b) {
          ea("purchase", a, b);
          return f
        }, "ecommerce.purchase");
        f.userParams = p(function (a, b, c) {
          k.isObject(a) ? f.params({
            __ymu: a
          }, b || function () {}, c) : k.warning("Wrong user params");
          return f
        }, "uparams");
        f.experiments = p(function (a, b, c) {
          Q.sendExperiments({
            callback: b,
            ctx: c,
            experiments: a
          });
          return f
        }, "exps");
        f.id = f.setUserID = p(function (a, b, c) {
          k.isString(a) || k.isNumber(a) ?
            f.params({
              __ym: {
                user_id: a
              }
            }, b || function () {}, c) : k.warning("Incorrect user ID");
          return f
        }, "id");
        var Ma = new N;
        f.getClientID = p(function (a) {
          var b = Ma.read(wa);
          a && k.isFunction(a) && a(b);
          return b
        }, "guid");
        f.enableAll = function () {
          h(!0);
          B(!0);
          A();
          return f
        };
        f.uploadPage = function () {};
        f.destruct = p(function () {
          f._isDestructing = !0;
          y.un(t, "click", e, null, {
            name: "extLinkClick"
          });
          y.un(m, "load", f.replacePhones, f);
          J(!1);
          pa && pa.stop();
          D.set("stopRecoder", w);
          D.set("counter", w);
          fa && fa.destruct && fa.destruct();
          B(!1);
          try {
            delete m["yaCounter" +
              a], delete D.get("counters")[V], delete D.get("hitParam")[V]
          } catch (na) {}
        });
        f.isDestructing = function () {
          return !!f._isDestructing
        };
        rc.init(Q);
        f._performanceTiming = xb;
        if (a) {
          var fa = new Ka({
            counter: f,
            counterId: a,
            globalConfig: D,
            frameConnector: qa,
            prefsEcommerce: G.ecommerce,
            prefsUseDataLayer: G.useDataLayer
          });
          if ("prerender" === t.webkitVisibilityState || "prerender" === t.visibilityState) {
            Q.sendPrerenderHit({
              url: P,
              vParams: b,
              title: v.getDocumentTitle(),
              referrer: t.referrer
            });
            var Z = function () {
              "prerender" !== t.webkitVisibilityState &&
                "prerender" !== t.visibilityState && (y.un(t, "webkitvisibilitychange,visibilitychange", Z), q(!0))
            };
            y.on(t, "webkitvisibilitychange,visibilitychange", Z)
          } else q(!1)
        }
      }
    }, "init")()
  };
  Gb.init(ma, D);
  new Mb({
    globalConfig: D
  });
  m.Ya[ma].counters = function () {
    var a = [];
    k.forEachKey(D.get("counters"), function (b, c) {
      var d = b.split(":");
      a.push({
        id: +d[0],
        type: +d[1],
        accurateTrackBounce: c._isAccurateTrackBounce,
        clickmap: c._clickmap && c._clickmap._start,
        oldCode: !!m.ya_cid,
        trackHash: !!c._trackHash,
        trackLinks: c._trackLinks && c._trackLinks.on,
        webvisor: !!c._webvisor
      })
    });
    return a
  };
  D.setSafe("getCounters", function () {
    var a = [];
    k.forEachKey(D.get("counters"), function (b, c) {
      var d = b.split(":");
      a.push({
        id: +d[0],
        type: +d[1],
        accurateTrackBounce: c._isAccurateTrackBounce,
        clickmap: c._clickmap && c._clickmap._start,
        oldCode: !!m.ya_cid,
        trackHash: !!c._trackHash,
        trackLinks: c._trackLinks && c._trackLinks.on,
        webvisor: !!c._webvisor
      })
    });
    return a
  });
  m.ya_cid && m.Ya.Metrika && new m.Ya.Metrika(m.ya_cid, m.ya_params, m.ya_class);
  m.ya_cid && !m.ya_hit && (m.ya_hit = function (a, b) {
    m.Ya._metrika.counter &&
      m.Ya._metrika.counter.reachGoal(a, b)
  });
  (function () {
    function a(a) {
      try {
        delete m[a]
      } catch (r) {
        m[a] = w
      }
    }
    var b = "yandex_metrika_callback",
      c = "yandex_metrika_callbacks";
    b = "yandex_metrika_callback2";
    c = "yandex_metrika_callbacks2";
    var d = m[b],
      f = m[c],
      k;
    "function" == typeof d && d();
    if ("object" == typeof f) {
      var g = f.length;
      for (d = 0; d < g; d++)
        if (k = f[d]) f[d] = null, k()
    }
    a(b);
    a(c)
  })();
  m.Ya[ma].informer = function (a) {
    var b = !!m.Ya[ma]._informer;
    Ya[ma]._informer = a;
    Ya[ma]._informer.domain = "metrika-informer.com";
    b || v.loadScript({
      src: "https://metrika-informer.com/metrika/informer.js"
    })
  };
  y.on(t, "click", F(function (a) {
    var b = S.getTarget(a);
    if (b && ("ym-advanced-informer" === b.className || b.classList && b.classList.contains("ym-advanced-informer"))) {
      var c = b.getAttribute("data-lang");
      var d = b.getAttribute("data-cid");
      m.Ya[ma].informer({
        i: b,
        id: +d,
        lang: c
      });
      S.prevent(a)
    }
  }, "adv-inf"), null, {
    passive: !1
  })
})(this, this.document);
