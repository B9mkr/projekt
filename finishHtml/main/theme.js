webpackJsonp([21], {
  1: function (e, t, r) {
    e.exports = r("zyE5")
  },
  fK0A: function (e, t, r) {
    "use strict";

    function n(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        var r = [],
          n = !0,
          a = !1,
          o = void 0;
        try {
          for (var u, i = e[Symbol.iterator](); !(n = (u = i.next()).done) && (r.push(u.value), !t || r.length !== t); n = !0);
        } catch (e) {
          a = !0, o = e
        } finally {
          try {
            n || null == i.return || i.return()
          } finally {
            if (a) throw o
          }
        }
        return r
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }()
    }
    r.d(t, "d", function () {
      return a
    }), r.d(t, "a", function () {
      return o
    }), t.c = u, t.b = function (e, t) {
      if (u(e) && u(t)) {
        var r = new Date,
          n = i(e),
          a = i(t);
        return n > r && n.setDate(n.getDate() - 1), n > a && a.setDate(a.getDate() + 1), r >= n && r <= a
      }
      return !1
    }, t.e = function () {
      var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        t = document.documentElement,
        r = document.head.querySelector('[name="theme-color"]');
      e ? (t.setAttribute("data-mode", "dark"), r.setAttribute("content", "#242424")) : (t.removeAttribute("data-mode"), r.setAttribute("content", window._SITE_COLOR_ || "#e48f13"))
    };
    var a = {
        theme: "dark"
      },
      o = {
        enabled: !1,
        autoEnable: !1,
        time: {
          from: "00:00",
          to: "00:00"
        }
      };

    function u(e) {
      return /\d{2}:\d{2}/.test(e)
    }

    function i(e) {
      var t = n(e.split(":"), 2),
        r = t[0],
        a = t[1],
        o = new Date;
      return o.setHours(r), o.setMinutes(a), o
    }
  },
  zyE5: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r("fK0A"),
      a = JSON.parse(localStorage.getItem("dark-theme")) || n.a,
      o = JSON.parse(localStorage.getItem("reader")) || n.d,
      u = document.documentElement.hasAttribute("data-reader"),
      i = a.enabled;
    if (u && "global" !== o.theme) i = "dark" === o.theme;
    else if (i && a.autoEnable) {
      var c = a.time,
        d = c.from,
        l = c.to;
      i = Object(n.b)(d, l)
    }
    Object(n.e)(i)
  }
}, [1]);
