(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Lc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Jt = { exports: {} },
  M = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var jl = Object.getOwnPropertySymbols,
  Ic = Object.prototype.hasOwnProperty,
  Fc = Object.prototype.propertyIsEnumerable;
function Dc(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function jc() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (o) {
      return t[o];
    });
    if (r.join("") !== "0123456789") return !1;
    var i = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (o) {
        i[o] = o;
      }),
      Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var bu = jc()
  ? Object.assign
  : function (e, t) {
      for (var n, r = Dc(e), i, o = 1; o < arguments.length; o++) {
        n = Object(arguments[o]);
        for (var l in n) Ic.call(n, l) && (r[l] = n[l]);
        if (jl) {
          i = jl(n);
          for (var u = 0; u < i.length; u++)
            Fc.call(n, i[u]) && (r[i[u]] = n[i[u]]);
        }
      }
      return r;
    };
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ro = bu,
  ke = typeof Symbol == "function" && Symbol.for,
  Fn = ke ? Symbol.for("react.element") : 60103,
  Ac = ke ? Symbol.for("react.portal") : 60106,
  Mc = ke ? Symbol.for("react.fragment") : 60107,
  zc = ke ? Symbol.for("react.strict_mode") : 60108,
  Uc = ke ? Symbol.for("react.profiler") : 60114,
  $c = ke ? Symbol.for("react.provider") : 60109,
  Vc = ke ? Symbol.for("react.context") : 60110,
  Bc = ke ? Symbol.for("react.forward_ref") : 60112,
  Wc = ke ? Symbol.for("react.suspense") : 60113,
  Hc = ke ? Symbol.for("react.memo") : 60115,
  Qc = ke ? Symbol.for("react.lazy") : 60116,
  Al = typeof Symbol == "function" && Symbol.iterator;
function Dn(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var es = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ts = {};
function Yt(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ts),
    (this.updater = n || es);
}
Yt.prototype.isReactComponent = {};
Yt.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(Dn(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ns() {}
ns.prototype = Yt.prototype;
function Lo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ts),
    (this.updater = n || es);
}
var Io = (Lo.prototype = new ns());
Io.constructor = Lo;
Ro(Io, Yt.prototype);
Io.isPureReactComponent = !0;
var Fo = { current: null },
  rs = Object.prototype.hasOwnProperty,
  is = { key: !0, ref: !0, __self: !0, __source: !0 };
function os(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      rs.call(t, r) && !is.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) i[r] === void 0 && (i[r] = u[r]);
  return {
    $$typeof: Fn,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Fo.current,
  };
}
function Kc(e, t) {
  return {
    $$typeof: Fn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Do(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fn;
}
function Jc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    ("" + e).replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ls = /\/+/g,
  Sr = [];
function us(e, t, n, r) {
  if (Sr.length) {
    var i = Sr.pop();
    return (
      (i.result = e),
      (i.keyPrefix = t),
      (i.func = n),
      (i.context = r),
      (i.count = 0),
      i
    );
  }
  return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
}
function ss(e) {
  (e.result = null),
    (e.keyPrefix = null),
    (e.func = null),
    (e.context = null),
    (e.count = 0),
    10 > Sr.length && Sr.push(e);
}
function Di(e, t, n, r) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Fn:
          case Ac:
            o = !0;
        }
    }
  if (o) return n(r, e, t === "" ? "." + mi(e, 0) : t), 1;
  if (((o = 0), (t = t === "" ? "." : t + ":"), Array.isArray(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var u = t + mi(i, l);
      o += Di(i, u, n, r);
    }
  else if (
    (e === null || typeof e != "object"
      ? (u = null)
      : ((u = (Al && e[Al]) || e["@@iterator"]),
        (u = typeof u == "function" ? u : null)),
    typeof u == "function")
  )
    for (e = u.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (u = t + mi(i, l++)), (o += Di(i, u, n, r));
  else if (i === "object")
    throw (
      ((n = "" + e),
      Error(
        Dn(
          31,
          n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n,
          ""
        )
      ))
    );
  return o;
}
function ji(e, t, n) {
  return e == null ? 0 : Di(e, "", t, n);
}
function mi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Jc(e.key)
    : t.toString(36);
}
function Yc(e, t) {
  e.func.call(e.context, t, e.count++);
}
function Xc(e, t, n) {
  var r = e.result,
    i = e.keyPrefix;
  (e = e.func.call(e.context, t, e.count++)),
    Array.isArray(e)
      ? Ai(e, r, n, function (o) {
          return o;
        })
      : e != null &&
        (Do(e) &&
          (e = Kc(
            e,
            i +
              (!e.key || (t && t.key === e.key)
                ? ""
                : ("" + e.key).replace(ls, "$&/") + "/") +
              n
          )),
        r.push(e));
}
function Ai(e, t, n, r, i) {
  var o = "";
  n != null && (o = ("" + n).replace(ls, "$&/") + "/"),
    (t = us(t, o, r, i)),
    ji(e, Xc, t),
    ss(t);
}
var as = { current: null };
function Ue() {
  var e = as.current;
  if (e === null) throw Error(Dn(321));
  return e;
}
var Gc = {
  ReactCurrentDispatcher: as,
  ReactCurrentBatchConfig: { suspense: null },
  ReactCurrentOwner: Fo,
  IsSomeRendererActing: { current: !1 },
  assign: Ro,
};
M.Children = {
  map: function (e, t, n) {
    if (e == null) return e;
    var r = [];
    return Ai(e, r, null, t, n), r;
  },
  forEach: function (e, t, n) {
    if (e == null) return e;
    (t = us(null, null, t, n)), ji(e, Yc, t), ss(t);
  },
  count: function (e) {
    return ji(
      e,
      function () {
        return null;
      },
      null
    );
  },
  toArray: function (e) {
    var t = [];
    return (
      Ai(e, t, null, function (n) {
        return n;
      }),
      t
    );
  },
  only: function (e) {
    if (!Do(e)) throw Error(Dn(143));
    return e;
  },
};
M.Component = Yt;
M.Fragment = Mc;
M.Profiler = Uc;
M.PureComponent = Lo;
M.StrictMode = zc;
M.Suspense = Wc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gc;
M.cloneElement = function (e, t, n) {
  if (e == null) throw Error(Dn(267, e));
  var r = Ro({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Fo.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      rs.call(t, a) &&
        !is.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: Fn, type: e.type, key: i, ref: o, props: r, _owner: l };
};
M.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: Vc,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: $c, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = os;
M.createFactory = function (e) {
  var t = os.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: Bc, render: e };
};
M.isValidElement = Do;
M.lazy = function (e) {
  return { $$typeof: Qc, _ctor: e, _status: -1, _result: null };
};
M.memo = function (e, t) {
  return { $$typeof: Hc, type: e, compare: t === void 0 ? null : t };
};
M.useCallback = function (e, t) {
  return Ue().useCallback(e, t);
};
M.useContext = function (e, t) {
  return Ue().useContext(e, t);
};
M.useDebugValue = function () {};
M.useEffect = function (e, t) {
  return Ue().useEffect(e, t);
};
M.useImperativeHandle = function (e, t, n) {
  return Ue().useImperativeHandle(e, t, n);
};
M.useLayoutEffect = function (e, t) {
  return Ue().useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return Ue().useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return Ue().useReducer(e, t, n);
};
M.useRef = function (e) {
  return Ue().useRef(e);
};
M.useState = function (e) {
  return Ue().useState(e);
};
M.version = "16.14.0";
(function (e) {
  e.exports = M;
})(Jt);
const En = Lc(Jt.exports);
var cs = { exports: {} },
  ge = {},
  fs = { exports: {} },
  ds = {};
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, n, r, i, o;
  if (typeof window > "u" || typeof MessageChannel != "function") {
    var l = null,
      u = null,
      a = function () {
        if (l !== null)
          try {
            var w = e.unstable_now();
            l(!0, w), (l = null);
          } catch (N) {
            throw (setTimeout(a, 0), N);
          }
      },
      s = Date.now();
    (e.unstable_now = function () {
      return Date.now() - s;
    }),
      (t = function (w) {
        l !== null ? setTimeout(t, 0, w) : ((l = w), setTimeout(a, 0));
      }),
      (n = function (w, N) {
        u = setTimeout(w, N);
      }),
      (r = function () {
        clearTimeout(u);
      }),
      (i = function () {
        return !1;
      }),
      (o = e.unstable_forceFrameRate = function () {});
  } else {
    var p = window.performance,
      m = window.Date,
      C = window.setTimeout,
      T = window.clearTimeout;
    if (typeof console < "u") {
      var k = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
        ),
        typeof k != "function" &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          );
    }
    if (typeof p == "object" && typeof p.now == "function")
      e.unstable_now = function () {
        return p.now();
      };
    else {
      var P = m.now();
      e.unstable_now = function () {
        return m.now() - P;
      };
    }
    var f = !1,
      c = null,
      d = -1,
      y = 5,
      v = 0;
    (i = function () {
      return e.unstable_now() >= v;
    }),
      (o = function () {}),
      (e.unstable_forceFrameRate = function (w) {
        0 > w || 125 < w
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
            )
          : (y = 0 < w ? Math.floor(1e3 / w) : 5);
      });
    var E = new MessageChannel(),
      _ = E.port2;
    (E.port1.onmessage = function () {
      if (c !== null) {
        var w = e.unstable_now();
        v = w + y;
        try {
          c(!0, w) ? _.postMessage(null) : ((f = !1), (c = null));
        } catch (N) {
          throw (_.postMessage(null), N);
        }
      } else f = !1;
    }),
      (t = function (w) {
        (c = w), f || ((f = !0), _.postMessage(null));
      }),
      (n = function (w, N) {
        d = C(function () {
          w(e.unstable_now());
        }, N);
      }),
      (r = function () {
        T(d), (d = -1);
      });
  }
  function I(w, N) {
    var D = w.length;
    w.push(N);
    e: for (;;) {
      var V = (D - 1) >>> 1,
        W = w[V];
      if (W !== void 0 && 0 < ue(W, N)) (w[V] = N), (w[D] = W), (D = V);
      else break e;
    }
  }
  function F(w) {
    return (w = w[0]), w === void 0 ? null : w;
  }
  function R(w) {
    var N = w[0];
    if (N !== void 0) {
      var D = w.pop();
      if (D !== N) {
        w[0] = D;
        e: for (var V = 0, W = w.length; V < W; ) {
          var ut = 2 * (V + 1) - 1,
            st = w[ut],
            bt = ut + 1,
            _t = w[bt];
          if (st !== void 0 && 0 > ue(st, D))
            _t !== void 0 && 0 > ue(_t, st)
              ? ((w[V] = _t), (w[bt] = D), (V = bt))
              : ((w[V] = st), (w[ut] = D), (V = ut));
          else if (_t !== void 0 && 0 > ue(_t, D))
            (w[V] = _t), (w[bt] = D), (V = bt);
          else break e;
        }
      }
      return N;
    }
    return null;
  }
  function ue(w, N) {
    var D = w.sortIndex - N.sortIndex;
    return D !== 0 ? D : w.id - N.id;
  }
  var se = [],
    Ve = [],
    Oc = 1,
    ee = null,
    G = 3,
    Qn = !1,
    lt = !1,
    qt = !1;
  function Kn(w) {
    for (var N = F(Ve); N !== null; ) {
      if (N.callback === null) R(Ve);
      else if (N.startTime <= w)
        R(Ve), (N.sortIndex = N.expirationTime), I(se, N);
      else break;
      N = F(Ve);
    }
  }
  function pi(w) {
    if (((qt = !1), Kn(w), !lt))
      if (F(se) !== null) (lt = !0), t(hi);
      else {
        var N = F(Ve);
        N !== null && n(pi, N.startTime - w);
      }
  }
  function hi(w, N) {
    (lt = !1), qt && ((qt = !1), r()), (Qn = !0);
    var D = G;
    try {
      for (
        Kn(N), ee = F(se);
        ee !== null && (!(ee.expirationTime > N) || (w && !i()));

      ) {
        var V = ee.callback;
        if (V !== null) {
          (ee.callback = null), (G = ee.priorityLevel);
          var W = V(ee.expirationTime <= N);
          (N = e.unstable_now()),
            typeof W == "function" ? (ee.callback = W) : ee === F(se) && R(se),
            Kn(N);
        } else R(se);
        ee = F(se);
      }
      if (ee !== null) var ut = !0;
      else {
        var st = F(Ve);
        st !== null && n(pi, st.startTime - N), (ut = !1);
      }
      return ut;
    } finally {
      (ee = null), (G = D), (Qn = !1);
    }
  }
  function Dl(w) {
    switch (w) {
      case 1:
        return -1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 1e4;
      default:
        return 5e3;
    }
  }
  var Rc = o;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (w) {
      w.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      lt || Qn || ((lt = !0), t(hi));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return G;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return F(se);
    }),
    (e.unstable_next = function (w) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = G;
      }
      var D = G;
      G = N;
      try {
        return w();
      } finally {
        G = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = Rc),
    (e.unstable_runWithPriority = function (w, N) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var D = G;
      G = w;
      try {
        return N();
      } finally {
        G = D;
      }
    }),
    (e.unstable_scheduleCallback = function (w, N, D) {
      var V = e.unstable_now();
      if (typeof D == "object" && D !== null) {
        var W = D.delay;
        (W = typeof W == "number" && 0 < W ? V + W : V),
          (D = typeof D.timeout == "number" ? D.timeout : Dl(w));
      } else (D = Dl(w)), (W = V);
      return (
        (D = W + D),
        (w = {
          id: Oc++,
          callback: N,
          priorityLevel: w,
          startTime: W,
          expirationTime: D,
          sortIndex: -1,
        }),
        W > V
          ? ((w.sortIndex = W),
            I(Ve, w),
            F(se) === null &&
              w === F(Ve) &&
              (qt ? r() : (qt = !0), n(pi, W - V)))
          : ((w.sortIndex = D), I(se, w), lt || Qn || ((lt = !0), t(hi))),
        w
      );
    }),
    (e.unstable_shouldYield = function () {
      var w = e.unstable_now();
      Kn(w);
      var N = F(se);
      return (
        (N !== ee &&
          ee !== null &&
          N !== null &&
          N.callback !== null &&
          N.startTime <= w &&
          N.expirationTime < ee.expirationTime) ||
        i()
      );
    }),
    (e.unstable_wrapCallback = function (w) {
      var N = G;
      return function () {
        var D = G;
        G = N;
        try {
          return w.apply(this, arguments);
        } finally {
          G = D;
        }
      };
    });
})(ds);
(function (e) {
  e.exports = ds;
})(fs);
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gr = Jt.exports,
  te = bu,
  J = fs.exports;
function g(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
if (!Gr) throw Error(g(227));
function Zc(e, t, n, r, i, o, l, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var dn = !1,
  Tr = null,
  xr = !1,
  Mi = null,
  qc = {
    onError: function (e) {
      (dn = !0), (Tr = e);
    },
  };
function bc(e, t, n, r, i, o, l, u, a) {
  (dn = !1), (Tr = null), Zc.apply(qc, arguments);
}
function ef(e, t, n, r, i, o, l, u, a) {
  if ((bc.apply(this, arguments), dn)) {
    if (dn) {
      var s = Tr;
      (dn = !1), (Tr = null);
    } else throw Error(g(198));
    xr || ((xr = !0), (Mi = s));
  }
}
var jo = null,
  ps = null,
  hs = null;
function Ml(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = hs(n)), ef(r, t, void 0, e), (e.currentTarget = null);
}
var Cr = null,
  Nt = {};
function ms() {
  if (Cr)
    for (var e in Nt) {
      var t = Nt[e],
        n = Cr.indexOf(e);
      if (!(-1 < n)) throw Error(g(96, e));
      if (!Pr[n]) {
        if (!t.extractEvents) throw Error(g(97, e));
        (Pr[n] = t), (n = t.eventTypes);
        for (var r in n) {
          var i = void 0,
            o = n[r],
            l = t,
            u = r;
          if (zi.hasOwnProperty(u)) throw Error(g(99, u));
          zi[u] = o;
          var a = o.phasedRegistrationNames;
          if (a) {
            for (i in a) a.hasOwnProperty(i) && zl(a[i], l, u);
            i = !0;
          } else
            o.registrationName
              ? (zl(o.registrationName, l, u), (i = !0))
              : (i = !1);
          if (!i) throw Error(g(98, r, e));
        }
      }
    }
}
function zl(e, t, n) {
  if (Vt[e]) throw Error(g(100, e));
  (Vt[e] = t), (Ao[e] = t.eventTypes[n].dependencies);
}
var Pr = [],
  zi = {},
  Vt = {},
  Ao = {};
function ys(e) {
  var t = !1,
    n;
  for (n in e)
    if (e.hasOwnProperty(n)) {
      var r = e[n];
      if (!Nt.hasOwnProperty(n) || Nt[n] !== r) {
        if (Nt[n]) throw Error(g(102, n));
        (Nt[n] = r), (t = !0);
      }
    }
  t && ms();
}
var ot = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ui = null,
  jt = null,
  At = null;
function Ul(e) {
  if ((e = ps(e))) {
    if (typeof Ui != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = jo(t)), Ui(e.stateNode, e.type, t));
  }
}
function gs(e) {
  jt ? (At ? At.push(e) : (At = [e])) : (jt = e);
}
function vs() {
  if (jt) {
    var e = jt,
      t = At;
    if (((At = jt = null), Ul(e), t)) for (e = 0; e < t.length; e++) Ul(t[e]);
  }
}
function Mo(e, t) {
  return e(t);
}
function ws(e, t, n, r, i) {
  return e(t, n, r, i);
}
function zo() {}
var Es = Mo,
  ft = !1,
  yi = !1;
function Uo() {
  (jt !== null || At !== null) && (zo(), vs());
}
function ks(e, t, n) {
  if (yi) return e(t, n);
  yi = !0;
  try {
    return Es(e, t, n);
  } finally {
    (yi = !1), Uo();
  }
}
var tf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $l = Object.prototype.hasOwnProperty,
  Vl = {},
  Bl = {};
function nf(e) {
  return $l.call(Bl, e)
    ? !0
    : $l.call(Vl, e)
    ? !1
    : tf.test(e)
    ? (Bl[e] = !0)
    : ((Vl[e] = !0), !1);
}
function rf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function of(e, t, n, r) {
  if (t === null || typeof t > "u" || rf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ne(e, t, n, r, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o);
}
var Y = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Y[e] = new ne(e, 0, !1, e, null, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Y[t] = new ne(t, 1, !1, e[1], null, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Y[e] = new ne(e, 2, !1, e.toLowerCase(), null, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Y[e] = new ne(e, 2, !1, e, null, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Y[e] = new ne(e, 3, !1, e.toLowerCase(), null, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Y[e] = new ne(e, 3, !0, e, null, !1);
});
["capture", "download"].forEach(function (e) {
  Y[e] = new ne(e, 4, !1, e, null, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Y[e] = new ne(e, 6, !1, e, null, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Y[e] = new ne(e, 5, !1, e.toLowerCase(), null, !1);
});
var $o = /[\-:]([a-z])/g;
function Vo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($o, Vo);
    Y[t] = new ne(t, 1, !1, e, null, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($o, Vo);
    Y[t] = new ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace($o, Vo);
  Y[t] = new ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Y[e] = new ne(e, 1, !1, e.toLowerCase(), null, !1);
});
Y.xlinkHref = new ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Y[e] = new ne(e, 1, !1, e.toLowerCase(), null, !0);
});
var we = Gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
we.hasOwnProperty("ReactCurrentDispatcher") ||
  (we.ReactCurrentDispatcher = { current: null });
we.hasOwnProperty("ReactCurrentBatchConfig") ||
  (we.ReactCurrentBatchConfig = { suspense: null });
function Bo(e, t, n, r) {
  var i = Y.hasOwnProperty(t) ? Y[t] : null,
    o =
      i !== null
        ? i.type === 0
        : r
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== "o" && t[0] !== "O") ||
            (t[1] !== "n" && t[1] !== "N")
          );
  o ||
    (of(t, n, i, r) && (n = null),
    r || i === null
      ? nf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lf = /^(.*)[\\\/]/,
  le = typeof Symbol == "function" && Symbol.for,
  Jn = le ? Symbol.for("react.element") : 60103,
  Ot = le ? Symbol.for("react.portal") : 60106,
  ct = le ? Symbol.for("react.fragment") : 60107,
  Ss = le ? Symbol.for("react.strict_mode") : 60108,
  ir = le ? Symbol.for("react.profiler") : 60114,
  Ts = le ? Symbol.for("react.provider") : 60109,
  xs = le ? Symbol.for("react.context") : 60110,
  uf = le ? Symbol.for("react.concurrent_mode") : 60111,
  Wo = le ? Symbol.for("react.forward_ref") : 60112,
  or = le ? Symbol.for("react.suspense") : 60113,
  $i = le ? Symbol.for("react.suspense_list") : 60120,
  Ho = le ? Symbol.for("react.memo") : 60115,
  Cs = le ? Symbol.for("react.lazy") : 60116,
  Ps = le ? Symbol.for("react.block") : 60121,
  Wl = typeof Symbol == "function" && Symbol.iterator;
function en(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wl && e[Wl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
function sf(e) {
  if (e._status === -1) {
    e._status = 0;
    var t = e._ctor;
    (t = t()),
      (e._result = t),
      t.then(
        function (n) {
          e._status === 0 &&
            ((n = n.default), (e._status = 1), (e._result = n));
        },
        function (n) {
          e._status === 0 && ((e._status = 2), (e._result = n));
        }
      );
  }
}
function Ae(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ct:
      return "Fragment";
    case Ot:
      return "Portal";
    case ir:
      return "Profiler";
    case Ss:
      return "StrictMode";
    case or:
      return "Suspense";
    case $i:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case xs:
        return "Context.Consumer";
      case Ts:
        return "Context.Provider";
      case Wo:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ""),
          e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case Ho:
        return Ae(e.type);
      case Ps:
        return Ae(e.render);
      case Cs:
        if ((e = e._status === 1 ? e._result : null)) return Ae(e);
    }
  return null;
}
function Qo(e) {
  var t = "";
  do {
    e: switch (e.tag) {
      case 3:
      case 4:
      case 6:
      case 7:
      case 10:
      case 9:
        var n = "";
        break e;
      default:
        var r = e._debugOwner,
          i = e._debugSource,
          o = Ae(e.type);
        (n = null),
          r && (n = Ae(r.type)),
          (r = o),
          (o = ""),
          i
            ? (o =
                " (at " + i.fileName.replace(lf, "") + ":" + i.lineNumber + ")")
            : n && (o = " (created by " + n + ")"),
          (n =
            `
    in ` +
            (r || "Unknown") +
            o);
    }
    (t += n), (e = e.return);
  } while (e);
  return t;
}
function nt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function _s(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function af(e) {
  var t = _s(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Yn(e) {
  e._valueTracker || (e._valueTracker = af(e));
}
function Ns(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = _s(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Vi(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Hl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Os(e, t) {
  (t = t.checked), t != null && Bo(e, "checked", t, !1);
}
function Bi(e, t) {
  Os(e, t);
  var n = nt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Wi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Wi(e, t.type, nt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ql(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Wi(e, t, n) {
  (t !== "number" || e.ownerDocument.activeElement !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function cf(e) {
  var t = "";
  return (
    Gr.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function Hi(e, t) {
  return (
    (e = te({ children: void 0 }, t)),
    (t = cf(t.children)) && (e.children = t),
    e
  );
}
function Mt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Kl(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nt(n) };
}
function Rs(e, t) {
  var n = nt(t.value),
    r = nt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Jl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Ls = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
};
function Is(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ki(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Is(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Xn,
  Fs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== Ls.svg || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        Xn = Xn || document.createElement("div"),
          Xn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Xn.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
function Gn(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Rt = {
    animationend: Gn("Animation", "AnimationEnd"),
    animationiteration: Gn("Animation", "AnimationIteration"),
    animationstart: Gn("Animation", "AnimationStart"),
    transitionend: Gn("Transition", "TransitionEnd"),
  },
  gi = {},
  Ds = {};
ot &&
  ((Ds = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Rt.animationend.animation,
    delete Rt.animationiteration.animation,
    delete Rt.animationstart.animation),
  "TransitionEvent" in window || delete Rt.transitionend.transition);
function Zr(e) {
  if (gi[e]) return gi[e];
  if (!Rt[e]) return e;
  var t = Rt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ds) return (gi[e] = t[n]);
  return e;
}
var js = Zr("animationend"),
  As = Zr("animationiteration"),
  Ms = Zr("animationstart"),
  zs = Zr("transitionend"),
  an =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Yl = new (typeof WeakMap == "function" ? WeakMap : Map)();
function Ko(e) {
  var t = Yl.get(e);
  return t === void 0 && ((t = new Map()), Yl.set(e, t)), t;
}
function Pt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.effectTag & 1026) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Us(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Xl(e) {
  if (Pt(e) !== e) throw Error(g(188));
}
function ff(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pt(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Xl(i), e;
        if (o === r) return Xl(i), t;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, u = i.child; u; ) {
        if (u === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (u === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = o.child; u; ) {
          if (u === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (u === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function $s(e) {
  if (((e = ff(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function Bt(e, t) {
  if (t == null) throw Error(g(30));
  return e == null
    ? t
    : Array.isArray(e)
    ? Array.isArray(t)
      ? (e.push.apply(e, t), e)
      : (e.push(t), e)
    : Array.isArray(t)
    ? [e].concat(t)
    : [e, t];
}
function Jo(e, t, n) {
  Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
}
var tn = null;
function df(e) {
  if (e) {
    var t = e._dispatchListeners,
      n = e._dispatchInstances;
    if (Array.isArray(t))
      for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
        Ml(e, t[r], n[r]);
    else t && Ml(e, t, n);
    (e._dispatchListeners = null),
      (e._dispatchInstances = null),
      e.isPersistent() || e.constructor.release(e);
  }
}
function qr(e) {
  if ((e !== null && (tn = Bt(tn, e)), (e = tn), (tn = null), e)) {
    if ((Jo(e, df), tn)) throw Error(g(95));
    if (xr) throw ((e = Mi), (xr = !1), (Mi = null), e);
  }
}
function Yo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
function Vs(e) {
  if (!ot) return !1;
  e = "on" + e;
  var t = e in document;
  return (
    t ||
      ((t = document.createElement("div")),
      t.setAttribute(e, "return;"),
      (t = typeof t[e] == "function")),
    t
  );
}
var _r = [];
function Bs(e) {
  (e.topLevelType = null),
    (e.nativeEvent = null),
    (e.targetInst = null),
    (e.ancestors.length = 0),
    10 > _r.length && _r.push(e);
}
function Ws(e, t, n, r) {
  if (_r.length) {
    var i = _r.pop();
    return (
      (i.topLevelType = e),
      (i.eventSystemFlags = r),
      (i.nativeEvent = t),
      (i.targetInst = n),
      i
    );
  }
  return {
    topLevelType: e,
    eventSystemFlags: r,
    nativeEvent: t,
    targetInst: n,
    ancestors: [],
  };
}
function Hs(e) {
  var t = e.targetInst,
    n = t;
  do {
    if (!n) {
      e.ancestors.push(n);
      break;
    }
    var r = n;
    if (r.tag === 3) r = r.stateNode.containerInfo;
    else {
      for (; r.return; ) r = r.return;
      r = r.tag !== 3 ? null : r.stateNode.containerInfo;
    }
    if (!r) break;
    (t = n.tag), (t !== 5 && t !== 6) || e.ancestors.push(n), (n = An(r));
  } while (n);
  for (n = 0; n < e.ancestors.length; n++) {
    t = e.ancestors[n];
    var i = Yo(e.nativeEvent);
    r = e.topLevelType;
    var o = e.nativeEvent,
      l = e.eventSystemFlags;
    n === 0 && (l |= 64);
    for (var u = null, a = 0; a < Pr.length; a++) {
      var s = Pr[a];
      s && (s = s.extractEvents(r, t, o, i, l)) && (u = Bt(u, s));
    }
    qr(u);
  }
}
function Ji(e, t, n) {
  if (!n.has(e)) {
    switch (e) {
      case "scroll":
        cn(t, "scroll", !0);
        break;
      case "focus":
      case "blur":
        cn(t, "focus", !0),
          cn(t, "blur", !0),
          n.set("blur", null),
          n.set("focus", null);
        break;
      case "cancel":
      case "close":
        Vs(e) && cn(t, e, !0);
        break;
      case "invalid":
      case "submit":
      case "reset":
        break;
      default:
        an.indexOf(e) === -1 && U(e, t);
    }
    n.set(e, null);
  }
}
var Qs,
  Xo,
  Ks,
  Yi = !1,
  Se = [],
  Xe = null,
  Ge = null,
  Ze = null,
  Sn = new Map(),
  Tn = new Map(),
  nn = [],
  Xi =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
      " "
    ),
  pf =
    "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
      " "
    );
function hf(e, t) {
  var n = Ko(t);
  Xi.forEach(function (r) {
    Ji(r, t, n);
  }),
    pf.forEach(function (r) {
      Ji(r, t, n);
    });
}
function Gi(e, t, n, r, i) {
  return {
    blockedOn: e,
    topLevelType: t,
    eventSystemFlags: n | 32,
    nativeEvent: i,
    container: r,
  };
}
function Gl(e, t) {
  switch (e) {
    case "focus":
    case "blur":
      Xe = null;
      break;
    case "dragenter":
    case "dragleave":
      Ge = null;
      break;
    case "mouseover":
    case "mouseout":
      Ze = null;
      break;
    case "pointerover":
    case "pointerout":
      Sn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Tn.delete(t.pointerId);
  }
}
function rn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = Gi(t, n, r, i, o)),
      t !== null && ((t = Mn(t)), t !== null && Xo(t)),
      e)
    : ((e.eventSystemFlags |= r), e);
}
function mf(e, t, n, r, i) {
  switch (t) {
    case "focus":
      return (Xe = rn(Xe, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ge = rn(Ge, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ze = rn(Ze, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Sn.set(o, rn(Sn.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Tn.set(o, rn(Tn.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function yf(e) {
  var t = An(e.target);
  if (t !== null) {
    var n = Pt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Us(n)), t !== null)) {
          (e.blockedOn = t),
            J.unstable_runWithPriority(e.priority, function () {
              Ks(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function lr(e) {
  if (e.blockedOn !== null) return !1;
  var t = qo(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
  if (t !== null) {
    var n = Mn(t);
    return n !== null && Xo(n), (e.blockedOn = t), !1;
  }
  return !0;
}
function Zl(e, t, n) {
  lr(e) && n.delete(t);
}
function gf() {
  for (Yi = !1; 0 < Se.length; ) {
    var e = Se[0];
    if (e.blockedOn !== null) {
      (e = Mn(e.blockedOn)), e !== null && Qs(e);
      break;
    }
    var t = qo(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
    t !== null ? (e.blockedOn = t) : Se.shift();
  }
  Xe !== null && lr(Xe) && (Xe = null),
    Ge !== null && lr(Ge) && (Ge = null),
    Ze !== null && lr(Ze) && (Ze = null),
    Sn.forEach(Zl),
    Tn.forEach(Zl);
}
function on(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Yi ||
      ((Yi = !0), J.unstable_scheduleCallback(J.unstable_NormalPriority, gf)));
}
function Js(e) {
  function t(i) {
    return on(i, e);
  }
  if (0 < Se.length) {
    on(Se[0], e);
    for (var n = 1; n < Se.length; n++) {
      var r = Se[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xe !== null && on(Xe, e),
      Ge !== null && on(Ge, e),
      Ze !== null && on(Ze, e),
      Sn.forEach(t),
      Tn.forEach(t),
      n = 0;
    n < nn.length;
    n++
  )
    (r = nn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nn.length && ((n = nn[0]), n.blockedOn === null); )
    yf(n), n.blockedOn === null && nn.shift();
}
var Ys = {},
  Xs = new Map(),
  Go = new Map(),
  vf = [
    "abort",
    "abort",
    js,
    "animationEnd",
    As,
    "animationIteration",
    Ms,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    zs,
    "transitionEnd",
    "waiting",
    "waiting",
  ];
function Zo(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      i = e[n + 1],
      o = "on" + (i[0].toUpperCase() + i.slice(1));
    (o = {
      phasedRegistrationNames: { bubbled: o, captured: o + "Capture" },
      dependencies: [r],
      eventPriority: t,
    }),
      Go.set(r, t),
      Xs.set(r, o),
      (Ys[i] = o);
  }
}
Zo(
  "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
    " "
  ),
  0
);
Zo(
  "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
    " "
  ),
  1
);
Zo(vf, 2);
for (
  var ql =
      "change selectionchange textInput compositionstart compositionend compositionupdate".split(
        " "
      ),
    vi = 0;
  vi < ql.length;
  vi++
)
  Go.set(ql[vi], 0);
var wf = J.unstable_UserBlockingPriority,
  Ef = J.unstable_runWithPriority,
  ur = !0;
function U(e, t) {
  cn(t, e, !1);
}
function cn(e, t, n) {
  var r = Go.get(t);
  switch (r === void 0 ? 2 : r) {
    case 0:
      r = kf.bind(null, t, 1, e);
      break;
    case 1:
      r = Sf.bind(null, t, 1, e);
      break;
    default:
      r = br.bind(null, t, 1, e);
  }
  n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
}
function kf(e, t, n, r) {
  ft || zo();
  var i = br,
    o = ft;
  ft = !0;
  try {
    ws(i, e, t, n, r);
  } finally {
    (ft = o) || Uo();
  }
}
function Sf(e, t, n, r) {
  Ef(wf, br.bind(null, e, t, n, r));
}
function br(e, t, n, r) {
  if (ur)
    if (0 < Se.length && -1 < Xi.indexOf(e))
      (e = Gi(null, e, t, n, r)), Se.push(e);
    else {
      var i = qo(e, t, n, r);
      if (i === null) Gl(e, r);
      else if (-1 < Xi.indexOf(e)) (e = Gi(i, e, t, n, r)), Se.push(e);
      else if (!mf(i, e, t, n, r)) {
        Gl(e, r), (e = Ws(e, r, null, t));
        try {
          ks(Hs, e);
        } finally {
          Bs(e);
        }
      }
    }
}
function qo(e, t, n, r) {
  if (((n = Yo(r)), (n = An(n)), n !== null)) {
    var i = Pt(n);
    if (i === null) n = null;
    else {
      var o = i.tag;
      if (o === 13) {
        if (((n = Us(i)), n !== null)) return n;
        n = null;
      } else if (o === 3) {
        if (i.stateNode.hydrate)
          return i.tag === 3 ? i.stateNode.containerInfo : null;
        n = null;
      } else i !== n && (n = null);
    }
  }
  e = Ws(e, r, n, t);
  try {
    ks(Hs, e);
  } finally {
    Bs(e);
  }
  return null;
}
var pn = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tf = ["Webkit", "ms", "Moz", "O"];
Object.keys(pn).forEach(function (e) {
  Tf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pn[t] = pn[e]);
  });
});
function Gs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (pn.hasOwnProperty(e) && pn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Zs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Gs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var xf = te(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
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
    wbr: !0,
  }
);
function Zi(e, t) {
  if (t) {
    if (xf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e, ""));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        !(
          typeof t.dangerouslySetInnerHTML == "object" &&
          "__html" in t.dangerouslySetInnerHTML
        )
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62, ""));
  }
}
function qi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var bl = Ls.html;
function Re(e, t) {
  e = e.nodeType === 9 || e.nodeType === 11 ? e : e.ownerDocument;
  var n = Ko(e);
  t = Ao[t];
  for (var r = 0; r < t.length; r++) Ji(t[r], e, n);
}
function Nr() {}
function bi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function tu(e, t) {
  var n = eu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = eu(n);
  }
}
function qs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? qs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function nu() {
  for (var e = window, t = bi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bi(e.document);
  }
  return t;
}
function eo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
var bs = "$",
  ea = "/$",
  bo = "$?",
  el = "$!",
  wi = null,
  Ei = null;
function ta(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function to(e, t) {
  return (
    e === "textarea" ||
    e === "option" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ki = typeof setTimeout == "function" ? setTimeout : void 0,
  Cf = typeof clearTimeout == "function" ? clearTimeout : void 0;
function zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function ru(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === bs || n === el || n === bo) {
        if (t === 0) return e;
        t--;
      } else n === ea && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var tl = Math.random().toString(36).slice(2),
  He = "__reactInternalInstance$" + tl,
  Or = "__reactEventHandlers$" + tl,
  jn = "__reactContainere$" + tl;
function An(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[jn] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ru(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = ru(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Mn(e) {
  return (
    (e = e[He] || e[jn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function kt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function nl(e) {
  return e[Or] || null;
}
function Le(e) {
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function na(e, t) {
  var n = e.stateNode;
  if (!n) return null;
  var r = jo(n);
  if (!r) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
function iu(e, t, n) {
  (t = na(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
    ((n._dispatchListeners = Bt(n._dispatchListeners, t)),
    (n._dispatchInstances = Bt(n._dispatchInstances, e)));
}
function Pf(e) {
  if (e && e.dispatchConfig.phasedRegistrationNames) {
    for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Le(t));
    for (t = n.length; 0 < t--; ) iu(n[t], "captured", e);
    for (t = 0; t < n.length; t++) iu(n[t], "bubbled", e);
  }
}
function no(e, t, n) {
  e &&
    n &&
    n.dispatchConfig.registrationName &&
    (t = na(e, n.dispatchConfig.registrationName)) &&
    ((n._dispatchListeners = Bt(n._dispatchListeners, t)),
    (n._dispatchInstances = Bt(n._dispatchInstances, e)));
}
function _f(e) {
  e && e.dispatchConfig.registrationName && no(e._targetInst, null, e);
}
function Wt(e) {
  Jo(e, Pf);
}
var Qe = null,
  rl = null,
  sr = null;
function ra() {
  if (sr) return sr;
  var e,
    t = rl,
    n = t.length,
    r,
    i = "value" in Qe ? Qe.value : Qe.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (sr = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ar() {
  return !0;
}
function Rr() {
  return !1;
}
function pe(e, t, n, r) {
  (this.dispatchConfig = e),
    (this._targetInst = t),
    (this.nativeEvent = n),
    (e = this.constructor.Interface);
  for (var i in e)
    e.hasOwnProperty(i) &&
      ((t = e[i])
        ? (this[i] = t(n))
        : i === "target"
        ? (this.target = r)
        : (this[i] = n[i]));
  return (
    (this.isDefaultPrevented = (
      n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
    )
      ? ar
      : Rr),
    (this.isPropagationStopped = Rr),
    this
  );
}
te(pe.prototype, {
  preventDefault: function () {
    this.defaultPrevented = !0;
    var e = this.nativeEvent;
    e &&
      (e.preventDefault
        ? e.preventDefault()
        : typeof e.returnValue != "unknown" && (e.returnValue = !1),
      (this.isDefaultPrevented = ar));
  },
  stopPropagation: function () {
    var e = this.nativeEvent;
    e &&
      (e.stopPropagation
        ? e.stopPropagation()
        : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
      (this.isPropagationStopped = ar));
  },
  persist: function () {
    this.isPersistent = ar;
  },
  isPersistent: Rr,
  destructor: function () {
    var e = this.constructor.Interface,
      t;
    for (t in e) this[t] = null;
    (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
      (this.isPropagationStopped = this.isDefaultPrevented = Rr),
      (this._dispatchInstances = this._dispatchListeners = null);
  },
});
pe.Interface = {
  type: null,
  target: null,
  currentTarget: function () {
    return null;
  },
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function (e) {
    return e.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null,
};
pe.extend = function (e) {
  function t() {}
  function n() {
    return r.apply(this, arguments);
  }
  var r = this;
  t.prototype = r.prototype;
  var i = new t();
  return (
    te(i, n.prototype),
    (n.prototype = i),
    (n.prototype.constructor = n),
    (n.Interface = te({}, r.Interface, e)),
    (n.extend = r.extend),
    ia(n),
    n
  );
};
ia(pe);
function Nf(e, t, n, r) {
  if (this.eventPool.length) {
    var i = this.eventPool.pop();
    return this.call(i, e, t, n, r), i;
  }
  return new this(e, t, n, r);
}
function Of(e) {
  if (!(e instanceof this)) throw Error(g(279));
  e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
}
function ia(e) {
  (e.eventPool = []), (e.getPooled = Nf), (e.release = Of);
}
var Rf = pe.extend({ data: null }),
  Lf = pe.extend({ data: null }),
  If = [9, 13, 27, 32],
  il = ot && "CompositionEvent" in window,
  hn = null;
ot && "documentMode" in document && (hn = document.documentMode);
var Ff = ot && "TextEvent" in window && !hn,
  oa = ot && (!il || (hn && 8 < hn && 11 >= hn)),
  ou = String.fromCharCode(32),
  Oe = {
    beforeInput: {
      phasedRegistrationNames: {
        bubbled: "onBeforeInput",
        captured: "onBeforeInputCapture",
      },
      dependencies: ["compositionend", "keypress", "textInput", "paste"],
    },
    compositionEnd: {
      phasedRegistrationNames: {
        bubbled: "onCompositionEnd",
        captured: "onCompositionEndCapture",
      },
      dependencies:
        "blur compositionend keydown keypress keyup mousedown".split(" "),
    },
    compositionStart: {
      phasedRegistrationNames: {
        bubbled: "onCompositionStart",
        captured: "onCompositionStartCapture",
      },
      dependencies:
        "blur compositionstart keydown keypress keyup mousedown".split(" "),
    },
    compositionUpdate: {
      phasedRegistrationNames: {
        bubbled: "onCompositionUpdate",
        captured: "onCompositionUpdateCapture",
      },
      dependencies:
        "blur compositionupdate keydown keypress keyup mousedown".split(" "),
    },
  },
  lu = !1;
function la(e, t) {
  switch (e) {
    case "keyup":
      return If.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "blur":
      return !0;
    default:
      return !1;
  }
}
function ua(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Lt = !1;
function Df(e, t) {
  switch (e) {
    case "compositionend":
      return ua(t);
    case "keypress":
      return t.which !== 32 ? null : ((lu = !0), ou);
    case "textInput":
      return (e = t.data), e === ou && lu ? null : e;
    default:
      return null;
  }
}
function jf(e, t) {
  if (Lt)
    return e === "compositionend" || (!il && la(e, t))
      ? ((e = ra()), (sr = rl = Qe = null), (Lt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return oa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Af = {
    eventTypes: Oe,
    extractEvents: function (e, t, n, r) {
      var i;
      if (il)
        e: {
          switch (e) {
            case "compositionstart":
              var o = Oe.compositionStart;
              break e;
            case "compositionend":
              o = Oe.compositionEnd;
              break e;
            case "compositionupdate":
              o = Oe.compositionUpdate;
              break e;
          }
          o = void 0;
        }
      else
        Lt
          ? la(e, n) && (o = Oe.compositionEnd)
          : e === "keydown" && n.keyCode === 229 && (o = Oe.compositionStart);
      return (
        o
          ? (oa &&
              n.locale !== "ko" &&
              (Lt || o !== Oe.compositionStart
                ? o === Oe.compositionEnd && Lt && (i = ra())
                : ((Qe = r),
                  (rl = "value" in Qe ? Qe.value : Qe.textContent),
                  (Lt = !0))),
            (o = Rf.getPooled(o, t, n, r)),
            i ? (o.data = i) : ((i = ua(n)), i !== null && (o.data = i)),
            Wt(o),
            (i = o))
          : (i = null),
        (e = Ff ? Df(e, n) : jf(e, n))
          ? ((t = Lf.getPooled(Oe.beforeInput, t, n, r)), (t.data = e), Wt(t))
          : (t = null),
        i === null ? t : t === null ? i : [i, t]
      );
    },
  },
  Mf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
function sa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mf[e.type] : t === "textarea";
}
var aa = {
  change: {
    phasedRegistrationNames: {
      bubbled: "onChange",
      captured: "onChangeCapture",
    },
    dependencies:
      "blur change click focus input keydown keyup selectionchange".split(" "),
  },
};
function ca(e, t, n) {
  return (
    (e = pe.getPooled(aa.change, e, t, n)), (e.type = "change"), gs(n), Wt(e), e
  );
}
var mn = null,
  xn = null;
function zf(e) {
  qr(e);
}
function ei(e) {
  var t = kt(e);
  if (Ns(t)) return e;
}
function Uf(e, t) {
  if (e === "change") return t;
}
var ro = !1;
ot &&
  (ro = Vs("input") && (!document.documentMode || 9 < document.documentMode));
function uu() {
  mn && (mn.detachEvent("onpropertychange", fa), (xn = mn = null));
}
function fa(e) {
  if (e.propertyName === "value" && ei(xn))
    if (((e = ca(xn, e, Yo(e))), ft)) qr(e);
    else {
      ft = !0;
      try {
        Mo(zf, e);
      } finally {
        (ft = !1), Uo();
      }
    }
}
function $f(e, t, n) {
  e === "focus"
    ? (uu(), (mn = t), (xn = n), mn.attachEvent("onpropertychange", fa))
    : e === "blur" && uu();
}
function Vf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ei(xn);
}
function Bf(e, t) {
  if (e === "click") return ei(t);
}
function Wf(e, t) {
  if (e === "input" || e === "change") return ei(t);
}
var Hf = {
    eventTypes: aa,
    _isInputEventSupported: ro,
    extractEvents: function (e, t, n, r) {
      var i = t ? kt(t) : window,
        o = i.nodeName && i.nodeName.toLowerCase();
      if (o === "select" || (o === "input" && i.type === "file")) var l = Uf;
      else if (sa(i))
        if (ro) l = Wf;
        else {
          l = Vf;
          var u = $f;
        }
      else
        (o = i.nodeName) &&
          o.toLowerCase() === "input" &&
          (i.type === "checkbox" || i.type === "radio") &&
          (l = Bf);
      if (l && (l = l(e, t))) return ca(l, n, r);
      u && u(e, i, t),
        e === "blur" &&
          (e = i._wrapperState) &&
          e.controlled &&
          i.type === "number" &&
          Wi(i, "number", i.value);
    },
  },
  zn = pe.extend({ view: null, detail: null }),
  Qf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Kf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qf[e]) ? !!t[e] : !1;
}
function ol() {
  return Kf;
}
var su = 0,
  au = 0,
  cu = !1,
  fu = !1,
  Un = zn.extend({
    screenX: null,
    screenY: null,
    clientX: null,
    clientY: null,
    pageX: null,
    pageY: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    getModifierState: ol,
    button: null,
    buttons: null,
    relatedTarget: function (e) {
      return (
        e.relatedTarget ||
        (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
      );
    },
    movementX: function (e) {
      if ("movementX" in e) return e.movementX;
      var t = su;
      return (
        (su = e.screenX),
        cu ? (e.type === "mousemove" ? e.screenX - t : 0) : ((cu = !0), 0)
      );
    },
    movementY: function (e) {
      if ("movementY" in e) return e.movementY;
      var t = au;
      return (
        (au = e.screenY),
        fu ? (e.type === "mousemove" ? e.screenY - t : 0) : ((fu = !0), 0)
      );
    },
  }),
  da = Un.extend({
    pointerId: null,
    width: null,
    height: null,
    pressure: null,
    tangentialPressure: null,
    tiltX: null,
    tiltY: null,
    twist: null,
    pointerType: null,
    isPrimary: null,
  }),
  ln = {
    mouseEnter: {
      registrationName: "onMouseEnter",
      dependencies: ["mouseout", "mouseover"],
    },
    mouseLeave: {
      registrationName: "onMouseLeave",
      dependencies: ["mouseout", "mouseover"],
    },
    pointerEnter: {
      registrationName: "onPointerEnter",
      dependencies: ["pointerout", "pointerover"],
    },
    pointerLeave: {
      registrationName: "onPointerLeave",
      dependencies: ["pointerout", "pointerover"],
    },
  },
  Jf = {
    eventTypes: ln,
    extractEvents: function (e, t, n, r, i) {
      var o = e === "mouseover" || e === "pointerover",
        l = e === "mouseout" || e === "pointerout";
      if (
        (o && (i & 32) === 0 && (n.relatedTarget || n.fromElement)) ||
        (!l && !o)
      )
        return null;
      if (
        ((o =
          r.window === r
            ? r
            : (o = r.ownerDocument)
            ? o.defaultView || o.parentWindow
            : window),
        l)
      ) {
        if (
          ((l = t),
          (t = (t = n.relatedTarget || n.toElement) ? An(t) : null),
          t !== null)
        ) {
          var u = Pt(t);
          (t !== u || (t.tag !== 5 && t.tag !== 6)) && (t = null);
        }
      } else l = null;
      if (l === t) return null;
      if (e === "mouseout" || e === "mouseover")
        var a = Un,
          s = ln.mouseLeave,
          p = ln.mouseEnter,
          m = "mouse";
      else
        (e === "pointerout" || e === "pointerover") &&
          ((a = da),
          (s = ln.pointerLeave),
          (p = ln.pointerEnter),
          (m = "pointer"));
      if (
        ((e = l == null ? o : kt(l)),
        (o = t == null ? o : kt(t)),
        (s = a.getPooled(s, l, n, r)),
        (s.type = m + "leave"),
        (s.target = e),
        (s.relatedTarget = o),
        (n = a.getPooled(p, t, n, r)),
        (n.type = m + "enter"),
        (n.target = o),
        (n.relatedTarget = e),
        (r = l),
        (m = t),
        r && m)
      )
        e: {
          for (a = r, p = m, l = 0, e = a; e; e = Le(e)) l++;
          for (e = 0, t = p; t; t = Le(t)) e++;
          for (; 0 < l - e; ) (a = Le(a)), l--;
          for (; 0 < e - l; ) (p = Le(p)), e--;
          for (; l--; ) {
            if (a === p || a === p.alternate) break e;
            (a = Le(a)), (p = Le(p));
          }
          a = null;
        }
      else a = null;
      for (
        p = a, a = [];
        r && r !== p && ((l = r.alternate), !(l !== null && l === p));

      )
        a.push(r), (r = Le(r));
      for (
        r = [];
        m && m !== p && ((l = m.alternate), !(l !== null && l === p));

      )
        r.push(m), (m = Le(m));
      for (m = 0; m < a.length; m++) no(a[m], "bubbled", s);
      for (m = r.length; 0 < m--; ) no(r[m], "captured", n);
      return (i & 64) === 0 ? [s] : [s, n];
    },
  };
function Yf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var St = typeof Object.is == "function" ? Object.is : Yf,
  Xf = Object.prototype.hasOwnProperty;
function Cn(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++)
    if (!Xf.call(t, n[r]) || !St(e[n[r]], t[n[r]])) return !1;
  return !0;
}
var Gf = ot && "documentMode" in document && 11 >= document.documentMode,
  pa = {
    select: {
      phasedRegistrationNames: {
        bubbled: "onSelect",
        captured: "onSelectCapture",
      },
      dependencies:
        "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
          " "
        ),
    },
  },
  It = null,
  io = null,
  yn = null,
  oo = !1;
function du(e, t) {
  var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  return oo || It == null || It !== bi(n)
    ? null
    : ((n = It),
      "selectionStart" in n && eo(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      yn && Cn(yn, n)
        ? null
        : ((yn = n),
          (e = pe.getPooled(pa.select, io, e, t)),
          (e.type = "select"),
          (e.target = It),
          Wt(e),
          e));
}
var Zf = {
    eventTypes: pa,
    extractEvents: function (e, t, n, r, i, o) {
      if (
        ((i =
          o ||
          (r.window === r
            ? r.document
            : r.nodeType === 9
            ? r
            : r.ownerDocument)),
        !(o = !i))
      ) {
        e: {
          (i = Ko(i)), (o = Ao.onSelect);
          for (var l = 0; l < o.length; l++)
            if (!i.has(o[l])) {
              i = !1;
              break e;
            }
          i = !0;
        }
        o = !i;
      }
      if (o) return null;
      switch (((i = t ? kt(t) : window), e)) {
        case "focus":
          (sa(i) || i.contentEditable === "true") &&
            ((It = i), (io = t), (yn = null));
          break;
        case "blur":
          yn = io = It = null;
          break;
        case "mousedown":
          oo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          return (oo = !1), du(n, r);
        case "selectionchange":
          if (Gf) break;
        case "keydown":
        case "keyup":
          return du(n, r);
      }
      return null;
    },
  },
  qf = pe.extend({
    animationName: null,
    elapsedTime: null,
    pseudoElement: null,
  }),
  bf = pe.extend({
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ed = zn.extend({ relatedTarget: null });
function cr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
var td = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  rd = zn.extend({
    key: function (e) {
      if (e.key) {
        var t = td[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = cr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? nd[e.keyCode] || "Unidentified"
        : "";
    },
    location: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    repeat: null,
    locale: null,
    getModifierState: ol,
    charCode: function (e) {
      return e.type === "keypress" ? cr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? cr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  id = Un.extend({ dataTransfer: null }),
  od = zn.extend({
    touches: null,
    targetTouches: null,
    changedTouches: null,
    altKey: null,
    metaKey: null,
    ctrlKey: null,
    shiftKey: null,
    getModifierState: ol,
  }),
  ld = pe.extend({
    propertyName: null,
    elapsedTime: null,
    pseudoElement: null,
  }),
  ud = Un.extend({
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: null,
    deltaMode: null,
  }),
  sd = {
    eventTypes: Ys,
    extractEvents: function (e, t, n, r) {
      var i = Xs.get(e);
      if (!i) return null;
      switch (e) {
        case "keypress":
          if (cr(n) === 0) return null;
        case "keydown":
        case "keyup":
          e = rd;
          break;
        case "blur":
        case "focus":
          e = ed;
          break;
        case "click":
          if (n.button === 2) return null;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          e = Un;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          e = id;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          e = od;
          break;
        case js:
        case As:
        case Ms:
          e = qf;
          break;
        case zs:
          e = ld;
          break;
        case "scroll":
          e = zn;
          break;
        case "wheel":
          e = ud;
          break;
        case "copy":
        case "cut":
        case "paste":
          e = bf;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          e = da;
          break;
        default:
          e = pe;
      }
      return (t = e.getPooled(i, t, n, r)), Wt(t), t;
    },
  };
if (Cr) throw Error(g(101));
Cr = Array.prototype.slice.call(
  "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
    " "
  )
);
ms();
var ad = Mn;
jo = nl;
ps = ad;
hs = kt;
ys({
  SimpleEventPlugin: sd,
  EnterLeaveEventPlugin: Jf,
  ChangeEventPlugin: Hf,
  SelectEventPlugin: Zf,
  BeforeInputEventPlugin: Af,
});
var lo = [],
  Ft = -1;
function z(e) {
  0 > Ft || ((e.current = lo[Ft]), (lo[Ft] = null), Ft--);
}
function B(e, t) {
  Ft++, (lo[Ft] = e.current), (e.current = t);
}
var rt = {},
  b = { current: rt },
  re = { current: !1 },
  Tt = rt;
function Ht(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ie(e) {
  return (e = e.childContextTypes), e != null;
}
function Lr() {
  z(re), z(b);
}
function pu(e, t, n) {
  if (b.current !== rt) throw Error(g(168));
  B(b, t), B(re, n);
}
function ha(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(g(108, Ae(t) || "Unknown", i));
  return te({}, n, {}, r);
}
function fr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rt),
    (Tt = b.current),
    B(b, e),
    B(re, re.current),
    !0
  );
}
function hu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = ha(e, t, Tt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      z(re),
      z(b),
      B(b, e))
    : z(re),
    B(re, n);
}
var cd = J.unstable_runWithPriority,
  ll = J.unstable_scheduleCallback,
  ma = J.unstable_cancelCallback,
  mu = J.unstable_requestPaint,
  uo = J.unstable_now,
  fd = J.unstable_getCurrentPriorityLevel,
  ti = J.unstable_ImmediatePriority,
  ya = J.unstable_UserBlockingPriority,
  ga = J.unstable_NormalPriority,
  va = J.unstable_LowPriority,
  wa = J.unstable_IdlePriority,
  Ea = {},
  dd = J.unstable_shouldYield,
  pd = mu !== void 0 ? mu : function () {},
  Ie = null,
  dr = null,
  Si = !1,
  yu = uo(),
  he =
    1e4 > yu
      ? uo
      : function () {
          return uo() - yu;
        };
function ni() {
  switch (fd()) {
    case ti:
      return 99;
    case ya:
      return 98;
    case ga:
      return 97;
    case va:
      return 96;
    case wa:
      return 95;
    default:
      throw Error(g(332));
  }
}
function ka(e) {
  switch (e) {
    case 99:
      return ti;
    case 98:
      return ya;
    case 97:
      return ga;
    case 96:
      return va;
    case 95:
      return wa;
    default:
      throw Error(g(332));
  }
}
function it(e, t) {
  return (e = ka(e)), cd(e, t);
}
function Sa(e, t, n) {
  return (e = ka(e)), ll(e, t, n);
}
function gu(e) {
  return Ie === null ? ((Ie = [e]), (dr = ll(ti, Ta))) : Ie.push(e), Ea;
}
function Ne() {
  if (dr !== null) {
    var e = dr;
    (dr = null), ma(e);
  }
  Ta();
}
function Ta() {
  if (!Si && Ie !== null) {
    Si = !0;
    var e = 0;
    try {
      var t = Ie;
      it(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do n = n(!0);
          while (n !== null);
        }
      }),
        (Ie = null);
    } catch (n) {
      throw (Ie !== null && (Ie = Ie.slice(e + 1)), ll(ti, Ne), n);
    } finally {
      Si = !1;
    }
  }
}
function pr(e, t, n) {
  return (
    (n /= 10), 1073741821 - ((((1073741821 - e + t / 10) / n) | 0) + 1) * n
  );
}
function ve(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
  }
  return t;
}
var Ir = { current: null },
  Fr = null,
  Dt = null,
  Dr = null;
function ul() {
  Dr = Dt = Fr = null;
}
function sl(e) {
  var t = Ir.current;
  z(Ir), (e.type._context._currentValue = t);
}
function xa(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (e.childExpirationTime < t)
      (e.childExpirationTime = t),
        n !== null && n.childExpirationTime < t && (n.childExpirationTime = t);
    else if (n !== null && n.childExpirationTime < t) n.childExpirationTime = t;
    else break;
    e = e.return;
  }
}
function Ut(e, t) {
  (Fr = e),
    (Dr = Dt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.expirationTime >= t && (Te = !0), (e.firstContext = null));
}
function ye(e, t) {
  if (Dr !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != "number" || t === 1073741823) &&
        ((Dr = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      Dt === null)
    ) {
      if (Fr === null) throw Error(g(308));
      (Dt = t),
        (Fr.dependencies = {
          expirationTime: 0,
          firstContext: t,
          responders: null,
        });
    } else Dt = Dt.next = t;
  return e._currentValue;
}
var We = !1;
function al(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    baseQueue: null,
    shared: { pending: null },
    effects: null,
  };
}
function cl(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        baseQueue: e.baseQueue,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, t) {
  return (
    (e = {
      expirationTime: e,
      suspenseConfig: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    }),
    (e.next = e)
  );
}
function be(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
}
function vu(e, t) {
  var n = e.alternate;
  n !== null && cl(n, e),
    (e = e.updateQueue),
    (n = e.baseQueue),
    n === null
      ? ((e.baseQueue = t.next = t), (t.next = t))
      : ((t.next = n.next), (n.next = t));
}
function Pn(e, t, n, r) {
  var i = e.updateQueue;
  We = !1;
  var o = i.baseQueue,
    l = i.shared.pending;
  if (l !== null) {
    if (o !== null) {
      var u = o.next;
      (o.next = l.next), (l.next = u);
    }
    (o = l),
      (i.shared.pending = null),
      (u = e.alternate),
      u !== null && ((u = u.updateQueue), u !== null && (u.baseQueue = l));
  }
  if (o !== null) {
    u = o.next;
    var a = i.baseState,
      s = 0,
      p = null,
      m = null,
      C = null;
    if (u !== null) {
      var T = u;
      do {
        if (((l = T.expirationTime), l < r)) {
          var k = {
            expirationTime: T.expirationTime,
            suspenseConfig: T.suspenseConfig,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null,
          };
          C === null ? ((m = C = k), (p = a)) : (C = C.next = k),
            l > s && (s = l);
        } else {
          C !== null &&
            (C = C.next =
              {
                expirationTime: 1073741823,
                suspenseConfig: T.suspenseConfig,
                tag: T.tag,
                payload: T.payload,
                callback: T.callback,
                next: null,
              }),
            ec(l, T.suspenseConfig);
          e: {
            var P = e,
              f = T;
            switch (((l = t), (k = n), f.tag)) {
              case 1:
                if (((P = f.payload), typeof P == "function")) {
                  a = P.call(k, a, l);
                  break e;
                }
                a = P;
                break e;
              case 3:
                P.effectTag = (P.effectTag & -4097) | 64;
              case 0:
                if (
                  ((P = f.payload),
                  (l = typeof P == "function" ? P.call(k, a, l) : P),
                  l == null)
                )
                  break e;
                a = te({}, a, l);
                break e;
              case 2:
                We = !0;
            }
          }
          T.callback !== null &&
            ((e.effectTag |= 32),
            (l = i.effects),
            l === null ? (i.effects = [T]) : l.push(T));
        }
        if (((T = T.next), T === null || T === u)) {
          if (((l = i.shared.pending), l === null)) break;
          (T = o.next = l.next),
            (l.next = u),
            (i.baseQueue = o = l),
            (i.shared.pending = null);
        }
      } while (1);
    }
    C === null ? (p = a) : (C.next = m),
      (i.baseState = p),
      (i.baseQueue = C),
      ui(s),
      (e.expirationTime = s),
      (e.memoizedState = a);
  }
}
function wu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = i), (i = n), typeof r != "function"))
          throw Error(g(191, r));
        r.call(i);
      }
    }
}
var gn = we.ReactCurrentBatchConfig,
  Ca = new Gr.Component().refs;
function jr(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.expirationTime === 0 && (e.updateQueue.baseState = n);
}
var ri = {
  isMounted: function (e) {
    return (e = e._reactInternalFiber) ? Pt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternalFiber;
    var r = Pe(),
      i = gn.suspense;
    (r = wt(r, e, i)),
      (i = qe(r, i)),
      (i.payload = t),
      n != null && (i.callback = n),
      be(e, i),
      tt(e, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternalFiber;
    var r = Pe(),
      i = gn.suspense;
    (r = wt(r, e, i)),
      (i = qe(r, i)),
      (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      be(e, i),
      tt(e, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternalFiber;
    var n = Pe(),
      r = gn.suspense;
    (n = wt(n, e, r)),
      (r = qe(n, r)),
      (r.tag = 2),
      t != null && (r.callback = t),
      be(e, r),
      tt(e, n);
  },
};
function Eu(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Cn(n, r) || !Cn(i, o)
      : !0
  );
}
function Pa(e, t, n) {
  var r = !1,
    i = rt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ye(o))
      : ((i = ie(t) ? Tt : b.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ht(e, i) : rt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ri),
    (e.stateNode = t),
    (t._reactInternalFiber = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ku(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ri.enqueueReplaceState(t, t.state, null);
}
function so(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Ca), al(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = ye(o))
    : ((o = ie(t) ? Tt : b.current), (i.context = Ht(e, o))),
    Pn(e, n, i, r),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (jr(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ri.enqueueReplaceState(i, i.state, null),
      Pn(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.effectTag |= 4);
}
var Zn = Array.isArray;
function un(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var l = r.refs;
            l === Ca && (l = r.refs = {}),
              o === null ? delete l[i] : (l[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function qn(e, t) {
  if (e.type !== "textarea")
    throw Error(
      g(
        31,
        Object.prototype.toString.call(t) === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : t,
        ""
      )
    );
}
function _a(e) {
  function t(f, c) {
    if (e) {
      var d = f.lastEffect;
      d !== null
        ? ((d.nextEffect = c), (f.lastEffect = c))
        : (f.firstEffect = f.lastEffect = c),
        (c.nextEffect = null),
        (c.effectTag = 8);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function i(f, c) {
    return (f = xt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.effectTag = 2), c) : d)
            : ((f.effectTag = 2), c))
        : c
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.effectTag = 2), f;
  }
  function u(f, c, d, y) {
    return c === null || c.tag !== 6
      ? ((c = Ni(d, f.mode, y)), (c.return = f), c)
      : ((c = i(c, d)), (c.return = f), c);
  }
  function a(f, c, d, y) {
    return c !== null && c.elementType === d.type
      ? ((y = i(c, d.props)), (y.ref = un(f, c, d)), (y.return = f), y)
      : ((y = gr(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = un(f, c, d)),
        (y.return = f),
        y);
  }
  function s(f, c, d, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = Oi(d, f.mode, y)), (c.return = f), c)
      : ((c = i(c, d.children || [])), (c.return = f), c);
  }
  function p(f, c, d, y, v) {
    return c === null || c.tag !== 7
      ? ((c = Ye(d, f.mode, y, v)), (c.return = f), c)
      : ((c = i(c, d)), (c.return = f), c);
  }
  function m(f, c, d) {
    if (typeof c == "string" || typeof c == "number")
      return (c = Ni("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Jn:
          return (
            (d = gr(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = un(f, null, c)),
            (d.return = f),
            d
          );
        case Ot:
          return (c = Oi(c, f.mode, d)), (c.return = f), c;
      }
      if (Zn(c) || en(c))
        return (c = Ye(c, f.mode, d, null)), (c.return = f), c;
      qn(f, c);
    }
    return null;
  }
  function C(f, c, d, y) {
    var v = c !== null ? c.key : null;
    if (typeof d == "string" || typeof d == "number")
      return v !== null ? null : u(f, c, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Jn:
          return d.key === v
            ? d.type === ct
              ? p(f, c, d.props.children, y, v)
              : a(f, c, d, y)
            : null;
        case Ot:
          return d.key === v ? s(f, c, d, y) : null;
      }
      if (Zn(d) || en(d)) return v !== null ? null : p(f, c, d, y, null);
      qn(f, d);
    }
    return null;
  }
  function T(f, c, d, y, v) {
    if (typeof y == "string" || typeof y == "number")
      return (f = f.get(d) || null), u(c, f, "" + y, v);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Jn:
          return (
            (f = f.get(y.key === null ? d : y.key) || null),
            y.type === ct ? p(c, f, y.props.children, v, y.key) : a(c, f, y, v)
          );
        case Ot:
          return (f = f.get(y.key === null ? d : y.key) || null), s(c, f, y, v);
      }
      if (Zn(y) || en(y)) return (f = f.get(d) || null), p(c, f, y, v, null);
      qn(c, y);
    }
    return null;
  }
  function k(f, c, d, y) {
    for (
      var v = null, E = null, _ = c, I = (c = 0), F = null;
      _ !== null && I < d.length;
      I++
    ) {
      _.index > I ? ((F = _), (_ = null)) : (F = _.sibling);
      var R = C(f, _, d[I], y);
      if (R === null) {
        _ === null && (_ = F);
        break;
      }
      e && _ && R.alternate === null && t(f, _),
        (c = o(R, c, I)),
        E === null ? (v = R) : (E.sibling = R),
        (E = R),
        (_ = F);
    }
    if (I === d.length) return n(f, _), v;
    if (_ === null) {
      for (; I < d.length; I++)
        (_ = m(f, d[I], y)),
          _ !== null &&
            ((c = o(_, c, I)), E === null ? (v = _) : (E.sibling = _), (E = _));
      return v;
    }
    for (_ = r(f, _); I < d.length; I++)
      (F = T(_, f, I, d[I], y)),
        F !== null &&
          (e && F.alternate !== null && _.delete(F.key === null ? I : F.key),
          (c = o(F, c, I)),
          E === null ? (v = F) : (E.sibling = F),
          (E = F));
    return (
      e &&
        _.forEach(function (ue) {
          return t(f, ue);
        }),
      v
    );
  }
  function P(f, c, d, y) {
    var v = en(d);
    if (typeof v != "function") throw Error(g(150));
    if (((d = v.call(d)), d == null)) throw Error(g(151));
    for (
      var E = (v = null), _ = c, I = (c = 0), F = null, R = d.next();
      _ !== null && !R.done;
      I++, R = d.next()
    ) {
      _.index > I ? ((F = _), (_ = null)) : (F = _.sibling);
      var ue = C(f, _, R.value, y);
      if (ue === null) {
        _ === null && (_ = F);
        break;
      }
      e && _ && ue.alternate === null && t(f, _),
        (c = o(ue, c, I)),
        E === null ? (v = ue) : (E.sibling = ue),
        (E = ue),
        (_ = F);
    }
    if (R.done) return n(f, _), v;
    if (_ === null) {
      for (; !R.done; I++, R = d.next())
        (R = m(f, R.value, y)),
          R !== null &&
            ((c = o(R, c, I)), E === null ? (v = R) : (E.sibling = R), (E = R));
      return v;
    }
    for (_ = r(f, _); !R.done; I++, R = d.next())
      (R = T(_, f, I, R.value, y)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? I : R.key),
          (c = o(R, c, I)),
          E === null ? (v = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        _.forEach(function (se) {
          return t(f, se);
        }),
      v
    );
  }
  return function (f, c, d, y) {
    var v =
      typeof d == "object" && d !== null && d.type === ct && d.key === null;
    v && (d = d.props.children);
    var E = typeof d == "object" && d !== null;
    if (E)
      switch (d.$$typeof) {
        case Jn:
          e: {
            for (E = d.key, v = c; v !== null; ) {
              if (v.key === E) {
                switch (v.tag) {
                  case 7:
                    if (d.type === ct) {
                      n(f, v.sibling),
                        (c = i(v, d.props.children)),
                        (c.return = f),
                        (f = c);
                      break e;
                    }
                    break;
                  default:
                    if (v.elementType === d.type) {
                      n(f, v.sibling),
                        (c = i(v, d.props)),
                        (c.ref = un(f, v, d)),
                        (c.return = f),
                        (f = c);
                      break e;
                    }
                }
                n(f, v);
                break;
              } else t(f, v);
              v = v.sibling;
            }
            d.type === ct
              ? ((c = Ye(d.props.children, f.mode, y, d.key)),
                (c.return = f),
                (f = c))
              : ((y = gr(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = un(f, c, d)),
                (y.return = f),
                (f = y));
          }
          return l(f);
        case Ot:
          e: {
            for (v = d.key; c !== null; ) {
              if (c.key === v)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = i(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Oi(d, f.mode, y)), (c.return = f), (f = c);
          }
          return l(f);
      }
    if (typeof d == "string" || typeof d == "number")
      return (
        (d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = i(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = Ni(d, f.mode, y)), (c.return = f), (f = c)),
        l(f)
      );
    if (Zn(d)) return k(f, c, d, y);
    if (en(d)) return P(f, c, d, y);
    if ((E && qn(f, d), typeof d > "u" && !v))
      switch (f.tag) {
        case 1:
        case 0:
          throw (
            ((f = f.type),
            Error(g(152, f.displayName || f.name || "Component")))
          );
      }
    return n(f, c);
  };
}
var Qt = _a(!0),
  fl = _a(!1),
  $n = {},
  Ce = { current: $n },
  _n = { current: $n },
  Nn = { current: $n };
function dt(e) {
  if (e === $n) throw Error(g(174));
  return e;
}
function ao(e, t) {
  switch ((B(Nn, t), B(_n, e), B(Ce, $n), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ki(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ki(t, e));
  }
  z(Ce), B(Ce, t);
}
function Kt() {
  z(Ce), z(_n), z(Nn);
}
function Su(e) {
  dt(Nn.current);
  var t = dt(Ce.current),
    n = Ki(t, e.type);
  t !== n && (B(_n, e), B(Ce, n));
}
function dl(e) {
  _n.current === e && (z(Ce), z(_n));
}
var $ = { current: 0 };
function Ar(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === bo || n.data === el)
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.effectTag & 64) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
function pl(e, t) {
  return { responder: e, props: t };
}
var hr = we.ReactCurrentDispatcher,
  me = we.ReactCurrentBatchConfig,
  Ke = 0,
  H = null,
  Z = null,
  q = null,
  Mr = !1;
function ae() {
  throw Error(g(321));
}
function hl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!St(e[n], t[n])) return !1;
  return !0;
}
function ml(e, t, n, r, i, o) {
  if (
    ((Ke = o),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.expirationTime = 0),
    (hr.current = e === null || e.memoizedState === null ? hd : md),
    (e = n(r, i)),
    t.expirationTime === Ke)
  ) {
    o = 0;
    do {
      if (((t.expirationTime = 0), !(25 > o))) throw Error(g(301));
      (o += 1),
        (q = Z = null),
        (t.updateQueue = null),
        (hr.current = yd),
        (e = n(r, i));
    } while (t.expirationTime === Ke);
  }
  if (
    ((hr.current = $r),
    (t = Z !== null && Z.next !== null),
    (Ke = 0),
    (q = Z = H = null),
    (Mr = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function $t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (H.memoizedState = q = e) : (q = q.next = e), q;
}
function Xt() {
  if (Z === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = q === null ? H.memoizedState : q.next;
  if (t !== null) (q = t), (Z = e);
  else {
    if (e === null) throw Error(g(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      q === null ? (H.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function yt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bn(e) {
  var t = Xt(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = Z,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (i = i.next), (r = r.baseState);
    var u = (l = o = null),
      a = i;
    do {
      var s = a.expirationTime;
      if (s < Ke) {
        var p = {
          expirationTime: a.expirationTime,
          suspenseConfig: a.suspenseConfig,
          action: a.action,
          eagerReducer: a.eagerReducer,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((l = u = p), (o = r)) : (u = u.next = p),
          s > H.expirationTime && ((H.expirationTime = s), ui(s));
      } else
        u !== null &&
          (u = u.next =
            {
              expirationTime: 1073741823,
              suspenseConfig: a.suspenseConfig,
              action: a.action,
              eagerReducer: a.eagerReducer,
              eagerState: a.eagerState,
              next: null,
            }),
          ec(s, a.suspenseConfig),
          (r = a.eagerReducer === e ? a.eagerState : e(r, a.action));
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? (o = r) : (u.next = l),
      St(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function er(e) {
  var t = Xt(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    St(o, t.memoizedState) || (Te = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ti(e) {
  var t = $t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: yt,
        lastRenderedState: e,
      }),
    (e = e.dispatch = Fa.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function co(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Na() {
  return Xt().memoizedState;
}
function fo(e, t, n, r) {
  var i = $t();
  (H.effectTag |= e),
    (i.memoizedState = co(1 | t, n, void 0, r === void 0 ? null : r));
}
function yl(e, t, n, r) {
  var i = Xt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var l = Z.memoizedState;
    if (((o = l.destroy), r !== null && hl(r, l.deps))) {
      co(t, n, o, r);
      return;
    }
  }
  (H.effectTag |= e), (i.memoizedState = co(1 | t, n, o, r));
}
function Tu(e, t) {
  return fo(516, 4, e, t);
}
function zr(e, t) {
  return yl(516, 4, e, t);
}
function Oa(e, t) {
  return yl(4, 2, e, t);
}
function Ra(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function La(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), yl(4, 2, Ra.bind(null, t, e), n)
  );
}
function gl() {}
function xu(e, t) {
  return ($t().memoizedState = [e, t === void 0 ? null : t]), e;
}
function Ur(e, t) {
  var n = Xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ia(e, t) {
  var n = Xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vl(e, t, n) {
  var r = ni();
  it(98 > r ? 98 : r, function () {
    e(!0);
  }),
    it(97 < r ? 97 : r, function () {
      var i = me.suspense;
      me.suspense = t === void 0 ? null : t;
      try {
        e(!1), n();
      } finally {
        me.suspense = i;
      }
    });
}
function Fa(e, t, n) {
  var r = Pe(),
    i = gn.suspense;
  (r = wt(r, e, i)),
    (i = {
      expirationTime: r,
      suspenseConfig: i,
      action: n,
      eagerReducer: null,
      eagerState: null,
      next: null,
    });
  var o = t.pending;
  if (
    (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
    (t.pending = i),
    (o = e.alternate),
    e === H || (o !== null && o === H))
  )
    (Mr = !0), (i.expirationTime = Ke), (H.expirationTime = Ke);
  else {
    if (
      e.expirationTime === 0 &&
      (o === null || o.expirationTime === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = o(l, n);
        if (((i.eagerReducer = o), (i.eagerState = u), St(u, l))) return;
      } catch {
      } finally {
      }
    tt(e, r);
  }
}
var $r = {
    readContext: ye,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useResponder: ae,
    useDeferredValue: ae,
    useTransition: ae,
  },
  hd = {
    readContext: ye,
    useCallback: xu,
    useContext: ye,
    useEffect: Tu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), fo(4, 2, Ra.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
        (e = e.dispatch = Fa.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ti,
    useDebugValue: gl,
    useResponder: pl,
    useDeferredValue: function (e, t) {
      var n = Ti(e),
        r = n[0],
        i = n[1];
      return (
        Tu(
          function () {
            var o = me.suspense;
            me.suspense = t === void 0 ? null : t;
            try {
              i(e);
            } finally {
              me.suspense = o;
            }
          },
          [e, t]
        ),
        r
      );
    },
    useTransition: function (e) {
      var t = Ti(!1),
        n = t[0];
      return (t = t[1]), [xu(vl.bind(null, t, e), [t, e]), n];
    },
  },
  md = {
    readContext: ye,
    useCallback: Ur,
    useContext: ye,
    useEffect: zr,
    useImperativeHandle: La,
    useLayoutEffect: Oa,
    useMemo: Ia,
    useReducer: bn,
    useRef: Na,
    useState: function () {
      return bn(yt);
    },
    useDebugValue: gl,
    useResponder: pl,
    useDeferredValue: function (e, t) {
      var n = bn(yt),
        r = n[0],
        i = n[1];
      return (
        zr(
          function () {
            var o = me.suspense;
            me.suspense = t === void 0 ? null : t;
            try {
              i(e);
            } finally {
              me.suspense = o;
            }
          },
          [e, t]
        ),
        r
      );
    },
    useTransition: function (e) {
      var t = bn(yt),
        n = t[0];
      return (t = t[1]), [Ur(vl.bind(null, t, e), [t, e]), n];
    },
  },
  yd = {
    readContext: ye,
    useCallback: Ur,
    useContext: ye,
    useEffect: zr,
    useImperativeHandle: La,
    useLayoutEffect: Oa,
    useMemo: Ia,
    useReducer: er,
    useRef: Na,
    useState: function () {
      return er(yt);
    },
    useDebugValue: gl,
    useResponder: pl,
    useDeferredValue: function (e, t) {
      var n = er(yt),
        r = n[0],
        i = n[1];
      return (
        zr(
          function () {
            var o = me.suspense;
            me.suspense = t === void 0 ? null : t;
            try {
              i(e);
            } finally {
              me.suspense = o;
            }
          },
          [e, t]
        ),
        r
      );
    },
    useTransition: function (e) {
      var t = er(yt),
        n = t[0];
      return (t = t[1]), [Ur(vl.bind(null, t, e), [t, e]), n];
    },
  },
  De = null,
  Je = null,
  gt = !1;
function Da(e, t) {
  var n = xe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.type = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (n.effectTag = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function Cu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function po(e) {
  if (gt) {
    var t = Je;
    if (t) {
      var n = t;
      if (!Cu(e, t)) {
        if (((t = zt(n.nextSibling)), !t || !Cu(e, t))) {
          (e.effectTag = (e.effectTag & -1025) | 2), (gt = !1), (De = e);
          return;
        }
        Da(De, n);
      }
      (De = e), (Je = zt(t.firstChild));
    } else (e.effectTag = (e.effectTag & -1025) | 2), (gt = !1), (De = e);
  }
}
function Pu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  De = e;
}
function tr(e) {
  if (e !== De) return !1;
  if (!gt) return Pu(e), (gt = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== "head" && t !== "body" && !to(t, e.memoizedProps)))
    for (t = Je; t; ) Da(e, t), (t = zt(t.nextSibling));
  if ((Pu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === ea) {
            if (t === 0) {
              Je = zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== bs && n !== el && n !== bo) || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = De ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function xi() {
  (Je = De = null), (gt = !1);
}
var gd = we.ReactCurrentOwner,
  Te = !1;
function ce(e, t, n, r) {
  t.child = e === null ? fl(t, null, n, r) : Qt(t, e.child, n, r);
}
function _u(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Ut(t, i),
    (r = ml(e, t, n, r, o, i)),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.effectTag &= -517),
        e.expirationTime <= i && (e.expirationTime = 0),
        je(e, t, i))
      : ((t.effectTag |= 1), ce(e, t, r, i), t.child)
  );
}
function Nu(e, t, n, r, i, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Tl(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), ja(e, t, l, r, i, o))
      : ((e = gr(n.type, null, r, null, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  return (
    (l = e.child),
    i < o &&
    ((i = l.memoizedProps),
    (n = n.compare),
    (n = n !== null ? n : Cn),
    n(i, r) && e.ref === t.ref)
      ? je(e, t, o)
      : ((t.effectTag |= 1),
        (e = xt(l, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function ja(e, t, n, r, i, o) {
  return e !== null &&
    Cn(e.memoizedProps, r) &&
    e.ref === t.ref &&
    ((Te = !1), i < o)
    ? ((t.expirationTime = e.expirationTime), je(e, t, o))
    : ho(e, t, n, r, o);
}
function Aa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    (t.effectTag |= 128);
}
function ho(e, t, n, r, i) {
  var o = ie(n) ? Tt : b.current;
  return (
    (o = Ht(t, o)),
    Ut(t, i),
    (n = ml(e, t, n, r, o, i)),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.effectTag &= -517),
        e.expirationTime <= i && (e.expirationTime = 0),
        je(e, t, i))
      : ((t.effectTag |= 1), ce(e, t, n, i), t.child)
  );
}
function Ou(e, t, n, r, i) {
  if (ie(n)) {
    var o = !0;
    fr(t);
  } else o = !1;
  if ((Ut(t, i), t.stateNode === null))
    e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
      Pa(t, n, r),
      so(t, n, r, i),
      (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var a = l.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = ye(s))
      : ((s = ie(n) ? Tt : b.current), (s = Ht(t, s)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && ku(t, l, r, s)),
      (We = !1);
    var C = t.memoizedState;
    (l.state = C),
      Pn(t, r, l, i),
      (a = t.memoizedState),
      u !== r || C !== a || re.current || We
        ? (typeof p == "function" && (jr(t, n, p, r), (a = t.memoizedState)),
          (u = We || Eu(t, n, u, r, C, a, s))
            ? (m ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.effectTag |= 4))
            : (typeof l.componentDidMount == "function" && (t.effectTag |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = s),
          (r = u))
        : (typeof l.componentDidMount == "function" && (t.effectTag |= 4),
          (r = !1));
  } else
    (l = t.stateNode),
      cl(e, t),
      (u = t.memoizedProps),
      (l.props = t.type === t.elementType ? u : ve(t.type, u)),
      (a = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ye(s))
        : ((s = ie(n) ? Tt : b.current), (s = Ht(t, s))),
      (p = n.getDerivedStateFromProps),
      (m =
        typeof p == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function") ||
        (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
          typeof l.componentWillReceiveProps != "function") ||
        ((u !== r || a !== s) && ku(t, l, r, s)),
      (We = !1),
      (a = t.memoizedState),
      (l.state = a),
      Pn(t, r, l, i),
      (C = t.memoizedState),
      u !== r || a !== C || re.current || We
        ? (typeof p == "function" && (jr(t, n, p, r), (C = t.memoizedState)),
          (p = We || Eu(t, n, u, r, a, C, s))
            ? (m ||
                (typeof l.UNSAFE_componentWillUpdate != "function" &&
                  typeof l.componentWillUpdate != "function") ||
                (typeof l.componentWillUpdate == "function" &&
                  l.componentWillUpdate(r, C, s),
                typeof l.UNSAFE_componentWillUpdate == "function" &&
                  l.UNSAFE_componentWillUpdate(r, C, s)),
              typeof l.componentDidUpdate == "function" && (t.effectTag |= 4),
              typeof l.getSnapshotBeforeUpdate == "function" &&
                (t.effectTag |= 256))
            : (typeof l.componentDidUpdate != "function" ||
                (u === e.memoizedProps && a === e.memoizedState) ||
                (t.effectTag |= 4),
              typeof l.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && a === e.memoizedState) ||
                (t.effectTag |= 256),
              (t.memoizedProps = r),
              (t.memoizedState = C)),
          (l.props = r),
          (l.state = C),
          (l.context = s),
          (r = p))
        : (typeof l.componentDidUpdate != "function" ||
            (u === e.memoizedProps && a === e.memoizedState) ||
            (t.effectTag |= 4),
          typeof l.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && a === e.memoizedState) ||
            (t.effectTag |= 256),
          (r = !1));
  return mo(e, t, n, r, o, i);
}
function mo(e, t, n, r, i, o) {
  Aa(e, t);
  var l = (t.effectTag & 64) !== 0;
  if (!r && !l) return i && hu(t, n, !1), je(e, t, o);
  (r = t.stateNode), (gd.current = t);
  var u =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.effectTag |= 1),
    e !== null && l
      ? ((t.child = Qt(t, e.child, null, o)), (t.child = Qt(t, null, u, o)))
      : ce(e, t, u, o),
    (t.memoizedState = r.state),
    i && hu(t, n, !0),
    t.child
  );
}
function Ru(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pu(e, t.context, !1),
    ao(e, t.containerInfo);
}
var Ci = { dehydrated: null, retryTime: 0 };
function Lu(e, t, n) {
  var r = t.mode,
    i = t.pendingProps,
    o = $.current,
    l = !1,
    u;
  if (
    ((u = (t.effectTag & 64) !== 0) ||
      (u = (o & 2) !== 0 && (e === null || e.memoizedState !== null)),
    u
      ? ((l = !0), (t.effectTag &= -65))
      : (e !== null && e.memoizedState === null) ||
        i.fallback === void 0 ||
        i.unstable_avoidThisFallback === !0 ||
        (o |= 1),
    B($, o & 1),
    e === null)
  ) {
    if ((i.fallback !== void 0 && po(t), l)) {
      if (
        ((l = i.fallback),
        (i = Ye(null, r, 0, null)),
        (i.return = t),
        (t.mode & 2) === 0)
      )
        for (
          e = t.memoizedState !== null ? t.child.child : t.child, i.child = e;
          e !== null;

        )
          (e.return = i), (e = e.sibling);
      return (
        (n = Ye(l, r, n, null)),
        (n.return = t),
        (i.sibling = n),
        (t.memoizedState = Ci),
        (t.child = i),
        n
      );
    }
    return (
      (r = i.children), (t.memoizedState = null), (t.child = fl(t, null, r, n))
    );
  }
  if (e.memoizedState !== null) {
    if (((e = e.child), (r = e.sibling), l)) {
      if (
        ((i = i.fallback),
        (n = xt(e, e.pendingProps)),
        (n.return = t),
        (t.mode & 2) === 0 &&
          ((l = t.memoizedState !== null ? t.child.child : t.child),
          l !== e.child))
      )
        for (n.child = l; l !== null; ) (l.return = n), (l = l.sibling);
      return (
        (r = xt(r, i)),
        (r.return = t),
        (n.sibling = r),
        (n.childExpirationTime = 0),
        (t.memoizedState = Ci),
        (t.child = n),
        r
      );
    }
    return (
      (n = Qt(t, e.child, i.children, n)),
      (t.memoizedState = null),
      (t.child = n)
    );
  }
  if (((e = e.child), l)) {
    if (
      ((l = i.fallback),
      (i = Ye(null, r, 0, null)),
      (i.return = t),
      (i.child = e),
      e !== null && (e.return = i),
      (t.mode & 2) === 0)
    )
      for (
        e = t.memoizedState !== null ? t.child.child : t.child, i.child = e;
        e !== null;

      )
        (e.return = i), (e = e.sibling);
    return (
      (n = Ye(l, r, n, null)),
      (n.return = t),
      (i.sibling = n),
      (n.effectTag |= 2),
      (i.childExpirationTime = 0),
      (t.memoizedState = Ci),
      (t.child = i),
      n
    );
  }
  return (t.memoizedState = null), (t.child = Qt(t, e, i.children, n));
}
function Iu(e, t) {
  e.expirationTime < t && (e.expirationTime = t);
  var n = e.alternate;
  n !== null && n.expirationTime < t && (n.expirationTime = t), xa(e.return, t);
}
function Pi(e, t, n, r, i, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailExpiration: 0,
        tailMode: i,
        lastEffect: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailExpiration = 0),
      (l.tailMode = i),
      (l.lastEffect = o));
}
function Fu(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ce(e, t, r.children, n), (r = $.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.effectTag |= 64);
  else {
    if (e !== null && (e.effectTag & 64) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Iu(e, n);
        else if (e.tag === 19) Iu(e, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B($, r), (t.mode & 2) === 0)) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ar(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Pi(t, !1, i, n, o, t.lastEffect);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ar(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Pi(t, !0, n, null, o, t.lastEffect);
        break;
      case "together":
        Pi(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function je(e, t, n) {
  e !== null && (t.dependencies = e.dependencies);
  var r = t.expirationTime;
  if ((r !== 0 && ui(r), t.childExpirationTime < n)) return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
var Ma, yo, za, Ua;
Ma = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
yo = function () {};
za = function (e, t, n, r, i) {
  var o = e.memoizedProps;
  if (o !== r) {
    var l = t.stateNode;
    switch ((dt(Ce.current), (e = null), n)) {
      case "input":
        (o = Vi(l, o)), (r = Vi(l, r)), (e = []);
        break;
      case "option":
        (o = Hi(l, o)), (r = Hi(l, r)), (e = []);
        break;
      case "select":
        (o = te({}, o, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (e = []);
        break;
      case "textarea":
        (o = Qi(l, o)), (r = Qi(l, r)), (e = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (l.onclick = Nr);
    }
    Zi(n, r);
    var u, a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style")
          for (a in ((l = o[u]), l))
            l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Vt.hasOwnProperty(u)
              ? e || (e = [])
              : (e = e || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (e || (e = []), e.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (e = e || []).push(u, s))
            : u === "children"
            ? l === s ||
              (typeof s != "string" && typeof s != "number") ||
              (e = e || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Vt.hasOwnProperty(u)
                ? (s != null && Re(i, u), e || l === s || (e = []))
                : (e = e || []).push(u, s));
    }
    n && (e = e || []).push("style", n),
      (i = e),
      (t.updateQueue = i) && (t.effectTag |= 4);
  }
};
Ua = function (e, t, n, r) {
  n !== r && (t.effectTag |= 4);
};
function nr(e, t) {
  switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; )
        t.alternate !== null && (n = t), (t = t.sibling);
      n === null ? (e.tail = null) : (n.sibling = null);
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; )
        n.alternate !== null && (r = n), (n = n.sibling);
      r === null
        ? t || e.tail === null
          ? (e.tail = null)
          : (e.tail.sibling = null)
        : (r.sibling = null);
  }
}
function vd(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return ie(t.type) && Lr(), null;
    case 3:
      return (
        Kt(),
        z(re),
        z(b),
        (n = t.stateNode),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e !== null && e.child !== null) || !tr(t) || (t.effectTag |= 4),
        yo(t),
        null
      );
    case 5:
      dl(t), (n = dt(Nn.current));
      var i = t.type;
      if (e !== null && t.stateNode != null)
        za(e, t, i, r, n), e.ref !== t.ref && (t.effectTag |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return null;
        }
        if (((e = dt(Ce.current)), tr(t))) {
          (r = t.stateNode), (i = t.type);
          var o = t.memoizedProps;
          switch (((r[He] = t), (r[Or] = o), i)) {
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < an.length; e++) U(an[e], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "form":
              U("reset", r), U("submit", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Hl(r, o), U("invalid", r), Re(n, "onChange");
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r),
                Re(n, "onChange");
              break;
            case "textarea":
              Kl(r, o), U("invalid", r), Re(n, "onChange");
          }
          Zi(i, o), (e = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var u = o[l];
              l === "children"
                ? typeof u == "string"
                  ? r.textContent !== u && (e = ["children", u])
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (e = ["children", "" + u])
                : Vt.hasOwnProperty(l) && u != null && Re(n, l);
            }
          switch (i) {
            case "input":
              Yn(r), Ql(r, o, !0);
              break;
            case "textarea":
              Yn(r), Jl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Nr);
          }
          (n = e), (t.updateQueue = n), n !== null && (t.effectTag |= 4);
        } else {
          switch (
            ((l = n.nodeType === 9 ? n : n.ownerDocument),
            e === bl && (e = Is(i)),
            e === bl
              ? i === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(i, { is: r.is }))
                : ((e = l.createElement(i)),
                  i === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, i)),
            (e[He] = t),
            (e[Or] = r),
            Ma(e, t, !1, !1),
            (t.stateNode = e),
            (l = qi(i, r)),
            i)
          ) {
            case "iframe":
            case "object":
            case "embed":
              U("load", e), (u = r);
              break;
            case "video":
            case "audio":
              for (u = 0; u < an.length; u++) U(an[u], e);
              u = r;
              break;
            case "source":
              U("error", e), (u = r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", e), U("load", e), (u = r);
              break;
            case "form":
              U("reset", e), U("submit", e), (u = r);
              break;
            case "details":
              U("toggle", e), (u = r);
              break;
            case "input":
              Hl(e, r), (u = Vi(e, r)), U("invalid", e), Re(n, "onChange");
              break;
            case "option":
              u = Hi(e, r);
              break;
            case "select":
              (e._wrapperState = { wasMultiple: !!r.multiple }),
                (u = te({}, r, { value: void 0 })),
                U("invalid", e),
                Re(n, "onChange");
              break;
            case "textarea":
              Kl(e, r), (u = Qi(e, r)), U("invalid", e), Re(n, "onChange");
              break;
            default:
              u = r;
          }
          Zi(i, u);
          var a = u;
          for (o in a)
            if (a.hasOwnProperty(o)) {
              var s = a[o];
              o === "style"
                ? Zs(e, s)
                : o === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0), s != null && Fs(e, s))
                : o === "children"
                ? typeof s == "string"
                  ? (i !== "textarea" || s !== "") && kn(e, s)
                  : typeof s == "number" && kn(e, "" + s)
                : o !== "suppressContentEditableWarning" &&
                  o !== "suppressHydrationWarning" &&
                  o !== "autoFocus" &&
                  (Vt.hasOwnProperty(o)
                    ? s != null && Re(n, o)
                    : s != null && Bo(e, o, s, l));
            }
          switch (i) {
            case "input":
              Yn(e), Ql(e, r, !1);
              break;
            case "textarea":
              Yn(e), Jl(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + nt(r.value));
              break;
            case "select":
              (e.multiple = !!r.multiple),
                (n = r.value),
                n != null
                  ? Mt(e, !!r.multiple, n, !1)
                  : r.defaultValue != null &&
                    Mt(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof u.onClick == "function" && (e.onclick = Nr);
          }
          ta(i, r) && (t.effectTag |= 4);
        }
        t.ref !== null && (t.effectTag |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        (n = dt(Nn.current)),
          dt(Ce.current),
          tr(t)
            ? ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[He] = t),
              n.nodeValue !== r && (t.effectTag |= 4))
            : ((n = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (n[He] = t),
              (t.stateNode = n));
      }
      return null;
    case 13:
      return (
        z($),
        (r = t.memoizedState),
        (t.effectTag & 64) !== 0
          ? ((t.expirationTime = n), t)
          : ((n = r !== null),
            (r = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && tr(t)
              : ((i = e.memoizedState),
                (r = i !== null),
                n ||
                  i === null ||
                  ((i = e.child.sibling),
                  i !== null &&
                    ((o = t.firstEffect),
                    o !== null
                      ? ((t.firstEffect = i), (i.nextEffect = o))
                      : ((t.firstEffect = t.lastEffect = i),
                        (i.nextEffect = null)),
                    (i.effectTag = 8)))),
            n &&
              !r &&
              (t.mode & 2) !== 0 &&
              ((e === null &&
                t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              ($.current & 1) !== 0
                ? Q === vt && (Q = Wr)
                : ((Q === vt || Q === Wr) && (Q = ii),
                  Rn !== 0 && fe !== null && (mt(fe, oe), oc(fe, Rn)))),
            (n || r) && (t.effectTag |= 4),
            null)
      );
    case 4:
      return Kt(), yo(t), null;
    case 10:
      return sl(t), null;
    case 17:
      return ie(t.type) && Lr(), null;
    case 19:
      if ((z($), (r = t.memoizedState), r === null)) return null;
      if (((i = (t.effectTag & 64) !== 0), (o = r.rendering), o === null)) {
        if (i) nr(r, !1);
        else if (Q !== vt || (e !== null && (e.effectTag & 64) !== 0))
          for (o = t.child; o !== null; ) {
            if (((e = Ar(o)), e !== null)) {
              for (
                t.effectTag |= 64,
                  nr(r, !1),
                  i = e.updateQueue,
                  i !== null && ((t.updateQueue = i), (t.effectTag |= 4)),
                  r.lastEffect === null && (t.firstEffect = null),
                  t.lastEffect = r.lastEffect,
                  r = t.child;
                r !== null;

              )
                (i = r),
                  (o = n),
                  (i.effectTag &= 2),
                  (i.nextEffect = null),
                  (i.firstEffect = null),
                  (i.lastEffect = null),
                  (e = i.alternate),
                  e === null
                    ? ((i.childExpirationTime = 0),
                      (i.expirationTime = o),
                      (i.child = null),
                      (i.memoizedProps = null),
                      (i.memoizedState = null),
                      (i.updateQueue = null),
                      (i.dependencies = null))
                    : ((i.childExpirationTime = e.childExpirationTime),
                      (i.expirationTime = e.expirationTime),
                      (i.child = e.child),
                      (i.memoizedProps = e.memoizedProps),
                      (i.memoizedState = e.memoizedState),
                      (i.updateQueue = e.updateQueue),
                      (o = e.dependencies),
                      (i.dependencies =
                        o === null
                          ? null
                          : {
                              expirationTime: o.expirationTime,
                              firstContext: o.firstContext,
                              responders: o.responders,
                            })),
                  (r = r.sibling);
              return B($, ($.current & 1) | 2), t.child;
            }
            o = o.sibling;
          }
      } else {
        if (!i)
          if (((e = Ar(o)), e !== null)) {
            if (
              ((t.effectTag |= 64),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.effectTag |= 4)),
              nr(r, !0),
              r.tail === null && r.tailMode === "hidden" && !o.alternate)
            )
              return (
                (t = t.lastEffect = r.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              );
          } else
            2 * he() - r.renderingStartTime > r.tailExpiration &&
              1 < n &&
              ((t.effectTag |= 64),
              (i = !0),
              nr(r, !1),
              (t.expirationTime = t.childExpirationTime = n - 1));
        r.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = r.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (r.last = o));
      }
      return r.tail !== null
        ? (r.tailExpiration === 0 && (r.tailExpiration = he() + 500),
          (n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = he()),
          (n.sibling = null),
          (t = $.current),
          B($, i ? (t & 1) | 2 : t & 1),
          n)
        : null;
  }
  throw Error(g(156, t.tag));
}
function wd(e) {
  switch (e.tag) {
    case 1:
      ie(e.type) && Lr();
      var t = e.effectTag;
      return t & 4096 ? ((e.effectTag = (t & -4097) | 64), e) : null;
    case 3:
      if ((Kt(), z(re), z(b), (t = e.effectTag), (t & 64) !== 0))
        throw Error(g(285));
      return (e.effectTag = (t & -4097) | 64), e;
    case 5:
      return dl(e), null;
    case 13:
      return (
        z($),
        (t = e.effectTag),
        t & 4096 ? ((e.effectTag = (t & -4097) | 64), e) : null
      );
    case 19:
      return z($), null;
    case 4:
      return Kt(), null;
    case 10:
      return sl(e), null;
    default:
      return null;
  }
}
function wl(e, t) {
  return { value: e, source: t, stack: Qo(t) };
}
var Ed = typeof WeakSet == "function" ? WeakSet : Set;
function go(e, t) {
  var n = t.source,
    r = t.stack;
  r === null && n !== null && (r = Qo(n)),
    n !== null && Ae(n.type),
    (t = t.value),
    e !== null && e.tag === 1 && Ae(e.type);
  try {
    console.error(t);
  } catch (i) {
    setTimeout(function () {
      throw i;
    });
  }
}
function kd(e, t) {
  try {
    (t.props = e.memoizedProps),
      (t.state = e.memoizedState),
      t.componentWillUnmount();
  } catch (n) {
    Et(e, n);
  }
}
function Du(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (n) {
        Et(e, n);
      }
    else t.current = null;
}
function Sd(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.effectTag & 256 && e !== null) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : ve(t.type, n),
            r
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(g(163));
}
function $a(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.destroy;
        (n.destroy = void 0), r !== void 0 && r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Va(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Td(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      Va(3, n);
      return;
    case 1:
      if (((e = n.stateNode), n.effectTag & 4))
        if (t === null) e.componentDidMount();
        else {
          var r =
            n.elementType === n.type
              ? t.memoizedProps
              : ve(n.type, t.memoizedProps);
          e.componentDidUpdate(
            r,
            t.memoizedState,
            e.__reactInternalSnapshotBeforeUpdate
          );
        }
      (t = n.updateQueue), t !== null && wu(n, t, e);
      return;
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        wu(n, t, e);
      }
      return;
    case 5:
      (e = n.stateNode),
        t === null &&
          n.effectTag & 4 &&
          ta(n.type, n.memoizedProps) &&
          e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null &&
          ((n = n.memoizedState),
          n !== null && ((n = n.dehydrated), n !== null && Js(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
      return;
  }
  throw Error(g(163));
}
function ju(e, t, n) {
  switch ((typeof Co == "function" && Co(t), t.tag)) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (
        ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
      ) {
        var r = e.next;
        it(97 < n ? 97 : n, function () {
          var i = r;
          do {
            var o = i.destroy;
            if (o !== void 0) {
              var l = t;
              try {
                o();
              } catch (u) {
                Et(l, u);
              }
            }
            i = i.next;
          } while (i !== r);
        });
      }
      break;
    case 1:
      Du(t),
        (n = t.stateNode),
        typeof n.componentWillUnmount == "function" && kd(t, n);
      break;
    case 5:
      Du(t);
      break;
    case 4:
      Wa(e, t, n);
  }
}
function Ba(e) {
  var t = e.alternate;
  (e.return = null),
    (e.child = null),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.dependencies = null),
    (e.alternate = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.pendingProps = null),
    (e.memoizedProps = null),
    (e.stateNode = null),
    t !== null && Ba(t);
}
function Au(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mu(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Au(t)) {
        var n = t;
        break e;
      }
      t = t.return;
    }
    throw Error(g(160));
  }
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
      (t = t.containerInfo), (r = !0);
      break;
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(g(161));
  }
  n.effectTag & 16 && (kn(t, ""), (n.effectTag &= -17));
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Au(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

    ) {
      if (n.effectTag & 2 || n.child === null || n.tag === 4) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.effectTag & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? vo(e, n, t) : wo(e, n, t);
}
function vo(e, t, n) {
  var r = e.tag,
    i = r === 5 || r === 6;
  if (i)
    (e = i ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Nr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vo(e, t, n), e = e.sibling; e !== null; ) vo(e, t, n), (e = e.sibling);
}
function wo(e, t, n) {
  var r = e.tag,
    i = r === 5 || r === 6;
  if (i)
    (e = i ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wo(e, t, n), e = e.sibling; e !== null; ) wo(e, t, n), (e = e.sibling);
}
function Wa(e, t, n) {
  for (var r = t, i = !1, o, l; ; ) {
    if (!i) {
      i = r.return;
      e: for (;;) {
        if (i === null) throw Error(g(160));
        switch (((o = i.stateNode), i.tag)) {
          case 5:
            l = !1;
            break e;
          case 3:
            (o = o.containerInfo), (l = !0);
            break e;
          case 4:
            (o = o.containerInfo), (l = !0);
            break e;
        }
        i = i.return;
      }
      i = !0;
    }
    if (r.tag === 5 || r.tag === 6) {
      e: for (var u = e, a = r, s = n, p = a; ; )
        if ((ju(u, p, s), p.child !== null && p.tag !== 4))
          (p.child.return = p), (p = p.child);
        else {
          if (p === a) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === a) break e;
            p = p.return;
          }
          (p.sibling.return = p.return), (p = p.sibling);
        }
      l
        ? ((u = o),
          (a = r.stateNode),
          u.nodeType === 8 ? u.parentNode.removeChild(a) : u.removeChild(a))
        : o.removeChild(r.stateNode);
    } else if (r.tag === 4) {
      if (r.child !== null) {
        (o = r.stateNode.containerInfo),
          (l = !0),
          (r.child.return = r),
          (r = r.child);
        continue;
      }
    } else if ((ju(e, r, n), r.child !== null)) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      (r = r.return), r.tag === 4 && (i = !1);
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
}
function _i(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      $a(3, t);
      return;
    case 1:
      return;
    case 5:
      var n = t.stateNode;
      if (n != null) {
        var r = t.memoizedProps,
          i = e !== null ? e.memoizedProps : r;
        e = t.type;
        var o = t.updateQueue;
        if (((t.updateQueue = null), o !== null)) {
          for (
            n[Or] = r,
              e === "input" && r.type === "radio" && r.name != null && Os(n, r),
              qi(e, i),
              t = qi(e, r),
              i = 0;
            i < o.length;
            i += 2
          ) {
            var l = o[i],
              u = o[i + 1];
            l === "style"
              ? Zs(n, u)
              : l === "dangerouslySetInnerHTML"
              ? Fs(n, u)
              : l === "children"
              ? kn(n, u)
              : Bo(n, l, u, t);
          }
          switch (e) {
            case "input":
              Bi(n, r);
              break;
            case "textarea":
              Rs(n, r);
              break;
            case "select":
              (t = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                (e = r.value),
                e != null
                  ? Mt(n, !!r.multiple, e, !1)
                  : t !== !!r.multiple &&
                    (r.defaultValue != null
                      ? Mt(n, !!r.multiple, r.defaultValue, !0)
                      : Mt(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(g(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (t = t.stateNode), t.hydrate && ((t.hydrate = !1), Js(t.containerInfo));
      return;
    case 12:
      return;
    case 13:
      if (
        ((n = t),
        t.memoizedState === null
          ? (r = !1)
          : ((r = !0), (n = t.child), (Sl = he())),
        n !== null)
      )
        e: for (e = n; ; ) {
          if (e.tag === 5)
            (o = e.stateNode),
              r
                ? ((o = o.style),
                  typeof o.setProperty == "function"
                    ? o.setProperty("display", "none", "important")
                    : (o.display = "none"))
                : ((o = e.stateNode),
                  (i = e.memoizedProps.style),
                  (i =
                    i != null && i.hasOwnProperty("display")
                      ? i.display
                      : null),
                  (o.style.display = Gs("display", i)));
          else if (e.tag === 6)
            e.stateNode.nodeValue = r ? "" : e.memoizedProps;
          else if (
            e.tag === 13 &&
            e.memoizedState !== null &&
            e.memoizedState.dehydrated === null
          ) {
            (o = e.child.sibling), (o.return = e), (e = o);
            continue;
          } else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      zu(t);
      return;
    case 19:
      zu(t);
      return;
    case 17:
      return;
  }
  throw Error(g(163));
}
function zu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ed()),
      t.forEach(function (r) {
        var i = Fd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
var xd = typeof WeakMap == "function" ? WeakMap : Map;
function Ha(e, t, n) {
  (n = qe(n, null)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Kr || ((Kr = !0), (Eo = r)), go(e, t);
    }),
    n
  );
}
function Qa(e, t, n) {
  (n = qe(n, null)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function () {
      return go(e, t), r(i);
    };
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        typeof r != "function" &&
          (et === null ? (et = new Set([this])) : et.add(this), go(e, t));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
var Cd = Math.ceil,
  Vr = we.ReactCurrentDispatcher,
  Ka = we.ReactCurrentOwner,
  K = 0,
  El = 8,
  Ee = 16,
  _e = 32,
  vt = 0,
  Br = 1,
  Ja = 2,
  Wr = 3,
  ii = 4,
  kl = 5,
  O = K,
  fe = null,
  L = null,
  oe = 0,
  Q = vt,
  oi = null,
  Fe = 1073741823,
  On = 1073741823,
  Hr = null,
  Rn = 0,
  Qr = !1,
  Sl = 0,
  Ya = 500,
  x = null,
  Kr = !1,
  Eo = null,
  et = null,
  Jr = !1,
  vn = null,
  fn = 90,
  pt = null,
  wn = 0,
  ko = null,
  mr = 0;
function Pe() {
  return (O & (Ee | _e)) !== K
    ? 1073741821 - ((he() / 10) | 0)
    : mr !== 0
    ? mr
    : (mr = 1073741821 - ((he() / 10) | 0));
}
function wt(e, t, n) {
  if (((t = t.mode), (t & 2) === 0)) return 1073741823;
  var r = ni();
  if ((t & 4) === 0) return r === 99 ? 1073741823 : 1073741822;
  if ((O & Ee) !== K) return oe;
  if (n !== null) e = pr(e, n.timeoutMs | 0 || 5e3, 250);
  else
    switch (r) {
      case 99:
        e = 1073741823;
        break;
      case 98:
        e = pr(e, 150, 100);
        break;
      case 97:
      case 96:
        e = pr(e, 5e3, 250);
        break;
      case 95:
        e = 2;
        break;
      default:
        throw Error(g(326));
    }
  return fe !== null && e === oe && --e, e;
}
function tt(e, t) {
  if (50 < wn) throw ((wn = 0), (ko = null), Error(g(185)));
  if (((e = li(e, t)), e !== null)) {
    var n = ni();
    t === 1073741823
      ? (O & El) !== K && (O & (Ee | _e)) === K
        ? So(e)
        : (de(e), O === K && Ne())
      : de(e),
      (O & 4) === K ||
        (n !== 98 && n !== 99) ||
        (pt === null
          ? (pt = new Map([[e, t]]))
          : ((n = pt.get(e)), (n === void 0 || n > t) && pt.set(e, t)));
  }
}
function li(e, t) {
  e.expirationTime < t && (e.expirationTime = t);
  var n = e.alternate;
  n !== null && n.expirationTime < t && (n.expirationTime = t);
  var r = e.return,
    i = null;
  if (r === null && e.tag === 3) i = e.stateNode;
  else
    for (; r !== null; ) {
      if (
        ((n = r.alternate),
        r.childExpirationTime < t && (r.childExpirationTime = t),
        n !== null && n.childExpirationTime < t && (n.childExpirationTime = t),
        r.return === null && r.tag === 3)
      ) {
        i = r.stateNode;
        break;
      }
      r = r.return;
    }
  return (
    i !== null && (fe === i && (ui(t), Q === ii && mt(i, oe)), oc(i, t)), i
  );
}
function yr(e) {
  var t = e.lastExpiredTime;
  if (t !== 0 || ((t = e.firstPendingTime), !ic(e, t))) return t;
  var n = e.lastPingedTime;
  return (
    (e = e.nextKnownPendingLevel),
    (e = n > e ? n : e),
    2 >= e && t !== e ? 0 : e
  );
}
function de(e) {
  if (e.lastExpiredTime !== 0)
    (e.callbackExpirationTime = 1073741823),
      (e.callbackPriority = 99),
      (e.callbackNode = gu(So.bind(null, e)));
  else {
    var t = yr(e),
      n = e.callbackNode;
    if (t === 0)
      n !== null &&
        ((e.callbackNode = null),
        (e.callbackExpirationTime = 0),
        (e.callbackPriority = 90));
    else {
      var r = Pe();
      if (
        (t === 1073741823
          ? (r = 99)
          : t === 1 || t === 2
          ? (r = 95)
          : ((r = 10 * (1073741821 - t) - 10 * (1073741821 - r)),
            (r = 0 >= r ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95)),
        n !== null)
      ) {
        var i = e.callbackPriority;
        if (e.callbackExpirationTime === t && i >= r) return;
        n !== Ea && ma(n);
      }
      (e.callbackExpirationTime = t),
        (e.callbackPriority = r),
        (t =
          t === 1073741823
            ? gu(So.bind(null, e))
            : Sa(r, Xa.bind(null, e), {
                timeout: 10 * (1073741821 - t) - he(),
              })),
        (e.callbackNode = t);
    }
  }
}
function Xa(e, t) {
  if (((mr = 0), t)) return (t = Pe()), Po(e, t), de(e), null;
  var n = yr(e);
  if (n !== 0) {
    if (((t = e.callbackNode), (O & (Ee | _e)) !== K)) throw Error(g(327));
    if ((Gt(), (e === fe && n === oe) || ht(e, n), L !== null)) {
      var r = O;
      O |= Ee;
      var i = ba();
      do
        try {
          Nd();
          break;
        } catch (u) {
          qa(e, u);
        }
      while (1);
      if ((ul(), (O = r), (Vr.current = i), Q === Br))
        throw ((t = oi), ht(e, n), mt(e, n), de(e), t);
      if (L === null)
        switch (
          ((i = e.finishedWork = e.current.alternate),
          (e.finishedExpirationTime = n),
          (r = Q),
          (fe = null),
          r)
        ) {
          case vt:
          case Br:
            throw Error(g(345));
          case Ja:
            Po(e, 2 < n ? 2 : n);
            break;
          case Wr:
            if (
              (mt(e, n),
              (r = e.lastSuspendedTime),
              n === r && (e.nextKnownPendingLevel = To(i)),
              Fe === 1073741823 && ((i = Sl + Ya - he()), 10 < i))
            ) {
              if (Qr) {
                var o = e.lastPingedTime;
                if (o === 0 || o >= n) {
                  (e.lastPingedTime = n), ht(e, n);
                  break;
                }
              }
              if (((o = yr(e)), o !== 0 && o !== n)) break;
              if (r !== 0 && r !== n) {
                e.lastPingedTime = r;
                break;
              }
              e.timeoutHandle = ki(at.bind(null, e), i);
              break;
            }
            at(e);
            break;
          case ii:
            if (
              (mt(e, n),
              (r = e.lastSuspendedTime),
              n === r && (e.nextKnownPendingLevel = To(i)),
              Qr && ((i = e.lastPingedTime), i === 0 || i >= n))
            ) {
              (e.lastPingedTime = n), ht(e, n);
              break;
            }
            if (((i = yr(e)), i !== 0 && i !== n)) break;
            if (r !== 0 && r !== n) {
              e.lastPingedTime = r;
              break;
            }
            if (
              (On !== 1073741823
                ? (r = 10 * (1073741821 - On) - he())
                : Fe === 1073741823
                ? (r = 0)
                : ((r = 10 * (1073741821 - Fe) - 5e3),
                  (i = he()),
                  (n = 10 * (1073741821 - n) - i),
                  (r = i - r),
                  0 > r && (r = 0),
                  (r =
                    (120 > r
                      ? 120
                      : 480 > r
                      ? 480
                      : 1080 > r
                      ? 1080
                      : 1920 > r
                      ? 1920
                      : 3e3 > r
                      ? 3e3
                      : 4320 > r
                      ? 4320
                      : 1960 * Cd(r / 1960)) - r),
                  n < r && (r = n)),
              10 < r)
            ) {
              e.timeoutHandle = ki(at.bind(null, e), r);
              break;
            }
            at(e);
            break;
          case kl:
            if (Fe !== 1073741823 && Hr !== null) {
              o = Fe;
              var l = Hr;
              if (
                ((r = l.busyMinDurationMs | 0),
                0 >= r
                  ? (r = 0)
                  : ((i = l.busyDelayMs | 0),
                    (o =
                      he() -
                      (10 * (1073741821 - o) - (l.timeoutMs | 0 || 5e3))),
                    (r = o <= i ? 0 : i + r - o)),
                10 < r)
              ) {
                mt(e, n), (e.timeoutHandle = ki(at.bind(null, e), r));
                break;
              }
            }
            at(e);
            break;
          default:
            throw Error(g(329));
        }
      if ((de(e), e.callbackNode === t)) return Xa.bind(null, e);
    }
  }
  return null;
}
function So(e) {
  var t = e.lastExpiredTime;
  if (((t = t !== 0 ? t : 1073741823), (O & (Ee | _e)) !== K))
    throw Error(g(327));
  if ((Gt(), (e === fe && t === oe) || ht(e, t), L !== null)) {
    var n = O;
    O |= Ee;
    var r = ba();
    do
      try {
        _d();
        break;
      } catch (i) {
        qa(e, i);
      }
    while (1);
    if ((ul(), (O = n), (Vr.current = r), Q === Br))
      throw ((n = oi), ht(e, t), mt(e, t), de(e), n);
    if (L !== null) throw Error(g(261));
    (e.finishedWork = e.current.alternate),
      (e.finishedExpirationTime = t),
      (fe = null),
      at(e),
      de(e);
  }
  return null;
}
function Pd() {
  if (pt !== null) {
    var e = pt;
    (pt = null),
      e.forEach(function (t, n) {
        Po(n, t), de(n);
      }),
      Ne();
  }
}
function Ga(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === K && Ne();
  }
}
function Za(e, t) {
  var n = O;
  (O &= -2), (O |= El);
  try {
    return e(t);
  } finally {
    (O = n), O === K && Ne();
  }
}
function ht(e, t) {
  (e.finishedWork = null), (e.finishedExpirationTime = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Cf(n)), L !== null))
    for (n = L.return; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          (r = r.type.childContextTypes), r != null && Lr();
          break;
        case 3:
          Kt(), z(re), z(b);
          break;
        case 5:
          dl(r);
          break;
        case 4:
          Kt();
          break;
        case 13:
          z($);
          break;
        case 19:
          z($);
          break;
        case 10:
          sl(r);
      }
      n = n.return;
    }
  (fe = e),
    (L = xt(e.current, null)),
    (oe = t),
    (Q = vt),
    (oi = null),
    (On = Fe = 1073741823),
    (Hr = null),
    (Rn = 0),
    (Qr = !1);
}
function qa(e, t) {
  do {
    try {
      if ((ul(), (hr.current = $r), Mr))
        for (var n = H.memoizedState; n !== null; ) {
          var r = n.queue;
          r !== null && (r.pending = null), (n = n.next);
        }
      if (
        ((Ke = 0),
        (q = Z = H = null),
        (Mr = !1),
        L === null || L.return === null)
      )
        return (Q = Br), (oi = t), (L = null);
      e: {
        var i = e,
          o = L.return,
          l = L,
          u = t;
        if (
          ((t = oe),
          (l.effectTag |= 2048),
          (l.firstEffect = l.lastEffect = null),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u;
          if ((l.mode & 2) === 0) {
            var s = l.alternate;
            s
              ? ((l.updateQueue = s.updateQueue),
                (l.memoizedState = s.memoizedState),
                (l.expirationTime = s.expirationTime))
              : ((l.updateQueue = null), (l.memoizedState = null));
          }
          var p = ($.current & 1) !== 0,
            m = o;
          do {
            var C;
            if ((C = m.tag === 13)) {
              var T = m.memoizedState;
              if (T !== null) C = T.dehydrated !== null;
              else {
                var k = m.memoizedProps;
                C =
                  k.fallback === void 0
                    ? !1
                    : k.unstable_avoidThisFallback !== !0
                    ? !0
                    : !p;
              }
            }
            if (C) {
              var P = m.updateQueue;
              if (P === null) {
                var f = new Set();
                f.add(a), (m.updateQueue = f);
              } else P.add(a);
              if ((m.mode & 2) === 0) {
                if (((m.effectTag |= 64), (l.effectTag &= -2981), l.tag === 1))
                  if (l.alternate === null) l.tag = 17;
                  else {
                    var c = qe(1073741823, null);
                    (c.tag = 2), be(l, c);
                  }
                l.expirationTime = 1073741823;
                break e;
              }
              (u = void 0), (l = t);
              var d = i.pingCache;
              if (
                (d === null
                  ? ((d = i.pingCache = new xd()), (u = new Set()), d.set(a, u))
                  : ((u = d.get(a)),
                    u === void 0 && ((u = new Set()), d.set(a, u))),
                !u.has(l))
              ) {
                u.add(l);
                var y = Id.bind(null, i, a, l);
                a.then(y, y);
              }
              (m.effectTag |= 4096), (m.expirationTime = t);
              break e;
            }
            m = m.return;
          } while (m !== null);
          u = Error(
            (Ae(l.type) || "A React component") +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.` +
              Qo(l)
          );
        }
        Q !== kl && (Q = Ja), (u = wl(u, l)), (m = o);
        do {
          switch (m.tag) {
            case 3:
              (a = u), (m.effectTag |= 4096), (m.expirationTime = t);
              var v = Ha(m, a, t);
              vu(m, v);
              break e;
            case 1:
              a = u;
              var E = m.type,
                _ = m.stateNode;
              if (
                (m.effectTag & 64) === 0 &&
                (typeof E.getDerivedStateFromError == "function" ||
                  (_ !== null &&
                    typeof _.componentDidCatch == "function" &&
                    (et === null || !et.has(_))))
              ) {
                (m.effectTag |= 4096), (m.expirationTime = t);
                var I = Qa(m, a, t);
                vu(m, I);
                break e;
              }
          }
          m = m.return;
        } while (m !== null);
      }
      L = nc(L);
    } catch (F) {
      t = F;
      continue;
    }
    break;
  } while (1);
}
function ba() {
  var e = Vr.current;
  return (Vr.current = $r), e === null ? $r : e;
}
function ec(e, t) {
  e < Fe && 2 < e && (Fe = e),
    t !== null && e < On && 2 < e && ((On = e), (Hr = t));
}
function ui(e) {
  e > Rn && (Rn = e);
}
function _d() {
  for (; L !== null; ) L = tc(L);
}
function Nd() {
  for (; L !== null && !dd(); ) L = tc(L);
}
function tc(e) {
  var t = rc(e.alternate, e, oe);
  return (
    (e.memoizedProps = e.pendingProps),
    t === null && (t = nc(e)),
    (Ka.current = null),
    t
  );
}
function nc(e) {
  L = e;
  do {
    var t = L.alternate;
    if (((e = L.return), (L.effectTag & 2048) === 0)) {
      if (((t = vd(t, L, oe)), oe === 1 || L.childExpirationTime !== 1)) {
        for (var n = 0, r = L.child; r !== null; ) {
          var i = r.expirationTime,
            o = r.childExpirationTime;
          i > n && (n = i), o > n && (n = o), (r = r.sibling);
        }
        L.childExpirationTime = n;
      }
      if (t !== null) return t;
      e !== null &&
        (e.effectTag & 2048) === 0 &&
        (e.firstEffect === null && (e.firstEffect = L.firstEffect),
        L.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = L.firstEffect),
          (e.lastEffect = L.lastEffect)),
        1 < L.effectTag &&
          (e.lastEffect !== null
            ? (e.lastEffect.nextEffect = L)
            : (e.firstEffect = L),
          (e.lastEffect = L)));
    } else {
      if (((t = wd(L)), t !== null)) return (t.effectTag &= 2047), t;
      e !== null &&
        ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
    }
    if (((t = L.sibling), t !== null)) return t;
    L = e;
  } while (L !== null);
  return Q === vt && (Q = kl), null;
}
function To(e) {
  var t = e.expirationTime;
  return (e = e.childExpirationTime), t > e ? t : e;
}
function at(e) {
  var t = ni();
  return it(99, Od.bind(null, e, t)), null;
}
function Od(e, t) {
  do Gt();
  while (vn !== null);
  if ((O & (Ee | _e)) !== K) throw Error(g(327));
  var n = e.finishedWork,
    r = e.finishedExpirationTime;
  if (n === null) return null;
  if (
    ((e.finishedWork = null), (e.finishedExpirationTime = 0), n === e.current)
  )
    throw Error(g(177));
  (e.callbackNode = null),
    (e.callbackExpirationTime = 0),
    (e.callbackPriority = 90),
    (e.nextKnownPendingLevel = 0);
  var i = To(n);
  if (
    ((e.firstPendingTime = i),
    r <= e.lastSuspendedTime
      ? (e.firstSuspendedTime =
          e.lastSuspendedTime =
          e.nextKnownPendingLevel =
            0)
      : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
    r <= e.lastPingedTime && (e.lastPingedTime = 0),
    r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
    e === fe && ((L = fe = null), (oe = 0)),
    1 < n.effectTag
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (i = n.firstEffect))
        : (i = n)
      : (i = n.firstEffect),
    i !== null)
  ) {
    var o = O;
    (O |= _e), (Ka.current = null), (wi = ur);
    var l = nu();
    if (eo(l)) {
      if ("selectionStart" in l)
        var u = { start: l.selectionStart, end: l.selectionEnd };
      else
        e: {
          u = ((u = l.ownerDocument) && u.defaultView) || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var s = a.anchorOffset,
              p = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, p.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0,
              C = -1,
              T = -1,
              k = 0,
              P = 0,
              f = l,
              c = null;
            t: for (;;) {
              for (
                var d;
                f !== u || (s !== 0 && f.nodeType !== 3) || (C = m + s),
                  f !== p || (a !== 0 && f.nodeType !== 3) || (T = m + a),
                  f.nodeType === 3 && (m += f.nodeValue.length),
                  (d = f.firstChild) !== null;

              )
                (c = f), (f = d);
              for (;;) {
                if (f === l) break t;
                if (
                  (c === u && ++k === s && (C = m),
                  c === p && ++P === a && (T = m),
                  (d = f.nextSibling) !== null)
                )
                  break;
                (f = c), (c = f.parentNode);
              }
              f = d;
            }
            u = C === -1 || T === -1 ? null : { start: C, end: T };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    (Ei = { activeElementDetached: null, focusedElem: l, selectionRange: u }),
      (ur = !1),
      (x = i);
    do
      try {
        Rd();
      } catch (R) {
        if (x === null) throw Error(g(330));
        Et(x, R), (x = x.nextEffect);
      }
    while (x !== null);
    x = i;
    do
      try {
        for (l = e, u = t; x !== null; ) {
          var y = x.effectTag;
          if ((y & 16 && kn(x.stateNode, ""), y & 128)) {
            var v = x.alternate;
            if (v !== null) {
              var E = v.ref;
              E !== null &&
                (typeof E == "function" ? E(null) : (E.current = null));
            }
          }
          switch (y & 1038) {
            case 2:
              Mu(x), (x.effectTag &= -3);
              break;
            case 6:
              Mu(x), (x.effectTag &= -3), _i(x.alternate, x);
              break;
            case 1024:
              x.effectTag &= -1025;
              break;
            case 1028:
              (x.effectTag &= -1025), _i(x.alternate, x);
              break;
            case 4:
              _i(x.alternate, x);
              break;
            case 8:
              (s = x), Wa(l, s, u), Ba(s);
          }
          x = x.nextEffect;
        }
      } catch (R) {
        if (x === null) throw Error(g(330));
        Et(x, R), (x = x.nextEffect);
      }
    while (x !== null);
    if (
      ((E = Ei),
      (v = nu()),
      (y = E.focusedElem),
      (u = E.selectionRange),
      v !== y && y && y.ownerDocument && qs(y.ownerDocument.documentElement, y))
    ) {
      for (
        u !== null &&
          eo(y) &&
          ((v = u.start),
          (E = u.end),
          E === void 0 && (E = v),
          ("selectionStart" in y)
            ? ((y.selectionStart = v),
              (y.selectionEnd = Math.min(E, y.value.length)))
            : ((E =
                ((v = y.ownerDocument || document) && v.defaultView) || window),
              E.getSelection &&
                ((E = E.getSelection()),
                (s = y.textContent.length),
                (l = Math.min(u.start, s)),
                (u = u.end === void 0 ? l : Math.min(u.end, s)),
                !E.extend && l > u && ((s = u), (u = l), (l = s)),
                (s = tu(y, l)),
                (p = tu(y, u)),
                s &&
                  p &&
                  (E.rangeCount !== 1 ||
                    E.anchorNode !== s.node ||
                    E.anchorOffset !== s.offset ||
                    E.focusNode !== p.node ||
                    E.focusOffset !== p.offset) &&
                  ((v = v.createRange()),
                  v.setStart(s.node, s.offset),
                  E.removeAllRanges(),
                  l > u
                    ? (E.addRange(v), E.extend(p.node, p.offset))
                    : (v.setEnd(p.node, p.offset), E.addRange(v)))))),
          v = [],
          E = y;
        (E = E.parentNode);

      )
        E.nodeType === 1 &&
          v.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
      for (typeof y.focus == "function" && y.focus(), y = 0; y < v.length; y++)
        (E = v[y]),
          (E.element.scrollLeft = E.left),
          (E.element.scrollTop = E.top);
    }
    (ur = !!wi), (Ei = wi = null), (e.current = n), (x = i);
    do
      try {
        for (y = e; x !== null; ) {
          var _ = x.effectTag;
          if ((_ & 36 && Td(y, x.alternate, x), _ & 128)) {
            v = void 0;
            var I = x.ref;
            if (I !== null) {
              var F = x.stateNode;
              switch (x.tag) {
                case 5:
                  v = F;
                  break;
                default:
                  v = F;
              }
              typeof I == "function" ? I(v) : (I.current = v);
            }
          }
          x = x.nextEffect;
        }
      } catch (R) {
        if (x === null) throw Error(g(330));
        Et(x, R), (x = x.nextEffect);
      }
    while (x !== null);
    (x = null), pd(), (O = o);
  } else e.current = n;
  if (Jr) (Jr = !1), (vn = e), (fn = t);
  else
    for (x = i; x !== null; )
      (t = x.nextEffect), (x.nextEffect = null), (x = t);
  if (
    ((t = e.firstPendingTime),
    t === 0 && (et = null),
    t === 1073741823 ? (e === ko ? wn++ : ((wn = 0), (ko = e))) : (wn = 0),
    typeof xo == "function" && xo(n.stateNode, r),
    de(e),
    Kr)
  )
    throw ((Kr = !1), (e = Eo), (Eo = null), e);
  return (O & El) !== K || Ne(), null;
}
function Rd() {
  for (; x !== null; ) {
    var e = x.effectTag;
    (e & 256) !== 0 && Sd(x.alternate, x),
      (e & 512) === 0 ||
        Jr ||
        ((Jr = !0),
        Sa(97, function () {
          return Gt(), null;
        })),
      (x = x.nextEffect);
  }
}
function Gt() {
  if (fn !== 90) {
    var e = 97 < fn ? 97 : fn;
    return (fn = 90), it(e, Ld);
  }
}
function Ld() {
  if (vn === null) return !1;
  var e = vn;
  if (((vn = null), (O & (Ee | _e)) !== K)) throw Error(g(331));
  var t = O;
  for (O |= _e, e = e.current.firstEffect; e !== null; ) {
    try {
      var n = e;
      if ((n.effectTag & 512) !== 0)
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            $a(5, n), Va(5, n);
        }
    } catch (r) {
      if (e === null) throw Error(g(330));
      Et(e, r);
    }
    (n = e.nextEffect), (e.nextEffect = null), (e = n);
  }
  return (O = t), Ne(), !0;
}
function Uu(e, t, n) {
  (t = wl(n, t)),
    (t = Ha(e, t, 1073741823)),
    be(e, t),
    (e = li(e, 1073741823)),
    e !== null && de(e);
}
function Et(e, t) {
  if (e.tag === 3) Uu(e, e, t);
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        Uu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (et === null || !et.has(r)))
        ) {
          (e = wl(t, e)),
            (e = Qa(n, e, 1073741823)),
            be(n, e),
            (n = li(n, 1073741823)),
            n !== null && de(n);
          break;
        }
      }
      n = n.return;
    }
}
function Id(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    fe === e && oe === n
      ? Q === ii || (Q === Wr && Fe === 1073741823 && he() - Sl < Ya)
        ? ht(e, oe)
        : (Qr = !0)
      : ic(e, n) &&
        ((t = e.lastPingedTime),
        (t !== 0 && t < n) || ((e.lastPingedTime = n), de(e)));
}
function Fd(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t),
    (t = 0),
    t === 0 && ((t = Pe()), (t = wt(t, e, null))),
    (e = li(e, t)),
    e !== null && de(e);
}
var rc;
rc = function (e, t, n) {
  var r = t.expirationTime;
  if (e !== null) {
    var i = t.pendingProps;
    if (e.memoizedProps !== i || re.current) Te = !0;
    else {
      if (r < n) {
        switch (((Te = !1), t.tag)) {
          case 3:
            Ru(t), xi();
            break;
          case 5:
            if ((Su(t), t.mode & 4 && n !== 1 && i.hidden))
              return (t.expirationTime = t.childExpirationTime = 1), null;
            break;
          case 1:
            ie(t.type) && fr(t);
            break;
          case 4:
            ao(t, t.stateNode.containerInfo);
            break;
          case 10:
            (r = t.memoizedProps.value),
              (i = t.type._context),
              B(Ir, i._currentValue),
              (i._currentValue = r);
            break;
          case 13:
            if (t.memoizedState !== null)
              return (
                (r = t.child.childExpirationTime),
                r !== 0 && r >= n
                  ? Lu(e, t, n)
                  : (B($, $.current & 1),
                    (t = je(e, t, n)),
                    t !== null ? t.sibling : null)
              );
            B($, $.current & 1);
            break;
          case 19:
            if (((r = t.childExpirationTime >= n), (e.effectTag & 64) !== 0)) {
              if (r) return Fu(e, t, n);
              t.effectTag |= 64;
            }
            if (
              ((i = t.memoizedState),
              i !== null && ((i.rendering = null), (i.tail = null)),
              B($, $.current),
              !r)
            )
              return null;
        }
        return je(e, t, n);
      }
      Te = !1;
    }
  } else Te = !1;
  switch (((t.expirationTime = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
        (e = t.pendingProps),
        (i = Ht(t, b.current)),
        Ut(t, n),
        (i = ml(null, t, r, e, i, n)),
        (t.effectTag |= 1),
        typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ie(r))
        ) {
          var o = !0;
          fr(t);
        } else o = !1;
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
          al(t);
        var l = r.getDerivedStateFromProps;
        typeof l == "function" && jr(t, r, l, e),
          (i.updater = ri),
          (t.stateNode = i),
          (i._reactInternalFiber = t),
          so(t, r, e, n),
          (t = mo(null, t, r, !0, o, n));
      } else (t.tag = 0), ce(null, t, i, n), (t = t.child);
      return t;
    case 16:
      e: {
        if (
          ((i = t.elementType),
          e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
          (e = t.pendingProps),
          sf(i),
          i._status !== 1)
        )
          throw i._result;
        switch (
          ((i = i._result),
          (t.type = i),
          (o = t.tag = Ad(i)),
          (e = ve(i, e)),
          o)
        ) {
          case 0:
            t = ho(null, t, i, e, n);
            break e;
          case 1:
            t = Ou(null, t, i, e, n);
            break e;
          case 11:
            t = _u(null, t, i, e, n);
            break e;
          case 14:
            t = Nu(null, t, i, ve(i.type, e), r, n);
            break e;
        }
        throw Error(g(306, i, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ve(r, i)),
        ho(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ve(r, i)),
        Ou(e, t, r, i, n)
      );
    case 3:
      if ((Ru(t), (r = t.updateQueue), e === null || r === null))
        throw Error(g(282));
      if (
        ((r = t.pendingProps),
        (i = t.memoizedState),
        (i = i !== null ? i.element : null),
        cl(e, t),
        Pn(t, r, null, n),
        (r = t.memoizedState.element),
        r === i)
      )
        xi(), (t = je(e, t, n));
      else {
        if (
          ((i = t.stateNode.hydrate) &&
            ((Je = zt(t.stateNode.containerInfo.firstChild)),
            (De = t),
            (i = gt = !0)),
          i)
        )
          for (n = fl(t, null, r, n), t.child = n; n; )
            (n.effectTag = (n.effectTag & -3) | 1024), (n = n.sibling);
        else ce(e, t, r, n), xi();
        t = t.child;
      }
      return t;
    case 5:
      return (
        Su(t),
        e === null && po(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        to(r, i) ? (l = null) : o !== null && to(r, o) && (t.effectTag |= 16),
        Aa(e, t),
        t.mode & 4 && n !== 1 && i.hidden
          ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
          : (ce(e, t, l, n), (t = t.child)),
        t
      );
    case 6:
      return e === null && po(t), null;
    case 13:
      return Lu(e, t, n);
    case 4:
      return (
        ao(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Qt(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ve(r, i)),
        _u(e, t, r, i, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (o = i.value);
        var u = t.type._context;
        if ((B(Ir, u._currentValue), (u._currentValue = o), l !== null))
          if (
            ((u = l.value),
            (o = St(u, o)
              ? 0
              : (typeof r._calculateChangedBits == "function"
                  ? r._calculateChangedBits(u, o)
                  : 1073741823) | 0),
            o === 0)
          ) {
            if (l.children === i.children && !re.current) {
              t = je(e, t, n);
              break e;
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var a = u.dependencies;
              if (a !== null) {
                l = u.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r && (s.observedBits & o) !== 0) {
                    u.tag === 1 && ((s = qe(n, null)), (s.tag = 2), be(u, s)),
                      u.expirationTime < n && (u.expirationTime = n),
                      (s = u.alternate),
                      s !== null &&
                        s.expirationTime < n &&
                        (s.expirationTime = n),
                      xa(u.return, n),
                      a.expirationTime < n && (a.expirationTime = n);
                    break;
                  }
                  s = s.next;
                }
              } else l = u.tag === 10 && u.type === t.type ? null : u.child;
              if (l !== null) l.return = u;
              else
                for (l = u; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((u = l.sibling), u !== null)) {
                    (u.return = l.return), (l = u);
                    break;
                  }
                  l = l.return;
                }
              u = l;
            }
        ce(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (r = o.children),
        Ut(t, n),
        (i = ye(i, o.unstable_observedBits)),
        (r = r(i)),
        (t.effectTag |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (i = t.type),
        (o = ve(i, t.pendingProps)),
        (o = ve(i.type, o)),
        Nu(e, t, i, o, r, n)
      );
    case 15:
      return ja(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ve(r, i)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
        (t.tag = 1),
        ie(r) ? ((e = !0), fr(t)) : (e = !1),
        Ut(t, n),
        Pa(t, r, i),
        so(t, r, i, n),
        mo(null, t, r, !0, e, n)
      );
    case 19:
      return Fu(e, t, n);
  }
  throw Error(g(156, t.tag));
};
var xo = null,
  Co = null;
function Dd(e) {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
  var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (t.isDisabled || !t.supportsFiber) return !0;
  try {
    var n = t.inject(e);
    (xo = function (r) {
      try {
        t.onCommitFiberRoot(n, r, void 0, (r.current.effectTag & 64) === 64);
      } catch {}
    }),
      (Co = function (r) {
        try {
          t.onCommitFiberUnmount(n, r);
        } catch {}
      });
  } catch {}
  return !0;
}
function jd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.effectTag = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childExpirationTime = this.expirationTime = 0),
    (this.alternate = null);
}
function xe(e, t, n, r) {
  return new jd(e, t, n, r);
}
function Tl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ad(e) {
  if (typeof e == "function") return Tl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Wo)) return 11;
    if (e === Ho) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = xe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.effectTag = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childExpirationTime = e.childExpirationTime),
    (n.expirationTime = e.expirationTime),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders,
          }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function gr(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) Tl(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case ct:
        return Ye(n.children, i, o, t);
      case uf:
        (l = 8), (i |= 7);
        break;
      case Ss:
        (l = 8), (i |= 1);
        break;
      case ir:
        return (
          (e = xe(12, n, t, i | 8)),
          (e.elementType = ir),
          (e.type = ir),
          (e.expirationTime = o),
          e
        );
      case or:
        return (
          (e = xe(13, n, t, i)),
          (e.type = or),
          (e.elementType = or),
          (e.expirationTime = o),
          e
        );
      case $i:
        return (
          (e = xe(19, n, t, i)), (e.elementType = $i), (e.expirationTime = o), e
        );
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ts:
              l = 10;
              break e;
            case xs:
              l = 9;
              break e;
            case Wo:
              l = 11;
              break e;
            case Ho:
              l = 14;
              break e;
            case Cs:
              (l = 16), (r = null);
              break e;
            case Ps:
              l = 22;
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = xe(l, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.expirationTime = o),
    t
  );
}
function Ye(e, t, n, r) {
  return (e = xe(7, e, r, t)), (e.expirationTime = n), e;
}
function Ni(e, t, n) {
  return (e = xe(6, e, null, t)), (e.expirationTime = n), e;
}
function Oi(e, t, n) {
  return (
    (t = xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.expirationTime = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Md(e, t, n) {
  (this.tag = t),
    (this.current = null),
    (this.containerInfo = e),
    (this.pingCache = this.pendingChildren = null),
    (this.finishedExpirationTime = 0),
    (this.finishedWork = null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 90),
    (this.lastExpiredTime =
      this.lastPingedTime =
      this.nextKnownPendingLevel =
      this.lastSuspendedTime =
      this.firstSuspendedTime =
      this.firstPendingTime =
        0);
}
function ic(e, t) {
  var n = e.firstSuspendedTime;
  return (e = e.lastSuspendedTime), n !== 0 && n >= t && e <= t;
}
function mt(e, t) {
  var n = e.firstSuspendedTime,
    r = e.lastSuspendedTime;
  n < t && (e.firstSuspendedTime = t),
    (r > t || n === 0) && (e.lastSuspendedTime = t),
    t <= e.lastPingedTime && (e.lastPingedTime = 0),
    t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
}
function oc(e, t) {
  t > e.firstPendingTime && (e.firstPendingTime = t);
  var n = e.firstSuspendedTime;
  n !== 0 &&
    (t >= n
      ? (e.firstSuspendedTime =
          e.lastSuspendedTime =
          e.nextKnownPendingLevel =
            0)
      : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
    t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
}
function Po(e, t) {
  var n = e.lastExpiredTime;
  (n === 0 || n > t) && (e.lastExpiredTime = t);
}
function Yr(e, t, n, r) {
  var i = t.current,
    o = Pe(),
    l = gn.suspense;
  o = wt(o, i, l);
  e: if (n) {
    n = n._reactInternalFiber;
    t: {
      if (Pt(n) !== n || n.tag !== 1) throw Error(g(170));
      var u = n;
      do {
        switch (u.tag) {
          case 3:
            u = u.stateNode.context;
            break t;
          case 1:
            if (ie(u.type)) {
              u = u.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        u = u.return;
      } while (u !== null);
      throw Error(g(171));
    }
    if (n.tag === 1) {
      var a = n.type;
      if (ie(a)) {
        n = ha(n, a, u);
        break e;
      }
    }
    n = u;
  } else n = rt;
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    be(i, t),
    tt(i, o),
    o
  );
}
function Ri(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $u(e, t) {
  (e = e.memoizedState),
    e !== null && e.dehydrated !== null && e.retryTime < t && (e.retryTime = t);
}
function xl(e, t) {
  $u(e, t), (e = e.alternate) && $u(e, t);
}
function Cl(e, t, n) {
  n = n != null && n.hydrate === !0;
  var r = new Md(e, t, n),
    i = xe(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0);
  (r.current = i),
    (i.stateNode = r),
    al(i),
    (e[jn] = r.current),
    n && t !== 0 && hf(e, e.nodeType === 9 ? e : e.ownerDocument),
    (this._internalRoot = r);
}
Cl.prototype.render = function (e) {
  Yr(e, this._internalRoot, null, null);
};
Cl.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  Yr(null, e, null, function () {
    t[jn] = null;
  });
};
function Vn(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zd(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot")))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n);
  return new Cl(e, 0, t ? { hydrate: !0 } : void 0);
}
function si(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o._internalRoot;
    if (typeof i == "function") {
      var u = i;
      i = function () {
        var s = Ri(l);
        u.call(s);
      };
    }
    Yr(t, l, e, i);
  } else {
    if (
      ((o = n._reactRootContainer = zd(n, r)),
      (l = o._internalRoot),
      typeof i == "function")
    ) {
      var a = i;
      i = function () {
        var s = Ri(l);
        a.call(s);
      };
    }
    Za(function () {
      Yr(t, l, e, i);
    });
  }
  return Ri(l);
}
function Ud(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ot,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
Qs = function (e) {
  if (e.tag === 13) {
    var t = pr(Pe(), 150, 100);
    tt(e, t), xl(e, t);
  }
};
Xo = function (e) {
  e.tag === 13 && (tt(e, 3), xl(e, 3));
};
Ks = function (e) {
  if (e.tag === 13) {
    var t = Pe();
    (t = wt(t, e, null)), tt(e, t), xl(e, t);
  }
};
Ui = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Bi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = nl(r);
            if (!i) throw Error(g(90));
            Ns(r), Bi(r, i);
          }
        }
      }
      break;
    case "textarea":
      Rs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Mt(e, !!n.multiple, t, !1);
  }
};
Mo = Ga;
ws = function (e, t, n, r, i) {
  var o = O;
  O |= 4;
  try {
    return it(98, e.bind(null, t, n, r, i));
  } finally {
    (O = o), O === K && Ne();
  }
};
zo = function () {
  (O & (1 | Ee | _e)) === K && (Pd(), Gt());
};
Es = function (e, t) {
  var n = O;
  O |= 2;
  try {
    return e(t);
  } finally {
    (O = n), O === K && Ne();
  }
};
function lc(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vn(t)) throw Error(g(200));
  return Ud(e, t, null, n);
}
var $d = {
  Events: [
    Mn,
    kt,
    nl,
    ys,
    zi,
    Wt,
    function (e) {
      Jo(e, _f);
    },
    gs,
    vs,
    br,
    qr,
    Gt,
    { current: !1 },
  ],
};
(function (e) {
  var t = e.findFiberByHostInstance;
  return Dd(
    te({}, e, {
      overrideHookState: null,
      overrideProps: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: we.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (n) {
        return (n = $s(n)), n === null ? null : n.stateNode;
      },
      findFiberByHostInstance: function (n) {
        return t ? t(n) : null;
      },
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
    })
  );
})({
  findFiberByHostInstance: An,
  bundleType: 0,
  version: "16.14.0",
  rendererPackageName: "react-dom",
});
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d;
ge.createPortal = lc;
ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternalFiber;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : Error(g(268, Object.keys(e)));
  return (e = $s(t)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e, t) {
  if ((O & (Ee | _e)) !== K) throw Error(g(187));
  var n = O;
  O |= 1;
  try {
    return it(99, e.bind(null, t));
  } finally {
    (O = n), Ne();
  }
};
ge.hydrate = function (e, t, n) {
  if (!Vn(t)) throw Error(g(200));
  return si(null, e, t, !0, n);
};
ge.render = function (e, t, n) {
  if (!Vn(t)) throw Error(g(200));
  return si(null, e, t, !1, n);
};
ge.unmountComponentAtNode = function (e) {
  if (!Vn(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Za(function () {
        si(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[jn] = null);
        });
      }),
      !0)
    : !1;
};
ge.unstable_batchedUpdates = Ga;
ge.unstable_createPortal = function (e, t) {
  return lc(
    e,
    t,
    2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  );
};
ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Vn(n)) throw Error(g(200));
  if (e == null || e._reactInternalFiber === void 0) throw Error(g(38));
  return si(e, t, n, !1, r);
};
ge.version = "16.14.0";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = ge);
})(cs);
function uc(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: sc } = Object.prototype,
  { getPrototypeOf: Pl } = Object,
  _l = ((e) => (t) => {
    const n = sc.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  $e = (e) => ((e = e.toLowerCase()), (t) => _l(t) === e),
  ai = (e) => (t) => typeof t === e,
  { isArray: Zt } = Array,
  Ln = ai("undefined");
function Vd(e) {
  return (
    e !== null &&
    !Ln(e) &&
    e.constructor !== null &&
    !Ln(e.constructor) &&
    Ct(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ac = $e("ArrayBuffer");
function Bd(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ac(e.buffer)),
    t
  );
}
const Wd = ai("string"),
  Ct = ai("function"),
  cc = ai("number"),
  Nl = (e) => e !== null && typeof e == "object",
  Hd = (e) => e === !0 || e === !1,
  vr = (e) => {
    if (_l(e) !== "object") return !1;
    const t = Pl(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Qd = $e("Date"),
  Kd = $e("File"),
  Jd = $e("Blob"),
  Yd = $e("FileList"),
  Xd = (e) => Nl(e) && Ct(e.pipe),
  Gd = (e) => {
    const t = "[object FormData]";
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        sc.call(e) === t ||
        (Ct(e.toString) && e.toString() === t))
    );
  },
  Zd = $e("URLSearchParams"),
  qd = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Bn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Zt(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = o.length;
    let u;
    for (r = 0; r < l; r++) (u = o[r]), t.call(null, e[u], u, e);
  }
}
function fc(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const dc =
    typeof self > "u" ? (typeof global > "u" ? globalThis : global) : self,
  pc = (e) => !Ln(e) && e !== dc;
function _o() {
  const { caseless: e } = (pc(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && fc(t, i)) || i;
      vr(t[o]) && vr(r)
        ? (t[o] = _o(t[o], r))
        : vr(r)
        ? (t[o] = _o({}, r))
        : Zt(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Bn(arguments[r], n);
  return t;
}
const bd = (e, t, n, { allOwnKeys: r } = {}) => (
    Bn(
      t,
      (i, o) => {
        n && Ct(i) ? (e[o] = uc(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ep = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  tp = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  np = (e, t, n, r) => {
    let i, o, l;
    const u = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (l = i[o]), (!r || r(l, e, t)) && !u[l] && ((t[l] = e[l]), (u[l] = !0));
      e = n !== !1 && Pl(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  rp = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  ip = (e) => {
    if (!e) return null;
    if (Zt(e)) return e;
    let t = e.length;
    if (!cc(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  op = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Pl(Uint8Array)),
  lp = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  up = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  sp = $e("HTMLFormElement"),
  ap = (e) =>
    e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Vu = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  cp = $e("RegExp"),
  hc = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Bn(n, (i, o) => {
      t(i, o, e) !== !1 && (r[o] = i);
    }),
      Object.defineProperties(e, r);
  },
  fp = (e) => {
    hc(e, (t, n) => {
      if (Ct(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (!!Ct(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  dp = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return Zt(e) ? r(e) : r(String(e).split(t)), n;
  },
  pp = () => {},
  hp = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  mp = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Nl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = Zt(r) ? [] : {};
            return (
              Bn(r, (l, u) => {
                const a = n(l, i + 1);
                !Ln(a) && (o[u] = a);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  h = {
    isArray: Zt,
    isArrayBuffer: ac,
    isBuffer: Vd,
    isFormData: Gd,
    isArrayBufferView: Bd,
    isString: Wd,
    isNumber: cc,
    isBoolean: Hd,
    isObject: Nl,
    isPlainObject: vr,
    isUndefined: Ln,
    isDate: Qd,
    isFile: Kd,
    isBlob: Jd,
    isRegExp: cp,
    isFunction: Ct,
    isStream: Xd,
    isURLSearchParams: Zd,
    isTypedArray: op,
    isFileList: Yd,
    forEach: Bn,
    merge: _o,
    extend: bd,
    trim: qd,
    stripBOM: ep,
    inherits: tp,
    toFlatObject: np,
    kindOf: _l,
    kindOfTest: $e,
    endsWith: rp,
    toArray: ip,
    forEachEntry: lp,
    matchAll: up,
    isHTMLForm: sp,
    hasOwnProperty: Vu,
    hasOwnProp: Vu,
    reduceDescriptors: hc,
    freezeMethods: fp,
    toObjectSet: dp,
    toCamelCase: ap,
    noop: pp,
    toFiniteNumber: hp,
    findKey: fc,
    global: dc,
    isContextDefined: pc,
    toJSONObject: mp,
  };
function j(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
h.inherits(j, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: h.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const mc = j.prototype,
  yc = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  yc[e] = { value: e };
});
Object.defineProperties(j, yc);
Object.defineProperty(mc, "isAxiosError", { value: !0 });
j.from = (e, t, n, r, i, o) => {
  const l = Object.create(mc);
  return (
    h.toFlatObject(
      e,
      l,
      function (a) {
        return a !== Error.prototype;
      },
      (u) => u !== "isAxiosError"
    ),
    j.call(l, e.message, t, n, r, i),
    (l.cause = e),
    (l.name = e.name),
    o && Object.assign(l, o),
    l
  );
};
var yp = typeof self == "object" ? self.FormData : window.FormData;
const gp = yp;
function No(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function gc(e) {
  return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Bu(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = gc(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function vp(e) {
  return h.isArray(e) && !e.some(No);
}
const wp = h.toFlatObject(h, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ep(e) {
  return (
    e &&
    h.isFunction(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
function ci(e, t, n) {
  if (!h.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new (gp || FormData)()),
    (n = h.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (P, f) {
        return !h.isUndefined(f[P]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || p,
    o = n.dots,
    l = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && Ep(t);
  if (!h.isFunction(i)) throw new TypeError("visitor must be a function");
  function s(k) {
    if (k === null) return "";
    if (h.isDate(k)) return k.toISOString();
    if (!a && h.isBlob(k))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(k) || h.isTypedArray(k)
      ? a && typeof Blob == "function"
        ? new Blob([k])
        : Buffer.from(k)
      : k;
  }
  function p(k, P, f) {
    let c = k;
    if (k && !f && typeof k == "object") {
      if (h.endsWith(P, "{}"))
        (P = r ? P : P.slice(0, -2)), (k = JSON.stringify(k));
      else if (
        (h.isArray(k) && vp(k)) ||
        h.isFileList(k) ||
        (h.endsWith(P, "[]") && (c = h.toArray(k)))
      )
        return (
          (P = gc(P)),
          c.forEach(function (y, v) {
            !(h.isUndefined(y) || y === null) &&
              t.append(
                l === !0 ? Bu([P], v, o) : l === null ? P : P + "[]",
                s(y)
              );
          }),
          !1
        );
    }
    return No(k) ? !0 : (t.append(Bu(f, P, o), s(k)), !1);
  }
  const m = [],
    C = Object.assign(wp, {
      defaultVisitor: p,
      convertValue: s,
      isVisitable: No,
    });
  function T(k, P) {
    if (!h.isUndefined(k)) {
      if (m.indexOf(k) !== -1)
        throw Error("Circular reference detected in " + P.join("."));
      m.push(k),
        h.forEach(k, function (c, d) {
          (!(h.isUndefined(c) || c === null) &&
            i.call(t, c, h.isString(d) ? d.trim() : d, P, C)) === !0 &&
            T(c, P ? P.concat(d) : [d]);
        }),
        m.pop();
    }
  }
  if (!h.isObject(e)) throw new TypeError("data must be an object");
  return T(e), t;
}
function Wu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Ol(e, t) {
  (this._pairs = []), e && ci(e, this, t);
}
const vc = Ol.prototype;
vc.append = function (t, n) {
  this._pairs.push([t, n]);
};
vc.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Wu);
      }
    : Wu;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function kp(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function wc(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || kp,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = h.isURLSearchParams(t) ? t.toString() : new Ol(t, n).toString(r)),
    o)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Sp {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    h.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Hu = Sp,
  Ec = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Tp = typeof URLSearchParams < "u" ? URLSearchParams : Ol,
  xp = FormData,
  Cp = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  Me = {
    isBrowser: !0,
    classes: { URLSearchParams: Tp, FormData: xp, Blob },
    isStandardBrowserEnv: Cp,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function Pp(e, t) {
  return ci(
    e,
    new Me.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return Me.isNode && h.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function _p(e) {
  return h
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Np(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function kc(e) {
  function t(n, r, i, o) {
    let l = n[o++];
    const u = Number.isFinite(+l),
      a = o >= n.length;
    return (
      (l = !l && h.isArray(i) ? i.length : l),
      a
        ? (h.hasOwnProp(i, l) ? (i[l] = [i[l], r]) : (i[l] = r), !u)
        : ((!i[l] || !h.isObject(i[l])) && (i[l] = []),
          t(n, r, i[l], o) && h.isArray(i[l]) && (i[l] = Np(i[l])),
          !u)
    );
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const n = {};
    return (
      h.forEachEntry(e, (r, i) => {
        t(_p(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
const Op = { "Content-Type": void 0 };
function Rp(e, t, n) {
  if (h.isString(e))
    try {
      return (t || JSON.parse)(e), h.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const fi = {
  transitional: Ec,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = h.isObject(t);
      if ((o && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t)))
        return i && i ? JSON.stringify(kc(t)) : t;
      if (
        h.isArrayBuffer(t) ||
        h.isBuffer(t) ||
        h.isStream(t) ||
        h.isFile(t) ||
        h.isBlob(t)
      )
        return t;
      if (h.isArrayBufferView(t)) return t.buffer;
      if (h.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let u;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Pp(t, this.formSerializer).toString();
        if ((u = h.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return ci(
            u ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), Rp(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || fi.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && h.isString(t) && ((r && !this.responseType) || i)) {
        const l = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (u) {
          if (l)
            throw u.name === "SyntaxError"
              ? j.from(u, j.ERR_BAD_RESPONSE, this, null, this.response)
              : u;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Me.classes.FormData, Blob: Me.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
h.forEach(["delete", "get", "head"], function (t) {
  fi.headers[t] = {};
});
h.forEach(["post", "put", "patch"], function (t) {
  fi.headers[t] = h.merge(Op);
});
const Rl = fi,
  Lp = h.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Ip = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (i = l.indexOf(":")),
              (n = l.substring(0, i).trim().toLowerCase()),
              (r = l.substring(i + 1).trim()),
              !(!n || (t[n] && Lp[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Qu = Symbol("internals");
function sn(e) {
  return e && String(e).trim().toLowerCase();
}
function wr(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(wr) : String(e);
}
function Fp(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function Dp(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Ku(e, t, n, r) {
  if (h.isFunction(r)) return r.call(this, t, n);
  if (!!h.isString(t)) {
    if (h.isString(r)) return t.indexOf(r) !== -1;
    if (h.isRegExp(r)) return r.test(t);
  }
}
function jp(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ap(e, t) {
  const n = h.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, l) {
        return this[r].call(this, t, i, o, l);
      },
      configurable: !0,
    });
  });
}
class di {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(u, a, s) {
      const p = sn(a);
      if (!p) throw new Error("header name must be a non-empty string");
      const m = h.findKey(i, p);
      (!m || i[m] === void 0 || s === !0 || (s === void 0 && i[m] !== !1)) &&
        (i[m || a] = wr(u));
    }
    const l = (u, a) => h.forEach(u, (s, p) => o(s, p, a));
    return (
      h.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : h.isString(t) && (t = t.trim()) && !Dp(t)
        ? l(Ip(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = sn(t)), t)) {
      const r = h.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return Fp(i);
        if (h.isFunction(n)) return n.call(this, i, r);
        if (h.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = sn(t)), t)) {
      const r = h.findKey(this, t);
      return !!(r && (!n || Ku(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(l) {
      if (((l = sn(l)), l)) {
        const u = h.findKey(r, l);
        u && (!n || Ku(r, r[u], u, n)) && (delete r[u], (i = !0));
      }
    }
    return h.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      h.forEach(this, (i, o) => {
        const l = h.findKey(r, o);
        if (l) {
          (n[l] = wr(i)), delete n[o];
          return;
        }
        const u = t ? jp(o) : String(o).trim();
        u !== o && delete n[o], (n[u] = wr(i)), (r[u] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      h.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && h.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Qu] = this[Qu] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(l) {
      const u = sn(l);
      r[u] || (Ap(i, l), (r[u] = !0));
    }
    return h.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
di.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
]);
h.freezeMethods(di.prototype);
h.freezeMethods(di);
const ze = di;
function Li(e, t) {
  const n = this || Rl,
    r = t || n,
    i = ze.from(r.headers);
  let o = r.data;
  return (
    h.forEach(e, function (u) {
      o = u.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function Sc(e) {
  return !!(e && e.__CANCEL__);
}
function Wn(e, t, n) {
  j.call(this, e == null ? "canceled" : e, j.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
h.inherits(Wn, j, { __CANCEL__: !0 });
const Mp = null;
function zp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new j(
          "Request failed with status code " + n.status,
          [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Up = Me.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, o, l, u) {
          const a = [];
          a.push(n + "=" + encodeURIComponent(r)),
            h.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()),
            h.isString(o) && a.push("path=" + o),
            h.isString(l) && a.push("domain=" + l),
            u === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function $p(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Vp(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Tc(e, t) {
  return e && !$p(t) ? Vp(e, t) : t;
}
const Bp = Me.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(o) {
        let l = o;
        return (
          t && (n.setAttribute("href", l), (l = n.href)),
          n.setAttribute("href", l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (l) {
          const u = h.isString(l) ? i(l) : l;
          return u.protocol === r.protocol && u.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Wp(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Hp(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const s = Date.now(),
        p = r[o];
      l || (l = s), (n[i] = a), (r[i] = s);
      let m = o,
        C = 0;
      for (; m !== i; ) (C += n[m++]), (m = m % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), s - l < t)) return;
      const T = p && s - p;
      return T ? Math.round((C * 1e3) / T) : void 0;
    }
  );
}
function Ju(e, t) {
  let n = 0;
  const r = Hp(50, 250);
  return (i) => {
    const o = i.loaded,
      l = i.lengthComputable ? i.total : void 0,
      u = o - n,
      a = r(u),
      s = o <= l;
    n = o;
    const p = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: u,
      rate: a || void 0,
      estimated: a && l && s ? (l - o) / a : void 0,
      event: i,
    };
    (p[t ? "download" : "upload"] = !0), e(p);
  };
}
const Qp = typeof XMLHttpRequest < "u",
  Kp =
    Qp &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const o = ze.from(e.headers).normalize(),
          l = e.responseType;
        let u;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener("abort", u);
        }
        h.isFormData(i) && Me.isStandardBrowserEnv && o.setContentType(!1);
        let s = new XMLHttpRequest();
        if (e.auth) {
          const T = e.auth.username || "",
            k = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(T + ":" + k));
        }
        const p = Tc(e.baseURL, e.url);
        s.open(e.method.toUpperCase(), wc(p, e.params, e.paramsSerializer), !0),
          (s.timeout = e.timeout);
        function m() {
          if (!s) return;
          const T = ze.from(
              "getAllResponseHeaders" in s && s.getAllResponseHeaders()
            ),
            P = {
              data:
                !l || l === "text" || l === "json"
                  ? s.responseText
                  : s.response,
              status: s.status,
              statusText: s.statusText,
              headers: T,
              config: e,
              request: s,
            };
          zp(
            function (c) {
              n(c), a();
            },
            function (c) {
              r(c), a();
            },
            P
          ),
            (s = null);
        }
        if (
          ("onloadend" in s
            ? (s.onloadend = m)
            : (s.onreadystatechange = function () {
                !s ||
                  s.readyState !== 4 ||
                  (s.status === 0 &&
                    !(s.responseURL && s.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(m);
              }),
          (s.onabort = function () {
            !s ||
              (r(new j("Request aborted", j.ECONNABORTED, e, s)), (s = null));
          }),
          (s.onerror = function () {
            r(new j("Network Error", j.ERR_NETWORK, e, s)), (s = null);
          }),
          (s.ontimeout = function () {
            let k = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const P = e.transitional || Ec;
            e.timeoutErrorMessage && (k = e.timeoutErrorMessage),
              r(
                new j(
                  k,
                  P.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
                  e,
                  s
                )
              ),
              (s = null);
          }),
          Me.isStandardBrowserEnv)
        ) {
          const T =
            (e.withCredentials || Bp(p)) &&
            e.xsrfCookieName &&
            Up.read(e.xsrfCookieName);
          T && o.set(e.xsrfHeaderName, T);
        }
        i === void 0 && o.setContentType(null),
          "setRequestHeader" in s &&
            h.forEach(o.toJSON(), function (k, P) {
              s.setRequestHeader(P, k);
            }),
          h.isUndefined(e.withCredentials) ||
            (s.withCredentials = !!e.withCredentials),
          l && l !== "json" && (s.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            s.addEventListener("progress", Ju(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            s.upload &&
            s.upload.addEventListener("progress", Ju(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (T) => {
              !s ||
                (r(!T || T.type ? new Wn(null, e, s) : T),
                s.abort(),
                (s = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
        const C = Wp(p);
        if (C && Me.protocols.indexOf(C) === -1) {
          r(new j("Unsupported protocol " + C + ":", j.ERR_BAD_REQUEST, e));
          return;
        }
        s.send(i || null);
      });
    },
  Er = { http: Mp, xhr: Kp };
h.forEach(Er, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Jp = {
  getAdapter: (e) => {
    e = h.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let i = 0;
      i < t && ((n = e[i]), !(r = h.isString(n) ? Er[n.toLowerCase()] : n));
      i++
    );
    if (!r)
      throw r === !1
        ? new j(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            h.hasOwnProp(Er, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!h.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Er,
};
function Ii(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Wn();
}
function Yu(e) {
  return (
    Ii(e),
    (e.headers = ze.from(e.headers)),
    (e.data = Li.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Jp.getAdapter(e.adapter || Rl.adapter)(e).then(
      function (r) {
        return (
          Ii(e),
          (r.data = Li.call(e, e.transformResponse, r)),
          (r.headers = ze.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Sc(r) ||
            (Ii(e),
            r &&
              r.response &&
              ((r.response.data = Li.call(e, e.transformResponse, r.response)),
              (r.response.headers = ze.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Xu = (e) => (e instanceof ze ? e.toJSON() : e);
function In(e, t) {
  t = t || {};
  const n = {};
  function r(s, p, m) {
    return h.isPlainObject(s) && h.isPlainObject(p)
      ? h.merge.call({ caseless: m }, s, p)
      : h.isPlainObject(p)
      ? h.merge({}, p)
      : h.isArray(p)
      ? p.slice()
      : p;
  }
  function i(s, p, m) {
    if (h.isUndefined(p)) {
      if (!h.isUndefined(s)) return r(void 0, s, m);
    } else return r(s, p, m);
  }
  function o(s, p) {
    if (!h.isUndefined(p)) return r(void 0, p);
  }
  function l(s, p) {
    if (h.isUndefined(p)) {
      if (!h.isUndefined(s)) return r(void 0, s);
    } else return r(void 0, p);
  }
  function u(s, p, m) {
    if (m in t) return r(s, p);
    if (m in e) return r(void 0, s);
  }
  const a = {
    url: o,
    method: o,
    data: o,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (s, p) => i(Xu(s), Xu(p), !0),
  };
  return (
    h.forEach(Object.keys(e).concat(Object.keys(t)), function (p) {
      const m = a[p] || i,
        C = m(e[p], t[p], p);
      (h.isUndefined(C) && m !== u) || (n[p] = C);
    }),
    n
  );
}
const xc = "1.2.0",
  Ll = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ll[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Gu = {};
Ll.transitional = function (t, n, r) {
  function i(o, l) {
    return (
      "[Axios v" +
      xc +
      "] Transitional option '" +
      o +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (o, l, u) => {
    if (t === !1)
      throw new j(
        i(l, " has been removed" + (n ? " in " + n : "")),
        j.ERR_DEPRECATED
      );
    return (
      n &&
        !Gu[l] &&
        ((Gu[l] = !0),
        console.warn(
          i(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, l, u) : !0
    );
  };
};
function Yp(e, t, n) {
  if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      l = t[o];
    if (l) {
      const u = e[o],
        a = u === void 0 || l(u, o, e);
      if (a !== !0)
        throw new j("option " + o + " must be " + a, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new j("Unknown option " + o, j.ERR_BAD_OPTION);
  }
}
const Oo = { assertOptions: Yp, validators: Ll },
  Be = Oo.validators;
class Xr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Hu(), response: new Hu() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = In(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      Oo.assertOptions(
        r,
        {
          silentJSONParsing: Be.transitional(Be.boolean),
          forcedJSONParsing: Be.transitional(Be.boolean),
          clarifyTimeoutError: Be.transitional(Be.boolean),
        },
        !1
      ),
      i !== void 0 &&
        Oo.assertOptions(
          i,
          { encode: Be.function, serialize: Be.function },
          !0
        ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l;
    (l = o && h.merge(o.common, o[n.method])),
      l &&
        h.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (k) => {
            delete o[k];
          }
        ),
      (n.headers = ze.concat(l, o));
    const u = [];
    let a = !0;
    this.interceptors.request.forEach(function (P) {
      (typeof P.runWhen == "function" && P.runWhen(n) === !1) ||
        ((a = a && P.synchronous), u.unshift(P.fulfilled, P.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function (P) {
      s.push(P.fulfilled, P.rejected);
    });
    let p,
      m = 0,
      C;
    if (!a) {
      const k = [Yu.bind(this), void 0];
      for (
        k.unshift.apply(k, u),
          k.push.apply(k, s),
          C = k.length,
          p = Promise.resolve(n);
        m < C;

      )
        p = p.then(k[m++], k[m++]);
      return p;
    }
    C = u.length;
    let T = n;
    for (m = 0; m < C; ) {
      const k = u[m++],
        P = u[m++];
      try {
        T = k(T);
      } catch (f) {
        P.call(this, f);
        break;
      }
    }
    try {
      p = Yu.call(this, T);
    } catch (k) {
      return Promise.reject(k);
    }
    for (m = 0, C = s.length; m < C; ) p = p.then(s[m++], s[m++]);
    return p;
  }
  getUri(t) {
    t = In(this.defaults, t);
    const n = Tc(t.baseURL, t.url);
    return wc(n, t.params, t.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function (t) {
  Xr.prototype[t] = function (n, r) {
    return this.request(
      In(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
h.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, l, u) {
      return this.request(
        In(u || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: l,
        })
      );
    };
  }
  (Xr.prototype[t] = n()), (Xr.prototype[t + "Form"] = n(!0));
});
const kr = Xr;
class Il {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const l = new Promise((u) => {
          r.subscribe(u), (o = u);
        }).then(i);
        return (
          (l.cancel = function () {
            r.unsubscribe(o);
          }),
          l
        );
      }),
      t(function (o, l, u) {
        r.reason || ((r.reason = new Wn(o, l, u)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Il(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const Xp = Il;
function Gp(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Zp(e) {
  return h.isObject(e) && e.isAxiosError === !0;
}
function Cc(e) {
  const t = new kr(e),
    n = uc(kr.prototype.request, t);
  return (
    h.extend(n, kr.prototype, t, { allOwnKeys: !0 }),
    h.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Cc(In(e, i));
    }),
    n
  );
}
const X = Cc(Rl);
X.Axios = kr;
X.CanceledError = Wn;
X.CancelToken = Xp;
X.isCancel = Sc;
X.VERSION = xc;
X.toFormData = ci;
X.AxiosError = j;
X.Cancel = X.CanceledError;
X.all = function (t) {
  return Promise.all(t);
};
X.spread = Gp;
X.isAxiosError = Zp;
X.AxiosHeaders = ze;
X.formToJSON = (e) => kc(h.isHTMLForm(e) ? new FormData(e) : e);
X.default = X;
const Zu = X;
var Fl = { exports: {} },
  Hn = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qp = Jt.exports,
  Pc = 60103;
Hn.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var qu = Symbol.for;
  (Pc = qu("react.element")), (Hn.Fragment = qu("react.fragment"));
}
var bp =
    qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  eh = Object.prototype.hasOwnProperty,
  th = { key: !0, ref: !0, __self: !0, __source: !0 };
function _c(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) eh.call(t, r) && !th.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Pc,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: bp.current,
  };
}
Hn.jsx = _c;
Hn.jsxs = _c;
(function (e) {
  e.exports = Hn;
})(Fl);
const S = Fl.exports.jsx,
  A = Fl.exports.jsxs;
function nh(e) {
  return A("svg", {
    ...Object.assign(
      { width: 24, height: 24, fill: "none", viewBox: "0 0 24 24" },
      e
    ),
    children: [
      S("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M17.25 15.25V6.75H8.75",
      }),
      S("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M17 7L6.75 17.25",
      }),
    ],
  });
}
function rh(e) {
  return S("svg", {
    ...Object.assign(
      { width: 24, height: 24, fill: "none", viewBox: "0 0 24 24" },
      e
    ),
    children: S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M10.75 8.75L14.25 12L10.75 15.25",
    }),
  });
}
function ih(e) {
  return A("svg", {
    ...Object.assign(
      { width: 24, height: 24, fill: "none", viewBox: "0 0 24 24" },
      e
    ),
    children: [
      S("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M17.25 6.75L6.75 17.25",
      }),
      S("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M6.75 6.75L17.25 17.25",
      }),
    ],
  });
}
function oh(e) {
  return A("svg", {
    ...Object.assign(
      { width: 24, height: 24, fill: "none", viewBox: "0 0 24 24" },
      e
    ),
    children: [
      S("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 13V15",
      }),
      S("circle", { cx: 12, cy: 9, r: 1, fill: "currentColor" }),
      S("circle", {
        cx: 12,
        cy: 12,
        r: 7.25,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
      }),
    ],
  });
}
function lh(e) {
  return A("svg", {
    ...Object.assign(
      { width: 24, height: 24, fill: "none", viewBox: "0 0 24 24" },
      e
    ),
    children: [
      S("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M16.75 13.25L18 12C19.6569 10.3431 19.6569 7.65685 18 6V6C16.3431 4.34315 13.6569 4.34315 12 6L10.75 7.25",
      }),
      S("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M7.25 10.75L6 12C4.34315 13.6569 4.34315 16.3431 6 18V18C7.65685 19.6569 10.3431 19.6569 12 18L13.25 16.75",
      }),
      S("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M14.25 9.75L9.75 14.25",
      }),
    ],
  });
}
function uh(e) {
  return S("svg", {
    ...Object.assign(
      { width: 24, height: 24, fill: "none", viewBox: "0 0 24 24" },
      e
    ),
    children: S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z",
    }),
  });
}
function sh(e) {
  return A("svg", {
    ...Object.assign(
      { width: 24, height: 24, fill: "none", viewBox: "0 0 24 24" },
      e
    ),
    children: [
      S("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M6.75 7.75L7.59115 17.4233C7.68102 18.4568 8.54622 19.25 9.58363 19.25H14.4164C15.4538 19.25 16.319 18.4568 16.4088 17.4233L17.25 7.75",
      }),
      S("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M9.75 7.5V6.75C9.75 5.64543 10.6454 4.75 11.75 4.75H12.25C13.3546 4.75 14.25 5.64543 14.25 6.75V7.5",
      }),
      S("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M5 7.75H19",
      }),
    ],
  });
}
const Nc = "/assets/icon.ae778a8e.svg";
function ah() {
  return A("header", {
    children: [
      A("h1", {
        className: "item header-title",
        children: [
          S("img", { src: Nc, width: "16", height: "16", "aria-hidden": !0 }),
          "HSC Past Papers",
        ],
      }),
      A("button", {
        className: "button item",
        onClick: () => document.getElementById("about-dialog").showModal(),
        children: [S(oh, { className: "start" }), "About"],
      }),
    ],
  });
}
class ch extends En.PureComponent {
  render() {
    let t = "";
    return (
      this.props.active && (t += "active "),
      this.props.focused && (t += "focused"),
      A("li", {
        className: t,
        onClick: (n) => {
          this.props.activateItem(this.props.index, n),
            this.props.onClick && this.props.onClick();
        },
        children: [
          S("span", { className: "list-item-text", children: this.props.text }),
          this.props.active && S(rh, { className: "chevron-right" }),
        ],
      })
    );
  }
}
function fh(e) {
  return A("div", {
    className: "search-box-container",
    children: [
      S("input", {
        className: "search-box",
        type: "text",
        autoFocus: e.autoFocus,
        "aria-label": "Search " + e.title.toLowerCase(),
        placeholder: "Search " + e.title.toLowerCase(),
        onChange: (t) => e.filterItems(t.target.value),
      }),
      S(uh, {}),
    ],
  });
}
class Fi extends En.PureComponent {
  constructor(t) {
    super(t),
      (this.state = {
        searchQuery: "",
        filter: !1,
        filteredList: [],
        filteredItemsIndexes: [],
        focused: -1,
      }),
      (this.focusSection = this.focusSection.bind(this)),
      (this.activateItem = this.activateItem.bind(this)),
      (this.filterItems = this.filterItems.bind(this)),
      (this.moveFocus = this.moveFocus.bind(this)),
      (this.listArray = this.props.items);
  }
  focusSection(t) {
    this.section &&
      (this.section.getElementsByTagName("input")[0].focus(),
      setTimeout(() => {
        this.section.scrollIntoView({ behavior: "smooth", inline: "center" });
      }, 200)),
      t !== !1 && this.props.sectionFocus(this.props.index);
  }
  activateItem(t, n) {
    n && n.stopPropagation(),
      this.setState({ focused: t }),
      this.props.selectItem(this.props.title, t);
  }
  filterItems(t) {
    if (t) {
      let n = [],
        r = this.props.items.filter((i, o) => {
          if (i.toLowerCase().indexOf(t.toLowerCase()) > -1)
            return n.push(o), !0;
        });
      n.indexOf(this.state.focused) === -1 && this.setState({ focused: n[0] }),
        this.setState({
          searchQuery: t.toLowerCase(),
          filter: !0,
          filteredList: r,
          filteredItemsIndexes: n,
        });
    } else
      this.setState({
        searchQuery: "",
        filter: !1,
        filteredList: [],
        filteredItemsIndexes: [],
      });
  }
  moveFocus(t) {
    switch (t.keyCode) {
      case 40:
        if ((t.preventDefault(), this.state.filter)) {
          let u = this.state.filteredItemsIndexes.indexOf(this.state.focused);
          u < this.state.filteredItemsIndexes.length - 1 &&
            this.setState({ focused: this.state.filteredItemsIndexes[u + 1] });
        } else
          this.state.focused < this.props.items.length - 1 &&
            this.setState({ focused: this.state.focused + 1 });
        break;
      case 38:
        if ((t.preventDefault(), this.state.filter)) {
          let u = this.state.filteredItemsIndexes.indexOf(this.state.focused);
          u > 0 &&
            this.setState({ focused: this.state.filteredItemsIndexes[u - 1] });
        } else
          this.state.focused > 0 &&
            this.setState({ focused: this.state.focused - 1 });
        break;
      case 39:
      case 13:
        t.preventDefault(),
          this.state.focused > -1 &&
            (this.activateItem(this.state.focused),
            this.props.sectionFocus("f"));
        break;
      case 37:
        t.preventDefault(), this.props.sectionFocus("b");
        break;
    }
  }
  componentDidMount() {
    this.props.focus && setTimeout(() => this.focusSection(!1), 200);
  }
  render() {
    if (this.props.items.length > 0) {
      const t = this.state.filter ? this.state.filteredList : this.props.items,
        n =
          t.length > 0
            ? A("ol", {
                ref: (r) => (this.ol = r),
                children: [
                  " ",
                  t.map((r, i) => {
                    const o = this.state.filter
                      ? this.props.items.indexOf(r)
                      : i;
                    return S(
                      ch,
                      {
                        index: o,
                        text: r,
                        activateItem: this.activateItem,
                        active: r === this.props.items[this.props.selected],
                        focused: o === this.state.focused,
                      },
                      r
                    );
                  }),
                ],
              })
            : S("div", { className: "empty-message", children: "No results" });
      return A("section", {
        onKeyDown: this.moveFocus,
        ref: (r) => (this.section = r),
        children: [
          A("h2", { className: "title", children: [this.props.title, "s"] }),
          S(fh, {
            title: this.props.title + "s",
            filterItems: this.filterItems,
            autoFocus: this.props.autoFocus,
          }),
          n,
        ],
      });
    } else return S("section", { className: "disabled" });
  }
  componentWillReceiveProps(t) {
    this.props.items.length > 0 &&
      t.items.length > 0 &&
      this.props.prevSelection !== t.prevSelection &&
      this.section.classList.add("disabled"),
      this.props.items.length !== t.items.length &&
        this.state.focused > t.items.length - 1 &&
        this.setState({ focused: -1 });
  }
  componentDidUpdate() {
    this.props.items.length > 0 &&
      this.section.classList.contains("disabled") &&
      setTimeout(() => this.section.classList.remove("disabled"), 200),
      this.ol &&
        this.ol.getElementsByClassName("focused").length > 0 &&
        this.state.focused !== this.props.selected &&
        (this.ol.scrollTop =
          this.ol.getElementsByClassName("focused")[0].offsetTop - 18),
      this.props.focus && setTimeout(() => this.focusSection(!1), 200);
  }
}
class dh extends En.PureComponent {
  constructor(t) {
    super(t);
  }
  render() {
    return this.props.enabled
      ? A("section", {
          className: "download-view",
          ref: (t) => (this.node = t),
          children: [
            A("div", {
              className: "info",
              children: [
                S(lh, {}),
                S("h2", { children: this.props.docName }),
                A("p", {
                  children: [this.props.courseName, " / ", this.props.yearName],
                }),
              ],
            }),
            S("div", {
              className: "controls-container",
              children: A("a", {
                className: "button primary",
                href: this.props.url,
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                children: ["Open in NESA website", S(nh, { className: "end" })],
              }),
            }),
          ],
        })
      : S("section", { className: "download-view disabled" });
  }
  componentWillReceiveProps(t) {
    this.props.url.length > 0 &&
      this.props.url !== t.url &&
      this.node.classList.add("disabled");
  }
  componentDidUpdate() {
    this.props.url.length > 0 &&
      setTimeout(() => {
        this.node.classList.remove("disabled"),
          this.props.focus &&
            setTimeout(() => {
              this.node.scrollIntoView({
                behavior: "smooth",
                inline: "center",
              });
            }, 250);
      }, 200);
  }
}
const ph = (e) => {
  let t = e.progress === 100 ? "done" : "";
  return S("div", {
    className: "loading-indicator-flex-container",
    children: A("div", {
      className: "loading-indicator-container",
      children: [
        S("div", { className: "left text", children: "Loading data\u2026" }),
        A("div", { className: "right text", children: [e.progress, "%"] }),
        S("div", {
          id: "progress-container",
          children: S("div", {
            id: "progress-bar",
            className: t,
            style: { width: e.progress + "%" },
          }),
        }),
      ],
    }),
  });
};
const hh = "hscpastpapers",
  mh = "2.0.0",
  yh = "Sidney Alcantara",
  gh = "MIT",
  vh = { type: "git", url: "https://github.com/notsidney/hscpastpapers.git" },
  wh = "src/index.html",
  Eh = "> 0.5%, not dead, not op_mini all, not ie > 0, not and_uc > 0",
  kh = {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
    prepare: "husky install",
  },
  Sh = {
    "@iconicicons/react": "^1.5.1",
    axios: "^1.2.0",
    react: "^16",
    "react-dom": "^16",
  },
  Th = {
    "@types/react": "^16",
    "@types/react-dom": "^16",
    "@vitejs/plugin-react": "^2.2.0",
    husky: "^8.0.2",
    "lint-staged": "^13.0.3",
    "postcss-preset-env": "^7.8.3",
    prettier: "2.8.0",
    vite: "^3.2.3",
  },
  xh = {
    plugins: {
      "postcss-preset-env": {
        features: { "oklab-function": { subFeatures: { displayP3: !1 } } },
      },
    },
  },
  rr = {
    name: hh,
    version: mh,
    author: yh,
    license: gh,
    repository: vh,
    source: wh,
    browserslist: Eh,
    scripts: kh,
    dependencies: Sh,
    devDependencies: Th,
    "lint-staged": { "**/*": "prettier --write --ignore-unknown" },
    postcss: xh,
  };
function Ch() {
  const e = Jt.exports.useRef(null),
    t = () => {
      e.current.classList.add("hide");
      const r = () => {
        e.current.classList.remove("hide"),
          e.current.close(),
          e.current.removeEventListener("animationend", r);
      };
      e.current.addEventListener("animationend", r);
    },
    n = () => {
      window.localStorage.clear(), window.location.reload();
    };
  return A("dialog", {
    id: "about-dialog",
    "aria-label": "About",
    ref: e,
    children: [
      S("button", {
        className: "button close",
        "aria-label": "Close",
        onClick: t,
        autoFocus: !0,
        children: S(ih, {}),
      }),
      S("img", { src: Nc, width: "60", height: "60", "aria-hidden": !0 }),
      S("h2", { children: "HSCPastPapers.com" }),
      A("p", {
        children: [
          "Version ",
          rr.version,
          S("br", {}),
          "Data updated ",
          S("span", { id: "timestamp", children: "\u2014" }),
        ],
      }),
      A("p", {
        children: [
          "Copyright \xA9 2017\u2013",
          new Date().getFullYear(),
          " Sidney Alcantara. Licensed under the",
          " ",
          S("a", {
            href: rr.repository.url.replace(".git", "/blob/main/LICENSE"),
            target: "_blank",
            rel: "noopener",
            children: "MIT License",
          }),
          ".",
        ],
      }),
      A("div", {
        className: "button-row",
        children: [
          A("button", {
            className: "button",
            onClick: n,
            children: [S(sh, { className: "start" }), "Clear cache"],
          }),
          A("a", {
            className: "button",
            href: rr.repository.url.replace(".git", ""),
            target: "_blank",
            rel: "noopener",
            children: [
              S("svg", {
                preserveAspectRatio: "xMidYMid",
                viewBox: "1 1 22 22",
                width: "18",
                height: "18",
                className: "start",
                style: { marginRight: "0.5em" },
                children: S("path", {
                  d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27",
                  fill: "currentColor",
                }),
              }),
              "View on GitHub",
            ],
          }),
        ],
      }),
      A("div", {
        className: "copyright-notice",
        children: [
          S("h3", { children: "Disclaimer and Copyright Notice" }),
          S("p", {
            children:
              "This web app is not affiliated with the NSW Education Standards Authority (NESA). All documents linked to by this web app are owned by the State of New South Wales, provided by NESA.",
          }),
          S("p", {
            children:
              "This web app does not store copies of any NESA documents. No ownership is claimed over them. This web app was built for informational purposes only.",
          }),
          A("p", {
            children: [
              "On 15 June 2018, changes were made to this web app to comply with",
              " ",
              S("a", {
                href: "http://educationstandards.nsw.edu.au/wps/portal/nesa/mini-footer/copyright",
                target: "_blank",
                rel: "noopener",
                children: "NESA Copyright Policy",
              }),
              ". Learn more about the changes made due to copyright",
              " ",
              S("a", {
                href: rr.repository.url.replace(
                  ".git",
                  "/blob/main/classic/copyright-changes.md"
                ),
                target: "_blank",
                rel: "noopener noreferrer",
                children: "here",
              }),
              ".",
            ],
          }),
        ],
      }),
    ],
  });
}
class Ph extends En.Component {
  constructor(t) {
    super(t),
      (this.state = {
        downloading: !0,
        downloadProgress: 0,
        data: [],
        focusedSection: 0,
        courseArray: [],
        yearArray: [],
        docArray: [],
        course: -1,
        year: -1,
        doc: -1,
        courseName: "",
        yearName: "",
        docName: "",
        docLink: "",
        showDownloadView: !1,
      }),
      (this.loadData = this.loadData.bind(this)),
      (this.selectItem = this.selectItem.bind(this)),
      (this.sectionFocus = this.sectionFocus.bind(this));
  }
  componentDidMount() {
    let t = !0;
    const n = localStorage.getItem("timestamp");
    Zu.get("../data/meta.json")
      .then((r) => {
        if (
          (localStorage.setItem("meta", JSON.stringify(r.data)),
          console.log("Cached meta.json"),
          n !== null)
        )
          new Date(r.data.timestamp) < new Date(n) && (t = !1);
        else {
          const o = new Date();
          localStorage.setItem("timestamp", o),
            console.log(`Set new download date: ${o}`);
        }
        this.loadData(t);
        const i = new Date(r.data.timestamp);
        document.getElementById("timestamp").innerHTML = i.toLocaleDateString();
      })
      .catch((r) =>
        alert(`Error loading data:
${r}`)
      );
  }
  loadData(t) {
    const n = localStorage.getItem("data");
    if (n !== null && !t) {
      console.log("Serving cached data.json");
      try {
        const r = JSON.parse(n);
        this.setState({
          downloading: !1,
          data: r,
          courseArray: r.map((i) => i.course_name),
        });
      } catch (r) {
        alert(`Failed to parse data.json from localStorage cache.

          ${r}

Press OK to reload.`),
          localStorage.removeItem("data"),
          location.reload();
      }
    } else
      console.log("Downloading data.json"),
        Zu.get("../data/data.json", {
          onDownloadProgress: (r) => {
            let i = Math.floor((r.loaded / r.total) * 100);
            this.setState({ downloadProgress: i });
          },
        })
          .then((r) => {
            localStorage.setItem("data", JSON.stringify(r.data)),
              this.setState({
                downloading: !1,
                data: r.data,
                courseArray: r.data.map((i) => i.course_name),
              });
          })
          .catch((r) =>
            alert(`Error loading data:
${r}`)
          );
  }
  selectItem(t, n) {
    switch (t) {
      case "Course":
        this.setState({
          focusedSection: 1,
          course: n,
          courseName: this.state.data[n].course_name,
          yearArray: this.state.data[n].packs.map((i) => i.year),
          docArray: [],
          year: -1,
          doc: -1,
          docName: "",
          docLink: "",
          showDownloadView: !1,
        });
        break;
      case "Year":
        this.setState({
          focusedSection: 2,
          year: n,
          yearName: this.state.data[this.state.course].packs[n].year,
          docArray: [
            ...this.state.data[this.state.course].packs[n].docs.map(
              (i) => i.doc_name
            ),
            "Exam pack",
          ],
          doc: -1,
          docName: "",
          docLink: "",
          showDownloadView: !1,
        });
        break;
      case "Link":
        const r = this.state.data[this.state.course].packs[this.state.year];
        if (n >= r.docs.length)
          this.setState({
            focusedSection: 3,
            doc: n,
            docName: "Exam pack",
            docLink: r.link,
            showDownloadView: !0,
          });
        else {
          const i = r.docs[n];
          this.setState({
            focusedSection: 3,
            doc: n,
            docName: i.doc_name,
            docLink: i.doc_link,
            showDownloadView: !0,
          });
        }
        break;
    }
  }
  sectionFocus(t) {
    let n = null;
    typeof t == "number"
      ? (n = t)
      : t === "f"
      ? (n = this.state.focusedSection + 1)
      : t === "b" && (n = this.state.focusedSection - 1),
      n > 2 && (n = 2),
      n < 0 && (n = 0),
      this.setState({ focusedSection: n });
  }
  render() {
    const t = this.state.downloading
      ? S(ph, { progress: this.state.downloadProgress })
      : A("main", {
          id: "list-container",
          children: [
            S(Fi, {
              title: "Course",
              items: this.state.courseArray,
              selected: this.state.course,
              selectItem: this.selectItem,
              sectionFocus: this.sectionFocus,
              focus: this.state.focusedSection === 0,
              index: 0,
              autoFocus: !0,
            }),
            S(Fi, {
              title: "Year",
              prevSelection: this.state.course,
              items: this.state.yearArray,
              selected: this.state.year,
              selectItem: this.selectItem,
              sectionFocus: this.sectionFocus,
              focus: this.state.focusedSection === 1,
              index: 1,
            }),
            S(Fi, {
              title: "Link",
              prevSelection: this.state.year,
              items: this.state.docArray,
              selected: this.state.doc,
              selectItem: this.selectItem,
              sectionFocus: this.sectionFocus,
              focus: this.state.focusedSection === 2,
              index: 2,
            }),
            S(dh, {
              enabled: this.state.showDownloadView,
              courseName: this.state.courseName,
              yearName: this.state.yearName,
              docName: this.state.docName,
              url: this.state.docLink,
              sectionFocus: this.sectionFocus,
              focus: this.state.focusedSection === 3,
              index: 3,
            }),
          ],
        });
    return A(En.Fragment, { children: [S(ah, {}), t, S(Ch, {})] });
  }
  shouldComponentUpdate(t, n) {
    return (
      this.state.downloading !== n.downloading ||
      this.state.downloadProgress !== n.downloadProgress ||
      this.state.course !== n.course ||
      this.state.year !== n.year ||
      this.state.doc !== n.doc ||
      this.state.focusedSection !== n.focusedSection ||
      this.state.showDownloadView !== n.showDownloadView
    );
  }
}
cs.exports.render(
  S(Jt.exports.StrictMode, { children: S(Ph, {}) }),
  document.getElementById("root")
);
