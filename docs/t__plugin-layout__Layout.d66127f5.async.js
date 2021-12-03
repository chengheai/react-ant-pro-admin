(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [301],
  {
    11287: function (yt, P, a) {
      'use strict';
      a.r(P),
        a.d(P, {
          default: function () {
            return pt;
          },
        });
      var g = a(8870),
        b = a(57337),
        v = a(67294),
        d = a(95854),
        k = a(99222),
        q = a(93224),
        E = a(41153),
        W = a(41788),
        L = a(97175),
        Ct = a(45697),
        B = a(22122),
        S = a(19756),
        $ = a(2177),
        jt = (function (e) {
          (0, W.Z)(t, e);
          function t() {
            for (var o, s = arguments.length, n = new Array(s), l = 0; l < s; l++)
              n[l] = arguments[l];
            return (
              (o = e.call.apply(e, [this].concat(n)) || this), (o.history = (0, L.lX)(o.props)), o
            );
          }
          var i = t.prototype;
          return (
            (i.render = function () {
              return v.createElement(E.F0, {
                history: this.history,
                children: this.props.children,
              });
            }),
            t
          );
        })(v.Component),
        Rt = (function (e) {
          (0, W.Z)(t, e);
          function t() {
            for (var o, s = arguments.length, n = new Array(s), l = 0; l < s; l++)
              n[l] = arguments[l];
            return (
              (o = e.call.apply(e, [this].concat(n)) || this), (o.history = (0, L.q_)(o.props)), o
            );
          }
          var i = t.prototype;
          return (
            (i.render = function () {
              return v.createElement(E.F0, {
                history: this.history,
                children: this.props.children,
              });
            }),
            t
          );
        })(v.Component),
        z = function (t, i) {
          return typeof t == 'function' ? t(i) : t;
        },
        I = function (t, i) {
          return typeof t == 'string' ? (0, L.ob)(t, null, null, i) : t;
        },
        M = function (t) {
          return t;
        },
        j = v.forwardRef;
      typeof j == 'undefined' && (j = M);
      function _(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
      }
      var tt = j(function (e, t) {
          var i = e.innerRef,
            o = e.navigate,
            s = e.onClick,
            n = (0, S.Z)(e, ['innerRef', 'navigate', 'onClick']),
            l = n.target,
            m = (0, B.Z)({}, n, {
              onClick: function (u) {
                try {
                  s && s(u);
                } catch (p) {
                  throw (u.preventDefault(), p);
                }
                !u.defaultPrevented &&
                  u.button === 0 &&
                  (!l || l === '_self') &&
                  !_(u) &&
                  (u.preventDefault(), o());
              },
            });
          return M !== j ? (m.ref = t || i) : (m.ref = i), v.createElement('a', m);
        }),
        T = j(function (e, t) {
          var i = e.component,
            o = i === void 0 ? tt : i,
            s = e.replace,
            n = e.to,
            l = e.innerRef,
            m = (0, S.Z)(e, ['component', 'replace', 'to', 'innerRef']);
          return v.createElement(E.s6.Consumer, null, function (f) {
            f || (0, $.Z)(!1);
            var u = f.history,
              p = I(z(n, f.location), f.location),
              R = p ? u.createHref(p) : '',
              C = (0, B.Z)({}, m, {
                href: R,
                navigate: function () {
                  var x = z(n, f.location),
                    Z = s ? u.replace : u.push;
                  Z(x);
                },
              });
            return M !== j ? (C.ref = t || l) : (C.innerRef = l), v.createElement(o, C);
          });
        });
      if (!1) var Ft, Zt;
      var K = function (t) {
          return t;
        },
        A = v.forwardRef;
      typeof A == 'undefined' && (A = K);
      function et() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return t
          .filter(function (o) {
            return o;
          })
          .join(' ');
      }
      var Et = A(function (e, t) {
        var i = e['aria-current'],
          o = i === void 0 ? 'page' : i,
          s = e.activeClassName,
          n = s === void 0 ? 'active' : s,
          l = e.activeStyle,
          m = e.className,
          f = e.exact,
          u = e.isActive,
          p = e.location,
          R = e.sensitive,
          C = e.strict,
          F = e.style,
          x = e.to,
          Z = e.innerRef,
          h = (0, S.Z)(e, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ]);
        return v.createElement(E.s6.Consumer, null, function (c) {
          c || (0, $.Z)(!1);
          var y = p || c.location,
            N = I(z(x, y), y),
            Q = N.pathname,
            Y = Q && Q.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            w = Y ? (0, E.LX)(y.pathname, { path: Y, exact: f, sensitive: R, strict: C }) : null,
            G = !!(u ? u(w, y) : w),
            gt = G ? et(m, n) : m,
            xt = G ? (0, B.Z)({}, F, {}, l) : F,
            H = (0, B.Z)({ 'aria-current': (G && o) || null, className: gt, style: xt, to: N }, h);
          return K !== A ? (H.ref = t || Z) : (H.innerRef = Z), v.createElement(T, H);
        });
      });
      if (!1) var Bt;
      var nt = a(2098),
        At = a(59250),
        rt = a(13013),
        Nt = a(20228),
        it = a(11382),
        Lt = a(94233),
        ot = a(51890),
        St = a(30887),
        O = a(99210),
        at = a(55035),
        r = a(85893);
      function D(e, t, i, o) {
        if (e.rightRender) return e.rightRender(i, o, e);
        var s = (0, r.jsx)(O.Z, {
            className: 'umi-plugin-layout-menu',
            children: (0, r.jsxs)(
              O.Z.Item,
              {
                onClick: function () {
                  return e.logout && (e == null ? void 0 : e.logout(i));
                },
                children: [(0, r.jsx)(at.Z, {}), '\u9000\u51FA\u767B\u5F55'],
              },
              'logout',
            ),
          }),
          n = (0, r.jsxs)('span', {
            className: 'umi-plugin-layout-action',
            children: [
              (0, r.jsx)(ot.C, {
                size: 'small',
                className: 'umi-plugin-layout-avatar',
                src:
                  (i == null ? void 0 : i.avatar) ||
                  'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                alt: 'avatar',
              }),
              (0, r.jsx)('span', {
                className: 'umi-plugin-layout-name',
                children: i == null ? void 0 : i.name,
              }),
            ],
          });
        return t
          ? (0, r.jsx)('div', {
              className: 'umi-plugin-layout-right',
              children: (0, r.jsx)(it.Z, {
                size: 'small',
                style: { marginLeft: 8, marginRight: 8 },
              }),
            })
          : (0, r.jsx)('div', {
              className: 'umi-plugin-layout-right anticon',
              children: e.logout
                ? (0, r.jsx)(rt.Z, {
                    overlay: s,
                    overlayClassName: 'umi-plugin-layout-container',
                    children: n,
                  })
                : n,
            });
      }
      var zt = a(57106),
        X = a(99683),
        Mt = a(57663),
        U = a(71577);
      function V() {
        d.m8.push('/');
      }
      var lt = function () {
          return (0, r.jsx)(X.ZP, {
            status: '404',
            title: '404',
            subTitle: '\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728',
            extra: (0, r.jsx)(U.Z, {
              type: 'primary',
              onClick: V,
              children: '\u8FD4\u56DE\u9996\u9875',
            }),
          });
        },
        st = function () {
          return (0, r.jsx)(X.ZP, {
            status: '403',
            title: '403',
            subTitle: '\u62B1\u6B49\uFF0C\u4F60\u65E0\u6743\u8BBF\u95EE\u8BE5\u9875\u9762',
            extra: (0, r.jsx)(U.Z, {
              type: 'primary',
              onClick: V,
              children: '\u8FD4\u56DE\u9996\u9875',
            }),
          });
        },
        ut = function (t) {
          var i = t.children,
            o = t.currentPathConfig;
          return o
            ? o.unAccessible || o.unaccessible
              ? t.unAccessible || (0, r.jsx)(st, {})
              : i
            : t.noFound || (0, r.jsx)(lt, {});
        },
        J = a(27754),
        dt = function () {
          return (0, r.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '32',
            height: '32',
            viewBox: '0 0 200 200',
            children: [
              (0, r.jsxs)('defs', {
                children: [
                  (0, r.jsxs)('linearGradient', {
                    id: 'linearGradient-1',
                    x1: '62.102%',
                    x2: '108.197%',
                    y1: '0%',
                    y2: '37.864%',
                    children: [
                      (0, r.jsx)('stop', { offset: '0%', stopColor: '#4285EB' }),
                      (0, r.jsx)('stop', { offset: '100%', stopColor: '#2EC7FF' }),
                    ],
                  }),
                  (0, r.jsxs)('linearGradient', {
                    id: 'linearGradient-2',
                    x1: '69.644%',
                    x2: '54.043%',
                    y1: '0%',
                    y2: '108.457%',
                    children: [
                      (0, r.jsx)('stop', { offset: '0%', stopColor: '#29CDFF' }),
                      (0, r.jsx)('stop', { offset: '37.86%', stopColor: '#148EFF' }),
                      (0, r.jsx)('stop', { offset: '100%', stopColor: '#0A60FF' }),
                    ],
                  }),
                  (0, r.jsxs)('linearGradient', {
                    id: 'linearGradient-3',
                    x1: '69.691%',
                    x2: '16.723%',
                    y1: '-12.974%',
                    y2: '117.391%',
                    children: [
                      (0, r.jsx)('stop', { offset: '0%', stopColor: '#FA816E' }),
                      (0, r.jsx)('stop', { offset: '41.473%', stopColor: '#F74A5C' }),
                      (0, r.jsx)('stop', { offset: '100%', stopColor: '#F51D2C' }),
                    ],
                  }),
                  (0, r.jsxs)('linearGradient', {
                    id: 'linearGradient-4',
                    x1: '68.128%',
                    x2: '30.44%',
                    y1: '-35.691%',
                    y2: '114.943%',
                    children: [
                      (0, r.jsx)('stop', { offset: '0%', stopColor: '#FA8E7D' }),
                      (0, r.jsx)('stop', { offset: '51.264%', stopColor: '#F74A5C' }),
                      (0, r.jsx)('stop', { offset: '100%', stopColor: '#F51D2C' }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)('g', {
                fill: 'none',
                fillRule: 'evenodd',
                stroke: 'none',
                strokeWidth: '1',
                children: (0, r.jsx)('g', {
                  transform: 'translate(-20 -20)',
                  children: (0, r.jsx)('g', {
                    transform: 'translate(20 20)',
                    children: (0, r.jsxs)('g', {
                      children: [
                        (0, r.jsxs)('g', {
                          fillRule: 'nonzero',
                          children: [
                            (0, r.jsxs)('g', {
                              children: [
                                (0, r.jsx)('path', {
                                  fill: 'url(#linearGradient-1)',
                                  d: 'M91.588 4.177L4.18 91.513a11.981 11.981 0 000 16.974l87.408 87.336a12.005 12.005 0 0016.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c1.17-1.169 2.944-1.169 4.114 0l27.783 27.76c4.209 4.205 11.032 4.205 15.24 0 4.209-4.205 4.209-11.022 0-15.227L108.581 4.056c-4.719-4.594-12.312-4.557-16.993.12z',
                                }),
                                (0, r.jsx)('path', {
                                  fill: 'url(#linearGradient-2)',
                                  d: 'M91.588 4.177L4.18 91.513a11.981 11.981 0 000 16.974l87.408 87.336a12.005 12.005 0 0016.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c2.912-2.51 7.664-7.596 14.642-8.786 5.186-.883 10.855 1.062 17.009 5.837L108.58 4.056c-4.719-4.594-12.312-4.557-16.993.12z',
                                }),
                              ],
                            }),
                            (0, r.jsx)('path', {
                              fill: 'url(#linearGradient-3)',
                              d: 'M153.686 135.855c4.208 4.205 11.031 4.205 15.24 0l27.034-27.012c4.7-4.696 4.7-12.28 0-16.974l-27.27-27.15c-4.218-4.2-11.043-4.195-15.254.013-4.209 4.205-4.209 11.022 0 15.227l18.418 18.403c1.17 1.169 1.17 2.943 0 4.111l-18.168 18.154c-4.209 4.205-4.209 11.023 0 15.228z',
                            }),
                          ],
                        }),
                        (0, r.jsx)('ellipse', {
                          cx: '100.519',
                          cy: '100.437',
                          fill: 'url(#linearGradient-4)',
                          rx: '23.6',
                          ry: '23.581',
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        ct = dt,
        vt = function (t) {
          var i,
            o,
            s,
            n = {};
          return (
            t != null && t.hideFooter && (n.footerRender = !1),
            (t == null ? void 0 : t.layout) == !1
              ? ((n.pure = !0), n)
              : (t != null &&
                  (i = t.layout) !== null &&
                  i !== void 0 &&
                  i.hideMenu &&
                  (n.menuRender = !1),
                t != null &&
                  (o = t.layout) !== null &&
                  o !== void 0 &&
                  o.hideFooter &&
                  (n.footerRender = !1),
                t != null &&
                  (s = t.layout) !== null &&
                  s !== void 0 &&
                  s.hideNav &&
                  (n.headerRender = !1),
                n)
          );
        },
        ft = vt,
        ht = function (t) {
          var i,
            o = t.children,
            s = t.userConfig,
            n = s === void 0 ? {} : s,
            l = t.location,
            m = t.route,
            f = (0, q.Z)(t, ['children', 'userConfig', 'location', 'route']),
            u = (d.tT && (0, d.tT)('@@initialState')) || {
              initialState: void 0,
              loading: !1,
              setInitialState: null,
            },
            p = u.initialState,
            R = u.loading,
            C = u.setInitialState,
            F = (0, v.useMemo)(
              function () {
                var h,
                  c = (0, J.Un)(
                    (t == null || (h = t.route) === null || h === void 0 ? void 0 : h.routes) || [],
                    void 0,
                    void 0,
                    !0,
                  ),
                  y = c.menuData,
                  N = (0, J.nG)(l.pathname, y).pop();
                return N || {};
              },
              [
                l == null ? void 0 : l.pathname,
                t == null || (i = t.route) === null || i === void 0 ? void 0 : i.routes,
              ],
            ),
            x = (0, g.Z)(
              (0, g.Z)(
                (0, g.Z)(
                  {
                    itemRender: function (c) {
                      return (0, r.jsx)(T, { to: c.path, children: c.breadcrumbName });
                    },
                  },
                  n,
                ),
                f,
              ),
              ft(F || {}),
            ),
            Z = d.md === null || d.md === void 0 ? void 0 : (0, d.md)();
          return (0, r.jsx)(
            nt.ZP,
            (0, g.Z)(
              (0, g.Z)(
                {
                  route: m,
                  location: l,
                  title: (n == null ? void 0 : n.name) || (n == null ? void 0 : n.title),
                  navTheme: 'dark',
                  siderWidth: 256,
                  onMenuHeaderClick: function (c) {
                    c.stopPropagation(), c.preventDefault(), d.m8.push('/');
                  },
                  menu: { locale: n.locale },
                  menuDataRender: n.patchMenus
                    ? function (h) {
                        return n == null ? void 0 : n.patchMenus(h, u);
                      }
                    : void 0,
                  formatMessage: n == null ? void 0 : n.formatMessage,
                  logo: ct,
                  menuItemRender: function (c, y) {
                    return c.isUrl
                      ? y
                      : c.path && l.pathname !== c.path
                      ? (0, r.jsx)(T, { to: c.path, target: c.target, children: y })
                      : y;
                  },
                  disableContentMargin: !0,
                  fixSiderbar: !0,
                  fixedHeader: !0,
                  postMenuData: d.Bz
                    ? function (h) {
                        return d.Bz === null || d.Bz === void 0 ? void 0 : (0, d.Bz)(h, Z);
                      }
                    : void 0,
                },
                x,
              ),
              {},
              {
                rightContentRender:
                  (x == null ? void 0 : x.rightContentRender) !== !1 &&
                  function (h) {
                    var c = D == null ? void 0 : D(n, R, p, C);
                    return x.rightContentRender
                      ? x.rightContentRender(h, c, {
                          userConfig: n,
                          loading: R,
                          initialState: p,
                          setInitialState: C,
                        })
                      : c;
                  },
                children: (0, r.jsx)(ut, {
                  noFound: n == null ? void 0 : n.noFound,
                  unAccessible: n == null ? void 0 : n.unAccessible,
                  currentPathConfig: F,
                  children: n.childrenRender ? n.childrenRender(o, t) : o,
                }),
              },
            ),
          );
        },
        mt = ht,
        pt = function (e) {
          var t = (0, v.useState)(null),
            i = (0, b.Z)(t, 2),
            o = i[0],
            s = i[1],
            n = (d.tT && (0, d.tT)('@@initialState')) || {
              initialState: void 0,
              loading: !1,
              setInitialState: null,
            },
            l = d.md === null || d.md === void 0 ? void 0 : (0, d.md)();
          (0, v.useEffect)(
            function () {
              var f =
                d.BA.applyPlugins({
                  key: 'layout',
                  type: k.Ac.modify,
                  initialValue: (0, g.Z)(
                    (0, g.Z)({}, n),
                    {},
                    {
                      traverseModifyRoutes: function (p) {
                        return d.Bz === null || d.Bz === void 0 ? void 0 : (0, d.Bz)(p, l);
                      },
                    },
                  ),
                }) || {};
              if (f instanceof Promise) {
                f.then(function (u) {
                  s(u);
                });
                return;
              }
              s(f);
            },
            [n == null ? void 0 : n.initialState, l],
          );
          var m = (0, g.Z)(
            (0, g.Z)(
              {},
              {
                name: 'ant-design-pro',
                theme: 'PRO',
                locale: !0,
                showBreadcrumb: !0,
                siderWidth: 208,
                navTheme: 'dark',
                primaryColor: '#1890ff',
                layout: 'mix',
                contentWidth: 'Fluid',
                fixedHeader: !1,
                fixSiderbar: !0,
                colorWeak: !1,
                title: 'Ant Design Pro',
                pwa: !1,
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                iconfontUrl: '',
              },
            ),
            o || {},
          );
          return o ? v.createElement(mt, (0, g.Z)({ userConfig: m }, e)) : null;
        };
    },
  },
]);
