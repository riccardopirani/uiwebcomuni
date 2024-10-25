import {
  ax as N,
  aC as G,
  aF as W,
  aG as w,
  _ as u,
  aH as D,
  aI as S,
  aJ as H,
  as as z,
  aK as J,
  r as v,
  aL as K,
  c as V,
  j as h,
  f as T,
  u as Q,
  h as A,
  a as _,
  aM as O,
  s as E,
  b as B,
  g as X,
  p as I,
  ak as Y,
  al as Z,
  e as q,
} from './index-arL0TtPY.js';
function ee(e, s = 0, t = 1) {
  return G(e, s, t);
}
function re(e) {
  e = e.slice(1);
  const s = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let t = e.match(s);
  return (
    t && t[0].length === 1 && (t = t.map((r) => r + r)),
    t
      ? `rgb${t.length === 4 ? 'a' : ''}(${t.map((r, a) => (a < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function U(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return U(re(e));
  const s = e.indexOf('('),
    t = e.substring(0, s);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(t) === -1) throw new Error(N(9, e));
  let r = e.substring(s + 1, e.length - 1),
    a;
  if (t === 'color') {
    if (
      ((r = r.split(' ')),
      (a = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(a) === -1)
    )
      throw new Error(N(10, a));
  } else r = r.split(',');
  return (r = r.map((o) => parseFloat(o))), { type: t, values: r, colorSpace: a };
}
function se(e) {
  const { type: s, colorSpace: t } = e;
  let { values: r } = e;
  return (
    s.indexOf('rgb') !== -1
      ? (r = r.map((a, o) => (o < 3 ? parseInt(a, 10) : a)))
      : s.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    s.indexOf('color') !== -1 ? (r = `${t} ${r.join(' ')}`) : (r = `${r.join(', ')}`),
    `${s}(${r})`
  );
}
function ye(e, s) {
  return (
    (e = U(e)),
    (s = ee(s)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${s}`) : (e.values[3] = s),
    se(e)
  );
}
const te = ['component', 'direction', 'spacing', 'divider', 'children', 'className', 'useFlexGap'],
  oe = W(),
  ae = w('div', { name: 'MuiStack', slot: 'Root', overridesResolver: (e, s) => s.root });
function le(e) {
  return Q({ props: e, name: 'MuiStack', defaultTheme: oe });
}
function ne(e, s) {
  const t = v.Children.toArray(e).filter(Boolean);
  return t.reduce(
    (r, a, o) => (
      r.push(a), o < t.length - 1 && r.push(v.cloneElement(s, { key: `separator-${o}` })), r
    ),
    []
  );
}
const ie = (e) =>
    ({ row: 'Left', 'row-reverse': 'Right', column: 'Top', 'column-reverse': 'Bottom' })[e],
  ce = ({ ownerState: e, theme: s }) => {
    let t = u(
      { display: 'flex', flexDirection: 'column' },
      D({ theme: s }, S({ values: e.direction, breakpoints: s.breakpoints.values }), (r) => ({
        flexDirection: r,
      }))
    );
    if (e.spacing) {
      const r = H(s),
        a = Object.keys(s.breakpoints.values).reduce(
          (l, n) => (
            ((typeof e.spacing == 'object' && e.spacing[n] != null) ||
              (typeof e.direction == 'object' && e.direction[n] != null)) &&
              (l[n] = !0),
            l
          ),
          {}
        ),
        o = S({ values: e.direction, base: a }),
        i = S({ values: e.spacing, base: a });
      typeof o == 'object' &&
        Object.keys(o).forEach((l, n, d) => {
          if (!o[l]) {
            const f = n > 0 ? o[d[n - 1]] : 'column';
            o[l] = f;
          }
        }),
        (t = z(
          t,
          D({ theme: s }, i, (l, n) =>
            e.useFlexGap
              ? { gap: O(r, l) }
              : {
                  '& > :not(style):not(style)': { margin: 0 },
                  '& > :not(style) ~ :not(style)': {
                    [`margin${ie(n ? o[n] : e.direction)}`]: O(r, l),
                  },
                }
          )
        ));
    }
    return (t = J(s.breakpoints, t)), t;
  };
function pe(e = {}) {
  const { createStyledComponent: s = ae, useThemeProps: t = le, componentName: r = 'MuiStack' } = e,
    a = () => A({ root: ['root'] }, (l) => _(r, l), {}),
    o = s(ce);
  return v.forwardRef(function (l, n) {
    const d = t(l),
      m = K(d),
      {
        component: f = 'div',
        direction: C = 'column',
        spacing: R = 0,
        divider: P,
        children: c,
        className: k,
        useFlexGap: b = !1,
      } = m,
      $ = V(m, te),
      j = { direction: C, spacing: R, useFlexGap: b },
      g = a();
    return h.jsx(
      o,
      u({ as: f, ownerState: j, ref: n, className: T(g.root, k) }, $, {
        children: P ? ne(c, P) : c,
      })
    );
  });
}
const ue = pe({
  createStyledComponent: E('div', {
    name: 'MuiStack',
    slot: 'Root',
    overridesResolver: (e, s) => s.root,
  }),
  useThemeProps: (e) => B({ props: e, name: 'MuiStack' }),
});
function de(e) {
  return _('MuiFormControlLabel', e);
}
const y = X('MuiFormControlLabel', [
    'root',
    'labelPlacementStart',
    'labelPlacementTop',
    'labelPlacementBottom',
    'disabled',
    'label',
    'error',
    'required',
    'asterisk',
  ]),
  me = [
    'checked',
    'className',
    'componentsProps',
    'control',
    'disabled',
    'disableTypography',
    'inputRef',
    'label',
    'labelPlacement',
    'name',
    'onChange',
    'required',
    'slotProps',
    'value',
  ],
  fe = (e) => {
    const { classes: s, disabled: t, labelPlacement: r, error: a, required: o } = e,
      i = {
        root: ['root', t && 'disabled', `labelPlacement${I(r)}`, a && 'error', o && 'required'],
        label: ['label', t && 'disabled'],
        asterisk: ['asterisk', a && 'error'],
      };
    return A(i, de, s);
  },
  be = E('label', {
    name: 'MuiFormControlLabel',
    slot: 'Root',
    overridesResolver: (e, s) => {
      const { ownerState: t } = e;
      return [{ [`& .${y.label}`]: s.label }, s.root, s[`labelPlacement${I(t.labelPlacement)}`]];
    },
  })(({ theme: e, ownerState: s }) =>
    u(
      {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        verticalAlign: 'middle',
        WebkitTapHighlightColor: 'transparent',
        marginLeft: -11,
        marginRight: 16,
        [`&.${y.disabled}`]: { cursor: 'default' },
      },
      s.labelPlacement === 'start' && {
        flexDirection: 'row-reverse',
        marginLeft: 16,
        marginRight: -11,
      },
      s.labelPlacement === 'top' && { flexDirection: 'column-reverse', marginLeft: 16 },
      s.labelPlacement === 'bottom' && { flexDirection: 'column', marginLeft: 16 },
      { [`& .${y.label}`]: { [`&.${y.disabled}`]: { color: (e.vars || e).palette.text.disabled } } }
    )
  ),
  ge = E('span', {
    name: 'MuiFormControlLabel',
    slot: 'Asterisk',
    overridesResolver: (e, s) => s.asterisk,
  })(({ theme: e }) => ({ [`&.${y.error}`]: { color: (e.vars || e).palette.error.main } })),
  ve = v.forwardRef(function (s, t) {
    var r, a;
    const o = B({ props: s, name: 'MuiFormControlLabel' }),
      {
        className: i,
        componentsProps: x = {},
        control: l,
        disabled: n,
        disableTypography: d,
        label: m,
        labelPlacement: f = 'end',
        required: C,
        slotProps: R = {},
      } = o,
      P = V(o, me),
      c = Y(),
      k = (r = n ?? l.props.disabled) != null ? r : c == null ? void 0 : c.disabled,
      b = C ?? l.props.required,
      $ = { disabled: k, required: b };
    ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach((F) => {
      typeof l.props[F] > 'u' && typeof o[F] < 'u' && ($[F] = o[F]);
    });
    const j = Z({ props: o, muiFormControl: c, states: ['error'] }),
      g = u({}, o, { disabled: k, labelPlacement: f, required: b, error: j.error }),
      L = fe(g),
      M = (a = R.typography) != null ? a : x.typography;
    let p = m;
    return (
      p != null &&
        p.type !== q &&
        !d &&
        (p = h.jsx(
          q,
          u({ component: 'span' }, M, {
            className: T(L.label, M == null ? void 0 : M.className),
            children: p,
          })
        )),
      h.jsxs(
        be,
        u({ className: T(L.root, i), ownerState: g, ref: t }, P, {
          children: [
            v.cloneElement(l, $),
            b
              ? h.jsxs(ue, {
                  display: 'block',
                  children: [
                    p,
                    h.jsxs(ge, {
                      ownerState: g,
                      'aria-hidden': !0,
                      className: L.asterisk,
                      children: [' ', '*'],
                    }),
                  ],
                })
              : p,
          ],
        })
      )
    );
  });
export { ve as F, ue as S, ye as a };