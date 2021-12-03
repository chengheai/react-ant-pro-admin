(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [792],
  {
    64335: function (V, S, o) {
      'use strict';
      var O = o(67294),
        Z = (0, O.createContext)({});
      S.Z = Z;
    },
    85224: function (V, S, o) {
      'use strict';
      var O = o(79276),
        Z = o(72598),
        g = o(84305),
        b = o(69224),
        T = o(87301),
        p = o(67294),
        x = o(94184),
        M = o.n(x),
        w = o(97435),
        n = o(56264),
        D = o.n(n),
        I = o(64335),
        k = ['children', 'className', 'extra', 'style', 'renderContent'],
        j = function (U) {
          var K = U.children,
            J = U.className,
            Q = U.extra,
            he = U.style,
            _ = U.renderContent,
            ce = (0, T.Z)(U, k),
            de = (0, p.useContext)(b.ZP.ConfigContext),
            ue = de.getPrefixCls,
            G = U.prefixCls || ue('pro'),
            fe = ''.concat(G, '-footer-bar'),
            E = (0, p.useContext)(I.Z),
            ne = (0, p.useMemo)(
              function () {
                var q = E.hasSiderMenu,
                  X = E.isMobile,
                  ee = E.siderWidth;
                if (!!q) return ee ? (X ? '100%' : 'calc(100% - '.concat(ee, 'px)')) : '100%';
              },
              [E.collapsed, E.hasSiderMenu, E.isMobile, E.siderWidth],
            ),
            ae = p.createElement(
              p.Fragment,
              null,
              p.createElement('div', { className: ''.concat(fe, '-left') }, Q),
              p.createElement('div', { className: ''.concat(fe, '-right') }, K),
            );
          return (
            (0, p.useEffect)(function () {
              return !E || !(E == null ? void 0 : E.setHasFooterToolbar)
                ? function () {}
                : (E == null || E.setHasFooterToolbar(!0),
                  function () {
                    var q;
                    E == null ||
                      (q = E.setHasFooterToolbar) === null ||
                      q === void 0 ||
                      q.call(E, !1);
                  });
            }, []),
            p.createElement(
              'div',
              (0, O.Z)(
                { className: M()(J, ''.concat(fe)), style: (0, Z.Z)({ width: ne }, he) },
                (0, w.Z)(ce, ['prefixCls']),
              ),
              _ ? _((0, Z.Z)((0, Z.Z)((0, Z.Z)({}, U), E), {}, { leftWidth: ne }), ae) : ae,
            )
          );
        };
      S.Z = j;
    },
    81907: function (V, S, o) {
      'use strict';
      o.d(S, {
        ZP: function () {
          return Dt;
        },
      });
      var O = o(65056),
        Z = o(70883),
        g = o(16184),
        b = o(46823),
        T = o(60585),
        p = o(10206),
        x = o(55753),
        M = o(88579),
        w = o(65459),
        n = o(67294),
        D = o(94184),
        I = o.n(D),
        k = o(98423),
        j = o(39936),
        F = o(65632),
        U = o(33552),
        K = o(75164);
      function J(l) {
        var e,
          r = function (i) {
            return function () {
              (e = null), l.apply(void 0, (0, U.Z)(i));
            };
          },
          t = function () {
            if (e == null) {
              for (var i = arguments.length, c = new Array(i), s = 0; s < i; s++)
                c[s] = arguments[s];
              e = (0, K.Z)(r(c));
            }
          };
        return (
          (t.cancel = function () {
            return K.Z.cancel(e);
          }),
          t
        );
      }
      function Q() {
        return function (e, r, t) {
          var a = t.value,
            i = !1;
          return {
            configurable: !0,
            get: function () {
              if (i || this === e.prototype || this.hasOwnProperty(r)) return a;
              var s = J(a.bind(this));
              return (
                (i = !0),
                Object.defineProperty(this, r, { value: s, configurable: !0, writable: !0 }),
                (i = !1),
                s
              );
            },
          };
        };
      }
      var he = o(64019);
      function _(l) {
        return l !== window ? l.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
      }
      function ce(l, e, r) {
        if (r !== void 0 && e.top > l.top - r) return r + e.top;
      }
      function de(l, e, r) {
        if (r !== void 0 && e.bottom < l.bottom + r) {
          var t = window.innerHeight - e.bottom;
          return r + t;
        }
      }
      var ue = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'],
        G = [];
      function fe() {
        return G;
      }
      function E(l, e) {
        if (!!l) {
          var r = G.find(function (t) {
            return t.target === l;
          });
          r
            ? r.affixList.push(e)
            : ((r = { target: l, affixList: [e], eventHandlers: {} }),
              G.push(r),
              ue.forEach(function (t) {
                r.eventHandlers[t] = (0, he.Z)(l, t, function () {
                  r.affixList.forEach(function (a) {
                    a.lazyUpdatePosition();
                  });
                });
              }));
        }
      }
      function ne(l) {
        var e = G.find(function (r) {
          var t = r.affixList.some(function (a) {
            return a === l;
          });
          return (
            t &&
              (r.affixList = r.affixList.filter(function (a) {
                return a !== l;
              })),
            t
          );
        });
        e &&
          e.affixList.length === 0 &&
          ((G = G.filter(function (r) {
            return r !== e;
          })),
          ue.forEach(function (r) {
            var t = e.eventHandlers[r];
            t && t.remove && t.remove();
          }));
      }
      var ae = function (l, e, r, t) {
        var a = arguments.length,
          i = a < 3 ? e : t === null ? (t = Object.getOwnPropertyDescriptor(e, r)) : t,
          c;
        if (
          (typeof Reflect == 'undefined' ? 'undefined' : (0, w.Z)(Reflect)) === 'object' &&
          typeof Reflect.decorate == 'function'
        )
          i = Reflect.decorate(l, e, r, t);
        else
          for (var s = l.length - 1; s >= 0; s--)
            (c = l[s]) && (i = (a < 3 ? c(i) : a > 3 ? c(e, r, i) : c(e, r)) || i);
        return a > 3 && i && Object.defineProperty(e, r, i), i;
      };
      function q() {
        return typeof window != 'undefined' ? window : null;
      }
      var X;
      (function (l) {
        (l[(l.None = 0)] = 'None'), (l[(l.Prepare = 1)] = 'Prepare');
      })(X || (X = {}));
      var ee = (function (l) {
        (0, x.Z)(r, l);
        var e = (0, M.Z)(r);
        function r() {
          var t;
          return (
            (0, T.Z)(this, r),
            (t = e.apply(this, arguments)),
            (t.state = { status: X.None, lastAffix: !1, prevTarget: null }),
            (t.getOffsetTop = function () {
              var a = t.props.offsetBottom,
                i = t.props.offsetTop;
              return a === void 0 && i === void 0 && (i = 0), i;
            }),
            (t.getOffsetBottom = function () {
              return t.props.offsetBottom;
            }),
            (t.savePlaceholderNode = function (a) {
              t.placeholderNode = a;
            }),
            (t.saveFixedNode = function (a) {
              t.fixedNode = a;
            }),
            (t.measure = function () {
              var a = t.state,
                i = a.status,
                c = a.lastAffix,
                s = t.props.onChange,
                d = t.getTargetFunc();
              if (!(i !== X.Prepare || !t.fixedNode || !t.placeholderNode || !d)) {
                var v = t.getOffsetTop(),
                  f = t.getOffsetBottom(),
                  h = d();
                if (!!h) {
                  var u = { status: X.None },
                    m = _(h),
                    y = _(t.placeholderNode),
                    R = ce(y, m, v),
                    C = de(y, m, f);
                  R !== void 0
                    ? ((u.affixStyle = {
                        position: 'fixed',
                        top: R,
                        width: y.width,
                        height: y.height,
                      }),
                      (u.placeholderStyle = { width: y.width, height: y.height }))
                    : C !== void 0 &&
                      ((u.affixStyle = {
                        position: 'fixed',
                        bottom: C,
                        width: y.width,
                        height: y.height,
                      }),
                      (u.placeholderStyle = { width: y.width, height: y.height })),
                    (u.lastAffix = !!u.affixStyle),
                    s && c !== u.lastAffix && s(u.lastAffix),
                    t.setState(u);
                }
              }
            }),
            (t.prepareMeasure = function () {
              if (
                (t.setState({ status: X.Prepare, affixStyle: void 0, placeholderStyle: void 0 }),
                !1)
              )
                var a;
            }),
            (t.render = function () {
              var a = t.context.getPrefixCls,
                i = t.state,
                c = i.affixStyle,
                s = i.placeholderStyle,
                d = t.props,
                v = d.prefixCls,
                f = d.children,
                h = I()((0, b.Z)({}, a('affix', v), !!c)),
                u = (0, k.Z)(t.props, [
                  'prefixCls',
                  'offsetTop',
                  'offsetBottom',
                  'target',
                  'onChange',
                ]);
              return n.createElement(
                j.Z,
                {
                  onResize: function () {
                    t.updatePosition();
                  },
                },
                n.createElement(
                  'div',
                  (0, g.Z)({}, u, { ref: t.savePlaceholderNode }),
                  c && n.createElement('div', { style: s, 'aria-hidden': 'true' }),
                  n.createElement(
                    'div',
                    { className: h, ref: t.saveFixedNode, style: c },
                    n.createElement(
                      j.Z,
                      {
                        onResize: function () {
                          t.updatePosition();
                        },
                      },
                      f,
                    ),
                  ),
                ),
              );
            }),
            t
          );
        }
        return (
          (0, p.Z)(r, [
            {
              key: 'getTargetFunc',
              value: function () {
                var a = this.context.getTargetContainer,
                  i = this.props.target;
                return i !== void 0 ? i : a || q;
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                var a = this,
                  i = this.getTargetFunc();
                i &&
                  (this.timeout = setTimeout(function () {
                    E(i(), a), a.updatePosition();
                  }));
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (a) {
                var i = this.state.prevTarget,
                  c = this.getTargetFunc(),
                  s = null;
                c && (s = c() || null),
                  i !== s &&
                    (ne(this),
                    s && (E(s, this), this.updatePosition()),
                    this.setState({ prevTarget: s })),
                  (a.offsetTop !== this.props.offsetTop ||
                    a.offsetBottom !== this.props.offsetBottom) &&
                    this.updatePosition(),
                  this.measure();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                clearTimeout(this.timeout),
                  ne(this),
                  this.updatePosition.cancel(),
                  this.lazyUpdatePosition.cancel();
              },
            },
            {
              key: 'updatePosition',
              value: function () {
                this.prepareMeasure();
              },
            },
            {
              key: 'lazyUpdatePosition',
              value: function () {
                var a = this.getTargetFunc(),
                  i = this.state.affixStyle;
                if (a && i) {
                  var c = this.getOffsetTop(),
                    s = this.getOffsetBottom(),
                    d = a();
                  if (d && this.placeholderNode) {
                    var v = _(d),
                      f = _(this.placeholderNode),
                      h = ce(f, v, c),
                      u = de(f, v, s);
                    if ((h !== void 0 && i.top === h) || (u !== void 0 && i.bottom === u)) return;
                  }
                }
                this.prepareMeasure();
              },
            },
          ]),
          r
        );
      })(n.Component);
      (ee.contextType = F.E_),
        ae([Q()], ee.prototype, 'updatePosition', null),
        ae([Q()], ee.prototype, 'lazyUpdatePosition', null);
      var We = ee,
        Ce = o(55690),
        Xt = o(84305),
        ge = o(69224),
        Yt = o(59903),
        Vt = o(81262),
        Jt = o(30887),
        Qt = o(59250),
        _t = o(94233),
        He = o(33671),
        ve = o(22251),
        ze = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'arrow-left',
          theme: 'outlined',
        },
        je = ze,
        xe = o(19129),
        Pe = function (e, r) {
          return n.createElement(xe.Z, (0, ve.Z)((0, ve.Z)({}, e), {}, { ref: r, icon: je }));
        };
      Pe.displayName = 'ArrowLeftOutlined';
      var Ke = n.forwardRef(Pe),
        $e = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z',
                },
              },
            ],
          },
          name: 'arrow-right',
          theme: 'outlined',
        },
        ke = $e,
        Ee = function (e, r) {
          return n.createElement(xe.Z, (0, ve.Z)((0, ve.Z)({}, e), {}, { ref: r, icon: ke }));
        };
      Ee.displayName = 'ArrowRightOutlined';
      var Ge = n.forwardRef(Ee),
        Xe = o(50344),
        Ye = o(57254),
        Ve = o(81555),
        Je = function (l, e) {
          var r = {};
          for (var t in l)
            Object.prototype.hasOwnProperty.call(l, t) && e.indexOf(t) < 0 && (r[t] = l[t]);
          if (l != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var a = 0, t = Object.getOwnPropertySymbols(l); a < t.length; a++)
              e.indexOf(t[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(l, t[a]) &&
                (r[t[a]] = l[t[a]]);
          return r;
        },
        Oe = function (e) {
          var r = e.prefixCls,
            t = e.separator,
            a = t === void 0 ? '/' : t,
            i = e.children,
            c = e.overlay,
            s = e.dropdownProps,
            d = Je(e, ['prefixCls', 'separator', 'children', 'overlay', 'dropdownProps']),
            v = n.useContext(F.E_),
            f = v.getPrefixCls,
            h = f('breadcrumb', r),
            u = function (R) {
              return c
                ? n.createElement(
                    Ve.Z,
                    (0, g.Z)({ overlay: c, placement: 'bottomCenter' }, s),
                    n.createElement(
                      'span',
                      { className: ''.concat(h, '-overlay-link') },
                      R,
                      n.createElement(Ye.Z, null),
                    ),
                  )
                : R;
            },
            m;
          return (
            'href' in d
              ? (m = n.createElement('a', (0, g.Z)({ className: ''.concat(h, '-link') }, d), i))
              : (m = n.createElement('span', (0, g.Z)({ className: ''.concat(h, '-link') }, d), i)),
            (m = u(m)),
            i
              ? n.createElement(
                  'span',
                  null,
                  m,
                  a && n.createElement('span', { className: ''.concat(h, '-separator') }, a),
                )
              : null
          );
        };
      Oe.__ANT_BREADCRUMB_ITEM = !0;
      var Ne = Oe,
        Ze = function (e) {
          var r = e.children,
            t = n.useContext(F.E_),
            a = t.getPrefixCls,
            i = a('breadcrumb');
          return n.createElement('span', { className: ''.concat(i, '-separator') }, r || '/');
        };
      Ze.__ANT_BREADCRUMB_SEPARATOR = !0;
      var Qe = Ze,
        Re = o(99210),
        _e = o(21687),
        qe = o(96159),
        et = function (l, e) {
          var r = {};
          for (var t in l)
            Object.prototype.hasOwnProperty.call(l, t) && e.indexOf(t) < 0 && (r[t] = l[t]);
          if (l != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var a = 0, t = Object.getOwnPropertySymbols(l); a < t.length; a++)
              e.indexOf(t[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(l, t[a]) &&
                (r[t[a]] = l[t[a]]);
          return r;
        };
      function tt(l, e) {
        if (!l.breadcrumbName) return null;
        var r = Object.keys(e).join('|'),
          t = l.breadcrumbName.replace(new RegExp(':('.concat(r, ')'), 'g'), function (a, i) {
            return e[i] || a;
          });
        return t;
      }
      function rt(l, e, r, t) {
        var a = r.indexOf(l) === r.length - 1,
          i = tt(l, e);
        return a
          ? n.createElement('span', null, i)
          : n.createElement('a', { href: '#/'.concat(t.join('/')) }, i);
      }
      var Te = function (e, r) {
          return (
            (e = (e || '').replace(/^\//, '')),
            Object.keys(r).forEach(function (t) {
              e = e.replace(':'.concat(t), r[t]);
            }),
            e
          );
        },
        nt = function (e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '',
            t = arguments.length > 2 ? arguments[2] : void 0,
            a = (0, U.Z)(e),
            i = Te(r, t);
          return i && a.push(i), a;
        },
        ye = function (e) {
          var r = e.prefixCls,
            t = e.separator,
            a = t === void 0 ? '/' : t,
            i = e.style,
            c = e.className,
            s = e.routes,
            d = e.children,
            v = e.itemRender,
            f = v === void 0 ? rt : v,
            h = e.params,
            u = h === void 0 ? {} : h,
            m = et(e, [
              'prefixCls',
              'separator',
              'style',
              'className',
              'routes',
              'children',
              'itemRender',
              'params',
            ]),
            y = n.useContext(F.E_),
            R = y.getPrefixCls,
            C = y.direction,
            P,
            z = R('breadcrumb', r);
          if (s && s.length > 0) {
            var A = [];
            P = s.map(function (N) {
              var L = Te(N.path, u);
              L && A.push(L);
              var W;
              return (
                N.children &&
                  N.children.length &&
                  (W = n.createElement(
                    Re.Z,
                    null,
                    N.children.map(function ($) {
                      return n.createElement(
                        Re.Z.Item,
                        { key: $.path || $.breadcrumbName },
                        f($, u, s, nt(A, $.path, u)),
                      );
                    }),
                  )),
                n.createElement(
                  Ne,
                  { overlay: W, separator: a, key: L || N.breadcrumbName },
                  f(N, u, s, A),
                )
              );
            });
          } else
            d &&
              (P = (0, Xe.Z)(d).map(function (N, L) {
                return (
                  N &&
                  ((0, _e.Z)(
                    N.type &&
                      (N.type.__ANT_BREADCRUMB_ITEM === !0 ||
                        N.type.__ANT_BREADCRUMB_SEPARATOR === !0),
                    'Breadcrumb',
                    "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children",
                  ),
                  (0, qe.Tm)(N, { separator: a, key: L }))
                );
              }));
          var B = I()(z, (0, b.Z)({}, ''.concat(z, '-rtl'), C === 'rtl'), c);
          return n.createElement('div', (0, g.Z)({ className: B, style: i }, m), P);
        };
      (ye.Item = Ne), (ye.Separator = Qe);
      var at = ye,
        ot = at,
        it = o(51890),
        lt = o(34952),
        st = o(42051),
        ct = function (e, r, t) {
          return !r || !t
            ? null
            : n.createElement(st.Z, { componentName: 'PageHeader' }, function (a) {
                var i = a.back;
                return n.createElement(
                  'div',
                  { className: ''.concat(e, '-back') },
                  n.createElement(
                    lt.Z,
                    {
                      onClick: function (s) {
                        t == null || t(s);
                      },
                      className: ''.concat(e, '-back-button'),
                      'aria-label': i,
                    },
                    r,
                  ),
                );
              });
        },
        dt = function (e) {
          return n.createElement(ot, e);
        },
        ut = function (e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'ltr';
          return e.backIcon !== void 0
            ? e.backIcon
            : r === 'rtl'
            ? n.createElement(Ge, null)
            : n.createElement(Ke, null);
        },
        ft = function (e, r) {
          var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'ltr',
            a = r.title,
            i = r.avatar,
            c = r.subTitle,
            s = r.tags,
            d = r.extra,
            v = r.onBack,
            f = ''.concat(e, '-heading'),
            h = a || c || s || d;
          if (!h) return null;
          var u = ut(r, t),
            m = ct(e, u, v),
            y = m || i || h;
          return n.createElement(
            'div',
            { className: f },
            y &&
              n.createElement(
                'div',
                { className: ''.concat(f, '-left') },
                m,
                i && n.createElement(it.C, i),
                a &&
                  n.createElement(
                    'span',
                    { className: ''.concat(f, '-title'), title: typeof a == 'string' ? a : void 0 },
                    a,
                  ),
                c &&
                  n.createElement(
                    'span',
                    {
                      className: ''.concat(f, '-sub-title'),
                      title: typeof c == 'string' ? c : void 0,
                    },
                    c,
                  ),
                s && n.createElement('span', { className: ''.concat(f, '-tags') }, s),
              ),
            d && n.createElement('span', { className: ''.concat(f, '-extra') }, d),
          );
        },
        vt = function (e, r) {
          return r ? n.createElement('div', { className: ''.concat(e, '-footer') }, r) : null;
        },
        mt = function (e, r) {
          return n.createElement('div', { className: ''.concat(e, '-content') }, r);
        },
        ht = function (e) {
          var r = n.useState(!1),
            t = (0, He.Z)(r, 2),
            a = t[0],
            i = t[1],
            c = function (d) {
              var v = d.width;
              i(v < 768);
            };
          return n.createElement(F.C, null, function (s) {
            var d,
              v = s.getPrefixCls,
              f = s.pageHeader,
              h = s.direction,
              u = e.prefixCls,
              m = e.style,
              y = e.footer,
              R = e.children,
              C = e.breadcrumb,
              P = e.breadcrumbRender,
              z = e.className,
              A = !0;
            'ghost' in e ? (A = e.ghost) : f && 'ghost' in f && (A = f.ghost);
            var B = v('page-header', u),
              N = function () {
                var re;
                return ((re = C) === null || re === void 0 ? void 0 : re.routes) ? dt(C) : null;
              },
              L = N(),
              W = C && 'props' in C,
              $ = (P == null ? void 0 : P(e, L)) || L,
              ie = W ? C : $,
              me = I()(
                B,
                z,
                ((d = { 'has-breadcrumb': !!ie, 'has-footer': !!y }),
                (0, b.Z)(d, ''.concat(B, '-ghost'), A),
                (0, b.Z)(d, ''.concat(B, '-rtl'), h === 'rtl'),
                (0, b.Z)(d, ''.concat(B, '-compact'), a),
                d),
              );
            return n.createElement(
              j.Z,
              { onResize: c },
              n.createElement(
                'div',
                { className: me, style: m },
                ie,
                ft(B, e, h),
                R && mt(B, R),
                vt(B, y),
              ),
            );
          });
        },
        gt = ht,
        H = o(72598),
        Be = o(87301),
        qt = o(18106),
        Ae = o(57260),
        oe = o(79276),
        yt = o(67179),
        be = o(64335),
        er = o(53645),
        bt = function (e) {
          var r = (0, n.useContext)(be.Z),
            t = e.children,
            a = e.contentWidth,
            i = e.className,
            c = e.style,
            s = (0, n.useContext)(ge.ZP.ConfigContext),
            d = s.getPrefixCls,
            v = e.prefixCls || d('pro'),
            f = a || r.contentWidth,
            h = ''.concat(v, '-grid-content');
          return n.createElement(
            'div',
            { className: I()(h, i, { wide: f === 'Fixed' }), style: c },
            n.createElement('div', { className: ''.concat(v, '-grid-content-children') }, t),
          );
        },
        pt = bt,
        Ct = o(85224),
        tr = o(12395),
        xt = o(83832),
        Pt = o(98775),
        Et = function (e) {
          if (!e) return 1;
          var r =
            e.backingStorePixelRatio ||
            e.webkitBackingStorePixelRatio ||
            e.mozBackingStorePixelRatio ||
            e.msBackingStorePixelRatio ||
            e.oBackingStorePixelRatio ||
            e.backingStorePixelRatio ||
            1;
          return (window.devicePixelRatio || 1) / r;
        },
        Ot = function (e) {
          var r = e.children,
            t = e.style,
            a = e.className,
            i = e.markStyle,
            c = e.markClassName,
            s = e.zIndex,
            d = s === void 0 ? 9 : s,
            v = e.gapX,
            f = v === void 0 ? 212 : v,
            h = e.gapY,
            u = h === void 0 ? 222 : h,
            m = e.width,
            y = m === void 0 ? 120 : m,
            R = e.height,
            C = R === void 0 ? 64 : R,
            P = e.rotate,
            z = P === void 0 ? -22 : P,
            A = e.image,
            B = e.content,
            N = e.offsetLeft,
            L = e.offsetTop,
            W = e.fontStyle,
            $ = W === void 0 ? 'normal' : W,
            ie = e.fontWeight,
            me = ie === void 0 ? 'normal' : ie,
            pe = e.fontColor,
            re = pe === void 0 ? 'rgba(0,0,0,.15)' : pe,
            Se = e.fontSize,
            Me = Se === void 0 ? 16 : Se,
            De = e.fontFamily,
            Ie = De === void 0 ? 'sans-serif' : De,
            It = e.prefixCls,
            Lt = (0, n.useContext)(ge.ZP.ConfigContext),
            wt = Lt.getPrefixCls,
            Le = wt('pro-layout-watermark', It),
            Ut = I()(''.concat(Le, '-wrapper'), a),
            Ft = I()(Le, c),
            Wt = (0, n.useState)(''),
            we = (0, Pt.Z)(Wt, 2),
            Ht = we[0],
            Ue = we[1];
          return (
            (0, n.useEffect)(
              function () {
                var le = document.createElement('canvas'),
                  Y = le.getContext('2d'),
                  te = Et(Y),
                  zt = ''.concat((f + y) * te, 'px'),
                  jt = ''.concat((u + C) * te, 'px'),
                  Kt = N || f / 2,
                  $t = L || u / 2;
                if ((le.setAttribute('width', zt), le.setAttribute('height', jt), Y)) {
                  Y.translate(Kt * te, $t * te), Y.rotate((Math.PI / 180) * Number(z));
                  var kt = y * te,
                    Fe = C * te;
                  if (A) {
                    var se = new Image();
                    (se.crossOrigin = 'anonymous'),
                      (se.referrerPolicy = 'no-referrer'),
                      (se.src = A),
                      (se.onload = function () {
                        Y.drawImage(se, 0, 0, kt, Fe), Ue(le.toDataURL());
                      });
                  } else if (B) {
                    var Gt = Number(Me) * te;
                    (Y.font = ''
                      .concat($, ' normal ')
                      .concat(me, ' ')
                      .concat(Gt, 'px/')
                      .concat(Fe, 'px ')
                      .concat(Ie)),
                      (Y.fillStyle = re),
                      Y.fillText(B, 0, 0),
                      Ue(le.toDataURL());
                  }
                } else console.error('\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas');
              },
              [f, u, N, L, z, $, me, y, C, Ie, re, A, B, Me],
            ),
            n.createElement(
              'div',
              { style: (0, H.Z)({ position: 'relative' }, t), className: Ut },
              r,
              n.createElement('div', {
                className: Ft,
                style: (0, H.Z)(
                  {
                    zIndex: d,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    backgroundSize: ''.concat(f + y, 'px'),
                    pointerEvents: 'none',
                    backgroundRepeat: 'repeat',
                    backgroundImage: "url('".concat(Ht, "')"),
                  },
                  i,
                ),
              }),
            )
          );
        },
        Nt = Ot,
        Zt = [
          'title',
          'content',
          'pageHeaderRender',
          'header',
          'prefixedClassName',
          'extraContent',
          'style',
          'prefixCls',
          'breadcrumbRender',
        ],
        Rt = [
          'children',
          'loading',
          'className',
          'style',
          'footer',
          'affixProps',
          'ghost',
          'fixedHeader',
        ];
      function Tt(l) {
        return (0, yt.Z)(l) === 'object' ? l : { spinning: l };
      }
      var Bt = function (e) {
          var r = e.tabList,
            t = e.tabActiveKey,
            a = e.onTabChange,
            i = e.tabBarExtraContent,
            c = e.tabProps,
            s = e.prefixedClassName;
          return (r && r.length) || i
            ? n.createElement(
                Ae.Z,
                (0, oe.Z)(
                  {
                    className: ''.concat(s, '-tabs'),
                    activeKey: t,
                    onChange: function (v) {
                      a && a(v);
                    },
                    tabBarExtraContent: i,
                  },
                  c,
                ),
                r == null
                  ? void 0
                  : r.map(function (d, v) {
                      return n.createElement(
                        Ae.Z.TabPane,
                        (0, oe.Z)({}, d, { tab: d.tab, key: d.key || v }),
                      );
                    }),
              )
            : null;
        },
        At = function (e, r, t) {
          return !e && !r
            ? null
            : n.createElement(
                'div',
                { className: ''.concat(t, '-detail') },
                n.createElement(
                  'div',
                  { className: ''.concat(t, '-main') },
                  n.createElement(
                    'div',
                    { className: ''.concat(t, '-row') },
                    e && n.createElement('div', { className: ''.concat(t, '-content') }, e),
                    r && n.createElement('div', { className: ''.concat(t, '-extraContent') }, r),
                  ),
                ),
              );
        },
        rr = function (e) {
          var r = useContext(RouteContext);
          return React.createElement(
            'div',
            { style: { height: '100%', display: 'flex', alignItems: 'center' } },
            React.createElement(
              _Breadcrumb,
              _extends(
                {},
                r == null ? void 0 : r.breadcrumb,
                r == null ? void 0 : r.breadcrumbProps,
                e,
              ),
            ),
          );
        },
        St = function (e) {
          var r,
            t = (0, n.useContext)(be.Z),
            a = e.title,
            i = e.content,
            c = e.pageHeaderRender,
            s = e.header,
            d = e.prefixedClassName,
            v = e.extraContent,
            f = e.style,
            h = e.prefixCls,
            u = e.breadcrumbRender,
            m = (0, Be.Z)(e, Zt),
            y = (0, n.useMemo)(
              function () {
                if (!!u) return u;
              },
              [u],
            );
          if (c === !1) return null;
          if (c) return n.createElement(n.Fragment, null, ' ', c((0, H.Z)((0, H.Z)({}, e), t)));
          var R = a;
          !a && a !== !1 && (R = t.title);
          var C = (0, H.Z)(
              (0, H.Z)((0, H.Z)({}, t), {}, { title: R }, m),
              {},
              {
                footer: Bt(
                  (0, H.Z)((0, H.Z)({}, m), {}, { breadcrumbRender: u, prefixedClassName: d }),
                ),
              },
              s,
            ),
            P = C.breadcrumb,
            z =
              (!P ||
                (!(P == null ? void 0 : P.itemRender) &&
                  !(P == null || (r = P.routes) === null || r === void 0 ? void 0 : r.length))) &&
              !u;
          return ['title', 'subTitle', 'extra', 'tags', 'footer', 'avatar', 'backIcon'].every(
            function (A) {
              return !C[A];
            },
          ) &&
            z &&
            !i &&
            !v
            ? null
            : n.createElement(
                'div',
                { className: ''.concat(d, '-warp') },
                n.createElement(
                  gt,
                  (0, oe.Z)({}, C, {
                    breadcrumb:
                      u === !1 ? void 0 : (0, H.Z)((0, H.Z)({}, C.breadcrumb), t.breadcrumbProps),
                    breadcrumbRender: y,
                    prefixCls: h,
                  }),
                  (s == null ? void 0 : s.children) || At(i, v, d),
                ),
              );
        },
        Mt = function (e) {
          var r,
            t = e.children,
            a = e.loading,
            i = a === void 0 ? !1 : a,
            c = e.className,
            s = e.style,
            d = e.footer,
            v = e.affixProps,
            f = e.ghost,
            h = e.fixedHeader,
            u = (0, Be.Z)(e, Rt),
            m = (0, n.useContext)(be.Z),
            y = (0, n.useContext)(ge.ZP.ConfigContext),
            R = y.getPrefixCls,
            C = e.prefixCls || R('pro'),
            P = ''.concat(C, '-page-container'),
            z = I()(
              P,
              c,
              ((r = {}),
              (0, Ce.Z)(r, ''.concat(C, '-page-container-ghost'), f),
              (0, Ce.Z)(r, ''.concat(C, '-page-container-with-footer'), d),
              r),
            ),
            A = (0, n.useMemo)(
              function () {
                return t
                  ? n.createElement(
                      n.Fragment,
                      null,
                      n.createElement('div', { className: ''.concat(P, '-children-content') }, t),
                      m.hasFooterToolbar &&
                        n.createElement('div', { style: { height: 48, marginTop: 24 } }),
                    )
                  : null;
              },
              [t, P, m.hasFooterToolbar],
            ),
            B = n.createElement(
              St,
              (0, oe.Z)({}, u, { ghost: f, prefixCls: void 0, prefixedClassName: P }),
            ),
            N = (0, n.useMemo)(
              function () {
                if (n.isValidElement(i)) return i;
                if (typeof i == 'boolean' && !i) return null;
                var W = Tt(i);
                return n.createElement(xt.Z, W);
              },
              [i],
            ),
            L = (0, n.useMemo)(
              function () {
                var W = N || A;
                return e.waterMarkProps || m.waterMarkProps
                  ? n.createElement(Nt, e.waterMarkProps || m.waterMarkProps, W)
                  : W;
              },
              [e.waterMarkProps, m.waterMarkProps, N, A],
            );
          return n.createElement(
            'div',
            { style: s, className: z },
            h && B
              ? n.createElement(
                  We,
                  (0, oe.Z)({ offsetTop: m.hasHeader && m.fixedHeader ? m.headerHeight : 0 }, v),
                  B,
                )
              : B,
            L && n.createElement(pt, null, L),
            d && n.createElement(Ct.Z, { prefixCls: C }, d),
          );
        },
        Dt = Mt;
    },
    13738: function (V, S, o) {
      'use strict';
      o.d(S, {
        Z: function () {
          return O;
        },
      });
      function O(Z, g) {
        (g == null || g > Z.length) && (g = Z.length);
        for (var b = 0, T = new Array(g); b < g; b++) T[b] = Z[b];
        return T;
      }
    },
    98775: function (V, S, o) {
      'use strict';
      o.d(S, {
        Z: function () {
          return T;
        },
      });
      function O(p) {
        if (Array.isArray(p)) return p;
      }
      function Z(p, x) {
        var M =
          p == null
            ? null
            : (typeof Symbol != 'undefined' && p[Symbol.iterator]) || p['@@iterator'];
        if (M != null) {
          var w = [],
            n = !0,
            D = !1,
            I,
            k;
          try {
            for (
              M = M.call(p);
              !(n = (I = M.next()).done) && (w.push(I.value), !(x && w.length === x));
              n = !0
            );
          } catch (j) {
            (D = !0), (k = j);
          } finally {
            try {
              !n && M.return != null && M.return();
            } finally {
              if (D) throw k;
            }
          }
          return w;
        }
      }
      var g = o(89523);
      function b() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function T(p, x) {
        return O(p) || Z(p, x) || (0, g.Z)(p, x) || b();
      }
    },
    67179: function (V, S, o) {
      'use strict';
      o.d(S, {
        Z: function () {
          return O;
        },
      });
      function O(Z) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (O = function (b) {
                return typeof b;
              })
            : (O = function (b) {
                return b &&
                  typeof Symbol == 'function' &&
                  b.constructor === Symbol &&
                  b !== Symbol.prototype
                  ? 'symbol'
                  : typeof b;
              }),
          O(Z)
        );
      }
    },
    89523: function (V, S, o) {
      'use strict';
      o.d(S, {
        Z: function () {
          return Z;
        },
      });
      var O = o(13738);
      function Z(g, b) {
        if (!!g) {
          if (typeof g == 'string') return (0, O.Z)(g, b);
          var T = Object.prototype.toString.call(g).slice(8, -1);
          if (
            (T === 'Object' && g.constructor && (T = g.constructor.name),
            T === 'Map' || T === 'Set')
          )
            return Array.from(g);
          if (T === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))
            return (0, O.Z)(g, b);
        }
      }
    },
    56264: function () {},
    53645: function () {},
    12395: function () {},
    70883: function () {},
    81262: function () {},
    59903: function () {},
    34952: function (V, S, o) {
      'use strict';
      var O = o(16184),
        Z = o(67294),
        g = o(15105),
        b = function (x, M) {
          var w = {};
          for (var n in x)
            Object.prototype.hasOwnProperty.call(x, n) && M.indexOf(n) < 0 && (w[n] = x[n]);
          if (x != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var D = 0, n = Object.getOwnPropertySymbols(x); D < n.length; D++)
              M.indexOf(n[D]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(x, n[D]) &&
                (w[n[D]] = x[n[D]]);
          return w;
        },
        T = {
          border: 0,
          background: 'transparent',
          padding: 0,
          lineHeight: 'inherit',
          display: 'inline-block',
        },
        p = Z.forwardRef(function (x, M) {
          var w = function (K) {
              var J = K.keyCode;
              J === g.Z.ENTER && K.preventDefault();
            },
            n = function (K) {
              var J = K.keyCode,
                Q = x.onClick;
              J === g.Z.ENTER && Q && Q();
            },
            D = x.style,
            I = x.noStyle,
            k = x.disabled,
            j = b(x, ['style', 'noStyle', 'disabled']),
            F = {};
          return (
            I || (F = (0, O.Z)({}, T)),
            k && (F.pointerEvents = 'none'),
            (F = (0, O.Z)((0, O.Z)({}, F), D)),
            Z.createElement(
              'div',
              (0, O.Z)({ role: 'button', tabIndex: 0, ref: M }, j, {
                onKeyDown: w,
                onKeyUp: n,
                style: F,
              }),
            )
          );
        });
      S.Z = p;
    },
  },
]);
