(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [157],
  {
    68179: function () {},
    56896: function (pt, ct, tt) {
      'use strict';
      tt.r(ct),
        tt.d(ct, {
          default: function () {
            return Y;
          },
        });
      var rt = tt(20228),
        U = tt(11382),
        w = tt(57663),
        y = tt(71577),
        q = tt(8870),
        k = tt(47673),
        v = tt(4107),
        b = tt(22385),
        m = tt(3318),
        d = tt(48736),
        l = tt(27049),
        e = tt(34792),
        t = tt(48086),
        s = tt(9715),
        a = tt(86585),
        u = tt(57337),
        n = tt(67294),
        i = tt(95854),
        c = tt(1870),
        r = tt(3182),
        h = tt(94043),
        N = tt.n(h);
      function A(G) {
        return T.apply(this, arguments);
      }
      function T() {
        return (
          (T = (0, r.Z)(
            N().mark(function G(C) {
              return N().wrap(function (x) {
                for (;;)
                  switch ((x.prev = x.next)) {
                    case 0:
                      return x.abrupt(
                        'return',
                        (0, i.WY)('/api/basicForm', { method: 'POST', data: C }),
                      );
                    case 1:
                    case 'end':
                      return x.stop();
                  }
              }, G);
            }),
          )),
          T.apply(this, arguments)
        );
      }
      var P = 'snow',
        E = {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ size: ['small', !1, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, !1] }],
            ['link', 'image', 'video'],
            [{ color: [] }, { background: [] }],
            ['clean'],
          ],
          clipboard: { matchVisual: !1 },
        },
        p = [
          'bold',
          'italic',
          'underline',
          'strike',
          'align',
          'list',
          'indent',
          'size',
          'header',
          'link',
          'image',
          'video',
          'color',
          'background',
          'clean',
        ];
      function O(G, C) {
        'use strict';
        if (G == null) throw new TypeError('Cannot convert undefined or null to object');
        for (var M = Object(G), x = 1; x < arguments.length; x++) {
          var I = arguments[x];
          if (I != null)
            for (var D in I) Object.prototype.hasOwnProperty.call(I, D) && (M[D] = I[D]);
        }
        return M;
      }
      var _ = function (G) {
          G === void 0 && (G = { theme: P, modules: E, formats: p });
          var C = (0, n.useRef)(),
            M = (0, n.useState)(!1),
            x = M[0],
            I = M[1],
            D = (0, n.useState)({
              Quill: void 0,
              quillRef: C,
              quill: void 0,
              editorRef: C,
              editor: void 0,
            }),
            H = D[0],
            z = D[1];
          return (
            (0, n.useEffect)(
              function () {
                if (
                  (H.Quill || (H.Quill = tt(76095)), H.Quill && !H.quill && C && C.current && x)
                ) {
                  var L = O(G, {
                      modules: O(E, G.modules),
                      formats: G.formats || p,
                      theme: G.theme || P,
                    }),
                    F = new H.Quill(C.current, L);
                  z(O(O({}, H), { quill: F, editor: F }));
                }
                I(!0);
              },
              [H.Quill],
            ),
            H
          );
        },
        R = tt(85893),
        j = {
          labelCol: { xs: { span: 24 }, sm: { span: 6 } },
          wrapperCol: { xs: { span: 24 }, sm: { span: 12 } },
        },
        K = { wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } } },
        Y = function () {
          var G = (0, n.useState)(!0),
            C = (0, u.Z)(G, 2),
            M = C[0],
            x = C[1],
            I = a.Z.useForm(),
            D = (0, u.Z)(I, 1),
            H = D[0],
            z = _(),
            L = z.quill,
            F = z.quillRef,
            W = (0, i.QT)(A, {
              manual: !0,
              onSuccess: function (et) {
                t.default.success('ok'), console.log('result: ', et);
              },
            }),
            V = W.run;
          (0, n.useEffect)(
            function () {
              setTimeout(function () {
                x(!1);
              }, 1e3);
            },
            [M],
          ),
            (0, n.useEffect)(
              function () {
                L &&
                  (L.clipboard.dangerouslyPasteHTML('<p>hello pro</p>'),
                  L.on('text-change', function (X, et, nt) {
                    console.log('source: ', nt),
                      console.log('oldDelta: ', et),
                      console.log('delta: ', X),
                      console.log('Text change!'),
                      console.log(L.getText()),
                      console.log(L.getContents()),
                      console.log(L.root.innerHTML),
                      console.log(F.current.firstChild.innerHTML),
                      H.setFieldsValue({ content: L.root.innerHTML });
                  }));
              },
              [H, L, F],
            );
          var Q = function () {
            H.resetFields();
          };
          return (0, R.jsxs)(U.Z, {
            spinning: M,
            size: 'large',
            children: [
              (0, R.jsx)(l.Z, {
                orientation: 'left',
                children: '\u505C\u8F66\u7CFB\u7EDF\u914D\u7F6E\u7BA1\u7406',
              }),
              (0, R.jsxs)(
                a.Z,
                (0, q.Z)(
                  (0, q.Z)({}, j),
                  {},
                  {
                    form: H,
                    name: 'register',
                    onFinish: V,
                    scrollToFirstError: !0,
                    children: [
                      (0, R.jsx)(a.Z.Item, {
                        name: 'ratio',
                        label: (0, R.jsxs)('span', {
                          children: [
                            '\u975E\u6587\u5B57\u63D0\u793A',
                            (0, R.jsx)(m.Z, {
                              title: 'What do you want others to call you?',
                              children: (0, R.jsx)(c.Z, {}),
                            }),
                          ],
                        }),
                        rules: [
                          {
                            required: !0,
                            message: '\u8BF7\u8F93\u5165\u975E\u6587\u5B57\u63D0\u793A',
                            whitespace: !0,
                          },
                        ],
                        children: (0, R.jsx)(v.Z, {
                          placeholder: '\u8BF7\u8F93\u5165\u975E\u6587\u5B57\u63D0\u793A',
                        }),
                      }),
                      (0, R.jsx)(a.Z.Item, {
                        name: 'content',
                        label: (0, R.jsx)('span', { children: '\u505C\u8F66\u573A\u4ECB\u7ECD' }),
                        rules: [
                          {
                            required: !0,
                            message: '\u8BF7\u8F93\u5165\u505C\u8F66\u573A\u4ECB\u7ECD',
                            whitespace: !0,
                          },
                        ],
                        children: (0, R.jsx)('div', {
                          style: { height: 250 },
                          children: (0, R.jsx)('div', { ref: F }),
                        }),
                      }),
                      (0, R.jsx)(a.Z.Item, (0, q.Z)({}, K)),
                      (0, R.jsxs)(
                        a.Z.Item,
                        (0, q.Z)(
                          (0, q.Z)({}, K),
                          {},
                          {
                            style: { marginTop: 30 },
                            children: [
                              (0, R.jsx)(y.Z, {
                                type: 'primary',
                                htmlType: 'submit',
                                children: '\u4FDD \u5B58',
                              }),
                              (0, R.jsx)(y.Z, {
                                style: { marginLeft: 10 },
                                onClick: Q,
                                children: '\u91CD \u7F6E',
                              }),
                            ],
                          },
                        ),
                      ),
                    ],
                  },
                ),
              ),
            ],
          });
        };
    },
    27049: function (pt, ct, tt) {
      'use strict';
      var rt = tt(16184),
        U = tt(46823),
        w = tt(67294),
        y = tt(94184),
        q = tt.n(y),
        k = tt(65632),
        v = function (m, d) {
          var l = {};
          for (var e in m)
            Object.prototype.hasOwnProperty.call(m, e) && d.indexOf(e) < 0 && (l[e] = m[e]);
          if (m != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var t = 0, e = Object.getOwnPropertySymbols(m); t < e.length; t++)
              d.indexOf(e[t]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(m, e[t]) &&
                (l[e[t]] = m[e[t]]);
          return l;
        },
        b = function (d) {
          return w.createElement(k.C, null, function (l) {
            var e,
              t = l.getPrefixCls,
              s = l.direction,
              a = d.prefixCls,
              u = d.type,
              n = u === void 0 ? 'horizontal' : u,
              i = d.orientation,
              c = i === void 0 ? 'center' : i,
              r = d.className,
              h = d.children,
              N = d.dashed,
              A = d.plain,
              T = v(d, [
                'prefixCls',
                'type',
                'orientation',
                'className',
                'children',
                'dashed',
                'plain',
              ]),
              P = t('divider', a),
              E = c.length > 0 ? '-'.concat(c) : c,
              p = !!h,
              O = q()(
                P,
                ''.concat(P, '-').concat(n),
                ((e = {}),
                (0, U.Z)(e, ''.concat(P, '-with-text'), p),
                (0, U.Z)(e, ''.concat(P, '-with-text').concat(E), p),
                (0, U.Z)(e, ''.concat(P, '-dashed'), !!N),
                (0, U.Z)(e, ''.concat(P, '-plain'), !!A),
                (0, U.Z)(e, ''.concat(P, '-rtl'), s === 'rtl'),
                e),
                r,
              );
            return w.createElement(
              'div',
              (0, rt.Z)({ className: O }, T, { role: 'separator' }),
              h && w.createElement('span', { className: ''.concat(P, '-inner-text') }, h),
            );
          });
        };
      ct.Z = b;
    },
    48736: function (pt, ct, tt) {
      'use strict';
      var rt = tt(65056),
        U = tt.n(rt),
        w = tt(68179),
        y = tt.n(w);
    },
    79742: function (pt, ct) {
      'use strict';
      (ct.byteLength = v), (ct.toByteArray = m), (ct.fromByteArray = e);
      for (
        var tt = [],
          rt = [],
          U = typeof Uint8Array != 'undefined' ? Uint8Array : Array,
          w = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          y = 0,
          q = w.length;
        y < q;
        ++y
      )
        (tt[y] = w[y]), (rt[w.charCodeAt(y)] = y);
      (rt['-'.charCodeAt(0)] = 62), (rt['_'.charCodeAt(0)] = 63);
      function k(t) {
        var s = t.length;
        if (s % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
        var a = t.indexOf('=');
        a === -1 && (a = s);
        var u = a === s ? 0 : 4 - (a % 4);
        return [a, u];
      }
      function v(t) {
        var s = k(t),
          a = s[0],
          u = s[1];
        return ((a + u) * 3) / 4 - u;
      }
      function b(t, s, a) {
        return ((s + a) * 3) / 4 - a;
      }
      function m(t) {
        var s,
          a = k(t),
          u = a[0],
          n = a[1],
          i = new U(b(t, u, n)),
          c = 0,
          r = n > 0 ? u - 4 : u,
          h;
        for (h = 0; h < r; h += 4)
          (s =
            (rt[t.charCodeAt(h)] << 18) |
            (rt[t.charCodeAt(h + 1)] << 12) |
            (rt[t.charCodeAt(h + 2)] << 6) |
            rt[t.charCodeAt(h + 3)]),
            (i[c++] = (s >> 16) & 255),
            (i[c++] = (s >> 8) & 255),
            (i[c++] = s & 255);
        return (
          n === 2 &&
            ((s = (rt[t.charCodeAt(h)] << 2) | (rt[t.charCodeAt(h + 1)] >> 4)), (i[c++] = s & 255)),
          n === 1 &&
            ((s =
              (rt[t.charCodeAt(h)] << 10) |
              (rt[t.charCodeAt(h + 1)] << 4) |
              (rt[t.charCodeAt(h + 2)] >> 2)),
            (i[c++] = (s >> 8) & 255),
            (i[c++] = s & 255)),
          i
        );
      }
      function d(t) {
        return tt[(t >> 18) & 63] + tt[(t >> 12) & 63] + tt[(t >> 6) & 63] + tt[t & 63];
      }
      function l(t, s, a) {
        for (var u, n = [], i = s; i < a; i += 3)
          (u = ((t[i] << 16) & 16711680) + ((t[i + 1] << 8) & 65280) + (t[i + 2] & 255)),
            n.push(d(u));
        return n.join('');
      }
      function e(t) {
        for (var s, a = t.length, u = a % 3, n = [], i = 16383, c = 0, r = a - u; c < r; c += i)
          n.push(l(t, c, c + i > r ? r : c + i));
        return (
          u === 1
            ? ((s = t[a - 1]), n.push(tt[s >> 2] + tt[(s << 4) & 63] + '=='))
            : u === 2 &&
              ((s = (t[a - 2] << 8) + t[a - 1]),
              n.push(tt[s >> 10] + tt[(s >> 4) & 63] + tt[(s << 2) & 63] + '=')),
          n.join('')
        );
      }
    },
    48764: function (pt, ct, tt) {
      'use strict';
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */ var rt = tt(79742),
        U = tt(80645),
        w = tt(5826);
      (ct.Buffer = v),
        (ct.SlowBuffer = n),
        (ct.INSPECT_MAX_BYTES = 50),
        (v.TYPED_ARRAY_SUPPORT =
          tt.g.TYPED_ARRAY_SUPPORT !== void 0 ? tt.g.TYPED_ARRAY_SUPPORT : y()),
        (ct.kMaxLength = q());
      function y() {
        try {
          var g = new Uint8Array(1);
          return (
            (g.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              },
            }),
            g.foo() === 42 && typeof g.subarray == 'function' && g.subarray(1, 1).byteLength === 0
          );
        } catch (o) {
          return !1;
        }
      }
      function q() {
        return v.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function k(g, o) {
        if (q() < o) throw new RangeError('Invalid typed array length');
        return (
          v.TYPED_ARRAY_SUPPORT
            ? ((g = new Uint8Array(o)), (g.__proto__ = v.prototype))
            : (g === null && (g = new v(o)), (g.length = o)),
          g
        );
      }
      function v(g, o, f) {
        if (!v.TYPED_ARRAY_SUPPORT && !(this instanceof v)) return new v(g, o, f);
        if (typeof g == 'number') {
          if (typeof o == 'string')
            throw new Error('If encoding is specified then the first argument must be a string');
          return l(this, g);
        }
        return b(this, g, o, f);
      }
      (v.poolSize = 8192),
        (v._augment = function (g) {
          return (g.__proto__ = v.prototype), g;
        });
      function b(g, o, f, S) {
        if (typeof o == 'number') throw new TypeError('"value" argument must not be a number');
        return typeof ArrayBuffer != 'undefined' && o instanceof ArrayBuffer
          ? s(g, o, f, S)
          : typeof o == 'string'
          ? e(g, o, f)
          : a(g, o);
      }
      (v.from = function (g, o, f) {
        return b(null, g, o, f);
      }),
        v.TYPED_ARRAY_SUPPORT &&
          ((v.prototype.__proto__ = Uint8Array.prototype),
          (v.__proto__ = Uint8Array),
          typeof Symbol != 'undefined' &&
            Symbol.species &&
            v[Symbol.species] === v &&
            Object.defineProperty(v, Symbol.species, { value: null, configurable: !0 }));
      function m(g) {
        if (typeof g != 'number') throw new TypeError('"size" argument must be a number');
        if (g < 0) throw new RangeError('"size" argument must not be negative');
      }
      function d(g, o, f, S) {
        return (
          m(o),
          o <= 0
            ? k(g, o)
            : f !== void 0
            ? typeof S == 'string'
              ? k(g, o).fill(f, S)
              : k(g, o).fill(f)
            : k(g, o)
        );
      }
      v.alloc = function (g, o, f) {
        return d(null, g, o, f);
      };
      function l(g, o) {
        if ((m(o), (g = k(g, o < 0 ? 0 : u(o) | 0)), !v.TYPED_ARRAY_SUPPORT))
          for (var f = 0; f < o; ++f) g[f] = 0;
        return g;
      }
      (v.allocUnsafe = function (g) {
        return l(null, g);
      }),
        (v.allocUnsafeSlow = function (g) {
          return l(null, g);
        });
      function e(g, o, f) {
        if (((typeof f != 'string' || f === '') && (f = 'utf8'), !v.isEncoding(f)))
          throw new TypeError('"encoding" must be a valid string encoding');
        var S = i(o, f) | 0;
        g = k(g, S);
        var B = g.write(o, f);
        return B !== S && (g = g.slice(0, B)), g;
      }
      function t(g, o) {
        var f = o.length < 0 ? 0 : u(o.length) | 0;
        g = k(g, f);
        for (var S = 0; S < f; S += 1) g[S] = o[S] & 255;
        return g;
      }
      function s(g, o, f, S) {
        if ((o.byteLength, f < 0 || o.byteLength < f))
          throw new RangeError("'offset' is out of bounds");
        if (o.byteLength < f + (S || 0)) throw new RangeError("'length' is out of bounds");
        return (
          f === void 0 && S === void 0
            ? (o = new Uint8Array(o))
            : S === void 0
            ? (o = new Uint8Array(o, f))
            : (o = new Uint8Array(o, f, S)),
          v.TYPED_ARRAY_SUPPORT ? ((g = o), (g.__proto__ = v.prototype)) : (g = t(g, o)),
          g
        );
      }
      function a(g, o) {
        if (v.isBuffer(o)) {
          var f = u(o.length) | 0;
          return (g = k(g, f)), g.length === 0 || o.copy(g, 0, 0, f), g;
        }
        if (o) {
          if (
            (typeof ArrayBuffer != 'undefined' && o.buffer instanceof ArrayBuffer) ||
            'length' in o
          )
            return typeof o.length != 'number' || ht(o.length) ? k(g, 0) : t(g, o);
          if (o.type === 'Buffer' && w(o.data)) return t(g, o.data);
        }
        throw new TypeError(
          'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
        );
      }
      function u(g) {
        if (g >= q())
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' + q().toString(16) + ' bytes',
          );
        return g | 0;
      }
      function n(g) {
        return +g != g && (g = 0), v.alloc(+g);
      }
      (v.isBuffer = function (o) {
        return !!(o != null && o._isBuffer);
      }),
        (v.compare = function (o, f) {
          if (!v.isBuffer(o) || !v.isBuffer(f)) throw new TypeError('Arguments must be Buffers');
          if (o === f) return 0;
          for (var S = o.length, B = f.length, Z = 0, $ = Math.min(S, B); Z < $; ++Z)
            if (o[Z] !== f[Z]) {
              (S = o[Z]), (B = f[Z]);
              break;
            }
          return S < B ? -1 : B < S ? 1 : 0;
        }),
        (v.isEncoding = function (o) {
          switch (String(o).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (v.concat = function (o, f) {
          if (!w(o)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (o.length === 0) return v.alloc(0);
          var S;
          if (f === void 0) for (f = 0, S = 0; S < o.length; ++S) f += o[S].length;
          var B = v.allocUnsafe(f),
            Z = 0;
          for (S = 0; S < o.length; ++S) {
            var $ = o[S];
            if (!v.isBuffer($)) throw new TypeError('"list" argument must be an Array of Buffers');
            $.copy(B, Z), (Z += $.length);
          }
          return B;
        });
      function i(g, o) {
        if (v.isBuffer(g)) return g.length;
        if (
          typeof ArrayBuffer != 'undefined' &&
          typeof ArrayBuffer.isView == 'function' &&
          (ArrayBuffer.isView(g) || g instanceof ArrayBuffer)
        )
          return g.byteLength;
        typeof g != 'string' && (g = '' + g);
        var f = g.length;
        if (f === 0) return 0;
        for (var S = !1; ; )
          switch (o) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return f;
            case 'utf8':
            case 'utf-8':
            case void 0:
              return et(g).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return f * 2;
            case 'hex':
              return f >>> 1;
            case 'base64':
              return ut(g).length;
            default:
              if (S) return et(g).length;
              (o = ('' + o).toLowerCase()), (S = !0);
          }
      }
      v.byteLength = i;
      function c(g, o, f) {
        var S = !1;
        if (
          ((o === void 0 || o < 0) && (o = 0),
          o > this.length ||
            ((f === void 0 || f > this.length) && (f = this.length), f <= 0) ||
            ((f >>>= 0), (o >>>= 0), f <= o))
        )
          return '';
        for (g || (g = 'utf8'); ; )
          switch (g) {
            case 'hex':
              return C(this, o, f);
            case 'utf8':
            case 'utf-8':
              return R(this, o, f);
            case 'ascii':
              return Y(this, o, f);
            case 'latin1':
            case 'binary':
              return G(this, o, f);
            case 'base64':
              return _(this, o, f);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return M(this, o, f);
            default:
              if (S) throw new TypeError('Unknown encoding: ' + g);
              (g = (g + '').toLowerCase()), (S = !0);
          }
      }
      v.prototype._isBuffer = !0;
      function r(g, o, f) {
        var S = g[o];
        (g[o] = g[f]), (g[f] = S);
      }
      (v.prototype.swap16 = function () {
        var o = this.length;
        if (o % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
        for (var f = 0; f < o; f += 2) r(this, f, f + 1);
        return this;
      }),
        (v.prototype.swap32 = function () {
          var o = this.length;
          if (o % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
          for (var f = 0; f < o; f += 4) r(this, f, f + 3), r(this, f + 1, f + 2);
          return this;
        }),
        (v.prototype.swap64 = function () {
          var o = this.length;
          if (o % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
          for (var f = 0; f < o; f += 8)
            r(this, f, f + 7), r(this, f + 1, f + 6), r(this, f + 2, f + 5), r(this, f + 3, f + 4);
          return this;
        }),
        (v.prototype.toString = function () {
          var o = this.length | 0;
          return o === 0 ? '' : arguments.length === 0 ? R(this, 0, o) : c.apply(this, arguments);
        }),
        (v.prototype.equals = function (o) {
          if (!v.isBuffer(o)) throw new TypeError('Argument must be a Buffer');
          return this === o ? !0 : v.compare(this, o) === 0;
        }),
        (v.prototype.inspect = function () {
          var o = '',
            f = ct.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((o = this.toString('hex', 0, f).match(/.{2}/g).join(' ')),
              this.length > f && (o += ' ... ')),
            '<Buffer ' + o + '>'
          );
        }),
        (v.prototype.compare = function (o, f, S, B, Z) {
          if (!v.isBuffer(o)) throw new TypeError('Argument must be a Buffer');
          if (
            (f === void 0 && (f = 0),
            S === void 0 && (S = o ? o.length : 0),
            B === void 0 && (B = 0),
            Z === void 0 && (Z = this.length),
            f < 0 || S > o.length || B < 0 || Z > this.length)
          )
            throw new RangeError('out of range index');
          if (B >= Z && f >= S) return 0;
          if (B >= Z) return -1;
          if (f >= S) return 1;
          if (((f >>>= 0), (S >>>= 0), (B >>>= 0), (Z >>>= 0), this === o)) return 0;
          for (
            var $ = Z - B,
              J = S - f,
              ot = Math.min($, J),
              at = this.slice(B, Z),
              it = o.slice(f, S),
              st = 0;
            st < ot;
            ++st
          )
            if (at[st] !== it[st]) {
              ($ = at[st]), (J = it[st]);
              break;
            }
          return $ < J ? -1 : J < $ ? 1 : 0;
        });
      function h(g, o, f, S, B) {
        if (g.length === 0) return -1;
        if (
          (typeof f == 'string'
            ? ((S = f), (f = 0))
            : f > 2147483647
            ? (f = 2147483647)
            : f < -2147483648 && (f = -2147483648),
          (f = +f),
          isNaN(f) && (f = B ? 0 : g.length - 1),
          f < 0 && (f = g.length + f),
          f >= g.length)
        ) {
          if (B) return -1;
          f = g.length - 1;
        } else if (f < 0)
          if (B) f = 0;
          else return -1;
        if ((typeof o == 'string' && (o = v.from(o, S)), v.isBuffer(o)))
          return o.length === 0 ? -1 : N(g, o, f, S, B);
        if (typeof o == 'number')
          return (
            (o = o & 255),
            v.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == 'function'
              ? B
                ? Uint8Array.prototype.indexOf.call(g, o, f)
                : Uint8Array.prototype.lastIndexOf.call(g, o, f)
              : N(g, [o], f, S, B)
          );
        throw new TypeError('val must be string, number or Buffer');
      }
      function N(g, o, f, S, B) {
        var Z = 1,
          $ = g.length,
          J = o.length;
        if (
          S !== void 0 &&
          ((S = String(S).toLowerCase()),
          S === 'ucs2' || S === 'ucs-2' || S === 'utf16le' || S === 'utf-16le')
        ) {
          if (g.length < 2 || o.length < 2) return -1;
          (Z = 2), ($ /= 2), (J /= 2), (f /= 2);
        }
        function ot(vt, yt) {
          return Z === 1 ? vt[yt] : vt.readUInt16BE(yt * Z);
        }
        var at;
        if (B) {
          var it = -1;
          for (at = f; at < $; at++)
            if (ot(g, at) === ot(o, it === -1 ? 0 : at - it)) {
              if ((it === -1 && (it = at), at - it + 1 === J)) return it * Z;
            } else it !== -1 && (at -= at - it), (it = -1);
        } else
          for (f + J > $ && (f = $ - J), at = f; at >= 0; at--) {
            for (var st = !0, ft = 0; ft < J; ft++)
              if (ot(g, at + ft) !== ot(o, ft)) {
                st = !1;
                break;
              }
            if (st) return at;
          }
        return -1;
      }
      (v.prototype.includes = function (o, f, S) {
        return this.indexOf(o, f, S) !== -1;
      }),
        (v.prototype.indexOf = function (o, f, S) {
          return h(this, o, f, S, !0);
        }),
        (v.prototype.lastIndexOf = function (o, f, S) {
          return h(this, o, f, S, !1);
        });
      function A(g, o, f, S) {
        f = Number(f) || 0;
        var B = g.length - f;
        S ? ((S = Number(S)), S > B && (S = B)) : (S = B);
        var Z = o.length;
        if (Z % 2 != 0) throw new TypeError('Invalid hex string');
        S > Z / 2 && (S = Z / 2);
        for (var $ = 0; $ < S; ++$) {
          var J = parseInt(o.substr($ * 2, 2), 16);
          if (isNaN(J)) return $;
          g[f + $] = J;
        }
        return $;
      }
      function T(g, o, f, S) {
        return dt(et(o, g.length - f), g, f, S);
      }
      function P(g, o, f, S) {
        return dt(nt(o), g, f, S);
      }
      function E(g, o, f, S) {
        return P(g, o, f, S);
      }
      function p(g, o, f, S) {
        return dt(ut(o), g, f, S);
      }
      function O(g, o, f, S) {
        return dt(lt(o, g.length - f), g, f, S);
      }
      (v.prototype.write = function (o, f, S, B) {
        if (f === void 0) (B = 'utf8'), (S = this.length), (f = 0);
        else if (S === void 0 && typeof f == 'string') (B = f), (S = this.length), (f = 0);
        else if (isFinite(f))
          (f = f | 0),
            isFinite(S) ? ((S = S | 0), B === void 0 && (B = 'utf8')) : ((B = S), (S = void 0));
        else
          throw new Error(
            'Buffer.write(string, encoding, offset[, length]) is no longer supported',
          );
        var Z = this.length - f;
        if (
          ((S === void 0 || S > Z) && (S = Z),
          (o.length > 0 && (S < 0 || f < 0)) || f > this.length)
        )
          throw new RangeError('Attempt to write outside buffer bounds');
        B || (B = 'utf8');
        for (var $ = !1; ; )
          switch (B) {
            case 'hex':
              return A(this, o, f, S);
            case 'utf8':
            case 'utf-8':
              return T(this, o, f, S);
            case 'ascii':
              return P(this, o, f, S);
            case 'latin1':
            case 'binary':
              return E(this, o, f, S);
            case 'base64':
              return p(this, o, f, S);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return O(this, o, f, S);
            default:
              if ($) throw new TypeError('Unknown encoding: ' + B);
              (B = ('' + B).toLowerCase()), ($ = !0);
          }
      }),
        (v.prototype.toJSON = function () {
          return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
        });
      function _(g, o, f) {
        return o === 0 && f === g.length ? rt.fromByteArray(g) : rt.fromByteArray(g.slice(o, f));
      }
      function R(g, o, f) {
        f = Math.min(g.length, f);
        for (var S = [], B = o; B < f; ) {
          var Z = g[B],
            $ = null,
            J = Z > 239 ? 4 : Z > 223 ? 3 : Z > 191 ? 2 : 1;
          if (B + J <= f) {
            var ot, at, it, st;
            switch (J) {
              case 1:
                Z < 128 && ($ = Z);
                break;
              case 2:
                (ot = g[B + 1]),
                  (ot & 192) == 128 && ((st = ((Z & 31) << 6) | (ot & 63)), st > 127 && ($ = st));
                break;
              case 3:
                (ot = g[B + 1]),
                  (at = g[B + 2]),
                  (ot & 192) == 128 &&
                    (at & 192) == 128 &&
                    ((st = ((Z & 15) << 12) | ((ot & 63) << 6) | (at & 63)),
                    st > 2047 && (st < 55296 || st > 57343) && ($ = st));
                break;
              case 4:
                (ot = g[B + 1]),
                  (at = g[B + 2]),
                  (it = g[B + 3]),
                  (ot & 192) == 128 &&
                    (at & 192) == 128 &&
                    (it & 192) == 128 &&
                    ((st = ((Z & 15) << 18) | ((ot & 63) << 12) | ((at & 63) << 6) | (it & 63)),
                    st > 65535 && st < 1114112 && ($ = st));
            }
          }
          $ === null
            ? (($ = 65533), (J = 1))
            : $ > 65535 &&
              (($ -= 65536), S.push((($ >>> 10) & 1023) | 55296), ($ = 56320 | ($ & 1023))),
            S.push($),
            (B += J);
        }
        return K(S);
      }
      var j = 4096;
      function K(g) {
        var o = g.length;
        if (o <= j) return String.fromCharCode.apply(String, g);
        for (var f = '', S = 0; S < o; )
          f += String.fromCharCode.apply(String, g.slice(S, (S += j)));
        return f;
      }
      function Y(g, o, f) {
        var S = '';
        f = Math.min(g.length, f);
        for (var B = o; B < f; ++B) S += String.fromCharCode(g[B] & 127);
        return S;
      }
      function G(g, o, f) {
        var S = '';
        f = Math.min(g.length, f);
        for (var B = o; B < f; ++B) S += String.fromCharCode(g[B]);
        return S;
      }
      function C(g, o, f) {
        var S = g.length;
        (!o || o < 0) && (o = 0), (!f || f < 0 || f > S) && (f = S);
        for (var B = '', Z = o; Z < f; ++Z) B += X(g[Z]);
        return B;
      }
      function M(g, o, f) {
        for (var S = g.slice(o, f), B = '', Z = 0; Z < S.length; Z += 2)
          B += String.fromCharCode(S[Z] + S[Z + 1] * 256);
        return B;
      }
      v.prototype.slice = function (o, f) {
        var S = this.length;
        (o = ~~o),
          (f = f === void 0 ? S : ~~f),
          o < 0 ? ((o += S), o < 0 && (o = 0)) : o > S && (o = S),
          f < 0 ? ((f += S), f < 0 && (f = 0)) : f > S && (f = S),
          f < o && (f = o);
        var B;
        if (v.TYPED_ARRAY_SUPPORT) (B = this.subarray(o, f)), (B.__proto__ = v.prototype);
        else {
          var Z = f - o;
          B = new v(Z, void 0);
          for (var $ = 0; $ < Z; ++$) B[$] = this[$ + o];
        }
        return B;
      };
      function x(g, o, f) {
        if (g % 1 != 0 || g < 0) throw new RangeError('offset is not uint');
        if (g + o > f) throw new RangeError('Trying to access beyond buffer length');
      }
      (v.prototype.readUIntLE = function (o, f, S) {
        (o = o | 0), (f = f | 0), S || x(o, f, this.length);
        for (var B = this[o], Z = 1, $ = 0; ++$ < f && (Z *= 256); ) B += this[o + $] * Z;
        return B;
      }),
        (v.prototype.readUIntBE = function (o, f, S) {
          (o = o | 0), (f = f | 0), S || x(o, f, this.length);
          for (var B = this[o + --f], Z = 1; f > 0 && (Z *= 256); ) B += this[o + --f] * Z;
          return B;
        }),
        (v.prototype.readUInt8 = function (o, f) {
          return f || x(o, 1, this.length), this[o];
        }),
        (v.prototype.readUInt16LE = function (o, f) {
          return f || x(o, 2, this.length), this[o] | (this[o + 1] << 8);
        }),
        (v.prototype.readUInt16BE = function (o, f) {
          return f || x(o, 2, this.length), (this[o] << 8) | this[o + 1];
        }),
        (v.prototype.readUInt32LE = function (o, f) {
          return (
            f || x(o, 4, this.length),
            (this[o] | (this[o + 1] << 8) | (this[o + 2] << 16)) + this[o + 3] * 16777216
          );
        }),
        (v.prototype.readUInt32BE = function (o, f) {
          return (
            f || x(o, 4, this.length),
            this[o] * 16777216 + ((this[o + 1] << 16) | (this[o + 2] << 8) | this[o + 3])
          );
        }),
        (v.prototype.readIntLE = function (o, f, S) {
          (o = o | 0), (f = f | 0), S || x(o, f, this.length);
          for (var B = this[o], Z = 1, $ = 0; ++$ < f && (Z *= 256); ) B += this[o + $] * Z;
          return (Z *= 128), B >= Z && (B -= Math.pow(2, 8 * f)), B;
        }),
        (v.prototype.readIntBE = function (o, f, S) {
          (o = o | 0), (f = f | 0), S || x(o, f, this.length);
          for (var B = f, Z = 1, $ = this[o + --B]; B > 0 && (Z *= 256); ) $ += this[o + --B] * Z;
          return (Z *= 128), $ >= Z && ($ -= Math.pow(2, 8 * f)), $;
        }),
        (v.prototype.readInt8 = function (o, f) {
          return f || x(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
        }),
        (v.prototype.readInt16LE = function (o, f) {
          f || x(o, 2, this.length);
          var S = this[o] | (this[o + 1] << 8);
          return S & 32768 ? S | 4294901760 : S;
        }),
        (v.prototype.readInt16BE = function (o, f) {
          f || x(o, 2, this.length);
          var S = this[o + 1] | (this[o] << 8);
          return S & 32768 ? S | 4294901760 : S;
        }),
        (v.prototype.readInt32LE = function (o, f) {
          return (
            f || x(o, 4, this.length),
            this[o] | (this[o + 1] << 8) | (this[o + 2] << 16) | (this[o + 3] << 24)
          );
        }),
        (v.prototype.readInt32BE = function (o, f) {
          return (
            f || x(o, 4, this.length),
            (this[o] << 24) | (this[o + 1] << 16) | (this[o + 2] << 8) | this[o + 3]
          );
        }),
        (v.prototype.readFloatLE = function (o, f) {
          return f || x(o, 4, this.length), U.read(this, o, !0, 23, 4);
        }),
        (v.prototype.readFloatBE = function (o, f) {
          return f || x(o, 4, this.length), U.read(this, o, !1, 23, 4);
        }),
        (v.prototype.readDoubleLE = function (o, f) {
          return f || x(o, 8, this.length), U.read(this, o, !0, 52, 8);
        }),
        (v.prototype.readDoubleBE = function (o, f) {
          return f || x(o, 8, this.length), U.read(this, o, !1, 52, 8);
        });
      function I(g, o, f, S, B, Z) {
        if (!v.isBuffer(g)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (o > B || o < Z) throw new RangeError('"value" argument is out of bounds');
        if (f + S > g.length) throw new RangeError('Index out of range');
      }
      (v.prototype.writeUIntLE = function (o, f, S, B) {
        if (((o = +o), (f = f | 0), (S = S | 0), !B)) {
          var Z = Math.pow(2, 8 * S) - 1;
          I(this, o, f, S, Z, 0);
        }
        var $ = 1,
          J = 0;
        for (this[f] = o & 255; ++J < S && ($ *= 256); ) this[f + J] = (o / $) & 255;
        return f + S;
      }),
        (v.prototype.writeUIntBE = function (o, f, S, B) {
          if (((o = +o), (f = f | 0), (S = S | 0), !B)) {
            var Z = Math.pow(2, 8 * S) - 1;
            I(this, o, f, S, Z, 0);
          }
          var $ = S - 1,
            J = 1;
          for (this[f + $] = o & 255; --$ >= 0 && (J *= 256); ) this[f + $] = (o / J) & 255;
          return f + S;
        }),
        (v.prototype.writeUInt8 = function (o, f, S) {
          return (
            (o = +o),
            (f = f | 0),
            S || I(this, o, f, 1, 255, 0),
            v.TYPED_ARRAY_SUPPORT || (o = Math.floor(o)),
            (this[f] = o & 255),
            f + 1
          );
        });
      function D(g, o, f, S) {
        o < 0 && (o = 65535 + o + 1);
        for (var B = 0, Z = Math.min(g.length - f, 2); B < Z; ++B)
          g[f + B] = (o & (255 << (8 * (S ? B : 1 - B)))) >>> ((S ? B : 1 - B) * 8);
      }
      (v.prototype.writeUInt16LE = function (o, f, S) {
        return (
          (o = +o),
          (f = f | 0),
          S || I(this, o, f, 2, 65535, 0),
          v.TYPED_ARRAY_SUPPORT
            ? ((this[f] = o & 255), (this[f + 1] = o >>> 8))
            : D(this, o, f, !0),
          f + 2
        );
      }),
        (v.prototype.writeUInt16BE = function (o, f, S) {
          return (
            (o = +o),
            (f = f | 0),
            S || I(this, o, f, 2, 65535, 0),
            v.TYPED_ARRAY_SUPPORT
              ? ((this[f] = o >>> 8), (this[f + 1] = o & 255))
              : D(this, o, f, !1),
            f + 2
          );
        });
      function H(g, o, f, S) {
        o < 0 && (o = 4294967295 + o + 1);
        for (var B = 0, Z = Math.min(g.length - f, 4); B < Z; ++B)
          g[f + B] = (o >>> ((S ? B : 3 - B) * 8)) & 255;
      }
      (v.prototype.writeUInt32LE = function (o, f, S) {
        return (
          (o = +o),
          (f = f | 0),
          S || I(this, o, f, 4, 4294967295, 0),
          v.TYPED_ARRAY_SUPPORT
            ? ((this[f + 3] = o >>> 24),
              (this[f + 2] = o >>> 16),
              (this[f + 1] = o >>> 8),
              (this[f] = o & 255))
            : H(this, o, f, !0),
          f + 4
        );
      }),
        (v.prototype.writeUInt32BE = function (o, f, S) {
          return (
            (o = +o),
            (f = f | 0),
            S || I(this, o, f, 4, 4294967295, 0),
            v.TYPED_ARRAY_SUPPORT
              ? ((this[f] = o >>> 24),
                (this[f + 1] = o >>> 16),
                (this[f + 2] = o >>> 8),
                (this[f + 3] = o & 255))
              : H(this, o, f, !1),
            f + 4
          );
        }),
        (v.prototype.writeIntLE = function (o, f, S, B) {
          if (((o = +o), (f = f | 0), !B)) {
            var Z = Math.pow(2, 8 * S - 1);
            I(this, o, f, S, Z - 1, -Z);
          }
          var $ = 0,
            J = 1,
            ot = 0;
          for (this[f] = o & 255; ++$ < S && (J *= 256); )
            o < 0 && ot === 0 && this[f + $ - 1] !== 0 && (ot = 1),
              (this[f + $] = (((o / J) >> 0) - ot) & 255);
          return f + S;
        }),
        (v.prototype.writeIntBE = function (o, f, S, B) {
          if (((o = +o), (f = f | 0), !B)) {
            var Z = Math.pow(2, 8 * S - 1);
            I(this, o, f, S, Z - 1, -Z);
          }
          var $ = S - 1,
            J = 1,
            ot = 0;
          for (this[f + $] = o & 255; --$ >= 0 && (J *= 256); )
            o < 0 && ot === 0 && this[f + $ + 1] !== 0 && (ot = 1),
              (this[f + $] = (((o / J) >> 0) - ot) & 255);
          return f + S;
        }),
        (v.prototype.writeInt8 = function (o, f, S) {
          return (
            (o = +o),
            (f = f | 0),
            S || I(this, o, f, 1, 127, -128),
            v.TYPED_ARRAY_SUPPORT || (o = Math.floor(o)),
            o < 0 && (o = 255 + o + 1),
            (this[f] = o & 255),
            f + 1
          );
        }),
        (v.prototype.writeInt16LE = function (o, f, S) {
          return (
            (o = +o),
            (f = f | 0),
            S || I(this, o, f, 2, 32767, -32768),
            v.TYPED_ARRAY_SUPPORT
              ? ((this[f] = o & 255), (this[f + 1] = o >>> 8))
              : D(this, o, f, !0),
            f + 2
          );
        }),
        (v.prototype.writeInt16BE = function (o, f, S) {
          return (
            (o = +o),
            (f = f | 0),
            S || I(this, o, f, 2, 32767, -32768),
            v.TYPED_ARRAY_SUPPORT
              ? ((this[f] = o >>> 8), (this[f + 1] = o & 255))
              : D(this, o, f, !1),
            f + 2
          );
        }),
        (v.prototype.writeInt32LE = function (o, f, S) {
          return (
            (o = +o),
            (f = f | 0),
            S || I(this, o, f, 4, 2147483647, -2147483648),
            v.TYPED_ARRAY_SUPPORT
              ? ((this[f] = o & 255),
                (this[f + 1] = o >>> 8),
                (this[f + 2] = o >>> 16),
                (this[f + 3] = o >>> 24))
              : H(this, o, f, !0),
            f + 4
          );
        }),
        (v.prototype.writeInt32BE = function (o, f, S) {
          return (
            (o = +o),
            (f = f | 0),
            S || I(this, o, f, 4, 2147483647, -2147483648),
            o < 0 && (o = 4294967295 + o + 1),
            v.TYPED_ARRAY_SUPPORT
              ? ((this[f] = o >>> 24),
                (this[f + 1] = o >>> 16),
                (this[f + 2] = o >>> 8),
                (this[f + 3] = o & 255))
              : H(this, o, f, !1),
            f + 4
          );
        });
      function z(g, o, f, S, B, Z) {
        if (f + S > g.length) throw new RangeError('Index out of range');
        if (f < 0) throw new RangeError('Index out of range');
      }
      function L(g, o, f, S, B) {
        return (
          B || z(g, o, f, 4, 34028234663852886e22, -34028234663852886e22),
          U.write(g, o, f, S, 23, 4),
          f + 4
        );
      }
      (v.prototype.writeFloatLE = function (o, f, S) {
        return L(this, o, f, !0, S);
      }),
        (v.prototype.writeFloatBE = function (o, f, S) {
          return L(this, o, f, !1, S);
        });
      function F(g, o, f, S, B) {
        return (
          B || z(g, o, f, 8, 17976931348623157e292, -17976931348623157e292),
          U.write(g, o, f, S, 52, 8),
          f + 8
        );
      }
      (v.prototype.writeDoubleLE = function (o, f, S) {
        return F(this, o, f, !0, S);
      }),
        (v.prototype.writeDoubleBE = function (o, f, S) {
          return F(this, o, f, !1, S);
        }),
        (v.prototype.copy = function (o, f, S, B) {
          if (
            (S || (S = 0),
            !B && B !== 0 && (B = this.length),
            f >= o.length && (f = o.length),
            f || (f = 0),
            B > 0 && B < S && (B = S),
            B === S || o.length === 0 || this.length === 0)
          )
            return 0;
          if (f < 0) throw new RangeError('targetStart out of bounds');
          if (S < 0 || S >= this.length) throw new RangeError('sourceStart out of bounds');
          if (B < 0) throw new RangeError('sourceEnd out of bounds');
          B > this.length && (B = this.length), o.length - f < B - S && (B = o.length - f + S);
          var Z = B - S,
            $;
          if (this === o && S < f && f < B) for ($ = Z - 1; $ >= 0; --$) o[$ + f] = this[$ + S];
          else if (Z < 1e3 || !v.TYPED_ARRAY_SUPPORT)
            for ($ = 0; $ < Z; ++$) o[$ + f] = this[$ + S];
          else Uint8Array.prototype.set.call(o, this.subarray(S, S + Z), f);
          return Z;
        }),
        (v.prototype.fill = function (o, f, S, B) {
          if (typeof o == 'string') {
            if (
              (typeof f == 'string'
                ? ((B = f), (f = 0), (S = this.length))
                : typeof S == 'string' && ((B = S), (S = this.length)),
              o.length === 1)
            ) {
              var Z = o.charCodeAt(0);
              Z < 256 && (o = Z);
            }
            if (B !== void 0 && typeof B != 'string')
              throw new TypeError('encoding must be a string');
            if (typeof B == 'string' && !v.isEncoding(B))
              throw new TypeError('Unknown encoding: ' + B);
          } else typeof o == 'number' && (o = o & 255);
          if (f < 0 || this.length < f || this.length < S)
            throw new RangeError('Out of range index');
          if (S <= f) return this;
          (f = f >>> 0), (S = S === void 0 ? this.length : S >>> 0), o || (o = 0);
          var $;
          if (typeof o == 'number') for ($ = f; $ < S; ++$) this[$] = o;
          else {
            var J = v.isBuffer(o) ? o : et(new v(o, B).toString()),
              ot = J.length;
            for ($ = 0; $ < S - f; ++$) this[$ + f] = J[$ % ot];
          }
          return this;
        });
      var W = /[^+\/0-9A-Za-z-_]/g;
      function V(g) {
        if (((g = Q(g).replace(W, '')), g.length < 2)) return '';
        for (; g.length % 4 != 0; ) g = g + '=';
        return g;
      }
      function Q(g) {
        return g.trim ? g.trim() : g.replace(/^\s+|\s+$/g, '');
      }
      function X(g) {
        return g < 16 ? '0' + g.toString(16) : g.toString(16);
      }
      function et(g, o) {
        o = o || Infinity;
        for (var f, S = g.length, B = null, Z = [], $ = 0; $ < S; ++$) {
          if (((f = g.charCodeAt($)), f > 55295 && f < 57344)) {
            if (!B) {
              if (f > 56319) {
                (o -= 3) > -1 && Z.push(239, 191, 189);
                continue;
              } else if ($ + 1 === S) {
                (o -= 3) > -1 && Z.push(239, 191, 189);
                continue;
              }
              B = f;
              continue;
            }
            if (f < 56320) {
              (o -= 3) > -1 && Z.push(239, 191, 189), (B = f);
              continue;
            }
            f = (((B - 55296) << 10) | (f - 56320)) + 65536;
          } else B && (o -= 3) > -1 && Z.push(239, 191, 189);
          if (((B = null), f < 128)) {
            if ((o -= 1) < 0) break;
            Z.push(f);
          } else if (f < 2048) {
            if ((o -= 2) < 0) break;
            Z.push((f >> 6) | 192, (f & 63) | 128);
          } else if (f < 65536) {
            if ((o -= 3) < 0) break;
            Z.push((f >> 12) | 224, ((f >> 6) & 63) | 128, (f & 63) | 128);
          } else if (f < 1114112) {
            if ((o -= 4) < 0) break;
            Z.push((f >> 18) | 240, ((f >> 12) & 63) | 128, ((f >> 6) & 63) | 128, (f & 63) | 128);
          } else throw new Error('Invalid code point');
        }
        return Z;
      }
      function nt(g) {
        for (var o = [], f = 0; f < g.length; ++f) o.push(g.charCodeAt(f) & 255);
        return o;
      }
      function lt(g, o) {
        for (var f, S, B, Z = [], $ = 0; $ < g.length && !((o -= 2) < 0); ++$)
          (f = g.charCodeAt($)), (S = f >> 8), (B = f % 256), Z.push(B), Z.push(S);
        return Z;
      }
      function ut(g) {
        return rt.toByteArray(V(g));
      }
      function dt(g, o, f, S) {
        for (var B = 0; B < S && !(B + f >= o.length || B >= g.length); ++B) o[B + f] = g[B];
        return B;
      }
      function ht(g) {
        return g !== g;
      }
    },
    80645: function (pt, ct) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (ct.read =
        function (tt, rt, U, w, y) {
          var q,
            k,
            v = y * 8 - w - 1,
            b = (1 << v) - 1,
            m = b >> 1,
            d = -7,
            l = U ? y - 1 : 0,
            e = U ? -1 : 1,
            t = tt[rt + l];
          for (
            l += e, q = t & ((1 << -d) - 1), t >>= -d, d += v;
            d > 0;
            q = q * 256 + tt[rt + l], l += e, d -= 8
          );
          for (
            k = q & ((1 << -d) - 1), q >>= -d, d += w;
            d > 0;
            k = k * 256 + tt[rt + l], l += e, d -= 8
          );
          if (q === 0) q = 1 - m;
          else {
            if (q === b) return k ? NaN : (t ? -1 : 1) * Infinity;
            (k = k + Math.pow(2, w)), (q = q - m);
          }
          return (t ? -1 : 1) * k * Math.pow(2, q - w);
        }),
        (ct.write = function (tt, rt, U, w, y, q) {
          var k,
            v,
            b,
            m = q * 8 - y - 1,
            d = (1 << m) - 1,
            l = d >> 1,
            e = y === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            t = w ? 0 : q - 1,
            s = w ? 1 : -1,
            a = rt < 0 || (rt === 0 && 1 / rt < 0) ? 1 : 0;
          for (
            rt = Math.abs(rt),
              isNaN(rt) || rt === Infinity
                ? ((v = isNaN(rt) ? 1 : 0), (k = d))
                : ((k = Math.floor(Math.log(rt) / Math.LN2)),
                  rt * (b = Math.pow(2, -k)) < 1 && (k--, (b *= 2)),
                  k + l >= 1 ? (rt += e / b) : (rt += e * Math.pow(2, 1 - l)),
                  rt * b >= 2 && (k++, (b /= 2)),
                  k + l >= d
                    ? ((v = 0), (k = d))
                    : k + l >= 1
                    ? ((v = (rt * b - 1) * Math.pow(2, y)), (k = k + l))
                    : ((v = rt * Math.pow(2, l - 1) * Math.pow(2, y)), (k = 0)));
            y >= 8;
            tt[U + t] = v & 255, t += s, v /= 256, y -= 8
          );
          for (k = (k << y) | v, m += y; m > 0; tt[U + t] = k & 255, t += s, k /= 256, m -= 8);
          tt[U + t - s] |= a * 128;
        });
    },
    5826: function (pt) {
      var ct = {}.toString;
      pt.exports =
        Array.isArray ||
        function (tt) {
          return ct.call(tt) == '[object Array]';
        };
    },
    76095: function (pt, ct, tt) {
      var rt = tt(48764).Buffer;
      /*!
       * Quill Editor v1.3.7
       * https://quilljs.com/
       * Copyright (c) 2014, Jason Chen
       * Copyright (c) 2013, salesforce.com
       */ (function (w, y) {
        pt.exports = y();
      })(typeof self != 'undefined' ? self : this, function () {
        return (function (U) {
          var w = {};
          function y(q) {
            if (w[q]) return w[q].exports;
            var k = (w[q] = { i: q, l: !1, exports: {} });
            return U[q].call(k.exports, k, k.exports, y), (k.l = !0), k.exports;
          }
          return (
            (y.m = U),
            (y.c = w),
            (y.d = function (q, k, v) {
              y.o(q, k) ||
                Object.defineProperty(q, k, { configurable: !1, enumerable: !0, get: v });
            }),
            (y.n = function (q) {
              var k =
                q && q.__esModule
                  ? function () {
                      return q.default;
                    }
                  : function () {
                      return q;
                    };
              return y.d(k, 'a', k), k;
            }),
            (y.o = function (q, k) {
              return Object.prototype.hasOwnProperty.call(q, k);
            }),
            (y.p = ''),
            y((y.s = 109))
          );
        })([
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(17),
              k = y(18),
              v = y(19),
              b = y(45),
              m = y(46),
              d = y(47),
              l = y(48),
              e = y(49),
              t = y(12),
              s = y(32),
              a = y(33),
              u = y(31),
              n = y(1),
              i = {
                Scope: n.Scope,
                create: n.create,
                find: n.find,
                query: n.query,
                register: n.register,
                Container: q.default,
                Format: k.default,
                Leaf: v.default,
                Embed: l.default,
                Scroll: b.default,
                Block: d.default,
                Inline: m.default,
                Text: e.default,
                Attributor: {
                  Attribute: t.default,
                  Class: s.default,
                  Style: a.default,
                  Store: u.default,
                },
              };
            w.default = i;
          },
          function (U, w, y) {
            'use strict';
            var q =
              (this && this.__extends) ||
              (function () {
                var u =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (n, i) {
                      n.__proto__ = i;
                    }) ||
                  function (n, i) {
                    for (var c in i) i.hasOwnProperty(c) && (n[c] = i[c]);
                  };
                return function (n, i) {
                  u(n, i);
                  function c() {
                    this.constructor = n;
                  }
                  n.prototype =
                    i === null ? Object.create(i) : ((c.prototype = i.prototype), new c());
                };
              })();
            Object.defineProperty(w, '__esModule', { value: !0 });
            var k = (function (u) {
              q(n, u);
              function n(i) {
                var c = this;
                return (
                  (i = '[Parchment] ' + i),
                  (c = u.call(this, i) || this),
                  (c.message = i),
                  (c.name = c.constructor.name),
                  c
                );
              }
              return n;
            })(Error);
            w.ParchmentError = k;
            var v = {},
              b = {},
              m = {},
              d = {};
            w.DATA_KEY = '__blot';
            var l;
            (function (u) {
              (u[(u.TYPE = 3)] = 'TYPE'),
                (u[(u.LEVEL = 12)] = 'LEVEL'),
                (u[(u.ATTRIBUTE = 13)] = 'ATTRIBUTE'),
                (u[(u.BLOT = 14)] = 'BLOT'),
                (u[(u.INLINE = 7)] = 'INLINE'),
                (u[(u.BLOCK = 11)] = 'BLOCK'),
                (u[(u.BLOCK_BLOT = 10)] = 'BLOCK_BLOT'),
                (u[(u.INLINE_BLOT = 6)] = 'INLINE_BLOT'),
                (u[(u.BLOCK_ATTRIBUTE = 9)] = 'BLOCK_ATTRIBUTE'),
                (u[(u.INLINE_ATTRIBUTE = 5)] = 'INLINE_ATTRIBUTE'),
                (u[(u.ANY = 15)] = 'ANY');
            })((l = w.Scope || (w.Scope = {})));
            function e(u, n) {
              var i = s(u);
              if (i == null) throw new k('Unable to create ' + u + ' blot');
              var c = i,
                r = u instanceof Node || u.nodeType === Node.TEXT_NODE ? u : c.create(n);
              return new c(r, n);
            }
            w.create = e;
            function t(u, n) {
              return (
                n === void 0 && (n = !1),
                u == null
                  ? null
                  : u[w.DATA_KEY] != null
                  ? u[w.DATA_KEY].blot
                  : n
                  ? t(u.parentNode, n)
                  : null
              );
            }
            w.find = t;
            function s(u, n) {
              n === void 0 && (n = l.ANY);
              var i;
              if (typeof u == 'string') i = d[u] || v[u];
              else if (u instanceof Text || u.nodeType === Node.TEXT_NODE) i = d.text;
              else if (typeof u == 'number')
                u & l.LEVEL & l.BLOCK ? (i = d.block) : u & l.LEVEL & l.INLINE && (i = d.inline);
              else if (u instanceof HTMLElement) {
                var c = (u.getAttribute('class') || '').split(/\s+/);
                for (var r in c) if (((i = b[c[r]]), i)) break;
                i = i || m[u.tagName];
              }
              return i == null ? null : n & l.LEVEL & i.scope && n & l.TYPE & i.scope ? i : null;
            }
            w.query = s;
            function a() {
              for (var u = [], n = 0; n < arguments.length; n++) u[n] = arguments[n];
              if (u.length > 1)
                return u.map(function (r) {
                  return a(r);
                });
              var i = u[0];
              if (typeof i.blotName != 'string' && typeof i.attrName != 'string')
                throw new k('Invalid definition');
              if (i.blotName === 'abstract') throw new k('Cannot register abstract class');
              if (((d[i.blotName || i.attrName] = i), typeof i.keyName == 'string'))
                v[i.keyName] = i;
              else if ((i.className != null && (b[i.className] = i), i.tagName != null)) {
                Array.isArray(i.tagName)
                  ? (i.tagName = i.tagName.map(function (r) {
                      return r.toUpperCase();
                    }))
                  : (i.tagName = i.tagName.toUpperCase());
                var c = Array.isArray(i.tagName) ? i.tagName : [i.tagName];
                c.forEach(function (r) {
                  (m[r] == null || i.className == null) && (m[r] = i);
                });
              }
              return i;
            }
            w.register = a;
          },
          function (U, w, y) {
            var q = y(51),
              k = y(11),
              v = y(3),
              b = y(20),
              m = String.fromCharCode(0),
              d = function (l) {
                Array.isArray(l)
                  ? (this.ops = l)
                  : l != null && Array.isArray(l.ops)
                  ? (this.ops = l.ops)
                  : (this.ops = []);
              };
            (d.prototype.insert = function (l, e) {
              var t = {};
              return l.length === 0
                ? this
                : ((t.insert = l),
                  e != null &&
                    typeof e == 'object' &&
                    Object.keys(e).length > 0 &&
                    (t.attributes = e),
                  this.push(t));
            }),
              (d.prototype.delete = function (l) {
                return l <= 0 ? this : this.push({ delete: l });
              }),
              (d.prototype.retain = function (l, e) {
                if (l <= 0) return this;
                var t = { retain: l };
                return (
                  e != null &&
                    typeof e == 'object' &&
                    Object.keys(e).length > 0 &&
                    (t.attributes = e),
                  this.push(t)
                );
              }),
              (d.prototype.push = function (l) {
                var e = this.ops.length,
                  t = this.ops[e - 1];
                if (((l = v(!0, {}, l)), typeof t == 'object')) {
                  if (typeof l.delete == 'number' && typeof t.delete == 'number')
                    return (this.ops[e - 1] = { delete: t.delete + l.delete }), this;
                  if (
                    typeof t.delete == 'number' &&
                    l.insert != null &&
                    ((e -= 1), (t = this.ops[e - 1]), typeof t != 'object')
                  )
                    return this.ops.unshift(l), this;
                  if (k(l.attributes, t.attributes)) {
                    if (typeof l.insert == 'string' && typeof t.insert == 'string')
                      return (
                        (this.ops[e - 1] = { insert: t.insert + l.insert }),
                        typeof l.attributes == 'object' &&
                          (this.ops[e - 1].attributes = l.attributes),
                        this
                      );
                    if (typeof l.retain == 'number' && typeof t.retain == 'number')
                      return (
                        (this.ops[e - 1] = { retain: t.retain + l.retain }),
                        typeof l.attributes == 'object' &&
                          (this.ops[e - 1].attributes = l.attributes),
                        this
                      );
                  }
                }
                return e === this.ops.length ? this.ops.push(l) : this.ops.splice(e, 0, l), this;
              }),
              (d.prototype.chop = function () {
                var l = this.ops[this.ops.length - 1];
                return l && l.retain && !l.attributes && this.ops.pop(), this;
              }),
              (d.prototype.filter = function (l) {
                return this.ops.filter(l);
              }),
              (d.prototype.forEach = function (l) {
                this.ops.forEach(l);
              }),
              (d.prototype.map = function (l) {
                return this.ops.map(l);
              }),
              (d.prototype.partition = function (l) {
                var e = [],
                  t = [];
                return (
                  this.forEach(function (s) {
                    var a = l(s) ? e : t;
                    a.push(s);
                  }),
                  [e, t]
                );
              }),
              (d.prototype.reduce = function (l, e) {
                return this.ops.reduce(l, e);
              }),
              (d.prototype.changeLength = function () {
                return this.reduce(function (l, e) {
                  return e.insert ? l + b.length(e) : e.delete ? l - e.delete : l;
                }, 0);
              }),
              (d.prototype.length = function () {
                return this.reduce(function (l, e) {
                  return l + b.length(e);
                }, 0);
              }),
              (d.prototype.slice = function (l, e) {
                (l = l || 0), typeof e != 'number' && (e = Infinity);
                for (var t = [], s = b.iterator(this.ops), a = 0; a < e && s.hasNext(); ) {
                  var u;
                  a < l ? (u = s.next(l - a)) : ((u = s.next(e - a)), t.push(u)),
                    (a += b.length(u));
                }
                return new d(t);
              }),
              (d.prototype.compose = function (l) {
                var e = b.iterator(this.ops),
                  t = b.iterator(l.ops),
                  s = [],
                  a = t.peek();
                if (a != null && typeof a.retain == 'number' && a.attributes == null) {
                  for (var u = a.retain; e.peekType() === 'insert' && e.peekLength() <= u; )
                    (u -= e.peekLength()), s.push(e.next());
                  a.retain - u > 0 && t.next(a.retain - u);
                }
                for (var n = new d(s); e.hasNext() || t.hasNext(); )
                  if (t.peekType() === 'insert') n.push(t.next());
                  else if (e.peekType() === 'delete') n.push(e.next());
                  else {
                    var i = Math.min(e.peekLength(), t.peekLength()),
                      c = e.next(i),
                      r = t.next(i);
                    if (typeof r.retain == 'number') {
                      var h = {};
                      typeof c.retain == 'number' ? (h.retain = i) : (h.insert = c.insert);
                      var N = b.attributes.compose(
                        c.attributes,
                        r.attributes,
                        typeof c.retain == 'number',
                      );
                      if (
                        (N && (h.attributes = N),
                        n.push(h),
                        !t.hasNext() && k(n.ops[n.ops.length - 1], h))
                      ) {
                        var A = new d(e.rest());
                        return n.concat(A).chop();
                      }
                    } else typeof r.delete == 'number' && typeof c.retain == 'number' && n.push(r);
                  }
                return n.chop();
              }),
              (d.prototype.concat = function (l) {
                var e = new d(this.ops.slice());
                return (
                  l.ops.length > 0 && (e.push(l.ops[0]), (e.ops = e.ops.concat(l.ops.slice(1)))), e
                );
              }),
              (d.prototype.diff = function (l, e) {
                if (this.ops === l.ops) return new d();
                var t = [this, l].map(function (i) {
                    return i
                      .map(function (c) {
                        if (c.insert != null) return typeof c.insert == 'string' ? c.insert : m;
                        var r = i === l ? 'on' : 'with';
                        throw new Error('diff() called ' + r + ' non-document');
                      })
                      .join('');
                  }),
                  s = new d(),
                  a = q(t[0], t[1], e),
                  u = b.iterator(this.ops),
                  n = b.iterator(l.ops);
                return (
                  a.forEach(function (i) {
                    for (var c = i[1].length; c > 0; ) {
                      var r = 0;
                      switch (i[0]) {
                        case q.INSERT:
                          (r = Math.min(n.peekLength(), c)), s.push(n.next(r));
                          break;
                        case q.DELETE:
                          (r = Math.min(c, u.peekLength())), u.next(r), s.delete(r);
                          break;
                        case q.EQUAL:
                          r = Math.min(u.peekLength(), n.peekLength(), c);
                          var h = u.next(r),
                            N = n.next(r);
                          k(h.insert, N.insert)
                            ? s.retain(r, b.attributes.diff(h.attributes, N.attributes))
                            : s.push(N).delete(r);
                          break;
                      }
                      c -= r;
                    }
                  }),
                  s.chop()
                );
              }),
              (d.prototype.eachLine = function (l, e) {
                e =
                  e ||
                  `
`;
                for (var t = b.iterator(this.ops), s = new d(), a = 0; t.hasNext(); ) {
                  if (t.peekType() !== 'insert') return;
                  var u = t.peek(),
                    n = b.length(u) - t.peekLength(),
                    i = typeof u.insert == 'string' ? u.insert.indexOf(e, n) - n : -1;
                  if (i < 0) s.push(t.next());
                  else if (i > 0) s.push(t.next(i));
                  else {
                    if (l(s, t.next(1).attributes || {}, a) === !1) return;
                    (a += 1), (s = new d());
                  }
                }
                s.length() > 0 && l(s, {}, a);
              }),
              (d.prototype.transform = function (l, e) {
                if (((e = !!e), typeof l == 'number')) return this.transformPosition(l, e);
                for (
                  var t = b.iterator(this.ops), s = b.iterator(l.ops), a = new d();
                  t.hasNext() || s.hasNext();

                )
                  if (t.peekType() === 'insert' && (e || s.peekType() !== 'insert'))
                    a.retain(b.length(t.next()));
                  else if (s.peekType() === 'insert') a.push(s.next());
                  else {
                    var u = Math.min(t.peekLength(), s.peekLength()),
                      n = t.next(u),
                      i = s.next(u);
                    if (n.delete) continue;
                    i.delete
                      ? a.push(i)
                      : a.retain(u, b.attributes.transform(n.attributes, i.attributes, e));
                  }
                return a.chop();
              }),
              (d.prototype.transformPosition = function (l, e) {
                e = !!e;
                for (var t = b.iterator(this.ops), s = 0; t.hasNext() && s <= l; ) {
                  var a = t.peekLength(),
                    u = t.peekType();
                  if ((t.next(), u === 'delete')) {
                    l -= Math.min(a, l - s);
                    continue;
                  } else u === 'insert' && (s < l || !e) && (l += a);
                  s += a;
                }
                return l;
              }),
              (U.exports = d);
          },
          function (U, w) {
            'use strict';
            var y = Object.prototype.hasOwnProperty,
              q = Object.prototype.toString,
              k = Object.defineProperty,
              v = Object.getOwnPropertyDescriptor,
              b = function (t) {
                return typeof Array.isArray == 'function'
                  ? Array.isArray(t)
                  : q.call(t) === '[object Array]';
              },
              m = function (t) {
                if (!t || q.call(t) !== '[object Object]') return !1;
                var s = y.call(t, 'constructor'),
                  a =
                    t.constructor &&
                    t.constructor.prototype &&
                    y.call(t.constructor.prototype, 'isPrototypeOf');
                if (t.constructor && !s && !a) return !1;
                var u;
                for (u in t);
                return typeof u == 'undefined' || y.call(t, u);
              },
              d = function (t, s) {
                k && s.name === '__proto__'
                  ? k(t, s.name, {
                      enumerable: !0,
                      configurable: !0,
                      value: s.newValue,
                      writable: !0,
                    })
                  : (t[s.name] = s.newValue);
              },
              l = function (t, s) {
                if (s === '__proto__')
                  if (y.call(t, s)) {
                    if (v) return v(t, s).value;
                  } else return;
                return t[s];
              };
            U.exports = function e() {
              var t,
                s,
                a,
                u,
                n,
                i,
                c = arguments[0],
                r = 1,
                h = arguments.length,
                N = !1;
              for (
                typeof c == 'boolean' && ((N = c), (c = arguments[1] || {}), (r = 2)),
                  (c == null || (typeof c != 'object' && typeof c != 'function')) && (c = {});
                r < h;
                ++r
              )
                if (((t = arguments[r]), t != null))
                  for (s in t)
                    (a = l(c, s)),
                      (u = l(t, s)),
                      c !== u &&
                        (N && u && (m(u) || (n = b(u)))
                          ? (n ? ((n = !1), (i = a && b(a) ? a : [])) : (i = a && m(a) ? a : {}),
                            d(c, { name: s, newValue: e(N, i, u) }))
                          : typeof u != 'undefined' && d(c, { name: s, newValue: u }));
              return c;
            };
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.default = w.BlockEmbed = w.bubbleFormats = void 0);
            var q = (function () {
                function p(O, _) {
                  for (var R = 0; R < _.length; R++) {
                    var j = _[R];
                    (j.enumerable = j.enumerable || !1),
                      (j.configurable = !0),
                      'value' in j && (j.writable = !0),
                      Object.defineProperty(O, j.key, j);
                  }
                }
                return function (O, _, R) {
                  return _ && p(O.prototype, _), R && p(O, R), O;
                };
              })(),
              k = function p(O, _, R) {
                O === null && (O = Function.prototype);
                var j = Object.getOwnPropertyDescriptor(O, _);
                if (j === void 0) {
                  var K = Object.getPrototypeOf(O);
                  return K === null ? void 0 : p(K, _, R);
                } else {
                  if ('value' in j) return j.value;
                  var Y = j.get;
                  return Y === void 0 ? void 0 : Y.call(R);
                }
              },
              v = y(3),
              b = c(v),
              m = y(2),
              d = c(m),
              l = y(0),
              e = c(l),
              t = y(16),
              s = c(t),
              a = y(6),
              u = c(a),
              n = y(7),
              i = c(n);
            function c(p) {
              return p && p.__esModule ? p : { default: p };
            }
            function r(p, O) {
              if (!(p instanceof O)) throw new TypeError('Cannot call a class as a function');
            }
            function h(p, O) {
              if (!p)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return O && (typeof O == 'object' || typeof O == 'function') ? O : p;
            }
            function N(p, O) {
              if (typeof O != 'function' && O !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof O,
                );
              (p.prototype = Object.create(O && O.prototype, {
                constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 },
              })),
                O && (Object.setPrototypeOf ? Object.setPrototypeOf(p, O) : (p.__proto__ = O));
            }
            var A = 1,
              T = (function (p) {
                N(O, p);
                function O() {
                  return (
                    r(this, O),
                    h(this, (O.__proto__ || Object.getPrototypeOf(O)).apply(this, arguments))
                  );
                }
                return (
                  q(O, [
                    {
                      key: 'attach',
                      value: function () {
                        k(
                          O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                          'attach',
                          this,
                        ).call(this),
                          (this.attributes = new e.default.Attributor.Store(this.domNode));
                      },
                    },
                    {
                      key: 'delta',
                      value: function () {
                        return new d.default().insert(
                          this.value(),
                          (0, b.default)(this.formats(), this.attributes.values()),
                        );
                      },
                    },
                    {
                      key: 'format',
                      value: function (R, j) {
                        var K = e.default.query(R, e.default.Scope.BLOCK_ATTRIBUTE);
                        K != null && this.attributes.attribute(K, j);
                      },
                    },
                    {
                      key: 'formatAt',
                      value: function (R, j, K, Y) {
                        this.format(K, Y);
                      },
                    },
                    {
                      key: 'insertAt',
                      value: function (R, j, K) {
                        if (
                          typeof j == 'string' &&
                          j.endsWith(`
`)
                        ) {
                          var Y = e.default.create(P.blotName);
                          this.parent.insertBefore(Y, R === 0 ? this : this.next),
                            Y.insertAt(0, j.slice(0, -1));
                        } else
                          k(
                            O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                            'insertAt',
                            this,
                          ).call(this, R, j, K);
                      },
                    },
                  ]),
                  O
                );
              })(e.default.Embed);
            T.scope = e.default.Scope.BLOCK_BLOT;
            var P = (function (p) {
              N(O, p);
              function O(_) {
                r(this, O);
                var R = h(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, _));
                return (R.cache = {}), R;
              }
              return (
                q(O, [
                  {
                    key: 'delta',
                    value: function () {
                      return (
                        this.cache.delta == null &&
                          (this.cache.delta = this.descendants(e.default.Leaf)
                            .reduce(function (R, j) {
                              return j.length() === 0 ? R : R.insert(j.value(), E(j));
                            }, new d.default())
                            .insert(
                              `
`,
                              E(this),
                            )),
                        this.cache.delta
                      );
                    },
                  },
                  {
                    key: 'deleteAt',
                    value: function (R, j) {
                      k(
                        O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                        'deleteAt',
                        this,
                      ).call(this, R, j),
                        (this.cache = {});
                    },
                  },
                  {
                    key: 'formatAt',
                    value: function (R, j, K, Y) {
                      j <= 0 ||
                        (e.default.query(K, e.default.Scope.BLOCK)
                          ? R + j === this.length() && this.format(K, Y)
                          : k(
                              O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                              'formatAt',
                              this,
                            ).call(this, R, Math.min(j, this.length() - R - 1), K, Y),
                        (this.cache = {}));
                    },
                  },
                  {
                    key: 'insertAt',
                    value: function (R, j, K) {
                      if (K != null)
                        return k(
                          O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                          'insertAt',
                          this,
                        ).call(this, R, j, K);
                      if (j.length !== 0) {
                        var Y = j.split(`
`),
                          G = Y.shift();
                        G.length > 0 &&
                          (R < this.length() - 1 || this.children.tail == null
                            ? k(
                                O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                                'insertAt',
                                this,
                              ).call(this, Math.min(R, this.length() - 1), G)
                            : this.children.tail.insertAt(this.children.tail.length(), G),
                          (this.cache = {}));
                        var C = this;
                        Y.reduce(function (M, x) {
                          return (C = C.split(M, !0)), C.insertAt(0, x), x.length;
                        }, R + G.length);
                      }
                    },
                  },
                  {
                    key: 'insertBefore',
                    value: function (R, j) {
                      var K = this.children.head;
                      k(
                        O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                        'insertBefore',
                        this,
                      ).call(this, R, j),
                        K instanceof s.default && K.remove(),
                        (this.cache = {});
                    },
                  },
                  {
                    key: 'length',
                    value: function () {
                      return (
                        this.cache.length == null &&
                          (this.cache.length =
                            k(
                              O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                              'length',
                              this,
                            ).call(this) + A),
                        this.cache.length
                      );
                    },
                  },
                  {
                    key: 'moveChildren',
                    value: function (R, j) {
                      k(
                        O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                        'moveChildren',
                        this,
                      ).call(this, R, j),
                        (this.cache = {});
                    },
                  },
                  {
                    key: 'optimize',
                    value: function (R) {
                      k(
                        O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                        'optimize',
                        this,
                      ).call(this, R),
                        (this.cache = {});
                    },
                  },
                  {
                    key: 'path',
                    value: function (R) {
                      return k(
                        O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                        'path',
                        this,
                      ).call(this, R, !0);
                    },
                  },
                  {
                    key: 'removeChild',
                    value: function (R) {
                      k(
                        O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                        'removeChild',
                        this,
                      ).call(this, R),
                        (this.cache = {});
                    },
                  },
                  {
                    key: 'split',
                    value: function (R) {
                      var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                      if (j && (R === 0 || R >= this.length() - A)) {
                        var K = this.clone();
                        return R === 0
                          ? (this.parent.insertBefore(K, this), this)
                          : (this.parent.insertBefore(K, this.next), K);
                      } else {
                        var Y = k(
                          O.prototype.__proto__ || Object.getPrototypeOf(O.prototype),
                          'split',
                          this,
                        ).call(this, R, j);
                        return (this.cache = {}), Y;
                      }
                    },
                  },
                ]),
                O
              );
            })(e.default.Block);
            (P.blotName = 'block'),
              (P.tagName = 'P'),
              (P.defaultChild = 'break'),
              (P.allowedChildren = [u.default, e.default.Embed, i.default]);
            function E(p) {
              var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              return p == null ||
                (typeof p.formats == 'function' && (O = (0, b.default)(O, p.formats())),
                p.parent == null ||
                  p.parent.blotName == 'scroll' ||
                  p.parent.statics.scope !== p.statics.scope)
                ? O
                : E(p.parent, O);
            }
            (w.bubbleFormats = E), (w.BlockEmbed = T), (w.default = P);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.default = w.overload = w.expandConfig = void 0);
            var q =
                typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                  ? function (C) {
                      return typeof C;
                    }
                  : function (C) {
                      return C &&
                        typeof Symbol == 'function' &&
                        C.constructor === Symbol &&
                        C !== Symbol.prototype
                        ? 'symbol'
                        : typeof C;
                    },
              k = (function () {
                function C(M, x) {
                  var I = [],
                    D = !0,
                    H = !1,
                    z = void 0;
                  try {
                    for (
                      var L = M[Symbol.iterator](), F;
                      !(D = (F = L.next()).done) && (I.push(F.value), !(x && I.length === x));
                      D = !0
                    );
                  } catch (W) {
                    (H = !0), (z = W);
                  } finally {
                    try {
                      !D && L.return && L.return();
                    } finally {
                      if (H) throw z;
                    }
                  }
                  return I;
                }
                return function (M, x) {
                  if (Array.isArray(M)) return M;
                  if (Symbol.iterator in Object(M)) return C(M, x);
                  throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
              })(),
              v = (function () {
                function C(M, x) {
                  for (var I = 0; I < x.length; I++) {
                    var D = x[I];
                    (D.enumerable = D.enumerable || !1),
                      (D.configurable = !0),
                      'value' in D && (D.writable = !0),
                      Object.defineProperty(M, D.key, D);
                  }
                }
                return function (M, x, I) {
                  return x && C(M.prototype, x), I && C(M, I), M;
                };
              })();
            y(50);
            var b = y(2),
              m = E(b),
              d = y(14),
              l = E(d),
              e = y(8),
              t = E(e),
              s = y(9),
              a = E(s),
              u = y(0),
              n = E(u),
              i = y(15),
              c = E(i),
              r = y(3),
              h = E(r),
              N = y(10),
              A = E(N),
              T = y(34),
              P = E(T);
            function E(C) {
              return C && C.__esModule ? C : { default: C };
            }
            function p(C, M, x) {
              return (
                M in C
                  ? Object.defineProperty(C, M, {
                      value: x,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (C[M] = x),
                C
              );
            }
            function O(C, M) {
              if (!(C instanceof M)) throw new TypeError('Cannot call a class as a function');
            }
            var _ = (0, A.default)('quill'),
              R = (function () {
                v(C, null, [
                  {
                    key: 'debug',
                    value: function (x) {
                      x === !0 && (x = 'log'), A.default.level(x);
                    },
                  },
                  {
                    key: 'find',
                    value: function (x) {
                      return x.__quill || n.default.find(x);
                    },
                  },
                  {
                    key: 'import',
                    value: function (x) {
                      return (
                        this.imports[x] == null &&
                          _.error('Cannot import ' + x + '. Are you sure it was registered?'),
                        this.imports[x]
                      );
                    },
                  },
                  {
                    key: 'register',
                    value: function (x, I) {
                      var D = this,
                        H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                      if (typeof x != 'string') {
                        var z = x.attrName || x.blotName;
                        typeof z == 'string'
                          ? this.register('formats/' + z, x, I)
                          : Object.keys(x).forEach(function (L) {
                              D.register(L, x[L], I);
                            });
                      } else
                        this.imports[x] != null && !H && _.warn('Overwriting ' + x + ' with', I),
                          (this.imports[x] = I),
                          (x.startsWith('blots/') || x.startsWith('formats/')) &&
                          I.blotName !== 'abstract'
                            ? n.default.register(I)
                            : x.startsWith('modules') &&
                              typeof I.register == 'function' &&
                              I.register();
                    },
                  },
                ]);
                function C(M) {
                  var x = this,
                    I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  if (
                    (O(this, C),
                    (this.options = j(M, I)),
                    (this.container = this.options.container),
                    this.container == null)
                  )
                    return _.error('Invalid Quill container', M);
                  this.options.debug && C.debug(this.options.debug);
                  var D = this.container.innerHTML.trim();
                  this.container.classList.add('ql-container'),
                    (this.container.innerHTML = ''),
                    (this.container.__quill = this),
                    (this.root = this.addContainer('ql-editor')),
                    this.root.classList.add('ql-blank'),
                    this.root.setAttribute('data-gramm', !1),
                    (this.scrollingContainer = this.options.scrollingContainer || this.root),
                    (this.emitter = new t.default()),
                    (this.scroll = n.default.create(this.root, {
                      emitter: this.emitter,
                      whitelist: this.options.formats,
                    })),
                    (this.editor = new l.default(this.scroll)),
                    (this.selection = new c.default(this.scroll, this.emitter)),
                    (this.theme = new this.options.theme(this, this.options)),
                    (this.keyboard = this.theme.addModule('keyboard')),
                    (this.clipboard = this.theme.addModule('clipboard')),
                    (this.history = this.theme.addModule('history')),
                    this.theme.init(),
                    this.emitter.on(t.default.events.EDITOR_CHANGE, function (z) {
                      z === t.default.events.TEXT_CHANGE &&
                        x.root.classList.toggle('ql-blank', x.editor.isBlank());
                    }),
                    this.emitter.on(t.default.events.SCROLL_UPDATE, function (z, L) {
                      var F = x.selection.lastRange,
                        W = F && F.length === 0 ? F.index : void 0;
                      K.call(
                        x,
                        function () {
                          return x.editor.update(null, L, W);
                        },
                        z,
                      );
                    });
                  var H = this.clipboard.convert(
                    `<div class='ql-editor' style="white-space: normal;">` +
                      D +
                      '<p><br></p></div>',
                  );
                  this.setContents(H),
                    this.history.clear(),
                    this.options.placeholder &&
                      this.root.setAttribute('data-placeholder', this.options.placeholder),
                    this.options.readOnly && this.disable();
                }
                return (
                  v(C, [
                    {
                      key: 'addContainer',
                      value: function (x) {
                        var I =
                          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                        if (typeof x == 'string') {
                          var D = x;
                          (x = document.createElement('div')), x.classList.add(D);
                        }
                        return this.container.insertBefore(x, I), x;
                      },
                    },
                    {
                      key: 'blur',
                      value: function () {
                        this.selection.setRange(null);
                      },
                    },
                    {
                      key: 'deleteText',
                      value: function (x, I, D) {
                        var H = this,
                          z = Y(x, I, D),
                          L = k(z, 4);
                        return (
                          (x = L[0]),
                          (I = L[1]),
                          (D = L[3]),
                          K.call(
                            this,
                            function () {
                              return H.editor.deleteText(x, I);
                            },
                            D,
                            x,
                            -1 * I,
                          )
                        );
                      },
                    },
                    {
                      key: 'disable',
                      value: function () {
                        this.enable(!1);
                      },
                    },
                    {
                      key: 'enable',
                      value: function () {
                        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                        this.scroll.enable(x), this.container.classList.toggle('ql-disabled', !x);
                      },
                    },
                    {
                      key: 'focus',
                      value: function () {
                        var x = this.scrollingContainer.scrollTop;
                        this.selection.focus(),
                          (this.scrollingContainer.scrollTop = x),
                          this.scrollIntoView();
                      },
                    },
                    {
                      key: 'format',
                      value: function (x, I) {
                        var D = this,
                          H =
                            arguments.length > 2 && arguments[2] !== void 0
                              ? arguments[2]
                              : t.default.sources.API;
                        return K.call(
                          this,
                          function () {
                            var z = D.getSelection(!0),
                              L = new m.default();
                            if (z == null) return L;
                            if (n.default.query(x, n.default.Scope.BLOCK))
                              L = D.editor.formatLine(z.index, z.length, p({}, x, I));
                            else {
                              if (z.length === 0) return D.selection.format(x, I), L;
                              L = D.editor.formatText(z.index, z.length, p({}, x, I));
                            }
                            return D.setSelection(z, t.default.sources.SILENT), L;
                          },
                          H,
                        );
                      },
                    },
                    {
                      key: 'formatLine',
                      value: function (x, I, D, H, z) {
                        var L = this,
                          F = void 0,
                          W = Y(x, I, D, H, z),
                          V = k(W, 4);
                        return (
                          (x = V[0]),
                          (I = V[1]),
                          (F = V[2]),
                          (z = V[3]),
                          K.call(
                            this,
                            function () {
                              return L.editor.formatLine(x, I, F);
                            },
                            z,
                            x,
                            0,
                          )
                        );
                      },
                    },
                    {
                      key: 'formatText',
                      value: function (x, I, D, H, z) {
                        var L = this,
                          F = void 0,
                          W = Y(x, I, D, H, z),
                          V = k(W, 4);
                        return (
                          (x = V[0]),
                          (I = V[1]),
                          (F = V[2]),
                          (z = V[3]),
                          K.call(
                            this,
                            function () {
                              return L.editor.formatText(x, I, F);
                            },
                            z,
                            x,
                            0,
                          )
                        );
                      },
                    },
                    {
                      key: 'getBounds',
                      value: function (x) {
                        var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                          D = void 0;
                        typeof x == 'number'
                          ? (D = this.selection.getBounds(x, I))
                          : (D = this.selection.getBounds(x.index, x.length));
                        var H = this.container.getBoundingClientRect();
                        return {
                          bottom: D.bottom - H.top,
                          height: D.height,
                          left: D.left - H.left,
                          right: D.right - H.left,
                          top: D.top - H.top,
                          width: D.width,
                        };
                      },
                    },
                    {
                      key: 'getContents',
                      value: function () {
                        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                          I =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : this.getLength() - x,
                          D = Y(x, I),
                          H = k(D, 2);
                        return (x = H[0]), (I = H[1]), this.editor.getContents(x, I);
                      },
                    },
                    {
                      key: 'getFormat',
                      value: function () {
                        var x =
                            arguments.length > 0 && arguments[0] !== void 0
                              ? arguments[0]
                              : this.getSelection(!0),
                          I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                        return typeof x == 'number'
                          ? this.editor.getFormat(x, I)
                          : this.editor.getFormat(x.index, x.length);
                      },
                    },
                    {
                      key: 'getIndex',
                      value: function (x) {
                        return x.offset(this.scroll);
                      },
                    },
                    {
                      key: 'getLength',
                      value: function () {
                        return this.scroll.length();
                      },
                    },
                    {
                      key: 'getLeaf',
                      value: function (x) {
                        return this.scroll.leaf(x);
                      },
                    },
                    {
                      key: 'getLine',
                      value: function (x) {
                        return this.scroll.line(x);
                      },
                    },
                    {
                      key: 'getLines',
                      value: function () {
                        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                          I =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : Number.MAX_VALUE;
                        return typeof x != 'number'
                          ? this.scroll.lines(x.index, x.length)
                          : this.scroll.lines(x, I);
                      },
                    },
                    {
                      key: 'getModule',
                      value: function (x) {
                        return this.theme.modules[x];
                      },
                    },
                    {
                      key: 'getSelection',
                      value: function () {
                        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                        return x && this.focus(), this.update(), this.selection.getRange()[0];
                      },
                    },
                    {
                      key: 'getText',
                      value: function () {
                        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                          I =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : this.getLength() - x,
                          D = Y(x, I),
                          H = k(D, 2);
                        return (x = H[0]), (I = H[1]), this.editor.getText(x, I);
                      },
                    },
                    {
                      key: 'hasFocus',
                      value: function () {
                        return this.selection.hasFocus();
                      },
                    },
                    {
                      key: 'insertEmbed',
                      value: function (x, I, D) {
                        var H = this,
                          z =
                            arguments.length > 3 && arguments[3] !== void 0
                              ? arguments[3]
                              : C.sources.API;
                        return K.call(
                          this,
                          function () {
                            return H.editor.insertEmbed(x, I, D);
                          },
                          z,
                          x,
                        );
                      },
                    },
                    {
                      key: 'insertText',
                      value: function (x, I, D, H, z) {
                        var L = this,
                          F = void 0,
                          W = Y(x, 0, D, H, z),
                          V = k(W, 4);
                        return (
                          (x = V[0]),
                          (F = V[2]),
                          (z = V[3]),
                          K.call(
                            this,
                            function () {
                              return L.editor.insertText(x, I, F);
                            },
                            z,
                            x,
                            I.length,
                          )
                        );
                      },
                    },
                    {
                      key: 'isEnabled',
                      value: function () {
                        return !this.container.classList.contains('ql-disabled');
                      },
                    },
                    {
                      key: 'off',
                      value: function () {
                        return this.emitter.off.apply(this.emitter, arguments);
                      },
                    },
                    {
                      key: 'on',
                      value: function () {
                        return this.emitter.on.apply(this.emitter, arguments);
                      },
                    },
                    {
                      key: 'once',
                      value: function () {
                        return this.emitter.once.apply(this.emitter, arguments);
                      },
                    },
                    {
                      key: 'pasteHTML',
                      value: function (x, I, D) {
                        this.clipboard.dangerouslyPasteHTML(x, I, D);
                      },
                    },
                    {
                      key: 'removeFormat',
                      value: function (x, I, D) {
                        var H = this,
                          z = Y(x, I, D),
                          L = k(z, 4);
                        return (
                          (x = L[0]),
                          (I = L[1]),
                          (D = L[3]),
                          K.call(
                            this,
                            function () {
                              return H.editor.removeFormat(x, I);
                            },
                            D,
                            x,
                          )
                        );
                      },
                    },
                    {
                      key: 'scrollIntoView',
                      value: function () {
                        this.selection.scrollIntoView(this.scrollingContainer);
                      },
                    },
                    {
                      key: 'setContents',
                      value: function (x) {
                        var I = this,
                          D =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : t.default.sources.API;
                        return K.call(
                          this,
                          function () {
                            x = new m.default(x);
                            var H = I.getLength(),
                              z = I.editor.deleteText(0, H),
                              L = I.editor.applyDelta(x),
                              F = L.ops[L.ops.length - 1];
                            F != null &&
                              typeof F.insert == 'string' &&
                              F.insert[F.insert.length - 1] ===
                                `
` &&
                              (I.editor.deleteText(I.getLength() - 1, 1), L.delete(1));
                            var W = z.compose(L);
                            return W;
                          },
                          D,
                        );
                      },
                    },
                    {
                      key: 'setSelection',
                      value: function (x, I, D) {
                        if (x == null) this.selection.setRange(null, I || C.sources.API);
                        else {
                          var H = Y(x, I, D),
                            z = k(H, 4);
                          (x = z[0]),
                            (I = z[1]),
                            (D = z[3]),
                            this.selection.setRange(new i.Range(x, I), D),
                            D !== t.default.sources.SILENT &&
                              this.selection.scrollIntoView(this.scrollingContainer);
                        }
                      },
                    },
                    {
                      key: 'setText',
                      value: function (x) {
                        var I =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : t.default.sources.API,
                          D = new m.default().insert(x);
                        return this.setContents(D, I);
                      },
                    },
                    {
                      key: 'update',
                      value: function () {
                        var x =
                            arguments.length > 0 && arguments[0] !== void 0
                              ? arguments[0]
                              : t.default.sources.USER,
                          I = this.scroll.update(x);
                        return this.selection.update(x), I;
                      },
                    },
                    {
                      key: 'updateContents',
                      value: function (x) {
                        var I = this,
                          D =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : t.default.sources.API;
                        return K.call(
                          this,
                          function () {
                            return (x = new m.default(x)), I.editor.applyDelta(x, D);
                          },
                          D,
                          !0,
                        );
                      },
                    },
                  ]),
                  C
                );
              })();
            (R.DEFAULTS = {
              bounds: null,
              formats: null,
              modules: {},
              placeholder: '',
              readOnly: !1,
              scrollingContainer: null,
              strict: !0,
              theme: 'default',
            }),
              (R.events = t.default.events),
              (R.sources = t.default.sources),
              (R.version = '1.3.7'),
              (R.imports = {
                delta: m.default,
                parchment: n.default,
                'core/module': a.default,
                'core/theme': P.default,
              });
            function j(C, M) {
              if (
                ((M = (0, h.default)(
                  !0,
                  { container: C, modules: { clipboard: !0, keyboard: !0, history: !0 } },
                  M,
                )),
                !M.theme || M.theme === R.DEFAULTS.theme)
              )
                M.theme = P.default;
              else if (((M.theme = R.import('themes/' + M.theme)), M.theme == null))
                throw new Error('Invalid theme ' + M.theme + '. Did you register it?');
              var x = (0, h.default)(!0, {}, M.theme.DEFAULTS);
              [x, M].forEach(function (H) {
                (H.modules = H.modules || {}),
                  Object.keys(H.modules).forEach(function (z) {
                    H.modules[z] === !0 && (H.modules[z] = {});
                  });
              });
              var I = Object.keys(x.modules).concat(Object.keys(M.modules)),
                D = I.reduce(function (H, z) {
                  var L = R.import('modules/' + z);
                  return (
                    L == null
                      ? _.error('Cannot load ' + z + ' module. Are you sure you registered it?')
                      : (H[z] = L.DEFAULTS || {}),
                    H
                  );
                }, {});
              return (
                M.modules != null &&
                  M.modules.toolbar &&
                  M.modules.toolbar.constructor !== Object &&
                  (M.modules.toolbar = { container: M.modules.toolbar }),
                (M = (0, h.default)(!0, {}, R.DEFAULTS, { modules: D }, x, M)),
                ['bounds', 'container', 'scrollingContainer'].forEach(function (H) {
                  typeof M[H] == 'string' && (M[H] = document.querySelector(M[H]));
                }),
                (M.modules = Object.keys(M.modules).reduce(function (H, z) {
                  return M.modules[z] && (H[z] = M.modules[z]), H;
                }, {})),
                M
              );
            }
            function K(C, M, x, I) {
              if (this.options.strict && !this.isEnabled() && M === t.default.sources.USER)
                return new m.default();
              var D = x == null ? null : this.getSelection(),
                H = this.editor.delta,
                z = C();
              if (
                (D != null &&
                  (x === !0 && (x = D.index),
                  I == null ? (D = G(D, z, M)) : I !== 0 && (D = G(D, x, I, M)),
                  this.setSelection(D, t.default.sources.SILENT)),
                z.length() > 0)
              ) {
                var L,
                  F = [t.default.events.TEXT_CHANGE, z, H, M];
                if (
                  ((L = this.emitter).emit.apply(L, [t.default.events.EDITOR_CHANGE].concat(F)),
                  M !== t.default.sources.SILENT)
                ) {
                  var W;
                  (W = this.emitter).emit.apply(W, F);
                }
              }
              return z;
            }
            function Y(C, M, x, I, D) {
              var H = {};
              return (
                typeof C.index == 'number' && typeof C.length == 'number'
                  ? typeof M != 'number'
                    ? ((D = I), (I = x), (x = M), (M = C.length), (C = C.index))
                    : ((M = C.length), (C = C.index))
                  : typeof M != 'number' && ((D = I), (I = x), (x = M), (M = 0)),
                (typeof x == 'undefined' ? 'undefined' : q(x)) === 'object'
                  ? ((H = x), (D = I))
                  : typeof x == 'string' && (I != null ? (H[x] = I) : (D = x)),
                (D = D || t.default.sources.API),
                [C, M, H, D]
              );
            }
            function G(C, M, x, I) {
              if (C == null) return null;
              var D = void 0,
                H = void 0;
              if (M instanceof m.default) {
                var z = [C.index, C.index + C.length].map(function (V) {
                    return M.transformPosition(V, I !== t.default.sources.USER);
                  }),
                  L = k(z, 2);
                (D = L[0]), (H = L[1]);
              } else {
                var F = [C.index, C.index + C.length].map(function (V) {
                    return V < M || (V === M && I === t.default.sources.USER)
                      ? V
                      : x >= 0
                      ? V + x
                      : Math.max(M, V + x);
                  }),
                  W = k(F, 2);
                (D = W[0]), (H = W[1]);
              }
              return new i.Range(D, H - D);
            }
            (w.expandConfig = j), (w.overload = Y), (w.default = R);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function u(n, i) {
                  for (var c = 0; c < i.length; c++) {
                    var r = i[c];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(n, r.key, r);
                  }
                }
                return function (n, i, c) {
                  return i && u(n.prototype, i), c && u(n, c), n;
                };
              })(),
              k = function u(n, i, c) {
                n === null && (n = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(n, i);
                if (r === void 0) {
                  var h = Object.getPrototypeOf(n);
                  return h === null ? void 0 : u(h, i, c);
                } else {
                  if ('value' in r) return r.value;
                  var N = r.get;
                  return N === void 0 ? void 0 : N.call(c);
                }
              },
              v = y(7),
              b = l(v),
              m = y(0),
              d = l(m);
            function l(u) {
              return u && u.__esModule ? u : { default: u };
            }
            function e(u, n) {
              if (!(u instanceof n)) throw new TypeError('Cannot call a class as a function');
            }
            function t(u, n) {
              if (!u)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return n && (typeof n == 'object' || typeof n == 'function') ? n : u;
            }
            function s(u, n) {
              if (typeof n != 'function' && n !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof n,
                );
              (u.prototype = Object.create(n && n.prototype, {
                constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
              })),
                n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : (u.__proto__ = n));
            }
            var a = (function (u) {
              s(n, u);
              function n() {
                return (
                  e(this, n),
                  t(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                );
              }
              return (
                q(
                  n,
                  [
                    {
                      key: 'formatAt',
                      value: function (c, r, h, N) {
                        if (
                          n.compare(this.statics.blotName, h) < 0 &&
                          d.default.query(h, d.default.Scope.BLOT)
                        ) {
                          var A = this.isolate(c, r);
                          N && A.wrap(h, N);
                        } else
                          k(
                            n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                            'formatAt',
                            this,
                          ).call(this, c, r, h, N);
                      },
                    },
                    {
                      key: 'optimize',
                      value: function (c) {
                        if (
                          (k(
                            n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                            'optimize',
                            this,
                          ).call(this, c),
                          this.parent instanceof n &&
                            n.compare(this.statics.blotName, this.parent.statics.blotName) > 0)
                        ) {
                          var r = this.parent.isolate(this.offset(), this.length());
                          this.moveChildren(r), r.wrap(this);
                        }
                      },
                    },
                  ],
                  [
                    {
                      key: 'compare',
                      value: function (c, r) {
                        var h = n.order.indexOf(c),
                          N = n.order.indexOf(r);
                        return h >= 0 || N >= 0 ? h - N : c === r ? 0 : c < r ? -1 : 1;
                      },
                    },
                  ],
                ),
                n
              );
            })(d.default.Inline);
            (a.allowedChildren = [a, d.default.Embed, b.default]),
              (a.order = [
                'cursor',
                'inline',
                'underline',
                'strike',
                'italic',
                'bold',
                'script',
                'link',
                'code',
              ]),
              (w.default = a);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(0),
              k = v(q);
            function v(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function b(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function m(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
            }
            function d(e, t) {
              if (typeof t != 'function' && t !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            var l = (function (e) {
              d(t, e);
              function t() {
                return (
                  b(this, t),
                  m(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
              }
              return t;
            })(k.default.Text);
            w.default = l;
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function i(c, r) {
                  for (var h = 0; h < r.length; h++) {
                    var N = r[h];
                    (N.enumerable = N.enumerable || !1),
                      (N.configurable = !0),
                      'value' in N && (N.writable = !0),
                      Object.defineProperty(c, N.key, N);
                  }
                }
                return function (c, r, h) {
                  return r && i(c.prototype, r), h && i(c, h), c;
                };
              })(),
              k = function i(c, r, h) {
                c === null && (c = Function.prototype);
                var N = Object.getOwnPropertyDescriptor(c, r);
                if (N === void 0) {
                  var A = Object.getPrototypeOf(c);
                  return A === null ? void 0 : i(A, r, h);
                } else {
                  if ('value' in N) return N.value;
                  var T = N.get;
                  return T === void 0 ? void 0 : T.call(h);
                }
              },
              v = y(54),
              b = l(v),
              m = y(10),
              d = l(m);
            function l(i) {
              return i && i.__esModule ? i : { default: i };
            }
            function e(i, c) {
              if (!(i instanceof c)) throw new TypeError('Cannot call a class as a function');
            }
            function t(i, c) {
              if (!i)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return c && (typeof c == 'object' || typeof c == 'function') ? c : i;
            }
            function s(i, c) {
              if (typeof c != 'function' && c !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof c,
                );
              (i.prototype = Object.create(c && c.prototype, {
                constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
              })),
                c && (Object.setPrototypeOf ? Object.setPrototypeOf(i, c) : (i.__proto__ = c));
            }
            var a = (0, d.default)('quill:events'),
              u = ['selectionchange', 'mousedown', 'mouseup', 'click'];
            u.forEach(function (i) {
              document.addEventListener(i, function () {
                for (var c = arguments.length, r = Array(c), h = 0; h < c; h++) r[h] = arguments[h];
                [].slice.call(document.querySelectorAll('.ql-container')).forEach(function (N) {
                  if (N.__quill && N.__quill.emitter) {
                    var A;
                    (A = N.__quill.emitter).handleDOM.apply(A, r);
                  }
                });
              });
            });
            var n = (function (i) {
              s(c, i);
              function c() {
                e(this, c);
                var r = t(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
                return (r.listeners = {}), r.on('error', a.error), r;
              }
              return (
                q(c, [
                  {
                    key: 'emit',
                    value: function () {
                      a.log.apply(a, arguments),
                        k(
                          c.prototype.__proto__ || Object.getPrototypeOf(c.prototype),
                          'emit',
                          this,
                        ).apply(this, arguments);
                    },
                  },
                  {
                    key: 'handleDOM',
                    value: function (h) {
                      for (
                        var N = arguments.length, A = Array(N > 1 ? N - 1 : 0), T = 1;
                        T < N;
                        T++
                      )
                        A[T - 1] = arguments[T];
                      (this.listeners[h.type] || []).forEach(function (P) {
                        var E = P.node,
                          p = P.handler;
                        (h.target === E || E.contains(h.target)) && p.apply(void 0, [h].concat(A));
                      });
                    },
                  },
                  {
                    key: 'listenDOM',
                    value: function (h, N, A) {
                      this.listeners[h] || (this.listeners[h] = []),
                        this.listeners[h].push({ node: N, handler: A });
                    },
                  },
                ]),
                c
              );
            })(b.default);
            (n.events = {
              EDITOR_CHANGE: 'editor-change',
              SCROLL_BEFORE_UPDATE: 'scroll-before-update',
              SCROLL_OPTIMIZE: 'scroll-optimize',
              SCROLL_UPDATE: 'scroll-update',
              SELECTION_CHANGE: 'selection-change',
              TEXT_CHANGE: 'text-change',
            }),
              (n.sources = { API: 'api', SILENT: 'silent', USER: 'user' }),
              (w.default = n);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            function q(v, b) {
              if (!(v instanceof b)) throw new TypeError('Cannot call a class as a function');
            }
            var k = function v(b) {
              var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              q(this, v), (this.quill = b), (this.options = m);
            };
            (k.DEFAULTS = {}), (w.default = k);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = ['error', 'warn', 'log', 'info'],
              k = 'warn';
            function v(m) {
              if (q.indexOf(m) <= q.indexOf(k)) {
                for (var d, l = arguments.length, e = Array(l > 1 ? l - 1 : 0), t = 1; t < l; t++)
                  e[t - 1] = arguments[t];
                (d = console)[m].apply(d, e);
              }
            }
            function b(m) {
              return q.reduce(function (d, l) {
                return (d[l] = v.bind(console, l, m)), d;
              }, {});
            }
            (v.level = b.level =
              function (m) {
                k = m;
              }),
              (w.default = b);
          },
          function (U, w, y) {
            var q = Array.prototype.slice,
              k = y(52),
              v = y(53),
              b = (U.exports = function (e, t, s) {
                return (
                  s || (s = {}),
                  e === t
                    ? !0
                    : e instanceof Date && t instanceof Date
                    ? e.getTime() === t.getTime()
                    : !e || !t || (typeof e != 'object' && typeof t != 'object')
                    ? s.strict
                      ? e === t
                      : e == t
                    : l(e, t, s)
                );
              });
            function m(e) {
              return e == null;
            }
            function d(e) {
              return !(
                !e ||
                typeof e != 'object' ||
                typeof e.length != 'number' ||
                typeof e.copy != 'function' ||
                typeof e.slice != 'function' ||
                (e.length > 0 && typeof e[0] != 'number')
              );
            }
            function l(e, t, s) {
              var a, u;
              if (m(e) || m(t) || e.prototype !== t.prototype) return !1;
              if (v(e)) return v(t) ? ((e = q.call(e)), (t = q.call(t)), b(e, t, s)) : !1;
              if (d(e)) {
                if (!d(t) || e.length !== t.length) return !1;
                for (a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
                return !0;
              }
              try {
                var n = k(e),
                  i = k(t);
              } catch (c) {
                return !1;
              }
              if (n.length != i.length) return !1;
              for (n.sort(), i.sort(), a = n.length - 1; a >= 0; a--) if (n[a] != i[a]) return !1;
              for (a = n.length - 1; a >= 0; a--) if (((u = n[a]), !b(e[u], t[u], s))) return !1;
              return typeof e == typeof t;
            }
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(1),
              k = (function () {
                function v(b, m, d) {
                  d === void 0 && (d = {}), (this.attrName = b), (this.keyName = m);
                  var l = q.Scope.TYPE & q.Scope.ATTRIBUTE;
                  d.scope != null
                    ? (this.scope = (d.scope & q.Scope.LEVEL) | l)
                    : (this.scope = q.Scope.ATTRIBUTE),
                    d.whitelist != null && (this.whitelist = d.whitelist);
                }
                return (
                  (v.keys = function (b) {
                    return [].map.call(b.attributes, function (m) {
                      return m.name;
                    });
                  }),
                  (v.prototype.add = function (b, m) {
                    return this.canAdd(b, m) ? (b.setAttribute(this.keyName, m), !0) : !1;
                  }),
                  (v.prototype.canAdd = function (b, m) {
                    var d = q.query(b, q.Scope.BLOT & (this.scope | q.Scope.TYPE));
                    return d == null
                      ? !1
                      : this.whitelist == null
                      ? !0
                      : typeof m == 'string'
                      ? this.whitelist.indexOf(m.replace(/["']/g, '')) > -1
                      : this.whitelist.indexOf(m) > -1;
                  }),
                  (v.prototype.remove = function (b) {
                    b.removeAttribute(this.keyName);
                  }),
                  (v.prototype.value = function (b) {
                    var m = b.getAttribute(this.keyName);
                    return this.canAdd(b, m) && m ? m : '';
                  }),
                  v
                );
              })();
            w.default = k;
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }), (w.default = w.Code = void 0);
            var q = (function () {
                function T(P, E) {
                  var p = [],
                    O = !0,
                    _ = !1,
                    R = void 0;
                  try {
                    for (
                      var j = P[Symbol.iterator](), K;
                      !(O = (K = j.next()).done) && (p.push(K.value), !(E && p.length === E));
                      O = !0
                    );
                  } catch (Y) {
                    (_ = !0), (R = Y);
                  } finally {
                    try {
                      !O && j.return && j.return();
                    } finally {
                      if (_) throw R;
                    }
                  }
                  return p;
                }
                return function (P, E) {
                  if (Array.isArray(P)) return P;
                  if (Symbol.iterator in Object(P)) return T(P, E);
                  throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
              })(),
              k = (function () {
                function T(P, E) {
                  for (var p = 0; p < E.length; p++) {
                    var O = E[p];
                    (O.enumerable = O.enumerable || !1),
                      (O.configurable = !0),
                      'value' in O && (O.writable = !0),
                      Object.defineProperty(P, O.key, O);
                  }
                }
                return function (P, E, p) {
                  return E && T(P.prototype, E), p && T(P, p), P;
                };
              })(),
              v = function T(P, E, p) {
                P === null && (P = Function.prototype);
                var O = Object.getOwnPropertyDescriptor(P, E);
                if (O === void 0) {
                  var _ = Object.getPrototypeOf(P);
                  return _ === null ? void 0 : T(_, E, p);
                } else {
                  if ('value' in O) return O.value;
                  var R = O.get;
                  return R === void 0 ? void 0 : R.call(p);
                }
              },
              b = y(2),
              m = i(b),
              d = y(0),
              l = i(d),
              e = y(4),
              t = i(e),
              s = y(6),
              a = i(s),
              u = y(7),
              n = i(u);
            function i(T) {
              return T && T.__esModule ? T : { default: T };
            }
            function c(T, P) {
              if (!(T instanceof P)) throw new TypeError('Cannot call a class as a function');
            }
            function r(T, P) {
              if (!T)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return P && (typeof P == 'object' || typeof P == 'function') ? P : T;
            }
            function h(T, P) {
              if (typeof P != 'function' && P !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof P,
                );
              (T.prototype = Object.create(P && P.prototype, {
                constructor: { value: T, enumerable: !1, writable: !0, configurable: !0 },
              })),
                P && (Object.setPrototypeOf ? Object.setPrototypeOf(T, P) : (T.__proto__ = P));
            }
            var N = (function (T) {
              h(P, T);
              function P() {
                return (
                  c(this, P),
                  r(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments))
                );
              }
              return P;
            })(a.default);
            (N.blotName = 'code'), (N.tagName = 'CODE');
            var A = (function (T) {
              h(P, T);
              function P() {
                return (
                  c(this, P),
                  r(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments))
                );
              }
              return (
                k(
                  P,
                  [
                    {
                      key: 'delta',
                      value: function () {
                        var p = this,
                          O = this.domNode.textContent;
                        return (
                          O.endsWith(`
`) && (O = O.slice(0, -1)),
                          O.split(
                            `
`,
                          ).reduce(function (_, R) {
                            return _.insert(R).insert(
                              `
`,
                              p.formats(),
                            );
                          }, new m.default())
                        );
                      },
                    },
                    {
                      key: 'format',
                      value: function (p, O) {
                        if (!(p === this.statics.blotName && O)) {
                          var _ = this.descendant(n.default, this.length() - 1),
                            R = q(_, 1),
                            j = R[0];
                          j != null && j.deleteAt(j.length() - 1, 1),
                            v(
                              P.prototype.__proto__ || Object.getPrototypeOf(P.prototype),
                              'format',
                              this,
                            ).call(this, p, O);
                        }
                      },
                    },
                    {
                      key: 'formatAt',
                      value: function (p, O, _, R) {
                        if (
                          O !== 0 &&
                          !(
                            l.default.query(_, l.default.Scope.BLOCK) == null ||
                            (_ === this.statics.blotName &&
                              R === this.statics.formats(this.domNode))
                          )
                        ) {
                          var j = this.newlineIndex(p);
                          if (!(j < 0 || j >= p + O)) {
                            var K = this.newlineIndex(p, !0) + 1,
                              Y = j - K + 1,
                              G = this.isolate(K, Y),
                              C = G.next;
                            G.format(_, R), C instanceof P && C.formatAt(0, p - K + O - Y, _, R);
                          }
                        }
                      },
                    },
                    {
                      key: 'insertAt',
                      value: function (p, O, _) {
                        if (_ == null) {
                          var R = this.descendant(n.default, p),
                            j = q(R, 2),
                            K = j[0],
                            Y = j[1];
                          K.insertAt(Y, O);
                        }
                      },
                    },
                    {
                      key: 'length',
                      value: function () {
                        var p = this.domNode.textContent.length;
                        return this.domNode.textContent.endsWith(`
`)
                          ? p
                          : p + 1;
                      },
                    },
                    {
                      key: 'newlineIndex',
                      value: function (p) {
                        var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                        if (O)
                          return this.domNode.textContent.slice(0, p).lastIndexOf(`
`);
                        var _ = this.domNode.textContent.slice(p).indexOf(`
`);
                        return _ > -1 ? p + _ : -1;
                      },
                    },
                    {
                      key: 'optimize',
                      value: function (p) {
                        this.domNode.textContent.endsWith(`
`) ||
                          this.appendChild(
                            l.default.create(
                              'text',
                              `
`,
                            ),
                          ),
                          v(
                            P.prototype.__proto__ || Object.getPrototypeOf(P.prototype),
                            'optimize',
                            this,
                          ).call(this, p);
                        var O = this.next;
                        O != null &&
                          O.prev === this &&
                          O.statics.blotName === this.statics.blotName &&
                          this.statics.formats(this.domNode) === O.statics.formats(O.domNode) &&
                          (O.optimize(p), O.moveChildren(this), O.remove());
                      },
                    },
                    {
                      key: 'replace',
                      value: function (p) {
                        v(
                          P.prototype.__proto__ || Object.getPrototypeOf(P.prototype),
                          'replace',
                          this,
                        ).call(this, p),
                          [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (O) {
                            var _ = l.default.find(O);
                            _ == null
                              ? O.parentNode.removeChild(O)
                              : _ instanceof l.default.Embed
                              ? _.remove()
                              : _.unwrap();
                          });
                      },
                    },
                  ],
                  [
                    {
                      key: 'create',
                      value: function (p) {
                        var O = v(P.__proto__ || Object.getPrototypeOf(P), 'create', this).call(
                          this,
                          p,
                        );
                        return O.setAttribute('spellcheck', !1), O;
                      },
                    },
                    {
                      key: 'formats',
                      value: function () {
                        return !0;
                      },
                    },
                  ],
                ),
                P
              );
            })(t.default);
            (A.blotName = 'code-block'),
              (A.tagName = 'PRE'),
              (A.TAB = '  '),
              (w.Code = N),
              (w.default = A);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q =
                typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                  ? function (C) {
                      return typeof C;
                    }
                  : function (C) {
                      return C &&
                        typeof Symbol == 'function' &&
                        C.constructor === Symbol &&
                        C !== Symbol.prototype
                        ? 'symbol'
                        : typeof C;
                    },
              k = (function () {
                function C(M, x) {
                  var I = [],
                    D = !0,
                    H = !1,
                    z = void 0;
                  try {
                    for (
                      var L = M[Symbol.iterator](), F;
                      !(D = (F = L.next()).done) && (I.push(F.value), !(x && I.length === x));
                      D = !0
                    );
                  } catch (W) {
                    (H = !0), (z = W);
                  } finally {
                    try {
                      !D && L.return && L.return();
                    } finally {
                      if (H) throw z;
                    }
                  }
                  return I;
                }
                return function (M, x) {
                  if (Array.isArray(M)) return M;
                  if (Symbol.iterator in Object(M)) return C(M, x);
                  throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
              })(),
              v = (function () {
                function C(M, x) {
                  for (var I = 0; I < x.length; I++) {
                    var D = x[I];
                    (D.enumerable = D.enumerable || !1),
                      (D.configurable = !0),
                      'value' in D && (D.writable = !0),
                      Object.defineProperty(M, D.key, D);
                  }
                }
                return function (M, x, I) {
                  return x && C(M.prototype, x), I && C(M, I), M;
                };
              })(),
              b = y(2),
              m = O(b),
              d = y(20),
              l = O(d),
              e = y(0),
              t = O(e),
              s = y(13),
              a = O(s),
              u = y(24),
              n = O(u),
              i = y(4),
              c = O(i),
              r = y(16),
              h = O(r),
              N = y(21),
              A = O(N),
              T = y(11),
              P = O(T),
              E = y(3),
              p = O(E);
            function O(C) {
              return C && C.__esModule ? C : { default: C };
            }
            function _(C, M, x) {
              return (
                M in C
                  ? Object.defineProperty(C, M, {
                      value: x,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (C[M] = x),
                C
              );
            }
            function R(C, M) {
              if (!(C instanceof M)) throw new TypeError('Cannot call a class as a function');
            }
            var j = /^[ -~]*$/,
              K = (function () {
                function C(M) {
                  R(this, C), (this.scroll = M), (this.delta = this.getDelta());
                }
                return (
                  v(C, [
                    {
                      key: 'applyDelta',
                      value: function (x) {
                        var I = this,
                          D = !1;
                        this.scroll.update();
                        var H = this.scroll.length();
                        return (
                          this.scroll.batchStart(),
                          (x = G(x)),
                          x.reduce(function (z, L) {
                            var F = L.retain || L.delete || L.insert.length || 1,
                              W = L.attributes || {};
                            if (L.insert != null) {
                              if (typeof L.insert == 'string') {
                                var V = L.insert;
                                V.endsWith(`
`) &&
                                  D &&
                                  ((D = !1), (V = V.slice(0, -1))),
                                  z >= H &&
                                    !V.endsWith(`
`) &&
                                    (D = !0),
                                  I.scroll.insertAt(z, V);
                                var Q = I.scroll.line(z),
                                  X = k(Q, 2),
                                  et = X[0],
                                  nt = X[1],
                                  lt = (0, p.default)({}, (0, i.bubbleFormats)(et));
                                if (et instanceof c.default) {
                                  var ut = et.descendant(t.default.Leaf, nt),
                                    dt = k(ut, 1),
                                    ht = dt[0];
                                  lt = (0, p.default)(lt, (0, i.bubbleFormats)(ht));
                                }
                                W = l.default.attributes.diff(lt, W) || {};
                              } else if (q(L.insert) === 'object') {
                                var g = Object.keys(L.insert)[0];
                                if (g == null) return z;
                                I.scroll.insertAt(z, g, L.insert[g]);
                              }
                              H += F;
                            }
                            return (
                              Object.keys(W).forEach(function (o) {
                                I.scroll.formatAt(z, F, o, W[o]);
                              }),
                              z + F
                            );
                          }, 0),
                          x.reduce(function (z, L) {
                            return typeof L.delete == 'number'
                              ? (I.scroll.deleteAt(z, L.delete), z)
                              : z + (L.retain || L.insert.length || 1);
                          }, 0),
                          this.scroll.batchEnd(),
                          this.update(x)
                        );
                      },
                    },
                    {
                      key: 'deleteText',
                      value: function (x, I) {
                        return (
                          this.scroll.deleteAt(x, I),
                          this.update(new m.default().retain(x).delete(I))
                        );
                      },
                    },
                    {
                      key: 'formatLine',
                      value: function (x, I) {
                        var D = this,
                          H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                        return (
                          this.scroll.update(),
                          Object.keys(H).forEach(function (z) {
                            if (!(D.scroll.whitelist != null && !D.scroll.whitelist[z])) {
                              var L = D.scroll.lines(x, Math.max(I, 1)),
                                F = I;
                              L.forEach(function (W) {
                                var V = W.length();
                                if (!(W instanceof a.default)) W.format(z, H[z]);
                                else {
                                  var Q = x - W.offset(D.scroll),
                                    X = W.newlineIndex(Q + F) - Q + 1;
                                  W.formatAt(Q, X, z, H[z]);
                                }
                                F -= V;
                              });
                            }
                          }),
                          this.scroll.optimize(),
                          this.update(new m.default().retain(x).retain(I, (0, A.default)(H)))
                        );
                      },
                    },
                    {
                      key: 'formatText',
                      value: function (x, I) {
                        var D = this,
                          H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                        return (
                          Object.keys(H).forEach(function (z) {
                            D.scroll.formatAt(x, I, z, H[z]);
                          }),
                          this.update(new m.default().retain(x).retain(I, (0, A.default)(H)))
                        );
                      },
                    },
                    {
                      key: 'getContents',
                      value: function (x, I) {
                        return this.delta.slice(x, x + I);
                      },
                    },
                    {
                      key: 'getDelta',
                      value: function () {
                        return this.scroll.lines().reduce(function (x, I) {
                          return x.concat(I.delta());
                        }, new m.default());
                      },
                    },
                    {
                      key: 'getFormat',
                      value: function (x) {
                        var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                          D = [],
                          H = [];
                        I === 0
                          ? this.scroll.path(x).forEach(function (L) {
                              var F = k(L, 1),
                                W = F[0];
                              W instanceof c.default
                                ? D.push(W)
                                : W instanceof t.default.Leaf && H.push(W);
                            })
                          : ((D = this.scroll.lines(x, I)),
                            (H = this.scroll.descendants(t.default.Leaf, x, I)));
                        var z = [D, H].map(function (L) {
                          if (L.length === 0) return {};
                          for (
                            var F = (0, i.bubbleFormats)(L.shift());
                            Object.keys(F).length > 0;

                          ) {
                            var W = L.shift();
                            if (W == null) return F;
                            F = Y((0, i.bubbleFormats)(W), F);
                          }
                          return F;
                        });
                        return p.default.apply(p.default, z);
                      },
                    },
                    {
                      key: 'getText',
                      value: function (x, I) {
                        return this.getContents(x, I)
                          .filter(function (D) {
                            return typeof D.insert == 'string';
                          })
                          .map(function (D) {
                            return D.insert;
                          })
                          .join('');
                      },
                    },
                    {
                      key: 'insertEmbed',
                      value: function (x, I, D) {
                        return (
                          this.scroll.insertAt(x, I, D),
                          this.update(new m.default().retain(x).insert(_({}, I, D)))
                        );
                      },
                    },
                    {
                      key: 'insertText',
                      value: function (x, I) {
                        var D = this,
                          H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                        return (
                          (I = I.replace(
                            /\r\n/g,
                            `
`,
                          ).replace(
                            /\r/g,
                            `
`,
                          )),
                          this.scroll.insertAt(x, I),
                          Object.keys(H).forEach(function (z) {
                            D.scroll.formatAt(x, I.length, z, H[z]);
                          }),
                          this.update(new m.default().retain(x).insert(I, (0, A.default)(H)))
                        );
                      },
                    },
                    {
                      key: 'isBlank',
                      value: function () {
                        if (this.scroll.children.length == 0) return !0;
                        if (this.scroll.children.length > 1) return !1;
                        var x = this.scroll.children.head;
                        return x.statics.blotName !== c.default.blotName || x.children.length > 1
                          ? !1
                          : x.children.head instanceof h.default;
                      },
                    },
                    {
                      key: 'removeFormat',
                      value: function (x, I) {
                        var D = this.getText(x, I),
                          H = this.scroll.line(x + I),
                          z = k(H, 2),
                          L = z[0],
                          F = z[1],
                          W = 0,
                          V = new m.default();
                        L != null &&
                          (L instanceof a.default
                            ? (W = L.newlineIndex(F) - F + 1)
                            : (W = L.length() - F),
                          (V = L.delta().slice(F, F + W - 1).insert(`
`)));
                        var Q = this.getContents(x, I + W),
                          X = Q.diff(new m.default().insert(D).concat(V)),
                          et = new m.default().retain(x).concat(X);
                        return this.applyDelta(et);
                      },
                    },
                    {
                      key: 'update',
                      value: function (x) {
                        var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
                          D =
                            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0,
                          H = this.delta;
                        if (
                          I.length === 1 &&
                          I[0].type === 'characterData' &&
                          I[0].target.data.match(j) &&
                          t.default.find(I[0].target)
                        ) {
                          var z = t.default.find(I[0].target),
                            L = (0, i.bubbleFormats)(z),
                            F = z.offset(this.scroll),
                            W = I[0].oldValue.replace(n.default.CONTENTS, ''),
                            V = new m.default().insert(W),
                            Q = new m.default().insert(z.value()),
                            X = new m.default().retain(F).concat(V.diff(Q, D));
                          (x = X.reduce(function (et, nt) {
                            return nt.insert ? et.insert(nt.insert, L) : et.push(nt);
                          }, new m.default())),
                            (this.delta = H.compose(x));
                        } else
                          (this.delta = this.getDelta()),
                            (!x || !(0, P.default)(H.compose(x), this.delta)) &&
                              (x = H.diff(this.delta, D));
                        return x;
                      },
                    },
                  ]),
                  C
                );
              })();
            function Y(C, M) {
              return Object.keys(M).reduce(function (x, I) {
                return (
                  C[I] == null ||
                    (M[I] === C[I]
                      ? (x[I] = M[I])
                      : Array.isArray(M[I])
                      ? M[I].indexOf(C[I]) < 0 && (x[I] = M[I].concat([C[I]]))
                      : (x[I] = [M[I], C[I]])),
                  x
                );
              }, {});
            }
            function G(C) {
              return C.reduce(function (M, x) {
                if (x.insert === 1) {
                  var I = (0, A.default)(x.attributes);
                  return delete I.image, M.insert({ image: x.attributes.image }, I);
                }
                if (
                  (x.attributes != null &&
                    (x.attributes.list === !0 || x.attributes.bullet === !0) &&
                    ((x = (0, A.default)(x)),
                    x.attributes.list
                      ? (x.attributes.list = 'ordered')
                      : ((x.attributes.list = 'bullet'), delete x.attributes.bullet)),
                  typeof x.insert == 'string')
                ) {
                  var D = x.insert
                    .replace(
                      /\r\n/g,
                      `
`,
                    )
                    .replace(
                      /\r/g,
                      `
`,
                    );
                  return M.insert(D, x.attributes);
                }
                return M.push(x);
              }, new m.default());
            }
            w.default = K;
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }), (w.default = w.Range = void 0);
            var q = (function () {
                function T(P, E) {
                  var p = [],
                    O = !0,
                    _ = !1,
                    R = void 0;
                  try {
                    for (
                      var j = P[Symbol.iterator](), K;
                      !(O = (K = j.next()).done) && (p.push(K.value), !(E && p.length === E));
                      O = !0
                    );
                  } catch (Y) {
                    (_ = !0), (R = Y);
                  } finally {
                    try {
                      !O && j.return && j.return();
                    } finally {
                      if (_) throw R;
                    }
                  }
                  return p;
                }
                return function (P, E) {
                  if (Array.isArray(P)) return P;
                  if (Symbol.iterator in Object(P)) return T(P, E);
                  throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
              })(),
              k = (function () {
                function T(P, E) {
                  for (var p = 0; p < E.length; p++) {
                    var O = E[p];
                    (O.enumerable = O.enumerable || !1),
                      (O.configurable = !0),
                      'value' in O && (O.writable = !0),
                      Object.defineProperty(P, O.key, O);
                  }
                }
                return function (P, E, p) {
                  return E && T(P.prototype, E), p && T(P, p), P;
                };
              })(),
              v = y(0),
              b = n(v),
              m = y(21),
              d = n(m),
              l = y(11),
              e = n(l),
              t = y(8),
              s = n(t),
              a = y(10),
              u = n(a);
            function n(T) {
              return T && T.__esModule ? T : { default: T };
            }
            function i(T) {
              if (Array.isArray(T)) {
                for (var P = 0, E = Array(T.length); P < T.length; P++) E[P] = T[P];
                return E;
              } else return Array.from(T);
            }
            function c(T, P) {
              if (!(T instanceof P)) throw new TypeError('Cannot call a class as a function');
            }
            var r = (0, u.default)('quill:selection'),
              h = function T(P) {
                var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                c(this, T), (this.index = P), (this.length = E);
              },
              N = (function () {
                function T(P, E) {
                  var p = this;
                  c(this, T),
                    (this.emitter = E),
                    (this.scroll = P),
                    (this.composing = !1),
                    (this.mouseDown = !1),
                    (this.root = this.scroll.domNode),
                    (this.cursor = b.default.create('cursor', this)),
                    (this.lastRange = this.savedRange = new h(0, 0)),
                    this.handleComposition(),
                    this.handleDragging(),
                    this.emitter.listenDOM('selectionchange', document, function () {
                      p.mouseDown || setTimeout(p.update.bind(p, s.default.sources.USER), 1);
                    }),
                    this.emitter.on(s.default.events.EDITOR_CHANGE, function (O, _) {
                      O === s.default.events.TEXT_CHANGE &&
                        _.length() > 0 &&
                        p.update(s.default.sources.SILENT);
                    }),
                    this.emitter.on(s.default.events.SCROLL_BEFORE_UPDATE, function () {
                      if (!!p.hasFocus()) {
                        var O = p.getNativeRange();
                        O != null &&
                          O.start.node !== p.cursor.textNode &&
                          p.emitter.once(s.default.events.SCROLL_UPDATE, function () {
                            try {
                              p.setNativeRange(
                                O.start.node,
                                O.start.offset,
                                O.end.node,
                                O.end.offset,
                              );
                            } catch (_) {}
                          });
                      }
                    }),
                    this.emitter.on(s.default.events.SCROLL_OPTIMIZE, function (O, _) {
                      if (_.range) {
                        var R = _.range,
                          j = R.startNode,
                          K = R.startOffset,
                          Y = R.endNode,
                          G = R.endOffset;
                        p.setNativeRange(j, K, Y, G);
                      }
                    }),
                    this.update(s.default.sources.SILENT);
                }
                return (
                  k(T, [
                    {
                      key: 'handleComposition',
                      value: function () {
                        var E = this;
                        this.root.addEventListener('compositionstart', function () {
                          E.composing = !0;
                        }),
                          this.root.addEventListener('compositionend', function () {
                            if (((E.composing = !1), E.cursor.parent)) {
                              var p = E.cursor.restore();
                              if (!p) return;
                              setTimeout(function () {
                                E.setNativeRange(
                                  p.startNode,
                                  p.startOffset,
                                  p.endNode,
                                  p.endOffset,
                                );
                              }, 1);
                            }
                          });
                      },
                    },
                    {
                      key: 'handleDragging',
                      value: function () {
                        var E = this;
                        this.emitter.listenDOM('mousedown', document.body, function () {
                          E.mouseDown = !0;
                        }),
                          this.emitter.listenDOM('mouseup', document.body, function () {
                            (E.mouseDown = !1), E.update(s.default.sources.USER);
                          });
                      },
                    },
                    {
                      key: 'focus',
                      value: function () {
                        this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
                      },
                    },
                    {
                      key: 'format',
                      value: function (E, p) {
                        if (!(this.scroll.whitelist != null && !this.scroll.whitelist[E])) {
                          this.scroll.update();
                          var O = this.getNativeRange();
                          if (
                            !(
                              O == null ||
                              !O.native.collapsed ||
                              b.default.query(E, b.default.Scope.BLOCK)
                            )
                          ) {
                            if (O.start.node !== this.cursor.textNode) {
                              var _ = b.default.find(O.start.node, !1);
                              if (_ == null) return;
                              if (_ instanceof b.default.Leaf) {
                                var R = _.split(O.start.offset);
                                _.parent.insertBefore(this.cursor, R);
                              } else _.insertBefore(this.cursor, O.start.node);
                              this.cursor.attach();
                            }
                            this.cursor.format(E, p),
                              this.scroll.optimize(),
                              this.setNativeRange(
                                this.cursor.textNode,
                                this.cursor.textNode.data.length,
                              ),
                              this.update();
                          }
                        }
                      },
                    },
                    {
                      key: 'getBounds',
                      value: function (E) {
                        var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                          O = this.scroll.length();
                        (E = Math.min(E, O - 1)), (p = Math.min(E + p, O - 1) - E);
                        var _ = void 0,
                          R = this.scroll.leaf(E),
                          j = q(R, 2),
                          K = j[0],
                          Y = j[1];
                        if (K == null) return null;
                        var G = K.position(Y, !0),
                          C = q(G, 2);
                        (_ = C[0]), (Y = C[1]);
                        var M = document.createRange();
                        if (p > 0) {
                          M.setStart(_, Y);
                          var x = this.scroll.leaf(E + p),
                            I = q(x, 2);
                          if (((K = I[0]), (Y = I[1]), K == null)) return null;
                          var D = K.position(Y, !0),
                            H = q(D, 2);
                          return (_ = H[0]), (Y = H[1]), M.setEnd(_, Y), M.getBoundingClientRect();
                        } else {
                          var z = 'left',
                            L = void 0;
                          return (
                            _ instanceof Text
                              ? (Y < _.data.length
                                  ? (M.setStart(_, Y), M.setEnd(_, Y + 1))
                                  : (M.setStart(_, Y - 1), M.setEnd(_, Y), (z = 'right')),
                                (L = M.getBoundingClientRect()))
                              : ((L = K.domNode.getBoundingClientRect()), Y > 0 && (z = 'right')),
                            {
                              bottom: L.top + L.height,
                              height: L.height,
                              left: L[z],
                              right: L[z],
                              top: L.top,
                              width: 0,
                            }
                          );
                        }
                      },
                    },
                    {
                      key: 'getNativeRange',
                      value: function () {
                        var E = document.getSelection();
                        if (E == null || E.rangeCount <= 0) return null;
                        var p = E.getRangeAt(0);
                        if (p == null) return null;
                        var O = this.normalizeNative(p);
                        return r.info('getNativeRange', O), O;
                      },
                    },
                    {
                      key: 'getRange',
                      value: function () {
                        var E = this.getNativeRange();
                        if (E == null) return [null, null];
                        var p = this.normalizedToRange(E);
                        return [p, E];
                      },
                    },
                    {
                      key: 'hasFocus',
                      value: function () {
                        return document.activeElement === this.root;
                      },
                    },
                    {
                      key: 'normalizedToRange',
                      value: function (E) {
                        var p = this,
                          O = [[E.start.node, E.start.offset]];
                        E.native.collapsed || O.push([E.end.node, E.end.offset]);
                        var _ = O.map(function (K) {
                            var Y = q(K, 2),
                              G = Y[0],
                              C = Y[1],
                              M = b.default.find(G, !0),
                              x = M.offset(p.scroll);
                            return C === 0
                              ? x
                              : M instanceof b.default.Container
                              ? x + M.length()
                              : x + M.index(G, C);
                          }),
                          R = Math.min(Math.max.apply(Math, i(_)), this.scroll.length() - 1),
                          j = Math.min.apply(Math, [R].concat(i(_)));
                        return new h(j, R - j);
                      },
                    },
                    {
                      key: 'normalizeNative',
                      value: function (E) {
                        if (
                          !A(this.root, E.startContainer) ||
                          (!E.collapsed && !A(this.root, E.endContainer))
                        )
                          return null;
                        var p = {
                          start: { node: E.startContainer, offset: E.startOffset },
                          end: { node: E.endContainer, offset: E.endOffset },
                          native: E,
                        };
                        return (
                          [p.start, p.end].forEach(function (O) {
                            for (
                              var _ = O.node, R = O.offset;
                              !(_ instanceof Text) && _.childNodes.length > 0;

                            )
                              if (_.childNodes.length > R) (_ = _.childNodes[R]), (R = 0);
                              else if (_.childNodes.length === R)
                                (_ = _.lastChild),
                                  (R = _ instanceof Text ? _.data.length : _.childNodes.length + 1);
                              else break;
                            (O.node = _), (O.offset = R);
                          }),
                          p
                        );
                      },
                    },
                    {
                      key: 'rangeToNative',
                      value: function (E) {
                        var p = this,
                          O = E.collapsed ? [E.index] : [E.index, E.index + E.length],
                          _ = [],
                          R = this.scroll.length();
                        return (
                          O.forEach(function (j, K) {
                            j = Math.min(R - 1, j);
                            var Y = void 0,
                              G = p.scroll.leaf(j),
                              C = q(G, 2),
                              M = C[0],
                              x = C[1],
                              I = M.position(x, K !== 0),
                              D = q(I, 2);
                            (Y = D[0]), (x = D[1]), _.push(Y, x);
                          }),
                          _.length < 2 && (_ = _.concat(_)),
                          _
                        );
                      },
                    },
                    {
                      key: 'scrollIntoView',
                      value: function (E) {
                        var p = this.lastRange;
                        if (p != null) {
                          var O = this.getBounds(p.index, p.length);
                          if (O != null) {
                            var _ = this.scroll.length() - 1,
                              R = this.scroll.line(Math.min(p.index, _)),
                              j = q(R, 1),
                              K = j[0],
                              Y = K;
                            if (p.length > 0) {
                              var G = this.scroll.line(Math.min(p.index + p.length, _)),
                                C = q(G, 1);
                              Y = C[0];
                            }
                            if (!(K == null || Y == null)) {
                              var M = E.getBoundingClientRect();
                              O.top < M.top
                                ? (E.scrollTop -= M.top - O.top)
                                : O.bottom > M.bottom && (E.scrollTop += O.bottom - M.bottom);
                            }
                          }
                        }
                      },
                    },
                    {
                      key: 'setNativeRange',
                      value: function (E, p) {
                        var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : E,
                          _ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : p,
                          R = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
                        if (
                          (r.info('setNativeRange', E, p, O, _),
                          !(
                            E != null &&
                            (this.root.parentNode == null ||
                              E.parentNode == null ||
                              O.parentNode == null)
                          ))
                        ) {
                          var j = document.getSelection();
                          if (j != null)
                            if (E != null) {
                              this.hasFocus() || this.root.focus();
                              var K = (this.getNativeRange() || {}).native;
                              if (
                                K == null ||
                                R ||
                                E !== K.startContainer ||
                                p !== K.startOffset ||
                                O !== K.endContainer ||
                                _ !== K.endOffset
                              ) {
                                E.tagName == 'BR' &&
                                  ((p = [].indexOf.call(E.parentNode.childNodes, E)),
                                  (E = E.parentNode)),
                                  O.tagName == 'BR' &&
                                    ((_ = [].indexOf.call(O.parentNode.childNodes, O)),
                                    (O = O.parentNode));
                                var Y = document.createRange();
                                Y.setStart(E, p),
                                  Y.setEnd(O, _),
                                  j.removeAllRanges(),
                                  j.addRange(Y);
                              }
                            } else j.removeAllRanges(), this.root.blur(), document.body.focus();
                        }
                      },
                    },
                    {
                      key: 'setRange',
                      value: function (E) {
                        var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                          O =
                            arguments.length > 2 && arguments[2] !== void 0
                              ? arguments[2]
                              : s.default.sources.API;
                        if (
                          (typeof p == 'string' && ((O = p), (p = !1)),
                          r.info('setRange', E),
                          E != null)
                        ) {
                          var _ = this.rangeToNative(E);
                          this.setNativeRange.apply(this, i(_).concat([p]));
                        } else this.setNativeRange(null);
                        this.update(O);
                      },
                    },
                    {
                      key: 'update',
                      value: function () {
                        var E =
                            arguments.length > 0 && arguments[0] !== void 0
                              ? arguments[0]
                              : s.default.sources.USER,
                          p = this.lastRange,
                          O = this.getRange(),
                          _ = q(O, 2),
                          R = _[0],
                          j = _[1];
                        if (
                          ((this.lastRange = R),
                          this.lastRange != null && (this.savedRange = this.lastRange),
                          !(0, e.default)(p, this.lastRange))
                        ) {
                          var K;
                          !this.composing &&
                            j != null &&
                            j.native.collapsed &&
                            j.start.node !== this.cursor.textNode &&
                            this.cursor.restore();
                          var Y = [
                            s.default.events.SELECTION_CHANGE,
                            (0, d.default)(this.lastRange),
                            (0, d.default)(p),
                            E,
                          ];
                          if (
                            ((K = this.emitter).emit.apply(
                              K,
                              [s.default.events.EDITOR_CHANGE].concat(Y),
                            ),
                            E !== s.default.sources.SILENT)
                          ) {
                            var G;
                            (G = this.emitter).emit.apply(G, Y);
                          }
                        }
                      },
                    },
                  ]),
                  T
                );
              })();
            function A(T, P) {
              try {
                P.parentNode;
              } catch (E) {
                return !1;
              }
              return P instanceof Text && (P = P.parentNode), T.contains(P);
            }
            (w.Range = h), (w.default = N);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function s(a, u) {
                  for (var n = 0; n < u.length; n++) {
                    var i = u[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(a, i.key, i);
                  }
                }
                return function (a, u, n) {
                  return u && s(a.prototype, u), n && s(a, n), a;
                };
              })(),
              k = function s(a, u, n) {
                a === null && (a = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(a, u);
                if (i === void 0) {
                  var c = Object.getPrototypeOf(a);
                  return c === null ? void 0 : s(c, u, n);
                } else {
                  if ('value' in i) return i.value;
                  var r = i.get;
                  return r === void 0 ? void 0 : r.call(n);
                }
              },
              v = y(0),
              b = m(v);
            function m(s) {
              return s && s.__esModule ? s : { default: s };
            }
            function d(s, a) {
              if (!(s instanceof a)) throw new TypeError('Cannot call a class as a function');
            }
            function l(s, a) {
              if (!s)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return a && (typeof a == 'object' || typeof a == 'function') ? a : s;
            }
            function e(s, a) {
              if (typeof a != 'function' && a !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof a,
                );
              (s.prototype = Object.create(a && a.prototype, {
                constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 },
              })),
                a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : (s.__proto__ = a));
            }
            var t = (function (s) {
              e(a, s);
              function a() {
                return (
                  d(this, a),
                  l(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
                );
              }
              return (
                q(
                  a,
                  [
                    {
                      key: 'insertInto',
                      value: function (n, i) {
                        n.children.length === 0
                          ? k(
                              a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                              'insertInto',
                              this,
                            ).call(this, n, i)
                          : this.remove();
                      },
                    },
                    {
                      key: 'length',
                      value: function () {
                        return 0;
                      },
                    },
                    {
                      key: 'value',
                      value: function () {
                        return '';
                      },
                    },
                  ],
                  [{ key: 'value', value: function () {} }],
                ),
                a
              );
            })(b.default.Embed);
            (t.blotName = 'break'), (t.tagName = 'BR'), (w.default = t);
          },
          function (U, w, y) {
            'use strict';
            var q =
              (this && this.__extends) ||
              (function () {
                var l =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
                  };
                return function (e, t) {
                  l(e, t);
                  function s() {
                    this.constructor = e;
                  }
                  e.prototype =
                    t === null ? Object.create(t) : ((s.prototype = t.prototype), new s());
                };
              })();
            Object.defineProperty(w, '__esModule', { value: !0 });
            var k = y(44),
              v = y(30),
              b = y(1),
              m = (function (l) {
                q(e, l);
                function e(t) {
                  var s = l.call(this, t) || this;
                  return s.build(), s;
                }
                return (
                  (e.prototype.appendChild = function (t) {
                    this.insertBefore(t);
                  }),
                  (e.prototype.attach = function () {
                    l.prototype.attach.call(this),
                      this.children.forEach(function (t) {
                        t.attach();
                      });
                  }),
                  (e.prototype.build = function () {
                    var t = this;
                    (this.children = new k.default()),
                      [].slice
                        .call(this.domNode.childNodes)
                        .reverse()
                        .forEach(function (s) {
                          try {
                            var a = d(s);
                            t.insertBefore(a, t.children.head || void 0);
                          } catch (u) {
                            if (u instanceof b.ParchmentError) return;
                            throw u;
                          }
                        });
                  }),
                  (e.prototype.deleteAt = function (t, s) {
                    if (t === 0 && s === this.length()) return this.remove();
                    this.children.forEachAt(t, s, function (a, u, n) {
                      a.deleteAt(u, n);
                    });
                  }),
                  (e.prototype.descendant = function (t, s) {
                    var a = this.children.find(s),
                      u = a[0],
                      n = a[1];
                    return (t.blotName == null && t(u)) || (t.blotName != null && u instanceof t)
                      ? [u, n]
                      : u instanceof e
                      ? u.descendant(t, n)
                      : [null, -1];
                  }),
                  (e.prototype.descendants = function (t, s, a) {
                    s === void 0 && (s = 0), a === void 0 && (a = Number.MAX_VALUE);
                    var u = [],
                      n = a;
                    return (
                      this.children.forEachAt(s, a, function (i, c, r) {
                        ((t.blotName == null && t(i)) || (t.blotName != null && i instanceof t)) &&
                          u.push(i),
                          i instanceof e && (u = u.concat(i.descendants(t, c, n))),
                          (n -= r);
                      }),
                      u
                    );
                  }),
                  (e.prototype.detach = function () {
                    this.children.forEach(function (t) {
                      t.detach();
                    }),
                      l.prototype.detach.call(this);
                  }),
                  (e.prototype.formatAt = function (t, s, a, u) {
                    this.children.forEachAt(t, s, function (n, i, c) {
                      n.formatAt(i, c, a, u);
                    });
                  }),
                  (e.prototype.insertAt = function (t, s, a) {
                    var u = this.children.find(t),
                      n = u[0],
                      i = u[1];
                    if (n) n.insertAt(i, s, a);
                    else {
                      var c = a == null ? b.create('text', s) : b.create(s, a);
                      this.appendChild(c);
                    }
                  }),
                  (e.prototype.insertBefore = function (t, s) {
                    if (
                      this.statics.allowedChildren != null &&
                      !this.statics.allowedChildren.some(function (a) {
                        return t instanceof a;
                      })
                    )
                      throw new b.ParchmentError(
                        'Cannot insert ' + t.statics.blotName + ' into ' + this.statics.blotName,
                      );
                    t.insertInto(this, s);
                  }),
                  (e.prototype.length = function () {
                    return this.children.reduce(function (t, s) {
                      return t + s.length();
                    }, 0);
                  }),
                  (e.prototype.moveChildren = function (t, s) {
                    this.children.forEach(function (a) {
                      t.insertBefore(a, s);
                    });
                  }),
                  (e.prototype.optimize = function (t) {
                    if ((l.prototype.optimize.call(this, t), this.children.length === 0))
                      if (this.statics.defaultChild != null) {
                        var s = b.create(this.statics.defaultChild);
                        this.appendChild(s), s.optimize(t);
                      } else this.remove();
                  }),
                  (e.prototype.path = function (t, s) {
                    s === void 0 && (s = !1);
                    var a = this.children.find(t, s),
                      u = a[0],
                      n = a[1],
                      i = [[this, t]];
                    return u instanceof e
                      ? i.concat(u.path(n, s))
                      : (u != null && i.push([u, n]), i);
                  }),
                  (e.prototype.removeChild = function (t) {
                    this.children.remove(t);
                  }),
                  (e.prototype.replace = function (t) {
                    t instanceof e && t.moveChildren(this), l.prototype.replace.call(this, t);
                  }),
                  (e.prototype.split = function (t, s) {
                    if ((s === void 0 && (s = !1), !s)) {
                      if (t === 0) return this;
                      if (t === this.length()) return this.next;
                    }
                    var a = this.clone();
                    return (
                      this.parent.insertBefore(a, this.next),
                      this.children.forEachAt(t, this.length(), function (u, n, i) {
                        (u = u.split(n, s)), a.appendChild(u);
                      }),
                      a
                    );
                  }),
                  (e.prototype.unwrap = function () {
                    this.moveChildren(this.parent, this.next), this.remove();
                  }),
                  (e.prototype.update = function (t, s) {
                    var a = this,
                      u = [],
                      n = [];
                    t.forEach(function (i) {
                      i.target === a.domNode &&
                        i.type === 'childList' &&
                        (u.push.apply(u, i.addedNodes), n.push.apply(n, i.removedNodes));
                    }),
                      n.forEach(function (i) {
                        if (
                          !(
                            i.parentNode != null &&
                            i.tagName !== 'IFRAME' &&
                            document.body.compareDocumentPosition(i) &
                              Node.DOCUMENT_POSITION_CONTAINED_BY
                          )
                        ) {
                          var c = b.find(i);
                          c != null &&
                            (c.domNode.parentNode == null || c.domNode.parentNode === a.domNode) &&
                            c.detach();
                        }
                      }),
                      u
                        .filter(function (i) {
                          return i.parentNode == a.domNode;
                        })
                        .sort(function (i, c) {
                          return i === c
                            ? 0
                            : i.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_FOLLOWING
                            ? 1
                            : -1;
                        })
                        .forEach(function (i) {
                          var c = null;
                          i.nextSibling != null && (c = b.find(i.nextSibling));
                          var r = d(i);
                          (r.next != c || r.next == null) &&
                            (r.parent != null && r.parent.removeChild(a),
                            a.insertBefore(r, c || void 0));
                        });
                  }),
                  e
                );
              })(v.default);
            function d(l) {
              var e = b.find(l);
              if (e == null)
                try {
                  e = b.create(l);
                } catch (t) {
                  (e = b.create(b.Scope.INLINE)),
                    [].slice.call(l.childNodes).forEach(function (s) {
                      e.domNode.appendChild(s);
                    }),
                    l.parentNode && l.parentNode.replaceChild(e.domNode, l),
                    e.attach();
                }
              return e;
            }
            w.default = m;
          },
          function (U, w, y) {
            'use strict';
            var q =
              (this && this.__extends) ||
              (function () {
                var l =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
                  };
                return function (e, t) {
                  l(e, t);
                  function s() {
                    this.constructor = e;
                  }
                  e.prototype =
                    t === null ? Object.create(t) : ((s.prototype = t.prototype), new s());
                };
              })();
            Object.defineProperty(w, '__esModule', { value: !0 });
            var k = y(12),
              v = y(31),
              b = y(17),
              m = y(1),
              d = (function (l) {
                q(e, l);
                function e(t) {
                  var s = l.call(this, t) || this;
                  return (s.attributes = new v.default(s.domNode)), s;
                }
                return (
                  (e.formats = function (t) {
                    if (typeof this.tagName == 'string') return !0;
                    if (Array.isArray(this.tagName)) return t.tagName.toLowerCase();
                  }),
                  (e.prototype.format = function (t, s) {
                    var a = m.query(t);
                    a instanceof k.default
                      ? this.attributes.attribute(a, s)
                      : s &&
                        a != null &&
                        (t !== this.statics.blotName || this.formats()[t] !== s) &&
                        this.replaceWith(t, s);
                  }),
                  (e.prototype.formats = function () {
                    var t = this.attributes.values(),
                      s = this.statics.formats(this.domNode);
                    return s != null && (t[this.statics.blotName] = s), t;
                  }),
                  (e.prototype.replaceWith = function (t, s) {
                    var a = l.prototype.replaceWith.call(this, t, s);
                    return this.attributes.copy(a), a;
                  }),
                  (e.prototype.update = function (t, s) {
                    var a = this;
                    l.prototype.update.call(this, t, s),
                      t.some(function (u) {
                        return u.target === a.domNode && u.type === 'attributes';
                      }) && this.attributes.build();
                  }),
                  (e.prototype.wrap = function (t, s) {
                    var a = l.prototype.wrap.call(this, t, s);
                    return (
                      a instanceof e &&
                        a.statics.scope === this.statics.scope &&
                        this.attributes.move(a),
                      a
                    );
                  }),
                  e
                );
              })(b.default);
            w.default = d;
          },
          function (U, w, y) {
            'use strict';
            var q =
              (this && this.__extends) ||
              (function () {
                var m =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (d, l) {
                      d.__proto__ = l;
                    }) ||
                  function (d, l) {
                    for (var e in l) l.hasOwnProperty(e) && (d[e] = l[e]);
                  };
                return function (d, l) {
                  m(d, l);
                  function e() {
                    this.constructor = d;
                  }
                  d.prototype =
                    l === null ? Object.create(l) : ((e.prototype = l.prototype), new e());
                };
              })();
            Object.defineProperty(w, '__esModule', { value: !0 });
            var k = y(30),
              v = y(1),
              b = (function (m) {
                q(d, m);
                function d() {
                  return (m !== null && m.apply(this, arguments)) || this;
                }
                return (
                  (d.value = function (l) {
                    return !0;
                  }),
                  (d.prototype.index = function (l, e) {
                    return this.domNode === l ||
                      this.domNode.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY
                      ? Math.min(e, 1)
                      : -1;
                  }),
                  (d.prototype.position = function (l, e) {
                    var t = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                    return l > 0 && (t += 1), [this.parent.domNode, t];
                  }),
                  (d.prototype.value = function () {
                    var l;
                    return (
                      (l = {}),
                      (l[this.statics.blotName] = this.statics.value(this.domNode) || !0),
                      l
                    );
                  }),
                  (d.scope = v.Scope.INLINE_BLOT),
                  d
                );
              })(k.default);
            w.default = b;
          },
          function (U, w, y) {
            var q = y(11),
              k = y(3),
              v = {
                attributes: {
                  compose: function (m, d, l) {
                    typeof m != 'object' && (m = {}), typeof d != 'object' && (d = {});
                    var e = k(!0, {}, d);
                    l ||
                      (e = Object.keys(e).reduce(function (s, a) {
                        return e[a] != null && (s[a] = e[a]), s;
                      }, {}));
                    for (var t in m) m[t] !== void 0 && d[t] === void 0 && (e[t] = m[t]);
                    return Object.keys(e).length > 0 ? e : void 0;
                  },
                  diff: function (m, d) {
                    typeof m != 'object' && (m = {}), typeof d != 'object' && (d = {});
                    var l = Object.keys(m)
                      .concat(Object.keys(d))
                      .reduce(function (e, t) {
                        return q(m[t], d[t]) || (e[t] = d[t] === void 0 ? null : d[t]), e;
                      }, {});
                    return Object.keys(l).length > 0 ? l : void 0;
                  },
                  transform: function (m, d, l) {
                    if (typeof m != 'object') return d;
                    if (typeof d == 'object') {
                      if (!l) return d;
                      var e = Object.keys(d).reduce(function (t, s) {
                        return m[s] === void 0 && (t[s] = d[s]), t;
                      }, {});
                      return Object.keys(e).length > 0 ? e : void 0;
                    }
                  },
                },
                iterator: function (m) {
                  return new b(m);
                },
                length: function (m) {
                  return typeof m.delete == 'number'
                    ? m.delete
                    : typeof m.retain == 'number'
                    ? m.retain
                    : typeof m.insert == 'string'
                    ? m.insert.length
                    : 1;
                },
              };
            function b(m) {
              (this.ops = m), (this.index = 0), (this.offset = 0);
            }
            (b.prototype.hasNext = function () {
              return this.peekLength() < Infinity;
            }),
              (b.prototype.next = function (m) {
                m || (m = Infinity);
                var d = this.ops[this.index];
                if (d) {
                  var l = this.offset,
                    e = v.length(d);
                  if (
                    (m >= e - l
                      ? ((m = e - l), (this.index += 1), (this.offset = 0))
                      : (this.offset += m),
                    typeof d.delete == 'number')
                  )
                    return { delete: m };
                  var t = {};
                  return (
                    d.attributes && (t.attributes = d.attributes),
                    typeof d.retain == 'number'
                      ? (t.retain = m)
                      : typeof d.insert == 'string'
                      ? (t.insert = d.insert.substr(l, m))
                      : (t.insert = d.insert),
                    t
                  );
                } else return { retain: Infinity };
              }),
              (b.prototype.peek = function () {
                return this.ops[this.index];
              }),
              (b.prototype.peekLength = function () {
                return this.ops[this.index]
                  ? v.length(this.ops[this.index]) - this.offset
                  : Infinity;
              }),
              (b.prototype.peekType = function () {
                return this.ops[this.index]
                  ? typeof this.ops[this.index].delete == 'number'
                    ? 'delete'
                    : typeof this.ops[this.index].retain == 'number'
                    ? 'retain'
                    : 'insert'
                  : 'retain';
              }),
              (b.prototype.rest = function () {
                if (this.hasNext()) {
                  if (this.offset === 0) return this.ops.slice(this.index);
                  var m = this.offset,
                    d = this.index,
                    l = this.next(),
                    e = this.ops.slice(this.index);
                  return (this.offset = m), (this.index = d), [l].concat(e);
                } else return [];
              }),
              (U.exports = v);
          },
          function (U, w) {
            var y = (function () {
              'use strict';
              function q(a, u) {
                return u != null && a instanceof u;
              }
              var k;
              try {
                k = Map;
              } catch (a) {
                k = function () {};
              }
              var v;
              try {
                v = Set;
              } catch (a) {
                v = function () {};
              }
              var b;
              try {
                b = Promise;
              } catch (a) {
                b = function () {};
              }
              function m(a, u, n, i, c) {
                typeof u == 'object' &&
                  ((n = u.depth),
                  (i = u.prototype),
                  (c = u.includeNonEnumerable),
                  (u = u.circular));
                var r = [],
                  h = [],
                  N = typeof rt != 'undefined';
                typeof u == 'undefined' && (u = !0), typeof n == 'undefined' && (n = Infinity);
                function A(T, P) {
                  if (T === null) return null;
                  if (P === 0) return T;
                  var E, p;
                  if (typeof T != 'object') return T;
                  if (q(T, k)) E = new k();
                  else if (q(T, v)) E = new v();
                  else if (q(T, b))
                    E = new b(function (M, x) {
                      T.then(
                        function (I) {
                          M(A(I, P - 1));
                        },
                        function (I) {
                          x(A(I, P - 1));
                        },
                      );
                    });
                  else if (m.__isArray(T)) E = [];
                  else if (m.__isRegExp(T))
                    (E = new RegExp(T.source, s(T))), T.lastIndex && (E.lastIndex = T.lastIndex);
                  else if (m.__isDate(T)) E = new Date(T.getTime());
                  else {
                    if (N && rt.isBuffer(T))
                      return (
                        rt.allocUnsafe ? (E = rt.allocUnsafe(T.length)) : (E = new rt(T.length)),
                        T.copy(E),
                        E
                      );
                    q(T, Error)
                      ? (E = Object.create(T))
                      : typeof i == 'undefined'
                      ? ((p = Object.getPrototypeOf(T)), (E = Object.create(p)))
                      : ((E = Object.create(i)), (p = i));
                  }
                  if (u) {
                    var O = r.indexOf(T);
                    if (O != -1) return h[O];
                    r.push(T), h.push(E);
                  }
                  q(T, k) &&
                    T.forEach(function (M, x) {
                      var I = A(x, P - 1),
                        D = A(M, P - 1);
                      E.set(I, D);
                    }),
                    q(T, v) &&
                      T.forEach(function (M) {
                        var x = A(M, P - 1);
                        E.add(x);
                      });
                  for (var _ in T) {
                    var R;
                    p && (R = Object.getOwnPropertyDescriptor(p, _)),
                      !(R && R.set == null) && (E[_] = A(T[_], P - 1));
                  }
                  if (Object.getOwnPropertySymbols)
                    for (var j = Object.getOwnPropertySymbols(T), _ = 0; _ < j.length; _++) {
                      var K = j[_],
                        Y = Object.getOwnPropertyDescriptor(T, K);
                      (Y && !Y.enumerable && !c) ||
                        ((E[K] = A(T[K], P - 1)),
                        Y.enumerable || Object.defineProperty(E, K, { enumerable: !1 }));
                    }
                  if (c)
                    for (var G = Object.getOwnPropertyNames(T), _ = 0; _ < G.length; _++) {
                      var C = G[_],
                        Y = Object.getOwnPropertyDescriptor(T, C);
                      (Y && Y.enumerable) ||
                        ((E[C] = A(T[C], P - 1)), Object.defineProperty(E, C, { enumerable: !1 }));
                    }
                  return E;
                }
                return A(a, n);
              }
              m.clonePrototype = function (u) {
                if (u === null) return null;
                var n = function () {};
                return (n.prototype = u), new n();
              };
              function d(a) {
                return Object.prototype.toString.call(a);
              }
              m.__objToStr = d;
              function l(a) {
                return typeof a == 'object' && d(a) === '[object Date]';
              }
              m.__isDate = l;
              function e(a) {
                return typeof a == 'object' && d(a) === '[object Array]';
              }
              m.__isArray = e;
              function t(a) {
                return typeof a == 'object' && d(a) === '[object RegExp]';
              }
              m.__isRegExp = t;
              function s(a) {
                var u = '';
                return (
                  a.global && (u += 'g'), a.ignoreCase && (u += 'i'), a.multiline && (u += 'm'), u
                );
              }
              return (m.__getRegExpFlags = s), m;
            })();
            typeof U == 'object' && U.exports && (U.exports = y);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function E(p, O) {
                  var _ = [],
                    R = !0,
                    j = !1,
                    K = void 0;
                  try {
                    for (
                      var Y = p[Symbol.iterator](), G;
                      !(R = (G = Y.next()).done) && (_.push(G.value), !(O && _.length === O));
                      R = !0
                    );
                  } catch (C) {
                    (j = !0), (K = C);
                  } finally {
                    try {
                      !R && Y.return && Y.return();
                    } finally {
                      if (j) throw K;
                    }
                  }
                  return _;
                }
                return function (p, O) {
                  if (Array.isArray(p)) return p;
                  if (Symbol.iterator in Object(p)) return E(p, O);
                  throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
              })(),
              k = (function () {
                function E(p, O) {
                  for (var _ = 0; _ < O.length; _++) {
                    var R = O[_];
                    (R.enumerable = R.enumerable || !1),
                      (R.configurable = !0),
                      'value' in R && (R.writable = !0),
                      Object.defineProperty(p, R.key, R);
                  }
                }
                return function (p, O, _) {
                  return O && E(p.prototype, O), _ && E(p, _), p;
                };
              })(),
              v = function E(p, O, _) {
                p === null && (p = Function.prototype);
                var R = Object.getOwnPropertyDescriptor(p, O);
                if (R === void 0) {
                  var j = Object.getPrototypeOf(p);
                  return j === null ? void 0 : E(j, O, _);
                } else {
                  if ('value' in R) return R.value;
                  var K = R.get;
                  return K === void 0 ? void 0 : K.call(_);
                }
              },
              b = y(0),
              m = r(b),
              d = y(8),
              l = r(d),
              e = y(4),
              t = r(e),
              s = y(16),
              a = r(s),
              u = y(13),
              n = r(u),
              i = y(25),
              c = r(i);
            function r(E) {
              return E && E.__esModule ? E : { default: E };
            }
            function h(E, p) {
              if (!(E instanceof p)) throw new TypeError('Cannot call a class as a function');
            }
            function N(E, p) {
              if (!E)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return p && (typeof p == 'object' || typeof p == 'function') ? p : E;
            }
            function A(E, p) {
              if (typeof p != 'function' && p !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof p,
                );
              (E.prototype = Object.create(p && p.prototype, {
                constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 },
              })),
                p && (Object.setPrototypeOf ? Object.setPrototypeOf(E, p) : (E.__proto__ = p));
            }
            function T(E) {
              return E instanceof t.default || E instanceof e.BlockEmbed;
            }
            var P = (function (E) {
              A(p, E);
              function p(O, _) {
                h(this, p);
                var R = N(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, O));
                return (
                  (R.emitter = _.emitter),
                  Array.isArray(_.whitelist) &&
                    (R.whitelist = _.whitelist.reduce(function (j, K) {
                      return (j[K] = !0), j;
                    }, {})),
                  R.domNode.addEventListener('DOMNodeInserted', function () {}),
                  R.optimize(),
                  R.enable(),
                  R
                );
              }
              return (
                k(p, [
                  {
                    key: 'batchStart',
                    value: function () {
                      this.batch = !0;
                    },
                  },
                  {
                    key: 'batchEnd',
                    value: function () {
                      (this.batch = !1), this.optimize();
                    },
                  },
                  {
                    key: 'deleteAt',
                    value: function (_, R) {
                      var j = this.line(_),
                        K = q(j, 2),
                        Y = K[0],
                        G = K[1],
                        C = this.line(_ + R),
                        M = q(C, 1),
                        x = M[0];
                      if (
                        (v(
                          p.prototype.__proto__ || Object.getPrototypeOf(p.prototype),
                          'deleteAt',
                          this,
                        ).call(this, _, R),
                        x != null && Y !== x && G > 0)
                      ) {
                        if (Y instanceof e.BlockEmbed || x instanceof e.BlockEmbed) {
                          this.optimize();
                          return;
                        }
                        if (Y instanceof n.default) {
                          var I = Y.newlineIndex(Y.length(), !0);
                          if (I > -1 && ((Y = Y.split(I + 1)), Y === x)) {
                            this.optimize();
                            return;
                          }
                        } else if (x instanceof n.default) {
                          var D = x.newlineIndex(0);
                          D > -1 && x.split(D + 1);
                        }
                        var H = x.children.head instanceof a.default ? null : x.children.head;
                        Y.moveChildren(x, H), Y.remove();
                      }
                      this.optimize();
                    },
                  },
                  {
                    key: 'enable',
                    value: function () {
                      var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                      this.domNode.setAttribute('contenteditable', _);
                    },
                  },
                  {
                    key: 'formatAt',
                    value: function (_, R, j, K) {
                      (this.whitelist != null && !this.whitelist[j]) ||
                        (v(
                          p.prototype.__proto__ || Object.getPrototypeOf(p.prototype),
                          'formatAt',
                          this,
                        ).call(this, _, R, j, K),
                        this.optimize());
                    },
                  },
                  {
                    key: 'insertAt',
                    value: function (_, R, j) {
                      if (!(j != null && this.whitelist != null && !this.whitelist[R])) {
                        if (_ >= this.length())
                          if (j == null || m.default.query(R, m.default.Scope.BLOCK) == null) {
                            var K = m.default.create(this.statics.defaultChild);
                            this.appendChild(K),
                              j == null &&
                                R.endsWith(`
`) &&
                                (R = R.slice(0, -1)),
                              K.insertAt(0, R, j);
                          } else {
                            var Y = m.default.create(R, j);
                            this.appendChild(Y);
                          }
                        else
                          v(
                            p.prototype.__proto__ || Object.getPrototypeOf(p.prototype),
                            'insertAt',
                            this,
                          ).call(this, _, R, j);
                        this.optimize();
                      }
                    },
                  },
                  {
                    key: 'insertBefore',
                    value: function (_, R) {
                      if (_.statics.scope === m.default.Scope.INLINE_BLOT) {
                        var j = m.default.create(this.statics.defaultChild);
                        j.appendChild(_), (_ = j);
                      }
                      v(
                        p.prototype.__proto__ || Object.getPrototypeOf(p.prototype),
                        'insertBefore',
                        this,
                      ).call(this, _, R);
                    },
                  },
                  {
                    key: 'leaf',
                    value: function (_) {
                      return this.path(_).pop() || [null, -1];
                    },
                  },
                  {
                    key: 'line',
                    value: function (_) {
                      return _ === this.length() ? this.line(_ - 1) : this.descendant(T, _);
                    },
                  },
                  {
                    key: 'lines',
                    value: function () {
                      var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                        R =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : Number.MAX_VALUE,
                        j = function K(Y, G, C) {
                          var M = [],
                            x = C;
                          return (
                            Y.children.forEachAt(G, C, function (I, D, H) {
                              T(I)
                                ? M.push(I)
                                : I instanceof m.default.Container && (M = M.concat(K(I, D, x))),
                                (x -= H);
                            }),
                            M
                          );
                        };
                      return j(this, _, R);
                    },
                  },
                  {
                    key: 'optimize',
                    value: function () {
                      var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                        R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                      this.batch !== !0 &&
                        (v(
                          p.prototype.__proto__ || Object.getPrototypeOf(p.prototype),
                          'optimize',
                          this,
                        ).call(this, _, R),
                        _.length > 0 && this.emitter.emit(l.default.events.SCROLL_OPTIMIZE, _, R));
                    },
                  },
                  {
                    key: 'path',
                    value: function (_) {
                      return v(
                        p.prototype.__proto__ || Object.getPrototypeOf(p.prototype),
                        'path',
                        this,
                      )
                        .call(this, _)
                        .slice(1);
                    },
                  },
                  {
                    key: 'update',
                    value: function (_) {
                      if (this.batch !== !0) {
                        var R = l.default.sources.USER;
                        typeof _ == 'string' && (R = _),
                          Array.isArray(_) || (_ = this.observer.takeRecords()),
                          _.length > 0 &&
                            this.emitter.emit(l.default.events.SCROLL_BEFORE_UPDATE, R, _),
                          v(
                            p.prototype.__proto__ || Object.getPrototypeOf(p.prototype),
                            'update',
                            this,
                          ).call(this, _.concat([])),
                          _.length > 0 && this.emitter.emit(l.default.events.SCROLL_UPDATE, R, _);
                      }
                    },
                  },
                ]),
                p
              );
            })(m.default.Scroll);
            (P.blotName = 'scroll'),
              (P.className = 'ql-editor'),
              (P.tagName = 'DIV'),
              (P.defaultChild = 'block'),
              (P.allowedChildren = [t.default, e.BlockEmbed, c.default]),
              (w.default = P);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.SHORTKEY = w.default = void 0);
            var q =
                typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                  ? function (L) {
                      return typeof L;
                    }
                  : function (L) {
                      return L &&
                        typeof Symbol == 'function' &&
                        L.constructor === Symbol &&
                        L !== Symbol.prototype
                        ? 'symbol'
                        : typeof L;
                    },
              k = (function () {
                function L(F, W) {
                  var V = [],
                    Q = !0,
                    X = !1,
                    et = void 0;
                  try {
                    for (
                      var nt = F[Symbol.iterator](), lt;
                      !(Q = (lt = nt.next()).done) && (V.push(lt.value), !(W && V.length === W));
                      Q = !0
                    );
                  } catch (ut) {
                    (X = !0), (et = ut);
                  } finally {
                    try {
                      !Q && nt.return && nt.return();
                    } finally {
                      if (X) throw et;
                    }
                  }
                  return V;
                }
                return function (F, W) {
                  if (Array.isArray(F)) return F;
                  if (Symbol.iterator in Object(F)) return L(F, W);
                  throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
              })(),
              v = (function () {
                function L(F, W) {
                  for (var V = 0; V < W.length; V++) {
                    var Q = W[V];
                    (Q.enumerable = Q.enumerable || !1),
                      (Q.configurable = !0),
                      'value' in Q && (Q.writable = !0),
                      Object.defineProperty(F, Q.key, Q);
                  }
                }
                return function (F, W, V) {
                  return W && L(F.prototype, W), V && L(F, V), F;
                };
              })(),
              b = y(21),
              m = E(b),
              d = y(11),
              l = E(d),
              e = y(3),
              t = E(e),
              s = y(2),
              a = E(s),
              u = y(20),
              n = E(u),
              i = y(0),
              c = E(i),
              r = y(5),
              h = E(r),
              N = y(10),
              A = E(N),
              T = y(9),
              P = E(T);
            function E(L) {
              return L && L.__esModule ? L : { default: L };
            }
            function p(L, F, W) {
              return (
                F in L
                  ? Object.defineProperty(L, F, {
                      value: W,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (L[F] = W),
                L
              );
            }
            function O(L, F) {
              if (!(L instanceof F)) throw new TypeError('Cannot call a class as a function');
            }
            function _(L, F) {
              if (!L)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return F && (typeof F == 'object' || typeof F == 'function') ? F : L;
            }
            function R(L, F) {
              if (typeof F != 'function' && F !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof F,
                );
              (L.prototype = Object.create(F && F.prototype, {
                constructor: { value: L, enumerable: !1, writable: !0, configurable: !0 },
              })),
                F && (Object.setPrototypeOf ? Object.setPrototypeOf(L, F) : (L.__proto__ = F));
            }
            var j = (0, A.default)('quill:keyboard'),
              K = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey',
              Y = (function (L) {
                R(F, L),
                  v(F, null, [
                    {
                      key: 'match',
                      value: function (V, Q) {
                        return (
                          (Q = z(Q)),
                          ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (X) {
                            return !!Q[X] !== V[X] && Q[X] !== null;
                          })
                            ? !1
                            : Q.key === (V.which || V.keyCode)
                        );
                      },
                    },
                  ]);
                function F(W, V) {
                  O(this, F);
                  var Q = _(this, (F.__proto__ || Object.getPrototypeOf(F)).call(this, W, V));
                  return (
                    (Q.bindings = {}),
                    Object.keys(Q.options.bindings).forEach(function (X) {
                      (X === 'list autofill' &&
                        W.scroll.whitelist != null &&
                        !W.scroll.whitelist.list) ||
                        (Q.options.bindings[X] && Q.addBinding(Q.options.bindings[X]));
                    }),
                    Q.addBinding({ key: F.keys.ENTER, shiftKey: null }, I),
                    Q.addBinding(
                      { key: F.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null },
                      function () {},
                    ),
                    /Firefox/i.test(navigator.userAgent)
                      ? (Q.addBinding({ key: F.keys.BACKSPACE }, { collapsed: !0 }, C),
                        Q.addBinding({ key: F.keys.DELETE }, { collapsed: !0 }, M))
                      : (Q.addBinding(
                          { key: F.keys.BACKSPACE },
                          { collapsed: !0, prefix: /^.?$/ },
                          C,
                        ),
                        Q.addBinding({ key: F.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, M)),
                    Q.addBinding({ key: F.keys.BACKSPACE }, { collapsed: !1 }, x),
                    Q.addBinding({ key: F.keys.DELETE }, { collapsed: !1 }, x),
                    Q.addBinding(
                      {
                        key: F.keys.BACKSPACE,
                        altKey: null,
                        ctrlKey: null,
                        metaKey: null,
                        shiftKey: null,
                      },
                      { collapsed: !0, offset: 0 },
                      C,
                    ),
                    Q.listen(),
                    Q
                  );
                }
                return (
                  v(F, [
                    {
                      key: 'addBinding',
                      value: function (V) {
                        var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                          X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                          et = z(V);
                        if (et == null || et.key == null)
                          return j.warn('Attempted to add invalid keyboard binding', et);
                        typeof Q == 'function' && (Q = { handler: Q }),
                          typeof X == 'function' && (X = { handler: X }),
                          (et = (0, t.default)(et, Q, X)),
                          (this.bindings[et.key] = this.bindings[et.key] || []),
                          this.bindings[et.key].push(et);
                      },
                    },
                    {
                      key: 'listen',
                      value: function () {
                        var V = this;
                        this.quill.root.addEventListener('keydown', function (Q) {
                          if (!Q.defaultPrevented) {
                            var X = Q.which || Q.keyCode,
                              et = (V.bindings[X] || []).filter(function (ft) {
                                return F.match(Q, ft);
                              });
                            if (et.length !== 0) {
                              var nt = V.quill.getSelection();
                              if (!(nt == null || !V.quill.hasFocus())) {
                                var lt = V.quill.getLine(nt.index),
                                  ut = k(lt, 2),
                                  dt = ut[0],
                                  ht = ut[1],
                                  g = V.quill.getLeaf(nt.index),
                                  o = k(g, 2),
                                  f = o[0],
                                  S = o[1],
                                  B =
                                    nt.length === 0
                                      ? [f, S]
                                      : V.quill.getLeaf(nt.index + nt.length),
                                  Z = k(B, 2),
                                  $ = Z[0],
                                  J = Z[1],
                                  ot = f instanceof c.default.Text ? f.value().slice(0, S) : '',
                                  at = $ instanceof c.default.Text ? $.value().slice(J) : '',
                                  it = {
                                    collapsed: nt.length === 0,
                                    empty: nt.length === 0 && dt.length() <= 1,
                                    format: V.quill.getFormat(nt),
                                    offset: ht,
                                    prefix: ot,
                                    suffix: at,
                                  },
                                  st = et.some(function (ft) {
                                    if (
                                      (ft.collapsed != null && ft.collapsed !== it.collapsed) ||
                                      (ft.empty != null && ft.empty !== it.empty) ||
                                      (ft.offset != null && ft.offset !== it.offset)
                                    )
                                      return !1;
                                    if (Array.isArray(ft.format)) {
                                      if (
                                        ft.format.every(function (vt) {
                                          return it.format[vt] == null;
                                        })
                                      )
                                        return !1;
                                    } else if (
                                      q(ft.format) === 'object' &&
                                      !Object.keys(ft.format).every(function (vt) {
                                        return ft.format[vt] === !0
                                          ? it.format[vt] != null
                                          : ft.format[vt] === !1
                                          ? it.format[vt] == null
                                          : (0, l.default)(ft.format[vt], it.format[vt]);
                                      })
                                    )
                                      return !1;
                                    return (ft.prefix != null && !ft.prefix.test(it.prefix)) ||
                                      (ft.suffix != null && !ft.suffix.test(it.suffix))
                                      ? !1
                                      : ft.handler.call(V, nt, it) !== !0;
                                  });
                                st && Q.preventDefault();
                              }
                            }
                          }
                        });
                      },
                    },
                  ]),
                  F
                );
              })(P.default);
            (Y.keys = {
              BACKSPACE: 8,
              TAB: 9,
              ENTER: 13,
              ESCAPE: 27,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              DELETE: 46,
            }),
              (Y.DEFAULTS = {
                bindings: {
                  bold: H('bold'),
                  italic: H('italic'),
                  underline: H('underline'),
                  indent: {
                    key: Y.keys.TAB,
                    format: ['blockquote', 'indent', 'list'],
                    handler: function (F, W) {
                      if (W.collapsed && W.offset !== 0) return !0;
                      this.quill.format('indent', '+1', h.default.sources.USER);
                    },
                  },
                  outdent: {
                    key: Y.keys.TAB,
                    shiftKey: !0,
                    format: ['blockquote', 'indent', 'list'],
                    handler: function (F, W) {
                      if (W.collapsed && W.offset !== 0) return !0;
                      this.quill.format('indent', '-1', h.default.sources.USER);
                    },
                  },
                  'outdent backspace': {
                    key: Y.keys.BACKSPACE,
                    collapsed: !0,
                    shiftKey: null,
                    metaKey: null,
                    ctrlKey: null,
                    altKey: null,
                    format: ['indent', 'list'],
                    offset: 0,
                    handler: function (F, W) {
                      W.format.indent != null
                        ? this.quill.format('indent', '-1', h.default.sources.USER)
                        : W.format.list != null &&
                          this.quill.format('list', !1, h.default.sources.USER);
                    },
                  },
                  'indent code-block': D(!0),
                  'outdent code-block': D(!1),
                  'remove tab': {
                    key: Y.keys.TAB,
                    shiftKey: !0,
                    collapsed: !0,
                    prefix: /\t$/,
                    handler: function (F) {
                      this.quill.deleteText(F.index - 1, 1, h.default.sources.USER);
                    },
                  },
                  tab: {
                    key: Y.keys.TAB,
                    handler: function (F) {
                      this.quill.history.cutoff();
                      var W = new a.default().retain(F.index).delete(F.length).insert('	');
                      this.quill.updateContents(W, h.default.sources.USER),
                        this.quill.history.cutoff(),
                        this.quill.setSelection(F.index + 1, h.default.sources.SILENT);
                    },
                  },
                  'list empty enter': {
                    key: Y.keys.ENTER,
                    collapsed: !0,
                    format: ['list'],
                    empty: !0,
                    handler: function (F, W) {
                      this.quill.format('list', !1, h.default.sources.USER),
                        W.format.indent && this.quill.format('indent', !1, h.default.sources.USER);
                    },
                  },
                  'checklist enter': {
                    key: Y.keys.ENTER,
                    collapsed: !0,
                    format: { list: 'checked' },
                    handler: function (F) {
                      var W = this.quill.getLine(F.index),
                        V = k(W, 2),
                        Q = V[0],
                        X = V[1],
                        et = (0, t.default)({}, Q.formats(), { list: 'checked' }),
                        nt = new a.default()
                          .retain(F.index)
                          .insert(
                            `
`,
                            et,
                          )
                          .retain(Q.length() - X - 1)
                          .retain(1, { list: 'unchecked' });
                      this.quill.updateContents(nt, h.default.sources.USER),
                        this.quill.setSelection(F.index + 1, h.default.sources.SILENT),
                        this.quill.scrollIntoView();
                    },
                  },
                  'header enter': {
                    key: Y.keys.ENTER,
                    collapsed: !0,
                    format: ['header'],
                    suffix: /^$/,
                    handler: function (F, W) {
                      var V = this.quill.getLine(F.index),
                        Q = k(V, 2),
                        X = Q[0],
                        et = Q[1],
                        nt = new a.default()
                          .retain(F.index)
                          .insert(
                            `
`,
                            W.format,
                          )
                          .retain(X.length() - et - 1)
                          .retain(1, { header: null });
                      this.quill.updateContents(nt, h.default.sources.USER),
                        this.quill.setSelection(F.index + 1, h.default.sources.SILENT),
                        this.quill.scrollIntoView();
                    },
                  },
                  'list autofill': {
                    key: ' ',
                    collapsed: !0,
                    format: { list: !1 },
                    prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                    handler: function (F, W) {
                      var V = W.prefix.length,
                        Q = this.quill.getLine(F.index),
                        X = k(Q, 2),
                        et = X[0],
                        nt = X[1];
                      if (nt > V) return !0;
                      var lt = void 0;
                      switch (W.prefix.trim()) {
                        case '[]':
                        case '[ ]':
                          lt = 'unchecked';
                          break;
                        case '[x]':
                          lt = 'checked';
                          break;
                        case '-':
                        case '*':
                          lt = 'bullet';
                          break;
                        default:
                          lt = 'ordered';
                      }
                      this.quill.insertText(F.index, ' ', h.default.sources.USER),
                        this.quill.history.cutoff();
                      var ut = new a.default()
                        .retain(F.index - nt)
                        .delete(V + 1)
                        .retain(et.length() - 2 - nt)
                        .retain(1, { list: lt });
                      this.quill.updateContents(ut, h.default.sources.USER),
                        this.quill.history.cutoff(),
                        this.quill.setSelection(F.index - V, h.default.sources.SILENT);
                    },
                  },
                  'code exit': {
                    key: Y.keys.ENTER,
                    collapsed: !0,
                    format: ['code-block'],
                    prefix: /\n\n$/,
                    suffix: /^\s+$/,
                    handler: function (F) {
                      var W = this.quill.getLine(F.index),
                        V = k(W, 2),
                        Q = V[0],
                        X = V[1],
                        et = new a.default()
                          .retain(F.index + Q.length() - X - 2)
                          .retain(1, { 'code-block': null })
                          .delete(1);
                      this.quill.updateContents(et, h.default.sources.USER);
                    },
                  },
                  'embed left': G(Y.keys.LEFT, !1),
                  'embed left shift': G(Y.keys.LEFT, !0),
                  'embed right': G(Y.keys.RIGHT, !1),
                  'embed right shift': G(Y.keys.RIGHT, !0),
                },
              });
            function G(L, F) {
              var W,
                V = L === Y.keys.LEFT ? 'prefix' : 'suffix';
              return (
                (W = { key: L, shiftKey: F, altKey: null }),
                p(W, V, /^$/),
                p(W, 'handler', function (X) {
                  var et = X.index;
                  L === Y.keys.RIGHT && (et += X.length + 1);
                  var nt = this.quill.getLeaf(et),
                    lt = k(nt, 1),
                    ut = lt[0];
                  return ut instanceof c.default.Embed
                    ? (L === Y.keys.LEFT
                        ? F
                          ? this.quill.setSelection(
                              X.index - 1,
                              X.length + 1,
                              h.default.sources.USER,
                            )
                          : this.quill.setSelection(X.index - 1, h.default.sources.USER)
                        : F
                        ? this.quill.setSelection(X.index, X.length + 1, h.default.sources.USER)
                        : this.quill.setSelection(X.index + X.length + 1, h.default.sources.USER),
                      !1)
                    : !0;
                }),
                W
              );
            }
            function C(L, F) {
              if (!(L.index === 0 || this.quill.getLength() <= 1)) {
                var W = this.quill.getLine(L.index),
                  V = k(W, 1),
                  Q = V[0],
                  X = {};
                if (F.offset === 0) {
                  var et = this.quill.getLine(L.index - 1),
                    nt = k(et, 1),
                    lt = nt[0];
                  if (lt != null && lt.length() > 1) {
                    var ut = Q.formats(),
                      dt = this.quill.getFormat(L.index - 1, 1);
                    X = n.default.attributes.diff(ut, dt) || {};
                  }
                }
                var ht = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(F.prefix) ? 2 : 1;
                this.quill.deleteText(L.index - ht, ht, h.default.sources.USER),
                  Object.keys(X).length > 0 &&
                    this.quill.formatLine(L.index - ht, ht, X, h.default.sources.USER),
                  this.quill.focus();
              }
            }
            function M(L, F) {
              var W = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(F.suffix) ? 2 : 1;
              if (!(L.index >= this.quill.getLength() - W)) {
                var V = {},
                  Q = 0,
                  X = this.quill.getLine(L.index),
                  et = k(X, 1),
                  nt = et[0];
                if (F.offset >= nt.length() - 1) {
                  var lt = this.quill.getLine(L.index + 1),
                    ut = k(lt, 1),
                    dt = ut[0];
                  if (dt) {
                    var ht = nt.formats(),
                      g = this.quill.getFormat(L.index, 1);
                    (V = n.default.attributes.diff(ht, g) || {}), (Q = dt.length());
                  }
                }
                this.quill.deleteText(L.index, W, h.default.sources.USER),
                  Object.keys(V).length > 0 &&
                    this.quill.formatLine(L.index + Q - 1, W, V, h.default.sources.USER);
              }
            }
            function x(L) {
              var F = this.quill.getLines(L),
                W = {};
              if (F.length > 1) {
                var V = F[0].formats(),
                  Q = F[F.length - 1].formats();
                W = n.default.attributes.diff(Q, V) || {};
              }
              this.quill.deleteText(L, h.default.sources.USER),
                Object.keys(W).length > 0 &&
                  this.quill.formatLine(L.index, 1, W, h.default.sources.USER),
                this.quill.setSelection(L.index, h.default.sources.SILENT),
                this.quill.focus();
            }
            function I(L, F) {
              var W = this;
              L.length > 0 && this.quill.scroll.deleteAt(L.index, L.length);
              var V = Object.keys(F.format).reduce(function (Q, X) {
                return (
                  c.default.query(X, c.default.Scope.BLOCK) &&
                    !Array.isArray(F.format[X]) &&
                    (Q[X] = F.format[X]),
                  Q
                );
              }, {});
              this.quill.insertText(
                L.index,
                `
`,
                V,
                h.default.sources.USER,
              ),
                this.quill.setSelection(L.index + 1, h.default.sources.SILENT),
                this.quill.focus(),
                Object.keys(F.format).forEach(function (Q) {
                  V[Q] == null &&
                    (Array.isArray(F.format[Q]) ||
                      (Q !== 'link' && W.quill.format(Q, F.format[Q], h.default.sources.USER)));
                });
            }
            function D(L) {
              return {
                key: Y.keys.TAB,
                shiftKey: !L,
                format: { 'code-block': !0 },
                handler: function (W) {
                  var V = c.default.query('code-block'),
                    Q = W.index,
                    X = W.length,
                    et = this.quill.scroll.descendant(V, Q),
                    nt = k(et, 2),
                    lt = nt[0],
                    ut = nt[1];
                  if (lt != null) {
                    var dt = this.quill.getIndex(lt),
                      ht = lt.newlineIndex(ut, !0) + 1,
                      g = lt.newlineIndex(dt + ut + X),
                      o = lt.domNode.textContent.slice(ht, g).split(`
`);
                    (ut = 0),
                      o.forEach(function (f, S) {
                        L
                          ? (lt.insertAt(ht + ut, V.TAB),
                            (ut += V.TAB.length),
                            S === 0 ? (Q += V.TAB.length) : (X += V.TAB.length))
                          : f.startsWith(V.TAB) &&
                            (lt.deleteAt(ht + ut, V.TAB.length),
                            (ut -= V.TAB.length),
                            S === 0 ? (Q -= V.TAB.length) : (X -= V.TAB.length)),
                          (ut += f.length + 1);
                      }),
                      this.quill.update(h.default.sources.USER),
                      this.quill.setSelection(Q, X, h.default.sources.SILENT);
                  }
                },
              };
            }
            function H(L) {
              return {
                key: L[0].toUpperCase(),
                shortKey: !0,
                handler: function (W, V) {
                  this.quill.format(L, !V.format[L], h.default.sources.USER);
                },
              };
            }
            function z(L) {
              if (typeof L == 'string' || typeof L == 'number') return z({ key: L });
              if (
                ((typeof L == 'undefined' ? 'undefined' : q(L)) === 'object' &&
                  (L = (0, m.default)(L, !1)),
                typeof L.key == 'string')
              )
                if (Y.keys[L.key.toUpperCase()] != null) L.key = Y.keys[L.key.toUpperCase()];
                else if (L.key.length === 1) L.key = L.key.toUpperCase().charCodeAt(0);
                else return null;
              return L.shortKey && ((L[K] = L.shortKey), delete L.shortKey), L;
            }
            (w.default = Y), (w.SHORTKEY = K);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function n(i, c) {
                  var r = [],
                    h = !0,
                    N = !1,
                    A = void 0;
                  try {
                    for (
                      var T = i[Symbol.iterator](), P;
                      !(h = (P = T.next()).done) && (r.push(P.value), !(c && r.length === c));
                      h = !0
                    );
                  } catch (E) {
                    (N = !0), (A = E);
                  } finally {
                    try {
                      !h && T.return && T.return();
                    } finally {
                      if (N) throw A;
                    }
                  }
                  return r;
                }
                return function (i, c) {
                  if (Array.isArray(i)) return i;
                  if (Symbol.iterator in Object(i)) return n(i, c);
                  throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
              })(),
              k = function n(i, c, r) {
                i === null && (i = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(i, c);
                if (h === void 0) {
                  var N = Object.getPrototypeOf(i);
                  return N === null ? void 0 : n(N, c, r);
                } else {
                  if ('value' in h) return h.value;
                  var A = h.get;
                  return A === void 0 ? void 0 : A.call(r);
                }
              },
              v = (function () {
                function n(i, c) {
                  for (var r = 0; r < c.length; r++) {
                    var h = c[r];
                    (h.enumerable = h.enumerable || !1),
                      (h.configurable = !0),
                      'value' in h && (h.writable = !0),
                      Object.defineProperty(i, h.key, h);
                  }
                }
                return function (i, c, r) {
                  return c && n(i.prototype, c), r && n(i, r), i;
                };
              })(),
              b = y(0),
              m = e(b),
              d = y(7),
              l = e(d);
            function e(n) {
              return n && n.__esModule ? n : { default: n };
            }
            function t(n, i) {
              if (!(n instanceof i)) throw new TypeError('Cannot call a class as a function');
            }
            function s(n, i) {
              if (!n)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return i && (typeof i == 'object' || typeof i == 'function') ? i : n;
            }
            function a(n, i) {
              if (typeof i != 'function' && i !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof i,
                );
              (n.prototype = Object.create(i && i.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
              })),
                i && (Object.setPrototypeOf ? Object.setPrototypeOf(n, i) : (n.__proto__ = i));
            }
            var u = (function (n) {
              a(i, n), v(i, null, [{ key: 'value', value: function () {} }]);
              function i(c, r) {
                t(this, i);
                var h = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, c));
                return (
                  (h.selection = r),
                  (h.textNode = document.createTextNode(i.CONTENTS)),
                  h.domNode.appendChild(h.textNode),
                  (h._length = 0),
                  h
                );
              }
              return (
                v(i, [
                  {
                    key: 'detach',
                    value: function () {
                      this.parent != null && this.parent.removeChild(this);
                    },
                  },
                  {
                    key: 'format',
                    value: function (r, h) {
                      if (this._length !== 0)
                        return k(
                          i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                          'format',
                          this,
                        ).call(this, r, h);
                      for (
                        var N = this, A = 0;
                        N != null && N.statics.scope !== m.default.Scope.BLOCK_BLOT;

                      )
                        (A += N.offset(N.parent)), (N = N.parent);
                      N != null &&
                        ((this._length = i.CONTENTS.length),
                        N.optimize(),
                        N.formatAt(A, i.CONTENTS.length, r, h),
                        (this._length = 0));
                    },
                  },
                  {
                    key: 'index',
                    value: function (r, h) {
                      return r === this.textNode
                        ? 0
                        : k(
                            i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                            'index',
                            this,
                          ).call(this, r, h);
                    },
                  },
                  {
                    key: 'length',
                    value: function () {
                      return this._length;
                    },
                  },
                  {
                    key: 'position',
                    value: function () {
                      return [this.textNode, this.textNode.data.length];
                    },
                  },
                  {
                    key: 'remove',
                    value: function () {
                      k(
                        i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                        'remove',
                        this,
                      ).call(this),
                        (this.parent = null);
                    },
                  },
                  {
                    key: 'restore',
                    value: function () {
                      if (!(this.selection.composing || this.parent == null)) {
                        var r = this.textNode,
                          h = this.selection.getNativeRange(),
                          N = void 0,
                          A = void 0,
                          T = void 0;
                        if (h != null && h.start.node === r && h.end.node === r) {
                          var P = [r, h.start.offset, h.end.offset];
                          (N = P[0]), (A = P[1]), (T = P[2]);
                        }
                        for (
                          ;
                          this.domNode.lastChild != null &&
                          this.domNode.lastChild !== this.textNode;

                        )
                          this.domNode.parentNode.insertBefore(
                            this.domNode.lastChild,
                            this.domNode,
                          );
                        if (this.textNode.data !== i.CONTENTS) {
                          var E = this.textNode.data.split(i.CONTENTS).join('');
                          this.next instanceof l.default
                            ? ((N = this.next.domNode),
                              this.next.insertAt(0, E),
                              (this.textNode.data = i.CONTENTS))
                            : ((this.textNode.data = E),
                              this.parent.insertBefore(m.default.create(this.textNode), this),
                              (this.textNode = document.createTextNode(i.CONTENTS)),
                              this.domNode.appendChild(this.textNode));
                        }
                        if ((this.remove(), A != null)) {
                          var p = [A, T].map(function (_) {
                              return Math.max(0, Math.min(N.data.length, _ - 1));
                            }),
                            O = q(p, 2);
                          return (
                            (A = O[0]),
                            (T = O[1]),
                            { startNode: N, startOffset: A, endNode: N, endOffset: T }
                          );
                        }
                      }
                    },
                  },
                  {
                    key: 'update',
                    value: function (r, h) {
                      var N = this;
                      if (
                        r.some(function (T) {
                          return T.type === 'characterData' && T.target === N.textNode;
                        })
                      ) {
                        var A = this.restore();
                        A && (h.range = A);
                      }
                    },
                  },
                  {
                    key: 'value',
                    value: function () {
                      return '';
                    },
                  },
                ]),
                i
              );
            })(m.default.Embed);
            (u.blotName = 'cursor'),
              (u.className = 'ql-cursor'),
              (u.tagName = 'span'),
              (u.CONTENTS = '\uFEFF'),
              (w.default = u);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(0),
              k = m(q),
              v = y(4),
              b = m(v);
            function m(s) {
              return s && s.__esModule ? s : { default: s };
            }
            function d(s, a) {
              if (!(s instanceof a)) throw new TypeError('Cannot call a class as a function');
            }
            function l(s, a) {
              if (!s)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return a && (typeof a == 'object' || typeof a == 'function') ? a : s;
            }
            function e(s, a) {
              if (typeof a != 'function' && a !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof a,
                );
              (s.prototype = Object.create(a && a.prototype, {
                constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 },
              })),
                a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : (s.__proto__ = a));
            }
            var t = (function (s) {
              e(a, s);
              function a() {
                return (
                  d(this, a),
                  l(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
                );
              }
              return a;
            })(k.default.Container);
            (t.allowedChildren = [b.default, v.BlockEmbed, t]), (w.default = t);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.ColorStyle = w.ColorClass = w.ColorAttributor = void 0);
            var q = (function () {
                function u(n, i) {
                  for (var c = 0; c < i.length; c++) {
                    var r = i[c];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(n, r.key, r);
                  }
                }
                return function (n, i, c) {
                  return i && u(n.prototype, i), c && u(n, c), n;
                };
              })(),
              k = function u(n, i, c) {
                n === null && (n = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(n, i);
                if (r === void 0) {
                  var h = Object.getPrototypeOf(n);
                  return h === null ? void 0 : u(h, i, c);
                } else {
                  if ('value' in r) return r.value;
                  var N = r.get;
                  return N === void 0 ? void 0 : N.call(c);
                }
              },
              v = y(0),
              b = m(v);
            function m(u) {
              return u && u.__esModule ? u : { default: u };
            }
            function d(u, n) {
              if (!(u instanceof n)) throw new TypeError('Cannot call a class as a function');
            }
            function l(u, n) {
              if (!u)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return n && (typeof n == 'object' || typeof n == 'function') ? n : u;
            }
            function e(u, n) {
              if (typeof n != 'function' && n !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof n,
                );
              (u.prototype = Object.create(n && n.prototype, {
                constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
              })),
                n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : (u.__proto__ = n));
            }
            var t = (function (u) {
                e(n, u);
                function n() {
                  return (
                    d(this, n),
                    l(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                  );
                }
                return (
                  q(n, [
                    {
                      key: 'value',
                      value: function (c) {
                        var r = k(
                          n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                          'value',
                          this,
                        ).call(this, c);
                        return r.startsWith('rgb(')
                          ? ((r = r.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '')),
                            '#' +
                              r
                                .split(',')
                                .map(function (h) {
                                  return ('00' + parseInt(h).toString(16)).slice(-2);
                                })
                                .join(''))
                          : r;
                      },
                    },
                  ]),
                  n
                );
              })(b.default.Attributor.Style),
              s = new b.default.Attributor.Class('color', 'ql-color', {
                scope: b.default.Scope.INLINE,
              }),
              a = new t('color', 'color', { scope: b.default.Scope.INLINE });
            (w.ColorAttributor = t), (w.ColorClass = s), (w.ColorStyle = a);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.sanitize = w.default = void 0);
            var q = (function () {
                function a(u, n) {
                  for (var i = 0; i < n.length; i++) {
                    var c = n[i];
                    (c.enumerable = c.enumerable || !1),
                      (c.configurable = !0),
                      'value' in c && (c.writable = !0),
                      Object.defineProperty(u, c.key, c);
                  }
                }
                return function (u, n, i) {
                  return n && a(u.prototype, n), i && a(u, i), u;
                };
              })(),
              k = function a(u, n, i) {
                u === null && (u = Function.prototype);
                var c = Object.getOwnPropertyDescriptor(u, n);
                if (c === void 0) {
                  var r = Object.getPrototypeOf(u);
                  return r === null ? void 0 : a(r, n, i);
                } else {
                  if ('value' in c) return c.value;
                  var h = c.get;
                  return h === void 0 ? void 0 : h.call(i);
                }
              },
              v = y(6),
              b = m(v);
            function m(a) {
              return a && a.__esModule ? a : { default: a };
            }
            function d(a, u) {
              if (!(a instanceof u)) throw new TypeError('Cannot call a class as a function');
            }
            function l(a, u) {
              if (!a)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return u && (typeof u == 'object' || typeof u == 'function') ? u : a;
            }
            function e(a, u) {
              if (typeof u != 'function' && u !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof u,
                );
              (a.prototype = Object.create(u && u.prototype, {
                constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
              })),
                u && (Object.setPrototypeOf ? Object.setPrototypeOf(a, u) : (a.__proto__ = u));
            }
            var t = (function (a) {
              e(u, a);
              function u() {
                return (
                  d(this, u),
                  l(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments))
                );
              }
              return (
                q(
                  u,
                  [
                    {
                      key: 'format',
                      value: function (i, c) {
                        if (i !== this.statics.blotName || !c)
                          return k(
                            u.prototype.__proto__ || Object.getPrototypeOf(u.prototype),
                            'format',
                            this,
                          ).call(this, i, c);
                        (c = this.constructor.sanitize(c)), this.domNode.setAttribute('href', c);
                      },
                    },
                  ],
                  [
                    {
                      key: 'create',
                      value: function (i) {
                        var c = k(u.__proto__ || Object.getPrototypeOf(u), 'create', this).call(
                          this,
                          i,
                        );
                        return (
                          (i = this.sanitize(i)),
                          c.setAttribute('href', i),
                          c.setAttribute('rel', 'noopener noreferrer'),
                          c.setAttribute('target', '_blank'),
                          c
                        );
                      },
                    },
                    {
                      key: 'formats',
                      value: function (i) {
                        return i.getAttribute('href');
                      },
                    },
                    {
                      key: 'sanitize',
                      value: function (i) {
                        return s(i, this.PROTOCOL_WHITELIST) ? i : this.SANITIZED_URL;
                      },
                    },
                  ],
                ),
                u
              );
            })(b.default);
            (t.blotName = 'link'),
              (t.tagName = 'A'),
              (t.SANITIZED_URL = 'about:blank'),
              (t.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel']);
            function s(a, u) {
              var n = document.createElement('a');
              n.href = a;
              var i = n.href.slice(0, n.href.indexOf(':'));
              return u.indexOf(i) > -1;
            }
            (w.default = t), (w.sanitize = s);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q =
                typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                  ? function (u) {
                      return typeof u;
                    }
                  : function (u) {
                      return u &&
                        typeof Symbol == 'function' &&
                        u.constructor === Symbol &&
                        u !== Symbol.prototype
                        ? 'symbol'
                        : typeof u;
                    },
              k = (function () {
                function u(n, i) {
                  for (var c = 0; c < i.length; c++) {
                    var r = i[c];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(n, r.key, r);
                  }
                }
                return function (n, i, c) {
                  return i && u(n.prototype, i), c && u(n, c), n;
                };
              })(),
              v = y(23),
              b = l(v),
              m = y(107),
              d = l(m);
            function l(u) {
              return u && u.__esModule ? u : { default: u };
            }
            function e(u, n) {
              if (!(u instanceof n)) throw new TypeError('Cannot call a class as a function');
            }
            var t = 0;
            function s(u, n) {
              u.setAttribute(n, u.getAttribute(n) !== 'true');
            }
            var a = (function () {
              function u(n) {
                var i = this;
                e(this, u),
                  (this.select = n),
                  (this.container = document.createElement('span')),
                  this.buildPicker(),
                  (this.select.style.display = 'none'),
                  this.select.parentNode.insertBefore(this.container, this.select),
                  this.label.addEventListener('mousedown', function () {
                    i.togglePicker();
                  }),
                  this.label.addEventListener('keydown', function (c) {
                    switch (c.keyCode) {
                      case b.default.keys.ENTER:
                        i.togglePicker();
                        break;
                      case b.default.keys.ESCAPE:
                        i.escape(), c.preventDefault();
                        break;
                      default:
                    }
                  }),
                  this.select.addEventListener('change', this.update.bind(this));
              }
              return (
                k(u, [
                  {
                    key: 'togglePicker',
                    value: function () {
                      this.container.classList.toggle('ql-expanded'),
                        s(this.label, 'aria-expanded'),
                        s(this.options, 'aria-hidden');
                    },
                  },
                  {
                    key: 'buildItem',
                    value: function (i) {
                      var c = this,
                        r = document.createElement('span');
                      return (
                        (r.tabIndex = '0'),
                        r.setAttribute('role', 'button'),
                        r.classList.add('ql-picker-item'),
                        i.hasAttribute('value') &&
                          r.setAttribute('data-value', i.getAttribute('value')),
                        i.textContent && r.setAttribute('data-label', i.textContent),
                        r.addEventListener('click', function () {
                          c.selectItem(r, !0);
                        }),
                        r.addEventListener('keydown', function (h) {
                          switch (h.keyCode) {
                            case b.default.keys.ENTER:
                              c.selectItem(r, !0), h.preventDefault();
                              break;
                            case b.default.keys.ESCAPE:
                              c.escape(), h.preventDefault();
                              break;
                            default:
                          }
                        }),
                        r
                      );
                    },
                  },
                  {
                    key: 'buildLabel',
                    value: function () {
                      var i = document.createElement('span');
                      return (
                        i.classList.add('ql-picker-label'),
                        (i.innerHTML = d.default),
                        (i.tabIndex = '0'),
                        i.setAttribute('role', 'button'),
                        i.setAttribute('aria-expanded', 'false'),
                        this.container.appendChild(i),
                        i
                      );
                    },
                  },
                  {
                    key: 'buildOptions',
                    value: function () {
                      var i = this,
                        c = document.createElement('span');
                      c.classList.add('ql-picker-options'),
                        c.setAttribute('aria-hidden', 'true'),
                        (c.tabIndex = '-1'),
                        (c.id = 'ql-picker-options-' + t),
                        (t += 1),
                        this.label.setAttribute('aria-controls', c.id),
                        (this.options = c),
                        [].slice.call(this.select.options).forEach(function (r) {
                          var h = i.buildItem(r);
                          c.appendChild(h), r.selected === !0 && i.selectItem(h);
                        }),
                        this.container.appendChild(c);
                    },
                  },
                  {
                    key: 'buildPicker',
                    value: function () {
                      var i = this;
                      [].slice.call(this.select.attributes).forEach(function (c) {
                        i.container.setAttribute(c.name, c.value);
                      }),
                        this.container.classList.add('ql-picker'),
                        (this.label = this.buildLabel()),
                        this.buildOptions();
                    },
                  },
                  {
                    key: 'escape',
                    value: function () {
                      var i = this;
                      this.close(),
                        setTimeout(function () {
                          return i.label.focus();
                        }, 1);
                    },
                  },
                  {
                    key: 'close',
                    value: function () {
                      this.container.classList.remove('ql-expanded'),
                        this.label.setAttribute('aria-expanded', 'false'),
                        this.options.setAttribute('aria-hidden', 'true');
                    },
                  },
                  {
                    key: 'selectItem',
                    value: function (i) {
                      var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                        r = this.container.querySelector('.ql-selected');
                      if (
                        i !== r &&
                        (r != null && r.classList.remove('ql-selected'),
                        i != null &&
                          (i.classList.add('ql-selected'),
                          (this.select.selectedIndex = [].indexOf.call(i.parentNode.children, i)),
                          i.hasAttribute('data-value')
                            ? this.label.setAttribute('data-value', i.getAttribute('data-value'))
                            : this.label.removeAttribute('data-value'),
                          i.hasAttribute('data-label')
                            ? this.label.setAttribute('data-label', i.getAttribute('data-label'))
                            : this.label.removeAttribute('data-label'),
                          c))
                      ) {
                        if (typeof Event == 'function')
                          this.select.dispatchEvent(new Event('change'));
                        else if (
                          (typeof Event == 'undefined' ? 'undefined' : q(Event)) === 'object'
                        ) {
                          var h = document.createEvent('Event');
                          h.initEvent('change', !0, !0), this.select.dispatchEvent(h);
                        }
                        this.close();
                      }
                    },
                  },
                  {
                    key: 'update',
                    value: function () {
                      var i = void 0;
                      if (this.select.selectedIndex > -1) {
                        var c =
                          this.container.querySelector('.ql-picker-options').children[
                            this.select.selectedIndex
                          ];
                        (i = this.select.options[this.select.selectedIndex]), this.selectItem(c);
                      } else this.selectItem(null);
                      var r = i != null && i !== this.select.querySelector('option[selected]');
                      this.label.classList.toggle('ql-active', r);
                    },
                  },
                ]),
                u
              );
            })();
            w.default = a;
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(0),
              k = j(q),
              v = y(5),
              b = j(v),
              m = y(4),
              d = j(m),
              l = y(16),
              e = j(l),
              t = y(25),
              s = j(t),
              a = y(24),
              u = j(a),
              n = y(35),
              i = j(n),
              c = y(6),
              r = j(c),
              h = y(22),
              N = j(h),
              A = y(7),
              T = j(A),
              P = y(55),
              E = j(P),
              p = y(42),
              O = j(p),
              _ = y(23),
              R = j(_);
            function j(K) {
              return K && K.__esModule ? K : { default: K };
            }
            b.default.register({
              'blots/block': d.default,
              'blots/block/embed': m.BlockEmbed,
              'blots/break': e.default,
              'blots/container': s.default,
              'blots/cursor': u.default,
              'blots/embed': i.default,
              'blots/inline': r.default,
              'blots/scroll': N.default,
              'blots/text': T.default,
              'modules/clipboard': E.default,
              'modules/history': O.default,
              'modules/keyboard': R.default,
            }),
              k.default.register(d.default, e.default, u.default, r.default, N.default, T.default),
              (w.default = b.default);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(1),
              k = (function () {
                function v(b) {
                  (this.domNode = b), (this.domNode[q.DATA_KEY] = { blot: this });
                }
                return (
                  Object.defineProperty(v.prototype, 'statics', {
                    get: function () {
                      return this.constructor;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  (v.create = function (b) {
                    if (this.tagName == null)
                      throw new q.ParchmentError('Blot definition missing tagName');
                    var m;
                    return (
                      Array.isArray(this.tagName)
                        ? (typeof b == 'string' &&
                            ((b = b.toUpperCase()),
                            parseInt(b).toString() === b && (b = parseInt(b))),
                          typeof b == 'number'
                            ? (m = document.createElement(this.tagName[b - 1]))
                            : this.tagName.indexOf(b) > -1
                            ? (m = document.createElement(b))
                            : (m = document.createElement(this.tagName[0])))
                        : (m = document.createElement(this.tagName)),
                      this.className && m.classList.add(this.className),
                      m
                    );
                  }),
                  (v.prototype.attach = function () {
                    this.parent != null && (this.scroll = this.parent.scroll);
                  }),
                  (v.prototype.clone = function () {
                    var b = this.domNode.cloneNode(!1);
                    return q.create(b);
                  }),
                  (v.prototype.detach = function () {
                    this.parent != null && this.parent.removeChild(this),
                      delete this.domNode[q.DATA_KEY];
                  }),
                  (v.prototype.deleteAt = function (b, m) {
                    var d = this.isolate(b, m);
                    d.remove();
                  }),
                  (v.prototype.formatAt = function (b, m, d, l) {
                    var e = this.isolate(b, m);
                    if (q.query(d, q.Scope.BLOT) != null && l) e.wrap(d, l);
                    else if (q.query(d, q.Scope.ATTRIBUTE) != null) {
                      var t = q.create(this.statics.scope);
                      e.wrap(t), t.format(d, l);
                    }
                  }),
                  (v.prototype.insertAt = function (b, m, d) {
                    var l = d == null ? q.create('text', m) : q.create(m, d),
                      e = this.split(b);
                    this.parent.insertBefore(l, e);
                  }),
                  (v.prototype.insertInto = function (b, m) {
                    m === void 0 && (m = null),
                      this.parent != null && this.parent.children.remove(this);
                    var d = null;
                    b.children.insertBefore(this, m),
                      m != null && (d = m.domNode),
                      (this.domNode.parentNode != b.domNode || this.domNode.nextSibling != d) &&
                        b.domNode.insertBefore(this.domNode, d),
                      (this.parent = b),
                      this.attach();
                  }),
                  (v.prototype.isolate = function (b, m) {
                    var d = this.split(b);
                    return d.split(m), d;
                  }),
                  (v.prototype.length = function () {
                    return 1;
                  }),
                  (v.prototype.offset = function (b) {
                    return (
                      b === void 0 && (b = this.parent),
                      this.parent == null || this == b
                        ? 0
                        : this.parent.children.offset(this) + this.parent.offset(b)
                    );
                  }),
                  (v.prototype.optimize = function (b) {
                    this.domNode[q.DATA_KEY] != null && delete this.domNode[q.DATA_KEY].mutations;
                  }),
                  (v.prototype.remove = function () {
                    this.domNode.parentNode != null &&
                      this.domNode.parentNode.removeChild(this.domNode),
                      this.detach();
                  }),
                  (v.prototype.replace = function (b) {
                    b.parent != null && (b.parent.insertBefore(this, b.next), b.remove());
                  }),
                  (v.prototype.replaceWith = function (b, m) {
                    var d = typeof b == 'string' ? q.create(b, m) : b;
                    return d.replace(this), d;
                  }),
                  (v.prototype.split = function (b, m) {
                    return b === 0 ? this : this.next;
                  }),
                  (v.prototype.update = function (b, m) {}),
                  (v.prototype.wrap = function (b, m) {
                    var d = typeof b == 'string' ? q.create(b, m) : b;
                    return (
                      this.parent != null && this.parent.insertBefore(d, this.next),
                      d.appendChild(this),
                      d
                    );
                  }),
                  (v.blotName = 'abstract'),
                  v
                );
              })();
            w.default = k;
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(12),
              k = y(32),
              v = y(33),
              b = y(1),
              m = (function () {
                function d(l) {
                  (this.attributes = {}), (this.domNode = l), this.build();
                }
                return (
                  (d.prototype.attribute = function (l, e) {
                    e
                      ? l.add(this.domNode, e) &&
                        (l.value(this.domNode) != null
                          ? (this.attributes[l.attrName] = l)
                          : delete this.attributes[l.attrName])
                      : (l.remove(this.domNode), delete this.attributes[l.attrName]);
                  }),
                  (d.prototype.build = function () {
                    var l = this;
                    this.attributes = {};
                    var e = q.default.keys(this.domNode),
                      t = k.default.keys(this.domNode),
                      s = v.default.keys(this.domNode);
                    e.concat(t)
                      .concat(s)
                      .forEach(function (a) {
                        var u = b.query(a, b.Scope.ATTRIBUTE);
                        u instanceof q.default && (l.attributes[u.attrName] = u);
                      });
                  }),
                  (d.prototype.copy = function (l) {
                    var e = this;
                    Object.keys(this.attributes).forEach(function (t) {
                      var s = e.attributes[t].value(e.domNode);
                      l.format(t, s);
                    });
                  }),
                  (d.prototype.move = function (l) {
                    var e = this;
                    this.copy(l),
                      Object.keys(this.attributes).forEach(function (t) {
                        e.attributes[t].remove(e.domNode);
                      }),
                      (this.attributes = {});
                  }),
                  (d.prototype.values = function () {
                    var l = this;
                    return Object.keys(this.attributes).reduce(function (e, t) {
                      return (e[t] = l.attributes[t].value(l.domNode)), e;
                    }, {});
                  }),
                  d
                );
              })();
            w.default = m;
          },
          function (U, w, y) {
            'use strict';
            var q =
              (this && this.__extends) ||
              (function () {
                var m =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (d, l) {
                      d.__proto__ = l;
                    }) ||
                  function (d, l) {
                    for (var e in l) l.hasOwnProperty(e) && (d[e] = l[e]);
                  };
                return function (d, l) {
                  m(d, l);
                  function e() {
                    this.constructor = d;
                  }
                  d.prototype =
                    l === null ? Object.create(l) : ((e.prototype = l.prototype), new e());
                };
              })();
            Object.defineProperty(w, '__esModule', { value: !0 });
            var k = y(12);
            function v(m, d) {
              var l = m.getAttribute('class') || '';
              return l.split(/\s+/).filter(function (e) {
                return e.indexOf(d + '-') === 0;
              });
            }
            var b = (function (m) {
              q(d, m);
              function d() {
                return (m !== null && m.apply(this, arguments)) || this;
              }
              return (
                (d.keys = function (l) {
                  return (l.getAttribute('class') || '').split(/\s+/).map(function (e) {
                    return e.split('-').slice(0, -1).join('-');
                  });
                }),
                (d.prototype.add = function (l, e) {
                  return this.canAdd(l, e)
                    ? (this.remove(l), l.classList.add(this.keyName + '-' + e), !0)
                    : !1;
                }),
                (d.prototype.remove = function (l) {
                  var e = v(l, this.keyName);
                  e.forEach(function (t) {
                    l.classList.remove(t);
                  }),
                    l.classList.length === 0 && l.removeAttribute('class');
                }),
                (d.prototype.value = function (l) {
                  var e = v(l, this.keyName)[0] || '',
                    t = e.slice(this.keyName.length + 1);
                  return this.canAdd(l, t) ? t : '';
                }),
                d
              );
            })(k.default);
            w.default = b;
          },
          function (U, w, y) {
            'use strict';
            var q =
              (this && this.__extends) ||
              (function () {
                var m =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (d, l) {
                      d.__proto__ = l;
                    }) ||
                  function (d, l) {
                    for (var e in l) l.hasOwnProperty(e) && (d[e] = l[e]);
                  };
                return function (d, l) {
                  m(d, l);
                  function e() {
                    this.constructor = d;
                  }
                  d.prototype =
                    l === null ? Object.create(l) : ((e.prototype = l.prototype), new e());
                };
              })();
            Object.defineProperty(w, '__esModule', { value: !0 });
            var k = y(12);
            function v(m) {
              var d = m.split('-'),
                l = d
                  .slice(1)
                  .map(function (e) {
                    return e[0].toUpperCase() + e.slice(1);
                  })
                  .join('');
              return d[0] + l;
            }
            var b = (function (m) {
              q(d, m);
              function d() {
                return (m !== null && m.apply(this, arguments)) || this;
              }
              return (
                (d.keys = function (l) {
                  return (l.getAttribute('style') || '').split(';').map(function (e) {
                    var t = e.split(':');
                    return t[0].trim();
                  });
                }),
                (d.prototype.add = function (l, e) {
                  return this.canAdd(l, e) ? ((l.style[v(this.keyName)] = e), !0) : !1;
                }),
                (d.prototype.remove = function (l) {
                  (l.style[v(this.keyName)] = ''),
                    l.getAttribute('style') || l.removeAttribute('style');
                }),
                (d.prototype.value = function (l) {
                  var e = l.style[v(this.keyName)];
                  return this.canAdd(l, e) ? e : '';
                }),
                d
              );
            })(k.default);
            w.default = b;
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
              function b(m, d) {
                for (var l = 0; l < d.length; l++) {
                  var e = d[l];
                  (e.enumerable = e.enumerable || !1),
                    (e.configurable = !0),
                    'value' in e && (e.writable = !0),
                    Object.defineProperty(m, e.key, e);
                }
              }
              return function (m, d, l) {
                return d && b(m.prototype, d), l && b(m, l), m;
              };
            })();
            function k(b, m) {
              if (!(b instanceof m)) throw new TypeError('Cannot call a class as a function');
            }
            var v = (function () {
              function b(m, d) {
                k(this, b), (this.quill = m), (this.options = d), (this.modules = {});
              }
              return (
                q(b, [
                  {
                    key: 'init',
                    value: function () {
                      var d = this;
                      Object.keys(this.options.modules).forEach(function (l) {
                        d.modules[l] == null && d.addModule(l);
                      });
                    },
                  },
                  {
                    key: 'addModule',
                    value: function (d) {
                      var l = this.quill.constructor.import('modules/' + d);
                      return (
                        (this.modules[d] = new l(this.quill, this.options.modules[d] || {})),
                        this.modules[d]
                      );
                    },
                  },
                ]),
                b
              );
            })();
            (v.DEFAULTS = { modules: {} }), (v.themes = { default: v }), (w.default = v);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function n(i, c) {
                  for (var r = 0; r < c.length; r++) {
                    var h = c[r];
                    (h.enumerable = h.enumerable || !1),
                      (h.configurable = !0),
                      'value' in h && (h.writable = !0),
                      Object.defineProperty(i, h.key, h);
                  }
                }
                return function (i, c, r) {
                  return c && n(i.prototype, c), r && n(i, r), i;
                };
              })(),
              k = function n(i, c, r) {
                i === null && (i = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(i, c);
                if (h === void 0) {
                  var N = Object.getPrototypeOf(i);
                  return N === null ? void 0 : n(N, c, r);
                } else {
                  if ('value' in h) return h.value;
                  var A = h.get;
                  return A === void 0 ? void 0 : A.call(r);
                }
              },
              v = y(0),
              b = l(v),
              m = y(7),
              d = l(m);
            function l(n) {
              return n && n.__esModule ? n : { default: n };
            }
            function e(n, i) {
              if (!(n instanceof i)) throw new TypeError('Cannot call a class as a function');
            }
            function t(n, i) {
              if (!n)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return i && (typeof i == 'object' || typeof i == 'function') ? i : n;
            }
            function s(n, i) {
              if (typeof i != 'function' && i !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof i,
                );
              (n.prototype = Object.create(i && i.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
              })),
                i && (Object.setPrototypeOf ? Object.setPrototypeOf(n, i) : (n.__proto__ = i));
            }
            var a = '\uFEFF',
              u = (function (n) {
                s(i, n);
                function i(c) {
                  e(this, i);
                  var r = t(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, c));
                  return (
                    (r.contentNode = document.createElement('span')),
                    r.contentNode.setAttribute('contenteditable', !1),
                    [].slice.call(r.domNode.childNodes).forEach(function (h) {
                      r.contentNode.appendChild(h);
                    }),
                    (r.leftGuard = document.createTextNode(a)),
                    (r.rightGuard = document.createTextNode(a)),
                    r.domNode.appendChild(r.leftGuard),
                    r.domNode.appendChild(r.contentNode),
                    r.domNode.appendChild(r.rightGuard),
                    r
                  );
                }
                return (
                  q(i, [
                    {
                      key: 'index',
                      value: function (r, h) {
                        return r === this.leftGuard
                          ? 0
                          : r === this.rightGuard
                          ? 1
                          : k(
                              i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                              'index',
                              this,
                            ).call(this, r, h);
                      },
                    },
                    {
                      key: 'restore',
                      value: function (r) {
                        var h = void 0,
                          N = void 0,
                          A = r.data.split(a).join('');
                        if (r === this.leftGuard)
                          if (this.prev instanceof d.default) {
                            var T = this.prev.length();
                            this.prev.insertAt(T, A),
                              (h = { startNode: this.prev.domNode, startOffset: T + A.length });
                          } else
                            (N = document.createTextNode(A)),
                              this.parent.insertBefore(b.default.create(N), this),
                              (h = { startNode: N, startOffset: A.length });
                        else
                          r === this.rightGuard &&
                            (this.next instanceof d.default
                              ? (this.next.insertAt(0, A),
                                (h = { startNode: this.next.domNode, startOffset: A.length }))
                              : ((N = document.createTextNode(A)),
                                this.parent.insertBefore(b.default.create(N), this.next),
                                (h = { startNode: N, startOffset: A.length })));
                        return (r.data = a), h;
                      },
                    },
                    {
                      key: 'update',
                      value: function (r, h) {
                        var N = this;
                        r.forEach(function (A) {
                          if (
                            A.type === 'characterData' &&
                            (A.target === N.leftGuard || A.target === N.rightGuard)
                          ) {
                            var T = N.restore(A.target);
                            T && (h.range = T);
                          }
                        });
                      },
                    },
                  ]),
                  i
                );
              })(b.default.Embed);
            w.default = u;
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.AlignStyle = w.AlignClass = w.AlignAttribute = void 0);
            var q = y(0),
              k = v(q);
            function v(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var b = { scope: k.default.Scope.BLOCK, whitelist: ['right', 'center', 'justify'] },
              m = new k.default.Attributor.Attribute('align', 'align', b),
              d = new k.default.Attributor.Class('align', 'ql-align', b),
              l = new k.default.Attributor.Style('align', 'text-align', b);
            (w.AlignAttribute = m), (w.AlignClass = d), (w.AlignStyle = l);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.BackgroundStyle = w.BackgroundClass = void 0);
            var q = y(0),
              k = b(q),
              v = y(26);
            function b(l) {
              return l && l.__esModule ? l : { default: l };
            }
            var m = new k.default.Attributor.Class('background', 'ql-bg', {
                scope: k.default.Scope.INLINE,
              }),
              d = new v.ColorAttributor('background', 'background-color', {
                scope: k.default.Scope.INLINE,
              });
            (w.BackgroundClass = m), (w.BackgroundStyle = d);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.DirectionStyle = w.DirectionClass = w.DirectionAttribute = void 0);
            var q = y(0),
              k = v(q);
            function v(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var b = { scope: k.default.Scope.BLOCK, whitelist: ['rtl'] },
              m = new k.default.Attributor.Attribute('direction', 'dir', b),
              d = new k.default.Attributor.Class('direction', 'ql-direction', b),
              l = new k.default.Attributor.Style('direction', 'direction', b);
            (w.DirectionAttribute = m), (w.DirectionClass = d), (w.DirectionStyle = l);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.FontClass = w.FontStyle = void 0);
            var q = (function () {
                function n(i, c) {
                  for (var r = 0; r < c.length; r++) {
                    var h = c[r];
                    (h.enumerable = h.enumerable || !1),
                      (h.configurable = !0),
                      'value' in h && (h.writable = !0),
                      Object.defineProperty(i, h.key, h);
                  }
                }
                return function (i, c, r) {
                  return c && n(i.prototype, c), r && n(i, r), i;
                };
              })(),
              k = function n(i, c, r) {
                i === null && (i = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(i, c);
                if (h === void 0) {
                  var N = Object.getPrototypeOf(i);
                  return N === null ? void 0 : n(N, c, r);
                } else {
                  if ('value' in h) return h.value;
                  var A = h.get;
                  return A === void 0 ? void 0 : A.call(r);
                }
              },
              v = y(0),
              b = m(v);
            function m(n) {
              return n && n.__esModule ? n : { default: n };
            }
            function d(n, i) {
              if (!(n instanceof i)) throw new TypeError('Cannot call a class as a function');
            }
            function l(n, i) {
              if (!n)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return i && (typeof i == 'object' || typeof i == 'function') ? i : n;
            }
            function e(n, i) {
              if (typeof i != 'function' && i !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof i,
                );
              (n.prototype = Object.create(i && i.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
              })),
                i && (Object.setPrototypeOf ? Object.setPrototypeOf(n, i) : (n.__proto__ = i));
            }
            var t = { scope: b.default.Scope.INLINE, whitelist: ['serif', 'monospace'] },
              s = new b.default.Attributor.Class('font', 'ql-font', t),
              a = (function (n) {
                e(i, n);
                function i() {
                  return (
                    d(this, i),
                    l(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
                  );
                }
                return (
                  q(i, [
                    {
                      key: 'value',
                      value: function (r) {
                        return k(
                          i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                          'value',
                          this,
                        )
                          .call(this, r)
                          .replace(/["']/g, '');
                      },
                    },
                  ]),
                  i
                );
              })(b.default.Attributor.Style),
              u = new a('font', 'font-family', t);
            (w.FontStyle = u), (w.FontClass = s);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.SizeStyle = w.SizeClass = void 0);
            var q = y(0),
              k = v(q);
            function v(d) {
              return d && d.__esModule ? d : { default: d };
            }
            var b = new k.default.Attributor.Class('size', 'ql-size', {
                scope: k.default.Scope.INLINE,
                whitelist: ['small', 'large', 'huge'],
              }),
              m = new k.default.Attributor.Style('size', 'font-size', {
                scope: k.default.Scope.INLINE,
                whitelist: ['10px', '18px', '32px'],
              });
            (w.SizeClass = b), (w.SizeStyle = m);
          },
          function (U, w, y) {
            'use strict';
            U.exports = {
              align: { '': y(76), center: y(77), right: y(78), justify: y(79) },
              background: y(80),
              blockquote: y(81),
              bold: y(82),
              clean: y(83),
              code: y(58),
              'code-block': y(58),
              color: y(84),
              direction: { '': y(85), rtl: y(86) },
              float: { center: y(87), full: y(88), left: y(89), right: y(90) },
              formula: y(91),
              header: { 1: y(92), 2: y(93) },
              italic: y(94),
              image: y(95),
              indent: { '+1': y(96), '-1': y(97) },
              link: y(98),
              list: { ordered: y(99), bullet: y(100), check: y(101) },
              script: { sub: y(102), super: y(103) },
              strike: y(104),
              underline: y(105),
              video: y(106),
            };
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.getLastChangeIndex = w.default = void 0);
            var q = (function () {
                function c(r, h) {
                  for (var N = 0; N < h.length; N++) {
                    var A = h[N];
                    (A.enumerable = A.enumerable || !1),
                      (A.configurable = !0),
                      'value' in A && (A.writable = !0),
                      Object.defineProperty(r, A.key, A);
                  }
                }
                return function (r, h, N) {
                  return h && c(r.prototype, h), N && c(r, N), r;
                };
              })(),
              k = y(0),
              v = e(k),
              b = y(5),
              m = e(b),
              d = y(9),
              l = e(d);
            function e(c) {
              return c && c.__esModule ? c : { default: c };
            }
            function t(c, r) {
              if (!(c instanceof r)) throw new TypeError('Cannot call a class as a function');
            }
            function s(c, r) {
              if (!c)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return r && (typeof r == 'object' || typeof r == 'function') ? r : c;
            }
            function a(c, r) {
              if (typeof r != 'function' && r !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof r,
                );
              (c.prototype = Object.create(r && r.prototype, {
                constructor: { value: c, enumerable: !1, writable: !0, configurable: !0 },
              })),
                r && (Object.setPrototypeOf ? Object.setPrototypeOf(c, r) : (c.__proto__ = r));
            }
            var u = (function (c) {
              a(r, c);
              function r(h, N) {
                t(this, r);
                var A = s(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, h, N));
                return (
                  (A.lastRecorded = 0),
                  (A.ignoreChange = !1),
                  A.clear(),
                  A.quill.on(m.default.events.EDITOR_CHANGE, function (T, P, E, p) {
                    T !== m.default.events.TEXT_CHANGE ||
                      A.ignoreChange ||
                      (!A.options.userOnly || p === m.default.sources.USER
                        ? A.record(P, E)
                        : A.transform(P));
                  }),
                  A.quill.keyboard.addBinding({ key: 'Z', shortKey: !0 }, A.undo.bind(A)),
                  A.quill.keyboard.addBinding(
                    { key: 'Z', shortKey: !0, shiftKey: !0 },
                    A.redo.bind(A),
                  ),
                  /Win/i.test(navigator.platform) &&
                    A.quill.keyboard.addBinding({ key: 'Y', shortKey: !0 }, A.redo.bind(A)),
                  A
                );
              }
              return (
                q(r, [
                  {
                    key: 'change',
                    value: function (N, A) {
                      if (this.stack[N].length !== 0) {
                        var T = this.stack[N].pop();
                        this.stack[A].push(T),
                          (this.lastRecorded = 0),
                          (this.ignoreChange = !0),
                          this.quill.updateContents(T[N], m.default.sources.USER),
                          (this.ignoreChange = !1);
                        var P = i(T[N]);
                        this.quill.setSelection(P);
                      }
                    },
                  },
                  {
                    key: 'clear',
                    value: function () {
                      this.stack = { undo: [], redo: [] };
                    },
                  },
                  {
                    key: 'cutoff',
                    value: function () {
                      this.lastRecorded = 0;
                    },
                  },
                  {
                    key: 'record',
                    value: function (N, A) {
                      if (N.ops.length !== 0) {
                        this.stack.redo = [];
                        var T = this.quill.getContents().diff(A),
                          P = Date.now();
                        if (
                          this.lastRecorded + this.options.delay > P &&
                          this.stack.undo.length > 0
                        ) {
                          var E = this.stack.undo.pop();
                          (T = T.compose(E.undo)), (N = E.redo.compose(N));
                        } else this.lastRecorded = P;
                        this.stack.undo.push({ redo: N, undo: T }),
                          this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
                      }
                    },
                  },
                  {
                    key: 'redo',
                    value: function () {
                      this.change('redo', 'undo');
                    },
                  },
                  {
                    key: 'transform',
                    value: function (N) {
                      this.stack.undo.forEach(function (A) {
                        (A.undo = N.transform(A.undo, !0)), (A.redo = N.transform(A.redo, !0));
                      }),
                        this.stack.redo.forEach(function (A) {
                          (A.undo = N.transform(A.undo, !0)), (A.redo = N.transform(A.redo, !0));
                        });
                    },
                  },
                  {
                    key: 'undo',
                    value: function () {
                      this.change('undo', 'redo');
                    },
                  },
                ]),
                r
              );
            })(l.default);
            u.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 };
            function n(c) {
              var r = c.ops[c.ops.length - 1];
              return r == null
                ? !1
                : r.insert != null
                ? typeof r.insert == 'string' &&
                  r.insert.endsWith(`
`)
                : r.attributes != null
                ? Object.keys(r.attributes).some(function (h) {
                    return v.default.query(h, v.default.Scope.BLOCK) != null;
                  })
                : !1;
            }
            function i(c) {
              var r = c.reduce(function (N, A) {
                  return (N += A.delete || 0), N;
                }, 0),
                h = c.length() - r;
              return n(c) && (h -= 1), h;
            }
            (w.default = u), (w.getLastChangeIndex = i);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.default = w.BaseTooltip = void 0);
            var q = (function () {
                function I(D, H) {
                  for (var z = 0; z < H.length; z++) {
                    var L = H[z];
                    (L.enumerable = L.enumerable || !1),
                      (L.configurable = !0),
                      'value' in L && (L.writable = !0),
                      Object.defineProperty(D, L.key, L);
                  }
                }
                return function (D, H, z) {
                  return H && I(D.prototype, H), z && I(D, z), D;
                };
              })(),
              k = function I(D, H, z) {
                D === null && (D = Function.prototype);
                var L = Object.getOwnPropertyDescriptor(D, H);
                if (L === void 0) {
                  var F = Object.getPrototypeOf(D);
                  return F === null ? void 0 : I(F, H, z);
                } else {
                  if ('value' in L) return L.value;
                  var W = L.get;
                  return W === void 0 ? void 0 : W.call(z);
                }
              },
              v = y(3),
              b = P(v),
              m = y(2),
              d = P(m),
              l = y(8),
              e = P(l),
              t = y(23),
              s = P(t),
              a = y(34),
              u = P(a),
              n = y(59),
              i = P(n),
              c = y(60),
              r = P(c),
              h = y(28),
              N = P(h),
              A = y(61),
              T = P(A);
            function P(I) {
              return I && I.__esModule ? I : { default: I };
            }
            function E(I, D) {
              if (!(I instanceof D)) throw new TypeError('Cannot call a class as a function');
            }
            function p(I, D) {
              if (!I)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return D && (typeof D == 'object' || typeof D == 'function') ? D : I;
            }
            function O(I, D) {
              if (typeof D != 'function' && D !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof D,
                );
              (I.prototype = Object.create(D && D.prototype, {
                constructor: { value: I, enumerable: !1, writable: !0, configurable: !0 },
              })),
                D && (Object.setPrototypeOf ? Object.setPrototypeOf(I, D) : (I.__proto__ = D));
            }
            var _ = [!1, 'center', 'right', 'justify'],
              R = [
                '#000000',
                '#e60000',
                '#ff9900',
                '#ffff00',
                '#008a00',
                '#0066cc',
                '#9933ff',
                '#ffffff',
                '#facccc',
                '#ffebcc',
                '#ffffcc',
                '#cce8cc',
                '#cce0f5',
                '#ebd6ff',
                '#bbbbbb',
                '#f06666',
                '#ffc266',
                '#ffff66',
                '#66b966',
                '#66a3e0',
                '#c285ff',
                '#888888',
                '#a10000',
                '#b26b00',
                '#b2b200',
                '#006100',
                '#0047b2',
                '#6b24b2',
                '#444444',
                '#5c0000',
                '#663d00',
                '#666600',
                '#003700',
                '#002966',
                '#3d1466',
              ],
              j = [!1, 'serif', 'monospace'],
              K = ['1', '2', '3', !1],
              Y = ['small', !1, 'large', 'huge'],
              G = (function (I) {
                O(D, I);
                function D(H, z) {
                  E(this, D);
                  var L = p(this, (D.__proto__ || Object.getPrototypeOf(D)).call(this, H, z)),
                    F = function W(V) {
                      if (!document.body.contains(H.root))
                        return document.body.removeEventListener('click', W);
                      L.tooltip != null &&
                        !L.tooltip.root.contains(V.target) &&
                        document.activeElement !== L.tooltip.textbox &&
                        !L.quill.hasFocus() &&
                        L.tooltip.hide(),
                        L.pickers != null &&
                          L.pickers.forEach(function (Q) {
                            Q.container.contains(V.target) || Q.close();
                          });
                    };
                  return H.emitter.listenDOM('click', document.body, F), L;
                }
                return (
                  q(D, [
                    {
                      key: 'addModule',
                      value: function (z) {
                        var L = k(
                          D.prototype.__proto__ || Object.getPrototypeOf(D.prototype),
                          'addModule',
                          this,
                        ).call(this, z);
                        return z === 'toolbar' && this.extendToolbar(L), L;
                      },
                    },
                    {
                      key: 'buildButtons',
                      value: function (z, L) {
                        z.forEach(function (F) {
                          var W = F.getAttribute('class') || '';
                          W.split(/\s+/).forEach(function (V) {
                            if (
                              !!V.startsWith('ql-') &&
                              ((V = V.slice('ql-'.length)), L[V] != null)
                            )
                              if (V === 'direction') F.innerHTML = L[V][''] + L[V].rtl;
                              else if (typeof L[V] == 'string') F.innerHTML = L[V];
                              else {
                                var Q = F.value || '';
                                Q != null && L[V][Q] && (F.innerHTML = L[V][Q]);
                              }
                          });
                        });
                      },
                    },
                    {
                      key: 'buildPickers',
                      value: function (z, L) {
                        var F = this;
                        this.pickers = z.map(function (V) {
                          if (V.classList.contains('ql-align'))
                            return (
                              V.querySelector('option') == null && x(V, _),
                              new r.default(V, L.align)
                            );
                          if (
                            V.classList.contains('ql-background') ||
                            V.classList.contains('ql-color')
                          ) {
                            var Q = V.classList.contains('ql-background') ? 'background' : 'color';
                            return (
                              V.querySelector('option') == null &&
                                x(V, R, Q === 'background' ? '#ffffff' : '#000000'),
                              new i.default(V, L[Q])
                            );
                          } else return V.querySelector('option') == null && (V.classList.contains('ql-font') ? x(V, j) : V.classList.contains('ql-header') ? x(V, K) : V.classList.contains('ql-size') && x(V, Y)), new N.default(V);
                        });
                        var W = function () {
                          F.pickers.forEach(function (Q) {
                            Q.update();
                          });
                        };
                        this.quill.on(e.default.events.EDITOR_CHANGE, W);
                      },
                    },
                  ]),
                  D
                );
              })(u.default);
            G.DEFAULTS = (0, b.default)(!0, {}, u.default.DEFAULTS, {
              modules: {
                toolbar: {
                  handlers: {
                    formula: function () {
                      this.quill.theme.tooltip.edit('formula');
                    },
                    image: function () {
                      var D = this,
                        H = this.container.querySelector('input.ql-image[type=file]');
                      H == null &&
                        ((H = document.createElement('input')),
                        H.setAttribute('type', 'file'),
                        H.setAttribute(
                          'accept',
                          'image/png, image/gif, image/jpeg, image/bmp, image/x-icon',
                        ),
                        H.classList.add('ql-image'),
                        H.addEventListener('change', function () {
                          if (H.files != null && H.files[0] != null) {
                            var z = new FileReader();
                            (z.onload = function (L) {
                              var F = D.quill.getSelection(!0);
                              D.quill.updateContents(
                                new d.default()
                                  .retain(F.index)
                                  .delete(F.length)
                                  .insert({ image: L.target.result }),
                                e.default.sources.USER,
                              ),
                                D.quill.setSelection(F.index + 1, e.default.sources.SILENT),
                                (H.value = '');
                            }),
                              z.readAsDataURL(H.files[0]);
                          }
                        }),
                        this.container.appendChild(H)),
                        H.click();
                    },
                    video: function () {
                      this.quill.theme.tooltip.edit('video');
                    },
                  },
                },
              },
            });
            var C = (function (I) {
              O(D, I);
              function D(H, z) {
                E(this, D);
                var L = p(this, (D.__proto__ || Object.getPrototypeOf(D)).call(this, H, z));
                return (L.textbox = L.root.querySelector('input[type="text"]')), L.listen(), L;
              }
              return (
                q(D, [
                  {
                    key: 'listen',
                    value: function () {
                      var z = this;
                      this.textbox.addEventListener('keydown', function (L) {
                        s.default.match(L, 'enter')
                          ? (z.save(), L.preventDefault())
                          : s.default.match(L, 'escape') && (z.cancel(), L.preventDefault());
                      });
                    },
                  },
                  {
                    key: 'cancel',
                    value: function () {
                      this.hide();
                    },
                  },
                  {
                    key: 'edit',
                    value: function () {
                      var z =
                          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'link',
                        L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                      this.root.classList.remove('ql-hidden'),
                        this.root.classList.add('ql-editing'),
                        L != null
                          ? (this.textbox.value = L)
                          : z !== this.root.getAttribute('data-mode') && (this.textbox.value = ''),
                        this.position(this.quill.getBounds(this.quill.selection.savedRange)),
                        this.textbox.select(),
                        this.textbox.setAttribute(
                          'placeholder',
                          this.textbox.getAttribute('data-' + z) || '',
                        ),
                        this.root.setAttribute('data-mode', z);
                    },
                  },
                  {
                    key: 'restoreFocus',
                    value: function () {
                      var z = this.quill.scrollingContainer.scrollTop;
                      this.quill.focus(), (this.quill.scrollingContainer.scrollTop = z);
                    },
                  },
                  {
                    key: 'save',
                    value: function () {
                      var z = this.textbox.value;
                      switch (this.root.getAttribute('data-mode')) {
                        case 'link': {
                          var L = this.quill.root.scrollTop;
                          this.linkRange
                            ? (this.quill.formatText(
                                this.linkRange,
                                'link',
                                z,
                                e.default.sources.USER,
                              ),
                              delete this.linkRange)
                            : (this.restoreFocus(),
                              this.quill.format('link', z, e.default.sources.USER)),
                            (this.quill.root.scrollTop = L);
                          break;
                        }
                        case 'video':
                          z = M(z);
                        case 'formula': {
                          if (!z) break;
                          var F = this.quill.getSelection(!0);
                          if (F != null) {
                            var W = F.index + F.length;
                            this.quill.insertEmbed(
                              W,
                              this.root.getAttribute('data-mode'),
                              z,
                              e.default.sources.USER,
                            ),
                              this.root.getAttribute('data-mode') === 'formula' &&
                                this.quill.insertText(W + 1, ' ', e.default.sources.USER),
                              this.quill.setSelection(W + 2, e.default.sources.USER);
                          }
                          break;
                        }
                        default:
                      }
                      (this.textbox.value = ''), this.hide();
                    },
                  },
                ]),
                D
              );
            })(T.default);
            function M(I) {
              var D =
                I.match(
                  /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/,
                ) || I.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
              return D
                ? (D[1] || 'https') + '://www.youtube.com/embed/' + D[2] + '?showinfo=0'
                : (D = I.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))
                ? (D[1] || 'https') + '://player.vimeo.com/video/' + D[2] + '/'
                : I;
            }
            function x(I, D) {
              var H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
              D.forEach(function (z) {
                var L = document.createElement('option');
                z === H ? L.setAttribute('selected', 'selected') : L.setAttribute('value', z),
                  I.appendChild(L);
              });
            }
            (w.BaseTooltip = C), (w.default = G);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
              function k() {
                (this.head = this.tail = null), (this.length = 0);
              }
              return (
                (k.prototype.append = function () {
                  for (var v = [], b = 0; b < arguments.length; b++) v[b] = arguments[b];
                  this.insertBefore(v[0], null),
                    v.length > 1 && this.append.apply(this, v.slice(1));
                }),
                (k.prototype.contains = function (v) {
                  for (var b, m = this.iterator(); (b = m()); ) if (b === v) return !0;
                  return !1;
                }),
                (k.prototype.insertBefore = function (v, b) {
                  !v ||
                    ((v.next = b),
                    b != null
                      ? ((v.prev = b.prev),
                        b.prev != null && (b.prev.next = v),
                        (b.prev = v),
                        b === this.head && (this.head = v))
                      : this.tail != null
                      ? ((this.tail.next = v), (v.prev = this.tail), (this.tail = v))
                      : ((v.prev = null), (this.head = this.tail = v)),
                    (this.length += 1));
                }),
                (k.prototype.offset = function (v) {
                  for (var b = 0, m = this.head; m != null; ) {
                    if (m === v) return b;
                    (b += m.length()), (m = m.next);
                  }
                  return -1;
                }),
                (k.prototype.remove = function (v) {
                  !this.contains(v) ||
                    (v.prev != null && (v.prev.next = v.next),
                    v.next != null && (v.next.prev = v.prev),
                    v === this.head && (this.head = v.next),
                    v === this.tail && (this.tail = v.prev),
                    (this.length -= 1));
                }),
                (k.prototype.iterator = function (v) {
                  return (
                    v === void 0 && (v = this.head),
                    function () {
                      var b = v;
                      return v != null && (v = v.next), b;
                    }
                  );
                }),
                (k.prototype.find = function (v, b) {
                  b === void 0 && (b = !1);
                  for (var m, d = this.iterator(); (m = d()); ) {
                    var l = m.length();
                    if (v < l || (b && v === l && (m.next == null || m.next.length() !== 0)))
                      return [m, v];
                    v -= l;
                  }
                  return [null, 0];
                }),
                (k.prototype.forEach = function (v) {
                  for (var b, m = this.iterator(); (b = m()); ) v(b);
                }),
                (k.prototype.forEachAt = function (v, b, m) {
                  if (!(b <= 0))
                    for (
                      var d = this.find(v), l = d[0], e = d[1], t, s = v - e, a = this.iterator(l);
                      (t = a()) && s < v + b;

                    ) {
                      var u = t.length();
                      v > s ? m(t, v - s, Math.min(b, s + u - v)) : m(t, 0, Math.min(u, v + b - s)),
                        (s += u);
                    }
                }),
                (k.prototype.map = function (v) {
                  return this.reduce(function (b, m) {
                    return b.push(v(m)), b;
                  }, []);
                }),
                (k.prototype.reduce = function (v, b) {
                  for (var m, d = this.iterator(); (m = d()); ) b = v(b, m);
                  return b;
                }),
                k
              );
            })();
            w.default = q;
          },
          function (U, w, y) {
            'use strict';
            var q =
              (this && this.__extends) ||
              (function () {
                var l =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
                  };
                return function (e, t) {
                  l(e, t);
                  function s() {
                    this.constructor = e;
                  }
                  e.prototype =
                    t === null ? Object.create(t) : ((s.prototype = t.prototype), new s());
                };
              })();
            Object.defineProperty(w, '__esModule', { value: !0 });
            var k = y(17),
              v = y(1),
              b = {
                attributes: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0,
              },
              m = 100,
              d = (function (l) {
                q(e, l);
                function e(t) {
                  var s = l.call(this, t) || this;
                  return (
                    (s.scroll = s),
                    (s.observer = new MutationObserver(function (a) {
                      s.update(a);
                    })),
                    s.observer.observe(s.domNode, b),
                    s.attach(),
                    s
                  );
                }
                return (
                  (e.prototype.detach = function () {
                    l.prototype.detach.call(this), this.observer.disconnect();
                  }),
                  (e.prototype.deleteAt = function (t, s) {
                    this.update(),
                      t === 0 && s === this.length()
                        ? this.children.forEach(function (a) {
                            a.remove();
                          })
                        : l.prototype.deleteAt.call(this, t, s);
                  }),
                  (e.prototype.formatAt = function (t, s, a, u) {
                    this.update(), l.prototype.formatAt.call(this, t, s, a, u);
                  }),
                  (e.prototype.insertAt = function (t, s, a) {
                    this.update(), l.prototype.insertAt.call(this, t, s, a);
                  }),
                  (e.prototype.optimize = function (t, s) {
                    var a = this;
                    t === void 0 && (t = []),
                      s === void 0 && (s = {}),
                      l.prototype.optimize.call(this, s);
                    for (var u = [].slice.call(this.observer.takeRecords()); u.length > 0; )
                      t.push(u.pop());
                    for (
                      var n = function (h, N) {
                          N === void 0 && (N = !0),
                            !(h == null || h === a) &&
                              h.domNode.parentNode != null &&
                              (h.domNode[v.DATA_KEY].mutations == null &&
                                (h.domNode[v.DATA_KEY].mutations = []),
                              N && n(h.parent));
                        },
                        i = function (h) {
                          h.domNode[v.DATA_KEY] == null ||
                            h.domNode[v.DATA_KEY].mutations == null ||
                            (h instanceof k.default && h.children.forEach(i), h.optimize(s));
                        },
                        c = t,
                        r = 0;
                      c.length > 0;
                      r += 1
                    ) {
                      if (r >= m)
                        throw new Error('[Parchment] Maximum optimize iterations reached');
                      for (
                        c.forEach(function (h) {
                          var N = v.find(h.target, !0);
                          N != null &&
                            (N.domNode === h.target &&
                              (h.type === 'childList'
                                ? (n(v.find(h.previousSibling, !1)),
                                  [].forEach.call(h.addedNodes, function (A) {
                                    var T = v.find(A, !1);
                                    n(T, !1),
                                      T instanceof k.default &&
                                        T.children.forEach(function (P) {
                                          n(P, !1);
                                        });
                                  }))
                                : h.type === 'attributes' && n(N.prev)),
                            n(N));
                        }),
                          this.children.forEach(i),
                          c = [].slice.call(this.observer.takeRecords()),
                          u = c.slice();
                        u.length > 0;

                      )
                        t.push(u.pop());
                    }
                  }),
                  (e.prototype.update = function (t, s) {
                    var a = this;
                    s === void 0 && (s = {}),
                      (t = t || this.observer.takeRecords()),
                      t
                        .map(function (u) {
                          var n = v.find(u.target, !0);
                          return n == null
                            ? null
                            : n.domNode[v.DATA_KEY].mutations == null
                            ? ((n.domNode[v.DATA_KEY].mutations = [u]), n)
                            : (n.domNode[v.DATA_KEY].mutations.push(u), null);
                        })
                        .forEach(function (u) {
                          u == null ||
                            u === a ||
                            u.domNode[v.DATA_KEY] == null ||
                            u.update(u.domNode[v.DATA_KEY].mutations || [], s);
                        }),
                      this.domNode[v.DATA_KEY].mutations != null &&
                        l.prototype.update.call(this, this.domNode[v.DATA_KEY].mutations, s),
                      this.optimize(t, s);
                  }),
                  (e.blotName = 'scroll'),
                  (e.defaultChild = 'block'),
                  (e.scope = v.Scope.BLOCK_BLOT),
                  (e.tagName = 'DIV'),
                  e
                );
              })(k.default);
            w.default = d;
          },
          function (U, w, y) {
            'use strict';
            var q =
              (this && this.__extends) ||
              (function () {
                var d =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (l, e) {
                      l.__proto__ = e;
                    }) ||
                  function (l, e) {
                    for (var t in e) e.hasOwnProperty(t) && (l[t] = e[t]);
                  };
                return function (l, e) {
                  d(l, e);
                  function t() {
                    this.constructor = l;
                  }
                  l.prototype =
                    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
                };
              })();
            Object.defineProperty(w, '__esModule', { value: !0 });
            var k = y(18),
              v = y(1);
            function b(d, l) {
              if (Object.keys(d).length !== Object.keys(l).length) return !1;
              for (var e in d) if (d[e] !== l[e]) return !1;
              return !0;
            }
            var m = (function (d) {
              q(l, d);
              function l() {
                return (d !== null && d.apply(this, arguments)) || this;
              }
              return (
                (l.formats = function (e) {
                  if (e.tagName !== l.tagName) return d.formats.call(this, e);
                }),
                (l.prototype.format = function (e, t) {
                  var s = this;
                  e === this.statics.blotName && !t
                    ? (this.children.forEach(function (a) {
                        a instanceof k.default || (a = a.wrap(l.blotName, !0)),
                          s.attributes.copy(a);
                      }),
                      this.unwrap())
                    : d.prototype.format.call(this, e, t);
                }),
                (l.prototype.formatAt = function (e, t, s, a) {
                  if (this.formats()[s] != null || v.query(s, v.Scope.ATTRIBUTE)) {
                    var u = this.isolate(e, t);
                    u.format(s, a);
                  } else d.prototype.formatAt.call(this, e, t, s, a);
                }),
                (l.prototype.optimize = function (e) {
                  d.prototype.optimize.call(this, e);
                  var t = this.formats();
                  if (Object.keys(t).length === 0) return this.unwrap();
                  var s = this.next;
                  s instanceof l &&
                    s.prev === this &&
                    b(t, s.formats()) &&
                    (s.moveChildren(this), s.remove());
                }),
                (l.blotName = 'inline'),
                (l.scope = v.Scope.INLINE_BLOT),
                (l.tagName = 'SPAN'),
                l
              );
            })(k.default);
            w.default = m;
          },
          function (U, w, y) {
            'use strict';
            var q =
              (this && this.__extends) ||
              (function () {
                var m =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (d, l) {
                      d.__proto__ = l;
                    }) ||
                  function (d, l) {
                    for (var e in l) l.hasOwnProperty(e) && (d[e] = l[e]);
                  };
                return function (d, l) {
                  m(d, l);
                  function e() {
                    this.constructor = d;
                  }
                  d.prototype =
                    l === null ? Object.create(l) : ((e.prototype = l.prototype), new e());
                };
              })();
            Object.defineProperty(w, '__esModule', { value: !0 });
            var k = y(18),
              v = y(1),
              b = (function (m) {
                q(d, m);
                function d() {
                  return (m !== null && m.apply(this, arguments)) || this;
                }
                return (
                  (d.formats = function (l) {
                    var e = v.query(d.blotName).tagName;
                    if (l.tagName !== e) return m.formats.call(this, l);
                  }),
                  (d.prototype.format = function (l, e) {
                    v.query(l, v.Scope.BLOCK) != null &&
                      (l === this.statics.blotName && !e
                        ? this.replaceWith(d.blotName)
                        : m.prototype.format.call(this, l, e));
                  }),
                  (d.prototype.formatAt = function (l, e, t, s) {
                    v.query(t, v.Scope.BLOCK) != null
                      ? this.format(t, s)
                      : m.prototype.formatAt.call(this, l, e, t, s);
                  }),
                  (d.prototype.insertAt = function (l, e, t) {
                    if (t == null || v.query(e, v.Scope.INLINE) != null)
                      m.prototype.insertAt.call(this, l, e, t);
                    else {
                      var s = this.split(l),
                        a = v.create(e, t);
                      s.parent.insertBefore(a, s);
                    }
                  }),
                  (d.prototype.update = function (l, e) {
                    navigator.userAgent.match(/Trident/)
                      ? this.build()
                      : m.prototype.update.call(this, l, e);
                  }),
                  (d.blotName = 'block'),
                  (d.scope = v.Scope.BLOCK_BLOT),
                  (d.tagName = 'P'),
                  d
                );
              })(k.default);
            w.default = b;
          },
          function (U, w, y) {
            'use strict';
            var q =
              (this && this.__extends) ||
              (function () {
                var b =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (m, d) {
                      m.__proto__ = d;
                    }) ||
                  function (m, d) {
                    for (var l in d) d.hasOwnProperty(l) && (m[l] = d[l]);
                  };
                return function (m, d) {
                  b(m, d);
                  function l() {
                    this.constructor = m;
                  }
                  m.prototype =
                    d === null ? Object.create(d) : ((l.prototype = d.prototype), new l());
                };
              })();
            Object.defineProperty(w, '__esModule', { value: !0 });
            var k = y(19),
              v = (function (b) {
                q(m, b);
                function m() {
                  return (b !== null && b.apply(this, arguments)) || this;
                }
                return (
                  (m.formats = function (d) {}),
                  (m.prototype.format = function (d, l) {
                    b.prototype.formatAt.call(this, 0, this.length(), d, l);
                  }),
                  (m.prototype.formatAt = function (d, l, e, t) {
                    d === 0 && l === this.length()
                      ? this.format(e, t)
                      : b.prototype.formatAt.call(this, d, l, e, t);
                  }),
                  (m.prototype.formats = function () {
                    return this.statics.formats(this.domNode);
                  }),
                  m
                );
              })(k.default);
            w.default = v;
          },
          function (U, w, y) {
            'use strict';
            var q =
              (this && this.__extends) ||
              (function () {
                var m =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (d, l) {
                      d.__proto__ = l;
                    }) ||
                  function (d, l) {
                    for (var e in l) l.hasOwnProperty(e) && (d[e] = l[e]);
                  };
                return function (d, l) {
                  m(d, l);
                  function e() {
                    this.constructor = d;
                  }
                  d.prototype =
                    l === null ? Object.create(l) : ((e.prototype = l.prototype), new e());
                };
              })();
            Object.defineProperty(w, '__esModule', { value: !0 });
            var k = y(19),
              v = y(1),
              b = (function (m) {
                q(d, m);
                function d(l) {
                  var e = m.call(this, l) || this;
                  return (e.text = e.statics.value(e.domNode)), e;
                }
                return (
                  (d.create = function (l) {
                    return document.createTextNode(l);
                  }),
                  (d.value = function (l) {
                    var e = l.data;
                    return e.normalize && (e = e.normalize()), e;
                  }),
                  (d.prototype.deleteAt = function (l, e) {
                    this.domNode.data = this.text = this.text.slice(0, l) + this.text.slice(l + e);
                  }),
                  (d.prototype.index = function (l, e) {
                    return this.domNode === l ? e : -1;
                  }),
                  (d.prototype.insertAt = function (l, e, t) {
                    t == null
                      ? ((this.text = this.text.slice(0, l) + e + this.text.slice(l)),
                        (this.domNode.data = this.text))
                      : m.prototype.insertAt.call(this, l, e, t);
                  }),
                  (d.prototype.length = function () {
                    return this.text.length;
                  }),
                  (d.prototype.optimize = function (l) {
                    m.prototype.optimize.call(this, l),
                      (this.text = this.statics.value(this.domNode)),
                      this.text.length === 0
                        ? this.remove()
                        : this.next instanceof d &&
                          this.next.prev === this &&
                          (this.insertAt(this.length(), this.next.value()), this.next.remove());
                  }),
                  (d.prototype.position = function (l, e) {
                    return e === void 0 && (e = !1), [this.domNode, l];
                  }),
                  (d.prototype.split = function (l, e) {
                    if ((e === void 0 && (e = !1), !e)) {
                      if (l === 0) return this;
                      if (l === this.length()) return this.next;
                    }
                    var t = v.create(this.domNode.splitText(l));
                    return (
                      this.parent.insertBefore(t, this.next),
                      (this.text = this.statics.value(this.domNode)),
                      t
                    );
                  }),
                  (d.prototype.update = function (l, e) {
                    var t = this;
                    l.some(function (s) {
                      return s.type === 'characterData' && s.target === t.domNode;
                    }) && (this.text = this.statics.value(this.domNode));
                  }),
                  (d.prototype.value = function () {
                    return this.text;
                  }),
                  (d.blotName = 'text'),
                  (d.scope = v.Scope.INLINE_BLOT),
                  d
                );
              })(k.default);
            w.default = b;
          },
          function (U, w, y) {
            'use strict';
            var q = document.createElement('div');
            if ((q.classList.toggle('test-class', !1), q.classList.contains('test-class'))) {
              var k = DOMTokenList.prototype.toggle;
              DOMTokenList.prototype.toggle = function (v, b) {
                return arguments.length > 1 && !this.contains(v) == !b ? b : k.call(this, v);
              };
            }
            String.prototype.startsWith ||
              (String.prototype.startsWith = function (v, b) {
                return (b = b || 0), this.substr(b, v.length) === v;
              }),
              String.prototype.endsWith ||
                (String.prototype.endsWith = function (v, b) {
                  var m = this.toString();
                  (typeof b != 'number' || !isFinite(b) || Math.floor(b) !== b || b > m.length) &&
                    (b = m.length),
                    (b -= v.length);
                  var d = m.indexOf(v, b);
                  return d !== -1 && d === b;
                }),
              Array.prototype.find ||
                Object.defineProperty(Array.prototype, 'find', {
                  value: function (b) {
                    if (this === null)
                      throw new TypeError('Array.prototype.find called on null or undefined');
                    if (typeof b != 'function') throw new TypeError('predicate must be a function');
                    for (
                      var m = Object(this), d = m.length >>> 0, l = arguments[1], e, t = 0;
                      t < d;
                      t++
                    )
                      if (((e = m[t]), b.call(l, e, t, m))) return e;
                  },
                }),
              document.addEventListener('DOMContentLoaded', function () {
                document.execCommand('enableObjectResizing', !1, !1),
                  document.execCommand('autoUrlDetect', !1, !1);
              });
          },
          function (U, w) {
            var y = -1,
              q = 1,
              k = 0;
            function v(r, h, N) {
              if (r == h) return r ? [[k, r]] : [];
              (N < 0 || r.length < N) && (N = null);
              var A = l(r, h),
                T = r.substring(0, A);
              (r = r.substring(A)), (h = h.substring(A)), (A = e(r, h));
              var P = r.substring(r.length - A);
              (r = r.substring(0, r.length - A)), (h = h.substring(0, h.length - A));
              var E = b(r, h);
              return (
                T && E.unshift([k, T]),
                P && E.push([k, P]),
                s(E),
                N != null && (E = n(E, N)),
                (E = i(E)),
                E
              );
            }
            function b(r, h) {
              var N;
              if (!r) return [[q, h]];
              if (!h) return [[y, r]];
              var A = r.length > h.length ? r : h,
                T = r.length > h.length ? h : r,
                P = A.indexOf(T);
              if (P != -1)
                return (
                  (N = [
                    [q, A.substring(0, P)],
                    [k, T],
                    [q, A.substring(P + T.length)],
                  ]),
                  r.length > h.length && (N[0][0] = N[2][0] = y),
                  N
                );
              if (T.length == 1)
                return [
                  [y, r],
                  [q, h],
                ];
              var E = t(r, h);
              if (E) {
                var p = E[0],
                  O = E[1],
                  _ = E[2],
                  R = E[3],
                  j = E[4],
                  K = v(p, _),
                  Y = v(O, R);
                return K.concat([[k, j]], Y);
              }
              return m(r, h);
            }
            function m(r, h) {
              for (
                var N = r.length,
                  A = h.length,
                  T = Math.ceil((N + A) / 2),
                  P = T,
                  E = 2 * T,
                  p = new Array(E),
                  O = new Array(E),
                  _ = 0;
                _ < E;
                _++
              )
                (p[_] = -1), (O[_] = -1);
              (p[P + 1] = 0), (O[P + 1] = 0);
              for (var R = N - A, j = R % 2 != 0, K = 0, Y = 0, G = 0, C = 0, M = 0; M < T; M++) {
                for (var x = -M + K; x <= M - Y; x += 2) {
                  var I = P + x,
                    D;
                  x == -M || (x != M && p[I - 1] < p[I + 1]) ? (D = p[I + 1]) : (D = p[I - 1] + 1);
                  for (var H = D - x; D < N && H < A && r.charAt(D) == h.charAt(H); ) D++, H++;
                  if (((p[I] = D), D > N)) Y += 2;
                  else if (H > A) K += 2;
                  else if (j) {
                    var z = P + R - x;
                    if (z >= 0 && z < E && O[z] != -1) {
                      var L = N - O[z];
                      if (D >= L) return d(r, h, D, H);
                    }
                  }
                }
                for (var F = -M + G; F <= M - C; F += 2) {
                  var z = P + F,
                    L;
                  F == -M || (F != M && O[z - 1] < O[z + 1]) ? (L = O[z + 1]) : (L = O[z - 1] + 1);
                  for (
                    var W = L - F;
                    L < N && W < A && r.charAt(N - L - 1) == h.charAt(A - W - 1);

                  )
                    L++, W++;
                  if (((O[z] = L), L > N)) C += 2;
                  else if (W > A) G += 2;
                  else if (!j) {
                    var I = P + R - F;
                    if (I >= 0 && I < E && p[I] != -1) {
                      var D = p[I],
                        H = P + D - I;
                      if (((L = N - L), D >= L)) return d(r, h, D, H);
                    }
                  }
                }
              }
              return [
                [y, r],
                [q, h],
              ];
            }
            function d(r, h, N, A) {
              var T = r.substring(0, N),
                P = h.substring(0, A),
                E = r.substring(N),
                p = h.substring(A),
                O = v(T, P),
                _ = v(E, p);
              return O.concat(_);
            }
            function l(r, h) {
              if (!r || !h || r.charAt(0) != h.charAt(0)) return 0;
              for (var N = 0, A = Math.min(r.length, h.length), T = A, P = 0; N < T; )
                r.substring(P, T) == h.substring(P, T) ? ((N = T), (P = N)) : (A = T),
                  (T = Math.floor((A - N) / 2 + N));
              return T;
            }
            function e(r, h) {
              if (!r || !h || r.charAt(r.length - 1) != h.charAt(h.length - 1)) return 0;
              for (var N = 0, A = Math.min(r.length, h.length), T = A, P = 0; N < T; )
                r.substring(r.length - T, r.length - P) == h.substring(h.length - T, h.length - P)
                  ? ((N = T), (P = N))
                  : (A = T),
                  (T = Math.floor((A - N) / 2 + N));
              return T;
            }
            function t(r, h) {
              var N = r.length > h.length ? r : h,
                A = r.length > h.length ? h : r;
              if (N.length < 4 || A.length * 2 < N.length) return null;
              function T(Y, G, C) {
                for (
                  var M = Y.substring(C, C + Math.floor(Y.length / 4)), x = -1, I = '', D, H, z, L;
                  (x = G.indexOf(M, x + 1)) != -1;

                ) {
                  var F = l(Y.substring(C), G.substring(x)),
                    W = e(Y.substring(0, C), G.substring(0, x));
                  I.length < W + F &&
                    ((I = G.substring(x - W, x) + G.substring(x, x + F)),
                    (D = Y.substring(0, C - W)),
                    (H = Y.substring(C + F)),
                    (z = G.substring(0, x - W)),
                    (L = G.substring(x + F)));
                }
                return I.length * 2 >= Y.length ? [D, H, z, L, I] : null;
              }
              var P = T(N, A, Math.ceil(N.length / 4)),
                E = T(N, A, Math.ceil(N.length / 2)),
                p;
              if (!P && !E) return null;
              E ? (P ? (p = P[4].length > E[4].length ? P : E) : (p = E)) : (p = P);
              var O, _, R, j;
              r.length > h.length
                ? ((O = p[0]), (_ = p[1]), (R = p[2]), (j = p[3]))
                : ((R = p[0]), (j = p[1]), (O = p[2]), (_ = p[3]));
              var K = p[4];
              return [O, _, R, j, K];
            }
            function s(r) {
              r.push([k, '']);
              for (var h = 0, N = 0, A = 0, T = '', P = '', E; h < r.length; )
                switch (r[h][0]) {
                  case q:
                    A++, (P += r[h][1]), h++;
                    break;
                  case y:
                    N++, (T += r[h][1]), h++;
                    break;
                  case k:
                    N + A > 1
                      ? (N !== 0 &&
                          A !== 0 &&
                          ((E = l(P, T)),
                          E !== 0 &&
                            (h - N - A > 0 && r[h - N - A - 1][0] == k
                              ? (r[h - N - A - 1][1] += P.substring(0, E))
                              : (r.splice(0, 0, [k, P.substring(0, E)]), h++),
                            (P = P.substring(E)),
                            (T = T.substring(E))),
                          (E = e(P, T)),
                          E !== 0 &&
                            ((r[h][1] = P.substring(P.length - E) + r[h][1]),
                            (P = P.substring(0, P.length - E)),
                            (T = T.substring(0, T.length - E)))),
                        N === 0
                          ? r.splice(h - A, N + A, [q, P])
                          : A === 0
                          ? r.splice(h - N, N + A, [y, T])
                          : r.splice(h - N - A, N + A, [y, T], [q, P]),
                        (h = h - N - A + (N ? 1 : 0) + (A ? 1 : 0) + 1))
                      : h !== 0 && r[h - 1][0] == k
                      ? ((r[h - 1][1] += r[h][1]), r.splice(h, 1))
                      : h++,
                      (A = 0),
                      (N = 0),
                      (T = ''),
                      (P = '');
                    break;
                }
              r[r.length - 1][1] === '' && r.pop();
              var p = !1;
              for (h = 1; h < r.length - 1; )
                r[h - 1][0] == k &&
                  r[h + 1][0] == k &&
                  (r[h][1].substring(r[h][1].length - r[h - 1][1].length) == r[h - 1][1]
                    ? ((r[h][1] =
                        r[h - 1][1] + r[h][1].substring(0, r[h][1].length - r[h - 1][1].length)),
                      (r[h + 1][1] = r[h - 1][1] + r[h + 1][1]),
                      r.splice(h - 1, 1),
                      (p = !0))
                    : r[h][1].substring(0, r[h + 1][1].length) == r[h + 1][1] &&
                      ((r[h - 1][1] += r[h + 1][1]),
                      (r[h][1] = r[h][1].substring(r[h + 1][1].length) + r[h + 1][1]),
                      r.splice(h + 1, 1),
                      (p = !0))),
                  h++;
              p && s(r);
            }
            var a = v;
            (a.INSERT = q), (a.DELETE = y), (a.EQUAL = k), (U.exports = a);
            function u(r, h) {
              if (h === 0) return [k, r];
              for (var N = 0, A = 0; A < r.length; A++) {
                var T = r[A];
                if (T[0] === y || T[0] === k) {
                  var P = N + T[1].length;
                  if (h === P) return [A + 1, r];
                  if (h < P) {
                    r = r.slice();
                    var E = h - N,
                      p = [T[0], T[1].slice(0, E)],
                      O = [T[0], T[1].slice(E)];
                    return r.splice(A, 1, p, O), [A + 1, r];
                  } else N = P;
                }
              }
              throw new Error('cursor_pos is out of bounds!');
            }
            function n(r, h) {
              var N = u(r, h),
                A = N[1],
                T = N[0],
                P = A[T],
                E = A[T + 1];
              if (P == null) return r;
              if (P[0] !== k) return r;
              if (E != null && P[1] + E[1] === E[1] + P[1]) return A.splice(T, 2, E, P), c(A, T, 2);
              if (E != null && E[1].indexOf(P[1]) === 0) {
                A.splice(T, 2, [E[0], P[1]], [0, P[1]]);
                var p = E[1].slice(P[1].length);
                return p.length > 0 && A.splice(T + 2, 0, [E[0], p]), c(A, T, 3);
              } else return r;
            }
            function i(r) {
              for (
                var h = !1,
                  N = function (E) {
                    return E.charCodeAt(0) >= 56320 && E.charCodeAt(0) <= 57343;
                  },
                  A = function (E) {
                    return (
                      E.charCodeAt(E.length - 1) >= 55296 && E.charCodeAt(E.length - 1) <= 56319
                    );
                  },
                  T = 2;
                T < r.length;
                T += 1
              )
                r[T - 2][0] === k &&
                  A(r[T - 2][1]) &&
                  r[T - 1][0] === y &&
                  N(r[T - 1][1]) &&
                  r[T][0] === q &&
                  N(r[T][1]) &&
                  ((h = !0),
                  (r[T - 1][1] = r[T - 2][1].slice(-1) + r[T - 1][1]),
                  (r[T][1] = r[T - 2][1].slice(-1) + r[T][1]),
                  (r[T - 2][1] = r[T - 2][1].slice(0, -1)));
              if (!h) return r;
              for (var P = [], T = 0; T < r.length; T += 1) r[T][1].length > 0 && P.push(r[T]);
              return P;
            }
            function c(r, h, N) {
              for (var A = h + N - 1; A >= 0 && A >= h - 1; A--)
                if (A + 1 < r.length) {
                  var T = r[A],
                    P = r[A + 1];
                  T[0] === P[1] && r.splice(A, 2, [T[0], T[1] + P[1]]);
                }
              return r;
            }
          },
          function (U, w) {
            (w = U.exports = typeof Object.keys == 'function' ? Object.keys : y), (w.shim = y);
            function y(q) {
              var k = [];
              for (var v in q) k.push(v);
              return k;
            }
          },
          function (U, w) {
            var y =
              (function () {
                return Object.prototype.toString.call(arguments);
              })() == '[object Arguments]';
            (w = U.exports = y ? q : k), (w.supported = q);
            function q(v) {
              return Object.prototype.toString.call(v) == '[object Arguments]';
            }
            w.unsupported = k;
            function k(v) {
              return (
                (v &&
                  typeof v == 'object' &&
                  typeof v.length == 'number' &&
                  Object.prototype.hasOwnProperty.call(v, 'callee') &&
                  !Object.prototype.propertyIsEnumerable.call(v, 'callee')) ||
                !1
              );
            }
          },
          function (U, w) {
            'use strict';
            var y = Object.prototype.hasOwnProperty,
              q = '~';
            function k() {}
            Object.create && ((k.prototype = Object.create(null)), new k().__proto__ || (q = !1));
            function v(m, d, l) {
              (this.fn = m), (this.context = d), (this.once = l || !1);
            }
            function b() {
              (this._events = new k()), (this._eventsCount = 0);
            }
            (b.prototype.eventNames = function () {
              var d = [],
                l,
                e;
              if (this._eventsCount === 0) return d;
              for (e in (l = this._events)) y.call(l, e) && d.push(q ? e.slice(1) : e);
              return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(l)) : d;
            }),
              (b.prototype.listeners = function (d, l) {
                var e = q ? q + d : d,
                  t = this._events[e];
                if (l) return !!t;
                if (!t) return [];
                if (t.fn) return [t.fn];
                for (var s = 0, a = t.length, u = new Array(a); s < a; s++) u[s] = t[s].fn;
                return u;
              }),
              (b.prototype.emit = function (d, l, e, t, s, a) {
                var u = q ? q + d : d;
                if (!this._events[u]) return !1;
                var n = this._events[u],
                  i = arguments.length,
                  c,
                  r;
                if (n.fn) {
                  switch ((n.once && this.removeListener(d, n.fn, void 0, !0), i)) {
                    case 1:
                      return n.fn.call(n.context), !0;
                    case 2:
                      return n.fn.call(n.context, l), !0;
                    case 3:
                      return n.fn.call(n.context, l, e), !0;
                    case 4:
                      return n.fn.call(n.context, l, e, t), !0;
                    case 5:
                      return n.fn.call(n.context, l, e, t, s), !0;
                    case 6:
                      return n.fn.call(n.context, l, e, t, s, a), !0;
                  }
                  for (r = 1, c = new Array(i - 1); r < i; r++) c[r - 1] = arguments[r];
                  n.fn.apply(n.context, c);
                } else {
                  var h = n.length,
                    N;
                  for (r = 0; r < h; r++)
                    switch ((n[r].once && this.removeListener(d, n[r].fn, void 0, !0), i)) {
                      case 1:
                        n[r].fn.call(n[r].context);
                        break;
                      case 2:
                        n[r].fn.call(n[r].context, l);
                        break;
                      case 3:
                        n[r].fn.call(n[r].context, l, e);
                        break;
                      case 4:
                        n[r].fn.call(n[r].context, l, e, t);
                        break;
                      default:
                        if (!c)
                          for (N = 1, c = new Array(i - 1); N < i; N++) c[N - 1] = arguments[N];
                        n[r].fn.apply(n[r].context, c);
                    }
                }
                return !0;
              }),
              (b.prototype.on = function (d, l, e) {
                var t = new v(l, e || this),
                  s = q ? q + d : d;
                return (
                  this._events[s]
                    ? this._events[s].fn
                      ? (this._events[s] = [this._events[s], t])
                      : this._events[s].push(t)
                    : ((this._events[s] = t), this._eventsCount++),
                  this
                );
              }),
              (b.prototype.once = function (d, l, e) {
                var t = new v(l, e || this, !0),
                  s = q ? q + d : d;
                return (
                  this._events[s]
                    ? this._events[s].fn
                      ? (this._events[s] = [this._events[s], t])
                      : this._events[s].push(t)
                    : ((this._events[s] = t), this._eventsCount++),
                  this
                );
              }),
              (b.prototype.removeListener = function (d, l, e, t) {
                var s = q ? q + d : d;
                if (!this._events[s]) return this;
                if (!l)
                  return (
                    --this._eventsCount == 0 ? (this._events = new k()) : delete this._events[s],
                    this
                  );
                var a = this._events[s];
                if (a.fn)
                  a.fn === l &&
                    (!t || a.once) &&
                    (!e || a.context === e) &&
                    (--this._eventsCount == 0 ? (this._events = new k()) : delete this._events[s]);
                else {
                  for (var u = 0, n = [], i = a.length; u < i; u++)
                    (a[u].fn !== l || (t && !a[u].once) || (e && a[u].context !== e)) &&
                      n.push(a[u]);
                  n.length
                    ? (this._events[s] = n.length === 1 ? n[0] : n)
                    : --this._eventsCount == 0
                    ? (this._events = new k())
                    : delete this._events[s];
                }
                return this;
              }),
              (b.prototype.removeAllListeners = function (d) {
                var l;
                return (
                  d
                    ? ((l = q ? q + d : d),
                      this._events[l] &&
                        (--this._eventsCount == 0
                          ? (this._events = new k())
                          : delete this._events[l]))
                    : ((this._events = new k()), (this._eventsCount = 0)),
                  this
                );
              }),
              (b.prototype.off = b.prototype.removeListener),
              (b.prototype.addListener = b.prototype.on),
              (b.prototype.setMaxListeners = function () {
                return this;
              }),
              (b.prefixed = q),
              (b.EventEmitter = b),
              typeof U != 'undefined' && (U.exports = b);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.matchText =
                w.matchSpacing =
                w.matchNewline =
                w.matchBlot =
                w.matchAttributor =
                w.default =
                  void 0);
            var q =
                typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                  ? function (g) {
                      return typeof g;
                    }
                  : function (g) {
                      return g &&
                        typeof Symbol == 'function' &&
                        g.constructor === Symbol &&
                        g !== Symbol.prototype
                        ? 'symbol'
                        : typeof g;
                    },
              k = (function () {
                function g(o, f) {
                  var S = [],
                    B = !0,
                    Z = !1,
                    $ = void 0;
                  try {
                    for (
                      var J = o[Symbol.iterator](), ot;
                      !(B = (ot = J.next()).done) && (S.push(ot.value), !(f && S.length === f));
                      B = !0
                    );
                  } catch (at) {
                    (Z = !0), ($ = at);
                  } finally {
                    try {
                      !B && J.return && J.return();
                    } finally {
                      if (Z) throw $;
                    }
                  }
                  return S;
                }
                return function (o, f) {
                  if (Array.isArray(o)) return o;
                  if (Symbol.iterator in Object(o)) return g(o, f);
                  throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
              })(),
              v = (function () {
                function g(o, f) {
                  for (var S = 0; S < f.length; S++) {
                    var B = f[S];
                    (B.enumerable = B.enumerable || !1),
                      (B.configurable = !0),
                      'value' in B && (B.writable = !0),
                      Object.defineProperty(o, B.key, B);
                  }
                }
                return function (o, f, S) {
                  return f && g(o.prototype, f), S && g(o, S), o;
                };
              })(),
              b = y(3),
              m = O(b),
              d = y(2),
              l = O(d),
              e = y(0),
              t = O(e),
              s = y(5),
              a = O(s),
              u = y(10),
              n = O(u),
              i = y(9),
              c = O(i),
              r = y(36),
              h = y(37),
              N = y(13),
              A = O(N),
              T = y(26),
              P = y(38),
              E = y(39),
              p = y(40);
            function O(g) {
              return g && g.__esModule ? g : { default: g };
            }
            function _(g, o, f) {
              return (
                o in g
                  ? Object.defineProperty(g, o, {
                      value: f,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (g[o] = f),
                g
              );
            }
            function R(g, o) {
              if (!(g instanceof o)) throw new TypeError('Cannot call a class as a function');
            }
            function j(g, o) {
              if (!g)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return o && (typeof o == 'object' || typeof o == 'function') ? o : g;
            }
            function K(g, o) {
              if (typeof o != 'function' && o !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof o,
                );
              (g.prototype = Object.create(o && o.prototype, {
                constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 },
              })),
                o && (Object.setPrototypeOf ? Object.setPrototypeOf(g, o) : (g.__proto__ = o));
            }
            var Y = (0, n.default)('quill:clipboard'),
              G = '__ql-matcher',
              C = [
                [Node.TEXT_NODE, ht],
                [Node.TEXT_NODE, lt],
                ['br', X],
                [Node.ELEMENT_NODE, lt],
                [Node.ELEMENT_NODE, Q],
                [Node.ELEMENT_NODE, ut],
                [Node.ELEMENT_NODE, V],
                [Node.ELEMENT_NODE, dt],
                ['li', nt],
                ['b', W.bind(W, 'bold')],
                ['i', W.bind(W, 'italic')],
                ['style', et],
              ],
              M = [r.AlignAttribute, P.DirectionAttribute].reduce(function (g, o) {
                return (g[o.keyName] = o), g;
              }, {}),
              x = [
                r.AlignStyle,
                h.BackgroundStyle,
                T.ColorStyle,
                P.DirectionStyle,
                E.FontStyle,
                p.SizeStyle,
              ].reduce(function (g, o) {
                return (g[o.keyName] = o), g;
              }, {}),
              I = (function (g) {
                K(o, g);
                function o(f, S) {
                  R(this, o);
                  var B = j(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, f, S));
                  return (
                    B.quill.root.addEventListener('paste', B.onPaste.bind(B)),
                    (B.container = B.quill.addContainer('ql-clipboard')),
                    B.container.setAttribute('contenteditable', !0),
                    B.container.setAttribute('tabindex', -1),
                    (B.matchers = []),
                    C.concat(B.options.matchers).forEach(function (Z) {
                      var $ = k(Z, 2),
                        J = $[0],
                        ot = $[1];
                      (!S.matchVisual && ot === ut) || B.addMatcher(J, ot);
                    }),
                    B
                  );
                }
                return (
                  v(o, [
                    {
                      key: 'addMatcher',
                      value: function (S, B) {
                        this.matchers.push([S, B]);
                      },
                    },
                    {
                      key: 'convert',
                      value: function (S) {
                        if (typeof S == 'string')
                          return (
                            (this.container.innerHTML = S.replace(/\>\r?\n +\</g, '><')),
                            this.convert()
                          );
                        var B = this.quill.getFormat(this.quill.selection.savedRange.index);
                        if (B[A.default.blotName]) {
                          var Z = this.container.innerText;
                          return (
                            (this.container.innerHTML = ''),
                            new l.default().insert(
                              Z,
                              _({}, A.default.blotName, B[A.default.blotName]),
                            )
                          );
                        }
                        var $ = this.prepareMatching(),
                          J = k($, 2),
                          ot = J[0],
                          at = J[1],
                          it = F(this.container, ot, at);
                        return (
                          z(
                            it,
                            `
`,
                          ) &&
                            it.ops[it.ops.length - 1].attributes == null &&
                            (it = it.compose(new l.default().retain(it.length() - 1).delete(1))),
                          Y.log('convert', this.container.innerHTML, it),
                          (this.container.innerHTML = ''),
                          it
                        );
                      },
                    },
                    {
                      key: 'dangerouslyPasteHTML',
                      value: function (S, B) {
                        var Z =
                          arguments.length > 2 && arguments[2] !== void 0
                            ? arguments[2]
                            : a.default.sources.API;
                        if (typeof S == 'string')
                          this.quill.setContents(this.convert(S), B),
                            this.quill.setSelection(0, a.default.sources.SILENT);
                        else {
                          var $ = this.convert(B);
                          this.quill.updateContents(new l.default().retain(S).concat($), Z),
                            this.quill.setSelection(S + $.length(), a.default.sources.SILENT);
                        }
                      },
                    },
                    {
                      key: 'onPaste',
                      value: function (S) {
                        var B = this;
                        if (!(S.defaultPrevented || !this.quill.isEnabled())) {
                          var Z = this.quill.getSelection(),
                            $ = new l.default().retain(Z.index),
                            J = this.quill.scrollingContainer.scrollTop;
                          this.container.focus(),
                            this.quill.selection.update(a.default.sources.SILENT),
                            setTimeout(function () {
                              ($ = $.concat(B.convert()).delete(Z.length)),
                                B.quill.updateContents($, a.default.sources.USER),
                                B.quill.setSelection(
                                  $.length() - Z.length,
                                  a.default.sources.SILENT,
                                ),
                                (B.quill.scrollingContainer.scrollTop = J),
                                B.quill.focus();
                            }, 1);
                        }
                      },
                    },
                    {
                      key: 'prepareMatching',
                      value: function () {
                        var S = this,
                          B = [],
                          Z = [];
                        return (
                          this.matchers.forEach(function ($) {
                            var J = k($, 2),
                              ot = J[0],
                              at = J[1];
                            switch (ot) {
                              case Node.TEXT_NODE:
                                Z.push(at);
                                break;
                              case Node.ELEMENT_NODE:
                                B.push(at);
                                break;
                              default:
                                [].forEach.call(S.container.querySelectorAll(ot), function (it) {
                                  (it[G] = it[G] || []), it[G].push(at);
                                });
                                break;
                            }
                          }),
                          [B, Z]
                        );
                      },
                    },
                  ]),
                  o
                );
              })(c.default);
            I.DEFAULTS = { matchers: [], matchVisual: !0 };
            function D(g, o, f) {
              return (typeof o == 'undefined' ? 'undefined' : q(o)) === 'object'
                ? Object.keys(o).reduce(function (S, B) {
                    return D(S, B, o[B]);
                  }, g)
                : g.reduce(function (S, B) {
                    return B.attributes && B.attributes[o]
                      ? S.push(B)
                      : S.insert(B.insert, (0, m.default)({}, _({}, o, f), B.attributes));
                  }, new l.default());
            }
            function H(g) {
              if (g.nodeType !== Node.ELEMENT_NODE) return {};
              var o = '__ql-computed-style';
              return g[o] || (g[o] = window.getComputedStyle(g));
            }
            function z(g, o) {
              for (var f = '', S = g.ops.length - 1; S >= 0 && f.length < o.length; --S) {
                var B = g.ops[S];
                if (typeof B.insert != 'string') break;
                f = B.insert + f;
              }
              return f.slice(-1 * o.length) === o;
            }
            function L(g) {
              if (g.childNodes.length === 0) return !1;
              var o = H(g);
              return ['block', 'list-item'].indexOf(o.display) > -1;
            }
            function F(g, o, f) {
              return g.nodeType === g.TEXT_NODE
                ? f.reduce(function (S, B) {
                    return B(g, S);
                  }, new l.default())
                : g.nodeType === g.ELEMENT_NODE
                ? [].reduce.call(
                    g.childNodes || [],
                    function (S, B) {
                      var Z = F(B, o, f);
                      return (
                        B.nodeType === g.ELEMENT_NODE &&
                          ((Z = o.reduce(function ($, J) {
                            return J(B, $);
                          }, Z)),
                          (Z = (B[G] || []).reduce(function ($, J) {
                            return J(B, $);
                          }, Z))),
                        S.concat(Z)
                      );
                    },
                    new l.default(),
                  )
                : new l.default();
            }
            function W(g, o, f) {
              return D(f, g, !0);
            }
            function V(g, o) {
              var f = t.default.Attributor.Attribute.keys(g),
                S = t.default.Attributor.Class.keys(g),
                B = t.default.Attributor.Style.keys(g),
                Z = {};
              return (
                f
                  .concat(S)
                  .concat(B)
                  .forEach(function ($) {
                    var J = t.default.query($, t.default.Scope.ATTRIBUTE);
                    (J != null && ((Z[J.attrName] = J.value(g)), Z[J.attrName])) ||
                      ((J = M[$]),
                      J != null &&
                        (J.attrName === $ || J.keyName === $) &&
                        (Z[J.attrName] = J.value(g) || void 0),
                      (J = x[$]),
                      J != null &&
                        (J.attrName === $ || J.keyName === $) &&
                        ((J = x[$]), (Z[J.attrName] = J.value(g) || void 0)));
                  }),
                Object.keys(Z).length > 0 && (o = D(o, Z)),
                o
              );
            }
            function Q(g, o) {
              var f = t.default.query(g);
              if (f == null) return o;
              if (f.prototype instanceof t.default.Embed) {
                var S = {},
                  B = f.value(g);
                B != null && ((S[f.blotName] = B), (o = new l.default().insert(S, f.formats(g))));
              } else typeof f.formats == 'function' && (o = D(o, f.blotName, f.formats(g)));
              return o;
            }
            function X(g, o) {
              return (
                z(
                  o,
                  `
`,
                ) ||
                  o.insert(`
`),
                o
              );
            }
            function et() {
              return new l.default();
            }
            function nt(g, o) {
              var f = t.default.query(g);
              if (
                f == null ||
                f.blotName !== 'list-item' ||
                !z(
                  o,
                  `
`,
                )
              )
                return o;
              for (var S = -1, B = g.parentNode; !B.classList.contains('ql-clipboard'); )
                (t.default.query(B) || {}).blotName === 'list' && (S += 1), (B = B.parentNode);
              return S <= 0
                ? o
                : o.compose(new l.default().retain(o.length() - 1).retain(1, { indent: S }));
            }
            function lt(g, o) {
              return (
                z(
                  o,
                  `
`,
                ) ||
                  ((L(g) || (o.length() > 0 && g.nextSibling && L(g.nextSibling))) &&
                    o.insert(`
`)),
                o
              );
            }
            function ut(g, o) {
              if (
                L(g) &&
                g.nextElementSibling != null &&
                !z(
                  o,
                  `

`,
                )
              ) {
                var f = g.offsetHeight + parseFloat(H(g).marginTop) + parseFloat(H(g).marginBottom);
                g.nextElementSibling.offsetTop > g.offsetTop + f * 1.5 &&
                  o.insert(`
`);
              }
              return o;
            }
            function dt(g, o) {
              var f = {},
                S = g.style || {};
              return (
                S.fontStyle && H(g).fontStyle === 'italic' && (f.italic = !0),
                S.fontWeight &&
                  (H(g).fontWeight.startsWith('bold') || parseInt(H(g).fontWeight) >= 700) &&
                  (f.bold = !0),
                Object.keys(f).length > 0 && (o = D(o, f)),
                parseFloat(S.textIndent || 0) > 0 && (o = new l.default().insert('	').concat(o)),
                o
              );
            }
            function ht(g, o) {
              var f = g.data;
              if (g.parentNode.tagName === 'O:P') return o.insert(f.trim());
              if (f.trim().length === 0 && g.parentNode.classList.contains('ql-clipboard'))
                return o;
              if (!H(g.parentNode).whiteSpace.startsWith('pre')) {
                var S = function (Z, $) {
                  return ($ = $.replace(/[^\u00a0]/g, '')), $.length < 1 && Z ? ' ' : $;
                };
                (f = f.replace(/\r\n/g, ' ').replace(/\n/g, ' ')),
                  (f = f.replace(/\s\s+/g, S.bind(S, !0))),
                  ((g.previousSibling == null && L(g.parentNode)) ||
                    (g.previousSibling != null && L(g.previousSibling))) &&
                    (f = f.replace(/^\s+/, S.bind(S, !1))),
                  ((g.nextSibling == null && L(g.parentNode)) ||
                    (g.nextSibling != null && L(g.nextSibling))) &&
                    (f = f.replace(/\s+$/, S.bind(S, !1)));
              }
              return o.insert(f);
            }
            (w.default = I),
              (w.matchAttributor = V),
              (w.matchBlot = Q),
              (w.matchNewline = lt),
              (w.matchSpacing = ut),
              (w.matchText = ht);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function s(a, u) {
                  for (var n = 0; n < u.length; n++) {
                    var i = u[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(a, i.key, i);
                  }
                }
                return function (a, u, n) {
                  return u && s(a.prototype, u), n && s(a, n), a;
                };
              })(),
              k = function s(a, u, n) {
                a === null && (a = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(a, u);
                if (i === void 0) {
                  var c = Object.getPrototypeOf(a);
                  return c === null ? void 0 : s(c, u, n);
                } else {
                  if ('value' in i) return i.value;
                  var r = i.get;
                  return r === void 0 ? void 0 : r.call(n);
                }
              },
              v = y(6),
              b = m(v);
            function m(s) {
              return s && s.__esModule ? s : { default: s };
            }
            function d(s, a) {
              if (!(s instanceof a)) throw new TypeError('Cannot call a class as a function');
            }
            function l(s, a) {
              if (!s)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return a && (typeof a == 'object' || typeof a == 'function') ? a : s;
            }
            function e(s, a) {
              if (typeof a != 'function' && a !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof a,
                );
              (s.prototype = Object.create(a && a.prototype, {
                constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 },
              })),
                a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : (s.__proto__ = a));
            }
            var t = (function (s) {
              e(a, s);
              function a() {
                return (
                  d(this, a),
                  l(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
                );
              }
              return (
                q(
                  a,
                  [
                    {
                      key: 'optimize',
                      value: function (n) {
                        k(
                          a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                          'optimize',
                          this,
                        ).call(this, n),
                          this.domNode.tagName !== this.statics.tagName[0] &&
                            this.replaceWith(this.statics.blotName);
                      },
                    },
                  ],
                  [
                    {
                      key: 'create',
                      value: function () {
                        return k(a.__proto__ || Object.getPrototypeOf(a), 'create', this).call(
                          this,
                        );
                      },
                    },
                    {
                      key: 'formats',
                      value: function () {
                        return !0;
                      },
                    },
                  ],
                ),
                a
              );
            })(b.default);
            (t.blotName = 'bold'), (t.tagName = ['STRONG', 'B']), (w.default = t);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.addControls = w.default = void 0);
            var q = (function () {
                function p(O, _) {
                  var R = [],
                    j = !0,
                    K = !1,
                    Y = void 0;
                  try {
                    for (
                      var G = O[Symbol.iterator](), C;
                      !(j = (C = G.next()).done) && (R.push(C.value), !(_ && R.length === _));
                      j = !0
                    );
                  } catch (M) {
                    (K = !0), (Y = M);
                  } finally {
                    try {
                      !j && G.return && G.return();
                    } finally {
                      if (K) throw Y;
                    }
                  }
                  return R;
                }
                return function (O, _) {
                  if (Array.isArray(O)) return O;
                  if (Symbol.iterator in Object(O)) return p(O, _);
                  throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
              })(),
              k = (function () {
                function p(O, _) {
                  for (var R = 0; R < _.length; R++) {
                    var j = _[R];
                    (j.enumerable = j.enumerable || !1),
                      (j.configurable = !0),
                      'value' in j && (j.writable = !0),
                      Object.defineProperty(O, j.key, j);
                  }
                }
                return function (O, _, R) {
                  return _ && p(O.prototype, _), R && p(O, R), O;
                };
              })(),
              v = y(2),
              b = n(v),
              m = y(0),
              d = n(m),
              l = y(5),
              e = n(l),
              t = y(10),
              s = n(t),
              a = y(9),
              u = n(a);
            function n(p) {
              return p && p.__esModule ? p : { default: p };
            }
            function i(p, O, _) {
              return (
                O in p
                  ? Object.defineProperty(p, O, {
                      value: _,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (p[O] = _),
                p
              );
            }
            function c(p, O) {
              if (!(p instanceof O)) throw new TypeError('Cannot call a class as a function');
            }
            function r(p, O) {
              if (!p)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return O && (typeof O == 'object' || typeof O == 'function') ? O : p;
            }
            function h(p, O) {
              if (typeof O != 'function' && O !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof O,
                );
              (p.prototype = Object.create(O && O.prototype, {
                constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 },
              })),
                O && (Object.setPrototypeOf ? Object.setPrototypeOf(p, O) : (p.__proto__ = O));
            }
            var N = (0, s.default)('quill:toolbar'),
              A = (function (p) {
                h(O, p);
                function O(_, R) {
                  c(this, O);
                  var j = r(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, _, R));
                  if (Array.isArray(j.options.container)) {
                    var K = document.createElement('div');
                    P(K, j.options.container),
                      _.container.parentNode.insertBefore(K, _.container),
                      (j.container = K);
                  } else
                    typeof j.options.container == 'string'
                      ? (j.container = document.querySelector(j.options.container))
                      : (j.container = j.options.container);
                  if (!(j.container instanceof HTMLElement)) {
                    var Y;
                    return (Y = N.error('Container required for toolbar', j.options)), r(j, Y);
                  }
                  return (
                    j.container.classList.add('ql-toolbar'),
                    (j.controls = []),
                    (j.handlers = {}),
                    Object.keys(j.options.handlers).forEach(function (G) {
                      j.addHandler(G, j.options.handlers[G]);
                    }),
                    [].forEach.call(j.container.querySelectorAll('button, select'), function (G) {
                      j.attach(G);
                    }),
                    j.quill.on(e.default.events.EDITOR_CHANGE, function (G, C) {
                      G === e.default.events.SELECTION_CHANGE && j.update(C);
                    }),
                    j.quill.on(e.default.events.SCROLL_OPTIMIZE, function () {
                      var G = j.quill.selection.getRange(),
                        C = q(G, 1),
                        M = C[0];
                      j.update(M);
                    }),
                    j
                  );
                }
                return (
                  k(O, [
                    {
                      key: 'addHandler',
                      value: function (R, j) {
                        this.handlers[R] = j;
                      },
                    },
                    {
                      key: 'attach',
                      value: function (R) {
                        var j = this,
                          K = [].find.call(R.classList, function (G) {
                            return G.indexOf('ql-') === 0;
                          });
                        if (!!K) {
                          if (
                            ((K = K.slice('ql-'.length)),
                            R.tagName === 'BUTTON' && R.setAttribute('type', 'button'),
                            this.handlers[K] == null)
                          ) {
                            if (
                              this.quill.scroll.whitelist != null &&
                              this.quill.scroll.whitelist[K] == null
                            ) {
                              N.warn('ignoring attaching to disabled format', K, R);
                              return;
                            }
                            if (d.default.query(K) == null) {
                              N.warn('ignoring attaching to nonexistent format', K, R);
                              return;
                            }
                          }
                          var Y = R.tagName === 'SELECT' ? 'change' : 'click';
                          R.addEventListener(Y, function (G) {
                            var C = void 0;
                            if (R.tagName === 'SELECT') {
                              if (R.selectedIndex < 0) return;
                              var M = R.options[R.selectedIndex];
                              M.hasAttribute('selected') ? (C = !1) : (C = M.value || !1);
                            } else R.classList.contains('ql-active') ? (C = !1) : (C = R.value || !R.hasAttribute('value')), G.preventDefault();
                            j.quill.focus();
                            var x = j.quill.selection.getRange(),
                              I = q(x, 1),
                              D = I[0];
                            if (j.handlers[K] != null) j.handlers[K].call(j, C);
                            else if (d.default.query(K).prototype instanceof d.default.Embed) {
                              if (((C = prompt('Enter ' + K)), !C)) return;
                              j.quill.updateContents(
                                new b.default()
                                  .retain(D.index)
                                  .delete(D.length)
                                  .insert(i({}, K, C)),
                                e.default.sources.USER,
                              );
                            } else j.quill.format(K, C, e.default.sources.USER);
                            j.update(D);
                          }),
                            this.controls.push([K, R]);
                        }
                      },
                    },
                    {
                      key: 'update',
                      value: function (R) {
                        var j = R == null ? {} : this.quill.getFormat(R);
                        this.controls.forEach(function (K) {
                          var Y = q(K, 2),
                            G = Y[0],
                            C = Y[1];
                          if (C.tagName === 'SELECT') {
                            var M = void 0;
                            if (R == null) M = null;
                            else if (j[G] == null) M = C.querySelector('option[selected]');
                            else if (!Array.isArray(j[G])) {
                              var x = j[G];
                              typeof x == 'string' && (x = x.replace(/\"/g, '\\"')),
                                (M = C.querySelector('option[value="' + x + '"]'));
                            }
                            M == null
                              ? ((C.value = ''), (C.selectedIndex = -1))
                              : (M.selected = !0);
                          } else if (R == null) C.classList.remove('ql-active');
                          else if (C.hasAttribute('value')) {
                            var I =
                              j[G] === C.getAttribute('value') ||
                              (j[G] != null && j[G].toString() === C.getAttribute('value')) ||
                              (j[G] == null && !C.getAttribute('value'));
                            C.classList.toggle('ql-active', I);
                          } else C.classList.toggle('ql-active', j[G] != null);
                        });
                      },
                    },
                  ]),
                  O
                );
              })(u.default);
            A.DEFAULTS = {};
            function T(p, O, _) {
              var R = document.createElement('button');
              R.setAttribute('type', 'button'),
                R.classList.add('ql-' + O),
                _ != null && (R.value = _),
                p.appendChild(R);
            }
            function P(p, O) {
              Array.isArray(O[0]) || (O = [O]),
                O.forEach(function (_) {
                  var R = document.createElement('span');
                  R.classList.add('ql-formats'),
                    _.forEach(function (j) {
                      if (typeof j == 'string') T(R, j);
                      else {
                        var K = Object.keys(j)[0],
                          Y = j[K];
                        Array.isArray(Y) ? E(R, K, Y) : T(R, K, Y);
                      }
                    }),
                    p.appendChild(R);
                });
            }
            function E(p, O, _) {
              var R = document.createElement('select');
              R.classList.add('ql-' + O),
                _.forEach(function (j) {
                  var K = document.createElement('option');
                  j !== !1 ? K.setAttribute('value', j) : K.setAttribute('selected', 'selected'),
                    R.appendChild(K);
                }),
                p.appendChild(R);
            }
            (A.DEFAULTS = {
              container: null,
              handlers: {
                clean: function () {
                  var O = this,
                    _ = this.quill.getSelection();
                  if (_ != null)
                    if (_.length == 0) {
                      var R = this.quill.getFormat();
                      Object.keys(R).forEach(function (j) {
                        d.default.query(j, d.default.Scope.INLINE) != null && O.quill.format(j, !1);
                      });
                    } else this.quill.removeFormat(_, e.default.sources.USER);
                },
                direction: function (O) {
                  var _ = this.quill.getFormat().align;
                  O === 'rtl' && _ == null
                    ? this.quill.format('align', 'right', e.default.sources.USER)
                    : !O && _ === 'right' && this.quill.format('align', !1, e.default.sources.USER),
                    this.quill.format('direction', O, e.default.sources.USER);
                },
                indent: function (O) {
                  var _ = this.quill.getSelection(),
                    R = this.quill.getFormat(_),
                    j = parseInt(R.indent || 0);
                  if (O === '+1' || O === '-1') {
                    var K = O === '+1' ? 1 : -1;
                    R.direction === 'rtl' && (K *= -1),
                      this.quill.format('indent', j + K, e.default.sources.USER);
                  }
                },
                link: function (O) {
                  O === !0 && (O = prompt('Enter link URL:')),
                    this.quill.format('link', O, e.default.sources.USER);
                },
                list: function (O) {
                  var _ = this.quill.getSelection(),
                    R = this.quill.getFormat(_);
                  O === 'check'
                    ? R.list === 'checked' || R.list === 'unchecked'
                      ? this.quill.format('list', !1, e.default.sources.USER)
                      : this.quill.format('list', 'unchecked', e.default.sources.USER)
                    : this.quill.format('list', O, e.default.sources.USER);
                },
              },
            }),
              (w.default = A),
              (w.addControls = P);
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function s(a, u) {
                  for (var n = 0; n < u.length; n++) {
                    var i = u[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(a, i.key, i);
                  }
                }
                return function (a, u, n) {
                  return u && s(a.prototype, u), n && s(a, n), a;
                };
              })(),
              k = function s(a, u, n) {
                a === null && (a = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(a, u);
                if (i === void 0) {
                  var c = Object.getPrototypeOf(a);
                  return c === null ? void 0 : s(c, u, n);
                } else {
                  if ('value' in i) return i.value;
                  var r = i.get;
                  return r === void 0 ? void 0 : r.call(n);
                }
              },
              v = y(28),
              b = m(v);
            function m(s) {
              return s && s.__esModule ? s : { default: s };
            }
            function d(s, a) {
              if (!(s instanceof a)) throw new TypeError('Cannot call a class as a function');
            }
            function l(s, a) {
              if (!s)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return a && (typeof a == 'object' || typeof a == 'function') ? a : s;
            }
            function e(s, a) {
              if (typeof a != 'function' && a !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof a,
                );
              (s.prototype = Object.create(a && a.prototype, {
                constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 },
              })),
                a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : (s.__proto__ = a));
            }
            var t = (function (s) {
              e(a, s);
              function a(u, n) {
                d(this, a);
                var i = l(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, u));
                return (
                  (i.label.innerHTML = n),
                  i.container.classList.add('ql-color-picker'),
                  [].slice
                    .call(i.container.querySelectorAll('.ql-picker-item'), 0, 7)
                    .forEach(function (c) {
                      c.classList.add('ql-primary');
                    }),
                  i
                );
              }
              return (
                q(a, [
                  {
                    key: 'buildItem',
                    value: function (n) {
                      var i = k(
                        a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                        'buildItem',
                        this,
                      ).call(this, n);
                      return (i.style.backgroundColor = n.getAttribute('value') || ''), i;
                    },
                  },
                  {
                    key: 'selectItem',
                    value: function (n, i) {
                      k(
                        a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                        'selectItem',
                        this,
                      ).call(this, n, i);
                      var c = this.label.querySelector('.ql-color-label'),
                        r = (n && n.getAttribute('data-value')) || '';
                      c && (c.tagName === 'line' ? (c.style.stroke = r) : (c.style.fill = r));
                    },
                  },
                ]),
                a
              );
            })(b.default);
            w.default = t;
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function s(a, u) {
                  for (var n = 0; n < u.length; n++) {
                    var i = u[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(a, i.key, i);
                  }
                }
                return function (a, u, n) {
                  return u && s(a.prototype, u), n && s(a, n), a;
                };
              })(),
              k = function s(a, u, n) {
                a === null && (a = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(a, u);
                if (i === void 0) {
                  var c = Object.getPrototypeOf(a);
                  return c === null ? void 0 : s(c, u, n);
                } else {
                  if ('value' in i) return i.value;
                  var r = i.get;
                  return r === void 0 ? void 0 : r.call(n);
                }
              },
              v = y(28),
              b = m(v);
            function m(s) {
              return s && s.__esModule ? s : { default: s };
            }
            function d(s, a) {
              if (!(s instanceof a)) throw new TypeError('Cannot call a class as a function');
            }
            function l(s, a) {
              if (!s)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return a && (typeof a == 'object' || typeof a == 'function') ? a : s;
            }
            function e(s, a) {
              if (typeof a != 'function' && a !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof a,
                );
              (s.prototype = Object.create(a && a.prototype, {
                constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 },
              })),
                a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : (s.__proto__ = a));
            }
            var t = (function (s) {
              e(a, s);
              function a(u, n) {
                d(this, a);
                var i = l(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, u));
                return (
                  i.container.classList.add('ql-icon-picker'),
                  [].forEach.call(i.container.querySelectorAll('.ql-picker-item'), function (c) {
                    c.innerHTML = n[c.getAttribute('data-value') || ''];
                  }),
                  (i.defaultItem = i.container.querySelector('.ql-selected')),
                  i.selectItem(i.defaultItem),
                  i
                );
              }
              return (
                q(a, [
                  {
                    key: 'selectItem',
                    value: function (n, i) {
                      k(
                        a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                        'selectItem',
                        this,
                      ).call(this, n, i),
                        (n = n || this.defaultItem),
                        (this.label.innerHTML = n.innerHTML);
                    },
                  },
                ]),
                a
              );
            })(b.default);
            w.default = t;
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
              function b(m, d) {
                for (var l = 0; l < d.length; l++) {
                  var e = d[l];
                  (e.enumerable = e.enumerable || !1),
                    (e.configurable = !0),
                    'value' in e && (e.writable = !0),
                    Object.defineProperty(m, e.key, e);
                }
              }
              return function (m, d, l) {
                return d && b(m.prototype, d), l && b(m, l), m;
              };
            })();
            function k(b, m) {
              if (!(b instanceof m)) throw new TypeError('Cannot call a class as a function');
            }
            var v = (function () {
              function b(m, d) {
                var l = this;
                k(this, b),
                  (this.quill = m),
                  (this.boundsContainer = d || document.body),
                  (this.root = m.addContainer('ql-tooltip')),
                  (this.root.innerHTML = this.constructor.TEMPLATE),
                  this.quill.root === this.quill.scrollingContainer &&
                    this.quill.root.addEventListener('scroll', function () {
                      l.root.style.marginTop = -1 * l.quill.root.scrollTop + 'px';
                    }),
                  this.hide();
              }
              return (
                q(b, [
                  {
                    key: 'hide',
                    value: function () {
                      this.root.classList.add('ql-hidden');
                    },
                  },
                  {
                    key: 'position',
                    value: function (d) {
                      var l = d.left + d.width / 2 - this.root.offsetWidth / 2,
                        e = d.bottom + this.quill.root.scrollTop;
                      (this.root.style.left = l + 'px'),
                        (this.root.style.top = e + 'px'),
                        this.root.classList.remove('ql-flip');
                      var t = this.boundsContainer.getBoundingClientRect(),
                        s = this.root.getBoundingClientRect(),
                        a = 0;
                      if (
                        (s.right > t.right &&
                          ((a = t.right - s.right), (this.root.style.left = l + a + 'px')),
                        s.left < t.left &&
                          ((a = t.left - s.left), (this.root.style.left = l + a + 'px')),
                        s.bottom > t.bottom)
                      ) {
                        var u = s.bottom - s.top,
                          n = d.bottom - d.top + u;
                        (this.root.style.top = e - n + 'px'), this.root.classList.add('ql-flip');
                      }
                      return a;
                    },
                  },
                  {
                    key: 'show',
                    value: function () {
                      this.root.classList.remove('ql-editing'),
                        this.root.classList.remove('ql-hidden');
                    },
                  },
                ]),
                b
              );
            })();
            w.default = v;
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function E(p, O) {
                  var _ = [],
                    R = !0,
                    j = !1,
                    K = void 0;
                  try {
                    for (
                      var Y = p[Symbol.iterator](), G;
                      !(R = (G = Y.next()).done) && (_.push(G.value), !(O && _.length === O));
                      R = !0
                    );
                  } catch (C) {
                    (j = !0), (K = C);
                  } finally {
                    try {
                      !R && Y.return && Y.return();
                    } finally {
                      if (j) throw K;
                    }
                  }
                  return _;
                }
                return function (p, O) {
                  if (Array.isArray(p)) return p;
                  if (Symbol.iterator in Object(p)) return E(p, O);
                  throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
              })(),
              k = function E(p, O, _) {
                p === null && (p = Function.prototype);
                var R = Object.getOwnPropertyDescriptor(p, O);
                if (R === void 0) {
                  var j = Object.getPrototypeOf(p);
                  return j === null ? void 0 : E(j, O, _);
                } else {
                  if ('value' in R) return R.value;
                  var K = R.get;
                  return K === void 0 ? void 0 : K.call(_);
                }
              },
              v = (function () {
                function E(p, O) {
                  for (var _ = 0; _ < O.length; _++) {
                    var R = O[_];
                    (R.enumerable = R.enumerable || !1),
                      (R.configurable = !0),
                      'value' in R && (R.writable = !0),
                      Object.defineProperty(p, R.key, R);
                  }
                }
                return function (p, O, _) {
                  return O && E(p.prototype, O), _ && E(p, _), p;
                };
              })(),
              b = y(3),
              m = c(b),
              d = y(8),
              l = c(d),
              e = y(43),
              t = c(e),
              s = y(27),
              a = c(s),
              u = y(15),
              n = y(41),
              i = c(n);
            function c(E) {
              return E && E.__esModule ? E : { default: E };
            }
            function r(E, p) {
              if (!(E instanceof p)) throw new TypeError('Cannot call a class as a function');
            }
            function h(E, p) {
              if (!E)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return p && (typeof p == 'object' || typeof p == 'function') ? p : E;
            }
            function N(E, p) {
              if (typeof p != 'function' && p !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof p,
                );
              (E.prototype = Object.create(p && p.prototype, {
                constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 },
              })),
                p && (Object.setPrototypeOf ? Object.setPrototypeOf(E, p) : (E.__proto__ = p));
            }
            var A = [
                [{ header: ['1', '2', '3', !1] }],
                ['bold', 'italic', 'underline', 'link'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['clean'],
              ],
              T = (function (E) {
                N(p, E);
                function p(O, _) {
                  r(this, p),
                    _.modules.toolbar != null &&
                      _.modules.toolbar.container == null &&
                      (_.modules.toolbar.container = A);
                  var R = h(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, O, _));
                  return R.quill.container.classList.add('ql-snow'), R;
                }
                return (
                  v(p, [
                    {
                      key: 'extendToolbar',
                      value: function (_) {
                        _.container.classList.add('ql-snow'),
                          this.buildButtons(
                            [].slice.call(_.container.querySelectorAll('button')),
                            i.default,
                          ),
                          this.buildPickers(
                            [].slice.call(_.container.querySelectorAll('select')),
                            i.default,
                          ),
                          (this.tooltip = new P(this.quill, this.options.bounds)),
                          _.container.querySelector('.ql-link') &&
                            this.quill.keyboard.addBinding(
                              { key: 'K', shortKey: !0 },
                              function (R, j) {
                                _.handlers.link.call(_, !j.format.link);
                              },
                            );
                      },
                    },
                  ]),
                  p
                );
              })(t.default);
            T.DEFAULTS = (0, m.default)(!0, {}, t.default.DEFAULTS, {
              modules: {
                toolbar: {
                  handlers: {
                    link: function (p) {
                      if (p) {
                        var O = this.quill.getSelection();
                        if (O == null || O.length == 0) return;
                        var _ = this.quill.getText(O);
                        /^\S+@\S+\.\S+$/.test(_) &&
                          _.indexOf('mailto:') !== 0 &&
                          (_ = 'mailto:' + _);
                        var R = this.quill.theme.tooltip;
                        R.edit('link', _);
                      } else this.quill.format('link', !1);
                    },
                  },
                },
              },
            });
            var P = (function (E) {
              N(p, E);
              function p(O, _) {
                r(this, p);
                var R = h(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, O, _));
                return (R.preview = R.root.querySelector('a.ql-preview')), R;
              }
              return (
                v(p, [
                  {
                    key: 'listen',
                    value: function () {
                      var _ = this;
                      k(
                        p.prototype.__proto__ || Object.getPrototypeOf(p.prototype),
                        'listen',
                        this,
                      ).call(this),
                        this.root
                          .querySelector('a.ql-action')
                          .addEventListener('click', function (R) {
                            _.root.classList.contains('ql-editing')
                              ? _.save()
                              : _.edit('link', _.preview.textContent),
                              R.preventDefault();
                          }),
                        this.root
                          .querySelector('a.ql-remove')
                          .addEventListener('click', function (R) {
                            if (_.linkRange != null) {
                              var j = _.linkRange;
                              _.restoreFocus(),
                                _.quill.formatText(j, 'link', !1, l.default.sources.USER),
                                delete _.linkRange;
                            }
                            R.preventDefault(), _.hide();
                          }),
                        this.quill.on(l.default.events.SELECTION_CHANGE, function (R, j, K) {
                          if (R != null) {
                            if (R.length === 0 && K === l.default.sources.USER) {
                              var Y = _.quill.scroll.descendant(a.default, R.index),
                                G = q(Y, 2),
                                C = G[0],
                                M = G[1];
                              if (C != null) {
                                _.linkRange = new u.Range(R.index - M, C.length());
                                var x = a.default.formats(C.domNode);
                                (_.preview.textContent = x),
                                  _.preview.setAttribute('href', x),
                                  _.show(),
                                  _.position(_.quill.getBounds(_.linkRange));
                                return;
                              }
                            } else delete _.linkRange;
                            _.hide();
                          }
                        });
                    },
                  },
                  {
                    key: 'show',
                    value: function () {
                      k(
                        p.prototype.__proto__ || Object.getPrototypeOf(p.prototype),
                        'show',
                        this,
                      ).call(this),
                        this.root.removeAttribute('data-mode');
                    },
                  },
                ]),
                p
              );
            })(e.BaseTooltip);
            (P.TEMPLATE = [
              '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
              '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
              '<a class="ql-action"></a>',
              '<a class="ql-remove"></a>',
            ].join('')),
              (w.default = T);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(29),
              k = B(q),
              v = y(36),
              b = y(38),
              m = y(64),
              d = y(65),
              l = B(d),
              e = y(66),
              t = B(e),
              s = y(67),
              a = B(s),
              u = y(37),
              n = y(26),
              i = y(39),
              c = y(40),
              r = y(56),
              h = B(r),
              N = y(68),
              A = B(N),
              T = y(27),
              P = B(T),
              E = y(69),
              p = B(E),
              O = y(70),
              _ = B(O),
              R = y(71),
              j = B(R),
              K = y(72),
              Y = B(K),
              G = y(73),
              C = B(G),
              M = y(13),
              x = B(M),
              I = y(74),
              D = B(I),
              H = y(75),
              z = B(H),
              L = y(57),
              F = B(L),
              W = y(41),
              V = B(W),
              Q = y(28),
              X = B(Q),
              et = y(59),
              nt = B(et),
              lt = y(60),
              ut = B(lt),
              dt = y(61),
              ht = B(dt),
              g = y(108),
              o = B(g),
              f = y(62),
              S = B(f);
            function B(Z) {
              return Z && Z.__esModule ? Z : { default: Z };
            }
            k.default.register(
              {
                'attributors/attribute/direction': b.DirectionAttribute,
                'attributors/class/align': v.AlignClass,
                'attributors/class/background': u.BackgroundClass,
                'attributors/class/color': n.ColorClass,
                'attributors/class/direction': b.DirectionClass,
                'attributors/class/font': i.FontClass,
                'attributors/class/size': c.SizeClass,
                'attributors/style/align': v.AlignStyle,
                'attributors/style/background': u.BackgroundStyle,
                'attributors/style/color': n.ColorStyle,
                'attributors/style/direction': b.DirectionStyle,
                'attributors/style/font': i.FontStyle,
                'attributors/style/size': c.SizeStyle,
              },
              !0,
            ),
              k.default.register(
                {
                  'formats/align': v.AlignClass,
                  'formats/direction': b.DirectionClass,
                  'formats/indent': m.IndentClass,
                  'formats/background': u.BackgroundStyle,
                  'formats/color': n.ColorStyle,
                  'formats/font': i.FontClass,
                  'formats/size': c.SizeClass,
                  'formats/blockquote': l.default,
                  'formats/code-block': x.default,
                  'formats/header': t.default,
                  'formats/list': a.default,
                  'formats/bold': h.default,
                  'formats/code': M.Code,
                  'formats/italic': A.default,
                  'formats/link': P.default,
                  'formats/script': p.default,
                  'formats/strike': _.default,
                  'formats/underline': j.default,
                  'formats/image': Y.default,
                  'formats/video': C.default,
                  'formats/list/item': s.ListItem,
                  'modules/formula': D.default,
                  'modules/syntax': z.default,
                  'modules/toolbar': F.default,
                  'themes/bubble': o.default,
                  'themes/snow': S.default,
                  'ui/icons': V.default,
                  'ui/picker': X.default,
                  'ui/icon-picker': ut.default,
                  'ui/color-picker': nt.default,
                  'ui/tooltip': ht.default,
                },
                !0,
              ),
              (w.default = k.default);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }), (w.IndentClass = void 0);
            var q = (function () {
                function a(u, n) {
                  for (var i = 0; i < n.length; i++) {
                    var c = n[i];
                    (c.enumerable = c.enumerable || !1),
                      (c.configurable = !0),
                      'value' in c && (c.writable = !0),
                      Object.defineProperty(u, c.key, c);
                  }
                }
                return function (u, n, i) {
                  return n && a(u.prototype, n), i && a(u, i), u;
                };
              })(),
              k = function a(u, n, i) {
                u === null && (u = Function.prototype);
                var c = Object.getOwnPropertyDescriptor(u, n);
                if (c === void 0) {
                  var r = Object.getPrototypeOf(u);
                  return r === null ? void 0 : a(r, n, i);
                } else {
                  if ('value' in c) return c.value;
                  var h = c.get;
                  return h === void 0 ? void 0 : h.call(i);
                }
              },
              v = y(0),
              b = m(v);
            function m(a) {
              return a && a.__esModule ? a : { default: a };
            }
            function d(a, u) {
              if (!(a instanceof u)) throw new TypeError('Cannot call a class as a function');
            }
            function l(a, u) {
              if (!a)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return u && (typeof u == 'object' || typeof u == 'function') ? u : a;
            }
            function e(a, u) {
              if (typeof u != 'function' && u !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof u,
                );
              (a.prototype = Object.create(u && u.prototype, {
                constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
              })),
                u && (Object.setPrototypeOf ? Object.setPrototypeOf(a, u) : (a.__proto__ = u));
            }
            var t = (function (a) {
                e(u, a);
                function u() {
                  return (
                    d(this, u),
                    l(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments))
                  );
                }
                return (
                  q(u, [
                    {
                      key: 'add',
                      value: function (i, c) {
                        if (c === '+1' || c === '-1') {
                          var r = this.value(i) || 0;
                          c = c === '+1' ? r + 1 : r - 1;
                        }
                        return c === 0
                          ? (this.remove(i), !0)
                          : k(
                              u.prototype.__proto__ || Object.getPrototypeOf(u.prototype),
                              'add',
                              this,
                            ).call(this, i, c);
                      },
                    },
                    {
                      key: 'canAdd',
                      value: function (i, c) {
                        return (
                          k(
                            u.prototype.__proto__ || Object.getPrototypeOf(u.prototype),
                            'canAdd',
                            this,
                          ).call(this, i, c) ||
                          k(
                            u.prototype.__proto__ || Object.getPrototypeOf(u.prototype),
                            'canAdd',
                            this,
                          ).call(this, i, parseInt(c))
                        );
                      },
                    },
                    {
                      key: 'value',
                      value: function (i) {
                        return (
                          parseInt(
                            k(
                              u.prototype.__proto__ || Object.getPrototypeOf(u.prototype),
                              'value',
                              this,
                            ).call(this, i),
                          ) || void 0
                        );
                      },
                    },
                  ]),
                  u
                );
              })(b.default.Attributor.Class),
              s = new t('indent', 'ql-indent', {
                scope: b.default.Scope.BLOCK,
                whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
              });
            w.IndentClass = s;
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(4),
              k = v(q);
            function v(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function b(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function m(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
            }
            function d(e, t) {
              if (typeof t != 'function' && t !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            var l = (function (e) {
              d(t, e);
              function t() {
                return (
                  b(this, t),
                  m(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
              }
              return t;
            })(k.default);
            (l.blotName = 'blockquote'), (l.tagName = 'blockquote'), (w.default = l);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function t(s, a) {
                  for (var u = 0; u < a.length; u++) {
                    var n = a[u];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(s, n.key, n);
                  }
                }
                return function (s, a, u) {
                  return a && t(s.prototype, a), u && t(s, u), s;
                };
              })(),
              k = y(4),
              v = b(k);
            function b(t) {
              return t && t.__esModule ? t : { default: t };
            }
            function m(t, s) {
              if (!(t instanceof s)) throw new TypeError('Cannot call a class as a function');
            }
            function d(t, s) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return s && (typeof s == 'object' || typeof s == 'function') ? s : t;
            }
            function l(t, s) {
              if (typeof s != 'function' && s !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof s,
                );
              (t.prototype = Object.create(s && s.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
              })),
                s && (Object.setPrototypeOf ? Object.setPrototypeOf(t, s) : (t.__proto__ = s));
            }
            var e = (function (t) {
              l(s, t);
              function s() {
                return (
                  m(this, s),
                  d(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments))
                );
              }
              return (
                q(s, null, [
                  {
                    key: 'formats',
                    value: function (u) {
                      return this.tagName.indexOf(u.tagName) + 1;
                    },
                  },
                ]),
                s
              );
            })(v.default);
            (e.blotName = 'header'),
              (e.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']),
              (w.default = e);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.default = w.ListItem = void 0);
            var q = (function () {
                function r(h, N) {
                  for (var A = 0; A < N.length; A++) {
                    var T = N[A];
                    (T.enumerable = T.enumerable || !1),
                      (T.configurable = !0),
                      'value' in T && (T.writable = !0),
                      Object.defineProperty(h, T.key, T);
                  }
                }
                return function (h, N, A) {
                  return N && r(h.prototype, N), A && r(h, A), h;
                };
              })(),
              k = function r(h, N, A) {
                h === null && (h = Function.prototype);
                var T = Object.getOwnPropertyDescriptor(h, N);
                if (T === void 0) {
                  var P = Object.getPrototypeOf(h);
                  return P === null ? void 0 : r(P, N, A);
                } else {
                  if ('value' in T) return T.value;
                  var E = T.get;
                  return E === void 0 ? void 0 : E.call(A);
                }
              },
              v = y(0),
              b = t(v),
              m = y(4),
              d = t(m),
              l = y(25),
              e = t(l);
            function t(r) {
              return r && r.__esModule ? r : { default: r };
            }
            function s(r, h, N) {
              return (
                h in r
                  ? Object.defineProperty(r, h, {
                      value: N,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[h] = N),
                r
              );
            }
            function a(r, h) {
              if (!(r instanceof h)) throw new TypeError('Cannot call a class as a function');
            }
            function u(r, h) {
              if (!r)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return h && (typeof h == 'object' || typeof h == 'function') ? h : r;
            }
            function n(r, h) {
              if (typeof h != 'function' && h !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof h,
                );
              (r.prototype = Object.create(h && h.prototype, {
                constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
              })),
                h && (Object.setPrototypeOf ? Object.setPrototypeOf(r, h) : (r.__proto__ = h));
            }
            var i = (function (r) {
              n(h, r);
              function h() {
                return (
                  a(this, h),
                  u(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments))
                );
              }
              return (
                q(
                  h,
                  [
                    {
                      key: 'format',
                      value: function (A, T) {
                        A === c.blotName && !T
                          ? this.replaceWith(b.default.create(this.statics.scope))
                          : k(
                              h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                              'format',
                              this,
                            ).call(this, A, T);
                      },
                    },
                    {
                      key: 'remove',
                      value: function () {
                        this.prev == null && this.next == null
                          ? this.parent.remove()
                          : k(
                              h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                              'remove',
                              this,
                            ).call(this);
                      },
                    },
                    {
                      key: 'replaceWith',
                      value: function (A, T) {
                        return (
                          this.parent.isolate(this.offset(this.parent), this.length()),
                          A === this.parent.statics.blotName
                            ? (this.parent.replaceWith(A, T), this)
                            : (this.parent.unwrap(),
                              k(
                                h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                                'replaceWith',
                                this,
                              ).call(this, A, T))
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: 'formats',
                      value: function (A) {
                        return A.tagName === this.tagName
                          ? void 0
                          : k(h.__proto__ || Object.getPrototypeOf(h), 'formats', this).call(
                              this,
                              A,
                            );
                      },
                    },
                  ],
                ),
                h
              );
            })(d.default);
            (i.blotName = 'list-item'), (i.tagName = 'LI');
            var c = (function (r) {
              n(h, r),
                q(h, null, [
                  {
                    key: 'create',
                    value: function (A) {
                      var T = A === 'ordered' ? 'OL' : 'UL',
                        P = k(h.__proto__ || Object.getPrototypeOf(h), 'create', this).call(
                          this,
                          T,
                        );
                      return (
                        (A === 'checked' || A === 'unchecked') &&
                          P.setAttribute('data-checked', A === 'checked'),
                        P
                      );
                    },
                  },
                  {
                    key: 'formats',
                    value: function (A) {
                      if (A.tagName === 'OL') return 'ordered';
                      if (A.tagName === 'UL')
                        return A.hasAttribute('data-checked')
                          ? A.getAttribute('data-checked') === 'true'
                            ? 'checked'
                            : 'unchecked'
                          : 'bullet';
                    },
                  },
                ]);
              function h(N) {
                a(this, h);
                var A = u(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, N)),
                  T = function (E) {
                    if (E.target.parentNode === N) {
                      var p = A.statics.formats(N),
                        O = b.default.find(E.target);
                      p === 'checked'
                        ? O.format('list', 'unchecked')
                        : p === 'unchecked' && O.format('list', 'checked');
                    }
                  };
                return N.addEventListener('touchstart', T), N.addEventListener('mousedown', T), A;
              }
              return (
                q(h, [
                  {
                    key: 'format',
                    value: function (A, T) {
                      this.children.length > 0 && this.children.tail.format(A, T);
                    },
                  },
                  {
                    key: 'formats',
                    value: function () {
                      return s({}, this.statics.blotName, this.statics.formats(this.domNode));
                    },
                  },
                  {
                    key: 'insertBefore',
                    value: function (A, T) {
                      if (A instanceof i)
                        k(
                          h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                          'insertBefore',
                          this,
                        ).call(this, A, T);
                      else {
                        var P = T == null ? this.length() : T.offset(this),
                          E = this.split(P);
                        E.parent.insertBefore(A, E);
                      }
                    },
                  },
                  {
                    key: 'optimize',
                    value: function (A) {
                      k(
                        h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                        'optimize',
                        this,
                      ).call(this, A);
                      var T = this.next;
                      T != null &&
                        T.prev === this &&
                        T.statics.blotName === this.statics.blotName &&
                        T.domNode.tagName === this.domNode.tagName &&
                        T.domNode.getAttribute('data-checked') ===
                          this.domNode.getAttribute('data-checked') &&
                        (T.moveChildren(this), T.remove());
                    },
                  },
                  {
                    key: 'replace',
                    value: function (A) {
                      if (A.statics.blotName !== this.statics.blotName) {
                        var T = b.default.create(this.statics.defaultChild);
                        A.moveChildren(T), this.appendChild(T);
                      }
                      k(
                        h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                        'replace',
                        this,
                      ).call(this, A);
                    },
                  },
                ]),
                h
              );
            })(e.default);
            (c.blotName = 'list'),
              (c.scope = b.default.Scope.BLOCK_BLOT),
              (c.tagName = ['OL', 'UL']),
              (c.defaultChild = 'list-item'),
              (c.allowedChildren = [i]),
              (w.ListItem = i),
              (w.default = c);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(56),
              k = v(q);
            function v(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function b(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function m(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
            }
            function d(e, t) {
              if (typeof t != 'function' && t !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            var l = (function (e) {
              d(t, e);
              function t() {
                return (
                  b(this, t),
                  m(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
              }
              return t;
            })(k.default);
            (l.blotName = 'italic'), (l.tagName = ['EM', 'I']), (w.default = l);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function s(a, u) {
                  for (var n = 0; n < u.length; n++) {
                    var i = u[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(a, i.key, i);
                  }
                }
                return function (a, u, n) {
                  return u && s(a.prototype, u), n && s(a, n), a;
                };
              })(),
              k = function s(a, u, n) {
                a === null && (a = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(a, u);
                if (i === void 0) {
                  var c = Object.getPrototypeOf(a);
                  return c === null ? void 0 : s(c, u, n);
                } else {
                  if ('value' in i) return i.value;
                  var r = i.get;
                  return r === void 0 ? void 0 : r.call(n);
                }
              },
              v = y(6),
              b = m(v);
            function m(s) {
              return s && s.__esModule ? s : { default: s };
            }
            function d(s, a) {
              if (!(s instanceof a)) throw new TypeError('Cannot call a class as a function');
            }
            function l(s, a) {
              if (!s)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return a && (typeof a == 'object' || typeof a == 'function') ? a : s;
            }
            function e(s, a) {
              if (typeof a != 'function' && a !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof a,
                );
              (s.prototype = Object.create(a && a.prototype, {
                constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 },
              })),
                a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : (s.__proto__ = a));
            }
            var t = (function (s) {
              e(a, s);
              function a() {
                return (
                  d(this, a),
                  l(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
                );
              }
              return (
                q(a, null, [
                  {
                    key: 'create',
                    value: function (n) {
                      return n === 'super'
                        ? document.createElement('sup')
                        : n === 'sub'
                        ? document.createElement('sub')
                        : k(a.__proto__ || Object.getPrototypeOf(a), 'create', this).call(this, n);
                    },
                  },
                  {
                    key: 'formats',
                    value: function (n) {
                      if (n.tagName === 'SUB') return 'sub';
                      if (n.tagName === 'SUP') return 'super';
                    },
                  },
                ]),
                a
              );
            })(b.default);
            (t.blotName = 'script'), (t.tagName = ['SUB', 'SUP']), (w.default = t);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(6),
              k = v(q);
            function v(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function b(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function m(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
            }
            function d(e, t) {
              if (typeof t != 'function' && t !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            var l = (function (e) {
              d(t, e);
              function t() {
                return (
                  b(this, t),
                  m(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
              }
              return t;
            })(k.default);
            (l.blotName = 'strike'), (l.tagName = 'S'), (w.default = l);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = y(6),
              k = v(q);
            function v(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function b(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function m(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
            }
            function d(e, t) {
              if (typeof t != 'function' && t !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            var l = (function (e) {
              d(t, e);
              function t() {
                return (
                  b(this, t),
                  m(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
              }
              return t;
            })(k.default);
            (l.blotName = 'underline'), (l.tagName = 'U'), (w.default = l);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function u(n, i) {
                  for (var c = 0; c < i.length; c++) {
                    var r = i[c];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(n, r.key, r);
                  }
                }
                return function (n, i, c) {
                  return i && u(n.prototype, i), c && u(n, c), n;
                };
              })(),
              k = function u(n, i, c) {
                n === null && (n = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(n, i);
                if (r === void 0) {
                  var h = Object.getPrototypeOf(n);
                  return h === null ? void 0 : u(h, i, c);
                } else {
                  if ('value' in r) return r.value;
                  var N = r.get;
                  return N === void 0 ? void 0 : N.call(c);
                }
              },
              v = y(0),
              b = d(v),
              m = y(27);
            function d(u) {
              return u && u.__esModule ? u : { default: u };
            }
            function l(u, n) {
              if (!(u instanceof n)) throw new TypeError('Cannot call a class as a function');
            }
            function e(u, n) {
              if (!u)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return n && (typeof n == 'object' || typeof n == 'function') ? n : u;
            }
            function t(u, n) {
              if (typeof n != 'function' && n !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof n,
                );
              (u.prototype = Object.create(n && n.prototype, {
                constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
              })),
                n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : (u.__proto__ = n));
            }
            var s = ['alt', 'height', 'width'],
              a = (function (u) {
                t(n, u);
                function n() {
                  return (
                    l(this, n),
                    e(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                  );
                }
                return (
                  q(
                    n,
                    [
                      {
                        key: 'format',
                        value: function (c, r) {
                          s.indexOf(c) > -1
                            ? r
                              ? this.domNode.setAttribute(c, r)
                              : this.domNode.removeAttribute(c)
                            : k(
                                n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                                'format',
                                this,
                              ).call(this, c, r);
                        },
                      },
                    ],
                    [
                      {
                        key: 'create',
                        value: function (c) {
                          var r = k(n.__proto__ || Object.getPrototypeOf(n), 'create', this).call(
                            this,
                            c,
                          );
                          return typeof c == 'string' && r.setAttribute('src', this.sanitize(c)), r;
                        },
                      },
                      {
                        key: 'formats',
                        value: function (c) {
                          return s.reduce(function (r, h) {
                            return c.hasAttribute(h) && (r[h] = c.getAttribute(h)), r;
                          }, {});
                        },
                      },
                      {
                        key: 'match',
                        value: function (c) {
                          return /\.(jpe?g|gif|png)$/.test(c) || /^data:image\/.+;base64/.test(c);
                        },
                      },
                      {
                        key: 'sanitize',
                        value: function (c) {
                          return (0, m.sanitize)(c, ['http', 'https', 'data']) ? c : '//:0';
                        },
                      },
                      {
                        key: 'value',
                        value: function (c) {
                          return c.getAttribute('src');
                        },
                      },
                    ],
                  ),
                  n
                );
              })(b.default.Embed);
            (a.blotName = 'image'), (a.tagName = 'IMG'), (w.default = a);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 });
            var q = (function () {
                function u(n, i) {
                  for (var c = 0; c < i.length; c++) {
                    var r = i[c];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(n, r.key, r);
                  }
                }
                return function (n, i, c) {
                  return i && u(n.prototype, i), c && u(n, c), n;
                };
              })(),
              k = function u(n, i, c) {
                n === null && (n = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(n, i);
                if (r === void 0) {
                  var h = Object.getPrototypeOf(n);
                  return h === null ? void 0 : u(h, i, c);
                } else {
                  if ('value' in r) return r.value;
                  var N = r.get;
                  return N === void 0 ? void 0 : N.call(c);
                }
              },
              v = y(4),
              b = y(27),
              m = d(b);
            function d(u) {
              return u && u.__esModule ? u : { default: u };
            }
            function l(u, n) {
              if (!(u instanceof n)) throw new TypeError('Cannot call a class as a function');
            }
            function e(u, n) {
              if (!u)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return n && (typeof n == 'object' || typeof n == 'function') ? n : u;
            }
            function t(u, n) {
              if (typeof n != 'function' && n !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof n,
                );
              (u.prototype = Object.create(n && n.prototype, {
                constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
              })),
                n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : (u.__proto__ = n));
            }
            var s = ['height', 'width'],
              a = (function (u) {
                t(n, u);
                function n() {
                  return (
                    l(this, n),
                    e(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                  );
                }
                return (
                  q(
                    n,
                    [
                      {
                        key: 'format',
                        value: function (c, r) {
                          s.indexOf(c) > -1
                            ? r
                              ? this.domNode.setAttribute(c, r)
                              : this.domNode.removeAttribute(c)
                            : k(
                                n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                                'format',
                                this,
                              ).call(this, c, r);
                        },
                      },
                    ],
                    [
                      {
                        key: 'create',
                        value: function (c) {
                          var r = k(n.__proto__ || Object.getPrototypeOf(n), 'create', this).call(
                            this,
                            c,
                          );
                          return (
                            r.setAttribute('frameborder', '0'),
                            r.setAttribute('allowfullscreen', !0),
                            r.setAttribute('src', this.sanitize(c)),
                            r
                          );
                        },
                      },
                      {
                        key: 'formats',
                        value: function (c) {
                          return s.reduce(function (r, h) {
                            return c.hasAttribute(h) && (r[h] = c.getAttribute(h)), r;
                          }, {});
                        },
                      },
                      {
                        key: 'sanitize',
                        value: function (c) {
                          return m.default.sanitize(c);
                        },
                      },
                      {
                        key: 'value',
                        value: function (c) {
                          return c.getAttribute('src');
                        },
                      },
                    ],
                  ),
                  n
                );
              })(v.BlockEmbed);
            (a.blotName = 'video'),
              (a.className = 'ql-video'),
              (a.tagName = 'IFRAME'),
              (w.default = a);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.default = w.FormulaBlot = void 0);
            var q = (function () {
                function c(r, h) {
                  for (var N = 0; N < h.length; N++) {
                    var A = h[N];
                    (A.enumerable = A.enumerable || !1),
                      (A.configurable = !0),
                      'value' in A && (A.writable = !0),
                      Object.defineProperty(r, A.key, A);
                  }
                }
                return function (r, h, N) {
                  return h && c(r.prototype, h), N && c(r, N), r;
                };
              })(),
              k = function c(r, h, N) {
                r === null && (r = Function.prototype);
                var A = Object.getOwnPropertyDescriptor(r, h);
                if (A === void 0) {
                  var T = Object.getPrototypeOf(r);
                  return T === null ? void 0 : c(T, h, N);
                } else {
                  if ('value' in A) return A.value;
                  var P = A.get;
                  return P === void 0 ? void 0 : P.call(N);
                }
              },
              v = y(35),
              b = t(v),
              m = y(5),
              d = t(m),
              l = y(9),
              e = t(l);
            function t(c) {
              return c && c.__esModule ? c : { default: c };
            }
            function s(c, r) {
              if (!(c instanceof r)) throw new TypeError('Cannot call a class as a function');
            }
            function a(c, r) {
              if (!c)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return r && (typeof r == 'object' || typeof r == 'function') ? r : c;
            }
            function u(c, r) {
              if (typeof r != 'function' && r !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof r,
                );
              (c.prototype = Object.create(r && r.prototype, {
                constructor: { value: c, enumerable: !1, writable: !0, configurable: !0 },
              })),
                r && (Object.setPrototypeOf ? Object.setPrototypeOf(c, r) : (c.__proto__ = r));
            }
            var n = (function (c) {
              u(r, c);
              function r() {
                return (
                  s(this, r),
                  a(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
                );
              }
              return (
                q(r, null, [
                  {
                    key: 'create',
                    value: function (N) {
                      var A = k(r.__proto__ || Object.getPrototypeOf(r), 'create', this).call(
                        this,
                        N,
                      );
                      return (
                        typeof N == 'string' &&
                          (window.katex.render(N, A, { throwOnError: !1, errorColor: '#f00' }),
                          A.setAttribute('data-value', N)),
                        A
                      );
                    },
                  },
                  {
                    key: 'value',
                    value: function (N) {
                      return N.getAttribute('data-value');
                    },
                  },
                ]),
                r
              );
            })(b.default);
            (n.blotName = 'formula'), (n.className = 'ql-formula'), (n.tagName = 'SPAN');
            var i = (function (c) {
              u(r, c),
                q(r, null, [
                  {
                    key: 'register',
                    value: function () {
                      d.default.register(n, !0);
                    },
                  },
                ]);
              function r() {
                s(this, r);
                var h = a(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
                if (window.katex == null) throw new Error('Formula module requires KaTeX.');
                return h;
              }
              return r;
            })(e.default);
            (w.FormulaBlot = n), (w.default = i);
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.default = w.CodeToken = w.CodeBlock = void 0);
            var q = (function () {
                function N(A, T) {
                  for (var P = 0; P < T.length; P++) {
                    var E = T[P];
                    (E.enumerable = E.enumerable || !1),
                      (E.configurable = !0),
                      'value' in E && (E.writable = !0),
                      Object.defineProperty(A, E.key, E);
                  }
                }
                return function (A, T, P) {
                  return T && N(A.prototype, T), P && N(A, P), A;
                };
              })(),
              k = function N(A, T, P) {
                A === null && (A = Function.prototype);
                var E = Object.getOwnPropertyDescriptor(A, T);
                if (E === void 0) {
                  var p = Object.getPrototypeOf(A);
                  return p === null ? void 0 : N(p, T, P);
                } else {
                  if ('value' in E) return E.value;
                  var O = E.get;
                  return O === void 0 ? void 0 : O.call(P);
                }
              },
              v = y(0),
              b = a(v),
              m = y(5),
              d = a(m),
              l = y(9),
              e = a(l),
              t = y(13),
              s = a(t);
            function a(N) {
              return N && N.__esModule ? N : { default: N };
            }
            function u(N, A) {
              if (!(N instanceof A)) throw new TypeError('Cannot call a class as a function');
            }
            function n(N, A) {
              if (!N)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return A && (typeof A == 'object' || typeof A == 'function') ? A : N;
            }
            function i(N, A) {
              if (typeof A != 'function' && A !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof A,
                );
              (N.prototype = Object.create(A && A.prototype, {
                constructor: { value: N, enumerable: !1, writable: !0, configurable: !0 },
              })),
                A && (Object.setPrototypeOf ? Object.setPrototypeOf(N, A) : (N.__proto__ = A));
            }
            var c = (function (N) {
              i(A, N);
              function A() {
                return (
                  u(this, A),
                  n(this, (A.__proto__ || Object.getPrototypeOf(A)).apply(this, arguments))
                );
              }
              return (
                q(A, [
                  {
                    key: 'replaceWith',
                    value: function (P) {
                      (this.domNode.textContent = this.domNode.textContent),
                        this.attach(),
                        k(
                          A.prototype.__proto__ || Object.getPrototypeOf(A.prototype),
                          'replaceWith',
                          this,
                        ).call(this, P);
                    },
                  },
                  {
                    key: 'highlight',
                    value: function (P) {
                      var E = this.domNode.textContent;
                      this.cachedText !== E &&
                        ((E.trim().length > 0 || this.cachedText == null) &&
                          ((this.domNode.innerHTML = P(E)),
                          this.domNode.normalize(),
                          this.attach()),
                        (this.cachedText = E));
                    },
                  },
                ]),
                A
              );
            })(s.default);
            c.className = 'ql-syntax';
            var r = new b.default.Attributor.Class('token', 'hljs', {
                scope: b.default.Scope.INLINE,
              }),
              h = (function (N) {
                i(A, N),
                  q(A, null, [
                    {
                      key: 'register',
                      value: function () {
                        d.default.register(r, !0), d.default.register(c, !0);
                      },
                    },
                  ]);
                function A(T, P) {
                  u(this, A);
                  var E = n(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, T, P));
                  if (typeof E.options.highlight != 'function')
                    throw new Error(
                      'Syntax module requires highlight.js. Please include the library on the page before Quill.',
                    );
                  var p = null;
                  return (
                    E.quill.on(d.default.events.SCROLL_OPTIMIZE, function () {
                      clearTimeout(p),
                        (p = setTimeout(function () {
                          E.highlight(), (p = null);
                        }, E.options.interval));
                    }),
                    E.highlight(),
                    E
                  );
                }
                return (
                  q(A, [
                    {
                      key: 'highlight',
                      value: function () {
                        var P = this;
                        if (!this.quill.selection.composing) {
                          this.quill.update(d.default.sources.USER);
                          var E = this.quill.getSelection();
                          this.quill.scroll.descendants(c).forEach(function (p) {
                            p.highlight(P.options.highlight);
                          }),
                            this.quill.update(d.default.sources.SILENT),
                            E != null && this.quill.setSelection(E, d.default.sources.SILENT);
                        }
                      },
                    },
                  ]),
                  A
                );
              })(e.default);
            (h.DEFAULTS = {
              highlight: (function () {
                return window.hljs == null
                  ? null
                  : function (N) {
                      var A = window.hljs.highlightAuto(N);
                      return A.value;
                    };
              })(),
              interval: 1e3,
            }),
              (w.CodeBlock = c),
              (w.CodeToken = r),
              (w.default = h);
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
          },
          function (U, w) {
            U.exports =
              '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
          },
          function (U, w, y) {
            'use strict';
            Object.defineProperty(w, '__esModule', { value: !0 }),
              (w.default = w.BubbleTooltip = void 0);
            var q = function A(T, P, E) {
                T === null && (T = Function.prototype);
                var p = Object.getOwnPropertyDescriptor(T, P);
                if (p === void 0) {
                  var O = Object.getPrototypeOf(T);
                  return O === null ? void 0 : A(O, P, E);
                } else {
                  if ('value' in p) return p.value;
                  var _ = p.get;
                  return _ === void 0 ? void 0 : _.call(E);
                }
              },
              k = (function () {
                function A(T, P) {
                  for (var E = 0; E < P.length; E++) {
                    var p = P[E];
                    (p.enumerable = p.enumerable || !1),
                      (p.configurable = !0),
                      'value' in p && (p.writable = !0),
                      Object.defineProperty(T, p.key, p);
                  }
                }
                return function (T, P, E) {
                  return P && A(T.prototype, P), E && A(T, E), T;
                };
              })(),
              v = y(3),
              b = u(v),
              m = y(8),
              d = u(m),
              l = y(43),
              e = u(l),
              t = y(15),
              s = y(41),
              a = u(s);
            function u(A) {
              return A && A.__esModule ? A : { default: A };
            }
            function n(A, T) {
              if (!(A instanceof T)) throw new TypeError('Cannot call a class as a function');
            }
            function i(A, T) {
              if (!A)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return T && (typeof T == 'object' || typeof T == 'function') ? T : A;
            }
            function c(A, T) {
              if (typeof T != 'function' && T !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof T,
                );
              (A.prototype = Object.create(T && T.prototype, {
                constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 },
              })),
                T && (Object.setPrototypeOf ? Object.setPrototypeOf(A, T) : (A.__proto__ = T));
            }
            var r = [
                ['bold', 'italic', 'link'],
                [{ header: 1 }, { header: 2 }, 'blockquote'],
              ],
              h = (function (A) {
                c(T, A);
                function T(P, E) {
                  n(this, T),
                    E.modules.toolbar != null &&
                      E.modules.toolbar.container == null &&
                      (E.modules.toolbar.container = r);
                  var p = i(this, (T.__proto__ || Object.getPrototypeOf(T)).call(this, P, E));
                  return p.quill.container.classList.add('ql-bubble'), p;
                }
                return (
                  k(T, [
                    {
                      key: 'extendToolbar',
                      value: function (E) {
                        (this.tooltip = new N(this.quill, this.options.bounds)),
                          this.tooltip.root.appendChild(E.container),
                          this.buildButtons(
                            [].slice.call(E.container.querySelectorAll('button')),
                            a.default,
                          ),
                          this.buildPickers(
                            [].slice.call(E.container.querySelectorAll('select')),
                            a.default,
                          );
                      },
                    },
                  ]),
                  T
                );
              })(e.default);
            h.DEFAULTS = (0, b.default)(!0, {}, e.default.DEFAULTS, {
              modules: {
                toolbar: {
                  handlers: {
                    link: function (T) {
                      T ? this.quill.theme.tooltip.edit() : this.quill.format('link', !1);
                    },
                  },
                },
              },
            });
            var N = (function (A) {
              c(T, A);
              function T(P, E) {
                n(this, T);
                var p = i(this, (T.__proto__ || Object.getPrototypeOf(T)).call(this, P, E));
                return (
                  p.quill.on(d.default.events.EDITOR_CHANGE, function (O, _, R, j) {
                    if (O === d.default.events.SELECTION_CHANGE)
                      if (_ != null && _.length > 0 && j === d.default.sources.USER) {
                        p.show(),
                          (p.root.style.left = '0px'),
                          (p.root.style.width = ''),
                          (p.root.style.width = p.root.offsetWidth + 'px');
                        var K = p.quill.getLines(_.index, _.length);
                        if (K.length === 1) p.position(p.quill.getBounds(_));
                        else {
                          var Y = K[K.length - 1],
                            G = p.quill.getIndex(Y),
                            C = Math.min(Y.length() - 1, _.index + _.length - G),
                            M = p.quill.getBounds(new t.Range(G, C));
                          p.position(M);
                        }
                      } else document.activeElement !== p.textbox && p.quill.hasFocus() && p.hide();
                  }),
                  p
                );
              }
              return (
                k(T, [
                  {
                    key: 'listen',
                    value: function () {
                      var E = this;
                      q(
                        T.prototype.__proto__ || Object.getPrototypeOf(T.prototype),
                        'listen',
                        this,
                      ).call(this),
                        this.root.querySelector('.ql-close').addEventListener('click', function () {
                          E.root.classList.remove('ql-editing');
                        }),
                        this.quill.on(d.default.events.SCROLL_OPTIMIZE, function () {
                          setTimeout(function () {
                            if (!E.root.classList.contains('ql-hidden')) {
                              var p = E.quill.getSelection();
                              p != null && E.position(E.quill.getBounds(p));
                            }
                          }, 1);
                        });
                    },
                  },
                  {
                    key: 'cancel',
                    value: function () {
                      this.show();
                    },
                  },
                  {
                    key: 'position',
                    value: function (E) {
                      var p = q(
                          T.prototype.__proto__ || Object.getPrototypeOf(T.prototype),
                          'position',
                          this,
                        ).call(this, E),
                        O = this.root.querySelector('.ql-tooltip-arrow');
                      if (((O.style.marginLeft = ''), p === 0)) return p;
                      O.style.marginLeft = -1 * p - O.offsetWidth / 2 + 'px';
                    },
                  },
                ]),
                T
              );
            })(l.BaseTooltip);
            (N.TEMPLATE = [
              '<span class="ql-tooltip-arrow"></span>',
              '<div class="ql-tooltip-editor">',
              '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
              '<a class="ql-close"></a>',
              '</div>',
            ].join('')),
              (w.BubbleTooltip = N),
              (w.default = h);
          },
          function (U, w, y) {
            U.exports = y(63);
          },
        ]).default;
      });
    },
  },
]);
