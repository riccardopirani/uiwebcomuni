const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/home-C5geOhtV.js',
      'assets/config-global-CE93-cEV.js',
      'assets/Card-xa2VU3rB.js',
      'assets/FormControlLabel-xl3-u_Yc.js',
      'assets/Checkbox-DJnU-ycA.js',
      'assets/format-number-CdWNcxiZ.js',
      'assets/blog-DqPmlkIf.js',
      'assets/Select-CdYvyis1.js',
      'assets/TextField-BzGoe1R1.js',
      'assets/Pagination-DdiF98Sk.js',
      'assets/LastPage-DPs68dMy.js',
      'assets/user-BXhgA-Qh.js',
      'assets/sign-in-C-QX26UT.js',
      'assets/products-BhFLOTDf.js',
      'assets/page-not-found-DVoSS_fq.js',
    ])
) => i.map((i) => d[i]);
var y2 = Object.defineProperty;
var x2 = (e, t, n) =>
  t in e ? y2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var Un = (e, t, n) => x2(e, typeof t != 'symbol' ? t + '' : t, n);
function b2(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Df =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Ir(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function jr(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var r0 = { exports: {} },
  fc = {},
  o0 = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ra = Symbol.for('react.element'),
  C2 = Symbol.for('react.portal'),
  S2 = Symbol.for('react.fragment'),
  w2 = Symbol.for('react.strict_mode'),
  k2 = Symbol.for('react.profiler'),
  E2 = Symbol.for('react.provider'),
  $2 = Symbol.for('react.context'),
  P2 = Symbol.for('react.forward_ref'),
  T2 = Symbol.for('react.suspense'),
  R2 = Symbol.for('react.memo'),
  O2 = Symbol.for('react.lazy'),
  Yh = Symbol.iterator;
function M2(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Yh && e[Yh]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var i0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  s0 = Object.assign,
  a0 = {};
function $i(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = a0), (this.updater = n || i0);
}
$i.prototype.isReactComponent = {};
$i.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
$i.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function l0() {}
l0.prototype = $i.prototype;
function zf(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = a0), (this.updater = n || i0);
}
var Ff = (zf.prototype = new l0());
Ff.constructor = zf;
s0(Ff, $i.prototype);
Ff.isPureReactComponent = !0;
var Xh = Array.isArray,
  c0 = Object.prototype.hasOwnProperty,
  Bf = { current: null },
  u0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function d0(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      c0.call(t, r) && !u0.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: ra, type: e, key: i, ref: s, props: o, _owner: Bf.current };
}
function A2(e, t) {
  return { $$typeof: ra, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Wf(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ra;
}
function _2(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var qh = /\/+/g;
function hu(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? _2('' + e.key) : t.toString(36);
}
function el(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ra:
          case C2:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + hu(s, 0) : r),
      Xh(o)
        ? ((n = ''),
          e != null && (n = e.replace(qh, '$&/') + '/'),
          el(o, t, n, '', function (c) {
            return c;
          }))
        : o != null &&
          (Wf(o) &&
            (o = A2(
              o,
              n +
                (!o.key || (s && s.key === o.key) ? '' : ('' + o.key).replace(qh, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), Xh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + hu(i, a);
      s += el(i, t, n, l, o);
    }
  else if (((l = M2(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + hu(i, a++)), (s += el(i, t, n, l, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function Ca(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    el(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function I2(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var kt = { current: null },
  tl = { transition: null },
  j2 = { ReactCurrentDispatcher: kt, ReactCurrentBatchConfig: tl, ReactCurrentOwner: Bf };
function f0() {
  throw Error('act(...) is not supported in production builds of React.');
}
oe.Children = {
  map: Ca,
  forEach: function (e, t, n) {
    Ca(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ca(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ca(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wf(e))
      throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
oe.Component = $i;
oe.Fragment = S2;
oe.Profiler = k2;
oe.PureComponent = zf;
oe.StrictMode = w2;
oe.Suspense = T2;
oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j2;
oe.act = f0;
oe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
    );
  var r = s0({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Bf.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      c0.call(t, l) &&
        !u0.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: ra, type: e.type, key: o, ref: i, props: r, _owner: s };
};
oe.createContext = function (e) {
  return (
    (e = {
      $$typeof: $2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: E2, _context: e }),
    (e.Consumer = e)
  );
};
oe.createElement = d0;
oe.createFactory = function (e) {
  var t = d0.bind(null, e);
  return (t.type = e), t;
};
oe.createRef = function () {
  return { current: null };
};
oe.forwardRef = function (e) {
  return { $$typeof: P2, render: e };
};
oe.isValidElement = Wf;
oe.lazy = function (e) {
  return { $$typeof: O2, _payload: { _status: -1, _result: e }, _init: I2 };
};
oe.memo = function (e, t) {
  return { $$typeof: R2, type: e, compare: t === void 0 ? null : t };
};
oe.startTransition = function (e) {
  var t = tl.transition;
  tl.transition = {};
  try {
    e();
  } finally {
    tl.transition = t;
  }
};
oe.unstable_act = f0;
oe.useCallback = function (e, t) {
  return kt.current.useCallback(e, t);
};
oe.useContext = function (e) {
  return kt.current.useContext(e);
};
oe.useDebugValue = function () {};
oe.useDeferredValue = function (e) {
  return kt.current.useDeferredValue(e);
};
oe.useEffect = function (e, t) {
  return kt.current.useEffect(e, t);
};
oe.useId = function () {
  return kt.current.useId();
};
oe.useImperativeHandle = function (e, t, n) {
  return kt.current.useImperativeHandle(e, t, n);
};
oe.useInsertionEffect = function (e, t) {
  return kt.current.useInsertionEffect(e, t);
};
oe.useLayoutEffect = function (e, t) {
  return kt.current.useLayoutEffect(e, t);
};
oe.useMemo = function (e, t) {
  return kt.current.useMemo(e, t);
};
oe.useReducer = function (e, t, n) {
  return kt.current.useReducer(e, t, n);
};
oe.useRef = function (e) {
  return kt.current.useRef(e);
};
oe.useState = function (e) {
  return kt.current.useState(e);
};
oe.useSyncExternalStore = function (e, t, n) {
  return kt.current.useSyncExternalStore(e, t, n);
};
oe.useTransition = function () {
  return kt.current.useTransition();
};
oe.version = '18.3.1';
o0.exports = oe;
var b = o0.exports;
const tt = Ir(b),
  kl = b2({ __proto__: null, default: tt }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var N2 = b,
  L2 = Symbol.for('react.element'),
  D2 = Symbol.for('react.fragment'),
  z2 = Object.prototype.hasOwnProperty,
  F2 = N2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  B2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function p0(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) z2.call(t, r) && !B2.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: L2, type: e, key: i, ref: s, props: o, _owner: F2.current };
}
fc.Fragment = D2;
fc.jsx = p0;
fc.jsxs = p0;
r0.exports = fc;
var C = r0.exports,
  dd = {},
  h0 = { exports: {} },
  Yt = {},
  m0 = { exports: {} },
  g0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, I) {
    var D = T.length;
    T.push(I);
    e: for (; 0 < D; ) {
      var W = (D - 1) >>> 1,
        V = T[W];
      if (0 < o(V, I)) (T[W] = I), (T[D] = V), (D = W);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0],
      D = T.pop();
    if (D !== I) {
      T[0] = D;
      e: for (var W = 0, V = T.length, te = V >>> 1; W < te; ) {
        var K = 2 * (W + 1) - 1,
          Q = T[K],
          J = K + 1,
          re = T[J];
        if (0 > o(Q, D))
          J < V && 0 > o(re, Q)
            ? ((T[W] = re), (T[J] = D), (W = J))
            : ((T[W] = Q), (T[K] = D), (W = K));
        else if (J < V && 0 > o(re, D)) (T[W] = re), (T[J] = D), (W = J);
        else break e;
      }
    }
    return I;
  }
  function o(T, I) {
    var D = T.sortIndex - I.sortIndex;
    return D !== 0 ? D : T.id - I.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    p = 3,
    m = !1,
    x = !1,
    v = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    y = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var I = n(c); I !== null; ) {
      if (I.callback === null) r(c);
      else if (I.startTime <= T) r(c), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = n(c);
    }
  }
  function k(T) {
    if (((v = !1), g(T), !x))
      if (n(l) !== null) (x = !0), M($);
      else {
        var I = n(c);
        I !== null && j(k, I.startTime - T);
      }
  }
  function $(T, I) {
    (x = !1), v && ((v = !1), h(P), (P = -1)), (m = !0);
    var D = p;
    try {
      for (g(I), d = n(l); d !== null && (!(d.expirationTime > I) || (T && !A())); ) {
        var W = d.callback;
        if (typeof W == 'function') {
          (d.callback = null), (p = d.priorityLevel);
          var V = W(d.expirationTime <= I);
          (I = e.unstable_now()),
            typeof V == 'function' ? (d.callback = V) : d === n(l) && r(l),
            g(I);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var te = !0;
      else {
        var K = n(c);
        K !== null && j(k, K.startTime - I), (te = !1);
      }
      return te;
    } finally {
      (d = null), (p = D), (m = !1);
    }
  }
  var f = !1,
    S = null,
    P = -1,
    O = 5,
    R = -1;
  function A() {
    return !(e.unstable_now() - R < O);
  }
  function z() {
    if (S !== null) {
      var T = e.unstable_now();
      R = T;
      var I = !0;
      try {
        I = S(!0, T);
      } finally {
        I ? F() : ((f = !1), (S = null));
      }
    } else f = !1;
  }
  var F;
  if (typeof y == 'function')
    F = function () {
      y(z);
    };
  else if (typeof MessageChannel < 'u') {
    var N = new MessageChannel(),
      _ = N.port2;
    (N.port1.onmessage = z),
      (F = function () {
        _.postMessage(null);
      });
  } else
    F = function () {
      w(z, 0);
    };
  function M(T) {
    (S = T), f || ((f = !0), F());
  }
  function j(T, I) {
    P = w(function () {
      T(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || m || ((x = !0), M($));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (O = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (T) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = p;
      }
      var D = p;
      p = I;
      try {
        return T();
      } finally {
        p = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, I) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var D = p;
      p = T;
      try {
        return I();
      } finally {
        p = D;
      }
    }),
    (e.unstable_scheduleCallback = function (T, I, D) {
      var W = e.unstable_now();
      switch (
        (typeof D == 'object' && D !== null
          ? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? W + D : W))
          : (D = W),
        T)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = D + V),
        (T = {
          id: u++,
          callback: I,
          priorityLevel: T,
          startTime: D,
          expirationTime: V,
          sortIndex: -1,
        }),
        D > W
          ? ((T.sortIndex = D),
            t(c, T),
            n(l) === null && T === n(c) && (v ? (h(P), (P = -1)) : (v = !0), j(k, D - W)))
          : ((T.sortIndex = V), t(l, T), x || m || ((x = !0), M($))),
        T
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (T) {
      var I = p;
      return function () {
        var D = p;
        p = I;
        try {
          return T.apply(this, arguments);
        } finally {
          p = D;
        }
      };
    });
})(g0);
m0.exports = g0;
var W2 = m0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U2 = b,
  Gt = W2;
function B(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var v0 = new Set(),
  Ts = {};
function yo(e, t) {
  di(e, t), di(e + 'Capture', t);
}
function di(e, t) {
  for (Ts[e] = t, e = 0; e < t.length; e++) v0.add(t[e]);
}
var er = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  fd = Object.prototype.hasOwnProperty,
  V2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qh = {},
  Zh = {};
function H2(e) {
  return fd.call(Zh, e) ? !0 : fd.call(Qh, e) ? !1 : V2.test(e) ? (Zh[e] = !0) : ((Qh[e] = !0), !1);
}
function G2(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function K2(e, t, n, r) {
  if (t === null || typeof t > 'u' || G2(e, t, n, r)) return !0;
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
function Et(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var dt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    dt[e] = new Et(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  dt[t] = new Et(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  dt[e] = new Et(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  dt[e] = new Et(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    dt[e] = new Et(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  dt[e] = new Et(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  dt[e] = new Et(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  dt[e] = new Et(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  dt[e] = new Et(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Uf = /[\-:]([a-z])/g;
function Vf(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Uf, Vf);
    dt[t] = new Et(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Uf, Vf);
    dt[t] = new Et(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Uf, Vf);
  dt[t] = new Et(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  dt[e] = new Et(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
dt.xlinkHref = new Et('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  dt[e] = new Et(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hf(e, t, n, r) {
  var o = dt.hasOwnProperty(t) ? dt[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (K2(t, n, o, r) && (n = null),
    r || o === null
      ? H2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ar = U2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sa = Symbol.for('react.element'),
  zo = Symbol.for('react.portal'),
  Fo = Symbol.for('react.fragment'),
  Gf = Symbol.for('react.strict_mode'),
  pd = Symbol.for('react.profiler'),
  y0 = Symbol.for('react.provider'),
  x0 = Symbol.for('react.context'),
  Kf = Symbol.for('react.forward_ref'),
  hd = Symbol.for('react.suspense'),
  md = Symbol.for('react.suspense_list'),
  Yf = Symbol.for('react.memo'),
  mr = Symbol.for('react.lazy'),
  b0 = Symbol.for('react.offscreen'),
  Jh = Symbol.iterator;
function Fi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Jh && e[Jh]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Fe = Object.assign,
  mu;
function ss(e) {
  if (mu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      mu = (t && t[1]) || '';
    }
  return (
    `
` +
    mu +
    e
  );
}
var gu = !1;
function vu(e, t) {
  if (!e || gu) return '';
  gu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (gu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? ss(e) : '';
}
function Y2(e) {
  switch (e.tag) {
    case 5:
      return ss(e.type);
    case 16:
      return ss('Lazy');
    case 13:
      return ss('Suspense');
    case 19:
      return ss('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = vu(e.type, !1)), e;
    case 11:
      return (e = vu(e.type.render, !1)), e;
    case 1:
      return (e = vu(e.type, !0)), e;
    default:
      return '';
  }
}
function gd(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Fo:
      return 'Fragment';
    case zo:
      return 'Portal';
    case pd:
      return 'Profiler';
    case Gf:
      return 'StrictMode';
    case hd:
      return 'Suspense';
    case md:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case x0:
        return (e.displayName || 'Context') + '.Consumer';
      case y0:
        return (e._context.displayName || 'Context') + '.Provider';
      case Kf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Yf:
        return (t = e.displayName || null), t !== null ? t : gd(e.type) || 'Memo';
      case mr:
        (t = e._payload), (e = e._init);
        try {
          return gd(e(t));
        } catch {}
    }
  return null;
}
function X2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return gd(t);
    case 8:
      return t === Gf ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Mr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function C0(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function q2(e) {
  var t = C0(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = '' + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wa(e) {
  e._valueTracker || (e._valueTracker = q2(e));
}
function S0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = C0(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function El(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vd(e, t) {
  var n = t.checked;
  return Fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function em(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function w0(e, t) {
  (t = t.checked), t != null && Hf(e, 'checked', t, !1);
}
function yd(e, t) {
  w0(e, t);
  var n = Mr(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? xd(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && xd(e, t.type, Mr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function tm(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function xd(e, t, n) {
  (t !== 'number' || El(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var as = Array.isArray;
function ti(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Mr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function bd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
  return Fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function nm(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(B(92));
      if (as(n)) {
        if (1 < n.length) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Mr(n) };
}
function k0(e, t) {
  var n = Mr(t.value),
    r = Mr(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function rm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function E0(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Cd(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? E0(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var ka,
  $0 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        ka = ka || document.createElement('div'),
          ka.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ka.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fs = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
  Q2 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(fs).forEach(function (e) {
  Q2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fs[t] = fs[e]);
  });
});
function P0(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (fs.hasOwnProperty(e) && fs[e])
      ? ('' + t).trim()
      : t + 'px';
}
function T0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = P0(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Z2 = Fe(
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
function Sd(e, t) {
  if (t) {
    if (Z2[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(B(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(B(62));
  }
}
function wd(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var kd = null;
function Xf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ed = null,
  ni = null,
  ri = null;
function om(e) {
  if ((e = sa(e))) {
    if (typeof Ed != 'function') throw Error(B(280));
    var t = e.stateNode;
    t && ((t = vc(t)), Ed(e.stateNode, e.type, t));
  }
}
function R0(e) {
  ni ? (ri ? ri.push(e) : (ri = [e])) : (ni = e);
}
function O0() {
  if (ni) {
    var e = ni,
      t = ri;
    if (((ri = ni = null), om(e), t)) for (e = 0; e < t.length; e++) om(t[e]);
  }
}
function M0(e, t) {
  return e(t);
}
function A0() {}
var yu = !1;
function _0(e, t, n) {
  if (yu) return e(t, n);
  yu = !0;
  try {
    return M0(e, t, n);
  } finally {
    (yu = !1), (ni !== null || ri !== null) && (A0(), O0());
  }
}
function Os(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(B(231, t, typeof n));
  return n;
}
var $d = !1;
if (er)
  try {
    var Bi = {};
    Object.defineProperty(Bi, 'passive', {
      get: function () {
        $d = !0;
      },
    }),
      window.addEventListener('test', Bi, Bi),
      window.removeEventListener('test', Bi, Bi);
  } catch {
    $d = !1;
  }
function J2(e, t, n, r, o, i, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var ps = !1,
  $l = null,
  Pl = !1,
  Pd = null,
  eC = {
    onError: function (e) {
      (ps = !0), ($l = e);
    },
  };
function tC(e, t, n, r, o, i, s, a, l) {
  (ps = !1), ($l = null), J2.apply(eC, arguments);
}
function nC(e, t, n, r, o, i, s, a, l) {
  if ((tC.apply(this, arguments), ps)) {
    if (ps) {
      var c = $l;
      (ps = !1), ($l = null);
    } else throw Error(B(198));
    Pl || ((Pl = !0), (Pd = c));
  }
}
function xo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function I0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function im(e) {
  if (xo(e) !== e) throw Error(B(188));
}
function rC(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = xo(e)), t === null)) throw Error(B(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return im(o), e;
        if (i === r) return im(o), t;
        i = i.sibling;
      }
      throw Error(B(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(B(189));
      }
    }
    if (n.alternate !== r) throw Error(B(190));
  }
  if (n.tag !== 3) throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function j0(e) {
  return (e = rC(e)), e !== null ? N0(e) : null;
}
function N0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = N0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var L0 = Gt.unstable_scheduleCallback,
  sm = Gt.unstable_cancelCallback,
  oC = Gt.unstable_shouldYield,
  iC = Gt.unstable_requestPaint,
  Ge = Gt.unstable_now,
  sC = Gt.unstable_getCurrentPriorityLevel,
  qf = Gt.unstable_ImmediatePriority,
  D0 = Gt.unstable_UserBlockingPriority,
  Tl = Gt.unstable_NormalPriority,
  aC = Gt.unstable_LowPriority,
  z0 = Gt.unstable_IdlePriority,
  pc = null,
  Nn = null;
function lC(e) {
  if (Nn && typeof Nn.onCommitFiberRoot == 'function')
    try {
      Nn.onCommitFiberRoot(pc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Sn = Math.clz32 ? Math.clz32 : dC,
  cC = Math.log,
  uC = Math.LN2;
function dC(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cC(e) / uC) | 0)) | 0;
}
var Ea = 64,
  $a = 4194304;
function ls(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Rl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = ls(a)) : ((i &= s), i !== 0 && (r = ls(i)));
  } else (s = n & ~o), s !== 0 ? (r = ls(s)) : i !== 0 && (r = ls(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Sn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function fC(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function pC(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Sn(i),
      a = 1 << s,
      l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = fC(a, t)) : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Td(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function F0() {
  var e = Ea;
  return (Ea <<= 1), !(Ea & 4194240) && (Ea = 64), e;
}
function xu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function oa(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Sn(t)),
    (e[t] = n);
}
function hC(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Sn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Qf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Sn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Se = 0;
function B0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var W0,
  Zf,
  U0,
  V0,
  H0,
  Rd = !1,
  Pa = [],
  Sr = null,
  wr = null,
  kr = null,
  Ms = new Map(),
  As = new Map(),
  vr = [],
  mC =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function am(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Sr = null;
      break;
    case 'dragenter':
    case 'dragleave':
      wr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      kr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Ms.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      As.delete(t.pointerId);
  }
}
function Wi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = sa(t)), t !== null && Zf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function gC(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Sr = Wi(Sr, e, t, n, r, o)), !0;
    case 'dragenter':
      return (wr = Wi(wr, e, t, n, r, o)), !0;
    case 'mouseover':
      return (kr = Wi(kr, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Ms.set(i, Wi(Ms.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), As.set(i, Wi(As.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function G0(e) {
  var t = qr(e.target);
  if (t !== null) {
    var n = xo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = I0(n)), t !== null)) {
          (e.blockedOn = t),
            H0(e.priority, function () {
              U0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function nl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Od(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (kd = r), n.target.dispatchEvent(r), (kd = null);
    } else return (t = sa(n)), t !== null && Zf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function lm(e, t, n) {
  nl(e) && n.delete(t);
}
function vC() {
  (Rd = !1),
    Sr !== null && nl(Sr) && (Sr = null),
    wr !== null && nl(wr) && (wr = null),
    kr !== null && nl(kr) && (kr = null),
    Ms.forEach(lm),
    As.forEach(lm);
}
function Ui(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Rd || ((Rd = !0), Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority, vC)));
}
function _s(e) {
  function t(o) {
    return Ui(o, e);
  }
  if (0 < Pa.length) {
    Ui(Pa[0], e);
    for (var n = 1; n < Pa.length; n++) {
      var r = Pa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Sr !== null && Ui(Sr, e),
      wr !== null && Ui(wr, e),
      kr !== null && Ui(kr, e),
      Ms.forEach(t),
      As.forEach(t),
      n = 0;
    n < vr.length;
    n++
  )
    (r = vr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vr.length && ((n = vr[0]), n.blockedOn === null); )
    G0(n), n.blockedOn === null && vr.shift();
}
var oi = ar.ReactCurrentBatchConfig,
  Ol = !0;
function yC(e, t, n, r) {
  var o = Se,
    i = oi.transition;
  oi.transition = null;
  try {
    (Se = 1), Jf(e, t, n, r);
  } finally {
    (Se = o), (oi.transition = i);
  }
}
function xC(e, t, n, r) {
  var o = Se,
    i = oi.transition;
  oi.transition = null;
  try {
    (Se = 4), Jf(e, t, n, r);
  } finally {
    (Se = o), (oi.transition = i);
  }
}
function Jf(e, t, n, r) {
  if (Ol) {
    var o = Od(e, t, n, r);
    if (o === null) Ru(e, t, r, Ml, n), am(e, r);
    else if (gC(o, e, t, n, r)) r.stopPropagation();
    else if ((am(e, r), t & 4 && -1 < mC.indexOf(e))) {
      for (; o !== null; ) {
        var i = sa(o);
        if ((i !== null && W0(i), (i = Od(e, t, n, r)), i === null && Ru(e, t, r, Ml, n), i === o))
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ru(e, t, r, null, n);
  }
}
var Ml = null;
function Od(e, t, n, r) {
  if (((Ml = null), (e = Xf(r)), (e = qr(e)), e !== null))
    if (((t = xo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = I0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ml = e), null;
}
function K0(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (sC()) {
        case qf:
          return 1;
        case D0:
          return 4;
        case Tl:
        case aC:
          return 16;
        case z0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var xr = null,
  ep = null,
  rl = null;
function Y0() {
  if (rl) return rl;
  var e,
    t = ep,
    n = t.length,
    r,
    o = 'value' in xr ? xr.value : xr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (rl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ol(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ta() {
  return !0;
}
function cm() {
  return !1;
}
function Xt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ta
        : cm),
      (this.isPropagationStopped = cm),
      this
    );
  }
  return (
    Fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ta));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ta));
      },
      persist: function () {},
      isPersistent: Ta,
    }),
    t
  );
}
var Pi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tp = Xt(Pi),
  ia = Fe({}, Pi, { view: 0, detail: 0 }),
  bC = Xt(ia),
  bu,
  Cu,
  Vi,
  hc = Fe({}, ia, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: np,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Vi &&
            (Vi && e.type === 'mousemove'
              ? ((bu = e.screenX - Vi.screenX), (Cu = e.screenY - Vi.screenY))
              : (Cu = bu = 0),
            (Vi = e)),
          bu);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Cu;
    },
  }),
  um = Xt(hc),
  CC = Fe({}, hc, { dataTransfer: 0 }),
  SC = Xt(CC),
  wC = Fe({}, ia, { relatedTarget: 0 }),
  Su = Xt(wC),
  kC = Fe({}, Pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  EC = Xt(kC),
  $C = Fe({}, Pi, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  PC = Xt($C),
  TC = Fe({}, Pi, { data: 0 }),
  dm = Xt(TC),
  RC = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  OC = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  MC = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function AC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = MC[e]) ? !!t[e] : !1;
}
function np() {
  return AC;
}
var _C = Fe({}, ia, {
    key: function (e) {
      if (e.key) {
        var t = RC[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ol(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? OC[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: np,
    charCode: function (e) {
      return e.type === 'keypress' ? ol(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ol(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  IC = Xt(_C),
  jC = Fe({}, hc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  fm = Xt(jC),
  NC = Fe({}, ia, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: np,
  }),
  LC = Xt(NC),
  DC = Fe({}, Pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zC = Xt(DC),
  FC = Fe({}, hc, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  BC = Xt(FC),
  WC = [9, 13, 27, 32],
  rp = er && 'CompositionEvent' in window,
  hs = null;
er && 'documentMode' in document && (hs = document.documentMode);
var UC = er && 'TextEvent' in window && !hs,
  X0 = er && (!rp || (hs && 8 < hs && 11 >= hs)),
  pm = ' ',
  hm = !1;
function q0(e, t) {
  switch (e) {
    case 'keyup':
      return WC.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Q0(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Bo = !1;
function VC(e, t) {
  switch (e) {
    case 'compositionend':
      return Q0(t);
    case 'keypress':
      return t.which !== 32 ? null : ((hm = !0), pm);
    case 'textInput':
      return (e = t.data), e === pm && hm ? null : e;
    default:
      return null;
  }
}
function HC(e, t) {
  if (Bo)
    return e === 'compositionend' || (!rp && q0(e, t))
      ? ((e = Y0()), (rl = ep = xr = null), (Bo = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return X0 && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var GC = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function mm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!GC[e.type] : t === 'textarea';
}
function Z0(e, t, n, r) {
  R0(r),
    (t = Al(t, 'onChange')),
    0 < t.length &&
      ((n = new tp('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var ms = null,
  Is = null;
function KC(e) {
  cy(e, 0);
}
function mc(e) {
  var t = Vo(e);
  if (S0(t)) return e;
}
function YC(e, t) {
  if (e === 'change') return t;
}
var J0 = !1;
if (er) {
  var wu;
  if (er) {
    var ku = 'oninput' in document;
    if (!ku) {
      var gm = document.createElement('div');
      gm.setAttribute('oninput', 'return;'), (ku = typeof gm.oninput == 'function');
    }
    wu = ku;
  } else wu = !1;
  J0 = wu && (!document.documentMode || 9 < document.documentMode);
}
function vm() {
  ms && (ms.detachEvent('onpropertychange', ey), (Is = ms = null));
}
function ey(e) {
  if (e.propertyName === 'value' && mc(Is)) {
    var t = [];
    Z0(t, Is, e, Xf(e)), _0(KC, t);
  }
}
function XC(e, t, n) {
  e === 'focusin'
    ? (vm(), (ms = t), (Is = n), ms.attachEvent('onpropertychange', ey))
    : e === 'focusout' && vm();
}
function qC(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return mc(Is);
}
function QC(e, t) {
  if (e === 'click') return mc(t);
}
function ZC(e, t) {
  if (e === 'input' || e === 'change') return mc(t);
}
function JC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var En = typeof Object.is == 'function' ? Object.is : JC;
function js(e, t) {
  if (En(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!fd.call(t, o) || !En(e[o], t[o])) return !1;
  }
  return !0;
}
function ym(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xm(e, t) {
  var n = ym(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
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
    n = ym(n);
  }
}
function ty(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ty(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function ny() {
  for (var e = window, t = El(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = El(e.document);
  }
  return t;
}
function op(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function eS(e) {
  var t = ny(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ty(n.ownerDocument.documentElement, n)) {
    if (r !== null && op(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = xm(n, i));
        var s = xm(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var tS = er && 'documentMode' in document && 11 >= document.documentMode,
  Wo = null,
  Md = null,
  gs = null,
  Ad = !1;
function bm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ad ||
    Wo == null ||
    Wo !== El(r) ||
    ((r = Wo),
    'selectionStart' in r && op(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (gs && js(gs, r)) ||
      ((gs = r),
      (r = Al(Md, 'onSelect')),
      0 < r.length &&
        ((t = new tp('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Wo))));
}
function Ra(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Uo = {
    animationend: Ra('Animation', 'AnimationEnd'),
    animationiteration: Ra('Animation', 'AnimationIteration'),
    animationstart: Ra('Animation', 'AnimationStart'),
    transitionend: Ra('Transition', 'TransitionEnd'),
  },
  Eu = {},
  ry = {};
er &&
  ((ry = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Uo.animationend.animation,
    delete Uo.animationiteration.animation,
    delete Uo.animationstart.animation),
  'TransitionEvent' in window || delete Uo.transitionend.transition);
function gc(e) {
  if (Eu[e]) return Eu[e];
  if (!Uo[e]) return e;
  var t = Uo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ry) return (Eu[e] = t[n]);
  return e;
}
var oy = gc('animationend'),
  iy = gc('animationiteration'),
  sy = gc('animationstart'),
  ay = gc('transitionend'),
  ly = new Map(),
  Cm =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Nr(e, t) {
  ly.set(e, t), yo(t, [e]);
}
for (var $u = 0; $u < Cm.length; $u++) {
  var Pu = Cm[$u],
    nS = Pu.toLowerCase(),
    rS = Pu[0].toUpperCase() + Pu.slice(1);
  Nr(nS, 'on' + rS);
}
Nr(oy, 'onAnimationEnd');
Nr(iy, 'onAnimationIteration');
Nr(sy, 'onAnimationStart');
Nr('dblclick', 'onDoubleClick');
Nr('focusin', 'onFocus');
Nr('focusout', 'onBlur');
Nr(ay, 'onTransitionEnd');
di('onMouseEnter', ['mouseout', 'mouseover']);
di('onMouseLeave', ['mouseout', 'mouseover']);
di('onPointerEnter', ['pointerout', 'pointerover']);
di('onPointerLeave', ['pointerout', 'pointerover']);
yo('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
yo(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
);
yo('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
yo('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
yo('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
yo('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var cs =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  oS = new Set('cancel close invalid load scroll toggle'.split(' ').concat(cs));
function Sm(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), nC(r, t, void 0, e), (e.currentTarget = null);
}
function cy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Sm(o, a, c), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Sm(o, a, c), (i = l);
        }
    }
  }
  if (Pl) throw ((e = Pd), (Pl = !1), (Pd = null), e);
}
function Ae(e, t) {
  var n = t[Ld];
  n === void 0 && (n = t[Ld] = new Set());
  var r = e + '__bubble';
  n.has(r) || (uy(t, e, 2, !1), n.add(r));
}
function Tu(e, t, n) {
  var r = 0;
  t && (r |= 4), uy(n, e, r, t);
}
var Oa = '_reactListening' + Math.random().toString(36).slice(2);
function Ns(e) {
  if (!e[Oa]) {
    (e[Oa] = !0),
      v0.forEach(function (n) {
        n !== 'selectionchange' && (oS.has(n) || Tu(n, !1, e), Tu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Oa] || ((t[Oa] = !0), Tu('selectionchange', !1, t));
  }
}
function uy(e, t, n, r) {
  switch (K0(t)) {
    case 1:
      var o = yC;
      break;
    case 4:
      o = xC;
      break;
    default:
      o = Jf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !$d || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Ru(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo), l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = qr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  _0(function () {
    var c = i,
      u = Xf(n),
      d = [];
    e: {
      var p = ly.get(e);
      if (p !== void 0) {
        var m = tp,
          x = e;
        switch (e) {
          case 'keypress':
            if (ol(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = IC;
            break;
          case 'focusin':
            (x = 'focus'), (m = Su);
            break;
          case 'focusout':
            (x = 'blur'), (m = Su);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = Su;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = um;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = SC;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = LC;
            break;
          case oy:
          case iy:
          case sy:
            m = EC;
            break;
          case ay:
            m = zC;
            break;
          case 'scroll':
            m = bC;
            break;
          case 'wheel':
            m = BC;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = PC;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = fm;
        }
        var v = (t & 4) !== 0,
          w = !v && e === 'scroll',
          h = v ? (p !== null ? p + 'Capture' : null) : p;
        v = [];
        for (var y = c, g; y !== null; ) {
          g = y;
          var k = g.stateNode;
          if (
            (g.tag === 5 &&
              k !== null &&
              ((g = k), h !== null && ((k = Os(y, h)), k != null && v.push(Ls(y, k, g)))),
            w)
          )
            break;
          y = y.return;
        }
        0 < v.length && ((p = new m(p, x, null, n, u)), d.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          p && n !== kd && (x = n.relatedTarget || n.fromElement) && (qr(x) || x[tr]))
        )
          break e;
        if (
          (m || p) &&
          ((p =
            u.window === u ? u : (p = u.ownerDocument) ? p.defaultView || p.parentWindow : window),
          m
            ? ((x = n.relatedTarget || n.toElement),
              (m = c),
              (x = x ? qr(x) : null),
              x !== null && ((w = xo(x)), x !== w || (x.tag !== 5 && x.tag !== 6)) && (x = null))
            : ((m = null), (x = c)),
          m !== x)
        ) {
          if (
            ((v = um),
            (k = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (y = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = fm), (k = 'onPointerLeave'), (h = 'onPointerEnter'), (y = 'pointer')),
            (w = m == null ? p : Vo(m)),
            (g = x == null ? p : Vo(x)),
            (p = new v(k, y + 'leave', m, n, u)),
            (p.target = w),
            (p.relatedTarget = g),
            (k = null),
            qr(u) === c &&
              ((v = new v(h, y + 'enter', x, n, u)),
              (v.target = g),
              (v.relatedTarget = w),
              (k = v)),
            (w = k),
            m && x)
          )
            t: {
              for (v = m, h = x, y = 0, g = v; g; g = ko(g)) y++;
              for (g = 0, k = h; k; k = ko(k)) g++;
              for (; 0 < y - g; ) (v = ko(v)), y--;
              for (; 0 < g - y; ) (h = ko(h)), g--;
              for (; y--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = ko(v)), (h = ko(h));
              }
              v = null;
            }
          else v = null;
          m !== null && wm(d, p, m, v, !1), x !== null && w !== null && wm(d, w, x, v, !0);
        }
      }
      e: {
        if (
          ((p = c ? Vo(c) : window),
          (m = p.nodeName && p.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && p.type === 'file'))
        )
          var $ = YC;
        else if (mm(p))
          if (J0) $ = ZC;
          else {
            $ = qC;
            var f = XC;
          }
        else
          (m = p.nodeName) &&
            m.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            ($ = QC);
        if ($ && ($ = $(e, c))) {
          Z0(d, $, n, u);
          break e;
        }
        f && f(e, p, c),
          e === 'focusout' &&
            (f = p._wrapperState) &&
            f.controlled &&
            p.type === 'number' &&
            xd(p, 'number', p.value);
      }
      switch (((f = c ? Vo(c) : window), e)) {
        case 'focusin':
          (mm(f) || f.contentEditable === 'true') && ((Wo = f), (Md = c), (gs = null));
          break;
        case 'focusout':
          gs = Md = Wo = null;
          break;
        case 'mousedown':
          Ad = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Ad = !1), bm(d, n, u);
          break;
        case 'selectionchange':
          if (tS) break;
        case 'keydown':
        case 'keyup':
          bm(d, n, u);
      }
      var S;
      if (rp)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        Bo
          ? q0(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (X0 &&
          n.locale !== 'ko' &&
          (Bo || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && Bo && (S = Y0())
            : ((xr = u), (ep = 'value' in xr ? xr.value : xr.textContent), (Bo = !0))),
        (f = Al(c, P)),
        0 < f.length &&
          ((P = new dm(P, e, null, n, u)),
          d.push({ event: P, listeners: f }),
          S ? (P.data = S) : ((S = Q0(n)), S !== null && (P.data = S)))),
        (S = UC ? VC(e, n) : HC(e, n)) &&
          ((c = Al(c, 'onBeforeInput')),
          0 < c.length &&
            ((u = new dm('onBeforeInput', 'beforeinput', null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = S)));
    }
    cy(d, t);
  });
}
function Ls(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Al(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Os(e, n)),
      i != null && r.unshift(Ls(e, i, o)),
      (i = Os(e, t)),
      i != null && r.push(Ls(e, i, o))),
      (e = e.return);
  }
  return r;
}
function ko(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      o
        ? ((l = Os(n, i)), l != null && s.unshift(Ls(n, l, a)))
        : o || ((l = Os(n, i)), l != null && s.push(Ls(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var iS = /\r\n?/g,
  sS = /\u0000|\uFFFD/g;
function km(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      iS,
      `
`
    )
    .replace(sS, '');
}
function Ma(e, t, n) {
  if (((t = km(t)), km(e) !== t && n)) throw Error(B(425));
}
function _l() {}
var _d = null,
  Id = null;
function jd(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Nd = typeof setTimeout == 'function' ? setTimeout : void 0,
  aS = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Em = typeof Promise == 'function' ? Promise : void 0,
  lS =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Em < 'u'
        ? function (e) {
            return Em.resolve(null).then(e).catch(cS);
          }
        : Nd;
function cS(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ou(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), _s(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  _s(t);
}
function Er(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function $m(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ti = Math.random().toString(36).slice(2),
  In = '__reactFiber$' + Ti,
  Ds = '__reactProps$' + Ti,
  tr = '__reactContainer$' + Ti,
  Ld = '__reactEvents$' + Ti,
  uS = '__reactListeners$' + Ti,
  dS = '__reactHandles$' + Ti;
function qr(e) {
  var t = e[In];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[tr] || n[In])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = $m(e); e !== null; ) {
          if ((n = e[In])) return n;
          e = $m(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function sa(e) {
  return (
    (e = e[In] || e[tr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(B(33));
}
function vc(e) {
  return e[Ds] || null;
}
var Dd = [],
  Ho = -1;
function Lr(e) {
  return { current: e };
}
function _e(e) {
  0 > Ho || ((e.current = Dd[Ho]), (Dd[Ho] = null), Ho--);
}
function Re(e, t) {
  Ho++, (Dd[Ho] = e.current), (e.current = t);
}
var Ar = {},
  vt = Lr(Ar),
  Ot = Lr(!1),
  so = Ar;
function fi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ar;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Mt(e) {
  return (e = e.childContextTypes), e != null;
}
function Il() {
  _e(Ot), _e(vt);
}
function Pm(e, t, n) {
  if (vt.current !== Ar) throw Error(B(168));
  Re(vt, t), Re(Ot, n);
}
function dy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(B(108, X2(e) || 'Unknown', o));
  return Fe({}, n, r);
}
function jl(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ar),
    (so = vt.current),
    Re(vt, e),
    Re(Ot, Ot.current),
    !0
  );
}
function Tm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  n
    ? ((e = dy(e, t, so)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      _e(Ot),
      _e(vt),
      Re(vt, e))
    : _e(Ot),
    Re(Ot, n);
}
var Kn = null,
  yc = !1,
  Mu = !1;
function fy(e) {
  Kn === null ? (Kn = [e]) : Kn.push(e);
}
function fS(e) {
  (yc = !0), fy(e);
}
function Dr() {
  if (!Mu && Kn !== null) {
    Mu = !0;
    var e = 0,
      t = Se;
    try {
      var n = Kn;
      for (Se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Kn = null), (yc = !1);
    } catch (o) {
      throw (Kn !== null && (Kn = Kn.slice(e + 1)), L0(qf, Dr), o);
    } finally {
      (Se = t), (Mu = !1);
    }
  }
  return null;
}
var Go = [],
  Ko = 0,
  Nl = null,
  Ll = 0,
  en = [],
  tn = 0,
  ao = null,
  Xn = 1,
  qn = '';
function Hr(e, t) {
  (Go[Ko++] = Ll), (Go[Ko++] = Nl), (Nl = e), (Ll = t);
}
function py(e, t, n) {
  (en[tn++] = Xn), (en[tn++] = qn), (en[tn++] = ao), (ao = e);
  var r = Xn;
  e = qn;
  var o = 32 - Sn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Sn(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Xn = (1 << (32 - Sn(t) + o)) | (n << o) | r),
      (qn = i + e);
  } else (Xn = (1 << i) | (n << o) | r), (qn = e);
}
function ip(e) {
  e.return !== null && (Hr(e, 1), py(e, 1, 0));
}
function sp(e) {
  for (; e === Nl; ) (Nl = Go[--Ko]), (Go[Ko] = null), (Ll = Go[--Ko]), (Go[Ko] = null);
  for (; e === ao; )
    (ao = en[--tn]),
      (en[tn] = null),
      (qn = en[--tn]),
      (en[tn] = null),
      (Xn = en[--tn]),
      (en[tn] = null);
}
var Vt = null,
  Ut = null,
  Ne = !1,
  xn = null;
function hy(e, t) {
  var n = rn(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Rm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Vt = e), (Ut = Er(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Vt = e), (Ut = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ao !== null ? { id: Xn, overflow: qn } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = rn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Vt = e),
            (Ut = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function zd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fd(e) {
  if (Ne) {
    var t = Ut;
    if (t) {
      var n = t;
      if (!Rm(e, t)) {
        if (zd(e)) throw Error(B(418));
        t = Er(n.nextSibling);
        var r = Vt;
        t && Rm(e, t) ? hy(r, n) : ((e.flags = (e.flags & -4097) | 2), (Ne = !1), (Vt = e));
      }
    } else {
      if (zd(e)) throw Error(B(418));
      (e.flags = (e.flags & -4097) | 2), (Ne = !1), (Vt = e);
    }
  }
}
function Om(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Vt = e;
}
function Aa(e) {
  if (e !== Vt) return !1;
  if (!Ne) return Om(e), (Ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !jd(e.type, e.memoizedProps))),
    t && (t = Ut))
  ) {
    if (zd(e)) throw (my(), Error(B(418)));
    for (; t; ) hy(e, t), (t = Er(t.nextSibling));
  }
  if ((Om(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ut = Er(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ut = null;
    }
  } else Ut = Vt ? Er(e.stateNode.nextSibling) : null;
  return !0;
}
function my() {
  for (var e = Ut; e; ) e = Er(e.nextSibling);
}
function pi() {
  (Ut = Vt = null), (Ne = !1);
}
function ap(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
var pS = ar.ReactCurrentBatchConfig;
function Hi(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var o = r,
        i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function _a(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      B(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
    ))
  );
}
function Mm(e) {
  var t = e._init;
  return t(e._payload);
}
function gy(e) {
  function t(h, y) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [y]), (h.flags |= 16)) : g.push(y);
    }
  }
  function n(h, y) {
    if (!e) return null;
    for (; y !== null; ) t(h, y), (y = y.sibling);
    return null;
  }
  function r(h, y) {
    for (h = new Map(); y !== null; )
      y.key !== null ? h.set(y.key, y) : h.set(y.index, y), (y = y.sibling);
    return h;
  }
  function o(h, y) {
    return (h = Rr(h, y)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, y, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null ? ((g = g.index), g < y ? ((h.flags |= 2), y) : g) : ((h.flags |= 2), y))
        : ((h.flags |= 1048576), y)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, y, g, k) {
    return y === null || y.tag !== 6
      ? ((y = Du(g, h.mode, k)), (y.return = h), y)
      : ((y = o(y, g)), (y.return = h), y);
  }
  function l(h, y, g, k) {
    var $ = g.type;
    return $ === Fo
      ? u(h, y, g.props.children, k, g.key)
      : y !== null &&
          (y.elementType === $ ||
            (typeof $ == 'object' && $ !== null && $.$$typeof === mr && Mm($) === y.type))
        ? ((k = o(y, g.props)), (k.ref = Hi(h, y, g)), (k.return = h), k)
        : ((k = dl(g.type, g.key, g.props, null, h.mode, k)),
          (k.ref = Hi(h, y, g)),
          (k.return = h),
          k);
  }
  function c(h, y, g, k) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== g.containerInfo ||
      y.stateNode.implementation !== g.implementation
      ? ((y = zu(g, h.mode, k)), (y.return = h), y)
      : ((y = o(y, g.children || [])), (y.return = h), y);
  }
  function u(h, y, g, k, $) {
    return y === null || y.tag !== 7
      ? ((y = ro(g, h.mode, k, $)), (y.return = h), y)
      : ((y = o(y, g)), (y.return = h), y);
  }
  function d(h, y, g) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return (y = Du('' + y, h.mode, g)), (y.return = h), y;
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Sa:
          return (
            (g = dl(y.type, y.key, y.props, null, h.mode, g)),
            (g.ref = Hi(h, null, y)),
            (g.return = h),
            g
          );
        case zo:
          return (y = zu(y, h.mode, g)), (y.return = h), y;
        case mr:
          var k = y._init;
          return d(h, k(y._payload), g);
      }
      if (as(y) || Fi(y)) return (y = ro(y, h.mode, g, null)), (y.return = h), y;
      _a(h, y);
    }
    return null;
  }
  function p(h, y, g, k) {
    var $ = y !== null ? y.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return $ !== null ? null : a(h, y, '' + g, k);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Sa:
          return g.key === $ ? l(h, y, g, k) : null;
        case zo:
          return g.key === $ ? c(h, y, g, k) : null;
        case mr:
          return ($ = g._init), p(h, y, $(g._payload), k);
      }
      if (as(g) || Fi(g)) return $ !== null ? null : u(h, y, g, k, null);
      _a(h, g);
    }
    return null;
  }
  function m(h, y, g, k, $) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return (h = h.get(g) || null), a(y, h, '' + k, $);
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case Sa:
          return (h = h.get(k.key === null ? g : k.key) || null), l(y, h, k, $);
        case zo:
          return (h = h.get(k.key === null ? g : k.key) || null), c(y, h, k, $);
        case mr:
          var f = k._init;
          return m(h, y, g, f(k._payload), $);
      }
      if (as(k) || Fi(k)) return (h = h.get(g) || null), u(y, h, k, $, null);
      _a(y, k);
    }
    return null;
  }
  function x(h, y, g, k) {
    for (var $ = null, f = null, S = y, P = (y = 0), O = null; S !== null && P < g.length; P++) {
      S.index > P ? ((O = S), (S = null)) : (O = S.sibling);
      var R = p(h, S, g[P], k);
      if (R === null) {
        S === null && (S = O);
        break;
      }
      e && S && R.alternate === null && t(h, S),
        (y = i(R, y, P)),
        f === null ? ($ = R) : (f.sibling = R),
        (f = R),
        (S = O);
    }
    if (P === g.length) return n(h, S), Ne && Hr(h, P), $;
    if (S === null) {
      for (; P < g.length; P++)
        (S = d(h, g[P], k)),
          S !== null && ((y = i(S, y, P)), f === null ? ($ = S) : (f.sibling = S), (f = S));
      return Ne && Hr(h, P), $;
    }
    for (S = r(h, S); P < g.length; P++)
      (O = m(S, h, P, g[P], k)),
        O !== null &&
          (e && O.alternate !== null && S.delete(O.key === null ? P : O.key),
          (y = i(O, y, P)),
          f === null ? ($ = O) : (f.sibling = O),
          (f = O));
    return (
      e &&
        S.forEach(function (A) {
          return t(h, A);
        }),
      Ne && Hr(h, P),
      $
    );
  }
  function v(h, y, g, k) {
    var $ = Fi(g);
    if (typeof $ != 'function') throw Error(B(150));
    if (((g = $.call(g)), g == null)) throw Error(B(151));
    for (
      var f = ($ = null), S = y, P = (y = 0), O = null, R = g.next();
      S !== null && !R.done;
      P++, R = g.next()
    ) {
      S.index > P ? ((O = S), (S = null)) : (O = S.sibling);
      var A = p(h, S, R.value, k);
      if (A === null) {
        S === null && (S = O);
        break;
      }
      e && S && A.alternate === null && t(h, S),
        (y = i(A, y, P)),
        f === null ? ($ = A) : (f.sibling = A),
        (f = A),
        (S = O);
    }
    if (R.done) return n(h, S), Ne && Hr(h, P), $;
    if (S === null) {
      for (; !R.done; P++, R = g.next())
        (R = d(h, R.value, k)),
          R !== null && ((y = i(R, y, P)), f === null ? ($ = R) : (f.sibling = R), (f = R));
      return Ne && Hr(h, P), $;
    }
    for (S = r(h, S); !R.done; P++, R = g.next())
      (R = m(S, h, P, R.value, k)),
        R !== null &&
          (e && R.alternate !== null && S.delete(R.key === null ? P : R.key),
          (y = i(R, y, P)),
          f === null ? ($ = R) : (f.sibling = R),
          (f = R));
    return (
      e &&
        S.forEach(function (z) {
          return t(h, z);
        }),
      Ne && Hr(h, P),
      $
    );
  }
  function w(h, y, g, k) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === Fo &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case Sa:
          e: {
            for (var $ = g.key, f = y; f !== null; ) {
              if (f.key === $) {
                if ((($ = g.type), $ === Fo)) {
                  if (f.tag === 7) {
                    n(h, f.sibling), (y = o(f, g.props.children)), (y.return = h), (h = y);
                    break e;
                  }
                } else if (
                  f.elementType === $ ||
                  (typeof $ == 'object' && $ !== null && $.$$typeof === mr && Mm($) === f.type)
                ) {
                  n(h, f.sibling),
                    (y = o(f, g.props)),
                    (y.ref = Hi(h, f, g)),
                    (y.return = h),
                    (h = y);
                  break e;
                }
                n(h, f);
                break;
              } else t(h, f);
              f = f.sibling;
            }
            g.type === Fo
              ? ((y = ro(g.props.children, h.mode, k, g.key)), (y.return = h), (h = y))
              : ((k = dl(g.type, g.key, g.props, null, h.mode, k)),
                (k.ref = Hi(h, y, g)),
                (k.return = h),
                (h = k));
          }
          return s(h);
        case zo:
          e: {
            for (f = g.key; y !== null; ) {
              if (y.key === f)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === g.containerInfo &&
                  y.stateNode.implementation === g.implementation
                ) {
                  n(h, y.sibling), (y = o(y, g.children || [])), (y.return = h), (h = y);
                  break e;
                } else {
                  n(h, y);
                  break;
                }
              else t(h, y);
              y = y.sibling;
            }
            (y = zu(g, h.mode, k)), (y.return = h), (h = y);
          }
          return s(h);
        case mr:
          return (f = g._init), w(h, y, f(g._payload), k);
      }
      if (as(g)) return x(h, y, g, k);
      if (Fi(g)) return v(h, y, g, k);
      _a(h, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        y !== null && y.tag === 6
          ? (n(h, y.sibling), (y = o(y, g)), (y.return = h), (h = y))
          : (n(h, y), (y = Du(g, h.mode, k)), (y.return = h), (h = y)),
        s(h))
      : n(h, y);
  }
  return w;
}
var hi = gy(!0),
  vy = gy(!1),
  Dl = Lr(null),
  zl = null,
  Yo = null,
  lp = null;
function cp() {
  lp = Yo = zl = null;
}
function up(e) {
  var t = Dl.current;
  _e(Dl), (e._currentValue = t);
}
function Bd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ii(e, t) {
  (zl = e),
    (lp = Yo = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Rt = !0), (e.firstContext = null));
}
function an(e) {
  var t = e._currentValue;
  if (lp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yo === null)) {
      if (zl === null) throw Error(B(308));
      (Yo = e), (zl.dependencies = { lanes: 0, firstContext: e });
    } else Yo = Yo.next = e;
  return t;
}
var Qr = null;
function dp(e) {
  Qr === null ? (Qr = [e]) : Qr.push(e);
}
function yy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), dp(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    nr(e, r)
  );
}
function nr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var gr = !1;
function fp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function xy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Zn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function $r(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), me & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), nr(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), dp(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    nr(e, n)
  );
}
function il(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qf(e, n);
  }
}
function Am(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Fl(e, t, n, r) {
  var o = e.updateQueue;
  gr = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (i = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s && (a === null ? (u.firstBaseUpdate = c) : (a.next = c), (u.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (u = c = l = null), (a = i);
    do {
      var p = a.lane,
        m = a.eventTime;
      if ((r & p) === p) {
        u !== null &&
          (u = u.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            v = a;
          switch (((p = t), (m = n), v.tag)) {
            case 1:
              if (((x = v.payload), typeof x == 'function')) {
                d = x.call(m, d, p);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (((x = v.payload), (p = typeof x == 'function' ? x.call(m, d, p) : x), p == null))
                break e;
              d = Fe({}, d, p);
              break e;
            case 2:
              gr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (p = o.effects), p === null ? (o.effects = [a]) : p.push(a));
      } else
        (m = {
          eventTime: m,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = m), (l = d)) : (u = u.next = m),
          (s |= p);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (p = a), (a = p.next), (p.next = null), (o.lastBaseUpdate = p), (o.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = u),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (co |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function _m(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(B(191, o));
        o.call(r);
      }
    }
}
var aa = {},
  Ln = Lr(aa),
  zs = Lr(aa),
  Fs = Lr(aa);
function Zr(e) {
  if (e === aa) throw Error(B(174));
  return e;
}
function pp(e, t) {
  switch ((Re(Fs, t), Re(zs, e), Re(Ln, aa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Cd(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Cd(t, e));
  }
  _e(Ln), Re(Ln, t);
}
function mi() {
  _e(Ln), _e(zs), _e(Fs);
}
function by(e) {
  Zr(Fs.current);
  var t = Zr(Ln.current),
    n = Cd(t, e.type);
  t !== n && (Re(zs, e), Re(Ln, n));
}
function hp(e) {
  zs.current === e && (_e(Ln), _e(zs));
}
var De = Lr(0);
function Bl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var Au = [];
function mp() {
  for (var e = 0; e < Au.length; e++) Au[e]._workInProgressVersionPrimary = null;
  Au.length = 0;
}
var sl = ar.ReactCurrentDispatcher,
  _u = ar.ReactCurrentBatchConfig,
  lo = 0,
  ze = null,
  Qe = null,
  et = null,
  Wl = !1,
  vs = !1,
  Bs = 0,
  hS = 0;
function ft() {
  throw Error(B(321));
}
function gp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!En(e[n], t[n])) return !1;
  return !0;
}
function vp(e, t, n, r, o, i) {
  if (
    ((lo = i),
    (ze = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (sl.current = e === null || e.memoizedState === null ? yS : xS),
    (e = n(r, o)),
    vs)
  ) {
    i = 0;
    do {
      if (((vs = !1), (Bs = 0), 25 <= i)) throw Error(B(301));
      (i += 1), (et = Qe = null), (t.updateQueue = null), (sl.current = bS), (e = n(r, o));
    } while (vs);
  }
  if (
    ((sl.current = Ul),
    (t = Qe !== null && Qe.next !== null),
    (lo = 0),
    (et = Qe = ze = null),
    (Wl = !1),
    t)
  )
    throw Error(B(300));
  return e;
}
function yp() {
  var e = Bs !== 0;
  return (Bs = 0), e;
}
function Mn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return et === null ? (ze.memoizedState = et = e) : (et = et.next = e), et;
}
function ln() {
  if (Qe === null) {
    var e = ze.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Qe.next;
  var t = et === null ? ze.memoizedState : et.next;
  if (t !== null) (et = t), (Qe = e);
  else {
    if (e === null) throw Error(B(310));
    (Qe = e),
      (e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null,
      }),
      et === null ? (ze.memoizedState = et = e) : (et = et.next = e);
  }
  return et;
}
function Ws(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Iu(e) {
  var t = ln(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = Qe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = i;
    do {
      var u = c.lane;
      if ((lo & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d), (ze.lanes |= u), (co |= u);
      }
      c = c.next;
    } while (c !== null && c !== i);
    l === null ? (s = r) : (l.next = a),
      En(r, t.memoizedState) || (Rt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ze.lanes |= i), (co |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ju(e) {
  var t = ln(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    En(i, t.memoizedState) || (Rt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Cy() {}
function Sy(e, t) {
  var n = ze,
    r = ln(),
    o = t(),
    i = !En(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Rt = !0)),
    (r = r.queue),
    xp(Ey.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (et !== null && et.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Us(9, ky.bind(null, n, r, o, t), void 0, null), nt === null))
      throw Error(B(349));
    lo & 30 || wy(n, t, o);
  }
  return o;
}
function wy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ze.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ky(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $y(t) && Py(e);
}
function Ey(e, t, n) {
  return n(function () {
    $y(t) && Py(e);
  });
}
function $y(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !En(e, n);
  } catch {
    return !0;
  }
}
function Py(e) {
  var t = nr(e, 1);
  t !== null && wn(t, e, 1, -1);
}
function Im(e) {
  var t = Mn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ws,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vS.bind(null, ze, e)),
    [t.memoizedState, e]
  );
}
function Us(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ze.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ty() {
  return ln().memoizedState;
}
function al(e, t, n, r) {
  var o = Mn();
  (ze.flags |= e), (o.memoizedState = Us(1 | t, n, void 0, r === void 0 ? null : r));
}
function xc(e, t, n, r) {
  var o = ln();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Qe !== null) {
    var s = Qe.memoizedState;
    if (((i = s.destroy), r !== null && gp(r, s.deps))) {
      o.memoizedState = Us(t, n, i, r);
      return;
    }
  }
  (ze.flags |= e), (o.memoizedState = Us(1 | t, n, i, r));
}
function jm(e, t) {
  return al(8390656, 8, e, t);
}
function xp(e, t) {
  return xc(2048, 8, e, t);
}
function Ry(e, t) {
  return xc(4, 2, e, t);
}
function Oy(e, t) {
  return xc(4, 4, e, t);
}
function My(e, t) {
  if (typeof t == 'function')
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
function Ay(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), xc(4, 4, My.bind(null, t, e), n);
}
function bp() {}
function _y(e, t) {
  var n = ln();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gp(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Iy(e, t) {
  var n = ln();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function jy(e, t, n) {
  return lo & 21
    ? (En(n, t) || ((n = F0()), (ze.lanes |= n), (co |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Rt = !0)), (e.memoizedState = n));
}
function mS(e, t) {
  var n = Se;
  (Se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = _u.transition;
  _u.transition = {};
  try {
    e(!1), t();
  } finally {
    (Se = n), (_u.transition = r);
  }
}
function Ny() {
  return ln().memoizedState;
}
function gS(e, t, n) {
  var r = Tr(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ly(e)))
    Dy(t, n);
  else if (((n = yy(e, t, n, r)), n !== null)) {
    var o = wt();
    wn(n, e, r, o), zy(n, t, r);
  }
}
function vS(e, t, n) {
  var r = Tr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ly(e)) Dy(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), En(a, s))) {
          var l = t.interleaved;
          l === null ? ((o.next = o), dp(t)) : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = yy(e, t, o, r)), n !== null && ((o = wt()), wn(n, e, r, o), zy(n, t, r));
  }
}
function Ly(e) {
  var t = e.alternate;
  return e === ze || (t !== null && t === ze);
}
function Dy(e, t) {
  vs = Wl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function zy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qf(e, n);
  }
}
var Ul = {
    readContext: an,
    useCallback: ft,
    useContext: ft,
    useEffect: ft,
    useImperativeHandle: ft,
    useInsertionEffect: ft,
    useLayoutEffect: ft,
    useMemo: ft,
    useReducer: ft,
    useRef: ft,
    useState: ft,
    useDebugValue: ft,
    useDeferredValue: ft,
    useTransition: ft,
    useMutableSource: ft,
    useSyncExternalStore: ft,
    useId: ft,
    unstable_isNewReconciler: !1,
  },
  yS = {
    readContext: an,
    useCallback: function (e, t) {
      return (Mn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: an,
    useEffect: jm,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), al(4194308, 4, My.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return al(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return al(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Mn();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Mn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gS.bind(null, ze, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Mn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Im,
    useDebugValue: bp,
    useDeferredValue: function (e) {
      return (Mn().memoizedState = e);
    },
    useTransition: function () {
      var e = Im(!1),
        t = e[0];
      return (e = mS.bind(null, e[1])), (Mn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ze,
        o = Mn();
      if (Ne) {
        if (n === void 0) throw Error(B(407));
        n = n();
      } else {
        if (((n = t()), nt === null)) throw Error(B(349));
        lo & 30 || wy(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        jm(Ey.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Us(9, ky.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Mn(),
        t = nt.identifierPrefix;
      if (Ne) {
        var n = qn,
          r = Xn;
        (n = (r & ~(1 << (32 - Sn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Bs++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = hS++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  xS = {
    readContext: an,
    useCallback: _y,
    useContext: an,
    useEffect: xp,
    useImperativeHandle: Ay,
    useInsertionEffect: Ry,
    useLayoutEffect: Oy,
    useMemo: Iy,
    useReducer: Iu,
    useRef: Ty,
    useState: function () {
      return Iu(Ws);
    },
    useDebugValue: bp,
    useDeferredValue: function (e) {
      var t = ln();
      return jy(t, Qe.memoizedState, e);
    },
    useTransition: function () {
      var e = Iu(Ws)[0],
        t = ln().memoizedState;
      return [e, t];
    },
    useMutableSource: Cy,
    useSyncExternalStore: Sy,
    useId: Ny,
    unstable_isNewReconciler: !1,
  },
  bS = {
    readContext: an,
    useCallback: _y,
    useContext: an,
    useEffect: xp,
    useImperativeHandle: Ay,
    useInsertionEffect: Ry,
    useLayoutEffect: Oy,
    useMemo: Iy,
    useReducer: ju,
    useRef: Ty,
    useState: function () {
      return ju(Ws);
    },
    useDebugValue: bp,
    useDeferredValue: function (e) {
      var t = ln();
      return Qe === null ? (t.memoizedState = e) : jy(t, Qe.memoizedState, e);
    },
    useTransition: function () {
      var e = ju(Ws)[0],
        t = ln().memoizedState;
      return [e, t];
    },
    useMutableSource: Cy,
    useSyncExternalStore: Sy,
    useId: Ny,
    unstable_isNewReconciler: !1,
  };
function vn(e, t) {
  if (e && e.defaultProps) {
    (t = Fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      o = Tr(e),
      i = Zn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = $r(e, i, o)),
      t !== null && (wn(t, e, o, r), il(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      o = Tr(e),
      i = Zn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = $r(e, i, o)),
      t !== null && (wn(t, e, o, r), il(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = wt(),
      r = Tr(e),
      o = Zn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = $r(e, o, r)),
      t !== null && (wn(t, e, r, n), il(t, e, r));
  },
};
function Nm(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !js(n, r) || !js(o, i)
        : !0
  );
}
function Fy(e, t, n) {
  var r = !1,
    o = Ar,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = an(i))
      : ((o = Mt(t) ? so : vt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fi(e, o) : Ar)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Lm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bc.enqueueReplaceState(t, t.state, null);
}
function Ud(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), fp(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = an(i))
    : ((i = Mt(t) ? so : vt.current), (o.context = fi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Wd(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && bc.enqueueReplaceState(o, o.state, null),
      Fl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function gi(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Y2(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Nu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var CS = typeof WeakMap == 'function' ? WeakMap : Map;
function By(e, t, n) {
  (n = Zn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Hl || ((Hl = !0), (ef = r)), Vd(e, t);
    }),
    n
  );
}
function Wy(e, t, n) {
  (n = Zn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Vd(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Vd(e, t), typeof r != 'function' && (Pr === null ? (Pr = new Set([this])) : Pr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' });
      }),
    n
  );
}
function Dm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new CS();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = jS.bind(null, e, t, n)), t.then(e, e));
}
function zm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fm(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Zn(-1, 1)), (t.tag = 2), $r(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var SS = ar.ReactCurrentOwner,
  Rt = !1;
function bt(e, t, n, r) {
  t.child = e === null ? vy(t, null, n, r) : hi(t, e.child, n, r);
}
function Bm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ii(t, o),
    (r = vp(e, t, n, r, i, o)),
    (n = yp()),
    e !== null && !Rt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), rr(e, t, o))
      : (Ne && n && ip(t), (t.flags |= 1), bt(e, t, r, o), t.child)
  );
}
function Wm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Tp(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Uy(e, t, i, r, o))
      : ((e = dl(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : js), n(s, r) && e.ref === t.ref))
      return rr(e, t, o);
  }
  return (t.flags |= 1), (e = Rr(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Uy(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (js(i, r) && e.ref === t.ref)
      if (((Rt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Rt = !0);
      else return (t.lanes = e.lanes), rr(e, t, o);
  }
  return Hd(e, t, n, r, o);
}
function Vy(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Re(qo, Bt),
        (Bt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          Re(qo, Bt),
          (Bt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Re(qo, Bt),
        (Bt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), Re(qo, Bt), (Bt |= r);
  return bt(e, t, o, n), t.child;
}
function Hy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hd(e, t, n, r, o) {
  var i = Mt(n) ? so : vt.current;
  return (
    (i = fi(t, i)),
    ii(t, o),
    (n = vp(e, t, n, r, i, o)),
    (r = yp()),
    e !== null && !Rt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), rr(e, t, o))
      : (Ne && r && ip(t), (t.flags |= 1), bt(e, t, n, o), t.child)
  );
}
function Um(e, t, n, r, o) {
  if (Mt(n)) {
    var i = !0;
    jl(t);
  } else i = !1;
  if ((ii(t, o), t.stateNode === null)) ll(e, t), Fy(t, n, r), Ud(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = an(c))
      : ((c = Mt(n) ? so : vt.current), (c = fi(t, c)));
    var u = n.getDerivedStateFromProps,
      d = typeof u == 'function' || typeof s.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== c) && Lm(t, s, r, c)),
      (gr = !1);
    var p = t.memoizedState;
    (s.state = p),
      Fl(t, r, s, o),
      (l = t.memoizedState),
      a !== r || p !== l || Ot.current || gr
        ? (typeof u == 'function' && (Wd(t, n, u, r), (l = t.memoizedState)),
          (a = gr || Nm(t, n, a, r, p, l, c))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      xy(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : vn(t.type, a)),
      (s.props = c),
      (d = t.pendingProps),
      (p = s.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = an(l))
        : ((l = Mt(n) ? so : vt.current), (l = fi(t, l)));
    var m = n.getDerivedStateFromProps;
    (u = typeof m == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== d || p !== l) && Lm(t, s, r, l)),
      (gr = !1),
      (p = t.memoizedState),
      (s.state = p),
      Fl(t, r, s, o);
    var x = t.memoizedState;
    a !== d || p !== x || Ot.current || gr
      ? (typeof m == 'function' && (Wd(t, n, m, r), (x = t.memoizedState)),
        (c = gr || Nm(t, n, c, r, p, x, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(r, x, l),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, x, l)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Gd(e, t, n, r, i, o);
}
function Gd(e, t, n, r, o, i) {
  Hy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Tm(t, n, !1), rr(e, t, i);
  (r = t.stateNode), (SS.current = t);
  var a = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = hi(t, e.child, null, i)), (t.child = hi(t, null, a, i)))
      : bt(e, t, a, i),
    (t.memoizedState = r.state),
    o && Tm(t, n, !0),
    t.child
  );
}
function Gy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Pm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Pm(e, t.context, !1),
    pp(e, t.containerInfo);
}
function Vm(e, t, n, r, o) {
  return pi(), ap(o), (t.flags |= 256), bt(e, t, n, r), t.child;
}
var Kd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ky(e, t, n) {
  var r = t.pendingProps,
    o = De.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    Re(De, o & 1),
    e === null)
  )
    return (
      Fd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = wc(s, r, 0, null)),
              (e = ro(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Yd(n)),
              (t.memoizedState = Kd),
              e)
            : Cp(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return wS(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = Rr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Rr(a, i)) : ((i = ro(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Yd(n)
          : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Kd),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Rr(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Cp(e, t) {
  return (t = wc({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ia(e, t, n, r) {
  return (
    r !== null && ap(r),
    hi(t, e.child, null, n),
    (e = Cp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function wS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Nu(Error(B(422)))), Ia(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = wc({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = ro(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && hi(t, e.child, null, s),
          (t.child.memoizedState = Yd(s)),
          (t.memoizedState = Kd),
          i);
  if (!(t.mode & 1)) return Ia(e, t, s, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(B(419))), (r = Nu(i, r, void 0)), Ia(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Rt || a)) {
    if (((r = nt), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), nr(e, o), wn(r, e, o, -1));
    }
    return Pp(), (r = Nu(Error(B(421)))), Ia(e, t, s, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = NS.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Ut = Er(o.nextSibling)),
      (Vt = t),
      (Ne = !0),
      (xn = null),
      e !== null &&
        ((en[tn++] = Xn),
        (en[tn++] = qn),
        (en[tn++] = ao),
        (Xn = e.id),
        (qn = e.overflow),
        (ao = t)),
      (t = Cp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Hm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bd(e.return, t, n);
}
function Lu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Yy(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((bt(e, t, r.children, n), (r = De.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hm(e, n, t);
        else if (e.tag === 19) Hm(e, n, t);
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
  if ((Re(De, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Bl(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          Lu(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Bl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Lu(t, !0, n, null, i);
        break;
      case 'together':
        Lu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ll(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function rr(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (co |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(B(153));
  if (t.child !== null) {
    for (e = t.child, n = Rr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Rr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function kS(e, t, n) {
  switch (t.tag) {
    case 3:
      Gy(t), pi();
      break;
    case 5:
      by(t);
      break;
    case 1:
      Mt(t.type) && jl(t);
      break;
    case 4:
      pp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Re(Dl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Re(De, De.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ky(e, t, n)
            : (Re(De, De.current & 1), (e = rr(e, t, n)), e !== null ? e.sibling : null);
      Re(De, De.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Yy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Re(De, De.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Vy(e, t, n);
  }
  return rr(e, t, n);
}
var Xy, Xd, qy, Qy;
Xy = function (e, t) {
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
Xd = function () {};
qy = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Zr(Ln.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = vd(e, o)), (r = vd(e, r)), (i = []);
        break;
      case 'select':
        (o = Fe({}, o, { value: void 0 })), (r = Fe({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (o = bd(e, o)), (r = bd(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = _l);
    }
    Sd(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === 'style') {
          var a = o[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Ts.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''));
            for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(c, n)), (n = l);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(c, l))
            : c === 'children'
              ? (typeof l != 'string' && typeof l != 'number') || (i = i || []).push(c, '' + l)
              : c !== 'suppressContentEditableWarning' &&
                c !== 'suppressHydrationWarning' &&
                (Ts.hasOwnProperty(c)
                  ? (l != null && c === 'onScroll' && Ae('scroll', e), i || a === l || (i = []))
                  : (i = i || []).push(c, l));
    }
    n && (i = i || []).push('style', n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Qy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Gi(e, t) {
  if (!Ne)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ES(e, t, n) {
  var r = t.pendingProps;
  switch ((sp(t), t.tag)) {
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
      return pt(t), null;
    case 1:
      return Mt(t.type) && Il(), pt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mi(),
        _e(Ot),
        _e(vt),
        mp(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Aa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), xn !== null && (rf(xn), (xn = null)))),
        Xd(e, t),
        pt(t),
        null
      );
    case 5:
      hp(t);
      var o = Zr(Fs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        qy(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166));
          return pt(t), null;
        }
        if (((e = Zr(Ln.current)), Aa(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[In] = t), (r[Ds] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Ae('cancel', r), Ae('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Ae('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < cs.length; o++) Ae(cs[o], r);
              break;
            case 'source':
              Ae('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Ae('error', r), Ae('load', r);
              break;
            case 'details':
              Ae('toggle', r);
              break;
            case 'input':
              em(r, i), Ae('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), Ae('invalid', r);
              break;
            case 'textarea':
              nm(r, i), Ae('invalid', r);
          }
          Sd(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 && Ma(r.textContent, a, e),
                    (o = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 && Ma(r.textContent, a, e),
                    (o = ['children', '' + a]))
                : Ts.hasOwnProperty(s) && a != null && s === 'onScroll' && Ae('scroll', r);
            }
          switch (n) {
            case 'input':
              wa(r), tm(r, i, !0);
              break;
            case 'textarea':
              wa(r), rm(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = _l);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = E0(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[In] = t),
            (e[Ds] = r),
            Xy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = wd(n, r)), n)) {
              case 'dialog':
                Ae('cancel', e), Ae('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ae('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < cs.length; o++) Ae(cs[o], e);
                o = r;
                break;
              case 'source':
                Ae('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Ae('error', e), Ae('load', e), (o = r);
                break;
              case 'details':
                Ae('toggle', e), (o = r);
                break;
              case 'input':
                em(e, r), (o = vd(e, r)), Ae('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Fe({}, r, { value: void 0 })),
                  Ae('invalid', e);
                break;
              case 'textarea':
                nm(e, r), (o = bd(e, r)), Ae('invalid', e);
                break;
              default:
                o = r;
            }
            Sd(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === 'style'
                  ? T0(e, l)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && $0(e, l))
                    : i === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && Rs(e, l)
                        : typeof l == 'number' && Rs(e, '' + l)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Ts.hasOwnProperty(i)
                          ? l != null && i === 'onScroll' && Ae('scroll', e)
                          : l != null && Hf(e, i, l, s));
              }
            switch (n) {
              case 'input':
                wa(e), tm(e, r, !1);
                break;
              case 'textarea':
                wa(e), rm(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Mr(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ti(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && ti(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = _l);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pt(t), null;
    case 6:
      if (e && t.stateNode != null) Qy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(B(166));
        if (((n = Zr(Fs.current)), Zr(Ln.current), Aa(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[In] = t),
            (i = r.nodeValue !== n) && ((e = Vt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ma(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ma(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[In] = t),
            (t.stateNode = r);
      }
      return pt(t), null;
    case 13:
      if (
        (_e(De),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ne && Ut !== null && t.mode & 1 && !(t.flags & 128))
          my(), pi(), (t.flags |= 98560), (i = !1);
        else if (((i = Aa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(B(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(B(317));
            i[In] = t;
          } else pi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pt(t), (i = !1);
        } else xn !== null && (rf(xn), (xn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || De.current & 1 ? Ze === 0 && (Ze = 3) : Pp())),
          t.updateQueue !== null && (t.flags |= 4),
          pt(t),
          null);
    case 4:
      return mi(), Xd(e, t), e === null && Ns(t.stateNode.containerInfo), pt(t), null;
    case 10:
      return up(t.type._context), pt(t), null;
    case 17:
      return Mt(t.type) && Il(), pt(t), null;
    case 19:
      if ((_e(De), (i = t.memoizedState), i === null)) return pt(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Gi(i, !1);
        else {
          if (Ze !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Bl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Gi(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return Re(De, (De.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ge() > vi &&
            ((t.flags |= 128), (r = !0), Gi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Gi(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !Ne)
            )
              return pt(t), null;
          } else
            2 * Ge() - i.renderingStartTime > vi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Gi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ge()),
          (t.sibling = null),
          (n = De.current),
          Re(De, r ? (n & 1) | 2 : n & 1),
          t)
        : (pt(t), null);
    case 22:
    case 23:
      return (
        $p(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Bt & 1073741824 && (pt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function $S(e, t) {
  switch ((sp(t), t.tag)) {
    case 1:
      return (
        Mt(t.type) && Il(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mi(),
        _e(Ot),
        _e(vt),
        mp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return hp(t), null;
    case 13:
      if ((_e(De), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(B(340));
        pi();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return _e(De), null;
    case 4:
      return mi(), null;
    case 10:
      return up(t.type._context), null;
    case 22:
    case 23:
      return $p(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ja = !1,
  gt = !1,
  PS = typeof WeakSet == 'function' ? WeakSet : Set,
  G = null;
function Xo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Ue(e, t, r);
      }
    else n.current = null;
}
function qd(e, t, n) {
  try {
    n();
  } catch (r) {
    Ue(e, t, r);
  }
}
var Gm = !1;
function TS(e, t) {
  if (((_d = Ol), (e = ny()), op(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var m;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (p = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++c === o && (a = s),
                p === i && ++u === r && (l = s),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Id = { focusedElem: e, selectionRange: n }, Ol = !1, G = t; G !== null; )
    if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (G = e);
    else
      for (; G !== null; ) {
        t = G;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var v = x.memoizedProps,
                    w = x.memoizedState,
                    h = t.stateNode,
                    y = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vn(t.type, v), w);
                  h.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(B(163));
            }
        } catch (k) {
          Ue(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (G = e);
          break;
        }
        G = t.return;
      }
  return (x = Gm), (Gm = !1), x;
}
function ys(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && qd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Cc(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
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
function Qd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Zy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Zy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[In], delete t[Ds], delete t[Ld], delete t[uS], delete t[dS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Jy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Km(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Jy(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = _l));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zd(e, t, n), e = e.sibling; e !== null; ) Zd(e, t, n), (e = e.sibling);
}
function Jd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jd(e, t, n), e = e.sibling; e !== null; ) Jd(e, t, n), (e = e.sibling);
}
var it = null,
  yn = !1;
function ur(e, t, n) {
  for (n = n.child; n !== null; ) e1(e, t, n), (n = n.sibling);
}
function e1(e, t, n) {
  if (Nn && typeof Nn.onCommitFiberUnmount == 'function')
    try {
      Nn.onCommitFiberUnmount(pc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      gt || Xo(n, t);
    case 6:
      var r = it,
        o = yn;
      (it = null),
        ur(e, t, n),
        (it = r),
        (yn = o),
        it !== null &&
          (yn
            ? ((e = it),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : it.removeChild(n.stateNode));
      break;
    case 18:
      it !== null &&
        (yn
          ? ((e = it),
            (n = n.stateNode),
            e.nodeType === 8 ? Ou(e.parentNode, n) : e.nodeType === 1 && Ou(e, n),
            _s(e))
          : Ou(it, n.stateNode));
      break;
    case 4:
      (r = it),
        (o = yn),
        (it = n.stateNode.containerInfo),
        (yn = !0),
        ur(e, t, n),
        (it = r),
        (yn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!gt && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag), s !== void 0 && (i & 2 || i & 4) && qd(n, t, s), (o = o.next);
        } while (o !== r);
      }
      ur(e, t, n);
      break;
    case 1:
      if (!gt && (Xo(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          Ue(n, t, a);
        }
      ur(e, t, n);
      break;
    case 21:
      ur(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((gt = (r = gt) || n.memoizedState !== null), ur(e, t, n), (gt = r))
        : ur(e, t, n);
      break;
    default:
      ur(e, t, n);
  }
}
function Ym(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new PS()),
      t.forEach(function (r) {
        var o = LS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function gn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (it = a.stateNode), (yn = !1);
              break e;
            case 3:
              (it = a.stateNode.containerInfo), (yn = !0);
              break e;
            case 4:
              (it = a.stateNode.containerInfo), (yn = !0);
              break e;
          }
          a = a.return;
        }
        if (it === null) throw Error(B(160));
        e1(i, s, o), (it = null), (yn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (c) {
        Ue(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) t1(t, e), (t = t.sibling);
}
function t1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((gn(t, e), Rn(e), r & 4)) {
        try {
          ys(3, e, e.return), Cc(3, e);
        } catch (v) {
          Ue(e, e.return, v);
        }
        try {
          ys(5, e, e.return);
        } catch (v) {
          Ue(e, e.return, v);
        }
      }
      break;
    case 1:
      gn(t, e), Rn(e), r & 512 && n !== null && Xo(n, n.return);
      break;
    case 5:
      if ((gn(t, e), Rn(e), r & 512 && n !== null && Xo(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          Rs(o, '');
        } catch (v) {
          Ue(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && w0(o, i), wd(a, s);
            var c = wd(a, i);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                d = l[s + 1];
              u === 'style'
                ? T0(o, d)
                : u === 'dangerouslySetInnerHTML'
                  ? $0(o, d)
                  : u === 'children'
                    ? Rs(o, d)
                    : Hf(o, u, d, c);
            }
            switch (a) {
              case 'input':
                yd(o, i);
                break;
              case 'textarea':
                k0(o, i);
                break;
              case 'select':
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? ti(o, !!i.multiple, m, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ti(o, !!i.multiple, i.defaultValue, !0)
                      : ti(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Ds] = i;
          } catch (v) {
            Ue(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((gn(t, e), Rn(e), r & 4)) {
        if (e.stateNode === null) throw Error(B(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          Ue(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((gn(t, e), Rn(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          _s(t.containerInfo);
        } catch (v) {
          Ue(e, e.return, v);
        }
      break;
    case 4:
      gn(t, e), Rn(e);
      break;
    case 13:
      gn(t, e),
        Rn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (kp = Ge())),
        r & 4 && Ym(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((gt = (c = gt) || u), gn(t, e), (gt = c)) : gn(t, e),
        Rn(e),
        r & 8192)
      ) {
        if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !u && e.mode & 1))
          for (G = e, u = e.child; u !== null; ) {
            for (d = G = u; G !== null; ) {
              switch (((p = G), (m = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ys(4, p, p.return);
                  break;
                case 1:
                  Xo(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (v) {
                      Ue(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Xo(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    qm(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = p), (G = m)) : qm(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (o = d.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s = l != null && l.hasOwnProperty('display') ? l.display : null),
                      (a.style.display = P0('display', s)));
              } catch (v) {
                Ue(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? '' : d.memoizedProps;
              } catch (v) {
                Ue(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      gn(t, e), Rn(e), r & 4 && Ym(e);
      break;
    case 21:
      break;
    default:
      gn(t, e), Rn(e);
  }
}
function Rn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Rs(o, ''), (r.flags &= -33));
          var i = Km(e);
          Jd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Km(e);
          Zd(e, a, s);
          break;
        default:
          throw Error(B(161));
      }
    } catch (l) {
      Ue(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function RS(e, t, n) {
  (G = e), n1(e);
}
function n1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var o = G,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ja;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || gt;
        a = ja;
        var c = gt;
        if (((ja = s), (gt = l) && !c))
          for (G = o; G !== null; )
            (s = G),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Qm(o)
                : l !== null
                  ? ((l.return = s), (G = l))
                  : Qm(o);
        for (; i !== null; ) (G = i), n1(i), (i = i.sibling);
        (G = o), (ja = a), (gt = c);
      }
      Xm(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (G = i)) : Xm(e);
  }
}
function Xm(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              gt || Cc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !gt)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : vn(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && _m(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _m(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && _s(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(B(163));
          }
        gt || (t.flags & 512 && Qd(t));
      } catch (p) {
        Ue(t, t.return, p);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function qm(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function Qm(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cc(4, t);
          } catch (l) {
            Ue(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ue(t, o, l);
            }
          }
          var i = t.return;
          try {
            Qd(t);
          } catch (l) {
            Ue(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Qd(t);
          } catch (l) {
            Ue(t, s, l);
          }
      }
    } catch (l) {
      Ue(t, t.return, l);
    }
    if (t === e) {
      G = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (G = a);
      break;
    }
    G = t.return;
  }
}
var OS = Math.ceil,
  Vl = ar.ReactCurrentDispatcher,
  Sp = ar.ReactCurrentOwner,
  on = ar.ReactCurrentBatchConfig,
  me = 0,
  nt = null,
  qe = null,
  at = 0,
  Bt = 0,
  qo = Lr(0),
  Ze = 0,
  Vs = null,
  co = 0,
  Sc = 0,
  wp = 0,
  xs = null,
  Tt = null,
  kp = 0,
  vi = 1 / 0,
  Gn = null,
  Hl = !1,
  ef = null,
  Pr = null,
  Na = !1,
  br = null,
  Gl = 0,
  bs = 0,
  tf = null,
  cl = -1,
  ul = 0;
function wt() {
  return me & 6 ? Ge() : cl !== -1 ? cl : (cl = Ge());
}
function Tr(e) {
  return e.mode & 1
    ? me & 2 && at !== 0
      ? at & -at
      : pS.transition !== null
        ? (ul === 0 && (ul = F0()), ul)
        : ((e = Se), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : K0(e.type))), e)
    : 1;
}
function wn(e, t, n, r) {
  if (50 < bs) throw ((bs = 0), (tf = null), Error(B(185)));
  oa(e, n, r),
    (!(me & 2) || e !== nt) &&
      (e === nt && (!(me & 2) && (Sc |= n), Ze === 4 && yr(e, at)),
      At(e, r),
      n === 1 && me === 0 && !(t.mode & 1) && ((vi = Ge() + 500), yc && Dr()));
}
function At(e, t) {
  var n = e.callbackNode;
  pC(e, t);
  var r = Rl(e, e === nt ? at : 0);
  if (r === 0) n !== null && sm(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && sm(n), t === 1))
      e.tag === 0 ? fS(Zm.bind(null, e)) : fy(Zm.bind(null, e)),
        lS(function () {
          !(me & 6) && Dr();
        }),
        (n = null);
    else {
      switch (B0(r)) {
        case 1:
          n = qf;
          break;
        case 4:
          n = D0;
          break;
        case 16:
          n = Tl;
          break;
        case 536870912:
          n = z0;
          break;
        default:
          n = Tl;
      }
      n = u1(n, r1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function r1(e, t) {
  if (((cl = -1), (ul = 0), me & 6)) throw Error(B(327));
  var n = e.callbackNode;
  if (si() && e.callbackNode !== n) return null;
  var r = Rl(e, e === nt ? at : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Kl(e, r);
  else {
    t = r;
    var o = me;
    me |= 2;
    var i = i1();
    (nt !== e || at !== t) && ((Gn = null), (vi = Ge() + 500), no(e, t));
    do
      try {
        _S();
        break;
      } catch (a) {
        o1(e, a);
      }
    while (!0);
    cp(), (Vl.current = i), (me = o), qe !== null ? (t = 0) : ((nt = null), (at = 0), (t = Ze));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Td(e)), o !== 0 && ((r = o), (t = nf(e, o)))), t === 1))
      throw ((n = Vs), no(e, 0), yr(e, r), At(e, Ge()), n);
    if (t === 6) yr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !MS(o) &&
          ((t = Kl(e, r)), t === 2 && ((i = Td(e)), i !== 0 && ((r = i), (t = nf(e, i)))), t === 1))
      )
        throw ((n = Vs), no(e, 0), yr(e, r), At(e, Ge()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          Gr(e, Tt, Gn);
          break;
        case 3:
          if ((yr(e, r), (r & 130023424) === r && ((t = kp + 500 - Ge()), 10 < t))) {
            if (Rl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              wt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Nd(Gr.bind(null, e, Tt, Gn), t);
            break;
          }
          Gr(e, Tt, Gn);
          break;
        case 4:
          if ((yr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Sn(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ge() - r),
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
                          : 1960 * OS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Nd(Gr.bind(null, e, Tt, Gn), r);
            break;
          }
          Gr(e, Tt, Gn);
          break;
        case 5:
          Gr(e, Tt, Gn);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return At(e, Ge()), e.callbackNode === n ? r1.bind(null, e) : null;
}
function nf(e, t) {
  var n = xs;
  return (
    e.current.memoizedState.isDehydrated && (no(e, t).flags |= 256),
    (e = Kl(e, t)),
    e !== 2 && ((t = Tt), (Tt = n), t !== null && rf(t)),
    e
  );
}
function rf(e) {
  Tt === null ? (Tt = e) : Tt.push.apply(Tt, e);
}
function MS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!En(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function yr(e, t) {
  for (
    t &= ~wp, t &= ~Sc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Sn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Zm(e) {
  if (me & 6) throw Error(B(327));
  si();
  var t = Rl(e, 0);
  if (!(t & 1)) return At(e, Ge()), null;
  var n = Kl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Td(e);
    r !== 0 && ((t = r), (n = nf(e, r)));
  }
  if (n === 1) throw ((n = Vs), no(e, 0), yr(e, t), At(e, Ge()), n);
  if (n === 6) throw Error(B(345));
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Gr(e, Tt, Gn), At(e, Ge()), null
  );
}
function Ep(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    (me = n), me === 0 && ((vi = Ge() + 500), yc && Dr());
  }
}
function uo(e) {
  br !== null && br.tag === 0 && !(me & 6) && si();
  var t = me;
  me |= 1;
  var n = on.transition,
    r = Se;
  try {
    if (((on.transition = null), (Se = 1), e)) return e();
  } finally {
    (Se = r), (on.transition = n), (me = t), !(me & 6) && Dr();
  }
}
function $p() {
  (Bt = qo.current), _e(qo);
}
function no(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), aS(n)), qe !== null))
    for (n = qe.return; n !== null; ) {
      var r = n;
      switch ((sp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Il();
          break;
        case 3:
          mi(), _e(Ot), _e(vt), mp();
          break;
        case 5:
          hp(r);
          break;
        case 4:
          mi();
          break;
        case 13:
          _e(De);
          break;
        case 19:
          _e(De);
          break;
        case 10:
          up(r.type._context);
          break;
        case 22:
        case 23:
          $p();
      }
      n = n.return;
    }
  if (
    ((nt = e),
    (qe = e = Rr(e.current, null)),
    (at = Bt = t),
    (Ze = 0),
    (Vs = null),
    (wp = Sc = co = 0),
    (Tt = xs = null),
    Qr !== null)
  ) {
    for (t = 0; t < Qr.length; t++)
      if (((n = Qr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Qr = null;
  }
  return e;
}
function o1(e, t) {
  do {
    var n = qe;
    try {
      if ((cp(), (sl.current = Ul), Wl)) {
        for (var r = ze.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Wl = !1;
      }
      if (
        ((lo = 0),
        (et = Qe = ze = null),
        (vs = !1),
        (Bs = 0),
        (Sp.current = null),
        n === null || n.return === null)
      ) {
        (Ze = 1), (Vs = t), (qe = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = at),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = u.alternate;
            p
              ? ((u.updateQueue = p.updateQueue),
                (u.memoizedState = p.memoizedState),
                (u.lanes = p.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var m = zm(s);
          if (m !== null) {
            (m.flags &= -257), Fm(m, s, a, i, t), m.mode & 1 && Dm(i, c, t), (t = m), (l = c);
            var x = t.updateQueue;
            if (x === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Dm(i, c, t), Pp();
              break e;
            }
            l = Error(B(426));
          }
        } else if (Ne && a.mode & 1) {
          var w = zm(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), Fm(w, s, a, i, t), ap(gi(l, a));
            break e;
          }
        }
        (i = l = gi(l, a)), Ze !== 4 && (Ze = 2), xs === null ? (xs = [i]) : xs.push(i), (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = By(i, l, t);
              Am(i, h);
              break e;
            case 1:
              a = l;
              var y = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof y.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (Pr === null || !Pr.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = Wy(i, a, t);
                Am(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      a1(n);
    } catch ($) {
      (t = $), qe === n && n !== null && (qe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function i1() {
  var e = Vl.current;
  return (Vl.current = Ul), e === null ? Ul : e;
}
function Pp() {
  (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4),
    nt === null || (!(co & 268435455) && !(Sc & 268435455)) || yr(nt, at);
}
function Kl(e, t) {
  var n = me;
  me |= 2;
  var r = i1();
  (nt !== e || at !== t) && ((Gn = null), no(e, t));
  do
    try {
      AS();
      break;
    } catch (o) {
      o1(e, o);
    }
  while (!0);
  if ((cp(), (me = n), (Vl.current = r), qe !== null)) throw Error(B(261));
  return (nt = null), (at = 0), Ze;
}
function AS() {
  for (; qe !== null; ) s1(qe);
}
function _S() {
  for (; qe !== null && !oC(); ) s1(qe);
}
function s1(e) {
  var t = c1(e.alternate, e, Bt);
  (e.memoizedProps = e.pendingProps), t === null ? a1(e) : (qe = t), (Sp.current = null);
}
function a1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $S(n, t)), n !== null)) {
        (n.flags &= 32767), (qe = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ze = 6), (qe = null);
        return;
      }
    } else if (((n = ES(n, t, Bt)), n !== null)) {
      qe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      qe = t;
      return;
    }
    qe = t = e;
  } while (t !== null);
  Ze === 0 && (Ze = 5);
}
function Gr(e, t, n) {
  var r = Se,
    o = on.transition;
  try {
    (on.transition = null), (Se = 1), IS(e, t, n, r);
  } finally {
    (on.transition = o), (Se = r);
  }
  return null;
}
function IS(e, t, n, r) {
  do si();
  while (br !== null);
  if (me & 6) throw Error(B(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(B(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (hC(e, i),
    e === nt && ((qe = nt = null), (at = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Na ||
      ((Na = !0),
      u1(Tl, function () {
        return si(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = on.transition), (on.transition = null);
    var s = Se;
    Se = 1;
    var a = me;
    (me |= 4),
      (Sp.current = null),
      TS(e, n),
      t1(n, e),
      eS(Id),
      (Ol = !!_d),
      (Id = _d = null),
      (e.current = n),
      RS(n),
      iC(),
      (me = a),
      (Se = s),
      (on.transition = i);
  } else e.current = n;
  if (
    (Na && ((Na = !1), (br = e), (Gl = o)),
    (i = e.pendingLanes),
    i === 0 && (Pr = null),
    lC(n.stateNode),
    At(e, Ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Hl) throw ((Hl = !1), (e = ef), (ef = null), e);
  return (
    Gl & 1 && e.tag !== 0 && si(),
    (i = e.pendingLanes),
    i & 1 ? (e === tf ? bs++ : ((bs = 0), (tf = e))) : (bs = 0),
    Dr(),
    null
  );
}
function si() {
  if (br !== null) {
    var e = B0(Gl),
      t = on.transition,
      n = Se;
    try {
      if (((on.transition = null), (Se = 16 > e ? 16 : e), br === null)) var r = !1;
      else {
        if (((e = br), (br = null), (Gl = 0), me & 6)) throw Error(B(331));
        var o = me;
        for (me |= 4, G = e.current; G !== null; ) {
          var i = G,
            s = i.child;
          if (G.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (G = c; G !== null; ) {
                  var u = G;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ys(8, u, i);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (G = d);
                  else
                    for (; G !== null; ) {
                      u = G;
                      var p = u.sibling,
                        m = u.return;
                      if ((Zy(u), u === c)) {
                        G = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = m), (G = p);
                        break;
                      }
                      G = m;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var v = x.child;
                if (v !== null) {
                  x.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              G = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (G = s);
          else
            e: for (; G !== null; ) {
              if (((i = G), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ys(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (G = h);
                break e;
              }
              G = i.return;
            }
        }
        var y = e.current;
        for (G = y; G !== null; ) {
          s = G;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (G = g);
          else
            e: for (s = y; G !== null; ) {
              if (((a = G), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cc(9, a);
                  }
                } catch ($) {
                  Ue(a, a.return, $);
                }
              if (a === s) {
                G = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (G = k);
                break e;
              }
              G = a.return;
            }
        }
        if (((me = o), Dr(), Nn && typeof Nn.onPostCommitFiberRoot == 'function'))
          try {
            Nn.onPostCommitFiberRoot(pc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Se = n), (on.transition = t);
    }
  }
  return !1;
}
function Jm(e, t, n) {
  (t = gi(n, t)),
    (t = By(e, t, 1)),
    (e = $r(e, t, 1)),
    (t = wt()),
    e !== null && (oa(e, 1, t), At(e, t));
}
function Ue(e, t, n) {
  if (e.tag === 3) Jm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Pr === null || !Pr.has(r)))
        ) {
          (e = gi(n, e)),
            (e = Wy(t, e, 1)),
            (t = $r(t, e, 1)),
            (e = wt()),
            t !== null && (oa(t, 1, e), At(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = wt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    nt === e &&
      (at & n) === n &&
      (Ze === 4 || (Ze === 3 && (at & 130023424) === at && 500 > Ge() - kp) ? no(e, 0) : (wp |= n)),
    At(e, t);
}
function l1(e, t) {
  t === 0 && (e.mode & 1 ? ((t = $a), ($a <<= 1), !($a & 130023424) && ($a = 4194304)) : (t = 1));
  var n = wt();
  (e = nr(e, t)), e !== null && (oa(e, t, n), At(e, n));
}
function NS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), l1(e, n);
}
function LS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(B(314));
  }
  r !== null && r.delete(t), l1(e, n);
}
var c1;
c1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ot.current) Rt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Rt = !1), kS(e, t, n);
      Rt = !!(e.flags & 131072);
    }
  else (Rt = !1), Ne && t.flags & 1048576 && py(t, Ll, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ll(e, t), (e = t.pendingProps);
      var o = fi(t, vt.current);
      ii(t, n), (o = vp(null, t, r, e, o, n));
      var i = yp();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Mt(r) ? ((i = !0), jl(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            fp(t),
            (o.updater = bc),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ud(t, r, e, n),
            (t = Gd(null, t, r, !0, i, n)))
          : ((t.tag = 0), Ne && i && ip(t), bt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ll(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = zS(r)),
          (e = vn(r, e)),
          o)
        ) {
          case 0:
            t = Hd(null, t, r, e, n);
            break e;
          case 1:
            t = Um(null, t, r, e, n);
            break e;
          case 11:
            t = Bm(null, t, r, e, n);
            break e;
          case 14:
            t = Wm(null, t, r, vn(r.type, e), n);
            break e;
        }
        throw Error(B(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vn(r, o)),
        Hd(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vn(r, o)),
        Um(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Gy(t), e === null)) throw Error(B(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), xy(e, t), Fl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = gi(Error(B(423)), t)), (t = Vm(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = gi(Error(B(424)), t)), (t = Vm(e, t, r, n, o));
            break e;
          } else
            for (
              Ut = Er(t.stateNode.containerInfo.firstChild),
                Vt = t,
                Ne = !0,
                xn = null,
                n = vy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pi(), r === o)) {
            t = rr(e, t, n);
            break e;
          }
          bt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        by(t),
        e === null && Fd(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        jd(r, o) ? (s = null) : i !== null && jd(r, i) && (t.flags |= 32),
        Hy(e, t),
        bt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Fd(t), null;
    case 13:
      return Ky(e, t, n);
    case 4:
      return (
        pp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hi(t, null, r, n)) : bt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vn(r, o)),
        Bm(e, t, r, o, n)
      );
    case 7:
      return bt(e, t, t.pendingProps, n), t.child;
    case 8:
      return bt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return bt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Re(Dl, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (En(i.value, s)) {
            if (i.children === o.children && !Ot.current) {
              t = rr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Zn(-1, n & -n)), (l.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Bd(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(B(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Bd(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        bt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ii(t, n),
        (o = an(o)),
        (r = r(o)),
        (t.flags |= 1),
        bt(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = vn(r, t.pendingProps)), (o = vn(r.type, o)), Wm(e, t, r, o, n);
    case 15:
      return Uy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vn(r, o)),
        ll(e, t),
        (t.tag = 1),
        Mt(r) ? ((e = !0), jl(t)) : (e = !1),
        ii(t, n),
        Fy(t, r, o),
        Ud(t, r, o, n),
        Gd(null, t, r, !0, e, n)
      );
    case 19:
      return Yy(e, t, n);
    case 22:
      return Vy(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function u1(e, t) {
  return L0(e, t);
}
function DS(e, t, n, r) {
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
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rn(e, t, n, r) {
  return new DS(e, t, n, r);
}
function Tp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zS(e) {
  if (typeof e == 'function') return Tp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Kf)) return 11;
    if (e === Yf) return 14;
  }
  return 2;
}
function Rr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function dl(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == 'function')) Tp(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case Fo:
        return ro(n.children, o, i, t);
      case Gf:
        (s = 8), (o |= 8);
        break;
      case pd:
        return (e = rn(12, n, t, o | 2)), (e.elementType = pd), (e.lanes = i), e;
      case hd:
        return (e = rn(13, n, t, o)), (e.elementType = hd), (e.lanes = i), e;
      case md:
        return (e = rn(19, n, t, o)), (e.elementType = md), (e.lanes = i), e;
      case b0:
        return wc(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case y0:
              s = 10;
              break e;
            case x0:
              s = 9;
              break e;
            case Kf:
              s = 11;
              break e;
            case Yf:
              s = 14;
              break e;
            case mr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(B(130, e == null ? e : typeof e, ''));
    }
  return (t = rn(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function ro(e, t, n, r) {
  return (e = rn(7, e, r, t)), (e.lanes = n), e;
}
function wc(e, t, n, r) {
  return (
    (e = rn(22, e, r, t)), (e.elementType = b0), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
  );
}
function Du(e, t, n) {
  return (e = rn(6, e, null, t)), (e.lanes = n), e;
}
function zu(e, t, n) {
  return (
    (t = rn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function FS(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xu(0)),
    (this.expirationTimes = xu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Rp(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new FS(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = rn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fp(i),
    e
  );
}
function BS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zo,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function d1(e) {
  if (!e) return Ar;
  e = e._reactInternals;
  e: {
    if (xo(e) !== e || e.tag !== 1) throw Error(B(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Mt(n)) return dy(e, n, t);
  }
  return t;
}
function f1(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Rp(n, r, !0, e, o, i, s, a, l)),
    (e.context = d1(null)),
    (n = e.current),
    (r = wt()),
    (o = Tr(n)),
    (i = Zn(r, o)),
    (i.callback = t ?? null),
    $r(n, i, o),
    (e.current.lanes = o),
    oa(e, o, r),
    At(e, r),
    e
  );
}
function kc(e, t, n, r) {
  var o = t.current,
    i = wt(),
    s = Tr(o);
  return (
    (n = d1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Zn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $r(o, t, s)),
    e !== null && (wn(e, o, s, i), il(e, o, s)),
    s
  );
}
function Yl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function eg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Op(e, t) {
  eg(e, t), (e = e.alternate) && eg(e, t);
}
function WS() {
  return null;
}
var p1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Mp(e) {
  this._internalRoot = e;
}
Ec.prototype.render = Mp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(B(409));
  kc(e, t, null, null);
};
Ec.prototype.unmount = Mp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    uo(function () {
      kc(null, e, null, null);
    }),
      (t[tr] = null);
  }
};
function Ec(e) {
  this._internalRoot = e;
}
Ec.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = V0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vr.length && t !== 0 && t < vr[n].priority; n++);
    vr.splice(n, 0, e), n === 0 && G0(e);
  }
};
function Ap(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $c(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function tg() {}
function US(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var c = Yl(s);
        i.call(c);
      };
    }
    var s = f1(t, r, e, 0, null, !1, !1, '', tg);
    return (
      (e._reactRootContainer = s),
      (e[tr] = s.current),
      Ns(e.nodeType === 8 ? e.parentNode : e),
      uo(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var c = Yl(l);
      a.call(c);
    };
  }
  var l = Rp(e, 0, !1, null, null, !1, !1, '', tg);
  return (
    (e._reactRootContainer = l),
    (e[tr] = l.current),
    Ns(e.nodeType === 8 ? e.parentNode : e),
    uo(function () {
      kc(t, l, n, r);
    }),
    l
  );
}
function Pc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == 'function') {
      var a = o;
      o = function () {
        var l = Yl(s);
        a.call(l);
      };
    }
    kc(t, s, e, o);
  } else s = US(n, t, e, o, r);
  return Yl(s);
}
W0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ls(t.pendingLanes);
        n !== 0 && (Qf(t, n | 1), At(t, Ge()), !(me & 6) && ((vi = Ge() + 500), Dr()));
      }
      break;
    case 13:
      uo(function () {
        var r = nr(e, 1);
        if (r !== null) {
          var o = wt();
          wn(r, e, 1, o);
        }
      }),
        Op(e, 1);
  }
};
Zf = function (e) {
  if (e.tag === 13) {
    var t = nr(e, 134217728);
    if (t !== null) {
      var n = wt();
      wn(t, e, 134217728, n);
    }
    Op(e, 134217728);
  }
};
U0 = function (e) {
  if (e.tag === 13) {
    var t = Tr(e),
      n = nr(e, t);
    if (n !== null) {
      var r = wt();
      wn(n, e, t, r);
    }
    Op(e, t);
  }
};
V0 = function () {
  return Se;
};
H0 = function (e, t) {
  var n = Se;
  try {
    return (Se = e), t();
  } finally {
    Se = n;
  }
};
Ed = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((yd(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = vc(r);
            if (!o) throw Error(B(90));
            S0(r), yd(r, o);
          }
        }
      }
      break;
    case 'textarea':
      k0(e, n);
      break;
    case 'select':
      (t = n.value), t != null && ti(e, !!n.multiple, t, !1);
  }
};
M0 = Ep;
A0 = uo;
var VS = { usingClientEntryPoint: !1, Events: [sa, Vo, vc, R0, O0, Ep] },
  Ki = {
    findFiberByHostInstance: qr,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  HS = {
    bundleType: Ki.bundleType,
    version: Ki.version,
    rendererPackageName: Ki.rendererPackageName,
    rendererConfig: Ki.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ar.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = j0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ki.findFiberByHostInstance || WS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var La = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!La.isDisabled && La.supportsFiber)
    try {
      (pc = La.inject(HS)), (Nn = La);
    } catch {}
}
Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VS;
Yt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ap(t)) throw Error(B(200));
  return BS(e, t, null, n);
};
Yt.createRoot = function (e, t) {
  if (!Ap(e)) throw Error(B(299));
  var n = !1,
    r = '',
    o = p1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Rp(e, 1, !1, null, null, n, !1, r, o)),
    (e[tr] = t.current),
    Ns(e.nodeType === 8 ? e.parentNode : e),
    new Mp(t)
  );
};
Yt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(B(188))
      : ((e = Object.keys(e).join(',')), Error(B(268, e)));
  return (e = j0(t)), (e = e === null ? null : e.stateNode), e;
};
Yt.flushSync = function (e) {
  return uo(e);
};
Yt.hydrate = function (e, t, n) {
  if (!$c(t)) throw Error(B(200));
  return Pc(null, e, t, !0, n);
};
Yt.hydrateRoot = function (e, t, n) {
  if (!Ap(e)) throw Error(B(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = p1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = f1(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[tr] = t.current),
    Ns(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ec(t);
};
Yt.render = function (e, t, n) {
  if (!$c(t)) throw Error(B(200));
  return Pc(null, e, t, !1, n);
};
Yt.unmountComponentAtNode = function (e) {
  if (!$c(e)) throw Error(B(40));
  return e._reactRootContainer
    ? (uo(function () {
        Pc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[tr] = null);
        });
      }),
      !0)
    : !1;
};
Yt.unstable_batchedUpdates = Ep;
Yt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$c(n)) throw Error(B(200));
  if (e == null || e._reactInternals === void 0) throw Error(B(38));
  return Pc(e, t, n, !1, r);
};
Yt.version = '18.3.1-next-f1338f8080-20240426';
function h1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h1);
    } catch (e) {
      console.error(e);
    }
}
h1(), (h0.exports = Yt);
var _p = h0.exports;
const Da = Ir(_p);
var ng = _p;
(dd.createRoot = ng.createRoot), (dd.hydrateRoot = ng.hydrateRoot);
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hs() {
  return (
    (Hs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hs.apply(this, arguments)
  );
}
var Jr;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Jr || (Jr = {}));
const rg = 'popstate';
function GS(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return of(
      '',
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Xl(o);
  }
  return YS(t, n, null, e);
}
function lt(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function m1(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function KS() {
  return Math.random().toString(36).substr(2, 8);
}
function og(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function of(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Hs(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? la(t) : t,
      { state: n, key: (t && t.key) || r || KS() }
    )
  );
}
function Xl(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function la(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function YS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = Jr.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), s.replaceState(Hs({}, s.state, { idx: c }), ''));
  function u() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = Jr.Pop;
    let w = u(),
      h = w == null ? null : w - c;
    (c = w), l && l({ action: a, location: v.location, delta: h });
  }
  function p(w, h) {
    a = Jr.Push;
    let y = of(v.location, w, h);
    c = u() + 1;
    let g = og(y, c),
      k = v.createHref(y);
    try {
      s.pushState(g, '', k);
    } catch ($) {
      if ($ instanceof DOMException && $.name === 'DataCloneError') throw $;
      o.location.assign(k);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function m(w, h) {
    a = Jr.Replace;
    let y = of(v.location, w, h);
    c = u();
    let g = og(y, c),
      k = v.createHref(y);
    s.replaceState(g, '', k), i && l && l({ action: a, location: v.location, delta: 0 });
  }
  function x(w) {
    let h = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      y = typeof w == 'string' ? w : Xl(w);
    return (
      (y = y.replace(/ $/, '%20')),
      lt(h, 'No window.location.(origin|href) available to create URL for href: ' + y),
      new URL(y, h)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(rg, d),
        (l = w),
        () => {
          o.removeEventListener(rg, d), (l = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: x,
    encodeLocation(w) {
      let h = x(w);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: m,
    go(w) {
      return s.go(w);
    },
  };
  return v;
}
var ig;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(ig || (ig = {}));
function XS(e, t, n) {
  return n === void 0 && (n = '/'), qS(e, t, n, !1);
}
function qS(e, t, n, r) {
  let o = typeof t == 'string' ? la(t) : t,
    i = Ip(o.pathname || '/', n);
  if (i == null) return null;
  let s = g1(e);
  QS(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = lw(i);
    a = sw(s[l], c, r);
  }
  return a;
}
function g1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || '' : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith('/') &&
      (lt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let c = Or([r, l.relativePath]),
      u = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (lt(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + c + '".')
      ),
      g1(i.children, t, u, c)),
      !(i.path == null && !i.index) && t.push({ path: c, score: ow(c, i.index), routesMeta: u });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) o(i, s);
      else for (let l of v1(i.path)) o(i, s, l);
    }),
    t
  );
}
function v1(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let s = v1(r.join('/')),
    a = [];
  return (
    a.push(...s.map((l) => (l === '' ? i : [i, l].join('/')))),
    o && a.push(...s),
    a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function QS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : iw(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ZS = /^:[\w-]+$/,
  JS = 3,
  ew = 2,
  tw = 1,
  nw = 10,
  rw = -2,
  sg = (e) => e === '*';
function ow(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(sg) && (r += rw),
    t && (r += ew),
    n.filter((o) => !sg(o)).reduce((o, i) => o + (ZS.test(i) ? JS : i === '' ? tw : nw), r)
  );
}
function iw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function sw(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = '/',
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      c = a === r.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      d = ag({ path: l.relativePath, caseSensitive: l.caseSensitive, end: c }, u),
      p = l.route;
    if (
      (!d &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (d = ag({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, u)),
      !d)
    )
      return null;
    Object.assign(o, d.params),
      s.push({
        params: o,
        pathname: Or([i, d.pathname]),
        pathnameBase: fw(Or([i, d.pathnameBase])),
        route: p,
      }),
      d.pathnameBase !== '/' && (i = Or([i, d.pathnameBase]));
  }
  return s;
}
function ag(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = aw(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, '$1'),
    a = o.slice(1);
  return {
    params: r.reduce((c, u, d) => {
      let { paramName: p, isOptional: m } = u;
      if (p === '*') {
        let v = a[d] || '';
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, '$1');
      }
      const x = a[d];
      return m && !x ? (c[p] = void 0) : (c[p] = (x || '').replace(/%2F/g, '/')), c;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function aw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    m1(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }), l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function lw(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      m1(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Ip(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function cw(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? la(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : uw(n, t)) : t, search: pw(r), hash: hw(o) };
}
function uw(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Fu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function dw(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function jp(e, t) {
  let n = dw(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Np(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = la(e))
    : ((o = Hs({}, e)),
      lt(!o.pathname || !o.pathname.includes('?'), Fu('?', 'pathname', 'search', o)),
      lt(!o.pathname || !o.pathname.includes('#'), Fu('#', 'pathname', 'hash', o)),
      lt(!o.search || !o.search.includes('#'), Fu('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    s = i ? '/' : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith('..')) {
      let p = s.split('/');
      for (; p[0] === '..'; ) p.shift(), (d -= 1);
      o.pathname = p.join('/');
    }
    a = d >= 0 ? t[d] : '/';
  }
  let l = cw(o, a),
    c = s && s !== '/' && s.endsWith('/'),
    u = (i || s === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (c || u) && (l.pathname += '/'), l;
}
const Or = (e) => e.join('/').replace(/\/\/+/g, '/'),
  fw = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  pw = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  hw = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function mw(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const y1 = ['post', 'put', 'patch', 'delete'];
new Set(y1);
const gw = ['get', ...y1];
new Set(gw);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ql() {
  return (
    (ql = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ql.apply(this, arguments)
  );
}
const Lp = b.createContext(null),
  vw = b.createContext(null),
  zr = b.createContext(null),
  Dp = b.createContext(null),
  lr = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  x1 = b.createContext(null);
function yw(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ri() || lt(!1);
  let { basename: r, navigator: o } = b.useContext(zr),
    { hash: i, pathname: s, search: a } = C1(e, { relative: n }),
    l = s;
  return (
    r !== '/' && (l = s === '/' ? r : Or([r, s])), o.createHref({ pathname: l, search: a, hash: i })
  );
}
function Ri() {
  return b.useContext(Dp) != null;
}
function bo() {
  return Ri() || lt(!1), b.useContext(Dp).location;
}
function b1(e) {
  b.useContext(zr).static || b.useLayoutEffect(e);
}
function zp() {
  let { isDataRoute: e } = b.useContext(lr);
  return e ? _w() : xw();
}
function xw() {
  Ri() || lt(!1);
  let e = b.useContext(Lp),
    { basename: t, future: n, navigator: r } = b.useContext(zr),
    { matches: o } = b.useContext(lr),
    { pathname: i } = bo(),
    s = JSON.stringify(jp(o, n.v7_relativeSplatPath)),
    a = b.useRef(!1);
  return (
    b1(() => {
      a.current = !0;
    }),
    b.useCallback(
      function (c, u) {
        if ((u === void 0 && (u = {}), !a.current)) return;
        if (typeof c == 'number') {
          r.go(c);
          return;
        }
        let d = Np(c, JSON.parse(s), i, u.relative === 'path');
        e == null && t !== '/' && (d.pathname = d.pathname === '/' ? t : Or([t, d.pathname])),
          (u.replace ? r.replace : r.push)(d, u.state, u);
      },
      [t, r, s, i, e]
    )
  );
}
const bw = b.createContext(null);
function Cw(e) {
  let t = b.useContext(lr).outlet;
  return t && b.createElement(bw.Provider, { value: e }, t);
}
function C1(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = b.useContext(zr),
    { matches: o } = b.useContext(lr),
    { pathname: i } = bo(),
    s = JSON.stringify(jp(o, r.v7_relativeSplatPath));
  return b.useMemo(() => Np(e, JSON.parse(s), i, n === 'path'), [e, s, i, n]);
}
function Sw(e, t) {
  return ww(e);
}
function ww(e, t, n, r) {
  Ri() || lt(!1);
  let { navigator: o } = b.useContext(zr),
    { matches: i } = b.useContext(lr),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : '/';
  s && s.route;
  let c = bo(),
    u;
  u = c;
  let d = u.pathname || '/',
    p = d;
  if (l !== '/') {
    let v = l.replace(/^\//, '').split('/');
    p = '/' + d.replace(/^\//, '').split('/').slice(v.length).join('/');
  }
  let m = XS(e, { pathname: p });
  return Tw(
    m &&
      m.map((v) =>
        Object.assign({}, v, {
          params: Object.assign({}, a, v.params),
          pathname: Or([l, o.encodeLocation ? o.encodeLocation(v.pathname).pathname : v.pathname]),
          pathnameBase:
            v.pathnameBase === '/'
              ? l
              : Or([
                  l,
                  o.encodeLocation ? o.encodeLocation(v.pathnameBase).pathname : v.pathnameBase,
                ]),
        })
      ),
    i,
    n,
    r
  );
}
function kw() {
  let e = Aw(),
    t = mw(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement('h2', null, 'Unexpected Application Error!'),
    b.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? b.createElement('pre', { style: o }, n) : null,
    null
  );
}
const Ew = b.createElement(kw, null);
class $w extends b.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          lr.Provider,
          { value: this.props.routeContext },
          b.createElement(x1.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function Pw(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = b.useContext(Lp);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(lr.Provider, { value: t }, r)
  );
}
function Tw(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let u = s.findIndex((d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
    u >= 0 || lt(!1), (s = s.slice(0, Math.min(s.length, u + 1)));
  }
  let l = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let u = 0; u < s.length; u++) {
      let d = s[u];
      if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u), d.route.id)) {
        let { loaderData: p, errors: m } = n,
          x = d.route.loader && p[d.route.id] === void 0 && (!m || m[d.route.id] === void 0);
        if (d.route.lazy || x) {
          (l = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((u, d, p) => {
    let m,
      x = !1,
      v = null,
      w = null;
    n &&
      ((m = a && d.route.id ? a[d.route.id] : void 0),
      (v = d.route.errorElement || Ew),
      l &&
        (c < 0 && p === 0
          ? (Iw('route-fallback'), (x = !0), (w = null))
          : c === p && ((x = !0), (w = d.route.hydrateFallbackElement || null))));
    let h = t.concat(s.slice(0, p + 1)),
      y = () => {
        let g;
        return (
          m
            ? (g = v)
            : x
              ? (g = w)
              : d.route.Component
                ? (g = b.createElement(d.route.Component, null))
                : d.route.element
                  ? (g = d.route.element)
                  : (g = u),
          b.createElement(Pw, {
            match: d,
            routeContext: { outlet: u, matches: h, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? b.createElement($w, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: m,
          children: y(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var S1 = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(S1 || {}),
  Ql = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Ql || {});
function Rw(e) {
  let t = b.useContext(Lp);
  return t || lt(!1), t;
}
function Ow(e) {
  let t = b.useContext(vw);
  return t || lt(!1), t;
}
function Mw(e) {
  let t = b.useContext(lr);
  return t || lt(!1), t;
}
function w1(e) {
  let t = Mw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || lt(!1), n.route.id;
}
function Aw() {
  var e;
  let t = b.useContext(x1),
    n = Ow(Ql.UseRouteError),
    r = w1(Ql.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function _w() {
  let { router: e } = Rw(S1.UseNavigateStable),
    t = w1(Ql.UseNavigateStable),
    n = b.useRef(!1);
  return (
    b1(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == 'number' ? e.navigate(o) : e.navigate(o, ql({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const lg = {};
function Iw(e, t, n) {
  lg[e] || (lg[e] = !0);
}
function jw(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Ri() || lt(!1);
  let { future: i, static: s } = b.useContext(zr),
    { matches: a } = b.useContext(lr),
    { pathname: l } = bo(),
    c = zp(),
    u = Np(t, jp(a, i.v7_relativeSplatPath), l, o === 'path'),
    d = JSON.stringify(u);
  return (
    b.useEffect(() => c(JSON.parse(d), { replace: n, state: r, relative: o }), [c, d, o, n, r]),
    null
  );
}
function Nw(e) {
  return Cw(e.context);
}
function Lw(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = Jr.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  Ri() && lt(!1);
  let l = t.replace(/^\/*/, '/'),
    c = b.useMemo(
      () => ({ basename: l, navigator: i, static: s, future: ql({ v7_relativeSplatPath: !1 }, a) }),
      [l, a, i, s]
    );
  typeof r == 'string' && (r = la(r));
  let { pathname: u = '/', search: d = '', hash: p = '', state: m = null, key: x = 'default' } = r,
    v = b.useMemo(() => {
      let w = Ip(u, l);
      return w == null
        ? null
        : { location: { pathname: w, search: d, hash: p, state: m, key: x }, navigationType: o };
    }, [l, u, d, p, m, x, o]);
  return v == null
    ? null
    : b.createElement(
        zr.Provider,
        { value: c },
        b.createElement(Dp.Provider, { children: n, value: v })
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sf() {
  return (
    (sf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sf.apply(this, arguments)
  );
}
function Dw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function zw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Fw(e, t) {
  return e.button === 0 && (!t || t === '_self') && !zw(e);
}
const Bw = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Ww = '6';
try {
  window.__reactRouterVersion = Ww;
} catch {}
const Uw = 'startTransition',
  cg = kl[Uw];
function Vw(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = b.useRef();
  i.current == null && (i.current = GS({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = b.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = r || {},
    u = b.useCallback(
      (d) => {
        c && cg ? cg(() => l(d)) : l(d);
      },
      [l, c]
    );
  return (
    b.useLayoutEffect(() => s.listen(u), [s, u]),
    b.createElement(Lw, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const Hw =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Gw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Kw = b.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: c,
        preventScrollReset: u,
        unstable_viewTransition: d,
      } = t,
      p = Dw(t, Bw),
      { basename: m } = b.useContext(zr),
      x,
      v = !1;
    if (typeof c == 'string' && Gw.test(c) && ((x = c), Hw))
      try {
        let g = new URL(window.location.href),
          k = c.startsWith('//') ? new URL(g.protocol + c) : new URL(c),
          $ = Ip(k.pathname, m);
        k.origin === g.origin && $ != null ? (c = $ + k.search + k.hash) : (v = !0);
      } catch {}
    let w = yw(c, { relative: o }),
      h = Yw(c, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: u,
        relative: o,
        unstable_viewTransition: d,
      });
    function y(g) {
      r && r(g), g.defaultPrevented || h(g);
    }
    return b.createElement(
      'a',
      sf({}, p, { href: x || w, onClick: v || i ? r : y, ref: n, target: l })
    );
  });
var ug;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(ug || (ug = {}));
var dg;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(dg || (dg = {}));
function Yw(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = zp(),
    c = bo(),
    u = C1(e, { relative: s });
  return b.useCallback(
    (d) => {
      if (Fw(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : Xl(c) === Xl(u);
        l(e, {
          replace: p,
          state: o,
          preventScrollReset: i,
          relative: s,
          unstable_viewTransition: a,
        });
      }
    },
    [c, l, u, r, o, n, e, i, s, a]
  );
}
var Xw = typeof Element < 'u',
  qw = typeof Map == 'function',
  Qw = typeof Set == 'function',
  Zw = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function fl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!fl(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (qw && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; ) if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!fl(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (Qw && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; ) if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (Zw && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == 'function' &&
      typeof t.valueOf == 'function'
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == 'function' &&
      typeof t.toString == 'function'
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (Xw && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !((o[r] === '_owner' || o[r] === '__v' || o[r] === '__o') && e.$$typeof) &&
        !fl(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Jw = function (t, n) {
  try {
    return fl(t, n);
  } catch (r) {
    if ((r.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1;
    throw r;
  }
};
const ek = Ir(Jw);
var tk = function (e, t, n, r, o, i, s, a) {
    if (!e) {
      var l;
      if (t === void 0)
        l = new Error(
          'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
        );
      else {
        var c = [n, r, o, i, s, a],
          u = 0;
        (l = new Error(
          t.replace(/%s/g, function () {
            return c[u++];
          })
        )),
          (l.name = 'Invariant Violation');
      }
      throw ((l.framesToPop = 1), l);
    }
  },
  nk = tk;
const fg = Ir(nk);
var rk = function (t, n, r, o) {
  var i = r ? r.call(o, t, n) : void 0;
  if (i !== void 0) return !!i;
  if (t === n) return !0;
  if (typeof t != 'object' || !t || typeof n != 'object' || !n) return !1;
  var s = Object.keys(t),
    a = Object.keys(n);
  if (s.length !== a.length) return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(n), c = 0; c < s.length; c++) {
    var u = s[c];
    if (!l(u)) return !1;
    var d = t[u],
      p = n[u];
    if (((i = r ? r.call(o, d, p, u) : void 0), i === !1 || (i === void 0 && d !== p))) return !1;
  }
  return !0;
};
const ok = Ir(rk);
var k1 = ((e) => (
    (e.BASE = 'base'),
    (e.BODY = 'body'),
    (e.HEAD = 'head'),
    (e.HTML = 'html'),
    (e.LINK = 'link'),
    (e.META = 'meta'),
    (e.NOSCRIPT = 'noscript'),
    (e.SCRIPT = 'script'),
    (e.STYLE = 'style'),
    (e.TITLE = 'title'),
    (e.FRAGMENT = 'Symbol(react.fragment)'),
    e
  ))(k1 || {}),
  Bu = {
    link: { rel: ['amphtml', 'canonical', 'alternate'] },
    script: { type: ['application/ld+json'] },
    meta: {
      charset: '',
      name: ['generator', 'robots', 'description'],
      property: [
        'og:type',
        'og:title',
        'og:url',
        'og:image',
        'og:image:alt',
        'og:description',
        'twitter:url',
        'twitter:title',
        'twitter:description',
        'twitter:image',
        'twitter:image:alt',
        'twitter:card',
        'twitter:site',
      ],
    },
  },
  pg = Object.values(k1),
  Fp = {
    accesskey: 'accessKey',
    charset: 'charSet',
    class: 'className',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    'http-equiv': 'httpEquiv',
    itemprop: 'itemProp',
    tabindex: 'tabIndex',
  },
  ik = Object.entries(Fp).reduce((e, [t, n]) => ((e[n] = t), e), {}),
  Cn = 'data-rh',
  ai = {
    DEFAULT_TITLE: 'defaultTitle',
    DEFER: 'defer',
    ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
    ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
    TITLE_TEMPLATE: 'titleTemplate',
    PRIORITIZE_SEO_TAGS: 'prioritizeSeoTags',
  },
  li = (e, t) => {
    for (let n = e.length - 1; n >= 0; n -= 1) {
      const r = e[n];
      if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
    }
    return null;
  },
  sk = (e) => {
    let t = li(e, 'title');
    const n = li(e, ai.TITLE_TEMPLATE);
    if ((Array.isArray(t) && (t = t.join('')), n && t)) return n.replace(/%s/g, () => t);
    const r = li(e, ai.DEFAULT_TITLE);
    return t || r || void 0;
  },
  ak = (e) => li(e, ai.ON_CHANGE_CLIENT_STATE) || (() => {}),
  Wu = (e, t) =>
    t
      .filter((n) => typeof n[e] < 'u')
      .map((n) => n[e])
      .reduce((n, r) => ({ ...n, ...r }), {}),
  lk = (e, t) =>
    t
      .filter((n) => typeof n.base < 'u')
      .map((n) => n.base)
      .reverse()
      .reduce((n, r) => {
        if (!n.length) {
          const o = Object.keys(r);
          for (let i = 0; i < o.length; i += 1) {
            const a = o[i].toLowerCase();
            if (e.indexOf(a) !== -1 && r[a]) return n.concat(r);
          }
        }
        return n;
      }, []),
  ck = (e) => console && typeof console.warn == 'function' && console.warn(e),
  Yi = (e, t, n) => {
    const r = {};
    return n
      .filter((o) =>
        Array.isArray(o[e])
          ? !0
          : (typeof o[e] < 'u' &&
              ck(`Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`),
            !1)
      )
      .map((o) => o[e])
      .reverse()
      .reduce((o, i) => {
        const s = {};
        i.filter((l) => {
          let c;
          const u = Object.keys(l);
          for (let p = 0; p < u.length; p += 1) {
            const m = u[p],
              x = m.toLowerCase();
            t.indexOf(x) !== -1 &&
              !(c === 'rel' && l[c].toLowerCase() === 'canonical') &&
              !(x === 'rel' && l[x].toLowerCase() === 'stylesheet') &&
              (c = x),
              t.indexOf(m) !== -1 &&
                (m === 'innerHTML' || m === 'cssText' || m === 'itemprop') &&
                (c = m);
          }
          if (!c || !l[c]) return !1;
          const d = l[c].toLowerCase();
          return r[c] || (r[c] = {}), s[c] || (s[c] = {}), r[c][d] ? !1 : ((s[c][d] = !0), !0);
        })
          .reverse()
          .forEach((l) => o.push(l));
        const a = Object.keys(s);
        for (let l = 0; l < a.length; l += 1) {
          const c = a[l],
            u = { ...r[c], ...s[c] };
          r[c] = u;
        }
        return o;
      }, [])
      .reverse();
  },
  uk = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
    }
    return !1;
  },
  dk = (e) => ({
    baseTag: lk(['href'], e),
    bodyAttributes: Wu('bodyAttributes', e),
    defer: li(e, ai.DEFER),
    encode: li(e, ai.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: Wu('htmlAttributes', e),
    linkTags: Yi('link', ['rel', 'href'], e),
    metaTags: Yi('meta', ['name', 'charset', 'http-equiv', 'property', 'itemprop'], e),
    noscriptTags: Yi('noscript', ['innerHTML'], e),
    onChangeClientState: ak(e),
    scriptTags: Yi('script', ['src', 'innerHTML'], e),
    styleTags: Yi('style', ['cssText'], e),
    title: sk(e),
    titleAttributes: Wu('titleAttributes', e),
    prioritizeSeoTags: uk(e, ai.PRIORITIZE_SEO_TAGS),
  }),
  E1 = (e) => (Array.isArray(e) ? e.join('') : e),
  fk = (e, t) => {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1) if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
    return !1;
  },
  Uu = (e, t) =>
    Array.isArray(e)
      ? e.reduce((n, r) => (fk(r, t) ? n.priority.push(r) : n.default.push(r), n), {
          priority: [],
          default: [],
        })
      : { default: e, priority: [] },
  hg = (e, t) => ({ ...e, [t]: void 0 }),
  pk = ['noscript', 'script', 'style'],
  af = (e, t = !0) =>
    t === !1
      ? String(e)
      : String(e)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;'),
  $1 = (e) =>
    Object.keys(e).reduce((t, n) => {
      const r = typeof e[n] < 'u' ? `${n}="${e[n]}"` : `${n}`;
      return t ? `${t} ${r}` : r;
    }, ''),
  hk = (e, t, n, r) => {
    const o = $1(n),
      i = E1(t);
    return o
      ? `<${e} ${Cn}="true" ${o}>${af(i, r)}</${e}>`
      : `<${e} ${Cn}="true">${af(i, r)}</${e}>`;
  },
  mk = (e, t, n = !0) =>
    t.reduce((r, o) => {
      const i = o,
        s = Object.keys(i)
          .filter((c) => !(c === 'innerHTML' || c === 'cssText'))
          .reduce((c, u) => {
            const d = typeof i[u] > 'u' ? u : `${u}="${af(i[u], n)}"`;
            return c ? `${c} ${d}` : d;
          }, ''),
        a = i.innerHTML || i.cssText || '',
        l = pk.indexOf(e) === -1;
      return `${r}<${e} ${Cn}="true" ${s}${l ? '/>' : `>${a}</${e}>`}`;
    }, ''),
  P1 = (e, t = {}) =>
    Object.keys(e).reduce((n, r) => {
      const o = Fp[r];
      return (n[o || r] = e[r]), n;
    }, t),
  gk = (e, t, n) => {
    const r = { key: t, [Cn]: !0 },
      o = P1(n, r);
    return [tt.createElement('title', o, t)];
  },
  pl = (e, t) =>
    t.map((n, r) => {
      const o = { key: r, [Cn]: !0 };
      return (
        Object.keys(n).forEach((i) => {
          const a = Fp[i] || i;
          if (a === 'innerHTML' || a === 'cssText') {
            const l = n.innerHTML || n.cssText;
            o.dangerouslySetInnerHTML = { __html: l };
          } else o[a] = n[i];
        }),
        tt.createElement(e, o)
      );
    }),
  Qt = (e, t, n = !0) => {
    switch (e) {
      case 'title':
        return {
          toComponent: () => gk(e, t.title, t.titleAttributes),
          toString: () => hk(e, t.title, t.titleAttributes, n),
        };
      case 'bodyAttributes':
      case 'htmlAttributes':
        return { toComponent: () => P1(t), toString: () => $1(t) };
      default:
        return { toComponent: () => pl(e, t), toString: () => mk(e, t, n) };
    }
  },
  vk = ({ metaTags: e, linkTags: t, scriptTags: n, encode: r }) => {
    const o = Uu(e, Bu.meta),
      i = Uu(t, Bu.link),
      s = Uu(n, Bu.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...pl('meta', o.priority),
          ...pl('link', i.priority),
          ...pl('script', s.priority),
        ],
        toString: () =>
          `${Qt('meta', o.priority, r)} ${Qt('link', i.priority, r)} ${Qt('script', s.priority, r)}`,
      },
      metaTags: o.default,
      linkTags: i.default,
      scriptTags: s.default,
    };
  },
  yk = (e) => {
    const {
      baseTag: t,
      bodyAttributes: n,
      encode: r = !0,
      htmlAttributes: o,
      noscriptTags: i,
      styleTags: s,
      title: a = '',
      titleAttributes: l,
      prioritizeSeoTags: c,
    } = e;
    let { linkTags: u, metaTags: d, scriptTags: p } = e,
      m = { toComponent: () => {}, toString: () => '' };
    return (
      c && ({ priorityMethods: m, linkTags: u, metaTags: d, scriptTags: p } = vk(e)),
      {
        priority: m,
        base: Qt('base', t, r),
        bodyAttributes: Qt('bodyAttributes', n, r),
        htmlAttributes: Qt('htmlAttributes', o, r),
        link: Qt('link', u, r),
        meta: Qt('meta', d, r),
        noscript: Qt('noscript', i, r),
        script: Qt('script', p, r),
        style: Qt('style', s, r),
        title: Qt('title', { title: a, titleAttributes: l }, r),
      }
    );
  },
  lf = yk,
  za = [],
  T1 = !!(typeof window < 'u' && window.document && window.document.createElement),
  cf = class {
    constructor(e, t) {
      Un(this, 'instances', []);
      Un(this, 'canUseDOM', T1);
      Un(this, 'context');
      Un(this, 'value', {
        setHelmet: (e) => {
          this.context.helmet = e;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? za : this.instances),
          add: (e) => {
            (this.canUseDOM ? za : this.instances).push(e);
          },
          remove: (e) => {
            const t = (this.canUseDOM ? za : this.instances).indexOf(e);
            (this.canUseDOM ? za : this.instances).splice(t, 1);
          },
        },
      });
      (this.context = e),
        (this.canUseDOM = t || !1),
        t ||
          (e.helmet = lf({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: '',
            titleAttributes: {},
          }));
    }
  },
  xk = {},
  R1 = tt.createContext(xk),
  to,
  O1 =
    ((to = class extends b.Component {
      constructor(n) {
        super(n);
        Un(this, 'helmetData');
        this.helmetData = new cf(this.props.context || {}, to.canUseDOM);
      }
      render() {
        return tt.createElement(R1.Provider, { value: this.helmetData.value }, this.props.children);
      }
    }),
    Un(to, 'canUseDOM', T1),
    to),
  Eo = (e, t) => {
    const n = document.head || document.querySelector('head'),
      r = n.querySelectorAll(`${e}[${Cn}]`),
      o = [].slice.call(r),
      i = [];
    let s;
    return (
      t &&
        t.length &&
        t.forEach((a) => {
          const l = document.createElement(e);
          for (const c in a)
            if (Object.prototype.hasOwnProperty.call(a, c))
              if (c === 'innerHTML') l.innerHTML = a.innerHTML;
              else if (c === 'cssText')
                l.styleSheet
                  ? (l.styleSheet.cssText = a.cssText)
                  : l.appendChild(document.createTextNode(a.cssText));
              else {
                const u = c,
                  d = typeof a[u] > 'u' ? '' : a[u];
                l.setAttribute(c, d);
              }
          l.setAttribute(Cn, 'true'),
            o.some((c, u) => ((s = u), l.isEqualNode(c))) ? o.splice(s, 1) : i.push(l);
        }),
      o.forEach((a) => {
        var l;
        return (l = a.parentNode) == null ? void 0 : l.removeChild(a);
      }),
      i.forEach((a) => n.appendChild(a)),
      { oldTags: o, newTags: i }
    );
  },
  uf = (e, t) => {
    const n = document.getElementsByTagName(e)[0];
    if (!n) return;
    const r = n.getAttribute(Cn),
      o = r ? r.split(',') : [],
      i = [...o],
      s = Object.keys(t);
    for (const a of s) {
      const l = t[a] || '';
      n.getAttribute(a) !== l && n.setAttribute(a, l), o.indexOf(a) === -1 && o.push(a);
      const c = i.indexOf(a);
      c !== -1 && i.splice(c, 1);
    }
    for (let a = i.length - 1; a >= 0; a -= 1) n.removeAttribute(i[a]);
    o.length === i.length
      ? n.removeAttribute(Cn)
      : n.getAttribute(Cn) !== s.join(',') && n.setAttribute(Cn, s.join(','));
  },
  bk = (e, t) => {
    typeof e < 'u' && document.title !== e && (document.title = E1(e)), uf('title', t);
  },
  mg = (e, t) => {
    const {
      baseTag: n,
      bodyAttributes: r,
      htmlAttributes: o,
      linkTags: i,
      metaTags: s,
      noscriptTags: a,
      onChangeClientState: l,
      scriptTags: c,
      styleTags: u,
      title: d,
      titleAttributes: p,
    } = e;
    uf('body', r), uf('html', o), bk(d, p);
    const m = {
        baseTag: Eo('base', n),
        linkTags: Eo('link', i),
        metaTags: Eo('meta', s),
        noscriptTags: Eo('noscript', a),
        scriptTags: Eo('script', c),
        styleTags: Eo('style', u),
      },
      x = {},
      v = {};
    Object.keys(m).forEach((w) => {
      const { newTags: h, oldTags: y } = m[w];
      h.length && (x[w] = h), y.length && (v[w] = m[w].oldTags);
    }),
      t && t(),
      l(e, x, v);
  },
  Xi = null,
  Ck = (e) => {
    Xi && cancelAnimationFrame(Xi),
      e.defer
        ? (Xi = requestAnimationFrame(() => {
            mg(e, () => {
              Xi = null;
            });
          }))
        : (mg(e), (Xi = null));
  },
  Sk = Ck,
  gg = class extends b.Component {
    constructor() {
      super(...arguments);
      Un(this, 'rendered', !1);
    }
    shouldComponentUpdate(t) {
      return !ok(t, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: t } = this.props.context;
      t.remove(this), this.emitChange();
    }
    emitChange() {
      const { helmetInstances: t, setHelmet: n } = this.props.context;
      let r = null;
      const o = dk(
        t.get().map((i) => {
          const s = { ...i.props };
          return delete s.context, s;
        })
      );
      O1.canUseDOM ? Sk(o) : lf && (r = lf(o)), n(r);
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: t } = this.props.context;
      t.add(this), this.emitChange();
    }
    render() {
      return this.init(), null;
    }
  },
  ud,
  b_ =
    ((ud = class extends b.Component {
      shouldComponentUpdate(e) {
        return !ek(hg(this.props, 'helmetData'), hg(e, 'helmetData'));
      }
      mapNestedChildrenToProps(e, t) {
        if (!t) return null;
        switch (e.type) {
          case 'script':
          case 'noscript':
            return { innerHTML: t };
          case 'style':
            return { cssText: t };
          default:
            throw new Error(
              `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
            );
        }
      }
      flattenArrayTypeChildren(e, t, n, r) {
        return {
          ...t,
          [e.type]: [...(t[e.type] || []), { ...n, ...this.mapNestedChildrenToProps(e, r) }],
        };
      }
      mapObjectTypeChildren(e, t, n, r) {
        switch (e.type) {
          case 'title':
            return { ...t, [e.type]: r, titleAttributes: { ...n } };
          case 'body':
            return { ...t, bodyAttributes: { ...n } };
          case 'html':
            return { ...t, htmlAttributes: { ...n } };
          default:
            return { ...t, [e.type]: { ...n } };
        }
      }
      mapArrayTypeChildrenToProps(e, t) {
        let n = { ...t };
        return (
          Object.keys(e).forEach((r) => {
            n = { ...n, [r]: e[r] };
          }),
          n
        );
      }
      warnOnInvalidChildren(e, t) {
        return (
          fg(
            pg.some((n) => e.type === n),
            typeof e.type == 'function'
              ? 'You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.'
              : `Only elements types ${pg.join(', ')} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`
          ),
          fg(
            !t ||
              typeof t == 'string' ||
              (Array.isArray(t) && !t.some((n) => typeof n != 'string')),
            `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
          ),
          !0
        );
      }
      mapChildrenToProps(e, t) {
        let n = {};
        return (
          tt.Children.forEach(e, (r) => {
            if (!r || !r.props) return;
            const { children: o, ...i } = r.props,
              s = Object.keys(i).reduce((l, c) => ((l[ik[c] || c] = i[c]), l), {});
            let { type: a } = r;
            switch (
              (typeof a == 'symbol' ? (a = a.toString()) : this.warnOnInvalidChildren(r, o), a)
            ) {
              case 'Symbol(react.fragment)':
                t = this.mapChildrenToProps(o, t);
                break;
              case 'link':
              case 'meta':
              case 'noscript':
              case 'script':
              case 'style':
                n = this.flattenArrayTypeChildren(r, n, s, o);
                break;
              default:
                t = this.mapObjectTypeChildren(r, t, s, o);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(n, t)
        );
      }
      render() {
        const { children: e, ...t } = this.props;
        let n = { ...t },
          { helmetData: r } = t;
        if ((e && (n = this.mapChildrenToProps(e, n)), r && !(r instanceof cf))) {
          const o = r;
          (r = new cf(o.context, !0)), delete n.helmetData;
        }
        return r
          ? tt.createElement(gg, { ...n, context: r.value })
          : tt.createElement(R1.Consumer, null, (o) => tt.createElement(gg, { ...n, context: o }));
      }
    }),
    Un(ud, 'defaultProps', { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }),
    ud);
function H(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function E() {
  return (
    (E = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    E.apply(null, arguments)
  );
}
function M1(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (n = M1(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function X() {
  for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = M1(e)) && (r && (r += ' '), (r += t));
  return r;
}
function ge(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== '' && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(' ');
    }),
    r
  );
}
var ca = {},
  A1 = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(A1);
var _1 = A1.exports,
  Vu = { exports: {} },
  vg;
function I1() {
  return (
    vg ||
      ((vg = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var i in o) ({}).hasOwnProperty.call(o, i) && (n[i] = o[i]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(null, arguments)
          );
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      })(Vu)),
    Vu.exports
  );
}
var Hu = { exports: {} },
  yg;
function wk() {
  return (
    yg ||
      ((yg = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {};
          for (var i in n)
            if ({}.hasOwnProperty.call(n, i)) {
              if (r.includes(i)) continue;
              o[i] = n[i];
            }
          return o;
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      })(Hu)),
    Hu.exports
  );
}
function j1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var kk =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Ek = j1(function (e) {
    return (
      kk.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    );
  }),
  $k = !1;
function Pk(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Tk(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var Rk = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
              ? (i = r.container.firstChild)
              : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !$k : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Tk(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Pk(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o;
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  ht = '-ms-',
  Zl = '-moz-',
  xe = '-webkit-',
  N1 = 'comm',
  Bp = 'rule',
  Wp = 'decl',
  Ok = '@import',
  L1 = '@keyframes',
  Mk = '@layer',
  Ak = Math.abs,
  Tc = String.fromCharCode,
  _k = Object.assign;
function Ik(e, t) {
  return st(e, 0) ^ 45
    ? (((((((t << 2) ^ st(e, 0)) << 2) ^ st(e, 1)) << 2) ^ st(e, 2)) << 2) ^ st(e, 3)
    : 0;
}
function D1(e) {
  return e.trim();
}
function jk(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function be(e, t, n) {
  return e.replace(t, n);
}
function df(e, t) {
  return e.indexOf(t);
}
function st(e, t) {
  return e.charCodeAt(t) | 0;
}
function Gs(e, t, n) {
  return e.slice(t, n);
}
function An(e) {
  return e.length;
}
function Up(e) {
  return e.length;
}
function Fa(e, t) {
  return t.push(e), e;
}
function Nk(e, t) {
  return e.map(t).join('');
}
var Rc = 1,
  yi = 1,
  z1 = 0,
  jt = 0,
  Xe = 0,
  Oi = '';
function Oc(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Rc,
    column: yi,
    length: s,
    return: '',
  };
}
function qi(e, t) {
  return _k(Oc('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function Lk() {
  return Xe;
}
function Dk() {
  return (Xe = jt > 0 ? st(Oi, --jt) : 0), yi--, Xe === 10 && ((yi = 1), Rc--), Xe;
}
function Ht() {
  return (Xe = jt < z1 ? st(Oi, jt++) : 0), yi++, Xe === 10 && ((yi = 1), Rc++), Xe;
}
function Dn() {
  return st(Oi, jt);
}
function hl() {
  return jt;
}
function ua(e, t) {
  return Gs(Oi, e, t);
}
function Ks(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function F1(e) {
  return (Rc = yi = 1), (z1 = An((Oi = e))), (jt = 0), [];
}
function B1(e) {
  return (Oi = ''), e;
}
function ml(e) {
  return D1(ua(jt - 1, ff(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function zk(e) {
  for (; (Xe = Dn()) && Xe < 33; ) Ht();
  return Ks(e) > 2 || Ks(Xe) > 3 ? '' : ' ';
}
function Fk(e, t) {
  for (; --t && Ht() && !(Xe < 48 || Xe > 102 || (Xe > 57 && Xe < 65) || (Xe > 70 && Xe < 97)); );
  return ua(e, hl() + (t < 6 && Dn() == 32 && Ht() == 32));
}
function ff(e) {
  for (; Ht(); )
    switch (Xe) {
      case e:
        return jt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ff(Xe);
        break;
      case 40:
        e === 41 && ff(e);
        break;
      case 92:
        Ht();
        break;
    }
  return jt;
}
function Bk(e, t) {
  for (; Ht() && e + Xe !== 57; ) if (e + Xe === 84 && Dn() === 47) break;
  return '/*' + ua(t, jt - 1) + '*' + Tc(e === 47 ? e : Ht());
}
function Wk(e) {
  for (; !Ks(Dn()); ) Ht();
  return ua(e, jt);
}
function Uk(e) {
  return B1(gl('', null, null, null, [''], (e = F1(e)), 0, [0], e));
}
function gl(e, t, n, r, o, i, s, a, l) {
  for (
    var c = 0,
      u = 0,
      d = s,
      p = 0,
      m = 0,
      x = 0,
      v = 1,
      w = 1,
      h = 1,
      y = 0,
      g = '',
      k = o,
      $ = i,
      f = r,
      S = g;
    w;

  )
    switch (((x = y), (y = Ht()))) {
      case 40:
        if (x != 108 && st(S, d - 1) == 58) {
          df((S += be(ml(y), '&', '&\f')), '&\f') != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += ml(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += zk(x);
        break;
      case 92:
        S += Fk(hl() - 1, 7);
        continue;
      case 47:
        switch (Dn()) {
          case 42:
          case 47:
            Fa(Vk(Bk(Ht(), hl()), t, n), l);
            break;
          default:
            S += '/';
        }
        break;
      case 123 * v:
        a[c++] = An(S) * h;
      case 125 * v:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            w = 0;
          case 59 + u:
            h == -1 && (S = be(S, /\f/g, '')),
              m > 0 &&
                An(S) - d &&
                Fa(m > 32 ? bg(S + ';', r, n, d - 1) : bg(be(S, ' ', '') + ';', r, n, d - 2), l);
            break;
          case 59:
            S += ';';
          default:
            if ((Fa((f = xg(S, t, n, c, u, o, a, g, (k = []), ($ = []), d)), i), y === 123))
              if (u === 0) gl(S, t, f, f, k, i, d, a, $);
              else
                switch (p === 99 && st(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    gl(
                      e,
                      f,
                      f,
                      r && Fa(xg(e, f, f, 0, 0, o, a, g, o, (k = []), d), $),
                      o,
                      $,
                      d,
                      a,
                      r ? k : $
                    );
                    break;
                  default:
                    gl(S, f, f, f, [''], $, 0, a, $);
                }
        }
        (c = u = m = 0), (v = h = 1), (g = S = ''), (d = s);
        break;
      case 58:
        (d = 1 + An(S)), (m = x);
      default:
        if (v < 1) {
          if (y == 123) --v;
          else if (y == 125 && v++ == 0 && Dk() == 125) continue;
        }
        switch (((S += Tc(y)), y * v)) {
          case 38:
            h = u > 0 ? 1 : ((S += '\f'), -1);
            break;
          case 44:
            (a[c++] = (An(S) - 1) * h), (h = 1);
            break;
          case 64:
            Dn() === 45 && (S += ml(Ht())), (p = Dn()), (u = d = An((g = S += Wk(hl())))), y++;
            break;
          case 45:
            x === 45 && An(S) == 2 && (v = 0);
        }
    }
  return i;
}
function xg(e, t, n, r, o, i, s, a, l, c, u) {
  for (var d = o - 1, p = o === 0 ? i : [''], m = Up(p), x = 0, v = 0, w = 0; x < r; ++x)
    for (var h = 0, y = Gs(e, d + 1, (d = Ak((v = s[x])))), g = e; h < m; ++h)
      (g = D1(v > 0 ? p[h] + ' ' + y : be(y, /&\f/g, p[h]))) && (l[w++] = g);
  return Oc(e, t, n, o === 0 ? Bp : a, l, c, u);
}
function Vk(e, t, n) {
  return Oc(e, t, n, N1, Tc(Lk()), Gs(e, 2, -2), 0);
}
function bg(e, t, n, r) {
  return Oc(e, t, n, Wp, Gs(e, 0, r), Gs(e, r + 1, -1), r);
}
function ci(e, t) {
  for (var n = '', r = Up(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
  return n;
}
function Hk(e, t, n, r) {
  switch (e.type) {
    case Mk:
      if (e.children.length) break;
    case Ok:
    case Wp:
      return (e.return = e.return || e.value);
    case N1:
      return '';
    case L1:
      return (e.return = e.value + '{' + ci(e.children, r) + '}');
    case Bp:
      e.value = e.props.join(',');
  }
  return An((n = ci(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
}
function Gk(e) {
  var t = Up(e);
  return function (n, r, o, i) {
    for (var s = '', a = 0; a < t; a++) s += e[a](n, r, o, i) || '';
    return s;
  };
}
function Kk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Yk = function (t, n, r) {
    for (var o = 0, i = 0; (o = i), (i = Dn()), o === 38 && i === 12 && (n[r] = 1), !Ks(i); ) Ht();
    return ua(t, jt);
  },
  Xk = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Ks(o)) {
        case 0:
          o === 38 && Dn() === 12 && (n[r] = 1), (t[r] += Yk(jt - 1, n, r));
          break;
        case 2:
          t[r] += ml(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Dn() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Tc(o);
      }
    while ((o = Ht()));
    return t;
  },
  qk = function (t, n) {
    return B1(Xk(F1(t), n));
  },
  Cg = new WeakMap(),
  Qk = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return;
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Cg.get(r)) && !o) {
        Cg.set(t, !0);
        for (var i = [], s = qk(n, i), a = r.props, l = 0, c = 0; l < s.length; l++)
          for (var u = 0; u < a.length; u++, c++)
            t.props[c] = i[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + ' ' + s[l];
      }
    }
  },
  Zk = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''));
    }
  };
function W1(e, t) {
  switch (Ik(e, t)) {
    case 5103:
      return xe + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return xe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return xe + e + Zl + e + ht + e + e;
    case 6828:
    case 4268:
      return xe + e + ht + e + e;
    case 6165:
      return xe + e + ht + 'flex-' + e + e;
    case 5187:
      return xe + e + be(e, /(\w+).+(:[^]+)/, xe + 'box-$1$2' + ht + 'flex-$1$2') + e;
    case 5443:
      return xe + e + ht + 'flex-item-' + be(e, /flex-|-self/, '') + e;
    case 4675:
      return xe + e + ht + 'flex-line-pack' + be(e, /align-content|flex-|-self/, '') + e;
    case 5548:
      return xe + e + ht + be(e, 'shrink', 'negative') + e;
    case 5292:
      return xe + e + ht + be(e, 'basis', 'preferred-size') + e;
    case 6060:
      return xe + 'box-' + be(e, '-grow', '') + xe + e + ht + be(e, 'grow', 'positive') + e;
    case 4554:
      return xe + be(e, /([^-])(transform)/g, '$1' + xe + '$2') + e;
    case 6187:
      return be(be(be(e, /(zoom-|grab)/, xe + '$1'), /(image-set)/, xe + '$1'), e, '') + e;
    case 5495:
    case 3959:
      return be(e, /(image-set\([^]*)/, xe + '$1$`$1');
    case 4968:
      return (
        be(
          be(e, /(.+:)(flex-)?(.*)/, xe + 'box-pack:$3' + ht + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        xe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return be(e, /(.+)-inline(.+)/, xe + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (An(e) - 1 - t > 6)
        switch (st(e, t + 1)) {
          case 109:
            if (st(e, t + 4) !== 45) break;
          case 102:
            return (
              be(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + xe + '$2-$3$1' + Zl + (st(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~df(e, 'stretch') ? W1(be(e, 'stretch', 'fill-available'), t) + e : e;
        }
      break;
    case 4949:
      if (st(e, t + 1) !== 115) break;
    case 6444:
      switch (st(e, An(e) - 3 - (~df(e, '!important') && 10))) {
        case 107:
          return be(e, ':', ':' + xe) + e;
        case 101:
          return (
            be(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                xe +
                (st(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                xe +
                '$2$3$1' +
                ht +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (st(e, t + 11)) {
        case 114:
          return xe + e + ht + be(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return xe + e + ht + be(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return xe + e + ht + be(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return xe + e + ht + e + e;
  }
  return e;
}
var Jk = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Wp:
          t.return = W1(t.value, t.length);
          break;
        case L1:
          return ci([qi(t, { value: be(t.value, '@', '@' + xe) })], o);
        case Bp:
          if (t.length)
            return Nk(t.props, function (i) {
              switch (jk(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return ci([qi(t, { props: [be(i, /:(read-\w+)/, ':' + Zl + '$1')] })], o);
                case '::placeholder':
                  return ci(
                    [
                      qi(t, { props: [be(i, /:(plac\w+)/, ':' + xe + 'input-$1')] }),
                      qi(t, { props: [be(i, /:(plac\w+)/, ':' + Zl + '$1')] }),
                      qi(t, { props: [be(i, /:(plac\w+)/, ht + 'input-$1')] }),
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  eE = [Jk],
  U1 = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (v) {
        var w = v.getAttribute('data-emotion');
        w.indexOf(' ') !== -1 && (document.head.appendChild(v), v.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || eE,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (var w = v.getAttribute('data-emotion').split(' '), h = 1; h < w.length; h++)
            i[w[h]] = !0;
          a.push(v);
        }
      );
    var l,
      c = [Qk, Zk];
    {
      var u,
        d = [
          Hk,
          Kk(function (v) {
            u.insert(v);
          }),
        ],
        p = Gk(c.concat(o, d)),
        m = function (w) {
          return ci(Uk(w), p);
        };
      l = function (w, h, y, g) {
        (u = y), m(w ? w + '{' + h.styles + '}' : h.styles), g && (x.inserted[h.name] = !0);
      };
    }
    var x = {
      key: n,
      sheet: new Rk({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return x.sheet.hydrate(a), x;
  },
  V1 = { exports: {} },
  we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rt = typeof Symbol == 'function' && Symbol.for,
  Vp = rt ? Symbol.for('react.element') : 60103,
  Hp = rt ? Symbol.for('react.portal') : 60106,
  Mc = rt ? Symbol.for('react.fragment') : 60107,
  Ac = rt ? Symbol.for('react.strict_mode') : 60108,
  _c = rt ? Symbol.for('react.profiler') : 60114,
  Ic = rt ? Symbol.for('react.provider') : 60109,
  jc = rt ? Symbol.for('react.context') : 60110,
  Gp = rt ? Symbol.for('react.async_mode') : 60111,
  Nc = rt ? Symbol.for('react.concurrent_mode') : 60111,
  Lc = rt ? Symbol.for('react.forward_ref') : 60112,
  Dc = rt ? Symbol.for('react.suspense') : 60113,
  tE = rt ? Symbol.for('react.suspense_list') : 60120,
  zc = rt ? Symbol.for('react.memo') : 60115,
  Fc = rt ? Symbol.for('react.lazy') : 60116,
  nE = rt ? Symbol.for('react.block') : 60121,
  rE = rt ? Symbol.for('react.fundamental') : 60117,
  oE = rt ? Symbol.for('react.responder') : 60118,
  iE = rt ? Symbol.for('react.scope') : 60119;
function qt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Vp:
        switch (((e = e.type), e)) {
          case Gp:
          case Nc:
          case Mc:
          case _c:
          case Ac:
          case Dc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case jc:
              case Lc:
              case Fc:
              case zc:
              case Ic:
                return e;
              default:
                return t;
            }
        }
      case Hp:
        return t;
    }
  }
}
function H1(e) {
  return qt(e) === Nc;
}
we.AsyncMode = Gp;
we.ConcurrentMode = Nc;
we.ContextConsumer = jc;
we.ContextProvider = Ic;
we.Element = Vp;
we.ForwardRef = Lc;
we.Fragment = Mc;
we.Lazy = Fc;
we.Memo = zc;
we.Portal = Hp;
we.Profiler = _c;
we.StrictMode = Ac;
we.Suspense = Dc;
we.isAsyncMode = function (e) {
  return H1(e) || qt(e) === Gp;
};
we.isConcurrentMode = H1;
we.isContextConsumer = function (e) {
  return qt(e) === jc;
};
we.isContextProvider = function (e) {
  return qt(e) === Ic;
};
we.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Vp;
};
we.isForwardRef = function (e) {
  return qt(e) === Lc;
};
we.isFragment = function (e) {
  return qt(e) === Mc;
};
we.isLazy = function (e) {
  return qt(e) === Fc;
};
we.isMemo = function (e) {
  return qt(e) === zc;
};
we.isPortal = function (e) {
  return qt(e) === Hp;
};
we.isProfiler = function (e) {
  return qt(e) === _c;
};
we.isStrictMode = function (e) {
  return qt(e) === Ac;
};
we.isSuspense = function (e) {
  return qt(e) === Dc;
};
we.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Mc ||
    e === Nc ||
    e === _c ||
    e === Ac ||
    e === Dc ||
    e === tE ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Fc ||
        e.$$typeof === zc ||
        e.$$typeof === Ic ||
        e.$$typeof === jc ||
        e.$$typeof === Lc ||
        e.$$typeof === rE ||
        e.$$typeof === oE ||
        e.$$typeof === iE ||
        e.$$typeof === nE))
  );
};
we.typeOf = qt;
V1.exports = we;
var sE = V1.exports,
  G1 = sE,
  aE = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  lE = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  K1 = {};
K1[G1.ForwardRef] = aE;
K1[G1.Memo] = lE;
var cE = !0;
function uE(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (r += o + ' ');
    }),
    r
  );
}
var Y1 = function (t, n, r) {
    var o = t.key + '-' + n.name;
    (r === !1 || cE === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
  },
  X1 = function (t, n, r) {
    Y1(t, n, r);
    var o = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function dE(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var fE = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  pE = !1,
  hE = /[A-Z]|^ms/g,
  mE = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  q1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Sg = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Gu = j1(function (e) {
    return q1(e) ? e : e.replace(hE, '-$&').toLowerCase();
  }),
  wg = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(mE, function (r, o, i) {
            return (_n = { name: o, styles: i, next: _n }), o;
          });
    }
    return fE[t] !== 1 && !q1(t) && typeof n == 'number' && n !== 0 ? n + 'px' : n;
  },
  gE =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
function Ys(e, t, n) {
  if (n == null) return '';
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      var o = n;
      if (o.anim === 1) return (_n = { name: o.name, styles: o.styles, next: _n }), o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; ) (_n = { name: s.name, styles: s.styles, next: _n }), (s = s.next);
        var a = i.styles + ';';
        return a;
      }
      return vE(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var l = _n,
          c = n(e);
        return (_n = l), Ys(e, t, c);
      }
      break;
    }
  }
  var u = n;
  if (t == null) return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function vE(e, t, n) {
  var r = '';
  if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += Ys(e, t, n[o]) + ';';
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != 'object') {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += i + '{' + t[a] + '}')
          : Sg(a) && (r += Gu(i) + ':' + wg(i, a) + ';');
      } else {
        if (i === 'NO_COMPONENT_SELECTOR' && pE) throw new Error(gE);
        if (Array.isArray(s) && typeof s[0] == 'string' && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++) Sg(s[l]) && (r += Gu(i) + ':' + wg(i, s[l]) + ';');
        else {
          var c = Ys(e, t, s);
          switch (i) {
            case 'animation':
            case 'animationName': {
              r += Gu(i) + ':' + c + ';';
              break;
            }
            default:
              r += i + '{' + c + '}';
          }
        }
      }
    }
  return r;
}
var kg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  _n;
function Kp(e, t, n) {
  if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0,
    o = '';
  _n = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (r = !1), (o += Ys(n, t, i));
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((o += Ys(n, t, e[a])), r)) {
      var l = i;
      o += l[a];
    }
  kg.lastIndex = 0;
  for (var c = '', u; (u = kg.exec(o)) !== null; ) c += '-' + u[1];
  var d = dE(o) + c;
  return { name: d, styles: o, next: _n };
}
var yE = function (t) {
    return t();
  },
  Q1 = kl.useInsertionEffect ? kl.useInsertionEffect : !1,
  xE = Q1 || yE,
  Eg = Q1 || b.useLayoutEffect,
  Z1 = b.createContext(typeof HTMLElement < 'u' ? U1({ key: 'css' }) : null),
  bE = Z1.Provider,
  J1 = function (t) {
    return b.forwardRef(function (n, r) {
      var o = b.useContext(Z1);
      return t(n, o, r);
    });
  },
  da = b.createContext({});
I1();
var CE = J1(function (e, t) {
  var n = e.styles,
    r = Kp([n], void 0, b.useContext(da)),
    o = b.useRef();
  return (
    Eg(
      function () {
        var i = t.key + '-global',
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          l = document.querySelector('style[data-emotion="' + i + ' ' + r.name + '"]');
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null && ((a = !0), l.setAttribute('data-emotion', i), s.hydrate([l])),
          (o.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t]
    ),
    Eg(
      function () {
        var i = o.current,
          s = i[0],
          a = i[1];
        if (a) {
          i[1] = !1;
          return;
        }
        if ((r.next !== void 0 && X1(t, r.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          (s.before = l), s.flush();
        }
        t.insert('', r, s, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function fa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return Kp(t);
}
var Co = function () {
    var t = fa.apply(void 0, arguments),
      n = 'animation-' + t.name;
    return {
      name: n,
      styles: '@keyframes ' + n + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  SE = Ek,
  wE = function (t) {
    return t !== 'theme';
  },
  $g = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? SE : wE;
  },
  Pg = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != 'function' && r && (o = t.__emotion_forwardProp), o;
  },
  kE = !1,
  EE = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Y1(n, r, o),
      xE(function () {
        return X1(n, r, o);
      }),
      null
    );
  },
  $E = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = Pg(t, n, r),
      l = a || $g(o),
      c = !l('as');
    return function () {
      var u = arguments,
        d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if ((i !== void 0 && d.push('label:' + i + ';'), u[0] == null || u[0].raw === void 0))
        d.push.apply(d, u);
      else {
        d.push(u[0][0]);
        for (var p = u.length, m = 1; m < p; m++) d.push(u[m], u[0][m]);
      }
      var x = J1(function (v, w, h) {
        var y = (c && v.as) || o,
          g = '',
          k = [],
          $ = v;
        if (v.theme == null) {
          $ = {};
          for (var f in v) $[f] = v[f];
          $.theme = b.useContext(da);
        }
        typeof v.className == 'string'
          ? (g = uE(w.registered, k, v.className))
          : v.className != null && (g = v.className + ' ');
        var S = Kp(d.concat(k), w.registered, $);
        (g += w.key + '-' + S.name), s !== void 0 && (g += ' ' + s);
        var P = c && a === void 0 ? $g(y) : l,
          O = {};
        for (var R in v) (c && R === 'as') || (P(R) && (O[R] = v[R]));
        return (
          (O.className = g),
          h && (O.ref = h),
          b.createElement(
            b.Fragment,
            null,
            b.createElement(EE, { cache: w, serialized: S, isStringTag: typeof y == 'string' }),
            b.createElement(y, O)
          )
        );
      });
      return (
        (x.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string' ? o : o.displayName || o.name || 'Component') +
              ')'),
        (x.defaultProps = t.defaultProps),
        (x.__emotion_real = x),
        (x.__emotion_base = o),
        (x.__emotion_styles = d),
        (x.__emotion_forwardProp = a),
        Object.defineProperty(x, 'toString', {
          value: function () {
            return s === void 0 && kE ? 'NO_COMPONENT_SELECTOR' : '.' + s;
          },
        }),
        (x.withComponent = function (v, w) {
          return e(v, E({}, n, w, { shouldForwardProp: Pg(x, w, !0) })).apply(void 0, d);
        }),
        x
      );
    };
  },
  PE = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  pf = $E.bind();
PE.forEach(function (e) {
  pf[e] = pf(e);
});
let hf;
typeof document == 'object' && (hf = U1({ key: 'css', prepend: !0 }));
function TE(e) {
  const { injectFirst: t, children: n } = e;
  return t && hf ? C.jsx(bE, { value: hf, children: n }) : n;
}
function RE(e) {
  return e == null || Object.keys(e).length === 0;
}
function Cs(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == 'function' ? (o) => t(RE(o) ? n : o) : t;
  return C.jsx(CE, { styles: r });
}
function Yp(e, t) {
  return pf(e, t);
}
const ex = (e, t) => {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
  },
  OE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: Cs,
        StyledEngineProvider: TE,
        ThemeContext: da,
        css: fa,
        default: Yp,
        internal_processStyles: ex,
        keyframes: Co,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  tx = jr(OE);
function Yn(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function nx(e) {
  if (!Yn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = nx(e[n]);
    }),
    t
  );
}
function ct(e, t, n = { clone: !0 }) {
  const r = n.clone ? E({}, e) : e;
  return (
    Yn(e) &&
      Yn(t) &&
      Object.keys(t).forEach((o) => {
        Yn(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && Yn(e[o])
          ? (r[o] = ct(e[o], t[o], n))
          : n.clone
            ? (r[o] = Yn(t[o]) ? nx(t[o]) : t[o])
            : (r[o] = t[o]);
      }),
    r
  );
}
const ME = Object.freeze(
    Object.defineProperty({ __proto__: null, default: ct, isPlainObject: Yn }, Symbol.toStringTag, {
      value: 'Module',
    })
  ),
  AE = jr(ME);
function fo(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1) t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
const _E = Object.freeze(
  Object.defineProperty({ __proto__: null, default: fo }, Symbol.toStringTag, { value: 'Module' })
);
function U(e) {
  if (typeof e != 'string') throw new Error(fo(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const IE = Object.freeze(
    Object.defineProperty({ __proto__: null, default: U }, Symbol.toStringTag, { value: 'Module' })
  ),
  jE = jr(IE);
var rx = { exports: {} },
  ke = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xp = Symbol.for('react.element'),
  qp = Symbol.for('react.portal'),
  Bc = Symbol.for('react.fragment'),
  Wc = Symbol.for('react.strict_mode'),
  Uc = Symbol.for('react.profiler'),
  Vc = Symbol.for('react.provider'),
  Hc = Symbol.for('react.context'),
  NE = Symbol.for('react.server_context'),
  Gc = Symbol.for('react.forward_ref'),
  Kc = Symbol.for('react.suspense'),
  Yc = Symbol.for('react.suspense_list'),
  Xc = Symbol.for('react.memo'),
  qc = Symbol.for('react.lazy'),
  LE = Symbol.for('react.offscreen'),
  ox;
ox = Symbol.for('react.module.reference');
function pn(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xp:
        switch (((e = e.type), e)) {
          case Bc:
          case Uc:
          case Wc:
          case Kc:
          case Yc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case NE:
              case Hc:
              case Gc:
              case qc:
              case Xc:
              case Vc:
                return e;
              default:
                return t;
            }
        }
      case qp:
        return t;
    }
  }
}
ke.ContextConsumer = Hc;
ke.ContextProvider = Vc;
ke.Element = Xp;
ke.ForwardRef = Gc;
ke.Fragment = Bc;
ke.Lazy = qc;
ke.Memo = Xc;
ke.Portal = qp;
ke.Profiler = Uc;
ke.StrictMode = Wc;
ke.Suspense = Kc;
ke.SuspenseList = Yc;
ke.isAsyncMode = function () {
  return !1;
};
ke.isConcurrentMode = function () {
  return !1;
};
ke.isContextConsumer = function (e) {
  return pn(e) === Hc;
};
ke.isContextProvider = function (e) {
  return pn(e) === Vc;
};
ke.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Xp;
};
ke.isForwardRef = function (e) {
  return pn(e) === Gc;
};
ke.isFragment = function (e) {
  return pn(e) === Bc;
};
ke.isLazy = function (e) {
  return pn(e) === qc;
};
ke.isMemo = function (e) {
  return pn(e) === Xc;
};
ke.isPortal = function (e) {
  return pn(e) === qp;
};
ke.isProfiler = function (e) {
  return pn(e) === Uc;
};
ke.isStrictMode = function (e) {
  return pn(e) === Wc;
};
ke.isSuspense = function (e) {
  return pn(e) === Kc;
};
ke.isSuspenseList = function (e) {
  return pn(e) === Yc;
};
ke.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Bc ||
    e === Uc ||
    e === Wc ||
    e === Kc ||
    e === Yc ||
    e === LE ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === qc ||
        e.$$typeof === Xc ||
        e.$$typeof === Vc ||
        e.$$typeof === Hc ||
        e.$$typeof === Gc ||
        e.$$typeof === ox ||
        e.getModuleId !== void 0))
  );
};
ke.typeOf = pn;
rx.exports = ke;
var Tg = rx.exports;
const DE = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function ix(e) {
  const t = `${e}`.match(DE);
  return (t && t[1]) || '';
}
function sx(e, t = '') {
  return e.displayName || e.name || ix(e) || t;
}
function Rg(e, t, n) {
  const r = sx(t);
  return e.displayName || (r !== '' ? `${n}(${r})` : n);
}
function zE(e) {
  if (e != null) {
    if (typeof e == 'string') return e;
    if (typeof e == 'function') return sx(e, 'Component');
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Tg.ForwardRef:
          return Rg(e, e.render, 'ForwardRef');
        case Tg.Memo:
          return Rg(e, e.type, 'memo');
        default:
          return;
      }
  }
}
const FE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: zE, getFunctionName: ix },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  BE = jr(FE),
  WE = ['values', 'unit', 'step'],
  UE = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => E({}, n, { [r.key]: r.val }), {});
  };
function ax(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
    } = e,
    o = H(e, WE),
    i = UE(t),
    s = Object.keys(i);
  function a(p) {
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == 'number' ? t[p] : p) - r / 100}${n})`;
  }
  function c(p, m) {
    const x = s.indexOf(m);
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n}) and (max-width:${(x !== -1 && typeof t[s[x]] == 'number' ? t[s[x]] : m) - r / 100}${n})`;
  }
  function u(p) {
    return s.indexOf(p) + 1 < s.length ? c(p, s[s.indexOf(p) + 1]) : a(p);
  }
  function d(p) {
    const m = s.indexOf(p);
    return m === 0
      ? a(s[1])
      : m === s.length - 1
        ? l(s[m])
        : c(p, s[s.indexOf(p) + 1]).replace('@media', '@media not all and');
  }
  return E({ keys: s, values: i, up: a, down: l, between: c, only: u, not: d, unit: n }, o);
}
const VE = { borderRadius: 4 };
function Ss(e, t) {
  return t ? ct(e, t, { clone: !1 }) : e;
}
const Qp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Og = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (e) => `@media (min-width:${Qp[e]}px)` };
function or(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Og;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == 'object') {
    const i = r.breakpoints || Og;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Qp).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function lx(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function cx(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function C_(e, ...t) {
  const n = lx(e),
    r = [n, ...t].reduce((o, i) => ct(o, i), {});
  return cx(Object.keys(n), r);
}
function HE(e, t) {
  if (typeof e != 'object') return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0);
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0);
        }),
    n
  );
}
function S_({ values: e, breakpoints: t, base: n }) {
  const r = n || HE(e, t),
    o = Object.keys(r);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (s, a, l) => (
      Array.isArray(e)
        ? ((s[a] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == 'object'
          ? ((s[a] = e[a] != null ? e[a] : e[i]), (i = a))
          : (s[a] = e),
      s
    ),
    {}
  );
}
function xi(e, t, n = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split('.').reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split('.').reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Jl(e, t, n, r = n) {
  let o;
  return (
    typeof e == 'function' ? (o = e(n)) : Array.isArray(e) ? (o = e[n] || r) : (o = xi(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function Ke(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        c = xi(l, r) || {};
      return or(s, a, (d) => {
        let p = Jl(c, o, d);
        return (
          d === p &&
            typeof d == 'string' &&
            (p = Jl(c, o, `${t}${d === 'default' ? '' : U(d)}`, d)),
          n === !1 ? p : { [n]: p }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function GE(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const KE = { m: 'margin', p: 'padding' },
  YE = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  Mg = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  XE = GE((e) => {
    if (e.length > 2)
      if (Mg[e]) e = Mg[e];
      else return [e];
    const [t, n] = e.split(''),
      r = KE[t],
      o = YE[n] || '';
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Zp = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  Jp = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Zp, ...Jp];
function pa(e, t, n, r) {
  var o;
  const i = (o = xi(e, t, !1)) != null ? o : n;
  return typeof i == 'number'
    ? (s) => (typeof s == 'string' ? s : i * s)
    : Array.isArray(i)
      ? (s) => (typeof s == 'string' ? s : i[s])
      : typeof i == 'function'
        ? i
        : () => {};
}
function ux(e) {
  return pa(e, 'spacing', 8);
}
function ha(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function qE(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = ha(t, n)), r), {});
}
function QE(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = XE(n),
    i = qE(o, r),
    s = e[n];
  return or(e, s, i);
}
function dx(e, t) {
  const n = ux(e.theme);
  return Object.keys(e)
    .map((r) => QE(e, t, r, n))
    .reduce(Ss, {});
}
function Be(e) {
  return dx(e, Zp);
}
Be.propTypes = {};
Be.filterProps = Zp;
function We(e) {
  return dx(e, Jp);
}
We.propTypes = {};
We.filterProps = Jp;
function ZE(e = 8) {
  if (e.mui) return e;
  const t = ux({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == 'number' ? `${s}px` : s;
        })
        .join(' ');
  return (n.mui = !0), n;
}
function Qc(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Ss(o, t[i](r)) : o), {});
  return (n.propTypes = {}), (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])), n;
}
function nn(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
function hn(e, t) {
  return Ke({ prop: e, themeKey: 'borders', transform: t });
}
const JE = hn('border', nn),
  e4 = hn('borderTop', nn),
  t4 = hn('borderRight', nn),
  n4 = hn('borderBottom', nn),
  r4 = hn('borderLeft', nn),
  o4 = hn('borderColor'),
  i4 = hn('borderTopColor'),
  s4 = hn('borderRightColor'),
  a4 = hn('borderBottomColor'),
  l4 = hn('borderLeftColor'),
  c4 = hn('outline', nn),
  u4 = hn('outlineColor'),
  Zc = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = pa(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: ha(t, r) });
      return or(e, e.borderRadius, n);
    }
    return null;
  };
Zc.propTypes = {};
Zc.filterProps = ['borderRadius'];
Qc(JE, e4, t4, n4, r4, o4, i4, s4, a4, l4, Zc, c4, u4);
const Jc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = pa(e.theme, 'spacing', 8),
      n = (r) => ({ gap: ha(t, r) });
    return or(e, e.gap, n);
  }
  return null;
};
Jc.propTypes = {};
Jc.filterProps = ['gap'];
const eu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = pa(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: ha(t, r) });
    return or(e, e.columnGap, n);
  }
  return null;
};
eu.propTypes = {};
eu.filterProps = ['columnGap'];
const tu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = pa(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: ha(t, r) });
    return or(e, e.rowGap, n);
  }
  return null;
};
tu.propTypes = {};
tu.filterProps = ['rowGap'];
const d4 = Ke({ prop: 'gridColumn' }),
  f4 = Ke({ prop: 'gridRow' }),
  p4 = Ke({ prop: 'gridAutoFlow' }),
  h4 = Ke({ prop: 'gridAutoColumns' }),
  m4 = Ke({ prop: 'gridAutoRows' }),
  g4 = Ke({ prop: 'gridTemplateColumns' }),
  v4 = Ke({ prop: 'gridTemplateRows' }),
  y4 = Ke({ prop: 'gridTemplateAreas' }),
  x4 = Ke({ prop: 'gridArea' });
Qc(Jc, eu, tu, d4, f4, p4, h4, m4, g4, v4, y4, x4);
function ui(e, t) {
  return t === 'grey' ? t : e;
}
const b4 = Ke({ prop: 'color', themeKey: 'palette', transform: ui }),
  C4 = Ke({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: ui }),
  S4 = Ke({ prop: 'backgroundColor', themeKey: 'palette', transform: ui });
Qc(b4, C4, S4);
function Wt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const w4 = Ke({ prop: 'width', transform: Wt }),
  eh = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null
            ? void 0
            : r[n]) || Qp[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== 'px'
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: Wt(n) };
      };
      return or(e, e.maxWidth, t);
    }
    return null;
  };
eh.filterProps = ['maxWidth'];
const k4 = Ke({ prop: 'minWidth', transform: Wt }),
  E4 = Ke({ prop: 'height', transform: Wt }),
  $4 = Ke({ prop: 'maxHeight', transform: Wt }),
  P4 = Ke({ prop: 'minHeight', transform: Wt });
Ke({ prop: 'size', cssProperty: 'width', transform: Wt });
Ke({ prop: 'size', cssProperty: 'height', transform: Wt });
const T4 = Ke({ prop: 'boxSizing' });
Qc(w4, eh, k4, E4, $4, P4, T4);
const Mi = {
  border: { themeKey: 'borders', transform: nn },
  borderTop: { themeKey: 'borders', transform: nn },
  borderRight: { themeKey: 'borders', transform: nn },
  borderBottom: { themeKey: 'borders', transform: nn },
  borderLeft: { themeKey: 'borders', transform: nn },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: nn },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Zc },
  color: { themeKey: 'palette', transform: ui },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: ui },
  backgroundColor: { themeKey: 'palette', transform: ui },
  p: { style: We },
  pt: { style: We },
  pr: { style: We },
  pb: { style: We },
  pl: { style: We },
  px: { style: We },
  py: { style: We },
  padding: { style: We },
  paddingTop: { style: We },
  paddingRight: { style: We },
  paddingBottom: { style: We },
  paddingLeft: { style: We },
  paddingX: { style: We },
  paddingY: { style: We },
  paddingInline: { style: We },
  paddingInlineStart: { style: We },
  paddingInlineEnd: { style: We },
  paddingBlock: { style: We },
  paddingBlockStart: { style: We },
  paddingBlockEnd: { style: We },
  m: { style: Be },
  mt: { style: Be },
  mr: { style: Be },
  mb: { style: Be },
  ml: { style: Be },
  mx: { style: Be },
  my: { style: Be },
  margin: { style: Be },
  marginTop: { style: Be },
  marginRight: { style: Be },
  marginBottom: { style: Be },
  marginLeft: { style: Be },
  marginX: { style: Be },
  marginY: { style: Be },
  marginInline: { style: Be },
  marginInlineStart: { style: Be },
  marginInlineEnd: { style: Be },
  marginBlock: { style: Be },
  marginBlockStart: { style: Be },
  marginBlockEnd: { style: Be },
  displayPrint: { cssProperty: !1, transform: (e) => ({ '@media print': { display: e } }) },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Jc },
  rowGap: { style: tu },
  columnGap: { style: eu },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: Wt },
  maxWidth: { style: eh },
  minWidth: { transform: Wt },
  height: { transform: Wt },
  maxHeight: { transform: Wt },
  minHeight: { transform: Wt },
  boxSizing: {},
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
};
function R4(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function O4(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function fx() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: c, transform: u, style: d } = a;
    if (r == null) return null;
    if (c === 'typography' && r === 'inherit') return { [n]: r };
    const p = xi(o, c) || {};
    return d
      ? d(s)
      : or(s, r, (x) => {
          let v = Jl(p, u, x);
          return (
            x === v &&
              typeof x == 'string' &&
              (v = Jl(p, u, `${n}${x === 'default' ? '' : U(x)}`, x)),
            l === !1 ? v : { [l]: v }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : Mi;
    function a(l) {
      let c = l;
      if (typeof l == 'function') c = l(i);
      else if (typeof l != 'object') return l;
      if (!c) return null;
      const u = lx(i.breakpoints),
        d = Object.keys(u);
      let p = u;
      return (
        Object.keys(c).forEach((m) => {
          const x = O4(c[m], i);
          if (x != null)
            if (typeof x == 'object')
              if (s[m]) p = Ss(p, e(m, x, i, s));
              else {
                const v = or({ theme: i }, x, (w) => ({ [m]: w }));
                R4(v, x) ? (p[m] = t({ sx: x, theme: i })) : (p = Ss(p, v));
              }
            else p = Ss(p, e(m, x, i, s));
        }),
        cx(d, p)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Fr = fx();
Fr.filterProps = ['sx'];
function px(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == 'function'
    ? { [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, '*:where($1)')]: t }
    : n.palette.mode === e
      ? t
      : {};
}
const M4 = ['breakpoints', 'palette', 'spacing', 'shape'];
function ma(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = H(e, M4),
    a = ax(n),
    l = ZE(o);
  let c = ct(
    {
      breakpoints: a,
      direction: 'ltr',
      components: {},
      palette: E({ mode: 'light' }, r),
      spacing: l,
      shape: E({}, VE, i),
    },
    s
  );
  return (
    (c.applyStyles = px),
    (c = t.reduce((u, d) => ct(u, d), c)),
    (c.unstable_sxConfig = E({}, Mi, s == null ? void 0 : s.unstable_sxConfig)),
    (c.unstable_sx = function (d) {
      return Fr({ sx: d, theme: this });
    }),
    c
  );
}
const A4 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ma, private_createBreakpoints: ax, unstable_applyStyles: px },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  _4 = jr(A4),
  I4 = ['sx'],
  j4 = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Mi;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function th(e) {
  const { sx: t } = e,
    n = H(e, I4),
    { systemProps: r, otherProps: o } = j4(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == 'function'
        ? (i = (...s) => {
            const a = t(...s);
            return Yn(a) ? E({}, r, a) : r;
          })
        : (i = E({}, r, t)),
    E({}, o, { sx: i })
  );
}
const N4 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Fr,
        extendSxProp: th,
        unstable_createStyleFunctionSx: fx,
        unstable_defaultSxConfig: Mi,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  L4 = jr(N4);
var Ai = _1;
Object.defineProperty(ca, '__esModule', { value: !0 });
var D4 = (ca.default = Q4);
ca.shouldForwardProp = vl;
ca.systemDefaultTheme = void 0;
var Zt = Ai(I1()),
  mf = Ai(wk()),
  Ag = H4(tx),
  z4 = AE;
Ai(jE);
Ai(BE);
var F4 = Ai(_4),
  B4 = Ai(L4);
const W4 = ['ownerState'],
  U4 = ['variants'],
  V4 = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function hx(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (hx = function (r) {
    return r ? n : t;
  })(e);
}
function H4(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e };
  var n = hx(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function G4(e) {
  return Object.keys(e).length === 0;
}
function K4(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function vl(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const Y4 = (ca.systemDefaultTheme = (0, F4.default)()),
  X4 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ba({ defaultTheme: e, theme: t, themeId: n }) {
  return G4(t) ? e : t[n] || t;
}
function q4(e) {
  return e ? (t, n) => n[e] : null;
}
function yl(e, t) {
  let { ownerState: n } = t,
    r = (0, mf.default)(t, W4);
  const o = typeof e == 'function' ? e((0, Zt.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => yl(i, (0, Zt.default)({ ownerState: n }, r)));
  if (o && typeof o == 'object' && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = (0, mf.default)(o, U4);
    return (
      i.forEach((l) => {
        let c = !0;
        typeof l.props == 'function'
          ? (c = l.props((0, Zt.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((u) => {
              (n == null ? void 0 : n[u]) !== l.props[u] && r[u] !== l.props[u] && (c = !1);
            }),
          c &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == 'function'
                ? l.style((0, Zt.default)({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function Q4(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = Y4,
      rootShouldForwardProp: r = vl,
      slotShouldForwardProp: o = vl,
    } = e,
    i = (s) =>
      (0, B4.default)(
        (0, Zt.default)({}, s, {
          theme: Ba((0, Zt.default)({}, s, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, Ag.internal_processStyles)(s, ($) => $.filter((f) => !(f != null && f.__mui_systemSx)));
      const {
          name: l,
          slot: c,
          skipVariantsResolver: u,
          skipSx: d,
          overridesResolver: p = q4(X4(c)),
        } = a,
        m = (0, mf.default)(a, V4),
        x = u !== void 0 ? u : (c && c !== 'Root' && c !== 'root') || !1,
        v = d || !1;
      let w,
        h = vl;
      c === 'Root' || c === 'root' ? (h = r) : c ? (h = o) : K4(s) && (h = void 0);
      const y = (0, Ag.default)(s, (0, Zt.default)({ shouldForwardProp: h, label: w }, m)),
        g = ($) =>
          (typeof $ == 'function' && $.__emotion_real !== $) || (0, z4.isPlainObject)($)
            ? (f) =>
                yl(
                  $,
                  (0, Zt.default)({}, f, {
                    theme: Ba({ theme: f.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : $,
        k = ($, ...f) => {
          let S = g($);
          const P = f ? f.map(g) : [];
          l &&
            p &&
            P.push((A) => {
              const z = Ba((0, Zt.default)({}, A, { defaultTheme: n, themeId: t }));
              if (!z.components || !z.components[l] || !z.components[l].styleOverrides) return null;
              const F = z.components[l].styleOverrides,
                N = {};
              return (
                Object.entries(F).forEach(([_, M]) => {
                  N[_] = yl(M, (0, Zt.default)({}, A, { theme: z }));
                }),
                p(A, N)
              );
            }),
            l &&
              !x &&
              P.push((A) => {
                var z;
                const F = Ba((0, Zt.default)({}, A, { defaultTheme: n, themeId: t })),
                  N =
                    F == null || (z = F.components) == null || (z = z[l]) == null
                      ? void 0
                      : z.variants;
                return yl({ variants: N }, (0, Zt.default)({}, A, { theme: F }));
              }),
            v || P.push(i);
          const O = P.length - f.length;
          if (Array.isArray($) && O > 0) {
            const A = new Array(O).fill('');
            (S = [...$, ...A]), (S.raw = [...$.raw, ...A]);
          }
          const R = y(S, ...P);
          return s.muiName && (R.muiName = s.muiName), R;
        };
      return y.withConfig && (k.withConfig = y.withConfig), k;
    }
  );
}
const _g = (e) => e,
  Z4 = () => {
    let e = _g;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = _g;
      },
    };
  },
  mx = Z4(),
  J4 = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected',
  };
function he(e, t, n = 'Mui') {
  const r = J4[t];
  return r ? `${n}-${r}` : `${mx.generate(e)}-${t}`;
}
function e5(e, t) {
  return E(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 },
      },
    },
    t
  );
}
var Ye = {};
const t5 = jr(_E);
function n5(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const r5 = Object.freeze(
    Object.defineProperty({ __proto__: null, default: n5 }, Symbol.toStringTag, { value: 'Module' })
  ),
  o5 = jr(r5);
var gx = _1;
Object.defineProperty(Ye, '__esModule', { value: !0 });
var Le = (Ye.alpha = bx);
Ye.blend = g5;
Ye.colorChannel = void 0;
var ec = (Ye.darken = rh);
Ye.decomposeColor = cn;
Ye.emphasize = Cx;
var i5 = (Ye.getContrastRatio = d5);
Ye.getLuminance = nc;
Ye.hexToRgb = vx;
var s5 = (Ye.hslToRgb = xx),
  tc = (Ye.lighten = oh),
  Wa = (Ye.private_safeAlpha = f5),
  Qo = (Ye.private_safeColorChannel = void 0),
  Pe = (Ye.private_safeDarken = p5),
  Ua = (Ye.private_safeEmphasize = m5),
  Te = (Ye.private_safeLighten = h5);
Ye.recomposeColor = _i;
Ye.rgbToHex = u5;
var Ig = gx(t5),
  a5 = gx(o5);
function nh(e, t = 0, n = 1) {
  return (0, a5.default)(e, t, n);
}
function vx(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n.map((r, o) => (o < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function l5(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function cn(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return cn(vx(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error((0, Ig.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(o) === -1)
    )
      throw new Error((0, Ig.default)(10, o));
  } else r = r.split(',');
  return (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o };
}
const yx = (e) => {
  const t = cn(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf('hsl') !== -1 && r !== 0 ? `${n}%` : n))
    .join(' ');
};
Ye.colorChannel = yx;
const c5 = (e, t) => {
  try {
    return yx(e);
  } catch {
    return e;
  }
};
Qo = Ye.private_safeColorChannel = c5;
function _i(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1 ? (r = `${n} ${r.join(' ')}`) : (r = `${r.join(', ')}`),
    `${t}(${r})`
  );
}
function u5(e) {
  if (e.indexOf('#') === 0) return e;
  const { values: t } = cn(e);
  return `#${t.map((n, r) => l5(r === 3 ? Math.round(255 * n) : n)).join('')}`;
}
function xx(e) {
  e = cn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (c, u = (c + n / 30) % 12) => o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = 'rgb';
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === 'hsla' && ((a += 'a'), l.push(t[3])), _i({ type: a, values: l });
}
function nc(e) {
  e = cn(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? cn(xx(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== 'color' && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function d5(e, t) {
  const n = nc(e),
    r = nc(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function bx(e, t) {
  return (
    (e = cn(e)),
    (t = nh(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    _i(e)
  );
}
function f5(e, t, n) {
  try {
    return bx(e, t);
  } catch {
    return e;
  }
}
function rh(e, t) {
  if (((e = cn(e)), (t = nh(t)), e.type.indexOf('hsl') !== -1)) e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return _i(e);
}
function p5(e, t, n) {
  try {
    return rh(e, t);
  } catch {
    return e;
  }
}
function oh(e, t) {
  if (((e = cn(e)), (t = nh(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return _i(e);
}
function h5(e, t, n) {
  try {
    return oh(e, t);
  } catch {
    return e;
  }
}
function Cx(e, t = 0.15) {
  return nc(e) > 0.5 ? rh(e, t) : oh(e, t);
}
function m5(e, t, n) {
  try {
    return Cx(e, t);
  } catch {
    return e;
  }
}
function g5(e, t, n, r = 1) {
  const o = (l, c) => Math.round((l ** (1 / r) * (1 - n) + c ** (1 / r) * n) ** r),
    i = cn(e),
    s = cn(t),
    a = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return _i({ type: 'rgb', values: a });
}
const Xs = { black: '#000', white: '#fff' },
  v5 = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  $o = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  Po = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  Qi = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  To = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  Ro = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  Oo = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  y5 = ['mode', 'contrastThreshold', 'tonalOffset'],
  jg = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Xs.white, default: Xs.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Ku = {
    text: {
      primary: Xs.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Xs.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Ng(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
        ? (e.light = tc(e.main, o))
        : t === 'dark' && (e.dark = ec(e.main, i)));
}
function x5(e = 'light') {
  return e === 'dark'
    ? { main: To[200], light: To[50], dark: To[400] }
    : { main: To[700], light: To[400], dark: To[800] };
}
function b5(e = 'light') {
  return e === 'dark'
    ? { main: $o[200], light: $o[50], dark: $o[400] }
    : { main: $o[500], light: $o[300], dark: $o[700] };
}
function C5(e = 'light') {
  return e === 'dark'
    ? { main: Po[500], light: Po[300], dark: Po[700] }
    : { main: Po[700], light: Po[400], dark: Po[800] };
}
function S5(e = 'light') {
  return e === 'dark'
    ? { main: Ro[400], light: Ro[300], dark: Ro[700] }
    : { main: Ro[700], light: Ro[500], dark: Ro[900] };
}
function w5(e = 'light') {
  return e === 'dark'
    ? { main: Oo[400], light: Oo[300], dark: Oo[700] }
    : { main: Oo[800], light: Oo[500], dark: Oo[900] };
}
function k5(e = 'light') {
  return e === 'dark'
    ? { main: Qi[400], light: Qi[300], dark: Qi[700] }
    : { main: '#ed6c02', light: Qi[500], dark: Qi[900] };
}
function E5(e) {
  const { mode: t = 'light', contrastThreshold: n = 3, tonalOffset: r = 0.2 } = e,
    o = H(e, y5),
    i = e.primary || x5(t),
    s = e.secondary || b5(t),
    a = e.error || C5(t),
    l = e.info || S5(t),
    c = e.success || w5(t),
    u = e.warning || k5(t);
  function d(v) {
    return i5(v, Ku.text.primary) >= n ? Ku.text.primary : jg.text.primary;
  }
  const p = ({
      color: v,
      name: w,
      mainShade: h = 500,
      lightShade: y = 300,
      darkShade: g = 700,
    }) => {
      if (((v = E({}, v)), !v.main && v[h] && (v.main = v[h]), !v.hasOwnProperty('main')))
        throw new Error(fo(11, w ? ` (${w})` : '', h));
      if (typeof v.main != 'string')
        throw new Error(fo(12, w ? ` (${w})` : '', JSON.stringify(v.main)));
      return (
        Ng(v, 'light', y, r), Ng(v, 'dark', g, r), v.contrastText || (v.contrastText = d(v.main)), v
      );
    },
    m = { dark: Ku, light: jg };
  return ct(
    E(
      {
        common: E({}, Xs),
        mode: t,
        primary: p({ color: i, name: 'primary' }),
        secondary: p({
          color: s,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: p({ color: a, name: 'error' }),
        warning: p({ color: u, name: 'warning' }),
        info: p({ color: l, name: 'info' }),
        success: p({ color: c, name: 'success' }),
        grey: v5,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: p,
        tonalOffset: r,
      },
      m[t]
    ),
    o
  );
}
const $5 = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
];
function P5(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Lg = { textTransform: 'uppercase' },
  Dg = '"Roboto", "Helvetica", "Arial", sans-serif';
function Sx(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = Dg,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: c = 16,
      allVariants: u,
      pxToRem: d,
    } = n,
    p = H(n, $5),
    m = o / 14,
    x = d || ((h) => `${(h / c) * m}rem`),
    v = (h, y, g, k, $) =>
      E(
        { fontFamily: r, fontWeight: h, fontSize: x(y), lineHeight: g },
        r === Dg ? { letterSpacing: `${P5(k / y)}em` } : {},
        $,
        u
      ),
    w = {
      h1: v(i, 96, 1.167, -1.5),
      h2: v(i, 60, 1.2, -0.5),
      h3: v(s, 48, 1.167, 0),
      h4: v(s, 34, 1.235, 0.25),
      h5: v(s, 24, 1.334, 0),
      h6: v(a, 20, 1.6, 0.15),
      subtitle1: v(s, 16, 1.75, 0.15),
      subtitle2: v(a, 14, 1.57, 0.1),
      body1: v(s, 16, 1.5, 0.15),
      body2: v(s, 14, 1.43, 0.15),
      button: v(a, 14, 1.75, 0.4, Lg),
      caption: v(s, 12, 1.66, 0.4),
      overline: v(s, 12, 2.66, 1, Lg),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return ct(
    E(
      {
        htmlFontSize: c,
        pxToRem: x,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      w
    ),
    p,
    { clone: !1 }
  );
}
const T5 = 0.2,
  R5 = 0.14,
  O5 = 0.12;
function je(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${T5})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${R5})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${O5})`,
  ].join(',');
}
const M5 = [
    'none',
    je(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    je(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    je(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    je(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    je(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    je(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    je(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    je(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    je(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    je(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    je(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    je(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    je(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    je(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    je(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    je(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    je(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    je(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    je(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    je(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    je(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    je(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    je(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    je(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  A5 = ['duration', 'easing', 'delay'],
  _5 = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  I5 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function zg(e) {
  return `${Math.round(e)}ms`;
}
function j5(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function N5(e) {
  const t = E({}, _5, e.easing),
    n = E({}, I5, e.duration);
  return E(
    {
      getAutoHeightDuration: j5,
      create: (o = ['all'], i = {}) => {
        const { duration: s = n.standard, easing: a = t.easeInOut, delay: l = 0 } = i;
        return (
          H(i, A5),
          (Array.isArray(o) ? o : [o])
            .map(
              (c) =>
                `${c} ${typeof s == 'string' ? s : zg(s)} ${a} ${typeof l == 'string' ? l : zg(l)}`
            )
            .join(',')
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const L5 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  D5 = ['breakpoints', 'mixins', 'spacing', 'palette', 'transitions', 'typography', 'shape'];
function rc(e = {}, ...t) {
  const { mixins: n = {}, palette: r = {}, transitions: o = {}, typography: i = {} } = e,
    s = H(e, D5);
  if (e.vars) throw new Error(fo(18));
  const a = E5(r),
    l = ma(e);
  let c = ct(l, {
    mixins: e5(l.breakpoints, n),
    palette: a,
    shadows: M5.slice(),
    typography: Sx(a, i),
    transitions: N5(o),
    zIndex: E({}, L5),
  });
  return (
    (c = ct(c, s)),
    (c = t.reduce((u, d) => ct(u, d), c)),
    (c.unstable_sxConfig = E({}, Mi, s == null ? void 0 : s.unstable_sxConfig)),
    (c.unstable_sx = function (d) {
      return Fr({ sx: d, theme: this });
    }),
    c
  );
}
const ih = rc(),
  ga = '$$material';
function z5(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const So = (e) => z5(e) && e !== 'classes',
  q = D4({ themeId: ga, defaultTheme: ih, rootShouldForwardProp: So });
function qs(e, t) {
  const n = E({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = E({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
              ? (n[r] = i)
              : ((n[r] = E({}, i)),
                Object.keys(o).forEach((s) => {
                  n[r][s] = qs(o[s], i[s]);
                }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
const wx = b.createContext(void 0);
function F5({ value: e, children: t }) {
  return C.jsx(wx.Provider, { value: e, children: t });
}
function B5(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const o = t.components[n];
  return o.defaultProps ? qs(o.defaultProps, r) : !o.styleOverrides && !o.variants ? qs(o, r) : r;
}
function W5({ props: e, name: t }) {
  const n = b.useContext(wx);
  return B5({ props: e, name: t, theme: { components: n } });
}
function ce(e) {
  return W5(e);
}
function gf(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
function Ve(...e) {
  return b.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              gf(n, t);
            });
          },
    e
  );
}
const un = typeof window < 'u' ? b.useLayoutEffect : b.useEffect;
function Qn(e) {
  const t = b.useRef(e);
  return (
    un(() => {
      t.current = e;
    }),
    b.useRef((...n) => (0, t.current)(...n)).current
  );
}
const Fg = {};
function U5(e, t) {
  const n = b.useRef(Fg);
  return n.current === Fg && (n.current = e(t)), n;
}
const V5 = [];
function H5(e) {
  b.useEffect(e, V5);
}
class va {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new va();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function Zo() {
  const e = U5(va.create).current;
  return H5(e.disposeEffect), e;
}
let nu = !0,
  vf = !1;
const G5 = new va(),
  K5 = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    'datetime-local': !0,
  };
function Y5(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === 'INPUT' && K5[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function X5(e) {
  e.metaKey || e.altKey || e.ctrlKey || (nu = !0);
}
function Yu() {
  nu = !1;
}
function q5() {
  this.visibilityState === 'hidden' && vf && (nu = !0);
}
function Q5(e) {
  e.addEventListener('keydown', X5, !0),
    e.addEventListener('mousedown', Yu, !0),
    e.addEventListener('pointerdown', Yu, !0),
    e.addEventListener('touchstart', Yu, !0),
    e.addEventListener('visibilitychange', q5, !0);
}
function Z5(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return nu || Y5(t);
}
function sh() {
  const e = b.useCallback((o) => {
      o != null && Q5(o.ownerDocument);
    }, []),
    t = b.useRef(!1);
  function n() {
    return t.current
      ? ((vf = !0),
        G5.start(100, () => {
          vf = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return Z5(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function yf(e, t) {
  return (
    (yf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    yf(e, t)
  );
}
function kx(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), yf(e, t);
}
const Bg = { disabled: !1 },
  oc = tt.createContext(null);
var J5 = function (t) {
    return t.scrollTop;
  },
  us = 'unmounted',
  Kr = 'exited',
  Yr = 'entering',
  jo = 'entered',
  xf = 'exiting',
  $n = (function (e) {
    kx(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = Kr), (i.appearStatus = Yr))
            : (l = jo)
          : r.unmountOnExit || r.mountOnEnter
            ? (l = us)
            : (l = Kr),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === us ? { status: Kr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in ? s !== Yr && s !== jo && (i = Yr) : (s === Yr || s === jo) && (i = xf);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != 'number' &&
            ((i = o.exit), (s = o.enter), (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Yr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef ? this.props.nodeRef.current : Da.findDOMNode(this);
              s && J5(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === Kr && this.setState({ status: us });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [Da.findDOMNode(this), a],
          c = l[0],
          u = l[1],
          d = this.getTimeouts(),
          p = a ? d.appear : d.enter;
        if ((!o && !s) || Bg.disabled) {
          this.safeSetState({ status: jo }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, u),
          this.safeSetState({ status: Yr }, function () {
            i.props.onEntering(c, u),
              i.onTransitionEnd(p, function () {
                i.safeSetState({ status: jo }, function () {
                  i.props.onEntered(c, u);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Da.findDOMNode(this);
        if (!i || Bg.disabled) {
          this.safeSetState({ status: Kr }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: xf }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: Kr }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef ? this.props.nodeRef.current : Da.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
            c = l[0],
            u = l[1];
          this.props.addEndListener(c, u);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === us) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = H(i, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return tt.createElement(
          oc.Provider,
          { value: null },
          typeof s == 'function' ? s(o, a) : tt.cloneElement(tt.Children.only(s), a)
        );
      }),
      t
    );
  })(tt.Component);
$n.contextType = oc;
$n.propTypes = {};
function Mo() {}
$n.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Mo,
  onEntering: Mo,
  onEntered: Mo,
  onExit: Mo,
  onExiting: Mo,
  onExited: Mo,
};
$n.UNMOUNTED = us;
$n.EXITED = Kr;
$n.ENTERING = Yr;
$n.ENTERED = jo;
$n.EXITING = xf;
function e$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ah(e, t) {
  var n = function (i) {
      return t && b.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      b.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function t$(e, t) {
  (e = e || {}), (t = t || {});
  function n(u) {
    return u in t ? t[u] : e[u];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var c = r[l][s];
        a[r[l][s]] = n(c);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function eo(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function n$(e, t) {
  return ah(e.children, function (n) {
    return b.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: eo(n, 'appear', e),
      enter: eo(n, 'enter', e),
      exit: eo(n, 'exit', e),
    });
  });
}
function r$(e, t, n) {
  var r = ah(e.children),
    o = t$(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (b.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          c = t[i],
          u = b.isValidElement(c) && !c.props.in;
        l && (!a || u)
          ? (o[i] = b.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: eo(s, 'exit', e),
              enter: eo(s, 'enter', e),
            }))
          : !l && a && !u
            ? (o[i] = b.cloneElement(s, { in: !1 }))
            : l &&
              a &&
              b.isValidElement(c) &&
              (o[i] = b.cloneElement(s, {
                onExited: n.bind(null, s),
                in: c.props.in,
                exit: eo(s, 'exit', e),
                enter: eo(s, 'enter', e),
              }));
      }
    }),
    o
  );
}
var o$ =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  i$ = {
    component: 'div',
    childFactory: function (t) {
      return t;
    },
  },
  lh = (function (e) {
    kx(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(e$(i));
      return (i.state = { contextValue: { isMounting: !0 }, handleExited: s, firstRender: !0 }), i;
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? n$(o, a) : r$(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = ah(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = E({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = H(o, ['component', 'childFactory']),
          l = this.state.contextValue,
          c = o$(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? tt.createElement(oc.Provider, { value: l }, c)
            : tt.createElement(oc.Provider, { value: l }, tt.createElement(i, a, c))
        );
      }),
      t
    );
  })(tt.Component);
lh.propTypes = {};
lh.defaultProps = i$;
function s$(e) {
  return Object.keys(e).length === 0;
}
function Ex(e = null) {
  const t = b.useContext(da);
  return !t || s$(t) ? e : t;
}
const a$ = ma();
function ru(e = a$) {
  return Ex(e);
}
function l$({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = ru(n),
    o = typeof e == 'function' ? e((t && r[t]) || r) : e;
  return C.jsx(Cs, { styles: o });
}
const c$ = ['className', 'component'];
function u$(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = 'MuiBox-root',
      generateClassName: o,
    } = e,
    i = Yp('div', { shouldForwardProp: (a) => a !== 'theme' && a !== 'sx' && a !== 'as' })(Fr);
  return b.forwardRef(function (l, c) {
    const u = ru(n),
      d = th(l),
      { className: p, component: m = 'div' } = d,
      x = H(d, c$);
    return C.jsx(
      i,
      E({ as: m, ref: c, className: X(p, o ? o(r) : r), theme: (t && u[t]) || u }, x)
    );
  });
}
function ue(e, t, n = 'Mui') {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = he(e, o, n);
    }),
    r
  );
}
const d$ = ['ownerState'],
  f$ = ['variants'],
  p$ = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function h$(e) {
  return Object.keys(e).length === 0;
}
function m$(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function Xu(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const g$ = ma(),
  v$ = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Va({ defaultTheme: e, theme: t, themeId: n }) {
  return h$(t) ? e : t[n] || t;
}
function y$(e) {
  return e ? (t, n) => n[e] : null;
}
function xl(e, t) {
  let { ownerState: n } = t,
    r = H(t, d$);
  const o = typeof e == 'function' ? e(E({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => xl(i, E({ ownerState: n }, r)));
  if (o && typeof o == 'object' && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = H(o, f$);
    return (
      i.forEach((l) => {
        let c = !0;
        typeof l.props == 'function'
          ? (c = l.props(E({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((u) => {
              (n == null ? void 0 : n[u]) !== l.props[u] && r[u] !== l.props[u] && (c = !1);
            }),
          c &&
            (Array.isArray(a) || (a = [a]),
            a.push(typeof l.style == 'function' ? l.style(E({ ownerState: n }, r, n)) : l.style));
      }),
      a
    );
  }
  return o;
}
function x$(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = g$,
      rootShouldForwardProp: r = Xu,
      slotShouldForwardProp: o = Xu,
    } = e,
    i = (s) => Fr(E({}, s, { theme: Va(E({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      ex(s, ($) => $.filter((f) => !(f != null && f.__mui_systemSx)));
      const {
          name: l,
          slot: c,
          skipVariantsResolver: u,
          skipSx: d,
          overridesResolver: p = y$(v$(c)),
        } = a,
        m = H(a, p$),
        x = u !== void 0 ? u : (c && c !== 'Root' && c !== 'root') || !1,
        v = d || !1;
      let w,
        h = Xu;
      c === 'Root' || c === 'root' ? (h = r) : c ? (h = o) : m$(s) && (h = void 0);
      const y = Yp(s, E({ shouldForwardProp: h, label: w }, m)),
        g = ($) =>
          (typeof $ == 'function' && $.__emotion_real !== $) || Yn($)
            ? (f) => xl($, E({}, f, { theme: Va({ theme: f.theme, defaultTheme: n, themeId: t }) }))
            : $,
        k = ($, ...f) => {
          let S = g($);
          const P = f ? f.map(g) : [];
          l &&
            p &&
            P.push((A) => {
              const z = Va(E({}, A, { defaultTheme: n, themeId: t }));
              if (!z.components || !z.components[l] || !z.components[l].styleOverrides) return null;
              const F = z.components[l].styleOverrides,
                N = {};
              return (
                Object.entries(F).forEach(([_, M]) => {
                  N[_] = xl(M, E({}, A, { theme: z }));
                }),
                p(A, N)
              );
            }),
            l &&
              !x &&
              P.push((A) => {
                var z;
                const F = Va(E({}, A, { defaultTheme: n, themeId: t })),
                  N =
                    F == null || (z = F.components) == null || (z = z[l]) == null
                      ? void 0
                      : z.variants;
                return xl({ variants: N }, E({}, A, { theme: F }));
              }),
            v || P.push(i);
          const O = P.length - f.length;
          if (Array.isArray($) && O > 0) {
            const A = new Array(O).fill('');
            (S = [...$, ...A]), (S.raw = [...$.raw, ...A]);
          }
          const R = y(S, ...P);
          return s.muiName && (R.muiName = s.muiName), R;
        };
      return y.withConfig && (k.withConfig = y.withConfig), k;
    }
  );
}
const b$ = x$();
function C$(e) {
  const { theme: t, name: n, props: r } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps
    ? r
    : qs(t.components[n].defaultProps, r);
}
function S$({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = ru(n);
  return r && (o = o[r] || o), C$({ theme: o, name: t, props: e });
}
function Wg(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function ch(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function w$(e, t) {
  var n, r;
  return (
    b.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null
          ? void 0
          : r.muiName
    ) !== -1
  );
}
function ut(e) {
  return (e && e.ownerDocument) || document;
}
function ir(e) {
  return ut(e).defaultView || window;
}
let Ug = 0;
function k$(e) {
  const [t, n] = b.useState(e),
    r = e || t;
  return (
    b.useEffect(() => {
      t == null && ((Ug += 1), n(`mui-${Ug}`));
    }, [t]),
    r
  );
}
const Vg = kl.useId;
function E$(e) {
  if (Vg !== void 0) {
    const t = Vg();
    return e ?? t;
  }
  return k$(e);
}
function $$({ controlled: e, default: t, name: n, state: r = 'value' }) {
  const { current: o } = b.useRef(e !== void 0),
    [i, s] = b.useState(t),
    a = o ? e : i,
    l = b.useCallback((c) => {
      o || s(c);
    }, []);
  return [a, l];
}
function $x(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Px = (e) => {
  const t = b.useRef({});
  return (
    b.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
};
function bi(e) {
  return typeof e == 'string';
}
function Jo(e, t, n) {
  return e === void 0 || bi(e) ? t : E({}, t, { ownerState: E({}, t.ownerState, n) });
}
function Tx(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == 'function' && !t.includes(r))
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function Hg(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == 'function'))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function Rx(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const m = X(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      x = E(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      v = E({}, n, o, r);
    return (
      m.length > 0 && (v.className = m),
      Object.keys(x).length > 0 && (v.style = x),
      { props: v, internalRef: void 0 }
    );
  }
  const s = Tx(E({}, o, r)),
    a = Hg(r),
    l = Hg(o),
    c = t(s),
    u = X(
      c == null ? void 0 : c.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    d = E(
      {},
      c == null ? void 0 : c.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    p = E({}, c, n, l, a);
  return (
    u.length > 0 && (p.className = u),
    Object.keys(d).length > 0 && (p.style = d),
    { props: p, internalRef: c.ref }
  );
}
function Ox(e, t, n) {
  return typeof e == 'function' ? e(t, n) : e;
}
const P$ = ['elementType', 'externalSlotProps', 'ownerState', 'skipResolvingSlotProps'];
function po(e) {
  var t;
  const { elementType: n, externalSlotProps: r, ownerState: o, skipResolvingSlotProps: i = !1 } = e,
    s = H(e, P$),
    a = i ? {} : Ox(r, o),
    { props: l, internalRef: c } = Rx(E({}, s, { externalSlotProps: a })),
    u = Ve(c, a == null ? void 0 : a.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Jo(n, E({}, l, { ref: u }), o);
}
const Mx = b.createContext(null);
function uh() {
  return b.useContext(Mx);
}
const T$ = typeof Symbol == 'function' && Symbol.for,
  R$ = T$ ? Symbol.for('mui.nested') : '__THEME_NESTED__';
function O$(e, t) {
  return typeof t == 'function' ? t(e) : E({}, e, t);
}
function M$(e) {
  const { children: t, theme: n } = e,
    r = uh(),
    o = b.useMemo(() => {
      const i = r === null ? n : O$(r, n);
      return i != null && (i[R$] = r !== null), i;
    }, [n, r]);
  return C.jsx(Mx.Provider, { value: o, children: t });
}
const A$ = ['value'],
  Ax = b.createContext();
function _$(e) {
  let { value: t } = e,
    n = H(e, A$);
  return C.jsx(Ax.Provider, E({ value: t ?? !0 }, n));
}
const dh = () => {
    const e = b.useContext(Ax);
    return e ?? !1;
  },
  Gg = {};
function Kg(e, t, n, r = !1) {
  return b.useMemo(() => {
    const o = (e && t[e]) || t;
    if (typeof n == 'function') {
      const i = n(o),
        s = e ? E({}, t, { [e]: i }) : i;
      return r ? () => s : s;
    }
    return e ? E({}, t, { [e]: n }) : E({}, t, n);
  }, [e, t, n, r]);
}
function I$(e) {
  const { children: t, theme: n, themeId: r } = e,
    o = Ex(Gg),
    i = uh() || Gg,
    s = Kg(r, o, n),
    a = Kg(r, i, n, !0),
    l = s.direction === 'rtl';
  return C.jsx(M$, {
    theme: a,
    children: C.jsx(da.Provider, {
      value: s,
      children: C.jsx(_$, {
        value: l,
        children: C.jsx(F5, { value: s == null ? void 0 : s.components, children: t }),
      }),
    }),
  });
}
const fh = 'mode',
  ph = 'color-scheme',
  _x = 'data-color-scheme';
function j$(e) {
  const {
    defaultMode: t = 'light',
    defaultLightColorScheme: n = 'light',
    defaultDarkColorScheme: r = 'dark',
    modeStorageKey: o = fh,
    colorSchemeStorageKey: i = ph,
    attribute: s = _x,
    colorSchemeNode: a = 'document.documentElement',
    nonce: l,
  } = e || {};
  return C.jsx(
    'script',
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > 'u' ? l : '',
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  var mode = localStorage.getItem('${o}') || '${t}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${i}-dark') || '${r}';
    } else {
      colorScheme = localStorage.getItem('${i}-light') || '${n}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${i}-light') || '${n}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${i}-dark') || '${r}';
  }
  if (colorScheme) {
    ${a}.setAttribute('${s}', colorScheme);
  }
} catch(e){}})();`,
      },
    },
    'mui-color-scheme-init'
  );
}
function Yg(e) {
  if (typeof window < 'u' && e === 'system')
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function Ix(e, t) {
  if (e.mode === 'light' || (e.mode === 'system' && e.systemMode === 'light')) return t('light');
  if (e.mode === 'dark' || (e.mode === 'system' && e.systemMode === 'dark')) return t('dark');
}
function N$(e) {
  return Ix(e, (t) => {
    if (t === 'light') return e.lightColorScheme;
    if (t === 'dark') return e.darkColorScheme;
  });
}
function qu(e, t) {
  if (typeof window > 'u') return;
  let n;
  try {
    (n = localStorage.getItem(e) || void 0), n || localStorage.setItem(e, t);
  } catch {}
  return n || t;
}
function L$(e) {
  const {
      defaultMode: t = 'light',
      defaultLightColorScheme: n,
      defaultDarkColorScheme: r,
      supportedColorSchemes: o = [],
      modeStorageKey: i = fh,
      colorSchemeStorageKey: s = ph,
      storageWindow: a = typeof window > 'u' ? void 0 : window,
    } = e,
    l = o.join(','),
    [c, u] = b.useState(() => {
      const w = qu(i, t),
        h = qu(`${s}-light`, n),
        y = qu(`${s}-dark`, r);
      return { mode: w, systemMode: Yg(w), lightColorScheme: h, darkColorScheme: y };
    }),
    d = N$(c),
    p = b.useCallback(
      (w) => {
        u((h) => {
          if (w === h.mode) return h;
          const y = w ?? t;
          try {
            localStorage.setItem(i, y);
          } catch {}
          return E({}, h, { mode: y, systemMode: Yg(y) });
        });
      },
      [i, t]
    ),
    m = b.useCallback(
      (w) => {
        w
          ? typeof w == 'string'
            ? w && !l.includes(w)
              ? console.error(`\`${w}\` does not exist in \`theme.colorSchemes\`.`)
              : u((h) => {
                  const y = E({}, h);
                  return (
                    Ix(h, (g) => {
                      try {
                        localStorage.setItem(`${s}-${g}`, w);
                      } catch {}
                      g === 'light' && (y.lightColorScheme = w),
                        g === 'dark' && (y.darkColorScheme = w);
                    }),
                    y
                  );
                })
            : u((h) => {
                const y = E({}, h),
                  g = w.light === null ? n : w.light,
                  k = w.dark === null ? r : w.dark;
                if (g)
                  if (!l.includes(g))
                    console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`);
                  else {
                    y.lightColorScheme = g;
                    try {
                      localStorage.setItem(`${s}-light`, g);
                    } catch {}
                  }
                if (k)
                  if (!l.includes(k))
                    console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`);
                  else {
                    y.darkColorScheme = k;
                    try {
                      localStorage.setItem(`${s}-dark`, k);
                    } catch {}
                  }
                return y;
              })
          : u((h) => {
              try {
                localStorage.setItem(`${s}-light`, n), localStorage.setItem(`${s}-dark`, r);
              } catch {}
              return E({}, h, { lightColorScheme: n, darkColorScheme: r });
            });
      },
      [l, s, n, r]
    ),
    x = b.useCallback(
      (w) => {
        c.mode === 'system' &&
          u((h) => {
            const y = w != null && w.matches ? 'dark' : 'light';
            return h.systemMode === y ? h : E({}, h, { systemMode: y });
          });
      },
      [c.mode]
    ),
    v = b.useRef(x);
  return (
    (v.current = x),
    b.useEffect(() => {
      const w = (...y) => v.current(...y),
        h = window.matchMedia('(prefers-color-scheme: dark)');
      return (
        h.addListener(w),
        w(h),
        () => {
          h.removeListener(w);
        }
      );
    }, []),
    b.useEffect(() => {
      if (a) {
        const w = (h) => {
          const y = h.newValue;
          typeof h.key == 'string' &&
            h.key.startsWith(s) &&
            (!y || l.match(y)) &&
            (h.key.endsWith('light') && m({ light: y }), h.key.endsWith('dark') && m({ dark: y })),
            h.key === i && (!y || ['light', 'dark', 'system'].includes(y)) && p(y || t);
        };
        return (
          a.addEventListener('storage', w),
          () => {
            a.removeEventListener('storage', w);
          }
        );
      }
    }, [m, p, i, s, l, t, a]),
    E({}, c, { colorScheme: d, setMode: p, setColorScheme: m })
  );
}
const D$ = ['colorSchemes', 'components', 'generateCssVars', 'cssVarPrefix'],
  z$ =
    '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function F$(e) {
  const {
    themeId: t,
    theme: n = {},
    attribute: r = _x,
    modeStorageKey: o = fh,
    colorSchemeStorageKey: i = ph,
    defaultMode: s = 'light',
    defaultColorScheme: a,
    disableTransitionOnChange: l = !1,
    resolveTheme: c,
    excludeVariablesFromRoot: u,
  } = e;
  (!n.colorSchemes ||
    (typeof a == 'string' && !n.colorSchemes[a]) ||
    (typeof a == 'object' && !n.colorSchemes[a == null ? void 0 : a.light]) ||
    (typeof a == 'object' && !n.colorSchemes[a == null ? void 0 : a.dark])) &&
    console.error(`MUI: \`${a}\` does not exist in \`theme.colorSchemes\`.`);
  const d = b.createContext(void 0),
    p = () => {
      const h = b.useContext(d);
      if (!h) throw new Error(fo(19));
      return h;
    };
  function m(h) {
    const {
        children: y,
        theme: g = n,
        modeStorageKey: k = o,
        colorSchemeStorageKey: $ = i,
        attribute: f = r,
        defaultMode: S = s,
        defaultColorScheme: P = a,
        disableTransitionOnChange: O = l,
        storageWindow: R = typeof window > 'u' ? void 0 : window,
        documentNode: A = typeof document > 'u' ? void 0 : document,
        colorSchemeNode: z = typeof document > 'u' ? void 0 : document.documentElement,
        colorSchemeSelector: F = ':root',
        disableNestedContext: N = !1,
        disableStyleSheetGeneration: _ = !1,
      } = h,
      M = b.useRef(!1),
      j = uh(),
      T = b.useContext(d),
      I = !!T && !N,
      D = g[t],
      W = D || g,
      {
        colorSchemes: V = {},
        components: te = {},
        generateCssVars: K = () => ({ vars: {}, css: {} }),
        cssVarPrefix: Q,
      } = W,
      J = H(W, D$),
      re = Object.keys(V),
      ie = typeof P == 'string' ? P : P.light,
      ne = typeof P == 'string' ? P : P.dark,
      {
        mode: se,
        setMode: Z,
        systemMode: ve,
        lightColorScheme: ee,
        darkColorScheme: de,
        colorScheme: fe,
        setColorScheme: yt,
      } = L$({
        supportedColorSchemes: re,
        defaultLightColorScheme: ie,
        defaultDarkColorScheme: ne,
        modeStorageKey: k,
        colorSchemeStorageKey: $,
        defaultMode: S,
        storageWindow: R,
      });
    let He = se,
      Ee = fe;
    I && ((He = T.mode), (Ee = T.colorScheme));
    const Lt = He || (S === 'system' ? s : S),
      Ie = Ee || (Lt === 'dark' ? ne : ie),
      { css: Oe, vars: ot } = K(),
      $e = E({}, J, {
        components: te,
        colorSchemes: V,
        cssVarPrefix: Q,
        vars: ot,
        getColorSchemeSelector: (Y) => `[${f}="${Y}"] &`,
      }),
      Ce = {},
      Je = {};
    Object.entries(V).forEach(([Y, Me]) => {
      const { css: Pn, vars: Tn } = K(Y);
      ($e.vars = ct($e.vars, Tn)),
        Y === Ie &&
          (Object.keys(Me).forEach((Dt) => {
            Me[Dt] && typeof Me[Dt] == 'object'
              ? ($e[Dt] = E({}, $e[Dt], Me[Dt]))
              : ($e[Dt] = Me[Dt]);
          }),
          $e.palette && ($e.palette.colorScheme = Y));
      const Ur = typeof P == 'string' ? P : S === 'dark' ? P.dark : P.light;
      if (Y === Ur) {
        if (u) {
          const Dt = {};
          u(Q).forEach((cr) => {
            (Dt[cr] = Pn[cr]), delete Pn[cr];
          }),
            (Ce[`[${f}="${Y}"]`] = Dt);
        }
        Ce[`${F}, [${f}="${Y}"]`] = Pn;
      } else Je[`${F === ':root' ? '' : F}[${f}="${Y}"]`] = Pn;
    }),
      ($e.vars = ct($e.vars, ot)),
      b.useEffect(() => {
        Ee && z && z.setAttribute(f, Ee);
      }, [Ee, f, z]),
      b.useEffect(() => {
        let Y;
        if (O && M.current && A) {
          const Me = A.createElement('style');
          Me.appendChild(A.createTextNode(z$)),
            A.head.appendChild(Me),
            window.getComputedStyle(A.body),
            (Y = setTimeout(() => {
              A.head.removeChild(Me);
            }, 1));
        }
        return () => {
          clearTimeout(Y);
        };
      }, [Ee, O, A]),
      b.useEffect(
        () => (
          (M.current = !0),
          () => {
            M.current = !1;
          }
        ),
        []
      );
    const xt = b.useMemo(
      () => ({
        allColorSchemes: re,
        colorScheme: Ee,
        darkColorScheme: de,
        lightColorScheme: ee,
        mode: He,
        setColorScheme: yt,
        setMode: Z,
        systemMode: ve,
      }),
      [re, Ee, de, ee, He, yt, Z, ve]
    );
    let $t = !0;
    (_ || (I && (j == null ? void 0 : j.cssVarPrefix) === Q)) && ($t = !1);
    const ye = C.jsxs(b.Fragment, {
      children: [
        $t &&
          C.jsxs(b.Fragment, {
            children: [
              C.jsx(Cs, { styles: { [F]: Oe } }),
              C.jsx(Cs, { styles: Ce }),
              C.jsx(Cs, { styles: Je }),
            ],
          }),
        C.jsx(I$, { themeId: D ? t : void 0, theme: c ? c($e) : $e, children: y }),
      ],
    });
    return I ? ye : C.jsx(d.Provider, { value: xt, children: ye });
  }
  const x = typeof a == 'string' ? a : a.light,
    v = typeof a == 'string' ? a : a.dark;
  return {
    CssVarsProvider: m,
    useColorScheme: p,
    getInitColorSchemeScript: (h) =>
      j$(
        E(
          {
            attribute: r,
            colorSchemeStorageKey: i,
            defaultMode: s,
            defaultLightColorScheme: x,
            defaultDarkColorScheme: v,
            modeStorageKey: o,
          },
          h
        )
      ),
  };
}
function B$(e = '') {
  function t(...r) {
    if (!r.length) return '';
    const o = r[0];
    return typeof o == 'string' &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${e ? `${e}-` : ''}${o}${t(...r.slice(1))})`
      : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ''}${r}${t(...o)})`;
}
const Xg = (e, t, n, r = []) => {
    let o = e;
    t.forEach((i, s) => {
      s === t.length - 1
        ? Array.isArray(o)
          ? (o[Number(i)] = n)
          : o && typeof o == 'object' && (o[i] = n)
        : o && typeof o == 'object' && (o[i] || (o[i] = r.includes(i) ? [] : {}), (o = o[i]));
    });
  },
  W$ = (e, t, n) => {
    function r(o, i = [], s = []) {
      Object.entries(o).forEach(([a, l]) => {
        (!n || (n && !n([...i, a]))) &&
          l != null &&
          (typeof l == 'object' && Object.keys(l).length > 0
            ? r(l, [...i, a], Array.isArray(l) ? [...s, a] : s)
            : t([...i, a], l, s));
      });
    }
    r(e);
  },
  U$ = (e, t) =>
    typeof t == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((r) => e.includes(r)) ||
        e[e.length - 1].toLowerCase().indexOf('opacity') >= 0
        ? t
        : `${t}px`
      : t;
function Qu(e, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
    o = {},
    i = {},
    s = {};
  return (
    W$(
      e,
      (a, l, c) => {
        if ((typeof l == 'string' || typeof l == 'number') && (!r || !r(a, l))) {
          const u = `--${n ? `${n}-` : ''}${a.join('-')}`;
          Object.assign(o, { [u]: U$(a, l) }),
            Xg(i, a, `var(${u})`, c),
            Xg(s, a, `var(${u}, ${l})`, c);
        }
      },
      (a) => a[0] === 'vars'
    ),
    { css: o, vars: i, varsWithDefaults: s }
  );
}
function Qs(e) {
  '@babel/helpers - typeof';
  return (
    (Qs =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Qs(e)
  );
}
function V$(e, t) {
  if (Qs(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Qs(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(e);
}
function H$(e) {
  var t = V$(e, 'string');
  return Qs(t) == 'symbol' ? t : t + '';
}
const G$ = ['colorSchemes', 'components', 'defaultColorScheme'];
function K$(e, t) {
  const { colorSchemes: n = {}, defaultColorScheme: r = 'light' } = e,
    o = H(e, G$),
    { vars: i, css: s, varsWithDefaults: a } = Qu(o, t);
  let l = a;
  const c = {},
    { [r]: u } = n,
    d = H(n, [r].map(H$));
  if (
    (Object.entries(d || {}).forEach(([m, x]) => {
      const { vars: v, css: w, varsWithDefaults: h } = Qu(x, t);
      (l = ct(l, h)), (c[m] = { css: w, vars: v });
    }),
    u)
  ) {
    const { css: m, vars: x, varsWithDefaults: v } = Qu(u, t);
    (l = ct(l, v)), (c[r] = { css: m, vars: x });
  }
  return {
    vars: l,
    generateCssVars: (m) => {
      var x;
      if (!m) {
        var v;
        const h = E({}, s);
        return {
          css: h,
          vars: i,
          selector:
            (t == null || (v = t.getSelector) == null ? void 0 : v.call(t, m, h)) || ':root',
        };
      }
      const w = E({}, c[m].css);
      return {
        css: w,
        vars: c[m].vars,
        selector: (t == null || (x = t.getSelector) == null ? void 0 : x.call(t, m, w)) || ':root',
      };
    },
  };
}
const Y$ = ['className', 'component', 'disableGutters', 'fixed', 'maxWidth', 'classes'],
  X$ = ma(),
  q$ = b$('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${U(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  Q$ = (e) => S$({ props: e, name: 'MuiContainer', defaultTheme: X$ }),
  Z$ = (e, t) => {
    const n = (l) => he(t, l),
      { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
      a = { root: ['root', s && `maxWidth${U(String(s))}`, o && 'fixed', i && 'disableGutters'] };
    return ge(a, n, r);
  };
function J$(e = {}) {
  const {
      createStyledComponent: t = q$,
      useThemeProps: n = Q$,
      componentName: r = 'MuiContainer',
    } = e,
    o = t(
      ({ theme: s, ownerState: a }) =>
        E(
          {
            width: '100%',
            marginLeft: 'auto',
            boxSizing: 'border-box',
            marginRight: 'auto',
            display: 'block',
          },
          !a.disableGutters && {
            paddingLeft: s.spacing(2),
            paddingRight: s.spacing(2),
            [s.breakpoints.up('sm')]: { paddingLeft: s.spacing(3), paddingRight: s.spacing(3) },
          }
        ),
      ({ theme: s, ownerState: a }) =>
        a.fixed &&
        Object.keys(s.breakpoints.values).reduce((l, c) => {
          const u = c,
            d = s.breakpoints.values[u];
          return d !== 0 && (l[s.breakpoints.up(u)] = { maxWidth: `${d}${s.breakpoints.unit}` }), l;
        }, {}),
      ({ theme: s, ownerState: a }) =>
        E(
          {},
          a.maxWidth === 'xs' && {
            [s.breakpoints.up('xs')]: { maxWidth: Math.max(s.breakpoints.values.xs, 444) },
          },
          a.maxWidth &&
            a.maxWidth !== 'xs' && {
              [s.breakpoints.up(a.maxWidth)]: {
                maxWidth: `${s.breakpoints.values[a.maxWidth]}${s.breakpoints.unit}`,
              },
            }
        )
    );
  return b.forwardRef(function (a, l) {
    const c = n(a),
      {
        className: u,
        component: d = 'div',
        disableGutters: p = !1,
        fixed: m = !1,
        maxWidth: x = 'lg',
      } = c,
      v = H(c, Y$),
      w = E({}, c, { component: d, disableGutters: p, fixed: m, maxWidth: x }),
      h = Z$(w, r);
    return C.jsx(o, E({ as: d, ownerState: w, className: X(h.root, u), ref: l }, v));
  });
}
function e3(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: c,
    } = e,
    [u, d] = b.useState(!1),
    p = X(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    m = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    x = X(n.child, u && n.childLeaving, r && n.childPulsate);
  return (
    !a && !u && d(!0),
    b.useEffect(() => {
      if (!a && l != null) {
        const v = setTimeout(l, c);
        return () => {
          clearTimeout(v);
        };
      }
    }, [l, a, c]),
    C.jsx('span', { className: p, style: m, children: C.jsx('span', { className: x }) })
  );
}
const Jt = ue('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  t3 = ['center', 'classes', 'className'];
let ou = (e) => e,
  qg,
  Qg,
  Zg,
  Jg;
const bf = 550,
  n3 = 80,
  r3 = Co(
    qg ||
      (qg = ou`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  o3 = Co(
    Qg ||
      (Qg = ou`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  i3 = Co(
    Zg ||
      (Zg = ou`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  s3 = q('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  a3 = q(e3, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    Jg ||
      (Jg = ou`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    Jt.rippleVisible,
    r3,
    bf,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Jt.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Jt.child,
    Jt.childLeaving,
    o3,
    bf,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Jt.childPulsate,
    i3,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  l3 = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: i = {}, className: s } = r,
      a = H(r, t3),
      [l, c] = b.useState([]),
      u = b.useRef(0),
      d = b.useRef(null);
    b.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [l]);
    const p = b.useRef(!1),
      m = Zo(),
      x = b.useRef(null),
      v = b.useRef(null),
      w = b.useCallback(
        (k) => {
          const { pulsate: $, rippleX: f, rippleY: S, rippleSize: P, cb: O } = k;
          c((R) => [
            ...R,
            C.jsx(
              a3,
              {
                classes: {
                  ripple: X(i.ripple, Jt.ripple),
                  rippleVisible: X(i.rippleVisible, Jt.rippleVisible),
                  ripplePulsate: X(i.ripplePulsate, Jt.ripplePulsate),
                  child: X(i.child, Jt.child),
                  childLeaving: X(i.childLeaving, Jt.childLeaving),
                  childPulsate: X(i.childPulsate, Jt.childPulsate),
                },
                timeout: bf,
                pulsate: $,
                rippleX: f,
                rippleY: S,
                rippleSize: P,
              },
              u.current
            ),
          ]),
            (u.current += 1),
            (d.current = O);
        },
        [i]
      ),
      h = b.useCallback(
        (k = {}, $ = {}, f = () => {}) => {
          const { pulsate: S = !1, center: P = o || $.pulsate, fakeElement: O = !1 } = $;
          if ((k == null ? void 0 : k.type) === 'mousedown' && p.current) {
            p.current = !1;
            return;
          }
          (k == null ? void 0 : k.type) === 'touchstart' && (p.current = !0);
          const R = O ? null : v.current,
            A = R ? R.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let z, F, N;
          if (
            P ||
            k === void 0 ||
            (k.clientX === 0 && k.clientY === 0) ||
            (!k.clientX && !k.touches)
          )
            (z = Math.round(A.width / 2)), (F = Math.round(A.height / 2));
          else {
            const { clientX: _, clientY: M } = k.touches && k.touches.length > 0 ? k.touches[0] : k;
            (z = Math.round(_ - A.left)), (F = Math.round(M - A.top));
          }
          if (P) (N = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3)), N % 2 === 0 && (N += 1);
          else {
            const _ = Math.max(Math.abs((R ? R.clientWidth : 0) - z), z) * 2 + 2,
              M = Math.max(Math.abs((R ? R.clientHeight : 0) - F), F) * 2 + 2;
            N = Math.sqrt(_ ** 2 + M ** 2);
          }
          k != null && k.touches
            ? x.current === null &&
              ((x.current = () => {
                w({ pulsate: S, rippleX: z, rippleY: F, rippleSize: N, cb: f });
              }),
              m.start(n3, () => {
                x.current && (x.current(), (x.current = null));
              }))
            : w({ pulsate: S, rippleX: z, rippleY: F, rippleSize: N, cb: f });
        },
        [o, w, m]
      ),
      y = b.useCallback(() => {
        h({}, { pulsate: !0 });
      }, [h]),
      g = b.useCallback(
        (k, $) => {
          if ((m.clear(), (k == null ? void 0 : k.type) === 'touchend' && x.current)) {
            x.current(),
              (x.current = null),
              m.start(0, () => {
                g(k, $);
              });
            return;
          }
          (x.current = null), c((f) => (f.length > 0 ? f.slice(1) : f)), (d.current = $);
        },
        [m]
      );
    return (
      b.useImperativeHandle(n, () => ({ pulsate: y, start: h, stop: g }), [y, h, g]),
      C.jsx(
        s3,
        E({ className: X(Jt.root, i.root, s), ref: v }, a, {
          children: C.jsx(lh, { component: null, exit: !0, children: l }),
        })
      )
    );
  });
function c3(e) {
  return he('MuiButtonBase', e);
}
const u3 = ue('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  d3 = [
    'action',
    'centerRipple',
    'children',
    'className',
    'component',
    'disabled',
    'disableRipple',
    'disableTouchRipple',
    'focusRipple',
    'focusVisibleClassName',
    'LinkComponent',
    'onBlur',
    'onClick',
    'onContextMenu',
    'onDragLeave',
    'onFocus',
    'onFocusVisible',
    'onKeyDown',
    'onKeyUp',
    'onMouseDown',
    'onMouseLeave',
    'onMouseUp',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'tabIndex',
    'TouchRippleProps',
    'touchRippleRef',
    'type',
  ],
  f3 = (e) => {
    const { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o } = e,
      s = ge({ root: ['root', t && 'disabled', n && 'focusVisible'] }, c3, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  p3 = q('button', { name: 'MuiButtonBase', slot: 'Root', overridesResolver: (e, t) => t.root })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${u3.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  wo = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiButtonBase' }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = 'button',
        disabled: c = !1,
        disableRipple: u = !1,
        disableTouchRipple: d = !1,
        focusRipple: p = !1,
        LinkComponent: m = 'a',
        onBlur: x,
        onClick: v,
        onContextMenu: w,
        onDragLeave: h,
        onFocus: y,
        onFocusVisible: g,
        onKeyDown: k,
        onKeyUp: $,
        onMouseDown: f,
        onMouseLeave: S,
        onMouseUp: P,
        onTouchEnd: O,
        onTouchMove: R,
        onTouchStart: A,
        tabIndex: z = 0,
        TouchRippleProps: F,
        touchRippleRef: N,
        type: _,
      } = r,
      M = H(r, d3),
      j = b.useRef(null),
      T = b.useRef(null),
      I = Ve(T, N),
      { isFocusVisibleRef: D, onFocus: W, onBlur: V, ref: te } = sh(),
      [K, Q] = b.useState(!1);
    c && K && Q(!1),
      b.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            Q(!0), j.current.focus();
          },
        }),
        []
      );
    const [J, re] = b.useState(!1);
    b.useEffect(() => {
      re(!0);
    }, []);
    const ie = J && !u && !c;
    b.useEffect(() => {
      K && p && !u && J && T.current.pulsate();
    }, [u, p, K, J]);
    function ne(Y, Me, Pn = d) {
      return Qn((Tn) => (Me && Me(Tn), !Pn && T.current && T.current[Y](Tn), !0));
    }
    const se = ne('start', f),
      Z = ne('stop', w),
      ve = ne('stop', h),
      ee = ne('stop', P),
      de = ne('stop', (Y) => {
        K && Y.preventDefault(), S && S(Y);
      }),
      fe = ne('start', A),
      yt = ne('stop', O),
      He = ne('stop', R),
      Ee = ne(
        'stop',
        (Y) => {
          V(Y), D.current === !1 && Q(!1), x && x(Y);
        },
        !1
      ),
      Lt = Qn((Y) => {
        j.current || (j.current = Y.currentTarget),
          W(Y),
          D.current === !0 && (Q(!0), g && g(Y)),
          y && y(Y);
      }),
      Ie = () => {
        const Y = j.current;
        return l && l !== 'button' && !(Y.tagName === 'A' && Y.href);
      },
      Oe = b.useRef(!1),
      ot = Qn((Y) => {
        p &&
          !Oe.current &&
          K &&
          T.current &&
          Y.key === ' ' &&
          ((Oe.current = !0),
          T.current.stop(Y, () => {
            T.current.start(Y);
          })),
          Y.target === Y.currentTarget && Ie() && Y.key === ' ' && Y.preventDefault(),
          k && k(Y),
          Y.target === Y.currentTarget &&
            Ie() &&
            Y.key === 'Enter' &&
            !c &&
            (Y.preventDefault(), v && v(Y));
      }),
      $e = Qn((Y) => {
        p &&
          Y.key === ' ' &&
          T.current &&
          K &&
          !Y.defaultPrevented &&
          ((Oe.current = !1),
          T.current.stop(Y, () => {
            T.current.pulsate(Y);
          })),
          $ && $(Y),
          v && Y.target === Y.currentTarget && Ie() && Y.key === ' ' && !Y.defaultPrevented && v(Y);
      });
    let Ce = l;
    Ce === 'button' && (M.href || M.to) && (Ce = m);
    const Je = {};
    Ce === 'button'
      ? ((Je.type = _ === void 0 ? 'button' : _), (Je.disabled = c))
      : (!M.href && !M.to && (Je.role = 'button'), c && (Je['aria-disabled'] = c));
    const xt = Ve(n, te, j),
      $t = E({}, r, {
        centerRipple: i,
        component: l,
        disabled: c,
        disableRipple: u,
        disableTouchRipple: d,
        focusRipple: p,
        tabIndex: z,
        focusVisible: K,
      }),
      ye = f3($t);
    return C.jsxs(
      p3,
      E(
        {
          as: Ce,
          className: X(ye.root, a),
          ownerState: $t,
          onBlur: Ee,
          onClick: v,
          onContextMenu: Z,
          onFocus: Lt,
          onKeyDown: ot,
          onKeyUp: $e,
          onMouseDown: se,
          onMouseLeave: de,
          onMouseUp: ee,
          onDragLeave: ve,
          onTouchEnd: yt,
          onTouchMove: He,
          onTouchStart: fe,
          ref: xt,
          tabIndex: c ? -1 : z,
          type: _,
        },
        Je,
        M,
        { children: [s, ie ? C.jsx(l3, E({ ref: I, center: i }, F)) : null] }
      )
    );
  });
function h3(e) {
  return he('MuiFab', e);
}
const ev = ue('MuiFab', [
    'root',
    'primary',
    'secondary',
    'extended',
    'circular',
    'focusVisible',
    'disabled',
    'colorInherit',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
    'info',
    'error',
    'warning',
    'success',
  ]),
  m3 = [
    'children',
    'className',
    'color',
    'component',
    'disabled',
    'disableFocusRipple',
    'focusVisibleClassName',
    'size',
    'variant',
  ],
  g3 = (e) => {
    const { color: t, variant: n, classes: r, size: o } = e,
      i = { root: ['root', n, `size${U(o)}`, t === 'inherit' ? 'colorInherit' : t] },
      s = ge(i, h3, r);
    return E({}, r, s);
  },
  v3 = q(wo, {
    name: 'MuiFab',
    slot: 'Root',
    shouldForwardProp: (e) => So(e) || e === 'classes',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${U(n.size)}`],
        n.color === 'inherit' && t.colorInherit,
        t[U(n.size)],
        t[n.color],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      return E(
        {},
        e.typography.button,
        {
          minHeight: 36,
          transition: e.transitions.create(['background-color', 'box-shadow', 'border-color'], {
            duration: e.transitions.duration.short,
          }),
          borderRadius: '50%',
          padding: 0,
          minWidth: 0,
          width: 56,
          height: 56,
          zIndex: (e.vars || e).zIndex.fab,
          boxShadow: (e.vars || e).shadows[6],
          '&:active': { boxShadow: (e.vars || e).shadows[12] },
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
              ? void 0
              : n.call(r, e.palette.grey[300]),
          backgroundColor: (e.vars || e).palette.grey[300],
          '&:hover': {
            backgroundColor: (e.vars || e).palette.grey.A100,
            '@media (hover: none)': { backgroundColor: (e.vars || e).palette.grey[300] },
            textDecoration: 'none',
          },
          [`&.${ev.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
        },
        t.size === 'small' && { width: 40, height: 40 },
        t.size === 'medium' && { width: 48, height: 48 },
        t.variant === 'extended' && {
          borderRadius: 48 / 2,
          padding: '0 16px',
          width: 'auto',
          minHeight: 'auto',
          minWidth: 48,
          height: 48,
        },
        t.variant === 'extended' &&
          t.size === 'small' && {
            width: 'auto',
            padding: '0 8px',
            borderRadius: 34 / 2,
            minWidth: 34,
            height: 34,
          },
        t.variant === 'extended' &&
          t.size === 'medium' && {
            width: 'auto',
            padding: '0 16px',
            borderRadius: 40 / 2,
            minWidth: 40,
            height: 40,
          },
        t.color === 'inherit' && { color: 'inherit' }
      );
    },
    ({ theme: e, ownerState: t }) =>
      E(
        {},
        t.color !== 'inherit' &&
          t.color !== 'default' &&
          (e.vars || e).palette[t.color] != null && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
            '&:hover': {
              backgroundColor: (e.vars || e).palette[t.color].dark,
              '@media (hover: none)': { backgroundColor: (e.vars || e).palette[t.color].main },
            },
          }
      ),
    ({ theme: e }) => ({
      [`&.${ev.disabled}`]: {
        color: (e.vars || e).palette.action.disabled,
        boxShadow: (e.vars || e).shadows[0],
        backgroundColor: (e.vars || e).palette.action.disabledBackground,
      },
    })
  ),
  y3 = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiFab' }),
      {
        children: o,
        className: i,
        color: s = 'default',
        component: a = 'button',
        disabled: l = !1,
        disableFocusRipple: c = !1,
        focusVisibleClassName: u,
        size: d = 'large',
        variant: p = 'circular',
      } = r,
      m = H(r, m3),
      x = E({}, r, {
        color: s,
        component: a,
        disabled: l,
        disableFocusRipple: c,
        size: d,
        variant: p,
      }),
      v = g3(x);
    return C.jsx(
      v3,
      E(
        {
          className: X(v.root, i),
          component: a,
          disabled: l,
          focusRipple: !c,
          focusVisibleClassName: X(v.focusVisible, u),
          ownerState: x,
          ref: n,
        },
        m,
        { classes: v, children: o }
      )
    );
  }),
  x3 = 'modulepreload',
  b3 = function (e) {
    return '/' + e;
  },
  tv = {},
  Ii = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName('link');
      const i = document.querySelector('meta[property=csp-nonce]'),
        s = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'));
      o = Promise.all(
        n.map((a) => {
          if (((a = b3(a)), a in tv)) return;
          tv[a] = !0;
          const l = a.endsWith('.css'),
            c = l ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${a}"]${c}`)) return;
          const u = document.createElement('link');
          if (
            ((u.rel = l ? 'stylesheet' : x3),
            l || ((u.as = 'script'), (u.crossOrigin = '')),
            (u.href = a),
            s && u.setAttribute('nonce', s),
            document.head.appendChild(u),
            l)
          )
            return new Promise((d, p) => {
              u.addEventListener('load', d),
                u.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${a}`)));
            });
        })
      );
    }
    return o
      .then(() => t())
      .catch((i) => {
        const s = new Event('vite:preloadError', { cancelable: !0 });
        if (((s.payload = i), window.dispatchEvent(s), !s.defaultPrevented)) throw i;
      });
  };
function Nt() {
  const e = ru(ih);
  return e[ga] || e;
}
function C3(e) {
  var t;
  return (
    !!e[0].match(/(cssVarPrefix|typography|mixins|breakpoints|direction|transitions)/) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === 'palette' &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const Cf = (e) => {
    let t;
    return e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2), (t / 100).toFixed(2);
  },
  S3 = ['colorSchemes', 'cssVarPrefix', 'shouldSkipGeneratingVar'],
  w3 = ['palette'],
  k3 = [...Array(25)].map((e, t) => {
    if (t === 0) return;
    const n = Cf(t);
    return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
  });
function E3(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function L(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function ds(e) {
  return !e || !e.startsWith('hsl') ? e : s5(e);
}
function Vn(e, t) {
  `${t}Channel` in e ||
    (e[`${t}Channel`] = Qo(
      ds(e[t]),
      `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
    ));
}
const On = (e) => {
    try {
      return e();
    } catch {}
  },
  $3 = (e = 'mui') => B$(e);
function jx(e = {}, ...t) {
  var n, r, o, i, s, a;
  const { colorSchemes: l = {}, cssVarPrefix: c = 'mui', shouldSkipGeneratingVar: u = C3 } = e,
    d = H(e, S3),
    p = $3(c),
    m = rc(E({}, d, l.light && { palette: (n = l.light) == null ? void 0 : n.palette })),
    { palette: x } = m,
    v = H(m, w3),
    { palette: w } = rc({
      palette: E({ mode: 'dark' }, (r = l.dark) == null ? void 0 : r.palette),
    });
  let h = E({}, v, {
    cssVarPrefix: c,
    getCssVar: p,
    colorSchemes: E({}, l, {
      light: E({}, l.light, {
        palette: x,
        opacity: E(
          {
            inputPlaceholder: 0.42,
            inputUnderline: 0.42,
            switchTrackDisabled: 0.12,
            switchTrack: 0.38,
          },
          (o = l.light) == null ? void 0 : o.opacity
        ),
        overlays: ((i = l.light) == null ? void 0 : i.overlays) || [],
      }),
      dark: E({}, l.dark, {
        palette: w,
        opacity: E(
          {
            inputPlaceholder: 0.5,
            inputUnderline: 0.7,
            switchTrackDisabled: 0.2,
            switchTrack: 0.3,
          },
          (s = l.dark) == null ? void 0 : s.opacity
        ),
        overlays: ((a = l.dark) == null ? void 0 : a.overlays) || k3,
      }),
    }),
  });
  Object.keys(h.colorSchemes).forEach(($) => {
    const f = h.colorSchemes[$].palette,
      S = (P) => {
        const O = P.split('-'),
          R = O[1],
          A = O[2];
        return p(P, f[R][A]);
      };
    if (
      ($ === 'light'
        ? (L(f.common, 'background', '#fff'), L(f.common, 'onBackground', '#000'))
        : (L(f.common, 'background', '#000'), L(f.common, 'onBackground', '#fff')),
      E3(f, [
        'Alert',
        'AppBar',
        'Avatar',
        'Button',
        'Chip',
        'FilledInput',
        'LinearProgress',
        'Skeleton',
        'Slider',
        'SnackbarContent',
        'SpeedDialAction',
        'StepConnector',
        'StepContent',
        'Switch',
        'TableCell',
        'Tooltip',
      ]),
      $ === 'light')
    ) {
      L(f.Alert, 'errorColor', Pe(f.error.light, 0.6)),
        L(f.Alert, 'infoColor', Pe(f.info.light, 0.6)),
        L(f.Alert, 'successColor', Pe(f.success.light, 0.6)),
        L(f.Alert, 'warningColor', Pe(f.warning.light, 0.6)),
        L(f.Alert, 'errorFilledBg', S('palette-error-main')),
        L(f.Alert, 'infoFilledBg', S('palette-info-main')),
        L(f.Alert, 'successFilledBg', S('palette-success-main')),
        L(f.Alert, 'warningFilledBg', S('palette-warning-main')),
        L(
          f.Alert,
          'errorFilledColor',
          On(() => x.getContrastText(f.error.main))
        ),
        L(
          f.Alert,
          'infoFilledColor',
          On(() => x.getContrastText(f.info.main))
        ),
        L(
          f.Alert,
          'successFilledColor',
          On(() => x.getContrastText(f.success.main))
        ),
        L(
          f.Alert,
          'warningFilledColor',
          On(() => x.getContrastText(f.warning.main))
        ),
        L(f.Alert, 'errorStandardBg', Te(f.error.light, 0.9)),
        L(f.Alert, 'infoStandardBg', Te(f.info.light, 0.9)),
        L(f.Alert, 'successStandardBg', Te(f.success.light, 0.9)),
        L(f.Alert, 'warningStandardBg', Te(f.warning.light, 0.9)),
        L(f.Alert, 'errorIconColor', S('palette-error-main')),
        L(f.Alert, 'infoIconColor', S('palette-info-main')),
        L(f.Alert, 'successIconColor', S('palette-success-main')),
        L(f.Alert, 'warningIconColor', S('palette-warning-main')),
        L(f.AppBar, 'defaultBg', S('palette-grey-100')),
        L(f.Avatar, 'defaultBg', S('palette-grey-400')),
        L(f.Button, 'inheritContainedBg', S('palette-grey-300')),
        L(f.Button, 'inheritContainedHoverBg', S('palette-grey-A100')),
        L(f.Chip, 'defaultBorder', S('palette-grey-400')),
        L(f.Chip, 'defaultAvatarColor', S('palette-grey-700')),
        L(f.Chip, 'defaultIconColor', S('palette-grey-700')),
        L(f.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        L(f.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        L(f.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        L(f.LinearProgress, 'primaryBg', Te(f.primary.main, 0.62)),
        L(f.LinearProgress, 'secondaryBg', Te(f.secondary.main, 0.62)),
        L(f.LinearProgress, 'errorBg', Te(f.error.main, 0.62)),
        L(f.LinearProgress, 'infoBg', Te(f.info.main, 0.62)),
        L(f.LinearProgress, 'successBg', Te(f.success.main, 0.62)),
        L(f.LinearProgress, 'warningBg', Te(f.warning.main, 0.62)),
        L(f.Skeleton, 'bg', `rgba(${S('palette-text-primaryChannel')} / 0.11)`),
        L(f.Slider, 'primaryTrack', Te(f.primary.main, 0.62)),
        L(f.Slider, 'secondaryTrack', Te(f.secondary.main, 0.62)),
        L(f.Slider, 'errorTrack', Te(f.error.main, 0.62)),
        L(f.Slider, 'infoTrack', Te(f.info.main, 0.62)),
        L(f.Slider, 'successTrack', Te(f.success.main, 0.62)),
        L(f.Slider, 'warningTrack', Te(f.warning.main, 0.62));
      const P = Ua(f.background.default, 0.8);
      L(f.SnackbarContent, 'bg', P),
        L(
          f.SnackbarContent,
          'color',
          On(() => x.getContrastText(P))
        ),
        L(f.SpeedDialAction, 'fabHoverBg', Ua(f.background.paper, 0.15)),
        L(f.StepConnector, 'border', S('palette-grey-400')),
        L(f.StepContent, 'border', S('palette-grey-400')),
        L(f.Switch, 'defaultColor', S('palette-common-white')),
        L(f.Switch, 'defaultDisabledColor', S('palette-grey-100')),
        L(f.Switch, 'primaryDisabledColor', Te(f.primary.main, 0.62)),
        L(f.Switch, 'secondaryDisabledColor', Te(f.secondary.main, 0.62)),
        L(f.Switch, 'errorDisabledColor', Te(f.error.main, 0.62)),
        L(f.Switch, 'infoDisabledColor', Te(f.info.main, 0.62)),
        L(f.Switch, 'successDisabledColor', Te(f.success.main, 0.62)),
        L(f.Switch, 'warningDisabledColor', Te(f.warning.main, 0.62)),
        L(f.TableCell, 'border', Te(Wa(f.divider, 1), 0.88)),
        L(f.Tooltip, 'bg', Wa(f.grey[700], 0.92));
    } else {
      L(f.Alert, 'errorColor', Te(f.error.light, 0.6)),
        L(f.Alert, 'infoColor', Te(f.info.light, 0.6)),
        L(f.Alert, 'successColor', Te(f.success.light, 0.6)),
        L(f.Alert, 'warningColor', Te(f.warning.light, 0.6)),
        L(f.Alert, 'errorFilledBg', S('palette-error-dark')),
        L(f.Alert, 'infoFilledBg', S('palette-info-dark')),
        L(f.Alert, 'successFilledBg', S('palette-success-dark')),
        L(f.Alert, 'warningFilledBg', S('palette-warning-dark')),
        L(
          f.Alert,
          'errorFilledColor',
          On(() => w.getContrastText(f.error.dark))
        ),
        L(
          f.Alert,
          'infoFilledColor',
          On(() => w.getContrastText(f.info.dark))
        ),
        L(
          f.Alert,
          'successFilledColor',
          On(() => w.getContrastText(f.success.dark))
        ),
        L(
          f.Alert,
          'warningFilledColor',
          On(() => w.getContrastText(f.warning.dark))
        ),
        L(f.Alert, 'errorStandardBg', Pe(f.error.light, 0.9)),
        L(f.Alert, 'infoStandardBg', Pe(f.info.light, 0.9)),
        L(f.Alert, 'successStandardBg', Pe(f.success.light, 0.9)),
        L(f.Alert, 'warningStandardBg', Pe(f.warning.light, 0.9)),
        L(f.Alert, 'errorIconColor', S('palette-error-main')),
        L(f.Alert, 'infoIconColor', S('palette-info-main')),
        L(f.Alert, 'successIconColor', S('palette-success-main')),
        L(f.Alert, 'warningIconColor', S('palette-warning-main')),
        L(f.AppBar, 'defaultBg', S('palette-grey-900')),
        L(f.AppBar, 'darkBg', S('palette-background-paper')),
        L(f.AppBar, 'darkColor', S('palette-text-primary')),
        L(f.Avatar, 'defaultBg', S('palette-grey-600')),
        L(f.Button, 'inheritContainedBg', S('palette-grey-800')),
        L(f.Button, 'inheritContainedHoverBg', S('palette-grey-700')),
        L(f.Chip, 'defaultBorder', S('palette-grey-700')),
        L(f.Chip, 'defaultAvatarColor', S('palette-grey-300')),
        L(f.Chip, 'defaultIconColor', S('palette-grey-300')),
        L(f.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        L(f.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        L(f.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        L(f.LinearProgress, 'primaryBg', Pe(f.primary.main, 0.5)),
        L(f.LinearProgress, 'secondaryBg', Pe(f.secondary.main, 0.5)),
        L(f.LinearProgress, 'errorBg', Pe(f.error.main, 0.5)),
        L(f.LinearProgress, 'infoBg', Pe(f.info.main, 0.5)),
        L(f.LinearProgress, 'successBg', Pe(f.success.main, 0.5)),
        L(f.LinearProgress, 'warningBg', Pe(f.warning.main, 0.5)),
        L(f.Skeleton, 'bg', `rgba(${S('palette-text-primaryChannel')} / 0.13)`),
        L(f.Slider, 'primaryTrack', Pe(f.primary.main, 0.5)),
        L(f.Slider, 'secondaryTrack', Pe(f.secondary.main, 0.5)),
        L(f.Slider, 'errorTrack', Pe(f.error.main, 0.5)),
        L(f.Slider, 'infoTrack', Pe(f.info.main, 0.5)),
        L(f.Slider, 'successTrack', Pe(f.success.main, 0.5)),
        L(f.Slider, 'warningTrack', Pe(f.warning.main, 0.5));
      const P = Ua(f.background.default, 0.98);
      L(f.SnackbarContent, 'bg', P),
        L(
          f.SnackbarContent,
          'color',
          On(() => w.getContrastText(P))
        ),
        L(f.SpeedDialAction, 'fabHoverBg', Ua(f.background.paper, 0.15)),
        L(f.StepConnector, 'border', S('palette-grey-600')),
        L(f.StepContent, 'border', S('palette-grey-600')),
        L(f.Switch, 'defaultColor', S('palette-grey-300')),
        L(f.Switch, 'defaultDisabledColor', S('palette-grey-600')),
        L(f.Switch, 'primaryDisabledColor', Pe(f.primary.main, 0.55)),
        L(f.Switch, 'secondaryDisabledColor', Pe(f.secondary.main, 0.55)),
        L(f.Switch, 'errorDisabledColor', Pe(f.error.main, 0.55)),
        L(f.Switch, 'infoDisabledColor', Pe(f.info.main, 0.55)),
        L(f.Switch, 'successDisabledColor', Pe(f.success.main, 0.55)),
        L(f.Switch, 'warningDisabledColor', Pe(f.warning.main, 0.55)),
        L(f.TableCell, 'border', Pe(Wa(f.divider, 1), 0.68)),
        L(f.Tooltip, 'bg', Wa(f.grey[700], 0.92));
    }
    Vn(f.background, 'default'),
      Vn(f.background, 'paper'),
      Vn(f.common, 'background'),
      Vn(f.common, 'onBackground'),
      Vn(f, 'divider'),
      Object.keys(f).forEach((P) => {
        const O = f[P];
        O &&
          typeof O == 'object' &&
          (O.main && L(f[P], 'mainChannel', Qo(ds(O.main))),
          O.light && L(f[P], 'lightChannel', Qo(ds(O.light))),
          O.dark && L(f[P], 'darkChannel', Qo(ds(O.dark))),
          O.contrastText && L(f[P], 'contrastTextChannel', Qo(ds(O.contrastText))),
          P === 'text' && (Vn(f[P], 'primary'), Vn(f[P], 'secondary')),
          P === 'action' && (O.active && Vn(f[P], 'active'), O.selected && Vn(f[P], 'selected')));
      });
  }),
    (h = t.reduce(($, f) => ct($, f), h));
  const y = { prefix: c, shouldSkipGeneratingVar: u },
    { vars: g, generateCssVars: k } = K$(h, y);
  return (
    (h.vars = g),
    (h.generateCssVars = k),
    (h.shouldSkipGeneratingVar = u),
    (h.unstable_sxConfig = E({}, Mi, d == null ? void 0 : d.unstable_sxConfig)),
    (h.unstable_sx = function (f) {
      return Fr({ sx: f, theme: this });
    }),
    h
  );
}
const P3 = (e) => [
    ...[...Array(24)].map((t, n) => `--${e ? `${e}-` : ''}overlays-${n + 1}`),
    `--${e ? `${e}-` : ''}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ''}palette-AppBar-darkColor`,
  ],
  Zi = {
    attribute: 'data-mui-color-scheme',
    colorSchemeStorageKey: 'mui-color-scheme',
    defaultLightColorScheme: 'light',
    defaultDarkColorScheme: 'dark',
    modeStorageKey: 'mui-mode',
  },
  T3 = jx(),
  {
    CssVarsProvider: R3,
    useColorScheme: w_,
    getInitColorSchemeScript: k_,
  } = F$({
    themeId: ga,
    theme: T3,
    attribute: Zi.attribute,
    colorSchemeStorageKey: Zi.colorSchemeStorageKey,
    modeStorageKey: Zi.modeStorageKey,
    defaultColorScheme: { light: Zi.defaultLightColorScheme, dark: Zi.defaultDarkColorScheme },
    resolveTheme: (e) => {
      const t = E({}, e, { typography: Sx(e.palette, e.typography) });
      return (
        (t.unstable_sx = function (r) {
          return Fr({ sx: r, theme: this });
        }),
        t
      );
    },
    excludeVariablesFromRoot: P3,
  }),
  O3 = ue('MuiBox', ['root']),
  M3 = rc(),
  le = u$({
    themeId: ga,
    defaultTheme: M3,
    defaultClassName: O3.root,
    generateClassName: mx.generate,
  });
function A3(e) {
  return he('MuiLinearProgress', e);
}
const _3 = ue('MuiLinearProgress', [
    'root',
    'colorPrimary',
    'colorSecondary',
    'determinate',
    'indeterminate',
    'buffer',
    'query',
    'dashed',
    'dashedColorPrimary',
    'dashedColorSecondary',
    'bar',
    'barColorPrimary',
    'barColorSecondary',
    'bar1Indeterminate',
    'bar1Determinate',
    'bar1Buffer',
    'bar2Indeterminate',
    'bar2Buffer',
  ]),
  I3 = ['className', 'color', 'value', 'valueBuffer', 'variant'];
let ji = (e) => e,
  nv,
  rv,
  ov,
  iv,
  sv,
  av;
const Sf = 4,
  j3 = Co(
    nv ||
      (nv = ji`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)
  ),
  N3 = Co(
    rv ||
      (rv = ji`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)
  ),
  L3 = Co(
    ov ||
      (ov = ji`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)
  ),
  D3 = (e) => {
    const { classes: t, variant: n, color: r } = e,
      o = {
        root: ['root', `color${U(r)}`, n],
        dashed: ['dashed', `dashedColor${U(r)}`],
        bar1: [
          'bar',
          `barColor${U(r)}`,
          (n === 'indeterminate' || n === 'query') && 'bar1Indeterminate',
          n === 'determinate' && 'bar1Determinate',
          n === 'buffer' && 'bar1Buffer',
        ],
        bar2: [
          'bar',
          n !== 'buffer' && `barColor${U(r)}`,
          n === 'buffer' && `color${U(r)}`,
          (n === 'indeterminate' || n === 'query') && 'bar2Indeterminate',
          n === 'buffer' && 'bar2Buffer',
        ],
      };
    return ge(o, A3, t);
  },
  hh = (e, t) =>
    t === 'inherit'
      ? 'currentColor'
      : e.vars
        ? e.vars.palette.LinearProgress[`${t}Bg`]
        : e.palette.mode === 'light'
          ? tc(e.palette[t].main, 0.62)
          : ec(e.palette[t].main, 0.5),
  z3 = q('span', {
    name: 'MuiLinearProgress',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`color${U(n.color)}`], t[n.variant]];
    },
  })(({ ownerState: e, theme: t }) =>
    E(
      {
        position: 'relative',
        overflow: 'hidden',
        display: 'block',
        height: 4,
        zIndex: 0,
        '@media print': { colorAdjust: 'exact' },
        backgroundColor: hh(t, e.color),
      },
      e.color === 'inherit' &&
        e.variant !== 'buffer' && {
          backgroundColor: 'none',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'currentColor',
            opacity: 0.3,
          },
        },
      e.variant === 'buffer' && { backgroundColor: 'transparent' },
      e.variant === 'query' && { transform: 'rotate(180deg)' }
    )
  ),
  F3 = q('span', {
    name: 'MuiLinearProgress',
    slot: 'Dashed',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.dashed, t[`dashedColor${U(n.color)}`]];
    },
  })(
    ({ ownerState: e, theme: t }) => {
      const n = hh(t, e.color);
      return E(
        { position: 'absolute', marginTop: 0, height: '100%', width: '100%' },
        e.color === 'inherit' && { opacity: 0.3 },
        {
          backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`,
          backgroundSize: '10px 10px',
          backgroundPosition: '0 -23px',
        }
      );
    },
    fa(
      iv ||
        (iv = ji`
    animation: ${0} 3s infinite linear;
  `),
      L3
    )
  ),
  B3 = q('span', {
    name: 'MuiLinearProgress',
    slot: 'Bar1',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t[`barColor${U(n.color)}`],
        (n.variant === 'indeterminate' || n.variant === 'query') && t.bar1Indeterminate,
        n.variant === 'determinate' && t.bar1Determinate,
        n.variant === 'buffer' && t.bar1Buffer,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      E(
        {
          width: '100%',
          position: 'absolute',
          left: 0,
          bottom: 0,
          top: 0,
          transition: 'transform 0.2s linear',
          transformOrigin: 'left',
          backgroundColor:
            e.color === 'inherit' ? 'currentColor' : (t.vars || t).palette[e.color].main,
        },
        e.variant === 'determinate' && { transition: `transform .${Sf}s linear` },
        e.variant === 'buffer' && { zIndex: 1, transition: `transform .${Sf}s linear` }
      ),
    ({ ownerState: e }) =>
      (e.variant === 'indeterminate' || e.variant === 'query') &&
      fa(
        sv ||
          (sv = ji`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),
        j3
      )
  ),
  W3 = q('span', {
    name: 'MuiLinearProgress',
    slot: 'Bar2',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t[`barColor${U(n.color)}`],
        (n.variant === 'indeterminate' || n.variant === 'query') && t.bar2Indeterminate,
        n.variant === 'buffer' && t.bar2Buffer,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      E(
        {
          width: '100%',
          position: 'absolute',
          left: 0,
          bottom: 0,
          top: 0,
          transition: 'transform 0.2s linear',
          transformOrigin: 'left',
        },
        e.variant !== 'buffer' && {
          backgroundColor:
            e.color === 'inherit' ? 'currentColor' : (t.vars || t).palette[e.color].main,
        },
        e.color === 'inherit' && { opacity: 0.3 },
        e.variant === 'buffer' && {
          backgroundColor: hh(t, e.color),
          transition: `transform .${Sf}s linear`,
        }
      ),
    ({ ownerState: e }) =>
      (e.variant === 'indeterminate' || e.variant === 'query') &&
      fa(
        av ||
          (av = ji`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),
        N3
      )
  ),
  U3 = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiLinearProgress' }),
      {
        className: o,
        color: i = 'primary',
        value: s,
        valueBuffer: a,
        variant: l = 'indeterminate',
      } = r,
      c = H(r, I3),
      u = E({}, r, { color: i, variant: l }),
      d = D3(u),
      p = dh(),
      m = {},
      x = { bar1: {}, bar2: {} };
    if ((l === 'determinate' || l === 'buffer') && s !== void 0) {
      (m['aria-valuenow'] = Math.round(s)), (m['aria-valuemin'] = 0), (m['aria-valuemax'] = 100);
      let v = s - 100;
      p && (v = -v), (x.bar1.transform = `translateX(${v}%)`);
    }
    if (l === 'buffer' && a !== void 0) {
      let v = (a || 0) - 100;
      p && (v = -v), (x.bar2.transform = `translateX(${v}%)`);
    }
    return C.jsxs(
      z3,
      E({ className: X(d.root, o), ownerState: u, role: 'progressbar' }, m, { ref: n }, c, {
        children: [
          l === 'buffer' ? C.jsx(F3, { className: d.dashed, ownerState: u }) : null,
          C.jsx(B3, { className: d.bar1, ownerState: u, style: x.bar1 }),
          l === 'determinate'
            ? null
            : C.jsx(W3, { className: d.bar2, ownerState: u, style: x.bar2 }),
        ],
      })
    );
  }),
  wf = { light: '[data-mui-color-scheme="light"] &', dark: '[data-mui-color-scheme="dark"] &' },
  Zu = {
    upXs: '@media (min-width:0px)',
    upSm: '@media (min-width:600px)',
    upMd: '@media (min-width:900px)',
    upLg: '@media (min-width:1200px)',
    upXl: '@media (min-width:1536px)',
  };
function Nx(e) {
  return `"${e}",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`;
}
function mt(e) {
  return `${e / 16}rem`;
}
function Ao({ sm: e, md: t, lg: n }) {
  return {
    [Zu.upSm]: { fontSize: mt(e) },
    [Zu.upMd]: { fontSize: mt(t) },
    [Zu.upLg]: { fontSize: mt(n) },
  };
}
function V3(e) {
  if (!/^#[0-9A-F]{6}$/i.test(e)) throw new Error(`Invalid hex color: ${e}`);
  const t = parseInt(e.substring(1, 3), 16),
    n = parseInt(e.substring(3, 5), 16),
    r = parseInt(e.substring(5, 7), 16);
  return `${t} ${n} ${r}`;
}
function Wn(e) {
  const t = {};
  return (
    Object.entries(e).forEach(([n, r]) => {
      t[`${n}Channel`] = V3(r);
    }),
    { ...e, ...t }
  );
}
function pe(e, t = 1) {
  if (
    e.startsWith('#') ||
    e.startsWith('rgb') ||
    e.startsWith('rgba') ||
    (!e.includes('var') && e.includes('Channel'))
  )
    throw new Error(`[Alpha]: Unsupported color format "${e}".
       Supported formats are:
       - RGB channels: "0 184 217".
       - CSS variables with "Channel" prefix: "var(--palette-common-blackChannel, #000000)".
       Unsupported formats are:
       - Hex: "#00B8D9".
       - RGB: "rgb(0, 184, 217)".
       - RGBA: "rgba(0, 184, 217, 1)".
       `);
  return `rgba(${e} / ${t})`;
}
function H3(e) {
  return {
    background: `linear-gradient(${e})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    color: 'transparent',
  };
}
function E_({ color: e, imgUrl: t }) {
  return t
    ? {
        background: `linear-gradient(${e}), url(${t})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }
    : { background: `linear-gradient(${e})` };
}
function Lx({ color: e, blur: t = 6, imgUrl: n }) {
  return n
    ? {
        position: 'relative',
        backgroundImage: `url(${n})`,
        '&::before': {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 9,
          content: '""',
          width: '100%',
          height: '100%',
          backdropFilter: `blur(${t}px)`,
          WebkitBackdropFilter: `blur(${t}px)`,
          backgroundColor: e,
        },
      }
    : { backdropFilter: `blur(${t}px)`, WebkitBackdropFilter: `blur(${t}px)`, backgroundColor: e };
}
const ho = {
  root: 'layout__root',
  main: 'layout__main',
  header: 'layout__header',
  content: 'layout__main__content',
  hasSidebar: 'layout__has__sidebar',
};
function G3({ sx: e, children: t, layoutQuery: n, ...r }) {
  const o = Nt(),
    i = C.jsx(le, {
      sx: {
        py: 5,
        px: 3,
        width: 1,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        maxWidth: 'var(--layout-auth-content-width)',
      },
      children: t,
    });
  return C.jsx(le, {
    component: 'main',
    className: ho.main,
    sx: {
      display: 'flex',
      flex: '1 1 auto',
      alignItems: 'center',
      flexDirection: 'column',
      p: o.spacing(3, 2, 10, 2),
      [o.breakpoints.up(n)]: { justifyContent: 'center', p: o.spacing(10, 0, 10, 0) },
      ...e,
    },
    ...r,
    children: i,
  });
}
function K3(e) {
  return he('MuiTypography', e);
}
ue('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph',
]);
const Y3 = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping',
  ],
  X3 = (e) => {
    const { align: t, gutterBottom: n, noWrap: r, paragraph: o, variant: i, classes: s } = e,
      a = {
        root: [
          'root',
          i,
          e.align !== 'inherit' && `align${U(t)}`,
          n && 'gutterBottom',
          r && 'noWrap',
          o && 'paragraph',
        ],
      };
    return ge(a, K3, s);
  },
  q3 = q('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== 'inherit' && t[`align${U(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      { margin: 0 },
      t.variant === 'inherit' && { font: 'inherit' },
      t.variant !== 'inherit' && e.typography[t.variant],
      t.align !== 'inherit' && { textAlign: t.align },
      t.noWrap && { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
      t.gutterBottom && { marginBottom: '0.35em' },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  lv = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  Q3 = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main',
  },
  Z3 = (e) => Q3[e] || e,
  St = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiTypography' }),
      o = Z3(r.color),
      i = th(E({}, r, { color: o })),
      {
        align: s = 'inherit',
        className: a,
        component: l,
        gutterBottom: c = !1,
        noWrap: u = !1,
        paragraph: d = !1,
        variant: p = 'body1',
        variantMapping: m = lv,
      } = i,
      x = H(i, Y3),
      v = E({}, i, {
        align: s,
        color: o,
        className: a,
        component: l,
        gutterBottom: c,
        noWrap: u,
        paragraph: d,
        variant: p,
        variantMapping: m,
      }),
      w = l || (d ? 'p' : m[p] || lv[p]) || 'span',
      h = X3(v);
    return C.jsx(q3, E({ as: w, ref: n, ownerState: v, className: X(h.root, a) }, x));
  });
function J3(e) {
  return he('MuiLink', e);
}
const eP = ue('MuiLink', [
    'root',
    'underlineNone',
    'underlineHover',
    'underlineAlways',
    'button',
    'focusVisible',
  ]),
  Dx = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main',
  },
  tP = (e) => Dx[e] || e,
  nP = ({ theme: e, ownerState: t }) => {
    const n = tP(t.color),
      r = xi(e, `palette.${n}`, !1) || t.color,
      o = xi(e, `palette.${n}Channel`);
    return 'vars' in e && o ? `rgba(${o} / 0.4)` : Le(r, 0.4);
  },
  rP = [
    'className',
    'color',
    'component',
    'onBlur',
    'onFocus',
    'TypographyClasses',
    'underline',
    'variant',
    'sx',
  ],
  oP = (e) => {
    const { classes: t, component: n, focusVisible: r, underline: o } = e,
      i = { root: ['root', `underline${U(o)}`, n === 'button' && 'button', r && 'focusVisible'] };
    return ge(i, J3, t);
  },
  iP = q(St, {
    name: 'MuiLink',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`underline${U(n.underline)}`], n.component === 'button' && t.button];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      {},
      t.underline === 'none' && { textDecoration: 'none' },
      t.underline === 'hover' && {
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' },
      },
      t.underline === 'always' &&
        E(
          { textDecoration: 'underline' },
          t.color !== 'inherit' && { textDecorationColor: nP({ theme: e, ownerState: t }) },
          { '&:hover': { textDecorationColor: 'inherit' } }
        ),
      t.component === 'button' && {
        position: 'relative',
        WebkitTapHighlightColor: 'transparent',
        backgroundColor: 'transparent',
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        '&::-moz-focus-inner': { borderStyle: 'none' },
        [`&.${eP.focusVisible}`]: { outline: 'auto' },
      }
    )
  ),
  sP = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiLink' }),
      {
        className: o,
        color: i = 'primary',
        component: s = 'a',
        onBlur: a,
        onFocus: l,
        TypographyClasses: c,
        underline: u = 'always',
        variant: d = 'inherit',
        sx: p,
      } = r,
      m = H(r, rP),
      { isFocusVisibleRef: x, onBlur: v, onFocus: w, ref: h } = sh(),
      [y, g] = b.useState(!1),
      k = Ve(n, h),
      $ = (O) => {
        v(O), x.current === !1 && g(!1), a && a(O);
      },
      f = (O) => {
        w(O), x.current === !0 && g(!0), l && l(O);
      },
      S = E({}, r, { color: i, component: s, focusVisible: y, underline: u, variant: d }),
      P = oP(S);
    return C.jsx(
      iP,
      E(
        {
          color: i,
          className: X(P.root, o),
          classes: c,
          component: s,
          onBlur: $,
          onFocus: f,
          ref: k,
          ownerState: S,
          variant: d,
          sx: [
            ...(Object.keys(Dx).includes(i) ? [] : [{ color: i }]),
            ...(Array.isArray(p) ? p : [p]),
          ],
        },
        m
      )
    );
  }),
  aP = [
    'className',
    'elementType',
    'ownerState',
    'externalForwardedProps',
    'getSlotOwnerState',
    'internalForwardedProps',
  ],
  lP = ['component', 'slots', 'slotProps'],
  cP = ['component'];
function kf(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: s,
      internalForwardedProps: a,
    } = t,
    l = H(t, aP),
    { component: c, slots: u = { [e]: void 0 }, slotProps: d = { [e]: void 0 } } = i,
    p = H(i, lP),
    m = u[e] || r,
    x = Ox(d[e], o),
    v = Rx(
      E({ className: n }, l, {
        externalForwardedProps: e === 'root' ? p : void 0,
        externalSlotProps: x,
      })
    ),
    {
      props: { component: w },
      internalRef: h,
    } = v,
    y = H(v.props, cP),
    g = Ve(h, x == null ? void 0 : x.ref, t.ref),
    k = s ? s(y) : {},
    $ = E({}, o, k),
    f = e === 'root' ? w || c : w,
    S = Jo(
      m,
      E({}, e === 'root' && !c && !u[e] && a, e !== 'root' && !u[e] && a, y, f && { as: f }, {
        ref: g,
      }),
      $
    );
  return (
    Object.keys(k).forEach((P) => {
      delete S[P];
    }),
    [m, S]
  );
}
function uP(e) {
  return he('MuiPaper', e);
}
ue('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24',
]);
const dP = ['className', 'component', 'elevation', 'square', 'variant'],
  fP = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = { root: ['root', r, !t && 'rounded', r === 'elevation' && `elevation${n}`] };
    return ge(i, uP, o);
  },
  pP = q('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === 'elevation' && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return E(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create('box-shadow'),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === 'outlined' && { border: `1px solid ${(e.vars || e).palette.divider}` },
      t.variant === 'elevation' &&
        E(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === 'dark' && {
              backgroundImage: `linear-gradient(${Le('#fff', Cf(t.elevation))}, ${Le('#fff', Cf(t.elevation))})`,
            },
          e.vars && { backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation] }
        )
    );
  }),
  iu = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiPaper' }),
      {
        className: o,
        component: i = 'div',
        elevation: s = 1,
        square: a = !1,
        variant: l = 'elevation',
      } = r,
      c = H(r, dP),
      u = E({}, r, { component: i, elevation: s, square: a, variant: l }),
      d = fP(u);
    return C.jsx(pP, E({ as: i, ownerState: u, className: X(d.root, o), ref: n }, c));
  });
function hP(e) {
  return he('MuiAlert', e);
}
const cv = ue('MuiAlert', [
  'root',
  'action',
  'icon',
  'message',
  'filled',
  'colorSuccess',
  'colorInfo',
  'colorWarning',
  'colorError',
  'filledSuccess',
  'filledInfo',
  'filledWarning',
  'filledError',
  'outlined',
  'outlinedSuccess',
  'outlinedInfo',
  'outlinedWarning',
  'outlinedError',
  'standard',
  'standardSuccess',
  'standardInfo',
  'standardWarning',
  'standardError',
]);
function mP(e) {
  return he('MuiIconButton', e);
}
const gP = ue('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
  ]),
  vP = ['edge', 'children', 'className', 'color', 'disabled', 'disableFocusRipple', 'size'],
  yP = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      s = {
        root: [
          'root',
          n && 'disabled',
          r !== 'default' && `color${U(r)}`,
          o && `edge${U(o)}`,
          `size${U(i)}`,
        ],
      };
    return ge(s, mP, t);
  },
  xP = q(wo, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== 'default' && t[`color${U(n.color)}`],
        n.edge && t[`edge${U(n.edge)}`],
        t[`size${U(n.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      E(
        {
          textAlign: 'center',
          flex: '0 0 auto',
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: '50%',
          overflow: 'visible',
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create('background-color', {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          '&:hover': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Le(e.palette.action.active, e.palette.action.hoverOpacity),
            '@media (hover: none)': { backgroundColor: 'transparent' },
          },
        },
        t.edge === 'start' && { marginLeft: t.size === 'small' ? -3 : -12 },
        t.edge === 'end' && { marginRight: t.size === 'small' ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) => {
      var n;
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
      return E(
        {},
        t.color === 'inherit' && { color: 'inherit' },
        t.color !== 'inherit' &&
          t.color !== 'default' &&
          E(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              '&:hover': E(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Le(r.main, e.palette.action.hoverOpacity),
                },
                { '@media (hover: none)': { backgroundColor: 'transparent' } }
              ),
            }
          ),
        t.size === 'small' && { padding: 5, fontSize: e.typography.pxToRem(18) },
        t.size === 'large' && { padding: 12, fontSize: e.typography.pxToRem(28) },
        {
          [`&.${gP.disabled}`]: {
            backgroundColor: 'transparent',
            color: (e.vars || e).palette.action.disabled,
          },
        }
      );
    }
  ),
  mo = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiIconButton' }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: a = 'default',
        disabled: l = !1,
        disableFocusRipple: c = !1,
        size: u = 'medium',
      } = r,
      d = H(r, vP),
      p = E({}, r, { edge: o, color: a, disabled: l, disableFocusRipple: c, size: u }),
      m = yP(p);
    return C.jsx(
      xP,
      E({ className: X(m.root, s), centerRipple: !0, focusRipple: !c, disabled: l, ref: n }, d, {
        ownerState: p,
        children: i,
      })
    );
  });
function bP(e) {
  return he('MuiSvgIcon', e);
}
ue('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);
const CP = [
    'children',
    'className',
    'color',
    'component',
    'fontSize',
    'htmlColor',
    'inheritViewBox',
    'titleAccess',
    'viewBox',
  ],
  SP = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = { root: ['root', t !== 'inherit' && `color${U(t)}`, `fontSize${U(n)}`] };
    return ge(o, bP, r);
  },
  wP = q('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== 'inherit' && t[`color${U(n.color)}`],
        t[`fontSize${U(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, a, l, c, u, d, p, m, x;
    return {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: t.hasSvgAsChild ? void 0 : 'currentColor',
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, 'fill', {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter,
            }),
      fontSize: {
        inherit: 'inherit',
        small:
          ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) ||
          '1.25rem',
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null ? void 0 : l.call(a, 24)) ||
          '1.5rem',
        large:
          ((c = e.typography) == null || (u = c.pxToRem) == null ? void 0 : u.call(c, 35)) ||
          '2.1875rem',
      }[t.fontSize],
      color:
        (d = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) !=
        null
          ? d
          : {
              action:
                (m = (e.vars || e).palette) == null || (m = m.action) == null ? void 0 : m.active,
              disabled:
                (x = (e.vars || e).palette) == null || (x = x.action) == null ? void 0 : x.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Jn = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiSvgIcon' }),
      {
        children: o,
        className: i,
        color: s = 'inherit',
        component: a = 'svg',
        fontSize: l = 'medium',
        htmlColor: c,
        inheritViewBox: u = !1,
        titleAccess: d,
        viewBox: p = '0 0 24 24',
      } = r,
      m = H(r, CP),
      x = b.isValidElement(o) && o.type === 'svg',
      v = E({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: u,
        viewBox: p,
        hasSvgAsChild: x,
      }),
      w = {};
    u || (w.viewBox = p);
    const h = SP(v);
    return C.jsxs(
      wP,
      E(
        {
          as: a,
          className: X(h.root, i),
          focusable: 'false',
          color: c,
          'aria-hidden': d ? void 0 : !0,
          role: d ? 'img' : void 0,
          ref: n,
        },
        w,
        m,
        x && o.props,
        {
          ownerState: v,
          children: [x ? o.props.children : o, d ? C.jsx('title', { children: d }) : null],
        }
      )
    );
  });
Jn.muiName = 'SvgIcon';
function Ni(e, t) {
  function n(r, o) {
    return C.jsx(Jn, E({ 'data-testid': `${t}Icon`, ref: o }, r, { children: e }));
  }
  return (n.muiName = Jn.muiName), b.memo(b.forwardRef(n));
}
const kP = Ni(
    C.jsx('path', {
      d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
    }),
    'SuccessOutlined'
  ),
  EP = Ni(
    C.jsx('path', {
      d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
    }),
    'ReportProblemOutlined'
  ),
  $P = Ni(
    C.jsx('path', {
      d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
    'ErrorOutline'
  ),
  PP = Ni(
    C.jsx('path', {
      d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
    }),
    'InfoOutlined'
  ),
  TP = Ni(
    C.jsx('path', {
      d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
    'Close'
  ),
  RP = [
    'action',
    'children',
    'className',
    'closeText',
    'color',
    'components',
    'componentsProps',
    'icon',
    'iconMapping',
    'onClose',
    'role',
    'severity',
    'slotProps',
    'slots',
    'variant',
  ],
  OP = (e) => {
    const { variant: t, color: n, severity: r, classes: o } = e,
      i = {
        root: ['root', `color${U(n || r)}`, `${t}${U(n || r)}`, `${t}`],
        icon: ['icon'],
        message: ['message'],
        action: ['action'],
      };
    return ge(i, hP, o);
  },
  MP = q(iu, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], t[`${n.variant}${U(n.color || n.severity)}`]];
    },
  })(({ theme: e }) => {
    const t = e.palette.mode === 'light' ? ec : tc,
      n = e.palette.mode === 'light' ? tc : ec;
    return E({}, e.typography.body2, {
      backgroundColor: 'transparent',
      display: 'flex',
      padding: '6px 16px',
      variants: [
        ...Object.entries(e.palette)
          .filter(([, r]) => r.main && r.light)
          .map(([r]) => ({
            props: { colorSeverity: r, variant: 'standard' },
            style: {
              color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
              backgroundColor: e.vars
                ? e.vars.palette.Alert[`${r}StandardBg`]
                : n(e.palette[r].light, 0.9),
              [`& .${cv.icon}`]: e.vars
                ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                : { color: e.palette[r].main },
            },
          })),
        ...Object.entries(e.palette)
          .filter(([, r]) => r.main && r.light)
          .map(([r]) => ({
            props: { colorSeverity: r, variant: 'outlined' },
            style: {
              color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
              border: `1px solid ${(e.vars || e).palette[r].light}`,
              [`& .${cv.icon}`]: e.vars
                ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                : { color: e.palette[r].main },
            },
          })),
        ...Object.entries(e.palette)
          .filter(([, r]) => r.main && r.dark)
          .map(([r]) => ({
            props: { colorSeverity: r, variant: 'filled' },
            style: E(
              { fontWeight: e.typography.fontWeightMedium },
              e.vars
                ? {
                    color: e.vars.palette.Alert[`${r}FilledColor`],
                    backgroundColor: e.vars.palette.Alert[`${r}FilledBg`],
                  }
                : {
                    backgroundColor:
                      e.palette.mode === 'dark' ? e.palette[r].dark : e.palette[r].main,
                    color: e.palette.getContrastText(e.palette[r].main),
                  }
            ),
          })),
      ],
    });
  }),
  AP = q('div', { name: 'MuiAlert', slot: 'Icon', overridesResolver: (e, t) => t.icon })({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9,
  }),
  _P = q('div', { name: 'MuiAlert', slot: 'Message', overridesResolver: (e, t) => t.message })({
    padding: '8px 0',
    minWidth: 0,
    overflow: 'auto',
  }),
  uv = q('div', { name: 'MuiAlert', slot: 'Action', overridesResolver: (e, t) => t.action })({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8,
  }),
  dv = {
    success: C.jsx(kP, { fontSize: 'inherit' }),
    warning: C.jsx(EP, { fontSize: 'inherit' }),
    error: C.jsx($P, { fontSize: 'inherit' }),
    info: C.jsx(PP, { fontSize: 'inherit' }),
  },
  zx = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiAlert' }),
      {
        action: o,
        children: i,
        className: s,
        closeText: a = 'Close',
        color: l,
        components: c = {},
        componentsProps: u = {},
        icon: d,
        iconMapping: p = dv,
        onClose: m,
        role: x = 'alert',
        severity: v = 'success',
        slotProps: w = {},
        slots: h = {},
        variant: y = 'standard',
      } = r,
      g = H(r, RP),
      k = E({}, r, { color: l, severity: v, variant: y, colorSeverity: l || v }),
      $ = OP(k),
      f = {
        slots: E({ closeButton: c.CloseButton, closeIcon: c.CloseIcon }, h),
        slotProps: E({}, u, w),
      },
      [S, P] = kf('closeButton', { elementType: mo, externalForwardedProps: f, ownerState: k }),
      [O, R] = kf('closeIcon', { elementType: TP, externalForwardedProps: f, ownerState: k });
    return C.jsxs(
      MP,
      E({ role: x, elevation: 0, ownerState: k, className: X($.root, s), ref: n }, g, {
        children: [
          d !== !1
            ? C.jsx(AP, { ownerState: k, className: $.icon, children: d || p[v] || dv[v] })
            : null,
          C.jsx(_P, { ownerState: k, className: $.message, children: i }),
          o != null ? C.jsx(uv, { ownerState: k, className: $.action, children: o }) : null,
          o == null && m
            ? C.jsx(uv, {
                ownerState: k,
                className: $.action,
                children: C.jsx(
                  S,
                  E({ size: 'small', 'aria-label': a, title: a, color: 'inherit', onClick: m }, P, {
                    children: C.jsx(O, E({ fontSize: 'small' }, R)),
                  })
                ),
              })
            : null,
        ],
      })
    );
  }),
  mh = b.forwardRef(({ href: e, ...t }, n) => C.jsx(Kw, { ref: n, to: e, ...t })),
  IP = { root: 'mnl__logo__root' },
  Fx = b.forwardRef(
    (
      {
        width: e,
        href: t = '/',
        height: n,
        isSingle: r = !0,
        disableLink: o = !1,
        className: i,
        sx: s,
        ...a
      },
      l
    ) => {
      const c = Nt(),
        u = b.useId(),
        d = c.vars.palette.text.primary,
        p = c.vars.palette.primary.light,
        m = c.vars.palette.primary.main,
        x = c.vars.palette.primary.dark,
        v = C.jsxs('svg', {
          width: '100%',
          height: '100%',
          viewBox: '0 0 512 512',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            C.jsx('path', {
              fill: `url(#${`${u}-1`})`,
              d: 'M86.352 246.358C137.511 214.183 161.836 245.017 183.168 285.573C165.515 317.716 153.837 337.331 148.132 344.418C137.373 357.788 125.636 367.911 111.202 373.752C80.856 388.014 43.132 388.681 14 371.048L86.352 246.358Z',
            }),
            C.jsx('path', {
              fill: `url(#${`${u}-2`})`,
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M444.31 229.726C398.04 148.77 350.21 72.498 295.267 184.382C287.751 198.766 282.272 226.719 270 226.719V226.577C257.728 226.577 252.251 198.624 244.735 184.24C189.79 72.356 141.96 148.628 95.689 229.584C92.207 235.69 88.862 241.516 86 246.58C192.038 179.453 183.11 382.247 270 383.858V384C356.891 382.389 347.962 179.595 454 246.72C451.139 241.658 447.794 235.832 444.31 229.726Z',
            }),
            C.jsx('path', {
              fill: `url(#${`${u}-3`})`,
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M450 384C476.509 384 498 362.509 498 336C498 309.491 476.509 288 450 288C423.491 288 402 309.491 402 336C402 362.509 423.491 384 450 384Z',
            }),
            C.jsxs('defs', {
              children: [
                C.jsxs('linearGradient', {
                  id: `${u}-1`,
                  x1: '152',
                  y1: '167.79',
                  x2: '65.523',
                  y2: '259.624',
                  gradientUnits: 'userSpaceOnUse',
                  children: [
                    C.jsx('stop', { stopColor: x }),
                    C.jsx('stop', { offset: '1', stopColor: m }),
                  ],
                }),
                C.jsxs('linearGradient', {
                  id: `${u}-2`,
                  x1: '86',
                  y1: '128',
                  x2: '86',
                  y2: '384',
                  gradientUnits: 'userSpaceOnUse',
                  children: [
                    C.jsx('stop', { stopColor: p }),
                    C.jsx('stop', { offset: '1', stopColor: m }),
                  ],
                }),
                C.jsxs('linearGradient', {
                  id: `${u}-3`,
                  x1: '402',
                  y1: '288',
                  x2: '402',
                  y2: '384',
                  gradientUnits: 'userSpaceOnUse',
                  children: [
                    C.jsx('stop', { stopColor: p }),
                    C.jsx('stop', { offset: '1', stopColor: m }),
                  ],
                }),
              ],
            }),
          ],
        }),
        w = C.jsxs('svg', {
          width: '100%',
          height: '100%',
          viewBox: '0 0 360 128',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            C.jsx('path', {
              fill: `url(#${`${u}-1`})`,
              d: 'M21.588 61.59C34.378 53.546 40.458 61.254 45.792 71.393C41.379 79.429 38.459 84.333 37.032 86.105C34.343 89.447 31.409 91.978 27.8 93.438C20.214 97.004 10.783 97.17 3.5 92.762L21.588 61.59Z',
            }),
            C.jsx('path', {
              fill: `url(#${`${u}-2`})`,
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M111.078 57.431C99.51 37.194 87.552 18.124 73.817 46.096C71.937 49.69 70.568 56.68 67.5 56.68V56.644C64.432 56.644 63.063 49.656 61.184 46.06C47.448 18.09 35.49 37.157 23.922 57.396C23.052 58.922 22.216 60.379 21.5 61.645C48.01 44.863 45.778 95.562 67.5 95.965V96C89.223 95.597 86.99 44.899 113.5 61.68C112.785 60.414 111.949 58.957 111.078 57.431Z',
            }),
            C.jsx('path', {
              fill: `url(#${`${u}-3`})`,
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M112.5 96C119.127 96 124.5 90.627 124.5 84C124.5 77.373 119.127 72 112.5 72C105.873 72 100.5 77.373 100.5 84C100.5 90.627 105.873 96 112.5 96Z',
            }),
            C.jsx('path', {
              fill: d,
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M146.031 45.215C149.553 45.215 152.103 42.825 152.103 39.587C152.103 36.348 149.553 34 146.031 34C142.591 34 140 36.348 140 39.587C140 42.826 142.591 45.215 146.031 45.215ZM146.031 93.838C149.351 93.838 151.374 91.854 151.374 87.968V55.984C151.374 52.097 149.351 50.073 146.072 50.073C142.753 50.073 140.729 52.097 140.729 55.983V87.968C140.729 91.814 142.753 93.838 146.031 93.838ZM200.394 88.008C200.394 91.773 198.491 93.838 195.091 93.838C191.65 93.838 189.748 91.733 189.748 87.968V67.563C189.748 61.935 186.955 58.777 182.017 58.777C176.471 58.777 172.99 62.867 172.99 69.547V87.967C172.99 91.733 171.047 93.838 167.647 93.838C164.247 93.838 162.304 91.733 162.304 87.968V55.78C162.304 52.258 164.328 50.072 167.566 50.072C170.764 50.072 172.626 51.975 172.747 55.416V58.048H173.273C174.933 52.946 179.75 49.788 186.064 49.788C195.213 49.788 200.394 55.214 200.394 64.647V88.008ZM216.302 45.215C219.823 45.215 222.374 42.825 222.374 39.587C222.374 36.348 219.823 34 216.302 34C212.861 34 210.27 36.348 210.27 39.587C210.27 42.826 212.861 45.215 216.302 45.215ZM221.645 87.968C221.645 91.854 219.621 93.838 216.302 93.838C213.023 93.838 210.999 91.814 210.999 87.968V55.984C210.999 52.097 213.023 50.073 216.342 50.073C219.621 50.073 221.645 52.097 221.645 55.983V87.968ZM289.001 93.838C292.401 93.838 294.344 91.773 294.344 87.968V63.433C294.344 54.931 289.163 49.789 280.5 49.789C274.307 49.789 269.45 52.907 267.588 57.887H267.102C265.685 52.867 261.314 49.789 255.282 49.789C249.454 49.789 244.96 52.785 243.544 57.603H243.017V55.58C242.856 52.139 240.953 50.074 237.836 50.074C234.598 50.074 232.574 52.26 232.574 55.823V87.969C232.574 91.774 234.517 93.839 237.917 93.839C241.317 93.839 243.26 91.774 243.26 87.969V67.199C243.26 61.977 246.296 58.616 250.83 58.616C255.444 58.616 258.318 61.734 258.318 66.835V87.969C258.318 91.774 260.14 93.839 263.459 93.839C266.819 93.839 268.64 91.774 268.64 87.969V67.239C268.64 62.058 271.757 58.616 276.331 58.616C280.946 58.616 283.698 61.531 283.698 66.633V87.969C283.698 91.774 285.601 93.838 289.001 93.838ZM328.265 87.968C326.079 91.814 321.829 94 316.567 94C308.188 94 302.521 88.737 302.521 80.923C302.521 72.988 308.39 68.089 318.145 68.089H328.346V64.567C328.346 60.235 325.634 57.967 320.736 57.967C317.498 57.967 315.19 59.182 312.802 61.327C311.588 62.3 310.454 62.745 308.714 62.745C306.366 62.745 304.909 61.166 304.909 58.98C304.909 56.47 306.65 53.919 310.414 52.016C313.126 50.599 316.729 49.789 321.424 49.789C332.677 49.789 338.992 55.134 338.992 64.648V88.13C338.992 91.773 337.13 93.838 333.811 93.838C330.977 93.838 329.115 92.259 328.791 89.466V87.968H328.265ZM320.129 86.308C315.96 86.308 313.126 83.838 313.126 80.275C313.126 76.753 315.717 74.648 320.088 74.648H328.346V79.1C328.346 83.149 324.743 86.308 320.129 86.308ZM360 87.968C360 91.854 357.936 93.838 354.657 93.838C351.338 93.838 349.314 91.854 349.314 87.968V40.842C349.314 36.956 351.338 34.932 354.657 34.932C357.936 34.932 360 36.955 360 40.842V87.968Z',
            }),
            C.jsxs('defs', {
              children: [
                C.jsxs('linearGradient', {
                  id: `${u}-1`,
                  x1: '38',
                  y1: '41.9469',
                  x2: '16.381',
                  y2: '64.906',
                  gradientUnits: 'userSpaceOnUse',
                  children: [
                    C.jsx('stop', { stopColor: x }),
                    C.jsx('stop', { offset: '1', stopColor: m }),
                  ],
                }),
                C.jsxs('linearGradient', {
                  id: `${u}-2`,
                  x1: '21.5',
                  y1: '32',
                  x2: '21.5',
                  y2: '96',
                  gradientUnits: 'userSpaceOnUse',
                  children: [
                    C.jsx('stop', { stopColor: p }),
                    C.jsx('stop', { offset: '1', stopColor: m }),
                  ],
                }),
                C.jsxs('linearGradient', {
                  id: `${u}-3`,
                  x1: '100.5',
                  y1: '72',
                  x2: '100.5',
                  y2: '96',
                  gradientUnits: 'userSpaceOnUse',
                  children: [
                    C.jsx('stop', { stopColor: p }),
                    C.jsx('stop', { offset: '1', stopColor: m }),
                  ],
                }),
              ],
            }),
          ],
        }),
        h = { width: e ?? 40, height: n ?? 40, ...(!r && { width: e ?? 102, height: n ?? 36 }) };
      return C.jsx(le, {
        ref: l,
        component: mh,
        href: t,
        className: IP.root.concat(i ? ` ${i}` : ''),
        'aria-label': 'Logo',
        sx: {
          ...h,
          flexShrink: 0,
          display: 'inline-flex',
          verticalAlign: 'middle',
          ...(o && { pointerEvents: 'none' }),
          ...s,
        },
        ...a,
        children: r ? v : w,
      });
    }
  );
function jP(e) {
  return he('MuiAppBar', e);
}
ue('MuiAppBar', [
  'root',
  'positionFixed',
  'positionAbsolute',
  'positionSticky',
  'positionStatic',
  'positionRelative',
  'colorDefault',
  'colorPrimary',
  'colorSecondary',
  'colorInherit',
  'colorTransparent',
  'colorError',
  'colorInfo',
  'colorSuccess',
  'colorWarning',
]);
const NP = ['className', 'color', 'enableColorOnDark', 'position'],
  LP = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ['root', `color${U(t)}`, `position${U(n)}`] };
    return ge(o, jP, r);
  },
  Ha = (e, t) => (e ? `${e == null ? void 0 : e.replace(')', '')}, ${t})` : t),
  DP = q(iu, {
    name: 'MuiAppBar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${U(n.position)}`], t[`color${U(n.color)}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === 'light' ? e.palette.grey[100] : e.palette.grey[900];
    return E(
      {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        flexShrink: 0,
      },
      t.position === 'fixed' && {
        position: 'fixed',
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0,
        '@media print': { position: 'absolute' },
      },
      t.position === 'absolute' && {
        position: 'absolute',
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0,
      },
      t.position === 'sticky' && {
        position: 'sticky',
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0,
      },
      t.position === 'static' && { position: 'static' },
      t.position === 'relative' && { position: 'relative' },
      !e.vars &&
        E(
          {},
          t.color === 'default' && { backgroundColor: n, color: e.palette.getContrastText(n) },
          t.color &&
            t.color !== 'default' &&
            t.color !== 'inherit' &&
            t.color !== 'transparent' && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.color === 'inherit' && { color: 'inherit' },
          e.palette.mode === 'dark' &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === 'transparent' &&
            E(
              { backgroundColor: 'transparent', color: 'inherit' },
              e.palette.mode === 'dark' && { backgroundImage: 'none' }
            )
        ),
      e.vars &&
        E(
          {},
          t.color === 'default' && {
            '--AppBar-background': t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : Ha(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
            '--AppBar-color': t.enableColorOnDark
              ? e.vars.palette.text.primary
              : Ha(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary),
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              '--AppBar-background': t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : Ha(e.vars.palette.AppBar.darkBg, e.vars.palette[t.color].main),
              '--AppBar-color': t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : Ha(e.vars.palette.AppBar.darkColor, e.vars.palette[t.color].contrastText),
            },
          !['inherit', 'transparent'].includes(t.color) && {
            backgroundColor: 'var(--AppBar-background)',
          },
          { color: t.color === 'inherit' ? 'inherit' : 'var(--AppBar-color)' },
          t.color === 'transparent' && {
            backgroundImage: 'none',
            backgroundColor: 'transparent',
            color: 'inherit',
          }
        )
    );
  }),
  zP = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiAppBar' }),
      { className: o, color: i = 'primary', enableColorOnDark: s = !1, position: a = 'fixed' } = r,
      l = H(r, NP),
      c = E({}, r, { color: i, position: a, enableColorOnDark: s }),
      u = LP(c);
    return C.jsx(
      DP,
      E(
        {
          square: !0,
          component: 'header',
          ownerState: c,
          elevation: 4,
          className: X(u.root, o, a === 'fixed' && 'mui-fixed'),
          ref: n,
        },
        l
      )
    );
  });
function FP(e) {
  return he('MuiToolbar', e);
}
ue('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const BP = ['className', 'component', 'disableGutters', 'variant'],
  WP = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return ge({ root: ['root', !n && 'gutters', r] }, FP, t);
  },
  UP = q('div', {
    name: 'MuiToolbar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      E(
        { position: 'relative', display: 'flex', alignItems: 'center' },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up('sm')]: { paddingLeft: e.spacing(3), paddingRight: e.spacing(3) },
        },
        t.variant === 'dense' && { minHeight: 48 }
      ),
    ({ theme: e, ownerState: t }) => t.variant === 'regular' && e.mixins.toolbar
  ),
  VP = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiToolbar' }),
      { className: o, component: i = 'div', disableGutters: s = !1, variant: a = 'regular' } = r,
      l = H(r, BP),
      c = E({}, r, { component: i, disableGutters: s, variant: a }),
      u = WP(c);
    return C.jsx(UP, E({ as: i, className: X(u.root, o), ref: n, ownerState: c }, l));
  }),
  Bx = J$({
    createStyledComponent: q('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${U(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => ce({ props: e, name: 'MuiContainer' }),
  });
function Wx({ sx: e, slots: t, slotProps: n, layoutQuery: r = 'md', ...o }) {
  var a, l;
  const i = Nt(),
    s = {
      default: {
        ...Lx({ color: pe(i.vars.palette.background.defaultChannel, 0.8) }),
        minHeight: 'auto',
        height: 'var(--layout-header-mobile-height)',
        transition: i.transitions.create(['height', 'background-color'], {
          easing: i.transitions.easing.easeInOut,
          duration: i.transitions.duration.shorter,
        }),
        [i.breakpoints.up('sm')]: { minHeight: 'auto' },
        [i.breakpoints.up(r)]: { height: 'var(--layout-header-desktop-height)' },
      },
    };
  return C.jsxs(zP, {
    position: 'sticky',
    color: 'transparent',
    className: ho.header,
    sx: { boxShadow: 'none', zIndex: 'var(--layout-header-zIndex)', ...e },
    ...o,
    children: [
      t == null ? void 0 : t.topArea,
      C.jsx(VP, {
        disableGutters: !0,
        ...(n == null ? void 0 : n.toolbar),
        sx: { ...s.default, ...((a = n == null ? void 0 : n.toolbar) == null ? void 0 : a.sx) },
        children: C.jsxs(Bx, {
          ...(n == null ? void 0 : n.container),
          sx: {
            height: 1,
            display: 'flex',
            alignItems: 'center',
            ...((l = n == null ? void 0 : n.container) == null ? void 0 : l.sx),
          },
          children: [
            t == null ? void 0 : t.leftArea,
            C.jsx(le, {
              sx: { display: 'flex', flex: '1 1 auto', justifyContent: 'center' },
              children: t == null ? void 0 : t.centerArea,
            }),
            t == null ? void 0 : t.rightArea,
          ],
        }),
      }),
      t == null ? void 0 : t.bottomArea,
    ],
  });
}
function gh(e) {
  return C.jsx(l$, E({}, e, { defaultTheme: ih, themeId: ga }));
}
const HP = (e) => ({
  '--layout-nav-bg': e.vars.palette.common.white,
  '--layout-nav-border-color': pe(e.vars.palette.grey['500Channel'], 0.08),
  '--layout-nav-zIndex': 1101,
  '--layout-nav-mobile-width': '320px',
  '--layout-nav-item-height': '44px',
  '--layout-nav-item-color': e.vars.palette.text.secondary,
  '--layout-nav-item-active-color': e.vars.palette.primary.main,
  '--layout-nav-item-active-bg': pe(e.vars.palette.primary.mainChannel, 0.08),
  '--layout-nav-item-hover-bg': pe(e.vars.palette.primary.mainChannel, 0.16),
  '--layout-header-blur': '8px',
  '--layout-header-zIndex': 1100,
  '--layout-header-mobile-height': '64px',
  '--layout-header-desktop-height': '72px',
});
function Ux({
  sx: e,
  cssVars: t,
  children: n,
  footerSection: r,
  headerSection: o,
  sidebarSection: i,
}) {
  const s = Nt(),
    a = C.jsx(gh, { styles: { body: { ...HP(s), ...t } } });
  return C.jsxs(C.Fragment, {
    children: [
      a,
      C.jsxs(le, {
        id: 'root__layout',
        className: ho.root,
        sx: e,
        children: [
          i,
          C.jsxs(le, {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            className: ho.hasSidebar,
            children: [o, n, r],
          }),
        ],
      }),
    ],
  });
}
function GP({ sx: e, children: t, header: n }) {
  const r = 'md';
  return C.jsx(Ux, {
    headerSection: C.jsx(Wx, {
      layoutQuery: r,
      slotProps: {
        container: { maxWidth: !1 },
        toolbar: { sx: { bgcolor: 'transparent', backdropFilter: 'unset' } },
      },
      sx: { position: { [r]: 'fixed' }, ...(n == null ? void 0 : n.sx) },
      slots: {
        topArea: C.jsx(zx, {
          severity: 'info',
          sx: { display: 'none', borderRadius: 0 },
          children: 'This is an info Alert.',
        }),
        leftArea: C.jsx(Fx, {}),
        rightArea: C.jsx(sP, {
          component: mh,
          href: '#',
          color: 'inherit',
          sx: { typography: 'subtitle2' },
          children: 'Need help?',
        }),
      },
    }),
    footerSection: null,
    cssVars: { '--layout-auth-content-width': '420px' },
    sx: {
      '&::before': {
        width: 1,
        height: 1,
        zIndex: -1,
        content: "''",
        opacity: 0.24,
        position: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: 'url(/assets/background/overlay.jpg)',
        [wf.dark]: { opacity: 0.08 },
      },
      ...e,
    },
    children: C.jsx(G3, { layoutQuery: r, children: t }),
  });
}
function KP({ children: e, sx: t, ...n }) {
  return C.jsx(le, {
    component: 'main',
    className: ho.main,
    sx: { display: 'flex', flex: '1 1 auto', flexDirection: 'column', ...t },
    ...n,
    children: e,
  });
}
function $_({ sx: e, children: t, disablePadding: n, maxWidth: r = 'xl', ...o }) {
  const i = Nt();
  return C.jsx(Bx, {
    className: ho.content,
    maxWidth: r || !1,
    sx: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
      pt: 'var(--layout-dashboard-content-pt)',
      pb: 'var(--layout-dashboard-content-pb)',
      [i.breakpoints.up('lg')]: { px: 'var(--layout-dashboard-content-px)' },
      ...(n && { p: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 } }),
      ...e,
    },
    ...o,
    children: t,
  });
}
const jn = (e) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${e}`,
  Xr = (e) =>
    [
      '11/08/2023',
      '04/09/2024',
      '09/12/2023',
      '01/01/2024',
      '04/23/2024',
      '02/29/2024',
      '05/14/2024',
      '01/13/2024',
      '06/22/2024',
      '10/05/2023',
      '07/11/2024',
      '05/22/2024',
      '03/29/2024',
      '08/29/2023',
      '11/19/2023',
      '10/24/2023',
      '12/02/2023',
      '02/13/2024',
      '09/19/2023',
      '04/17/2024',
      '12/18/2023',
      '06/27/2024',
      '10/19/2023',
      '08/09/2024',
    ][e],
  vh = (e) =>
    [
      'Billy Stoltenberg',
      'Eloise Ebert',
      'Teresa Luettgen',
      'Salvador Mayert',
      'Dr. Guadalupe Rath',
      'Kelvin Pouros',
      'Thelma Langworth',
      'Kristen Wunsch',
      'Steve Welch',
      'Brian Jacobs',
      'Lillie Schultz',
      'Mr. Conrad Spinka',
      'Charlene Krajcik',
      'Kerry Kuhlman',
      'Betty Hammes',
      'Tony Paucek PhD',
      'Sherri Davis',
      'Angel Rolfson-Kulas',
      'Dr. Lee Doyle-Grant',
      'Cheryl Romaguera',
      'Billy Braun',
      'Adam Trantow',
      'Brandon Von',
      'Willis Ankunding',
    ][e],
  fv = (e) =>
    [
      35.17, 57.22, 64.78, 50.79, 9.57, 61.46, 96.73, 63.04, 33.18, 36.3, 54.42, 20.52, 62.82,
      19.96, 25.93, 70.39, 23.11, 67.23, 14.31, 31.5, 26.72, 44.8, 37.87, 75.53,
    ][e],
  YP = (e) =>
    [
      'Medhurst, Moore and Franey',
      'Hahn, Homenick and Lind',
      'Larkin LLC',
      'Stamm, Larson and Mertz',
      'Spencer, Raynor and Langosh',
      'Lehner - Feeney',
      'Leuschke, Harris and Kuhlman',
      'Gutmann - Kassulke',
      'Turcotte - Runolfsson',
      'Howe - Anderson',
      'Sipes - Yost',
      'Johns - Aufderhar',
      'Schmidt LLC',
      'Smitham - Gerlach',
      'Waelchi - VonRueden',
      'Padberg - Macejkovic',
      'Lemke - Ferry',
      'Koch and Sons',
      'Klein - Rolfson',
      'Weimann LLC',
      'White, Cassin and Goldner',
      'Mohr, Langworth and Hills',
      'Mitchell, Volkman and Prosacco',
      'Streich Group',
    ][e],
  XP = (e) =>
    [
      !0,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !1,
      !0,
      !1,
      !1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !0,
      !1,
    ][e],
  qP = (e) =>
    [
      'Whiteboard Templates By Industry Leaders',
      'Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!',
      'Designify Agency Landing Page Design',
      '✨What is Done is Done ✨',
      'Fresh Prince',
      'Six Socks Studio',
      'vincenzo de cotiis’ crossing over showcases a research on contamination',
      'Simple, Great Looking Animations in Your Project | Video Tutorial',
      '40 Free Serif Fonts for Digital Designers',
      'Examining the Evolution of the Typical Web Design Client',
      'Katie Griffin loves making that homey art',
      'The American Dream retold through mid-century railroad graphics',
      'Illustration System Design',
      'CarZio-Delivery Driver App SignIn/SignUp',
      'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
      'Tylko Organise effortlessly -3D & Motion Design',
      'RAYO ?? A expanded visual arts festival identity',
      'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
      'Inside the Mind of Samuel Day',
      'Portfolio Review: Is This Portfolio Too Creative?',
      'Akkers van Margraten',
      'Gradient Ticket icon',
      'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
      'How to Animate a SVG with border-image',
    ][e],
  QP = (e) =>
    [
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      'The Football Is Good For Training And Recreational Purposes',
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      'The Football Is Good For Training And Recreational Purposes',
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    ][e],
  ZP = (e) =>
    [
      'Prepare Monthly Financial Report',
      'Design New Marketing Campaign',
      'Analyze Customer Feedback',
      'Update Website Content',
      'Conduct Market Research',
      'Develop Software Application',
      'Organize Team Meeting',
      'Create Social Media Posts',
      'Review Project Plan',
      'Implement Security Protocols',
      'Write Technical Documentation',
      'Test New Product Features',
      'Manage Client Inquiries',
      'Train New Employees',
      'Coordinate Logistics',
      'Monitor Network Performance',
      'Develop Training Materials',
      'Draft Press Release',
      'Prepare Budget Proposal',
      'Evaluate Vendor Proposals',
      'Perform Data Analysis',
      'Conduct Quality Assurance',
      'Plan Event Logistics',
      'Optimize SEO Strategies',
    ][e],
  JP = (e) =>
    [
      'Nike Air Force 1 NDESTRUKT',
      'Nike Space Hippie 04',
      'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
      'Nike Blazer Low 77 Vintage',
      'Nike ZoomX SuperRep Surge',
      'Zoom Freak 2',
      'Nike Air Max Zephyr',
      'Jordan Delta',
      'Air Jordan XXXV PF',
      'Nike Waffle Racer Crater',
      'Kyrie 7 EP Sisterhood',
      'Nike Air Zoom BB NXT',
      'Nike Air Force 1 07 LX',
      'Nike Air Force 1 Shadow SE',
      'Nike Air Zoom Tempo NEXT%',
      'Nike DBreak-Type',
      'Nike Air Max Up',
      'Nike Air Max 270 React ENG',
      'NikeCourt Royale',
      'Nike Air Zoom Pegasus 37 Premium',
      'Nike Air Zoom SuperRep',
      'NikeCourt Royale',
      'Nike React Art3mis',
      'Nike React Infinity Run Flyknit A.I.R. Chaz Bear',
    ][e],
  Hn = {
    displayName: 'Jaydon Frankie',
    email: 'demo@minimals.cc',
    photoURL: '/assets/images/avatar/avatar-25.webp',
  },
  P_ = [...Array(24)].map((e, t) => ({
    id: jn(t),
    name: vh(t),
    company: YP(t),
    isVerified: XP(t),
    avatarUrl: `/assets/images/avatar/avatar-${t + 1}.webp`,
    status: t % 4 ? 'active' : 'banned',
    role:
      [
        'Leader',
        'Hr Manager',
        'UI Designer',
        'UX Designer',
        'UI/UX Designer',
        'Project Manager',
        'Backend Developer',
        'Full Stack Designer',
        'Front End Developer',
        'Full Stack Developer',
      ][t] || 'UI Designer',
  })),
  T_ = [...Array(23)].map((e, t) => ({
    id: jn(t),
    title: qP(t),
    description: QP(t),
    coverUrl: `/assets/images/cover/cover-${t + 1}.webp`,
    totalViews: 8829,
    totalComments: 7977,
    totalShares: 8556,
    totalFavorites: 8870,
    postedAt: Xr(t),
    author: { name: vh(t), avatarUrl: `/assets/images/avatar/avatar-${t + 1}.webp` },
  })),
  Vr = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'],
  R_ = [...Array(24)].map((e, t) => {
    const n = t + 1;
    return {
      id: jn(t),
      price: fv(t),
      name: JP(t),
      priceSale: n % 3 ? null : fv(t),
      coverUrl: `/assets/images/product/product-${n}.webp`,
      colors:
        (n === 1 && Vr.slice(0, 2)) ||
        (n === 2 && Vr.slice(1, 3)) ||
        (n === 3 && Vr.slice(2, 4)) ||
        (n === 4 && Vr.slice(3, 6)) ||
        (n === 23 && Vr.slice(4, 6)) ||
        (n === 24 && Vr.slice(5, 6)) ||
        Vr,
      status: ([1, 3, 5].includes(n) && 'sale') || ([4, 8, 12].includes(n) && 'new') || '',
    };
  }),
  eT = [
    { value: 'en', label: 'English', icon: '/assets/icons/flags/ic-flag-en.svg' },
    { value: 'de', label: 'German', icon: '/assets/icons/flags/ic-flag-de.svg' },
    { value: 'fr', label: 'French', icon: '/assets/icons/flags/ic-flag-fr.svg' },
  ],
  O_ = [...Array(5)].map((e, t) => ({
    id: jn(t),
    title: [
      '1983, orders, $4220',
      '12 Invoices have been paid',
      'Order #37745 from September',
      'New order placed #XF-2356',
      'New order placed #XF-2346',
    ][t],
    type: `order${t + 1}`,
    time: Xr(t),
  })),
  M_ = [...Array(5)].map((e, t) => ({ id: jn(t), name: ZP(t) })),
  tT = [
    {
      id: jn(1),
      title: 'Your order is placed',
      description: 'waiting for shipping',
      avatarUrl: null,
      type: 'order-placed',
      postedAt: Xr(1),
      isUnRead: !0,
    },
    {
      id: jn(2),
      title: vh(2),
      description: 'answered to your comment on the Minimal',
      avatarUrl: '/assets/images/avatar/avatar-2.webp',
      type: 'friend-interactive',
      postedAt: Xr(2),
      isUnRead: !0,
    },
    {
      id: jn(3),
      title: 'You have new message',
      description: '5 unread messages',
      avatarUrl: null,
      type: 'chat-message',
      postedAt: Xr(3),
      isUnRead: !1,
    },
    {
      id: jn(4),
      title: 'You have new mail',
      description: 'sent from Guido Padberg',
      avatarUrl: null,
      type: 'mail',
      postedAt: Xr(4),
      isUnRead: !1,
    },
    {
      id: jn(5),
      title: 'Delivery processing',
      description: 'Your order is being shipped',
      avatarUrl: null,
      type: 'order-shipped',
      postedAt: Xr(5),
      isUnRead: !1,
    },
  ],
  Vx = { root: 'mnl__icon__root', flag: 'mnl__icon__flag' },
  Hx = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  ic = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  yh = Object.freeze({ ...Hx, ...ic }),
  Ef = Object.freeze({ ...yh, body: '', hidden: !1 });
function nT(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function pv(e, t) {
  const n = nT(e, t);
  for (const r in Ef)
    r in ic
      ? r in e && !(r in n) && (n[r] = ic[r])
      : r in t
        ? (n[r] = t[r])
        : r in e && (n[r] = e[r]);
  return n;
}
function rT(e, t) {
  const n = e.icons,
    r = e.aliases || Object.create(null),
    o = Object.create(null);
  function i(s) {
    if (n[s]) return (o[s] = []);
    if (!(s in o)) {
      o[s] = null;
      const a = r[s] && r[s].parent,
        l = a && i(a);
      l && (o[s] = [a].concat(l));
    }
    return o[s];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(i), o;
}
function oT(e, t, n) {
  const r = e.icons,
    o = e.aliases || Object.create(null);
  let i = {};
  function s(a) {
    i = pv(r[a] || o[a], i);
  }
  return s(t), n.forEach(s), pv(e, i);
}
function Gx(e, t) {
  const n = [];
  if (typeof e != 'object' || typeof e.icons != 'object') return n;
  e.not_found instanceof Array &&
    e.not_found.forEach((o) => {
      t(o, null), n.push(o);
    });
  const r = rT(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, oT(e, o, i)), n.push(o));
  }
  return n;
}
const ws = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  su = (e, t, n, r = '') => {
    const o = e.split(':');
    if (e.slice(0, 1) === '@') {
      if (o.length < 2 || o.length > 3) return null;
      r = o.shift().slice(1);
    }
    if (o.length > 3 || !o.length) return null;
    if (o.length > 1) {
      const a = o.pop(),
        l = o.pop(),
        c = { provider: o.length > 0 ? o[0] : r, prefix: l, name: a };
      return t && !bl(c) ? null : c;
    }
    const i = o[0],
      s = i.split('-');
    if (s.length > 1) {
      const a = { provider: r, prefix: s.shift(), name: s.join('-') };
      return t && !bl(a) ? null : a;
    }
    if (n && r === '') {
      const a = { provider: r, prefix: '', name: i };
      return t && !bl(a, n) ? null : a;
    }
    return null;
  },
  bl = (e, t) =>
    e
      ? !!(
          (e.provider === '' || e.provider.match(ws)) &&
          ((t && e.prefix === '') || e.prefix.match(ws)) &&
          e.name.match(ws)
        )
      : !1,
  iT = { provider: '', aliases: {}, not_found: {}, ...Hx };
function Ju(e, t) {
  for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
  return !0;
}
function Kx(e) {
  if (typeof e != 'object' || e === null) return null;
  const t = e;
  if (typeof t.prefix != 'string' || !e.icons || typeof e.icons != 'object' || !Ju(e, iT))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (!o.match(ws) || typeof i.body != 'string' || !Ju(i, Ef)) return null;
  }
  const r = t.aliases || Object.create(null);
  for (const o in r) {
    const i = r[o],
      s = i.parent;
    if (!o.match(ws) || typeof s != 'string' || (!n[s] && !r[s]) || !Ju(i, Ef)) return null;
  }
  return t;
}
const hv = Object.create(null);
function sT(e, t) {
  return { provider: e, prefix: t, icons: Object.create(null), missing: new Set() };
}
function go(e, t) {
  const n = hv[e] || (hv[e] = Object.create(null));
  return n[t] || (n[t] = sT(e, t));
}
function xh(e, t) {
  return Kx(t)
    ? Gx(t, (n, r) => {
        r ? (e.icons[n] = r) : e.missing.add(n);
      })
    : [];
}
function aT(e, t, n) {
  try {
    if (typeof n.body == 'string') return (e.icons[t] = { ...n }), !0;
  } catch {}
  return !1;
}
let Zs = !1;
function Yx(e) {
  return typeof e == 'boolean' && (Zs = e), Zs;
}
function mv(e) {
  const t = typeof e == 'string' ? su(e, !0, Zs) : e;
  if (t) {
    const n = go(t.provider, t.prefix),
      r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function lT(e, t) {
  const n = su(e, !0, Zs);
  if (!n) return !1;
  const r = go(n.provider, n.prefix);
  return aT(r, n.name, t);
}
function cT(e, t) {
  if (typeof e != 'object') return !1;
  if ((typeof t != 'string' && (t = e.provider || ''), Zs && !t && !e.prefix)) {
    let o = !1;
    return (
      Kx(e) &&
        ((e.prefix = ''),
        Gx(e, (i, s) => {
          s && lT(i, s) && (o = !0);
        })),
      o
    );
  }
  const n = e.prefix;
  if (!bl({ provider: t, prefix: n, name: 'a' })) return !1;
  const r = go(t, n);
  return !!xh(r, e);
}
const Xx = Object.freeze({ width: null, height: null }),
  qx = Object.freeze({ ...Xx, ...ic }),
  uT = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  dT = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function gv(e, t, n) {
  if (t === 1) return e;
  if (((n = n || 100), typeof e == 'number')) return Math.ceil(e * t * n) / n;
  if (typeof e != 'string') return e;
  const r = e.split(uT);
  if (r === null || !r.length) return e;
  const o = [];
  let i = r.shift(),
    s = dT.test(i);
  for (;;) {
    if (s) {
      const a = parseFloat(i);
      isNaN(a) ? o.push(i) : o.push(Math.ceil(a * t * n) / n);
    } else o.push(i);
    if (((i = r.shift()), i === void 0)) return o.join('');
    s = !s;
  }
}
function fT(e, t = 'defs') {
  let n = '';
  const r = e.indexOf('<' + t);
  for (; r >= 0; ) {
    const o = e.indexOf('>', r),
      i = e.indexOf('</' + t);
    if (o === -1 || i === -1) break;
    const s = e.indexOf('>', i);
    if (s === -1) break;
    (n += e.slice(o + 1, i).trim()), (e = e.slice(0, r).trim() + e.slice(s + 1));
  }
  return { defs: n, content: e };
}
function pT(e, t) {
  return e ? '<defs>' + e + '</defs>' + t : t;
}
function hT(e, t, n) {
  const r = fT(e);
  return pT(r.defs, t + r.content + n);
}
const mT = (e) => e === 'unset' || e === 'undefined' || e === 'none';
function gT(e, t) {
  const n = { ...yh, ...e },
    r = { ...qx, ...t },
    o = { left: n.left, top: n.top, width: n.width, height: n.height };
  let i = n.body;
  [n, r].forEach((v) => {
    const w = [],
      h = v.hFlip,
      y = v.vFlip;
    let g = v.rotate;
    h
      ? y
        ? (g += 2)
        : (w.push(
            'translate(' + (o.width + o.left).toString() + ' ' + (0 - o.top).toString() + ')'
          ),
          w.push('scale(-1 1)'),
          (o.top = o.left = 0))
      : y &&
        (w.push('translate(' + (0 - o.left).toString() + ' ' + (o.height + o.top).toString() + ')'),
        w.push('scale(1 -1)'),
        (o.top = o.left = 0));
    let k;
    switch ((g < 0 && (g -= Math.floor(g / 4) * 4), (g = g % 4), g)) {
      case 1:
        (k = o.height / 2 + o.top),
          w.unshift('rotate(90 ' + k.toString() + ' ' + k.toString() + ')');
        break;
      case 2:
        w.unshift(
          'rotate(180 ' +
            (o.width / 2 + o.left).toString() +
            ' ' +
            (o.height / 2 + o.top).toString() +
            ')'
        );
        break;
      case 3:
        (k = o.width / 2 + o.left),
          w.unshift('rotate(-90 ' + k.toString() + ' ' + k.toString() + ')');
        break;
    }
    g % 2 === 1 &&
      (o.left !== o.top && ((k = o.left), (o.left = o.top), (o.top = k)),
      o.width !== o.height && ((k = o.width), (o.width = o.height), (o.height = k))),
      w.length && (i = hT(i, '<g transform="' + w.join(' ') + '">', '</g>'));
  });
  const s = r.width,
    a = r.height,
    l = o.width,
    c = o.height;
  let u, d;
  s === null
    ? ((d = a === null ? '1em' : a === 'auto' ? c : a), (u = gv(d, l / c)))
    : ((u = s === 'auto' ? l : s), (d = a === null ? gv(u, c / l) : a === 'auto' ? c : a));
  const p = {},
    m = (v, w) => {
      mT(w) || (p[v] = w.toString());
    };
  m('width', u), m('height', d);
  const x = [o.left, o.top, l, c];
  return (p.viewBox = x.join(' ')), { attributes: p, viewBox: x, body: i };
}
const vT = /\sid="(\S+)"/g,
  yT = 'IconifyId' + Date.now().toString(16) + ((Math.random() * 16777216) | 0).toString(16);
let xT = 0;
function bT(e, t = yT) {
  const n = [];
  let r;
  for (; (r = vT.exec(e)); ) n.push(r[1]);
  if (!n.length) return e;
  const o = 'suffix' + ((Math.random() * 16777216) | Date.now()).toString(16);
  return (
    n.forEach((i) => {
      const s = typeof t == 'function' ? t(i) : t + (xT++).toString(),
        a = i.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', 'g'), '$1' + s + o + '$3');
    }),
    (e = e.replace(new RegExp(o, 'g'), '')),
    e
  );
}
const $f = Object.create(null);
function CT(e, t) {
  $f[e] = t;
}
function Pf(e) {
  return $f[e] || $f[''];
}
function bh(e) {
  let t;
  if (typeof e.resources == 'string') t = [e.resources];
  else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
  return {
    resources: t,
    path: e.path || '/',
    maxURL: e.maxURL || 500,
    rotate: e.rotate || 750,
    timeout: e.timeout || 5e3,
    random: e.random === !0,
    index: e.index || 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1,
  };
}
const Ch = Object.create(null),
  Ji = ['https://api.simplesvg.com', 'https://api.unisvg.com'],
  Cl = [];
for (; Ji.length > 0; )
  Ji.length === 1 || Math.random() > 0.5 ? Cl.push(Ji.shift()) : Cl.push(Ji.pop());
Ch[''] = bh({ resources: ['https://api.iconify.design'].concat(Cl) });
function ST(e, t) {
  const n = bh(t);
  return n === null ? !1 : ((Ch[e] = n), !0);
}
function Sh(e) {
  return Ch[e];
}
const wT = () => {
  let e;
  try {
    if (((e = fetch), typeof e == 'function')) return e;
  } catch {}
};
let vv = wT();
function kT(e, t) {
  const n = Sh(e);
  if (!n) return 0;
  let r;
  if (!n.maxURL) r = 0;
  else {
    let o = 0;
    n.resources.forEach((s) => {
      o = Math.max(o, s.length);
    });
    const i = t + '.json?icons=';
    r = n.maxURL - o - n.path.length - i.length;
  }
  return r;
}
function ET(e) {
  return e === 404;
}
const $T = (e, t, n) => {
  const r = [],
    o = kT(e, t),
    i = 'icons';
  let s = { type: i, provider: e, prefix: t, icons: [] },
    a = 0;
  return (
    n.forEach((l, c) => {
      (a += l.length + 1),
        a >= o &&
          c > 0 &&
          (r.push(s), (s = { type: i, provider: e, prefix: t, icons: [] }), (a = l.length)),
        s.icons.push(l);
    }),
    r.push(s),
    r
  );
};
function PT(e) {
  if (typeof e == 'string') {
    const t = Sh(e);
    if (t) return t.path;
  }
  return '/';
}
const TT = (e, t, n) => {
    if (!vv) {
      n('abort', 424);
      return;
    }
    let r = PT(t.provider);
    switch (t.type) {
      case 'icons': {
        const i = t.prefix,
          a = t.icons.join(','),
          l = new URLSearchParams({ icons: a });
        r += i + '.json?' + l.toString();
        break;
      }
      case 'custom': {
        const i = t.uri;
        r += i.slice(0, 1) === '/' ? i.slice(1) : i;
        break;
      }
      default:
        n('abort', 400);
        return;
    }
    let o = 503;
    vv(e + r)
      .then((i) => {
        const s = i.status;
        if (s !== 200) {
          setTimeout(() => {
            n(ET(s) ? 'abort' : 'next', s);
          });
          return;
        }
        return (o = 501), i.json();
      })
      .then((i) => {
        if (typeof i != 'object' || i === null) {
          setTimeout(() => {
            i === 404 ? n('abort', i) : n('next', o);
          });
          return;
        }
        setTimeout(() => {
          n('success', i);
        });
      })
      .catch(() => {
        n('next', o);
      });
  },
  RT = { prepare: $T, send: TT };
function OT(e) {
  const t = { loaded: [], missing: [], pending: [] },
    n = Object.create(null);
  e.sort((o, i) =>
    o.provider !== i.provider
      ? o.provider.localeCompare(i.provider)
      : o.prefix !== i.prefix
        ? o.prefix.localeCompare(i.prefix)
        : o.name.localeCompare(i.name)
  );
  let r = { provider: '', prefix: '', name: '' };
  return (
    e.forEach((o) => {
      if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider) return;
      r = o;
      const i = o.provider,
        s = o.prefix,
        a = o.name,
        l = n[i] || (n[i] = Object.create(null)),
        c = l[s] || (l[s] = go(i, s));
      let u;
      a in c.icons
        ? (u = t.loaded)
        : s === '' || c.missing.has(a)
          ? (u = t.missing)
          : (u = t.pending);
      const d = { provider: i, prefix: s, name: a };
      u.push(d);
    }),
    t
  );
}
function Qx(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function MT(e) {
  e.pendingCallbacksFlag ||
    ((e.pendingCallbacksFlag = !0),
    setTimeout(() => {
      e.pendingCallbacksFlag = !1;
      const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
      if (!t.length) return;
      let n = !1;
      const r = e.provider,
        o = e.prefix;
      t.forEach((i) => {
        const s = i.icons,
          a = s.pending.length;
        (s.pending = s.pending.filter((l) => {
          if (l.prefix !== o) return !0;
          const c = l.name;
          if (e.icons[c]) s.loaded.push({ provider: r, prefix: o, name: c });
          else if (e.missing.has(c)) s.missing.push({ provider: r, prefix: o, name: c });
          else return (n = !0), !0;
          return !1;
        })),
          s.pending.length !== a &&
            (n || Qx([e], i.id),
            i.callback(s.loaded.slice(0), s.missing.slice(0), s.pending.slice(0), i.abort));
      });
    }));
}
let AT = 0;
function _T(e, t, n) {
  const r = AT++,
    o = Qx.bind(null, n, r);
  if (!t.pending.length) return o;
  const i = { id: r, icons: t, callback: e, abort: o };
  return (
    n.forEach((s) => {
      (s.loaderCallbacks || (s.loaderCallbacks = [])).push(i);
    }),
    o
  );
}
function IT(e, t = !0, n = !1) {
  const r = [];
  return (
    e.forEach((o) => {
      const i = typeof o == 'string' ? su(o, t, n) : o;
      i && r.push(i);
    }),
    r
  );
}
var jT = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: !1, dataAfterTimeout: !1 };
function NT(e, t, n, r) {
  const o = e.resources.length,
    i = e.random ? Math.floor(Math.random() * o) : e.index;
  let s;
  if (e.random) {
    let f = e.resources.slice(0);
    for (s = []; f.length > 1; ) {
      const S = Math.floor(Math.random() * f.length);
      s.push(f[S]), (f = f.slice(0, S).concat(f.slice(S + 1)));
    }
    s = s.concat(f);
  } else s = e.resources.slice(i).concat(e.resources.slice(0, i));
  const a = Date.now();
  let l = 'pending',
    c = 0,
    u,
    d = null,
    p = [],
    m = [];
  typeof r == 'function' && m.push(r);
  function x() {
    d && (clearTimeout(d), (d = null));
  }
  function v() {
    l === 'pending' && (l = 'aborted'),
      x(),
      p.forEach((f) => {
        f.status === 'pending' && (f.status = 'aborted');
      }),
      (p = []);
  }
  function w(f, S) {
    S && (m = []), typeof f == 'function' && m.push(f);
  }
  function h() {
    return {
      startTime: a,
      payload: t,
      status: l,
      queriesSent: c,
      queriesPending: p.length,
      subscribe: w,
      abort: v,
    };
  }
  function y() {
    (l = 'failed'),
      m.forEach((f) => {
        f(void 0, u);
      });
  }
  function g() {
    p.forEach((f) => {
      f.status === 'pending' && (f.status = 'aborted');
    }),
      (p = []);
  }
  function k(f, S, P) {
    const O = S !== 'success';
    switch (((p = p.filter((R) => R !== f)), l)) {
      case 'pending':
        break;
      case 'failed':
        if (O || !e.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (S === 'abort') {
      (u = P), y();
      return;
    }
    if (O) {
      (u = P), p.length || (s.length ? $() : y());
      return;
    }
    if ((x(), g(), !e.random)) {
      const R = e.resources.indexOf(f.resource);
      R !== -1 && R !== e.index && (e.index = R);
    }
    (l = 'completed'),
      m.forEach((R) => {
        R(P);
      });
  }
  function $() {
    if (l !== 'pending') return;
    x();
    const f = s.shift();
    if (f === void 0) {
      if (p.length) {
        d = setTimeout(() => {
          x(), l === 'pending' && (g(), y());
        }, e.timeout);
        return;
      }
      y();
      return;
    }
    const S = {
      status: 'pending',
      resource: f,
      callback: (P, O) => {
        k(S, P, O);
      },
    };
    p.push(S), c++, (d = setTimeout($, e.rotate)), n(f, t, S.callback);
  }
  return setTimeout($), h;
}
function Zx(e) {
  const t = { ...jT, ...e };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === 'pending');
  }
  function o(a, l, c) {
    const u = NT(t, a, l, (d, p) => {
      r(), c && c(d, p);
    });
    return n.push(u), u;
  }
  function i(a) {
    return n.find((l) => a(l)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (a) => {
      t.index = a;
    },
    getIndex: () => t.index,
    cleanup: r,
  };
}
function yv() {}
const ed = Object.create(null);
function LT(e) {
  if (!ed[e]) {
    const t = Sh(e);
    if (!t) return;
    const n = Zx(t),
      r = { config: t, redundancy: n };
    ed[e] = r;
  }
  return ed[e];
}
function DT(e, t, n) {
  let r, o;
  if (typeof e == 'string') {
    const i = Pf(e);
    if (!i) return n(void 0, 424), yv;
    o = i.send;
    const s = LT(e);
    s && (r = s.redundancy);
  } else {
    const i = bh(e);
    if (i) {
      r = Zx(i);
      const s = e.resources ? e.resources[0] : '',
        a = Pf(s);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), yv) : r.query(t, o, n)().abort;
}
const xv = 'iconify2',
  Js = 'iconify',
  Jx = Js + '-count',
  bv = Js + '-version',
  eb = 36e5,
  zT = 168,
  FT = 50;
function Tf(e, t) {
  try {
    return e.getItem(t);
  } catch {}
}
function wh(e, t, n) {
  try {
    return e.setItem(t, n), !0;
  } catch {}
}
function Cv(e, t) {
  try {
    e.removeItem(t);
  } catch {}
}
function Rf(e, t) {
  return wh(e, Jx, t.toString());
}
function Of(e) {
  return parseInt(Tf(e, Jx)) || 0;
}
const oo = { local: !0, session: !0 },
  tb = { local: new Set(), session: new Set() };
let kh = !1;
function BT(e) {
  kh = e;
}
let Ga = typeof window > 'u' ? {} : window;
function nb(e) {
  const t = e + 'Storage';
  try {
    if (Ga && Ga[t] && typeof Ga[t].length == 'number') return Ga[t];
  } catch {}
  oo[e] = !1;
}
function rb(e, t) {
  const n = nb(e);
  if (!n) return;
  const r = Tf(n, bv);
  if (r !== xv) {
    if (r) {
      const a = Of(n);
      for (let l = 0; l < a; l++) Cv(n, Js + l.toString());
    }
    wh(n, bv, xv), Rf(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / eb) - zT,
    i = (a) => {
      const l = Js + a.toString(),
        c = Tf(n, l);
      if (typeof c == 'string') {
        try {
          const u = JSON.parse(c);
          if (
            typeof u == 'object' &&
            typeof u.cached == 'number' &&
            u.cached > o &&
            typeof u.provider == 'string' &&
            typeof u.data == 'object' &&
            typeof u.data.prefix == 'string' &&
            t(u, a)
          )
            return !0;
        } catch {}
        Cv(n, l);
      }
    };
  let s = Of(n);
  for (let a = s - 1; a >= 0; a--) i(a) || (a === s - 1 ? (s--, Rf(n, s)) : tb[e].add(a));
}
function ob() {
  if (!kh) {
    BT(!0);
    for (const e in oo)
      rb(e, (t) => {
        const n = t.data,
          r = t.provider,
          o = n.prefix,
          i = go(r, o);
        if (!xh(i, n).length) return !1;
        const s = n.lastModified || -1;
        return (
          (i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, s) : s), !0
        );
      });
  }
}
function WT(e, t) {
  const n = e.lastModifiedCached;
  if (n && n >= t) return n === t;
  if (((e.lastModifiedCached = t), n))
    for (const r in oo)
      rb(r, (o) => {
        const i = o.data;
        return o.provider !== e.provider || i.prefix !== e.prefix || i.lastModified === t;
      });
  return !0;
}
function UT(e, t) {
  kh || ob();
  function n(r) {
    let o;
    if (!oo[r] || !(o = nb(r))) return;
    const i = tb[r];
    let s;
    if (i.size) i.delete((s = Array.from(i).shift()));
    else if (((s = Of(o)), s >= FT || !Rf(o, s + 1))) return;
    const a = { cached: Math.floor(Date.now() / eb), provider: e.provider, data: t };
    return wh(o, Js + s.toString(), JSON.stringify(a));
  }
  (t.lastModified && !WT(e, t.lastModified)) ||
    (Object.keys(t.icons).length &&
      (t.not_found && ((t = Object.assign({}, t)), delete t.not_found),
      n('local') || n('session')));
}
function Sv() {}
function VT(e) {
  e.iconsLoaderFlag ||
    ((e.iconsLoaderFlag = !0),
    setTimeout(() => {
      (e.iconsLoaderFlag = !1), MT(e);
    }));
}
function HT(e, t) {
  e.iconsToLoad ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort()) : (e.iconsToLoad = t),
    e.iconsQueueFlag ||
      ((e.iconsQueueFlag = !0),
      setTimeout(() => {
        e.iconsQueueFlag = !1;
        const { provider: n, prefix: r } = e,
          o = e.iconsToLoad;
        delete e.iconsToLoad;
        let i;
        if (!o || !(i = Pf(n))) return;
        i.prepare(n, r, o).forEach((a) => {
          DT(n, a, (l) => {
            if (typeof l != 'object')
              a.icons.forEach((c) => {
                e.missing.add(c);
              });
            else
              try {
                const c = xh(e, l);
                if (!c.length) return;
                const u = e.pendingIcons;
                u &&
                  c.forEach((d) => {
                    u.delete(d);
                  }),
                  UT(e, l);
              } catch (c) {
                console.error(c);
              }
            VT(e);
          });
        });
      }));
}
const GT = (e, t) => {
  const n = IT(e, !0, Yx()),
    r = OT(n);
  if (!r.pending.length) {
    let l = !0;
    return (
      t &&
        setTimeout(() => {
          l && t(r.loaded, r.missing, r.pending, Sv);
        }),
      () => {
        l = !1;
      }
    );
  }
  const o = Object.create(null),
    i = [];
  let s, a;
  return (
    r.pending.forEach((l) => {
      const { provider: c, prefix: u } = l;
      if (u === a && c === s) return;
      (s = c), (a = u), i.push(go(c, u));
      const d = o[c] || (o[c] = Object.create(null));
      d[u] || (d[u] = []);
    }),
    r.pending.forEach((l) => {
      const { provider: c, prefix: u, name: d } = l,
        p = go(c, u),
        m = p.pendingIcons || (p.pendingIcons = new Set());
      m.has(d) || (m.add(d), o[c][u].push(d));
    }),
    i.forEach((l) => {
      const { provider: c, prefix: u } = l;
      o[c][u].length && HT(l, o[c][u]);
    }),
    t ? _T(t, r, i) : Sv
  );
};
function KT(e, t) {
  switch (e) {
    case 'local':
    case 'session':
      oo[e] = t;
      break;
    case 'all':
      for (const n in oo) oo[n] = t;
      break;
  }
}
function YT(e, t) {
  const n = { ...e };
  for (const r in t) {
    const o = t[r],
      i = typeof o;
    r in Xx
      ? (o === null || (o && (i === 'string' || i === 'number'))) && (n[r] = o)
      : i === typeof n[r] && (n[r] = r === 'rotate' ? o % 4 : o);
  }
  return n;
}
const XT = /[\s,]+/;
function qT(e, t) {
  t.split(XT).forEach((n) => {
    switch (n.trim()) {
      case 'horizontal':
        e.hFlip = !0;
        break;
      case 'vertical':
        e.vFlip = !0;
        break;
    }
  });
}
function QT(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, '');
  function r(o) {
    for (; o < 0; ) o += 4;
    return o % 4;
  }
  if (n === '') {
    const o = parseInt(e);
    return isNaN(o) ? 0 : r(o);
  } else if (n !== e) {
    let o = 0;
    switch (n) {
      case '%':
        o = 25;
        break;
      case 'deg':
        o = 90;
    }
    if (o) {
      let i = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(i) ? 0 : ((i = i / o), i % 1 === 0 ? r(i) : 0);
    }
  }
  return t;
}
function ZT(e, t) {
  let n = e.indexOf('xlink:') === -1 ? '' : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t) n += ' ' + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + '>' + e + '</svg>';
}
function JT(e) {
  return e
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/\s+/g, ' ');
}
function eR(e) {
  return 'data:image/svg+xml,' + JT(e);
}
function tR(e) {
  return 'url("' + eR(e) + '")';
}
let ks;
function nR() {
  try {
    ks = window.trustedTypes.createPolicy('iconify', { createHTML: (e) => e });
  } catch {
    ks = null;
  }
}
function rR(e) {
  return ks === void 0 && nR(), ks ? ks.createHTML(e) : e;
}
const ib = { ...qx, inline: !1 },
  oR = {
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    'aria-hidden': !0,
    role: 'img',
  },
  iR = { display: 'inline-block' },
  Mf = { backgroundColor: 'currentColor' },
  sb = { backgroundColor: 'transparent' },
  wv = { Image: 'var(--svg)', Repeat: 'no-repeat', Size: '100% 100%' },
  kv = { WebkitMask: Mf, mask: Mf, background: sb };
for (const e in kv) {
  const t = kv[e];
  for (const n in wv) t[e + n] = wv[n];
}
const sR = { ...ib, inline: !0 };
function Ev(e) {
  return e + (e.match(/^[-0-9.]+$/) ? 'px' : '');
}
const aR = (e, t, n) => {
  const r = t.inline ? sR : ib,
    o = YT(r, t),
    i = t.mode || 'svg',
    s = {},
    a = t.style || {},
    l = { ...(i === 'svg' ? oR : {}) };
  if (n) {
    const w = su(n, !1, !0);
    if (w) {
      const h = ['iconify'],
        y = ['provider', 'prefix'];
      for (const g of y) w[g] && h.push('iconify--' + w[g]);
      l.className = h.join(' ');
    }
  }
  for (let w in t) {
    const h = t[w];
    if (h !== void 0)
      switch (w) {
        case 'icon':
        case 'style':
        case 'children':
        case 'onLoad':
        case 'mode':
        case 'ssr':
          break;
        case '_ref':
          l.ref = h;
          break;
        case 'className':
          l[w] = (l[w] ? l[w] + ' ' : '') + h;
          break;
        case 'inline':
        case 'hFlip':
        case 'vFlip':
          o[w] = h === !0 || h === 'true' || h === 1;
          break;
        case 'flip':
          typeof h == 'string' && qT(o, h);
          break;
        case 'color':
          s.color = h;
          break;
        case 'rotate':
          typeof h == 'string' ? (o[w] = QT(h)) : typeof h == 'number' && (o[w] = h);
          break;
        case 'ariaHidden':
        case 'aria-hidden':
          h !== !0 && h !== 'true' && delete l['aria-hidden'];
          break;
        default:
          r[w] === void 0 && (l[w] = h);
      }
  }
  const c = gT(e, o),
    u = c.attributes;
  if ((o.inline && (s.verticalAlign = '-0.125em'), i === 'svg')) {
    (l.style = { ...s, ...a }), Object.assign(l, u);
    let w = 0,
      h = t.id;
    return (
      typeof h == 'string' && (h = h.replace(/-/g, '_')),
      (l.dangerouslySetInnerHTML = {
        __html: rR(bT(c.body, h ? () => h + 'ID' + w++ : 'iconifyReact')),
      }),
      b.createElement('svg', l)
    );
  }
  const { body: d, width: p, height: m } = e,
    x = i === 'mask' || (i === 'bg' ? !1 : d.indexOf('currentColor') !== -1),
    v = ZT(d, { ...u, width: p + '', height: m + '' });
  return (
    (l.style = {
      ...s,
      '--svg': tR(v),
      width: Ev(u.width),
      height: Ev(u.height),
      ...iR,
      ...(x ? Mf : sb),
      ...a,
    }),
    b.createElement('span', l)
  );
};
function lR(e) {
  KT(e, !1);
}
Yx(!0);
CT('', RT);
if (typeof document < 'u' && typeof window < 'u') {
  ob();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload,
      n = 'Invalid IconifyPreload syntax.';
    typeof t == 'object' &&
      t !== null &&
      (t instanceof Array ? t : [t]).forEach((r) => {
        try {
          (typeof r != 'object' ||
            r === null ||
            r instanceof Array ||
            typeof r.icons != 'object' ||
            typeof r.prefix != 'string' ||
            !cT(r)) &&
            console.error(n);
        } catch {
          console.error(n);
        }
      });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == 'object' && t !== null)
      for (let n in t) {
        const r = 'IconifyProviders[' + n + '] is invalid.';
        try {
          const o = t[n];
          if (typeof o != 'object' || !o || o.resources === void 0) continue;
          ST(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function ab(e) {
  const [t, n] = b.useState(!!e.ssr),
    [r, o] = b.useState({});
  function i(m) {
    if (m) {
      const x = e.icon;
      if (typeof x == 'object') return { name: '', data: x };
      const v = mv(x);
      if (v) return { name: x, data: v };
    }
    return { name: '' };
  }
  const [s, a] = b.useState(i(!!e.ssr));
  function l() {
    const m = r.callback;
    m && (m(), o({}));
  }
  function c(m) {
    if (JSON.stringify(s) !== JSON.stringify(m)) return l(), a(m), !0;
  }
  function u() {
    var m;
    const x = e.icon;
    if (typeof x == 'object') {
      c({ name: '', data: x });
      return;
    }
    const v = mv(x);
    if (c({ name: x, data: v }))
      if (v === void 0) {
        const w = GT([x], u);
        o({ callback: w });
      } else v && ((m = e.onLoad) === null || m === void 0 || m.call(e, x));
  }
  b.useEffect(() => (n(!0), l), []),
    b.useEffect(() => {
      t && u();
    }, [e.icon, t]);
  const { name: d, data: p } = s;
  return p ? aR({ ...yh, ...p }, e, d) : e.children ? e.children : b.createElement('span', {});
}
const cR = b.forwardRef((e, t) => ab({ ...e, _ref: t }));
b.forwardRef((e, t) => ab({ inline: !0, ...e, _ref: t }));
const zn = b.forwardRef(({ className: e, width: t = 20, sx: n, ...r }, o) =>
  C.jsx(le, {
    ssr: !0,
    ref: o,
    component: cR,
    className: Vx.root.concat(e ? ` ${e}` : ''),
    sx: { width: t, height: t, flexShrink: 0, display: 'inline-flex', ...n },
    ...r,
  })
);
lR('local');
b.forwardRef(({ code: e, className: t, sx: n, ...r }, o) => {
  const i = {
    width: 26,
    height: 20,
    flexShrink: 0,
    overflow: 'hidden',
    borderRadius: '5px',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    bgcolor: 'background.neutral',
  };
  return e
    ? C.jsx(le, {
        ref: o,
        component: 'span',
        className: Vx.flag.concat(t ? ` ${t}` : ''),
        sx: { ...i, ...n },
        ...r,
        children: C.jsx(le, {
          component: 'img',
          loading: 'lazy',
          alt: e,
          src: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${e == null ? void 0 : e.toUpperCase()}.svg`,
          sx: { width: 1, height: 1, maxWidth: 'unset', objectFit: 'cover' },
        }),
      })
    : null;
});
const kn = b.createContext({});
function uR(e) {
  return he('MuiListItem', e);
}
const No = ue('MuiListItem', [
  'root',
  'container',
  'focusVisible',
  'dense',
  'alignItemsFlexStart',
  'disabled',
  'divider',
  'gutters',
  'padding',
  'button',
  'secondaryAction',
  'selected',
]);
function dR(e) {
  return he('MuiListItemButton', e);
}
const Lo = ue('MuiListItemButton', [
    'root',
    'focusVisible',
    'dense',
    'alignItemsFlexStart',
    'disabled',
    'divider',
    'gutters',
    'selected',
  ]),
  fR = [
    'alignItems',
    'autoFocus',
    'component',
    'children',
    'dense',
    'disableGutters',
    'divider',
    'focusVisibleClassName',
    'selected',
    'className',
  ],
  pR = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === 'flex-start' && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  hR = (e) => {
    const {
        alignItems: t,
        classes: n,
        dense: r,
        disabled: o,
        disableGutters: i,
        divider: s,
        selected: a,
      } = e,
      c = ge(
        {
          root: [
            'root',
            r && 'dense',
            !i && 'gutters',
            s && 'divider',
            o && 'disabled',
            t === 'flex-start' && 'alignItemsFlexStart',
            a && 'selected',
          ],
        },
        dR,
        n
      );
    return E({}, n, c);
  },
  mR = q(wo, {
    shouldForwardProp: (e) => So(e) || e === 'classes',
    name: 'MuiListItemButton',
    slot: 'Root',
    overridesResolver: pR,
  })(({ theme: e, ownerState: t }) =>
    E(
      {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        minWidth: 0,
        boxSizing: 'border-box',
        textAlign: 'left',
        paddingTop: 8,
        paddingBottom: 8,
        transition: e.transitions.create('background-color', {
          duration: e.transitions.duration.shortest,
        }),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: (e.vars || e).palette.action.hover,
          '@media (hover: none)': { backgroundColor: 'transparent' },
        },
        [`&.${Lo.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Le(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${Lo.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Le(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity + e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${Lo.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Le(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Le(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${Lo.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
        [`&.${Lo.disabled}`]: { opacity: (e.vars || e).palette.action.disabledOpacity },
      },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: 'padding-box',
      },
      t.alignItems === 'flex-start' && { alignItems: 'flex-start' },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.dense && { paddingTop: 4, paddingBottom: 4 }
    )
  ),
  lb = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiListItemButton' }),
      {
        alignItems: o = 'center',
        autoFocus: i = !1,
        component: s = 'div',
        children: a,
        dense: l = !1,
        disableGutters: c = !1,
        divider: u = !1,
        focusVisibleClassName: d,
        selected: p = !1,
        className: m,
      } = r,
      x = H(r, fR),
      v = b.useContext(kn),
      w = b.useMemo(
        () => ({ dense: l || v.dense || !1, alignItems: o, disableGutters: c }),
        [o, v.dense, l, c]
      ),
      h = b.useRef(null);
    un(() => {
      i && h.current && h.current.focus();
    }, [i]);
    const y = E({}, r, {
        alignItems: o,
        dense: w.dense,
        disableGutters: c,
        divider: u,
        selected: p,
      }),
      g = hR(y),
      k = Ve(h, n);
    return C.jsx(kn.Provider, {
      value: w,
      children: C.jsx(
        mR,
        E(
          {
            ref: k,
            href: x.href || x.to,
            component: (x.href || x.to) && s === 'div' ? 'button' : s,
            focusVisibleClassName: X(g.focusVisible, d),
            ownerState: y,
            className: X(g.root, m),
          },
          x,
          { classes: g, children: a }
        )
      ),
    });
  });
function gR(e) {
  return he('MuiListItemSecondaryAction', e);
}
ue('MuiListItemSecondaryAction', ['root', 'disableGutters']);
const vR = ['className'],
  yR = (e) => {
    const { disableGutters: t, classes: n } = e;
    return ge({ root: ['root', t && 'disableGutters'] }, gR, n);
  },
  xR = q('div', {
    name: 'MuiListItemSecondaryAction',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.disableGutters && t.disableGutters];
    },
  })(({ ownerState: e }) =>
    E(
      { position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' },
      e.disableGutters && { right: 0 }
    )
  ),
  cb = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiListItemSecondaryAction' }),
      { className: o } = r,
      i = H(r, vR),
      s = b.useContext(kn),
      a = E({}, r, { disableGutters: s.disableGutters }),
      l = yR(a);
    return C.jsx(xR, E({ className: X(l.root, o), ownerState: a, ref: n }, i));
  });
cb.muiName = 'ListItemSecondaryAction';
const bR = ['className'],
  CR = [
    'alignItems',
    'autoFocus',
    'button',
    'children',
    'className',
    'component',
    'components',
    'componentsProps',
    'ContainerComponent',
    'ContainerProps',
    'dense',
    'disabled',
    'disableGutters',
    'disablePadding',
    'divider',
    'focusVisibleClassName',
    'secondaryAction',
    'selected',
    'slotProps',
    'slots',
  ],
  SR = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === 'flex-start' && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.button && t.button,
      n.hasSecondaryAction && t.secondaryAction,
    ];
  },
  wR = (e) => {
    const {
      alignItems: t,
      button: n,
      classes: r,
      dense: o,
      disabled: i,
      disableGutters: s,
      disablePadding: a,
      divider: l,
      hasSecondaryAction: c,
      selected: u,
    } = e;
    return ge(
      {
        root: [
          'root',
          o && 'dense',
          !s && 'gutters',
          !a && 'padding',
          l && 'divider',
          i && 'disabled',
          n && 'button',
          t === 'flex-start' && 'alignItemsFlexStart',
          c && 'secondaryAction',
          u && 'selected',
        ],
        container: ['container'],
      },
      uR,
      r
    );
  },
  kR = q('div', { name: 'MuiListItem', slot: 'Root', overridesResolver: SR })(
    ({ theme: e, ownerState: t }) =>
      E(
        {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          position: 'relative',
          textDecoration: 'none',
          width: '100%',
          boxSizing: 'border-box',
          textAlign: 'left',
        },
        !t.disablePadding &&
          E(
            { paddingTop: 8, paddingBottom: 8 },
            t.dense && { paddingTop: 4, paddingBottom: 4 },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            !!t.secondaryAction && { paddingRight: 48 }
          ),
        !!t.secondaryAction && { [`& > .${Lo.root}`]: { paddingRight: 48 } },
        {
          [`&.${No.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
          [`&.${No.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Le(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${No.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : Le(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity + e.palette.action.focusOpacity
                  ),
            },
          },
          [`&.${No.disabled}`]: { opacity: (e.vars || e).palette.action.disabledOpacity },
        },
        t.alignItems === 'flex-start' && { alignItems: 'flex-start' },
        t.divider && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: 'padding-box',
        },
        t.button && {
          transition: e.transitions.create('background-color', {
            duration: e.transitions.duration.shortest,
          }),
          '&:hover': {
            textDecoration: 'none',
            backgroundColor: (e.vars || e).palette.action.hover,
            '@media (hover: none)': { backgroundColor: 'transparent' },
          },
          [`&.${No.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : Le(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
                ),
            '@media (hover: none)': {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : Le(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
        },
        t.hasSecondaryAction && { paddingRight: 48 }
      )
  ),
  ER = q('li', {
    name: 'MuiListItem',
    slot: 'Container',
    overridesResolver: (e, t) => t.container,
  })({ position: 'relative' }),
  $R = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiListItem' }),
      {
        alignItems: o = 'center',
        autoFocus: i = !1,
        button: s = !1,
        children: a,
        className: l,
        component: c,
        components: u = {},
        componentsProps: d = {},
        ContainerComponent: p = 'li',
        ContainerProps: { className: m } = {},
        dense: x = !1,
        disabled: v = !1,
        disableGutters: w = !1,
        disablePadding: h = !1,
        divider: y = !1,
        focusVisibleClassName: g,
        secondaryAction: k,
        selected: $ = !1,
        slotProps: f = {},
        slots: S = {},
      } = r,
      P = H(r.ContainerProps, bR),
      O = H(r, CR),
      R = b.useContext(kn),
      A = b.useMemo(
        () => ({ dense: x || R.dense || !1, alignItems: o, disableGutters: w }),
        [o, R.dense, x, w]
      ),
      z = b.useRef(null);
    un(() => {
      i && z.current && z.current.focus();
    }, [i]);
    const F = b.Children.toArray(a),
      N = F.length && w$(F[F.length - 1], ['ListItemSecondaryAction']),
      _ = E({}, r, {
        alignItems: o,
        autoFocus: i,
        button: s,
        dense: A.dense,
        disabled: v,
        disableGutters: w,
        disablePadding: h,
        divider: y,
        hasSecondaryAction: N,
        selected: $,
      }),
      M = wR(_),
      j = Ve(z, n),
      T = S.root || u.Root || kR,
      I = f.root || d.root || {},
      D = E({ className: X(M.root, I.className, l), disabled: v }, O);
    let W = c || 'li';
    return (
      s &&
        ((D.component = c || 'div'), (D.focusVisibleClassName = X(No.focusVisible, g)), (W = wo)),
      N
        ? ((W = !D.component && !c ? 'div' : W),
          p === 'li' && (W === 'li' ? (W = 'div') : D.component === 'li' && (D.component = 'div')),
          C.jsx(kn.Provider, {
            value: A,
            children: C.jsxs(
              ER,
              E({ as: p, className: X(M.container, m), ref: j, ownerState: _ }, P, {
                children: [
                  C.jsx(
                    T,
                    E({}, I, !bi(T) && { as: W, ownerState: E({}, _, I.ownerState) }, D, {
                      children: F,
                    })
                  ),
                  F.pop(),
                ],
              })
            ),
          }))
        : C.jsx(kn.Provider, {
            value: A,
            children: C.jsxs(
              T,
              E({}, I, { as: W, ref: j }, !bi(T) && { ownerState: E({}, _, I.ownerState) }, D, {
                children: [F, k && C.jsx(cb, { children: k })],
              })
            ),
          })
    );
  });
function PR(e) {
  const t = ut(e);
  return t.body === e
    ? ir(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Es(e, t) {
  t ? e.setAttribute('aria-hidden', 'true') : e.removeAttribute('aria-hidden');
}
function $v(e) {
  return parseInt(ir(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function TR(e) {
  const n =
      [
        'TEMPLATE',
        'SCRIPT',
        'STYLE',
        'LINK',
        'MAP',
        'META',
        'NOSCRIPT',
        'PICTURE',
        'COL',
        'COLGROUP',
        'PARAM',
        'SLOT',
        'SOURCE',
        'TRACK',
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === 'INPUT' && e.getAttribute('type') === 'hidden';
  return n || r;
}
function Pv(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !TR(s);
    a && l && Es(s, o);
  });
}
function td(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function RR(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (PR(r)) {
      const s = $x(ut(r));
      n.push({ value: r.style.paddingRight, property: 'padding-right', el: r }),
        (r.style.paddingRight = `${$v(r) + s}px`);
      const a = ut(r).querySelectorAll('.mui-fixed');
      [].forEach.call(a, (l) => {
        n.push({ value: l.style.paddingRight, property: 'padding-right', el: l }),
          (l.style.paddingRight = `${$v(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = ut(r).body;
    else {
      const s = r.parentElement,
        a = ir(r);
      i =
        (s == null ? void 0 : s.nodeName) === 'HTML' && a.getComputedStyle(s).overflowY === 'scroll'
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: 'overflow', el: i },
      { value: i.style.overflowX, property: 'overflow-x', el: i },
      { value: i.style.overflowY, property: 'overflow-y', el: i }
    ),
      (i.style.overflow = 'hidden');
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function OR(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute('aria-hidden') === 'true' && t.push(n);
    }),
    t
  );
}
class MR {
  constructor() {
    (this.containers = void 0), (this.modals = void 0), (this.modals = []), (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length), this.modals.push(t), t.modalRef && Es(t.modalRef, !1);
    const o = OR(n);
    Pv(n, t.mount, t.modalRef, o, !0);
    const i = td(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({ modals: [t], container: n, restore: null, hiddenSiblings: o }), r);
  }
  mount(t, n) {
    const r = td(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = RR(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = td(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if ((i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0))
      i.restore && i.restore(),
        t.modalRef && Es(t.modalRef, n),
        Pv(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Es(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const AR = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');
function _R(e) {
  const t = parseInt(e.getAttribute('tabindex') || '', 10);
  return Number.isNaN(t)
    ? e.contentEditable === 'true' ||
      ((e.nodeName === 'AUDIO' || e.nodeName === 'VIDEO' || e.nodeName === 'DETAILS') &&
        e.getAttribute('tabindex') === null)
      ? 0
      : e.tabIndex
    : t;
}
function IR(e) {
  if (e.tagName !== 'INPUT' || e.type !== 'radio' || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function jR(e) {
  return !(e.disabled || (e.tagName === 'INPUT' && e.type === 'hidden') || IR(e));
}
function NR(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(AR)).forEach((r, o) => {
      const i = _R(r);
      i === -1 ||
        !jR(r) ||
        (i === 0 ? t.push(r) : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function LR() {
  return !0;
}
function DR(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = NR,
      isEnabled: s = LR,
      open: a,
    } = e,
    l = b.useRef(!1),
    c = b.useRef(null),
    u = b.useRef(null),
    d = b.useRef(null),
    p = b.useRef(null),
    m = b.useRef(!1),
    x = b.useRef(null),
    v = Ve(t.ref, x),
    w = b.useRef(null);
  b.useEffect(() => {
    !a || !x.current || (m.current = !n);
  }, [n, a]),
    b.useEffect(() => {
      if (!a || !x.current) return;
      const g = ut(x.current);
      return (
        x.current.contains(g.activeElement) ||
          (x.current.hasAttribute('tabIndex') || x.current.setAttribute('tabIndex', '-1'),
          m.current && x.current.focus()),
        () => {
          o ||
            (d.current && d.current.focus && ((l.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [a]),
    b.useEffect(() => {
      if (!a || !x.current) return;
      const g = ut(x.current),
        k = (S) => {
          (w.current = S),
            !(r || !s() || S.key !== 'Tab') &&
              g.activeElement === x.current &&
              S.shiftKey &&
              ((l.current = !0), u.current && u.current.focus());
        },
        $ = () => {
          const S = x.current;
          if (S === null) return;
          if (!g.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            S.contains(g.activeElement) ||
            (r && g.activeElement !== c.current && g.activeElement !== u.current)
          )
            return;
          if (g.activeElement !== p.current) p.current = null;
          else if (p.current !== null) return;
          if (!m.current) return;
          let P = [];
          if (
            ((g.activeElement === c.current || g.activeElement === u.current) && (P = i(x.current)),
            P.length > 0)
          ) {
            var O, R;
            const A = !!(
                (O = w.current) != null &&
                O.shiftKey &&
                ((R = w.current) == null ? void 0 : R.key) === 'Tab'
              ),
              z = P[0],
              F = P[P.length - 1];
            typeof z != 'string' && typeof F != 'string' && (A ? F.focus() : z.focus());
          } else S.focus();
        };
      g.addEventListener('focusin', $), g.addEventListener('keydown', k, !0);
      const f = setInterval(() => {
        g.activeElement && g.activeElement.tagName === 'BODY' && $();
      }, 50);
      return () => {
        clearInterval(f),
          g.removeEventListener('focusin', $),
          g.removeEventListener('keydown', k, !0);
      };
    }, [n, r, o, s, a, i]);
  const h = (g) => {
      d.current === null && (d.current = g.relatedTarget), (m.current = !0), (p.current = g.target);
      const k = t.props.onFocus;
      k && k(g);
    },
    y = (g) => {
      d.current === null && (d.current = g.relatedTarget), (m.current = !0);
    };
  return C.jsxs(b.Fragment, {
    children: [
      C.jsx('div', { tabIndex: a ? 0 : -1, onFocus: y, ref: c, 'data-testid': 'sentinelStart' }),
      b.cloneElement(t, { ref: v, onFocus: h }),
      C.jsx('div', { tabIndex: a ? 0 : -1, onFocus: y, ref: u, 'data-testid': 'sentinelEnd' }),
    ],
  });
}
function zR(e) {
  return typeof e == 'function' ? e() : e;
}
const ub = b.forwardRef(function (t, n) {
    const { children: r, container: o, disablePortal: i = !1 } = t,
      [s, a] = b.useState(null),
      l = Ve(b.isValidElement(r) ? r.ref : null, n);
    if (
      (un(() => {
        i || a(zR(o) || document.body);
      }, [o, i]),
      un(() => {
        if (s && !i)
          return (
            gf(n, s),
            () => {
              gf(n, null);
            }
          );
      }, [n, s, i]),
      i)
    ) {
      if (b.isValidElement(r)) {
        const c = { ref: l };
        return b.cloneElement(r, c);
      }
      return C.jsx(b.Fragment, { children: r });
    }
    return C.jsx(b.Fragment, { children: s && _p.createPortal(r, s) });
  }),
  Eh = (e) => e.scrollTop;
function Ci(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof o == 'number' ? o : o[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof i == 'object' ? i[t.mode] : i,
    delay: s.transitionDelay,
  };
}
const FR = [
    'addEndListener',
    'appear',
    'children',
    'easing',
    'in',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'style',
    'timeout',
    'TransitionComponent',
  ],
  BR = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  WR = b.forwardRef(function (t, n) {
    const r = Nt(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: c,
        onEnter: u,
        onEntered: d,
        onEntering: p,
        onExit: m,
        onExited: x,
        onExiting: v,
        style: w,
        timeout: h = o,
        TransitionComponent: y = $n,
      } = t,
      g = H(t, FR),
      k = b.useRef(null),
      $ = Ve(k, a.ref, n),
      f = (N) => (_) => {
        if (N) {
          const M = k.current;
          _ === void 0 ? N(M) : N(M, _);
        }
      },
      S = f(p),
      P = f((N, _) => {
        Eh(N);
        const M = Ci({ style: w, timeout: h, easing: l }, { mode: 'enter' });
        (N.style.webkitTransition = r.transitions.create('opacity', M)),
          (N.style.transition = r.transitions.create('opacity', M)),
          u && u(N, _);
      }),
      O = f(d),
      R = f(v),
      A = f((N) => {
        const _ = Ci({ style: w, timeout: h, easing: l }, { mode: 'exit' });
        (N.style.webkitTransition = r.transitions.create('opacity', _)),
          (N.style.transition = r.transitions.create('opacity', _)),
          m && m(N);
      }),
      z = f(x),
      F = (N) => {
        i && i(k.current, N);
      };
    return C.jsx(
      y,
      E(
        {
          appear: s,
          in: c,
          nodeRef: k,
          onEnter: P,
          onEntered: O,
          onEntering: S,
          onExit: A,
          onExited: z,
          onExiting: R,
          addEndListener: F,
          timeout: h,
        },
        g,
        {
          children: (N, _) =>
            b.cloneElement(
              a,
              E(
                {
                  style: E(
                    { opacity: 0, visibility: N === 'exited' && !c ? 'hidden' : void 0 },
                    BR[N],
                    w,
                    a.props.style
                  ),
                  ref: $,
                },
                _
              )
            ),
        }
      )
    );
  });
function UR(e) {
  return he('MuiBackdrop', e);
}
ue('MuiBackdrop', ['root', 'invisible']);
const VR = [
    'children',
    'className',
    'component',
    'components',
    'componentsProps',
    'invisible',
    'open',
    'slotProps',
    'slots',
    'TransitionComponent',
    'transitionDuration',
  ],
  HR = (e) => {
    const { classes: t, invisible: n } = e;
    return ge({ root: ['root', n && 'invisible'] }, UR, t);
  },
  GR = q('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    E(
      {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        WebkitTapHighlightColor: 'transparent',
      },
      e.invisible && { backgroundColor: 'transparent' }
    )
  ),
  KR = b.forwardRef(function (t, n) {
    var r, o, i;
    const s = ce({ props: t, name: 'MuiBackdrop' }),
      {
        children: a,
        className: l,
        component: c = 'div',
        components: u = {},
        componentsProps: d = {},
        invisible: p = !1,
        open: m,
        slotProps: x = {},
        slots: v = {},
        TransitionComponent: w = WR,
        transitionDuration: h,
      } = s,
      y = H(s, VR),
      g = E({}, s, { component: c, invisible: p }),
      k = HR(g),
      $ = (r = x.root) != null ? r : d.root;
    return C.jsx(
      w,
      E({ in: m, timeout: h }, y, {
        children: C.jsx(
          GR,
          E({ 'aria-hidden': !0 }, $, {
            as: (o = (i = v.root) != null ? i : u.Root) != null ? o : c,
            className: X(k.root, l, $ == null ? void 0 : $.className),
            ownerState: E({}, g, $ == null ? void 0 : $.ownerState),
            classes: k,
            ref: n,
            children: a,
          })
        ),
      })
    );
  });
function YR(e) {
  return typeof e == 'function' ? e() : e;
}
function XR(e) {
  return e ? e.props.hasOwnProperty('in') : !1;
}
const qR = new MR();
function QR(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = qR,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: c,
      open: u,
      rootRef: d,
    } = e,
    p = b.useRef({}),
    m = b.useRef(null),
    x = b.useRef(null),
    v = Ve(x, d),
    [w, h] = b.useState(!u),
    y = XR(l);
  let g = !0;
  (e['aria-hidden'] === 'false' || e['aria-hidden'] === !1) && (g = !1);
  const k = () => ut(m.current),
    $ = () => ((p.current.modalRef = x.current), (p.current.mount = m.current), p.current),
    f = () => {
      o.mount($(), { disableScrollLock: r }), x.current && (x.current.scrollTop = 0);
    },
    S = Qn(() => {
      const M = YR(t) || k().body;
      o.add($(), M), x.current && f();
    }),
    P = b.useCallback(() => o.isTopModal($()), [o]),
    O = Qn((M) => {
      (m.current = M), M && (u && P() ? f() : x.current && Es(x.current, g));
    }),
    R = b.useCallback(() => {
      o.remove($(), g);
    }, [g, o]);
  b.useEffect(
    () => () => {
      R();
    },
    [R]
  ),
    b.useEffect(() => {
      u ? S() : (!y || !i) && R();
    }, [u, R, y, i, S]);
  const A = (M) => (j) => {
      var T;
      (T = M.onKeyDown) == null || T.call(M, j),
        !(j.key !== 'Escape' || j.which === 229 || !P()) &&
          (n || (j.stopPropagation(), c && c(j, 'escapeKeyDown')));
    },
    z = (M) => (j) => {
      var T;
      (T = M.onClick) == null || T.call(M, j),
        j.target === j.currentTarget && c && c(j, 'backdropClick');
    };
  return {
    getRootProps: (M = {}) => {
      const j = Tx(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const T = E({}, j, M);
      return E({ role: 'presentation' }, T, { onKeyDown: A(T), ref: v });
    },
    getBackdropProps: (M = {}) => {
      const j = M;
      return E({ 'aria-hidden': !0 }, j, { onClick: z(j), open: u });
    },
    getTransitionProps: () => {
      const M = () => {
          h(!1), s && s();
        },
        j = () => {
          h(!0), a && a(), i && R();
        };
      return {
        onEnter: Wg(M, l == null ? void 0 : l.props.onEnter),
        onExited: Wg(j, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: v,
    portalRef: O,
    isTopModal: P,
    exited: w,
    hasTransition: y,
  };
}
function ZR(e) {
  return he('MuiModal', e);
}
ue('MuiModal', ['root', 'hidden', 'backdrop']);
const JR = [
    'BackdropComponent',
    'BackdropProps',
    'classes',
    'className',
    'closeAfterTransition',
    'children',
    'container',
    'component',
    'components',
    'componentsProps',
    'disableAutoFocus',
    'disableEnforceFocus',
    'disableEscapeKeyDown',
    'disablePortal',
    'disableRestoreFocus',
    'disableScrollLock',
    'hideBackdrop',
    'keepMounted',
    'onBackdropClick',
    'onClose',
    'onTransitionEnter',
    'onTransitionExited',
    'open',
    'slotProps',
    'slots',
    'theme',
  ],
  eO = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return ge({ root: ['root', !t && n && 'hidden'], backdrop: ['backdrop'] }, ZR, r);
  },
  tO = q('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      {
        position: 'fixed',
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: 'hidden' }
    )
  ),
  nO = q(KR, { name: 'MuiModal', slot: 'Backdrop', overridesResolver: (e, t) => t.backdrop })({
    zIndex: -1,
  }),
  db = b.forwardRef(function (t, n) {
    var r, o, i, s, a, l;
    const c = ce({ name: 'MuiModal', props: t }),
      {
        BackdropComponent: u = nO,
        BackdropProps: d,
        className: p,
        closeAfterTransition: m = !1,
        children: x,
        container: v,
        component: w,
        components: h = {},
        componentsProps: y = {},
        disableAutoFocus: g = !1,
        disableEnforceFocus: k = !1,
        disableEscapeKeyDown: $ = !1,
        disablePortal: f = !1,
        disableRestoreFocus: S = !1,
        disableScrollLock: P = !1,
        hideBackdrop: O = !1,
        keepMounted: R = !1,
        onBackdropClick: A,
        open: z,
        slotProps: F,
        slots: N,
      } = c,
      _ = H(c, JR),
      M = E({}, c, {
        closeAfterTransition: m,
        disableAutoFocus: g,
        disableEnforceFocus: k,
        disableEscapeKeyDown: $,
        disablePortal: f,
        disableRestoreFocus: S,
        disableScrollLock: P,
        hideBackdrop: O,
        keepMounted: R,
      }),
      {
        getRootProps: j,
        getBackdropProps: T,
        getTransitionProps: I,
        portalRef: D,
        isTopModal: W,
        exited: V,
        hasTransition: te,
      } = QR(E({}, M, { rootRef: n })),
      K = E({}, M, { exited: V }),
      Q = eO(K),
      J = {};
    if ((x.props.tabIndex === void 0 && (J.tabIndex = '-1'), te)) {
      const { onEnter: ee, onExited: de } = I();
      (J.onEnter = ee), (J.onExited = de);
    }
    const re = (r = (o = N == null ? void 0 : N.root) != null ? o : h.Root) != null ? r : tO,
      ie = (i = (s = N == null ? void 0 : N.backdrop) != null ? s : h.Backdrop) != null ? i : u,
      ne = (a = F == null ? void 0 : F.root) != null ? a : y.root,
      se = (l = F == null ? void 0 : F.backdrop) != null ? l : y.backdrop,
      Z = po({
        elementType: re,
        externalSlotProps: ne,
        externalForwardedProps: _,
        getSlotProps: j,
        additionalProps: { ref: n, as: w },
        ownerState: K,
        className: X(
          p,
          ne == null ? void 0 : ne.className,
          Q == null ? void 0 : Q.root,
          !K.open && K.exited && (Q == null ? void 0 : Q.hidden)
        ),
      }),
      ve = po({
        elementType: ie,
        externalSlotProps: se,
        additionalProps: d,
        getSlotProps: (ee) =>
          T(
            E({}, ee, {
              onClick: (de) => {
                A && A(de), ee != null && ee.onClick && ee.onClick(de);
              },
            })
          ),
        className: X(
          se == null ? void 0 : se.className,
          d == null ? void 0 : d.className,
          Q == null ? void 0 : Q.backdrop
        ),
        ownerState: K,
      });
    return !R && !z && (!te || V)
      ? null
      : C.jsx(ub, {
          ref: D,
          container: v,
          disablePortal: f,
          children: C.jsxs(
            re,
            E({}, Z, {
              children: [
                !O && u ? C.jsx(ie, E({}, ve)) : null,
                C.jsx(DR, {
                  disableEnforceFocus: k,
                  disableAutoFocus: g,
                  disableRestoreFocus: S,
                  isEnabled: W,
                  open: z,
                  children: b.cloneElement(x, J),
                }),
              ],
            })
          ),
        });
  }),
  rO = [
    'addEndListener',
    'appear',
    'children',
    'container',
    'direction',
    'easing',
    'in',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'style',
    'timeout',
    'TransitionComponent',
  ];
function oO(e, t, n) {
  const r = t.getBoundingClientRect(),
    o = n && n.getBoundingClientRect(),
    i = ir(t);
  let s;
  if (t.fakeTransform) s = t.fakeTransform;
  else {
    const c = i.getComputedStyle(t);
    s = c.getPropertyValue('-webkit-transform') || c.getPropertyValue('transform');
  }
  let a = 0,
    l = 0;
  if (s && s !== 'none' && typeof s == 'string') {
    const c = s.split('(')[1].split(')')[0].split(',');
    (a = parseInt(c[4], 10)), (l = parseInt(c[5], 10));
  }
  return e === 'left'
    ? o
      ? `translateX(${o.right + a - r.left}px)`
      : `translateX(${i.innerWidth + a - r.left}px)`
    : e === 'right'
      ? o
        ? `translateX(-${r.right - o.left - a}px)`
        : `translateX(-${r.left + r.width - a}px)`
      : e === 'up'
        ? o
          ? `translateY(${o.bottom + l - r.top}px)`
          : `translateY(${i.innerHeight + l - r.top}px)`
        : o
          ? `translateY(-${r.top - o.top + r.height - l}px)`
          : `translateY(-${r.top + r.height - l}px)`;
}
function iO(e) {
  return typeof e == 'function' ? e() : e;
}
function Ka(e, t, n) {
  const r = iO(n),
    o = oO(e, t, r);
  o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const fb = b.forwardRef(function (t, n) {
  const r = Nt(),
    o = { enter: r.transitions.easing.easeOut, exit: r.transitions.easing.sharp },
    i = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen,
    },
    {
      addEndListener: s,
      appear: a = !0,
      children: l,
      container: c,
      direction: u = 'down',
      easing: d = o,
      in: p,
      onEnter: m,
      onEntered: x,
      onEntering: v,
      onExit: w,
      onExited: h,
      onExiting: y,
      style: g,
      timeout: k = i,
      TransitionComponent: $ = $n,
    } = t,
    f = H(t, rO),
    S = b.useRef(null),
    P = Ve(l.ref, S, n),
    O = (T) => (I) => {
      T && (I === void 0 ? T(S.current) : T(S.current, I));
    },
    R = O((T, I) => {
      Ka(u, T, c), Eh(T), m && m(T, I);
    }),
    A = O((T, I) => {
      const D = Ci({ timeout: k, style: g, easing: d }, { mode: 'enter' });
      (T.style.webkitTransition = r.transitions.create('-webkit-transform', E({}, D))),
        (T.style.transition = r.transitions.create('transform', E({}, D))),
        (T.style.webkitTransform = 'none'),
        (T.style.transform = 'none'),
        v && v(T, I);
    }),
    z = O(x),
    F = O(y),
    N = O((T) => {
      const I = Ci({ timeout: k, style: g, easing: d }, { mode: 'exit' });
      (T.style.webkitTransition = r.transitions.create('-webkit-transform', I)),
        (T.style.transition = r.transitions.create('transform', I)),
        Ka(u, T, c),
        w && w(T);
    }),
    _ = O((T) => {
      (T.style.webkitTransition = ''), (T.style.transition = ''), h && h(T);
    }),
    M = (T) => {
      s && s(S.current, T);
    },
    j = b.useCallback(() => {
      S.current && Ka(u, S.current, c);
    }, [u, c]);
  return (
    b.useEffect(() => {
      if (p || u === 'down' || u === 'right') return;
      const T = ch(() => {
          S.current && Ka(u, S.current, c);
        }),
        I = ir(S.current);
      return (
        I.addEventListener('resize', T),
        () => {
          T.clear(), I.removeEventListener('resize', T);
        }
      );
    }, [u, p, c]),
    b.useEffect(() => {
      p || j();
    }, [p, j]),
    C.jsx(
      $,
      E(
        {
          nodeRef: S,
          onEnter: R,
          onEntered: z,
          onEntering: A,
          onExit: N,
          onExited: _,
          onExiting: F,
          addEndListener: M,
          appear: a,
          in: p,
          timeout: k,
        },
        f,
        {
          children: (T, I) =>
            b.cloneElement(
              l,
              E(
                {
                  ref: P,
                  style: E(
                    { visibility: T === 'exited' && !p ? 'hidden' : void 0 },
                    g,
                    l.props.style
                  ),
                },
                I
              )
            ),
        }
      )
    )
  );
});
function sO(e) {
  return he('MuiDrawer', e);
}
const aO = ue('MuiDrawer', [
    'root',
    'docked',
    'paper',
    'paperAnchorLeft',
    'paperAnchorRight',
    'paperAnchorTop',
    'paperAnchorBottom',
    'paperAnchorDockedLeft',
    'paperAnchorDockedRight',
    'paperAnchorDockedTop',
    'paperAnchorDockedBottom',
    'modal',
  ]),
  lO = ['BackdropProps'],
  cO = [
    'anchor',
    'BackdropProps',
    'children',
    'className',
    'elevation',
    'hideBackdrop',
    'ModalProps',
    'onClose',
    'open',
    'PaperProps',
    'SlideProps',
    'TransitionComponent',
    'transitionDuration',
    'variant',
  ],
  pb = (e, t) => {
    const { ownerState: n } = e;
    return [t.root, (n.variant === 'permanent' || n.variant === 'persistent') && t.docked, t.modal];
  },
  uO = (e) => {
    const { classes: t, anchor: n, variant: r } = e,
      o = {
        root: ['root'],
        docked: [(r === 'permanent' || r === 'persistent') && 'docked'],
        modal: ['modal'],
        paper: ['paper', `paperAnchor${U(n)}`, r !== 'temporary' && `paperAnchorDocked${U(n)}`],
      };
    return ge(o, sO, t);
  },
  dO = q(db, { name: 'MuiDrawer', slot: 'Root', overridesResolver: pb })(({ theme: e }) => ({
    zIndex: (e.vars || e).zIndex.drawer,
  })),
  Tv = q('div', {
    shouldForwardProp: So,
    name: 'MuiDrawer',
    slot: 'Docked',
    skipVariantsResolver: !1,
    overridesResolver: pb,
  })({ flex: '0 0 auto' }),
  fO = q(iu, {
    name: 'MuiDrawer',
    slot: 'Paper',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`paperAnchor${U(n.anchor)}`],
        n.variant !== 'temporary' && t[`paperAnchorDocked${U(n.anchor)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      {
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        flex: '1 0 auto',
        zIndex: (e.vars || e).zIndex.drawer,
        WebkitOverflowScrolling: 'touch',
        position: 'fixed',
        top: 0,
        outline: 0,
      },
      t.anchor === 'left' && { left: 0 },
      t.anchor === 'top' && { top: 0, left: 0, right: 0, height: 'auto', maxHeight: '100%' },
      t.anchor === 'right' && { right: 0 },
      t.anchor === 'bottom' && {
        top: 'auto',
        left: 0,
        bottom: 0,
        right: 0,
        height: 'auto',
        maxHeight: '100%',
      },
      t.anchor === 'left' &&
        t.variant !== 'temporary' && { borderRight: `1px solid ${(e.vars || e).palette.divider}` },
      t.anchor === 'top' &&
        t.variant !== 'temporary' && { borderBottom: `1px solid ${(e.vars || e).palette.divider}` },
      t.anchor === 'right' &&
        t.variant !== 'temporary' && { borderLeft: `1px solid ${(e.vars || e).palette.divider}` },
      t.anchor === 'bottom' &&
        t.variant !== 'temporary' && { borderTop: `1px solid ${(e.vars || e).palette.divider}` }
    )
  ),
  hb = { left: 'right', right: 'left', top: 'down', bottom: 'up' };
function pO(e) {
  return ['left', 'right'].indexOf(e) !== -1;
}
function hO({ direction: e }, t) {
  return e === 'rtl' && pO(t) ? hb[t] : t;
}
const mO = b.forwardRef(function (t, n) {
  const r = ce({ props: t, name: 'MuiDrawer' }),
    o = Nt(),
    i = dh(),
    s = {
      enter: o.transitions.duration.enteringScreen,
      exit: o.transitions.duration.leavingScreen,
    },
    {
      anchor: a = 'left',
      BackdropProps: l,
      children: c,
      className: u,
      elevation: d = 16,
      hideBackdrop: p = !1,
      ModalProps: { BackdropProps: m } = {},
      onClose: x,
      open: v = !1,
      PaperProps: w = {},
      SlideProps: h,
      TransitionComponent: y = fb,
      transitionDuration: g = s,
      variant: k = 'temporary',
    } = r,
    $ = H(r.ModalProps, lO),
    f = H(r, cO),
    S = b.useRef(!1);
  b.useEffect(() => {
    S.current = !0;
  }, []);
  const P = hO({ direction: i ? 'rtl' : 'ltr' }, a),
    R = E({}, r, { anchor: a, elevation: d, open: v, variant: k }, f),
    A = uO(R),
    z = C.jsx(
      fO,
      E({ elevation: k === 'temporary' ? d : 0, square: !0 }, w, {
        className: X(A.paper, w.className),
        ownerState: R,
        children: c,
      })
    );
  if (k === 'permanent')
    return C.jsx(
      Tv,
      E({ className: X(A.root, A.docked, u), ownerState: R, ref: n }, f, { children: z })
    );
  const F = C.jsx(
    y,
    E({ in: v, direction: hb[P], timeout: g, appear: S.current }, h, { children: z })
  );
  return k === 'persistent'
    ? C.jsx(Tv, E({ className: X(A.root, A.docked, u), ownerState: R, ref: n }, f, { children: F }))
    : C.jsx(
        dO,
        E(
          {
            BackdropProps: E({}, l, m, { transitionDuration: g }),
            className: X(A.root, A.modal, u),
            open: v,
            ownerState: R,
            onClose: x,
            hideBackdrop: p,
            ref: n,
          },
          f,
          $,
          { children: F }
        )
      );
});
function gO() {
  const e = zp();
  return b.useMemo(
    () => ({
      back: () => e(-1),
      forward: () => e(1),
      refresh: () => e(0),
      push: (n) => e(n),
      replace: (n) => e(n, { replace: !0 }),
    }),
    [e]
  );
}
function $h() {
  const { pathname: e } = bo();
  return b.useMemo(() => e, [e]);
}
const vO = { root: 'mnl__scrollbar__root' };
var yO = typeof global == 'object' && global && global.Object === Object && global,
  xO = typeof self == 'object' && self && self.Object === Object && self,
  mb = yO || xO || Function('return this')(),
  sc = mb.Symbol,
  gb = Object.prototype,
  bO = gb.hasOwnProperty,
  CO = gb.toString,
  es = sc ? sc.toStringTag : void 0;
function SO(e) {
  var t = bO.call(e, es),
    n = e[es];
  try {
    e[es] = void 0;
    var r = !0;
  } catch {}
  var o = CO.call(e);
  return r && (t ? (e[es] = n) : delete e[es]), o;
}
var wO = Object.prototype,
  kO = wO.toString;
function EO(e) {
  return kO.call(e);
}
var $O = '[object Null]',
  PO = '[object Undefined]',
  Rv = sc ? sc.toStringTag : void 0;
function TO(e) {
  return e == null ? (e === void 0 ? PO : $O) : Rv && Rv in Object(e) ? SO(e) : EO(e);
}
function RO(e) {
  return e != null && typeof e == 'object';
}
var OO = '[object Symbol]';
function MO(e) {
  return typeof e == 'symbol' || (RO(e) && TO(e) == OO);
}
var AO = /\s/;
function _O(e) {
  for (var t = e.length; t-- && AO.test(e.charAt(t)); );
  return t;
}
var IO = /^\s+/;
function jO(e) {
  return e && e.slice(0, _O(e) + 1).replace(IO, '');
}
function ac(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var Ov = NaN,
  NO = /^[-+]0x[0-9a-f]+$/i,
  LO = /^0b[01]+$/i,
  DO = /^0o[0-7]+$/i,
  zO = parseInt;
function Mv(e) {
  if (typeof e == 'number') return e;
  if (MO(e)) return Ov;
  if (ac(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
    e = ac(t) ? t + '' : t;
  }
  if (typeof e != 'string') return e === 0 ? e : +e;
  e = jO(e);
  var n = LO.test(e);
  return n || DO.test(e) ? zO(e.slice(2), n ? 2 : 8) : NO.test(e) ? Ov : +e;
}
var nd = function () {
    return mb.Date.now();
  },
  FO = 'Expected a function',
  BO = Math.max,
  WO = Math.min;
function Sl(e, t, n) {
  var r,
    o,
    i,
    s,
    a,
    l,
    c = 0,
    u = !1,
    d = !1,
    p = !0;
  if (typeof e != 'function') throw new TypeError(FO);
  (t = Mv(t) || 0),
    ac(n) &&
      ((u = !!n.leading),
      (d = 'maxWait' in n),
      (i = d ? BO(Mv(n.maxWait) || 0, t) : i),
      (p = 'trailing' in n ? !!n.trailing : p));
  function m(f) {
    var S = r,
      P = o;
    return (r = o = void 0), (c = f), (s = e.apply(P, S)), s;
  }
  function x(f) {
    return (c = f), (a = setTimeout(h, t)), u ? m(f) : s;
  }
  function v(f) {
    var S = f - l,
      P = f - c,
      O = t - S;
    return d ? WO(O, i - P) : O;
  }
  function w(f) {
    var S = f - l,
      P = f - c;
    return l === void 0 || S >= t || S < 0 || (d && P >= i);
  }
  function h() {
    var f = nd();
    if (w(f)) return y(f);
    a = setTimeout(h, v(f));
  }
  function y(f) {
    return (a = void 0), p && r ? m(f) : ((r = o = void 0), s);
  }
  function g() {
    a !== void 0 && clearTimeout(a), (c = 0), (r = l = o = a = void 0);
  }
  function k() {
    return a === void 0 ? s : y(nd());
  }
  function $() {
    var f = nd(),
      S = w(f);
    if (((r = arguments), (o = this), (l = f), S)) {
      if (a === void 0) return x(l);
      if (d) return clearTimeout(a), (a = setTimeout(h, t)), m(l);
    }
    return a === void 0 && (a = setTimeout(h, t)), s;
  }
  return ($.cancel = g), ($.flush = k), $;
}
var UO = 'Expected a function';
function VO(e, t, n) {
  var r = !0,
    o = !0;
  if (typeof e != 'function') throw new TypeError(UO);
  return (
    ac(n) && ((r = 'leading' in n ? !!n.leading : r), (o = 'trailing' in n ? !!n.trailing : o)),
    Sl(e, t, { leading: r, maxWait: t, trailing: o })
  );
}
var ei = function () {
  return (
    (ei =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    ei.apply(this, arguments)
  );
};
function vb(e) {
  return !e || !e.ownerDocument || !e.ownerDocument.defaultView
    ? window
    : e.ownerDocument.defaultView;
}
function yb(e) {
  return !e || !e.ownerDocument ? document : e.ownerDocument;
}
var xb = function (e) {
  var t = {},
    n = Array.prototype.reduce.call(
      e,
      function (r, o) {
        var i = o.name.match(/data-simplebar-(.+)/);
        if (i) {
          var s = i[1].replace(/\W+(.)/g, function (a, l) {
            return l.toUpperCase();
          });
          switch (o.value) {
            case 'true':
              r[s] = !0;
              break;
            case 'false':
              r[s] = !1;
              break;
            case void 0:
              r[s] = !0;
              break;
            default:
              r[s] = o.value;
          }
        }
        return r;
      },
      t
    );
  return n;
};
function bb(e, t) {
  var n;
  e && (n = e.classList).add.apply(n, t.split(' '));
}
function Cb(e, t) {
  e &&
    t.split(' ').forEach(function (n) {
      e.classList.remove(n);
    });
}
function Sb(e) {
  return '.'.concat(e.split(' ').join('.'));
}
var Ph = !!(typeof window < 'u' && window.document && window.document.createElement),
  HO = Object.freeze({
    __proto__: null,
    addClasses: bb,
    canUseDOM: Ph,
    classNamesToQuery: Sb,
    getElementDocument: yb,
    getElementWindow: vb,
    getOptions: xb,
    removeClasses: Cb,
  }),
  Do = null,
  Av = null;
Ph &&
  window.addEventListener('resize', function () {
    Av !== window.devicePixelRatio && ((Av = window.devicePixelRatio), (Do = null));
  });
function _v() {
  if (Do === null) {
    if (typeof document > 'u') return (Do = 0), Do;
    var e = document.body,
      t = document.createElement('div');
    t.classList.add('simplebar-hide-scrollbar'), e.appendChild(t);
    var n = t.getBoundingClientRect().right;
    e.removeChild(t), (Do = n);
  }
  return Do;
}
var dr = vb,
  rd = yb,
  GO = xb,
  fr = bb,
  pr = Cb,
  Pt = Sb,
  ts = (function () {
    function e(t, n) {
      n === void 0 && (n = {});
      var r = this;
      if (
        ((this.removePreventClickId = null),
        (this.minScrollbarWidth = 20),
        (this.stopScrollDelay = 175),
        (this.isScrolling = !1),
        (this.isMouseEntering = !1),
        (this.isDragging = !1),
        (this.scrollXTicking = !1),
        (this.scrollYTicking = !1),
        (this.wrapperEl = null),
        (this.contentWrapperEl = null),
        (this.contentEl = null),
        (this.offsetEl = null),
        (this.maskEl = null),
        (this.placeholderEl = null),
        (this.heightAutoObserverWrapperEl = null),
        (this.heightAutoObserverEl = null),
        (this.rtlHelpers = null),
        (this.scrollbarWidth = 0),
        (this.resizeObserver = null),
        (this.mutationObserver = null),
        (this.elStyles = null),
        (this.isRtl = null),
        (this.mouseX = 0),
        (this.mouseY = 0),
        (this.onMouseMove = function () {}),
        (this.onWindowResize = function () {}),
        (this.onStopScrolling = function () {}),
        (this.onMouseEntered = function () {}),
        (this.onScroll = function () {
          var o = dr(r.el);
          r.scrollXTicking || (o.requestAnimationFrame(r.scrollX), (r.scrollXTicking = !0)),
            r.scrollYTicking || (o.requestAnimationFrame(r.scrollY), (r.scrollYTicking = !0)),
            r.isScrolling || ((r.isScrolling = !0), fr(r.el, r.classNames.scrolling)),
            r.showScrollbar('x'),
            r.showScrollbar('y'),
            r.onStopScrolling();
        }),
        (this.scrollX = function () {
          r.axis.x.isOverflowing && r.positionScrollbar('x'), (r.scrollXTicking = !1);
        }),
        (this.scrollY = function () {
          r.axis.y.isOverflowing && r.positionScrollbar('y'), (r.scrollYTicking = !1);
        }),
        (this._onStopScrolling = function () {
          pr(r.el, r.classNames.scrolling),
            r.options.autoHide && (r.hideScrollbar('x'), r.hideScrollbar('y')),
            (r.isScrolling = !1);
        }),
        (this.onMouseEnter = function () {
          r.isMouseEntering ||
            (fr(r.el, r.classNames.mouseEntered),
            r.showScrollbar('x'),
            r.showScrollbar('y'),
            (r.isMouseEntering = !0)),
            r.onMouseEntered();
        }),
        (this._onMouseEntered = function () {
          pr(r.el, r.classNames.mouseEntered),
            r.options.autoHide && (r.hideScrollbar('x'), r.hideScrollbar('y')),
            (r.isMouseEntering = !1);
        }),
        (this._onMouseMove = function (o) {
          (r.mouseX = o.clientX),
            (r.mouseY = o.clientY),
            (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseMoveForAxis('x'),
            (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseMoveForAxis('y');
        }),
        (this.onMouseLeave = function () {
          r.onMouseMove.cancel(),
            (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseLeaveForAxis('x'),
            (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseLeaveForAxis('y'),
            (r.mouseX = -1),
            (r.mouseY = -1);
        }),
        (this._onWindowResize = function () {
          (r.scrollbarWidth = r.getScrollbarWidth()), r.hideNativeScrollbar();
        }),
        (this.onPointerEvent = function (o) {
          if (
            !(
              !r.axis.x.track.el ||
              !r.axis.y.track.el ||
              !r.axis.x.scrollbar.el ||
              !r.axis.y.scrollbar.el
            )
          ) {
            var i, s;
            (r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect()),
              (r.axis.y.track.rect = r.axis.y.track.el.getBoundingClientRect()),
              (r.axis.x.isOverflowing || r.axis.x.forceVisible) &&
                (i = r.isWithinBounds(r.axis.x.track.rect)),
              (r.axis.y.isOverflowing || r.axis.y.forceVisible) &&
                (s = r.isWithinBounds(r.axis.y.track.rect)),
              (i || s) &&
                (o.stopPropagation(),
                o.type === 'pointerdown' &&
                  o.pointerType !== 'touch' &&
                  (i &&
                    ((r.axis.x.scrollbar.rect = r.axis.x.scrollbar.el.getBoundingClientRect()),
                    r.isWithinBounds(r.axis.x.scrollbar.rect)
                      ? r.onDragStart(o, 'x')
                      : r.onTrackClick(o, 'x')),
                  s &&
                    ((r.axis.y.scrollbar.rect = r.axis.y.scrollbar.el.getBoundingClientRect()),
                    r.isWithinBounds(r.axis.y.scrollbar.rect)
                      ? r.onDragStart(o, 'y')
                      : r.onTrackClick(o, 'y'))));
          }
        }),
        (this.drag = function (o) {
          var i, s, a, l, c, u, d, p, m, x, v;
          if (!(!r.draggedAxis || !r.contentWrapperEl)) {
            var w,
              h = r.axis[r.draggedAxis].track,
              y =
                (s =
                  (i = h.rect) === null || i === void 0
                    ? void 0
                    : i[r.axis[r.draggedAxis].sizeAttr]) !== null && s !== void 0
                  ? s
                  : 0,
              g = r.axis[r.draggedAxis].scrollbar,
              k =
                (l =
                  (a = r.contentWrapperEl) === null || a === void 0
                    ? void 0
                    : a[r.axis[r.draggedAxis].scrollSizeAttr]) !== null && l !== void 0
                  ? l
                  : 0,
              $ = parseInt(
                (u =
                  (c = r.elStyles) === null || c === void 0
                    ? void 0
                    : c[r.axis[r.draggedAxis].sizeAttr]) !== null && u !== void 0
                  ? u
                  : '0px',
                10
              );
            o.preventDefault(),
              o.stopPropagation(),
              r.draggedAxis === 'y' ? (w = o.pageY) : (w = o.pageX);
            var f =
              w -
              ((p =
                (d = h.rect) === null || d === void 0
                  ? void 0
                  : d[r.axis[r.draggedAxis].offsetAttr]) !== null && p !== void 0
                ? p
                : 0) -
              r.axis[r.draggedAxis].dragOffset;
            f =
              r.draggedAxis === 'x' && r.isRtl
                ? ((x =
                    (m = h.rect) === null || m === void 0
                      ? void 0
                      : m[r.axis[r.draggedAxis].sizeAttr]) !== null && x !== void 0
                    ? x
                    : 0) -
                  g.size -
                  f
                : f;
            var S = f / (y - g.size),
              P = S * (k - $);
            r.draggedAxis === 'x' &&
              r.isRtl &&
              (P =
                !((v = e.getRtlHelpers()) === null || v === void 0) && v.isScrollingToNegative
                  ? -P
                  : P),
              (r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr] = P);
          }
        }),
        (this.onEndDrag = function (o) {
          r.isDragging = !1;
          var i = rd(r.el),
            s = dr(r.el);
          o.preventDefault(),
            o.stopPropagation(),
            pr(r.el, r.classNames.dragging),
            r.onStopScrolling(),
            i.removeEventListener('mousemove', r.drag, !0),
            i.removeEventListener('mouseup', r.onEndDrag, !0),
            (r.removePreventClickId = s.setTimeout(function () {
              i.removeEventListener('click', r.preventClick, !0),
                i.removeEventListener('dblclick', r.preventClick, !0),
                (r.removePreventClickId = null);
            }));
        }),
        (this.preventClick = function (o) {
          o.preventDefault(), o.stopPropagation();
        }),
        (this.el = t),
        (this.options = ei(ei({}, e.defaultOptions), n)),
        (this.classNames = ei(ei({}, e.defaultOptions.classNames), n.classNames)),
        (this.axis = {
          x: {
            scrollOffsetAttr: 'scrollLeft',
            sizeAttr: 'width',
            scrollSizeAttr: 'scrollWidth',
            offsetSizeAttr: 'offsetWidth',
            offsetAttr: 'left',
            overflowAttr: 'overflowX',
            dragOffset: 0,
            isOverflowing: !0,
            forceVisible: !1,
            track: { size: null, el: null, rect: null, isVisible: !1 },
            scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
          },
          y: {
            scrollOffsetAttr: 'scrollTop',
            sizeAttr: 'height',
            scrollSizeAttr: 'scrollHeight',
            offsetSizeAttr: 'offsetHeight',
            offsetAttr: 'top',
            overflowAttr: 'overflowY',
            dragOffset: 0,
            isOverflowing: !0,
            forceVisible: !1,
            track: { size: null, el: null, rect: null, isVisible: !1 },
            scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
          },
        }),
        typeof this.el != 'object' || !this.el.nodeName)
      )
        throw new Error(
          'Argument passed to SimpleBar must be an HTML element instead of '.concat(this.el)
        );
      (this.onMouseMove = VO(this._onMouseMove, 64)),
        (this.onWindowResize = Sl(this._onWindowResize, 64, { leading: !0 })),
        (this.onStopScrolling = Sl(this._onStopScrolling, this.stopScrollDelay)),
        (this.onMouseEntered = Sl(this._onMouseEntered, this.stopScrollDelay)),
        this.init();
    }
    return (
      (e.getRtlHelpers = function () {
        if (e.rtlHelpers) return e.rtlHelpers;
        var t = document.createElement('div');
        t.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
        var n = t.firstElementChild,
          r = n == null ? void 0 : n.firstElementChild;
        if (!r) return null;
        document.body.appendChild(n), (n.scrollLeft = 0);
        var o = e.getOffset(n),
          i = e.getOffset(r);
        n.scrollLeft = -999;
        var s = e.getOffset(r);
        return (
          document.body.removeChild(n),
          (e.rtlHelpers = {
            isScrollOriginAtZero: o.left !== i.left,
            isScrollingToNegative: i.left !== s.left,
          }),
          e.rtlHelpers
        );
      }),
      (e.prototype.getScrollbarWidth = function () {
        try {
          return (this.contentWrapperEl &&
            getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display === 'none') ||
            'scrollbarWidth' in document.documentElement.style ||
            '-ms-overflow-style' in document.documentElement.style
            ? 0
            : _v();
        } catch {
          return _v();
        }
      }),
      (e.getOffset = function (t) {
        var n = t.getBoundingClientRect(),
          r = rd(t),
          o = dr(t);
        return {
          top: n.top + (o.pageYOffset || r.documentElement.scrollTop),
          left: n.left + (o.pageXOffset || r.documentElement.scrollLeft),
        };
      }),
      (e.prototype.init = function () {
        Ph &&
          (this.initDOM(),
          (this.rtlHelpers = e.getRtlHelpers()),
          (this.scrollbarWidth = this.getScrollbarWidth()),
          this.recalculate(),
          this.initListeners());
      }),
      (e.prototype.initDOM = function () {
        var t, n;
        (this.wrapperEl = this.el.querySelector(Pt(this.classNames.wrapper))),
          (this.contentWrapperEl =
            this.options.scrollableNode ||
            this.el.querySelector(Pt(this.classNames.contentWrapper))),
          (this.contentEl =
            this.options.contentNode || this.el.querySelector(Pt(this.classNames.contentEl))),
          (this.offsetEl = this.el.querySelector(Pt(this.classNames.offset))),
          (this.maskEl = this.el.querySelector(Pt(this.classNames.mask))),
          (this.placeholderEl = this.findChild(this.wrapperEl, Pt(this.classNames.placeholder))),
          (this.heightAutoObserverWrapperEl = this.el.querySelector(
            Pt(this.classNames.heightAutoObserverWrapperEl)
          )),
          (this.heightAutoObserverEl = this.el.querySelector(
            Pt(this.classNames.heightAutoObserverEl)
          )),
          (this.axis.x.track.el = this.findChild(
            this.el,
            ''.concat(Pt(this.classNames.track)).concat(Pt(this.classNames.horizontal))
          )),
          (this.axis.y.track.el = this.findChild(
            this.el,
            ''.concat(Pt(this.classNames.track)).concat(Pt(this.classNames.vertical))
          )),
          (this.axis.x.scrollbar.el =
            ((t = this.axis.x.track.el) === null || t === void 0
              ? void 0
              : t.querySelector(Pt(this.classNames.scrollbar))) || null),
          (this.axis.y.scrollbar.el =
            ((n = this.axis.y.track.el) === null || n === void 0
              ? void 0
              : n.querySelector(Pt(this.classNames.scrollbar))) || null),
          this.options.autoHide ||
            (fr(this.axis.x.scrollbar.el, this.classNames.visible),
            fr(this.axis.y.scrollbar.el, this.classNames.visible));
      }),
      (e.prototype.initListeners = function () {
        var t = this,
          n,
          r = dr(this.el);
        if (
          (this.el.addEventListener('mouseenter', this.onMouseEnter),
          this.el.addEventListener('pointerdown', this.onPointerEvent, !0),
          this.el.addEventListener('mousemove', this.onMouseMove),
          this.el.addEventListener('mouseleave', this.onMouseLeave),
          (n = this.contentWrapperEl) === null ||
            n === void 0 ||
            n.addEventListener('scroll', this.onScroll),
          r.addEventListener('resize', this.onWindowResize),
          !!this.contentEl)
        ) {
          if (window.ResizeObserver) {
            var o = !1,
              i = r.ResizeObserver || ResizeObserver;
            (this.resizeObserver = new i(function () {
              o &&
                r.requestAnimationFrame(function () {
                  t.recalculate();
                });
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              r.requestAnimationFrame(function () {
                o = !0;
              });
          }
          (this.mutationObserver = new r.MutationObserver(function () {
            r.requestAnimationFrame(function () {
              t.recalculate();
            });
          })),
            this.mutationObserver.observe(this.contentEl, {
              childList: !0,
              subtree: !0,
              characterData: !0,
            });
        }
      }),
      (e.prototype.recalculate = function () {
        if (
          !(
            !this.heightAutoObserverEl ||
            !this.contentEl ||
            !this.contentWrapperEl ||
            !this.wrapperEl ||
            !this.placeholderEl
          )
        ) {
          var t = dr(this.el);
          (this.elStyles = t.getComputedStyle(this.el)),
            (this.isRtl = this.elStyles.direction === 'rtl');
          var n = this.contentEl.offsetWidth,
            r = this.heightAutoObserverEl.offsetHeight <= 1,
            o = this.heightAutoObserverEl.offsetWidth <= 1 || n > 0,
            i = this.contentWrapperEl.offsetWidth,
            s = this.elStyles.overflowX,
            a = this.elStyles.overflowY;
          (this.contentEl.style.padding = ''
            .concat(this.elStyles.paddingTop, ' ')
            .concat(this.elStyles.paddingRight, ' ')
            .concat(this.elStyles.paddingBottom, ' ')
            .concat(this.elStyles.paddingLeft)),
            (this.wrapperEl.style.margin = '-'
              .concat(this.elStyles.paddingTop, ' -')
              .concat(this.elStyles.paddingRight, ' -')
              .concat(this.elStyles.paddingBottom, ' -')
              .concat(this.elStyles.paddingLeft));
          var l = this.contentEl.scrollHeight,
            c = this.contentEl.scrollWidth;
          (this.contentWrapperEl.style.height = r ? 'auto' : '100%'),
            (this.placeholderEl.style.width = o ? ''.concat(n || c, 'px') : 'auto'),
            (this.placeholderEl.style.height = ''.concat(l, 'px'));
          var u = this.contentWrapperEl.offsetHeight;
          (this.axis.x.isOverflowing = n !== 0 && c > n),
            (this.axis.y.isOverflowing = l > u),
            (this.axis.x.isOverflowing = s === 'hidden' ? !1 : this.axis.x.isOverflowing),
            (this.axis.y.isOverflowing = a === 'hidden' ? !1 : this.axis.y.isOverflowing),
            (this.axis.x.forceVisible =
              this.options.forceVisible === 'x' || this.options.forceVisible === !0),
            (this.axis.y.forceVisible =
              this.options.forceVisible === 'y' || this.options.forceVisible === !0),
            this.hideNativeScrollbar();
          var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
            p = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
          (this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - p),
            (this.axis.y.isOverflowing = this.axis.y.isOverflowing && l > u - d),
            (this.axis.x.scrollbar.size = this.getScrollbarSize('x')),
            (this.axis.y.scrollbar.size = this.getScrollbarSize('y')),
            this.axis.x.scrollbar.el &&
              (this.axis.x.scrollbar.el.style.width = ''.concat(this.axis.x.scrollbar.size, 'px')),
            this.axis.y.scrollbar.el &&
              (this.axis.y.scrollbar.el.style.height = ''.concat(this.axis.y.scrollbar.size, 'px')),
            this.positionScrollbar('x'),
            this.positionScrollbar('y'),
            this.toggleTrackVisibility('x'),
            this.toggleTrackVisibility('y');
        }
      }),
      (e.prototype.getScrollbarSize = function (t) {
        var n, r;
        if ((t === void 0 && (t = 'y'), !this.axis[t].isOverflowing || !this.contentEl)) return 0;
        var o = this.contentEl[this.axis[t].scrollSizeAttr],
          i =
            (r =
              (n = this.axis[t].track.el) === null || n === void 0
                ? void 0
                : n[this.axis[t].offsetSizeAttr]) !== null && r !== void 0
              ? r
              : 0,
          s = i / o,
          a;
        return (
          (a = Math.max(~~(s * i), this.options.scrollbarMinSize)),
          this.options.scrollbarMaxSize && (a = Math.min(a, this.options.scrollbarMaxSize)),
          a
        );
      }),
      (e.prototype.positionScrollbar = function (t) {
        var n, r, o;
        t === void 0 && (t = 'y');
        var i = this.axis[t].scrollbar;
        if (!(!this.axis[t].isOverflowing || !this.contentWrapperEl || !i.el || !this.elStyles)) {
          var s = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
            a =
              ((n = this.axis[t].track.el) === null || n === void 0
                ? void 0
                : n[this.axis[t].offsetSizeAttr]) || 0,
            l = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
            c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
          (c =
            t === 'x' &&
            this.isRtl &&
            !((r = e.getRtlHelpers()) === null || r === void 0) &&
            r.isScrollOriginAtZero
              ? -c
              : c),
            t === 'x' &&
              this.isRtl &&
              (c =
                !((o = e.getRtlHelpers()) === null || o === void 0) && o.isScrollingToNegative
                  ? c
                  : -c);
          var u = c / (s - l),
            d = ~~((a - i.size) * u);
          (d = t === 'x' && this.isRtl ? -d + (a - i.size) : d),
            (i.el.style.transform =
              t === 'x'
                ? 'translate3d('.concat(d, 'px, 0, 0)')
                : 'translate3d(0, '.concat(d, 'px, 0)'));
        }
      }),
      (e.prototype.toggleTrackVisibility = function (t) {
        t === void 0 && (t = 'y');
        var n = this.axis[t].track.el,
          r = this.axis[t].scrollbar.el;
        !n ||
          !r ||
          !this.contentWrapperEl ||
          (this.axis[t].isOverflowing || this.axis[t].forceVisible
            ? ((n.style.visibility = 'visible'),
              (this.contentWrapperEl.style[this.axis[t].overflowAttr] = 'scroll'),
              this.el.classList.add(''.concat(this.classNames.scrollable, '-').concat(t)))
            : ((n.style.visibility = 'hidden'),
              (this.contentWrapperEl.style[this.axis[t].overflowAttr] = 'hidden'),
              this.el.classList.remove(''.concat(this.classNames.scrollable, '-').concat(t))),
          this.axis[t].isOverflowing ? (r.style.display = 'block') : (r.style.display = 'none'));
      }),
      (e.prototype.showScrollbar = function (t) {
        t === void 0 && (t = 'y'),
          this.axis[t].isOverflowing &&
            !this.axis[t].scrollbar.isVisible &&
            (fr(this.axis[t].scrollbar.el, this.classNames.visible),
            (this.axis[t].scrollbar.isVisible = !0));
      }),
      (e.prototype.hideScrollbar = function (t) {
        t === void 0 && (t = 'y'),
          !this.isDragging &&
            this.axis[t].isOverflowing &&
            this.axis[t].scrollbar.isVisible &&
            (pr(this.axis[t].scrollbar.el, this.classNames.visible),
            (this.axis[t].scrollbar.isVisible = !1));
      }),
      (e.prototype.hideNativeScrollbar = function () {
        this.offsetEl &&
          ((this.offsetEl.style[this.isRtl ? 'left' : 'right'] =
            this.axis.y.isOverflowing || this.axis.y.forceVisible
              ? '-'.concat(this.scrollbarWidth, 'px')
              : '0px'),
          (this.offsetEl.style.bottom =
            this.axis.x.isOverflowing || this.axis.x.forceVisible
              ? '-'.concat(this.scrollbarWidth, 'px')
              : '0px'));
      }),
      (e.prototype.onMouseMoveForAxis = function (t) {
        t === void 0 && (t = 'y');
        var n = this.axis[t];
        !n.track.el ||
          !n.scrollbar.el ||
          ((n.track.rect = n.track.el.getBoundingClientRect()),
          (n.scrollbar.rect = n.scrollbar.el.getBoundingClientRect()),
          this.isWithinBounds(n.track.rect)
            ? (this.showScrollbar(t),
              fr(n.track.el, this.classNames.hover),
              this.isWithinBounds(n.scrollbar.rect)
                ? fr(n.scrollbar.el, this.classNames.hover)
                : pr(n.scrollbar.el, this.classNames.hover))
            : (pr(n.track.el, this.classNames.hover),
              this.options.autoHide && this.hideScrollbar(t)));
      }),
      (e.prototype.onMouseLeaveForAxis = function (t) {
        t === void 0 && (t = 'y'),
          pr(this.axis[t].track.el, this.classNames.hover),
          pr(this.axis[t].scrollbar.el, this.classNames.hover),
          this.options.autoHide && this.hideScrollbar(t);
      }),
      (e.prototype.onDragStart = function (t, n) {
        var r;
        n === void 0 && (n = 'y'), (this.isDragging = !0);
        var o = rd(this.el),
          i = dr(this.el),
          s = this.axis[n].scrollbar,
          a = n === 'y' ? t.pageY : t.pageX;
        (this.axis[n].dragOffset =
          a - (((r = s.rect) === null || r === void 0 ? void 0 : r[this.axis[n].offsetAttr]) || 0)),
          (this.draggedAxis = n),
          fr(this.el, this.classNames.dragging),
          o.addEventListener('mousemove', this.drag, !0),
          o.addEventListener('mouseup', this.onEndDrag, !0),
          this.removePreventClickId === null
            ? (o.addEventListener('click', this.preventClick, !0),
              o.addEventListener('dblclick', this.preventClick, !0))
            : (i.clearTimeout(this.removePreventClickId), (this.removePreventClickId = null));
      }),
      (e.prototype.onTrackClick = function (t, n) {
        var r = this,
          o,
          i,
          s,
          a;
        n === void 0 && (n = 'y');
        var l = this.axis[n];
        if (!(!this.options.clickOnTrack || !l.scrollbar.el || !this.contentWrapperEl)) {
          t.preventDefault();
          var c = dr(this.el);
          this.axis[n].scrollbar.rect = l.scrollbar.el.getBoundingClientRect();
          var u = this.axis[n].scrollbar,
            d =
              (i = (o = u.rect) === null || o === void 0 ? void 0 : o[this.axis[n].offsetAttr]) !==
                null && i !== void 0
                ? i
                : 0,
            p = parseInt(
              (a =
                (s = this.elStyles) === null || s === void 0
                  ? void 0
                  : s[this.axis[n].sizeAttr]) !== null && a !== void 0
                ? a
                : '0px',
              10
            ),
            m = this.contentWrapperEl[this.axis[n].scrollOffsetAttr],
            x = n === 'y' ? this.mouseY - d : this.mouseX - d,
            v = x < 0 ? -1 : 1,
            w = v === -1 ? m - p : m + p,
            h = 40,
            y = function () {
              r.contentWrapperEl &&
                (v === -1
                  ? m > w &&
                    ((m -= h),
                    (r.contentWrapperEl[r.axis[n].scrollOffsetAttr] = m),
                    c.requestAnimationFrame(y))
                  : m < w &&
                    ((m += h),
                    (r.contentWrapperEl[r.axis[n].scrollOffsetAttr] = m),
                    c.requestAnimationFrame(y)));
            };
          y();
        }
      }),
      (e.prototype.getContentElement = function () {
        return this.contentEl;
      }),
      (e.prototype.getScrollElement = function () {
        return this.contentWrapperEl;
      }),
      (e.prototype.removeListeners = function () {
        var t = dr(this.el);
        this.el.removeEventListener('mouseenter', this.onMouseEnter),
          this.el.removeEventListener('pointerdown', this.onPointerEvent, !0),
          this.el.removeEventListener('mousemove', this.onMouseMove),
          this.el.removeEventListener('mouseleave', this.onMouseLeave),
          this.contentWrapperEl &&
            this.contentWrapperEl.removeEventListener('scroll', this.onScroll),
          t.removeEventListener('resize', this.onWindowResize),
          this.mutationObserver && this.mutationObserver.disconnect(),
          this.resizeObserver && this.resizeObserver.disconnect(),
          this.onMouseMove.cancel(),
          this.onWindowResize.cancel(),
          this.onStopScrolling.cancel(),
          this.onMouseEntered.cancel();
      }),
      (e.prototype.unMount = function () {
        this.removeListeners();
      }),
      (e.prototype.isWithinBounds = function (t) {
        return (
          this.mouseX >= t.left &&
          this.mouseX <= t.left + t.width &&
          this.mouseY >= t.top &&
          this.mouseY <= t.top + t.height
        );
      }),
      (e.prototype.findChild = function (t, n) {
        var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
        return Array.prototype.filter.call(t.children, function (o) {
          return r.call(o, n);
        })[0];
      }),
      (e.rtlHelpers = null),
      (e.defaultOptions = {
        forceVisible: !1,
        clickOnTrack: !0,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        ariaLabel: 'scrollable content',
        tabIndex: 0,
        classNames: {
          contentEl: 'simplebar-content',
          contentWrapper: 'simplebar-content-wrapper',
          offset: 'simplebar-offset',
          mask: 'simplebar-mask',
          wrapper: 'simplebar-wrapper',
          placeholder: 'simplebar-placeholder',
          scrollbar: 'simplebar-scrollbar',
          track: 'simplebar-track',
          heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
          heightAutoObserverEl: 'simplebar-height-auto-observer',
          visible: 'simplebar-visible',
          horizontal: 'simplebar-horizontal',
          vertical: 'simplebar-vertical',
          hover: 'simplebar-hover',
          dragging: 'simplebar-dragging',
          scrolling: 'simplebar-scrolling',
          scrollable: 'simplebar-scrollable',
          mouseEntered: 'simplebar-mouse-entered',
        },
        scrollableNode: null,
        contentNode: null,
        autoHide: !0,
      }),
      (e.getOptions = GO),
      (e.helpers = HO),
      e
    );
  })(),
  Ft = function () {
    return (
      (Ft =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      Ft.apply(this, arguments)
    );
  };
function KO(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
var wb = b.forwardRef(function (e, t) {
  var n = e.children,
    r = e.scrollableNodeProps,
    o = r === void 0 ? {} : r,
    i = KO(e, ['children', 'scrollableNodeProps']),
    s = b.useRef(),
    a = b.useRef(),
    l = b.useRef(),
    c = {},
    u = {};
  Object.keys(i).forEach(function (m) {
    Object.prototype.hasOwnProperty.call(ts.defaultOptions, m) ? (c[m] = i[m]) : (u[m] = i[m]);
  });
  var d = Ft(Ft({}, ts.defaultOptions.classNames), c.classNames),
    p = Ft(Ft({}, o), {
      className: ''.concat(d.contentWrapper).concat(o.className ? ' '.concat(o.className) : ''),
      tabIndex: c.tabIndex || ts.defaultOptions.tabIndex,
      role: 'region',
      'aria-label': c.ariaLabel || ts.defaultOptions.ariaLabel,
    });
  return (
    b.useEffect(function () {
      var m;
      return (
        (a.current = p.ref ? p.ref.current : a.current),
        s.current &&
          ((m = new ts(
            s.current,
            Ft(
              Ft(Ft({}, c), a.current && { scrollableNode: a.current }),
              l.current && { contentNode: l.current }
            )
          )),
          typeof t == 'function' ? t(m) : t && (t.current = m)),
        function () {
          m == null || m.unMount(), (m = null), typeof t == 'function' && t(null);
        }
      );
    }, []),
    b.createElement(
      'div',
      Ft({ 'data-simplebar': 'init', ref: s }, u),
      b.createElement(
        'div',
        { className: d.wrapper },
        b.createElement(
          'div',
          { className: d.heightAutoObserverWrapperEl },
          b.createElement('div', { className: d.heightAutoObserverEl })
        ),
        b.createElement(
          'div',
          { className: d.mask },
          b.createElement(
            'div',
            { className: d.offset },
            typeof n == 'function'
              ? n({
                  scrollableNodeRef: a,
                  scrollableNodeProps: Ft(Ft({}, p), { ref: a }),
                  contentNodeRef: l,
                  contentNodeProps: { className: d.contentEl, ref: l },
                })
              : b.createElement(
                  'div',
                  Ft({}, p),
                  b.createElement('div', { className: d.contentEl }, n)
                )
          )
        ),
        b.createElement('div', { className: d.placeholder })
      ),
      b.createElement(
        'div',
        { className: ''.concat(d.track, ' simplebar-horizontal') },
        b.createElement('div', { className: d.scrollbar })
      ),
      b.createElement(
        'div',
        { className: ''.concat(d.track, ' simplebar-vertical') },
        b.createElement('div', { className: d.scrollbar })
      )
    )
  );
});
wb.displayName = 'SimpleBar';
const kb = b.forwardRef(({ slotProps: e, children: t, fillContent: n, sx: r, ...o }, i) =>
  C.jsx(le, {
    component: wb,
    scrollableNodeProps: { ref: i },
    clickOnTrack: !1,
    className: vO.root,
    sx: {
      minWidth: 0,
      minHeight: 0,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      '& .simplebar-wrapper': e == null ? void 0 : e.wrapper,
      '& .simplebar-content-wrapper': e == null ? void 0 : e.contentWrapper,
      '& .simplebar-content': {
        ...(n && { minHeight: 1, display: 'flex', flex: '1 1 auto', flexDirection: 'column' }),
        ...(e == null ? void 0 : e.content),
      },
      ...r,
    },
    ...o,
    children: t,
  })
);
function YO(e) {
  return he('MuiButton', e);
}
const Ya = ue('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
  ]),
  XO = b.createContext({}),
  qO = b.createContext(void 0),
  QO = [
    'children',
    'color',
    'component',
    'className',
    'disabled',
    'disableElevation',
    'disableFocusRipple',
    'endIcon',
    'focusVisibleClassName',
    'fullWidth',
    'size',
    'startIcon',
    'type',
    'variant',
  ],
  ZO = (e) => {
    const { color: t, disableElevation: n, fullWidth: r, size: o, variant: i, classes: s } = e,
      a = {
        root: [
          'root',
          i,
          `${i}${U(t)}`,
          `size${U(o)}`,
          `${i}Size${U(o)}`,
          `color${U(t)}`,
          n && 'disableElevation',
          r && 'fullWidth',
        ],
        label: ['label'],
        startIcon: ['icon', 'startIcon', `iconSize${U(o)}`],
        endIcon: ['icon', 'endIcon', `iconSize${U(o)}`],
      },
      l = ge(a, YO, s);
    return E({}, s, l);
  },
  Eb = (e) =>
    E(
      {},
      e.size === 'small' && { '& > *:nth-of-type(1)': { fontSize: 18 } },
      e.size === 'medium' && { '& > *:nth-of-type(1)': { fontSize: 20 } },
      e.size === 'large' && { '& > *:nth-of-type(1)': { fontSize: 22 } }
    ),
  JO = q(wo, {
    shouldForwardProp: (e) => So(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${U(n.color)}`],
        t[`size${U(n.size)}`],
        t[`${n.variant}Size${U(n.size)}`],
        n.color === 'inherit' && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o = e.palette.mode === 'light' ? e.palette.grey[300] : e.palette.grey[800],
        i = e.palette.mode === 'light' ? e.palette.grey.A100 : e.palette.grey[700];
      return E(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: '6px 16px',
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ['background-color', 'box-shadow', 'border-color', 'color'],
            { duration: e.transitions.duration.short }
          ),
          '&:hover': E(
            {
              textDecoration: 'none',
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Le(e.palette.text.primary, e.palette.action.hoverOpacity),
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
            t.variant === 'text' &&
              t.color !== 'inherit' && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : Le(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'outlined' &&
              t.color !== 'inherit' && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : Le(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'contained' && {
              backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
              boxShadow: (e.vars || e).shadows[4],
              '@media (hover: none)': {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === 'contained' &&
              t.color !== 'inherit' && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                '@media (hover: none)': { backgroundColor: (e.vars || e).palette[t.color].main },
              }
          ),
          '&:active': E({}, t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[8] }),
          [`&.${Ya.focusVisible}`]: E(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Ya.disabled}`]: E(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === 'outlined' && {
              border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
            },
            t.variant === 'contained' && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === 'text' && { padding: '6px 8px' },
        t.variant === 'text' &&
          t.color !== 'inherit' && { color: (e.vars || e).palette[t.color].main },
        t.variant === 'outlined' && { padding: '5px 15px', border: '1px solid currentColor' },
        t.variant === 'outlined' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${Le(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === 'contained' && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
              ? void 0
              : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === 'contained' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === 'inherit' && { color: 'inherit', borderColor: 'currentColor' },
        t.size === 'small' &&
          t.variant === 'text' && { padding: '4px 5px', fontSize: e.typography.pxToRem(13) },
        t.size === 'large' &&
          t.variant === 'text' && { padding: '8px 11px', fontSize: e.typography.pxToRem(15) },
        t.size === 'small' &&
          t.variant === 'outlined' && { padding: '3px 9px', fontSize: e.typography.pxToRem(13) },
        t.size === 'large' &&
          t.variant === 'outlined' && { padding: '7px 21px', fontSize: e.typography.pxToRem(15) },
        t.size === 'small' &&
          t.variant === 'contained' && { padding: '4px 10px', fontSize: e.typography.pxToRem(13) },
        t.size === 'large' &&
          t.variant === 'contained' && { padding: '8px 22px', fontSize: e.typography.pxToRem(15) },
        t.fullWidth && { width: '100%' }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
        [`&.${Ya.focusVisible}`]: { boxShadow: 'none' },
        '&:active': { boxShadow: 'none' },
        [`&.${Ya.disabled}`]: { boxShadow: 'none' },
      }
  ),
  e8 = q('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${U(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    E(
      { display: 'inherit', marginRight: 8, marginLeft: -4 },
      e.size === 'small' && { marginLeft: -2 },
      Eb(e)
    )
  ),
  t8 = q('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${U(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    E(
      { display: 'inherit', marginRight: -4, marginLeft: 8 },
      e.size === 'small' && { marginRight: -2 },
      Eb(e)
    )
  ),
  au = b.forwardRef(function (t, n) {
    const r = b.useContext(XO),
      o = b.useContext(qO),
      i = qs(r, t),
      s = ce({ props: i, name: 'MuiButton' }),
      {
        children: a,
        color: l = 'primary',
        component: c = 'button',
        className: u,
        disabled: d = !1,
        disableElevation: p = !1,
        disableFocusRipple: m = !1,
        endIcon: x,
        focusVisibleClassName: v,
        fullWidth: w = !1,
        size: h = 'medium',
        startIcon: y,
        type: g,
        variant: k = 'text',
      } = s,
      $ = H(s, QO),
      f = E({}, s, {
        color: l,
        component: c,
        disabled: d,
        disableElevation: p,
        disableFocusRipple: m,
        fullWidth: w,
        size: h,
        type: g,
        variant: k,
      }),
      S = ZO(f),
      P = y && C.jsx(e8, { className: S.startIcon, ownerState: f, children: y }),
      O = x && C.jsx(t8, { className: S.endIcon, ownerState: f, children: x }),
      R = o || '';
    return C.jsxs(
      JO,
      E(
        {
          ownerState: f,
          className: X(r.className, S.root, u, R),
          component: c,
          disabled: d,
          focusRipple: !m,
          focusVisibleClassName: X(S.focusVisible, v),
          ref: n,
          type: g,
        },
        $,
        { classes: S, children: [P, a, O] }
      )
    );
  });
function n8({ sx: e, ...t }) {
  return C.jsxs(le, {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    sx: { mb: 4, textAlign: 'center', ...e },
    ...t,
    children: [
      C.jsx(St, {
        variant: 'h6',
        sx: (n) => ({
          ...H3(`to right, ${n.vars.palette.secondary.main}, ${n.vars.palette.warning.main}`),
        }),
        children: 'More features?',
      }),
      C.jsxs(St, {
        variant: 'body2',
        sx: { color: 'text.secondary', mt: 0.5 },
        children: [
          'From only ',
          C.jsx(le, { component: 'strong', sx: { color: 'text.primary' }, children: '$69' }),
        ],
      }),
      C.jsx(le, {
        component: 'img',
        alt: 'Minimal dashboard',
        src: '/assets/illustrations/illustration-dashboard.webp',
        sx: { width: 200, my: 2 },
      }),
      C.jsx(au, {
        href: 'https://material-ui.com/store/items/minimal-dashboard/',
        target: '_blank',
        variant: 'contained',
        color: 'inherit',
        children: 'Upgrade to Pro',
      }),
    ],
  });
}
const r8 = [
  'addEndListener',
  'appear',
  'children',
  'easing',
  'in',
  'onEnter',
  'onEntered',
  'onEntering',
  'onExit',
  'onExited',
  'onExiting',
  'style',
  'timeout',
  'TransitionComponent',
];
function Af(e) {
  return `scale(${e}, ${e ** 2})`;
}
const o8 = {
    entering: { opacity: 1, transform: Af(1) },
    entered: { opacity: 1, transform: 'none' },
  },
  od =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  lc = b.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: c,
        onEntering: u,
        onExit: d,
        onExited: p,
        onExiting: m,
        style: x,
        timeout: v = 'auto',
        TransitionComponent: w = $n,
      } = t,
      h = H(t, r8),
      y = Zo(),
      g = b.useRef(),
      k = Nt(),
      $ = b.useRef(null),
      f = Ve($, i.ref, n),
      S = (_) => (M) => {
        if (_) {
          const j = $.current;
          M === void 0 ? _(j) : _(j, M);
        }
      },
      P = S(u),
      O = S((_, M) => {
        Eh(_);
        const {
          duration: j,
          delay: T,
          easing: I,
        } = Ci({ style: x, timeout: v, easing: s }, { mode: 'enter' });
        let D;
        v === 'auto'
          ? ((D = k.transitions.getAutoHeightDuration(_.clientHeight)), (g.current = D))
          : (D = j),
          (_.style.transition = [
            k.transitions.create('opacity', { duration: D, delay: T }),
            k.transitions.create('transform', {
              duration: od ? D : D * 0.666,
              delay: T,
              easing: I,
            }),
          ].join(',')),
          l && l(_, M);
      }),
      R = S(c),
      A = S(m),
      z = S((_) => {
        const {
          duration: M,
          delay: j,
          easing: T,
        } = Ci({ style: x, timeout: v, easing: s }, { mode: 'exit' });
        let I;
        v === 'auto'
          ? ((I = k.transitions.getAutoHeightDuration(_.clientHeight)), (g.current = I))
          : (I = M),
          (_.style.transition = [
            k.transitions.create('opacity', { duration: I, delay: j }),
            k.transitions.create('transform', {
              duration: od ? I : I * 0.666,
              delay: od ? j : j || I * 0.333,
              easing: T,
            }),
          ].join(',')),
          (_.style.opacity = 0),
          (_.style.transform = Af(0.75)),
          d && d(_);
      }),
      F = S(p),
      N = (_) => {
        v === 'auto' && y.start(g.current || 0, _), r && r($.current, _);
      };
    return C.jsx(
      w,
      E(
        {
          appear: o,
          in: a,
          nodeRef: $,
          onEnter: O,
          onEntered: R,
          onEntering: P,
          onExit: z,
          onExited: F,
          onExiting: A,
          addEndListener: N,
          timeout: v === 'auto' ? null : v,
        },
        h,
        {
          children: (_, M) =>
            b.cloneElement(
              i,
              E(
                {
                  style: E(
                    {
                      opacity: 0,
                      transform: Af(0.75),
                      visibility: _ === 'exited' && !a ? 'hidden' : void 0,
                    },
                    o8[_],
                    x,
                    i.props.style
                  ),
                  ref: f,
                },
                M
              )
            ),
        }
      )
    );
  });
lc.muiSupportAuto = !0;
function i8(e) {
  return he('MuiPopover', e);
}
ue('MuiPopover', ['root', 'paper']);
const s8 = ['onEntering'],
  a8 = [
    'action',
    'anchorEl',
    'anchorOrigin',
    'anchorPosition',
    'anchorReference',
    'children',
    'className',
    'container',
    'elevation',
    'marginThreshold',
    'open',
    'PaperProps',
    'slots',
    'slotProps',
    'transformOrigin',
    'TransitionComponent',
    'transitionDuration',
    'TransitionProps',
    'disableScrollLock',
  ],
  l8 = ['slotProps'];
function Iv(e, t) {
  let n = 0;
  return (
    typeof t == 'number'
      ? (n = t)
      : t === 'center'
        ? (n = e.height / 2)
        : t === 'bottom' && (n = e.height),
    n
  );
}
function jv(e, t) {
  let n = 0;
  return (
    typeof t == 'number'
      ? (n = t)
      : t === 'center'
        ? (n = e.width / 2)
        : t === 'right' && (n = e.width),
    n
  );
}
function Nv(e) {
  return [e.horizontal, e.vertical].map((t) => (typeof t == 'number' ? `${t}px` : t)).join(' ');
}
function id(e) {
  return typeof e == 'function' ? e() : e;
}
const c8 = (e) => {
    const { classes: t } = e;
    return ge({ root: ['root'], paper: ['paper'] }, i8, t);
  },
  u8 = q(db, { name: 'MuiPopover', slot: 'Root', overridesResolver: (e, t) => t.root })({}),
  d8 = q(iu, { name: 'MuiPopover', slot: 'Paper', overridesResolver: (e, t) => t.paper })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  }),
  lu = b.forwardRef(function (t, n) {
    var r, o, i;
    const s = ce({ props: t, name: 'MuiPopover' }),
      {
        action: a,
        anchorEl: l,
        anchorOrigin: c = { vertical: 'top', horizontal: 'left' },
        anchorPosition: u,
        anchorReference: d = 'anchorEl',
        children: p,
        className: m,
        container: x,
        elevation: v = 8,
        marginThreshold: w = 16,
        open: h,
        PaperProps: y = {},
        slots: g,
        slotProps: k,
        transformOrigin: $ = { vertical: 'top', horizontal: 'left' },
        TransitionComponent: f = lc,
        transitionDuration: S = 'auto',
        TransitionProps: { onEntering: P } = {},
        disableScrollLock: O = !1,
      } = s,
      R = H(s.TransitionProps, s8),
      A = H(s, a8),
      z = (r = k == null ? void 0 : k.paper) != null ? r : y,
      F = b.useRef(),
      N = Ve(F, z.ref),
      _ = E({}, s, {
        anchorOrigin: c,
        anchorReference: d,
        elevation: v,
        marginThreshold: w,
        externalPaperSlotProps: z,
        transformOrigin: $,
        TransitionComponent: f,
        transitionDuration: S,
        TransitionProps: R,
      }),
      M = c8(_),
      j = b.useCallback(() => {
        if (d === 'anchorPosition') return u;
        const ee = id(l),
          fe = (ee && ee.nodeType === 1 ? ee : ut(F.current).body).getBoundingClientRect();
        return { top: fe.top + Iv(fe, c.vertical), left: fe.left + jv(fe, c.horizontal) };
      }, [l, c.horizontal, c.vertical, u, d]),
      T = b.useCallback(
        (ee) => ({ vertical: Iv(ee, $.vertical), horizontal: jv(ee, $.horizontal) }),
        [$.horizontal, $.vertical]
      ),
      I = b.useCallback(
        (ee) => {
          const de = { width: ee.offsetWidth, height: ee.offsetHeight },
            fe = T(de);
          if (d === 'none') return { top: null, left: null, transformOrigin: Nv(fe) };
          const yt = j();
          let He = yt.top - fe.vertical,
            Ee = yt.left - fe.horizontal;
          const Lt = He + de.height,
            Ie = Ee + de.width,
            Oe = ir(id(l)),
            ot = Oe.innerHeight - w,
            $e = Oe.innerWidth - w;
          if (w !== null && He < w) {
            const Ce = He - w;
            (He -= Ce), (fe.vertical += Ce);
          } else if (w !== null && Lt > ot) {
            const Ce = Lt - ot;
            (He -= Ce), (fe.vertical += Ce);
          }
          if (w !== null && Ee < w) {
            const Ce = Ee - w;
            (Ee -= Ce), (fe.horizontal += Ce);
          } else if (Ie > $e) {
            const Ce = Ie - $e;
            (Ee -= Ce), (fe.horizontal += Ce);
          }
          return {
            top: `${Math.round(He)}px`,
            left: `${Math.round(Ee)}px`,
            transformOrigin: Nv(fe),
          };
        },
        [l, d, j, T, w]
      ),
      [D, W] = b.useState(h),
      V = b.useCallback(() => {
        const ee = F.current;
        if (!ee) return;
        const de = I(ee);
        de.top !== null && (ee.style.top = de.top),
          de.left !== null && (ee.style.left = de.left),
          (ee.style.transformOrigin = de.transformOrigin),
          W(!0);
      }, [I]);
    b.useEffect(
      () => (
        O && window.addEventListener('scroll', V), () => window.removeEventListener('scroll', V)
      ),
      [l, O, V]
    );
    const te = (ee, de) => {
        P && P(ee, de), V();
      },
      K = () => {
        W(!1);
      };
    b.useEffect(() => {
      h && V();
    }),
      b.useImperativeHandle(
        a,
        () =>
          h
            ? {
                updatePosition: () => {
                  V();
                },
              }
            : null,
        [h, V]
      ),
      b.useEffect(() => {
        if (!h) return;
        const ee = ch(() => {
            V();
          }),
          de = ir(l);
        return (
          de.addEventListener('resize', ee),
          () => {
            ee.clear(), de.removeEventListener('resize', ee);
          }
        );
      }, [l, h, V]);
    let Q = S;
    S === 'auto' && !f.muiSupportAuto && (Q = void 0);
    const J = x || (l ? ut(id(l)).body : void 0),
      re = (o = g == null ? void 0 : g.root) != null ? o : u8,
      ie = (i = g == null ? void 0 : g.paper) != null ? i : d8,
      ne = po({
        elementType: ie,
        externalSlotProps: E({}, z, { style: D ? z.style : E({}, z.style, { opacity: 0 }) }),
        additionalProps: { elevation: v, ref: N },
        ownerState: _,
        className: X(M.paper, z == null ? void 0 : z.className),
      }),
      se = po({
        elementType: re,
        externalSlotProps: (k == null ? void 0 : k.root) || {},
        externalForwardedProps: A,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: J,
          open: h,
        },
        ownerState: _,
        className: X(M.root, m),
      }),
      { slotProps: Z } = se,
      ve = H(se, l8);
    return C.jsx(
      re,
      E({}, ve, !bi(re) && { slotProps: Z, disableScrollLock: O }, {
        children: C.jsx(
          f,
          E({ appear: !0, in: h, onEntering: te, onExited: K, timeout: Q }, R, {
            children: C.jsx(ie, E({}, ne, { children: p })),
          })
        ),
      })
    );
  });
function f8(e) {
  return he('MuiList', e);
}
ue('MuiList', ['root', 'padding', 'dense', 'subheader']);
const p8 = ['children', 'className', 'component', 'dense', 'disablePadding', 'subheader'],
  h8 = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return ge({ root: ['root', !n && 'padding', r && 'dense', o && 'subheader'] }, f8, t);
  },
  m8 = q('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    E(
      { listStyle: 'none', margin: 0, padding: 0, position: 'relative' },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  _f = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiList' }),
      {
        children: o,
        className: i,
        component: s = 'ul',
        dense: a = !1,
        disablePadding: l = !1,
        subheader: c,
      } = r,
      u = H(r, p8),
      d = b.useMemo(() => ({ dense: a }), [a]),
      p = E({}, r, { component: s, dense: a, disablePadding: l }),
      m = h8(p);
    return C.jsx(kn.Provider, {
      value: d,
      children: C.jsxs(
        m8,
        E({ as: s, className: X(m.root, i), ref: n, ownerState: p }, u, { children: [c, o] })
      ),
    });
  }),
  g8 = [
    'actions',
    'autoFocus',
    'autoFocusItem',
    'children',
    'className',
    'disabledItemsFocusable',
    'disableListWrap',
    'onKeyDown',
    'variant',
  ];
function sd(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
      ? t.nextElementSibling
      : n
        ? null
        : e.firstChild;
}
function Lv(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
      ? t.previousElementSibling
      : n
        ? null
        : e.lastChild;
}
function $b(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join('')) === 0
  );
}
function ns(e, t, n, r, o, i) {
  let s = !1,
    a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute('aria-disabled') === 'true';
    if (!a.hasAttribute('tabindex') || !$b(a, i) || l) a = o(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const Th = b.forwardRef(function (t, n) {
  const {
      actions: r,
      autoFocus: o = !1,
      autoFocusItem: i = !1,
      children: s,
      className: a,
      disabledItemsFocusable: l = !1,
      disableListWrap: c = !1,
      onKeyDown: u,
      variant: d = 'selectedMenu',
    } = t,
    p = H(t, g8),
    m = b.useRef(null),
    x = b.useRef({ keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null });
  un(() => {
    o && m.current.focus();
  }, [o]),
    b.useImperativeHandle(
      r,
      () => ({
        adjustStyleForScrollbar: (g, { direction: k }) => {
          const $ = !m.current.style.width;
          if (g.clientHeight < m.current.clientHeight && $) {
            const f = `${$x(ut(g))}px`;
            (m.current.style[k === 'rtl' ? 'paddingLeft' : 'paddingRight'] = f),
              (m.current.style.width = `calc(100% + ${f})`);
          }
          return m.current;
        },
      }),
      []
    );
  const v = (g) => {
      const k = m.current,
        $ = g.key,
        f = ut(k).activeElement;
      if ($ === 'ArrowDown') g.preventDefault(), ns(k, f, c, l, sd);
      else if ($ === 'ArrowUp') g.preventDefault(), ns(k, f, c, l, Lv);
      else if ($ === 'Home') g.preventDefault(), ns(k, null, c, l, sd);
      else if ($ === 'End') g.preventDefault(), ns(k, null, c, l, Lv);
      else if ($.length === 1) {
        const S = x.current,
          P = $.toLowerCase(),
          O = performance.now();
        S.keys.length > 0 &&
          (O - S.lastTime > 500
            ? ((S.keys = []), (S.repeating = !0), (S.previousKeyMatched = !0))
            : S.repeating && P !== S.keys[0] && (S.repeating = !1)),
          (S.lastTime = O),
          S.keys.push(P);
        const R = f && !S.repeating && $b(f, S);
        S.previousKeyMatched && (R || ns(k, f, !1, l, sd, S))
          ? g.preventDefault()
          : (S.previousKeyMatched = !1);
      }
      u && u(g);
    },
    w = Ve(m, n);
  let h = -1;
  b.Children.forEach(s, (g, k) => {
    if (!b.isValidElement(g)) {
      h === k && ((h += 1), h >= s.length && (h = -1));
      return;
    }
    g.props.disabled || (((d === 'selectedMenu' && g.props.selected) || h === -1) && (h = k)),
      h === k &&
        (g.props.disabled || g.props.muiSkipListHighlight || g.type.muiSkipListHighlight) &&
        ((h += 1), h >= s.length && (h = -1));
  });
  const y = b.Children.map(s, (g, k) => {
    if (k === h) {
      const $ = {};
      return (
        i && ($.autoFocus = !0),
        g.props.tabIndex === void 0 && d === 'selectedMenu' && ($.tabIndex = 0),
        b.cloneElement(g, $)
      );
    }
    return g;
  });
  return C.jsx(
    _f,
    E({ role: 'menu', ref: w, className: a, onKeyDown: v, tabIndex: o ? 0 : -1 }, p, {
      children: y,
    })
  );
});
function v8(e) {
  return he('MuiDivider', e);
}
const y8 = ue('MuiDivider', [
    'root',
    'absolute',
    'fullWidth',
    'inset',
    'middle',
    'flexItem',
    'light',
    'vertical',
    'withChildren',
    'withChildrenVertical',
    'textAlignRight',
    'textAlignLeft',
    'wrapper',
    'wrapperVertical',
  ]),
  Dv = y8,
  x8 = [
    'absolute',
    'children',
    'className',
    'component',
    'flexItem',
    'light',
    'orientation',
    'role',
    'textAlign',
    'variant',
  ],
  b8 = (e) => {
    const {
      absolute: t,
      children: n,
      classes: r,
      flexItem: o,
      light: i,
      orientation: s,
      textAlign: a,
      variant: l,
    } = e;
    return ge(
      {
        root: [
          'root',
          t && 'absolute',
          l,
          i && 'light',
          s === 'vertical' && 'vertical',
          o && 'flexItem',
          n && 'withChildren',
          n && s === 'vertical' && 'withChildrenVertical',
          a === 'right' && s !== 'vertical' && 'textAlignRight',
          a === 'left' && s !== 'vertical' && 'textAlignLeft',
        ],
        wrapper: ['wrapper', s === 'vertical' && 'wrapperVertical'],
      },
      v8,
      r
    );
  },
  C8 = q('div', {
    name: 'MuiDivider',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.absolute && t.absolute,
        t[n.variant],
        n.light && t.light,
        n.orientation === 'vertical' && t.vertical,
        n.flexItem && t.flexItem,
        n.children && t.withChildren,
        n.children && n.orientation === 'vertical' && t.withChildrenVertical,
        n.textAlign === 'right' && n.orientation !== 'vertical' && t.textAlignRight,
        n.textAlign === 'left' && n.orientation !== 'vertical' && t.textAlignLeft,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      E(
        {
          margin: 0,
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: (e.vars || e).palette.divider,
          borderBottomWidth: 'thin',
        },
        t.absolute && { position: 'absolute', bottom: 0, left: 0, width: '100%' },
        t.light && {
          borderColor: e.vars
            ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
            : Le(e.palette.divider, 0.08),
        },
        t.variant === 'inset' && { marginLeft: 72 },
        t.variant === 'middle' &&
          t.orientation === 'horizontal' && { marginLeft: e.spacing(2), marginRight: e.spacing(2) },
        t.variant === 'middle' &&
          t.orientation === 'vertical' && { marginTop: e.spacing(1), marginBottom: e.spacing(1) },
        t.orientation === 'vertical' && {
          height: '100%',
          borderBottomWidth: 0,
          borderRightWidth: 'thin',
        },
        t.flexItem && { alignSelf: 'stretch', height: 'auto' }
      ),
    ({ ownerState: e }) =>
      E(
        {},
        e.children && {
          display: 'flex',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          border: 0,
          borderTopStyle: 'solid',
          borderLeftStyle: 'solid',
          '&::before, &::after': { content: '""', alignSelf: 'center' },
        }
      ),
    ({ theme: e, ownerState: t }) =>
      E(
        {},
        t.children &&
          t.orientation !== 'vertical' && {
            '&::before, &::after': {
              width: '100%',
              borderTop: `thin solid ${(e.vars || e).palette.divider}`,
              borderTopStyle: 'inherit',
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      E(
        {},
        t.children &&
          t.orientation === 'vertical' && {
            flexDirection: 'column',
            '&::before, &::after': {
              height: '100%',
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
              borderLeftStyle: 'inherit',
            },
          }
      ),
    ({ ownerState: e }) =>
      E(
        {},
        e.textAlign === 'right' &&
          e.orientation !== 'vertical' && {
            '&::before': { width: '90%' },
            '&::after': { width: '10%' },
          },
        e.textAlign === 'left' &&
          e.orientation !== 'vertical' && {
            '&::before': { width: '10%' },
            '&::after': { width: '90%' },
          }
      )
  ),
  S8 = q('span', {
    name: 'MuiDivider',
    slot: 'Wrapper',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.wrapper, n.orientation === 'vertical' && t.wrapperVertical];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      {
        display: 'inline-block',
        paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
        paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      },
      t.orientation === 'vertical' && {
        paddingTop: `calc(${e.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
      }
    )
  ),
  ea = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiDivider' }),
      {
        absolute: o = !1,
        children: i,
        className: s,
        component: a = i ? 'div' : 'hr',
        flexItem: l = !1,
        light: c = !1,
        orientation: u = 'horizontal',
        role: d = a !== 'hr' ? 'separator' : void 0,
        textAlign: p = 'center',
        variant: m = 'fullWidth',
      } = r,
      x = H(r, x8),
      v = E({}, r, {
        absolute: o,
        component: a,
        flexItem: l,
        light: c,
        orientation: u,
        role: d,
        textAlign: p,
        variant: m,
      }),
      w = b8(v);
    return C.jsx(
      C8,
      E({ as: a, className: X(w.root, s), role: d, ref: n, ownerState: v }, x, {
        children: i ? C.jsx(S8, { className: w.wrapper, ownerState: v, children: i }) : null,
      })
    );
  });
ea.muiSkipListHighlight = !0;
const zv = ue('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
function w8(e) {
  return he('MuiListItemText', e);
}
const cc = ue('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']),
  k8 = [
    'children',
    'className',
    'disableTypography',
    'inset',
    'primary',
    'primaryTypographyProps',
    'secondary',
    'secondaryTypographyProps',
  ],
  E8 = (e) => {
    const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e;
    return ge(
      {
        root: ['root', n && 'inset', i && 'dense', r && o && 'multiline'],
        primary: ['primary'],
        secondary: ['secondary'],
      },
      w8,
      t
    );
  },
  $8 = q('div', {
    name: 'MuiListItemText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${cc.primary}`]: t.primary },
        { [`& .${cc.secondary}`]: t.secondary },
        t.root,
        n.inset && t.inset,
        n.primary && n.secondary && t.multiline,
        n.dense && t.dense,
      ];
    },
  })(({ ownerState: e }) =>
    E(
      { flex: '1 1 auto', minWidth: 0, marginTop: 4, marginBottom: 4 },
      e.primary && e.secondary && { marginTop: 6, marginBottom: 6 },
      e.inset && { paddingLeft: 56 }
    )
  ),
  P8 = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiListItemText' }),
      {
        children: o,
        className: i,
        disableTypography: s = !1,
        inset: a = !1,
        primary: l,
        primaryTypographyProps: c,
        secondary: u,
        secondaryTypographyProps: d,
      } = r,
      p = H(r, k8),
      { dense: m } = b.useContext(kn);
    let x = l ?? o,
      v = u;
    const w = E({}, r, { disableTypography: s, inset: a, primary: !!x, secondary: !!v, dense: m }),
      h = E8(w);
    return (
      x != null &&
        x.type !== St &&
        !s &&
        (x = C.jsx(
          St,
          E(
            {
              variant: m ? 'body2' : 'body1',
              className: h.primary,
              component: c != null && c.variant ? void 0 : 'span',
              display: 'block',
            },
            c,
            { children: x }
          )
        )),
      v != null &&
        v.type !== St &&
        !s &&
        (v = C.jsx(
          St,
          E(
            { variant: 'body2', className: h.secondary, color: 'text.secondary', display: 'block' },
            d,
            { children: v }
          )
        )),
      C.jsxs($8, E({ className: X(h.root, i), ownerState: w, ref: n }, p, { children: [x, v] }))
    );
  });
function T8(e) {
  return he('MuiMenuItem', e);
}
const bn = ue('MuiMenuItem', [
    'root',
    'focusVisible',
    'dense',
    'disabled',
    'divider',
    'gutters',
    'selected',
  ]),
  R8 = [
    'autoFocus',
    'component',
    'dense',
    'divider',
    'disableGutters',
    'focusVisibleClassName',
    'role',
    'tabIndex',
    'className',
  ],
  O8 = (e, t) => {
    const { ownerState: n } = e;
    return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
  },
  M8 = (e) => {
    const { disabled: t, dense: n, divider: r, disableGutters: o, selected: i, classes: s } = e,
      l = ge(
        {
          root: [
            'root',
            n && 'dense',
            t && 'disabled',
            !o && 'gutters',
            r && 'divider',
            i && 'selected',
          ],
        },
        T8,
        s
      );
    return E({}, s, l);
  },
  A8 = q(wo, {
    shouldForwardProp: (e) => So(e) || e === 'classes',
    name: 'MuiMenuItem',
    slot: 'Root',
    overridesResolver: O8,
  })(({ theme: e, ownerState: t }) =>
    E(
      {},
      e.typography.body1,
      {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: 'border-box',
        whiteSpace: 'nowrap',
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: 'padding-box',
      },
      {
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: (e.vars || e).palette.action.hover,
          '@media (hover: none)': { backgroundColor: 'transparent' },
        },
        [`&.${bn.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Le(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${bn.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Le(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity + e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${bn.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Le(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Le(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${bn.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
        [`&.${bn.disabled}`]: { opacity: (e.vars || e).palette.action.disabledOpacity },
        [`& + .${Dv.root}`]: { marginTop: e.spacing(1), marginBottom: e.spacing(1) },
        [`& + .${Dv.inset}`]: { marginLeft: 52 },
        [`& .${cc.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${cc.inset}`]: { paddingLeft: 36 },
        [`& .${zv.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up('sm')]: { minHeight: 'auto' } },
      t.dense &&
        E({ minHeight: 32, paddingTop: 4, paddingBottom: 4 }, e.typography.body2, {
          [`& .${zv.root} svg`]: { fontSize: '1.25rem' },
        })
    )
  ),
  Rh = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiMenuItem' }),
      {
        autoFocus: o = !1,
        component: i = 'li',
        dense: s = !1,
        divider: a = !1,
        disableGutters: l = !1,
        focusVisibleClassName: c,
        role: u = 'menuitem',
        tabIndex: d,
        className: p,
      } = r,
      m = H(r, R8),
      x = b.useContext(kn),
      v = b.useMemo(() => ({ dense: s || x.dense || !1, disableGutters: l }), [x.dense, s, l]),
      w = b.useRef(null);
    un(() => {
      o && w.current && w.current.focus();
    }, [o]);
    const h = E({}, r, { dense: v.dense, divider: a, disableGutters: l }),
      y = M8(r),
      g = Ve(w, n);
    let k;
    return (
      r.disabled || (k = d !== void 0 ? d : -1),
      C.jsx(kn.Provider, {
        value: v,
        children: C.jsx(
          A8,
          E(
            {
              ref: g,
              role: u,
              tabIndex: k,
              component: i,
              focusVisibleClassName: X(y.focusVisible, c),
              className: X(y.root, p),
            },
            m,
            { ownerState: h, classes: y }
          )
        ),
      })
    );
  }),
  _8 = q(le)(({ theme: e, ownerState: { color: t, variant: n } }) => {
    const r = {
        ...(t === 'default' && {
          ...(n === 'filled' && {
            color: e.vars.palette.common.white,
            backgroundColor: e.vars.palette.text.primary,
            [wf.dark]: { color: e.vars.palette.grey[800] },
          }),
          ...(n === 'outlined' && {
            backgroundColor: 'transparent',
            color: e.vars.palette.text.primary,
            border: `2px solid ${e.vars.palette.text.primary}`,
          }),
          ...(n === 'soft' && {
            color: e.vars.palette.text.secondary,
            backgroundColor: pe(e.vars.palette.grey['500Channel'], 0.16),
          }),
          ...(n === 'inverted' && {
            color: e.vars.palette.grey[800],
            backgroundColor: e.vars.palette.grey[300],
          }),
        }),
      },
      o = {
        ...(t !== 'default' && {
          ...(n === 'filled' && {
            color: e.vars.palette[t].contrastText,
            backgroundColor: e.vars.palette[t].main,
          }),
          ...(n === 'outlined' && {
            backgroundColor: 'transparent',
            color: e.vars.palette[t].main,
            border: `2px solid ${e.vars.palette[t].main}`,
          }),
          ...(n === 'soft' && {
            color: e.vars.palette[t].dark,
            backgroundColor: pe(e.vars.palette[t].mainChannel, 0.16),
            [wf.dark]: { color: e.vars.palette[t].light },
          }),
          ...(n === 'inverted' && {
            color: e.vars.palette[t].darker,
            backgroundColor: e.vars.palette[t].lighter,
          }),
        }),
      };
    return {
      height: 24,
      minWidth: 24,
      lineHeight: 0,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      justifyContent: 'center',
      padding: e.spacing(0, 0.75),
      fontSize: e.typography.pxToRem(12),
      fontWeight: e.typography.fontWeightBold,
      borderRadius: e.shape.borderRadius * 0.75,
      transition: e.transitions.create('all', { duration: e.transitions.duration.shorter }),
      ...r,
      ...o,
    };
  }),
  ad = { root: 'mnl__label__root', icon: 'mnl__label__icon' },
  Pb = b.forwardRef(
    (
      {
        children: e,
        color: t = 'default',
        variant: n = 'soft',
        startIcon: r,
        endIcon: o,
        sx: i,
        className: s,
        ...a
      },
      l
    ) => {
      const c = Nt(),
        u = { width: 16, height: 16, '& svg, img': { width: 1, height: 1, objectFit: 'cover' } };
      return C.jsxs(_8, {
        ref: l,
        component: 'span',
        className: ad.root.concat(s ? ` ${s}` : ''),
        ownerState: { color: t, variant: n },
        sx: { ...(r && { pl: 0.75 }), ...(o && { pr: 0.75 }), ...i },
        theme: c,
        ...a,
        children: [
          r &&
            C.jsx(le, {
              component: 'span',
              className: ad.icon,
              sx: { mr: 0.75, ...u },
              children: r,
            }),
          typeof e == 'string' ? I8(e) : e,
          o &&
            C.jsx(le, {
              component: 'span',
              className: ad.icon,
              sx: { ml: 0.75, ...u },
              children: o,
            }),
        ],
      });
    }
  );
function I8(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function j8({ data: e = [], sx: t, ...n }) {
  const [r, o] = b.useState(e[0]),
    [i, s] = b.useState(null),
    a = b.useCallback((p) => {
      s(p.currentTarget);
    }, []),
    l = b.useCallback(() => {
      s(null);
    }, []),
    c = b.useCallback(
      (p) => {
        o(p), l();
      },
      [l]
    ),
    u = (p, m) =>
      C.jsx(le, {
        component: 'img',
        alt: p,
        src: m,
        sx: { width: 24, height: 24, borderRadius: '50%' },
      }),
    d = (p) => C.jsx(Pb, { color: p === 'Free' ? 'default' : 'info', children: p });
  return C.jsxs(C.Fragment, {
    children: [
      C.jsxs(wo, {
        disableRipple: !0,
        onClick: a,
        sx: {
          pl: 2,
          py: 3,
          gap: 1.5,
          pr: 1.5,
          width: 1,
          borderRadius: 1.5,
          textAlign: 'left',
          justifyContent: 'flex-start',
          bgcolor: (p) => pe(p.vars.palette.grey['500Channel'], 0.08),
          ...t,
        },
        ...n,
        children: [
          u(r == null ? void 0 : r.name, r == null ? void 0 : r.logo),
          C.jsxs(le, {
            gap: 1,
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            sx: { typography: 'body2', fontWeight: 'fontWeightSemiBold' },
            children: [r == null ? void 0 : r.name, d(r == null ? void 0 : r.plan)],
          }),
          C.jsx(zn, { width: 16, icon: 'carbon:chevron-sort', sx: { color: 'text.disabled' } }),
        ],
      }),
      C.jsx(lu, {
        open: !!i,
        anchorEl: i,
        onClose: l,
        children: C.jsx(Th, {
          disablePadding: !0,
          sx: {
            p: 0.5,
            gap: 0.5,
            width: 260,
            display: 'flex',
            flexDirection: 'column',
            [`& .${bn.root}`]: {
              p: 1.5,
              gap: 1.5,
              borderRadius: 0.75,
              [`&.${bn.selected}`]: {
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightSemiBold',
              },
            },
          },
          children: e.map((p) =>
            C.jsxs(
              Rh,
              {
                selected: p.id === (r == null ? void 0 : r.id),
                onClick: () => c(p),
                children: [
                  u(p.name, p.logo),
                  C.jsx(le, { component: 'span', sx: { flexGrow: 1 }, children: p.name }),
                  d(p.plan),
                ],
              },
              p.id
            )
          ),
        }),
      }),
    ],
  });
}
function N8({ sx: e, data: t, slots: n, workspaces: r, layoutQuery: o }) {
  const i = Nt();
  return C.jsx(le, {
    sx: {
      pt: 2.5,
      px: 2.5,
      top: 0,
      left: 0,
      height: 1,
      display: 'none',
      position: 'fixed',
      flexDirection: 'column',
      bgcolor: 'var(--layout-nav-bg)',
      zIndex: 'var(--layout-nav-zIndex)',
      width: 'var(--layout-nav-vertical-width)',
      borderRight: `1px solid var(--layout-nav-border-color, ${pe(i.vars.palette.grey['500Channel'], 0.12)})`,
      [i.breakpoints.up(o)]: { display: 'flex' },
      ...e,
    },
    children: C.jsx(Tb, { data: t, slots: n, workspaces: r }),
  });
}
function L8({ sx: e, data: t, open: n, slots: r, onClose: o, workspaces: i }) {
  const s = $h();
  return (
    b.useEffect(() => {
      n && o();
    }, [s]),
    C.jsx(mO, {
      open: n,
      onClose: o,
      sx: {
        [`& .${aO.paper}`]: {
          pt: 2.5,
          px: 2.5,
          overflow: 'unset',
          bgcolor: 'var(--layout-nav-bg)',
          width: 'var(--layout-nav-mobile-width)',
          ...e,
        },
      },
      children: C.jsx(Tb, { data: t, slots: r, workspaces: i }),
    })
  );
}
function Tb({ data: e, slots: t, workspaces: n, sx: r }) {
  const o = $h();
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(Fx, {}),
      t == null ? void 0 : t.topArea,
      C.jsx(j8, { data: n, sx: { my: 2 } }),
      C.jsx(kb, {
        fillContent: !0,
        children: C.jsx(le, {
          component: 'nav',
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          sx: r,
          children: C.jsx(le, {
            component: 'ul',
            gap: 0.5,
            display: 'flex',
            flexDirection: 'column',
            children: e.map((i) => {
              const s = i.path === o;
              return C.jsx(
                $R,
                {
                  disableGutters: !0,
                  disablePadding: !0,
                  children: C.jsxs(lb, {
                    disableGutters: !0,
                    component: mh,
                    href: i.path,
                    sx: {
                      pl: 2,
                      py: 1,
                      gap: 2,
                      pr: 1.5,
                      borderRadius: 0.75,
                      typography: 'body2',
                      fontWeight: 'fontWeightMedium',
                      color: 'var(--layout-nav-item-color)',
                      minHeight: 'var(--layout-nav-item-height)',
                      ...(s && {
                        fontWeight: 'fontWeightSemiBold',
                        bgcolor: 'var(--layout-nav-item-active-bg)',
                        color: 'var(--layout-nav-item-active-color)',
                        '&:hover': { bgcolor: 'var(--layout-nav-item-hover-bg)' },
                      }),
                    },
                    children: [
                      C.jsx(le, {
                        component: 'span',
                        sx: { width: 24, height: 24 },
                        children: i.icon,
                      }),
                      C.jsx(le, { component: 'span', flexGrow: 1, children: i.title }),
                      i.info && i.info,
                    ],
                  }),
                },
                i.title
              );
            }),
          }),
        }),
      }),
      t == null ? void 0 : t.bottomArea,
      C.jsx(n8, {}),
    ],
  });
}
const D8 = { root: 'mnl__svg__color__root' },
  z8 = b.forwardRef(({ src: e, width: t = 24, height: n, className: r, sx: o, ...i }, s) =>
    C.jsx(le, {
      ref: s,
      component: 'span',
      className: D8.root.concat(r ? ` ${r}` : ''),
      sx: {
        width: t,
        flexShrink: 0,
        height: n ?? t,
        display: 'inline-flex',
        bgcolor: 'currentColor',
        mask: `url(${e}) no-repeat center / contain`,
        WebkitMask: `url(${e}) no-repeat center / contain`,
        ...o,
      },
      ...i,
    })
  ),
  _o = (e) => C.jsx(z8, { width: '100%', height: '100%', src: `/assets/icons/navbar/${e}.svg` }),
  Fv = [
    { title: 'Dashboard', path: '/', icon: _o('ic-analytics') },
    { title: 'User', path: '/user', icon: _o('ic-user') },
    {
      title: 'Product',
      path: '/products',
      icon: _o('ic-cart'),
      info: C.jsx(Pb, { color: 'error', variant: 'inverted', children: '+3' }),
    },
    { title: 'Blog', path: '/blog', icon: _o('ic-blog') },
    { title: 'Sign in', path: '/sign-in', icon: _o('ic-lock') },
    { title: 'Not found', path: '/404', icon: _o('ic-disabled') },
  ],
  F8 = ['onChange', 'maxRows', 'minRows', 'style', 'value'];
function Xa(e) {
  return parseInt(e, 10) || 0;
}
const B8 = {
  shadow: {
    visibility: 'hidden',
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    transform: 'translateZ(0)',
  },
};
function W8(e) {
  return e == null || Object.keys(e).length === 0 || (e.outerHeightStyle === 0 && !e.overflowing);
}
const U8 = b.forwardRef(function (t, n) {
  const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: a } = t,
    l = H(t, F8),
    { current: c } = b.useRef(a != null),
    u = b.useRef(null),
    d = Ve(n, u),
    p = b.useRef(null),
    m = b.useRef(null),
    x = b.useCallback(() => {
      const h = u.current,
        g = ir(h).getComputedStyle(h);
      if (g.width === '0px') return { outerHeightStyle: 0, overflowing: !1 };
      const k = m.current;
      (k.style.width = g.width),
        (k.value = h.value || t.placeholder || 'x'),
        k.value.slice(-1) ===
          `
` && (k.value += ' ');
      const $ = g.boxSizing,
        f = Xa(g.paddingBottom) + Xa(g.paddingTop),
        S = Xa(g.borderBottomWidth) + Xa(g.borderTopWidth),
        P = k.scrollHeight;
      k.value = 'x';
      const O = k.scrollHeight;
      let R = P;
      i && (R = Math.max(Number(i) * O, R)),
        o && (R = Math.min(Number(o) * O, R)),
        (R = Math.max(R, O));
      const A = R + ($ === 'border-box' ? f + S : 0),
        z = Math.abs(R - P) <= 1;
      return { outerHeightStyle: A, overflowing: z };
    }, [o, i, t.placeholder]),
    v = b.useCallback(() => {
      const h = x();
      if (W8(h)) return;
      const y = h.outerHeightStyle,
        g = u.current;
      p.current !== y && ((p.current = y), (g.style.height = `${y}px`)),
        (g.style.overflow = h.overflowing ? 'hidden' : '');
    }, [x]);
  un(() => {
    const h = () => {
      v();
    };
    let y;
    const g = ch(h),
      k = u.current,
      $ = ir(k);
    $.addEventListener('resize', g);
    let f;
    return (
      typeof ResizeObserver < 'u' && ((f = new ResizeObserver(h)), f.observe(k)),
      () => {
        g.clear(), cancelAnimationFrame(y), $.removeEventListener('resize', g), f && f.disconnect();
      }
    );
  }, [x, v]),
    un(() => {
      v();
    });
  const w = (h) => {
    c || v(), r && r(h);
  };
  return C.jsxs(b.Fragment, {
    children: [
      C.jsx('textarea', E({ value: a, onChange: w, ref: d, rows: i, style: s }, l)),
      C.jsx('textarea', {
        'aria-hidden': !0,
        className: t.className,
        readOnly: !0,
        ref: m,
        tabIndex: -1,
        style: E({}, B8.shadow, s, { paddingTop: 0, paddingBottom: 0 }),
      }),
    ],
  });
});
function V8({ props: e, states: t, muiFormControl: n }) {
  return t.reduce((r, o) => ((r[o] = e[o]), n && typeof e[o] > 'u' && (r[o] = n[o]), r), {});
}
const Oh = b.createContext(void 0);
function Rb() {
  return b.useContext(Oh);
}
function Bv(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function H8(e, t = !1) {
  return (
    e && ((Bv(e.value) && e.value !== '') || (t && Bv(e.defaultValue) && e.defaultValue !== ''))
  );
}
function A_(e) {
  return e.startAdornment;
}
function G8(e) {
  return he('MuiInputBase', e);
}
const uc = ue('MuiInputBase', [
    'root',
    'formControl',
    'focused',
    'disabled',
    'adornedStart',
    'adornedEnd',
    'error',
    'sizeSmall',
    'multiline',
    'colorSecondary',
    'fullWidth',
    'hiddenLabel',
    'readOnly',
    'input',
    'inputSizeSmall',
    'inputMultiline',
    'inputTypeSearch',
    'inputAdornedStart',
    'inputAdornedEnd',
    'inputHiddenLabel',
  ]),
  K8 = [
    'aria-describedby',
    'autoComplete',
    'autoFocus',
    'className',
    'color',
    'components',
    'componentsProps',
    'defaultValue',
    'disabled',
    'disableInjectingGlobalStyles',
    'endAdornment',
    'error',
    'fullWidth',
    'id',
    'inputComponent',
    'inputProps',
    'inputRef',
    'margin',
    'maxRows',
    'minRows',
    'multiline',
    'name',
    'onBlur',
    'onChange',
    'onClick',
    'onFocus',
    'onKeyDown',
    'onKeyUp',
    'placeholder',
    'readOnly',
    'renderSuffix',
    'rows',
    'size',
    'slotProps',
    'slots',
    'startAdornment',
    'type',
    'value',
  ],
  Ob = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === 'small' && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${U(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  Mb = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === 'small' && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === 'search' && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  Y8 = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: c,
        multiline: u,
        readOnly: d,
        size: p,
        startAdornment: m,
        type: x,
      } = e,
      v = {
        root: [
          'root',
          `color${U(n)}`,
          r && 'disabled',
          o && 'error',
          l && 'fullWidth',
          s && 'focused',
          a && 'formControl',
          p && p !== 'medium' && `size${U(p)}`,
          u && 'multiline',
          m && 'adornedStart',
          i && 'adornedEnd',
          c && 'hiddenLabel',
          d && 'readOnly',
        ],
        input: [
          'input',
          r && 'disabled',
          x === 'search' && 'inputTypeSearch',
          u && 'inputMultiline',
          p === 'small' && 'inputSizeSmall',
          c && 'inputHiddenLabel',
          m && 'inputAdornedStart',
          i && 'inputAdornedEnd',
          d && 'readOnly',
        ],
      };
    return ge(v, G8, t);
  },
  Ab = q('div', { name: 'MuiInputBase', slot: 'Root', overridesResolver: Ob })(
    ({ theme: e, ownerState: t }) =>
      E(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: '1.4375em',
          boxSizing: 'border-box',
          position: 'relative',
          cursor: 'text',
          display: 'inline-flex',
          alignItems: 'center',
          [`&.${uc.disabled}`]: { color: (e.vars || e).palette.text.disabled, cursor: 'default' },
        },
        t.multiline && E({ padding: '4px 0 5px' }, t.size === 'small' && { paddingTop: 1 }),
        t.fullWidth && { width: '100%' }
      )
  ),
  _b = q('input', { name: 'MuiInputBase', slot: 'Input', overridesResolver: Mb })(
    ({ theme: e, ownerState: t }) => {
      const n = e.palette.mode === 'light',
        r = E(
          { color: 'currentColor' },
          e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: n ? 0.42 : 0.5 },
          {
            transition: e.transitions.create('opacity', {
              duration: e.transitions.duration.shorter,
            }),
          }
        ),
        o = { opacity: '0 !important' },
        i = e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: n ? 0.42 : 0.5 };
      return E(
        {
          font: 'inherit',
          letterSpacing: 'inherit',
          color: 'currentColor',
          padding: '4px 0 5px',
          border: 0,
          boxSizing: 'content-box',
          background: 'none',
          height: '1.4375em',
          margin: 0,
          WebkitTapHighlightColor: 'transparent',
          display: 'block',
          minWidth: 0,
          width: '100%',
          animationName: 'mui-auto-fill-cancel',
          animationDuration: '10ms',
          '&::-webkit-input-placeholder': r,
          '&::-moz-placeholder': r,
          '&:-ms-input-placeholder': r,
          '&::-ms-input-placeholder': r,
          '&:focus': { outline: 0 },
          '&:invalid': { boxShadow: 'none' },
          '&::-webkit-search-decoration': { WebkitAppearance: 'none' },
          [`label[data-shrink=false] + .${uc.formControl} &`]: {
            '&::-webkit-input-placeholder': o,
            '&::-moz-placeholder': o,
            '&:-ms-input-placeholder': o,
            '&::-ms-input-placeholder': o,
            '&:focus::-webkit-input-placeholder': i,
            '&:focus::-moz-placeholder': i,
            '&:focus:-ms-input-placeholder': i,
            '&:focus::-ms-input-placeholder': i,
          },
          [`&.${uc.disabled}`]: {
            opacity: 1,
            WebkitTextFillColor: (e.vars || e).palette.text.disabled,
          },
          '&:-webkit-autofill': { animationDuration: '5000s', animationName: 'mui-auto-fill' },
        },
        t.size === 'small' && { paddingTop: 1 },
        t.multiline && { height: 'auto', resize: 'none', padding: 0, paddingTop: 0 },
        t.type === 'search' && { MozAppearance: 'textfield' }
      );
    }
  ),
  X8 = C.jsx(gh, {
    styles: {
      '@keyframes mui-auto-fill': { from: { display: 'block' } },
      '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
    },
  }),
  q8 = b.forwardRef(function (t, n) {
    var r;
    const o = ce({ props: t, name: 'MuiInputBase' }),
      {
        'aria-describedby': i,
        autoComplete: s,
        autoFocus: a,
        className: l,
        components: c = {},
        componentsProps: u = {},
        defaultValue: d,
        disabled: p,
        disableInjectingGlobalStyles: m,
        endAdornment: x,
        fullWidth: v = !1,
        id: w,
        inputComponent: h = 'input',
        inputProps: y = {},
        inputRef: g,
        maxRows: k,
        minRows: $,
        multiline: f = !1,
        name: S,
        onBlur: P,
        onChange: O,
        onClick: R,
        onFocus: A,
        onKeyDown: z,
        onKeyUp: F,
        placeholder: N,
        readOnly: _,
        renderSuffix: M,
        rows: j,
        slotProps: T = {},
        slots: I = {},
        startAdornment: D,
        type: W = 'text',
        value: V,
      } = o,
      te = H(o, K8),
      K = y.value != null ? y.value : V,
      { current: Q } = b.useRef(K != null),
      J = b.useRef(),
      re = b.useCallback((ye) => {}, []),
      ie = Ve(J, g, y.ref, re),
      [ne, se] = b.useState(!1),
      Z = Rb(),
      ve = V8({
        props: o,
        muiFormControl: Z,
        states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled'],
      });
    (ve.focused = Z ? Z.focused : ne),
      b.useEffect(() => {
        !Z && p && ne && (se(!1), P && P());
      }, [Z, p, ne, P]);
    const ee = Z && Z.onFilled,
      de = Z && Z.onEmpty,
      fe = b.useCallback(
        (ye) => {
          H8(ye) ? ee && ee() : de && de();
        },
        [ee, de]
      );
    un(() => {
      Q && fe({ value: K });
    }, [K, fe, Q]);
    const yt = (ye) => {
        if (ve.disabled) {
          ye.stopPropagation();
          return;
        }
        A && A(ye), y.onFocus && y.onFocus(ye), Z && Z.onFocus ? Z.onFocus(ye) : se(!0);
      },
      He = (ye) => {
        P && P(ye), y.onBlur && y.onBlur(ye), Z && Z.onBlur ? Z.onBlur(ye) : se(!1);
      },
      Ee = (ye, ...Y) => {
        if (!Q) {
          const Me = ye.target || J.current;
          if (Me == null) throw new Error(fo(1));
          fe({ value: Me.value });
        }
        y.onChange && y.onChange(ye, ...Y), O && O(ye, ...Y);
      };
    b.useEffect(() => {
      fe(J.current);
    }, []);
    const Lt = (ye) => {
      J.current && ye.currentTarget === ye.target && J.current.focus(), R && R(ye);
    };
    let Ie = h,
      Oe = y;
    f &&
      Ie === 'input' &&
      (j
        ? (Oe = E({ type: void 0, minRows: j, maxRows: j }, Oe))
        : (Oe = E({ type: void 0, maxRows: k, minRows: $ }, Oe)),
      (Ie = U8));
    const ot = (ye) => {
      fe(ye.animationName === 'mui-auto-fill-cancel' ? J.current : { value: 'x' });
    };
    b.useEffect(() => {
      Z && Z.setAdornedStart(!!D);
    }, [Z, D]);
    const $e = E({}, o, {
        color: ve.color || 'primary',
        disabled: ve.disabled,
        endAdornment: x,
        error: ve.error,
        focused: ve.focused,
        formControl: Z,
        fullWidth: v,
        hiddenLabel: ve.hiddenLabel,
        multiline: f,
        size: ve.size,
        startAdornment: D,
        type: W,
      }),
      Ce = Y8($e),
      Je = I.root || c.Root || Ab,
      xt = T.root || u.root || {},
      $t = I.input || c.Input || _b;
    return (
      (Oe = E({}, Oe, (r = T.input) != null ? r : u.input)),
      C.jsxs(b.Fragment, {
        children: [
          !m && X8,
          C.jsxs(
            Je,
            E(
              {},
              xt,
              !bi(Je) && { ownerState: E({}, $e, xt.ownerState) },
              { ref: n, onClick: Lt },
              te,
              {
                className: X(Ce.root, xt.className, l, _ && 'MuiInputBase-readOnly'),
                children: [
                  D,
                  C.jsx(Oh.Provider, {
                    value: null,
                    children: C.jsx(
                      $t,
                      E(
                        {
                          ownerState: $e,
                          'aria-invalid': ve.error,
                          'aria-describedby': i,
                          autoComplete: s,
                          autoFocus: a,
                          defaultValue: d,
                          disabled: ve.disabled,
                          id: w,
                          onAnimationStart: ot,
                          name: S,
                          placeholder: N,
                          readOnly: _,
                          required: ve.required,
                          rows: j,
                          value: K,
                          onKeyDown: z,
                          onKeyUp: F,
                          type: W,
                        },
                        Oe,
                        !bi($t) && { as: Ie, ownerState: E({}, $e, Oe.ownerState) },
                        {
                          ref: ie,
                          className: X(Ce.input, Oe.className, _ && 'MuiInputBase-readOnly'),
                          onBlur: He,
                          onChange: Ee,
                          onFocus: yt,
                        }
                      )
                    ),
                  }),
                  x,
                  M ? M(E({}, ve, { startAdornment: D })) : null,
                ],
              }
            )
          ),
        ],
      })
    );
  });
function Q8(e) {
  return he('MuiInput', e);
}
const rs = E({}, uc, ue('MuiInput', ['root', 'underline', 'input'])),
  Z8 = [
    'disableUnderline',
    'components',
    'componentsProps',
    'fullWidth',
    'inputComponent',
    'multiline',
    'slotProps',
    'slots',
    'type',
  ],
  J8 = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = ge({ root: ['root', !n && 'underline'], input: ['input'] }, Q8, t);
    return E({}, t, o);
  },
  e6 = q(Ab, {
    shouldForwardProp: (e) => So(e) || e === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Ob(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let r = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
    return (
      e.vars &&
        (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      E(
        { position: 'relative' },
        t.formControl && { 'label + &': { marginTop: 16 } },
        !t.disableUnderline && {
          '&::after': {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: 'absolute',
            right: 0,
            transform: 'scaleX(0)',
            transition: e.transitions.create('transform', {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: 'none',
          },
          [`&.${rs.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
          [`&.${rs.error}`]: {
            '&::before, &::after': { borderBottomColor: (e.vars || e).palette.error.main },
          },
          '&::before': {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: 'absolute',
            right: 0,
            transition: e.transitions.create('border-bottom-color', {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: 'none',
          },
          [`&:hover:not(.${rs.disabled}, .${rs.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            '@media (hover: none)': { borderBottom: `1px solid ${r}` },
          },
          [`&.${rs.disabled}:before`]: { borderBottomStyle: 'dotted' },
        }
      )
    );
  }),
  t6 = q(_b, { name: 'MuiInput', slot: 'Input', overridesResolver: Mb })({}),
  Ib = b.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = ce({ props: t, name: 'MuiInput' }),
      {
        disableUnderline: l,
        components: c = {},
        componentsProps: u,
        fullWidth: d = !1,
        inputComponent: p = 'input',
        multiline: m = !1,
        slotProps: x,
        slots: v = {},
        type: w = 'text',
      } = a,
      h = H(a, Z8),
      y = J8(a),
      k = { root: { ownerState: { disableUnderline: l } } },
      $ = (x ?? u) ? ct(x ?? u, k) : k,
      f = (r = (o = v.root) != null ? o : c.Root) != null ? r : e6,
      S = (i = (s = v.input) != null ? s : c.Input) != null ? i : t6;
    return C.jsx(
      q8,
      E(
        {
          slots: { root: f, input: S },
          slotProps: $,
          fullWidth: d,
          inputComponent: p,
          multiline: m,
          ref: n,
          type: w,
        },
        h,
        { classes: y }
      )
    );
  });
Ib.muiName = 'Input';
function n6(e) {
  return he('MuiInputAdornment', e);
}
const Wv = ue('MuiInputAdornment', [
  'root',
  'filled',
  'standard',
  'outlined',
  'positionStart',
  'positionEnd',
  'disablePointerEvents',
  'hiddenLabel',
  'sizeSmall',
]);
var Uv;
const r6 = [
    'children',
    'className',
    'component',
    'disablePointerEvents',
    'disableTypography',
    'position',
    'variant',
  ],
  o6 = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${U(n.position)}`],
      n.disablePointerEvents === !0 && t.disablePointerEvents,
      t[n.variant],
    ];
  },
  i6 = (e) => {
    const {
        classes: t,
        disablePointerEvents: n,
        hiddenLabel: r,
        position: o,
        size: i,
        variant: s,
      } = e,
      a = {
        root: [
          'root',
          n && 'disablePointerEvents',
          o && `position${U(o)}`,
          s,
          r && 'hiddenLabel',
          i && `size${U(i)}`,
        ],
      };
    return ge(a, n6, t);
  },
  s6 = q('div', { name: 'MuiInputAdornment', slot: 'Root', overridesResolver: o6 })(
    ({ theme: e, ownerState: t }) =>
      E(
        {
          display: 'flex',
          height: '0.01em',
          maxHeight: '2em',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          color: (e.vars || e).palette.action.active,
        },
        t.variant === 'filled' && {
          [`&.${Wv.positionStart}&:not(.${Wv.hiddenLabel})`]: { marginTop: 16 },
        },
        t.position === 'start' && { marginRight: 8 },
        t.position === 'end' && { marginLeft: 8 },
        t.disablePointerEvents === !0 && { pointerEvents: 'none' }
      )
  ),
  a6 = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiInputAdornment' }),
      {
        children: o,
        className: i,
        component: s = 'div',
        disablePointerEvents: a = !1,
        disableTypography: l = !1,
        position: c,
        variant: u,
      } = r,
      d = H(r, r6),
      p = Rb() || {};
    let m = u;
    u && p.variant, p && !m && (m = p.variant);
    const x = E({}, r, {
        hiddenLabel: p.hiddenLabel,
        size: p.size,
        disablePointerEvents: a,
        position: c,
        variant: m,
      }),
      v = i6(x);
    return C.jsx(Oh.Provider, {
      value: null,
      children: C.jsx(
        s6,
        E({ as: s, ownerState: x, className: X(v.root, i), ref: n }, d, {
          children:
            typeof o == 'string' && !l
              ? C.jsx(St, { color: 'text.secondary', children: o })
              : C.jsxs(b.Fragment, {
                  children: [
                    c === 'start'
                      ? Uv || (Uv = C.jsx('span', { className: 'notranslate', children: '​' }))
                      : null,
                    o,
                  ],
                }),
        })
      ),
    });
  });
function Vv(e) {
  return e.substring(2).toLowerCase();
}
function l6(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function c6(e) {
  const {
      children: t,
      disableReactTree: n = !1,
      mouseEvent: r = 'onClick',
      onClickAway: o,
      touchEvent: i = 'onTouchEnd',
    } = e,
    s = b.useRef(!1),
    a = b.useRef(null),
    l = b.useRef(!1),
    c = b.useRef(!1);
  b.useEffect(
    () => (
      setTimeout(() => {
        l.current = !0;
      }, 0),
      () => {
        l.current = !1;
      }
    ),
    []
  );
  const u = Ve(t.ref, a),
    d = Qn((x) => {
      const v = c.current;
      c.current = !1;
      const w = ut(a.current);
      if (!l.current || !a.current || ('clientX' in x && l6(x, w))) return;
      if (s.current) {
        s.current = !1;
        return;
      }
      let h;
      x.composedPath
        ? (h = x.composedPath().indexOf(a.current) > -1)
        : (h = !w.documentElement.contains(x.target) || a.current.contains(x.target)),
        !h && (n || !v) && o(x);
    }),
    p = (x) => (v) => {
      c.current = !0;
      const w = t.props[x];
      w && w(v);
    },
    m = { ref: u };
  return (
    i !== !1 && (m[i] = p(i)),
    b.useEffect(() => {
      if (i !== !1) {
        const x = Vv(i),
          v = ut(a.current),
          w = () => {
            s.current = !0;
          };
        return (
          v.addEventListener(x, d),
          v.addEventListener('touchmove', w),
          () => {
            v.removeEventListener(x, d), v.removeEventListener('touchmove', w);
          }
        );
      }
    }, [d, i]),
    r !== !1 && (m[r] = p(r)),
    b.useEffect(() => {
      if (r !== !1) {
        const x = Vv(r),
          v = ut(a.current);
        return (
          v.addEventListener(x, d),
          () => {
            v.removeEventListener(x, d);
          }
        );
      }
    }, [d, r]),
    C.jsx(b.Fragment, { children: b.cloneElement(t, m) })
  );
}
function u6({ sx: e, ...t }) {
  const n = Nt(),
    [r, o] = b.useState(!1),
    i = b.useCallback(() => {
      o((a) => !a);
    }, []),
    s = b.useCallback(() => {
      o(!1);
    }, []);
  return C.jsx(c6, {
    onClickAway: s,
    children: C.jsxs('div', {
      children: [
        !r && C.jsx(mo, { onClick: i, children: C.jsx(zn, { icon: 'eva:search-fill' }) }),
        C.jsx(fb, {
          direction: 'down',
          in: r,
          mountOnEnter: !0,
          unmountOnExit: !0,
          children: C.jsxs(le, {
            sx: {
              ...Lx({ color: n.vars.palette.background.default }),
              top: 0,
              left: 0,
              zIndex: 99,
              width: '100%',
              display: 'flex',
              position: 'absolute',
              alignItems: 'center',
              px: { xs: 3, md: 5 },
              boxShadow: n.customShadows.z8,
              height: {
                xs: 'var(--layout-header-mobile-height)',
                md: 'var(--layout-header-desktop-height)',
              },
              ...e,
            },
            ...t,
            children: [
              C.jsx(Ib, {
                autoFocus: !0,
                fullWidth: !0,
                disableUnderline: !0,
                placeholder: 'Search…',
                startAdornment: C.jsx(a6, {
                  position: 'start',
                  children: C.jsx(zn, {
                    width: 20,
                    icon: 'eva:search-fill',
                    sx: { color: 'text.disabled' },
                  }),
                }),
                sx: { fontWeight: 'fontWeightBold' },
              }),
              C.jsx(au, { variant: 'contained', onClick: s, children: 'Search' }),
            ],
          }),
        }),
      ],
    }),
  });
}
const Hv = [
  { id: 'team-1', name: 'Team 1', logo: '/assets/icons/workspaces/logo-1.webp', plan: 'Free' },
  { id: 'team-2', name: 'Team 2', logo: '/assets/icons/workspaces/logo-2.webp', plan: 'Pro' },
  { id: 'team-3', name: 'Team 3', logo: '/assets/icons/workspaces/logo-3.webp', plan: 'Pro' },
];
function d6({ sx: e, ...t }) {
  return C.jsx(mo, {
    sx: e,
    ...t,
    children: C.jsxs(Jn, {
      children: [
        C.jsx('path', {
          opacity: '0.32',
          d: 'M15.7798 4.5H5.2202C4.27169 4.5 3.5 5.06057 3.5 5.75042C3.5 6.43943 4.27169 7 5.2202 7H15.7798C16.7283 7 17.5 6.43943 17.5 5.75042C17.5 5.06054 16.7283 4.5 15.7798 4.5Z',
          fill: 'currentColor',
        }),
        C.jsx('path', {
          d: 'M18.7798 10.75H8.2202C7.27169 10.75 6.5 11.3106 6.5 12.0004C6.5 12.6894 7.27169 13.25 8.2202 13.25H18.7798C19.7283 13.25 20.5 12.6894 20.5 12.0004C20.5 11.3105 19.7283 10.75 18.7798 10.75Z',
          fill: 'currentColor',
        }),
        C.jsx('path', {
          d: 'M15.7798 17H5.2202C4.27169 17 3.5 17.5606 3.5 18.2504C3.5 18.9394 4.27169 19.5 5.2202 19.5H15.7798C16.7283 19.5 17.5 18.9394 17.5 18.2504C17.5 17.5606 16.7283 17 15.7798 17Z',
          fill: 'currentColor',
        }),
      ],
    }),
  });
}
const f6 = Ni(
  C.jsx('path', {
    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  }),
  'Person'
);
function p6(e) {
  return he('MuiAvatar', e);
}
ue('MuiAvatar', ['root', 'colorDefault', 'circular', 'rounded', 'square', 'img', 'fallback']);
const h6 = [
    'alt',
    'children',
    'className',
    'component',
    'slots',
    'slotProps',
    'imgProps',
    'sizes',
    'src',
    'srcSet',
    'variant',
  ],
  m6 = (e) => {
    const { classes: t, variant: n, colorDefault: r } = e;
    return ge(
      { root: ['root', n, r && 'colorDefault'], img: ['img'], fallback: ['fallback'] },
      p6,
      t
    );
  },
  g6 = q('div', {
    name: 'MuiAvatar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
    },
  })(({ theme: e }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(20),
    lineHeight: 1,
    borderRadius: '50%',
    overflow: 'hidden',
    userSelect: 'none',
    variants: [
      { props: { variant: 'rounded' }, style: { borderRadius: (e.vars || e).shape.borderRadius } },
      { props: { variant: 'square' }, style: { borderRadius: 0 } },
      {
        props: { colorDefault: !0 },
        style: E(
          { color: (e.vars || e).palette.background.default },
          e.vars
            ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
            : E(
                { backgroundColor: e.palette.grey[400] },
                e.applyStyles('dark', { backgroundColor: e.palette.grey[600] })
              )
        ),
      },
    ],
  })),
  v6 = q('img', { name: 'MuiAvatar', slot: 'Img', overridesResolver: (e, t) => t.img })({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    objectFit: 'cover',
    color: 'transparent',
    textIndent: 1e4,
  }),
  y6 = q(f6, { name: 'MuiAvatar', slot: 'Fallback', overridesResolver: (e, t) => t.fallback })({
    width: '75%',
    height: '75%',
  });
function x6({ crossOrigin: e, referrerPolicy: t, src: n, srcSet: r }) {
  const [o, i] = b.useState(!1);
  return (
    b.useEffect(() => {
      if (!n && !r) return;
      i(!1);
      let s = !0;
      const a = new Image();
      return (
        (a.onload = () => {
          s && i('loaded');
        }),
        (a.onerror = () => {
          s && i('error');
        }),
        (a.crossOrigin = e),
        (a.referrerPolicy = t),
        (a.src = n),
        r && (a.srcset = r),
        () => {
          s = !1;
        }
      );
    }, [e, t, n, r]),
    o
  );
}
const jb = b.forwardRef(function (t, n) {
  const r = ce({ props: t, name: 'MuiAvatar' }),
    {
      alt: o,
      children: i,
      className: s,
      component: a = 'div',
      slots: l = {},
      slotProps: c = {},
      imgProps: u,
      sizes: d,
      src: p,
      srcSet: m,
      variant: x = 'circular',
    } = r,
    v = H(r, h6);
  let w = null;
  const h = x6(E({}, u, { src: p, srcSet: m })),
    y = p || m,
    g = y && h !== 'error',
    k = E({}, r, { colorDefault: !g, component: a, variant: x }),
    $ = m6(k),
    [f, S] = kf('img', {
      className: $.img,
      elementType: v6,
      externalForwardedProps: { slots: l, slotProps: { img: E({}, u, c.img) } },
      additionalProps: { alt: o, src: p, srcSet: m, sizes: d },
      ownerState: k,
    });
  return (
    g
      ? (w = C.jsx(f, E({}, S)))
      : i || i === 0
        ? (w = i)
        : y && o
          ? (w = o[0])
          : (w = C.jsx(y6, { ownerState: k, className: $.fallback })),
    C.jsx(g6, E({ as: a, ownerState: k, className: X($.root, s), ref: n }, v, { children: w }))
  );
});
function b6({ data: e = [], sx: t, ...n }) {
  const r = gO(),
    o = $h(),
    [i, s] = b.useState(null),
    a = b.useCallback((u) => {
      s(u.currentTarget);
    }, []),
    l = b.useCallback(() => {
      s(null);
    }, []),
    c = b.useCallback(
      (u) => {
        l(), r.push(u);
      },
      [l, r]
    );
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(mo, {
        onClick: a,
        sx: {
          p: '2px',
          width: 40,
          height: 40,
          background: (u) =>
            `conic-gradient(${u.vars.palette.primary.light}, ${u.vars.palette.warning.light}, ${u.vars.palette.primary.light})`,
          ...t,
        },
        ...n,
        children: C.jsx(jb, {
          src: Hn.photoURL,
          alt: Hn.displayName,
          sx: { width: 1, height: 1 },
          children: Hn.displayName.charAt(0).toUpperCase(),
        }),
      }),
      C.jsxs(lu, {
        open: !!i,
        anchorEl: i,
        onClose: l,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
        slotProps: { paper: { sx: { width: 200 } } },
        children: [
          C.jsxs(le, {
            sx: { p: 2, pb: 1.5 },
            children: [
              C.jsx(St, {
                variant: 'subtitle2',
                noWrap: !0,
                children: Hn == null ? void 0 : Hn.displayName,
              }),
              C.jsx(St, {
                variant: 'body2',
                sx: { color: 'text.secondary' },
                noWrap: !0,
                children: Hn == null ? void 0 : Hn.email,
              }),
            ],
          }),
          C.jsx(ea, { sx: { borderStyle: 'dashed' } }),
          C.jsx(Th, {
            disablePadding: !0,
            sx: {
              p: 1,
              gap: 0.5,
              display: 'flex',
              flexDirection: 'column',
              [`& .${bn.root}`]: {
                px: 1,
                gap: 2,
                borderRadius: 0.75,
                color: 'text.secondary',
                '&:hover': { color: 'text.primary' },
                [`&.${bn.selected}`]: {
                  color: 'text.primary',
                  bgcolor: 'action.selected',
                  fontWeight: 'fontWeightSemiBold',
                },
              },
            },
            children: e.map((u) =>
              C.jsxs(
                Rh,
                { selected: u.href === o, onClick: () => c(u.href), children: [u.icon, u.label] },
                u.label
              )
            ),
          }),
          C.jsx(ea, { sx: { borderStyle: 'dashed' } }),
          C.jsx(le, {
            sx: { p: 1 },
            children: C.jsx(au, {
              fullWidth: !0,
              color: 'error',
              size: 'medium',
              variant: 'text',
              children: 'Logout',
            }),
          }),
        ],
      }),
    ],
  });
}
function C6({ data: e = [], sx: t, ...n }) {
  const [r, o] = b.useState(e[0].value),
    [i, s] = b.useState(null),
    a = b.useCallback((p) => {
      s(p.currentTarget);
    }, []),
    l = b.useCallback(() => {
      s(null);
    }, []),
    c = b.useCallback(
      (p) => {
        o(p), l();
      },
      [l]
    ),
    u = e.find((p) => p.value === r),
    d = (p, m) =>
      C.jsx(le, {
        component: 'img',
        alt: p,
        src: m,
        sx: { width: 26, height: 20, borderRadius: 0.5, objectFit: 'cover' },
      });
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(mo, {
        onClick: a,
        sx: { width: 40, height: 40, ...(i && { bgcolor: 'action.selected' }), ...t },
        ...n,
        children: d(u == null ? void 0 : u.label, u == null ? void 0 : u.icon),
      }),
      C.jsx(lu, {
        open: !!i,
        anchorEl: i,
        onClose: l,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
        children: C.jsx(Th, {
          disablePadding: !0,
          sx: {
            p: 0.5,
            gap: 0.5,
            width: 160,
            display: 'flex',
            flexDirection: 'column',
            [`& .${bn.root}`]: {
              px: 1,
              gap: 2,
              borderRadius: 0.75,
              [`&.${bn.selected}`]: {
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightSemiBold',
              },
            },
          },
          children:
            e == null
              ? void 0
              : e.map((p) =>
                  C.jsxs(
                    Rh,
                    {
                      selected: p.value === (u == null ? void 0 : u.value),
                      onClick: () => c(p.value),
                      children: [d(p.label, p.icon), p.label],
                    },
                    p.value
                  )
                ),
        }),
      }),
    ],
  });
}
function S6(e) {
  const { badgeContent: t, invisible: n = !1, max: r = 99, showZero: o = !1 } = e,
    i = Px({ badgeContent: t, max: r });
  let s = n;
  n === !1 && t === 0 && !o && (s = !0);
  const { badgeContent: a, max: l = r } = s ? i : e,
    c = a && Number(a) > l ? `${l}+` : a;
  return { badgeContent: a, invisible: s, max: l, displayValue: c };
}
function w6(e) {
  return he('MuiBadge', e);
}
const hr = ue('MuiBadge', [
    'root',
    'badge',
    'dot',
    'standard',
    'anchorOriginTopRight',
    'anchorOriginBottomRight',
    'anchorOriginTopLeft',
    'anchorOriginBottomLeft',
    'invisible',
    'colorError',
    'colorInfo',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorWarning',
    'overlapRectangular',
    'overlapCircular',
    'anchorOriginTopLeftCircular',
    'anchorOriginTopLeftRectangular',
    'anchorOriginTopRightCircular',
    'anchorOriginTopRightRectangular',
    'anchorOriginBottomLeftCircular',
    'anchorOriginBottomLeftRectangular',
    'anchorOriginBottomRightCircular',
    'anchorOriginBottomRightRectangular',
  ]),
  k6 = [
    'anchorOrigin',
    'className',
    'classes',
    'component',
    'components',
    'componentsProps',
    'children',
    'overlap',
    'color',
    'invisible',
    'max',
    'badgeContent',
    'slots',
    'slotProps',
    'showZero',
    'variant',
  ],
  ld = 10,
  cd = 4,
  E6 = (e) => {
    const { color: t, anchorOrigin: n, invisible: r, overlap: o, variant: i, classes: s = {} } = e,
      a = {
        root: ['root'],
        badge: [
          'badge',
          i,
          r && 'invisible',
          `anchorOrigin${U(n.vertical)}${U(n.horizontal)}`,
          `anchorOrigin${U(n.vertical)}${U(n.horizontal)}${U(o)}`,
          `overlap${U(o)}`,
          t !== 'default' && `color${U(t)}`,
        ],
      };
    return ge(a, w6, s);
  },
  $6 = q('span', { name: 'MuiBadge', slot: 'Root', overridesResolver: (e, t) => t.root })({
    position: 'relative',
    display: 'inline-flex',
    verticalAlign: 'middle',
    flexShrink: 0,
  }),
  P6 = q('span', {
    name: 'MuiBadge',
    slot: 'Badge',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.badge,
        t[n.variant],
        t[
          `anchorOrigin${U(n.anchorOrigin.vertical)}${U(n.anchorOrigin.horizontal)}${U(n.overlap)}`
        ],
        n.color !== 'default' && t[`color${U(n.color)}`],
        n.invisible && t.invisible,
      ];
    },
  })(({ theme: e }) => {
    var t;
    return {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      boxSizing: 'border-box',
      fontFamily: e.typography.fontFamily,
      fontWeight: e.typography.fontWeightMedium,
      fontSize: e.typography.pxToRem(12),
      minWidth: ld * 2,
      lineHeight: 1,
      padding: '0 6px',
      height: ld * 2,
      borderRadius: ld,
      zIndex: 1,
      transition: e.transitions.create('transform', {
        easing: e.transitions.easing.easeInOut,
        duration: e.transitions.duration.enteringScreen,
      }),
      variants: [
        ...Object.keys(((t = e.vars) != null ? t : e).palette)
          .filter((n) => {
            var r, o;
            return (
              ((r = e.vars) != null ? r : e).palette[n].main &&
              ((o = e.vars) != null ? o : e).palette[n].contrastText
            );
          })
          .map((n) => ({
            props: { color: n },
            style: {
              backgroundColor: (e.vars || e).palette[n].main,
              color: (e.vars || e).palette[n].contrastText,
            },
          })),
        {
          props: { variant: 'dot' },
          style: { borderRadius: cd, height: cd * 2, minWidth: cd * 2, padding: 0 },
        },
        {
          props: ({ ownerState: n }) =>
            n.anchorOrigin.vertical === 'top' &&
            n.anchorOrigin.horizontal === 'right' &&
            n.overlap === 'rectangular',
          style: {
            top: 0,
            right: 0,
            transform: 'scale(1) translate(50%, -50%)',
            transformOrigin: '100% 0%',
            [`&.${hr.invisible}`]: { transform: 'scale(0) translate(50%, -50%)' },
          },
        },
        {
          props: ({ ownerState: n }) =>
            n.anchorOrigin.vertical === 'bottom' &&
            n.anchorOrigin.horizontal === 'right' &&
            n.overlap === 'rectangular',
          style: {
            bottom: 0,
            right: 0,
            transform: 'scale(1) translate(50%, 50%)',
            transformOrigin: '100% 100%',
            [`&.${hr.invisible}`]: { transform: 'scale(0) translate(50%, 50%)' },
          },
        },
        {
          props: ({ ownerState: n }) =>
            n.anchorOrigin.vertical === 'top' &&
            n.anchorOrigin.horizontal === 'left' &&
            n.overlap === 'rectangular',
          style: {
            top: 0,
            left: 0,
            transform: 'scale(1) translate(-50%, -50%)',
            transformOrigin: '0% 0%',
            [`&.${hr.invisible}`]: { transform: 'scale(0) translate(-50%, -50%)' },
          },
        },
        {
          props: ({ ownerState: n }) =>
            n.anchorOrigin.vertical === 'bottom' &&
            n.anchorOrigin.horizontal === 'left' &&
            n.overlap === 'rectangular',
          style: {
            bottom: 0,
            left: 0,
            transform: 'scale(1) translate(-50%, 50%)',
            transformOrigin: '0% 100%',
            [`&.${hr.invisible}`]: { transform: 'scale(0) translate(-50%, 50%)' },
          },
        },
        {
          props: ({ ownerState: n }) =>
            n.anchorOrigin.vertical === 'top' &&
            n.anchorOrigin.horizontal === 'right' &&
            n.overlap === 'circular',
          style: {
            top: '14%',
            right: '14%',
            transform: 'scale(1) translate(50%, -50%)',
            transformOrigin: '100% 0%',
            [`&.${hr.invisible}`]: { transform: 'scale(0) translate(50%, -50%)' },
          },
        },
        {
          props: ({ ownerState: n }) =>
            n.anchorOrigin.vertical === 'bottom' &&
            n.anchorOrigin.horizontal === 'right' &&
            n.overlap === 'circular',
          style: {
            bottom: '14%',
            right: '14%',
            transform: 'scale(1) translate(50%, 50%)',
            transformOrigin: '100% 100%',
            [`&.${hr.invisible}`]: { transform: 'scale(0) translate(50%, 50%)' },
          },
        },
        {
          props: ({ ownerState: n }) =>
            n.anchorOrigin.vertical === 'top' &&
            n.anchorOrigin.horizontal === 'left' &&
            n.overlap === 'circular',
          style: {
            top: '14%',
            left: '14%',
            transform: 'scale(1) translate(-50%, -50%)',
            transformOrigin: '0% 0%',
            [`&.${hr.invisible}`]: { transform: 'scale(0) translate(-50%, -50%)' },
          },
        },
        {
          props: ({ ownerState: n }) =>
            n.anchorOrigin.vertical === 'bottom' &&
            n.anchorOrigin.horizontal === 'left' &&
            n.overlap === 'circular',
          style: {
            bottom: '14%',
            left: '14%',
            transform: 'scale(1) translate(-50%, 50%)',
            transformOrigin: '0% 100%',
            [`&.${hr.invisible}`]: { transform: 'scale(0) translate(-50%, 50%)' },
          },
        },
        {
          props: { invisible: !0 },
          style: {
            transition: e.transitions.create('transform', {
              easing: e.transitions.easing.easeInOut,
              duration: e.transitions.duration.leavingScreen,
            }),
          },
        },
      ],
    };
  }),
  T6 = b.forwardRef(function (t, n) {
    var r, o, i, s, a, l;
    const c = ce({ props: t, name: 'MuiBadge' }),
      {
        anchorOrigin: u = { vertical: 'top', horizontal: 'right' },
        className: d,
        component: p,
        components: m = {},
        componentsProps: x = {},
        children: v,
        overlap: w = 'rectangular',
        color: h = 'default',
        invisible: y = !1,
        max: g = 99,
        badgeContent: k,
        slots: $,
        slotProps: f,
        showZero: S = !1,
        variant: P = 'standard',
      } = c,
      O = H(c, k6),
      {
        badgeContent: R,
        invisible: A,
        max: z,
        displayValue: F,
      } = S6({ max: g, invisible: y, badgeContent: k, showZero: S }),
      N = Px({ anchorOrigin: u, color: h, overlap: w, variant: P, badgeContent: k }),
      _ = A || (R == null && P !== 'dot'),
      { color: M = h, overlap: j = w, anchorOrigin: T = u, variant: I = P } = _ ? N : c,
      D = I !== 'dot' ? F : void 0,
      W = E({}, c, {
        badgeContent: R,
        invisible: _,
        max: z,
        displayValue: D,
        showZero: S,
        anchorOrigin: T,
        color: M,
        overlap: j,
        variant: I,
      }),
      V = E6(W),
      te = (r = (o = $ == null ? void 0 : $.root) != null ? o : m.Root) != null ? r : $6,
      K = (i = (s = $ == null ? void 0 : $.badge) != null ? s : m.Badge) != null ? i : P6,
      Q = (a = f == null ? void 0 : f.root) != null ? a : x.root,
      J = (l = f == null ? void 0 : f.badge) != null ? l : x.badge,
      re = po({
        elementType: te,
        externalSlotProps: Q,
        externalForwardedProps: O,
        additionalProps: { ref: n, as: p },
        ownerState: W,
        className: X(Q == null ? void 0 : Q.className, V.root, d),
      }),
      ie = po({
        elementType: K,
        externalSlotProps: J,
        ownerState: W,
        className: X(V.badge, J == null ? void 0 : J.className),
      });
    return C.jsxs(te, E({}, re, { children: [v, C.jsx(K, E({}, ie, { children: D }))] }));
  });
var Mh = {};
Object.defineProperty(Mh, '__esModule', { value: !0 });
var Nb = (Mh.default = void 0),
  R6 = M6(b),
  O6 = tx;
function Lb(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Lb = function (r) {
    return r ? n : t;
  })(e);
}
function M6(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e };
  var n = Lb(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function A6(e) {
  return Object.keys(e).length === 0;
}
function _6(e = null) {
  const t = R6.useContext(O6.ThemeContext);
  return !t || A6(t) ? e : t;
}
Nb = Mh.default = _6;
var _t = 'top',
  dn = 'bottom',
  fn = 'right',
  It = 'left',
  Ah = 'auto',
  ya = [_t, dn, fn, It],
  Si = 'start',
  ta = 'end',
  I6 = 'clippingParents',
  Db = 'viewport',
  os = 'popper',
  j6 = 'reference',
  Gv = ya.reduce(function (e, t) {
    return e.concat([t + '-' + Si, t + '-' + ta]);
  }, []),
  zb = [].concat(ya, [Ah]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Si, t + '-' + ta]);
  }, []),
  N6 = 'beforeRead',
  L6 = 'read',
  D6 = 'afterRead',
  z6 = 'beforeMain',
  F6 = 'main',
  B6 = 'afterMain',
  W6 = 'beforeWrite',
  U6 = 'write',
  V6 = 'afterWrite',
  H6 = [N6, L6, D6, z6, F6, B6, W6, U6, V6];
function Bn(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function Kt(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function vo(e) {
  var t = Kt(e).Element;
  return e instanceof t || e instanceof Element;
}
function sn(e) {
  var t = Kt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function _h(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = Kt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function G6(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !sn(i) ||
      !Bn(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (s) {
        var a = o[s];
        a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? '' : a);
      }));
  });
}
function K6(e) {
  var t = e.state,
    n = {
      popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
      arrow: { position: 'absolute' },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          a = s.reduce(function (l, c) {
            return (l[c] = ''), l;
          }, {});
        !sn(o) ||
          !Bn(o) ||
          (Object.assign(o.style, a),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const Y6 = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: G6,
  effect: K6,
  requires: ['computeStyles'],
};
function Fn(e) {
  return e.split('-')[0];
}
var io = Math.max,
  dc = Math.min,
  wi = Math.round;
function If() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function Fb() {
  return !/^((?!chrome|android).)*safari/i.test(If());
}
function ki(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    sn(e) &&
    ((o = (e.offsetWidth > 0 && wi(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && wi(r.height) / e.offsetHeight) || 1));
  var s = vo(e) ? Kt(e) : window,
    a = s.visualViewport,
    l = !Fb() && n,
    c = (r.left + (l && a ? a.offsetLeft : 0)) / o,
    u = (r.top + (l && a ? a.offsetTop : 0)) / i,
    d = r.width / o,
    p = r.height / i;
  return { width: d, height: p, top: u, right: c + d, bottom: u + p, left: c, x: c, y: u };
}
function Ih(e) {
  var t = ki(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Bb(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && _h(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function sr(e) {
  return Kt(e).getComputedStyle(e);
}
function X6(e) {
  return ['table', 'td', 'th'].indexOf(Bn(e)) >= 0;
}
function Br(e) {
  return ((vo(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function cu(e) {
  return Bn(e) === 'html' ? e : e.assignedSlot || e.parentNode || (_h(e) ? e.host : null) || Br(e);
}
function Kv(e) {
  return !sn(e) || sr(e).position === 'fixed' ? null : e.offsetParent;
}
function q6(e) {
  var t = /firefox/i.test(If()),
    n = /Trident/i.test(If());
  if (n && sn(e)) {
    var r = sr(e);
    if (r.position === 'fixed') return null;
  }
  var o = cu(e);
  for (_h(o) && (o = o.host); sn(o) && ['html', 'body'].indexOf(Bn(o)) < 0; ) {
    var i = sr(o);
    if (
      i.transform !== 'none' ||
      i.perspective !== 'none' ||
      i.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === 'filter') ||
      (t && i.filter && i.filter !== 'none')
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function xa(e) {
  for (var t = Kt(e), n = Kv(e); n && X6(n) && sr(n).position === 'static'; ) n = Kv(n);
  return n && (Bn(n) === 'html' || (Bn(n) === 'body' && sr(n).position === 'static'))
    ? t
    : n || q6(e) || t;
}
function jh(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function $s(e, t, n) {
  return io(e, dc(t, n));
}
function Q6(e, t, n) {
  var r = $s(e, t, n);
  return r > n ? n : r;
}
function Wb() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ub(e) {
  return Object.assign({}, Wb(), e);
}
function Vb(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var Z6 = function (t, n) {
  return (
    (t = typeof t == 'function' ? t(Object.assign({}, n.rects, { placement: n.placement })) : t),
    Ub(typeof t != 'number' ? t : Vb(t, ya))
  );
};
function J6(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    s = n.modifiersData.popperOffsets,
    a = Fn(n.placement),
    l = jh(a),
    c = [It, fn].indexOf(a) >= 0,
    u = c ? 'height' : 'width';
  if (!(!i || !s)) {
    var d = Z6(o.padding, n),
      p = Ih(i),
      m = l === 'y' ? _t : It,
      x = l === 'y' ? dn : fn,
      v = n.rects.reference[u] + n.rects.reference[l] - s[l] - n.rects.popper[u],
      w = s[l] - n.rects.reference[l],
      h = xa(i),
      y = h ? (l === 'y' ? h.clientHeight || 0 : h.clientWidth || 0) : 0,
      g = v / 2 - w / 2,
      k = d[m],
      $ = y - p[u] - d[x],
      f = y / 2 - p[u] / 2 + g,
      S = $s(k, f, $),
      P = l;
    n.modifiersData[r] = ((t = {}), (t[P] = S), (t.centerOffset = S - f), t);
  }
}
function eM(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? '[data-popper-arrow]' : r;
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (Bb(t.elements.popper, o) && (t.elements.arrow = o)));
}
const tM = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: J6,
  effect: eM,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function Ei(e) {
  return e.split('-')[1];
}
var nM = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function rM(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: wi(n * o) / o || 0, y: wi(r * o) / o || 0 };
}
function Yv(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    s = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    u = e.roundOffsets,
    d = e.isFixed,
    p = s.x,
    m = p === void 0 ? 0 : p,
    x = s.y,
    v = x === void 0 ? 0 : x,
    w = typeof u == 'function' ? u({ x: m, y: v }) : { x: m, y: v };
  (m = w.x), (v = w.y);
  var h = s.hasOwnProperty('x'),
    y = s.hasOwnProperty('y'),
    g = It,
    k = _t,
    $ = window;
  if (c) {
    var f = xa(n),
      S = 'clientHeight',
      P = 'clientWidth';
    if (
      (f === Kt(n) &&
        ((f = Br(n)),
        sr(f).position !== 'static' &&
          a === 'absolute' &&
          ((S = 'scrollHeight'), (P = 'scrollWidth'))),
      (f = f),
      o === _t || ((o === It || o === fn) && i === ta))
    ) {
      k = dn;
      var O = d && f === $ && $.visualViewport ? $.visualViewport.height : f[S];
      (v -= O - r.height), (v *= l ? 1 : -1);
    }
    if (o === It || ((o === _t || o === dn) && i === ta)) {
      g = fn;
      var R = d && f === $ && $.visualViewport ? $.visualViewport.width : f[P];
      (m -= R - r.width), (m *= l ? 1 : -1);
    }
  }
  var A = Object.assign({ position: a }, c && nM),
    z = u === !0 ? rM({ x: m, y: v }, Kt(n)) : { x: m, y: v };
  if (((m = z.x), (v = z.y), l)) {
    var F;
    return Object.assign(
      {},
      A,
      ((F = {}),
      (F[k] = y ? '0' : ''),
      (F[g] = h ? '0' : ''),
      (F.transform =
        ($.devicePixelRatio || 1) <= 1
          ? 'translate(' + m + 'px, ' + v + 'px)'
          : 'translate3d(' + m + 'px, ' + v + 'px, 0)'),
      F)
    );
  }
  return Object.assign(
    {},
    A,
    ((t = {}), (t[k] = y ? v + 'px' : ''), (t[g] = h ? m + 'px' : ''), (t.transform = ''), t)
  );
}
function oM(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    s = i === void 0 ? !0 : i,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    c = {
      placement: Fn(t.placement),
      variation: Ei(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed',
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Yv(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Yv(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }));
}
const iM = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: oM, data: {} };
var qa = { passive: !0 };
function sM(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    s = r.resize,
    a = s === void 0 ? !0 : s,
    l = Kt(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (u) {
        u.addEventListener('scroll', n.update, qa);
      }),
    a && l.addEventListener('resize', n.update, qa),
    function () {
      i &&
        c.forEach(function (u) {
          u.removeEventListener('scroll', n.update, qa);
        }),
        a && l.removeEventListener('resize', n.update, qa);
    }
  );
}
const aM = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: sM,
  data: {},
};
var lM = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function wl(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return lM[t];
  });
}
var cM = { start: 'end', end: 'start' };
function Xv(e) {
  return e.replace(/start|end/g, function (t) {
    return cM[t];
  });
}
function Nh(e) {
  var t = Kt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Lh(e) {
  return ki(Br(e)).left + Nh(e).scrollLeft;
}
function uM(e, t) {
  var n = Kt(e),
    r = Br(e),
    o = n.visualViewport,
    i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    var c = Fb();
    (c || (!c && t === 'fixed')) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a + Lh(e), y: l };
}
function dM(e) {
  var t,
    n = Br(e),
    r = Nh(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = io(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
    s = io(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
    a = -r.scrollLeft + Lh(e),
    l = -r.scrollTop;
  return (
    sr(o || n).direction === 'rtl' && (a += io(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: s, x: a, y: l }
  );
}
function Dh(e) {
  var t = sr(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Hb(e) {
  return ['html', 'body', '#document'].indexOf(Bn(e)) >= 0
    ? e.ownerDocument.body
    : sn(e) && Dh(e)
      ? e
      : Hb(cu(e));
}
function Ps(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Hb(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Kt(r),
    s = o ? [i].concat(i.visualViewport || [], Dh(r) ? r : []) : r,
    a = t.concat(s);
  return o ? a : a.concat(Ps(cu(s)));
}
function jf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function fM(e, t) {
  var n = ki(e, !1, t === 'fixed');
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function qv(e, t, n) {
  return t === Db ? jf(uM(e, n)) : vo(t) ? fM(t, n) : jf(dM(Br(e)));
}
function pM(e) {
  var t = Ps(cu(e)),
    n = ['absolute', 'fixed'].indexOf(sr(e).position) >= 0,
    r = n && sn(e) ? xa(e) : e;
  return vo(r)
    ? t.filter(function (o) {
        return vo(o) && Bb(o, r) && Bn(o) !== 'body';
      })
    : [];
}
function hM(e, t, n, r) {
  var o = t === 'clippingParents' ? pM(e) : [].concat(t),
    i = [].concat(o, [n]),
    s = i[0],
    a = i.reduce(
      function (l, c) {
        var u = qv(e, c, r);
        return (
          (l.top = io(u.top, l.top)),
          (l.right = dc(u.right, l.right)),
          (l.bottom = dc(u.bottom, l.bottom)),
          (l.left = io(u.left, l.left)),
          l
        );
      },
      qv(e, s, r)
    );
  return (
    (a.width = a.right - a.left), (a.height = a.bottom - a.top), (a.x = a.left), (a.y = a.top), a
  );
}
function Gb(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Fn(r) : null,
    i = r ? Ei(r) : null,
    s = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case _t:
      l = { x: s, y: t.y - n.height };
      break;
    case dn:
      l = { x: s, y: t.y + t.height };
      break;
    case fn:
      l = { x: t.x + t.width, y: a };
      break;
    case It:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = o ? jh(o) : null;
  if (c != null) {
    var u = c === 'y' ? 'height' : 'width';
    switch (i) {
      case Si:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case ta:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function na(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    s = i === void 0 ? e.strategy : i,
    a = n.boundary,
    l = a === void 0 ? I6 : a,
    c = n.rootBoundary,
    u = c === void 0 ? Db : c,
    d = n.elementContext,
    p = d === void 0 ? os : d,
    m = n.altBoundary,
    x = m === void 0 ? !1 : m,
    v = n.padding,
    w = v === void 0 ? 0 : v,
    h = Ub(typeof w != 'number' ? w : Vb(w, ya)),
    y = p === os ? j6 : os,
    g = e.rects.popper,
    k = e.elements[x ? y : p],
    $ = hM(vo(k) ? k : k.contextElement || Br(e.elements.popper), l, u, s),
    f = ki(e.elements.reference),
    S = Gb({ reference: f, element: g, strategy: 'absolute', placement: o }),
    P = jf(Object.assign({}, g, S)),
    O = p === os ? P : f,
    R = {
      top: $.top - O.top + h.top,
      bottom: O.bottom - $.bottom + h.bottom,
      left: $.left - O.left + h.left,
      right: O.right - $.right + h.right,
    },
    A = e.modifiersData.offset;
  if (p === os && A) {
    var z = A[o];
    Object.keys(R).forEach(function (F) {
      var N = [fn, dn].indexOf(F) >= 0 ? 1 : -1,
        _ = [_t, dn].indexOf(F) >= 0 ? 'y' : 'x';
      R[F] += z[_] * N;
    });
  }
  return R;
}
function mM(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    s = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    c = l === void 0 ? zb : l,
    u = Ei(r),
    d = u
      ? a
        ? Gv
        : Gv.filter(function (x) {
            return Ei(x) === u;
          })
      : ya,
    p = d.filter(function (x) {
      return c.indexOf(x) >= 0;
    });
  p.length === 0 && (p = d);
  var m = p.reduce(function (x, v) {
    return (x[v] = na(e, { placement: v, boundary: o, rootBoundary: i, padding: s })[Fn(v)]), x;
  }, {});
  return Object.keys(m).sort(function (x, v) {
    return m[x] - m[v];
  });
}
function gM(e) {
  if (Fn(e) === Ah) return [];
  var t = wl(e);
  return [Xv(e), t, Xv(t)];
}
function vM(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        s = n.altAxis,
        a = s === void 0 ? !0 : s,
        l = n.fallbackPlacements,
        c = n.padding,
        u = n.boundary,
        d = n.rootBoundary,
        p = n.altBoundary,
        m = n.flipVariations,
        x = m === void 0 ? !0 : m,
        v = n.allowedAutoPlacements,
        w = t.options.placement,
        h = Fn(w),
        y = h === w,
        g = l || (y || !x ? [wl(w)] : gM(w)),
        k = [w].concat(g).reduce(function (K, Q) {
          return K.concat(
            Fn(Q) === Ah
              ? mM(t, {
                  placement: Q,
                  boundary: u,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: x,
                  allowedAutoPlacements: v,
                })
              : Q
          );
        }, []),
        $ = t.rects.reference,
        f = t.rects.popper,
        S = new Map(),
        P = !0,
        O = k[0],
        R = 0;
      R < k.length;
      R++
    ) {
      var A = k[R],
        z = Fn(A),
        F = Ei(A) === Si,
        N = [_t, dn].indexOf(z) >= 0,
        _ = N ? 'width' : 'height',
        M = na(t, { placement: A, boundary: u, rootBoundary: d, altBoundary: p, padding: c }),
        j = N ? (F ? fn : It) : F ? dn : _t;
      $[_] > f[_] && (j = wl(j));
      var T = wl(j),
        I = [];
      if (
        (i && I.push(M[z] <= 0),
        a && I.push(M[j] <= 0, M[T] <= 0),
        I.every(function (K) {
          return K;
        }))
      ) {
        (O = A), (P = !1);
        break;
      }
      S.set(A, I);
    }
    if (P)
      for (
        var D = x ? 3 : 1,
          W = function (Q) {
            var J = k.find(function (re) {
              var ie = S.get(re);
              if (ie)
                return ie.slice(0, Q).every(function (ne) {
                  return ne;
                });
            });
            if (J) return (O = J), 'break';
          },
          V = D;
        V > 0;
        V--
      ) {
        var te = W(V);
        if (te === 'break') break;
      }
    t.placement !== O && ((t.modifiersData[r]._skip = !0), (t.placement = O), (t.reset = !0));
  }
}
const yM = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: vM,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function Qv(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function Zv(e) {
  return [_t, fn, dn, It].some(function (t) {
    return e[t] >= 0;
  });
}
function xM(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    s = na(t, { elementContext: 'reference' }),
    a = na(t, { altBoundary: !0 }),
    l = Qv(s, r),
    c = Qv(a, o, i),
    u = Zv(l),
    d = Zv(c);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': u,
      'data-popper-escaped': d,
    }));
}
const bM = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: xM,
};
function CM(e, t, n) {
  var r = Fn(e),
    o = [It, _t].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    s = i[0],
    a = i[1];
  return (
    (s = s || 0), (a = (a || 0) * o), [It, fn].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a }
  );
}
function SM(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    s = zb.reduce(function (u, d) {
      return (u[d] = CM(d, t.rects, i)), u;
    }, {}),
    a = s[t.placement],
    l = a.x,
    c = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[r] = s);
}
const wM = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: SM };
function kM(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Gb({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  });
}
const EM = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: kM, data: {} };
function $M(e) {
  return e === 'x' ? 'y' : 'x';
}
function PM(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    s = n.altAxis,
    a = s === void 0 ? !1 : s,
    l = n.boundary,
    c = n.rootBoundary,
    u = n.altBoundary,
    d = n.padding,
    p = n.tether,
    m = p === void 0 ? !0 : p,
    x = n.tetherOffset,
    v = x === void 0 ? 0 : x,
    w = na(t, { boundary: l, rootBoundary: c, padding: d, altBoundary: u }),
    h = Fn(t.placement),
    y = Ei(t.placement),
    g = !y,
    k = jh(h),
    $ = $M(k),
    f = t.modifiersData.popperOffsets,
    S = t.rects.reference,
    P = t.rects.popper,
    O = typeof v == 'function' ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    R =
      typeof O == 'number'
        ? { mainAxis: O, altAxis: O }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
    A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    z = { x: 0, y: 0 };
  if (f) {
    if (i) {
      var F,
        N = k === 'y' ? _t : It,
        _ = k === 'y' ? dn : fn,
        M = k === 'y' ? 'height' : 'width',
        j = f[k],
        T = j + w[N],
        I = j - w[_],
        D = m ? -P[M] / 2 : 0,
        W = y === Si ? S[M] : P[M],
        V = y === Si ? -P[M] : -S[M],
        te = t.elements.arrow,
        K = m && te ? Ih(te) : { width: 0, height: 0 },
        Q = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Wb(),
        J = Q[N],
        re = Q[_],
        ie = $s(0, S[M], K[M]),
        ne = g ? S[M] / 2 - D - ie - J - R.mainAxis : W - ie - J - R.mainAxis,
        se = g ? -S[M] / 2 + D + ie + re + R.mainAxis : V + ie + re + R.mainAxis,
        Z = t.elements.arrow && xa(t.elements.arrow),
        ve = Z ? (k === 'y' ? Z.clientTop || 0 : Z.clientLeft || 0) : 0,
        ee = (F = A == null ? void 0 : A[k]) != null ? F : 0,
        de = j + ne - ee - ve,
        fe = j + se - ee,
        yt = $s(m ? dc(T, de) : T, j, m ? io(I, fe) : I);
      (f[k] = yt), (z[k] = yt - j);
    }
    if (a) {
      var He,
        Ee = k === 'x' ? _t : It,
        Lt = k === 'x' ? dn : fn,
        Ie = f[$],
        Oe = $ === 'y' ? 'height' : 'width',
        ot = Ie + w[Ee],
        $e = Ie - w[Lt],
        Ce = [_t, It].indexOf(h) !== -1,
        Je = (He = A == null ? void 0 : A[$]) != null ? He : 0,
        xt = Ce ? ot : Ie - S[Oe] - P[Oe] - Je + R.altAxis,
        $t = Ce ? Ie + S[Oe] + P[Oe] - Je - R.altAxis : $e,
        ye = m && Ce ? Q6(xt, Ie, $t) : $s(m ? xt : ot, Ie, m ? $t : $e);
      (f[$] = ye), (z[$] = ye - Ie);
    }
    t.modifiersData[r] = z;
  }
}
const TM = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: PM,
  requiresIfExists: ['offset'],
};
function RM(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function OM(e) {
  return e === Kt(e) || !sn(e) ? Nh(e) : RM(e);
}
function MM(e) {
  var t = e.getBoundingClientRect(),
    n = wi(t.width) / e.offsetWidth || 1,
    r = wi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function AM(e, t, n) {
  n === void 0 && (n = !1);
  var r = sn(t),
    o = sn(t) && MM(t),
    i = Br(t),
    s = ki(e, o, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Bn(t) !== 'body' || Dh(i)) && (a = OM(t)),
      sn(t) ? ((l = ki(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop)) : i && (l.x = Lh(i))),
    {
      x: s.left + a.scrollLeft - l.x,
      y: s.top + a.scrollTop - l.y,
      width: s.width,
      height: s.height,
    }
  );
}
function _M(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function IM(e) {
  var t = _M(e);
  return H6.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function jM(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function NM(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var Jv = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function e0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == 'function');
  });
}
function LM(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? Jv : o;
  return function (a, l, c) {
    c === void 0 && (c = i);
    var u = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Jv, i),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      p = !1,
      m = {
        state: u,
        setOptions: function (h) {
          var y = typeof h == 'function' ? h(u.options) : h;
          v(),
            (u.options = Object.assign({}, i, u.options, y)),
            (u.scrollParents = {
              reference: vo(a) ? Ps(a) : a.contextElement ? Ps(a.contextElement) : [],
              popper: Ps(l),
            });
          var g = IM(NM([].concat(r, u.options.modifiers)));
          return (
            (u.orderedModifiers = g.filter(function (k) {
              return k.enabled;
            })),
            x(),
            m.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var h = u.elements,
              y = h.reference,
              g = h.popper;
            if (e0(y, g)) {
              (u.rects = {
                reference: AM(y, xa(g), u.options.strategy === 'fixed'),
                popper: Ih(g),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (R) {
                  return (u.modifiersData[R.name] = Object.assign({}, R.data));
                });
              for (var k = 0; k < u.orderedModifiers.length; k++) {
                if (u.reset === !0) {
                  (u.reset = !1), (k = -1);
                  continue;
                }
                var $ = u.orderedModifiers[k],
                  f = $.fn,
                  S = $.options,
                  P = S === void 0 ? {} : S,
                  O = $.name;
                typeof f == 'function' &&
                  (u = f({ state: u, options: P, name: O, instance: m }) || u);
              }
            }
          }
        },
        update: jM(function () {
          return new Promise(function (w) {
            m.forceUpdate(), w(u);
          });
        }),
        destroy: function () {
          v(), (p = !0);
        },
      };
    if (!e0(a, l)) return m;
    m.setOptions(c).then(function (w) {
      !p && c.onFirstUpdate && c.onFirstUpdate(w);
    });
    function x() {
      u.orderedModifiers.forEach(function (w) {
        var h = w.name,
          y = w.options,
          g = y === void 0 ? {} : y,
          k = w.effect;
        if (typeof k == 'function') {
          var $ = k({ state: u, name: h, instance: m, options: g }),
            f = function () {};
          d.push($ || f);
        }
      });
    }
    function v() {
      d.forEach(function (w) {
        return w();
      }),
        (d = []);
    }
    return m;
  };
}
var DM = [aM, EM, iM, Y6, wM, yM, TM, tM, bM],
  zM = LM({ defaultModifiers: DM });
function FM(e) {
  return he('MuiPopper', e);
}
ue('MuiPopper', ['root']);
const BM = [
    'anchorEl',
    'children',
    'direction',
    'disablePortal',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'slotProps',
    'slots',
    'TransitionProps',
    'ownerState',
  ],
  WM = [
    'anchorEl',
    'children',
    'container',
    'direction',
    'disablePortal',
    'keepMounted',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'style',
    'transition',
    'slotProps',
    'slots',
  ];
function UM(e, t) {
  if (t === 'ltr') return e;
  switch (e) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return e;
  }
}
function Nf(e) {
  return typeof e == 'function' ? e() : e;
}
function VM(e) {
  return e.nodeType !== void 0;
}
const HM = (e) => {
    const { classes: t } = e;
    return ge({ root: ['root'] }, FM, t);
  },
  GM = {},
  KM = b.forwardRef(function (t, n) {
    var r;
    const {
        anchorEl: o,
        children: i,
        direction: s,
        disablePortal: a,
        modifiers: l,
        open: c,
        placement: u,
        popperOptions: d,
        popperRef: p,
        slotProps: m = {},
        slots: x = {},
        TransitionProps: v,
      } = t,
      w = H(t, BM),
      h = b.useRef(null),
      y = Ve(h, n),
      g = b.useRef(null),
      k = Ve(g, p),
      $ = b.useRef(k);
    un(() => {
      $.current = k;
    }, [k]),
      b.useImperativeHandle(p, () => g.current, []);
    const f = UM(u, s),
      [S, P] = b.useState(f),
      [O, R] = b.useState(Nf(o));
    b.useEffect(() => {
      g.current && g.current.forceUpdate();
    }),
      b.useEffect(() => {
        o && R(Nf(o));
      }, [o]),
      un(() => {
        if (!O || !c) return;
        const _ = (T) => {
          P(T.placement);
        };
        let M = [
          { name: 'preventOverflow', options: { altBoundary: a } },
          { name: 'flip', options: { altBoundary: a } },
          {
            name: 'onUpdate',
            enabled: !0,
            phase: 'afterWrite',
            fn: ({ state: T }) => {
              _(T);
            },
          },
        ];
        l != null && (M = M.concat(l)), d && d.modifiers != null && (M = M.concat(d.modifiers));
        const j = zM(O, h.current, E({ placement: f }, d, { modifiers: M }));
        return (
          $.current(j),
          () => {
            j.destroy(), $.current(null);
          }
        );
      }, [O, a, l, c, d, f]);
    const A = { placement: S };
    v !== null && (A.TransitionProps = v);
    const z = HM(t),
      F = (r = x.root) != null ? r : 'div',
      N = po({
        elementType: F,
        externalSlotProps: m.root,
        externalForwardedProps: w,
        additionalProps: { role: 'tooltip', ref: y },
        ownerState: t,
        className: z.root,
      });
    return C.jsx(F, E({}, N, { children: typeof i == 'function' ? i(A) : i }));
  }),
  YM = b.forwardRef(function (t, n) {
    const {
        anchorEl: r,
        children: o,
        container: i,
        direction: s = 'ltr',
        disablePortal: a = !1,
        keepMounted: l = !1,
        modifiers: c,
        open: u,
        placement: d = 'bottom',
        popperOptions: p = GM,
        popperRef: m,
        style: x,
        transition: v = !1,
        slotProps: w = {},
        slots: h = {},
      } = t,
      y = H(t, WM),
      [g, k] = b.useState(!0),
      $ = () => {
        k(!1);
      },
      f = () => {
        k(!0);
      };
    if (!l && !u && (!v || g)) return null;
    let S;
    if (i) S = i;
    else if (r) {
      const R = Nf(r);
      S = R && VM(R) ? ut(R).body : ut(null).body;
    }
    const P = !u && l && (!v || g) ? 'none' : void 0,
      O = v ? { in: u, onEnter: $, onExited: f } : void 0;
    return C.jsx(ub, {
      disablePortal: a,
      container: S,
      children: C.jsx(
        KM,
        E(
          {
            anchorEl: r,
            direction: s,
            disablePortal: a,
            modifiers: c,
            ref: n,
            open: v ? !g : u,
            placement: d,
            popperOptions: p,
            popperRef: m,
            slotProps: w,
            slots: h,
          },
          y,
          {
            style: E({ position: 'fixed', top: 0, left: 0, display: P }, x),
            TransitionProps: O,
            children: o,
          }
        )
      ),
    });
  }),
  XM = [
    'anchorEl',
    'component',
    'components',
    'componentsProps',
    'container',
    'disablePortal',
    'keepMounted',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'transition',
    'slots',
    'slotProps',
  ],
  qM = q(YM, { name: 'MuiPopper', slot: 'Root', overridesResolver: (e, t) => t.root })({}),
  Kb = b.forwardRef(function (t, n) {
    var r;
    const o = Nb(),
      i = ce({ props: t, name: 'MuiPopper' }),
      {
        anchorEl: s,
        component: a,
        components: l,
        componentsProps: c,
        container: u,
        disablePortal: d,
        keepMounted: p,
        modifiers: m,
        open: x,
        placement: v,
        popperOptions: w,
        popperRef: h,
        transition: y,
        slots: g,
        slotProps: k,
      } = i,
      $ = H(i, XM),
      f = (r = g == null ? void 0 : g.root) != null ? r : l == null ? void 0 : l.Root,
      S = E(
        {
          anchorEl: s,
          container: u,
          disablePortal: d,
          keepMounted: p,
          modifiers: m,
          open: x,
          placement: v,
          popperOptions: w,
          popperRef: h,
          transition: y,
        },
        $
      );
    return C.jsx(
      qM,
      E(
        {
          as: a,
          direction: o == null ? void 0 : o.direction,
          slots: { root: f },
          slotProps: k ?? c,
        },
        S,
        { ref: n }
      )
    );
  });
function QM(e) {
  return he('MuiTooltip', e);
}
const Cr = ue('MuiTooltip', [
    'popper',
    'popperInteractive',
    'popperArrow',
    'popperClose',
    'tooltip',
    'tooltipArrow',
    'touch',
    'tooltipPlacementLeft',
    'tooltipPlacementRight',
    'tooltipPlacementTop',
    'tooltipPlacementBottom',
    'arrow',
  ]),
  ZM = [
    'arrow',
    'children',
    'classes',
    'components',
    'componentsProps',
    'describeChild',
    'disableFocusListener',
    'disableHoverListener',
    'disableInteractive',
    'disableTouchListener',
    'enterDelay',
    'enterNextDelay',
    'enterTouchDelay',
    'followCursor',
    'id',
    'leaveDelay',
    'leaveTouchDelay',
    'onClose',
    'onOpen',
    'open',
    'placement',
    'PopperComponent',
    'PopperProps',
    'slotProps',
    'slots',
    'title',
    'TransitionComponent',
    'TransitionProps',
  ];
function JM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const eA = (e) => {
    const { classes: t, disableInteractive: n, arrow: r, touch: o, placement: i } = e,
      s = {
        popper: ['popper', !n && 'popperInteractive', r && 'popperArrow'],
        tooltip: [
          'tooltip',
          r && 'tooltipArrow',
          o && 'touch',
          `tooltipPlacement${U(i.split('-')[0])}`,
        ],
        arrow: ['arrow'],
      };
    return ge(s, QM, t);
  },
  tA = q(Kb, {
    name: 'MuiTooltip',
    slot: 'Popper',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.popper,
        !n.disableInteractive && t.popperInteractive,
        n.arrow && t.popperArrow,
        !n.open && t.popperClose,
      ];
    },
  })(({ theme: e, ownerState: t, open: n }) =>
    E(
      { zIndex: (e.vars || e).zIndex.tooltip, pointerEvents: 'none' },
      !t.disableInteractive && { pointerEvents: 'auto' },
      !n && { pointerEvents: 'none' },
      t.arrow && {
        [`&[data-popper-placement*="bottom"] .${Cr.arrow}`]: {
          top: 0,
          marginTop: '-0.71em',
          '&::before': { transformOrigin: '0 100%' },
        },
        [`&[data-popper-placement*="top"] .${Cr.arrow}`]: {
          bottom: 0,
          marginBottom: '-0.71em',
          '&::before': { transformOrigin: '100% 0' },
        },
        [`&[data-popper-placement*="right"] .${Cr.arrow}`]: E(
          {},
          t.isRtl ? { right: 0, marginRight: '-0.71em' } : { left: 0, marginLeft: '-0.71em' },
          { height: '1em', width: '0.71em', '&::before': { transformOrigin: '100% 100%' } }
        ),
        [`&[data-popper-placement*="left"] .${Cr.arrow}`]: E(
          {},
          t.isRtl ? { left: 0, marginLeft: '-0.71em' } : { right: 0, marginRight: '-0.71em' },
          { height: '1em', width: '0.71em', '&::before': { transformOrigin: '0 0' } }
        ),
      }
    )
  ),
  nA = q('div', {
    name: 'MuiTooltip',
    slot: 'Tooltip',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${U(n.placement.split('-')[0])}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      {
        backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Le(e.palette.grey[700], 0.92),
        borderRadius: (e.vars || e).shape.borderRadius,
        color: (e.vars || e).palette.common.white,
        fontFamily: e.typography.fontFamily,
        padding: '4px 8px',
        fontSize: e.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: 'break-word',
        fontWeight: e.typography.fontWeightMedium,
      },
      t.arrow && { position: 'relative', margin: 0 },
      t.touch && {
        padding: '8px 16px',
        fontSize: e.typography.pxToRem(14),
        lineHeight: `${JM(16 / 14)}em`,
        fontWeight: e.typography.fontWeightRegular,
      },
      {
        [`.${Cr.popper}[data-popper-placement*="left"] &`]: E(
          { transformOrigin: 'right center' },
          t.isRtl
            ? E({ marginLeft: '14px' }, t.touch && { marginLeft: '24px' })
            : E({ marginRight: '14px' }, t.touch && { marginRight: '24px' })
        ),
        [`.${Cr.popper}[data-popper-placement*="right"] &`]: E(
          { transformOrigin: 'left center' },
          t.isRtl
            ? E({ marginRight: '14px' }, t.touch && { marginRight: '24px' })
            : E({ marginLeft: '14px' }, t.touch && { marginLeft: '24px' })
        ),
        [`.${Cr.popper}[data-popper-placement*="top"] &`]: E(
          { transformOrigin: 'center bottom', marginBottom: '14px' },
          t.touch && { marginBottom: '24px' }
        ),
        [`.${Cr.popper}[data-popper-placement*="bottom"] &`]: E(
          { transformOrigin: 'center top', marginTop: '14px' },
          t.touch && { marginTop: '24px' }
        ),
      }
    )
  ),
  rA = q('span', { name: 'MuiTooltip', slot: 'Arrow', overridesResolver: (e, t) => t.arrow })(
    ({ theme: e }) => ({
      overflow: 'hidden',
      position: 'absolute',
      width: '1em',
      height: '0.71em',
      boxSizing: 'border-box',
      color: e.vars ? e.vars.palette.Tooltip.bg : Le(e.palette.grey[700], 0.9),
      '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: '100%',
        height: '100%',
        backgroundColor: 'currentColor',
        transform: 'rotate(45deg)',
      },
    })
  );
let Qa = !1;
const t0 = new va();
let is = { x: 0, y: 0 };
function Za(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const oA = b.forwardRef(function (t, n) {
  var r, o, i, s, a, l, c, u, d, p, m, x, v, w, h, y, g, k, $;
  const f = ce({ props: t, name: 'MuiTooltip' }),
    {
      arrow: S = !1,
      children: P,
      components: O = {},
      componentsProps: R = {},
      describeChild: A = !1,
      disableFocusListener: z = !1,
      disableHoverListener: F = !1,
      disableInteractive: N = !1,
      disableTouchListener: _ = !1,
      enterDelay: M = 100,
      enterNextDelay: j = 0,
      enterTouchDelay: T = 700,
      followCursor: I = !1,
      id: D,
      leaveDelay: W = 0,
      leaveTouchDelay: V = 1500,
      onClose: te,
      onOpen: K,
      open: Q,
      placement: J = 'bottom',
      PopperComponent: re,
      PopperProps: ie = {},
      slotProps: ne = {},
      slots: se = {},
      title: Z,
      TransitionComponent: ve = lc,
      TransitionProps: ee,
    } = f,
    de = H(f, ZM),
    fe = b.isValidElement(P) ? P : C.jsx('span', { children: P }),
    yt = Nt(),
    He = dh(),
    [Ee, Lt] = b.useState(),
    [Ie, Oe] = b.useState(null),
    ot = b.useRef(!1),
    $e = N || I,
    Ce = Zo(),
    Je = Zo(),
    xt = Zo(),
    $t = Zo(),
    [ye, Y] = $$({ controlled: Q, default: !1, name: 'Tooltip', state: 'open' });
  let Me = ye;
  const Pn = E$(D),
    Tn = b.useRef(),
    Ur = Qn(() => {
      Tn.current !== void 0 &&
        ((document.body.style.WebkitUserSelect = Tn.current), (Tn.current = void 0)),
        $t.clear();
    });
  b.useEffect(() => Ur, [Ur]);
  const Dt = (ae) => {
      t0.clear(), (Qa = !0), Y(!0), K && !Me && K(ae);
    },
    cr = Qn((ae) => {
      t0.start(800 + W, () => {
        Qa = !1;
      }),
        Y(!1),
        te && Me && te(ae),
        Ce.start(yt.transitions.duration.shortest, () => {
          ot.current = !1;
        });
    }),
    ba = (ae) => {
      (ot.current && ae.type !== 'touchstart') ||
        (Ee && Ee.removeAttribute('title'),
        Je.clear(),
        xt.clear(),
        M || (Qa && j)
          ? Je.start(Qa ? j : M, () => {
              Dt(ae);
            })
          : Dt(ae));
    },
    uu = (ae) => {
      Je.clear(),
        xt.start(W, () => {
          cr(ae);
        });
    },
    { isFocusVisibleRef: zh, onBlur: s2, onFocus: a2, ref: l2 } = sh(),
    [, Fh] = b.useState(!1),
    Bh = (ae) => {
      s2(ae), zh.current === !1 && (Fh(!1), uu(ae));
    },
    Wh = (ae) => {
      Ee || Lt(ae.currentTarget), a2(ae), zh.current === !0 && (Fh(!0), ba(ae));
    },
    Uh = (ae) => {
      ot.current = !0;
      const zt = fe.props;
      zt.onTouchStart && zt.onTouchStart(ae);
    },
    c2 = (ae) => {
      Uh(ae),
        xt.clear(),
        Ce.clear(),
        Ur(),
        (Tn.current = document.body.style.WebkitUserSelect),
        (document.body.style.WebkitUserSelect = 'none'),
        $t.start(T, () => {
          (document.body.style.WebkitUserSelect = Tn.current), ba(ae);
        });
    },
    u2 = (ae) => {
      fe.props.onTouchEnd && fe.props.onTouchEnd(ae),
        Ur(),
        xt.start(V, () => {
          cr(ae);
        });
    };
  b.useEffect(() => {
    if (!Me) return;
    function ae(zt) {
      (zt.key === 'Escape' || zt.key === 'Esc') && cr(zt);
    }
    return (
      document.addEventListener('keydown', ae),
      () => {
        document.removeEventListener('keydown', ae);
      }
    );
  }, [cr, Me]);
  const d2 = Ve(fe.ref, l2, Lt, n);
  !Z && Z !== 0 && (Me = !1);
  const du = b.useRef(),
    f2 = (ae) => {
      const zt = fe.props;
      zt.onMouseMove && zt.onMouseMove(ae),
        (is = { x: ae.clientX, y: ae.clientY }),
        du.current && du.current.update();
    },
    Li = {},
    fu = typeof Z == 'string';
  A
    ? ((Li.title = !Me && fu && !F ? Z : null), (Li['aria-describedby'] = Me ? Pn : null))
    : ((Li['aria-label'] = fu ? Z : null), (Li['aria-labelledby'] = Me && !fu ? Pn : null));
  const mn = E(
      {},
      Li,
      de,
      fe.props,
      { className: X(de.className, fe.props.className), onTouchStart: Uh, ref: d2 },
      I ? { onMouseMove: f2 } : {}
    ),
    Di = {};
  _ || ((mn.onTouchStart = c2), (mn.onTouchEnd = u2)),
    F ||
      ((mn.onMouseOver = Za(ba, mn.onMouseOver)),
      (mn.onMouseLeave = Za(uu, mn.onMouseLeave)),
      $e || ((Di.onMouseOver = ba), (Di.onMouseLeave = uu))),
    z ||
      ((mn.onFocus = Za(Wh, mn.onFocus)),
      (mn.onBlur = Za(Bh, mn.onBlur)),
      $e || ((Di.onFocus = Wh), (Di.onBlur = Bh)));
  const p2 = b.useMemo(() => {
      var ae;
      let zt = [{ name: 'arrow', enabled: !!Ie, options: { element: Ie, padding: 4 } }];
      return (
        (ae = ie.popperOptions) != null &&
          ae.modifiers &&
          (zt = zt.concat(ie.popperOptions.modifiers)),
        E({}, ie.popperOptions, { modifiers: zt })
      );
    }, [Ie, ie]),
    zi = E({}, f, {
      isRtl: He,
      arrow: S,
      disableInteractive: $e,
      placement: J,
      PopperComponentProp: re,
      touch: ot.current,
    }),
    pu = eA(zi),
    Vh = (r = (o = se.popper) != null ? o : O.Popper) != null ? r : tA,
    Hh =
      (i = (s = (a = se.transition) != null ? a : O.Transition) != null ? s : ve) != null ? i : lc,
    Gh = (l = (c = se.tooltip) != null ? c : O.Tooltip) != null ? l : nA,
    Kh = (u = (d = se.arrow) != null ? d : O.Arrow) != null ? u : rA,
    h2 = Jo(
      Vh,
      E({}, ie, (p = ne.popper) != null ? p : R.popper, {
        className: X(
          pu.popper,
          ie == null ? void 0 : ie.className,
          (m = (x = ne.popper) != null ? x : R.popper) == null ? void 0 : m.className
        ),
      }),
      zi
    ),
    m2 = Jo(Hh, E({}, ee, (v = ne.transition) != null ? v : R.transition), zi),
    g2 = Jo(
      Gh,
      E({}, (w = ne.tooltip) != null ? w : R.tooltip, {
        className: X(
          pu.tooltip,
          (h = (y = ne.tooltip) != null ? y : R.tooltip) == null ? void 0 : h.className
        ),
      }),
      zi
    ),
    v2 = Jo(
      Kh,
      E({}, (g = ne.arrow) != null ? g : R.arrow, {
        className: X(
          pu.arrow,
          (k = ($ = ne.arrow) != null ? $ : R.arrow) == null ? void 0 : k.className
        ),
      }),
      zi
    );
  return C.jsxs(b.Fragment, {
    children: [
      b.cloneElement(fe, mn),
      C.jsx(
        Vh,
        E(
          {
            as: re ?? Kb,
            placement: J,
            anchorEl: I
              ? {
                  getBoundingClientRect: () => ({
                    top: is.y,
                    left: is.x,
                    right: is.x,
                    bottom: is.y,
                    width: 0,
                    height: 0,
                  }),
                }
              : Ee,
            popperRef: du,
            open: Ee ? Me : !1,
            id: Pn,
            transition: !0,
          },
          Di,
          h2,
          {
            popperOptions: p2,
            children: ({ TransitionProps: ae }) =>
              C.jsx(
                Hh,
                E({ timeout: yt.transitions.duration.shorter }, ae, m2, {
                  children: C.jsxs(
                    Gh,
                    E({}, g2, { children: [Z, S ? C.jsx(Kh, E({}, v2, { ref: Oe })) : null] })
                  ),
                })
              ),
          }
        )
      ),
    ],
  });
});
function iA(e) {
  return he('MuiListSubheader', e);
}
ue('MuiListSubheader', ['root', 'colorPrimary', 'colorInherit', 'gutters', 'inset', 'sticky']);
const sA = ['className', 'color', 'component', 'disableGutters', 'disableSticky', 'inset'],
  aA = (e) => {
    const { classes: t, color: n, disableGutters: r, inset: o, disableSticky: i } = e,
      s = {
        root: [
          'root',
          n !== 'default' && `color${U(n)}`,
          !r && 'gutters',
          o && 'inset',
          !i && 'sticky',
        ],
      };
    return ge(s, iA, t);
  },
  lA = q('li', {
    name: 'MuiListSubheader',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== 'default' && t[`color${U(n.color)}`],
        !n.disableGutters && t.gutters,
        n.inset && t.inset,
        !n.disableSticky && t.sticky,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      {
        boxSizing: 'border-box',
        lineHeight: '48px',
        listStyle: 'none',
        color: (e.vars || e).palette.text.secondary,
        fontFamily: e.typography.fontFamily,
        fontWeight: e.typography.fontWeightMedium,
        fontSize: e.typography.pxToRem(14),
      },
      t.color === 'primary' && { color: (e.vars || e).palette.primary.main },
      t.color === 'inherit' && { color: 'inherit' },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.inset && { paddingLeft: 72 },
      !t.disableSticky && {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: (e.vars || e).palette.background.paper,
      }
    )
  ),
  Lf = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiListSubheader' }),
      {
        className: o,
        color: i = 'default',
        component: s = 'li',
        disableGutters: a = !1,
        disableSticky: l = !1,
        inset: c = !1,
      } = r,
      u = H(r, sA),
      d = E({}, r, { color: i, component: s, disableGutters: a, disableSticky: l, inset: c }),
      p = aA(d);
    return C.jsx(lA, E({ as: s, className: X(p.root, o), ref: n, ownerState: d }, u));
  });
Lf.muiSkipListHighlight = !0;
function cA(e) {
  return he('MuiListItemAvatar', e);
}
ue('MuiListItemAvatar', ['root', 'alignItemsFlexStart']);
const uA = ['className'],
  dA = (e) => {
    const { alignItems: t, classes: n } = e;
    return ge({ root: ['root', t === 'flex-start' && 'alignItemsFlexStart'] }, cA, n);
  },
  fA = q('div', {
    name: 'MuiListItemAvatar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.alignItems === 'flex-start' && t.alignItemsFlexStart];
    },
  })(({ ownerState: e }) =>
    E({ minWidth: 56, flexShrink: 0 }, e.alignItems === 'flex-start' && { marginTop: 8 })
  ),
  pA = b.forwardRef(function (t, n) {
    const r = ce({ props: t, name: 'MuiListItemAvatar' }),
      { className: o } = r,
      i = H(r, uA),
      s = b.useContext(kn),
      a = E({}, r, { alignItems: s.alignItems }),
      l = dA(a);
    return C.jsx(fA, E({ className: X(l.root, o), ownerState: a, ref: n }, i));
  });
var Yb = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Df, function () {
    var n = 1e3,
      r = 6e4,
      o = 36e5,
      i = 'millisecond',
      s = 'second',
      a = 'minute',
      l = 'hour',
      c = 'day',
      u = 'week',
      d = 'month',
      p = 'quarter',
      m = 'year',
      x = 'date',
      v = 'Invalid Date',
      w =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      y = {
        name: 'en',
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
        ordinal: function (N) {
          var _ = ['th', 'st', 'nd', 'rd'],
            M = N % 100;
          return '[' + N + (_[(M - 20) % 10] || _[M] || _[0]) + ']';
        },
      },
      g = function (N, _, M) {
        var j = String(N);
        return !j || j.length >= _ ? N : '' + Array(_ + 1 - j.length).join(M) + N;
      },
      k = {
        s: g,
        z: function (N) {
          var _ = -N.utcOffset(),
            M = Math.abs(_),
            j = Math.floor(M / 60),
            T = M % 60;
          return (_ <= 0 ? '+' : '-') + g(j, 2, '0') + ':' + g(T, 2, '0');
        },
        m: function N(_, M) {
          if (_.date() < M.date()) return -N(M, _);
          var j = 12 * (M.year() - _.year()) + (M.month() - _.month()),
            T = _.clone().add(j, d),
            I = M - T < 0,
            D = _.clone().add(j + (I ? -1 : 1), d);
          return +(-(j + (M - T) / (I ? T - D : D - T)) || 0);
        },
        a: function (N) {
          return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
        },
        p: function (N) {
          return (
            { M: d, y: m, w: u, d: c, D: x, h: l, m: a, s, ms: i, Q: p }[N] ||
            String(N || '')
              .toLowerCase()
              .replace(/s$/, '')
          );
        },
        u: function (N) {
          return N === void 0;
        },
      },
      $ = 'en',
      f = {};
    f[$] = y;
    var S = '$isDayjsObject',
      P = function (N) {
        return N instanceof z || !(!N || !N[S]);
      },
      O = function N(_, M, j) {
        var T;
        if (!_) return $;
        if (typeof _ == 'string') {
          var I = _.toLowerCase();
          f[I] && (T = I), M && ((f[I] = M), (T = I));
          var D = _.split('-');
          if (!T && D.length > 1) return N(D[0]);
        } else {
          var W = _.name;
          (f[W] = _), (T = W);
        }
        return !j && T && ($ = T), T || (!j && $);
      },
      R = function (N, _) {
        if (P(N)) return N.clone();
        var M = typeof _ == 'object' ? _ : {};
        return (M.date = N), (M.args = arguments), new z(M);
      },
      A = k;
    (A.l = O),
      (A.i = P),
      (A.w = function (N, _) {
        return R(N, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
      });
    var z = (function () {
        function N(M) {
          (this.$L = O(M.locale, null, !0)),
            this.parse(M),
            (this.$x = this.$x || M.x || {}),
            (this[S] = !0);
        }
        var _ = N.prototype;
        return (
          (_.parse = function (M) {
            (this.$d = (function (j) {
              var T = j.date,
                I = j.utc;
              if (T === null) return new Date(NaN);
              if (A.u(T)) return new Date();
              if (T instanceof Date) return new Date(T);
              if (typeof T == 'string' && !/Z$/i.test(T)) {
                var D = T.match(w);
                if (D) {
                  var W = D[2] - 1 || 0,
                    V = (D[7] || '0').substring(0, 3);
                  return I
                    ? new Date(Date.UTC(D[1], W, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, V))
                    : new Date(D[1], W, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, V);
                }
              }
              return new Date(T);
            })(M)),
              this.init();
          }),
          (_.init = function () {
            var M = this.$d;
            (this.$y = M.getFullYear()),
              (this.$M = M.getMonth()),
              (this.$D = M.getDate()),
              (this.$W = M.getDay()),
              (this.$H = M.getHours()),
              (this.$m = M.getMinutes()),
              (this.$s = M.getSeconds()),
              (this.$ms = M.getMilliseconds());
          }),
          (_.$utils = function () {
            return A;
          }),
          (_.isValid = function () {
            return this.$d.toString() !== v;
          }),
          (_.isSame = function (M, j) {
            var T = R(M);
            return this.startOf(j) <= T && T <= this.endOf(j);
          }),
          (_.isAfter = function (M, j) {
            return R(M) < this.startOf(j);
          }),
          (_.isBefore = function (M, j) {
            return this.endOf(j) < R(M);
          }),
          (_.$g = function (M, j, T) {
            return A.u(M) ? this[j] : this.set(T, M);
          }),
          (_.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (_.valueOf = function () {
            return this.$d.getTime();
          }),
          (_.startOf = function (M, j) {
            var T = this,
              I = !!A.u(j) || j,
              D = A.p(M),
              W = function (ne, se) {
                var Z = A.w(T.$u ? Date.UTC(T.$y, se, ne) : new Date(T.$y, se, ne), T);
                return I ? Z : Z.endOf(c);
              },
              V = function (ne, se) {
                return A.w(
                  T.toDate()[ne].apply(
                    T.toDate('s'),
                    (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(se)
                  ),
                  T
                );
              },
              te = this.$W,
              K = this.$M,
              Q = this.$D,
              J = 'set' + (this.$u ? 'UTC' : '');
            switch (D) {
              case m:
                return I ? W(1, 0) : W(31, 11);
              case d:
                return I ? W(1, K) : W(0, K + 1);
              case u:
                var re = this.$locale().weekStart || 0,
                  ie = (te < re ? te + 7 : te) - re;
                return W(I ? Q - ie : Q + (6 - ie), K);
              case c:
              case x:
                return V(J + 'Hours', 0);
              case l:
                return V(J + 'Minutes', 1);
              case a:
                return V(J + 'Seconds', 2);
              case s:
                return V(J + 'Milliseconds', 3);
              default:
                return this.clone();
            }
          }),
          (_.endOf = function (M) {
            return this.startOf(M, !1);
          }),
          (_.$set = function (M, j) {
            var T,
              I = A.p(M),
              D = 'set' + (this.$u ? 'UTC' : ''),
              W = ((T = {}),
              (T[c] = D + 'Date'),
              (T[x] = D + 'Date'),
              (T[d] = D + 'Month'),
              (T[m] = D + 'FullYear'),
              (T[l] = D + 'Hours'),
              (T[a] = D + 'Minutes'),
              (T[s] = D + 'Seconds'),
              (T[i] = D + 'Milliseconds'),
              T)[I],
              V = I === c ? this.$D + (j - this.$W) : j;
            if (I === d || I === m) {
              var te = this.clone().set(x, 1);
              te.$d[W](V), te.init(), (this.$d = te.set(x, Math.min(this.$D, te.daysInMonth())).$d);
            } else W && this.$d[W](V);
            return this.init(), this;
          }),
          (_.set = function (M, j) {
            return this.clone().$set(M, j);
          }),
          (_.get = function (M) {
            return this[A.p(M)]();
          }),
          (_.add = function (M, j) {
            var T,
              I = this;
            M = Number(M);
            var D = A.p(j),
              W = function (K) {
                var Q = R(I);
                return A.w(Q.date(Q.date() + Math.round(K * M)), I);
              };
            if (D === d) return this.set(d, this.$M + M);
            if (D === m) return this.set(m, this.$y + M);
            if (D === c) return W(1);
            if (D === u) return W(7);
            var V = ((T = {}), (T[a] = r), (T[l] = o), (T[s] = n), T)[D] || 1,
              te = this.$d.getTime() + M * V;
            return A.w(te, this);
          }),
          (_.subtract = function (M, j) {
            return this.add(-1 * M, j);
          }),
          (_.format = function (M) {
            var j = this,
              T = this.$locale();
            if (!this.isValid()) return T.invalidDate || v;
            var I = M || 'YYYY-MM-DDTHH:mm:ssZ',
              D = A.z(this),
              W = this.$H,
              V = this.$m,
              te = this.$M,
              K = T.weekdays,
              Q = T.months,
              J = T.meridiem,
              re = function (se, Z, ve, ee) {
                return (se && (se[Z] || se(j, I))) || ve[Z].slice(0, ee);
              },
              ie = function (se) {
                return A.s(W % 12 || 12, se, '0');
              },
              ne =
                J ||
                function (se, Z, ve) {
                  var ee = se < 12 ? 'AM' : 'PM';
                  return ve ? ee.toLowerCase() : ee;
                };
            return I.replace(h, function (se, Z) {
              return (
                Z ||
                (function (ve) {
                  switch (ve) {
                    case 'YY':
                      return String(j.$y).slice(-2);
                    case 'YYYY':
                      return A.s(j.$y, 4, '0');
                    case 'M':
                      return te + 1;
                    case 'MM':
                      return A.s(te + 1, 2, '0');
                    case 'MMM':
                      return re(T.monthsShort, te, Q, 3);
                    case 'MMMM':
                      return re(Q, te);
                    case 'D':
                      return j.$D;
                    case 'DD':
                      return A.s(j.$D, 2, '0');
                    case 'd':
                      return String(j.$W);
                    case 'dd':
                      return re(T.weekdaysMin, j.$W, K, 2);
                    case 'ddd':
                      return re(T.weekdaysShort, j.$W, K, 3);
                    case 'dddd':
                      return K[j.$W];
                    case 'H':
                      return String(W);
                    case 'HH':
                      return A.s(W, 2, '0');
                    case 'h':
                      return ie(1);
                    case 'hh':
                      return ie(2);
                    case 'a':
                      return ne(W, V, !0);
                    case 'A':
                      return ne(W, V, !1);
                    case 'm':
                      return String(V);
                    case 'mm':
                      return A.s(V, 2, '0');
                    case 's':
                      return String(j.$s);
                    case 'ss':
                      return A.s(j.$s, 2, '0');
                    case 'SSS':
                      return A.s(j.$ms, 3, '0');
                    case 'Z':
                      return D;
                  }
                  return null;
                })(se) ||
                D.replace(':', '')
              );
            });
          }),
          (_.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (_.diff = function (M, j, T) {
            var I,
              D = this,
              W = A.p(j),
              V = R(M),
              te = (V.utcOffset() - this.utcOffset()) * r,
              K = this - V,
              Q = function () {
                return A.m(D, V);
              };
            switch (W) {
              case m:
                I = Q() / 12;
                break;
              case d:
                I = Q();
                break;
              case p:
                I = Q() / 3;
                break;
              case u:
                I = (K - te) / 6048e5;
                break;
              case c:
                I = (K - te) / 864e5;
                break;
              case l:
                I = K / o;
                break;
              case a:
                I = K / r;
                break;
              case s:
                I = K / n;
                break;
              default:
                I = K;
            }
            return T ? I : A.a(I);
          }),
          (_.daysInMonth = function () {
            return this.endOf(d).$D;
          }),
          (_.$locale = function () {
            return f[this.$L];
          }),
          (_.locale = function (M, j) {
            if (!M) return this.$L;
            var T = this.clone(),
              I = O(M, j, !0);
            return I && (T.$L = I), T;
          }),
          (_.clone = function () {
            return A.w(this.$d, this);
          }),
          (_.toDate = function () {
            return new Date(this.valueOf());
          }),
          (_.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (_.toISOString = function () {
            return this.$d.toISOString();
          }),
          (_.toString = function () {
            return this.$d.toUTCString();
          }),
          N
        );
      })(),
      F = z.prototype;
    return (
      (R.prototype = F),
      [
        ['$ms', i],
        ['$s', s],
        ['$m', a],
        ['$H', l],
        ['$W', c],
        ['$M', d],
        ['$y', m],
        ['$D', x],
      ].forEach(function (N) {
        F[N[1]] = function (_) {
          return this.$g(_, N[0], N[1]);
        };
      }),
      (R.extend = function (N, _) {
        return N.$i || (N(_, z, R), (N.$i = !0)), R;
      }),
      (R.locale = O),
      (R.isDayjs = P),
      (R.unix = function (N) {
        return R(1e3 * N);
      }),
      (R.en = f[$]),
      (R.Ls = f),
      (R.p = {}),
      R
    );
  });
})(Yb);
var hA = Yb.exports;
const _r = Ir(hA);
var Xb = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Df, function () {
    var n,
      r,
      o = 1e3,
      i = 6e4,
      s = 36e5,
      a = 864e5,
      l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      c = 31536e6,
      u = 2628e6,
      d =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
      p = {
        years: c,
        months: u,
        days: a,
        hours: s,
        minutes: i,
        seconds: o,
        milliseconds: 1,
        weeks: 6048e5,
      },
      m = function (f) {
        return f instanceof k;
      },
      x = function (f, S, P) {
        return new k(f, P, S.$l);
      },
      v = function (f) {
        return r.p(f) + 's';
      },
      w = function (f) {
        return f < 0;
      },
      h = function (f) {
        return w(f) ? Math.ceil(f) : Math.floor(f);
      },
      y = function (f) {
        return Math.abs(f);
      },
      g = function (f, S) {
        return f
          ? w(f)
            ? { negative: !0, format: '' + y(f) + S }
            : { negative: !1, format: '' + f + S }
          : { negative: !1, format: '' };
      },
      k = (function () {
        function f(P, O, R) {
          var A = this;
          if (
            ((this.$d = {}),
            (this.$l = R),
            P === void 0 && ((this.$ms = 0), this.parseFromMilliseconds()),
            O)
          )
            return x(P * p[v(O)], this);
          if (typeof P == 'number') return (this.$ms = P), this.parseFromMilliseconds(), this;
          if (typeof P == 'object')
            return (
              Object.keys(P).forEach(function (N) {
                A.$d[v(N)] = P[N];
              }),
              this.calMilliseconds(),
              this
            );
          if (typeof P == 'string') {
            var z = P.match(d);
            if (z) {
              var F = z.slice(2).map(function (N) {
                return N != null ? Number(N) : 0;
              });
              return (
                (this.$d.years = F[0]),
                (this.$d.months = F[1]),
                (this.$d.weeks = F[2]),
                (this.$d.days = F[3]),
                (this.$d.hours = F[4]),
                (this.$d.minutes = F[5]),
                (this.$d.seconds = F[6]),
                this.calMilliseconds(),
                this
              );
            }
          }
          return this;
        }
        var S = f.prototype;
        return (
          (S.calMilliseconds = function () {
            var P = this;
            this.$ms = Object.keys(this.$d).reduce(function (O, R) {
              return O + (P.$d[R] || 0) * p[R];
            }, 0);
          }),
          (S.parseFromMilliseconds = function () {
            var P = this.$ms;
            (this.$d.years = h(P / c)),
              (P %= c),
              (this.$d.months = h(P / u)),
              (P %= u),
              (this.$d.days = h(P / a)),
              (P %= a),
              (this.$d.hours = h(P / s)),
              (P %= s),
              (this.$d.minutes = h(P / i)),
              (P %= i),
              (this.$d.seconds = h(P / o)),
              (P %= o),
              (this.$d.milliseconds = P);
          }),
          (S.toISOString = function () {
            var P = g(this.$d.years, 'Y'),
              O = g(this.$d.months, 'M'),
              R = +this.$d.days || 0;
            this.$d.weeks && (R += 7 * this.$d.weeks);
            var A = g(R, 'D'),
              z = g(this.$d.hours, 'H'),
              F = g(this.$d.minutes, 'M'),
              N = this.$d.seconds || 0;
            this.$d.milliseconds &&
              ((N += this.$d.milliseconds / 1e3), (N = Math.round(1e3 * N) / 1e3));
            var _ = g(N, 'S'),
              M = P.negative || O.negative || A.negative || z.negative || F.negative || _.negative,
              j = z.format || F.format || _.format ? 'T' : '',
              T =
                (M ? '-' : '') +
                'P' +
                P.format +
                O.format +
                A.format +
                j +
                z.format +
                F.format +
                _.format;
            return T === 'P' || T === '-P' ? 'P0D' : T;
          }),
          (S.toJSON = function () {
            return this.toISOString();
          }),
          (S.format = function (P) {
            var O = P || 'YYYY-MM-DDTHH:mm:ss',
              R = {
                Y: this.$d.years,
                YY: r.s(this.$d.years, 2, '0'),
                YYYY: r.s(this.$d.years, 4, '0'),
                M: this.$d.months,
                MM: r.s(this.$d.months, 2, '0'),
                D: this.$d.days,
                DD: r.s(this.$d.days, 2, '0'),
                H: this.$d.hours,
                HH: r.s(this.$d.hours, 2, '0'),
                m: this.$d.minutes,
                mm: r.s(this.$d.minutes, 2, '0'),
                s: this.$d.seconds,
                ss: r.s(this.$d.seconds, 2, '0'),
                SSS: r.s(this.$d.milliseconds, 3, '0'),
              };
            return O.replace(l, function (A, z) {
              return z || String(R[A]);
            });
          }),
          (S.as = function (P) {
            return this.$ms / p[v(P)];
          }),
          (S.get = function (P) {
            var O = this.$ms,
              R = v(P);
            return (
              R === 'milliseconds' ? (O %= 1e3) : (O = R === 'weeks' ? h(O / p[R]) : this.$d[R]),
              O || 0
            );
          }),
          (S.add = function (P, O, R) {
            var A;
            return (
              (A = O ? P * p[v(O)] : m(P) ? P.$ms : x(P, this).$ms),
              x(this.$ms + A * (R ? -1 : 1), this)
            );
          }),
          (S.subtract = function (P, O) {
            return this.add(P, O, !0);
          }),
          (S.locale = function (P) {
            var O = this.clone();
            return (O.$l = P), O;
          }),
          (S.clone = function () {
            return x(this.$ms, this);
          }),
          (S.humanize = function (P) {
            return n().add(this.$ms, 'ms').locale(this.$l).fromNow(!P);
          }),
          (S.valueOf = function () {
            return this.asMilliseconds();
          }),
          (S.milliseconds = function () {
            return this.get('milliseconds');
          }),
          (S.asMilliseconds = function () {
            return this.as('milliseconds');
          }),
          (S.seconds = function () {
            return this.get('seconds');
          }),
          (S.asSeconds = function () {
            return this.as('seconds');
          }),
          (S.minutes = function () {
            return this.get('minutes');
          }),
          (S.asMinutes = function () {
            return this.as('minutes');
          }),
          (S.hours = function () {
            return this.get('hours');
          }),
          (S.asHours = function () {
            return this.as('hours');
          }),
          (S.days = function () {
            return this.get('days');
          }),
          (S.asDays = function () {
            return this.as('days');
          }),
          (S.weeks = function () {
            return this.get('weeks');
          }),
          (S.asWeeks = function () {
            return this.as('weeks');
          }),
          (S.months = function () {
            return this.get('months');
          }),
          (S.asMonths = function () {
            return this.as('months');
          }),
          (S.years = function () {
            return this.get('years');
          }),
          (S.asYears = function () {
            return this.as('years');
          }),
          f
        );
      })(),
      $ = function (f, S, P) {
        return f
          .add(S.years() * P, 'y')
          .add(S.months() * P, 'M')
          .add(S.days() * P, 'd')
          .add(S.hours() * P, 'h')
          .add(S.minutes() * P, 'm')
          .add(S.seconds() * P, 's')
          .add(S.milliseconds() * P, 'ms');
      };
    return function (f, S, P) {
      (n = P),
        (r = P().$utils()),
        (P.duration = function (A, z) {
          var F = P.locale();
          return x(A, { $l: F }, z);
        }),
        (P.isDuration = m);
      var O = S.prototype.add,
        R = S.prototype.subtract;
      (S.prototype.add = function (A, z) {
        return m(A) ? $(this, A, 1) : O.bind(this)(A, z);
      }),
        (S.prototype.subtract = function (A, z) {
          return m(A) ? $(this, A, -1) : R.bind(this)(A, z);
        });
    };
  });
})(Xb);
var mA = Xb.exports;
const gA = Ir(mA);
var qb = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Df, function () {
    return function (n, r, o) {
      n = n || {};
      var i = r.prototype,
        s = {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        };
      function a(c, u, d, p) {
        return i.fromToBase(c, u, d, p);
      }
      (o.en.relativeTime = s),
        (i.fromToBase = function (c, u, d, p, m) {
          for (
            var x,
              v,
              w,
              h = d.$locale().relativeTime || s,
              y = n.thresholds || [
                { l: 's', r: 44, d: 'second' },
                { l: 'm', r: 89 },
                { l: 'mm', r: 44, d: 'minute' },
                { l: 'h', r: 89 },
                { l: 'hh', r: 21, d: 'hour' },
                { l: 'd', r: 35 },
                { l: 'dd', r: 25, d: 'day' },
                { l: 'M', r: 45 },
                { l: 'MM', r: 10, d: 'month' },
                { l: 'y', r: 17 },
                { l: 'yy', d: 'year' },
              ],
              g = y.length,
              k = 0;
            k < g;
            k += 1
          ) {
            var $ = y[k];
            $.d && (x = p ? o(c).diff(d, $.d, !0) : d.diff(c, $.d, !0));
            var f = (n.rounding || Math.round)(Math.abs(x));
            if (((w = x > 0), f <= $.r || !$.r)) {
              f <= 1 && k > 0 && ($ = y[k - 1]);
              var S = h[$.l];
              m && (f = m('' + f)),
                (v = typeof S == 'string' ? S.replace('%d', f) : S(f, u, $.l, w));
              break;
            }
          }
          if (u) return v;
          var P = w ? h.future : h.past;
          return typeof P == 'function' ? P(v) : P.replace('%s', v);
        }),
        (i.to = function (c, u) {
          return a(c, u, this, !0);
        }),
        (i.from = function (c, u) {
          return a(c, u, this);
        });
      var l = function (c) {
        return c.$u ? o.utc() : o();
      };
      (i.toNow = function (c) {
        return this.to(l(this), c);
      }),
        (i.fromNow = function (c) {
          return this.from(l(this), c);
        });
    };
  });
})(qb);
var vA = qb.exports;
const yA = Ir(vA);
_r.extend(gA);
_r.extend(yA);
const Qb = {
  dateTime: 'DD MMM YYYY h:mm a',
  date: 'DD MMM YYYY',
  time: 'h:mm a',
  split: { dateTime: 'DD/MM/YYYY h:mm a', date: 'DD/MM/YYYY' },
  paramCase: { dateTime: 'DD-MM-YYYY h:mm a', date: 'DD-MM-YYYY' },
};
function __(e, t) {
  return e ? (_r(e).isValid() ? _r(e).format(Qb.dateTime) : 'Invalid time value') : null;
}
function I_(e, t) {
  return e ? (_r(e).isValid() ? _r(e).format(Qb.date) : 'Invalid time value') : null;
}
function xA(e) {
  return e ? (_r(e).isValid() ? _r(e).toNow(!0) : 'Invalid time value') : null;
}
function bA({ data: e = [], sx: t, ...n }) {
  const [r, o] = b.useState(e),
    i = r.filter((d) => d.isUnRead === !0).length,
    [s, a] = b.useState(null),
    l = b.useCallback((d) => {
      a(d.currentTarget);
    }, []),
    c = b.useCallback(() => {
      a(null);
    }, []),
    u = b.useCallback(() => {
      const d = r.map((p) => ({ ...p, isUnRead: !1 }));
      o(d);
    }, [r]);
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(mo, {
        color: s ? 'primary' : 'default',
        onClick: l,
        sx: t,
        ...n,
        children: C.jsx(T6, {
          badgeContent: i,
          color: 'error',
          children: C.jsx(zn, { width: 24, icon: 'solar:bell-bing-bold-duotone' }),
        }),
      }),
      C.jsxs(lu, {
        open: !!s,
        anchorEl: s,
        onClose: c,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
        slotProps: {
          paper: {
            sx: { width: 360, overflow: 'hidden', display: 'flex', flexDirection: 'column' },
          },
        },
        children: [
          C.jsxs(le, {
            display: 'flex',
            alignItems: 'center',
            sx: { py: 2, pl: 2.5, pr: 1.5 },
            children: [
              C.jsxs(le, {
                sx: { flexGrow: 1 },
                children: [
                  C.jsx(St, { variant: 'subtitle1', children: 'Notifications' }),
                  C.jsxs(St, {
                    variant: 'body2',
                    sx: { color: 'text.secondary' },
                    children: ['You have ', i, ' unread messages'],
                  }),
                ],
              }),
              i > 0 &&
                C.jsx(oA, {
                  title: ' Mark all as read',
                  children: C.jsx(mo, {
                    color: 'primary',
                    onClick: u,
                    children: C.jsx(zn, { icon: 'solar:check-read-outline' }),
                  }),
                }),
            ],
          }),
          C.jsx(ea, { sx: { borderStyle: 'dashed' } }),
          C.jsxs(kb, {
            fillContent: !0,
            sx: { minHeight: 240, maxHeight: { xs: 360, sm: 'none' } },
            children: [
              C.jsx(_f, {
                disablePadding: !0,
                subheader: C.jsx(Lf, {
                  disableSticky: !0,
                  sx: { py: 1, px: 2.5, typography: 'overline' },
                  children: 'New',
                }),
                children: r.slice(0, 2).map((d) => C.jsx(n0, { notification: d }, d.id)),
              }),
              C.jsx(_f, {
                disablePadding: !0,
                subheader: C.jsx(Lf, {
                  disableSticky: !0,
                  sx: { py: 1, px: 2.5, typography: 'overline' },
                  children: 'Before that',
                }),
                children: r.slice(2, 5).map((d) => C.jsx(n0, { notification: d }, d.id)),
              }),
            ],
          }),
          C.jsx(ea, { sx: { borderStyle: 'dashed' } }),
          C.jsx(le, {
            sx: { p: 1 },
            children: C.jsx(au, {
              fullWidth: !0,
              disableRipple: !0,
              color: 'inherit',
              children: 'View all',
            }),
          }),
        ],
      }),
    ],
  });
}
function n0({ notification: e }) {
  const { avatarUrl: t, title: n } = CA(e);
  return C.jsxs(lb, {
    sx: { py: 1.5, px: 2.5, mt: '1px', ...(e.isUnRead && { bgcolor: 'action.selected' }) },
    children: [
      C.jsx(pA, { children: C.jsx(jb, { sx: { bgcolor: 'background.neutral' }, children: t }) }),
      C.jsx(P8, {
        primary: n,
        secondary: C.jsxs(St, {
          variant: 'caption',
          sx: { mt: 0.5, gap: 0.5, display: 'flex', alignItems: 'center', color: 'text.disabled' },
          children: [C.jsx(zn, { width: 14, icon: 'solar:clock-circle-outline' }), xA(e.postedAt)],
        }),
      }),
    ],
  });
}
function CA(e) {
  const t = C.jsxs(St, {
    variant: 'subtitle2',
    children: [
      e.title,
      C.jsxs(St, {
        component: 'span',
        variant: 'body2',
        sx: { color: 'text.secondary' },
        children: ['  ', e.description],
      }),
    ],
  });
  return e.type === 'order-placed'
    ? {
        avatarUrl: C.jsx('img', {
          alt: e.title,
          src: '/assets/icons/notification/ic-notification-package.svg',
        }),
        title: t,
      }
    : e.type === 'order-shipped'
      ? {
          avatarUrl: C.jsx('img', {
            alt: e.title,
            src: '/assets/icons/notification/ic-notification-shipping.svg',
          }),
          title: t,
        }
      : e.type === 'mail'
        ? {
            avatarUrl: C.jsx('img', {
              alt: e.title,
              src: '/assets/icons/notification/ic-notification-mail.svg',
            }),
            title: t,
          }
        : e.type === 'chat-message'
          ? {
              avatarUrl: C.jsx('img', {
                alt: e.title,
                src: '/assets/icons/notification/ic-notification-chat.svg',
              }),
              title: t,
            }
          : {
              avatarUrl: e.avatarUrl ? C.jsx('img', { alt: e.title, src: e.avatarUrl }) : null,
              title: t,
            };
}
function SA({ sx: e, children: t, header: n }) {
  const r = Nt(),
    [o, i] = b.useState(!1),
    s = 'lg';
  return C.jsx(Ux, {
    headerSection: C.jsx(Wx, {
      layoutQuery: s,
      slotProps: { container: { maxWidth: !1, sx: { px: { [s]: 5 } } } },
      sx: n == null ? void 0 : n.sx,
      slots: {
        topArea: C.jsx(zx, {
          severity: 'info',
          sx: { display: 'none', borderRadius: 0 },
          children: 'This is an info Alert.',
        }),
        leftArea: C.jsxs(C.Fragment, {
          children: [
            C.jsx(d6, {
              onClick: () => i(!0),
              sx: { ml: -1, [r.breakpoints.up(s)]: { display: 'none' } },
            }),
            C.jsx(L8, { data: Fv, open: o, onClose: () => i(!1), workspaces: Hv }),
          ],
        }),
        rightArea: C.jsxs(le, {
          gap: 1,
          display: 'flex',
          alignItems: 'center',
          children: [
            C.jsx(u6, {}),
            C.jsx(C6, { data: eT }),
            C.jsx(bA, { data: tT }),
            C.jsx(b6, {
              data: [
                {
                  label: 'Home',
                  href: '/',
                  icon: C.jsx(zn, { width: 22, icon: 'solar:home-angle-bold-duotone' }),
                },
                {
                  label: 'Profile',
                  href: '#',
                  icon: C.jsx(zn, { width: 22, icon: 'solar:shield-keyhole-bold-duotone' }),
                },
                {
                  label: 'Settings',
                  href: '#',
                  icon: C.jsx(zn, { width: 22, icon: 'solar:settings-bold-duotone' }),
                },
              ],
            }),
          ],
        }),
      },
    }),
    sidebarSection: C.jsx(N8, { data: Fv, layoutQuery: s, workspaces: Hv }),
    footerSection: null,
    cssVars: {
      '--layout-nav-vertical-width': '300px',
      '--layout-dashboard-content-pt': r.spacing(1),
      '--layout-dashboard-content-pb': r.spacing(8),
      '--layout-dashboard-content-px': r.spacing(5),
    },
    sx: {
      [`& .${ho.hasSidebar}`]: {
        [r.breakpoints.up(s)]: { pl: 'var(--layout-nav-vertical-width)' },
      },
      ...e,
    },
    children: C.jsx(KP, { children: t }),
  });
}
const wA = b.lazy(() =>
    Ii(() => import('./home-C5geOhtV.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5]))
  ),
  kA = b.lazy(() =>
    Ii(() => import('./blog-DqPmlkIf.js'), __vite__mapDeps([6, 1, 5, 2, 7, 8, 9, 10]))
  ),
  EA = b.lazy(() => Ii(() => import('./user-BXhgA-Qh.js'), __vite__mapDeps([11, 1, 4, 7, 2, 10]))),
  $A = b.lazy(() => Ii(() => import('./sign-in-C-QX26UT.js'), __vite__mapDeps([12, 1, 8, 7]))),
  PA = b.lazy(() =>
    Ii(() => import('./products-BhFLOTDf.js'), __vite__mapDeps([13, 1, 5, 3, 2, 4, 9, 10]))
  ),
  TA = b.lazy(() => Ii(() => import('./page-not-found-DVoSS_fq.js'), __vite__mapDeps([14, 1]))),
  RA = C.jsx(le, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 1 auto',
    children: C.jsx(U3, {
      sx: {
        width: 1,
        maxWidth: 320,
        bgcolor: (e) => pe(e.vars.palette.text.primaryChannel, 0.16),
        [`& .${_3.bar}`]: { bgcolor: 'text.primary' },
      },
    }),
  });
function OA() {
  return Sw([
    {
      element: C.jsx(SA, {
        children: C.jsx(b.Suspense, { fallback: RA, children: C.jsx(Nw, {}) }),
      }),
      children: [
        { element: C.jsx(wA, {}), index: !0 },
        { path: 'user', element: C.jsx(EA, {}) },
        { path: 'products', element: C.jsx(PA, {}) },
        { path: 'blog', element: C.jsx(kA, {}) },
      ],
    },
    { path: 'sign-in', element: C.jsx(GP, { children: C.jsx($A, {}) }) },
    { path: '404', element: C.jsx(TA, {}) },
    { path: '*', element: C.jsx(jw, { to: '/404', replace: !0 }) },
  ]);
}
function MA() {
  const { pathname: e } = bo();
  return (
    b.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
    null
  );
}
const AA = (e, t) =>
    E(
      {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        boxSizing: 'border-box',
        WebkitTextSizeAdjust: '100%',
      },
      t && !e.vars && { colorScheme: e.palette.mode }
    ),
  _A = (e) =>
    E({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
      backgroundColor: (e.vars || e).palette.background.default,
      '@media print': { backgroundColor: (e.vars || e).palette.common.white },
    }),
  IA = (e, t = !1) => {
    var n;
    const r = {};
    t &&
      e.colorSchemes &&
      Object.entries(e.colorSchemes).forEach(([s, a]) => {
        var l;
        r[e.getColorSchemeSelector(s).replace(/\s*&/, '')] = {
          colorScheme: (l = a.palette) == null ? void 0 : l.mode,
        };
      });
    let o = E(
      {
        html: AA(e, t),
        '*, *::before, *::after': { boxSizing: 'inherit' },
        'strong, b': { fontWeight: e.typography.fontWeightBold },
        body: E({ margin: 0 }, _A(e), {
          '&::backdrop': { backgroundColor: (e.vars || e).palette.background.default },
        }),
      },
      r
    );
    const i =
      (n = e.components) == null || (n = n.MuiCssBaseline) == null ? void 0 : n.styleOverrides;
    return i && (o = [o, i]), o;
  };
function jA(e) {
  const t = ce({ props: e, name: 'MuiCssBaseline' }),
    { children: n, enableColorScheme: r = !1 } = t;
  return C.jsxs(b.Fragment, { children: [C.jsx(gh, { styles: (o) => IA(o, r) }), n] });
}
const NA = {
    lighter: '#D0ECFE',
    light: '#73BAFB',
    main: '#1877F2',
    dark: '#0C44AE',
    darker: '#042174',
    contrastText: '#FFFFFF',
  },
  LA = {
    lighter: '#EFD6FF',
    light: '#C684FF',
    main: '#8E33FF',
    dark: '#5119B7',
    darker: '#27097A',
    contrastText: '#FFFFFF',
  },
  DA = {
    lighter: '#CAFDF5',
    light: '#61F3F3',
    main: '#00B8D9',
    dark: '#006C9C',
    darker: '#003768',
    contrastText: '#FFFFFF',
  },
  zA = {
    lighter: '#D3FCD2',
    light: '#77ED8B',
    main: '#22C55E',
    dark: '#118D57',
    darker: '#065E49',
    contrastText: '#ffffff',
  },
  FA = {
    lighter: '#FFF5CC',
    light: '#FFD666',
    main: '#FFAB00',
    dark: '#B76E00',
    darker: '#7A4100',
    contrastText: '#1C252E',
  },
  BA = {
    lighter: '#FFE9D5',
    light: '#FFAC82',
    main: '#FF5630',
    dark: '#B71D18',
    darker: '#7A0916',
    contrastText: '#FFFFFF',
  },
  WA = {
    50: '#FCFDFD',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#1C252E',
    900: '#141A21',
  },
  UA = { black: '#000000', white: '#FFFFFF' },
  Wr = {
    primary: NA,
    secondary: LA,
    info: DA,
    success: zA,
    warning: FA,
    error: BA,
    grey: WA,
    common: UA,
  },
  Ct = Wn(Wr.grey),
  Zb = Wn(Wr.primary),
  Jb = Wn(Wr.secondary),
  e2 = Wn(Wr.info),
  t2 = Wn(Wr.success),
  n2 = Wn(Wr.warning),
  r2 = Wn(Wr.error),
  o2 = Wn(Wr.common),
  VA = { light: Wn({ primary: Ct[800], secondary: Ct[600], disabled: Ct[500] }) },
  HA = { light: Wn({ paper: '#FFFFFF', default: Ct[100], neutral: Ct[200] }) },
  GA = {
    hover: pe(Ct['500Channel'], 0.08),
    selected: pe(Ct['500Channel'], 0.16),
    focus: pe(Ct['500Channel'], 0.24),
    disabled: pe(Ct['500Channel'], 0.8),
    disabledBackground: pe(Ct['500Channel'], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  i2 = { light: { ...GA, active: Ct[600] } },
  KA = {
    primary: Zb,
    secondary: Jb,
    info: e2,
    success: t2,
    warning: n2,
    error: r2,
    grey: Ct,
    common: o2,
    divider: pe(Ct['500Channel'], 0.2),
    action: i2,
  },
  YA = { ...KA, text: VA.light, background: HA.light, action: i2.light },
  XA = { light: { palette: YA } };
function qA() {
  const e = Ct['500Channel'],
    t = pe(e, 0.2),
    n = pe(e, 0.14),
    r = pe(e, 0.12);
  return [
    'none',
    `0px 2px 1px -1px ${t},0px 1px 1px 0px ${n},0px 1px 3px 0px ${r}`,
    `0px 3px 1px -2px ${t},0px 2px 2px 0px ${n},0px 1px 5px 0px ${r}`,
    `0px 3px 3px -2px ${t},0px 3px 4px 0px ${n},0px 1px 8px 0px ${r}`,
    `0px 2px 4px -1px ${t},0px 4px 5px 0px ${n},0px 1px 10px 0px ${r}`,
    `0px 3px 5px -1px ${t},0px 5px 8px 0px ${n},0px 1px 14px 0px ${r}`,
    `0px 3px 5px -1px ${t},0px 6px 10px 0px ${n},0px 1px 18px 0px ${r}`,
    `0px 4px 5px -2px ${t},0px 7px 10px 1px ${n},0px 2px 16px 1px ${r}`,
    `0px 5px 5px -3px ${t},0px 8px 10px 1px ${n},0px 3px 14px 2px ${r}`,
    `0px 5px 6px -3px ${t},0px 9px 12px 1px ${n},0px 3px 16px 2px ${r}`,
    `0px 6px 6px -3px ${t},0px 10px 14px 1px ${n},0px 4px 18px 3px ${r}`,
    `0px 6px 7px -4px ${t},0px 11px 15px 1px ${n},0px 4px 20px 3px ${r}`,
    `0px 7px 8px -4px ${t},0px 12px 17px 2px ${n},0px 5px 22px 4px ${r}`,
    `0px 7px 8px -4px ${t},0px 13px 19px 2px ${n},0px 5px 24px 4px ${r}`,
    `0px 7px 9px -4px ${t},0px 14px 21px 2px ${n},0px 5px 26px 4px ${r}`,
    `0px 8px 9px -5px ${t},0px 15px 22px 2px ${n},0px 6px 28px 5px ${r}`,
    `0px 8px 10px -5px ${t},0px 16px 24px 2px ${n},0px 6px 30px 5px ${r}`,
    `0px 8px 11px -5px ${t},0px 17px 26px 2px ${n},0px 6px 32px 5px ${r}`,
    `0px 9px 11px -5px ${t},0px 18px 28px 2px ${n},0px 7px 34px 6px ${r}`,
    `0px 9px 12px -6px ${t},0px 19px 29px 2px ${n},0px 7px 36px 6px ${r}`,
    `0px 10px 13px -6px ${t},0px 20px 31px 3px ${n},0px 8px 38px 7px ${r}`,
    `0px 10px 13px -6px ${t},0px 21px 33px 3px ${n},0px 8px 40px 7px ${r}`,
    `0px 10px 14px -6px ${t},0px 22px 35px 3px ${n},0px 8px 42px 7px ${r}`,
    `0px 11px 14px -7px ${t},0px 23px 36px 3px ${n},0px 9px 44px 8px ${r}`,
    `0px 11px 15px -7px ${t},0px 24px 38px 3px ${n},0px 9px 46px 8px ${r}`,
  ];
}
const QA = 'DM Sans Variable',
  ZA = Nx(QA),
  Ja = Nx('Barlow'),
  JA = {
    fontFamily: ZA,
    fontSecondaryFamily: Ja,
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightSemiBold: '600',
    fontWeightBold: '700',
    h1: {
      fontWeight: 800,
      lineHeight: 80 / 64,
      fontSize: mt(40),
      fontFamily: Ja,
      ...Ao({ sm: 52, md: 58, lg: 64 }),
    },
    h2: {
      fontWeight: 800,
      lineHeight: 64 / 48,
      fontSize: mt(32),
      fontFamily: Ja,
      ...Ao({ sm: 40, md: 44, lg: 48 }),
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: mt(24),
      fontFamily: Ja,
      ...Ao({ sm: 26, md: 30, lg: 32 }),
    },
    h4: { fontWeight: 700, lineHeight: 1.5, fontSize: mt(20), ...Ao({ sm: 20, md: 24, lg: 24 }) },
    h5: { fontWeight: 700, lineHeight: 1.5, fontSize: mt(18), ...Ao({ sm: 19, md: 20, lg: 20 }) },
    h6: {
      fontWeight: 600,
      lineHeight: 28 / 18,
      fontSize: mt(17),
      ...Ao({ sm: 18, md: 18, lg: 18 }),
    },
    subtitle1: { fontWeight: 600, lineHeight: 1.5, fontSize: mt(16) },
    subtitle2: { fontWeight: 600, lineHeight: 22 / 14, fontSize: mt(14) },
    body1: { lineHeight: 1.5, fontSize: mt(16) },
    body2: { lineHeight: 22 / 14, fontSize: mt(14) },
    caption: { lineHeight: 1.5, fontSize: mt(12) },
    overline: { fontWeight: 700, lineHeight: 1.5, fontSize: mt(12), textTransform: 'uppercase' },
    button: { fontWeight: 700, lineHeight: 24 / 14, fontSize: mt(14), textTransform: 'unset' },
  },
  e_ = {
    styleOverrides: {
      root: ({ theme: e }) => ({ backgroundColor: pe(e.vars.palette.grey['900Channel'], 0.8) }),
      invisible: { background: 'transparent' },
    },
  },
  t_ = {
    defaultProps: { disableElevation: !0 },
    styleOverrides: {
      containedInherit: ({ theme: e }) => ({
        color: e.vars.palette.common.white,
        backgroundColor: e.vars.palette.grey[800],
        '&:hover': {
          color: e.vars.palette.common.white,
          backgroundColor: e.vars.palette.grey[800],
        },
      }),
      sizeLarge: { minHeight: 48 },
    },
  },
  n_ = {
    styleOverrides: {
      root: ({ theme: e }) => ({
        zIndex: 0,
        position: 'relative',
        boxShadow: e.customShadows.card,
        borderRadius: e.shape.borderRadius * 2,
      }),
    },
  },
  r_ = {
    defaultProps: {
      titleTypographyProps: { variant: 'h6' },
      subheaderTypographyProps: { variant: 'body2' },
    },
    styleOverrides: { root: ({ theme: e }) => ({ padding: e.spacing(3, 3, 0) }) },
  },
  o_ = {
    styleOverrides: {
      notchedOutline: ({ theme: e }) => ({
        borderColor: pe(e.vars.palette.grey['500Channel'], 0.2),
      }),
    },
  },
  i_ = {
    defaultProps: { elevation: 0 },
    styleOverrides: {
      root: { backgroundImage: 'none' },
      outlined: ({ theme: e }) => ({ borderColor: pe(e.vars.palette.grey['500Channel'], 0.16) }),
    },
  },
  s_ = {
    styleOverrides: {
      head: ({ theme: e }) => ({
        fontSize: e.typography.pxToRem(14),
        color: e.vars.palette.text.secondary,
        fontWeight: e.typography.fontWeightSemiBold,
        backgroundColor: e.vars.palette.background.neutral,
      }),
    },
  },
  a_ = { styleOverrides: { root: ({ theme: e }) => ({ ...e.typography.body2 }) } },
  l_ = { defaultProps: { underline: 'hover' } },
  c_ = { styleOverrides: { label: ({ theme: e }) => ({ ...e.typography.body2 }) } },
  u_ = {
    defaultProps: {
      size: 'small',
      icon: C.jsx(Jn, {
        children: C.jsx('path', {
          d: 'M17.9 2.318A5 5 0 0 1 22.895 7.1l.005.217v10a5 5 0 0 1-4.783 4.995l-.217.005h-10a5 5 0 0 1-4.995-4.783l-.005-.217v-10a5 5 0 0 1 4.783-4.996l.217-.004h10Zm-.5 1.5h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4Z',
        }),
      }),
      checkedIcon: C.jsx(Jn, {
        children: C.jsx('path', {
          d: 'M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm-1.625 7.255-4.13 4.13-1.75-1.75a.881.881 0 0 0-1.24 0c-.34.34-.34.89 0 1.24l2.38 2.37c.17.17.39.25.61.25.23 0 .45-.08.62-.25l4.75-4.75c.34-.34.34-.89 0-1.24a.881.881 0 0 0-1.24 0Z',
        }),
      }),
      indeterminateIcon: C.jsx(Jn, {
        children: C.jsx('path', {
          d: 'M17,2 C19.7614,2 22,4.23858 22,7 L22,7 L22,17 C22,19.7614 19.7614,22 17,22 L17,22 L7,22 C4.23858,22 2,19.7614 2,17 L2,17 L2,7 C2,4.23858 4.23858,2 7,2 L7,2 Z M15,11 L9,11 C8.44772,11 8,11.4477 8,12 C8,12.5523 8.44772,13 9,13 L15,13 C15.5523,13 16,12.5523 16,12 C16,11.4477 15.5523,11 15,11 Z',
        }),
      }),
    },
  },
  d_ = {
    defaultProps: {
      size: 'small',
      icon: C.jsx(Jn, {
        children: C.jsx('path', {
          d: 'M12 2C13.9778 2 15.9112 2.58649 17.5557 3.6853C19.2002 4.78412 20.4819 6.3459 21.2388 8.17317C21.9957 10.0004 22.1937 12.0111 21.8079 13.9509C21.422 15.8907 20.4696 17.6725 19.0711 19.0711C17.6725 20.4696 15.8907 21.422 13.9509 21.8079C12.0111 22.1937 10.0004 21.9957 8.17317 21.2388C6.3459 20.4819 4.78412 19.2002 3.6853 17.5557C2.58649 15.9112 2 13.9778 2 12C2 6.477 6.477 2 12 2ZM12 3.5C9.74566 3.5 7.58365 4.39553 5.98959 5.98959C4.39553 7.58365 3.5 9.74566 3.5 12C3.5 14.2543 4.39553 16.4163 5.98959 18.0104C7.58365 19.6045 9.74566 20.5 12 20.5C14.2543 20.5 16.4163 19.6045 18.0104 18.0104C19.6045 16.4163 20.5 14.2543 20.5 12C20.5 9.74566 19.6045 7.58365 18.0104 5.98959C16.4163 4.39553 14.2543 3.5 12 3.5Z',
          fill: 'currentColor',
        }),
      }),
      checkedIcon: C.jsx(Jn, {
        children: C.jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z',
          fill: 'currentColor',
        }),
      }),
    },
  },
  f_ = {
    MuiCard: n_,
    MuiLink: l_,
    MuiPaper: i_,
    MuiRadio: d_,
    MuiButton: t_,
    MuiBackdrop: e_,
    MuiMenuItem: a_,
    MuiCheckbox: u_,
    MuiTableCell: s_,
    MuiCardHeader: r_,
    MuiOutlinedInput: o_,
    MuiFormControlLabel: c_,
  };
function Io(e) {
  return `0 8px 16px 0 ${pe(e, 0.24)}`;
}
function p_() {
  const e = Ct['500Channel'];
  return {
    z1: `0 1px 2px 0 ${pe(e, 0.16)}`,
    z4: `0 4px 8px 0 ${pe(e, 0.16)}`,
    z8: `0 8px 16px 0 ${pe(e, 0.16)}`,
    z12: `0 12px 24px -4px ${pe(e, 0.16)}`,
    z16: `0 16px 32px -4px ${pe(e, 0.16)}`,
    z20: `0 20px 40px -4px ${pe(e, 0.16)}`,
    z24: `0 24px 48px 0 ${pe(e, 0.16)}`,
    dialog: `-40px 40px 80px -8px ${pe(o2.blackChannel, 0.24)}`,
    card: `0 0 2px 0 ${pe(e, 0.2)}, 0 12px 24px -4px ${pe(e, 0.12)}`,
    dropdown: `0 0 2px 0 ${pe(e, 0.24)}, -20px 20px 40px -4px ${pe(e, 0.24)}`,
    primary: Io(Zb.mainChannel),
    secondary: Io(Jb.mainChannel),
    info: Io(e2.mainChannel),
    success: Io(t2.mainChannel),
    warning: Io(n2.mainChannel),
    error: Io(r2.mainChannel),
  };
}
function h_() {
  const e = {
    colorSchemes: XA,
    shadows: qA(),
    customShadows: p_(),
    shape: { borderRadius: 8 },
    components: f_,
    typography: JA,
    cssVarPrefix: '',
    shouldSkipGeneratingVar: m_,
  };
  return jx(e);
}
function m_(e, t) {
  const n = [
      'mixins',
      'overlays',
      'direction',
      'typography',
      'breakpoints',
      'transitions',
      'cssVarPrefix',
      'unstable_sxConfig',
    ],
    r = {
      global: ['tonalOffset', 'dividerChannel', 'contrastThreshold'],
      grey: ['A100', 'A200', 'A400', 'A700'],
      text: ['icon'],
    };
  if (e[0] === 'palette') {
    const i = e[1],
      s = r[i] || r.global;
    return e.some((a) => (s == null ? void 0 : s.includes(a)));
  }
  return e.some((i) => (n == null ? void 0 : n.includes(i)));
}
function g_({ children: e }) {
  const t = h_();
  return C.jsxs(R3, { theme: t, children: [C.jsx(jA, {}), e] });
}
function v_() {
  MA();
  const e = C.jsx(y3, {
    size: 'medium',
    'aria-label': 'Github',
    href: 'https://github.com/minimal-ui-kit/material-kit-react',
    sx: {
      zIndex: 9,
      right: 20,
      bottom: 20,
      width: 44,
      height: 44,
      position: 'fixed',
      bgcolor: 'grey.800',
      color: 'common.white',
    },
    children: C.jsx(zn, { width: 24, icon: 'eva:github-fill' }),
  });
  return C.jsxs(g_, { children: [C.jsx(OA, {}), e] });
}
const y_ = dd.createRoot(document.getElementById('root'));
y_.render(
  C.jsx(b.StrictMode, {
    children: C.jsx(O1, {
      children: C.jsx(Vw, { children: C.jsx(b.Suspense, { children: C.jsx(v_, {}) }) }),
    }),
  })
);
export {
  iu as $,
  jb as A,
  le as B,
  O_ as C,
  ea as D,
  M_ as E,
  sP as F,
  I_ as G,
  b_ as H,
  zn as I,
  E$ as J,
  $$ as K,
  P8 as L,
  Th as M,
  Px as N,
  Qn as O,
  lu as P,
  gf as Q,
  Ni as R,
  kb as S,
  ga as T,
  Le as U,
  Ve as V,
  wo as W,
  rs as X,
  uc as Y,
  Kb as Z,
  E as _,
  he as a,
  Lf as a0,
  TP as a1,
  a6 as a2,
  tc as a3,
  ec as a4,
  dh as a5,
  VP as a6,
  q8 as a7,
  bi as a8,
  Pb as a9,
  Wg as aA,
  sh as aB,
  n5 as aC,
  mO as aD,
  R_ as aE,
  ma as aF,
  b$ as aG,
  or as aH,
  S_ as aI,
  ux as aJ,
  C_ as aK,
  th as aL,
  ha as aM,
  ru as aN,
  ho as aO,
  Ux as aP,
  Wx as aQ,
  zx as aR,
  Fx as aS,
  Bx as aT,
  oA as aa,
  P_ as ab,
  Co as ac,
  fa as ad,
  XO as ae,
  qs as af,
  gO as ag,
  A_ as ah,
  H8 as ai,
  Oh as aj,
  Rb as ak,
  V8 as al,
  So as am,
  Ib as an,
  Ab as ao,
  Ob as ap,
  _b as aq,
  Mb as ar,
  ct as as,
  d8 as at,
  po as au,
  z5 as av,
  ut as aw,
  fo as ax,
  mh as ay,
  T6 as az,
  ce as b,
  H as c,
  ih as d,
  St as e,
  X as f,
  ue as g,
  ge as h,
  au as i,
  C as j,
  xA as k,
  mo as l,
  bn as m,
  Rh as n,
  Nt as o,
  U as p,
  w$ as q,
  b as r,
  q as s,
  __ as t,
  S$ as u,
  pe as v,
  E_ as w,
  z8 as x,
  $_ as y,
  T_ as z,
};
