(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [419],
  {
    2098: function (Me, we, y) {
      'use strict';
      y.d(we, {
        Oc: function () {
          return aa;
        },
        ZP: function () {
          return ia;
        },
      });
      var F = y(24793),
        D = y(97183),
        H = y(55690),
        U = y(27196),
        ne = y.n(U);
      function Re(u, e, o, i, s, c, f) {
        try {
          var g = u[c](f),
            p = g.value;
        } catch (h) {
          o(h);
          return;
        }
        g.done ? e(p) : Promise.resolve(p).then(i, s);
      }
      function Oe(u) {
        return function () {
          var e = this,
            o = arguments;
          return new Promise(function (i, s) {
            var c = u.apply(e, o);
            function f(p) {
              Re(c, i, s, f, g, 'next', p);
            }
            function g(p) {
              Re(c, i, s, f, g, 'throw', p);
            }
            f(void 0);
          });
        };
      }
      var Ue = y(87301),
        st = y(84305),
        Mt = y(69224),
        ae = y(98775),
        E = y(72598),
        M = y(79276),
        K = y(7700),
        a = y(67294),
        ie = y(94184),
        I = y.n(ie),
        X = y(42473),
        Ee = y.n(X),
        oe = y(46691),
        T = y(38069),
        j = y(56725),
        le = y(12044);
      function fe(u, e) {
        var o = typeof u.pageName == 'string' ? u.title : e;
        (0, a.useEffect)(
          function () {
            (0, le.Z)() && o && (document.title = o);
          },
          [u.title, o],
        );
      }
      var _ = fe,
        he = y(97435),
        Le = y(40821),
        Ge = y(27754);
      function _e(u, e) {
        if (!(u instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function B(u, e) {
        for (var o = 0; o < e.length; o++) {
          var i = e[o];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(u, i.key, i);
        }
      }
      function Y(u, e, o) {
        return e && B(u.prototype, e), o && B(u, o), u;
      }
      function Q(u, e) {
        return (
          (Q =
            Object.setPrototypeOf ||
            function (i, s) {
              return (i.__proto__ = s), i;
            }),
          Q(u, e)
        );
      }
      function ct(u, e) {
        if (typeof e != 'function' && e !== null)
          throw new TypeError('Super expression must either be null or a function');
        (u.prototype = Object.create(e && e.prototype, {
          constructor: { value: u, writable: !0, configurable: !0 },
        })),
          e && Q(u, e);
      }
      function Te(u) {
        return (
          (Te = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              }),
          Te(u)
        );
      }
      function ft() {
        if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (u) {
          return !1;
        }
      }
      var Ie = y(67179);
      function qe(u) {
        if (u === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return u;
      }
      function Kt(u, e) {
        if (e && ((0, Ie.Z)(e) === 'object' || typeof e == 'function')) return e;
        if (e !== void 0)
          throw new TypeError('Derived constructors may only return object or undefined');
        return qe(u);
      }
      function Cn(u) {
        var e = ft();
        return function () {
          var i = Te(u),
            s;
          if (e) {
            var c = Te(this).constructor;
            s = Reflect.construct(i, arguments, c);
          } else s = i.apply(this, arguments);
          return Kt(this, s);
        };
      }
      var Mn = y(2828),
        En = y(17124),
        Sn = y(30887),
        Se = y(99210),
        de = y(22251),
        Wt = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z',
                },
              },
            ],
          },
          name: 'menu-unfold',
          theme: 'outlined',
        },
        $t = Wt,
        Et = y(19129),
        St = function (e, o) {
          return a.createElement(Et.Z, (0, de.Z)((0, de.Z)({}, e), {}, { ref: o, icon: $t }));
        };
      St.displayName = 'MenuUnfoldOutlined';
      var Ut = a.forwardRef(St),
        Rt = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z',
                },
              },
            ],
          },
          name: 'menu-fold',
          theme: 'outlined',
        },
        Gt = Rt,
        Zt = function (e, o) {
          return a.createElement(Et.Z, (0, de.Z)((0, de.Z)({}, e), {}, { ref: o, icon: Gt }));
        };
      Zt.displayName = 'MenuFoldOutlined';
      var kt = a.forwardRef(Zt),
        Rn = y(43361),
        Zn = y(65056),
        wt = y(18067),
        se = y(46823),
        me = y(16184),
        Vt = y(65459),
        ke = function (e) {
          var o = e.prefixCls,
            i = e.className,
            s = e.width,
            c = e.style;
          return a.createElement('h3', { className: I()(o, i), style: (0, me.Z)({ width: s }, c) });
        },
        Ve = ke,
        Pt = y(33552),
        Jt = function (e) {
          var o = function (h) {
              var b = e.width,
                S = e.rows,
                w = S === void 0 ? 2 : S;
              if (Array.isArray(b)) return b[h];
              if (w - 1 === h) return b;
            },
            i = e.prefixCls,
            s = e.className,
            c = e.style,
            f = e.rows,
            g = (0, Pt.Z)(Array(f)).map(function (p, h) {
              return a.createElement('li', { key: h, style: { width: o(h) } });
            });
          return a.createElement('ul', { className: I()(i, s), style: c }, g);
        },
        dt = Jt,
        Je = y(65632),
        Qt = function (e) {
          var o,
            i,
            s = e.prefixCls,
            c = e.className,
            f = e.style,
            g = e.size,
            p = e.shape,
            h = I()(
              ((o = {}),
              (0, se.Z)(o, ''.concat(s, '-lg'), g === 'large'),
              (0, se.Z)(o, ''.concat(s, '-sm'), g === 'small'),
              o),
            ),
            b = I()(
              ((i = {}),
              (0, se.Z)(i, ''.concat(s, '-circle'), p === 'circle'),
              (0, se.Z)(i, ''.concat(s, '-square'), p === 'square'),
              (0, se.Z)(i, ''.concat(s, '-round'), p === 'round'),
              i),
            ),
            S = typeof g == 'number' ? { width: g, height: g, lineHeight: ''.concat(g, 'px') } : {};
          return a.createElement('span', {
            className: I()(s, h, b, c),
            style: (0, me.Z)((0, me.Z)({}, S), f),
          });
        },
        Fe = Qt,
        vt = y(98423),
        Nt = function (e) {
          var o = function (s) {
            var c = s.getPrefixCls,
              f = e.prefixCls,
              g = e.className,
              p = e.active,
              h = c('skeleton', f),
              b = (0, vt.Z)(e, ['prefixCls', 'className']),
              S = I()(h, ''.concat(h, '-element'), (0, se.Z)({}, ''.concat(h, '-active'), p), g);
            return a.createElement(
              'div',
              { className: S },
              a.createElement(Fe, (0, me.Z)({ prefixCls: ''.concat(h, '-avatar') }, b)),
            );
          };
          return a.createElement(Je.C, null, o);
        };
      Nt.defaultProps = { size: 'default', shape: 'circle' };
      var Ot = Nt,
        q = function (e) {
          var o = function (s) {
            var c = s.getPrefixCls,
              f = e.prefixCls,
              g = e.className,
              p = e.active,
              h = c('skeleton', f),
              b = (0, vt.Z)(e, ['prefixCls']),
              S = I()(h, ''.concat(h, '-element'), (0, se.Z)({}, ''.concat(h, '-active'), p), g);
            return a.createElement(
              'div',
              { className: S },
              a.createElement(Fe, (0, me.Z)({ prefixCls: ''.concat(h, '-button') }, b)),
            );
          };
          return a.createElement(Je.C, null, o);
        };
      q.defaultProps = { size: 'default' };
      var Xt = q,
        He = function (e) {
          var o = function (s) {
            var c = s.getPrefixCls,
              f = e.prefixCls,
              g = e.className,
              p = e.active,
              h = c('skeleton', f),
              b = (0, vt.Z)(e, ['prefixCls']),
              S = I()(h, ''.concat(h, '-element'), (0, se.Z)({}, ''.concat(h, '-active'), p), g);
            return a.createElement(
              'div',
              { className: S },
              a.createElement(Fe, (0, me.Z)({ prefixCls: ''.concat(h, '-input') }, b)),
            );
          };
          return a.createElement(Je.C, null, o);
        };
      He.defaultProps = { size: 'default' };
      var mt = He,
        Yt =
          'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
        _t = function (e) {
          var o = function (s) {
            var c = s.getPrefixCls,
              f = e.prefixCls,
              g = e.className,
              p = e.style,
              h = c('skeleton', f),
              b = I()(h, ''.concat(h, '-element'), g);
            return a.createElement(
              'div',
              { className: b },
              a.createElement(
                'div',
                { className: I()(''.concat(h, '-image'), g), style: p },
                a.createElement(
                  'svg',
                  {
                    viewBox: '0 0 1098 1024',
                    xmlns: 'http://www.w3.org/2000/svg',
                    className: ''.concat(h, '-image-svg'),
                  },
                  a.createElement('path', { d: Yt, className: ''.concat(h, '-image-path') }),
                ),
              ),
            );
          };
          return a.createElement(Je.C, null, o);
        },
        Tt = _t;
      function pt(u) {
        return u && (0, Vt.Z)(u) === 'object' ? u : {};
      }
      function gt(u, e) {
        return u && !e ? { size: 'large', shape: 'square' } : { size: 'large', shape: 'circle' };
      }
      function qt(u, e) {
        return !u && e ? { width: '38%' } : u && e ? { width: '50%' } : {};
      }
      function en(u, e) {
        var o = {};
        return (!u || !e) && (o.width = '61%'), !u && e ? (o.rows = 3) : (o.rows = 2), o;
      }
      var Be = function (e) {
        var o = function (s) {
          var c = s.getPrefixCls,
            f = s.direction,
            g = e.prefixCls,
            p = e.loading,
            h = e.className,
            b = e.children,
            S = e.avatar,
            w = e.title,
            P = e.paragraph,
            $ = e.active,
            G = e.round,
            L = c('skeleton', g);
          if (p || !('loading' in e)) {
            var k,
              O = !!S,
              ee = !!w,
              V = !!P,
              ce;
            if (O) {
              var be = (0, me.Z)(
                (0, me.Z)({ prefixCls: ''.concat(L, '-avatar') }, gt(ee, V)),
                pt(S),
              );
              ce = a.createElement(
                'div',
                { className: ''.concat(L, '-header') },
                a.createElement(Fe, be),
              );
            }
            var Ze;
            if (ee || V) {
              var ge;
              if (ee) {
                var J = (0, me.Z)(
                  (0, me.Z)({ prefixCls: ''.concat(L, '-title') }, qt(O, V)),
                  pt(w),
                );
                ge = a.createElement(Ve, J);
              }
              var je;
              if (V) {
                var Ae = (0, me.Z)(
                  (0, me.Z)({ prefixCls: ''.concat(L, '-paragraph') }, en(O, ee)),
                  pt(P),
                );
                je = a.createElement(dt, Ae);
              }
              Ze = a.createElement('div', { className: ''.concat(L, '-content') }, ge, je);
            }
            var Ke = I()(
              L,
              ((k = {}),
              (0, se.Z)(k, ''.concat(L, '-with-avatar'), O),
              (0, se.Z)(k, ''.concat(L, '-active'), $),
              (0, se.Z)(k, ''.concat(L, '-rtl'), f === 'rtl'),
              (0, se.Z)(k, ''.concat(L, '-round'), G),
              k),
              h,
            );
            return a.createElement('div', { className: Ke }, ce, Ze);
          }
          return b;
        };
        return a.createElement(Je.C, null, o);
      };
      (Be.defaultProps = { avatar: !1, title: !0, paragraph: !0 }),
        (Be.Button = Xt),
        (Be.Avatar = Ot),
        (Be.Input = mt),
        (Be.Image = Tt);
      var tn = Be,
        nn = tn,
        rn = y(13738);
      function an(u) {
        if (Array.isArray(u)) return (0, rn.Z)(u);
      }
      function on(u) {
        if ((typeof Symbol != 'undefined' && u[Symbol.iterator] != null) || u['@@iterator'] != null)
          return Array.from(u);
      }
      var It = y(89523);
      function et() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function tt(u) {
        return an(u) || on(u) || (0, It.Z)(u) || et();
      }
      var At = y(55937),
        Dt = y(26562),
        ln = y(63017),
        nt = y(7600),
        un = [
          'className',
          'component',
          'viewBox',
          'spin',
          'rotate',
          'tabIndex',
          'onClick',
          'children',
        ],
        t = a.forwardRef(function (u, e) {
          var o = u.className,
            i = u.component,
            s = u.viewBox,
            c = u.spin,
            f = u.rotate,
            g = u.tabIndex,
            p = u.onClick,
            h = u.children,
            b = (0, At.Z)(u, un);
          (0, nt.Kp)(Boolean(i || h), 'Should have `component` prop or `children`.'), (0, nt.C3)();
          var S = a.useContext(ln.Z),
            w = S.prefixCls,
            P = w === void 0 ? 'anticon' : w,
            $ = I()(P, o),
            G = I()((0, Dt.Z)({}, ''.concat(P, '-spin'), !!c)),
            L = f
              ? { msTransform: 'rotate('.concat(f, 'deg)'), transform: 'rotate('.concat(f, 'deg)') }
              : void 0,
            k = (0, de.Z)((0, de.Z)({}, nt.vD), {}, { className: G, style: L, viewBox: s });
          s || delete k.viewBox;
          var O = function () {
              return i
                ? a.createElement(i, (0, de.Z)({}, k), h)
                : h
                ? ((0, nt.Kp)(
                    Boolean(s) ||
                      (a.Children.count(h) === 1 &&
                        a.isValidElement(h) &&
                        a.Children.only(h).type === 'use'),
                    'Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.',
                  ),
                  a.createElement('svg', (0, de.Z)((0, de.Z)({}, k), {}, { viewBox: s }), h))
                : null;
            },
            ee = g;
          return (
            ee === void 0 && p && (ee = -1),
            a.createElement(
              'span',
              (0, de.Z)(
                (0, de.Z)({ role: 'img' }, b),
                {},
                { ref: e, tabIndex: ee, onClick: p, className: $ },
              ),
              O(),
            )
          );
        });
      t.displayName = 'AntdIcon';
      var r = t,
        n = ['type', 'children'],
        l = new Set();
      function v(u) {
        return Boolean(typeof u == 'string' && u.length && !l.has(u));
      }
      function m(u) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
          o = u[e];
        if (v(o)) {
          var i = document.createElement('script');
          i.setAttribute('src', o),
            i.setAttribute('data-namespace', o),
            u.length > e + 1 &&
              ((i.onload = function () {
                m(u, e + 1);
              }),
              (i.onerror = function () {
                m(u, e + 1);
              })),
            l.add(o),
            document.body.appendChild(i);
        }
      }
      function d() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          e = u.scriptUrl,
          o = u.extraCommonProps,
          i = o === void 0 ? {} : o;
        e &&
          typeof document != 'undefined' &&
          typeof window != 'undefined' &&
          typeof document.createElement == 'function' &&
          (Array.isArray(e) ? m(e.reverse()) : m([e]));
        var s = a.forwardRef(function (c, f) {
          var g = c.type,
            p = c.children,
            h = (0, At.Z)(c, n),
            b = null;
          return (
            c.type && (b = a.createElement('use', { xlinkHref: '#'.concat(g) })),
            p && (b = p),
            a.createElement(r, (0, de.Z)((0, de.Z)((0, de.Z)({}, i), h), {}, { ref: f }), b)
          );
        });
        return (s.displayName = 'Iconfont'), s;
      }
      var x = function (e) {
          if (!e.startsWith('http')) return !1;
          try {
            var o = new URL(e);
            return !!o;
          } catch (i) {
            return !1;
          }
        },
        C = x;
      function Z(u) {
        return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(u);
      }
      var A = Z,
        R = {
          navTheme: 'dark',
          layout: 'side',
          contentWidth: 'Fluid',
          fixedHeader: !1,
          fixSiderbar: !1,
          headerHeight: 48,
          iconfontUrl: '',
          primaryColor: 'daybreak',
          splitMenus: !1,
        },
        N = R,
        W = function u(e) {
          return (e || []).reduce(function (o, i) {
            if ((i.key && o.push(i.key), i.routes)) {
              var s = o.concat(u(i.routes) || []);
              return s;
            }
            return o;
          }, []);
        },
        ue = {
          daybreak: 'daybreak',
          '#1890ff': 'daybreak',
          '#F5222D': 'dust',
          '#FA541C': 'volcano',
          '#FAAD14': 'sunset',
          '#13C2C2': 'cyan',
          '#52C41A': 'green',
          '#2F54EB': 'geekblue',
          '#722ED1': 'purple',
        },
        pe = function (e) {
          return Object.keys(e).reduce(function (o, i) {
            return (o[e[i]] = i), o;
          }, {});
        };
      function z(u) {
        return u && ue[u] ? ue[u] : void 0;
      }
      function ve(u) {
        var e = pe(ue);
        return u && e[u] ? e[u] : u;
      }
      function te(u) {
        return u
          .map(function (e) {
            var o = (0, E.Z)({}, e);
            if (!o.name || o.hideInMenu) return null;
            if (o && (o == null ? void 0 : o.routes)) {
              if (
                !o.hideChildrenInMenu &&
                o.routes.some(function (i) {
                  return i && i.name && !i.hideInMenu;
                })
              )
                return (0, E.Z)((0, E.Z)({}, e), {}, { routes: te(o.routes) });
              delete o.routes;
            }
            return o;
          })
          .filter(function (e) {
            return e;
          });
      }
      var re = y(57186);
      function ye() {
        var u = (0, a.useState)([]),
          e = (0, ae.Z)(u, 2),
          o = e[0],
          i = e[1];
        return { flatMenuKeys: o, setFlatMenuKeys: i };
      }
      var ze = (0, re.f)(ye),
        xe = ze,
        Qe = Se.Z.SubMenu,
        Lt = Se.Z.ItemGroup,
        Ft = d({ scriptUrl: N.iconfontUrl }),
        Ht = function (e) {
          var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'icon-';
          if (typeof e == 'string' && e !== '') {
            if (C(e) || A(e))
              return a.createElement(r, {
                component: function () {
                  return a.createElement('img', {
                    src: e,
                    alt: 'icon',
                    className: 'ant-pro-sider-menu-icon',
                  });
                },
              });
            if (e.startsWith(o)) return a.createElement(Ft, { type: e });
          }
          return e;
        },
        Xn = function u(e) {
          var o = this;
          _e(this, u),
            (this.props = void 0),
            (this.getNavMenuItems = function () {
              var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                s = arguments.length > 1 ? arguments[1] : void 0;
              return i
                .map(function (c) {
                  return o.getSubMenuOrItem(c, s);
                })
                .filter(function (c) {
                  return c;
                });
            }),
            (this.getSubMenuOrItem = function (i, s) {
              if (Array.isArray(i.routes) && i && i.routes.length > 0) {
                var c = o.getIntlName(i),
                  f = o.props,
                  g = f.subMenuItemRender,
                  p = f.prefixCls,
                  h = f.menu,
                  b = f.iconPrefixes,
                  S = i.icon
                    ? a.createElement(
                        'span',
                        { className: ''.concat(p, '-menu-item'), title: c },
                        !s && Ht(i.icon, b),
                        a.createElement('span', { className: ''.concat(p, '-menu-item-title') }, c),
                      )
                    : a.createElement(
                        'span',
                        { className: ''.concat(p, '-menu-item'), title: c },
                        c,
                      ),
                  w = g ? g((0, E.Z)((0, E.Z)({}, i), {}, { isUrl: !1 }), S) : S,
                  P = (h == null ? void 0 : h.type) === 'group' ? Lt : Qe;
                return a.createElement(
                  P,
                  { title: w, key: i.key || i.path, onTitleClick: i.onTitleClick },
                  o.getNavMenuItems(i.routes, !0),
                );
              }
              return a.createElement(
                Se.Z.Item,
                { disabled: i.disabled, key: i.key || i.path, onClick: i.onTitleClick },
                o.getMenuItemPath(i, s),
              );
            }),
            (this.getIntlName = function (i) {
              var s = i.name,
                c = i.locale,
                f = o.props,
                g = f.menu,
                p = f.formatMessage;
              return c && (g == null ? void 0 : g.locale) !== !1
                ? p == null
                  ? void 0
                  : p({ id: c, defaultMessage: s })
                : s;
            }),
            (this.getMenuItemPath = function (i, s) {
              var c = o.conversionPath(i.path || '/'),
                f = o.props,
                g = f.location,
                p = g === void 0 ? { pathname: '/' } : g,
                h = f.isMobile,
                b = f.onCollapse,
                S = f.menuItemRender,
                w = f.iconPrefixes,
                P = o.getIntlName(i),
                $ = o.props.prefixCls,
                G = s ? null : Ht(i.icon, w),
                L = a.createElement(
                  'span',
                  { className: ''.concat($, '-menu-item') },
                  G,
                  a.createElement('span', { className: ''.concat($, '-menu-item-title') }, P),
                ),
                k = C(c);
              if (
                (k &&
                  (L = a.createElement(
                    'span',
                    {
                      title: P,
                      onClick: function () {
                        var V, ce;
                        (V = window) === null ||
                          V === void 0 ||
                          (ce = V.open) === null ||
                          ce === void 0 ||
                          ce.call(V, c);
                      },
                      className: ''.concat($, '-menu-item ').concat($, '-menu-item-link'),
                    },
                    G,
                    a.createElement('span', { className: ''.concat($, '-menu-item-title') }, P),
                  )),
                S)
              ) {
                var O = (0, E.Z)(
                  (0, E.Z)({}, i),
                  {},
                  {
                    isUrl: k,
                    itemPath: c,
                    isMobile: h,
                    replace: c === p.pathname,
                    onClick: function () {
                      return b && b(!0);
                    },
                    children: void 0,
                  },
                );
                return S(O, L, o.props);
              }
              return L;
            }),
            (this.conversionPath = function (i) {
              return i && i.indexOf('http') === 0 ? i : '/'.concat(i || '').replace(/\/+/g, '/');
            }),
            (this.props = e);
        },
        Yn = function (e, o) {
          var i = o.layout,
            s = o.collapsed,
            c = {};
          return e && !s && ['side', 'mix'].includes(i || 'mix') && (c = { openKeys: e }), c;
        },
        wn = function (e) {
          var o = e.theme,
            i = e.mode,
            s = e.className,
            c = e.handleOpenChange,
            f = e.style,
            g = e.menuData,
            p = e.menu,
            h = e.matchMenuKeys,
            b = e.iconfontUrl,
            S = e.collapsed,
            w = e.selectedKeys,
            P = e.onSelect,
            $ = e.openKeys,
            G = (0, a.useRef)([]),
            L = xe.useContainer(),
            k = L.flatMenuKeys,
            O = (0, j.Z)(p == null ? void 0 : p.defaultOpenAll),
            ee = (0, ae.Z)(O, 2),
            V = ee[0],
            ce = ee[1],
            be = (0, j.Z)(
              function () {
                return (p == null ? void 0 : p.defaultOpenAll) ? W(g) || [] : $ === !1 ? !1 : [];
              },
              { value: $ === !1 ? void 0 : $, onChange: c },
            ),
            Ze = (0, ae.Z)(be, 2),
            ge = Ze[0],
            J = Ze[1],
            je = (0, j.Z)([], {
              value: w,
              onChange: P
                ? function (Ye) {
                    P && Ye && P(Ye);
                  }
                : void 0,
            }),
            Ae = (0, ae.Z)(je, 2),
            Ke = Ae[0],
            De = Ae[1];
          (0, a.useEffect)(
            function () {
              (p == null ? void 0 : p.defaultOpenAll) ||
                $ === !1 ||
                k.length ||
                (h && (J(h), De(h)));
            },
            [h.join('-')],
          ),
            (0, a.useEffect)(
              function () {
                b && (Ft = d({ scriptUrl: b }));
              },
              [b],
            ),
            (0, a.useEffect)(
              function () {
                if (
                  (h.join('-') !== (Ke || []).join('-') && De(h),
                  !V && $ !== !1 && h.join('-') !== (ge || []).join('-'))
                ) {
                  var Ye = h;
                  (p == null ? void 0 : p.autoClose) === !1 &&
                    (Ye = Array.from(new Set([].concat(tt(h), tt(ge || []))))),
                    J(Ye);
                } else
                  (p == null ? void 0 : p.ignoreFlatMenu) && V ? J(W(g)) : k.length > 0 && ce(!1);
              },
              [h.join('-'), S],
            );
          var rt = (0, a.useMemo)(
              function () {
                return Yn(ge, e);
              },
              [ge && ge.join(','), e.layout, e.collapsed],
            ),
            at = (0, a.useState)(function () {
              return new Xn(e);
            }),
            Xe = (0, ae.Z)(at, 1),
            Pe = Xe[0];
          if (p == null ? void 0 : p.loading)
            return a.createElement(
              'div',
              {
                style: (i == null ? void 0 : i.includes('inline'))
                  ? { padding: 24 }
                  : { marginTop: 16 },
              },
              a.createElement(nn, {
                active: !0,
                title: !1,
                paragraph: { rows: (i == null ? void 0 : i.includes('inline')) ? 6 : 1 },
              }),
            );
          var Ne = I()(s, { 'top-nav-menu': i === 'horizontal' });
          (Pe.props = e), e.openKeys === !1 && !e.handleOpenChange && (G.current = h);
          var We = e.postMenuData ? e.postMenuData(g) : g;
          return We && (We == null ? void 0 : We.length) < 1
            ? null
            : a.createElement(
                Se.Z,
                (0, M.Z)(
                  {},
                  rt,
                  {
                    key: 'Menu',
                    mode: i,
                    inlineIndent: 16,
                    defaultOpenKeys: G.current,
                    theme: o,
                    selectedKeys: Ke,
                    style: f,
                    className: Ne,
                    onOpenChange: J,
                  },
                  e.menuProps,
                ),
                Pe.getNavMenuItems(We, !1),
              );
        };
      wn.defaultProps = {
        postMenuData: function (e) {
          return e || [];
        },
      };
      var Pn = wn,
        _n = D.Z.Sider,
        Nn = function (e) {
          return typeof e == 'string'
            ? a.createElement('img', { src: e, alt: 'logo' })
            : typeof e == 'function'
            ? e()
            : e;
        },
        sn = function (e) {
          var o =
              arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'menuHeaderRender',
            i = e.logo,
            s = e.title,
            c = e.layout,
            f = e[o || ''];
          if (f === !1) return null;
          var g = Nn(i),
            p = a.createElement('h1', null, s != null ? s : 'Ant Design Pro');
          return f
            ? f(g, e.collapsed ? null : p, e)
            : c === 'mix' && o === 'menuHeaderRender'
            ? null
            : a.createElement('a', null, g, e.collapsed ? null : p);
        },
        On = function (e) {
          return e ? a.createElement(Ut, null) : a.createElement(kt, null);
        },
        qn = function (e) {
          var o,
            i = e.collapsed,
            s = e.fixSiderbar,
            c = e.menuFooterRender,
            f = e.onCollapse,
            g = e.theme,
            p = e.siderWidth,
            h = e.isMobile,
            b = e.onMenuHeaderClick,
            S = e.breakpoint,
            w = S === void 0 ? 'lg' : S,
            P = e.style,
            $ = e.layout,
            G = e.menuExtraRender,
            L = G === void 0 ? !1 : G,
            k = e.collapsedButtonRender,
            O = k === void 0 ? On : k,
            ee = e.links,
            V = e.menuContentRender,
            ce = e.prefixCls,
            be = e.onOpenChange,
            Ze = e.headerHeight,
            ge = e.logoStyle,
            J = ''.concat(ce, '-sider'),
            je = xe.useContainer(),
            Ae = je.flatMenuKeys,
            Ke = I()(
              ''.concat(J),
              ((o = {}),
              (0, H.Z)(o, ''.concat(J, '-fixed'), s),
              (0, H.Z)(o, ''.concat(J, '-layout-').concat($), $ && !h),
              (0, H.Z)(o, ''.concat(J, '-light'), g === 'light'),
              o),
            ),
            De = sn(e),
            rt = L && L(e),
            at =
              V !== !1 &&
              Ae &&
              a.createElement(
                Pn,
                (0, M.Z)({}, e, {
                  key: 'base-menu',
                  mode: 'inline',
                  handleOpenChange: be,
                  style: { width: '100%' },
                  className: ''.concat(J, '-menu'),
                }),
              ),
            Xe = V ? V(e, at) : at;
          return a.createElement(
            a.Fragment,
            null,
            s &&
              a.createElement('div', {
                style: (0, E.Z)(
                  {
                    width: i ? 48 : p,
                    overflow: 'hidden',
                    flex: '0 0 '.concat(i ? 48 : p, 'px'),
                    maxWidth: i ? 48 : p,
                    minWidth: i ? 48 : p,
                    transition:
                      'background-color 0.3s, min-width 0.3s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  },
                  P,
                ),
              }),
            a.createElement(
              _n,
              {
                collapsible: !0,
                trigger: null,
                collapsed: i,
                breakpoint: w === !1 ? void 0 : w,
                onCollapse: function (Ne) {
                  h || f == null || f(Ne);
                },
                collapsedWidth: 48,
                style: (0, E.Z)(
                  { overflow: 'hidden', paddingTop: $ === 'mix' && !h ? Ze : void 0 },
                  P,
                ),
                width: p,
                theme: g,
                className: Ke,
              },
              De &&
                a.createElement(
                  'div',
                  {
                    className: I()(
                      ''.concat(J, '-logo'),
                      (0, H.Z)({}, ''.concat(J, '-collapsed'), i),
                    ),
                    onClick: $ !== 'mix' ? b : void 0,
                    id: 'logo',
                    style: ge,
                  },
                  De,
                ),
              rt &&
                a.createElement(
                  'div',
                  {
                    className: ''
                      .concat(J, '-extra ')
                      .concat(!De && ''.concat(J, '-extra-no-logo')),
                  },
                  rt,
                ),
              a.createElement(
                'div',
                { style: { flex: 1, overflowY: 'auto', overflowX: 'hidden' } },
                Xe,
              ),
              a.createElement(
                'div',
                { className: ''.concat(J, '-links') },
                a.createElement(
                  Se.Z,
                  {
                    theme: g,
                    inlineIndent: 16,
                    className: ''.concat(J, '-link-menu'),
                    selectedKeys: [],
                    openKeys: [],
                    mode: 'inline',
                  },
                  (ee || []).map(function (Pe, Ne) {
                    return a.createElement(
                      Se.Z.Item,
                      { className: ''.concat(J, '-link'), key: Ne },
                      Pe,
                    );
                  }),
                  O &&
                    !h &&
                    a.createElement(
                      Se.Z.Item,
                      {
                        className: ''.concat(J, '-collapsed-button'),
                        title: !1,
                        key: 'collapsed',
                        onClick: function () {
                          f && f(!i);
                        },
                      },
                      O(i),
                    ),
                ),
              ),
              c &&
                a.createElement(
                  'div',
                  {
                    className: I()(
                      ''.concat(J, '-footer'),
                      (0, H.Z)({}, ''.concat(J, '-footer-collapsed'), !i),
                    ),
                  },
                  c(e),
                ),
            ),
          );
        },
        Tn = qn,
        er = y(3884),
        Ma = y(17212),
        tr = ['rightContentRender'],
        nr = function (e) {
          var o = e.rightContentRender,
            i = (0, Ue.Z)(e, tr),
            s = (0, a.useState)('auto'),
            c = (0, ae.Z)(s, 2),
            f = c[0],
            g = c[1];
          return a.createElement(
            'div',
            { style: { minWidth: f } },
            a.createElement(
              'div',
              { style: { paddingRight: 8 } },
              a.createElement(
                er.Z,
                {
                  onResize: function (h) {
                    var b = h.width;
                    g(b);
                  },
                },
                o && a.createElement('div', null, o((0, E.Z)({}, i))),
              ),
            ),
          );
        },
        rr = function (e) {
          var o = (0, a.useRef)(null),
            i = e.theme,
            s = e.onMenuHeaderClick,
            c = e.contentWidth,
            f = e.rightContentRender,
            g = e.className,
            p = e.style,
            h = e.layout,
            b = ''.concat(e.prefixCls || 'ant-pro', '-top-nav-header'),
            S = sn(
              (0, E.Z)((0, E.Z)({}, e), {}, { collapsed: !1 }),
              h === 'mix' ? 'headerTitleRender' : void 0,
            ),
            w = I()(b, g, { light: i === 'light' });
          return a.createElement(
            'div',
            { className: w, style: p },
            a.createElement(
              'div',
              { ref: o, className: ''.concat(b, '-main ').concat(c === 'Fixed' ? 'wide' : '') },
              S &&
                a.createElement(
                  'div',
                  { className: ''.concat(b, '-main-left'), onClick: s },
                  a.createElement(
                    'div',
                    { className: ''.concat(b, '-logo'), key: 'logo', id: 'logo' },
                    S,
                  ),
                ),
              a.createElement(
                'div',
                { style: { flex: 1 }, className: ''.concat(b, '-menu') },
                a.createElement(Pn, (0, M.Z)({}, e, e.menuProps)),
              ),
              f && a.createElement(nr, (0, M.Z)({ rightContentRender: f }, e)),
            ),
          );
        },
        In = rr,
        ar = function (e, o) {
          return e === !1 ? null : e ? e(o, null) : o;
        },
        ir = function (e) {
          var o = e.isMobile,
            i = e.logo,
            s = e.collapsed,
            c = e.onCollapse,
            f = e.collapsedButtonRender,
            g = f === void 0 ? On : f,
            p = e.rightContentRender,
            h = e.menuHeaderRender,
            b = e.onMenuHeaderClick,
            S = e.className,
            w = e.style,
            P = e.layout,
            $ = e.children,
            G = e.headerTheme,
            L = G === void 0 ? 'dark' : G,
            k = e.splitMenus,
            O = e.menuData,
            ee = e.prefixCls,
            V = ''.concat(ee, '-global-header'),
            ce = I()(S, V, (0, H.Z)({}, ''.concat(V, '-layout-').concat(P), P && L === 'dark'));
          if (P === 'mix' && !o && k) {
            var be = (O || []).map(function (J) {
                return (0, E.Z)((0, E.Z)({}, J), {}, { children: void 0, routes: void 0 });
              }),
              Ze = te(be);
            return a.createElement(
              In,
              (0, M.Z)({ mode: 'horizontal' }, e, { splitMenus: !1, menuData: Ze, theme: L }),
            );
          }
          var ge = a.createElement(
            'span',
            { className: ''.concat(V, '-logo'), key: 'logo' },
            a.createElement('a', null, Nn(i)),
          );
          return a.createElement(
            'div',
            { className: ce, style: (0, E.Z)({}, w) },
            o && ar(h, ge),
            o &&
              g &&
              a.createElement(
                'span',
                {
                  className: ''.concat(V, '-collapsed-button'),
                  onClick: function () {
                    c && c(!s);
                  },
                },
                g(s),
              ),
            P === 'mix' &&
              !o &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  'div',
                  { className: ''.concat(V, '-logo'), onClick: b },
                  sn((0, E.Z)((0, E.Z)({}, e), {}, { collapsed: !1 }), 'headerTitleRender'),
                ),
              ),
            a.createElement('div', { style: { flex: 1 } }, $),
            p && p(e),
          );
        },
        or = ir,
        An = D.Z.Header,
        lr = (function (u) {
          ct(o, u);
          var e = Cn(o);
          function o() {
            var i;
            _e(this, o);
            for (var s = arguments.length, c = new Array(s), f = 0; f < s; f++) c[f] = arguments[f];
            return (
              (i = e.call.apply(e, [this].concat(c))),
              (i.renderContent = function () {
                var g = i.props,
                  p = g.isMobile,
                  h = g.onCollapse,
                  b = g.navTheme,
                  S = g.layout,
                  w = g.headerRender,
                  P = g.headerContentRender,
                  $ = S === 'top',
                  G = te(i.props.menuData || []),
                  L = a.createElement(
                    or,
                    (0, M.Z)({ onCollapse: h }, i.props, { menuData: G }),
                    P && P(i.props),
                  );
                return (
                  $ &&
                    !p &&
                    (L = a.createElement(
                      In,
                      (0, M.Z)({ theme: b, mode: 'horizontal', onCollapse: h }, i.props, {
                        menuData: G,
                      }),
                    )),
                  w && typeof w == 'function' ? w(i.props, L) : L
                );
              }),
              i
            );
          }
          return (
            Y(o, [
              {
                key: 'render',
                value: function () {
                  var s,
                    c = this.props,
                    f = c.fixedHeader,
                    g = c.layout,
                    p = c.className,
                    h = c.style,
                    b = c.navTheme,
                    S = c.collapsed,
                    w = c.siderWidth,
                    P = c.hasSiderMenu,
                    $ = c.isMobile,
                    G = c.prefixCls,
                    L = c.headerHeight,
                    k = f || g === 'mix',
                    O = g === 'top',
                    ee = k && P && !O && !$,
                    V = I()(
                      p,
                      ((s = {}),
                      (0, H.Z)(s, ''.concat(G, '-fixed-header'), k),
                      (0, H.Z)(s, ''.concat(G, '-fixed-header-action'), !S),
                      (0, H.Z)(s, ''.concat(G, '-top-menu'), O),
                      (0, H.Z)(s, ''.concat(G, '-header-').concat(b), b && g !== 'mix'),
                      s),
                    ),
                    ce = g !== 'mix' && ee ? 'calc(100% - '.concat(S ? 48 : w, 'px)') : '100%',
                    be = k ? 0 : void 0;
                  return a.createElement(
                    a.Fragment,
                    null,
                    k &&
                      a.createElement(An, {
                        style: {
                          height: L,
                          lineHeight: ''.concat(L, 'px'),
                          background: 'transparent',
                        },
                      }),
                    a.createElement(
                      An,
                      {
                        style: (0, E.Z)(
                          {
                            padding: 0,
                            height: L,
                            lineHeight: ''.concat(L, 'px'),
                            width: ce,
                            zIndex: g === 'mix' ? 100 : 19,
                            right: be,
                          },
                          h,
                        ),
                        className: V,
                      },
                      this.renderContent(),
                    ),
                  );
                },
              },
            ]),
            o
          );
        })(a.Component),
        ur = lr,
        sr = y(16254),
        cn = y.n(sr),
        cr = function (e, o, i) {
          if (i) {
            var s = tt(i.keys()).find(function (f) {
              return cn()(f).test(e);
            });
            if (s) return i.get(s);
          }
          if (o) {
            var c = Object.keys(o).find(function (f) {
              return cn()(f).test(e);
            });
            if (c) return o[c];
          }
          return { path: '' };
        },
        Dn = function (e, o) {
          var i = e.pathname,
            s = i === void 0 ? '/' : i,
            c = e.breadcrumb,
            f = e.breadcrumbMap,
            g = e.formatMessage,
            p = e.title,
            h = e.menu,
            b = h === void 0 ? { locale: !1 } : h,
            S = o ? '' : p || '',
            w = cr(s, c, f);
          if (!w) return { title: S, id: '', pageName: S };
          var P = w.name;
          return (
            b.locale !== !1 &&
              w.locale &&
              g &&
              (P = g({ id: w.locale || '', defaultMessage: w.name })),
            P
              ? o || !p
                ? { title: P, id: w.locale || '', pageName: P }
                : { title: ''.concat(P, ' - ').concat(p), id: w.locale || '', pageName: P }
              : { title: S, id: w.locale || '', pageName: S }
          );
        },
        Ea = function (e, o) {
          return Dn(e, o).title;
        },
        Sa = null,
        fr = {
          'app.setting.pagestyle': '\u6574\u4F53\u98CE\u683C\u8BBE\u7F6E',
          'app.setting.pagestyle.dark': '\u6697\u8272\u83DC\u5355\u98CE\u683C',
          'app.setting.pagestyle.light': '\u4EAE\u8272\u83DC\u5355\u98CE\u683C',
          'app.setting.content-width': '\u5185\u5BB9\u533A\u57DF\u5BBD\u5EA6',
          'app.setting.content-width.fixed': '\u5B9A\u5BBD',
          'app.setting.content-width.fluid': '\u6D41\u5F0F',
          'app.setting.themecolor': '\u4E3B\u9898\u8272',
          'app.setting.themecolor.dust': '\u8584\u66AE',
          'app.setting.themecolor.volcano': '\u706B\u5C71',
          'app.setting.themecolor.sunset': '\u65E5\u66AE',
          'app.setting.themecolor.cyan': '\u660E\u9752',
          'app.setting.themecolor.green': '\u6781\u5149\u7EFF',
          'app.setting.themecolor.daybreak': '\u62C2\u6653\u84DD\uFF08\u9ED8\u8BA4\uFF09',
          'app.setting.themecolor.geekblue': '\u6781\u5BA2\u84DD',
          'app.setting.themecolor.purple': '\u9171\u7D2B',
          'app.setting.navigationmode': '\u5BFC\u822A\u6A21\u5F0F',
          'app.setting.regionalsettings': '\u5185\u5BB9\u533A\u57DF',
          'app.setting.regionalsettings.header': '\u9876\u680F',
          'app.setting.regionalsettings.menu': '\u83DC\u5355',
          'app.setting.regionalsettings.footer': '\u9875\u811A',
          'app.setting.regionalsettings.menuHeader': '\u83DC\u5355\u5934',
          'app.setting.sidemenu': '\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40',
          'app.setting.topmenu': '\u9876\u90E8\u83DC\u5355\u5E03\u5C40',
          'app.setting.mixmenu': '\u6DF7\u5408\u83DC\u5355\u5E03\u5C40',
          'app.setting.splitMenus': '\u81EA\u52A8\u5206\u5272\u83DC\u5355',
          'app.setting.fixedheader': '\u56FA\u5B9A Header',
          'app.setting.fixedsidebar': '\u56FA\u5B9A\u4FA7\u8FB9\u83DC\u5355',
          'app.setting.fixedsidebar.hint':
            '\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40\u65F6\u53EF\u914D\u7F6E',
          'app.setting.hideheader': '\u4E0B\u6ED1\u65F6\u9690\u85CF Header',
          'app.setting.hideheader.hint': '\u56FA\u5B9A Header \u65F6\u53EF\u914D\u7F6E',
          'app.setting.othersettings': '\u5176\u4ED6\u8BBE\u7F6E',
          'app.setting.weakmode': '\u8272\u5F31\u6A21\u5F0F',
          'app.setting.copy': '\u62F7\u8D1D\u8BBE\u7F6E',
          'app.setting.loading': '\u6B63\u5728\u52A0\u8F7D\u4E3B\u9898',
          'app.setting.copyinfo':
            '\u62F7\u8D1D\u6210\u529F\uFF0C\u8BF7\u5230 src/defaultSettings.js \u4E2D\u66FF\u6362\u9ED8\u8BA4\u914D\u7F6E',
          'app.setting.production.hint':
            '\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6',
        },
        dr = (0, E.Z)({}, fr),
        vr = {
          'app.setting.pagestyle': '\u6574\u9AD4\u98A8\u683C\u8A2D\u7F6E',
          'app.setting.pagestyle.dark': '\u6697\u8272\u83DC\u55AE\u98A8\u683C',
          'app.setting.pagestyle.light': '\u4EAE\u8272\u83DC\u55AE\u98A8\u683C',
          'app.setting.content-width': '\u5167\u5BB9\u5340\u57DF\u5BEC\u5EA6',
          'app.setting.content-width.fixed': '\u5B9A\u5BEC',
          'app.setting.content-width.fluid': '\u6D41\u5F0F',
          'app.setting.themecolor': '\u4E3B\u984C\u8272',
          'app.setting.themecolor.dust': '\u8584\u66AE',
          'app.setting.themecolor.volcano': '\u706B\u5C71',
          'app.setting.themecolor.sunset': '\u65E5\u66AE',
          'app.setting.themecolor.cyan': '\u660E\u9752',
          'app.setting.themecolor.green': '\u6975\u5149\u7DA0',
          'app.setting.themecolor.daybreak': '\u62C2\u66C9\u85CD\uFF08\u9ED8\u8A8D\uFF09',
          'app.setting.themecolor.geekblue': '\u6975\u5BA2\u85CD',
          'app.setting.themecolor.purple': '\u91AC\u7D2B',
          'app.setting.navigationmode': '\u5C0E\u822A\u6A21\u5F0F',
          'app.setting.sidemenu': '\u5074\u908A\u83DC\u55AE\u5E03\u5C40',
          'app.setting.topmenu': '\u9802\u90E8\u83DC\u55AE\u5E03\u5C40',
          'app.setting.mixmenu': '\u6DF7\u5408\u83DC\u55AE\u5E03\u5C40',
          'app.setting.splitMenus': '\u81EA\u52A8\u5206\u5272\u83DC\u5355',
          'app.setting.fixedheader': '\u56FA\u5B9A Header',
          'app.setting.fixedsidebar': '\u56FA\u5B9A\u5074\u908A\u83DC\u55AE',
          'app.setting.fixedsidebar.hint':
            '\u5074\u908A\u83DC\u55AE\u5E03\u5C40\u6642\u53EF\u914D\u7F6E',
          'app.setting.hideheader': '\u4E0B\u6ED1\u6642\u96B1\u85CF Header',
          'app.setting.hideheader.hint': '\u56FA\u5B9A Header \u6642\u53EF\u914D\u7F6E',
          'app.setting.othersettings': '\u5176\u4ED6\u8A2D\u7F6E',
          'app.setting.weakmode': '\u8272\u5F31\u6A21\u5F0F',
          'app.setting.copy': '\u62F7\u8C9D\u8A2D\u7F6E',
          'app.setting.loading': '\u6B63\u5728\u52A0\u8F09\u4E3B\u984C',
          'app.setting.copyinfo':
            '\u62F7\u8C9D\u6210\u529F\uFF0C\u8ACB\u5230 src/defaultSettings.js \u4E2D\u66FF\u63DB\u9ED8\u8A8D\u914D\u7F6E',
          'app.setting.production.hint':
            '\u914D\u7F6E\u6B04\u53EA\u5728\u958B\u767C\u74B0\u5883\u7528\u65BC\u9810\u89BD\uFF0C\u751F\u7522\u74B0\u5883\u4E0D\u6703\u5C55\u73FE\uFF0C\u8ACB\u62F7\u8C9D\u5F8C\u624B\u52D5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6',
        },
        mr = (0, E.Z)({}, vr),
        pr = {
          'app.setting.pagestyle': 'Page style setting',
          'app.setting.pagestyle.dark': 'Dark style',
          'app.setting.pagestyle.light': 'Light style',
          'app.setting.content-width': 'Content Width',
          'app.setting.content-width.fixed': 'Fixed',
          'app.setting.content-width.fluid': 'Fluid',
          'app.setting.themecolor': 'Theme Color',
          'app.setting.themecolor.dust': 'Dust Red',
          'app.setting.themecolor.volcano': 'Volcano',
          'app.setting.themecolor.sunset': 'Sunset Orange',
          'app.setting.themecolor.cyan': 'Cyan',
          'app.setting.themecolor.green': 'Polar Green',
          'app.setting.themecolor.daybreak': 'Daybreak Blue (default)',
          'app.setting.themecolor.geekblue': 'Geek Blue',
          'app.setting.themecolor.purple': 'Golden Purple',
          'app.setting.navigationmode': 'Navigation Mode',
          'app.setting.regionalsettings': 'Regional Settings',
          'app.setting.regionalsettings.header': 'Header',
          'app.setting.regionalsettings.menu': 'Menu',
          'app.setting.regionalsettings.footer': 'Footer',
          'app.setting.regionalsettings.menuHeader': 'Menu Header',
          'app.setting.sidemenu': 'Side Menu Layout',
          'app.setting.topmenu': 'Top Menu Layout',
          'app.setting.mixmenu': 'Mix Menu Layout',
          'app.setting.splitMenus': 'Split Menus',
          'app.setting.fixedheader': 'Fixed Header',
          'app.setting.fixedsidebar': 'Fixed Sidebar',
          'app.setting.fixedsidebar.hint': 'Works on Side Menu Layout',
          'app.setting.hideheader': 'Hidden Header when scrolling',
          'app.setting.hideheader.hint': 'Works when Hidden Header is enabled',
          'app.setting.othersettings': 'Other Settings',
          'app.setting.weakmode': 'Weak Mode',
          'app.setting.copy': 'Copy Setting',
          'app.setting.loading': 'Loading theme',
          'app.setting.copyinfo':
            'copy success\uFF0Cplease replace defaultSettings in src/models/setting.js',
          'app.setting.production.hint':
            'Setting panel shows in development environment only, please manually modify',
        },
        gr = (0, E.Z)({}, pr),
        hr = {
          'app.setting.pagestyle': 'Impostazioni di stile',
          'app.setting.pagestyle.dark': 'Tema scuro',
          'app.setting.pagestyle.light': 'Tema chiaro',
          'app.setting.content-width': 'Largezza contenuto',
          'app.setting.content-width.fixed': 'Fissa',
          'app.setting.content-width.fluid': 'Fluida',
          'app.setting.themecolor': 'Colore del tema',
          'app.setting.themecolor.dust': 'Rosso polvere',
          'app.setting.themecolor.volcano': 'Vulcano',
          'app.setting.themecolor.sunset': 'Arancione tramonto',
          'app.setting.themecolor.cyan': 'Ciano',
          'app.setting.themecolor.green': 'Verde polare',
          'app.setting.themecolor.daybreak': 'Blu cielo mattutino (default)',
          'app.setting.themecolor.geekblue': 'Blu geek',
          'app.setting.themecolor.purple': 'Viola dorato',
          'app.setting.navigationmode': 'Modalit\xE0 di navigazione',
          'app.setting.sidemenu': 'Menu laterale',
          'app.setting.topmenu': 'Menu in testata',
          'app.setting.mixmenu': 'Menu misto',
          'app.setting.splitMenus': 'Menu divisi',
          'app.setting.fixedheader': 'Testata fissa',
          'app.setting.fixedsidebar': 'Menu laterale fisso',
          'app.setting.fixedsidebar.hint': 'Solo se selezionato Menu laterale',
          'app.setting.hideheader': 'Nascondi testata durante lo scorrimento',
          'app.setting.hideheader.hint':
            'Solo se abilitato Nascondi testata durante lo scorrimento',
          'app.setting.othersettings': 'Altre impostazioni',
          'app.setting.weakmode': 'Inverti colori',
          'app.setting.copy': 'Copia impostazioni',
          'app.setting.loading': 'Carico tema...',
          'app.setting.copyinfo':
            'Impostazioni copiate con successo! Incolla il contenuto in config/defaultSettings.js',
          'app.setting.production.hint':
            'Questo pannello \xE8 visibile solo durante lo sviluppo. Le impostazioni devono poi essere modificate manulamente',
        },
        yr = (0, E.Z)({}, hr),
        xr = {
          'app.setting.pagestyle': '\uC2A4\uD0C0\uC77C \uC124\uC815',
          'app.setting.pagestyle.dark': '\uB2E4\uD06C \uBAA8\uB4DC',
          'app.setting.pagestyle.light': '\uB77C\uC774\uD2B8 \uBAA8\uB4DC',
          'app.setting.content-width': '\uCEE8\uD150\uCE20 \uB108\uBE44',
          'app.setting.content-width.fixed': '\uACE0\uC815',
          'app.setting.content-width.fluid': '\uD750\uB984',
          'app.setting.themecolor': '\uD14C\uB9C8 \uC0C9\uC0C1',
          'app.setting.themecolor.dust': 'Dust Red',
          'app.setting.themecolor.volcano': 'Volcano',
          'app.setting.themecolor.sunset': 'Sunset Orange',
          'app.setting.themecolor.cyan': 'Cyan',
          'app.setting.themecolor.green': 'Polar Green',
          'app.setting.themecolor.daybreak': 'Daybreak Blue (default)',
          'app.setting.themecolor.geekblue': 'Geek Blue',
          'app.setting.themecolor.purple': 'Golden Purple',
          'app.setting.navigationmode': '\uB124\uBE44\uAC8C\uC774\uC158 \uBAA8\uB4DC',
          'app.setting.regionalsettings': '\uC601\uC5ED\uBCC4 \uC124\uC815',
          'app.setting.regionalsettings.header': '\uD5E4\uB354',
          'app.setting.regionalsettings.menu': '\uBA54\uB274',
          'app.setting.regionalsettings.footer': '\uBC14\uB2E5\uAE00',
          'app.setting.regionalsettings.menuHeader': '\uBA54\uB274 \uD5E4\uB354',
          'app.setting.sidemenu': '\uBA54\uB274 \uC0AC\uC774\uB4DC \uBC30\uCE58',
          'app.setting.topmenu': '\uBA54\uB274 \uC0C1\uB2E8 \uBC30\uCE58',
          'app.setting.mixmenu': '\uD63C\uD569\uD615 \uBC30\uCE58',
          'app.setting.splitMenus': '\uBA54\uB274 \uBD84\uB9AC',
          'app.setting.fixedheader': '\uD5E4\uB354 \uACE0\uC815',
          'app.setting.fixedsidebar': '\uC0AC\uC774\uB4DC\uBC14 \uACE0\uC815',
          'app.setting.fixedsidebar.hint':
            "'\uBA54\uB274 \uC0AC\uC774\uB4DC \uBC30\uCE58'\uB97C \uC120\uD0DD\uD588\uC744 \uB54C \uB3D9\uC791\uD568",
          'app.setting.hideheader': '\uC2A4\uD06C\uB864 \uC911 \uD5E4\uB354 \uAC10\uCD94\uAE30',
          'app.setting.hideheader.hint':
            "'\uD5E4\uB354 \uAC10\uCD94\uAE30 \uC635\uC158'\uC744 \uC120\uD0DD\uD588\uC744 \uB54C \uB3D9\uC791\uD568",
          'app.setting.othersettings': '\uB2E4\uB978 \uC124\uC815',
          'app.setting.weakmode': '\uACE0\uB300\uBE44 \uBAA8\uB4DC',
          'app.setting.copy': '\uC124\uC815\uAC12 \uBCF5\uC0AC',
          'app.setting.loading': '\uD14C\uB9C8 \uB85C\uB529 \uC911',
          'app.setting.copyinfo':
            '\uBCF5\uC0AC \uC131\uACF5. src/models/settings.js\uC5D0 \uC788\uB294 defaultSettings\uB97C \uAD50\uCCB4\uD574 \uC8FC\uC138\uC694.',
          'app.setting.production.hint':
            '\uC124\uC815 \uD310\uB12C\uC740 \uAC1C\uBC1C \uD658\uACBD\uC5D0\uC11C\uB9CC \uBCF4\uC5EC\uC9D1\uB2C8\uB2E4. \uC9C1\uC811 \uC218\uB3D9\uC73C\uB85C \uBCC0\uACBD\uBC14\uB78D\uB2C8\uB2E4.',
        },
        br = (0, E.Z)({}, xr),
        fn = { 'zh-CN': dr, 'zh-TW': mr, 'en-US': gr, 'it-IT': yr, 'ko-KR': br },
        Cr = function () {
          if (!(0, le.Z)()) return 'zh-CN';
          var e = window.localStorage.getItem('umi_locale');
          return e || window.g_locale || navigator.language;
        },
        Mr = function () {
          var u = Cr();
          return fn[u] ? fn[u] : fn['zh-CN'];
        },
        Er = y(19798),
        Ln = y(64335),
        Ra = y(57338),
        Sr = y(2689),
        Rr = function (e) {
          var o = e.isMobile,
            i = e.menuData,
            s = e.siderWidth,
            c = e.collapsed,
            f = e.onCollapse,
            g = e.style,
            p = e.className,
            h = e.hide,
            b = e.getContainer,
            S = e.prefixCls,
            w = e.matchMenuKeys,
            P = xe.useContainer(),
            $ = P.setFlatMenuKeys;
          (0, a.useEffect)(
            function () {
              if (!(!i || i.length < 1)) {
                var L = (0, Ge.kv)(i);
                $(Object.keys(L));
              }
            },
            [w.join('-')],
          ),
            (0, a.useEffect)(
              function () {
                o === !0 && (f == null || f(!0));
              },
              [o],
            );
          var G = (0, he.Z)(e, ['className', 'style']);
          return h
            ? null
            : o
            ? a.createElement(
                Sr.Z,
                {
                  visible: !c,
                  placement: 'left',
                  className: I()(''.concat(S, '-drawer-sider'), p),
                  onClose: function () {
                    return f == null ? void 0 : f(!0);
                  },
                  style: (0, E.Z)({ padding: 0, height: '100vh' }, g),
                  getContainer: b,
                  width: s,
                  bodyStyle: { height: '100vh', padding: 0, display: 'flex', flexDirection: 'row' },
                },
                a.createElement(
                  Tn,
                  (0, M.Z)({}, G, {
                    className: I()(''.concat(S, '-sider'), p),
                    collapsed: o ? !1 : c,
                    splitMenus: !1,
                  }),
                ),
              )
            : a.createElement(
                Tn,
                (0, M.Z)({ className: I()(''.concat(S, '-sider'), p) }, G, { style: g }),
              );
        },
        dn = Rr;
      function Zr(u) {
        if (!u || u === '/') return ['/'];
        var e = u.split('/').filter(function (o) {
          return o;
        });
        return e.map(function (o, i) {
          return '/'.concat(e.slice(0, i + 1).join('/'));
        });
      }
      var wr = function (e) {
          var o = e.breadcrumbName,
            i = e.path;
          return a.createElement('a', { href: i }, o);
        },
        Pr = function (e, o) {
          var i = o.formatMessage,
            s = o.menu;
          return e.locale && i && (s == null ? void 0 : s.locale) !== !1
            ? i({ id: e.locale, defaultMessage: e.name })
            : e.name;
        },
        Nr = function (e, o) {
          var i = e.get(o);
          if (!i) {
            var s = Array.from(e.keys()) || [],
              c = s.find(function (f) {
                return cn()(f.replace('?', '')).test(o);
              });
            c && (i = e.get(c));
          }
          return i || { path: '' };
        },
        Or = function (e) {
          var o = e.location,
            i = e.breadcrumbMap;
          return { location: o, breadcrumbMap: i };
        },
        Tr = function (e, o, i) {
          var s = Zr(e == null ? void 0 : e.pathname),
            c = s
              .map(function (f) {
                var g = Nr(o, f),
                  p = Pr(g, i),
                  h = g.hideInBreadcrumb;
                return p && !h
                  ? { path: f, breadcrumbName: p, component: g.component }
                  : { path: '', breadcrumbName: '' };
              })
              .filter(function (f) {
                return f && f.path;
              });
          return c;
        },
        Ir = function (e) {
          var o = Or(e),
            i = o.location,
            s = o.breadcrumbMap;
          return i && i.pathname && s ? Tr(i, s, e) : [];
        },
        Ar = function (e, o) {
          var i = e.breadcrumbRender,
            s = e.itemRender,
            c = o.breadcrumbProps || {},
            f = c.minLength,
            g = f === void 0 ? 2 : f,
            p = Ir(e),
            h = s || wr,
            b = p;
          return (
            i && (b = i(b) || []),
            ((b && b.length < g) || i === !1) && (b = void 0),
            { routes: b, itemRender: h }
          );
        };
      function Dr(u) {
        return tt(u).reduce(function (e, o) {
          var i = (0, ae.Z)(o, 2),
            s = i[0],
            c = i[1];
          return (e[s] = c), e;
        }, {});
      }
      var Lr = function u(e, o, i, s) {
          var c = (0, Ge.Un)(e, (o == null ? void 0 : o.locale) || !1, i, !0),
            f = c.menuData,
            g = c.breadcrumb;
          return s ? u(s(f), o, i, void 0) : { breadcrumb: Dr(g), breadcrumbMap: g, menuData: f };
        },
        Fr = Lr,
        Hr = y(83832),
        Br = y(85047),
        zr = y(20582),
        jr = function (e) {
          var o = e.style,
            i = e.className,
            s = e.children,
            c = e.ErrorBoundary || zr.Z;
          return a.createElement(
            Br.oK,
            null,
            a.createElement(c, null, a.createElement(D.Z.Content, { className: i, style: o }, s)),
          );
        },
        Kr = jr,
        Wr = function (e) {
          var o = ['sidemenu', 'topmenu'];
          return o.includes(e) ? (e == null ? void 0 : e.replace('menu', '')) : e;
        },
        $r = Wr,
        Ur = y(51812),
        Gr = function (e) {
          var o = (0, a.useState)({}),
            i = (0, ae.Z)(o, 2),
            s = i[0],
            c = i[1];
          return (
            (0, a.useEffect)(
              function () {
                c(
                  (0, Ur.Z)({
                    layout: (0, Ie.Z)(e.layout) !== 'object' ? e.layout : void 0,
                    navTheme: e.navTheme,
                    menuRender: e.menuRender,
                    footerRender: e.footerRender,
                    menuHeaderRender: e.menuHeaderRender,
                    headerRender: e.headerRender,
                    fixSiderbar: e.fixSiderbar,
                    headerTheme: e.headerTheme,
                  }),
                );
              },
              [
                e.layout,
                e.navTheme,
                e.menuRender,
                e.footerRender,
                e.menuHeaderRender,
                e.headerRender,
                e.fixSiderbar,
                e.headerTheme,
              ],
            ),
            s
          );
        },
        kr = Gr,
        Vr = y(30939),
        Jr = ['id', 'defaultMessage'],
        Qr = ['fixSiderbar', 'navTheme', 'layout'],
        Fn = 0,
        Xr = function (e, o) {
          return e.headerRender === !1 || e.pure
            ? null
            : a.createElement(ur, (0, M.Z)({ matchMenuKeys: o }, e));
        },
        Yr = function (e) {
          return e.footerRender === !1 || e.pure
            ? null
            : e.footerRender
            ? e.footerRender((0, E.Z)({}, e), a.createElement(Er.Z, null))
            : null;
        },
        _r = function (e, o) {
          var i = e.layout,
            s = e.isMobile,
            c = e.openKeys,
            f = e.splitMenus,
            g = e.menuRender;
          if (e.menuRender === !1 || e.pure) return null;
          var p = e.menuData;
          if (f && (c !== !1 || i === 'mix') && !s) {
            var h = (0, ae.Z)(o, 1),
              b = h[0];
            if (b) {
              var S, w;
              p =
                ((S = e.menuData) === null ||
                S === void 0 ||
                (w = S.find(function (G) {
                  return G.key === b;
                })) === null ||
                w === void 0
                  ? void 0
                  : w.routes) || [];
            } else p = [];
          }
          var P = te(p || []);
          if (P && (P == null ? void 0 : P.length) < 1 && f) return null;
          if (i === 'top' && !s)
            return a.createElement(dn, (0, M.Z)({ matchMenuKeys: o }, e, { hide: !0 }));
          if (g) {
            var $ = a.createElement(dn, (0, M.Z)({ matchMenuKeys: o }, e, { menuData: P }));
            return g(e, $);
          }
          return a.createElement(dn, (0, M.Z)({ matchMenuKeys: o }, e, { menuData: P }));
        },
        qr = function (e, o) {
          var i = o.pageTitleRender,
            s = Dn(e);
          if (i === !1) return { title: o.title || '', id: '', pageName: '' };
          if (i) {
            var c = i(e, s.title, s);
            if (typeof c == 'string') return (0, E.Z)((0, E.Z)({}, s), {}, { title: c });
            Ee()(
              typeof c == 'string',
              'pro-layout: renderPageTitle return value should be a string',
            );
          }
          return s;
        },
        ea = function (e, o, i) {
          return e ? (o ? 48 : i) : 0;
        },
        Hn = function (e) {
          var o,
            i,
            s,
            c,
            f = e || {},
            g = f.children,
            p = f.onCollapse,
            h = f.location,
            b = h === void 0 ? { pathname: '/' } : h,
            S = f.contentStyle,
            w = f.route,
            P = f.defaultCollapsed,
            $ = f.style,
            G = f.disableContentMargin,
            L = f.siderWidth,
            k = L === void 0 ? 208 : L,
            O = f.menu,
            ee = f.isChildrenLayout,
            V = f.menuDataRender,
            ce = f.actionRef,
            be = f.formatMessage,
            Ze = f.loading,
            ge = (0, a.useContext)(Mt.ZP.ConfigContext),
            J = (o = e.prefixCls) !== null && o !== void 0 ? o : ge.getPrefixCls('pro'),
            je = (0, j.Z)(!1, {
              value: O == null ? void 0 : O.loading,
              onChange: O == null ? void 0 : O.onLoadingChange,
            }),
            Ae = (0, ae.Z)(je, 2),
            Ke = Ae[0],
            De = Ae[1],
            rt = (0, a.useState)(function () {
              return (Fn += 1), 'pro-layout-'.concat(Fn);
            }),
            at = (0, ae.Z)(rt, 1),
            Xe = at[0],
            Pe = (0, a.useCallback)(
              function (Ce) {
                var ot = Ce.id,
                  jt = Ce.defaultMessage,
                  bn = (0, Ue.Z)(Ce, Jr);
                if (be) return be((0, E.Z)({ id: ot, defaultMessage: jt }, bn));
                var lt = Mr();
                return lt[ot] ? lt[ot] : jt;
              },
              [be],
            ),
            Ne = (0, a.useMemo)(
              function () {
                return (O == null ? void 0 : O.params) ? [Xe, O == null ? void 0 : O.params] : [Xe];
              },
              [Xe, (0, Vr.P)(O == null ? void 0 : O.params)],
            ),
            We = (0, a.useRef)(void 0),
            Ye = (0, Le.ZP)(
              Ne,
              (function () {
                var Ce = Oe(
                  ne().mark(function ot(jt, bn) {
                    var lt, Qn;
                    return ne().wrap(function (ut) {
                      for (;;)
                        switch ((ut.prev = ut.next)) {
                          case 0:
                            return (
                              De(!0),
                              (ut.next = 3),
                              O == null || (lt = O.request) === null || lt === void 0
                                ? void 0
                                : lt.call(O, bn || {}, (w == null ? void 0 : w.routes) || [])
                            );
                          case 3:
                            return (Qn = ut.sent), De(!1), ut.abrupt('return', Qn);
                          case 6:
                          case 'end':
                            return ut.stop();
                        }
                    }, ot);
                  }),
                );
                return function (ot, jt) {
                  return Ce.apply(this, arguments);
                };
              })(),
              { revalidateOnFocus: !1, shouldRetryOnError: !1, revalidateOnReconnect: !1 },
            ),
            vn = Ye.data;
          (We.current = vn),
            (0, a.useEffect)(
              function () {
                !We.current || (0, Le.JG)(Ne);
              },
              [Ne],
            );
          var oa = (0, a.useMemo)(
              function () {
                return Fr(vn || (w == null ? void 0 : w.routes) || [], O, Pe, V);
              },
              [Pe, O, V, vn, w == null ? void 0 : w.routes],
            ),
            mn = oa || {},
            Bn = mn.breadcrumb,
            la = Bn === void 0 ? {} : Bn,
            zn = mn.breadcrumbMap,
            jn = mn.menuData,
            ht = jn === void 0 ? [] : jn;
          ce &&
            (O == null ? void 0 : O.request) &&
            (ce.current = {
              reload: function () {
                (0, Le.JG)(Ne);
              },
            });
          var yt = (0, a.useMemo)(
              function () {
                return (0, Ge.nG)(b.pathname || '/', ht || [], !0);
              },
              [b.pathname, ht],
            ),
            pn = (0, a.useMemo)(
              function () {
                return Array.from(
                  new Set(
                    yt.map(function (Ce) {
                      return Ce.key || Ce.path || '';
                    }),
                  ),
                );
              },
              [yt],
            ),
            Kn = yt[yt.length - 1] || {},
            Wn = kr(Kn),
            Bt = (0, E.Z)((0, E.Z)({}, e), Wn),
            ua = Bt.fixSiderbar,
            $n = Bt.navTheme,
            sa = Bt.layout,
            ca = (0, Ue.Z)(Bt, Qr),
            xt = $r(sa),
            zt = (0, T.ZP)(),
            bt = (zt === 'sm' || zt === 'xs') && !e.disableMobile,
            fa = xt !== 'top' && !bt,
            da = (0, oe.Z)(
              function () {
                return P || !1;
              },
              { value: e.collapsed, onChange: p },
            ),
            Un = (0, ae.Z)(da, 2),
            Ct = Un[0],
            Gn = Un[1],
            it = (0, he.Z)(
              (0, E.Z)(
                (0, E.Z)((0, E.Z)({ prefixCls: J }, e), {}, { siderWidth: k }, Wn),
                {},
                {
                  formatMessage: Pe,
                  breadcrumb: la,
                  menu: (0, E.Z)((0, E.Z)({}, O), {}, { loading: Ke }),
                  layout: xt,
                },
              ),
              ['className', 'style', 'breadcrumbRender'],
            ),
            gn = qr((0, E.Z)((0, E.Z)({ pathname: b.pathname }, it), {}, { breadcrumbMap: zn }), e),
            va = Ar(
              (0, E.Z)(
                (0, E.Z)({}, it),
                {},
                { breadcrumbRender: e.breadcrumbRender, breadcrumbMap: zn },
              ),
              e,
            ),
            hn = _r(
              (0, E.Z)(
                (0, E.Z)({}, it),
                {},
                {
                  menuData: ht,
                  onCollapse: Gn,
                  isMobile: bt,
                  theme: ($n || 'dark').toLocaleLowerCase().includes('dark') ? 'dark' : 'light',
                  collapsed: Ct,
                },
              ),
              pn,
            ),
            yn = Xr(
              (0, E.Z)(
                (0, E.Z)({}, it),
                {},
                {
                  hasSiderMenu: !!hn,
                  menuData: ht,
                  isMobile: bt,
                  collapsed: Ct,
                  onCollapse: Gn,
                  theme: ($n || 'dark').toLocaleLowerCase().includes('dark') ? 'dark' : 'light',
                },
              ),
              pn,
            ),
            kn = Yr((0, E.Z)({ isMobile: bt, collapsed: Ct }, it)),
            ma = (0, a.useContext)(Ln.Z),
            pa = ma.isChildrenLayout,
            xn = ee !== void 0 ? ee : pa,
            $e = ''.concat(J, '-basicLayout'),
            ga = I()(
              e.className,
              'ant-design-pro',
              $e,
              ((i = {}),
              (0, H.Z)(i, 'screen-'.concat(zt), zt),
              (0, H.Z)(i, ''.concat($e, '-top-menu'), xt === 'top'),
              (0, H.Z)(i, ''.concat($e, '-is-children'), xn),
              (0, H.Z)(i, ''.concat($e, '-fix-siderbar'), ua),
              (0, H.Z)(i, ''.concat($e, '-').concat(xt), xt),
              i),
            ),
            ha = ea(!!fa, Ct, k),
            Vn = { position: 'relative' };
          (xn || (S && S.minHeight)) && (Vn.minHeight = 0);
          var ya = I()(
            ''.concat($e, '-content'),
            ((s = {}),
            (0, H.Z)(s, ''.concat($e, '-has-header'), yn),
            (0, H.Z)(s, ''.concat($e, '-content-disable-margin'), G),
            s),
          );
          (0, a.useEffect)(
            function () {
              var Ce;
              (Ce = e.onPageChange) === null || Ce === void 0 || Ce.call(e, e.location);
            },
            [b.pathname, (c = b.pathname) === null || c === void 0 ? void 0 : c.search],
          );
          var xa = (0, a.useState)(!1),
            Jn = (0, ae.Z)(xa, 2),
            ba = Jn[0],
            Ca = Jn[1];
          return (
            _(gn, e.title || !1),
            a.createElement(
              xe.Provider,
              null,
              a.createElement(
                Ln.Z.Provider,
                {
                  value: (0, E.Z)(
                    (0, E.Z)({}, it),
                    {},
                    {
                      breadcrumb: va,
                      menuData: ht,
                      isMobile: bt,
                      collapsed: Ct,
                      isChildrenLayout: !0,
                      title: gn.pageName,
                      hasSiderMenu: !!hn,
                      hasHeader: !!yn,
                      siderWidth: ha,
                      hasFooter: !!kn,
                      hasFooterToolbar: ba,
                      setHasFooterToolbar: Ca,
                      pageTitleInfo: gn,
                      matchMenus: yt,
                      matchMenuKeys: pn,
                      currentMenu: Kn,
                    },
                  ),
                },
                e.pure
                  ? g
                  : a.createElement(
                      'div',
                      { className: ga },
                      a.createElement(
                        D.Z,
                        { style: (0, E.Z)({ minHeight: '100%' }, $) },
                        hn,
                        a.createElement(
                          'div',
                          { style: Vn, className: ge.getPrefixCls('layout') },
                          yn,
                          a.createElement(
                            Kr,
                            (0, M.Z)({ isChildrenLayout: xn }, ca, { className: ya, style: S }),
                            Ze ? a.createElement(Hr.Z, null) : g,
                          ),
                          kn,
                        ),
                      ),
                    ),
              ),
            )
          );
        },
        ta = function () {
          return a.createElement(
            'svg',
            { width: '32px', height: '32px', viewBox: '0 0 200 200' },
            a.createElement(
              'defs',
              null,
              a.createElement(
                'linearGradient',
                {
                  x1: '62.1023273%',
                  y1: '0%',
                  x2: '108.19718%',
                  y2: '37.8635764%',
                  id: 'linearGradient-1',
                },
                a.createElement('stop', { stopColor: '#4285EB', offset: '0%' }),
                a.createElement('stop', { stopColor: '#2EC7FF', offset: '100%' }),
              ),
              a.createElement(
                'linearGradient',
                {
                  x1: '69.644116%',
                  y1: '0%',
                  x2: '54.0428975%',
                  y2: '108.456714%',
                  id: 'linearGradient-2',
                },
                a.createElement('stop', { stopColor: '#29CDFF', offset: '0%' }),
                a.createElement('stop', { stopColor: '#148EFF', offset: '37.8600687%' }),
                a.createElement('stop', { stopColor: '#0A60FF', offset: '100%' }),
              ),
              a.createElement(
                'linearGradient',
                {
                  x1: '69.6908165%',
                  y1: '-12.9743587%',
                  x2: '16.7228981%',
                  y2: '117.391248%',
                  id: 'linearGradient-3',
                },
                a.createElement('stop', { stopColor: '#FA816E', offset: '0%' }),
                a.createElement('stop', { stopColor: '#F74A5C', offset: '41.472606%' }),
                a.createElement('stop', { stopColor: '#F51D2C', offset: '100%' }),
              ),
              a.createElement(
                'linearGradient',
                {
                  x1: '68.1279872%',
                  y1: '-35.6905737%',
                  x2: '30.4400914%',
                  y2: '114.942679%',
                  id: 'linearGradient-4',
                },
                a.createElement('stop', { stopColor: '#FA8E7D', offset: '0%' }),
                a.createElement('stop', { stopColor: '#F74A5C', offset: '51.2635191%' }),
                a.createElement('stop', { stopColor: '#F51D2C', offset: '100%' }),
              ),
            ),
            a.createElement(
              'g',
              { stroke: 'none', strokeWidth: 1, fill: 'none', fillRule: 'evenodd' },
              a.createElement(
                'g',
                { transform: 'translate(-20.000000, -20.000000)' },
                a.createElement(
                  'g',
                  { transform: 'translate(20.000000, 20.000000)' },
                  a.createElement(
                    'g',
                    null,
                    a.createElement(
                      'g',
                      { fillRule: 'nonzero' },
                      a.createElement(
                        'g',
                        null,
                        a.createElement('path', {
                          d: 'M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z',
                          fill: 'url(#linearGradient-1)',
                        }),
                        a.createElement('path', {
                          d: 'M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z',
                          fill: 'url(#linearGradient-2)',
                        }),
                      ),
                      a.createElement('path', {
                        d: 'M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z',
                        fill: 'url(#linearGradient-3)',
                      }),
                    ),
                    a.createElement('ellipse', {
                      fill: 'url(#linearGradient-4)',
                      cx: '100.519339',
                      cy: '100.436681',
                      rx: '23.6001926',
                      ry: '23.580786',
                    }),
                  ),
                ),
              ),
            ),
          );
        };
      Hn.defaultProps = (0, E.Z)(
        (0, E.Z)({ logo: a.createElement(ta, null) }, N),
        {},
        { location: (0, le.Z)() ? window.location : void 0 },
      );
      var na = Hn,
        ra = y(81907),
        aa = ra.ZP,
        ia = na;
    },
    27196: function (Me, we, y) {
      Me.exports = y(51776);
    },
    16254: function (Me) {
      (Me.exports = E),
        (Me.exports.parse = D),
        (Me.exports.compile = H),
        (Me.exports.tokensToFunction = U),
        (Me.exports.tokensToRegExp = ae);
      var we = '/',
        y = './',
        F = new RegExp(
          [
            '(\\\\.)',
            '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?',
          ].join('|'),
          'g',
        );
      function D(M, K) {
        for (
          var a = [],
            ie = 0,
            I = 0,
            X = '',
            Ee = (K && K.delimiter) || we,
            oe = (K && K.delimiters) || y,
            T = !1,
            j;
          (j = F.exec(M)) !== null;

        ) {
          var le = j[0],
            fe = j[1],
            _ = j.index;
          if (((X += M.slice(I, _)), (I = _ + le.length), fe)) {
            (X += fe[1]), (T = !0);
            continue;
          }
          var he = '',
            Le = M[I],
            Ge = j[2],
            _e = j[3],
            B = j[4],
            Y = j[5];
          if (!T && X.length) {
            var Q = X.length - 1;
            oe.indexOf(X[Q]) > -1 && ((he = X[Q]), (X = X.slice(0, Q)));
          }
          X && (a.push(X), (X = ''), (T = !1));
          var ct = he !== '' && Le !== void 0 && Le !== he,
            Te = Y === '+' || Y === '*',
            ft = Y === '?' || Y === '*',
            Ie = he || Ee,
            qe = _e || B;
          a.push({
            name: Ge || ie++,
            prefix: he,
            delimiter: Ie,
            optional: ft,
            repeat: Te,
            partial: ct,
            pattern: qe ? Re(qe) : '[^' + ne(Ie) + ']+?',
          });
        }
        return (X || I < M.length) && a.push(X + M.substr(I)), a;
      }
      function H(M, K) {
        return U(D(M, K));
      }
      function U(M) {
        for (var K = new Array(M.length), a = 0; a < M.length; a++)
          typeof M[a] == 'object' && (K[a] = new RegExp('^(?:' + M[a].pattern + ')$'));
        return function (ie, I) {
          for (
            var X = '', Ee = (I && I.encode) || encodeURIComponent, oe = 0;
            oe < M.length;
            oe++
          ) {
            var T = M[oe];
            if (typeof T == 'string') {
              X += T;
              continue;
            }
            var j = ie ? ie[T.name] : void 0,
              le;
            if (Array.isArray(j)) {
              if (!T.repeat)
                throw new TypeError('Expected "' + T.name + '" to not repeat, but got array');
              if (j.length === 0) {
                if (T.optional) continue;
                throw new TypeError('Expected "' + T.name + '" to not be empty');
              }
              for (var fe = 0; fe < j.length; fe++) {
                if (((le = Ee(j[fe], T)), !K[oe].test(le)))
                  throw new TypeError('Expected all "' + T.name + '" to match "' + T.pattern + '"');
                X += (fe === 0 ? T.prefix : T.delimiter) + le;
              }
              continue;
            }
            if (typeof j == 'string' || typeof j == 'number' || typeof j == 'boolean') {
              if (((le = Ee(String(j), T)), !K[oe].test(le)))
                throw new TypeError(
                  'Expected "' + T.name + '" to match "' + T.pattern + '", but got "' + le + '"',
                );
              X += T.prefix + le;
              continue;
            }
            if (T.optional) {
              T.partial && (X += T.prefix);
              continue;
            }
            throw new TypeError(
              'Expected "' + T.name + '" to be ' + (T.repeat ? 'an array' : 'a string'),
            );
          }
          return X;
        };
      }
      function ne(M) {
        return M.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function Re(M) {
        return M.replace(/([=!:$/()])/g, '\\$1');
      }
      function Oe(M) {
        return M && M.sensitive ? '' : 'i';
      }
      function Ue(M, K) {
        if (!K) return M;
        var a = M.source.match(/\((?!\?)/g);
        if (a)
          for (var ie = 0; ie < a.length; ie++)
            K.push({
              name: ie,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              pattern: null,
            });
        return M;
      }
      function st(M, K, a) {
        for (var ie = [], I = 0; I < M.length; I++) ie.push(E(M[I], K, a).source);
        return new RegExp('(?:' + ie.join('|') + ')', Oe(a));
      }
      function Mt(M, K, a) {
        return ae(D(M, a), K, a);
      }
      function ae(M, K, a) {
        a = a || {};
        for (
          var ie = a.strict,
            I = a.start !== !1,
            X = a.end !== !1,
            Ee = ne(a.delimiter || we),
            oe = a.delimiters || y,
            T = []
              .concat(a.endsWith || [])
              .map(ne)
              .concat('$')
              .join('|'),
            j = I ? '^' : '',
            le = M.length === 0,
            fe = 0;
          fe < M.length;
          fe++
        ) {
          var _ = M[fe];
          if (typeof _ == 'string')
            (j += ne(_)), (le = fe === M.length - 1 && oe.indexOf(_[_.length - 1]) > -1);
          else {
            var he = _.repeat
              ? '(?:' + _.pattern + ')(?:' + ne(_.delimiter) + '(?:' + _.pattern + '))*'
              : _.pattern;
            K && K.push(_),
              _.optional
                ? _.partial
                  ? (j += ne(_.prefix) + '(' + he + ')?')
                  : (j += '(?:' + ne(_.prefix) + '(' + he + '))?')
                : (j += ne(_.prefix) + '(' + he + ')');
          }
        }
        return (
          X
            ? (ie || (j += '(?:' + Ee + ')?'), (j += T === '$' ? '$' : '(?=' + T + ')'))
            : (ie || (j += '(?:' + Ee + '(?=' + T + '))?'),
              le || (j += '(?=' + Ee + '|' + T + ')')),
          new RegExp(j, Oe(a))
        );
      }
      function E(M, K, a) {
        return M instanceof RegExp ? Ue(M, K) : Array.isArray(M) ? st(M, K, a) : Mt(M, K, a);
      }
    },
    7700: function () {},
    2828: function () {},
    17124: function () {},
    43361: function () {},
    17212: function () {},
    18067: function () {},
    27754: function (Me, we, y) {
      'use strict';
      y.d(we, {
        kv: function () {
          return Dt;
        },
        nG: function () {
          return un;
        },
        Un: function () {
          return on;
        },
      });
      var F = y(62991),
        D = y.n(F),
        H =
          Number.isNaN ||
          function (r) {
            return typeof r == 'number' && r !== r;
          };
      function U(t, r) {
        return !!(t === r || (H(t) && H(r)));
      }
      function ne(t, r) {
        if (t.length !== r.length) return !1;
        for (var n = 0; n < t.length; n++) if (!U(t[n], r[n])) return !1;
        return !0;
      }
      function Re(t, r) {
        r === void 0 && (r = ne);
        var n,
          l = [],
          v,
          m = !1;
        function d() {
          for (var x = [], C = 0; C < arguments.length; C++) x[C] = arguments[C];
          return (
            (m && n === this && r(x, l)) || ((v = t.apply(this, x)), (m = !0), (n = this), (l = x)),
            v
          );
        }
        return d;
      }
      var Oe = Re;
      function Ue(t) {
        for (var r = [], n = 0; n < t.length; ) {
          var l = t[n];
          if (l === '*' || l === '+' || l === '?') {
            r.push({ type: 'MODIFIER', index: n, value: t[n++] });
            continue;
          }
          if (l === '\\') {
            r.push({ type: 'ESCAPED_CHAR', index: n++, value: t[n++] });
            continue;
          }
          if (l === '{') {
            r.push({ type: 'OPEN', index: n, value: t[n++] });
            continue;
          }
          if (l === '}') {
            r.push({ type: 'CLOSE', index: n, value: t[n++] });
            continue;
          }
          if (l === ':') {
            for (var v = '', m = n + 1; m < t.length; ) {
              var d = t.charCodeAt(m);
              if (
                (d >= 48 && d <= 57) ||
                (d >= 65 && d <= 90) ||
                (d >= 97 && d <= 122) ||
                d === 95
              ) {
                v += t[m++];
                continue;
              }
              break;
            }
            if (!v) throw new TypeError('Missing parameter name at ' + n);
            r.push({ type: 'NAME', index: n, value: v }), (n = m);
            continue;
          }
          if (l === '(') {
            var x = 1,
              C = '',
              m = n + 1;
            if (t[m] === '?') throw new TypeError('Pattern cannot start with "?" at ' + m);
            for (; m < t.length; ) {
              if (t[m] === '\\') {
                C += t[m++] + t[m++];
                continue;
              }
              if (t[m] === ')') {
                if ((x--, x === 0)) {
                  m++;
                  break;
                }
              } else if (t[m] === '(' && (x++, t[m + 1] !== '?'))
                throw new TypeError('Capturing groups are not allowed at ' + m);
              C += t[m++];
            }
            if (x) throw new TypeError('Unbalanced pattern at ' + n);
            if (!C) throw new TypeError('Missing pattern at ' + n);
            r.push({ type: 'PATTERN', index: n, value: C }), (n = m);
            continue;
          }
          r.push({ type: 'CHAR', index: n, value: t[n++] });
        }
        return r.push({ type: 'END', index: n, value: '' }), r;
      }
      function st(t, r) {
        r === void 0 && (r = {});
        for (
          var n = Ue(t),
            l = r.prefixes,
            v = l === void 0 ? './' : l,
            m = '[^' + K(r.delimiter || '/#?') + ']+?',
            d = [],
            x = 0,
            C = 0,
            Z = '',
            A = function (xe) {
              if (C < n.length && n[C].type === xe) return n[C++].value;
            },
            R = function (xe) {
              var Qe = A(xe);
              if (Qe !== void 0) return Qe;
              var Lt = n[C],
                Ft = Lt.type,
                Ht = Lt.index;
              throw new TypeError('Unexpected ' + Ft + ' at ' + Ht + ', expected ' + xe);
            },
            N = function () {
              for (var xe = '', Qe; (Qe = A('CHAR') || A('ESCAPED_CHAR')); ) xe += Qe;
              return xe;
            };
          C < n.length;

        ) {
          var W = A('CHAR'),
            ue = A('NAME'),
            pe = A('PATTERN');
          if (ue || pe) {
            var z = W || '';
            v.indexOf(z) === -1 && ((Z += z), (z = '')),
              Z && (d.push(Z), (Z = '')),
              d.push({
                name: ue || x++,
                prefix: z,
                suffix: '',
                pattern: pe || m,
                modifier: A('MODIFIER') || '',
              });
            continue;
          }
          var ve = W || A('ESCAPED_CHAR');
          if (ve) {
            Z += ve;
            continue;
          }
          Z && (d.push(Z), (Z = ''));
          var te = A('OPEN');
          if (te) {
            var z = N(),
              re = A('NAME') || '',
              ye = A('PATTERN') || '',
              ze = N();
            R('CLOSE'),
              d.push({
                name: re || (ye ? x++ : ''),
                pattern: re && !ye ? m : ye,
                prefix: z,
                suffix: ze,
                modifier: A('MODIFIER') || '',
              });
            continue;
          }
          R('END');
        }
        return d;
      }
      function Mt(t, r) {
        return ae(st(t, r), r);
      }
      function ae(t, r) {
        r === void 0 && (r = {});
        var n = a(r),
          l = r.encode,
          v =
            l === void 0
              ? function (C) {
                  return C;
                }
              : l,
          m = r.validate,
          d = m === void 0 ? !0 : m,
          x = t.map(function (C) {
            if (typeof C == 'object') return new RegExp('^(?:' + C.pattern + ')$', n);
          });
        return function (C) {
          for (var Z = '', A = 0; A < t.length; A++) {
            var R = t[A];
            if (typeof R == 'string') {
              Z += R;
              continue;
            }
            var N = C ? C[R.name] : void 0,
              W = R.modifier === '?' || R.modifier === '*',
              ue = R.modifier === '*' || R.modifier === '+';
            if (Array.isArray(N)) {
              if (!ue)
                throw new TypeError('Expected "' + R.name + '" to not repeat, but got an array');
              if (N.length === 0) {
                if (W) continue;
                throw new TypeError('Expected "' + R.name + '" to not be empty');
              }
              for (var pe = 0; pe < N.length; pe++) {
                var z = v(N[pe], R);
                if (d && !x[A].test(z))
                  throw new TypeError(
                    'Expected all "' +
                      R.name +
                      '" to match "' +
                      R.pattern +
                      '", but got "' +
                      z +
                      '"',
                  );
                Z += R.prefix + z + R.suffix;
              }
              continue;
            }
            if (typeof N == 'string' || typeof N == 'number') {
              var z = v(String(N), R);
              if (d && !x[A].test(z))
                throw new TypeError(
                  'Expected "' + R.name + '" to match "' + R.pattern + '", but got "' + z + '"',
                );
              Z += R.prefix + z + R.suffix;
              continue;
            }
            if (!W) {
              var ve = ue ? 'an array' : 'a string';
              throw new TypeError('Expected "' + R.name + '" to be ' + ve);
            }
          }
          return Z;
        };
      }
      function E(t, r) {
        var n = [],
          l = oe(t, n, r);
        return M(l, n, r);
      }
      function M(t, r, n) {
        n === void 0 && (n = {});
        var l = n.decode,
          v =
            l === void 0
              ? function (m) {
                  return m;
                }
              : l;
        return function (m) {
          var d = t.exec(m);
          if (!d) return !1;
          for (
            var x = d[0],
              C = d.index,
              Z = Object.create(null),
              A = function (N) {
                if (d[N] === void 0) return 'continue';
                var W = r[N - 1];
                W.modifier === '*' || W.modifier === '+'
                  ? (Z[W.name] = d[N].split(W.prefix + W.suffix).map(function (ue) {
                      return v(ue, W);
                    }))
                  : (Z[W.name] = v(d[N], W));
              },
              R = 1;
            R < d.length;
            R++
          )
            A(R);
          return { path: x, index: C, params: Z };
        };
      }
      function K(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function a(t) {
        return t && t.sensitive ? '' : 'i';
      }
      function ie(t, r) {
        if (!r) return t;
        var n = t.source.match(/\((?!\?)/g);
        if (n)
          for (var l = 0; l < n.length; l++)
            r.push({ name: l, prefix: '', suffix: '', modifier: '', pattern: '' });
        return t;
      }
      function I(t, r, n) {
        var l = t.map(function (v) {
          return oe(v, r, n).source;
        });
        return new RegExp('(?:' + l.join('|') + ')', a(n));
      }
      function X(t, r, n) {
        return Ee(st(t, n), r, n);
      }
      function Ee(t, r, n) {
        n === void 0 && (n = {});
        for (
          var l = n.strict,
            v = l === void 0 ? !1 : l,
            m = n.start,
            d = m === void 0 ? !0 : m,
            x = n.end,
            C = x === void 0 ? !0 : x,
            Z = n.encode,
            A =
              Z === void 0
                ? function (xe) {
                    return xe;
                  }
                : Z,
            R = '[' + K(n.endsWith || '') + ']|$',
            N = '[' + K(n.delimiter || '/#?') + ']',
            W = d ? '^' : '',
            ue = 0,
            pe = t;
          ue < pe.length;
          ue++
        ) {
          var z = pe[ue];
          if (typeof z == 'string') W += K(A(z));
          else {
            var ve = K(A(z.prefix)),
              te = K(A(z.suffix));
            if (z.pattern)
              if ((r && r.push(z), ve || te))
                if (z.modifier === '+' || z.modifier === '*') {
                  var re = z.modifier === '*' ? '?' : '';
                  W +=
                    '(?:' +
                    ve +
                    '((?:' +
                    z.pattern +
                    ')(?:' +
                    te +
                    ve +
                    '(?:' +
                    z.pattern +
                    '))*)' +
                    te +
                    ')' +
                    re;
                } else W += '(?:' + ve + '(' + z.pattern + ')' + te + ')' + z.modifier;
              else W += '(' + z.pattern + ')' + z.modifier;
            else W += '(?:' + ve + te + ')' + z.modifier;
          }
        }
        if (C) v || (W += N + '?'), (W += n.endsWith ? '(?=' + R + ')' : '$');
        else {
          var ye = t[t.length - 1],
            ze = typeof ye == 'string' ? N.indexOf(ye[ye.length - 1]) > -1 : ye === void 0;
          v || (W += '(?:' + N + '(?=' + R + '))?'), ze || (W += '(?=' + N + '|' + R + ')');
        }
        return new RegExp(W, a(n));
      }
      function oe(t, r, n) {
        return t instanceof RegExp ? ie(t, r) : Array.isArray(t) ? I(t, r, n) : X(t, r, n);
      }
      function T(t, r) {
        return (r >>> t) | (r << (32 - t));
      }
      function j(t, r, n) {
        return (t & r) ^ (~t & n);
      }
      function le(t, r, n) {
        return (t & r) ^ (t & n) ^ (r & n);
      }
      function fe(t) {
        return T(2, t) ^ T(13, t) ^ T(22, t);
      }
      function _(t) {
        return T(6, t) ^ T(11, t) ^ T(25, t);
      }
      function he(t) {
        return T(7, t) ^ T(18, t) ^ (t >>> 3);
      }
      function Le(t) {
        return T(17, t) ^ T(19, t) ^ (t >>> 10);
      }
      function Ge(t, r) {
        return (t[r & 15] += Le(t[(r + 14) & 15]) + t[(r + 9) & 15] + he(t[(r + 1) & 15]));
      }
      var _e = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748,
          2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206,
          2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
          1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372,
          1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
          3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734,
          506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
          3329325298,
        ],
        B,
        Y,
        Q,
        ct = '0123456789abcdef';
      function Te(t, r) {
        var n = (t & 65535) + (r & 65535),
          l = (t >> 16) + (r >> 16) + (n >> 16);
        return (l << 16) | (n & 65535);
      }
      function ft() {
        (B = new Array(8)),
          (Y = new Array(2)),
          (Q = new Array(64)),
          (Y[0] = Y[1] = 0),
          (B[0] = 1779033703),
          (B[1] = 3144134277),
          (B[2] = 1013904242),
          (B[3] = 2773480762),
          (B[4] = 1359893119),
          (B[5] = 2600822924),
          (B[6] = 528734635),
          (B[7] = 1541459225);
      }
      function Ie() {
        var t,
          r,
          n,
          l,
          v,
          m,
          d,
          x,
          C,
          Z,
          A = new Array(16);
        (t = B[0]),
          (r = B[1]),
          (n = B[2]),
          (l = B[3]),
          (v = B[4]),
          (m = B[5]),
          (d = B[6]),
          (x = B[7]);
        for (var R = 0; R < 16; R++)
          A[R] =
            Q[(R << 2) + 3] | (Q[(R << 2) + 2] << 8) | (Q[(R << 2) + 1] << 16) | (Q[R << 2] << 24);
        for (var N = 0; N < 64; N++)
          (C = x + _(v) + j(v, m, d) + _e[N]),
            N < 16 ? (C += A[N]) : (C += Ge(A, N)),
            (Z = fe(t) + le(t, r, n)),
            (x = d),
            (d = m),
            (m = v),
            (v = Te(l, C)),
            (l = n),
            (n = r),
            (r = t),
            (t = Te(C, Z));
        (B[0] += t),
          (B[1] += r),
          (B[2] += n),
          (B[3] += l),
          (B[4] += v),
          (B[5] += m),
          (B[6] += d),
          (B[7] += x);
      }
      function qe(t, r) {
        var n,
          l,
          v = 0;
        l = (Y[0] >> 3) & 63;
        var m = r & 63;
        for ((Y[0] += r << 3) < r << 3 && Y[1]++, Y[1] += r >> 29, n = 0; n + 63 < r; n += 64) {
          for (var d = l; d < 64; d++) Q[d] = t.charCodeAt(v++);
          Ie(), (l = 0);
        }
        for (var x = 0; x < m; x++) Q[x] = t.charCodeAt(v++);
      }
      function Kt() {
        var t = (Y[0] >> 3) & 63;
        if (((Q[t++] = 128), t <= 56)) for (var r = t; r < 56; r++) Q[r] = 0;
        else {
          for (var n = t; n < 64; n++) Q[n] = 0;
          Ie();
          for (var l = 0; l < 56; l++) Q[l] = 0;
        }
        (Q[56] = (Y[1] >>> 24) & 255),
          (Q[57] = (Y[1] >>> 16) & 255),
          (Q[58] = (Y[1] >>> 8) & 255),
          (Q[59] = Y[1] & 255),
          (Q[60] = (Y[0] >>> 24) & 255),
          (Q[61] = (Y[0] >>> 16) & 255),
          (Q[62] = (Y[0] >>> 8) & 255),
          (Q[63] = Y[0] & 255),
          Ie();
      }
      function Cn() {
        for (var t = 0, r = new Array(32), n = 0; n < 8; n++)
          (r[t++] = (B[n] >>> 24) & 255),
            (r[t++] = (B[n] >>> 16) & 255),
            (r[t++] = (B[n] >>> 8) & 255),
            (r[t++] = B[n] & 255);
        return r;
      }
      function Mn() {
        for (var t = new String(), r = 0; r < 8; r++)
          for (var n = 28; n >= 0; n -= 4) t += ct.charAt((B[r] >>> n) & 15);
        return t;
      }
      function En(t) {
        return ft(), qe(t, t.length), Kt(), Mn();
      }
      var Sn = En;
      function Se(t) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (Se = function (n) {
                return typeof n;
              })
            : (Se = function (n) {
                return n &&
                  typeof Symbol == 'function' &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? 'symbol'
                  : typeof n;
              }),
          Se(t)
        );
      }
      function de(t, r) {
        return Et(t) || $t(t, r) || dt(t, r) || Wt();
      }
      function Wt() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function $t(t, r) {
        if (!(typeof Symbol == 'undefined' || !(Symbol.iterator in Object(t)))) {
          var n = [],
            l = !0,
            v = !1,
            m = void 0;
          try {
            for (
              var d = t[Symbol.iterator](), x;
              !(l = (x = d.next()).done) && (n.push(x.value), !(r && n.length === r));
              l = !0
            );
          } catch (C) {
            (v = !0), (m = C);
          } finally {
            try {
              !l && d.return != null && d.return();
            } finally {
              if (v) throw m;
            }
          }
          return n;
        }
      }
      function Et(t) {
        if (Array.isArray(t)) return t;
      }
      function St(t, r) {
        var n;
        if (typeof Symbol == 'undefined' || t[Symbol.iterator] == null) {
          if (Array.isArray(t) || (n = dt(t)) || (r && t && typeof t.length == 'number')) {
            n && (t = n);
            var l = 0,
              v = function () {};
            return {
              s: v,
              n: function () {
                return l >= t.length ? { done: !0 } : { done: !1, value: t[l++] };
              },
              e: function (Z) {
                throw Z;
              },
              f: v,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var m = !0,
          d = !1,
          x;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var Z = n.next();
            return (m = Z.done), Z;
          },
          e: function (Z) {
            (d = !0), (x = Z);
          },
          f: function () {
            try {
              !m && n.return != null && n.return();
            } finally {
              if (d) throw x;
            }
          },
        };
      }
      function Ut(t, r) {
        if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
      }
      function Rt(t, r) {
        for (var n = 0; n < r.length; n++) {
          var l = r[n];
          (l.enumerable = l.enumerable || !1),
            (l.configurable = !0),
            'value' in l && (l.writable = !0),
            Object.defineProperty(t, l.key, l);
        }
      }
      function Gt(t, r, n) {
        return r && Rt(t.prototype, r), n && Rt(t, n), t;
      }
      function Zt(t, r) {
        if (typeof r != 'function' && r !== null)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(r && r.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          r && ke(t, r);
      }
      function kt(t) {
        var r = me();
        return function () {
          var l = Ve(t),
            v;
          if (r) {
            var m = Ve(this).constructor;
            v = Reflect.construct(l, arguments, m);
          } else v = l.apply(this, arguments);
          return Rn(this, v);
        };
      }
      function Rn(t, r) {
        return r && (Se(r) === 'object' || typeof r == 'function') ? r : Zn(t);
      }
      function Zn(t) {
        if (t === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function wt(t) {
        var r = typeof Map == 'function' ? new Map() : void 0;
        return (
          (wt = function (l) {
            if (l === null || !Vt(l)) return l;
            if (typeof l != 'function')
              throw new TypeError('Super expression must either be null or a function');
            if (typeof r != 'undefined') {
              if (r.has(l)) return r.get(l);
              r.set(l, v);
            }
            function v() {
              return se(l, arguments, Ve(this).constructor);
            }
            return (
              (v.prototype = Object.create(l.prototype, {
                constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 },
              })),
              ke(v, l)
            );
          }),
          wt(t)
        );
      }
      function se(t, r, n) {
        return (
          me()
            ? (se = Reflect.construct)
            : (se = function (v, m, d) {
                var x = [null];
                x.push.apply(x, m);
                var C = Function.bind.apply(v, x),
                  Z = new C();
                return d && ke(Z, d.prototype), Z;
              }),
          se.apply(null, arguments)
        );
      }
      function me() {
        if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function Vt(t) {
        return Function.toString.call(t).indexOf('[native code]') !== -1;
      }
      function ke(t, r) {
        return (
          (ke =
            Object.setPrototypeOf ||
            function (l, v) {
              return (l.__proto__ = v), l;
            }),
          ke(t, r)
        );
      }
      function Ve(t) {
        return (
          (Ve = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n);
              }),
          Ve(t)
        );
      }
      function Pt(t) {
        return Qt(t) || Je(t) || dt(t) || Jt();
      }
      function Jt() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function dt(t, r) {
        if (!!t) {
          if (typeof t == 'string') return Fe(t, r);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            (n === 'Object' && t.constructor && (n = t.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(t);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return Fe(t, r);
        }
      }
      function Je(t) {
        if (typeof Symbol != 'undefined' && Symbol.iterator in Object(t)) return Array.from(t);
      }
      function Qt(t) {
        if (Array.isArray(t)) return Fe(t);
      }
      function Fe(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var n = 0, l = new Array(r); n < r; n++) l[n] = t[n];
        return l;
      }
      function vt(t, r) {
        if (t == null) return {};
        var n = Nt(t, r),
          l,
          v;
        if (Object.getOwnPropertySymbols) {
          var m = Object.getOwnPropertySymbols(t);
          for (v = 0; v < m.length; v++)
            (l = m[v]),
              !(r.indexOf(l) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(t, l) || (n[l] = t[l]));
        }
        return n;
      }
      function Nt(t, r) {
        if (t == null) return {};
        var n = {},
          l = Object.keys(t),
          v,
          m;
        for (m = 0; m < l.length; m++) (v = l[m]), !(r.indexOf(v) >= 0) && (n[v] = t[v]);
        return n;
      }
      function Ot(t, r) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(t);
          r &&
            (l = l.filter(function (v) {
              return Object.getOwnPropertyDescriptor(t, v).enumerable;
            })),
            n.push.apply(n, l);
        }
        return n;
      }
      function q(t) {
        for (var r = 1; r < arguments.length; r++) {
          var n = arguments[r] != null ? arguments[r] : {};
          r % 2
            ? Ot(Object(n), !0).forEach(function (l) {
                Xt(t, l, n[l]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Ot(Object(n)).forEach(function (l) {
                Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(n, l));
              });
        }
        return t;
      }
      function Xt(t, r, n) {
        return (
          r in t
            ? Object.defineProperty(t, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[r] = n),
          t
        );
      }
      function He(t) {
        return t.split('?')[0].split('#')[0];
      }
      var mt = function (r) {
          if (!r.startsWith('http')) return !1;
          try {
            var n = new URL(r);
            return !!n;
          } catch (l) {
            return !1;
          }
        },
        Yt = function (r) {
          var n = r.path;
          if (!n || n === '/')
            try {
              return '/'.concat(Sn(JSON.stringify(r)));
            } catch (l) {}
          return n && He(n);
        },
        _t = function (r, n) {
          var l = r.name,
            v = r.locale;
          return ('locale' in r && v === !1) || !l ? !1 : r.locale || ''.concat(n, '.').concat(l);
        },
        Tt = function () {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
            n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '/';
          return (r || n).startsWith('/') || mt(r)
            ? r
            : '/'.concat(n, '/').concat(r).replace(/\/\//g, '/').replace(/\/\//g, '/');
        },
        pt = function (r, n) {
          var l = r.menu,
            v = l === void 0 ? {} : l,
            m = r.indexRoute,
            d = r.path,
            x = d === void 0 ? '' : d,
            C = r.routes,
            Z = v.name,
            A = Z === void 0 ? r.name : Z,
            R = v.icon,
            N = R === void 0 ? r.icon : R,
            W = v.hideChildren,
            ue = W === void 0 ? r.hideChildren : W,
            pe = v.flatMenu,
            z = pe === void 0 ? r.flatMenu : pe,
            ve =
              m && Object.keys(m).join(',') !== 'redirect'
                ? [q({ path: x, menu: v }, m)].concat(C || [])
                : C,
            te = q({}, r);
          if ((A && (te.name = A), N && (te.icon = N), ve && ve.length)) {
            if (ue) return delete te.routes, te;
            var re = gt(q(q({}, n), {}, { data: ve }), r);
            if (z) return re;
            te.routes = re;
          }
          return te;
        };
      function gt(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { path: '/' },
          n = t.data,
          l = t.formatMessage,
          v = t.parentName,
          m = t.locale;
        return !n || !Array.isArray(n)
          ? []
          : n
              .filter(function (d) {
                return d
                  ? d.routes || d.children || d.path || d.layout
                    ? !0
                    : (d.redirect || d.unaccessible, !1)
                  : !1;
              })
              .filter(function (d) {
                var x, C;
                return (
                  d.unaccessible && delete d.name,
                  (d == null || (x = d.menu) === null || x === void 0 ? void 0 : x.name) ||
                  (d == null ? void 0 : d.flatMenu) ||
                  (d == null || (C = d.menu) === null || C === void 0 ? void 0 : C.flatMenu)
                    ? !0
                    : d.menu !== !1
                );
              })
              .map(function () {
                var d =
                  arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { path: '/' };
                d.children && !d.routes && ((d.routes = d.children), delete d.children);
                var x = Tt(d.path, r ? r.path : '/'),
                  C = d.name,
                  Z = _t(d, v || 'menu'),
                  A = Z !== !1 && m !== !1 && l && Z ? l({ id: Z, defaultMessage: C }) : C,
                  R = r.pro_layout_parentKeys,
                  N = R === void 0 ? [] : R,
                  W = r.routes,
                  ue = r.children,
                  pe = r.icon,
                  z = r.flatMenu,
                  ve = r.indexRoute,
                  te = vt(r, [
                    'pro_layout_parentKeys',
                    'routes',
                    'children',
                    'icon',
                    'flatMenu',
                    'indexRoute',
                  ]),
                  re = q(
                    q(q({}, te), {}, { menu: void 0 }, d),
                    {},
                    {
                      path: x,
                      locale: Z,
                      key: d.key || Yt(q(q({}, d), {}, { path: x })),
                      pro_layout_parentKeys: Array.from(
                        new Set(
                          [].concat(Pt(d.parentKeys || []), Pt(N), [
                            '/'
                              .concat(r.key || '')
                              .replace(/\/\//g, '/')
                              .replace(/\/\//g, '/'),
                          ]),
                        ),
                      ).filter(function (ze) {
                        return ze && ze !== '/';
                      }),
                    },
                  );
                if (
                  (A ? (re.name = A) : delete re.name,
                  re.menu === void 0 && delete re.menu,
                  d.routes)
                ) {
                  var ye = gt(q(q({}, t), {}, { data: d.routes, parentName: Z || '' }), re);
                  (re.routes = ye && ye.length > 0 ? ye : void 0), re.routes || delete re.routes;
                }
                return pt(re, t);
              })
              .flat(1);
      }
      var qt = Oe(gt, D()),
        en = function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return r
            .filter(function (n) {
              return n && (n.name || n.routes) && !n.hideInMenu && !n.redirect;
            })
            .map(function (n) {
              var l = q({}, n);
              if (
                (l.children && !l.routes && (l.routes = n.children),
                l.routes &&
                  Array.isArray(l.routes) &&
                  !l.hideChildrenInMenu &&
                  l.routes.some(function (m) {
                    return m && !!m.name;
                  }))
              ) {
                var v = t(l.routes);
                if (v.length) return q(q({}, l), {}, { routes: v });
              }
              return q(q({}, n), {}, { routes: void 0 });
            })
            .filter(function (n) {
              return n;
            });
        },
        Be = (function (t) {
          Zt(n, t);
          var r = kt(n);
          function n() {
            return Ut(this, n), r.apply(this, arguments);
          }
          return (
            Gt(n, [
              {
                key: 'get',
                value: function (v) {
                  var m;
                  try {
                    var d = St(this.entries()),
                      x;
                    try {
                      for (d.s(); !(x = d.n()).done; ) {
                        var C = de(x.value, 2),
                          Z = C[0],
                          A = C[1],
                          R = He(Z);
                        if (!mt(Z) && oe(R, []).test(v)) {
                          m = A;
                          break;
                        }
                      }
                    } catch (N) {
                      d.e(N);
                    } finally {
                      d.f();
                    }
                  } catch (N) {
                    m = void 0;
                  }
                  return m;
                },
              },
            ]),
            n
          );
        })(wt(Map)),
        tn = function (r) {
          var n = new Be(),
            l = function v(m, d) {
              m.forEach(function (x) {
                x && x.routes && v(x.routes, x);
                var C = Tt(x.path, d ? d.path : '/');
                n.set(He(C), x);
              });
            };
          return l(r), n;
        },
        nn = Oe(tn, D()),
        rn = function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return r
            .map(function (n) {
              if (n.routes && Array.isArray(n.routes) && n.routes.length > 0) {
                var l = t(n.routes);
                if (l.length) return q(q({}, n), {}, { routes: l });
              }
              var v = q({}, n);
              return delete v.routes, v;
            })
            .filter(function (n) {
              return n;
            });
        },
        an = function (r, n, l, v) {
          var m = qt({ data: r, formatMessage: l, locale: n }),
            d = v ? rn(m) : en(m),
            x = nn(m);
          return { breadcrumb: x, menuData: d };
        },
        on = an;
      function It(t, r) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(t);
          r &&
            (l = l.filter(function (v) {
              return Object.getOwnPropertyDescriptor(t, v).enumerable;
            })),
            n.push.apply(n, l);
        }
        return n;
      }
      function et(t) {
        for (var r = 1; r < arguments.length; r++) {
          var n = arguments[r] != null ? arguments[r] : {};
          r % 2
            ? It(Object(n), !0).forEach(function (l) {
                tt(t, l, n[l]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : It(Object(n)).forEach(function (l) {
                Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(n, l));
              });
        }
        return t;
      }
      function tt(t, r, n) {
        return (
          r in t
            ? Object.defineProperty(t, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[r] = n),
          t
        );
      }
      var At = function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            n = {};
          return (
            r.forEach(function (l) {
              !l ||
                !l.key ||
                ((n[He(l.path || l.key || '/')] = et({}, l)),
                (n[l.key || l.path || '/'] = et({}, l)),
                l.routes && (n = et(et({}, n), t(l.routes))));
            }),
            n
          );
        },
        Dt = At,
        ln = function () {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            n = arguments.length > 1 ? arguments[1] : void 0,
            l = arguments.length > 2 ? arguments[2] : void 0;
          return r
            .filter(function (v) {
              if (v === '/' && n === '/') return !0;
              if (v !== '/' && v !== '/*' && v && !mt(v)) {
                var m = He(v);
                try {
                  if (
                    (l && oe(''.concat(m)).test(n)) ||
                    oe(''.concat(m), []).test(n) ||
                    oe(''.concat(m, '/(.*)')).test(n)
                  )
                    return !0;
                } catch (d) {}
              }
              return !1;
            })
            .sort(function (v, m) {
              return v === n
                ? 10
                : m === n
                ? -10
                : v.substr(1).split('/').length - m.substr(1).split('/').length;
            });
        },
        nt = function (r, n, l, v) {
          var m = Dt(n),
            d = Object.keys(m),
            x = ln(d, r || '/', v);
          return !x || x.length < 1
            ? []
            : (l || (x = [x[x.length - 1]]),
              x
                .map(function (C) {
                  var Z = m[C] || { pro_layout_parentKeys: '', key: '' },
                    A = new Map(),
                    R = (Z.pro_layout_parentKeys || [])
                      .map(function (N) {
                        return A.has(N) ? null : (A.set(N, !0), m[N]);
                      })
                      .filter(function (N) {
                        return N;
                      });
                  return Z.key && R.push(Z), R;
                })
                .flat(1));
        },
        un = nt;
    },
    57838: function (Me, we, y) {
      'use strict';
      y.d(we, {
        Z: function () {
          return H;
        },
      });
      var F = y(33671),
        D = y(67294);
      function H() {
        var U = D.useReducer(function (Oe) {
            return Oe + 1;
          }, 0),
          ne = (0, F.Z)(U, 2),
          Re = ne[1];
        return Re;
      }
    },
    62991: function (Me) {
      'use strict';
      var we = typeof BigInt64Array != 'undefined';
      Me.exports = function y(F, D) {
        if (F === D) return !0;
        if (F && D && typeof F == 'object' && typeof D == 'object') {
          if (F.constructor !== D.constructor) return !1;
          var H, U, ne;
          if (Array.isArray(F)) {
            if (((H = F.length), H != D.length)) return !1;
            for (U = H; U-- != 0; ) if (!y(F[U], D[U])) return !1;
            return !0;
          }
          if (F instanceof Map && D instanceof Map) {
            if (F.size !== D.size) return !1;
            for (U of F.entries()) if (!D.has(U[0])) return !1;
            for (U of F.entries()) if (!y(U[1], D.get(U[0]))) return !1;
            return !0;
          }
          if (F instanceof Set && D instanceof Set) {
            if (F.size !== D.size) return !1;
            for (U of F.entries()) if (!D.has(U[0])) return !1;
            return !0;
          }
          if (ArrayBuffer.isView(F) && ArrayBuffer.isView(D)) {
            if (((H = F.length), H != D.length)) return !1;
            for (U = H; U-- != 0; ) if (F[U] !== D[U]) return !1;
            return !0;
          }
          if (F.constructor === RegExp) return F.source === D.source && F.flags === D.flags;
          if (F.valueOf !== Object.prototype.valueOf) return F.valueOf() === D.valueOf();
          if (F.toString !== Object.prototype.toString) return F.toString() === D.toString();
          if (((ne = Object.keys(F)), (H = ne.length), H !== Object.keys(D).length)) return !1;
          for (U = H; U-- != 0; ) if (!Object.prototype.hasOwnProperty.call(D, ne[U])) return !1;
          for (U = H; U-- != 0; ) {
            var Re = ne[U];
            if (!y(F[Re], D[Re])) return !1;
          }
          return !0;
        }
        return F !== F && D !== D;
      };
    },
  },
]);
