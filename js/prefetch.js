!(function (e, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define([], r)
    : "object" == typeof exports
    ? (exports.prefetchImages = r())
    : (e.prefetchImages = r());
})(this, function () {
  return (function (e) {
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    var t = {};
    return (
      (r.m = e),
      (r.c = t),
      (r.i = function (e) {
        return e;
      }),
      (r.d = function (e, t, n) {
        r.o(e, t) ||
          Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }),
      (r.p = ""),
      r((r.s = 1))
    );
  })([
    function (e, r, t) {
      "use strict";
      var n,
        o,
        i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
      !(function (i, c, u) {
        void 0 !== e && e.exports
          ? (e.exports = u())
          : ((n = u),
            void 0 !== (o = "function" == typeof n ? n.call(r, t, r, e) : n) &&
              (e.exports = o));
      })(0, 0, function () {
        function e(e, r) {
          return e.substr(0, r.length) === r;
        }
        function r(r, t) {
          return (
            e(r, "file://")
              ? (r = r.replace(/(\/{0,3})\/*/g, "$1"))
              : ((r = r.replace(/:\//g, "://")),
                (r = r.replace(/([^:\s%3A])\/+/g, "$1/"))),
            (r = r.replace(/\/(\?|&|#[^!])/g, "$1")),
            (r = r.replace(/(\?.+)\?/g, "$1&"))
          );
        }
        return function () {
          var e = arguments,
            t = {};
          return (
            "object" === i(arguments[0]) &&
              ((e = arguments[0]), (t = arguments[1] || {})),
            r([].slice.call(e, 0).join("/"), t)
          );
        };
      });
    },
    function (e, r, t) {
      "use strict";
      function n(e) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e)
          return (
            console.error(
              "[prefetch-image]: images not provided, pls pass images in Array or object!"
            ),
            Promise.reject({})
          );
        if (Array.isArray(e)) return o(e, r);
        for (var t = [], n = Object.keys(e), i = 0; i < n.length; i++) {
          var c = n[i];
          t.push(o(a(c, e[c]), r, c));
        }
        return Promise.all(t)
          .then(function (e) {
            return (
              r.debug &&
                console.info(
                  "[prefetch-image]: Images loaded for all domains!"
                ),
              Promise.resolve(e)
            );
          })
          .catch(function (e) {
            return console.error("[prefetch-image]: ", e), Promise.reject(null);
          });
      }
      function o(e, r, t) {
        for (
          var n = r.concurrency || 6,
            o = {
              start: 0,
              end: 0,
              concurrency: n,
              iterations: Math.ceil(e.length / n),
              imagesContainer: [],
            },
            c = [],
            a = 0;
          a < o.iterations;
          a++
        )
          c.push(i(e, o));
        return Promise.all(c)
          .then(function () {
            return (
              u(o.imagesContainer),
              r.debug &&
                console.info(
                  "[prefetch-image]: Images loaded for domain [" +
                    (t || location.origin) +
                    "], length [" +
                    e.length +
                    "]"
                ),
              Promise.resolve(o.imagesContainer)
            );
          })
          .catch(function (e) {
            return (
              console.error("[prefetch-image]: ", e),
              Promise.reject(o.imagesContainer)
            );
          });
      }
      function i(e, r) {
        var t = [],
          n = e.length,
          o = r;
        if (o.start >= n) return Promise.resolve([]);
        for (var i = o.start, u = i + o.concurrency, a = i; a < u; a++) {
          var s = e[a];
          s && t.push(c(s, o.imagesContainer));
        }
        return (o.start = u), (o.end = u + o.concurrency), Promise.all(t);
      }
      function c(e, r) {
        return new Promise(function (t) {
          var n = new Image();
          (n.onload = function () {
            t(e);
          }),
            (n.onerror = function () {
              console.error('[prefetch-image]: "' + e + '" failed'), t(e);
            }),
            (n.src = e),
            r.push(n);
        });
      }
      function u(e) {
        var r = document.querySelector("body"),
          t = document.createElement("div");
        t.setAttribute("class", "prefetch-image-wrapper_" + Math.random()),
          (t.style.width = 0),
          (t.style.height = 0),
          (t.style.overflow = "hidden"),
          (t.style.display = "none"),
          e.forEach(function (e) {
            t.appendChild(e);
          }),
          r.appendChild(t);
      }
      function a(e, r) {
        var t = [];
        return (
          r.forEach(function (r) {
            t.push((0, f.default)(e, r));
          }),
          t
        );
      }
      /*!
       * @license MIT
       * Prefetch all images for your web app, especially for mobile/h5 promotion pages.
       * https://github.com/JasonBoy/prefetch-image
       */
      Object.defineProperty(r, "__esModule", { value: !0 });
      var s = t(0),
        f = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(s);
      r.default = n;
    },
  ]);
});
//# sourceMappingURL=prefetch-image.min.js.map
