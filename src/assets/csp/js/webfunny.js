!(function(n) {
  var o = {};

  function r(e) {
    if (o[e]) return o[e].exports;
    var t = (o[e] = {
      i: e,
      l: !1,
      exports: {},
    });
    return n[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  (r.m = n),
    (r.c = o),
    (r.d = function(e, t, n) {
      r.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: n,
        });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(e, '__esModule', {
          value: !0,
        });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', {
          enumerable: !0,
          value: t,
        }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ''),
    r((r.s = 0));
})([
  function(e, t, n) {
    n(1), (e.exports = n(2));
  },
  function(e, t, n) {
    var o, g, r, i, s;
    !(function(l) {
      sessionStorage || (l.sessionStorage = {}), localStorage || (l.localStorage = {});
      var d = localStorage,
        t = l.location.href.split('?')[0].replace('#', ''),
        u = null,
        i = performance && performance.timing,
        f = performance && 'function' == typeof performance.getEntries ? performance.getEntries() : null,
        c = sessionStorage.CUSTOMER_WEB_MONITOR_ID || 'webfunny_651',
        e = -1 === l.location.href.indexOf('https') ? 'http://' : 'https://',
        o = (l.location.href, ''),
        n = window.CO_ENVIRONMENT.EVENT_TRACKING_URL,
        p = '/server/upLog',
        h = '/server/upDLog',
        y = n + p,
        a = n + h,
        m = n,
        g = 'CUSTOMER_PV',
        s = 'LOAD_PAGE',
        v = 'HTTP_LOG',
        b = 'JS_ERROR',
        r = 'SCREEN_SHOT',
        w = 'ELE_BEHAVIOR',
        x = 'RESOURCE_LOAD',
        E = 'CUSTOMIZE_BEHAVIOR',
        S = 'VIDEOS_EVENT',
        O =
          (l.navigator.userAgent,
          new (function() {
            (this.getIp = function(n) {
              if ('1' != O.getCookie('webfunny_cj_status'))
                if (O.getCookie('webfunny_ip')) 'function' == typeof n && n();
                else {
                  var o = new Date();
                  o.setTime(o.getTime() + 864e5),
                    O.loadJs(
                      e + '//pv.sohu.com/cityjson?ie=utf-8',
                      function() {
                        var e = returnCitySN ? returnCitySN.cip : '',
                          t = encodeURIComponent(returnCitySN ? returnCitySN.cname : '');
                        (document.cookie = 'webfunny_ip=' + e + ';Path=/;domain=;expires=' + o.toGMTString()),
                          (document.cookie = 'webfunny_province=' + t + ';Path=/;domain=;expires=' + o.toGMTString()),
                          'function' == typeof n && n();
                      },
                      function() {
                        (document.cookie = 'webfunny_cj_status=1;Path=/;domain=;expires=' + o.toGMTString()),
                          'function' == typeof n && n();
                      }
                    );
                }
              else 'function' == typeof n && n();
            }),
              (this.getUuid = function() {
                var e = new Date().getTime();
                return (
                  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(e) {
                    var t = (16 * Math.random()) | 0;
                    return ('x' == e ? t : (3 & t) | 8).toString(16);
                  }) +
                  '-' +
                  e
                );
              }),
              (this.getCustomerKey = function() {
                var e = this.getUuid(),
                  t = O.getCookie('monitorCustomerKey');
                if (!t) {
                  var n = new Date();
                  n.setTime(n.getTime() + 15552e7),
                    (document.cookie =
                      'monitorCustomerKey=' + e + ';Path=/;domain=' + o + ';expires=' + n.toGMTString()),
                    (t = e);
                }
                return t;
              }),
              (this.getCookie = function(e) {
                var t,
                  n = new RegExp('(^| )' + e + '=([^;]*)(;|$)');
                return document.cookie.match(n) ? ((t = document.cookie.match(n)), unescape(t[2])) : '';
              }),
              (this.getPageKey = function() {
                var e = this.getUuid();
                return (
                  (d.monitorPageKey && /^[0-9a-z]{8}(-[0-9a-z]{4}){3}-[0-9a-z]{12}-\d{13}$/.test(d.monitorPageKey)) ||
                    (d.monitorPageKey = e),
                  d.monitorPageKey
                );
              }),
              (this.setPageKey = function() {
                d.monitorPageKey = this.getUuid();
              }),
              (this.addLoadEvent = function(e) {
                var t = l.onload;
                'function' != typeof l.onload
                  ? (l.onload = e)
                  : (l.onload = function() {
                      t(), e();
                    });
              }),
              (this.addOnclickForDocument = function(e) {
                var t = document.onclick;
                'function' != typeof document.onclick
                  ? (document.onclick = e)
                  : (document.onclick = function() {
                      t(), e();
                    });
              }),
              (this.ajax = function(e, t, n, o, r) {
                try {
                  var i = l.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                  i.open(e, t, !0),
                    i.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
                    (i.onreadystatechange = function() {
                      if (4 == i.readyState) {
                        var t = {};
                        try {
                          t = i.responseText ? JSON.parse(i.responseText) : {};
                        } catch (e) {
                          console.error(i.responseText), (t = {});
                        }
                        'function' == typeof o && o(t);
                      } else 'function' == typeof r && r();
                    });
                  var s = JSON.stringify(n || {});
                  i.send('data=' + s);
                } catch (e) {
                  console.warn(e);
                }
              }),
              (this.initDebugTool = function() {
                var s = d.wmUserInfo ? JSON.parse(d.wmUserInfo) : {},
                  t = {};
                for (key in d)
                  'function' == typeof d[key] || -1 != k.indexOf(key) || 1e3 < d[key].length || (t[key] = d[key]);
                try {
                  t = O.b64EncodeUnicode(JSON.stringify(t));
                } catch (e) {
                  t = '';
                }
                var n = {};
                for (key in sessionStorage)
                  'function' == typeof sessionStorage[key] ||
                    -1 != k.indexOf(key) ||
                    1e3 < sessionStorage[key].length ||
                    (n[key] = sessionStorage[key]);
                try {
                  n = O.b64EncodeUnicode(JSON.stringify(n));
                } catch (e) {
                  n = '';
                }
                var e = O.b64EncodeUnicode(document.cookie);

                function o(e) {
                  for (var t = [], n = e.length, o = 0; o < n; o++) t.push(e[o]);
                  var r = {};
                  (r.log = t), (r.userId = s.userId), (r.happenTime = new Date().getTime());
                  var i = '';
                  try {
                    i = l.LZString.compressToEncodedURIComponent(JSON.stringify(r));
                  } catch (e) {
                    i = 'Lz convert fail';
                  }
                  return i;
                }
                O.ajax(
                  'POST',
                  a,
                  {
                    localInfo: t,
                    sessionInfo: n,
                    cookieInfo: e,
                  },
                  function() {}
                );
                var r = console.log,
                  i = console.warn;
                (console.log = function() {
                  var e = o(arguments);
                  return (
                    'connected' === d.ds &&
                      O.ajax(
                        'POST',
                        a,
                        {
                          consoleInfo: e,
                        },
                        function() {}
                      ),
                    r.apply(console, arguments)
                  );
                }),
                  (console.warn = function() {
                    var e = o(arguments);
                    return (
                      'connected' === d.ds &&
                        O.ajax(
                          'POST',
                          a,
                          {
                            warnInfo: e,
                          },
                          function() {}
                        ),
                      i.apply(console, arguments)
                    );
                  });
              }),
              (this.encryptObj = function(e) {
                if (e instanceof Array) {
                  for (var t = [], n = 0; n < e.length; ++n) t[n] = this.encryptObj(e[n]);
                  return t;
                }
                if (e instanceof Object) {
                  t = {};
                  for (var n in e) t[n] = this.encryptObj(e[n]);
                  return t;
                }
                return (
                  50 < (e += '').length && (e = e.substring(0, 10) + '****' + e.substring(e.length - 9, e.length)), e
                );
              }),
              (this.getDevice = function() {
                var e = {},
                  t = navigator.userAgent,
                  n = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                  o = t.match(/(iPad).*OS\s([\d_]+)/),
                  r = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                  i = !o && t.match(/(iPhone\sOS)\s([\d_]+)/),
                  s = t.match(/Android\s[\S\s]+Build\//);
                if (
                  ((e.ios = e.android = e.iphone = e.ipad = e.androidChrome = !1),
                  (e.isWeixin = /MicroMessenger/i.test(t)),
                  (e.os = 'web'),
                  (e.deviceName = 'PC'),
                  n &&
                    ((e.os = 'android'),
                    (e.osVersion = n[2]),
                    (e.android = !0),
                    (e.androidChrome = 0 <= t.toLowerCase().indexOf('chrome'))),
                  (o || i || r) && ((e.os = 'ios'), (e.ios = !0)),
                  i && !r && ((e.osVersion = i[2].replace(/_/g, '.')), (e.iphone = !0)),
                  o && ((e.osVersion = o[2].replace(/_/g, '.')), (e.ipad = !0)),
                  r && ((e.osVersion = r[3] ? r[3].replace(/_/g, '.') : null), (e.iphone = !0)),
                  e.ios &&
                    e.osVersion &&
                    0 <= t.indexOf('Version/') &&
                    '10' === e.osVersion.split('.')[0] &&
                    (e.osVersion = t
                      .toLowerCase()
                      .split('version/')[1]
                      .split(' ')[0]),
                  e.iphone)
                ) {
                  e.deviceName = 'iphone';
                  var a = l.screen.width,
                    c = l.screen.height;
                  320 === a && 480 === c
                    ? (e.deviceName = 'iphone 4')
                    : 320 === a && 568 === c
                    ? (e.deviceName = 'iphone 5/SE')
                    : 375 === a && 667 === c
                    ? (e.deviceName = 'iphone 6/7/8')
                    : 414 === a && 736 === c
                    ? (e.deviceName = 'iphone 6/7/8 Plus')
                    : 375 === a && 812 === c && (e.deviceName = 'iphone X/S/Max');
                } else if (e.ipad) e.deviceName = 'ipad';
                else if (s) {
                  var d = s[0].split(';')[1].replace(/Build\//g, '');
                  e.deviceName = d.replace(/(^\s*)|(\s*$)/g, '');
                }
                if (-1 == t.indexOf('Mobile')) {
                  var u = navigator.userAgent.toLowerCase();
                  if (((e.browserName = '??????'), 0 < u.indexOf('msie'))) {
                    var f = u.match(/msie [\d.]+;/gi)[0];
                    (e.browserName = f.split('/')[0]), (e.browserVersion = f.split('/')[1]);
                  }
                  if (0 < u.indexOf('firefox')) {
                    f = u.match(/firefox\/[\d.]+/gi)[0];
                    (e.browserName = f.split('/')[0]), (e.browserVersion = f.split('/')[1]);
                  }
                  if (0 < u.indexOf('safari') && u.indexOf('chrome') < 0) {
                    f = u.match(/safari\/[\d.]+/gi)[0];
                    (e.browserName = f.split('/')[0]), (e.browserVersion = f.split('/')[1]);
                  }
                  if (0 < u.indexOf('chrome')) {
                    f = u.match(/chrome\/[\d.]+/gi)[0];
                    (e.browserName = f.split('/')[0]), (e.browserVersion = f.split('/')[1]);
                  }
                }
                return (e.webView = (i || o || r) && t.match(/.*AppleWebKit(?!.*Safari)/i)), e;
              }),
              (this.loadJs = function(e, t, n) {
                var o = document.createElement('script');
                (o.async = 1), (o.src = e), (o.onload = t), 'function' == typeof n && (o.onerror = n);
                var r = document.getElementsByTagName('script')[0];
                return r.parentNode.insertBefore(o, r), r;
              }),
              (this.b64EncodeUnicode = function(t) {
                try {
                  return btoa(
                    encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(e, t) {
                      return String.fromCharCode('0x' + t);
                    })
                  );
                } catch (e) {
                  return t;
                }
              });
          })()),
        T = O.getDevice(),
        _ = '',
        U = '',
        I = '',
        P = '',
        N = '',
        C = '',
        A = '',
        j = d.wmUserInfo ? JSON.parse(d.wmUserInfo) : {},
        k = [w, b, v, r, g, s, x, E, S];

      function L() {
        this.handleLogInfo = function(e, t) {
          var n = d[e] ? d[e] : '';
          switch (e) {
            case w:
              d[w] = n + JSON.stringify(t) + '$$$';
              break;
            case b:
              d[b] = n + JSON.stringify(t) + '$$$';
              break;
            case v:
              d[v] = n + JSON.stringify(t) + '$$$';
              break;
            case r:
              d[r] = n + JSON.stringify(t) + '$$$';
              break;
            case g:
              d[g] = n + JSON.stringify(t) + '$$$';
              break;
            case s:
              d[s] = n + JSON.stringify(t) + '$$$';
              break;
            case x:
              d[x] = n + JSON.stringify(t) + '$$$';
              break;
            case E:
              d[E] = n + JSON.stringify(t) + '$$$';
              break;
            case S:
              d[S] = n + JSON.stringify(t) + '$$$';
          }
        };
      }

      function R() {
        (this.h = new Date().getTime()),
          (this.a = c),
          (this.g = l.location.href.split('?')[0].replace('#', '')),
          (this.f = O.b64EncodeUnicode(encodeURIComponent(l.location.href))),
          (this.b = O.getCustomerKey());
        var e = d.wmUserInfo ? JSON.parse(d.wmUserInfo) : {};
        (this.c = e.userId),
          (this.d = O.b64EncodeUnicode(e.firstUserParam || '')),
          (this.e = O.b64EncodeUnicode(e.secondUserParam || ''));
      }

      function B(e, t, n, o, r) {
        R.apply(this),
          (this.i = e),
          (this.j = O.b64EncodeUnicode(j.projectVersion || '')),
          (this.k = O.getPageKey()),
          (this.l = T.deviceName),
          (this.m = T.os + (T.osVersion ? ' ' + T.osVersion : '')),
          (this.n = T.browserName),
          (this.o = T.browserVersion),
          (this.p = ''),
          (this.q = 'china'),
          (this.r = O.getCookie('webfunny_province')),
          (this.s = ''),
          (this.t = t),
          (this.u = n),
          (this.newStatus = o),
          (this.referrer = (r || '').split('?')[0].replace('#', ''));
      }

      function M(e, t, n, o, r, i, s, a, c, d, u, f) {
        R.apply(this),
          (this.i = e),
          (this.t = t),
          (this.v = n),
          (this.w = o),
          (this.x = r),
          (this.y = i),
          (this.z = s),
          (this.A = a),
          (this.B = c),
          (this.C = d),
          (this.D = u),
          (this.E = f);
      }

      function D(e, t, n, o, r, i, s) {
        R.apply(this),
          (this.i = e),
          (this.da = t),
          (this.G = O.b64EncodeUnicode(n)),
          (this.H = O.b64EncodeUnicode(o)),
          (this.I = O.b64EncodeUnicode(r)),
          (this.L = i),
          (this.M = O.b64EncodeUnicode(encodeURIComponent(s)));
      }

      function $(e, t, n, o) {
        R.apply(this),
          (this.i = e),
          (this.O = t),
          (this.k = O.getPageKey()),
          (this.l = T.deviceName),
          (this.m = T.os + (T.osVersion ? ' ' + T.osVersion : '')),
          (this.n = T.browserName),
          (this.o = T.browserVersion),
          (this.p = ''),
          (this.q = 'china'),
          (this.r = ''),
          (this.s = ''),
          (this.P = O.b64EncodeUnicode(n)),
          (this.Q = O.b64EncodeUnicode(o)),
          (this.R = '');
      }

      function V(e, t, n, o, r, i, s, a, c) {
        R.apply(this),
          (this.i = e),
          (this.g = t),
          (this.S = O.b64EncodeUnicode(encodeURIComponent(n))),
          (this.T = o),
          (this.U = r),
          (this.V = i),
          (this.W = ''),
          (this.X = O.b64EncodeUnicode(s)),
          (this.h = a),
          (this.u = c);
      }

      function J(e, t, n, o) {
        R.apply(this), (this.i = e), (this.Y = O.b64EncodeUnicode(t)), (this.Z = n), (this.aa = o || 'jpeg');
      }

      function F(e, t, n, o) {
        R.apply(this), (this.i = e), (this.ba = n), (this.ca = O.b64EncodeUnicode(encodeURIComponent(t))), (this.T = o);
      }

      function H(e, t, n, o, r) {
        (this.c = e), (this.da = t), (this.ea = n), (this.i = o), (this.Y = r), (this.h = new Date().getTime());
      }

      function q() {
        var e = l.location.href.split('?')[0].replace('#', '');
        t != e && (K(), (t = e));
      }

      function K() {
        O.setPageKey();
        var e = '';
        f && (e = f[0] && 'navigate' === f[0].type ? 'load' : 'reload');
        var t = O.getCookie('monitorCustomerKey');
        if (t) {
          var n = '',
            o = t ? t.match(/\d{13}/g) : [];
          if (o && 0 < o.length) {
            var r = parseInt(o[0], 10);
            n = 1e3 < new Date().getTime() - r ? 'old' : 'new';
          }
        }
        var i = document.referrer,
          s = new B(g, e, 0, n, i);

        function a() {
          var e = JSON.stringify(s) + '$$$';
          O.ajax(
            'POST',
            y,
            {
              logInfo: e,
            },
            function(e) {
              e &&
                e.data &&
                e.data.d &&
                ((d.ds = 'c' == e.data.d ? 'connected' : 'disconnect'),
                (d.sl = e.data.s || '012345'),
                (d.WEBFUNNY_WAIT_COUNT = e.data.w || '40'));
            },
            function() {}
          );
        }
        var c = d.ds;
        if (c) {
          if ('connected' === c) {
            if (u) return;
            O.initDebugTool();
          } else 'disconnect' === c && u && (u(), (u = null));
          a();
        } else
          O.getIp(function() {
            a();
          });
      }

      function X(e, t, n, o, r, i) {
        q();
        var s = t || '',
          a = i || '',
          c = '';
        s &&
          (c =
            'string' == typeof a
              ? a.split(': ')[0].replace('"', '')
              : JSON.stringify(a)
                  .split(': ')[0]
                  .replace('"', ''));
        var d = new $(b, e, c + ': ' + s, a);
        d.handleLogInfo(b, d);
      }

      function G() {
        var o = console.error;
        (console.error = function(e) {
          var t = (e && e.message) || e,
            n = e && e.stack;
          if (n) X('on_error', t, 0, 0, 0, n);
          else {
            if ('object' == typeof t)
              try {
                t = JSON.stringify(t);
              } catch (e) {
                t = '??????????????????';
              }
            X('console_error', t, 0, 0, 0, 'CustomizeError: ' + t);
          }
          return o.apply(console, arguments);
        }),
          (l.onerror = function(e, t, n, o, r) {
            X('on_error', e, 0, 0, 0, r ? r.stack : null);
          }),
          (l.onunhandledrejection = function(e) {
            var t = '',
              n = '';
            (n = 'object' == typeof e.reason ? ((t = e.reason.message), e.reason.stack) : ((t = e.reason), '')),
              X('on_error', t, 0, 0, 0, 'UncaughtInPromiseError: ' + n);
          });
      }

      function W() {
        function t(e) {
          var t = new CustomEvent(e, {
            detail: this,
          });
          l.dispatchEvent(t);
        }
        var n = l.XMLHttpRequest;

        function r(e, t) {
          if (f[e] && !0 !== f[e].uploadFlag) {
            var n = '';
            if (t && n.length < 500)
              try {
                n = t ? JSON.stringify(O.encryptObj(JSON.parse(t))) : '';
              } catch (e) {
                n = '';
              }
            else n = 'data is too long';
            var o = f[e].simpleUrl,
              r = new Date().getTime(),
              i = f[e].event.detail.responseURL,
              s = f[e].event.detail.status,
              a = f[e].event.detail.statusText,
              c = r - f[e].timeStamp;
            if (i && -1 == i.indexOf(p) && -1 == i.indexOf(h)) {
              var d = new V(v, o, i, s, a, '????????????', '', f[e].timeStamp, 0);
              d.handleLogInfo(v, d);
              var u = new V(v, o, i, s, a, '????????????', n, r, c);
              u.handleLogInfo(v, u), (f[e].uploadFlag = !0);
            }
          }
        }
        var f = [];
        (l.XMLHttpRequest = function() {
          var e = new n();
          return (
            e.addEventListener(
              'abort',
              function() {
                t.call(this, 'ajaxAbort');
              },
              !1
            ),
            e.addEventListener(
              'error',
              function() {
                t.call(this, 'ajaxError');
              },
              !1
            ),
            e.addEventListener(
              'load',
              function() {
                t.call(this, 'ajaxLoad');
              },
              !1
            ),
            e.addEventListener(
              'loadstart',
              function() {
                t.call(this, 'ajaxLoadStart');
              },
              !1
            ),
            e.addEventListener(
              'progress',
              function() {
                t.call(this, 'ajaxProgress');
              },
              !1
            ),
            e.addEventListener(
              'timeout',
              function() {
                t.call(this, 'ajaxTimeout');
              },
              !1
            ),
            e.addEventListener(
              'loadend',
              function() {
                t.call(this, 'ajaxLoadEnd');
              },
              !1
            ),
            e.addEventListener(
              'readystatechange',
              function() {
                t.call(this, 'ajaxReadyStateChange');
              },
              !1
            ),
            e
          );
        }),
          l.addEventListener('ajaxLoadStart', function(e) {
            if (
              e.currentTarget &&
              e.currentTarget.Ta &&
              e.currentTarget.Ta.src &&
              !e.currentTarget.Ta.src.indexOf('qq.com')
            ) {
              var t = {
                timeStamp: new Date().getTime(),
                event: e,
                simpleUrl: l.location.href.split('?')[0].replace('#', ''),
                uploadFlag: !1,
              };
              f.push(t);
            }
          }),
          l.addEventListener('ajaxLoadEnd', function() {
            for (var o = 0; o < f.length; o++) {
              if (
                e.currentTarget &&
                e.currentTarget.Ta &&
                e.currentTarget.Ta.src &&
                f.event.currentTarget.Ta.src.indexOf('qq.com')
              ) {
                continue;
              }

              if (!0 !== f[o].uploadFlag)
                if (0 < f[o].event.detail.status)
                  if ('blob' === (f[o].event.detail.responseType + '').toLowerCase())
                    !(function(t) {
                      var n = new FileReader();
                      n.onload = function() {
                        var e = n.result;
                        r(t, e);
                      };
                      try {
                        n.readAsText(f[o].event.detail.response, 'utf-8');
                      } catch (e) {
                        r(t, f[o].event.detail.response + '');
                      }
                    })(o);
                  else
                    try {
                      var e = f[o] && f[o].event && f[o].event.detail;
                      if (!e) return;
                      var t = e.responseType,
                        n = '';
                      ('' !== t && 'text' !== t) || (n = e.responseText),
                        'json' === t && (n = JSON.stringify(e.response)),
                        r(o, n);
                    } catch (e) {}
            }
          });
      }

      function z(e) {
        e &&
          e.record &&
          1 == e.record &&
          (q(),
          O.addOnclickForDocument(function(e) {
            if (!e) {
              return;
            }
            var t = '',
              n = '',
              o = '',
              r = e.target.tagName,
              i = '';
            'svg' != e.target.tagName &&
              'use' != e.target.tagName &&
              ((t = e.target.className),
              (n = e.target.placeholder || ''),
              (o = e.target.value || ''),
              200 < (i = e.target.innerText ? e.target.innerText.replace(/\s*/g, '') : '').length &&
                (i = i.substring(0, 100) + '... ...' + i.substring(i.length - 99, i.length - 1)),
              (i = i.replace(/\s/g, '')));
            var s = new D(w, 'click', t, n, o, r, i);
            s.handleLogInfo(w, s);
          }));
      }
      O.getCustomerKey(),
        (B.prototype = new L()),
        (M.prototype = new L()),
        (D.prototype = new L()),
        ($.prototype = new L()),
        (V.prototype = new L()),
        (J.prototype = new L()),
        (F.prototype = new L()),
        (H.prototype = new L()),
        new L(),
        (function() {
          O.getIp();
          var e = d.sl,
            t = ['0', '1', '2', '3', '4', '5'];
          e && (t = e.split(''));
          try {
            for (var n = 0; n < t.length; n++)
              switch (t[n]) {
                case '0':
                  K(), (_ = '??????...');
                  break;
                case '1':
                  l.addEventListener(
                    'error',
                    function(e) {
                      var t = e.target.localName,
                        n = '';
                      if (
                        ('link' === t ? (n = e.target.href) : 'script' === t && (n = e.target.src),
                        -1 != n.indexOf('pv.sohu.com/cityjson'))
                      ) {
                        var o = new F(x, n, t, '0');
                        o.handleLogInfo(x, o);
                      }
                    },
                    !0
                  ),
                    (P = '??????...');
                  break;
                case '2':
                  G(), (U = '??????...');
                  break;
                case '3':
                  W(), (I = '??????...');
                  break;
                case '4':
                  O.addLoadEvent(function() {
                    setTimeout(function() {
                      if (f) {
                        var e = 'load';
                        e = f[0] && 'navigate' === f[0].type ? 'load' : 'reload';
                        var t = i,
                          n = new M(s);
                        (n.loadType = e),
                          (n.loadPage = t.loadEventEnd - t.navigationStart),
                          (n.domReady = t.domComplete - t.responseEnd),
                          (n.redirect = t.redirectEnd - t.redirectStart),
                          (n.lookupDomain = t.domainLookupEnd - t.domainLookupStart),
                          (n.ttfb = t.responseStart - t.navigationStart),
                          (n.request = t.responseEnd - t.requestStart),
                          (n.loadEvent = t.loadEventEnd - t.loadEventStart),
                          (n.appcache = t.domainLookupStart - t.fetchStart),
                          (n.unloadEvent = t.unloadEventEnd - t.unloadEventStart),
                          (n.connect = t.connectEnd - t.connectStart),
                          n.handleLogInfo(s, n);
                      }
                    }, 1e3);
                  }),
                    (C = '??????...');
                  break;
                case '5':
                  z({
                    record: 1,
                  }),
                    (N = '??????...');
              }
            var o = 0,
              r = k;
            setInterval(function() {
              q();
              var e = parseInt(d.WEBFUNNY_WAIT_COUNT || '40', 10);
              if ((e = 'connected' == d.ds ? 5 : e) <= o) {
                for (var t = '', n = 0; n < r.length; n++) t += d[r[n]] || '';
                0 < t.length &&
                  O.ajax(
                    'POST',
                    y,
                    {
                      logInfo: t,
                    },
                    function(e) {
                      e &&
                        e.data &&
                        e.data.d &&
                        ((d.ds = 'c' == e.data.d ? 'connected' : 'disconnect'),
                        (d.sl = e.data.s || '012345'),
                        (d.WEBFUNNY_WAIT_COUNT = e.data.w || '40'));
                    },
                    function() {
                      for (var e = 0; e < r.length; e++) d[r[e]] = '';
                    }
                  ),
                  (o = 0);
              }
              o++;
            }, 200);
          } catch (e) {
            console.error('???????????????????????????', e);
          }
        })(),
        (l.webfunny = {
          wm_check: function() {
            var e = '????????????';
            return (
              console.log('start check:'),
              console.log('???????????????' + d.wmUserInfo),
              console.log('???????????????' + c),
              console.log('???????????????' + y),
              console.log('???????????????' + d.sl),
              console.log('...........'),
              console.log('PVUV?????????' + (_ || e)),
              console.log('?????????????????????' + (P || e)),
              console.log('JS???????????????' + (U || e)),
              console.log('?????????????????????' + (I || e)),
              console.log('?????????????????????' + (C || e)),
              console.log('???????????????' + (N || e)),
              console.log('????????????????????????' + (A || '????????????????????????????????????????????????????????????(API????????????)')),
              'end'
            );
          },
          wm_upload: function(e, t, n, o) {
            var r = new Date().toString(),
              i = {
                createTime: encodeURIComponent(r),
                happenTime: new Date().getTime(),
                uploadType: 'WM_UPLOAD',
                simpleUrl: encodeURIComponent(encodeURIComponent(e)),
                webMonitorId: c,
                recordType: t,
                recordIndex: n,
                description: o,
              },
              s = m,
              a = l.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            a.open('POST', s, !0),
              a.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
              a.send('data=' + JSON.stringify([i]));
          },
          wm_init_user: function(e, t, n) {
            return (
              e || console.warn('userId ???????????????0(?????????) ?????? ????????????'),
              n || console.warn('secondParam ???????????????0(?????????) ?????? ????????????'),
              t && (c = t + '_webmonitor'),
              (d.wmUserInfo = JSON.stringify({
                userId: e,
                userTag: t,
                secondUserParam: n,
              })),
              1
            );
          },
          wmInitUser: function(e, t) {
            return (
              e || console.warn('userId(??????????????????) ???????????????0(?????????) ?????? ?????????, ????????????????????????'),
              t || console.warn('projectVersion(???????????????) ???????????????0(?????????) ?????? ?????????, ????????????????????????'),
              (d.wmUserInfo = JSON.stringify({
                userId: e,
                projectVersion: t,
              })),
              (A = '????????????????????????userId=' + e + '???????????????' + t),
              1
            );
          },
          wm_screen_shot: function() {},
          wm_upload_picture: function(e, t, n) {
            var o = new J(r, t, e, n || 'jpeg');
            o.handleLogInfo(r, o);
          },
          wm_upload_extend_log: function(e, t, n, o, r) {
            var i = new H(e, t, n, o, r);
            i.handleLogInfo(E, i);
          },
        }),
        (function() {
          if ('function' == typeof l.CustomEvent) return;

          function e(e, t) {
            t = t || {
              bubbles: !1,
              cancelable: !1,
              detail: void 0,
            };
            var n = document.createEvent('CustomEvent');
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
          }
          (e.prototype = l.Event.prototype), (l.CustomEvent = e);
        })();
    })(window),
      (window.LZString =
        ((g = String.fromCharCode),
        (r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$'),
        (i = {}),
        (s = {
          compressToEncodedURIComponent: function(e) {
            return null == e
              ? ''
              : s._compress(e, 6, function(e) {
                  return r.charAt(e);
                });
          },
          decompressFromEncodedURIComponent: function(t) {
            return null == t
              ? ''
              : '' == t
              ? null
              : ((t = t.replace(/ /g, '+')),
                s._decompress(t.length, 32, function(e) {
                  return (function(e, t) {
                    if (!i[e]) {
                      i[e] = {};
                      for (var n = 0; n < e.length; n++) i[e][e.charAt(n)] = n;
                    }
                    return i[e][t];
                  })(r, t.charAt(e));
                }));
          },
          _compress: function(e, t, n) {
            if (null == e) return '';
            var o,
              r,
              i,
              s = {},
              a = {},
              c = '',
              d = '',
              u = '',
              f = 2,
              l = 3,
              p = 2,
              h = [],
              y = 0,
              m = 0;
            for (i = 0; i < e.length; i += 1)
              if (
                ((c = e.charAt(i)),
                Object.prototype.hasOwnProperty.call(s, c) || ((s[c] = l++), (a[c] = !0)),
                (d = u + c),
                Object.prototype.hasOwnProperty.call(s, d))
              )
                u = d;
              else {
                if (Object.prototype.hasOwnProperty.call(a, u)) {
                  if (u.charCodeAt(0) < 256) {
                    for (o = 0; o < p; o++) (y <<= 1), m == t - 1 ? ((m = 0), h.push(n(y)), (y = 0)) : m++;
                    for (r = u.charCodeAt(0), o = 0; o < 8; o++)
                      (y = (y << 1) | (1 & r)), m == t - 1 ? ((m = 0), h.push(n(y)), (y = 0)) : m++, (r >>= 1);
                  } else {
                    for (r = 1, o = 0; o < p; o++)
                      (y = (y << 1) | r), m == t - 1 ? ((m = 0), h.push(n(y)), (y = 0)) : m++, (r = 0);
                    for (r = u.charCodeAt(0), o = 0; o < 16; o++)
                      (y = (y << 1) | (1 & r)), m == t - 1 ? ((m = 0), h.push(n(y)), (y = 0)) : m++, (r >>= 1);
                  }
                  0 == --f && ((f = Math.pow(2, p)), p++), delete a[u];
                } else
                  for (r = s[u], o = 0; o < p; o++)
                    (y = (y << 1) | (1 & r)), m == t - 1 ? ((m = 0), h.push(n(y)), (y = 0)) : m++, (r >>= 1);
                0 == --f && ((f = Math.pow(2, p)), p++), (s[d] = l++), (u = String(c));
              }
            if ('' !== u) {
              if (Object.prototype.hasOwnProperty.call(a, u)) {
                if (u.charCodeAt(0) < 256) {
                  for (o = 0; o < p; o++) (y <<= 1), m == t - 1 ? ((m = 0), h.push(n(y)), (y = 0)) : m++;
                  for (r = u.charCodeAt(0), o = 0; o < 8; o++)
                    (y = (y << 1) | (1 & r)), m == t - 1 ? ((m = 0), h.push(n(y)), (y = 0)) : m++, (r >>= 1);
                } else {
                  for (r = 1, o = 0; o < p; o++)
                    (y = (y << 1) | r), m == t - 1 ? ((m = 0), h.push(n(y)), (y = 0)) : m++, (r = 0);
                  for (r = u.charCodeAt(0), o = 0; o < 16; o++)
                    (y = (y << 1) | (1 & r)), m == t - 1 ? ((m = 0), h.push(n(y)), (y = 0)) : m++, (r >>= 1);
                }
                0 == --f && ((f = Math.pow(2, p)), p++), delete a[u];
              } else
                for (r = s[u], o = 0; o < p; o++)
                  (y = (y << 1) | (1 & r)), m == t - 1 ? ((m = 0), h.push(n(y)), (y = 0)) : m++, (r >>= 1);
              0 == --f && ((f = Math.pow(2, p)), p++);
            }
            for (r = 2, o = 0; o < p; o++)
              (y = (y << 1) | (1 & r)), m == t - 1 ? ((m = 0), h.push(n(y)), (y = 0)) : m++, (r >>= 1);
            for (;;) {
              if (((y <<= 1), m == t - 1)) {
                h.push(n(y));
                break;
              }
              m++;
            }
            return h.join('');
          },
          _decompress: function(e, t, n) {
            var o,
              r,
              i,
              s,
              a,
              c,
              d,
              u = [],
              f = 4,
              l = 4,
              p = 3,
              h = '',
              y = [],
              m = {
                val: n(0),
                position: t,
                index: 1,
              };
            for (o = 0; o < 3; o += 1) u[o] = o;
            for (i = 0, a = Math.pow(2, 2), c = 1; c != a; )
              (s = m.val & m.position),
                (m.position >>= 1),
                0 == m.position && ((m.position = t), (m.val = n(m.index++))),
                (i |= (0 < s ? 1 : 0) * c),
                (c <<= 1);
            switch (i) {
              case 0:
                for (i = 0, a = Math.pow(2, 8), c = 1; c != a; )
                  (s = m.val & m.position),
                    (m.position >>= 1),
                    0 == m.position && ((m.position = t), (m.val = n(m.index++))),
                    (i |= (0 < s ? 1 : 0) * c),
                    (c <<= 1);
                d = g(i);
                break;
              case 1:
                for (i = 0, a = Math.pow(2, 16), c = 1; c != a; )
                  (s = m.val & m.position),
                    (m.position >>= 1),
                    0 == m.position && ((m.position = t), (m.val = n(m.index++))),
                    (i |= (0 < s ? 1 : 0) * c),
                    (c <<= 1);
                d = g(i);
                break;
              case 2:
                return '';
            }
            for (r = u[3] = d, y.push(d); ; ) {
              if (m.index > e) return '';
              for (i = 0, a = Math.pow(2, p), c = 1; c != a; )
                (s = m.val & m.position),
                  (m.position >>= 1),
                  0 == m.position && ((m.position = t), (m.val = n(m.index++))),
                  (i |= (0 < s ? 1 : 0) * c),
                  (c <<= 1);
              switch ((d = i)) {
                case 0:
                  for (i = 0, a = Math.pow(2, 8), c = 1; c != a; )
                    (s = m.val & m.position),
                      (m.position >>= 1),
                      0 == m.position && ((m.position = t), (m.val = n(m.index++))),
                      (i |= (0 < s ? 1 : 0) * c),
                      (c <<= 1);
                  (u[l++] = g(i)), (d = l - 1), f--;
                  break;
                case 1:
                  for (i = 0, a = Math.pow(2, 16), c = 1; c != a; )
                    (s = m.val & m.position),
                      (m.position >>= 1),
                      0 == m.position && ((m.position = t), (m.val = n(m.index++))),
                      (i |= (0 < s ? 1 : 0) * c),
                      (c <<= 1);
                  (u[l++] = g(i)), (d = l - 1), f--;
                  break;
                case 2:
                  return y.join('');
              }
              if ((0 == f && ((f = Math.pow(2, p)), p++), u[d])) h = u[d];
              else {
                if (d !== l) return null;
                h = r + r.charAt(0);
              }
              y.push(h), (u[l++] = r + h.charAt(0)), (r = h), 0 == --f && ((f = Math.pow(2, p)), p++);
            }
          },
        }))),
      void 0 ===
        (o = function() {
          return window.LZString;
        }.call(t, n, t, e)) || (e.exports = o);
  },
  function(e, t) {
    !(function(e) {
      var t = 'URLSearchParams' in e,
        n = 'Symbol' in e && 'iterator' in Symbol,
        s =
          'FileReader' in e &&
          'Blob' in e &&
          (function() {
            try {
              return new Blob(), !0;
            } catch (e) {
              return !1;
            }
          })(),
        o = 'FormData' in e,
        r = 'ArrayBuffer' in e;
      if (r)
        var i = [
            '[object Int8Array]',
            '[object Uint8Array]',
            '[object Uint8ClampedArray]',
            '[object Int16Array]',
            '[object Uint16Array]',
            '[object Int32Array]',
            '[object Uint32Array]',
            '[object Float32Array]',
            '[object Float64Array]',
          ],
          a = function(e) {
            return e && DataView.prototype.isPrototypeOf(e);
          },
          c =
            ArrayBuffer.isView ||
            function(e) {
              return e && -1 < i.indexOf(Object.prototype.toString.call(e));
            };

      function d(e) {
        if (('string' != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)))
          throw new TypeError('Invalid character in header field name');
        return e.toLowerCase();
      }

      function u(e) {
        return 'string' != typeof e && (e = String(e)), e;
      }

      function f(t) {
        var e = {
          next: function() {
            var e = t.shift();
            return {
              done: void 0 === e,
              value: e,
            };
          },
        };
        return (
          n &&
            (e[Symbol.iterator] = function() {
              return e;
            }),
          e
        );
      }

      function l(t) {
        (this.map = {}),
          t instanceof l
            ? t.forEach(function(e, t) {
                this.append(t, e);
              }, this)
            : Array.isArray(t)
            ? t.forEach(function(e) {
                this.append(e[0], e[1]);
              }, this)
            : t &&
              Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e]);
              }, this);
      }

      function p(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError('Already read'));
        e.bodyUsed = !0;
      }

      function h(n) {
        return new Promise(function(e, t) {
          (n.onload = function() {
            e(n.result);
          }),
            (n.onerror = function() {
              t(n.error);
            });
        });
      }

      function y(e) {
        var t = new FileReader(),
          n = h(t);
        return t.readAsArrayBuffer(e), n;
      }

      function m(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }

      function g() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function(e) {
            if ((this._bodyInit = e))
              if ('string' == typeof e) this._bodyText = e;
              else if (s && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
              else if (o && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
              else if (t && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
              else if (r && s && a(e))
                (this._bodyArrayBuffer = m(e.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer]));
              else {
                if (!r || (!ArrayBuffer.prototype.isPrototypeOf(e) && !c(e)))
                  throw new Error('unsupported BodyInit type');
                this._bodyArrayBuffer = m(e);
              }
            else this._bodyText = '';
            this.headers.get('content-type') ||
              ('string' == typeof e
                ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set('content-type', this._bodyBlob.type)
                : t &&
                  URLSearchParams.prototype.isPrototypeOf(e) &&
                  this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
          }),
          s &&
            ((this.blob = function() {
              var e = p(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData) throw new Error('could not read FormData body as blob');
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function() {
              return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y);
            })),
          (this.text = function() {
            var e = p(this);
            if (e) return e;
            if (this._bodyBlob)
              return (function(e) {
                var t = new FileReader(),
                  n = h(t);
                return t.readAsText(e), n;
              })(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(
                (function(e) {
                  for (var t = new Uint8Array(e), n = new Array(t.length), o = 0; o < t.length; o++)
                    n[o] = String.fromCharCode(t[o]);
                  return n.join('');
                })(this._bodyArrayBuffer)
              );
            if (this._bodyFormData) throw new Error('could not read FormData body as text');
            return Promise.resolve(this._bodyText);
          }),
          o &&
            (this.formData = function() {
              return this.text().then(w);
            }),
          (this.json = function() {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      (l.prototype.append = function(e, t) {
        (e = d(e)), (t = u(t));
        var n = this.map[e];
        this.map[e] = n ? n + ',' + t : t;
      }),
        (l.prototype.delete = function(e) {
          delete this.map[d(e)];
        }),
        (l.prototype.get = function(e) {
          return (e = d(e)), this.has(e) ? this.map[e] : null;
        }),
        (l.prototype.has = function(e) {
          return this.map.hasOwnProperty(d(e));
        }),
        (l.prototype.set = function(e, t) {
          this.map[d(e)] = u(t);
        }),
        (l.prototype.forEach = function(e, t) {
          for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
        }),
        (l.prototype.keys = function() {
          var n = [];
          return (
            this.forEach(function(e, t) {
              n.push(t);
            }),
            f(n)
          );
        }),
        (l.prototype.values = function() {
          var t = [];
          return (
            this.forEach(function(e) {
              t.push(e);
            }),
            f(t)
          );
        }),
        (l.prototype.entries = function() {
          var n = [];
          return (
            this.forEach(function(e, t) {
              n.push([t, e]);
            }),
            f(n)
          );
        }),
        n && (l.prototype[Symbol.iterator] = l.prototype.entries);
      var v = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

      function b(e, t) {
        var n = (t = t || {}).body;
        if (e instanceof b) {
          if (e.bodyUsed) throw new TypeError('Already read');
          (this.url = e.url),
            (this.credentials = e.credentials),
            t.headers || (this.headers = new l(e.headers)),
            (this.method = e.method),
            (this.mode = e.mode),
            n || null == e._bodyInit || ((n = e._bodyInit), (e.bodyUsed = !0));
        } else this.url = String(e);
        if (
          ((this.credentials = t.credentials || this.credentials || 'omit'),
          (!t.headers && this.headers) || (this.headers = new l(t.headers)),
          (this.method = (function(e) {
            var t = e.toUpperCase();
            return -1 < v.indexOf(t) ? t : e;
          })(t.method || this.method || 'GET')),
          (this.mode = t.mode || this.mode || null),
          (this.referrer = null),
          ('GET' === this.method || 'HEAD' === this.method) && n)
        )
          throw new TypeError('Body not allowed for GET or HEAD requests');
        this._initBody(n);
      }

      function w(e) {
        var r = new FormData();
        return (
          e
            .trim()
            .split('&')
            .forEach(function(e) {
              if (e) {
                var t = e.split('='),
                  n = t.shift().replace(/\+/g, ' '),
                  o = t.join('=').replace(/\+/g, ' ');
                r.append(decodeURIComponent(n), decodeURIComponent(o));
              }
            }),
          r
        );
      }

      function x(e, t) {
        (t = t || {}),
          (this.type = 'default'),
          (this.status = 'status' in t ? t.status : 200),
          (this.ok = 200 <= this.status && this.status < 300),
          (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
          (this.headers = new l(t.headers)),
          (this.url = t.url || ''),
          this._initBody(e);
      }
      (b.prototype.clone = function() {
        return new b(this, {
          body: this._bodyInit,
        });
      }),
        g.call(b.prototype),
        g.call(x.prototype),
        (x.prototype.clone = function() {
          return new x(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new l(this.headers),
            url: this.url,
          });
        }),
        (x.error = function() {
          var e = new x(null, {
            status: 0,
            statusText: '',
          });
          return (e.type = 'error'), e;
        });
      var E = [301, 302, 303, 307, 308];
      (x.redirect = function(e, t) {
        if (-1 === E.indexOf(t)) throw new RangeError('Invalid status code');
        return new x(null, {
          status: t,
          headers: {
            location: e,
          },
        });
      }),
        (e.Headers = l),
        (e.Request = b),
        (e.Response = x),
        (e.fetch = function(n, o) {
          return (
            (fetchHttpUrl = n),
            new Promise(function(r, e) {
              var t = new b(n, o),
                i = new XMLHttpRequest();
              (i.onload = function() {
                var e = i.responseType,
                  t = '',
                  n = {
                    status: i.status,
                    statusText: i.statusText,
                    headers: (function(e) {
                      var r = new l();
                      return (
                        e.split(/\r?\n/).forEach(function(e) {
                          var t = e.split(':'),
                            n = t.shift().trim();
                          if (n) {
                            var o = t.join(':').trim();
                            r.append(n, o);
                          }
                        }),
                        r
                      );
                    })(i.getAllResponseHeaders() || ''),
                  };
                (n.url = 'responseURL' in i ? i.responseURL : n.headers.get('X-Request-URL')),
                  ('' !== e && 'text' !== e) || (t = i.responseText),
                  'json' === e && (t = i.response);
                var o = 'response' in i ? i.response : t;
                r(new x(o, n));
              }),
                (i.onerror = function() {
                  console.error('Network request failed'), e(new TypeError('Network request failed'));
                }),
                (i.ontimeout = function() {
                  e(new TypeError('Network request failed'));
                }),
                i.open(t.method, t.url, !0),
                'include' === t.credentials && (i.withCredentials = !0),
                'responseType' in i && s && (i.responseType = 'blob'),
                t.headers.forEach(function(e, t) {
                  i.setRequestHeader(t, e);
                }),
                i.send(void 0 === t._bodyInit ? null : t._bodyInit);
            })
          );
        }),
        (e.fetch.polyfill = !0);
    })('undefined' != typeof self ? self : window);
  },
]);
