(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [917],
  {
    85047: function (X, E, s) {
      'use strict';
      s.d(E, {
        oK: function () {
          return Ae;
        },
        ZP: function () {
          return Re;
        },
        Go: function () {
          return ie;
        },
        YB: function () {
          return Le;
        },
      });
      var u = s(84305),
        P = s(69224);
      function f(p, T, c) {
        return (
          T in p
            ? Object.defineProperty(p, T, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (p[T] = c),
          p
        );
      }
      function m(p, T) {
        var c = Object.keys(p);
        if (Object.getOwnPropertySymbols) {
          var L = Object.getOwnPropertySymbols(p);
          T &&
            (L = L.filter(function (U) {
              return Object.getOwnPropertyDescriptor(p, U).enumerable;
            })),
            c.push.apply(c, L);
        }
        return c;
      }
      function a(p) {
        for (var T = 1; T < arguments.length; T++) {
          var c = arguments[T] != null ? arguments[T] : {};
          T % 2
            ? m(Object(c), !0).forEach(function (L) {
                f(p, L, c[L]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(c))
            : m(Object(c)).forEach(function (L) {
                Object.defineProperty(p, L, Object.getOwnPropertyDescriptor(c, L));
              });
        }
        return p;
      }
      function i(p, T) {
        (T == null || T > p.length) && (T = p.length);
        for (var c = 0, L = new Array(T); c < T; c++) L[c] = p[c];
        return L;
      }
      function y(p, T) {
        if (!!p) {
          if (typeof p == 'string') return i(p, T);
          var c = Object.prototype.toString.call(p).slice(8, -1);
          if (
            (c === 'Object' && p.constructor && (c = p.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(p);
          if (c === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
            return i(p, T);
        }
      }
      function h(p, T) {
        var c = (typeof Symbol != 'undefined' && p[Symbol.iterator]) || p['@@iterator'];
        if (!c) {
          if (Array.isArray(p) || (c = y(p)) || (T && p && typeof p.length == 'number')) {
            c && (p = c);
            var L = 0,
              U = function () {};
            return {
              s: U,
              n: function () {
                return L >= p.length ? { done: !0 } : { done: !1, value: p[L++] };
              },
              e: function (Q) {
                throw Q;
              },
              f: U,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var W = !0,
          ee = !1,
          ye;
        return {
          s: function () {
            c = c.call(p);
          },
          n: function () {
            var Q = c.next();
            return (W = Q.done), Q;
          },
          e: function (Q) {
            (ee = !0), (ye = Q);
          },
          f: function () {
            try {
              !W && c.return != null && c.return();
            } finally {
              if (ee) throw ye;
            }
          },
        };
      }
      var w = s(67294),
        R = s(40821),
        q = s(81626),
        G = s(16184),
        C = {
          locale: 'zh_CN',
          today: '\u4ECA\u5929',
          now: '\u6B64\u523B',
          backToToday: '\u8FD4\u56DE\u4ECA\u5929',
          ok: '\u786E\u5B9A',
          timeSelect: '\u9009\u62E9\u65F6\u95F4',
          dateSelect: '\u9009\u62E9\u65E5\u671F',
          weekSelect: '\u9009\u62E9\u5468',
          clear: '\u6E05\u9664',
          month: '\u6708',
          year: '\u5E74',
          previousMonth: '\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)',
          nextMonth: '\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)',
          monthSelect: '\u9009\u62E9\u6708\u4EFD',
          yearSelect: '\u9009\u62E9\u5E74\u4EFD',
          decadeSelect: '\u9009\u62E9\u5E74\u4EE3',
          yearFormat: 'YYYY\u5E74',
          dayFormat: 'D\u65E5',
          dateFormat: 'YYYY\u5E74M\u6708D\u65E5',
          dateTimeFormat: 'YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2',
          previousYear: '\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)',
          nextYear: '\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)',
          previousDecade: '\u4E0A\u4E00\u5E74\u4EE3',
          nextDecade: '\u4E0B\u4E00\u5E74\u4EE3',
          previousCentury: '\u4E0A\u4E00\u4E16\u7EAA',
          nextCentury: '\u4E0B\u4E00\u4E16\u7EAA',
        },
        $ = C,
        A = {
          placeholder: '\u8BF7\u9009\u62E9\u65F6\u95F4',
          rangePlaceholder: ['\u5F00\u59CB\u65F6\u95F4', '\u7ED3\u675F\u65F6\u95F4'],
        },
        O = A,
        V = {
          lang: (0, G.Z)(
            {
              placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
              yearPlaceholder: '\u8BF7\u9009\u62E9\u5E74\u4EFD',
              quarterPlaceholder: '\u8BF7\u9009\u62E9\u5B63\u5EA6',
              monthPlaceholder: '\u8BF7\u9009\u62E9\u6708\u4EFD',
              weekPlaceholder: '\u8BF7\u9009\u62E9\u5468',
              rangePlaceholder: ['\u5F00\u59CB\u65E5\u671F', '\u7ED3\u675F\u65E5\u671F'],
              rangeYearPlaceholder: ['\u5F00\u59CB\u5E74\u4EFD', '\u7ED3\u675F\u5E74\u4EFD'],
              rangeMonthPlaceholder: ['\u5F00\u59CB\u6708\u4EFD', '\u7ED3\u675F\u6708\u4EFD'],
              rangeWeekPlaceholder: ['\u5F00\u59CB\u5468', '\u7ED3\u675F\u5468'],
            },
            $,
          ),
          timePickerLocale: (0, G.Z)({}, O),
        };
      V.lang.ok = '\u786E \u5B9A';
      var te = V,
        z = te,
        _ = '${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}',
        ne = {
          locale: 'zh-cn',
          Pagination: q.Z,
          DatePicker: te,
          TimePicker: O,
          Calendar: z,
          global: { placeholder: '\u8BF7\u9009\u62E9' },
          Table: {
            filterTitle: '\u7B5B\u9009',
            filterConfirm: '\u786E\u5B9A',
            filterReset: '\u91CD\u7F6E',
            filterEmptyText: '\u65E0\u7B5B\u9009\u9879',
            selectAll: '\u5168\u9009\u5F53\u9875',
            selectInvert: '\u53CD\u9009\u5F53\u9875',
            selectNone: '\u6E05\u7A7A\u6240\u6709',
            selectionAll: '\u5168\u9009\u6240\u6709',
            sortTitle: '\u6392\u5E8F',
            expand: '\u5C55\u5F00\u884C',
            collapse: '\u5173\u95ED\u884C',
            triggerDesc: '\u70B9\u51FB\u964D\u5E8F',
            triggerAsc: '\u70B9\u51FB\u5347\u5E8F',
            cancelSort: '\u53D6\u6D88\u6392\u5E8F',
          },
          Modal: {
            okText: '\u786E\u5B9A',
            cancelText: '\u53D6\u6D88',
            justOkText: '\u77E5\u9053\u4E86',
          },
          Popconfirm: { cancelText: '\u53D6\u6D88', okText: '\u786E\u5B9A' },
          Transfer: {
            searchPlaceholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9',
            itemUnit: '\u9879',
            itemsUnit: '\u9879',
            remove: '\u5220\u9664',
            selectCurrent: '\u5168\u9009\u5F53\u9875',
            removeCurrent: '\u5220\u9664\u5F53\u9875',
            selectAll: '\u5168\u9009\u6240\u6709',
            removeAll: '\u5220\u9664\u5168\u90E8',
            selectInvert: '\u53CD\u9009\u5F53\u9875',
          },
          Upload: {
            uploading: '\u6587\u4EF6\u4E0A\u4F20\u4E2D',
            removeFile: '\u5220\u9664\u6587\u4EF6',
            uploadError: '\u4E0A\u4F20\u9519\u8BEF',
            previewFile: '\u9884\u89C8\u6587\u4EF6',
            downloadFile: '\u4E0B\u8F7D\u6587\u4EF6',
          },
          Empty: { description: '\u6682\u65E0\u6570\u636E' },
          Icon: { icon: '\u56FE\u6807' },
          Text: {
            edit: '\u7F16\u8F91',
            copy: '\u590D\u5236',
            copied: '\u590D\u5236\u6210\u529F',
            expand: '\u5C55\u5F00',
          },
          PageHeader: { back: '\u8FD4\u56DE' },
          Form: {
            optional: '\uFF08\u53EF\u9009\uFF09',
            defaultValidateMessages: {
              default: '\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}',
              required: '\u8BF7\u8F93\u5165${label}',
              enum: '${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]',
              whitespace: '${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26',
              date: {
                format: '${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548',
                parse: '${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F',
                invalid: '${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F',
              },
              types: {
                string: _,
                method: _,
                array: _,
                object: _,
                number: _,
                date: _,
                boolean: _,
                integer: _,
                float: _,
                regexp: _,
                email: _,
                url: _,
                hex: _,
              },
              string: {
                len: '${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26',
                min: '${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26',
                max: '${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26',
                range: '${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4',
              },
              number: {
                len: '${label}\u5FC5\u987B\u7B49\u4E8E${len}',
                min: '${label}\u6700\u5C0F\u503C\u4E3A${min}',
                max: '${label}\u6700\u5927\u503C\u4E3A${max}',
                range: '${label}\u987B\u5728${min}-${max}\u4E4B\u95F4',
              },
              array: {
                len: '\u987B\u4E3A${len}\u4E2A${label}',
                min: '\u6700\u5C11${min}\u4E2A${label}',
                max: '\u6700\u591A${max}\u4E2A${label}',
                range: '${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4',
              },
              pattern: { mismatch: '${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}' },
            },
          },
          Image: { preview: '\u9884\u89C8' },
        },
        ae = ne,
        le = {
          moneySymbol: '$',
          form: {
            lightFilter: {
              more: '\u0627\u0644\u0645\u0632\u064A\u062F',
              clear: '\u0646\u0638\u0641',
              confirm: '\u062A\u0623\u0643\u064A\u062F',
              itemUnit: '\u0639\u0646\u0627\u0635\u0631',
            },
          },
          tableForm: {
            search: '\u0627\u0628\u062D\u062B',
            reset: '\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646',
            submit: '\u0627\u0631\u0633\u0627\u0644',
            collapsed: '\u0645\u064F\u0642\u0644\u0635',
            expand: '\u0645\u064F\u0648\u0633\u0639',
            inputPlaceholder:
              '\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0625\u062F\u062E\u0627\u0644',
            selectPlaceholder:
              '\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0625\u062E\u062A\u064A\u0627\u0631',
          },
          alert: {
            clear: '\u0646\u0638\u0641',
            selected: '\u0645\u062D\u062F\u062F',
            item: '\u0639\u0646\u0635\u0631',
          },
          pagination: {
            total: { range: ' ', total: '\u0645\u0646', item: '\u0639\u0646\u0627\u0635\u0631' },
          },
          tableToolBar: {
            leftPin: '\u062B\u0628\u062A \u0639\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631',
            rightPin: '\u062B\u0628\u062A \u0639\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646',
            noPin: '\u0627\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u062B\u0628\u064A\u062A',
            leftFixedTitle:
              '\u0644\u0635\u0642 \u0639\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631',
            rightFixedTitle:
              '\u0644\u0635\u0642 \u0639\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646',
            noFixedTitle:
              '\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0625\u0644\u0635\u0627\u0642',
            reset: '\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646',
            columnDisplay:
              '\u0627\u0644\u0623\u0639\u0645\u062F\u0629 \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629',
            columnSetting: '\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A',
            fullScreen:
              '\u0648\u0636\u0639 \u0643\u0627\u0645\u0644 \u0627\u0644\u0634\u0627\u0634\u0629',
            exitFullScreen:
              '\u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 \u0648\u0636\u0639 \u0643\u0627\u0645\u0644 \u0627\u0644\u0634\u0627\u0634\u0629',
            reload: '\u062A\u062D\u062F\u064A\u062B',
            density: '\u0627\u0644\u0643\u062B\u0627\u0641\u0629',
            densityDefault: '\u0627\u0641\u062A\u0631\u0627\u0636\u064A',
            densityLarger: '\u0623\u0643\u0628\u0631',
            densityMiddle: '\u0648\u0633\u0637',
            densitySmall: '\u0645\u062F\u0645\u062C',
          },
          stepsForm: {
            next: '\u0627\u0644\u062A\u0627\u0644\u064A',
            prev: '\u0627\u0644\u0633\u0627\u0628\u0642',
          },
          loginForm: {
            submitText: '\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644',
          },
        },
        Ze = {
          moneySymbol: '\uFFE5',
          form: {
            lightFilter: {
              more: '\u66F4\u591A\u7B5B\u9009',
              clear: '\u6E05\u9664',
              confirm: '\u786E\u8BA4',
              itemUnit: '\u9879',
            },
          },
          tableForm: {
            search: '\u67E5\u8BE2',
            reset: '\u91CD\u7F6E',
            submit: '\u63D0\u4EA4',
            collapsed: '\u5C55\u5F00',
            expand: '\u6536\u8D77',
            inputPlaceholder: '\u8BF7\u8F93\u5165',
            selectPlaceholder: '\u8BF7\u9009\u62E9',
          },
          alert: {
            clear: '\u53D6\u6D88\u9009\u62E9',
            selected: '\u5DF2\u9009\u62E9',
            item: '\u9879',
          },
          pagination: { total: { range: '\u7B2C', total: '\u6761/\u603B\u5171', item: '\u6761' } },
          tableToolBar: {
            leftPin: '\u56FA\u5B9A\u5728\u5217\u9996',
            rightPin: '\u56FA\u5B9A\u5728\u5217\u5C3E',
            noPin: '\u4E0D\u56FA\u5B9A',
            leftFixedTitle: '\u56FA\u5B9A\u5728\u5DE6\u4FA7',
            rightFixedTitle: '\u56FA\u5B9A\u5728\u53F3\u4FA7',
            noFixedTitle: '\u4E0D\u56FA\u5B9A',
            reset: '\u91CD\u7F6E',
            columnDisplay: '\u5217\u5C55\u793A',
            columnSetting: '\u5217\u8BBE\u7F6E',
            fullScreen: '\u5168\u5C4F',
            exitFullScreen: '\u9000\u51FA\u5168\u5C4F',
            reload: '\u5237\u65B0',
            density: '\u5BC6\u5EA6',
            densityDefault: '\u6B63\u5E38',
            densityLarger: '\u9ED8\u8BA4',
            densityMiddle: '\u4E2D\u7B49',
            densitySmall: '\u7D27\u51D1',
          },
          editableTable: {
            action: { save: '\u4FDD\u5B58', cancel: '\u53D6\u6D88', delete: '\u5220\u9664' },
          },
          switch: { open: '\u6253\u5F00', close: '\u5173\u95ED' },
          loginForm: { submitText: '\u767B\u5F55' },
        },
        oe = {
          moneySymbol: '$',
          form: {
            lightFilter: { more: 'More', clear: 'Clear', confirm: 'Confirm', itemUnit: 'Items' },
          },
          tableForm: {
            search: 'Query',
            reset: 'Reset',
            submit: 'Submit',
            collapsed: 'Expand',
            expand: 'Collapse',
            inputPlaceholder: 'Please enter',
            selectPlaceholder: 'Please select',
          },
          alert: { clear: 'Clear', selected: 'Selected', item: 'Item' },
          pagination: { total: { range: ' ', total: 'of', item: 'items' } },
          tableToolBar: {
            leftPin: 'Pin to left',
            rightPin: 'Pin to right',
            noPin: 'Unpinned',
            leftFixedTitle: 'Fixed the left',
            rightFixedTitle: 'Fixed the right',
            noFixedTitle: 'Not Fixed',
            reset: 'Reset',
            columnDisplay: 'Column Display',
            columnSetting: 'Settings',
            fullScreen: 'Full Screen',
            exitFullScreen: 'Exit Full Screen',
            reload: 'Refresh',
            density: 'Density',
            densityDefault: 'Default',
            densityLarger: 'Larger',
            densityMiddle: 'Middle',
            densitySmall: 'Compact',
          },
          stepsForm: { next: 'Next', prev: 'Previous', submit: 'Finish' },
          loginForm: { submitText: 'Login' },
          editableTable: { action: { save: 'Save', cancel: 'Cancel', delete: 'Delete' } },
          switch: { open: 'open', close: 'close' },
        },
        ce = {
          moneySymbol: '\xA3',
          form: {
            lightFilter: { more: 'More', clear: 'Clear', confirm: 'Confirm', itemUnit: 'Items' },
          },
          tableForm: {
            search: 'Query',
            reset: 'Reset',
            submit: 'Submit',
            collapsed: 'Expand',
            expand: 'Collapse',
            inputPlaceholder: 'Please enter',
            selectPlaceholder: 'Please select',
          },
          alert: { clear: 'Clear', selected: 'Selected', item: 'Item' },
          pagination: { total: { range: ' ', total: 'of', item: 'items' } },
          tableToolBar: {
            leftPin: 'Pin to left',
            rightPin: 'Pin to right',
            noPin: 'Unpinned',
            leftFixedTitle: 'Fixed the left',
            rightFixedTitle: 'Fixed the right',
            noFixedTitle: 'Not Fixed',
            reset: 'Reset',
            columnDisplay: 'Column Display',
            columnSetting: 'Settings',
            fullScreen: 'Full Screen',
            exitFullScreen: 'Exit Full Screen',
            reload: 'Refresh',
            density: 'Density',
            densityDefault: 'Default',
            densityLarger: 'Larger',
            densityMiddle: 'Middle',
            densitySmall: 'Compact',
          },
          stepsForm: { next: 'Next', prev: 'Previous', submit: 'Finish' },
          loginForm: { submitText: 'Login' },
          editableTable: { action: { save: 'Save', cancel: 'Cancel', delete: 'Delete' } },
          switch: { open: 'open', close: 'close' },
        },
        Oe = {
          moneySymbol: '\u20AB',
          tableForm: {
            search: 'T\xECm ki\u1EBFm',
            reset: 'L\xE0m l\u1EA1i',
            submit: 'G\u1EEDi \u0111i',
            collapsed: 'M\u1EDF r\u1ED9ng',
            expand: 'Thu g\u1ECDn',
            inputPlaceholder: 'nh\u1EADp d\u1EEF li\u1EC7u',
            selectPlaceholder: 'Vui l\xF2ng ch\u1ECDn',
          },
          alert: { clear: 'X\xF3a', selected: '\u0111\xE3 ch\u1ECDn', item: 'm\u1EE5c' },
          pagination: { total: { range: ' ', total: 'tr\xEAn', item: 'm\u1EB7t h\xE0ng' } },
          tableToolBar: {
            leftPin: 'Ghim tr\xE1i',
            rightPin: 'Ghim ph\u1EA3i',
            noPin: 'B\u1ECF ghim',
            leftFixedTitle: 'C\u1ED1 \u0111\u1ECBnh tr\xE1i',
            rightFixedTitle: 'C\u1ED1 \u0111\u1ECBnh ph\u1EA3i',
            noFixedTitle: 'Ch\u01B0a c\u1ED1 \u0111\u1ECBnh',
            reset: 'L\xE0m l\u1EA1i',
            columnDisplay: 'C\u1ED9t hi\u1EC3n th\u1ECB',
            columnSetting: 'C\u1EA5u h\xECnh',
            fullScreen: 'Ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh',
            exitFullScreen: 'Tho\xE1t ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh',
            reload: 'L\xE0m m\u1EDBi',
            density: 'M\u1EADt \u0111\u1ED9 hi\u1EC3n th\u1ECB',
            densityDefault: 'M\u1EB7c \u0111\u1ECBnh',
            densityLarger: 'M\u1EB7c \u0111\u1ECBnh',
            densityMiddle: 'Trung b\xECnh',
            densitySmall: 'Ch\u1EADt',
          },
          loginForm: { submitText: '\u0110\u0103ng nh\u1EADp' },
        },
        ke = {
          moneySymbol: '\u20AC',
          tableForm: {
            search: 'Filtra',
            reset: 'Pulisci',
            submit: 'Invia',
            collapsed: 'Espandi',
            expand: 'Contrai',
            inputPlaceholder: 'Digita',
            selectPlaceholder: 'Seleziona',
          },
          alert: { clear: 'Rimuovi', selected: 'Selezionati', item: 'elementi' },
          pagination: { total: { range: ' ', total: 'di', item: 'elementi' } },
          tableToolBar: {
            leftPin: 'Fissa a sinistra',
            rightPin: 'Fissa a destra',
            noPin: 'Ripristina posizione',
            leftFixedTitle: 'Fissato a sinistra',
            rightFixedTitle: 'Fissato a destra',
            noFixedTitle: 'Non fissato',
            reset: 'Ripristina',
            columnDisplay: 'Disposizione colonne',
            columnSetting: 'Impostazioni',
            fullScreen: 'Modalit\xE0 schermo intero',
            exitFullScreen: 'Esci da modalit\xE0 schermo intero',
            reload: 'Ricarica',
            density: 'Grandezza tabella',
            densityLarger: 'Grande',
            densityMiddle: 'Media',
            densitySmall: 'Compatta',
          },
          loginForm: { submitText: 'Accedi' },
        },
        S = {
          moneySymbol: '\u20AC',
          tableForm: {
            search: 'Buscar',
            reset: 'Limpiar',
            submit: 'Submit',
            collapsed: 'Expandir',
            expand: 'Colapsar',
            inputPlaceholder: 'Ingrese valor',
            selectPlaceholder: 'Seleccione valor',
          },
          alert: { clear: 'Limpiar', selected: 'Seleccionado', item: 'Articulo' },
          pagination: { total: { range: ' ', total: 'de', item: 'art\xEDculos' } },
          tableToolBar: {
            leftPin: 'Pin a la izquierda',
            rightPin: 'Pin a la derecha',
            noPin: 'Sin Pin',
            leftFixedTitle: 'Fijado a la izquierda',
            rightFixedTitle: 'Fijado a la derecha',
            noFixedTitle: 'Sin Fijar',
            reset: 'Reiniciar',
            columnDisplay: 'Mostrar Columna',
            columnSetting: 'Configuraci\xF3n',
            fullScreen: 'Pantalla Completa',
            exitFullScreen: 'Salir Pantalla Completa',
            reload: 'Refrescar',
            density: 'Densidad',
            densityDefault: 'Por Defecto',
            densityLarger: 'Largo',
            densityMiddle: 'Medio',
            densitySmall: 'Compacto',
          },
          stepsForm: { next: 'Siguiente', prev: 'Anterior', submit: 'Finalizar' },
          loginForm: { submitText: 'Entrar' },
        },
        g = {
          moneySymbol: '\xA5',
          tableForm: {
            search: '\u691C\u7D22',
            reset: '\u30EA\u30BB\u30C3\u30C8',
            submit: '\u63D0\u4EA4',
            collapsed: '\u5C55\u958B',
            expand: '\u53CE\u7D0D',
            inputPlaceholder: '\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
            selectPlaceholder: '\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044',
          },
          alert: {
            clear: '\u30AF\u30EA\u30A2',
            selected: '\u9078\u629E\u3057\u305F',
            item: '\u9805\u76EE',
          },
          pagination: { total: { range: '\u8A18\u4E8B', total: '/\u5408\u8A08', item: ' ' } },
          tableToolBar: {
            leftPin: '\u5DE6\u306B\u56FA\u5B9A',
            rightPin: '\u53F3\u306B\u56FA\u5B9A',
            noPin: '\u30AD\u30E3\u30F3\u30BB\u30EB',
            leftFixedTitle: '\u5DE6\u306B\u56FA\u5B9A\u3055\u308C\u305F\u9805\u76EE',
            rightFixedTitle: '\u53F3\u306B\u56FA\u5B9A\u3055\u308C\u305F\u9805\u76EE',
            noFixedTitle: '\u56FA\u5B9A\u3055\u308C\u3066\u306A\u3044\u9805\u76EE',
            reset: '\u30EA\u30BB\u30C3\u30C8',
            columnDisplay: '\u8868\u793A\u5217',
            columnSetting: '\u5217\u8868\u793A\u8A2D\u5B9A',
            fullScreen: '\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3',
            exitFullScreen: '\u7D42\u4E86',
            reload: '\u66F4\u65B0',
            density: '\u884C\u9AD8',
            densityLarger: '\u9ED8\u8BA4',
            densityMiddle: '\u4E2D',
            densitySmall: '\u5C0F',
          },
          stepsForm: {
            next: '\u6B21\u306E\u30B9\u30C6\u30C3\u30D7',
            pre: '\u524D\u3078',
            submit: '\u9001\u4FE1',
          },
          loginForm: { submitText: '\u30ED\u30B0\u30A4\u30F3' },
        },
        M = {
          moneySymbol: '\u20BD',
          form: {
            lightFilter: {
              more: '\u0415\u0449\u0435',
              clear: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C',
              confirm: '\u041E\u041A',
              itemUnit: '\u041F\u043E\u0437\u0438\u0446\u0438\u0438',
            },
          },
          tableForm: {
            search: '\u041D\u0430\u0439\u0442\u0438',
            reset: '\u0421\u0431\u0440\u043E\u0441',
            submit: '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C',
            collapsed: '\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C',
            expand: '\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C',
            inputPlaceholder:
              '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435',
            selectPlaceholder:
              '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435',
          },
          alert: {
            clear: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C',
            selected: '\u0412\u044B\u0431\u0440\u0430\u043D\u043E',
            item: '\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432',
          },
          pagination: {
            total: {
              range: ' ',
              total: '\u0438\u0437',
              item: '\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432',
            },
          },
          tableToolBar: {
            leftPin:
              '\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043B\u0435\u0432\u0430',
            rightPin:
              '\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u0430',
            noPin: '\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C',
            leftFixedTitle:
              '\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E \u0441\u043B\u0435\u0432\u0430',
            rightFixedTitle:
              '\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E \u0441\u043F\u0440\u0430\u0432\u0430',
            noFixedTitle:
              '\u041D\u0435 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E',
            reset: '\u0421\u0431\u0440\u043E\u0441',
            columnDisplay:
              '\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u0430',
            columnSetting: '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438',
            fullScreen: '\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D',
            exitFullScreen:
              '\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430',
            reload: '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C',
            density: '\u0420\u0430\u0437\u043C\u0435\u0440',
            densityDefault: '\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E',
            densityLarger: '\u0411\u043E\u043B\u044C\u0448\u043E\u0439',
            densityMiddle: '\u0421\u0440\u0435\u0434\u043D\u0438\u0439',
            densitySmall: '\u0421\u0436\u0430\u0442\u044B\u0439',
          },
          stepsForm: {
            next: '\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439',
            prev: '\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439',
            submit: '\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C',
          },
          loginForm: { submitText: '\u0412\u0445\u043E\u0434' },
          editableTable: {
            action: {
              save: '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C',
              cancel: '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C',
              delete: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
            },
          },
        },
        k = {
          moneySymbol: 'RSD',
          form: {
            lightFilter: {
              more: 'Vi\u0161e',
              clear: 'O\u010Disti',
              confirm: 'Potvrdi',
              itemUnit: 'Stavke',
            },
          },
          tableForm: {
            search: 'Prona\u0111i',
            reset: 'Resetuj',
            submit: 'Po\u0161alji',
            collapsed: 'Pro\u0161iri',
            expand: 'Skupi',
            inputPlaceholder: 'Molimo unesite',
            selectPlaceholder: 'Molimo odaberite',
          },
          alert: { clear: 'O\u010Disti', selected: 'Odabrano', item: 'Stavka' },
          pagination: { total: { range: ' ', total: 'od', item: 'stavki' } },
          tableToolBar: {
            leftPin: 'Zaka\u010Di levo',
            rightPin: 'Zaka\u010Di desno',
            noPin: 'Nije zaka\u010Deno',
            leftFixedTitle: 'Fiksirano levo',
            rightFixedTitle: 'Fiksirano desno',
            noFixedTitle: 'Nije fiksirano',
            reset: 'Resetuj',
            columnDisplay: 'Prikaz kolona',
            columnSetting: 'Pode\u0161avanja',
            fullScreen: 'Pun ekran',
            exitFullScreen: 'Zatvori pun ekran',
            reload: 'Osve\u017Ei',
            density: 'Veli\u010Dina',
            densityDefault: 'Podrazumevana',
            densityLarger: 'Ve\u0107a',
            densityMiddle: 'Srednja',
            densitySmall: 'Kompaktna',
          },
          stepsForm: { next: 'Dalje', prev: 'Nazad', submit: 'Gotovo' },
          loginForm: { submitText: 'Prijavi se' },
          editableTable: {
            action: { save: 'Sa\u010Duvaj', cancel: 'Poni\u0161ti', delete: 'Obri\u0161i' },
          },
        },
        o = {
          moneySymbol: 'RM',
          tableForm: {
            search: 'Cari',
            reset: 'Menetapkan semula',
            submit: 'Hantar',
            collapsed: 'Kembang',
            expand: 'Kuncup',
            inputPlaceholder: 'Sila masuk',
            selectPlaceholder: 'Sila pilih',
          },
          alert: { clear: 'Padam', selected: 'Dipilih', item: 'Item' },
          pagination: { total: { range: ' ', total: 'daripada', item: 'item' } },
          tableToolBar: {
            leftPin: 'Pin ke kiri',
            rightPin: 'Pin ke kanan',
            noPin: 'Tidak pin',
            leftFixedTitle: 'Tetap ke kiri',
            rightFixedTitle: 'Tetap ke kanan',
            noFixedTitle: 'Tidak Tetap',
            reset: 'Menetapkan semula',
            columnDisplay: 'Lajur',
            columnSetting: 'Settings',
            fullScreen: 'Full Screen',
            exitFullScreen: 'Keluar Full Screen',
            reload: 'Muat Semula',
            density: 'Densiti',
            densityDefault: 'Biasa',
            densityLarger: 'Besar',
            densityMiddle: 'Tengah',
            densitySmall: 'Kecil',
          },
          loginForm: { submitText: 'Log Masuk' },
        },
        D = {
          moneySymbol: '$',
          form: {
            lightFilter: {
              more: '\u66F4\u591A\u7BE9\u9078',
              clear: '\u6E05\u9664',
              confirm: '\u78BA\u8A8D',
              itemUnit: '\u9805',
            },
          },
          tableForm: {
            search: '\u67E5\u8A62',
            reset: '\u91CD\u7F6E',
            submit: '\u63D0\u4EA4',
            collapsed: '\u5C55\u958B',
            expand: '\u6536\u8D77',
            inputPlaceholder: '\u8ACB\u8F38\u5165',
            selectPlaceholder: '\u8ACB\u9078\u64C7',
          },
          alert: {
            clear: '\u53D6\u6D88\u9078\u64C7',
            selected: '\u5DF2\u9078\u64C7',
            item: '\u9805',
          },
          pagination: { total: { range: '\u7B2C', total: '\u689D/\u7E3D\u5171', item: '\u689D' } },
          tableToolBar: {
            leftPin: '\u56FA\u5B9A\u5230\u5DE6\u908A',
            rightPin: '\u56FA\u5B9A\u5230\u53F3\u908A',
            noPin: '\u4E0D\u56FA\u5B9A',
            leftFixedTitle: '\u56FA\u5B9A\u5728\u5DE6\u5074',
            rightFixedTitle: '\u56FA\u5B9A\u5728\u53F3\u5074',
            noFixedTitle: '\u4E0D\u56FA\u5B9A',
            reset: '\u91CD\u7F6E',
            columnDisplay: '\u5217\u5C55\u793A',
            columnSetting: '\u5217\u8A2D\u7F6E',
            fullScreen: '\u5168\u5C4F',
            exitFullScreen: '\u9000\u51FA\u5168\u5C4F',
            reload: '\u5237\u65B0',
            density: '\u5BC6\u5EA6',
            densityDefault: '\u6B63\u5E38',
            densityLarger: '\u9ED8\u8A8D',
            densityMiddle: '\u4E2D\u7B49',
            densitySmall: '\u7DCA\u6E4A',
          },
          editableTable: {
            action: { save: '\u4FDD\u5B58', cancel: '\u53D6\u6D88', delete: '\u522A\u9664' },
          },
          switch: { open: '\u6253\u958B', close: '\u95DC\u9589' },
          loginForm: { submitText: '\u767B\u5165' },
        },
        B = {
          moneySymbol: '\u20AC',
          form: {
            lightFilter: {
              more: 'Plus',
              clear: 'Effacer',
              confirm: 'Confirmer',
              itemUnit: 'Items',
            },
          },
          tableForm: {
            search: 'Rechercher',
            reset: 'R\xE9initialiser',
            submit: 'Envoyer',
            collapsed: 'Agrandir',
            expand: 'R\xE9duire',
            inputPlaceholder: 'Entrer une valeur',
            selectPlaceholder: 'S\xE9lectionner une valeur',
          },
          alert: { clear: 'R\xE9initialiser', selected: 'S\xE9lectionn\xE9', item: 'Item' },
          pagination: { total: { range: ' ', total: 'sur', item: '\xE9l\xE9ments' } },
          tableToolBar: {
            leftPin: '\xC9pingler \xE0 gauche',
            rightPin: '\xC9pingler \xE0 gauche',
            noPin: 'Sans \xE9pingle',
            leftFixedTitle: 'Fixer \xE0 gauche',
            rightFixedTitle: 'Fixer \xE0 droite',
            noFixedTitle: 'Non fix\xE9',
            reset: 'R\xE9initialiser',
            columnDisplay: 'Affichage colonne',
            columnSetting: 'R\xE9glages',
            fullScreen: 'Plein \xE9cran',
            exitFullScreen: 'Quitter Plein \xE9cran',
            reload: 'Rafraichir',
            density: 'Densit\xE9',
            densityDefault: 'Par d\xE9faut',
            densityLarger: 'Larger',
            densityMiddle: 'Moyenne',
            densitySmall: 'Compacte',
          },
          stepsForm: { next: 'Suivante', prev: 'Pr\xE9c\xE9dente', submit: 'Finaliser' },
          loginForm: { submitText: 'Se connecter' },
          editableTable: {
            action: { save: 'Sauvegarder', cancel: 'Annuler', delete: 'Supprimer' },
          },
        },
        he = {
          moneySymbol: 'R$',
          form: {
            lightFilter: { more: 'Mais', clear: 'Limpar', confirm: 'Confirmar', itemUnit: 'Itens' },
          },
          tableForm: {
            search: 'Filtrar',
            reset: 'Limpar',
            submit: 'Confirmar',
            collapsed: 'Expandir',
            expand: 'Colapsar',
            inputPlaceholder: 'Por favor insira',
            selectPlaceholder: 'Por favor selecione',
          },
          alert: { clear: 'Limpar', selected: 'Selecionado(s)', item: 'Item(s)' },
          pagination: { total: { range: ' ', total: 'de', item: 'items' } },
          tableToolBar: {
            leftPin: 'Fixar \xE0 esquerda',
            rightPin: 'Fixar \xE0 direita',
            noPin: 'Desfixado',
            leftFixedTitle: 'Fixado \xE0 esquerda',
            rightFixedTitle: 'Fixado \xE0 direita',
            noFixedTitle: 'N\xE3o fixado',
            reset: 'Limpar',
            columnDisplay: 'Mostrar Coluna',
            columnSetting: 'Configura\xE7\xF5es',
            fullScreen: 'Tela Cheia',
            exitFullScreen: 'Sair da Tela Cheia',
            reload: 'Atualizar',
            density: 'Densidade',
            densityDefault: 'Padr\xE3o',
            densityLarger: 'Largo',
            densityMiddle: 'M\xE9dio',
            densitySmall: 'Compacto',
          },
          stepsForm: { next: 'Pr\xF3ximo', prev: 'Anterior', submit: 'Enviar' },
          loginForm: { submitText: 'Entrar' },
          editableTable: { action: { save: 'Salvar', cancel: 'Cancelar', delete: 'Apagar' } },
        },
        re = {
          moneySymbol: '\u20A9',
          form: {
            lightFilter: {
              more: '\uB354\uBCF4\uAE30',
              clear: '\uCDE8\uC18C',
              confirm: '\uD655\uC778',
              itemUnit: '\uAC74\uC218',
            },
          },
          tableForm: {
            search: '\uC870\uD68C',
            reset: '\uCD08\uAE30\uD654',
            submit: '\uC81C\uCD9C',
            collapsed: '\uD655\uC7A5',
            expand: '\uB2EB\uAE30',
            inputPlaceholder: '\uC785\uB825\uD574 \uC8FC\uC138\uC694',
            selectPlaceholder: '\uC120\uD0DD\uD574 \uC8FC\uC138\uC694',
          },
          alert: { clear: '\uCDE8\uC18C', selected: '\uC120\uD0DD', item: '\uAC74' },
          pagination: { total: { range: ' ', total: '/ \uCD1D', item: '\uAC74' } },
          tableToolBar: {
            leftPin: '\uC67C\uCABD\uC73C\uB85C \uD540',
            rightPin: '\uC624\uB978\uCABD\uC73C\uB85C \uD540',
            noPin: '\uD540 \uC81C\uAC70',
            leftFixedTitle: '\uC67C\uCABD\uC73C\uB85C \uACE0\uC815',
            rightFixedTitle: '\uC624\uB978\uCABD\uC73C\uB85C \uACE0\uC815',
            noFixedTitle: '\uBE44\uACE0\uC815',
            reset: '\uCD08\uAE30\uD654',
            columnDisplay: '\uCEEC\uB7FC \uD45C\uC2DC',
            columnSetting: '\uC124\uC815',
            fullScreen: '\uC804\uCCB4 \uD654\uBA74',
            exitFullScreen: '\uC804\uCCB4 \uD654\uBA74 \uCDE8\uC18C',
            reload: '\uB2E4\uC2DC \uC77D\uAE30',
            density: '\uC5EC\uBC31',
            densityDefault: '\uAE30\uBCF8',
            densityLarger: '\uB9CE\uC740 \uC5EC\uBC31',
            densityMiddle: '\uC911\uAC04 \uC5EC\uBC31',
            densitySmall: '\uC881\uC740 \uC5EC\uBC31',
          },
          stepsForm: { next: '\uB2E4\uC74C', prev: '\uC774\uC804', submit: '\uC885\uB8CC' },
          loginForm: { submitText: '\uB85C\uADF8\uC778' },
          editableTable: {
            action: { save: '\uC800\uC7A5', cancel: '\uCDE8\uC18C', delete: '\uC0AD\uC81C' },
          },
        },
        se = {
          moneySymbol: 'RP',
          form: {
            lightFilter: { more: 'Lebih', clear: 'Hapus', confirm: 'Konfirmasi', itemUnit: 'Unit' },
          },
          tableForm: {
            search: 'Cari',
            reset: 'Atur ulang',
            submit: 'Kirim',
            collapsed: 'Lebih sedikit',
            expand: 'Lebih banyak',
            inputPlaceholder: 'Masukkan pencarian',
            selectPlaceholder: 'Pilih',
          },
          alert: { clear: 'Hapus', selected: 'Dipilih', item: 'Butir' },
          pagination: { total: { range: ' ', total: 'Dari', item: 'Butir' } },
          tableToolBar: {
            leftPin: 'Pin kiri',
            rightPin: 'Pin kanan',
            noPin: 'Tidak ada pin',
            leftFixedTitle: 'Rata kiri',
            rightFixedTitle: 'Rata kanan',
            noFixedTitle: 'Tidak tetap',
            reset: 'Atur ulang',
            columnDisplay: 'Tampilan kolom',
            columnSetting: 'Pengaturan',
            fullScreen: 'Layar penuh',
            exitFullScreen: 'Keluar layar penuh',
            reload: 'Atur ulang',
            density: 'Kerapatan',
            densityDefault: 'Standar',
            densityLarger: 'Lebih besar',
            densityMiddle: 'Sedang',
            densitySmall: 'Rapat',
          },
          stepsForm: { next: 'Selanjutnya', prev: 'Sebelumnya', submit: 'Selesai' },
          loginForm: { submitText: 'Login' },
        },
        ve = {
          moneySymbol: '\u20AC',
          form: {
            lightFilter: {
              more: 'Mehr',
              clear: 'Zur\xFCcksetzen',
              confirm: 'Best\xE4tigen',
              itemUnit: 'Eintr\xE4ge',
            },
          },
          tableForm: {
            search: 'Suchen',
            reset: 'Zur\xFCcksetzen',
            submit: 'Absenden',
            collapsed: 'Zeige mehr',
            expand: 'Zeige weniger',
            inputPlaceholder: 'Bitte eingeben',
            selectPlaceholder: 'Bitte ausw\xE4hlen',
          },
          alert: { clear: 'Zur\xFCcksetzen', selected: 'Ausgew\xE4hlt', item: 'Eintrag' },
          pagination: { total: { range: ' ', total: 'von', item: 'Eintr\xE4gen' } },
          tableToolBar: {
            leftPin: 'Links anheften',
            rightPin: 'Rechts anheften',
            noPin: 'Nicht angeheftet',
            leftFixedTitle: 'Links fixiert',
            rightFixedTitle: 'Rechts fixiert',
            noFixedTitle: 'Nicht fixiert',
            reset: 'Zur\xFCcksetzen',
            columnDisplay: 'Angezeigte Reihen',
            columnSetting: 'Einstellungen',
            fullScreen: 'Vollbild',
            exitFullScreen: 'Vollbild verlassen',
            reload: 'Aktualisieren',
            density: 'Abstand',
            densityDefault: 'Standard',
            densityLarger: 'Gr\xF6\xDFer',
            densityMiddle: 'Mittel',
            densitySmall: 'Kompakt',
          },
          stepsForm: { next: 'Weiter', prev: 'Zur\xFCck', submit: 'Abschlie\xDFen' },
          loginForm: { submitText: 'Anmelden' },
        },
        xe = {
          moneySymbol: '\u062A\u0648\u0645\u0627\u0646',
          form: {
            lightFilter: {
              more: '\u0628\u06CC\u0634\u062A\u0631',
              clear: '\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646',
              confirm: '\u062A\u0627\u06CC\u06CC\u062F',
              itemUnit: '\u0645\u0648\u0631\u062F',
            },
          },
          tableForm: {
            search: '\u062C\u0633\u062A\u062C\u0648',
            reset: '\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC',
            submit: '\u062A\u0627\u06CC\u06CC\u062F',
            collapsed: '\u0646\u0645\u0627\u06CC\u0634 \u0628\u06CC\u0634\u062A\u0631',
            expand: '\u0646\u0645\u0627\u06CC\u0634 \u06A9\u0645\u062A\u0631',
            inputPlaceholder: '\u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u062F',
            selectPlaceholder: '\u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F',
          },
          alert: {
            clear: '\u067E\u0627\u06A9 \u0633\u0627\u0632\u06CC',
            selected: '\u0627\u0646\u062A\u062E\u0627\u0628',
            item: '\u0645\u0648\u0631\u062F',
          },
          pagination: {
            total: { range: ' ', total: '\u0627\u0632', item: '\u0645\u0648\u0631\u062F' },
          },
          tableToolBar: {
            leftPin: '\u0633\u0646\u062C\u0627\u0642 \u0628\u0647 \u0686\u067E',
            rightPin: '\u0633\u0646\u062C\u0627\u0642 \u0628\u0647 \u0631\u0627\u0633\u062A',
            noPin: '\u0633\u0646\u062C\u0627\u0642 \u0646\u0634\u062F\u0647',
            leftFixedTitle: '\u062B\u0627\u0628\u062A \u0634\u062F\u0647 \u062F\u0631 \u0686\u067E',
            rightFixedTitle:
              '\u062B\u0627\u0628\u062A \u0634\u062F\u0647 \u062F\u0631 \u0631\u0627\u0633\u062A',
            noFixedTitle: '\u0634\u0646\u0627\u0648\u0631',
            reset: '\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC',
            columnDisplay: '\u0646\u0645\u0627\u06CC\u0634 \u0647\u0645\u0647',
            columnSetting: '\u062A\u0646\u0638\u06CC\u0645\u0627\u062A',
            fullScreen: '\u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647',
            exitFullScreen:
              '\u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0627\u0644\u062A \u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647',
            reload: '\u062A\u0627\u0632\u0647 \u0633\u0627\u0632\u06CC',
            density: '\u062A\u0631\u0627\u06A9\u0645',
            densityDefault: '\u067E\u06CC\u0634 \u0641\u0631\u0636',
            densityLarger: '\u0628\u0632\u0631\u06AF',
            densityMiddle: '\u0645\u062A\u0648\u0633\u0637',
            densitySmall: '\u06A9\u0648\u0686\u06A9',
          },
          stepsForm: {
            next: '\u0628\u0639\u062F\u06CC',
            prev: '\u0642\u0628\u0644\u06CC',
            submit: '\u0627\u062A\u0645\u0627\u0645',
          },
          loginForm: { submitText: '\u0648\u0631\u0648\u062F' },
          editableTable: {
            action: {
              save: '\u0630\u062E\u06CC\u0631\u0647',
              cancel: '\u0644\u063A\u0648',
              delete: '\u062D\u0630\u0641',
            },
          },
        },
        we = {
          moneySymbol: '$',
          form: {
            lightFilter: {
              more: 'Daha Fazla',
              clear: 'Temizle',
              confirm: 'Onayla',
              itemUnit: '\xD6\u011Feler',
            },
          },
          tableForm: {
            search: 'Filtrele',
            reset: 'S\u0131f\u0131rla',
            submit: 'G\xF6nder',
            collapsed: 'Daha fazla',
            expand: 'Daha az',
            inputPlaceholder: 'Filtrelemek i\xE7in bir de\u011Fer girin',
            selectPlaceholder: 'Filtrelemek i\xE7in bir de\u011Fer se\xE7in',
          },
          alert: { clear: 'Temizle', selected: 'Se\xE7ili', item: '\xD6\u011Fe' },
          pagination: { total: { range: ' ', total: 'Toplam', item: '\xD6\u011Fe' } },
          tableToolBar: {
            leftPin: 'Sola sabitle',
            rightPin: 'Sa\u011Fa sabitle',
            noPin: 'Sabitlemeyi kald\u0131r',
            leftFixedTitle: 'Sola sabitlendi',
            rightFixedTitle: 'Sa\u011Fa sabitlendi',
            noFixedTitle: 'Sabitlenmedi',
            reset: 'S\u0131f\u0131rla',
            columnDisplay: 'Kolon G\xF6r\xFCn\xFCm\xFC',
            columnSetting: 'Ayarlar',
            fullScreen: 'Tam Ekran',
            exitFullScreen: 'Tam Ekrandan \xC7\u0131k',
            reload: 'Yenile',
            density: 'Kal\u0131nl\u0131k',
            densityDefault: 'Varsay\u0131lan',
            densityLarger: 'B\xFCy\xFCk',
            densityMiddle: 'Orta',
            densitySmall: 'K\xFC\xE7\xFCk',
          },
          stepsForm: { next: 'S\u0131radaki', prev: '\xD6nceki', submit: 'G\xF6nder' },
          loginForm: { submitText: 'Giri\u015F Yap' },
          editableTable: { action: { save: 'Kaydet', cancel: 'Vazge\xE7', delete: 'Sil' } },
        },
        We = {
          moneySymbol: 'z\u0142',
          form: {
            lightFilter: {
              more: 'Wi\u0119cej',
              clear: 'Wyczy\u015B\u0107',
              confirm: 'Potwierd\u017A',
              itemUnit: 'Ilo\u015B\u0107',
            },
          },
          tableForm: {
            search: 'Szukaj',
            reset: 'Reset',
            submit: 'Zatwierd\u017A',
            collapsed: 'Poka\u017C wiecej',
            expand: 'Poka\u017C mniej',
            inputPlaceholder: 'Prosz\u0119 poda\u0107',
            selectPlaceholder: 'Prosz\u0119 wybra\u0107',
          },
          alert: { clear: 'Wyczy\u015B\u0107', selected: 'Wybrane', item: 'Wpis' },
          pagination: { total: { range: ' ', total: 'z', item: 'Wpis\xF3w' } },
          tableToolBar: {
            leftPin: 'Przypnij do lewej',
            rightPin: 'Przypnij do prawej',
            noPin: 'Odepnij',
            leftFixedTitle: 'Przypi\u0119te do lewej',
            rightFixedTitle: 'Przypi\u0119te do prawej',
            noFixedTitle: 'Nieprzypi\u0119te',
            reset: 'Reset',
            columnDisplay: 'Wy\u015Bwietlane wiersze',
            columnSetting: 'Ustawienia',
            fullScreen: 'Pe\u0142en ekran',
            exitFullScreen: 'Zamknij pe\u0142en ekran',
            reload: 'Od\u015Bwie\u017C',
            density: 'Odst\u0119p',
            densityDefault: 'Standard',
            densityLarger: 'Wiekszy',
            densityMiddle: 'Sredni',
            densitySmall: 'Kompaktowy',
          },
          stepsForm: { next: 'Weiter', prev: 'Zur\xFCck', submit: 'Abschlie\xDFen' },
          loginForm: { submitText: 'Zaloguj si\u0119' },
        };
      function Ue(p, T, c) {
        var L = T.replace(/\[(\d+)\]/g, '.$1').split('.'),
          U = p,
          W = c,
          ee = h(L),
          ye;
        try {
          for (ee.s(); !(ye = ee.n()).done; ) {
            var Y = ye.value;
            if (((W = Object(U)[Y]), (U = Object(U)[Y]), W === void 0)) return c;
          }
        } catch (Q) {
          ee.e(Q);
        } finally {
          ee.f();
        }
        return W;
      }
      var N = function (T, c) {
          return {
            getMessage: function (U, W) {
              return Ue(c, U, W) || W;
            },
            locale: T,
          };
        },
        ze = N('ar_EG', le),
        Me = N('zh_CN', Ze),
        Ye = N('en_US', oe),
        Ke = N('en_GB', ce),
        e = N('vi_VN', Oe),
        r = N('it_IT', ke),
        t = N('ja_JP', g),
        l = N('es_ES', S),
        n = N('ru_RU', M),
        x = N('sr_RS', k),
        v = N('ms_MY', o),
        F = N('zh_TW', D),
        j = N('fr_FR', B),
        I = N('pt_BR', he),
        d = N('ko_KR', re),
        Z = N('id_ID', se),
        ue = N('de_DE', ve),
        H = N('fa_IR', xe),
        Ee = N('tr_TR', we),
        De = N('pl_PL', We),
        ie = {
          'ar-EG': ze,
          'zh-CN': Me,
          'en-US': Ye,
          'en-GB': Ke,
          'vi-VN': e,
          'it-IT': r,
          'ja-JP': t,
          'es-ES': l,
          'ru-RU': n,
          'sr-RS': x,
          'ms-MY': v,
          'zh-TW': F,
          'fr-FR': j,
          'pt-BR': I,
          'ko-KR': d,
          'id-ID': Z,
          'de-DE': ue,
          'fa-IR': H,
          'tr-TR': Ee,
          'pl-PL': De,
        },
        ge = Object.keys(ie),
        Te = w.createContext({ intl: a(a({}, Me), {}, { locale: 'default' }), valueTypeMap: {} }),
        b = Te.Consumer,
        Ve = Te.Provider,
        Ne = function (T) {
          if (!T) return 'zh-CN';
          var c = T.toLocaleLowerCase();
          return ge.find(function (L) {
            var U = L.toLocaleLowerCase();
            return U.includes(c);
          });
        },
        Ae = function (T) {
          var c = T.children,
            L = (0, w.useContext)(P.ZP.ConfigContext),
            U = L.locale,
            W = U === void 0 ? P.ZP : w.Fragment,
            ee = (0, R.kY)(),
            ye = ee.cache;
          return (
            (0, w.useEffect)(
              function () {
                return function () {
                  ye.clear();
                };
              },
              [ye],
            ),
            w.createElement(
              R.J$,
              {
                value: {
                  provider: function () {
                    return new Map();
                  },
                },
              },
              w.createElement(b, null, function (Y) {
                var Q,
                  _e = U == null ? void 0 : U.locale,
                  Ie = Ne(_e),
                  $e =
                    _e && ((Q = Y.intl) === null || Q === void 0 ? void 0 : Q.locale) === 'default'
                      ? ie[Ie]
                      : Y.intl || ie[Ie],
                  Fe = U === void 0 ? { locale: ae } : {};
                return w.createElement(
                  W,
                  Fe,
                  w.createElement(Ve, { value: a(a({}, Y), {}, { intl: $e || Me }) }, c),
                );
              }),
            )
          );
        };
      function Le() {
        var p = (0, w.useContext)(Te);
        return p.intl || Me;
      }
      var Re = Te;
    },
    51812: function (X, E) {
      'use strict';
      var s = function (P) {
        var f = {};
        if (
          (Object.keys(P || {}).forEach(function (m) {
            P[m] !== void 0 && (f[m] = P[m]);
          }),
          !(Object.keys(f).length < 1))
        )
          return f;
      };
      E.Z = s;
    },
    56725: function (X, E, s) {
      'use strict';
      var u = s(78486),
        P = s(46691),
        f = s(67294);
      function m(a, i) {
        var y = (0, f.useRef)(!1),
          h = (0, f.useRef)(void 0);
        (0, f.useEffect)(function () {
          return (
            (y.current = !0),
            function () {
              clearTimeout(h.current), (y.current = !1);
            }
          );
        }, []);
        var w = (0, P.Z)(a, i),
          R = (0, u.Z)(w, 2),
          q = R[0],
          G = R[1],
          C = function (A) {
            clearTimeout(h.current),
              (h.current = window.setTimeout(function () {
                y.current && G(A);
              }, 0));
          };
        return [q, C];
      }
      E.Z = m;
    },
    13518: function (X, E, s) {
      'use strict';
      s.d(E, {
        Z: function () {
          return u;
        },
      });
      function u(P, f) {
        (f == null || f > P.length) && (f = P.length);
        for (var m = 0, a = new Array(f); m < f; m++) a[m] = P[m];
        return a;
      }
    },
    78486: function (X, E, s) {
      'use strict';
      s.d(E, {
        Z: function () {
          return a;
        },
      });
      function u(i) {
        if (Array.isArray(i)) return i;
      }
      function P(i, y) {
        var h =
          i == null
            ? null
            : (typeof Symbol != 'undefined' && i[Symbol.iterator]) || i['@@iterator'];
        if (h != null) {
          var w = [],
            R = !0,
            q = !1,
            G,
            C;
          try {
            for (
              h = h.call(i);
              !(R = (G = h.next()).done) && (w.push(G.value), !(y && w.length === y));
              R = !0
            );
          } catch ($) {
            (q = !0), (C = $);
          } finally {
            try {
              !R && h.return != null && h.return();
            } finally {
              if (q) throw C;
            }
          }
          return w;
        }
      }
      var f = s(42225);
      function m() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function a(i, y) {
        return u(i) || P(i, y) || (0, f.Z)(i, y) || m();
      }
    },
    85228: function (X, E, s) {
      'use strict';
      s.d(E, {
        Z: function () {
          return u;
        },
      });
      function u(P) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (u = function (m) {
                return typeof m;
              })
            : (u = function (m) {
                return m &&
                  typeof Symbol == 'function' &&
                  m.constructor === Symbol &&
                  m !== Symbol.prototype
                  ? 'symbol'
                  : typeof m;
              }),
          u(P)
        );
      }
    },
    42225: function (X, E, s) {
      'use strict';
      s.d(E, {
        Z: function () {
          return P;
        },
      });
      var u = s(13518);
      function P(f, m) {
        if (!!f) {
          if (typeof f == 'string') return (0, u.Z)(f, m);
          var a = Object.prototype.toString.call(f).slice(8, -1);
          if (
            (a === 'Object' && f.constructor && (a = f.constructor.name),
            a === 'Map' || a === 'Set')
          )
            return Array.from(f);
          if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
            return (0, u.Z)(f, m);
        }
      }
    },
    81626: function (X, E) {
      'use strict';
      E.Z = {
        items_per_page: '\u6761/\u9875',
        jump_to: '\u8DF3\u81F3',
        jump_to_confirm: '\u786E\u5B9A',
        page: '\u9875',
        prev_page: '\u4E0A\u4E00\u9875',
        next_page: '\u4E0B\u4E00\u9875',
        prev_5: '\u5411\u524D 5 \u9875',
        next_5: '\u5411\u540E 5 \u9875',
        prev_3: '\u5411\u524D 3 \u9875',
        next_3: '\u5411\u540E 3 \u9875',
        page_size: '\u9875\u7801',
      };
    },
    12435: function (X, E, s) {
      'use strict';
      s.d(E, {
        Z: function () {
          return R;
        },
      });
      var u = s(90359),
        P = s(41625),
        f = s(74204),
        m = s(70183),
        a = [],
        i = 'ant-scrolling-effect',
        y = new RegExp(''.concat(i), 'g'),
        h = 0,
        w = new Map(),
        R = function q(G) {
          var C = this;
          (0, P.Z)(this, q),
            (this.lockTarget = void 0),
            (this.options = void 0),
            (this.getContainer = function () {
              var $;
              return ($ = C.options) === null || $ === void 0 ? void 0 : $.container;
            }),
            (this.reLock = function ($) {
              var A = a.find(function (O) {
                var V = O.target;
                return V === C.lockTarget;
              });
              A && C.unLock(), (C.options = $), A && ((A.options = $), C.lock());
            }),
            (this.lock = function () {
              var $;
              if (
                !a.some(function (z) {
                  var _ = z.target;
                  return _ === C.lockTarget;
                })
              ) {
                if (
                  a.some(function (z) {
                    var _,
                      ne = z.options;
                    return (
                      (ne == null ? void 0 : ne.container) ===
                      ((_ = C.options) === null || _ === void 0 ? void 0 : _.container)
                    );
                  })
                ) {
                  a = [].concat((0, u.Z)(a), [{ target: C.lockTarget, options: C.options }]);
                  return;
                }
                var A = 0,
                  O =
                    (($ = C.options) === null || $ === void 0 ? void 0 : $.container) ||
                    document.body;
                ((O === document.body &&
                  window.innerWidth - document.documentElement.clientWidth > 0) ||
                  O.scrollHeight > O.clientHeight) &&
                  (A = (0, f.Z)());
                var V = O.className;
                if (
                  (a.filter(function (z) {
                    var _,
                      ne = z.options;
                    return (
                      (ne == null ? void 0 : ne.container) ===
                      ((_ = C.options) === null || _ === void 0 ? void 0 : _.container)
                    );
                  }).length === 0 &&
                    w.set(
                      O,
                      (0, m.Z)(
                        {
                          width: A !== 0 ? 'calc(100% - '.concat(A, 'px)') : void 0,
                          overflow: 'hidden',
                          overflowX: 'hidden',
                          overflowY: 'hidden',
                        },
                        { element: O },
                      ),
                    ),
                  !y.test(V))
                ) {
                  var te = ''.concat(V, ' ').concat(i);
                  O.className = te.trim();
                }
                a = [].concat((0, u.Z)(a), [{ target: C.lockTarget, options: C.options }]);
              }
            }),
            (this.unLock = function () {
              var $,
                A = a.find(function (te) {
                  var z = te.target;
                  return z === C.lockTarget;
                });
              if (
                ((a = a.filter(function (te) {
                  var z = te.target;
                  return z !== C.lockTarget;
                })),
                !(
                  !A ||
                  a.some(function (te) {
                    var z,
                      _ = te.options;
                    return (
                      (_ == null ? void 0 : _.container) ===
                      ((z = A.options) === null || z === void 0 ? void 0 : z.container)
                    );
                  })
                ))
              ) {
                var O =
                    (($ = C.options) === null || $ === void 0 ? void 0 : $.container) ||
                    document.body,
                  V = O.className;
                !y.test(V) ||
                  ((0, m.Z)(w.get(O), { element: O }),
                  w.delete(O),
                  (O.className = O.className.replace(y, '').trim()));
              }
            }),
            (this.lockTarget = h++),
            (this.options = G);
        };
    },
    5137: function (X, E, s) {
      'use strict';
      s.d(E, {
        Z: function () {
          return ke;
        },
      });
      var u = s(41625);
      function P(S, g) {
        for (var M = 0; M < g.length; M++) {
          var k = g[M];
          (k.enumerable = k.enumerable || !1),
            (k.configurable = !0),
            'value' in k && (k.writable = !0),
            Object.defineProperty(S, k.key, k);
        }
      }
      function f(S, g, M) {
        return g && P(S.prototype, g), M && P(S, M), S;
      }
      function m(S, g) {
        return (
          (m =
            Object.setPrototypeOf ||
            function (k, o) {
              return (k.__proto__ = o), k;
            }),
          m(S, g)
        );
      }
      function a(S, g) {
        if (typeof g != 'function' && g !== null)
          throw new TypeError('Super expression must either be null or a function');
        (S.prototype = Object.create(g && g.prototype, {
          constructor: { value: S, writable: !0, configurable: !0 },
        })),
          g && m(S, g);
      }
      function i(S) {
        return (
          (i = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (M) {
                return M.__proto__ || Object.getPrototypeOf(M);
              }),
          i(S)
        );
      }
      function y() {
        if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (S) {
          return !1;
        }
      }
      var h = s(29319);
      function w(S) {
        if (S === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return S;
      }
      function R(S, g) {
        if (g && ((0, h.Z)(g) === 'object' || typeof g == 'function')) return g;
        if (g !== void 0)
          throw new TypeError('Derived constructors may only return object or undefined');
        return w(S);
      }
      function q(S) {
        var g = y();
        return function () {
          var k = i(S),
            o;
          if (g) {
            var D = i(this).constructor;
            o = Reflect.construct(k, arguments, D);
          } else o = k.apply(this, arguments);
          return R(this, o);
        };
      }
      var G = s(67294),
        C = s(75164),
        $ = s(59015),
        A = s(98924),
        O = s(74204),
        V = s(70183);
      function te() {
        return (
          document.body.scrollHeight >
            (window.innerHeight || document.documentElement.clientHeight) &&
          window.innerWidth > document.body.offsetWidth
        );
      }
      var z = {},
        _ = function (S) {
          if (!(!te() && !S)) {
            var g = 'ant-scrolling-effect',
              M = new RegExp(''.concat(g), 'g'),
              k = document.body.className;
            if (S) {
              if (!M.test(k)) return;
              (0, V.Z)(z), (z = {}), (document.body.className = k.replace(M, '').trim());
              return;
            }
            var o = (0, O.Z)();
            if (
              o &&
              ((z = (0, V.Z)({ position: 'relative', width: 'calc(100% - '.concat(o, 'px)') })),
              !M.test(k))
            ) {
              var D = ''.concat(k, ' ').concat(g);
              document.body.className = D.trim();
            }
          }
        },
        ne = s(12435),
        ae = 0,
        le = (0, A.Z)();
      function Ze() {
        return 0;
      }
      var oe = {},
        ce = function (g) {
          if (!le) return null;
          if (g) {
            if (typeof g == 'string') return document.querySelectorAll(g)[0];
            if (typeof g == 'function') return g();
            if ((0, h.Z)(g) === 'object' && g instanceof window.HTMLElement) return g;
          }
          return document.body;
        },
        Oe = (function (S) {
          a(M, S);
          var g = q(M);
          function M(k) {
            var o;
            return (
              (0, u.Z)(this, M),
              (o = g.call(this, k)),
              (o.container = void 0),
              (o.componentRef = G.createRef()),
              (o.rafId = void 0),
              (o.scrollLocker = void 0),
              (o.renderComponent = void 0),
              (o.updateScrollLocker = function (D) {
                var B = D || {},
                  he = B.visible,
                  re = o.props,
                  se = re.getContainer,
                  ve = re.visible;
                ve &&
                  ve !== he &&
                  le &&
                  ce(se) !== o.scrollLocker.getContainer() &&
                  o.scrollLocker.reLock({ container: ce(se) });
              }),
              (o.updateOpenCount = function (D) {
                var B = D || {},
                  he = B.visible,
                  re = B.getContainer,
                  se = o.props,
                  ve = se.visible,
                  xe = se.getContainer;
                ve !== he &&
                  le &&
                  ce(xe) === document.body &&
                  (ve && !he ? (ae += 1) : D && (ae -= 1));
                var we = typeof xe == 'function' && typeof re == 'function';
                (we ? xe.toString() !== re.toString() : xe !== re) && o.removeCurrentContainer();
              }),
              (o.attachToParent = function () {
                var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                if (D || (o.container && !o.container.parentNode)) {
                  var B = ce(o.props.getContainer);
                  return B ? (B.appendChild(o.container), !0) : !1;
                }
                return !0;
              }),
              (o.getContainer = function () {
                return le
                  ? (o.container ||
                      ((o.container = document.createElement('div')), o.attachToParent(!0)),
                    o.setWrapperClassName(),
                    o.container)
                  : null;
              }),
              (o.setWrapperClassName = function () {
                var D = o.props.wrapperClassName;
                o.container && D && D !== o.container.className && (o.container.className = D);
              }),
              (o.removeCurrentContainer = function () {
                var D, B;
                (D = o.container) === null ||
                  D === void 0 ||
                  (B = D.parentNode) === null ||
                  B === void 0 ||
                  B.removeChild(o.container);
              }),
              (o.switchScrollingEffect = function () {
                ae === 1 && !Object.keys(oe).length
                  ? (_(),
                    (oe = (0, V.Z)({
                      overflow: 'hidden',
                      overflowX: 'hidden',
                      overflowY: 'hidden',
                    })))
                  : ae || ((0, V.Z)(oe), (oe = {}), _(!0));
              }),
              (o.scrollLocker = new ne.Z({ container: ce(k.getContainer) })),
              o
            );
          }
          return (
            f(M, [
              {
                key: 'componentDidMount',
                value: function () {
                  var o = this;
                  this.updateOpenCount(),
                    this.attachToParent() ||
                      (this.rafId = (0, C.Z)(function () {
                        o.forceUpdate();
                      }));
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (o) {
                  this.updateOpenCount(o),
                    this.updateScrollLocker(o),
                    this.setWrapperClassName(),
                    this.attachToParent();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var o = this.props,
                    D = o.visible,
                    B = o.getContainer;
                  le && ce(B) === document.body && (ae = D && ae ? ae - 1 : ae),
                    this.removeCurrentContainer(),
                    C.Z.cancel(this.rafId);
                },
              },
              {
                key: 'render',
                value: function () {
                  var o = this.props,
                    D = o.children,
                    B = o.forceRender,
                    he = o.visible,
                    re = null,
                    se = {
                      getOpenCount: function () {
                        return ae;
                      },
                      getContainer: this.getContainer,
                      switchScrollingEffect: this.switchScrollingEffect,
                      scrollLocker: this.scrollLocker,
                    };
                  return (
                    (B || he || this.componentRef.current) &&
                      (re = G.createElement(
                        $.Z,
                        { getContainer: this.getContainer, ref: this.componentRef },
                        D(se),
                      )),
                    re
                  );
                },
              },
            ]),
            M
          );
        })(G.Component),
        ke = Oe;
    },
    74204: function (X, E, s) {
      'use strict';
      s.d(E, {
        Z: function () {
          return P;
        },
        o: function () {
          return m;
        },
      });
      var u;
      function P(a) {
        if (typeof document == 'undefined') return 0;
        if (a || u === void 0) {
          var i = document.createElement('div');
          (i.style.width = '100%'), (i.style.height = '200px');
          var y = document.createElement('div'),
            h = y.style;
          (h.position = 'absolute'),
            (h.top = '0'),
            (h.left = '0'),
            (h.pointerEvents = 'none'),
            (h.visibility = 'hidden'),
            (h.width = '200px'),
            (h.height = '150px'),
            (h.overflow = 'hidden'),
            y.appendChild(i),
            document.body.appendChild(y);
          var w = i.offsetWidth;
          y.style.overflow = 'scroll';
          var R = i.offsetWidth;
          w === R && (R = y.clientWidth), document.body.removeChild(y), (u = w - R);
        }
        return u;
      }
      function f(a) {
        var i = a.match(/^(.*)px$/),
          y = Number(i == null ? void 0 : i[1]);
        return Number.isNaN(y) ? P() : y;
      }
      function m(a) {
        if (typeof document == 'undefined' || !a || !(a instanceof Element))
          return { width: 0, height: 0 };
        var i = getComputedStyle(a, '::-webkit-scrollbar'),
          y = i.width,
          h = i.height;
        return { width: f(y), height: f(h) };
      }
    },
    70183: function (X, E) {
      'use strict';
      function s(u) {
        var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!u) return {};
        var f = P.element,
          m = f === void 0 ? document.body : f,
          a = {},
          i = Object.keys(u);
        return (
          i.forEach(function (y) {
            a[y] = m.style[y];
          }),
          i.forEach(function (y) {
            m.style[y] = u[y];
          }),
          a
        );
      }
      E.Z = s;
    },
    41625: function (X, E, s) {
      'use strict';
      s.d(E, {
        Z: function () {
          return u;
        },
      });
      function u(P, f) {
        if (!(P instanceof f)) throw new TypeError('Cannot call a class as a function');
      }
    },
    40821: function (X, E, s) {
      'use strict';
      s.d(E, {
        J$: function () {
          return Me;
        },
        ZP: function () {
          return Ke;
        },
        JG: function () {
          return se;
        },
        kY: function () {
          return Ue;
        },
      });
      var u = s(67294);
      function P(e, r, t, l) {
        return new (t || (t = Promise))(function (n, x) {
          function v(I) {
            try {
              j(l.next(I));
            } catch (d) {
              x(d);
            }
          }
          function F(I) {
            try {
              j(l.throw(I));
            } catch (d) {
              x(d);
            }
          }
          function j(I) {
            var d;
            I.done
              ? n(I.value)
              : ((d = I.value),
                d instanceof t
                  ? d
                  : new t(function (Z) {
                      Z(d);
                    })).then(v, F);
          }
          j((l = l.apply(e, r || [])).next());
        });
      }
      function f(e, r) {
        var t,
          l,
          n,
          x,
          v = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (x = { next: F(0), throw: F(1), return: F(2) }),
          typeof Symbol == 'function' &&
            (x[Symbol.iterator] = function () {
              return this;
            }),
          x
        );
        function F(j) {
          return function (I) {
            return (function (d) {
              if (t) throw new TypeError('Generator is already executing.');
              for (; v; )
                try {
                  if (
                    ((t = 1),
                    l &&
                      (n =
                        2 & d[0]
                          ? l.return
                          : d[0]
                          ? l.throw || ((n = l.return) && n.call(l), 0)
                          : l.next) &&
                      !(n = n.call(l, d[1])).done)
                  )
                    return n;
                  switch (((l = 0), n && (d = [2 & d[0], n.value]), d[0])) {
                    case 0:
                    case 1:
                      n = d;
                      break;
                    case 4:
                      return v.label++, { value: d[1], done: !1 };
                    case 5:
                      v.label++, (l = d[1]), (d = [0]);
                      continue;
                    case 7:
                      (d = v.ops.pop()), v.trys.pop();
                      continue;
                    default:
                      if (
                        ((n = v.trys),
                        !((n = n.length > 0 && n[n.length - 1]) || (d[0] !== 6 && d[0] !== 2)))
                      ) {
                        v = 0;
                        continue;
                      }
                      if (d[0] === 3 && (!n || (d[1] > n[0] && d[1] < n[3]))) {
                        v.label = d[1];
                        break;
                      }
                      if (d[0] === 6 && v.label < n[1]) {
                        (v.label = n[1]), (n = d);
                        break;
                      }
                      if (n && v.label < n[2]) {
                        (v.label = n[2]), v.ops.push(d);
                        break;
                      }
                      n[2] && v.ops.pop(), v.trys.pop();
                      continue;
                  }
                  d = r.call(e, v);
                } catch (Z) {
                  (d = [6, Z]), (l = 0);
                } finally {
                  t = n = 0;
                }
              if (5 & d[0]) throw d[1];
              return { value: d[0] ? d[1] : void 0, done: !0 };
            })([j, I]);
          };
        }
      }
      var m,
        a = function () {},
        i = a(),
        y = Object,
        h = function (e) {
          return e === i;
        },
        w = function (e) {
          return typeof e == 'function';
        },
        R = function (e, r) {
          return y.assign({}, e, r);
        },
        q = typeof window != 'undefined',
        G = typeof document != 'undefined',
        C = new WeakMap(),
        $ = 0,
        A = function (e) {
          var r,
            t,
            l = typeof e,
            n = e && e.constructor,
            x = n == Date;
          if (y(e) !== e || x || n == RegExp)
            r = x
              ? e.toJSON()
              : l == 'symbol'
              ? e.toString()
              : l == 'string'
              ? JSON.stringify(e)
              : '' + e;
          else {
            if ((r = C.get(e))) return r;
            if (((r = ++$ + '~'), C.set(e, r), n == Array)) {
              for (r = '@', t = 0; t < e.length; t++) r += A(e[t]) + ',';
              C.set(e, r);
            }
            if (n == y) {
              r = '#';
              for (var v = y.keys(e).sort(); !h((t = v.pop())); )
                h(e[t]) || (r += t + ':' + A(e[t]) + ',');
              C.set(e, r);
            }
          }
          return r;
        },
        O = !0,
        V = q ? window.addEventListener.bind(window) : a,
        te = G ? document.addEventListener.bind(document) : a,
        z = (q && removeEventListener) || a,
        _ = G ? document.removeEventListener.bind(document) : a,
        ne = {
          isOnline: function () {
            return O;
          },
          isVisible: function () {
            var e = G && document.visibilityState;
            return !!h(e) || e !== 'hidden';
          },
        },
        ae = {
          initFocus: function (e) {
            return (
              te('visibilitychange', e),
              V('focus', e),
              function () {
                _('visibilitychange', e), z('focus', e);
              }
            );
          },
          initReconnect: function (e) {
            var r = function () {
                (O = !0), e();
              },
              t = function () {
                O = !1;
              };
            return (
              V('online', r),
              V('offline', t),
              function () {
                z('online', r), z('offline', t);
              }
            );
          },
        },
        le = !q || 'Deno' in window,
        Ze =
          (q && window.requestAnimationFrame) ||
          function (e) {
            return setTimeout(e, 1);
          },
        oe = le ? u.useEffect : u.useLayoutEffect,
        ce = typeof navigator != 'undefined' && navigator.connection,
        Oe = !le && ce && (['slow-2g', '2g'].includes(ce.effectiveType) || ce.saveData),
        ke = function (e) {
          if (w(e))
            try {
              e = e();
            } catch (t) {
              e = '';
            }
          var r = [].concat(e);
          return [
            (e = typeof e == 'string' ? e : (Array.isArray(e) ? e.length : e) ? A(e) : ''),
            r,
            e ? '$err$' + e : '',
            e ? '$req$' + e : '',
          ];
        },
        S = new WeakMap(),
        g = function (e, r, t, l, n, x) {
          for (
            var v = S.get(e),
              F = v[0],
              j = v[1],
              I = v[4],
              d = v[5],
              Z = F[r],
              ue = j[r] || [],
              H = 0;
            H < ue.length;
            ++H
          )
            ue[H](t, l, n);
          return x && (delete I[r], delete d[r], Z && Z[0])
            ? Z[0](2).then(function () {
                return e.get(r);
              })
            : e.get(r);
        },
        M = 0,
        k = function () {
          return ++M;
        },
        o = function () {
          for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
          return P(void 0, void 0, void 0, function () {
            var t, l, n, x, v, F, j, I, d, Z, ue, H, Ee, De;
            return f(this, function (ie) {
              switch (ie.label) {
                case 0:
                  if (
                    ((t = e[0]),
                    (l = e[1]),
                    (n = e[3] !== !1),
                    (x = e[2]),
                    (v = ke(l)),
                    (F = v[0]),
                    (j = v[2]),
                    !F)
                  )
                    return [2];
                  if (((I = S.get(t)), (d = I[2]), (Z = I[3]), e.length < 3))
                    return [2, g(t, F, t.get(F), t.get(j), i, n)];
                  if (((Ee = d[F] = k()), (Z[F] = 0), w(x)))
                    try {
                      x = x(t.get(F));
                    } catch (ge) {
                      H = ge;
                    }
                  return x && w(x.then)
                    ? [
                        4,
                        x.catch(function (ge) {
                          H = ge;
                        }),
                      ]
                    : [3, 2];
                case 1:
                  if (((ue = ie.sent()), Ee !== d[F])) {
                    if (H) throw H;
                    return [2, ue];
                  }
                  return [3, 3];
                case 2:
                  (ue = x), (ie.label = 3);
                case 3:
                  return H || t.set(F, ue), t.set(j, H), (Z[F] = k()), [4, g(t, F, ue, H, i, n)];
                case 4:
                  if (((De = ie.sent()), H)) throw H;
                  return [2, De];
              }
            });
          });
        },
        D = function (e, r) {
          for (var t in e) e[t][0] && e[t][0](r);
        },
        B = function (e, r) {
          if (!S.has(e)) {
            var t = R(ae, r),
              l = {},
              n = o.bind(i, e),
              x = a;
            if ((S.set(e, [l, {}, {}, {}, {}, {}, n]), !le)) {
              var v = t.initFocus(D.bind(i, l, 0)),
                F = t.initReconnect(D.bind(i, l, 1));
              x = function () {
                v && v(), F && F(), S.delete(e);
              };
            }
            return [e, n, x];
          }
          return [e, S.get(e)[6]];
        },
        he = B(new Map()),
        re = he[0],
        se = he[1],
        ve = R(
          {
            onLoadingSlow: a,
            onSuccess: a,
            onError: a,
            onErrorRetry: function (e, r, t, l, n) {
              if (ne.isVisible()) {
                var x = t.errorRetryCount,
                  v = n.retryCount,
                  F = ~~((Math.random() + 0.5) * (1 << (v < 8 ? v : 8))) * t.errorRetryInterval;
                (!h(x) && v > x) || setTimeout(l, F, n);
              }
            },
            onDiscarded: a,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: Oe ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: Oe ? 5e3 : 3e3,
            compare: function (e, r) {
              return A(e) == A(r);
            },
            isPaused: function () {
              return !1;
            },
            cache: re,
            mutate: se,
            fallback: {},
          },
          ne,
        ),
        xe = function (e, r) {
          var t = R(e, r);
          if (r) {
            var l = e.use,
              n = e.fallback,
              x = r.use,
              v = r.fallback;
            l && x && (t.use = l.concat(x)), n && v && (t.fallback = R(n, v));
          }
          return t;
        },
        we = (0, u.createContext)({}),
        We = function (e) {
          return w(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}];
        },
        Ue = function () {
          return R(ve, (0, u.useContext)(we));
        },
        N = function (e, r, t) {
          var l = r[e] || (r[e] = []);
          return (
            l.push(t),
            function () {
              var n = l.indexOf(t);
              n >= 0 && ((l[n] = l[l.length - 1]), l.pop());
            }
          );
        },
        ze = { dedupe: !0 },
        Me = y.defineProperty(
          function (e) {
            var r = e.value,
              t = xe((0, u.useContext)(we), r),
              l = r && r.provider,
              n = (0, u.useState)(function () {
                return l ? B(l(t.cache || re), r) : i;
              })[0];
            return (
              n && ((t.cache = n[0]), (t.mutate = n[1])),
              oe(function () {
                return n ? n[2] : i;
              }, []),
              (0, u.createElement)(we.Provider, R(e, { value: t }))
            );
          },
          'default',
          { value: ve },
        ),
        Ye = function (e) {
          return ke(e)[0];
        },
        Ke =
          ((m = function (e, r, t) {
            var l = t.cache,
              n = t.compare,
              x = t.fallbackData,
              v = t.suspense,
              F = t.revalidateOnMount,
              j = t.refreshInterval,
              I = t.refreshWhenHidden,
              d = t.refreshWhenOffline,
              Z = S.get(l),
              ue = Z[0],
              H = Z[1],
              Ee = Z[2],
              De = Z[3],
              ie = Z[4],
              ge = Z[5],
              Te = ke(e),
              b = Te[0],
              Ve = Te[1],
              Ne = Te[2],
              Ae = Te[3],
              Le = (0, u.useRef)(!1),
              Re = (0, u.useRef)(!1),
              p = (0, u.useRef)(b),
              T = (0, u.useRef)(t),
              c = function () {
                return T.current;
              },
              L = l.get(b),
              U = h(x) ? t.fallback[b] : x,
              W = h(L) ? U : L,
              ee = l.get(Ne),
              ye = function () {
                return h(F) ? !c().isPaused() && (v ? !h(W) : h(W) || t.revalidateIfStale) : F;
              },
              Y = !(!b || !r) && (!!l.get(Ae) || (!Le.current && ye())),
              Q = (function (de, J) {
                var fe = (0, u.useState)({})[1],
                  Pe = (0, u.useRef)(de),
                  Ce = (0, u.useRef)({ data: !1, error: !1, isValidating: !1 }),
                  me = (0, u.useCallback)(function (K) {
                    var be = !1,
                      pe = Pe.current;
                    for (var je in K) {
                      var Se = je;
                      pe[Se] !== K[Se] && ((pe[Se] = K[Se]), Ce.current[Se] && (be = !0));
                    }
                    be && !J.current && fe({});
                  }, []);
                return (
                  oe(function () {
                    Pe.current = de;
                  }),
                  [Pe, Ce.current, me]
                );
              })({ data: W, error: ee, isValidating: Y }, Re),
              _e = Q[0],
              Ie = Q[1],
              $e = Q[2],
              Fe = (0, u.useCallback)(
                function (de) {
                  return P(void 0, void 0, void 0, function () {
                    var J, fe, Pe, Ce, me, K, be, pe, je, Se;
                    return f(this, function (Be) {
                      switch (Be.label) {
                        case 0:
                          if (!b || !r || Re.current || c().isPaused()) return [2, !1];
                          (Pe = !0),
                            (Ce = de || {}),
                            (me = h(ie[b]) || !Ce.dedupe),
                            (K = function () {
                              return !Re.current && b === p.current && Le.current;
                            }),
                            (be = function () {
                              ge[b] === fe && (delete ie[b], delete ge[b]);
                            }),
                            (pe = { isValidating: !1 }),
                            (je = function () {
                              l.set(Ae, !1), K() && $e(pe);
                            }),
                            l.set(Ae, !0),
                            $e({ isValidating: !0 }),
                            (Be.label = 1);
                        case 1:
                          return (
                            Be.trys.push([1, 3, , 4]),
                            me &&
                              (g(l, b, _e.current.data, _e.current.error, !0),
                              t.loadingTimeout &&
                                !l.get(b) &&
                                setTimeout(function () {
                                  Pe && K() && c().onLoadingSlow(b, t);
                                }, t.loadingTimeout),
                              (ge[b] = k()),
                              (ie[b] = r.apply(void 0, Ve))),
                            (fe = ge[b]),
                            [4, ie[b]]
                          );
                        case 2:
                          return (
                            (J = Be.sent()),
                            me && setTimeout(be, t.dedupingInterval),
                            ge[b] !== fe
                              ? (me && K() && c().onDiscarded(b), [2, !1])
                              : (l.set(Ne, i),
                                (pe.error = i),
                                !h(Ee[b]) && (fe <= Ee[b] || fe <= De[b] || De[b] === 0)
                                  ? (je(), me && K() && c().onDiscarded(b), [2, !1])
                                  : (n(_e.current.data, J) || (pe.data = J),
                                    n(l.get(b), J) || l.set(b, J),
                                    me && K() && c().onSuccess(J, b, t),
                                    [3, 4]))
                          );
                        case 3:
                          return (
                            (Se = Be.sent()),
                            be(),
                            c().isPaused() ||
                              (l.set(Ne, Se),
                              (pe.error = Se),
                              me &&
                                K() &&
                                (c().onError(Se, b, t),
                                t.shouldRetryOnError &&
                                  c().onErrorRetry(Se, b, t, Fe, {
                                    retryCount: (Ce.retryCount || 0) + 1,
                                    dedupe: !0,
                                  }))),
                            [3, 4]
                          );
                        case 4:
                          return (
                            (Pe = !1), je(), K() && me && g(l, b, pe.data, pe.error, !1), [2, !0]
                          );
                      }
                    });
                  });
                },
                [b],
              ),
              Ge = (0, u.useCallback)(
                o.bind(i, l, function () {
                  return p.current;
                }),
                [],
              );
            if (
              (oe(function () {
                T.current = t;
              }),
              oe(
                function () {
                  if (b) {
                    var de = Le.current,
                      J = Fe.bind(i, ze),
                      fe = function () {
                        return c().isVisible() && c().isOnline();
                      },
                      Pe = 0,
                      Ce = N(b, H, function (K, be, pe) {
                        $e(
                          R(
                            { error: be, isValidating: pe },
                            n(_e.current.data, K) ? i : { data: K },
                          ),
                        );
                      }),
                      me = N(b, ue, function (K) {
                        if (K == 0) {
                          var be = Date.now();
                          c().revalidateOnFocus &&
                            be > Pe &&
                            fe() &&
                            ((Pe = be + c().focusThrottleInterval), J());
                        } else if (K == 1) c().revalidateOnReconnect && fe() && J();
                        else if (K == 2) return Fe();
                      });
                    return (
                      (Re.current = !1),
                      (p.current = b),
                      (Le.current = !0),
                      de && $e({ data: W, error: ee, isValidating: Y }),
                      ye() && (h(W) || le ? J() : Ze(J)),
                      function () {
                        (Re.current = !0), Ce(), me();
                      }
                    );
                  }
                },
                [b, Fe],
              ),
              oe(
                function () {
                  var de;
                  function J() {
                    j && de !== -1 && (de = setTimeout(fe, j));
                  }
                  function fe() {
                    _e.current.error || (!I && !c().isVisible()) || (!d && !c().isOnline())
                      ? J()
                      : Fe(ze).then(J);
                  }
                  return (
                    J(),
                    function () {
                      de && (clearTimeout(de), (de = -1));
                    }
                  );
                },
                [j, I, d, Fe],
              ),
              (0, u.useDebugValue)(W),
              v && h(W))
            )
              throw h(ee) ? Fe(ze) : ee;
            return {
              mutate: Ge,
              get data() {
                return (Ie.data = !0), W;
              },
              get error() {
                return (Ie.error = !0), ee;
              },
              get isValidating() {
                return (Ie.isValidating = !0), Y;
              },
            };
          }),
          function () {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            var t = Ue(),
              l = We(e),
              n = l[0],
              x = l[1],
              v = l[2],
              F = xe(t, v),
              j = m,
              I = F.use;
            if (I) for (var d = I.length; d-- > 0; ) j = I[d](j);
            return j(n, x || F.fetcher, F);
          });
    },
    42473: function (X) {
      'use strict';
      var E = !1,
        s = function () {};
      if (E) {
        var u = function (f, m) {
          var a = arguments.length;
          m = new Array(a > 1 ? a - 1 : 0);
          for (var i = 1; i < a; i++) m[i - 1] = arguments[i];
          var y = 0,
            h =
              'Warning: ' +
              f.replace(/%s/g, function () {
                return m[y++];
              });
          typeof console != 'undefined' && console.error(h);
          try {
            throw new Error(h);
          } catch (w) {}
        };
        s = function (P, f, m) {
          var a = arguments.length;
          m = new Array(a > 2 ? a - 2 : 0);
          for (var i = 2; i < a; i++) m[i - 2] = arguments[i];
          if (f === void 0)
            throw new Error(
              '`warning(condition, format, ...args)` requires a warning message argument',
            );
          P || u.apply(null, [f].concat(m));
        };
      }
      X.exports = s;
    },
  },
]);
