import {
  j as r,
  A as Fo,
  F as Eo,
  B as he,
  I as ao,
  e as go,
  G as Vo,
  x as Bo,
  v as So,
  r as b,
  i as Ao,
  P as Ho,
  M as Wo,
  m as mo,
  n as _o,
  J as Ko,
  K as uo,
  N as Uo,
  O as oo,
  Q as Go,
  _ as y,
  R as qo,
  g as Lo,
  a as To,
  s as B,
  p as x,
  U as V,
  b as jo,
  c as He,
  V as Do,
  W as vo,
  f as X,
  h as wo,
  X as fo,
  Y as be,
  l as zo,
  Z as No,
  $ as Mo,
  a0 as Jo,
  a1 as Qo,
  a2 as Xo,
  y as Yo,
  z as Co,
  H as Zo,
} from './index-arL0TtPY.js';
import { C as et } from './config-global-CE93-cEV.js';
import { b as ot, G as $o } from './format-number-CdWNcxiZ.js';
import { C as tt } from './Card-xa2VU3rB.js';
import { o as Io, f as Ae, A as at } from './Select-CdYvyis1.js';
import { T as nt } from './TextField-BzGoe1R1.js';
import { P as lt } from './Pagination-DdiF98Sk.js';
import './LastPage-DPs68dMy.js';
function rt({ sx: e, post: t, latestPost: s, latestPostLarge: i, ...f }) {
  const $ = r.jsx(Fo, {
      alt: t.author.name,
      src: t.author.avatarUrl,
      sx: { left: 24, zIndex: 9, bottom: -24, position: 'absolute', ...((i || s) && { top: 24 }) },
    }),
    I = r.jsx(Eo, {
      color: 'inherit',
      variant: 'subtitle2',
      underline: 'hover',
      sx: {
        height: 44,
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ...(i && { typography: 'h5', height: 60 }),
        ...((i || s) && { color: 'common.white' }),
      },
      children: t.title,
    }),
    d = r.jsx(he, {
      gap: 1.5,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      sx: { mt: 3, color: 'text.disabled' },
      children: [
        { number: t.totalComments, icon: 'solar:chat-round-dots-bold' },
        { number: t.totalViews, icon: 'solar:eye-bold' },
        { number: t.totalShares, icon: 'solar:share-bold' },
      ].map((R, ae) =>
        r.jsxs(
          he,
          {
            display: 'flex',
            sx: { ...((i || s) && { opacity: 0.64, color: 'common.white' }) },
            children: [
              r.jsx(ao, { width: 16, icon: R.icon, sx: { mr: 0.5 } }),
              r.jsx(go, { variant: 'caption', children: ot(R.number) }),
            ],
          },
          ae
        )
      ),
    }),
    k = r.jsx(he, {
      component: 'img',
      alt: t.title,
      src: t.coverUrl,
      sx: { top: 0, width: 1, height: 1, objectFit: 'cover', position: 'absolute' },
    }),
    S = r.jsx(go, {
      variant: 'caption',
      component: 'div',
      sx: {
        mb: 1,
        color: 'text.disabled',
        ...((i || s) && { opacity: 0.48, color: 'common.white' }),
      },
      children: Vo(t.postedAt),
    }),
    m = r.jsx(Bo, {
      width: 88,
      height: 36,
      src: '/assets/icons/shape-avatar.svg',
      sx: {
        left: 0,
        zIndex: 9,
        bottom: -16,
        position: 'absolute',
        color: 'background.paper',
        ...((i || s) && { display: 'none' }),
      },
    });
  return r.jsxs(tt, {
    sx: e,
    ...f,
    children: [
      r.jsxs(he, {
        sx: (R) => ({
          position: 'relative',
          pt: 'calc(100% * 3 / 4)',
          ...((i || s) && {
            pt: 'calc(100% * 4 / 3)',
            '&:after': {
              top: 0,
              content: "''",
              width: '100%',
              height: '100%',
              position: 'absolute',
              bgcolor: So(R.palette.grey['900Channel'], 0.72),
            },
          }),
          ...(i && { pt: { xs: 'calc(100% * 4 / 3)', sm: 'calc(100% * 3 / 4.66)' } }),
        }),
        children: [m, $, k],
      }),
      r.jsxs(he, {
        sx: (R) => ({
          p: R.spacing(6, 3, 3, 3),
          ...((i || s) && { width: 1, bottom: 0, position: 'absolute' }),
        }),
        children: [S, I, d],
      }),
    ],
  });
}
function it({ options: e, sortBy: t, onSort: s, sx: i, ...f }) {
  var S;
  const [$, I] = b.useState(null),
    d = b.useCallback((m) => {
      I(m.currentTarget);
    }, []),
    k = b.useCallback(() => {
      I(null);
    }, []);
  return r.jsxs(r.Fragment, {
    children: [
      r.jsx(Ao, {
        disableRipple: !0,
        color: 'inherit',
        onClick: d,
        endIcon: r.jsx(ao, {
          icon: $ ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill',
          sx: { ml: -0.5 },
        }),
        sx: { bgcolor: (m) => So(m.vars.palette.grey['500Channel'], 0.08), ...i },
        ...f,
        children: (S = e.find((m) => m.value === t)) == null ? void 0 : S.label,
      }),
      r.jsx(Ho, {
        open: !!$,
        anchorEl: $,
        onClose: k,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
        children: r.jsx(Wo, {
          disablePadding: !0,
          sx: {
            p: 0.5,
            gap: 0.5,
            width: 160,
            display: 'flex',
            flexDirection: 'column',
            [`& .${mo.root}`]: {
              px: 1,
              gap: 2,
              borderRadius: 0.75,
              [`&.${mo.selected}`]: { bgcolor: 'action.selected' },
            },
          },
          children: e.map((m) =>
            r.jsx(
              _o,
              {
                selected: m.value === t,
                onClick: () => {
                  s(m.value), k();
                },
                children: m.label,
              },
              m.value
            )
          ),
        }),
      }),
    ],
  });
}
function yo(e) {
  return typeof e.normalize < 'u' ? e.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : e;
}
function st(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: s = !0,
    limit: i,
    matchFrom: f = 'any',
    stringify: $,
    trim: I = !1,
  } = e;
  return (d, { inputValue: k, getOptionLabel: S }) => {
    let m = I ? k.trim() : k;
    s && (m = m.toLowerCase()), t && (m = yo(m));
    const R = m
      ? d.filter((ae) => {
          let w = ($ || S)(ae);
          return (
            s && (w = w.toLowerCase()),
            t && (w = yo(w)),
            f === 'start' ? w.indexOf(m) === 0 : w.indexOf(m) > -1
          );
        })
      : d;
    return typeof i == 'number' ? R.slice(0, i) : R;
  };
}
function to(e, t) {
  for (let s = 0; s < e.length; s += 1) if (t(e[s])) return s;
  return -1;
}
const ct = st(),
  Oo = 5,
  pt = (e) => {
    var t;
    return (
      e.current !== null &&
      ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement))
    );
  };
function ut(e) {
  const {
      unstable_isActiveElementInListbox: t = pt,
      unstable_classNamePrefix: s = 'Mui',
      autoComplete: i = !1,
      autoHighlight: f = !1,
      autoSelect: $ = !1,
      blurOnSelect: I = !1,
      clearOnBlur: d = !e.freeSolo,
      clearOnEscape: k = !1,
      componentName: S = 'useAutocomplete',
      defaultValue: m = e.multiple ? [] : null,
      disableClearable: R = !1,
      disableCloseOnSelect: ae = !1,
      disabled: w,
      disabledItemsFocusable: H = !1,
      disableListWrap: xe = !1,
      filterOptions: Le = ct,
      filterSelectedOptions: ce = !1,
      freeSolo: Y = !1,
      getOptionDisabled: G,
      getOptionKey: Te,
      getOptionLabel: me = (a) => {
        var o;
        return (o = a.label) != null ? o : a;
      },
      groupBy: ne,
      handleHomeEndKeys: Z = !e.freeSolo,
      id: je,
      includeInputInList: De = !1,
      inputValue: ve,
      isOptionEqualToValue: ee = (a, o) => a === o,
      multiple: h = !1,
      onChange: le,
      onClose: W,
      onHighlightChange: Ce,
      onInputChange: _,
      onOpen: pe,
      open: we,
      openOnFocus: L = !1,
      options: ze,
      readOnly: ue = !1,
      selectOnFocus: Ne = !e.freeSolo,
      value: We,
    } = e,
    F = Ko(je);
  let z = me;
  z = (a) => {
    const o = me(a);
    return typeof o != 'string' ? String(o) : o;
  };
  const Me = b.useRef(!1),
    _e = b.useRef(!0),
    A = b.useRef(null),
    E = b.useRef(null),
    [$e, no] = b.useState(null),
    [N, Fe] = b.useState(-1),
    Ke = f ? 0 : -1,
    j = b.useRef(Ke),
    [c, bo] = uo({ controlled: We, default: m, name: S }),
    [v, re] = uo({ controlled: ve, default: '', name: S, state: 'inputValue' }),
    [Ie, Ue] = b.useState(!1),
    de = b.useCallback(
      (a, o) => {
        if (!(h ? c.length < o.length : o !== null) && !d) return;
        let n;
        if (h) n = '';
        else if (o == null) n = '';
        else {
          const p = z(o);
          n = typeof p == 'string' ? p : '';
        }
        v !== n && (re(n), _ && _(a, n, 'reset'));
      },
      [z, v, h, _, re, d, c]
    ),
    [se, Ge] = uo({ controlled: we, default: !1, name: S, state: 'open' }),
    [lo, qe] = b.useState(!0),
    Je = !h && c != null && v === z(c),
    M = se && !ue,
    O = M
      ? Le(
          ze.filter((a) => !(ce && (h ? c : [c]).some((o) => o !== null && ee(a, o)))),
          { inputValue: Je && lo ? '' : v, getOptionLabel: z }
        )
      : [],
    q = Uo({ filteredOptions: O, value: c, inputValue: v });
  b.useEffect(() => {
    const a = c !== q.value;
    (Ie && !a) || (Y && !a) || de(null, c);
  }, [c, de, Ie, q.value, Y]);
  const Ee = se && O.length > 0 && !ue,
    ye = oo((a) => {
      a === -1 ? A.current.focus() : $e.querySelector(`[data-tag-index="${a}"]`).focus();
    });
  b.useEffect(() => {
    h && N > c.length - 1 && (Fe(-1), ye(-1));
  }, [c, h, N, ye]);
  function Oe(a, o) {
    if (!E.current || a < 0 || a >= O.length) return -1;
    let l = a;
    for (;;) {
      const n = E.current.querySelector(`[data-option-index="${l}"]`),
        p = H ? !1 : !n || n.disabled || n.getAttribute('aria-disabled') === 'true';
      if (n && n.hasAttribute('tabindex') && !p) return l;
      if ((o === 'next' ? (l = (l + 1) % O.length) : (l = (l - 1 + O.length) % O.length), l === a))
        return -1;
    }
  }
  const oe = oo(({ event: a, index: o, reason: l = 'auto' }) => {
      if (
        ((j.current = o),
        o === -1
          ? A.current.removeAttribute('aria-activedescendant')
          : A.current.setAttribute('aria-activedescendant', `${F}-option-${o}`),
        Ce && Ce(a, o === -1 ? null : O[o], l),
        !E.current)
      )
        return;
      const n = E.current.querySelector(`[role="option"].${s}-focused`);
      n && (n.classList.remove(`${s}-focused`), n.classList.remove(`${s}-focusVisible`));
      let p = E.current;
      if (
        (E.current.getAttribute('role') !== 'listbox' &&
          (p = E.current.parentElement.querySelector('[role="listbox"]')),
        !p)
      )
        return;
      if (o === -1) {
        p.scrollTop = 0;
        return;
      }
      const C = E.current.querySelector(`[data-option-index="${o}"]`);
      if (
        C &&
        (C.classList.add(`${s}-focused`),
        l === 'keyboard' && C.classList.add(`${s}-focusVisible`),
        p.scrollHeight > p.clientHeight && l !== 'mouse' && l !== 'touch')
      ) {
        const P = C,
          U = p.clientHeight + p.scrollTop,
          eo = P.offsetTop + P.offsetHeight;
        eo > U
          ? (p.scrollTop = eo - p.clientHeight)
          : P.offsetTop - P.offsetHeight * (ne ? 1.3 : 0) < p.scrollTop &&
            (p.scrollTop = P.offsetTop - P.offsetHeight * (ne ? 1.3 : 0));
      }
    }),
    J = oo(({ event: a, diff: o, direction: l = 'next', reason: n = 'auto' }) => {
      if (!M) return;
      const C = Oe(
        (() => {
          const P = O.length - 1;
          if (o === 'reset') return Ke;
          if (o === 'start') return 0;
          if (o === 'end') return P;
          const U = j.current + o;
          return U < 0
            ? U === -1 && De
              ? -1
              : (xe && j.current !== -1) || Math.abs(o) > 1
                ? 0
                : P
            : U > P
              ? U === P + 1 && De
                ? -1
                : xe || Math.abs(o) > 1
                  ? P
                  : 0
              : U;
        })(),
        l
      );
      if ((oe({ index: C, reason: n, event: a }), i && o !== 'reset'))
        if (C === -1) A.current.value = v;
        else {
          const P = z(O[C]);
          (A.current.value = P),
            P.toLowerCase().indexOf(v.toLowerCase()) === 0 &&
              v.length > 0 &&
              A.current.setSelectionRange(v.length, P.length);
        }
    }),
    Pe = () => {
      const a = (o, l) => {
        const n = o ? z(o) : '',
          p = l ? z(l) : '';
        return n === p;
      };
      if (
        j.current !== -1 &&
        q.filteredOptions &&
        q.filteredOptions.length !== O.length &&
        q.inputValue === v &&
        (h
          ? c.length === q.value.length && q.value.every((o, l) => z(c[l]) === z(o))
          : a(q.value, c))
      ) {
        const o = q.filteredOptions[j.current];
        if (o) return to(O, (l) => z(l) === z(o));
      }
      return -1;
    },
    Ve = b.useCallback(() => {
      if (!M) return;
      const a = Pe();
      if (a !== -1) {
        j.current = a;
        return;
      }
      const o = h ? c[0] : c;
      if (O.length === 0 || o == null) {
        J({ diff: 'reset' });
        return;
      }
      if (E.current) {
        if (o != null) {
          const l = O[j.current];
          if (h && l && to(c, (p) => ee(l, p)) !== -1) return;
          const n = to(O, (p) => ee(p, o));
          n === -1 ? J({ diff: 'reset' }) : oe({ index: n });
          return;
        }
        if (j.current >= O.length - 1) {
          oe({ index: O.length - 1 });
          return;
        }
        oe({ index: j.current });
      }
    }, [O.length, h ? !1 : c, ce, J, oe, M, v, h]),
    ro = oo((a) => {
      Go(E, a), a && Ve();
    });
  b.useEffect(() => {
    Ve();
  }, [Ve]);
  const K = (a) => {
      se || (Ge(!0), qe(!0), pe && pe(a));
    },
    ie = (a, o) => {
      se && (Ge(!1), W && W(a, o));
    },
    te = (a, o, l, n) => {
      if (h) {
        if (c.length === o.length && c.every((p, C) => p === o[C])) return;
      } else if (c === o) return;
      le && le(a, o, l, n), bo(o);
    },
    ke = b.useRef(!1),
    fe = (a, o, l = 'selectOption', n = 'options') => {
      let p = l,
        C = o;
      if (h) {
        C = Array.isArray(c) ? c.slice() : [];
        const P = to(C, (U) => ee(o, U));
        P === -1 ? C.push(o) : n !== 'freeSolo' && (C.splice(P, 1), (p = 'removeOption'));
      }
      de(a, C),
        te(a, C, p, { option: o }),
        !ae && (!a || (!a.ctrlKey && !a.metaKey)) && ie(a, p),
        (I === !0 || (I === 'touch' && ke.current) || (I === 'mouse' && !ke.current)) &&
          A.current.blur();
    };
  function Qe(a, o) {
    if (a === -1) return -1;
    let l = a;
    for (;;) {
      if ((o === 'next' && l === c.length) || (o === 'previous' && l === -1)) return -1;
      const n = $e.querySelector(`[data-tag-index="${l}"]`);
      if (
        !n ||
        !n.hasAttribute('tabindex') ||
        n.disabled ||
        n.getAttribute('aria-disabled') === 'true'
      )
        l += o === 'next' ? 1 : -1;
      else return l;
    }
  }
  const Xe = (a, o) => {
      if (!h) return;
      v === '' && ie(a, 'toggleInput');
      let l = N;
      N === -1
        ? v === '' && o === 'previous' && (l = c.length - 1)
        : ((l += o === 'next' ? 1 : -1), l < 0 && (l = 0), l === c.length && (l = -1)),
        (l = Qe(l, o)),
        Fe(l),
        ye(l);
    },
    Ye = (a) => {
      (Me.current = !0), re(''), _ && _(a, '', 'clear'), te(a, h ? [] : null, 'clear');
    },
    io = (a) => (o) => {
      if (
        (a.onKeyDown && a.onKeyDown(o),
        !o.defaultMuiPrevented &&
          (N !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(o.key) === -1 && (Fe(-1), ye(-1)),
          o.which !== 229))
      )
        switch (o.key) {
          case 'Home':
            M &&
              Z &&
              (o.preventDefault(),
              J({ diff: 'start', direction: 'next', reason: 'keyboard', event: o }));
            break;
          case 'End':
            M &&
              Z &&
              (o.preventDefault(),
              J({ diff: 'end', direction: 'previous', reason: 'keyboard', event: o }));
            break;
          case 'PageUp':
            o.preventDefault(),
              J({ diff: -Oo, direction: 'previous', reason: 'keyboard', event: o }),
              K(o);
            break;
          case 'PageDown':
            o.preventDefault(),
              J({ diff: Oo, direction: 'next', reason: 'keyboard', event: o }),
              K(o);
            break;
          case 'ArrowDown':
            o.preventDefault(),
              J({ diff: 1, direction: 'next', reason: 'keyboard', event: o }),
              K(o);
            break;
          case 'ArrowUp':
            o.preventDefault(),
              J({ diff: -1, direction: 'previous', reason: 'keyboard', event: o }),
              K(o);
            break;
          case 'ArrowLeft':
            Xe(o, 'previous');
            break;
          case 'ArrowRight':
            Xe(o, 'next');
            break;
          case 'Enter':
            if (j.current !== -1 && M) {
              const l = O[j.current],
                n = G ? G(l) : !1;
              if ((o.preventDefault(), n)) return;
              fe(o, l, 'selectOption'),
                i && A.current.setSelectionRange(A.current.value.length, A.current.value.length);
            } else
              Y &&
                v !== '' &&
                Je === !1 &&
                (h && o.preventDefault(), fe(o, v, 'createOption', 'freeSolo'));
            break;
          case 'Escape':
            M
              ? (o.preventDefault(), o.stopPropagation(), ie(o, 'escape'))
              : k &&
                (v !== '' || (h && c.length > 0)) &&
                (o.preventDefault(), o.stopPropagation(), Ye(o));
            break;
          case 'Backspace':
            if (h && !ue && v === '' && c.length > 0) {
              const l = N === -1 ? c.length - 1 : N,
                n = c.slice();
              n.splice(l, 1), te(o, n, 'removeOption', { option: c[l] });
            }
            break;
          case 'Delete':
            if (h && !ue && v === '' && c.length > 0 && N !== -1) {
              const l = N,
                n = c.slice();
              n.splice(l, 1), te(o, n, 'removeOption', { option: c[l] });
            }
            break;
        }
    },
    ho = (a) => {
      Ue(!0), L && !Me.current && K(a);
    },
    Re = (a) => {
      if (t(E)) {
        A.current.focus();
        return;
      }
      Ue(!1),
        (_e.current = !0),
        (Me.current = !1),
        $ && j.current !== -1 && M
          ? fe(a, O[j.current], 'blur')
          : $ && Y && v !== ''
            ? fe(a, v, 'blur', 'freeSolo')
            : d && de(a, c),
        ie(a, 'blur');
    },
    D = (a) => {
      const o = a.target.value;
      v !== o && (re(o), qe(!1), _ && _(a, o, 'input')),
        o === '' ? !R && !h && te(a, null, 'clear') : K(a);
    },
    T = (a) => {
      const o = Number(a.currentTarget.getAttribute('data-option-index'));
      j.current !== o && oe({ event: a, index: o, reason: 'mouse' });
    },
    Q = (a) => {
      oe({
        event: a,
        index: Number(a.currentTarget.getAttribute('data-option-index')),
        reason: 'touch',
      }),
        (ke.current = !0);
    },
    xo = (a) => {
      const o = Number(a.currentTarget.getAttribute('data-option-index'));
      fe(a, O[o], 'selectOption'), (ke.current = !1);
    },
    so = (a) => (o) => {
      const l = c.slice();
      l.splice(a, 1), te(o, l, 'removeOption', { option: c[a] });
    },
    co = (a) => {
      se ? ie(a, 'toggleInput') : K(a);
    },
    po = (a) => {
      a.currentTarget.contains(a.target) && a.target.getAttribute('id') !== F && a.preventDefault();
    },
    Ze = (a) => {
      a.currentTarget.contains(a.target) &&
        (A.current.focus(),
        Ne &&
          _e.current &&
          A.current.selectionEnd - A.current.selectionStart === 0 &&
          A.current.select(),
        (_e.current = !1));
    },
    Be = (a) => {
      !w && (v === '' || !se) && co(a);
    };
  let ge = Y && v.length > 0;
  ge = ge || (h ? c.length > 0 : c !== null);
  let Se = O;
  return (
    ne &&
      (Se = O.reduce((a, o, l) => {
        const n = ne(o);
        return (
          a.length > 0 && a[a.length - 1].group === n
            ? a[a.length - 1].options.push(o)
            : a.push({ key: l, index: l, group: n, options: [o] }),
          a
        );
      }, [])),
    w && Ie && Re(),
    {
      getRootProps: (a = {}) =>
        y({ 'aria-owns': Ee ? `${F}-listbox` : null }, a, {
          onKeyDown: io(a),
          onMouseDown: po,
          onClick: Ze,
        }),
      getInputLabelProps: () => ({ id: `${F}-label`, htmlFor: F }),
      getInputProps: () => ({
        id: F,
        value: v,
        onBlur: Re,
        onFocus: ho,
        onChange: D,
        onMouseDown: Be,
        'aria-activedescendant': M ? '' : null,
        'aria-autocomplete': i ? 'both' : 'list',
        'aria-controls': Ee ? `${F}-listbox` : void 0,
        'aria-expanded': Ee,
        autoComplete: 'off',
        ref: A,
        autoCapitalize: 'none',
        spellCheck: 'false',
        role: 'combobox',
        disabled: w,
      }),
      getClearProps: () => ({ tabIndex: -1, type: 'button', onClick: Ye }),
      getPopupIndicatorProps: () => ({ tabIndex: -1, type: 'button', onClick: co }),
      getTagProps: ({ index: a }) =>
        y({ key: a, 'data-tag-index': a, tabIndex: -1 }, !ue && { onDelete: so(a) }),
      getListboxProps: () => ({
        role: 'listbox',
        id: `${F}-listbox`,
        'aria-labelledby': `${F}-label`,
        ref: ro,
        onMouseDown: (a) => {
          a.preventDefault();
        },
      }),
      getOptionProps: ({ index: a, option: o }) => {
        var l;
        const n = (h ? c : [c]).some((C) => C != null && ee(o, C)),
          p = G ? G(o) : !1;
        return {
          key: (l = Te == null ? void 0 : Te(o)) != null ? l : z(o),
          tabIndex: -1,
          role: 'option',
          id: `${F}-option-${a}`,
          onMouseMove: T,
          onClick: xo,
          onTouchStart: Q,
          'data-option-index': a,
          'aria-disabled': p,
          'aria-selected': n,
        };
      },
      id: F,
      inputValue: v,
      value: c,
      dirty: ge,
      expanded: M && $e,
      popupOpen: M,
      focused: Ie || N !== -1,
      anchorEl: $e,
      setAnchorEl: no,
      focusedTag: N,
      groupedOptions: Se,
    }
  );
}
const dt = qo(
  r.jsx('path', {
    d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
  }),
  'Cancel'
);
function ft(e) {
  return To('MuiChip', e);
}
const g = Lo('MuiChip', [
    'root',
    'sizeSmall',
    'sizeMedium',
    'colorError',
    'colorInfo',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorWarning',
    'disabled',
    'clickable',
    'clickableColorPrimary',
    'clickableColorSecondary',
    'deletable',
    'deletableColorPrimary',
    'deletableColorSecondary',
    'outlined',
    'filled',
    'outlinedPrimary',
    'outlinedSecondary',
    'filledPrimary',
    'filledSecondary',
    'avatar',
    'avatarSmall',
    'avatarMedium',
    'avatarColorPrimary',
    'avatarColorSecondary',
    'icon',
    'iconSmall',
    'iconMedium',
    'iconColorPrimary',
    'iconColorSecondary',
    'label',
    'labelSmall',
    'labelMedium',
    'deleteIcon',
    'deleteIconSmall',
    'deleteIconMedium',
    'deleteIconColorPrimary',
    'deleteIconColorSecondary',
    'deleteIconOutlinedColorPrimary',
    'deleteIconOutlinedColorSecondary',
    'deleteIconFilledColorPrimary',
    'deleteIconFilledColorSecondary',
    'focusVisible',
  ]),
  gt = [
    'avatar',
    'className',
    'clickable',
    'color',
    'component',
    'deleteIcon',
    'disabled',
    'icon',
    'label',
    'onClick',
    'onDelete',
    'onKeyDown',
    'onKeyUp',
    'size',
    'variant',
    'tabIndex',
    'skipFocusWhenDisabled',
  ],
  bt = (e) => {
    const {
        classes: t,
        disabled: s,
        size: i,
        color: f,
        iconColor: $,
        onDelete: I,
        clickable: d,
        variant: k,
      } = e,
      S = {
        root: [
          'root',
          k,
          s && 'disabled',
          `size${x(i)}`,
          `color${x(f)}`,
          d && 'clickable',
          d && `clickableColor${x(f)}`,
          I && 'deletable',
          I && `deletableColor${x(f)}`,
          `${k}${x(f)}`,
        ],
        label: ['label', `label${x(i)}`],
        avatar: ['avatar', `avatar${x(i)}`, `avatarColor${x(f)}`],
        icon: ['icon', `icon${x(i)}`, `iconColor${x($)}`],
        deleteIcon: [
          'deleteIcon',
          `deleteIcon${x(i)}`,
          `deleteIconColor${x(f)}`,
          `deleteIcon${x(k)}Color${x(f)}`,
        ],
      };
    return wo(S, ft, t);
  },
  ht = B('div', {
    name: 'MuiChip',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: s } = e,
        { color: i, iconColor: f, clickable: $, onDelete: I, size: d, variant: k } = s;
      return [
        { [`& .${g.avatar}`]: t.avatar },
        { [`& .${g.avatar}`]: t[`avatar${x(d)}`] },
        { [`& .${g.avatar}`]: t[`avatarColor${x(i)}`] },
        { [`& .${g.icon}`]: t.icon },
        { [`& .${g.icon}`]: t[`icon${x(d)}`] },
        { [`& .${g.icon}`]: t[`iconColor${x(f)}`] },
        { [`& .${g.deleteIcon}`]: t.deleteIcon },
        { [`& .${g.deleteIcon}`]: t[`deleteIcon${x(d)}`] },
        { [`& .${g.deleteIcon}`]: t[`deleteIconColor${x(i)}`] },
        { [`& .${g.deleteIcon}`]: t[`deleteIcon${x(k)}Color${x(i)}`] },
        t.root,
        t[`size${x(d)}`],
        t[`color${x(i)}`],
        $ && t.clickable,
        $ && i !== 'default' && t[`clickableColor${x(i)})`],
        I && t.deletable,
        I && i !== 'default' && t[`deletableColor${x(i)}`],
        t[k],
        t[`${k}${x(i)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      const s = e.palette.mode === 'light' ? e.palette.grey[700] : e.palette.grey[300];
      return y(
        {
          maxWidth: '100%',
          fontFamily: e.typography.fontFamily,
          fontSize: e.typography.pxToRem(13),
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 32,
          color: (e.vars || e).palette.text.primary,
          backgroundColor: (e.vars || e).palette.action.selected,
          borderRadius: 32 / 2,
          whiteSpace: 'nowrap',
          transition: e.transitions.create(['background-color', 'box-shadow']),
          cursor: 'unset',
          outline: 0,
          textDecoration: 'none',
          border: 0,
          padding: 0,
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          [`&.${g.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
            pointerEvents: 'none',
          },
          [`& .${g.avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : s,
            fontSize: e.typography.pxToRem(12),
          },
          [`& .${g.avatarColorPrimary}`]: {
            color: (e.vars || e).palette.primary.contrastText,
            backgroundColor: (e.vars || e).palette.primary.dark,
          },
          [`& .${g.avatarColorSecondary}`]: {
            color: (e.vars || e).palette.secondary.contrastText,
            backgroundColor: (e.vars || e).palette.secondary.dark,
          },
          [`& .${g.avatarSmall}`]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: e.typography.pxToRem(10),
          },
          [`& .${g.icon}`]: y(
            { marginLeft: 5, marginRight: -6 },
            t.size === 'small' && { fontSize: 18, marginLeft: 4, marginRight: -4 },
            t.iconColor === t.color &&
              y(
                { color: e.vars ? e.vars.palette.Chip.defaultIconColor : s },
                t.color !== 'default' && { color: 'inherit' }
              )
          ),
          [`& .${g.deleteIcon}`]: y(
            {
              WebkitTapHighlightColor: 'transparent',
              color: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
                : V(e.palette.text.primary, 0.26),
              fontSize: 22,
              cursor: 'pointer',
              margin: '0 5px 0 -6px',
              '&:hover': {
                color: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                  : V(e.palette.text.primary, 0.4),
              },
            },
            t.size === 'small' && { fontSize: 16, marginRight: 4, marginLeft: -4 },
            t.color !== 'default' && {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`
                : V(e.palette[t.color].contrastText, 0.7),
              '&:hover, &:active': { color: (e.vars || e).palette[t.color].contrastText },
            }
          ),
        },
        t.size === 'small' && { height: 24 },
        t.color !== 'default' && {
          backgroundColor: (e.vars || e).palette[t.color].main,
          color: (e.vars || e).palette[t.color].contrastText,
        },
        t.onDelete && {
          [`&.${g.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : V(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity + e.palette.action.focusOpacity
                ),
          },
        },
        t.onDelete &&
          t.color !== 'default' && {
            [`&.${g.focusVisible}`]: { backgroundColor: (e.vars || e).palette[t.color].dark },
          }
      );
    },
    ({ theme: e, ownerState: t }) =>
      y(
        {},
        t.clickable && {
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : V(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
                ),
          },
          [`&.${g.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : V(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity + e.palette.action.focusOpacity
                ),
          },
          '&:active': { boxShadow: (e.vars || e).shadows[1] },
        },
        t.clickable &&
          t.color !== 'default' && {
            [`&:hover, &.${g.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      y(
        {},
        t.variant === 'outlined' && {
          backgroundColor: 'transparent',
          border: e.vars
            ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
            : `1px solid ${e.palette.mode === 'light' ? e.palette.grey[400] : e.palette.grey[700]}`,
          [`&.${g.clickable}:hover`]: { backgroundColor: (e.vars || e).palette.action.hover },
          [`&.${g.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
          [`& .${g.avatar}`]: { marginLeft: 4 },
          [`& .${g.avatarSmall}`]: { marginLeft: 2 },
          [`& .${g.icon}`]: { marginLeft: 4 },
          [`& .${g.iconSmall}`]: { marginLeft: 2 },
          [`& .${g.deleteIcon}`]: { marginRight: 5 },
          [`& .${g.deleteIconSmall}`]: { marginRight: 3 },
        },
        t.variant === 'outlined' &&
          t.color !== 'default' && {
            color: (e.vars || e).palette[t.color].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : V(e.palette[t.color].main, 0.7)}`,
            [`&.${g.clickable}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                : V(e.palette[t.color].main, e.palette.action.hoverOpacity),
            },
            [`&.${g.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`
                : V(e.palette[t.color].main, e.palette.action.focusOpacity),
            },
            [`& .${g.deleteIcon}`]: {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : V(e.palette[t.color].main, 0.7),
              '&:hover, &:active': { color: (e.vars || e).palette[t.color].main },
            },
          }
      )
  ),
  xt = B('span', {
    name: 'MuiChip',
    slot: 'Label',
    overridesResolver: (e, t) => {
      const { ownerState: s } = e,
        { size: i } = s;
      return [t.label, t[`label${x(i)}`]];
    },
  })(({ ownerState: e }) =>
    y(
      {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: 'nowrap',
      },
      e.variant === 'outlined' && { paddingLeft: 11, paddingRight: 11 },
      e.size === 'small' && { paddingLeft: 8, paddingRight: 8 },
      e.size === 'small' && e.variant === 'outlined' && { paddingLeft: 7, paddingRight: 7 }
    )
  );
function Po(e) {
  return e.key === 'Backspace' || e.key === 'Delete';
}
const mt = b.forwardRef(function (t, s) {
  const i = jo({ props: t, name: 'MuiChip' }),
    {
      avatar: f,
      className: $,
      clickable: I,
      color: d = 'default',
      component: k,
      deleteIcon: S,
      disabled: m = !1,
      icon: R,
      label: ae,
      onClick: w,
      onDelete: H,
      onKeyDown: xe,
      onKeyUp: Le,
      size: ce = 'medium',
      variant: Y = 'filled',
      tabIndex: G,
      skipFocusWhenDisabled: Te = !1,
    } = i,
    me = He(i, gt),
    ne = b.useRef(null),
    Z = Do(ne, s),
    je = (L) => {
      L.stopPropagation(), H && H(L);
    },
    De = (L) => {
      L.currentTarget === L.target && Po(L) && L.preventDefault(), xe && xe(L);
    },
    ve = (L) => {
      L.currentTarget === L.target &&
        (H && Po(L) ? H(L) : L.key === 'Escape' && ne.current && ne.current.blur()),
        Le && Le(L);
    },
    ee = I !== !1 && w ? !0 : I,
    h = ee || H ? vo : k || 'div',
    le = y({}, i, {
      component: h,
      disabled: m,
      size: ce,
      color: d,
      iconColor: (b.isValidElement(R) && R.props.color) || d,
      onDelete: !!H,
      clickable: ee,
      variant: Y,
    }),
    W = bt(le),
    Ce =
      h === vo
        ? y(
            { component: k || 'div', focusVisibleClassName: W.focusVisible },
            H && { disableRipple: !0 }
          )
        : {};
  let _ = null;
  H &&
    (_ =
      S && b.isValidElement(S)
        ? b.cloneElement(S, { className: X(S.props.className, W.deleteIcon), onClick: je })
        : r.jsx(dt, { className: X(W.deleteIcon), onClick: je }));
  let pe = null;
  f &&
    b.isValidElement(f) &&
    (pe = b.cloneElement(f, { className: X(W.avatar, f.props.className) }));
  let we = null;
  return (
    R &&
      b.isValidElement(R) &&
      (we = b.cloneElement(R, { className: X(W.icon, R.props.className) })),
    r.jsxs(
      ht,
      y(
        {
          as: h,
          className: X(W.root, $),
          disabled: ee && m ? !0 : void 0,
          onClick: w,
          onKeyDown: De,
          onKeyUp: ve,
          ref: Z,
          tabIndex: Te && m ? -1 : G,
          ownerState: le,
        },
        Ce,
        me,
        {
          children: [
            pe || we,
            r.jsx(xt, { className: X(W.label), ownerState: le, children: ae }),
            _,
          ],
        }
      )
    )
  );
});
function vt(e) {
  return To('MuiAutocomplete', e);
}
const u = Lo('MuiAutocomplete', [
  'root',
  'expanded',
  'fullWidth',
  'focused',
  'focusVisible',
  'tag',
  'tagSizeSmall',
  'tagSizeMedium',
  'hasPopupIcon',
  'hasClearIcon',
  'inputRoot',
  'input',
  'inputFocused',
  'endAdornment',
  'clearIndicator',
  'popupIndicator',
  'popupIndicatorOpen',
  'popper',
  'popperDisablePortal',
  'paper',
  'listbox',
  'loading',
  'noOptions',
  'option',
  'groupLabel',
  'groupUl',
]);
var ko, Ro;
const Ct = [
    'autoComplete',
    'autoHighlight',
    'autoSelect',
    'blurOnSelect',
    'ChipProps',
    'className',
    'clearIcon',
    'clearOnBlur',
    'clearOnEscape',
    'clearText',
    'closeText',
    'componentsProps',
    'defaultValue',
    'disableClearable',
    'disableCloseOnSelect',
    'disabled',
    'disabledItemsFocusable',
    'disableListWrap',
    'disablePortal',
    'filterOptions',
    'filterSelectedOptions',
    'forcePopupIcon',
    'freeSolo',
    'fullWidth',
    'getLimitTagsText',
    'getOptionDisabled',
    'getOptionKey',
    'getOptionLabel',
    'isOptionEqualToValue',
    'groupBy',
    'handleHomeEndKeys',
    'id',
    'includeInputInList',
    'inputValue',
    'limitTags',
    'ListboxComponent',
    'ListboxProps',
    'loading',
    'loadingText',
    'multiple',
    'noOptionsText',
    'onChange',
    'onClose',
    'onHighlightChange',
    'onInputChange',
    'onOpen',
    'open',
    'openOnFocus',
    'openText',
    'options',
    'PaperComponent',
    'PopperComponent',
    'popupIcon',
    'readOnly',
    'renderGroup',
    'renderInput',
    'renderOption',
    'renderTags',
    'selectOnFocus',
    'size',
    'slotProps',
    'value',
  ],
  $t = ['ref'],
  It = ['key'],
  yt = ['key'],
  Ot = (e) => {
    const {
        classes: t,
        disablePortal: s,
        expanded: i,
        focused: f,
        fullWidth: $,
        hasClearIcon: I,
        hasPopupIcon: d,
        inputFocused: k,
        popupOpen: S,
        size: m,
      } = e,
      R = {
        root: [
          'root',
          i && 'expanded',
          f && 'focused',
          $ && 'fullWidth',
          I && 'hasClearIcon',
          d && 'hasPopupIcon',
        ],
        inputRoot: ['inputRoot'],
        input: ['input', k && 'inputFocused'],
        tag: ['tag', `tagSize${x(m)}`],
        endAdornment: ['endAdornment'],
        clearIndicator: ['clearIndicator'],
        popupIndicator: ['popupIndicator', S && 'popupIndicatorOpen'],
        popper: ['popper', s && 'popperDisablePortal'],
        paper: ['paper'],
        listbox: ['listbox'],
        loading: ['loading'],
        noOptions: ['noOptions'],
        option: ['option'],
        groupLabel: ['groupLabel'],
        groupUl: ['groupUl'],
      };
    return wo(R, vt, t);
  },
  Pt = B('div', {
    name: 'MuiAutocomplete',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: s } = e,
        { fullWidth: i, hasClearIcon: f, hasPopupIcon: $, inputFocused: I, size: d } = s;
      return [
        { [`& .${u.tag}`]: t.tag },
        { [`& .${u.tag}`]: t[`tagSize${x(d)}`] },
        { [`& .${u.inputRoot}`]: t.inputRoot },
        { [`& .${u.input}`]: t.input },
        { [`& .${u.input}`]: I && t.inputFocused },
        t.root,
        i && t.fullWidth,
        $ && t.hasPopupIcon,
        f && t.hasClearIcon,
      ];
    },
  })({
    [`&.${u.focused} .${u.clearIndicator}`]: { visibility: 'visible' },
    '@media (pointer: fine)': { [`&:hover .${u.clearIndicator}`]: { visibility: 'visible' } },
    [`& .${u.tag}`]: { margin: 3, maxWidth: 'calc(100% - 6px)' },
    [`& .${u.inputRoot}`]: {
      [`.${u.hasPopupIcon}&, .${u.hasClearIcon}&`]: { paddingRight: 30 },
      [`.${u.hasPopupIcon}.${u.hasClearIcon}&`]: { paddingRight: 56 },
      [`& .${u.input}`]: { width: 0, minWidth: 30 },
    },
    [`& .${fo.root}`]: { paddingBottom: 1, '& .MuiInput-input': { padding: '4px 4px 4px 0px' } },
    [`& .${fo.root}.${be.sizeSmall}`]: { [`& .${fo.input}`]: { padding: '2px 4px 3px 0' } },
    [`& .${Io.root}`]: {
      padding: 9,
      [`.${u.hasPopupIcon}&, .${u.hasClearIcon}&`]: { paddingRight: 39 },
      [`.${u.hasPopupIcon}.${u.hasClearIcon}&`]: { paddingRight: 65 },
      [`& .${u.input}`]: { padding: '7.5px 4px 7.5px 5px' },
      [`& .${u.endAdornment}`]: { right: 9 },
    },
    [`& .${Io.root}.${be.sizeSmall}`]: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 6,
      [`& .${u.input}`]: { padding: '2.5px 4px 2.5px 8px' },
    },
    [`& .${Ae.root}`]: {
      paddingTop: 19,
      paddingLeft: 8,
      [`.${u.hasPopupIcon}&, .${u.hasClearIcon}&`]: { paddingRight: 39 },
      [`.${u.hasPopupIcon}.${u.hasClearIcon}&`]: { paddingRight: 65 },
      [`& .${Ae.input}`]: { padding: '7px 4px' },
      [`& .${u.endAdornment}`]: { right: 9 },
    },
    [`& .${Ae.root}.${be.sizeSmall}`]: {
      paddingBottom: 1,
      [`& .${Ae.input}`]: { padding: '2.5px 4px' },
    },
    [`& .${be.hiddenLabel}`]: { paddingTop: 8 },
    [`& .${Ae.root}.${be.hiddenLabel}`]: {
      paddingTop: 0,
      paddingBottom: 0,
      [`& .${u.input}`]: { paddingTop: 16, paddingBottom: 17 },
    },
    [`& .${Ae.root}.${be.hiddenLabel}.${be.sizeSmall}`]: {
      [`& .${u.input}`]: { paddingTop: 8, paddingBottom: 9 },
    },
    [`& .${u.input}`]: { flexGrow: 1, textOverflow: 'ellipsis', opacity: 0 },
    variants: [
      { props: { fullWidth: !0 }, style: { width: '100%' } },
      {
        props: { size: 'small' },
        style: { [`& .${u.tag}`]: { margin: 2, maxWidth: 'calc(100% - 4px)' } },
      },
      { props: { inputFocused: !0 }, style: { [`& .${u.input}`]: { opacity: 1 } } },
      { props: { multiple: !0 }, style: { [`& .${u.inputRoot}`]: { flexWrap: 'wrap' } } },
    ],
  }),
  kt = B('div', {
    name: 'MuiAutocomplete',
    slot: 'EndAdornment',
    overridesResolver: (e, t) => t.endAdornment,
  })({ position: 'absolute', right: 0, top: '50%', transform: 'translate(0, -50%)' }),
  Rt = B(zo, {
    name: 'MuiAutocomplete',
    slot: 'ClearIndicator',
    overridesResolver: (e, t) => t.clearIndicator,
  })({ marginRight: -2, padding: 4, visibility: 'hidden' }),
  St = B(zo, {
    name: 'MuiAutocomplete',
    slot: 'PopupIndicator',
    overridesResolver: ({ ownerState: e }, t) =>
      y({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen),
  })({
    padding: 2,
    marginRight: -2,
    variants: [{ props: { popupOpen: !0 }, style: { transform: 'rotate(180deg)' } }],
  }),
  At = B(No, {
    name: 'MuiAutocomplete',
    slot: 'Popper',
    overridesResolver: (e, t) => {
      const { ownerState: s } = e;
      return [{ [`& .${u.option}`]: t.option }, t.popper, s.disablePortal && t.popperDisablePortal];
    },
  })(({ theme: e }) => ({
    zIndex: (e.vars || e).zIndex.modal,
    variants: [{ props: { disablePortal: !0 }, style: { position: 'absolute' } }],
  })),
  Lt = B(Mo, { name: 'MuiAutocomplete', slot: 'Paper', overridesResolver: (e, t) => t.paper })(
    ({ theme: e }) => y({}, e.typography.body1, { overflow: 'auto' })
  ),
  Tt = B('div', {
    name: 'MuiAutocomplete',
    slot: 'Loading',
    overridesResolver: (e, t) => t.loading,
  })(({ theme: e }) => ({ color: (e.vars || e).palette.text.secondary, padding: '14px 16px' })),
  jt = B('div', {
    name: 'MuiAutocomplete',
    slot: 'NoOptions',
    overridesResolver: (e, t) => t.noOptions,
  })(({ theme: e }) => ({ color: (e.vars || e).palette.text.secondary, padding: '14px 16px' })),
  Dt = B('div', {
    name: 'MuiAutocomplete',
    slot: 'Listbox',
    overridesResolver: (e, t) => t.listbox,
  })(({ theme: e }) => ({
    listStyle: 'none',
    margin: 0,
    padding: '8px 0',
    maxHeight: '40vh',
    overflow: 'auto',
    position: 'relative',
    [`& .${u.option}`]: {
      minHeight: 48,
      display: 'flex',
      overflow: 'hidden',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 6,
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16,
      [e.breakpoints.up('sm')]: { minHeight: 'auto' },
      [`&.${u.focused}`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
        '@media (hover: none)': { backgroundColor: 'transparent' },
      },
      '&[aria-disabled="true"]': {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: 'none',
      },
      [`&.${u.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
      '&[aria-selected="true"]': {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : V(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${u.focused}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : V(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': { backgroundColor: (e.vars || e).palette.action.selected },
        },
        [`&.${u.focusVisible}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
            : V(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.focusOpacity
              ),
        },
      },
    },
  })),
  wt = B(Jo, {
    name: 'MuiAutocomplete',
    slot: 'GroupLabel',
    overridesResolver: (e, t) => t.groupLabel,
  })(({ theme: e }) => ({ backgroundColor: (e.vars || e).palette.background.paper, top: -8 })),
  zt = B('ul', {
    name: 'MuiAutocomplete',
    slot: 'GroupUl',
    overridesResolver: (e, t) => t.groupUl,
  })({ padding: 0, [`& .${u.option}`]: { paddingLeft: 24 } }),
  Nt = b.forwardRef(function (t, s) {
    var i, f, $, I;
    const d = jo({ props: t, name: 'MuiAutocomplete' }),
      {
        autoComplete: k = !1,
        autoHighlight: S = !1,
        autoSelect: m = !1,
        blurOnSelect: R = !1,
        ChipProps: ae,
        className: w,
        clearIcon: H = ko || (ko = r.jsx(Qo, { fontSize: 'small' })),
        clearOnBlur: xe = !d.freeSolo,
        clearOnEscape: Le = !1,
        clearText: ce = 'Clear',
        closeText: Y = 'Close',
        componentsProps: G = {},
        defaultValue: Te = d.multiple ? [] : null,
        disableClearable: me = !1,
        disableCloseOnSelect: ne = !1,
        disabled: Z = !1,
        disabledItemsFocusable: je = !1,
        disableListWrap: De = !1,
        disablePortal: ve = !1,
        filterSelectedOptions: ee = !1,
        forcePopupIcon: h = 'auto',
        freeSolo: le = !1,
        fullWidth: W = !1,
        getLimitTagsText: Ce = (n) => `+${n}`,
        getOptionLabel: _,
        groupBy: pe,
        handleHomeEndKeys: we = !d.freeSolo,
        includeInputInList: L = !1,
        limitTags: ze = -1,
        ListboxComponent: ue = 'ul',
        ListboxProps: Ne,
        loading: We = !1,
        loadingText: F = 'Loading…',
        multiple: z = !1,
        noOptionsText: Me = 'No options',
        openOnFocus: _e = !1,
        openText: A = 'Open',
        PaperComponent: E = Mo,
        PopperComponent: $e = No,
        popupIcon: no = Ro || (Ro = r.jsx(at, {})),
        readOnly: N = !1,
        renderGroup: Fe,
        renderInput: Ke,
        renderOption: j,
        renderTags: c,
        selectOnFocus: bo = !d.freeSolo,
        size: v = 'medium',
        slotProps: re = {},
      } = d,
      Ie = He(d, Ct),
      {
        getRootProps: Ue,
        getInputProps: de,
        getInputLabelProps: se,
        getPopupIndicatorProps: Ge,
        getClearProps: lo,
        getTagProps: qe,
        getListboxProps: Je,
        getOptionProps: M,
        value: O,
        dirty: q,
        expanded: Ee,
        id: ye,
        popupOpen: Oe,
        focused: oe,
        focusedTag: J,
        anchorEl: Pe,
        setAnchorEl: Ve,
        inputValue: ro,
        groupedOptions: K,
      } = ut(y({}, d, { componentName: 'Autocomplete' })),
      ie = !me && !Z && q && !N,
      te = (!le || h === !0) && h !== !1,
      { onMouseDown: ke } = de(),
      { ref: fe } = Ne ?? {},
      Qe = Je(),
      { ref: Xe } = Qe,
      Ye = He(Qe, $t),
      io = Do(Xe, fe),
      Re =
        _ ||
        ((n) => {
          var p;
          return (p = n.label) != null ? p : n;
        }),
      D = y({}, d, {
        disablePortal: ve,
        expanded: Ee,
        focused: oe,
        fullWidth: W,
        getOptionLabel: Re,
        hasClearIcon: ie,
        hasPopupIcon: te,
        inputFocused: J === -1,
        popupOpen: Oe,
        size: v,
      }),
      T = Ot(D);
    let Q;
    if (z && O.length > 0) {
      const n = (p) => y({ className: T.tag, disabled: Z }, qe(p));
      c
        ? (Q = c(O, n, D))
        : (Q = O.map((p, C) => {
            const P = n({ index: C }),
              { key: U } = P,
              eo = He(P, It);
            return r.jsx(mt, y({ label: Re(p), size: v }, eo, ae), U);
          }));
    }
    if (ze > -1 && Array.isArray(Q)) {
      const n = Q.length - ze;
      !oe &&
        n > 0 &&
        ((Q = Q.splice(0, ze)),
        Q.push(r.jsx('span', { className: T.tag, children: Ce(n) }, Q.length)));
    }
    const so =
        Fe ||
        ((n) =>
          r.jsxs(
            'li',
            {
              children: [
                r.jsx(wt, {
                  className: T.groupLabel,
                  ownerState: D,
                  component: 'div',
                  children: n.group,
                }),
                r.jsx(zt, { className: T.groupUl, ownerState: D, children: n.children }),
              ],
            },
            n.key
          )),
      po =
        j ||
        ((n, p) => {
          const { key: C } = n,
            P = He(n, yt);
          return r.jsx('li', y({}, P, { children: Re(p) }), C);
        }),
      Ze = (n, p) => {
        const C = M({ option: n, index: p });
        return po(
          y({}, C, { className: T.option }),
          n,
          { selected: C['aria-selected'], index: p, inputValue: ro },
          D
        );
      },
      Be = (i = re.clearIndicator) != null ? i : G.clearIndicator,
      ge = (f = re.paper) != null ? f : G.paper,
      Se = ($ = re.popper) != null ? $ : G.popper,
      a = (I = re.popupIndicator) != null ? I : G.popupIndicator,
      o = (n) =>
        r.jsx(
          At,
          y(
            {
              as: $e,
              disablePortal: ve,
              style: { width: Pe ? Pe.clientWidth : null },
              ownerState: D,
              role: 'presentation',
              anchorEl: Pe,
              open: Oe,
            },
            Se,
            {
              className: X(T.popper, Se == null ? void 0 : Se.className),
              children: r.jsx(
                Lt,
                y({ ownerState: D, as: E }, ge, {
                  className: X(T.paper, ge == null ? void 0 : ge.className),
                  children: n,
                })
              ),
            }
          )
        );
    let l = null;
    return (
      K.length > 0
        ? (l = o(
            r.jsx(
              Dt,
              y({ as: ue, className: T.listbox, ownerState: D }, Ye, Ne, {
                ref: io,
                children: K.map((n, p) =>
                  pe
                    ? so({
                        key: n.key,
                        group: n.group,
                        children: n.options.map((C, P) => Ze(C, n.index + P)),
                      })
                    : Ze(n, p)
                ),
              })
            )
          ))
        : We && K.length === 0
          ? (l = o(r.jsx(Tt, { className: T.loading, ownerState: D, children: F })))
          : K.length === 0 &&
            !le &&
            !We &&
            (l = o(
              r.jsx(jt, {
                className: T.noOptions,
                ownerState: D,
                role: 'presentation',
                onMouseDown: (n) => {
                  n.preventDefault();
                },
                children: Me,
              })
            )),
      r.jsxs(b.Fragment, {
        children: [
          r.jsx(
            Pt,
            y({ ref: s, className: X(T.root, w), ownerState: D }, Ue(Ie), {
              children: Ke({
                id: ye,
                disabled: Z,
                fullWidth: !0,
                size: v === 'small' ? 'small' : void 0,
                InputLabelProps: se(),
                InputProps: y(
                  {
                    ref: Ve,
                    className: T.inputRoot,
                    startAdornment: Q,
                    onClick: (n) => {
                      n.target === n.currentTarget && ke(n);
                    },
                  },
                  (ie || te) && {
                    endAdornment: r.jsxs(kt, {
                      className: T.endAdornment,
                      ownerState: D,
                      children: [
                        ie
                          ? r.jsx(
                              Rt,
                              y({}, lo(), { 'aria-label': ce, title: ce, ownerState: D }, Be, {
                                className: X(T.clearIndicator, Be == null ? void 0 : Be.className),
                                children: H,
                              })
                            )
                          : null,
                        te
                          ? r.jsx(
                              St,
                              y(
                                {},
                                Ge(),
                                {
                                  disabled: Z,
                                  'aria-label': Oe ? Y : A,
                                  title: Oe ? Y : A,
                                  ownerState: D,
                                },
                                a,
                                {
                                  className: X(T.popupIndicator, a == null ? void 0 : a.className),
                                  children: no,
                                }
                              )
                            )
                          : null,
                      ],
                    }),
                  }
                ),
                inputProps: y({ className: T.input, disabled: Z, readOnly: N }, de()),
              }),
            })
          ),
          Pe ? l : null,
        ],
      })
    );
  });
function Mt({ posts: e, sx: t }) {
  return r.jsx(Nt, {
    sx: { width: 280 },
    autoHighlight: !0,
    popupIcon: null,
    slotProps: { paper: { sx: { width: 320, [`& .${u.option}`]: { typography: 'body2' }, ...t } } },
    options: e,
    getOptionLabel: (s) => s.title,
    isOptionEqualToValue: (s, i) => s.id === i.id,
    renderInput: (s) =>
      r.jsx(nt, {
        ...s,
        placeholder: 'Search post...',
        InputProps: {
          ...s.InputProps,
          startAdornment: r.jsx(Xo, {
            position: 'start',
            children: r.jsx(ao, {
              icon: 'eva:search-fill',
              sx: { ml: 1, width: 20, height: 20, color: 'text.disabled' },
            }),
          }),
        },
      }),
  });
}
function Ft() {
  const [e, t] = b.useState('latest'),
    s = b.useCallback((i) => {
      t(i);
    }, []);
  return r.jsxs(Yo, {
    children: [
      r.jsxs(he, {
        display: 'flex',
        alignItems: 'center',
        mb: 5,
        children: [
          r.jsx(go, { variant: 'h4', flexGrow: 1, children: 'Blog' }),
          r.jsx(Ao, {
            variant: 'contained',
            color: 'inherit',
            startIcon: r.jsx(ao, { icon: 'mingcute:add-line' }),
            children: 'New post',
          }),
        ],
      }),
      r.jsxs(he, {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        sx: { mb: 5 },
        children: [
          r.jsx(Mt, { posts: Co }),
          r.jsx(it, {
            sortBy: e,
            onSort: s,
            options: [
              { value: 'latest', label: 'Latest' },
              { value: 'popular', label: 'Popular' },
              { value: 'oldest', label: 'Oldest' },
            ],
          }),
        ],
      }),
      r.jsx($o, {
        container: !0,
        spacing: 3,
        children: Co.map((i, f) => {
          const $ = f === 0,
            I = f === 1 || f === 2;
          return r.jsx(
            $o,
            {
              xs: 12,
              sm: $ ? 12 : 6,
              md: $ ? 6 : 3,
              children: r.jsx(rt, { post: i, latestPost: I, latestPostLarge: $ }),
            },
            i.id
          );
        }),
      }),
      r.jsx(lt, { count: 10, color: 'primary', sx: { mt: 8, mx: 'auto' } }),
    ],
  });
}
function Gt() {
  return r.jsxs(r.Fragment, {
    children: [
      r.jsx(Zo, { children: r.jsxs('title', { children: [' ', `Blog - ${et.appName}`] }) }),
      r.jsx(Ft, {}),
    ],
  });
}
export { Gt as default };
