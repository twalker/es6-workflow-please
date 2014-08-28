"format register";

System.register("app/hello-es6", [], function($__export) {
  "use strict";
  var __moduleName = "app/hello-es6";
  var Greeter;
  return {
    setters: [],
    execute: function() {
      Greeter = $__export("Greeter", (function() {
        var Greeter = function Greeter() {
          var name = arguments[0] !== (void 0) ? arguments[0] : 'es6';
          this.name = name;
        };
        return ($traceurRuntime.createClass)(Greeter, {say: function() {
            var msg = arguments[0] !== (void 0) ? arguments[0] : 'hello';
            return [this.name, ' says:', msg].join(' ');
          }}, {});
      }()));
    }
  };
});

(function() {
function define(){};  define.amd = {};
  System.register("app/hello-amd", [], false, function(__require, __exports, __module) {
    return (function() {
      return {say: function(msg) {
          return 'amd says: ' + msg;
        }};
    }).call(this);
  });
  })();
(function() {
function define(){};  define.amd = {};
  !function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
      if (!a.document)
        throw new Error("jQuery requires a window with a document");
      return b(a);
    } : b(a);
  }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.1",
        n = function(a, b) {
          return new n.fn.init(a, b);
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
          return b.toUpperCase();
        };
    n.fn = n.prototype = {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function() {
        return d.call(this);
      },
      get: function(a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
      },
      pushStack: function(a) {
        var b = n.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b;
      },
      each: function(a, b) {
        return n.each(this, a, b);
      },
      map: function(a) {
        return this.pushStack(n.map(this, function(b, c) {
          return a.call(b, c, b);
        }));
      },
      slice: function() {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      eq: function(a) {
        var b = this.length,
            c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice
    }, n.extend = n.fn.extend = function() {
      var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
      for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
        if (null != (a = arguments[h]))
          for (b in a)
            c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      return g;
    }, n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(a) {
        throw new Error(a);
      },
      noop: function() {},
      isFunction: function(a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function(a) {
        return null != a && a === a.window;
      },
      isNumeric: function(a) {
        return !n.isArray(a) && a - parseFloat(a) >= 0;
      },
      isPlainObject: function(a) {
        return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
      },
      isEmptyObject: function(a) {
        var b;
        for (b in a)
          return !1;
        return !0;
      },
      type: function(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
      },
      globalEval: function(a) {
        var b,
            c = eval;
        a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
      },
      camelCase: function(a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function(a, b, c) {
        var d,
            e = 0,
            f = a.length,
            g = s(a);
        if (c) {
          if (g) {
            for (; f > e; e++)
              if (d = b.apply(a[e], c), d === !1)
                break;
          } else
            for (e in a)
              if (d = b.apply(a[e], c), d === !1)
                break;
        } else if (g) {
          for (; f > e; e++)
            if (d = b.call(a[e], e, a[e]), d === !1)
              break;
        } else
          for (e in a)
            if (d = b.call(a[e], e, a[e]), d === !1)
              break;
        return a;
      },
      trim: function(a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function(a, b) {
        var c = b || [];
        return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
      },
      inArray: function(a, b, c) {
        return null == b ? -1 : g.call(b, a, c);
      },
      merge: function(a, b) {
        for (var c = +b.length,
            d = 0,
            e = a.length; c > d; d++)
          a[e++] = b[d];
        return a.length = e, a;
      },
      grep: function(a, b, c) {
        for (var d,
            e = [],
            f = 0,
            g = a.length,
            h = !c; g > f; f++)
          d = !b(a[f], f), d !== h && e.push(a[f]);
        return e;
      },
      map: function(a, b, c) {
        var d,
            f = 0,
            g = a.length,
            h = s(a),
            i = [];
        if (h)
          for (; g > f; f++)
            d = b(a[f], f, c), null != d && i.push(d);
        else
          for (f in a)
            d = b(a[f], f, c), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function(a, b) {
        var c,
            e,
            f;
        return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
          return a.apply(b || this, e.concat(d.call(arguments)));
        }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
      },
      now: Date.now,
      support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
      h["[object " + b + "]"] = b.toLowerCase();
    });
    function s(a) {
      var b = a.length,
          c = n.type(a);
      return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    var t = function(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u = "sizzle" + -new Date,
          v = a.document,
          w = 0,
          x = 0,
          y = gb(),
          z = gb(),
          A = gb(),
          B = function(a, b) {
            return a === b && (l = !0), 0;
          },
          C = "undefined",
          D = 1 << 31,
          E = {}.hasOwnProperty,
          F = [],
          G = F.pop,
          H = F.push,
          I = F.push,
          J = F.slice,
          K = F.indexOf || function(a) {
            for (var b = 0,
                c = this.length; c > b; b++)
              if (this[b] === a)
                return b;
            return -1;
          },
          L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]",
          N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          O = N.replace("w", "w#"),
          P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
          Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
          R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
          S = new RegExp("^" + M + "*," + M + "*"),
          T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
          V = new RegExp(Q),
          W = new RegExp("^" + O + "$"),
          X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
          },
          Y = /^(?:input|select|textarea|button)$/i,
          Z = /^h\d$/i,
          $ = /^[^{]+\{\s*\[native \w/,
          _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ab = /[+~]/,
          bb = /'|\\/g,
          cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
          db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
          };
      try {
        I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
      } catch (eb) {
        I = {apply: F.length ? function(a, b) {
            H.apply(a, J.call(b));
          } : function(a, b) {
            var c = a.length,
                d = 0;
            while (a[c++] = b[d++])
              ;
            a.length = c - 1;
          }};
      }
      function fb(a, b, d, e) {
        var f,
            h,
            j,
            k,
            l,
            o,
            r,
            s,
            w,
            x;
        if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)
          return d;
        if (1 !== (k = b.nodeType) && 9 !== k)
          return [];
        if (p && !e) {
          if (f = _.exec(a))
            if (j = f[1]) {
              if (9 === k) {
                if (h = b.getElementById(j), !h || !h.parentNode)
                  return d;
                if (h.id === j)
                  return d.push(h), d;
              } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                return d.push(h), d;
            } else {
              if (f[2])
                return I.apply(d, b.getElementsByTagName(a)), d;
              if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                return I.apply(d, b.getElementsByClassName(j)), d;
            }
          if (c.qsa && (!q || !q.test(a))) {
            if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
              o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
              while (l--)
                o[l] = s + qb(o[l]);
              w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",");
            }
            if (x)
              try {
                return I.apply(d, w.querySelectorAll(x)), d;
              } catch (y) {} finally {
                r || b.removeAttribute("id");
              }
          }
        }
        return i(a.replace(R, "$1"), b, d, e);
      }
      function gb() {
        var a = [];
        function b(c, e) {
          return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
        }
        return b;
      }
      function hb(a) {
        return a[u] = !0, a;
      }
      function ib(a) {
        var b = n.createElement("div");
        try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), b = null;
        }
      }
      function jb(a, b) {
        var c = a.split("|"),
            e = a.length;
        while (e--)
          d.attrHandle[c[e]] = b;
      }
      function kb(a, b) {
        var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
        if (d)
          return d;
        if (c)
          while (c = c.nextSibling)
            if (c === b)
              return -1;
        return a ? 1 : -1;
      }
      function lb(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a;
        };
      }
      function mb(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      }
      function nb(a) {
        return hb(function(b) {
          return b = +b, hb(function(c, d) {
            var e,
                f = a([], c.length, b),
                g = f.length;
            while (g--)
              c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          });
        });
      }
      function ob(a) {
        return a && typeof a.getElementsByTagName !== C && a;
      }
      c = fb.support = {}, f = fb.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1;
      }, m = fb.setDocument = function(a) {
        var b,
            e = a ? a.ownerDocument || a : v,
            g = e.defaultView;
        return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
          m();
        }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
          m();
        })), c.attributes = ib(function(a) {
          return a.className = "i", !a.getAttribute("className");
        }), c.getElementsByTagName = ib(function(a) {
          return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length;
        }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
          return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length;
        }), c.getById = ib(function(a) {
          return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
        }), c.getById ? (d.find.ID = function(a, b) {
          if (typeof b.getElementById !== C && p) {
            var c = b.getElementById(a);
            return c && c.parentNode ? [c] : [];
          }
        }, d.filter.ID = function(a) {
          var b = a.replace(cb, db);
          return function(a) {
            return a.getAttribute("id") === b;
          };
        }) : (delete d.find.ID, d.filter.ID = function(a) {
          var b = a.replace(cb, db);
          return function(a) {
            var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
            return c && c.value === b;
          };
        }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
          return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0;
        } : function(a, b) {
          var c,
              d = [],
              e = 0,
              f = b.getElementsByTagName(a);
          if ("*" === a) {
            while (c = f[e++])
              1 === c.nodeType && d.push(c);
            return d;
          }
          return f;
        }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
          return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0;
        }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
          a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked");
        }), ib(function(a) {
          var b = e.createElement("input");
          b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
        })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
          c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q);
        }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
          var c = 9 === a.nodeType ? a.documentElement : a,
              d = b && b.parentNode;
          return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
        } : function(a, b) {
          if (b)
            while (b = b.parentNode)
              if (b === a)
                return !0;
          return !1;
        }, B = b ? function(a, b) {
          if (a === b)
            return l = !0, 0;
          var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
          return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
        } : function(a, b) {
          if (a === b)
            return l = !0, 0;
          var c,
              d = 0,
              f = a.parentNode,
              g = b.parentNode,
              h = [a],
              i = [b];
          if (!f || !g)
            return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
          if (f === g)
            return kb(a, b);
          c = a;
          while (c = c.parentNode)
            h.unshift(c);
          c = b;
          while (c = c.parentNode)
            i.unshift(c);
          while (h[d] === i[d])
            d++;
          return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
        }, e) : n;
      }, fb.matches = function(a, b) {
        return fb(a, null, null, b);
      }, fb.matchesSelector = function(a, b) {
        if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
          try {
            var d = s.call(a, b);
            if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
              return d;
          } catch (e) {}
        return fb(b, n, null, [a]).length > 0;
      }, fb.contains = function(a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }, fb.attr = function(a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
            f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
      }, fb.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }, fb.uniqueSort = function(a) {
        var b,
            d = [],
            e = 0,
            f = 0;
        if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
          while (b = a[f++])
            b === a[f] && (e = d.push(f));
          while (e--)
            a.splice(d[e], 1);
        }
        return k = null, a;
      }, e = fb.getText = function(a) {
        var b,
            c = "",
            d = 0,
            f = a.nodeType;
        if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent)
              return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling)
              c += e(a);
          } else if (3 === f || 4 === f)
            return a.nodeValue;
        } else
          while (b = a[d++])
            c += e(b);
        return c;
      }, d = fb.selectors = {
        cacheLength: 50,
        createPseudo: hb,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {dir: "parentNode"},
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {dir: "previousSibling"}
        },
        preFilter: {
          ATTR: function(a) {
            return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
          },
          CHILD: function(a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a;
          },
          PSEUDO: function(a) {
            var b,
                c = !a[6] && a[2];
            return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
          }
        },
        filter: {
          TAG: function(a) {
            var b = a.replace(cb, db).toLowerCase();
            return "*" === a ? function() {
              return !0;
            } : function(a) {
              return a.nodeName && a.nodeName.toLowerCase() === b;
            };
          },
          CLASS: function(a) {
            var b = y[a + " "];
            return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
              return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "");
            });
          },
          ATTR: function(a, b, c) {
            return function(d) {
              var e = fb.attr(d, a);
              return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
            };
          },
          CHILD: function(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
            return 1 === d && 0 === e ? function(a) {
              return !!a.parentNode;
            } : function(b, c, i) {
              var j,
                  k,
                  l,
                  m,
                  n,
                  o,
                  p = f !== g ? "nextSibling" : "previousSibling",
                  q = b.parentNode,
                  r = h && b.nodeName.toLowerCase(),
                  s = !i && !h;
              if (q) {
                if (f) {
                  while (p) {
                    l = b;
                    while (l = l[p])
                      if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                        return !1;
                    o = p = "only" === a && !o && "nextSibling";
                  }
                  return !0;
                }
                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                  k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                  while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                    if (1 === l.nodeType && ++m && l === b) {
                      k[a] = [w, n, m];
                      break;
                    }
                } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                  m = j[1];
                else
                  while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))
                      break;
                return m -= e, m === d || m % d === 0 && m / d >= 0;
              }
            };
          },
          PSEUDO: function(a, b) {
            var c,
                e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
            return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
              var d,
                  f = e(a, b),
                  g = f.length;
              while (g--)
                d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
            }) : function(a) {
              return e(a, 0, c);
            }) : e;
          }
        },
        pseudos: {
          not: hb(function(a) {
            var b = [],
                c = [],
                d = h(a.replace(R, "$1"));
            return d[u] ? hb(function(a, b, c, e) {
              var f,
                  g = d(a, null, e, []),
                  h = a.length;
              while (h--)
                (f = g[h]) && (a[h] = !(b[h] = f));
            }) : function(a, e, f) {
              return b[0] = a, d(b, null, f, c), !c.pop();
            };
          }),
          has: hb(function(a) {
            return function(b) {
              return fb(a, b).length > 0;
            };
          }),
          contains: hb(function(a) {
            return function(b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
            };
          }),
          lang: hb(function(a) {
            return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function(b) {
              var c;
              do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
   while ((b = b.parentNode) && 1 === b.nodeType);
              return !1;
            };
          }),
          target: function(b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function(a) {
            return a === o;
          },
          focus: function(a) {
            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
          },
          enabled: function(a) {
            return a.disabled === !1;
          },
          disabled: function(a) {
            return a.disabled === !0;
          },
          checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b && !!a.selected;
          },
          selected: function(a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
          },
          empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6)
                return !1;
            return !0;
          },
          parent: function(a) {
            return !d.pseudos.empty(a);
          },
          header: function(a) {
            return Z.test(a.nodeName);
          },
          input: function(a) {
            return Y.test(a.nodeName);
          },
          button: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b;
          },
          text: function(a) {
            var b;
            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
          },
          first: nb(function() {
            return [0];
          }),
          last: nb(function(a, b) {
            return [b - 1];
          }),
          eq: nb(function(a, b, c) {
            return [0 > c ? c + b : c];
          }),
          even: nb(function(a, b) {
            for (var c = 0; b > c; c += 2)
              a.push(c);
            return a;
          }),
          odd: nb(function(a, b) {
            for (var c = 1; b > c; c += 2)
              a.push(c);
            return a;
          }),
          lt: nb(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0; )
              a.push(d);
            return a;
          }),
          gt: nb(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b; )
              a.push(d);
            return a;
          })
        }
      }, d.pseudos.nth = d.pseudos.eq;
      for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })
        d.pseudos[b] = lb(b);
      for (b in {
        submit: !0,
        reset: !0
      })
        d.pseudos[b] = mb(b);
      function pb() {}
      pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
        var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
        if (k)
          return b ? 0 : k.slice(0);
        h = a, i = [], j = d.preFilter;
        while (h) {
          (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
            value: c,
            type: e[0].replace(R, " ")
          }), h = h.slice(c.length));
          for (g in d.filter)
            !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
              value: c,
              type: g,
              matches: e
            }), h = h.slice(c.length));
          if (!c)
            break;
        }
        return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
      };
      function qb(a) {
        for (var b = 0,
            c = a.length,
            d = ""; c > b; b++)
          d += a[b].value;
        return d;
      }
      function rb(a, b, c) {
        var d = b.dir,
            e = c && "parentNode" === d,
            f = x++;
        return b.first ? function(b, c, f) {
          while (b = b[d])
            if (1 === b.nodeType || e)
              return a(b, c, f);
        } : function(b, c, g) {
          var h,
              i,
              j = [w, f];
          if (g) {
            while (b = b[d])
              if ((1 === b.nodeType || e) && a(b, c, g))
                return !0;
          } else
            while (b = b[d])
              if (1 === b.nodeType || e) {
                if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                  return j[2] = h[2];
                if (i[d] = j, j[2] = a(b, c, g))
                  return !0;
              }
        };
      }
      function sb(a) {
        return a.length > 1 ? function(b, c, d) {
          var e = a.length;
          while (e--)
            if (!a[e](b, c, d))
              return !1;
          return !0;
        } : a[0];
      }
      function tb(a, b, c) {
        for (var d = 0,
            e = b.length; e > d; d++)
          fb(a, b[d], c);
        return c;
      }
      function ub(a, b, c, d, e) {
        for (var f,
            g = [],
            h = 0,
            i = a.length,
            j = null != b; i > h; h++)
          (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g;
      }
      function vb(a, b, c, d, e, f) {
        return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
          var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              p = f || tb(b || "*", h.nodeType ? [h] : h, []),
              q = !a || !f && b ? p : ub(p, m, a, h, i),
              r = c ? e || (f ? a : o || d) ? [] : g : q;
          if (c && c(q, r, h, i), d) {
            j = ub(r, n), d(j, [], h, i), k = j.length;
            while (k--)
              (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                j = [], k = r.length;
                while (k--)
                  (l = r[k]) && j.push(q[k] = l);
                e(null, r = [], j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          } else
            r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
        });
      }
      function wb(a) {
        for (var b,
            c,
            e,
            f = a.length,
            g = d.relative[a[0].type],
            h = g || d.relative[" "],
            i = g ? 1 : 0,
            k = rb(function(a) {
              return a === b;
            }, h, !0),
            l = rb(function(a) {
              return K.call(b, a) > -1;
            }, h, !0),
            m = [function(a, c, d) {
              return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
            }]; f > i; i++)
          if (c = d.relative[a[i].type])
            m = [rb(sb(m), c)];
          else {
            if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
              for (e = ++i; f > e; e++)
                if (d.relative[a[e].type])
                  break;
              return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
            }
            m.push(c);
          }
        return sb(m);
      }
      function xb(a, b) {
        var c = b.length > 0,
            e = a.length > 0,
            f = function(f, g, h, i, k) {
              var l,
                  m,
                  o,
                  p = 0,
                  q = "0",
                  r = f && [],
                  s = [],
                  t = j,
                  u = f || e && d.find.TAG("*", k),
                  v = w += null == t ? 1 : Math.random() || .1,
                  x = u.length;
              for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                if (e && l) {
                  m = 0;
                  while (o = a[m++])
                    if (o(l, g, h)) {
                      i.push(l);
                      break;
                    }
                  k && (w = v);
                }
                c && ((l = !o && l) && p--, f && r.push(l));
              }
              if (p += q, c && q !== p) {
                m = 0;
                while (o = b[m++])
                  o(r, s, g, h);
                if (f) {
                  if (p > 0)
                    while (q--)
                      r[q] || s[q] || (s[q] = G.call(i));
                  s = ub(s);
                }
                I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
              }
              return k && (w = v, j = t), r;
            };
        return c ? hb(f) : f;
      }
      return h = fb.compile = function(a, b) {
        var c,
            d = [],
            e = [],
            f = A[a + " "];
        if (!f) {
          b || (b = g(a)), c = b.length;
          while (c--)
            f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
          f = A(a, xb(e, d)), f.selector = a;
        }
        return f;
      }, i = fb.select = function(a, b, e, f) {
        var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g(a = n.selector || a);
        if (e = e || [], 1 === o.length) {
          if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
            if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)
              return e;
            n && (b = b.parentNode), a = a.slice(j.shift().value.length);
          }
          i = X.needsContext.test(a) ? 0 : j.length;
          while (i--) {
            if (k = j[i], d.relative[l = k.type])
              break;
            if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
              if (j.splice(i, 1), a = f.length && qb(j), !a)
                return I.apply(e, f), e;
              break;
            }
          }
        }
        return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
      }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      }), ib(function(a) {
        return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
      }) || jb("type|href|height|width", function(a, b, c) {
        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
      }), c.attributes && ib(function(a) {
        return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
      }) || jb("value", function(a, b, c) {
        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
      }), ib(function(a) {
        return null == a.getAttribute("disabled");
      }) || jb(L, function(a, b, c) {
        var d;
        return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
      }), fb;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
      if (n.isFunction(b))
        return n.grep(a, function(a, d) {
          return !!b.call(a, d, a) !== c;
        });
      if (b.nodeType)
        return n.grep(a, function(a) {
          return a === b !== c;
        });
      if ("string" == typeof b) {
        if (w.test(b))
          return n.filter(b, a, c);
        b = n.filter(b, a);
      }
      return n.grep(a, function(a) {
        return g.call(b, a) >= 0 !== c;
      });
    }
    n.filter = function(a, b, c) {
      var d = b[0];
      return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
        return 1 === a.nodeType;
      }));
    }, n.fn.extend({
      find: function(a) {
        var b,
            c = this.length,
            d = [],
            e = this;
        if ("string" != typeof a)
          return this.pushStack(n(a).filter(function() {
            for (b = 0; c > b; b++)
              if (n.contains(e[b], this))
                return !0;
          }));
        for (b = 0; c > b; b++)
          n.find(a, e[b], d);
        return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
      },
      filter: function(a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not: function(a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is: function(a) {
        return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
      }
    });
    var y,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function(a, b) {
          var c,
              d;
          if (!a)
            return this;
          if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)
              return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
              if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                for (c in b)
                  n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
              return this;
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
          }
          return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };
    n.extend({
      dir: function(a, b, c) {
        var d = [],
            e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
          if (1 === a.nodeType) {
            if (e && n(a).is(c))
              break;
            d.push(a);
          }
        return d;
      },
      sibling: function(a, b) {
        for (var c = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== b && c.push(a);
        return c;
      }
    }), n.fn.extend({
      has: function(a) {
        var b = n(a, this),
            c = b.length;
        return this.filter(function() {
          for (var a = 0; c > a; a++)
            if (n.contains(this, b[a]))
              return !0;
        });
      },
      closest: function(a, b) {
        for (var c,
            d = 0,
            e = this.length,
            f = [],
            g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f);
      },
      index: function(a) {
        return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function(a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      },
      addBack: function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
      }
    });
    function D(a, b) {
      while ((a = a[b]) && 1 !== a.nodeType)
        ;
      return a;
    }
    n.each({
      parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function(a) {
        return n.dir(a, "parentNode");
      },
      parentsUntil: function(a, b, c) {
        return n.dir(a, "parentNode", c);
      },
      next: function(a) {
        return D(a, "nextSibling");
      },
      prev: function(a) {
        return D(a, "previousSibling");
      },
      nextAll: function(a) {
        return n.dir(a, "nextSibling");
      },
      prevAll: function(a) {
        return n.dir(a, "previousSibling");
      },
      nextUntil: function(a, b, c) {
        return n.dir(a, "nextSibling", c);
      },
      prevUntil: function(a, b, c) {
        return n.dir(a, "previousSibling", c);
      },
      siblings: function(a) {
        return n.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function(a) {
        return n.sibling(a.firstChild);
      },
      contents: function(a) {
        return a.contentDocument || n.merge([], a.childNodes);
      }
    }, function(a, b) {
      n.fn[a] = function(c, d) {
        var e = n.map(this, b, c);
        return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
      };
    });
    var E = /\S+/g,
        F = {};
    function G(a) {
      var b = F[a] = {};
      return n.each(a.match(E) || [], function(a, c) {
        b[c] = !0;
      }), b;
    }
    n.Callbacks = function(a) {
      a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
      var b,
          c,
          d,
          e,
          f,
          g,
          h = [],
          i = !a.once && [],
          j = function(l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
              if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
              }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
          },
          k = {
            add: function() {
              if (h) {
                var c = h.length;
                !function g(b) {
                  n.each(b, function(b, c) {
                    var d = n.type(c);
                    "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                  });
                }(arguments), d ? f = h.length : b && (e = c, j(b));
              }
              return this;
            },
            remove: function() {
              return h && n.each(arguments, function(a, b) {
                var c;
                while ((c = n.inArray(b, h, c)) > -1)
                  h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
              }), this;
            },
            has: function(a) {
              return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
              return h = [], f = 0, this;
            },
            disable: function() {
              return h = i = b = void 0, this;
            },
            disabled: function() {
              return !h;
            },
            lock: function() {
              return i = void 0, b || k.disable(), this;
            },
            locked: function() {
              return !i;
            },
            fireWith: function(a, b) {
              return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
            },
            fire: function() {
              return k.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!c;
            }
          };
      return k;
    }, n.extend({
      Deferred: function(a) {
        var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
            c = "pending",
            d = {
              state: function() {
                return c;
              },
              always: function() {
                return e.done(arguments).fail(arguments), this;
              },
              then: function() {
                var a = arguments;
                return n.Deferred(function(c) {
                  n.each(b, function(b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function() {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                    });
                  }), a = null;
                }).promise();
              },
              promise: function(a) {
                return null != a ? n.extend(a, d) : d;
              }
            },
            e = {};
        return d.pipe = d.then, n.each(b, function(a, f) {
          var g = f[2],
              h = f[3];
          d[f[1]] = g.add, h && g.add(function() {
            c = h;
          }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
            return e[f[0] + "With"](this === e ? d : this, arguments), this;
          }, e[f[0] + "With"] = g.fireWith;
        }), d.promise(e), a && a.call(e, e), e;
      },
      when: function(a) {
        var b = 0,
            c = d.call(arguments),
            e = c.length,
            f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
            g = 1 === f ? a : n.Deferred(),
            h = function(a, b, c) {
              return function(e) {
                b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
              };
            },
            i,
            j,
            k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
        return f || g.resolveWith(k, c), g.promise();
      }
    });
    var H;
    n.fn.ready = function(a) {
      return n.ready.promise().done(a), this;
    }, n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function(a) {
        (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
      }
    });
    function I() {
      l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
    }
    n.ready.promise = function(b) {
      return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
      var h = 0,
          i = a.length,
          j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c)
          n.access(a, b, h, c[h], !0, f, g);
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
        return j.call(n(a), c);
      })), b))
        for (; i > h; h++)
          b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function K() {
      Object.defineProperty(this.cache = {}, 0, {get: function() {
          return {};
        }}), this.expando = n.expando + Math.random();
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
      key: function(a) {
        if (!K.accepts(a))
          return 0;
        var b = {},
            c = a[this.expando];
        if (!c) {
          c = K.uid++;
          try {
            b[this.expando] = {value: c}, Object.defineProperties(a, b);
          } catch (d) {
            b[this.expando] = c, n.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function(a, b, c) {
        var d,
            e = this.key(a),
            f = this.cache[e];
        if ("string" == typeof b)
          f[b] = c;
        else if (n.isEmptyObject(f))
          n.extend(this.cache[e], b);
        else
          for (d in b)
            f[d] = b[d];
        return f;
      },
      get: function(a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access: function(a, b, c) {
        var d;
        return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function(a, b) {
        var c,
            d,
            e,
            f = this.key(a),
            g = this.cache[f];
        if (void 0 === b)
          this.cache[f] = {};
        else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
          while (c--)
            delete g[d[c]];
        }
      },
      hasData: function(a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function(a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    function P(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
        if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
          try {
            c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
          } catch (e) {}
          M.set(a, b, c);
        } else
          c = void 0;
      return c;
    }
    n.extend({
      hasData: function(a) {
        return M.hasData(a) || L.hasData(a);
      },
      data: function(a, b, c) {
        return M.access(a, b, c);
      },
      removeData: function(a, b) {
        M.remove(a, b);
      },
      _data: function(a, b, c) {
        return L.access(a, b, c);
      },
      _removeData: function(a, b) {
        L.remove(a, b);
      }
    }), n.fn.extend({
      data: function(a, b) {
        var c,
            d,
            e,
            f = this[0],
            g = f && f.attributes;
        if (void 0 === a) {
          if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
            c = g.length;
            while (c--)
              g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
            L.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a ? this.each(function() {
          M.set(this, a);
        }) : J(this, function(b) {
          var c,
              d = n.camelCase(a);
          if (f && void 0 === b) {
            if (c = M.get(f, a), void 0 !== c)
              return c;
            if (c = M.get(f, d), void 0 !== c)
              return c;
            if (c = P(f, d, void 0), void 0 !== c)
              return c;
          } else
            this.each(function() {
              var c = M.get(this, d);
              M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
            });
        }, null, b, arguments.length > 1, null, !0);
      },
      removeData: function(a) {
        return this.each(function() {
          M.remove(this, a);
        });
      }
    }), n.extend({
      queue: function(a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
      },
      dequeue: function(a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = n._queueHooks(a, b),
            g = function() {
              n.dequeue(a, b);
            };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
      },
      _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return L.get(a, c) || L.access(a, c, {empty: n.Callbacks("once memory").add(function() {
            L.remove(a, [b + "queue", c]);
          })});
      }
    }), n.fn.extend({
      queue: function(a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
          var c = n.queue(this, a, b);
          n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
        });
      },
      dequeue: function(a) {
        return this.each(function() {
          n.dequeue(this, a);
        });
      },
      clearQueue: function(a) {
        return this.queue(a || "fx", []);
      },
      promise: function(a, b) {
        var c,
            d = 1,
            e = n.Deferred(),
            f = this,
            g = this.length,
            h = function() {
              --d || e.resolveWith(f, [f]);
            };
        "string" != typeof a && (b = a, a = void 0), a = a || "fx";
        while (g--)
          c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) {
          return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
        },
        T = /^(?:checkbox|radio)$/i;
    !function() {
      var a = l.createDocumentFragment(),
          b = a.appendChild(l.createElement("div")),
          c = l.createElement("input");
      c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
      return !0;
    }
    function $() {
      return !1;
    }
    function _() {
      try {
        return l.activeElement;
      } catch (a) {}
    }
    n.event = {
      global: {},
      add: function(a, b, c, d, e) {
        var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            o,
            p,
            q,
            r = L.get(a);
        if (r) {
          c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
            return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
          }), b = (b || "").match(E) || [""], j = b.length;
          while (j--)
            h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
              type: o,
              origType: q,
              data: d,
              handler: c,
              guid: c.guid,
              selector: e,
              needsContext: e && n.expr.match.needsContext.test(e),
              namespace: p.join(".")
            }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      },
      remove: function(a, b, c, d, e) {
        var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            o,
            p,
            q,
            r = L.hasData(a) && L.get(a);
        if (r && (i = r.events)) {
          b = (b || "").match(E) || [""], j = b.length;
          while (j--)
            if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
              l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
              while (f--)
                k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
              g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
            } else
              for (o in i)
                n.event.remove(a, o + b[j], c, d, !0);
          n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
        }
      },
      trigger: function(b, c, d, e) {
        var f,
            g,
            h,
            i,
            k,
            m,
            o,
            p = [d || l],
            q = j.call(b, "type") ? b.type : b,
            r = j.call(b, "namespace") ? b.namespace.split(".") : [];
        if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
          if (!e && !o.noBubble && !n.isWindow(d)) {
            for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
              p.push(g), h = g;
            h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
          }
          f = 0;
          while ((g = p[f++]) && !b.isPropagationStopped())
            b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
          return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
        }
      },
      dispatch: function(a) {
        a = n.event.fix(a);
        var b,
            c,
            e,
            f,
            g,
            h = [],
            i = d.call(arguments),
            j = (L.get(this, "events") || {})[a.type] || [],
            k = n.event.special[a.type] || {};
        if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
          h = n.event.handlers.call(this, a, j), b = 0;
          while ((f = h[b++]) && !a.isPropagationStopped()) {
            a.currentTarget = f.elem, c = 0;
            while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
              (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
          return k.postDispatch && k.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function(a, b) {
        var c,
            d,
            e,
            f,
            g = [],
            h = b.delegateCount,
            i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type))
          for (; i !== this; i = i.parentNode || this)
            if (i.disabled !== !0 || "click" !== a.type) {
              for (d = [], c = 0; h > c; c++)
                f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
              d.length && g.push({
                elem: i,
                handlers: d
              });
            }
        return h < b.length && g.push({
          elem: this,
          handlers: b.slice(h)
        }), g;
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(a, b) {
          return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(a, b) {
          var c,
              d,
              e,
              f = b.button;
          return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
        }
      },
      fix: function(a) {
        if (a[n.expando])
          return a;
        var b,
            c,
            d,
            e = a.type,
            f = a,
            g = this.fixHooks[e];
        g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
        while (b--)
          c = d[b], a[c] = f[c];
        return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
      },
      special: {
        load: {noBubble: !0},
        focus: {
          trigger: function() {
            return this !== _() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === _() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
          },
          _default: function(a) {
            return n.nodeName(a.target, "a");
          }
        },
        beforeunload: {postDispatch: function(a) {
            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
          }}
      },
      simulate: function(a, b, c, d) {
        var e = n.extend(new n.Event, c, {
          type: a,
          isSimulated: !0,
          originalEvent: {}
        });
        d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
      }
    }, n.removeEvent = function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function(a, b) {
      return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function() {
        var a = this.originalEvent;
        this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function() {
        var a = this.originalEvent;
        this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
      }
    }, n.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(a, b) {
      n.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function(a) {
          var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
          return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
        }
      };
    }), k.focusinBubbles || n.each({
      focus: "focusin",
      blur: "focusout"
    }, function(a, b) {
      var c = function(a) {
        n.event.simulate(b, a.target, n.event.fix(a), !0);
      };
      n.event.special[b] = {
        setup: function() {
          var d = this.ownerDocument || this,
              e = L.access(d, b);
          e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
        },
        teardown: function() {
          var d = this.ownerDocument || this,
              e = L.access(d, b) - 1;
          e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
        }
      };
    }), n.fn.extend({
      on: function(a, b, c, d, e) {
        var f,
            g;
        if ("object" == typeof a) {
          "string" != typeof b && (c = c || b, b = void 0);
          for (g in a)
            this.on(g, b, c, a[g], e);
          return this;
        }
        if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
          d = $;
        else if (!d)
          return this;
        return 1 === e && (f = d, d = function(a) {
          return n().off(a), f.apply(this, arguments);
        }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
          n.event.add(this, a, d, c, b);
        });
      },
      one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function(a, b, c) {
        var d,
            e;
        if (a && a.preventDefault && a.handleObj)
          return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
        if ("object" == typeof a) {
          for (e in a)
            this.off(e, b, a[e]);
          return this;
        }
        return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
          n.event.remove(this, a, c, b);
        });
      },
      trigger: function(a, b) {
        return this.each(function() {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function(a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bb = /<([\w:]+)/,
        cb = /<|&#?\w+;/,
        db = /<(?:script|style|link)/i,
        eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /^$|\/(?:java|ecma)script/i,
        gb = /^true\/(.*)/,
        hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ib = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
    function jb(a, b) {
      return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function kb(a) {
      return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function lb(a) {
      var b = gb.exec(a.type);
      return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function mb(a, b) {
      for (var c = 0,
          d = a.length; d > c; c++)
        L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }
    function nb(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j;
      if (1 === b.nodeType) {
        if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
          delete g.handle, g.events = {};
          for (e in j)
            for (c = 0, d = j[e].length; d > c; c++)
              n.event.add(b, e, j[e][c]);
        }
        M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
      }
    }
    function ob(a, b) {
      var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
      return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
    }
    function pb(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    n.extend({
      clone: function(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.cloneNode(!0),
            i = n.contains(a.ownerDocument, a);
        if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
          for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
            pb(f[d], g[d]);
        if (b)
          if (c)
            for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)
              nb(f[d], g[d]);
          else
            nb(a, h);
        return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h;
      },
      buildFragment: function(a, b, c, d) {
        for (var e,
            f,
            g,
            h,
            i,
            j,
            k = b.createDocumentFragment(),
            l = [],
            m = 0,
            o = a.length; o > m; m++)
          if (e = a[m], e || 0 === e)
            if ("object" === n.type(e))
              n.merge(l, e.nodeType ? [e] : e);
            else if (cb.test(e)) {
              f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
              while (j--)
                f = f.lastChild;
              n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else
              l.push(b.createTextNode(e));
        k.textContent = "", m = 0;
        while (e = l[m++])
          if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
            j = 0;
            while (e = f[j++])
              fb.test(e.type || "") && c.push(e);
          }
        return k;
      },
      cleanData: function(a) {
        for (var b,
            c,
            d,
            e,
            f = n.event.special,
            g = 0; void 0 !== (c = a[g]); g++) {
          if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
            if (b.events)
              for (d in b.events)
                f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            L.cache[e] && delete L.cache[e];
          }
          delete M.cache[c[M.expando]];
        }
      }
    }), n.fn.extend({
      text: function(a) {
        return J(this, function(a) {
          return void 0 === a ? n.text(this) : this.empty().each(function() {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
          });
        }, null, a, arguments.length);
      },
      append: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = jb(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = jb(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function(a, b) {
        for (var c,
            d = a ? n.filter(a, this) : this,
            e = 0; null != (c = d[e]); e++)
          b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
        return this;
      },
      empty: function() {
        for (var a,
            b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
        return this;
      },
      clone: function(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
          return n.clone(this, a, b);
        });
      },
      html: function(a) {
        return J(this, function(a) {
          var b = this[0] || {},
              c = 0,
              d = this.length;
          if (void 0 === a && 1 === b.nodeType)
            return b.innerHTML;
          if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = a.replace(ab, "<$1></$2>");
            try {
              for (; d > c; c++)
                b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
              b = 0;
            } catch (e) {}
          }
          b && this.empty().append(a);
        }, null, a, arguments.length);
      },
      replaceWith: function() {
        var a = arguments[0];
        return this.domManip(arguments, function(b) {
          a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this);
        }), a && (a.length || a.nodeType) ? this : this.remove();
      },
      detach: function(a) {
        return this.remove(a, !0);
      },
      domManip: function(a, b) {
        a = e.apply([], a);
        var c,
            d,
            f,
            g,
            h,
            i,
            j = 0,
            l = this.length,
            m = this,
            o = l - 1,
            p = a[0],
            q = n.isFunction(p);
        if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))
          return this.each(function(c) {
            var d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
          for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)
            h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
          if (g)
            for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)
              h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")));
        }
        return this;
      }
    }), n.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(a, b) {
      n.fn[a] = function(a) {
        for (var c,
            d = [],
            e = n(a),
            g = e.length - 1,
            h = 0; g >= h; h++)
          c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
        return this.pushStack(d);
      };
    });
    var qb,
        rb = {};
    function sb(b, c) {
      var d,
          e = n(c.createElement(b)).appendTo(c.body),
          f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
      return e.detach(), f;
    }
    function tb(a) {
      var b = l,
          c = rb[a];
      return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c;
    }
    var ub = /^margin/,
        vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wb = function(a) {
          return a.ownerDocument.defaultView.getComputedStyle(a, null);
        };
    function xb(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.style;
      return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function yb(a, b) {
      return {get: function() {
          return a() ? void delete this.get : (this.get = b).apply(this, arguments);
        }};
    }
    !function() {
      var b,
          c,
          d = l.documentElement,
          e = l.createElement("div"),
          f = l.createElement("div");
      if (f.style) {
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
        function g() {
          f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
          var g = a.getComputedStyle(f, null);
          b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
        }
        a.getComputedStyle && n.extend(k, {
          pixelPosition: function() {
            return g(), b;
          },
          boxSizingReliable: function() {
            return null == c && g(), c;
          },
          reliableMarginRight: function() {
            var b,
                c = f.appendChild(l.createElement("div"));
            return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b;
          }
        });
      }
    }(), n.swap = function(a, b, c, d) {
      var e,
          f,
          g = {};
      for (f in b)
        g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b)
        a.style[f] = g[f];
      return e;
    };
    var zb = /^(none|table(?!-c[ea]).+)/,
        Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
        Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
        Cb = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        Db = {
          letterSpacing: "0",
          fontWeight: "400"
        },
        Eb = ["Webkit", "O", "Moz", "ms"];
    function Fb(a, b) {
      if (b in a)
        return b;
      var c = b[0].toUpperCase() + b.slice(1),
          d = b,
          e = Eb.length;
      while (e--)
        if (b = Eb[e] + c, b in a)
          return b;
      return d;
    }
    function Gb(a, b, c) {
      var d = Ab.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Hb(a, b, c, d, e) {
      for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
          g = 0; 4 > f; f += 2)
        "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
      return g;
    }
    function Ib(a, b, c) {
      var d = !0,
          e = "width" === b ? a.offsetWidth : a.offsetHeight,
          f = wb(a),
          g = "border-box" === n.css(a, "boxSizing", !1, f);
      if (0 >= e || null == e) {
        if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))
          return e;
        d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
      }
      return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Jb(a, b) {
      for (var c,
          d,
          e,
          f = [],
          g = 0,
          h = a.length; h > g; g++)
        d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
      for (g = 0; h > g; g++)
        d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
      return a;
    }
    n.extend({
      cssHooks: {opacity: {get: function(a, b) {
            if (b) {
              var c = xb(a, "opacity");
              return "" === c ? "1" : c;
            }
          }}},
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {"float": "cssFloat"},
      style: function(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e,
              f,
              g,
              h = n.camelCase(b),
              i = a.style;
          return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
        }
      },
      css: function(a, b, c, d) {
        var e,
            f,
            g,
            h = n.camelCase(b);
        return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
      }
    }), n.each(["height", "width"], function(a, b) {
      n.cssHooks[b] = {
        get: function(a, c, d) {
          return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
            return Ib(a, b, d);
          }) : Ib(a, b, d) : void 0;
        },
        set: function(a, c, d) {
          var e = d && wb(a);
          return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
        }
      };
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
      return b ? n.swap(a, {display: "inline-block"}, xb, [a, "marginRight"]) : void 0;
    }), n.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(a, b) {
      n.cssHooks[a + b] = {expand: function(c) {
          for (var d = 0,
              e = {},
              f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        }}, ub.test(a) || (n.cssHooks[a + b].set = Gb);
    }), n.fn.extend({
      css: function(a, b) {
        return J(this, function(a, b, c) {
          var d,
              e,
              f = {},
              g = 0;
          if (n.isArray(b)) {
            for (d = wb(a), e = b.length; e > g; g++)
              f[b[g]] = n.css(a, b[g], !1, d);
            return f;
          }
          return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
        }, a, b, arguments.length > 1);
      },
      show: function() {
        return Jb(this, !0);
      },
      hide: function() {
        return Jb(this);
      },
      toggle: function(a) {
        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
          S(this) ? n(this).show() : n(this).hide();
        });
      }
    });
    function Kb(a, b, c, d, e) {
      return new Kb.prototype.init(a, b, c, d, e);
    }
    n.Tween = Kb, Kb.prototype = {
      constructor: Kb,
      init: function(a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
      },
      cur: function() {
        var a = Kb.propHooks[this.prop];
        return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
      },
      run: function(a) {
        var b,
            c = Kb.propHooks[this.prop];
        return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this;
      }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {_default: {
        get: function(a) {
          var b;
          return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
        },
        set: function(a) {
          n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
        }
      }}, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      }}, n.easing = {
      linear: function(a) {
        return a;
      },
      swing: function(a) {
        return .5 - Math.cos(a * Math.PI) / 2;
      }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb,
        Mb,
        Nb = /^(?:toggle|show|hide)$/,
        Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pb = /queueHooks$/,
        Qb = [Vb],
        Rb = {"*": [function(a, b) {
            var c = this.createTween(a, b),
                d = c.cur(),
                e = Ob.exec(b),
                f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)),
                h = 1,
                i = 20;
            if (g && g[3] !== f) {
              f = f || g[3], e = e || [], g = +d || 1;
              do
                h = h || ".5", g /= h, n.style(c.elem, a, g + f);
   while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
          }]};
    function Sb() {
      return setTimeout(function() {
        Lb = void 0;
      }), Lb = n.now();
    }
    function Tb(a, b) {
      var c,
          d = 0,
          e = {height: a};
      for (b = b ? 1 : 0; 4 > d; d += 2 - b)
        c = R[d], e["margin" + c] = e["padding" + c] = a;
      return b && (e.opacity = e.width = a), e;
    }
    function Ub(a, b, c) {
      for (var d,
          e = (Rb[b] || []).concat(Rb["*"]),
          f = 0,
          g = e.length; g > f; f++)
        if (d = e[f].call(c, b, a))
          return d;
    }
    function Vb(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = this,
          m = {},
          o = a.style,
          p = a.nodeType && S(a),
          q = L.get(a, "fxshow");
      c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
        h.unqueued || i();
      }), h.unqueued++, l.always(function() {
        l.always(function() {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      }));
      for (d in b)
        if (e = b[d], Nb.exec(e)) {
          if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
            if ("show" !== e || !q || void 0 === q[d])
              continue;
            p = !0;
          }
          m[d] = q && q[d] || n.style(a, d);
        } else
          j = void 0;
      if (n.isEmptyObject(m))
        "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
      else {
        q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
          n(a).hide();
        }), l.done(function() {
          var b;
          L.remove(a, "fxshow");
          for (b in m)
            n.style(a, b, m[b]);
        });
        for (d in m)
          g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
    function Wb(a, b) {
      var c,
          d,
          e,
          f,
          g;
      for (c in a)
        if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
          f = g.expand(f), delete a[d];
          for (c in f)
            c in a || (a[c] = f[c], b[c] = e);
        } else
          b[d] = e;
    }
    function Xb(a, b, c) {
      var d,
          e,
          f = 0,
          g = Qb.length,
          h = n.Deferred().always(function() {
            delete i.elem;
          }),
          i = function() {
            if (e)
              return !1;
            for (var b = Lb || Sb(),
                c = Math.max(0, j.startTime + j.duration - b),
                d = c / j.duration || 0,
                f = 1 - d,
                g = 0,
                i = j.tweens.length; i > g; g++)
              j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
          },
          j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
              var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
              return j.tweens.push(d), d;
            },
            stop: function(b) {
              var c = 0,
                  d = b ? j.tweens.length : 0;
              if (e)
                return this;
              for (e = !0; d > c; c++)
                j.tweens[c].run(1);
              return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
            }
          }),
          k = j.props;
      for (Wb(k, j.opts.specialEasing); g > f; f++)
        if (d = Qb[f].call(j, a, k, j.opts))
          return d;
      return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
        elem: a,
        anim: j,
        queue: j.opts.queue
      })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(Xb, {
      tweener: function(a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c,
            d = 0,
            e = a.length; e > d; d++)
          c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b);
      },
      prefilter: function(a, b) {
        b ? Qb.unshift(a) : Qb.push(a);
      }
    }), n.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
      }, d;
    }, n.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d);
      },
      animate: function(a, b, c, d) {
        var e = n.isEmptyObject(a),
            f = n.speed(b, c, d),
            g = function() {
              var b = Xb(this, n.extend({}, a), f);
              (e || L.get(this, "finish")) && b.stop(!0);
            };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = L.get(this);
          if (e)
            g[e] && g[e].stop && d(g[e]);
          else
            for (e in g)
              g[e] && g[e].stop && Pb.test(e) && d(g[e]);
          for (e = f.length; e--; )
            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          (b || !c) && n.dequeue(this, a);
        });
      },
      finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b,
              c = L.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++)
            d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish;
        });
      }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
      var c = n.fn[b];
      n.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e);
      };
    }), n.each({
      slideDown: Tb("show"),
      slideUp: Tb("hide"),
      slideToggle: Tb("toggle"),
      fadeIn: {opacity: "show"},
      fadeOut: {opacity: "hide"},
      fadeToggle: {opacity: "toggle"}
    }, function(a, b) {
      n.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d);
      };
    }), n.timers = [], n.fx.tick = function() {
      var a,
          b = 0,
          c = n.timers;
      for (Lb = n.now(); b < c.length; b++)
        a = c[b], a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), Lb = void 0;
    }, n.fx.timer = function(a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function() {
      Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function() {
      clearInterval(Mb), Mb = null;
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function(a, b) {
      return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
        var d = setTimeout(b, a);
        c.stop = function() {
          clearTimeout(d);
        };
      });
    }, function() {
      var a = l.createElement("input"),
          b = l.createElement("select"),
          c = b.appendChild(l.createElement("option"));
      a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
    }();
    var Yb,
        Zb,
        $b = n.expr.attrHandle;
    n.fn.extend({
      attr: function(a, b) {
        return J(this, n.attr, a, b, arguments.length > 1);
      },
      removeAttr: function(a) {
        return this.each(function() {
          n.removeAttr(this, a);
        });
      }
    }), n.extend({
      attr: function(a, b, c) {
        var d,
            e,
            f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
      },
      removeAttr: function(a, b) {
        var c,
            d,
            e = 0,
            f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while (c = f[e++])
            d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      },
      attrHooks: {type: {set: function(a, b) {
            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          }}}
    }), Zb = {set: function(a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      }}, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
      var c = $b[b] || n.find.attr;
      $b[b] = function(a, b, d) {
        var e,
            f;
        return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e;
      };
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
      prop: function(a, b) {
        return J(this, n.prop, a, b, arguments.length > 1);
      },
      removeProp: function(a) {
        return this.each(function() {
          delete this[n.propFix[a] || a];
        });
      }
    }), n.extend({
      propFix: {
        "for": "htmlFor",
        "class": "className"
      },
      prop: function(a, b, c) {
        var d,
            e,
            f,
            g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
      },
      propHooks: {tabIndex: {get: function(a) {
            return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
          }}}
    }), k.optSelected || (n.propHooks.selected = {get: function(a) {
        var b = a.parentNode;
        return b && b.parentNode && b.parentNode.selectedIndex, null;
      }}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      n.propFix[this.toLowerCase()] = this;
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
      addClass: function(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h = "string" == typeof a && a,
            i = 0,
            j = this.length;
        if (n.isFunction(a))
          return this.each(function(b) {
            n(this).addClass(a.call(this, b, this.className));
          });
        if (h)
          for (b = (a || "").match(E) || []; j > i; i++)
            if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
              f = 0;
              while (e = b[f++])
                d.indexOf(" " + e + " ") < 0 && (d += e + " ");
              g = n.trim(d), c.className !== g && (c.className = g);
            }
        return this;
      },
      removeClass: function(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h = 0 === arguments.length || "string" == typeof a && a,
            i = 0,
            j = this.length;
        if (n.isFunction(a))
          return this.each(function(b) {
            n(this).removeClass(a.call(this, b, this.className));
          });
        if (h)
          for (b = (a || "").match(E) || []; j > i; i++)
            if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
              f = 0;
              while (e = b[f++])
                while (d.indexOf(" " + e + " ") >= 0)
                  d = d.replace(" " + e + " ", " ");
              g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
            }
        return this;
      },
      toggleClass: function(a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
          n(this).toggleClass(a.call(this, c, this.className, b), b);
        } : function() {
          if ("string" === c) {
            var b,
                d = 0,
                e = n(this),
                f = a.match(E) || [];
            while (b = f[d++])
              e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          } else
            (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
        });
      },
      hasClass: function(a) {
        for (var b = " " + a + " ",
            c = 0,
            d = this.length; d > c; c++)
          if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)
            return !0;
        return !1;
      }
    });
    var bc = /\r/g;
    n.fn.extend({val: function(a) {
        var b,
            c,
            d,
            e = this[0];
        {
          if (arguments.length)
            return d = n.isFunction(a), this.each(function(c) {
              var e;
              1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                return null == a ? "" : a + "";
              })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            });
          if (e)
            return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c);
        }
      }}), n.extend({valHooks: {
        option: {get: function(a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a));
          }},
        select: {
          get: function(a) {
            for (var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0; h > i; i++)
              if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                if (b = n(c).val(), f)
                  return b;
                g.push(b);
              }
            return g;
          },
          set: function(a, b) {
            var c,
                d,
                e = a.options,
                f = n.makeArray(b),
                g = e.length;
            while (g--)
              d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          }
        }
      }}), n.each(["radio", "checkbox"], function() {
      n.valHooks[this] = {set: function(a, b) {
          return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
        }}, k.checkOn || (n.valHooks[this].get = function(a) {
        return null === a.getAttribute("value") ? "on" : a.value;
      });
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
      n.fn[b] = function(a, c) {
        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
      };
    }), n.fn.extend({
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function(a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function(a, b) {
        return this.off(a, null, b);
      },
      delegate: function(a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function(a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
      }
    });
    var cc = n.now(),
        dc = /\?/;
    n.parseJSON = function(a) {
      return JSON.parse(a + "");
    }, n.parseXML = function(a) {
      var b,
          c;
      if (!a || "string" != typeof a)
        return null;
      try {
        c = new DOMParser, b = c.parseFromString(a, "text/xml");
      } catch (d) {
        b = void 0;
      }
      return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
    };
    var ec,
        fc,
        gc = /#.*$/,
        hc = /([?&])_=[^&]*/,
        ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        kc = /^(?:GET|HEAD)$/,
        lc = /^\/\//,
        mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        nc = {},
        oc = {},
        pc = "*/".concat("*");
    try {
      fc = location.href;
    } catch (qc) {
      fc = l.createElement("a"), fc.href = "", fc = fc.href;
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    function rc(a) {
      return function(b, c) {
        "string" != typeof b && (c = b, b = "*");
        var d,
            e = 0,
            f = b.toLowerCase().match(E) || [];
        if (n.isFunction(c))
          while (d = f[e++])
            "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      };
    }
    function sc(a, b, c, d) {
      var e = {},
          f = a === oc;
      function g(h) {
        var i;
        return e[h] = !0, n.each(a[h] || [], function(a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
        }), i;
      }
      return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function tc(a, b) {
      var c,
          d,
          e = n.ajaxSettings.flatOptions || {};
      for (c in b)
        void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && n.extend(!0, a, d), a;
    }
    function uc(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.contents,
          i = a.dataTypes;
      while ("*" === i[0])
        i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
        for (e in h)
          if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
          }
      if (i[0] in c)
        f = i[0];
      else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;
            break;
          }
          g || (g = e);
        }
        f = f || g;
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function vc(a, b, c, d) {
      var e,
          f,
          g,
          h,
          i,
          j = {},
          k = a.dataTypes.slice();
      if (k[1])
        for (g in a.converters)
          j[g.toLowerCase()] = a.converters[g];
      f = k.shift();
      while (f)
        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
          if ("*" === f)
            f = i;
          else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
              for (e in j)
                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                  g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                  break;
                }
            if (g !== !0)
              if (g && a["throws"])
                b = g(b);
              else
                try {
                  b = g(b);
                } catch (l) {
                  return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                  };
                }
          }
      return {
        state: "success",
        data: b
      };
    }
    n.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: fc,
        type: "GET",
        isLocal: jc.test(ec[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": pc,
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
          "text json": n.parseJSON,
          "text xml": n.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(a, b) {
        return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a);
      },
      ajaxPrefilter: rc(nc),
      ajaxTransport: rc(oc),
      ajax: function(a, b) {
        "object" == typeof a && (b = a, a = void 0), b = b || {};
        var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = n.ajaxSetup({}, b),
            l = k.context || k,
            m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
            o = n.Deferred(),
            p = n.Callbacks("once memory"),
            q = k.statusCode || {},
            r = {},
            s = {},
            t = 0,
            u = "canceled",
            v = {
              readyState: 0,
              getResponseHeader: function(a) {
                var b;
                if (2 === t) {
                  if (!f) {
                    f = {};
                    while (b = ic.exec(e))
                      f[b[1].toLowerCase()] = b[2];
                  }
                  b = f[a.toLowerCase()];
                }
                return null == b ? null : b;
              },
              getAllResponseHeaders: function() {
                return 2 === t ? e : null;
              },
              setRequestHeader: function(a, b) {
                var c = a.toLowerCase();
                return t || (a = s[c] = s[c] || a, r[a] = b), this;
              },
              overrideMimeType: function(a) {
                return t || (k.mimeType = a), this;
              },
              statusCode: function(a) {
                var b;
                if (a)
                  if (2 > t)
                    for (b in a)
                      q[b] = [q[b], a[b]];
                  else
                    v.always(a[v.status]);
                return this;
              },
              abort: function(a) {
                var b = a || u;
                return c && c.abort(b), x(0, b), this;
              }
            };
        if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)
          return v;
        i = k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
        for (j in k.headers)
          v.setRequestHeader(j, k.headers[j]);
        if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
          return v.abort();
        u = "abort";
        for (j in {
          success: 1,
          error: 1,
          complete: 1
        })
          v[j](k[j]);
        if (c = sc(oc, k, b, v)) {
          v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
            v.abort("timeout");
          }, k.timeout));
          try {
            t = 1, c.send(r, x);
          } catch (w) {
            if (!(2 > t))
              throw w;
            x(-1, w);
          }
        } else
          x(-1, "No Transport");
        function x(a, b, f, h) {
          var j,
              r,
              s,
              u,
              w,
              x = b;
          2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
        }
        return v;
      },
      getJSON: function(a, b, c) {
        return n.get(a, b, c, "json");
      },
      getScript: function(a, b) {
        return n.get(a, void 0, b, "script");
      }
    }), n.each(["get", "post"], function(a, b) {
      n[b] = function(a, c, d, e) {
        return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
          url: a,
          type: b,
          dataType: e,
          data: c,
          success: d
        });
      };
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
      n.fn[b] = function(a) {
        return this.on(b, a);
      };
    }), n._evalUrl = function(a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      });
    }, n.fn.extend({
      wrapAll: function(a) {
        var b;
        return n.isFunction(a) ? this.each(function(b) {
          n(this).wrapAll(a.call(this, b));
        }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          var a = this;
          while (a.firstElementChild)
            a = a.firstElementChild;
          return a;
        }).append(this)), this);
      },
      wrapInner: function(a) {
        return this.each(n.isFunction(a) ? function(b) {
          n(this).wrapInner(a.call(this, b));
        } : function() {
          var b = n(this),
              c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a);
        });
      },
      wrap: function(a) {
        var b = n.isFunction(a);
        return this.each(function(c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function() {
        return this.parent().each(function() {
          n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
        }).end();
      }
    }), n.expr.filters.hidden = function(a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function(a) {
      return !n.expr.filters.hidden(a);
    };
    var wc = /%20/g,
        xc = /\[\]$/,
        yc = /\r?\n/g,
        zc = /^(?:submit|button|image|reset|file)$/i,
        Ac = /^(?:input|select|textarea|keygen)/i;
    function Bc(a, b, c, d) {
      var e;
      if (n.isArray(b))
        n.each(b, function(b, e) {
          c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        });
      else if (c || "object" !== n.type(b))
        d(a, b);
      else
        for (e in b)
          Bc(a + "[" + e + "]", b[e], c, d);
    }
    n.param = function(a, b) {
      var c,
          d = [],
          e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
          };
      if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))
        n.each(a, function() {
          e(this.name, this.value);
        });
      else
        for (c in a)
          Bc(c, a[c], b, e);
      return d.join("&").replace(wc, "+");
    }, n.fn.extend({
      serialize: function() {
        return n.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        }).filter(function() {
          var a = this.type;
          return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a));
        }).map(function(a, b) {
          var c = n(this).val();
          return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
            return {
              name: b.name,
              value: a.replace(yc, "\r\n")
            };
          }) : {
            name: b.name,
            value: c.replace(yc, "\r\n")
          };
        }).get();
      }
    }), n.ajaxSettings.xhr = function() {
      try {
        return new XMLHttpRequest;
      } catch (a) {}
    };
    var Cc = 0,
        Dc = {},
        Ec = {
          0: 200,
          1223: 204
        },
        Fc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
      for (var a in Dc)
        Dc[a]();
    }), k.cors = !!Fc && "withCredentials" in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function(a) {
      var b;
      return k.cors || Fc && !a.crossDomain ? {
        send: function(c, d) {
          var e,
              f = a.xhr(),
              g = ++Cc;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
            for (e in a.xhrFields)
              f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
          for (e in c)
            f.setRequestHeader(e, c[e]);
          b = function(a) {
            return function() {
              b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()));
            };
          }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
          try {
            f.send(a.hasContent && a.data || null);
          } catch (h) {
            if (b)
              throw h;
          }
        },
        abort: function() {
          b && b();
        }
      } : void 0;
    }), n.ajaxSetup({
      accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
      contents: {script: /(?:java|ecma)script/},
      converters: {"text script": function(a) {
          return n.globalEval(a), a;
        }}
    }), n.ajaxPrefilter("script", function(a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
        var b,
            c;
        return {
          send: function(d, e) {
            b = n("<script>").prop({
              async: !0,
              charset: a.scriptCharset,
              src: a.url
            }).on("load error", c = function(a) {
              b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
            }), l.head.appendChild(b[0]);
          },
          abort: function() {
            c && c();
          }
        };
      }
    });
    var Gc = [],
        Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var a = Gc.pop() || n.expando + "_" + cc++;
        return this[a] = !0, a;
      }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
      var e,
          f,
          g,
          h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
      return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
        return g || n.error(e + " was not called"), g[0];
      }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
        g = arguments;
      }, d.always(function() {
        a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
      }), "script") : void 0;
    }), n.parseHTML = function(a, b, c) {
      if (!a || "string" != typeof a)
        return null;
      "boolean" == typeof b && (c = b, b = !1), b = b || l;
      var d = v.exec(a),
          e = !c && [];
      return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
    };
    var Ic = n.fn.load;
    n.fn.load = function(a, b, c) {
      if ("string" != typeof a && Ic)
        return Ic.apply(this, arguments);
      var d,
          e,
          f,
          g = this,
          h = a.indexOf(" ");
      return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
        url: a,
        type: e,
        dataType: "html",
        data: b
      }).done(function(a) {
        f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
      }).complete(c && function(a, b) {
        g.each(c, f || [a.responseText, b, a]);
      }), this;
    }, n.expr.filters.animated = function(a) {
      return n.grep(n.timers, function(b) {
        return a === b.elem;
      }).length;
    };
    var Jc = a.document.documentElement;
    function Kc(a) {
      return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    n.offset = {setOffset: function(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = n.css(a, "position"),
            l = n(a),
            m = {};
        "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
      }}, n.fn.extend({
      offset: function(a) {
        if (arguments.length)
          return void 0 === a ? this : this.each(function(b) {
            n.offset.setOffset(this, a, b);
          });
        var b,
            c,
            d = this[0],
            e = {
              top: 0,
              left: 0
            },
            f = d && d.ownerDocument;
        if (f)
          return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
            top: e.top + c.pageYOffset - b.clientTop,
            left: e.left + c.pageXOffset - b.clientLeft
          }) : e;
      },
      position: function() {
        if (this[0]) {
          var a,
              b,
              c = this[0],
              d = {
                top: 0,
                left: 0
              };
          return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
            top: b.top - d.top - n.css(c, "marginTop", !0),
            left: b.left - d.left - n.css(c, "marginLeft", !0)
          };
        }
      },
      offsetParent: function() {
        return this.map(function() {
          var a = this.offsetParent || Jc;
          while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
            a = a.offsetParent;
          return a || Jc;
        });
      }
    }), n.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(b, c) {
      var d = "pageYOffset" === c;
      n.fn[b] = function(e) {
        return J(this, function(b, e, f) {
          var g = Kc(b);
          return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
        }, b, e, arguments.length, null);
      };
    }), n.each(["top", "left"], function(a, b) {
      n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
        return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0;
      });
    }), n.each({
      Height: "height",
      Width: "width"
    }, function(a, b) {
      n.each({
        padding: "inner" + a,
        content: b,
        "": "outer" + a
      }, function(c, d) {
        n.fn[d] = function(d, e) {
          var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
          return J(this, function(b, c, d) {
            var e;
            return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
          }, b, f ? d : void 0, f, null);
        };
      });
    }), n.fn.size = function() {
      return this.length;
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && System.register("github:components/jquery@2.1.1/jquery.min", [], false, function(__require, __exports, __module) {
      return (function() {
        return n;
      }).call(this);
    });
    var Lc = a.jQuery,
        Mc = a.$;
    return n.noConflict = function(b) {
      return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n;
    }, typeof b === U && (a.jQuery = a.$ = n), n;
  });
  })();
(function() {
function define(){};  define.amd = {};
  (function(root, factory) {
    if (typeof exports === "object" && exports) {
      factory(exports);
    } else {
      var mustache = {};
      factory(mustache);
      if (typeof define === "function" && define.amd) {
        ;
      } else {
        root.Mustache = mustache;
      }
    }
  }(this, function(mustache) {
    var RegExp_test = RegExp.prototype.test;
    function testRegExp(re, string) {
      return RegExp_test.call(re, string);
    }
    var nonSpaceRe = /\S/;
    function isWhitespace(string) {
      return !testRegExp(nonSpaceRe, string);
    }
    var Object_toString = Object.prototype.toString;
    var isArray = Array.isArray || function(object) {
      return Object_toString.call(object) === '[object Array]';
    };
    function isFunction(object) {
      return typeof object === 'function';
    }
    function escapeRegExp(string) {
      return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
      "'": '&#39;',
      "/": '&#x2F;'
    };
    function escapeHtml(string) {
      return String(string).replace(/[&<>"'\/]/g, function(s) {
        return entityMap[s];
      });
    }
    function escapeTags(tags) {
      if (!isArray(tags) || tags.length !== 2) {
        throw new Error('Invalid tags: ' + tags);
      }
      return [new RegExp(escapeRegExp(tags[0]) + "\\s*"), new RegExp("\\s*" + escapeRegExp(tags[1]))];
    }
    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var equalsRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;
    function parseTemplate(template, tags) {
      tags = tags || mustache.tags;
      template = template || '';
      if (typeof tags === 'string') {
        tags = tags.split(spaceRe);
      }
      var tagRes = escapeTags(tags);
      var scanner = new Scanner(template);
      var sections = [];
      var tokens = [];
      var spaces = [];
      var hasTag = false;
      var nonSpace = false;
      function stripSpace() {
        if (hasTag && !nonSpace) {
          while (spaces.length) {
            delete tokens[spaces.pop()];
          }
        } else {
          spaces = [];
        }
        hasTag = false;
        nonSpace = false;
      }
      var start,
          type,
          value,
          chr,
          token,
          openSection;
      while (!scanner.eos()) {
        start = scanner.pos;
        value = scanner.scanUntil(tagRes[0]);
        if (value) {
          for (var i = 0,
              len = value.length; i < len; ++i) {
            chr = value.charAt(i);
            if (isWhitespace(chr)) {
              spaces.push(tokens.length);
            } else {
              nonSpace = true;
            }
            tokens.push(['text', chr, start, start + 1]);
            start += 1;
            if (chr === '\n') {
              stripSpace();
            }
          }
        }
        if (!scanner.scan(tagRes[0]))
          break;
        hasTag = true;
        type = scanner.scan(tagRe) || 'name';
        scanner.scan(whiteRe);
        if (type === '=') {
          value = scanner.scanUntil(equalsRe);
          scanner.scan(equalsRe);
          scanner.scanUntil(tagRes[1]);
        } else if (type === '{') {
          value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
          scanner.scan(curlyRe);
          scanner.scanUntil(tagRes[1]);
          type = '&';
        } else {
          value = scanner.scanUntil(tagRes[1]);
        }
        if (!scanner.scan(tagRes[1])) {
          throw new Error('Unclosed tag at ' + scanner.pos);
        }
        token = [type, value, start, scanner.pos];
        tokens.push(token);
        if (type === '#' || type === '^') {
          sections.push(token);
        } else if (type === '/') {
          openSection = sections.pop();
          if (!openSection) {
            throw new Error('Unopened section "' + value + '" at ' + start);
          }
          if (openSection[1] !== value) {
            throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
          }
        } else if (type === 'name' || type === '{' || type === '&') {
          nonSpace = true;
        } else if (type === '=') {
          tagRes = escapeTags(tags = value.split(spaceRe));
        }
      }
      openSection = sections.pop();
      if (openSection) {
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
      }
      return nestTokens(squashTokens(tokens));
    }
    function squashTokens(tokens) {
      var squashedTokens = [];
      var token,
          lastToken;
      for (var i = 0,
          len = tokens.length; i < len; ++i) {
        token = tokens[i];
        if (token) {
          if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
            lastToken[1] += token[1];
            lastToken[3] = token[3];
          } else {
            squashedTokens.push(token);
            lastToken = token;
          }
        }
      }
      return squashedTokens;
    }
    function nestTokens(tokens) {
      var nestedTokens = [];
      var collector = nestedTokens;
      var sections = [];
      var token,
          section;
      for (var i = 0,
          len = tokens.length; i < len; ++i) {
        token = tokens[i];
        switch (token[0]) {
          case '#':
          case '^':
            collector.push(token);
            sections.push(token);
            collector = token[4] = [];
            break;
          case '/':
            section = sections.pop();
            section[5] = token[2];
            collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
            break;
          default:
            collector.push(token);
        }
      }
      return nestedTokens;
    }
    function Scanner(string) {
      this.string = string;
      this.tail = string;
      this.pos = 0;
    }
    Scanner.prototype.eos = function() {
      return this.tail === "";
    };
    Scanner.prototype.scan = function(re) {
      var match = this.tail.match(re);
      if (match && match.index === 0) {
        var string = match[0];
        this.tail = this.tail.substring(string.length);
        this.pos += string.length;
        return string;
      }
      return "";
    };
    Scanner.prototype.scanUntil = function(re) {
      var index = this.tail.search(re),
          match;
      switch (index) {
        case -1:
          match = this.tail;
          this.tail = "";
          break;
        case 0:
          match = "";
          break;
        default:
          match = this.tail.substring(0, index);
          this.tail = this.tail.substring(index);
      }
      this.pos += match.length;
      return match;
    };
    function Context(view, parentContext) {
      this.view = view == null ? {} : view;
      this.cache = {'.': this.view};
      this.parent = parentContext;
    }
    Context.prototype.push = function(view) {
      return new Context(view, this);
    };
    Context.prototype.lookup = function(name) {
      var value;
      if (name in this.cache) {
        value = this.cache[name];
      } else {
        var context = this;
        while (context) {
          if (name.indexOf('.') > 0) {
            value = context.view;
            var names = name.split('.'),
                i = 0;
            while (value != null && i < names.length) {
              value = value[names[i++]];
            }
          } else {
            value = context.view[name];
          }
          if (value != null)
            break;
          context = context.parent;
        }
        this.cache[name] = value;
      }
      if (isFunction(value)) {
        value = value.call(this.view);
      }
      return value;
    };
    function Writer() {
      this.cache = {};
    }
    Writer.prototype.clearCache = function() {
      this.cache = {};
    };
    Writer.prototype.parse = function(template, tags) {
      var cache = this.cache;
      var tokens = cache[template];
      if (tokens == null) {
        tokens = cache[template] = parseTemplate(template, tags);
      }
      return tokens;
    };
    Writer.prototype.render = function(template, view, partials) {
      var tokens = this.parse(template);
      var context = (view instanceof Context) ? view : new Context(view);
      return this.renderTokens(tokens, context, partials, template);
    };
    Writer.prototype.renderTokens = function(tokens, context, partials, originalTemplate) {
      var buffer = '';
      var self = this;
      function subRender(template) {
        return self.render(template, context, partials);
      }
      var token,
          value;
      for (var i = 0,
          len = tokens.length; i < len; ++i) {
        token = tokens[i];
        switch (token[0]) {
          case '#':
            value = context.lookup(token[1]);
            if (!value)
              continue;
            if (isArray(value)) {
              for (var j = 0,
                  jlen = value.length; j < jlen; ++j) {
                buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
              }
            } else if (typeof value === 'object' || typeof value === 'string') {
              buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
            } else if (isFunction(value)) {
              if (typeof originalTemplate !== 'string') {
                throw new Error('Cannot use higher-order sections without the original template');
              }
              value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
              if (value != null)
                buffer += value;
            } else {
              buffer += this.renderTokens(token[4], context, partials, originalTemplate);
            }
            break;
          case '^':
            value = context.lookup(token[1]);
            if (!value || (isArray(value) && value.length === 0)) {
              buffer += this.renderTokens(token[4], context, partials, originalTemplate);
            }
            break;
          case '>':
            if (!partials)
              continue;
            value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
            if (value != null)
              buffer += this.renderTokens(this.parse(value), context, partials, value);
            break;
          case '&':
            value = context.lookup(token[1]);
            if (value != null)
              buffer += value;
            break;
          case 'name':
            value = context.lookup(token[1]);
            if (value != null)
              buffer += mustache.escape(value);
            break;
          case 'text':
            buffer += token[1];
            break;
        }
      }
      return buffer;
    };
    mustache.name = "mustache.js";
    mustache.version = "0.8.1";
    mustache.tags = ["{{", "}}"];
    var defaultWriter = new Writer();
    mustache.clearCache = function() {
      return defaultWriter.clearCache();
    };
    mustache.parse = function(template, tags) {
      return defaultWriter.parse(template, tags);
    };
    mustache.render = function(template, view, partials) {
      return defaultWriter.render(template, view, partials);
    };
    mustache.to_html = function(template, view, partials, send) {
      var result = mustache.render(template, view, partials);
      if (isFunction(send)) {
        send(result);
      } else {
        return result;
      }
    };
    mustache.escape = escapeHtml;
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer;
  }));
  })();
System.register("app/backbone-extended", ["github:components/jquery@2.1.1", "npm:backbone@1.1.2"], function($__export) {
  "use strict";
  var __moduleName = "app/backbone-extended";
  var $,
      Backbone;
  return {
    setters: [function(m) {
      $ = m.default;
    }, function(m) {
      Backbone = m.default;
    }],
    execute: function() {
      Backbone.$ = $;
      $__export('default', Backbone);
    }
  };
});

System.register("app/hello-backbone", ["app/backbone-extended"], function($__export) {
  "use strict";
  var __moduleName = "app/hello-backbone";
  var Backbone,
      c,
      V;
  return {
    setters: [function(m) {
      Backbone = m.default;
    }],
    execute: function() {
      c = new Backbone.Collection([{
        id: 1,
        s: 'Back'
      }, {
        id: 2,
        s: 'bone'
      }]);
      V = Backbone.View.extend({say: function(msg) {
          return this.collection.pluck('s').join('') + ' says: ' + msg;
        }});
      $__export('default', new V({collection: c}));
    }
  };
});

System.register("app/main", ["app/hello-es6", "app/hello-amd", "app/hello-cjs", "app/hello-backbone", "github:janl/mustache.js@0.8.2", "app/template.text!github:systemjs/plugin-text@0.0.2"], function($__export) {
  "use strict";
  var __moduleName = "app/main";
  var Greeter,
      amd,
      cjs,
      bb,
      Mustache,
      txt,
      showMsg,
      greeter;
  return {
    setters: [function(m) {
      Greeter = m.Greeter;
    }, function(m) {
      amd = m.default;
    }, function(m) {
      cjs = m.default;
    }, function(m) {
      bb = m.default;
    }, function(m) {
      Mustache = m.default;
    }, function(m) {
      txt = m.default;
    }],
    execute: function() {
      showMsg = (function(id, msg) {
        return document.getElementById(id).textContent = msg;
      });
      greeter = new Greeter();
      showMsg('es6', greeter.say('hell yeah!'));
      showMsg('amd', amd.say('async is great!'));
      showMsg('commonjs', cjs.say('npm modules rule!'));
      showMsg('bb', bb.say('MV*!'));
      showMsg('mustache', Mustache.render(txt, {msg: 'interpolate!'}));
    }
  };
});

System.register("app/hello-cjs", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "app/hello-cjs.js";
  var __dirname = "app";
  var obj = {
    say: function speak(msg){
      return 'CommonJS says: ' + msg;
    }
  };
  
  module.exports = obj;
  
  global.define = __define;
  return module.exports;
});

System.register("npm:underscore@1.7.0/underscore", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/underscore@1.7.0/underscore.js";
  var __dirname = "jspm_packages/npm/underscore@1.7.0";
  /* */
  "format cjs";(function(){var t=this,e=t._,n=Array.prototype,r=Object.prototype,i=Function.prototype,s=n.push,a=n.slice,u=n.concat,o=r.toString,c=r.hasOwnProperty,l=Array.isArray,h=Object.keys,f=i.bind,p=function(t){return t instanceof p?t:this instanceof p?void(this._wrapped=t):new p(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=p),exports._=p):t._=p,p.VERSION="1.7.0";var d=function(t,e,n){if(void 0===e)return t;switch(null==n?3:n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,s){return t.call(e,n,r,i,s)}}return function(){return t.apply(e,arguments)}};p.iteratee=function(t,e,n){return null==t?p.identity:p.isFunction(t)?d(t,e,n):p.isObject(t)?p.matches(t):p.property(t)},p.each=p.forEach=function(t,e,n){if(null==t)return t;e=d(e,n);var r,i=t.length;if(i===+i)for(r=0;i>r;r++)e(t[r],r,t);else{var s=p.keys(t);for(r=0,i=s.length;i>r;r++)e(t[s[r]],s[r],t)}return t},p.map=p.collect=function(t,e,n){if(null==t)return[];e=p.iteratee(e,n);for(var r,i=t.length!==+t.length&&p.keys(t),s=(i||t).length,a=Array(s),u=0;s>u;u++)r=i?i[u]:u,a[u]=e(t[r],r,t);return a};var g="Reduce of empty array with no initial value";p.reduce=p.foldl=p.inject=function(t,e,n,r){null==t&&(t=[]),e=d(e,r,4);var i,s=t.length!==+t.length&&p.keys(t),a=(s||t).length,u=0;if(arguments.length<3){if(!a)throw new TypeError(g);n=t[s?s[u++]:u++]}for(;a>u;u++)i=s?s[u]:u,n=e(n,t[i],i,t);return n},p.reduceRight=p.foldr=function(t,e,n,r){null==t&&(t=[]),e=d(e,r,4);var i,s=t.length!==+t.length&&p.keys(t),a=(s||t).length;if(arguments.length<3){if(!a)throw new TypeError(g);n=t[s?s[--a]:--a]}for(;a--;)i=s?s[a]:a,n=e(n,t[i],i,t);return n},p.find=p.detect=function(t,e,n){var r;return e=p.iteratee(e,n),p.some(t,function(t,n,i){return e(t,n,i)?(r=t,!0):void 0}),r},p.filter=p.select=function(t,e,n){var r=[];return null==t?r:(e=p.iteratee(e,n),p.each(t,function(t,n,i){e(t,n,i)&&r.push(t)}),r)},p.reject=function(t,e,n){return p.filter(t,p.negate(p.iteratee(e)),n)},p.every=p.all=function(t,e,n){if(null==t)return!0;e=p.iteratee(e,n);var r,i,s=t.length!==+t.length&&p.keys(t),a=(s||t).length;for(r=0;a>r;r++)if(i=s?s[r]:r,!e(t[i],i,t))return!1;return!0},p.some=p.any=function(t,e,n){if(null==t)return!1;e=p.iteratee(e,n);var r,i,s=t.length!==+t.length&&p.keys(t),a=(s||t).length;for(r=0;a>r;r++)if(i=s?s[r]:r,e(t[i],i,t))return!0;return!1},p.contains=p.include=function(t,e){return null==t?!1:(t.length!==+t.length&&(t=p.values(t)),p.indexOf(t,e)>=0)},p.invoke=function(t,e){var n=a.call(arguments,2),r=p.isFunction(e);return p.map(t,function(t){return(r?e:t[e]).apply(t,n)})},p.pluck=function(t,e){return p.map(t,p.property(e))},p.where=function(t,e){return p.filter(t,p.matches(e))},p.findWhere=function(t,e){return p.find(t,p.matches(e))},p.max=function(t,e,n){var r,i,s=-1/0,a=-1/0;if(null==e&&null!=t){t=t.length===+t.length?t:p.values(t);for(var u=0,o=t.length;o>u;u++)r=t[u],r>s&&(s=r)}else e=p.iteratee(e,n),p.each(t,function(t,n,r){i=e(t,n,r),(i>a||i===-1/0&&s===-1/0)&&(s=t,a=i)});return s},p.min=function(t,e,n){var r,i,s=1/0,a=1/0;if(null==e&&null!=t){t=t.length===+t.length?t:p.values(t);for(var u=0,o=t.length;o>u;u++)r=t[u],s>r&&(s=r)}else e=p.iteratee(e,n),p.each(t,function(t,n,r){i=e(t,n,r),(a>i||1/0===i&&1/0===s)&&(s=t,a=i)});return s},p.shuffle=function(t){for(var e,n=t&&t.length===+t.length?t:p.values(t),r=n.length,i=Array(r),s=0;r>s;s++)e=p.random(0,s),e!==s&&(i[s]=i[e]),i[e]=n[s];return i},p.sample=function(t,e,n){return null==e||n?(t.length!==+t.length&&(t=p.values(t)),t[p.random(t.length-1)]):p.shuffle(t).slice(0,Math.max(0,e))},p.sortBy=function(t,e,n){return e=p.iteratee(e,n),p.pluck(p.map(t,function(t,n,r){return{value:t,index:n,criteria:e(t,n,r)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return t.index-e.index}),"value")};var v=function(t){return function(e,n,r){var i={};return n=p.iteratee(n,r),p.each(e,function(r,s){var a=n(r,s,e);t(i,r,a)}),i}};p.groupBy=v(function(t,e,n){p.has(t,n)?t[n].push(e):t[n]=[e]}),p.indexBy=v(function(t,e,n){t[n]=e}),p.countBy=v(function(t,e,n){p.has(t,n)?t[n]++:t[n]=1}),p.sortedIndex=function(t,e,n,r){n=p.iteratee(n,r,1);for(var i=n(e),s=0,a=t.length;a>s;){var u=s+a>>>1;n(t[u])<i?s=u+1:a=u}return s},p.toArray=function(t){return t?p.isArray(t)?a.call(t):t.length===+t.length?p.map(t,p.identity):p.values(t):[]},p.size=function(t){return null==t?0:t.length===+t.length?t.length:p.keys(t).length},p.partition=function(t,e,n){e=p.iteratee(e,n);var r=[],i=[];return p.each(t,function(t,n,s){(e(t,n,s)?r:i).push(t)}),[r,i]},p.first=p.head=p.take=function(t,e,n){return null==t?void 0:null==e||n?t[0]:0>e?[]:a.call(t,0,e)},p.initial=function(t,e,n){return a.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))},p.last=function(t,e,n){return null==t?void 0:null==e||n?t[t.length-1]:a.call(t,Math.max(t.length-e,0))},p.rest=p.tail=p.drop=function(t,e,n){return a.call(t,null==e||n?1:e)},p.compact=function(t){return p.filter(t,p.identity)};var m=function(t,e,n,r){if(e&&p.every(t,p.isArray))return u.apply(r,t);for(var i=0,a=t.length;a>i;i++){var o=t[i];p.isArray(o)||p.isArguments(o)?e?s.apply(r,o):m(o,e,n,r):n||r.push(o)}return r};p.flatten=function(t,e){return m(t,e,!1,[])},p.without=function(t){return p.difference(t,a.call(arguments,1))},p.uniq=p.unique=function(t,e,n,r){if(null==t)return[];p.isBoolean(e)||(r=n,n=e,e=!1),null!=n&&(n=p.iteratee(n,r));for(var i=[],s=[],a=0,u=t.length;u>a;a++){var o=t[a];if(e)a&&s===o||i.push(o),s=o;else if(n){var c=n(o,a,t);p.indexOf(s,c)<0&&(s.push(c),i.push(o))}else p.indexOf(i,o)<0&&i.push(o)}return i},p.union=function(){return p.uniq(m(arguments,!0,!0,[]))},p.intersection=function(t){if(null==t)return[];for(var e=[],n=arguments.length,r=0,i=t.length;i>r;r++){var s=t[r];if(!p.contains(e,s)){for(var a=1;n>a&&p.contains(arguments[a],s);a++);a===n&&e.push(s)}}return e},p.difference=function(t){var e=m(a.call(arguments,1),!0,!0,[]);return p.filter(t,function(t){return!p.contains(e,t)})},p.zip=function(t){if(null==t)return[];for(var e=p.max(arguments,"length").length,n=Array(e),r=0;e>r;r++)n[r]=p.pluck(arguments,r);return n},p.object=function(t,e){if(null==t)return{};for(var n={},r=0,i=t.length;i>r;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},p.indexOf=function(t,e,n){if(null==t)return-1;var r=0,i=t.length;if(n){if("number"!=typeof n)return r=p.sortedIndex(t,e),t[r]===e?r:-1;r=0>n?Math.max(0,i+n):n}for(;i>r;r++)if(t[r]===e)return r;return-1},p.lastIndexOf=function(t,e,n){if(null==t)return-1;var r=t.length;for("number"==typeof n&&(r=0>n?r+n+1:Math.min(r,n+1));--r>=0;)if(t[r]===e)return r;return-1},p.range=function(t,e,n){arguments.length<=1&&(e=t||0,t=0),n=n||1;for(var r=Math.max(Math.ceil((e-t)/n),0),i=Array(r),s=0;r>s;s++,t+=n)i[s]=t;return i};var y=function(){};p.bind=function(t,e){var n,r;if(f&&t.bind===f)return f.apply(t,a.call(arguments,1));if(!p.isFunction(t))throw new TypeError("Bind must be called on a function");return n=a.call(arguments,2),r=function(){if(!(this instanceof r))return t.apply(e,n.concat(a.call(arguments)));y.prototype=t.prototype;var i=new y;y.prototype=null;var s=t.apply(i,n.concat(a.call(arguments)));return p.isObject(s)?s:i}},p.partial=function(t){var e=a.call(arguments,1);return function(){for(var n=0,r=e.slice(),i=0,s=r.length;s>i;i++)r[i]===p&&(r[i]=arguments[n++]);for(;n<arguments.length;)r.push(arguments[n++]);return t.apply(this,r)}},p.bindAll=function(t){var e,n,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(e=1;r>e;e++)n=arguments[e],t[n]=p.bind(t[n],t);return t},p.memoize=function(t,e){var n=function(r){var i=n.cache,s=e?e.apply(this,arguments):r;return p.has(i,s)||(i[s]=t.apply(this,arguments)),i[s]};return n.cache={},n},p.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},p.defer=function(t){return p.delay.apply(p,[t,1].concat(a.call(arguments,1)))},p.throttle=function(t,e,n){var r,i,s,a=null,u=0;n||(n={});var o=function(){u=n.leading===!1?0:p.now(),a=null,s=t.apply(r,i),a||(r=i=null)};return function(){var c=p.now();u||n.leading!==!1||(u=c);var l=e-(c-u);return r=this,i=arguments,0>=l||l>e?(clearTimeout(a),a=null,u=c,s=t.apply(r,i),a||(r=i=null)):a||n.trailing===!1||(a=setTimeout(o,l)),s}},p.debounce=function(t,e,n){var r,i,s,a,u,o=function(){var c=p.now()-a;e>c&&c>0?r=setTimeout(o,e-c):(r=null,n||(u=t.apply(s,i),r||(s=i=null)))};return function(){s=this,i=arguments,a=p.now();var c=n&&!r;return r||(r=setTimeout(o,e)),c&&(u=t.apply(s,i),s=i=null),u}},p.wrap=function(t,e){return p.partial(e,t)},p.negate=function(t){return function(){return!t.apply(this,arguments)}},p.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},p.after=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}},p.before=function(t,e){var n;return function(){return--t>0?n=e.apply(this,arguments):e=null,n}},p.once=p.partial(p.before,2),p.keys=function(t){if(!p.isObject(t))return[];if(h)return h(t);var e=[];for(var n in t)p.has(t,n)&&e.push(n);return e},p.values=function(t){for(var e=p.keys(t),n=e.length,r=Array(n),i=0;n>i;i++)r[i]=t[e[i]];return r},p.pairs=function(t){for(var e=p.keys(t),n=e.length,r=Array(n),i=0;n>i;i++)r[i]=[e[i],t[e[i]]];return r},p.invert=function(t){for(var e={},n=p.keys(t),r=0,i=n.length;i>r;r++)e[t[n[r]]]=n[r];return e},p.functions=p.methods=function(t){var e=[];for(var n in t)p.isFunction(t[n])&&e.push(n);return e.sort()},p.extend=function(t){if(!p.isObject(t))return t;for(var e,n,r=1,i=arguments.length;i>r;r++){e=arguments[r];for(n in e)c.call(e,n)&&(t[n]=e[n])}return t},p.pick=function(t,e,n){var r,i={};if(null==t)return i;if(p.isFunction(e)){e=d(e,n);for(r in t){var s=t[r];e(s,r,t)&&(i[r]=s)}}else{var o=u.apply([],a.call(arguments,1));t=new Object(t);for(var c=0,l=o.length;l>c;c++)r=o[c],r in t&&(i[r]=t[r])}return i},p.omit=function(t,e,n){if(p.isFunction(e))e=p.negate(e);else{var r=p.map(u.apply([],a.call(arguments,1)),String);e=function(t,e){return!p.contains(r,e)}}return p.pick(t,e,n)},p.defaults=function(t){if(!p.isObject(t))return t;for(var e=1,n=arguments.length;n>e;e++){var r=arguments[e];for(var i in r)void 0===t[i]&&(t[i]=r[i])}return t},p.clone=function(t){return p.isObject(t)?p.isArray(t)?t.slice():p.extend({},t):t},p.tap=function(t,e){return e(t),t};var _=function(t,e,n,r){if(t===e)return 0!==t||1/t===1/e;if(null==t||null==e)return t===e;t instanceof p&&(t=t._wrapped),e instanceof p&&(e=e._wrapped);var i=o.call(t);if(i!==o.call(e))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!==+t?+e!==+e:0===+t?1/+t===1/e:+t===+e;case"[object Date]":case"[object Boolean]":return+t===+e}if("object"!=typeof t||"object"!=typeof e)return!1;for(var s=n.length;s--;)if(n[s]===t)return r[s]===e;var a=t.constructor,u=e.constructor;if(a!==u&&"constructor"in t&&"constructor"in e&&!(p.isFunction(a)&&a instanceof a&&p.isFunction(u)&&u instanceof u))return!1;n.push(t),r.push(e);var c,l;if("[object Array]"===i){if(c=t.length,l=c===e.length)for(;c--&&(l=_(t[c],e[c],n,r)););}else{var h,f=p.keys(t);if(c=f.length,l=p.keys(e).length===c)for(;c--&&(h=f[c],l=p.has(e,h)&&_(t[h],e[h],n,r)););}return n.pop(),r.pop(),l};p.isEqual=function(t,e){return _(t,e,[],[])},p.isEmpty=function(t){if(null==t)return!0;if(p.isArray(t)||p.isString(t)||p.isArguments(t))return 0===t.length;for(var e in t)if(p.has(t,e))return!1;return!0},p.isElement=function(t){return!(!t||1!==t.nodeType)},p.isArray=l||function(t){return"[object Array]"===o.call(t)},p.isObject=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},p.each(["Arguments","Function","String","Number","Date","RegExp"],function(t){p["is"+t]=function(e){return o.call(e)==="[object "+t+"]"}}),p.isArguments(arguments)||(p.isArguments=function(t){return p.has(t,"callee")}),"function"!=typeof/./&&(p.isFunction=function(t){return"function"==typeof t||!1}),p.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},p.isNaN=function(t){return p.isNumber(t)&&t!==+t},p.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"===o.call(t)},p.isNull=function(t){return null===t},p.isUndefined=function(t){return void 0===t},p.has=function(t,e){return null!=t&&c.call(t,e)},p.noConflict=function(){return t._=e,this},p.identity=function(t){return t},p.constant=function(t){return function(){return t}},p.noop=function(){},p.property=function(t){return function(e){return e[t]}},p.matches=function(t){var e=p.pairs(t),n=e.length;return function(t){if(null==t)return!n;t=new Object(t);for(var r=0;n>r;r++){var i=e[r],s=i[0];if(i[1]!==t[s]||!(s in t))return!1}return!0}},p.times=function(t,e,n){var r=Array(Math.max(0,t));e=d(e,n,1);for(var i=0;t>i;i++)r[i]=e(i);return r},p.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},p.now=Date.now||function(){return(new Date).getTime()};var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=p.invert(b),x=function(t){var e=function(e){return t[e]},n="(?:"+p.keys(t).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,e):t}};p.escape=x(b),p.unescape=x(w),p.result=function(t,e){if(null==t)return void 0;var n=t[e];return p.isFunction(n)?t[e]():n};var E=0;p.uniqueId=function(t){var e=++E+"";return t?t+e:e},p.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var k=/(.)^/,j={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},A=/\\|'|\r|\n|\u2028|\u2029/g,T=function(t){return"\\"+j[t]};p.template=function(t,e,n){!e&&n&&(e=n),e=p.defaults({},e,p.templateSettings);var r=RegExp([(e.escape||k).source,(e.interpolate||k).source,(e.evaluate||k).source].join("|")+"|$","g"),i=0,s="__p+='";t.replace(r,function(e,n,r,a,u){return s+=t.slice(i,u).replace(A,T),i=u+e.length,n?s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?s+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(s+="';\n"+a+"\n__p+='"),e}),s+="';\n",e.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var a=new Function(e.variable||"obj","_",s)}catch(u){throw u.source=s,u}var o=function(t){return a.call(this,t,p)},c=e.variable||"obj";return o.source="function("+c+"){\n"+s+"}",o},p.chain=function(t){var e=p(t);return e._chain=!0,e};var S=function(t){return this._chain?p(t).chain():t};p.mixin=function(t){p.each(p.functions(t),function(e){var n=p[e]=t[e];p.prototype[e]=function(){var t=[this._wrapped];return s.apply(t,arguments),S.call(this,n.apply(p,t))}})},p.mixin(p),p.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=n[t];p.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0],S.call(this,n)}}),p.each(["concat","join","slice"],function(t){var e=n[t];p.prototype[t]=function(){return S.call(this,e.apply(this._wrapped,arguments))}}),p.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return p})}).call(this);
  //# sourceMappingURL=underscore.js.map
  global.define = __define;
  return module.exports;
});

System.register("app/template.text!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "app/template.text";
  var __dirname = "app";
  module.exports = "Mustache says: {{msg}}";
  global.define = __define;
  return module.exports;
});

System.register("github:components/jquery@2.1.1", ["github:components/jquery@2.1.1/jquery.min"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/github/components/jquery@2.1.1.js";
  var __dirname = "jspm_packages/github/components";
  module.exports = require("github:components/jquery@2.1.1/jquery.min");
  
  global.define = __define;
  return module.exports;
});

System.register("npm:underscore@1.7.0", ["npm:underscore@1.7.0/underscore"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/underscore@1.7.0.js";
  var __dirname = "jspm_packages/npm";
  module.exports = require("npm:underscore@1.7.0/underscore");
  
  global.define = __define;
  return module.exports;
});

System.register("github:janl/mustache.js@0.8.2", ["github:janl/mustache.js@0.8.2/mustache"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/github/janl/mustache.js@0.8.2.js";
  var __dirname = "jspm_packages/github/janl";
  module.exports = require("github:janl/mustache.js@0.8.2/mustache");
  
  global.define = __define;
  return module.exports;
});

System.register("npm:backbone@1.1.2/backbone", ["underscore"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/backbone@1.1.2/backbone.js";
  var __dirname = "jspm_packages/npm/backbone@1.1.2";
  /* */
  "format cjs";!function(t,e){if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(i,n,s){t.Backbone=e(t,s,i,n)});else if("undefined"!=typeof exports){var i=require("underscore");e(t,exports,i)}else t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}(this,function(t,e,i,n){{var s=t.Backbone,r=[],a=(r.push,r.slice);r.splice}e.VERSION="1.1.2",e.$=n,e.noConflict=function(){return t.Backbone=s,this},e.emulateHTTP=!1,e.emulateJSON=!1;var o=e.Events={on:function(t,e,i){if(!u(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var n=this._events[t]||(this._events[t]=[]);return n.push({callback:e,context:i,ctx:i||this}),this},once:function(t,e,n){if(!u(this,"once",t,[e,n])||!e)return this;var s=this,r=i.once(function(){s.off(t,r),e.apply(this,arguments)});return r._callback=e,this.on(t,r,n)},off:function(t,e,n){var s,r,a,o,h,c,l,d;if(!this._events||!u(this,"off",t,[e,n]))return this;if(!t&&!e&&!n)return this._events=void 0,this;for(o=t?[t]:i.keys(this._events),h=0,c=o.length;c>h;h++)if(t=o[h],a=this._events[t]){if(this._events[t]=s=[],e||n)for(l=0,d=a.length;d>l;l++)r=a[l],(e&&e!==r.callback&&e!==r.callback._callback||n&&n!==r.context)&&s.push(r);s.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=a.call(arguments,1);if(!u(this,"trigger",t,e))return this;var i=this._events[t],n=this._events.all;return i&&c(i,e),n&&c(n,arguments),this},stopListening:function(t,e,n){var s=this._listeningTo;if(!s)return this;var r=!e&&!n;n||"object"!=typeof e||(n=this),t&&((s={})[t._listenId]=t);for(var a in s)t=s[a],t.off(e,n,this),(r||i.isEmpty(t._events))&&delete this._listeningTo[a];return this}},h=/\s+/,u=function(t,e,i,n){if(!i)return!0;if("object"==typeof i){for(var s in i)t[e].apply(t,[s,i[s]].concat(n));return!1}if(h.test(i)){for(var r=i.split(h),a=0,o=r.length;o>a;a++)t[e].apply(t,[r[a]].concat(n));return!1}return!0},c=function(t,e){var i,n=-1,s=t.length,r=e[0],a=e[1],o=e[2];switch(e.length){case 0:for(;++n<s;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r);return;case 2:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a);return;case 3:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a,o);return;default:for(;++n<s;)(i=t[n]).callback.apply(i.ctx,e);return}},l={listenTo:"on",listenToOnce:"once"};i.each(l,function(t,e){o[e]=function(e,n,s){var r=this._listeningTo||(this._listeningTo={}),a=e._listenId||(e._listenId=i.uniqueId("l"));return r[a]=e,s||"object"!=typeof n||(s=this),e[t](n,s,this),this}}),o.bind=o.on,o.unbind=o.off,i.extend(e,o);var d=e.Model=function(t,e){var n=t||{};e||(e={}),this.cid=i.uniqueId("c"),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(n=this.parse(n,e)||{}),n=i.defaults({},n,i.result(this,"defaults")),this.set(n,e),this.changed={},this.initialize.apply(this,arguments)};i.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,n){var s,r,a,o,h,u,c,l;if(null==t)return this;if("object"==typeof t?(r=t,n=e):(r={})[t]=e,n||(n={}),!this._validate(r,n))return!1;a=n.unset,h=n.silent,o=[],u=this._changing,this._changing=!0,u||(this._previousAttributes=i.clone(this.attributes),this.changed={}),l=this.attributes,c=this._previousAttributes,this.idAttribute in r&&(this.id=r[this.idAttribute]);for(s in r)e=r[s],i.isEqual(l[s],e)||o.push(s),i.isEqual(c[s],e)?delete this.changed[s]:this.changed[s]=e,a?delete l[s]:l[s]=e;if(!h){o.length&&(this._pending=n);for(var d=0,f=o.length;f>d;d++)this.trigger("change:"+o[d],this,l[o[d]],n)}if(u)return this;if(!h)for(;this._pending;)n=this._pending,this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!i.isEmpty(this.changed):i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):!1;var e,n=!1,s=this._changing?this._previousAttributes:this.attributes;for(var r in t)i.isEqual(s[r],e=t[r])||((n||(n={}))[r]=e);return n},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=t?i.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=this,n=t.success;return t.success=function(i){return e.set(e.parse(i,t),t)?(n&&n(e,i,t),void e.trigger("sync",e,i,t)):!1},U(this,t),this.sync("read",this,t)},save:function(t,e,n){var s,r,a,o=this.attributes;if(null==t||"object"==typeof t?(s=t,n=e):(s={})[t]=e,n=i.extend({validate:!0},n),s&&!n.wait){if(!this.set(s,n))return!1}else if(!this._validate(s,n))return!1;s&&n.wait&&(this.attributes=i.extend({},o,s)),void 0===n.parse&&(n.parse=!0);var h=this,u=n.success;return n.success=function(t){h.attributes=o;var e=h.parse(t,n);return n.wait&&(e=i.extend(s||{},e)),i.isObject(e)&&!h.set(e,n)?!1:(u&&u(h,t,n),void h.trigger("sync",h,t,n))},U(this,n),r=this.isNew()?"create":n.patch?"patch":"update","patch"===r&&(n.attrs=s),a=this.sync(r,this,n),s&&n.wait&&(this.attributes=o),a},destroy:function(t){t=t?i.clone(t):{};var e=this,n=t.success,s=function(){e.trigger("destroy",e,e.collection,t)};if(t.success=function(i){(t.wait||e.isNew())&&s(),n&&n(e,i,t),e.isNew()||e.trigger("sync",e,i,t)},this.isNew())return t.success(),!1;U(this,t);var r=this.sync("delete",this,t);return t.wait||s(),r},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||C();return this.isNew()?t:t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;return n?(this.trigger("invalid",this,n,i.extend(e,{validationError:n})),!1):!0}});var f=["keys","values","pairs","invert","pick","omit"];i.each(f,function(t){d.prototype[t]=function(){var e=a.call(arguments);return e.unshift(this.attributes),i[t].apply(i,e)}});var p=e.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,i.extend({silent:!0},e))},g={add:!0,remove:!0,merge:!0},v={add:!0,remove:!1};i.extend(p.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:!1},e,v))},remove:function(t,e){var n=!i.isArray(t);t=n?[t]:i.clone(t),e||(e={});var s,r,a,o;for(s=0,r=t.length;r>s;s++)o=t[s]=this.get(t[s]),o&&(delete this._byId[o.id],delete this._byId[o.cid],a=this.indexOf(o),this.models.splice(a,1),this.length--,e.silent||(e.index=a,o.trigger("remove",o,this,e)),this._removeReference(o,e));return n?t[0]:t},set:function(t,e){e=i.defaults({},e,g),e.parse&&(t=this.parse(t,e));var n=!i.isArray(t);t=n?t?[t]:[]:i.clone(t);var s,r,a,o,h,u,c,l=e.at,f=this.model,p=this.comparator&&null==l&&e.sort!==!1,v=i.isString(this.comparator)?this.comparator:null,m=[],y=[],_={},b=e.add,w=e.merge,x=e.remove,E=!p&&b&&x?[]:!1;for(s=0,r=t.length;r>s;s++){if(h=t[s]||{},a=h instanceof d?o=h:h[f.prototype.idAttribute||"id"],u=this.get(a))x&&(_[u.cid]=!0),w&&(h=h===o?o.attributes:h,e.parse&&(h=u.parse(h,e)),u.set(h,e),p&&!c&&u.hasChanged(v)&&(c=!0)),t[s]=u;else if(b){if(o=t[s]=this._prepareModel(h,e),!o)continue;m.push(o),this._addReference(o,e)}o=u||o,!E||!o.isNew()&&_[o.id]||E.push(o),_[o.id]=!0}if(x){for(s=0,r=this.length;r>s;++s)_[(o=this.models[s]).cid]||y.push(o);y.length&&this.remove(y,e)}if(m.length||E&&E.length)if(p&&(c=!0),this.length+=m.length,null!=l)for(s=0,r=m.length;r>s;s++)this.models.splice(l+s,0,m[s]);else{E&&(this.models.length=0);var k=E||m;for(s=0,r=k.length;r>s;s++)this.models.push(k[s])}if(c&&this.sort({silent:!0}),!e.silent){for(s=0,r=m.length;r>s;s++)(o=m[s]).trigger("add",o,this,e);(c||E&&E.length)&&this.trigger("sort",this,e)}return n?t[0]:t},reset:function(t,e){e||(e={});for(var n=0,s=this.models.length;s>n;n++)this._removeReference(this.models[n],e);return e.previousModels=this.models,this._reset(),t=this.add(t,i.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t),e},slice:function(){return a.apply(this.models,arguments)},get:function(t){return null==t?void 0:this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){return i.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"](function(e){for(var i in t)if(t[i]!==e.get(i))return!1;return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return t||(t={}),i.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(i.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=t?i.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=t.success,n=this;return t.success=function(i){var s=t.reset?"reset":"set";n[s](i,t),e&&e(n,i,t),n.trigger("sync",n,i,t)},U(this,t),this.sync("read",this,t)},create:function(t,e){if(e=e?i.clone(e):{},!(t=this._prepareModel(t,e)))return!1;e.wait||this.add(t,e);var n=this,s=e.success;return e.success=function(t,i){e.wait&&n.add(t,e),s&&s(t,i,e)},t.save(null,e),t},parse:function(t){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof d)return t;e=e?i.clone(e):{},e.collection=this;var n=new this.model(t,e);return n.validationError?(this.trigger("invalid",this,n.validationError,e),!1):n},_addReference:function(t){this._byId[t.cid]=t,null!=t.id&&(this._byId[t.id]=t),t.collection||(t.collection=this),t.on("all",this._onModelEvent,this)},_removeReference:function(t){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){("add"!==t&&"remove"!==t||i===this)&&("destroy"===t&&this.remove(e,n),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))}});var m=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];i.each(m,function(t){p.prototype[t]=function(){var e=a.call(arguments);return e.unshift(this.models),i[t].apply(i,e)}});var y=["groupBy","countBy","sortBy","indexBy"];i.each(y,function(t){p.prototype[t]=function(e,n){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,n)}});var _=e.View=function(t){this.cid=i.uniqueId("view"),t||(t={}),i.extend(this,i.pick(t,w)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},b=/^(\S+)\s*(.*)$/,w=["model","collection","el","id","attributes","className","tagName","events"];i.extend(_.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,i){return this.$el&&this.undelegateEvents(),this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0],i!==!1&&this.delegateEvents(),this},delegateEvents:function(t){if(!t&&!(t=i.result(this,"events")))return this;this.undelegateEvents();for(var e in t){var n=t[e];if(i.isFunction(n)||(n=this[t[e]]),n){var s=e.match(b),r=s[1],a=s[2];n=i.bind(n,this),r+=".delegateEvents"+this.cid,""===a?this.$el.on(r,n):this.$el.on(r,a,n)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(i.result(this,"el"),!1);else{var t=i.extend({},i.result(this,"attributes"));this.id&&(t.id=i.result(this,"id")),this.className&&(t["class"]=i.result(this,"className"));var n=e.$("<"+i.result(this,"tagName")+">").attr(t);this.setElement(n,!1)}}}),e.sync=function(t,n,s){var r=E[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:r,dataType:"json"};if(s.url||(a.url=i.result(n,"url")||C()),null!=s.data||!n||"create"!==t&&"update"!==t&&"patch"!==t||(a.contentType="application/json",a.data=JSON.stringify(s.attrs||n.toJSON(s))),s.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),s.emulateHTTP&&("PUT"===r||"DELETE"===r||"PATCH"===r)){a.type="POST",s.emulateJSON&&(a.data._method=r);var o=s.beforeSend;s.beforeSend=function(t){return t.setRequestHeader("X-HTTP-Method-Override",r),o?o.apply(this,arguments):void 0}}"GET"===a.type||s.emulateJSON||(a.processData=!1),"PATCH"===a.type&&x&&(a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var h=s.xhr=e.ajax(i.extend(a,s));return n.trigger("request",n,h,s),h};var x=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),E={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var k=e.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},T=/\((.*?)\)/g,$=/(\(\?)?:\w+/g,S=/\*\w+/g,H=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(k.prototype,o,{initialize:function(){},route:function(t,n,s){i.isRegExp(t)||(t=this._routeToRegExp(t)),i.isFunction(n)&&(s=n,n=""),s||(s=this[n]);var r=this;return e.history.route(t,function(i){var a=r._extractParameters(t,i);r.execute(s,a),r.trigger.apply(r,["route:"+n].concat(a)),r.trigger("route",n,a),e.history.trigger("route",r,n,a)}),this},execute:function(t,e){t&&t.apply(this,e)},navigate:function(t,i){return e.history.navigate(t,i),this},_bindRoutes:function(){if(this.routes){this.routes=i.result(this,"routes");for(var t,e=i.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(H,"\\$&").replace(T,"(?:$1)?").replace($,function(t,e){return e?t:"([^/?]+)"}).replace(S,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){return e===n.length-1?t||null:t?decodeURIComponent(t):null})}});var A=e.History=function(){this.handlers=[],i.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},I=/^[#\/]|\s+$/g,N=/^\/+|\/+$/g,R=/msie [\w.]+/,O=/\/$/,P=/#.*$/;A.started=!1,i.extend(A.prototype,o,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var i=this.root.replace(O,"");t.indexOf(i)||(t=t.slice(i.length))}else t=this.getHash();return t.replace(I,"")},start:function(t){if(A.started)throw new Error("Backbone.history has already been started");A.started=!0,this.options=i.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var n=this.getFragment(),s=document.documentMode,r=R.exec(navigator.userAgent.toLowerCase())&&(!s||7>=s);if(this.root=("/"+this.root+"/").replace(N,"/"),r&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=a.hide().appendTo("body")[0].contentWindow,this.navigate(n)}this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!r?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=n;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&o.hash&&(this.fragment=this.getHash().replace(I,""),this.history.replaceState({},document.title,this.root+this.fragment))}return this.options.silent?void 0:this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),A.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t===this.fragment?!1:(this.iframe&&this.navigate(t),void this.loadUrl())},loadUrl:function(t){return t=this.fragment=this.getFragment(t),i.any(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0})},navigate:function(t,e){if(!A.started)return!1;e&&e!==!0||(e={trigger:!!e});var i=this.root+(t=this.getFragment(t||""));if(t=t.replace(P,""),this.fragment!==t){if(this.fragment=t,""===t&&"/"!==i&&(i=i.slice(0,-1)),this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,i);else{if(!this._wantsHashChange)return this.location.assign(i);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else t.hash="#"+e}}),e.history=new A;var j=function(t,e){var n,s=this;n=t&&i.has(t,"constructor")?t.constructor:function(){return s.apply(this,arguments)},i.extend(n,s,e);var r=function(){this.constructor=n};return r.prototype=s.prototype,n.prototype=new r,t&&i.extend(n.prototype,t),n.__super__=s.prototype,n};d.extend=p.extend=k.extend=_.extend=A.extend=j;var C=function(){throw new Error('A "url" property or function must be specified')},U=function(t,e){var i=e.error;e.error=function(n){i&&i(t,n,e),t.trigger("error",t,n,e)}};return e});
  //# sourceMappingURL=backbone.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:backbone@1.1.2", ["npm:backbone@1.1.2/backbone"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/backbone@1.1.2.js";
  var __dirname = "jspm_packages/npm";
  module.exports = require("npm:backbone@1.1.2/backbone");
  
  global.define = __define;
  return module.exports;
});
