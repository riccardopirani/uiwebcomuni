import {
  j as e,
  B as i,
  aO as l,
  o as x,
  aP as u,
  aQ as p,
  aR as m,
  aS as h,
  F as d,
  ay as c,
  aT as f,
  e as r,
  i as y,
  H as j,
} from './index-arL0TtPY.js';
import { C as g } from './config-global-CE93-cEV.js';
function S({ children: n, sx: o, ...t }) {
  return e.jsx(i, {
    component: 'main',
    className: l.main,
    sx: { display: 'flex', flex: '1 1 auto', flexDirection: 'column', ...o },
    ...t,
    children: n,
  });
}
function C({ sx: n, layoutQuery: o, children: t, ...a }) {
  const s = x();
  return e.jsx(i, {
    className: l.content,
    sx: {
      width: 1,
      mx: 'auto',
      display: 'flex',
      flex: '1 1 auto',
      textAlign: 'center',
      flexDirection: 'column',
      p: s.spacing(3, 2, 10, 2),
      maxWidth: 'var(--layout-simple-content-compact-width)',
      [s.breakpoints.up(o)]: { justifyContent: 'center', p: s.spacing(10, 0, 10, 0) },
      ...n,
    },
    ...a,
    children: t,
  });
}
function v({ sx: n, children: o, header: t, content: a }) {
  const s = 'md';
  return e.jsx(u, {
    headerSection: e.jsx(p, {
      layoutQuery: s,
      slotProps: { container: { maxWidth: !1 } },
      sx: t == null ? void 0 : t.sx,
      slots: {
        topArea: e.jsx(m, {
          severity: 'info',
          sx: { display: 'none', borderRadius: 0 },
          children: 'This is an info Alert.',
        }),
        leftArea: e.jsx(h, {}),
        rightArea: e.jsx(d, {
          href: '#',
          component: c,
          color: 'inherit',
          sx: { typography: 'subtitle2' },
          children: 'Need help?',
        }),
      },
    }),
    footerSection: null,
    cssVars: { '--layout-simple-content-compact-width': '448px' },
    sx: n,
    children: e.jsx(S, {
      children: a != null && a.compact ? e.jsx(C, { layoutQuery: s, children: o }) : o,
    }),
  });
}
function w() {
  return e.jsx(v, {
    content: { compact: !0 },
    children: e.jsxs(f, {
      children: [
        e.jsx(r, { variant: 'h3', sx: { mb: 2 }, children: 'Sorry, page not found!' }),
        e.jsx(r, {
          sx: { color: 'text.secondary' },
          children:
            'Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.',
        }),
        e.jsx(i, {
          component: 'img',
          src: '/assets/illustrations/illustration-404.svg',
          sx: { width: 320, height: 'auto', my: { xs: 5, sm: 10 } },
        }),
        e.jsx(y, {
          component: c,
          href: '/',
          size: 'large',
          variant: 'contained',
          color: 'inherit',
          children: 'Go to home',
        }),
      ],
    }),
  });
}
function N() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(j, {
        children: e.jsxs('title', {
          children: [' ', `404 page not found! | Error - ${g.appName}`],
        }),
      }),
      e.jsx(w, {}),
    ],
  });
}
export { N as default };