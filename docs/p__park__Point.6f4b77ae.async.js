(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [2],
  {
    57254: function (O, u, t) {
      'use strict';
      t.d(u, {
        Z: function () {
          return c;
        },
      });
      var d = t(22251),
        r = t(67294),
        s = {
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
        h = s,
        o = t(19129),
        m = function (f, F) {
          return r.createElement(o.Z, (0, d.Z)((0, d.Z)({}, f), {}, { ref: F, icon: h }));
        };
      m.displayName = 'DownOutlined';
      var c = r.forwardRef(m);
    },
    44158: function (O, u, t) {
      'use strict';
      t.r(u),
        t.d(u, {
          default: function () {
            return z;
          },
        });
      var d = t(20228),
        r = t(11382),
        s = t(8870),
        h = t(57663),
        o = t(71577),
        m = t(47673),
        c = t(4107),
        S = t(22385),
        f = t(3318),
        F = t(34792),
        B = t(48086),
        H = t(9715),
        a = t(86585),
        Z = t(57337),
        J = t(43358),
        g = t(96285),
        x = t(67294),
        y = t(95854),
        T = t(1870),
        I = t(3182),
        L = t(94043),
        j = t.n(L);
      function R(l) {
        return v.apply(this, arguments);
      }
      function v() {
        return (
          (v = (0, I.Z)(
            j().mark(function l(i) {
              return j().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        'return',
                        (0, y.WY)('/api/basicForm', { method: 'POST', data: i }),
                      );
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, l);
            }),
          )),
          v.apply(this, arguments)
        );
      }
      var n = t(85893),
        p = g.Z.Option,
        A = {
          labelCol: { xs: { span: 24 }, sm: { span: 6 } },
          wrapperCol: { xs: { span: 24 }, sm: { span: 12 } },
        },
        $ = { wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } } },
        z = function () {
          var l = (0, x.useState)(!0),
            i = (0, Z.Z)(l, 2),
            C = i[0],
            e = i[1];
          (0, x.useEffect)(function () {
            setTimeout(function () {
              e(!1);
            }, 1e3);
          }, []);
          var P = a.Z.useForm(),
            Q = (0, Z.Z)(P, 1),
            D = Q[0],
            W = (0, y.QT)(R, {
              manual: !0,
              onSuccess: function (Y) {
                B.default.success('ok'), console.log('result: ', Y);
              },
            }),
            G = W.run,
            M = function () {
              D.resetFields();
            },
            N = function () {};
          return (0, n.jsx)(r.Z, {
            spinning: C,
            size: 'large',
            children: (0, n.jsxs)(
              a.Z,
              (0, s.Z)(
                (0, s.Z)({}, A),
                {},
                {
                  form: D,
                  name: 'register',
                  onFinish: G,
                  scrollToFirstError: !0,
                  children: [
                    (0, n.jsx)(a.Z.Item, {
                      name: 'status',
                      label: '\u79EF\u5206\u51CF\u514D',
                      rules: [
                        { required: !0, message: '\u8BF7\u9009\u62E9\u79EF\u5206\u51CF\u514D' },
                      ],
                      children: (0, n.jsxs)(g.Z, {
                        placeholder: '\u8BF7\u9009\u62E9\u79EF\u5206\u51CF\u514D',
                        onChange: N,
                        allowClear: !0,
                        children: [
                          (0, n.jsx)(p, { value: 'on', children: '\u5F00\u542F' }),
                          (0, n.jsx)(p, { value: 'off', children: '\u5173\u95ED' }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(a.Z.Item, {
                      name: 'ratio',
                      label: (0, n.jsxs)('span', {
                        children: [
                          '\u79EF\u5206\u5151\u6362\u6BD4\u4F8B\xA0',
                          (0, n.jsx)(f.Z, {
                            title: 'What do you want others to call you?',
                            children: (0, n.jsx)(T.Z, {}),
                          }),
                        ],
                      }),
                      rules: [
                        {
                          required: !0,
                          message: '\u8BF7\u8F93\u5165\u79EF\u5206\u5151\u6362\u6BD4\u4F8B',
                          whitespace: !0,
                        },
                      ],
                      children: (0, n.jsx)(c.Z, {
                        placeholder: '\u8BF7\u8F93\u5165\u79EF\u5206\u5151\u6362\u6BD4\u4F8B',
                        suffix: '\u79EF\u5206/\u5C0F\u65F6',
                      }),
                    }),
                    (0, n.jsxs)(
                      a.Z.Item,
                      (0, s.Z)(
                        (0, s.Z)({}, $),
                        {},
                        {
                          children: [
                            (0, n.jsx)(o.Z, {
                              type: 'primary',
                              htmlType: 'submit',
                              children: '\u4FDD \u5B58',
                            }),
                            (0, n.jsx)(o.Z, {
                              style: { marginLeft: 10 },
                              onClick: M,
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
          });
        };
    },
  },
]);
