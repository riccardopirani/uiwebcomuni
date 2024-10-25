import {
  a as N,
  g as U,
  s as $,
  W as T,
  _ as a,
  am as E,
  r as I,
  c as O,
  K as X,
  ak as Y,
  j as i,
  f as H,
  p as x,
  h as L,
  R as S,
  U as Z,
  b as ee,
} from './index-arL0TtPY.js';
function oe(e) {
  return N('PrivateSwitchBase', e);
}
U('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
const te = [
    'autoFocus',
    'checked',
    'checkedIcon',
    'className',
    'defaultChecked',
    'disabled',
    'disableFocusRipple',
    'edge',
    'icon',
    'id',
    'inputProps',
    'inputRef',
    'name',
    'onBlur',
    'onChange',
    'onFocus',
    'readOnly',
    'required',
    'tabIndex',
    'type',
    'value',
  ],
  ce = (e) => {
    const { classes: o, checked: t, disabled: r, edge: c } = e,
      s = { root: ['root', t && 'checked', r && 'disabled', c && `edge${x(c)}`], input: ['input'] };
    return L(s, oe, o);
  },
  se = $(T)(({ ownerState: e }) =>
    a(
      { padding: 9, borderRadius: '50%' },
      e.edge === 'start' && { marginLeft: e.size === 'small' ? -3 : -12 },
      e.edge === 'end' && { marginRight: e.size === 'small' ? -3 : -12 }
    )
  ),
  ne = $('input', { shouldForwardProp: E })({
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  ae = I.forwardRef(function (o, t) {
    const {
        autoFocus: r,
        checked: c,
        checkedIcon: s,
        className: u,
        defaultChecked: C,
        disabled: B,
        disableFocusRipple: d = !1,
        edge: b = !1,
        icon: z,
        id: p,
        inputProps: P,
        inputRef: y,
        name: g,
        onBlur: h,
        onChange: f,
        onFocus: m,
        readOnly: V,
        required: q = !1,
        tabIndex: W,
        type: v,
        value: j,
      } = o,
      D = O(o, te),
      [w, K] = X({ controlled: c, default: !!C, name: 'SwitchBase', state: 'checked' }),
      l = Y(),
      A = (n) => {
        m && m(n), l && l.onFocus && l.onFocus(n);
      },
      G = (n) => {
        h && h(n), l && l.onBlur && l.onBlur(n);
      },
      J = (n) => {
        if (n.nativeEvent.defaultPrevented) return;
        const _ = n.target.checked;
        K(_), f && f(n, _);
      };
    let k = B;
    l && typeof k > 'u' && (k = l.disabled);
    const Q = v === 'checkbox' || v === 'radio',
      R = a({}, o, { checked: w, disabled: k, disableFocusRipple: d, edge: b }),
      M = ce(R);
    return i.jsxs(
      se,
      a(
        {
          component: 'span',
          className: H(M.root, u),
          centerRipple: !0,
          focusRipple: !d,
          disabled: k,
          tabIndex: null,
          role: void 0,
          onFocus: A,
          onBlur: G,
          ownerState: R,
          ref: t,
        },
        D,
        {
          children: [
            i.jsx(
              ne,
              a(
                {
                  autoFocus: r,
                  checked: c,
                  defaultChecked: C,
                  className: M.input,
                  disabled: k,
                  id: Q ? p : void 0,
                  name: g,
                  onChange: J,
                  readOnly: V,
                  ref: y,
                  required: q,
                  ownerState: R,
                  tabIndex: W,
                  type: v,
                },
                v === 'checkbox' && j === void 0 ? {} : { value: j },
                P
              )
            ),
            w ? s : z,
          ],
        }
      )
    );
  }),
  ie = S(
    i.jsx('path', {
      d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
    }),
    'CheckBoxOutlineBlank'
  ),
  re = S(
    i.jsx('path', {
      d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    }),
    'CheckBox'
  ),
  le = S(
    i.jsx('path', {
      d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z',
    }),
    'IndeterminateCheckBox'
  );
function de(e) {
  return N('MuiCheckbox', e);
}
const F = U('MuiCheckbox', [
    'root',
    'checked',
    'disabled',
    'indeterminate',
    'colorPrimary',
    'colorSecondary',
    'sizeSmall',
    'sizeMedium',
  ]),
  ue = [
    'checkedIcon',
    'color',
    'icon',
    'indeterminate',
    'indeterminateIcon',
    'inputProps',
    'size',
    'className',
  ],
  pe = (e) => {
    const { classes: o, indeterminate: t, color: r, size: c } = e,
      s = { root: ['root', t && 'indeterminate', `color${x(r)}`, `size${x(c)}`] },
      u = L(s, de, o);
    return a({}, o, u);
  },
  he = $(ae, {
    shouldForwardProp: (e) => E(e) || e === 'classes',
    name: 'MuiCheckbox',
    slot: 'Root',
    overridesResolver: (e, o) => {
      const { ownerState: t } = e;
      return [
        o.root,
        t.indeterminate && o.indeterminate,
        o[`size${x(t.size)}`],
        t.color !== 'default' && o[`color${x(t.color)}`],
      ];
    },
  })(({ theme: e, ownerState: o }) =>
    a(
      { color: (e.vars || e).palette.text.secondary },
      !o.disableRipple && {
        '&:hover': {
          backgroundColor: e.vars
            ? `rgba(${o.color === 'default' ? e.vars.palette.action.activeChannel : e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
            : Z(
                o.color === 'default' ? e.palette.action.active : e.palette[o.color].main,
                e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': { backgroundColor: 'transparent' },
        },
      },
      o.color !== 'default' && {
        [`&.${F.checked}, &.${F.indeterminate}`]: { color: (e.vars || e).palette[o.color].main },
        [`&.${F.disabled}`]: { color: (e.vars || e).palette.action.disabled },
      }
    )
  ),
  fe = i.jsx(re, {}),
  me = i.jsx(ie, {}),
  ke = i.jsx(le, {}),
  Ce = I.forwardRef(function (o, t) {
    var r, c;
    const s = ee({ props: o, name: 'MuiCheckbox' }),
      {
        checkedIcon: u = fe,
        color: C = 'primary',
        icon: B = me,
        indeterminate: d = !1,
        indeterminateIcon: b = ke,
        inputProps: z,
        size: p = 'medium',
        className: P,
      } = s,
      y = O(s, ue),
      g = d ? b : B,
      h = d ? b : u,
      f = a({}, s, { color: C, indeterminate: d, size: p }),
      m = pe(f);
    return i.jsx(
      he,
      a(
        {
          type: 'checkbox',
          inputProps: a({ 'data-indeterminate': d }, z),
          icon: I.cloneElement(g, { fontSize: (r = g.props.fontSize) != null ? r : p }),
          checkedIcon: I.cloneElement(h, { fontSize: (c = h.props.fontSize) != null ? c : p }),
          ownerState: f,
          ref: t,
          className: H(m.root, P),
        },
        y,
        { classes: m }
      )
    );
  });
export { Ce as C, ae as S };
