import {
  a as d,
  g as u,
  s as p,
  $ as C,
  r as f,
  b as m,
  c as x,
  _ as n,
  j as v,
  f as y,
  h as R,
} from './index-arL0TtPY.js';
function g(s) {
  return d('MuiCard', s);
}
u('MuiCard', ['root']);
const h = ['className', 'raised'],
  j = (s) => {
    const { classes: o } = s;
    return R({ root: ['root'] }, g, o);
  },
  M = p(C, { name: 'MuiCard', slot: 'Root', overridesResolver: (s, o) => o.root })(() => ({
    overflow: 'hidden',
  })),
  _ = f.forwardRef(function (o, e) {
    const t = m({ props: o, name: 'MuiCard' }),
      { className: l, raised: a = !1 } = t,
      i = x(t, h),
      r = n({}, t, { raised: a }),
      c = j(r);
    return v.jsx(
      M,
      n({ className: y(c.root, l), elevation: a ? 8 : void 0, ref: e, ownerState: r }, i)
    );
  });
export { _ as C };
