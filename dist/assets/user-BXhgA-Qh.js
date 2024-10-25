import {
  r as d,
  a as A,
  g as H,
  s as j,
  _ as c,
  b as z,
  c as $,
  j as o,
  f as S,
  h as U,
  p as N,
  a3 as Se,
  U as X,
  a4 as ke,
  R as le,
  a5 as $e,
  l as F,
  a6 as ye,
  n as ae,
  J as de,
  a7 as Me,
  a8 as Le,
  B as Y,
  e as q,
  A as Ne,
  I as L,
  a9 as Ae,
  P as He,
  M as ze,
  m as pe,
  W as Ue,
  a2 as _e,
  aa as ue,
  y as De,
  i as Fe,
  S as Oe,
  ab as K,
  H as We,
} from './index-arL0TtPY.js';
import { C as Ee } from './config-global-CE93-cEV.js';
import { C as Ce } from './Checkbox-DJnU-ycA.js';
import { S as Ge, O as Ke } from './Select-CdYvyis1.js';
import { C as Ve } from './Card-xa2VU3rB.js';
import { F as Je, L as Qe } from './LastPage-DPs68dMy.js';
const je = d.createContext();
function Xe(e) {
  return A('MuiTable', e);
}
H('MuiTable', ['root', 'stickyHeader']);
const qe = ['className', 'component', 'padding', 'size', 'stickyHeader'],
  Ye = (e) => {
    const { classes: t, stickyHeader: s } = e;
    return U({ root: ['root', s && 'stickyHeader'] }, Xe, t);
  },
  Ze = j('table', {
    name: 'MuiTable',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: s } = e;
      return [t.root, s.stickyHeader && t.stickyHeader];
    },
  })(({ theme: e, ownerState: t }) =>
    c(
      {
        display: 'table',
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: 0,
        '& caption': c({}, e.typography.body2, {
          padding: e.spacing(2),
          color: (e.vars || e).palette.text.secondary,
          textAlign: 'left',
          captionSide: 'bottom',
        }),
      },
      t.stickyHeader && { borderCollapse: 'separate' }
    )
  ),
  ge = 'table',
  et = d.forwardRef(function (t, s) {
    const n = z({ props: t, name: 'MuiTable' }),
      {
        className: l,
        component: a = ge,
        padding: i = 'normal',
        size: r = 'medium',
        stickyHeader: u = !1,
      } = n,
      x = $(n, qe),
      g = c({}, n, { component: a, padding: i, size: r, stickyHeader: u }),
      v = Ye(g),
      C = d.useMemo(() => ({ padding: i, size: r, stickyHeader: u }), [i, r, u]);
    return o.jsx(je.Provider, {
      value: C,
      children: o.jsx(
        Ze,
        c(
          {
            as: a,
            role: a === ge ? null : 'table',
            ref: s,
            className: S(v.root, l),
            ownerState: g,
          },
          x
        )
      ),
    });
  }),
  Z = d.createContext();
function tt(e) {
  return A('MuiTableBody', e);
}
H('MuiTableBody', ['root']);
const ot = ['className', 'component'],
  st = (e) => {
    const { classes: t } = e;
    return U({ root: ['root'] }, tt, t);
  },
  nt = j('tbody', { name: 'MuiTableBody', slot: 'Root', overridesResolver: (e, t) => t.root })({
    display: 'table-row-group',
  }),
  at = { variant: 'body' },
  be = 'tbody',
  lt = d.forwardRef(function (t, s) {
    const n = z({ props: t, name: 'MuiTableBody' }),
      { className: l, component: a = be } = n,
      i = $(n, ot),
      r = c({}, n, { component: a }),
      u = st(r);
    return o.jsx(Z.Provider, {
      value: at,
      children: o.jsx(
        nt,
        c(
          {
            className: S(u.root, l),
            as: a,
            ref: s,
            role: a === be ? null : 'rowgroup',
            ownerState: r,
          },
          i
        )
      ),
    });
  });
function rt(e) {
  return A('MuiTableContainer', e);
}
H('MuiTableContainer', ['root']);
const it = ['className', 'component'],
  ct = (e) => {
    const { classes: t } = e;
    return U({ root: ['root'] }, rt, t);
  },
  dt = j('div', { name: 'MuiTableContainer', slot: 'Root', overridesResolver: (e, t) => t.root })({
    width: '100%',
    overflowX: 'auto',
  }),
  pt = d.forwardRef(function (t, s) {
    const n = z({ props: t, name: 'MuiTableContainer' }),
      { className: l, component: a = 'div' } = n,
      i = $(n, it),
      r = c({}, n, { component: a }),
      u = ct(r);
    return o.jsx(dt, c({ ref: s, as: a, className: S(u.root, l), ownerState: r }, i));
  });
function ut(e) {
  return A('MuiTableCell', e);
}
const gt = H('MuiTableCell', [
    'root',
    'head',
    'body',
    'footer',
    'sizeSmall',
    'sizeMedium',
    'paddingCheckbox',
    'paddingNone',
    'alignLeft',
    'alignCenter',
    'alignRight',
    'alignJustify',
    'stickyHeader',
  ]),
  bt = ['align', 'className', 'component', 'padding', 'scope', 'size', 'sortDirection', 'variant'],
  xt = (e) => {
    const { classes: t, variant: s, align: n, padding: l, size: a, stickyHeader: i } = e,
      r = {
        root: [
          'root',
          s,
          i && 'stickyHeader',
          n !== 'inherit' && `align${N(n)}`,
          l !== 'normal' && `padding${N(l)}`,
          `size${N(a)}`,
        ],
      };
    return U(r, ut, t);
  },
  ht = j('td', {
    name: 'MuiTableCell',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: s } = e;
      return [
        t.root,
        t[s.variant],
        t[`size${N(s.size)}`],
        s.padding !== 'normal' && t[`padding${N(s.padding)}`],
        s.align !== 'inherit' && t[`align${N(s.align)}`],
        s.stickyHeader && t.stickyHeader,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    c(
      {},
      e.typography.body2,
      {
        display: 'table-cell',
        verticalAlign: 'inherit',
        borderBottom: e.vars
          ? `1px solid ${e.vars.palette.TableCell.border}`
          : `1px solid
    ${e.palette.mode === 'light' ? Se(X(e.palette.divider, 1), 0.88) : ke(X(e.palette.divider, 1), 0.68)}`,
        textAlign: 'left',
        padding: 16,
      },
      t.variant === 'head' && {
        color: (e.vars || e).palette.text.primary,
        lineHeight: e.typography.pxToRem(24),
        fontWeight: e.typography.fontWeightMedium,
      },
      t.variant === 'body' && { color: (e.vars || e).palette.text.primary },
      t.variant === 'footer' && {
        color: (e.vars || e).palette.text.secondary,
        lineHeight: e.typography.pxToRem(21),
        fontSize: e.typography.pxToRem(12),
      },
      t.size === 'small' && {
        padding: '6px 16px',
        [`&.${gt.paddingCheckbox}`]: {
          width: 24,
          padding: '0 12px 0 16px',
          '& > *': { padding: 0 },
        },
      },
      t.padding === 'checkbox' && { width: 48, padding: '0 0 0 4px' },
      t.padding === 'none' && { padding: 0 },
      t.align === 'left' && { textAlign: 'left' },
      t.align === 'center' && { textAlign: 'center' },
      t.align === 'right' && { textAlign: 'right', flexDirection: 'row-reverse' },
      t.align === 'justify' && { textAlign: 'justify' },
      t.stickyHeader && {
        position: 'sticky',
        top: 0,
        zIndex: 2,
        backgroundColor: (e.vars || e).palette.background.default,
      }
    )
  ),
  R = d.forwardRef(function (t, s) {
    const n = z({ props: t, name: 'MuiTableCell' }),
      {
        align: l = 'inherit',
        className: a,
        component: i,
        padding: r,
        scope: u,
        size: x,
        sortDirection: g,
        variant: v,
      } = n,
      C = $(n, bt),
      h = d.useContext(je),
      m = d.useContext(Z),
      M = m && m.variant === 'head';
    let b;
    i ? (b = i) : (b = M ? 'th' : 'td');
    let p = u;
    b === 'td' ? (p = void 0) : !p && M && (p = 'col');
    const P = v || (m && m.variant),
      k = c({}, n, {
        align: l,
        component: b,
        padding: r || (h && h.padding ? h.padding : 'normal'),
        size: x || (h && h.size ? h.size : 'medium'),
        sortDirection: g,
        stickyHeader: P === 'head' && h && h.stickyHeader,
        variant: P,
      }),
      _ = xt(k);
    let T = null;
    return (
      g && (T = g === 'asc' ? 'ascending' : 'descending'),
      o.jsx(
        ht,
        c({ as: b, ref: s, className: S(_.root, a), 'aria-sort': T, scope: p, ownerState: k }, C)
      )
    );
  }),
  ft = le(
    o.jsx('path', { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' }),
    'KeyboardArrowLeft'
  ),
  mt = le(
    o.jsx('path', { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' }),
    'KeyboardArrowRight'
  ),
  vt = [
    'backIconButtonProps',
    'count',
    'disabled',
    'getItemAriaLabel',
    'nextIconButtonProps',
    'onPageChange',
    'page',
    'rowsPerPage',
    'showFirstButton',
    'showLastButton',
    'slots',
    'slotProps',
  ],
  yt = d.forwardRef(function (t, s) {
    var n, l, a, i, r, u, x, g;
    const {
        backIconButtonProps: v,
        count: C,
        disabled: h = !1,
        getItemAriaLabel: m,
        nextIconButtonProps: M,
        onPageChange: b,
        page: p,
        rowsPerPage: P,
        showFirstButton: k,
        showLastButton: _,
        slots: T = {},
        slotProps: f = {},
      } = t,
      te = $(t, vt),
      y = $e(),
      oe = (D) => {
        b(D, 0);
      },
      se = (D) => {
        b(D, p - 1);
      },
      O = (D) => {
        b(D, p + 1);
      },
      w = (D) => {
        b(D, Math.max(0, Math.ceil(C / P) - 1));
      },
      B = (n = T.firstButton) != null ? n : F,
      W = (l = T.lastButton) != null ? l : F,
      E = (a = T.nextButton) != null ? a : F,
      J = (i = T.previousButton) != null ? i : F,
      G = (r = T.firstButtonIcon) != null ? r : Je,
      Q = (u = T.lastButtonIcon) != null ? u : Qe,
      I = (x = T.nextButtonIcon) != null ? x : mt,
      re = (g = T.previousButtonIcon) != null ? g : ft,
      Pe = y ? W : B,
      Re = y ? E : J,
      Te = y ? J : E,
      we = y ? B : W,
      Be = y ? f.lastButton : f.firstButton,
      ie = y ? f.nextButton : f.previousButton,
      ce = y ? f.previousButton : f.nextButton,
      Ie = y ? f.firstButton : f.lastButton;
    return o.jsxs(
      'div',
      c({ ref: s }, te, {
        children: [
          k &&
            o.jsx(
              Pe,
              c(
                {
                  onClick: oe,
                  disabled: h || p === 0,
                  'aria-label': m('first', p),
                  title: m('first', p),
                },
                Be,
                {
                  children: y
                    ? o.jsx(Q, c({}, f.lastButtonIcon))
                    : o.jsx(G, c({}, f.firstButtonIcon)),
                }
              )
            ),
          o.jsx(
            Re,
            c(
              {
                onClick: se,
                disabled: h || p === 0,
                color: 'inherit',
                'aria-label': m('previous', p),
                title: m('previous', p),
              },
              ie ?? v,
              {
                children: y
                  ? o.jsx(I, c({}, f.nextButtonIcon))
                  : o.jsx(re, c({}, f.previousButtonIcon)),
              }
            )
          ),
          o.jsx(
            Te,
            c(
              {
                onClick: O,
                disabled: h || (C !== -1 ? p >= Math.ceil(C / P) - 1 : !1),
                color: 'inherit',
                'aria-label': m('next', p),
                title: m('next', p),
              },
              ce ?? M,
              {
                children: y
                  ? o.jsx(re, c({}, f.previousButtonIcon))
                  : o.jsx(I, c({}, f.nextButtonIcon)),
              }
            )
          ),
          _ &&
            o.jsx(
              we,
              c(
                {
                  onClick: w,
                  disabled: h || p >= Math.ceil(C / P) - 1,
                  'aria-label': m('last', p),
                  title: m('last', p),
                },
                Ie,
                {
                  children: y
                    ? o.jsx(G, c({}, f.firstButtonIcon))
                    : o.jsx(Q, c({}, f.lastButtonIcon)),
                }
              )
            ),
        ],
      })
    );
  });
function Ct(e) {
  return A('MuiTablePagination', e);
}
const V = H('MuiTablePagination', [
  'root',
  'toolbar',
  'spacer',
  'selectLabel',
  'selectRoot',
  'select',
  'selectIcon',
  'input',
  'menuItem',
  'displayedRows',
  'actions',
]);
var xe;
const jt = [
    'ActionsComponent',
    'backIconButtonProps',
    'className',
    'colSpan',
    'component',
    'count',
    'disabled',
    'getItemAriaLabel',
    'labelDisplayedRows',
    'labelRowsPerPage',
    'nextIconButtonProps',
    'onPageChange',
    'onRowsPerPageChange',
    'page',
    'rowsPerPage',
    'rowsPerPageOptions',
    'SelectProps',
    'showFirstButton',
    'showLastButton',
    'slotProps',
    'slots',
  ],
  Pt = j(R, { name: 'MuiTablePagination', slot: 'Root', overridesResolver: (e, t) => t.root })(
    ({ theme: e }) => ({
      overflow: 'auto',
      color: (e.vars || e).palette.text.primary,
      fontSize: e.typography.pxToRem(14),
      '&:last-child': { padding: 0 },
    })
  ),
  Rt = j(ye, {
    name: 'MuiTablePagination',
    slot: 'Toolbar',
    overridesResolver: (e, t) => c({ [`& .${V.actions}`]: t.actions }, t.toolbar),
  })(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up('xs')} and (orientation: landscape)`]: { minHeight: 52 },
    [e.breakpoints.up('sm')]: { minHeight: 52, paddingRight: 2 },
    [`& .${V.actions}`]: { flexShrink: 0, marginLeft: 20 },
  })),
  Tt = j('div', {
    name: 'MuiTablePagination',
    slot: 'Spacer',
    overridesResolver: (e, t) => t.spacer,
  })({ flex: '1 1 100%' }),
  wt = j('p', {
    name: 'MuiTablePagination',
    slot: 'SelectLabel',
    overridesResolver: (e, t) => t.selectLabel,
  })(({ theme: e }) => c({}, e.typography.body2, { flexShrink: 0 })),
  Bt = j(Ge, {
    name: 'MuiTablePagination',
    slot: 'Select',
    overridesResolver: (e, t) =>
      c(
        { [`& .${V.selectIcon}`]: t.selectIcon, [`& .${V.select}`]: t.select },
        t.input,
        t.selectRoot
      ),
  })({
    color: 'inherit',
    fontSize: 'inherit',
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${V.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: 'right',
      textAlignLast: 'right',
    },
  }),
  It = j(ae, {
    name: 'MuiTablePagination',
    slot: 'MenuItem',
    overridesResolver: (e, t) => t.menuItem,
  })({}),
  St = j('p', {
    name: 'MuiTablePagination',
    slot: 'DisplayedRows',
    overridesResolver: (e, t) => t.displayedRows,
  })(({ theme: e }) => c({}, e.typography.body2, { flexShrink: 0 }));
function kt({ from: e, to: t, count: s }) {
  return `${e}–${t} of ${s !== -1 ? s : `more than ${t}`}`;
}
function $t(e) {
  return `Go to ${e} page`;
}
const Mt = (e) => {
    const { classes: t } = e;
    return U(
      {
        root: ['root'],
        toolbar: ['toolbar'],
        spacer: ['spacer'],
        selectLabel: ['selectLabel'],
        select: ['select'],
        input: ['input'],
        selectIcon: ['selectIcon'],
        menuItem: ['menuItem'],
        displayedRows: ['displayedRows'],
        actions: ['actions'],
      },
      Ct,
      t
    );
  },
  Lt = d.forwardRef(function (t, s) {
    var n;
    const l = z({ props: t, name: 'MuiTablePagination' }),
      {
        ActionsComponent: a = yt,
        backIconButtonProps: i,
        className: r,
        colSpan: u,
        component: x = R,
        count: g,
        disabled: v = !1,
        getItemAriaLabel: C = $t,
        labelDisplayedRows: h = kt,
        labelRowsPerPage: m = 'Rows per page:',
        nextIconButtonProps: M,
        onPageChange: b,
        onRowsPerPageChange: p,
        page: P,
        rowsPerPage: k,
        rowsPerPageOptions: _ = [10, 25, 50, 100],
        SelectProps: T = {},
        showFirstButton: f = !1,
        showLastButton: te = !1,
        slotProps: y = {},
        slots: oe = {},
      } = l,
      se = $(l, jt),
      O = l,
      w = Mt(O),
      B = (n = y == null ? void 0 : y.select) != null ? n : T,
      W = B.native ? 'option' : It;
    let E;
    (x === R || x === 'td') && (E = u || 1e3);
    const J = de(B.id),
      G = de(B.labelId),
      Q = () => (g === -1 ? (P + 1) * k : k === -1 ? g : Math.min(g, (P + 1) * k));
    return o.jsx(
      Pt,
      c({ colSpan: E, ref: s, as: x, ownerState: O, className: S(w.root, r) }, se, {
        children: o.jsxs(Rt, {
          className: w.toolbar,
          children: [
            o.jsx(Tt, { className: w.spacer }),
            _.length > 1 && o.jsx(wt, { className: w.selectLabel, id: G, children: m }),
            _.length > 1 &&
              o.jsx(
                Bt,
                c(
                  { variant: 'standard' },
                  !B.variant && { input: xe || (xe = o.jsx(Me, {})) },
                  { value: k, onChange: p, id: J, labelId: G },
                  B,
                  {
                    classes: c({}, B.classes, {
                      root: S(w.input, w.selectRoot, (B.classes || {}).root),
                      select: S(w.select, (B.classes || {}).select),
                      icon: S(w.selectIcon, (B.classes || {}).icon),
                    }),
                    disabled: v,
                    children: _.map((I) =>
                      d.createElement(
                        W,
                        c({}, !Le(W) && { ownerState: O }, {
                          className: w.menuItem,
                          key: I.label ? I.label : I,
                          value: I.value ? I.value : I,
                        }),
                        I.label ? I.label : I
                      )
                    ),
                  }
                )
              ),
            o.jsx(St, {
              className: w.displayedRows,
              children: h({
                from: g === 0 ? 0 : P * k + 1,
                to: Q(),
                count: g === -1 ? -1 : g,
                page: P,
              }),
            }),
            o.jsx(a, {
              className: w.actions,
              backIconButtonProps: i,
              count: g,
              nextIconButtonProps: M,
              onPageChange: b,
              page: P,
              rowsPerPage: k,
              showFirstButton: f,
              showLastButton: te,
              slotProps: y.actions,
              slots: oe.actions,
              getItemAriaLabel: C,
              disabled: v,
            }),
          ],
        }),
      })
    );
  });
function Nt(e) {
  return A('MuiTableRow', e);
}
const he = H('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']),
  At = ['className', 'component', 'hover', 'selected'],
  Ht = (e) => {
    const { classes: t, selected: s, hover: n, head: l, footer: a } = e;
    return U({ root: ['root', s && 'selected', n && 'hover', l && 'head', a && 'footer'] }, Nt, t);
  },
  zt = j('tr', {
    name: 'MuiTableRow',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: s } = e;
      return [t.root, s.head && t.head, s.footer && t.footer];
    },
  })(({ theme: e }) => ({
    color: 'inherit',
    display: 'table-row',
    verticalAlign: 'middle',
    outline: 0,
    [`&.${he.hover}:hover`]: { backgroundColor: (e.vars || e).palette.action.hover },
    [`&.${he.selected}`]: {
      backgroundColor: e.vars
        ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
        : X(e.palette.primary.main, e.palette.action.selectedOpacity),
      '&:hover': {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
          : X(
              e.palette.primary.main,
              e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
            ),
      },
    },
  })),
  fe = 'tr',
  ee = d.forwardRef(function (t, s) {
    const n = z({ props: t, name: 'MuiTableRow' }),
      { className: l, component: a = fe, hover: i = !1, selected: r = !1 } = n,
      u = $(n, At),
      x = d.useContext(Z),
      g = c({}, n, {
        component: a,
        hover: i,
        selected: r,
        head: x && x.variant === 'head',
        footer: x && x.variant === 'footer',
      }),
      v = Ht(g);
    return o.jsx(
      zt,
      c({ as: a, ref: s, className: S(v.root, l), role: a === fe ? null : 'row', ownerState: g }, u)
    );
  });
function Ut({ searchQuery: e, ...t }) {
  return o.jsx(ee, {
    ...t,
    children: o.jsx(R, {
      align: 'center',
      colSpan: 7,
      children: o.jsxs(Y, {
        sx: { py: 15, textAlign: 'center' },
        children: [
          o.jsx(q, { variant: 'h6', sx: { mb: 1 }, children: 'Not found' }),
          o.jsxs(q, {
            variant: 'body2',
            children: [
              'No results found for  ',
              o.jsxs('strong', { children: ['"', e, '"'] }),
              '.',
              o.jsx('br', {}),
              ' Try checking for typos or using complete words.',
            ],
          }),
        ],
      }),
    }),
  });
}
function _t({ row: e, selected: t, onSelectRow: s }) {
  const [n, l] = d.useState(null),
    a = d.useCallback((r) => {
      l(r.currentTarget);
    }, []),
    i = d.useCallback(() => {
      l(null);
    }, []);
  return o.jsxs(o.Fragment, {
    children: [
      o.jsxs(ee, {
        hover: !0,
        tabIndex: -1,
        role: 'checkbox',
        selected: t,
        children: [
          o.jsx(R, {
            padding: 'checkbox',
            children: o.jsx(Ce, { disableRipple: !0, checked: t, onChange: s }),
          }),
          o.jsx(R, {
            component: 'th',
            scope: 'row',
            children: o.jsxs(Y, {
              gap: 2,
              display: 'flex',
              alignItems: 'center',
              children: [o.jsx(Ne, { alt: e.name, src: e.avatarUrl }), e.name],
            }),
          }),
          o.jsx(R, { children: e.company }),
          o.jsx(R, { children: e.role }),
          o.jsx(R, {
            align: 'center',
            children: e.isVerified
              ? o.jsx(L, {
                  width: 22,
                  icon: 'solar:check-circle-bold',
                  sx: { color: 'success.main' },
                })
              : '-',
          }),
          o.jsx(R, {
            children: o.jsx(Ae, {
              color: (e.status === 'banned' && 'error') || 'success',
              children: e.status,
            }),
          }),
          o.jsx(R, {
            align: 'right',
            children: o.jsx(F, {
              onClick: a,
              children: o.jsx(L, { icon: 'eva:more-vertical-fill' }),
            }),
          }),
        ],
      }),
      o.jsx(He, {
        open: !!n,
        anchorEl: n,
        onClose: i,
        anchorOrigin: { vertical: 'top', horizontal: 'left' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
        children: o.jsxs(ze, {
          disablePadding: !0,
          sx: {
            p: 0.5,
            gap: 0.5,
            width: 140,
            display: 'flex',
            flexDirection: 'column',
            [`& .${pe.root}`]: {
              px: 1,
              gap: 2,
              borderRadius: 0.75,
              [`&.${pe.selected}`]: { bgcolor: 'action.selected' },
            },
          },
          children: [
            o.jsxs(ae, { onClick: i, children: [o.jsx(L, { icon: 'solar:pen-bold' }), 'Edit'] }),
            o.jsxs(ae, {
              onClick: i,
              sx: { color: 'error.main' },
              children: [o.jsx(L, { icon: 'solar:trash-bin-trash-bold' }), 'Delete'],
            }),
          ],
        }),
      }),
    ],
  });
}
function Dt(e) {
  return A('MuiTableHead', e);
}
H('MuiTableHead', ['root']);
const Ft = ['className', 'component'],
  Ot = (e) => {
    const { classes: t } = e;
    return U({ root: ['root'] }, Dt, t);
  },
  Wt = j('thead', { name: 'MuiTableHead', slot: 'Root', overridesResolver: (e, t) => t.root })({
    display: 'table-header-group',
  }),
  Et = { variant: 'head' },
  me = 'thead',
  Gt = d.forwardRef(function (t, s) {
    const n = z({ props: t, name: 'MuiTableHead' }),
      { className: l, component: a = me } = n,
      i = $(n, Ft),
      r = c({}, n, { component: a }),
      u = Ot(r);
    return o.jsx(Z.Provider, {
      value: Et,
      children: o.jsx(
        Wt,
        c(
          {
            as: a,
            className: S(u.root, l),
            ref: s,
            role: a === me ? null : 'rowgroup',
            ownerState: r,
          },
          i
        )
      ),
    });
  }),
  Kt = le(
    o.jsx('path', { d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' }),
    'ArrowDownward'
  );
function Vt(e) {
  return A('MuiTableSortLabel', e);
}
const ne = H('MuiTableSortLabel', [
    'root',
    'active',
    'icon',
    'iconDirectionDesc',
    'iconDirectionAsc',
  ]),
  Jt = ['active', 'children', 'className', 'direction', 'hideSortIcon', 'IconComponent'],
  Qt = (e) => {
    const { classes: t, direction: s, active: n } = e,
      l = { root: ['root', n && 'active'], icon: ['icon', `iconDirection${N(s)}`] };
    return U(l, Vt, t);
  },
  Xt = j(Ue, {
    name: 'MuiTableSortLabel',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: s } = e;
      return [t.root, s.active && t.active];
    },
  })(({ theme: e }) => ({
    cursor: 'pointer',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    flexDirection: 'inherit',
    alignItems: 'center',
    '&:focus': { color: (e.vars || e).palette.text.secondary },
    '&:hover': { color: (e.vars || e).palette.text.secondary, [`& .${ne.icon}`]: { opacity: 0.5 } },
    [`&.${ne.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${ne.icon}`]: { opacity: 1, color: (e.vars || e).palette.text.secondary },
    },
  })),
  qt = j('span', {
    name: 'MuiTableSortLabel',
    slot: 'Icon',
    overridesResolver: (e, t) => {
      const { ownerState: s } = e;
      return [t.icon, t[`iconDirection${N(s.direction)}`]];
    },
  })(({ theme: e, ownerState: t }) =>
    c(
      {
        fontSize: 18,
        marginRight: 4,
        marginLeft: 4,
        opacity: 0,
        transition: e.transitions.create(['opacity', 'transform'], {
          duration: e.transitions.duration.shorter,
        }),
        userSelect: 'none',
      },
      t.direction === 'desc' && { transform: 'rotate(0deg)' },
      t.direction === 'asc' && { transform: 'rotate(180deg)' }
    )
  ),
  Yt = d.forwardRef(function (t, s) {
    const n = z({ props: t, name: 'MuiTableSortLabel' }),
      {
        active: l = !1,
        children: a,
        className: i,
        direction: r = 'asc',
        hideSortIcon: u = !1,
        IconComponent: x = Kt,
      } = n,
      g = $(n, Jt),
      v = c({}, n, { active: l, direction: r, hideSortIcon: u, IconComponent: x }),
      C = Qt(v);
    return o.jsxs(
      Xt,
      c(
        { className: S(C.root, i), component: 'span', disableRipple: !0, ownerState: v, ref: s },
        g,
        {
          children: [a, u && !l ? null : o.jsx(qt, { as: x, className: S(C.icon), ownerState: v })],
        }
      )
    );
  }),
  Zt = {
    border: 0,
    margin: -1,
    padding: 0,
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    clip: 'rect(0 0 0 0)',
  };
function eo(e, t, s) {
  return e ? Math.max(0, (1 + e) * t - s) : 0;
}
function ve(e, t, s) {
  return t[s] < e[s] ? -1 : t[s] > e[s] ? 1 : 0;
}
function to(e, t) {
  return e === 'desc' ? (s, n) => ve(s, n, t) : (s, n) => -ve(s, n, t);
}
function oo({ inputData: e, comparator: t, filterName: s }) {
  const n = e.map((l, a) => [l, a]);
  return (
    n.sort((l, a) => {
      const i = t(l[0], a[0]);
      return i !== 0 ? i : l[1] - a[1];
    }),
    (e = n.map((l) => l[0])),
    s && (e = e.filter((l) => l.name.toLowerCase().indexOf(s.toLowerCase()) !== -1)),
    e
  );
}
function so({
  order: e,
  onSort: t,
  orderBy: s,
  rowCount: n,
  headLabel: l,
  numSelected: a,
  onSelectAllRows: i,
}) {
  return o.jsx(Gt, {
    children: o.jsxs(ee, {
      children: [
        o.jsx(R, {
          padding: 'checkbox',
          children: o.jsx(Ce, {
            indeterminate: a > 0 && a < n,
            checked: n > 0 && a === n,
            onChange: (r) => i(r.target.checked),
          }),
        }),
        l.map((r) =>
          o.jsx(
            R,
            {
              align: r.align || 'left',
              sortDirection: s === r.id ? e : !1,
              sx: { width: r.width, minWidth: r.minWidth },
              children: o.jsxs(Yt, {
                hideSortIcon: !0,
                active: s === r.id,
                direction: s === r.id ? e : 'asc',
                onClick: () => t(r.id),
                children: [
                  r.label,
                  s === r.id
                    ? o.jsx(Y, {
                        sx: { ...Zt },
                        children: e === 'desc' ? 'sorted descending' : 'sorted ascending',
                      })
                    : null,
                ],
              }),
            },
            r.id
          )
        ),
      ],
    }),
  });
}
function no({ emptyRows: e, height: t, sx: s, ...n }) {
  return e
    ? o.jsx(ee, {
        sx: { ...(t && { height: t * e }), ...s },
        ...n,
        children: o.jsx(R, { colSpan: 9 }),
      })
    : null;
}
function ao({ numSelected: e, filterName: t, onFilterName: s }) {
  return o.jsxs(ye, {
    sx: {
      height: 96,
      display: 'flex',
      justifyContent: 'space-between',
      p: (n) => n.spacing(0, 1, 0, 3),
      ...(e > 0 && { color: 'primary.main', bgcolor: 'primary.lighter' }),
    },
    children: [
      e > 0
        ? o.jsxs(q, { component: 'div', variant: 'subtitle1', children: [e, ' selected'] })
        : o.jsx(Ke, {
            fullWidth: !0,
            value: t,
            onChange: s,
            placeholder: 'Search user...',
            startAdornment: o.jsx(_e, {
              position: 'start',
              children: o.jsx(L, {
                width: 20,
                icon: 'eva:search-fill',
                sx: { color: 'text.disabled' },
              }),
            }),
            sx: { maxWidth: 320 },
          }),
      e > 0
        ? o.jsx(ue, {
            title: 'Delete',
            children: o.jsx(F, { children: o.jsx(L, { icon: 'solar:trash-bin-trash-bold' }) }),
          })
        : o.jsx(ue, {
            title: 'Filter list',
            children: o.jsx(F, { children: o.jsx(L, { icon: 'ic:round-filter-list' }) }),
          }),
    ],
  });
}
function lo() {
  const e = ro(),
    [t, s] = d.useState(''),
    n = oo({ inputData: K, comparator: to(e.order, e.orderBy), filterName: t }),
    l = !n.length && !!t;
  return o.jsxs(De, {
    children: [
      o.jsxs(Y, {
        display: 'flex',
        alignItems: 'center',
        mb: 5,
        children: [
          o.jsx(q, { variant: 'h4', flexGrow: 1, children: 'Users' }),
          o.jsx(Fe, {
            variant: 'contained',
            color: 'inherit',
            startIcon: o.jsx(L, { icon: 'mingcute:add-line' }),
            children: 'New user',
          }),
        ],
      }),
      o.jsxs(Ve, {
        children: [
          o.jsx(ao, {
            numSelected: e.selected.length,
            filterName: t,
            onFilterName: (a) => {
              s(a.target.value), e.onResetPage();
            },
          }),
          o.jsx(Oe, {
            children: o.jsx(pt, {
              sx: { overflow: 'unset' },
              children: o.jsxs(et, {
                sx: { minWidth: 800 },
                children: [
                  o.jsx(so, {
                    order: e.order,
                    orderBy: e.orderBy,
                    rowCount: K.length,
                    numSelected: e.selected.length,
                    onSort: e.onSort,
                    onSelectAllRows: (a) =>
                      e.onSelectAllRows(
                        a,
                        K.map((i) => i.id)
                      ),
                    headLabel: [
                      { id: 'name', label: 'Name' },
                      { id: 'company', label: 'Company' },
                      { id: 'role', label: 'Role' },
                      { id: 'isVerified', label: 'Verified', align: 'center' },
                      { id: 'status', label: 'Status' },
                      { id: '' },
                    ],
                  }),
                  o.jsxs(lt, {
                    children: [
                      n
                        .slice(e.page * e.rowsPerPage, e.page * e.rowsPerPage + e.rowsPerPage)
                        .map((a) =>
                          o.jsx(
                            _t,
                            {
                              row: a,
                              selected: e.selected.includes(a.id),
                              onSelectRow: () => e.onSelectRow(a.id),
                            },
                            a.id
                          )
                        ),
                      o.jsx(no, { height: 68, emptyRows: eo(e.page, e.rowsPerPage, K.length) }),
                      l && o.jsx(Ut, { searchQuery: t }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          o.jsx(Lt, {
            component: 'div',
            page: e.page,
            count: K.length,
            rowsPerPage: e.rowsPerPage,
            onPageChange: e.onChangePage,
            rowsPerPageOptions: [5, 10, 25],
            onRowsPerPageChange: e.onChangeRowsPerPage,
          }),
        ],
      }),
    ],
  });
}
function ro() {
  const [e, t] = d.useState(0),
    [s, n] = d.useState('name'),
    [l, a] = d.useState(5),
    [i, r] = d.useState([]),
    [u, x] = d.useState('asc'),
    g = d.useCallback(
      (b) => {
        x(s === b && u === 'asc' ? 'desc' : 'asc'), n(b);
      },
      [u, s]
    ),
    v = d.useCallback((b, p) => {
      if (b) {
        r(p);
        return;
      }
      r([]);
    }, []),
    C = d.useCallback(
      (b) => {
        const p = i.includes(b) ? i.filter((P) => P !== b) : [...i, b];
        r(p);
      },
      [i]
    ),
    h = d.useCallback(() => {
      t(0);
    }, []),
    m = d.useCallback((b, p) => {
      t(p);
    }, []),
    M = d.useCallback(
      (b) => {
        a(parseInt(b.target.value, 10)), h();
      },
      [h]
    );
  return {
    page: e,
    order: u,
    onSort: g,
    orderBy: s,
    selected: i,
    rowsPerPage: l,
    onSelectRow: C,
    onResetPage: h,
    onChangePage: m,
    onSelectAllRows: v,
    onChangeRowsPerPage: M,
  };
}
function xo() {
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(We, { children: o.jsxs('title', { children: [' ', `Users - ${Ee.appName}`] }) }),
      o.jsx(lo, {}),
    ],
  });
}
export { xo as default };
