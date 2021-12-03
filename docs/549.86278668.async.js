(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [549],
  {
    57254: function (we, ee, f) {
      'use strict';
      f.d(ee, {
        Z: function () {
          return me;
        },
      });
      var Y = f(22251),
        V = f(67294),
        r = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
                },
              },
            ],
          },
          name: 'down',
          theme: 'outlined',
        },
        $ = r,
        N = f(19129),
        oe = function (ue, pe) {
          return V.createElement(N.Z, (0, Y.Z)((0, Y.Z)({}, ue), {}, { ref: pe, icon: $ }));
        };
      oe.displayName = 'DownOutlined';
      var me = V.forwardRef(oe);
    },
    49101: function (we, ee, f) {
      'use strict';
      f.d(ee, {
        Z: function () {
          return me;
        },
      });
      var Y = f(22251),
        V = f(67294),
        r = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
              {
                tag: 'path',
                attrs: { d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z' },
              },
              {
                tag: 'path',
                attrs: { d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z' },
              },
            ],
          },
          name: 'plus',
          theme: 'outlined',
        },
        $ = r,
        N = f(19129),
        oe = function (ue, pe) {
          return V.createElement(N.Z, (0, Y.Z)((0, Y.Z)({}, ue), {}, { ref: pe, icon: $ }));
        };
      oe.displayName = 'PlusOutlined';
      var me = V.forwardRef(oe);
    },
    25414: function () {},
    57260: function (we, ee, f) {
      'use strict';
      f.d(ee, {
        Z: function () {
          return Kn;
        },
      });
      var Y = f(16184),
        V = f(46823),
        r = f(67294);
      function $() {
        return (
          ($ =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          $.apply(this, arguments)
        );
      }
      function N(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function oe(e) {
        if (Array.isArray(e)) return e;
      }
      function me(e, t) {
        var n =
          e == null
            ? null
            : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
        if (n != null) {
          var a = [],
            o = !0,
            i = !1,
            l,
            s;
          try {
            for (
              n = n.call(e);
              !(o = (l = n.next()).done) && (a.push(l.value), !(t && a.length === t));
              o = !0
            );
          } catch (c) {
            (i = !0), (s = c);
          } finally {
            try {
              !o && n.return != null && n.return();
            } finally {
              if (i) throw s;
            }
          }
          return a;
        }
      }
      function be(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      function ue(e, t) {
        if (!!e) {
          if (typeof e == 'string') return be(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            (n === 'Object' && e.constructor && (n = e.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(e);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return be(e, t);
        }
      }
      function pe() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function C(e, t) {
        return oe(e) || me(e, t) || ue(e, t) || pe();
      }
      function fe(e) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (fe = function (n) {
                return typeof n;
              })
            : (fe = function (n) {
                return n &&
                  typeof Symbol == 'function' &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? 'symbol'
                  : typeof n;
              }),
          fe(e)
        );
      }
      function Ut(e, t) {
        if (e == null) return {};
        var n = {},
          a = Object.keys(e),
          o,
          i;
        for (i = 0; i < a.length; i++) (o = a[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
        return n;
      }
      function Gt(e, t) {
        if (e == null) return {};
        var n = Ut(e, t),
          a,
          o;
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (a = i[o]),
              !(t.indexOf(a) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(e, a) || (n[a] = e[a]));
        }
        return n;
      }
      function Qe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (o) {
              return Object.getOwnPropertyDescriptor(e, o).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? Qe(Object(n), !0).forEach(function (a) {
                N(e, a, n[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Qe(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
              });
        }
        return e;
      }
      var Yt = f(94184),
        _ = f.n(Yt),
        Je = f(50344),
        _t = f(31131),
        qe = f(46691);
      function Xt(e) {
        if (Array.isArray(e)) return be(e);
      }
      function Qt(e) {
        if ((typeof Symbol != 'undefined' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
          return Array.from(e);
      }
      function Jt() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function et(e) {
        return Xt(e) || Qt(e) || ue(e) || Jt();
      }
      var ye = f(75164),
        hr = f(80334),
        tt = f(42550),
        nt = f(34203),
        qt = f(91033),
        te = new Map();
      function en(e) {
        e.forEach(function (t) {
          var n,
            a = t.target;
          (n = te.get(a)) === null ||
            n === void 0 ||
            n.forEach(function (o) {
              return o(a);
            });
        });
      }
      var rt = new qt.Z(en),
        mr = null,
        br = null;
      function tn(e, t) {
        te.has(e) || (te.set(e, new Set()), rt.observe(e)), te.get(e).add(t);
      }
      function nn(e, t) {
        te.has(e) && (te.get(e).delete(t), te.get(e).size || (rt.unobserve(e), te.delete(e)));
      }
      function rn(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function at(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function an(e, t, n) {
        return t && at(e.prototype, t), n && at(e, n), e;
      }
      function Ze(e, t) {
        return (
          (Ze =
            Object.setPrototypeOf ||
            function (a, o) {
              return (a.__proto__ = o), a;
            }),
          Ze(e, t)
        );
      }
      function on(e, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Ze(e, t);
      }
      function Oe(e) {
        return (
          (Oe = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n);
              }),
          Oe(e)
        );
      }
      function ln() {
        if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function cn(e) {
        if (e === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function sn(e, t) {
        if (t && (fe(t) === 'object' || typeof t == 'function')) return t;
        if (t !== void 0)
          throw new TypeError('Derived constructors may only return object or undefined');
        return cn(e);
      }
      function un(e) {
        var t = ln();
        return function () {
          var a = Oe(e),
            o;
          if (t) {
            var i = Oe(this).constructor;
            o = Reflect.construct(a, arguments, i);
          } else o = a.apply(this, arguments);
          return sn(this, o);
        };
      }
      var fn = (function (e) {
          on(n, e);
          var t = un(n);
          function n() {
            return rn(this, n), t.apply(this, arguments);
          }
          return (
            an(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(r.Component),
        je = r.createContext(null);
      function dn(e) {
        var t = e.children,
          n = e.onBatchResize,
          a = r.useRef(0),
          o = r.useRef([]),
          i = r.useContext(je),
          l = r.useCallback(
            function (s, c, v) {
              a.current += 1;
              var h = a.current;
              o.current.push({ size: s, element: c, data: v }),
                Promise.resolve().then(function () {
                  h === a.current && (n == null || n(o.current), (o.current = []));
                }),
                i == null || i(s, c, v);
            },
            [n, i],
          );
        return r.createElement(je.Provider, { value: l }, t);
      }
      function vn(e) {
        var t = e.children,
          n = e.disabled,
          a = r.useRef(null),
          o = r.useRef(null),
          i = r.useContext(je),
          l = r.useRef({ width: 0, height: 0, offsetWidth: 0, offsetHeight: 0 }),
          s = r.isValidElement(t) && (0, tt.Yr)(t),
          c = s ? t.ref : null,
          v = r.useMemo(
            function () {
              return (0, tt.sQ)(c, a);
            },
            [c, a],
          ),
          h = r.useRef(e);
        h.current = e;
        var m = r.useCallback(function (u) {
          var w = h.current,
            E = w.onResize,
            g = w.data,
            I = u.getBoundingClientRect(),
            M = I.width,
            k = I.height,
            d = u.offsetWidth,
            p = u.offsetHeight,
            W = Math.floor(M),
            L = Math.floor(k);
          if (
            l.current.width !== W ||
            l.current.height !== L ||
            l.current.offsetWidth !== d ||
            l.current.offsetHeight !== p
          ) {
            var A = { width: W, height: L, offsetWidth: d, offsetHeight: p };
            l.current = A;
            var T = d === Math.round(M) ? M : d,
              b = p === Math.round(k) ? k : p,
              P = F(F({}, A), {}, { offsetWidth: T, offsetHeight: b });
            i == null || i(P, u, g),
              E &&
                Promise.resolve().then(function () {
                  E(P, u);
                });
          }
        }, []);
        return (
          r.useEffect(
            function () {
              var u = (0, nt.Z)(a.current) || (0, nt.Z)(o.current);
              return (
                u && !n && tn(u, m),
                function () {
                  return nn(u, m);
                }
              );
            },
            [a.current, n],
          ),
          r.createElement(fn, { ref: o }, s ? r.cloneElement(t, { ref: v }) : t)
        );
      }
      var hn = 'rc-observer-key';
      function ot(e) {
        var t = e.children,
          n = (0, Je.Z)(t);
        return n.map(function (a, o) {
          var i = (a == null ? void 0 : a.key) || ''.concat(hn, '-').concat(o);
          return r.createElement(vn, $({}, e, { key: i }), a);
        });
      }
      ot.Collection = dn;
      var it = ot;
      function lt(e) {
        var t = (0, r.useRef)(),
          n = (0, r.useRef)(!1);
        function a() {
          for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
          n.current ||
            (ye.Z.cancel(t.current),
            (t.current = (0, ye.Z)(function () {
              e.apply(void 0, i);
            })));
        }
        return (
          (0, r.useEffect)(function () {
            return function () {
              (n.current = !0), ye.Z.cancel(t.current);
            };
          }, []),
          a
        );
      }
      function mn(e) {
        var t = (0, r.useRef)([]),
          n = (0, r.useState)({}),
          a = C(n, 2),
          o = a[1],
          i = (0, r.useRef)(typeof e == 'function' ? e() : e),
          l = lt(function () {
            var c = i.current;
            t.current.forEach(function (v) {
              c = v(c);
            }),
              (t.current = []),
              (i.current = c),
              o({});
          });
        function s(c) {
          t.current.push(c), l();
        }
        return [i.current, s];
      }
      var Q = f(15105);
      function bn(e, t) {
        var n,
          a = e.prefixCls,
          o = e.id,
          i = e.active,
          l = e.tab,
          s = l.key,
          c = l.tab,
          v = l.disabled,
          h = l.closeIcon,
          m = e.closable,
          u = e.renderWrapper,
          w = e.removeAriaLabel,
          E = e.editable,
          g = e.onClick,
          I = e.onRemove,
          M = e.onFocus,
          k = e.style,
          d = ''.concat(a, '-tab');
        r.useEffect(function () {
          return I;
        }, []);
        var p = E && m !== !1 && !v;
        function W(T) {
          v || g(T);
        }
        function L(T) {
          T.preventDefault(), T.stopPropagation(), E.onEdit('remove', { key: s, event: T });
        }
        var A = r.createElement(
          'div',
          {
            key: s,
            ref: t,
            className: _()(
              d,
              ((n = {}),
              N(n, ''.concat(d, '-with-remove'), p),
              N(n, ''.concat(d, '-active'), i),
              N(n, ''.concat(d, '-disabled'), v),
              n),
            ),
            style: k,
            onClick: W,
          },
          r.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': i,
              id: o && ''.concat(o, '-tab-').concat(s),
              className: ''.concat(d, '-btn'),
              'aria-controls': o && ''.concat(o, '-panel-').concat(s),
              'aria-disabled': v,
              tabIndex: v ? null : 0,
              onClick: function (b) {
                b.stopPropagation(), W(b);
              },
              onKeyDown: function (b) {
                [Q.Z.SPACE, Q.Z.ENTER].includes(b.which) && (b.preventDefault(), W(b));
              },
              onFocus: M,
            },
            c,
          ),
          p &&
            r.createElement(
              'button',
              {
                type: 'button',
                'aria-label': w || 'remove',
                tabIndex: 0,
                className: ''.concat(d, '-remove'),
                onClick: function (b) {
                  b.stopPropagation(), L(b);
                },
              },
              h || E.removeIcon || '\xD7',
            ),
        );
        return u ? u(A) : A;
      }
      var pn = r.forwardRef(bn),
        ct = { width: 0, height: 0, left: 0, top: 0 };
      function yn(e, t, n) {
        return (0, r.useMemo)(
          function () {
            for (
              var a,
                o = new Map(),
                i = t.get((a = e[0]) === null || a === void 0 ? void 0 : a.key) || ct,
                l = i.left + i.width,
                s = 0;
              s < e.length;
              s += 1
            ) {
              var c = e[s].key,
                v = t.get(c);
              if (!v) {
                var h;
                v = t.get((h = e[s - 1]) === null || h === void 0 ? void 0 : h.key) || ct;
              }
              var m = o.get(c) || F({}, v);
              (m.right = l - m.left - m.width), o.set(c, m);
            }
            return o;
          },
          [
            e
              .map(function (a) {
                return a.key;
              })
              .join('_'),
            t,
            n,
          ],
        );
      }
      var st = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function gn(e, t, n, a, o) {
        var i = o.tabs,
          l = o.tabPosition,
          s = o.rtl,
          c,
          v,
          h;
        ['top', 'bottom'].includes(l)
          ? ((c = 'width'), (v = s ? 'right' : 'left'), (h = Math.abs(t.left)))
          : ((c = 'height'), (v = 'top'), (h = -t.top));
        var m = t[c],
          u = n[c],
          w = a[c],
          E = m;
        return (
          u + w > m && (E = m - w),
          (0, r.useMemo)(
            function () {
              if (!i.length) return [0, 0];
              for (var g = i.length, I = g, M = 0; M < g; M += 1) {
                var k = e.get(i[M].key) || st;
                if (k[v] + k[c] > h + E) {
                  I = M - 1;
                  break;
                }
              }
              for (var d = 0, p = g - 1; p >= 0; p -= 1) {
                var W = e.get(i[p].key) || st;
                if (W[v] < h) {
                  d = p + 1;
                  break;
                }
              }
              return [d, I];
            },
            [
              e,
              h,
              E,
              l,
              i
                .map(function (g) {
                  return g.key;
                })
                .join('_'),
              s,
            ],
          )
        );
      }
      var ut = f(2110),
        Sn = f(61051);
      function En(e, t) {
        var n = e.prefixCls,
          a = e.editable,
          o = e.locale,
          i = e.style;
        return !a || a.showAdd === !1
          ? null
          : r.createElement(
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: i,
                'aria-label': (o == null ? void 0 : o.addAriaLabel) || 'Add tab',
                onClick: function (s) {
                  a.onEdit('add', { event: s });
                },
              },
              a.addIcon || '+',
            );
      }
      var ft = r.forwardRef(En);
      function Rn(e, t) {
        var n = e.prefixCls,
          a = e.id,
          o = e.tabs,
          i = e.locale,
          l = e.mobile,
          s = e.moreIcon,
          c = s === void 0 ? 'More' : s,
          v = e.moreTransitionName,
          h = e.style,
          m = e.className,
          u = e.editable,
          w = e.tabBarGutter,
          E = e.rtl,
          g = e.removeAriaLabel,
          I = e.onTabClick,
          M = (0, r.useState)(!1),
          k = C(M, 2),
          d = k[0],
          p = k[1],
          W = (0, r.useState)(null),
          L = C(W, 2),
          A = L[0],
          T = L[1],
          b = ''.concat(a, '-more-popup'),
          P = ''.concat(n, '-dropdown'),
          D = A !== null ? ''.concat(b, '-').concat(A) : null,
          y = i == null ? void 0 : i.dropdownAriaLabel;
        function O(S, Z) {
          S.preventDefault(), S.stopPropagation(), u.onEdit('remove', { key: Z, event: S });
        }
        var B = r.createElement(
          ut.ZP,
          {
            onClick: function (Z) {
              var U = Z.key,
                z = Z.domEvent;
              I(U, z), p(!1);
            },
            id: b,
            tabIndex: -1,
            role: 'listbox',
            'aria-activedescendant': D,
            selectedKeys: [A],
            'aria-label': y !== void 0 ? y : 'expanded dropdown',
          },
          o.map(function (S) {
            var Z = u && S.closable !== !1 && !S.disabled;
            return r.createElement(
              ut.sN,
              {
                key: S.key,
                id: ''.concat(b, '-').concat(S.key),
                role: 'option',
                'aria-controls': a && ''.concat(a, '-panel-').concat(S.key),
                disabled: S.disabled,
              },
              r.createElement('span', null, S.tab),
              Z &&
                r.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': g || 'remove',
                    tabIndex: 0,
                    className: ''.concat(P, '-menu-item-remove'),
                    onClick: function (z) {
                      z.stopPropagation(), O(z, S.key);
                    },
                  },
                  S.closeIcon || u.removeIcon || '\xD7',
                ),
            );
          }),
        );
        function j(S) {
          for (
            var Z = o.filter(function (re) {
                return !re.disabled;
              }),
              U =
                Z.findIndex(function (re) {
                  return re.key === A;
                }) || 0,
              z = Z.length,
              ie = 0;
            ie < z;
            ie += 1
          ) {
            U = (U + S + z) % z;
            var le = Z[U];
            if (!le.disabled) {
              T(le.key);
              return;
            }
          }
        }
        function ne(S) {
          var Z = S.which;
          if (!d) {
            [Q.Z.DOWN, Q.Z.SPACE, Q.Z.ENTER].includes(Z) && (p(!0), S.preventDefault());
            return;
          }
          switch (Z) {
            case Q.Z.UP:
              j(-1), S.preventDefault();
              break;
            case Q.Z.DOWN:
              j(1), S.preventDefault();
              break;
            case Q.Z.ESC:
              p(!1);
              break;
            case Q.Z.SPACE:
            case Q.Z.ENTER:
              A !== null && I(A, S);
              break;
          }
        }
        (0, r.useEffect)(
          function () {
            var S = document.getElementById(D);
            S && S.scrollIntoView && S.scrollIntoView(!1);
          },
          [A],
        ),
          (0, r.useEffect)(
            function () {
              d || T(null);
            },
            [d],
          );
        var q = N({}, E ? 'marginRight' : 'marginLeft', w);
        o.length || ((q.visibility = 'hidden'), (q.order = 1));
        var de = _()(N({}, ''.concat(P, '-rtl'), E)),
          X = l
            ? null
            : r.createElement(
                Sn.Z,
                {
                  prefixCls: P,
                  overlay: B,
                  trigger: ['hover'],
                  visible: d,
                  transitionName: v,
                  onVisibleChange: p,
                  overlayClassName: de,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                r.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: q,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': b,
                    id: ''.concat(a, '-more'),
                    'aria-expanded': d,
                    onKeyDown: ne,
                  },
                  c,
                ),
              );
        return r.createElement(
          'div',
          { className: _()(''.concat(n, '-nav-operations'), m), style: h, ref: t },
          X,
          r.createElement(ft, { prefixCls: n, locale: i, editable: u }),
        );
      }
      var xn = r.memo(r.forwardRef(Rn), function (e, t) {
          return t.tabMoving;
        }),
        He = (0, r.createContext)(null),
        Cn = 0.1,
        dt = 0.01,
        Ie = 20,
        vt = Math.pow(0.995, Ie);
      function Pn(e, t) {
        var n = (0, r.useState)(),
          a = C(n, 2),
          o = a[0],
          i = a[1],
          l = (0, r.useState)(0),
          s = C(l, 2),
          c = s[0],
          v = s[1],
          h = (0, r.useState)(0),
          m = C(h, 2),
          u = m[0],
          w = m[1],
          E = (0, r.useState)(),
          g = C(E, 2),
          I = g[0],
          M = g[1],
          k = (0, r.useRef)();
        function d(b) {
          var P = b.touches[0],
            D = P.screenX,
            y = P.screenY;
          i({ x: D, y }), window.clearInterval(k.current);
        }
        function p(b) {
          if (!!o) {
            b.preventDefault();
            var P = b.touches[0],
              D = P.screenX,
              y = P.screenY;
            i({ x: D, y });
            var O = D - o.x,
              B = y - o.y;
            t(O, B);
            var j = Date.now();
            v(j), w(j - c), M({ x: O, y: B });
          }
        }
        function W() {
          if (!!o && (i(null), M(null), I)) {
            var b = I.x / u,
              P = I.y / u,
              D = Math.abs(b),
              y = Math.abs(P);
            if (Math.max(D, y) < Cn) return;
            var O = b,
              B = P;
            k.current = window.setInterval(function () {
              if (Math.abs(O) < dt && Math.abs(B) < dt) {
                window.clearInterval(k.current);
                return;
              }
              (O *= vt), (B *= vt), t(O * Ie, B * Ie);
            }, Ie);
          }
        }
        var L = (0, r.useRef)();
        function A(b) {
          var P = b.deltaX,
            D = b.deltaY,
            y = 0,
            O = Math.abs(P),
            B = Math.abs(D);
          O === B
            ? (y = L.current === 'x' ? P : D)
            : O > B
            ? ((y = P), (L.current = 'x'))
            : ((y = D), (L.current = 'y')),
            t(-y, -y) && b.preventDefault();
        }
        var T = (0, r.useRef)(null);
        (T.current = { onTouchStart: d, onTouchMove: p, onTouchEnd: W, onWheel: A }),
          r.useEffect(function () {
            function b(O) {
              T.current.onTouchStart(O);
            }
            function P(O) {
              T.current.onTouchMove(O);
            }
            function D(O) {
              T.current.onTouchEnd(O);
            }
            function y(O) {
              T.current.onWheel(O);
            }
            return (
              document.addEventListener('touchmove', P, { passive: !1 }),
              document.addEventListener('touchend', D, { passive: !1 }),
              e.current.addEventListener('touchstart', b, { passive: !1 }),
              e.current.addEventListener('wheel', y),
              function () {
                document.removeEventListener('touchmove', P),
                  document.removeEventListener('touchend', D);
              }
            );
          }, []);
      }
      function Tn() {
        var e = (0, r.useRef)(new Map());
        function t(a) {
          return e.current.has(a) || e.current.set(a, r.createRef()), e.current.get(a);
        }
        function n(a) {
          e.current.delete(a);
        }
        return [t, n];
      }
      function ht(e, t) {
        var n = r.useRef(e),
          a = r.useState({}),
          o = C(a, 2),
          i = o[1];
        function l(s) {
          var c = typeof s == 'function' ? s(n.current) : s;
          c !== n.current && t(c, n.current), (n.current = c), i({});
        }
        return [n.current, l];
      }
      var mt = function (t) {
        var n = t.position,
          a = t.prefixCls,
          o = t.extra;
        if (!o) return null;
        var i,
          l = {};
        return (
          o && fe(o) === 'object' && !r.isValidElement(o) ? (l = o) : (l.right = o),
          n === 'right' && (i = l.right),
          n === 'left' && (i = l.left),
          i ? r.createElement('div', { className: ''.concat(a, '-extra-content') }, i) : null
        );
      };
      function wn(e, t) {
        var n,
          a = r.useContext(He),
          o = a.prefixCls,
          i = a.tabs,
          l = e.className,
          s = e.style,
          c = e.id,
          v = e.animated,
          h = e.activeKey,
          m = e.rtl,
          u = e.extra,
          w = e.editable,
          E = e.locale,
          g = e.tabPosition,
          I = e.tabBarGutter,
          M = e.children,
          k = e.onTabClick,
          d = e.onTabScroll,
          p = (0, r.useRef)(),
          W = (0, r.useRef)(),
          L = (0, r.useRef)(),
          A = (0, r.useRef)(),
          T = Tn(),
          b = C(T, 2),
          P = b[0],
          D = b[1],
          y = g === 'top' || g === 'bottom',
          O = ht(0, function (x, R) {
            y && d && d({ direction: x > R ? 'left' : 'right' });
          }),
          B = C(O, 2),
          j = B[0],
          ne = B[1],
          q = ht(0, function (x, R) {
            !y && d && d({ direction: x > R ? 'top' : 'bottom' });
          }),
          de = C(q, 2),
          X = de[0],
          S = de[1],
          Z = (0, r.useState)(0),
          U = C(Z, 2),
          z = U[0],
          ie = U[1],
          le = (0, r.useState)(0),
          re = C(le, 2),
          ge = re[0],
          Ne = re[1],
          Ke = (0, r.useState)(0),
          ke = C(Ke, 2),
          Se = ke[0],
          ze = ke[1],
          Ae = (0, r.useState)(0),
          ve = C(Ae, 2),
          Me = ve[0],
          K = ve[1],
          ce = (0, r.useState)(null),
          We = C(ce, 2),
          J = We[0],
          zn = We[1],
          $n = (0, r.useState)(null),
          Et = C($n, 2),
          he = Et[0],
          Vn = Et[1],
          Fn = (0, r.useState)(0),
          Rt = C(Fn, 2),
          Un = Rt[0],
          Gn = Rt[1],
          Yn = (0, r.useState)(0),
          xt = C(Yn, 2),
          _n = xt[0],
          Xn = xt[1],
          Qn = mn(new Map()),
          Ct = C(Qn, 2),
          Jn = Ct[0],
          qn = Ct[1],
          Le = yn(i, Jn, z),
          Pt = ''.concat(o, '-nav-operations-hidden'),
          Ee = 0,
          Re = 0;
        y
          ? m
            ? ((Ee = 0), (Re = Math.max(0, z - J)))
            : ((Ee = Math.min(0, J - z)), (Re = 0))
          : ((Ee = Math.min(0, he - ge)), (Re = 0));
        function $e(x) {
          return x < Ee ? Ee : x > Re ? Re : x;
        }
        var Tt = (0, r.useRef)(),
          er = (0, r.useState)(),
          wt = C(er, 2),
          De = wt[0],
          Ot = wt[1];
        function Ve() {
          Ot(Date.now());
        }
        function Fe() {
          window.clearTimeout(Tt.current);
        }
        Pn(p, function (x, R) {
          function H(G, se) {
            G(function (Ce) {
              var Pe = $e(Ce + se);
              return Pe;
            });
          }
          if (y) {
            if (J >= z) return !1;
            H(ne, x);
          } else {
            if (he >= ge) return !1;
            H(S, R);
          }
          return Fe(), Ve(), !0;
        }),
          (0, r.useEffect)(
            function () {
              return (
                Fe(),
                De &&
                  (Tt.current = window.setTimeout(function () {
                    Ot(0);
                  }, 100)),
                Fe
              );
            },
            [De],
          );
        function It() {
          var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : h,
            R = Le.get(x) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (y) {
            var H = j;
            m
              ? R.right < j
                ? (H = R.right)
                : R.right + R.width > j + J && (H = R.right + R.width - J)
              : R.left < -j
              ? (H = -R.left)
              : R.left + R.width > -j + J && (H = -(R.left + R.width - J)),
              S(0),
              ne($e(H));
          } else {
            var G = X;
            R.top < -X
              ? (G = -R.top)
              : R.top + R.height > -X + he && (G = -(R.top + R.height - he)),
              ne(0),
              S($e(G));
          }
        }
        var tr = gn(
            Le,
            { width: J, height: he, left: j, top: X },
            { width: Se, height: Me },
            { width: Un, height: _n },
            F(F({}, e), {}, { tabs: i }),
          ),
          Nt = C(tr, 2),
          nr = Nt[0],
          rr = Nt[1],
          Be = {};
        g === 'top' || g === 'bottom'
          ? (Be[m ? 'marginRight' : 'marginLeft'] = I)
          : (Be.marginTop = I);
        var kt = i.map(function (x, R) {
            var H = x.key;
            return r.createElement(pn, {
              id: c,
              prefixCls: o,
              key: H,
              tab: x,
              style: R === 0 ? void 0 : Be,
              closable: x.closable,
              editable: w,
              active: H === h,
              renderWrapper: M,
              removeAriaLabel: E == null ? void 0 : E.removeAriaLabel,
              ref: P(H),
              onClick: function (se) {
                k(H, se);
              },
              onRemove: function () {
                D(H);
              },
              onFocus: function () {
                It(H),
                  Ve(),
                  !!p.current && (m || (p.current.scrollLeft = 0), (p.current.scrollTop = 0));
              },
            });
          }),
          Ue = lt(function () {
            var x,
              R,
              H,
              G,
              se,
              Ce,
              Pe,
              _e,
              Xe,
              sr = ((x = p.current) === null || x === void 0 ? void 0 : x.offsetWidth) || 0,
              ur = ((R = p.current) === null || R === void 0 ? void 0 : R.offsetHeight) || 0,
              jt = ((H = A.current) === null || H === void 0 ? void 0 : H.offsetWidth) || 0,
              Ht = ((G = A.current) === null || G === void 0 ? void 0 : G.offsetHeight) || 0,
              fr = ((se = L.current) === null || se === void 0 ? void 0 : se.offsetWidth) || 0,
              dr = ((Ce = L.current) === null || Ce === void 0 ? void 0 : Ce.offsetHeight) || 0;
            zn(sr), Vn(ur), Gn(jt), Xn(Ht);
            var Kt =
                (((Pe = W.current) === null || Pe === void 0 ? void 0 : Pe.offsetWidth) || 0) - jt,
              zt =
                (((_e = W.current) === null || _e === void 0 ? void 0 : _e.offsetHeight) || 0) - Ht;
            ie(Kt), Ne(zt);
            var $t =
              (Xe = L.current) === null || Xe === void 0 ? void 0 : Xe.className.includes(Pt);
            ze(Kt - ($t ? 0 : fr)),
              K(zt - ($t ? 0 : dr)),
              qn(function () {
                var Vt = new Map();
                return (
                  i.forEach(function (vr) {
                    var Ft = vr.key,
                      Te = P(Ft).current;
                    Te &&
                      Vt.set(Ft, {
                        width: Te.offsetWidth,
                        height: Te.offsetHeight,
                        left: Te.offsetLeft,
                        top: Te.offsetTop,
                      });
                  }),
                  Vt
                );
              });
          }),
          ar = i.slice(0, nr),
          or = i.slice(rr + 1),
          At = [].concat(et(ar), et(or)),
          ir = (0, r.useState)(),
          Mt = C(ir, 2),
          lr = Mt[0],
          cr = Mt[1],
          ae = Le.get(h),
          Wt = (0, r.useRef)();
        function Lt() {
          ye.Z.cancel(Wt.current);
        }
        (0, r.useEffect)(
          function () {
            var x = {};
            return (
              ae &&
                (y
                  ? (m ? (x.right = ae.right) : (x.left = ae.left), (x.width = ae.width))
                  : ((x.top = ae.top), (x.height = ae.height))),
              Lt(),
              (Wt.current = (0, ye.Z)(function () {
                cr(x);
              })),
              Lt
            );
          },
          [ae, y, m],
        ),
          (0, r.useEffect)(
            function () {
              It();
            },
            [h, ae, Le, y],
          ),
          (0, r.useEffect)(
            function () {
              Ue();
            },
            [
              m,
              I,
              h,
              i
                .map(function (x) {
                  return x.key;
                })
                .join('_'),
            ],
          );
        var Dt = !!At.length,
          xe = ''.concat(o, '-nav-wrap'),
          Ge,
          Ye,
          Bt,
          Zt;
        return (
          y
            ? m
              ? ((Ye = j > 0), (Ge = j + J < z))
              : ((Ge = j < 0), (Ye = -j + J < z))
            : ((Bt = X < 0), (Zt = -X + he < ge)),
          r.createElement(
            'div',
            {
              ref: t,
              role: 'tablist',
              className: _()(''.concat(o, '-nav'), l),
              style: s,
              onKeyDown: function () {
                Ve();
              },
            },
            r.createElement(mt, { position: 'left', extra: u, prefixCls: o }),
            r.createElement(
              it,
              { onResize: Ue },
              r.createElement(
                'div',
                {
                  className: _()(
                    xe,
                    ((n = {}),
                    N(n, ''.concat(xe, '-ping-left'), Ge),
                    N(n, ''.concat(xe, '-ping-right'), Ye),
                    N(n, ''.concat(xe, '-ping-top'), Bt),
                    N(n, ''.concat(xe, '-ping-bottom'), Zt),
                    n),
                  ),
                  ref: p,
                },
                r.createElement(
                  it,
                  { onResize: Ue },
                  r.createElement(
                    'div',
                    {
                      ref: W,
                      className: ''.concat(o, '-nav-list'),
                      style: {
                        transform: 'translate('.concat(j, 'px, ').concat(X, 'px)'),
                        transition: De ? 'none' : void 0,
                      },
                    },
                    kt,
                    r.createElement(ft, {
                      ref: A,
                      prefixCls: o,
                      locale: E,
                      editable: w,
                      style: F(
                        F({}, kt.length === 0 ? void 0 : Be),
                        {},
                        { visibility: Dt ? 'hidden' : null },
                      ),
                    }),
                    r.createElement('div', {
                      className: _()(
                        ''.concat(o, '-ink-bar'),
                        N({}, ''.concat(o, '-ink-bar-animated'), v.inkBar),
                      ),
                      style: lr,
                    }),
                  ),
                ),
              ),
            ),
            r.createElement(
              xn,
              $({}, e, {
                removeAriaLabel: E == null ? void 0 : E.removeAriaLabel,
                ref: L,
                prefixCls: o,
                tabs: At,
                className: !Dt && Pt,
                tabMoving: !!De,
              }),
            ),
            r.createElement(mt, { position: 'right', extra: u, prefixCls: o }),
          )
        );
      }
      var bt = r.forwardRef(wn);
      function On(e) {
        var t = e.id,
          n = e.activeKey,
          a = e.animated,
          o = e.tabPosition,
          i = e.rtl,
          l = e.destroyInactiveTabPane,
          s = r.useContext(He),
          c = s.prefixCls,
          v = s.tabs,
          h = a.tabPane,
          m = v.findIndex(function (u) {
            return u.key === n;
          });
        return r.createElement(
          'div',
          { className: _()(''.concat(c, '-content-holder')) },
          r.createElement(
            'div',
            {
              className: _()(
                ''.concat(c, '-content'),
                ''.concat(c, '-content-').concat(o),
                N({}, ''.concat(c, '-content-animated'), h),
              ),
              style: m && h ? N({}, i ? 'marginRight' : 'marginLeft', '-'.concat(m, '00%')) : null,
            },
            v.map(function (u) {
              return r.cloneElement(u.node, {
                key: u.key,
                prefixCls: c,
                tabKey: u.key,
                id: t,
                animated: h,
                active: u.key === n,
                destroyInactiveTabPane: l,
              });
            }),
          ),
        );
      }
      function pt(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          a = e.className,
          o = e.style,
          i = e.id,
          l = e.active,
          s = e.animated,
          c = e.destroyInactiveTabPane,
          v = e.tabKey,
          h = e.children,
          m = r.useState(n),
          u = C(m, 2),
          w = u[0],
          E = u[1];
        r.useEffect(
          function () {
            l ? E(!0) : c && E(!1);
          },
          [l, c],
        );
        var g = {};
        return (
          l ||
            (s
              ? ((g.visibility = 'hidden'), (g.height = 0), (g.overflowY = 'hidden'))
              : (g.display = 'none')),
          r.createElement(
            'div',
            {
              id: i && ''.concat(i, '-panel-').concat(v),
              role: 'tabpanel',
              tabIndex: l ? 0 : -1,
              'aria-labelledby': i && ''.concat(i, '-tab-').concat(v),
              'aria-hidden': !l,
              style: F(F({}, g), o),
              className: _()(''.concat(t, '-tabpane'), l && ''.concat(t, '-tabpane-active'), a),
            },
            (l || w || n) && h,
          )
        );
      }
      var In = [
          'id',
          'prefixCls',
          'className',
          'children',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
        ],
        yt = 0;
      function Nn(e) {
        return (0, Je.Z)(e)
          .map(function (t) {
            if (r.isValidElement(t)) {
              var n = t.key !== void 0 ? String(t.key) : void 0;
              return F(F({ key: n }, t.props), {}, { node: t });
            }
            return null;
          })
          .filter(function (t) {
            return t;
          });
      }
      function kn(e, t) {
        var n,
          a = e.id,
          o = e.prefixCls,
          i = o === void 0 ? 'rc-tabs' : o,
          l = e.className,
          s = e.children,
          c = e.direction,
          v = e.activeKey,
          h = e.defaultActiveKey,
          m = e.editable,
          u = e.animated,
          w = u === void 0 ? { inkBar: !0, tabPane: !1 } : u,
          E = e.tabPosition,
          g = E === void 0 ? 'top' : E,
          I = e.tabBarGutter,
          M = e.tabBarStyle,
          k = e.tabBarExtraContent,
          d = e.locale,
          p = e.moreIcon,
          W = e.moreTransitionName,
          L = e.destroyInactiveTabPane,
          A = e.renderTabBar,
          T = e.onChange,
          b = e.onTabClick,
          P = e.onTabScroll,
          D = Gt(e, In),
          y = Nn(s),
          O = c === 'rtl',
          B;
        w === !1
          ? (B = { inkBar: !1, tabPane: !1 })
          : w === !0
          ? (B = { inkBar: !0, tabPane: !0 })
          : (B = F({ inkBar: !0, tabPane: !1 }, fe(w) === 'object' ? w : {}));
        var j = (0, r.useState)(!1),
          ne = C(j, 2),
          q = ne[0],
          de = ne[1];
        (0, r.useEffect)(function () {
          de((0, _t.Z)());
        }, []);
        var X = (0, qe.Z)(
            function () {
              var K;
              return (K = y[0]) === null || K === void 0 ? void 0 : K.key;
            },
            { value: v, defaultValue: h },
          ),
          S = C(X, 2),
          Z = S[0],
          U = S[1],
          z = (0, r.useState)(function () {
            return y.findIndex(function (K) {
              return K.key === Z;
            });
          }),
          ie = C(z, 2),
          le = ie[0],
          re = ie[1];
        (0, r.useEffect)(
          function () {
            var K = y.findIndex(function (We) {
              return We.key === Z;
            });
            if (K === -1) {
              var ce;
              (K = Math.max(0, Math.min(le, y.length - 1))),
                U((ce = y[K]) === null || ce === void 0 ? void 0 : ce.key);
            }
            re(K);
          },
          [
            y
              .map(function (K) {
                return K.key;
              })
              .join('_'),
            Z,
            le,
          ],
        );
        var ge = (0, qe.Z)(null, { value: a }),
          Ne = C(ge, 2),
          Ke = Ne[0],
          ke = Ne[1],
          Se = g;
        q && !['left', 'right'].includes(g) && (Se = 'top'),
          (0, r.useEffect)(function () {
            a || (ke('rc-tabs-'.concat(yt)), (yt += 1));
          }, []);
        function ze(K, ce) {
          b == null || b(K, ce), U(K), T == null || T(K);
        }
        var Ae = { id: Ke, activeKey: Z, animated: B, tabPosition: Se, rtl: O, mobile: q },
          ve,
          Me = F(
            F({}, Ae),
            {},
            {
              editable: m,
              locale: d,
              moreIcon: p,
              moreTransitionName: W,
              tabBarGutter: I,
              onTabClick: ze,
              onTabScroll: P,
              extra: k,
              style: M,
              panes: s,
            },
          );
        return (
          A ? (ve = A(Me, bt)) : (ve = r.createElement(bt, Me)),
          r.createElement(
            He.Provider,
            { value: { tabs: y, prefixCls: i } },
            r.createElement(
              'div',
              $(
                {
                  ref: t,
                  id: a,
                  className: _()(
                    i,
                    ''.concat(i, '-').concat(Se),
                    ((n = {}),
                    N(n, ''.concat(i, '-mobile'), q),
                    N(n, ''.concat(i, '-editable'), m),
                    N(n, ''.concat(i, '-rtl'), O),
                    n),
                    l,
                  ),
                },
                D,
              ),
              ve,
              r.createElement(On, $({ destroyInactiveTabPane: L }, Ae, { animated: B })),
            ),
          )
        );
      }
      var gt = r.forwardRef(kn);
      gt.TabPane = pt;
      var An = gt,
        Mn = An,
        Wn = f(44545),
        Ln = f(49101),
        Dn = f(54549),
        Bn = f(21687),
        Zn = f(65632),
        jn = f(97647),
        Hn = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
          if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++)
              t.indexOf(a[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
                (n[a[o]] = e[a[o]]);
          return n;
        };
      function St(e) {
        var t = e.type,
          n = e.className,
          a = e.size,
          o = e.onEdit,
          i = e.hideAdd,
          l = e.centered,
          s = e.addIcon,
          c = Hn(e, ['type', 'className', 'size', 'onEdit', 'hideAdd', 'centered', 'addIcon']),
          v = c.prefixCls,
          h = c.moreIcon,
          m = h === void 0 ? r.createElement(Wn.Z, null) : h,
          u = r.useContext(Zn.E_),
          w = u.getPrefixCls,
          E = u.direction,
          g = w('tabs', v),
          I;
        t === 'editable-card' &&
          (I = {
            onEdit: function (d, p) {
              var W = p.key,
                L = p.event;
              o == null || o(d === 'add' ? L : W, d);
            },
            removeIcon: r.createElement(Dn.Z, null),
            addIcon: s || r.createElement(Ln.Z, null),
            showAdd: i !== !0,
          });
        var M = w();
        return (
          (0, Bn.Z)(
            !('onPrevClick' in c) && !('onNextClick' in c),
            'Tabs',
            '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.',
          ),
          r.createElement(jn.Z.Consumer, null, function (k) {
            var d,
              p = a !== void 0 ? a : k;
            return r.createElement(
              Mn,
              (0, Y.Z)({ direction: E, moreTransitionName: ''.concat(M, '-slide-up') }, c, {
                className: _()(
                  ((d = {}),
                  (0, V.Z)(d, ''.concat(g, '-').concat(p), p),
                  (0, V.Z)(d, ''.concat(g, '-card'), ['card', 'editable-card'].includes(t)),
                  (0, V.Z)(d, ''.concat(g, '-editable-card'), t === 'editable-card'),
                  (0, V.Z)(d, ''.concat(g, '-centered'), l),
                  d),
                  n,
                ),
                editable: I,
                moreIcon: m,
                prefixCls: g,
              }),
            );
          })
        );
      }
      St.TabPane = pt;
      var Kn = St;
    },
    18106: function (we, ee, f) {
      'use strict';
      var Y = f(65056),
        V = f.n(Y),
        r = f(25414),
        $ = f.n(r);
    },
    97435: function (we, ee) {
      'use strict';
      function f(Y, V) {
        for (var r = Object.assign({}, Y), $ = 0; $ < V.length; $ += 1) {
          var N = V[$];
          delete r[N];
        }
        return r;
      }
      ee.Z = f;
    },
  },
]);
